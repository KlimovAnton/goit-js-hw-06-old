const refs = {
    form: document.querySelector(`.login-form`),
    inputs: document.querySelectorAll(`input`),
    formBtn: document.querySelector(`button`),
}

refs.form.addEventListener(`submit`, onFormSubmit)

function onFormSubmit(event) {
    event.preventDefault();

    refs.inputs.forEach((input) => {
        if (input.value.trim() === "") {
            alert("Заповніть форму")
        }
    });
    const formElements = event.currentTarget.elements;
    const mail = formElements.email.value;
    const password = formElements.password.value;
    const formData = {
        mail,
        password,
    }  
    console.log(formData) 

    refs.form.reset()
}

// const formElements = event.currentTarget.elements;

    // const mail = formElements.email.value;
    // const password = formElements.password.value;
    // console.log(`mail: `, mail)
    // console.log(`pass: `, password)


    // const formData = new FormData(event.currentTarget);
    //         formData.forEach((value, name) => {
    //             console.log(`${name} - ${value}`)
    //         }) 