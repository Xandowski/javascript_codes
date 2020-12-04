function checkCashRegister(price, cash, cidArr) {
  let change = (cash - price).toFixed(2);
  const changeArr = [];
  const coinsValue = [0.25, 0.10, 0.05, 0.01];

  const coins = cidArr.filter((item) => {
    return item[0] === 'PENNY' || 
           item[0] === 'NICKEL' ||
           item[0] === 'DIME' ||
           item[0] === 'QUARTER'
  }).reverse();


  const cid = cidArr.reduce((total, item) => {
    return total += item[1];
  }, 0).toFixed(2)

  const cidCoins = coins.reduce((total, item) => {
    return total += item[1];
  }, 0)

  if (change <= 0) {
    return 'Não há troco';
  }

  if (cid < change && cidCoins < change) {
    return {status: "INSUFFICIENT_FUNDS", change: []};
  }

  if (change < 1) {
    let i = 0; 
    while(i<coins.length) {
      if(coins[i][1] === 0) {
        i++;
      }
      else if( change % coinsValue[i] === 0 && coins[i][1] >= change) {
        coins[i][1] = coins[i][1] - change;
        changeArr.push([coins[i][0], Number(change)]);
        i = coins.length;
        return {status: "OPEN", change: changeArr}
      }
      else if(change % coinsValue[i] === 0 && coins[i][1] < change) {
        coins[i][1] = 0;
        changeArr.push([coins[i][0], Number(chage - coins[i][1])]);
        change = chage - coins[i][1];
        i++;
      }
      else if( change % coinsValue[i] !== 0 && coins[i][1] < change) {
        let newChange = change - ((change % coinsValue[i]) * 100);
        coins[i][1] = newChange - coins[i][1];
        changeArr.push([coins[i][0], Number(coins[i][1])]);
        change = (change % coinsValue[i]) * 100;
        i++;
      }
      else {
        let newChange = change - ((change % coinsValue[i]) * 100);
        coins[i][1] = coins[i][1] - newChange;
        changeArr.push([coins[i][0], Number(newChange)]);
        change = (change % coinsValue[i]) * 100;
        i++;
      }
    }
  }

}


console.log(checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));
