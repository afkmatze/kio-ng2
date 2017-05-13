"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var types_1 = require("../types");
exports.implementsKioNode = function (other) {
    return ('cuid' in other && typeof other.cuid === 'string'
        && 'type' in other && types_1.isStructureContentType(other.type)
        && 'locale' in other && typeof other.locale === 'string'
        && 'modifiers' in other && Array.isArray(other.modifiers));
};
exports.implementsKioFragment = function (other) {
    return ('children' in other && Array.isArray(other.children)
        && 'type' in other && types_1.isNestedContentType(other.type));
};
exports.implementsKioContent = function (other) {
    return (exports.implementsKioNode(other)
        && types_1.isPrimitiveContentType(other.type));
};
exports.implementsKioSrc = function (other) {
    return (exports.implementsKioContent(other)
        && types_1.isCtnSrc(other.type));
};
exports.implementsKioTxt = function (other) {
    return (exports.implementsKioContent(other)
        && types_1.isCtnTxt(other.type));
};
exports.implementsKioPublication = function (other) {
    return (exports.implementsKioFragment(other)
        && types_1.isCtnPublication(other.type));
};
//# sourceMappingURL=check.js.map