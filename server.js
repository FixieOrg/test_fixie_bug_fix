const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
app.use(helmet());
app.use(cors({ origin: 'https://example.com' }));
const limiter = rateLimit({ windowMs: 15 * 60 * 1000, max: 100 });
app.use(limiter);