
module.exports = function (config) {
	config.set({
		basePath: '../',

		files: [
			//we need jQuery for test selectors (using 'find()'). NOTE: jquery must be included BEFORE angular for it to work (otherwise angular will just use jqLite)
			'test/lib/jquery/jquery-2.1.1.min.js',
			
			"bower_components/angular/angular.min.js",
			"bower_components/angular-route/angular-route.min.js",
			"bower_components/angular-sanitize/angular-sanitize.min.js",
			"bower_components/angular-touch/angular-touch.min.js",
			"bower_components/angular-animate/angular-animate.min.js",
			"bower_components/angular-cookies/angular-cookies.min.js",
			"bower_components/momentjs/min/moment.min.js",
			"bower_components/angular-array/array.min.js",
			"bower_components/angular-string/string.min.js",
			"bower_components/angular-forminput/forminput.min.js",
			"bower_components/angular-socket-io/socket.js",
			"lib/angular-ui-bootstrap/ui-bootstrap-custom-tpls-0.4.0.min.js",
			"lib/lawnchair/lawnchair-edit.js",
			"common/js/app.js",
			"modules/services/models/user/UserModel.js",
			"modules/services/config/config.js",
			"modules/services/http/http.js",
			"modules/services/auth/auth.js",
			"modules/services/storage/storage.js",
			"modules/services/nav/nav-config.js",
			"modules/services/nav/nav.js",
			"modules/services/socket/socket.js",
			"modules/services/error-msg/error-msg.js",
			"modules/directives/appalert/appalert.js",
			"modules/directives/login/login.js",
			"modules/directives/signup/signup.js",
			"modules/directives/socialAuthBtn/socialAuthBtn.js",
			"modules/directives/layout/layout.js",
			"modules/pages/layout/LayoutCtrl.js",
			"modules/pages/header/HeaderCtrl.js",
			"modules/pages/footer/FooterCtrl.js",
			"modules/pages/home/HomeCtrl.js",
			"modules/pages/login/LoginCtrl.js",
			"modules/pages/signup/SignupCtrl.js",
			"modules/pages/passwordReset/PasswordResetCtrl.js",
			"modules/pages/logout/LogoutCtrl.js",
			"modules/pages/userDelete/UserDeleteCtrl.js",
			"modules/pages/callback/callback-twitter-auth/CallbackTwitterAuthCtrl.js",
			"modules/pages/callback/callback-facebook-auth/CallbackFacebookAuthCtrl.js",
			"modules/pages/callback/callback-google-auth/CallbackGoogleAuthCtrl.js",
			"modules/pages/dev-test/test/TestCtrl.js",
			"modules/pages/dev-test/design/DesignCtrl.js",
			"modules/pages/dev-test/socketio/SocketioCtrl.js",
			"modules/pages/dev-test/social/SocialCtrl.js",
			"modules/pages/dev-test/e2e/E2eCtrl.js",

		
			// 'lib/angular/angular-*.js',
			'bower_components/angular-mocks/angular-mocks.js',

			// 'test/unit/**/*.js',
			
			// Test-Specs
			// '**/*.spec.js'
			// '**/spec.*.js'
			"bower_components/angular-socket-io/mock/socket-io.js",
			"common/js/app.spec.js",
			"modules/services/models/user/UserModel.spec.js",
			"modules/services/config/config.spec.js",
			"modules/services/http/http.spec.js",
			"modules/services/auth/auth.spec.js",
			"modules/services/storage/storage.spec.js",
			"modules/services/nav/nav.spec.js",
			"modules/services/socket/socket.spec.js",
			"modules/services/error-msg/error-msg.spec.js",
			"modules/directives/appalert/appalert.spec.js",
			"modules/directives/login/login.spec.js",
			"modules/directives/signup/signup.spec.js",
			"modules/directives/socialAuthBtn/socialAuthBtn.spec.js",
			"modules/directives/layout/layout.spec.js",
			"modules/pages/layout/LayoutCtrl.spec.js",
			"modules/pages/header/HeaderCtrl.spec.js",
			"modules/pages/footer/FooterCtrl.spec.js",
			"modules/pages/home/HomeCtrl.spec.js",
			"modules/pages/login/LoginCtrl.spec.js",
			"modules/pages/signup/SignupCtrl.spec.js",
			"modules/pages/passwordReset/PasswordResetCtrl.spec.js",
			"modules/pages/logout/LogoutCtrl.spec.js",
			"modules/pages/userDelete/UserDeleteCtrl.spec.js",
			"modules/pages/callback/callback-twitter-auth/CallbackTwitterAuthCtrl.spec.js",
			"modules/pages/callback/callback-facebook-auth/CallbackFacebookAuthCtrl.spec.js",
			"modules/pages/callback/callback-google-auth/CallbackGoogleAuthCtrl.spec.js",
			"modules/pages/dev-test/test/TestCtrl.spec.js",
			"modules/pages/dev-test/design/DesignCtrl.spec.js",
			"modules/pages/dev-test/socketio/SocketioCtrl.spec.js",
			"modules/pages/dev-test/social/SocialCtrl.spec.js",
			"modules/pages/dev-test/e2e/E2eCtrl.spec.js",

		],

		frameworks: ['jasmine'],

		autoWatch: true,

		// browsers: ['Chrome'],
		browsers: [],

		junitReporter: {
			outputFile: 'test_out/unit.xml',
			suite: 'unit'
		},
		
		/*
		//NOTE: this creates issues with Karma / does NOT show output (i.e. test failures or information) to the console (which basically renders Karma useless) so need TWO configurations - one for actual testing and debugging (this one - WITHOUT coverage) and one just for coverage - once you ALREADY know the tests all pass..
			- @todo - get a better grunt plugin / coverage handler that can do BOTH simultaneously
		//code coverage (with Instanbul - built into Karma)
		preprocessors: {
			"modules/services/models/user/UserModel.js":["coverage"],
			"modules/services/config/config.js":["coverage"],
			"modules/services/http/http.js":["coverage"],
			"modules/services/auth/auth.js":["coverage"],
			"modules/services/storage/storage.js":["coverage"],
			"modules/services/nav/nav-config.js":["coverage"],
			"modules/services/nav/nav.js":["coverage"],
			"modules/services/socket/socket.js":["coverage"],
			"modules/services/error-msg/error-msg.js":["coverage"],
			"modules/directives/appalert/appalert.js":["coverage"],
			"modules/directives/login/login.js":["coverage"],
			"modules/directives/signup/signup.js":["coverage"],
			"modules/directives/socialAuthBtn/socialAuthBtn.js":["coverage"],
			"modules/directives/layout/layout.js":["coverage"],
			"modules/pages/layout/LayoutCtrl.js":["coverage"],
			"modules/pages/header/HeaderCtrl.js":["coverage"],
			"modules/pages/footer/FooterCtrl.js":["coverage"],
			"modules/pages/home/HomeCtrl.js":["coverage"],
			"modules/pages/login/LoginCtrl.js":["coverage"],
			"modules/pages/signup/SignupCtrl.js":["coverage"],
			"modules/pages/passwordReset/PasswordResetCtrl.js":["coverage"],
			"modules/pages/logout/LogoutCtrl.js":["coverage"],
			"modules/pages/userDelete/UserDeleteCtrl.js":["coverage"],
			"modules/pages/callback/callback-twitter-auth/CallbackTwitterAuthCtrl.js":["coverage"],
			"modules/pages/callback/callback-facebook-auth/CallbackFacebookAuthCtrl.js":["coverage"],
			"modules/pages/callback/callback-google-auth/CallbackGoogleAuthCtrl.js":["coverage"],
			"modules/pages/dev-test/design/DesignCtrl.js":["coverage"],
			"modules/pages/dev-test/socketio/SocketioCtrl.js":["coverage"],
			"modules/pages/dev-test/social/SocialCtrl.js":["coverage"],
			"modules/pages/dev-test/e2e/E2eCtrl.js":["coverage"],

		},
		reporters: ['coverage'],
		coverageReporter: {
			type: 'html',
			// type: 'lcov',
			dir: 'coverage-angular/'
		}
		*/

		//https://github.com/karma-runner/karma/issues/598
		//https://github.com/CenterForOpenScience/osf.io/commit/4ac7ccd72e479c720dbe86ea2fcbd6acfc81e87f
		// If browser does not capture in given timeout [ms], kill it
		captureTimeout: 60000,
		// to avoid DISCONNECTED messages
		browserDisconnectTimeout : 10000, // default 2000
		browserDisconnectTolerance : 1, // default 0
		browserNoActivityTimeout : 60000, //default 10000
		
	});
};