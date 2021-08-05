// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');
// https://www.geeksforgeeks.org/find-the-number-occurring-odd-number-of-times/

function solution(A) {
    let res = 0;
     
    for (let i = 0; i < A.length; i++)    
        res = res ^ A[i];
     
    return res;
}
