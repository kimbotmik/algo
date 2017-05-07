let rnArray = new PushRandoms(1000, 10000).pushRandoms();

console.log(rnArray);

let sortedArray = new Insertion(rnArray).Sort();

console.log(sortedArray);