function solution(A) {
  let number = 0;
  let last = undefined;
  A.sort().forEach((el) => {
    if (el !== last) {
      last = el;
      number++;
    }
  });
  return number;
}
