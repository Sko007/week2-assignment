////////////ShoppingCart///////////////////
/////////////////////////////////////////////
 class Cart {

    constructor (itemName, quantaty, price) {
        this.cart = []
        // this.itemName = itemName
        // this.quantaty = quantaty
        // this.price = price

}

getItems(){

    return this.cart;

}

addItem(itemName, quantaty, price){

    const obj = {
                itemName:itemName,
                    quantaty:quantaty,
                         price:price
                }

   return this.cart.push(obj);
}

clear(){

  return this.cart = [];

}
total(){

    const cart_total = this.cart.reduce(function(acc, value) {

          return acc + (value.price * value.quantaty)

    },0 );

            return cart_total

        }

}

////////////////////////////////////////////////////////////////////////////////
///////////////create Instance+ perform some methods///////////////////////////

const cart = new Cart();

cart.addItem("Beef", 3,3)
cart.addItem("chicken", 33,33)
cart.addItem("special", 5,100)

console.log("What is in my cart", cart.getItems())

console.log("Total price * quantaty of cart", cart.total())

console.log("What is in my cart", cart.getItems())

console.log("empty the cart", cart.clear())

console.log("What is in my cart", cart.getItems())

//////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////

module.exports = Cart;