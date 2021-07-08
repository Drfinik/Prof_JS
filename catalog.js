"use strict";
const goods = [
    {
        img: "image/card1.png",
        title: "ELLERY X M'O CAPSULE",
        description: "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
        price: "$52"
    },
    {
        img: "image/card7.png",
        title: "ELLERY X M'O CAPSULE",
        description: "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
        price: "$52"
    },
    {
        img: "image/card3.png",
        title: "ELLERY X M'O CAPSULE",
        description: "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
        price: "$52"
    },
    {
        img: "image/card4.png",
        title: "ELLERY X M'O CAPSULE",
        description: "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
        price: "$52"
    },
    {
        img: "image/card8.png",
        title: "ELLERY X M'O CAPSULE",
        description: "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
        price: "$52"
    },
    {
        img: "image/card9.png",
        title: "ELLERY X M'O CAPSULE",
        description: "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
        price: "$52"
    },
    {
        img: "image/card10.png",
        title: "ELLERY X M'O CAPSULE",
        description: "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
        price: "$52"
    },
    {
        img: "image/card11.png",
        title: "ELLERY X M'O CAPSULE",
        description: "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
        price: "$52"
    },
    {
        img: "image/card12.png",
        title: "ELLERY X M'O CAPSULE",
        description: "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
        price: "$52"
    },
];
const renderGoodsItem = (img, title, description, price) => {
    return `<div class="section__card"><div class="image__card"><img src="${img}" alt="${title}"></div>
    <a class="image__card-hover" href="product.html"><img src="image/add_to_cart.png" alt="add_to_cart"></a><h3 class="heiding__card">${title}</h3><p class="card__description">${description}</p><p class="card__price">${price}</p></div>`;
};


const renderGoodsList = (list) => {
    let goodsList = list.map(item => renderGoodsItem(item.img, item.title, item.description, item.price))
        .join("");
    document.querySelector('.card__box').innerHTML = goodsList;

}

renderGoodsList(goods);