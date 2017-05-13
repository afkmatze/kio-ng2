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
var kio_node_1 = require("./kio-node");
var KioFragmentModel = (function (_super) {
    __extends(KioFragmentModel, _super);
    function KioFragmentModel(props, parent) {
        var _this = _super.call(this, props.type, props, parent) || this;
        _this._children = [];
        var childNodes = props.children || props.cont;
        if (Array.isArray(childNodes)) {
            childNodes.forEach(function (childNode) { return _this.addChild(childNode); });
        }
        return _this;
        /*    if ( implementsKioPublication(props) )
            {
              this._type = KioNodeType.publication
            }
            else {
              this._type = KioNodeType.fragment
            }*/
    }
    Object.defineProperty(KioFragmentModel.prototype, "children", {
        get: function () {
            return this._children.slice();
        },
        enumerable: true,
        configurable: true
    });
    KioFragmentModel.prototype.filterChildren = function (predicate) {
        var _this = this;
        return this.children.filter(function (node, idx) { return predicate(node, idx, _this); });
    };
    KioFragmentModel.prototype.find = function (predicate, maxDepth) {
        if (maxDepth === void 0) { maxDepth = -1; }
        for (var i = 0; i < this._children.length; i++) {
            var child = this.childAt(i);
            if (predicate(child, i, this))
                return child;
        }
        if (maxDepth !== 0) {
            for (var i = 0; i < this._children.length; i++) {
                var child = this.childAt(i);
                if (child instanceof KioFragmentModel) {
                    var found = child.find(predicate, maxDepth - 1);
                    if (found) {
                        return found;
                    }
                }
            }
        }
        return undefined;
    };
    KioFragmentModel.prototype.childCount = function () { return this._children.length; };
    KioFragmentModel.prototype.childAt = function (index) { return this._children[index]; };
    KioFragmentModel.prototype.addChild = function (childNode) {
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
}(kio_node_1.KioNodeModel));
exports.KioFragmentModel = KioFragmentModel;
//# sourceMappingURL=kio-fragment.js.map