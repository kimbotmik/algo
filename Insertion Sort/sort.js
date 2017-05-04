"use strict";
exports.__esModule = true;
var Insertion = (function () {
    function Insertion(whichArray) {
        var _this = this;
        this.whichArray = whichArray;
        this.Sort = function () {
            _this.numbersLast = _this.whichArray.numbers.length - 1;
            for (_this.i = _this.numbersLast; _this.i >= 0; _this.i--) {
                for (_this.j = _this.i - 1; _this.j >= 0; _this.j--) {
                    if (_this.whichArray.numbers[_this.i] < _this.whichArray.numbers[_this.j]) {
                        _a = [_this.whichArray.numbers[_this.j], _this.whichArray.numbers[_this.i]], _this.whichArray.numbers[_this.i] = _a[0], _this.whichArray.numbers[_this.j] = _a[1];
                    }
                }
            }
            var _a;
        };
    }
    return Insertion;
}());
exports["default"] = Insertion;
;
