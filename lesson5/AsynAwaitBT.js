// viết các function như sau:

// - getBankAccount(bankNumber), bankNumber là 1 số tài khoản ngân hàng, return ra thông tin 1 acc như sau
// {
// amount : Số dư,
// accName: Tên tài khoản
// }
// - bankDebit(amount), amount là số tiền rút ra, return ra thông tin như sau:
// {
// status: success/fail (nếu số tiền đầu vào > số dư thì fail)
// amount : Số dư,
// accName: Tên tài khoản
// }

// mỗi function return kết quả ra sau 1s
// Không có 2 hành động rút tiền cùng 1 lúc

// Thực hiện các bước:
// 1. Kiểm tra tài khoản: in ra thông tin tk
// 2. Rút tiền: Khi rút thành công thì thông báo Success
// 3. Kiểm tra tài khoản: in ra thông tin tk

// Mục tiêu bài này: áp dụng async, await, promise, promise all

const randomBankNumber = () => {
  let a = Math.floor(Math.random() * 1000);
  if (a < 10) {
    a = `00${a.toString()}`;
  } else if (a < 100) {
    a = `0${a.toString()}`;
  } else {
    a = a.toString();
  }
  //   console.log(typeof a);
  return a;
};
// create Bank
const arrBank = [];
class BankAccount {
  constructor(accName, bankNumber) {
    this.amount = 500;
    this.accName = accName;
    this.bankNumer = bankNumber;
  }
  getBankAccount(bankNumber1) {
    return new Promise((resolve, reject) => {
      if (this.bankNumer === bankNumber1) {
        resolve(this);
      } else {
        reject("Bank Account does not exist");
      }
    });
  }
  bankDebit(num) {
    return new Promise((resolve, reject) => {
      if (this.amount >= num) {
        this.amount = this.amount - num;
        resolve("Success");
      } else {
        reject(`${this.accName} not enough money to make the transaction`);
      }
    });
  }
}

createAccB();
// console.log(a1);
payMoney();
console.log("This is infor account of Bank");
async function payMoney() {
  let a = problem(0);
  let b = problemErr(1);
  let c = problem(2);
  await Promise.all([a, b, c]);
  console.log("---------------------");
  let a1 = problemBankDebit(0, 300);
  let b1 = problemBankDebit(1, 600);
  let c1 = problemBankDebit(2, 400);
  await Promise.all([a1, b1, c1]);
  console.log("--------------------");
  let a2 = problem(0);
  let b2 = problem(1);
  let c2 = problem(2);
  await Promise.all([a2, b2, c2]);
}
function createAccB() {
  for (let i = 0; i < 10; i++) {
    let a = new BankAccount(`tris${i}`, i);
    arrBank.push(a);
  }
}
function problemErr(num) {
  arrBank[num]
    .getBankAccount(100)
    .then(function (bank) {
      console.log(bank);
    })
    .catch(function (err) {
      console.log(err);
    });
}
function problem(num) {
  arrBank[num]
    .getBankAccount(num)
    .then(function (bank) {
      console.log(bank);
    })
    .catch(function (err) {
      console.log(err);
    });
}
function problemBankDebit(num, num1) {
  arrBank[num]
    .bankDebit(num1)
    .then((o) => {
      console.log(o);
    })
    .catch(function (err) {
      console.log(err);
    });
}
