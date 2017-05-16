import express from 'express';
import config from './config.js';
import serverContent from './renderers/Server';

const app = express();
app.set('view engine', 'ejs');

app.use(express.static('public'));

app.get('/', (req, res) => {
  const initialContent = serverContent();
  res.render('index', { initialContent });
});

app.listen(config.port, function listenHandler() {
  console.info(`Running on port ${config.port}`);
});
