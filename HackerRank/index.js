const arr = [1, 2, 3, 5, 4]

function miniMaxSum(array) {
    let newArr = array.sort()
    let min = 0
    let max = 0
    let i = 0
    while (i < newArr.length - 1) {
        min += newArr[i]
        max += newArr[i + 1]
        i++
    }

    return `${min} ${max}`
}

console.log(miniMaxSum(arr))