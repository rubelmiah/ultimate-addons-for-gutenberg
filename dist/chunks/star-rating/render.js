(window.webpackJsonp_ultimate_addons_for_gutenberg=window.webpackJsonp_ultimate_addons_for_gutenberg||[]).push([[95],{341:function(e,t,a){"use strict";var n=a(19),r=a.n(n)()((function(e){return e[1]}));r.push([e.i,".wp-block-uagb-star-rating .block-editor-rich-text__editable.uag-star-rating__title {\n  margin: 0;\n  margin-right: 10px; }\n",""]),t.a=r},528:function(e,t,a){"use strict";a.r(t);var n,r=a(4),s=a.n(r),i=a(2),u=a(5),l=a(18),o=a.n(l),c=a(341),g=0,d={injectType:"lazySingletonStyleTag",attributes:{id:"uagb-editor-styles"},insert:"head",singleton:!0},b={};b.locals=c.a.locals||{},b.use=function(){return g++||(n=o()(c.a,d)),b},b.unuse=function(){g>0&&!--g&&(n(),n=null)};var m=b,p=a(1),_=a.n(p);const f=e=>{Object(p.useLayoutEffect)(()=>(m.use(),()=>{m.unuse()}),[]),e=e.parentProps;const{className:t,setAttributes:a,deviceType:n,attributes:{rating:r,range:l,title:o}}=e,c=parseInt(l),g=[];for(let e=1;e<=c;e++)g.push(_.a.createElement("span",{key:e,className:"uag-star"},"★"));return _.a.createElement("div",{className:s()(t,"uagb-editor-preview-mode-"+n.toLowerCase(),"uagb-block-"+e.clientId.substr(0,8))},_.a.createElement(u.RichText,{tagName:"p",placeholder:Object(i.__)("Write a title","ultimate-addons-for-gutenberg"),value:o,className:"uag-star-rating__title",onChange:e=>a({title:e})}),_.a.createElement("div",{className:"uag-star-rating",title:`${r}/${l}`},g))};t.default=_.a.memo(f)}}]);