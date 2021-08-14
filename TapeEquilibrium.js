function solution(A) {
  if (A.length == 2) {
    return Math.abs(A[0] - A[1]);
  }
  let total = 0;
  let LS = 0;
  let RS = 0;
  let maxDiffer = Infinity;
  
  // calculating  total
  A.forEach((i) => {
    total += i;
  });
  
  for(i=0; i<A.length-1; i++) {
    LS += A[i]
    RS = total - LS
    let differ  = Math.abs(RS -LS)
    console.log(differ)
    if(maxDiffer > differ) {
      maxDiffer = differ
    }
  }
  
  return maxDiffer;
}
 //solution([-10, -20, -30, -40, 100])
//solution([1,2,3,4,3])
