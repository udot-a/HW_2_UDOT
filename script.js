// Первое задание
let firstLetterButton = document.getElementById('firstLetterButton');
let inputString = document.getElementById('inputString');
let firstLetterList = document.getElementById('firstLetterList');
firstLetterButton.onclick = (event) => {
    if (inputString.value != '') {
        firstLetterList.innerHTML = inputString.value.split(' ').map((word) => word[0]).join('')
    }
    else alert('Введите что-нибудь!!!')
};
// Второе задание
let determineNumb = document.getElementById('determineNumb');
let inputNumber = document.getElementById('inputNumber');
let result = document.getElementById('result');

function isNumber(n) {
    if ((n == null) || (n + '' === '') || (isNaN(Number(n)))) return 'Неверный тип данных!!!'
    var date = new Date();
    return `${date.toLocaleDateString()}, ${date.toLocaleTimeString()}`
}

determineNumb.onclick = (event) => {
    result.innerHTML = isNumber(inputNumber.value)
    debugger;

};
