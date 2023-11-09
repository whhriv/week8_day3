"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const uuid_1 = require("uuid");
function createUser(name, age) {
    let id = (0, uuid_1.v4)();
    let cart = [];
    let user = {
        id,
        name,
        age,
        cart
    };
    return user;
}
function createItem(itemName, price, description) {
    let itemId = (0, uuid_1.v4)();
    let item = {
        itemId,
        itemName,
        price,
        description
    };
    return item;
}
function addToCart(itemToAdd, user) {
    user.cart.push(itemToAdd);
    return user;
}
function removeFromCart(itemToRemove, user) {
    user.cart = user.cart.filter((item) => item.itemId != itemToRemove.itemId);
    return user;
}
function removeQuantityFromCart(itemToRemove, user, quantity) {
    for (let i = 0; i <= quantity; i++) {
        removeFromCart(itemToRemove, user);
    }
    return user;
}
function cartTotal(user) {
    let total = 0;
    for (let item of user.cart) {
        total += item.price;
    }
    return total;
}
function printCart(user) {
    console.log("User's cart:\n");
    for (let item of user.cart) {
        console.log('\n- - - - - - - - - - - - - - - - - - - ');
        console.log(`ItemID: ${item.itemId}`);
        console.log(`Name: ${item.itemName}`);
        console.log(`Price: ${item.price}`);
        console.log(`Description: ${item.description}`);
        // console.log('\n- - - - - - - - - - - - - - - - - - - ')
    }
}
let user = createUser("William Reeder", 37);
let itemA = createItem('Ascic Escalante', 120.00, 'Zero drop running kicks');
let itemB = createItem('SharpEye Modern2', 850.00, 'Modern Fish shortboard with MR twins');
let itemC = createItem('Hot Sauce', 5.00, 'Daves insanity Ghost pepper hot sauce');
printCart(user);
console.log('Total: ', cartTotal(user));
console.log("\n============================================\n");
addToCart(itemA, user);
printCart(user);
console.log('Total: ', cartTotal(user));
console.log("\n============================================\n");
addToCart(itemB, user);
addToCart(itemB, user);
addToCart(itemB, user);
printCart(user);
console.log('Total: ', cartTotal(user));
console.log("\n============================================\n");
addToCart(itemC, user);
addToCart(itemC, user);
addToCart(itemC, user);
printCart(user);
console.log('Total: ', cartTotal(user));
console.log("\n============================================\n");
removeFromCart(itemB, user);
removeFromCart(itemB, user);
removeFromCart(itemB, user);
printCart(user);
console.log('Total: ', cartTotal(user));
console.log("\n============================================\n");
removeQuantityFromCart(itemC, user, 2);
printCart(user);
console.log('Total: ', cartTotal(user));
