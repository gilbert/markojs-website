$_mod.def("/htmljs-parser$2.3.0/html-tags", function(require, exports, module, __filename, __dirname) { var openTagOnly = {};

[
    'base',
    'br',
    'col',
    'hr',
    'embed',
    'img',
    'input',
    'keygen',
    'link',
    'meta',
    'param',
    'source',
    'track',
    'wbr'
].forEach(function(tagName) {
    openTagOnly[tagName] = true;
});

// [
//     'a',
//     'abbr',
//     'address',
//     'area',
//     'article',
//     'aside',
//     'audio',
//     'b',
//     'bdi',
//     'bdo',
//     'blockquote',
//     'body',
//     'button',
//     'canvas',
//     'caption',
//     'cite',
//     'code',
//     'colgroup',
//     'command',
//     'datalist',
//     'dd',
//     'del',
//     'details',
//     'dfn',
//     'div',
//     'dl',
//     'dt',
//     'em',
//     'fieldset',
//     'figcaption',
//     'figure',
//     'footer',
//     'form',
//     'h1',
//     'h2',
//     'h3',
//     'h4',
//     'h5',
//     'h6',
//     'head',
//     'header',
//     'hgroup',
//     'html',
//     'i',
//     'iframe',
//     'ins',
//     'kbd',
//     'label',
//     'legend',
//     'li',
//     'map',
//     'mark',
//     'menu',
//     'meter',
//     'nav',
//     'noscript',
//     'object',
//     'ol',
//     'optgroup',
//     'option',
//     'output',
//     'p',
//     'pre',
//     'progress',
//     'q',
//     'rp',
//     'rt',
//     'ruby',
//     's',
//     'samp',
//     'script',
//     'section',
//     'select',
//     'small',
//     'span',
//     'strong',
//     'style',
//     'sub',
//     'summary',
//     'sup',
//     'table',
//     'tbody',
//     'td',
//     'textarea',
//     'tfoot',
//     'th',
//     'thead',
//     'time',
//     'title',
//     'tr',
//     'u',
//     'ul',
//     'var',
//     'video',
//     'wbr'
// ].forEach(function(tagName) {
//     openTagOnly[tagName] = {
//         requireClosingTag: true
//     };
// });

exports.isOpenTagOnly = function(tagName) {
    return openTagOnly.hasOwnProperty(tagName);
};
});