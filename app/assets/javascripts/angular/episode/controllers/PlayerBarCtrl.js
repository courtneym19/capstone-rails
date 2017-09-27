var app = angular.module('capstoneAngular');

app.controller('PlayerBarCtrl', ['$scope', 'EpisodePlayer', 'Episode',
  function($scope, EpisodePlayer, Episode) {
  $scope.EpisodePlayer = EpisodePlayer;

  $scope.episodes = Episode.getEpisodes();


}]);
