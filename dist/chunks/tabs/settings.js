(window.webpackJsonp_ultimate_addons_for_gutenberg=window.webpackJsonp_ultimate_addons_for_gutenberg||[]).push([[96],{363:function(e,t,a){"use strict";var l=a(15),o=a.n(l)()((function(e){return e[1]}));o.push([e.i,".uagb-responsive-select-control .uagb-size-type-field-tabs .components-tab-panel__tabs {\n  padding-right: 0; }\n",""]),t.a=o},562:function(e,t,a){"use strict";a.r(t);var l,o=a(95),i=a.n(o),n=a(12),b=a(18),r=a(14),u=a.n(r),d=a(363),g=0,c={injectType:"lazySingletonStyleTag",attributes:{id:"uagb-editor-styles"},insert:"head",singleton:!0},s={};s.locals=d.a.locals||{},s.use=function(){return g++||(l=u()(d.a,c)),s},s.unuse=function(){g>0&&!--g&&(l(),l=null)};var v=s,m=a(1),T=a.n(m),f=a(2),y=a(3),_=a(9);function p(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var M=function(e){Object(m.useLayoutEffect)((function(){return v.use(),function(){v.unuse()}}),[]);var t=e.label,a=e.data,l=e.setAttributes,o=e.options,i=Object(_.useSelect)((function(e){return e("core/edit-post").__experimentalGetPreviewDeviceType()}),[]),n=Object(_.useDispatch)("core/edit-post").__experimentalSetPreviewDeviceType,b=[{name:"Desktop",title:T.a.createElement(y.Dashicon,{icon:"desktop"}),itemClass:"uagb-desktop-tab uagb-responsive-tabs"},{name:"Tablet",title:T.a.createElement(y.Dashicon,{icon:"tablet"}),itemClass:"uagb-tablet-tab uagb-responsive-tabs"},{name:"Mobile",key:"mobile",title:T.a.createElement(y.Dashicon,{icon:"smartphone"}),itemClass:"uagb-mobile-tab uagb-responsive-tabs"}],r={};return r.Desktop=T.a.createElement(y.SelectControl,{value:a.desktop.value,onChange:function(e){return l(p({},a.desktop.label,e))},options:o.desktop}),r.Tablet=T.a.createElement(y.SelectControl,{value:a.tablet.value,onChange:function(e){return l(p({},a.tablet.label,e))},options:o.tablet||o.desktop}),r.Mobile=T.a.createElement(y.SelectControl,{value:a.mobile.value,onChange:function(e){return l(p({},a.mobile.label,e))},options:o.mobile||o.desktop}),T.a.createElement("div",{className:"components-base-control uagb-responsive-select-control"},T.a.createElement("div",{className:"uagb-control__header"},t&&T.a.createElement("p",{className:"uagb-control__label"},t),T.a.createElement("div",{className:"uagb-control__actions"},T.a.createElement("div",{className:"uagb-size-type-field-tabs"},T.a.createElement(y.ButtonGroup,{className:"components-tab-panel__tabs","aria-label":Object(f.__)("Device","ultimate-addons-for-gutenberg")},b.map((function(e){var t=e.name,a=e.key,l=e.title,o=e.itemClass;return T.a.createElement(y.Button,{key:a,className:"components-button components-tab-panel__tabs-item ".concat(o).concat(t===i?" active-tab":""),"aria-pressed":i===t,onClick:function(){n(t)}},l)})))))),r[i]?r[i]:r.Desktop)},B=a(57),h=a(17),O=a(98),j=a(16),S=a(103),P=a(96),C=a(61),L=a(5);function E(){return(E=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var l in a)Object.prototype.hasOwnProperty.call(a,l)&&(e[l]=a[l])}return e}).apply(this,arguments)}var k=function(e){var t,a=e=e.parentProps,l=a.attributes,o=a.setAttributes,r=(a.deviceType,l.tabsStyleD),u=l.tabsStyleM,d=l.tabsStyleT,g=l.tabActiveFrontend,c=l.tabHeaders,s=l.headerBgColor,v=l.borderStyle,m=l.borderWidth,_=l.borderRadius,p=l.borderColor,k=l.borderHoverColor,R=l.headerTextColor,U=l.activeTabBgColor,z=l.activeTabTextColor,H=l.bodyBgColor,A=l.bodyTextColor,F=l.tabTitleLeftMargin,V=l.tabTitleRightMargin,I=l.tabTitleTopMargin,w=l.tabTitleBottomMargin,x=l.tabTitleLeftMarginTablet,D=l.tabTitleRightMarginTablet,N=l.tabTitleTopMarginTablet,W=l.tabTitleBottomMarginTablet,G=l.tabTitleLeftMarginMobile,J=l.tabTitleRightMarginMobile,q=l.tabTitleTopMarginMobile,K=l.tabTitleBottomMarginMobile,Q=l.tabTitleMarginUnit,X=l.mobiletabTitleMarginUnit,Y=l.tablettabTitleMarginUnit,Z=l.tabTitleMarginLink,$=l.tabTitleTopPadding,ee=l.tabTitleRightPadding,te=l.tabTitleBottomPadding,ae=l.tabTitleLeftPadding,le=l.tabTitleTopPaddingTablet,oe=l.tabTitleRightPaddingTablet,ie=l.tabTitleBottomPaddingTablet,ne=l.tabTitleLeftPaddingTablet,be=l.tabTitleTopPaddingMobile,re=l.tabTitleRightPaddingMobile,ue=l.tabTitleBottomPaddingMobile,de=l.tabTitleLeftPaddingMobile,ge=l.tabTitlePaddingUnit,ce=l.mobiletabTitlePaddingUnit,se=l.tablettabTitlePaddingUnit,ve=l.tabTitlePaddingLink,me=l.tabBodyLeftMargin,Te=l.tabBodyRightMargin,fe=l.tabBodyTopMargin,ye=l.tabBodyBottomMargin,_e=l.tabBodyLeftMarginTablet,pe=l.tabBodyRightMarginTablet,Me=l.tabBodyTopMarginTablet,Be=l.tabBodyBottomMarginTablet,he=l.tabBodyLeftMarginMobile,Oe=l.tabBodyRightMarginMobile,je=l.tabBodyTopMarginMobile,Se=l.tabBodyBottomMarginMobile,Pe=l.tabBodyMarginUnit,Ce=l.mobiletabBodyMarginUnit,Le=l.tablettabBodyMarginUnit,Ee=l.tabBodyMarginLink,ke=l.tabBodyTopPadding,Re=l.tabBodyRightPadding,Ue=l.tabBodyBottomPadding,ze=l.tabBodyLeftPadding,He=l.tabBodyTopPaddingTablet,Ae=l.tabBodyRightPaddingTablet,Fe=l.tabBodyBottomPaddingTablet,Ve=l.tabBodyLeftPaddingTablet,Ie=l.tabBodyTopPaddingMobile,we=l.tabBodyRightPaddingMobile,xe=l.tabBodyBottomPaddingMobile,De=l.tabBodyLeftPaddingMobile,Ne=l.tabBodyPaddingUnit,We=l.mobiletabBodyPaddingUnit,Ge=l.tablettabBodyPaddingUnit,Je=l.tabBodyPaddingLink,qe=l.titleLoadGoogleFonts,Ke=l.titleFontFamily,Qe=l.titleFontWeight,Xe=l.titleFontSubset,Ye=l.titleFontSizeType,Ze=l.titleFontSize,$e=l.titleFontSizeMobile,et=l.titleFontSizeTablet,tt=l.titleLineHeightType,at=l.titleLineHeight,lt=l.titleLineHeightMobile,ot=l.titleLineHeightTablet,it=l.titleTransform,nt=l.titleDecoration,bt=l.titleAlign,rt=l.tabAlign,ut=l.showIcon,dt=l.icon,gt=l.iconColor,ct=l.iconPosition,st=l.iconSpacing,vt=l.iconSize,mt=l.activeiconColor;return T.a.createElement(L.InspectorControls,null,T.a.createElement(P.a,{tabs:["general","advance"]},T.a.createElement(C.a,{key:"general"},(t={desktop:[{value:"hstyle1",label:Object(f.__)("Horizontal Style 1","ultimate-addons-for-gutenberg")},{value:"hstyle2",label:Object(f.__)("Horizontal Style 2","ultimate-addons-for-gutenberg")},{value:"hstyle3",label:Object(f.__)("Horizontal Style 3","ultimate-addons-for-gutenberg")},{value:"hstyle4",label:Object(f.__)("Horizontal Style 4","ultimate-addons-for-gutenberg")},{value:"hstyle5",label:Object(f.__)("Horizontal Style 5","ultimate-addons-for-gutenberg")},{value:"vstyle6",label:Object(f.__)("Vertical Style 6","ultimate-addons-for-gutenberg")},{value:"vstyle7",label:Object(f.__)("Vertical Style 7","ultimate-addons-for-gutenberg")},{value:"vstyle8",label:Object(f.__)("Vertical Style 8","ultimate-addons-for-gutenberg")},{value:"vstyle9",label:Object(f.__)("Vertical Style 9","ultimate-addons-for-gutenberg")},{value:"vstyle10",label:Object(f.__)("Vertical Style 10","ultimate-addons-for-gutenberg")}],tablet:[{value:"hstyle1",label:Object(f.__)("Horizontal Style 1","ultimate-addons-for-gutenberg")},{value:"hstyle2",label:Object(f.__)("Horizontal Style 2","ultimate-addons-for-gutenberg")},{value:"hstyle3",label:Object(f.__)("Horizontal Style 3","ultimate-addons-for-gutenberg")},{value:"hstyle4",label:Object(f.__)("Horizontal Style 4","ultimate-addons-for-gutenberg")},{value:"hstyle5",label:Object(f.__)("Horizontal Style 5","ultimate-addons-for-gutenberg")},{value:"vstyle6",label:Object(f.__)("Vertical Style 6","ultimate-addons-for-gutenberg")},{value:"vstyle7",label:Object(f.__)("Vertical Style 7","ultimate-addons-for-gutenberg")},{value:"vstyle8",label:Object(f.__)("Vertical Style 8","ultimate-addons-for-gutenberg")},{value:"vstyle9",label:Object(f.__)("Vertical Style 9","ultimate-addons-for-gutenberg")},{value:"vstyle10",label:Object(f.__)("Vertical Style 10","ultimate-addons-for-gutenberg")}],mobile:[{value:"hstyle1",label:Object(f.__)("Horizontal Style 1","ultimate-addons-for-gutenberg")},{value:"hstyle2",label:Object(f.__)("Horizontal Style 2","ultimate-addons-for-gutenberg")},{value:"hstyle3",label:Object(f.__)("Horizontal Style 3","ultimate-addons-for-gutenberg")},{value:"hstyle4",label:Object(f.__)("Horizontal Style 4","ultimate-addons-for-gutenberg")},{value:"hstyle5",label:Object(f.__)("Horizontal Style 5","ultimate-addons-for-gutenberg")},{value:"vstyle6",label:Object(f.__)("Vertical Style 6","ultimate-addons-for-gutenberg")},{value:"vstyle7",label:Object(f.__)("Vertical Style 7","ultimate-addons-for-gutenberg")},{value:"vstyle8",label:Object(f.__)("Vertical Style 8","ultimate-addons-for-gutenberg")},{value:"vstyle9",label:Object(f.__)("Vertical Style 9","ultimate-addons-for-gutenberg")},{value:"vstyle10",label:Object(f.__)("Vertical Style 10","ultimate-addons-for-gutenberg")},{value:"stack1",label:Object(f.__)("Stack Style 11","ultimate-addons-for-gutenberg")},{value:"stack2",label:Object(f.__)("Stack Style 12","ultimate-addons-for-gutenberg")},{value:"stack3",label:Object(f.__)("Stack Style 13","ultimate-addons-for-gutenberg")},{value:"stack4",label:Object(f.__)("Stack Style 14","ultimate-addons-for-gutenberg")}]},T.a.createElement(y.PanelBody,{title:Object(f.__)("Tabs Style","ultimate-addons-for-gutenberg"),initialOpen:!0},T.a.createElement(M,{label:Object(f.__)("Style","ultimate-addons-for-gutenberg"),data:{desktop:{value:r,label:"tabsStyleD"},tablet:{value:d,label:"tabsStyleT"},mobile:{value:u,label:"tabsStyleM"}},options:t,setAttributes:o}))),T.a.createElement(y.PanelBody,{title:Object(f.__)("Tabs Title Settings","ultimate-addons-for-gutenberg"),initialOpen:!1},T.a.createElement(y.SelectControl,{label:Object(f.__)("Initial Open Tab","ultimate-addons-for-gutenberg"),value:g,options:c.map((function(e,t){return{value:t,label:e}})),onChange:function(e){return o({tabActiveFrontend:parseInt(e)})}}),T.a.createElement(B.a,{setAttributes:o,label:Object(f.__)("Tab Alignment","ultimate-addons-for-gutenberg"),data:{value:rt,label:"tabAlign"},className:"uagb-multi-button-alignment-control",options:[{value:"left",icon:T.a.createElement(y.Icon,{icon:Object(n.a)("fa fa-align-left")}),tooltip:Object(f.__)("Left","ultimate-addons-for-gutenberg")},{value:"center",icon:T.a.createElement(y.Icon,{icon:Object(n.a)("fa fa-align-center")}),tooltip:Object(f.__)("Center","ultimate-addons-for-gutenberg")},{value:"right",icon:T.a.createElement(y.Icon,{icon:Object(n.a)("fa fa-align-right")}),tooltip:Object(f.__)("Right","ultimate-addons-for-gutenberg")}],showIcons:!0}),T.a.createElement(B.a,{setAttributes:o,label:Object(f.__)("Tab Text Alignment","ultimate-addons-for-gutenberg"),data:{value:bt,label:"titleAlign"},className:"uagb-multi-button-alignment-control",options:[{value:"left",icon:T.a.createElement(y.Icon,{icon:Object(n.a)("fa fa-align-left")}),tooltip:Object(f.__)("Left","ultimate-addons-for-gutenberg")},{value:"center",icon:T.a.createElement(y.Icon,{icon:Object(n.a)("fa fa-align-center")}),tooltip:Object(f.__)("Center","ultimate-addons-for-gutenberg")},{value:"right",icon:T.a.createElement(y.Icon,{icon:Object(n.a)("fa fa-align-right")}),tooltip:Object(f.__)("Right","ultimate-addons-for-gutenberg")}],showIcons:!0}),T.a.createElement(y.ToggleControl,{label:Object(f.__)("Enable Icon","ultimate-addons-for-gutenberg"),checked:ut,onChange:function(){return o({showIcon:!ut})}}),ut&&T.a.createElement(T.a.Fragment,null,T.a.createElement("h2",{className:"components-base-control__label"},Object(f.__)("Icon","ultimate-addons-for-gutenberg")),T.a.createElement(i.a,{icons:wp.UAGBSvgIcons,renderFunc:n.a,theme:"default",value:dt,onChange:function(e){return o({icon:e})},isMulti:!1,noSelectedPlaceholder:Object(f.__)("Select Icon","ultimate-addons-for-gutenberg")}),T.a.createElement(y.SelectControl,{label:Object(f.__)("Icon Position","ultimate-addons-for-gutenberg"),value:ct,options:[{value:"left",label:Object(f.__)("Left","ultimate-addons-for-gutenberg")},{value:"right",label:Object(f.__)("Right","ultimate-addons-for-gutenberg")},{value:"top",label:Object(f.__)("Top","ultimate-addons-for-gutenberg")},{value:"bottom",label:Object(f.__)("Bottom","ultimate-addons-for-gutenberg")}],onChange:function(e){return o({iconPosition:e})}}),T.a.createElement(j.a,{label:Object(f.__)("Icon Spacing","ultimate-addons-for-gutenberg"),setAttributes:o,value:st,onChange:function(e){return o({iconSpacing:e})},min:0,max:500,displayUnit:!1}),T.a.createElement(h.a,{label:Object(f.__)("Icon Color","ultimate-addons-for-gutenberg"),colorValue:gt,onColorChange:function(e){return o({iconColor:e})}}),T.a.createElement(h.a,{label:Object(f.__)("Active Icon Color","ultimate-addons-for-gutenberg"),colorValue:mt,onColorChange:function(e){return o({activeiconColor:e})}}),T.a.createElement(j.a,{label:Object(f.__)("Icon Size","ultimate-addons-for-gutenberg"),setAttributes:o,value:vt,onChange:function(e){return o({iconSize:e})},min:0,max:500,displayUnit:!1})),T.a.createElement(O.a,E({},e,{label:Object(f.__)("Title Margin","ultimate-addons-for-gutenberg"),valueTop:{value:I,label:"tabTitleTopMargin"},valueRight:{value:V,label:"tabTitleRightMargin"},valueBottom:{value:w,label:"tabTitleBottomMargin"},valueLeft:{value:F,label:"tabTitleLeftMargin"},valueTopTablet:{value:N,label:"tabTitleTopMarginTablet"},valueRightTablet:{value:D,label:"tabTitleRightMarginTablet"},valueBottomTablet:{value:W,label:"tabTitleBottomMarginTablet"},valueLeftTablet:{value:x,label:"tabTitleLeftMarginTablet"},valueTopMobile:{value:q,label:"tabTitleTopMarginMobile"},valueRightMobile:{value:J,label:"tabTitleRightMarginMobile"},valueBottomMobile:{value:K,label:"tabTitleBottomMarginMobile"},valueLeftMobile:{value:G,label:"tabTitleLeftMarginMobile"},unit:{value:Q,label:"tabTitleMarginUnit"},mUnit:{value:X,label:"mobiletabTitleMarginUnit"},tUnit:{value:Y,label:"tablettabTitleMarginUnit"},attributes:l,setAttributes:o,link:{value:Z,label:"tabTitleMarginLink"}})),T.a.createElement(O.a,E({},e,{label:Object(f.__)("Title Padding","ultimate-addons-for-gutenberg"),valueTop:{value:$,label:"tabTitleTopPadding"},valueRight:{value:ee,label:"tabTitleRightPadding"},valueBottom:{value:te,label:"tabTitleBottomPadding"},valueLeft:{value:ae,label:"tabTitleLeftPadding"},valueTopTablet:{value:le,label:"tabTitleTopPaddingTablet"},valueRightTablet:{value:oe,label:"tabTitleRightPaddingTablet"},valueBottomTablet:{value:ie,label:"tabTitleBottomPaddingTablet"},valueLeftTablet:{value:ne,label:"tabTitleLeftPaddingTablet"},valueTopMobile:{value:be,label:"tabTitleTopPaddingMobile"},valueRightMobile:{value:re,label:"tabTitleRightPaddingMobile"},valueBottomMobile:{value:ue,label:"tabTitleBottomPaddingMobile"},valueLeftMobile:{value:de,label:"tabTitleLeftPaddingMobile"},unit:{value:ge,label:"tabTitlePaddingUnit"},mUnit:{value:ce,label:"mobiletabTitlePaddingUnit"},tUnit:{value:se,label:"tablettabTitlePaddingUnit"},attributes:l,setAttributes:o,link:{value:ve,label:"tabTitlePaddingLink"}})),T.a.createElement(h.a,{label:Object(f.__)("Title Background Color","ultimate-addons-for-gutenberg"),colorValue:s,onColorChange:function(e){return o({headerBgColor:e})}}),T.a.createElement(h.a,{label:Object(f.__)("Title Text Color","ultimate-addons-for-gutenberg"),colorValue:R,onColorChange:function(e){return o({headerTextColor:e})}}),T.a.createElement(h.a,{label:Object(f.__)("Active Tab Background Color","ultimate-addons-for-gutenberg"),colorValue:U,onColorChange:function(e){return o({activeTabBgColor:e})}}),T.a.createElement(h.a,{label:Object(f.__)("Active Tab Text Color","ultimate-addons-for-gutenberg"),colorValue:z,onColorChange:function(e){return o({activeTabTextColor:e})}}),T.a.createElement(b.a,{label:Object(f.__)("Typography","ultimate-addons-for-gutenberg"),attributes:l,setAttributes:o,loadGoogleFonts:{value:qe,label:"titleLoadGoogleFonts"},fontFamily:{value:Ke,label:"titleFontFamily"},fontWeight:{value:Qe,label:"titleFontWeight"},fontSubset:{value:Xe,label:"titleFontSubset"},fontSizeType:{value:Ye,label:"titleFontSizeType"},fontSize:{value:Ze,label:"titleFontSize"},fontSizeMobile:{value:$e,label:"titleFontSizeMobile"},fontSizeTablet:{value:et,label:"titleFontSizeTablet"},lineHeightType:{value:tt,label:"titleLineHeightType"},lineHeight:{value:at,label:"titleLineHeight"},lineHeightMobile:{value:lt,label:"titleLineHeightMobile"},lineHeightTablet:{value:ot,label:"titleLineHeightTablet"},transform:{value:it,label:"titleTransform"},decoration:{value:nt,label:"titleDecoration"}})),T.a.createElement(y.PanelBody,{title:Object(f.__)("Tabs Body Settings","ultimate-addons-for-gutenberg"),initialOpen:!1},T.a.createElement(h.a,{label:Object(f.__)("Body Background Color","ultimate-addons-for-gutenberg"),colorValue:H,onColorChange:function(e){return o({bodyBgColor:e})}}),T.a.createElement(h.a,{label:Object(f.__)("Body Text Color","ultimate-addons-for-gutenberg"),colorValue:A,onColorChange:function(e){return o({bodyTextColor:e})}}),T.a.createElement(O.a,E({},e,{label:Object(f.__)("Tab Body Margin","ultimate-addons-for-gutenberg"),valueTop:{value:fe,label:"tabBodyTopMargin"},valueRight:{value:Te,label:"tabBodyRightMargin"},valueBottom:{value:ye,label:"tabBodyBottomMargin"},valueLeft:{value:me,label:"tabBodyLeftMargin"},valueTopTablet:{value:Me,label:"tabBodyTopMarginTablet"},valueRightTablet:{value:pe,label:"tabBodyRightMarginTablet"},valueBottomTablet:{value:Be,label:"tabBodyBottomMarginTablet"},valueLeftTablet:{value:_e,label:"tabBodyLeftMarginTablet"},valueTopMobile:{value:je,label:"tabBodyTopMarginMobile"},valueRightMobile:{value:Oe,label:"tabBodyRightMarginMobile"},valueBottomMobile:{value:Se,label:"tabBodyBottomMarginMobile"},valueLeftMobile:{value:he,label:"tabBodyLeftMarginMobile"},unit:{value:Pe,label:"tabBodyMarginUnit"},mUnit:{value:Ce,label:"mobiletabBodyMarginUnit"},tUnit:{value:Le,label:"tablettabBodyMarginUnit"},attributes:l,setAttributes:o,link:{value:Ee,label:"tabBodyMarginLink"}})),T.a.createElement(O.a,E({},e,{label:Object(f.__)("Body Padding","ultimate-addons-for-gutenberg"),valueTop:{value:ke,label:"tabBodyTopPadding"},valueRight:{value:Re,label:"tabBodyRightPadding"},valueBottom:{value:Ue,label:"tabBodyBottomPadding"},valueLeft:{value:ze,label:"tabBodyLeftPadding"},valueTopTablet:{value:He,label:"tabBodyTopPaddingTablet"},valueRightTablet:{value:Ae,label:"tabBodyRightPaddingTablet"},valueBottomTablet:{value:Fe,label:"tabBodyBottomPaddingTablet"},valueLeftTablet:{value:Ve,label:"tabBodyLeftPaddingTablet"},valueTopMobile:{value:Ie,label:"tabBodyTopPaddingMobile"},valueRightMobile:{value:we,label:"tabBodyRightPaddingMobile"},valueBottomMobile:{value:xe,label:"tabBodyBottomPaddingMobile"},valueLeftMobile:{value:De,label:"tabBodyLeftPaddingMobile"},unit:{value:Ne,label:"tabBodyPaddingUnit"},mUnit:{value:We,label:"mobiletabBodyPaddingUnit"},tUnit:{value:Ge,label:"tablettabBodyPaddingUnit"},attributes:l,setAttributes:o,link:{value:Je,label:"tabBodyPaddingLink"}}))),T.a.createElement(y.PanelBody,{title:Object(f.__)("Border Settings","ultimate-addons-for-gutenberg"),initialOpen:!1},T.a.createElement(S.a,{setAttributes:o,borderStyle:{value:v,label:"borderStyle",title:Object(f.__)("Style","ultimate-addons-for-gutenberg")},borderWidth:{value:m,label:"borderWidth",title:Object(f.__)("Width","ultimate-addons-for-gutenberg")},borderRadius:{value:_,label:"borderRadius",title:Object(f.__)("Radius","ultimate-addons-for-gutenberg")},borderColor:{value:p,label:"borderColor",title:Object(f.__)("Color","ultimate-addons-for-gutenberg")},borderHoverColor:{value:k,label:"borderHoverColor",title:Object(f.__)("Hover Color","ultimate-addons-for-gutenberg")}}))),T.a.createElement(C.a,{key:"advance"})))};t.default=T.a.memo(k)}}]);