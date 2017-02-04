$_mod.def("/marko$4.0.0-rc.12/compiler/taglib-loader/loader-attribute", function(require, exports, module, __filename, __dirname) { 'use strict';

var assert = require('/assert$1.3.0/assert'/*'assert'*/);
var raptorRegexp = require('/raptor-regexp$1.0.1/lib/raptor-regexp'/*'raptor-regexp'*/);
var propertyHandlers = require('/property-handlers$1.1.1/lib/index'/*'property-handlers'*/);
var types = require('/marko$4.0.0-rc.12/compiler/taglib-loader/types'/*'./types'*/);
var createError = require('/raptor-util$3.1.0/createError'/*'raptor-util/createError'*/);

class AttrLoader {
    constructor(dependencyChain) {
        this.dependencyChain = dependencyChain;
        this.attr = null;
    }

    _load(attrName, attrProps) {
        if (attrProps == null) {
            attrProps = {};
        } else if (typeof attrProps === 'string') {
            attrProps = {
                type: attrProps
            };
        } else {
            assert.ok(typeof attrProps === 'object', 'Invalid "attrProps"');
        }

        var attr = this.attr = new types.Attribute(attrName);
        propertyHandlers(attrProps, this, this.dependencyChain.toString());
        return attr;
    }

    /**
     * The attribute type. One of the following:
     * - string (the default)
     * - expression (a JavaScript expression)
     * - number
     * - integer
     * - int
     * - boolean
     * - float
     * - double
     * - object
     * - array
     *
     */
    type(value) {
        var attr = this.attr;
        attr.type = value;
    }

    /**
     * The name of the target property to use when mapping
     * the attribute to a property on the target object.
     */
    targetProperty(value) {
        var attr = this.attr;
        attr.targetProperty = value;
    }
    /**
     * The "default-value" property allows a default value
     * to be provided when the attribute is not declared
     * on the custom tag.
     */
    defaultValue(value) {
        var attr = this.attr;
        attr.defaultValue = value;
    }
    /**
     * The "pattern" property allows the attribute
     * to be matched based on a simplified regular expression.
     *
     * Example:
     *
     * "pattern": "myprefix-*"
     */
    pattern(value) {
        var attr = this.attr;
        if (value === true) {
            var patternRegExp = raptorRegexp.simple(attr.name);
            attr.pattern = patternRegExp;
        }
    }

    /**
     * If "allow-expressions" is set to true (the default) then
     * the the attribute value will be parsed to find any dynamic
     * parts.
     */
    allowExpressions(value) {
        var attr = this.attr;
        attr.allowExpressions = value;
    }

    /**
     * By default, the Marko compiler maps an attribute
     * to a property by removing all dashes from the attribute
     * name and converting each character after a dash to
     * an uppercase character (e.g. "my-attr" --> "myAttr").
     *
     * Setting "preserve-name" to true will prevent this from
     * happening for the attribute.
     */
    preserveName(value) {
        var attr = this.attr;
        attr.preserveName = value;
    }
    /**
     * Declares an attribute as required. Currently, this is
     * not enforced and is only used for documentation purposes.
     *
     * Example:
     * "required": true
     */
    required(value) {
        var attr = this.attr;
        attr.required = value === true;
    }
    /**
     * This is the opposite of "preserve-name" and will result
     * in dashes being removed from the attribute if set to true.
     */
    removeDashes(value) {
        var attr = this.attr;
        attr.removeDashes = value === true;
    }
    /**
     * The description of the attribute. Only used for documentation.
     */
    description() {

    }

    /**
     * The "set-flag" property allows a "flag" to be added to a Node instance
     * at compile time if the attribute is found on the node. This is helpful
     * if an attribute uses a pattern and a transformer wants to have a simple
     * check to see if the Node has an attribute that matched the pattern.
     *
     * Example:
     *
     * "set-flag": "myCustomFlag"
     *
     * A Node instance can be checked if it has a flag set as shown below:
     *
     * if (node.hasFlag('myCustomFlag')) { ... }
     *
     *
     */
    setFlag(value) {
        var attr = this.attr;
        attr.setFlag = value;
    }
    /**
     * An attribute can be marked for ignore. Ignored attributes
     * will be ignored during compilation.
     */
    ignore(value) {
        var attr = this.attr;
        if (value === true) {
            attr.ignore = true;
        }
    }

    autocomplete(value) {
        this.attr.autocomplete = value;
    }

    enum(value) {
        this.attr.enum = value;
    }

    deprecated(value) {
        this.attr.deprecated = value;
    }
}

exports.isSupportedProperty = function(name) {
    return AttrLoader.prototype.hasOwnProperty(name);
};

exports.loadAttribute = function loadAttribute(attrName, attrProps, dependencyChain) {
    var attrLoader = new AttrLoader(dependencyChain);

    try {
        return attrLoader._load(attrName, attrProps);
    } catch(err) {
        throw createError('Unable to load attribute "' + attrName + '" (' + dependencyChain + '): ' + err, err);
    }
};
});