(window.webpackJsonp_ultimate_addons_for_gutenberg=window.webpackJsonp_ultimate_addons_for_gutenberg||[]).push([[82],{336:function(e,t,n){"use strict";var a=n(15),r=n.n(a)()((function(e){return e[1]}));r.push([e.i,'/**\r\n * #.# Editor Styles\r\n *\r\n * CSS for just Backend enqueued after style.scss\r\n * which makes it higher in priority.\r\n */\n#wpwrap .edit-post-visual-editor .uagb-rm__title {\n  margin-top: 0; }\n\n.uagb-rm__desk-column-3 [data-type="uagb/restaurant-menu-child"],\n.uagb-rm__desk-column-2 [data-type="uagb/restaurant-menu-child"],\n.uagb-rm__desk-column-1 [data-type="uagb/restaurant-menu-child"] {\n  display: inline-block;\n  padding-right: 10px;\n  padding-left: 10px; }\n\n.uagb-rm__desk-column-3 [data-type="uagb/restaurant-menu-child"] {\n  width: calc(100% / 3);\n  display: inline-flex; }\n\n.uagb-rm__desk-column-2 [data-type="uagb/restaurant-menu-child"] {\n  width: calc(100% / 2);\n  display: inline-flex; }\n\n.uagb-rm__desk-column-1 [data-type="uagb/restaurant-menu-child"] {\n  width: 100%; }\n\n.uagb-rm__desc,\n.editor-block-list__layout .uagb-rm__desc.block-editor-rich-text__editable {\n  margin-bottom: 15px; }\n\n.block-editor-page #wpwrap .uagb-rm__separator-parent {\n  margin-bottom: 10px; }\n\n.uagb-editor_imgpos_group.components-button-group {\n  margin-bottom: 15px; }\n\n.block-editor-page #wpwrap .wp-block-uagb-restaurant-menu .block-editor-block-list__block {\n  margin-top: 0;\n  margin-bottom: 0; }\n\n/*\r\n/* Responsive for price-list on tablet in editor\r\n*/\n.uagb-editor-preview-mode-tablet {\n  float: left;\n  padding-right: 10px;\n  padding-left: 10px; }\n  .uagb-editor-preview-mode-tablet.uagb-rm__tablet-column-3 [data-type="uagb/restaurant-menu-child"] {\n    width: 33%; }\n  .uagb-editor-preview-mode-tablet.uagb-rm__tablet-column-2 [data-type="uagb/restaurant-menu-child"] {\n    width: 50%; }\n  .uagb-editor-preview-mode-tablet.uagb-rm__tablet-column-1 [data-type="uagb/restaurant-menu-child"] {\n    width: 100%; }\n\n/*\r\n/* Responsive for price-list on mobile in editor\r\n*/\n.uagb-editor-preview-mode-mobile {\n  float: left;\n  padding-right: 10px;\n  padding-left: 10px; }\n  .uagb-editor-preview-mode-mobile.uagb-rm__mobile-column-3 [data-type="uagb/restaurant-menu-child"] {\n    width: 33%; }\n  .uagb-editor-preview-mode-mobile.uagb-rm__mobile-column-2 [data-type="uagb/restaurant-menu-child"] {\n    width: 50%; }\n  .uagb-editor-preview-mode-mobile.uagb-rm__mobile-column-1 [data-type="uagb/restaurant-menu-child"] {\n    width: 100%; }\n',""]),t.a=r},575:function(e,t,n){"use strict";n.r(t);var a,r=n(4),o=n.n(r),i=n(33),u=n(1),l=n.n(u),d=n(5),c=n(14),m=n.n(c),b=n(336),s=0,p={injectType:"lazySingletonStyleTag",attributes:{id:"uagb-editor-styles"},insert:"head",singleton:!0},g={};g.locals=b.a.locals||{},g.use=function(){return s++||(a=m()(b.a,p)),g},g.unuse=function(){s>0&&!--s&&(a(),a=null)};var _=g;function f(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}var h=["uagb/restaurant-menu-child"],y=function(e){Object(u.useLayoutEffect)((function(){return _.use(),function(){_.unuse()}}),[]);var t,n=e=e.parentProps,a=n.className,r=n.attributes,c=n.deviceType,m=r.menu_item_count,b=Object(u.useMemo)((function(){for(var e=[],t=0;t<m;t++)e.push(["uagb/restaurant-menu-child",{id:t+1}]);return e}),[m]);return l.a.createElement("div",{className:o.a.apply(void 0,[a,"uagb-rest_menu__outer-wrap","uagb-editor-preview-mode-".concat(c.toLowerCase()),"uagb-block-".concat(e.clientId.substr(0,8))].concat((t=Object(i.a)(r),function(e){if(Array.isArray(e))return f(e)}(t)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(t)||function(e,t){if(e){if("string"==typeof e)return f(e,void 0);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?f(e,void 0):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}())))},l.a.createElement(d.InnerBlocks,{template:b,templateLock:!1,allowedBlocks:h,__experimentalMoverDirection:"horizontal"}))};t.default=l.a.memo(y)}}]);