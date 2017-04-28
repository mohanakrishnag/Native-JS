//Pre-filling an array
function prefill(times, value) {
    if (!/^\d+$/.test(times)) {
        throw new TypeError(times + ' is invalid');
    }
    else {
        var array = [];
        var numTimes = parseInt(times);
        for (var i = 0; i < numTimes; i++) {
            array.push(value);
        }
        return array;
    }
}
