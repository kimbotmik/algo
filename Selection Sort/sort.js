function sort(whichArray) {
    var i;
    var j;
    var referenceIndex;
    for (i = 0; i < whichArray.length - 1; i++) {
        referenceIndex = i;
        for (j = i + 1; j < whichArray.length; j++) {
            if (whichArray[j] < whichArray[referenceIndex]) {
                referenceIndex = j;
            }
        }
        if (referenceIndex !== i) {
            _a = [whichArray[referenceIndex], whichArray[i]], whichArray[i] = _a[0], whichArray[referenceIndex] = _a[1];
        }
    }
    return whichArray;
    var _a;
}
