angular.module('starter.services',[]).factory('User',['$http','PARSE_CREDENTIALS','$state', function ($http,PARSE_CREDENTIALS,$state){
  return {
      getAll:function(){
          return $http.get('https://api.parse.com/1/classes/User',{
              headers:{
                  'X-Parse-Application-Id': PARSE_CREDENTIALS.APP_ID,
                  'X-Parse-REST-API-Key':PARSE_CREDENTIALS.REST_API_KEY,
              }
          });
      },
      get:function(id){
          return $http.get('https://api.parse.com/1/classes/User/'+id,{
              headers:{
                  'X-Parse-Application-Id': PARSE_CREDENTIALS.APP_ID,
                  'X-Parse-REST-API-Key':PARSE_CREDENTIALS.REST_API_KEY,
              }
          });
      },
      create:function(data){
          //from parse docs: 
          //https://www.parse.com/docs/js/guide#users-signing-up
          var user = new Parse.User();
          user.set('username', data.firstName + ' ' + data.lastName);
          user.set('firstName', data.firstName);
          user.set('lastName', data.lastName);
          user.set('password', data.password);
          user.set('email', data.email);


          return user.signUp(null, {
            success: function(user) {
              // Hooray! Let them use the app now.
              $state.go('app.location');
            },
            error: function(user, error) {
              // Show the error message somewhere and let the user try again.
              alert("Error: " + error.code + " " + error.message);
            }
          });


          // return $http.post('https://api.parse.com/1/users',data,{
          //     headers:{
          //         'X-Parse-Application-Id': PARSE_CREDENTIALS.APP_ID,
          //         'X-Parse-REST-API-Key':PARSE_CREDENTIALS.REST_API_KEY,
          //         'Content-Type':'application/json'
          //     }
          // });
      },
      edit:function(id,data){
          return $http.put('https://api.parse.com/1/classes/users/'+id,data,{
              headers:{
                  'X-Parse-Application-Id': PARSE_CREDENTIALS.APP_ID,
                  'X-Parse-REST-API-Key':PARSE_CREDENTIALS.REST_API_KEY,
                  'Content-Type':'application/json'
              }
          });
      },
      delete:function(id){
          return $http.delete('https://api.parse.com/1/users/'+id,{
              headers:{
                  'X-Parse-Application-Id': PARSE_CREDENTIALS.APP_ID,
                  'X-Parse-REST-API-Key':PARSE_CREDENTIALS.REST_API_KEY,
                  'Content-Type':'application/json'
              }
          });
      }
   };
}])

.value('PARSE_CREDENTIALS',{
    APP_ID: 'NYstRGxt89XOpI05J2YzdlgH0HCbzwSsKtzs2x1Y',
    REST_API_KEY:'lzOocqN5Ge0ewyODp5NG6BJeCW7x1w7zERKwN2E8'
});