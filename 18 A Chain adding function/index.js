
    var add = function (a) {
        var sum = a;
  
        var inner = function (b) {
          sum += b;
          return inner;
        };
  
        inner.valueOf = function () {
          return sum;
        };
  
        return inner;
      };
console.log(add(2) == 2)