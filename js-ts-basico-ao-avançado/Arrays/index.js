const names = ['Eduardo', 'Maria', 'Joana']
// using constructor:
const names2 = new Array('Eduardo', 'Maria', 'Joana')
// We can delete a value but the index persist
delete names[2]
console.log(names)
// [ 'Eduardo', 'Maria', <1 empty item> ]

// Arrays are reference value, but using spread operator this change:
const names3 = ['Eduardo', 'Maria', 'Joana']
const names4 = [...names3]
// if I make any changes to one of these two arryas, the change will not be reflected in the other

// remove the last item:
names4.pop()
console.log(names4)
// or:
names4.splice(-1, 1) // index, values to delete, values to add
console.log(names4)

// add a on last index:
names4.push('Maria')
console.log(names4)
// or:
names4.splice(names4.length, 0, 'Joana')
console.log(names4)


// remove first item:
names4.shift()
console.log(names4)
// or
names4.splice(0, 1)
console.log(names4)

//  add on the first index:
names4.unshift('Maria')
console.log(names4)
// or
names4.splice(0, 0, 'Eduardo')
console.log(names4)

// slice a array
const names5 = names4.slice(1, names4.length)
console.log(names5)
console.log(names4)

// split a string with a separator
const name = 'Alexandre Do Carmo Morais'
const splitName = name.split(' ')
console.log(splitName)

//join a array into a string using a separator
const joinName = splitName.join(',')
console.log(joinName)
