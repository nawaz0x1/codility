// https://www.geeksforgeeks.org/find-the-missing-number/

function solution(arr) {
    let n = arr.length + 1
    let total = n * (n + 1) / 2
    let realTotal = 0
    arr.forEach((item) => {
        realTotal += item
    })
    return total - realTotal
}
