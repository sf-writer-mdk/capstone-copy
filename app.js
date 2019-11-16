/*
$(function() {
  $(window).on("scroll", function() {
      if($(window).scrollTop() > 50) {
          $(".header").addClass("active");
      } else {
          //remove the background property so it comes transparent again (defined in your css)
         $(".header").removeClass("active");
      }
  });
});
*/


$(window).on("scroll", function() {
    if($(window).scrollTop() > 555 && $(window).scrollTop() < 810) {
        $(".header").addClass("active");

   } else if 
        ($(window).scrollTop() > 810 && $(window).scrollTop() < 1287) {
            $(".header").removeClass("active");

    } else if 
    ($(window).scrollTop() > 1287 && $(window).scrollTop() < 1954) {
        $(".header").addClass("active");

    } else if 
    ($(window).scrollTop() > 1954 && $(window).scrollTop() < 2335) {
        $(".header").removeClass("active");

    } else if 
    ($(window).scrollTop() > 2278 && $(window).scrollTop() < 3600) {
        $(".header").addClass("active");
    

    } else {
        //remove the background property so it comes transparent again (defined in your css)
       $(".header").removeClass("active");
    }
    
});



$(window).on("scroll", function() {
    if($(window).scrollTop() > 555 && $(window).scrollTop() < 810) {
        $(".main-nav__item>a").addClass("active-scroll");

    } else if 
    ($(window).scrollTop() > 810 && $(window).scrollTop() < 1287) {
        $(".main-nav__item>a").removeClass("active-scroll");

    } else if 
    ($(window).scrollTop() > 1287 && $(window).scrollTop() < 1954) {
        $(".main-nav__item>a").addClass("active-scroll");

    } else if 
    ($(window).scrollTop() > 1954 && $(window).scrollTop() < 2335) {
        $(".main-nav__item>a").removeClass("active-scroll");

    } else if 
    ($(window).scrollTop() > 2278 && $(window).scrollTop() < 3600) {
        $(".main-nav__item>a").addClass("active-scroll");

        
    } else {
        //remove the background property so it comes transparent again (defined in your css)
       $(".main-nav__item>a").removeClass("active-scroll");
    }
});



$(window).on("scroll", function() {
    if($(window).scrollTop() > 555 && $(window).scrollTop() < 810) {
        $(".main-nav__item--cta>a").addClass("active-contact");

    } else if 
    ($(window).scrollTop() > 810 && $(window).scrollTop() < 1287) {
        $(".main-nav__item--cta>a").removeClass("active-contact");

    } else if 
    ($(window).scrollTop() > 1287 && $(window).scrollTop() < 1954) {
        $(".main-nav__item--cta>a").addClass("active-contact");

    } else if 
    ($(window).scrollTop() > 1954 && $(window).scrollTop() < 2335) {
        $(".main-nav__item--cta>a").removeClass("active-contact");

    } else if 
    ($(window).scrollTop() > 2278 && $(window).scrollTop() < 3600) {
        $(".main-nav__item--cta>a").addClass("active-contact");

        
    } else {
        //remove the background property so it comes transparent again (defined in your css)
       $(".main-nav__item--cta>a").removeClass("active-contact");
    }
});

/*
$(window).on("scroll", function() {
    if($(window).scrollTop() > 555) {
        $(".header").addClass("active");
    } else {
        //remove the background property so it comes transparent again (defined in your css)
       $(".header").removeClass("active");
    }
});
*/
