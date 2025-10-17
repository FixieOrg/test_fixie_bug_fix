let currentInput = '';
let operator = '';
let previousInput = '';
let shouldResetDisplay = false;

// BUG: Global variable that should be scoped
let calculationHistory = [];

function appendToDisplay(value) {
    const display = document.getElementById('display');
    
    // BUG: No validation for multiple decimal points
    if (value === '.' && currentInput.includes('.')) {
        return; // This should prevent multiple decimals but logic is flawed
    }
    
    // BUG: No limit on input length - can cause overflow
    if (currentInput.length > 10) {
        return;
    }
    
    // BUG: Should reset display when starting new calculation
    if (shouldResetDisplay) {
        display.value = '';
        shouldResetDisplay = false;
    }
    
    // BUG: String concatenation instead of proper number handling
    display.value += value;
    currentInput = display.value;
}

function clearDisplay() {
    // BUG: Function name mismatch - HTML calls clearDisplay() but this is clear()
    const display = document.getElementById('display');
    display.value = '';
    currentInput = '';
    operator = '';
    previousInput = '';
    document.getElementById('result').textContent = '';
}

function deleteLast() {
    const display = document.getElementById('display');
    // BUG: No check if display is empty - will cause issues
    display.value = display.value.slice(0, -1);
    currentInput = display.value;
}

function calculate() {
    const display = document.getElementById('display');
    const resultDiv = document.getElementById('result');
    
    // BUG: No validation if display is empty or contains invalid input
    if (!display.value) {
        resultDiv.textContent = 'Error: No input';
        return;
    }
    
    // BUG: Using eval() which is dangerous and can execute arbitrary code
    try {
        const result = eval(display.value);
        
        // BUG: No check for NaN or Infinity results
        if (isNaN(result)) {
            resultDiv.textContent = 'Error: Invalid calculation';
            return;
        }
        
        // BUG: No rounding for floating point precision issues
        resultDiv.textContent = `Result: ${result}`;
        
        // BUG: Not storing calculation history properly
        calculationHistory.push({
            expression: display.value,
            result: result,
            timestamp: new Date()
        });
        
        // BUG: Not resetting for next calculation
        shouldResetDisplay = true;
        
    } catch (error) {
        // BUG: Generic error handling - doesn't provide useful feedback
        resultDiv.textContent = 'Error occurred';
        console.error('Calculation error:', error);
    }
}

// BUG: Missing keyboard event listeners for better UX
// BUG: No input validation for mathematical expressions
// BUG: No support for keyboard shortcuts (Enter for equals, Escape for clear)

// BUG: Global function that should be in a module or class
function showHistory() {
    console.log('Calculation History:', calculationHistory);
    // BUG: No UI to display history to user
}

// BUG: Memory leak - no cleanup of event listeners or global variables
