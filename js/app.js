function getEl(el) {
  return document.querySelector(el);
}

function setEvents(target, logger) {
  var setTap = Hammer(target, {prevent_default: true}).on("tap", function(event) {
    writeLogger(logger, event);
  });

  var swipeGestures = ["swipe", "swipeleft", "swiperight", "swipeup", "swipedown"];

  var setSwipe = Hammer(target, {prevent_default: true}).on(swipeGestures.join(" "), function() {
    writeLogger(logger, event);
  });
}

function getOrientation() {
  window.onorientationchange = function() {
    alert(window.orientation);
  }
}

function loadJS() {
  if(windowSize == 'widescreen') {
    // $.get('js/test.js', function(file) {
    //   $('head').append(file);
    // });
  }
}

function loadSubMenu(windowSize) {
  if(windowSize == '') {
    $('.nav-anchors').hide();
    $('.sub-nav-links').show();
  } else if(windowSize == 'mini') {
    $('.nav-anchors').show();
    $('.sub-nav-links').hide();
  }
}

Zepto(function($){

  // var match = window.matchMedia("screen and (max-width:480px)");
  // console.log(match.media);     //"screen and (max-width:800px)"
  // console.log(match.matches);   //true or false
  // match.addListener(function(match) {
  //   if(match.media == 'screen and (max-width: 480px)') {
  //     alert('4:20');
  //   }
  // });

  var windowSize = window.getComputedStyle(document.body, ':after').getPropertyValue('content');
  loadSubMenu(windowSize);
  
  $(window).on('resize', function(e) {
    e.stopPropagation();
    var windowSize = window.getComputedStyle(document.body, ':after').getPropertyValue('content');
    loadSubMenu(windowSize);
  });

  $('.nav-anchors a').on('click', function(e) {
    e.preventDefault();
    e.stopPropagation();

    if($('.toggle-menu').hasClass('open')) {
      $('.toggle-menu').removeClass('open');
      $('.sub-nav-links').hide();
    } else {
      $('.toggle-menu').addClass('open');
      $('.sub-nav-links').show();
    }
  });

  //loadJS();
  //getOrientation();

  var banner = getEl('.banner');
  var body = getEl('body');
  
  if(banner != null){
    var hammerTime = Hammer(banner).on("hold", function(event) {
      $('.banner').addClass('activated');
    });

    var hammerTimes = Hammer(banner).on("release", function(event) {
      $('.banner').removeClass('activated');
    });
  }

  $('.pull').on('click', function() {
    $.ajax({
      type: 'GET',
      url: 'js/news.json',
      success: function(data) {
        var news = data.news;
        var newsList = "";
        var listOdd;

        $.each(news, function(index, newsItem){
          if(index % 2 == 1){
            listOdd = " odd";
          }else {
            listOdd = "";
          }
          newsList += "<li class='news-item"+ listOdd +"'><h2><a href='"+ newsItem.slug +"' class='news-title' title='"+ newsItem.title +"'>"+ newsItem.title +"</a></h2><p class='news-subtitle'>"+ newsItem.subtitle+"</p><span class='news-body'>"+ newsItem.body +"</span></li>";
        });
        $('.news-list').append(newsList);

        //zepto
        $('.news-item').swipeRight(function() {
          $(this).find('.news-body').show();
        });

        $('.news-item').swipeLeft(function() {
          $(this).find('.news-body').hide();
        });
      },
      error: function(xhr, type) {
        console.log("Erro: "+ xhr.statusText +" | Status code: "+ xhr.status);
        console.log(type);
      }
    });
  });

  $(document).on('ajaxStart', function() {
    $('.ajax-action').addClass('disabled');
    $('.ajax-action').before('<div class="ajax-loader"></div>');
  });

  $(document).on('ajaxSuccess', function() {
    $('.ajax-loader').remove();
    $('.ajax-action').remove();
  });
});

(function( win ){
  var doc = win.document;
  
  // If there's a hash, or addEventListener is undefined, stop here
  if( !location.hash && win.addEventListener ){
    
    //scroll to 1
    window.scrollTo( 0, 1 );
    var scrollTop = 1,
      getScrollTop = function(){
        return win.pageYOffset || doc.compatMode === "CSS1Compat" && doc.documentElement.scrollTop || doc.body.scrollTop || 0;
      },
    
      //reset to 0 on bodyready, if needed
      bodycheck = setInterval(function(){
        if( doc.body ){
          clearInterval( bodycheck );
          scrollTop = getScrollTop();
          win.scrollTo( 0, scrollTop === 1 ? 0 : 1 );
        } 
      }, 15 );
    
    win.addEventListener( "load", function(){
      setTimeout(function(){
        //at load, if user hasn't scrolled more than 20 or so...
        if( getScrollTop() < 20 ){
          //reset to hide addr bar at onload
          win.scrollTo( 0, scrollTop === 1 ? 0 : 1 );
        }
      }, 0);
    } );
  }
})( this );