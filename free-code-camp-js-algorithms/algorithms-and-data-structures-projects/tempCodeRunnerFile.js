 if (change < 1) {
    let i = 0; 
    while(i<coins.length) {
      if(coins[i][1] === 0) {
        i++;
      }
      else if( change % coinsValue[i] === 0 && coins[i][1] >= change) {
        coins[i][1] = coins[i][1] - change;
        changeArr.push([coins[i][0], change]);
        i = coins.length;
        return {status: "OPEN", change: changeArr}
      }
      else if(change % coinsValue[i] === 0 && coins[i][1] < change) {
        coins[i][1] = 0;
        changeArr.push([coins[i][0], chage - coins[i][1]]);
        change = chage - coins[i][1];
        i++;
      }
      else if( change % coinsValue[i] !== 0 && coins[i][1] < change) {
        let newChange = change - ((change % coinsValue[i]) * 100);
        coins[i][1] = newChange - coins[i][1];
        changeArr.push([coins[i][0], coins[i][1]]);
        change = (change % coinsValue[i]) * 100;
        i++;
      }
      else {
        let newChange = change - ((change % coinsValue[i]) * 100);
        coins[i][1] = coins[i][1] - newChange;
        changeArr.push([coins[i][0], newChange]);
        change = (change % coinsValue[i]) * 100;
        i++;
      }
    }
  }