class Student {
  constructor(name, age, className) {
    this.name = name;
    this.age = age;
    this.className = className;
  }

  get studentName() {
    return this.name;
  }
  get studentAge() {
    return this.age;
  }
  get studentTeacher() {
    return this.className;
  }
  set studentName(name) {
    this.name = name;
  }
  set studentAge(age) {
    this.age = age;
  }
  set studentTeacher(teacher) {
    this.className = teacher;
  }
}

class ClassRoom {
  constructor(teacherName, className, students) {
    this.teacherName = teacherName;
    this.className = className;
    this.students = students;
  }

  get teacherNameRoom() {
    return this.teacherName;
  }
  get nameClassRoom() {
    return this.className;
  }
  set nameClassRoom(name) {
    this.nameClass = name;
  }
  set nameTeacherRoom(name) {
    this.teacherName = name;
  }
  displayInfor() {
    console.log(`teacher name ${this.teacherName}`);
    console.log(`class name ${this.className}`);
    console.log(`stundents  ${JSON.stringify(this.students)} `);
    // phân tích array thành các chuỗi
    console.log("----------------------");
  }
}

// tạo học sinh
let students = [
  new Student("Lam1", 23, "ClassEnglish"),
  new Student("Lam2", 23, "ClassEnglish"),
  new Student("Lam3", 23, "ClassEnglish"),
  new Student("Lam4", 23, "ClassMath"),
  new Student("Lam5", 23, "ClassMath"),
  new Student("Lam6", 23, "ClassMath"),
  new Student("Lam7", 23, "ClassMath"),
  new Student("Lam8", 23),
  new Student("Lam9", 23),
  new Student("Lam10", 23),
];
// tạo teacher
let roomClass = [
  new ClassRoom("Lisa", "ClassEnglish", [
    students[0],
    students[1],
    students[2],
  ]),
  new ClassRoom("Monica", "ClassMath", [
    students[3],
    students[4],
    students[5],
    students[6],
  ]),
];
// check student va in infor
function checkStudentNoClass() {
  for (let i = 0; i < roomClass.length; i++) {
    if (roomClass[i].teacher === undefined) {
      roomClass[i].displayInfor();
    }
  }
}

// b1 push vao lop lisa , Monica
// b2 kiem tra lop con thieu
// b3 sau roi day 3 thang con lai
function joinClass(roomC) {
  for (let i = 0; i < students.length; i++) {
    if (students[i].className === undefined && roomC.students.length < 5) {
      roomC.students.push(students[i]);
    }
  }
}
joinClass(roomClass[0]);
joinClass(roomClass[1]);
checkStudentNoClass();
