function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function operate(op, a, b) {
    switch (op) {
        case '+':
            add(a, b);
            break;
        case '-':
            subtract(a, b);
            break;
        case '*':
            multiply(a, b);
            break;
        case '/':
            divide(a, b);
            break;
        default:
            break;
    }
}

const display = document.querySelector('.display');
let displayValue = '';
const digitButtons = document.querySelectorAll('.digit');
[...digitButtons].forEach(b => b.addEventListener('click', e => {
    displayValue += e.target.innerText;
    display.innerText = displayValue;
}))