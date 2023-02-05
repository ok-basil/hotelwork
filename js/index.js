document.addEventListener("DOMContentLoaded", function () {

    window.onresize = function () {
        location.reload();
    };
    var viewportWidth = document.documentElement.clientWidth;

    if (viewportWidth < 640) {
        // Apply styles for small screens

        //Apply this style to my menu
        document.getElementById("nav-bg").classList.add("nav-bg-sm");
        document.getElementById("nav-bg").classList.remove("nav-bg");
        //Apply styles to the nav-bg
        // document.getElementById("nav-bg").classList.add("nav-bg-normal");
        // document.getElementById("nav-bg").classList.remove("nav-bg");

        //Apply styles to the logo-search 
        document.getElementById("logo-search").classList.add("logo-search-normal");
        document.getElementById("logo-search").classList.remove("logo-search");

        //Apply styles to the best tour plan
        document.getElementById("best-tour-plan").classList.add("best-tour-plan-normal");
        document.getElementById("best-tour-plan").classList.remove("best-tour-plan");

        //Apply this style to my nav search input
        document.getElementById("nav-search-input").classList.add("search-input-normal");
        document.getElementById("nav-search-input").classList.remove("search-input");



    } else if (viewportWidth >= 768 && viewportWidth < 992) {
        // Apply styles for medium screens

        //Apply this style to my nav-menu
        document.getElementById("dropdown").classList.remove("");
        //Apply this style to my nav-bg
        document.getElementById("nav-bg").classList.remove("nav-bg-normal");

        //Apply this style to my logo-search
        document.getElementById("logo-search").classList.remove("logo-search-normal");

        //Apply this style to my best-tour-plan
        document.getElementById("best-tour-plan").classList.remove("best-tour-plan-normal");

        //Apply this style to my nav search input
        document.getElementById("nav-search-input").classList.remove("search-input-normal");

    } else {
        // Apply styles for large screens
        console.log('not working');

    }




});