Array.prototype.concatAll = function() {
    let result = [];

    this.forEach(items => 
        result = result.concat(items)
    );

    return result;
}

Array.prototype.concatMap = function (modifierFunction) {
    return this.map(modifierFunction).concatAll();
}

Array.zip = function(xs, ys, modify) {
    const result = [];

    for(let i = 0; i < Math.min(xs.length, ys.length); i++) {
        result.push(modify(xs[i], ys[i]));
    }

    return result;
}
