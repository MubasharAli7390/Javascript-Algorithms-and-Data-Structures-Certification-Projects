function convertToRoman(num) {
    let result = "";
   let an = {
     M: 1000,
     CM: 900,
     D: 500,
     CD: 400,
     C: 100,
     XC: 90,
     L: 50,
     XL: 40,
     X: 10,
     IX: 9,
     V: 5,
     IV: 4,
     I: 1,
   }
   for (let arabicNumeral in an) {
     while (an[arabicNumeral] <= num) {
       result = result + arabicNumeral;
       num = num - an[arabicNumeral];
     }
  
   }
   return result
   
  }
  
  console.log(convertToRoman(29));
  