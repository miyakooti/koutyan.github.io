$(function() {
  $('.icons a').click(function(){
    var id = $(this).attr('href');
    var position = $(id).offset().top;
    $('html, body').animate({'scrollTop':position}, 500);
  });

  $('#me').hover(function(){
    $('.myname').fadeIn(1500);
  },
  function(){

  });
  $('.work').hover(function(){
    $(this).animate({'width':'33%'}, 300);
  },
  function(){
    $(this).animate({'width':'30%'}, 300);
  });

});
