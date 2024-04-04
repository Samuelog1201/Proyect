function loadComponent(title, content) {
    document.getElementById('title').textContent = title;
    document.getElementById('content').innerHTML = content;
}
function loadNavbar() {
    var title = "My Website - Navbar";
    var content = "\n        <div class=\"navbar\">\n            <div class=\"navbar__left\">\n                <img src=\"proyectoBD/src/components/myComponents/images/user-icon-white.png\" alt=\"User Icon\" id=\"userIcon\">\n            </div>\n            <div class=\"navbar__center\">\n                <img src=\"proyectoBD/src/components/myComponents/images/logo.png\" alt=\"Logo\">\n            </div>\n            <div class=\"navbar__right\">\n                <img src=\"proyectoBD/src/components/myComponents/images/settings-icon-white.png\" alt=\"Settings Icon\" id=\"settingsIcon\">\n            </div>\n        </div>\n    ";
    loadComponent(title, content);
}
loadNavbar();
