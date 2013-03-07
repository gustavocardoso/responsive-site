function getEl(el) {
  return document.querySelector(el);
}

function writeLogger(target, event) {
  target.innerHTML = event.type;
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
  var target = getEl('.hit-area');
  var logger = getEl('.logger');
  setEvents(target, logger);

  $('#news').on('click', function() {
    $.ajax({
      type: 'GET',
      url: 'news.htmls',
      success: function(data) {
        console.log("Data: "+ data);
      },
      error: function(xhr, type) {
        console.log("Erro: "+ xhr.statusText +" | Status code: "+ xhr.status);
        console.log(type);
      }
    });
  });

})