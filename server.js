const express = require('express');
const cors = require('cors');
const rateLimit = require('express-rate-limit');
const app = express();
const PORT = process.env.PORT || 3000;

// Body parser middleware
app.use(express.json());

// CORS
app.use(cors());

// Simple rate limiting
app.use(rateLimit({ windowMs: 15 * 60 * 1000, max: 100 }));

// Structured logging middleware
app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.originalUrl}`);
  next();
});

app.post('/calculate', (req, res) => {
  const { operation, num1, num2 } = req.body;

  // Input validation
  if (!operation || typeof operation !== 'string') {
    return res.status(400).json({ error: 'Operation is required and must be a string' });
  }
  const parsedNum1 = Number(num1);
  const parsedNum2 = Number(num2);
  if (isNaN(parsedNum1) || isNaN(parsedNum2)) {
    return res.status(400).json({ error: 'num1 and num2 must be numbers' });
  }

  let result;
  switch (operation) {
    case 'add':
      result = parsedNum1 + parsedNum2;
      break;
    case 'subtract':
      result = parsedNum1 - parsedNum2;
      break;
    case 'multiply':
      result = parsedNum1 * parsedNum2;
      break;
    case 'divide':
      if (parsedNum2 === 0) {
        return res.status(400).json({ error: 'Division by zero is not allowed' });
      }
      result = parsedNum1 / parsedNum2;
      break;
    default:
      return res.status(400).json({ error: 'Invalid operation' });
  }

  res.json({ result });
});

// Global error handling middleware
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ error: 'Internal Server Error' });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Access the calculator at http://localhost:${PORT}`);
});