// Transportation on vacation
function rentalCarCost(day) {
    var rate = 40;
    var cost = day * rate;
    if (day >= 7) {
        cost = cost - 50;
    }
    else if (day >= 3 && day < 7) {
        cost = cost - 20;
    }
    return cost;
}