function compose(...fns) {
    if (!arguments['0']) {
        return (x) => x
    }
    else {return fns.reduce((f, g) => (...args) => f(g(...args)))}
} 

console.log(compose()(2))