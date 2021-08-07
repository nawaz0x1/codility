function solution(A) {
  if (!A || A.length == 0) return 1;
  let fullSum = 0;
  let sum = 0;
  for (i = 0; i <= A.length; i++) {
    fullSum += i + 1;
  }
  for (i = 0; i < A.length; i++) {
    sum += A[i];
  }
  return fullSum - sum;
}
