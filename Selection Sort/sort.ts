function sort(whichArray) {
  let i: number;
  let j: number;
  let referenceIndex: number;

  for (i = 0; i < whichArray.length - 1; i++) {
    referenceIndex = i;
    for (j = i + 1; j < whichArray.length; j++) {
      if (whichArray[j] < whichArray[referenceIndex]) {
        referenceIndex = j;
      }
    }
    if (referenceIndex !== i) {
      [whichArray[i], whichArray[referenceIndex]] = [whichArray[referenceIndex], whichArray[i]];
    }
  }
  return whichArray;
}
