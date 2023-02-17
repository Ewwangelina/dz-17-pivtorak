
// 1. Дан массив с элементами разных типов.
///  Создать функцию вычисляющую среднее арифметическое только числовых элементов данного массива.

function calculateArr() {
    let ownArray = ['qwr', 45, 'wqe', 'wqe', 'qwe', 121, 'ewtr', 'fbd', 'sdv', 19, 45, 'end'];
    let sum = 0;
    let count = 0;

    for(let i = 0; i < ownArray.length; i++){
        if (!isNaN(ownArray[i])) {
            count += 1;
            sum += ownArray[i];
        }
        console.log(count);
    }
    return count;
}

let result = calculateArr();
console.log(result);
