$_mod.def("/marko$4.0.0-rc.12/widgets/taglib/marko", {
    "<*>": {
        "@$w": {
            "target-property": null,
            "autocomplete": []
        },
        "@w-bind": {
            "type": "string",
            "preserve-name": true,
            "autocomplete": [],
            "deprecated": true
        },
        "@w-scope": {
            "type": "expression",
            "preserve-name": true,
            "autocomplete": [],
            "deprecated": true
        },
        "@w-config": {
            "type": "expression",
            "preserve-name": true,
            "deprecated": true
        },
        "@for-ref": {
            "type": "string",
            "preserve-name": true
        },
        "@ref": {
            "type": "string",
            "preserve-name": true,
            "autocomplete": [
                {
                    "displayText": "ref=\"<method>\"",
                    "snippet": "ref=\"${1:method}\"",
                    "descriptionMoreURL": "http://markojs.com/docs/marko-widgets/get-started/#referencing-nested-widgets"
                },
                {
                    "descriptionMoreURL": "http://markojs.com/docs/marko-widgets/get-started/#referencing-nested-widgets"
                }
            ]
        },
        "@w-for": {
            "type": "string",
            "preserve-name": true,
            "autocomplete": [],
            "deprecated": true
        },
        "@w-id": {
            "type": "string",
            "preserve-name": true,
            "autocomplete": [],
            "deprecated": true
        },
        "@on*": {
            "pattern": true,
            "type": "statement",
            "allow-expressions": true,
            "preserve-name": true,
            "set-flag": "hasWidgetEvents",
            "autocomplete": [
                {
                    "displayText": "on<event>(\"<method>\")",
                    "snippet": "on${1:Click}(\"handle${2:Button}${1:Click}\")",
                    "descriptionMoreURL": "http://markojs.com/docs/marko-widgets/get-started/#adding-dom-event-listeners"
                }
            ]
        },
        "@w-on*": {
            "pattern": true,
            "type": "string",
            "allow-expressions": true,
            "preserve-name": true,
            "set-flag": "hasWidgetEvents",
            "autocomplete": [],
            "deprecated": true
        },
        "@w-body": {
            "preserve-name": true,
            "autocomplete": [],
            "deprecated": true
        },
        "@w-preserve": {
            "type": "flag",
            "preserve-name": true,
            "autocomplete": [],
            "deprecated": true
        },
        "@w-preserve-body": {
            "type": "flag",
            "preserve-name": true,
            "autocomplete": [],
            "deprecated": true
        },
        "@w-preserve-if": {
            "preserve-name": true,
            "autocomplete": []
        },
        "@w-preserve-body-if": {
            "preserve-name": true,
            "autocomplete": [],
            "deprecated": true
        },
        "@no-update": {
            "type": "flag",
            "preserve-name": true,
            "autocomplete": [
                {
                    "descriptionMoreURL": "http://markojs.com/docs/marko-widgets/#preserving-dom-nodes-during-re-render"
                }
            ]
        },
        "@no-update-body": {
            "type": "flag",
            "preserve-name": true,
            "autocomplete": [
                {
                    "descriptionMoreURL": "http://markojs.com/docs/marko-widgets/#preserving-dom-nodes-during-re-render"
                }
            ]
        },
        "@no-update-if": {
            "preserve-name": true,
            "autocomplete": [
                {
                    "snippet": "no-update-if(${1:condition})",
                    "descriptionMoreURL": "http://markojs.com/docs/marko-widgets/#preserving-dom-nodes-during-re-render"
                }
            ]
        },
        "@no-update-body-if": {
            "preserve-name": true,
            "autocomplete": [
                {
                    "snippet": "no-update-body-if(${1:condition})",
                    "descriptionMoreURL": "http://markojs.com/docs/marko-widgets/#preserving-dom-nodes-during-re-render"
                }
            ]
        },
        "@w-preserve-attrs": {
            "type": "string",
            "preserve-name": true,
            "autocomplete": [],
            "deprecated": true
        },
        "transformer": "./widgets-transformer.js"
    },
    "<_widget>": {
        "code-generator": "./widget-tag.js",
        "autocomplete": []
    },
    "<init-widgets>": {
        "renderer": "./init-widgets-tag.js",
        "@immediate": "boolean"
    },
    "<w-preserve>": {
        "renderer": "./preserve-tag.js",
        "@id": "string",
        "@if": "expression",
        "@body-only": "expression",
        "autocomplete": [],
        "deprecated": true
    },
    "<no-update>": {
        "renderer": "./preserve-tag.js",
        "@id": "string",
        "@if": "expression",
        "@body-only": "expression",
        "autocomplete": []
    },
    "<widget-types>": {
        "code-generator": "./widget-types-tag.js",
        "@*": "string",
        "autocomplete": [],
        "deprecated": true
    },
    "<body>": {
        "transformer": "./body-transformer.js"
    },
    "transformer": "./widgets-transformer.js"
}
);