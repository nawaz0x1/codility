let A = [10, 2, 5, 1, 8, 20];
function solution(A) {
  if (A.length < 3) return 0;
  A.sort((a, b) => a - b);
  for (i = 0; i < A.length; i++) {
    if (A[i] + A[i + 1] > A[i + 2]) return 1;
  }
  return 0;
}
solution(A);
