function convert(input, source, target) {
    function todec(input, base) {
        let arr = input.split('')
        arr = arr.join(' ')
        arr = arr.replace(/[Aa]/, '10').replace(/[Bb]/, '11').replace('C', '12').replace('D', '13').replace('E', '14').replace('F', '15')
        arr = arr.split(' ')
        let len = arr.length-1;
        let first = base ** len * arr[0] 
        let ans = arr.reduce((accumulator, next, currentIndex) => parseInt(accumulator) + (base ** (len - currentIndex)) * parseInt(next) )        
        return ans + first - arr[0]
    }
    function fromdec(input, base) {
        var res = input;
        var arr = [res%base]
        res = Math.floor(res/base)
        while(res > base - 1) {
            arr.unshift(res%base)
            res = Math.floor(res/base)
        }
        arr.unshift(res%base)
        return arr.join('')
    }
    return fromdec(input, source)
}


console.log(convert("97", 16))