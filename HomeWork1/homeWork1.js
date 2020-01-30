let teaPrice = 15.678;
let beerPrice = 123.965;
let coffeePrice = 90.2345;

let maxPrice = Math.max(teaPrice, beerPrice, coffeePrice);
let minPrice = Math.min(teaPrice, beerPrice, coffeePrice);
let generalPrice = teaPrice + beerPrice + coffeePrice;
let generalPriceOfInt = Math.floor(teaPrice) + Math.floor(beerPrice) + Math.floor(coffeePrice);//сума цілих частин
let generalPriceToHundred = (Math.round(generalPrice/100))*100;
let generalPriceToMin = Math.floor(generalPrice);
let averagePrice = generalPrice/3;
console.log(`Максимальна ціна - ${maxPrice}, 
Мінімальна ціна - ${minPrice},
Загальна вартість - ${generalPrice},
Загальна вартість (сума цілих частин) - ${generalPriceOfInt},
Загальна вартість (заокруглена до сотні) - ${generalPriceToHundred},
Сума (округлена до меншого) = ${generalPriceToMin}, парне - ${!(generalPriceToMin%2)},
Сума решти від 500 грн = ${500-generalPrice},
Середнє значення = ${averagePrice}, 
округлене до 2-го знаку після коми - ${parseFloat(averagePrice.toFixed(2))}`);

let discount = Math.random();
let beerPriceWithDiscount = parseFloat((beerPrice*(1-discount)).toFixed(2));
let baseBeerPrice = beerPrice /2;
console.log(`Вартість без знижки - ${beerPrice},
Знижка - ${discount*100}%, вартість зі знижкою - ${beerPriceWithDiscount},
Упущена вигода - ${baseBeerPrice-(beerPrice-beerPriceWithDiscount)}`);
