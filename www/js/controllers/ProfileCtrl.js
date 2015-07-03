angular.module('starter.controllers')
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
              $state.go('app.location');
              $scope.currentUser = Parse.User.current();
            },
            error: function(user, error) {
              // Show the error message somewhere and let the user try again.
              alert("Error: " + error.code + " " + error.message);
            }
          })
      };
}]);