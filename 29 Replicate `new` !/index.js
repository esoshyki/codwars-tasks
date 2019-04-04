function nouveau(Constructor, ...args) {
    if (typeof Reflect !== 'undefined') {
      return Reflect.construct(Constructor, args)
    }
  
    const obj = Object.create(Constructor.prototype);
    const result = Constructor.apply(obj, args);
  
    return result === Object(result) ? result : obj;
  }