const $registerForm = document.getElementById("register-form");
const $name = document.getElementById("register-name");
const $email = document.getElementById("register-email");
const $password = document.getElementById("register-password");
const $phone = document.getElementById("resgister-phone");

const endPoint = "http://localhost:5173/";

$registerForm.addEventListener("submit", (event) => {
    event.preventDefault();
    register();
});

const dataUser = {
    name: $name.value,
    email: $email.value,
    password: $password.value,
    phone: $phone.value
};


async function register() {
    const response = await fetch(`http://localhost:5173/users?email=${$email.value}`);
    const data = await response.json();

    if (data.length == 0) {
        const res = await fetch (`${endPoint}`,{
        method:'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(dataUser)});
        
        if (!response.ok) {
        throw new Error('Error al crear los datos');
        };
        return;
    };

    if (data[0].password === $password.value) {
        alert("Este usuario ya existe");
    };
};
