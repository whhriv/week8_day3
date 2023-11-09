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
//createUser - this function will return an object of type User. It will autogenerate an UUID for the id. It will require name, and age to be passed in as arguments. It will also initialize an empty cart.


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
// let user = createUser("William Reeder", 37)
// console.log(user)

//createItem - Function will return an object of type Item. It will autogenerate an UUID for the id. It will require name, price, and description to be passed in as arguments.

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

//addToCart - this function will bring an object of Item Type and an User object and it will add the item to the users cart

function addToCart(itemToAdd: Items, user:User): User{
    user.cart.push(itemToAdd)
    return user
}



// this function will bring an object of Item Type and an User object and it will remove all the instances of the item to the users cart (so the cart would have zero of these items left)

function removeFromCart(itemToRemove: Items, user:User): User {
    user.cart = user.cart.filter((item) => item.itemId != itemToRemove.itemId);
    return user
}

// removeQuantityFromCart -this function will bring an object of Item Type and an User object and a quantity of the item to remove and it will remove the quantity amount of instances of the item to the users cart (so if the cart had 5 red hats and we pass inthe red hat item and the number 3 for the quantitiy we would end up with 2 red hats left in the cart)

// function removeQuantityFromCart(itemToRemove:Items, user:User, quantity:number):User{
//     //let itemIndex = user.cart.findIndex((item) => item.id === itemToRemove.id)
//     return user
// }


// cartTotal - this function will calculate the total price of all items in our cart and RETURNS that value
function cartTotal(user:User): number {
    let total=0
    for (let item of user.cart) {
        total += item.price
    }
    return total
}

// printCart - function take user and console.log(items)

function printCart(user:User):void {
    console.log("User's cart:")
    for (let item of user.cart) {
        console.log(`ItemID: ${item.itemId}`)
        console.log(`Name: ${item.itemName}`)
        console.log(`Price: ${item.price}`)
        console.log(`Description: ${item.description}`)
        console.log('--------------------')

    }
}
// Driver Code - use the functions created to accomplish these tasks in order
// Create a User
// Create 3 Items to Sellfor this example we will call them Item A Item B and Item C (you can name them anything that make sense)
// Add Item A to the users Cart
// print the contents of the user's cart
// print the Total of the user's cart

let user = createUser("William Reeder", 37)

let itemA = createItem('Ascic Escalante', 120.00, 'Zero drop running kicks')
let itemB = createItem('SharpEye Modern2', 830.00, 'Modern Fish shortboard with MR twins')
let itemC = createItem('Hot Sauce', 5.00, 'Daves insanity Ghost pepper hot sauce')

addToCart(itemA, user)
printCart(user)
console.log(cartTotal(user))

// addToCart(itemB, user)
// addToCart(itemC, user)

addToCart(itemB, user)
addToCart(itemB, user)
addToCart(itemB, user)

printCart(user)
console.log(cartTotal(user))

addToCart(itemC, user)
addToCart(itemC, user)
addToCart(itemC, user)

printCart(user)
console.log(cartTotal(user))


removeFromCart(itemB, user)
removeFromCart(itemB, user)
removeFromCart(itemB, user)

printCart(user)
console.log(cartTotal(user))


// removeQuantityFromCart(itemC, user, 2)
printCart(user)
console.log(cartTotal(user))