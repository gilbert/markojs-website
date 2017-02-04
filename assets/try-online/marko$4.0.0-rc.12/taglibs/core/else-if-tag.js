$_mod.def("/marko$4.0.0-rc.12/taglibs/core/else-if-tag", function(require, exports, module, __filename, __dirname) { module.exports = function nodeFactory(el, context) {
    var argument = el.argument;
    var attributes = el.attributes;


    if (!argument) {
        context.addError('Invalid <else-if> tag. Argument is missing. Example; <if(foo === true)>');
        return el;
    }

    if (attributes.length) {
        context.addError('Invalid <else-if> tag. Attributes not allowed.');
        return el;
    }

    var test;
    try {
        test = context.builder.parseExpression(argument);
    } catch(e) {
        test = context.builder.literalFalse();
        context.addError('Invalid expression for else-if statement:\n' + e.message);
    }

    var elseIfStatement = context.builder.elseIfStatement(test);
    return elseIfStatement;
};
});