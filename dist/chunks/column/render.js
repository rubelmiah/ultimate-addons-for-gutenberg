(window.webpackJsonp_ultimate_addons_for_gutenberg=window.webpackJsonp_ultimate_addons_for_gutenberg||[]).push([[15],{252:function(n,e,t){"use strict";var o=t(15),a=t.n(o)()((function(n){return n[1]}));a.push([n.i,'/**\n * #.# Editor Styles\n *\n * CSS for just Backend enqueued after style.scss\n * which makes it higher in priority.\n */\n.wp-block[data-type="uagb/column"]::before {\n  content: "";\n  position: absolute;\n  border: 1px dashed #a3aeb6;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 0;\n  width: 100%;\n  height: 100%; }\n\n.is-selected.wp-block[data-type="uagb/column"]::before {\n  border-color: #59646c; }\n\n.editor-bg-image-control .components-button,\n.editor-bg-video-control .components-button {\n  vertical-align: middle; }\n\n.editor-bg-image-control .components-button:last-child,\n.editor-bg-video-control .components-button:last-child {\n  margin-left: 10px; }\n\n.wp-block[data-type="uagb/column"] .block-editor-block-list__block-edit {\n  height: 100%; }\n\n.uagb-column__inner-wrap .block-editor-block-list__block {\n  margin-left: 0;\n  margin-right: 0; }\n\n.wp-block-uagb-column.uagb-column__wrap .uagb-column__inner-wrap,\n.wp-block-uagb-column.uagb-column__wrap .block-editor-inner-blocks {\n  width: 100%;\n  margin-left: auto;\n  margin-right: auto;\n  position: relative;\n  z-index: 2; }\n\n.edit-post-visual-editor .uagb-column__inner-wrap .block-editor-block-list__block > .editor-block-mover {\n  left: -30px; }\n\n@media (max-width: 449px) {\n  .block-editor-page #wpwrap .uagb-columns__inner-wrap .block-editor-block-list__block {\n    background-attachment: scroll !important; } }\n',""]),e.a=a},490:function(n,e,t){"use strict";t.r(e);var o,a=t(3),l=t.n(a),i=t(4),c=t(0),r=t.n(c),u=t(14),b=t.n(u),s=t(252),d=0,g={injectType:"lazySingletonStyleTag",attributes:{id:"uagb-editor-styles"},insert:"head",singleton:!0},m={};m.locals=s.a.locals||{},m.use=function(){return d++||(o=b()(s.a,g)),m},m.unuse=function(){d>0&&!--d&&(o(),o=null)};var p=m,_=t(10);const k=n=>{Object(c.useLayoutEffect)(()=>(p.use(),()=>{p.unuse()}),[]);const e=Object(_.a)(),{attributes:{align:t,backgroundType:o,alignMobile:a,alignTablet:u},isSelected:b,className:s}=n.parentProps,d=b?"active":"not-active",g="center"===t?"":"uagb-column__align-"+t,m=""===a?"":"uagb-column__align-mobile-"+a,k=""===u?"":"uagb-column__align-tablet-"+u;return r.a.createElement("div",{className:l()(s,"uagb-column__wrap","uagb-column__background-"+o,"uagb-column__edit-"+d,g,m,k,"uagb-editor-preview-mode-"+e.toLowerCase(),"uagb-block-"+n.parentProps.clientId.substr(0,8))},r.a.createElement("div",{className:"uagb-column__overlay"}),r.a.createElement(i.InnerBlocks,{templateLock:!1}))};e.default=r.a.memo(k)}}]);