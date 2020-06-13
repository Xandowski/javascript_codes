function whatIsInAName(collection, source) {
  var arr = [];
  // Only change code below this line
  let c

  for (let i = 0; i < collection.length; i++) {
    c = 0
    for (let item in source) {
      if (collection[i].hasOwnProperty(item) && collection[i][item] != source[item]) {
        c = 1
      }

      else if (!collection[i].hasOwnProperty(item)) {
        c = 1
      }
    }
    if (c == 0) {
      arr.push(collection[i])
    }
  }

  // Only change code above this line
  return arr;
}

console.log(whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }));
