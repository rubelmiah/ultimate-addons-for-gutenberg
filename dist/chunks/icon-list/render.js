(window.webpackJsonp_ultimate_addons_for_gutenberg=window.webpackJsonp_ultimate_addons_for_gutenberg||[]).push([[60],{340:function(t,n,a){"use strict";var i=a(17),o=a.n(i)()((function(t){return t[1]}));o.push([t.i,'/**\r\n * Editor styles for the admin\r\n */\n#wpwrap .edit-post-visual-editor a.uagb-icon-list__link {\n  color: #3a3a3a; }\n\n#wpwrap .uagb-icon-list__outer-wrap .uagb-icon-list__label-wrap {\n  cursor: text; }\n\n[data-type="uagb/icon-list"] .uagb-icon-list__layout-horizontal .block-editor-inner-blocks > .block-editor-block-list__layout [data-type="uagb/icon-list-child"] {\n  display: inline-flex; }\n\n[data-type="uagb/icon-list"] .block-editor-inner-blocks > .block-editor-block-list__layout > .wp-block {\n  width: auto;\n  padding-left: 0;\n  padding-right: 0;\n  margin-left: 0;\n  margin-right: 0; }\n',""]),n.a=o},581:function(t,n,a){"use strict";a.r(n);var i,o=a(4),e=a.n(o),l=a(5),c=a(1),r=a.n(c),u=a(16),s=a.n(u),b=a(340),d=0,_={injectType:"lazySingletonStyleTag",attributes:{id:"uagb-editor-styles"},insert:"head",singleton:!0},p={};p.locals=b.a.locals||{},p.use=function(){return d++||(i=s()(b.a,_)),p},p.unuse=function(){d>0&&!--d&&(i(),i=null)};var g=p,f=["uagb/icon-list-child"],w=function(t){Object(c.useLayoutEffect)((function(){return g.use(),function(){g.unuse()}}),[]);var n=t=t.parentProps,a=n.attributes,i=n.deviceType,o=a.className,u=a.icon_count,s=a.icon_layout,b=a.iconPosition,d=a.hideLabel,_=a.block_id,p=d?"uagb-icon-list__no-label":"",w=Object(c.useMemo)((function(){for(var t=[],n=0;n<u;n++)t.push(["uagb/icon-list-child",{id:n+1}]);return t}),[u]);return r.a.createElement("div",{className:e()(o,"uagb-icon-list__outer-wrap","uagb-icon-list__layout-".concat(s),"top"==b?"uagb-icon-list__icon-at-top":"",p,"uagb-editor-preview-mode-".concat(i.toLowerCase()),"uagb-block-".concat(_))},r.a.createElement("div",{className:"uagb-icon-list__wrap"},r.a.createElement(l.InnerBlocks,{template:w,templateLock:!1,allowedBlocks:f,orientation:s})))};n.default=r.a.memo(w)}}]);