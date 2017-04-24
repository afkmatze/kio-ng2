"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var abstract_1 = require("../abstract");
var NodeLogger = (function (_super) {
    __extends(NodeLogger, _super);
    function NodeLogger(target) {
        var _this = _super.call(this, target) || this;
        _this.associations = [];
        return _this;
    }
    NodeLogger.prototype.add = function (association) {
        this.associations.push(association);
    };
    return NodeLogger;
}(abstract_1.Logger));
exports.NodeLogger = NodeLogger;
//# sourceMappingURL=NodeLogger.class.js.map