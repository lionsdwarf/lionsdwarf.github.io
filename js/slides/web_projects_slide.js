//Slide - Web projects

var renderProject = function(projectObject) {
  var template = Handlebars.compile($('#project-template').html()); 
  var context = projectObject;
  var html = template(context);
  var domEl = projectObject.dom_el;
  $(domEl).append(html);
  // $('.proj-title').css('opacity', 0);
  $('.github-logo').css('opacity', 0);
};

var renderCSProject = function(projectObject) {
  var template = Handlebars.compile($('#cs-project-template').html()); 
  var context = projectObject;
  var html = template(context);
  var domEl = projectObject.dom_el;
  $(domEl).append(html);
};

var showGithubLogo = function() {
  $('.col').hover(function() {$(this).find('.github-logo').css('opacity', 1)}, function() {$(this).find('.github-logo').css('opacity', 0)})

};

var skrollDev = function() {
  var elementArray = $('#dev-svg');
  var scrollDuration = 15;
  skrollSVG(elementArray, scrollDuration);
};

