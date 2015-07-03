angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $state) {

  //to update scope with user info
  $scope.$on('$ionicView.enter', function() {
    $scope.currentUser = Parse.User.current();
    console.log('ionicview at start of app ctrl called')
  });
  
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

    var email = $scope.loginData.email;
    var password = $scope.loginData.password;

    Parse
      .User
      .logIn(email, password, {
        success: function(user) {
          $scope.closeLogin();
          $state.go('app.map');

          //From parse docs
          $scope.currentUser = Parse.User.current();

        },
        error: function(user, error) {
          alert("Error: " + error.code + " " + error.message);
        }
      });
  };

  //Go to create profile
  $scope.createProfile = function() {
    $scope.modal.hide();
    $state.go('app.createProfile');

  };

  //Perform logout action
  $scope.logout = function() {
    //From parse docs
    Parse.User.logOut();
    $scope.currentUser = Parse.User.current();
    //console.log($scope.currentUser);

  };


})



// working with these two scopes and "curent user"


