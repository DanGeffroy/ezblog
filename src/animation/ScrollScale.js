import $ from "jquery/dist/jquery.min.js";
const ScrollScale = $(window).scroll(function(){
  if($(this).scrollTop() > 400){
    $('.title-hide').css({'transform': 'scale(0.20)'});
    $('.title-hide').css({'opacity': '0'});
  }
  else if($(this).scrollTop() > 300){
    $('.title-hide').css({'transform': 'scale(0.40)'});
    $('.title-hide').css({'opacity': '0.40'});
  }
  else if($(this).scrollTop() > 200){
    $('.title-hide').css({'transform': 'scale(0.60)'});
    $('.title-hide').css({'opacity': '0.60'});
  }
  else if($(this).scrollTop() > 100){
    $('.title-hide').css({'transform': 'scale(0.80)'});
    $('.title-hide').css({'opacity': '0.80'});
  }
  else{
  	$('.title-hide').css({'transform': 'scale(1)'});
    $('.title-hide').css({'opacity': '1'});
  }
});
export default ScrollScale;
