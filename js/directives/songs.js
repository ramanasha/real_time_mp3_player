/*
Phonograph 1.0.1 (http://github.com/sebastianjacobs/phonograph)
Built by Sebastian Jacobs (http://sebastianjacobs.com)
Licensed under the MIT license
*/
music.directive('songs', function() {
  return {
    restrict: 'E',
    scope: {
      info: '='
    },
    templateUrl: 'js/directives/songs.html',
    controller: 'musicController'
  };
});
