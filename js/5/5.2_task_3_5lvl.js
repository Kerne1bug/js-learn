/**Создайте функцию readNumber, которая будет запрашивать ввод числового значения до тех пор, пока посетитель его не введёт.

Функция должна возвращать числовое значение.

Также надо разрешить пользователю остановить процесс ввода, отправив пустую строку или нажав «Отмена». В этом случае функция должна вернуть null. */

function readNumber() {
    let num;
    do {
        num = promt('Enter number',''); 
    } while (!isFinite(num));

    if (num === null || num === '') return nul;

    return +num;
}

alert(`Number: ${readNumber()}`);