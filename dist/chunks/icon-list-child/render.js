(window.webpackJsonp_ultimate_addons_for_gutenberg=window.webpackJsonp_ultimate_addons_for_gutenberg||[]).push([[63],{247:function(e,t,a){"use strict";var n=a(16),l=a.n(n)()((function(e){return e[1]}));l.push([e.i,'.uagb-icon-list__wrap > .block-editor-inner-blocks {\n  width: 100%; }\n\n.wp-block.block-editor-block-list__block[data-type="uagb/icon-list-child"] {\n  margin-top: 15px;\n  margin-bottom: 15px; }\n  .wp-block.block-editor-block-list__block[data-type="uagb/icon-list-child"] a {\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: unset; }\n',""]),t.a=l},487:function(e,t,a){"use strict";a.r(t);var n,l=a(3),o=a.n(l),i=a(12),c=a(1),s=a(4),r=a(0),u=a.n(r),b=a(15),g=a.n(b),d=a(247),m=0,_={injectType:"lazySingletonStyleTag",attributes:{id:"uagb-editor-styles"},insert:"head",singleton:!0},p={};p.locals=d.a.locals||{},p.use=function(){return m++||(n=g()(d.a,_)),p},p.unuse=function(){m>0&&!--m&&(n(),n=null)};var k=p;const h=e=>{Object(r.useLayoutEffect)(()=>(k.use(),()=>{k.unuse()}),[]),e=e.parentProps;const{attributes:t,setAttributes:a,className:n}=e,{label:l,image_icon:b,icon:g,image:d,block_id:m,link:_,target:p,disableLink:h,hideLabel:f}=t;let w="";"icon"===b?g&&(w=Object(i.a)(g)):d&&d.url&&(w=u.a.createElement("img",{className:"uagb-icon-list__source-image",alt:"",src:d.url}));const y=p?"_blank":"_self",N=h?_:"/";return u.a.createElement("div",{className:o()(n,"uagb-block-"+m)},h&&u.a.createElement("a",{target:y,rel:"noopener noreferrer","aria-label":l,href:N}," "),u.a.createElement("span",{className:"uagb-icon-list__source-wrap"},w),!f&&""!==l&&u.a.createElement(s.RichText,{tagName:"span",placeholder:Object(c.__)("Label Name","ultimate-addons-for-gutenberg"),value:l,onChange:e=>a({label:e}),className:"uagb-icon-list__label",multiline:!1,allowedFormats:["core/bold","core/italic","core/strikethrough"]}))};t.default=u.a.memo(h)}}]);