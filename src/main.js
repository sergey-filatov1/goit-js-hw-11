import { getImagesByQuery } from './js/pixabay-api';

import {
    createGallery,
    clearGallery,
    refreshGallery,
    showLoader,
    hideLoader,
} from './js/render-functions';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');
const gallery = document.querySelector('.gallery');

form.addEventListener('submit', onSearch);

function onSearch(event) {
    event.preventDefault();

    const query = event.currentTarget.elements['search-text'].value.trim();

    if (!query) {
        iziToast.warning({
            message: 'Please enter a search query!',
        });
        return;
    }

    clearGallery();
    showLoader();

    getImagesByQuery(query)
        .then(response => {
            if (response.data.hits.length === 0) {
                iziToast.error({
                    message:
                        'Sorry, there are no images matching your search query. Please try again!',
                });
                return;
            }

            gallery.innerHTML = createGallery(response.data.hits);
            refreshGallery();
        })
        .catch(() => {
            iziToast.error({
                message: 'Something went wrong. Please try again!',
            });
        })
        .finally(() => {
            hideLoader();
        });

    form.reset();
}