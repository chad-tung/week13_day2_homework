var MovieView = require('./views/movieView');

var app = function() {
  var url = "/movies"
  console.log("Hello world!");
  makeRequest(url, requestComplete);
};

var makeRequest = function(url, callback) {
  var request = new XMLHttpRequest;
  request.open('GET', url);
  request.addEventListener('load', callback);
  request.send();
};

var requestComplete = function() {
  if(this.status != 200) return;
  var jsonString = this.responseText;
  var movies = JSON.parse(jsonString);
  var ui = new MovieView(movies);
};

window.addEventListener('load', app);
