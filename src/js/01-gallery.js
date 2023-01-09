// Add imports above this line
import { galleryItems } from './gallery-items.js';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Change code below this line

console.log(SimpleLightbox);

// import { galleryItems } from "./gallery-items.js";
// // Change code below this line

// console.log(galleryItems);

// const gallery = document.querySelector('.gallery');
// const cards = cardsGalleryItems(galleryItems);
// gallery.insertAdjacentHTML('beforeend', cards);

// function cardsGalleryItems(galleryItems) {
//   return galleryItems
//     .map(({ preview, original, description }) => {
//       return `<div class="gallery__item">
//   <a class="gallery__link" href="${original}">
//     <img
//       class="gallery__image"
//       src="${preview}"
//       data-source="${original}"
//       alt="${description}"
//     />
//   </a>
// </div>`;
//     })
//     .join('');
// }
// gallery.addEventListener('click', evt => {
//   evt.preventDefault();
//   if (evt.target.nodeName !== 'IMG') {
//     return;
//   }
//   const urlLargeImage = evt.target.getAttribute('data-source');
//   console.log(urlLargeImage);
//   const instance = basicLightbox.create(
//     `<img src="${urlLargeImage}" width="800" height="600">`
//   );
//   instance.show();
// });

// import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);
const gallery = document.querySelector('.gallery');
const cards = cardsGalleryItems(galleryItems);

gallery.insertAdjacentHTML('beforeend', cards);
function cardsGalleryItems(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`;
    })
    .join('');
}

var lightbox = new SimpleLightbox('.gallery a', {
  captions: 'true',
  captionSelector: 'img',
  captionPosition: 'bottom',
  captionType: 'attr',
  captionsData: 'alt',
  captionDelay: 250,
});
