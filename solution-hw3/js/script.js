let addPriceGlaze = {
    glazing:[0,0,0.5,1.5]
}

let addPriceSize = {
    packSize:[1,3,5,10]
}

let elementGlaze = document.querySelector('#glazingOptions');
let elementSize = document.querySelector('#size');

for(i=0;i<addPriceGlaze.glazing.length;i++){
    elementGlaze.options[i].value=addPriceGlaze.glazing[i];
}

for(j=0;j<addPriceSize.packSize.length;j++){
    elementSize.options[j].value=addPriceSize.packSize[j];
}

function updatePrice(){
    let showPrice  = document.querySelector("#price");
    showPrice.textContent = '$'+finalPrice;
}

function glazingChange() {
    finalPrice = (Number(Number(elementSize.value)*(Number(2.49+Number(elementGlaze.value))))).toFixed(2);   
    updatePrice();
  }



