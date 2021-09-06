const student = {
  firstName: "Tran",
  lastName: "Duc Tri",
  age: 23,
};
const student1 = {
  firstName: "Tran",
  lastName: "Duc Tri",
  age: 23,
  phone: "09871212412",
};
const student4 = {
  firstName: "Tran",
  lastName: "Duc Tri",
  age: 23,
  phone: "09871212412",
  fullName : function(){
      return firstName + " " + lastName
  },
  class : [
      {
          name : "A1"
      },studentClass,studentClass1
  ]

};
const studentClass1 = {
    name : "A2", 
    teacher : "GiaoVien2"
}
const studentClass = {
    name : "A1", 
    teacher : "GiaoVien1"
}
const student3 = {};

displayStudent(student);
console.log("   --------------------------------");
displayStudent(student1);
console.log("   --------------------------------");
displayStudent(student4);
function displayStudent(student) {
  console.log(
    "🚀 ~ file: ls1Object.js ~ line 6 ~ student",
    student ? student.firstName : "NA"
  );
  console.log("🚀 ~ file: ls1Object.js ~ line 6 ~ student", student.lastName);
  console.log("🚀 ~ file: ls1Object.js ~ line 6 ~ student", student.age);
  console.log(
    "🚀 ~ file: ls1Object.js ~ line 6 ~ student",
    student.phone || "NA"
  );
}


const student = {
    firstName: "Nguyen",
    latstName: " Van A",
    age: 20,
}