function telephoneCheck(str) {
    if (str.indexOf(")") < str.indexOf("(") || str.indexOf(")") > 0 && str.indexOf("(") < 0 || str.indexOf("(") == 0 && str.indexOf(")") == str.length-1) {
      return false;
    }
    let r = str.replace(/\s+|-|[()]|/g, "");
    console.log(r.length)
    let result;
    if (r.length > 11 || str.indexOf("-") === 0) {
      result = false;
    }
    else if (r.length === 11) {
      if (r[0] === "1") {
        result = true;
      }
      else {
        result = false;
      }
    }
    else if (r.length === 10 && str.indexOf(" ") === 2) {
      result = false;
    }
    else if (r.length === 10) {
      result = true;
    }
    else if (r.length <= 8) {
      result = false;
    }
    
   return result;
  }
  
  
  
  console.log(telephoneCheck("55 55-55-555-5")); //false