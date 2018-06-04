/*
Phonograph 1.0.1 (http://github.com/sebastianjacobs/phonograph)
Built by Sebastian Jacobs (http://sebastianjacobs.com)
Licensed under the MIT license
*/
music.factory('musicControl', function () {
  var _flags = {
    playTitle: false,
    playMute: false,
    titleSet: false
  }
  var player = new Audio("files/example.mp3");
  return {
    flags: _flags,
    playMusic: playMusic,
    pauseMusic: pauseMusic,
    stopMusic: stopMusic,
    muteMusic: muteMusic,
    unmuteMusic: unmuteMusic,
    playListMusic: playListMusic
  };
  function playMusic() {
    _flags.playTitle = true;
    player.play();
  };
  function pauseMusic() {
    _flags.playTitle = false;
    player.pause();
  };
  function stopMusic() {
    _flags.playTitle = false;
    player.pause();
    player.currentTime = 0;
  };
  function muteMusic() {
    _flags.playMute = true;
    player.muted = true;
  };
  function unmuteMusic() {
    _flags.playMute = false;
    player.muted = false;
  };
  function playListMusic(titleName, artistName, fileName) {
    _flags.playTitle = false;
    player.pause();
    player.currentTime = 0;
    player = new Audio("files/" + fileName);
    _flags.titleSet = true;
    _flags.playTitle = true;
    player.play();
  };
});
