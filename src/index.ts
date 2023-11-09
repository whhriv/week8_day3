import { v4 as uuidv4 } from 'uuid';

type Items = {
    itemId:string;
    itemName:string;
    price:number;
    description:string;

}

type User = {
    id:string;
    name:string;
    age:number;
    cart:Items[];
}

function createUser(name:string,age:number):User {
    let id = uuidv4();
    let cart: Items[] = [];
    let user: User = {
        id,
        name,
        age,
        cart
    }
    return user
}

function createItem(itemName:string,price:number,description:string):Items {
    let itemId = uuidv4();
    let item:Items = {
        itemId,
        itemName,
        price,
        description 
    }
    return item
}

function addToCart(itemToAdd: Items, user:User): User{
    user.cart.push(itemToAdd)
    return user
}

function removeFromCart(itemToRemove: Items, user:User): User {
    user.cart = user.cart.filter((item) => item.itemId != itemToRemove.itemId);
    return user
}

function removeQuantityFromCart(itemToRemove: Items, user:User, quantity:number): User{
    for (let i=0; i<=quantity; i++){
        removeFromCart(itemToRemove, user)
    }
    return user
}

function cartTotal(user:User): number {
    let total=0
    for (let item of user.cart) {
        total += item.price
    }
    return total
}

function printCart(user:User):void {
    console.log("User's cart:\n")
    for (let item of user.cart) {
        console.log('\n- - - - - - - - - - - - - - - - - - - ')
        console.log(`ItemID: ${item.itemId}`)
        console.log(`Name: ${item.itemName}`)
        console.log(`Price: ${item.price}`)
        console.log(`Description: ${item.description}`)
       // console.log('\n- - - - - - - - - - - - - - - - - - - ')

    }
}

let user = createUser("William Reeder", 37)

let itemA = createItem('Ascic Escalante', 120.00, 'Zero drop running kicks')
let itemB = createItem('SharpEye Modern2', 850.00, 'Modern Fish shortboard with MR twins')
let itemC = createItem('Hot Sauce', 5.00, 'Daves insanity Ghost pepper hot sauce')

printCart(user)
console.log('Total: ',cartTotal(user))
console.log("\n============================================\n")

addToCart(itemA, user)
printCart(user)
console.log('Total: ',cartTotal(user))

console.log("\n============================================\n")

addToCart(itemB, user)
addToCart(itemB, user)
addToCart(itemB, user)

printCart(user)
console.log('Total: ',cartTotal(user))
console.log("\n============================================\n")

addToCart(itemC, user)
addToCart(itemC, user)
addToCart(itemC, user)

printCart(user)
console.log('Total: ',cartTotal(user))

console.log("\n============================================\n")
removeFromCart(itemB, user)
removeFromCart(itemB, user)
removeFromCart(itemB, user)

printCart(user)
console.log('Total: ',cartTotal(user))

console.log("\n============================================\n")

removeQuantityFromCart(itemC, user, 2)
printCart(user)
console.log('Total: ', cartTotal(user))