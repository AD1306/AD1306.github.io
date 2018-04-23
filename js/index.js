
$(document).ready(function () {
   $('#fullpage').fullpage({
    paddingTop: '0px',
    anchors:['home', 'about', 'skills', 'contact'],
    scrollOverflow:true,
    scrollBar: false,
    menu: '#myMenu',
    navigation: true,
    slidesNavigation: true,
    navigationPosition: 'right',
    navigationTooltips: ['Home', 'About', 'Skills', 'Contact'],
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
      }
    } 
  });
  
  $(".section").one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend',function(e) {});
  showText("#greet", dialogues[0], 0, 50);
  $("#frontend").hide();
  $("#backend").hide();
  $("#cloud").hide();
  $("#other").hide();
  $("#homeNav").hide();
  $("#aboutDisplay").hide();
  $("#contactDisplay").hide();
});

var dialogues = ["HELLO, I'M ADITYA DAVE."];

function skillsContent() {
  $("#frontend").fadeIn("slow");
  $("#backend").fadeIn("slow");
  $("#cloud").fadeIn("slow");
  $("#other").fadeIn("slow");
}


var showText = function (target = undefined, message, index, interval) {
  if (index < message.length) {
      $(target).append(message[index++]);
    setTimeout(function () { showText(target, message, index, interval); }, interval);
  } 
}