(window.webpackJsonp_ultimate_addons_for_gutenberg=window.webpackJsonp_ultimate_addons_for_gutenberg||[]).push([[51],{375:function(e,a,t){"use strict";t.r(a);var l=t(1),n=t(0),o=t.n(n),i=t(10),r=t(77),u=t(51),b=t(14),g=t(81),d=t(83),m=t(79),c=t(15),s=t(78),p=t(76),v=t(52),f=t(30),y=t(3),h=t(4);function _(e,a){(null==a||a>e.length)&&(a=e.length);for(var t=0,l=new Array(a);t<a;t++)l[t]=e[t];return l}function T(){return(T=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var l in t)Object.prototype.hasOwnProperty.call(t,l)&&(e[l]=t[l])}return e}).apply(this,arguments)}var S=function(e){var a,t,S,O=e=e.parentProps,C=O.setAttributes,j=O.attributes,F=O.deviceType,E=j.test_item_count,L=j.test_block,k=j.headingAlign,z=j.companyColor,M=j.descColor,A=j.authorColor,B=j.nameFontSizeType,H=j.nameFontSize,w=j.nameFontSizeTablet,P=j.nameFontSizeMobile,R=j.nameFontFamily,I=j.nameFontWeight,U=j.nameFontSubset,G=j.nameLineHeightType,W=j.nameLineHeight,D=j.nameLineHeightTablet,x=j.nameLineHeightMobile,V=j.nameLoadGoogleFonts,N=j.companyFontSizeType,J=j.companyFontSize,q=j.companyFontSizeTablet,$=j.companyFontSizeMobile,K=j.companyFontFamily,Q=j.companyFontWeight,X=j.companyFontSubset,Y=j.companyLineHeightType,Z=j.companyLineHeight,ee=j.companyLineHeightTablet,ae=j.companyLineHeightMobile,te=j.companyLoadGoogleFonts,le=j.descFontSizeType,ne=j.descFontSize,oe=j.descFontSizeTablet,ie=j.descFontSizeMobile,re=j.descFontFamily,ue=j.descFontWeight,be=j.descFontSubset,ge=j.descLineHeightType,de=j.descLineHeight,me=j.descLineHeightTablet,ce=j.descLineHeightMobile,se=j.descLoadGoogleFonts,pe=j.descSpace,ve=j.iconimgStyle,fe=j.imagePosition,ye=j.imageAlignment,he=j.nameSpace,_e=(j.imgHrPadding,j.imgVrPadding,j.imageSize),Te=j.imageWidth,Se=j.columns,Oe=j.tcolumns,Ce=j.mcolumns,je=j.pauseOnHover,Fe=j.infiniteLoop,Ee=j.transitionSpeed,Le=j.arrowDots,ke=j.arrowSize,ze=j.arrowBorderSize,Me=j.arrowBorderRadius,Ae=j.autoplay,Be=j.autoplaySpeed,He=j.arrowColor,we=j.rowGap,Pe=j.columnGap,Re=(j.contentPadding,j.backgroundType),Ie=j.backgroundColor,Ue=j.backgroundImage,Ge=j.backgroundPosition,We=j.backgroundSize,De=j.backgroundRepeat,xe=j.backgroundImageColor,Ve=j.backgroundOpacity,Ne=j.borderStyle,Je=j.borderWidth,qe=j.borderRadius,$e=j.borderColor,Ke=j.stack,Qe=j.imageWidthType,Xe=j.arrowSizeType,Ye=j.rowGapType,Ze=j.columnGapType,ea=j.descSpaceType,aa=j.nameSpaceType,ta=j.borderHoverColor,la=j.overlayType,na=j.backgroundAttachment,oa=j.gradientValue,ia=j.descTransform,ra=j.descDecoration,ua=j.nameTransform,ba=j.nameDecoration,ga=j.companyTransform,da=j.companyDecoration,ma=j.paddingUnit,ca=j.mobilePaddingUnit,sa=j.tabletPaddingUnit,pa=j.paddingTop,va=j.paddingBottom,fa=j.paddingLeft,ya=j.paddingRight,ha=j.paddingTopTablet,_a=j.paddingRightTablet,Ta=j.paddingBottomTablet,Sa=j.paddingLeftTablet,Oa=j.paddingTopMobile,Ca=j.paddingRightMobile,ja=j.paddingBottomMobile,Fa=j.paddingLeftMobile,Ea=j.imgspacingLink,La=j.spacingLink,ka=j.imgpaddingTop,za=j.imgpaddingRight,Ma=j.imgpaddingBottom,Aa=j.imgpaddingLeft,Ba=j.imgpaddingTopTablet,Ha=j.imgpaddingRightTablet,wa=j.imgpaddingBottomTablet,Pa=j.imgpaddingLeftTablet,Ra=j.imgpaddingTopMobile,Ia=j.imgpaddingRightMobile,Ua=j.imgpaddingBottomMobile,Ga=j.imgpaddingLeftMobile,Wa=j.imgpaddingUnit,Da=j.imgmobilePaddingUnit,xa=j.imgtabletPaddingUnit;if(1==V){var Va={google:{families:[R+(I?":"+I:"")]}};a=o.a.createElement(u.a,{config:Va})}if(1==te){var Na={google:{families:[K+(Q?":"+Q:"")]}};t=o.a.createElement(u.a,{config:Na})}if(1==se){var Ja={google:{families:[re+(ue?":"+ue:"")]}};S=o.a.createElement(u.a,{config:Ja})}var qa=function(e){var a=L.map((function(a,t){return e===t&&(a.image=null),a}));C({test_block:a})},$a=[{value:"thumbnail",label:Object(l.__)("Thumbnail","ultimate-addons-for-gutenberg")},{value:"medium",label:Object(l.__)("Medium","ultimate-addons-for-gutenberg")},{value:"full",label:Object(l.__)("Large","ultimate-addons-for-gutenberg")}],Ka=function(e){var a=null;return L[e]&&void 0!==L[e]&&(a=L[e].image),e+=1,o.a.createElement(v.a,{label:"Image "+e,onSelectImage:function(){return qa(a)},backgroundImage:a,onRemoveImage:a&&null!==L[e].image.url&&""!==L[e].image.url&&qa(e)})},Qa=0;return L.map((function(e,a){var t=L[a];if(t&&void 0!==t){var l=t.image;null!=l&&""!==l&&Qa++}})),o.a.createElement(n.Suspense,{fallback:Object(i.a)()},o.a.createElement(y.BlockControls,{key:"controls"},o.a.createElement(y.AlignmentToolbar,{value:k,onChange:function(e){return C({headingAlign:e})}})),o.a.createElement(y.InspectorControls,null,o.a.createElement(p.a,null,o.a.createElement(f.b,f.a.general,o.a.createElement(h.PanelBody,{title:Object(l.__)("General"),initialOpen:!0},o.a.createElement(b.a,{label:Object(l.__)("Number of Testimonials","ultimate-addons-for-gutenberg"),value:E,onChange:function(e){var a,t=function(e){if(Array.isArray(e))return _(e)}(a=L)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(a)||function(e,a){if(e){if("string"==typeof e)return _(e,void 0);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?_(e,void 0):void 0}}(a)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}();if(t.length<e){for(var l=Math.abs(e-t.length),n=0;n<l;n++)t.push({description:"I have been working with these guys since years now! With lots of hard work and timely communication they made sure they delivered the best to me. Highly recommended!",name:"John Doe",company:"Company"+(t.length+1),image:""});C({test_block:t})}else{for(var o=Math.abs(e-t.length),i=t,r=0;r<o;r++)i.pop();C({test_block:i})}C({test_item_count:e})},min:0,max:50,setAttributes:C,displayUnit:!1}),o.a.createElement(g.a,{label:Object(l.__)("Columns","ultimate-addons-for-gutenberg"),data:{desktop:{value:Se,label:"columns"},tablet:{value:Oe,label:"tcolumns"},mobile:{value:Ce,label:"mcolumns"}},min:1,max:E,displayUnit:!1,setAttributes:C})),o.a.createElement(h.PanelBody,{title:Object(l.__)("Image","ultimate-addons-for-gutenberg"),initialOpen:!1},function(){for(var e=[],a=0;a<E;a++)e.push(Ka(a));return e}(),Qa>0&&o.a.createElement(o.a.Fragment,null,o.a.createElement(h.SelectControl,{label:Object(l.__)("Image Position"),value:fe,onChange:function(e){return C({imagePosition:e})},options:[{value:"top",label:Object(l.__)("Top","ultimate-addons-for-gutenberg")},{value:"bottom",label:Object(l.__)("Bottom","ultimate-addons-for-gutenberg")},{value:"left",label:Object(l.__)("Left","ultimate-addons-for-gutenberg")},{value:"right",label:Object(l.__)("Right","ultimate-addons-for-gutenberg")}]}),("left"==fe||"right"==fe)&&o.a.createElement(o.a.Fragment,null,o.a.createElement(h.SelectControl,{label:Object(l.__)("Vertical ALignment","ultimate-addons-for-gutenberg"),value:ye,onChange:function(e){return C({imageAlignment:e})},options:[{value:"top",label:Object(l.__)("Top","ultimate-addons-for-gutenberg")},{value:"middle",label:Object(l.__)("Middle","ultimate-addons-for-gutenberg")}]}),o.a.createElement(h.SelectControl,{label:Object(l.__)("Stack on","ultimate-addons-for-gutenberg"),value:Ke,options:[{value:"none",label:Object(l.__)("None","ultimate-addons-for-gutenberg")},{value:"tablet",label:Object(l.__)("Tablet","ultimate-addons-for-gutenberg")},{value:"mobile",label:Object(l.__)("Mobile","ultimate-addons-for-gutenberg")}],help:Object(l.__)("Note: Choose on what breakpoint the Info Box will stack.","ultimate-addons-for-gutenberg"),onChange:function(e){return C({stack:e})}})),o.a.createElement(h.SelectControl,{label:Object(l.__)("Image Style","ultimate-addons-for-gutenberg"),value:ve,onChange:function(e){return C({iconimgStyle:e})},options:[{value:"normal",label:Object(l.__)("Normal","ultimate-addons-for-gutenberg")},{value:"circle",label:Object(l.__)("Circle","ultimate-addons-for-gutenberg")},{value:"square",label:Object(l.__)("Square","ultimate-addons-for-gutenberg")}]}),o.a.createElement(h.SelectControl,{label:Object(l.__)("Image Size","ultimate-addons-for-gutenberg"),options:$a,value:_e,onChange:function(e){return C({imageSize:e})}}),o.a.createElement(b.a,{label:Object(l.__)("Width","ultimate-addons-for-gutenberg"),setAttributes:C,value:Te,onChange:function(e){return C({imageWidth:e})},min:0,max:500,unit:{value:Qe,label:"imageWidthType"}}))),o.a.createElement(h.PanelBody,{title:Object(l.__)("Carousel","ultimate-addons-for-gutenberg"),initialOpen:!1},o.a.createElement(h.ToggleControl,{label:Object(l.__)("Pause On Hover","ultimate-addons-for-gutenberg"),checked:je,onChange:function(){C({pauseOnHover:!je})}}),o.a.createElement(h.ToggleControl,{label:Object(l.__)("Autoplay"),checked:Ae,onChange:function(){C({autoplay:!Ae})}}),1==Ae&&o.a.createElement(b.a,{label:Object(l.__)("Autoplay Speed (ms)","ultimate-addons-for-gutenberg"),setAttributes:C,value:Be,onChange:function(e){return C({autoplaySpeed:e})},min:100,max:1e4,displayUnit:!1}),o.a.createElement(h.ToggleControl,{label:Object(l.__)("Infinite Loop","ultimate-addons-for-gutenberg"),checked:Fe,onChange:function(){C({infiniteLoop:!Fe})}}),o.a.createElement(b.a,{label:Object(l.__)("Transition Speed (ms)","ultimate-addons-for-gutenberg"),setAttributes:C,value:Ee,onChange:function(e){return C({transitionSpeed:e})},min:100,max:5e3,displayUnit:!1}),o.a.createElement(h.SelectControl,{label:Object(l.__)("Show Arrows & Dots","ultimate-addons-for-gutenberg"),value:Le,onChange:function(e){return C({arrowDots:e})},options:[{value:"arrows",label:Object(l.__)("Only Arrows","ultimate-addons-for-gutenberg")},{value:"dots",label:Object(l.__)("Only Dots","ultimate-addons-for-gutenberg")},{value:"arrows_dots",label:Object(l.__)("Both Arrows & Dots","ultimate-addons-for-gutenberg")}]}))),o.a.createElement(f.b,f.a.style,o.a.createElement(h.PanelBody,{title:Object(l.__)("Name","ultimate-addons-for-gutenberg"),initialOpen:!1},o.a.createElement(r.a,{label:Object(l.__)("Typography","ultimate-addons-for-gutenberg"),attributes:j,setAttributes:C,loadGoogleFonts:{value:V,label:"nameLoadGoogleFonts"},fontFamily:{value:R,label:"nameFontFamily"},fontWeight:{value:I,label:"nameFontWeight"},fontSubset:{value:U,label:"nameFontSubset"},fontSizeType:{value:B,label:"nameFontSizeType"},fontSize:{value:H,label:"nameFontSize"},fontSizeMobile:{value:P,label:"nameFontSizeMobile"},fontSizeTablet:{value:w,label:"nameFontSizeTablet"},lineHeightType:{value:G,label:"nameLineHeightType"},lineHeight:{value:W,label:"nameLineHeight"},lineHeightMobile:{value:x,label:"nameLineHeightMobile"},lineHeightTablet:{value:D,label:"nameLineHeightTablet"},transform:{value:ua,label:"nameTransform"},decoration:{value:ba,label:"nameDecoration"}}),o.a.createElement(c.a,{label:Object(l.__)("Color","ultimate-addons-for-gutenberg"),colorValue:A||"",onColorChange:function(e){return C({authorColor:e})}}),o.a.createElement(b.a,{label:Object(l.__)("Bottom Margin","ultimate-addons-for-gutenberg"),value:he,onChange:function(e){return C({nameSpace:e})},min:0,max:50,unit:{value:aa,label:"nameSpaceType"},setAttributes:C})),o.a.createElement(h.PanelBody,{title:Object(l.__)("Content","ultimate-addons-for-gutenberg"),initialOpen:!1},o.a.createElement(c.a,{label:Object(l.__)("Color","ultimate-addons-for-gutenberg"),colorValue:M||"",onColorChange:function(e){return C({descColor:e})}}),o.a.createElement(b.a,{label:Object(l.__)("Bottom Margin","ultimate-addons-for-gutenberg"),value:pe,onChange:function(e){return C({descSpace:e})},min:0,max:50,unit:{value:ea,label:"descSpaceType"},setAttributes:C}),o.a.createElement(b.a,{label:Object(l.__)("Column Gap","ultimate-addons-for-gutenberg"),value:Pe,onChange:function(e){return C({columnGap:e})},min:0,max:50,unit:{value:Ze,label:"columnGapType"},setAttributes:C}),o.a.createElement(r.a,{label:Object(l.__)("Typography","ultimate-addons-for-gutenberg"),attributes:j,setAttributes:C,loadGoogleFonts:{value:se,label:"descLoadGoogleFonts"},fontFamily:{value:re,label:"descFontFamily"},fontWeight:{value:ue,label:"descFontWeight"},fontSubset:{value:be,label:"descFontSubset"},fontSizeType:{value:le,label:"descFontSizeType"},fontSize:{value:ne,label:"descFontSize"},fontSizeMobile:{value:ie,label:"descFontSizeMobile"},fontSizeTablet:{value:oe,label:"descFontSizeTablet"},lineHeightType:{value:ge,label:"descLineHeightType"},lineHeight:{value:de,label:"descLineHeight"},lineHeightMobile:{value:ce,label:"descLineHeightMobile"},lineHeightTablet:{value:me,label:"descLineHeightTablet"},transform:{value:ia,label:"descTransform"},decoration:{value:ra,label:"descDecoration"}}),o.a.createElement(s.a,T({},e,{label:Object(l.__)("Padding","ultimate-addons-for-gutenberg"),valueTop:{value:pa,label:"paddingTop"},valueRight:{value:ya,label:"paddingRight"},valueBottom:{value:va,label:"paddingBottom"},valueLeft:{value:fa,label:"paddingLeft"},valueTopTablet:{value:ha,label:"paddingTopTablet"},valueRightTablet:{value:_a,label:"paddingRightTablet"},valueBottomTablet:{value:Ta,label:"paddingBottomTablet"},valueLeftTablet:{value:Sa,label:"paddingLeftTablet"},valueTopMobile:{value:Oa,label:"paddingTopMobile"},valueRightMobile:{value:Ca,label:"paddingRightMobile"},valueBottomMobile:{value:ja,label:"paddingBottomMobile"},valueLeftMobile:{value:Fa,label:"paddingLeftMobile"},unit:{value:ma,label:"paddingUnit"},mUnit:{value:ca,label:"mobilePaddingUnit"},tUnit:{value:sa,label:"tabletPaddingUnit"},deviceType:F,attributes:j,setAttributes:C,link:{value:La,label:"spacingLink"}}))),o.a.createElement(h.PanelBody,{title:Object(l.__)("Company","ultimate-addons-for-gutenberg"),initialOpen:!1},o.a.createElement(c.a,{label:Object(l.__)("Company Color","ultimate-addons-for-gutenberg"),colorValue:z||"",onColorChange:function(e){return C({companyColor:e})}}),o.a.createElement(r.a,{label:Object(l.__)("Company Typography","ultimate-addons-for-gutenberg"),attributes:j,setAttributes:C,loadGoogleFonts:{value:te,label:"companyLoadGoogleFonts"},fontFamily:{value:K,label:"companyFontFamily"},fontWeight:{value:Q,label:"companyFontWeight"},fontSubset:{value:X,label:"companyFontSubset"},fontSizeType:{value:N,label:"companyFontSizeType"},fontSize:{value:J,label:"companyFontSize"},fontSizeMobile:{value:$,label:"companyFontSizeMobile"},fontSizeTablet:{value:q,label:"companyFontSizeTablet"},lineHeightType:{value:Y,label:"companyLineHeightType"},lineHeight:{value:Z,label:"companyLineHeight"},lineHeightMobile:{value:ae,label:"companyLineHeightMobile"},lineHeightTablet:{value:ee,label:"companyLineHeightTablet"},transform:{value:ga,label:"companyTransform"},decoration:{value:da,label:"companyDecoration"}})),o.a.createElement(h.PanelBody,{title:Object(l.__)("Image","ultimate-addons-for-gutenberg"),initialOpen:!1},o.a.createElement(s.a,T({},e,{label:Object(l.__)("Image Padding","ultimate-addons-for-gutenberg"),valueTop:{value:ka,label:"imgpaddingTop"},valueRight:{value:za,label:"imgpaddingRight"},valueBottom:{value:Ma,label:"imgpaddingBottom"},valueLeft:{value:Aa,label:"imgpaddingLeft"},valueTopTablet:{value:Ba,label:"imgpaddingTopTablet"},valueRightTablet:{value:Ha,label:"imgpaddingRightTablet"},valueBottomTablet:{value:wa,label:"imgpaddingBottomTablet"},valueLeftTablet:{value:Pa,label:"imgpaddingLeftTablet"},valueTopMobile:{value:Ra,label:"imgpaddingTopMobile"},valueRightMobile:{value:Ia,label:"imgpaddingRightMobile"},valueBottomMobile:{value:Ua,label:"imgpaddingBottomMobile"},valueLeftMobile:{value:Ga,label:"imgpaddingLeftMobile"},unit:{value:Wa,label:"imgpaddingUnit"},mUnit:{value:Da,label:"imgmobilePaddingUnit"},tUnit:{value:xa,label:"imgtabletPaddingUnit"},deviceType:F,attributes:j,setAttributes:C,link:{value:Ea,label:"imgspacingLink"}}))),o.a.createElement(h.PanelBody,{title:Object(l.__)("Arrow & Dots","ultimate-addons-for-gutenberg"),initialOpen:!1},"dots"!=Le&&o.a.createElement(o.a.Fragment,null,o.a.createElement(b.a,{label:Object(l.__)("Arrow Size","ultimate-addons-for-gutenberg"),setAttributes:C,value:ke,onChange:function(e){return C({arrowSize:e})},min:0,max:50,unit:{value:Xe,label:"arrowSizeType"}}),o.a.createElement(b.a,{label:Object(l.__)("Arrow Border Size","ultimate-addons-for-gutenberg"),setAttributes:C,value:ze,onChange:function(e){return C({arrowBorderSize:e})},min:0,max:50,displayUnit:!1}),o.a.createElement(b.a,{label:Object(l.__)("Arrow Border Radius","ultimate-addons-for-gutenberg"),setAttributes:C,value:Me,onChange:function(e){return C({arrowBorderRadius:e})},min:0,max:50,displayUnit:!1})),o.a.createElement(b.a,{label:Object(l.__)("Gap Between Content & Dots","ultimate-addons-for-gutenberg"),value:we,setAttributes:C,onChange:function(e){return C({rowGap:e})},min:0,max:50,unit:{value:Ye,label:"rowGapType"}}),o.a.createElement(c.a,{label:Object(l.__)("Color","ultimate-addons-for-gutenberg"),colorValue:He||"",onColorChange:function(e){return C({arrowColor:e})}})),o.a.createElement(h.PanelBody,{title:Object(l.__)("Border","ultimate-addons-for-gutenberg"),initialOpen:!1},o.a.createElement(m.a,{setAttributes:C,borderStyle:{value:Ne,label:"borderStyle",title:Object(l.__)("Border Style","ultimate-addons-for-gutenberg")},borderWidth:{value:Je,label:"borderWidth",title:Object(l.__)("Width","ultimate-addons-for-gutenberg")},borderRadius:{value:qe,label:"borderRadius",title:Object(l.__)("Radius","ultimate-addons-for-gutenberg")},borderColor:{value:$e,label:"borderColor",title:Object(l.__)("Color","ultimate-addons-for-gutenberg")},borderHoverColor:{value:ta,label:"borderHoverColor",title:Object(l.__)("Hover Color","ultimate-addons-for-gutenberg")},disableBottomSeparator:!0})),o.a.createElement(h.PanelBody,{title:Object(l.__)("Background","ultimate-addons-for-gutenberg"),initialOpen:!1},o.a.createElement(d.a,T({setAttributes:C,backgroundGradient:{value:oa,label:"gradientValue"},backgroundImageColor:{value:xe,label:"backgroundImageColor"},overlayType:{value:la,label:"overlayType"},backgroundSize:{value:We,label:"backgroundSize"},backgroundRepeat:{value:De,label:"backgroundRepeat"},backgroundAttachment:{value:na,label:"backgroundAttachment"},backgroundPosition:{value:Ge,label:"backgroundPosition"},backgroundImage:{value:Ue,label:"backgroundImage"},backgroundColor:{value:Ie,label:"backgroundColor"},backgroundType:{value:Re,label:"backgroundType"},backgroundOpacity:{value:Ve,label:"backgroundOpacity"},backgroundVideoType:{value:!1}},e)))),o.a.createElement(f.b,f.a.advance))),a,t,S)};a.default=o.a.memo(S)}}]);