// Generics là các thức lập trình tổng quát cho phép một obj hoạt động với nhiều
// kiểu dữ liệu khác nhau
//=============================
// Thuật ngữ "Generics " nghĩa là tham số hóa kiểu dữ liệu . Tham số hóa kiểu dữ liệu
// rất quan trọng vì nó cho phép chúng ta tạo ra và sử dụng một classs, interface  với
// nhiều kiểu dữ liệu khác nhau
//=============================
// Một class , interface hay một method mà thực hiện trên một kiểu tham số xác định
// thì sẽ gọi là generic

type Numberic = number | boolean;

let faction: Numberic;
faction = true;
faction = 5;
// faction = "tris" //this is bug


function trisSieudepzai(arg: number): number {
    let s: string = "func này không thể tái sử dụng"
    let s1: string = " được vì nó đã define giá trị "
    let s3: string = "đầu vào không có tính scale able"
    let s4: string = "nếu thay number = any không biết kdl return"
    let s5: string = "từ đó khó có thể phán đoán và xử lý các act tiếp theo "
    return arg
}


// Sử dụng Generic 
function trisSieudepzai2<T>(args: T): T {
    return args
}
// Generics là công cụ giúp tạo ra các components có thể tái sử dụng .
// Có thể tạo ra component có thể hoạt động trên nhiều loại dữ liệu khác nhau 
// thay vì 1 loại the only data
// Generic type là việc cho phép truyền type vào components
// func class or interface như là 1 tham số 


// keyword extends giới hạn phạm vi của type varialbe
function trisSieudepzai3<T extends Object>(arg: T): T {
    return arg
}
// default value kho ko xác định được kiểu type 
// khi không truyền vào giá trị cho type 
//thì giá trị của type là sitrng  (is T)
function trisSieudepzai4<T = string>(arg: T): T {
    return arg
}

// single type variable 
function trisSieudepzai5<T>(arg: T): T {
    return arg
}
// Multiple type variables 

function trisSieudepzai6<T, U>(arg: T, arg2: U) {
    // is bug obj contructor
    // link fix 
    https://stackoverflow.com/questions/35959372/property-assign-does-not-exist-on-type-objectconstructor
    return Object.assign(arg, arg2)
}

// Array method 
function trisSieudepzai7<T>(name: T[]): void {
    console.log(name.join(","))
}

// keyof thể hiện sự rằng buộc (Constrains)
// ở đây thì tham số truyền vào đầu tiên sẽ là key thuộc kiểu data T còn sau thì sẽ là kiểu data của key 
function getProperty<T, K extends keyof T>(obj: T, key: K) {
    return obj[key]
}

// Định nghĩa Generic interface 
interface IProcessor<T> {
    result: T;
    process(a: T, b: T): T;
}

// Generic interface như là 1 function
interface KeyValueProcessor<T, U> {
    (key: T, val: U): void
}

// class generic <> sau tên class 
class KeyValuePair<T, U> {
    private key: T
    private val: U

    setKV(key: T, val: U): void {
        this.key = key;
        this.val = val;
    }
    display(): void {
        console.log(`Key =${this.key}, val =${this.val}`);
    }
}