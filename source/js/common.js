//  custom-select
// переменная не переназначается, поэтому используем const
// используем querySelectorAll, чтобы собрать массив со всеми сущностями .select
const select = document.querySelectorAll('.select');

// если массив не пустой, пробегаемся в цикле по каждой найденой сущности
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
        fade: true                      
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
    });   
});

$(function(){
    $('.popular__slider').slick({
		slidesToShow: 2,
		slidesToScroll: 2,
		speed: 1000,
		autoplaySpeed: 3000,
		arrows: false,
		dots: true                      
    });   
});