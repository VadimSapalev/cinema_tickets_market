document.addEventListener('DOMContentLoaded', function() {
  var button = document.getElementById('film1-button');
  button.addEventListener('click', function() {
      window.location.href = 'movie_pages/movie1_page.html'; 
  });
});
document.addEventListener('DOMContentLoaded', function() {
  var button = document.getElementById('film2-button');
  button.addEventListener('click', function() {
      window.location.href = 'movie_pages/movie2_page.html'; 
  });
});
document.addEventListener('DOMContentLoaded', function() {
  var button = document.getElementById('film3-button');
  button.addEventListener('click', function() {
      window.location.href = 'movie_pages/movie3_page.html'; 
  });
});
document.addEventListener('DOMContentLoaded', function() {
  var button = document.getElementById('film4-button');
  button.addEventListener('click', function() {
      window.location.href = 'movie_pages/movie4_page.html';
  });
});
document.addEventListener('DOMContentLoaded', function() {
  var button = document.getElementById('film5-button');
  button.addEventListener('click', function() {
      window.location.href = 'movie_pages/movie5_page.html';
  });
});
document.addEventListener('DOMContentLoaded', function() {
  var button = document.getElementById('film6-button');
  button.addEventListener('click', function() {
      window.location.href = 'movie_pages/movie6_page.html';
  });
});
document.addEventListener('DOMContentLoaded', function(){ 
  var button = document.getElementById('film7-button');
  button.addEventListener('click', function() {
      window.location.href = 'movie_pages/movie7_page.html'; 
  })});

document.addEventListener('DOMContentLoaded', function() {
    var buttons = document.querySelectorAll('.seat');

    buttons.forEach(function(button) {
        button.addEventListener('click', function() {
            var userChoice = confirm('Ви впевнені, що хочете купити квиток?');

            if (userChoice) {
                button.style.backgroundColor = 'red';
                button.disabled = true;
                button.classList.add('disabled');
            }
        });
    });
});