(window.webpackJsonp_ultimate_addons_for_gutenberg=window.webpackJsonp_ultimate_addons_for_gutenberg||[]).push([[63],{289:function(e,t,a){"use strict";var n=a(14),l=a.n(n)()((function(e){return e[1]}));l.push([e.i,'.uagb-icon-list__wrap > .block-editor-inner-blocks {\n  width: 100%; }\n\n.wp-block.block-editor-block-list__block[data-type="uagb/icon-list-child"] a {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: unset; }\n',""]),t.a=l},533:function(e,t,a){"use strict";a.r(t);var n,l=a(3),i=a.n(l),o=a(11),s=a(1),r=a(4),c=a(0),u=a.n(c),b=a(13),g=a.n(b),d=a(289),_=0,m={injectType:"lazySingletonStyleTag",attributes:{id:"uagb-editor-styles"},insert:"head",singleton:!0},p={};p.locals=d.a.locals||{},p.use=function(){return _++||(n=g()(d.a,m)),p},p.unuse=function(){_>0&&!--_&&(n(),n=null)};var f=p;const h=e=>{Object(c.useLayoutEffect)(()=>(f.use(),()=>{f.unuse()}),[]),e=e.parentProps;const{attributes:t,setAttributes:a,className:n}=e,{label:l,image_icon:b,icon:g,image:d,block_id:_,link:m,target:p,disableLink:h,hideLabel:k}=t;let w="";"icon"===b?g&&(w=Object(o.a)(g)):d&&d.url&&(w=u.a.createElement("img",{className:"uagb-icon-list__source-image",alt:"",src:d.url}));const N=p?"_blank":"_self",y=h?m:"/";return u.a.createElement("div",{className:i()(n,"uagb-block-"+_)},h&&u.a.createElement("a",{target:N,rel:"noopener noreferrer","aria-label":l,href:y}," "),u.a.createElement("span",{className:"uagb-icon-list__source-wrap"},w),!k&&u.a.createElement(r.RichText,{tagName:"span",placeholder:Object(s.__)("Label Name","ultimate-addons-for-gutenberg"),value:l,onChange:e=>a({label:e}),className:"uagb-icon-list__label",multiline:!1,allowedFormats:["core/bold","core/italic","core/strikethrough"]}))};t.default=u.a.memo(h)}}]);