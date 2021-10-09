const contactForm = document.querySelector("#contactForm");
const contactName = document.querySelector("#name");
const contactNameError = document.querySelector("#nameError");
const contactEmail = document.querySelector("#contactEmail");
const contactEmailError = document.querySelector("#contactEmailError");
const contactMessage = document.querySelector("#message");
const contactMessageError = document.querySelector("#messageError");
const contactButton = document.querySelector("#contactButton");
const contactSuccessMessage = document.querySelector(".contactSuccessMessage");


function checkIfButtonIsDisabled() {
    if (checkLength(contactName.value, 1) && checkLength(contactMessage.value, 9) && validateEmail(contactEmail.value)) {
        contactButton.disabled = false;
    } else {
        contactSuccessMessage.innerHTML = "";
        contactButton.disabled = true;
    }
}

contactName.addEventListener("keyup", checkIfButtonIsDisabled);
contactMessage.addEventListener("keyup", checkIfButtonIsDisabled);
contactEmail.addEventListener("keyup", checkIfButtonIsDisabled);


function submitForm(event) {

    event.preventDefault();

    contactSuccessMessage.innerHTML = '<div class="formSuccessMessage">Your message has been sent! Someone from our team will get back to you within the next three working days.</div>';

    contactForm.reset();
}

contactForm.addEventListener("submit", submitForm);


function checkLength(value, len) {
    if (value.trim().length >= len) {
        return true;
    } else {
        return false;
    }
}

function validateEmail(email) {
    const regEx = /\S+@\S+\.\S+/;
    const patternMatches = regEx.test(email);
    return patternMatches;
}



/* 
function validateContactForm() {

    event.preventDefault();

    if(checkLength(contactName.value, 0) === true) {
        contactNameError.style.display = "none";
    }
    else {
        contactNameError.style.display = "block";
    }

    if(validateEmail(contactEmail.value) === true) {
        contactEmailError.style.display = "none";
    }
    else {
        contactEmailError.style.display = "block";
    }

    if(checkLength(contactMessage.value, 9) === true) {
        contactMessageError.style.display = "none";
    }
    else {
        contactMessageError.style.display = "block";
    }

}

contactForm.addEventListener("submit", validateContactForm);


function displayMessage() {
    if (checkLength(contactName.value === true) && validateEmail(contactEmail.value === true) && checkLength(contactMessage.value === true)) {

        contactFormSuccessMessage.innerHTML = '<div class="contactFormSuccessMessage">Your message has been sent</div>';

        form.reset();

    } else {
        contactFormSuccessMessage.innerHTML = "";
    }
}



contactForm.addEventListener("submit", displayMessage);


function checkLength(value, len) {
if(value.trim().length > len) {
    return true;
} else {
    return false;
}
}

function validateEmail(email) {
    const regEx = /\S+@\S+\.\S+/;
    const patternMatches = regEx.test(email);
    return patternMatches;
} */