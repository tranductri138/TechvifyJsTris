const errByTris = () => {
  try {
    throw new Error("trisdepzai");
  } catch (err) {
    console.log("hihi i am ", err.message);
  } finally {
    console.log("finally");
  }
};

// errByTris();

const reverseString = (s) => {
  try {
    console.log("is here");
    s = s.split("").reverse().join("");
  } catch (err) {
    console.log(err.message);
  } finally {
    console.log(s);
    // console.log("finally");
  }
};

reverseString("1234");
console.log("--------------------");
reverseString(1234);
