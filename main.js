console.log('hi there!');
//read more click
// $('.readmore a').click(function(e) {
//   // event.preventDefault();
//   e.preventDefault();
//   $('#show-this-on-click').slideToggle();
// })

//read more & read less click
$('.readmore a').click(function(e) {
  e.preventDefault();
  $('#show-this-on-click').slideDown();
  $('.readmore a').hide();
  $('.readless').removeClass('hide');
})

$('.readless a').click(function(e) {
  e.preventDefault();
  $('#show-this-on-click').slideUp();
  $('.readless').addClass('hide');
  $('.readmore a').show();
})
//
//about Relaxr click
$('#sidebar .learnmore').click(function(e) {
  // event.preventDefault();
  e.preventDefault();
  $('#learnmoretext').slideToggle();
})