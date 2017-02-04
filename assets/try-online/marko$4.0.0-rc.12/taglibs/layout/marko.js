$_mod.def("/marko$4.0.0-rc.12/taglibs/layout/marko", {
    "<layout-use>": {
        "@__template": "template",
        "@__data": "template",
        "@*": {
            "remove-dashes": true,
            "type": "string"
        },
        "renderer": "./use-tag",
        "body-function": "getContent(__layoutHelper)",
        "transformer": "./use-tag-transformer.js",
        "autocomplete": [
            {
                "snippet": "layout-use(\"${1:./path/to/template.marko}\")",
                "descriptionMoreURL": "http://markojs.com/docs/marko/layout-taglib/#<code>&ltlayout-use><code>"
            },
            {
                "descriptionMoreURL": "http://markojs.com/docs/marko/layout-taglib/#<code>&ltlayout-use><code>"
            }
        ]
    },
    "<layout-put>": {
        "@into": "string",
        "@value": "string",
        "renderer": "./put-tag",
        "import-var": {
            "layout": "__layoutHelper"
        },
        "autocomplete": [
            {
                "snippet": "layout-put into=\"${1:name}\"",
                "descriptionMoreURL": "http://markojs.com/docs/marko/layout-taglib/#<code>&ltlayout-put><code>"
            },
            {
                "descriptionMoreURL": "http://markojs.com/docs/marko/layout-taglib/#<code>&ltlayout-put><code>"
            }
        ]
    },
    "<layout-placeholder>": {
        "@name": "string",
        "renderer": "./placeholder-tag",
        "import-var": {
            "content": "data.layoutContent"
        },
        "autocomplete": [
            {
                "snippet": "layout-placeholder name=\"${1:name}\"",
                "descriptionMoreURL": "http://markojs.com/docs/marko/layout-taglib/#<code>&ltlayout-placeholder><code>"
            },
            {
                "descriptionMoreURL": "http://markojs.com/docs/marko/layout-taglib/#<code>&ltlayout-placeholder><code>"
            }
        ]
    }
});