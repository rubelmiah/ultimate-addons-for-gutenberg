(window.webpackJsonp_ultimate_addons_for_gutenberg=window.webpackJsonp_ultimate_addons_for_gutenberg||[]).push([[20],{467:function(e,t,a){"use strict";a.r(t);var l=a(0),n=a.n(l),o=a(10),i=a(50),r=a(17),b=a(1),u=a(7),s=a(4),g=a(34),d=a(16),c=a(11),m=a(35),_=a(18),f=a(2),p=function(e){var t,a=e=e.parentProps,p=a.attributes,h=a.setAttributes,O=(a.deviceType,a.clientId),v=p.align,j=p.gap,z=p.inner_gap,E=p.stack,y=p.icon_layout,T=p.iconPosition,k=p.size,S=p.sizeType,w=p.sizeMobile,H=p.sizeTablet,A=p.hideLabel,B=p.borderRadius,C=p.bgSize,M=p.border,I=p.fontSize,N=p.fontSizeType,F=p.fontSizeMobile,x=p.fontSizeTablet,P=p.fontFamily,L=p.fontWeight,G=p.fontSubset,U=p.lineHeight,V=p.lineHeightType,R=p.lineHeightMobile,W=p.lineHeightTablet,D=p.loadGoogleFonts;if(1==D){var J={google:{families:[P+(L?":"+L:"")]}};t=n.a.createElement(i.a,{config:J})}return n.a.createElement(l.Suspense,{fallback:Object(o.a)()},n.a.createElement(s.BlockControls,null,n.a.createElement(s.BlockAlignmentToolbar,{value:v,onChange:function(e){h({align:e})},controls:["left","center","right"]})),n.a.createElement(s.InspectorControls,null,n.a.createElement(g.a,null,n.a.createElement(d.b,d.a.general,n.a.createElement(f.PanelBody,{initialOpen:!0},n.a.createElement(_.a,{setAttributes:h,label:Object(b.__)("Layout","ultimate-addons-for-gutenberg"),data:{value:y,label:"icon_layout"},className:"uagb-multi-button-alignment-control",options:[{value:"horizontal",label:Object(b.__)("Horizontal","ultimate-addons-for-gutenberg"),tooltip:Object(b.__)("Horizontal","ultimate-addons-for-gutenberg")},{value:"vertical",label:Object(b.__)("Vertical","ultimate-addons-for-gutenberg"),tooltip:Object(b.__)("Vertical","ultimate-addons-for-gutenberg")}],showIcons:!1}),"horizontal"==y&&n.a.createElement(n.a.Fragment,null,n.a.createElement(_.a,{setAttributes:h,label:Object(b.__)("Stack On","ultimate-addons-for-gutenberg"),data:{value:E,label:"stack"},className:"uagb-multi-button-alignment-control",options:[{value:"none",label:Object(b.__)("None","ultimate-addons-for-gutenberg"),tooltip:Object(b.__)("None","ultimate-addons-for-gutenberg")},{value:"desktop",label:Object(b.__)("Desktop","ultimate-addons-for-gutenberg"),tooltip:Object(b.__)("Desktop","ultimate-addons-for-gutenberg")},{value:"tablet",label:Object(b.__)("Tablet","ultimate-addons-for-gutenberg"),tooltip:Object(b.__)("Tablet","ultimate-addons-for-gutenberg")},{value:"mobile",label:Object(b.__)("Mobile","ultimate-addons-for-gutenberg"),tooltip:Object(b.__)("Mobile","ultimate-addons-for-gutenberg")}],showIcons:!1,help:Object(b.__)("Note: Choose on what breakpoint the Icons will stack.","ultimate-addons-for-gutenberg")})),n.a.createElement(f.ToggleControl,{label:Object(b.__)("Hide Labels","ultimate-addons-for-gutenberg"),checked:A,onChange:function(e){return function(e){Object(u.select)("core/block-editor").getBlocks(O).forEach((function(t){t.attributes.hideLabel=e})),h({hideLabel:e})}(e)}}),!A&&n.a.createElement(n.a.Fragment,null,n.a.createElement(_.a,{setAttributes:h,label:Object(b.__)("Icon Alignment","ultimate-addons-for-gutenberg"),data:{value:T,label:"iconPosition"},className:"uagb-multi-button-alignment-control",options:[{value:"top",label:"Top",tooltip:Object(b.__)("Top","ultimate-addons-for-gutenberg")},{value:"middle",label:"Middle",tooltip:Object(b.__)("Middle","ultimate-addons-for-gutenberg")}],showIcons:!1,help:Object(b.__)("Note: This manages the Icon Position with respect to the Label.","ultimate-addons-for-gutenberg")})))),n.a.createElement(d.b,d.a.style,n.a.createElement(f.PanelBody,{title:Object(b.__)("Icon","ultimate-addons-for-gutenberg"),initialOpen:!0},n.a.createElement(m.a,{label:Object(b.__)("Size","ultimate-addons-for-gutenberg"),data:{desktop:{value:k,label:"size"},tablet:{value:H,label:"sizeTablet"},mobile:{value:w,label:"sizeMobile"}},min:0,max:500,unit:{value:S,label:"sizeType"},units:[{name:Object(b.__)("Pixel","ultimate-addons-for-gutenberg"),unitValue:"px"},{name:Object(b.__)("Em","ultimate-addons-for-gutenberg"),unitValue:"em"}],setAttributes:h}),n.a.createElement(c.a,{label:Object(b.__)("Background Size","ultimate-addons-for-gutenberg"),setAttributes:h,value:C,onChange:function(e){return h({bgSize:e})},min:0,max:500,displayUnit:!1,help:Object(b.__)("Note: Background Size option is useful when one adds background color to the icons.","ultimate-addons-for-gutenberg")}),n.a.createElement(c.a,{label:Object(b.__)("Border","ultimate-addons-for-gutenberg"),setAttributes:h,value:M,onChange:function(e){return h({border:e})},min:0,max:10,displayUnit:!1,help:Object(b.__)("Note: Border option is useful when one adds border color to the icons.","ultimate-addons-for-gutenberg")}),n.a.createElement(c.a,{label:Object(b.__)("Border Radius","ultimate-addons-for-gutenberg"),setAttributes:h,value:B,onChange:function(e){return h({borderRadius:e})},min:0,max:500,displayUnit:!1,help:Object(b.__)("Note: Border Radius option is useful when one adds background color to the icons.","ultimate-addons-for-gutenberg")})),n.a.createElement(f.PanelBody,{title:Object(b.__)("Common","ultimate-addons-for-gutenberg"),initialOpen:!1},n.a.createElement(c.a,{label:Object(b.__)("Gap between Items","ultimate-addons-for-gutenberg"),setAttributes:h,value:j,onChange:function(e){return h({gap:e})},min:0,max:100,displayUnit:!1,help:Object(b.__)("Note: For better editing experience, the gap between items might look larger than applied.  Viewing in frontend will show the actual results.","ultimate-addons-for-gutenberg")}),!A&&n.a.createElement(n.a.Fragment,null,n.a.createElement(c.a,{label:Object(b.__)("Gap between Icon and Label","ultimate-addons-for-gutenberg"),setAttributes:h,value:z,onChange:function(e){return h({inner_gap:e})},min:0,max:100,displayUnit:!1}),n.a.createElement(r.a,{label:Object(b.__)("Typography","ultimate-addons-for-gutenberg"),attributes:p,setAttributes:h,loadGoogleFonts:{value:D,label:"loadGoogleFonts"},fontFamily:{value:P,label:"fontFamily"},fontWeight:{value:L,label:"fontWeight"},fontSubset:{value:G,label:"fontSubset"},fontSizeType:{value:N,label:"fontSizeType"},fontSize:{value:I,label:"fontSize"},fontSizeMobile:{value:F,label:"fontSizeMobile"},fontSizeTablet:{value:x,label:"fontSizeTablet"},lineHeightType:{value:V,label:"lineHeightType"},lineHeight:{value:U,label:"lineHeight"},lineHeightMobile:{value:R,label:"lineHeightMobile"},lineHeightTablet:{value:W,label:"lineHeightTablet"}})))),n.a.createElement(d.b,d.a.advance))),t)};t.default=n.a.memo(p)}}]);