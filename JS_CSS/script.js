//RIGHT CLICK 

document.addEventListener("contextmenu", function (e) {
  e.preventDefault()
}, false)
//SERVICES SECTION
function toggleVisibility() {
  const extraContent = document.querySelector('.extra');
  const button = document.querySelector('.show-more-btn');

  extraContent.classList.toggle('show');

  if (extraContent.classList.contains('show')) {
    button.textContent = 'Read less';
  } else {
    button.textContent = 'Read More';
    button.style.transform = 'translateY(0)';
  }
}


$(document).ready(function () {
  $(window).scroll(function () {
    // sticky navbar on scroll script
    if (this.scrollY > 20) {
      $('.navbar').addClass("sticky");
    } else {
      $('.navbar').removeClass("sticky");
    }

    // scroll-up button show/hide script
    if (this.scrollY > 500) {
      $('.scroll-up-btn').addClass("show");
    } else {
      $('.scroll-up-btn').removeClass("show");
    }
  });

  // slide-up script
  $('.scroll-up-btn').click(function () {
    $('html').animate({
      scrollTop: 0
    });
    // removing smooth scroll on slide-up button click
    $('html').css("scrollBehavior", "auto");
  });

  $('.navbar .menu li a').click(function () {
    // applying again smooth scroll on menu items click
    $('html').css("scrollBehavior", "smooth");
  });

  // toggle menu/navbar script
  $('.menu-btn').click(function () {
    $('.navbar .menu').toggleClass("active");
    $('.menu-btn i').toggleClass("active");
  });

  // typing text animation script
  var typed = new Typed(".typing", {
    strings: ["Student", "Blogger", "Designer", "Freelancer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
  });

  var typed = new Typed(".typing-2", {
    strings: ["Student", "Blogger", "Designer", "Freelancer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
  });

  // owl carousel script
  $('.carousel').owlCarousel({
    margin: 20,
    loop: true,
    autoplay: true,
    autoplayTimeOut: 2000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
        nav: false
      },
      600: {
        items: 2,
        nav: false
      },
      1000: {
        items: 3,
        nav: false
      }
    }
  });

  //serv-content script
  $('.serv').owlserv({
    margin: 20,
    loop: true,
    autoplay: true,
    autoplayTimeOut: 2000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
        nav: false
      },
      600: {
        items: 2,
        nav: false
      },
      1000: {
        items: 3,
        nav: false
      }
    }
  });
});


//CONTACT FORM SUBMISSION
const form = document.getElementById("contact-form");
const fullName = document.getElementById("name");
const email = document.getElementById("email");
const subject = document.getElementById("subject");
const message = document.getElementById("message");

function sendEmail() {
  const bodyMessage = `Full Name: ${fullName.value}<br> Email: ${email.value}<br> Subject: ${subject.value}<br> Message: ${message.value}`; // Include message value

  Email.send({
    Host : "smtp.elasticemail.com",
    Username : "kishanyadav200903@gmail.com",
    Password : "30A8B6CF5A5EB9CDD3F79E1961B0BBAEEE00",
    To : 'kishanyadav200903@gmail.com',
    From : "kishanyadav200903@gmail.com",
    Subject: subject.value,
    Body: bodyMessage
  }).then(
    message => {
      if (message === "OK") {
        Swal.fire({
          title: "Success",
          text: "Message sent successfully",
          icon: "success"
        });
      } else {
        Swal.fire({
          title: "Error",
          text: "Message could not be sent",
          icon: "error"
        });
      }
    }
  );
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  sendEmail();
  form.reset();
});
//loader
document.addEventListener("DOMContentLoaded", function() {
  setTimeout(function() {
    document.querySelector('.loader').style.display = 'none';
    document.getElementById('app').style.display = 'block';
  }, 5000); 
});
