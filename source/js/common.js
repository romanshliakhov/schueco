const select = document.querySelectorAll('.select');

if (select.length) {
	select.forEach(item => {
		// достаем из текущей сущности .select__current
		const selectCurrent = item.querySelector('.select__current');

		item.addEventListener('click', event => {
			const el = event.target.dataset.choice;
			const text = event.target.innerText;
			
			// Проверяем является ли это choosen и не выбрано ли его значение уже
			if (el === 'choosen' && selectCurrent.innerText !== text) {
				selectCurrent.innerText = text;
			}
			
			item.classList.toggle('is-active');
		});
	}) 
}

$(document).mouseup(function (e) {
  if (!$(select).has(e.target).length){
      select.forEach(s => s.classList.remove('is-active'));
  }
});

$(function(){
    $('.slider__inner').slick({
		prevArrow: '.slider__arrow-prev',        
		nextArrow: '.slider__arrow-next',        
        autoplay: 3000,
        fade: true,
		responsive: [
			{
			breakpoint: 768,
			settings: {					
				arrows: false,						
				}
			}															
		]		                    
    });   
});

$(function(){
    $('.galery__slider-inner').slick({
		prevArrow: '.galery__arrow-prev',        
		nextArrow: '.galery__arrow-next',
		arrows: true,		       
        autoplay: false,
		slidesToShow: 5,
		slidesToScroll: 1, 
		Infinity:false, 
		responsive: [
			{
			breakpoint: 1199,
			settings: {
				slidesToShow: 4,
				slidesToScroll: 1,				
			  	}
			},			
			{
			breakpoint: 992,
			settings: {
				slidesToShow: 3,				
				slidesToScroll: 1,			
				}
			},
			{
			breakpoint: 768,
			settings: {
				slidesToShow: 2,				
				slidesToScroll: 1,	
				arrows: false,						
				}
			},
			{
			breakpoint: 575,
			settings: {
				slidesToShow: 1,				
				slidesToScroll: 1,
				arrows: false,							
				}
			}								
		]   
    });   
});

$(function(){
    $('.popular__slider').slick({
		slidesToShow: 2,
		slidesToScroll: 2,
		speed: 1000,
		autoplaySpeed: 3000,
		arrows: false,
		dots: true,
		responsive: [
			{
			breakpoint: 1199,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 2,				
			  	}
			},
			{
			breakpoint: 992,
			settings: {
				slidesToShow: 1,				
				slidesToScroll: 1,			
				}
			},
			{
			breakpoint: 576,
			settings: {
				slidesToShow: 1,				
				slidesToScroll: 1,							
				}
			}												
		] 
    });   
});

$(".hamburger").click(function(event) {
    $(".hamburger").toggleClass('hamburger__active'),
    $(".mobile__menu ").toggleClass('mobile__menu__active');
});
  

$('.product__info-title').click(function(){
	const parent = $(this).parent();

	if(parent.hasClass('product__info-item--active')) {
		parent.removeClass('product__info-item--active');
	} else {
		$('.product__info-item').removeClass('product__info-item--active')
		parent.addClass('product__info-item--active');
	}	
});

$(function(){
    $('.product__slider-inner').slick({
		arrows: false,
        autoplay: 3000,        
        asNavFor: '.product__slider-preview',   
        responsive: [
            {
                breakpoint: 960,
                settings: {
                    arrows: false,
                    autoplay: 1000,
                }
            }
        ]                    
    }); 

    $('.product__slider-preview').slick({
        arrows: false,  
        slidesToShow: 4, 
        slidesToScroll: 1,  
        asNavFor: '.product__slider-inner',    
        focusOnSelect: true,           
        variableWidth: true,                
    });     
});