var zero = commonFunc(0);
var one = commonFunc(1);
var two = commonFunc(2);
var three = commonFunc(3);
var four = commonFunc(4);
var five = commonFunc(5);
var six = commonFunc(6);
var seven = commonFunc(7);
var eight = commonFunc(8);
var nine = commonFunc(9);

function commonFunc(value) {
    return function (operation) {
        return operation ? operation(value) : value;
    }
}

function plus(value2) {
    return function (value1) {
        return value1 + value2;
    }
}

function minus(value2) {
    return function (value1) {
        return value1 - value2;
    }
}

function times(value2) {
    return function (value1) {
        return value1 * value2;
    }
}

function dividedBy(value2) {
    return function (value1) {
        return value1 / value2;
    }
}
