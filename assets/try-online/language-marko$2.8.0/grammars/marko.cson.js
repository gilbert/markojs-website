$_mod.def("/language-marko$2.8.0/grammars/marko.cson", {"fileTypes":["marko"],"name":"Marko","patterns":[{"include":"#scriptlet"},{"include":"#special-js-tags"},{"include":"#js-code-block"},{"include":"#component-style"},{"include":"#comment-concise-line"},{"include":"#comment-concise-block"},{"include":"#comment-html"},{"include":"#html-block-concise"},{"include":"#html-line-concise"},{"include":"#cdata"},{"include":"#doctype"},{"include":"#tag-script-concise"},{"include":"#tag-style-concise"},{"include":"#tag-concise"},{"include":"#tag-html"},{"include":"#placeholder-patterns"}],"repository":{"attr-assignment-concise":{"applyEndPatternLast":1,"begin":"(?:\\s+|[,])(?:(ref)|([a-zA-Z][a-zA-Z]*)|(data-[a-zA-Z-]*)|([_a-zA-Z0-9][a-zA-Z0-9:_.-]*))\\s*([=])\\s*","beginCaptures":{"1":{"name":"support.function.marko-attribute"},"2":{"name":"entity.other.attribute-name.html"},"3":{"name":"entity.other.attribute-name.html"},"4":{"name":"support.function.marko-attribute"},"5":{"name":"punctuation.separator.key-value.html"}},"end":"(?=([,;]|\\s|$))","patterns":[{"include":"#expression"}]},"attr-assignment-html":{"applyEndPatternLast":1,"begin":"(?:\\s+|[,])(?:(ref)|([a-zA-Z][a-zA-Z]*)|(data-[a-zA-Z0-9-]*)|([_a-zA-Z0-9][a-zA-Z0-9:_.-]*))\\s*([=])\\s*","beginCaptures":{"1":{"name":"support.function.marko-attribute"},"2":{"name":"entity.other.attribute-name.html"},"3":{"name":"entity.other.attribute-name.html"},"4":{"name":"support.function.marko-attribute"},"5":{"name":"punctuation.separator.key-value.html"}},"end":"(?=[,;]|\\s|/>|>)","patterns":[{"include":"#expression-no-gt"}]},"attr-js-block":{"applyEndPatternLast":1,"begin":"\\s\\{","beginCaptures":{"0":{"name":"punctuation.section.scope.begin.js"}},"end":"\\}","endCaptures":{"0":{"name":"punctuation.section.scope.end.js"}},"patterns":[{"include":"#js"}]},"attr-no-value":{"captures":{"1":{"name":"entity.other.attribute-name.html"},"2":{"name":"entity.other.attribute-name.html"},"3":{"name":"support.function.marko-attribute"}},"match":"\\s+(?:([a-zA-Z][a-zA-Z]*)|(data-[a-zA-Z0-9-]*)|([a-zA-Z0-9][a-zA-Z0-9:_.-]+))(?=\\s|/>|>|$)"},"attr-semicolon":{"applyEndPatternLast":1,"begin":"([;])","beginCaptures":{"1":{"name":"punctuation.terminator.statement.js"}},"end":"(?=\\n)","patterns":[{"include":"#comment-line"},{"include":"#comment-block"}]},"attr-stuff-concise":{"patterns":[{"include":"#comment-line"},{"include":"#comment-block"},{"begin":"\\s[\\[]","end":"[\\]]","patterns":[{"include":"#attr-stuff-concise"}]},{"begin":"[,]\\s*$","end":"(?=\\s)"},{"include":"#attr-with-arg"},{"include":"#attr-assignment-concise"},{"include":"#attr-no-value"},{"include":"#placeholder"},{"include":"#attr-js-block"},{"include":"#expression"},{"include":"#attr-semicolon"}]},"attr-stuff-html":{"patterns":[{"include":"#comment-block"},{"include":"#attr-with-arg"},{"include":"#attr-assignment-html"},{"include":"#attr-no-value"},{"include":"#placeholder"},{"include":"#attr-js-block"},{"include":"#expression-no-gt"},{"include":"#attr-semicolon"}]},"attr-with-arg":{"applyEndPatternLast":1,"begin":"\\s+([_a-zA-Z0-9][a-zA-Z0-9:_.-]+)(\\()","beginCaptures":{"1":{"name":"support.function.marko-attribute"},"2":{"name":"meta.brace.round.js"}},"end":"\\)","endCaptures":{"1":{"name":"meta.brace.round.js"}},"patterns":[{"include":"#expression"}]},"cdata":{"begin":"<!\\[CDATA\\[","beginCaptures":{"0":{"name":"punctuation.definition.string.begin.xml"}},"end":"]]>","endCaptures":{"0":{"name":"punctuation.definition.string.end.xml"}},"name":"string.unquoted.cdata.xml"},"comment-block":{"begin":"/\\*","beginCaptures":{"0":{"name":"punctuation.definition.comment.begin.js"}},"end":"\\*/","endCaptures":{"0":{"name":"punctuation.definition.comment.end.js"}},"name":"comment.block.js"},"comment-concise-block":{"begin":"^(\\s*)/\\*","beginCaptures":{"0":{"name":"punctuation.definition.comment.begin.js"}},"end":"\\*/.*","endCaptures":{"0":{"name":"punctuation.definition.comment.end.js"}},"name":"comment.block.js"},"comment-concise-line":{"begin":"^(\\s*)//","comment":"Single line comment (concise)","end":"$","name":"comment.line.double-slash.marko"},"comment-html":{"begin":"\\s*<!--","captures":{"0":{"name":"punctuation.definition.comment.html"}},"end":"-->","name":"comment.block.html"},"comment-line":{"begin":"(//)","beginCaptures":{"1":{"name":"punctuation.definition.comment.js"}},"end":"(?=\\n)","name":"comment.line.double-slash.js"},"component-style":{"patterns":[{"include":"#component-style-less"},{"include":"#component-style-css"}]},"component-style-css":{"applyEndPatternLast":1,"begin":"^(style)(?:\\.([a-z]+))?\\s+(\\{)","beginCaptures":{"1":{"name":"storage.type.marko.css"},"2":{"name":"storage.modifier.marko.less"},"3":{"name":"punctuation.section.scope.begin.css"}},"end":"\\}","endCaptures":{"0":{"name":"punctuation.section.scope.end.css"}},"patterns":[{"include":"source.css"}]},"component-style-less":{"applyEndPatternLast":1,"begin":"^(style)\\.(less)\\s+(\\{)","beginCaptures":{"1":{"name":"storage.type.marko.less"},"2":{"name":"storage.modifier.marko.less"},"3":{"name":"punctuation.section.scope.begin.less"}},"end":"\\}","endCaptures":{"0":{"name":"punctuation.section.scope.end.less"}},"patterns":[{"include":"source.css.less"}]},"doctype":{"begin":"<!","captures":{"0":{"name":"punctuation.definition.marko-tag.html"}},"end":">","name":"meta.tag.sgml.html","patterns":[{"begin":"(?i:DOCTYPE)","captures":{"1":{"name":"entity.name.tag.doctype.html"}},"end":"(?=>)","name":"meta.tag.sgml.doctype.html","patterns":[{"match":"\"[^\">]*\"","name":"string.quoted.double.doctype.identifiers-and-DTDs.html"}]}]},"expression":{"comment":"A JavaScript expression","patterns":[{"include":"#expression-common"},{"include":"#expression-operator-gt"}]},"expression-common":{"comment":"A JavaScript expression","patterns":[{"include":"#expression-string-single"},{"include":"#expression-string-double"},{"include":"#expression-group-parens"},{"include":"#expression-group-brackets"},{"include":"#expression-group-braces"},{"include":"#expression-constant"},{"include":"#expression-hex"},{"include":"#expression-numeric"},{"include":"#expression-operator-unary"},{"include":"#expression-operator-binary"},{"include":"#expression-operator-special"},{"include":"#expression-special-class"}]},"expression-constant":{"captures":{"1":{"name":"constant.language.boolean.true.js"},"2":{"name":"constant.language.boolean.false.js"},"3":{"name":"constant.language.infinity.js"},"4":{"name":"constant.language.nan.js"},"5":{"name":"constant.language.null.js"},"6":{"name":"constant.language.undefined.js"}},"match":"(true)|(false)|(Infinity)|(NaN)|(null)|(undefined)"},"expression-group-braces":{"applyEndPatternLast":1,"begin":"\\{","beginCaptures":{"0":{"name":"punctuation.section.scope.begin.js"}},"end":"\\}","endCaptures":{"0":{"name":"punctuation.section.scope.end.js"}},"patterns":[{"include":"#expression"}]},"expression-group-brackets":{"applyEndPatternLast":1,"begin":"\\[","beginCaptures":{"0":{"name":"meta.brace.square.js"}},"end":"\\]","endCaptures":{"0":{"name":"meta.brace.square.js"}},"patterns":[{"include":"#expression"}]},"expression-group-parens":{"applyEndPatternLast":1,"begin":"\\(","beginCaptures":{"0":{"name":"meta.brace.round.js"}},"end":"\\)","endCaptures":{"0":{"name":"meta.brace.round.js"}},"patterns":[{"include":"#expression"}]},"expression-hex":{"match":"\\b0[xX]\\h+\\b","name":"constant.numeric.hex.js"},"expression-no-gt":{"comment":"A JavaScript expression","patterns":[{"include":"#expression-common"}]},"expression-numeric":{"match":"(?x)\n\t\t\t\t(?<!\\w)\t\t\t\t\t\t\t\t\t# Ensure word boundry\n\t\t\t\t(?>\n\t\t\t\t\t(\n\t\t\t\t\t\t(0|[1-9][0-9]*)(\\.[0-9]*)?\t\t# 0 or 1 or 1. or 1.0\n\t\t\t\t\t  | \\.[0-9]+\t\t\t\t\t\t# .1\n\t\t\t\t\t)\n\t\t\t\t\t([eE][+-]?[0-9]+)?\t\t\t\t\t# Exponent\n\t\t\t\t)\n\t\t\t\t(?!\\w)\t\t\t\t\t\t\t\t\t# Ensure word boundry\n\t\t\t","name":"constant.numeric.js"},"expression-operator-binary":{"captures":{"2":{"name":"keyword.operator.js"}},"match":"(\\s+|\\b)(===|==|!==|!=|<=|<<|&&|\\|\\||<|\\+=|-=|\\*=|/=|%=|[=+*/%|&~^:])(\\s+|\\b)"},"expression-operator-gt":{"captures":{"2":{"name":"keyword.operator.js"}},"match":"(\\s+|\\b)(>=|>>|>)(\\s+|\\b)"},"expression-operator-special":{"match":"(?<!\\.|\\$)\\b(delete|in|instanceof|new|typeof\\s*|void|with)\\b(?!\\$)","name":"keyword.operator.js"},"expression-operator-unary":{"match":"\\b(!|\\+\\+)\\b|\\b\\-\\-(?<!\\s)","name":"keyword.operator.js"},"expression-special-class":{"match":"(?<!\\.|\\$)\\b(Array|Boolean|Date|Error|EvalError|Function|Number|Object|RangeError|ReferenceError|RegExp|String|SyntaxError|TypeError|URIError)\\b(?!\\$)","name":"support.class.js"},"expression-string-double":{"begin":"\"","beginCaptures":{"0":{"name":"punctuation.definition.string.begin.js"}},"end":"\"","endCaptures":{"0":{"name":"punctuation.definition.string.end.js"}},"name":"string.quoted.double.js","patterns":[{"match":"\\\\(x\\h{2}|[0-2][0-7]{0,2}|3[0-6][0-7]|37[0-7]?|[4-7][0-7]?|.)","name":"constant.character.escape.js"},{"include":"#placeholder-patterns"}]},"expression-string-single":{"begin":"'","beginCaptures":{"0":{"name":"punctuation.definition.string.begin.js"}},"end":"'","endCaptures":{"0":{"name":"punctuation.definition.string.end.js"}},"name":"string.quoted.single.js","patterns":[{"match":"\\\\(x\\h{2}|[0-2][0-7]{0,2}|3[0-6][0-7]?|37[0-7]?|[4-7][0-7]?|.)","name":"constant.character.escape.js"},{"include":"#placeholder-patterns"}]},"expression-ternary-if":{"begin":"\\?","end":":","name":"meta.ternary-if.js","patterns":[{"include":"$self"}]},"html-block-concise":{"begin":"(\\s*)(-[-]+)\\n","captures":{"2":{"name":"keyword.operator.marko"}},"end":"^(\\1\\2|(?!(\\1)))","name":"meta.section.marko-html-block","patterns":[{"include":"#cdata"},{"include":"#tag-html"},{"include":"#comment-html"},{"include":"#js-code-line"},{"include":"#js-code-block"},{"include":"#placeholder-patterns"}]},"html-line-concise":{"begin":"\\s*([-][-]+)","beginCaptures":{"1":{"name":"keyword.operator.marko"}},"end":"(?=\\n)","patterns":[{"include":"#cdata"},{"include":"#tag-html"},{"include":"#comment-html"},{"include":"#placeholder-patterns"}]},"js":{"patterns":[{"include":"#comment-line"},{"include":"#comment-block"},{"applyEndPatternLast":1,"begin":"\\{","beginCaptures":{"0":{"name":"punctuation.section.scope.begin.js"}},"end":"\\}","endCaptures":{"0":{"name":"punctuation.section.scope.end.js"}},"patterns":[{"include":"#js"}]},{"applyEndPatternLast":1,"begin":"\\(","beginCaptures":{"0":{"name":"punctuation.section.scope.begin.js"}},"end":"\\)","endCaptures":{"0":{"name":"punctuation.section.scope.end.js"}},"patterns":[{"include":"#js"}]},{"include":"#expression"},{"match":"\\b(break|case|catch|continue|default|do|else|export|finally|for|if|return|switch|throw|try|while|with|import|from|await|async)\\b","name":"keyword.control.js"},{"match":"\\b(let|var)\\b","name":"storage.type.var.js"},{"match":"(\\s+|\\b)(\\=\\>)(\\s+|\\b)","name":"storage.type.function.arrow.js"},{"match":"\\;","name":"punctuation.terminator.statement.js"},{"match":"\\b(function)\\b","name":"storage.type.function.js"},{"match":"\\b(class)\\b","name":"entity.name.type.class.js"},{"match":"\\bextends\\b","name":"entity.other.inherited-class.js"},{"match":"\\b(console|JSON)\\b","name":"entity.name.type"},{"match":"\\b(this|arguments)\\b","name":"variable.language.js"},{"begin":"([\\p{L}\\p{Nl}$_][\\p{L}\\p{Nl}$\\p{Mn}\\p{Mc}\\p{Nd}\\p{Pc}\\x{200C}\\x{200D}]*)\\s*(\\()(?=(?:[^\\(\\)]*)?\\)\\s*\\{)","beginCaptures":{"1":{"name":"entity.name.function.js"},"2":{"name":"punctuation.definition.parameters.begin.js"}},"end":"\\)","endCaptures":{"0":{"name":"punctuation.definition.parameters.END.js"}},"name":"meta.method.js"}]},"js-code-block":{"applyEndPatternLast":1,"begin":"^\\s*([$])\\s","beginCaptures":{"1":{"name":"storage.modifier.embedded.js"}},"contentName":"source.js.embedded","end":"(?=\\n)","patterns":[{"include":"#js"}]},"open-tag-end":{"begin":"(>)","beginCaptures":{"1":{"name":"punctuation.definition.tag.end.open.html"}},"comment":"Concise style tag with CSS code.","end":"(?=</)","patterns":[{"include":"#cdata"},{"include":"#comment-html"},{"include":"#scriptlet"},{"include":"#tag-html"},{"include":"#js-code-block"},{"include":"#placeholder-patterns"}]},"open-tag-end-script":{"begin":"(>)","beginCaptures":{"1":{"name":"punctuation.definition.tag.end.open.html"}},"comment":"Concise style tag with CSS code.","end":"(?=</)","patterns":[{"include":"#placeholder-patterns"},{"include":"#js"}]},"open-tag-end-style":{"begin":"(>)","beginCaptures":{"1":{"name":"punctuation.definition.tag.end.open.html"}},"comment":"Concise style tag with CSS code.","end":"(?=</)","patterns":[{"include":"#placeholder-patterns"},{"include":"source.css"}]},"placeholder":{"applyEndPatternLast":1,"begin":"[$][!]?\\{","captures":{"0":{"name":"keyword.operator.marko"}},"comment":"${ } placeholder note: should be punctuation.section.embedded.js","end":"\\}","name":"meta.section.marko-placeholder","patterns":[{"include":"#expression"}]},"placeholder-escaped":{"comment":"\\${","match":"\\\\[$][!]?[{]"},"placeholder-escaped-escaped":{"comment":"\\\\${","match":"\\\\\\\\(?=[$][!]?[{])"},"placeholder-patterns":{"patterns":[{"include":"#placeholder-escaped-escaped"},{"include":"#placeholder-escaped"},{"include":"#placeholder"}]},"scriptlet":{"applyEndPatternLast":1,"begin":"<%","captures":{"0":{"name":"keyword.operator.scriptlet.marko"}},"comment":"Scriptlet block","end":"%>","patterns":[{"include":"#js"}]},"special-js-tags":{"applyEndPatternLast":1,"begin":"^\\s*(?:(class)|(static)|(import))\\s","beginCaptures":{"1":{"name":"storage.type.class.js"},"2":{"name":"storage.modifier.marko"},"3":{"name":"storage.modifier.marko"}},"contentName":"source.js.embedded","end":"(?=\\n)","patterns":[{"include":"#js"}]},"tag-concise":{"patterns":[{"include":"#tag-name-custom-concise"},{"include":"#tag-name-concise"}]},"tag-html":{"comment":"HTML tag within the non-concise syntax","patterns":[{"include":"#tag-name-open-tag-only-html"},{"include":"#tag-name-script-html"},{"include":"#tag-name-style-html"},{"include":"#tag-name-shorthand-no-tag-name-html"},{"include":"#tag-name-shorthand-html"},{"include":"#tag-name-custom-html"},{"include":"#tag-name-html"}]},"tag-name-concise":{"applyEndPatternLast":1,"begin":"^\\s*(([a-zA-Z0-9_-]+)([.#][a-zA-Z0-9_.#-]*)?)(?=(\\s+(?![=])|$|\\())","beginCaptures":{"1":{"name":"entity.name.tag.concise"},"3":{"name":"entity.other.attribute-name.shorthand"}},"comment":"A concise tag name","end":"(?=\\n)","patterns":[{"include":"#html-line-concise"},{"include":"#attr-stuff-concise"}]},"tag-name-custom-concise":{"applyEndPatternLast":1,"begin":"^\\s*(for|if|unless|else-if|else|var|assign|macro|invoke|include|app|await|[a-zA-Z0-9_]+([:-])[a-zA-Z0-9_:-]*|[@][a-zA-Z0-9_]+)(?=(\\s+(?![=])|$|[(]))","beginCaptures":{"1":{"name":"support.function.marko-tag.concise"}},"comment":"A concise custom tag name","end":"(?=\\n)","patterns":[{"include":"#html-line-concise"},{"include":"#attr-stuff-concise"}]},"tag-name-custom-html":{"begin":"(<)(for|if|unless|else-if|else|var|assign|macro|invoke|include|app|await|[a-zA-Z0-9_]+[-:][a-zA-Z0-9\\-_:]*|[@][a-zA-Z0-9_]+)(?=(>|/>|\\s|\\())","beginCaptures":{"1":{"name":"punctuation.definition.tag.begin.open.html"},"2":{"name":"support.function.marko-tag.open.html"}},"comment":"The beginning of a custom/special HTML tag","end":"(</)(\\2)?(>)|(/>)","endCaptures":{"1":{"name":"punctuation.definition.tag.begin.close.html"},"2":{"name":"support.function.tag.close.html"},"3":{"name":"punctuation.definition.tag.end.close.html"},"4":{"name":"punctuation.definition.tag.end.self-close.html"}},"patterns":[{"include":"#attr-stuff-html"},{"include":"#open-tag-end"}]},"tag-name-html":{"begin":"(<)([a-zA-Z0-9]+)(?=(>|/>|\\s|\\())","beginCaptures":{"1":{"name":"punctuation.definition.tag.begin.open.html"},"2":{"name":"entity.name.tag.open.html"}},"comment":"The beginning of a regular HTML tag in non-concise mode","end":"(</)(\\2)?(>)|(/>)","endCaptures":{"1":{"name":"punctuation.definition.tag.begin.close.html"},"2":{"name":"entity.name.tag.close.html"},"3":{"name":"punctuation.definition.tag.end.close.html"},"4":{"name":"punctuation.definition.tag.end.self-close.html"}},"patterns":[{"include":"#attr-stuff-html"},{"include":"#open-tag-end"}]},"tag-name-open-tag-only-html":{"begin":"(<)(base|br|col|hr|embed|img|input|keygen|link|meta|param|source|track|wbr|lasso-img)(?=(>|/>|\\s|\\())","beginCaptures":{"1":{"name":"punctuation.definition.tag.begin.open.html"},"2":{"name":"entity.name.tag.open.html"}},"comment":"HTML tags that are open tag only","end":"(>|/>)","endCaptures":{"1":{"name":"punctuation.definition.tag.end.self-close.html"}},"patterns":[{"include":"#attr-stuff-html"}]},"tag-name-script-html":{"begin":"(<)(script)(?=(>|/>|\\s|\\())","beginCaptures":{"1":{"name":"punctuation.definition.tag.begin.open.html"},"2":{"name":"entity.name.tag.script.open.html"}},"comment":"HTML style tag","end":"(</)(script)?(>)|/>","endCaptures":{"1":{"name":"punctuation.definition.tag.begin.close.html"},"2":{"name":"entity.name.tag.script.close.html"},"3":{"name":"punctuation.definition.tag.end.close.html"},"4":{"name":"punctuation.definition.tag.end.self-close.html"}},"patterns":[{"include":"#attr-stuff-html"},{"include":"#open-tag-end-script"}]},"tag-name-shorthand-html":{"begin":"(<)(([a-zA-Z0-9_-]+)([#.][a-zA-Z0-9_#.:-]+))(?=(>|/>|\\s+(?![=])|\\())","beginCaptures":{"1":{"name":"punctuation.definition.tag.begin.open.html"},"3":{"name":"entity.name.tag.open.html"},"4":{"name":"entity.other.attribute-name.shorthand"}},"comment":"HTML tag with shorthand ID/class parts","end":"(</)((\\3)(\\4)?)?(>)|(/>)","endCaptures":{"1":{"name":"punctuation.definition.tag.begin.close.html"},"3":{"name":"entity.name.tag.close.html"},"4":{"name":"entity.other.attribute-name.shorthand"},"5":{"name":"punctuation.definition.tag.end.close.html"},"6":{"name":"punctuation.definition.tag.end.self-close.html"}},"patterns":[{"include":"#attr-stuff-html"},{"include":"#open-tag-end"}]},"tag-name-shorthand-no-tag-name-html":{"begin":"(<)([#.][a-zA-Z0-9_#.:-]+)(?=(>|/>|\\s|\\())","beginCaptures":{"1":{"name":"punctuation.definition.tag.begin.open.html"},"2":{"name":"entity.other.attribute-name.shorthand"}},"comment":"HTML style tag","end":"(</)(\\2|div)(>)|(/>)","endCaptures":{"1":{"name":"punctuation.definition.tag.begin.close.html"},"2":{"name":"entity.name.tag.close.html"},"3":{"name":"punctuation.definition.tag.end.close.html"},"4":{"name":"punctuation.definition.tag.end.self-close.html"}},"patterns":[{"include":"#attr-stuff-html"},{"include":"#open-tag-end"}]},"tag-name-style-html":{"begin":"(<)(style)(?=(>|/>|\\s|\\())","beginCaptures":{"1":{"name":"punctuation.definition.tag.begin.open.html"},"2":{"name":"entity.name.tag.style.open.html"}},"comment":"HTML style tag","end":"(</)(style)?(>)|(/>)","endCaptures":{"1":{"name":"punctuation.definition.tag.begin.close.html"},"2":{"name":"entity.name.tag.style.close.html"},"3":{"name":"punctuation.definition.tag.end.close.html"},"4":{"name":"punctuation.definition.tag.end.self-close.html"}},"patterns":[{"include":"#attr-stuff-html"},{"include":"#open-tag-end-style"}]},"tag-script-body-block":{"begin":"(\\s*-[-]+)","comment":"HTML script tag with nested JavaScript code","end":"(\\1)[.]*$","patterns":[{"include":"#js"}]},"tag-script-body-line":{"begin":"\\s--\\s","comment":"HTML script tag with nested JavaScript code","end":"(?-$)","patterns":[{"include":"#js"}]},"tag-script-concise":{"applyEndPatternLast":1,"begin":"^(\\s*)(script)(?=(\\s|$|\\())","beginCaptures":{"2":{"name":"entity.name.tag.script.marko.concise"}},"comment":"HTML script tag with nested JavaScript code","end":"^(?!(\\1\\s)|\\s*$)","name":"meta.tag.other","patterns":[{"include":"#attr-stuff-concise"},{"include":"#tag-script-body-line"},{"include":"#tag-script-body-block"}]},"tag-style-body-block":{"begin":"(\\s*[-][-]+)","comment":"HTML script tag with nested CSS code","end":"(\\1)[.]*$","patterns":[{"include":"source.css"}]},"tag-style-body-line":{"begin":"\\s[-][-]+\\s","comment":"HTML style tag with nested CSS code","end":"(?=\\n)","patterns":[{"include":"source.css"}]},"tag-style-concise":{"applyEndPatternLast":1,"begin":"^(\\s*)(style)(?=(\\s|$|\\())","beginCaptures":{"2":{"name":"entity.name.tag.style.marko.concise"}},"comment":"style tag with CSS code.","end":"^(?!(\\1\\s)|\\s*$)","name":"meta.tag.other.style","patterns":[{"include":"#attr-stuff-concise"},{"include":"#tag-style-body-line"},{"include":"#tag-style-body-block"}]}},"scopeName":"text.marko"});