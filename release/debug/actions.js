"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var NodeLogger_class_1 = require("./logger/structure/NodeLogger.class");
exports.register = function (target) {
    return new NodeLogger_class_1.NodeLogger(target);
};
//# sourceMappingURL=actions.js.map