angular.module('starter.controllers', [])
	.controller('UserCtrl', ['User', '$scope', '$state', '$ionicModal', function (User, $scope, $state, $ionicModal, currentUser) {   

	//to update scope with user info
      
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
      	Parse.User.logOut();
      	console.log(Parse.User.current())
      	$scope.user = '';
      };



      // $scope.$on('$ionicView.enter', function() {
      //   $scope.currentUser = Parse.User.current();
      //   console.log($scope.currentUser);
      // });


      $scope.user={};

      $scope.create=function(){

          var user = new Parse.User();
          user.set('username', $scope.user.email);
          user.set('firstName', $scope.user.firstName);
          user.set('lastName', $scope.user.lastName);
          user.set('password', $scope.user.password);
          user.set('email', $scope.user.email);
          user.set('homeTown', $scope.user.homeTown);


          user.signUp(null, {
            success: function(user) {
              // Hooray! Let them use the app now.
              $state.go('app.map');
              $scope.currentUser = Parse.User.current();
            },
            error: function(user, error) {
              // Show the error message somewhere and let the user try again.
              alert("Error: " + error.code + " " + error.message);
            }
          });
          console.log($scope.user);

      };

      $scope.edit = function () {
        var user = Parse.User.current();
        user.set('firstName', $scope.user.firstName);
        user.set('lastName', $scope.user.lastName);
        user.set('homeTown', $scope.user.homeTown);

        user.save({
          firstName: $scope.user.firstName,
          lastName: $scope.user.lastName,
          homeTown: $scope.user.homeTown
        }, {
            success: function(user) {
              // Hooray! Let them use the app now.
              $state.go('app.map');
              $scope.currentUser = Parse.User.current();
            },
            error: function(user, error) {
              // Show the error message somewhere and let the user try again.
              alert("Error: " + error.code + " " + error.message);
            }
          });
      };
}]);