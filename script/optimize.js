




/* function saveUser() {
    const getUserName = prompt('type your name');
    return localStorage.setItem('name', JSON.stringify(getUserName));
}

function welcomeUser() {
    alert('hi' + " " + localStorage.getItem('name'));
}

function handleLogin() {
    saveUser();
    welcomeUser();
}

handleLogin(); */

// const { createElement } = require("react")



/* const selector = (el) => document.querySelector(el);
const style = (el, property, propertyCss, value) => selector(el)[property][propertyCss] = value; 

style('#box', 'style', 'border', '1px solid red'); */
/* 
const fragment = document.createDocumentFragment();

for(let i = 0; i <= 5; i++) {
    const param = document.createElement('p');
    param.textContent = `${i}). Hello world`;
    fragment.appendChild(param);
}

document.body.appendChild(fragment); */


/* const totalNums = [12,123,123,123];


function calculateTotal() {
    return totalNums.reduce((prev, current) => prev += current, 0);
}

function displayTotal(total) {
    return document.querySelector('#total').textContent = total;
}

const total = calculateTotal();
displayTotal(total); */

/* function createElement(tag, text) {
    const el = document.createElement(tag);
    el.textContent = text;
    return el;
}

const param = createElement('p', 'hello world');
document.body.appendChild(param); */

/* const product = {
    name: 'TV',
}

function createListItem(product) {
    const li = createElement('li', product.name);
    return li;
}

createElement(product); */

/* const totalItems = [12,123,123,123];

function computeTotalItems(totalItems) {
    return totalItems.reduce((prev, accu) => prev += accu, 0);
}

function renderTotalItem(totalValue) {
    document.querySelector('#total').textContent = totalValue;
}

const result = computeTotalItems(totalItems);
renderTotalItem(result); */


/* function calculateDiscountPrice(price, discount) {
    return price - (price * discount);
}

cost */