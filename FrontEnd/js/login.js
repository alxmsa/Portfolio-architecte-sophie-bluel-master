/* const form = document.getElementById("form-login");
const login = document.getElementById("email");
const password = document.getElementById("password");
const error = document.getElementById("msg-error");

form.addEventListener('submit', (event) => {

    if (login.value.length <= 0){
        event.preventDefault();
        error.style.display = "block";
        login.style.border = "1px solid red";
    }
    if (password.value.length  < 5){
        event.preventDefault();
        error.style.display = "block";
        password.style.border = "1px solid red";
    }
}) */
const messageError = document.getElementById("msg-error");
const loginUrl = "http://localhost:5678/api/users/login";

const form = document.forms['form-login'];
const submitButton = form.elements['submit-form'];
submitButton.addEventListener("click", function (event) {
    event.preventDefault();
    console.log(form, submitButton);
    if (form.email.value === "" || form.password.value === "") {
        messageError.style.display = "block";
    }
    

})


