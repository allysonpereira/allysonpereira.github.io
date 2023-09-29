// use scrollspy
$('body').scrollspy({
    target: '#navbarResponsive',
    offset: 50,
  });
  
  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function () {
    $('.navbar-collapse').collapse('hide');
  });