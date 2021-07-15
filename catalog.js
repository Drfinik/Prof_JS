"use strict";
class Good {
    constructor(img, title, description, price) {
        this._img = img;
        this._title = title;
        this._description = description;
        this._price = price;
    }
    getPrice() {
        return this._price;
    }


    render() {
        return `<div class="section__card"><div class="image__card"><img src="${this._img}" alt="${this._title}"></div>
        <button class="image__card-hover"><img src="image/add_to_cart.png" alt="add_to_cart"></button><h3 class="heiding__card">${this._title}</h3><p class="card__description">${this._description}</p><p class="card__price">${this._price}</p></div>`;
    }
}
class GoodInCart extends Good {
    constructor(img, title, description, price, quantity = 1) {
        super(img, title, description, price);
        this._quantity = quantity;

    }
    getPrice() {
        return this._price * this._quantity;
    }
    render() {
        return `<div class="card__cart__img"><img class="cart__img-size" src="${this._img}" alt="${this._title}">
        </div>
        <div class="card__cart__info">
            <div class="heading__reset">
                <div class="card__cart__heading">MANGO PEOPLE <br> T-SHIRT</div>
                <div class="card__cart_reset"><img src="image/cross.svg" alt="cross"></div>
            </div>
            <div>
                <div class="card__cart__text">Price:</div>
                <div class="card__cart__text">${this._price}</div>
            </div>
            <div class="card__cart__text">Color: Red</div>
            <div class="card__cart__text">Size: Xl</div>
            <div class="quantity__input">
                <div class="card__cart__text">Quantity:</div>
                <div class="quantity__input__text"><input type="text" size="1"
                        style="text-align: center" placeholder="2"></div>
            </div>
        </div>`;
    }
}
class GoodsList {
    constructor(goods, container) {
        this._goods = goods;
        this._$goodsListContainer = container;
    }
    renderGoodsList() {
        let goodsList = this._goods.map(
            item => item.render()
        ).join(' ');
        this._$goodsListContainer.insertAdjacentHTML('beforeend', goodsList);
    }
}
const list = new GoodsList([
    new Good("image/card1.png", "ELLERY X M'O CAPSULE", "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.", "$52"),
    new Good("image/card7.png", "ELLERY X M'O CAPSULE", "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.", "$52"),
    new Good("image/card3.png", "ELLERY X M'O CAPSULE", "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.", "$52"),
    new Good("image/card4.png", "ELLERY X M'O CAPSULE", "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.", "$52"),
    new Good("image/card8.png", "ELLERY X M'O CAPSULE", "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.", "$52"),
    new Good("image/card9.png", "ELLERY X M'O CAPSULE", "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.", "$52"),
    new Good("image/card10.png", "ELLERY X M'O CAPSULE", "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.", "$52"),
    new Good("image/card11.png", "ELLERY X M'O CAPSULE", "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.", "$52"),
    new Good("image/card12.png", "ELLERY X M'O CAPSULE", "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.", "$52"),
], document.querySelector('.card__box'))
const cart = new GoodsList([
    new Good("image/card1.png", "ELLERY X M'O CAPSULE", "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.", "$52"),
    new Good("image/card7.png", "ELLERY X M'O CAPSULE", "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.", "$52"),
    new Good("image/card3.png", "ELLERY X M'O CAPSULE", "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.", "$52"),
    new Good("image/card4.png", "ELLERY X M'O CAPSULE", "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.", "$52"),
    new Good("image/card8.png", "ELLERY X M'O CAPSULE", "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.", "$52"),
    new Good("image/card9.png", "ELLERY X M'O CAPSULE", "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.", "$52"),
    new Good("image/card10.png", "ELLERY X M'O CAPSULE", "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.", "$52"),
    new Good("image/card11.png", "ELLERY X M'O CAPSULE", "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.", "$52"),
    new Good("image/card12.png", "ELLERY X M'O CAPSULE", "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.", "$52"),
], document.querySelector('.card__cart'))
list.renderGoodsList();






