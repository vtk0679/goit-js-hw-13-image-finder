import './sass/main.scss';
import ApiService from './js/apiService.js';
import renderer from './js/renderer.js';
import isResultBad from './js/check-fetch-result.js';
import onClickZoom from './js/onClickZoom.js';

const apiService = new ApiService();

const refs = {
  form: document.querySelector('.search-form'),
  sentinel: document.querySelector('.sentinel'),
  gallery: document.querySelector('.gallery'),
};

refs.form.firstElementChild.focus();
refs.form.onsubmit = onSubmit;
refs.gallery.onclick = onClickZoom;

function onSubmit(el) {
  el.preventDefault();
  const searchQuery = el.target.firstElementChild.value;
  const data = apiService.fetchImages(searchQuery);
  if (data)
    data.then(arr => {
      if (isResultBad(arr, apiService)) return;
      apiService.incrementPage();
      renderer.renderMarkup(arr);
    });
  else showAlert('Please enter a valid query!');
}

const observer = new IntersectionObserver(onEntry, { rootMargin: '250px' });
observer.observe(refs.sentinel);

function onEntry(entry) {
  entry[0].isIntersecting &&
    apiService.needMore() &&
    apiService.moreImages().then(arr => {
      if (isResultBad(arr, apiService)) return;
      apiService.incrementPage();
      renderer.addMarkup(arr);
    });
}
