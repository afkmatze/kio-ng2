"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Logger = (function () {
    function Logger(target) {
        this.target = target;
    }
    Logger.prototype.getName = function () {
        return this.target.constructor.name;
    };
    return Logger;
}());
exports.Logger = Logger;
//# sourceMappingURL=index.js.map