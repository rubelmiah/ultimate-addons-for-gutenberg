(window.webpackJsonp_ultimate_addons_for_gutenberg=window.webpackJsonp_ultimate_addons_for_gutenberg||[]).push([[61],{350:function(e,a,t){"use strict";var n=t(19),l=t.n(n)()((function(e){return e[1]}));l.push([e.i,'.uagb-icon-list__wrap > .block-editor-inner-blocks {\n  width: 100%; }\n\n.wp-block.block-editor-block-list__block[data-type="uagb/icon-list-child"] {\n  margin-top: 15px;\n  margin-bottom: 15px; }\n',""]),a.a=l},591:function(e,a,t){"use strict";t.r(a);var n,l=t(4),o=t.n(l),i=t(12),r=t(2),s=t(5),c=t(1),u=t.n(c),b=t(18),g=t.n(b),m=t(350),d=0,_={injectType:"lazySingletonStyleTag",attributes:{id:"uagb-editor-styles"},insert:"head",singleton:!0},p={};p.locals=m.a.locals||{},p.use=function(){return d++||(n=g()(m.a,_)),p},p.unuse=function(){d>0&&!--d&&(n(),n=null)};var f=p;const k=e=>{Object(c.useLayoutEffect)(()=>(f.use(),()=>{f.unuse()}),[]),e=e.parentProps;const{attributes:a,setAttributes:t,className:n}=e,{label:l,image_icon:b,icon:g,image:m,block_id:d,link:_,target:p,disableLink:k,hideLabel:h}=a;let w="";"icon"===b?g&&(w=Object(i.a)(g)):m&&m.url&&(w=u.a.createElement("img",{className:"uagb-icon-list__source-image",alt:"",src:m.url}));const N=p?"_blank":"_self",y=k?_:"/";return u.a.createElement("div",{className:o()(n,"uagb-block-"+d)},k&&u.a.createElement("a",{target:N,rel:"noopener noreferrer","aria-label":l,href:y}," "),u.a.createElement("span",{className:"uagb-icon-list__source-wrap"},w),!h&&""!==l&&u.a.createElement(s.RichText,{tagName:"span",placeholder:Object(r.__)("Label Name","ultimate-addons-for-gutenberg"),value:l,onChange:e=>t({label:e}),className:"uagb-icon-list__label",multiline:!1,allowedFormats:["core/bold","core/italic","core/strikethrough"]}))};a.default=u.a.memo(k)}}]);