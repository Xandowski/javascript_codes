function spinalCase(str) {

  let arr = [...str]
  const re = /[A-Z]/g;
  let newStr = '';

  arr.filter((item, index) => {
    if(item.match(re) && arr[index-1] != '-' && index != 0){
      arr[index] = item.replace(re, '-'+item)
    }

    if(item == '_' && arr[index+1] != '-' || item == ' ' && arr[index+1] != '-'){
      arr.splice(index, 1, "-")
    }


    return item
  })

  return arr.join('').toLocaleLowerCase();
}
