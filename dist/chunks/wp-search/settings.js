(window.webpackJsonp_ultimate_addons_for_gutenberg=window.webpackJsonp_ultimate_addons_for_gutenberg||[]).push([[37],{368:function(e,t,a){"use strict";a.r(t);var o=a(1),n=a(76),l=a(81),i=a(38),u=a(50),b=a(0),r=a.n(b),d=a(80),g=a(77),p=a(13),c=a(42),m=a(75),s=a(29),f=a(14),v=a(3),h=a(5);function _(){return(_=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var o in a)Object.prototype.hasOwnProperty.call(a,o)&&(e[o]=a[o])}return e}).apply(this,arguments)}var T=function(e){var t,a,b,T,S=e=e.parentProps,C=S.attributes,y=S.setAttributes,O=S.deviceType,I=C.layout,F=C.placeholder,x=C.inputSize,j=C.textColor,E=C.inputBgColor,z=C.boxShadowColor,H=C.boxShadowHOffset,B=C.boxShadowVOffset,w=C.boxShadowBlur,L=C.boxShadowSpread,M=C.boxShadowPosition,P=C.borderStyle,V=C.borderWidth,W=C.borderRadius,R=C.borderHColor,k=C.borderColor,A=C.buttonBgColor,D=C.buttonBgHoverColor,U=C.buttonIconColor,G=C.buttonIconHoverColor,N=C.buttonWidth,J=C.buttonWidthType,q=C.buttonIconSize,K=C.buttonIconSizeType,Q=C.iconColor,X=C.iconSize,Y=C.inputloadGoogleFonts,Z=C.inputFontFamily,$=C.inputFontWeight,ee=C.inputFontSubset,te=C.inputFontSize,ae=C.inputFontSizeType,oe=C.inputFontSizeTablet,ne=C.inputFontSizeMobile,le=C.inputLineHeight,ie=C.inputLineHeightType,ue=C.inputLineHeightTablet,be=C.inputLineHeightMobile,re=C.inputPaddingTypeDesktop,de=(C.vinputPaddingMobile,C.vinputPaddingTablet,C.vinputPaddingDesktop,C.hinputPaddingMobile,C.hinputPaddingTablet,C.hinputPaddingDesktop,C.buttonType),ge=C.buttonText,pe=C.buttonloadGoogleFonts,ce=C.buttonFontFamily,me=C.buttonFontWeight,se=C.buttonFontSubset,fe=C.buttonFontSize,ve=C.buttonFontSizeType,he=C.buttonFontSizeTablet,_e=C.buttonFontSizeMobile,Te=C.buttonLineHeight,Se=C.buttonLineHeightType,Ce=C.buttonLineHeightTablet,ye=C.buttonTransform,Oe=C.buttonDecoration,Ie=C.buttonLineHeightMobile,Fe=C.buttonTextColor,xe=C.buttonTextHoverColor,je=C.inputSizeType,Ee=C.paddingInputTop,ze=C.paddingInputRight,He=C.paddingInputBottom,Be=C.paddingInputLeft,we=C.paddingInputTopTablet,Le=C.paddingInputRightTablet,Me=C.paddingInputBottomTablet,Pe=C.paddingInputLeftTablet,Ve=C.paddingInputTopMobile,We=C.paddingInputRightMobile,Re=C.paddingInputBottomMobile,ke=C.paddingInputLeftMobile,Ae=(C.paddingInputUnit,C.mobilePaddingInputUnit),De=C.tabletPaddingInputUnit,Ue=C.spacingLink,Ge=C.iconSizeType,Ne=C.inputTransform,Je=C.inputDecoration;if(1==Y){var qe={google:{families:[Z+($?":"+$:"")]}};t=r.a.createElement(u.a,{config:qe})}if(1==pe){var Ke={google:{families:[ce+(me?":"+me:"")]}};a=r.a.createElement(u.a,{config:Ke})}return r.a.createElement(r.a.Fragment,null,r.a.createElement(h.InspectorControls,null,r.a.createElement(m.a,null,r.a.createElement(s.b,s.a.general,r.a.createElement(v.PanelBody,{initialOpen:!0},r.a.createElement(i.a,{setAttributes:y,label:Object(o.__)("Layout","ultimate-addons-for-gutenberg"),data:{value:I,label:"layout"},className:"uagb-multi-button-alignment-control",options:[{value:"input-button",label:"Classic"},{value:"input",label:"Minimal"}],showIcons:!1}),r.a.createElement(v.TextControl,{label:Object(o.__)("Placeholder","ultimate-addons-for-gutenberg"),value:F,onChange:function(e){return y({placeholder:e})}}),r.a.createElement(p.a,{label:Object(o.__)("Input Width","ultimate-addons-for-gutenberg"),setAttributes:y,value:x,onChange:function(e){return y({inputSize:e})},min:0,max:300,units:[{name:Object(o.__)("Pixel","ultimate-addons-for-gutenberg"),unitValue:"px"},{name:Object(o.__)("Em","ultimate-addons-for-gutenberg"),unitValue:"em"},{name:Object(o.__)("%","ultimate-addons-for-gutenberg"),unitValue:"%"}],unit:{value:je,label:"inputSizeType"}}),"input-button"==I&&r.a.createElement(i.a,{setAttributes:y,label:Object(o.__)("Button Type","ultimate-addons-for-gutenberg"),data:{value:de,label:"buttonType"},className:"uagb-multi-button-alignment-control",options:[{value:"icon",label:"Icon"},{value:"text",label:"Text"}],showIcons:!1}),"input-button"==I&&"text"===de&&r.a.createElement(r.a.Fragment,null,r.a.createElement(v.TextControl,{label:"Text",value:ge,onChange:function(e){y({buttonText:e})}})))),r.a.createElement(s.b,s.a.style,r.a.createElement(v.PanelBody,{title:Object(o.__)("Input Box","ultimate-addons-for-gutenberg"),initialOpen:!1,className:"uagb__url-panel-body"},r.a.createElement(f.a,{label:Object(o.__)("Text Color","ultimate-addons-for-gutenberg"),colorValue:j||"",onColorChange:function(e){return y({textColor:e})}}),r.a.createElement(f.a,{label:Object(o.__)("Background Color","ultimate-addons-for-gutenberg"),colorValue:E||"",onColorChange:function(e){return y({inputBgColor:e})}}),r.a.createElement(d.a,{setAttributes:y,borderStyle:{value:P,label:"borderStyle",title:Object(o.__)("Border Style","ultimate-addons-for-gutenberg")},borderWidth:{value:V,label:"borderWidth",title:Object(o.__)("Width","ultimate-addons-for-gutenberg")},borderRadius:{value:W,label:"borderRadius",title:Object(o.__)("Radius","ultimate-addons-for-gutenberg")},borderColor:{value:k,label:"borderColor",title:Object(o.__)("Color","ultimate-addons-for-gutenberg")},borderHoverColor:{value:R,label:"borderHColor",title:Object(o.__)("Hover Color","ultimate-addons-for-gutenberg")}}),r.a.createElement(g.a,_({},e,{label:Object(o.__)("Padding","ultimate-addons-for-gutenberg"),valueTop:{value:Ee,label:"paddingInputTop"},valueRight:{value:ze,label:"paddingInputRight"},valueBottom:{value:He,label:"paddingInputBottom"},valueLeft:{value:Be,label:"paddingInputLeft"},valueTopTablet:{value:we,label:"paddingInputTopTablet"},valueRightTablet:{value:Le,label:"paddingInputRightTablet"},valueBottomTablet:{value:Me,label:"paddingInputBottomTablet"},valueLeftTablet:{value:Pe,label:"paddingInputLeftTablet"},valueTopMobile:{value:Ve,label:"paddingInputTopMobile"},valueRightMobile:{value:We,label:"paddingInputRightMobile"},valueBottomMobile:{value:Re,label:"paddingInputBottomMobile"},valueLeftMobile:{value:ke,label:"paddingInputLeftMobile"},unit:{value:re,label:"inputPaddingTypeDesktop"},mUnit:{value:Ae,label:"mobilePaddingInputUnit"},tUnit:{value:De,label:"tabletPaddingInputUnit"},deviceType:O,attributes:C,setAttributes:y,link:{value:Ue,label:"spacingLink"}})),r.a.createElement(n.a,{label:Object(o.__)("Typography","ultimate-addons-for-gutenberg"),attributes:C,setAttributes:y,loadGoogleFonts:{value:Y,label:"inputloadGoogleFonts"},fontFamily:{value:Z,label:"inputFontFamily"},fontWeight:{value:$,label:"inputFontWeight"},fontSubset:{value:ee,label:"inputFontSubset"},fontSizeType:{value:ae,label:"inputFontSizeType"},fontSize:{value:te,label:"inputFontSize"},fontSizeMobile:{value:ne,label:"inputFontSizeMobile"},fontSizeTablet:{value:oe,label:"inputFontSizeTablet"},lineHeightType:{value:ie,label:"inputLineHeightType"},lineHeight:{value:le,label:"inputLineHeight"},lineHeightMobile:{value:be,label:"inputLineHeightMobile"},lineHeightTablet:{value:ue,label:"inputLineHeightTablet"},transform:{value:Ne,label:"inputTransform"},decoration:{value:Je,label:"inputDecoration"}}),r.a.createElement(l.a,{setAttributes:y,label:Object(o.__)("Box Shadow","ultimate-addons-for-gutenberg"),boxShadowColor:{value:z,label:"boxShadowColor",title:Object(o.__)("Color","ultimate-addons-for-gutenberg")},boxShadowHOffset:{value:H,label:"boxShadowHOffset",title:Object(o.__)("Horizontal","ultimate-addons-for-gutenberg")},boxShadowVOffset:{value:B,label:"boxShadowVOffset",title:Object(o.__)("Vertical","ultimate-addons-for-gutenberg")},boxShadowBlur:{value:w,label:"boxShadowBlur",title:Object(o.__)("Blur","ultimate-addons-for-gutenberg")},boxShadowSpread:{value:L,label:"boxShadowSpread",title:Object(o.__)("Spread","ultimate-addons-for-gutenberg")},boxShadowPosition:{value:M,label:"boxShadowPosition",title:Object(o.__)("Position","ultimate-addons-for-gutenberg")}})),"input"===I?r.a.createElement(v.PanelBody,{title:Object(o.__)("Icon","ultimate-addons-for-gutenberg"),initialOpen:!1,className:"uagb__url-panel-body"},r.a.createElement(r.a.Fragment,null,r.a.createElement(p.a,{label:Object(o.__)("Size","ultimate-addons-for-gutenberg"),setAttributes:y,value:X,onChange:function(e){y({iconSize:e})},min:0,max:500,unit:{value:Ge,label:"iconSizeType"}}),r.a.createElement(f.a,{label:Object(o.__)("Color","ultimate-addons-for-gutenberg"),colorValue:Q||"",onColorChange:function(e){return y({iconColor:e})}}))):"",(b=r.a.createElement(r.a.Fragment,null,r.a.createElement(f.a,{label:Object(o.__)("Background Color","ultimate-addons-for-gutenberg"),colorValue:A||"",onColorChange:function(e){return y({buttonBgColor:e})}}),"text"===de&&r.a.createElement(f.a,{label:Object(o.__)("Text Color","ultimate-addons-for-gutenberg"),colorValue:Fe||"",onColorChange:function(e){return y({buttonTextColor:e})}}),"icon"===de&&r.a.createElement(f.a,{label:Object(o.__)("Icon Color","ultimate-addons-for-gutenberg"),colorValue:U||"",onColorChange:function(e){return y({buttonIconColor:e})}})),T=r.a.createElement(r.a.Fragment,null,r.a.createElement(f.a,{label:Object(o.__)("Background Color","ultimate-addons-for-gutenberg"),colorValue:D||"",onColorChange:function(e){return y({buttonBgHoverColor:e})}}),"text"===de&&r.a.createElement(f.a,{label:Object(o.__)("Text Color","ultimate-addons-for-gutenberg"),colorValue:xe||"",onColorChange:function(e){return y({buttonTextHoverColor:e})}}),"icon"===de&&r.a.createElement(f.a,{label:Object(o.__)("Icon Color","ultimate-addons-for-gutenberg"),colorValue:G||"",onColorChange:function(e){return y({buttonIconHoverColor:e})}})),"input-button"===I?r.a.createElement(v.PanelBody,{title:Object(o.__)("Button","ultimate-addons-for-gutenberg"),initialOpen:!1,className:"uagb__url-panel-body"},r.a.createElement(p.a,{label:Object(o.__)("Width","ultimate-addons-for-gutenberg"),setAttributes:y,value:N,onChange:function(e){y({buttonWidth:e})},min:0,max:500,unit:{value:J,label:"buttonWidthType"}}),r.a.createElement(n.a,{label:Object(o.__)("Typography","ultimate-addons-for-gutenberg"),attributes:C,setAttributes:y,loadGoogleFonts:{value:pe,label:"buttonloadGoogleFonts"},fontFamily:{value:ce,label:"buttonFontFamily"},fontWeight:{value:me,label:"buttonFontWeight"},fontSubset:{value:se,label:"buttonFontSubset"},fontSizeType:{value:ve,label:"buttonFontSizeType"},fontSize:{value:fe,label:"buttonFontSize"},fontSizeMobile:{value:_e,label:"buttonFontSizeMobile"},fontSizeTablet:{value:he,label:"buttonFontSizeTablet"},lineHeightType:{value:Se,label:"buttonLineHeightType"},lineHeight:{value:Te,label:"buttonLineHeight"},lineHeightMobile:{value:Ie,label:"buttonLineHeightMobile"},lineHeightTablet:{value:Ce,label:"buttonLineHeightTablet"},transform:{value:ye,label:"buttonTransform"},decoration:{value:Oe,label:"buttonDecoration"}}),"icon"===de&&r.a.createElement(r.a.Fragment,null,r.a.createElement(p.a,{label:Object(o.__)("Icon Size","ultimate-addons-for-gutenberg"),setAttributes:y,value:q,onChange:function(e){y({buttonIconSize:e})},min:0,max:500,unit:{value:K,label:"buttonIconSizeType"}})),r.a.createElement(c.a,{tabs:[{name:"normal",title:Object(o.__)("Normal","ultimate-addons-for-gutenberg")},{name:"hover",title:Object(o.__)("Hover","ultimate-addons-for-gutenberg")}],normal:b,hover:T,disableBottomSeparator:!0})):"")),r.a.createElement(s.b,s.a.advance))),t,a)};t.default=r.a.memo(T)}}]);