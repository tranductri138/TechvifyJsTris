class ProductDto {
    private name: string
    private price: number;
    private description: string

    constructor(name: string, price: number, description: string) {
        this.name = name
        this.price = price
        this.description = description
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