var app = angular.module('capstoneAngular', ['ui.router', 'templates']);

app.config(['$locationProvider', '$stateProvider',
function($locationProvider, $stateProvider){
  $locationProvider.html5Mode({
    enabled: true,
    requireBase: false
  });

  $stateProvider
    .state('home', {
        url: '/',
        templateUrl: 'home.html',
        controller: 'EpisodeCtrl'
    });
}]);
