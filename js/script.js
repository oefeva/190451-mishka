// modal
var link = document.querySelectorAll('.modal-btn');

if (link.length > 0) {
  var modal = document.querySelector('.modal');
  var overlay = document.querySelector('.modal__overlay');

  for (var i = 0; i < link.length; i++) {
    link[i].addEventListener('click', function(event) {
      event.preventDefault();
      modal.classList.add('modal--show');
      overlay.classList.add('modal__overlay--show');
    })
  }

  var setupKeyDownHandler = function(event) {
    if (event.keyCode === 27) {
      modal.classList.remove("modal--show");
    }
  };

  document.addEventListener('keydown', function() {
    setupKeyDownHandler(event);
  });
}
