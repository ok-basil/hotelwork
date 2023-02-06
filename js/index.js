document.addEventListener("DOMContentLoaded", function () {

    window.onresize = function () {
        location.reload();
    };
    var viewportWidth = document.documentElement.clientWidth;

    if (viewportWidth < 640) {
        // Apply styles for small screens

        //Apply this style to my menu
        document.getElementById("dropdown").classList.add("menu-normal");
        document.getElementById("dropdown").classList.remove("menu");
        //Apply styles to the nav-bg
        document.getElementById("nav-bg").classList.add("nav-bg-normal");
        document.getElementById("nav-bg").classList.remove("nav-bg");

        //Apply styles to the logo-search 
        document.getElementById("logo-search").classList.add("logo-search-normal");
        document.getElementById("logo-search").classList.remove("logo-search");

        //Apply styles to the best tour plan
        document.getElementById("best-tour-plan").classList.add("best-tour-plan-normal");
        document.getElementById("best-tour-plan").classList.remove("best-tour-plan");

        //Apply this style to my nav search input
        document.getElementById("nav-search-input").classList.add("search-input-normal");
        document.getElementById("nav-search-input").classList.remove("search-input");


        //Apply this style to my nav buttom list
        document.getElementById("nav-buttom-list-menu").classList.add("nav-buttom-list-normal");
        document.getElementById("nav-buttom-list-menu").classList.remove("nav-buttom-list");

        //Apply this style tomy slider
        document.getElementById("slider").classList.add("slider-normal");
        document.getElementById("slider").classList.remove("slider");

        //Apply this style to my package-menu
        document.getElementById("package-menu").classList.add("package-menu-normal");
        document.getElementById("package-menu").classList.remove("package-menu");

        //Apply this style to my package-offer
        document.getElementById("package-offer").classList.add("package-offer-normal");
        document.getElementById("package-offer").classList.remove("package-offer");

        //Apply this styles to my package-card-details
        document.getElementById("package-card-details").classList.add("package-card-details-normal");
        document.getElementById("package-card-details").classList.remove("package-card-details");

        //Apply this style to my other package section wrapp1
        document.getElementById("trip-advisor-wrapper").classList.add("trip-advisor-wrapper-normal");
        document.getElementById("trip-advisor-wrapper").classList.remove("trip-advisor-wrapper");

        //Apply this style to my guest review section
        document.getElementById("guest-review-section").classList.add("guest-review-section-normal");
        document.getElementById("guest-review-section").classList.remove("guest-review-section");

        //Apply this style to my news section
        document.getElementById("newsletter-section").classList.add("newsletter-section-normal");
        document.getElementById("newsletter-section").classList.remove("newsletter-section");

        //Apply this style to my activities-section
        document.getElementById("activities-section").classList.add("activities-section-normal");
        document.getElementById("activities-section").classList.add("activities-section");

        //Apply this style for my footer section
        document.getElementById("footer-section").classList.add("footer-section-normal");
        document.getElementById("footer-section").classList.remove("footer-section");



    } else if (viewportWidth >= 768 && viewportWidth < 992) {
        // Apply styles for medium screens

        //Apply this style to my nav-menu
        document.getElementById("dropdown").classList.remove("menu-normal");
        //Apply this style to my nav-bg
        document.getElementById("nav-bg").classList.remove("nav-bg-normal");

        //Apply this style to my logo-search
        document.getElementById("logo-search").classList.remove("logo-search-normal");

        //Apply this style to my best-tour-plan
        document.getElementById("best-tour-plan").classList.remove("best-tour-plan-normal");

        //Apply this style to my nav search input
        document.getElementById("nav-search-input").classList.remove("search-input-normal");

        //Apply this style to my nav buttom list
        document.getElementById("nav-buttom-list-menu").classList.remove("nav-buttom-list-normal");
        document.getElementById("nav-buttom-list-menu").classList.add("nav-buttom-list");

        //Apply this style to my slider
        document.getElementById("slider").classList.remove("slider-normal");

        //Apply this style to my package-menu
        document.getElementById("package-menu").classList.remove("package-menu-normal");

        //Apply this style to my package-offer
        document.getElementById("package-offer").classList.remove("package-offer-normal");

        //Apply this style to my package-card-details
        document.getElementById("package-card-details").classList.remove("package-card-details-normal");

        //Apply this style to my other package section wrapp1
        document.getElementById("trip-advisor-wrapper").classList.remove("trip-advisor-wrapper-normal");

        //Apply this style to my guest review section
        document.getElementById("guest-review-section").classList.remove("guest-review-section-normal");

        //Apply this style to my newsletter section
        document.getElementById("newsletter-section").classList.remove("newsletter-section-normal");

        //Apply this style to my activities-section
        document.getElementById("activities-section").classList.remove("activities-section-normal");

        //Apply thiis style to my footer section
        document.getElementById("footer-section").classList.remove("footer-section-normal");

        //Apply this style to my nav main for pc screen
        document.getElementById("nav-main").classList.add("nav-main-large");
        document.getElementById("nav-main").classList.remove("nav-main");

        //Apply this style to my site wrapper
        let elements = document.getElementsByClassName("site-wrapper");
        for (let i = 0; i < elements.length; i++) {
            elements[i].style.width = "90%";
        };

        //Apply this style to my slider on pc screen 
        document.getElementById("slider").classList.add("slider-large");
        document.getElementById("slider").classList.remove("slider");

        //Apply this style to my package menu on pc screen 
        document.getElementById("package-menu").classList.add("package-menu-large");
        document.getElementById("package-menu").classList.remove("package-menu");

        //Apply this style to my package offer on pc screen 
        document.getElementById("package-offer").classList.add("package-offer-large");
        document.getElementById("package-offer").classList.remove("package-offer");

        //Apply this style to my summary details for pc screens
        document.getElementById("package-card-details").classList.add("package-card-details-large");
        document.getElementById("package-card-details").classList.remove("package-card-details");

        //Apply this style to my trip advisor wrapper for pc screen
        document.getElementById("trip-advisor-wrapper").classList.add("trip-advisor-wrapper-large");
        document.getElementById("trip-advisor-wrapper").classList.remove("trip-advisor-wrapper");

        //Apply this style to my guest-review-section for pc screen
        document.getElementById("guest-review-section").classList.add("guest-review-section-large");
        document.getElementById("guest-review-section").classList.remove("guest-review-section");

        //Apply this style to my activities section
        document.getElementById("activities-section").classList.add("activities-section-large");
        document.getElementById("activities-section").classList.remove("activities-section");

        //Apply this style to my footer for pc screen
        document.getElementById("footer-section").classList.add("footer-section-large");
        document.getElementById("footer-section").classList.remove("footer-section");
    } else {
        // Apply styles for large screens
        // console.log('not working');
        document.getElementById("nav-main").classList.remove("nav-main-large");
        //
        document.getElementById("slider").classList.remove("slider-large");
        //
        document.getElementById("package-menu").classList.remove("package-menu-large");
        //
        document.getElementById("package-offer").classList.remove("package-offer-large");
        //
        document.getElementById("package-card-details").classList.remove("package-card-details-large");
        //
        document.getElementById("trip-advisor-wrapper").classList.remove("trip-advisor-wrapper-large");
        //
        document.getElementById("guest-review-section").classList.remove("guest-review-section-large");
        //
        document.getElementById("activities-section").classList.remove("activities-section-large");
        //
        document.getElementById("footer-section").classList.remove("footer-section-large");
    }
});