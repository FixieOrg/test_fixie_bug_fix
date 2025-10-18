app.post('/calculate', (req, res, next) => {
    try {
        const { operation, num1, num2 } = req.body;
        if (!operation || num1 === undefined || num2 === undefined) {
            return res.status(400).json({ error: 'Missing operation or operands' });
        }
        const n1 = Number(num1);
        const n2 = Number(num2);
        if (isNaN(n1) || isNaN(n2)) {
            return res.status(400).json({ error: 'Operands must be numbers' });
        }
        const allowedOps = ['add', 'subtract', 'multiply', 'divide'];
        if (!allowedOps.includes(operation)) {
            return res.status(400).json({ error: 'Invalid operation' });
        }
        let result;
        switch(operation) {
            case 'add':
                result = n1 + n2;
                break;
            case 'subtract':
                result = n1 - n2;
                break;
            case 'multiply':
                result = n1 * n2;
                break;
            case 'divide':
                if (n2 === 0) {
                    return res.status(400).json({ error: 'Division by zero' });
                }
                result = n1 / n2;
                break;
        }
        res.json({ result });
    } catch (err) {
        next(err);
    }
});