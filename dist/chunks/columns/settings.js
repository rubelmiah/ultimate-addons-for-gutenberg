(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{401:function(e,t,a){"use strict";a.r(t);var n=a(4),l=a(0),o=a(2),r=a.n(o),i=a(9),u=a(6),b=a(5),g=Object(o.lazy)((function(){return a.e(1).then(a.bind(null,227))})),c=Object(o.lazy)((function(){return Promise.resolve().then(a.bind(null,20))})),m=Object(o.lazy)((function(){return a.e(12).then(a.bind(null,318))})),s=Object(o.lazy)((function(){return a.e(0).then(a.bind(null,214))})),d=function(e){var t,a,d,_=e.parentProps,p=_.attributes,f=_.setAttributes,v=_.deviceType,C=p.stack,O=p.align,h=p.vAlign,j=p.contentWidth,E=p.width,y=p.widthType,k=p.tag,x=p.columnGap,R=p.topMargin,T=p.bottomMargin,N=p.topMarginMobile,P=p.bottomMarginMobile,w=p.topMarginTablet,S=p.bottomMarginTablet,B=p.topPadding,M=p.bottomPadding,z=p.leftPadding,F=p.rightPadding,A=p.topPaddingTablet,H=p.bottomPaddingTablet,D=p.leftPaddingTablet,V=p.rightPaddingTablet,W=p.topPaddingMobile,I=p.bottomPaddingMobile,G=p.leftPaddingMobile,L=p.rightPaddingMobile,J=p.backgroundType,U=p.backgroundImage,Z=p.backgroundVideo,X=p.backgroundColor,q=p.backgroundPosition,K=p.backgroundAttachment,Q=p.backgroundRepeat,Y=p.backgroundSize,$=p.backgroundOpacity,ee=p.backgroundVideoColor,te=p.backgroundVideoOpacity,ae=p.backgroundImageColor,ne=p.borderStyle,le=p.borderWidth,oe=p.borderRadius,re=p.borderColor,ie=p.columns,ue=p.bottomType,be=p.bottomColor,ge=p.bottomHeight,ce=p.bottomHeightTablet,me=p.bottomHeightMobile,se=p.bottomWidth,de=p.topType,_e=p.topColor,pe=p.topHeight,fe=p.topHeightTablet,ve=p.topHeightMobile,Ce=p.topWidth,Oe=p.bottomFlip,he=p.topFlip,je=p.reverseTablet,Ee=p.reverseMobile,ye=p.topDividerOpacity,ke=p.bottomDividerOpacity,xe=p.topContentAboveShape,Re=p.bottomContentAboveShape,Te=p.mobileMarginType,Ne=p.tabletMarginType,Pe=p.desktopMarginType,we=p.mobilePaddingType,Se=p.tabletPaddingType,Be=p.desktopPaddingType,Me=p.boxShadowColor,ze=p.boxShadowHOffset,Fe=p.boxShadowVOffset,Ae=p.boxShadowBlur,He=p.boxShadowSpread,De=p.boxShadowPosition;return r.a.createElement(o.Suspense,{fallback:Object(i.a)()},r.a.createElement(u.BlockControls,null,r.a.createElement(u.BlockAlignmentToolbar,{value:O,onChange:function(e){f({align:e})},controls:["wide","full"]}),r.a.createElement(u.BlockVerticalAlignmentToolbar,{value:h,onChange:function(e){f({vAlign:e})}})),r.a.createElement(u.InspectorControls,null,r.a.createElement(b.PanelBody,{title:Object(l.__)("Layout","ultimate-addons-for-gutenberg")},r.a.createElement(b.RangeControl,{label:Object(l.__)("Columns","ultimate-addons-for-gutenberg"),value:ie,min:0,max:6,onChange:function(e){return f({columns:e})}}),r.a.createElement(b.SelectControl,{label:Object(l.__)("Stack on","ultimate-addons-for-gutenberg"),value:C,options:[{value:"none",label:Object(l.__)("None","ultimate-addons-for-gutenberg")},{value:"tablet",label:Object(l.__)("Tablet & Mobile","ultimate-addons-for-gutenberg")},{value:"mobile",label:Object(l.__)("Mobile","ultimate-addons-for-gutenberg")}],onChange:function(e){return f({stack:e})},help:Object(l.__)("Note: Choose on what breakpoint the columns will stack.","ultimate-addons-for-gutenberg")}),r.a.createElement(b.SelectControl,{label:Object(l.__)("Container Width","ultimate-addons-for-gutenberg"),value:j,onChange:function(e){return f({contentWidth:e})},options:[{value:"theme",label:Object(l.__)("Theme Container Width","ultimate-addons-for-gutenberg")},{value:"custom",label:Object(l.__)("Custom","ultimate-addons-for-gutenberg")}]}),"custom"==j&&r.a.createElement(r.a.Fragment,null,r.a.createElement(b.ButtonGroup,{className:"uagb-size-type-field","aria-label":Object(l.__)("Size Type","ultimate-addons-for-gutenberg")},r.a.createElement(b.Button,{key:"px",className:"uagb-size-btn",isSmall:!0,isPrimary:"px"===y,"aria-pressed":"px"===y,min:0,max:2e3,onClick:function(){return f({widthType:"px"})}},"px"),r.a.createElement(b.Button,{key:"%",className:"uagb-size-btn",isSmall:!0,isPrimary:"%"===y,"aria-pressed":"%"===y,min:0,max:100,onClick:function(){return f({widthType:"%"})}},"%")),r.a.createElement(b.RangeControl,{label:Object(l.__)("Inner Width","ultimate-addons-for-gutenberg"),value:E,min:0,max:"%"==y?100:2e3,onChange:function(e){return f({width:e})}})),r.a.createElement(m,{label:Object(l.__)("Column Gap","ultimate-addons-for-gutenberg"),currentOption:x,options:[{value:"10",label:Object(l.__)("Default","ultimate-addons-for-gutenberg"),tooltip:Object(l.__)("Default (10px)","ultimate-addons-for-gutenberg")},{value:"0",label:Object(l.__)("None","ultimate-addons-for-gutenberg"),tooltip:Object(l.__)("No Gap (0px)","ultimate-addons-for-gutenberg")},{value:"5",label:Object(l.__)("S","ultimate-addons-for-gutenberg"),tooltip:Object(l.__)("Narrow (5px)","ultimate-addons-for-gutenberg")},{value:"15",label:Object(l.__)("M","ultimate-addons-for-gutenberg"),tooltip:Object(l.__)("Extended (15px)","ultimate-addons-for-gutenberg")},{value:"20",label:Object(l.__)("L","ultimate-addons-for-gutenberg"),tooltip:Object(l.__)("Wide (20px)","ultimate-addons-for-gutenberg")},{value:"30",label:Object(l.__)("XL","ultimate-addons-for-gutenberg"),tooltip:Object(l.__)("Wider (30px)","ultimate-addons-for-gutenberg")}],onChange:function(e){return f({columnGap:e})},help:Object(l.__)("Note: The individual Column Gap can be managed from Column Settings.","ultimate-addons-for-gutenberg")}),r.a.createElement(b.SelectControl,{label:Object(l.__)("HTML Tag","ultimate-addons-for-gutenberg"),value:k,onChange:function(e){return f({tag:e})},options:[{value:"div",label:Object(l.__)("div","ultimate-addons-for-gutenberg")},{value:"header",label:Object(l.__)("header","ultimate-addons-for-gutenberg")},{value:"footer",label:Object(l.__)("footer","ultimate-addons-for-gutenberg")},{value:"main",label:Object(l.__)("main","ultimate-addons-for-gutenberg")},{value:"article",label:Object(l.__)("article","ultimate-addons-for-gutenberg")},{value:"section",label:Object(l.__)("section","ultimate-addons-for-gutenberg")},{value:"aside",label:Object(l.__)("aside","ultimate-addons-for-gutenberg")},{value:"nav",label:Object(l.__)("nav","ultimate-addons-for-gutenberg")}]}),r.a.createElement(b.ToggleControl,{label:Object(l.__)("Reverse Columns (Tablet & Mobile)","ultimate-addons-for-gutenberg"),checked:je,onChange:function(e){return f({reverseTablet:!je})}}),r.a.createElement(b.ToggleControl,{label:Object(l.__)("Reverse Columns (Mobile)","ultimate-addons-for-gutenberg"),checked:Ee,onChange:function(e){return f({reverseMobile:!Ee})}})),r.a.createElement(b.PanelBody,{title:Object(l.__)("Spacing"),initialOpen:!1},r.a.createElement(c,null),"Desktop"===v&&r.a.createElement(r.a.Fragment,null,r.a.createElement(b.ButtonGroup,{className:"uagb-size-type-field","aria-label":Object(l.__)("Size Type","ultimate-addons-for-gutenberg")},r.a.createElement(b.Button,{key:"px",className:"uagb-size-btn",isSmall:!0,isPrimary:"px"===Be,"aria-pressed":"px"===Be,onClick:function(){return f({desktopPaddingType:"px"})}},"px"),r.a.createElement(b.Button,{key:"%",className:"uagb-size-btn",isSmall:!0,isPrimary:"%"===Be,"aria-pressed":"%"===Be,onClick:function(){return f({desktopPaddingType:"%"})}},"%")),r.a.createElement("h2",null,Object(l.__)("Padding")),r.a.createElement(b.RangeControl,{label:n.a.top_margin,className:"uagb-margin-control",value:B,onChange:function(e){return f({topPadding:e})},min:0,max:"%"==Be?100:2e3,allowReset:!0}),r.a.createElement(b.RangeControl,{label:n.a.bottom_margin,className:"uagb-margin-control",value:M,onChange:function(e){return f({bottomPadding:e})},min:0,max:"%"==Be?100:2e3,allowReset:!0}),r.a.createElement(b.RangeControl,{label:n.a.left_margin,className:"uagb-margin-control",value:z,onChange:function(e){return f({leftPadding:e})},min:0,max:"%"==Be?100:2e3,allowReset:!0}),r.a.createElement(b.RangeControl,{label:n.a.right_margin,className:"uagb-margin-control",value:F,onChange:function(e){return f({rightPadding:e})},min:0,max:"%"==Be?100:2e3,allowReset:!0})),"Tablet"===v&&r.a.createElement(r.a.Fragment,null,r.a.createElement(b.ButtonGroup,{className:"uagb-size-type-field","aria-label":Object(l.__)("Size Type","ultimate-addons-for-gutenberg")},r.a.createElement(b.Button,{key:"px",className:"uagb-size-btn",isSmall:!0,isPrimary:"px"===Se,"aria-pressed":"px"===Se,onClick:function(){return f({tabletPaddingType:"px"})}},"px"),r.a.createElement(b.Button,{key:"%",className:"uagb-size-btn",isSmall:!0,isPrimary:"%"===Se,"aria-pressed":"%"===Se,onClick:function(){return f({tabletPaddingType:"%"})}},"%")),r.a.createElement("h2",null,Object(l.__)("Padding","ultimate-addons-for-gutenberg")),r.a.createElement(b.RangeControl,{label:n.a.top_margin,className:"uagb-margin-control",value:A,onChange:function(e){return f({topPaddingTablet:e})},min:0,max:"%"==Se?100:2e3,allowReset:!0}),r.a.createElement(b.RangeControl,{label:n.a.bottom_margin,className:"uagb-margin-control",value:H,onChange:function(e){return f({bottomPaddingTablet:e})},min:0,max:"%"==Se?100:2e3,allowReset:!0}),r.a.createElement(b.RangeControl,{label:n.a.left_margin,className:"uagb-margin-control",value:D,onChange:function(e){return f({leftPaddingTablet:e})},min:0,max:"%"==Se?100:2e3,allowReset:!0}),r.a.createElement(b.RangeControl,{label:n.a.right_margin,className:"uagb-margin-control",value:V,onChange:function(e){return f({rightPaddingTablet:e})},min:0,max:"%"==Se?100:2e3,allowReset:!0})),"Mobile"===v&&r.a.createElement(r.a.Fragment,null,r.a.createElement(b.ButtonGroup,{className:"uagb-size-type-field","aria-label":Object(l.__)("Size Type","ultimate-addons-for-gutenberg")},r.a.createElement(b.Button,{key:"px",className:"uagb-size-btn",isSmall:!0,isPrimary:"px"===we,"aria-pressed":"px"===we,onClick:function(){return f({mobilePaddingType:"px"})}},"px"),r.a.createElement(b.Button,{key:"%",className:"uagb-size-btn",isSmall:!0,isPrimary:"%"===we,"aria-pressed":"%"===we,onClick:function(){return f({mobilePaddingType:"%"})}},"%")),r.a.createElement("h2",null,Object(l.__)("Padding","ultimate-addons-for-gutenberg")),r.a.createElement(b.RangeControl,{label:n.a.top_margin,className:"uagb-margin-control",value:W,onChange:function(e){return f({topPaddingMobile:e})},min:0,max:"%"==we?100:2e3,allowReset:!0}),r.a.createElement(b.RangeControl,{label:n.a.bottom_margin,className:"uagb-margin-control",value:I,onChange:function(e){return f({bottomPaddingMobile:e})},min:0,max:"%"==we?100:2e3,allowReset:!0}),r.a.createElement(b.RangeControl,{label:n.a.left_margin,className:"uagb-margin-control",value:G,onChange:function(e){return f({leftPaddingMobile:e})},min:0,max:"%"==we?100:2e3,allowReset:!0}),r.a.createElement(b.RangeControl,{label:n.a.right_margin,className:"uagb-margin-control",value:L,onChange:function(e){return f({rightPaddingMobile:e})},min:0,max:"%"==we?100:2e3,allowReset:!0})),r.a.createElement("hr",{className:"uagb-editor__separator"}),r.a.createElement(c,null),"Desktop"===v&&r.a.createElement(r.a.Fragment,null,r.a.createElement(b.ButtonGroup,{className:"uagb-size-type-field","aria-label":Object(l.__)("Size Type")},r.a.createElement(b.Button,{key:"px",className:"uagb-size-btn",isSmall:!0,isPrimary:"px"===Pe,"aria-pressed":"px"===Pe,onClick:function(){return f({desktopMarginType:"px"})}},"px"),r.a.createElement(b.Button,{key:"%",className:"uagb-size-btn",isSmall:!0,isPrimary:"%"===Pe,"aria-pressed":"%"===Pe,onClick:function(){return f({desktopMarginType:"%"})}},"%")),r.a.createElement("h2",null,Object(l.__)("Margin","ultimate-addons-for-gutenberg")),r.a.createElement(b.RangeControl,{label:n.a.top_margin,className:"uagb-margin-control",value:R,onChange:function(e){return f({topMargin:e})},min:-2e3,max:2e3,allowReset:!0}),r.a.createElement(b.RangeControl,{label:n.a.bottom_margin,className:"uagb-margin-control",value:T,onChange:function(e){return f({bottomMargin:e})},min:-2e3,max:2e3,allowReset:!0})),"Tablet"===v&&r.a.createElement(r.a.Fragment,null,r.a.createElement(b.ButtonGroup,{className:"uagb-size-type-field","aria-label":Object(l.__)("Size Type","ultimate-addons-for-gutenberg")},r.a.createElement(b.Button,{key:"px",className:"uagb-size-btn",isSmall:!0,isPrimary:"px"===Ne,"aria-pressed":"px"===Ne,onClick:function(){return f({tabletMarginType:"px"})}},"px"),r.a.createElement(b.Button,{key:"%",className:"uagb-size-btn",isSmall:!0,isPrimary:"%"===Ne,"aria-pressed":"%"===Ne,onClick:function(){return f({tabletMarginType:"%"})}},"%")),r.a.createElement("h2",null,Object(l.__)("Margin Tablet","ultimate-addons-for-gutenberg")),r.a.createElement(b.RangeControl,{label:n.a.top_margin,className:"uagb-margin-control",value:w,onChange:function(e){return f({topMarginTablet:e})},min:-2e3,max:2e3,allowReset:!0}),r.a.createElement(b.RangeControl,{label:n.a.bottom_margin,className:"uagb-margin-control",value:S,onChange:function(e){return f({bottomMarginTablet:e})},min:-2e3,max:2e3,allowReset:!0})),"Mobile"===v&&r.a.createElement(r.a.Fragment,null,r.a.createElement(b.ButtonGroup,{className:"uagb-size-type-field","aria-label":Object(l.__)("Size Type","ultimate-addons-for-gutenberg")},r.a.createElement(b.Button,{key:"px",className:"uagb-size-btn",isSmall:!0,isPrimary:"px"===Te,"aria-pressed":"px"===Te,onClick:function(){return f({mobileMarginType:"px"})}},"px"),r.a.createElement(b.Button,{key:"%",className:"uagb-size-btn",isSmall:!0,isPrimary:"%"===Te,"aria-pressed":"%"===Te,onClick:function(){return f({mobileMarginType:"%"})}},"%")),r.a.createElement("h2",null,Object(l.__)("Margin Mobile","ultimate-addons-for-gutenberg")),r.a.createElement(b.RangeControl,{label:n.a.top_margin,className:"uagb-margin-control",value:N,onChange:function(e){return f({topMarginMobile:e})},min:-2e3,max:2e3,allowReset:!0}),r.a.createElement(b.RangeControl,{label:n.a.bottom_margin,className:"uagb-margin-control",value:P,onChange:function(e){return f({bottomMarginMobile:e})},min:-2e3,max:2e3,allowReset:!0}))),r.a.createElement(b.PanelBody,{title:Object(l.__)("Background","ultimate-addons-for-gutenberg"),initialOpen:!1},r.a.createElement(b.SelectControl,{label:Object(l.__)("Background Type","ultimate-addons-for-gutenberg"),value:J,onChange:function(e){return f({backgroundType:e})},options:[{value:"none",label:Object(l.__)("None","ultimate-addons-for-gutenberg")},{value:"color",label:Object(l.__)("Color","ultimate-addons-for-gutenberg")},{value:"gradient",label:Object(l.__)("Gradient","ultimate-addons-for-gutenberg")},{value:"image",label:Object(l.__)("Image","ultimate-addons-for-gutenberg")},{value:"video",label:Object(l.__)("Video","ultimate-addons-for-gutenberg")}]}),"color"==J&&r.a.createElement(r.a.Fragment,null,r.a.createElement("p",{className:"uagb-setting-label"},Object(l.__)("Background Color","ultimate-addons-for-gutenberg"),r.a.createElement("span",{className:"components-base-control__label"},r.a.createElement("span",{className:"component-color-indicator",style:{backgroundColor:X}}))),r.a.createElement(u.ColorPalette,{value:X,onChange:function(e){return f({backgroundColor:e})},allowReset:!0})),"image"==J&&r.a.createElement(r.a.Fragment,null,r.a.createElement(b.BaseControl,{className:"editor-bg-image-control",label:Object(l.__)("Background Image","ultimate-addons-for-gutenberg")},r.a.createElement(u.MediaUpload,{title:Object(l.__)("Select Background Image","ultimate-addons-for-gutenberg"),onSelect:function(t){var a=e.parentProps.setAttributes;t&&t.url?t.type&&"image"==t.type&&a({backgroundImage:t}):a({backgroundImage:null})},allowedTypes:["image"],value:U,render:function(e){var t=e.open;return r.a.createElement(b.Button,{isSecondary:!0,onClick:t},U?Object(l.__)("Replace image","ultimate-addons-for-gutenberg"):Object(l.__)("Select Background Image","ultimate-addons-for-gutenberg"))}}),U&&r.a.createElement(b.Button,{className:"uagb-rm-btn",onClick:function(){(0,e.parentProps.setAttributes)({backgroundImage:null})},isLink:!0,isDestructive:!0},Object(l.__)("Remove Image","ultimate-addons-for-gutenberg"))),U&&r.a.createElement(r.a.Fragment,null,r.a.createElement(b.SelectControl,{label:Object(l.__)("Image Position","ultimate-addons-for-gutenberg"),value:q,onChange:function(e){return f({backgroundPosition:e})},options:[{value:"top-left",label:Object(l.__)("Top Left","ultimate-addons-for-gutenberg")},{value:"top-center",label:Object(l.__)("Top Center","ultimate-addons-for-gutenberg")},{value:"top-right",label:Object(l.__)("Top Right","ultimate-addons-for-gutenberg")},{value:"center-left",label:Object(l.__)("Center Left","ultimate-addons-for-gutenberg")},{value:"center-center",label:Object(l.__)("Center Center","ultimate-addons-for-gutenberg")},{value:"center-right",label:Object(l.__)("Center Right","ultimate-addons-for-gutenberg")},{value:"bottom-left",label:Object(l.__)("Bottom Left","ultimate-addons-for-gutenberg")},{value:"bottom-center",label:Object(l.__)("Bottom Center","ultimate-addons-for-gutenberg")},{value:"bottom-right",label:Object(l.__)("Bottom Right","ultimate-addons-for-gutenberg")}]}),r.a.createElement(b.SelectControl,{label:Object(l.__)("Attachment","ultimate-addons-for-gutenberg"),value:K,onChange:function(e){return f({backgroundAttachment:e})},options:[{value:"fixed",label:Object(l.__)("Fixed","ultimate-addons-for-gutenberg")},{value:"scroll",label:Object(l.__)("Scroll","ultimate-addons-for-gutenberg")}]}),r.a.createElement(b.SelectControl,{label:Object(l.__)("Repeat","ultimate-addons-for-gutenberg"),value:Q,onChange:function(e){return f({backgroundRepeat:e})},options:[{value:"no-repeat",label:Object(l.__)("No Repeat","ultimate-addons-for-gutenberg")},{value:"repeat",label:Object(l.__)("Repeat","ultimate-addons-for-gutenberg")},{value:"repeat-x",label:Object(l.__)("Repeat-x","ultimate-addons-for-gutenberg")},{value:"repeat-y",label:Object(l.__)("Repeat-y","ultimate-addons-for-gutenberg")}]}),r.a.createElement(b.SelectControl,{label:Object(l.__)("Size","ultimate-addons-for-gutenberg"),value:Y,onChange:function(e){return f({backgroundSize:e})},options:[{value:"auto",label:Object(l.__)("Auto","ultimate-addons-for-gutenberg")},{value:"cover",label:Object(l.__)("Cover","ultimate-addons-for-gutenberg")},{value:"contain",label:Object(l.__)("Contain","ultimate-addons-for-gutenberg")}]}),r.a.createElement(r.a.Fragment,null,r.a.createElement("p",{className:"uagb-setting-label"},Object(l.__)("Image Overlay Color","ultimate-addons-for-gutenberg"),r.a.createElement("span",{className:"components-base-control__label"},r.a.createElement("span",{className:"component-color-indicator",style:{backgroundColor:ae}}))),r.a.createElement(u.ColorPalette,{value:ae,onChange:function(e){return f({backgroundImageColor:e})},allowReset:!0})))),"gradient"==J&&r.a.createElement(r.a.Fragment,null,r.a.createElement(g,{attributes:p,setAttributes:f})),"video"==J&&r.a.createElement(b.BaseControl,{className:"editor-bg-video-control",label:Object(l.__)("Background Video","ultimate-addons-for-gutenberg")},r.a.createElement(u.MediaUpload,{title:Object(l.__)("Select Background Video","ultimate-addons-for-gutenberg"),onSelect:function(t){var a=e.parentProps.setAttributes;t&&t.url?t.type&&"video"==t.type&&a({backgroundVideo:t}):a({backgroundVideo:null})},allowedTypes:["video"],value:Z,render:function(e){var t=e.open;return r.a.createElement(b.Button,{isSecondary:!0,onClick:t},Z?Object(l.__)("Replace Video","ultimate-addons-for-gutenberg"):Object(l.__)("Select Background Video","ultimate-addons-for-gutenberg"))}}),Z&&r.a.createElement(b.Button,{onClick:function(){(0,e.parentProps.setAttributes)({backgroundVideo:null})},isLink:!0,isDestructive:!0},Object(l.__)("Remove Video","ultimate-addons-for-gutenberg"))),("color"==J||"image"==J&&U||"gradient"==J)&&r.a.createElement(b.RangeControl,{label:Object(l.__)("Opacity","ultimate-addons-for-gutenberg"),value:$,onChange:function(e){return f({backgroundOpacity:e})},min:0,max:100,allowReset:!0,initialPosition:0}),"video"==J&&Z&&r.a.createElement(r.a.Fragment,null,r.a.createElement("p",{className:"uagb-setting-label"},Object(l.__)("Video Overlay Color","ultimate-addons-for-gutenberg"),r.a.createElement("span",{className:"components-base-control__label"},r.a.createElement("span",{className:"component-color-indicator",style:{backgroundColor:ee}}))),r.a.createElement(u.ColorPalette,{value:ee,onChange:function(e){return f({backgroundVideoColor:e})},allowReset:!0})),"video"==J&&Z&&r.a.createElement(b.RangeControl,{label:Object(l.__)("Opacity","ultimate-addons-for-gutenberg"),value:te,onChange:function(e){return f({backgroundVideoOpacity:e})},min:0,max:100,allowReset:!0,initialPosition:50})),(t=[{value:"none",label:Object(l.__)("None","ultimate-addons-for-gutenberg")},{value:"tilt",label:Object(l.__)("Tilt","ultimate-addons-for-gutenberg")},{value:"mountains",label:Object(l.__)("Mountains","ultimate-addons-for-gutenberg")},{value:"wave_brush",label:Object(l.__)("Wave Brush","ultimate-addons-for-gutenberg")},{value:"waves",label:Object(l.__)("Waves","ultimate-addons-for-gutenberg")},{value:"wave_pattern",label:Object(l.__)("Waves Pattern","ultimate-addons-for-gutenberg")},{value:"triangle",label:Object(l.__)("Triangle","ultimate-addons-for-gutenberg")},{value:"drops",label:Object(l.__)("Drops","ultimate-addons-for-gutenberg")},{value:"clouds",label:Object(l.__)("Clouds","ultimate-addons-for-gutenberg")},{value:"zigzag",label:Object(l.__)("ZigZag","ultimate-addons-for-gutenberg")},{value:"pyramids",label:Object(l.__)("Pyramids","ultimate-addons-for-gutenberg")},{value:"triangle_asymmetrical",label:Object(l.__)("Triangle Asymmetrical","ultimate-addons-for-gutenberg")},{value:"tilt_opacity",label:Object(l.__)("Tilt Opacity","ultimate-addons-for-gutenberg")},{value:"fan_opacity",label:Object(l.__)("Fan Opacity","ultimate-addons-for-gutenberg")},{value:"curve",label:Object(l.__)("Curve","ultimate-addons-for-gutenberg")},{value:"curve_asymmetrical",label:Object(l.__)("Curve Asymmetrical","ultimate-addons-for-gutenberg")},{value:"curve_reverse",label:Object(l.__)("Curve Reverse","ultimate-addons-for-gutenberg")},{value:"curve_asym_reverse",label:Object(l.__)("Curve Asymmetrical Reverse","ultimate-addons-for-gutenberg")},{value:"arrow",label:Object(l.__)("Arrow","ultimate-addons-for-gutenberg")},{value:"arrow_split",label:Object(l.__)("Arrow Split","ultimate-addons-for-gutenberg")},{value:"book",label:Object(l.__)("Book","ultimate-addons-for-gutenberg")}],a=r.a.createElement(r.a.Fragment,null,r.a.createElement(b.SelectControl,{label:Object(l.__)("Type","ultimate-addons-for-gutenberg"),value:de,onChange:function(e){return f({topType:e})},options:t}),"none"!=de&&r.a.createElement(r.a.Fragment,null,r.a.createElement("p",{className:"uagb-setting-label"},Object(l.__)("Color","ultimate-addons-for-gutenberg"),r.a.createElement("span",{className:"components-base-control__label"},r.a.createElement("span",{className:"component-color-indicator",style:{topColor:_e}}))),r.a.createElement(u.ColorPalette,{value:_e,onChange:function(e){return f({topColor:e})},allowReset:!0}),r.a.createElement(b.RangeControl,{label:Object(l.__)("Opacity","ultimate-addons-for-gutenberg"),value:ye,onChange:function(e){return f({topDividerOpacity:e})},min:0,max:100,allowReset:!0}),r.a.createElement(b.RangeControl,{label:Object(l.__)("Width","ultimate-addons-for-gutenberg"),value:Ce,onChange:function(e){return f({topWidth:e})},min:100,max:2e3,allowReset:!0}),r.a.createElement(b.TabPanel,{className:"uagb-size-type-field-tabs uagb-without-size-type",activeClass:"active-tab",tabs:[{name:"desktop",title:r.a.createElement(b.Dashicon,{icon:"desktop"}),className:"uagb-desktop-tab uagb-responsive-tabs"},{name:"tablet",title:r.a.createElement(b.Dashicon,{icon:"tablet"}),className:"uagb-tablet-tab uagb-responsive-tabs"},{name:"mobile",title:r.a.createElement(b.Dashicon,{icon:"smartphone"}),className:"uagb-mobile-tab uagb-responsive-tabs"}]},(function(e){var t;return t="mobile"===e.name?r.a.createElement(b.RangeControl,{label:Object(l.__)("Height","ultimate-addons-for-gutenberg"),value:ve,onChange:function(e){return f({topHeightMobile:e})},min:0,max:500,allowReset:!0}):"tablet"===e.name?r.a.createElement(b.RangeControl,{label:Object(l.__)("Height","ultimate-addons-for-gutenberg"),value:fe,onChange:function(e){return f({topHeightTablet:e})},min:0,max:500,allowReset:!0}):r.a.createElement(b.RangeControl,{label:Object(l.__)("Height","ultimate-addons-for-gutenberg"),value:pe,onChange:function(e){return f({topHeight:e})},min:0,max:500,allowReset:!0}),r.a.createElement("div",null,t)})),r.a.createElement(b.ToggleControl,{label:Object(l.__)("Flip","ultimate-addons-for-gutenberg"),checked:he,onChange:function(e){return f({topFlip:!he})}}),r.a.createElement(b.ToggleControl,{label:Object(l.__)("Bring To Front","ultimate-addons-for-gutenberg"),checked:xe,onChange:function(e){return f({topContentAboveShape:!xe})}}))),d=r.a.createElement(r.a.Fragment,null,r.a.createElement(b.SelectControl,{label:Object(l.__)("Type","ultimate-addons-for-gutenberg"),value:ue,onChange:function(e){return f({bottomType:e})},options:t}),"none"!=ue&&r.a.createElement(r.a.Fragment,null,r.a.createElement("p",{className:"uagb-setting-label"},Object(l.__)("Color","ultimate-addons-for-gutenberg"),r.a.createElement("span",{className:"components-base-control__label"},r.a.createElement("span",{className:"component-color-indicator",style:{bottomColor:be}}))),r.a.createElement(u.ColorPalette,{value:be,onChange:function(e){return f({bottomColor:e})},allowReset:!0}),r.a.createElement(b.RangeControl,{label:Object(l.__)("Opacity","ultimate-addons-for-gutenberg"),value:ke,onChange:function(e){return f({bottomDividerOpacity:e})},min:0,max:100,allowReset:!0}),r.a.createElement(b.RangeControl,{label:Object(l.__)("Width","ultimate-addons-for-gutenberg"),value:se,onChange:function(e){return f({bottomWidth:e})},min:100,max:2e3,allowReset:!0}),r.a.createElement(b.TabPanel,{className:"uagb-size-type-field-tabs uagb-without-size-type",activeClass:"active-tab",tabs:[{name:"desktop",title:r.a.createElement(b.Dashicon,{icon:"desktop"}),className:"uagb-desktop-tab uagb-responsive-tabs"},{name:"tablet",title:r.a.createElement(b.Dashicon,{icon:"tablet"}),className:"uagb-tablet-tab uagb-responsive-tabs"},{name:"mobile",title:r.a.createElement(b.Dashicon,{icon:"smartphone"}),className:"uagb-mobile-tab uagb-responsive-tabs"}]},(function(e){var t;return t="mobile"===e.name?r.a.createElement(b.RangeControl,{label:Object(l.__)("Height","ultimate-addons-for-gutenberg"),value:me,onChange:function(e){return f({bottomHeightMobile:e})},min:0,max:500,allowReset:!0}):"tablet"===e.name?r.a.createElement(b.RangeControl,{label:Object(l.__)("Height","ultimate-addons-for-gutenberg"),value:ce,onChange:function(e){return f({bottomHeightTablet:e})},min:0,max:500,allowReset:!0}):r.a.createElement(b.RangeControl,{label:Object(l.__)("Height","ultimate-addons-for-gutenberg"),value:ge,onChange:function(e){return f({bottomHeight:e})},min:0,max:500,allowReset:!0}),r.a.createElement("div",null,t)})),r.a.createElement(b.ToggleControl,{label:Object(l.__)("Flip","ultimate-addons-for-gutenberg"),checked:Oe,onChange:function(e){return f({bottomFlip:!Oe})}}),r.a.createElement(b.ToggleControl,{label:Object(l.__)("Bring To Front","ultimate-addons-for-gutenberg"),checked:Re,onChange:function(e){return f({bottomContentAboveShape:!Re})}}))),r.a.createElement(b.PanelBody,{title:Object(l.__)("Shape Dividers","ultimate-addons-for-gutenberg"),initialOpen:!1},r.a.createElement(b.TabPanel,{className:"uagb-inspect-tabs uagb-inspect-tabs-col-2",activeClass:"active-tab",tabs:[{name:"top",title:Object(l.__)("Top","ultimate-addons-for-gutenberg"),className:"uagb-top-tab"},{name:"bottom",title:Object(l.__)("Bottom","ultimate-addons-for-gutenberg"),className:"uagb-bottom-tab"}]},(function(e){var t;return t="bottom"===e.name?d:a,r.a.createElement("div",null,t)})))),r.a.createElement(b.PanelBody,{title:Object(l.__)("Border","ultimate-addons-for-gutenberg"),initialOpen:!1},r.a.createElement(b.SelectControl,{label:Object(l.__)("Border Style","ultimate-addons-for-gutenberg"),value:ne,onChange:function(e){return f({borderStyle:e})},options:[{value:"none",label:Object(l.__)("None","ultimate-addons-for-gutenberg")},{value:"solid",label:Object(l.__)("Solid","ultimate-addons-for-gutenberg")},{value:"dotted",label:Object(l.__)("Dotted","ultimate-addons-for-gutenberg")},{value:"dashed",label:Object(l.__)("Dashed","ultimate-addons-for-gutenberg")},{value:"double",label:Object(l.__)("Double","ultimate-addons-for-gutenberg")},{value:"groove",label:Object(l.__)("Groove","ultimate-addons-for-gutenberg")},{value:"inset",label:Object(l.__)("Inset","ultimate-addons-for-gutenberg")},{value:"outset",label:Object(l.__)("Outset","ultimate-addons-for-gutenberg")},{value:"ridge",label:Object(l.__)("Ridge","ultimate-addons-for-gutenberg")}]}),"none"!=ne&&r.a.createElement(b.RangeControl,{label:Object(l.__)("Border Width","ultimate-addons-for-gutenberg"),value:le,onChange:function(e){return f({borderWidth:e})},min:0,max:50,allowReset:!0}),r.a.createElement(b.RangeControl,{label:Object(l.__)("Border Radius","ultimate-addons-for-gutenberg"),value:oe,onChange:function(e){return f({borderRadius:e})},min:0,max:1e3,allowReset:!0}),"none"!=ne&&r.a.createElement(r.a.Fragment,null,r.a.createElement("p",{className:"uagb-setting-label"},Object(l.__)("Border Color","ultimate-addons-for-gutenberg"),r.a.createElement("span",{className:"components-base-control__label"},r.a.createElement("span",{className:"component-color-indicator",style:{backgroundColor:re}}))),r.a.createElement(u.ColorPalette,{value:re,onChange:function(e){return f({borderColor:e})},allowReset:!0})),r.a.createElement(s,{setAttributes:f,label:Object(l.__)("Box Shadow","ultimate-addons-for-gutenberg"),boxShadowColor:{value:Me,label:Object(l.__)("Color","ultimate-addons-for-gutenberg")},boxShadowHOffset:{value:ze,label:Object(l.__)("Horizontal","ultimate-addons-for-gutenberg")},boxShadowVOffset:{value:Fe,label:Object(l.__)("Vertical","ultimate-addons-for-gutenberg")},boxShadowBlur:{value:Ae,label:Object(l.__)("Blur","ultimate-addons-for-gutenberg")},boxShadowSpread:{value:He,label:Object(l.__)("Spread","ultimate-addons-for-gutenberg")},boxShadowPosition:{value:De,label:Object(l.__)("Position","ultimate-addons-for-gutenberg")}}))))};t.default=r.a.memo(d)}}]);