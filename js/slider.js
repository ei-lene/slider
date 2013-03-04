$(document).ready(function(){

  // Set variables and width of div
  var unitQuant = $('.slide_unit').size();
  var unitWidth = $('.slide_unit').width();
  var blockWidth = unitQuant * unitWidth;

  $('#slide_block').width(blockWidth);

  var navNum = 0;
  var slidePos = 0;

  // Mouseover & mouseout effect for navigation links
  $('#slide_nav li').mouseover(function(){
    $('#slide_nav li').removeClass('hover');
    $(this).addClass('hover');
  });

  $('#slide_nav li').mouseout(function(){
    $('#slide_nav li').removeClass('hover');
  });

  // Navigation via navigation links
	$('#slide_nav li').click(function(){
    $('#slide_nav li').removeClass('selected').removeClass('hover');
    $(this).addClass('selected');
    navNum = $('#slide_nav li').index(this);
    slidePos = navNum * unitWidth;
    $('#slide_block').animate({right:slidePos}, 400);
  });

  // Navigation via front and back arrows
  $('#clicker_f').click(function(){
    if(navNum === (unitQuant - 1)){
      navNum = 0;
      slidePos = navNum * unitWidth;  
      $('#slide_block').animate({right:slidePos}, 20);
    }
    else{
      navNum ++
      slidePos = navNum * unitWidth;
      $('#slide_block').animate({right:slidePos}, 300);
   }
    $('#slide_nav li').removeClass('selected').removeClass('hover');
    $('#slide_nav li').eq(navNum).addClass('selected');
  });

  $('#clicker_r').click(function(){
    if(navNum === 0){
      navNum = (unitQuant - 1);
      slidePos = navNum * unitWidth;  
      $('#slide_block').animate({right:slidePos}, 20);
    }
    else{
      navNum --
      slidePos = navNum * unitWidth;
      $('#slide_block').animate({right:slidePos}, 300);
   }
    $('#slide_nav li').removeClass('selected').removeClass('hover');
    $('#slide_nav li').eq(navNum).addClass('selected');
  });


});