(function(){
  var app = angular.module('imageService', []);

  app.service('imgSrvc', ['$http', function($http){
    var imageGetter = {

      getImages: function(searchQ, page, cb){
        $http({
          method: 'GET',
          url: 'https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=73149c6b7912be9eeade744e5cc35324&tags='+searchQ+'&format=json&per_page=25&page='+page
        }).then(function successCallback(response) {
            data = response.data.substring(14, response.data.length - 1);
            data = JSON.parse(data);
            cb(data.photos.photo);
          }, function errorCallback(response) {
            console.log('error', response)
          });
      }

    };

    return imageGetter;
  }]);

})();