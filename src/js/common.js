'use strict';

const timerLoader = setTimeout(() => {
    document.querySelector('.loader').classList.toggle('loader_active');
}, 3000);

getKittens('https://ma-cats-api.herokuapp.com/api/cats?page=20&per_page=12')
    .then(function(catsObject) {
         clearTimeout(timerLoader);
         document.querySelector('.wrapper').innerHTML = renderKittenList(catsObject.cats);
    });

function getKittens(url) {
    return fetch(url)
        .then(function(response) {
            return response.json();
        })
}

function renderKittenList(catsList) {
    return catsList.map( renderKitten ).join('');
}

function renderKitten(cat) {
    return `
        <div class="kitty-card kitty-card_margin_small">
            <div class="kitty-card__main kitty-card__main_red">
                <img class="kitty-card__image" src="${cat.img_url}" alt="${cat.name}">
                <div class="kitty-card__name">
                    <span class="name name_size_medium name_bg_white">${cat.name}</span>
                </div>
            </div>
            <div class="kitty-card__id">#${cat.id}</div>
            <div class="kitty-card__category">${cat.category}</div>
            <div class="kitty-card__price">price: ${cat.price}</div>
        </div>
        `;
}

function hashCode(stringToken) {
    let hash = 0, i, chr;
    if (stringToken.length === 0) return hash;
    for (i = 0; i < stringToken.length; i++) {
        chr   = stringToken.charCodeAt(i);
        hash  = ((hash << 5) - hash) + chr;
        hash |= 0; // Convert to 32bit integer
    }
    return hash;
}
