var PushRandoms = (function () {
    function PushRandoms(howMany, howFar) {
        var _this = this;
        this.howMany = howMany;
        this.howFar = howFar;
        this.numbers = [];
        this.pushRandoms = function () {
            for (var i = 0; i < _this.howMany; i++) {
                _this.numbers.push(Math.floor(Math.random() * _this.howFar) + 1);
            }
            return _this.numbers;
        };
    }
    return PushRandoms;
}());
;
