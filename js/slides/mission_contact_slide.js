var renderEmail = function() {
  var username = 'leinsdorf';
  var hostname = 'gmail.com';
  var linktext = username + '@' + hostname ;
  var element = "<a href='" + "mailto:" + username + "@" + hostname + "' class='personal-link'>" + linktext + "</a>";
  $(element).appendTo($('#email-li'));
};


var skrollAbout = function() {
  var elementArray = $('#about-svg').children();
  var scrollDuration = 15;
  skrollSVG(elementArray, scrollDuration);
};
