let button = document.getElementById('button');
let input = document.getElementById('input');
button.onclick = (event) => {
    if (input.value != '') {
        
        alert(`Числа значение к-х больше 50:
        `+input.value.split(',').map((i)=>Number(i)).filter((i) => (i > 50)))
        // arr.filter((i) => (i > 3))
    }
    else alert('Введите числа!!!')
};