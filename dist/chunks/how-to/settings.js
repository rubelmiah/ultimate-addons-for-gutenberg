(window.webpackJsonp_ultimate_addons_for_gutenberg=window.webpackJsonp_ultimate_addons_for_gutenberg||[]).push([[57],{543:function(e,t,a){"use strict";a.r(t);var n=a(1),l=a.n(n),o=a(11),i=a(74),r=a(22),u=a(23),b=a.n(u),s=(a(111),a(2)),g=a(5),d=a(14),c=a(52),m=a(20),h=a(13),f=a(75),p=a(6),_=a(18);function v(){return(v=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function y(e){return function(e){if(Array.isArray(e))return H(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return H(e,void 0);var a=Object.prototype.toString.call(e).slice(8,-1);return"Object"===a&&e.constructor&&(a=e.constructor.name),"Map"===a||"Set"===a?Array.from(e):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?H(e,void 0):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function H(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}var O=[{value:"thumbnail",label:Object(s.__)("Thumbnail","ultimate-addons-for-gutenberg")},{value:"medium",label:Object(s.__)("Medium","ultimate-addons-for-gutenberg")},{value:"full",label:Object(s.__)("Large","ultimate-addons-for-gutenberg")}],S=function(e){var t,a,u=e=e.parentProps,H=u.attributes,S=u.setAttributes,T=u.attributes,F=T.overallAlignment,j=T.showEstcost,E=T.showTotaltime,C=T.showMaterials,z=T.showTools,M=T.showTotaltimecolor,L=T.tools_count,w=T.material_count,A=T.tools,I=T.materials,k=T.mainimage,P=T.imgSize,x=T.headingColor,B=T.subHeadingColor,U=T.headingTag,G=T.headFontFamily,W=T.headFontWeight,N=T.headFontSubset,D=T.headFontSizeType,V=T.headFontSize,Y=T.headFontSizeMobile,q=T.headFontSizeTablet,J=T.headLineHeightType,R=T.headLineHeight,$=T.headLineHeightMobile,K=T.headLineHeightTablet,Q=T.subHeadFontFamily,X=T.subHeadFontWeight,Z=T.subHeadFontSubset,ee=T.subHeadFontSize,te=T.subHeadFontSizeType,ae=T.subHeadFontSizeMobile,ne=T.subHeadFontSizeTablet,le=T.subHeadLineHeight,oe=T.subHeadLineHeightType,ie=T.subHeadLineHeightMobile,re=T.subHeadLineHeightTablet,ue=T.headLoadGoogleFonts,be=T.subHeadLoadGoogleFonts,se=T.priceFontSizeType,ge=T.priceFontSize,de=T.priceFontSizeTablet,ce=T.priceFontSizeMobile,me=T.priceFontFamily,he=T.priceFontWeight,fe=T.priceFontSubset,pe=T.priceLineHeightType,_e=T.priceLineHeight,ve=T.priceLineHeightTablet,ye=T.priceLineHeightMobile,He=T.priceLoadGoogleFonts,Oe=T.timeSpace,Se=T.costSpace,Te=T.row_gap,Fe=T.step_gap,je=T.timeInHours,Ee=T.timeInDays,Ce=T.timeInMonths,ze=T.timeInYears,Me=T.timeInMins,Le=T.time;k&&k.sizes&&(t=k.sizes,a=[],b.a.each(t,(function(e){var t={value:e,label:e};a.push(t)})),O=a);var we,Ae,Ie,ke=Me||Le;if(!0===ue){var Pe={google:{families:[G+(W?":"+W:"")]}};we=l.a.createElement(i.a,{config:Pe})}if(!0===be){var xe={google:{families:[Q+(X?":"+X:"")]}};Ae=l.a.createElement(i.a,{config:xe})}if(!0===He){var Be={google:{families:[me+(he?":"+he:"")]}};Ie=l.a.createElement(i.a,{config:Be})}return l.a.createElement(n.Suspense,{fallback:Object(o.a)()},l.a.createElement(g.BlockControls,{key:"index"},l.a.createElement(g.AlignmentToolbar,{value:F,onChange:function(e){return S({overallAlignment:e})}})),l.a.createElement(g.InspectorControls,null,l.a.createElement(c.a,null,l.a.createElement(m.b,m.a.general,l.a.createElement(p.PanelBody,{title:Object(s.__)("Title","ultimate-addons-for-gutenberg"),initialOpen:!0},l.a.createElement(_.a,{setAttributes:S,label:Object(s.__)("Tag","ultimate-addons-for-gutenberg"),data:{value:U,label:"headingTag"},options:[{value:"h1",label:Object(s.__)("H1","ultimate-addons-for-gutenberg")},{value:"h2",label:Object(s.__)("H2","ultimate-addons-for-gutenberg")},{value:"h3",label:Object(s.__)("H3","ultimate-addons-for-gutenberg")},{value:"h4",label:Object(s.__)("H4","ultimate-addons-for-gutenberg")},{value:"h5",label:Object(s.__)("H5","ultimate-addons-for-gutenberg")},{value:"h6",label:Object(s.__)("H6","ultimate-addons-for-gutenberg")}]})),l.a.createElement(p.PanelBody,{title:Object(s.__)("Image","ultimate-addons-for-gutenberg"),initialOpen:!1},l.a.createElement(f.a,{onSelectImage:function(e){e&&e.url&&e.type&&"image"===e.type?S({mainimage:e}):S({mainimage:null})},backgroundImage:k,onRemoveImage:function(){S({mainimage:""})}}),k&&"null"!==k.url&&""!==k.url&&l.a.createElement(p.SelectControl,{label:Object(s.__)("Image Size","ultimate-addons-for-gutenberg"),options:O,value:P,onChange:function(e){return S({imgSize:e})}})),l.a.createElement(p.PanelBody,{title:Object(s.__)("Time","ultimate-addons-for-gutenberg"),initialOpen:!1},l.a.createElement(p.ToggleControl,{label:Object(s.__)("Show Total Time","ultimate-addons-for-gutenberg"),checked:E,onChange:function(){return S({showTotaltime:!E})},help:Object(s.__)("Note: Time is recommended field for schema. It should be ON","ultimate-addons-for-gutenberg")}),E&&l.a.createElement(l.a.Fragment,null,l.a.createElement(h.a,{label:Object(s.__)("Years","ultimate-addons-for-gutenberg"),setAttributes:S,value:ze,onChange:function(e){return S({timeInYears:e})},min:1,max:10,displayUnit:!1}),l.a.createElement(h.a,{label:Object(s.__)("Months","ultimate-addons-for-gutenberg"),setAttributes:S,value:Ce,onChange:function(e){return S({timeInMonths:e})},min:1,max:12,displayUnit:!1}),l.a.createElement(h.a,{label:Object(s.__)("Days","ultimate-addons-for-gutenberg"),setAttributes:S,value:Ee,onChange:function(e){return S({timeInDays:e})},min:1,max:31,displayUnit:!1}),l.a.createElement(h.a,{label:Object(s.__)("Hours","ultimate-addons-for-gutenberg"),setAttributes:S,value:je,onChange:function(e){return S({timeInHours:e})},min:1,max:24,displayUnit:!1}),l.a.createElement(h.a,{label:Object(s.__)("Minutes","ultimate-addons-for-gutenberg"),setAttributes:S,value:ke,onChange:function(e){return S({timeInMins:e})},min:1,max:60,displayUnit:!1}))),l.a.createElement(p.PanelBody,{title:Object(s.__)("Cost","ultimate-addons-for-gutenberg"),initialOpen:!1},l.a.createElement(p.ToggleControl,{label:Object(s.__)("Show Estimated Cost","ultimate-addons-for-gutenberg"),checked:j,onChange:function(){return S({showEstcost:!j})},help:Object(s.__)("Note: Cost is recommended field for schema.It should be ON","ultimate-addons-for-gutenberg")}),l.a.createElement(p.ExternalLink,{href:"https://en.wikipedia.org/wiki/List_of_circulating_currencies"},Object(s.__)("Click here to find your countrys ISO code.","ultimate-addons-for-gutenberg"))),l.a.createElement(p.PanelBody,{title:Object(s.__)("Tools","ultimate-addons-for-gutenberg"),initialOpen:!1},l.a.createElement(p.ToggleControl,{label:Object(s.__)("Show Tools","ultimate-addons-for-gutenberg"),checked:z,onChange:function(){return S({showTools:!z})},help:Object(s.__)("Note: This is recommended field for schema.It should be ON","ultimate-addons-for-gutenberg")}),z&&l.a.createElement(h.a,{label:Object(s.__)("Number of Tools","ultimate-addons-for-gutenberg"),setAttributes:S,value:L,onChange:function(e){var t=y(A);if(t.length<e){for(var a=Math.abs(e-t.length),n=0;n<a;n++)t.push({add_required_tools:"- A Computer"+(t.length+1)});S({tools:t})}else{for(var l=Math.abs(e-t.length),o=t,i=0;i<l;i++)o.pop();S({tools:o})}S({tools_count:e})},min:1,max:50,displayUnit:!1})),l.a.createElement(p.PanelBody,{title:Object(s.__)("Materials","ultimate-addons-for-gutenberg"),initialOpen:!1},l.a.createElement(p.ToggleControl,{label:Object(s.__)("Show Materials","ultimate-addons-for-gutenberg"),checked:C,onChange:function(){return S({showMaterials:!C})},help:Object(s.__)("Note: This is recommended field for schema.It should be ON","ultimate-addons-for-gutenberg")}),C&&l.a.createElement(h.a,{label:Object(s.__)("Number of Materials","ultimate-addons-for-gutenberg"),setAttributes:S,value:w,onChange:function(e){var t=y(I);if(t.length<e){for(var a=Math.abs(e-t.length),n=0;n<a;n++)t.push({add_required_materials:"- A WordPress Website"+(t.length+1)});S({materials:t})}else{for(var l=Math.abs(e-t.length),o=t,i=0;i<l;i++)o.pop();S({materials:o})}S({material_count:e})},min:1,max:50,displayUnit:!1}))),l.a.createElement(m.b,m.a.style,l.a.createElement(p.PanelBody,{title:Object(s.__)("Heading","ultimate-addons-for-gutenberg"),initialOpen:!0},l.a.createElement(d.a,{label:Object(s.__)("Color","ultimate-addons-for-gutenberg"),colorValue:x||"",onColorChange:function(e){return S({headingColor:e})}}),l.a.createElement(r.a,{label:Object(s.__)("Typography","ultimate-addons-for-gutenberg"),attributes:H,setAttributes:S,loadGoogleFonts:{value:ue,label:"headLoadGoogleFonts"},fontFamily:{value:G,label:"headFontFamily"},fontWeight:{value:W,label:"headFontWeight"},fontSubset:{value:N,label:"headFontSubset"},fontSizeType:{value:D,label:"headFontSizeType"},fontSize:{value:V,label:"headFontSize"},fontSizeMobile:{value:Y,label:"headFontSizeMobile"},fontSizeTablet:{value:q,label:"headFontSizeTablet"},lineHeightType:{value:J,label:"headLineHeightType"},lineHeight:{value:R,label:"headLineHeight"},lineHeightMobile:{value:$,label:"headLineHeightMobile"},lineHeightTablet:{value:K,label:"headLineHeightTablet"}})),l.a.createElement(p.PanelBody,{title:Object(s.__)("Secondary Heading","ultimate-addons-for-gutenberg"),initialOpen:!1},l.a.createElement(d.a,{label:Object(s.__)("Color","ultimate-addons-for-gutenberg"),colorValue:M||"",onColorChange:function(e){return S({showTotaltimecolor:e})}}),l.a.createElement(r.a,{label:Object(s.__)("Typography","ultimate-addons-for-gutenberg"),attributes:H,setAttributes:S,loadGoogleFonts:{value:He,label:"priceLoadGoogleFonts"},fontFamily:{value:me,label:"priceFontFamily"},fontWeight:{value:he,label:"priceFontWeight"},fontSubset:{value:fe,label:"priceFontSubset"},fontSizeType:{value:se,label:"priceFontSizeType"},fontSize:{value:ge,label:"priceFontSize"},fontSizeMobile:{value:ce,label:"priceFontSizeMobile"},fontSizeTablet:{value:de,label:"priceFontSizeTablet"},lineHeightType:{value:pe,label:"priceLineHeightType"},lineHeight:{value:_e,label:"priceLineHeight"},lineHeightMobile:{value:ye,label:"priceLineHeightMobile"},lineHeightTablet:{value:ve,label:"priceLineHeightTablet"}})),l.a.createElement(p.PanelBody,{title:Object(s.__)("Description","ultimate-addons-for-gutenberg"),initialOpen:!1},l.a.createElement(d.a,{label:Object(s.__)("Color","ultimate-addons-for-gutenberg"),colorValue:B||"",onColorChange:function(e){return S({subHeadingColor:e})}}),l.a.createElement(r.a,{label:Object(s.__)("Typography","ultimate-addons-for-gutenberg"),attributes:H,setAttributes:S,loadGoogleFonts:{value:be,label:"subHeadLoadGoogleFonts"},fontFamily:{value:Q,label:"subHeadFontFamily"},fontWeight:{value:X,label:"subHeadFontWeight"},fontSubset:{value:Z,label:"subHeadFontSubset"},fontSizeType:{value:te,label:"subHeadFontSizeType"},fontSize:{value:ee,label:"subHeadFontSize"},fontSizeMobile:{value:ae,label:"subHeadFontSizeMobile"},fontSizeTablet:{value:ne,label:"subHeadFontSizeTablet"},lineHeightType:{value:oe,label:"subHeadLineHeightType"},lineHeight:{value:le,label:"subHeadLineHeight"},lineHeightMobile:{value:ie,label:"subHeadLineHeightMobile"},lineHeightTablet:{value:re,label:"subHeadLineHeightTablet"}})),l.a.createElement(p.PanelBody,{title:Object(s.__)("Spacing","ultimate-addons-for-gutenberg"),initialOpen:!1},E&&l.a.createElement(h.a,{label:Object(s.__)("Time Margin","ultimate-addons-for-gutenberg"),setAttributes:S,value:Oe,onChange:function(e){return S({timeSpace:e})},min:0,max:50,displayUnit:!1}),j&&l.a.createElement(h.a,{label:Object(s.__)("Cost Margin","ultimate-addons-for-gutenberg"),setAttributes:S,value:Se,onChange:function(e){return S({costSpace:e})},min:0,max:50,displayUnit:!1}),l.a.createElement(h.a,{label:Object(s.__)("Row Gap","ultimate-addons-for-gutenberg"),setAttributes:S,value:Te,onChange:function(e){return S({row_gap:e})},min:0,max:500,displayUnit:!1}),l.a.createElement(h.a,{label:Object(s.__)("Gap Between Steps","ultimate-addons-for-gutenberg"),setAttributes:S,value:Fe,onChange:function(e){return S({step_gap:e})},min:0,max:500,displayUnit:!1}))),l.a.createElement(m.b,v({},m.a.advance,{parentProps:e})))),we,Ae,Ie)};t.default=l.a.memo(S)}}]);