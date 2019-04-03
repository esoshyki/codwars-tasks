    var Cat = (function () {
    var sum = 0;
    var count = 0; 
    var avg = 0;
    function a(name, weight) {
        if (!name || !weight) {
            throw ('error')
        }
        this.name = name;
        this.weight = weight;
        sum += weight;
        count += 1;
        avg = sum / count
        Object.defineProperty(this, "weight",{
            set(newweight) { sum -= weight; this._weight = newweight; sum += this._weight; avg = sum / count},
            get() { return this._weight }        
        });  
        
    }
    Object.defineProperty(a, "averageWeight",{
        writable: true,
        enumerable: true,
        value: () => avg
    });

    return a;
   }());

   fluffy = new Cat('fluffy', 15);
   garfield = new Cat('garfield', 25);
