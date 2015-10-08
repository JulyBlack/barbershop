var link = document.querySelector(".login");
var loginForm = document.querySelector(".modal-content");
var close = document.querySelector(".modal-content .modal-content-close");
var form = loginForm.querySelector("form");
var login = loginForm.querySelector("[name=login]");
var password = loginForm.querySelector("[name=password]");
var storage = localStorage.getItem("login");

link.addEventListener("click", function(event){
  event.preventDefault();
  loginForm.classList.add("modal-content-show");
  if (storage){
    login.value = storage;
	password.focus();
  } else{
    login.focus();
  }
});

close.addEventListener("click", function(event){
  loginForm.classList.remove("modal-content-show");
});

form.addEventListener("submit", function(event){
  if (!(login.value && password.value)){
    event.preventDefault();
  } else{
    localStorage.setItem("login", login.value);	
  }
});

window.addEventListener("keydown", function(event){
  if (event.keyCode == 27){
    if (loginForm.classList.contains("modal-content-show")){
      loginForm.classList.remove("modal-content-show");
	}
  }
});

var contacts = document.querySelector(".main-map");
var modalMap = document.querySelector(".modal-content-map");
var closeMap = document.querySelector(".modal-content-map .modal-content-close");

contacts.addEventListener("click", function(event){
  event.preventDefault();
  modalMap.classList.add("modal-content-show");
});

closeMap.addEventListener("click", function(event){
  modalMap.classList.remove("modal-content-show");
});

window.addEventListener("keydown", function(event){
  if (event.keyCode == 27){
    if (modalMap.classList.contains("modal-content-show")){
      modalMap.classList.remove("modal-content-show");
	}
  }
});