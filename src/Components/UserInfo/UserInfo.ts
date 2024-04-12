// Left //

const userNameElement = document.getElementById("userName");
const profileDescriptionElement = document.getElementById("profileDescription");

// Función para actualizar el nombre de usuario
function updateUserName(name: string) {
    userNameElement.textContent = name;
}
// Editar Nombre de usuario 

const editUserNameButton = document.getElementById("editUserNameButton");

editUserNameButton?.addEventListener("click", () => {
    const newUserName = prompt("Ingresa un nuevo nombre de usuario:");
    if (newUserName !== null && newUserName !== "") {
        updateUserName(newUserName);
    }
});

// Función para actualizar la descripción del perfil

const profileDescriptionElement = document.getElementById("profileDescription") as HTMLHeadingElement;
const editProfileDescriptionButton = document.getElementById("editProfileDescriptionButton");

editProfileDescriptionButton?.addEventListener("click", () => {
    const currentDescription = profileDescriptionElement.textContent.trim();
    const newDescription = prompt("Ingresa una nueva descripción de perfil:", currentDescription);
    if (newDescription !== null) {
        profileDescriptionElement.textContent = newDescription || "Descripción del usuario";
    }
});

// Ejemplo de uso
updateUserName("Nuevo Usuario");
updateProfileDescription("Descripción del usuario");
