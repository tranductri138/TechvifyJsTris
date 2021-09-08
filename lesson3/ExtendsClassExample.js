// example
class DateFormatter extends Date {
  getFormattedDate() {
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    return `${this.getDate()}-${months[this.getMonth()]}-${this.getFullYear()}`;
  }
}

console.log(new DateFormatter("August 19, 1975 23:15:30").getFormattedDate());
// expected output: "19-Aug-1975"

// Ly thuyet 1 chut
// this is syntax
// class ChildClass extends ParentClass { ... }
// Description
// the extends is key word can be used to subclass
// if .prototype must be an Object or null not undefine

//expression function

const sum1 = function (width, height) {
  return width + height;
};

console.log(sum1(3, 3));
// dung cx cha khac j func declare nhu bth :v
// this is arraw function no giong vs expression func thoi :v nhung ma no ko co chu function
// nua nhin no ngan hon
const sum = (a, b) => {
  console.log(a + b);
};
sum(3, 4);
