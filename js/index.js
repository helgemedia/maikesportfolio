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
  }
};

$('document').ready(function() {

  // Logo and Background Animation
  $('.logo, .logobox, .background, .menubox').on('click', function() {
    $('.background').addClass('animated');
    $('.logobox').addClass('animatedlogo');
    $('.logo').addClass('animatedlogowidth');
    $('.menu a').fadeIn(3000);
    $('.icon').fadeIn(3000);
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

    // Execute the relevant function based on the hash stored in temp.
    if (sitemap[temp]) {
      sitemap[temp]();
    }
    // If no fitting keyword is present, render an error page.
    else {
      $('.errorpage').addClass('visible');
    }
  }
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

// Masonry Initialization
var grid = $('.grid');

initMasonry();

function initMasonry() {
  grid.masonry({
    // options
    itemSelector: '.grid-item',
    columnWidth: '.grid-sizer',
    percentPosition: true
  });
}

function initSlick() {
  // Slick Image Slider Initialization
  var picturebox = $(".picturebox")
  picturebox.slick({
    dots: true,
    arrows: false,
    adaptiveHeight: true,
    fade: true
  });

  // Slick slider next picture onclick event listener
  projects.forEach(function(project) {
    var projectImage = ".p-" + project;
    $(projectImage).on('click', function() {
      $(projectImage).slick('slickNext');
    });
  });
}

$(window).on('load', function() {
  initSlick();
  grid = $('.grid');
  grid.masonry();
})
