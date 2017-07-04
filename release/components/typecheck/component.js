"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var annotation_1 = require("./annotation");
exports.isComponentStructure = function (other) {
    return annotation_1.isComponentAnnotation(other);
};
exports.isComponentFragmentStructure = function (other) {
    return ('childTypes' in other
        &&
            other.type === 'fragment'
        &&
            exports.isComponentStructure(other));
};
exports.isNamedComponentStructure = function (other) {
    return (annotation_1.isNamedAnnotation(other)
        &&
            exports.isComponentStructure(other));
};
exports.isNamedFragmentComponentStructure = function (other) {
    return (annotation_1.isNamedAnnotation(other)
        &&
            exports.isComponentFragmentStructure(other));
};
exports.isNamedComponent = function (other) {
    return exports.isNamedComponentStructure(other) || exports.isNamedFragmentComponentStructure(other);
};
//# sourceMappingURL=component.js.map