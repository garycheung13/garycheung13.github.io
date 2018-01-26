(function () {
    // throttle function
    const throttle = function (func, limit) {
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

    // variables for appearance logic
    // get the distance of half header height
    const headerHeight = document.getElementById("project-header").clientHeight / 2;
    // breakpoint for the menu
    const MEDIUM_SCREEN_WIDTH = 1024;
    const projectNav = document.getElementById("table-of-contents");

    // variables for scrollspy
    var section;
    var sections = {};
    var i = 0;

    // wait for images to finish loading before calc of offsetTop
    window.onload = function () {
        section = document.querySelectorAll(".toc-header");
        Array.prototype.forEach.call(section, function (e) {
            sections[e.id] = e.offsetTop;
        });
    }

    // if the user resizes their window, the positions need to be recalcuated
    // throttled to reduce number of actions
    window.onresize = throttle(function () {
        // find the new positions
        const resizeNav = document.getElementById("table-of-contents");
        let resizeSection = document.querySelectorAll(".toc-header");

        Array.prototype.forEach.call(section, function (e) {
            sections[e.id] = e.offsetTop;
        });
    }, 1000);

    //handles the display and positioning for the scroll spy effect
    window.onscroll = function () {
        // logic for if nav should appear
        const position = window.pageYOffset;
        const windowWidth = window.innerWidth;

        // conditional determining if the ToC should be shown
        if (position > headerHeight && windowWidth > MEDIUM_SCREEN_WIDTH) {
            projectNav.style.display = "block";
        } else {
            projectNav.style.display = "none";
        }

        // scroll spy interaction
        let scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;
        for (let i in sections) {
            // set a new one based on the scroll position
            // important to check that the toc actually appears first (done by comparing scroll Pos and height of header)
            if (sections[i] <= scrollPosition && scrollPosition >= headerHeight) {
                document.querySelector(".active").classList.toggle("active")
                document.querySelector("a[href*=" + i + "]").parentElement.classList.toggle("active");
            }
        }
    }

    // using code from smooth scroll libary
    // from: https://github.com/cferdinandi/smooth-scroll
    const scroll = new SmoothScroll('a[href*="#"]');
})();