const loginForm = document.getElementById("loginForm");
const loginButton = document.getElementById("formButton");

loginButton.addEventListener("click", (e) => {

    e.preventDefault();

    const user = loginForm.username.value;
    const pass = loginForm.password.value;

    if (user === "gabriel" && pass === "gabiru") {
 
        alert("Bem vindo, gabriel!");
        location.reload();
    } else {
        alert("login e/ou senha errados")
    }
})