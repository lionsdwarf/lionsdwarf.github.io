var initializeSlide = function(slide) {
  //Slide remains off screen for duration equal to prior slide's final scroll position
  var remainFixed = 'data-' + App.position + 'p';
  slide.attr(remainFixed, 'transform:translate(0, 100%)');
  //Set transition point
  App.position = App.position + 100;
  var transition = 'data-' + App.position + 'p';
  slide.attr(transition, 'transform: translate(0, 0%)');
};

var finalizeSlide = function(slide) {
  //Slide remains fixed on screen for duration of scrolling
  var remainFixed = 'data-' + App.position + 'p';
  slide.attr(remainFixed, 'transform:translate(0, 0%)');
  //Set slide transition point 
  var finalPosition = App.position + 100;
  var transition = 'data-' + finalPosition + 'p';
  slide.attr(transition, 'transform: translate(0, -100%)');
};

var skrollSVG = function(elementArray, scrollDuration) {
  $.each(elementArray, function(i, val) {
    var element = $(val);
    //At initial scroll position, set stroke-dashoffset equal to element's stroke-dasharray 
    var iDataAttr = 'data-' + App.position + 'p';
    var dashArray = element.css('stroke-dasharray');
    var dashArray = parseInt(dashArray);
    var iDataValue = 'stroke-dashoffset:' + dashArray + ';  ';
    element.attr(iDataAttr, iDataValue);
    //At final scroll position, set stroke-dashoffset to 0
    var finalPosition = App.position + scrollDuration;
    var fDataAttr = 'data-' + finalPosition + 'p';
    element.attr(fDataAttr, 'stroke-dashoffset: 0;');
    //Revise initial scroll position for subsequent skroll
    App.position = finalPosition;
  });
};

var endSkrollr = function(slide) {
  var remainFixed = 'data-' + App.position + 'p';
  slide.attr(remainFixed, 'transform:translate(0, 0%)');
};


var skrollGap = function(value) {
  App.position = App.position + value;
}; 