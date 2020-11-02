const form = document.querySelector(".js-form"),
  input = form.querySelector("input"),
  greeting = document.querySelector(".js-greetings");

const USER_LS = "currentUser",
  SHOWING_CN = "showing";

function removeName(event) {
  if (USER_LS !== null) {
    greeting.classList.remove(SHOWING_CN);
    form.classList.add(SHOWING_CN);
    localStorage.removeItem(USER_LS);
  }
}

function saveName(text) {
  localStorage.setItem(USER_LS, text);
}

function handleSubmit(event) {
  event.preventDefault();
  const currentValue = input.value;
  paintGreeting(currentValue);
  saveName(currentValue);
}

function askForName() {
  form.classList.add(SHOWING_CN);
  form.addEventListener("submit", handleSubmit);
}

function paintGreeting(text) {
  form.classList.remove(SHOWING_CN);
  greeting.classList.add(SHOWING_CN);
  greeting.innerText = `Hello ${text}`;
}

function loadName() {
  const currentUser = localStorage.getItem(USER_LS);
  console.log("currentUser 1: " + currentUser);

  if (currentUser === null) {
    askForName();
  } else {
    paintGreeting(currentUser);
  }
  console.log("currentUser 2: " + currentUser);
  greeting.addEventListener("click", removeName);
}

function init() {
  loadName();
}

init();
