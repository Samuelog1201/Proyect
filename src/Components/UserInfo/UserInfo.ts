class card extends HTMLElement {
	name?: string;
	image?: string;
	profileimage?: string;

	constructor() {
		super(); // always call super() first in the ctor.
		this.attachShadow({ mode: 'open' });
	}

	static get observedAttributes() {
		const attrs: Record<AttributeCard, null> = {
			name: null,
			image: null,
			profileimage: null,
		};
		return Object.keys(attrs);
	}
	attributeChangedCallback(propName: AttributeCard, oldValue: string | undefined, newValue: string | undefined) {
		switch (propName) {
			default:
				this[propName] = newValue;
				break;
		}

		this.render();
	}
	connectedCallback() {
		this.render();
	}
	render() {

const htmlString = `
    <section id="leftSection">
        <div class="profile">
            <img src="images/user-icon-black.png" alt="Avatar de Usuario" class="userAvatar">
            <br>
            <h5>Usuario</h5>
            <h2 id="userName">Nombre de Usuario</h2>
            <button id="editUserNameButton">Editar Nombre de Usuario</button>
            <div>
                <h1>Descripción del usuario</h1>
                <h2 id="profileDescription" contenteditable="false">Tu descripción</h2>
                <button id="editProfileDescriptionButton">Editar Descripción</button>
            </div>
        </div>
    </section>
`;

const element = document.getElementById('myElementId');
if (element) {
    element.innerHTML = htmlString;
}


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

}

import {UserInfo} from "UserInfo"; 