(window.webpackJsonp_ultimate_addons_for_gutenberg=window.webpackJsonp_ultimate_addons_for_gutenberg||[]).push([[65],{579:function(e,t,a){"use strict";a.r(t);var l=a(127),n=a.n(l),o=a(1),i=a.n(o),r=a(6),c=a(14),s=a(22),u=a(59),g=a(2),b=a(5),m=a(9),d=a(3),_=function(e){var t,a,l=e=e.parentProps,o=l.attributes,_=l.setAttributes,h=o.icon,f=o.noticeDismiss,p=o.cookies,C=o.close_cookie_days,v=o.textColor,E=o.titleColor,F=o.noticeColor,S=o.contentBgColor,H=o.noticeDismissColor,y=o.noticeAlignment,O=o.titleFontFamily,j=o.titleFontWeight,T=o.titleFontSubset,N=o.titleFontSizeType,z=o.titleLineHeightType,w=o.titleFontSize,L=o.titleFontSizeTablet,P=o.titleFontSizeMobile,R=o.titleLineHeight,k=o.titleLineHeightTablet,M=o.titleLineHeightMobile,A=o.descFontFamily,x=o.descFontWeight,D=o.descFontSubset,G=o.descFontSize,W=o.descFontSizeType,B=o.descFontSizeTablet,I=o.descFontSizeMobile,V=o.descLineHeight,J=o.descLineHeightType,U=o.descLineHeightTablet,q=o.descLineHeightMobile,K=o.titleLoadGoogleFonts,Q=o.descLoadGoogleFonts,X=o.contentVrPadding,Y=o.contentHrPadding,Z=o.titleVrPadding,$=o.titleHrPadding,ee=o.headingTag,te=o.layout,ae=o.highlightWidth;if(!0===K){var le={google:{families:[O+(j?":"+j:"")]}};t=i.a.createElement(u.a,{config:le})}if(!0===Q){var ne={google:{families:[A+(x?":"+x:"")]}};a=i.a.createElement(u.a,{config:ne})}var oe=[{value:"",label:Object(g.__)("Allow Always","ultimate-addons-for-gutenberg")},{value:"uagb-dismissable",label:Object(g.__)("Allow to Dismiss","ultimate-addons-for-gutenberg")}];return i.a.createElement(i.a.Fragment,null,i.a.createElement(b.BlockControls,{key:"controls"},i.a.createElement(b.AlignmentToolbar,{value:y,onChange:function(e){return _({noticeAlignment:e})}})),i.a.createElement(b.InspectorControls,null,i.a.createElement(d.PanelBody,{title:Object(g.__)("General","ultimate-addons-for-gutenberg"),initialOpen:!0},i.a.createElement(d.SelectControl,{label:Object(g.__)("Layout","ultimate-addons-for-gutenberg"),value:te,onChange:function(e){return _({layout:e})},options:[{value:"modern",label:Object(g.__)("Modern","ultimate-addons-for-gutenberg")},{value:"simple",label:Object(g.__)("Default","ultimate-addons-for-gutenberg")}]}),"simple"===te&&i.a.createElement(d.RangeControl,{label:Object(g.__)("Highlight width","ultimate-addons-for-gutenberg"),value:ae,onChange:function(e){return _({highlightWidth:e})},min:0,max:50,allowReset:!0}),i.a.createElement("h2",null,Object(g.__)("Primary Heading","ultimate-addons-for-gutenberg")),i.a.createElement(d.SelectControl,{label:Object(g.__)("Tag"),value:ee,onChange:function(e){return _({headingTag:e})},options:[{value:"h1",label:Object(g.__)("H1","ultimate-addons-for-gutenberg")},{value:"h2",label:Object(g.__)("H2","ultimate-addons-for-gutenberg")},{value:"h3",label:Object(g.__)("H3","ultimate-addons-for-gutenberg")},{value:"h4",label:Object(g.__)("H4","ultimate-addons-for-gutenberg")},{value:"h5",label:Object(g.__)("H5","ultimate-addons-for-gutenberg")},{value:"h6",label:Object(g.__)("H6","ultimate-addons-for-gutenberg")},{value:"span",label:Object(g.__)("span","ultimate-addons-for-gutenberg")},{value:"p",label:Object(g.__)("p","ultimate-addons-for-gutenberg")}]}),i.a.createElement(d.SelectControl,{label:Object(g.__)("Notice Display","ultimate-addons-for-gutenberg"),options:oe,value:f,onChange:function(e){return _({noticeDismiss:e})}}),f&&i.a.createElement(i.a.Fragment,null,i.a.createElement("p",{className:"components-base-control__label"},Object(g.__)("Icon","ultimate-addons-for-gutenberg")),i.a.createElement(n.a,{icons:wp.UAGBSvgIcons,renderFunc:c.a,theme:"default",value:h,onChange:function(e){return _({icon:e})},isMulti:!1,noSelectedPlaceholder:Object(g.__)("Select Icon","ultimate-addons-for-gutenberg")})),f&&i.a.createElement("hr",{className:"uagb-editor__separator"}),f&&i.a.createElement(d.ToggleControl,{label:Object(g.__)("Enable Cookies","ultimate-addons-for-gutenberg"),checked:p,onChange:function(e){var t=(0,Object(m.select)("core/editor").getCurrentPostId)().toString(),a=(new Date).getTime();_({c_id:t+"-"+a}),_({cookies:e})}}),p&&i.a.createElement(d.RangeControl,{label:Object(g.__)("Show Closed Notice After (Days)","ultimate-addons-for-gutenberg"),value:C,onChange:function(e){return _({close_cookie_days:e})},min:0,max:50,allowReset:!0}),i.a.createElement("hr",{className:"uagb-editor__separator"}),i.a.createElement("h2",null,Object(g.__)("Colors","ultimate-addons-for-gutenberg")),i.a.createElement("p",{className:"uagb-setting-label"},Object(g.__)("Title Color","ultimate-addons-for-gutenberg"),i.a.createElement("span",{className:"components-base-control__label"},i.a.createElement("span",{className:"component-color-indicator",style:{backgroundColor:E}}))),i.a.createElement(b.ColorPalette,{value:E,onChange:function(e){return _({titleColor:e})},allowReset:!0}),i.a.createElement("hr",{className:"uagb-editor__separator"}),i.a.createElement("p",{className:"uagb-setting-label"},Object(g.__)("Highlight Color","ultimate-addons-for-gutenberg"),i.a.createElement("span",{className:"components-base-control__label"},i.a.createElement("span",{className:"component-color-indicator",style:{backgroundColor:F}}))),i.a.createElement(b.ColorPalette,{value:F,onChange:function(e){return _({noticeColor:e})},allowReset:!0}),i.a.createElement("hr",{className:"uagb-editor__separator"}),i.a.createElement("p",{className:"uagb-setting-label"},Object(g.__)("Content Color","ultimate-addons-for-gutenberg"),i.a.createElement("span",{className:"components-base-control__label"},i.a.createElement("span",{className:"component-color-indicator",style:{backgroundColor:v}}))),i.a.createElement(b.ColorPalette,{value:v,onChange:function(e){return _({textColor:e})},allowReset:!0}),i.a.createElement("hr",{className:"uagb-editor__separator"}),i.a.createElement("p",{className:"uagb-setting-label"},Object(g.__)("Content Background Color","ultimate-addons-for-gutenberg"),i.a.createElement("span",{className:"components-base-control__label"},i.a.createElement("span",{className:"component-color-indicator",style:{backgroundColor:S}}))),i.a.createElement(b.ColorPalette,{value:S,onChange:function(e){return _({contentBgColor:e})},allowReset:!0}),f&&i.a.createElement("hr",{className:"uagb-editor__separator"}),f&&i.a.createElement("p",{className:"uagb-setting-label"},Object(g.__)("Dismiss Icon Color","ultimate-addons-for-gutenberg"),i.a.createElement("span",{className:"components-base-control__label"},i.a.createElement("span",{className:"component-color-indicator",style:{backgroundColor:H}}))),f&&i.a.createElement(b.ColorPalette,{value:H,onChange:function(e){return _({noticeDismissColor:e})},allowReset:!0}),i.a.createElement("hr",{className:"uagb-editor__separator"}),i.a.createElement("h2",null,Object(g.__)("Typography","ultimate-addons-for-gutenberg")),i.a.createElement(s.a,{label:Object(g.__)("Title","ultimate-addons-for-gutenberg"),attributes:o,setAttributes:_,loadGoogleFonts:{value:K,label:"titleLoadGoogleFonts"},fontFamily:{value:O,label:"titleFontFamily"},fontWeight:{value:j,label:"titleFontWeight"},fontSubset:{value:T,label:"titleFontSubset"},fontSizeType:{value:N,label:"titleFontSizeType"},fontSize:{value:w,label:"titleFontSize"},fontSizeMobile:{value:P,label:"titleFontSizeMobile"},fontSizeTablet:{value:L,label:"titleFontSizeTablet"},lineHeightType:{value:z,label:"titleLineHeightType"},lineHeight:{value:R,label:"titleLineHeight"},lineHeightMobile:{value:M,label:"titleLineHeightMobile"},lineHeightTablet:{value:k,label:"titleLineHeightTablet"}}),i.a.createElement(s.a,{label:Object(g.__)("Content","ultimate-addons-for-gutenberg"),attributes:o,setAttributes:_,loadGoogleFonts:{value:Q,label:"descLoadGoogleFonts"},fontFamily:{value:A,label:"descFontFamily"},fontWeight:{value:x,label:"descFontWeight"},fontSubset:{value:D,label:"descFontSubset"},fontSizeType:{value:W,label:"descFontSizeType"},fontSize:{value:G,label:"descFontSize"},fontSizeMobile:{value:I,label:"descFontSizeMobile"},fontSizeTablet:{value:B,label:"descFontSizeTablet"},lineHeightType:{value:J,label:"descLineHeightType"},lineHeight:{value:V,label:"descLineHeight"},lineHeightMobile:{value:q,label:"descLineHeightMobile"},lineHeightTablet:{value:U,label:"descLineHeightTablet"}}),i.a.createElement("hr",{className:"uagb-editor__separator"}),i.a.createElement("h2",null,Object(g.__)("Title Padding (px)","ultimate-addons-for-gutenberg")),i.a.createElement(d.RangeControl,{label:r.a.vertical_spacing,className:"uagb-margin-control",value:Z,onChange:function(e){return _({titleVrPadding:e})},min:0,max:50,allowReset:!0}),i.a.createElement(d.RangeControl,{label:r.a.horizontal_spacing,className:"uagb-margin-control",value:$,onChange:function(e){return _({titleHrPadding:e})},min:0,max:50,allowReset:!0}),i.a.createElement("hr",{className:"uagb-editor__separator"}),i.a.createElement("h2",null,Object(g.__)("Content Padding (px)","ultimate-addons-for-gutenberg")),i.a.createElement(d.RangeControl,{label:r.a.vertical_spacing,className:"uagb-margin-control",value:X,onChange:function(e){return _({contentVrPadding:e})},min:0,max:50,allowReset:!0}),i.a.createElement(d.RangeControl,{label:r.a.horizontal_spacing,className:"uagb-margin-control",value:Y,onChange:function(e){return _({contentHrPadding:e})},min:0,max:50,allowReset:!0}))),t,a)};t.default=i.a.memo(_)}}]);