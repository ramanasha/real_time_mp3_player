/*
Phonograph 1.0.1 (http://github.com/sebastianjacobs/phonograph)
Built by Sebastian Jacobs (http://sebastianjacobs.com)
Licensed under the MIT license
*/
music.controller('musicController', function($scope, $rootScope, $location, musicControl) {
  $scope.titles = [
    {
      title: ' Maayavi',
      artist: 'PUSHPAVANAM KUPPUSAMI & KALPANA',
      album: 'DEVI SHRI PRASAD',
      genre: 'Rock',
      cover: 'new-divide.jpg',
      titleLength: '4:28',
      file: 'Kathadi-Pole.mp3'
    },
    {
      title: 'Nonaithen Vandhai',
      artist: 'K. S. Chithra, Anuradha Sriram',
      album: 'Far Away',
      genre: 'Electro',
      cover: 'far-away.jpg',
      titleLength: '3:03',
      file: 'Malligaiye-Malligaiye.mp3'
    },
    {
      title: 'Gentleman',
      artist: ' S. P. Balasubrahmanyam, Janaki',
      album: 'A.R.Rahman',
      genre: 'Rap',
      cover: 'suicide-squad.jpg',
      titleLength: '5.14',
      file: 'Ottagathai.mp3'
    },
    {
      title: 'Vallinam',
      artist: 'Kaleo',
      album: 'A/B',
      genre: 'Rock',
      cover: 'a-b.jpg',
      titleLength: '3:54',
      file: 'Vallinam.mp3'
    },
    {
      title: 'Gentleman',
      artist: 'Kaleo',
      album: 'A/B',
      genre: 'Rock',
      cover: 'a-b.jpg',
      titleLength: '3:39',
      file: 'Ottagathai.mp3'
    }
  ];
  $scope.musicFlags = musicControl.flags;
  $scope.playMusic = musicControl.playMusic;
  $scope.pauseMusic = musicControl.pauseMusic;
  $scope.stopMusic = musicControl.stopMusic;
  $scope.muteMusic = musicControl.muteMusic;
  $scope.unmuteMusic = musicControl.unmuteMusic;
  $scope.playListMusic = function(titleName, artistName, fileName) {
    $rootScope.titleName = titleName;
    $rootScope.artistName = artistName;
    $rootScope.fileName = fileName;
    musicControl.playListMusic(titleName, artistName, fileName);
  }
  $scope.location = $location.path();
  $rootScope.$on('$routeChangeSuccess', function() {
    $scope.location = $location.path();
  });
});
