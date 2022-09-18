const addPrice1 = {
    glazing:[0,0,0.5,1.5]
}

const addPrice2 = {
    packSize:[1,3,5,10]
}

const element1 = document.querySelector('#glazingOptions')
const element2 = document.querySelector('#size')

for(i=0;i<4;i++){
    element1.options[i].value=addPrice1.glazing[i];
}


for(j=0;j<4;j++){
    element2.options[j].value=addPrice2.packSize[j];
}

function updatePrice(){
    let showPrice  = document.querySelector("#price")
    showPrice.textContent = '$'+finalPrice;
}


function glazingChange(element) {
    const priceChange = element.value;
    finalPrice = (Number(Number(element2.value)*(Number(2.49+Number(priceChange))))).toFixed(2);
    // get value of selected glazing option
    
    updatePrice()
  // add your code to do update the price ...
  }

function sizeChange(element){
    const priceChange = element.value;
    finalPrice = (Number(Number(element2.value)*(Number(2.49+Number(priceChange))))).toFixed(2);
    // get value of selected glazing option
    
    updatePrice()
  // add your code to do update the price ...
  }


