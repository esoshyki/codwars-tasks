function createFunctions(n) {
    var callbacks = [];
  
    for (var i=0; i<n; i++) {
      let index = i; 
        callbacks.push(function() {
          return index;
      });
    }

    return callbacks;
  }

createFunctions(5)
