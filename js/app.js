$(document).ready(function(){

	var carouselItems = [
		{thumbnail:"images/etsynearme.png", 		dest:"https://lzzparis.github.io/etsynearme/"},
		{thumbnail:"images/tictactoe.png", 			dest:"https://lzzparis.github.io/tictactoe/"},
		{thumbnail:"images/quizapp.png", 			dest:"https://lzzparis.github.io/quiz-app/"},
		{thumbnail:"images/shoppinglzzt.png", 		dest:"https://lzzparis.github.io/shopping-lzzt/"},
		{thumbnail:"images/about-me-ss.jpg", 		dest:"http://codepen.io/lzzparis/pen/NNjQbp"},
		{thumbnail:"images/karma-ss.jpg", 			dest:"https://lzzparis.github.io/karma-project/"},
		{thumbnail:"images/streetfighter-ss.png", 	dest:"https://lzzparis.github.io/jquery-streetfighter/"}
	];

	initCarousel(carouselItems);

	$("a").on("click",function(){
		var page = $(this).attr("href");
		$("html, body").animate({ scrollTop: parseInt( $(page).position().top )}, 1000);  //Soft-scroll for Desktops. (Accounts for fixed menu at the top.)
	});

	$(".left").click(toLeft);
	$(".right").click(toRight);

	$(".projects__carousel").slick({
	  // centerMode: true,
	  // centerPadding: '50px',
	  slidesToShow: 5,
	  slidesToScroll: 1,
	  responsive: [
	    {
	      breakpoint: 768,
	      settings: {
	        arrows: false,
	        centerMode: true,
	        centerPadding: '40px',
	        slidesToShow: 3
	      }
	    },
	    {
	      breakpoint: 480,
	      settings: {
	        arrows: false,
	        centerMode: true,
	        centerPadding: '40px',
	        slidesToShow: 1
	      }
	    }
	  ]
	});

})

function initCarousel(carouselArray){
	var offset= percToPixels(0.1);
	carouselArray.forEach(function(oneItem){
		var itemElem = $(".templates .projects__carousel__item").clone();
		var linkElem = itemElem.children("a")
		linkElem.attr("href",oneItem.dest);
		var thumbElem = linkElem.children("img");
		thumbElem.attr("src", oneItem.thumbnail);
		itemElem.css("left",offset+"px");
		$(".projects__carousel").append(itemElem);
		offset+=percToPixels(0.2);
	});
}


function toLeft(){
	$(".projects__carousel__item").each(function(){
		var newLeft = "";
		if($(this).position().left <0){
			newLeft = percToPixels(1.5);
			$(this).css({"left":newLeft});
		}
		else if ($(this).position().left >= percToPixels(1.5)){
			newLeft = percToPixels(0.9);
			$(this).animate({"left":newLeft},500);
		}
		else{
			var currentLeft = $(this).position().left;
			newLeft = (currentLeft - percToPixels(0.2))+"px";
			$(this).animate({"left":newLeft},500);
		}
	});

}

function percToPixels(percentage){
	return percentage * carouselWidth;
}

var carouselWidth = $(".projects__carousel__list").width();

function toRight(){

	
}



