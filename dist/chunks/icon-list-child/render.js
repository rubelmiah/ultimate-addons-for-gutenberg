(window.webpackJsonp_ultimate_addons_for_gutenberg=window.webpackJsonp_ultimate_addons_for_gutenberg||[]).push([[61],{348:function(e,a,t){"use strict";var n=t(19),l=t.n(n)()((function(e){return e[1]}));l.push([e.i,'.uagb-icon-list__wrap > .block-editor-inner-blocks {\n  width: 100%; }\n\n.wp-block.block-editor-block-list__block[data-type="uagb/icon-list-child"] {\n  margin-top: 15px;\n  margin-bottom: 15px; }\n\n.uagb-icon-list__layout-vertical .uagb-icon-list__wrap .block-list-appender {\n  margin-top: 28px;\n  width: 60px; }\n\n.uagb-icon-list__layout-horizontal .uagb-icon-list__wrap .block-list-appender {\n  margin-top: 0;\n  margin-bottom: 0;\n  margin-left: 20px;\n  width: 52px;\n  height: 52px; }\n',""]),a.a=l},589:function(e,a,t){"use strict";t.r(a);var n,l=t(4),i=t.n(l),o=t(12),r=t(2),c=t(5),s=t(1),u=t.n(s),b=t(18),g=t.n(b),_=t(348),p=0,m={injectType:"lazySingletonStyleTag",attributes:{id:"uagb-editor-styles"},insert:"head",singleton:!0},d={};d.locals=_.a.locals||{},d.use=function(){return p++||(n=g()(_.a,m)),d},d.unuse=function(){p>0&&!--p&&(n(),n=null)};var w=d;const h=e=>{Object(s.useLayoutEffect)(()=>(w.use(),()=>{w.unuse()}),[]),e=e.parentProps;const{attributes:a,setAttributes:t}=e,{className:n,label:l,image_icon:b,icon:g,image:_,block_id:p,link:m,target:d,disableLink:h,hideLabel:k}=a;let f="";"icon"===b?g&&(f=u.a.createElement("span",{className:"uagb-icon-list__source-icon"},Object(o.a)(g))):_&&_.url&&(f=u.a.createElement("img",{className:"uagb-icon-list__source-image",alt:"",src:_.url}));const N=d?"_blank":"_self",v=h?"/":m;return u.a.createElement("div",{className:i()("uagb-icon-list-repeater","uagb-icon-list__wrapper",n,"uagb-block-"+p)},!h&&u.a.createElement("a",{target:N,rel:"noopener noreferrer","aria-label":l,href:v}," "),u.a.createElement("div",{className:"uagb-icon-list__content-wrap"},u.a.createElement("span",{className:"uagb-icon-list__source-wrap"},f),!k&&""!==l&&u.a.createElement("div",{className:"uagb-icon-list__label-wrap"},u.a.createElement(c.RichText,{tagName:"div",placeholder:Object(r.__)("Label Name","ultimate-addons-for-gutenberg"),value:l,onChange:e=>t({label:e}),className:"uagb-icon-list__label",multiline:!1,allowedFormats:["core/bold","core/italic","core/strikethrough"]}))))};a.default=u.a.memo(h)}}]);