const catsList = [
        {
            "id": 1,
            "name": "simon",
            "category": "fast",
            "price": 100,
            "img_url": "https://storage.googleapis.com/ck-kitty-image/0x06012c8cf97bead5deae237070f9587f8e7a266d/495636.svg",
            "available": true,
            "created_at": "2018-02-06T23:08:49.179Z",
            "updated_at": "2018-02-06T23:08:49.179Z"
        },
        {
            "id": 2,
            "name": "felix",
            "category": "fast",
            "price": 10000,
            "img_url": "https://storage.googleapis.com/ck-kitty-image/0x06012c8cf97bead5deae237070f9587f8e7a266d/495625.svg",
            "available": true,
            "created_at": "2018-02-06T23:08:49.186Z",
            "updated_at": "2018-02-06T23:08:49.186Z"
        },
        {
            "id": 3,
            "name": "luna",
            "category": "slow",
            "price": 2000,
            "img_url": "https://storage.googleapis.com/ck-kitty-image/0x06012c8cf97bead5deae237070f9587f8e7a266d/495622.svg",
            "available": true,
            "created_at": "2018-02-06T23:08:49.190Z",
            "updated_at": "2018-02-06T23:08:49.190Z"
        },
        {
            "id": 4,
            "name": "oliver",
            "category": "fast",
            "price": 9000,
            "img_url": "https://storage.googleapis.com/ck-kitty-image/0x06012c8cf97bead5deae237070f9587f8e7a266d/495619.svg",
            "available": true,
            "created_at": "2018-02-06T23:08:49.193Z",
            "updated_at": "2018-02-06T23:08:49.193Z"
        },
        {
            "id": 5,
            "name": "oreo",
            "category": "middle",
            "price": 100,
            "img_url": "https://storage.googleapis.com/ck-kitty-image/0x06012c8cf97bead5deae237070f9587f8e7a266d/495616.svg",
            "available": true,
            "created_at": "2018-02-06T23:08:49.197Z",
            "updated_at": "2018-02-06T23:08:49.197Z"
        },
        {
            "id": 6,
            "name": "molly",
            "category": "slow",
            "price": 3000,
            "img_url": "https://storage.googleapis.com/ck-kitty-image/0x06012c8cf97bead5deae237070f9587f8e7a266d/495613.svg",
            "available": true,
            "created_at": "2018-02-06T23:08:49.201Z",
            "updated_at": "2018-02-06T23:08:49.201Z"
        },
        {
            "id": 7,
            "name": "simba",
            "category": "fast",
            "price": 11000,
            "img_url": "https://storage.googleapis.com/ck-kitty-image/0x06012c8cf97bead5deae237070f9587f8e7a266d/495592.svg",
            "available": true,
            "created_at": "2018-02-06T23:08:49.205Z",
            "updated_at": "2018-02-06T23:08:49.205Z"
        },
        {
            "id": 8,
            "name": "jack",
            "category": "middle",
            "price": 5000,
            "img_url": "https://storage.googleapis.com/ck-kitty-image/0x06012c8cf97bead5deae237070f9587f8e7a266d/495579.svg",
            "available": true,
            "created_at": "2018-02-06T23:08:49.209Z",
            "updated_at": "2018-02-06T23:08:49.209Z"
        },
        {
            "id": 10,
            "name": "loki",
            "category": "fast",
            "price": 20000,
            "img_url": "https://storage.googleapis.com/ck-kitty-image/0x06012c8cf97bead5deae237070f9587f8e7a266d/336916.svg",
            "available": true,
            "created_at": "2018-02-06T23:08:49.216Z",
            "updated_at": "2018-02-06T23:08:49.216Z"
        },
        {
            "id": 11,
            "name": "milo",
            "category": "slow",
            "price": 3500,
            "img_url": "https://storage.googleapis.com/ck-kitty-image/0x06012c8cf97bead5deae237070f9587f8e7a266d/336916.svg",
            "available": true,
            "created_at": "2018-02-06T23:08:49.220Z",
            "updated_at": "2018-02-06T23:08:49.220Z"
        },
        {
            "id": 13,
            "name": "Homer",
            "category": "sub-zero",
            "price": 91233,
            "img_url": "https://storage.googleapis.com/ck-kitty-image/0x06012c8cf97bead5deae237070f9587f8e7a266d/117910.svg",
            "available": true,
            "created_at": "2018-02-10T10:40:52.425Z",
            "updated_at": "2018-02-10T10:40:52.425Z"
        },
        {
            "id": 14,
            "name": "Johnathon",
            "category": "sub-zero",
            "price": 55740,
            "img_url": "https://storage.googleapis.com/ck-kitty-image/0x06012c8cf97bead5deae237070f9587f8e7a266d/1000.svg",
            "available": true,
            "created_at": "2018-02-10T10:40:52.437Z",
            "updated_at": "2018-02-10T10:40:52.437Z"
        }
]

const getCats = (catsList) => {
    console.log(catsList);
    return catsList.map((cat) => {
        return `
        <div class="kitty-card">
            <div class="kitty-card__main kitty-card__main_red">
                <img class="kitty-card__image" src="${cat.img_url}" alt="${cat.name}">
                <span class="kitty-card__name kitty-card__name_on-bg">${cat.name}</span>
            </div>
            <div class="kitty-card__id">#${cat.id}</div>
            <div class="kitty-card__category">${cat.category}</div>
            <div class="kitty-card__price">price: ${cat.price}</div>
        </div>
        `
    }).join('')
}
console.log(catsList);
document.querySelector('.wrapper').innerHTML = getCats(catsList);
