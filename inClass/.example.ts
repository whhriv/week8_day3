import { v4 as uuidv4 } from 'uuid';

type Item = {
    readonly itemId:string;
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
    const newUser: User = {
        id: uuidv4(),
        name:name,
        age:age,
        cart:[]
    }
    return newUser
}

function createItem(name:string, price:number,description:string ):Item{
    const newItem:Item = {
        id: uuidv4(),
        name:name,
        price:price,
        description:description 

    } 
    return newItem
}
function addToCart(user:User, item:Item):void {
    user.cart.push(item);
}
function removeFromCart(user:User, item:Item): void{
    user.cart = user.cart.filter(item => item.id != itemToRemove.id)
}
function removeQuantityFromCart(user:User, itemToRemove:Item,quantity:number): void {
    for (let i=0; i<quantity; i++){
        let index = user.cart.findIndex(item => item.id === itemToRemove.id)
        user.cart.splice(index,1)
        } 
    // }
    // function removeQuantityFromCart(item: Item, user: User, count: number) {
    //         const newCart: Item[] = [];
    //         let removeCount = count;
    //         for (let itemCart of user.cart) {
    //             if (itemCart.id === item.id && removeCount > 0) {
    //                 removeCount -= 1;
    //                 continue;
    //             } else {
    //                 newCart.push(itemCart);
    //             }
    //         }
    //         user.cart = [...newCart];
    //     }

function getCartTotal(user:User):number {
    let total = 0;
    for (let item of user.cart){
        total += item.price
    }
    return total
}
function printCart(user:User):void {
    console.log(`Here is what is in your cart, ${user.name}:`)
    for (let item of user.cart) {
        console.log(`${item.name}: $${item.price}`)
    }
    console.log(`total: ${getCartTotal(user)}`)
}

let myUser = createUser('Brian', 55);
let itemA= createItem('guitar', 150, '6 strings')
let itemB = createItem('shelf', 49.55, 'hold your items up')
let itemC = createItem('monitor', 75, '23 inch LED')

addToCart(myUser, itemA)
printCart(myUser)

addToCart(myUser, itemB)
addToCart(myUser, itemB)
addToCart(myUser, itemB)

printCart(myUser)
addToCart(myUser, itemC)
addToCart(myUser, itemC)
addToCart(myUser, itemC)
printCart(myUser)

removeFromCart(myUser, itemB)
printCart(myUser)

removeQuantityFromCart(myUser, itemC, 2)
printCart(myUser)