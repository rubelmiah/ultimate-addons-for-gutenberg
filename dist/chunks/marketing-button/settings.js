(window.webpackJsonp_ultimate_addons_for_gutenberg=window.webpackJsonp_ultimate_addons_for_gutenberg||[]).push([[70],{489:function(e,a,t){"use strict";t.r(a);var l=t(130),n=t.n(l),o=t(6),r=t(2),i=t(12),c=t(1),b=t.n(c),g=t(10),s=t(19),u=t(66),m=t(53),d=t(4),p=t(5);const _=e=>{e=e.parentProps;const[a,t]=Object(c.useState)(!1),{attributes:l,setAttributes:_,deviceType:C}=e,{align:f,textAlign:v,link:E,linkTarget:h,titleSpace:O,icon:j,iconPosition:y,iconSpace:T,iconFontSize:S,iconFontSizeMobile:x,iconFontSizeTablet:F,titleColor:N,titleHoverColor:k,prefixColor:z,prefixHoverColor:H,iconColor:P,iconHoverColor:R,borderStyle:B,borderWidth:w,borderRadius:L,borderColor:M,borderHoverColor:I,vPadding:A,hPadding:G,hPaddingMobile:W,vPaddingMobile:D,hPaddingTablet:J,vPaddingTablet:U,paddingType:q,backgroundType:K,backgroundColor:Q,backgroundHoverColor:V,gradientColor1:X,gradientColor2:Y,gradientLocation1:Z,gradientLocation2:$,gradientType:ee,gradientAngle:ae,backgroundOpacity:te,backgroundHoverOpacity:le,titleFontFamily:ne,titleFontWeight:oe,titleFontSubset:re,titleFontSize:ie,titleFontSizeType:ce,titleFontSizeTablet:be,titleFontSizeMobile:ge,titleLineHeightType:se,titleLineHeight:ue,titleLineHeightTablet:me,titleLineHeightMobile:de,titleTag:pe,prefixFontFamily:_e,prefixFontWeight:Ce,prefixFontSubset:fe,prefixFontSize:ve,prefixFontSizeType:Ee,prefixFontSizeTablet:he,prefixFontSizeMobile:Oe,prefixLineHeightType:je,prefixLineHeight:ye,prefixLineHeightTablet:Te,prefixLineHeightMobile:Se}=l;let xe,Fe;if(1==xe){const e={google:{families:[ne+(oe?":"+oe:"")]}};xe=b.a.createElement(u.a,{config:e})}if(1==Fe){const e={google:{families:[_e+(Ce?":"+Ce:"")]}};Fe=b.a.createElement(u.a,{config:e})}const Ne=a&&b.a.createElement(p.Popover,{position:"bottom center",onClose:()=>t(!1)},b.a.createElement(d.__experimentalLinkControl,{value:{url:E,opensInNewTab:h},onChange:({url:e="",opensInNewTab:a})=>{_({link:e}),_({linkTarget:a}),_({linkTarget:a})}}));return b.a.createElement(c.Suspense,{fallback:Object(g.a)()},b.a.createElement(d.BlockControls,null,b.a.createElement(d.BlockAlignmentToolbar,{value:f,onChange:e=>{_({align:e})},controls:["left","center","right","full"]}),b.a.createElement(p.ToolbarGroup,null,b.a.createElement(p.ToolbarButton,{icon:"admin-links",name:"link",title:Object(r.__)("Link","ultimate-addons-for-gutenberg"),onClick:()=>t(!0)}))),Ne,b.a.createElement(d.InspectorControls,null,b.a.createElement(p.PanelBody,{title:Object(r.__)("General","ultimate-addons-for-gutenberg"),initialOpen:!0},b.a.createElement(p.SelectControl,{label:Object(r.__)("Text Alignment","ultimate-addons-for-gutenberg"),value:v,onChange:e=>_({textAlign:e}),options:[{value:"center",label:Object(r.__)("Center","ultimate-addons-for-gutenberg")},{value:"left",label:Object(r.__)("Left","ultimate-addons-for-gutenberg")},{value:"right",label:Object(r.__)("Right","ultimate-addons-for-gutenberg")}]}),b.a.createElement("hr",{className:"uagb-editor__separator"}),b.a.createElement("h2",null,Object(r.__)("Button Icon")),b.a.createElement(n.a,{icons:wp.UAGBSvgIcons,renderFunc:i.a,value:j,onChange:e=>_({icon:e}),isMulti:!1,noSelectedPlaceholder:Object(r.__)("Select Icon","ultimate-addons-for-gutenberg")}),""!==j&&b.a.createElement(b.a.Fragment,null,b.a.createElement(p.SelectControl,{label:Object(r.__)("Icon Position","ultimate-addons-for-gutenberg"),value:y,onChange:e=>_({iconPosition:e}),options:[{value:"before",label:Object(r.__)("Before Text","ultimate-addons-for-gutenberg")},{value:"after",label:Object(r.__)("After Text","ultimate-addons-for-gutenberg")}]}),b.a.createElement(p.RangeControl,{label:Object(r.__)("Icon Spacing","ultimate-addons-for-gutenberg"),value:T,onChange:e=>_({iconSpace:e}),min:0,max:50,beforeIcon:"",allowReset:!0}),b.a.createElement(m.a,null),"Desktop"===C&&b.a.createElement(b.a.Fragment,null,b.a.createElement(p.RangeControl,{label:Object(r.__)("Icon Size","ultimate-addons-for-gutenberg"),value:S,onChange:e=>_({iconFontSize:e}),min:0,max:500,allowReset:!0})),"Tablet"===C&&b.a.createElement(b.a.Fragment,null,b.a.createElement(p.RangeControl,{label:Object(r.__)("Icon Size","ultimate-addons-for-gutenberg"),value:F,onChange:e=>_({iconFontSizeTablet:e}),min:0,max:500,allowReset:!0})),"Mobile"===C&&b.a.createElement(b.a.Fragment,null,b.a.createElement(p.RangeControl,{label:Object(r.__)("Icon Size","ultimate-addons-for-gutenberg"),value:x,onChange:e=>_({iconFontSizeMobile:e}),min:0,max:500,allowReset:!0}))),b.a.createElement(p.RangeControl,{label:Object(r.__)("Title Bottom Spacing","ultimate-addons-for-gutenberg"),value:O,onChange:e=>_({titleSpace:e}),min:0,max:20,beforeIcon:"",allowReset:!0})),b.a.createElement(p.PanelBody,{title:Object(r.__)("Content","ultimate-addons-for-gutenberg"),initialOpen:!1},b.a.createElement(p.SelectControl,{label:Object(r.__)("Title Tag","ultimate-addons-for-gutenberg"),value:pe,onChange:e=>_({titleTag:e}),options:[{value:"h1",label:Object(r.__)("H1","ultimate-addons-for-gutenberg")},{value:"h2",label:Object(r.__)("H2","ultimate-addons-for-gutenberg")},{value:"h3",label:Object(r.__)("H3","ultimate-addons-for-gutenberg")},{value:"h4",label:Object(r.__)("H4","ultimate-addons-for-gutenberg")},{value:"h5",label:Object(r.__)("H5","ultimate-addons-for-gutenberg")},{value:"h6",label:Object(r.__)("H6","ultimate-addons-for-gutenberg")},{value:"span",label:Object(r.__)("span","ultimate-addons-for-gutenberg")},{value:"p",label:Object(r.__)("p","ultimate-addons-for-gutenberg")}]}),b.a.createElement("hr",{className:"uagb-editor__separator"}),b.a.createElement("h2",null,Object(r.__)("Title","ultimate-addons-for-gutenberg")),b.a.createElement(s.a,{label:Object(r.__)("Typography","ultimate-addons-for-gutenberg"),attributes:l,setAttributes:_,loadGoogleFonts:{value:xe,label:"loadTitleGoogleFonts"},fontFamily:{value:ne,label:"titleFontFamily"},fontWeight:{value:oe,label:"titleFontWeight"},fontSubset:{value:re,label:"titleFontSubset"},fontSizeType:{value:ce,label:"titleFontSizeType"},fontSize:{value:ie,label:"titleFontSize"},fontSizeMobile:{value:ge,label:"titleFontSizeMobile"},fontSizeTablet:{value:be,label:"titleFontSizeTablet"},lineHeightType:{value:se,label:"titleLineHeightType"},lineHeight:{value:ue,label:"titleLineHeight"},lineHeightMobile:{value:de,label:"titleLineHeightMobile"},lineHeightTablet:{value:me,label:"titleLineHeightTablet"}}),b.a.createElement("hr",{className:"uagb-editor__separator"}),b.a.createElement("h2",null,Object(r.__)("Description","ultimate-addons-for-gutenberg")),b.a.createElement(s.a,{label:Object(r.__)("Typography","ultimate-addons-for-gutenberg"),attributes:l,setAttributes:_,loadGoogleFonts:{value:Fe,label:"loadPrefixGoogleFonts"},fontFamily:{value:_e,label:"prefixFontFamily"},fontWeight:{value:Ce,label:"prefixFontWeight"},fontSubset:{value:fe,label:"prefixFontSubset"},fontSizeType:{value:Ee,label:"prefixFontSizeType"},fontSize:{value:ve,label:"prefixFontSize"},fontSizeMobile:{value:Oe,label:"prefixFontSizeMobile"},fontSizeTablet:{value:he,label:"prefixFontSizeTablet"},lineHeightType:{value:je,label:"prefixLineHeightType"},lineHeight:{value:ye,label:"prefixLineHeight"},lineHeightMobile:{value:Se,label:"prefixLineHeightMobile"},lineHeightTablet:{value:Te,label:"prefixLineHeightTablet"}}),b.a.createElement("hr",{className:"uagb-editor__separator"}),b.a.createElement("h2",null,Object(r.__)("Colors")),b.a.createElement(p.TabPanel,{className:"uagb-inspect-tabs uagb-inspect-tabs-col-2",activeClass:"active-tab",tabs:[{name:"normal",title:Object(r.__)("Normal","ultimate-addons-for-gutenberg"),className:"uagb-normal-tab"},{name:"hover",title:Object(r.__)("Hover","ultimate-addons-for-gutenberg"),className:"uagb-focus-tab"}]},e=>{let a;return a="normal"===e.name?b.a.createElement(b.a.Fragment,null,b.a.createElement("p",{className:"uagb-setting-label"},Object(r.__)("Title Color","ultimate-addons-for-gutenberg"),b.a.createElement("span",{className:"components-base-control__label"},b.a.createElement("span",{className:"component-color-indicator",style:{backgroundColor:N}}))),b.a.createElement(d.ColorPalette,{value:N,onChange:e=>_({titleColor:e}),allowReset:!0}),b.a.createElement("p",{className:"uagb-setting-label"},Object(r.__)("Icon Color","ultimate-addons-for-gutenberg"),b.a.createElement("span",{className:"components-base-control__label"},b.a.createElement("span",{className:"component-color-indicator",style:{backgroundColor:P}}))),b.a.createElement(d.ColorPalette,{value:P,onChange:e=>_({iconColor:e}),allowReset:!0}),b.a.createElement("p",{className:"uagb-setting-label"},Object(r.__)("Description Color","ultimate-addons-for-gutenberg"),b.a.createElement("span",{className:"components-base-control__label"},b.a.createElement("span",{className:"component-color-indicator",style:{backgroundColor:z}}))),b.a.createElement(d.ColorPalette,{value:z,onChange:e=>_({prefixColor:e}),allowReset:!0})):b.a.createElement(b.a.Fragment,null,b.a.createElement("p",{className:"uagb-setting-label"},Object(r.__)("Title Hover Color","ultimate-addons-for-gutenberg"),b.a.createElement("span",{className:"components-base-control__label"},b.a.createElement("span",{className:"component-color-indicator",style:{backgroundColor:k}}))),b.a.createElement(d.ColorPalette,{value:k,onChange:e=>_({titleHoverColor:e}),allowReset:!0}),b.a.createElement("p",{className:"uagb-setting-label"},Object(r.__)("Icon Hover Color","ultimate-addons-for-gutenberg"),b.a.createElement("span",{className:"components-base-control__label"},b.a.createElement("span",{className:"component-color-indicator",style:{backgroundColor:R}}))),b.a.createElement(d.ColorPalette,{value:R,onChange:e=>_({iconHoverColor:e}),allowReset:!0}),b.a.createElement("p",{className:"uagb-setting-label"},Object(r.__)("Description Hover Color","ultimate-addons-for-gutenberg"),b.a.createElement("span",{className:"components-base-control__label"},b.a.createElement("span",{className:"component-color-indicator",style:{backgroundColor:H}}))),b.a.createElement(d.ColorPalette,{value:H,onChange:e=>_({prefixHoverColor:e}),allowReset:!0})),b.a.createElement("div",null,a)})),b.a.createElement(p.PanelBody,{title:Object(r.__)("Background"),initialOpen:!1},b.a.createElement(m.a,null),"Desktop"===C&&b.a.createElement(b.a.Fragment,null,b.a.createElement(p.ButtonGroup,{className:"uagb-size-type-field","aria-label":Object(r.__)("Size Type")},b.a.createElement(p.Button,{key:"px",className:"uagb-size-btn",isSmall:!0,isPrimary:"px"===q,"aria-pressed":"px"===q,onClick:()=>_({paddingType:"px"})},"px"),b.a.createElement(p.Button,{key:"%",className:"uagb-size-btn",isSmall:!0,isPrimary:"%"===q,"aria-pressed":"%"===q,onClick:()=>_({paddingType:"%"})},"%")),b.a.createElement("h2",null,Object(r.__)("Button Padding")),b.a.createElement(p.RangeControl,{label:o.a.vertical_spacing,className:"uagb-margin-control",value:A,onChange:e=>_({vPadding:e}),min:0,max:"%"==q?100:2e3}),b.a.createElement(p.RangeControl,{label:o.a.horizontal_spacing,className:"uagb-margin-control",value:G,onChange:e=>_({hPadding:e}),min:0,max:"%"==q?100:2e3})),"Tablet"===C&&b.a.createElement(b.a.Fragment,null,b.a.createElement(p.ButtonGroup,{className:"uagb-size-type-field","aria-label":Object(r.__)("Size Type")},b.a.createElement(p.Button,{key:"px",className:"uagb-size-btn",isSmall:!0,isPrimary:"px"===q,"aria-pressed":"px"===q,onClick:()=>_({paddingType:"px"})},"px"),b.a.createElement(p.Button,{key:"%",className:"uagb-size-btn",isSmall:!0,isPrimary:"%"===q,"aria-pressed":"%"===q,onClick:()=>_({paddingType:"%"})},"%")),b.a.createElement("h2",null,Object(r.__)("Button Padding")),b.a.createElement(p.RangeControl,{label:o.a.vertical_spacing,className:"uagb-margin-control",value:U,onChange:e=>_({vPaddingTablet:e}),min:0,max:"%"==q?100:2e3}),b.a.createElement(p.RangeControl,{label:o.a.horizontal_spacing,className:"uagb-margin-control",value:J,onChange:e=>_({hPaddingTablet:e}),min:0,max:"%"==q?100:2e3})),"Mobile"===C&&b.a.createElement(b.a.Fragment,null,b.a.createElement(p.ButtonGroup,{className:"uagb-size-type-field","aria-label":Object(r.__)("Size Type")},b.a.createElement(p.Button,{key:"px",className:"uagb-size-btn",isSmall:!0,isPrimary:"px"===q,"aria-pressed":"px"===q,onClick:()=>_({paddingType:"px"})},"px"),b.a.createElement(p.Button,{key:"%",className:"uagb-size-btn",isSmall:!0,isPrimary:"%"===q,"aria-pressed":"%"===q,onClick:()=>_({paddingType:"%"})},"%")),b.a.createElement("h2",null,Object(r.__)("Button Padding")),b.a.createElement(p.RangeControl,{label:o.a.vertical_spacing,className:"uagb-margin-control",value:D,onChange:e=>_({vPaddingMobile:e}),min:0,max:"%"==q?100:2e3}),b.a.createElement(p.RangeControl,{label:o.a.horizontal_spacing,className:"uagb-margin-control",value:W,onChange:e=>_({hPaddingMobile:e}),min:0,max:"%"==q?100:2e3})),b.a.createElement("hr",{className:"uagb-editor__separator"}),b.a.createElement("h2",null,Object(r.__)("Button Background","ultimate-addons-for-gutenberg")),b.a.createElement(p.SelectControl,{label:Object(r.__)("Background Type","ultimate-addons-for-gutenberg"),value:K,onChange:e=>_({backgroundType:e}),options:[{value:"transparent",label:Object(r.__)("Transparent","ultimate-addons-for-gutenberg")},{value:"color",label:Object(r.__)("Color","ultimate-addons-for-gutenberg")},{value:"gradient",label:Object(r.__)("Gradient","ultimate-addons-for-gutenberg")}]}),"color"==K&&b.a.createElement(b.a.Fragment,null,b.a.createElement("p",{className:"uagb-setting-label"},Object(r.__)("Background Color","ultimate-addons-for-gutenberg"),b.a.createElement("span",{className:"components-base-control__label"},b.a.createElement("span",{className:"component-color-indicator",style:{backgroundColor:Q}}))),b.a.createElement(d.ColorPalette,{value:Q,onChange:e=>_({backgroundColor:e}),allowReset:!0})),"gradient"==K&&b.a.createElement(b.a.Fragment,null,b.a.createElement(d.PanelColorSettings,{title:Object(r.__)("Color Settings","ultimate-addons-for-gutenberg"),colorSettings:[{value:Y,onChange:e=>_({gradientColor2:e}),label:Object(r.__)("Color 1","ultimate-addons-for-gutenberg")},{value:X,onChange:e=>_({gradientColor1:e}),label:Object(r.__)("Color 2","ultimate-addons-for-gutenberg")}]}),b.a.createElement(p.SelectControl,{label:Object(r.__)("Type","ultimate-addons-for-gutenberg"),value:ee,onChange:e=>_({gradientType:e}),options:[{value:"linear",label:Object(r.__)("Linear","ultimate-addons-for-gutenberg")},{value:"radial",label:Object(r.__)("Radial","ultimate-addons-for-gutenberg")}]}),b.a.createElement(p.RangeControl,{label:Object(r.__)("Location 1","ultimate-addons-for-gutenberg"),value:Z,onChange:e=>_({gradientLocation1:e}),min:0,max:100,allowReset:!0}),b.a.createElement(p.RangeControl,{label:Object(r.__)("Location 2","ultimate-addons-for-gutenberg"),value:$,onChange:e=>_({gradientLocation2:e}),min:0,max:100,allowReset:!0}),b.a.createElement(p.RangeControl,{label:Object(r.__)("Angle","ultimate-addons-for-gutenberg"),value:ae,onChange:e=>_({gradientAngle:e}),min:0,max:360,allowReset:!0})),"transparent"!==K&&b.a.createElement(p.RangeControl,{label:Object(r.__)("Opacity","ultimate-addons-for-gutenberg"),value:te,onChange:e=>_({backgroundOpacity:e}),min:0,max:100,allowReset:!0,initialPosition:0}),"color"==K&&b.a.createElement(b.a.Fragment,null,b.a.createElement("p",{className:"uagb-setting-label"},Object(r.__)("Background Hover Color","ultimate-addons-for-gutenberg"),b.a.createElement("span",{className:"components-base-control__label"},b.a.createElement("span",{className:"component-color-indicator",style:{backgroundColor:V}}))),b.a.createElement(d.ColorPalette,{value:V,onChange:e=>_({backgroundHoverColor:e}),allowReset:!0}),b.a.createElement(p.RangeControl,{label:Object(r.__)("Opacity","ultimate-addons-for-gutenberg"),value:le,onChange:e=>_({backgroundHoverOpacity:e}),min:0,max:100,allowReset:!0,initialPosition:0}))),b.a.createElement(p.PanelBody,{title:Object(r.__)("Border","ultimate-addons-for-gutenberg"),initialOpen:!1},b.a.createElement(p.SelectControl,{label:Object(r.__)("Border Style","ultimate-addons-for-gutenberg"),value:B,onChange:e=>_({borderStyle:e}),options:[{value:"none",label:Object(r.__)("None","ultimate-addons-for-gutenberg")},{value:"solid",label:Object(r.__)("Solid","ultimate-addons-for-gutenberg")},{value:"dotted",label:Object(r.__)("Dotted","ultimate-addons-for-gutenberg")},{value:"dashed",label:Object(r.__)("Dashed","ultimate-addons-for-gutenberg")},{value:"double",label:Object(r.__)("Double","ultimate-addons-for-gutenberg")},{value:"groove",label:Object(r.__)("Groove","ultimate-addons-for-gutenberg")},{value:"inset",label:Object(r.__)("Inset","ultimate-addons-for-gutenberg")},{value:"outset",label:Object(r.__)("Outset","ultimate-addons-for-gutenberg")},{value:"ridge",label:Object(r.__)("Ridge","ultimate-addons-for-gutenberg")}]}),"none"!==B&&b.a.createElement(p.RangeControl,{label:Object(r.__)("Border Width","ultimate-addons-for-gutenberg"),value:w,onChange:e=>_({borderWidth:e}),min:0,max:50,allowReset:!0}),b.a.createElement(p.RangeControl,{label:Object(r.__)("Border Radius","ultimate-addons-for-gutenberg"),value:L,onChange:e=>_({borderRadius:e}),min:0,max:1e3,allowReset:!0}),"none"!==B&&b.a.createElement(b.a.Fragment,null,b.a.createElement("p",{className:"uagb-setting-label"},Object(r.__)("Border Color","ultimate-addons-for-gutenberg"),b.a.createElement("span",{className:"components-base-control__label"},b.a.createElement("span",{className:"component-color-indicator",style:{backgroundColor:M}}))),b.a.createElement(d.ColorPalette,{value:M,onChange:e=>_({borderColor:e}),allowReset:!0}),b.a.createElement("p",{className:"uagb-setting-label"},Object(r.__)("Border Hover Color","ultimate-addons-for-gutenberg"),b.a.createElement("span",{className:"components-base-control__label"},b.a.createElement("span",{className:"component-color-indicator",style:{backgroundColor:I}}))),b.a.createElement(d.ColorPalette,{value:I,onChange:e=>_({borderHoverColor:e}),allowReset:!0})))),xe,Fe)};a.default=b.a.memo(_)}}]);