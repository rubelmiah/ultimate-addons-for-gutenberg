(window.webpackJsonp_ultimate_addons_for_gutenberg=window.webpackJsonp_ultimate_addons_for_gutenberg||[]).push([[29],{254:function(e,a,t){"use strict";var n=t(15),r=t.n(n)()((function(e){return e[1]}));r.push([e.i,".uagb-forms-editor-privacy-link .components-base-control__help {\n  color: #f00; }\n",""]),a.a=r},494:function(e,a,t){"use strict";t.r(a);var n,r=t(3),c=t.n(r),l=t(0),o=t.n(l),u=t(1),s=t(14),i=t.n(s),b=t(254),m=0,f={injectType:"lazySingletonStyleTag",attributes:{id:"uagb-editor-styles"},insert:"head",singleton:!0},g={};g.locals=b.a.locals||{},g.use=function(){return m++||(n=i()(b.a,f)),g},g.unuse=function(){m>0&&!--m&&(n(),n=null)};var d=g;const p=e=>{Object(l.useLayoutEffect)(()=>(d.use(),()=>{d.unuse()}),[]),e=e.parentProps;const{attributes:a}=e,{block_id:t,acceptRequired:n,acceptText:r,showLink:s,linkLabel:i,link:b,linkInNewTab:m}=a,f=n?Object(u.__)("required","ultimate-addons-for-gutenberg"):"",g=m?Object(u.__)("_blank","ultimate-addons-for-gutenberg"):Object(u.__)("_self","ultimate-addons-for-gutenberg");return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:c()("uagb-forms-accept-wrap","uagb-forms-field-set","uagb-block-"+t)},s&&o.a.createElement("div",{className:"uagb-forms-accept-privacy-link"},o.a.createElement("a",{href:b,target:g,rel:"noopener noreferrer"}," ",i," ")),o.a.createElement("input",{type:"checkbox",id:"uagb-forms-accept-"+t,className:"uagb-forms-checkbox",name:t,required:n,value:"Agree"}),o.a.createElement("label",{name:t,htmlFor:"uagb-forms-accept-"+t,className:"uagb-forms-accept-label "+f},r),o.a.createElement("br",null)))};a.default=o.a.memo(p)}}]);