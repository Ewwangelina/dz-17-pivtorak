// 3. Написать функцию заполнения пользовательскими данными двухмерного массива. Длина основного массива и внутренних массивов задает пользователь.
//    Значение всех частей всех массивов задает юзер.

function arrAdd() {
    const amount = +prompt("Введите количество елементов в первом массиве");
    const arr = [];

    for(let i = 0; i < amount; i++) {
        arr.push([]);
    }

    for(let i = 0; i < amount; i++) {
        let amount2 = +prompt("Введите количество елементов в " + (i + 1) + " массиве");
        for(let i = 0; i < amount2; i++) {
            arr[i].push([]);
        }
    }
    console.log(arr);
 }

 let functionResult = arrAdd();



