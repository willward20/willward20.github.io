const carouselImages = document.querySelector('.carousel-images');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

let currentIndex = 0;

function updateCarousel() {
  const width = carouselImages.clientWidth / 3; // Adjust based on the number of images
  carouselImages.style.transform = `translateX(-${currentIndex * width}px)`;
}

prevBtn.addEventListener('click', () => {
  currentIndex = (currentIndex === 0) ? 2 : currentIndex - 1; // Loop back to the last image
  updateCarousel();
});

nextBtn.addEventListener('click', () => {
  currentIndex = (currentIndex === 2) ? 0 : currentIndex + 1; // Loop back to the first image
  updateCarousel();
});
