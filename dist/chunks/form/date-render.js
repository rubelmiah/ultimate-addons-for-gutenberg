(window.webpackJsonp_ultimate_addons_for_gutenberg=window.webpackJsonp_ultimate_addons_for_gutenberg||[]).push([[33],{285:function(e,t,a){"use strict";var n=a(14),r=a.n(n)()((function(e){return e[1]}));r.push([e.i,".components-base-control.minDate,\n.components-base-control.maxDate {\n  display: inline-block;\n  width: 30%; }\n\n.uagb-forms-date-invalidate {\n  color: #f00;\n  font-weight: 400; }\n",""]),t.a=r},530:function(e,t,a){"use strict";a.r(t);var n,r=a(3),u=a.n(r),o=a(0),i=a.n(o),l=a(1),s=a(13),d=a.n(s),c=a(285),m=0,b={injectType:"lazySingletonStyleTag",attributes:{id:"uagb-editor-styles"},insert:"head",singleton:!0},g={};g.locals=c.a.locals||{},g.use=function(){return m++||(n=d()(c.a,b)),g},g.unuse=function(){m>0&&!--m&&(n(),n=null)};var f=g,p=a(6),_=a(4);const h=e=>{Object(o.useLayoutEffect)(()=>(f.use(),()=>{f.unuse()}),[]),e=e.parentProps;const{attributes:t,setAttributes:a,isSelected:n}=e,{block_id:r,dateRequired:s,name:d,additonalVal:c,minYear:m,minMonth:b,minDay:g}=t;let h="";m&&b&&g&&(h=m+"-"+b+"-"+g);let w="";w=c?i.a.createElement("input",{type:"date",className:"uagb-forms-date-input uagb-forms-input",required:s,min:h,max:"",name:r}):i.a.createElement("input",{type:"date",className:"uagb-forms-date-input uagb-forms-input",required:s,name:r});const y=s?Object(l.__)("required","ultimate-addons-for-gutenberg"):"";return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:u()("uagb-forms-date-wrap","uagb-forms-field-set","uagb-block-"+r)},n&&i.a.createElement("div",{className:"uagb-forms-required-wrap"},i.a.createElement(p.ToggleControl,{label:Object(l.__)("Required","ultimate-addons-for-gutenberg"),checked:s,onChange:()=>a({dateRequired:!s})})),i.a.createElement(_.RichText,{tagName:"div",placeholder:Object(l.__)("Date","ultimate-addons-for-gutenberg"),value:d,onChange:e=>a({name:e}),className:`uagb-forms-date-label ${y} uagb-forms-input-label`,multiline:!1,id:r}),w))};t.default=i.a.memo(h)}}]);