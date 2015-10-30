(function(){
  var app = angular.module('imageDirectives', []);

  app.directive('searchBar', function(){
    return{
      restrict: 'E',
      scope: {
        search: '=',
        tag: '='
      },
      templateUrl: "views/searchbar.html"
    };
  });

  app.directive('gallery', function(){
    return{
      restrict: 'E',
      scope: {
        images: '='
      },
      templateUrl: "views/gallery.html"
    };
  });

})();