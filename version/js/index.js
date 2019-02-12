// $(window).resize(function() {
//   var ww = $(window).width();
//   $('.flexslider ul li').each(function() {
//     $(this).width(ww);
//   });
// });

function flexFirst() {
  $('#flex_First .flexslider').flexslider({
    animation: "slide"
  });

}

//$('.slider-page').css('height', $(window).height());  

function flexDetails() {
  $('#flex_Details .flexslider').flexslider({
    animation: "slide"
  });
}


function flexCarouselFirst() {

  $("#coming_page").flexisel({
    visibleItems: 2,
    itemsToScroll: 1,
    animationSpeed: 200,
    infinite: true,
    autoPlay: {
      enable: true,
      interval: 5000,
      pauseOnHover: true
    },
    responsiveBreakpoints: {
      portrait: {
        changePoint: 480,
        visibleItems: 1,
        itemsToScroll: 1
      },
      landscape: {
        changePoint: 767,
        visibleItems: 1,
        itemsToScroll: 1
      },
      tablet: {
        changePoint: 992,
        visibleItems: 1,
        itemsToScroll: 1
      }
    }
  });

}

$(document).ready(function () {

// $('#nav_Button i').removeClass('nav-close');
//   $('#nav_Button').click(function () {
//     $('#nav_Div').toggleClass('view-nav');
//     if ($('#nav_Button i').hasClass('nav-open')) {
//       $('#nav_Button i').removeClass('nav-open');
//       $('#nav_Button i').addClass('nav-close');
//       $('body').css('overflow', 'hidden');
//     } else {
//       $('#nav_Button i').removeClass('nav-close');
//       $('#nav_Button i').addClass('nav-open');
//       $('body').css('overflow', 'auto');
//     }
// });

$('#nav_Button').click(function(){
  $('#nav_Div').addClass('view-nav');
  $('body').css('overflow', 'hidden');  
});
$('#nav_Button_Close').click(function(){
  $('#nav_Div').removeClass('view-nav');
  $('body').css('overflow', 'auto');  
});

  $("#flex_First .flex-direction-nav").wrap("<div class='flex-wrapper'><div class='flex-wrap'></div></div>");
  $("#flex_First .flex-direction-nav").append("<div class='flex-count'>1 Next</div>");

  $("#flex_Details .flex-direction-nav").wrap("<div class='flex-wrapper'><div class='flex-wrap'></div></div>");
  $("#flex_Details .flex-direction-nav").append("<div class='flex-count'>1 Next</div>");

  $(".nbs-flexisel-nav-left, .nbs-flexisel-nav-right").wrapAll("<div class='flexisel-wrapper'><div class='flexisel-main'><div class='flexisel-wrap'></div></div></div>");
  $(".flexisel-wrap").append("<div class='flexisel-count'>1 Next</div>");


});