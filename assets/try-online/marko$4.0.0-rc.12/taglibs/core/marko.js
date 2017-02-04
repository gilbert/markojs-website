$_mod.def("/marko$4.0.0-rc.12/taglibs/core/marko", {
    "<assign>": {
        "code-generator": "./assign-tag",
        "open-tag-only": true,
        "autocomplete": [
            {
                "snippet": "assign ${1:varName}=${2:value}",
                "descriptionMoreURL": "http://markojs.com/docs/marko/language-guide/#variables"
            }
        ]
    },
    "<class>": {
        "code-generator": "./class-tag"
    },
    "<else>": {
        "node-factory": "./else-tag",
        "attributes": {},
        "autocomplete": [
            {
                "descriptionMoreURL": "http://markojs.com/docs/marko/language-guide/#ifelse-ifelse"
            }
        ]
    },
    "<else-if>": {
        "node-factory": "./else-if-tag",
        "attributes": {},
        "autocomplete": [
            {
                "snippet": "else-if(${1:condition})",
                "descriptionMoreURL": "http://markojs.com/docs/marko/language-guide/#ifelse-ifelse"
            },
            {
                "snippet": "else-if",
                "descriptionMoreURL": "http://markojs.com/docs/marko/language-guide/#ifelse-ifelse"
            }
        ]
    },
    "<for>": {
        "code-generator": "./for-tag",
        "attributes": {},
        "autocomplete": [
            {
                "snippet": "for(${1:var} in ${2:array})",
                "descriptionMoreURL": "http://markojs.com/docs/marko/language-guide/#for"
            },
            {
                "snippet": "for(${1:var} in ${2:array}) | status-var=${3:loop}",
                "descriptionMoreURL": "http://markojs.com/docs/marko/language-guide/#loop-status-variable"
            },
            {
                "snippet": "for(${1:name},${2:value} in ${3:object})",
                "descriptionMoreURL": "http://markojs.com/docs/marko/language-guide/#property-looping"
            },
            {
                "snippet": "for(${1:init}; ${2:test}; ${3:update})",
                "descriptionMoreURL": "http://markojs.com/docs/marko/language-guide/#native-javascript-for-loop"
            },
            {
                "snippet": "for(${1:var} from ${2:start} to ${3:end})",
                "descriptionMoreURL": "http://markojs.com/docs/marko/language-guide/#range-looping"
            },
            {
                "snippet": "for",
                "descriptionMoreURL": "http://markojs.com/docs/marko/language-guide/#for"
            }
        ]
    },
    "<function>": {
        "code-generator": "./function-tag"
    },
    "<if>": {
        "node-factory": "./if-tag",
        "attributes": {},
        "autocomplete": [
            {
                "snippet": "if(${1:condition})",
                "descriptionMoreURL": "http://markojs.com/docs/marko/language-guide/#ifelse-ifelse"
            },
            {
                "descriptionMoreURL": "http://markojs.com/docs/marko/language-guide/#ifelse-ifelse"
            }
        ]
    },
    "<import>": {
        "code-generator": "./import-tag",
        "parse-options": {
            "relaxRequireCommas": true
        }
    },
    "<include>": {
        "renderer": "./include-tag",
        "transformer": "./include-tag-transformer",
        "autocomplete": [
            {
                "displayText": "include(<template>)",
                "snippet": "include(${1:\"./target.marko\"})",
                "descriptionMoreURL": "http://markojs.com/docs/marko/language-guide/#includes"
            },
            {
                "descriptionMoreURL": "http://markojs.com/docs/marko/language-guide/#includes"
            }
        ]
    },
    "<include-html>": {
        "code-generator": "./include-html-tag",
        "autocomplete": [
            {
                "displayText": "include-html(<path>)",
                "snippet": "include-html(${1:\"./foo.html\"})",
                "descriptionMoreURL": "http://markojs.com/docs/marko/language-guide/#includes"
            },
            {
                "descriptionMoreURL": "http://markojs.com/docs/marko/language-guide/#includes"
            }
        ]
    },
    "<include-text>": {
        "code-generator": "./include-text-tag",
        "autocomplete": [
            {
                "displayText": "include-text(<path>)",
                "snippet": "include-text(${1:\"./foo.txt\"})",
                "descriptionMoreURL": "http://markojs.com/docs/marko/language-guide/#includes"
            },
            {
                "descriptionMoreURL": "http://markojs.com/docs/marko/language-guide/#includes"
            }
        ]
    },
    "<invoke>": {
        "code-generator": "./invoke-tag",
        "autocomplete": [
            {
                "displayText": "invoke <function_call>",
                "snippet": "invoke ${1:foo()}",
                "descriptionMoreURL": "http://markojs.com/docs/marko/language-guide/#invoke"
            },
            {
                "descriptionMoreURL": "http://markojs.com/docs/marko/language-guide/#invoke"
            }
        ]
    },
    "<macro>": {
        "node-factory": "./macro-tag",
        "autocomplete": [
            {
                "displayText": "macro <name>(<parmas>)",
                "snippet": "macro ${1:name}(${2:param1, param2})",
                "descriptionMoreURL": "http://markojs.com/docs/marko/language-guide/#macros"
            },
            {
                "descriptionMoreURL": "http://markojs.com/docs/marko/language-guide/#macros"
            }
        ]
    },
    "<macro-body>": {
        "code-generator": "./macro-body-tag",
        "autocomplete": [
            {
                "descriptionMoreURL": "http://markojs.com/docs/marko/language-guide/#macros",
                "openTagOnly": true
            }
        ]
    },
    "<marko-preserve-whitespace>": {
        "code-generator": "./marko-preserve-whitespace-tag",
        "preserve-whitespace": true,
        "autocomplete": [
            {
                "descriptionMoreURL": "http://markojs.com/docs/marko/language-guide/#whitespace"
            }
        ]
    },
    "<pre>": {
        "preserve-whitespace": true
    },
    "<script>": {
        "preserve-whitespace": true,
        "@marko-init": "boolean",
        "@*": {
            "ignore": true
        },
        "autocomplete": [
            {
                "snippet": "script template-helpers",
                "descriptionMoreURL": "http://markojs.com/docs/marko/language-guide/#helpers"
            }
        ]
    },
    "<static>": {
        "code-generator": "./static-tag"
    },
    "<style>": {
        "preserve-whitespace": true
    },
    "<textarea>": {
        "preserve-whitespace": true
    },
    "<unless>": {
        "node-factory": "./unless-tag",
        "autocomplete": [
            {
                "snippet": "unless(${1:condition})",
                "descriptionMoreURL": "http://markojs.com/docs/marko/language-guide/#unlesselse-ifelse"
            },
            {
                "descriptionMoreURL": "http://markojs.com/docs/marko/language-guide/#unlesselse-ifelse"
            }
        ]
    },
    "<var>": {
        "node-factory": "./var-tag",
        "autocomplete": [
            {
                "snippet": "var ${1:varName}=${2:value}",
                "openTagOnly": true,
                "descriptionMoreURL": "http://markojs.com/docs/marko/language-guide/#variables"
            },
            {
                "descriptionMoreURL": "http://markojs.com/docs/marko/language-guide/#variables"
            }
        ]
    },
    "<while>": {
        "code-generator": "./while-tag",
        "autocomplete": [
            {
                "snippet": "while(${1:condition})",
                "descriptionMoreURL": "http://markojs.com/docs/marko/language-guide/#looping"
            },
            {
                "descriptionMoreURL": "http://markojs.com/docs/marko/language-guide/#looping"
            }
        ]
    },
    "<*>": {
        "@body-only-if": {
            "type": "statement",
            "autocomplete": [
                {
                    "snippet": "body-only-if(${1:condition})",
                    "descriptionMoreURL": "http://markojs.com/docs/marko/language-guide/#body-only-if"
                },
                {
                    "descriptionMoreURL": "http://markojs.com/docs/marko/language-guide/#body-only-if"
                }
            ]
        },
        "@if": {
            "type": "statement",
            "autocomplete": [
                {
                    "snippet": "if(${1:condition})",
                    "descriptionMoreURL": "http://markojs.com/docs/marko/language-guide/#ifelse-ifelse"
                },
                {
                    "descriptionMoreURL": "http://markojs.com/docs/marko/language-guide/#ifelse-ifelse"
                }
            ]
        },
        "@else-if": {
            "type": "statement",
            "autocomplete": [
                {
                    "snippet": "else-if(${1:condition})",
                    "descriptionMoreURL": "http://markojs.com/docs/marko/language-guide/#ifelse-ifelse"
                },
                {
                    "descriptionMoreURL": "http://markojs.com/docs/marko/language-guide/#ifelse-ifelse"
                }
            ]
        },
        "@else": "statement",
        "@for": {
            "type": "statement",
            "autocomplete": [
                {
                    "snippet": "for(${1:var} in ${2:array})",
                    "descriptionMoreURL": "http://markojs.com/docs/marko/language-guide/#for"
                },
                {
                    "snippet": "for(${1:var} in ${2:array}) | status-var=${3:loop}",
                    "descriptionMoreURL": "http://markojs.com/docs/marko/language-guide/#loop-status-variable"
                },
                {
                    "snippet": "for(${1:name},${2:value} in ${3:object})",
                    "descriptionMoreURL": "http://markojs.com/docs/marko/language-guide/#property-looping"
                },
                {
                    "snippet": "for(${1:init}; ${2:test}; ${3:update})",
                    "descriptionMoreURL": "http://markojs.com/docs/marko/language-guide/#native-javascript-for-loop"
                },
                {
                    "snippet": "for(${1:var} from ${2:start} to ${3:end})",
                    "descriptionMoreURL": "http://markojs.com/docs/marko/language-guide/#range-looping"
                },
                {
                    "descriptionMoreURL": "http://markojs.com/docs/marko/language-guide/#for"
                }
            ]
        },
        "@include": {
            "autocomplete": [
                {
                    "displayText": "include(<template>)",
                    "snippet": "include(${1:\"./target.marko\"})",
                    "descriptionMoreURL": "http://markojs.com/docs/marko/language-guide/#includes"
                },
                {
                    "displayText": "include(data.renderBody)",
                    "snippet": "include(data.renderBody)",
                    "descriptionMoreURL": "http://markojs.com/docs/marko/language-guide/#includes"
                },
                {
                    "descriptionMoreURL": "http://markojs.com/docs/marko/language-guide/#includes"
                }
            ]
        },
        "@while": {
            "type": "statement",
            "autocomplete": [
                {
                    "snippet": "while(${1:condition})",
                    "descriptionMoreURL": "http://markojs.com/docs/marko/language-guide/#looping"
                },
                {
                    "descriptionMoreURL": "http://markojs.com/docs/marko/language-guide/#looping"
                }
            ]
        },
        "transformer": {
            "path": "./core-transformer",
            "priority": 0
        }
    }
}
);