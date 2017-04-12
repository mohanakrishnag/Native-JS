// return the nested property value if it exists,
// otherwise return undefined
Object.prototype.hash = function (string) {
    var properties = string.split('.'),
        current = this;

    while (current && properties.length) {
        current = current[properties.shift()];
    }

    return current;
}
