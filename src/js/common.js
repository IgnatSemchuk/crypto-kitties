'use strict';

const url = 'https://ma-cats-api.herokuapp.com/api/cats?page=1&per_page=12';

setTimeout(() => {
    fetch(url)
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        let catsList = getKittenList(data.cats);
        console.dir(catsList);
        document.querySelector('.wrapper').innerHTML = catsList;
    })
    .catch( alert );
}, 3000)

function getKittenList(catsList) {
    return catsList.map(getKitten).join('');
}

function getKitten(cat) {
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
        `
}
