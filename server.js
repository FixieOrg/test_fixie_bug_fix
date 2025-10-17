app.post('/calculate', (req, res) => {
    const { operation, num1, num2 } = req.body;
    if (!operation || typeof operation !== 'string') {
        return res.status(400).json({ error: 'Operation must be a string' });
    }
    const a = Number(num1);
    const b = Number(num2);
    if (isNaN(a) || isNaN(b)) {
        return res.status(400).json({ error: 'num1 and num2 must be numbers' });
    }
    let result;
    switch (operation) {
        case 'add':
            result = a + b;
            break;
        case 'subtract':
            result = a - b;
            break;
        case 'multiply':
            result = a * b;
            break;
        case 'divide':
            if (b === 0) {
                return res.status(400).json({ error: 'Division by zero is not allowed' });
            }
            result = a / b;
            break;
        default:
            return res.status(400).json({ error: 'Invalid operation' });
    }
    return res.json({ result });
});