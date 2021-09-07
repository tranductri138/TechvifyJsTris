class Student {
  constructor(name, age, teacher) {
    this.name = name;
    this.age = age;
    this.teacher = teacher;
  }

  get studentName() {
    return this.name;
  }
  get studentAge() {
    return this.age;
  }
  get studentTeacher() {
    return this.teacher;
  }
  set studentName(name) {
    this.name = name;
  }
  set studentAge(age) {
    this.age = age;
  }
  set studentTeacher(teacher) {
    this.teacher = teacher;
  }

  displayInfor() {
    console.log(`name ${this.name}`);
    console.log(`age ${this.age}`);
    console.log(`teacher ${this.teacher}`);
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
let roomStudent = [
  new Student("Lam1", 22, "Lisa"),
  new Student("Lam2", 22, "Lisa"),
  new Student("Lam3", 22, "Lisa"),
  new Student("Lam4", 22, "Monica"),
  new Student("Lam5", 22, "Monica"),
  new Student("Lam6", 22, "Monica"),
  new Student("Lam7", 22, "Monica"),
  new Student("Lam8", 22),
  new Student("Lam9", 22),
  new Student("Lam10", 22),
];
// tạo teacher
let roomTeacher = [
  new ClassRoom("Lisa", "ClassEnglish", []),
  new ClassRoom("Monica", "ClassMath", []),
];
// check student va in infor
function checkStudentNoClass() {
  for (let i = 0; i < roomTeacher.length; i++) {
    if (roomTeacher[i].teacher === undefined) {
      roomTeacher[i].displayInfor();
    }
  }
}

// b1 push vao lop lisa , Monica
// b2 kiem tra lop con thieu
// b3 sau roi day 3 thang con lai
function joinClass() {
  for (let i = 0; i < roomStudent.length; i++) {
    let classLisa = roomTeacher[0].students;
    let classMonica = roomTeacher[1].students;
    let teacherName = roomStudent[i].teacher;
    if (
      (teacherName === "Lisa" || teacherName === undefined) &&
      classLisa.length < 5
    ) {
      classLisa.push(roomStudent[i]);
      //   console.log("da day vao lisa");
    } else if (
      (teacherName === "Monica" || teacherName === undefined) &&
      classMonica.length < 5
    ) {
      classMonica.push(roomStudent[i]);
      //   console.log("da day vao monica");
    } else {
      console.log("2 class fulled");
    }
  }
}
joinClass();
checkStudentNoClass();
