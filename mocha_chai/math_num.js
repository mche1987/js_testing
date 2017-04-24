module.exports = MathNum;

function MathNum(init) {
    init = init || 0;
    this.value = init;
    this.val = function () {
        return this.value;
    }
    this.add = function (num) {
        if (typeof num === "number") {
            this.value += num;
        }
        if (Array.isArray(num)) {
            var that = this;
            num.forEach(function (v) {
                if (typeof v === "number")
                    that.value += v;
            })
        }
    }

    this.multiply = function (num) {
        if (typeof num === "number") {
            this.value *= num;
        }
        if (Array.isArray(num)) {
            var that = this;
            num.forEach(function (v) {
                if (typeof v === "number")
                    that.value *= v;
            })
        }
    }

    this.power = function (num) {
        if (typeof num === "number") 
            this.value = powering(this.value, num)
    }





    function powering(x, y) {
        if (y === 0) { return 1 }
        else if (y % 2 === 0) {
            return powering(x, parseInt(y / 2)) * powering(x, parseInt(y / 2))
        } else {
            return x * powering(x, parseInt(y / 2)) * powering(x, parseInt(y / 2))
        }

    }


}
