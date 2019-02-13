import http from 'http';
import debug from 'debug';

import app from './app'; // The express app we just created

const port = parseInt(process.env.PORT, 10) || 4000;
app.set('port', port);

const logger = debug('log');
const server = http.createServer(app);
server.listen(port, () => {
  logger(`Find me on http://localhost:${port}`);
});
