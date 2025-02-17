


let bartoggler = jQuery('.bar-toggler');
jQuery(bartoggler).click(function () {
jQuery(bartoggler).toggleClass('opened');

jQuery('#mysidenav').toggleClass('open');
});

document.addEventListener('DOMContentLoaded', function() {
 // Initialize AOS first
 AOS.init({
    offset: 100,
    duration: 800,
    once: false,
    easing: 'ease-out-quad'
});
});