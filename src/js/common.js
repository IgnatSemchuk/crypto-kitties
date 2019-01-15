'use strict';

getKittens('https://ma-cats-api.herokuapp.com/api/cats?page=1&per_page=12')
    .then(function(catsObject) {
        document.querySelector('.wrapper').insertAdjacentHTML('afterbegin', renderKittenList(catsObject.cats));
        setTimeout(() => document.querySelector('.loader').classList.toggle('loader_active'), 500);
    });

function getKittens(url) {
    return fetch(url)
        .then(function(response) {
            return response.json();
        })
}

function renderKittenList(catsList) {
    return catsList.map((cat, i) => renderKitten(cat, i)).join('');
}

function renderKitten({id, name, img_url, category, price}, indexCat) {
    let index = 0;
    return `
        <div class="kitty-card kitty-card_margin_small" style="animation-delay: ${.5 + indexCat * .05}s">
            <div class="kitty-card__header" style="background-color: ${renderColorByHash(name, id)};">
                <img class="kitty-card__image" src="${img_url}" alt="${name}">
                <div class="kitty-card__name">
                    <span class="name name_size_medium name_bg_white">${name}</span>
                </div>
            </div>
            <div class="kitty-card__id"># ${id}</div>
            <div class="kitty-card__category">${category}</div>
            <div class="kitty-card__price">$ ${price}</div>
        </div>
        `;
}

function renderColorByHash(...tokens) {
    const tokenString = [tokens].reduce((string, token) => string + token, '')

    // md5 function from github.com/blueimp/JavaScript-MD5
    const hash = md5(tokenString);
    return `#${hash.slice(0, 6)}`;
}