(window.webpackJsonp_ultimate_addons_for_gutenberg=window.webpackJsonp_ultimate_addons_for_gutenberg||[]).push([[25],{292:function(a,t,e){"use strict";var u=e(16),i=e.n(u)()((function(a){return a[1]}));i.push([a.i,'.uagb-faq-layout-accordion .uagb-faq-child__outer-wrap .uagb-faq-questions-button {\n  cursor: pointer; }\n\n[data-type="uagb/faq-child"] .uagb-faq-child__outer-wrap .uagb-faq-questions-button {\n  display: flex;\n  align-items: center;\n  width: auto; }\n  [data-type="uagb/faq-child"] .uagb-faq-child__outer-wrap .uagb-faq-questions-button .uagb-faq-icon-wrap {\n    display: flex;\n    align-items: center; }\n  [data-type="uagb/faq-child"] .uagb-faq-child__outer-wrap .uagb-faq-questions-button .uagb-question {\n    width: 100%;\n    margin-top: 0;\n    margin-bottom: 0; }\n\n[data-type="uagb/faq-child"] .uagb-faq-child__outer-wrap .uagb-faq-content {\n  margin: 0;\n  border-width: 0; }\n\n[data-type="uagb/faq-child"] .uagb-faq-child__outer-wrap.uagb-faq-item .uagb-icon-active,\n[data-type="uagb/faq-child"] .uagb-faq-child__outer-wrap.uagb-faq-item.uagb-faq-item-active .uagb-icon,\n[data-type="uagb/faq-child"] .uagb-faq-child__outer-wrap .uagb-faq-item .uagb-icon-active,\n[data-type="uagb/faq-child"] .uagb-faq-child__outer-wrap .uagb-faq-item.uagb-faq-item-active .uagb-icon {\n  display: none; }\n\n[data-type="uagb/faq-child"] .uagb-faq-child__outer-wrap.uagb-faq-item .uagb-icon,\n[data-type="uagb/faq-child"] .uagb-faq-child__outer-wrap.uagb-faq-item.uagb-faq-item-active .uagb-icon-active,\n[data-type="uagb/faq-child"] .uagb-faq-child__outer-wrap .uagb-faq-item .uagb-icon,\n[data-type="uagb/faq-child"] .uagb-faq-child__outer-wrap .uagb-faq-item.uagb-faq-item-active .uagb-icon-active {\n  display: flex; }\n\n[data-type="uagb/faq-child"] .uagb-faq-child__outer-wrap.uagb-faq__active.uagb-faq-item .uagb-faq-content,\n[data-type="uagb/faq-child"] .uagb-faq-child__outer-wrap .uagb-faq__active.uagb-faq-item .uagb-faq-content {\n  display: block; }\n\n[data-type="uagb/faq-child"] .uagb-faq-child__outer-wrap.uagb-faq__active.uagb-faq-item .uagb-icon,\n[data-type="uagb/faq-child"] .uagb-faq-child__outer-wrap .uagb-faq__active.uagb-faq-item .uagb-icon {\n  display: none; }\n\n[data-type="uagb/faq-child"] .uagb-faq-child__outer-wrap.uagb-faq__active.uagb-faq-item .uagb-icon-active,\n[data-type="uagb/faq-child"] .uagb-faq-child__outer-wrap .uagb-faq__active.uagb-faq-item .uagb-icon-active {\n  display: flex; }\n\n.uagb-faq-layout-grid [data-type="uagb/faq-child"] .uagb-faq-child__outer-wrap.uagb-faq__active.uagb-faq-item .uagb-icon-active {\n  display: none; }\n\n.uagb-faq-layout-grid [data-type="uagb/faq-child"] .uagb-faq-child__outer-wrap.uagb-faq__active.uagb-faq-item .uagb-icon {\n  display: none; }\n\n.uagb-faq-layout-grid [data-type="uagb/faq-child"] .uagb-faq-child__outer-wrap.uagb-faq-item .uagb-icon,\n.uagb-faq-layout-grid [data-type="uagb/faq-child"] .uagb-faq-child__outer-wrap.uagb-faq-item.uagb-faq-item-active .uagb-icon-active {\n  display: none; }\n',""]),t.a=i},530:function(a,t,e){"use strict";e.r(t);var u,i=e(4),n=e.n(i),c=e(13),b=e(1),g=e(15),o=e.n(g),l=e(292),r=0,d={injectType:"lazySingletonStyleTag",attributes:{id:"uagb-editor-styles"},insert:"head",singleton:!0},f={};f.locals=l.a.locals||{},f.use=function(){return r++||(u=o()(l.a,d)),f},f.unuse=function(){r>0&&!--r&&(u(),u=null)};var q=f,s=e(5),_=e(0),p=e.n(_);const h=a=>{Object(_.useLayoutEffect)(()=>(q.use(),()=>{q.unuse()}),[]);const t=a.state;a=a.parentProps;const{attributes:e,setAttributes:u}=a,{question:i,answer:g,icon:o,iconActive:l,layout:r,headingTag:d}=e;return p.a.createElement("div",{className:n()("uagb-faq-child__outer-wrap","uagb-faq-item","uagb-block-"+a.clientId.substr(0,8),a.isSelected&&!1!==t.isFocused?"uagb-faq__active":""),role:"tab",tabIndex:"0"},p.a.createElement(p.a.Fragment,null,p.a.createElement("div",{className:"uagb-faq-questions-button uagb-faq-questions"},"accordion"===r&&p.a.createElement(p.a.Fragment,null,p.a.createElement("span",{className:"uagb-icon uagb-faq-icon-wrap"},Object(c.a)(o)),p.a.createElement("span",{className:"uagb-icon-active uagb-faq-icon-wrap"},Object(c.a)(l))),p.a.createElement(s.RichText,{tagName:"span"!==d?d:"div",placeholder:Object(b.__)("Question"),value:i,onChange:a=>u({question:a}),className:"uagb-question",multiline:!1,allowedFormats:["core/bold","core/italic","core/strikethrough"]})),p.a.createElement(s.RichText,{className:"uagb-faq-content",tagName:"p",placeholder:Object(b.__)("Answer"),value:g,onChange:a=>u({answer:a}),multiline:!1,allowedFormats:["core/bold","core/italic","core/strikethrough","core/link"]})))};t.default=p.a.memo(h)}}]);