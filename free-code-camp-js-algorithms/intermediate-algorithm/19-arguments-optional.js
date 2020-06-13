function addTogether() {
  //função para checar se é numero
  const isNum = function(num) {
    if (typeof num !== 'number') {
      return undefined
    } else return num
  }
  //se tiver dois argumentos, checar se são numeros e somar
  if (arguments.length > 1){
    const a = isNum(arguments[0])
    const b = isNum(arguments[1])
    if( a === undefined || b === undefined){
      return undefined
    } else return a + b
  }
  //se tiver um argumento, checar se é numero e retornar uma função
  else {
    const c = arguments[0]
    if (isNum(c)){
      return function (arg2){
        if (c === undefined || arg2 === undefined){
          return undefined
        }else return c + arg2
      }
    }
  }
}


// function addTogether(first, second) {
//   if (typeof first !== "number") {
//     return undefined;
//   }
//   const sum = second =>
//     typeof second === "number" ? first + second : undefined;
//   return typeof second === "undefined" ? second => sum(second) : sum(second);
// }
