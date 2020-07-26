function checkCashRegister(price, cash, cid) {
  let change = cash - price;
  change = change.toPrecision(2);

  let changeArr = [];
  const dime = 0.10;
  const quarter = 0.25;

  if(change < 0){
    console.log("Dinheiro insuficiente");
    return
  } else if( change == 0) {
    console.log("Não há troco");
    return;
  } else {
    if(change < 1){
      for(let i = 3; i >= 0; i--){
        if(change >= quarter){
          if(change % quarter == 0 && change <= cid[i][1]) {
            changeArr.push(["QUARTER", change]);
            return {status: "OPEN", change: changeArr}
          }
          else if (change % quarter == 0 && change > cid[i][1] && cid[i][1] != 0){
            changeArr.push(["QUARTER", cid[i][1]]);
            change = change - cid[i][1];
          }
          else if (change < cid[i][1]) {
            const newChange = (parseInt(change/quarter) * quarter).toPrecision(2);
            changeArr.push(["QUARTER", newChange]);
            change = (change - newChange).toPrecision(2);
          }
          else {
            changeArr.push(["QUARTER", cid[i][1]]);
            change = change - cid[i][1];
          }
        }
        else if(change >= dime) {
          if(change % dime == 0 && change <= cid[i][1]) {
            changeArr.push(["DIME", change]);
            return {status: "OPEN", change: changeArr}
          }
          else if(change % dime == 0 && change > cid[i][1] && cid[i][1] != 0) {
            changeArr.push(["DIME", cid[i][1]]);
            change = change - cid[i][1];
          }
          else if( change < cid[i][1]) {
            const newChange = parseInt(change/dime) * dime;
            changeArr.push(["DIME", newChange]);
            change = change - newChange;
          }
          else {
            changeArr.push(["DIME", cid[i][1]]);
            change = change - cid[i][1];
          }
        }
      }
      return {status: "OPEN", change: changeArr}

    }else{
    }
  }
}

checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);
