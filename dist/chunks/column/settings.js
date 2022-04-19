(window.webpackJsonp_ultimate_addons_for_gutenberg=window.webpackJsonp_ultimate_addons_for_gutenberg||[]).push([[16],{194:function(e,a,t){"use strict";var l,o=t(1),n=t(6),r=t(4),u=t(0),b=t.n(u),i=t(14),g=t.n(i),c=t(195),d=0,s={injectType:"lazySingletonStyleTag",attributes:{id:"uagb-editor-styles"},insert:"head",singleton:!0},m={};m.locals=c.a.locals||{},m.use=function(){return d++||(l=g()(c.a,s)),m},m.unuse=function(){d>0&&!--d&&(l(),l=null)};var v=m;a.a=e=>{Object(u.useLayoutEffect)(()=>(v.use(),()=>{v.unuse()}),[]);const{onSelectImage:a,backgroundImage:t,onRemoveImage:l,showVideoInput:i,label:g}=e;let c=Object(o.__)("Image","ultimate-addons-for-gutenberg"),d=Object(o.__)("Select Image","ultimate-addons-for-gutenberg"),s=Object(o.__)("Replace Image","ultimate-addons-for-gutenberg"),m=Object(o.__)("Remove Image","ultimate-addons-for-gutenberg"),p=["image"];return i&&(c=Object(o.__)("Video","ultimate-addons-for-gutenberg"),d=Object(o.__)("Select Video","ultimate-addons-for-gutenberg"),s=Object(o.__)("Replace Video","ultimate-addons-for-gutenberg"),m=Object(o.__)("Remove Video","ultimate-addons-for-gutenberg"),p=["video"]),c=g||c,c=!1===g?g:c,b.a.createElement(n.BaseControl,{className:"editor-bg-image-control",id:"uagb-option-selector-"+g,label:c},b.a.createElement("div",{className:"uagb-bg-image"},b.a.createElement(r.MediaUpload,{title:d,onSelect:a,allowedTypes:p,value:t,render:e=>{let{open:a}=e;return b.a.createElement(n.Button,{isSecondary:!0,onClick:a},null!=t&&t.url?s:d)}}),(null==t?void 0:t.url)&&b.a.createElement(n.Button,{className:"uagb-rm-btn",onClick:l,isLink:!0,isDestructive:!0},m),e.help&&b.a.createElement("p",{className:"uag-control-help-notice"},e.help)))}},195:function(e,a,t){"use strict";var l=t(15),o=t.n(l)()((function(e){return e[1]}));o.push([e.i,".uagb-bg-image {\n  border-radius: 2px;\n  background-color: #f0f0f0;\n  min-height: 90px;\n  padding: 8px 0;\n  text-align: center;\n  display: flex;\n  width: 100%;\n  transition: all 0.1s ease-out;\n  box-shadow: 0 0 0 0 #0085ba;\n  margin-top: 10px;\n  align-items: center;\n  justify-content: center; }\n  .uagb-bg-image .components-button {\n    margin: 0;\n    padding: 0; }\n  .uagb-bg-image .uagb-rm-btn {\n    margin-left: 10px; }\n\n.uagb-bg-image .components-button:focus:not(:disabled),\n.uagb-bg-image .components-button.is-secondary:hover:not(:disabled),\n.components-button.is-tertiary:hover:not(:disabled),\n.uagb-bg-image .components-button.is-secondary,\n.components-button.is-tertiary {\n  box-shadow: none; }\n",""]),a.a=o},199:function(e,a,t){"use strict";var l=t(0),o=t.n(l),n=t(6),r=t(10),u=t(64);a.a=e=>{const{label:a,data:t,setAttributes:l,options:b}=e,i=Object(r.a)(),g={};return g.Desktop=o.a.createElement(n.SelectControl,{value:t.desktop.value,onChange:e=>l({[t.desktop.label]:e}),options:b.desktop}),g.Tablet=o.a.createElement(n.SelectControl,{value:t.tablet.value,onChange:e=>l({[t.tablet.label]:e}),options:b.tablet||b.desktop}),g.Mobile=o.a.createElement(n.SelectControl,{value:t.mobile.value,onChange:e=>l({[t.mobile.label]:e}),options:b.mobile||b.desktop}),o.a.createElement("div",{className:"components-base-control uagb-responsive-select-control"},o.a.createElement("div",{className:"uagb-size-type-field-tabs"},o.a.createElement("div",{className:"uagb-control__header"},o.a.createElement(u.a,{label:a,responsive:!0})),g[i]?g[i]:g.Desktop),e.help&&o.a.createElement("p",{className:"uag-control-help-notice"},e.help))}},202:function(e,a,t){"use strict";var l=t(15),o=t.n(l)()((function(e){return e[1]}));o.push([e.i,".uag-bg-select-control .uag-background-type .components-select-control {\n  align-items: center;\n  display: grid;\n  grid-template-columns: 50% 50%; }\n\n.uag-bg-select-control .uag-background-color,\n.uag-bg-select-control .uag-background-image,\n.uag-bg-select-control .uag-background-gradient,\n.uag-bg-select-control .uag-background-opacity,\n.uag-bg-select-control .uag-background-video,\n.uag-bg-select-control .uag-background-video-overlay,\n.uag-bg-select-control .uag-background-video-opacity,\n.uag-bg-select-control .uag-background-image-position,\n.uag-bg-select-control .uag-background-image-attachment,\n.uag-bg-select-control .uag-background-image-repeat,\n.uag-bg-select-control .uag-background-image-size,\n.uag-bg-select-control .uag-background-image-overlay-type,\n.uag-bg-select-control .uag-background-image-overlay-color,\n.uag-bg-select-control .uag-background-image-overlay-gradient,\n.uag-bg-select-control .uagb-responsive-select-control {\n  margin-top: 24px; }\n\n.uag-bg-select-control .uag-background-image > .uagb-responsive-select-control .uagb-size-type-field-tabs {\n  display: block; }\n  .uag-bg-select-control .uag-background-image > .uagb-responsive-select-control .uagb-size-type-field-tabs > .components-base-control {\n    width: 100%; }\n\n.uag-bg-select-control .uagb-size-type-field-tabs {\n  display: flex;\n  justify-content: space-between; }\n  .uag-bg-select-control .uagb-size-type-field-tabs > .components-base-control {\n    width: 45%; }\n\n.uag-bg-select-control .uag-background-image-overlay-type .components-select-control {\n  flex-direction: row;\n  align-items: center; }\n  .uag-bg-select-control .uag-background-image-overlay-type .components-select-control .components-input-control__container {\n    width: 45%;\n    flex: unset; }\n\n.uag-bg-select-control .uag-background-image-size .uagb-responsive-control-inner > .components-base-control {\n  display: block;\n  margin-top: 24px; }\n\n.uag-bg-select-control .uag-background-image-position .uagb-size-type-field-tabs {\n  flex-direction: column; }\n  .uag-bg-select-control .uag-background-image-position .uagb-size-type-field-tabs .components-focal-point-picker-control {\n    width: 100%; }\n",""]),a.a=o},204:function(e,a,t){"use strict";var l,o=t(1),n=t(17),r=t(6),u=t(14),b=t.n(u),i=t(202),g=0,c={injectType:"lazySingletonStyleTag",attributes:{id:"uagb-editor-styles"},insert:"head",singleton:!0},d={};d.locals=i.a.locals||{},d.use=function(){return g++||(l=b()(i.a,c)),d},d.unuse=function(){g>0&&!--g&&(l(),l=null)};var s=d,m=e=>{const{setAttributes:a,backgroundGradient:t}=e;return React.createElement(r.GradientPicker,{value:t.value,onChange:e=>{a({[t.label]:e})}})},v=t(0),p=t.n(v),_=t(194),f=t(80),k=t(199),y=t(10),O=t(64),h=e=>{const{backgroundImage:a,setAttributes:t}=e,l=Object(y.a)(),n=l.toLowerCase(),r=e=>{e&&e.url?e.type&&"image"===e.type?t({[a[n].label]:e}):t({[a[n].label]:null}):t({[a[n].label]:null})},u=()=>{t({[a[n].label]:""})},b={};return b.Desktop=p.a.createElement(_.a,{onSelectImage:r,backgroundImage:a.desktop.value,onRemoveImage:u,label:!1}),b.Tablet=p.a.createElement(_.a,{onSelectImage:r,backgroundImage:a.tablet.value,onRemoveImage:u,label:!1}),b.Mobile=p.a.createElement(_.a,{onSelectImage:r,backgroundImage:a.mobile.value,onRemoveImage:u,label:!1}),p.a.createElement("div",{className:"components-base-control uagb-responsive-select-control"},p.a.createElement("div",{className:"uagb-size-type-field-tabs"},p.a.createElement("div",{className:"uagb-control__header"},p.a.createElement(O.a,{label:Object(o.__)("Image","ultimate-addons-for-gutenberg"),responsive:!0})),b[l]?b[l]:b.Desktop),e.help&&p.a.createElement("p",{className:"uag-control-help-notice"},e.help))},j=e=>{var a,t,l;const{backgroundPosition:n,backgroundImage:u,setAttributes:b}=e,i=Object(y.a)(),g=i.toLowerCase(),c={},d=null===(a=u[g])||void 0===a||null===(t=a.value)||void 0===t?void 0:t.url,s=null===(l=n[g])||void 0===l?void 0:l.value;return c.Desktop=p.a.createElement(r.FocalPointPicker,{url:d,value:s,onChange:e=>{var a;b({[null===(a=n[g])||void 0===a?void 0:a.label]:e})}}),c.Tablet=p.a.createElement(r.FocalPointPicker,{url:d,value:s,onChange:e=>{var a;b({[null===(a=n[g])||void 0===a?void 0:a.label]:e})}}),c.Mobile=p.a.createElement(r.FocalPointPicker,{url:d,value:s,onChange:e=>{var a;b({[null===(a=n[g])||void 0===a?void 0:a.label]:e})}}),p.a.createElement("div",{className:"components-base-control uagb-responsive-select-control"},p.a.createElement("div",{className:"uagb-size-type-field-tabs"},p.a.createElement("div",{className:"uagb-control__header"},p.a.createElement(O.a,{label:Object(o.__)("Image","ultimate-addons-for-gutenberg"),responsive:!0})),c[i]?c[i]:c.Desktop),e.help&&p.a.createElement("p",{className:"uag-control-help-notice"},e.help))};a.a=e=>{var a;Object(v.useLayoutEffect)(()=>(s.use(),()=>{s.unuse()}),[]);const t=Object(y.a)().toLowerCase(),{setAttributes:l,backgroundImageColor:u,overlayType:b,backgroundSize:i,backgroundRepeat:g,backgroundAttachment:c,backgroundPosition:d,backgroundImage:O,backgroundColor:E,backgroundVideoType:C,backgroundType:T,backgroundVideo:M,backgroundVideoColor:P,onOpacityChange:I,backgroundCustomSize:S,backgroundCustomSizeType:N,imageResponsive:R}=e;let x=[];x=[{value:"none",label:Object(o.__)("None","ultimate-addons-for-gutenberg")},{value:"color",label:Object(o.__)("Color","ultimate-addons-for-gutenberg")},{value:"gradient",label:Object(o.__)("Gradient","ultimate-addons-for-gutenberg")},{value:"image",label:Object(o.__)("Image","ultimate-addons-for-gutenberg")}];let A=[{value:"auto",label:Object(o.__)("Auto","ultimate-addons-for-gutenberg")},{value:"cover",label:Object(o.__)("Cover","ultimate-addons-for-gutenberg")},{value:"contain",label:Object(o.__)("Contain","ultimate-addons-for-gutenberg")},{value:"custom",label:Object(o.__)("Custom","ultimate-addons-for-gutenberg")}];S||(A=[{value:"auto",label:Object(o.__)("Auto","ultimate-addons-for-gutenberg")},{value:"cover",label:Object(o.__)("Cover","ultimate-addons-for-gutenberg")},{value:"contain",label:Object(o.__)("Contain","ultimate-addons-for-gutenberg")}]),C.value&&x.push({value:"video",label:Object(o.__)("Video","ultimate-addons-for-gutenberg")});const z=p.a.createElement(p.a.Fragment,null,p.a.createElement("div",{className:"uag-background-type"},p.a.createElement(r.SelectControl,{value:T.value,onChange:e=>l({[T.label]:e}),options:x,label:Object(o.__)("Type","ultimate-addons-for-gutenberg")})),"color"===T.value&&p.a.createElement("div",{className:"uag-background-color"},p.a.createElement(n.a,{label:Object(o.__)("Color","ultimate-addons-for-gutenberg"),colorValue:E.value?E.value:"",onColorChange:e=>l({[E.label]:e})})),"image"===T.value&&p.a.createElement("div",{className:"uag-background-image"},!R&&p.a.createElement(_.a,{onSelectImage:e=>{e&&e.url?e.type&&"image"===e.type&&l({[O.label]:e}):l({[O.label]:null})},backgroundImage:O.value,onRemoveImage:()=>{l({[O.label]:null})}}),!R&&O.value&&p.a.createElement(p.a.Fragment,null,p.a.createElement("div",{className:"uag-background-image-position"},p.a.createElement(r.SelectControl,{label:Object(o.__)("Image Position","ultimate-addons-for-gutenberg"),value:d.value,onChange:e=>l({[d.label]:e}),options:[{value:"left top",label:Object(o.__)("Top Left","ultimate-addons-for-gutenberg")},{value:"center top",label:Object(o.__)("Top Center","ultimate-addons-for-gutenberg")},{value:"right top",label:Object(o.__)("Top Right","ultimate-addons-for-gutenberg")},{value:"center top",label:Object(o.__)("Center Top","ultimate-addons-for-gutenberg")},{value:"center center",label:Object(o.__)("Center Center","ultimate-addons-for-gutenberg")},{value:"center bottom",label:Object(o.__)("Center Bottom","ultimate-addons-for-gutenberg")},{value:"left bottom",label:Object(o.__)("Bottom Left","ultimate-addons-for-gutenberg")},{value:"center bottom",label:Object(o.__)("Bottom Center","ultimate-addons-for-gutenberg")},{value:"right bottom",label:Object(o.__)("Bottom Right","ultimate-addons-for-gutenberg")}]})),p.a.createElement("div",{className:"uag-background-image-attachment"},p.a.createElement(r.SelectControl,{label:Object(o.__)("Attachment","ultimate-addons-for-gutenberg"),value:c.value,onChange:e=>l({[c.label]:e}),options:[{value:"fixed",label:Object(o.__)("Fixed","ultimate-addons-for-gutenberg")},{value:"scroll",label:Object(o.__)("Scroll","ultimate-addons-for-gutenberg")}]})),p.a.createElement("div",{className:"uag-background-image-repeat"},p.a.createElement(r.SelectControl,{label:Object(o.__)("Repeat","ultimate-addons-for-gutenberg"),value:g.value,onChange:e=>l({[g.label]:e}),options:[{value:"no-repeat",label:Object(o.__)("No Repeat","ultimate-addons-for-gutenberg")},{value:"repeat",label:Object(o.__)("Repeat","ultimate-addons-for-gutenberg")},{value:"repeat-x",label:Object(o.__)("Repeat-x","ultimate-addons-for-gutenberg")},{value:"repeat-y",label:Object(o.__)("Repeat-y","ultimate-addons-for-gutenberg")}]})),p.a.createElement("div",{className:"uag-background-image-size"},p.a.createElement(r.SelectControl,{label:Object(o.__)("Size","ultimate-addons-for-gutenberg"),value:i.value,onChange:e=>l({[i.label]:e}),options:A}),"custom"===i.value&&S&&p.a.createElement(f.a,{label:Object(o.__)("Width","ultimate-addons-for-gutenberg"),data:{desktop:{value:S.desktop.value,label:S.desktop.label},tablet:{value:S.tablet.value,label:S.tablet.label},mobile:{value:S.mobile.value,label:S.mobile.label}},min:0,limitMax:{px:1600,"%":100,em:574},unit:{value:N.value,label:N.label},units:[{name:Object(o.__)("PX","ultimate-addons-for-gutenberg"),unitValue:"px"},{name:Object(o.__)("%","ultimate-addons-for-gutenberg"),unitValue:"%"},{name:Object(o.__)("EM","ultimate-addons-for-gutenberg"),unitValue:"em"}],setAttributes:l}))),R&&O&&p.a.createElement(h,{backgroundImage:O,setAttributes:l}),R&&O[t]&&(null===(a=O[t])||void 0===a?void 0:a.value)&&p.a.createElement(p.a.Fragment,null,p.a.createElement("div",{className:"uag-background-image-position"},p.a.createElement(j,{backgroundPosition:d,setAttributes:l,backgroundImage:O})),p.a.createElement("div",{className:"uag-background-image-attachment"},p.a.createElement(k.a,{label:Object(o.__)("Attachment","ultimate-addons-for-gutenberg"),data:c,options:{desktop:[{value:"fixed",label:Object(o.__)("Fixed","ultimate-addons-for-gutenberg")},{value:"scroll",label:Object(o.__)("Scroll","ultimate-addons-for-gutenberg")}]},setAttributes:l})),p.a.createElement("div",{className:"uag-background-image-repeat"},p.a.createElement(k.a,{label:Object(o.__)("Repeat","ultimate-addons-for-gutenberg"),data:g,options:{desktop:[{value:"no-repeat",label:Object(o.__)("No Repeat","ultimate-addons-for-gutenberg")},{value:"repeat",label:Object(o.__)("Repeat","ultimate-addons-for-gutenberg")},{value:"repeat-x",label:Object(o.__)("Repeat-x","ultimate-addons-for-gutenberg")},{value:"repeat-y",label:Object(o.__)("Repeat-y","ultimate-addons-for-gutenberg")}]},setAttributes:l})),p.a.createElement("div",{className:"uag-background-image-size"},p.a.createElement(k.a,{label:Object(o.__)("Size","ultimate-addons-for-gutenberg"),data:i,options:{desktop:[{value:"auto",label:Object(o.__)("Auto","ultimate-addons-for-gutenberg")},{value:"cover",label:Object(o.__)("Cover","ultimate-addons-for-gutenberg")},{value:"contain",label:Object(o.__)("Contain","ultimate-addons-for-gutenberg")},{value:"custom",label:Object(o.__)("Custom","ultimate-addons-for-gutenberg")}]},setAttributes:l}),"custom"===i[t].value&&S&&p.a.createElement(f.a,{label:Object(o.__)("Width","ultimate-addons-for-gutenberg"),data:S,min:0,limitMax:{px:1600,"%":100,em:574},unit:{value:N.value,label:N.label},units:[{name:Object(o.__)("PX","ultimate-addons-for-gutenberg"),unitValue:"px"},{name:Object(o.__)("%","ultimate-addons-for-gutenberg"),unitValue:"%"},{name:Object(o.__)("EM","ultimate-addons-for-gutenberg"),unitValue:"em"}],setAttributes:l}))),b&&O&&p.a.createElement(p.a.Fragment,null,p.a.createElement("div",{className:"uag-background-image-overlay-type"},p.a.createElement(r.SelectControl,{label:Object(o.__)("Overlay Type","ultimate-addons-for-gutenberg"),value:b.value,onChange:e=>l({[b.label]:e}),options:[{value:"color",label:Object(o.__)("Color","ultimate-addons-for-gutenberg")},{value:"gradient",label:Object(o.__)("Gradient","ultimate-addons-for-gutenberg")},{value:"none",label:Object(o.__)("None","ultimate-addons-for-gutenberg")}]})),"color"===b.value&&p.a.createElement("div",{className:"uag-background-image-overlay-color"},p.a.createElement(n.a,{label:Object(o.__)("Image Overlay Color","ultimate-addons-for-gutenberg"),colorValue:u.value,onColorChange:e=>l({[u.label]:e})})),"gradient"===b.value&&p.a.createElement("div",{className:"uag-background-image-overlay-gradient"},p.a.createElement(m,{backgroundGradient:e.backgroundGradient,setAttributes:l})))),"gradient"===T.value&&p.a.createElement("div",{className:"uag-background-gradient"},p.a.createElement(m,{backgroundGradient:e.backgroundGradient,setAttributes:e.setAttributes})),"video"===T.value&&C.value&&p.a.createElement("div",{className:"uag-background-video"},p.a.createElement(_.a,{onSelectImage:e=>{e&&e.url?e.type&&"video"===e.type&&l({[M.label]:e}):l({[M.label]:null})},backgroundImage:M.value,onRemoveImage:()=>{l({[M.label]:null})},showVideoInput:!0})),"video"===T.value&&M.value&&C.value&&p.a.createElement("div",{className:"uag-background-video-overlay"},p.a.createElement(n.a,{label:Object(o.__)("Video Overlay Color","ultimate-addons-for-gutenberg"),colorValue:P.value,onColorChange:e=>l({[P.label]:e}),onOpacityChange:I})));return p.a.createElement("div",{className:"uag-bg-select-control components-base-control"},z)}},485:function(e,a,t){"use strict";t.r(a);var l=t(0),o=t.n(l),n=t(8),r=t(204),u=t(77),b=t(50),i=t(1),g=t(79),c=t(23),d=t(80),s=t(4),m=t(16);function v(){return(v=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var l in t)Object.prototype.hasOwnProperty.call(t,l)&&(e[l]=t[l])}return e}).apply(this,arguments)}const p=e=>{e=e.parentProps;const{attributes:{topPadding:a,bottomPadding:t,leftPadding:p,rightPadding:_,topPaddingTablet:f,bottomPaddingTablet:k,leftPaddingTablet:y,rightPaddingTablet:O,topPaddingMobile:h,bottomPaddingMobile:j,leftPaddingMobile:E,rightPaddingMobile:C,topMargin:T,bottomMargin:M,leftMargin:P,rightMargin:I,topMarginTablet:S,bottomMarginTablet:N,leftMarginTablet:R,rightMarginTablet:x,topMarginMobile:A,bottomMarginMobile:z,leftMarginMobile:V,rightMarginMobile:w,backgroundType:L,backgroundImage:B,backgroundColor:W,backgroundPosition:F,backgroundAttachment:G,backgroundRepeat:D,backgroundSize:U,backgroundImageColor:H,gradientValue:J,borderStyle:X,borderWidth:q,borderRadius:K,borderColor:Q,borderHoverColor:Y,overlayType:Z,mobilePaddingType:$,tabletPaddingType:ee,desktopPaddingType:ae,colWidthMobile:te,colWidthTablet:le,colWidth:oe,paddingLink:ne,marginLink:re,mobileMarginType:ue,tabletMarginType:be,desktopMarginType:ie},setAttributes:ge}=e;return o.a.createElement(l.Suspense,{fallback:Object(n.a)()},o.a.createElement(s.InspectorControls,null,o.a.createElement(g.a,null,o.a.createElement(c.b,c.a.general,o.a.createElement(m.a,{title:Object(i.__)("Layout","ultimate-addons-for-gutenberg")},o.a.createElement(d.a,{label:Object(i.__)("Content Width (%)","ultimate-addons-for-gutenberg"),data:{desktop:{value:oe,label:"colWidth"},tablet:{value:le,label:"colWidthTablet"},mobile:{value:te,label:"colWidthMobile"}},min:0,max:100,displayUnit:!1,setAttributes:ge}))),o.a.createElement(c.b,c.a.style,o.a.createElement(m.a,{title:Object(i.__)("Background","ultimate-addons-for-gutenberg"),initialOpen:!1},o.a.createElement(r.a,v({setAttributes:ge,backgroundGradient:{value:J,label:"gradientValue"},backgroundImageColor:{value:H,label:"backgroundImageColor"},overlayType:{value:Z,label:"overlayType"},backgroundSize:{value:U,label:"backgroundSize"},backgroundRepeat:{value:D,label:"backgroundRepeat"},backgroundAttachment:{value:G,label:"backgroundAttachment"},backgroundPosition:{value:F,label:"backgroundPosition"},backgroundImage:{value:B,label:"backgroundImage"},backgroundColor:{value:W,label:"backgroundColor"},backgroundType:{value:L,label:"backgroundType"},backgroundVideoType:{value:!1}},e))),o.a.createElement(m.a,{title:Object(i.__)("Border","ultimate-addons-for-gutenberg"),initialOpen:!1},o.a.createElement(u.a,{setAttributes:ge,borderStyle:{value:X,label:"borderStyle",title:Object(i.__)("Style","ultimate-addons-for-gutenberg")},borderWidth:{value:q,label:"borderWidth",title:Object(i.__)("Width","ultimate-addons-for-gutenberg")},borderRadius:{value:K,label:"borderRadius",title:Object(i.__)("Radius","ultimate-addons-for-gutenberg")},borderColor:{value:Q,label:"borderColor",title:Object(i.__)("Color","ultimate-addons-for-gutenberg")},borderHoverColor:{value:Y,label:"borderHoverColor",title:Object(i.__)("Hover Color","ultimate-addons-for-gutenberg")},disableBottomSeparator:!0})),o.a.createElement(m.a,{title:Object(i.__)("Spacing","ultimate-addons-for-gutenberg"),initialOpen:!1},o.a.createElement(b.a,v({},e,{label:Object(i.__)("Padding","ultimate-addons-for-gutenberg"),valueTop:{value:a,label:"topPadding"},valueRight:{value:_,label:"rightPadding"},valueBottom:{value:t,label:"bottomPadding"},valueLeft:{value:p,label:"leftPadding"},valueTopTablet:{value:f,label:"topPaddingTablet"},valueRightTablet:{value:O,label:"rightPaddingTablet"},valueBottomTablet:{value:k,label:"bottomPaddingTablet"},valueLeftTablet:{value:y,label:"leftPaddingTablet"},valueTopMobile:{value:h,label:"topPaddingMobile"},valueRightMobile:{value:C,label:"rightPaddingMobile"},valueBottomMobile:{value:j,label:"bottomPaddingMobile"},valueLeftMobile:{value:E,label:"leftPaddingMobile"},unit:{value:ae,label:"desktopPaddingType"},mUnit:{value:$,label:"mobilePaddingType"},tUnit:{value:ee,label:"tabletPaddingType"},attributes:e.attributes,setAttributes:ge,link:{value:ne,label:"paddingLink"}})),o.a.createElement(b.a,v({},e,{label:Object(i.__)("Margin","ultimate-addons-for-gutenberg"),valueTop:{value:T,label:"topMargin"},valueRight:{value:I,label:"rightMargin"},valueBottom:{value:M,label:"bottomMargin"},valueLeft:{value:P,label:"leftMargin"},valueTopTablet:{value:S,label:"topMarginTablet"},valueRightTablet:{value:x,label:"rightMarginTablet"},valueBottomTablet:{value:N,label:"bottomMarginTablet"},valueLeftTablet:{value:R,label:"leftMarginTablet"},valueTopMobile:{value:A,label:"topMarginMobile"},valueRightMobile:{value:w,label:"rightMarginMobile"},valueBottomMobile:{value:z,label:"bottomMarginMobile"},valueLeftMobile:{value:V,label:"leftMarginMobile"},unit:{value:ie,label:"desktopMarginType"},mUnit:{value:ue,label:"mobileMarginType"},tUnit:{value:be,label:"tabletMarginType"},attributes:e.attributes,setAttributes:ge,link:{value:re,label:"marginLink"}})))),o.a.createElement(c.b,v({},c.a.advance,{parentProps:e})))))};a.default=o.a.memo(p)}}]);