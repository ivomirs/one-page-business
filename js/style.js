// ***********  sticky navigation  ***************
// ************************************************ 

window.onscroll = function() {
    myFunction()
};

var header = document.getElementById("menu-nav");
var sticky = header.offsetTop;

function myFunction() {
    if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
        $('#menu-nav.sticky a.sticky-logo').html('P!');
    } else {
        header.classList.remove("sticky");
        $('#menu-nav a.sticky-logo').html('Pronto!');
    }
}

// ***********  smooth scroll  ***************
// ************************************************ 

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// ***********  active menu links  ***************
// ************************************************ 

$(document).ready(function() {
    var menuHome = $('.m-home'),
        menuFeatures = $('.m-features'),
        menuServices = $('.m-services'),
        menuContact = $('.m-contact');

    menuHome.click(function() {
        menuHome.addClass('active');
        $('.m-features, .m-services, .m-contact').removeClass('active');
    });

    menuServices.click(function() {
        menuServices.addClass('active');
        $('.m-home, .m-features, .m-contact').removeClass('active');
    });

    menuFeatures.click(function() {
        menuFeatures.addClass('active');
        $('.m-home, .m-services, .m-contact').removeClass('active');
    });

    menuContact.click(function() {
        menuContact.addClass('active');
        $('.m-home, .m-services, .m-features').removeClass('active');
    });
});


// drop effect on Cards
$('.features-content').hover(function() {
    $('.features-content .item-1 .image-wrapper  img').addClass('animated slideInDown delay-300ms');
    $('.features-content .item-2 .image-wrapper img').addClass('animated slideInDown delay-600ms');
    $('.features-content .item-3 .image-wrapper  img').addClass('animated slideInDown delay-1s');
});

// Form submit

function submitForm() {
    var inputFName = $('#firstName'),
        inputLName = $('#lastName'),
        fullName = $('#firstName').val() + " " + $('#lastName').val(),
        inputJob = $('#job'),
        inpuMail = $('#email'),
        allInputsLabels = $('#contactForm label,#contactForm input');

    if(inputFName.val() == '') {
        inputFName.addClass('highlight')
    } else {
        inputFName.removeClass('highlight')
    };

    if(inputLName.val() == '') {
        inputLName.addClass('highlight')
    } else {
        inputLName.removeClass('highlight')
    };

    if(inputJob.val() == '') {
        inputJob.addClass('highlight')
    } else {
        inputJob.removeClass('highlight')
    };

    if(inpuMail.val() == '') {
        inpuMail.addClass('highlight')
    } else {
        inpuMail.removeClass('highlight')
    };

    if(inputFName.val() != 0 && inputLName.val() != 0 && inputJob.val() != 0 && inpuMail.val() != 0 ) {
        allInputsLabels.hide();
        $('#sentMessage').removeClass('d-none').html(`<h2>Thank you <span style="color:#b90ba0; text-transform: capitalize;">${fullName}</span><br/>Your message is sent!</h2>`);
        $('#submitText').addClass('d-none');
        $('#resubmitText').removeClass('d-none');
    }
};

function backButton() {
    var allInputsLabels = $('#contactForm label,#contactForm input');

    allInputsLabels.show();
    $('#sentMessage').addClass('d-none');
    $('#submitText').removeClass('d-none');
    $('#resubmitText').addClass('d-none');
    allInputsLabels.val('');
};

function clearHighlight(id) {
    $('input' + '#' + id).removeClass('highlight')
};


