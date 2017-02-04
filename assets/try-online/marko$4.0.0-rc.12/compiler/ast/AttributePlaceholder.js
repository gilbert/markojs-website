$_mod.def("/marko$4.0.0-rc.12/compiler/ast/AttributePlaceholder", function(require, exports, module, __filename, __dirname) { 'use strict';

var Node = require('/marko$4.0.0-rc.12/compiler/ast/Node'/*'./Node'*/);

class AttributePlaceholder extends Node {
    constructor(def) {
        super('AttributePlaceholder');
        this.value = def.value;
        this.escape = def.escape;
    }

    generateCode(codegen) {
        this.value = codegen.generateCode(this.value);
        return this;
    }

    writeCode(writer) {
        writer.write(this.value);
    }

    walk(walker) {
        this.value = walker.walk(this.value);
    }

    isCompoundExpression() {
        return this.value.isCompoundExpression();
    }

    /**
     * "noOutput" should be true if the Node.js does not result in any HTML or Text output
     */
    get noOutput() {
        return this.value.noOutput;
    }
}

module.exports = AttributePlaceholder;
});