(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{332:function(e,t,o){"use strict";o.r(t);var a=o(0),n=wp.blockEditor.RichText,r=wp.blocks.createBlock;t.default=function(e){var t=e.attributes,o=e.setAttributes,c=e.props;return"not_set"!==o?React.createElement(n,{tagName:"div",value:t.author,placeholder:Object(a.__)("Author","ultimate-addons-for-gutenberg"),className:"uagb-blockquote__author",onChange:function(e){return o({author:e})},onMerge:c.mergeBlocks,onSplit:c.insertBlocksAfter?function(e,t){o({content:e});for(var a=arguments.length,n=new Array(a>2?a-2:0),u=2;u<a;u++)n[u-2]=arguments[u];c.insertBlocksAfter([].concat(n,[r("core/paragraph",{content:t})]))}:void 0,onRemove:function(){return c.onReplace([])}}):React.createElement(n.Content,{tagName:"cite",value:t.author,className:"uagb-blockquote__author"})}}}]);