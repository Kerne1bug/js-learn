/*Напишите функцию checkSpam(str), возвращающую true, если str содержит 'viagra' или 'XXX', а иначе false.

Функция должна быть нечувствительна к регистру:
*/

checkSpam('buy ViAgRA now') == true
checkSpam('free xxxxx') == true
checkSpam("innocent rabbit") == false

function checkSpam(str) {
    let lowStr = str.toLowerCase();
    return lowStr.includes('Viagra') || lowStr.includes('XXX');
}
alert (checkSpam('buy ViAgRA now'));
alet (checkSpam('free xxxxx'));
alert (checkSpam("innocent rabbit"));