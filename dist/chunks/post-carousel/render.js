(window.webpackJsonp_ultimate_addons_for_gutenberg=window.webpackJsonp_ultimate_addons_for_gutenberg||[]).push([[75],{180:function(e,t,a){"use strict";a.d(t,"b",(function(){return b})),a.d(t,"a",(function(){return p})),a.d(t,"e",(function(){return g})),a.d(t,"c",(function(){return h})),a.d(t,"d",(function(){return f}));var o=a(100),n=a(103),r=a(101),s=a(98),i=a(102),l=a(2);function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var o in a)Object.prototype.hasOwnProperty.call(a,o)&&(e[o]=a[o])}return e}).apply(this,arguments)}const u=Object(l.createContext)({parentName:"",parentClassName:"",isLoading:!1}),b=e=>{let{parentName:t="",parentClassName:a="",children:o}=e;const n={parentName:t,parentClassName:a};return React.createElement(u.Provider,{value:n},o)},p=[["uagb/post-image"],["uagb/post-title"],["uagb/post-meta"],["uagb/post-excerpt"],["uagb/post-button"]],g=(e,t,a,o,n)=>{if(!a)return;const r=h(e);let s=[];return a.map((a,i)=>{let[u,b={}]=a;b.children&&b.children.length>0&&(s=g(e,t,b.children,o,n));const p=r[u];return p?React.createElement(l.Suspense,{key:i,fallback:React.createElement("div",{className:"wc-block-placeholder"})},React.createElement(p,c({},b,{post:t,attributes:o,categoriesList:n}))):null})},d={};function m(e){e.context||(e.context="any"),w(e,"context","string"),w(e,"blockName","string"),_(e,"component");const{context:t,blockName:a,component:o}=e;d[t]||(d[t]={}),d[t][a]=o}const _=(e,t)=>{if(e[t]){if("function"==typeof e[t])return;if(e[t].$$typeof&&e[t].$$typeof===Symbol.for("react.lazy"))return}throw new Error(`Incorrect value for the ${t} argument when registering a block component. Component must be a valid React Element or Lazy callback.`)},w=(e,t,a)=>{const o=typeof e[t];if(o!==a)throw new Error(`Incorrect value for the ${t} argument when registering a block component. It was a ${o}, but must be a ${a}.`)};m({blockName:"uagb/post-title",component:o.a}),m({blockName:"uagb/post-image",component:r.a}),m({blockName:"uagb/post-meta",component:n.a}),m({blockName:"uagb/post-excerpt",component:s.a}),m({blockName:"uagb/post-button",component:i.a});const h=e=>{return{..."object"==typeof d[t=e]&&Object.keys(d[t]).length>0?d[t]:{},...d.any};var t},f=e=>e&&0!==e.length?e.map(e=>[e.name,{...e.attributes,post:void 0,children:e.innerBlocks.length>0?f(e.innerBlocks):[]}]):[]},187:function(e,t,a){"use strict";var o,n=a(14),r=a.n(n),s=a(188),i=0,l={injectType:"lazySingletonStyleTag",attributes:{id:"uagb-editor-styles"},insert:"head",singleton:!0},c={};c.locals=s.a.locals||{},c.use=function(){return i++||(o=r()(s.a,l)),c},c.unuse=function(){i>0&&!--i&&(o(),o=null)},t.a=c},188:function(e,t,a){"use strict";var o=a(15),n=a.n(o)()((function(e){return e[1]}));n.push([e.i,"/**\n * Editor styles for the admin\n */\n.uagb-post-grid .uagb-post__inner-wrap {\n  background-clip: content-box !important; }\n\n.uagb-post-grid h2 a {\n  text-decoration: none; }\n\n.uagb-post-grid a {\n  cursor: default;\n  pointer-events: none; }\n\n.uagb-post-grid .uagb-post__load-more-wrap {\n  width: 100%; }\n  .uagb-post-grid .uagb-post__load-more-wrap .uagb-post-pagination-button {\n    cursor: pointer;\n    pointer-events: visible; }\n  .uagb-post-grid .uagb-post__load-more-wrap a {\n    color: inherit; }\n\n.uagb-post-grid.uagb-editor-preview-mode-tablet.uagb-post__columns-tablet-1 article {\n  width: 100%; }\n\n.uagb-post-grid.uagb-editor-preview-mode-tablet.uagb-post__columns-tablet-2 article {\n  width: 50%; }\n\n.uagb-post-grid.uagb-editor-preview-mode-tablet.uagb-post__columns-tablet-3 article {\n  width: 33.2%; }\n\n.uagb-post-grid.uagb-editor-preview-mode-tablet.uagb-post__columns-tablet-4 article {\n  width: 25%; }\n\n.uagb-post-grid.uagb-editor-preview-mode-tablet.uagb-post__columns-tablet-5 article {\n  width: 20%; }\n\n.uagb-post-grid.uagb-editor-preview-mode-tablet.uagb-post__columns-tablet-6 article {\n  width: 16.66%; }\n\n.uagb-post-grid.uagb-editor-preview-mode-tablet.uagb-post__columns-tablet-7 article {\n  width: 14.28%; }\n\n.uagb-post-grid.uagb-editor-preview-mode-tablet.uagb-post__columns-tablet-8 article {\n  width: 12.5%; }\n\n.uagb-post-grid.uagb-editor-preview-mode-mobile.uagb-post__columns-mobile-1 article {\n  width: 100%; }\n\n.uagb-post-grid.uagb-editor-preview-mode-mobile.uagb-post__columns-mobile-2 article {\n  width: 50%; }\n\n.uagb-post-grid.uagb-editor-preview-mode-mobile.uagb-post__columns-mobile-3 article {\n  width: 33.2%; }\n\n.uagb-post-grid.uagb-editor-preview-mode-mobile.uagb-post__columns-mobile-4 article {\n  width: 25%; }\n\n.uagb-post-grid.uagb-editor-preview-mode-mobile.uagb-post__columns-mobile-5 article {\n  width: 20%; }\n\n.uagb-post-grid.uagb-editor-preview-mode-mobile.uagb-post__columns-mobile-6 article {\n  width: 16.66%; }\n\n.uagb-post-grid.uagb-editor-preview-mode-mobile.uagb-post__columns-mobile-7 article {\n  width: 14.28%; }\n\n.uagb-post-grid.uagb-editor-preview-mode-mobile.uagb-post__columns-mobile-8 article {\n  width: 12.5%; }\n\n.uagb-post-grid.uagb-post__items {\n  display: flex;\n  -ms-flex-wrap: wrap;\n  -webkit-flex-wrap: wrap;\n  flex-wrap: wrap; }\n\n.block-editor-page #wpwrap .edit-post-visual-editor .slick-dots button {\n  color: transparent; }\n\n.block-editor-page #wpwrap .edit-post-visual-editor .uagb-post__image-position-background .uagb-post__image img {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  width: auto;\n  height: auto;\n  max-width: none;\n  min-width: 100%;\n  min-height: 100%;\n  transform: translate(-50%, -50%);\n  -webkit-transform: translate(-50%, -50%);\n  -ms-transform: translate(-50%, -50%); }\n",""]),t.a=n},520:function(e,t,a){"use strict";a.r(t);var o=a(180),n=a(0),r=a.n(n),s=a(3),i=a.n(s),l=a(7),c=a(10),u=a(8);function b(){return(b=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var o in a)Object.prototype.hasOwnProperty.call(a,o)&&(e[o]=a[o])}return e}).apply(this,arguments)}const p=Object(n.lazy)(()=>a.e(1).then(a.t.bind(null,467,7)));function g(e){const t=Object(n.useRef)(),{attributes:a,className:s,latestPosts:g,block_id:d}=e,m=Object(c.a)(),{columns:_,tcolumns:w,mcolumns:h,imgPosition:f,postsToShow:k,autoplay:v,pauseOnHover:y,transitionSpeed:E,infiniteLoop:N,arrowSize:O,arrowBorderSize:j,arrowBorderRadius:x,arrowColor:C,arrowDots:S,equalHeight:B,layoutConfig:T,rowGap:L}=a,P=()=>{setTimeout(()=>{if(null!=t&&t.current){var e,a;const o=null==t||null===(e=t.current)||void 0===e?void 0:e.offsetWidth,n=100-L/o*100,r=null==t||null===(a=t.current)||void 0===a?void 0:a.closest(".uagb-post__image-position-background");if(r){const e=null==r?void 0:r.getElementsByClassName("uagb-post__image");for(const t of e)t&&(t.style.width=n+"%",t.style.marginLeft=L/2+"px")}}},100)};Object(n.useEffect)(()=>{P()},[t]),Object(n.useEffect)(()=>{P()},[f]);const I=g.length>k?g.slice(0,k):g;function R(){return r.a.createElement("button",{type:"button","data-role":"none",className:"slick-next slick-arrow","aria-label":"Next",tabIndex:"0",style:{borderColor:C,borderRadius:x,borderWidth:j}},l.a.carousel_right)}function z(){return r.a.createElement("button",{type:"button","data-role":"none",className:"slick-prev slick-arrow","aria-label":"Previous",tabIndex:"0",style:{borderColor:C,borderRadius:x,borderWidth:j}},l.a.carousel_left)}const $=B?"uagb-post__carousel_equal-height":"",A={slidesToShow:_,slidesToScroll:1,autoplaySpeed:2e3,autoplay:v,infinite:N,pauseOnHover:y,speed:E,arrows:"arrows"===S||"arrows_dots"===S,dots:"dots"===S||"arrows_dots"===S,rtl:!1,afterChange:()=>{B&&uagb_carousel_height(d)},nextArrow:r.a.createElement(R,{arrowSize:O}),prevArrow:r.a.createElement(z,{arrowSize:O}),responsive:[{breakpoint:1024,settings:{slidesToShow:w,slidesToScroll:1}},{breakpoint:767,settings:{slidesToShow:h,slidesToScroll:1}}]},D=I.map((a,n)=>r.a.createElement("article",{ref:t,key:n,className:"uagb-post__inner-wrap"},Object(o.e)("uagb/post-carousel",a,T,e.attributes,e.categoriesList)));return _>=I.length?r.a.createElement("div",{className:i()("is-carousel","uagb-post__columns-"+_,"uagb-post__columns-tablet-"+w,"uagb-post__columns-mobile-"+h,"uagb-post__items",s,"uagb-post-grid","uagb-post__arrow-outside","uagb-post__image-position-"+f,""+$,"uagb-editor-preview-mode-"+m.toLowerCase(),"uagb-block-"+d),"data-blog-id":d},r.a.createElement(o.b,{parentName:"uagb/post-carousel",parentClassName:"uagb-block-grid"},D)):r.a.createElement(n.Suspense,{fallback:Object(u.a)()},r.a.createElement(p,b({className:i()("is-carousel","uagb-post__columns-"+_,"uagb-post__items",s,"uagb-post-grid","uagb-post__arrow-outside","uagb-slick-carousel","uagb-post__image-position-"+f,""+$,"uagb-block-"+d),"data-blog-id":d,style:"dots"===S?{padding:"0 0 35px 0"}:{}},A),D))}var d=r.a.memo(g),m=a(1),_=a(5),w=a(6),h=a(4),f=a(187);const k=e=>{Object(n.useLayoutEffect)(()=>(f.a.use(),()=>{f.a.unuse()}),[]);const{state:t,setState:a,togglePreview:s}=e;e=e.parentProps;const{attributes:i,categoriesList:l,latestPosts:c,deviceType:u}=e,b=r.a.createElement(w.Disabled,null,r.a.createElement(d,{attributes:i,className:e.className,latestPosts:c,block_id:e.clientId.substr(0,8),categoriesList:l,deviceType:u}));return r.a.createElement(r.a.Fragment,null,t.isEditing?(()=>{const n={template:e.attributes.layoutConfig,templateLock:!1,allowedBlocks:Object.keys(Object(o.c)("uagb/post-grid"))};return 0!==e.attributes.layoutConfig.length&&(n.renderAppender=!1),r.a.createElement(w.Placeholder,{label:"Post Carousel Layout"},r.a.createElement("div",{className:"uagb-block-all-post-grid-item-template"},r.a.createElement(w.Tip,null,Object(m.__)("Edit the blocks inside the preview below to change the content displayed for each post within the post carousel.")),r.a.createElement(o.b,{parentName:"uagb/post-grid",parentClassName:"uagb-block-grid"},r.a.createElement("article",{className:"uagb-post__inner-wrap uagb-post__edit-mode"},r.a.createElement("div",{className:"uagb-post__text"},r.a.createElement(h.InnerBlocks,n)))),r.a.createElement("div",{className:"uagb-block-all-post__actions"},r.a.createElement(w.Button,{className:"uagb-block-all-post__done-button",isPrimary:!0,onClick:()=>{const{block:t,setAttributes:n}=e;n({layoutConfig:Object(o.d)(t)}),a({innerBlocks:t}),s()}},Object(m.__)("Done")),r.a.createElement(w.Button,{className:"uagb-block-all-post__cancel-button",isTertiary:!0,onClick:()=>{const{replaceInnerBlocks:a}=e,{innerBlocks:o}=t;a(e.clientId,o),s()}},Object(m.__)("Cancel")),r.a.createElement(w.Button,{className:"uagb-block-all-post__reset-button",onClick:()=>{const{block:t,replaceInnerBlocks:n}=e,r=[];o.a.map(e=>{let[t,a]=e;return r.push(Object(_.createBlock)(t,a)),!0}),n(e.clientId,r),a({innerBlocks:t})}},Object(m.__)("Reset Layout")))))})():b)};t.default=r.a.memo(k)}}]);