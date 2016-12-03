var showBtn = document.querySelector('.show-btn');
var modalContent = document.querySelector('.modal-content');
var cancel = document.querySelector('.cancel');
var yourName = document.querySelector('.your-name');
var storage = localStorage.getItem('yourName');
var yourEmail = document.querySelector('.your-email');
var form = document.querySelector('.modal-content form');
var text = document.querySelector('.modal-content textarea');

showBtn.addEventListener('click', function(event) {
  event.preventDefault();
  modalContent.classList.add('modal-content-show');
  yourName.focus();
    if (storage) {
      yourName.value = storage;
      yourEmail.focus(); 
    } else {
      yourName.focus();
    }
});

cancel.addEventListener('click', function(event) {
  event.preventDefault();
  modalContent.classList.remove('modal-content-show');
});

window.addEventListener ('keydown', function(event){
  if (event.keyCode == 27) {
    if (modalContent.classList.contains('modal-content-show')) {
      modalContent.classList.remove('modal-content-show')
    }
  }
});

form.addEventListener('submit', function(event) {
  if (!(yourName.value && yourEmail.value && text.value)) {
    event.preventDefault();
    modalContent.classList.add('modal-error');
} else {
    localStorage.setItem('yourName', yourName.value);
}
});