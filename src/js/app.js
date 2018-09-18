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
import AOS from "aos";

// Say hello
console.log("🦊 Checkout my source code on github - Dillon!");
$(document).trigger("TriggerGoogleTag");
dataLayer.push({
  "event": "registrationComplete"
});
$(document).on("TriggerGoogleTag", function() {
  console.log("Triggered GA");
});

AOS.init({
  duration: 1000,
});
new Typed("#typedMobile", {
  stringsElement: "#typed-strings",
  typeSpeed: 75,
  backDelay: 850,
  loop: true
});
new Typed("#typedDesktop", {
  stringsElement: "#typed-strings",
  typeSpeed: 75,
  backDelay: 850,
  loop: true
});

new Granim({
  element: "#granim-canvas",
  direction: "top-bottom",
  opacity: [1, 1],
  isPausedWhenNotInView: true,
  image : {
    source: "img/denver.jpg",
    blendingMode: "multiply",
    stretchMode: ["stretch", "stretch"]
  },
  states : {
    "default-state": {
      gradients: [
        ["#29323c", "#485563"],
        ["#FF6B6B", "#556270"],
        ["#80d3fe", "#7ea0c4"],
        ["#f0ab51", "#eceba3"]
      ],
      transitionSpeed: 7000
    }
  }
});

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

$(".consultation").submit(function(e) {
  e.preventDefault();
  var $form = $(this);
  $.post($form.attr("action"), $form.serialize()).then(function() {
    msgSent();
    $(".consultation").html("<i class='icon icon-success fa fa-check-circle fa-5x animated zoomIn'></i>");
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


