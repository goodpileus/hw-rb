window.onload = function() {
  console.log('Loaded :-)');
  // cycleColors();
};

var colors = ['#a89794', '#915840', '#4d6c4b', '#585883', '#a68068', '#816e8e', '#a6a55a'];

function cycleColors(){
  color = colors.shift();
  colors.push(color);

  $('body').css({
    'background' : color,
  });;
}

var interval = setInterval(timer, 6000);

function timer() {
  // cycleColors();
}

// LOADS GLOBAL NAV
$(function(){
  $("#nav").load("/hw-rb/nav.html");
});

// CALENDAR SELECTION
$(function() {
  $('#weeks').change(function(){
    $('.week').hide();
    $('#' + $(this).val()).show();
  }).change();
});

// CURRENT PAGE
$(document).ready(function(){
    $("a[href='" + window.location.href + "']").addClass("active");
});
