
$(document).ready(function () {
   $('#fullpage').fullpage({
    paddingTop: '0px',
    anchors:['home', 'about', 'skills','projects', 'contact'],
    scrollOverflow:true,
    scrollBar: false,
    menu: '#myMenu',
    navigation: true,
    slidesNavigation: true,
    navigationPosition: 'right',
    navigationTooltips: ['Home', 'About', 'Skills', 'Work', 'Contact'],
    afterLoad: function(anchorLink, index){
      var loadedSection = $(this);
      if(anchorLink === 'skills'){
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
  
  $(".section").one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend',function(e) {});
  $("#frontend").hide();
  $("#backend").hide();
  $("#cloud").hide();
  $("#other").hide();
  $("#homeNav").hide();
  $("#aboutDisplay").hide();
  $("#contactDisplay").hide();
  $("#projectsDisplay").hide("slow");
  var typed = new Typed('#speciality', {
    strings: ["I'm a Front-End Developer ^1000", "I'm a Back-End Developer ^1000", "I'm a Full-Stack Developer ^1000"],
    smartBackspace: true, 
    typeSpeed: 30,
    backSpeed: 50,
    cursorChar: '|',
    loop: true, 
    loopCount: Infinity,
    startDelay: 500
  });
  $(".typed-cursor").css("font-size","xx-large");
});


function skillsContent() {
  $("#frontend").fadeIn("slow");
  $("#backend").fadeIn("slow");
  $("#cloud").fadeIn("slow");
  $("#other").fadeIn("slow");
}


