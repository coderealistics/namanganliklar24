const ready = function (cb) {
    // Check if the `document` is loaded completely
    document.readyState === "loading"
    ? document.addEventListener("DOMContentLoaded", function (e) {
        cb();
    })
    : cb();
};

// Usage
ready(function() {
    
    // Toggle sidenav on site-header__toggler click
    var elSideHeaderToggler = document.querySelector('.site-header__toggler');
    var elSidenav = document.querySelector('.sitenav');
    elSideHeaderToggler.addEventListener('click', function(){
        elSidenav.classList.toggle('sitenav--open');
    });

});