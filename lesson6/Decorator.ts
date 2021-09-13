class DecoratorByTris {
    private act: string;
    private name: string;

    constructor(act: string, name: string) {
        this.act = act
        this.name = name
    }
    public getName(): string {
        return this.name;
    }

    public setName(name: string): void {
        this.name = name;
    }

    public getAct(): string {
        return this.act;
    }

    public setAct(act: string): void {
        this.act = act;
    }
}

// decorator : là cú pháp khai báo dặc biệt đi kèm với khai
// khai báo class , method , accesor , property or parameter
// decorator có nhiệm vụ thay đổi or bổ sung cho đói tượng sử dụng
// được decorator
// Syntax @expression
// expresion : trỏ tới 1 func sẽ được gọi lúc run-time
