$_mod.def("/marko$4.0.0-rc.12/compiler/ast/Scriptlet", function(require, exports, module, __filename, __dirname) { 'use strict';

var Node = require('/marko$4.0.0-rc.12/compiler/ast/Node'/*'./Node'*/);
var adjustIndent = require('/marko$4.0.0-rc.12/compiler/util/adjustIndent'/*'../util/adjustIndent'*/);

class Scriptlet extends Node {
    constructor(def) {
        super('Scriptlet');
        this.code = def.code;
    }

    generateCode(codegen) {
        return this;
    }

    writeCode(writer) {
        var code = this.code;

        if (!code) {
            return;
        }

        code = adjustIndent(code, writer.currentIndent);

        writer.write(code);
        writer.write('\n');
    }
}

module.exports = Scriptlet;
});