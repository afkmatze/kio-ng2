"use strict";
/**
 * @module kio-ng2
 * @namespace Classes
 */
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
var kio_node_1 = require("./kio-node");
var KioContentModel = (function (_super) {
    __extends(KioContentModel, _super);
    function KioContentModel(type, props, parent) {
        return _super.call(this, type, props, parent) || this;
    }
    Object.defineProperty(KioContentModel.prototype, "isLoaded", {
        get: function () {
            return this._data !== undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(KioContentModel.prototype, "data", {
        get: function () {
            return this._data;
        },
        set: function ($data) {
            this._data = $data;
        },
        enumerable: true,
        configurable: true
    });
    KioContentModel.prototype.toObject = function () {
        return Object.assign({}, _super.prototype.toObject.call(this), { data: this._data });
    };
    return KioContentModel;
}(kio_node_1.KioNodeModel));
exports.KioContentModel = KioContentModel;
//# sourceMappingURL=kio-content.js.map