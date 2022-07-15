// LOADS GLOBAL NAV
$(function(){
  $("#nav").load("/hw-rb/nav.html");


  setTimeout(
    function()
    {
      var href = window.location.pathname;
      $('#nav').find('a[href="' + href + '"]').addClass('active');
    }, 100);
});

// CALENDAR SELECTION
$(function() {
  $('#weeks').change(function(){
    $('.week').hide();
    $('#' + $(this).val()).show();
  }).change();
});

window.onload = function() {
  console.log('Loaded :-)');
};

// SCREENSAVER
Cookies.set('day', false);
Cookies.get()

var elem = document.getElementById("timer"), timeout, startTimer = function timer() {
    timeout = setTimeout(timer, 5000)
    $('.sun').addClass( "saving" );
    $('.moon').addClass( "saving" );
    $('body').addClass( "saving" );
}
function resetTimer() {
    // here you reset the timer...
    clearTimeout(timeout);
    startTimer();
    $('.sun').removeClass( "saving" );
    $('.moon').removeClass( "saving" );
    $('body').removeClass( "saving" );
    //... and also you could start again some other action
}

function dayTime() {
  console.log('day');
  document.addEventListener("mousemove", resetTimer);
  document.addEventListener("keypress", resetTimer);
  resetTimer();

  Cookies.set('night', false);

  Cookies.set('day', true);
};

function nightTime() {
  console.log('night');

  clearTimeout(timeout);
  $('.sun').addClass( "saving" );
  $('.moon').addClass( "saving" );
  $('body').addClass( "saving" );

  document.removeEventListener("mousemove", resetTimer);
  document.removeEventListener("keypress", resetTimer);

  Cookies.set('day', false);

  Cookies.set('night', true);
};


if(Cookies.get('day') == 'true'){
  console.log('day cookie');
  dayTime();
} else if(Cookies.get('night') == 'true') {
  console.log('night cookie');
  nightTime();
}
