$('.next').click(function(e){
  
  // prevent link from jumping down the page
  e.preventDefault();

  // get reference to current content container
  var parent = $(this).parents('div').attr('id');

  // use parent to find out what the next one is
  var next = $('#'+parent).next().attr('id');
  
  // save the name of the next container w a hashtag
  var target = '#'+next;
  
  // identify the top position of the next container
  var top = $(target).offset().top;

  // send this info to function that slides the page
  animBody(top);

});

function animBody(top){
  $('html,body').animate({
    scrollTop: top
    },700);
}
