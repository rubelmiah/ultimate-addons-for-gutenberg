(window.webpackJsonp_ultimate_addons_for_gutenberg=window.webpackJsonp_ultimate_addons_for_gutenberg||[]).push([[89],{290:function(e,t,a){"use strict";var r=a(14),n=a.n(r)()((function(e){return e[1]}));n.push([e.i,'/**\n * #.# Editor Styles\n *\n * CSS for just Backend enqueued after style.scss\n * which makes it higher in priority.\n */\n.editor-styles-wrapper [data-type="uagb/restaurant-menu"].block-editor-block-list__block {\n  display: flex; }\n\n.editor-styles-wrapper .wp-block-uagb-restaurant-menu {\n  padding: 15px;\n  margin: 0;\n  max-width: unset;\n  /*\n\t\t/* Responsive for price-list on tablet in editor\n\t\t*/\n  /*\n\t\t/* Responsive for price-list on mobile in editor\n\t\t*/ }\n  .editor-styles-wrapper .wp-block-uagb-restaurant-menu .uagb-rm__title {\n    margin-top: 0; }\n  .editor-styles-wrapper .wp-block-uagb-restaurant-menu .uagb-rm__separator {\n    margin-bottom: 10px; }\n  .editor-styles-wrapper .wp-block-uagb-restaurant-menu.uagb-rm__desk-column-3 [data-type="uagb/restaurant-menu-child"],\n  .editor-styles-wrapper .wp-block-uagb-restaurant-menu.uagb-rm__desk-column-2 [data-type="uagb/restaurant-menu-child"],\n  .editor-styles-wrapper .wp-block-uagb-restaurant-menu.uagb-rm__desk-column-1 [data-type="uagb/restaurant-menu-child"] {\n    display: inline-block;\n    padding-right: 10px;\n    padding-left: 10px;\n    box-sizing: border-box; }\n  .editor-styles-wrapper .wp-block-uagb-restaurant-menu.uagb-rm__desk-column-3 [data-type="uagb/restaurant-menu-child"] {\n    width: calc(100% / 3);\n    display: inline-flex; }\n    .editor-styles-wrapper .wp-block-uagb-restaurant-menu.uagb-rm__desk-column-3 [data-type="uagb/restaurant-menu-child"] .wp-block-uagb-restaurant-menu-child.uagb-rest_menu__wrap.uagb-rm__desk-column-3 {\n      width: 100%; }\n  .editor-styles-wrapper .wp-block-uagb-restaurant-menu.uagb-rm__desk-column-2 [data-type="uagb/restaurant-menu-child"] {\n    width: calc(100% / 2);\n    display: inline-flex; }\n    .editor-styles-wrapper .wp-block-uagb-restaurant-menu.uagb-rm__desk-column-2 [data-type="uagb/restaurant-menu-child"] .uagb-rm__desk-column-2 {\n      width: 100%; }\n  .editor-styles-wrapper .wp-block-uagb-restaurant-menu .uagb-rest_menu__wrap.uagb-rm__align-left .uagb-rm__price {\n    display: table-cell;\n    text-align: right; }\n  .editor-styles-wrapper .wp-block-uagb-restaurant-menu.uagb-rm__desk-column-1 [data-type="uagb/restaurant-menu-child"] {\n    width: 100%; }\n  .editor-styles-wrapper .wp-block-uagb-restaurant-menu .uagb-rm__desc,\n  .editor-styles-wrapper .wp-block-uagb-restaurant-menu .uagb-rm__desc.block-editor-rich-text__editable {\n    margin-bottom: 15px; }\n  .editor-styles-wrapper .wp-block-uagb-restaurant-menu.uagb-editor-preview-mode-tablet {\n    float: left;\n    padding-right: 10px;\n    padding-left: 10px; }\n    .editor-styles-wrapper .wp-block-uagb-restaurant-menu.uagb-editor-preview-mode-tablet.uagb-rm__tablet-column-3 [data-type="uagb/restaurant-menu-child"] {\n      width: calc(100% / 3); }\n    .editor-styles-wrapper .wp-block-uagb-restaurant-menu.uagb-editor-preview-mode-tablet.uagb-rm__tablet-column-2 [data-type="uagb/restaurant-menu-child"] {\n      width: calc(100% / 2); }\n    .editor-styles-wrapper .wp-block-uagb-restaurant-menu.uagb-editor-preview-mode-tablet.uagb-rm__tablet-column-1 [data-type="uagb/restaurant-menu-child"] {\n      width: 100%; }\n  .editor-styles-wrapper .wp-block-uagb-restaurant-menu.uagb-editor-preview-mode-mobile {\n    float: left;\n    padding-right: 10px;\n    padding-left: 10px; }\n    .editor-styles-wrapper .wp-block-uagb-restaurant-menu.uagb-editor-preview-mode-mobile.uagb-rm__mobile-column-3 [data-type="uagb/restaurant-menu-child"] {\n      width: calc(100% / 3); }\n    .editor-styles-wrapper .wp-block-uagb-restaurant-menu.uagb-editor-preview-mode-mobile.uagb-rm__mobile-column-2 [data-type="uagb/restaurant-menu-child"] {\n      width: calc(100% / 2); }\n    .editor-styles-wrapper .wp-block-uagb-restaurant-menu.uagb-editor-preview-mode-mobile.uagb-rm__mobile-column-1 [data-type="uagb/restaurant-menu-child"] {\n      width: 100%; }\n',""]),t.a=n},536:function(e,t,a){"use strict";a.r(t);var r,n=a(3),u=a.n(n),l=a(37),i=a(0),s=a.n(i),o=a(4),b=a(13),d=a.n(b),p=a(290),m=0,c={injectType:"lazySingletonStyleTag",attributes:{id:"uagb-editor-styles"},insert:"head",singleton:!0},g={};g.locals=p.a.locals||{},g.use=function(){return m++||(r=d()(p.a,c)),g},g.unuse=function(){m>0&&!--m&&(r(),r=null)};var w=g,_=a(10);const y=["uagb/restaurant-menu-child"],k=e=>{Object(i.useLayoutEffect)(()=>(w.use(),()=>{w.unuse()}),[]),e=e.parentProps;const t=Object(_.a)(),{className:a,attributes:r}=e,{isPreview:n,menu_item_count:b}=r,d=Object(i.useMemo)(()=>{const e=[];for(let t=0;t<b;t++)e.push(["uagb/restaurant-menu-child",{id:t+1}]);return e},[b]),p=uagb_blocks_info.uagb_url+"/admin/assets/preview-images/price-list.png";return n?s.a.createElement("img",{width:"100%",src:p,alt:""}):s.a.createElement("div",{className:u()(a,"uagb-editor-preview-mode-"+t.toLowerCase(),"uagb-block-"+e.clientId.substr(0,8),...Object(l.a)(r))},s.a.createElement(o.InnerBlocks,{template:d,templateLock:!1,allowedBlocks:y,__experimentalMoverDirection:"horizontal"}))};t.default=s.a.memo(k)}}]);