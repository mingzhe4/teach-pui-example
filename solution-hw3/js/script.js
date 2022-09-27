//HW3

/*dynamically display the price on the page*/
let price = 2.49;
let displayPrice = document.querySelector("#price");
displayPrice.textContent="$"+price;

/* create arrays that will be shown on the options dropdown*/
let showOptions = {
    arrayGlaze: ['Keep Original','Sugar milk','Vanilla Milk','Double Chocolate'],
    arraySize: ['1','3','6','12']
}

/* get the glazing and pack size elements from html */
let elementGlaze = document.querySelector('#glazing-options');
let elementSize = document.querySelector('#size');

/*loop through the array to create the menu drop down options for glazing*/
for(i=0;i<showOptions.arrayGlaze.length;i++){
    let optionGlaze = document.createElement('option');
    optionGlaze.textContent=showOptions.arrayGlaze[i];
    elementGlaze.appendChild(optionGlaze);
}

/*loop through the array to create the menu drop down options for pack size*/
for(i=0;i<showOptions.arraySize.length;i++){
    let optionSize = document.createElement('option');
    optionSize.textContent=showOptions.arraySize[i];
    elementSize.appendChild(optionSize);
}

/* create arrays that will account for the adjustment of price*/
let addPrice = {
    addGlaze:[0,0,0.5,1.5],
    addSize:[1,3,5,10]
}

/*create the initial value of glazing and pack size*/
let elementGlazeValue = 0;
let elementSizeValue = 1;


/*create a function that calculates the value of the final price given glazing option adjustment to the hundredth decimal place, 
include updatePrice() function to reflect the final price on the html page */
function glazingChange(element) {
    const priceChange = element.value;

    /* get the index of selected element and find the respective value useing index of that array*/
    indexGlaze = showOptions.arrayGlaze.indexOf(priceChange);
    elementGlazeValue=addPrice.addGlaze[indexGlaze];

    /*calculate the final price and display it on the webpage*/
    finalPrice = ((elementSizeValue)*(price+(elementGlazeValue))).toFixed(2);   
    let showPrice = document.querySelector("#price");
    showPrice.textContent = '$'+finalPrice;
}

/*create a function that calculates the value of the final price given pack size adjustment to the hundredth decimal place, 
include updatePrice() function to reflect the final price on the html page */
function sizeChange(element) {
    const priceChange = element.value;

    /* get the index of selected element and find the respective value useing index of that array*/
    indexSize = showOptions.arraySize.indexOf(priceChange);
    elementSizeValue=addPrice.addSize[indexSize];

    /*calculate the final price and display it on the webpage*/
    finalPrice = ((elementSizeValue)*(2.49+(elementGlazeValue))).toFixed(2);   
    let showPrice = document.querySelector("#price");
    showPrice.textContent = '$'+finalPrice;
}