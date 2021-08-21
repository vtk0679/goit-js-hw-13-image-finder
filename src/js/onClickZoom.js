import * as basicLightbox from '../js/basicLightbox.min.js';

export default function onClickZoom(e) {
  e.preventDefault();
  const source = e.target.dataset.source;

  if (!source) return;

  const instance = basicLightbox.create(`
    <img src="${source}" width="800" height="600">`);
  instance.show();
}
