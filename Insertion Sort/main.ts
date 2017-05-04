import PR from "./randoms";
let PR1 = new PR(1000, 10000);
PR1.pushRandoms;
let rnArray = PR1.numbers;

import Insertion from "./sort";
let IS = new Insertion(rnArray);
IS.Sort();

console.log(rnArray);