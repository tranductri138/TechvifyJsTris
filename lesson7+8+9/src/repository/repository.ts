import { EntityRepository, getConnection, Repository, getManager } from "typeorm";
import { Product } from "../entity/Product"


@EntityRepository()
export class ProductRepo extends Repository<Product> {
    const entityManager = getManager()
    let query = entityManager().query()
    findByName(name: string) {
        return this.getManager().query(`select * from product`)
    }
}