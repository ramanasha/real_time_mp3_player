/*
Phonograph 1.0.1 (http://github.com/sebastianjacobs/phonograph)
Built by Sebastian Jacobs (http://sebastianjacobs.com)
Licensed under the MIT license
*/
music.directive('genres', function() {
  return {
    restrict: 'E',
    scope: {
      info: '='
    },
    templateUrl: 'js/directives/genres.html',
    controller: 'musicController'
  };
});
