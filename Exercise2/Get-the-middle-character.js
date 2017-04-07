// Function to get the middle character of a string
function getMiddle(s) {
    if (s.length % 2) {
        return s.substr(s.length / 2, 1);
    }
    return s.substr((s.length / 2) - 1, 2);
}
