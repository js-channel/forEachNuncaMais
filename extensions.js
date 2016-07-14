Array.prototype.concatAll = function() {
    let result = [];

    this.forEach(items => 
        result = result.concat(items)
    );

    return result;
}