(function(){
  var app = angular.module('imageService', []);

  app.service('imgSrvc', ['$http', function($http){
    var imageGetter = {

      getImages: function(searchQ){
        $http({
          method: 'GET',
          url: 'https://www.googleapis.com/customsearch/v1?key=AIzaSyAPWYmCq7eUubTb5i2bZrJ_93Z_073JYKc&q=puppies'
        }).then(function successCallback(response) {
            console.log('fasdfasdf', response);
          }, function errorCallback(response) {
            console.log('errrrrrr', response)
          });
      }

    };

    return imageGetter;
  }]);

})();