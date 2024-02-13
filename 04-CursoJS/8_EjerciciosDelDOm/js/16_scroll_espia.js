const d = document;

export default function scrollSpy() {
  const $sections = d.querySelectorAll("section[data-scroll-spy]");
  //entries hace referencia a los elementos que se estan observando osea los sections
  const cb = (entries) => {
    entries.forEach((entry) => {
      // console.log("entry", entry);

      const id = entry.target.getAttribute("id");
      if (entry.isIntersecting) {
        d.querySelector(`a[data-scroll-spy][href="#${id}"]`).classList.add(
          "active"
        );
      } else {
        d.querySelector(`a[data-scroll-spy][href="#${id}"]`).classList.remove(
          "active"
        );
      }
    });
  };
  const observer = new IntersectionObserver(cb, {
    // root
    // rootMargin: "-250px",
    //threshold significa limite, en este caso se dice que tiene que tener entre el 50% y el 75% de interseccion para que se active
    threshold: [0.5, 0.75],
  });
  // console.log("observer", observer);
  $sections.forEach((e) => observer.observe(e));
}
