"use strict";
/**
 * @module kio-ng2
 * @namespace Classes
 */
Object.defineProperty(exports, "__esModule", { value: true });
var Types = require("../types");
var enums_1 = require("../enums");
var KioQueryModel = (function () {
    function KioQueryModel() {
    }
    KioQueryModel.fromNode = function (node) {
        var query = new KioQueryModel();
        query.cuid = node.cuid;
        query.locale = node.locale;
        query.cmd = 'get';
        query.role = enums_1.KioNodeType[node.type];
        if (Types.isCtnPublication(node.type)) {
            query.headers = true;
            query.role = 'pub';
        }
        else if (Types.isCtnSrc(node.type)) {
            var mimeType = node.headers.mimeType;
            if (mimeType && mimeType.startsWith('image')) {
                query.cmd = 'img';
            }
        }
        return query;
    };
    return KioQueryModel;
}());
exports.KioQueryModel = KioQueryModel;
//# sourceMappingURL=kio-query.js.map