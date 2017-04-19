var Cat = (function () {
    var cats = [];

    function Cat(name, weight) {
        if (!name || !weight) {
            throw Error("Error: Please specify name and value.");
        }

        Object.defineProperty(this, 'weight', {
            get: function () {
                return weight;
            },
            set: function (value) {
                weight = value;
            }
        });

        cats.push(this);
    }

    //Added function to return averageWeight from the cats array
    Array.prototype.awerageWeight = function (prop) {
        var total = 0
        for (var i = 0, _len = this.length; i < _len; i++) {
            total += this[i][prop]
        }
        return this.length ? (total / this.length) : 0;
    }

    Object.defineProperty(Cat, 'averageWeight', {
        get: function () {
            return function () {
                return cats.awerageWeight('weight');
            }
        }
    });

    return Cat;

})();