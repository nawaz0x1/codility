function solution(n) {
  // write your code in JavaScript (Node.js 8.9.4)
  let foundOne = false;
  let gap = 0;
  let maxGap = 0;
  //reminder
  while (n != 0) {
    if (n % 2) {
      foundOne = true;
      gap = 0;
    } else if (foundOne) {
      gap++;
      if (gap > maxGap) {
        maxGap = gap;
      }
    }
    n = Math.floor(n / 2);
  }
  return maxGap;
}
