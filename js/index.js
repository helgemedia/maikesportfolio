$('document').ready(function() {

  // Logo and Background Animation
  $('.logo, .background, .menubox').on('click', function() {
    $('.background').addClass("animated");
    $('.logo').addClass("animatedlogo");
    $('.menu a').fadeIn(3000);
  });

  // Single Page Routing based on Hash-Changes

  // Event handler that calls the render function on every hash-change
  $(window).on('hashchange', function() {
    render(decodeURI(window.location.hash));
  });

  // Trigger App on page load, after background has loaded to hide ugliness
  var checkdiv = $('.background'),
    bg = checkdiv.css('background-image');
  if (bg) {
    var src = bg.replace(/(^url\()|(\)$|[\"\'])/g, ''),
      $img = $('<img>').attr('src', src).on('load', function() {

        $(window).trigger('hashchange');
      });
  }

  // Navigation

  function render(url) {

    // Get the keyword from the url.
    var temp = url.split('/')[0];
    console.log(temp);

    // Hide whatever page is currently shown.
    $('.content').removeClass('visible');

    // Sitemap and associated loading functions

    var sitemap = {
      '': function() {
        $('.portfolio').addClass('visible');
      },
      '#Portfolio': function() {
        $('.portfolio').addClass('visible');
      },
      '#About': function() {
        $('.about').addClass('visible');
      },
      '#Kontakt': function() {
        $('.kontakt').addClass('visible');
      },
      '#Impressum': function() {
        $('.impressum').addClass('visible');
      },

      //6
      '#Fidena': function() {
        $('.fidena').addClass('visible');
      },
      //5
      '#Radierung': function() {
        $('.radierung').addClass('visible');
      },
      //4
      '#Oszillation': function() {
        $('.oszillation').addClass('visible');
      },
      //3
      '#Siebdruck': function() {
        $('.siebdruck').addClass('visible');
      },
      //2
      '#Titus': function() {
        $('.titus').addClass('visible');
      },
      //1
      '#DAV': function() {
        $('.dav').addClass('visible');
      }
    };

    // Execute the relevant function based on the hash stored in temp.
    if (sitemap[temp]) {
      sitemap[temp]();
    }
    // If no fitting keyword is present, render an error page.
    else {
      $('.errorpage').addClass('visible');
    }
  }

  // Masonry Initialization
  $('.grid').masonry({
    // options
    itemSelector: '.grid-item',
    columnWidth: '.grid-sizer',
    percentPosition: true
  });
  $('.grid').imagesLoaded().progress(function() {
    $('.grid').masonry('layout');
  });

  // Slick Image Slider Initialization
  $(".picturebox").slick({
    dots: true,
    arrows: false,
    adaptiveHeight: true,
    fade: true
  });

  $('.p-one').on('click', function() {
    $('.p-one').slick('slickNext');
  });

  $('.p-two').on('click', function() {
    $('.p-two').slick('slickNext');
  });

  $('.p-three').on('click', function() {
    $('.p-three').slick('slickNext');
  });

  $('.p-four').on('click', function() {
    $('.p-four').slick('slickNext');
  });

  $('.p-five').on('click', function() {
    $('.p-five').slick('slickNext');
  });

  $('.p-six').on('click', function() {
    $('.p-six').slick('slickNext');
  });

});

/* Toggle between adding and removing the "responsive" class to #mainmenu on click */
function respMenu() {
  var x = document.getElementById("mobilemenu");
  var y = document.getElementById("button1");
  if (x.className === "menuresponsive") {
    x.className += " responsive";
    y.className += " responsive";
  } else {
    x.className = "menuresponsive";
    y.className = "icon";
  }
}

//Email Adress Anti-Spam var

var first = "maike";
var last = "iammai.de";
