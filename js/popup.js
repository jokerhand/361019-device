var feedback = document.querySelector(".write-us");
var feedbackOpen = document.querySelector(".modal__btn");
var feedbackClose = document.querySelector(".modal__close");
var map = document.querySelector(".map__popup");
var mapOpen = document.querySelector(".contacts__map");
var mapClose = document.querySelector(".map__close");
var form = feedback.querySelector(".write-us__form");
var userName = form.querySelector("[name=name]");
var email = form.querySelector("[name=email]");


function modalOpen(button, modal, buttonClose) {
 if(modal){
  button.addEventListener("click", function (event) {
    event.preventDefault();
    modal.classList.add("modal-show");
  });
  buttonClose.addEventListener("click", function (event) {
    event.preventDefault();
    if(modal.classList.contains("modal-error")){
      modal.classList.remove("modal-error");
    }
    modal.classList.remove("modal-show");
  });
  }
};

form.addEventListener("submit", function(event) {
  if(!userName.value || !email.value){
    event.preventDefault();
    if(feedback.classList.contains("modal-error")){
      feedback.classList.remove("modal-error");
    }
    feedback.offsetHeight;
    feedback.classList.add("modal-error");
  }
  else {
    localStorage.setItem('name', userName.value);
  }
});