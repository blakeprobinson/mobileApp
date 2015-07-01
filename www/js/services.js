angular.module('mobileApp.services',[]).factory('Profile',['$http',function($http){
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
          return $http.post('https://api.parse.com/1/classes/User',data,{
              headers:{
                  'X-Parse-Application-Id': PARSE_CREDENTIALS.APP_ID,
                  'X-Parse-REST-API-Key':PARSE_CREDENTIALS.REST_API_KEY,
                  'Content-Type':'application/json'
              }
          });
      },
      edit:function(id,data){
          return $http.put('https://api.parse.com/1/classes/User/'+id,data,{
              headers:{
                  'X-Parse-Application-Id': PARSE_CREDENTIALS.APP_ID,
                  'X-Parse-REST-API-Key':PARSE_CREDENTIALS.REST_API_KEY,
                  'Content-Type':'application/json'
              }
          });
      },
      delete:function(id){
          return $http.delete('https://api.parse.com/1/classes/User/'+id,{
              headers:{
                  'X-Parse-Application-Id': PARSE_CREDENTIALS.APP_ID,
                  'X-Parse-REST-API-Key':PARSE_CREDENTIALS.REST_API_KEY,
                  'Content-Type':'application/json'
              }
          });
      }
   }
}]);

.value('PARSE_CREDENTIALS',{
    APP_ID: 'NYstRGxt89XOpI05J2YzdlgH0HCbzwSsKtzs2x1Y',
    REST_API_KEY:'lzOocqN5Ge0ewyODp5NG6BJeCW7x1w7zERKwN2E8'
});