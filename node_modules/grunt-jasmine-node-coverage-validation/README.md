# grunt-jasmine-node-coverage-validation
Grunt task for jasmine-node using istanbul for code coverage. Validates coverage configuration and fails the task if under the code coverage threshold. Forked off grunt-jasmine-node-coverage by Jarrod Ribble.

There are 4 code coverage threshold values (branches, functions, statements, lines)supported. 

Each threshold value can be between 0 and 100 percent.

failTask=true is used to flag if task will fail on a missed code coverage threshold.

failTask=false undefined will not fail the task on a missed code coverage threshold. This is the default.

    coverage: {
         options : {
            failTask: true,
            branches : 100 ,
            functions: 100,
            statements:100,
            lines:100
          }
    },

## Getting Started
Install this grunt plugin next to your project's grunt.js gruntfile with: `npm install grunt-jasmine-node-coverage-validation`

Then add this line to your project's `grunt.js` grunt file:


```javascript
grunt.initConfig({
  jasmine_node: {
    coverage: {
         options : {
            failTask: true,
            branches : 100 ,
            functions: 100,
            statements:100,
            lines:100
          }
    },
    options: {
      forceExit: true,
      match: '.',
      matchall: false,
      extensions: 'js',
      specNameMatcher: 'spec',
      junitreport: {
        report: false,
        savePath : "./build/reports/jasmine/",
        useDotNotation: true,
        consolidate: true
      }
    }
  }
});

grunt.loadNpmTasks('grunt-jasmine-node-coverage-validation');

grunt.registerTask('default', 'jasmine_node');
```

## Bugs

Help us squash them by submitting an issue that describes how you encountered it; please be as specific as possible including operating system, node, grunt, and grunt-jasmine-node-coverage-validation versions.

## Release History

see [GitHub Repository](grunt-jasmine-node-coverage-validation).

## License
Copyright (c) 2013 "nagrajn" Nagraj Naidu & contributors.

Based on grunt-jasmine-node (https://github.com/jasmine-contrib/grunt-jasmine-node-coverage) 
Copyright (c) 2013 "jribble" Jarrod Ribble & contributors.

Based on grunt-jasmine-node (https://github.com/jasmine-contrib/grunt-jasmine-node) 
Copyright (c) 2012 "s9tpepper" Omar Gonzalez & contributors.
Licensed under the MIT license.
