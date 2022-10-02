//HW 5 
class Roll {
    constructor(rollType, rollGlazing, packSize, basePrice) {
        this.type = rollType;
        this.glazing =  rollGlazing;
        this.size = packSize;
        this.basePrice = basePrice;
        this.element = null;
    }
}

const newCartSet = new Set();

function addNewCart(rollType, rollGlazing, packSize, basePrice){
    const newRoll = new Roll(rollType, rollGlazing, packSize, basePrice);
    newCartSet.add(newRoll);
    return newRoll;
}

const originalRoll = addNewCart("Original","Sugar milk",1,2.49);
const walnutRoll = addNewCart("Walnut","Vanilla milk",12,3.49);
const raisinRoll = addNewCart("Raisin","Sugar milk",3,2.99);
const appleRoll = addNewCart("Apple","Keep original",3,3.49);

const glazeChange = {'Keep original':0,"Sugar milk":0,"Vanilla milk":0.5,"Double Chocolate":1.5};
const sizeChange = {"1":1,"3":3,"6":5,"12":10};


for (const newRoll of newCartSet){
    createElement(newRoll);
}


function createElement (newRoll){
    const template = document.querySelector("#shopping-cart");
    const clone = template.content.cloneNode(true);
    newRoll.element = clone.querySelector(".shopping-display");

    const shoppingCartListElement = document.querySelector('.shopping-cart-list');
    shoppingCartListElement.append(newRoll.element);


    const btnDelete = newRoll.element.querySelector('.remove');
    btnDelete.addEventListener('click', () => {
        deleteElement(newRoll);
        updateFinalPrice();
    })

    updateElement(newRoll);
    updateFinalPrice();
}


function updateElement(newRoll){
    const cartImageElement = newRoll.element.querySelector(".products-shopping");
    const rollTypeElement = newRoll.element.querySelector("#roll-name");
    const rollGlazingElement = newRoll.element.querySelector("#roll-glaze");
    const packSizeElement = newRoll.element.querySelector("#roll-size");
    const eachPriceElement = newRoll.element.querySelector("#prices");

    cartImageElement.src = "./image/" + rolls[newRoll.type].imageFile;
    rollTypeElement.innerText = newRoll.type + " cinnamon roll";
    rollGlazingElement.innerText = "Glazing: " + newRoll.glazing;
    packSizeElement.innerText = "Pack Size: " + newRoll.size;
    let eachPriceValue = ((newRoll.basePrice + glazeChange[newRoll.glazing])*sizeChange[newRoll.size]).toFixed(2);
    eachPriceElement.innerText = "$" + eachPriceValue;;
}

function deleteElement(newRoll){
    newRoll.element.remove();
    newCartSet.delete(newRoll);
}

function updateFinalPrice(){
    let totalPrice = 0;
    let finalPrice = document.querySelector("#final-price");
    for (const newRoll of newCartSet){
        let eachPriceValue = ((newRoll.basePrice + glazeChange[newRoll.glazing])*sizeChange[newRoll.size]).toFixed(2);
        totalPrice = totalPrice + Number(eachPriceValue);
    }
    finalPrice.innerText = "$" + Number(totalPrice).toFixed(2);
};