class Student {
  constructor(name, age, className) {
    this.name = name;
    this.age = age;
    this.className = className;
  }
  // joinClassOfStudent(className) {
  //   this.className = className;
  // }
}

class ClassRoom {
  constructor(teacherName, className, students) {
    this.teacherName = teacherName;
    this.className = className;
    this.students = students;
  }
  display() {
    console.log(this.teacherName);
    console.log(this.className);
    console.log(this.students);
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
  new Student("Lam11", 23),
  new Student("Lam12", 23),
  new Student("Lam13", 23),
  new Student("Lam14", 23),
  new Student("Lam15", 23),
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
  new ClassRoom("Tris", "ClassHistory", []),
];
// check student va in infor
function showInfo() {
  for (let i = 0; i < roomClass.length; i++) {
    roomClass[i].display();
    console.log("---------------------------------");
  }
}

// b1 push vao lop lisa , Monica
// b2 kiem tra lop con thieu
// b3 sau roi day 3 thang con lai
function joinClass(room) {
  for (let i = 0; i < students.length; i++) {
    if (students[i].className === undefined && room.students.length < 5) {
      room.students.push(students[i]);
      students[i].className = room.className;
      // students[i].joinClassOfStudent(roomClassName)
    }
  }
}
// joinClass(roomClass[0]);
// joinClass(roomClass[1]);
// joinClass(roomClass[2]);
function joinAuto() {
  for (let i = 0; i < roomClass.length; i++) {
    joinClass(roomClass[i]);
  }
}
joinAuto();
showInfo();
