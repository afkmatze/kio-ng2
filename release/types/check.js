"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var enums_1 = require("../enums");
exports.isCtnPublication = function (other) {
    if ('string' === typeof other) {
        return enums_1.KioNodeType[other] === enums_1.KioNodeType.publication;
    }
    return enums_1.KioNodeType.publication === other;
};
exports.isCtnFragment = function (other) {
    if ('string' === typeof other) {
        return enums_1.KioNodeType[other] === enums_1.KioNodeType.fragment;
    }
    return enums_1.KioNodeType.fragment === other;
};
exports.isCtnSrc = function (other) {
    if ('string' === typeof other) {
        return enums_1.KioNodeType[other] === enums_1.KioNodeType.src;
    }
    return enums_1.KioNodeType.src === other;
};
exports.isCtnTxt = function (other) {
    if ('string' === typeof other) {
        return enums_1.KioNodeType[other] === enums_1.KioNodeType.txt;
    }
    return enums_1.KioNodeType.txt === other;
};
exports.isNestedContentType = function (other) {
    return exports.isCtnPublication(other) || exports.isCtnFragment(other);
};
exports.isPrimitiveContentType = function (other) {
    return exports.isCtnSrc(other) || exports.isCtnTxt(other);
};
exports.isChildContentType = function (other) {
    return exports.isCtnSrc(other) || exports.isCtnTxt(other) || exports.isCtnFragment(other);
};
exports.isStructureContentType = function (other) {
    return exports.isCtnSrc(other) || exports.isCtnTxt(other) || exports.isCtnFragment(other) || exports.isCtnPublication(other);
};
//# sourceMappingURL=check.js.map