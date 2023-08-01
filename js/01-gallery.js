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
function onGalleryItemsClick(event) {
  event.preventDefault();
  console.log(event.target)
   console.log(event.currentTarget)
    if (event.target === event.currentTarget) {
        return
    }
    const currentItem = event.target.closest('.gallery__item');
    console.log(currentItem)

      const instance = basicLightbox.create(` <li class='modal'>
  <img src="${currentItem.firstElementChild.href}" >
</li>
    `
      )
  instance.show()
  window.addEventListener('keydown', onEscKeyPress)
  function onEscKeyPress(event) {
    if (event.code === "Escape") {
      instance.close()
      window.removeEventListener('keydown', onEscKeyPress)
}

}

} 




