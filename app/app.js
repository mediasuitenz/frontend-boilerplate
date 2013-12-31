'use strict';
// This file is the glue for the project. It is where the application is defined.
// All the external angular modules are included here.

var angular = require('angular/index-browserify.js');

// Angular dependencies
require('angular-route/angular-route.min.js');
require('angular-resource/angular-resource.js');

// The jQuery dependency for this is included in the index.html page.
// This is for cdn and simplicity purposes
require('angular-sortable/src/sortable.js');

// Create the angular app with all the dependencies
var app = angular.module(
  'exampleApp',
  [
    'ngRoute',
    'ngResource'
  ]
);

// Load and register any angular modules
// All modules should export an object that can be registered
// without needing to be wrapped in a function etc.

// Configuration

app.config(require('./config/routes.js'));

// Define constants Eg.
// app.value('EXAMPLE_CONSTANT', 'example value');

// Controllers

app.controller(
  'IndexController',
  require('./controllers/indexController.js')
);

// app.controller(
//   '<example>Controller',
//   require('./controllers/<example>Controller.js')
// );

// Directives

// app.directive(
//   '<exampleDirective>',
//   require('./directives/<exampleDirective>/<exampleDirective>.js')
// );

// Factories

// app.factory(
//   '<ExampleResource>',
//   require('./factories/<exampleResource>.js')
// );

// Services

// app.service(
//   '<example>Service',
//   require('./services/<example>Service.js')
// );
