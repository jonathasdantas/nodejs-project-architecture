const http = require('http');
const app = require('./app');

/**
 * Server config.
 */
const port = process.env.PORT || 8000;
app.listen(port);

/**
 * Creates the server thru http.
 */
http.createServer(app);
