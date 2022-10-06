//HW 5 

//create a class called Roll
class Roll {
    constructor(rollType, rollGlazing, packSize, basePrice) {
        this.type = rollType;
        this.glazing =  rollGlazing;
        this.size = packSize;
        this.basePrice = basePrice;
        this.element = null;
    }
}

//create a new empty set
const newCartSet = new Set();

//create a function that allows to make new entries of the cart and add them to the set
function addNewCart(rollType, rollGlazing, packSize, basePrice){
    const newRoll = new Roll(rollType, rollGlazing, packSize, basePrice);
    newCartSet.add(newRoll);
    return newRoll;
}

// //create some entries of new items in the cart
// const originalRoll = addNewCart("Original","Sugar milk",1,rolls["Original"].basePrice);
// const walnutRoll = addNewCart("Walnut","Vanilla milk",12,rolls["Walnut"].basePrice);
// const raisinRoll = addNewCart("Raisin","Sugar milk",3,rolls["Raisin"].basePrice);
// const appleRoll = addNewCart("Apple","Keep original",3,rolls["Apple"].basePrice);

//account for the price adjustment for different glazing and size options
const glazeChange = {'Keep original':0,"Sugar milk":0,"Vanilla milk":0.5,"Double Chocolate":1.5};
const sizeChange = {"1":1,"3":3,"6":5,"12":10};

//create a for loop that iterate through the newCartSet
for (const newRoll of newCartSet){
    createElement(newRoll);
}

//create a function that create new elements
function createElement (newRoll){

    //grab a reference to the new item entry template
    const template = document.querySelector("#shopping-cart");

    //get the content inside the template and copy it using the cloneNode method
    const clone = template.content.cloneNode(true);

    //store a reference to the newly copied element
    newRoll.element = clone.querySelector(".shopping-display");

    //grab a refernece to the shopping cart list
    const shoppingCartListElement = document.querySelector('.shopping-cart-list');
    
    //add newly added elements that puts the new element at the end of the parent
    shoppingCartListElement.append(newRoll.element);

    //get the remove button and add a click listener to delete the row and update the final price on click
    const btnDelete = newRoll.element.querySelector('.remove');
    btnDelete.addEventListener('click', () => {
        deleteElement(newRoll);
        updateFinalPrice();
    })

    //call the updateElements fuction to update the elements
    updateElement(newRoll);

    //display the updated final price
    updateFinalPrice();

    saveToLocalStorage();
}

//create a function that updates the elements
function updateElement(newRoll){
    //get the elements from the DOM
    const cartImageElement = newRoll.element.querySelector(".products-shopping");
    const rollTypeElement = newRoll.element.querySelector("#roll-name");
    const rollGlazingElement = newRoll.element.querySelector("#roll-glaze");
    const packSizeElement = newRoll.element.querySelector("#roll-size");
    const eachPriceElement = newRoll.element.querySelector("#prices");

   //update the DOM elements using the newRoll properties
    cartImageElement.src = "./image/" + rolls[newRoll.type].imageFile;
    rollTypeElement.innerText = newRoll.type + " cinnamon roll";
    rollGlazingElement.innerText = "Glazing: " + newRoll.glazing;
    packSizeElement.innerText = "Pack Size: " + newRoll.size;

    //calculate each item's price with the consideration of glaze change and size change
    let eachPriceValue = ((newRoll.basePrice + glazeChange[newRoll.glazing])*sizeChange[newRoll.size]).toFixed(2);
    eachPriceElement.innerText = "$" + eachPriceValue;;
}

//create a function that removes the appropriate element from the DOM
function deleteElement(newRoll){
    newRoll.element.remove();
    newCartSet.delete(newRoll);
    saveToLocalStorage();
}

//create a function that calculates and displays the final total price dynamically
function updateFinalPrice(){
    let totalPrice = 0;
    let finalPrice = document.querySelector("#final-price");
    for (const newRoll of newCartSet){
        let eachPriceValue = ((newRoll.basePrice + glazeChange[newRoll.glazing])*sizeChange[newRoll.size]).toFixed(2);
        totalPrice = totalPrice + Number(eachPriceValue);
    }
    finalPrice.innerText = "$" + Number(totalPrice).toFixed(2);
};

function saveToLocalStorage(){
    const shoppingCartArray = Array.from(newCartSet);
    const shoppingCartArrayString = JSON.stringify(shoppingCartArray);
    localStorage.setItem("storedItems", shoppingCartArrayString);
}


function retrieveFromLocalStorage(){
    const shoppingCartArrayString = localStorage.getItem("storedItems");
    const shoppingCartArray = JSON.parse(shoppingCartArrayString);
    for (const cartData of shoppingCartArray){
        const newRoll = addNewCart(cartData.type, cartData.glazing, cartData.size, cartData.basePrice);
        createElement(newRoll);
    }
}

if (localStorage.getItem("storedItems") != null){
    retrieveFromLocalStorage();
}