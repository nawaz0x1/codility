let A = [-3, 1, 2, -2, 5, 6];
function solution(A) {
  A.sort((a, b) => {
    return a - b;
  });

  return Math.max(
    A[A.length - 1] * A[A.length - 2] * A[A.length - 3],
    A[0] * A[1] * A[A.length - 1]
  );
}
