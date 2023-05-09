let resultElement = document.getElementById('result');
let currentResult = '0';

function clearResult() {
    currentResult = '0';
    updateResult();
}

function appendValue(value) {
    if (currentResult === '0') {
        currentResult = value;
    } else {
        currentResult += value;
    }
    updateResult();
}

function calculateResult() {
    try {
        currentResult = eval(currentResult);
        updateResult();
    } catch (error) {
        currentResult = 'Error';
        updateResult();
    }
}

function updateResult() {
    resultElement.textContent = currentResult;
}