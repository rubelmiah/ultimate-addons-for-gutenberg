(window.webpackJsonp_ultimate_addons_for_gutenberg=window.webpackJsonp_ultimate_addons_for_gutenberg||[]).push([[21],{563:function(e,t,a){"use strict";a.r(t);var l=a(127),n=a.n(l),o=a(14),i=a(1),r=a.n(i),u=a(23),b=a(59),d=a(2),c=a(25),g=a(5),s=a(3),m=a(9),f=function(e){var t,a,l,i,f,_=e=e.parentProps,h=_.setAttributes,v=_.attributes,O=v.headSpace,j=v.headingColor,C=v.subHeadingColor,p=v.backgroundColor,F=v.separatorColor,H=v.separatorFillColor,S=v.separatorBg,E=v.separatorBorder,T=v.borderFocus,z=v.headingTag,y=v.headFontSizeType,B=v.headFontSize,L=v.headFontSizeTablet,Y=v.headFontSizeMobile,I=v.headFontFamily,k=v.headFontWeight,w=v.headFontSubset,M=v.headLineHeightType,R=v.headLineHeight,P=v.headLineHeightTablet,N=v.headLineHeightMobile,A=v.headLoadGoogleFonts,x=v.timelinAlignment,D=v.arrowlinAlignment,G=v.subHeadFontSizeType,W=v.subHeadFontSize,J=v.subHeadFontSizeTablet,U=v.subHeadFontSizeMobile,V=v.subHeadFontFamily,q=v.subHeadFontWeight,K=v.subHeadFontSubset,Q=v.subHeadLineHeightType,X=v.subHeadLineHeight,Z=v.subHeadLineHeightTablet,$=v.subHeadLineHeightMobile,ee=v.subHeadLoadGoogleFonts,te=v.verticalSpace,ae=v.horizontalSpace,le=v.separatorwidth,ne=v.borderwidth,oe=v.connectorBgsize,ie=v.dateBottomspace,re=v.align,ue=v.icon,be=v.iconColor,de=v.dateColor,ce=v.dateFontsizeType,ge=v.dateFontsize,se=v.dateFontsizeTablet,me=v.dateFontsizeMobile,fe=v.dateFontFamily,_e=v.dateFontWeight,he=v.dateFontSubset,ve=v.dateLineHeightType,Oe=v.dateLineHeight,je=v.dateLineHeightTablet,Ce=v.dateLineHeightMobile,pe=v.dateLoadGoogleFonts,Fe=v.iconSize,He=v.borderRadius,Se=v.bgPadding,Ee=v.iconFocus,Te=v.iconBgFocus,ze=v.displayPostDate,ye=v.stack,Be=v.dateFormat,Le=new Date;if(1==A){var Ye={google:{families:[I+(k?":"+k:"")]}};t=r.a.createElement(b.a,{config:Ye})}if(1==ee){var Ie={google:{families:[V+(q?":"+q:"")]}};a=r.a.createElement(b.a,{config:Ie})}if(1==pe){var ke={google:{families:[fe+(_e?":"+_e:"")]}};l=r.a.createElement(b.a,{config:ke})}return r.a.createElement(r.a.Fragment,null,r.a.createElement(g.BlockControls,null,r.a.createElement(g.BlockAlignmentToolbar,{value:re,onChange:function(e){h({align:e})},controls:["center","left","right"]})),r.a.createElement(g.InspectorControls,null,r.a.createElement(s.PanelBody,{title:Object(d.__)("General","ultimate-addons-for-gutenberg"),initialOpen:!1},r.a.createElement("h2",null,Object(d.__)("Layout","ultimate-addons-for-gutenberg")),r.a.createElement(s.SelectControl,{label:Object(d.__)("Orientation","ultimate-addons-for-gutenberg"),value:x,onChange:function(e){return h({timelinAlignment:e})},options:[{value:"left",label:Object(d.__)("Left","ultimate-addons-for-gutenberg")},{value:"right",label:Object(d.__)("Right","ultimate-addons-for-gutenberg")},{value:"center",label:Object(d.__)("Center","ultimate-addons-for-gutenberg")}]}),r.a.createElement(s.SelectControl,{label:Object(d.__)("Arrow Alignment","ultimate-addons-for-gutenberg"),value:D,onChange:function(e){return h({arrowlinAlignment:e})},options:[{value:"top",label:Object(d.__)("Top","ultimate-addons-for-gutenberg")},{value:"bottom",label:Object(d.__)("Bottom","ultimate-addons-for-gutenberg")},{value:"center",label:Object(d.__)("Center","ultimate-addons-for-gutenberg")}]}),r.a.createElement(s.SelectControl,{label:Object(d.__)("Stack on","ultimate-addons-for-gutenberg"),value:ye,options:[{value:"none",label:Object(d.__)("None","ultimate-addons-for-gutenberg")},{value:"tablet",label:Object(d.__)("Tablet","ultimate-addons-for-gutenberg")},{value:"mobile",label:Object(d.__)("Mobile","ultimate-addons-for-gutenberg")}],help:Object(d.__)("Note: Choose on what breakpoint the Content Timeline will stack. It will be visible on front end only.","ultimate-addons-for-gutenberg"),onChange:function(e){return h({stack:e})}}),r.a.createElement("hr",{className:"uagb-editor__separator"}),r.a.createElement("h2",null,Object(d.__)("Date")),r.a.createElement(s.ToggleControl,{label:Object(d.__)("Display Date","ultimate-addons-for-gutenberg"),checked:ze,onChange:function(){Object(m.select)("core/block-editor").getBlocks(e.clientId).forEach((function(e){e.attributes.displayPostDate=ze})),h({displayPostDate:!ze})}}),ze&&r.a.createElement(s.SelectControl,{label:Object(d.__)("Date Format","ultimate-addons-for-gutenberg"),value:Be,onChange:function(t){Object(m.select)("core/block-editor").getBlocks(e.clientId).forEach((function(e){e.attributes.dateFormat=t})),h({dateFormat:t})},options:[{value:"M j, Y",label:Object(c.dateI18n)("M j, Y",Le)},{value:"F j, Y",label:Object(c.dateI18n)("F j, Y",Le)},{value:"m/d/Y",label:Object(c.dateI18n)("m/d/Y",Le)},{value:"m-d-Y",label:Object(c.dateI18n)("m-d-Y",Le)},{value:"m.d.Y",label:Object(c.dateI18n)("m.d.Y",Le)},{value:"d M Y",label:Object(c.dateI18n)("d M Y",Le)},{value:"d F Y",label:Object(c.dateI18n)("d F Y",Le)},{value:"d-m-Y",label:Object(c.dateI18n)("d-m-Y",Le)},{value:"d.m.Y",label:Object(c.dateI18n)("d.m.Y",Le)},{value:"d/m/Y",label:Object(c.dateI18n)("d/m/Y",Le)},{value:"Y-m-d",label:Object(c.dateI18n)("Y-m-d",Le)},{value:"Y.m.d",label:Object(c.dateI18n)("Y.m.d",Le)},{value:"Y/m/d",label:Object(c.dateI18n)("Y/m/d",Le)},{value:"M, Y",label:Object(c.dateI18n)("M, Y",Le)},{value:"M Y",label:Object(c.dateI18n)("M Y",Le)},{value:"F, Y",label:Object(c.dateI18n)("F, Y",Le)},{value:"F Y",label:Object(c.dateI18n)("F Y",Le)},{value:"custom",label:Object(d.__)("Normal Text","ultimate-addons-for-gutenberg")}]}),ze&&"center"!==x&&r.a.createElement(s.RangeControl,{label:Object(d.__)("Date Bottom Spacing","ultimate-addons-for-gutenberg"),value:ie,onChange:function(e){return h({dateBottomspace:e})},min:0,max:50,allowReset:!0}),r.a.createElement("hr",{className:"uagb-editor__separator"}),r.a.createElement("h2",null,Object(d.__)("Heading","ultimate-addons-for-gutenberg")),r.a.createElement(u.a,{label:Object(d.__)("Typography","ultimate-addons-for-gutenberg"),attributes:e.attributes,setAttributes:h,loadGoogleFonts:{value:A,label:"headLoadGoogleFonts"},fontFamily:{value:I,label:"headFontFamily"},fontWeight:{value:k,label:"headFontWeight"},fontSubset:{value:w,label:"headFontSubset"},fontSizeType:{value:y,label:"headFontSizeType"},fontSize:{value:B,label:"headFontSize"},fontSizeMobile:{value:Y,label:"headFontSizeMobile"},fontSizeTablet:{value:L,label:"headFontSizeTablet"},lineHeightType:{value:M,label:"headLineHeightType"},lineHeight:{value:R,label:"headLineHeight"},lineHeightMobile:{value:N,label:"headLineHeightMobile"},lineHeightTablet:{value:P,label:"headLineHeightTablet"}}),r.a.createElement("hr",{className:"uagb-editor__separator"}),r.a.createElement("h2",null,Object(d.__)("Content","ultimate-addons-for-gutenberg")),r.a.createElement(u.a,{label:Object(d.__)("Typography","ultimate-addons-for-gutenberg"),attributes:e.attributes,setAttributes:h,loadGoogleFonts:{value:ee,label:"subHeadLoadGoogleFonts"},fontFamily:{value:V,label:"subHeadFontFamily"},fontWeight:{value:q,label:"subHeadFontWeight"},fontSubset:{value:K,label:"subHeadFontSubset"},fontSizeType:{value:G,label:"subHeadFontSizeType"},fontSize:{value:W,label:"subHeadFontSize"},fontSizeMobile:{value:U,label:"subHeadFontSizeMobile"},fontSizeTablet:{value:J,label:"subHeadFontSizeTablet"},lineHeightType:{value:Q,label:"subHeadLineHeightType"},lineHeight:{value:X,label:"subHeadLineHeight"},lineHeightMobile:{value:$,label:"subHeadLineHeightMobile"},lineHeightTablet:{value:Z,label:"subHeadLineHeightTablet"}}),ze&&r.a.createElement(r.a.Fragment,null,r.a.createElement("hr",{className:"uagb-editor__separator"}),r.a.createElement("h2",null,Object(d.__)("Date","ultimate-addons-for-gutenberg")),r.a.createElement(u.a,{label:Object(d.__)("Typography","ultimate-addons-for-gutenberg"),attributes:e.attributes,setAttributes:h,loadGoogleFonts:{value:pe,label:"dateLoadGoogleFonts"},fontFamily:{value:fe,label:"dateFontFamily"},fontWeight:{value:_e,label:"dateFontWeight"},fontSubset:{value:he,label:"dateFontSubset"},fontSizeType:{value:ce,label:"dateFontsizeType"},fontSize:{value:ge,label:"dateFontsize"},fontSizeMobile:{value:me,label:"dateFontsizeMobile"},fontSizeTablet:{value:se,label:"dateFontsizeTablet"},lineHeightType:{value:ve,label:"dateLineHeightType"},lineHeight:{value:Oe,label:"dateLineHeight"},lineHeightMobile:{value:Ce,label:"dateLineHeightMobile"},lineHeightTablet:{value:je,label:"dateLineHeightTablet"}}),r.a.createElement("hr",{className:"uagb-editor__separator"}),r.a.createElement("p",{className:"uagb-setting-label"},Object(d.__)("Date Color","ultimate-addons-for-gutenberg"),r.a.createElement("span",{className:"components-base-control__label"},r.a.createElement("span",{className:"component-color-indicator",style:{backgroundColor:de}}))),r.a.createElement(g.ColorPalette,{value:de,onChange:function(e){return h({dateColor:e})},allowReset:!0}))),r.a.createElement(s.PanelBody,{title:Object(d.__)("Spacing","ultimate-addons-for-gutenberg"),initialOpen:!1},r.a.createElement(s.RangeControl,{label:Object(d.__)("Horizontal Space","ultimate-addons-for-gutenberg"),value:ae,onChange:function(e){return h({horizontalSpace:e})},min:1,max:50,allowReset:!0}),r.a.createElement(s.RangeControl,{label:Object(d.__)("Vertical Space","ultimate-addons-for-gutenberg"),value:te,onChange:function(e){return h({verticalSpace:e})},min:1,max:100,allowReset:!0}),r.a.createElement(s.RangeControl,{label:Object(d.__)("Heading Bottom Spacing","ultimate-addons-for-gutenberg"),value:O,onChange:function(e){return h({headSpace:e})},min:0,max:50,allowReset:!0})),r.a.createElement(s.PanelBody,{title:Object(d.__)("Connector","ultimate-addons-for-gutenberg"),initialOpen:!1},r.a.createElement(n.a,{icons:wp.UAGBSvgIcons,value:ue,onChange:function(t){Object(m.select)("core/block-editor").getBlocks(e.clientId).forEach((function(e){e.attributes.icon=t})),h({icon:t})},isMulti:!1,renderFunc:o.a,noSelectedPlaceholder:Object(d.__)("Select Icon","ultimate-addons-for-gutenberg")}),r.a.createElement(s.RangeControl,{label:Object(d.__)("Icon Size","ultimate-addons-for-gutenberg"),value:Fe,onChange:function(t){Object(m.select)("core/block-editor").getBlocks(e.clientId).forEach((function(e){e.attributes.iconSize=t})),h({iconSize:t})},min:0,max:30,allowReset:!0}),r.a.createElement(s.RangeControl,{label:Object(d.__)("Icon Background Size","ultimate-addons-for-gutenberg"),value:oe,onChange:function(t){Object(m.select)("core/block-editor").getBlocks(e.clientId).forEach((function(e){e.attributes.connectorBgsize=t})),h({connectorBgsize:t})},min:25,max:90,allowReset:!0}),r.a.createElement(s.RangeControl,{label:Object(d.__)("Border Width","ultimate-addons-for-gutenberg"),value:ne,onChange:function(t){Object(m.select)("core/block-editor").getBlocks(e.clientId).forEach((function(e){e.attributes.borderwidth=t})),h({borderwidth:t})},min:1,max:10,allowReset:!0}),r.a.createElement(s.RangeControl,{label:Object(d.__)("Connector Width","ultimate-addons-for-gutenberg"),value:le,onChange:function(t){Object(m.select)("core/block-editor").getBlocks(e.clientId).forEach((function(e){e.attributes.separatorwidth=t})),h({separatorwidth:t})},min:1,max:10,allowReset:!0})),(i=r.a.createElement(g.PanelColorSettings,{title:Object(d.__)("Color Settings","ultimate-addons-for-gutenberg"),initialOpen:!0,colorSettings:[{value:F,onChange:function(e){return h({separatorColor:e})},label:Object(d.__)("Line Color","ultimate-addons-for-gutenberg")},{value:be,onChange:function(e){return h({iconColor:e})},label:Object(d.__)("Icon Color","ultimate-addons-for-gutenberg")},{value:S,onChange:function(e){return h({separatorBg:e})},label:Object(d.__)("Background Color","ultimate-addons-for-gutenberg")},{value:E,onChange:function(e){return h({separatorBorder:e})},label:Object(d.__)("Border Color","ultimate-addons-for-gutenberg")}]}),f=r.a.createElement(g.PanelColorSettings,{title:Object(d.__)("Color Settings","ultimate-addons-for-gutenberg"),initialOpen:!0,colorSettings:[{value:H,onChange:function(e){return h({separatorFillColor:e})},label:Object(d.__)("Line Color","ultimate-addons-for-gutenberg")},{value:Ee,onChange:function(e){return h({iconFocus:e})},label:Object(d.__)("Icon Color","ultimate-addons-for-gutenberg")},{value:Te,onChange:function(e){return h({iconBgFocus:e})},label:Object(d.__)("Background Color","ultimate-addons-for-gutenberg")},{value:T,onChange:function(e){return h({borderFocus:e})},label:Object(d.__)("Border Color","ultimate-addons-for-gutenberg")}]}),r.a.createElement(s.PanelBody,{title:Object(d.__)("Connector Colors","ultimate-addons-for-gutenberg"),initialOpen:!0},r.a.createElement(s.TabPanel,{className:"uagb-inspect-tabs uagb-inspect-tabs-col-2",activeClass:"active-tab",tabs:[{name:"normal",title:Object(d.__)("Normal","ultimate-addons-for-gutenberg"),className:"uagb-normal-tab"},{name:"focus",title:Object(d.__)("Focus","ultimate-addons-for-gutenberg"),className:"uagb-focus-tab"}]},(function(e){var t;return t="focus"===e.name?f:i,r.a.createElement("div",null,t)})))),r.a.createElement(s.PanelBody,{title:Object(d.__)("Timeline Item","ultimate-addons-for-gutenberg"),initialOpen:!1},r.a.createElement(s.SelectControl,{label:Object(d.__)("Heading Tag","ultimate-addons-for-gutenberg"),value:z,onChange:function(e){return h({headingTag:e})},options:[{value:"h1",label:Object(d.__)("H1","ultimate-addons-for-gutenberg")},{value:"h2",label:Object(d.__)("H2","ultimate-addons-for-gutenberg")},{value:"h3",label:Object(d.__)("H3","ultimate-addons-for-gutenberg")},{value:"h4",label:Object(d.__)("H4","ultimate-addons-for-gutenberg")},{value:"h5",label:Object(d.__)("H5","ultimate-addons-for-gutenberg")},{value:"h6",label:Object(d.__)("H6","ultimate-addons-for-gutenberg")},{value:"p",label:Object(d.__)("P","ultimate-addons-for-gutenberg")},{value:"span",label:Object(d.__)("SPAN","ultimate-addons-for-gutenberg")}]}),r.a.createElement(s.RangeControl,{label:Object(d.__)("Rounded Corners","ultimate-addons-for-gutenberg"),value:He,onChange:function(e){return h({borderRadius:e})},min:0,initialPosition:10,max:50,allowReset:!0}),r.a.createElement(s.RangeControl,{label:Object(d.__)("Padding","ultimate-addons-for-gutenberg"),value:Se,onChange:function(e){return h({bgPadding:e})},min:1,initialPosition:10,max:50,allowReset:!0})),r.a.createElement(g.PanelColorSettings,{title:Object(d.__)("Colors","ultimate-addons-for-gutenberg"),initialOpen:!1,colorSettings:[{value:j,onChange:function(e){return h({headingColor:e})},label:Object(d.__)("Heading Color","ultimate-addons-for-gutenberg")},{value:C,onChange:function(e){return h({subHeadingColor:e})},label:Object(d.__)("Content Color","ultimate-addons-for-gutenberg")},{value:p,onChange:function(e){return h({backgroundColor:e})},label:Object(d.__)("Background Color","ultimate-addons-for-gutenberg")}]})),t,a,l)};t.default=r.a.memo(f)}}]);