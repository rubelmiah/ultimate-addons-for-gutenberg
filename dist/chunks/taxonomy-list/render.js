(window.webpackJsonp_ultimate_addons_for_gutenberg=window.webpackJsonp_ultimate_addons_for_gutenberg||[]).push([[102],{325:function(e,a,t){"use strict";var n=t(19),l=t.n(n)()((function(e){return e[1]}));l.push([e.i,".uagb-tax-not-available {\n  padding: 10px;\n  border: 1px solid;\n  text-align: center; }\n\n.uagb-layout-list .uagb-list-wrap {\n  margin: 0; }\n\n.uagb-list-display-style-group {\n  margin-bottom: 20px !important; }\n",""]),a.a=l},513:function(e,a,t){"use strict";t.r(a);var n,l=t(4),s=t.n(l),r=t(1),i=t.n(r),u=t(18),c=t.n(u),o=t(325),m=0,g={injectType:"lazySingletonStyleTag",attributes:{id:"uagb-editor-styles"},insert:"head",singleton:!0},d={};d.locals=o.a.locals||{},d.use=function(){return m++||(n=c()(o.a,g)),d},d.unuse=function(){m>0&&!--m&&(n(),n=null)};var b=d,p=t(64);const y=e=>{Object(r.useLayoutEffect)(()=>(b.use(),()=>{b.unuse()}),[]),e=e.parentProps;const{attributes:a,categoriesList:t,deviceType:n}=e,{layout:l,seperatorStyle:u,noTaxDisplaytext:c,showCount:o,listDisplayStyle:m,showhierarchy:g,titleTag:d}=a;let y;return"grid"===l?y=d||"h4":"list"===l&&(y=d||"div"),i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:s()("uagb-taxonomy__outer-wrap","uagb-editor-preview-mode-"+n.toLowerCase(),"uagb-layout-"+l,"uagb-block-"+e.clientId.substr(0,8))},"grid"===l&&t.map((e,a)=>i.a.createElement("div",{className:"uagb-taxomony-box",key:a},i.a.createElement("a",{className:"uagb-tax-link",href:e.link},i.a.createElement(y,{className:"uagb-tax-title",dangerouslySetInnerHTML:{__html:e.name}}),o&&i.a.createElement(i.a.Fragment,null,e.count," ",e.count>"1"?e.singular_name+"s":e.singular_name)))),"list"===l&&"list"===m&&i.a.createElement("ul",{className:"uagb-list-wrap"},t.map((e,a)=>i.a.createElement("li",{className:"uagb-tax-list",key:a},i.a.createElement(y,{className:"uagb-tax-link-wrap"},i.a.createElement("a",{className:"uagb-tax-link",href:e.link,dangerouslySetInnerHTML:{__html:e.name}}),o&&` (${e.count})`,g&&null!==e.children&&i.a.createElement("ul",{className:"uagb-taxonomy-list-children"},Object.keys(e.children).map((function(a,t){return i.a.createElement("li",{className:"uagb-tax-list",key:t},i.a.createElement("a",{className:"uagb-tax-link",href:`${e.link}${e.children[a].slug}`},e.children[a].name),o&&i.a.createElement("span",null,` (${e.children[a].count})`))})))),"none"!==u&&i.a.createElement("div",{className:"uagb-tax-separator"})))),"list"===l&&"dropdown"===m&&i.a.createElement("select",{className:"uagb-list-dropdown-wrap"},t.map((e,a)=>i.a.createElement("option",{key:a,value:e.link},Object(p.decodeEntities)(e.name),o&&` (${e.count})`))),""===t&&i.a.createElement("div",{className:"uagb-tax-not-available"},c)))};a.default=i.a.memo(y)}}]);