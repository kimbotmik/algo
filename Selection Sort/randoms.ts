let numbers = [];

function pushRandoms(howMany, howFar) {
    let i;
    for (i = 0; i < howMany; i++) {
      numbers.push(Math.floor(Math.random() * howFar) + 1);
    }
    return numbers;
}
