(window.webpackJsonp_ultimate_addons_for_gutenberg=window.webpackJsonp_ultimate_addons_for_gutenberg||[]).push([[85],{349:function(e,t,n){"use strict";var a=n(19),r=n.n(a)()((function(e){return e[1]}));r.push([e.i,'/**\r\n * #.# Editor Styles\r\n *\r\n * CSS for just Backend enqueued after style.scss\r\n * which makes it higher in priority.\r\n */\n#wpwrap .edit-post-visual-editor .uagb-rm__title {\n  margin-top: 0; }\n\n.uagb-rm__desk-column-3 [data-type="uagb/restaurant-menu-child"],\n.uagb-rm__desk-column-2 [data-type="uagb/restaurant-menu-child"],\n.uagb-rm__desk-column-1 [data-type="uagb/restaurant-menu-child"] {\n  display: inline-block;\n  padding-right: 10px;\n  padding-left: 10px; }\n\n.uagb-rm__desk-column-3 [data-type="uagb/restaurant-menu-child"] {\n  width: calc(100% / 3);\n  display: inline-flex; }\n\n.uagb-rm__desk-column-2 [data-type="uagb/restaurant-menu-child"] {\n  width: calc(100% / 2);\n  display: inline-flex; }\n\n.uagb-rm__desk-column-1 [data-type="uagb/restaurant-menu-child"] {\n  width: 100%; }\n\n.uagb-rm__desc,\n.editor-block-list__layout .uagb-rm__desc.block-editor-rich-text__editable {\n  margin-bottom: 15px; }\n\n.block-editor-page #wpwrap .uagb-rm__separator-parent {\n  margin-bottom: 10px; }\n\n.uagb-editor_imgpos_group.components-button-group {\n  margin-bottom: 15px; }\n\n.block-editor-page #wpwrap .wp-block-uagb-restaurant-menu .block-editor-block-list__block {\n  margin-top: 0;\n  margin-bottom: 0; }\n\n/*\r\n/* Responsive for price-list on tablet in editor\r\n*/\n.uagb-editor-preview-mode-tablet {\n  float: left;\n  padding-right: 10px;\n  padding-left: 10px; }\n  .uagb-editor-preview-mode-tablet.uagb-rm__tablet-column-3 [data-type="uagb/restaurant-menu-child"] {\n    width: 33%; }\n  .uagb-editor-preview-mode-tablet.uagb-rm__tablet-column-2 [data-type="uagb/restaurant-menu-child"] {\n    width: 50%; }\n  .uagb-editor-preview-mode-tablet.uagb-rm__tablet-column-1 [data-type="uagb/restaurant-menu-child"] {\n    width: 100%; }\n\n/*\r\n/* Responsive for price-list on mobile in editor\r\n*/\n.uagb-editor-preview-mode-mobile {\n  float: left;\n  padding-right: 10px;\n  padding-left: 10px; }\n  .uagb-editor-preview-mode-mobile.uagb-rm__mobile-column-3 [data-type="uagb/restaurant-menu-child"] {\n    width: 33%; }\n  .uagb-editor-preview-mode-mobile.uagb-rm__mobile-column-2 [data-type="uagb/restaurant-menu-child"] {\n    width: 50%; }\n  .uagb-editor-preview-mode-mobile.uagb-rm__mobile-column-1 [data-type="uagb/restaurant-menu-child"] {\n    width: 100%; }\n',""]),t.a=r},590:function(e,t,n){"use strict";n.r(t);var a,r=n(4),i=n.n(r),u=n(38),o=n(1),l=n.n(o),d=n(5),m=n(18),b=n.n(m),s=n(349),c=0,p={injectType:"lazySingletonStyleTag",attributes:{id:"uagb-editor-styles"},insert:"head",singleton:!0},g={};g.locals=s.a.locals||{},g.use=function(){return c++||(a=b()(s.a,p)),g},g.unuse=function(){c>0&&!--c&&(a(),a=null)};var _=g;const h=["uagb/restaurant-menu-child"],w=e=>{Object(o.useLayoutEffect)(()=>(_.use(),()=>{_.unuse()}),[]),e=e.parentProps;const{className:t,attributes:n,deviceType:a}=e,{menu_item_count:r}=n,m=Object(o.useMemo)(()=>{const e=[];for(let t=0;t<r;t++)e.push(["uagb/restaurant-menu-child",{id:t+1}]);return e},[r]);return l.a.createElement("div",{className:i()(t,"uagb-rest_menu__outer-wrap","uagb-editor-preview-mode-"+a.toLowerCase(),"uagb-block-"+e.clientId.substr(0,8),...Object(u.a)(n))},l.a.createElement(d.InnerBlocks,{template:m,templateLock:!1,allowedBlocks:h,__experimentalMoverDirection:"horizontal"}))};t.default=l.a.memo(w)}}]);