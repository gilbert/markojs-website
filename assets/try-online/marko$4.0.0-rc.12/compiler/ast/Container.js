$_mod.def("/marko$4.0.0-rc.12/compiler/ast/Container", function(require, exports, module, __filename, __dirname) { 'use strict';

class Container {
    constructor(node) {
        this.node = node;
    }

    toJSON() {
        return this.items;
    }
}

module.exports = Container;
});