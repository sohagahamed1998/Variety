
$(document).ready(function(){
	$('.nav-icon').click(function(){
		$('.header-menu ul').slideToggle(1000)

		return false;
	})


	$('.header-menu ul li a').click(function(){
        $('html,body').animate({
          scrollTop:$($(this).attr('href')).offset().top
        },1000);
        return false;
      })
})


$(window).scroll(function(){
      var scrollValue=  $(this).scrollTop();
      if(scrollValue>500){
        $('.scrollbtn').show();
      }else{
        $('.scrollbtn').hide();
      }
        
      if(scrollValue>300){
        $('.header-area').addClass('FixedHeader');
      }else{
        $('.header-area').removeClass('FixedHeader');
      }
     })