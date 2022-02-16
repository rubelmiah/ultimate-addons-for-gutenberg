(window.webpackJsonp_ultimate_addons_for_gutenberg=window.webpackJsonp_ultimate_addons_for_gutenberg||[]).push([[78],{179:function(e,t,a){"use strict";a.d(t,"b",(function(){return b})),a.d(t,"a",(function(){return p})),a.d(t,"e",(function(){return g})),a.d(t,"c",(function(){return h})),a.d(t,"d",(function(){return f}));var n=a(99),o=a(102),r=a(100),i=a(97),s=a(101),l=a(2);function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}const u=Object(l.createContext)({parentName:"",parentClassName:"",isLoading:!1}),b=e=>{let{parentName:t="",parentClassName:a="",children:n}=e;const o={parentName:t,parentClassName:a};return React.createElement(u.Provider,{value:o},n)},p=[["uagb/post-image"],["uagb/post-title"],["uagb/post-meta"],["uagb/post-excerpt"],["uagb/post-button"]],g=(e,t,a,n,o)=>{if(!a)return;const r=h(e);let i=[];return a.map((a,s)=>{let[u,b={}]=a;b.children&&b.children.length>0&&(i=g(e,t,b.children,n,o));const p=r[u];return p?React.createElement(l.Suspense,{key:s,fallback:React.createElement("div",{className:"wc-block-placeholder"})},React.createElement(p,c({},b,{post:t,attributes:n,categoriesList:o}))):null})},d={};function m(e){e.context||(e.context="any"),w(e,"context","string"),w(e,"blockName","string"),_(e,"component");const{context:t,blockName:a,component:n}=e;d[t]||(d[t]={}),d[t][a]=n}const _=(e,t)=>{if(e[t]){if("function"==typeof e[t])return;if(e[t].$$typeof&&e[t].$$typeof===Symbol.for("react.lazy"))return}throw new Error(`Incorrect value for the ${t} argument when registering a block component. Component must be a valid React Element or Lazy callback.`)},w=(e,t,a)=>{const n=typeof e[t];if(n!==a)throw new Error(`Incorrect value for the ${t} argument when registering a block component. It was a ${n}, but must be a ${a}.`)};m({blockName:"uagb/post-title",component:n.a}),m({blockName:"uagb/post-image",component:r.a}),m({blockName:"uagb/post-meta",component:o.a}),m({blockName:"uagb/post-excerpt",component:i.a}),m({blockName:"uagb/post-button",component:s.a});const h=e=>{return{..."object"==typeof d[t=e]&&Object.keys(d[t]).length>0?d[t]:{},...d.any};var t},f=e=>e&&0!==e.length?e.map(e=>[e.name,{...e.attributes,post:void 0,children:e.innerBlocks.length>0?f(e.innerBlocks):[]}]):[]},186:function(e,t,a){"use strict";var n,o=a(14),r=a.n(o),i=a(187),s=0,l={injectType:"lazySingletonStyleTag",attributes:{id:"uagb-editor-styles"},insert:"head",singleton:!0},c={};c.locals=i.a.locals||{},c.use=function(){return s++||(n=r()(i.a,l)),c},c.unuse=function(){s>0&&!--s&&(n(),n=null)},t.a=c},187:function(e,t,a){"use strict";var n=a(15),o=a.n(n)()((function(e){return e[1]}));o.push([e.i,"/**\n * Editor styles for the admin\n */\n.uagb-post-grid .uagb-post__inner-wrap {\n  background-clip: content-box !important; }\n\n.uagb-post-grid h2 a {\n  text-decoration: none; }\n\n.uagb-post-grid a {\n  cursor: default;\n  pointer-events: none; }\n\n.uagb-post-grid .uagb-post__load-more-wrap {\n  width: 100%; }\n  .uagb-post-grid .uagb-post__load-more-wrap .uagb-post-pagination-button {\n    cursor: pointer;\n    pointer-events: visible; }\n  .uagb-post-grid .uagb-post__load-more-wrap a {\n    color: inherit; }\n\n.uagb-post-grid.uagb-editor-preview-mode-tablet.uagb-post__columns-tablet-1 article {\n  width: 100%; }\n\n.uagb-post-grid.uagb-editor-preview-mode-tablet.uagb-post__columns-tablet-2 article {\n  width: 50%; }\n\n.uagb-post-grid.uagb-editor-preview-mode-tablet.uagb-post__columns-tablet-3 article {\n  width: 33.2%; }\n\n.uagb-post-grid.uagb-editor-preview-mode-tablet.uagb-post__columns-tablet-4 article {\n  width: 25%; }\n\n.uagb-post-grid.uagb-editor-preview-mode-tablet.uagb-post__columns-tablet-5 article {\n  width: 20%; }\n\n.uagb-post-grid.uagb-editor-preview-mode-tablet.uagb-post__columns-tablet-6 article {\n  width: 16.66%; }\n\n.uagb-post-grid.uagb-editor-preview-mode-tablet.uagb-post__columns-tablet-7 article {\n  width: 14.28%; }\n\n.uagb-post-grid.uagb-editor-preview-mode-tablet.uagb-post__columns-tablet-8 article {\n  width: 12.5%; }\n\n.uagb-post-grid.uagb-editor-preview-mode-mobile.uagb-post__columns-mobile-1 article {\n  width: 100%; }\n\n.uagb-post-grid.uagb-editor-preview-mode-mobile.uagb-post__columns-mobile-2 article {\n  width: 50%; }\n\n.uagb-post-grid.uagb-editor-preview-mode-mobile.uagb-post__columns-mobile-3 article {\n  width: 33.2%; }\n\n.uagb-post-grid.uagb-editor-preview-mode-mobile.uagb-post__columns-mobile-4 article {\n  width: 25%; }\n\n.uagb-post-grid.uagb-editor-preview-mode-mobile.uagb-post__columns-mobile-5 article {\n  width: 20%; }\n\n.uagb-post-grid.uagb-editor-preview-mode-mobile.uagb-post__columns-mobile-6 article {\n  width: 16.66%; }\n\n.uagb-post-grid.uagb-editor-preview-mode-mobile.uagb-post__columns-mobile-7 article {\n  width: 14.28%; }\n\n.uagb-post-grid.uagb-editor-preview-mode-mobile.uagb-post__columns-mobile-8 article {\n  width: 12.5%; }\n\n.uagb-post-grid.uagb-post__items {\n  display: flex;\n  -ms-flex-wrap: wrap;\n  -webkit-flex-wrap: wrap;\n  flex-wrap: wrap; }\n\n.block-editor-page #wpwrap .edit-post-visual-editor .slick-dots button {\n  color: transparent; }\n\n.block-editor-page #wpwrap .edit-post-visual-editor .uagb-post__image-position-background .uagb-post__image img {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  width: auto;\n  height: auto;\n  max-width: none;\n  min-width: 100%;\n  min-height: 100%;\n  transform: translate(-50%, -50%);\n  -webkit-transform: translate(-50%, -50%);\n  -ms-transform: translate(-50%, -50%); }\n",""]),t.a=o},416:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(8),i=a(179),s=a(1),l=a(5),c=a(6),u=a(4),b=a(186);const p=Object(n.lazy)(()=>a.e(77).then(a.bind(null,280))),g=e=>{Object(n.useLayoutEffect)(()=>(b.a.use(),()=>{b.a.unuse()}),[]);const{isEditing:t}=e.state,{attributes:a,latestPosts:g,categoriesList:d,deviceType:m}=e.parentProps;return t?o.a.createElement(o.a.Fragment,null,(()=>{const t={template:e.parentProps.attributes.layoutConfig,templateLock:!1,allowedBlocks:Object.keys(Object(i.c)("uagb/post-grid"))};return 0!==e.parentProps.attributes.layoutConfig.length&&(t.renderAppender=!1),o.a.createElement(c.Placeholder,{label:"Post Grid Layout"},o.a.createElement("div",{className:"uagb-block-all-post-grid-item-template"},o.a.createElement(c.Tip,null,Object(s.__)("Edit the blocks inside the preview below to change the content displayed for each post within the post grid.")),o.a.createElement(i.b,{parentName:"uagb/post-grid",parentClassName:"uagb-block-grid"},o.a.createElement("article",{className:"uagb-post__inner-wrap uagb-post__edit-mode"},o.a.createElement("div",{className:"uagb-post__text"},o.a.createElement(u.InnerBlocks,t)))),o.a.createElement("div",{className:"uagb-block-all-post__actions"},o.a.createElement(c.Button,{className:"uagb-block-all-post__done-button",isPrimary:!0,onClick:()=>{const{block:t,setAttributes:a}=e.parentProps;a({layoutConfig:Object(i.d)(t)}),e.setStateValue({innerBlocks:t}),e.togglePreview()}},Object(s.__)("Done")),o.a.createElement(c.Button,{className:"uagb-block-all-post__cancel-button",isTertiary:!0,onClick:()=>{const{replaceInnerBlocks:t}=e.parentProps,{innerBlocks:a}=e.state;t(e.parentProps.clientId,a),e.togglePreview()}},Object(s.__)("Cancel")),o.a.createElement(c.Button,{className:"uagb-block-all-post__reset-button",onClick:()=>{const{block:t,replaceInnerBlocks:a}=e.parentProps,n=[];i.a.map(e=>{let[t,a]=e;return n.push(Object(l.createBlock)(t,a)),!0}),a(e.parentProps.clientId,n),e.setStateValue({innerBlocks:t})}},Object(s.__)("Reset Layout")))))})()):o.a.createElement(o.a.Fragment,null,o.a.createElement(c.Disabled,null,o.a.createElement(n.Suspense,{fallback:Object(r.a)()},o.a.createElement(p,{attributes:a,className:e.parentProps.className,latestPosts:g,block_id:e.parentProps.clientId.substr(0,8),categoriesList:d,deviceType:m}))))};t.default=o.a.memo(g)}}]);