import throttle from 'lodash.throttle';
import '../css/common.css';
import '../css/03-feedback.css';

const STORAGE_KEY = 'feedback-form-state';
const formData = {};

const refs = document.querySelector('.feedback-form');

refs.addEventListener('input', throttle(onFormInput, 500));
refs.addEventListener('submit', onFormSubmit);

function onFormInput(evt) {
  formData[evt.target.name] = evt.target.value;

  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function onFormSubmit(evt) {
  evt.preventDefault();
  evt.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
  console.log(formData);
}

initForm();

function initForm() {
  let savedData = localStorage.getItem(STORAGE_KEY);

  if (savedData) {
    savedData = JSON.parse(savedData);
    Object.entries(savedData).forEach(([name, value]) => {
      formData[name] = value;
      refs.elements[name].value = value;
    });
  }
}
