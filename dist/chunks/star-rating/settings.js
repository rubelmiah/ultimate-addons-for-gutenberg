(window.webpackJsonp_ultimate_addons_for_gutenberg=window.webpackJsonp_ultimate_addons_for_gutenberg||[]).push([[93],{568:function(e,t,a){"use strict";a.r(t);var l=a(23),n=a(74),o=a(2),i=a(5),r=a(6),u=a(52),b=a(21),c=a(14),g=a(13),f=a(19),s=a(12),m=a(1),d=a.n(m);function _(){return(_=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var l in a)Object.prototype.hasOwnProperty.call(a,l)&&(e[l]=a[l])}return e}).apply(this,arguments)}var v=function(e){var t,a=e=e.parentProps,m=a.attributes,v=a.setAttributes,p=a.attributes,h=p.rating,O=p.range,j=p.layout,E=p.align,y=p.size,C=p.gap,S=p.unmarkedColor,z=p.color,T=p.title,H=p.loadGoogleFonts,A=p.fontFamily,I=p.fontWeight,k=p.fontSubset,w=p.fontSizeType,G=p.fontSize,F=p.fontSizeMobile,M=p.fontSizeTablet,P=p.lineHeightType,U=p.lineHeight,x=p.lineHeightMobile,B=p.lineHeightTablet,V=p.titleColor,W=p.titleGap;if(!0===H){var J={google:{families:[A+(I?":"+I:"")]}};t=d.a.createElement(n.a,{config:J})}var R=[{value:"left",icon:d.a.createElement(r.Icon,{icon:Object(s.a)("fa fa-align-left")})},{value:"center",icon:d.a.createElement(r.Icon,{icon:Object(s.a)("fa fa-align-center")})},{value:"right",icon:d.a.createElement(r.Icon,{icon:Object(s.a)("fa fa-align-right")})},{value:"full",icon:d.a.createElement(r.Icon,{icon:Object(s.a)("fa fa-align-justify")})}];"stack"===j&&(R=[{value:"left",icon:d.a.createElement(r.Icon,{icon:Object(s.a)("fa fa-align-left")})},{value:"center",icon:d.a.createElement(r.Icon,{icon:Object(s.a)("fa fa-align-center")})},{value:"right",icon:d.a.createElement(r.Icon,{icon:Object(s.a)("fa fa-align-right")})}],"full"===E&&v({align:"left"}));var L=d.a.createElement(r.PanelBody,{title:Object(o.__)("General","ultimate-addons-for-gutenberg")},d.a.createElement(f.a,{setAttributes:v,label:Object(o.__)("Range","ultimate-addons-for-gutenberg"),data:{value:O,label:"range"},options:[{value:"5",label:Object(o.__)("1-5","ultimate-addons-for-gutenberg")},{value:"10",label:Object(o.__)("1-10","ultimate-addons-for-gutenberg")}]}),d.a.createElement(g.a,{label:Object(o.__)("Rating","ultimate-addons-for-gutenberg"),setAttributes:v,value:h,onChange:function(e){return v({rating:e})},min:0,max:O,step:.1,displayUnit:!1}),d.a.createElement(f.a,{setAttributes:v,label:Object(o.__)("Layout","ultimate-addons-for-gutenberg"),data:{value:j,label:"layout"},options:[{value:"inline",label:Object(o.__)("Inline","ultimate-addons-for-gutenberg")},{value:"stack",label:Object(o.__)("Stack","ultimate-addons-for-gutenberg")}]}),d.a.createElement(f.a,{setAttributes:v,label:Object(o.__)("Alignment","ultimate-addons-for-gutenberg"),data:{value:E,label:"align"},options:R,showIcons:!0})),q=d.a.createElement(r.PanelBody,{title:Object(o.__)("Title","ultimate-addons-for-gutenberg"),initialOpen:!1},d.a.createElement(c.a,{label:Object(o.__)("Color","ultimate-addons-for-gutenberg"),colorValue:V,onColorChange:function(e){return v({titleColor:e})}}),d.a.createElement(l.a,{label:Object(o.__)("Typography","ultimate-addons-for-gutenberg"),attributes:m,setAttributes:v,loadGoogleFonts:{value:H,label:"loadGoogleFonts"},fontFamily:{value:A,label:"fontFamily"},fontWeight:{value:I,label:"fontWeight"},fontSubset:{value:k,label:"fontSubset"},fontSizeType:{value:w,label:"fontSizeType"},fontSize:{value:G,label:"fontSize"},fontSizeMobile:{value:F,label:"fontSizeMobile"},fontSizeTablet:{value:M,label:"fontSizeTablet"},lineHeightType:{value:P,label:"lineHeightType"},lineHeight:{value:U,label:"lineHeight"},lineHeightMobile:{value:x,label:"lineHeightMobile"},lineHeightTablet:{value:B,label:"lineHeightTablet"}}),d.a.createElement(g.a,{label:Object(o.__)("Gap","ultimate-addons-for-gutenberg"),setAttributes:v,value:W,onChange:function(e){return v({titleGap:e})},min:0,max:50,displayUnit:!1})),D=d.a.createElement(r.PanelBody,{title:Object(o.__)("Star","ultimate-addons-for-gutenberg"),initialOpen:!0},d.a.createElement(c.a,{label:Object(o.__)("Color","ultimate-addons-for-gutenberg"),colorValue:z,onColorChange:function(e){return v({color:e})}}),d.a.createElement(c.a,{label:Object(o.__)("Unmarked Color","ultimate-addons-for-gutenberg"),colorValue:S,onColorChange:function(e){return v({unmarkedColor:e})}}),d.a.createElement(g.a,{label:Object(o.__)("Size","ultimate-addons-for-gutenberg"),setAttributes:v,value:y,onChange:function(e){return v({size:e})},min:0,max:100,displayUnit:!1}),d.a.createElement(g.a,{label:Object(o.__)("Gap","ultimate-addons-for-gutenberg"),setAttributes:v,value:C,onChange:function(e){return v({gap:e})},min:0,max:50,displayUnit:!1}));return d.a.createElement(d.a.Fragment,null,d.a.createElement(i.InspectorControls,null,d.a.createElement(u.a,{tabs:["general","style","advance"]},d.a.createElement(b.b,b.a.general,L),d.a.createElement(b.b,b.a.style,D,""!==T&&q),d.a.createElement(b.b,_({},b.a.advance,{parentProps:e})))),t)};t.default=d.a.memo(v)}}]);