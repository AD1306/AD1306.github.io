var sidenav = false;
$(document).ready(function () {
  $('#fullpage').fullpage({
    paddingTop: '0px',
    anchors: ['home', 'about', 'skills', 'contact'],
    scrollOverflow: true,
    scrollBar: false,
    menu: '#myMenu',
    navigation: true,
    slidesNavigation: true,
    navigationPosition: 'right',
    navigationTooltips: ['HOME', 'ABOUT', 'SKILLS', 'CONTACT'],
    afterLoad: function (anchorLink, index) {
      var loadedSection = $(this);
      if (anchorLink === 'skills') {
        $("#homeNav").hide();
      } else if (anchorLink === 'about') {
        $("#homeNav").hide();
        startLogoAnimation();
      } else if (anchorLink === 'home') {
        $("#aboutNav").show();
        $("#homeNav").hide();
      } else if (anchorLink === 'contact') {
        $("#homeNav").show();
        $("#contactDisplay").fadeIn("slow");
      }
    }
  });
  $(".section").one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function (e) { });
  $("#homeNav").hide();
  $('.skillsTree').show();
  var typed = new Typed('#speciality', {
    strings: ["I'm a Front-End Developer", "I'm a Back-End Developer", "I'm a Full-Stack Developer"],
    smartBackspace: true,
    typeSpeed: 30,
    backSpeed: 50,
    cursorChar: '_',
    loop: true,
    loopCount: Infinity,
    startDelay: 500
  });
  generateCloud();
  $(".typed-cursor").css("font-size", "xx-large");
  $(window).on('resize', resizeFunction)
  checkCurrentWindow();
  $(".side-nav li").on('click', hideMenu);
  $(window).on('hashchange', hideMenu);
  $('.switch label input').click(switchSkills);
});

function switchSkills() {
  if ($('.switch label input').is(":checked")) {
    $('.skillsTree').hide();
    $('.skillsCloud').show();
  } else {
    $('.skillsCloud').hide();
    $('.skillsTree').show();
  }
}

function checkCurrentWindow() {
  if ($("#mobileMenu").is(":visible") && $(window).width() < 993) {
    $("#navbar").hide()
    $(".button-collapse").sideNav();
    $("#fp-nav").hide();
    $("#footer").css({ "bottom": "10px", "height": "10vh" });
    $("#footer-contact").css({ "bottom": "10px", "height": "10vh" });
    $('.skillsTree').hide();
    $('.skillsCloud').show();
    $('.optionsContainer').hide();
  } else {
    $("#navbar").show()
    $("#fp-nav").show();
    $("#footer").css({ "bottom": "10px", "height": "10vh" });
    $("#footer-contact").css({ "bottom": "10px", "height": "10vh" });
    $('.skillsCloud').hide();
    $('.skillsTree').show();
    $('.optionsContainer').show();
  }
}

function resizeFunction() {
  var eventFired = 0;
  if (!eventFired) {
    if ($("#mobileMenu").is(":visible") && $(window).width() < 993) {
      $("#navbar").hide()
      $(".button-collapse").sideNav();
      $("#fp-nav").hide();
      $("#footer").css({ "bottom": "10px", "height": "10vh" });
      $("#footer-contact").css({ "bottom": "10px", "height": "10vh" });
      $('.skillsTree').hide();
      $('.skillsCloud').show();
      $('.optionsContainer').hide();
    } else {
      $("#navbar").show()
      $("#fp-nav").show();
      $("#footer").css({ "bottom": "10px", "height": "10vh" });
      $("#footer-contact").css({ "bottom": "10px", "height": "10vh" });
      $('.skillsCloud').hide();
      $('.skillsTree').show();
      $('.optionsContainer').show();
    }

  }
}

function hideMenu() {
  if ($('#sidenav-overlay').length > 0 && sidenav === true) {
    $("#menu-trigger").click();
    sidenav = false;
  } else {
    sidenav = true;
  }
}

function generateCloud() {
  var entries = [
    { label: 'HTML 5', url: '#', target: '_top' },
    { label: 'CSS3', url: '#', target: '_top' },
    { label: 'ANGULAR 2+', url: '#', target: '_top' },
    { label: 'DJANGO', url: '#', target: '_top' },
    { label: 'JAVASCRIPT', url: '#', target: '_top' },
    { label: 'TYPESCRIPT', url: '#', target: '_top' },
    { label: 'MATERIALIZE CSS', url: '#', target: '_top' },
    { label: 'BOOTSTRAP', url: '#', target: '_top' },
    { label: 'JQUERY', url: '#', target: '_top' },
    { label: 'JAVA', url: '#', target: '_top' },
    { label: 'C#', url: '#', target: '_top' },
    { label: 'PYTHON', url: '#', target: '_top' },
    { label: 'DOTNET CORE', url: '#', target: '_top' },
    { label: 'NODE JS', url: '#', target: '_top' },
    { label: 'EXPRESS JS', url: '#', target: '_top' },
    { label: 'GRAPHQL', url: '#', target: '_top' },
    { label: 'IBM BLUEMIX', url: '#', target: '_top' },
    { label: 'AZURE DEVOPS', url: '#', target: '_top' },
    { label: 'FIREBASE', url: '#', target: '_top' },
    { label: 'DOCKER', url: '#', target: '_top' },
    { label: 'NGINX', url: '#', target: '_top' },
    { label: 'MONGODB', url: '#', target: '_top' },
    { label: 'AZURE COSMOS DB', url: '#', target: '_top' },
    { label: 'COUCH DB', url: '#', target: '_top' },
    { label: 'MSSQL', url: '#', target: '_top' },
    { label: 'MYSQL', url: '#', target: '_top' },
    { label: 'POSTGRESQL', url: '#', target: '_top' },
    { label: 'GIT', url: '#', target: '_top' },
    { label: 'BITBUCKET', url: '#', target: '_top' },
    { label: 'GITHUB', url: '#', target: '_top' },
    { label: 'BASH SCRIPTS', url: '#', target: '_top' },
    { label: 'PYTHON SCRIPTS', url: '#', target: '_top' },
    { label: 'LETSENCRYPT', url: '#', target: '_top' }
  ];
  var settings = {

    entries: entries,
    width: 800,
    height: 800,
    radius: '70%',
    radiusMin: 75,
    bgDraw: true,
    bgColor: 'none',
    opacityOver: 1.00,
    opacityOut: 0.05,
    opacitySpeed: 6,
    fov: 800,
    speed: 1,
    fontFamily: 'Oswald, Arial, sans-serif',
    fontSize: '15',
    fontColor: '#4db6ac',
    fontWeight: 'normal',
    fontStyle: 'normal',
    fontStretch: 'normal',
    fontToUpperCase: true,
  };
  $('#tag-cloud').svg3DTagCloud(settings);

}

function startLogoAnimation() {
  anime({
    targets: '.line-drawing-demo .lines ellipse',
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: 'easeInOutCirc',
    duration: 2000,
    delay: function (el, i) { return i * 250 },
    direction: 'alternate',
    loop: false
  });
  anime({
    targets: '.line-drawing-demo .lines path',
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: 'easeInOutQuint',
    duration: 2000,
    delay: function (el, i) { return i * 250 },
    direction: 'alternate',
    loop: true
  });
}