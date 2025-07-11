
const $loginForm = document.getElementById("login-form");
const $users = document.getElementById("email");
const $password = document.getElementById("password");

$loginForm.addEventListener("submit", (event) => {
    event.preventDefault();
    login();
});

async function login() {
    const response = await fetch(`http://localhost:3000/users?email=${$users.value}`);
    const data = await response.json();

    if (data.length == 0) {
        alert("Su usuario no existe");
    };

    if (data[0].password === $password.value) {

        localStorage.setItem("currentUser", JSON.stringify(data[0]))
        window.location.href = "../views/dashboard.html"

        alert("Login exitoso");

    } else{
        alert("Contraseña equivocada");
    };
};



