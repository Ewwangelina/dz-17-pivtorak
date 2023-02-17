
//2. Написать функцию doMath(x, znak, y), которая получает 3 аргумента: числа x и y, строка znak. В переменной znak может быть: +, -, *, /, %, ^ (степень ).
//   Вывести результат математического действия, указанного в переменной znak. Оба числа и знак исходят от пользователя.


function doMath(x, znak, y) {
    if ( !isNaN(x) && !isNaN(y) ) {
        switch (znak) {
            case '+' :
                console.log( x + y)
                break;
            case '-':
                console.log( x - y)
                break;
            case '*':
                console.log( x * y)
                break;
            case '/':
                console.log( x / y)
                break;
            case '%':
                console.log( x % y)
                break;
            case '^':
                console.log( x ^ y)
                break;
            default:
                console.log(`Znak ${znak} is not find!`);
        }
    } else {
        console.log('You are not enter number!')
    }
}

let x = +prompt('Enter number')
let znak = prompt('Enter znak')
let y = +prompt('Enter number')

doMath(x, znak, y);
