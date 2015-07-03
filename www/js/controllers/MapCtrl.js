angular.module('starter.controllers')

.controller('MapCtrl', function($scope) {
  console.log($scope);

  //http://www.w3schools.com/html/html5_geolocation.asp

  function getLocation() {
      if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(showPosition);
      } else { 
        alert("Geolocation is not supported by this browser.");
      }
  }

  function showPosition(position) {
      $scope.latitude = position.coords.latitude; 
      $scope.longitude = position.coords.longitude;
      console.log($scope);

      var latLng = L.latLng($scope.latitude, $scope.longitude);
      //http://leafletjs.com/examples/quick-start.html
      var map = L.map('map').setView(latLng, 13);
      console.log(map);

      L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
        attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
        maxZoom: 18,
        id: 'blakeprobinson.a085ba71',
        accessToken: 'pk.eyJ1IjoiYmxha2Vwcm9iaW5zb24iLCJhIjoiNDc2YjEyYzFkZjMwNmE2MGRkZTMzZTIxNzQ3MTQ1NzYifQ.lGMQD9KTbuXvHh1M0DOV5Q'
      }).addTo(map);


      var marker = L.marker(latLng).addTo(map);

  }

  getLocation();

})