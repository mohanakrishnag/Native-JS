function compose() {
    var func = arguments;
    return function (val) {
        for (var i = func.length - 1; i >= 0; i--) {
            val = func[i].call(this, val);
        }
        return val;
    }
}
