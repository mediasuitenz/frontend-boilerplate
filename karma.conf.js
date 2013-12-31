'use strict';

// Karma configuration


module.exports = function(config){
  config.set({
    // base path, that will be used to resolve files and exclude
    basePath: '',
    // list of files / patterns to load in the browser
    files: [
      require.resolve('angular/lib/angular.min.js'),
      require.resolve('angular-resource/angular-resource.min.js'),
      require.resolve('angular-mocks/angular-mocks.js'),

      // 'app/bower_components/angular/angular.js',
      // 'app/bower_components/angular-mocks/angular-mocks.js',
      // 'app/bower_components/angular-resource/angular-resource.js',
      // 'app/bower_components/MockHttpRequest/lib/mock.js',
      // 'app/bower_components/angular-imageupload-directive/public/javascripts/imageupload.js',
      // 'app/bower_components/tinymce/tinymce.min.js',
      // 'app/bower_components/angular-ui-tinymce/src/tinymce.js',
      // 'app/bower_components/bignumber.js/bignumber.js',
      // 'app/bower_components/ngInfiniteScroll/ng-infinite-scroll.js',
      // 'app/scripts/*.js',
      // 'app/filters/*.js',
      // 'app/scripts/**/*.js',
      // 'test/mock/**/*.js',
      // 'app/**/*.js',
      'test/.specs.js'

    ],
    frameworks: ['jasmine'],

    // list of files to exclude
    exclude: [],

    // test results reporter to use
    // possible values: dots || progress || growl
    reporters: ['progress'],

    // web server port
    port: 8080,

    // cli runner port
    runnerPort: 9100,

    // enable / disable colors in the output (reporters and logs)
    colors: true,

    // level of logging
    // possible values: LOG_DISABLE || LOG_ERROR || LOG_WARN || LOG_INFO || LOG_DEBUG
    logLevel: config.LOG_INFO,

    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,

    // Start these browsers, currently available:
    // - Chrome
    // - ChromeCanary
    // - Firefox
    // - Opera
    // - Safari (only Mac)
    // - PhantomJS
    // - IE (only Windows)
    browsers: ['PhantomJS'],

    // If browser does not capture in given timeout [ms], kill it
    captureTimeout: 5000,

    // Continuous Integration mode
    // if true, it capture browsers, run tests and exit
    singleRun: false

  });
};
