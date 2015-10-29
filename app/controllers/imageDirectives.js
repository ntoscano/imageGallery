(function(){
  var app = angular.module('imageDirectives', []);

  app.directive('searchBar', function(){
    return{
      restrict: 'E',
      scope: {
        //stuff goes here
      },
      templateUrl: "app/views/searchbar.html"
    };
  });

  app.directive('gallery', function(){
    return{
      restrict: 'E',
      scope: {
        //stuff goes here
      },
      templateUrl: "app/views/gallery.html"
    };
  });

})();