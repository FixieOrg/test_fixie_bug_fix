app.use((req, res, next) => {
  console.log(`${req.method} ${req.originalUrl}`);
  next();
});
