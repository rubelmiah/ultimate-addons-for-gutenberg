(window.webpackJsonp_ultimate_addons_for_gutenberg=window.webpackJsonp_ultimate_addons_for_gutenberg||[]).push([[88],{319:function(a,e,t){"use strict";var n=t(15),l=t.n(n)()((function(a){return a[1]}));l.push([a.i,".uagb-tax-not-available {\n  padding: 10px;\n  border: 1px solid;\n  text-align: center; }\n\n.uagb-layout-list .uagb-list-wrap {\n  margin: 0; }\n\n.uagb-list-display-style-group {\n  margin-bottom: 20px !important; }\n",""]),e.a=l},462:function(a,e,t){"use strict";t.r(e);var n,l=t(3),r=t.n(l),c=t(1),s=t.n(c),u=t(14),i=t.n(u),o=t(319),m=0,g={injectType:"lazySingletonStyleTag",attributes:{id:"uagb-editor-styles"},insert:"head",singleton:!0},b={};b.locals=o.a.locals||{},b.use=function(){return m++||(n=i()(o.a,g)),b},b.unuse=function(){m>0&&!--m&&(n(),n=null)};var d=b,p=function(a){Object(c.useLayoutEffect)((function(){return d.use(),function(){d.unuse()}}),[]);var e,t=a=a.parentProps,n=t.attributes,l=t.categoriesList,u=t.deviceType,i=n.layout,o=n.seperatorStyle,m=n.noTaxDisplaytext,g=n.showCount,b=n.listDisplayStyle,p=n.showhierarchy,y=n.titleTag;return"grid"==i?e=y||"H4":"list"==i&&(e=y||"div"),s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:r()("uagb-taxonomy__outer-wrap","uagb-editor-preview-mode-".concat(u.toLowerCase()),"uagb-block-".concat(a.clientId.substr(0,8)))},s.a.createElement("div",{className:r()("uagb-taxonomy-wrap","uagb-layout-".concat(i))},"grid"==i&&l.map((function(a,t){return s.a.createElement("div",{className:"uagb-taxomony-box",key:t},s.a.createElement("a",{className:"uagb-tax-link",href:a.link},s.a.createElement(e,{className:"uagb-tax-title",dangerouslySetInnerHTML:{__html:a.name}}),g&&s.a.createElement("div",{className:"uagb-tax-count"},a.count," ",a.count>"1"?"".concat(a.singular_name,"s"):a.singular_name)))})),"list"==i&&"list"==b&&s.a.createElement("ul",{className:"uagb-list-wrap"},l.map((function(a,t){return s.a.createElement("li",{className:"uagb-tax-list",key:t},s.a.createElement(e,{className:"uagb-tax-link-wrap"},s.a.createElement("a",{className:"uagb-tax-link",href:a.link,dangerouslySetInnerHTML:{__html:a.name}}),g&&s.a.createElement("span",{className:"uagb-tax-list-count"}," (".concat(a.count,")")),p&&null!=a.children&&s.a.createElement("ul",{className:"uagb-taxonomy-list-children"},Object.keys(a.children).map((function(e,t){return s.a.createElement("li",{className:"uagb-tax-list",key:t},s.a.createElement("a",{className:"uagb-tax-link",href:"".concat(a.link).concat(a.children[e].slug)},a.children[e].name),g&&s.a.createElement("span",null," (".concat(a.children[e].count,")")))})))),"none"!=o&&s.a.createElement("div",{className:"uagb-tax-separator-wrap"},s.a.createElement("div",{className:"uagb-tax-separator"})))}))),"list"==i&&"dropdown"==b&&s.a.createElement("select",{className:"uagb-list-dropdown-wrap"},l.map((function(a,e){return s.a.createElement("option",{key:e,value:a.link},a.name,g&&" (".concat(a.count,")"))})))),""==l&&s.a.createElement("div",{className:"uagb-tax-not-available"},m)))};e.default=s.a.memo(p)}}]);