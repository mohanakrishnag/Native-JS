// Function to get the middle character of a string
function getMiddle(s) {
    var middleIndex = Math.floor(s.length / 2);
    return (s.length % 2) ? s.substr(middleIndex, 1) : s.substr(middleIndex - 1, 2);
}