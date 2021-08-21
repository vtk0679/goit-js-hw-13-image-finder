import '../../node_modules/@pnotify/core/dist/PNotify.css';
import '../../node_modules/@pnotify/core/dist/BrightTheme.css';
import { alert } from '../../node_modules/@pnotify/core/dist/PNotify.js';

export default function showAlert(message) {
  alert({
    text: message,
    type: 'error',
    delay: 3000,
  });
}
