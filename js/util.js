/* global utility functions */

function defined(v) {
    return (v !== undefined);
}

Array.prototype.contain = function (element) {
    return this.some(function (t) {
        return (t === element);
    });
};

Array.prototype.equal = function (array) {
    return this.length === array.length &&
        this.every(function (element, index) {
            return element === array[index];
        });
};

Array.prototype.push_unique = function (element) {
    if (!this.some(function (t) {
            return (t === element) ||
                (t instanceof Array && element instanceof Array && t.equal(element));
        })) {
        this.push(element);
    }
};

Array.prototype.last = function () {
    return this.length > 0 ? this[this.length - 1] : null;
};

Object.prototype.attributes = function () {
    var as = [];
    for (var a in this) {
        as.push(a);
    }
    return as;
};
