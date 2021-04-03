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
        autoplay: 3000,
        fade: true                      
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