function loadComponent(title: string, content: string) {
    document.getElementById('title').textContent = title;
    document.getElementById('content').innerHTML = content;
}

function loadNavbar() {
    const title = "My Website - Navbar";
    const content = `
        <div class="navbar">
            <div class="navbar__left">
                <img src="../../../../images/user-icon-white.png" alt="User Icon" id="userIcon">
            </div>
            <div class="navbar__center">
                <img src="path/to/logo.png" alt="Logo">
            </div>
            <div class="navbar__right">
                <img src="../../../../images/settings-icon-white.png" alt="Settings Icon" id="settingsIcon">
            </div>
        </div>
    `;
    loadComponent(title, content);
}

loadNavbar();