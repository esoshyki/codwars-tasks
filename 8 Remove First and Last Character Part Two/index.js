function array(arr){
   let arrr = arr.split(',')
   arrr.pop();
   arrr.shift();
   let str = arrr.join(' ')
   if (str.length === 0) {
       return null
   }
   else {
       return str
   }
    }


console.log(array('1,2,3'));