switch(operation) {
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