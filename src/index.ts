import app from './app';
import logger from './utils/logger';

const port = 5000;
app.listen(port, () => {
  logger.info(`Listening: http://localhost:${port}`);
});