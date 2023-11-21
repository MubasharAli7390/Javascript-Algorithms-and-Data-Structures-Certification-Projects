function checkCashRegister(price, cash, cid) {
    let change = cash * 100 - price * 100;
    change = Math.round(change);
    let cid_sum = 0;
    let objectReturn = {status: "", change: undefined}
    for (let i = 0; i < cid.length - 1; i++) {
         cid_sum += cid[i][1] * 100;
    };
    if (change > cid_sum) {
     objectReturn.status = "INSUFFICIENT_FUNDS";
     objectReturn.change = [];
    }
    else if (cid_sum === change) {
       objectReturn.status = "CLOSED";
       objectReturn.change = cid;
    } else if (change < cid_sum) {
      cid.reverse();
      let c = {
        "ONE HUNDRED": 10000,
        "TWENTY": 2000,
        "TEN": 1000,
        "FIVE": 500,
        "ONE": 100,
        "QUARTER": 25,
        "DIME": 10,
        "NICKEL": 5,
        "PENNY": 1
      };
      let result = [];
      for (let p of cid) {
        let h = [p[0], 0]
        p[1] = p[1] * 100;
        while (change >= c[p[0]] && p[1] > 0) {
          change -= c[p[0]];
          p[1] -= c[p[0]];
          h[1] += c[p[0]] / 100;
          
        }
        if (h[1] > 0) {
          result.push(h);
          
        }
        objectReturn.status = "OPEN";
         objectReturn.change = result;
      }
      if (change > 0) {
         objectReturn.status = "INSUFFICIENT_FUNDS";
         objectReturn.change = [];
      }
     
    }
    return objectReturn;
    
  
  
    
  }
  
  
  
  console.log(checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));