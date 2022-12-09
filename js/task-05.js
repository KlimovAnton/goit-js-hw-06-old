const inputEl = document.querySelector(`#name-input`);
console.log(inputEl);

const titleEl = inputEl.nextElementSibling;
const nameEl = titleEl.querySelector(`#name-output`);
console.log(nameEl.textContent)

inputEl.addEventListener(`input`, onFormName);

function onFormName(event) {
    nameEl.textContent = event.currentTarget.value;
    if (!nameEl.textContent) {
        return (nameEl.textContent = `Anonymous`)
    }
}

