const d = document,
  n = navigator;

export default function webCam(id) {
  const $video = d.getElementById(id);

  if (n.mediaDevices.getUserMedia) {
    n.mediaDevices
      .getUserMedia({ video: true, audio: false })
      .then((stream) => {
        $video.srcObject = stream;
        $video.play();
      })
      .catch((err) => {
        $video.insertAdjacentHTML("afterend", `<p><mark>${err}</mark></p>`);
        console.log(`!Sucedio el siguiente error: ${err}`);
      });
  }
}
