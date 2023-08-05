"use strict";
// function calculateCircleArea(diam: number): number
// {
//     return diam * diam  * Math.PI / 4
// }
// let calculateRectangleArea = (w: number, h: number) : number => { return h * w ; };
//
// console.log(calculateCircleArea(2));
// console.log(calculateRectangleArea(2, 3));
class shoppingBasket {
    constructor() {
        this.cart = [];
    }
    addItems(items) {
        this.cart.push(items);
    }
    removeItems(items) {
        const i = this.cart.indexOf(items);
        if (i != -1)
            this.cart.splice(i, 1);
    }
    getItems() { return this.cart; }
    sumAmmount() {
        let sum = 0;
        for (let i = 0; i < this.cart.length; i++) {
            sum += this.cart[i].price;
        }
        return sum;
    }
}
///testing the operations on the cart:
let personA = new shoppingBasket();
personA.addItems({ price: 100, name: "bag", quantity: 1 });
personA.addItems({ price: 200, name: "shoe", quantity: 2 });
let twoPurchases = [];
twoPurchases[0] = {
    name: "sunglass",
    price: 50,
    quantity: 1,
};
twoPurchases[1] = {
    name: "phone",
    price: 1000,
    quantity: 1,
};
personA.addItems(twoPurchases[0]);
personA.addItems(twoPurchases[1]); /// 1350
personA.removeItems(twoPurchases[1]);
console.log(personA.getItems());
console.log("you have to pay: " + personA.sumAmmount());
