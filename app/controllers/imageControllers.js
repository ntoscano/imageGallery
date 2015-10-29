// deckController.js
(function(){
  var app = angular.module('imageControllers', ['imageService', 'ngSanitize']);
  
  app.controller('imgCtrl', ['$scope','$sce','imgSrvc', function($scope, $sce, imgSrvc){
    window.getImages = imgSrvc.getImages;


  }]);

})();