function cache(func){
    var cached = {};
      return function(){
        var key = JSON.stringify(arguments);
        if (cached[key]){
          return cached[key];
        }
        else{
          val = func.apply(null, arguments);
          cached[key] = val;
          return val; 
        }
    }
  }
  var firstfunc = (a, b) => a+b

  console.log(cache(firstfunc('135513', '531513')))
  console.log(cache(firstfunc('135513', '531513')))