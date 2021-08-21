import renderCards from '../templates/photo-card.hbs';

const refs = {
  gallery: document.querySelector('.gallery'),
};

function renderMarkup(arr) {
  const markUp = renderCards(arr);
  refs.gallery.innerHTML = markUp;
}

function addMarkup(arr) {
  const markUp = renderCards(arr);
  refs.gallery.insertAdjacentHTML('beforeend', markUp);
}

export default { renderMarkup, addMarkup };
