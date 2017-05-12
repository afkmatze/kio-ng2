"use strict";
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var classes_1 = require("../../classes");
var associations_1 = require("./associations");
var getRootNode = function (node) {
    if (!node.parent)
        return node;
    return getRootNode(node.parent);
};
var Logger = (function () {
    function Logger() {
        this.errors = new Set();
        this.contexts = new Set();
        this.contextLogs = new WeakMap();
    }
    Logger.prototype.getContext = function (context) {
        if (!this.contexts.has(context)) {
            this.contexts.add(context);
            this.contextLogs.set(context, new Set());
        }
        return this.contextLogs.get(context);
    };
    Logger.prototype.associate = function (context, other) {
        associations_1.associate(context, other);
    };
    Logger.prototype.log = function (context, payload) {
        this.getContext(context).add({
            timestamp: Date.now(),
            payload: payload
        });
    };
    Logger.prototype.logError = function (contextClass, context, callerFn, error, args) {
        var errorData = __assign({ error: error,
            contextClass: contextClass, caller: callerFn }, args);
        this.errors.add(errorData);
        this.getContext(context).add({
            timestamp: Date.now(),
            payload: errorData
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