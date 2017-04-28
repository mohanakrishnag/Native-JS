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

    Object.defineProperty(Cat, 'averageWeight', {
        get: function () {
            var totlWeight = 0;
            for (var i = 0; i < cats.length; i++) {
                totlWeight += cats[i].weight;
            }
            return function () {
                return totlWeight / cats.length;
            }
        }
    });

    return Cat;

})();