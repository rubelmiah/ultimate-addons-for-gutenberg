(window.webpackJsonp_ultimate_addons_for_gutenberg=window.webpackJsonp_ultimate_addons_for_gutenberg||[]).push([[80],{224:function(e,t,a){"use strict";a.d(t,"b",(function(){return b})),a.d(t,"a",(function(){return d})),a.d(t,"e",(function(){return g})),a.d(t,"c",(function(){return h})),a.d(t,"d",(function(){return f}));var o=a(132),n=a(135),r=a(133),s=a(129),i=a(130),l=a(134),p=a(2);function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var o in a)Object.prototype.hasOwnProperty.call(a,o)&&(e[o]=a[o])}return e}).apply(this,arguments)}const u=Object(p.createContext)({parentName:"",parentClassName:"",isLoading:!1}),b=e=>{let{parentName:t="",parentClassName:a="",children:o}=e;const n={parentName:t,parentClassName:a};return React.createElement(u.Provider,{value:n},o)},d=[["uagb/post-image"],["uagb/post-taxonomy"],["uagb/post-title"],["uagb/post-meta"],["uagb/post-excerpt"],["uagb/post-button"]],g=(e,t,a,o,n)=>{if(!a)return;const r=h(e);let s=[];return a.map((a,i)=>{let[l,u={}]=a;u.children&&u.children.length>0&&(s=g(e,t,u.children,o,n));const b=r[l];return b?React.createElement(p.Suspense,{key:i,fallback:React.createElement("div",{className:"wc-block-placeholder"})},React.createElement(b,c({},u,{post:t,attributes:o,categoriesList:n}))):null})},m={};function w(e){e.context||(e.context="any"),y(e,"context","string"),y(e,"blockName","string"),_(e,"component");const{context:t,blockName:a,component:o}=e;m[t]||(m[t]={}),m[t][a]=o}const _=(e,t)=>{if(e[t]){if("function"==typeof e[t])return;if(e[t].$$typeof&&e[t].$$typeof===Symbol.for("react.lazy"))return}throw new Error(`Incorrect value for the ${t} argument when registering a block component. Component must be a valid React Element or Lazy callback.`)},y=(e,t,a)=>{const o=typeof e[t];if(o!==a)throw new Error(`Incorrect value for the ${t} argument when registering a block component. It was a ${o}, but must be a ${a}.`)};w({blockName:"uagb/post-title",component:o.a}),w({blockName:"uagb/post-image",component:r.a}),w({blockName:"uagb/post-taxonomy",component:s.a}),w({blockName:"uagb/post-meta",component:n.a}),w({blockName:"uagb/post-excerpt",component:i.a}),w({blockName:"uagb/post-button",component:l.a});const h=e=>{return{..."object"==typeof m[t=e]&&Object.keys(m[t]).length>0?m[t]:{},...m.any};var t},f=e=>e&&0!==e.length?e.map(e=>[e.name,{...e.attributes,post:void 0,children:e.innerBlocks.length>0?f(e.innerBlocks):[]}]):[]},231:function(e,t,a){"use strict";var o,n=a(15),r=a.n(n),s=a(232),i=0,l={injectType:"lazySingletonStyleTag",attributes:{id:"uagb-editor-styles"},insert:"head",singleton:!0},p={};p.locals=s.a.locals||{},p.use=function(){return i++||(o=r()(s.a,l)),p},p.unuse=function(){i>0&&!--i&&(o(),o=null)},t.a=p},232:function(e,t,a){"use strict";var o=a(16),n=a.n(o)()((function(e){return e[1]}));n.push([e.i,'/**\n * Editor styles for the admin\n */\n.editor-styles-wrapper .uagb-post-grid .uagb-post__inner-wrap {\n  background-clip: content-box !important; }\n  .editor-styles-wrapper .uagb-post-grid .uagb-post__inner-wrap.uagb-post__edit-mode {\n    margin: 20px; }\n    .editor-styles-wrapper .uagb-post-grid .uagb-post__inner-wrap.uagb-post__edit-mode [data-type="uagb/post-meta"] span,\n    .editor-styles-wrapper .uagb-post-grid .uagb-post__inner-wrap.uagb-post__edit-mode [data-type="uagb/post-meta"] time {\n      margin-right: 10px;\n      font-weight: 500; }\n  .editor-styles-wrapper .uagb-post-grid .uagb-post__inner-wrap .uagb-post__taxonomy {\n    flex-wrap: nowrap; }\n\n.editor-styles-wrapper .uagb-post-grid h2 a {\n  text-decoration: none; }\n\n.editor-styles-wrapper .uagb-post-grid a {\n  cursor: default;\n  pointer-events: none; }\n\n.editor-styles-wrapper .uagb-post-grid .uagb-post__load-more-wrap {\n  width: 100%; }\n  .editor-styles-wrapper .uagb-post-grid .uagb-post__load-more-wrap .uagb-post-pagination-button {\n    cursor: pointer;\n    pointer-events: visible; }\n  .editor-styles-wrapper .uagb-post-grid .uagb-post__load-more-wrap a {\n    color: inherit; }\n\n.editor-styles-wrapper .uagb-post-grid.uagb-editor-preview-mode-tablet.uagb-post__columns-tablet-1 article {\n  width: 100%; }\n\n.editor-styles-wrapper .uagb-post-grid.uagb-editor-preview-mode-tablet.uagb-post__columns-tablet-2 article {\n  width: 50%; }\n\n.editor-styles-wrapper .uagb-post-grid.uagb-editor-preview-mode-tablet.uagb-post__columns-tablet-3 article {\n  width: 33.2%; }\n\n.editor-styles-wrapper .uagb-post-grid.uagb-editor-preview-mode-tablet.uagb-post__columns-tablet-4 article {\n  width: 25%; }\n\n.editor-styles-wrapper .uagb-post-grid.uagb-editor-preview-mode-tablet.uagb-post__columns-tablet-5 article {\n  width: 20%; }\n\n.editor-styles-wrapper .uagb-post-grid.uagb-editor-preview-mode-tablet.uagb-post__columns-tablet-6 article {\n  width: 16.66%; }\n\n.editor-styles-wrapper .uagb-post-grid.uagb-editor-preview-mode-tablet.uagb-post__columns-tablet-7 article {\n  width: 14.28%; }\n\n.editor-styles-wrapper .uagb-post-grid.uagb-editor-preview-mode-tablet.uagb-post__columns-tablet-8 article {\n  width: 12.5%; }\n\n.editor-styles-wrapper .uagb-post-grid.uagb-editor-preview-mode-mobile.uagb-post__columns-mobile-1 article {\n  width: 100%; }\n\n.editor-styles-wrapper .uagb-post-grid.uagb-editor-preview-mode-mobile.uagb-post__columns-mobile-2 article {\n  width: 50%; }\n\n.editor-styles-wrapper .uagb-post-grid.uagb-editor-preview-mode-mobile.uagb-post__columns-mobile-3 article {\n  width: 33.2%; }\n\n.editor-styles-wrapper .uagb-post-grid.uagb-editor-preview-mode-mobile.uagb-post__columns-mobile-4 article {\n  width: 25%; }\n\n.editor-styles-wrapper .uagb-post-grid.uagb-editor-preview-mode-mobile.uagb-post__columns-mobile-5 article {\n  width: 20%; }\n\n.editor-styles-wrapper .uagb-post-grid.uagb-editor-preview-mode-mobile.uagb-post__columns-mobile-6 article {\n  width: 16.66%; }\n\n.editor-styles-wrapper .uagb-post-grid.uagb-editor-preview-mode-mobile.uagb-post__columns-mobile-7 article {\n  width: 14.28%; }\n\n.editor-styles-wrapper .uagb-post-grid.uagb-editor-preview-mode-mobile.uagb-post__columns-mobile-8 article {\n  width: 12.5%; }\n\n.editor-styles-wrapper .uagb-post-grid.uagb-post__items {\n  display: flex;\n  -ms-flex-wrap: wrap;\n  -webkit-flex-wrap: wrap;\n  flex-wrap: wrap; }\n\n.block-editor-page #wpwrap .edit-post-visual-editor .slick-dots {\n  padding-left: 0; }\n  .block-editor-page #wpwrap .edit-post-visual-editor .slick-dots button {\n    color: transparent; }\n\n.block-editor-page #wpwrap .edit-post-visual-editor .uagb-post__image-position-background .uagb-post__image img {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  width: auto;\n  height: auto;\n  max-width: none;\n  min-width: 100%;\n  min-height: 100%;\n  transform: translate(-50%, -50%);\n  -webkit-transform: translate(-50%, -50%);\n  -ms-transform: translate(-50%, -50%); }\n',""]),t.a=n},486:function(e,t,a){"use strict";a.r(t);var o=a(0),n=a.n(o),r=a(10),s=a(224),i=a(1),l=a(6),p=a(7),c=a(5),u=a(231);const b=Object(o.lazy)(()=>a.e(79).then(a.bind(null,330))),d=e=>{Object(o.useLayoutEffect)(()=>(u.a.use(),()=>{u.a.unuse()}),[]);const{isEditing:t}=e.state,{attributes:a,latestPosts:d,categoriesList:g,deviceType:m,name:w}=e.parentProps;return t?n.a.createElement(n.a.Fragment,null,(()=>{const t={template:e.parentProps.attributes.layoutConfig,templateLock:!1,allowedBlocks:Object.keys(Object(s.c)("uagb/post-grid"))};return 0!==e.parentProps.attributes.layoutConfig.length&&(t.renderAppender=!1),n.a.createElement(p.Placeholder,{label:"Post Grid Layout"},n.a.createElement("div",{className:"uagb-post-grid uagb-block-all-post-grid-item-template"},n.a.createElement(p.Tip,null,Object(i.__)("Edit the blocks inside the preview below to change the content displayed for each post within the post grid.")),n.a.createElement(s.b,{parentName:"uagb/post-grid",parentClassName:"uagb-block-grid"},n.a.createElement("article",{className:"uagb-post__inner-wrap uagb-post__edit-mode"},n.a.createElement("div",{className:"uagb-post__text"},n.a.createElement(c.InnerBlocks,t)))),n.a.createElement("div",{className:"uagb-block-all-post__actions"},n.a.createElement(p.Button,{className:"uagb-block-all-post__done-button",isPrimary:!0,onClick:()=>{const{block:t,setAttributes:a}=e.parentProps;a({layoutConfig:Object(s.d)(t)}),e.setStateValue({innerBlocks:t}),e.togglePreview()}},Object(i.__)("Done")),n.a.createElement(p.Button,{className:"uagb-block-all-post__cancel-button",isTertiary:!0,onClick:()=>{const{replaceInnerBlocks:t}=e.parentProps,{innerBlocks:a}=e.state;t(e.parentProps.clientId,a),e.togglePreview()}},Object(i.__)("Cancel")),n.a.createElement(p.Button,{className:"uagb-block-all-post__reset-button",onClick:()=>{const{block:t,replaceInnerBlocks:a}=e.parentProps,o=[];s.a.map(e=>{let[t,a]=e;return o.push(Object(l.createBlock)(t,a)),!0}),a(e.parentProps.clientId,o),e.setStateValue({innerBlocks:t})}},Object(i.__)("Reset Layout")))))})()):n.a.createElement(n.a.Fragment,null,n.a.createElement(p.Disabled,null,n.a.createElement(o.Suspense,{fallback:Object(r.a)()},n.a.createElement(b,{attributes:a,className:e.parentProps.className,latestPosts:d,block_id:e.parentProps.clientId.substr(0,8),categoriesList:g,deviceType:m,name:w}))))};t.default=n.a.memo(d)}}]);