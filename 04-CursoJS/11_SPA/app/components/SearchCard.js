export function SearchCard(props) {
  let { id, title, date, _embedded } = props;
  let slug = _embedded.self[0].slug,
    urlPoster = _embedded.self[0].featured_media_src_url
      ? _embedded.self[0].featured_media_src_url
      : "app/assets/buscar.png";

  document.addEventListener("click", (e) => {
    if (!e.target.matches(".post-card a")) return false;
    localStorage.setItem("wpPostId", e.target.dataset.id);
  });

  return `
    <article class="post-card">
      <img src="${urlPoster}" alt="${title}">
      <h2>${title}</h2>
      <p>
        <time datetime="${_embedded.self[0].date}">
          ${new Date(_embedded.self[0].date).toLocaleDateString()}
        </time>
        <a href="#/${slug}" data-id="${id}">
          Ver Publicacion
        </a>
      </p>
    </article>
  `;
}
