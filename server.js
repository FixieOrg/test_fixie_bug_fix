const morgan = require('morgan');
const helmet = require('helmet');
...
app.use(helmet());
app.use(morgan('combined'));