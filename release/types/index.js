"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(require("./check"));
var enums_1 = require("../enums");
exports.nodeTypeByName = function (name) {
    return enums_1.KioNodeType[name];
};
exports.nodeType = function (name) {
    if ('string' === typeof name) {
        return enums_1.KioNodeType[name];
    }
    else if ('number' === typeof name) {
        switch (name) {
            case enums_1.KioNodeType.publication:
            case enums_1.KioNodeType.fragment:
            case enums_1.KioNodeType.src:
            case enums_1.KioNodeType.txt:
                return enums_1.KioNodeType[enums_1.KioNodeType[name]];
        }
    }
};
exports.primitiveNodeType = function (name) {
    if ('string' === typeof name) {
        return exports.primitiveNodeType(enums_1.KioNodeType[name]);
    }
    switch (name) {
        case enums_1.KioNodeType.src:
            return enums_1.KioNodeType.src;
        case enums_1.KioNodeType.txt:
            return enums_1.KioNodeType.txt;
    }
};
exports.childNodeType = function (name) {
    if ('string' === typeof name) {
        return exports.childNodeType(enums_1.KioNodeType[name]);
    }
    switch (name) {
        case enums_1.KioNodeType.fragment:
            return enums_1.KioNodeType.fragment;
        case enums_1.KioNodeType.src:
            return enums_1.KioNodeType.src;
        case enums_1.KioNodeType.txt:
            return enums_1.KioNodeType.txt;
    }
};
//# sourceMappingURL=index.js.map