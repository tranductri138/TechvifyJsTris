import { NextFunction, Request, Response } from 'express';
import { Product } from '../models/product';


const arrProduct: Product[] = []
const serverHealthCheck = (req: Request, res: Response, next: NextFunction) => {
    return res.status(200).json({
        message: 'pong'
    });
};

function autoID(): number {
    let id = arrProduct.length + 1
    console.log(arrProduct.length)
    console.log(id)
    return id
}
// autoID()
const createProduct = (req: Request, res: Response) => {
    let id: number = autoID();
    let name: string = req.body.name
    let price: number = req.body.price
    let description: string = req.body.description

    if (req.method == "POST") {
        let product = new Product(id, name, price, description)
        arrProduct.push(product)
        return res.status(200).json(product)
    } else {
        return res.status(405).json({
            message: "Method not allowed",
        })
    }
}

const searchProduct = (req: Request, res: Response) => {
    let name = req.query.name
    arrProduct.filter((item) => {
        if (name === item.getName()) {
            return res.status(200).json(item)
        } else {
            return res.status(400).json({
                message: "Bad request : This name is null"
            })
        }
    })
}

export default { serverHealthCheck, createProduct, searchProduct };