// JS Goes here - ES6 supported
import $ from "jquery";
window.jQuery = $;
window.$ = $;
import "material-kit/assets/js/core/bootstrap-material-design.min";
import "material-kit/assets/js/material-kit";
import "smoothscroll";
import "@fortawesome/fontawesome-free/js/all";
import "material-design-icons";
import "bootstrap-notify";
import Typed from "typed.js";
// Say hello
console.log("🦊 Hello!");

var typed = new Typed("#typed", {
  stringsElement: "#typed-strings",
  typeSpeed: 75,
  shuffle: true,
  backDelay: 700,
  loop: true,
  onComplete: function(self) { prettyLog("onCmplete " + self); },
  preStringTyped: function(pos, self) { prettyLog("preStringTyped " + pos + " " + self); },
  onStringTyped: function(pos, self) { prettyLog("onStringTyped " + pos + " " + self); },
  onLastStringBackspaced: function(self) { prettyLog("onLastStringBackspaced " + self); },
  onTypingPaused: function(pos, self) { prettyLog("onTypingPaused " + pos + " " + self); },
  onTypingResumed: function(pos, self) { prettyLog("onTypingResumed " + pos + " " + self); },
  onReset: function(self) { prettyLog("onReset " + self); },
  onStop: function(pos, self) { prettyLog("onStop " + pos + " " + self); },
  onStart: function(pos, self) { prettyLog("onStart " + pos + " " + self); },
  onDestroy: function(self) { prettyLog("onDestroy " + self); }
});

console.log(typed);
$("#EmailMe").submit(function(e) {
  e.preventDefault();
  var $form = $(this);
  $.post($form.attr("action"), $form.serialize()).then(function() {
    msgSent();
    $("#EmailMe").html("<i class='icon icon-success fa fa-check-circle fa-5x animated zoomIn'></i>");
  });
});
$("#TextMe").submit(function(e) {
  e.preventDefault();
  var $form = $(this);
  $.post($form.attr("action"), $form.serialize()).then(function() {
    msgSent();
    $("#TextMe").html("<i class='icon icon-success fa fa-check-circle fa-5x animated zoomIn'></i>");
  });
});

function msgSent() {
  $.notify({
    // options
    message: "Thanks for reaching out to me! I will contact you within the next day.",
    icon: "fa fa-check-circle",
  }, {
    // settings
    placement: {
      from: "bottom",
      align: "center"
    },
    type: "success",
    timer: 1000,
    animate: {
      enter: "animated fadeInDown",
      exit: "animated fadeOutUp"
    },
  });
}


