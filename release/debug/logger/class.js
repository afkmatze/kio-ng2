"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var classes_1 = require("../../classes");
var getRootNode = function (node) {
    if (!node.parent)
        return node;
    return getRootNode(node.parent);
};
var Logger = (function () {
    function Logger() {
        this.contexts = new Set();
        this.contextLogs = new WeakMap();
    }
    Logger.prototype.log = function (context, payload) {
        if (!this.contexts.has(context)) {
            this.contexts.add(context);
            this.contextLogs.set(context, new Set());
        }
        this.contextLogs.get(context).add({
            timestamp: Date.now(),
            payload: payload
        });
    };
    Logger.prototype.filterContext = function (predicate) {
        return Array.from(this.contexts).filter(predicate);
    };
    Logger.prototype.filterContextByModifier = function (modifier) {
        return this.filterContext(function (loggerContext) { return loggerContext.hasModifier(modifier); });
    };
    Logger.prototype.findContext = function (predicate) {
        return Array.from(this.contexts).find(predicate);
    };
    Logger.prototype.contextsOfType = function (type) {
        var contexts = [];
        this.contexts.forEach(function (context) {
            if (context instanceof type) {
                contexts.push(context);
            }
        });
        return contexts;
    };
    Logger.prototype.getPublications = function () {
        var publications = [];
        this.contextsOfType(classes_1.KioContentModel).forEach(function (model) {
            var pub = getRootNode(model);
            if (publications.indexOf(pub) === -1)
                publications.push(pub);
        });
        return publications;
    };
    return Logger;
}());
exports.Logger = Logger;
//# sourceMappingURL=class.js.map