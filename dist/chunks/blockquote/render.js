(window.webpackJsonp_ultimate_addons_for_gutenberg=window.webpackJsonp_ultimate_addons_for_gutenberg||[]).push([[4],{343:function(t,e,o){"use strict";var a=o(15),n=o.n(a)()((function(t){return t[1]}));n.push([t.i,"/**\r\n * Editor styles for the admin\r\n */\n#wpwrap .edit-post-visual-editor .uagb-blockquote__skin-quotation blockquote.uagb-blockquote {\n  vertical-align: baseline;\n  padding: 0;\n  margin: 0;\n  background: transparent;\n  border: 0 none;\n  outline: 0;\n  font-size: 100%;\n  font-style: normal;\n  quotes: none; }\n\n#wpwrap .edit-post-visual-editor blockquote.uagb-blockquote {\n  padding: 0;\n  margin: 0; }\n\n#wpwrap .edit-post-visual-editor .uagb-blockquote__skin-border blockquote {\n  padding-left: 10px; }\n\n#wpwrap .edit-post-visual-editor .uagb-blockquote__content,\n#wpwrap .edit-post-visual-editor cite.uagb-blockquote__author,\n#wpwrap .edit-post-visual-editor .uagb-blockquote__author {\n  font-style: normal; }\n\n#wpwrap .edit-post-visual-editor .uagb-blockquote a {\n  box-shadow: none;\n  color: #1da1f2;\n  text-decoration: none;\n  -webkit-box-shadow: none; }\n\n#wpwrap .edit-post-visual-editor .uagb-blockquote__tweet-style-classic a.uagb-blockquote__tweet-button,\n#wpwrap .edit-post-visual-editor .uagb-blockquote__tweet-style-bubble a.uagb-blockquote__tweet-button {\n  color: #fff; }\n\n#wpwrap .edit-post-visual-editor .uagb-blockquote__align-center a.uagb-blockquote__tweet-button {\n  margin: 0 auto; }\n\n.uagb-editor-preview-mode-tablet .uagb-blockquote__stack-img-tablet footer {\n  -webkit-flex-direction: column;\n  -ms-flex-direction: column;\n  flex-direction: column; }\n  .uagb-editor-preview-mode-tablet .uagb-blockquote__stack-img-tablet footer .uagb-blockquote__tweet-button {\n    align-self: flex-start; }\n\n.uagb-editor-preview-mode-mobile .uagb-blockquote__stack-img-mobile footer {\n  -webkit-flex-direction: column;\n  -ms-flex-direction: column;\n  flex-direction: column; }\n  .uagb-editor-preview-mode-mobile .uagb-blockquote__stack-img-mobile footer .uagb-blockquote__tweet-button {\n    align-self: flex-start; }\n",""]),e.a=n},581:function(t,e,o){"use strict";o.r(e);var a,n=o(4),u=o.n(n),i=o(6),l=o(1),c=o.n(l),r=o(54),b=o(56),s=o(55),_=o(68),d=o(14),g=o.n(d),p=o(343),k=0,w={injectType:"lazySingletonStyleTag",attributes:{id:"uagb-editor-styles"},insert:"head",singleton:!0},m={};m.locals=p.a.locals||{},m.use=function(){return k++||(a=g()(p.a,w)),m},m.unuse=function(){k>0&&!--k&&(a(),a=null)};var q=m,f=function(t){Object(l.useLayoutEffect)((function(){return q.use(),function(){q.unuse()}}),[]);var e=t=t.parentProps,o=e.className,a=e.setAttributes,n=e.attributes,d=e.deviceType,g=n.skinStyle,p=n.align,k=n.stack,w=n.quoteStyle,m=n.enableTweet,f=n.iconView,v=n.iconSkin,y=n.authorImage,E=n.authorImgPosition;return c.a.createElement("div",{className:u()(o,"uagb-blockquote__outer-wrap","uagb-block-".concat(t.clientId.substr(0,8)),"uagb-editor-preview-mode-".concat(d.toLowerCase()))},c.a.createElement("div",{className:u()("uagb-blockquote__wrap","uagb-blockquote__skin-".concat(g),"border"!==g?"uagb-blockquote__align-".concat(p):"","quotation"===g?"uagb-blockquote__style-".concat(w):"",m?"uagb-blockquote__with-tweet uagb-blockquote__tweet-style-".concat(v," uagb-blockquote__tweet-").concat(f):"","uagb-blockquote__stack-img-".concat(k))},c.a.createElement("blockquote",{className:"uagb-blockquote"},"quotation"===g&&c.a.createElement("div",{className:"uagb-blockquote__icon-wrap"},c.a.createElement("span",{className:"uagb-blockquote__icon"},i.a.quote_inline_icon)," "),c.a.createElement("div",{className:"uagb-blockquote__content-wrap"},c.a.createElement(r.a,{attributes:n,setAttributes:a,props:t}),c.a.createElement("footer",null,c.a.createElement("div",{className:u()("uagb-blockquote__author-wrap",""!==y?"uagb-blockquote__author-at-".concat(E):"")},c.a.createElement(b.a,{attributes:n}),c.a.createElement(s.a,{attributes:n,setAttributes:a,props:t})),m&&c.a.createElement(_.a,{attributes:n}))))))};e.default=c.a.memo(f)}}]);