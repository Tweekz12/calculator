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
            return add(a, b);
        case '-':
            return subtract(a, b);
        case '*':
            return multiply(a, b);
        case '/':
            return divide(a, b);
        default:
            return NaN;
    }
}

let displayValue = '';
let a, b, op;

const displayDiv = document.querySelector('.display');
const digitButtons = document.querySelectorAll('.digit');
[...digitButtons].forEach(b => b.addEventListener('click', e => {
    displayValue += e.target.innerText;
    displayDiv.innerText = displayValue;
}));

const operatorButtons = document.querySelectorAll('.operator');
[...operatorButtons].forEach(b => b.addEventListener('click', e => {
    if (!Number.isFinite(a)) {
        op = e.target.innerText;
        a = +displayValue;
        if (isNaN(a)) {
            displayValue = 'Error';
            displayDiv.innerText = displayValue;
            return;
        }

        displayValue = '';
        displayDiv.innerText = displayValue;
    }
    else
    {
        b = +displayValue;
        if (isNaN(b)) {
            displayValue = 'Error';
            displayDiv.innerText = displayValue;
            return;
        }

        a = operate(op, a, b);
        op = e.target.innerText;

        displayValue = '';
        displayDiv.innerText = a;
    }

}));

document.getElementById('clearButton').addEventListener('click', () => {
    displayDiv.innerText = '';
    displayValue = '';
    op = '';
    a = null;
    b = null;
});

document.getElementById('equalButton').addEventListener('click', () => {
    if (isNaN(a)) {
        displayValue = 'Error';
        displayDiv.innerText = displayValue;
        return;
    }

    b = +displayValue;
    displayValue = '' + operate(op, a, b);
    displayDiv.innerText = displayValue;
    a = null;
    b = null;
});

document.getElementById('deleteButton').addEventListener('click', () => {
    displayValue = displayValue.slice(0, displayValue.length - 1);
    displayDiv.innerText = displayValue;
});