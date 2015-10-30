(function(){
  var app = angular.module('imageDirectives', []);

  app.directive('searchBar', function(){
    return{
      restrict: 'E',
      scope: {
        search: '=',
        tag: '='
      },
      templateUrl: "app/views/searchbar.html"
    };
  });

  app.directive('gallery', function(){
    return{
      restrict: 'E',
      scope: {
        images: '='
      },
      templateUrl: "app/views/gallery.html"
    };
  });

  app.directive('more', function(){
    return{
      restrict: 'E',
      scope: {
        more: '='
      },
      templateUrl: "app/views/more.html"
    };
  });

})();