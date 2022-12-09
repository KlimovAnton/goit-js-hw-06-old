const counterEl = document.querySelector(`#counter`);

// btn
const btnFirstEl = counterEl.firstElementChild;
const btnLastEl = counterEl.lastElementChild;

btnFirstEl.addEventListener('click', onFormDecrement);

btnLastEl.addEventListener('click', onFormIncrement);

// value 
const valueEl = btnFirstEl.nextElementSibling;

let counterStart = 0;

function onFormDecrement(event) {
    counterStart -= 1;   
    valueEl.textContent = counterStart;
}

function onFormIncrement(event) {
    counterStart += 1;
    valueEl.textContent = counterStart;
}

