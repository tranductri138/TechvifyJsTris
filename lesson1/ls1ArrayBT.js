// const classA = {
//   nameClass: "LopTa",
// };
// const classB = {
//   nameClass: "LopToan",
// };
// const student1 = {
//   name: "a",
//   classS: classA,
// };
// const lopHoc = [
//   {
//     name: "a1",
//     classS: "classA",
//   },
//   {
//     name: "a2",
//     classS: "classA",
//   },
//   { name: "a3", classS: "classA" },
//   { name: "a4", classS: "classB" },
//   { name: "a5", classS: "classA" },
//   { name: "a6", classS: "classB" },
//   { name: "a7", classS: "classB" },
//   { name: "a8" },
//   { name: "a9" },
//   { name: "a10" },
// ];
// console.log("🚀 ~ file: ls1ArrayBT.js ~ line 29 ~ lopHoc", lopHoc)

const lopA = [
  {
    name: "a1",
  },
  {
    name: "a2",
  },
  {
    name: "a3",
  },
  {
    name: "a4",
  },
];
const lopB = [
  {
    name: "a5",
  },
  {
    name: "a6",
  },
  {
    name: "a7",
  },
];
const lopC = [{ name: "a8" }, { name: "a9" }, { name: "a10" }];
function pushStudent(lopa, lopb, a) {
  if (lopa.length < 5) {
    lopa.push(a);
  } else if (lopb.length < 5) {
    lopb.push(a);
  }
}

function display() {
  for (let i = 0; i < lopC.length; i++) {
    pushStudent(lopA, lopB, lopC[i]);
  }
  console.log(lopA);
  console.log(lopB);
}
display();
