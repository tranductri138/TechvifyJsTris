import express from 'express';
import controller from '../controllers/sample';

const router = express.Router();



router.get("/product", controller.searchProduct)

router.post("/product", controller.createProduct)


export = router;
