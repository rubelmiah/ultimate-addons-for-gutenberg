(window.webpackJsonp_ultimate_addons_for_gutenberg=window.webpackJsonp_ultimate_addons_for_gutenberg||[]).push([[39],{320:function(e,t,n){"use strict";var a=n(15),r=n.n(a)()((function(e){return e[1]}));r.push([e.i,'.uagb-forms-radio-wrap input[type="radio"],\n.uagb-form-radio-option input[type="radio"] {\n  vertical-align: middle;\n  margin-right: 15px; }\n\n.uagb-forms-radio-controls {\n  margin-top: 10px; }\n\n.uagb-form-radio-option-delete.has-icon {\n  vertical-align: middle;\n  padding: 10px;\n  margin: 0; }\n\n.uagb-forms-main-form .uagb-inner-input-view {\n  vertical-align: middle;\n  width: 35% !important;\n  margin: 0 10px !important; }\n\n.uagb-forms-main-form .uagb-forms-radio-wrap input[type="radio"] {\n  border-radius: 50%; }\n',""]),t.a=r},458:function(e,t,n){"use strict";n.r(t);var a,r=n(3),o=n.n(r),i=n(1),u=n.n(i),l=n(2),c=n(14),s=n.n(c),p=n(320),m=0,d={injectType:"lazySingletonStyleTag",attributes:{id:"uagb-editor-styles"},insert:"head",singleton:!0},g={};g.locals=p.a.locals||{},g.use=function(){return m++||(a=s()(p.a,d)),g},g.unuse=function(){m>0&&!--m&&(a(),a=null)};var b=g,f=n(5),v=n(4);function O(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function y(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?O(Object(n),!0).forEach((function(t){h(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):O(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function h(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var E=function(e){Object(i.useLayoutEffect)((function(){return b.use(),function(){b.unuse()}}),[]);var t=e.setState,n=e=e.parentProps,a=n.attributes,r=n.setAttributes,c=n.isSelected,s=a.block_id,p=a.radioRequired,m=a.options,d=a.radioName,g=m.map((function(e,t){return u.a.createElement("div",{key:t,className:"uagb-form-radio-option"},u.a.createElement("input",{type:"radio",name:"radio-".concat(s),value:e.optiontitle,id:e.optiontitle}),u.a.createElement("label",{htmlFor:e.optiontitle}),u.a.createElement("input",{className:"uagb-inner-input-view","aria-label":e.optiontitle,onChange:function(e){return h({optiontitle:e.target.value,optionvalue:e.target.value},t)},type:"text",value:e.optiontitle}),u.a.createElement("input",{className:"uagb-inner-input-view","aria-label":e.optionvalue,onChange:function(e){return h({optionvalue:e.target.value},t)},type:"text",value:e.optionvalue}),u.a.createElement(f.Button,{className:"uagb-form-radio-option-delete",icon:"trash",label:"Remove",onClick:function(){return E(t)}}))})),O=function(){return m.map((function(e){var t=e.optionvalue,n=t.replace(/\s+/g,"-").toLowerCase();return u.a.createElement(u.a.Fragment,null,u.a.createElement("input",{type:"radio",id:n,name:s,value:t,required:p}),u.a.createElement("label",{htmlFor:n},e.optiontitle),u.a.createElement("br",null))}))},h=function(e,n){var a=m.map((function(t,a){return n===a&&(t=y(y({},t),e)),t}));r({options:a}),t({optionsstate:a})},E=function(e){var n=m.map((function(t,n){return e===n&&(m.splice(e,1),t={options:m}),t}));t({optionsstate:n}),r({deleteOptions:n})},w=p?Object(l.__)("required","ultimate-addons-for-gutenberg"):"";return u.a.createElement(u.a.Fragment,null,u.a.createElement("div",{className:o()("uagb-forms-radio-wrap","uagb-forms-field-set","uagb-block-".concat(s))},c&&u.a.createElement("div",{className:"uagb-forms-required-wrap"},u.a.createElement(f.ToggleControl,{label:Object(l.__)("Required","ultimate-addons-for-gutenberg"),checked:p,onChange:function(){return r({radioRequired:!p})}})),u.a.createElement(v.RichText,{tagName:"div",placeholder:Object(l.__)("Radio Title","ultimate-addons-for-gutenberg"),value:d,onChange:function(e){return r({radioName:e})},className:"uagb-forms-radio-label ".concat(w," uagb-forms-input-label"),multiline:!1,id:s}),c&&u.a.createElement(u.a.Fragment,null,u.a.createElement("div",{className:"uagb-forms-radio-controls"},g,u.a.createElement("div",null,u.a.createElement(f.Button,{isSecondary:!0,onClick:function(){var e={optiontitle:Object(l.__)("Option Name ","ultimate-addons-for-gutenberg")+"".concat(m.length+1),optionvalue:Object(l.__)("Option Value ","ultimate-addons-for-gutenberg")+"".concat(m.length+1)};m[m.length]=e;var n=m.map((function(e){return e}));r({options:n}),t({optionsstate:n})}},Object(l.__)(" + Add Option ","ultimate-addons-for-gutenberg"))))),!c&&u.a.createElement(O,null)))};t.default=u.a.memo(E)}}]);