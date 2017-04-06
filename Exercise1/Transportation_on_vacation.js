// Transportation on vacation
function rentalCarCost(day) {
    var rate = 40, cost = 0;
    if (day < 0) {
        return cost;
    }

    cost = day * rate;
    if (day >= 7) {
        cost = cost - 50;
        return cost;
    }
    else if (day >= 3 && day < 7) {
        return cost - 20;
    }
    else {
        return cost;
    }
}