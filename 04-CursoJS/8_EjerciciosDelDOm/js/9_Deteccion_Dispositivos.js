const d = document,
  n = navigator,
  ua = n.userAgent;

export default function userDeviceInfo(id) {
  const $id = d.getElementById(id),
    isMobile = {
      // i significa insensible a mayusculas o minusculas
      android: () => ua.match(/android/i),
      ios: () => ua.match(/iphone|ipad|ipod/i),
      windows: () => ua.match(/windows phone/i),
      any: function () {
        return this.android() || this.ios() || this.windows();
      },
    },
    isDesktop = {
      linux: () => ua.match(/linux/i),
      mac: () => ua.match(/mac os/i),
      windows: () => ua.match(/windows nt/i),
      any: function () {
        return this.linux() || this.mac() || this.windows();
      },
    },
    isBrowser = {
      chrome: () => ua.match(/chrome/i),
      safari: () => ua.match(/safari/i),
      firefox: () => ua.match(/firefox/i),
      opera: () => ua.match(/opera|opera mini/i),
      ie: () => ua.match(/msie|iemobile/i),
      edge: () => ua.match(/edge/i),
      any: function () {
        return (
          this.chrome() ||
          this.safari() ||
          this.firefox() ||
          this.opera() ||
          this.ie() ||
          this.edge()
        );
      },
    };
  $id.innerHTML = `
  <ul>
    <li>User Agent: <b>${ua}</b></li>
    <li>Plataforma: <b>${
      isMobile.any() ? isMobile.any() : isDesktop.any()
    }</b></li>
    <li>Navegador: <b>${isBrowser.any()}</b></li>
  </ul>`;
  // console.log(ua);
  if (isBrowser.chrome()) {
    $id.innerHTML += `<p><mark>Este contenido solo es visible en chrome</mark></p>`;
  }
  if (isBrowser.firefox()) {
    $id.innerHTML += `<p><mark>Este contenido solo es visible en Firefox</mark></p>`;
  }
  if (isDesktop.linux()) {
    $id.innerHTML += `<p><mark>Descarga la aplicacion para LINUX</mark></p>`;
  }
  if (isDesktop.windows()) {
    $id.innerHTML += `<p><mark>Descarga la aplicacion para WINDOWS</mark></p>`;
  }
  if (isMobile.android()) {
    window.location.href = "https://www.youtube.com/";
  }
}
