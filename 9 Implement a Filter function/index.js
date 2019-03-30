Array.prototype.filter = function (func) {
    let ansarr = [];
    for (i=0; i<this.length; i++) {
      if (func(this[i], i, this)) {
        ansarr.push(this[i])
      }
      }
    return ansarr;
    }