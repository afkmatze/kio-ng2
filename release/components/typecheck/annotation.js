"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isComponentAnnotation = function (other) {
    return ('type' in other
        &&
            'modifiers' in other);
};
exports.isNamedAnnotation = function (other) {
    return ('name' in other
        &&
            exports.isComponentAnnotation(other));
};
//# sourceMappingURL=annotation.js.map