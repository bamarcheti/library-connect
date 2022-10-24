import { Router } from "express";

const routesHome = Router();

routesHome.get('/', (req, res) => {
    res.status(200).send({
      name: 'treinamento-renave-solid',
      version: '1.0.0',
    });
  });

export { routesHome };