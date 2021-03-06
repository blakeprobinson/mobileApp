// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    //added Parse.initialize after getting error
    Parse.initialize('NYstRGxt89XOpI05J2YzdlgH0HCbzwSsKtzs2x1Y', 'uEk9olZ83k8pGyF5hujgsg0aYhyiHffBofzXO3Bh');
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

// .run(function($state, User) {
//   var currentUser = User.userInfo();
//   if (currentUser) {
//       $state.go('app.map');
//   } else {
//       $state.go('app.createProfile')
//   }

// })

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

  .state('app', {
    url: "/app",
    abstract: true,
    templateUrl: "templates/menu.html",
    controller: 'UserCtrl'
  })

  .state('app.map', {
    url: "/map",
    views: {
      'menuContent': {
        templateUrl: "templates/map.html",
        controller: "MapCtrl"
      }
    }
  })

  .state('app.feed', {
    url: "/feed",
    views: {
      'menuContent': {
        templateUrl: "templates/feed.html",
        controller: 'FeedCtrl'
      }
    }
  })

  .state('app.createProfile', {
    url: "/createProfile",
    views: {
      'menuContent': {
        templateUrl: "templates/createProfile.html",
        controller: 'UserCtrl'
      }
    }
  })

  .state('app.editProfile', {
    url: "/editProfile",
    views: {
      'menuContent': {
        templateUrl: "templates/editProfile.html",
        controller: 'UserCtrl'
      }
    }
  });


  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/createProfile');
});

// Add the 'ionic.service.core' module to your main angular module:
angular.module('test', ['ionic.service.core'])
// Identify App
.config(['$ionicAppProvider', function($ionicAppProvider) {
  // Identify app
  $ionicAppProvider.identify({
    //I wouldn't normally put these identifiers on github,
    //but, since this is a project app, I will leave them.
    // The App ID for the server
    app_id: 'c69901e8',
    // The API key all services will use for this app
    api_key: '15ae69dbdfd7e40e08c85f5b3398a8cdfeae2ec762c7920f'
  });
}])
