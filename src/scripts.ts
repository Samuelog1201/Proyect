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
userIcon.addEventListener("click", () => {
    changeIconColor(userIcon);
});

settingsIcon.addEventListener("click", () => {
    changeIconColor(settingsIcon);
});

// Center ( Tweet )//

const tweetForm = document.getElementById("tweetForm") as HTMLFormElement;
const tweetContent = document.getElementById("tweetContent") as HTMLTextAreaElement;
const tweetContainer = document.getElementById("tweetContainer");

tweetForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const content = tweetContent.value.trim();
    if (content !== "") {
        const tweetCard = document.createElement("div");
        tweetCard.classList.add("tweetCard");
        tweetCard.textContent = content;
        tweetContainer.appendChild(tweetCard);
        tweetContent.value = "";
    }
});
// -------------------------------

function createTweetCard(tweetContent: string, userName: string, userAvatar: string) {
    const tweetCard = document.createElement("div");
    tweetCard.classList.add("tweetCard");

    const userDetails = document.createElement("div");
    userDetails.classList.add("userDetails");

    const userAvatarElement = document.createElement("img");
    userAvatarElement.classList.add("userAvatar");
    userAvatarElement.src = userAvatar;
    userAvatarElement.alt = "Logo del usuario";

    const userNameElement = document.createElement("span");
    userNameElement.classList.add("userName");
    userNameElement.textContent = userName;

    userDetails.appendChild(userAvatarElement);
    userDetails.appendChild(userNameElement);

    const tweetContentElement = document.createElement("p");
    tweetContentElement.classList.add("tweetContent");
    tweetContentElement.textContent = tweetContent;

    tweetCard.appendChild(userDetails);
    tweetCard.appendChild(tweetContentElement);

    return tweetCard;
}
const heartIcon = document.querySelector(".heartIcon");
const saveIcon = document.querySelector(".saveIcon");

heartIcon.addEventListener("click", () => {
    if (heartIcon.src.includes("white")) {
        heartIcon.src = "images/heart-icon-black.png";
    } else {
        heartIcon.src = "images/heart-icon-white.png";
    }
});

saveIcon.addEventListener("click", () => {
    if (saveIcon.src.includes("white")) {
        saveIcon.src = "images/save-icon-black.png";
    } else {
        saveIcon.src = "images/save-icon-white.png";
    }
});

// Left //

const userNameElement = document.getElementById("userName");
const profileDescriptionElement = document.getElementById("profileDescription");

// Función para actualizar el nombre de usuario
function updateUserName(name: string) {
    userNameElement.textContent = name;
}
// Editar Nombre de usuario 

const editUserNameButton = document.getElementById("editUserNameButton");

editUserNameButton.addEventListener("click", () => {
    const newUserName = prompt("Ingresa un nuevo nombre de usuario:");
    if (newUserName !== null && newUserName !== "") {
        updateUserName(newUserName);
    }
});

// Función para actualizar la descripción del perfil

const profileDescriptionElement = document.getElementById("profileDescription") as HTMLHeadingElement;
const editProfileDescriptionButton = document.getElementById("editProfileDescriptionButton");

editProfileDescriptionButton.addEventListener("click", () => {
    const currentDescription = profileDescriptionElement.textContent.trim();
    const newDescription = prompt("Ingresa una nueva descripción de perfil:", currentDescription);
    if (newDescription !== null) {
        profileDescriptionElement.textContent = newDescription || "Descripción del usuario";
    }
});

// Ejemplo de uso
updateUserName("Nuevo Usuario");
updateProfileDescription("Descripción del usuario");