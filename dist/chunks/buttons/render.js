(window.webpackJsonp_ultimate_addons_for_gutenberg=window.webpackJsonp_ultimate_addons_for_gutenberg||[]).push([[9],{232:function(t,n,e){"use strict";var a=e(18),o=e.n(a)()((function(t){return t[1]}));o.push([t.i,'/**\r\n * Editor styles for the admin\r\n */\n.uagb-buttons__outer-wrap .uagb-buttons__wrap.uagb-buttons-stack-desktop .block-list-appender {\n  width: 60px; }\n\n.uagb-buttons__outer-wrap .block-list-appender {\n  margin-top: 24px;\n  margin-bottom: 24px;\n  margin-left: 10px; }\n\n.uagb-buttons__outer-wrap .uagb-button__wrapper {\n  display: flex; }\n  .uagb-buttons__outer-wrap .uagb-button__wrapper div {\n    display: inline-flex; }\n\n[data-type="uagb/buttons"] .block-editor-inner-blocks > .block-editor-block-list__layout {\n  display: flex;\n  justify-content: center;\n  -webkit-box-pack: center;\n  -ms-flex-pack: center;\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  align-items: center; }\n\n.wp-block[data-type="uagb/buttons"][data-btn-width="full"] .block-editor-inner-blocks,\n.wp-block[data-type="uagb/buttons"][data-btn-width="full"] .wp-block[data-type="uagb/buttons-child"] {\n  width: 100%; }\n\n.wp-block[data-type="uagb/buttons"][data-btn-width="full"] .block-editor-block-list__layout {\n  flex-grow: 1;\n  justify-content: space-between; }\n\n.wp-block[data-type="uagb/buttons"][data-btn-width="full"] .uagb-buttons-repeater {\n  justify-content: center; }\n  .wp-block[data-type="uagb/buttons"][data-btn-width="full"] .uagb-buttons-repeater .block-editor-rich-text__editable {\n    justify-content: center;\n    text-align: center; }\n\n[data-type="uagb/buttons"] .block-editor-inner-blocks > .block-editor-block-list__layout > .wp-block {\n  width: auto;\n  padding-right: 0;\n  padding-left: 0;\n  margin-right: 10px;\n  margin-left: 10px; }\n',""]),n.a=o},519:function(t,n,e){"use strict";e.r(n);var a,o=e(3),u=e.n(o),r=e(4),b=e(1),l=e.n(b),i=e(17),c=e.n(i),s=e(232),p=0,d={injectType:"lazySingletonStyleTag",attributes:{id:"uagb-editor-styles"},insert:"head",singleton:!0},g={};g.locals=s.a.locals||{},g.use=function(){return p++||(a=c()(s.a,d)),g},g.unuse=function(){p>0&&!--p&&(a(),a=null)};var k=g,w=["uagb/buttons-child"],_=function(t){Object(b.useLayoutEffect)((function(){return k.use(),function(){k.unuse()}}),[]);var n=t=t.parentProps,e=n.attributes,a=n.deviceType,o=e.className,i=e.btn_count,c=e.buttons,s=e.stack,p=Object(b.useMemo)((function(){for(var t=[],n=0;n<i;n++)t.push(["uagb/buttons-child",c[n]]);return t}),[i,c]);return l.a.createElement("div",{className:u()(o,"uagb-buttons__outer-wrap","uagb-editor-preview-mode-".concat(a.toLowerCase()),"uagb-block-".concat(t.clientId.substr(0,8)))},l.a.createElement("div",{className:u()("uagb-buttons__wrap","uagb-buttons-stack-".concat(s))},l.a.createElement(r.InnerBlocks,{template:p,templateLock:!1,allowedBlocks:w,__experimentalMoverDirection:"desktop"==s?"vertical":"horizontal"})))};n.default=l.a.memo(_)}}]);