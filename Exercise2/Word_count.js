//Function to return the count of words
function countWords(str) {
    str = str.replace(/\s/g, ' ').trim();
    return str.split(' ').filter(function (n) { return n != '' }).length;
}