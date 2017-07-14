$(function(){
	$("#myCarousel").carousel('cycle');

	$(".menu").click(function(){
		
		var left = $(".nav_ul").position().left;	

		if(left <=-160){
			
			$(".nav_ul").animate({
				left:"-13%"
			});
		};
			
	});
	$("nav .nav_ul li:eq(4)").click(function(){
		$(".nav_ul").animate({
				left:"-113%"
		});
	});
	
	
	var left = $(".scenarios .content a");
	console.log(left.length);
	var right = $(".scenarios .right a");
	$(".scenarios .left a").mouseover(function(){
		left.removeClass("active");
		right.removeClass("active1");
		$(this).addClass("active");
		var xb = $(this).parent().index();
		$(".scenarios .content .img ul li").removeClass("active");
		$(".scenarios .content .img ul li:eq("+xb+")").addClass("active");
	});
	$(".scenarios .right a").mouseover(function(){
		left.removeClass("active");
		right.removeClass("active1");
		$(this).addClass("active1");
		var xb = $(this).parent().index()+5;
		$(".scenarios .content .img ul li").removeClass("active");
		$(".scenarios .content .img ul li:eq("+xb+")").addClass("active");
	});
	
	
	
	
	$(".product .content li").mouseover(function(){
		$(".product .content li").removeClass("active");
		$(".product .content li").find("#xq a").removeClass("active");
		$(".product .content li").find("span").removeClass("active");
		$(this).addClass("active");
		$(this).find("#xq a").addClass("active");
		$(this).find("span").addClass("active");
	});
	
	$(window).scroll(function(){
		if($(window).scrollTop()>10){
			$("nav").addClass("active");
		}
		if($(window).scrollTop()<=10){
			$("nav").removeClass("active");
		}
	});

	
	$("header .tab_k button").click(function(){
		var index = $(this).index();
		$("header .tab_k button").removeClass("active");
		$(this).addClass("active");
	
		$("header .tab_k img").attr("src","images/" + index +".png");
	});

})
