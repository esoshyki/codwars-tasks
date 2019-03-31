

var Counter = function() {
    var count = 0;

    return () => count++;
}
var counter = Counter()
console.log(counter());
console.log(counter());
console.log(counter());
var anotherCounter = Counter();
console.log(anotherCounter())
console.log(anotherCounter())
console.log(anotherCounter())