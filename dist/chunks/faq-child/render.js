(window.webpackJsonp_ultimate_addons_for_gutenberg=window.webpackJsonp_ultimate_addons_for_gutenberg||[]).push([[17],{328:function(a,e,t){"use strict";var n=t(16),u=t.n(n)()((function(a){return a[1]}));u.push([a.i,'.uagb-faq-layout-accordion .uagb-faq-child__outer-wrap .uagb-faq-questions-button {\n  cursor: pointer; }\n\n[data-type="uagb/faq-child"] .uagb-faq-child__outer-wrap .uagb-faq-questions-button {\n  display: flex;\n  align-items: center;\n  width: 100%; }\n  [data-type="uagb/faq-child"] .uagb-faq-child__outer-wrap .uagb-faq-questions-button .uagb-faq-icon-wrap {\n    display: inline-block;\n    vertical-align: middle; }\n  [data-type="uagb/faq-child"] .uagb-faq-child__outer-wrap .uagb-faq-questions-button .uagb-question {\n    width: 100%;\n    margin-top: 0;\n    margin-bottom: 0; }\n\n[data-type="uagb/faq-child"] .uagb-faq-child__outer-wrap .uagb-faq-content p {\n  margin: 0; }\n\n[data-type="uagb/faq-child"] .uagb-faq-child__outer-wrap .uagb-faq-content {\n  border-width: 0; }\n  [data-type="uagb/faq-child"] .uagb-faq-child__outer-wrap .uagb-faq-content span {\n    display: inline-block; }\n\n[data-type="uagb/faq-child"] .uagb-faq-child__outer-wrap .uagb-faq-item .uagb-icon-active,\n[data-type="uagb/faq-child"] .uagb-faq-child__outer-wrap .uagb-faq-item.uagb-faq-item-active .uagb-icon {\n  display: none; }\n\n[data-type="uagb/faq-child"] .uagb-faq-child__outer-wrap .uagb-faq-item .uagb-icon,\n[data-type="uagb/faq-child"] .uagb-faq-child__outer-wrap .uagb-faq-item.uagb-faq-item-active .uagb-icon-active {\n  display: inline-block; }\n\n[data-type="uagb/faq-child"] .uagb-faq-child__outer-wrap.uagb-faq__active .uagb-faq-item .uagb-faq-content {\n  display: block; }\n\n[data-type="uagb/faq-child"] .uagb-faq-child__outer-wrap.uagb-faq__active .uagb-faq-item .uagb-icon {\n  display: none; }\n\n[data-type="uagb/faq-child"] .uagb-faq-child__outer-wrap.uagb-faq__active .uagb-faq-item .uagb-icon-active {\n  display: inline-block; }\n\n.uagb-faq-layout-grid [data-type="uagb/faq-child"] .uagb-faq-child__outer-wrap.uagb-faq__active .uagb-faq-item .uagb-icon-active {\n  display: none; }\n\n.uagb-faq-layout-grid [data-type="uagb/faq-child"] .uagb-faq-child__outer-wrap.uagb-faq__active .uagb-faq-item .uagb-icon {\n  display: none; }\n\n.uagb-faq-layout-grid [data-type="uagb/faq-child"] .uagb-faq-child__outer-wrap .uagb-faq-item .uagb-icon,\n.uagb-faq-layout-grid [data-type="uagb/faq-child"] .uagb-faq-child__outer-wrap .uagb-faq-item.uagb-faq-item-active .uagb-icon-active {\n  display: none; }\n',""]),e.a=u},529:function(a,e,t){"use strict";t.r(e);var n,u=t(3),i=t.n(u),c=t(11),o=t(2),l=t(15),b=t.n(l),r=t(328),g=0,d={injectType:"lazySingletonStyleTag",attributes:{id:"uagb-editor-styles"},insert:"head",singleton:!0},f={};f.locals=r.a.locals||{},f.use=function(){return g++||(n=b()(r.a,d)),f},f.unuse=function(){g>0&&!--g&&(n(),n=null)};var s=f,q=t(5),p=t(1),_=t.n(p),h=function(a){Object(p.useLayoutEffect)((function(){return s.use(),function(){s.unuse()}}),[]);var e=a.state,t=a=a.parentProps,n=t.attributes,u=t.setAttributes,l=n.question,b=n.answer,r=n.icon,g=n.iconActive,d=n.layout,f=n.headingTag;return _.a.createElement("div",{className:i()("uagb-faq-child__outer-wrap","uagb-block-".concat(a.clientId.substr(0,8)),a.isSelected&&!1!==e.isFocused?"uagb-faq__active":"")},_.a.createElement("div",{className:"uagb-faq-item",role:"tab",tabIndex:"0"},_.a.createElement("div",{className:"uagb-faq-questions-button uagb-faq-questions"},"accordion"===d&&_.a.createElement(_.a.Fragment,null,_.a.createElement("span",{className:"uagb-icon uagb-faq-icon-wrap"},Object(c.a)(r)),_.a.createElement("span",{className:"uagb-icon-active uagb-faq-icon-wrap"},Object(c.a)(g))),_.a.createElement(q.RichText,{tagName:"span"!=f?f:"div",placeholder:Object(o.__)("Question"),value:l,onChange:function(a){return u({question:a})},className:"uagb-question",multiline:!1,allowedFormats:["core/bold","core/italic","core/strikethrough"]})),_.a.createElement("div",{className:"uagb-faq-content"},_.a.createElement("span",null,_.a.createElement(q.RichText,{tagName:"p",placeholder:Object(o.__)("Answer"),value:b,onChange:function(a){return u({answer:a})},multiline:!1,allowedFormats:["core/bold","core/italic","core/strikethrough","core/link"]})))))};e.default=_.a.memo(h)}}]);