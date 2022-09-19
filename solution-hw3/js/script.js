const addPrice1 = {
    glazing:[0,0,0.5,1.5]
}

const addPrice2 = {
    packSize:[1,3,5,10]
}

const elementGlaze = document.querySelector('#glazingOptions')
const elementSize = document.querySelector('#size')

for(i=0;i<4;i++){
    elementGlaze.options[i].value=addPrice1.glazing[i];
}

for(j=0;j<4;j++){
    elementSize.options[j].value=addPrice2.packSize[j];
}

function updatePrice(){
    showPrice  = document.querySelector("#price")
    showPrice.textContent = '$'+finalPrice;
}

function glazingChange() {
    finalPrice = (Number(Number(elementSize.value)*(Number(2.49+Number(elementGlaze.value))))).toFixed(2);   
    updatePrice()
  }



