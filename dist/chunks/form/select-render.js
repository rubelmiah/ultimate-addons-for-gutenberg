(window.webpackJsonp_ultimate_addons_for_gutenberg=window.webpackJsonp_ultimate_addons_for_gutenberg||[]).push([[46],{269:function(e,t,a){"use strict";var n=a(16),o=a.n(n)()((function(e){return e[1]}));o.push([e.i,".uagb-forms-select-controls {\n  margin-top: 10px; }\n\n.uagb-form-select-option-delete.has-icon {\n  vertical-align: middle;\n  padding: 10px;\n  margin: 0; }\n\n.uagb-forms-main-form .uagb-inner-input-view {\n  vertical-align: middle;\n  width: 35% !important;\n  margin: 0 10px !important; }\n",""]),t.a=o},508:function(e,t,a){"use strict";a.r(t);var n,o=a(3),l=a.n(o),i=a(0),r=a.n(i),s=a(1),u=a(15),c=a.n(u),m=a(269),p=0,g={injectType:"lazySingletonStyleTag",attributes:{id:"uagb-editor-styles"},insert:"head",singleton:!0},d={};d.locals=m.a.locals||{},d.use=function(){return p++||(n=c()(m.a,g)),d},d.unuse=function(){p>0&&!--p&&(n(),n=null)};var b=d,f=a(6),v=a(4);const _=e=>{Object(i.useLayoutEffect)(()=>(b.use(),()=>{b.unuse()}),[]);const{setState:t}=e;e=e.parentProps;const{attributes:a,setAttributes:n,isSelected:o}=e,{block_id:u,selectRequired:c,options:m,selectName:p}=a,g=m.map((e,t)=>r.a.createElement("div",{key:t,className:"uagb-form-select-option"},r.a.createElement("input",{className:"uagb-inner-input-view","aria-label":e.optiontitle,onChange:e=>_({optiontitle:e.target.value,optionvalue:e.target.value},t),type:"text",value:e.optiontitle}),r.a.createElement("input",{className:"uagb-inner-input-view","aria-label":e.optionvalue,onChange:e=>_({optionvalue:e.target.value},t),type:"text",value:e.optionvalue}),r.a.createElement(f.Button,{className:"uagb-form-select-option-delete",icon:"trash",label:"Remove",onClick:()=>E(t)}))),d=()=>{const e=m.map((e,t)=>r.a.createElement("option",{key:t,value:e.optionvalue},e.optiontitle));return r.a.createElement("select",{className:"uagb-forms-select-box uagb-forms-input",required:c,name:u,defaultValue:""},r.a.createElement("option",{value:"",disabled:!0},Object(s.__)("Select your option","ultimate-addons-for-gutenberg")),e)},_=(e,a)=>{const o=m.map((t,n)=>(a===n&&(t={...t,...e}),t));n({options:o}),t({optionsstate:o})},E=e=>{const a=m.map((t,a)=>(e===a&&(m.splice(e,1),t={options:m}),t));t({optionsstate:a}),n({deleteCurrentOptions:a})},h=c?Object(s.__)("required","ultimate-addons-for-gutenberg"):"";return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:l()("uagb-forms-select-wrap","uagb-forms-field-set","uagb-block-"+u)},o&&r.a.createElement("div",{className:"uagb-forms-required-wrap"},r.a.createElement(f.ToggleControl,{label:Object(s.__)("Required","ultimate-addons-for-gutenberg"),checked:c,onChange:()=>n({selectRequired:!c})})),r.a.createElement(v.RichText,{tagName:"div",placeholder:Object(s.__)("Select Title","ultimate-addons-for-gutenberg"),value:p,onChange:e=>n({selectName:e}),className:`uagb-forms-select-label ${h} uagb-forms-input-label`,multiline:!1,id:u}),o&&r.a.createElement(r.a.Fragment,null,g,r.a.createElement("div",{className:"uagb-forms-select-controls"},r.a.createElement("div",null,r.a.createElement(f.Button,{isSecondary:!0,onClick:()=>{const e={optiontitle:Object(s.__)("Option Name ","ultimate-addons-for-gutenberg")+""+(m.length+1),optionvalue:Object(s.__)("Option Value ","ultimate-addons-for-gutenberg")+""+(m.length+1)};m[m.length]=e;const a=m.map(e=>e);n({options:a}),t({optionsstate:a})}},Object(s.__)(" + Add Option ","ultimate-addons-for-gutenberg"))))),!o&&r.a.createElement(d,null)))};t.default=r.a.memo(_)}}]);