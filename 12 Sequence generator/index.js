function sequence(n, pattern) {
      if (typeof(pattern) == 'function') {
        let a = new Array(n);
              for (var i=0; i<a.length; i++) {
                a[i] = (pattern(a[i], i))
            }
        return a
        }
      else {
        let a = new Array(n);
        return a.fill(pattern);
        };
      };
 
 
      console.log(sequence(5, (x, idx) => idx%2))