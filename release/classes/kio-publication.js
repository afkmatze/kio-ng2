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
var kio_fragment_1 = require("./kio-fragment");
var KioPublicationModel = (function (_super) {
    __extends(KioPublicationModel, _super);
    function KioPublicationModel(props) {
        var _this = _super.call(this, Object.assign({}, props, {
            children: props.body
        })) || this;
        _this._title = props.title;
        _this.head = props.head;
        return _this;
    }
    Object.defineProperty(KioPublicationModel.prototype, "isKioPublication", {
        get: function () { return true; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(KioPublicationModel.prototype, "title", {
        get: function () {
            return this._title;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(KioPublicationModel.prototype, "contentQuery", {
        get: function () {
            return {
                cuid: this.cuid,
                locale: this.locale,
                role: this.type,
                headers: true,
                cmd: 'get'
            };
        },
        enumerable: true,
        configurable: true
    });
    KioPublicationModel.prototype.toObject = function () {
        return Object.assign({}, _super.prototype.toObject.call(this), { title: this._title, head: this.head });
    };
    return KioPublicationModel;
}(kio_fragment_1.KioFragmentModel));
exports.KioPublicationModel = KioPublicationModel;
//# sourceMappingURL=kio-publication.js.map