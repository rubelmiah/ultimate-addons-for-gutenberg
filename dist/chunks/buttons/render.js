(window.webpackJsonp_ultimate_addons_for_gutenberg=window.webpackJsonp_ultimate_addons_for_gutenberg||[]).push([[9],{224:function(t,n,e){"use strict";var a=e(17),o=e.n(a)()((function(t){return t[1]}));o.push([t.i,'/**\r\n * Editor styles for the admin\r\n */\n.uagb-buttons__outer-wrap .uagb-buttons__wrap.uagb-buttons-stack-desktop .block-list-appender {\n  width: 60px; }\n\n.uagb-buttons__outer-wrap .block-list-appender {\n  margin-top: 24px;\n  margin-bottom: 24px;\n  margin-left: 10px; }\n\n.uagb-buttons__outer-wrap .uagb-button__wrapper {\n  display: flex; }\n  .uagb-buttons__outer-wrap .uagb-button__wrapper div {\n    display: inline-flex; }\n\n[data-type="uagb/buttons"] .block-editor-inner-blocks > .block-editor-block-list__layout {\n  display: flex;\n  justify-content: center;\n  -webkit-box-pack: center;\n  -ms-flex-pack: center;\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  align-items: center; }\n\n.wp-block[data-type="uagb/buttons"][data-btn-width="full"] .block-editor-inner-blocks,\n.wp-block[data-type="uagb/buttons"][data-btn-width="full"] .wp-block[data-type="uagb/buttons-child"] {\n  width: 100%; }\n\n.wp-block[data-type="uagb/buttons"][data-btn-width="full"] .block-editor-block-list__layout {\n  flex-grow: 1;\n  justify-content: space-between; }\n\n.wp-block[data-type="uagb/buttons"][data-btn-width="full"] .uagb-buttons-repeater {\n  justify-content: center; }\n  .wp-block[data-type="uagb/buttons"][data-btn-width="full"] .uagb-buttons-repeater .block-editor-rich-text__editable {\n    justify-content: center;\n    text-align: center; }\n\n[data-type="uagb/buttons"] .block-editor-inner-blocks > .block-editor-block-list__layout > .wp-block {\n  width: auto;\n  padding-right: 0;\n  padding-left: 0;\n  margin-right: 10px;\n  margin-left: 10px; }\n',""]),n.a=o},457:function(t,n,e){"use strict";e.r(n);var a,o=e(4),u=e.n(o),b=e(5),l=e(1),r=e.n(l),s=e(16),i=e.n(s),c=e(224),p=0,d={injectType:"lazySingletonStyleTag",attributes:{id:"uagb-editor-styles"},insert:"head",singleton:!0},g={};g.locals=c.a.locals||{},g.use=function(){return p++||(a=i()(c.a,d)),g},g.unuse=function(){p>0&&!--p&&(a(),a=null)};var k=g,w=e(24);const _=["uagb/buttons-child"],f=t=>{Object(l.useLayoutEffect)(()=>(k.use(),()=>{k.unuse()}),[]),t=t.parentProps;const{attributes:n}=t,e=Object(w.a)(),{className:a,btn_count:o,buttons:s,stack:i}=n,c=Object(l.useMemo)(()=>{const t=[];for(let n=0;n<o;n++)t.push(["uagb/buttons-child",s[n]]);return t},[o,s]);return r.a.createElement("div",{className:u()(a,"uagb-buttons__outer-wrap","uagb-editor-preview-mode-"+e.toLowerCase(),"uagb-block-"+t.clientId.substr(0,8))},r.a.createElement("div",{className:u()("uagb-buttons__wrap","uagb-buttons-stack-"+i)},r.a.createElement(b.InnerBlocks,{template:c,templateLock:!1,allowedBlocks:_,__experimentalMoverDirection:"desktop"===i?"vertical":"horizontal"})))};n.default=r.a.memo(f)}}]);