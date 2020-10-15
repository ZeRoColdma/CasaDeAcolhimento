import { Router } from 'express';

import uploadConfig from '../config/upload';
import OrpharnageController from '../controllers/OrphanagesController';

import multer from 'multer';

const routes = Router();
const upload = multer(uploadConfig);

routes.post('/orphanages', upload.array('images'), OrpharnageController.create);

routes.get('/orphanages/:id', OrpharnageController.show);
routes.get('/orphanages', OrpharnageController.index);

export default routes;
