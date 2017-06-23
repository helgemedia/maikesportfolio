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
});

//Email Adress Anti-Spam var

var first = "maike";
var last = "iammai.de";
