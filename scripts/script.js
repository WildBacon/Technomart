var showBtn = document.querySelector('.show-btn');;
var modalContent = document.querySelector('.modal-content');
var yourName = document.querySelector('.your-name');
var yourEmail = document.querySelector('.your-email');

showBtn.addEventListener('click', function(event)) {
  event.preventDefault();
  modalContent.classList.add('modal-content-show');
  yourName.focus();
};
