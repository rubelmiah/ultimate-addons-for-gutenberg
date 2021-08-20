(window.webpackJsonp_ultimate_addons_for_gutenberg=window.webpackJsonp_ultimate_addons_for_gutenberg||[]).push([[15],{267:function(e,a,t){"use strict";t.d(a,"a",(function(){return r}));var n=t(2),l=t(5),o=t(9);function r(e){var a=Object(o.useSelect)((function(e){return e("core/edit-post").__experimentalGetPreviewDeviceType()}),[]),t=Object(o.useDispatch)("core/edit-post").__experimentalSetPreviewDeviceType,r=[{name:"Desktop",title:React.createElement(l.Dashicon,{icon:"desktop"}),itemClass:"uagb-desktop-tab uagb-responsive-tabs"},{name:"Tablet",title:React.createElement(l.Dashicon,{icon:"tablet"}),itemClass:"uagb-tablet-tab uagb-responsive-tabs"},{name:"Mobile",key:"mobile",title:React.createElement(l.Dashicon,{icon:"smartphone"}),itemClass:"uagb-mobile-tab uagb-responsive-tabs"}],i={};return i.Desktop=React.createElement(React.Fragment,null),i.Tablet=React.createElement(React.Fragment,null),i.Mobile=React.createElement(React.Fragment,null),React.createElement("div",{className:"uag-typography-range-options"},React.createElement("div",{className:"uagb-size-type-field-tabs"},React.createElement(l.ButtonGroup,{className:"components-tab-panel__tabs","aria-label":Object(n.__)("Device","ultimate-addons-for-gutenberg")},function(e){var n=[];return e.map((function(e){return n.push(React.createElement(l.Button,{key:e.key,className:"components-button components-tab-panel__tabs-item ".concat(e.itemClass).concat(e.name===a?" active-tab":""),"aria-pressed":a===e.name,onClick:function(){return a=e.name,void t(a);var a}},e.title))})),n}(r)),React.createElement("div",{className:"uagb-responsive-control-inner"},i[a]?i[a]:i.Desktop)))}},534:function(e,a,t){"use strict";t.r(a);var n=t(7),l=t(1),o=t.n(l),r=t(10),i=t(70),u=t(267),c=t(2),g=t(4),b=t(5),m=function(e){var a=e.parentProps,t=a.attributes,m=t.topPadding,d=t.bottomPadding,s=t.leftPadding,_=t.rightPadding,p=t.topPaddingTablet,f=t.bottomPaddingTablet,v=t.leftPaddingTablet,C=t.rightPaddingTablet,O=t.topPaddingMobile,E=t.bottomPaddingMobile,y=t.leftPaddingMobile,h=t.rightPaddingMobile,j=t.backgroundType,R=t.backgroundImage,k=t.backgroundColor,P=t.backgroundPosition,N=t.backgroundAttachment,x=t.backgroundRepeat,T=t.backgroundSize,S=t.backgroundOpacity,B=t.backgroundImageColor,w=t.borderStyle,z=t.borderWidth,D=t.borderRadius,I=t.borderColor,F=t.overlayType,M=t.gradientOverlayColor1,L=t.gradientOverlayColor2,W=t.gradientOverlayType,A=t.gradientOverlayLocation1,G=t.gradientOverlayLocation2,J=t.gradientOverlayAngle,U=t.mobilePaddingType,q=t.tabletPaddingType,H=t.desktopPaddingType,K=t.colWidthMobile,Q=t.colWidthTablet,V=t.colWidth,X=a.setAttributes,Y=a.deviceType;return o.a.createElement(l.Suspense,{fallback:Object(r.a)()},o.a.createElement(g.InspectorControls,null,o.a.createElement(b.PanelBody,{title:Object(c.__)("Layout","ultimate-addons-for-gutenberg")},o.a.createElement(b.TabPanel,{className:"uagb-size-type-field-tabs uagb-without-size-type",activeClass:"active-tab",tabs:[{name:"desktop",title:o.a.createElement(b.Dashicon,{icon:"desktop"}),className:"uagb-desktop-tab uagb-responsive-tabs"},{name:"tablet",title:o.a.createElement(b.Dashicon,{icon:"tablet"}),className:"uagb-tablet-tab uagb-responsive-tabs"},{name:"mobile",title:o.a.createElement(b.Dashicon,{icon:"smartphone"}),className:"uagb-mobile-tab uagb-responsive-tabs"}]},(function(e){var a;return a="mobile"===e.name?o.a.createElement(b.RangeControl,{label:Object(c.__)("Content Width (%)","ultimate-addons-for-gutenberg"),value:K,onChange:function(e){X({colWidthMobile:e})},min:0,max:100}):"tablet"===e.name?o.a.createElement(b.RangeControl,{label:Object(c.__)("Content Width (%)","ultimate-addons-for-gutenberg"),value:Q,onChange:function(e){X({colWidthTablet:e})},min:0,max:100}):o.a.createElement(b.RangeControl,{label:Object(c.__)("Content Width (%)","ultimate-addons-for-gutenberg"),value:V,onChange:function(e){X({colWidth:e})},min:0,max:100}),o.a.createElement("div",null,a)}))),o.a.createElement(b.PanelBody,{title:Object(c.__)("Spacing","ultimate-addons-for-gutenberg"),initialOpen:!1},o.a.createElement(u.a,null),"Desktop"===Y&&o.a.createElement(o.a.Fragment,null,o.a.createElement(b.ButtonGroup,{className:"uagb-size-type-field","aria-label":Object(c.__)("Size Type","ultimate-addons-for-gutenberg")},o.a.createElement(b.Button,{key:"px",className:"uagb-size-btn",isSmall:!0,isPrimary:"px"===H,"aria-pressed":"px"===H,onClick:function(){return X({desktopPaddingType:"px"})}},"px"),o.a.createElement(b.Button,{key:"%",className:"uagb-size-btn",isSmall:!0,isPrimary:"%"===H,"aria-pressed":"%"===H,onClick:function(){return X({desktopPaddingType:"%"})}},"%")),o.a.createElement("h2",null,Object(c.__)("Padding","ultimate-addons-for-gutenberg")),o.a.createElement(b.RangeControl,{label:n.a.top_margin,className:"uagb-margin-control",value:m,onChange:function(e){return X({topPadding:e})},min:0,max:"%"==H?100:2e3,allowReset:!0}),o.a.createElement(b.RangeControl,{label:n.a.bottom_margin,className:"uagb-margin-control",value:d,onChange:function(e){return X({bottomPadding:e})},min:0,max:"%"==H?100:2e3,allowReset:!0}),o.a.createElement(b.RangeControl,{label:n.a.left_margin,className:"uagb-margin-control",value:s,onChange:function(e){return X({leftPadding:e})},min:0,max:"%"==H?100:2e3,allowReset:!0}),o.a.createElement(b.RangeControl,{label:n.a.right_margin,className:"uagb-margin-control",value:_,onChange:function(e){return X({rightPadding:e})},min:0,max:"%"==H?100:2e3,allowReset:!0})),"Tablet"===Y&&o.a.createElement(o.a.Fragment,null,o.a.createElement(b.ButtonGroup,{className:"uagb-size-type-field","aria-label":Object(c.__)("Size Type","ultimate-addons-for-gutenberg")},o.a.createElement(b.Button,{key:"px",className:"uagb-size-btn",isSmall:!0,isPrimary:"px"===q,"aria-pressed":"px"===q,onClick:function(){return X({tabletPaddingType:"px"})}},"px"),o.a.createElement(b.Button,{key:"%",className:"uagb-size-btn",isSmall:!0,isPrimary:"%"===q,"aria-pressed":"%"===q,onClick:function(){return X({tabletPaddingType:"%"})}},"%")),o.a.createElement("h2",null,Object(c.__)("Padding","ultimate-addons-for-gutenberg")),o.a.createElement(b.RangeControl,{label:n.a.top_margin,className:"uagb-margin-control",value:p,onChange:function(e){return X({topPaddingTablet:e})},min:0,max:"%"==q?100:2e3,allowReset:!0}),o.a.createElement(b.RangeControl,{label:n.a.bottom_margin,className:"uagb-margin-control",value:f,onChange:function(e){return X({bottomPaddingTablet:e})},min:0,max:"%"==q?100:2e3,allowReset:!0}),o.a.createElement(b.RangeControl,{label:n.a.left_margin,className:"uagb-margin-control",value:v,onChange:function(e){return X({leftPaddingTablet:e})},min:0,max:"%"==q?100:2e3,allowReset:!0}),o.a.createElement(b.RangeControl,{label:n.a.right_margin,className:"uagb-margin-control",value:C,onChange:function(e){return X({rightPaddingTablet:e})},min:0,max:"%"==q?100:2e3,allowReset:!0})),"Mobile"===Y&&o.a.createElement(o.a.Fragment,null,o.a.createElement(b.ButtonGroup,{className:"uagb-size-type-field","aria-label":Object(c.__)("Size Type")},o.a.createElement(b.Button,{key:"px",className:"uagb-size-btn",isSmall:!0,isPrimary:"px"===U,"aria-pressed":"px"===U,onClick:function(){return X({mobilePaddingType:"px"})}},"px"),o.a.createElement(b.Button,{key:"%",className:"uagb-size-btn",isSmall:!0,isPrimary:"%"===U,"aria-pressed":"%"===U,onClick:function(){return X({mobilePaddingType:"%"})}},"%")),o.a.createElement("h2",null,Object(c.__)("Padding","ultimate-addons-for-gutenberg")),o.a.createElement(b.RangeControl,{label:n.a.top_margin,className:"uagb-margin-control",value:O,onChange:function(e){return X({topPaddingMobile:e})},min:0,max:"%"==U?100:2e3,allowReset:!0}),o.a.createElement(b.RangeControl,{label:n.a.bottom_margin,className:"uagb-margin-control",value:E,onChange:function(e){return X({bottomPaddingMobile:e})},min:0,max:"%"==U?100:2e3,allowReset:!0}),o.a.createElement(b.RangeControl,{label:n.a.left_margin,className:"uagb-margin-control",value:y,onChange:function(e){return X({leftPaddingMobile:e})},min:0,max:"%"==U?100:2e3,allowReset:!0}),o.a.createElement(b.RangeControl,{label:n.a.right_margin,className:"uagb-margin-control",value:h,onChange:function(e){return X({rightPaddingMobile:e})},min:0,max:"%"==U?100:2e3,allowReset:!0}))),o.a.createElement(b.PanelBody,{title:Object(c.__)("Background","ultimate-addons-for-gutenberg"),initialOpen:!1},o.a.createElement(b.SelectControl,{label:Object(c.__)("Background Type","ultimate-addons-for-gutenberg"),value:j,onChange:function(e){return X({backgroundType:e})},options:[{value:"none",label:Object(c.__)("None","ultimate-addons-for-gutenberg")},{value:"color",label:Object(c.__)("Color","ultimate-addons-for-gutenberg")},{value:"gradient",label:Object(c.__)("Gradient","ultimate-addons-for-gutenberg")},{value:"image",label:Object(c.__)("Image","ultimate-addons-for-gutenberg")}]}),"color"==j&&o.a.createElement(o.a.Fragment,null,o.a.createElement("p",{className:"uagb-setting-label"},Object(c.__)("Background Color","ultimate-addons-for-gutenberg"),o.a.createElement("span",{className:"components-base-control__label"},o.a.createElement("span",{className:"component-color-indicator",style:{backgroundColor:k}}))),o.a.createElement(g.ColorPalette,{value:k,onChange:function(e){return X({backgroundColor:e})},allowReset:!0})),"image"==j&&o.a.createElement(o.a.Fragment,null,o.a.createElement(b.BaseControl,{className:"editor-bg-image-control",id:"Background Image",label:Object(c.__)("Background Image","ultimate-addons-for-gutenberg")},o.a.createElement(g.MediaUpload,{title:Object(c.__)("Select Background Image","ultimate-addons-for-gutenberg"),onSelect:function(e){e&&e.url?e.type&&"image"==e.type&&X({backgroundImage:e}):X({backgroundImage:null})},allowedTypes:["image"],value:R,render:function(e){var a=e.open;return o.a.createElement(b.Button,{isSecondary:!0,onClick:a},R?Object(c.__)("Replace image","ultimate-addons-for-gutenberg"):Object(c.__)("Select Background Image","ultimate-addons-for-gutenberg"))}}),R&&o.a.createElement(b.Button,{className:"uagb-rm-btn",onClick:function(){X({backgroundImage:null})},isLink:!0,isDestructive:!0},Object(c.__)("Remove Image","ultimate-addons-for-gutenberg"))),R&&o.a.createElement(o.a.Fragment,null,o.a.createElement(b.SelectControl,{label:Object(c.__)("Image Position","ultimate-addons-for-gutenberg"),value:P,onChange:function(e){return X({backgroundPosition:e})},options:[{value:"top-left",label:Object(c.__)("Top Left","ultimate-addons-for-gutenberg")},{value:"top-center",label:Object(c.__)("Top Center","ultimate-addons-for-gutenberg")},{value:"top-right",label:Object(c.__)("Top Right","ultimate-addons-for-gutenberg")},{value:"center-left",label:Object(c.__)("Center Left","ultimate-addons-for-gutenberg")},{value:"center-center",label:Object(c.__)("Center Center","ultimate-addons-for-gutenberg")},{value:"center-right",label:Object(c.__)("Center Right","ultimate-addons-for-gutenberg")},{value:"bottom-left",label:Object(c.__)("Bottom Left","ultimate-addons-for-gutenberg")},{value:"bottom-center",label:Object(c.__)("Bottom Center","ultimate-addons-for-gutenberg")},{value:"bottom-right",label:Object(c.__)("Bottom Right","ultimate-addons-for-gutenberg")}]}),o.a.createElement(b.SelectControl,{label:Object(c.__)("Attachment","ultimate-addons-for-gutenberg"),value:N,onChange:function(e){return X({backgroundAttachment:e})},options:[{value:"fixed",label:Object(c.__)("Fixed","ultimate-addons-for-gutenberg")},{value:"scroll",label:Object(c.__)("Scroll","ultimate-addons-for-gutenberg")}]}),o.a.createElement(b.SelectControl,{label:Object(c.__)("Repeat","ultimate-addons-for-gutenberg"),value:x,onChange:function(e){return X({backgroundRepeat:e})},options:[{value:"no-repeat",label:Object(c.__)("No Repeat","ultimate-addons-for-gutenberg")},{value:"repeat",label:Object(c.__)("Repeat","ultimate-addons-for-gutenberg")},{value:"repeat-x",label:Object(c.__)("Repeat-x","ultimate-addons-for-gutenberg")},{value:"repeat-y",label:Object(c.__)("Repeat-y","ultimate-addons-for-gutenberg")}]}),o.a.createElement(b.SelectControl,{label:Object(c.__)("Size","ultimate-addons-for-gutenberg"),value:T,onChange:function(e){return X({backgroundSize:e})},options:[{value:"auto",label:Object(c.__)("Auto","ultimate-addons-for-gutenberg")},{value:"cover",label:Object(c.__)("Cover","ultimate-addons-for-gutenberg")},{value:"contain",label:Object(c.__)("Contain","ultimate-addons-for-gutenberg")}]}),o.a.createElement(b.SelectControl,{label:Object(c.__)("Image Overlay Type","ultimate-addons-for-gutenberg"),value:F,onChange:function(e){return X({overlayType:e})},options:[{value:"color",label:Object(c.__)("Color","ultimate-addons-for-gutenberg")},{value:"gradient",label:Object(c.__)("Gradient","ultimate-addons-for-gutenberg")}]}),"color"==F&&o.a.createElement(o.a.Fragment,null,o.a.createElement("p",{className:"uagb-setting-label"},Object(c.__)("Image Overlay Color","ultimate-addons-for-gutenberg"),o.a.createElement("span",{className:"components-base-control__label"},o.a.createElement("span",{className:"component-color-indicator",style:{backgroundColor:B}}))),o.a.createElement(g.ColorPalette,{value:B,onChange:function(e){return X({backgroundImageColor:e})},allowReset:!0})),"gradient"==F&&o.a.createElement(o.a.Fragment,null,o.a.createElement(g.PanelColorSettings,{title:Object(c.__)("Color Settings","ultimate-addons-for-gutenberg"),colorSettings:[{value:L,onChange:function(e){return X({gradientOverlayColor2:e})},label:Object(c.__)("Color 1","ultimate-addons-for-gutenberg")},{value:M,onChange:function(e){return X({gradientOverlayColor1:e})},label:Object(c.__)("Color 2","ultimate-addons-for-gutenberg")}]}),o.a.createElement(b.SelectControl,{label:Object(c.__)("Type","ultimate-addons-for-gutenberg"),value:W,onChange:function(e){return X({gradientOverlayType:e})},options:[{value:"linear",label:Object(c.__)("Linear","ultimate-addons-for-gutenberg")},{value:"radial",label:Object(c.__)("Radial","ultimate-addons-for-gutenberg")}]}),o.a.createElement(b.RangeControl,{label:Object(c.__)("Location 1","ultimate-addons-for-gutenberg"),value:A,onChange:function(e){return X({gradientOverlayLocation1:e})},min:0,max:100,allowReset:!0}),o.a.createElement(b.RangeControl,{label:Object(c.__)("Location 2","ultimate-addons-for-gutenberg"),value:G,onChange:function(e){return X({gradientOverlayLocation2:e})},min:0,max:100,allowReset:!0}),o.a.createElement(b.RangeControl,{label:Object(c.__)("Angle","ultimate-addons-for-gutenberg"),value:J,onChange:function(e){return X({gradientOverlayAngle:e})},min:0,max:360,allowReset:!0})))),"gradient"==j&&o.a.createElement(o.a.Fragment,null,o.a.createElement(i.a,{attributes:e.parentProps.attributes,setAttributes:X})),("color"==j||"image"==j&&R||"gradient"==j)&&o.a.createElement(b.RangeControl,{label:Object(c.__)("Opacity"),value:S,onChange:function(e){return X({backgroundOpacity:e})},min:0,max:100,allowReset:!0,initialPosition:0})),o.a.createElement(b.PanelBody,{title:Object(c.__)("Border","ultimate-addons-for-gutenberg"),initialOpen:!1},o.a.createElement(b.SelectControl,{label:Object(c.__)("Border Style","ultimate-addons-for-gutenberg"),value:w,onChange:function(e){return X({borderStyle:e})},options:[{value:"none",label:Object(c.__)("None","ultimate-addons-for-gutenberg")},{value:"solid",label:Object(c.__)("Solid","ultimate-addons-for-gutenberg")},{value:"dotted",label:Object(c.__)("Dotted","ultimate-addons-for-gutenberg")},{value:"dashed",label:Object(c.__)("Dashed","ultimate-addons-for-gutenberg")},{value:"double",label:Object(c.__)("Double","ultimate-addons-for-gutenberg")},{value:"groove",label:Object(c.__)("Groove","ultimate-addons-for-gutenberg")},{value:"inset",label:Object(c.__)("Inset","ultimate-addons-for-gutenberg")},{value:"outset",label:Object(c.__)("Outset","ultimate-addons-for-gutenberg")},{value:"ridge",label:Object(c.__)("Ridge","ultimate-addons-for-gutenberg")}]}),"none"!=w&&o.a.createElement(b.RangeControl,{label:Object(c.__)("Border Width","ultimate-addons-for-gutenberg"),value:z,onChange:function(e){return X({borderWidth:e})},min:0,max:50,allowReset:!0}),o.a.createElement(b.RangeControl,{label:Object(c.__)("Border Radius","ultimate-addons-for-gutenberg"),value:D,onChange:function(e){return X({borderRadius:e})},min:0,max:100,allowReset:!0}),"none"!=w&&o.a.createElement(o.a.Fragment,null,o.a.createElement("p",{className:"uagb-setting-label"},Object(c.__)("Border Color","ultimate-addons-for-gutenberg"),o.a.createElement("span",{className:"components-base-control__label"},o.a.createElement("span",{className:"component-color-indicator",style:{backgroundColor:I}}))),o.a.createElement(g.ColorPalette,{value:I,onChange:function(e){return X({borderColor:e})},allowReset:!0})))))};a.default=o.a.memo(m)}}]);