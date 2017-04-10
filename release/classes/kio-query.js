"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var KioQueryModel = (function () {
    function KioQueryModel() {
    }
    KioQueryModel.fromNode = function (node) {
        var query = new KioQueryModel();
        query.cuid = node.cuid;
        query.locale = node.locale;
        query.cmd = 'get';
        query.role = node.type;
        if (node.type === 'pub') {
            query.headers = true;
        }
        else if (node.type === 'src') {
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