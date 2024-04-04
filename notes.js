// get playlist from genre, go to playlist
// should be creating a tree
// explore playlists and artists




var settings = {
    "url": "https://api.spotify.com/v1/search?q=shoegaze&type=playlist&limit=20",
    "method": "GET",
    "timeout": 0,
    "headers": {
      "Authorization": auth
    },
  };
  
  $.ajax(settings).done(function (response) {
    console.log(response);
  });