var Cat = (function (name, weight) {
    var sumWeight = 0;
    var count = 0
    var cat = {}
    cat.name = name;
    cat.weight = weight;
    cat.averageWeight = function () {
        sumWeight += cat.weight;
        count += 1;
        return sumWeight / count
    }
    return cat;
    }
);

var fluffy = new Cat('fluffy', 15);
console.log(fluffy instanceof Cat == true)