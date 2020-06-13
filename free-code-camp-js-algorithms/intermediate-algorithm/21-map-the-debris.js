function orbitalPeriod(arr) {
  const newArr = []
  var GM = 398600.4418;
  var earthRadius = 6367.4447;

  for(let i = 0; i < arr.length; i++){
    newArr.push({name: arr[i].name, orbitalPeriod: calcOrbitalPeriod(earthRadius, arr[i].avgAlt, GM)})
  }

  return newArr;
}

function calcOrbitalPeriod(er, avg, gm){
  let temp;
  temp = 2*Math.PI*(Math.sqrt(Math.pow((er + avg), 3) / gm))
  return Math.round(temp)
}
