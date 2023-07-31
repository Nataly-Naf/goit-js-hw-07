import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);
const galleryItemsMarkup = makeGalleryItemsMarkup(galleryItems);
console.log(galleryItemsMarkup)
const galleryItemsContainer = document.querySelector('.gallery')
console.log(galleryItemsContainer)
galleryItemsContainer.insertAdjacentHTML('beforeend', galleryItemsMarkup)

function makeGalleryItemsMarkup(items) {
    return items.map(({preview, original, description})=>{ return `
        <li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="large-image.jpg"
      alt="${description}"
    />
  </a>
</li>`
    }).join('')
}
galleryItemsContainer.addEventListener('click', onGalleryItemsClick)
// Реалізація делегування на ul.gallery і отримання url великого зображення.
function onGalleryItemsClick(event) {
      console.log(event.target)
  }     
