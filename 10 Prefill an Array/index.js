function prefill(n, v) {
    let answer = [];
  if (n === 0 || n === '0') {
    return answer };
  if ((!Number.isInteger(n) || n < 0 || typeof(n) == 'boolean')) {
      throw TypeError (n + " is invalid" )
  }
      for (var i = 1; i<=n; i++) {
          answer.push(v)
      }
  return answer
}

console.log(prefill(0,'abc'));