(window.webpackJsonp_ultimate_addons_for_gutenberg=window.webpackJsonp_ultimate_addons_for_gutenberg||[]).push([[57],{538:function(e,t,a){"use strict";a.r(t);var n=a(1),l=a.n(n),o=a(10),i=a(51),r=a(18),u=(a(105),a(2)),s=a(5),b=a(4);function c(e){return function(e){if(Array.isArray(e))return g(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return g(e,void 0);var a=Object.prototype.toString.call(e).slice(8,-1);return"Object"===a&&e.constructor&&(a=e.constructor.name),"Map"===a||"Set"===a?Array.from(e):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?g(e,void 0):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function g(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}$=jQuery;var m=[{value:"thumbnail",label:Object(u.__)("Thumbnail","ultimate-addons-for-gutenberg")},{value:"medium",label:Object(u.__)("Medium","ultimate-addons-for-gutenberg")},{value:"full",label:Object(u.__)("Large","ultimate-addons-for-gutenberg")}],d=function(e){var t,a,g=e=e.parentProps,d=g.attributes,h=g.setAttributes,f=g.attributes,_=f.overallAlignment,p=f.showEstcost,v=f.showTotaltime,H=f.showMaterials,S=f.showTools,T=f.showTotaltimecolor,E=f.tools_count,y=f.material_count,F=f.tools,C=f.materials,O=f.mainimage,j=f.imgSize,w=f.headingColor,z=f.subHeadingColor,M=f.headingTag,L=f.headFontFamily,N=f.headFontWeight,R=f.headFontSubset,I=f.headFontSizeType,k=f.headFontSize,A=f.headFontSizeMobile,x=f.headFontSizeTablet,G=f.headLineHeightType,W=f.headLineHeight,P=f.headLineHeightMobile,B=f.headLineHeightTablet,D=f.subHeadFontFamily,Y=f.subHeadFontWeight,q=f.subHeadFontSubset,J=f.subHeadFontSize,U=f.subHeadFontSizeType,Q=f.subHeadFontSizeMobile,K=f.subHeadFontSizeTablet,V=f.subHeadLineHeight,X=f.subHeadLineHeightType,Z=f.subHeadLineHeightMobile,ee=f.subHeadLineHeightTablet,te=f.headLoadGoogleFonts,ae=f.subHeadLoadGoogleFonts,ne=f.priceFontSizeType,le=f.priceFontSize,oe=f.priceFontSizeTablet,ie=f.priceFontSizeMobile,re=f.priceFontFamily,ue=f.priceFontWeight,se=f.priceFontSubset,be=f.priceLineHeightType,ce=f.priceLineHeight,ge=f.priceLineHeightTablet,me=f.priceLineHeightMobile,de=f.priceLoadGoogleFonts,he=f.timeSpace,fe=f.costSpace,_e=f.row_gap,pe=f.step_gap,ve=f.timeInHours,He=f.timeInDays,Se=f.timeInMonths,Te=f.timeInYears,Ee=f.timeInMins,ye=f.time;O&&O.sizes&&(t=O.sizes,a=[],$.each(t,(function(e){var t={value:e,label:e};a.push(t)})),m=a);var Fe,Ce,Oe,je=Ee||ye;if(!0===te){var we={google:{families:[L+(N?":"+N:"")]}};Fe=l.a.createElement(i.a,{config:we})}if(!0===ae){var ze={google:{families:[D+(Y?":"+Y:"")]}};Ce=l.a.createElement(i.a,{config:ze})}if(!0===de){var Me={google:{families:[re+(ue?":"+ue:"")]}};Oe=l.a.createElement(i.a,{config:Me})}return l.a.createElement(n.Suspense,{fallback:Object(o.a)()},l.a.createElement(s.BlockControls,{key:"index"},l.a.createElement(s.AlignmentToolbar,{value:_,onChange:function(e){return h({overallAlignment:e})}})),l.a.createElement(s.InspectorControls,null,l.a.createElement(b.PanelBody,{title:Object(u.__)("General","ultimate-addons-for-gutenberg"),initialOpen:!0},l.a.createElement("h2",null,Object(u.__)("Image","ultimate-addons-for-gutenberg")),l.a.createElement(s.MediaUpload,{title:Object(u.__)("Select Image","ultimate-addons-for-gutenberg"),onSelect:function(e){return h({mainimage:e})},allowedTypes:["image"],value:O,render:function(e){var t=e.open;return l.a.createElement(b.Button,{isSecondary:!0,onClick:t},O.url?Object(u.__)("Replace image","ultimate-addons-for-gutenberg"):Object(u.__)("Select Image","ultimate-addons-for-gutenberg"))}}),O.url&&l.a.createElement(b.Button,{className:"uagb-rm-btn",onClick:function(){return h({mainimage:""})},isLink:!0,isDestructive:!0},Object(u.__)("Remove Image","ultimate-addons-for-gutenberg")),O.url&&l.a.createElement(b.SelectControl,{label:Object(u.__)("Size","ultimate-addons-for-gutenberg"),options:m,value:j,onChange:function(e){return h({imgSize:e})}}),l.a.createElement(b.SelectControl,{label:Object(u.__)("Tag"),value:M,onChange:function(e){return h({headingTag:e})},options:[{value:"h1",label:Object(u.__)("H1","ultimate-addons-for-gutenberg")},{value:"h2",label:Object(u.__)("H2","ultimate-addons-for-gutenberg")},{value:"h3",label:Object(u.__)("H3","ultimate-addons-for-gutenberg")},{value:"h4",label:Object(u.__)("H4","ultimate-addons-for-gutenberg")},{value:"h5",label:Object(u.__)("H5","ultimate-addons-for-gutenberg")},{value:"h6",label:Object(u.__)("H6","ultimate-addons-for-gutenberg")}]}),l.a.createElement("hr",{className:"uagb-editor__separator"}),l.a.createElement(b.ToggleControl,{label:Object(u.__)("Show Total Time","ultimate-addons-for-gutenberg"),checked:v,onChange:function(){return h({showTotaltime:!v})},help:Object(u.__)("Note: Time is recommended field for schema. It should be ON","ultimate-addons-for-gutenberg")}),v&&l.a.createElement(b.PanelBody,{title:Object(u.__)("Time","ultimate-addons-for-gutenberg"),initialOpen:!0,className:"uagb-editor-howto-timepanel"},l.a.createElement(l.a.Fragment,null,l.a.createElement(b.RangeControl,{label:Object(u.__)("Years","ultimate-addons-for-gutenberg"),value:Te,onChange:function(e){return h({timeInYears:e})},min:1,max:10,allowReset:!0}),l.a.createElement(b.RangeControl,{label:Object(u.__)("Months","ultimate-addons-for-gutenberg"),value:Se,onChange:function(e){return h({timeInMonths:e})},min:1,max:12,allowReset:!0}),l.a.createElement(b.RangeControl,{label:Object(u.__)("Days","ultimate-addons-for-gutenberg"),value:He,onChange:function(e){return h({timeInDays:e})},min:1,max:31,allowReset:!0}),l.a.createElement(b.RangeControl,{label:Object(u.__)("Hours","ultimate-addons-for-gutenberg"),value:ve,onChange:function(e){return h({timeInHours:e})},min:1,max:24,allowReset:!0}),l.a.createElement(b.RangeControl,{label:Object(u.__)("Minutes","ultimate-addons-for-gutenberg"),value:je,onChange:function(e){return h({timeInMins:e})},min:1,max:60,allowReset:!0}))),l.a.createElement("hr",{className:"uagb-editor__separator"}),l.a.createElement(b.ToggleControl,{label:Object(u.__)("Show Estimated Cost","ultimate-addons-for-gutenberg"),checked:p,onChange:function(){return h({showEstcost:!p})},help:Object(u.__)("Note: Cost is recommended field for schema.It should be ON","ultimate-addons-for-gutenberg")}),l.a.createElement(b.ExternalLink,{href:"https://en.wikipedia.org/wiki/List_of_circulating_currencies"},Object(u.__)("Click here to find your countrys ISO code.","ultimate-addons-for-gutenberg")),l.a.createElement("hr",{className:"uagb-editor__separator"}),l.a.createElement(b.ToggleControl,{label:Object(u.__)("Show Tools","ultimate-addons-for-gutenberg"),checked:S,onChange:function(){return h({showTools:!S})},help:Object(u.__)("Note: This is recommended field for schema.It should be ON","ultimate-addons-for-gutenberg")}),S&&l.a.createElement(b.RangeControl,{label:Object(u.__)("Number of Tools","ultimate-addons-for-gutenberg"),value:E,onChange:function(e){var t=c(F);if(t.length<e){for(var a=Math.abs(e-t.length),n=0;n<a;n++)t.push({add_required_tools:"- A Computer"+(t.length+1)});h({tools:t})}else{for(var l=Math.abs(e-t.length),o=t,i=0;i<l;i++)o.pop();h({tools:o})}h({tools_count:e})},min:1,max:50}),l.a.createElement("hr",{className:"uagb-editor__separator"}),l.a.createElement(b.ToggleControl,{label:Object(u.__)("Show Materials","ultimate-addons-for-gutenberg"),checked:H,onChange:function(){return h({showMaterials:!H})},help:Object(u.__)("Note: This is recommended field for schema.It should be ON","ultimate-addons-for-gutenberg")}),H&&l.a.createElement(b.RangeControl,{label:Object(u.__)("Number of Materials","ultimate-addons-for-gutenberg"),value:y,onChange:function(e){var t=c(C);if(t.length<e){for(var a=Math.abs(e-t.length),n=0;n<a;n++)t.push({add_required_materials:"- A WordPress Website"+(t.length+1)});h({materials:t})}else{for(var l=Math.abs(e-t.length),o=t,i=0;i<l;i++)o.pop();h({materials:o})}h({material_count:e})},min:1,max:50})),l.a.createElement(b.PanelBody,{title:Object(u.__)("Style","ultimate-addons-for-gutenberg"),initialOpen:!1},l.a.createElement("h2",null,Object(u.__)("Colors")),l.a.createElement("p",{className:"uagb-setting-label"},Object(u.__)("Heading","ultimate-addons-for-gutenberg"),l.a.createElement("span",{className:"components-base-control__label"},l.a.createElement("span",{className:"component-color-indicator",style:{backgroundColor:w}}))),l.a.createElement(s.ColorPalette,{value:w,onChange:function(e){return h({headingColor:e})},allowReset:!0}),l.a.createElement("p",{className:"uagb-setting-label"},Object(u.__)("Secondary Heading","ultimate-addons-for-gutenberg"),l.a.createElement("span",{className:"components-base-control__label"},l.a.createElement("span",{className:"component-color-indicator",style:{backgroundColor:T}}))),l.a.createElement(s.ColorPalette,{value:T,onChange:function(e){return h({showTotaltimecolor:e})},allowReset:!0}),l.a.createElement("p",{className:"uagb-setting-label"},Object(u.__)("Description","ultimate-addons-for-gutenberg"),l.a.createElement("span",{className:"components-base-control__label"},l.a.createElement("span",{className:"component-color-indicator",style:{backgroundColor:z}}))),l.a.createElement(s.ColorPalette,{value:z,onChange:function(e){return h({subHeadingColor:e})},allowReset:!0}),l.a.createElement("hr",{className:"uagb-editor__separator"}),l.a.createElement("h2",null,Object(u.__)("Typography","ultimate-addons-for-gutenberg")),l.a.createElement(r.a,{label:Object(u.__)("Heading","ultimate-addons-for-gutenberg"),attributes:d,setAttributes:h,loadGoogleFonts:{value:te,label:"headLoadGoogleFonts"},fontFamily:{value:L,label:"headFontFamily"},fontWeight:{value:N,label:"headFontWeight"},fontSubset:{value:R,label:"headFontSubset"},fontSizeType:{value:I,label:"headFontSizeType"},fontSize:{value:k,label:"headFontSize"},fontSizeMobile:{value:A,label:"headFontSizeMobile"},fontSizeTablet:{value:x,label:"headFontSizeTablet"},lineHeightType:{value:G,label:"headLineHeightType"},lineHeight:{value:W,label:"headLineHeight"},lineHeightMobile:{value:P,label:"headLineHeightMobile"},lineHeightTablet:{value:B,label:"headLineHeightTablet"}}),l.a.createElement(r.a,{label:Object(u.__)("Secondary Heading","ultimate-addons-for-gutenberg"),attributes:d,setAttributes:h,loadGoogleFonts:{value:de,label:"priceLoadGoogleFonts"},fontFamily:{value:re,label:"priceFontFamily"},fontWeight:{value:ue,label:"priceFontWeight"},fontSubset:{value:se,label:"priceFontSubset"},fontSizeType:{value:ne,label:"priceFontSizeType"},fontSize:{value:le,label:"priceFontSize"},fontSizeMobile:{value:ie,label:"priceFontSizeMobile"},fontSizeTablet:{value:oe,label:"priceFontSizeTablet"},lineHeightType:{value:be,label:"priceLineHeightType"},lineHeight:{value:ce,label:"priceLineHeight"},lineHeightMobile:{value:me,label:"priceLineHeightMobile"},lineHeightTablet:{value:ge,label:"priceLineHeightTablet"}}),l.a.createElement(r.a,{label:Object(u.__)("Description","ultimate-addons-for-gutenberg"),attributes:d,setAttributes:h,loadGoogleFonts:{value:ae,label:"subHeadLoadGoogleFonts"},fontFamily:{value:D,label:"subHeadFontFamily"},fontWeight:{value:Y,label:"subHeadFontWeight"},fontSubset:{value:q,label:"subHeadFontSubset"},fontSizeType:{value:U,label:"subHeadFontSizeType"},fontSize:{value:J,label:"subHeadFontSize"},fontSizeMobile:{value:Q,label:"subHeadFontSizeMobile"},fontSizeTablet:{value:K,label:"subHeadFontSizeTablet"},lineHeightType:{value:X,label:"subHeadLineHeightType"},lineHeight:{value:V,label:"subHeadLineHeight"},lineHeightMobile:{value:Z,label:"subHeadLineHeightMobile"},lineHeightTablet:{value:ee,label:"subHeadLineHeightTablet"}}),l.a.createElement("hr",{className:"uagb-editor__separator"}),l.a.createElement("h2",null,Object(u.__)("Spacing","ultimate-addons-for-gutenberg")),v&&l.a.createElement(b.RangeControl,{label:Object(u.__)("Time Margin","ultimate-addons-for-gutenberg"),value:he,onChange:function(e){return h({timeSpace:e})},min:0,max:50,allowReset:!0}),p&&l.a.createElement(b.RangeControl,{label:Object(u.__)("Cost Margin","ultimate-addons-for-gutenberg"),value:fe,onChange:function(e){return h({costSpace:e})},min:0,max:50,allowReset:!0}),l.a.createElement(b.RangeControl,{label:Object(u.__)("Row Gap","ultimate-addons-for-gutenberg"),value:_e,onChange:function(e){return h({row_gap:e})},min:0,max:500,allowReset:!0}),l.a.createElement(b.RangeControl,{label:Object(u.__)("Gap Between Steps","ultimate-addons-for-gutenberg"),value:pe,onChange:function(e){return h({step_gap:e})},min:0,max:500,allowReset:!0}))),Fe,Ce,Oe)};t.default=l.a.memo(d)}}]);