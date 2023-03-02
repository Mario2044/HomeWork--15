//Напишіть функцію min(a, b), яка повертає менше з двох чисел a та b.
/*let a = prompt("Введите число", '');
let b = prompt("Еще одно", '');
function min(a, b) {
    return a < b ? a : b;
}
alert(min(a, b));

//Напишіть функцію pow(x, n), яка повертає число x в n степені
let x = prompt("x?", '');
let n = prompt("n?", '');
let subscribe = false;

function pow(x, n) {
    let result = 1;
    for (let i = 0; i < n; i++) {
      result *= x;
    }
    return result;
}
alert(pow(x, n));

//Перепишіть функцію, використовуючи  1) '?'  2) '||' або '&&'

let agee = +prompt("Сколько вам лет?");

function checkAge(age) {
    return (age >= 18) || confirm('Батьки дозволили?');
}
checkAge(agee);


function checkAge(age) {
    return (age > 18) || confirm('Батьки дозволили?');
}
alert(checkAge2(8));
alert(checkAge2(18));
alert(checkAge2(20));
*/

let data = {
    Риба: {
      форель: {},
      лосось: {}
    },
  
    Дерево: {
        яблуня: {},
        магнолія: {}
    }
}

const elem = document.querySelector('div');

for (let key in data) {
    let ul = document.createElement('ul');
    ul.innerHTML = key;
    let childUl = ul.cloneNode(false);
    ul.append(childUl);
    
    for(let el in data[key]) {
        let li = document.createElement('li');
        li.innerHTML = el;
        childUl.append(li);
    }
    elem.append(ul);
}