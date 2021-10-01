function numerication(equ: string, op: []) {
  const equation = [];
  let start = 0;

  for (let i = 0; i < op.length; i += 1) {
    const end = op[i];
    equation.push(Number(equ.substring(start, end)));
    equation.push(equ.charAt(end));
    start = end + 1;
  }

  equation.push(Number(equ.substring(start, equ.length)));
  return equation;
}

function calculation(equ: []) {
  const e: [] = equ;

  for (let i = 1; i < e.length; i += 2) {
    let res = 0;

    switch (e[i]) {
      case '*':
        res = e[i - 1] * e[i + 1];
        break;

      case '/':
        res = e[i - 1] / e[i + 1];
        break;

      case '+':
        res = e[i - 1] + e[i + 1];
        break;

      case '-':
        res = e[i - 1] - e[i + 1];
        break;

      default:
    }

    e[i - 1] = '';
    e[i] = '';
    e[i + 1] = res;
  }

  return e[e.length - 1];
}

export default (equ: string, op: []) => {
  const nums = numerication(equ, op);
  const res = calculation(nums);
  return res;
}
