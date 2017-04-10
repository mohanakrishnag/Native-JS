// Function to get the middle character of a string
function getMiddle(s) {
    var middleIndex = s.length / 2;
    return (s.length % 2) ? s.substr(middleIndex, 1) : s.substr(middleIndex - 1, 2);
}
