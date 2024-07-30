// AJOUTER LE MARGIN-LEFT À M-E-PORTFOLIO DANS LE JS
// CHANGER LE LOGIN EN LOGOUT
const modeEdition = document.querySelector(".m-e-header");
const modifier = document.querySelector("#modifier");
const logout = document.querySelector('#logout');

if(isConnected()) {
    modeEdition.style.display = "flex";
    modifier.style.display = "block";

    logout.textContent = "logout";
    
    logout.addEventListener("click", event => {
        event.preventDefault();

        localStorage.removeItem("userId");
        localStorage.removeItem("user");
        window.location.href = "login.html";
    })
}