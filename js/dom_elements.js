
var hideElement = function(element, scrollDuration) {
  var iDataAttr = 'data-' + App.position + 'p';
  element.attr(iDataAttr, 'opacity: 1');
  var finalPosition = App.position + scrollDuration;
  var fDataAttr = 'data-' + finalPosition + 'p';
  element.attr(fDataAttr, 'opacity: 0');
  App.position = finalPosition;
};

var showElement = function(element, scrollDuration) {
  var iDataAttr = 'data-' + App.position + 'p';
  element.attr(iDataAttr, 'opacity: 0');
  var finalPosition = App.position + scrollDuration;
  var fDataAttr = 'data-' + finalPosition + 'p';
  element.attr(fDataAttr, 'opacity: 1');
  App.position = finalPosition;
};

var fadeElement = function(element, scrollDuration) {
  var iDataAttr = 'data-' + App.position + 'p';
  element.attr(iDataAttr, 'opacity: 1');
  var finalPosition = App.position + scrollDuration;
  var fDataAttr = 'data-' + finalPosition + 'p';
  element.attr(fDataAttr, 'opacity: 0.6');
  App.position = finalPosition;
};