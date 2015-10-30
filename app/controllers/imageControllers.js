// deckController.js
(function(){
  var app = angular.module('imageControllers', ['imageService', 'ngSanitize']);

  app.controller('imgCtrl', ['$scope','$sce','imgSrvc', function($scope, $sce, imgSrvc){
    var getImages = imgSrvc.getImages;
    $scope.tag = '';
    $scope.search = function(){
      getImages($scope.tag, function(images){
        console.log(images)
        $scope.images = images;
      })
      $scope.tag = '';
    }


  }]);

})();