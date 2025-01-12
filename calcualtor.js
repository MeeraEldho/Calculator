let currentNumber = '';
let previousNumber = '';
let operator = '';

function appendNumber(number) {
  if (number === '.' && currentNumber.includes('.')) return; // Prevent multiple decimals
  currentNumber += number;
  updateDisplay();
}

function updateDisplay() {
  const display = document.getElementById('display');
  display.value = currentNumber || '0';
}

function chooseOperator(op) {
  if (currentNumber === '') return;
  if (previousNumber !== '') {
    calculate();
  }
  operator = op;
  previousNumber = currentNumber;
  currentNumber = '';
}

function calculate() {
  if (currentNumber === '' || previousNumber === '') return;

  const prev = parseFloat(previousNumber);
  const curr = parseFloat(currentNumber);
  let result;

  switch (operator) {
    case '+':
      result = prev + curr;
      break;
    case '-':
      result = prev - curr;
      break;
    case '*':
      result = prev * curr;
      break;
    case '/':
      result = prev / curr;
      break;
    default:
      return;
  }

  currentNumber = result.toString();
  operator = '';
  previousNumber = '';
  updateDisplay();
}

function clearDisplay() {
  currentNumber = '';
  previousNumber = '';
  operator = '';
  updateDisplay();
}

function deleteLast() {
  currentNumber = currentNumber.slice(0, -1);
  updateDisplay();
}

// Keyboard support
document.addEventListener('keydown', (event) => {
  const key = event.key;
  if (!isNaN(key) || key === '.') {
    appendNumber(key);
  } else if (key === '+' || key === '-' || key === '*' || key === '/') {
    chooseOperator(key);
  } else if (key === 'Enter' || key === '=') {
    calculate();
  } else if (key === 'Backspace') {
    deleteLast();
  } else if (key === 'Escape') {
    clearDisplay();
  }
});


