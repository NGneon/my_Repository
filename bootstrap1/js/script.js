document.addEventListener('change', function () {
	let myCarousel = document.getElementById('carouselExampleInterval');
	let carousel = new bootstrap.Carousel(myCarousel);

	myCarousel.addEventListener('mouseenter', function () {
		carousel.pause();
	})

	myCarousel.addEventListener('mouseleave', function () {
		carousel.cycle();
	})
})