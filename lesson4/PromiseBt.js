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

// line is bug to run reject in promise
arrEmail.push(123);
const arrEmailHasBeen = [];

let count = 0;
const sendEmail = async (email) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof email === "string") {
        count++;
        resolve(`${email} has been sent`);
      } else {
        reject(new Error(`This - ${email}  - is not an email`));
      }
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
  //   console.log("All email send success !");
  //   console.log(rs);
}
sendEmailFor10User()
  .then(function (emailHasbeen) {
    console.log(`successfully sent ${count} email`);
    console.log(emailHasbeen);
  })
  .catch(function (err) {
    console.log(`successfully sent ${count} email`);
    console.log(err.message);
  })
  .finally(function () {
    console.log("All email send success !");
    // console.log("Done");
  });
