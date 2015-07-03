angular.module('starter.controllers')
//https://blog.nraboy.com/2014/09/create-an-rss-reader-using-angularjs-and-ionicframework/

//also needed stack overflow post for jsonp - callback syntax.
	.controller("FeedCtrl", function($http, $scope) {
	 
	    $scope.init = function() {
	        $http.jsonp("http://ajax.googleapis.com/ajax/services/feed/load?callback=JSON_CALLBACK", { params: { "v": "1.0", "q": "http://www.npr.org/rss/rss.php?id=100", num: '8' } })
	            .success(function(data) {
	                $scope.rssTitle = data.responseData.feed.title;
	                $scope.rssUrl = data.responseData.feed.feedUrl;
	                $scope.rssSiteUrl = data.responseData.feed.link;
	                $scope.entries = data.responseData.feed.entries;
	            })
	            .error(function(data) {
	                console.log("ERROR: " + data);
	            });
	    };

	    $scope.browse = function(v) {
	        window.open(v, "_system", "location=yes");
	    };
	 
	})