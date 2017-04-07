// partition the items array so that all values for which pred returns true are
// at the end, returning the index of the first true value
function partitionOn(pred, items) {
    var evenItems = items.filter(pred);
    var oddItems = items.filter(function getOdd(index) {
        return !pred(index);
    });

    //items=[];// -- Not working
    items.length = 0;
    items.push.apply(items, oddItems.concat(evenItems));
    return items.indexOf(evenItems[0]);
}