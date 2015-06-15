# AndSheCodes2


## Quick Start

**NOTE: If you want to CLONE this EXISTING repository, see [cloning.md](docs/setup-running/cloning.md) instead.** Otherwise, if you want to build a NEW mean-seed from scratch using the Yeoman Generator, follow these steps below.

1. machine (global / program) installs (if you don't have them already)
	1. install git, nodejs, mongodb, phantomjs
	2. `sudo npm install -g grunt-cli yo bower generator-mean-seed yuidocjs forever less`
2. `yo mean-seed` (from the NEW directory you want to create the app in)
	1. `npm install && bower install` (if not already run successfully by Yeoman or any time `package.json` or `bower.json` change)
		1. If any bower issues (sometimes 1 or more packages will timeout), just re-run `bower update && bower install`
		2. If any npm issues, run `npm cache clean` (and optionally delete the troublesome package folders from the `node_modules` folder) then re-run `npm install`
	2. `./node_modules/protractor/bin/webdriver-manager update` (if not already run successfully by Yeoman)
	3. `grunt q` to build assets (if not already run successfully by Yeoman and any time a `*.less` (or `*.scss`) or `*.html` file changes)
3. start server and view app
	1. `node run.js` to start node server (make sure MongoDB is already running first)
	2. open a browser to `http://localhost:3000/` (or `https://localhost:3000/` if using https) to view the site/app
4. run tests
	1. `grunt`
5. (optional) Git remote (should have already been init'ed and commit'ed automatically)
	1. (optional) add a remote: `git remote add origin [url to repository]`



## Setup + Running (Longer Version)
- see [setup-detailed.md](docs/setup-running/setup-detailed.md) and [running.md](docs/setup-running/running.md) in the `docs` folder




## Updating
You CAN and SHOULD keep your project up to date with the core (seed) generator you used as it goes through version upgrades. Just re-run:

Ensure the generator is up to date:
```
npm install -g generator-mean-seed
```

Pull in updates to your project (core/seed - make sure to select the same core you used originally):
```
yo mean-seed
```
	



# mean
testing mean stack
