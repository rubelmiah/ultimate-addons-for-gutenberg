(window.webpackJsonp_ultimate_addons_for_gutenberg=window.webpackJsonp_ultimate_addons_for_gutenberg||[]).push([[68],{205:function(e,t,a){"use strict";var l=a(1),o=a(7),i=a(5),n=a(0),r=a.n(n),u=a(8);t.a=e=>{const{onSelectImage:t,backgroundImage:a,onRemoveImage:n,showVideoInput:b,label:g,disableRemove:s=!1,allow:c=["image"]}=e;let d,m=Object(l.__)("Image","ultimate-addons-for-gutenberg"),v=Object(l.__)("Select Image","ultimate-addons-for-gutenberg"),p=Object(l.__)("Change Image","ultimate-addons-for-gutenberg"),h=["image"];b&&(m=Object(l.__)("Video","ultimate-addons-for-gutenberg"),v=Object(l.__)("Select Video","ultimate-addons-for-gutenberg"),p=Object(l.__)("Change Video","ultimate-addons-for-gutenberg"),h=["video"],d=u.a.video_placeholder),m=g||m,m=!1===g?g:m,"Lottie Animation"===g&&(v=Object(l.__)("Select Lottie Animation","ultimate-addons-for-gutenberg"),p=Object(l.__)("Change Lottie Animation","ultimate-addons-for-gutenberg"),h=c,d=u.a.lottie);const _=e=>r.a.createElement("div",{className:"spectra-media-control__button spectra-media-control__button--"+e},u.a[e]);return r.a.createElement(o.BaseControl,{className:"spectra-media-control",id:"uagb-option-selector-"+g,label:m},r.a.createElement("div",{className:"spectra-media-control__wrapper",style:{backgroundImage:!d&&(null==a?void 0:a.url)&&`url("${(e=>{let t=e;switch(/(?:\.([^.]+))?$/.exec(String(t))[1]){case"json":t="";break;case"avi":case"mpg":case"mp4":case"m4v":case"mov":case"ogv":case"vtt":case"wmv":case"3gp":case"3g2":t=""}return t})(null==a?void 0:a.url)}")`}},d&&(null==a?void 0:a.url)&&r.a.createElement("div",{className:"spectra-media-control__icon"},d),r.a.createElement(i.MediaUpload,{title:v,onSelect:t,allowedTypes:h,value:a,render:e=>{let{open:t}=e;return(e=>{const t=null!=a&&a.url?"replace":"add";return r.a.createElement("button",{className:"spectra-media-control__clickable spectra-media-control__clickable--"+t,onClick:e},"add"===t?_(t):r.a.createElement("div",{className:"uag-control-label"},p))})(t)}}),!s&&(null==a?void 0:a.url)&&r.a.createElement("button",{className:"spectra-media-control__clickable spectra-media-control__clickable--close",onClick:n},_("close"))),e.help&&r.a.createElement("p",{className:"uag-control-help-notice"},e.help))}},208:function(e,t,a){"use strict";var l=a(0),o=a.n(l),i=a(7),n=a(11),r=a(68);t.a=e=>{const{label:t,data:a,setAttributes:l,options:u}=e,b=Object(n.a)(),g={};return g.Desktop=o.a.createElement(i.SelectControl,{value:a.desktop.value,onChange:e=>l({[a.desktop.label]:e}),options:u.desktop}),g.Tablet=o.a.createElement(i.SelectControl,{value:a.tablet.value,onChange:e=>l({[a.tablet.label]:e}),options:u.tablet||u.desktop}),g.Mobile=o.a.createElement(i.SelectControl,{value:a.mobile.value,onChange:e=>l({[a.mobile.label]:e}),options:u.mobile||u.desktop}),o.a.createElement("div",{className:"components-base-control uagb-responsive-select-control"},o.a.createElement("div",{className:"uagb-size-type-field-tabs"},o.a.createElement("div",{className:"uagb-control__header"},o.a.createElement(r.a,{label:t,responsive:!0})),g[b]?g[b]:g.Desktop),e.help&&o.a.createElement("p",{className:"uag-control-help-notice"},e.help))}},209:function(e,t,a){"use strict";var l=a(1),o=a(20),i=a(18),n=a(7),r=a(2),u=a(21),b=a(0),g=a.n(b),s=a(9),c=a(24);t.a=e=>{const[t,a]=Object(r.useState)(!1);Object(b.useLayoutEffect)(()=>{window.addEventListener("click",(function(e){const t=document.querySelector(".uagb-box-shadow-advanced"),l=document.querySelector(".uag-box-shadow-button");var o,i,n,r;t&&(null!=t&&t.contains(e.target)||null!=l&&l.contains(e.target)||null!==(o=e.target)&&void 0!==o&&null!==(i=o.classList)&&void 0!==i&&i.contains("uagb-advanced-color-indicate")||null!==(n=e.target)&&void 0!==n&&null!==(r=n.parentElement)&&void 0!==r&&r.closest(".uagb-popover-color")||a(!1))}))},[]);const{setAttributes:d,boxShadowColor:m,boxShadowHOffset:v,boxShadowVOffset:p,boxShadowBlur:h,boxShadowSpread:_,boxShadowPosition:f,label:M=Object(l.__)("Box Shadow","ultimate-addons-for-gutenberg"),popup:O=!1}=e;let T;const j=t?"active":"",S=g.a.createElement(g.a.Fragment,null,g.a.createElement(i.a,{label:m.title,colorValue:m.value,onColorChange:e=>d({[m.label]:e})}),g.a.createElement(o.a,{label:v.title,value:v.value,min:0,max:100,displayUnit:!1,setAttributes:d,data:{value:v.value,label:v.label},onChange:!1}),g.a.createElement(o.a,{label:p.title,value:p.value,min:0,max:100,displayUnit:!1,setAttributes:d,data:{value:p.value,label:p.label},onChange:!1}),g.a.createElement(o.a,{label:h.title,value:h.value,min:0,max:100,displayUnit:!1,setAttributes:d,data:{value:h.value,label:h.label},onChange:!1}),g.a.createElement(o.a,{label:_.title,value:_.value,min:-100,max:100,displayUnit:!1,setAttributes:d,data:{value:_.value,label:_.label},onChange:!1}),g.a.createElement(u.a,{setAttributes:d,label:f.title,data:{value:f.value,label:f.label},options:[{value:"outset",label:Object(l.__)("Outset","ultimate-addons-for-gutenberg"),tooltip:Object(l.__)("Outset","ultimate-addons-for-gutenberg")},{value:"inset",label:Object(l.__)("Inset","ultimate-addons-for-gutenberg"),tooltip:Object(l.__)("Inset (10px)","ultimate-addons-for-gutenberg")}],showIcons:!1}));t&&(T=g.a.createElement("div",{className:"uagb-box-shadow-advanced spectra-control-popup"},S));const E=g.a.createElement("div",{className:"spectra-control-popup__options--action-wrapper"},g.a.createElement("span",{className:"uag-control-label"},M),g.a.createElement(n.Button,{className:"uag-box-shadow-button spectra-control-popup__options--action-button","aria-pressed":t,onClick:()=>{if(a(!t),!t){var e;const{getSelectedBlock:t}=Object(s.select)("core/block-editor"),a=null===(e=t())||void 0===e?void 0:e.name,l=Object(c.a)("uagSettingState"),o={...l,[a]:{...null==l?void 0:l[a],selectedSetting:".uag-box-shadow-options"}},i=Object(c.a)();i&&i.setItem("uagSettingState",JSON.stringify(o))}}},g.a.createElement(n.Dashicon,{icon:"edit"})));return O?g.a.createElement("div",{className:"components-base-control uag-box-shadow-options spectra-control-popup__options "+j},E,t&&T):g.a.createElement(g.a.Fragment,null,S)}},227:function(e,t,a){"use strict";a.d(t,"e",(function(){return o})),a.d(t,"d",(function(){return i})),a.d(t,"b",(function(){return n})),a.d(t,"a",(function(){return r})),a.d(t,"c",(function(){return u}));var l=a(199);const o=(e,t)=>{var a;const{alt:l,id:o,link:i,caption:n,url:r}=e,u={alt:l,id:o,link:i,caption:n,url:r};var b,g,s,c,d,m,v,p,h;return null!=e&&e.sizes&&null!=e&&e.sizes[t]?{...u,width:null==e||null===(b=e.sizes[t])||void 0===b?void 0:b.width,height:null==e||null===(g=e.sizes[t])||void 0===g?void 0:g.height,url:null==e||null===(s=e.sizes[t])||void 0===s?void 0:s.url}:null!=e&&e.media_details&&null!=e&&null!==(a=e.media_details)&&void 0!==a&&a.sizes[t]?{...u,width:null==e||null===(c=e.media_details)||void 0===c||null===(d=c.sizes[t])||void 0===d?void 0:d.width,height:null==e||null===(m=e.media_details)||void 0===m||null===(v=m.sizes[t])||void 0===v?void 0:v.height,url:null==e||null===(p=e.media_details)||void 0===p||null===(h=p.sizes[t])||void 0===h?void 0:h.source_url}:{...u,url:null==e?void 0:e.url}},i=(e,t)=>!e&&Object(l.isBlobURL)(t),n=(e,t)=>t&&!e&&!Object(l.isBlobURL)(t),r=(e,t)=>e.hasOwnProperty("sizes")||e.hasOwnProperty("url")||e.hasOwnProperty("media_details")||e.hasOwnProperty("source_url")||void 0!==e[t],u=e=>{var t,a;return((null===(t=wp)||void 0===t||null===(a=t.media)||void 0===a?void 0:a.attachment(e))||{}).destroyed}},321:function(e,t,a){"use strict";var l=a(16),o=a.n(l)()((function(e){return e[1]}));o.push([e.i,".block-editor-image-size-control {\n  margin-bottom: 1em; }\n  .block-editor-image-size-control .block-editor-image-size-control__row {\n    display: flex;\n    justify-content: space-between;\n    margin-bottom: 10px; }\n    .block-editor-image-size-control .block-editor-image-size-control__row .block-editor-image-size-control__width,\n    .block-editor-image-size-control .block-editor-image-size-control__row .block-editor-image-size-control__height {\n      margin-bottom: 0.5em; }\n      .block-editor-image-size-control .block-editor-image-size-control__row .block-editor-image-size-control__width input,\n      .block-editor-image-size-control .block-editor-image-size-control__row .block-editor-image-size-control__height input {\n        line-height: 1.25; }\n    .block-editor-image-size-control .block-editor-image-size-control__row .block-editor-image-size-control__width {\n      margin-right: 5px; }\n    .block-editor-image-size-control .block-editor-image-size-control__row .block-editor-image-size-control__height {\n      margin-left: 5px; }\n",""]),t.a=o},513:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return N}));var l,o=a(0),i=a.n(o),n=a(10),r=a(37),u=a(14),b=a(81),g=a(28),s=a(18),c=a(36),d=a(20),m=a(205),v=a(209),p=a(9),h=a(1),_=a(21),f=a(51),M=a(11),O=a(5),T=a(7),j=a(13),S=a(208),E=a(15),y=a.n(E),w=a(321),z=0,C={injectType:"lazySingletonStyleTag",attributes:{id:"uagb-editor-styles"},insert:"head",singleton:!0},k={};k.locals=w.a.locals||{},k.use=function(){return z++||(l=y()(w.a,C)),k},k.unuse=function(){z>0&&!--z&&(l(),l=null)};var L=k,B=a(2),x=a(68);function F(e){let{imageWidth:t,imageHeight:a,imageSizeOptions:l=[],isResizable:n=!0,sizeSlug:r,sizeSlugTablet:u,sizeSlugMobile:b,width:g,widthTablet:s,widthMobile:c,height:d,heightTablet:m,heightMobile:v,setAttributes:p,onChange:_}=e;Object(o.useLayoutEffect)(()=>(L.use(),()=>{L.unuse()}),[]);const f=Object(M.a)(),{currentHeight:O,currentWidth:j,updateDimension:E}=function(e,t,a,l,o){const[i,n]=Object(B.useState)(t||l||""),[r,u]=Object(B.useState)(e||a||"");return Object(B.useEffect)(()=>{void 0===t&&void 0!==l&&n(l),void 0===e&&void 0!==a&&u(a)},[l,a]),Object(B.useEffect)(()=>{void 0!==t&&Number.parseInt(t)!==Number.parseInt(i)&&n(t),void 0!==e&&Number.parseInt(e)!==Number.parseInt(r)&&u(e)},[t,e]),{currentHeight:r,currentWidth:i,updateDimension:(e,t)=>{"width"===e?n(t):u(t),o({[e]:""===t?void 0:parseInt(t,10)})},updateDimensions:(e,t)=>{u(e||a||""),u(t||l||""),o({height:e,width:t})}}}(d,g,a,t,_),y={};return y.Desktop=i.a.createElement(i.a.Fragment,null,i.a.createElement(T.TextControl,{type:"number",className:"block-editor-image-size-control__width",label:Object(h.__)("Width"),value:j,min:1,onChange:e=>E("width",e)}),i.a.createElement(T.TextControl,{type:"number",className:"block-editor-image-size-control__height",label:Object(h.__)("Height"),value:O,min:1,onChange:e=>E("height",e)})),y.Tablet=i.a.createElement(i.a.Fragment,null,i.a.createElement(T.TextControl,{type:"number",className:"block-editor-image-size-control__width",label:Object(h.__)("Width"),value:s,min:1,onChange:e=>p({widthTablet:e})}),i.a.createElement(T.TextControl,{type:"number",className:"block-editor-image-size-control__height",label:Object(h.__)("Height"),value:m,min:1,onChange:e=>p({heightTablet:e})})),y.Mobile=i.a.createElement(i.a.Fragment,null,i.a.createElement(T.TextControl,{type:"number",className:"block-editor-image-size-control__width",label:Object(h.__)("Width"),value:c,min:1,onChange:e=>p({widthMobile:e})}),i.a.createElement(T.TextControl,{type:"number",className:"block-editor-image-size-control__height",label:Object(h.__)("Height"),value:v,min:1,onChange:e=>p({heightMobile:e})})),i.a.createElement(i.a.Fragment,null,0!==l.length&&i.a.createElement(S.a,{label:Object(h.__)("Image Size","ultimate-addons-for-gutenberg"),options:{desktop:l,tablet:l,mobile:l},data:{desktop:{value:r,label:"sizeSlug"},tablet:{value:u,label:"sizeSlugTablet"},mobile:{value:b,label:"sizeSlugMobile"}},setAttributes:p}),n&&i.a.createElement("div",{className:"components-base-control block-editor-image-size-control"},i.a.createElement("div",{className:"uagb-size-type-field-tabs"},i.a.createElement("div",{className:"uagb-control__header"},i.a.createElement(x.a,{label:Object(h.__)("Image Dimensions"),responsive:!0})),i.a.createElement("div",{className:"block-editor-image-size-control__row"},y[f]))))}var R=a(79),H=a(200),A=a(17),I=a(227);function U(){return(U=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var l in a)Object.prototype.hasOwnProperty.call(a,l)&&(e[l]=a[l])}return e}).apply(this,arguments)}function N(e){const t=Object(M.a)();e=e.parentProps;const{attributes:a,setAttributes:l,context:S,isSelected:E,clientId:y}=e,{layout:w,id:z,url:C,urlTablet:k,urlMobile:L,width:B,widthTablet:x,widthMobile:N,height:P,heightTablet:D,heightMobile:W,align:V,alt:G,sizeSlug:J,sizeSlugTablet:q,sizeSlugMobile:$,enableCaption:X,naturalWidth:Y,naturalHeight:Z,imageTopMargin:K,imageRightMargin:Q,imageLeftMargin:ee,imageBottomMargin:te,imageTopMarginTablet:ae,imageRightMarginTablet:le,imageLeftMarginTablet:oe,imageBottomMarginTablet:ie,imageTopMarginMobile:ne,imageRightMarginMobile:re,imageLeftMarginMobile:ue,imageBottomMarginMobile:be,imageMarginUnit:ge,imageMarginUnitTablet:se,imageMarginUnitMobile:ce,imageMarginLink:de,captionShowOn:me,captionLoadGoogleFonts:ve,captionAlign:pe,captionFontFamily:he,captionFontWeight:_e,captionFontStyle:fe,captionFontSize:Me,captionColor:Oe,captionTransform:Te,captionDecoration:je,captionFontSizeType:Se,captionFontSizeMobile:Ee,captionFontSizeTablet:ye,captionLineHeight:we,captionLineHeightType:ze,captionLineHeightMobile:Ce,captionLineHeightTablet:ke,captionTopMargin:Le,captionRightMargin:Be,captionLeftMargin:xe,captionBottomMargin:Fe,captionTopMarginTablet:Re,captionRightMarginTablet:He,captionLeftMarginTablet:Ae,captionBottomMarginTablet:Ie,captionTopMarginMobile:Ue,captionRightMarginMobile:Ne,captionLeftMarginMobile:Pe,captionBottomMarginMobile:De,captionMarginUnit:We,captionMarginUnitTablet:Ve,captionMarginUnitMobile:Ge,captionMarginLink:Je,headingTag:qe,headingShowOn:$e,headingLoadGoogleFonts:Xe,headingFontFamily:Ye,headingFontWeight:Ze,headingFontStyle:Ke,headingFontSize:Qe,headingColor:et,headingTransform:tt,headingDecoration:at,headingFontSizeType:lt,headingFontSizeMobile:ot,headingFontSizeTablet:it,headingLineHeight:nt,headingLineHeightType:rt,headingLineHeightMobile:ut,headingLineHeightTablet:bt,headingTopMargin:gt,headingRightMargin:st,headingLeftMargin:ct,headingBottomMargin:dt,headingTopMarginTablet:mt,headingRightMarginTablet:vt,headingLeftMarginTablet:pt,headingBottomMarginTablet:ht,headingTopMarginMobile:_t,headingRightMarginMobile:ft,headingLeftMarginMobile:Mt,headingBottomMarginMobile:Ot,headingMarginUnit:Tt,headingMarginUnitTablet:jt,headingMarginUnitMobile:St,headingMarginLink:Et,overlayPositionFromEdge:yt,overlayPositionFromEdgeUnit:wt,overlayContentPosition:zt,overlayBackground:Ct,overlayOpacity:kt,overlayHoverOpacity:Lt,seperatorShowOn:Bt,seperatorStyle:xt,seperatorWidth:Ft,separatorWidthType:Rt,seperatorThickness:Ht,seperatorThicknessUnit:At,seperatorPosition:It,seperatorColor:Ut,seperatorTopMargin:Nt,seperatorRightMargin:Pt,seperatorLeftMargin:Dt,seperatorBottomMargin:Wt,seperatorTopMarginTablet:Vt,seperatorRightMarginTablet:Gt,seperatorLeftMarginTablet:Jt,seperatorBottomMarginTablet:qt,seperatorTopMarginMobile:$t,seperatorRightMarginMobile:Xt,seperatorLeftMarginMobile:Yt,seperatorBottomMarginMobile:Zt,seperatorMarginUnit:Kt,seperatorMarginUnitTablet:Qt,seperatorMarginUnitMobile:ea,seperatorMarginLink:ta,imageHoverEffect:aa,imageBoxShadowColor:la,imageBoxShadowHOffset:oa,imageBoxShadowVOffset:ia,imageBoxShadowBlur:na,imageBoxShadowSpread:ra,imageBoxShadowPosition:ua,maskShape:ba,maskCustomShape:ga,maskSize:sa,maskPosition:ca,maskRepeat:da}=a,{imageSizes:ma}=Object(p.useSelect)(e=>{const{getSettings:t}=e(O.store),{imageSizes:a}=t();return{imageSizes:a}},[y]),{image:va}=Object(p.useSelect)(e=>{const{getMedia:t}=e(H.store);return{image:z&&E?t(z):null}},[z,E]),{imageDefaultSize:pa}=Object(p.useSelect)(e=>{const{getSettings:t}=e(O.store),{imageDefaultSize:a}=t();return{imageDefaultSize:a}},[]);Object(o.useEffect)(()=>{J&&("Tablet"===t?function(e){var t;const a=null==va||null===(t=va.media_details)||void 0===t?void 0:t.sizes[e];if(!a||(null==a?void 0:a.source_url)===k)return null;l({urlTablet:null==a?void 0:a.source_url,widthTablet:null==a?void 0:a.width,heightTablet:null==a?void 0:a.height,sizeSlugTablet:e})}(q):"Mobile"===t?function(e){var t;const a=null==va||null===(t=va.media_details)||void 0===t?void 0:t.sizes[e];if(!a||(null==a?void 0:a.source_url)===L)return null;l({urlMobile:null==a?void 0:a.source_url,widthMobile:null==a?void 0:a.width,heightMobile:null==a?void 0:a.height,sizeSlugMobile:e})}($):Ta(J))},[J,q,$]);const{allowResize:ha=!0}=S,_a=Object(u.useViewportMatch)("medium"),fa=["wide","full"].includes(V),Ma=ha&&!(fa&&_a),Oa=(null==va?void 0:va.media_details)&&ma.reduce((e,t)=>{var a;return null!=va&&null!==(a=va.media_details)&&void 0!==a&&a.sizes[t.slug]&&e.push({value:t.slug,label:t.name}),e},[]);function Ta(e){var t;const a=null==va||null===(t=va.media_details)||void 0===t?void 0:t.sizes[e];if(!a||(null==a?void 0:a.source_url)===C)return null;l({url:null==a?void 0:a.source_url,width:null==a?void 0:a.width,height:null==a?void 0:a.height,sizeSlug:e})}const ja=i.a.createElement(A.a,{title:Object(h.__)("Image","ultimate-addons-for-gutenberg"),initialOpen:!0},i.a.createElement(m.a,{label:" ",onSelectImage:e=>{if(!e||!e.url)return void l({url:void 0,alt:void 0,id:void 0,title:void 0,caption:void 0});const t=Object(I.e)(e,pa);l(t)},backgroundImage:{url:C},onRemoveImage:()=>{l({url:void 0,urlTablet:void 0,urlMobile:void 0,alt:void 0,id:void 0,title:void 0,caption:void 0,width:void 0,widthTablet:void 0,widthMobile:void 0,height:void 0,heightTablet:void 0,heightMobile:void 0})}}),i.a.createElement(_.a,{setAttributes:l,label:Object(h.__)("Layout","ultimate-addons-for-gutenberg"),data:{value:w,label:"layout"},className:"uagb-multi-button-alignment-control",options:[{value:"default",label:Object(h.__)("Normal","ultimate-addons-for-gutenberg")},{value:"overlay",label:Object(h.__)("Overlay","ultimate-addons-for-gutenberg")}],showIcons:!1}),E&&i.a.createElement(i.a.Fragment,null,i.a.createElement(F,{onChangeImage:Ta,onChange:e=>l(e),sizeSlug:J,sizeSlugTablet:q,sizeSlugMobile:$,width:B,widthTablet:x,widthMobile:N,height:P,heightTablet:D,heightMobile:W,setAttributes:l,imageSizeOptions:Oa,isResizable:Ma,imageWidth:Y,imageHeight:Z}),i.a.createElement(T.TextControl,{label:Object(h.__)("Alt Text","ultimate-addons-for-gutenberg"),value:G,onChange:e=>l({alt:e})})),i.a.createElement(T.SelectControl,{label:Object(h.__)("On Hover Image","ultimate-addons-for-gutenberg"),value:aa,onChange:e=>l({imageHoverEffect:e}),options:[{value:"static",label:Object(h.__)("Static","ultimate-addons-for-gutenberg")},{value:"zoomin",label:Object(h.__)("Zoom In","ultimate-addons-for-gutenberg")},{value:"slide",label:Object(h.__)("Slide","ultimate-addons-for-gutenberg")},{value:"grayscale",label:Object(h.__)("Gray Scale","ultimate-addons-for-gutenberg")},{value:"blur",label:Object(h.__)("Blur","ultimate-addons-for-gutenberg")}]}),"overlay"!==w&&i.a.createElement(T.ToggleControl,{label:Object(h.__)("Enable Caption","ultimate-addons-for-gutenberg"),checked:X,onChange:()=>{l({enableCaption:!X})}})),Sa=i.a.createElement(A.a,{title:Object(h.__)("Mask","ultimate-addons-for-gutenberg"),initialOpen:!1},i.a.createElement(f.a,{label:Object(h.__)("Mask Shape","ultimate-addons-for-gutenberg"),data:{value:ba,label:"maskShape"},setAttributes:l,options:[{value:"none",label:Object(h.__)("None","ultimate-addons-for-gutenberg")},{value:"circle",label:Object(h.__)("Circle","ultimate-addons-for-gutenberg")},{value:"diamond",label:Object(h.__)("Diamond","ultimate-addons-for-gutenberg")},{value:"hexagon",label:Object(h.__)("Hexagon","ultimate-addons-for-gutenberg")},{value:"rounded",label:Object(h.__)("Rounded","ultimate-addons-for-gutenberg")},{value:"blob1",label:Object(h.__)("Blob 1","ultimate-addons-for-gutenberg")},{value:"blob2",label:Object(h.__)("Blob 2","ultimate-addons-for-gutenberg")},{value:"blob3",label:Object(h.__)("Blob 3","ultimate-addons-for-gutenberg")},{value:"blob4",label:Object(h.__)("Blob 4","ultimate-addons-for-gutenberg")},{value:"custom",label:Object(h.__)("Custom","ultimate-addons-for-gutenberg")}]}),"custom"===ba&&i.a.createElement(m.a,{label:Object(h.__)("Custom Mask Image","ultimate-addons-for-gutenberg"),onSelectImage:e=>{e&&e.url?e.type&&"image"===e.type&&l({maskCustomShape:e}):l({maskCustomShape:null})},backgroundImage:ga,onRemoveImage:()=>{l({maskCustomShape:null})}}),"none"!==ba&&i.a.createElement(i.a.Fragment,null,i.a.createElement(f.a,{label:Object(h.__)("Mask Size","ultimate-addons-for-gutenberg"),data:{value:sa,label:"maskSize"},setAttributes:l,options:[{value:"auto",label:Object(h.__)("Auto","ultimate-addons-for-gutenberg")},{value:"contain",label:Object(h.__)("Contain","ultimate-addons-for-gutenberg")},{value:"cover",label:Object(h.__)("Cover","ultimate-addons-for-gutenberg")}]}),i.a.createElement(f.a,{label:Object(h.__)("Mask Position","ultimate-addons-for-gutenberg"),data:{value:ca,label:"maskPosition"},setAttributes:l,options:[{value:"center top",label:Object(h.__)("Center Top","ultimate-addons-for-gutenberg")},{value:"center center",label:Object(h.__)("Center Center","ultimate-addons-for-gutenberg")},{value:"center bottom",label:Object(h.__)("Center Bottom","ultimate-addons-for-gutenberg")},{value:"left top",label:Object(h.__)("Left Top","ultimate-addons-for-gutenberg")},{value:"left center",label:Object(h.__)("Left Center","ultimate-addons-for-gutenberg")},{value:"left bottom",label:Object(h.__)("Left Bottom","ultimate-addons-for-gutenberg")},{value:"right top",label:Object(h.__)("Right Top","ultimate-addons-for-gutenberg")},{value:"right center",label:Object(h.__)("Right Center","ultimate-addons-for-gutenberg")},{value:"right bottom",label:Object(h.__)("Right Bottom","ultimate-addons-for-gutenberg")}]}),i.a.createElement(f.a,{label:Object(h.__)("Mask Repeat","ultimate-addons-for-gutenberg"),data:{value:da,label:"maskRepeat"},setAttributes:l,options:[{value:"no-repeat",label:Object(h.__)("No Repeat","ultimate-addons-for-gutenberg")},{value:"repeat",label:Object(h.__)("Repeat","ultimate-addons-for-gutenberg")},{value:"repeat-x",label:Object(h.__)("Repeat-X","ultimate-addons-for-gutenberg")},{value:"repeat-y",label:Object(h.__)("Repeat-Y","ultimate-addons-for-gutenberg")}]}))),Ea=i.a.createElement(A.a,{title:Object(h.__)("Separator","ultimate-addons-for-gutenberg"),initialOpen:!1},"none"!==xt&&i.a.createElement(_.a,{setAttributes:l,label:Object(h.__)("Show On","ultimate-addons-for-gutenberg"),data:{value:Bt,label:"seperatorShowOn"},className:"uagb-multi-button-alignment-control",options:[{value:"always",label:Object(h.__)("Always","ultimate-addons-for-gutenberg")},{value:"hover",label:Object(h.__)("Hover","ultimate-addons-for-gutenberg")}],showIcons:!1}),i.a.createElement(T.SelectControl,{label:Object(h.__)("Style"),value:xt,onChange:e=>l({seperatorStyle:e}),options:[{value:"none",label:Object(h.__)("None","ultimate-addons-for-gutenberg")},{value:"solid",label:Object(h.__)("Solid","ultimate-addons-for-gutenberg")},{value:"double",label:Object(h.__)("Double","ultimate-addons-for-gutenberg")},{value:"dashed",label:Object(h.__)("Dashed","ultimate-addons-for-gutenberg")},{value:"dotted",label:Object(h.__)("Dotted","ultimate-addons-for-gutenberg")}]}),"none"!==xt&&i.a.createElement(T.SelectControl,{label:Object(h.__)("Position","ultimate-addons-for-gutenberg"),value:It,onChange:e=>l({seperatorPosition:e}),options:[{value:"before_title",label:Object(h.__)("Before Title","ultimate-addons-for-gutenberg")},{value:"after_title",label:Object(h.__)("After Title","ultimate-addons-for-gutenberg")},{value:"after_sub_title",label:Object(h.__)("After Sub Title","ultimate-addons-for-gutenberg")}]})),ya=i.a.createElement(A.a,{title:Object(h.__)("Heading","ultimate-addons-for-gutenberg"),initialOpen:!1},i.a.createElement(_.a,{setAttributes:l,label:Object(h.__)("Show On","ultimate-addons-for-gutenberg"),data:{value:$e,label:"headingShowOn"},className:"uagb-multi-button-alignment-control",options:[{value:"always",label:Object(h.__)("Always","ultimate-addons-for-gutenberg")},{value:"hover",label:Object(h.__)("Hover","ultimate-addons-for-gutenberg")}],showIcons:!1})),wa=i.a.createElement(A.a,{title:Object(h.__)("Description","ultimate-addons-for-gutenberg"),initialOpen:!1},i.a.createElement(_.a,{setAttributes:l,label:Object(h.__)("Show On","ultimate-addons-for-gutenberg"),data:{value:me,label:"captionShowOn"},className:"uagb-multi-button-alignment-control",options:[{value:"always",label:Object(h.__)("Always","ultimate-addons-for-gutenberg")},{value:"hover",label:Object(h.__)("Hover","ultimate-addons-for-gutenberg")}],showIcons:!1})),za=i.a.createElement(A.a,{title:Object(h.__)("Heading","ultimate-addons-for-gutenberg"),initialOpen:!1},i.a.createElement(_.a,{setAttributes:l,label:Object(h.__)("Heading Tag","ultimate-addons-for-gutenberg"),data:{value:qe,label:"headingTag"},options:[{value:"h1",label:Object(h.__)("H1","ultimate-addons-for-gutenberg")},{value:"h2",label:Object(h.__)("H2","ultimate-addons-for-gutenberg")},{value:"h3",label:Object(h.__)("H3","ultimate-addons-for-gutenberg")},{value:"h4",label:Object(h.__)("H4","ultimate-addons-for-gutenberg")},{value:"h5",label:Object(h.__)("H5","ultimate-addons-for-gutenberg")},{value:"h6",label:Object(h.__)("H6","ultimate-addons-for-gutenberg")}]}),i.a.createElement(o.Suspense,{fallback:Object(n.a)()},i.a.createElement(r.a,{label:Object(h.__)("Typography","ultimate-addons-for-gutenberg"),setAttributes:l,loadGoogleFonts:{value:Xe,label:"headingLoadGoogleFonts"},fontFamily:{value:Ye,label:"headingFontFamily"},fontWeight:{value:Ze,label:"headingFontWeight"},fontStyle:{value:Ke,label:"headingFontStyle"},transform:{value:tt,label:"headingTransform"},decoration:{value:at,label:"headingDecoration"},fontSizeType:{value:lt,label:"headingFontSizeType"},fontSize:{value:Qe,label:"headingFontSize"},fontSizeMobile:{value:ot,label:"headingFontSizeMobile"},fontSizeTablet:{value:it,label:"headingFontSizeTablet"},lineHeightType:{value:rt,label:"headingLineHeightType"},lineHeight:{value:nt,label:"headingLineHeight"},lineHeightMobile:{value:ut,label:"headingLineHeightMobile"},lineHeightTablet:{value:bt,label:"headingLineHeightTablet"}})),i.a.createElement(s.a,{label:Object(h.__)("Color","ultimate-addons-for-gutenberg"),colorValue:et||"",onColorChange:e=>l({headingColor:e})}),i.a.createElement(c.a,{label:Object(h.__)("Margin","ultimate-addons-for-gutenberg"),valueTop:{value:gt,label:"headingTopMargin"},valueRight:{value:st,label:"headingRightMargin"},valueBottom:{value:dt,label:"headingBottomMargin"},valueLeft:{value:ct,label:"headingLeftMargin"},valueTopTablet:{value:mt,label:"headingTopMarginTablet"},valueRightTablet:{value:vt,label:"headingRightMarginTablet"},valueBottomTablet:{value:ht,label:"headingBottomMarginTablet"},valueLeftTablet:{value:pt,label:"headingLeftMarginTablet"},valueTopMobile:{value:_t,label:"headingTopMarginMobile"},valueRightMobile:{value:ft,label:"headingRightMarginMobile"},valueBottomMobile:{value:Ot,label:"headingBottomMarginMobile"},valueLeftMobile:{value:Mt,label:"headingLeftMarginMobile"},unit:{value:Tt,label:"headingMarginUnit"},mUnit:{value:St,label:"headingMarginUnitMobile"},tUnit:{value:jt,label:"headingMarginUnitTablet"},deviceType:t,attributes:a,setAttributes:l,link:{value:Et,label:"headingMarginLink"}})),Ca=i.a.createElement(A.a,{title:"overlay"===w?Object(h.__)("Description","ultimate-addons-for-gutenberg"):Object(h.__)("Caption","ultimate-addons-for-gutenberg"),initialOpen:!1},"default"===w&&i.a.createElement(_.a,{setAttributes:l,label:Object(h.__)("Alignment","ultimate-addons-for-gutenberg"),data:{value:pe,label:"captionAlign"},className:"uagb-multi-button-alignment-control",options:[{value:"left",icon:i.a.createElement(T.Icon,{icon:Object(j.a)("fa fa-align-left")}),tooltip:Object(h.__)("Left","ultimate-addons-for-gutenberg")},{value:"center",icon:i.a.createElement(T.Icon,{icon:Object(j.a)("fa fa-align-center")}),tooltip:Object(h.__)("Center","ultimate-addons-for-gutenberg")},{value:"right",icon:i.a.createElement(T.Icon,{icon:Object(j.a)("fa fa-align-right")}),tooltip:Object(h.__)("Right","ultimate-addons-for-gutenberg")}],showIcons:!0}),i.a.createElement(o.Suspense,{fallback:Object(n.a)()},i.a.createElement(r.a,{label:Object(h.__)("Typography","ultimate-addons-for-gutenberg"),setAttributes:l,loadGoogleFonts:{value:ve,label:"captionLoadGoogleFonts"},fontFamily:{value:he,label:"captionFontFamily"},fontWeight:{value:_e,label:"captionFontWeight"},fontStyle:{value:fe,label:"captionFontStyle"},transform:{value:Te,label:"captionTransform"},decoration:{value:je,label:"captionDecoration"},fontSizeType:{value:Se,label:"captionFontSizeType"},fontSize:{value:Me,label:"captionFontSize"},fontSizeMobile:{value:Ee,label:"captionFontSizeMobile"},fontSizeTablet:{value:ye,label:"captionFontSizeTablet"},lineHeightType:{value:ze,label:"captionLineHeightType"},lineHeight:{value:we,label:"captionLineHeight"},lineHeightMobile:{value:Ce,label:"captionLineHeightMobile"},lineHeightTablet:{value:ke,label:"captionLineHeightTablet"}})),i.a.createElement(s.a,{label:Object(h.__)("Color","ultimate-addons-for-gutenberg"),colorValue:Oe||"",onColorChange:e=>l({captionColor:e})}),i.a.createElement(c.a,{label:Object(h.__)("Margin","ultimate-addons-for-gutenberg"),valueTop:{value:Le,label:"captionTopMargin"},valueRight:{value:Be,label:"captionRightMargin"},valueBottom:{value:Fe,label:"captionBottomMargin"},valueLeft:{value:xe,label:"captionLeftMargin"},valueTopTablet:{value:Re,label:"captionTopMarginTablet"},valueRightTablet:{value:He,label:"captionRightMarginTablet"},valueBottomTablet:{value:Ie,label:"captionBottomMarginTablet"},valueLeftTablet:{value:Ae,label:"captionLeftMarginTablet"},valueTopMobile:{value:Ue,label:"captionTopMarginMobile"},valueRightMobile:{value:Ne,label:"captionRightMarginMobile"},valueBottomMobile:{value:De,label:"captionBottomMarginMobile"},valueLeftMobile:{value:Pe,label:"captionLeftMarginMobile"},unit:{value:We,label:"captionMarginUnit"},mUnit:{value:Ge,label:"captionMarginUnitMobile"},tUnit:{value:Ve,label:"captionMarginUnitTablet"},deviceType:t,attributes:a,setAttributes:l,link:{value:Je,label:"captionMarginLink"}})),ka=i.a.createElement(A.a,{title:Object(h.__)("Image","ultimate-addons-for-gutenberg"),initialOpen:!0},i.a.createElement(_.a,{setAttributes:l,label:Object(h.__)("Alignment","ultimate-addons-for-gutenberg"),data:{value:V,label:"align"},className:"uagb-multi-button-alignment-control",options:[{value:"left",icon:i.a.createElement(T.Icon,{icon:Object(j.a)("fa fa-align-left")}),tooltip:Object(h.__)("Left","ultimate-addons-for-gutenberg")},{value:"center",icon:i.a.createElement(T.Icon,{icon:Object(j.a)("fa fa-align-center")}),tooltip:Object(h.__)("Center","ultimate-addons-for-gutenberg")},{value:"right",icon:i.a.createElement(T.Icon,{icon:Object(j.a)("fa fa-align-right")}),tooltip:Object(h.__)("Right","ultimate-addons-for-gutenberg")}],showIcons:!0}),"default"===w&&i.a.createElement(R.a,{setAttributes:l,prefix:"image",attributes:a,deviceType:t}),"overlay"===w&&i.a.createElement(i.a.Fragment,null,i.a.createElement("label",{htmlFor:"overlayContentAlign"},Object(h.__)("Content Postion","ultimate-addons-for-gutenberg")),i.a.createElement(T.__experimentalAlignmentMatrixControl,{id:"overlayContentAlign",value:zt,onChange:e=>l({overlayContentPosition:e})}),i.a.createElement(R.a,{setAttributes:l,prefix:"overlay",attributes:a,deviceType:t}),i.a.createElement(d.a,{label:Object(h.__)("Border Distance From EDGE","ultimate-addons-for-gutenberg"),setAttributes:l,value:yt,onChange:e=>l({overlayPositionFromEdge:e}),min:0,max:100,unit:{value:wt,label:"overlayPositionFromEdgeUnit"}})),i.a.createElement(c.a,{label:Object(h.__)("Margin","ultimate-addons-for-gutenberg"),valueTop:{value:K,label:"imageTopMargin"},valueRight:{value:Q,label:"imageRightMargin"},valueBottom:{value:te,label:"imageBottomMargin"},valueLeft:{value:ee,label:"imageLeftMargin"},valueTopTablet:{value:ae,label:"imageTopMarginTablet"},valueRightTablet:{value:le,label:"imageRightMarginTablet"},valueBottomTablet:{value:ie,label:"imageBottomMarginTablet"},valueLeftTablet:{value:oe,label:"imageLeftMarginTablet"},valueTopMobile:{value:ne,label:"imageTopMarginMobile"},valueRightMobile:{value:re,label:"imageRightMarginMobile"},valueBottomMobile:{value:be,label:"imageBottomMarginMobile"},valueLeftMobile:{value:ue,label:"imageLeftMarginMobile"},unit:{value:ge,label:"imageMarginUnit"},mUnit:{value:ce,label:"imageMarginUnitMobile"},tUnit:{value:se,label:"imageMarginUnitTablet"},deviceType:t,attributes:a,setAttributes:l,link:{value:de,label:"imageMarginLink"}}),"static"===aa&&i.a.createElement(v.a,{setAttributes:l,label:Object(h.__)("Box Shadow","ultimate-addons-for-gutenberg"),boxShadowColor:{value:la,label:"imageBoxShadowColor",title:Object(h.__)("Color","ultimate-addons-for-gutenberg")},boxShadowHOffset:{value:oa,label:"imageBoxShadowHOffset",title:Object(h.__)("Horizontal","ultimate-addons-for-gutenberg")},boxShadowVOffset:{value:ia,label:"imageBoxShadowVOffset",title:Object(h.__)("Vertical","ultimate-addons-for-gutenberg")},boxShadowBlur:{value:na,label:"imageBoxShadowBlur",title:Object(h.__)("Blur","ultimate-addons-for-gutenberg")},boxShadowSpread:{value:ra,label:"imageBoxShadowSpread",title:Object(h.__)("Spread","ultimate-addons-for-gutenberg")},boxShadowPosition:{value:ua,label:"imageBoxShadowPosition",title:Object(h.__)("Position","ultimate-addons-for-gutenberg")},popup:!0})),La=i.a.createElement(A.a,{title:Object(h.__)("Overlay","ultimate-addons-for-gutenberg"),initialOpen:!1},i.a.createElement(s.a,{label:Object(h.__)("Background","ultimate-addons-for-gutenberg"),colorValue:Ct||"",onColorChange:e=>l({overlayBackground:e})}),i.a.createElement(d.a,{label:Object(h.__)("Overlay Opacity","ultimate-addons-for-gutenberg"),setAttributes:l,value:kt,onChange:e=>l({overlayOpacity:e}),min:0,max:1,step:.1,displayUnit:!1}),i.a.createElement(d.a,{label:Object(h.__)("Overlay Hover Opacity","ultimate-addons-for-gutenberg"),setAttributes:l,value:Lt,onChange:e=>l({overlayHoverOpacity:e}),min:0,max:1,step:.1,displayUnit:!1})),Ba=i.a.createElement(A.a,{title:"Separator",initialOpen:!1},i.a.createElement(d.a,{label:Object(h.__)("Width","ultimate-addons-for-gutenberg"),setAttributes:l,value:Ft,onChange:e=>l({seperatorWidth:e}),min:0,max:"%"===Rt?100:500,unit:{value:Rt,label:"separatorWidthType"},units:[{name:Object(h.__)("Pixel","ultimate-addons-for-gutenberg"),unitValue:"px"},{name:Object(h.__)("Em","ultimate-addons-for-gutenberg"),unitValue:"em"},{name:Object(h.__)("%","ultimate-addons-for-gutenberg"),unitValue:"%"}]}),i.a.createElement(d.a,{label:Object(h.__)("Thickness","ultimate-addons-for-gutenberg"),setAttributes:l,value:Ht,onChange:e=>l({seperatorThickness:e}),min:0,max:10,unit:{value:At,label:"seperatorThicknessUnit"}}),i.a.createElement(s.a,{label:Object(h.__)("Color","ultimate-addons-for-gutenberg"),colorValue:Ut||"",onColorChange:e=>l({seperatorColor:e})}),i.a.createElement(c.a,U({},e,{label:Object(h.__)("Margin","ultimate-addons-for-gutenberg"),valueTop:{value:Nt,label:"seperatorTopMargin"},valueRight:{value:Pt,label:"seperatorRightMargin"},valueBottom:{value:Wt,label:"seperatorBottomMargin"},valueLeft:{value:Dt,label:"seperatorLeftMargin"},valueTopTablet:{value:Vt,label:"seperatorTopMarginTablet"},valueRightTablet:{value:Gt,label:"seperatorRightMarginTablet"},valueBottomTablet:{value:qt,label:"seperatorBottomMarginTablet"},valueLeftTablet:{value:Jt,label:"seperatorLeftMarginTablet"},valueTopMobile:{value:$t,label:"seperatorTopMarginMobile"},valueRightMobile:{value:Xt,label:"seperatorRightMarginMobile"},valueBottomMobile:{value:Zt,label:"seperatorBottomMarginMobile"},valueLeftMobile:{value:Yt,label:"seperatorLeftMarginMobile"},unit:{value:Kt,label:"seperatorMarginUnit"},mUnit:{value:ea,label:"seperatorMarginUnitMobile"},tUnit:{value:Qt,label:"seperatorMarginUnitTablet"},deviceType:t,attributes:a,setAttributes:l,link:{value:ta,label:"seperatorMarginLink"}})));return i.a.createElement(i.a.Fragment,null,i.a.createElement(O.InspectorControls,null,i.a.createElement(b.a,null,i.a.createElement(g.b,g.a.general,ja,Sa,"overlay"===w&&i.a.createElement(i.a.Fragment,null,ya,wa,Ea)),i.a.createElement(g.b,g.a.style,ka,"overlay"===w&&i.a.createElement(i.a.Fragment,null,La,za,Ca),X&&"overlay"!==w&&Ca,"none"!==xt&&"overlay"===w&&Ba),i.a.createElement(g.b,U({},g.a.advance,{parentProps:e})))))}}}]);