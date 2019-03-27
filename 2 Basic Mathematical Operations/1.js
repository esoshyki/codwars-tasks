function basicOp(operation, value1, value2)
{ let str = '' + value1 + operation + value2 
  return eval(str)
}

console.log(basicOp('+', 4, 7))