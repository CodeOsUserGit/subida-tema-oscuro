/* TODOS LOS DERECHOS RESERVADOS POR LA IGLESIA INTERNACIONAL HUERTO DEL ESPIRITU SANTO */

// Bro, el nav 🤙🏽

const rvc = document.getElementById('rvc')
const menu = document.getElementById('menu')

function showMenu(menu) {
    if (menu.value === "hide") {
        rvc.style.display = "block"
        menu.value = "show"
    } else {
        rvc.style.display = "none"
        menu.value = "hide"
    }
}