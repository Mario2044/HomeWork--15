//Напишіть функцію min(a, b), яка повертає менше з двох чисел a та b.
let agee = prompt("Сколько вам лет?");
let ageBad = 17;
function age(a, b) {
    return a > b ? true : 'Батьки дозволили?';
}
alert(age(agee, ageBad))


//Напишіть функцію pow(x, n), яка повертає число x в n степені
let x = prompt("x?", '');
let n = prompt("n?", '');
let subscribe = false;

function pow(x, n) 
{
    let result = x;
    for (let i = 1; i < n; i++) {
        result *= x;
        return result;
    }
    if (n < 1 || n === "number")  {
        alert( pow(x, n) );
    } else {
        alert(`Степень ${n} не поддерживается, используйте натуральное число`);
    }
    
} 

alert(pow(x, n));