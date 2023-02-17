
// 4. Создать функцию, которая убирает из строчки все символы, которые мы передали вторым аргументом.
//    'func("hello world", ['l', 'd'])' вернет нам "heo wor". Выходную строку и символы для удаления
//    задает пользователь.

let writeFrase = prompt('Write frase - "Hello world"')

function replace_string(string, pattern){
    let st_pt = pattern.join('');
    return string.replace(new RegExp(`[${st_pt}]`, 'gi'), '')
}

console.log(replace_string('Hello world', ['l', 'd']))
