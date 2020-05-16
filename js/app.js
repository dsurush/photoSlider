'use strict'
const photos = [
    { id: 1, src: './img/giticon1.png', alt: 'icon1' },
    { id: 2, src: './img/kot1.jpg', alt: 'icon2' },
    { id: 3, src: './img/giticon2.png', alt: 'icon3' },
    { id: 4, src: './img/kot2.jpg', alt: 'icon4' },
];

const sliderEl = document.querySelector('[data-id="viewer"]');
const imgEl = sliderEl.querySelector('[data-id="photo"]');
const prevEl = sliderEl.querySelector('[data-action="prev"]');
const nextEl = sliderEl.querySelector('[data-action="next"]');

function bindPhotoToViewer(photo, el) {
    el.id = photo.id;
    el.src = photo.src;
    el.alt = photo.alt;
}

const viewerWidjet = {
    rootEl: sliderEl,
    imgEl,
    prevEl,
    nextEl,
};

let position = 0;
bindPhotoToViewer(photos[0], viewerWidjet.imgEl);
if (position == 0) { viewerWidjet.prevEl.disabled = true; }

viewerWidjet.nextEl.onclick = evt => {
    if (position < photos.length) {
        position++
    }
    if (position == photos.length - 1) {
        viewerWidjet.nextEl.disabled = true;
    }
    if (position > 0) {
        viewerWidjet.prevEl.disabled = false;
    }
    bindPhotoToViewer(photos[position], viewerWidjet.imgEl);
    console.log(position);
}

viewerWidjet.prevEl.onclick = evt => {
    if (position > 0) {
        position--
    }
    if (position == 0) {
        viewerWidjet.prevEl.disabled = true;
    }
    if (position <= photos.length - 1) {
        viewerWidjet.nextEl.disabled = false;
    }
    bindPhotoToViewer(photos[position], viewerWidjet.imgEl);
    console.log(position);
}   
// viewerWidjet.prevActionEl.onclick = evt => {
//     if (position > 0) {
//         position--;
//         viewerWidjet.prevActionEl.disabled = false;
//     }
//     if (position == 0) {
//         viewerWidjet.prevActionEl.disabled = true;
//     }
//     bindPhotoToViewer(photos, viewerWidjet.imgEl);
//     viewerWidjet.nextActionEl.disabled = false;
//     console.log(evt);
// };

