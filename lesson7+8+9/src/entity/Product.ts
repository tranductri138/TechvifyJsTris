import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Product {

    @PrimaryGeneratedColumn()
    id: number;

    @Column("varchar", { length: 25 })
    name: string;

    @Column()
    size: number;

    @Column()
    price: number;

    @Column()
    total: number;

    @Column()
    status: string;

    @Column()
    description: string;

    @Column()
    create_at: Date;

    @Column()
    modifier: Date;

}