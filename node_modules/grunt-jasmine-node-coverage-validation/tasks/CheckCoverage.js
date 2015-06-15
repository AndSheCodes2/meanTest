
"use strict";

var CheckCoverage = function(cov, opts) {

	var ret = false;


	if (!cov) return false;

	if (!opts) return true;

	if((!opts.branches) && 
		(!opts.functions) &&
		(!opts.lines) &&
		(!opts.statements)) return true;

	if (!opts.failTask) return true;

	if ((!!opts.branches) && (cov.branches.pct < opts.branches)) {
		return false;
	} else {
		ret = true;
	}

	if ((!!opts.functions) && (cov.functions.pct < opts.functions)) {
		return false;
	} else {
		ret = true;
	}

	if ((!!opts.lines) && (cov.lines.pct < opts.lines)) {
		return false;
	} else {
		ret = true;
	}

	if ((!!opts.statements) && (cov.statements.pct < opts.statements)) {
		return false;
	} else {
		ret = true;
	}		
	return ret;

}

module.exports = CheckCoverage;