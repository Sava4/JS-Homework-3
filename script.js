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
    do {
        num1 = promptNumber(num1);
        num2 = promptNumber(num2);
        number1 = num1;
        number2 = num2;
    } while (!(isValidNum(number1) && isValidNum(number2)));
}

const validateAll = (num1, num2, op) => {
    prOpValid(op);
    retryPrompt(num1, num2);
}

const doCalc = (num1, num2, op) => {
    num1 = Number(num1);
    num2 = Number(num2);
    switch (op) {
        case '+':
            return(num1 + num2);
            break;
        case '-':
            return(num1 - num2);
            break;
        case '*':
            return(num1 * num2);
            break;
        case '/':
            return(num1 / num2);
            break;
        default:
                console.log('oops');
        }
    }

validateAll(number1, number2, operation);

console.log(doCalc (number1, number2, operation));