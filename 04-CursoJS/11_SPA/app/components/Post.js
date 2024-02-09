export function Post(props) {
  let { date, title, content } = props;
  return `
   <section class="post-page">
    <aside>
      <h2>${title.rendered}</h2>
      <time datetime="${date}">${new Date(date).toLocaleString()}</time>
      <hr>
      <article>${content.rendered}</article>
    </aside>
   </section>
  `;
}
