function palindrome(str) {
    let str3 = [];
    let str2 = str.replace(/[^a-z0-9]/gi, "").toLowerCase();
    for (let i = str2.length - 1; i >= 0; i--) {
      str3.push(str2[i]);
    }
    if (str3.join("") === str2) {
      return true;
    }
    else {
      return false;
    }
  }
  console.log(palindrome("nope"))