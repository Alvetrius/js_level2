// const goods = [
//     { title: 'Shirt', price: 150 },
//     { title: 'Socks', price: 50 },
//     { title: 'Jacket', price: 350 },
//     { title: 'Shoes', price: 250 },
// ];


// const $goodsList = document.querySelector('.goods-list');

// const renderGoodsItem = ({ title, price }) => {
//     return `<div class="goods-item"><h3 class="goods-item-title">${title}</h3><p class="goods-item-price">${price}</p></div>`;
// };

// const renderGoodsList = (list = goods) => {
//     let goodsList = list.map(
//         item => renderGoodsItem(item)
//     ).join('');

//     $goodsList.insertAdjacentHTML('beforeend', goodsList);
// }

// renderGoodsList();

class GoodsItem {
    constructor(title, price) {
        this.title = title;
        this.price = price;
    }

    render() {
        return `<div class="goods-item"><h3 class="goods-item-title">${this.title}</h3><p class="goods-item-price">${this.price}</p></div>`;
    }
}

class GoodsList {
    constructor() {
        this.goods = [];
    }

    fetchGoods() {
        this.goods = [
            { title: 'Shirt', price: 150 },
            { title: 'Socks', price: 50 },
            { title: 'Jacket', price: 350 },
            { title: 'Shoes', price: 250 },
        ];
    }

    render() {
        let listHtml = '';
        this.goods.forEach(good => {
            const goodItem = new GoodsItem(good.title, good.price);
            listHtml += goodItem.render();
        });
        document.querySelector('.goods-list').innerHTML = listHtml;
    }

    /*Метод, определяющий суммарную стоимость всех товаров (мне кажется, что место этого метода в корзине).
    Ведь здесь мы посчитаем стоимость суммы всех единиц товаров, а не общую стоимость корзины.    
    */

    amount() {
        let sum = 0;
        this.goods.forEach(good => {
            const goodItem = new GoodsItem(good.title, good.price);
            sum += goodItem.price;
        });
        console.log(sum);
        alert(`Сумма стоимости всех товаров = ${sum}`);
    }
}

const list = new GoodsList();
list.fetchGoods();
list.render();
list.amount();


/*Создаём класс для элемента корзины, который содержит название, цену единицы товара, количество данного наименования*/

class BasketItem {
    constructor(title, price, quantity) {
        this.title = title;
        this.price = price;
        this.quantity = quantity;
    }

    render() {
        return '';
    }
}

/*Создаём класс корзины товаров, который будет содержать элементы корзины и их отрисовывать*/

class BasketList {
    constructor() {
        this.basket = [];
    }

    fetchBasket() {

    }

    render() {

    }
}