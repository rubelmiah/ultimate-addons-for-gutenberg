(window.webpackJsonp_ultimate_addons_for_gutenberg=window.webpackJsonp_ultimate_addons_for_gutenberg||[]).push([[9],{269:function(t,n,o){"use strict";var a=o(11),e=o.n(a)()((function(t){return t[1]}));e.push([t.i,'/**\r\n * Editor styles for the admin\r\n */\n#wpwrap .edit-post-visual-editor a.uagb-icon-list__link {\n  color: #3a3a3a; }\n\n#wpwrap .uagb-icon-list__outer-wrap .uagb-icon-list__label-wrap {\n  cursor: text; }\n\n[data-type="uagb/icon-list"] .uagb-icon-list__layout-horizontal .block-editor-inner-blocks > .block-editor-block-list__layout {\n  display: inline-flex; }\n\n[data-type="uagb/icon-list"] .block-editor-inner-blocks > .block-editor-block-list__layout > .wp-block {\n  width: auto;\n  padding-left: 0;\n  padding-right: 0;\n  margin-left: 0;\n  margin-right: 0; }\n',""]),n.a=e},356:function(t,n,o){"use strict";o.r(n);var a,e=o(2),i=o.n(e),l=o(5),c=o(0),r=o.n(c),u=o(10),s=o.n(u),b=o(269),d=0,_={injectType:"lazySingletonStyleTag",attributes:{id:"uagb-editor-styles"},insert:"head",singleton:!0},p={};p.locals=b.a.locals||{},p.use=function(){return d++||(a=s()(b.a,_)),p},p.unuse=function(){d>0&&!--d&&(a(),a=null)};var g=p,f=["uagb/icon-list-child"],w=function(t){Object(c.useLayoutEffect)((function(){return g.use(),function(){g.unuse()}}),[]);var n=t=t.parentProps,o=n.attributes,a=n.deviceType,e=o.className,u=o.icon_count,s=o.icon_layout,b=o.iconPosition,d=o.hideLabel,_=o.block_id,p=d?"uagb-icon-list__no-label":"",w=Object(c.useMemo)((function(){for(var t=[],n=0;n<u;n++)t.push(["uagb/icon-list-child",{id:n+1}]);return t}),[u]);return r.a.createElement("div",{className:i()(e,"uagb-icon-list__outer-wrap","uagb-icon-list__layout-".concat(s),"top"==b?"uagb-icon-list__icon-at-top":"",p,"uagb-editor-preview-mode-".concat(a.toLowerCase()),"uagb-block-".concat(_))},r.a.createElement("div",{className:"uagb-icon-list__wrap"},r.a.createElement(l.InnerBlocks,{template:w,templateLock:!1,allowedBlocks:f,orientation:s})))};n.default=r.a.memo(w)}}]);