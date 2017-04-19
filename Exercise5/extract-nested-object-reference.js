// return the nested property value if it exists,
// otherwise return undefined
Object.prototype.hash = function (string) {
    var properties = string.split('.');
    var currentObject = this;

    while (currentObject && properties.length) {
        currentObject = currentObject[properties.shift()];
    }

    return currentObject;
}
