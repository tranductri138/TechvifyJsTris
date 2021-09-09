// 10 message để gửi đi (mỗi message gửi mất 2s)
// sau khi gửi thành công 10 messages thì thông báo đã gửi thành công bao nhiêu message

const arrEmail = [];
function creatEmail() {
  for (let i = 0; i < 10; i++) {
    arrEmail.push(`trisdepzai${i}@gmail.com`);
  }
}
creatEmail();
// console.log(arrEmail);

// arrEmail.push(123);
const arrEmailHasBeen = [];

const sendEmail = async (email) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(console.log(`${email} has been sent`));
      //   reject(console.log(err.message));
    }, 2000);
  });
};

async function sendEmailFor10User() {
  for (let i = 0; i < arrEmail.length; i++) {
    let email = sendEmail(arrEmail[i]);
    // sendEmail(arrEmail[i]);
    // arrEmailHasBeen.push(arrEmail[i]);
    arrEmailHasBeen.push(email);
  }
  //   let a = await arrEmailHasBeen;
  let rs = await Promise.all(arrEmailHasBeen);
  // in succuces
  console.log("All email send success !");
  //   console.log(rs);
  return rs;
}
sendEmailFor10User().catch(function (err) {
  console.log(err);
});
