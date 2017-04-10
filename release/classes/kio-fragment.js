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
var kio_content_1 = require("./kio-content");
var KioFragmentModel = (function (_super) {
    __extends(KioFragmentModel, _super);
    function KioFragmentModel(props) {
        var _this = _super.call(this, props) || this;
        _this._children = [];
        var childNodes = props.children || props.cont;
        if (Array.isArray(childNodes)) {
            childNodes.forEach(function (childNode) { return _this.addChild(childNode); });
        }
        return _this;
    }
    Object.defineProperty(KioFragmentModel.prototype, "isKioFragment", {
        get: function () { return true; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(KioFragmentModel.prototype, "type", {
        get: function () {
            return 'fragment';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(KioFragmentModel.prototype, "children", {
        get: function () {
            return this._children.slice();
        },
        enumerable: true,
        configurable: true
    });
    KioFragmentModel.prototype.createChildNode = function (props) {
        if (!!props.cont) {
            return new KioFragmentModel(props);
        }
        return new kio_content_1.KioContentModel(props);
    };
    KioFragmentModel.prototype.childCount = function () { return this._children.length; };
    KioFragmentModel.prototype.childAt = function (index) { return this._children[index]; };
    KioFragmentModel.prototype.addChild = function (childNode) {
        if (!(childNode instanceof kio_content_1.KioContentModel)) {
            childNode = this.createChildNode(childNode);
        }
        childNode.parent = this;
        this._children.push(childNode);
    };
    KioFragmentModel.prototype.childIndex = function (childNode) {
        return this._children.indexOf(childNode);
    };
    Object.defineProperty(KioFragmentModel.prototype, "content", {
        get: function () {
            return this.children;
        },
        enumerable: true,
        configurable: true
    });
    KioFragmentModel.prototype.toObject = function () {
        return Object.assign({}, _super.prototype.toObject.call(this), { children: (this._children || []).map(function (child) { return child.toObject(); }) });
    };
    return KioFragmentModel;
}(kio_content_1.KioContentModel));
exports.KioFragmentModel = KioFragmentModel;
//# sourceMappingURL=kio-fragment.js.map