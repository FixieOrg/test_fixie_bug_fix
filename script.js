function calculate() {
    const display = document.getElementById('display');
    const resultDiv = document.getElementById('result');
    if (!display.value) {
        resultDiv.textContent = 'Error: No input';
        return;
    }
    try {
        // Simple safe evaluator: only allow digits, operators, and parentheses
        if (!/^[-+*/0-9().\s]+$/.test(display.value)) {
            throw new Error('Invalid characters in expression');
        }
        const result = Function('return ' + display.value)();
        if (!isFinite(result)) {
            throw new Error('Result is not finite');
        }
        resultDiv.textContent = result;
        calculationHistory.push({expression: display.value, result});
    } catch (e) {
        console.error('Calculation error:', e);
        resultDiv.textContent = 'Error: ' + e.message;
    }
}