// deckController.js
(function(){
  var app = angular.module('imageControllers', ['imageService']);

  app.controller('imgCtrl', ['$scope','imgSrvc', function($scope, imgSrvc){
    $scope.tag = '';
    var getImages = imgSrvc.getImages;
    var page = 1;
    $scope.search = function(){
      page = 1;
      getImages($scope.tag, page, function(images){
        $scope.images = images;
        $scope.more.alreadyDisplayingSome = true;
      })
    }

    $scope.more = {
      getMore: function(){
        page++;
        getImages($scope.tag, page, function(images){
          for(var i = 0; i < images.length; i++){
            $scope.images.push(images[i]);
          }
        })
      },

      alreadyDisplayingSome: false
    }

  }]);

})();