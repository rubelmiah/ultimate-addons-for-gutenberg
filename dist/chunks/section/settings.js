(window.webpackJsonp_ultimate_addons_for_gutenberg=window.webpackJsonp_ultimate_addons_for_gutenberg||[]).push([[87],{506:function(e,a,t){"use strict";t.r(a);var l=t(1),o=t.n(l),n=t(2),r=t(10),i=t(97),b=t(96),d=t(60),u=t(98),g=t(16),c=t(131),v=t(103),m=t(5),s=t(3);function f(){return(f=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var l in t)Object.prototype.hasOwnProperty.call(t,l)&&(e[l]=t[l])}return e}).apply(this,arguments)}var p=function(e){var a=e=e.parentProps,t=a.attributes,p=a.setAttributes,h=a.deviceType,_=t.align,T=t.contentWidth,k=t.width,M=t.widthUnit,O=t.innerWidth,y=t.innerWidthType,P=t.tag,j=t.themeWidth,S=t.leftPadding,w=t.rightPadding,C=t.topPadding,x=t.bottomPadding,E=t.leftMargin,B=t.rightMargin,V=t.topMargin,W=t.bottomMargin,R=t.topPaddingTablet,A=t.bottomPaddingTablet,L=t.leftPaddingTablet,I=t.rightPaddingTablet,H=t.topMarginTablet,U=t.bottomMarginTablet,z=t.leftMarginTablet,F=t.rightMarginTablet,J=t.topPaddingMobile,G=t.bottomPaddingMobile,q=t.leftPaddingMobile,D=t.rightPaddingMobile,K=t.topMarginMobile,N=t.bottomMarginMobile,Q=t.leftMarginMobile,X=t.rightMarginMobile,Y=t.backgroundType,Z=t.backgroundImage,$=t.backgroundVideo,ee=t.backgroundColor,ae=t.backgroundPosition,te=t.backgroundAttachment,le=t.backgroundRepeat,oe=t.backgroundSize,ne=t.backgroundOpacity,re=t.backgroundVideoColor,ie=t.backgroundVideoOpacity,be=t.backgroundImageColor,de=t.overlayType,ue=t.borderStyle,ge=t.borderWidth,ce=t.borderRadius,ve=t.borderColor,me=t.borderHoverColor,se=t.mobileMarginType,fe=t.tabletMarginType,pe=t.desktopMarginType,he=t.mobilePaddingType,_e=t.tabletPaddingType,Te=t.desktopPaddingType,ke=t.boxShadowColor,Me=t.boxShadowHOffset,Oe=t.boxShadowVOffset,ye=t.boxShadowBlur,Pe=t.boxShadowSpread,je=t.boxShadowPosition,Se=t.spacingLink,we=t.gradientValue,Ce=["left","center","right"];return"full_width"==T&&(Ce=["wide","full"]),o.a.createElement(l.Suspense,{fallback:Object(r.a)()},o.a.createElement(m.BlockControls,null,o.a.createElement(m.BlockAlignmentToolbar,{value:_,onChange:function(e){p({align:e})},controls:Ce})),o.a.createElement(m.InspectorControls,null,o.a.createElement(b.a,{tabs:["general","advance"]},o.a.createElement(d.a,{key:"general"},o.a.createElement(s.PanelBody,{title:Object(n.__)("Layout","ultimate-addons-for-gutenberg"),initialOpen:!1},o.a.createElement(s.SelectControl,{label:Object(n.__)("Content Width","ultimate-addons-for-gutenberg"),value:T,onChange:function(e){return p({contentWidth:e})},options:[{value:"boxed",label:Object(n.__)("Boxed","ultimate-addons-for-gutenberg")},{value:"full_width",label:Object(n.__)("Full Width","ultimate-addons-for-gutenberg")}]}),"boxed"==T&&o.a.createElement(g.a,{label:Object(n.__)("Width","ultimate-addons-for-gutenberg"),setAttributes:p,value:k,onChange:function(e){return p({width:e})},min:0,max:2e3,unit:{value:M,label:"widthUnit"},units:[{name:Object(n.__)("Pixel","ultimate-addons-for-gutenberg"),unitValue:"px"},{name:Object(n.__)("Em","ultimate-addons-for-gutenberg"),unitValue:"em"},{name:Object(n.__)("%","ultimate-addons-for-gutenberg"),unitValue:"%"}]}),"boxed"!==T&&o.a.createElement(s.ToggleControl,{label:Object(n.__)("Inherit Inner Width from Theme","ultimate-addons-for-gutenberg"),checked:j,onChange:function(){return p({themeWidth:!j})}}),"boxed"!==T&&!j&&o.a.createElement(g.a,{label:Object(n.__)("Inner Width","ultimate-addons-for-gutenberg"),setAttributes:p,value:O,onChange:function(e){return p({innerWidth:e})},min:0,max:2e3,unit:{value:y,label:"innerWidthType"}}),o.a.createElement(s.SelectControl,{label:Object(n.__)("HTML Tag","ultimate-addons-for-gutenberg"),value:P,onChange:function(e){return p({tag:e})},options:[{value:"div",label:Object(n.__)("div","ultimate-addons-for-gutenberg")},{value:"header",label:Object(n.__)("header","ultimate-addons-for-gutenberg")},{value:"footer",label:Object(n.__)("footer","ultimate-addons-for-gutenberg")},{value:"main",label:Object(n.__)("main","ultimate-addons-for-gutenberg")},{value:"article",label:Object(n.__)("article","ultimate-addons-for-gutenberg")},{value:"section",label:Object(n.__)("section","ultimate-addons-for-gutenberg")},{value:"aside",label:Object(n.__)("aside","ultimate-addons-for-gutenberg")},{value:"nav",label:Object(n.__)("nav","ultimate-addons-for-gutenberg")}]})),o.a.createElement(s.PanelBody,{title:"Spacing",initialOpen:!1},o.a.createElement(u.a,f({},e,{label:Object(n.__)("Padding","ultimate-addons-for-gutenberg"),valueTop:{value:C,label:"topPadding"},valueRight:{value:w,label:"rightPadding"},valueBottom:{value:x,label:"bottomPadding"},valueLeft:{value:S,label:"leftPadding"},valueTopTablet:{value:R,label:"topPaddingTablet"},valueRightTablet:{value:I,label:"rightPaddingTablet"},valueBottomTablet:{value:A,label:"bottomPaddingTablet"},valueLeftTablet:{value:L,label:"leftPaddingTablet"},valueTopMobile:{value:J,label:"topPaddingMobile"},valueRightMobile:{value:D,label:"rightPaddingMobile"},valueBottomMobile:{value:G,label:"bottomPaddingMobile"},valueLeftMobile:{value:q,label:"leftPaddingMobile"},unit:{value:Te,label:"desktopPaddingType"},mUnit:{value:he,label:"mobilePaddingType"},tUnit:{value:_e,label:"tabletPaddingType"},deviceType:h,attributes:t,setAttributes:p,link:{value:Se,label:"spacingLink"}})),o.a.createElement(u.a,f({},e,{label:Object(n.__)("Margin","ultimate-addons-for-gutenberg"),valueTop:{value:V,label:"topMargin"},valueRight:{value:B,label:"rightMargin"},valueBottom:{value:W,label:"bottomMargin"},valueLeft:{value:E,label:"leftMargin"},valueTopTablet:{value:H,label:"topMarginTablet"},valueRightTablet:{value:F,label:"rightMarginTablet"},valueBottomTablet:{value:U,label:"bottomMarginTablet"},valueLeftTablet:{value:z,label:"leftMarginTablet"},valueTopMobile:{value:K,label:"topMarginMobile"},valueRightMobile:{value:X,label:"rightMarginMobile"},valueBottomMobile:{value:N,label:"bottomMarginMobile"},valueLeftMobile:{value:Q,label:"leftMarginMobile"},unit:{value:pe,label:"desktopMarginType"},mUnit:{value:se,label:"mobileMarginType"},tUnit:{value:fe,label:"tabletMarginType"},deviceType:h,attributes:t,setAttributes:p,link:{value:Se,label:"spacingLink"}}))),o.a.createElement(o.a.Fragment,null,o.a.createElement(s.PanelBody,{title:Object(n.__)("Border","ultimate-addons-for-gutenberg"),initialOpen:!1},o.a.createElement(v.a,{setAttributes:p,borderStyle:{value:ue,label:"borderStyle",title:Object(n.__)("Style","ultimate-addons-for-gutenberg")},borderWidth:{value:ge,label:"borderWidth",title:Object(n.__)("Width","ultimate-addons-for-gutenberg")},borderRadius:{value:ce,label:"borderRadius",title:Object(n.__)("Radius","ultimate-addons-for-gutenberg")},borderColor:{value:ve,label:"borderColor",title:Object(n.__)("Color","ultimate-addons-for-gutenberg")},borderHoverColor:{value:me,label:"borderHoverColor",title:Object(n.__)("Hover Color","ultimate-addons-for-gutenberg")}})),o.a.createElement(s.PanelBody,{title:"Box Shadow",initialOpen:!1},o.a.createElement(i.a,{setAttributes:p,label:Object(n.__)("Box Shadow","ultimate-addons-for-gutenberg"),boxShadowColor:{value:ke,label:"boxShadowColor",title:Object(n.__)("Color","ultimate-addons-for-gutenberg")},boxShadowHOffset:{value:Me,label:"boxShadowHOffset",title:Object(n.__)("Horizontal","ultimate-addons-for-gutenberg")},boxShadowVOffset:{value:Oe,label:"boxShadowVOffset",title:Object(n.__)("Vertical","ultimate-addons-for-gutenberg")},boxShadowBlur:{value:ye,label:"boxShadowBlur",title:Object(n.__)("Blur","ultimate-addons-for-gutenberg")},boxShadowSpread:{value:Pe,label:"boxShadowSpread",title:Object(n.__)("Spread","ultimate-addons-for-gutenberg")},boxShadowPosition:{value:je,label:"boxShadowPosition",title:Object(n.__)("Position","ultimate-addons-for-gutenberg")}}))),o.a.createElement(s.PanelBody,{title:Object(n.__)("Background","ultimate-addons-for-gutenberg"),initialOpen:!1},o.a.createElement(c.a,f({setAttributes:p,backgroundGradient:{value:we,label:"gradientValue"},backgroundImageColor:{value:be,label:"backgroundImageColor"},overlayType:{value:de,label:"overlayType"},backgroundSize:{value:oe,label:"backgroundSize"},backgroundRepeat:{value:le,label:"backgroundRepeat"},backgroundAttachment:{value:te,label:"backgroundAttachment"},backgroundPosition:{value:ae,label:"backgroundPosition"},backgroundImage:{value:Z,label:"backgroundImage"},backgroundColor:{value:ee,label:"backgroundColor"},backgroundType:{value:Y,label:"backgroundType"},backgroundOpacity:{value:ne,label:"backgroundOpacity"},backgroundVideoType:{value:!0},backgroundVideo:{value:$,label:"backgroundVideo"},backgroundVideoColor:{value:re,label:"backgroundVideoColor"},backgroundVideoOpacity:{value:ie,label:"backgroundVideoOpacity"}},e)))),o.a.createElement(d.a,{key:"advance"}))))};a.default=o.a.memo(p)}}]);