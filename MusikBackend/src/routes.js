import { Router } from 'express';

const routes = new Router();

routes.get('/test', function (req, res) {
  res.send('Hello World!');
});

export default routes;