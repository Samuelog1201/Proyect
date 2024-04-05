// Nav bar )//
// Obtener los elementos de los iconos
var userIcon = document.getElementById("userIcon");
var settingsIcon = document.getElementById("settingsIcon");
// Función para cambiar el color del icono
function changeIconColor(icon) {
    var isWhite = icon.src.includes("-white");
    var color = isWhite ? "black" : "white";
    icon.src = icon.src.replace(isWhite ? "-white" : "-black", "-".concat(color));
}
// Event listeners para cambiar el color al hacer clic
userIcon.addEventListener("click", function () {
    changeIconColor(userIcon);
});
settingsIcon.addEventListener("click", function () {
    changeIconColor(settingsIcon);
});
// Center ( Tweet )//
var tweetForm = document.getElementById("tweetForm");
var tweetContent = document.getElementById("tweetContent");
var tweetContainer = document.getElementById("tweetContainer");
tweetForm.addEventListener("submit", function (event) {
    event.preventDefault();
    var content = tweetContent.value.trim();
    if (content !== "") {
        var tweetCard = document.createElement("div");
        tweetCard.classList.add("tweetCard");
        tweetCard.textContent = content;
        tweetContainer.appendChild(tweetCard);
        tweetContent.value = "";
    }
});
// -------------------------------
function createTweetCard(tweetContent, userName, userAvatar) {
    var tweetCard = document.createElement("div");
    tweetCard.classList.add("tweetCard");
    var userDetails = document.createElement("div");
    userDetails.classList.add("userDetails");
    var userAvatarElement = document.createElement("img");
    userAvatarElement.classList.add("userAvatar");
    userAvatarElement.src = userAvatar;
    userAvatarElement.alt = "Logo del usuario";
    var userNameElement = document.createElement("span");
    userNameElement.classList.add("userName");
    userNameElement.textContent = userName;
    userDetails.appendChild(userAvatarElement);
    userDetails.appendChild(userNameElement);
    var tweetContentElement = document.createElement("p");
    tweetContentElement.classList.add("tweetContent");
    tweetContentElement.textContent = tweetContent;
    tweetCard.appendChild(userDetails);
    tweetCard.appendChild(tweetContentElement);
    return tweetCard;
}
var heartIcon = document.querySelector(".heartIcon");
var saveIcon = document.querySelector(".saveIcon");
heartIcon.addEventListener("click", function () {
    if (heartIcon.src.includes("white")) {
        heartIcon.src = "images/heart-icon-black.png";
    }
    else {
        heartIcon.src = "images/heart-icon-white.png";
    }
});
saveIcon.addEventListener("click", function () {
    if (saveIcon.src.includes("white")) {
        saveIcon.src = "images/save-icon-black.png";
    }
    else {
        saveIcon.src = "images/save-icon-white.png";
    }
});
// Left //
var userNameElement = document.getElementById("userName");
var profileDescriptionElement = document.getElementById("profileDescription");
// Función para actualizar el nombre de usuario
function updateUserName(name) {
    userNameElement.textContent = name;
}
// Editar Nombre de usuario 
var editUserNameButton = document.getElementById("editUserNameButton");
editUserNameButton.addEventListener("click", function () {
    var newUserName = prompt("Ingresa un nuevo nombre de usuario:");
    if (newUserName !== null && newUserName !== "") {
        updateUserName(newUserName);
    }
});
// Función para actualizar la descripción del perfil
var profileDescriptionElement = document.getElementById("profileDescription");
var editProfileDescriptionButton = document.getElementById("editProfileDescriptionButton");
editProfileDescriptionButton.addEventListener("click", function () {
    var currentDescription = profileDescriptionElement.textContent.trim();
    var newDescription = prompt("Ingresa una nueva descripción de perfil:", currentDescription);
    if (newDescription !== null) {
        profileDescriptionElement.textContent = newDescription || "Descripción del usuario";
    }
});
// Ejemplo de uso
updateUserName("Nuevo Usuario");
updateProfileDescription("Descripción del usuario");
