(window.webpackJsonp_ultimate_addons_for_gutenberg=window.webpackJsonp_ultimate_addons_for_gutenberg||[]).push([[16],{200:function(e,a,t){"use strict";var l,o=t(1),n=t(6),r=t(4),u=t(0),b=t.n(u),i=t(13),g=t.n(i),c=t(201),d=0,s={injectType:"lazySingletonStyleTag",attributes:{id:"uagb-editor-styles"},insert:"head",singleton:!0},m={};m.locals=c.a.locals||{},m.use=function(){return d++||(l=g()(c.a,s)),m},m.unuse=function(){d>0&&!--d&&(l(),l=null)};var v=m;a.a=e=>{Object(u.useLayoutEffect)(()=>(v.use(),()=>{v.unuse()}),[]);const{onSelectImage:a,backgroundImage:t,onRemoveImage:l,showVideoInput:i,label:g}=e;let c=Object(o.__)("Image","ultimate-addons-for-gutenberg"),d=Object(o.__)("Select Image","ultimate-addons-for-gutenberg"),s=Object(o.__)("Replace Image","ultimate-addons-for-gutenberg"),m=Object(o.__)("Remove Image","ultimate-addons-for-gutenberg"),p=["image"];return i&&(c=Object(o.__)("Video","ultimate-addons-for-gutenberg"),d=Object(o.__)("Select Video","ultimate-addons-for-gutenberg"),s=Object(o.__)("Replace Video","ultimate-addons-for-gutenberg"),m=Object(o.__)("Remove Video","ultimate-addons-for-gutenberg"),p=["video"]),c=g||c,c=!1===g?g:c,b.a.createElement(n.BaseControl,{className:"editor-bg-image-control",id:"uagb-option-selector-"+g,label:c},b.a.createElement("div",{className:"uagb-bg-image"},b.a.createElement(r.MediaUpload,{title:d,onSelect:a,allowedTypes:p,value:t,render:e=>{let{open:a}=e;return b.a.createElement(n.Button,{isSecondary:!0,onClick:a},null!=t&&t.url?s:d)}}),(null==t?void 0:t.url)&&b.a.createElement(n.Button,{className:"uagb-rm-btn",onClick:l,isLink:!0,isDestructive:!0},m),e.help&&b.a.createElement("p",{className:"uag-control-help-notice"},e.help)))}},201:function(e,a,t){"use strict";var l=t(14),o=t.n(l)()((function(e){return e[1]}));o.push([e.i,".uagb-bg-image {\n  display: flex; }\n  .uagb-bg-image .components-button {\n    margin: 0;\n    border-radius: 2px;\n    background-color: #f0f0f0;\n    min-height: 90px;\n    padding: 8px 0;\n    text-align: center;\n    display: flex;\n    width: 100%;\n    transition: all 0.1s ease-out;\n    box-shadow: 0 0 0 0 #0085ba;\n    margin-top: 10px;\n    align-items: center;\n    justify-content: center; }\n    .uagb-bg-image .components-button.is-destructive:hover:not(:disabled) {\n      color: #710d0d;\n      box-shadow: inset 0 0 0 0px #710d0d; }\n    .uagb-bg-image .components-button.is-link.is-destructive:hover:not(:disabled) {\n      background: #f0f0f0; }\n    .uagb-bg-image .components-button.is-link.is-destructive:focus:not(:disabled) {\n      outline: none; }\n  .uagb-bg-image .uagb-rm-btn {\n    margin-left: 0px; }\n\n.uagb-bg-image .components-button:focus:not(:disabled),\n.uagb-bg-image .components-button.is-secondary:hover:not(:disabled),\n.components-button.is-tertiary:hover:not(:disabled),\n.uagb-bg-image .components-button.is-secondary,\n.components-button.is-tertiary {\n  box-shadow: none; }\n",""]),a.a=o},207:function(e,a,t){"use strict";var l=t(6);a.a=e=>{const{setAttributes:a,backgroundGradient:t}=e;return React.createElement(l.GradientPicker,{value:t.value,onChange:e=>{a({[t.label]:e})}})}},208:function(e,a,t){"use strict";var l=t(0),o=t.n(l),n=t(6),r=t(10),u=t(65);a.a=e=>{const{label:a,data:t,setAttributes:l,options:b}=e,i=Object(r.a)(),g={};return g.Desktop=o.a.createElement(n.SelectControl,{value:t.desktop.value,onChange:e=>l({[t.desktop.label]:e}),options:b.desktop}),g.Tablet=o.a.createElement(n.SelectControl,{value:t.tablet.value,onChange:e=>l({[t.tablet.label]:e}),options:b.tablet||b.desktop}),g.Mobile=o.a.createElement(n.SelectControl,{value:t.mobile.value,onChange:e=>l({[t.mobile.label]:e}),options:b.mobile||b.desktop}),o.a.createElement("div",{className:"components-base-control uagb-responsive-select-control"},o.a.createElement("div",{className:"uagb-size-type-field-tabs"},o.a.createElement("div",{className:"uagb-control__header"},o.a.createElement(u.a,{label:a,responsive:!0})),g[i]?g[i]:g.Desktop),e.help&&o.a.createElement("p",{className:"uag-control-help-notice"},e.help))}},210:function(e,a,t){"use strict";var l=t(14),o=t.n(l)()((function(e){return e[1]}));o.push([e.i,".uag-bg-select-control .uag-background-type .components-select-control {\n  align-items: center;\n  display: grid;\n  grid-template-columns: 50% 50%; }\n\n.uag-bg-select-control .uag-background-color,\n.uag-bg-select-control .uag-background-image,\n.uag-bg-select-control .uag-background-gradient,\n.uag-bg-select-control .uag-background-opacity,\n.uag-bg-select-control .uag-background-video,\n.uag-bg-select-control .uag-background-video-overlay,\n.uag-bg-select-control .uag-background-video-opacity,\n.uag-bg-select-control .uag-background-image-position,\n.uag-bg-select-control .uag-background-image-attachment,\n.uag-bg-select-control .uag-background-image-repeat,\n.uag-bg-select-control .uag-background-image-size,\n.uag-bg-select-control .uag-background-image-overlay-type,\n.uag-bg-select-control .uag-background-image-overlay-color,\n.uag-bg-select-control .uag-background-image-overlay-gradient,\n.uag-bg-select-control .uagb-responsive-select-control {\n  margin-top: 24px; }\n\n.uag-bg-select-control .uag-background-image > .uagb-responsive-select-control .uagb-size-type-field-tabs {\n  display: block; }\n  .uag-bg-select-control .uag-background-image > .uagb-responsive-select-control .uagb-size-type-field-tabs > .components-base-control {\n    width: 100%; }\n\n.uag-bg-select-control .uagb-size-type-field-tabs {\n  display: flex;\n  justify-content: space-between; }\n  .uag-bg-select-control .uagb-size-type-field-tabs > .components-base-control {\n    width: 45%; }\n\n.uag-bg-select-control .uag-background-image-overlay-type .components-select-control {\n  flex-direction: row;\n  align-items: center; }\n  .uag-bg-select-control .uag-background-image-overlay-type .components-select-control .components-input-control__container {\n    width: 45%;\n    flex: unset; }\n\n.uag-bg-select-control .uag-background-image-size .uagb-responsive-control-inner > .components-base-control {\n  display: block;\n  margin-top: 24px; }\n\n.uag-bg-select-control .uag-background-image-position .uagb-size-type-field-tabs {\n  flex-direction: column; }\n  .uag-bg-select-control .uag-background-image-position .uagb-size-type-field-tabs .components-focal-point-picker-control {\n    width: 100%; }\n",""]),a.a=o},212:function(e,a,t){"use strict";var l,o=t(1),n=t(16),r=t(6),u=t(13),b=t.n(u),i=t(210),g=0,c={injectType:"lazySingletonStyleTag",attributes:{id:"uagb-editor-styles"},insert:"head",singleton:!0},d={};d.locals=i.a.locals||{},d.use=function(){return g++||(l=b()(i.a,c)),d},d.unuse=function(){g>0&&!--g&&(l(),l=null)};var s=d,m=t(207),v=t(0),p=t.n(v),_=t(200),f=t(21),k=t(208),y=t(10),O=t(65),h=e=>{const{backgroundImage:a,setAttributes:t}=e,l=Object(y.a)(),n=l.toLowerCase(),r=e=>{e&&e.url?e.type&&"image"===e.type?t({[a[n].label]:e}):t({[a[n].label]:null}):t({[a[n].label]:null})},u=()=>{t({[a[n].label]:""})},b={};return b.Desktop=p.a.createElement(_.a,{onSelectImage:r,backgroundImage:a.desktop.value,onRemoveImage:u,label:!1}),b.Tablet=p.a.createElement(_.a,{onSelectImage:r,backgroundImage:a.tablet.value,onRemoveImage:u,label:!1}),b.Mobile=p.a.createElement(_.a,{onSelectImage:r,backgroundImage:a.mobile.value,onRemoveImage:u,label:!1}),p.a.createElement("div",{className:"components-base-control uagb-responsive-select-control"},p.a.createElement("div",{className:"uagb-size-type-field-tabs"},p.a.createElement("div",{className:"uagb-control__header"},p.a.createElement(O.a,{label:Object(o.__)("Image","ultimate-addons-for-gutenberg"),responsive:!0})),b[l]?b[l]:b.Desktop),e.help&&p.a.createElement("p",{className:"uag-control-help-notice"},e.help))},j=e=>{var a,t,l;const{backgroundPosition:n,backgroundImage:u,setAttributes:b}=e,i=Object(y.a)(),g=i.toLowerCase(),c={},d=null===(a=u[g])||void 0===a||null===(t=a.value)||void 0===t?void 0:t.url,s=null===(l=n[g])||void 0===l?void 0:l.value;return c.Desktop=p.a.createElement(r.FocalPointPicker,{url:d,value:s,onChange:e=>{var a;b({[null===(a=n[g])||void 0===a?void 0:a.label]:e})}}),c.Tablet=p.a.createElement(r.FocalPointPicker,{url:d,value:s,onChange:e=>{var a;b({[null===(a=n[g])||void 0===a?void 0:a.label]:e})}}),c.Mobile=p.a.createElement(r.FocalPointPicker,{url:d,value:s,onChange:e=>{var a;b({[null===(a=n[g])||void 0===a?void 0:a.label]:e})}}),p.a.createElement("div",{className:"components-base-control uagb-responsive-select-control"},p.a.createElement("div",{className:"uagb-size-type-field-tabs"},p.a.createElement("div",{className:"uagb-control__header"},p.a.createElement(O.a,{label:Object(o.__)("Image","ultimate-addons-for-gutenberg"),responsive:!0})),c[i]?c[i]:c.Desktop),e.help&&p.a.createElement("p",{className:"uag-control-help-notice"},e.help))},E=t(19);a.a=e=>{var a,t;Object(v.useLayoutEffect)(()=>(s.use(),()=>{s.unuse()}),[]);const l=Object(y.a)().toLowerCase(),{setAttributes:u,backgroundImageColor:b,overlayType:i,backgroundSize:g,backgroundRepeat:c,backgroundAttachment:d,backgroundPosition:O,backgroundImage:C,backgroundColor:T,backgroundVideoType:M,backgroundType:P,backgroundVideo:I,backgroundVideoColor:N,onOpacityChange:S,backgroundCustomSize:R,backgroundCustomSizeType:x,imageResponsive:A}=e;let w=[];w=[{value:"none",label:Object(o.__)("None","ultimate-addons-for-gutenberg")},{value:"color",label:Object(o.__)("Color","ultimate-addons-for-gutenberg")},{value:"gradient",label:Object(o.__)("Gradient","ultimate-addons-for-gutenberg")},{value:"image",label:Object(o.__)("Image","ultimate-addons-for-gutenberg")}];let z=[{value:"auto",label:Object(o.__)("Auto","ultimate-addons-for-gutenberg")},{value:"cover",label:Object(o.__)("Cover","ultimate-addons-for-gutenberg")},{value:"contain",label:Object(o.__)("Contain","ultimate-addons-for-gutenberg")},{value:"custom",label:Object(o.__)("Custom","ultimate-addons-for-gutenberg")}];R||(z=[{value:"auto",label:Object(o.__)("Auto","ultimate-addons-for-gutenberg")},{value:"cover",label:Object(o.__)("Cover","ultimate-addons-for-gutenberg")},{value:"contain",label:Object(o.__)("Contain","ultimate-addons-for-gutenberg")}]),M.value&&w.push({value:"video",label:Object(o.__)("Video","ultimate-addons-for-gutenberg")});const V=p.a.createElement(p.a.Fragment,null,p.a.createElement("div",{className:"uag-background-type"},p.a.createElement(r.SelectControl,{value:P.value,onChange:e=>u({[P.label]:e}),options:w,label:Object(o.__)("Type","ultimate-addons-for-gutenberg")})),"color"===P.value&&p.a.createElement("div",{className:"uag-background-color"},p.a.createElement(n.a,{label:Object(o.__)("Color","ultimate-addons-for-gutenberg"),colorValue:T.value?T.value:"",onColorChange:e=>u({[T.label]:e})})),"image"===P.value&&p.a.createElement("div",{className:"uag-background-image"},!A&&p.a.createElement(_.a,{onSelectImage:e=>{e&&e.url?e.type&&"image"===e.type&&u({[C.label]:e}):u({[C.label]:null})},backgroundImage:C.value,onRemoveImage:()=>{u({[C.label]:null})}}),!A&&C.value&&p.a.createElement(p.a.Fragment,null,p.a.createElement("div",{className:"uag-background-image-position"},p.a.createElement(r.SelectControl,{label:Object(o.__)("Image Position","ultimate-addons-for-gutenberg"),value:O.value,onChange:e=>u({[O.label]:e}),options:[{value:"left top",label:Object(o.__)("Top Left","ultimate-addons-for-gutenberg")},{value:"center top",label:Object(o.__)("Top Center","ultimate-addons-for-gutenberg")},{value:"right top",label:Object(o.__)("Top Right","ultimate-addons-for-gutenberg")},{value:"center top",label:Object(o.__)("Center Top","ultimate-addons-for-gutenberg")},{value:"center center",label:Object(o.__)("Center Center","ultimate-addons-for-gutenberg")},{value:"center bottom",label:Object(o.__)("Center Bottom","ultimate-addons-for-gutenberg")},{value:"left bottom",label:Object(o.__)("Bottom Left","ultimate-addons-for-gutenberg")},{value:"center bottom",label:Object(o.__)("Bottom Center","ultimate-addons-for-gutenberg")},{value:"right bottom",label:Object(o.__)("Bottom Right","ultimate-addons-for-gutenberg")}]})),p.a.createElement("div",{className:"uag-background-image-attachment"},p.a.createElement(r.SelectControl,{label:Object(o.__)("Attachment","ultimate-addons-for-gutenberg"),value:d.value,onChange:e=>u({[d.label]:e}),options:[{value:"fixed",label:Object(o.__)("Fixed","ultimate-addons-for-gutenberg")},{value:"scroll",label:Object(o.__)("Scroll","ultimate-addons-for-gutenberg")}]})),p.a.createElement("div",{className:"uag-background-image-repeat"},p.a.createElement(r.SelectControl,{label:Object(o.__)("Repeat","ultimate-addons-for-gutenberg"),value:c.value,onChange:e=>u({[c.label]:e}),options:[{value:"no-repeat",label:Object(o.__)("No Repeat","ultimate-addons-for-gutenberg")},{value:"repeat",label:Object(o.__)("Repeat","ultimate-addons-for-gutenberg")},{value:"repeat-x",label:Object(o.__)("Repeat-x","ultimate-addons-for-gutenberg")},{value:"repeat-y",label:Object(o.__)("Repeat-y","ultimate-addons-for-gutenberg")}]})),p.a.createElement("div",{className:"uag-background-image-size"},p.a.createElement(r.SelectControl,{label:Object(o.__)("Size","ultimate-addons-for-gutenberg"),value:g.value,onChange:e=>u({[g.label]:e}),options:z}),"custom"===g.value&&R&&p.a.createElement(f.a,{label:Object(o.__)("Width","ultimate-addons-for-gutenberg"),data:{desktop:{value:R.desktop.value,label:R.desktop.label},tablet:{value:R.tablet.value,label:R.tablet.label},mobile:{value:R.mobile.value,label:R.mobile.label}},min:0,limitMax:{px:1600,"%":100,em:574},unit:{value:x.value,label:x.label},units:[{name:Object(o.__)("PX","ultimate-addons-for-gutenberg"),unitValue:"px"},{name:Object(o.__)("%","ultimate-addons-for-gutenberg"),unitValue:"%"},{name:Object(o.__)("EM","ultimate-addons-for-gutenberg"),unitValue:"em"}],setAttributes:u}))),A&&C&&p.a.createElement(h,{backgroundImage:C,setAttributes:u}),A&&C[l]&&(null===(a=C[l])||void 0===a?void 0:a.value)&&p.a.createElement(p.a.Fragment,null,p.a.createElement("div",{className:"uag-background-image-position"},p.a.createElement(j,{backgroundPosition:O,setAttributes:u,backgroundImage:C})),p.a.createElement("div",{className:"uag-background-image-attachment"},p.a.createElement(k.a,{label:Object(o.__)("Attachment","ultimate-addons-for-gutenberg"),data:d,options:{desktop:[{value:"fixed",label:Object(o.__)("Fixed","ultimate-addons-for-gutenberg")},{value:"scroll",label:Object(o.__)("Scroll","ultimate-addons-for-gutenberg")}]},setAttributes:u})),p.a.createElement("div",{className:"uag-background-image-repeat"},p.a.createElement(k.a,{label:Object(o.__)("Repeat","ultimate-addons-for-gutenberg"),data:c,options:{desktop:[{value:"no-repeat",label:Object(o.__)("No Repeat","ultimate-addons-for-gutenberg")},{value:"repeat",label:Object(o.__)("Repeat","ultimate-addons-for-gutenberg")},{value:"repeat-x",label:Object(o.__)("Repeat-x","ultimate-addons-for-gutenberg")},{value:"repeat-y",label:Object(o.__)("Repeat-y","ultimate-addons-for-gutenberg")}]},setAttributes:u})),p.a.createElement("div",{className:"uag-background-image-size"},p.a.createElement(k.a,{label:Object(o.__)("Size","ultimate-addons-for-gutenberg"),data:g,options:{desktop:[{value:"auto",label:Object(o.__)("Auto","ultimate-addons-for-gutenberg")},{value:"cover",label:Object(o.__)("Cover","ultimate-addons-for-gutenberg")},{value:"contain",label:Object(o.__)("Contain","ultimate-addons-for-gutenberg")},{value:"custom",label:Object(o.__)("Custom","ultimate-addons-for-gutenberg")}]},setAttributes:u}),"custom"===g[l].value&&R&&p.a.createElement(f.a,{label:Object(o.__)("Width","ultimate-addons-for-gutenberg"),data:R,min:0,limitMax:{px:1600,"%":100,em:574},unit:{value:x.value,label:x.label},units:[{name:Object(o.__)("PX","ultimate-addons-for-gutenberg"),unitValue:"px"},{name:Object(o.__)("%","ultimate-addons-for-gutenberg"),unitValue:"%"},{name:Object(o.__)("EM","ultimate-addons-for-gutenberg"),unitValue:"em"}],setAttributes:u}))),i&&C&&(A&&(null===(t=C[l])||void 0===t?void 0:t.value)||!A&&(null==C?void 0:C.value))&&p.a.createElement(p.a.Fragment,null,p.a.createElement("div",{className:"uag-background-image-overlay-type"},p.a.createElement(E.a,{setAttributes:u,label:Object(o.__)("Overlay Type","ultimate-addons-for-gutenberg"),data:{value:i.value,label:i.label},className:"uagb-multi-button-alignment-control",options:[{value:"color",label:Object(o.__)("Color","ultimate-addons-for-gutenberg")},{value:"gradient",label:Object(o.__)("Gradient","ultimate-addons-for-gutenberg")},{value:"none",label:Object(o.__)("None","ultimate-addons-for-gutenberg")}],showIcons:!1})),"color"===i.value&&p.a.createElement("div",{className:"uag-background-image-overlay-color"},p.a.createElement(n.a,{label:Object(o.__)("Image Overlay Color","ultimate-addons-for-gutenberg"),colorValue:b.value,onColorChange:e=>u({[b.label]:e})})),"gradient"===i.value&&p.a.createElement("div",{className:"uag-background-image-overlay-gradient"},p.a.createElement(m.a,{backgroundGradient:e.backgroundGradient,setAttributes:u})))),"gradient"===P.value&&p.a.createElement("div",{className:"uag-background-gradient"},p.a.createElement(m.a,{backgroundGradient:e.backgroundGradient,setAttributes:e.setAttributes})),"video"===P.value&&M.value&&p.a.createElement("div",{className:"uag-background-video"},p.a.createElement(_.a,{onSelectImage:e=>{e&&e.url?e.type&&"video"===e.type&&u({[I.label]:e}):u({[I.label]:null})},backgroundImage:I.value,onRemoveImage:()=>{u({[I.label]:null})},showVideoInput:!0})),"video"===P.value&&I.value&&M.value&&p.a.createElement("div",{className:"uag-background-video-overlay"},i&&I&&I.value&&p.a.createElement(p.a.Fragment,null,p.a.createElement("div",{className:"uag-background-image-overlay-type"},p.a.createElement(E.a,{setAttributes:u,label:Object(o.__)("Overlay Type","ultimate-addons-for-gutenberg"),data:{value:i.value,label:i.label},className:"uagb-multi-button-alignment-control",options:[{value:"color",label:Object(o.__)("Color","ultimate-addons-for-gutenberg")},{value:"gradient",label:Object(o.__)("Gradient","ultimate-addons-for-gutenberg")},{value:"none",label:Object(o.__)("None","ultimate-addons-for-gutenberg")}],showIcons:!1})),"color"===i.value&&p.a.createElement("div",{className:"uag-background-image-overlay-color"},p.a.createElement(n.a,{label:Object(o.__)("Image Overlay Color","ultimate-addons-for-gutenberg"),colorValue:N.value,onColorChange:e=>u({[N.label]:e}),onOpacityChange:S})),"gradient"===i.value&&p.a.createElement("div",{className:"uag-background-image-overlay-gradient"},p.a.createElement(m.a,{backgroundGradient:e.backgroundGradient,setAttributes:u})))));return p.a.createElement("div",{className:"uag-bg-select-control components-base-control"},V)}},495:function(e,a,t){"use strict";t.r(a);var l=t(0),o=t.n(l),n=t(8),r=t(212),u=t(78),b=t(51),i=t(1),g=t(80),c=t(24),d=t(21),s=t(4),m=t(15);function v(){return(v=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var l in t)Object.prototype.hasOwnProperty.call(t,l)&&(e[l]=t[l])}return e}).apply(this,arguments)}const p=e=>{e=e.parentProps;const{attributes:{topPadding:a,bottomPadding:t,leftPadding:p,rightPadding:_,topPaddingTablet:f,bottomPaddingTablet:k,leftPaddingTablet:y,rightPaddingTablet:O,topPaddingMobile:h,bottomPaddingMobile:j,leftPaddingMobile:E,rightPaddingMobile:C,topMargin:T,bottomMargin:M,leftMargin:P,rightMargin:I,topMarginTablet:N,bottomMarginTablet:S,leftMarginTablet:R,rightMarginTablet:x,topMarginMobile:A,bottomMarginMobile:w,leftMarginMobile:z,rightMarginMobile:V,backgroundType:L,backgroundImage:B,backgroundColor:W,backgroundPosition:G,backgroundAttachment:F,backgroundRepeat:D,backgroundSize:U,backgroundImageColor:H,gradientValue:J,borderStyle:X,borderWidth:q,borderRadius:K,borderColor:Q,borderHoverColor:Y,overlayType:Z,mobilePaddingType:$,tabletPaddingType:ee,desktopPaddingType:ae,colWidthMobile:te,colWidthTablet:le,colWidth:oe,paddingLink:ne,marginLink:re,mobileMarginType:ue,tabletMarginType:be,desktopMarginType:ie},setAttributes:ge}=e;return o.a.createElement(l.Suspense,{fallback:Object(n.a)()},o.a.createElement(s.InspectorControls,null,o.a.createElement(g.a,null,o.a.createElement(c.b,c.a.general,o.a.createElement(m.a,{title:Object(i.__)("Layout","ultimate-addons-for-gutenberg")},o.a.createElement(d.a,{label:Object(i.__)("Content Width (%)","ultimate-addons-for-gutenberg"),data:{desktop:{value:oe,label:"colWidth"},tablet:{value:le,label:"colWidthTablet"},mobile:{value:te,label:"colWidthMobile"}},min:0,max:100,displayUnit:!1,setAttributes:ge}))),o.a.createElement(c.b,c.a.style,o.a.createElement(m.a,{title:Object(i.__)("Background","ultimate-addons-for-gutenberg"),initialOpen:!1},o.a.createElement(r.a,v({setAttributes:ge,backgroundGradient:{value:J,label:"gradientValue"},backgroundImageColor:{value:H,label:"backgroundImageColor"},overlayType:{value:Z,label:"overlayType"},backgroundSize:{value:U,label:"backgroundSize"},backgroundRepeat:{value:D,label:"backgroundRepeat"},backgroundAttachment:{value:F,label:"backgroundAttachment"},backgroundPosition:{value:G,label:"backgroundPosition"},backgroundImage:{value:B,label:"backgroundImage"},backgroundColor:{value:W,label:"backgroundColor"},backgroundType:{value:L,label:"backgroundType"},backgroundVideoType:{value:!1}},e))),o.a.createElement(m.a,{title:Object(i.__)("Border","ultimate-addons-for-gutenberg"),initialOpen:!1},o.a.createElement(u.a,{disabledBorderTitle:!0,setAttributes:ge,borderStyle:{value:X,label:"borderStyle",title:Object(i.__)("Style","ultimate-addons-for-gutenberg")},borderWidth:{value:q,label:"borderWidth",title:Object(i.__)("Width","ultimate-addons-for-gutenberg")},borderRadius:{value:K,label:"borderRadius",title:Object(i.__)("Radius","ultimate-addons-for-gutenberg")},borderColor:{value:Q,label:"borderColor",title:Object(i.__)("Color","ultimate-addons-for-gutenberg")},borderHoverColor:{value:Y,label:"borderHoverColor",title:Object(i.__)("Hover Color","ultimate-addons-for-gutenberg")},disableBottomSeparator:!0})),o.a.createElement(m.a,{title:Object(i.__)("Spacing","ultimate-addons-for-gutenberg"),initialOpen:!1},o.a.createElement(b.a,v({},e,{label:Object(i.__)("Padding","ultimate-addons-for-gutenberg"),valueTop:{value:a,label:"topPadding"},valueRight:{value:_,label:"rightPadding"},valueBottom:{value:t,label:"bottomPadding"},valueLeft:{value:p,label:"leftPadding"},valueTopTablet:{value:f,label:"topPaddingTablet"},valueRightTablet:{value:O,label:"rightPaddingTablet"},valueBottomTablet:{value:k,label:"bottomPaddingTablet"},valueLeftTablet:{value:y,label:"leftPaddingTablet"},valueTopMobile:{value:h,label:"topPaddingMobile"},valueRightMobile:{value:C,label:"rightPaddingMobile"},valueBottomMobile:{value:j,label:"bottomPaddingMobile"},valueLeftMobile:{value:E,label:"leftPaddingMobile"},unit:{value:ae,label:"desktopPaddingType"},mUnit:{value:$,label:"mobilePaddingType"},tUnit:{value:ee,label:"tabletPaddingType"},attributes:e.attributes,setAttributes:ge,link:{value:ne,label:"paddingLink"}})),o.a.createElement(b.a,v({},e,{label:Object(i.__)("Margin","ultimate-addons-for-gutenberg"),valueTop:{value:T,label:"topMargin"},valueRight:{value:I,label:"rightMargin"},valueBottom:{value:M,label:"bottomMargin"},valueLeft:{value:P,label:"leftMargin"},valueTopTablet:{value:N,label:"topMarginTablet"},valueRightTablet:{value:x,label:"rightMarginTablet"},valueBottomTablet:{value:S,label:"bottomMarginTablet"},valueLeftTablet:{value:R,label:"leftMarginTablet"},valueTopMobile:{value:A,label:"topMarginMobile"},valueRightMobile:{value:V,label:"rightMarginMobile"},valueBottomMobile:{value:w,label:"bottomMarginMobile"},valueLeftMobile:{value:z,label:"leftMarginMobile"},unit:{value:ie,label:"desktopMarginType"},mUnit:{value:ue,label:"mobileMarginType"},tUnit:{value:be,label:"tabletMarginType"},attributes:e.attributes,setAttributes:ge,link:{value:re,label:"marginLink"}})))),o.a.createElement(c.b,v({},c.a.advance,{parentProps:e})))))};a.default=o.a.memo(p)}}]);