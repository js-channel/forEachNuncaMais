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