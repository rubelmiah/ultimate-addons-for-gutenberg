(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{344:function(e,a,t){"use strict";t.r(a);var c=t(2),i=t.n(c),n=t(17),l=t(1),o=t.n(l),r=["uagb/icon-list-child"],s=function(e){var a=e=e.parentProps,t=a.attributes,c=a.deviceType,s=t.className,u=t.icon_count,b=t.icon_layout,m=t.iconPosition,_=t.hideLabel,p=t.block_id,g=_?"uagb-icon-list__no-label":"",d=Object(l.useMemo)((function(){for(var e=[],a=0;a<u;a++)e.push(["uagb/icon-list-child",{id:a+1}]);return e}),[u]);return o.a.createElement("div",{className:i()(s,"uagb-icon-list__outer-wrap","uagb-icon-list__layout-".concat(b),"top"==m?"uagb-icon-list__icon-at-top":"",g,"uagb-editor-preview-mode-".concat(c.toLowerCase()),"uagb-block-".concat(p))},o.a.createElement("div",{className:"uagb-icon-list__wrap"},o.a.createElement(n.InnerBlocks,{template:d,templateLock:!1,allowedBlocks:r,__experimentalMoverDirection:b})))};a.default=o.a.memo(s)},346:function(e,a,t){"use strict";t.r(a);var c=t(2),i=t.n(c),n=t(4),l=t(0),o=t(17),r=t(1),s=t.n(r);function u(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}var b=function(e){var a,t=e=e.parentProps,c=t.attributes,r=t.setAttributes,b=c.className,m=c.label,_=c.image_icon,p=c.icon,g=c.image,d=c.block_id,v=c.link,w=c.target,f=c.disableLink,h=c.hideLabel,k="";"icon"==_?p&&(k=s.a.createElement("span",{className:"uagb-icon-list__source-icon"},Object(n.a)(p))):g&&g.url&&(k=s.a.createElement("img",{className:"uagb-icon-list__source-image",alt:"",src:g.url}));var N=w?"_blank":"_self",E=f?"/":v;return s.a.createElement("div",{className:i()("uagb-icon-list-repeater","uagb-icon-list__wrapper",b,"uagb-block-".concat(d))},!f&&s.a.createElement("a",{target:N,rel:"noopener noreferrer","aria-label":m,href:E}),s.a.createElement("div",{className:"uagb-icon-list__content-wrap"},s.a.createElement("span",{className:"uagb-icon-list__source-wrap"},k),!h&&""!=m&&s.a.createElement("div",{className:"uagb-icon-list__label-wrap"},s.a.createElement(o.RichText,(u(a={tagName:"div",placeholder:Object(l.__)("Label Name","ultimate-addons-for-gutenberg"),value:m,onChange:function(e){return r({label:e})},className:"uagb-icon-list__label"},"placeholder",Object(l.__)("Description")),u(a,"multiline",!1),u(a,"allowedFormats",["core/bold","core/italic","core/strikethrough"]),a)))))};a.default=s.a.memo(b)}}]);