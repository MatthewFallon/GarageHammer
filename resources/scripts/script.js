window.onload = function () {
    /**
     * @type HTMLDivElement
     * */
    var navbar = document.querySelector("header nav");
    var sectionTop = document.querySelector("main > article, main > section");

    var stickyHeight = navbar.offsetTop;
    var stickyLength = navbar.clientHeight;

    window.onscroll = function () {
        if (window.pageYOffset >= stickyHeight) {
            navbar.classList.add("sticky");
            sectionTop.style = "padding-top: " + ( stickyLength + 16) + "px;";
        } else {
            navbar.classList.remove("sticky");
            sectionTop.style = "";
        }
    }
};