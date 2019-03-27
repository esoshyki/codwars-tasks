function partitionOn(pred, items) {
    let ans = []
    items.forEach(element => {
        if (!pred(element)) { ans.push(element)}     
    });
    items.forEach(element => {
        if (pred(element)) {ans.push(element)}
    })
    for (var i=0; i<items.length; i++) {
      items.shift();
      items.push(ans[i])}
   return ans.findIndex(pred);
}


var items = [1, 2, 3, 4, 5, 6];
function isEven(n) {return n % 2 == 0}
console.log(partitionOn(isEven, items))
console.log(items)
/** 

var i = partitionOn(isEven, items);
// items should now be [1, 3, 5, 2, 4, 6]
// i     should now be 3 */