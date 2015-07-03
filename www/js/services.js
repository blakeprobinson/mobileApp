angular.module('starter.services',[])

  .factory('User', function ($state){

    return {
        userInfo: function (user) {
          console.log('User.userInfo called')
          var currentUser = Parse.User.current();
          
          return currentUser;
        }
     };
  });