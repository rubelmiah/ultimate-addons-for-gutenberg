(window.webpackJsonp_ultimate_addons_for_gutenberg=window.webpackJsonp_ultimate_addons_for_gutenberg||[]).push([[69],{567:function(e,t,a){"use strict";a.r(t);var n=a(126),l=a.n(n),o=a(6),r=a(2),i=a(14),c=a(1),u=a.n(c),b=a(11),g=a(22),s=a(59),m=a(71),d=a(5),p=a(3);function _(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}var f=function(e){e=e.parentProps;var t,a,n,f,v=(n=Object(c.useState)(!1),f=2,function(e){if(Array.isArray(e))return e}(n)||function(e,t){var a=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=a){var n,l,o=[],_n=!0,r=!1;try{for(a=a.call(e);!(_n=(n=a.next()).done)&&(o.push(n.value),!t||o.length!==t);_n=!0);}catch(e){r=!0,l=e}finally{try{_n||null==a.return||a.return()}finally{if(r)throw l}}return o}}(n,f)||function(e,t){if(e){if("string"==typeof e)return _(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);return"Object"===a&&e.constructor&&(a=e.constructor.name),"Map"===a||"Set"===a?Array.from(e):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?_(e,t):void 0}}(n,f)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),C=v[0],E=v[1],h=e,y=h.attributes,O=h.setAttributes,j=h.deviceType,S=y.align,T=y.textAlign,x=y.link,F=y.linkTarget,N=y.titleSpace,k=y.icon,z=y.iconPosition,H=y.iconSpace,P=y.iconFontSize,R=y.iconFontSizeMobile,w=y.iconFontSizeTablet,B=y.titleColor,L=y.titleHoverColor,M=y.prefixColor,I=y.prefixHoverColor,A=y.iconColor,G=y.iconHoverColor,W=y.borderStyle,D=y.borderWidth,J=y.borderRadius,U=y.borderColor,$=y.borderHoverColor,q=y.vPadding,K=y.hPadding,Q=y.hPaddingMobile,V=y.vPaddingMobile,X=y.hPaddingTablet,Y=y.vPaddingTablet,Z=y.paddingType,ee=y.backgroundType,te=y.backgroundColor,ae=y.backgroundHoverColor,ne=y.gradientColor1,le=y.gradientColor2,oe=y.gradientLocation1,re=y.gradientLocation2,ie=y.gradientType,ce=y.gradientAngle,ue=y.backgroundOpacity,be=y.backgroundHoverOpacity,ge=y.titleFontFamily,se=y.titleFontWeight,me=y.titleFontSubset,de=y.titleFontSize,pe=y.titleFontSizeType,_e=y.titleFontSizeTablet,fe=y.titleFontSizeMobile,ve=y.titleLineHeightType,Ce=y.titleLineHeight,Ee=y.titleLineHeightTablet,he=y.titleLineHeightMobile,ye=y.titleTag,Oe=y.prefixFontFamily,je=y.prefixFontWeight,Se=y.prefixFontSubset,Te=y.prefixFontSize,xe=y.prefixFontSizeType,Fe=y.prefixFontSizeTablet,Ne=y.prefixFontSizeMobile,ke=y.prefixLineHeightType,ze=y.prefixLineHeight,He=y.prefixLineHeightTablet,Pe=y.prefixLineHeightMobile;if(1==t){var Re={google:{families:[ge+(se?":"+se:"")]}};t=u.a.createElement(s.a,{config:Re})}if(1==a){var we={google:{families:[Oe+(je?":"+je:"")]}};a=u.a.createElement(s.a,{config:we})}var Be=C&&u.a.createElement(p.Popover,{position:"bottom center",onClose:function(){return E(!1)}},u.a.createElement(d.__experimentalLinkControl,{value:{url:x,opensInNewTab:F},onChange:function(e){var t=e.url,a=void 0===t?"":t,n=e.opensInNewTab;O({link:a}),O({linkTarget:n}),O({linkTarget:n})}}));return u.a.createElement(c.Suspense,{fallback:Object(b.a)()},u.a.createElement(d.BlockControls,null,u.a.createElement(d.BlockAlignmentToolbar,{value:S,onChange:function(e){O({align:e})},controls:["left","center","right","full"]}),u.a.createElement(p.ToolbarGroup,null,u.a.createElement(p.ToolbarButton,{icon:"admin-links",name:"link",title:Object(r.__)("Link","ultimate-addons-for-gutenberg"),onClick:function(){return E(!0)}}))),Be,u.a.createElement(d.InspectorControls,null,u.a.createElement(p.PanelBody,{title:Object(r.__)("General","ultimate-addons-for-gutenberg"),initialOpen:!0},u.a.createElement(p.SelectControl,{label:Object(r.__)("Text Alignment","ultimate-addons-for-gutenberg"),value:T,onChange:function(e){return O({textAlign:e})},options:[{value:"center",label:Object(r.__)("Center","ultimate-addons-for-gutenberg")},{value:"left",label:Object(r.__)("Left","ultimate-addons-for-gutenberg")},{value:"right",label:Object(r.__)("Right","ultimate-addons-for-gutenberg")}]}),u.a.createElement("hr",{className:"uagb-editor__separator"}),u.a.createElement("h2",null,Object(r.__)("Button Icon")),u.a.createElement(l.a,{icons:wp.UAGBSvgIcons,renderFunc:i.a,value:k,onChange:function(e){return O({icon:e})},isMulti:!1,noSelectedPlaceholder:Object(r.__)("Select Icon","ultimate-addons-for-gutenberg")}),""!==k&&u.a.createElement(u.a.Fragment,null,u.a.createElement(p.SelectControl,{label:Object(r.__)("Icon Position","ultimate-addons-for-gutenberg"),value:z,onChange:function(e){return O({iconPosition:e})},options:[{value:"before",label:Object(r.__)("Before Text","ultimate-addons-for-gutenberg")},{value:"after",label:Object(r.__)("After Text","ultimate-addons-for-gutenberg")}]}),u.a.createElement(p.RangeControl,{label:Object(r.__)("Icon Spacing","ultimate-addons-for-gutenberg"),value:H,onChange:function(e){return O({iconSpace:e})},min:0,max:50,beforeIcon:"",allowReset:!0}),u.a.createElement(m.a,null),"Desktop"===j&&u.a.createElement(u.a.Fragment,null,u.a.createElement(p.RangeControl,{label:Object(r.__)("Icon Size","ultimate-addons-for-gutenberg"),value:P,onChange:function(e){return O({iconFontSize:e})},min:0,max:500,allowReset:!0})),"Tablet"===j&&u.a.createElement(u.a.Fragment,null,u.a.createElement(p.RangeControl,{label:Object(r.__)("Icon Size","ultimate-addons-for-gutenberg"),value:w,onChange:function(e){return O({iconFontSizeTablet:e})},min:0,max:500,allowReset:!0})),"Mobile"===j&&u.a.createElement(u.a.Fragment,null,u.a.createElement(p.RangeControl,{label:Object(r.__)("Icon Size","ultimate-addons-for-gutenberg"),value:R,onChange:function(e){return O({iconFontSizeMobile:e})},min:0,max:500,allowReset:!0}))),u.a.createElement(p.RangeControl,{label:Object(r.__)("Title Bottom Spacing","ultimate-addons-for-gutenberg"),value:N,onChange:function(e){return O({titleSpace:e})},min:0,max:20,beforeIcon:"",allowReset:!0})),u.a.createElement(p.PanelBody,{title:Object(r.__)("Content","ultimate-addons-for-gutenberg"),initialOpen:!1},u.a.createElement(p.SelectControl,{label:Object(r.__)("Title Tag","ultimate-addons-for-gutenberg"),value:ye,onChange:function(e){return O({titleTag:e})},options:[{value:"h1",label:Object(r.__)("H1","ultimate-addons-for-gutenberg")},{value:"h2",label:Object(r.__)("H2","ultimate-addons-for-gutenberg")},{value:"h3",label:Object(r.__)("H3","ultimate-addons-for-gutenberg")},{value:"h4",label:Object(r.__)("H4","ultimate-addons-for-gutenberg")},{value:"h5",label:Object(r.__)("H5","ultimate-addons-for-gutenberg")},{value:"h6",label:Object(r.__)("H6","ultimate-addons-for-gutenberg")},{value:"span",label:Object(r.__)("span","ultimate-addons-for-gutenberg")},{value:"p",label:Object(r.__)("p","ultimate-addons-for-gutenberg")}]}),u.a.createElement("hr",{className:"uagb-editor__separator"}),u.a.createElement("h2",null,Object(r.__)("Title","ultimate-addons-for-gutenberg")),u.a.createElement(g.a,{label:Object(r.__)("Typography","ultimate-addons-for-gutenberg"),attributes:y,setAttributes:O,loadGoogleFonts:{value:t,label:"loadTitleGoogleFonts"},fontFamily:{value:ge,label:"titleFontFamily"},fontWeight:{value:se,label:"titleFontWeight"},fontSubset:{value:me,label:"titleFontSubset"},fontSizeType:{value:pe,label:"titleFontSizeType"},fontSize:{value:de,label:"titleFontSize"},fontSizeMobile:{value:fe,label:"titleFontSizeMobile"},fontSizeTablet:{value:_e,label:"titleFontSizeTablet"},lineHeightType:{value:ve,label:"titleLineHeightType"},lineHeight:{value:Ce,label:"titleLineHeight"},lineHeightMobile:{value:he,label:"titleLineHeightMobile"},lineHeightTablet:{value:Ee,label:"titleLineHeightTablet"}}),u.a.createElement("hr",{className:"uagb-editor__separator"}),u.a.createElement("h2",null,Object(r.__)("Description","ultimate-addons-for-gutenberg")),u.a.createElement(g.a,{label:Object(r.__)("Typography","ultimate-addons-for-gutenberg"),attributes:y,setAttributes:O,loadGoogleFonts:{value:a,label:"loadPrefixGoogleFonts"},fontFamily:{value:Oe,label:"prefixFontFamily"},fontWeight:{value:je,label:"prefixFontWeight"},fontSubset:{value:Se,label:"prefixFontSubset"},fontSizeType:{value:xe,label:"prefixFontSizeType"},fontSize:{value:Te,label:"prefixFontSize"},fontSizeMobile:{value:Ne,label:"prefixFontSizeMobile"},fontSizeTablet:{value:Fe,label:"prefixFontSizeTablet"},lineHeightType:{value:ke,label:"prefixLineHeightType"},lineHeight:{value:ze,label:"prefixLineHeight"},lineHeightMobile:{value:Pe,label:"prefixLineHeightMobile"},lineHeightTablet:{value:He,label:"prefixLineHeightTablet"}}),u.a.createElement("hr",{className:"uagb-editor__separator"}),u.a.createElement("h2",null,Object(r.__)("Colors")),u.a.createElement(p.TabPanel,{className:"uagb-inspect-tabs uagb-inspect-tabs-col-2",activeClass:"active-tab",tabs:[{name:"normal",title:Object(r.__)("Normal","ultimate-addons-for-gutenberg"),className:"uagb-normal-tab"},{name:"hover",title:Object(r.__)("Hover","ultimate-addons-for-gutenberg"),className:"uagb-focus-tab"}]},(function(e){var t;return t="normal"===e.name?u.a.createElement(u.a.Fragment,null,u.a.createElement("p",{className:"uagb-setting-label"},Object(r.__)("Title Color","ultimate-addons-for-gutenberg"),u.a.createElement("span",{className:"components-base-control__label"},u.a.createElement("span",{className:"component-color-indicator",style:{backgroundColor:B}}))),u.a.createElement(d.ColorPalette,{value:B,onChange:function(e){return O({titleColor:e})},allowReset:!0}),u.a.createElement("p",{className:"uagb-setting-label"},Object(r.__)("Icon Color","ultimate-addons-for-gutenberg"),u.a.createElement("span",{className:"components-base-control__label"},u.a.createElement("span",{className:"component-color-indicator",style:{backgroundColor:A}}))),u.a.createElement(d.ColorPalette,{value:A,onChange:function(e){return O({iconColor:e})},allowReset:!0}),u.a.createElement("p",{className:"uagb-setting-label"},Object(r.__)("Description Color","ultimate-addons-for-gutenberg"),u.a.createElement("span",{className:"components-base-control__label"},u.a.createElement("span",{className:"component-color-indicator",style:{backgroundColor:M}}))),u.a.createElement(d.ColorPalette,{value:M,onChange:function(e){return O({prefixColor:e})},allowReset:!0})):u.a.createElement(u.a.Fragment,null,u.a.createElement("p",{className:"uagb-setting-label"},Object(r.__)("Title Hover Color","ultimate-addons-for-gutenberg"),u.a.createElement("span",{className:"components-base-control__label"},u.a.createElement("span",{className:"component-color-indicator",style:{backgroundColor:L}}))),u.a.createElement(d.ColorPalette,{value:L,onChange:function(e){return O({titleHoverColor:e})},allowReset:!0}),u.a.createElement("p",{className:"uagb-setting-label"},Object(r.__)("Icon Hover Color","ultimate-addons-for-gutenberg"),u.a.createElement("span",{className:"components-base-control__label"},u.a.createElement("span",{className:"component-color-indicator",style:{backgroundColor:G}}))),u.a.createElement(d.ColorPalette,{value:G,onChange:function(e){return O({iconHoverColor:e})},allowReset:!0}),u.a.createElement("p",{className:"uagb-setting-label"},Object(r.__)("Description Hover Color","ultimate-addons-for-gutenberg"),u.a.createElement("span",{className:"components-base-control__label"},u.a.createElement("span",{className:"component-color-indicator",style:{backgroundColor:I}}))),u.a.createElement(d.ColorPalette,{value:I,onChange:function(e){return O({prefixHoverColor:e})},allowReset:!0})),u.a.createElement("div",null,t)}))),u.a.createElement(p.PanelBody,{title:Object(r.__)("Background"),initialOpen:!1},u.a.createElement(m.a,null),"Desktop"===j&&u.a.createElement(u.a.Fragment,null,u.a.createElement(p.ButtonGroup,{className:"uagb-size-type-field","aria-label":Object(r.__)("Size Type")},u.a.createElement(p.Button,{key:"px",className:"uagb-size-btn",isSmall:!0,isPrimary:"px"===Z,"aria-pressed":"px"===Z,onClick:function(){return O({paddingType:"px"})}},"px"),u.a.createElement(p.Button,{key:"%",className:"uagb-size-btn",isSmall:!0,isPrimary:"%"===Z,"aria-pressed":"%"===Z,onClick:function(){return O({paddingType:"%"})}},"%")),u.a.createElement("h2",null,Object(r.__)("Button Padding")),u.a.createElement(p.RangeControl,{label:o.a.vertical_spacing,className:"uagb-margin-control",value:q,onChange:function(e){return O({vPadding:e})},min:0,max:"%"==Z?100:2e3}),u.a.createElement(p.RangeControl,{label:o.a.horizontal_spacing,className:"uagb-margin-control",value:K,onChange:function(e){return O({hPadding:e})},min:0,max:"%"==Z?100:2e3})),"Tablet"===j&&u.a.createElement(u.a.Fragment,null,u.a.createElement(p.ButtonGroup,{className:"uagb-size-type-field","aria-label":Object(r.__)("Size Type")},u.a.createElement(p.Button,{key:"px",className:"uagb-size-btn",isSmall:!0,isPrimary:"px"===Z,"aria-pressed":"px"===Z,onClick:function(){return O({paddingType:"px"})}},"px"),u.a.createElement(p.Button,{key:"%",className:"uagb-size-btn",isSmall:!0,isPrimary:"%"===Z,"aria-pressed":"%"===Z,onClick:function(){return O({paddingType:"%"})}},"%")),u.a.createElement("h2",null,Object(r.__)("Button Padding")),u.a.createElement(p.RangeControl,{label:o.a.vertical_spacing,className:"uagb-margin-control",value:Y,onChange:function(e){return O({vPaddingTablet:e})},min:0,max:"%"==Z?100:2e3}),u.a.createElement(p.RangeControl,{label:o.a.horizontal_spacing,className:"uagb-margin-control",value:X,onChange:function(e){return O({hPaddingTablet:e})},min:0,max:"%"==Z?100:2e3})),"Mobile"===j&&u.a.createElement(u.a.Fragment,null,u.a.createElement(p.ButtonGroup,{className:"uagb-size-type-field","aria-label":Object(r.__)("Size Type")},u.a.createElement(p.Button,{key:"px",className:"uagb-size-btn",isSmall:!0,isPrimary:"px"===Z,"aria-pressed":"px"===Z,onClick:function(){return O({paddingType:"px"})}},"px"),u.a.createElement(p.Button,{key:"%",className:"uagb-size-btn",isSmall:!0,isPrimary:"%"===Z,"aria-pressed":"%"===Z,onClick:function(){return O({paddingType:"%"})}},"%")),u.a.createElement("h2",null,Object(r.__)("Button Padding")),u.a.createElement(p.RangeControl,{label:o.a.vertical_spacing,className:"uagb-margin-control",value:V,onChange:function(e){return O({vPaddingMobile:e})},min:0,max:"%"==Z?100:2e3}),u.a.createElement(p.RangeControl,{label:o.a.horizontal_spacing,className:"uagb-margin-control",value:Q,onChange:function(e){return O({hPaddingMobile:e})},min:0,max:"%"==Z?100:2e3})),u.a.createElement("hr",{className:"uagb-editor__separator"}),u.a.createElement("h2",null,Object(r.__)("Button Background","ultimate-addons-for-gutenberg")),u.a.createElement(p.SelectControl,{label:Object(r.__)("Background Type","ultimate-addons-for-gutenberg"),value:ee,onChange:function(e){return O({backgroundType:e})},options:[{value:"transparent",label:Object(r.__)("Transparent","ultimate-addons-for-gutenberg")},{value:"color",label:Object(r.__)("Color","ultimate-addons-for-gutenberg")},{value:"gradient",label:Object(r.__)("Gradient","ultimate-addons-for-gutenberg")}]}),"color"==ee&&u.a.createElement(u.a.Fragment,null,u.a.createElement("p",{className:"uagb-setting-label"},Object(r.__)("Background Color","ultimate-addons-for-gutenberg"),u.a.createElement("span",{className:"components-base-control__label"},u.a.createElement("span",{className:"component-color-indicator",style:{backgroundColor:te}}))),u.a.createElement(d.ColorPalette,{value:te,onChange:function(e){return O({backgroundColor:e})},allowReset:!0})),"gradient"==ee&&u.a.createElement(u.a.Fragment,null,u.a.createElement(d.PanelColorSettings,{title:Object(r.__)("Color Settings","ultimate-addons-for-gutenberg"),colorSettings:[{value:le,onChange:function(e){return O({gradientColor2:e})},label:Object(r.__)("Color 1","ultimate-addons-for-gutenberg")},{value:ne,onChange:function(e){return O({gradientColor1:e})},label:Object(r.__)("Color 2","ultimate-addons-for-gutenberg")}]}),u.a.createElement(p.SelectControl,{label:Object(r.__)("Type","ultimate-addons-for-gutenberg"),value:ie,onChange:function(e){return O({gradientType:e})},options:[{value:"linear",label:Object(r.__)("Linear","ultimate-addons-for-gutenberg")},{value:"radial",label:Object(r.__)("Radial","ultimate-addons-for-gutenberg")}]}),u.a.createElement(p.RangeControl,{label:Object(r.__)("Location 1","ultimate-addons-for-gutenberg"),value:oe,onChange:function(e){return O({gradientLocation1:e})},min:0,max:100,allowReset:!0}),u.a.createElement(p.RangeControl,{label:Object(r.__)("Location 2","ultimate-addons-for-gutenberg"),value:re,onChange:function(e){return O({gradientLocation2:e})},min:0,max:100,allowReset:!0}),u.a.createElement(p.RangeControl,{label:Object(r.__)("Angle","ultimate-addons-for-gutenberg"),value:ce,onChange:function(e){return O({gradientAngle:e})},min:0,max:360,allowReset:!0})),"transparent"!==ee&&u.a.createElement(p.RangeControl,{label:Object(r.__)("Opacity","ultimate-addons-for-gutenberg"),value:ue,onChange:function(e){return O({backgroundOpacity:e})},min:0,max:100,allowReset:!0,initialPosition:0}),"color"==ee&&u.a.createElement(u.a.Fragment,null,u.a.createElement("p",{className:"uagb-setting-label"},Object(r.__)("Background Hover Color","ultimate-addons-for-gutenberg"),u.a.createElement("span",{className:"components-base-control__label"},u.a.createElement("span",{className:"component-color-indicator",style:{backgroundColor:ae}}))),u.a.createElement(d.ColorPalette,{value:ae,onChange:function(e){return O({backgroundHoverColor:e})},allowReset:!0}),u.a.createElement(p.RangeControl,{label:Object(r.__)("Opacity","ultimate-addons-for-gutenberg"),value:be,onChange:function(e){return O({backgroundHoverOpacity:e})},min:0,max:100,allowReset:!0,initialPosition:0}))),u.a.createElement(p.PanelBody,{title:Object(r.__)("Border","ultimate-addons-for-gutenberg"),initialOpen:!1},u.a.createElement(p.SelectControl,{label:Object(r.__)("Border Style","ultimate-addons-for-gutenberg"),value:W,onChange:function(e){return O({borderStyle:e})},options:[{value:"none",label:Object(r.__)("None","ultimate-addons-for-gutenberg")},{value:"solid",label:Object(r.__)("Solid","ultimate-addons-for-gutenberg")},{value:"dotted",label:Object(r.__)("Dotted","ultimate-addons-for-gutenberg")},{value:"dashed",label:Object(r.__)("Dashed","ultimate-addons-for-gutenberg")},{value:"double",label:Object(r.__)("Double","ultimate-addons-for-gutenberg")},{value:"groove",label:Object(r.__)("Groove","ultimate-addons-for-gutenberg")},{value:"inset",label:Object(r.__)("Inset","ultimate-addons-for-gutenberg")},{value:"outset",label:Object(r.__)("Outset","ultimate-addons-for-gutenberg")},{value:"ridge",label:Object(r.__)("Ridge","ultimate-addons-for-gutenberg")}]}),"none"!==W&&u.a.createElement(p.RangeControl,{label:Object(r.__)("Border Width","ultimate-addons-for-gutenberg"),value:D,onChange:function(e){return O({borderWidth:e})},min:0,max:50,allowReset:!0}),u.a.createElement(p.RangeControl,{label:Object(r.__)("Border Radius","ultimate-addons-for-gutenberg"),value:J,onChange:function(e){return O({borderRadius:e})},min:0,max:1e3,allowReset:!0}),"none"!==W&&u.a.createElement(u.a.Fragment,null,u.a.createElement("p",{className:"uagb-setting-label"},Object(r.__)("Border Color","ultimate-addons-for-gutenberg"),u.a.createElement("span",{className:"components-base-control__label"},u.a.createElement("span",{className:"component-color-indicator",style:{backgroundColor:U}}))),u.a.createElement(d.ColorPalette,{value:U,onChange:function(e){return O({borderColor:e})},allowReset:!0}),u.a.createElement("p",{className:"uagb-setting-label"},Object(r.__)("Border Hover Color","ultimate-addons-for-gutenberg"),u.a.createElement("span",{className:"components-base-control__label"},u.a.createElement("span",{className:"component-color-indicator",style:{backgroundColor:$}}))),u.a.createElement(d.ColorPalette,{value:$,onChange:function(e){return O({borderHoverColor:e})},allowReset:!0})))),t,a)};t.default=u.a.memo(f)}}]);