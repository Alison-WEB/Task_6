let inBuyBasket = document.querySelectorAll('.in-buy-basket');
let valueShopBasket = document.getElementById('valueShopBasket');

let pizza1JS = document.getElementById('pizza1');
let inBasket1JS = document.getElementById('in-basket1');
let inBasket1JSDiv = document.getElementById('in-basket1-div');
let valueItemCount1JS = document.getElementById('value-item-count1');
let minus1JS = document.getElementById('minus1');
let plus1JS = document.getElementById('plus1');

let pizza2JS = document.getElementById('pizza2');
let inBasket2JS = document.getElementById('in-basket2');
// console.log(inBasket2JS);
let inBasket2JSDiv = document.getElementById('in-basket2-div');
let valueItemCount2JS = document.getElementById('value-item-count2');
//let itemCount2JSNumber = Number(itemCount2JS.textContent);
// console.log(typeof itemCount2JSNumber);
let minus2JS = document.getElementById('minus2');
// console.log(minus2JS);
let plus2JS = document.getElementById('plus2');
// console.log(plus2JS);


let pizza3JS = document.getElementById('pizza3');
let inBasket3JS = document.getElementById('in-basket3');
let inBasket3JSDiv = document.getElementById('in-basket3-div');
let valueItemCount3JS = document.getElementById('value-item-count3');
let minus3JS = document.getElementById('minus3');
let plus3JS = document.getElementById('plus3');

function getNumPlusOne(valueShopBasket){
    return (Number(valueShopBasket) + 1);
}

function getNumMinusOne(valueShopBasket){
    return (Number(valueShopBasket) - 1);
}

function getNumPlusOneItem1(valueItemCount1JS){
    return (Number(valueItemCount1JS) + 1);
};

function getNumPlusOneItem2(valueItemCount2JS){
    return (Number(valueItemCount2JS) + 1);
};

function getNumPlusOneItem3(valueItemCount3JS){
    return (Number(valueItemCount3JS) + 1);
};

function getNumMinusOneItem1(valueItemCount1JS){
    return (Number(valueItemCount1JS) - 1);
};

function getNumMinusOneItem2(valueItemCount2JS){
    return (Number(valueItemCount2JS) - 1);
};

function getNumMinusOneItem3(valueItemCount3JS){
    return (Number(valueItemCount3JS) - 1);
};

for (let elem of inBuyBasket){
    elem.onclick = () => {
        valueShopBasket.textContent = getNumPlusOne(valueShopBasket.textContent);
        valueItemCount1JS.textContent = getNumPlusOneItem1(valueItemCount1JS.textContent);
        valueItemCount2JS.textContent = getNumPlusOneItem2(valueItemCount2JS.textContent);
        valueItemCount3JS.textContent = getNumPlusOneItem3(valueItemCount3JS.textContent);
    }
}

inBasket1JS.onclick = function() {
    pizza1JS.style.display = ('flex');
    inBasket1JSDiv.style.display = ('none');
    valueShopBasket.textContent = getNumPlusOne(valueShopBasket.textContent);
    valueItemCount1JS.textContent = getNumPlusOneItem1(valueItemCount1JS.textContent);
}

inBasket2JS.onclick = function() {
    pizza2JS.style.display = ('flex');
    inBasket2JSDiv.style.display = ('none');
    valueShopBasket.textContent = getNumPlusOne(valueShopBasket.textContent);
    valueItemCount2JS.textContent = getNumPlusOneItem2(valueItemCount2JS.textContent);
}

// inBasket2JSDiv.style.visibility = ('hidden');
// pizza2JS.style.visibility = ('visible');

inBasket3JS.onclick = function() {
    pizza3JS.style.display = ('flex');
    inBasket3JSDiv.style.display = ('none');
    valueShopBasket.textContent = getNumPlusOne(valueShopBasket.textContent);
    valueItemCount3JS.textContent = getNumPlusOneItem3(valueItemCount3JS.textContent);
}

plus1JS.onclick = function() {
    valueShopBasket.textContent = getNumPlusOne(valueShopBasket.textContent);
    valueItemCount1JS.textContent = getNumPlusOneItem1(valueItemCount1JS.textContent);
}

plus2JS.onclick = function() {
    valueShopBasket.textContent = getNumPlusOne(valueShopBasket.textContent);
    valueItemCount2JS.textContent = getNumPlusOneItem2(valueItemCount2JS.textContent);
}

plus3JS.onclick = function() {
    valueShopBasket.textContent = getNumPlusOne(valueShopBasket.textContent);
    valueItemCount3JS.textContent = getNumPlusOneItem3(valueItemCount3JS.textContent);
}

minus1JS.onclick = function() {
    valueShopBasket.textContent = getNumMinusOne(valueShopBasket.textContent);
    valueItemCount1JS.textContent = getNumMinusOneItem1(valueItemCount1JS.textContent);
    console.log(valueItemCount1JS.textContent);
    if((valueItemCount1JS.textContent) == '0') {
        pizza1JS.style.display = ('none');
        inBasket1JSDiv.style.display = ('flex');
    }
}

minus2JS.onclick = function() {
    valueShopBasket.textContent = getNumMinusOne(valueShopBasket.textContent);
    valueItemCount2JS.textContent = getNumMinusOneItem2(valueItemCount2JS.textContent);
    console.log(valueItemCount2JS.textContent);
    if((valueItemCount2JS.textContent) == '0') {
        pizza2JS.style.display = ('none');
        inBasket2JSDiv.style.display = ('flex');
    }
}
    
minus3JS.onclick = function() {
    valueShopBasket.textContent = getNumMinusOne(valueShopBasket.textContent);
    valueItemCount3JS.textContent = getNumMinusOneItem3(valueItemCount3JS.textContent);
    // console.log(valueItemCount3JS.textContent);
    if((valueItemCount3JS.textContent) == '0') {
        pizza3JS.style.display = ('none');
        inBasket3JSDiv.style.display = ('flex');
    }
 }