(window.webpackJsonp_ultimate_addons_for_gutenberg=window.webpackJsonp_ultimate_addons_for_gutenberg||[]).push([[92],{194:function(e,a,t){"use strict";var l,o=t(1),n=t(6),r=t(4),u=t(0),b=t.n(u),i=t(14),d=t.n(i),g=t(195),c=0,s={injectType:"lazySingletonStyleTag",attributes:{id:"uagb-editor-styles"},insert:"head",singleton:!0},m={};m.locals=g.a.locals||{},m.use=function(){return c++||(l=d()(g.a,s)),m},m.unuse=function(){c>0&&!--c&&(l(),l=null)};var v=m;a.a=e=>{Object(u.useLayoutEffect)(()=>(v.use(),()=>{v.unuse()}),[]);const{onSelectImage:a,backgroundImage:t,onRemoveImage:l,showVideoInput:i,label:d}=e;let g=Object(o.__)("Image","ultimate-addons-for-gutenberg"),c=Object(o.__)("Select Image","ultimate-addons-for-gutenberg"),s=Object(o.__)("Replace Image","ultimate-addons-for-gutenberg"),m=Object(o.__)("Remove Image","ultimate-addons-for-gutenberg"),p=["image"];return i&&(g=Object(o.__)("Video","ultimate-addons-for-gutenberg"),c=Object(o.__)("Select Video","ultimate-addons-for-gutenberg"),s=Object(o.__)("Replace Video","ultimate-addons-for-gutenberg"),m=Object(o.__)("Remove Video","ultimate-addons-for-gutenberg"),p=["video"]),g=d||g,g=!1===d?d:g,b.a.createElement(n.BaseControl,{className:"editor-bg-image-control",id:"uagb-option-selector-"+d,label:g},b.a.createElement("div",{className:"uagb-bg-image"},b.a.createElement(r.MediaUpload,{title:c,onSelect:a,allowedTypes:p,value:t,render:e=>{let{open:a}=e;return b.a.createElement(n.Button,{isSecondary:!0,onClick:a},null!=t&&t.url?s:c)}}),(null==t?void 0:t.url)&&b.a.createElement(n.Button,{className:"uagb-rm-btn",onClick:l,isLink:!0,isDestructive:!0},m),e.help&&b.a.createElement("p",{className:"uag-control-help-notice"},e.help)))}},195:function(e,a,t){"use strict";var l=t(15),o=t.n(l)()((function(e){return e[1]}));o.push([e.i,".uagb-bg-image {\n  border-radius: 2px;\n  background-color: #f0f0f0;\n  min-height: 90px;\n  padding: 8px 0;\n  text-align: center;\n  display: flex;\n  width: 100%;\n  transition: all 0.1s ease-out;\n  box-shadow: 0 0 0 0 #0085ba;\n  margin-top: 10px;\n  align-items: center;\n  justify-content: center; }\n  .uagb-bg-image .components-button {\n    margin: 0;\n    padding: 0; }\n  .uagb-bg-image .uagb-rm-btn {\n    margin-left: 10px; }\n\n.uagb-bg-image .components-button:focus:not(:disabled),\n.uagb-bg-image .components-button.is-secondary:hover:not(:disabled),\n.components-button.is-tertiary:hover:not(:disabled),\n.uagb-bg-image .components-button.is-secondary,\n.components-button.is-tertiary {\n  box-shadow: none; }\n",""]),a.a=o},199:function(e,a,t){"use strict";var l=t(0),o=t.n(l),n=t(6),r=t(10),u=t(64);a.a=e=>{const{label:a,data:t,setAttributes:l,options:b}=e,i=Object(r.a)(),d={};return d.Desktop=o.a.createElement(n.SelectControl,{value:t.desktop.value,onChange:e=>l({[t.desktop.label]:e}),options:b.desktop}),d.Tablet=o.a.createElement(n.SelectControl,{value:t.tablet.value,onChange:e=>l({[t.tablet.label]:e}),options:b.tablet||b.desktop}),d.Mobile=o.a.createElement(n.SelectControl,{value:t.mobile.value,onChange:e=>l({[t.mobile.label]:e}),options:b.mobile||b.desktop}),o.a.createElement("div",{className:"components-base-control uagb-responsive-select-control"},o.a.createElement("div",{className:"uagb-size-type-field-tabs"},o.a.createElement("div",{className:"uagb-control__header"},o.a.createElement(u.a,{label:a,responsive:!0})),d[i]?d[i]:d.Desktop),e.help&&o.a.createElement("p",{className:"uag-control-help-notice"},e.help))}},201:function(e,a,t){"use strict";var l=t(15),o=t.n(l)()((function(e){return e[1]}));o.push([e.i,'/** Box Shadow Popup CSS*/\n.uag-box-shadow-options {\n  margin-bottom: 24px; }\n  .uag-box-shadow-options .uag-box-shadow-option-actions {\n    display: flex;\n    justify-content: space-between;\n    margin: 0;\n    align-items: center; }\n    .uag-box-shadow-options .uag-box-shadow-option-actions .uag-box-shadow-button {\n      margin: 0;\n      height: 28px;\n      width: 28px;\n      padding: 5px;\n      border: 1px solid #d3d3d3;\n      border-radius: 14px; }\n      .uag-box-shadow-options .uag-box-shadow-option-actions .uag-box-shadow-button .dashicons-edit {\n        font-size: 15px;\n        line-height: 20px; }\n      .uag-box-shadow-options .uag-box-shadow-option-actions .uag-box-shadow-button:focus:not(:disabled) {\n        box-shadow: none;\n        outline: none; }\n  .uag-box-shadow-options .uagb-box-shadow-advanced {\n    border: 1px solid #d3d3d3;\n    border-radius: 3px;\n    padding: 15px;\n    margin: 10px 0;\n    position: relative;\n    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3); }\n    .uag-box-shadow-options .uagb-box-shadow-advanced > .components-base-control {\n      margin-top: 0; }\n    .uag-box-shadow-options .uagb-box-shadow-advanced::after, .uag-box-shadow-options .uagb-box-shadow-advanced::before {\n      bottom: 100%;\n      right: 8px;\n      border: solid transparent;\n      content: "";\n      height: 0;\n      width: 0;\n      position: absolute;\n      pointer-events: none; }\n    .uag-box-shadow-options .uagb-box-shadow-advanced::after {\n      right: 9px;\n      border-color: rgba(255, 255, 255, 0);\n      border-bottom-color: #fff;\n      border-width: 5px;\n      margin-left: -5px; }\n    .uag-box-shadow-options .uagb-box-shadow-advanced::before {\n      border-color: rgba(211, 211, 211, 0);\n      border-bottom-color: #d3d3d3;\n      border-width: 6px;\n      margin-left: -6px; }\n    .uag-box-shadow-options .uagb-box-shadow-advanced .uagb-shadow-color,\n    .uag-box-shadow-options .uagb-box-shadow-advanced .uagb-horizontal-wrap,\n    .uag-box-shadow-options .uagb-box-shadow-advanced .uagb-vertical-wrap,\n    .uag-box-shadow-options .uagb-box-shadow-advanced .uagb-blur-wrap,\n    .uag-box-shadow-options .uagb-box-shadow-advanced .uagb-spread-wrap {\n      margin-bottom: 16px; }\n\n.block-editor-block-inspector .components-base-control:last-child {\n  margin-bottom: 0; }\n',""]),a.a=o},202:function(e,a,t){"use strict";var l=t(15),o=t.n(l)()((function(e){return e[1]}));o.push([e.i,".uag-bg-select-control .uag-background-type .components-select-control {\n  align-items: center;\n  display: grid;\n  grid-template-columns: 50% 50%; }\n\n.uag-bg-select-control .uag-background-color,\n.uag-bg-select-control .uag-background-image,\n.uag-bg-select-control .uag-background-gradient,\n.uag-bg-select-control .uag-background-opacity,\n.uag-bg-select-control .uag-background-video,\n.uag-bg-select-control .uag-background-video-overlay,\n.uag-bg-select-control .uag-background-video-opacity,\n.uag-bg-select-control .uag-background-image-position,\n.uag-bg-select-control .uag-background-image-attachment,\n.uag-bg-select-control .uag-background-image-repeat,\n.uag-bg-select-control .uag-background-image-size,\n.uag-bg-select-control .uag-background-image-overlay-type,\n.uag-bg-select-control .uag-background-image-overlay-color,\n.uag-bg-select-control .uag-background-image-overlay-gradient,\n.uag-bg-select-control .uagb-responsive-select-control {\n  margin-top: 24px; }\n\n.uag-bg-select-control .uag-background-image > .uagb-responsive-select-control .uagb-size-type-field-tabs {\n  display: block; }\n  .uag-bg-select-control .uag-background-image > .uagb-responsive-select-control .uagb-size-type-field-tabs > .components-base-control {\n    width: 100%; }\n\n.uag-bg-select-control .uagb-size-type-field-tabs {\n  display: flex;\n  justify-content: space-between; }\n  .uag-bg-select-control .uagb-size-type-field-tabs > .components-base-control {\n    width: 45%; }\n\n.uag-bg-select-control .uag-background-image-overlay-type .components-select-control {\n  flex-direction: row;\n  align-items: center; }\n  .uag-bg-select-control .uag-background-image-overlay-type .components-select-control .components-input-control__container {\n    width: 45%;\n    flex: unset; }\n",""]),a.a=o},204:function(e,a,t){"use strict";var l,o=t(1),n=t(17),r=t(6),u=t(14),b=t.n(u),i=t(202),d=0,g={injectType:"lazySingletonStyleTag",attributes:{id:"uagb-editor-styles"},insert:"head",singleton:!0},c={};c.locals=i.a.locals||{},c.use=function(){return d++||(l=b()(i.a,g)),c},c.unuse=function(){d>0&&!--d&&(l(),l=null)};var s=c,m=e=>{const{setAttributes:a,backgroundGradient:t}=e;return React.createElement(r.GradientPicker,{value:t.value,onChange:e=>{a({[t.label]:e})}})},v=t(0),p=t.n(v),_=t(194),f=t(80),h=t(199),O=t(10),k=t(64),j=e=>{const{backgroundImage:a,setAttributes:t}=e,l=Object(O.a)(),n=l.toLowerCase(),r=e=>{e&&e.url?e.type&&"image"===e.type?t({[a[n].label]:e}):t({[a[n].label]:null}):t({[a[n].label]:null})},u=()=>{t({[a[n].label]:""})},b={};return b.Desktop=p.a.createElement(_.a,{onSelectImage:r,backgroundImage:a.desktop.value,onRemoveImage:u,label:!1}),b.Tablet=p.a.createElement(_.a,{onSelectImage:r,backgroundImage:a.tablet.value,onRemoveImage:u,label:!1}),b.Mobile=p.a.createElement(_.a,{onSelectImage:r,backgroundImage:a.mobile.value,onRemoveImage:u,label:!1}),p.a.createElement("div",{className:"components-base-control uagb-responsive-select-control"},p.a.createElement("div",{className:"uagb-size-type-field-tabs"},p.a.createElement("div",{className:"uagb-control__header"},p.a.createElement(k.a,{label:Object(o.__)("Image","ultimate-addons-for-gutenberg"),responsive:!0})),b[l]?b[l]:b.Desktop),e.help&&p.a.createElement("p",{className:"uag-control-help-notice"},e.help))};a.a=e=>{Object(v.useLayoutEffect)(()=>(s.use(),()=>{s.unuse()}),[]);const a=Object(O.a)().toLowerCase(),{setAttributes:t,backgroundImageColor:l,overlayType:u,backgroundSize:b,backgroundRepeat:i,backgroundAttachment:d,backgroundPosition:g,backgroundImage:c,backgroundColor:k,backgroundVideoType:x,backgroundType:y,backgroundVideo:E,backgroundVideoColor:w,onOpacityChange:C,backgroundCustomSize:T,backgroundCustomSizeType:S,imageResponsive:M}=e;let I=[];I=[{value:"none",label:Object(o.__)("None","ultimate-addons-for-gutenberg")},{value:"color",label:Object(o.__)("Color","ultimate-addons-for-gutenberg")},{value:"gradient",label:Object(o.__)("Gradient","ultimate-addons-for-gutenberg")},{value:"image",label:Object(o.__)("Image","ultimate-addons-for-gutenberg")}],x.value&&I.push({value:"video",label:Object(o.__)("Video","ultimate-addons-for-gutenberg")});const P=p.a.createElement(p.a.Fragment,null,p.a.createElement("div",{className:"uag-background-type"},p.a.createElement(r.SelectControl,{value:y.value,onChange:e=>t({[y.label]:e}),options:I,label:Object(o.__)("Type","ultimate-addons-for-gutenberg")})),"color"===y.value&&p.a.createElement("div",{className:"uag-background-color"},p.a.createElement(n.a,{label:Object(o.__)("Color","ultimate-addons-for-gutenberg"),colorValue:k.value?k.value:"",onColorChange:e=>t({[k.label]:e})})),"image"===y.value&&p.a.createElement("div",{className:"uag-background-image"},!M&&p.a.createElement(_.a,{onSelectImage:e=>{e&&e.url?e.type&&"image"===e.type&&t({[c.label]:e}):t({[c.label]:null})},backgroundImage:c.value,onRemoveImage:()=>{t({[c.label]:null})}}),!M&&c.value&&p.a.createElement(p.a.Fragment,null,p.a.createElement("div",{className:"uag-background-image-position"},p.a.createElement(r.SelectControl,{label:Object(o.__)("Image Position","ultimate-addons-for-gutenberg"),value:g.value,onChange:e=>t({[g.label]:e}),options:[{value:"left top",label:Object(o.__)("Top Left","ultimate-addons-for-gutenberg")},{value:"center top",label:Object(o.__)("Top Center","ultimate-addons-for-gutenberg")},{value:"right top",label:Object(o.__)("Top Right","ultimate-addons-for-gutenberg")},{value:"center top",label:Object(o.__)("Center Top","ultimate-addons-for-gutenberg")},{value:"center center",label:Object(o.__)("Center Center","ultimate-addons-for-gutenberg")},{value:"center bottom",label:Object(o.__)("Center Bottom","ultimate-addons-for-gutenberg")},{value:"left bottom",label:Object(o.__)("Bottom Left","ultimate-addons-for-gutenberg")},{value:"center bottom",label:Object(o.__)("Bottom Center","ultimate-addons-for-gutenberg")},{value:"right bottom",label:Object(o.__)("Bottom Right","ultimate-addons-for-gutenberg")}]})),p.a.createElement("div",{className:"uag-background-image-attachment"},p.a.createElement(r.SelectControl,{label:Object(o.__)("Attachment","ultimate-addons-for-gutenberg"),value:d.value,onChange:e=>t({[d.label]:e}),options:[{value:"fixed",label:Object(o.__)("Fixed","ultimate-addons-for-gutenberg")},{value:"scroll",label:Object(o.__)("Scroll","ultimate-addons-for-gutenberg")}]})),p.a.createElement("div",{className:"uag-background-image-repeat"},p.a.createElement(r.SelectControl,{label:Object(o.__)("Repeat","ultimate-addons-for-gutenberg"),value:i.value,onChange:e=>t({[i.label]:e}),options:[{value:"no-repeat",label:Object(o.__)("No Repeat","ultimate-addons-for-gutenberg")},{value:"repeat",label:Object(o.__)("Repeat","ultimate-addons-for-gutenberg")},{value:"repeat-x",label:Object(o.__)("Repeat-x","ultimate-addons-for-gutenberg")},{value:"repeat-y",label:Object(o.__)("Repeat-y","ultimate-addons-for-gutenberg")}]})),p.a.createElement("div",{className:"uag-background-image-size"},p.a.createElement(r.SelectControl,{label:Object(o.__)("Size","ultimate-addons-for-gutenberg"),value:b.value,onChange:e=>t({[b.label]:e}),options:[{value:"auto",label:Object(o.__)("Auto","ultimate-addons-for-gutenberg")},{value:"cover",label:Object(o.__)("Cover","ultimate-addons-for-gutenberg")},{value:"contain",label:Object(o.__)("Contain","ultimate-addons-for-gutenberg")},{value:"custom",label:Object(o.__)("Custom","ultimate-addons-for-gutenberg")}]}),"custom"===b.value&&T&&p.a.createElement(f.a,{label:Object(o.__)("Width","ultimate-addons-for-gutenberg"),data:{desktop:{value:T.desktop.value,label:T.desktop.label},tablet:{value:T.tablet.value,label:T.tablet.label},mobile:{value:T.mobile.value,label:T.mobile.label}},min:0,limitMax:{px:1600,"%":100,em:574},unit:{value:S.value,label:S.label},units:[{name:Object(o.__)("PX","ultimate-addons-for-gutenberg"),unitValue:"px"},{name:Object(o.__)("%","ultimate-addons-for-gutenberg"),unitValue:"%"},{name:Object(o.__)("EM","ultimate-addons-for-gutenberg"),unitValue:"em"}],setAttributes:t}))),M&&c&&p.a.createElement(j,{backgroundImage:c,setAttributes:t}),M&&c&&p.a.createElement(p.a.Fragment,null,p.a.createElement("div",{className:"uag-background-image-position"},p.a.createElement(h.a,{label:Object(o.__)("Image Position","ultimate-addons-for-gutenberg"),data:g,options:{desktop:[{value:"left top",label:Object(o.__)("Top Left","ultimate-addons-for-gutenberg")},{value:"center top",label:Object(o.__)("Top Center","ultimate-addons-for-gutenberg")},{value:"right top",label:Object(o.__)("Top Right","ultimate-addons-for-gutenberg")},{value:"center top",label:Object(o.__)("Center Top","ultimate-addons-for-gutenberg")},{value:"center center",label:Object(o.__)("Center Center","ultimate-addons-for-gutenberg")},{value:"center bottom",label:Object(o.__)("Center Bottom","ultimate-addons-for-gutenberg")},{value:"left bottom",label:Object(o.__)("Bottom Left","ultimate-addons-for-gutenberg")},{value:"center bottom",label:Object(o.__)("Bottom Center","ultimate-addons-for-gutenberg")},{value:"right bottom",label:Object(o.__)("Bottom Right","ultimate-addons-for-gutenberg")}]},setAttributes:t})),p.a.createElement("div",{className:"uag-background-image-attachment"},p.a.createElement(h.a,{label:Object(o.__)("Attachment","ultimate-addons-for-gutenberg"),data:d,options:{desktop:[{value:"fixed",label:Object(o.__)("Fixed","ultimate-addons-for-gutenberg")},{value:"scroll",label:Object(o.__)("Scroll","ultimate-addons-for-gutenberg")}]},setAttributes:t})),p.a.createElement("div",{className:"uag-background-image-repeat"},p.a.createElement(h.a,{label:Object(o.__)("Repeat","ultimate-addons-for-gutenberg"),data:i,options:{desktop:[{value:"no-repeat",label:Object(o.__)("No Repeat","ultimate-addons-for-gutenberg")},{value:"repeat",label:Object(o.__)("Repeat","ultimate-addons-for-gutenberg")},{value:"repeat-x",label:Object(o.__)("Repeat-x","ultimate-addons-for-gutenberg")},{value:"repeat-y",label:Object(o.__)("Repeat-y","ultimate-addons-for-gutenberg")}]},setAttributes:t})),p.a.createElement("div",{className:"uag-background-image-size"},p.a.createElement(h.a,{label:Object(o.__)("Size","ultimate-addons-for-gutenberg"),data:b,options:{desktop:[{value:"auto",label:Object(o.__)("Auto","ultimate-addons-for-gutenberg")},{value:"cover",label:Object(o.__)("Cover","ultimate-addons-for-gutenberg")},{value:"contain",label:Object(o.__)("Contain","ultimate-addons-for-gutenberg")},{value:"custom",label:Object(o.__)("Custom","ultimate-addons-for-gutenberg")}]},setAttributes:t}),"custom"===b[a].value&&T&&p.a.createElement(f.a,{label:Object(o.__)("Width","ultimate-addons-for-gutenberg"),data:T,min:0,limitMax:{px:1600,"%":100,em:574},unit:{value:S.value,label:S.label},units:[{name:Object(o.__)("PX","ultimate-addons-for-gutenberg"),unitValue:"px"},{name:Object(o.__)("%","ultimate-addons-for-gutenberg"),unitValue:"%"},{name:Object(o.__)("EM","ultimate-addons-for-gutenberg"),unitValue:"em"}],setAttributes:t}))),u&&c&&p.a.createElement(p.a.Fragment,null,p.a.createElement("div",{className:"uag-background-image-overlay-type"},p.a.createElement(r.SelectControl,{label:Object(o.__)("Overlay Type","ultimate-addons-for-gutenberg"),value:u.value,onChange:e=>t({[u.label]:e}),options:[{value:"color",label:Object(o.__)("Color","ultimate-addons-for-gutenberg")},{value:"gradient",label:Object(o.__)("Gradient","ultimate-addons-for-gutenberg")},{value:"none",label:Object(o.__)("None","ultimate-addons-for-gutenberg")}]})),"color"===u.value&&p.a.createElement("div",{className:"uag-background-image-overlay-color"},p.a.createElement(n.a,{label:Object(o.__)("Image Overlay Color","ultimate-addons-for-gutenberg"),colorValue:l.value,onColorChange:e=>t({[l.label]:e})})),"gradient"===u.value&&p.a.createElement("div",{className:"uag-background-image-overlay-gradient"},p.a.createElement(m,{backgroundGradient:e.backgroundGradient,setAttributes:t})))),"gradient"===y.value&&p.a.createElement("div",{className:"uag-background-gradient"},p.a.createElement(m,{backgroundGradient:e.backgroundGradient,setAttributes:e.setAttributes})),"video"===y.value&&x.value&&p.a.createElement("div",{className:"uag-background-video"},p.a.createElement(_.a,{onSelectImage:e=>{e&&e.url?e.type&&"video"===e.type&&t({[E.label]:e}):t({[E.label]:null})},backgroundImage:E.value,onRemoveImage:()=>{t({[E.label]:null})},showVideoInput:!0})),"video"===y.value&&E.value&&x.value&&p.a.createElement("div",{className:"uag-background-video-overlay"},p.a.createElement(n.a,{label:Object(o.__)("Video Overlay Color","ultimate-addons-for-gutenberg"),colorValue:w.value,onColorChange:e=>t({[w.label]:e}),onOpacityChange:C})));return p.a.createElement("div",{className:"uag-bg-select-control components-base-control"},P)}},205:function(e,a,t){"use strict";var l,o=t(1),n=t(12),r=t(17),u=t(6),b=t(2),i=t(19),d=t(14),g=t.n(d),c=t(201),s=0,m={injectType:"lazySingletonStyleTag",attributes:{id:"uagb-editor-styles"},insert:"head",singleton:!0},v={};v.locals=c.a.locals||{},v.use=function(){return s++||(l=g()(c.a,m)),v},v.unuse=function(){s>0&&!--s&&(l(),l=null)};var p=v,_=t(0),f=t.n(_);a.a=e=>{Object(_.useLayoutEffect)(()=>(p.use(),()=>{p.unuse()}),[]);const[a,t]=Object(b.useState)(!1),{setAttributes:l,boxShadowColor:d,boxShadowHOffset:g,boxShadowVOffset:c,boxShadowBlur:s,boxShadowSpread:m,boxShadowPosition:v}=e;let h;const O=a?"active":"";a&&(h=f.a.createElement("div",{className:"uagb-box-shadow-advanced"},f.a.createElement("div",{className:"uagb-shadow-color"},f.a.createElement(r.a,{label:d.title,colorValue:d.value,onColorChange:e=>l({[d.label]:e})})),f.a.createElement("div",{className:"uagb-horizontal-wrap"},f.a.createElement(n.a,{label:g.title,value:g.value,min:0,max:100,displayUnit:!1,setAttributes:l,data:{value:g.value,label:g.label},onChange:!1})),f.a.createElement("div",{className:"uagb-vertical-wrap"},f.a.createElement(n.a,{label:c.title,value:c.value,min:0,max:100,displayUnit:!1,setAttributes:l,data:{value:c.value,label:c.label},onChange:!1})),f.a.createElement("div",{className:"uagb-blur-wrap"},f.a.createElement(n.a,{label:s.title,value:s.value,min:0,max:100,displayUnit:!1,setAttributes:l,data:{value:s.value,label:s.label},onChange:!1})),f.a.createElement("div",{className:"uagb-spread-wrap"},f.a.createElement(n.a,{label:m.title,value:m.value,min:-100,max:100,displayUnit:!1,setAttributes:l,data:{value:m.value,label:m.label},onChange:!1})),f.a.createElement("div",{className:"uagb-shadow-type"},f.a.createElement(i.a,{setAttributes:l,label:v.title,data:{value:v.value,label:v.label},options:[{value:"outset",label:Object(o.__)("Outset","ultimate-addons-for-gutenberg"),tooltip:Object(o.__)("Outset","ultimate-addons-for-gutenberg")},{value:"inset",label:Object(o.__)("Inset","ultimate-addons-for-gutenberg"),tooltip:Object(o.__)("Inset (10px)","ultimate-addons-for-gutenberg")}],showIcons:!1}))));const k=f.a.createElement("div",{className:"uag-box-shadow-option-actions"},f.a.createElement("span",{className:"uag-control-label"},Object(o.__)("Box Shadow","ultimate-addons-for-gutenberg")),f.a.createElement(u.Button,{className:"uag-box-shadow-button","aria-pressed":a,onClick:()=>t(!a)},f.a.createElement(u.Dashicon,{icon:"edit"})));return f.a.createElement("div",{className:"components-base-control uag-box-shadow-options "+O},k,a&&h)}},488:function(e,a,t){"use strict";t.r(a);var l=t(0),o=t.n(l),n=t(1),r=t(8),u=t(205),b=t(79),i=t(23),d=t(50),g=t(12),c=t(204),s=t(77),m=t(19),v=t(11),p=t(4),_=t(6),f=t(16);function h(){return(h=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var l in t)Object.prototype.hasOwnProperty.call(t,l)&&(e[l]=t[l])}return e}).apply(this,arguments)}const O=e=>{e=e.parentProps;const{attributes:a,setAttributes:t,deviceType:O}=e,{align:k,contentWidth:j,width:x,innerWidth:y,innerWidthType:E,tag:w,themeWidth:C,leftPadding:T,rightPadding:S,topPadding:M,bottomPadding:I,leftMargin:P,rightMargin:N,topMargin:V,bottomMargin:R,topPaddingTablet:A,bottomPaddingTablet:B,leftPaddingTablet:z,rightPaddingTablet:L,topMarginTablet:W,bottomMarginTablet:H,leftMarginTablet:U,rightMarginTablet:F,topPaddingMobile:G,bottomPaddingMobile:D,leftPaddingMobile:J,rightPaddingMobile:X,topMarginMobile:q,bottomMarginMobile:K,leftMarginMobile:Q,rightMarginMobile:Y,backgroundType:Z,backgroundImage:$,backgroundVideo:ee,backgroundColor:ae,backgroundPosition:te,backgroundAttachment:le,backgroundRepeat:oe,backgroundSize:ne,backgroundVideoColor:re,backgroundVideoOpacity:ue,backgroundImageColor:be,overlayType:ie,borderStyle:de,borderWidth:ge,borderRadius:ce,borderColor:se,borderHoverColor:me,mobileMarginType:ve,tabletMarginType:pe,desktopMarginType:_e,mobilePaddingType:fe,tabletPaddingType:he,desktopPaddingType:Oe,boxShadowColor:ke,boxShadowHOffset:je,boxShadowVOffset:xe,boxShadowBlur:ye,boxShadowSpread:Ee,boxShadowPosition:we,spacingLink:Ce,marginspacingLink:Te,gradientValue:Se}=a;let Me=["left","center","right"];return"full_width"===j&&(Me=["wide","full"]),o.a.createElement(l.Suspense,{fallback:Object(r.a)()},o.a.createElement(p.BlockControls,null,o.a.createElement(p.AlignmentToolbar,{value:k,onChange:e=>{t({align:e})},controls:Me})),o.a.createElement(p.InspectorControls,null,o.a.createElement(b.a,null,o.a.createElement(i.b,i.a.general,o.a.createElement(f.a,{initialOpen:!0},o.a.createElement(m.a,{setAttributes:t,label:Object(n.__)("Content Width","ultimate-addons-for-gutenberg"),data:{value:j,label:"contentWidth"},className:"uagb-multi-button-alignment-control",options:[{value:"boxed",label:"Boxed"},{value:"full_width",label:"Full Width"}],showIcons:!1}),"boxed"===j&&o.a.createElement(o.a.Fragment,null,o.a.createElement(m.a,{setAttributes:t,label:Object(n.__)("Alignment","ultimate-addons-for-gutenberg"),data:{value:k,label:"align"},className:"uagb-multi-button-alignment-control",options:[{value:"left",icon:o.a.createElement(_.Icon,{icon:Object(v.a)("fa fa-align-left")}),tooltip:Object(n.__)("Left","ultimate-addons-for-gutenberg")},{value:"center",icon:o.a.createElement(_.Icon,{icon:Object(v.a)("fa fa-align-center")}),tooltip:Object(n.__)("Center","ultimate-addons-for-gutenberg")},{value:"right",icon:o.a.createElement(_.Icon,{icon:Object(v.a)("fa fa-align-right")}),tooltip:Object(n.__)("Right","ultimate-addons-for-gutenberg")}],showIcons:!0}),o.a.createElement(g.a,{label:Object(n.__)("Width","ultimate-addons-for-gutenberg"),setAttributes:t,value:x,onChange:e=>t({width:e}),min:0,max:2e3,displayUnit:!1})),"boxed"!==j&&o.a.createElement(_.ToggleControl,{label:Object(n.__)("Inherit Inner Width from Theme","ultimate-addons-for-gutenberg"),checked:C,onChange:()=>t({themeWidth:!C})}),"boxed"!==j&&!C&&o.a.createElement(g.a,{label:Object(n.__)("Inner Width","ultimate-addons-for-gutenberg"),setAttributes:t,value:y,onChange:e=>t({innerWidth:e}),min:0,max:2e3,unit:{value:E,label:"innerWidthType"},units:[{name:Object(n.__)("Pixel","ultimate-addons-for-gutenberg"),unitValue:"px"},{name:Object(n.__)("Em","ultimate-addons-for-gutenberg"),unitValue:"em"},{name:Object(n.__)("%","ultimate-addons-for-gutenberg"),unitValue:"%"}]}),o.a.createElement(_.SelectControl,{label:Object(n.__)("HTML Tag","ultimate-addons-for-gutenberg"),value:w,onChange:e=>t({tag:e}),options:[{value:"div",label:Object(n.__)("div","ultimate-addons-for-gutenberg")},{value:"header",label:Object(n.__)("header","ultimate-addons-for-gutenberg")},{value:"footer",label:Object(n.__)("footer","ultimate-addons-for-gutenberg")},{value:"main",label:Object(n.__)("main","ultimate-addons-for-gutenberg")},{value:"article",label:Object(n.__)("article","ultimate-addons-for-gutenberg")},{value:"section",label:Object(n.__)("section","ultimate-addons-for-gutenberg")},{value:"aside",label:Object(n.__)("aside","ultimate-addons-for-gutenberg")},{value:"nav",label:Object(n.__)("nav","ultimate-addons-for-gutenberg")}]}))),o.a.createElement(i.b,i.a.style,o.a.createElement(f.a,{title:Object(n.__)("Background","ultimate-addons-for-gutenberg"),initialOpen:!1},o.a.createElement(c.a,h({setAttributes:t,backgroundGradient:{value:Se,label:"gradientValue"},backgroundImageColor:{value:be,label:"backgroundImageColor"},overlayType:{value:ie,label:"overlayType"},backgroundSize:{value:ne,label:"backgroundSize"},backgroundRepeat:{value:oe,label:"backgroundRepeat"},backgroundAttachment:{value:le,label:"backgroundAttachment"},backgroundPosition:{value:te,label:"backgroundPosition"},backgroundImage:{value:$,label:"backgroundImage"},backgroundColor:{value:ae,label:"backgroundColor"},backgroundType:{value:Z,label:"backgroundType"},backgroundVideoType:{value:!0},backgroundVideo:{value:ee,label:"backgroundVideo"},backgroundVideoColor:{value:re,label:"backgroundVideoColor"},backgroundVideoOpacity:{value:ue,label:"backgroundVideoOpacity"},onOpacityChange:e=>t({backgroundVideoOpacity:e})},e))),o.a.createElement(o.a.Fragment,null,o.a.createElement(f.a,{title:Object(n.__)("Border","ultimate-addons-for-gutenberg"),initialOpen:!1},o.a.createElement(s.a,{setAttributes:t,borderStyle:{value:de,label:"borderStyle",title:Object(n.__)("Style","ultimate-addons-for-gutenberg")},borderWidth:{value:ge,label:"borderWidth",title:Object(n.__)("Width","ultimate-addons-for-gutenberg")},borderRadius:{value:ce,label:"borderRadius",title:Object(n.__)("Radius","ultimate-addons-for-gutenberg")},borderColor:{value:se,label:"borderColor",title:Object(n.__)("Color","ultimate-addons-for-gutenberg")},borderHoverColor:{value:me,label:"borderHoverColor",title:Object(n.__)("Hover Color","ultimate-addons-for-gutenberg")},disableBottomSeparator:!0})),o.a.createElement(f.a,{title:"Box Shadow",initialOpen:!1},o.a.createElement(u.a,{setAttributes:t,label:Object(n.__)("Box Shadow","ultimate-addons-for-gutenberg"),boxShadowColor:{value:ke,label:"boxShadowColor",title:Object(n.__)("Color","ultimate-addons-for-gutenberg")},boxShadowHOffset:{value:je,label:"boxShadowHOffset",title:Object(n.__)("Horizontal","ultimate-addons-for-gutenberg")},boxShadowVOffset:{value:xe,label:"boxShadowVOffset",title:Object(n.__)("Vertical","ultimate-addons-for-gutenberg")},boxShadowBlur:{value:ye,label:"boxShadowBlur",title:Object(n.__)("Blur","ultimate-addons-for-gutenberg")},boxShadowSpread:{value:Ee,label:"boxShadowSpread",title:Object(n.__)("Spread","ultimate-addons-for-gutenberg")},boxShadowPosition:{value:we,label:"boxShadowPosition",title:Object(n.__)("Position","ultimate-addons-for-gutenberg")}}))),o.a.createElement(f.a,{title:"Spacing",initialOpen:!1},o.a.createElement(d.a,h({},e,{label:Object(n.__)("Margin","ultimate-addons-for-gutenberg"),valueTop:{value:V,label:"topMargin"},valueRight:{value:N,label:"rightMargin"},valueBottom:{value:R,label:"bottomMargin"},valueLeft:{value:P,label:"leftMargin"},valueTopTablet:{value:W,label:"topMarginTablet"},valueRightTablet:{value:F,label:"rightMarginTablet"},valueBottomTablet:{value:H,label:"bottomMarginTablet"},valueLeftTablet:{value:U,label:"leftMarginTablet"},valueTopMobile:{value:q,label:"topMarginMobile"},valueRightMobile:{value:Y,label:"rightMarginMobile"},valueBottomMobile:{value:K,label:"bottomMarginMobile"},valueLeftMobile:{value:Q,label:"leftMarginMobile"},unit:{value:_e,label:"desktopMarginType"},mUnit:{value:ve,label:"mobileMarginType"},tUnit:{value:pe,label:"tabletMarginType"},deviceType:O,attributes:a,setAttributes:t,link:{value:Te,label:"marginspacingLink"}})),o.a.createElement(d.a,h({},e,{label:Object(n.__)("Padding","ultimate-addons-for-gutenberg"),valueTop:{value:M,label:"topPadding"},valueRight:{value:S,label:"rightPadding"},valueBottom:{value:I,label:"bottomPadding"},valueLeft:{value:T,label:"leftPadding"},valueTopTablet:{value:A,label:"topPaddingTablet"},valueRightTablet:{value:L,label:"rightPaddingTablet"},valueBottomTablet:{value:B,label:"bottomPaddingTablet"},valueLeftTablet:{value:z,label:"leftPaddingTablet"},valueTopMobile:{value:G,label:"topPaddingMobile"},valueRightMobile:{value:X,label:"rightPaddingMobile"},valueBottomMobile:{value:D,label:"bottomPaddingMobile"},valueLeftMobile:{value:J,label:"leftPaddingMobile"},unit:{value:Oe,label:"desktopPaddingType"},mUnit:{value:fe,label:"mobilePaddingType"},tUnit:{value:he,label:"tabletPaddingType"},deviceType:O,attributes:a,setAttributes:t,link:{value:Ce,label:"spacingLink"}})))),o.a.createElement(i.b,h({},i.a.advance,{parentProps:e})))))};a.default=o.a.memo(O)}}]);