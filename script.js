function deleteLast() {
    const display = document.getElementById('display');
    if (!display.value) return;
    display.value = display.value.slice(0, -1);
    currentInput = display.value;
}