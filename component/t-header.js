//header 
class Theader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
           <head>
           <link rel="stylesheet" href="component/navigation-bar.css">
           <link rel="stylesheet" href="typography.css">
           </head>
           <body>
           <header class="desktop-header">
           <a href="index.html"><img class="logo" src="material/logo.png" alt="Logo"></a>
           <nav>
            <ul class="nav-links" id="header-desktop">
                <li><a href="index.html">Home</a></li>
                <li><a href="profilepage.html">Profile</a></li>
                <li><a href="projects.html">Projects</a></li>
            </ul>
            </nav>
            <a href="contact.html" class="hide"> </a>
            <img onclick=showSidebar() class="ham-menu" src="material/menu-ham.png" alt="menu">
             </header>
            <header class="mobile-header">
            <nav>
            <ul class="nav-links" id="header-mobile">
                <img onclick=hideSidebar() class="close-menu" src="material/close-icon.png" alt="close">
                <li><a href="index.html">Home</a></li>
                <li><a href="profilepage.html">Profile</a></li>
                <li><a href="projects.html">Projects</a></li> 
            </ul>
            </nav>
            </header>
            <script src="navigation.js"></script>
            <script src="library/gsap.min.js"></script>
            </body>
        `;
    }
}
customElements.define("t-header", Theader);