(window.webpackJsonp_ultimate_addons_for_gutenberg=window.webpackJsonp_ultimate_addons_for_gutenberg||[]).push([[92],{424:function(t,e,a){"use strict";var n=a(17),r=a.n(n)()((function(t){return t[1]}));r.push([t.i,".uag-star-rating__wrapper .block-editor-rich-text__editable.uag-star-rating__title {\n  margin: 0;\n  margin-right: 10px; }\n",""]),e.a=r},609:function(t,e,a){"use strict";a.r(e);var n,r=a(4),i=a.n(r),u=a(2),s=a(5),c=a(16),o=a.n(c),l=a(424),g=0,_={injectType:"lazySingletonStyleTag",attributes:{id:"uagb-editor-styles"},insert:"head",singleton:!0},d={};d.locals=l.a.locals||{},d.use=function(){return g++||(n=o()(l.a,_)),d},d.unuse=function(){g>0&&!--g&&(n(),n=null)};var p=d,m=a(1),b=a.n(m),f=function(t){Object(m.useLayoutEffect)((function(){return p.use(),function(){p.unuse()}}),[]);for(var e=t=t.parentProps,a=e.className,n=e.setAttributes,r=e.deviceType,c=e.attributes,o=c.rating,l=c.range,g=c.layout,_=c.title,d=parseInt(l),f=[],w=1;w<=d;w++)f.push(b.a.createElement("span",{key:w,className:"uag-star"},"★"));return b.a.createElement("div",{className:i()(a,"uagb-editor-preview-mode-".concat(r.toLowerCase()),"uag-star-rating__layout-".concat(g),"uag-star-rating__wrapper","uagb-block-".concat(t.clientId.substr(0,8)))},b.a.createElement(s.RichText,{tagName:"p",placeholder:Object(u.__)("Write a title","ultimate-addons-for-gutenberg"),value:_,className:"uag-star-rating__title",onChange:function(t){return n({title:t})}}),b.a.createElement("div",{className:"uag-star-rating",title:"".concat(o,"/").concat(l)},f))};e.default=b.a.memo(f)}}]);