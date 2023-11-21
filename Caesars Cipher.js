function rot13(str) {
    let result = [];
    let rot = {
      a: "n",
      b: "o",
      c: "p",
      d: "q",
      e: "r",
      f: "s",
      g: "t",
      h: "u",
      i: "v",
      j: "w",
      k: "x",
      l: "y",
      m: "z",
      n: "a",
      o: "b",
      p: "c",
      q: "d",
      r: "e",
      s: "f",
      t: "g",
      u: "h",
      v: "i",
      w: "j",
      x: "k",
      y: "l",
      z: "m",
       }
       String.prototype.replaceAt = function(index, replacement) {
      return this.substring(0, index) + replacement + this.substring(index + replacement.length);
  }
      let r = str.toLowerCase();
      for (let i = 0; i < r.length; i++) {
        if (rot[`${r[i]}`] != undefined) {
         r =  r.replaceAt(i, rot[`${r[i]}`])
        }
       //str.replace(r[i], rot[`${r[i]}`]);
        
      }
      return r.toUpperCase();
      
  }