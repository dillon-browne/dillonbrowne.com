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
import Granim from "granim";
// Say hello
console.log("🦊 Hello!");

var typed = new Typed("#typedMobile", {
  stringsElement: "#typed-strings",
  typeSpeed: 75,
  backDelay: 850,
  loop: true
});
var typedDesktop = new Typed("#typedDesktop", {
  stringsElement: "#typed-strings",
  typeSpeed: 75,
  backDelay: 850,
  loop: true
});

var granimInstance = new Granim({
  element: "#granim-canvas",
  name: "granim",
  opacity: [1, 1],
  states : {
    "default-state": {
      gradients: [
        ["#834D9B", "#D04ED6"],
        ["#1CD8D2", "#93EDC7"]
      ]
    }
  }
});
console.log(granimInstance);
console.log(typed);
console.log(typedDesktop);
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
$("#consultation").submit(function(e) {
  e.preventDefault();
  var $form = $(this);
  $.post($form.attr("action"), $form.serialize()).then(function() {
    msgSent();
    $("#consultation").html("<i class='icon icon-success fa fa-check-circle fa-5x animated zoomIn'></i>");
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


