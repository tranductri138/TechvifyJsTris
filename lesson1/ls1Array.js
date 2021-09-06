let numberArr = [1, 5, 4, 3, 2, 6];
// numberArr.push(7);
for (let i = 0; i < numberArr.length; i++) {
  //   console.log(numberArr[i]);
}

function bubblesortV1(numberArr) {
  for (let i = 0; i < numberArr.length; i++) {
    for (let j = i + 1; j < numberArr.length; j++) {
      if (numberArr[i] > numberArr[j + 1]) {
        let temp = numberArr[j];
        numberArr[j] = numberArr[j + 1];
        numberArr[j + 1] = temp;
      }
    }
  }
  return numberArr;
}
// console.log(
//   "🚀 ~ file: ls1Array.js ~ line 8 ~ bubblesortV1 ~ bubblesortV1",
//   bubblesortV1(numberArr)
// );

function bublesortV2(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        [arr[i], arr[j]] = [arr[j], arr[i]];
      }
    }
  }
  return arr;
}
// console.log(
//   "🚀 ~ file: ls1Array.js ~ line 25 ~ bublesortV2 ~ bublesortV2",
//   bublesortV2(numberArr)
// );

function pushIsNotExist(arr, a) {
  if (arr.includes(a)) {
    return "Number is Exist in Array";
  } else {
    arr.push(a);
  }
  return arr;
}
// console.log(
//   "🚀 ~ file: ls1Array.js ~ line 40 ~ pushIsNotExist ~ pushIsNotExist",
//   pushIsNotExist(numberArr, 7)
// );

function pushIsNotExistV2(arr, a) {
  let isExist = false;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === a) {
      isExist = true;
      break;
    }
  }
  if (isExist) {
    return "Number is Exist in Array";
  } else {
    arr.push(a);
    return arr;
  }
}
// console.log(
//   "🚀 ~ file: ls1Array.js ~ line 53 ~ pushIsNotExistV2 ~ pushIsNotExistV2",
//   pushIsNotExistV2(numberArr, 7)
// );

let arr2 = [4, 10, 5, 4, 2, 10];

function uniqueElementInArr(arr) {
  const setArr2 = new Set(arr);
  return setArr2;
}
// console.log(
//   "🚀 ~ file: ls1Array.js ~ line 75 ~ uniqueElementInArr ~ uniqueElementInArr",
//   uniqueElementInArr(arr2)
// );
function uniqueElementInArrV2(A) {
  var result = -1;
  for (let i = 0; i < A.length; i++) {
    let count = 0;
    for (let j = i + 1; j < A.length; j++) {
      if (A[i] == A[j]) {
        count++;
      }
    }
    if (count == 1) {
      result = A[i];
      break;
    }
  }
  return result;
}
console.log(
  "🚀 ~ file: ls1Array.js ~ line 83 ~ uniqueElementInArrV2 ~ uniqueElementInArrV2",
  uniqueElementInArrV2([6, 4, 4, 6])
);
