(window.webpackJsonp_ultimate_addons_for_gutenberg=window.webpackJsonp_ultimate_addons_for_gutenberg||[]).push([[14],{348:function(n,e,t){"use strict";var o=t(17),a=t.n(o)()((function(n){return n[1]}));a.push([n.i,'/**\r\n * #.# Editor Styles\r\n *\r\n * CSS for just Backend enqueued after style.scss\r\n * which makes it higher in priority.\r\n */\n.wp-block[data-type="uagb/column"]::before {\n  content: "";\n  position: absolute;\n  border: 1px dashed #a3aeb6;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 0;\n  width: 100%;\n  height: 100%; }\n\n.is-selected.wp-block[data-type="uagb/column"]::before {\n  border-color: #59646c; }\n\n.editor-bg-image-control .components-button,\n.editor-bg-video-control .components-button {\n  vertical-align: middle; }\n\n.editor-bg-image-control .components-button:last-child,\n.editor-bg-video-control .components-button:last-child {\n  margin-left: 10px; }\n\n.wp-block[data-type="uagb/column"] .block-editor-block-list__block-edit {\n  height: 100%; }\n\n.uagb-column__inner-wrap .block-editor-block-list__block {\n  margin-left: 0;\n  margin-right: 0; }\n\n.wp-block-uagb-column.uagb-column__wrap .uagb-column__inner-wrap,\n.wp-block-uagb-column.uagb-column__wrap .block-editor-inner-blocks {\n  width: 100%;\n  margin-left: auto;\n  margin-right: auto;\n  position: relative;\n  width: 100%;\n  z-index: 2; }\n\n.edit-post-visual-editor .uagb-column__inner-wrap .block-editor-block-list__block > .editor-block-mover {\n  left: -30px; }\n\n@media (max-width: 449px) {\n  .block-editor-page #wpwrap .uagb-columns__inner-wrap .block-editor-block-list__block {\n    background-attachment: scroll !important; } }\n',""]),e.a=a},586:function(n,e,t){"use strict";t.r(e);var o,a=t(4),l=t.n(a),i=t(5),r=t(1),c=t.n(r),u=t(16),b=t.n(u),s=t(348),d=0,g={injectType:"lazySingletonStyleTag",attributes:{id:"uagb-editor-styles"},insert:"head",singleton:!0},m={};m.locals=s.a.locals||{},m.use=function(){return d++||(o=b()(s.a,g)),m},m.unuse=function(){d>0&&!--d&&(o(),o=null)};var p=m;const _=n=>{Object(r.useLayoutEffect)(()=>(p.use(),()=>{p.unuse()}),[]);const{attributes:{align:e,backgroundType:t,alignMobile:o,alignTablet:a},deviceType:u,isSelected:b,className:s}=n.parentProps,d=b?"active":"not-active",g="center"===e?"":"uagb-column__align-"+e,m=""===o?"":"uagb-column__align-mobile-"+o,_=""===a?"":"uagb-column__align-tablet-"+a;return c.a.createElement("div",{className:l()(s,"uagb-column__wrap","uagb-column__background-"+t,"uagb-column__edit-"+d,g,m,_,"uagb-editor-preview-mode-"+u.toLowerCase(),"uagb-block-"+n.parentProps.clientId.substr(0,8))},c.a.createElement("div",{className:"uagb-column__overlay"}),c.a.createElement(i.InnerBlocks,{templateLock:!1}))};e.default=c.a.memo(_)}}]);