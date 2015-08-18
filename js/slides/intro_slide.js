//Reveal 'Pls scroll' on arrow hover
var showScrollMsg = function() {
  $('#arrow-wrapper').hover(function() {
    // $(this).css('opacity', 0);
    $('#pls-scroll-wrapper').css('opacity', 1);
    }, function() {
    $(this).css('opacity', 1);
    $('#pls-scroll-wrapper').css('opacity', 0);
  });
};

//skroll visible svgs
var skrollLeinsdorf = function() {
  var elementArray = [
    $('#leinsdorf'),
    $('#leinsdorf-i'),
    ];
  var scrollDuration = 8;
  skrollSVG(elementArray, scrollDuration);
};

var skrollDotNYC = function() {
  var elementArray = $('#dot-nyc').children();
  var scrollDuration = 7;
  skrollSVG(elementArray, scrollDuration);
};

var skrollWelcome = function() {
  var elementArray = $('#welcome-excl-pt').children();
  var scrollDuration = 7;
  skrollSVG(elementArray, scrollDuration);
};

var skrollLeinsdorfDuplicates = function() {
  var elementArray = $('#leinsdorf-duplicates').children();
  var scrollDuration = 0.5;
  skrollSVG(elementArray, scrollDuration);
};
