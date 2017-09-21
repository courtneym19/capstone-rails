var app = angular.module('capstoneAngular');

app.controller('EpisodeCtrl', ['$scope', 'EpisodePlayer', 'Episode',
  function($scope, EpisodePlayer, Episode) {
  $scope.EpisodePlayer = EpisodePlayer;

  $scope.episodes = Episode.getEpisodes();






  // $scope.addEpisode = function(name, num, day, desc, url){
  //   if (!valid()) {
  //     return false;
  //   }
  //   $scope.episodes.unshift({
  //     title: $scope.episode.title,
  //     number: $scope.episode.number,
  //     date: $scope.episode.date,
  //     description: $scope.episode.description,
  //     audioUrl: $scope.episode.audioUrl
  //   });
  //   $scope.episode.title = name;
  //   $scope.episode.number = num;
  //   $scope.episode.date = day;
  //   $scope.episode.description = desc;
  //   $scope.episode.audioUrl = url
  // }
  //
  // valid = function() {
  //   return !!$scope.episode &&
  //     !!$scope.episode.title && !!$scope.episode.number &&
  //     !!$scope.episode.date && !!$scope.episode.description && !!$scope.episode.audioUrl;
  // }

}]);
