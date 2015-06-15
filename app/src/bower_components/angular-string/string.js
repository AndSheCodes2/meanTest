/**
@fileOverview

@toc
1. parseUrl
1.5. parseUrlParams
1.6. stripUrlParams

*/

'use strict';

angular.module('jackrabbitsgroup.angular-string', [])
.factory('jrgString', [ function () {
	//methods and properties (some of which may be private - explicitly state which methods and properties to expose/return at bottom)
	var privateObj ={
		/**
		Parses the url to retrieve GET params BEFORE Angular $location.url() is available..
		Handles hash (#) for non HTML5 History support (so '#/' will be stripped off too - though this may be an AngularJS specific routing solution??)
		@toc 1.
		@method parseUrl
		@param {Object} params
			@param {String} url The full url to parse
			@param {String} [rootPath =''] The part to strip off the beginning of the url (i.e. 'static/public/')
		@return {Object} A parsed section of the current url, i.e. for a url of: 'http://localhost/static/public/home?p1=yes&p2=no#hash1=h1&hash2=h2'
			@param {String} page The current url WITHOUT url GET params and WITHOUT hash params and WITHOUT the root path, i.e. 'home'
			@param {String} queryParams The GET params, i.e. 'p1=yes&p2=no'
			@param {Object} queryParamsObj An object version of the GET params, i.e. {p1:'yes', p2:'no'}
			@param {String} hashParams The hash params, i.e. 'hash1=h1&hash2=h2'
			@param {Object} hashParamsObj An object version of the hash params, i.e. {hash1:'h1', hash2:'h2'}
		
		@usage
			var parsedUrl =jrgString.parseUrl({url:'http://localhost/static/public/home?p1=yes&p2=no#hash1=h1&hash2=h2', rootPath:'static/public/'});
		*/
		parseUrl: function(params) {
			var ret ={page: '', queryParams: '', hashParams: ''};
			var defaults ={rootPath: ''};
			var xx;
			for(xx in defaults) {
				if(params[xx] ===undefined) {
					params[xx] =defaults[xx];
				}
			}
			
			var appPath =params.rootPath;
			var curUrl =params.url;
			//strip off host info (in case rootPath is just '/', don't want to match the slash in the host/protocol info)
			var posSlashes =curUrl.indexOf('://');
			if(posSlashes >-1) {
				curUrl =curUrl.slice(posSlashes+3, curUrl.length);
			}
			
			var pos1 =curUrl.indexOf(appPath);
			var curPage =curUrl.slice((pos1+appPath.length), curUrl.length);
			//handle Angular non HTML5 history by stripping off leading '#/'
			var posHash =curPage.indexOf("#/");
			if(posHash >-1) {
				curPage =curPage.slice((posHash+2), curPage.length);
			}
			
			//hash url params - this assumes '#' is AFTER '?', which is why we do it FIRST
			posHash =curPage.indexOf("#");
			var hashParams ='';
			if(posHash >-1) {
				hashParams =curPage.slice((posHash+1), curPage.length);
				curPage =curPage.slice(0, posHash);
			}
			
			//query / GET url params
			var posQuery =curPage.indexOf("?");
			var queryParams ='';
			if(posQuery >-1) {
				queryParams =curPage.slice((posQuery+1), curPage.length);
				curPage =curPage.slice(0, posQuery);
			}
			
			ret.page =curPage;
			ret.queryParams =queryParams;
			ret.queryParamsObj =this.parseUrlParams(queryParams, {});
			ret.hashParams =hashParams;
			ret.hashParamsObj =this.parseUrlParams(hashParams, {});
			return ret;
		},
		
		/**
		Turns a query (or hash) string (i.e. '?yes=no&maybe=so') into an object for easier reference
		@toc 1.5.
		@param {String} urlParams The query string (i.e. '?yes=no&maybe=so' or '#yes=no&maybe=so')
		@param {Object} [params]
		@return {Object} Key-value pairs for each parameter; i.e. {'yes':'no', 'maybe':'so'}
		
		@usage
			var parsedParams =jrgString.parseUrlParams('?yes=no&maybe=so', {});
		*/
		parseUrlParams: function(urlParams, params) {
			//strip out leading question mark, if present
			var questionMark =urlParams.indexOf("?");
			if(questionMark >-1) {
				urlParams =urlParams.slice((questionMark+1), urlParams.length);
			}
			
			//strip out leading hash, if present
			var hashTag =urlParams.indexOf("#");
			if(hashTag >-1) {
				urlParams =urlParams.slice((hashTag+1), urlParams.length);
			}
			
			var urlParamsObj ={};
			var parts =urlParams.split('&');
			var ii, subParts;
			for(ii =0; ii<parts.length; ii++) {
				subParts =parts[ii].split('=');
				urlParamsObj[subParts[0]] =subParts[1];
			}
			return urlParamsObj;
		},
		
		/**
		Takes a url and removes one or more parameters and adds a trailing '?' or '&' so more can be added
		@toc 1.6.
		@method stripUrlParams
		@param {String} url The original url (i.e. 'http://domain.com?p1=yes&p2=no&p3=maybe' )
		@param {Array} stripKeys The params to remove from the url (i.e. ['p2'] )
		@param {Object} [params]
			@param {Boolean} [returnParamsOnly] True to return JUST url params (i.e. cut out the domain - i.e. 'http://domain.com' would NOT be present in the returned url)
		@return {String} newUrl (i.e. 'http://domain.com?p1=yes&p3=maybe&' )
		
		@usage
			var newUrl =jrgString.stripUrlParams('http://domain.com?p1=yes&p2=no&p3=maybe', ['p2'], {});
		*/
		stripUrlParams: function(url, stripKeys, params) {
			var newUrl =url;
			var ii, patt1, patt2, patt3, patt4;
			
			//strip out host (everything before leading question mark) since need to add back in question mark later since need to search WITH a leading '?' and '&' otherwise can get improper matches (i.e. 'page' will improperly replace '&editpage=yes' if don't search with the leading character first)
			var host ='';
			var questionMark =newUrl.indexOf("?");
			if(questionMark >-1) {
				host =newUrl.slice(0, questionMark);
				newUrl =newUrl.slice((questionMark+0), newUrl.length);
			}
				
			for(ii =0; ii<stripKeys.length; ii++) {
				//note: order matters here - the last two will match the ENTIRE rest of the string so must only replace AFTER have searched for and replaced it earlier (i.e. before a '&') if it exists there!
				//must do these first
				patt1 =new RegExp('\\?'+stripKeys[ii]+'=.*&', 'i');		//for leading (first) parameter with non-ending parameter
				patt2 =new RegExp('&'+stripKeys[ii]+'=.*&', 'i');		//for all other (non-first) parameters with non-ending parameter
				//must do these last
				patt3 =new RegExp('\\?'+stripKeys[ii]+'=.*', 'i');		//for leading (first) parameter
				patt4 =new RegExp('&'+stripKeys[ii]+'=.*', 'i');		//for all other (non-first) parameters
				newUrl =newUrl.replace(patt1, '?').replace(patt2, '&').replace(patt3, '?').replace(patt4, '&');
			}
			
			//re-add leading question mark
			if(newUrl.length >0) {		//if have something left
				if(newUrl.indexOf('?') <0) {		//if no question mark, replace leading character (must be an '&') with a question mark
					newUrl ='?'+newUrl.slice(1, newUrl.length);
				}
			}
			
			//add appropriate trailing character so returned url can be added to without having to figure out if it should be a '?' or a '&'
			if(newUrl.indexOf('?') <0) {
				newUrl +='?';
			}
			else {
				var lastChar =newUrl[(newUrl.length-1)];
				if(lastChar !=='&' && lastChar !=='?') {		//don't have duplicate '&&' or '?&'
					newUrl +='&';
				}
			}
			
			if(params.returnParamsOnly ===undefined || !params.returnParamsOnly) {
				//add back in host
				newUrl =host+newUrl;
			}
			
			return newUrl;
		},
	};
	
	//select which methods/functions (and potentially properties) to expose
	return {
		parseUrl: privateObj.parseUrl,
		parseUrlParams: privateObj.parseUrlParams,
		stripUrlParams: privateObj.stripUrlParams
	};
}]);