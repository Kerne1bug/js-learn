/*Проверка, целое ли число
Напишите функцию isInteger(num), которая возвращает true, если num – целое число, иначе false.
Например:*/


function isInteger(num) {
    return num % 1 === 0;
}

alert( isInteger(1) ); // true
alert( isInteger(1.5) ); // false
alert( isInteger(-0.5) ); // false