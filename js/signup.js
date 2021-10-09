const signupForm = document.querySelector("#signupForm");
const signupName = document.querySelector("#fullname");
const signupNameError = document.querySelector("#fullnameError");
const signupEmail = document.querySelector("#signupEmail");
const signupEmailError = document.querySelector("#signupEmailError");
const password = document.querySelector("#password");
const passwordError = document.querySelector("#passwordError");
const button = document.querySelector("button");
const signupLink = document.querySelector(".signupLink");
const signupSuccess = document.querySelector(".signupSuccess");


function validateForm(event) {
    event.preventDefault();

    if(checkLengthSignup(signupName.value, 0) === true) {
        signupNameError.style.display = "none";
    } 
    else {
        signupNameError.style.display = "block";
    }
    
    if(validateEmail(signupEmail.value) === true) {
        signupEmailError.style.display = "none";
    } 
    else {
        signupEmailError.style.display = "block";
    } 

    if(checkLengthSignup(password.value, 7) === true) {
        passwordError.style.display = "none";
    } 
    else {
        passwordError.style.display = "block";
    }

}

signupForm.addEventListener("submit", validateForm);


function checkLengthSignup(value, len) {
    if (value.trim().length > len) {
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

function activateLink() {
    if (checkLengthSignup(signupName.value, 0) && checkLengthSignup(password.value, 7) && validateEmail(signupEmail.value)) {
        button.style.display = "none";
        signupLink.style.display  ="block";
        signupSuccess.innerHTML = '<div class="formSuccessMessage">Welcome to the hub! You can now go to your account page.</div>';
    } else {
        button.style.display = "block";
        signupLink.style.display  ="none";
    }
}

signupForm.addEventListener("submit", activateLink);
