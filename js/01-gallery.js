import { galleryItems } from './gallery-items.js';
// Change code below this line
const gallery = document.querySelector('.gallery');


    const markup = galleryItems.map(({preview, original, description}) =>
      `<li class="gallery__item">
        <a href='${original}'class='gallery__link'>
            <img class='gallery__image' src = '${preview}' alt = '${description}' data-source = '${original}' width= '100%'>
        </a>
        </li >`);
    
    gallery.insertAdjacentHTML('beforeend', markup.join(''));
    


gallery.addEventListener('click', onClick);
console.log(gallery);

function onClick(evt) {
    evt.preventDefault();
    if (!evt.target.classList.contains('gallery__image')) {
        return;
    }


    
    const instance = basicLightbox.create(
        `<img src='${evt.target.dataset.source}' width=600 height=800px>`,

    {
        onShow: (instance) => { document.addEventListener('keydown', onEscBtnClose) },
        onClose: (instance) => { document.removeEventListener('keydown', onEscBtnClose) }
    })
    
    instance.show();

       function onEscBtnClose(evt) {
        if (evt.code === "Escape") {
            instance.close();
        }
    }
}

gallery.addEventListener('click', onClick);