(window.webpackJsonp_ultimate_addons_for_gutenberg=window.webpackJsonp_ultimate_addons_for_gutenberg||[]).push([[98],{579:function(e,t,a){"use strict";a.r(t);var l=a(1),n=a.n(l),o=a(2),r=a(11),i=a(59),u=a(71),s=a(22),c=a(128),b=a(3),g=a(5),m=function(e){var t,a,m,d=e=e.parentProps,_=d.attributes,f=d.setAttributes,p=d.taxonomyList,h=d.termsList,C=d.deviceType,E=_.postType,v=_.taxonomyType,y=_.layout,S=_.columns,O=_.tcolumns,j=_.mcolumns,F=_.bgColor,T=_.titleColor,w=_.countColor,x=_.rowGap,N=_.columnGap,H=_.contentPadding,k=_.contentPaddingMobile,L=_.contentPaddingTablet,R=_.titleBottomSpace,z=_.alignment,P=_.listStyle,B=_.seperatorStyle,M=_.seperatorWidth,G=_.seperatorThickness,D=_.seperatorColor,W=_.listTextColor,A=_.hoverlistTextColor,I=_.listBottomMargin,V=_.listStyleColor,J=_.hoverlistStyleColor,q=_.noTaxDisplaytext,K=_.boxShadowColor,Q=_.boxShadowHOffset,U=_.boxShadowVOffset,X=_.boxShadowBlur,Y=_.boxShadowSpread,Z=_.boxShadowPosition,$=_.showCount,ee=_.titleFontSize,te=_.titleFontSizeType,ae=_.titleFontSizeMobile,le=_.titleFontSizeTablet,ne=_.titleFontFamily,oe=_.titleFontWeight,re=_.titleFontSubset,ie=_.titleLineHeightType,ue=_.titleLineHeight,se=_.titleLineHeightTablet,ce=_.titleLineHeightMobile,be=_.titleLoadGoogleFonts,ge=_.countFontSize,me=_.countFontSizeType,de=_.countFontSizeMobile,_e=_.countFontSizeTablet,fe=_.countFontFamily,pe=_.countFontWeight,he=_.countFontSubset,Ce=_.countLineHeightType,Ee=_.countLineHeight,ve=_.countLineHeightTablet,ye=_.countLineHeightMobile,Se=_.countLoadGoogleFonts,Oe=_.listFontSize,je=_.listFontSizeType,Fe=_.listFontSizeMobile,Te=_.listFontSizeTablet,we=_.listFontFamily,xe=_.listFontWeight,Ne=_.listFontSubset,He=_.listLineHeightType,ke=_.listLineHeight,Le=_.listLineHeightTablet,Re=_.listLineHeightMobile,ze=_.listLoadGoogleFonts,Pe=_.showEmptyTaxonomy,Be=_.borderStyle,Me=_.borderThickness,Ge=_.borderColor,De=_.borderRadius,We=_.listDisplayStyle,Ae=_.showhierarchy,Ie=_.titleTag,Ve=Pe?p:h,Je=[{value:"",label:Object(o.__)("Select Taxonomy","ultimate-addons-for-gutenberg")}];if(""!=Ve&&null!=Ve&&Object.keys(Ve).map((function(e,t){return Je.push({value:p[e].name,label:p[e].label})})),1==be){var qe={google:{families:[ne+(oe?":"+oe:"")]}};t=n.a.createElement(i.a,{config:qe})}if(1==Se){var Ke={google:{families:[fe+(pe?":"+pe:"")]}};a=n.a.createElement(i.a,{config:Ke})}if(1==ze){var Qe={google:{families:[we+(xe?":"+xe:"")]}};m=n.a.createElement(i.a,{config:Qe})}var Ue=n.a.createElement(n.a.Fragment,null,n.a.createElement("h2",{className:"uagb-setting-label"},Object(o.__)("Text Color","ultimate-addons-for-gutenberg"),n.a.createElement("span",{className:"components-base-control__label"},n.a.createElement("span",{className:"component-color-indicator",style:{backgroundColor:W}}))),n.a.createElement(g.ColorPalette,{value:W,onChange:function(e){return f({listTextColor:e})},allowReset:!0}),n.a.createElement("br",null),"none"!=P&&n.a.createElement(n.a.Fragment,null,n.a.createElement("h2",{className:"uagb-setting-label"},Object(o.__)("Bullet/Numbers Color","ultimate-addons-for-gutenberg"),n.a.createElement("span",{className:"components-base-control__label"},n.a.createElement("span",{className:"component-color-indicator",style:{backgroundColor:V}}))),n.a.createElement(g.ColorPalette,{value:V,onChange:function(e){return f({listStyleColor:e})},allowReset:!0}))),Xe=n.a.createElement(n.a.Fragment,null,n.a.createElement("h2",{className:"uagb-setting-label"},Object(o.__)("Text Hover Color","ultimate-addons-for-gutenberg"),n.a.createElement("span",{className:"components-base-control__label"},n.a.createElement("span",{className:"component-color-indicator",style:{backgroundColor:A}}))),n.a.createElement(g.ColorPalette,{value:A,onChange:function(e){return f({hoverlistTextColor:e})},allowReset:!0}),n.a.createElement("br",null),"none"!=P&&n.a.createElement(n.a.Fragment,null,n.a.createElement("h2",{className:"uagb-setting-label"},Object(o.__)("Bullet/Numbers Hover Color","ultimate-addons-for-gutenberg"),n.a.createElement("span",{className:"components-base-control__label"},n.a.createElement("span",{className:"component-color-indicator",style:{backgroundColor:J}}))),n.a.createElement(g.ColorPalette,{value:J,onChange:function(e){return f({hoverlistStyleColor:e})},allowReset:!0}))),Ye=n.a.createElement(g.InspectorControls,null,n.a.createElement(b.PanelBody,{title:Object(o.__)("General","ultimate-addons-for-gutenberg")},n.a.createElement(b.SelectControl,{label:Object(o.__)("Heading Tag","ultimate-addons-for-gutenberg"),value:Ie,onChange:function(e){return f({titleTag:e})},options:[{value:"div",label:Object(o.__)("Div","ultimate-addons-for-gutenberg")},{value:"h1",label:Object(o.__)("H1","ultimate-addons-for-gutenberg")},{value:"h2",label:Object(o.__)("H2","ultimate-addons-for-gutenberg")},{value:"h3",label:Object(o.__)("H3","ultimate-addons-for-gutenberg")},{value:"h4",label:Object(o.__)("H4","ultimate-addons-for-gutenberg")},{value:"h5",label:Object(o.__)("H5","ultimate-addons-for-gutenberg")},{value:"h6",label:Object(o.__)("H6","ultimate-addons-for-gutenberg")}]}),n.a.createElement(b.SelectControl,{label:Object(o.__)("Layout","ultimate-addons-for-gutenberg"),value:y,onChange:function(e){return f({layout:e})},options:[{value:"grid",label:Object(o.__)("Grid","ultimate-addons-for-gutenberg")},{value:"list",label:Object(o.__)("List","ultimate-addons-for-gutenberg")}]}),"grid"===y&&n.a.createElement(u.a,null),"Desktop"===C&&"grid"===y&&n.a.createElement(n.a.Fragment,null,n.a.createElement(b.RangeControl,{label:Object(o.__)("Desktop Columns","ultimate-addons-for-gutenberg"),value:S,onChange:function(e){return f({columns:e})},min:1,max:4})),"Tablet"===C&&"grid"===y&&n.a.createElement(n.a.Fragment,null,n.a.createElement(b.RangeControl,{label:Object(o.__)("Tab Columns","ultimate-addons-for-gutenberg"),value:O,onChange:function(e){return f({tcolumns:e})},min:1,max:3})),"Mobile"===C&&"grid"===y&&n.a.createElement(n.a.Fragment,null,n.a.createElement(b.RangeControl,{label:Object(o.__)("Mobile Columns","ultimate-addons-for-gutenberg"),value:j,onChange:function(e){return f({mcolumns:e})},min:1,max:2})),n.a.createElement("hr",{className:"uagb-editor__separator"}),n.a.createElement(b.SelectControl,{label:Object(o.__)("Post Type","ultimate-addons-for-gutenberg"),value:E,onChange:function(e){return function(e){f({postType:e}),f({categories:""}),f({taxonomyType:""})}(e)},options:uagb_blocks_info.post_types}),""!=p&&n.a.createElement(b.SelectControl,{label:Object(o.__)("Taxonomy","ultimate-addons-for-gutenberg"),value:v,onChange:function(e){return function(e){f({taxonomyType:e}),f({categories:""})}(e)},options:Je}),""==p&&n.a.createElement(b.TextControl,{autoComplete:"off",label:Object(o.__)("Display Message","ultimate-addons-for-gutenberg"),value:q,onChange:function(e){return f({noTaxDisplaytext:e})},help:Object(o.__)("If Taxonomy Not Found","ultimate-addons-for-gutenberg")}),"list"==y&&n.a.createElement(n.a.Fragment,null,n.a.createElement("p",{className:"uagb-setting-label"},Object(o.__)("Display Style","ultimate-addons-for-gutenberg")),n.a.createElement(b.ButtonGroup,{className:"uagb-list-display-style-group"},n.a.createElement(b.Button,{key:"list",label:"List",onClick:function(){return f({listDisplayStyle:"list"})},"aria-pressed":"list"===We,isPrimary:"list"===We},"List"),n.a.createElement(b.Button,{key:"dropdown",label:"Dropdown",onClick:function(){return f({listDisplayStyle:"dropdown"})},"aria-pressed":"dropdown"===We,isPrimary:"dropdown"===We},"Dropdown"))),n.a.createElement(b.ToggleControl,{label:Object(o.__)("Show Empty Taxonomy","ultimate-addons-for-gutenberg"),checked:Pe,onChange:function(){return f({showEmptyTaxonomy:!Pe})},help:Object(o.__)("Show Empty Taxonomy in list ")}),n.a.createElement(b.ToggleControl,{label:Object(o.__)("Show Posts Count","ultimate-addons-for-gutenberg"),checked:$,onChange:function(){return f({showCount:!$})},help:Object(o.__)("Show Count of taxonomy ","ultimate-addons-for-gutenberg")}),"list"==y&&"list"==We&&"post_tag"!==v&&n.a.createElement(b.ToggleControl,{label:Object(o.__)("Show Hierarchy","ultimate-addons-for-gutenberg"),checked:Ae,onChange:function(){return f({showhierarchy:!Ae})},help:Object(o.__)("Show Hierarchy of taxonomy ","ultimate-addons-for-gutenberg")}),"grid"==y&&n.a.createElement(n.a.Fragment,null,n.a.createElement("p",{className:"uagb-setting-label"},Object(o.__)("Alignment","ultimate-addons-for-gutenberg")),n.a.createElement(b.Button,{key:"left",icon:"editor-alignleft",label:"Left",onClick:function(){return f({alignment:"left"})},"aria-pressed":"left"===z,isPrimary:"left"===z}),n.a.createElement(b.Button,{key:"center",icon:"editor-aligncenter",label:"Center",onClick:function(){return f({alignment:"center"})},"aria-pressed":"center"===z,isPrimary:"center"===z}),n.a.createElement(b.Button,{key:"right",icon:"editor-alignright",label:"Right",onClick:function(){return f({alignment:"right"})},"aria-pressed":"right"===z,isPrimary:"right"===z})),"list"==y&&"dropdown"!==We&&n.a.createElement(n.a.Fragment,null,n.a.createElement("p",{className:"uagb-setting-label"},Object(o.__)("List Style","ultimate-addons-for-gutenberg")),n.a.createElement(b.Button,{key:"bullet",icon:"editor-ul",label:"Bullet",onClick:function(){return f({listStyle:"disc"})},"aria-pressed":"disc"===P,isPrimary:"disc"===P}),n.a.createElement(b.Button,{key:"numbers",icon:"editor-ol",label:"Numbers",onClick:function(){return f({listStyle:"decimal"})},"aria-pressed":"decimal"===P,isPrimary:"decimal"===P}),n.a.createElement(b.Button,{key:"none",icon:"menu",label:"None",onClick:function(){return f({listStyle:"none"})},"aria-pressed":"none"===P,isPrimary:"none"===P}))),"dropdown"!==We&&n.a.createElement(n.a.Fragment,null,n.a.createElement(b.PanelBody,{title:Object(o.__)("Color","ultimate-addons-for-gutenberg"),initialOpen:!1},"grid"==y&&n.a.createElement(n.a.Fragment,null,n.a.createElement("p",{className:"uagb-setting-label"},Object(o.__)("Background Color","ultimate-addons-for-gutenberg"),n.a.createElement("span",{className:"components-base-control__label"},n.a.createElement("span",{className:"component-color-indicator",style:{backgroundColor:F}}))),n.a.createElement(g.ColorPalette,{value:F,onChange:function(e){return f({bgColor:e})},allowReset:!0}),n.a.createElement("p",{className:"uagb-setting-label"},Object(o.__)("Title Color","ultimate-addons-for-gutenberg"),n.a.createElement("span",{className:"components-base-control__label"},n.a.createElement("span",{className:"component-color-indicator",style:{backgroundColor:T}}))),n.a.createElement(g.ColorPalette,{value:T,onChange:function(e){return f({titleColor:e})},allowReset:!0}),$&&n.a.createElement(n.a.Fragment,null,n.a.createElement("p",{className:"uagb-setting-label"},Object(o.__)("Count Color","ultimate-addons-for-gutenberg"),n.a.createElement("span",{className:"components-base-control__label"},n.a.createElement("span",{className:"component-color-indicator",style:{backgroundColor:w}}))),n.a.createElement(g.ColorPalette,{value:w,onChange:function(e){return f({countColor:e})},allowReset:!0}))),"list"==y&&n.a.createElement(b.TabPanel,{className:"uagb-inspect-tabs uagb-inspect-tabs-col-2",activeClass:"active-tab",tabs:[{name:"normal",title:Object(o.__)("Normal","ultimate-addons-for-gutenberg"),className:"uagb-normal-tab"},{name:"hover",title:Object(o.__)("Hover","ultimate-addons-for-gutenberg"),className:"uagb-hover-tab"}]},(function(e){var t;return t="normal"===e.name?Ue:Xe,n.a.createElement("div",null,t)}))),n.a.createElement(b.PanelBody,{title:Object(o.__)("Spacing","ultimate-addons-for-gutenberg"),initialOpen:!1},"grid"==y&&n.a.createElement(n.a.Fragment,null,n.a.createElement(b.RangeControl,{label:Object(o.__)("Row Gap","ultimate-addons-for-gutenberg"),value:x,onChange:function(e){return f({rowGap:e})},min:0,max:50,allowReset:!0}),n.a.createElement(b.RangeControl,{label:Object(o.__)("Column Gap","ultimate-addons-for-gutenberg"),value:N,onChange:function(e){return f({columnGap:e})},min:0,max:50,allowReset:!0}),n.a.createElement("hr",{className:"uagb-editor__separator"}),"grid"===y&&n.a.createElement(u.a,null),"Desktop"===C&&"grid"===y&&n.a.createElement(n.a.Fragment,null,n.a.createElement(b.RangeControl,{label:Object(o.__)("Content Padding"),value:H,onChange:function(e){return f({contentPadding:e})},min:10,max:100})),"Tablet"===C&&"grid"===y&&n.a.createElement(n.a.Fragment,null,n.a.createElement(b.RangeControl,{label:Object(o.__)("Content Padding"),value:L,onChange:function(e){return f({contentPaddingTablet:e})},min:0,max:100})),"Mobile"===C&&"grid"===y&&n.a.createElement(n.a.Fragment,null,n.a.createElement(b.RangeControl,{label:Object(o.__)("Content Padding"),value:k,onChange:function(e){return f({contentPaddingMobile:e})},min:0,max:100})),$&&n.a.createElement(n.a.Fragment,null,n.a.createElement("hr",{className:"uagb-editor__separator"}),n.a.createElement(b.RangeControl,{label:Object(o.__)("Title Bottom Spacing","ultimate-addons-for-gutenberg"),value:R,onChange:function(e){return f({titleBottomSpace:e})},min:0,max:50,allowReset:!0}))),"list"==y&&n.a.createElement(b.RangeControl,{label:Object(o.__)("Bottom Margin","ultimate-addons-for-gutenberg"),value:I,onChange:function(e){return f({listBottomMargin:e})},min:0,max:100,allowReset:!0})),n.a.createElement(b.PanelBody,{title:Object(o.__)("Style","ultimate-addons-for-gutenberg"),initialOpen:!1},"grid"==y&&n.a.createElement(n.a.Fragment,null,n.a.createElement("p",{className:"uagb-setting-label"},Object(o.__)("Title ","ultimate-addons-for-gutenberg")),n.a.createElement(s.a,{label:Object(o.__)("Typography","ultimate-addons-for-gutenberg"),attributes:_,setAttributes:f,loadGoogleFonts:{value:be,label:"titleLoadGoogleFonts"},fontFamily:{value:ne,label:"titleFontFamily"},fontWeight:{value:oe,label:"titleFontWeight"},fontSubset:{value:re,label:"titleFontSubset"},fontSizeType:{value:te,label:"titleFontSizeType"},fontSize:{value:ee,label:"titleFontSize"},fontSizeMobile:{value:ae,label:"titleFontSizeMobile"},fontSizeTablet:{value:le,label:"titleFontSizeTablet"},lineHeightType:{value:ie,label:"titleLineHeightType"},lineHeight:{value:ue,label:"titleLineHeight"},lineHeightMobile:{value:ce,label:"titleLineHeightMobile"},lineHeightTablet:{value:se,label:"titleLineHeightTablet"}}),$&&n.a.createElement(n.a.Fragment,null,n.a.createElement("hr",{className:"uagb-editor__separator"}),n.a.createElement("p",{className:"uagb-setting-label"},Object(o.__)("Count ","ultimate-addons-for-gutenberg")),n.a.createElement(s.a,{label:Object(o.__)("Typography","ultimate-addons-for-gutenberg"),attributes:_,setAttributes:f,loadGoogleFonts:{value:Se,label:"countLoadGoogleFonts"},fontFamily:{value:fe,label:"countFontFamily"},fontWeight:{value:pe,label:"countFontWeight"},fontSubset:{value:he,label:"countFontSubset"},fontSizeType:{value:me,label:"countFontSizeType"},fontSize:{value:ge,label:"countFontSize"},fontSizeMobile:{value:de,label:"countFontSizeMobile"},fontSizeTablet:{value:_e,label:"countFontSizeTablet"},lineHeightType:{value:Ce,label:"countLineHeightType"},lineHeight:{value:Ee,label:"countLineHeight"},lineHeightMobile:{value:ye,label:"countLineHeightMobile"},lineHeightTablet:{value:ve,label:"countLineHeightTablet"}})),n.a.createElement("hr",{className:"uagb-editor__separator"}),n.a.createElement(c.a,{setAttributes:f,label:Object(o.__)("Box Shadow","ultimate-addons-for-gutenberg"),boxShadowColor:{value:K,label:Object(o.__)("Color","ultimate-addons-for-gutenberg")},boxShadowHOffset:{value:Q,label:Object(o.__)("Horizontal","ultimate-addons-for-gutenberg")},boxShadowVOffset:{value:U,label:Object(o.__)("Vertical","ultimate-addons-for-gutenberg")},boxShadowBlur:{value:X,label:Object(o.__)("Blur","ultimate-addons-for-gutenberg")},boxShadowSpread:{value:Y,label:Object(o.__)("Spread","ultimate-addons-for-gutenberg")},boxShadowPosition:{value:Z,label:Object(o.__)("Position","ultimate-addons-for-gutenberg")}}),n.a.createElement("hr",{className:"uagb-editor__separator"}),n.a.createElement(b.SelectControl,{label:Object(o.__)("Border Style","ultimate-addons-for-gutenberg"),value:Be,onChange:function(e){return f({borderStyle:e})},options:[{value:"none",label:Object(o.__)("None","ultimate-addons-for-gutenberg")},{value:"solid",label:Object(o.__)("Solid","ultimate-addons-for-gutenberg")},{value:"dotted",label:Object(o.__)("Dotted","ultimate-addons-for-gutenberg")},{value:"dashed",label:Object(o.__)("Dashed","ultimate-addons-for-gutenberg")},{value:"double",label:Object(o.__)("Double","ultimate-addons-for-gutenberg")},{value:"groove",label:Object(o.__)("Groove","ultimate-addons-for-gutenberg")},{value:"inset",label:Object(o.__)("Inset","ultimate-addons-for-gutenberg")},{value:"outset",label:Object(o.__)("Outset","ultimate-addons-for-gutenberg")},{value:"ridge",label:Object(o.__)("Ridge","ultimate-addons-for-gutenberg")}]}),"none"!=Be&&n.a.createElement(n.a.Fragment,null,n.a.createElement(b.RangeControl,{label:Object(o.__)("Border Thickness","ultimate-addons-for-gutenberg"),value:Me,onChange:function(e){return f({borderThickness:e})},min:0,max:10,allowReset:!0}),n.a.createElement(b.RangeControl,{label:Object(o.__)("Rounded Corners (px)","ultimate-addons-for-gutenberg"),value:De,onChange:function(e){f({borderRadius:e})},min:0,max:50,allowReset:!0}),n.a.createElement("p",{className:"uagb-setting-label"},Object(o.__)("Border Color","ultimate-addons-for-gutenberg"),n.a.createElement("span",{className:"components-base-control__label"},n.a.createElement("span",{className:"component-color-indicator",style:{backgroundColor:Ge}}))),n.a.createElement(g.ColorPalette,{value:Ge,onChange:function(e){return f({borderColor:e})},allowReset:!0}))),"list"==y&&n.a.createElement(n.a.Fragment,null,n.a.createElement(b.SelectControl,{label:Object(o.__)("Separator Style","ultimate-addons-for-gutenberg"),value:B,onChange:function(e){return f({seperatorStyle:e})},options:[{value:"none",label:Object(o.__)("None","ultimate-addons-for-gutenberg")},{value:"solid",label:Object(o.__)("Solid","ultimate-addons-for-gutenberg")},{value:"dotted",label:Object(o.__)("Dotted","ultimate-addons-for-gutenberg")},{value:"dashed",label:Object(o.__)("Dashed","ultimate-addons-for-gutenberg")},{value:"double",label:Object(o.__)("Double","ultimate-addons-for-gutenberg")},{value:"groove",label:Object(o.__)("Groove","ultimate-addons-for-gutenberg")},{value:"inset",label:Object(o.__)("Inset","ultimate-addons-for-gutenberg")},{value:"outset",label:Object(o.__)("Outset","ultimate-addons-for-gutenberg")},{value:"ridge",label:Object(o.__)("Ridge","ultimate-addons-for-gutenberg")}]}),"none"!=B&&n.a.createElement(n.a.Fragment,null,n.a.createElement(b.RangeControl,{label:Object(o.__)("Separator Width (%)","ultimate-addons-for-gutenberg"),value:M,onChange:function(e){return f({seperatorWidth:e})},min:0,max:100,allowReset:!0}),n.a.createElement(b.RangeControl,{label:Object(o.__)("Separator Thickness","ultimate-addons-for-gutenberg"),value:G,onChange:function(e){return f({seperatorThickness:e})},min:0,max:20,allowReset:!0}),n.a.createElement(n.a.Fragment,null,n.a.createElement("p",{className:"uagb-setting-label"},Object(o.__)("Separator Color","ultimate-addons-for-gutenberg"),n.a.createElement("span",{className:"components-base-control__label"},n.a.createElement("span",{className:"component-color-indicator",style:{backgroundColor:D}}))),n.a.createElement(g.ColorPalette,{value:D,onChange:function(e){return f({seperatorColor:e})},allowReset:!0}))),n.a.createElement("hr",{className:"uagb-editor__separator"}),n.a.createElement("p",{className:"uagb-setting-label"},Object(o.__)("List ","ultimate-addons-for-gutenberg")),n.a.createElement(s.a,{label:Object(o.__)("Typography","ultimate-addons-for-gutenberg"),attributes:_,setAttributes:f,loadGoogleFonts:{value:ze,label:"listLoadGoogleFonts"},fontFamily:{value:we,label:"listFontFamily"},fontWeight:{value:xe,label:"listFontWeight"},fontSubset:{value:Ne,label:"listFontSubset"},fontSizeType:{value:je,label:"listFontSizeType"},fontSize:{value:Oe,label:"listFontSize"},fontSizeMobile:{value:Fe,label:"listFontSizeMobile"},fontSizeTablet:{value:Te,label:"listFontSizeTablet"},lineHeightType:{value:He,label:"listLineHeightType"},lineHeight:{value:ke,label:"listLineHeight"},lineHeightMobile:{value:Re,label:"listLineHeightMobile"},lineHeightTablet:{value:Le,label:"listLineHeightTablet"}})))));return n.a.createElement(n.a.Fragment,null,n.a.createElement(l.Suspense,{fallback:Object(r.a)()},Ye,t,a,m))};t.default=n.a.memo(m)}}]);