import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);
const galleryItemsMarkup = makeGalleryItemsMarkup(galleryItems);
// console.log(galleryItemsMarkup)
const galleryItemsContainer = document.querySelector('.gallery')
console.log(galleryItemsContainer)
galleryItemsContainer.insertAdjacentHTML('beforeend', galleryItemsMarkup)

function makeGalleryItemsMarkup(items) {
    return items.map(({preview, original, description})=>{ return `
        <li class="gallery__item">
   <a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
   </a>
</li>`
    }).join('')
}
const lightbox = new SimpleLightbox('.gallery__link', { 
            showImageNumberLabel: false,
            overlay: false,
            captionDelay: 250,
            animationSlide: true,
            captionType: 'attr',
            captionsData: 'alt'
        });


