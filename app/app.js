'use strict';


angular.module('ImageGallery', [
  'ngSanitize',
  'ngRoute',
  'imageDirectives',
  'imageControllers'
  ]).config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/'});
}]);

