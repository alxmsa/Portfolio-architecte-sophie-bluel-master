const loginUrl = "http://localhost:5678/api/users/login";

const form = document.forms['form-login'];
const submitButton = form.elements['submit-form'];


submitButton.addEventListener("click", function (event) {
    event.preventDefault();
  
    const messageError = document.getElementById("msg-error");
    if (form.email.value === "" || form.password.value === "") {
        
        messageError.style.display = "block";
    } else {
        const identifiant = {
            email: form.email.value,  
            password: form.password.value,  
        }

        const identifiantJson = JSON.stringify(identifiant);

        fetch(loginUrl, {  
            method: "POST",
            headers: {
                'Accept': 'application/json',
                "Content-Type": "application/json;charset=utf-8",
            },
            body: identifiantJson,
        })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            localStorage.setItem("user", JSON.stringify(data));
            const user = JSON.parse(localStorage.getItem('user'));
            if(user && user.token){
                window.location = "index.html";
            }else {
                messageError.style.display = "block";
            }
        })
        .catch(error => {
            console.error('Error:', error);
            const messageError = document.getElementById("msg-error");
        });  
    }
});

