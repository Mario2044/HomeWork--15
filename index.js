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
*/

//Перепишіть функцію, використовуючи  1) '?'  2) '||' або '&&'
let agee = prompt("Сколько вам лет?");
let ageBad = 17;
function age(a, b) {
    return a > b || 'Батьки дозволили?';
}
alert(age(agee, ageBad));