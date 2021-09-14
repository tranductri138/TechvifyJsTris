import express from 'express';
import controller from '../controllers/sample';

const router = express.Router();

router.get('/ping', controller.serverHealthCheck);

router.post("/product", controller.createProduct)

router.get("/product", controller.searchProduct)

export = router;
