//current position
var pos = 0;
//number of slides
var totalSlides = $('#slider-wrap ul li').length;
//get the slide width
var sliderWidth = $('#slider-wrap').width();


$(document).ready(function () {


	/*****************
	 BUILD THE SLIDER
	*****************/
	//set width to be 'x' times the number of slides
	$('#slider-wrap ul#slider').width(sliderWidth * totalSlides);

	//next slide 	
	$('#next').click(function () {
		slideRight();
		// $(".jianjie").css({ "animation": "myfirst .4s linear" })
	});

	//previous slide
	$('#previous').click(function () {
		slideLeft();
		// $(".jianjie").css({ "animation": "myfirst .4s linear" })
	});



	/*************************
	 //*> OPTIONAL SETTINGS
	************************/
	//automatic slider
	// var autoSlider = setInterval(slideRight, 3000);

	//for each slide 
	// $.each($('#slider-wrap ul li'), function () {
	// 	//set its color
	// 	var c = $(this).attr("data-color");
	// 	$(this).css("background", c);

	// 	//create a pagination
	// 	// var li = document.createElement('li');
	// 	// $('#pagination-wrap ul').append(li);
	// });
	//counter
	// 计数
	// countSlides();

	//pagination
	pagination();

	//hide/show controls/btns when hover
	//pause automatic slide when hover
	// 按钮hover
	// $('#slider-wrap').hover(
	// 	function () { $(this).addClass('active');
	// 	//  clearInterval(autoSlider);
	// 	 },
	// 	function () { $(this).removeClass('active'); 
	// 	// autoSlider = setInterval(slideRight, 3000);
	//  }
	// );



});//DOCUMENT READY



/***********
 SLIDE LEFT
************/

function  add0 (m){
	return m < 10 ? " 0 "+m : m
}

function slideLeft() {
	pos--;
	if (pos == -1) { pos = totalSlides - 1; }

	$(".jianjie").css({ "animation": "myfirst .4s linear" })
	
	$('#slider-wrap ul#slider').css('left', -(sliderWidth * pos));

	$("#num>span").html( add0(pos+1) ).css({"letter-spacing":"-12px"})
	console.log("上一页",pos)
	//*> optional
	// countSlides();
	// pagination();
}


/************
 SLIDE RIGHT
*************/
function slideRight() {
	pos++;
	if (pos == totalSlides) { pos = 0; }
	$('#slider-wrap ul#slider').css('left', -(sliderWidth * pos));
	
	$("#num>span").html( add0(pos+1) ).css({"letter-spacing":"-12px"})
	console.log("下一页",pos)
	
	//*> optional 
	// countSlides();
	// pagination();
}




/************************
 //*> OPTIONAL SETTINGS
************************/
// 计数
function countSlides() {
	$('#counter').html(pos + 1 + ' / ' + totalSlides);
}

function pagination() {
	$('#pagination-wrap ul li').removeClass('active');
	$('#pagination-wrap ul li:eq(' + pos + ')').addClass('active');
}