
const $loginForm = document.getElementById("login-form");
const $email = document.getElementById("email")
const $password = document.getElementById("password")

$loginForm.addEventListener("submit", (event) => {
    event.preventDefault()
    login()
})

async function login() {
    let response = await fetch(`http://localhost:3000/users?email=${$email.value}`)
    let data = await response.json()

    if (data.length == 0) {
        alert("Correo inexistente")
    }

    if (data[0].password === $password.value) {

        localStorage.setItem("currentUser", JSON.stringify(data[0]))
        window.location.href = "../views/dashboard.html"


        alert("login exitoso")




    } else{
        alert("contraseña equivocada")
    }


}