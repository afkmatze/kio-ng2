"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var matchType_1 = require("./matchType");
exports.associate = function (left, right) {
    return new Association(left, right);
};
var Association = (function () {
    function Association(context, other) {
        this.context = context;
        this.contextType = matchType_1.matchType(context);
        this.other = other;
        this.otherType = matchType_1.matchType(other);
    }
    return Association;
}());
exports.Association = Association;
//# sourceMappingURL=association.class.js.map