	// create the module and name it scotchApp
	var scotchApp = angular.module('scotchApp', ['ngRoute']);

	// configure our routes
	scotchApp.config(function($routeProvider) {
		$routeProvider

			// route for the home page
			.when('/', {
				templateUrl : 'pages/cine_e_edoamna.html',
				controller  : 'mainController'
			})

			// route for the about page
			.when('/cine_e_edoamna', {
				templateUrl : 'pages/cine_e_edoamna.html'
			})

			.when('/elevii_scolii', {
				templateUrl : 'pages/elevii_scolii.html'
			})

			.when('/admitere', {
				templateUrl : 'pages/admitere.html'
			})

			.when('/regulament', {
				templateUrl : 'pages/regulament.html'
			})

			.when('/informatii_elevi', {
				templateUrl : 'pages/informatii_elevi.html'
			})

			// route for the contact page
			.when('/scurt_istoric', {
				templateUrl : 'pages/scurt_istoric.html'
			});
	});

	// create the controller and inject Angular's $scope
	scotchApp.controller('mainController', function($scope) {
		// create a message to display in our view
		$scope.message = 'Everyone come and see how good I look!';
	});
