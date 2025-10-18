app.post('/calculate', (req, res, next) => {
  try {
    const { operation, num1, num2 } = req.body;
    if (!operation || num1 === undefined || num2 === undefined) {
      return res.status(400).json({ error: 'Missing required fields' });
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
          return res.status(400).json({ error: 'Division by zero' });
        }
        result = a / b;
        break;
      default:
        return res.status(400).json({ error: 'Invalid operation' });
    }
    res.json({ result });
  } catch (err) {
    next(err);
  }
});
