(window.webpackJsonp_ultimate_addons_for_gutenberg=window.webpackJsonp_ultimate_addons_for_gutenberg||[]).push([[100],{515:function(e,t,a){"use strict";a.r(t);var l=a(1),n=a.n(l),o=a(6),i=a(2),r=a(12),c=a(10),u=a(18),b=a(51),g=a(97),s=a.n(g),m=a(5),d=a(4),f=[{value:"thumbnail",label:Object(i.__)("Thumbnail","ultimate-addons-for-gutenberg")},{value:"medium",label:Object(i.__)("Medium","ultimate-addons-for-gutenberg")},{value:"full",label:Object(i.__)("Large","ultimate-addons-for-gutenberg")}],_=function(e){var t,a,g,_=e=e.parentProps,p=_.setAttributes,h=_.attributes,v=h.align,S=h.tag,O=h.titleColor,j=h.prefixColor,E=h.descColor,F=h.titleFontFamily,C=h.titleFontWeight,T=h.titleFontSubset,y=h.titleFontSizeType,L=h.titleFontSize,z=h.titleFontSizeMobile,H=h.titleFontSizeTablet,x=h.titleLineHeightType,M=h.titleLineHeight,k=h.titleLineHeightMobile,I=h.titleLineHeightTablet,R=h.prefixFontFamily,w=h.prefixFontWeight,N=h.prefixFontSubset,P=h.prefixFontSizeType,B=h.prefixFontSize,A=h.prefixFontSizeMobile,G=h.prefixFontSizeTablet,U=h.prefixLineHeightType,W=h.prefixLineHeight,D=h.prefixLineHeightMobile,q=h.prefixLineHeightTablet,J=h.descFontFamily,V=h.descFontWeight,K=h.descFontSubset,Q=h.descFontSizeType,X=h.descFontSize,Y=h.descFontSizeMobile,Z=h.descFontSizeTablet,$=h.descLineHeightType,ee=h.descLineHeight,te=h.descLineHeightMobile,ae=h.descLineHeightTablet,le=h.socialFontSize,ne=h.socialFontSizeType,oe=h.socialFontSizeMobile,ie=h.socialFontSizeTablet,re=h.titleLoadGoogleFonts,ce=h.prefixLoadGoogleFonts,ue=h.descLoadGoogleFonts,be=h.image,ge=h.imgStyle,se=h.imgAlign,me=h.imgSize,de=h.imgWidth,fe=h.imgPosition,_e=h.titleSpace,pe=h.descSpace,he=h.prefixSpace,ve=h.imgLeftMargin,Se=h.imgRightMargin,Oe=h.imgTopMargin,je=h.imgBottomMargin,Ee=h.twitterIcon,Fe=h.fbIcon,Ce=h.linkedinIcon,Te=h.pinIcon,ye=h.twitterLink,Le=h.fbLink,ze=h.linkedinLink,He=h.pinLink,xe=h.socialColor,Me=h.socialHoverColor,ke=h.socialSpace,Ie=h.socialTarget,Re=h.socialEnable,we=h.stack,Ne=function(e){var t=[];for(var a in e)t.push({value:a,label:a});return t};if(be&&be.sizes&&(f=Ne(be.sizes)),1==re){var Pe={google:{families:[F+(C?":"+C:"")]}};t=n.a.createElement(b.a,{config:Pe})}if(1==ce){var Be={google:{families:[R+(w?":"+w:"")]}};a=n.a.createElement(b.a,{config:Be})}if(1==ue){var Ae={google:{families:[J+(V?":"+V:"")]}};g=n.a.createElement(b.a,{config:Ae})}return n.a.createElement(n.a.Fragment,null,"above"==fe&&n.a.createElement(m.BlockControls,{key:"controls"},n.a.createElement(m.AlignmentToolbar,{value:v,onChange:function(e){return p({align:e})}})),n.a.createElement(m.InspectorControls,null,n.a.createElement(d.PanelBody,{title:Object(i.__)("Image")},n.a.createElement(d.BaseControl,{id:"team-settings",className:"editor-bg-image-control",label:Object(i.__)("Team Member Image","ultimate-addons-for-gutenberg")},n.a.createElement(m.MediaUpload,{title:Object(i.__)("Select Image","ultimate-addons-for-gutenberg"),onSelect:function(e){if(e&&e.url){if(e.type&&"image"==e.type&&(p({image:e}),e.sizes)){var t=Ne(e.sizes);f=t}}else p({image:null})},allowedTypes:["image"],value:be,render:function(e){var t=e.open;return n.a.createElement(d.Button,{isSecondary:!0,onClick:t},be?Object(i.__)("Replace image","ultimate-addons-for-gutenberg"):Object(i.__)("Select Image","ultimate-addons-for-gutenberg"))}}),be&&n.a.createElement(d.Button,{className:"uagb-rm-btn",onClick:function(){p({image:null})},isLink:!0,isDestructive:!0},Object(i.__)("Remove Image","ultimate-addons-for-gutenberg"))),be&&n.a.createElement(d.SelectControl,{label:Object(i.__)("Position","ultimate-addons-for-gutenberg"),value:fe,onChange:function(e){return p({imgPosition:e})},options:[{value:"above",label:Object(i.__)("Above","ultimate-addons-for-gutenberg")},{value:"left",label:Object(i.__)("Left","ultimate-addons-for-gutenberg")},{value:"right",label:Object(i.__)("Right","ultimate-addons-for-gutenberg")}]}),"above"!=fe&&be&&n.a.createElement(d.SelectControl,{label:Object(i.__)("Stack on","ultimate-addons-for-gutenberg"),value:we,options:[{value:"none",label:Object(i.__)("None","ultimate-addons-for-gutenberg")},{value:"tablet",label:Object(i.__)("Tablet","ultimate-addons-for-gutenberg")},{value:"mobile",label:Object(i.__)("Mobile","ultimate-addons-for-gutenberg")}],help:Object(i.__)("Note: Choose on what breakpoint the Team will stack."),onChange:function(e){return p({stack:e})}}),be&&n.a.createElement(d.SelectControl,{label:Object(i.__)("Image Style","ultimate-addons-for-gutenberg"),value:ge,onChange:function(e){return p({imgStyle:e})},options:[{value:"normal",label:Object(i.__)("Normal","ultimate-addons-for-gutenberg")},{value:"circle",label:Object(i.__)("Circle","ultimate-addons-for-gutenberg")},{value:"square",label:Object(i.__)("Square","ultimate-addons-for-gutenberg")}]}),fe&&"above"!==fe&&be&&n.a.createElement(d.SelectControl,{label:Object(i.__)("Vertical Alignment","ultimate-addons-for-gutenberg"),value:se,onChange:function(e){return p({imgAlign:e})},options:[{value:"top",label:Object(i.__)("Top","ultimate-addons-for-gutenberg")},{value:"middle",label:Object(i.__)("Middle","ultimate-addons-for-gutenberg")}]}),be&&n.a.createElement(n.a.Fragment,null,n.a.createElement(d.SelectControl,{label:Object(i.__)("Size","ultimate-addons-for-gutenberg"),options:f,value:me,onChange:function(e){return p({imgSize:e})}}),n.a.createElement(d.RangeControl,{label:Object(i.__)("Width","ultimate-addons-for-gutenberg"),value:de,onChange:function(e){return p({imgWidth:e})},min:0,max:500,allowReset:!0}))),n.a.createElement(d.PanelBody,{title:Object(i.__)("Social Links","ultimate-addons-for-gutenberg"),initialOpen:!1},n.a.createElement(d.ToggleControl,{label:Object(i.__)("Enable Social Links","ultimate-addons-for-gutenberg"),checked:Re,onChange:function(){return p({socialEnable:!Re})}}),Re&&n.a.createElement(n.a.Fragment,null,n.a.createElement(d.ToggleControl,{label:Object(i.__)("Open Links in New Window","ultimate-addons-for-gutenberg"),checked:Ie,onChange:function(){return p({socialTarget:!Ie})}}),n.a.createElement(d.PanelBody,{title:Object(i.__)("Twitter","ultimate-addons-for-gutenberg"),initialOpen:!1},n.a.createElement("p",{className:"components-base-control__label"},Object(i.__)("Icon","ultimate-addons-for-gutenberg")),n.a.createElement(s.a,{icons:wp.UAGBSvgIcons,renderFunc:r.a,theme:"default",value:Ee,onChange:function(e){return p({twitterIcon:e})},isMulti:!1,noSelectedPlaceholder:Object(i.__)("Select Icon","ultimate-addons-for-gutenberg")}),n.a.createElement("p",{className:"components-base-control__label"},Object(i.__)("URL","ultimate-addons-for-gutenberg")),n.a.createElement(d.TextControl,{value:ye,onChange:function(e){return p({twitterLink:e})},placeholder:Object(i.__)("Enter Twitter URL","ultimate-addons-for-gutenberg")})),n.a.createElement(d.PanelBody,{title:Object(i.__)("Facebook","ultimate-addons-for-gutenberg"),initialOpen:!1},n.a.createElement("p",{className:"components-base-control__label"},Object(i.__)("Icon","ultimate-addons-for-gutenberg")),n.a.createElement(s.a,{icons:wp.UAGBSvgIcons,renderFunc:r.a,theme:"default",value:Fe,onChange:function(e){return p({fbIcon:e})},isMulti:!1,noSelectedPlaceholder:Object(i.__)("Select Icon","ultimate-addons-for-gutenberg")}),n.a.createElement("p",{className:"components-base-control__label"},Object(i.__)("URL","ultimate-addons-for-gutenberg")),n.a.createElement(d.TextControl,{value:Le,onChange:function(e){return p({fbLink:e})},placeholder:Object(i.__)("Enter Facebook URL","ultimate-addons-for-gutenberg")})),n.a.createElement(d.PanelBody,{title:Object(i.__)("LinkedIn","ultimate-addons-for-gutenberg"),initialOpen:!1},n.a.createElement("p",{className:"components-base-control__label"},Object(i.__)("Icon","ultimate-addons-for-gutenberg")),n.a.createElement(s.a,{icons:wp.UAGBSvgIcons,renderFunc:r.a,noSelectedPlaceholder:Object(i.__)("Select Icon","ultimate-addons-for-gutenberg"),theme:"default",value:Ce,onChange:function(e){return p({linkedinIcon:e})},isMulti:!1}),n.a.createElement("p",{className:"components-base-control__label"},Object(i.__)("URL","ultimate-addons-for-gutenberg")),n.a.createElement(d.TextControl,{value:ze,onChange:function(e){return p({linkedinLink:e})},placeholder:Object(i.__)("Enter LinkedIn URL","ultimate-addons-for-gutenberg")})),n.a.createElement(d.PanelBody,{title:Object(i.__)("Pinterest","ultimate-addons-for-gutenberg"),initialOpen:!1},n.a.createElement("p",{className:"components-base-control__label"},Object(i.__)("Icon","ultimate-addons-for-gutenberg")),n.a.createElement(s.a,{icons:wp.UAGBSvgIcons,renderFunc:r.a,noSelectedPlaceholder:Object(i.__)("Select Icon","ultimate-addons-for-gutenberg"),theme:"default",value:Te,onChange:function(e){return p({pinIcon:e})},isMulti:!1}),n.a.createElement("p",{className:"components-base-control__label"},Object(i.__)("URL","ultimate-addons-for-gutenberg")),n.a.createElement(d.TextControl,{value:He,onChange:function(e){return p({pinLink:e})},placeholder:Object(i.__)("Enter Pinterest URL","ultimate-addons-for-gutenberg")})))),n.a.createElement(d.PanelBody,{title:Object(i.__)("Typography","ultimate-addons-for-gutenberg"),initialOpen:!1},n.a.createElement(d.SelectControl,{label:Object(i.__)("Title Tag","ultimate-addons-for-gutenberg"),value:S,onChange:function(e){return p({tag:e})},options:[{value:"h1",label:Object(i.__)("H1","ultimate-addons-for-gutenberg")},{value:"h2",label:Object(i.__)("H2","ultimate-addons-for-gutenberg")},{value:"h3",label:Object(i.__)("H3","ultimate-addons-for-gutenberg")},{value:"h4",label:Object(i.__)("H4","ultimate-addons-for-gutenberg")},{value:"h5",label:Object(i.__)("H5","ultimate-addons-for-gutenberg")},{value:"h6",label:Object(i.__)("H6","ultimate-addons-for-gutenberg")}]}),n.a.createElement("hr",{className:"uagb-editor__separator"}),n.a.createElement("h2",null,Object(i.__)("Title","ultimate-addons-for-gutenberg")),n.a.createElement(l.Suspense,{fallback:Object(c.a)()},n.a.createElement(u.a,{label:Object(i.__)("Typography","ultimate-addons-for-gutenberg"),attributes:h,setAttributes:p,loadGoogleFonts:{value:re,label:"titleLoadGoogleFonts"},fontFamily:{value:F,label:"titleFontFamily"},fontWeight:{value:C,label:"titleFontWeight"},fontSubset:{value:T,label:"titleFontSubset"},fontSizeType:{value:y,label:"titleFontSizeType"},fontSize:{value:L,label:"titleFontSize"},fontSizeMobile:{value:z,label:"titleFontSizeMobile"},fontSizeTablet:{value:H,label:"titleFontSizeTablet"},lineHeightType:{value:x,label:"titleLineHeightType"},lineHeight:{value:M,label:"titleLineHeight"},lineHeightMobile:{value:k,label:"titleLineHeightMobile"},lineHeightTablet:{value:I,label:"titleLineHeightTablet"}})),n.a.createElement("hr",{className:"uagb-editor__separator"}),n.a.createElement("h2",null,Object(i.__)("Prefix","ultimate-addons-for-gutenberg")),n.a.createElement(l.Suspense,{fallback:Object(c.a)()},n.a.createElement(u.a,{label:Object(i.__)("Typography","ultimate-addons-for-gutenberg"),attributes:h,setAttributes:p,loadGoogleFonts:{value:ce,label:"prefixLoadGoogleFonts"},fontFamily:{value:R,label:"prefixFontFamily"},fontWeight:{value:w,label:"prefixFontWeight"},fontSubset:{value:N,label:"prefixFontSubset"},fontSizeType:{value:P,label:"prefixFontSizeType"},fontSize:{value:B,label:"prefixFontSize"},fontSizeMobile:{value:A,label:"prefixFontSizeMobile"},fontSizeTablet:{value:G,label:"prefixFontSizeTablet"},lineHeightType:{value:U,label:"prefixLineHeightType"},lineHeight:{value:W,label:"prefixLineHeight"},lineHeightMobile:{value:D,label:"prefixLineHeightMobile"},lineHeightTablet:{value:q,label:"prefixLineHeightTablet"}})),n.a.createElement("hr",{className:"uagb-editor__separator"}),n.a.createElement("h2",null,Object(i.__)("Description","ultimate-addons-for-gutenberg")),n.a.createElement(l.Suspense,{fallback:Object(c.a)()},n.a.createElement(u.a,{label:Object(i.__)("Typography","ultimate-addons-for-gutenberg"),attributes:h,setAttributes:p,loadGoogleFonts:{value:ue,label:"descLoadGoogleFonts"},fontFamily:{value:J,label:"descFontFamily"},fontWeight:{value:V,label:"descFontWeight"},fontSubset:{value:K,label:"descFontSubset"},fontSizeType:{value:Q,label:"descFontSizeType"},fontSize:{value:X,label:"descFontSize"},fontSizeMobile:{value:Y,label:"descFontSizeMobile"},fontSizeTablet:{value:Z,label:"descFontSizeTablet"},lineHeightType:{value:$,label:"descLineHeightType"},lineHeight:{value:ee,label:"descLineHeight"},lineHeightMobile:{value:te,label:"descLineHeightMobile"},lineHeightTablet:{value:ae,label:"descLineHeightTablet"}})),n.a.createElement("hr",{className:"uagb-editor__separator"}),n.a.createElement("h2",null,Object(i.__)("Social Icons","ultimate-addons-for-gutenberg")),n.a.createElement(l.Suspense,{fallback:Object(c.a)()},n.a.createElement(u.a,{label:Object(i.__)("Typography","ultimate-addons-for-gutenberg"),attributes:h,setAttributes:p,fontSizeType:{value:ne,label:"socialFontSizeType"},fontSize:{value:le,label:"socialFontSize"},fontSizeMobile:{value:oe,label:"socialFontSizeMobile"},fontSizeTablet:{value:ie,label:"socialFontSizeTablet"},disableFontFamily:!0,disableLineHeight:!0}))),n.a.createElement(m.PanelColorSettings,{title:Object(i.__)("Color Settings","ultimate-addons-for-gutenberg"),initialOpen:!1,colorSettings:[{value:O,onChange:function(e){return p({titleColor:e})},label:Object(i.__)("Title Color","ultimate-addons-for-gutenberg")},{value:j,onChange:function(e){return p({prefixColor:e})},label:Object(i.__)("Designation Color","ultimate-addons-for-gutenberg")},{value:E,onChange:function(e){return p({descColor:e})},label:Object(i.__)("Description Color","ultimate-addons-for-gutenberg")},{value:xe,onChange:function(e){return p({socialColor:e})},label:Object(i.__)("Social Icon Color","ultimate-addons-for-gutenberg")},{value:Me,onChange:function(e){return p({socialHoverColor:e})},label:Object(i.__)("Social Icon Hover Color","ultimate-addons-for-gutenberg")}]}),n.a.createElement(d.PanelBody,{title:Object(i.__)("Spacing","ultimate-addons-for-gutenberg"),initialOpen:!1},n.a.createElement(d.RangeControl,{label:Object(i.__)("Title Bottom Spacing","ultimate-addons-for-gutenberg"),value:_e,onChange:function(e){return p({titleSpace:e})},min:0,max:50,allowReset:!0,initialPosition:0}),n.a.createElement(d.RangeControl,{label:Object(i.__)("Designation Bottom Spacing","ultimate-addons-for-gutenberg"),value:he,onChange:function(e){return p({prefixSpace:e})},min:0,max:50,allowReset:!0,initialPosition:0}),n.a.createElement(d.RangeControl,{label:Object(i.__)("Description Bottom Spacing","ultimate-addons-for-gutenberg"),value:pe,onChange:function(e){return p({descSpace:e})},min:0,max:50,allowReset:!0}),n.a.createElement(d.RangeControl,{label:Object(i.__)("Inter Social Icon Spacing","ultimate-addons-for-gutenberg"),value:ke,onChange:function(e){return p({socialSpace:e})},min:0,max:50,allowReset:!0}),be&&n.a.createElement(n.a.Fragment,null,n.a.createElement("hr",{className:"uagb-editor__separator"}),n.a.createElement("h2",null,Object(i.__)("Image Margin (px)","ultimate-addons-for-gutenberg")),"above"!=fe&&n.a.createElement(d.RangeControl,{label:o.a.left_margin,className:"uagb-margin-control",value:ve,onChange:function(e){return p({imgLeftMargin:e})},min:0,max:50,allowReset:!0}),"above"!=fe&&n.a.createElement(d.RangeControl,{label:o.a.right_margin,className:"uagb-margin-control",value:Se,onChange:function(e){return p({imgRightMargin:e})},min:0,max:50,allowReset:!0}),n.a.createElement(d.RangeControl,{label:o.a.top_margin,className:"uagb-margin-control",value:Oe,onChange:function(e){return p({imgTopMargin:e})},min:0,max:50,allowReset:!0}),n.a.createElement(d.RangeControl,{label:o.a.bottom_margin,className:"uagb-margin-control",value:je,onChange:function(e){return p({imgBottomMargin:e})},min:0,max:50,allowReset:!0})))),n.a.createElement(l.Suspense,{fallback:Object(c.a)()},t,a,g))};t.default=n.a.memo(_)}}]);