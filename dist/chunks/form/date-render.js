(window.webpackJsonp_ultimate_addons_for_gutenberg=window.webpackJsonp_ultimate_addons_for_gutenberg||[]).push([[30],{362:function(e,t,a){"use strict";var n=a(15),r=a.n(n)()((function(e){return e[1]}));r.push([e.i,".components-base-control.minDate,\n.components-base-control.maxDate {\n  display: inline-block;\n  width: 30%; }\n\n.uagb-forms-date-invalidate {\n  color: #f00;\n  font-weight: 400; }\n",""]),t.a=r},598:function(e,t,a){"use strict";a.r(t);var n,r=a(3),u=a.n(r),i=a(1),o=a.n(i),l=a(2),s=a(14),c=a.n(s),d=a(362),m=0,b={injectType:"lazySingletonStyleTag",attributes:{id:"uagb-editor-styles"},insert:"head",singleton:!0},g={};g.locals=d.a.locals||{},g.use=function(){return m++||(n=c()(d.a,b)),g},g.unuse=function(){m>0&&!--m&&(n(),n=null)};var f=g,p=a(4),_=a(5),h=function(e){Object(i.useLayoutEffect)((function(){return f.use(),function(){f.unuse()}}),[]);var t=e=e.parentProps,a=t.attributes,n=t.setAttributes,r=t.isSelected,s=a.block_id,c=a.dateRequired,d=a.name,m=a.additonalVal,b=a.minYear,g=a.minMonth,h=a.minDay,v="";b&&g&&h&&(v=b+"-"+g+"-"+h);var w;w=m?o.a.createElement("input",{type:"date",className:"uagb-forms-date-input uagb-forms-input",required:c,min:v,max:"",name:s}):o.a.createElement("input",{type:"date",className:"uagb-forms-date-input uagb-forms-input",required:c,name:s});var y=c?Object(l.__)("required","ultimate-addons-for-gutenberg"):"";return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:u()("uagb-forms-date-wrap","uagb-forms-field-set","uagb-block-".concat(s))},r&&o.a.createElement("div",{className:"uagb-forms-required-wrap"},o.a.createElement(p.ToggleControl,{label:Object(l.__)("Required","ultimate-addons-for-gutenberg"),checked:c,onChange:function(){return n({dateRequired:!c})}})),o.a.createElement(_.RichText,{tagName:"div",placeholder:Object(l.__)("Date","ultimate-addons-for-gutenberg"),value:d,onChange:function(e){return n({name:e})},className:"uagb-forms-date-label ".concat(y," uagb-forms-input-label"),multiline:!1,id:s}),w))};t.default=o.a.memo(h)}}]);