(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{331:function(e,t,a){"use strict";a.r(t);var l=a(3),n=a.n(l),o=a(2),i=a(0),r=a(9),u=a(4),c=a(8),b=Object(l.lazy)((function(){return Promise.resolve().then(a.bind(null,5))})),g=Object(l.lazy)((function(){return Promise.resolve().then(a.bind(null,6))})),s=Object(l.lazy)((function(){return Promise.resolve().then(a.t.bind(null,11,7))})),m=[{value:"thumbnail",label:Object(i.__)("Thumbnail","ultimate-addons-for-gutenberg")},{value:"medium",label:Object(i.__)("Medium","ultimate-addons-for-gutenberg")},{value:"full",label:Object(i.__)("Large","ultimate-addons-for-gutenberg")}],d=wp.blockEditor,f=d.AlignmentToolbar,_=d.BlockControls,p=d.InspectorControls,h=d.PanelColorSettings,v=d.MediaUpload,S=wp.components,O=S.PanelBody,j=S.SelectControl,E=S.RangeControl,F=S.Button,T=S.TextControl,C=S.BaseControl,z=S.ToggleControl,L=function(e){var t,a,d,S=e=e.parentProps,L=S.setAttributes,y=S.attributes,H=y.align,k=y.tag,x=y.titleColor,M=y.prefixColor,I=y.descColor,w=y.titleFontFamily,N=y.titleFontWeight,R=y.titleFontSubset,P=y.titleFontSizeType,W=y.titleFontSize,A=y.titleFontSizeMobile,B=y.titleFontSizeTablet,G=y.titleLineHeightType,U=y.titleLineHeight,D=y.titleLineHeightMobile,q=y.titleLineHeightTablet,J=y.prefixFontFamily,V=y.prefixFontWeight,K=y.prefixFontSubset,Q=y.prefixFontSizeType,X=y.prefixFontSize,Y=y.prefixFontSizeMobile,Z=y.prefixFontSizeTablet,$=y.prefixLineHeightType,ee=y.prefixLineHeight,te=y.prefixLineHeightMobile,ae=y.prefixLineHeightTablet,le=y.descFontFamily,ne=y.descFontWeight,oe=y.descFontSubset,ie=y.descFontSizeType,re=y.descFontSize,ue=y.descFontSizeMobile,ce=y.descFontSizeTablet,be=y.descLineHeightType,ge=y.descLineHeight,se=y.descLineHeightMobile,me=y.descLineHeightTablet,de=y.socialFontSize,fe=y.socialFontSizeType,_e=y.socialFontSizeMobile,pe=y.socialFontSizeTablet,he=y.titleLoadGoogleFonts,ve=y.prefixLoadGoogleFonts,Se=y.descLoadGoogleFonts,Oe=y.image,je=y.imgStyle,Ee=y.imgAlign,Fe=y.imgSize,Te=y.imgWidth,Ce=y.imgPosition,ze=y.titleSpace,Le=y.descSpace,ye=y.prefixSpace,He=y.imgLeftMargin,ke=y.imgRightMargin,xe=y.imgTopMargin,Me=y.imgBottomMargin,Ie=y.twitterIcon,we=y.fbIcon,Ne=y.linkedinIcon,Re=y.pinIcon,Pe=y.twitterLink,We=y.fbLink,Ae=y.linkedinLink,Be=y.pinLink,Ge=y.socialColor,Ue=y.socialHoverColor,De=y.socialSpace,qe=y.socialTarget,Je=y.socialEnable,Ve=y.stack,Ke=function(e){var t=[];for(var a in e)t.push({value:a,label:a});return t},Qe=Object.keys(r);if(Oe&&Oe.sizes&&(m=Ke(Oe.sizes)),1==he){var Xe={google:{families:[w+(N?":"+N:"")]}};t=n.a.createElement(g,{config:Xe})}if(1==ve){var Ye={google:{families:[J+(V?":"+V:"")]}};a=n.a.createElement(g,{config:Ye})}if(1==Se){var Ze={google:{families:[le+(ne?":"+ne:"")]}};d=n.a.createElement(g,{config:Ze})}return n.a.createElement(n.a.Fragment,null,"above"==Ce&&n.a.createElement(_,{key:"controls"},n.a.createElement(f,{value:H,onChange:function(e){return L({align:e})}})),n.a.createElement(p,null,n.a.createElement(O,{title:Object(i.__)("Image")},n.a.createElement(C,{id:"team-settings",className:"editor-bg-image-control",label:Object(i.__)("Team Member Image","ultimate-addons-for-gutenberg")},n.a.createElement(v,{title:Object(i.__)("Select Image","ultimate-addons-for-gutenberg"),onSelect:function(t){var a=e.setAttributes;if(t&&t.url){if(t.type&&"image"==t.type&&(a({image:t}),t.sizes)){var l=Ke(t.sizes);m=l}}else a({image:null})},allowedTypes:["image"],value:Oe,render:function(e){var t=e.open;return n.a.createElement(F,{isSecondary:!0,onClick:t},Oe?Object(i.__)("Replace image","ultimate-addons-for-gutenberg"):Object(i.__)("Select Image","ultimate-addons-for-gutenberg"))}}),Oe&&n.a.createElement(F,{className:"uagb-rm-btn",onClick:function(){L({image:null})},isLink:!0,isDestructive:!0},Object(i.__)("Remove Image","ultimate-addons-for-gutenberg"))),Oe&&n.a.createElement(j,{label:Object(i.__)("Position","ultimate-addons-for-gutenberg"),value:Ce,onChange:function(e){return L({imgPosition:e})},options:[{value:"above",label:Object(i.__)("Above","ultimate-addons-for-gutenberg")},{value:"left",label:Object(i.__)("Left","ultimate-addons-for-gutenberg")},{value:"right",label:Object(i.__)("Right","ultimate-addons-for-gutenberg")}]}),"above"!=Ce&&Oe&&n.a.createElement(j,{label:Object(i.__)("Stack on","ultimate-addons-for-gutenberg"),value:Ve,options:[{value:"none",label:Object(i.__)("None","ultimate-addons-for-gutenberg")},{value:"tablet",label:Object(i.__)("Tablet","ultimate-addons-for-gutenberg")},{value:"mobile",label:Object(i.__)("Mobile","ultimate-addons-for-gutenberg")}],help:Object(i.__)("Note: Choose on what breakpoint the Team will stack."),onChange:function(e){return L({stack:e})}}),Oe&&n.a.createElement(j,{label:Object(i.__)("Image Style","ultimate-addons-for-gutenberg"),value:je,onChange:function(e){return L({imgStyle:e})},options:[{value:"normal",label:Object(i.__)("Normal","ultimate-addons-for-gutenberg")},{value:"circle",label:Object(i.__)("Circle","ultimate-addons-for-gutenberg")},{value:"square",label:Object(i.__)("Square","ultimate-addons-for-gutenberg")}]}),Ce&&"above"!==Ce&&Oe&&n.a.createElement(j,{label:Object(i.__)("Vertical Alignment","ultimate-addons-for-gutenberg"),value:Ee,onChange:function(e){return L({imgAlign:e})},options:[{value:"top",label:Object(i.__)("Top","ultimate-addons-for-gutenberg")},{value:"middle",label:Object(i.__)("Middle","ultimate-addons-for-gutenberg")}]}),Oe&&n.a.createElement(n.a.Fragment,null,n.a.createElement(j,{label:Object(i.__)("Size","ultimate-addons-for-gutenberg"),options:m,value:Fe,onChange:function(e){return L({imgSize:e})}}),n.a.createElement(E,{label:Object(i.__)("Width","ultimate-addons-for-gutenberg"),value:Te,onChange:function(e){return L({imgWidth:e})},min:0,max:500,allowReset:!0}))),n.a.createElement(O,{title:Object(i.__)("Social Links","ultimate-addons-for-gutenberg"),initialOpen:!1},n.a.createElement(z,{label:Object(i.__)("Enable Social Links","ultimate-addons-for-gutenberg"),checked:Je,onChange:function(){return L({socialEnable:!Je})}}),Je&&n.a.createElement(n.a.Fragment,null,n.a.createElement(z,{label:Object(i.__)("Open Links in New Window","ultimate-addons-for-gutenberg"),checked:qe,onChange:function(){return L({socialTarget:!qe})}}),n.a.createElement(O,{title:Object(i.__)("Twitter","ultimate-addons-for-gutenberg"),initialOpen:!1},n.a.createElement("p",{className:"components-base-control__label"},Object(i.__)("Icon","ultimate-addons-for-gutenberg")),n.a.createElement(s,{icons:Qe,renderFunc:u.a,theme:"default",value:Ie,onChange:function(e){return L({twitterIcon:e})},isMulti:!1,noSelectedPlaceholder:Object(i.__)("Select Icon","ultimate-addons-for-gutenberg")}),n.a.createElement("p",{className:"components-base-control__label"},Object(i.__)("URL","ultimate-addons-for-gutenberg")),n.a.createElement(T,{value:Pe,onChange:function(e){return L({twitterLink:e})},placeholder:Object(i.__)("Enter Twitter URL","ultimate-addons-for-gutenberg")})),n.a.createElement(O,{title:Object(i.__)("Facebook","ultimate-addons-for-gutenberg"),initialOpen:!1},n.a.createElement("p",{className:"components-base-control__label"},Object(i.__)("Icon","ultimate-addons-for-gutenberg")),n.a.createElement(s,{icons:Qe,renderFunc:u.a,theme:"default",value:we,onChange:function(e){return L({fbIcon:e})},isMulti:!1,noSelectedPlaceholder:Object(i.__)("Select Icon","ultimate-addons-for-gutenberg")}),n.a.createElement("p",{className:"components-base-control__label"},Object(i.__)("URL","ultimate-addons-for-gutenberg")),n.a.createElement(T,{value:We,onChange:function(e){return L({fbLink:e})},placeholder:Object(i.__)("Enter Facebook URL","ultimate-addons-for-gutenberg")})),n.a.createElement(O,{title:Object(i.__)("LinkedIn","ultimate-addons-for-gutenberg"),initialOpen:!1},n.a.createElement("p",{className:"components-base-control__label"},Object(i.__)("Icon","ultimate-addons-for-gutenberg")),n.a.createElement(s,{icons:Qe,renderFunc:u.a,noSelectedPlaceholder:Object(i.__)("Select Icon","ultimate-addons-for-gutenberg"),theme:"default",value:Ne,onChange:function(e){return L({linkedinIcon:e})},isMulti:!1}),n.a.createElement("p",{className:"components-base-control__label"},Object(i.__)("URL","ultimate-addons-for-gutenberg")),n.a.createElement(T,{value:Ae,onChange:function(e){return L({linkedinLink:e})},placeholder:Object(i.__)("Enter LinkedIn URL","ultimate-addons-for-gutenberg")})),n.a.createElement(O,{title:Object(i.__)("Pinterest","ultimate-addons-for-gutenberg"),initialOpen:!1},n.a.createElement("p",{className:"components-base-control__label"},Object(i.__)("Icon","ultimate-addons-for-gutenberg")),n.a.createElement(s,{icons:Qe,renderFunc:u.a,noSelectedPlaceholder:Object(i.__)("Select Icon","ultimate-addons-for-gutenberg"),theme:"default",value:Re,onChange:function(e){return L({pinIcon:e})},isMulti:!1}),n.a.createElement("p",{className:"components-base-control__label"},Object(i.__)("URL","ultimate-addons-for-gutenberg")),n.a.createElement(T,{value:Be,onChange:function(e){return L({pinLink:e})},placeholder:Object(i.__)("Enter Pinterest URL","ultimate-addons-for-gutenberg")})))),n.a.createElement(O,{title:Object(i.__)("Typography","ultimate-addons-for-gutenberg"),initialOpen:!1},n.a.createElement(j,{label:Object(i.__)("Title Tag","ultimate-addons-for-gutenberg"),value:k,onChange:function(e){return L({tag:e})},options:[{value:"h1",label:Object(i.__)("H1","ultimate-addons-for-gutenberg")},{value:"h2",label:Object(i.__)("H2","ultimate-addons-for-gutenberg")},{value:"h3",label:Object(i.__)("H3","ultimate-addons-for-gutenberg")},{value:"h4",label:Object(i.__)("H4","ultimate-addons-for-gutenberg")},{value:"h5",label:Object(i.__)("H5","ultimate-addons-for-gutenberg")},{value:"h6",label:Object(i.__)("H6","ultimate-addons-for-gutenberg")}]}),n.a.createElement("hr",{className:"uagb-editor__separator"}),n.a.createElement("h2",null,Object(i.__)("Title","ultimate-addons-for-gutenberg")),n.a.createElement(l.Suspense,{fallback:Object(c.a)()},n.a.createElement(b,{label:Object(i.__)("Typography","ultimate-addons-for-gutenberg"),attributes:y,setAttributes:L,loadGoogleFonts:{value:he,label:"titleLoadGoogleFonts"},fontFamily:{value:w,label:"titleFontFamily"},fontWeight:{value:N,label:"titleFontWeight"},fontSubset:{value:R,label:"titleFontSubset"},fontSizeType:{value:P,label:"titleFontSizeType"},fontSize:{value:W,label:"titleFontSize"},fontSizeMobile:{value:A,label:"titleFontSizeMobile"},fontSizeTablet:{value:B,label:"titleFontSizeTablet"},lineHeightType:{value:G,label:"titleLineHeightType"},lineHeight:{value:U,label:"titleLineHeight"},lineHeightMobile:{value:D,label:"titleLineHeightMobile"},lineHeightTablet:{value:q,label:"titleLineHeightTablet"}})),n.a.createElement("hr",{className:"uagb-editor__separator"}),n.a.createElement("h2",null,Object(i.__)("Prefix","ultimate-addons-for-gutenberg")),n.a.createElement(l.Suspense,{fallback:Object(c.a)()},n.a.createElement(b,{label:Object(i.__)("Typography","ultimate-addons-for-gutenberg"),attributes:y,setAttributes:L,loadGoogleFonts:{value:ve,label:"prefixLoadGoogleFonts"},fontFamily:{value:J,label:"prefixFontFamily"},fontWeight:{value:V,label:"prefixFontWeight"},fontSubset:{value:K,label:"prefixFontSubset"},fontSizeType:{value:Q,label:"prefixFontSizeType"},fontSize:{value:X,label:"prefixFontSize"},fontSizeMobile:{value:Y,label:"prefixFontSizeMobile"},fontSizeTablet:{value:Z,label:"prefixFontSizeTablet"},lineHeightType:{value:$,label:"prefixLineHeightType"},lineHeight:{value:ee,label:"prefixLineHeight"},lineHeightMobile:{value:te,label:"prefixLineHeightMobile"},lineHeightTablet:{value:ae,label:"prefixLineHeightTablet"}})),n.a.createElement("hr",{className:"uagb-editor__separator"}),n.a.createElement("h2",null,Object(i.__)("Description","ultimate-addons-for-gutenberg")),n.a.createElement(l.Suspense,{fallback:Object(c.a)()},n.a.createElement(b,{label:Object(i.__)("Typography","ultimate-addons-for-gutenberg"),attributes:y,setAttributes:L,loadGoogleFonts:{value:Se,label:"descLoadGoogleFonts"},fontFamily:{value:le,label:"descFontFamily"},fontWeight:{value:ne,label:"descFontWeight"},fontSubset:{value:oe,label:"descFontSubset"},fontSizeType:{value:ie,label:"descFontSizeType"},fontSize:{value:re,label:"descFontSize"},fontSizeMobile:{value:ue,label:"descFontSizeMobile"},fontSizeTablet:{value:ce,label:"descFontSizeTablet"},lineHeightType:{value:be,label:"descLineHeightType"},lineHeight:{value:ge,label:"descLineHeight"},lineHeightMobile:{value:se,label:"descLineHeightMobile"},lineHeightTablet:{value:me,label:"descLineHeightTablet"}})),n.a.createElement("hr",{className:"uagb-editor__separator"}),n.a.createElement("h2",null,Object(i.__)("Social Icons","ultimate-addons-for-gutenberg")),n.a.createElement(l.Suspense,{fallback:Object(c.a)()},n.a.createElement(b,{label:Object(i.__)("Typography","ultimate-addons-for-gutenberg"),attributes:y,setAttributes:L,fontSizeType:{value:fe,label:"socialFontSizeType"},fontSize:{value:de,label:"socialFontSize"},fontSizeMobile:{value:_e,label:"socialFontSizeMobile"},fontSizeTablet:{value:pe,label:"socialFontSizeTablet"},disableFontFamily:!0,disableLineHeight:!0}))),n.a.createElement(h,{title:Object(i.__)("Color Settings","ultimate-addons-for-gutenberg"),initialOpen:!1,colorSettings:[{value:x,onChange:function(e){return L({titleColor:e})},label:Object(i.__)("Title Color","ultimate-addons-for-gutenberg")},{value:M,onChange:function(e){return L({prefixColor:e})},label:Object(i.__)("Designation Color","ultimate-addons-for-gutenberg")},{value:I,onChange:function(e){return L({descColor:e})},label:Object(i.__)("Description Color","ultimate-addons-for-gutenberg")},{value:Ge,onChange:function(e){return L({socialColor:e})},label:Object(i.__)("Social Icon Color","ultimate-addons-for-gutenberg")},{value:Ue,onChange:function(e){return L({socialHoverColor:e})},label:Object(i.__)("Social Icon Hover Color","ultimate-addons-for-gutenberg")}]}),n.a.createElement(O,{title:Object(i.__)("Spacing","ultimate-addons-for-gutenberg"),initialOpen:!1},n.a.createElement(E,{label:Object(i.__)("Title Bottom Spacing","ultimate-addons-for-gutenberg"),value:ze,onChange:function(e){return L({titleSpace:e})},min:0,max:50,allowReset:!0,initialPosition:0}),n.a.createElement(E,{label:Object(i.__)("Designation Bottom Spacing","ultimate-addons-for-gutenberg"),value:ye,onChange:function(e){return L({prefixSpace:e})},min:0,max:50,allowReset:!0,initialPosition:0}),n.a.createElement(E,{label:Object(i.__)("Description Bottom Spacing","ultimate-addons-for-gutenberg"),value:Le,onChange:function(e){return L({descSpace:e})},min:0,max:50,allowReset:!0}),n.a.createElement(E,{label:Object(i.__)("Inter Social Icon Spacing","ultimate-addons-for-gutenberg"),value:De,onChange:function(e){return L({socialSpace:e})},min:0,max:50,allowReset:!0}),Oe&&n.a.createElement(n.a.Fragment,null,n.a.createElement("hr",{className:"uagb-editor__separator"}),n.a.createElement("h2",null,Object(i.__)("Image Margin (px)","ultimate-addons-for-gutenberg")),"above"!=Ce&&n.a.createElement(E,{label:o.a.left_margin,className:"uagb-margin-control",value:He,onChange:function(e){return L({imgLeftMargin:e})},min:0,max:50,allowReset:!0}),"above"!=Ce&&n.a.createElement(E,{label:o.a.right_margin,className:"uagb-margin-control",value:ke,onChange:function(e){return L({imgRightMargin:e})},min:0,max:50,allowReset:!0}),n.a.createElement(E,{label:o.a.top_margin,className:"uagb-margin-control",value:xe,onChange:function(e){return L({imgTopMargin:e})},min:0,max:50,allowReset:!0}),n.a.createElement(E,{label:o.a.bottom_margin,className:"uagb-margin-control",value:Me,onChange:function(e){return L({imgBottomMargin:e})},min:0,max:50,allowReset:!0})))),n.a.createElement(l.Suspense,{fallback:Object(c.a)()},t,a,d))};t.default=n.a.memo(L)}}]);