(window.webpackJsonp_ultimate_addons_for_gutenberg=window.webpackJsonp_ultimate_addons_for_gutenberg||[]).push([[16],{153:function(e,a,t){"use strict";var l=t(22),n=t(2),o=t(4);a.a=function({attributes:e,setAttributes:a}){const{gradientValue:t,gradientAngle:r,gradientColor1:g,gradientColor2:i,gradientLocation1:b,gradientLocation2:d,gradientPosition:u,gradientType:m}=e;if(""===t){const e=Object(l.a)(g),t=Object(l.a)(i);a("linear"===m?{gradientValue:`linear-gradient(${r}deg,${e} ${b}%, ${t} ${d}%)`}:{gradientValue:`radial-gradient(at ${u}, ${e} ${b}%, ${t} ${d}%)`})}return React.createElement(o.__experimentalPanelColorGradientSettings,{title:Object(n.__)("Color Settings","ultimate-addons-for-gutenberg"),initialOpen:!0,settings:[{label:Object(n.__)("Overlay Color","ultimate-addons-for-gutenberg"),gradientValue:t,onGradientChange:e=>{a({gradientValue:e}),a({gradientAngle:"",gradientColor1:"",gradientColor2:"",gradientLocation1:"",gradientLocation2:""})}}]})}},485:function(e,a,t){"use strict";t.r(a);var l=t(6),n=t(1),o=t.n(n),r=t(10),g=t(153),i=t(53),b=t(2),d=t(4),u=t(5);const m=e=>{const{attributes:{topPadding:a,bottomPadding:t,leftPadding:m,rightPadding:c,topPaddingTablet:s,bottomPaddingTablet:_,leftPaddingTablet:p,rightPaddingTablet:C,topPaddingMobile:v,bottomPaddingMobile:f,leftPaddingMobile:O,rightPaddingMobile:E,backgroundType:j,backgroundImage:y,backgroundColor:h,backgroundPosition:R,backgroundAttachment:P,backgroundRepeat:k,backgroundSize:x,backgroundOpacity:N,backgroundImageColor:T,borderStyle:S,borderWidth:B,borderRadius:w,borderColor:z,overlayType:I,gradientOverlayColor1:L,gradientOverlayColor2:A,gradientOverlayType:M,gradientOverlayLocation1:W,gradientOverlayLocation2:F,gradientOverlayAngle:$,mobilePaddingType:D,tabletPaddingType:G,desktopPaddingType:V,colWidthMobile:J,colWidthTablet:U,colWidth:q},setAttributes:H,deviceType:K}=e.parentProps;return o.a.createElement(n.Suspense,{fallback:Object(r.a)()},o.a.createElement(d.InspectorControls,null,o.a.createElement(u.PanelBody,{title:Object(b.__)("Layout","ultimate-addons-for-gutenberg")},o.a.createElement(u.TabPanel,{className:"uagb-size-type-field-tabs uagb-without-size-type",activeClass:"active-tab",tabs:[{name:"desktop",title:o.a.createElement(u.Dashicon,{icon:"desktop"}),className:"uagb-desktop-tab uagb-responsive-tabs"},{name:"tablet",title:o.a.createElement(u.Dashicon,{icon:"tablet"}),className:"uagb-tablet-tab uagb-responsive-tabs"},{name:"mobile",title:o.a.createElement(u.Dashicon,{icon:"smartphone"}),className:"uagb-mobile-tab uagb-responsive-tabs"}]},e=>{let a;return a="mobile"===e.name?o.a.createElement(u.RangeControl,{label:Object(b.__)("Content Width (%)","ultimate-addons-for-gutenberg"),value:J,onChange:e=>{H({colWidthMobile:e})},min:0,max:100}):"tablet"===e.name?o.a.createElement(u.RangeControl,{label:Object(b.__)("Content Width (%)","ultimate-addons-for-gutenberg"),value:U,onChange:e=>{H({colWidthTablet:e})},min:0,max:100}):o.a.createElement(u.RangeControl,{label:Object(b.__)("Content Width (%)","ultimate-addons-for-gutenberg"),value:q,onChange:e=>{H({colWidth:e})},min:0,max:100}),o.a.createElement("div",null,a)})),o.a.createElement(u.PanelBody,{title:Object(b.__)("Spacing","ultimate-addons-for-gutenberg"),initialOpen:!1},o.a.createElement(i.a,null),"Desktop"===K&&o.a.createElement(o.a.Fragment,null,o.a.createElement(u.ButtonGroup,{className:"uagb-size-type-field","aria-label":Object(b.__)("Size Type","ultimate-addons-for-gutenberg")},o.a.createElement(u.Button,{key:"px",className:"uagb-size-btn",isSmall:!0,isPrimary:"px"===V,"aria-pressed":"px"===V,onClick:()=>H({desktopPaddingType:"px"})},"px"),o.a.createElement(u.Button,{key:"%",className:"uagb-size-btn",isSmall:!0,isPrimary:"%"===V,"aria-pressed":"%"===V,onClick:()=>H({desktopPaddingType:"%"})},"%")),o.a.createElement("h2",null,Object(b.__)("Padding","ultimate-addons-for-gutenberg")),o.a.createElement(u.RangeControl,{label:l.a.top_margin,className:"uagb-margin-control",value:a,onChange:e=>H({topPadding:e}),min:0,max:"%"==V?100:2e3,allowReset:!0}),o.a.createElement(u.RangeControl,{label:l.a.bottom_margin,className:"uagb-margin-control",value:t,onChange:e=>H({bottomPadding:e}),min:0,max:"%"==V?100:2e3,allowReset:!0}),o.a.createElement(u.RangeControl,{label:l.a.left_margin,className:"uagb-margin-control",value:m,onChange:e=>H({leftPadding:e}),min:0,max:"%"==V?100:2e3,allowReset:!0}),o.a.createElement(u.RangeControl,{label:l.a.right_margin,className:"uagb-margin-control",value:c,onChange:e=>H({rightPadding:e}),min:0,max:"%"==V?100:2e3,allowReset:!0})),"Tablet"===K&&o.a.createElement(o.a.Fragment,null,o.a.createElement(u.ButtonGroup,{className:"uagb-size-type-field","aria-label":Object(b.__)("Size Type","ultimate-addons-for-gutenberg")},o.a.createElement(u.Button,{key:"px",className:"uagb-size-btn",isSmall:!0,isPrimary:"px"===G,"aria-pressed":"px"===G,onClick:()=>H({tabletPaddingType:"px"})},"px"),o.a.createElement(u.Button,{key:"%",className:"uagb-size-btn",isSmall:!0,isPrimary:"%"===G,"aria-pressed":"%"===G,onClick:()=>H({tabletPaddingType:"%"})},"%")),o.a.createElement("h2",null,Object(b.__)("Padding","ultimate-addons-for-gutenberg")),o.a.createElement(u.RangeControl,{label:l.a.top_margin,className:"uagb-margin-control",value:s,onChange:e=>H({topPaddingTablet:e}),min:0,max:"%"==G?100:2e3,allowReset:!0}),o.a.createElement(u.RangeControl,{label:l.a.bottom_margin,className:"uagb-margin-control",value:_,onChange:e=>H({bottomPaddingTablet:e}),min:0,max:"%"==G?100:2e3,allowReset:!0}),o.a.createElement(u.RangeControl,{label:l.a.left_margin,className:"uagb-margin-control",value:p,onChange:e=>H({leftPaddingTablet:e}),min:0,max:"%"==G?100:2e3,allowReset:!0}),o.a.createElement(u.RangeControl,{label:l.a.right_margin,className:"uagb-margin-control",value:C,onChange:e=>H({rightPaddingTablet:e}),min:0,max:"%"==G?100:2e3,allowReset:!0})),"Mobile"===K&&o.a.createElement(o.a.Fragment,null,o.a.createElement(u.ButtonGroup,{className:"uagb-size-type-field","aria-label":Object(b.__)("Size Type")},o.a.createElement(u.Button,{key:"px",className:"uagb-size-btn",isSmall:!0,isPrimary:"px"===D,"aria-pressed":"px"===D,onClick:()=>H({mobilePaddingType:"px"})},"px"),o.a.createElement(u.Button,{key:"%",className:"uagb-size-btn",isSmall:!0,isPrimary:"%"===D,"aria-pressed":"%"===D,onClick:()=>H({mobilePaddingType:"%"})},"%")),o.a.createElement("h2",null,Object(b.__)("Padding","ultimate-addons-for-gutenberg")),o.a.createElement(u.RangeControl,{label:l.a.top_margin,className:"uagb-margin-control",value:v,onChange:e=>H({topPaddingMobile:e}),min:0,max:"%"==D?100:2e3,allowReset:!0}),o.a.createElement(u.RangeControl,{label:l.a.bottom_margin,className:"uagb-margin-control",value:f,onChange:e=>H({bottomPaddingMobile:e}),min:0,max:"%"==D?100:2e3,allowReset:!0}),o.a.createElement(u.RangeControl,{label:l.a.left_margin,className:"uagb-margin-control",value:O,onChange:e=>H({leftPaddingMobile:e}),min:0,max:"%"==D?100:2e3,allowReset:!0}),o.a.createElement(u.RangeControl,{label:l.a.right_margin,className:"uagb-margin-control",value:E,onChange:e=>H({rightPaddingMobile:e}),min:0,max:"%"==D?100:2e3,allowReset:!0}))),o.a.createElement(u.PanelBody,{title:Object(b.__)("Background","ultimate-addons-for-gutenberg"),initialOpen:!1},o.a.createElement(u.SelectControl,{label:Object(b.__)("Background Type","ultimate-addons-for-gutenberg"),value:j,onChange:e=>H({backgroundType:e}),options:[{value:"none",label:Object(b.__)("None","ultimate-addons-for-gutenberg")},{value:"color",label:Object(b.__)("Color","ultimate-addons-for-gutenberg")},{value:"gradient",label:Object(b.__)("Gradient","ultimate-addons-for-gutenberg")},{value:"image",label:Object(b.__)("Image","ultimate-addons-for-gutenberg")}]}),"color"==j&&o.a.createElement(o.a.Fragment,null,o.a.createElement("p",{className:"uagb-setting-label"},Object(b.__)("Background Color","ultimate-addons-for-gutenberg"),o.a.createElement("span",{className:"components-base-control__label"},o.a.createElement("span",{className:"component-color-indicator",style:{backgroundColor:h}}))),o.a.createElement(d.ColorPalette,{value:h,onChange:e=>H({backgroundColor:e}),allowReset:!0})),"image"==j&&o.a.createElement(o.a.Fragment,null,o.a.createElement(u.BaseControl,{className:"editor-bg-image-control",id:"Background Image",label:Object(b.__)("Background Image","ultimate-addons-for-gutenberg")},o.a.createElement(d.MediaUpload,{title:Object(b.__)("Select Background Image","ultimate-addons-for-gutenberg"),onSelect:e=>{e&&e.url?e.type&&"image"==e.type&&H({backgroundImage:e}):H({backgroundImage:null})},allowedTypes:["image"],value:y,render:({open:e})=>o.a.createElement(u.Button,{isSecondary:!0,onClick:e},y?Object(b.__)("Replace image","ultimate-addons-for-gutenberg"):Object(b.__)("Select Background Image","ultimate-addons-for-gutenberg"))}),y&&o.a.createElement(u.Button,{className:"uagb-rm-btn",onClick:()=>{H({backgroundImage:null})},isLink:!0,isDestructive:!0},Object(b.__)("Remove Image","ultimate-addons-for-gutenberg"))),y&&o.a.createElement(o.a.Fragment,null,o.a.createElement(u.SelectControl,{label:Object(b.__)("Image Position","ultimate-addons-for-gutenberg"),value:R,onChange:e=>H({backgroundPosition:e}),options:[{value:"top-left",label:Object(b.__)("Top Left","ultimate-addons-for-gutenberg")},{value:"top-center",label:Object(b.__)("Top Center","ultimate-addons-for-gutenberg")},{value:"top-right",label:Object(b.__)("Top Right","ultimate-addons-for-gutenberg")},{value:"center-left",label:Object(b.__)("Center Left","ultimate-addons-for-gutenberg")},{value:"center-center",label:Object(b.__)("Center Center","ultimate-addons-for-gutenberg")},{value:"center-right",label:Object(b.__)("Center Right","ultimate-addons-for-gutenberg")},{value:"bottom-left",label:Object(b.__)("Bottom Left","ultimate-addons-for-gutenberg")},{value:"bottom-center",label:Object(b.__)("Bottom Center","ultimate-addons-for-gutenberg")},{value:"bottom-right",label:Object(b.__)("Bottom Right","ultimate-addons-for-gutenberg")}]}),o.a.createElement(u.SelectControl,{label:Object(b.__)("Attachment","ultimate-addons-for-gutenberg"),value:P,onChange:e=>H({backgroundAttachment:e}),options:[{value:"fixed",label:Object(b.__)("Fixed","ultimate-addons-for-gutenberg")},{value:"scroll",label:Object(b.__)("Scroll","ultimate-addons-for-gutenberg")}]}),o.a.createElement(u.SelectControl,{label:Object(b.__)("Repeat","ultimate-addons-for-gutenberg"),value:k,onChange:e=>H({backgroundRepeat:e}),options:[{value:"no-repeat",label:Object(b.__)("No Repeat","ultimate-addons-for-gutenberg")},{value:"repeat",label:Object(b.__)("Repeat","ultimate-addons-for-gutenberg")},{value:"repeat-x",label:Object(b.__)("Repeat-x","ultimate-addons-for-gutenberg")},{value:"repeat-y",label:Object(b.__)("Repeat-y","ultimate-addons-for-gutenberg")}]}),o.a.createElement(u.SelectControl,{label:Object(b.__)("Size","ultimate-addons-for-gutenberg"),value:x,onChange:e=>H({backgroundSize:e}),options:[{value:"auto",label:Object(b.__)("Auto","ultimate-addons-for-gutenberg")},{value:"cover",label:Object(b.__)("Cover","ultimate-addons-for-gutenberg")},{value:"contain",label:Object(b.__)("Contain","ultimate-addons-for-gutenberg")}]}),o.a.createElement(u.SelectControl,{label:Object(b.__)("Image Overlay Type","ultimate-addons-for-gutenberg"),value:I,onChange:e=>H({overlayType:e}),options:[{value:"color",label:Object(b.__)("Color","ultimate-addons-for-gutenberg")},{value:"gradient",label:Object(b.__)("Gradient","ultimate-addons-for-gutenberg")}]}),"color"==I&&o.a.createElement(o.a.Fragment,null,o.a.createElement("p",{className:"uagb-setting-label"},Object(b.__)("Image Overlay Color","ultimate-addons-for-gutenberg"),o.a.createElement("span",{className:"components-base-control__label"},o.a.createElement("span",{className:"component-color-indicator",style:{backgroundColor:T}}))),o.a.createElement(d.ColorPalette,{value:T,onChange:e=>H({backgroundImageColor:e}),allowReset:!0})),"gradient"==I&&o.a.createElement(o.a.Fragment,null,o.a.createElement(d.PanelColorSettings,{title:Object(b.__)("Color Settings","ultimate-addons-for-gutenberg"),colorSettings:[{value:A,onChange:e=>H({gradientOverlayColor2:e}),label:Object(b.__)("Color 1","ultimate-addons-for-gutenberg")},{value:L,onChange:e=>H({gradientOverlayColor1:e}),label:Object(b.__)("Color 2","ultimate-addons-for-gutenberg")}]}),o.a.createElement(u.SelectControl,{label:Object(b.__)("Type","ultimate-addons-for-gutenberg"),value:M,onChange:e=>H({gradientOverlayType:e}),options:[{value:"linear",label:Object(b.__)("Linear","ultimate-addons-for-gutenberg")},{value:"radial",label:Object(b.__)("Radial","ultimate-addons-for-gutenberg")}]}),o.a.createElement(u.RangeControl,{label:Object(b.__)("Location 1","ultimate-addons-for-gutenberg"),value:W,onChange:e=>H({gradientOverlayLocation1:e}),min:0,max:100,allowReset:!0}),o.a.createElement(u.RangeControl,{label:Object(b.__)("Location 2","ultimate-addons-for-gutenberg"),value:F,onChange:e=>H({gradientOverlayLocation2:e}),min:0,max:100,allowReset:!0}),o.a.createElement(u.RangeControl,{label:Object(b.__)("Angle","ultimate-addons-for-gutenberg"),value:$,onChange:e=>H({gradientOverlayAngle:e}),min:0,max:360,allowReset:!0})))),"gradient"==j&&o.a.createElement(o.a.Fragment,null,o.a.createElement(g.a,{attributes:e.parentProps.attributes,setAttributes:H})),("color"==j||"image"==j&&y||"gradient"==j)&&o.a.createElement(u.RangeControl,{label:Object(b.__)("Opacity"),value:N,onChange:e=>H({backgroundOpacity:e}),min:0,max:100,allowReset:!0,initialPosition:0})),o.a.createElement(u.PanelBody,{title:Object(b.__)("Border","ultimate-addons-for-gutenberg"),initialOpen:!1},o.a.createElement(u.SelectControl,{label:Object(b.__)("Border Style","ultimate-addons-for-gutenberg"),value:S,onChange:e=>H({borderStyle:e}),options:[{value:"none",label:Object(b.__)("None","ultimate-addons-for-gutenberg")},{value:"solid",label:Object(b.__)("Solid","ultimate-addons-for-gutenberg")},{value:"dotted",label:Object(b.__)("Dotted","ultimate-addons-for-gutenberg")},{value:"dashed",label:Object(b.__)("Dashed","ultimate-addons-for-gutenberg")},{value:"double",label:Object(b.__)("Double","ultimate-addons-for-gutenberg")},{value:"groove",label:Object(b.__)("Groove","ultimate-addons-for-gutenberg")},{value:"inset",label:Object(b.__)("Inset","ultimate-addons-for-gutenberg")},{value:"outset",label:Object(b.__)("Outset","ultimate-addons-for-gutenberg")},{value:"ridge",label:Object(b.__)("Ridge","ultimate-addons-for-gutenberg")}]}),"none"!=S&&o.a.createElement(u.RangeControl,{label:Object(b.__)("Border Width","ultimate-addons-for-gutenberg"),value:B,onChange:e=>H({borderWidth:e}),min:0,max:50,allowReset:!0}),o.a.createElement(u.RangeControl,{label:Object(b.__)("Border Radius","ultimate-addons-for-gutenberg"),value:w,onChange:e=>H({borderRadius:e}),min:0,max:100,allowReset:!0}),"none"!=S&&o.a.createElement(o.a.Fragment,null,o.a.createElement("p",{className:"uagb-setting-label"},Object(b.__)("Border Color","ultimate-addons-for-gutenberg"),o.a.createElement("span",{className:"components-base-control__label"},o.a.createElement("span",{className:"component-color-indicator",style:{backgroundColor:z}}))),o.a.createElement(d.ColorPalette,{value:z,onChange:e=>H({borderColor:e}),allowReset:!0})))))};a.default=o.a.memo(m)}}]);