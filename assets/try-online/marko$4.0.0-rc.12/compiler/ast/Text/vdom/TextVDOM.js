$_mod.def("/marko$4.0.0-rc.12/compiler/ast/Text/vdom/TextVDOM", function(require, exports, module, __filename, __dirname) { 'use strict';

const Node = require('/marko$4.0.0-rc.12/compiler/ast/Node'/*'../../Node'*/);
const Literal = require('/marko$4.0.0-rc.12/compiler/ast/Literal'/*'../../Literal'*/);
const vdomUtil = require('/marko$4.0.0-rc.12/compiler/util/vdom/index'/*'../../../util/vdom'*/);

class TextVDOM extends Node {
    constructor(def) {
        super('TextVDOM');
        this.arguments = [def.argument];
        this.isStatic = def.isStatic;
        this.escape = def.escape !== false;
        this.isHtmlOnly = true;
        this.isChild = false;
        this.createTextId = undefined;
        this.strFuncId = undefined;
    }

    generateCode(codegen) {
        var context = codegen.context;

        vdomUtil.registerOptimizer(context);

        return this;
    }

    _append(appendArgument) {
        let args = this.arguments;
        let len = args.length;
        let last = args[len-1];

        if (last instanceof Literal && appendArgument instanceof Literal) {
            last.value += appendArgument.value;
        } else {
            args.push(appendArgument);
        }
    }

    append(textVDOMToAppend) {
        if (textVDOMToAppend.escape !== this.escape) {
            return false;
        }

        if (!textVDOMToAppend.isStatic) {
            this.isStatic = false;
        }

        if (textVDOMToAppend.strFuncId) {
            this.strFuncId = textVDOMToAppend.strFuncId;
        }

        textVDOMToAppend.arguments.forEach(this._append, this);

        return true;
    }

    writeCode(writer) {
        let builder = writer.builder;
        let args = this.arguments;
        let escape = this.escape;

        var funcName = escape ? 't' : 'h';

        function writeTextArgs() {
            writer.write('(');

            for (let i=0, len=args.length; i<len; i++) {
                let arg = args[i];

                if (i !== 0) {
                    writer.write(' +\n');
                    writer.writeLineIndent();
                    writer.writeIndent();
                }

                writer.write(arg);
            }

            writer.write(')');
        }

        if (this.isChild) {
            writer.write('.');
            writer.write(builder.identifier(funcName));
        } else if (this.isStatic && this.createTextId) {
            writer.write(this.createTextId);
        } else {
            writer.write('out.');
            writer.write(builder.identifier(funcName));
        }

        writeTextArgs();
    }
}

module.exports = TextVDOM;
});