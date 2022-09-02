const items = document.querySelectorAll('.slider__items');
const item = document.querySelectorAll('.slider__item');
const sliderLine = document.querySelector('.slider__line');
const btnNext = document.querySelector('.btn-next');
const btnPrev = document.querySelector('.btn-prev');
let widthSlider
let count = 0;



btnNext.addEventListener('click', () => {
	count += 1;
	if (count >= items.length) {
		count = 0;
	}
	offsetNext()
});
btnPrev.addEventListener('click', () => {
	count -= 1;
	if (count < 0) {
		count = items.length - 1;
	}
	offsetNext()
});

// calculate the width of the working area at the start and change the slider
function init() {
	widthSlider = document.querySelector('.slider').offsetWidth;
	// calculate the width sliderLine
	sliderLine.style.width = widthSlider * items + 'px';
	items.forEach(item => {
		item.style.width = widthSlider + 'px';
		item.style.height = 'auto';
	})
	item.forEach(item => {
		item.style.width = widthSlider + 'px';
		item.style.height = 'auto';
	})
	offsetNext();

}
window.addEventListener('resize', init)
init()


function offsetNext() {
	sliderLine.style.transform = 'translate(-' + count * widthSlider + 'px)';
}

setInterval(() => {
	const sliderBtn = document.querySelector('.card__btn')
	if (sliderBtn.matches(':hover') || sliderLine.matches(':hover'))
		return

	offsetNext()
}
	, 3000);