(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{379:function(e,t,a){"use strict";a.r(t);var n=a(1),l=a.n(n),o=a(0),r=a(3),i=a(10),u=Object(n.lazy)((function(){return Promise.resolve().then(a.bind(null,14))})),b=Object(n.lazy)((function(){return Promise.resolve().then(a.bind(null,7))})),c=Object(n.lazy)((function(){return a.e(0).then(a.bind(null,283))})),s=Object(n.lazy)((function(){return Promise.resolve().then(a.bind(null,8))})),m=wp.components,g=m.PanelBody,d=m.SelectControl,p=m.RangeControl,_=m.TextControl,f=m.ButtonGroup,h=m.Button,E=wp.blockEditor,v=E.InspectorControls,y=E.ColorPalette,C=function(e){var t,a,m=e=e.parentProps,E=m.attributes,C=m.setAttributes,S=m.deviceType,x=E.layout,O=E.placeholder,T=E.inputSize,z=E.textColor,j=E.inputBgColor,N=E.boxShadowColor,F=E.boxShadowHOffset,k=E.boxShadowVOffset,P=E.boxShadowBlur,w=E.boxShadowSpread,H=E.boxShadowPosition,R=E.borderStyle,B=E.borderWidth,M=E.borderRadius,L=E.borderColor,D=E.buttonBgColor,I=E.buttonBgHoverColor,W=E.buttonIconColor,G=E.buttonIconHoverColor,A=E.buttonWidth,V=E.buttonIconSize,J=E.iconColor,q=E.iconSize,K=E.inputloadGoogleFonts,Q=E.inputFontFamily,U=E.inputFontWeight,X=E.inputFontSubset,Y=E.inputFontSize,Z=E.inputFontSizeType,$=E.inputFontSizeTablet,ee=E.inputFontSizeMobile,te=E.inputLineHeight,ae=E.inputLineHeightType,ne=E.inputLineHeightTablet,le=E.inputLineHeightMobile,oe=E.inputPaddingTypeDesktop,re=E.vinputPaddingMobile,ie=E.vinputPaddingTablet,ue=E.vinputPaddingDesktop,be=E.hinputPaddingMobile,ce=E.hinputPaddingTablet,se=E.hinputPaddingDesktop,me=E.buttonType,ge=E.buttonText,de=E.buttonloadGoogleFonts,pe=E.buttonFontFamily,_e=E.buttonFontWeight,fe=E.buttonFontSubset,he=E.buttonFontSize,Ee=E.buttonFontSizeType,ve=E.buttonFontSizeTablet,ye=E.buttonFontSizeMobile,Ce=E.buttonLineHeight,Se=E.buttonLineHeightType,xe=E.buttonLineHeightTablet,Oe=E.buttonLineHeightMobile,Te=E.buttonTextColor,ze=E.buttonTextHoverColor,je=E.inputSizeType;if(1==K){var Ne={google:{families:[Q+(U?":"+U:"")]}};t=l.a.createElement(s,{config:Ne})}if(1==de){var Fe={google:{families:[pe+(_e?":"+_e:"")]}};a=l.a.createElement(s,{config:Fe})}return l.a.createElement(n.Suspense,{fallback:Object(i.a)()},l.a.createElement(v,null,l.a.createElement(g,{title:Object(o.__)("General","ultimate-addons-for-gutenberg"),initialOpen:!0,className:"uagb__url-panel-body"},l.a.createElement(d,{label:Object(o.__)("Layout","ultimate-addons-for-gutenberg"),value:x,options:[{value:"input-button",label:Object(o.__)("Classic","ultimate-addons-for-gutenberg")},{value:"input",label:Object(o.__)("Minimal","ultimate-addons-for-gutenberg")}],onChange:function(e){return C({layout:e})}}),l.a.createElement(l.a.Fragment,null,l.a.createElement(_,{label:Object(o.__)("Placeholder","ultimate-addons-for-gutenberg"),value:O,onChange:function(e){return C({placeholder:e})}}),l.a.createElement(f,{className:"uagb-size-type-field","aria-label":Object(o.__)("Size Type","ultimate-addons-for-gutenberg")},l.a.createElement(h,{key:"px",className:"uagb-size-btn",isSmall:!0,isPrimary:"px"===je,"aria-pressed":"px"===je,onClick:function(){return C({inputSizeType:"px"})}},"px"),l.a.createElement(h,{key:"%",className:"uagb-size-btn",isSmall:!0,isPrimary:"%"===je,"aria-pressed":"%"===je,onClick:function(){return C({inputSizeType:"%"})}},"%")),l.a.createElement(p,{label:Object(o.__)("Input Width","ultimate-addons-for-gutenberg"),value:T,onChange:function(e){return C({inputSize:e})},min:0,max:"px"===je?500:100}))),l.a.createElement(g,{title:Object(o.__)("Input Box","ultimate-addons-for-gutenberg"),initialOpen:!1,className:"uagb__url-panel-body"},l.a.createElement("p",{className:"uagb-setting-label"},Object(o.__)("Text Color","ultimate-addons-for-gutenberg"),l.a.createElement("span",{className:"components-base-control__label"},l.a.createElement("span",{className:"component-color-indicator",style:{backgroundColor:z}}))),l.a.createElement(y,{value:z,onChange:function(e){return C({textColor:e})},allowReset:!0}),l.a.createElement("p",{className:"uagb-setting-label"},Object(o.__)("Background Color","ultimate-addons-for-gutenberg"),l.a.createElement("span",{className:"components-base-control__label"},l.a.createElement("span",{className:"component-color-indicator",style:{backgroundColor:j}}))),l.a.createElement(y,{value:j,onChange:function(e){return C({inputBgColor:e})},allowReset:!0}),l.a.createElement("hr",null),l.a.createElement("h2",null,Object(o.__)("Border","ultimate-addons-for-gutenberg")),l.a.createElement(d,{label:Object(o.__)("Style","ultimate-addons-for-gutenberg"),value:R,options:[{value:"none",label:Object(o.__)("None","ultimate-addons-for-gutenberg")},{value:"solid",label:Object(o.__)("Solid","ultimate-addons-for-gutenberg")},{value:"dotted",label:Object(o.__)("Dotted","ultimate-addons-for-gutenberg")},{value:"dashed",label:Object(o.__)("Dashed","ultimate-addons-for-gutenberg")},{value:"double",label:Object(o.__)("Double","ultimate-addons-for-gutenberg")}],onChange:function(e){C({borderStyle:e})}}),"none"!==R&&l.a.createElement(l.a.Fragment,null,l.a.createElement(p,{label:Object(o.__)("Thickness (px)","ultimate-addons-for-gutenberg"),value:B,onChange:function(e){C({borderWidth:e})},min:0,max:20}),l.a.createElement(p,{label:Object(o.__)("Rounded Corners (px)","ultimate-addons-for-gutenberg"),value:M,onChange:function(e){C({borderRadius:e})},min:0,max:50}),l.a.createElement("p",{className:"uagb-setting-label"},Object(o.__)("Color","ultimate-addons-for-gutenberg"),l.a.createElement("span",{className:"components-base-control__label"},l.a.createElement("span",{className:"component-color-indicator",style:{backgroundColor:L}}))),l.a.createElement(y,{value:L,onChange:function(e){return C({borderColor:e})},allowReset:!0})),l.a.createElement("hr",null),l.a.createElement(u,null),"Desktop"===S&&l.a.createElement(l.a.Fragment,null,l.a.createElement(f,{className:"uagb-size-type-field","aria-label":Object(o.__)("Size Type","ultimate-addons-for-gutenberg")},l.a.createElement(h,{key:"px",className:"uagb-size-btn",isSmall:!0,isPrimary:"px"===oe,"aria-pressed":"px"===oe,onClick:function(){return C({inputPaddingTypeDesktop:"px"})}},"px"),l.a.createElement(h,{key:"%",className:"uagb-size-btn",isSmall:!0,isPrimary:"%"===oe,"aria-pressed":"%"===oe,onClick:function(){return C({inputPaddingTypeDesktop:"%"})}},"%")),l.a.createElement("h2",null,Object(o.__)("Padding","ultimate-addons-for-gutenberg")),l.a.createElement(p,{label:r.a.vertical_spacing,className:"uagb-margin-control",value:ue,onChange:function(e){return C({vinputPaddingDesktop:e})},min:0,max:100,allowReset:!0}),l.a.createElement(p,{label:r.a.horizontal_spacing,className:"uagb-margin-control",value:se,onChange:function(e){return C({hinputPaddingDesktop:e})},min:0,max:100,allowReset:!0})),"Tablet"===S&&l.a.createElement(l.a.Fragment,null,l.a.createElement(f,{className:"uagb-size-type-field","aria-label":Object(o.__)("Size Type","ultimate-addons-for-gutenberg")},l.a.createElement(h,{key:"px",className:"uagb-size-btn",isSmall:!0,isPrimary:"px"===oe,"aria-pressed":"px"===oe,onClick:function(){return C({inputPaddingTypeDesktop:"px"})}},"px"),l.a.createElement(h,{key:"%",className:"uagb-size-btn",isSmall:!0,isPrimary:"%"===oe,"aria-pressed":"%"===oe,onClick:function(){return C({inputPaddingTypeDesktop:"%"})}},"%")),l.a.createElement("h2",null,Object(o.__)("Padding","ultimate-addons-for-gutenberg")),l.a.createElement(p,{label:r.a.vertical_spacing,className:"uagb-margin-control",value:ie,onChange:function(e){return C({vinputPaddingTablet:e})},min:0,max:100,allowReset:!0}),l.a.createElement(p,{label:r.a.horizontal_spacing,className:"uagb-margin-control",value:ce,onChange:function(e){return C({hinputPaddingTablet:e})},min:0,max:100,allowReset:!0})),"Mobile"===S&&l.a.createElement(l.a.Fragment,null,l.a.createElement(f,{className:"uagb-size-type-field","aria-label":Object(o.__)("Size Type","ultimate-addons-for-gutenberg")},l.a.createElement(h,{key:"px",className:"uagb-size-btn",isSmall:!0,isPrimary:"px"===oe,"aria-pressed":"px"===oe,onClick:function(){return C({inputPaddingTypeDesktop:"px"})}},"px"),l.a.createElement(h,{key:"%",className:"uagb-size-btn",isSmall:!0,isPrimary:"%"===oe,"aria-pressed":"%"===oe,onClick:function(){return C({inputPaddingTypeDesktop:"%"})}},"%")),l.a.createElement("h2",null,Object(o.__)("Padding","ultimate-addons-for-gutenberg")),l.a.createElement(p,{label:r.a.vertical_spacing,className:"uagb-margin-control",value:re,onChange:function(e){return C({vinputPaddingMobile:e})},min:0,max:100,allowReset:!0}),l.a.createElement(p,{label:r.a.horizontal_spacing,className:"uagb-margin-control",value:be,onChange:function(e){return C({hinputPaddingMobile:e})},min:0,max:100,allowReset:!0})),l.a.createElement("hr",null),l.a.createElement(b,{label:Object(o.__)("Typography","ultimate-addons-for-gutenberg"),attributes:E,setAttributes:C,loadGoogleFonts:{value:K,label:"inputloadGoogleFonts"},fontFamily:{value:Q,label:"inputFontFamily"},fontWeight:{value:U,label:"inputFontWeight"},fontSubset:{value:X,label:"inputFontSubset"},fontSizeType:{value:Z,label:"inputFontSizeType"},fontSize:{value:Y,label:"inputFontSize"},fontSizeMobile:{value:ee,label:"inputFontSizeMobile"},fontSizeTablet:{value:$,label:"inputFontSizeTablet"},lineHeightType:{value:ae,label:"inputLineHeightType"},lineHeight:{value:te,label:"inputLineHeight"},lineHeightMobile:{value:le,label:"inputLineHeightMobile"},lineHeightTablet:{value:ne,label:"inputLineHeightTablet"}}),l.a.createElement(c,{setAttributes:C,label:Object(o.__)("Box Shadow","ultimate-addons-for-gutenberg"),boxShadowColor:{value:N,label:Object(o.__)("Color","ultimate-addons-for-gutenberg")},boxShadowHOffset:{value:F,label:Object(o.__)("Horizontal","ultimate-addons-for-gutenberg")},boxShadowVOffset:{value:k,label:Object(o.__)("Vertical","ultimate-addons-for-gutenberg")},boxShadowBlur:{value:P,label:Object(o.__)("Blur","ultimate-addons-for-gutenberg")},boxShadowSpread:{value:w,label:Object(o.__)("Spread","ultimate-addons-for-gutenberg")},boxShadowPosition:{value:H,label:Object(o.__)("Position","ultimate-addons-for-gutenberg")}})),"input-button"===x?l.a.createElement(g,{title:Object(o.__)("Button","ultimate-addons-for-gutenberg"),initialOpen:!1,className:"uagb__url-panel-body"},l.a.createElement(l.a.Fragment,null,l.a.createElement(d,{label:Object(o.__)("Type","ultimate-addons-for-gutenberg"),value:me,options:[{value:"icon",label:Object(o.__)("Icon","ultimate-addons-for-gutenberg")},{value:"text",label:Object(o.__)("Text","ultimate-addons-for-gutenberg")}],onChange:function(e){C({buttonType:e})}}),"text"===me&&l.a.createElement(l.a.Fragment,null,l.a.createElement(_,{label:"Text",value:ge,onChange:function(e){C({buttonText:e})}}),l.a.createElement(b,{label:Object(o.__)("Typography","ultimate-addons-for-gutenberg"),attributes:E,setAttributes:C,loadGoogleFonts:{value:de,label:"buttonloadGoogleFonts"},fontFamily:{value:pe,label:"buttonFontFamily"},fontWeight:{value:_e,label:"buttonFontWeight"},fontSubset:{value:fe,label:"buttonFontSubset"},fontSizeType:{value:Ee,label:"buttonFontSizeType"},fontSize:{value:he,label:"buttonFontSize"},fontSizeMobile:{value:ye,label:"buttonFontSizeMobile"},fontSizeTablet:{value:ve,label:"buttonFontSizeTablet"},lineHeightType:{value:Se,label:"buttonLineHeightType"},lineHeight:{value:Ce,label:"buttonLineHeight"},lineHeightMobile:{value:Oe,label:"buttonLineHeightMobile"},lineHeightTablet:{value:xe,label:"buttonLineHeightTablet"}})),l.a.createElement(p,{label:Object(o.__)("Width","ultimate-addons-for-gutenberg"),value:A,onChange:function(e){C({buttonWidth:e})},min:0,max:500}),l.a.createElement(l.a.Fragment,null,l.a.createElement("p",{className:"uagb-setting-label"},Object(o.__)("Background Color","ultimate-addons-for-gutenberg"),l.a.createElement("span",{className:"components-base-control__label"},l.a.createElement("span",{className:"component-color-indicator",style:{backgroundColor:D}}))),l.a.createElement(y,{value:D,onChange:function(e){return C({buttonBgColor:e})},allowReset:!0}),l.a.createElement("p",{className:"uagb-setting-label"},Object(o.__)("Background Hover Color","ultimate-addons-for-gutenberg"),l.a.createElement("span",{className:"components-base-control__label"},l.a.createElement("span",{className:"component-color-indicator",style:{backgroundColor:I}}))),l.a.createElement(y,{value:I,onChange:function(e){return C({buttonBgHoverColor:e})},allowReset:!0}),"text"===me&&l.a.createElement(l.a.Fragment,null,l.a.createElement("p",{className:"uagb-setting-label"},Object(o.__)("Text Color","ultimate-addons-for-gutenberg"),l.a.createElement("span",{className:"components-base-control__label"},l.a.createElement("span",{className:"component-color-indicator",style:{backgroundColor:Te}}))),l.a.createElement(y,{value:Te,onChange:function(e){return C({buttonTextColor:e})},allowReset:!0}),l.a.createElement("p",{className:"uagb-setting-label"},Object(o.__)("Text Hover Color","ultimate-addons-for-gutenberg"),l.a.createElement("span",{className:"components-base-control__label"},l.a.createElement("span",{className:"component-color-indicator",style:{backgroundColor:ze}}))),l.a.createElement(y,{value:ze,onChange:function(e){return C({buttonTextHoverColor:e})},allowReset:!0}))),"icon"===me&&l.a.createElement(l.a.Fragment,null,l.a.createElement("hr",{className:"uagb-editor__separator"}),l.a.createElement("h2",null,Object(o.__)("Icon","ultimate-addons-for-gutenberg")),l.a.createElement(p,{label:Object(o.__)("Size","ultimate-addons-for-gutenberg"),value:V,onChange:function(e){C({buttonIconSize:e})},min:0,max:500}),l.a.createElement("p",{className:"uagb-setting-label"},Object(o.__)("Color","ultimate-addons-for-gutenberg"),l.a.createElement("span",{className:"components-base-control__label"},l.a.createElement("span",{className:"component-color-indicator",style:{backgroundColor:W}}))),l.a.createElement(y,{value:W,onChange:function(e){return C({buttonIconColor:e})},allowReset:!0}),l.a.createElement("p",{className:"uagb-setting-label"},Object(o.__)("Hover Color","ultimate-addons-for-gutenberg"),l.a.createElement("span",{className:"components-base-control__label"},l.a.createElement("span",{className:"component-color-indicator",style:{backgroundColor:G}}))),l.a.createElement(y,{value:G,onChange:function(e){return C({buttonIconHoverColor:e})},allowReset:!0})))):"","input"===x?l.a.createElement(g,{title:Object(o.__)("Icon","ultimate-addons-for-gutenberg"),initialOpen:!1,className:"uagb__url-panel-body"},l.a.createElement(l.a.Fragment,null,l.a.createElement(p,{label:Object(o.__)("Size","ultimate-addons-for-gutenberg"),value:q,onChange:function(e){C({iconSize:e})},min:0,max:500}),l.a.createElement("p",{className:"uagb-setting-label"},Object(o.__)("Color","ultimate-addons-for-gutenberg"),l.a.createElement("span",{className:"components-base-control__label"},l.a.createElement("span",{className:"component-color-indicator",style:{backgroundColor:J}}))),l.a.createElement(y,{value:J,onChange:function(e){return C({iconColor:e})},allowReset:!0}))):""),t,a)};t.default=l.a.memo(C)}}]);