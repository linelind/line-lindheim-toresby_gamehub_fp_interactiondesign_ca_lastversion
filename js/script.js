const contactForm = document.querySelector("#contactForm");
const contactName = document.querySelector("#contactName");
const contactEmail = document.querySelector("#contactEmail");
const contactMessage = document.querySelector("#message");
const contactButton = document.querySelector("#contactButton");
const contactSuccessMessage = document.querySelector(".contactSuccessMessage");
const contactLinkShopping = document.querySelector(".contactLink_shopping");
const contactLinksContact = document.querySelector(".contactLink_contact");

function checkIfButtonIsDisabled() {
    if (checkLength(contactName.value, 1) && checkLength(contactMessage.value, 10) && validateEmail(contactEmail.value)) {
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

    contactLinkShopping.style.display = "block";
    contactLinksContact.style.display = "block";

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



