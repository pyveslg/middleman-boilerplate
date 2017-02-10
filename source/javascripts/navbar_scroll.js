// Navbar transition on scroll
$(function(){
  $(window).scroll(function(e){
    if ($(this).scrollTop() > 50) {
      $(".navbar").css({
        "background-color": "white",
      });
      $(".navbar li a").css({
        "color": "#0096B3",
      });
    }
    else {
      $(".navbar").css({
        "background": "transparent",
      });
      $(".navbar li a").css({
        "color": "white",
      });
    }
  });
})
