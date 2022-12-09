function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  body: document.querySelector(`body`),
  btn: document.querySelector(`.change-color`),
  color: document.querySelector(`.color`),
};

refs.btn.addEventListener(`click`, onFormSwitchColor);

function onFormSwitchColor(event) {
  refs.color.textContent = getRandomHexColor()
  refs.body.style.backgroundColor = getRandomHexColor()
}

