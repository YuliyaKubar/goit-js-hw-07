import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector(".gallery");
const galleryCreate = creatGalleryItems("galleryItems");

gallery.insertAdjacentHTML("beforeend", galleryCreate);

function creatGalleryItems() {
  return galleryItems
    .map(({ original, preview, description }) => {
      return `<div class="gallery__item">
  <a href="${original}" class="gallery__link" >
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`;
    })
    .join("");
}

gallery.innerHTML = galleryCreate;

gallery.addEventListener("click", onGalleryItemsClick);

function onGalleryItemsClick(event) {
  event.preventDefault();
  if (event.target.nodeName !== "IMG") {
    return;
  }
  const instance = basicLightbox.create(`
		<img width="1400" height="900" src="${event.target.dataset.source}">
	`);
  instance.show();
}
