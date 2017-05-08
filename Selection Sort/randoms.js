var numbers = [];
function pushRandoms(howMany, howFar) {
    var i;
    for (i = 0; i < howMany; i++) {
        numbers.push(Math.floor(Math.random() * howFar) + 1);
    }
    return numbers;
}
