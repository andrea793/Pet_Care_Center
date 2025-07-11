
(function (){

    let user = JSON.parse(localStorage.getItem("currentUser"))
    
    if (user === null) {
        window.location.href = "/"
    }

})()

const $btnLogout = document.getElementById("logout-btn")

$btnLogout.addEventListener ("submit", (event) => {
    event.preventDefault()
    logout()
})

async function logout() {
    
}

