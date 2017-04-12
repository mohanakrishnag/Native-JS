function createFunctions(n) {
    var callbacks = [];
    var getNumber = function (val) {
        return function () {
            return val;
        }
    }
    for (var i = 0; i < n; i++) {
        callbacks.push(getNumber(i));
    }
    return callbacks;
}
