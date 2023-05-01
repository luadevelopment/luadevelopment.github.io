/*!
* Start Bootstrap - Freelancer v7.0.7 (https://startbootstrap.com/theme/freelancer)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-freelancer/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});

function validateEmail(email) {
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email);
}
function validateFacebookUrl(url) {
    var re = /^(http(s)?:\/\/)?(www\.)?facebook\.com\/(profile.php\?id=)?[a-zA-Z0-9_./]+$/;
    return re.test(url);
}

// Lấy tham chiếu đến nút "Dự thi"
var submitButton = document.querySelector(".go");

// Thêm sự kiện click vào nút "Dự thi"
submitButton.addEventListener("click", function() {
    var emailInput = document.querySelector("input[name='mail']").value;
    var facebookInput = document.querySelector("input[name='facebook']").value;
    if((validateEmail(emailInput))&&(validateFacebookUrl(facebookInput))){
        sessionStorage.setItem("email", emailInput);
        sessionStorage.setItem("facebook", facebookInput);
        window.location.href = '/content/';

    }else{
        Swal.fire('Email hoặc Facebook không hợp lệ!');
    }
    
});
