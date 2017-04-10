"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var RX_SLUG_MOD = new RegExp(/^slug\-/);
var KioNodeModel = (function () {
    function KioNodeModel(props, parent) {
        this._type = props.type || 'pub';
        this._cuid = props.cuid;
        this._locale = props.locale;
        this._modifiers = props.modifiers || props.mod || [];
        this._headers = props.headers || {};
        this._parent = parent;
    }
    Object.defineProperty(KioNodeModel.prototype, "isKioNode", {
        get: function () { return true; },
        set: function (b) { },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(KioNodeModel.prototype, "type", {
        get: function () {
            return this._type;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(KioNodeModel.prototype, "cuid", {
        get: function () {
            return this._cuid;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(KioNodeModel.prototype, "locale", {
        get: function () {
            return this._locale || 'en_US';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(KioNodeModel.prototype, "modifiers", {
        get: function () {
            return this._modifiers.slice();
        },
        enumerable: true,
        configurable: true
    });
    KioNodeModel.prototype.hasModifier = function (modifier) {
        return this._modifiers.indexOf(modifier) > -1;
    };
    Object.defineProperty(KioNodeModel.prototype, "parent", {
        get: function () {
            return this._parent;
        },
        set: function (parentNode) {
            this._parent = parentNode || null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(KioNodeModel.prototype, "headers", {
        get: function () {
            return this._headers;
        },
        enumerable: true,
        configurable: true
    });
    KioNodeModel.prototype.header = function (headerKey) {
        return (this._headers || {})[headerKey] || null;
    };
    Object.defineProperty(KioNodeModel.prototype, "level", {
        get: function () {
            return this.parent ? this.parent.level + 1 : 0;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(KioNodeModel.prototype, "index", {
        get: function () {
            if (!this.parent) {
                return -1;
            }
            var parentFragment = this.parent;
            return parentFragment.childIndex(this);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(KioNodeModel.prototype, "slug", {
        // KioNavigationItem
        get: function () {
            var slugMod = this.modifiers.find(function (mod) { return RX_SLUG_MOD.test(mod); });
            return slugMod && slugMod.replace(RX_SLUG_MOD, '');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(KioNodeModel.prototype, "contentQuery", {
        get: function () {
            return {
                cuid: this.cuid,
                locale: this.locale,
                role: this._type,
                cmd: 'get'
            };
        },
        enumerable: true,
        configurable: true
    });
    KioNodeModel.prototype.toObject = function () {
        return {
            type: this._type,
            cuid: this._cuid,
            headers: this.headers,
            locale: this._locale,
            modifiers: this.modifiers
        };
    };
    return KioNodeModel;
}());
exports.KioNodeModel = KioNodeModel;
//# sourceMappingURL=kio-node.js.map