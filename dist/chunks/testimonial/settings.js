(window.webpackJsonp_ultimate_addons_for_gutenberg=window.webpackJsonp_ultimate_addons_for_gutenberg||[]).push([[102],{551:function(e,t,a){"use strict";a.r(t);var n=a(2),l=a(1),o=a.n(l),r=a(11),i=a(22),u=a(59),g=a(71),c=a(5),b=a(3);function m(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}var d=function(e){var t,a,d,s=e=e.parentProps,_=s.setAttributes,f=s.attributes,p=s.deviceType,v=f.test_item_count,h=f.test_block,O=f.headingAlign,C=f.companyColor,y=f.descColor,j=f.authorColor,S=f.nameFontSizeType,E=f.nameFontSize,F=f.nameFontSizeTablet,T=f.nameFontSizeMobile,R=f.nameFontFamily,k=f.nameFontWeight,w=f.nameFontSubset,z=f.nameLineHeightType,H=f.nameLineHeight,B=f.nameLineHeightTablet,L=f.nameLineHeightMobile,I=f.nameLoadGoogleFonts,P=f.companyFontSizeType,M=f.companyFontSize,A=f.companyFontSizeTablet,N=f.companyFontSizeMobile,x=f.companyFontFamily,G=f.companyFontWeight,W=f.companyFontSubset,D=f.companyLineHeightType,V=f.companyLineHeight,J=f.companyLineHeightTablet,U=f.companyLineHeightMobile,q=f.companyLoadGoogleFonts,$=f.descFontSizeType,K=f.descFontSize,Q=f.descFontSizeTablet,X=f.descFontSizeMobile,Y=f.descFontFamily,Z=f.descFontWeight,ee=f.descFontSubset,te=f.descLineHeightType,ae=f.descLineHeight,ne=f.descLineHeightTablet,le=f.descLineHeightMobile,oe=f.descLoadGoogleFonts,re=f.descSpace,ie=f.iconimgStyle,ue=f.imagePosition,ge=f.imageAlignment,ce=f.nameSpace,be=f.imgHrPadding,me=f.imgVrPadding,de=f.imageSize,se=f.imageWidth,_e=f.columns,fe=f.tcolumns,pe=f.mcolumns,ve=f.pauseOnHover,he=f.infiniteLoop,Oe=f.transitionSpeed,Ce=f.arrowDots,ye=f.arrowSize,je=f.arrowBorderSize,Se=f.arrowBorderRadius,Ee=f.autoplay,Fe=f.autoplaySpeed,Te=f.arrowColor,Re=f.rowGap,ke=f.columnGap,we=f.contentPadding,ze=f.backgroundType,He=f.backgroundColor,Be=f.backgroundImage,Le=f.backgroundPosition,Ie=f.backgroundSize,Pe=f.backgroundRepeat,Me=f.backgroundImageColor,Ae=f.backgroundOpacity,Ne=f.borderStyle,xe=f.borderWidth,Ge=f.borderRadius,We=f.borderColor,De=f.stack;if(1==I){var Ve={google:{families:[R+(k?":"+k:"")]}};t=o.a.createElement(u.a,{config:Ve})}if(1==q){var Je={google:{families:[x+(G?":"+G:"")]}};a=o.a.createElement(u.a,{config:Je})}if(1==oe){var Ue={google:{families:[Y+(Z?":"+Z:"")]}};d=o.a.createElement(u.a,{config:Ue})}var qe=[{value:"thumbnail",label:Object(n.__)("Thumbnail","ultimate-addons-for-gutenberg")},{value:"medium",label:Object(n.__)("Medium","ultimate-addons-for-gutenberg")},{value:"full",label:Object(n.__)("Large","ultimate-addons-for-gutenberg")}],$e=function(e){var t=null;return h[e]&&void 0!==h[e]&&(t=h[e].image),o.a.createElement(b.PanelBody,{key:e,title:Object(n.__)("Image","ultimate-addons-for-gutenberg")+" "+(e+1)+" "+Object(n.__)("Settings","ultimate-addons-for-gutenberg"),initialOpen:!0,className:"uagb-repeater-panel"},o.a.createElement(b.BaseControl,{id:"",className:"editor-bg-image-control",label:Object(n.__)("")},o.a.createElement(c.MediaUpload,{title:Object(n.__)("Select Image"+(e+1)),onSelect:function(t){!function(e,t){var a=null;a=e&&e.url?e:null,e.type&&"image"===e.type||(a=null);var n=h.map((function(e,n){return t===n&&(e.image=a),e}));_({test_block:n})}(t,e)},allowedTypes:["image"],value:t,render:function(t){var a,l,r=t.open;return o.a.createElement(b.Button,{isSecondary:!0,onClick:r},(a=h[e].image,l=Object(n.__)("Select Image","ultimate-addons-for-gutenberg"),a&&(l=null==a.url||""==a.url?Object(n.__)("Select Image","ultimate-addons-for-gutenberg"):Object(n.__)("Replace Image","ultimate-addons-for-gutenberg")),l))}}),t&&null!==h[e].image.url&&""!==h[e].image.url&&o.a.createElement(b.Button,{className:"uagb-rm-btn",key:e,onClick:function(){!function(e){var t=h.map((function(t,a){return e===a&&(t.image=null),t}));_({test_block:t})}(e)},isLink:!0,isDestructive:!0},Object(n.__)("Remove Image"))))},Ke=0;return h.map((function(e,t){var a=h[t];if(a&&void 0!==a){var n=a.image;null!=n&&""!==n&&Ke++}})),o.a.createElement(l.Suspense,{fallback:Object(r.a)()},o.a.createElement(c.BlockControls,{key:"controls"},o.a.createElement(c.AlignmentToolbar,{value:O,onChange:function(e){return _({headingAlign:e})}})),o.a.createElement(c.InspectorControls,null,o.a.createElement(b.PanelBody,{title:Object(n.__)("General"),initialOpen:!0},o.a.createElement(b.RangeControl,{label:Object(n.__)("Number of Testimonials","ultimate-addons-for-gutenberg"),value:v,onChange:function(e){var t,a=function(e){if(Array.isArray(e))return m(e)}(t=h)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(t)||function(e,t){if(e){if("string"==typeof e)return m(e,void 0);var a=Object.prototype.toString.call(e).slice(8,-1);return"Object"===a&&e.constructor&&(a=e.constructor.name),"Map"===a||"Set"===a?Array.from(e):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?m(e,void 0):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}();if(a.length<e){for(var n=Math.abs(e-a.length),l=0;l<n;l++)a.push({description:"I have been working with these guys since years now! With lots of hard work and timely communication they made sure they delivered the best to me. Highly recommended!",name:"John Doe",company:"Company"+(a.length+1),image:""});_({test_block:a})}else{for(var o=Math.abs(e-a.length),r=a,i=0;i<o;i++)r.pop();_({test_block:r})}_({test_item_count:e})},min:0,max:50,allowReset:!0}),o.a.createElement(g.a,null),"Desktop"===p&&o.a.createElement(o.a.Fragment,null,o.a.createElement(b.RangeControl,{label:Object(n.__)("Columns","ultimate-addons-for-gutenberg"),value:_e,onChange:function(e){return _({columns:e})},min:1,max:v})),"Tablet"===p&&o.a.createElement(o.a.Fragment,null,o.a.createElement(b.RangeControl,{label:Object(n.__)("Columns","ultimate-addons-for-gutenberg"),value:fe,onChange:function(e){return _({tcolumns:e})},min:1,max:v})),"Mobile"===p&&o.a.createElement(o.a.Fragment,null,o.a.createElement(b.RangeControl,{label:Object(n.__)("Columns","ultimate-addons-for-gutenberg"),value:pe,onChange:function(e){return _({mcolumns:e})},min:1,max:v}))),o.a.createElement(b.PanelBody,{title:Object(n.__)("Image","ultimate-addons-for-gutenberg"),initialOpen:!1},function(){for(var e=[],t=0;t<v;t++)e.push($e(t));return e}(),Ke>0&&o.a.createElement(o.a.Fragment,null,o.a.createElement("hr",{className:"uagb-editor__separator"}),o.a.createElement(b.SelectControl,{label:Object(n.__)("Image Position"),value:ue,onChange:function(e){return _({imagePosition:e})},options:[{value:"top",label:Object(n.__)("Top","ultimate-addons-for-gutenberg")},{value:"bottom",label:Object(n.__)("Bottom","ultimate-addons-for-gutenberg")},{value:"left",label:Object(n.__)("Left","ultimate-addons-for-gutenberg")},{value:"right",label:Object(n.__)("Right","ultimate-addons-for-gutenberg")}]}),("left"==ue||"right"==ue)&&o.a.createElement(o.a.Fragment,null,o.a.createElement(b.SelectControl,{label:Object(n.__)("Vertical ALignment","ultimate-addons-for-gutenberg"),value:ge,onChange:function(e){return _({imageAlignment:e})},options:[{value:"top",label:Object(n.__)("Top","ultimate-addons-for-gutenberg")},{value:"middle",label:Object(n.__)("Middle","ultimate-addons-for-gutenberg")}]}),o.a.createElement(b.SelectControl,{label:Object(n.__)("Stack on","ultimate-addons-for-gutenberg"),value:De,options:[{value:"none",label:Object(n.__)("None","ultimate-addons-for-gutenberg")},{value:"tablet",label:Object(n.__)("Tablet","ultimate-addons-for-gutenberg")},{value:"mobile",label:Object(n.__)("Mobile","ultimate-addons-for-gutenberg")}],help:Object(n.__)("Note: Choose on what breakpoint the Info Box will stack.","ultimate-addons-for-gutenberg"),onChange:function(e){return _({stack:e})}})),o.a.createElement(b.SelectControl,{label:Object(n.__)("Image Style","ultimate-addons-for-gutenberg"),value:ie,onChange:function(e){return _({iconimgStyle:e})},options:[{value:"normal",label:Object(n.__)("Normal","ultimate-addons-for-gutenberg")},{value:"circle",label:Object(n.__)("Circle","ultimate-addons-for-gutenberg")},{value:"square",label:Object(n.__)("Square","ultimate-addons-for-gutenberg")}]}),o.a.createElement(b.SelectControl,{label:Object(n.__)("Image Size","ultimate-addons-for-gutenberg"),options:qe,value:de,onChange:function(e){return _({imageSize:e})}}),o.a.createElement(b.RangeControl,{label:Object(n.__)("Width","ultimate-addons-for-gutenberg"),value:se,onChange:function(e){return _({imageWidth:e})},min:0,max:500,allowReset:!0}))),o.a.createElement(b.PanelBody,{title:Object(n.__)("Carousel","ultimate-addons-for-gutenberg"),initialOpen:!1},o.a.createElement(b.ToggleControl,{label:Object(n.__)("Pause On Hover","ultimate-addons-for-gutenberg"),checked:ve,onChange:function(){_({pauseOnHover:!ve})}}),o.a.createElement(b.ToggleControl,{label:Object(n.__)("Autoplay"),checked:Ee,onChange:function(){_({autoplay:!Ee})}}),1==Ee&&o.a.createElement(b.RangeControl,{label:Object(n.__)("Autoplay Speed (ms)","ultimate-addons-for-gutenberg"),value:Fe,onChange:function(e){return _({autoplaySpeed:e})},min:100,max:1e4}),o.a.createElement(b.ToggleControl,{label:Object(n.__)("Infinite Loop","ultimate-addons-for-gutenberg"),checked:he,onChange:function(){_({infiniteLoop:!he})}}),o.a.createElement(b.RangeControl,{label:Object(n.__)("Transition Speed (ms)","ultimate-addons-for-gutenberg"),value:Oe,onChange:function(e){return _({transitionSpeed:e})},min:100,max:5e3}),o.a.createElement(b.SelectControl,{label:Object(n.__)("Show Arrows & Dots","ultimate-addons-for-gutenberg"),value:Ce,onChange:function(e){return _({arrowDots:e})},options:[{value:"arrows",label:Object(n.__)("Only Arrows","ultimate-addons-for-gutenberg")},{value:"dots",label:Object(n.__)("Only Dots","ultimate-addons-for-gutenberg")},{value:"arrows_dots",label:Object(n.__)("Both Arrows & Dots","ultimate-addons-for-gutenberg")}]}),"dots"!=Ce&&o.a.createElement(o.a.Fragment,null,o.a.createElement(b.RangeControl,{label:Object(n.__)("Arrow Size","ultimate-addons-for-gutenberg"),value:ye,onChange:function(e){return _({arrowSize:e})},min:0,max:50}),o.a.createElement(b.RangeControl,{label:Object(n.__)("Arrow Border Size","ultimate-addons-for-gutenberg"),value:je,onChange:function(e){return _({arrowBorderSize:e})},min:0,max:50}),o.a.createElement(b.RangeControl,{label:Object(n.__)("Arrow Border Radius","ultimate-addons-for-gutenberg"),value:Se,onChange:function(e){return _({arrowBorderRadius:e})},min:0,max:50}))),o.a.createElement(o.a.Fragment,null,o.a.createElement(b.PanelBody,{title:Object(n.__)("Typography","ultimate-addons-for-gutenberg"),initialOpen:!1},o.a.createElement("h2",null,Object(n.__)("Testimonial","ultimate-addons-for-gutenberg")),o.a.createElement(i.a,{label:Object(n.__)("Typography","ultimate-addons-for-gutenberg"),attributes:f,setAttributes:_,loadGoogleFonts:{value:oe,label:"descLoadGoogleFonts"},fontFamily:{value:Y,label:"descFontFamily"},fontWeight:{value:Z,label:"descFontWeight"},fontSubset:{value:ee,label:"descFontSubset"},fontSizeType:{value:$,label:"descFontSizeType"},fontSize:{value:K,label:"descFontSize"},fontSizeMobile:{value:X,label:"descFontSizeMobile"},fontSizeTablet:{value:Q,label:"descFontSizeTablet"},lineHeightType:{value:te,label:"descLineHeightType"},lineHeight:{value:ae,label:"descLineHeight"},lineHeightMobile:{value:le,label:"descLineHeightMobile"},lineHeightTablet:{value:ne,label:"descLineHeightTablet"}}),o.a.createElement("hr",{className:"uagb-editor__separator"}),o.a.createElement("h2",null,Object(n.__)("Name","ultimate-addons-for-gutenberg")),o.a.createElement(i.a,{label:Object(n.__)("Typography","ultimate-addons-for-gutenberg"),attributes:f,setAttributes:_,loadGoogleFonts:{value:I,label:"nameLoadGoogleFonts"},fontFamily:{value:R,label:"nameFontFamily"},fontWeight:{value:k,label:"nameFontWeight"},fontSubset:{value:w,label:"nameFontSubset"},fontSizeType:{value:S,label:"nameFontSizeType"},fontSize:{value:E,label:"nameFontSize"},fontSizeMobile:{value:T,label:"nameFontSizeMobile"},fontSizeTablet:{value:F,label:"nameFontSizeTablet"},lineHeightType:{value:z,label:"nameLineHeightType"},lineHeight:{value:H,label:"nameLineHeight"},lineHeightMobile:{value:L,label:"nameLineHeightMobile"},lineHeightTablet:{value:B,label:"nameLineHeightTablet"}}),o.a.createElement("hr",{className:"uagb-editor__separator"}),o.a.createElement("h2",null,Object(n.__)("Company","ultimate-addons-for-gutenberg")),o.a.createElement(i.a,{label:Object(n.__)("Typography","ultimate-addons-for-gutenberg"),attributes:f,setAttributes:_,loadGoogleFonts:{value:q,label:"companyLoadGoogleFonts"},fontFamily:{value:x,label:"companyFontFamily"},fontWeight:{value:G,label:"companyFontWeight"},fontSubset:{value:W,label:"companyFontSubset"},fontSizeType:{value:P,label:"companyFontSizeType"},fontSize:{value:M,label:"companyFontSize"},fontSizeMobile:{value:N,label:"companyFontSizeMobile"},fontSizeTablet:{value:A,label:"companyFontSizeTablet"},lineHeightType:{value:D,label:"companyLineHeightType"},lineHeight:{value:V,label:"companyLineHeight"},lineHeightMobile:{value:U,label:"companyLineHeightMobile"},lineHeightTablet:{value:J,label:"companyLineHeightTablet"}})),o.a.createElement(c.PanelColorSettings,{title:Object(n.__)("Color Settings","ultimate-addons-for-gutenberg"),initialOpen:!1,colorSettings:[{value:y,onChange:function(e){return _({descColor:e})},label:Object(n.__)("Testimonial Color","ultimate-addons-for-gutenberg")},{value:j,onChange:function(e){return _({authorColor:e})},label:Object(n.__)("Name Color","ultimate-addons-for-gutenberg")},{value:C,onChange:function(e){return _({companyColor:e})},label:Object(n.__)("Company Color","ultimate-addons-for-gutenberg")},{value:Te,onChange:function(e){return _({arrowColor:e})},label:Object(n.__)("Arrow & Dots Color","ultimate-addons-for-gutenberg")}]})),o.a.createElement(b.PanelBody,{title:Object(n.__)("Spacing","ultimate-addons-for-gutenberg"),initialOpen:!1},o.a.createElement(b.RangeControl,{label:Object(n.__)("Gap Between Content & Dots","ultimate-addons-for-gutenberg"),value:Re,onChange:function(e){return _({rowGap:e})},min:0,max:50,allowReset:!0}),o.a.createElement(b.RangeControl,{label:Object(n.__)("Row Gap","ultimate-addons-for-gutenberg"),value:ke,onChange:function(e){return _({columnGap:e})},min:0,max:50,allowReset:!0}),o.a.createElement(b.RangeControl,{label:Object(n.__)("Content Padding","ultimate-addons-for-gutenberg"),value:we,onChange:function(e){return _({contentPadding:e})},min:0,max:50,allowReset:!0}),o.a.createElement(b.RangeControl,{label:Object(n.__)("Testimonial Bottom Margin","ultimate-addons-for-gutenberg"),value:re,onChange:function(e){return _({descSpace:e})},min:0,max:50,allowReset:!0}),o.a.createElement(b.RangeControl,{label:Object(n.__)("Name Bottom Margin","ultimate-addons-for-gutenberg"),value:ce,onChange:function(e){return _({nameSpace:e})},min:0,max:50,allowReset:!0}),o.a.createElement(b.RangeControl,{label:Object(n.__)("Image Horizontal Padding","ultimate-addons-for-gutenberg"),value:be,onChange:function(e){return _({imgHrPadding:e})},min:0,max:50,allowReset:!0}),o.a.createElement(b.RangeControl,{label:Object(n.__)("Image Vertical Padding","ultimate-addons-for-gutenberg"),value:me,onChange:function(e){return _({imgVrPadding:e})},min:0,max:50,allowReset:!0})),o.a.createElement(o.a.Fragment,null,o.a.createElement(b.PanelBody,{title:Object(n.__)("Background","ultimate-addons-for-gutenberg"),initialOpen:!1},o.a.createElement(b.SelectControl,{label:Object(n.__)("Background Type","ultimate-addons-for-gutenberg"),value:ze,onChange:function(e){return _({backgroundType:e})},options:[{value:"none",label:Object(n.__)("None","ultimate-addons-for-gutenberg")},{value:"color",label:Object(n.__)("Color","ultimate-addons-for-gutenberg")},{value:"image",label:Object(n.__)("Image","ultimate-addons-for-gutenberg")}]}),"color"==ze&&o.a.createElement(o.a.Fragment,null,o.a.createElement("p",{className:"uagb-setting-label"},Object(n.__)("Background Color","ultimate-addons-for-gutenberg"),o.a.createElement("span",{className:"components-base-control__label"},o.a.createElement("span",{className:"component-color-indicator",style:{backgroundColor:He}}))),o.a.createElement(c.ColorPalette,{value:He,onChange:function(e){return _({backgroundColor:e})},allowReset:!0})),"image"==ze&&o.a.createElement(o.a.Fragment,null,o.a.createElement(b.BaseControl,{id:"Background Image",className:"editor-bg-image-control",label:Object(n.__)("Background Image","ultimate-addons-for-gutenberg")},o.a.createElement(c.MediaUpload,{title:Object(n.__)("Select Background Image","ultimate-addons-for-gutenberg"),onSelect:function(e){e&&e.url&&e.type&&"image"===e.type?_({backgroundImage:e}):_({backgroundImage:null})},allowedTypes:["image"],value:Be,render:function(e){var t=e.open;return o.a.createElement(b.Button,{isSecondary:!0,onClick:t},Be?Object(n.__)("Replace image","ultimate-addons-for-gutenberg"):Object(n.__)("Select Background Image","ultimate-addons-for-gutenberg"))}}),Be&&o.a.createElement(b.Button,{className:"uagb-rm-btn",onClick:function(){_({backgroundImage:null})},isLink:!0,isDestructive:!0},Object(n.__)("Remove Image","ultimate-addons-for-gutenberg"))),Be&&o.a.createElement(o.a.Fragment,null,o.a.createElement(b.SelectControl,{label:Object(n.__)("Image Position","ultimate-addons-for-gutenberg"),value:Le,onChange:function(e){return _({backgroundPosition:e})},options:[{value:"top-left",label:Object(n.__)("Top Left","ultimate-addons-for-gutenberg")},{value:"top-center",label:Object(n.__)("Top Center","ultimate-addons-for-gutenberg")},{value:"top-right",label:Object(n.__)("Top Right","ultimate-addons-for-gutenberg")},{value:"center-left",label:Object(n.__)("Center Left","ultimate-addons-for-gutenberg")},{value:"center-center",label:Object(n.__)("Center Center","ultimate-addons-for-gutenberg")},{value:"center-right",label:Object(n.__)("Center Right","ultimate-addons-for-gutenberg")},{value:"bottom-left",label:Object(n.__)("Bottom Left","ultimate-addons-for-gutenberg")},{value:"bottom-center",label:Object(n.__)("Bottom Center","ultimate-addons-for-gutenberg")},{value:"bottom-right",label:Object(n.__)("Bottom Right","ultimate-addons-for-gutenberg")}]}),o.a.createElement(b.SelectControl,{label:Object(n.__)("Repeat","ultimate-addons-for-gutenberg"),value:Pe,onChange:function(e){return _({backgroundRepeat:e})},options:[{value:"no-repeat",label:Object(n.__)("No Repeat","ultimate-addons-for-gutenberg")},{value:"repeat",label:Object(n.__)("Repeat","ultimate-addons-for-gutenberg")},{value:"repeat-x",label:Object(n.__)("Repeat-x","ultimate-addons-for-gutenberg")},{value:"repeat-y",label:Object(n.__)("Repeat-y","ultimate-addons-for-gutenberg")}]}),o.a.createElement(b.SelectControl,{label:Object(n.__)("Size"),value:Ie,onChange:function(e){return _({backgroundSize:e})},options:[{value:"auto",label:Object(n.__)("Auto","ultimate-addons-for-gutenberg")},{value:"cover",label:Object(n.__)("Cover","ultimate-addons-for-gutenberg")},{value:"contain",label:Object(n.__)("Contain","ultimate-addons-for-gutenberg")}]}),o.a.createElement(o.a.Fragment,null,o.a.createElement("p",{className:"uagb-setting-label"},Object(n.__)("Image Overlay Color","ultimate-addons-for-gutenberg"),o.a.createElement("span",{className:"components-base-control__label"},o.a.createElement("span",{className:"component-color-indicator",style:{backgroundColor:Me}}))),o.a.createElement(c.ColorPalette,{value:Me,onChange:function(e){return _({backgroundImageColor:e})},allowReset:!0})))),"image"==ze&&Be&&o.a.createElement(b.RangeControl,{label:Object(n.__)("Opacity","ultimate-addons-for-gutenberg"),value:Ae,onChange:function(e){return _({backgroundOpacity:e})},min:0,max:100,allowReset:!0,initialPosition:0})),o.a.createElement(b.PanelBody,{title:Object(n.__)("Border","ultimate-addons-for-gutenberg"),initialOpen:!1},o.a.createElement(b.SelectControl,{label:Object(n.__)("Border Style","ultimate-addons-for-gutenberg"),value:Ne,onChange:function(e){return _({borderStyle:e})},options:[{value:"none",label:Object(n.__)("None","ultimate-addons-for-gutenberg")},{value:"solid",label:Object(n.__)("Solid","ultimate-addons-for-gutenberg")},{value:"dotted",label:Object(n.__)("Dotted","ultimate-addons-for-gutenberg")},{value:"dashed",label:Object(n.__)("Dashed","ultimate-addons-for-gutenberg")},{value:"double",label:Object(n.__)("Double","ultimate-addons-for-gutenberg")},{value:"groove",label:Object(n.__)("Groove","ultimate-addons-for-gutenberg")},{value:"inset",label:Object(n.__)("Inset","ultimate-addons-for-gutenberg")},{value:"outset",label:Object(n.__)("Outset","ultimate-addons-for-gutenberg")},{value:"ridge",label:Object(n.__)("Ridge","ultimate-addons-for-gutenberg")}]}),"none"!=Ne&&o.a.createElement(o.a.Fragment,null,o.a.createElement(b.RangeControl,{label:Object(n.__)("Border Width","ultimate-addons-for-gutenberg"),value:xe,onChange:function(e){return _({borderWidth:e})},min:0,max:50,allowReset:!0}),o.a.createElement(o.a.Fragment,null,o.a.createElement("p",{className:"uagb-setting-label"},Object(n.__)("Border Color","ultimate-addons-for-gutenberg"),o.a.createElement("span",{className:"components-base-control__label"},o.a.createElement("span",{className:"component-color-indicator",style:{backgroundColor:We}}))),o.a.createElement(c.ColorPalette,{value:We,onChange:function(e){return _({borderColor:e})},allowReset:!0}))),o.a.createElement(b.RangeControl,{label:Object(n.__)("Border Radius","ultimate-addons-for-gutenberg"),value:Ge,onChange:function(e){return _({borderRadius:e})},min:0,max:1e3,allowReset:!0})))),t,a,d)};t.default=o.a.memo(d)}}]);