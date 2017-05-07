var rnArray = new PushRandoms(1000, 10000).pushRandoms();
console.log(rnArray);
var sortedArray = new Insertion(rnArray).Sort();
console.log(sortedArray);
