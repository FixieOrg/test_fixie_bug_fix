const { operation, num1, num2 } = req.body;
if (!operation || typeof operation !== 'string') {
  return res.status(400).json({ error: 'Operation is required and must be a string' });
}
const a = Number(num1);
const b = Number(num2);
if (isNaN(a) || isNaN(b)) {
  return res.status(400).json({ error: 'num1 and num2 must be numbers' });
}