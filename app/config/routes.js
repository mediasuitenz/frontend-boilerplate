'use strict';


module.exports = function($routeProvider) {
  $routeProvider.when('/', {
    templateUrl: 'views/index.html',
    controller: 'IndexController'
  });
};
