let password = "asdkfjlpasswor";

let checkPw = function (password) {
   let pw = password.toLowerCase();
   if (pw.length < 9 || pw.includes('password'.toLowerCase())) {
      console.log('This password is not valid')
   } else {
      console.log('This is a valid password');
   }
};

checkPw(password);