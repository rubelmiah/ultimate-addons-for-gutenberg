(window.webpackJsonp=window.webpackJsonp||[]).push([[66],{434:function(e,t,a){"use strict";a.r(t);var l=a(196),n=a.n(l),o=a(1),i=a.n(o),r=a(6),c=a(12),s=a(62),u=a(15),g=a(53),b=a(2),m=a(4),d=a(10),_=a(5),h=Object.keys(s),f=function(e){var t,a,l=e=e.parentProps,o=l.attributes,s=l.setAttributes,f=o.icon,p=o.noticeDismiss,C=o.cookies,v=o.close_cookie_days,E=o.textColor,F=o.titleColor,y=o.noticeColor,H=o.contentBgColor,S=o.noticeDismissColor,O=o.noticeAlignment,j=o.titleFontFamily,T=o.titleFontWeight,N=o.titleFontSubset,z=o.titleFontSizeType,w=o.titleLineHeightType,L=o.titleFontSize,P=o.titleFontSizeTablet,k=o.titleFontSizeMobile,R=o.titleLineHeight,M=o.titleLineHeightTablet,x=o.titleLineHeightMobile,A=o.descFontFamily,D=o.descFontWeight,W=o.descFontSubset,G=o.descFontSize,B=o.descFontSizeType,I=o.descFontSizeTablet,V=o.descFontSizeMobile,J=o.descLineHeight,q=o.descLineHeightType,K=o.descLineHeightTablet,Q=o.descLineHeightMobile,U=o.titleLoadGoogleFonts,X=o.descLoadGoogleFonts,Y=o.contentVrPadding,Z=o.contentHrPadding,$=o.titleVrPadding,ee=o.titleHrPadding,te=o.headingTag,ae=o.layout,le=o.highlightWidth;if(!0===U){var ne={google:{families:[j+(T?":"+T:"")]}};t=i.a.createElement(g.a,{config:ne})}if(!0===X){var oe={google:{families:[A+(D?":"+D:"")]}};a=i.a.createElement(g.a,{config:oe})}var ie=[{value:"",label:Object(b.__)("Allow Always","ultimate-addons-for-gutenberg")},{value:"uagb-dismissable",label:Object(b.__)("Allow to Dismiss","ultimate-addons-for-gutenberg")}];return i.a.createElement(i.a.Fragment,null,i.a.createElement(m.BlockControls,{key:"controls"},i.a.createElement(m.AlignmentToolbar,{value:O,onChange:function(e){return s({noticeAlignment:e})}})),i.a.createElement(m.InspectorControls,null,i.a.createElement(_.PanelBody,{title:Object(b.__)("General","ultimate-addons-for-gutenberg"),initialOpen:!0},i.a.createElement(_.SelectControl,{label:Object(b.__)("Layout","ultimate-addons-for-gutenberg"),value:ae,onChange:function(e){return s({layout:e})},options:[{value:"modern",label:Object(b.__)("Modern","ultimate-addons-for-gutenberg")},{value:"simple",label:Object(b.__)("Default","ultimate-addons-for-gutenberg")}]}),"simple"===ae&&i.a.createElement(_.RangeControl,{label:Object(b.__)("Highlight width","ultimate-addons-for-gutenberg"),value:le,onChange:function(e){return s({highlightWidth:e})},min:0,max:50,allowReset:!0}),i.a.createElement("h2",null,Object(b.__)("Primary Heading","ultimate-addons-for-gutenberg")),i.a.createElement(_.SelectControl,{label:Object(b.__)("Tag"),value:te,onChange:function(e){return s({headingTag:e})},options:[{value:"h1",label:Object(b.__)("H1","ultimate-addons-for-gutenberg")},{value:"h2",label:Object(b.__)("H2","ultimate-addons-for-gutenberg")},{value:"h3",label:Object(b.__)("H3","ultimate-addons-for-gutenberg")},{value:"h4",label:Object(b.__)("H4","ultimate-addons-for-gutenberg")},{value:"h5",label:Object(b.__)("H5","ultimate-addons-for-gutenberg")},{value:"h6",label:Object(b.__)("H6","ultimate-addons-for-gutenberg")},{value:"span",label:Object(b.__)("span","ultimate-addons-for-gutenberg")},{value:"p",label:Object(b.__)("p","ultimate-addons-for-gutenberg")}]}),i.a.createElement(_.SelectControl,{label:Object(b.__)("Notice Display","ultimate-addons-for-gutenberg"),options:ie,value:p,onChange:function(e){return s({noticeDismiss:e})}}),p&&i.a.createElement(i.a.Fragment,null,i.a.createElement("p",{className:"components-base-control__label"},Object(b.__)("Icon","ultimate-addons-for-gutenberg")),i.a.createElement(n.a,{icons:h,renderFunc:c.a,theme:"default",value:f,onChange:function(e){return s({icon:e})},isMulti:!1,noSelectedPlaceholder:Object(b.__)("Select Icon","ultimate-addons-for-gutenberg")})),p&&i.a.createElement("hr",{className:"uagb-editor__separator"}),p&&i.a.createElement(_.ToggleControl,{label:Object(b.__)("Enable Cookies","ultimate-addons-for-gutenberg"),checked:C,onChange:function(e){var t=(0,Object(d.select)("core/editor").getCurrentPostId)().toString(),a=(new Date).getTime();s({c_id:t+"-"+a}),s({cookies:e})}}),C&&i.a.createElement(_.RangeControl,{label:Object(b.__)("Show Closed Notice After (Days)","ultimate-addons-for-gutenberg"),value:v,onChange:function(e){return s({close_cookie_days:e})},min:0,max:50,allowReset:!0}),i.a.createElement("hr",{className:"uagb-editor__separator"}),i.a.createElement("h2",null,Object(b.__)("Colors","ultimate-addons-for-gutenberg")),i.a.createElement("p",{className:"uagb-setting-label"},Object(b.__)("Title Color","ultimate-addons-for-gutenberg"),i.a.createElement("span",{className:"components-base-control__label"},i.a.createElement("span",{className:"component-color-indicator",style:{backgroundColor:F}}))),i.a.createElement(m.ColorPalette,{value:F,onChange:function(e){return s({titleColor:e})},allowReset:!0}),i.a.createElement("hr",{className:"uagb-editor__separator"}),i.a.createElement("p",{className:"uagb-setting-label"},Object(b.__)("Highlight Color","ultimate-addons-for-gutenberg"),i.a.createElement("span",{className:"components-base-control__label"},i.a.createElement("span",{className:"component-color-indicator",style:{backgroundColor:y}}))),i.a.createElement(m.ColorPalette,{value:y,onChange:function(e){return s({noticeColor:e})},allowReset:!0}),i.a.createElement("hr",{className:"uagb-editor__separator"}),i.a.createElement("p",{className:"uagb-setting-label"},Object(b.__)("Content Color","ultimate-addons-for-gutenberg"),i.a.createElement("span",{className:"components-base-control__label"},i.a.createElement("span",{className:"component-color-indicator",style:{backgroundColor:E}}))),i.a.createElement(m.ColorPalette,{value:E,onChange:function(e){return s({textColor:e})},allowReset:!0}),i.a.createElement("hr",{className:"uagb-editor__separator"}),i.a.createElement("p",{className:"uagb-setting-label"},Object(b.__)("Content Background Color","ultimate-addons-for-gutenberg"),i.a.createElement("span",{className:"components-base-control__label"},i.a.createElement("span",{className:"component-color-indicator",style:{backgroundColor:H}}))),i.a.createElement(m.ColorPalette,{value:H,onChange:function(e){return s({contentBgColor:e})},allowReset:!0}),p&&i.a.createElement("hr",{className:"uagb-editor__separator"}),p&&i.a.createElement("p",{className:"uagb-setting-label"},Object(b.__)("Dismiss Icon Color","ultimate-addons-for-gutenberg"),i.a.createElement("span",{className:"components-base-control__label"},i.a.createElement("span",{className:"component-color-indicator",style:{backgroundColor:S}}))),p&&i.a.createElement(m.ColorPalette,{value:S,onChange:function(e){return s({noticeDismissColor:e})},allowReset:!0}),i.a.createElement("hr",{className:"uagb-editor__separator"}),i.a.createElement("h2",null,Object(b.__)("Typography","ultimate-addons-for-gutenberg")),i.a.createElement(u.default,{label:Object(b.__)("Title","ultimate-addons-for-gutenberg"),attributes:o,setAttributes:s,loadGoogleFonts:{value:U,label:"titleLoadGoogleFonts"},fontFamily:{value:j,label:"titleFontFamily"},fontWeight:{value:T,label:"titleFontWeight"},fontSubset:{value:N,label:"titleFontSubset"},fontSizeType:{value:z,label:"titleFontSizeType"},fontSize:{value:L,label:"titleFontSize"},fontSizeMobile:{value:k,label:"titleFontSizeMobile"},fontSizeTablet:{value:P,label:"titleFontSizeTablet"},lineHeightType:{value:w,label:"titleLineHeightType"},lineHeight:{value:R,label:"titleLineHeight"},lineHeightMobile:{value:x,label:"titleLineHeightMobile"},lineHeightTablet:{value:M,label:"titleLineHeightTablet"}}),i.a.createElement(u.default,{label:Object(b.__)("Content","ultimate-addons-for-gutenberg"),attributes:o,setAttributes:s,loadGoogleFonts:{value:X,label:"descLoadGoogleFonts"},fontFamily:{value:A,label:"descFontFamily"},fontWeight:{value:D,label:"descFontWeight"},fontSubset:{value:W,label:"descFontSubset"},fontSizeType:{value:B,label:"descFontSizeType"},fontSize:{value:G,label:"descFontSize"},fontSizeMobile:{value:V,label:"descFontSizeMobile"},fontSizeTablet:{value:I,label:"descFontSizeTablet"},lineHeightType:{value:q,label:"descLineHeightType"},lineHeight:{value:J,label:"descLineHeight"},lineHeightMobile:{value:Q,label:"descLineHeightMobile"},lineHeightTablet:{value:K,label:"descLineHeightTablet"}}),i.a.createElement("hr",{className:"uagb-editor__separator"}),i.a.createElement("h2",null,Object(b.__)("Title Padding (px)","ultimate-addons-for-gutenberg")),i.a.createElement(_.RangeControl,{label:r.a.vertical_spacing,className:"uagb-margin-control",value:$,onChange:function(e){return s({titleVrPadding:e})},min:0,max:50,allowReset:!0}),i.a.createElement(_.RangeControl,{label:r.a.horizontal_spacing,className:"uagb-margin-control",value:ee,onChange:function(e){return s({titleHrPadding:e})},min:0,max:50,allowReset:!0}),i.a.createElement("hr",{className:"uagb-editor__separator"}),i.a.createElement("h2",null,Object(b.__)("Content Padding (px)","ultimate-addons-for-gutenberg")),i.a.createElement(_.RangeControl,{label:r.a.vertical_spacing,className:"uagb-margin-control",value:Y,onChange:function(e){return s({contentVrPadding:e})},min:0,max:50,allowReset:!0}),i.a.createElement(_.RangeControl,{label:r.a.horizontal_spacing,className:"uagb-margin-control",value:Z,onChange:function(e){return s({contentHrPadding:e})},min:0,max:50,allowReset:!0}))),t,a)};t.default=i.a.memo(f)}}]);