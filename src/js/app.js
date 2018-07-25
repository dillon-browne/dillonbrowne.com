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
// Say hello
console.log("🦊 Hello!");

$("#EmailMe").submit(function(e) {
  e.preventDefault();
  var $form = $(this);
  $.post($form.attr("action"), $form.serialize()).then(function() {
    msgSent();
  });
});
$("#TextMe").submit(function(e) {
  e.preventDefault();
  var $form = $(this);
  $.post($form.attr("action"), $form.serialize()).then(function() {
    msgSent();
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

