(window.webpackJsonp_ultimate_addons_for_gutenberg=window.webpackJsonp_ultimate_addons_for_gutenberg||[]).push([[18],{192:function(e,a,t){"use strict";var o,l=t(1),n=t(6),r=t(4),b=t(0),u=t.n(b),i=t(16),d=t.n(i),g=t(193),c=0,s={injectType:"lazySingletonStyleTag",attributes:{id:"uagb-editor-styles"},insert:"head",singleton:!0},m={};m.locals=g.a.locals||{},m.use=function(){return c++||(o=d()(g.a,s)),m},m.unuse=function(){c>0&&!--c&&(o(),o=null)};var v=m;a.a=e=>{Object(b.useLayoutEffect)(()=>(v.use(),()=>{v.unuse()}),[]);const{onSelectImage:a,backgroundImage:t,onRemoveImage:o,showVideoInput:i,label:d}=e;let g=Object(l.__)("Image","ultimate-addons-for-gutenberg"),c=Object(l.__)("Select Image","ultimate-addons-for-gutenberg"),s=Object(l.__)("Replace Image","ultimate-addons-for-gutenberg"),m=Object(l.__)("Remove Image","ultimate-addons-for-gutenberg"),p=["image"];return i&&(g=Object(l.__)("Video","ultimate-addons-for-gutenberg"),c=Object(l.__)("Select Video","ultimate-addons-for-gutenberg"),s=Object(l.__)("Replace Video","ultimate-addons-for-gutenberg"),m=Object(l.__)("Remove Video","ultimate-addons-for-gutenberg"),p=["video"]),g=d||g,u.a.createElement(n.BaseControl,{className:"editor-bg-image-control",id:"uagb-option-selector-"+d,label:g},u.a.createElement("div",{className:"uagb-bg-image"},u.a.createElement(r.MediaUpload,{title:c,onSelect:a,allowedTypes:p,value:t,render:({open:e})=>u.a.createElement(n.Button,{isSecondary:!0,onClick:e},null!=t&&t.url?s:c)}),(null==t?void 0:t.url)&&u.a.createElement(n.Button,{className:"uagb-rm-btn",onClick:o,isLink:!0,isDestructive:!0},m),e.help&&u.a.createElement("p",{className:"uag-control-help-notice"},e.help)))}},193:function(e,a,t){"use strict";var o=t(17),l=t.n(o)()((function(e){return e[1]}));l.push([e.i,".uagb-bg-image {\n  border-radius: 2px;\n  background-color: #f0f0f0;\n  min-height: 90px;\n  padding: 8px 0;\n  text-align: center;\n  display: flex;\n  width: 100%;\n  transition: all 0.1s ease-out;\n  box-shadow: 0 0 0 0 #0085ba;\n  margin-top: 10px;\n  align-items: center;\n  justify-content: center; }\n  .uagb-bg-image .components-button {\n    margin: 0;\n    padding: 0; }\n  .uagb-bg-image .uagb-rm-btn {\n    margin-left: 10px; }\n\n.uagb-bg-image .components-button:focus:not(:disabled),\n.uagb-bg-image .components-button.is-secondary:hover:not(:disabled),\n.components-button.is-tertiary:hover:not(:disabled),\n.uagb-bg-image .components-button.is-secondary,\n.components-button.is-tertiary {\n  box-shadow: none; }\n",""]),a.a=l},198:function(e,a,t){"use strict";var o=t(17),l=t.n(o)()((function(e){return e[1]}));l.push([e.i,'/** Box Shadow Popup CSS*/\n.uag-box-shadow-options {\n  margin-bottom: 24px; }\n  .uag-box-shadow-options .uag-box-shadow-option-actions {\n    display: flex;\n    justify-content: space-between;\n    margin: 0;\n    align-items: center; }\n    .uag-box-shadow-options .uag-box-shadow-option-actions .uag-box-shadow-button {\n      margin: 0;\n      height: 28px;\n      width: 28px;\n      padding: 5px;\n      border: 1px solid #d3d3d3;\n      border-radius: 14px; }\n      .uag-box-shadow-options .uag-box-shadow-option-actions .uag-box-shadow-button .dashicons-edit {\n        font-size: 15px;\n        line-height: 20px; }\n      .uag-box-shadow-options .uag-box-shadow-option-actions .uag-box-shadow-button:focus:not(:disabled) {\n        box-shadow: none;\n        outline: none; }\n  .uag-box-shadow-options .uagb-box-shadow-advanced {\n    border: 1px solid #d3d3d3;\n    border-radius: 3px;\n    padding: 15px;\n    margin: 10px 0;\n    position: relative;\n    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3); }\n    .uag-box-shadow-options .uagb-box-shadow-advanced > .components-base-control {\n      margin-top: 0; }\n    .uag-box-shadow-options .uagb-box-shadow-advanced::after, .uag-box-shadow-options .uagb-box-shadow-advanced::before {\n      bottom: 100%;\n      right: 8px;\n      border: solid transparent;\n      content: "";\n      height: 0;\n      width: 0;\n      position: absolute;\n      pointer-events: none; }\n    .uag-box-shadow-options .uagb-box-shadow-advanced::after {\n      right: 9px;\n      border-color: rgba(255, 255, 255, 0);\n      border-bottom-color: #fff;\n      border-width: 5px;\n      margin-left: -5px; }\n    .uag-box-shadow-options .uagb-box-shadow-advanced::before {\n      border-color: rgba(211, 211, 211, 0);\n      border-bottom-color: #d3d3d3;\n      border-width: 6px;\n      margin-left: -6px; }\n    .uag-box-shadow-options .uagb-box-shadow-advanced .uagb-shadow-color,\n    .uag-box-shadow-options .uagb-box-shadow-advanced .uagb-horizontal-wrap,\n    .uag-box-shadow-options .uagb-box-shadow-advanced .uagb-vertical-wrap,\n    .uag-box-shadow-options .uagb-box-shadow-advanced .uagb-blur-wrap,\n    .uag-box-shadow-options .uagb-box-shadow-advanced .uagb-spread-wrap {\n      margin-bottom: 16px; }\n\n.block-editor-block-inspector .components-base-control:last-child {\n  margin-bottom: 0; }\n',""]),a.a=l},199:function(e,a,t){"use strict";var o=t(17),l=t.n(o)()((function(e){return e[1]}));l.push([e.i,".uag-bg-select-control .uag-background-type .components-select-control {\n  align-items: center;\n  display: grid;\n  grid-template-columns: 50% 50%; }\n\n.uag-bg-select-control .uag-background-color,\n.uag-bg-select-control .uag-background-image,\n.uag-bg-select-control .uag-background-gradient,\n.uag-bg-select-control .uag-background-opacity,\n.uag-bg-select-control .uag-background-video,\n.uag-bg-select-control .uag-background-video-overlay,\n.uag-bg-select-control .uag-background-video-opacity,\n.uag-bg-select-control .uag-background-image-position,\n.uag-bg-select-control .uag-background-image-attachment,\n.uag-bg-select-control .uag-background-image-repeat,\n.uag-bg-select-control .uag-background-image-size,\n.uag-bg-select-control .uag-background-image-overlay-type,\n.uag-bg-select-control .uag-background-image-overlay-color,\n.uag-bg-select-control .uag-background-image-overlay-gradient {\n  margin-top: 24px; }\n",""]),a.a=l},201:function(e,a,t){"use strict";var o,l=t(1),n=t(15),r=t(6),b=t(16),u=t.n(b),i=t(199),d=0,g={injectType:"lazySingletonStyleTag",attributes:{id:"uagb-editor-styles"},insert:"head",singleton:!0},c={};c.locals=i.a.locals||{},c.use=function(){return d++||(o=u()(i.a,g)),c},c.unuse=function(){d>0&&!--d&&(o(),o=null)};var s=c,m=e=>{const{setAttributes:a,backgroundGradient:t}=e;return React.createElement(r.GradientPicker,{value:t.value,onChange:e=>{a({[t.label]:e})}})},v=t(0),p=t.n(v),_=t(192);a.a=e=>{Object(v.useLayoutEffect)(()=>(s.use(),()=>{s.unuse()}),[]);const{setAttributes:a,backgroundImageColor:t,overlayType:o,backgroundSize:b,backgroundRepeat:u,backgroundAttachment:i,backgroundPosition:d,backgroundImage:g,backgroundColor:c,backgroundVideoType:f,backgroundType:h,backgroundVideo:O,backgroundVideoColor:j,onOpacityChange:k}=e;let C=[];C=[{value:"none",label:Object(l.__)("None","ultimate-addons-for-gutenberg")},{value:"color",label:Object(l.__)("Color","ultimate-addons-for-gutenberg")},{value:"gradient",label:Object(l.__)("Gradient","ultimate-addons-for-gutenberg")},{value:"image",label:Object(l.__)("Image","ultimate-addons-for-gutenberg")}],f.value&&C.push({value:"video",label:Object(l.__)("Video","ultimate-addons-for-gutenberg")});const x=p.a.createElement(p.a.Fragment,null,p.a.createElement("div",{className:"uag-background-type"},p.a.createElement(r.SelectControl,{value:h.value,onChange:e=>a({[h.label]:e}),options:C,label:Object(l.__)("Type","ultimate-addons-for-gutenberg")})),"color"===h.value&&p.a.createElement("div",{className:"uag-background-color"},p.a.createElement(n.a,{label:Object(l.__)("Color","ultimate-addons-for-gutenberg"),colorValue:c.value?c.value:"",onColorChange:e=>a({[c.label]:e})})),"image"===h.value&&p.a.createElement("div",{className:"uag-background-image"},p.a.createElement(_.a,{onSelectImage:e=>{e&&e.url?e.type&&"image"===e.type&&a({[g.label]:e}):a({[g.label]:null})},backgroundImage:g.value,onRemoveImage:()=>{a({[g.label]:null})}}),g.value&&p.a.createElement(p.a.Fragment,null,p.a.createElement("div",{className:"uag-background-image-position"},p.a.createElement(r.SelectControl,{label:Object(l.__)("Image Position","ultimate-addons-for-gutenberg"),value:d.value,onChange:e=>a({[d.label]:e}),options:[{value:"left top",label:Object(l.__)("Top Left","ultimate-addons-for-gutenberg")},{value:"center top",label:Object(l.__)("Top Center","ultimate-addons-for-gutenberg")},{value:"right top",label:Object(l.__)("Top Right","ultimate-addons-for-gutenberg")},{value:"center top",label:Object(l.__)("Center Top","ultimate-addons-for-gutenberg")},{value:"center center",label:Object(l.__)("Center Center","ultimate-addons-for-gutenberg")},{value:"center bottom",label:Object(l.__)("Center Bottom","ultimate-addons-for-gutenberg")},{value:"left bottom",label:Object(l.__)("Bottom Left","ultimate-addons-for-gutenberg")},{value:"center bottom",label:Object(l.__)("Bottom Center","ultimate-addons-for-gutenberg")},{value:"right bottom",label:Object(l.__)("Bottom Right","ultimate-addons-for-gutenberg")}]})),p.a.createElement("div",{className:"uag-background-image-attachment"},p.a.createElement(r.SelectControl,{label:Object(l.__)("Attachment","ultimate-addons-for-gutenberg"),value:i.value,onChange:e=>a({[i.label]:e}),options:[{value:"fixed",label:Object(l.__)("Fixed","ultimate-addons-for-gutenberg")},{value:"scroll",label:Object(l.__)("Scroll","ultimate-addons-for-gutenberg")}]})),p.a.createElement("div",{className:"uag-background-image-repeat"},p.a.createElement(r.SelectControl,{label:Object(l.__)("Repeat","ultimate-addons-for-gutenberg"),value:u.value,onChange:e=>a({[u.label]:e}),options:[{value:"no-repeat",label:Object(l.__)("No Repeat","ultimate-addons-for-gutenberg")},{value:"repeat",label:Object(l.__)("Repeat","ultimate-addons-for-gutenberg")},{value:"repeat-x",label:Object(l.__)("Repeat-x","ultimate-addons-for-gutenberg")},{value:"repeat-y",label:Object(l.__)("Repeat-y","ultimate-addons-for-gutenberg")}]})),p.a.createElement("div",{className:"uag-background-image-size"},p.a.createElement(r.SelectControl,{label:Object(l.__)("Size","ultimate-addons-for-gutenberg"),value:b.value,onChange:e=>a({[b.label]:e}),options:[{value:"auto",label:Object(l.__)("Auto","ultimate-addons-for-gutenberg")},{value:"cover",label:Object(l.__)("Cover","ultimate-addons-for-gutenberg")},{value:"contain",label:Object(l.__)("Contain","ultimate-addons-for-gutenberg")}]})),o&&p.a.createElement(p.a.Fragment,null,p.a.createElement("div",{className:"uag-background-image-overlay-type"},p.a.createElement(r.SelectControl,{label:Object(l.__)("Overlay Type","ultimate-addons-for-gutenberg"),value:o.value,onChange:e=>a({[o.label]:e}),options:[{value:"color",label:Object(l.__)("Color","ultimate-addons-for-gutenberg")},{value:"gradient",label:Object(l.__)("Gradient","ultimate-addons-for-gutenberg")}]})),"color"===o.value&&p.a.createElement("div",{className:"uag-background-image-overlay-color"},p.a.createElement(n.a,{label:Object(l.__)("Image Overlay Color","ultimate-addons-for-gutenberg"),colorValue:t.value,onColorChange:e=>a({[t.label]:e})})),"gradient"===o.value&&p.a.createElement("div",{className:"uag-background-image-overlay-gradient"},p.a.createElement(m,{backgroundGradient:e.backgroundGradient,setAttributes:a}))))),"gradient"===h.value&&p.a.createElement("div",{className:"uag-background-gradient"},p.a.createElement(m,{backgroundGradient:e.backgroundGradient,setAttributes:e.setAttributes})),"video"===h.value&&f.value&&p.a.createElement("div",{className:"uag-background-video"},p.a.createElement(_.a,{onSelectImage:e=>{e&&e.url?e.type&&"video"===e.type&&a({[O.label]:e}):a({[O.label]:null})},backgroundImage:O.value,onRemoveImage:()=>{a({[O.label]:null})},showVideoInput:!0})),"video"===h.value&&O.value&&f.value&&p.a.createElement("div",{className:"uag-background-video-overlay"},p.a.createElement(n.a,{label:Object(l.__)("Video Overlay Color","ultimate-addons-for-gutenberg"),colorValue:j.value,onColorChange:e=>a({[j.label]:e}),onOpacityChange:k})));return p.a.createElement("div",{className:"uag-bg-select-control components-base-control"},x)}},202:function(e,a,t){"use strict";var o,l=t(1),n=t(11),r=t(15),b=t(6),u=t(2),i=t(19),d=t(16),g=t.n(d),c=t(198),s=0,m={injectType:"lazySingletonStyleTag",attributes:{id:"uagb-editor-styles"},insert:"head",singleton:!0},v={};v.locals=c.a.locals||{},v.use=function(){return s++||(o=g()(c.a,m)),v},v.unuse=function(){s>0&&!--s&&(o(),o=null)};var p=v,_=t(0),f=t.n(_);a.a=e=>{Object(_.useLayoutEffect)(()=>(p.use(),()=>{p.unuse()}),[]);const[a,t]=Object(u.useState)(!1),{setAttributes:o,boxShadowColor:d,boxShadowHOffset:g,boxShadowVOffset:c,boxShadowBlur:s,boxShadowSpread:m,boxShadowPosition:v}=e;let h;const O=a?"active":"";a&&(h=f.a.createElement("div",{className:"uagb-box-shadow-advanced"},f.a.createElement("div",{className:"uagb-shadow-color"},f.a.createElement(r.a,{label:d.title,colorValue:d.value,onColorChange:e=>o({[d.label]:e})})),f.a.createElement("div",{className:"uagb-horizontal-wrap"},f.a.createElement(n.a,{label:g.title,value:g.value,min:0,max:100,displayUnit:!1,setAttributes:o,data:{value:g.value,label:g.label},onChange:!1})),f.a.createElement("div",{className:"uagb-vertical-wrap"},f.a.createElement(n.a,{label:c.title,value:c.value,min:0,max:100,displayUnit:!1,setAttributes:o,data:{value:c.value,label:c.label},onChange:!1})),f.a.createElement("div",{className:"uagb-blur-wrap"},f.a.createElement(n.a,{label:s.title,value:s.value,min:0,max:100,displayUnit:!1,setAttributes:o,data:{value:s.value,label:s.label},onChange:!1})),f.a.createElement("div",{className:"uagb-spread-wrap"},f.a.createElement(n.a,{label:m.title,value:m.value,min:-100,max:100,displayUnit:!1,setAttributes:o,data:{value:m.value,label:m.label},onChange:!1})),f.a.createElement("div",{className:"uagb-shadow-type"},f.a.createElement(i.a,{setAttributes:o,label:v.title,data:{value:v.value,label:v.label},options:[{value:"outset",label:Object(l.__)("Outset","ultimate-addons-for-gutenberg"),tooltip:Object(l.__)("Outset","ultimate-addons-for-gutenberg")},{value:"inset",label:Object(l.__)("Inset","ultimate-addons-for-gutenberg"),tooltip:Object(l.__)("Inset (10px)","ultimate-addons-for-gutenberg")}],showIcons:!1}))));const j=f.a.createElement("div",{className:"uag-box-shadow-option-actions"},f.a.createElement("span",{className:"uag-control-label"},Object(l.__)("Box Shadow","ultimate-addons-for-gutenberg")),f.a.createElement(b.Button,{className:"uag-box-shadow-button","aria-pressed":a,onClick:()=>t(!a)},f.a.createElement(b.Dashicon,{icon:"edit"})));return f.a.createElement("div",{className:"components-base-control uag-box-shadow-options "+O},j,a&&h)}},483:function(e,a,t){"use strict";t.r(a);var o=t(1),l=t(0),n=t.n(l),r=t(8),b=t(202),u=t(19),i=t(50),d=t(201),g=t(76),c=t(15),s=t(11),m=t(78),v=t(23),p=t(79),_=t(51),f=t(4),h=t(6),O=t(14);function j(){return(j=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e}).apply(this,arguments)}const k=e=>{e=e.parentProps;const{attributes:a,setAttributes:t}=e,{stack:k,align:C,vAlign:x,contentWidth:y,width:w,widthType:E,tag:T,columnGap:S,topMarginDesktop:M,rightMarginDesktop:P,leftMarginDesktop:A,bottomMarginDesktop:N,topMarginMobile:V,rightMarginMobile:I,leftMarginMobile:R,bottomMarginMobile:B,topMarginTablet:H,rightMarginTablet:W,leftMarginTablet:L,bottomMarginTablet:F,topPadding:z,bottomPadding:D,leftPadding:G,rightPadding:U,topPaddingTablet:J,bottomPaddingTablet:Z,leftPaddingTablet:X,rightPaddingTablet:q,topPaddingMobile:K,bottomPaddingMobile:Q,leftPaddingMobile:Y,rightPaddingMobile:$,backgroundType:ee,backgroundImage:ae,backgroundVideo:te,backgroundColor:oe,backgroundPosition:le,backgroundAttachment:ne,backgroundRepeat:re,backgroundSize:be,backgroundVideoColor:ue,backgroundVideoOpacity:ie,backgroundImageColor:de,gradientValue:ge,overlayType:ce,borderStyle:se,borderWidth:me,borderRadius:ve,borderColor:pe,borderHoverColor:_e,columns:fe,bottomType:he,bottomColor:Oe,bottomHeight:je,bottomHeightTablet:ke,bottomHeightMobile:Ce,bottomWidth:xe,topType:ye,topColor:we,topHeight:Ee,topHeightTablet:Te,topHeightMobile:Se,topWidth:Me,bottomFlip:Pe,topFlip:Ae,reverseTablet:Ne,reverseMobile:Ve,topContentAboveShape:Ie,bottomContentAboveShape:Re,mobileMarginType:Be,tabletMarginType:He,desktopMarginType:We,mobilePaddingType:Le,tabletPaddingType:Fe,desktopPaddingType:ze,paddingLink:De,marginLink:Ge,boxShadowColor:Ue,boxShadowHOffset:Je,boxShadowVOffset:Ze,boxShadowBlur:Xe,boxShadowSpread:qe,boxShadowPosition:Ke}=a;return n.a.createElement(l.Suspense,{fallback:Object(r.a)()},n.a.createElement(f.InspectorControls,null,n.a.createElement(m.a,null,n.a.createElement(v.b,v.a.general,n.a.createElement(O.a,{title:Object(o.__)("Layout","ultimate-addons-for-gutenberg")},n.a.createElement(s.a,{label:Object(o.__)("Columns","ultimate-addons-for-gutenberg"),setAttributes:t,value:fe,onChange:e=>t({columns:e}),min:0,max:6,displayUnit:!1}),n.a.createElement(u.a,{setAttributes:t,label:Object(o.__)("Content Width","ultimate-addons-for-gutenberg"),data:{value:C,label:"align"},className:"uagb-multi-button-alignment-control",options:[{value:"",label:"None"},{value:"wide",label:"Wide"},{value:"full",label:"Full Width"}],showIcons:!1}),n.a.createElement(u.a,{setAttributes:t,label:Object(o.__)("Vertical Alignment","ultimate-addons-for-gutenberg"),data:{value:x,label:"vAlign"},className:"uagb-multi-button-alignment-control",options:[{value:"top",label:"Top"},{value:"center",label:"Middle"},{value:"bottom",label:"Bottom"}],showIcons:!1}),n.a.createElement(u.a,{setAttributes:t,label:Object(o.__)("Stack On","ultimate-addons-for-gutenberg"),data:{value:k,label:"stack"},className:"uagb-multi-button-alignment-control",options:[{value:"none",label:Object(o.__)("None","ultimate-addons-for-gutenberg"),tooltip:Object(o.__)("None","ultimate-addons-for-gutenberg")},{value:"tablet",label:Object(o.__)("Tablet & Mobile","ultimate-addons-for-gutenberg"),tooltip:Object(o.__)("Tablet & Mobile","ultimate-addons-for-gutenberg")},{value:"mobile",label:Object(o.__)("Mobile","ultimate-addons-for-gutenberg"),tooltip:Object(o.__)("Mobile","ultimate-addons-for-gutenberg")}],showIcons:!1,help:Object(o.__)("Note: Choose on what breakpoint the columns will stack.","ultimate-addons-for-gutenberg")}),n.a.createElement(u.a,{setAttributes:t,label:Object(o.__)("Container Width","ultimate-addons-for-gutenberg"),data:{value:y,label:"contentWidth"},className:"uagb-multi-button-alignment-control",options:[{value:"theme",label:Object(o.__)("Theme Container Width","ultimate-addons-for-gutenberg"),tooltip:Object(o.__)("Theme Container Width","ultimate-addons-for-gutenberg")},{value:"custom",label:Object(o.__)("Custom","ultimate-addons-for-gutenberg"),tooltip:Object(o.__)("Custom","ultimate-addons-for-gutenberg")}],showIcons:!1}),"custom"===y&&n.a.createElement(n.a.Fragment,null,n.a.createElement(s.a,{label:Object(o.__)("Inner Width","ultimate-addons-for-gutenberg"),setAttributes:t,value:w,onChange:e=>t({width:e}),min:0,max:"%"===E?100:2e3,unit:{value:E,label:"widthType"},units:[{name:Object(o.__)("Pixel","ultimate-addons-for-gutenberg"),unitValue:"px"},{name:Object(o.__)("%","ultimate-addons-for-gutenberg"),unitValue:"%"}]})),n.a.createElement(u.a,{setAttributes:t,label:Object(o.__)("Gap","ultimate-addons-for-gutenberg"),data:{value:S,label:"columnGap"},className:"uagb-multi-button-alignment-control",options:[{value:"10",label:Object(o.__)("Default","ultimate-addons-for-gutenberg"),tooltip:Object(o.__)("Default (10px)","ultimate-addons-for-gutenberg")},{value:"0",label:Object(o.__)("None","ultimate-addons-for-gutenberg"),tooltip:Object(o.__)("No Gap (0px)","ultimate-addons-for-gutenberg")},{value:"5",label:Object(o.__)("S","ultimate-addons-for-gutenberg"),tooltip:Object(o.__)("Narrow (5px)","ultimate-addons-for-gutenberg")},{value:"15",label:Object(o.__)("M","ultimate-addons-for-gutenberg"),tooltip:Object(o.__)("Extended (15px)","ultimate-addons-for-gutenberg")},{value:"20",label:Object(o.__)("L","ultimate-addons-for-gutenberg"),tooltip:Object(o.__)("Wide (20px)","ultimate-addons-for-gutenberg")},{value:"30",label:Object(o.__)("XL","ultimate-addons-for-gutenberg"),tooltip:Object(o.__)("Wider (30px)","ultimate-addons-for-gutenberg")}],showIcons:!1,help:Object(o.__)("Note: The individual Column Gap can be managed from Column Settings.","ultimate-addons-for-gutenberg")}),n.a.createElement(h.SelectControl,{label:Object(o.__)("HTML Tag","ultimate-addons-for-gutenberg"),value:T,onChange:e=>t({tag:e}),options:[{value:"div",label:Object(o.__)("div","ultimate-addons-for-gutenberg")},{value:"header",label:Object(o.__)("header","ultimate-addons-for-gutenberg")},{value:"footer",label:Object(o.__)("footer","ultimate-addons-for-gutenberg")},{value:"main",label:Object(o.__)("main","ultimate-addons-for-gutenberg")},{value:"article",label:Object(o.__)("article","ultimate-addons-for-gutenberg")},{value:"section",label:Object(o.__)("section","ultimate-addons-for-gutenberg")},{value:"aside",label:Object(o.__)("aside","ultimate-addons-for-gutenberg")},{value:"nav",label:Object(o.__)("nav","ultimate-addons-for-gutenberg")}]}),n.a.createElement(h.ToggleControl,{label:Object(o.__)("Reverse Columns (Tablet & Mobile)","ultimate-addons-for-gutenberg"),checked:Ne,onChange:()=>t({reverseTablet:!Ne})}),n.a.createElement(h.ToggleControl,{label:Object(o.__)("Reverse Columns (Mobile)","ultimate-addons-for-gutenberg"),checked:Ve,onChange:()=>t({reverseMobile:!Ve})}))),n.a.createElement(v.b,v.a.style,(()=>{const e=[{value:"none",label:Object(o.__)("None","ultimate-addons-for-gutenberg")},{value:"tilt",label:Object(o.__)("Tilt","ultimate-addons-for-gutenberg")},{value:"mountains",label:Object(o.__)("Mountains","ultimate-addons-for-gutenberg")},{value:"wave_brush",label:Object(o.__)("Wave Brush","ultimate-addons-for-gutenberg")},{value:"waves",label:Object(o.__)("Waves","ultimate-addons-for-gutenberg")},{value:"wave_pattern",label:Object(o.__)("Waves Pattern","ultimate-addons-for-gutenberg")},{value:"triangle",label:Object(o.__)("Triangle","ultimate-addons-for-gutenberg")},{value:"drops",label:Object(o.__)("Drops","ultimate-addons-for-gutenberg")},{value:"clouds",label:Object(o.__)("Clouds","ultimate-addons-for-gutenberg")},{value:"zigzag",label:Object(o.__)("ZigZag","ultimate-addons-for-gutenberg")},{value:"pyramids",label:Object(o.__)("Pyramids","ultimate-addons-for-gutenberg")},{value:"triangle_asymmetrical",label:Object(o.__)("Triangle Asymmetrical","ultimate-addons-for-gutenberg")},{value:"tilt_opacity",label:Object(o.__)("Tilt Opacity","ultimate-addons-for-gutenberg")},{value:"fan_opacity",label:Object(o.__)("Fan Opacity","ultimate-addons-for-gutenberg")},{value:"curve",label:Object(o.__)("Curve","ultimate-addons-for-gutenberg")},{value:"curve_asymmetrical",label:Object(o.__)("Curve Asymmetrical","ultimate-addons-for-gutenberg")},{value:"curve_reverse",label:Object(o.__)("Curve Reverse","ultimate-addons-for-gutenberg")},{value:"curve_asym_reverse",label:Object(o.__)("Curve Asymmetrical Reverse","ultimate-addons-for-gutenberg")},{value:"arrow",label:Object(o.__)("Arrow","ultimate-addons-for-gutenberg")},{value:"arrow_split",label:Object(o.__)("Arrow Split","ultimate-addons-for-gutenberg")},{value:"book",label:Object(o.__)("Book","ultimate-addons-for-gutenberg")}],a=n.a.createElement(n.a.Fragment,null,n.a.createElement(h.SelectControl,{label:Object(o.__)("Type","ultimate-addons-for-gutenberg"),value:ye,onChange:e=>t({topType:e}),options:e}),"none"!==ye&&n.a.createElement(n.a.Fragment,null,n.a.createElement(c.a,{label:Object(o.__)("Color","ultimate-addons-for-gutenberg"),colorValue:we,onColorChange:e=>t({topColor:e})}),n.a.createElement(s.a,{label:Object(o.__)("Width","ultimate-addons-for-gutenberg"),setAttributes:t,value:Me,onChange:e=>t({topWidth:e}),min:100,max:2e3,displayUnit:!1}),n.a.createElement(p.a,{label:Object(o.__)("Height","ultimate-addons-for-gutenberg"),data:{desktop:{value:Ee,label:"topHeight"},tablet:{value:Te,label:"topHeightTablet"},mobile:{value:Se,label:"topHeightMobile"}},min:0,max:500,displayUnit:!1,setAttributes:t}),n.a.createElement(h.ToggleControl,{label:Object(o.__)("Flip","ultimate-addons-for-gutenberg"),checked:Ae,onChange:()=>t({topFlip:!Ae})}),n.a.createElement(h.ToggleControl,{label:Object(o.__)("Bring To Front","ultimate-addons-for-gutenberg"),checked:Ie,onChange:()=>t({topContentAboveShape:!Ie})}))),l=n.a.createElement(n.a.Fragment,null,n.a.createElement(h.SelectControl,{label:Object(o.__)("Type","ultimate-addons-for-gutenberg"),value:he,onChange:e=>t({bottomType:e}),options:e}),"none"!==he&&n.a.createElement(n.a.Fragment,null,n.a.createElement(c.a,{label:Object(o.__)("Color","ultimate-addons-for-gutenberg"),colorValue:Oe,onColorChange:e=>t({bottomColor:e})}),n.a.createElement(s.a,{label:Object(o.__)("Width","ultimate-addons-for-gutenberg"),setAttributes:t,value:xe,onChange:e=>t({bottomWidth:e}),min:100,max:2e3,displayUnit:!1}),n.a.createElement(p.a,{label:Object(o.__)("Height","ultimate-addons-for-gutenberg"),data:{desktop:{value:je,label:"bottomHeight"},tablet:{value:ke,label:"bottomHeightTablet"},mobile:{value:Ce,label:"bottomHeightMobile"}},min:0,max:500,displayUnit:!1,setAttributes:t}),n.a.createElement(h.ToggleControl,{label:Object(o.__)("Flip","ultimate-addons-for-gutenberg"),checked:Pe,onChange:()=>t({bottomFlip:!Pe})}),n.a.createElement(h.ToggleControl,{label:Object(o.__)("Bring To Front","ultimate-addons-for-gutenberg"),checked:Re,onChange:()=>t({bottomContentAboveShape:!Re})})));return n.a.createElement(O.a,{title:Object(o.__)("Shape Dividers","ultimate-addons-for-gutenberg"),initialOpen:!1},n.a.createElement(_.a,{tabs:[{name:"top",title:Object(o.__)("Top","ultimate-addons-for-gutenberg")},{name:"bottom",title:Object(o.__)("Bottom","ultimate-addons-for-gutenberg")}],top:a,bottom:l,disableBottomSeparator:!0}))})(),n.a.createElement(O.a,{title:Object(o.__)("Background","ultimate-addons-for-gutenberg"),initialOpen:!1},n.a.createElement(d.a,j({setAttributes:t,backgroundGradient:{value:ge,label:"gradientValue"},backgroundImageColor:{value:de,label:"backgroundImageColor"},overlayType:{value:ce,label:"overlayType"},backgroundSize:{value:be,label:"backgroundSize"},backgroundRepeat:{value:re,label:"backgroundRepeat"},backgroundAttachment:{value:ne,label:"backgroundAttachment"},backgroundPosition:{value:le,label:"backgroundPosition"},backgroundImage:{value:ae,label:"backgroundImage"},backgroundColor:{value:oe,label:"backgroundColor"},backgroundType:{value:ee,label:"backgroundType"},backgroundVideoType:{value:!0},backgroundVideo:{value:te,label:"backgroundVideo"},backgroundVideoColor:{value:ue,label:"backgroundVideoColor"},backgroundVideoOpacity:{value:ie,label:"backgroundVideoOpacity"},onOpacityChange:e=>t({backgroundVideoOpacity:e})},e))),n.a.createElement(O.a,{title:Object(o.__)("Border","ultimate-addons-for-gutenberg"),initialOpen:!1},n.a.createElement(g.a,{setAttributes:t,borderStyle:{value:se,label:"borderStyle",title:Object(o.__)("Style","ultimate-addons-for-gutenberg")},borderWidth:{value:me,label:"borderWidth",title:Object(o.__)("Width","ultimate-addons-for-gutenberg")},borderRadius:{value:ve,label:"borderRadius",title:Object(o.__)("Radius","ultimate-addons-for-gutenberg")},borderColor:{value:pe,label:"borderColor",title:Object(o.__)("Color","ultimate-addons-for-gutenberg")},borderHoverColor:{value:_e,label:"borderHoverColor",title:Object(o.__)("Hover Color","ultimate-addons-for-gutenberg")}}),n.a.createElement(b.a,{setAttributes:t,label:Object(o.__)("Box Shadow","ultimate-addons-for-gutenberg"),boxShadowColor:{value:Ue,label:"boxShadowColor",title:Object(o.__)("Color","ultimate-addons-for-gutenberg")},boxShadowHOffset:{value:Je,label:"boxShadowHOffset",title:Object(o.__)("Horizontal","ultimate-addons-for-gutenberg")},boxShadowVOffset:{value:Ze,label:"boxShadowVOffset",title:Object(o.__)("Vertical","ultimate-addons-for-gutenberg")},boxShadowBlur:{value:Xe,label:"boxShadowBlur",title:Object(o.__)("Blur","ultimate-addons-for-gutenberg")},boxShadowSpread:{value:qe,label:"boxShadowSpread",title:Object(o.__)("Spread","ultimate-addons-for-gutenberg")},boxShadowPosition:{value:Ke,label:"boxShadowPosition",title:Object(o.__)("Position","ultimate-addons-for-gutenberg")}})),n.a.createElement(O.a,{title:Object(o.__)("Spacing"),initialOpen:!1},n.a.createElement(i.a,j({},e,{label:Object(o.__)("Padding","ultimate-addons-for-gutenberg"),valueTop:{value:z,label:"topPadding"},valueRight:{value:U,label:"rightPadding"},valueBottom:{value:D,label:"bottomPadding"},valueLeft:{value:G,label:"leftPadding"},valueTopTablet:{value:J,label:"topPaddingTablet"},valueRightTablet:{value:q,label:"rightPaddingTablet"},valueBottomTablet:{value:Z,label:"bottomPaddingTablet"},valueLeftTablet:{value:X,label:"leftPaddingTablet"},valueTopMobile:{value:K,label:"topPaddingMobile"},valueRightMobile:{value:$,label:"rightPaddingMobile"},valueBottomMobile:{value:Q,label:"bottomPaddingMobile"},valueLeftMobile:{value:Y,label:"leftPaddingMobile"},unit:{value:ze,label:"desktopPaddingType"},mUnit:{value:Le,label:"mobilePaddingType"},tUnit:{value:Fe,label:"tabletPaddingType"},attributes:a,setAttributes:t,link:{value:De,label:"paddingLink"}})),n.a.createElement(i.a,j({},e,{label:Object(o.__)("Margin","ultimate-addons-for-gutenberg"),valueTop:{value:M,label:"topMarginDesktop"},valueRight:{value:P,label:"rightMarginDesktop"},valueBottom:{value:N,label:"bottomMarginDesktop"},valueLeft:{value:A,label:"leftMarginDesktop"},valueTopTablet:{value:H,label:"topMarginTablet"},valueRightTablet:{value:W,label:"rightMarginTablet"},valueBottomTablet:{value:F,label:"bottomMarginTablet"},valueLeftTablet:{value:L,label:"leftMarginTablet"},valueTopMobile:{value:V,label:"topMarginMobile"},valueRightMobile:{value:I,label:"rightMarginMobile"},valueBottomMobile:{value:B,label:"bottomMarginMobile"},valueLeftMobile:{value:R,label:"leftMarginMobile"},unit:{value:We,label:"desktopMarginType"},mUnit:{value:Be,label:"mobileMarginType"},tUnit:{value:He,label:"tabletMarginType"},attributes:a,setAttributes:t,link:{value:Ge,label:"marginLink"}})))),n.a.createElement(v.b,j({},v.a.advance,{parentProps:e})))))};a.default=n.a.memo(k)}}]);