(window.webpackJsonp_ultimate_addons_for_gutenberg=window.webpackJsonp_ultimate_addons_for_gutenberg||[]).push([[104],{264:function(e,a,t){"use strict";var n=t(15),l=t.n(n)()((function(e){return e[1]}));l.push([e.i,".uagb-tax-not-available {\n  padding: 10px;\n  border: 1px solid;\n  text-align: center; }\n\n.uagb-layout-list .uagb-list-wrap {\n  margin: 0; }\n\n.uagb-list-display-style-group {\n  margin-bottom: 20px !important; }\n",""]),a.a=l},503:function(e,a,t){"use strict";t.r(a);var n,l=t(3),s=t.n(l),r=t(0),i=t.n(r),u=t(14),c=t.n(u),o=t(264),m=0,g={injectType:"lazySingletonStyleTag",attributes:{id:"uagb-editor-styles"},insert:"head",singleton:!0},b={};b.locals=o.a.locals||{},b.use=function(){return m++||(n=c()(o.a,g)),b},b.unuse=function(){m>0&&!--m&&(n(),n=null)};var d=b,p=t(65),y=t(10);const x=e=>{Object(r.useLayoutEffect)(()=>(d.use(),()=>{d.unuse()}),[]),e=e.parentProps;const a=Object(y.a)(),{attributes:t,categoriesList:n}=e,{layout:l,seperatorStyle:u,noTaxDisplaytext:c,showCount:o,listDisplayStyle:m,showhierarchy:g,titleTag:b}=t;let x;return"grid"===l?x=b||"h4":"list"===l&&(x=b||"div"),i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:s()("uagb-taxonomy__outer-wrap","uagb-editor-preview-mode-"+a.toLowerCase(),"uagb-layout-"+l,"uagb-block-"+e.clientId.substr(0,8))},"grid"===l&&n.map((e,a)=>i.a.createElement("div",{className:"uagb-taxomony-box",key:a},i.a.createElement("a",{className:"uagb-tax-link",href:e.link},i.a.createElement(x,{className:"uagb-tax-title",dangerouslySetInnerHTML:{__html:e.name}}),o&&i.a.createElement(i.a.Fragment,null,e.count," ",e.count>"1"?e.singular_name+"s":e.singular_name)))),"list"===l&&"list"===m&&i.a.createElement("ul",{className:"uagb-list-wrap"},n.map((e,a)=>i.a.createElement("li",{className:"uagb-tax-list",key:a},i.a.createElement(x,{className:"uagb-tax-link-wrap"},i.a.createElement("a",{className:"uagb-tax-link",href:e.link,dangerouslySetInnerHTML:{__html:e.name}}),o&&` (${e.count})`,g&&null!==e.children&&i.a.createElement("ul",{className:"uagb-taxonomy-list-children"},Object.keys(e.children).map((function(a,t){return i.a.createElement("li",{className:"uagb-tax-list",key:t},i.a.createElement("a",{className:"uagb-tax-link",href:`${e.link}${e.children[a].slug}`},e.children[a].name),o&&i.a.createElement("span",null,` (${e.children[a].count})`))})))),"none"!==u&&i.a.createElement("div",{className:"uagb-tax-separator"})))),"list"===l&&"dropdown"===m&&i.a.createElement("select",{className:"uagb-list-dropdown-wrap"},n.map((e,a)=>i.a.createElement("option",{key:a,value:e.link},Object(p.decodeEntities)(e.name),o&&` (${e.count})`))),""===n&&i.a.createElement("div",{className:"uagb-tax-not-available"},c)))};a.default=i.a.memo(x)}}]);