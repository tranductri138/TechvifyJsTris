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


// các độ ưu tiên của decorator 
// class decorator - ưu tiên 4
// method decorator - ưu tiên 2 
// accesor or property decorator - ưu tiên 3 
// parameter decorator - ưu tiên 1

// nếu decorator áp dụng cho constructor class 
// thì độ ưu tiên decorator như sau 
// 1 parameter
// 2 method
// 3 accessor or property decorator 
// 4 class decorator 


// Class decorator được khai báo ngay trước khai báo class
// Class decorator được áp dụng cho constructor của class
// và có thể được sử dụng để theo dõi , sửa đổi or thay thế 
// cho định nghĩa class 