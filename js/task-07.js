const refs = {
    input: document.querySelector(`#font-size-control`),
    text: document.querySelector(`#text`),
} 

const inputValue = refs.input.value;

refs.input.addEventListener(`input`, onFormScroll);

function onFormScroll(event) {
    refs.text.style.fontSize = event.currentTarget.value + `px`;
}