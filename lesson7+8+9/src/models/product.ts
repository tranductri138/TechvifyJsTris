class Product11 {
    private id: number;
    private name: string
    private price: number;
    private description: string
    constructor(
        id: number,
        name: string,
        price: number,
        description: string
    ) {
        this.id = id
        this.name = name
        this.price = price
        this.description = description
    }
    public getId(): number {
        return this.id;
    }

    public setId(id: number): void {
        this.id = id;
    }

    public getName(): string {
        return this.name;
    }

    public setName(name: string): void {
        this.name = name;
    }

    public getPrice(): number {
        return this.price;
    }

    public setPrice(price: number): void {
        this.price = price;
    }

    public getDescription(): string {
        return this.description;
    }

    public setDescription(description: string): void {
        this.description = description;
    }
}