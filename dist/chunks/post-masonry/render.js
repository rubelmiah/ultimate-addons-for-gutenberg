(window.webpackJsonp_ultimate_addons_for_gutenberg=window.webpackJsonp_ultimate_addons_for_gutenberg||[]).push([[81],{202:function(e,t,a){"use strict";a.d(t,"b",(function(){return b})),a.d(t,"a",(function(){return p})),a.d(t,"e",(function(){return g})),a.d(t,"c",(function(){return h})),a.d(t,"d",(function(){return f}));var n=a(122),o=a(125),r=a(123),i=a(120),l=a(124),s=a(2);function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}const u=Object(s.createContext)({parentName:"",parentClassName:"",isLoading:!1}),b=e=>{let{parentName:t="",parentClassName:a="",children:n}=e;const o={parentName:t,parentClassName:a};return React.createElement(u.Provider,{value:o},n)},p=[["uagb/post-image"],["uagb/post-title"],["uagb/post-meta"],["uagb/post-excerpt"],["uagb/post-button"]],g=(e,t,a,n,o)=>{if(!a)return;const r=h(e);let i=[];return a.map((a,l)=>{let[u,b={}]=a;b.children&&b.children.length>0&&(i=g(e,t,b.children,n,o));const p=r[u];return p?React.createElement(s.Suspense,{key:l,fallback:React.createElement("div",{className:"wc-block-placeholder"})},React.createElement(p,c({},b,{post:t,attributes:n,categoriesList:o}))):null})},m={};function d(e){e.context||(e.context="any"),w(e,"context","string"),w(e,"blockName","string"),_(e,"component");const{context:t,blockName:a,component:n}=e;m[t]||(m[t]={}),m[t][a]=n}const _=(e,t)=>{if(e[t]){if("function"==typeof e[t])return;if(e[t].$$typeof&&e[t].$$typeof===Symbol.for("react.lazy"))return}throw new Error(`Incorrect value for the ${t} argument when registering a block component. Component must be a valid React Element or Lazy callback.`)},w=(e,t,a)=>{const n=typeof e[t];if(n!==a)throw new Error(`Incorrect value for the ${t} argument when registering a block component. It was a ${n}, but must be a ${a}.`)};d({blockName:"uagb/post-title",component:n.a}),d({blockName:"uagb/post-image",component:r.a}),d({blockName:"uagb/post-meta",component:o.a}),d({blockName:"uagb/post-excerpt",component:i.a}),d({blockName:"uagb/post-button",component:l.a});const h=e=>{return{..."object"==typeof m[t=e]&&Object.keys(m[t]).length>0?m[t]:{},...m.any};var t},f=e=>e&&0!==e.length?e.map(e=>[e.name,{...e.attributes,post:void 0,children:e.innerBlocks.length>0?f(e.innerBlocks):[]}]):[]},209:function(e,t,a){"use strict";var n,o=a(15),r=a.n(o),i=a(210),l=0,s={injectType:"lazySingletonStyleTag",attributes:{id:"uagb-editor-styles"},insert:"head",singleton:!0},c={};c.locals=i.a.locals||{},c.use=function(){return l++||(n=r()(i.a,s)),c},c.unuse=function(){l>0&&!--l&&(n(),n=null)},t.a=c},210:function(e,t,a){"use strict";var n=a(16),o=a.n(n)()((function(e){return e[1]}));o.push([e.i,"/**\n * Editor styles for the admin\n */\n.uagb-post-grid .uagb-post__inner-wrap {\n  background-clip: content-box !important; }\n\n.uagb-post-grid h2 a {\n  text-decoration: none; }\n\n.uagb-post-grid a {\n  cursor: default;\n  pointer-events: none; }\n\n.uagb-post-grid .uagb-post__load-more-wrap {\n  width: 100%; }\n  .uagb-post-grid .uagb-post__load-more-wrap .uagb-post-pagination-button {\n    cursor: pointer;\n    pointer-events: visible; }\n  .uagb-post-grid .uagb-post__load-more-wrap a {\n    color: inherit; }\n\n.uagb-post-grid.uagb-editor-preview-mode-tablet.uagb-post__columns-tablet-1 article {\n  width: 100%; }\n\n.uagb-post-grid.uagb-editor-preview-mode-tablet.uagb-post__columns-tablet-2 article {\n  width: 50%; }\n\n.uagb-post-grid.uagb-editor-preview-mode-tablet.uagb-post__columns-tablet-3 article {\n  width: 33.2%; }\n\n.uagb-post-grid.uagb-editor-preview-mode-tablet.uagb-post__columns-tablet-4 article {\n  width: 25%; }\n\n.uagb-post-grid.uagb-editor-preview-mode-tablet.uagb-post__columns-tablet-5 article {\n  width: 20%; }\n\n.uagb-post-grid.uagb-editor-preview-mode-tablet.uagb-post__columns-tablet-6 article {\n  width: 16.66%; }\n\n.uagb-post-grid.uagb-editor-preview-mode-tablet.uagb-post__columns-tablet-7 article {\n  width: 14.28%; }\n\n.uagb-post-grid.uagb-editor-preview-mode-tablet.uagb-post__columns-tablet-8 article {\n  width: 12.5%; }\n\n.uagb-post-grid.uagb-editor-preview-mode-mobile.uagb-post__columns-mobile-1 article {\n  width: 100%; }\n\n.uagb-post-grid.uagb-editor-preview-mode-mobile.uagb-post__columns-mobile-2 article {\n  width: 50%; }\n\n.uagb-post-grid.uagb-editor-preview-mode-mobile.uagb-post__columns-mobile-3 article {\n  width: 33.2%; }\n\n.uagb-post-grid.uagb-editor-preview-mode-mobile.uagb-post__columns-mobile-4 article {\n  width: 25%; }\n\n.uagb-post-grid.uagb-editor-preview-mode-mobile.uagb-post__columns-mobile-5 article {\n  width: 20%; }\n\n.uagb-post-grid.uagb-editor-preview-mode-mobile.uagb-post__columns-mobile-6 article {\n  width: 16.66%; }\n\n.uagb-post-grid.uagb-editor-preview-mode-mobile.uagb-post__columns-mobile-7 article {\n  width: 14.28%; }\n\n.uagb-post-grid.uagb-editor-preview-mode-mobile.uagb-post__columns-mobile-8 article {\n  width: 12.5%; }\n\n.uagb-post-grid.uagb-post__items {\n  display: flex;\n  -ms-flex-wrap: wrap;\n  -webkit-flex-wrap: wrap;\n  flex-wrap: wrap; }\n\n.block-editor-page #wpwrap .edit-post-visual-editor .slick-dots button {\n  color: transparent; }\n\n.block-editor-page #wpwrap .edit-post-visual-editor .uagb-post__image-position-background .uagb-post__image img {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  width: auto;\n  height: auto;\n  max-width: none;\n  min-width: 100%;\n  min-height: 100%;\n  transform: translate(-50%, -50%);\n  -webkit-transform: translate(-50%, -50%);\n  -ms-transform: translate(-50%, -50%); }\n",""]),t.a=o},442:function(e,t,a){"use strict";a.r(t);var n=a(202),o=a(5),r=a(4),i=a(6),l=a(1),s=a(0),c=a.n(s),u=a(8),b=a(209);const p=Object(s.lazy)(()=>Promise.all([a.e(114),a.e(80)]).then(a.bind(null,304))),g=e=>{Object(s.useLayoutEffect)(()=>(b.a.use(),()=>{b.a.unuse()}),[]);const{state:t,setState:a,togglePreview:g}=e;e=e.parentProps;const{categoriesList:m,latestPosts:d,attributes:_,deviceType:w}=e,h=c.a.createElement(i.Disabled,null,c.a.createElement(s.Suspense,{fallback:Object(u.a)()},c.a.createElement(p,{attributes:_,className:e.className,latestPosts:d,block_id:e.clientId.substr(0,8),categoriesList:m,deviceType:w})));return c.a.createElement(c.a.Fragment,null,t.isEditing?(()=>{const s={template:e.attributes.layoutConfig,templateLock:!1,allowedBlocks:Object.keys(Object(n.c)("uagb/post-masonry"))};return 0!==e.attributes.layoutConfig.length&&(s.renderAppender=!1),c.a.createElement(i.Placeholder,{label:"Post Masonry Layout"},c.a.createElement("div",{className:"uagb-block-all-post-grid-item-template"},c.a.createElement(i.Tip,null,Object(l.__)("Edit the blocks inside the preview below to change the content displayed for each post within the post grid.")),c.a.createElement(n.b,{parentName:"uagb/post-masonry",parentClassName:"uagb-block-grid"},c.a.createElement("article",{className:"uagb-post__inner-wrap uagb-post__edit-mode"},c.a.createElement("div",{className:"uagb-post__text"},c.a.createElement(r.InnerBlocks,s)))),c.a.createElement("div",{className:"uagb-block-all-post__actions"},c.a.createElement(i.Button,{className:"uagb-block-all-post__done-button",isPrimary:!0,onClick:()=>{const{block:t,setAttributes:o}=e;o({layoutConfig:Object(n.d)(t)}),a({innerBlocks:t}),g()}},Object(l.__)("Done")),c.a.createElement(i.Button,{className:"uagb-block-all-post__cancel-button",isTertiary:!0,onClick:()=>{const{replaceInnerBlocks:a}=e,{innerBlocks:n}=t;a(e.clientId,n),g()}},Object(l.__)("Cancel")),c.a.createElement(i.Button,{className:"uagb-block-all-post__reset-button",onClick:()=>{const{block:t,replaceInnerBlocks:r}=e,i=[];n.a.map(e=>{let[t,a]=e;return i.push(Object(o.createBlock)(t,a)),!0}),r(e.clientId,i),a({innerBlocks:t})}},Object(l.__)("Reset Layout")))))})():h)};t.default=c.a.memo(g)}}]);