
// TABS HEADER

$(document).ready(function ($) {
  $('.tab_content').hide();
  $('.tab_content:first').show();
  $('.tabs li:first').addClass('active');
  $('.tabs li').click(function (event) {
    $('.tabs li').removeClass('active');
    $(this).addClass('active');
    $('.tab_content').hide();

    var selectTab = $(this).find('a').attr("href");

    $(selectTab).fadeIn();
  });
});

//End TABS HEADER

//  Google searcher fake
var destinations = document.querySelectorAll("[data-attribute='somePlaceholder']");

 var searcher = document.getElementById("google-search");

  searcher.addEventListener('input', event => {
   destinations.forEach(destination => destination.textContent = searcher.value);
});

// // End Google searcher fake

// Show-hide google-searcher-block
$(document).ready(function () {
  $(".google-request-btn").click(function () {
    $(".google-request-block").hide(100);
    $(".google-searcher-block").show(300);
  })

  $(".button-panel").click(function () {
    $(".google-request-block").show(300);
    $(".google-searcher-block").hide(300);
  })
});
// End Show-hide google-searcher-block

// Slick-slider result-carousel
$('.result-carousel').slick({
  slidesToShow: 3,
  nextArrow: '.result-prev-btn',
  prevArrow: '.result-next-btn',
  responsive: [
    {
      breakpoint: 1025,
      settings: {
        slidesToShow: 2,
        infinite: true,
      }
    },
    {
      breakpoint: 860,
      settings: {
        slidesToShow: 1,
        infinite: true,
      }
    },
    {
      breakpoint: 650,
      settings: {
        slidesToShow: 1,
        autoplay:true,
        autoplaySpeed: 2000,
      }
    },
  ]
});


// Slick-slider steps-slider slider-counter
var helpers = {
  addZeros: function (n) {
    return (n < 10) ? '0' + n : '' + n;
  }
};

function sliderInit() {
  var $slider = $('.steps-slider');
  $slider.each(function () {
    var $sliderParent = $('.slides-numbers');
    $('.steps-slider').slick({
      slidesToShow: 1,
      nextArrow: '.steps-prev-btn',
      prevArrow: '.steps-next-btn'
    });

    if ($('.steps-slider').find('.steps-slider-wrapper').length > 1) {
      $('.slides-numbers').show();
    }

    $('.steps-slider').on('afterChange', function (event, slick, currentSlide) {
      $('.slides-numbers .active').html(helpers.addZeros(currentSlide + 1));
    });

    var sliderItemsNum = $(this).find('.slick-slide').not('.slick-cloned').length;
    $('.slides-numbers .total').html(helpers.addZeros(sliderItemsNum));

  });

  $('.slick-next').on('click', function () {
    console.log('test');
    $('.steps-slider').slick();
  });
};

sliderInit();

// Slick-slider steps-slider-big, bg
$(document).ready(function () {
  var status = $('.slides-numbers-big');
  var slickElement = $('.steps-slider');

  slickElement.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
    var i = (currentSlide ? currentSlide : 0) + 1;
    $('.slides-numbers-big').text(i);
  });

});

// Animation circle-block
$(document).ready(function () {

  $(window).scroll(function (event) {

    var axisY = $(this).scrollTop();

    if (axisY >= 2450) {
      $('.condition_img-anim').addClass('active');
      $('.camera_img-anim').addClass('active');
      $('.car_img-anim').addClass('active');
      $('.paket_img-anim').addClass('active');
      $('.flat_img-anim').addClass('active');
      $('.chair_img-anim').addClass('active');
      $('.notebook_img-anim').addClass('active');
    }
  });
});

// Slider certificate
$('.certificate-slider-wrapper').slick({
  slidesToShow: 2,
  nextArrow: '.certificate-prev-btn',
  prevArrow: '.certificate-next-btn',
  responsive: [
    {
      breakpoint: 1025,
      settings: {
        slidesToShow: 1,
        infinite: true,
      }
    },
    {
      breakpoint: 650,
      settings: {
        slidesToShow: 1,
        autoplay:true,
        autoplaySpeed: 2000,
      }
    },
  ]
});

// Slider proffesionals mobile
$('.proffessional-slider-wrap').slick({
  slidesToShow: 1,
  arrows:false,
  autoplay:true,
  autoplaySpeed: 2000
});

// Accordion faq
(function ($) {
  //Первый активный /* $('.accordion-wrapper > li:eq(0) a').addClass('active').next().slideDown(); */ 

  $('.accordion-wrapper a').click(function (j) {
    var dropDown = $(this).closest('li').find('p');

    $(this).closest('.accordion-wrapper').find('p').not(dropDown).slideUp();

    if ($(this).hasClass('active')) {
      $(this).removeClass('active');
    } else {
      $(this).closest('.accordion-wrapper').find('a.active').removeClass('active');
      $(this).addClass('active');
    }

    dropDown.stop(false, true).slideToggle();

    j.preventDefault();
  });
})(jQuery);

// Range 

$(function () {
  $("#slider-range-min").slider({
    range: "min",
    value: 500,
    min: 0,
    max: 1000,
    slide: function (event, ui) {
      $("#amount").val(ui.value);
    }
  });
  $("#amount").val($("#slider-range-min").slider("value"));
});

// Google-map
function initMap() {
  var uluru = { lat: 50.395380, lng: 30.641770 };
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 17,
    center: uluru
  });
  var marker = new google.maps.Marker({
    position: uluru,
    map: map,
    icon: "img/map-tag.png",
    animation: google.maps.Animation.DROP
  });
}

// Wow
new WOW().init();


$(window).width(function () {

  if ($(window).width() < 992) {
    $('.wow').addClass('wow-removed').removeClass('wow');
  }
  else {
    $('.wow-removed').addClass('wow').removeClass('wow-removed');
  }
});


// Mobile-nav

// Open menu mobile
$('.burger-menu').click(function () {
  $('.nav-mobile-wrap').addClass('enabled');
  $('.close-btn-nav').removeClass('close');

  if ($('.nav-mobile-wrap').addClass('enabled')) {
    $('.navigation-mobile').css("transform", "translateX(0%)");
  } else {
    return false;
  }
});

// Close by button in mobile-nav
$('.close-btn-nav').click(function () {
  $(this).addClass('close');
  $('.navigation-mobile').css("transform", "translateX(-100%)");
  $('.nav-mobile-wrap').removeClass('enabled');
});
// Close by click on wrap
$('.nav-mobile-wrap').click(function () {
  $('.navigation-mobile').css("transform", "translateX(-100%)");
  $('.nav-mobile-wrap').removeClass('enabled');
});
// Disable click on navigation-mobile
$('.navigation-mobile').click(function (event) {
  event.stopPropagation();
})

// Table top scrollbar
$('.table-overflow').topScrollbar();
if ($(window).width() > 769) {
  $('.table-overflow').topScrollbar(false);
} 


// Lift blog-form
$(window).scroll(function (event) {

  var axisY = $(this).scrollTop();
  
   if (axisY > 200 && axisY <= 2235) {
    $('.fixed-wrap').addClass('fixed');
    $('.fixed-wrap').removeClass('absolute');
    $('.fixed-wrap').removeClass('absolute-bottom');
  }else if(axisY >= 2250){
    $('.fixed-wrap').addClass('absolute-bottom');
    $('.fixed-wrap').removeClass('fixed');
  }
  else {
    $('.fixed-wrap').removeClass('fixed');
  }
});