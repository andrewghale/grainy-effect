// Fade away second Lorem

$(window).scroll(function() {
  $(".second-lorem").css(
    "opacity",
    0 + Math.min(Math.max(0, ($(window).scrollTop() - 1250) / 90), 1)
  );
});

$("#pass").keyup(function(e) {
  var strongRegex = new RegExp(
    "^(?=.{8,})(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*\\W).*$",
    "g"
  );
  var mediumRegex = new RegExp(
    "^(?=.{7,})(((?=.*[A-Z])(?=.*[a-z]))|((?=.*[A-Z])(?=.*[0-9]))|((?=.*[a-z])(?=.*[0-9]))).*$",
    "g"
  );
  var enoughRegex = new RegExp("(?=.{6,}).*", "g");
  if (false == enoughRegex.test($(this).val())) {
    $("#passstrength").html("More Characters");
  } else if (strongRegex.test($(this).val())) {
    $("#passstrength").className = "ok";
    $("#passstrength").html("Strong!");
  } else if (mediumRegex.test($(this).val())) {
    $("#passstrength").className = "alert";
    $("#passstrength").html("Medium!");
  } else {
    $("#passstrength").className = "error";
    $("#passstrength").html("Weak!");
  }
  return true;
});

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}
