// Nav bar )//

// Obtener los elementos de los iconos
const userIcon = document.getElementById("userIcon");
const settingsIcon = document.getElementById("settingsIcon");

// Función para cambiar el color del icono
function changeIconColor(icon: HTMLElement) {
    const isWhite = icon.src.includes("-white");
    const color = isWhite ? "black" : "white";
    icon.src = icon.src.replace(isWhite ? "-white" : "-black", `-${color}`);
}

// Event listeners para cambiar el color al hacer clic
userIcon?.addEventListener("click", () => {
    changeIconColor(userIcon);
});

settingsIcon?.addEventListener("click", () => {
    changeIconColor(settingsIcon);
});
