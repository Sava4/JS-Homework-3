let number1 = 0;
let number2 = 0;
let operation = '+';

const promptNumber = (num) => {
    return(prompt('Please enter number', num));
}

const isValidNum = (num) => {
    if (num !== null && !Number.isNaN(Number(num))) {
        return true;
        } else {
            return false;
        }
    }

const prOpValid = (op) => {
    operation = prompt('Please enter arithmetic operation: +, -, *, / supported', op);
    while (operation !== '+' && operation !== '-' && operation !== '*' && operation !== '/') {
        operation = prompt('Please enter arithmetic operation: +, -, *, / supported', operation);
    }
}

const retryPrompt = (num1, num2) => {
    number1 = promptNumber(num1);
    number2 = promptNumber(num2);

    while (!isValidNum(num1) && !isValidNum(num2)) {
        number1 = promptNumber(num1);
        number2 = promptNumber(num2);
    }
}

const validateAll = (num1, num2, op) => {
    prOpValid(op);
    retryPrompt(num1, num2);
}

const doCalc = (num1, num2, op) => {
    validateAll(num1, num2, op);
    num1 = Number(number1);
    num2 = Number(number2);
    op = operation;
    switch (op) {
        case '+':
            console.log((num1 + num2));
            break;
        case '-':
            console.log((num1 - num2));
            break;
        case '*':
            console.log((num1 * num2));
            break;
        case '/':
                console.log((num1 / num2));
                break;
        default:
                console.log('oops');
        }
    }

doCalc(number1, number2, operation);