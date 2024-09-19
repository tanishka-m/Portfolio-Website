$(document).ready(function() {
    $(window).on('scroll', function() {
      var scroll = $(window).scrollTop();
      if (scroll >= 50) {
        $("nav.r-nav").addClass("stickyadd");
      } else {
        $("nav.r-nav").removeClass("stickyadd");
      }
    });

    var typed = new Typed(".element",{
      strings:["Tanishka More", "a Developer", "a Designer", "a Learner"],
      smartBackspace:true,
      typeSpeed:100,
      backSpeed:100,
      loop:true,
      loopCount:Infinity,
      startDelay:1000
    })

    //progress bars
    var waypoint = new Waypoint({
      element: document.getElementById('exp-id'),
      handler: function() {
        var p = document.querySelectorAll('.progress-bar'); //array return
        p[0].setAttribute("style", "width:99%; transition:1s all");
        p[1].setAttribute("style", "width:75%; transition:1.5s all");
        p[2].setAttribute("style", "width:95%; transition:1.7s all");
        p[3].setAttribute("style", "width:90%; transition:2s all");
        p[4].setAttribute("style", "width:75%; transition:2.3s all");
        p[5].setAttribute("style", "width:80%; transition:2.7s all");
      },
      offset:'90%'
    })

    // Testimony
    $(".owl-carousel").owlCarousel({
      loop:true,
      autoplay:true,
      autoplayTimeout:4000,
      items:1
    });

    //filter work section
    var filterizd = $('.filter-container').filterizr({
      animationDuration:.5,
    });


  });
  