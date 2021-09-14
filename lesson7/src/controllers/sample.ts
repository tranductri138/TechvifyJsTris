import { NextFunction, Request, Response } from 'express';
import { Product } from '../models/product';


let product1 = new Product(1, "laptop", 100, "this is laptop")
let product2 = new Product(2, "cup", 100, "this is laptop")
let product3 = new Product(3, "chair", 100, "this is laptop")
let product4 = new Product(4, "keyboard", 100, "this is laptop")
let product5 = new Product(5, "mouse", 100, "this is laptop")
const arrProduct: Product[] = [product1, product2, product3, product4, product5]
const serverHealthCheck = (req: Request, res: Response, next: NextFunction) => {
    return res.status(200).json({
        message: 'pong'
    });
};

function autoID(): number {
    let id = arrProduct.length + 1
    // console.log(arrProduct.length)
    // console.log(id)
    return id
}
// autoID()
const createProduct = (req: Request, res: Response) => {
    let id: number = autoID();
    let name: string = req.body.name
    let price: number = req.body.price
    let description: string = req.body.description

    if (name != null) {
        let product = new Product(id, name, price, description)
        arrProduct.push(product)
        return res.status(200).json(product)
    } else {
        return res.status(405).json({
            message: "Name is null !!",
        })
    }
}

const searchProduct = (req: Request, res: Response) => {
    let name = <string>req.query.name
    let a = arrProduct.filter((item) => {
        if (item.getName() == name) {
            return item
        }
    })
    res.status(200).json(a)
}

export default { serverHealthCheck, createProduct, searchProduct };