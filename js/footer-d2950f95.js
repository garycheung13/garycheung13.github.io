(function(){
    const menu = document.getElementById("menu-hamburger");
    const options = document.getElementById("navbar-options");
    const icon = document.querySelector("#menu-hamburger .hamburger-icon");
    menu.addEventListener("click", function(){
        options.classList.toggle("mobile-visible");
        icon.classList.toggle("hamburger-icon__close");
    });

    const scroll = new SmoothScroll('a[href*="#"]');
    // obfescates email link
    const emailElement = document.getElementById("footer-email");
    emailElement.href = "mailto:" + atob("Z2FyeWNoZXUyM0BnbWFpbC5jb20=");
})();