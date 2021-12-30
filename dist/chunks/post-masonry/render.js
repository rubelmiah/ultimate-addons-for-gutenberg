(window.webpackJsonp_ultimate_addons_for_gutenberg=window.webpackJsonp_ultimate_addons_for_gutenberg||[]).push([[79],{275:function(t,e,a){"use strict";a.d(e,"b",(function(){return b})),a.d(e,"a",(function(){return p})),a.d(e,"e",(function(){return g})),a.d(e,"c",(function(){return h})),a.d(e,"d",(function(){return f}));var n=a(100),o=a(103),r=a(101),i=a(98),s=a(102),l=a(3);function c(){return(c=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var a=arguments[e];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(t[n]=a[n])}return t}).apply(this,arguments)}const u=Object(l.createContext)({parentName:"",parentClassName:"",isLoading:!1}),b=({parentName:t="",parentClassName:e="",children:a})=>{const n={parentName:t,parentClassName:e};return React.createElement(u.Provider,{value:n},a)},p=[["uagb/post-image"],["uagb/post-title"],["uagb/post-meta"],["uagb/post-excerpt"],["uagb/post-button"]],g=(t,e,a,n,o)=>{if(!a)return;const r=h(t);let i=[];return a.map(([a,s={}],u)=>{s.children&&s.children.length>0&&(i=g(t,e,s.children,n,o));const b=r[a];return b?React.createElement(l.Suspense,{key:u,fallback:React.createElement("div",{className:"wc-block-placeholder"})},React.createElement(b,c({},s,{post:e,attributes:n,categoriesList:o}))):null})},d={};function m(t){t.context||(t.context="any"),w(t,"context","string"),w(t,"blockName","string"),_(t,"component");const{context:e,blockName:a,component:n}=t;d[e]||(d[e]={}),d[e][a]=n}const _=(t,e)=>{if(t[e]){if("function"==typeof t[e])return;if(t[e].$$typeof&&t[e].$$typeof===Symbol.for("react.lazy"))return}throw new Error(`Incorrect value for the ${e} argument when registering a block component. Component must be a valid React Element or Lazy callback.`)},w=(t,e,a)=>{const n=typeof t[e];if(n!==a)throw new Error(`Incorrect value for the ${e} argument when registering a block component. It was a ${n}, but must be a ${a}.`)};m({blockName:"uagb/post-title",component:n.a}),m({blockName:"uagb/post-image",component:r.a}),m({blockName:"uagb/post-meta",component:o.a}),m({blockName:"uagb/post-excerpt",component:i.a}),m({blockName:"uagb/post-button",component:s.a});const h=t=>{return{..."object"==typeof d[e=t]&&Object.keys(d[e]).length>0?d[e]:{},...d.any};var e},f=t=>t&&0!==t.length?t.map(t=>[t.name,{...t.attributes,post:void 0,children:t.innerBlocks.length>0?f(t.innerBlocks):[]}]):[]},281:function(t,e,a){"use strict";var n,o=a(18),r=a.n(o),i=a(282),s=0,l={injectType:"lazySingletonStyleTag",attributes:{id:"uagb-editor-styles"},insert:"head",singleton:!0},c={};c.locals=i.a.locals||{},c.use=function(){return s++||(n=r()(i.a,l)),c},c.unuse=function(){s>0&&!--s&&(n(),n=null)},e.a=c},282:function(t,e,a){"use strict";var n=a(19),o=a.n(n)()((function(t){return t[1]}));o.push([t.i,"/**\r\n * Editor styles for the admin\r\n */\n.uagb-post-grid .uagb-post__inner-wrap {\n  background-clip: content-box !important; }\n\n.uagb-post-grid h2 a {\n  text-decoration: none; }\n\n.uagb-post-grid a {\n  cursor: default;\n  pointer-events: none; }\n\n.uagb-post-grid .uagb-post__load-more-wrap {\n  width: 100%; }\n  .uagb-post-grid .uagb-post__load-more-wrap .uagb-post-pagination-button {\n    cursor: pointer;\n    pointer-events: visible; }\n  .uagb-post-grid .uagb-post__load-more-wrap a {\n    color: inherit; }\n\n.uagb-post-grid.uagb-editor-preview-mode-tablet .uagb-post__columns-tablet-1 article {\n  width: 100%; }\n\n.uagb-post-grid.uagb-editor-preview-mode-tablet .uagb-post__columns-tablet-2 article {\n  width: 50%; }\n\n.uagb-post-grid.uagb-editor-preview-mode-tablet .uagb-post__columns-tablet-3 article {\n  width: 33.2%; }\n\n.uagb-post-grid.uagb-editor-preview-mode-tablet .uagb-post__columns-tablet-4 article {\n  width: 25%; }\n\n.uagb-post-grid.uagb-editor-preview-mode-tablet .uagb-post__columns-tablet-5 article {\n  width: 20%; }\n\n.uagb-post-grid.uagb-editor-preview-mode-tablet .uagb-post__columns-tablet-6 article {\n  width: 16.66%; }\n\n.uagb-post-grid.uagb-editor-preview-mode-tablet .uagb-post__columns-tablet-7 article {\n  width: 14.28%; }\n\n.uagb-post-grid.uagb-editor-preview-mode-tablet .uagb-post__columns-tablet-8 article {\n  width: 12.5%; }\n\n.uagb-post-grid.uagb-editor-preview-mode-mobile .uagb-post__columns-mobile-1 article {\n  width: 100%; }\n\n.uagb-post-grid.uagb-editor-preview-mode-mobile .uagb-post__columns-mobile-2 article {\n  width: 50%; }\n\n.uagb-post-grid.uagb-editor-preview-mode-mobile .uagb-post__columns-mobile-3 article {\n  width: 33.2%; }\n\n.uagb-post-grid.uagb-editor-preview-mode-mobile .uagb-post__columns-mobile-4 article {\n  width: 25%; }\n\n.uagb-post-grid.uagb-editor-preview-mode-mobile .uagb-post__columns-mobile-5 article {\n  width: 20%; }\n\n.uagb-post-grid.uagb-editor-preview-mode-mobile .uagb-post__columns-mobile-6 article {\n  width: 16.66%; }\n\n.uagb-post-grid.uagb-editor-preview-mode-mobile .uagb-post__columns-tablet-7 article {\n  width: 14.28%; }\n\n.uagb-post-grid.uagb-editor-preview-mode-mobile .uagb-post__columns-tablet-8 article {\n  width: 12.5%; }\n\n.uagb-post-grid.uagb-post__items {\n  display: flex;\n  -ms-flex-wrap: wrap;\n  -webkit-flex-wrap: wrap;\n  flex-wrap: wrap; }\n\n.block-editor-page #wpwrap .edit-post-visual-editor .slick-dots button {\n  color: transparent; }\n\n.block-editor-page #wpwrap .edit-post-visual-editor .uagb-post__image-position-background .uagb-post__image img {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  width: auto;\n  height: auto;\n  max-width: none;\n  min-width: 100%;\n  min-height: 100%;\n  transform: translate(-50%, -50%);\n  -webkit-transform: translate(-50%, -50%);\n  -ms-transform: translate(-50%, -50%); }\n",""]),e.a=o},431:function(t,e,a){"use strict";a.r(e);var n=a(275),o=a(6),r=a(5),i=a(8),s=a(2),l=a(1),c=a.n(l),u=a(11),b=a(281);const p=Object(l.lazy)(()=>Promise.all([a.e(112),a.e(78)]).then(a.bind(null,343))),g=t=>{Object(l.useLayoutEffect)(()=>(b.a.use(),()=>{b.a.unuse()}),[]);const{state:e,setState:a,togglePreview:g}=t;t=t.parentProps;const{categoriesList:d,latestPosts:m,attributes:_,deviceType:w}=t,h=c.a.createElement(i.Disabled,null,c.a.createElement(l.Suspense,{fallback:Object(u.a)()},c.a.createElement(p,{attributes:_,className:t.className,latestPosts:m,block_id:t.clientId.substr(0,8),categoriesList:d,deviceType:w})));return c.a.createElement(c.a.Fragment,null,e.isEditing?(()=>{const l={template:t.attributes.layoutConfig,templateLock:!1,allowedBlocks:Object.keys(Object(n.c)("uagb/post-masonry"))};return 0!==t.attributes.layoutConfig.length&&(l.renderAppender=!1),c.a.createElement(i.Placeholder,{label:"Post Masonry Layout"},c.a.createElement("div",{className:"uagb-block-all-post-grid-item-template"},c.a.createElement(i.Tip,null,Object(s.__)("Edit the blocks inside the preview below to change the content displayed for each post within the post grid.")),c.a.createElement(n.b,{parentName:"uagb/post-masonry",parentClassName:"uagb-block-grid"},c.a.createElement("article",{className:"uagb-post__inner-wrap uagb-post__edit-mode"},c.a.createElement("div",{className:"uagb-post__text"},c.a.createElement(r.InnerBlocks,l)))),c.a.createElement("div",{className:"uagb-block-all-post__actions"},c.a.createElement(i.Button,{className:"uagb-block-all-post__done-button",isPrimary:!0,onClick:()=>{const{block:e,setAttributes:o}=t;o({layoutConfig:Object(n.d)(e)}),a({innerBlocks:e}),g()}},Object(s.__)("Done")),c.a.createElement(i.Button,{className:"uagb-block-all-post__cancel-button",isTertiary:!0,onClick:()=>{const{replaceInnerBlocks:a}=t,{innerBlocks:n}=e;a(t.clientId,n),g()}},Object(s.__)("Cancel")),c.a.createElement(i.Button,{className:"uagb-block-all-post__reset-button",onClick:()=>{const{block:e,replaceInnerBlocks:r}=t,i=[];n.a.map(([t,e])=>(i.push(Object(o.createBlock)(t,e)),!0)),r(t.clientId,i),a({innerBlocks:e})}},Object(s.__)("Reset Layout")))))})():h)};e.default=c.a.memo(g)}}]);