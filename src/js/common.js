'use strict';

getKittens('https://ma-cats-api.herokuapp.com/api/cats?page=5&per_page=16')
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

function renderKitten(kitten, indexCat) {
    return `
        <div class="kitty-card kitty-card_margin_small" style="animation-delay: ${.5 + indexCat * .05}s">
            <div class="kitty-card__header" style="background-color: ${getKittenCardCollor(kitten)}">
                <img class="kitty-card__image" src="${kitten.img_url}" alt="${kitten.name}">
                <div class="kitty-card__name">
                    <span class="name name_size_medium name_bg_white">${kitten.name}</span>
                </div>
            </div>
            <div class="kitty-card__id"># ${kitten.id}</div>
            <div class="kitty-card__category">${kitten.category}</div>
            <div class="kitty-card__price">$ ${kitten.price}</div>
        </div>
        `;
}

function getKittenCardCollor(kitten) {
    const tokenString = kitten.name + kitten.id;

    // md5 function from github.com/blueimp/JavaScript-MD5
    const hash = md5(tokenString);
    return `#${hash.slice(0, 6)}`;
}