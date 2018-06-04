/*
Phonograph 1.0.1 (http://github.com/sebastianjacobs/phonograph)
Built by Sebastian Jacobs (http://sebastianjacobs.com)
Licensed under the MIT license
*/
var music = angular.module("music", [
 'ngRoute',
 'angular.filter'
]);
music.config(function($routeProvider) {
  $routeProvider
  .when("/", {
    redirectTo: '/songs'
  })
  .when("/songs", {
    template: "<songs></songs>"
  })
  .when("/albums", {
    template: "<albums></albums>"
  })
  .when("/artists", {
    template: "<artists></artists>"
  })
  .when("/genres", {
    template: "<genres></genres>"
  })
  .otherwise({
    redirectTo: '/songs'
  });
});
