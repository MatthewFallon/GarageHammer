window.onload = function () {
    /**
     * @type HTMLDivElement
     * */
    var navbar = document.querySelector("header nav");

    var stickyHeight = navbar.offsetTop;

    window.onscroll = function () {
        console.log(navbar);
        if (window.pageYOffset >= stickyHeight) {
            navbar.classList.add("sticky");
        } else {
            navbar.classList.remove("sticky");
        }
    }
}