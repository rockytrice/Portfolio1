$(document).ready(function () {
    // navbar-toggler
    $(".navbar-toggler").click("touchstart",function () {
        $(".navbar-toggler").toggleClass("change");
    })

// adding background and fixed navbar
$(window).scroll(function(){
    let position = $(this).scrollTop();
        if(position >=149){
            $(".navbar").addClass("navbar-background");
            $(".navbar").addClass("fixed-top");
        }
        else{
            $(".navbar").removeClass("navbar-background");
            $(".navbar").removeClass("fixed-top");
        }
 })
    // smooth scroll
    $(".nav-item a").click("touchstart",function(link){
        link.preventDefault();
        let target = $(this).attr("href");
        $("html, body").stop().animate({
            scrollTop: $(target).offset().top
        },3000);
    })

    // init Isotope
 let $grid = $('.grid').isotope({
    // options
  });
  // filter items on button click
  $('.filter-button-group').on( 'click touchstart', 'button', function() {
    let filterValue = $(this).attr('data-filter');
    $grid.isotope({ filter: filterValue });
  });
  // layout Isotope after each image loads
 $grid.imagesLoaded().progress( function() {
    $grid.isotope('layout');
  });

});