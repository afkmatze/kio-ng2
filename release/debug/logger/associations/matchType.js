"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var classes_1 = require("../../../classes");
var association_types_enum_1 = require("./association-types.enum");
exports.AssociationTypeNames = [
    association_types_enum_1.AssociationTypes[association_types_enum_1.AssociationTypes.component],
    association_types_enum_1.AssociationTypes[association_types_enum_1.AssociationTypes.cuid],
    association_types_enum_1.AssociationTypes[association_types_enum_1.AssociationTypes.error],
    association_types_enum_1.AssociationTypes[association_types_enum_1.AssociationTypes.fragment],
    association_types_enum_1.AssociationTypes[association_types_enum_1.AssociationTypes.node],
    association_types_enum_1.AssociationTypes[association_types_enum_1.AssociationTypes.query],
    association_types_enum_1.AssociationTypes[association_types_enum_1.AssociationTypes.src],
    association_types_enum_1.AssociationTypes[association_types_enum_1.AssociationTypes.txt]
];
exports.AssociationTypeValues = [
    association_types_enum_1.AssociationTypes.component,
    association_types_enum_1.AssociationTypes.cuid,
    association_types_enum_1.AssociationTypes.error,
    association_types_enum_1.AssociationTypes.fragment,
    association_types_enum_1.AssociationTypes.node,
    association_types_enum_1.AssociationTypes.query,
    association_types_enum_1.AssociationTypes.src,
    association_types_enum_1.AssociationTypes.txt
];
var associationTypeByName = function (name) {
    switch (name) {
        case association_types_enum_1.AssociationTypes[association_types_enum_1.AssociationTypes.component]:
            return association_types_enum_1.AssociationTypes.component;
        case association_types_enum_1.AssociationTypes[association_types_enum_1.AssociationTypes.cuid]:
            return association_types_enum_1.AssociationTypes.cuid;
        case association_types_enum_1.AssociationTypes[association_types_enum_1.AssociationTypes.error]:
            return association_types_enum_1.AssociationTypes.error;
        case association_types_enum_1.AssociationTypes[association_types_enum_1.AssociationTypes.fragment]:
            return association_types_enum_1.AssociationTypes.fragment;
        case association_types_enum_1.AssociationTypes[association_types_enum_1.AssociationTypes.node]:
            return association_types_enum_1.AssociationTypes.node;
        case association_types_enum_1.AssociationTypes[association_types_enum_1.AssociationTypes.query]:
            return association_types_enum_1.AssociationTypes.query;
        case association_types_enum_1.AssociationTypes[association_types_enum_1.AssociationTypes.src]:
            return association_types_enum_1.AssociationTypes.src;
        case association_types_enum_1.AssociationTypes[association_types_enum_1.AssociationTypes.txt]:
            return association_types_enum_1.AssociationTypes.txt;
    }
    return undefined;
};
var associationTypeName = function (typeValue) {
    if ('string' === typeof typeValue)
        return associationTypeName(associationTypeByName(typeValue));
    return association_types_enum_1.AssociationTypes[typeValue];
};
exports.matchers = (_a = {},
    _a[association_types_enum_1.AssociationTypes.component] = {
        type: association_types_enum_1.AssociationTypes.component,
        match: function (value) {
            if (!value.constructor)
                return false;
            if ('string' === typeof value.constructor.name) {
                return value.constructor.name.includes('Component');
            }
            return false;
        }
    },
    _a[association_types_enum_1.AssociationTypes.cuid] = {
        type: association_types_enum_1.AssociationTypes.cuid,
        match: function (value) {
            if (typeof value !== 'string')
                return false;
            return value.length === 25;
        }
    },
    _a[association_types_enum_1.AssociationTypes.error] = {
        type: association_types_enum_1.AssociationTypes.error,
        match: function (value) {
            return value instanceof Error;
        }
    },
    _a[association_types_enum_1.AssociationTypes.fragment] = {
        type: association_types_enum_1.AssociationTypes.fragment,
        match: function (value) {
            return value instanceof classes_1.KioFragmentModel;
        }
    },
    _a[association_types_enum_1.AssociationTypes.node] = {
        type: association_types_enum_1.AssociationTypes.node,
        match: function (value) {
            return value instanceof classes_1.KioNodeModel;
        }
    },
    _a[association_types_enum_1.AssociationTypes.query] = {
        type: association_types_enum_1.AssociationTypes.query,
        match: function (value) {
            return value instanceof classes_1.KioQueryModel;
        }
    },
    _a[association_types_enum_1.AssociationTypes.src] = {
        type: association_types_enum_1.AssociationTypes.src,
        match: function (value) {
            return value instanceof classes_1.KioContentModel && value.type === 'src';
        }
    },
    _a[association_types_enum_1.AssociationTypes.txt] = {
        type: association_types_enum_1.AssociationTypes.txt,
        match: function (value) {
            return value instanceof classes_1.KioContentModel && value.type === 'txt';
        }
    },
    _a);
exports.matchType = function (value) {
    return exports.AssociationTypeValues.find(function (key) {
        var matcher = exports.matchers[key];
        return matcher.match(value);
    });
};
var _a;
//# sourceMappingURL=matchType.js.map