import showAlert from '../js/show-alert.js';

export default function isResultBad(array, apiService) {
  if ((array.length === 0 && apiService.needMore()) || (array.length > 1 && array.length < 12)) {
    showAlert('There are no more images');
    return true;
  }
  if (array.length === 0) {
    showAlert('Nothing found');
    return true;
  }
  return false;
}
