document.title = "Today we manipulate with DOM";

let question = confirm(document.getElementById('question-frontend').textContent);
let answer = document.getElementById('answer-frontend');
if (question == true) {
    answer.innerHTML = "YES";
} else {
    answer.innerHTML = "NO";
}

let shoppingList = document.querySelector('.shopping-list');
let addition = document.createElement('li');
addition.innerHTML = "Meat"; ///prompt
shoppingList.prepend(addition);

let lastItem = shoppingList.lastElementChild;
shoppingList.removeChild(lastItem);

let stock = [{ name: "Carrot", price: 10 },
{ name: "Cheese", price: 15 },
{ name: "Meat", price: 25 }]

let whatProduct = prompt("Please write an item");
let quantity = prompt("Please write quantity");
let totalPrice = document.getElementById('your-total-price');

for (let key in stock) {
    if (whatProduct === stock[key].name) {
        totalPrice.innerHTML = quantity * stock[key].price;
        break;
    }
    else {
        alert("We don't have this item, Sorry!")
        break;
    };
}

/* if (whatProduct === stock[0].name) {
    totalPrice.innerHTML = quantity * stock[0].price;
    alert(totalPrice.innerText);
} else if (whatProduct === stock[1].name) {
    totalPrice.innerHTML = quantity * stock[1].price;
    alert(totalPrice.innerText);
} else if (whatProduct === stock[2].name) {
    totalPrice.innerHTML = quantity * stock[2].price;
    alert(totalPrice.innerText);
}
else { alert("We don't have this item, Sorry!") }; */
