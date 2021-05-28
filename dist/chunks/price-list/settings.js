(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{383:function(e,t,l){"use strict";l.r(t);var a=l(2),n=l.n(a),o=l(10),i=l(4),r=l(0),c=l(12),b=l(6),u=l(5),s=Object(a.lazy)((function(){return Promise.resolve().then(l.bind(null,13))})),g=Object(a.lazy)((function(){return Promise.resolve().then(l.bind(null,14))})),m=Object(a.lazy)((function(){return Promise.resolve().then(l.bind(null,18))})),_=function(e){var t,l,_,h=e=e.parentProps,p=h.setAttributes,d=h.attributes,v=h.deviceType,f=d.menu_item_count,S=d.titleSpace,E=d.imgHrPadding,O=d.imgVrPadding,F=d.columns,j=d.tcolumns,C=d.mcolumns,T=d.rowGap,y=d.columnGap,H=d.contentHrPadding,z=d.contentVrPadding,L=d.priceColor,P=d.descColor,k=d.titleColor,M=d.seperatorStyle,w=d.seperatorWidth,R=d.seperatorThickness,G=d.seperatorColor,N=d.priceLoadGoogleFonts,x=d.titleLoadGoogleFonts,W=d.descLoadGoogleFonts,B=d.titleFontSizeType,I=d.titleFontSize,A=d.titleFontSizeTablet,V=d.titleFontSizeMobile,D=d.titleFontFamily,J=d.titleFontWeight,q=d.titleFontSubset,K=d.titleLineHeightType,Q=d.titleLineHeight,U=d.titleLineHeightTablet,X=d.titleLineHeightMobile,Y=d.priceFontSizeType,Z=d.priceFontSize,$=d.priceFontSizeTablet,ee=d.priceFontSizeMobile,te=d.priceFontFamily,le=d.priceFontWeight,ae=d.priceFontSubset,ne=d.priceLineHeightType,oe=d.priceLineHeight,ie=d.priceLineHeightTablet,re=d.priceLineHeightMobile,ce=d.descFontSizeType,be=d.descFontSize,ue=d.descFontSizeTablet,se=d.descFontSizeMobile,ge=d.descFontFamily,me=d.descFontWeight,_e=d.descFontSubset,he=d.descLineHeightType,pe=d.descLineHeight,de=d.descLineHeightTablet,ve=d.descLineHeightMobile,fe=d.headingTag,Se=d.imagePosition,Ee=d.imageAlignment,Oe=d.imageSize,Fe=d.imageWidth,je=d.stack,Ce=function(t){Object(c.select)("core/block-editor").getBlocks(e.clientId).forEach((function(e,l){e.attributes.imagePosition=t})),p({imagePosition:t})};if(1==x){var Te={google:{families:[D+(J?":"+J:"")]}};t=n.a.createElement(g,{config:Te})}if(1==W){var ye={google:{families:[ge+(me?":"+me:"")]}};l=n.a.createElement(g,{config:ye})}if(1==N){var He={google:{families:[te+(le?":"+le:"")]}};_=n.a.createElement(g,{config:He})}var ze=[{value:"thumbnail",label:Object(r.__)("Thumbnail")},{value:"medium",label:Object(r.__)("Medium")},{value:"full",label:Object(r.__)("Large")}],Le=n.a.createElement(u.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},n.a.createElement(u.Path,{d:"M9 20h6V9H9v11zM4 4v1.5h16V4H4z"}));return n.a.createElement(n.a.Fragment,null,n.a.createElement(b.InspectorControls,null,n.a.createElement(u.PanelBody,{title:Object(r.__)("General"),initialOpen:!0},n.a.createElement(m,null),"Desktop"===v&&n.a.createElement(n.a.Fragment,null,n.a.createElement(u.RangeControl,{label:Object(r.__)("Columns"),value:F,onChange:function(t){Object(c.select)("core/block-editor").getBlocks(e.clientId).forEach((function(e,l){e.attributes.columns=t})),p({columns:t})},min:1,max:Math.min(3,f)})),"Tablet"===v&&n.a.createElement(n.a.Fragment,null,n.a.createElement(u.RangeControl,{label:Object(r.__)("Columns"),value:j,onChange:function(e){return p({tcolumns:e})},min:1,max:Math.min(3,f)})),"Mobile"===v&&n.a.createElement(n.a.Fragment,null,n.a.createElement(u.RangeControl,{label:Object(r.__)("Columns"),value:C,onChange:function(e){return p({mcolumns:e})},min:1,max:Math.min(3,f)})),n.a.createElement("hr",{className:"uagb-editor__separator"}),n.a.createElement(n.a.Fragment,null,n.a.createElement("h2",null,n.a.createElement("strong",null,Object(r.__)("Image Settings"))),n.a.createElement("h2",null," ",Object(r.__)("Image Position")),n.a.createElement(u.ButtonGroup,{className:"uagb-editor_imgpos_group"},n.a.createElement(u.Button,{key:"left",icon:"editor-alignleft",label:"Left",onClick:function(){return Ce("left")},"aria-pressed":"left"===Se,isPrimary:"left"===Se}),n.a.createElement(u.Button,{key:"top",icon:Le,label:"Top",onClick:function(){return Ce("top")},"aria-pressed":"top"===Se,isPrimary:"top"===Se}),n.a.createElement(u.Button,{key:"right",icon:"editor-alignright",label:"Right",onClick:function(){return Ce("right")},"aria-pressed":"right"===Se,isPrimary:"right"===Se})),("left"==Se||"right"==Se)&&n.a.createElement(n.a.Fragment,null,n.a.createElement(u.SelectControl,{label:Object(r.__)("Vertical Alignment"),value:Ee,onChange:function(t){Object(c.select)("core/block-editor").getBlocks(e.clientId).forEach((function(e,l){e.attributes.imageAlignment=t})),p({imageAlignment:t})},options:[{value:"top",label:Object(r.__)("Top")},{value:"middle",label:Object(r.__)("Middle")}]}),n.a.createElement(u.SelectControl,{label:Object(r.__)("Stack on"),value:je,options:[{value:"none",label:Object(r.__)("None")},{value:"tablet",label:Object(r.__)("Tablet")},{value:"mobile",label:Object(r.__)("Mobile")}],help:Object(r.__)("Note: Choose on what breakpoint the Images will stack."),onChange:function(e){return p({stack:e})}})),n.a.createElement(u.SelectControl,{label:Object(r.__)("Image Size"),options:ze,value:Oe,onChange:function(t){Object(c.select)("core/block-editor").getBlocks(e.clientId).forEach((function(e,l){e.attributes.imageSize=t})),p({imageSize:t})}}),n.a.createElement(u.RangeControl,{label:Object(r.__)("Width"),value:Fe,onChange:function(e){return p({imageWidth:e})},min:0,max:500,allowReset:!0})),n.a.createElement("hr",{className:"uagb-editor__separator"}),n.a.createElement(n.a.Fragment,null,n.a.createElement("h2",null,n.a.createElement("strong",null,"Separator Settings")),n.a.createElement(u.SelectControl,{label:Object(r.__)("Separator Style"),value:M,onChange:function(e){return p({seperatorStyle:e})},options:[{value:"none",label:Object(r.__)("None")},{value:"solid",label:Object(r.__)("Solid")},{value:"dotted",label:Object(r.__)("Dotted")},{value:"dashed",label:Object(r.__)("Dashed")},{value:"double",label:Object(r.__)("Double")},{value:"groove",label:Object(r.__)("Groove")},{value:"inset",label:Object(r.__)("Inset")},{value:"outset",label:Object(r.__)("Outset")},{value:"ridge",label:Object(r.__)("Ridge")}]}),"none"!=M&&n.a.createElement(n.a.Fragment,null,n.a.createElement(u.RangeControl,{label:Object(r.__)("Separator Width (%)"),value:w,onChange:function(e){return p({seperatorWidth:e})},min:0,max:100,allowReset:!0}),n.a.createElement(u.RangeControl,{label:Object(r.__)("Separator Thickness"),value:R,onChange:function(e){return p({seperatorThickness:e})},min:0,max:20,allowReset:!0}),n.a.createElement(n.a.Fragment,null,n.a.createElement("p",{className:"uagb-setting-label"},Object(r.__)("Separator Color"),n.a.createElement("span",{className:"components-base-control__label"},n.a.createElement("span",{className:"component-color-indicator",style:{backgroundColor:G}}))),n.a.createElement(b.ColorPalette,{value:G,onChange:function(e){return p({seperatorColor:e})},allowReset:!0}))))),n.a.createElement(u.PanelBody,{title:Object(r.__)("Spacing"),initialOpen:!1},n.a.createElement(u.RangeControl,{label:Object(r.__)("Row Gap"),value:T,onChange:function(e){return p({rowGap:e})},min:0,max:50,allowReset:!0}),n.a.createElement(u.RangeControl,{label:Object(r.__)("Column Gap"),value:y,onChange:function(e){return p({columnGap:e})},min:0,max:50,allowReset:!0}),n.a.createElement(u.RangeControl,{label:Object(r.__)("Title Bottom Margin"),value:S,onChange:function(e){return p({titleSpace:e})},min:0,max:50,allowReset:!0}),n.a.createElement("hr",{className:"uagb-editor__separator"}),n.a.createElement("h2",null,Object(r.__)("Item Padding (px)")),n.a.createElement(u.RangeControl,{label:i.a.vertical_spacing,className:"uagb-margin-control",value:z,onChange:function(e){return p({contentVrPadding:e})},min:0,max:50,allowReset:!0}),n.a.createElement(u.RangeControl,{label:i.a.horizontal_spacing,className:"uagb-margin-control",value:H,onChange:function(e){return p({contentHrPadding:e})},min:0,max:50,allowReset:!0}),n.a.createElement(n.a.Fragment,null,n.a.createElement("hr",{className:"uagb-editor__separator"}),n.a.createElement("h2",null,Object(r.__)("Image Padding (px)")),n.a.createElement(u.RangeControl,{label:i.a.vertical_spacing,className:"uagb-margin-control",value:O,onChange:function(e){return p({imgVrPadding:e})},min:0,max:50,allowReset:!0}),n.a.createElement(u.RangeControl,{label:i.a.horizontal_spacing,className:"uagb-margin-control",value:E,onChange:function(e){return p({imgHrPadding:e})},min:0,max:50,allowReset:!0}))),n.a.createElement(b.PanelColorSettings,{title:Object(r.__)("Color Settings"),initialOpen:!1,colorSettings:[{value:k,onChange:function(e){return p({titleColor:e})},label:Object(r.__)("Title Color")},{value:P,onChange:function(e){return p({descColor:e})},label:Object(r.__)("Content Color")},{value:L,onChange:function(e){return p({priceColor:e})},label:Object(r.__)("Price Color")}]}),n.a.createElement(u.PanelBody,{title:Object(r.__)("Typography"),initialOpen:!1},n.a.createElement("h2",null,Object(r.__)("Title")),n.a.createElement(u.SelectControl,{label:Object(r.__)("Title Tag"),value:fe,onChange:function(t){Object(c.select)("core/block-editor").getBlocks(e.clientId).forEach((function(e,l){e.attributes.headingTag=t})),p({headingTag:t})},options:[{value:"h1",label:Object(r.__)("H1")},{value:"h2",label:Object(r.__)("H2")},{value:"h3",label:Object(r.__)("H3")},{value:"h4",label:Object(r.__)("H4")},{value:"h5",label:Object(r.__)("H5")},{value:"h6",label:Object(r.__)("H6")},{value:"p",label:Object(r.__)("P")},{value:"span",label:Object(r.__)("SPAN")}]}),n.a.createElement(a.Suspense,{fallback:Object(o.a)()},n.a.createElement(s,{label:Object(r.__)("Typography"),attributes:d,setAttributes:p,loadGoogleFonts:{value:x,label:"titleLoadGoogleFonts"},fontFamily:{value:D,label:"titleFontFamily"},fontWeight:{value:J,label:"titleFontWeight"},fontSubset:{value:q,label:"titleFontSubset"},fontSizeType:{value:B,label:"titleFontSizeType"},fontSize:{value:I,label:"titleFontSize"},fontSizeMobile:{value:V,label:"titleFontSizeMobile"},fontSizeTablet:{value:A,label:"titleFontSizeTablet"},lineHeightType:{value:K,label:"titleLineHeightType"},lineHeight:{value:Q,label:"titleLineHeight"},lineHeightMobile:{value:X,label:"titleLineHeightMobile"},lineHeightTablet:{value:U,label:"titleLineHeightTablet"}}),n.a.createElement("hr",{className:"uagb-editor__separator"}),n.a.createElement("h2",null,Object(r.__)("Content")),n.a.createElement(s,{label:Object(r.__)("Typography"),attributes:d,setAttributes:p,loadGoogleFonts:{value:W,label:"descLoadGoogleFonts"},fontFamily:{value:ge,label:"descFontFamily"},fontWeight:{value:me,label:"descFontWeight"},fontSubset:{value:_e,label:"descFontSubset"},fontSizeType:{value:ce,label:"descFontSizeType"},fontSize:{value:be,label:"descFontSize"},fontSizeMobile:{value:se,label:"descFontSizeMobile"},fontSizeTablet:{value:ue,label:"descFontSizeTablet"},lineHeightType:{value:he,label:"descLineHeightType"},lineHeight:{value:pe,label:"descLineHeight"},lineHeightMobile:{value:ve,label:"descLineHeightMobile"},lineHeightTablet:{value:de,label:"descLineHeightTablet"}}),n.a.createElement("hr",{className:"uagb-editor__separator"}),n.a.createElement("h2",null,Object(r.__)("Price")),n.a.createElement(s,{label:Object(r.__)("Typography"),attributes:d,setAttributes:p,loadGoogleFonts:{value:N,label:"priceLoadGoogleFonts"},fontFamily:{value:te,label:"priceFontFamily"},fontWeight:{value:le,label:"priceFontWeight"},fontSubset:{value:ae,label:"priceFontSubset"},fontSizeType:{value:Y,label:"priceFontSizeType"},fontSize:{value:Z,label:"priceFontSize"},fontSizeMobile:{value:ee,label:"priceFontSizeMobile"},fontSizeTablet:{value:$,label:"priceFontSizeTablet"},lineHeightType:{value:ne,label:"priceLineHeightType"},lineHeight:{value:oe,label:"priceLineHeight"},lineHeightMobile:{value:re,label:"priceLineHeightMobile"},lineHeightTablet:{value:ie,label:"priceLineHeightTablet"}})))),n.a.createElement(a.Suspense,{fallback:Object(o.a)()},t,l,_))};t.default=n.a.memo(_)}}]);