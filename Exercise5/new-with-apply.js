function construct(Class) {
    var obj = Object.create(Class.prototype),
         args = Array.prototype.slice.call(arguments, 1)

    Class.apply(obj, args);

    return obj;
}