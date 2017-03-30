// Basic Mathematical Operations
function basicOp(operation, value1, value2) {
    var result;
    switch (operation) {
        case "+":
            result = value1 + value2;
            break;
        case "-":
            result = value1 - value2;
            break;
        case "/":
            result = value1 / value2;
            break;
        case "*":
            result = value1 * value2;
            break;
    }
    return result;
}