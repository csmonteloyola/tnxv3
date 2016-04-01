// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
(function(){

var app = angular.module('TnxModule', ['ionic', 'chart.js']);

app.config(function($stateProvider, $urlRouterProvider) {
	
	$stateProvider.state('listing',{
		url:'/listing',
		templateUrl: 'templates/listing.html'
	});

	$stateProvider.state('form',{
		url:'/form',
		templateUrl: 'templates/form.html'
	});

	$stateProvider.state('visual',{
		url:'/visual',
		templateUrl: 'templates/visual.html'
	});


	$urlRouterProvider.otherwise('/listing');


})




}());