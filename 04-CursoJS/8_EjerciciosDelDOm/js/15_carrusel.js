const d = document;

export default function slider() {
  const $nextBtn = d.querySelector(".slider-btns .next"),
    $prevBtn = d.querySelector(".slider-btns .prev"),
    $slides = d.querySelectorAll(".slider-slide");
  let i = 0;
  d.addEventListener("click", (e) => {
    if (e.target === $prevBtn) {
      e.preventDefault();
      $slides[i].classList.remove("active");
      i--;
      if (i < 0) {
        i = $slides.length - 1;
      }
      $slides[i].classList.add("active");
    }
    if (e.target === $nextBtn) {
      e.preventDefault();
      $slides[i].classList.remove("active");
      i++;
      if (i >= $slides.length) {
        i = 0;
      }
      $slides[i].classList.add("active");
    }
  });
}

/*
export default function slider() {
  const $slides = d.querySelectorAll(".slider-slide");
  let currentIndex = 0;

  // Función para mostrar el slide actual y actualizar el índice
  function showSlide(index) {
    $slides.forEach((slide, i) => {
      slide.classList.toggle("active", i === index);
    });
  }

  // Función para avanzar al siguiente slide
  function nextSlide() {
    currentIndex = (currentIndex + 1) % $slides.length;
    showSlide(currentIndex);
  }

  // Iniciar el intervalo para avanzar automáticamente cada cierto tiempo
  const intervalId = setInterval(nextSlide, 3000); // Cambia el valor (en milisegundos) según tus necesidades
}
*/
