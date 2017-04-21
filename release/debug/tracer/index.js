"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.wrapTarget = function (target) {
    var targetName = target.constructor.name;
    var originalMethods = {};
    var wrapTargetMethod = function (methodName) {
        var method = target[methodName];
        originalMethods[methodName] = method;
        var methodReplacement = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            console.groupCollapsed(targetName + '::' + methodName);
            args.forEach(function (arg, idx) { return console.log('arg #%s\t%s', idx, typeof arg, arg); });
            console.groupEnd();
            var rv = method.apply(void 0, args);
            return rv;
        };
        target[methodName] = methodReplacement;
    };
    var unwrapTargetMethod = function (methodName) {
        target[methodName] = originalMethods[methodName];
    };
    var methodNames = Object.keys(target).filter(function (key) { return 'string' === typeof target[key]; });
    methodNames.forEach(wrapTargetMethod);
    return {
        unwrap: function () {
            methodNames.forEach(unwrapTargetMethod);
        }
    };
};
//# sourceMappingURL=index.js.map