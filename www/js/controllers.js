angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $state) {
  
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});
  
  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    //console.log('Doing login', $scope.loginData);

    //would be good to show user input error around email.

    Parse.User.logIn($scope.loginData.email, $scope.loginData.password, {
      success: function(user) {
        $scope.modal.hide();
        $state.go('app.location');

        //From parse docs
        $scope.currentUser = Parse.User.current();

      },
      error: function(user, error) {
        alert("Error: " + error.code + " " + error.message);
      }
    });
  };

  //Perform logout action
  $scope.logout = function() {
    //From parse docs
    Parse.User.logOut();
    $scope.currentUser = Parse.User.current();
    //console.log($scope.currentUser);

  };

})



// .controller('PlaylistsCtrl', function($scope) {
//   $scope.playlists = [
//     { title: 'Reggae', id: 1 },
//     { title: 'Chill', id: 2 },
//     { title: 'Dubstep', id: 3 },
//     { title: 'Indie', id: 4 },
//     { title: 'Rap', id: 5 },
//     { title: 'Cowbell', id: 6 }
//   ];
// })

.controller('ProfileCtrl', ['User', '$scope', '$state', function (User, $scope, $state) {
      $scope.user={};

      $scope.create=function(){
          console.log($scope.user);
          User.create($scope.user)

      };

      //from parse https://www.parse.com/docs/js/guide#users-properties

}]);
