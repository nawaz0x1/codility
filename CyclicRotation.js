function solution(A, K) {
  // write your code in JavaScript (Node.js 8.9.4)
  if (!A.length || A.length == K) return A;
  for (let i = 0; i < K; i++) A.unshift(A.pop());
  return A;
}
