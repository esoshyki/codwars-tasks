function spyOn (func) {
    var count = 0;
    var argss = [];
    var answers = [];
    function spy(...args) {
      var result = func(...args);
      count += 1;
      argss.push(...args);
      answers.push(result)
      return result
    }
    spy.callCount = () => count;
    spy.wasCalledWith = function(argument) {
      return argss.includes(argument)
    }
    spy.returned = function(val) {
      return answers.includes(val)
    }
    return spy
    }

  


  function adder(n1, n2) { return n1 + n2; }
console.log(spyOn(adder(2, 3)).callCount())