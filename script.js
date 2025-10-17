if (shouldResetDisplay) {
    display.value = '';
    shouldResetDisplay = false;
}
// Now append
display.value += value;
currentInput = display.value;