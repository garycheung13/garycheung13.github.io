(function () {
    const throttle = (func, limit) => {
        let inThrottle;
        let lastFunc;
        let lastRan;
        return function () {
            const context = this;
            const args = arguments;
            if (!inThrottle) {
                func.apply(context, args);
                lastRan = Date.now();
                inThrottle = true;
            } else {
                clearTimeout(lastFunc);
                lastFunc = setTimeout(function () {
                    if ((Date.now() - lastRan) >= limit) {
                        func.apply(context, args);
                        lastRan = Date.now();
                    }
                }, limit - (Date.now() - lastRan));
            }
        }
    }

    // handle navbar changes when scrolling
    const mainNavbar = document.getElementById("homepage-nav");

    document.onscroll = function () {
        const position = window.pageYOffset;
        if (position > 0) {
            mainNavbar.classList.add('nav-scrolling');
        } else {
            mainNavbar.classList.remove('nav-scrolling');
        }
    }

    // handle changes to navbar on mobile
    const mobileNav = document.getElementById("mobile-nav");
    mobileNav.addEventListener("click", function (event) {
        document.getElementById("nav-options").classList.toggle("nav-hidden");
    });

    // using code from smooth scroll libary
    // from: https://github.com/cferdinandi/smooth-scroll
    const scroll = new SmoothScroll('a[href*="#"]');

    // obfescates email link
    const emailElement = document.getElementById("footer-email");
    emailElement.href = "mailto:" + atob("Z2FyeWNoZXUyM0BnbWFpbC5jb20=");
})();