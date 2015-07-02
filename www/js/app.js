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

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

  .state('app', {
    url: "/app",
    abstract: true,
    templateUrl: "templates/menu.html",
    controller: 'AppCtrl'
  })

  .state('app.location', {
    url: "/location",
    views: {
      'menuContent': {
        templateUrl: "templates/location.html",
        controller: "MapCtrl"
      }
    }
  })

  .state('app.browse', {
    url: "/browse",
    views: {
      'menuContent': {
        templateUrl: "templates/browse.html"
      }
    }
  })
    .state('app.playlists', {
      url: "/playlists",
      views: {
        'menuContent': {
          templateUrl: "templates/playlists.html"
          // controller: 'PlaylistsCtrl'
        }
      }
    })

  .state('app.createProfile', {
    url: "/createProfile",
    views: {
      'menuContent': {
        templateUrl: "templates/createProfile.html",
        controller: 'ProfileCtrl'
      }
    }
  })

  .state('app.editProfile', {
    url: "/editProfile",
    views: {
      'menuContent': {
        templateUrl: "templates/editProfile.html",
        controller: 'ProfileCtrl'
      }
    }
  });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/playlists');
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
