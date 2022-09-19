/* create an array for price adjustment */
let addPrice = {
    glazing:[0,0,0.5,1.5],
    packSize:[1,3,5,10]
};

/* get the glazing and pack size elements from html */
let elementGlaze = document.querySelector('#glazing-options');
let elementSize = document.querySelector('#size');

/* loop through the addPrice array for price adjustment accordingly */
for(i=0;i<addPrice.glazing.length;i++){
    elementGlaze.options[i].value=addPrice.glazing[i];
    elementSize.options[i].value=addPrice.packSize[i];
}

/*create a function that updates the final price shown in the html page */
function updatePrice(){
    let showPrice  = document.querySelector("#price");
    showPrice.textContent = '$'+finalPrice;
}

/*create a function that calculates the value of the final price given glazing option adjustment or pack size adjustment to the hundredth decimal place, 
include updatePrice() function to reflect the final price on the html page */
function glazingChange() {
    finalPrice = (Number(Number(elementSize.value)*(Number(2.49+Number(elementGlaze.value))))).toFixed(2);   
    updatePrice();
  }



