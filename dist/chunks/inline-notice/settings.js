(window.webpackJsonp_ultimate_addons_for_gutenberg=window.webpackJsonp_ultimate_addons_for_gutenberg||[]).push([[65],{538:function(e,t,l){"use strict";l.r(t);var a=l(95),n=l.n(a),o=l(1),i=l.n(o),d=l(12),b=l(18),r=l(50),g=l(2),u=l(96),c=l(60),s=l(17),m=l(97),v=l(16),h=l(5),_=l(9),f=l(3);function T(){return(T=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var l=arguments[t];for(var a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a])}return e}).apply(this,arguments)}var P=function(e){var t,l,a=e=e.parentProps,o=a.attributes,P=a.setAttributes,p=o.icon,C=o.noticeDismiss,F=o.cookies,L=o.close_cookie_days,E=o.textColor,y=o.titleColor,M=o.noticeColor,O=o.contentBgColor,S=o.noticeDismissColor,j=o.noticeAlignment,H=o.titleFontFamily,B=o.titleFontWeight,z=o.titleFontSubset,k=o.titleFontSizeType,U=o.titleLineHeightType,R=o.titleFontSize,w=o.titleFontSizeTablet,A=o.titleFontSizeMobile,N=o.titleLineHeight,D=o.titleLineHeightTablet,G=o.titleLineHeightMobile,W=o.descFontFamily,I=o.descFontWeight,V=o.descFontSubset,x=o.descFontSize,J=o.descFontSizeType,q=o.descFontSizeTablet,K=o.descFontSizeMobile,Q=o.descLineHeight,X=o.descLineHeightType,Y=o.descLineHeightTablet,Z=o.descLineHeightMobile,$=o.titleLoadGoogleFonts,ee=o.descLoadGoogleFonts,te=o.titleTopPadding,le=o.titleRightPadding,ae=o.titleBottomPadding,ne=o.titleLeftPadding,oe=o.titleTopPaddingTablet,ie=o.titleRightPaddingTablet,de=o.titleBottomPaddingTablet,be=o.titleLeftPaddingTablet,re=o.titleTopPaddingMobile,ge=o.titleRightPaddingMobile,ue=o.titleBottomPaddingMobile,ce=o.titleLeftPaddingMobile,se=o.titlePaddingUnit,me=o.mobileTitlePaddingUnit,ve=o.tabletTitlePaddingUnit,he=o.titlePaddingLink,_e=o.headingTag,fe=o.layout,Te=o.highlightWidth,Pe=o.contentTopPadding,pe=o.contentRightPadding,Ce=o.contentBottomPadding,Fe=o.contentLeftPadding,Le=o.contentTopPaddingTablet,Ee=o.contentRightPaddingTablet,ye=o.contentBottomPaddingTablet,Me=o.contentLeftPaddingTablet,Oe=o.contentTopPaddingMobile,Se=o.contentRightPaddingMobile,je=o.contentBottomPaddingMobile,He=o.contentLeftPaddingMobile,Be=o.contentPaddingUnit,ze=o.mobileContentPaddingUnit,ke=o.tabletContentPaddingUnit,Ue=o.contentPaddingLink;if(!0===$){var Re={google:{families:[H+(B?":"+B:"")]}};t=i.a.createElement(r.a,{config:Re})}if(!0===ee){var we={google:{families:[W+(I?":"+I:"")]}};l=i.a.createElement(r.a,{config:we})}var Ae=[{value:"",label:Object(g.__)("Allow Always","ultimate-addons-for-gutenberg")},{value:"uagb-dismissable",label:Object(g.__)("Allow to Dismiss","ultimate-addons-for-gutenberg")}];return i.a.createElement(i.a.Fragment,null,i.a.createElement(h.BlockControls,{key:"controls"},i.a.createElement(h.AlignmentToolbar,{value:j,onChange:function(e){return P({noticeAlignment:e})}})),i.a.createElement(h.InspectorControls,null,i.a.createElement(u.a,{tabs:["general","advance"]},i.a.createElement(c.a,{key:"general"},i.a.createElement(f.PanelBody,{title:Object(g.__)("General","ultimate-addons-for-gutenberg"),initialOpen:!0},i.a.createElement(f.SelectControl,{label:Object(g.__)("Layout","ultimate-addons-for-gutenberg"),value:fe,onChange:function(e){return P({layout:e})},options:[{value:"modern",label:Object(g.__)("Modern","ultimate-addons-for-gutenberg")},{value:"simple",label:Object(g.__)("Default","ultimate-addons-for-gutenberg")}]}),"simple"===fe&&i.a.createElement(v.a,{label:Object(g.__)("Highlight width","ultimate-addons-for-gutenberg"),value:Te,onChange:function(e){return P({highlightWidth:e})},min:0,max:50,displayUnit:!1}),i.a.createElement("h2",null,Object(g.__)("Primary Heading","ultimate-addons-for-gutenberg")),i.a.createElement(f.SelectControl,{label:Object(g.__)("Tag"),value:_e,onChange:function(e){return P({headingTag:e})},options:[{value:"h1",label:Object(g.__)("H1","ultimate-addons-for-gutenberg")},{value:"h2",label:Object(g.__)("H2","ultimate-addons-for-gutenberg")},{value:"h3",label:Object(g.__)("H3","ultimate-addons-for-gutenberg")},{value:"h4",label:Object(g.__)("H4","ultimate-addons-for-gutenberg")},{value:"h5",label:Object(g.__)("H5","ultimate-addons-for-gutenberg")},{value:"h6",label:Object(g.__)("H6","ultimate-addons-for-gutenberg")},{value:"span",label:Object(g.__)("span","ultimate-addons-for-gutenberg")},{value:"p",label:Object(g.__)("p","ultimate-addons-for-gutenberg")}]}),i.a.createElement(f.SelectControl,{label:Object(g.__)("Notice Display","ultimate-addons-for-gutenberg"),options:Ae,value:C,onChange:function(e){return P({noticeDismiss:e})}}),C&&i.a.createElement(i.a.Fragment,null,i.a.createElement("p",{className:"components-base-control__label"},Object(g.__)("Icon","ultimate-addons-for-gutenberg")),i.a.createElement(n.a,{icons:wp.UAGBSvgIcons,renderFunc:d.a,theme:"default",value:p,onChange:function(e){return P({icon:e})},isMulti:!1,noSelectedPlaceholder:Object(g.__)("Select Icon","ultimate-addons-for-gutenberg")})),C&&i.a.createElement("hr",{className:"uagb-editor__separator"}),C&&i.a.createElement(f.ToggleControl,{label:Object(g.__)("Enable Cookies","ultimate-addons-for-gutenberg"),checked:F,onChange:function(e){var t=(0,Object(_.select)("core/editor").getCurrentPostId)().toString(),l=(new Date).getTime();P({c_id:t+"-"+l}),P({cookies:e})}}),F&&i.a.createElement(v.a,{label:Object(g.__)("Show Closed Notice After (Days)","ultimate-addons-for-gutenberg"),value:L,onChange:function(e){return P({close_cookie_days:e})},min:0,max:50,displayUnit:!1}),i.a.createElement("hr",{className:"uagb-editor__separator"}),i.a.createElement("h2",null,Object(g.__)("Colors","ultimate-addons-for-gutenberg")),i.a.createElement(s.a,{label:Object(g.__)("Title Color","ultimate-addons-for-gutenberg"),colorValue:y||"",onColorChange:function(e){return P({titleColor:e})}}),i.a.createElement("hr",{className:"uagb-editor__separator"}),i.a.createElement(s.a,{label:Object(g.__)("Highlight Color","ultimate-addons-for-gutenberg"),colorValue:M||"",onColorChange:function(e){return P({noticeColor:e})}}),i.a.createElement("hr",{className:"uagb-editor__separator"}),i.a.createElement(s.a,{label:Object(g.__)("Content Color","ultimate-addons-for-gutenberg"),colorValue:E||"",onColorChange:function(e){return P({textColor:e})}}),i.a.createElement("hr",{className:"uagb-editor__separator"}),i.a.createElement(s.a,{label:Object(g.__)("Content Background Color","ultimate-addons-for-gutenberg"),colorValue:O||"",onColorChange:function(e){return P({contentBgColor:e})}}),C&&i.a.createElement("hr",{className:"uagb-editor__separator"}),C&&i.a.createElement(s.a,{label:Object(g.__)("Content Background Color","ultimate-addons-for-gutenberg"),colorValue:S||"",onColorChange:function(e){return P({noticeDismissColor:e})}}),i.a.createElement("hr",{className:"uagb-editor__separator"}),i.a.createElement("h2",null,Object(g.__)("Typography","ultimate-addons-for-gutenberg")),i.a.createElement(b.a,{label:Object(g.__)("Title","ultimate-addons-for-gutenberg"),attributes:o,setAttributes:P,loadGoogleFonts:{value:$,label:"titleLoadGoogleFonts"},fontFamily:{value:H,label:"titleFontFamily"},fontWeight:{value:B,label:"titleFontWeight"},fontSubset:{value:z,label:"titleFontSubset"},fontSizeType:{value:k,label:"titleFontSizeType"},fontSize:{value:R,label:"titleFontSize"},fontSizeMobile:{value:A,label:"titleFontSizeMobile"},fontSizeTablet:{value:w,label:"titleFontSizeTablet"},lineHeightType:{value:U,label:"titleLineHeightType"},lineHeight:{value:N,label:"titleLineHeight"},lineHeightMobile:{value:G,label:"titleLineHeightMobile"},lineHeightTablet:{value:D,label:"titleLineHeightTablet"}}),i.a.createElement(b.a,{label:Object(g.__)("Content","ultimate-addons-for-gutenberg"),attributes:o,setAttributes:P,loadGoogleFonts:{value:ee,label:"descLoadGoogleFonts"},fontFamily:{value:W,label:"descFontFamily"},fontWeight:{value:I,label:"descFontWeight"},fontSubset:{value:V,label:"descFontSubset"},fontSizeType:{value:J,label:"descFontSizeType"},fontSize:{value:x,label:"descFontSize"},fontSizeMobile:{value:K,label:"descFontSizeMobile"},fontSizeTablet:{value:q,label:"descFontSizeTablet"},lineHeightType:{value:X,label:"descLineHeightType"},lineHeight:{value:Q,label:"descLineHeight"},lineHeightMobile:{value:Z,label:"descLineHeightMobile"},lineHeightTablet:{value:Y,label:"descLineHeightTablet"}}),i.a.createElement("hr",{className:"uagb-editor__separator"}),i.a.createElement(m.a,T({},e,{label:Object(g.__)("Title Padding","ultimate-addons-for-gutenberg"),valueTop:{value:te,label:"titleTopPadding"},valueRight:{value:le,label:"titleRightPadding"},valueBottom:{value:ae,label:"titleBottomPadding"},valueLeft:{value:ne,label:"titleLeftPadding"},valueTopTablet:{value:oe,label:"titleTopPaddingTablet"},valueRightTablet:{value:ie,label:"titleRightPaddingTablet"},valueBottomTablet:{value:de,label:"titleBottomPaddingTablet"},valueLeftTablet:{value:be,label:"titleLeftPaddingTablet"},valueTopMobile:{value:re,label:"titleTopPaddingMobile"},valueRightMobile:{value:ge,label:"titleRightPaddingMobile"},valueBottomMobile:{value:ue,label:"titleBottomPaddingMobile"},valueLeftMobile:{value:ce,label:"titleLeftPaddingMobile"},unit:{value:se,label:"titlePaddingUnit"},mUnit:{value:me,label:"mobiletitlePaddingUnit"},tUnit:{value:ve,label:"tablettitlePaddingUnit"},attributes:o,setAttributes:P,link:{value:he,label:"titlePaddingLink"}})),i.a.createElement("hr",{className:"uagb-editor__separator"}),i.a.createElement(m.a,T({},e,{label:Object(g.__)("Content Padding","ultimate-addons-for-gutenberg"),valueTop:{value:Pe,label:"contentTopPadding"},valueRight:{value:pe,label:"contentRightPadding"},valueBottom:{value:Ce,label:"contentBottomPadding"},valueLeft:{value:Fe,label:"contentLeftPadding"},valueTopTablet:{value:Le,label:"contentTopPaddingTablet"},valueRightTablet:{value:Ee,label:"contentRightPaddingTablet"},valueBottomTablet:{value:ye,label:"contentBottomPaddingTablet"},valueLeftTablet:{value:Me,label:"contentLeftPaddingTablet"},valueTopMobile:{value:Oe,label:"contentTopPaddingMobile"},valueRightMobile:{value:Se,label:"contentRightPaddingMobile"},valueBottomMobile:{value:je,label:"contentBottomPaddingMobile"},valueLeftMobile:{value:He,label:"contentLeftPaddingMobile"},unit:{value:Be,label:"contentPaddingUnit"},mUnit:{value:ze,label:"mobileContentPaddingUnit"},tUnit:{value:ke,label:"tabletContentPaddingUnit"},attributes:o,setAttributes:P,link:{value:Ue,label:"contentPaddingLink"}})))),i.a.createElement(c.a,{key:"advance"}))),t,l)};t.default=i.a.memo(P)}}]);