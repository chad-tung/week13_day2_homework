var MovieView = function(movies) {
  this.render(movies)
}

MovieView.prototype = {
  render: function(movies) {
    console.log(movies)
    movies.forEach(function(movie) {
      var li = document.createElement('li');
      var text = document.createElement('p');
      var ul = document.getElementById('movies');
      text.innerText = movie.name + ": " + '"' + movie.genre + '"';
      li.appendChild(text);
      ul.appendChild(li);
    })
  }
}

module.exports = MovieView;
