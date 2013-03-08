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

Zepto(function($){
  var banner = getEl('.banner');
  var body = getEl('body');
  
  if(banner != null){
    var hammerTime = Hammer(banner, {prevent_default: true}).on("hold", function(event) {
      $('.banner').addClass('activated');
    });

    var hammerTimes = Hammer(banner, {prevent_default: true}).on("release", function(event) {
      $('.banner').removeClass('activated');
    });
  }

  $('.pull').on('click', function() {
    $.ajax({
      type: 'GET',
      url: 'js/news.json',
      success: function(data) {
        var news = data.news;
        $.each(news, function(key, value){
          
        });
      },
      error: function(xhr, type) {
        console.log("Erro: "+ xhr.statusText +" | Status code: "+ xhr.status);
        console.log(type);
      }
    });
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