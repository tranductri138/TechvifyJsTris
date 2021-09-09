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
const arrEmailHasBeen = [];

const sendEmail = (email) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(console.log(`${email} has been sent`));
    }, 2000);
  });
};

async function sendEmailFor10User() {
  for (let i = 0; i < arrEmail.length; i++) {
    sendEmail(arrEmail[i]);
    arrEmailHasBeen.push(arrEmail[i]);
  }
  //   let a = await arrEmailHasBeen;
  let rs = await Promise.all(arrEmailHasBeen);
  // in succuces
  console.log("All email send success !");
//   console.log(rs);
  return rs;
}
sendEmailFor10User();
