var sidenav = false;
$(document).ready(function () {
  $('#fullpage').fullpage({
    paddingTop: '0px',
    anchors: ['home', 'about', 'skills', 'projects', 'contact'],
    scrollOverflow: true,
    scrollBar: false,
    menu: '#myMenu',
    navigation: true,
    slidesNavigation: true,
    navigationPosition: 'right',
    navigationTooltips: ['Home', 'About', 'Skills', 'Work', 'Contact'],
    afterLoad: function (anchorLink, index) {
      var loadedSection = $(this);
      if (anchorLink === 'skills') {
        $("#homeNav").hide();
        skillsContent();
      } else if (anchorLink === 'about') {
        $("#homeNav").hide();
        $("#aboutDisplay").fadeIn("slow");
      } else if (anchorLink === 'home') {
        $("#aboutNav").show();
        $("#homeNav").hide();
      } else if (anchorLink === 'contact') {
        $("#homeNav").show();
        $("#contactDisplay").fadeIn("slow");
      } else if (anchorLink === 'projects') {
        $("#homeNav").hide();
        $("#projectsDisplay").fadeIn("slow");
      }
    }
  });

  $(".section").one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function (e) { });
  $("#frontend").hide();
  $("#backend").hide();
  $("#cloud").hide();
  $("#other").hide();
  $("#homeNav").hide();
  $("#aboutDisplay").hide();
  $("#contactDisplay").hide();
  $("#projectsDisplay").hide("slow");
  var typed = new Typed('#speciality', {
    strings: ["I'm a Front-End Developer", "I'm a Back-End Developer", "I'm a Full-Stack Developer"],
    smartBackspace: true,
    typeSpeed: 30,
    backSpeed: 50,
    cursorChar: '|',
    loop: true,
    loopCount: Infinity,
    startDelay: 500
  });
  $(".typed-cursor").css("font-size", "xx-large");
  $(window).on('resize', resizeFunction)
  checkCurrentWindow();
  $(".button-collapse").sideNav();
  $(".side-nav li").on('click', hideMenu);
  $(window).on('hashchange', hideMenu);
});

function checkCurrentWindow() {
  if($("#mobileMenu").is(":visible") && $(window).width() < 993) {
    $("#navbar").hide()
  } else {
    $("#navbar").show()
  }
}

function resizeFunction() {
  var eventFired = 0;
  if (!eventFired) {
    if ($("#mobileMenu").is(":visible") && $(window).width() < 993) {
      $("#navbar").hide()
    } else {
      $("#navbar").show()
    }
  }
}


function skillsContent() {
  $("#frontend").fadeIn("slow");
  $("#backend").fadeIn("slow");
  $("#cloud").fadeIn("slow");
  $("#other").fadeIn("slow");
}

function hideMenu() {
  if ($('#sidenav-overlay').length > 0 && sidenav === true) {
    $("#menu-trigger").click(); 
    sidenav = false;
  } else {
    sidenav = true;
  } 
}



