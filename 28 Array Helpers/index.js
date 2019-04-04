Array.prototype.square = function() {return (this.map((el) => el**2))}
Array.prototype.cube = function() {return (this.map((el) => el**3))}
Array.prototype.sum = function() {try {return (this.reduce((a,b) => a+b))} catch(er) { return 'Wrong sum'} }
Array.prototype.average = function() {try { return (this.reduce((a,b) => a+b))/this.length} catch(er) { return 'Wrong average' } }  
Array.prototype.even = function() {try {return (this.filter(a => a%2 == 0))} catch(er) { return 'Wrhong result for odd()'} }
 Array.prototype.odd = function() {try {return (this.filter(a => a%2 == 1))} catch(er) { return 'Wrong result for even()'} }
