class Student {
  constructor(email, name) {
    this.email = email;
    this.name = name;
    this.score = 0;
  }
  login() {
    console.log(this.email, "just logged in");
    return this;
  }
  logout() {
    console.log(this.email, "just logged out");
    return this;
  }
  updateScore() {
    this.score++;
    console.log(this.email, "score is now", this.score);
    return this;
  }
}

class Admin extends Student {
  deleteStudent(student) {
    students = students.filter((s) => {
      return s.email != student.email;
    });
  }
}

let student1 = new Student("tris1@depzai", "tris1");
let student2 = new Student("tris2@depzai", "tris2");
let admin = new Admin("tris3@depzai", "tris3");

let students = [student1, student2, admin];

console.log(student1.updateScore());
// admin.deleteStudent(student1);
console.log("🚀 ~ file: ExtendClass.js ~ line 35 ~ students", students);
