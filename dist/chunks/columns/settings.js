(window.webpackJsonp_ultimate_addons_for_gutenberg=window.webpackJsonp_ultimate_addons_for_gutenberg||[]).push([[18],{200:function(e,a,t){"use strict";var l,o=t(1),n=t(6),r=t(4),u=t(0),b=t.n(u),i=t(13),g=t.n(i),d=t(201),c=0,s={injectType:"lazySingletonStyleTag",attributes:{id:"uagb-editor-styles"},insert:"head",singleton:!0},m={};m.locals=d.a.locals||{},m.use=function(){return c++||(l=g()(d.a,s)),m},m.unuse=function(){c>0&&!--c&&(l(),l=null)};var v=m;a.a=e=>{Object(u.useLayoutEffect)(()=>(v.use(),()=>{v.unuse()}),[]);const{onSelectImage:a,backgroundImage:t,onRemoveImage:l,showVideoInput:i,label:g,disableRemove:d=!1,allow:c=["image"]}=e;let s=Object(o.__)("Image","ultimate-addons-for-gutenberg"),m=Object(o.__)("Select Image","ultimate-addons-for-gutenberg"),p=Object(o.__)("Replace Image","ultimate-addons-for-gutenberg"),_=Object(o.__)("Remove Image","ultimate-addons-for-gutenberg"),f=["image"];return i&&(s=Object(o.__)("Video","ultimate-addons-for-gutenberg"),m=Object(o.__)("Select Video","ultimate-addons-for-gutenberg"),p=Object(o.__)("Replace Video","ultimate-addons-for-gutenberg"),_=Object(o.__)("Remove Video","ultimate-addons-for-gutenberg"),f=["video"]),s=g||s,s=!1===g?g:s,"Lottie Animation"===g&&(m=Object(o.__)("Select Lottie Animation","ultimate-addons-for-gutenberg"),p=Object(o.__)("Replace Lottie Animation","ultimate-addons-for-gutenberg"),_=Object(o.__)("Remove Lottie Animation","ultimate-addons-for-gutenberg"),f=c),b.a.createElement(n.BaseControl,{className:"editor-bg-image-control",id:"uagb-option-selector-"+g,label:s},b.a.createElement("div",{className:"uagb-bg-image"},b.a.createElement(r.MediaUpload,{title:m,onSelect:a,allowedTypes:f,value:t,render:e=>{let{open:a}=e;return b.a.createElement(n.Button,{isSecondary:!0,onClick:a},null!=t&&t.url?p:m)}}),!d&&(null==t?void 0:t.url)&&b.a.createElement(n.Button,{className:"uagb-rm-btn",onClick:l,isLink:!0,isDestructive:!0},_),e.help&&b.a.createElement("p",{className:"uag-control-help-notice"},e.help)))}},201:function(e,a,t){"use strict";var l=t(14),o=t.n(l)()((function(e){return e[1]}));o.push([e.i,".uagb-bg-image {\n  display: flex; }\n  .uagb-bg-image .components-button {\n    margin: 0;\n    border-radius: 2px;\n    background-color: #f0f0f0;\n    min-height: 90px;\n    padding: 8px 0;\n    text-align: center;\n    display: flex;\n    width: 100%;\n    transition: all 0.1s ease-out;\n    box-shadow: 0 0 0 0 #0085ba;\n    margin-top: 10px;\n    align-items: center;\n    justify-content: center; }\n    .uagb-bg-image .components-button.is-destructive:hover:not(:disabled) {\n      color: #710d0d;\n      box-shadow: inset 0 0 0 0 #710d0d; }\n    .uagb-bg-image .components-button.is-link.is-destructive:hover:not(:disabled) {\n      background: #f0f0f0; }\n    .uagb-bg-image .components-button.is-link.is-destructive:focus:not(:disabled) {\n      outline: none; }\n  .uagb-bg-image .uagb-rm-btn {\n    margin-left: 0; }\n\n.uagb-bg-image .components-button:focus:not(:disabled),\n.uagb-bg-image .components-button.is-secondary:hover:not(:disabled),\n.components-button.is-tertiary:hover:not(:disabled),\n.uagb-bg-image .components-button.is-secondary,\n.components-button.is-tertiary {\n  box-shadow: none; }\n\n.uag-background-image .uagb-bg-image,\n.uag-background-video .uagb-bg-image {\n  display: block; }\n  .uag-background-image .uagb-bg-image .components-button,\n  .uag-background-video .uagb-bg-image .components-button {\n    min-height: 55px; }\n  .uag-background-image .uagb-bg-image .components-button:last-child,\n  .uag-background-video .uagb-bg-image .components-button:last-child {\n    margin-left: 0;\n    margin-top: 0; }\n",""]),a.a=o},204:function(e,a,t){"use strict";var l=t(14),o=t.n(l)()((function(e){return e[1]}));o.push([e.i,'/** Box Shadow Popup CSS*/\n.uag-box-shadow-options {\n  margin-bottom: 24px; }\n  .uag-box-shadow-options .uag-box-shadow-option-actions {\n    display: flex;\n    justify-content: space-between;\n    margin: 0;\n    align-items: center; }\n    .uag-box-shadow-options .uag-box-shadow-option-actions .uag-box-shadow-button {\n      margin: 0;\n      height: 28px;\n      width: 28px;\n      padding: 5px;\n      border: 1px solid #d3d3d3;\n      border-radius: 14px; }\n      .uag-box-shadow-options .uag-box-shadow-option-actions .uag-box-shadow-button .dashicons-edit {\n        font-size: 15px;\n        line-height: 20px; }\n      .uag-box-shadow-options .uag-box-shadow-option-actions .uag-box-shadow-button:focus:not(:disabled) {\n        box-shadow: none;\n        outline: none; }\n  .uag-box-shadow-options .uagb-box-shadow-advanced {\n    border: 1px solid #d3d3d3;\n    border-radius: 3px;\n    padding: 15px;\n    margin: 10px 0;\n    position: relative;\n    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3); }\n    .uag-box-shadow-options .uagb-box-shadow-advanced > .components-base-control {\n      margin-top: 0; }\n    .uag-box-shadow-options .uagb-box-shadow-advanced::after, .uag-box-shadow-options .uagb-box-shadow-advanced::before {\n      bottom: 100%;\n      right: 8px;\n      border: solid transparent;\n      content: "";\n      height: 0;\n      width: 0;\n      position: absolute;\n      pointer-events: none; }\n    .uag-box-shadow-options .uagb-box-shadow-advanced::after {\n      right: 9px;\n      border-color: rgba(255, 255, 255, 0);\n      border-bottom-color: #fff;\n      border-width: 5px;\n      margin-left: -5px; }\n    .uag-box-shadow-options .uagb-box-shadow-advanced::before {\n      border-color: rgba(211, 211, 211, 0);\n      border-bottom-color: #d3d3d3;\n      border-width: 6px;\n      margin-left: -6px; }\n    .uag-box-shadow-options .uagb-box-shadow-advanced .uagb-shadow-color,\n    .uag-box-shadow-options .uagb-box-shadow-advanced .uagb-horizontal-wrap,\n    .uag-box-shadow-options .uagb-box-shadow-advanced .uagb-vertical-wrap,\n    .uag-box-shadow-options .uagb-box-shadow-advanced .uagb-blur-wrap,\n    .uag-box-shadow-options .uagb-box-shadow-advanced .uagb-spread-wrap {\n      margin-bottom: 16px; }\n\n.block-editor-block-inspector .components-base-control:last-child {\n  margin-bottom: 0; }\n',""]),a.a=o},205:function(e,a,t){"use strict";var l=t(6);a.a=e=>{const{setAttributes:a,backgroundGradient:t}=e;return React.createElement(l.GradientPicker,{value:t.value,onChange:e=>{a({[t.label]:e})},className:"uagb-gradient-picker"})}},206:function(e,a,t){"use strict";var l=t(0),o=t.n(l),n=t(6),r=t(10),u=t(64);a.a=e=>{const{label:a,data:t,setAttributes:l,options:b}=e,i=Object(r.a)(),g={};return g.Desktop=o.a.createElement(n.SelectControl,{value:t.desktop.value,onChange:e=>l({[t.desktop.label]:e}),options:b.desktop}),g.Tablet=o.a.createElement(n.SelectControl,{value:t.tablet.value,onChange:e=>l({[t.tablet.label]:e}),options:b.tablet||b.desktop}),g.Mobile=o.a.createElement(n.SelectControl,{value:t.mobile.value,onChange:e=>l({[t.mobile.label]:e}),options:b.mobile||b.desktop}),o.a.createElement("div",{className:"components-base-control uagb-responsive-select-control"},o.a.createElement("div",{className:"uagb-size-type-field-tabs"},o.a.createElement("div",{className:"uagb-control__header"},o.a.createElement(u.a,{label:a,responsive:!0})),g[i]?g[i]:g.Desktop),e.help&&o.a.createElement("p",{className:"uag-control-help-notice"},e.help))}},208:function(e,a,t){"use strict";var l,o=t(1),n=t(18),r=t(15),u=t(6),b=t(2),i=t(19),g=t(13),d=t.n(g),c=t(204),s=0,m={injectType:"lazySingletonStyleTag",attributes:{id:"uagb-editor-styles"},insert:"head",singleton:!0},v={};v.locals=c.a.locals||{},v.use=function(){return s++||(l=d()(c.a,m)),v},v.unuse=function(){s>0&&!--s&&(l(),l=null)};var p=v,_=t(0),f=t.n(_);a.a=e=>{const[a,t]=Object(b.useState)(!1);Object(_.useLayoutEffect)(()=>(p.use(),()=>{p.unuse()}),[]),Object(_.useLayoutEffect)(()=>{window.addEventListener("click",(function(e){const a=document.querySelector(".uagb-box-shadow-advanced"),l=document.querySelector(".uag-box-shadow-button");var o,n,r,u;a&&(null!=a&&a.contains(e.target)||null!=l&&l.contains(e.target)||null!==(o=e.target)&&void 0!==o&&null!==(n=o.classList)&&void 0!==n&&n.contains("uagb-advanced-color-indicate")||null!==(r=e.target)&&void 0!==r&&null!==(u=r.parentElement)&&void 0!==u&&u.closest(".uagb-popover-color")||t(!1))}))},[]);const{setAttributes:l,boxShadowColor:g,boxShadowHOffset:d,boxShadowVOffset:c,boxShadowBlur:s,boxShadowSpread:m,boxShadowPosition:v}=e;let h;const O=a?"active":"";a&&(h=f.a.createElement("div",{className:"uagb-box-shadow-advanced"},f.a.createElement("div",{className:"uagb-shadow-color"},f.a.createElement(r.a,{label:g.title,colorValue:g.value,onColorChange:e=>l({[g.label]:e})})),f.a.createElement("div",{className:"uagb-horizontal-wrap"},f.a.createElement(n.a,{label:d.title,value:d.value,min:0,max:100,displayUnit:!1,setAttributes:l,data:{value:d.value,label:d.label},onChange:!1})),f.a.createElement("div",{className:"uagb-vertical-wrap"},f.a.createElement(n.a,{label:c.title,value:c.value,min:0,max:100,displayUnit:!1,setAttributes:l,data:{value:c.value,label:c.label},onChange:!1})),f.a.createElement("div",{className:"uagb-blur-wrap"},f.a.createElement(n.a,{label:s.title,value:s.value,min:0,max:100,displayUnit:!1,setAttributes:l,data:{value:s.value,label:s.label},onChange:!1})),f.a.createElement("div",{className:"uagb-spread-wrap"},f.a.createElement(n.a,{label:m.title,value:m.value,min:-100,max:100,displayUnit:!1,setAttributes:l,data:{value:m.value,label:m.label},onChange:!1})),f.a.createElement("div",{className:"uagb-shadow-type"},f.a.createElement(i.a,{setAttributes:l,label:v.title,data:{value:v.value,label:v.label},options:[{value:"outset",label:Object(o.__)("Outset","ultimate-addons-for-gutenberg"),tooltip:Object(o.__)("Outset","ultimate-addons-for-gutenberg")},{value:"inset",label:Object(o.__)("Inset","ultimate-addons-for-gutenberg"),tooltip:Object(o.__)("Inset (10px)","ultimate-addons-for-gutenberg")}],showIcons:!1}))));const j=f.a.createElement("div",{className:"uag-box-shadow-option-actions"},f.a.createElement("span",{className:"uag-control-label"},Object(o.__)("Box Shadow","ultimate-addons-for-gutenberg")),f.a.createElement(u.Button,{className:"uag-box-shadow-button","aria-pressed":a,onClick:()=>t(!a)},f.a.createElement(u.Dashicon,{icon:"edit"})));return f.a.createElement("div",{className:"components-base-control uag-box-shadow-options "+O},j,a&&h)}},210:function(e,a,t){"use strict";var l=t(14),o=t.n(l)()((function(e){return e[1]}));o.push([e.i,".uag-bg-select-control .uag-background-type .components-select-control {\n  align-items: center;\n  display: grid;\n  grid-template-columns: 50% 50%; }\n\n.uag-bg-select-control .uag-background-color,\n.uag-bg-select-control .uag-background-image,\n.uag-bg-select-control .uag-background-gradient,\n.uag-bg-select-control .uag-background-opacity,\n.uag-bg-select-control .uag-background-video,\n.uag-bg-select-control .uag-background-video-overlay,\n.uag-bg-select-control .uag-background-video-opacity,\n.uag-bg-select-control .uag-background-image-position,\n.uag-bg-select-control .uag-background-image-attachment,\n.uag-bg-select-control .uag-background-image-repeat,\n.uag-bg-select-control .uag-background-image-size,\n.uag-bg-select-control .uag-background-image-overlay-type,\n.uag-bg-select-control .uag-background-image-overlay-color,\n.uag-bg-select-control .uag-background-image-overlay-gradient,\n.uag-bg-select-control .uagb-responsive-select-control {\n  margin-top: 24px; }\n\n.uag-bg-select-control .uag-background-image > .uagb-responsive-select-control .uagb-size-type-field-tabs {\n  display: block; }\n  .uag-bg-select-control .uag-background-image > .uagb-responsive-select-control .uagb-size-type-field-tabs > .components-base-control {\n    width: 100%; }\n\n.uag-bg-select-control .uagb-size-type-field-tabs {\n  display: flex;\n  justify-content: space-between; }\n  .uag-bg-select-control .uagb-size-type-field-tabs > .components-base-control {\n    width: 45%; }\n\n.uag-bg-select-control .uag-background-image-overlay-type .components-select-control {\n  flex-direction: row;\n  align-items: center; }\n  .uag-bg-select-control .uag-background-image-overlay-type .components-select-control .components-input-control__container {\n    width: 45%;\n    flex: unset; }\n\n.uag-bg-select-control .uag-background-image-size .uagb-responsive-control-inner > .components-base-control {\n  display: block;\n  margin-top: 24px; }\n\n.uag-bg-select-control .uag-background-image-position .uagb-size-type-field-tabs {\n  flex-direction: column; }\n  .uag-bg-select-control .uag-background-image-position .uagb-size-type-field-tabs .components-focal-point-picker-control {\n    width: 100%; }\n",""]),a.a=o},212:function(e,a,t){"use strict";var l,o=t(1),n=t(15),r=t(6),u=t(13),b=t.n(u),i=t(210),g=0,d={injectType:"lazySingletonStyleTag",attributes:{id:"uagb-editor-styles"},insert:"head",singleton:!0},c={};c.locals=i.a.locals||{},c.use=function(){return g++||(l=b()(i.a,d)),c},c.unuse=function(){g>0&&!--g&&(l(),l=null)};var s=c,m=t(205),v=t(0),p=t.n(v),_=t(200),f=t(23),h=t(206),O=t(10),j=t(64),k=e=>{const{backgroundImage:a,setAttributes:t}=e,l=Object(O.a)(),n=l.toLowerCase(),r=e=>{e&&e.url?e.type&&"image"===e.type?t({[a[n].label]:e}):t({[a[n].label]:null}):t({[a[n].label]:null})},u=()=>{t({[a[n].label]:""})},b={};return b.Desktop=p.a.createElement(_.a,{onSelectImage:r,backgroundImage:a.desktop.value,onRemoveImage:u,label:!1}),b.Tablet=p.a.createElement(_.a,{onSelectImage:r,backgroundImage:a.tablet.value,onRemoveImage:u,label:!1}),b.Mobile=p.a.createElement(_.a,{onSelectImage:r,backgroundImage:a.mobile.value,onRemoveImage:u,label:!1}),p.a.createElement("div",{className:"components-base-control uagb-responsive-select-control"},p.a.createElement("div",{className:"uagb-size-type-field-tabs"},p.a.createElement("div",{className:"uagb-control__header"},p.a.createElement(j.a,{label:Object(o.__)("Image","ultimate-addons-for-gutenberg"),responsive:!0})),b[l]?b[l]:b.Desktop),e.help&&p.a.createElement("p",{className:"uag-control-help-notice"},e.help))},y=e=>{var a,t,l;const{backgroundPosition:n,backgroundImage:u,setAttributes:b}=e,i=Object(O.a)(),g=i.toLowerCase(),d={},c=null===(a=u[g])||void 0===a||null===(t=a.value)||void 0===t?void 0:t.url,s=null===(l=n[g])||void 0===l?void 0:l.value;return d.Desktop=p.a.createElement(r.FocalPointPicker,{url:c,value:s,onChange:e=>{var a;b({[null===(a=n[g])||void 0===a?void 0:a.label]:e})}}),d.Tablet=p.a.createElement(r.FocalPointPicker,{url:c,value:s,onChange:e=>{var a;b({[null===(a=n[g])||void 0===a?void 0:a.label]:e})}}),d.Mobile=p.a.createElement(r.FocalPointPicker,{url:c,value:s,onChange:e=>{var a;b({[null===(a=n[g])||void 0===a?void 0:a.label]:e})}}),p.a.createElement("div",{className:"components-base-control uagb-responsive-select-control"},p.a.createElement("div",{className:"uagb-size-type-field-tabs"},p.a.createElement("div",{className:"uagb-control__header"},p.a.createElement(j.a,{label:Object(o.__)("Image","ultimate-addons-for-gutenberg"),responsive:!0})),d[i]?d[i]:d.Desktop),e.help&&p.a.createElement("p",{className:"uag-control-help-notice"},e.help))},E=t(19);a.a=e=>{var a,t;Object(v.useLayoutEffect)(()=>(s.use(),()=>{s.unuse()}),[]);const l=Object(O.a)().toLowerCase(),{setAttributes:u,backgroundImageColor:b,overlayType:i,backgroundSize:g,backgroundRepeat:d,backgroundAttachment:c,backgroundPosition:j,backgroundImage:x,backgroundColor:C,backgroundVideoType:w,backgroundType:T,backgroundVideo:S,backgroundVideoColor:M,onOpacityChange:N,backgroundCustomSize:A,backgroundCustomSizeType:P,imageResponsive:I}=e;let R=[];R=[{value:"none",label:Object(o.__)("None","ultimate-addons-for-gutenberg")},{value:"color",label:Object(o.__)("Color","ultimate-addons-for-gutenberg")},{value:"gradient",label:Object(o.__)("Gradient","ultimate-addons-for-gutenberg")},{value:"image",label:Object(o.__)("Image","ultimate-addons-for-gutenberg")}];let V=[{value:"auto",label:Object(o.__)("Auto","ultimate-addons-for-gutenberg")},{value:"cover",label:Object(o.__)("Cover","ultimate-addons-for-gutenberg")},{value:"contain",label:Object(o.__)("Contain","ultimate-addons-for-gutenberg")},{value:"custom",label:Object(o.__)("Custom","ultimate-addons-for-gutenberg")}];A||(V=[{value:"auto",label:Object(o.__)("Auto","ultimate-addons-for-gutenberg")},{value:"cover",label:Object(o.__)("Cover","ultimate-addons-for-gutenberg")},{value:"contain",label:Object(o.__)("Contain","ultimate-addons-for-gutenberg")}]),w.value&&R.push({value:"video",label:Object(o.__)("Video","ultimate-addons-for-gutenberg")});const B=p.a.createElement(p.a.Fragment,null,p.a.createElement("div",{className:"uag-background-type"},p.a.createElement(r.SelectControl,{value:T.value,onChange:e=>u({[T.label]:e}),options:R,label:Object(o.__)("Type","ultimate-addons-for-gutenberg")})),"color"===T.value&&p.a.createElement("div",{className:"uag-background-color"},p.a.createElement(n.a,{label:Object(o.__)("Color","ultimate-addons-for-gutenberg"),colorValue:C.value?C.value:"",onColorChange:e=>u({[C.label]:e})})),"image"===T.value&&p.a.createElement("div",{className:"uag-background-image"},!I&&p.a.createElement(_.a,{onSelectImage:e=>{e&&e.url?e.type&&"image"===e.type&&u({[x.label]:e}):u({[x.label]:null})},backgroundImage:x.value,onRemoveImage:()=>{u({[x.label]:null})}}),!I&&x.value&&p.a.createElement(p.a.Fragment,null,p.a.createElement("div",{className:"uag-background-image-position"},p.a.createElement(r.SelectControl,{label:Object(o.__)("Image Position","ultimate-addons-for-gutenberg"),value:j.value,onChange:e=>u({[j.label]:e}),options:[{value:"left top",label:Object(o.__)("Top Left","ultimate-addons-for-gutenberg")},{value:"center top",label:Object(o.__)("Top Center","ultimate-addons-for-gutenberg")},{value:"right top",label:Object(o.__)("Top Right","ultimate-addons-for-gutenberg")},{value:"center top",label:Object(o.__)("Center Top","ultimate-addons-for-gutenberg")},{value:"center center",label:Object(o.__)("Center Center","ultimate-addons-for-gutenberg")},{value:"center bottom",label:Object(o.__)("Center Bottom","ultimate-addons-for-gutenberg")},{value:"left bottom",label:Object(o.__)("Bottom Left","ultimate-addons-for-gutenberg")},{value:"center bottom",label:Object(o.__)("Bottom Center","ultimate-addons-for-gutenberg")},{value:"right bottom",label:Object(o.__)("Bottom Right","ultimate-addons-for-gutenberg")}]})),p.a.createElement("div",{className:"uag-background-image-attachment"},p.a.createElement(r.SelectControl,{label:Object(o.__)("Attachment","ultimate-addons-for-gutenberg"),value:c.value,onChange:e=>u({[c.label]:e}),options:[{value:"fixed",label:Object(o.__)("Fixed","ultimate-addons-for-gutenberg")},{value:"scroll",label:Object(o.__)("Scroll","ultimate-addons-for-gutenberg")}]})),p.a.createElement("div",{className:"uag-background-image-repeat"},p.a.createElement(r.SelectControl,{label:Object(o.__)("Repeat","ultimate-addons-for-gutenberg"),value:d.value,onChange:e=>u({[d.label]:e}),options:[{value:"no-repeat",label:Object(o.__)("No Repeat","ultimate-addons-for-gutenberg")},{value:"repeat",label:Object(o.__)("Repeat","ultimate-addons-for-gutenberg")},{value:"repeat-x",label:Object(o.__)("Repeat-x","ultimate-addons-for-gutenberg")},{value:"repeat-y",label:Object(o.__)("Repeat-y","ultimate-addons-for-gutenberg")}]})),p.a.createElement("div",{className:"uag-background-image-size"},p.a.createElement(r.SelectControl,{label:Object(o.__)("Size","ultimate-addons-for-gutenberg"),value:g.value,onChange:e=>u({[g.label]:e}),options:V}),"custom"===g.value&&A&&p.a.createElement(f.a,{label:Object(o.__)("Width","ultimate-addons-for-gutenberg"),data:{desktop:{value:A.desktop.value,label:A.desktop.label},tablet:{value:A.tablet.value,label:A.tablet.label},mobile:{value:A.mobile.value,label:A.mobile.label}},min:0,limitMax:{px:1600,"%":100,em:574},unit:{value:P.value,label:P.label},units:[{name:Object(o.__)("PX","ultimate-addons-for-gutenberg"),unitValue:"px"},{name:Object(o.__)("%","ultimate-addons-for-gutenberg"),unitValue:"%"},{name:Object(o.__)("EM","ultimate-addons-for-gutenberg"),unitValue:"em"}],setAttributes:u}))),I&&x&&p.a.createElement(k,{backgroundImage:x,setAttributes:u}),I&&x[l]&&(null===(a=x[l])||void 0===a?void 0:a.value)&&p.a.createElement(p.a.Fragment,null,p.a.createElement("div",{className:"uag-background-image-position"},p.a.createElement(y,{backgroundPosition:j,setAttributes:u,backgroundImage:x})),p.a.createElement("div",{className:"uag-background-image-attachment"},p.a.createElement(h.a,{label:Object(o.__)("Attachment","ultimate-addons-for-gutenberg"),data:c,options:{desktop:[{value:"fixed",label:Object(o.__)("Fixed","ultimate-addons-for-gutenberg")},{value:"scroll",label:Object(o.__)("Scroll","ultimate-addons-for-gutenberg")}]},setAttributes:u})),p.a.createElement("div",{className:"uag-background-image-repeat"},p.a.createElement(h.a,{label:Object(o.__)("Repeat","ultimate-addons-for-gutenberg"),data:d,options:{desktop:[{value:"no-repeat",label:Object(o.__)("No Repeat","ultimate-addons-for-gutenberg")},{value:"repeat",label:Object(o.__)("Repeat","ultimate-addons-for-gutenberg")},{value:"repeat-x",label:Object(o.__)("Repeat-x","ultimate-addons-for-gutenberg")},{value:"repeat-y",label:Object(o.__)("Repeat-y","ultimate-addons-for-gutenberg")}]},setAttributes:u})),p.a.createElement("div",{className:"uag-background-image-size"},p.a.createElement(h.a,{label:Object(o.__)("Size","ultimate-addons-for-gutenberg"),data:g,options:{desktop:[{value:"auto",label:Object(o.__)("Auto","ultimate-addons-for-gutenberg")},{value:"cover",label:Object(o.__)("Cover","ultimate-addons-for-gutenberg")},{value:"contain",label:Object(o.__)("Contain","ultimate-addons-for-gutenberg")},{value:"custom",label:Object(o.__)("Custom","ultimate-addons-for-gutenberg")}]},setAttributes:u}),"custom"===g[l].value&&A&&p.a.createElement(f.a,{label:Object(o.__)("Width","ultimate-addons-for-gutenberg"),data:A,min:0,limitMax:{px:1600,"%":100,em:574},unit:{value:P.value,label:P.label},units:[{name:Object(o.__)("PX","ultimate-addons-for-gutenberg"),unitValue:"px"},{name:Object(o.__)("%","ultimate-addons-for-gutenberg"),unitValue:"%"},{name:Object(o.__)("EM","ultimate-addons-for-gutenberg"),unitValue:"em"}],setAttributes:u}))),i&&x&&(I&&(null===(t=x[l])||void 0===t?void 0:t.value)||!I&&(null==x?void 0:x.value))&&p.a.createElement(p.a.Fragment,null,p.a.createElement("div",{className:"uag-background-image-overlay-type"},p.a.createElement(E.a,{setAttributes:u,label:Object(o.__)("Overlay Type","ultimate-addons-for-gutenberg"),data:{value:i.value,label:i.label},className:"uagb-multi-button-alignment-control",options:[{value:"color",label:Object(o.__)("Color","ultimate-addons-for-gutenberg")},{value:"none",label:Object(o.__)("None","ultimate-addons-for-gutenberg")}],showIcons:!1})),"color"===i.value&&p.a.createElement("div",{className:"uag-background-image-overlay-color"},p.a.createElement(n.a,{label:Object(o.__)("Image Overlay Color","ultimate-addons-for-gutenberg"),colorValue:b.value,onColorChange:e=>u({[b.label]:e})})),"gradient"===i.value&&p.a.createElement("div",{className:"uag-background-image-overlay-gradient"},p.a.createElement(m.a,{backgroundGradient:e.backgroundGradient,setAttributes:u})))),"gradient"===T.value&&p.a.createElement("div",{className:"uag-background-gradient"},p.a.createElement(m.a,{backgroundGradient:e.backgroundGradient,setAttributes:e.setAttributes})),"video"===T.value&&w.value&&p.a.createElement("div",{className:"uag-background-video"},p.a.createElement(_.a,{onSelectImage:e=>{e&&e.url?e.type&&"video"===e.type&&u({[S.label]:e}):u({[S.label]:null})},backgroundImage:S.value,onRemoveImage:()=>{u({[S.label]:null})},showVideoInput:!0})),"video"===T.value&&S.value&&w.value&&p.a.createElement("div",{className:"uag-background-video-overlay"},i&&S&&S.value&&p.a.createElement(p.a.Fragment,null,p.a.createElement("div",{className:"uag-background-image-overlay-type"},p.a.createElement(E.a,{setAttributes:u,label:Object(o.__)("Overlay Type","ultimate-addons-for-gutenberg"),data:{value:i.value,label:i.label},className:"uagb-multi-button-alignment-control",options:[{value:"color",label:Object(o.__)("Color","ultimate-addons-for-gutenberg")},{value:"none",label:Object(o.__)("None","ultimate-addons-for-gutenberg")}],showIcons:!1})),"color"===i.value&&p.a.createElement("div",{className:"uag-background-image-overlay-color"},p.a.createElement(n.a,{label:Object(o.__)("Image Overlay Color","ultimate-addons-for-gutenberg"),colorValue:M.value,onColorChange:e=>u({[M.label]:e}),onOpacityChange:N})),"gradient"===i.value&&p.a.createElement("div",{className:"uag-background-image-overlay-gradient"},p.a.createElement(m.a,{backgroundGradient:e.backgroundGradient,setAttributes:u})))));return p.a.createElement("div",{className:"uag-bg-select-control components-base-control"},B)}},500:function(e,a,t){"use strict";t.r(a);var l=t(1),o=t(0),n=t.n(o),r=t(9),u=t(208),b=t(19),i=t(54),g=t(212),d=t(76),c=t(15),s=t(18),m=t(78),v=t(24),p=t(23),_=t(55),f=t(4),h=t(6),O=t(16);function j(){return(j=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var l in t)Object.prototype.hasOwnProperty.call(t,l)&&(e[l]=t[l])}return e}).apply(this,arguments)}const k=e=>{e=e.parentProps;const{attributes:a,setAttributes:t}=e,{stack:k,align:y,vAlign:E,contentWidth:x,width:C,widthType:w,tag:T,columnGap:S,topMarginDesktop:M,rightMarginDesktop:N,leftMarginDesktop:A,bottomMarginDesktop:P,topMarginMobile:I,rightMarginMobile:R,leftMarginMobile:V,bottomMarginMobile:B,topMarginTablet:z,rightMarginTablet:L,leftMarginTablet:F,bottomMarginTablet:W,topPadding:H,bottomPadding:D,leftPadding:G,rightPadding:U,topPaddingTablet:X,bottomPaddingTablet:q,leftPaddingTablet:J,rightPaddingTablet:Z,topPaddingMobile:K,bottomPaddingMobile:Q,leftPaddingMobile:Y,rightPaddingMobile:$,backgroundType:ee,backgroundImage:ae,backgroundVideo:te,backgroundColor:le,backgroundPosition:oe,backgroundAttachment:ne,backgroundRepeat:re,backgroundSize:ue,backgroundVideoColor:be,backgroundVideoOpacity:ie,backgroundImageColor:ge,gradientValue:de,overlayType:ce,borderStyle:se,borderWidth:me,borderRadius:ve,borderColor:pe,borderHoverColor:_e,columns:fe,bottomType:he,bottomColor:Oe,bottomHeight:je,bottomHeightTablet:ke,bottomHeightMobile:ye,bottomWidth:Ee,topType:xe,topColor:Ce,topHeight:we,topHeightTablet:Te,topHeightMobile:Se,topWidth:Me,bottomFlip:Ne,topFlip:Ae,reverseTablet:Pe,reverseMobile:Ie,topContentAboveShape:Re,bottomContentAboveShape:Ve,mobileMarginType:Be,tabletMarginType:ze,desktopMarginType:Le,mobilePaddingType:Fe,tabletPaddingType:We,desktopPaddingType:He,paddingLink:De,marginLink:Ge,boxShadowColor:Ue,boxShadowHOffset:Xe,boxShadowVOffset:qe,boxShadowBlur:Je,boxShadowSpread:Ze,boxShadowPosition:Ke}=a;return n.a.createElement(o.Suspense,{fallback:Object(r.a)()},n.a.createElement(f.InspectorControls,null,n.a.createElement(m.a,null,n.a.createElement(v.b,v.a.general,n.a.createElement(O.a,{title:Object(l.__)("Layout","ultimate-addons-for-gutenberg")},n.a.createElement(s.a,{label:Object(l.__)("Columns","ultimate-addons-for-gutenberg"),setAttributes:t,value:fe,onChange:e=>t({columns:e}),min:0,max:6,displayUnit:!1}),n.a.createElement(b.a,{setAttributes:t,label:Object(l.__)("Content Width","ultimate-addons-for-gutenberg"),data:{value:y,label:"align"},className:"uagb-multi-button-alignment-control",options:[{value:"",label:"None"},{value:"wide",label:"Wide"},{value:"full",label:"Full Width"}],showIcons:!1}),n.a.createElement(b.a,{setAttributes:t,label:Object(l.__)("Vertical Alignment","ultimate-addons-for-gutenberg"),data:{value:E,label:"vAlign"},className:"uagb-multi-button-alignment-control",options:[{value:"top",label:"Top"},{value:"center",label:"Middle"},{value:"bottom",label:"Bottom"}],showIcons:!1}),n.a.createElement(b.a,{setAttributes:t,label:Object(l.__)("Stack On","ultimate-addons-for-gutenberg"),data:{value:k,label:"stack"},className:"uagb-multi-button-alignment-control",options:[{value:"none",label:Object(l.__)("None","ultimate-addons-for-gutenberg")},{value:"tablet",label:Object(l.__)("Tablet & Mobile","ultimate-addons-for-gutenberg")},{value:"mobile",label:Object(l.__)("Mobile","ultimate-addons-for-gutenberg")}],showIcons:!1,help:Object(l.__)("Note: Choose on what breakpoint the columns will stack.","ultimate-addons-for-gutenberg")}),n.a.createElement(b.a,{setAttributes:t,label:Object(l.__)("Container Width","ultimate-addons-for-gutenberg"),data:{value:x,label:"contentWidth"},className:"uagb-multi-button-alignment-control",options:[{value:"theme",label:Object(l.__)("Theme Container Width","ultimate-addons-for-gutenberg")},{value:"custom",label:Object(l.__)("Custom","ultimate-addons-for-gutenberg")}],showIcons:!1}),"custom"===x&&n.a.createElement(n.a.Fragment,null,n.a.createElement(s.a,{label:Object(l.__)("Inner Width","ultimate-addons-for-gutenberg"),setAttributes:t,value:C,onChange:e=>t({width:e}),min:0,max:"%"===w?100:2e3,unit:{value:w,label:"widthType"},units:[{name:Object(l.__)("Pixel","ultimate-addons-for-gutenberg"),unitValue:"px"},{name:Object(l.__)("%","ultimate-addons-for-gutenberg"),unitValue:"%"}]})),n.a.createElement(b.a,{setAttributes:t,label:Object(l.__)("Gap","ultimate-addons-for-gutenberg"),data:{value:S,label:"columnGap"},className:"uagb-multi-button-alignment-control",options:[{value:"10",label:Object(l.__)("Default","ultimate-addons-for-gutenberg"),tooltip:Object(l.__)("Default (10px)","ultimate-addons-for-gutenberg")},{value:"0",label:Object(l.__)("None","ultimate-addons-for-gutenberg"),tooltip:Object(l.__)("No Gap (0px)","ultimate-addons-for-gutenberg")},{value:"5",label:Object(l.__)("S","ultimate-addons-for-gutenberg"),tooltip:Object(l.__)("Narrow (5px)","ultimate-addons-for-gutenberg")},{value:"15",label:Object(l.__)("M","ultimate-addons-for-gutenberg"),tooltip:Object(l.__)("Extended (15px)","ultimate-addons-for-gutenberg")},{value:"20",label:Object(l.__)("L","ultimate-addons-for-gutenberg"),tooltip:Object(l.__)("Wide (20px)","ultimate-addons-for-gutenberg")},{value:"30",label:Object(l.__)("XL","ultimate-addons-for-gutenberg"),tooltip:Object(l.__)("Wider (30px)","ultimate-addons-for-gutenberg")}],showIcons:!1,help:Object(l.__)("Note: The individual Column Gap can be managed from Column Settings.","ultimate-addons-for-gutenberg")}),n.a.createElement(h.SelectControl,{label:Object(l.__)("HTML Tag","ultimate-addons-for-gutenberg"),value:T,onChange:e=>t({tag:e}),options:[{value:"div",label:Object(l.__)("div","ultimate-addons-for-gutenberg")},{value:"header",label:Object(l.__)("header","ultimate-addons-for-gutenberg")},{value:"footer",label:Object(l.__)("footer","ultimate-addons-for-gutenberg")},{value:"main",label:Object(l.__)("main","ultimate-addons-for-gutenberg")},{value:"article",label:Object(l.__)("article","ultimate-addons-for-gutenberg")},{value:"section",label:Object(l.__)("section","ultimate-addons-for-gutenberg")},{value:"aside",label:Object(l.__)("aside","ultimate-addons-for-gutenberg")},{value:"nav",label:Object(l.__)("nav","ultimate-addons-for-gutenberg")}]}),n.a.createElement(h.ToggleControl,{label:Object(l.__)("Reverse Columns (Tablet & Mobile)","ultimate-addons-for-gutenberg"),checked:Pe,onChange:()=>t({reverseTablet:!Pe})}),n.a.createElement(h.ToggleControl,{label:Object(l.__)("Reverse Columns (Mobile)","ultimate-addons-for-gutenberg"),checked:Ie,onChange:()=>t({reverseMobile:!Ie})}))),n.a.createElement(v.b,v.a.style,n.a.createElement(O.a,{title:Object(l.__)("Background","ultimate-addons-for-gutenberg"),initialOpen:!1},n.a.createElement(g.a,j({setAttributes:t,backgroundGradient:{value:de,label:"gradientValue"},backgroundImageColor:{value:ge,label:"backgroundImageColor"},overlayType:{value:ce,label:"overlayType"},backgroundSize:{value:ue,label:"backgroundSize"},backgroundRepeat:{value:re,label:"backgroundRepeat"},backgroundAttachment:{value:ne,label:"backgroundAttachment"},backgroundPosition:{value:oe,label:"backgroundPosition"},backgroundImage:{value:ae,label:"backgroundImage"},backgroundColor:{value:le,label:"backgroundColor"},backgroundType:{value:ee,label:"backgroundType"},backgroundVideoType:{value:!0},backgroundVideo:{value:te,label:"backgroundVideo"},backgroundVideoColor:{value:be,label:"backgroundVideoColor"},backgroundVideoOpacity:{value:ie,label:"backgroundVideoOpacity"},onOpacityChange:e=>t({backgroundVideoOpacity:e})},e))),(()=>{const e=[{value:"none",label:Object(l.__)("None","ultimate-addons-for-gutenberg")},{value:"tilt",label:Object(l.__)("Tilt","ultimate-addons-for-gutenberg")},{value:"mountains",label:Object(l.__)("Mountains","ultimate-addons-for-gutenberg")},{value:"wave_brush",label:Object(l.__)("Wave Brush","ultimate-addons-for-gutenberg")},{value:"waves",label:Object(l.__)("Waves","ultimate-addons-for-gutenberg")},{value:"wave_pattern",label:Object(l.__)("Waves Pattern","ultimate-addons-for-gutenberg")},{value:"triangle",label:Object(l.__)("Triangle","ultimate-addons-for-gutenberg")},{value:"drops",label:Object(l.__)("Drops","ultimate-addons-for-gutenberg")},{value:"clouds",label:Object(l.__)("Clouds","ultimate-addons-for-gutenberg")},{value:"zigzag",label:Object(l.__)("ZigZag","ultimate-addons-for-gutenberg")},{value:"pyramids",label:Object(l.__)("Pyramids","ultimate-addons-for-gutenberg")},{value:"triangle_asymmetrical",label:Object(l.__)("Triangle Asymmetrical","ultimate-addons-for-gutenberg")},{value:"tilt_opacity",label:Object(l.__)("Tilt Opacity","ultimate-addons-for-gutenberg")},{value:"fan_opacity",label:Object(l.__)("Fan Opacity","ultimate-addons-for-gutenberg")},{value:"curve",label:Object(l.__)("Curve","ultimate-addons-for-gutenberg")},{value:"curve_asymmetrical",label:Object(l.__)("Curve Asymmetrical","ultimate-addons-for-gutenberg")},{value:"curve_reverse",label:Object(l.__)("Curve Reverse","ultimate-addons-for-gutenberg")},{value:"curve_asym_reverse",label:Object(l.__)("Curve Asymmetrical Reverse","ultimate-addons-for-gutenberg")},{value:"arrow",label:Object(l.__)("Arrow","ultimate-addons-for-gutenberg")},{value:"arrow_split",label:Object(l.__)("Arrow Split","ultimate-addons-for-gutenberg")},{value:"book",label:Object(l.__)("Book","ultimate-addons-for-gutenberg")}],a=n.a.createElement(n.a.Fragment,null,n.a.createElement(h.SelectControl,{label:Object(l.__)("Type","ultimate-addons-for-gutenberg"),value:xe,onChange:e=>t({topType:e}),options:e}),"none"!==xe&&n.a.createElement(n.a.Fragment,null,n.a.createElement(c.a,{label:Object(l.__)("Color","ultimate-addons-for-gutenberg"),colorValue:Ce,onColorChange:e=>t({topColor:e})}),n.a.createElement(s.a,{label:Object(l.__)("Width","ultimate-addons-for-gutenberg"),setAttributes:t,value:Me,onChange:e=>t({topWidth:e}),min:100,max:2e3,displayUnit:!1}),n.a.createElement(p.a,{label:Object(l.__)("Height","ultimate-addons-for-gutenberg"),data:{desktop:{value:we,label:"topHeight"},tablet:{value:Te,label:"topHeightTablet"},mobile:{value:Se,label:"topHeightMobile"}},min:0,max:500,displayUnit:!1,setAttributes:t}),n.a.createElement(h.ToggleControl,{label:Object(l.__)("Flip","ultimate-addons-for-gutenberg"),checked:Ae,onChange:()=>t({topFlip:!Ae})}),n.a.createElement(h.ToggleControl,{label:Object(l.__)("Bring To Front","ultimate-addons-for-gutenberg"),checked:Re,onChange:()=>t({topContentAboveShape:!Re})}))),o=n.a.createElement(n.a.Fragment,null,n.a.createElement(h.SelectControl,{label:Object(l.__)("Type","ultimate-addons-for-gutenberg"),value:he,onChange:e=>t({bottomType:e}),options:e}),"none"!==he&&n.a.createElement(n.a.Fragment,null,n.a.createElement(c.a,{label:Object(l.__)("Color","ultimate-addons-for-gutenberg"),colorValue:Oe,onColorChange:e=>t({bottomColor:e})}),n.a.createElement(s.a,{label:Object(l.__)("Width","ultimate-addons-for-gutenberg"),setAttributes:t,value:Ee,onChange:e=>t({bottomWidth:e}),min:100,max:2e3,displayUnit:!1}),n.a.createElement(p.a,{label:Object(l.__)("Height","ultimate-addons-for-gutenberg"),data:{desktop:{value:je,label:"bottomHeight"},tablet:{value:ke,label:"bottomHeightTablet"},mobile:{value:ye,label:"bottomHeightMobile"}},min:0,max:500,displayUnit:!1,setAttributes:t}),n.a.createElement(h.ToggleControl,{label:Object(l.__)("Flip","ultimate-addons-for-gutenberg"),checked:Ne,onChange:()=>t({bottomFlip:!Ne})}),n.a.createElement(h.ToggleControl,{label:Object(l.__)("Bring To Front","ultimate-addons-for-gutenberg"),checked:Ve,onChange:()=>t({bottomContentAboveShape:!Ve})})));return n.a.createElement(O.a,{title:Object(l.__)("Shape Dividers","ultimate-addons-for-gutenberg"),initialOpen:!1},n.a.createElement(_.a,{tabs:[{name:"top",title:Object(l.__)("Top","ultimate-addons-for-gutenberg")},{name:"bottom",title:Object(l.__)("Bottom","ultimate-addons-for-gutenberg")}],top:a,bottom:o,disableBottomSeparator:!0}))})(),n.a.createElement(O.a,{title:Object(l.__)("Border","ultimate-addons-for-gutenberg"),initialOpen:!1},n.a.createElement(d.a,{disabledBorderTitle:!0,setAttributes:t,borderStyle:{value:se,label:"borderStyle",title:Object(l.__)("Style","ultimate-addons-for-gutenberg")},borderWidth:{value:me,label:"borderWidth",title:Object(l.__)("Width","ultimate-addons-for-gutenberg")},borderRadius:{value:ve,label:"borderRadius",title:Object(l.__)("Radius","ultimate-addons-for-gutenberg")},borderColor:{value:pe,label:"borderColor",title:Object(l.__)("Color","ultimate-addons-for-gutenberg")},borderHoverColor:{value:_e,label:"borderHoverColor",title:Object(l.__)("Hover Color","ultimate-addons-for-gutenberg")}}),n.a.createElement(u.a,{setAttributes:t,label:Object(l.__)("Box Shadow","ultimate-addons-for-gutenberg"),boxShadowColor:{value:Ue,label:"boxShadowColor",title:Object(l.__)("Color","ultimate-addons-for-gutenberg")},boxShadowHOffset:{value:Xe,label:"boxShadowHOffset",title:Object(l.__)("Horizontal","ultimate-addons-for-gutenberg")},boxShadowVOffset:{value:qe,label:"boxShadowVOffset",title:Object(l.__)("Vertical","ultimate-addons-for-gutenberg")},boxShadowBlur:{value:Je,label:"boxShadowBlur",title:Object(l.__)("Blur","ultimate-addons-for-gutenberg")},boxShadowSpread:{value:Ze,label:"boxShadowSpread",title:Object(l.__)("Spread","ultimate-addons-for-gutenberg")},boxShadowPosition:{value:Ke,label:"boxShadowPosition",title:Object(l.__)("Position","ultimate-addons-for-gutenberg")}})),n.a.createElement(O.a,{title:Object(l.__)("Spacing"),initialOpen:!1},n.a.createElement(i.a,j({},e,{label:Object(l.__)("Padding","ultimate-addons-for-gutenberg"),valueTop:{value:H,label:"topPadding"},valueRight:{value:U,label:"rightPadding"},valueBottom:{value:D,label:"bottomPadding"},valueLeft:{value:G,label:"leftPadding"},valueTopTablet:{value:X,label:"topPaddingTablet"},valueRightTablet:{value:Z,label:"rightPaddingTablet"},valueBottomTablet:{value:q,label:"bottomPaddingTablet"},valueLeftTablet:{value:J,label:"leftPaddingTablet"},valueTopMobile:{value:K,label:"topPaddingMobile"},valueRightMobile:{value:$,label:"rightPaddingMobile"},valueBottomMobile:{value:Q,label:"bottomPaddingMobile"},valueLeftMobile:{value:Y,label:"leftPaddingMobile"},unit:{value:He,label:"desktopPaddingType"},mUnit:{value:Fe,label:"mobilePaddingType"},tUnit:{value:We,label:"tabletPaddingType"},attributes:a,setAttributes:t,link:{value:De,label:"paddingLink"}})),n.a.createElement(i.a,j({},e,{label:Object(l.__)("Margin","ultimate-addons-for-gutenberg"),valueTop:{value:M,label:"topMarginDesktop"},valueRight:{value:N,label:"rightMarginDesktop"},valueBottom:{value:P,label:"bottomMarginDesktop"},valueLeft:{value:A,label:"leftMarginDesktop"},valueTopTablet:{value:z,label:"topMarginTablet"},valueRightTablet:{value:L,label:"rightMarginTablet"},valueBottomTablet:{value:W,label:"bottomMarginTablet"},valueLeftTablet:{value:F,label:"leftMarginTablet"},valueTopMobile:{value:I,label:"topMarginMobile"},valueRightMobile:{value:R,label:"rightMarginMobile"},valueBottomMobile:{value:B,label:"bottomMarginMobile"},valueLeftMobile:{value:V,label:"leftMarginMobile"},unit:{value:Le,label:"desktopMarginType"},mUnit:{value:Be,label:"mobileMarginType"},tUnit:{value:ze,label:"tabletMarginType"},attributes:a,setAttributes:t,link:{value:Ge,label:"marginLink"}})))),n.a.createElement(v.b,j({},v.a.advance,{parentProps:e})))))};a.default=n.a.memo(k)}}]);