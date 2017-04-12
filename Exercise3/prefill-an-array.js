//Pre-filling an array
function prefill(times, value) {
    if (!/^\d+$/.test(times)) {
        throw new TypeError(times + ' is invalid');
    }
    else {
        var array = [];
        for (var i = 0; i < times; i++) {
            array.push(value);
        }
        return array;
    }
}
