(window.webpackJsonp_ultimate_addons_for_gutenberg=window.webpackJsonp_ultimate_addons_for_gutenberg||[]).push([[5],{241:function(t,e,o){"use strict";var a=o(17),n=o.n(a)()((function(t){return t[1]}));n.push([t.i,"/**\r\n * Editor styles for the admin\r\n */\n#wpwrap .edit-post-visual-editor .uagb-blockquote__skin-quotation blockquote.uagb-blockquote {\n  vertical-align: baseline;\n  padding: 0;\n  margin: 0;\n  background: transparent;\n  border: 0 none;\n  outline: 0;\n  font-size: 100%;\n  font-style: normal;\n  quotes: none; }\n\n#wpwrap .edit-post-visual-editor blockquote.uagb-blockquote {\n  padding: 0;\n  margin: 0; }\n\n#wpwrap .edit-post-visual-editor .uagb-blockquote__skin-border blockquote {\n  padding-left: 10px; }\n\n#wpwrap .edit-post-visual-editor .uagb-blockquote__content,\n#wpwrap .edit-post-visual-editor cite.uagb-blockquote__author,\n#wpwrap .edit-post-visual-editor .uagb-blockquote__author {\n  font-style: normal; }\n\n#wpwrap .edit-post-visual-editor .uagb-blockquote a {\n  box-shadow: none;\n  color: #1da1f2;\n  text-decoration: none;\n  -webkit-box-shadow: none; }\n\n#wpwrap .edit-post-visual-editor .uagb-blockquote__tweet-style-classic a.uagb-blockquote__tweet-button,\n#wpwrap .edit-post-visual-editor .uagb-blockquote__tweet-style-bubble a.uagb-blockquote__tweet-button {\n  color: #fff; }\n\n#wpwrap .edit-post-visual-editor .uagb-blockquote__align-center a.uagb-blockquote__tweet-button {\n  margin: 0 auto; }\n\n.uagb-editor-preview-mode-tablet .uagb-blockquote__stack-img-tablet footer {\n  -webkit-flex-direction: column;\n  -ms-flex-direction: column;\n  flex-direction: column; }\n  .uagb-editor-preview-mode-tablet .uagb-blockquote__stack-img-tablet footer .uagb-blockquote__tweet-button {\n    align-self: flex-start; }\n\n.uagb-editor-preview-mode-mobile .uagb-blockquote__stack-img-mobile footer {\n  -webkit-flex-direction: column;\n  -ms-flex-direction: column;\n  flex-direction: column; }\n  .uagb-editor-preview-mode-mobile .uagb-blockquote__stack-img-mobile footer .uagb-blockquote__tweet-button {\n    align-self: flex-start; }\n",""]),e.a=n},477:function(t,e,o){"use strict";o.r(e);var a,n=o(4),u=o.n(n),i=o(8),l=o(1),b=o.n(l),r=o(51),s=o(102),c=o(52),d=o(101),g=o(16),_=o.n(g),p=o(241),k=0,w={injectType:"lazySingletonStyleTag",attributes:{id:"uagb-editor-styles"},insert:"head",singleton:!0},m={};m.locals=p.a.locals||{},m.use=function(){return k++||(a=_()(p.a,w)),m},m.unuse=function(){k>0&&!--k&&(a(),a=null)};var q=m,f=o(24);const v=t=>{Object(l.useLayoutEffect)(()=>(q.use(),()=>{q.unuse()}),[]),t=t.parentProps;const{className:e,setAttributes:o,attributes:a}=t,{skinStyle:n,align:g,stack:_,quoteStyle:p,enableTweet:k,iconView:w,iconSkin:m,authorImage:v,authorImgPosition:y}=a,h=Object(f.a)();return b.a.createElement("div",{className:u()(e,"uagb-block-"+t.clientId.substr(0,8),"uagb-editor-preview-mode-"+h.toLowerCase(),"uagb-blockquote__skin-"+n,"border"!==n?"uagb-blockquote__align-"+g:"","quotation"===n?"uagb-blockquote__style-"+p:"",k?`uagb-blockquote__with-tweet uagb-blockquote__tweet-style-${m} uagb-blockquote__tweet-${w}`:"","uagb-blockquote__stack-img-"+_)},b.a.createElement("blockquote",{className:"uagb-blockquote"},"quotation"===n&&b.a.createElement("span",{className:"uagb-blockquote__icon"},i.a.quote_inline_icon),b.a.createElement(r.a,{attributes:a,setAttributes:o,props:t}),b.a.createElement("footer",null,b.a.createElement("div",{className:u()("uagb-blockquote__author-wrap",""!==v?"uagb-blockquote__author-at-"+y:"")},b.a.createElement(s.a,{attributes:a}),b.a.createElement(c.a,{attributes:a,setAttributes:o,props:t})),k&&b.a.createElement(d.a,{attributes:a}))))};e.default=b.a.memo(v)}}]);