(window.webpackJsonp_ultimate_addons_for_gutenberg=window.webpackJsonp_ultimate_addons_for_gutenberg||[]).push([[41],{333:function(e,t,a){"use strict";var n=a(19),o=a.n(n)()((function(e){return e[1]}));o.push([e.i,'.uagb-forms-radio-wrap input[type="radio"],\n.uagb-form-radio-option input[type="radio"] {\n  vertical-align: middle;\n  margin-right: 15px; }\n\n.uagb-forms-radio-controls {\n  margin-top: 10px; }\n\n.uagb-form-radio-option-delete.has-icon {\n  vertical-align: middle;\n  padding: 10px;\n  margin: 0; }\n\n.uagb-forms-main-form .uagb-inner-input-view {\n  vertical-align: middle;\n  width: 35% !important;\n  margin: 0 10px !important; }\n\n.uagb-forms-main-form .uagb-forms-radio-wrap input[type="radio"] {\n  border-radius: 50%; }\n',""]),t.a=o},520:function(e,t,a){"use strict";a.r(t);var n,o=a(4),i=a.n(o),r=a(1),l=a.n(r),u=a(2),s=a(18),m=a.n(s),d=a(333),p=0,c={injectType:"lazySingletonStyleTag",attributes:{id:"uagb-editor-styles"},insert:"head",singleton:!0},g={};g.locals=d.a.locals||{},g.use=function(){return p++||(n=m()(d.a,c)),g},g.unuse=function(){p>0&&!--p&&(n(),n=null)};var b=g,f=a(8),v=a(5);const E=e=>{Object(r.useLayoutEffect)(()=>(b.use(),()=>{b.unuse()}),[]);const{setState:t}=e;e=e.parentProps;const{attributes:a,setAttributes:n,isSelected:o}=e,{block_id:s,radioRequired:m,options:d,radioName:p}=a,c=d.map((e,t)=>l.a.createElement("div",{key:t,className:"uagb-form-radio-option"},l.a.createElement("input",{type:"radio",name:"radio-"+s,value:e.optiontitle,id:e.optiontitle}),l.a.createElement("label",{htmlFor:e.optiontitle}),l.a.createElement("input",{className:"uagb-inner-input-view","aria-label":e.optiontitle,onChange:e=>E({optiontitle:e.target.value,optionvalue:e.target.value},t),type:"text",value:e.optiontitle}),l.a.createElement("input",{className:"uagb-inner-input-view","aria-label":e.optionvalue,onChange:e=>E({optionvalue:e.target.value},t),type:"text",value:e.optionvalue}),l.a.createElement(f.Button,{className:"uagb-form-radio-option-delete",icon:"trash",label:"Remove",onClick:()=>_(t)}))),g=()=>d.map(e=>{const t=e.optionvalue,a=t.replace(/\s+/g,"-").toLowerCase();return l.a.createElement(l.a.Fragment,null,l.a.createElement("input",{type:"radio",id:a,name:s,value:t,required:m}),l.a.createElement("label",{htmlFor:a},e.optiontitle),l.a.createElement("br",null))}),E=(e,a)=>{const o=d.map((t,n)=>(a===n&&(t={...t,...e}),t));n({options:o}),t({optionsstate:o})},_=e=>{const a=d.map((t,a)=>(e===a&&(d.splice(e,1),t={options:d}),t));t({optionsstate:a}),n({deleteOptions:a})},h=m?Object(u.__)("required","ultimate-addons-for-gutenberg"):"";return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:i()("uagb-forms-radio-wrap","uagb-forms-field-set","uagb-block-"+s)},o&&l.a.createElement("div",{className:"uagb-forms-required-wrap"},l.a.createElement(f.ToggleControl,{label:Object(u.__)("Required","ultimate-addons-for-gutenberg"),checked:m,onChange:()=>n({radioRequired:!m})})),l.a.createElement(v.RichText,{tagName:"div",placeholder:Object(u.__)("Radio Title","ultimate-addons-for-gutenberg"),value:p,onChange:e=>n({radioName:e}),className:`uagb-forms-radio-label ${h} uagb-forms-input-label`,multiline:!1,id:s}),o&&l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"uagb-forms-radio-controls"},c,l.a.createElement("div",null,l.a.createElement(f.Button,{isSecondary:!0,onClick:()=>{const e={optiontitle:Object(u.__)("Option Name ","ultimate-addons-for-gutenberg")+""+(d.length+1),optionvalue:Object(u.__)("Option Value ","ultimate-addons-for-gutenberg")+""+(d.length+1)};d[d.length]=e;const a=d.map(e=>e);n({options:a}),t({optionsstate:a})}},Object(u.__)(" + Add Option ","ultimate-addons-for-gutenberg"))))),!o&&l.a.createElement(g,null)))};t.default=l.a.memo(E)}}]);