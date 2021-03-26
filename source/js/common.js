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
        prevArrow: '<button type="button" class="slick__btn slick__prev"><img src="img/icons/previous.png" alt=""></button>',
        nextArrow: '<button type="button" class="slick__btn slick__next"><img src="img/icons/next.png" alt=""></button>',
        autoplay: 3000,
        fade: true                      
    });   
});