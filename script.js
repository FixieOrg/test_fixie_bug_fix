function clearDisplay() {
    const display = document.getElementById('display');
    display.value = '';
    currentInput = '';
    operator = '';
    previousInput = '';
    document.getElementById('result').textContent = '';
}