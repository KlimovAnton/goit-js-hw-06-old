const refs = {
    input: document.querySelector(`input`),
}

const validLength = Number(refs.input.dataset.length);

refs.input.addEventListener(`blur`, onFormBlurRed);
refs.input.addEventListener(`blur`, onFormBlurGreen);

function onFormBlurRed(event) {
    if (event.currentTarget.value.length !== validLength) {
        refs.input.classList.add(`invalid`);
        refs.input.classList.remove(`valid`);
    }    
}

function onFormBlurGreen(event) {
    if (event.currentTarget.value.length === validLength) {
        refs.input.classList.add(`valid`);
        refs.input.classList.remove(`invalid`);
    }
} 