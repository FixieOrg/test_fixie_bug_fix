const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000;

// BUG: Missing body parser middleware - this will cause req.body to be undefined
// app.use(express.json());

app.use(cors());

// BUG: Division by zero not handled - will return Infinity or NaN
app.post('/calculate', (req, res) => {
    const { operation, num1, num2 } = req.body;
    
    // BUG: No input validation - will crash if num1 or num2 are not numbers
    let result;
    
    switch(operation) {
        case 'add':
            // BUG: String concatenation instead of addition when inputs are strings
            result = num1 + num2;
            break;
        case 'subtract':
            result = num1 - num2;
            break;
        case 'multiply':
            result = num1 * num2;
            break;
        case 'divide':
            // BUG: No check for division by zero
            result = num1 / num2;
            break;
        default:
            // BUG: Missing return statement - code continues executing
            res.status(400).json({ error: 'Invalid operation' });
    }
    
    // BUG: This will always execute even for invalid operations due to missing return above
    res.json({ result: result });
});

// BUG: Missing error handling middleware
// BUG: Server doesn't handle uncaught exceptions

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    // BUG: Wrong port number in console log
    console.log(`Access the calculator at http://localhost:3001`);
});
