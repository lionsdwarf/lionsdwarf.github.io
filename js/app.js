App = {
  position: 1
};

$(function(){

  //Slide - About me
  hideElement($('#about-me'), 8);

  //Slide - Intro
  showScrollMsg();
  hideElement($('#arrow-scroll-wrapper'), 0.2);
  // skrollIntroDiv();
  skrollLeinsdorf();
  skrollDotNYC();
  hideElement($('#dot-nyc'), 1);
  skrollLeinsdorfDuplicates();
  finalizeSlide($('#intro-slide'));
  
  //Slide - Web projects
  $('.row').css('opacity', 0);
  initializeSlide($('#web-projects-slide'));
  renderCSProject(projects.future_type);
  renderProject(projects.art_victim);
  renderProject(projects.jac_soundfactory);
  renderProject(projects.happy_plantr);
  skrollDev();
  skrollGap(1);
  fadeElement($('#dev-svg'), 10);
  showElement($('.row'), 10);
  skrollGap(20);
  $('.col').hover(function() {$(this).find('.github-logo').css('opacity', 1)}, function() {$(this).find('.github-logo').css('opacity', 0)})
  finalizeSlide($('#web-projects-slide'));

  //Slide - Tech stack
  $('.stack').css('opacity', 0);
  initializeSlide($('#tech-stack-slide'));
  skrollTek();
  skrollGap(1);
  fadeElement($('#tek-svg'), 10);
  showElement($('.stack'), 10);
  skrollInvisibleDiv();
  skrollGap(20);
  objectifyTech(techStackLeft);
  objectifyTech(techStackRight);
  finalizeSlide($('#tech-stack-slide'));  

  //Slide - Mission contact
  initializeSlide($('#mission-contact-slide'));
  renderEmail();
  skrollAbout();
  endSkrollr($('#mission-contact-slide'));

  skrollr.init({
    render: function() {
      typeStacks();
   }
  });
});
