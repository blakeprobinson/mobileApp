angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $state) {
  
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  //to update scope with user info
  $scope.$on('$ionicView.enter', function() {
    $scope.currentUser = Parse.User.current();
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

// working with these two scopes and "curent user"

.controller('ProfileCtrl', ['User', '$scope', '$state', function (User, $scope, $state) {
      //to update scope with user info
      $scope.$on('$ionicView.enter', function() {
        $scope.currentUser = Parse.User.current();
        console.log($scope.currentUser);
      });


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
              $state.go('app.location');
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
        var user = Parse.User.current()
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
              $state.go('app.location');
              $scope.currentUser = Parse.User.current();
            },
            error: function(user, error) {
              // Show the error message somewhere and let the user try again.
              alert("Error: " + error.code + " " + error.message);
            }
          })
      };

      //from parse https://www.parse.com/docs/js/guide#users-properties

}]);
