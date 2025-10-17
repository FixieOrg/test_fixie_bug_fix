const { operation, num1, num2 } = req.body;
if (!operation || num1 === undefined || num2 === undefined) {
  return res.status(400).json({ error: 'Missing required fields' });
}
const a = Number(num1);
const b = Number(num2);
if (isNaN(a) || isNaN(b)) {
  return res.status(400).json({ error: 'num1 and num2 must be numbers' });
}