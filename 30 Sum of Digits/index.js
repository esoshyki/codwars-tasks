function digital_root(n) {
    if ((n + "").split('').length < 2) { return n}
  var sum = (n + "").split('').reduce((a,b)=>parseInt(a)+parseInt(0+b))
  return digital_root(sum)
}

