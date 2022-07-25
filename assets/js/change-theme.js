const changeTheme = document.getElementById('theme')

function theme() {
    if (changeTheme.value === "ligth") {
        document.body.style.background = "#000"
    } else {
        document.body.style.background = "#fff"
        menu.value = "dark"
    }
}