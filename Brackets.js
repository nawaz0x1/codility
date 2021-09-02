solution('{{{abc}}}');
function solution(S) {
  S = S.split('');
  let holder = [];
  let result = 1;
  S.forEach((data) => {
    switch (data) {
      case '(':
        holder.push(1);
        break;
      case '{':
        holder.push(2);
        break;
      case '[':
        holder.push(3);
        break;
      case ']':
        if (holder.pop() !== 3) result = 0;
        break;
      case '}':
        if (holder.pop() !== 2) result = 0;
        break;
      case ')':
        if (holder.pop() !== 1) result = 0;
        break;
    }
  });
  if (holder.length !== 0) {
    result = 0;
  }
  return result;
}
