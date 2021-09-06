let a = 10;
let b = "10";
let d = "2";
let c = b + d;
console.log("🚀 ~ file: ls1String.js ~ line 3 ~ c", c);
// cách cộng chuỗi
if (a === b) {
  console.log("true");
} else {
  console.log("false");
}
// so sanh giua == vs ===
// khac nhau la neu la === thi se them typeof

function caculate(num1, num2) {
  return num1 + num2;
}

console.log("hihi", caculate(2, 4));

// narow func
let total = (num1, num2) => {
  return num1 + num2;
};
console.log("🚀 ~ file: ls1String.js ~ line 26 ~ total ~ total", total(3, 2));

// func su dung 1 lan
