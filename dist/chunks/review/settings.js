(window.webpackJsonp_ultimate_addons_for_gutenberg=window.webpackJsonp_ultimate_addons_for_gutenberg||[]).push([[85],{548:function(e,t,a){"use strict";a.r(t),a.d(t,"removeFromArray",(function(){return y}));var n=a(23),l=a(74),o=a(2),r=a(1),i=a.n(r),u=a(11),b=a(5),d=a(14),c=a(52),g=a(21),m=a(75),s=a(33),f=a(19),h=a(18),_=a.n(h),p=a(6);function v(){return(v=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function O(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}var C=[{value:"thumbnail",label:Object(o.__)("Thumbnail","ultimate-addons-for-gutenberg")},{value:"medium",label:Object(o.__)("Medium","ultimate-addons-for-gutenberg")},{value:"full",label:Object(o.__)("Large","ultimate-addons-for-gutenberg")}],y=function(e,t){return e.filter((function(e){return Array.isArray(t)?!t.includes(e):e!==t}))},T=function(e){var t,a,h,y=e=e.parentProps,T=y.attributes,S=y.setAttributes,j=T.enableSchema,E=T.itemType,F=T.itemSubtype,H=T.sku,P=T.identifier,A=T.identifierType,L=T.offerType,w=T.offerCurrency,k=T.offerStatus,z=T.offerPrice,M=T.offerExpiry,B=T.datepublish,I=T.ctaLink,R=T.ctaTarget,x=T.brand,D=T.headingTag,N=T.mainimage,G=T.imgSize,V=T.showFeature,U=T.showAuthor,W=T.starColor,J=T.descColor,K=T.titleColor,$=T.contentColor,q=T.headFontFamily,Q=T.headFontWeight,X=T.headFontSubset,Y=T.headFontSizeType,Z=T.headFontSize,ee=T.headFontSizeMobile,te=T.headFontSizeTablet,ae=T.headLineHeightType,ne=T.headLineHeight,le=T.headLineHeightMobile,oe=T.headLineHeightTablet,re=T.headLoadGoogleFonts,ie=T.subHeadFontFamily,ue=T.subHeadFontWeight,be=T.subHeadFontSubset,de=T.subHeadFontSize,ce=T.subHeadFontSizeType,ge=T.subHeadFontSizeMobile,me=T.subHeadFontSizeTablet,se=T.subHeadLineHeight,fe=T.subHeadLineHeightType,he=T.subHeadLineHeightMobile,_e=T.subHeadLineHeightTablet,pe=T.subHeadLoadGoogleFonts,ve=T.contentLoadGoogleFonts,Oe=T.contentFontFamily,Ce=T.contentFontWeight,ye=T.contentFontSubset,Te=T.contentFontSizeType,Se=T.contentLineHeightType,je=T.contentFontSize,Ee=T.contentFontSizeTablet,Fe=T.contentFontSizeMobile,He=T.contentLineHeight,Pe=T.contentLineHeightTablet,Ae=T.contentLineHeightMobile,Le=T.topPadding,we=T.bottomPadding,ke=T.rightPadding,ze=T.leftPadding,Me=T.paddingTopMobile,Be=T.paddingBottomMobile,Ie=T.paddingRightMobile,Re=T.paddingLeftMobile,xe=T.paddingTopTablet,De=T.paddingBottomTablet,Ne=T.paddingRightTablet,Ge=T.paddingLeftTablet,Ve=T.spacingLink,Ue=T.paddingUnit,We=T.mobilePaddingUnit,Je=T.tabletPaddingUnit,Ke=T.authorColor,$e=T.summaryColor,qe=T.starActiveColor,Qe=T.starOutlineColor,Xe=T.enableDescription,Ye=T.enableImage,Ze=T.overallAlignment,et=T.isbn,tt=T.bookAuthorName,at=T.reviewPublisher,nt=T.provider,lt=T.appCategory,ot=T.operatingSystem,rt=T.datecreated,it=T.directorname;if(!0===re){var ut={google:{families:[q+(Q?":"+Q:"")]}};a=i.a.createElement(l.a,{config:ut})}if(!0===pe){var bt={google:{families:[ie+(ue?":"+ue:"")]}};h=i.a.createElement(l.a,{config:bt})}if(!0===ve){var dt={google:{families:[Oe+(Ce?":"+Ce:"")]}};t=i.a.createElement(l.a,{config:dt})}var ct,gt,mt,st={Book:[{value:"Audiobook",label:Object(o.__)("Audio book","ultimate-addons-for-gutenberg")}],Product:[{value:"IndividualProduct",label:Object(o.__)("Individual Product","ultimate-addons-for-gutenberg")},{value:"ProductCollection",label:Object(o.__)("Product Collection","ultimate-addons-for-gutenberg")},{value:"ProductGroup",label:Object(o.__)("Product Group","ultimate-addons-for-gutenberg")},{value:"ProductModel",label:Object(o.__)("Product Model","ultimate-addons-for-gutenberg")},{value:"SomeProducts",label:Object(o.__)("Some Products","ultimate-addons-for-gutenberg")},{value:"Vehicle",label:Object(o.__)("Vehicle","ultimate-addons-for-gutenberg")}],SoftwareApplication:[{value:"MobileApplication",label:Object(o.__)("Mobile Application","ultimate-addons-for-gutenberg")},{value:"VideoGame",label:Object(o.__)("Video Game","ultimate-addons-for-gutenberg")},{value:"WebApplication",label:Object(o.__)("Web Application","ultimate-addons-for-gutenberg")}]};switch(E){default:break;case"Book":ct=i.a.createElement(i.a.Fragment,null,i.a.createElement(p.TextControl,{label:Object(o.__)("ISBN","ultimate-addons-for-gutenberg"),value:et,onChange:function(e){return S({isbn:e})},help:Object(o.__)("Note: This is a mandatory field for the Review schema","ultimate-addons-for-gutenberg")}),i.a.createElement(p.TextControl,{label:Object(o.__)("Book author name","ultimate-addons-for-gutenberg"),value:tt,onChange:function(e){return S({bookAuthorName:e})},help:Object(o.__)("Note: This is a mandatory field for the Review schema","ultimate-addons-for-gutenberg")}));break;case"Course":ct=i.a.createElement(i.a.Fragment,null,i.a.createElement(p.TextControl,{label:Object(o.__)("Provider","ultimate-addons-for-gutenberg"),value:nt,onChange:function(e){return S({provider:e})}}));break;case"SoftwareApplication":ct=i.a.createElement(i.a.Fragment,null,i.a.createElement(p.TextControl,{label:Object(o.__)("Application Category","ultimate-addons-for-gutenberg"),value:lt,onChange:function(e){return S({appCategory:e})}}),i.a.createElement(p.TextControl,{label:Object(o.__)("Operating System","ultimate-addons-for-gutenberg"),value:ot,onChange:function(e){return S({operatingSystem:e})}}));break;case"Movie":ct=i.a.createElement(i.a.Fragment,null,i.a.createElement(p.TextControl,{label:Object(o.__)("Director Name","ultimate-addons-for-gutenberg"),value:it,onChange:function(e){return S({directorname:e})}}),i.a.createElement("h2",null,Object(o.__)("Date of create")),i.a.createElement(p.DateTimePicker,{currentDate:rt,onChange:function(e){return S({datecreated:e})},is12Hour:!0}))}return i.a.createElement(r.Suspense,{fallback:Object(u.a)()},i.a.createElement(b.BlockControls,{key:"index"},i.a.createElement(b.AlignmentToolbar,{value:Ze,onChange:function(e){return S({overallAlignment:e})}})),i.a.createElement(b.InspectorControls,null,i.a.createElement(c.a,null,i.a.createElement(g.b,g.a.general,(N&&N.sizes&&(gt=N.sizes,mt=[],_.a.each(gt,(function(e){var t={value:e,label:e};mt.push(t)})),C=mt),i.a.createElement(p.PanelBody,{title:Object(o.__)("General","ultimate-addons-for-gutenberg"),initialOpen:!0},i.a.createElement(f.a,{setAttributes:S,label:Object(o.__)("Review Title Tag","ultimate-addons-for-gutenberg"),data:{value:D,label:"headingTag"},options:[{value:"h1",label:Object(o.__)("H1","ultimate-addons-for-gutenberg")},{value:"h2",label:Object(o.__)("H2","ultimate-addons-for-gutenberg")},{value:"h3",label:Object(o.__)("H3","ultimate-addons-for-gutenberg")},{value:"h4",label:Object(o.__)("H4","ultimate-addons-for-gutenberg")},{value:"h5",label:Object(o.__)("H5","ultimate-addons-for-gutenberg")},{value:"h6",label:Object(o.__)("H6","ultimate-addons-for-gutenberg")}]}),i.a.createElement(p.ToggleControl,{label:Object(o.__)("Enable Schema Support","ultimate-addons-for-gutenberg"),checked:j,onChange:function(){return S({enableSchema:!j})}}),i.a.createElement(p.ToggleControl,{label:Object(o.__)("Show Review Description","ultimate-addons-for-gutenberg"),checked:Xe,onChange:function(){return S({enableDescription:!Xe})},help:Object(o.__)("Note: This is a mandatory field for the Review schema.","ultimate-addons-for-gutenberg")}),i.a.createElement(p.ToggleControl,{label:Object(o.__)("Show Review Author","ultimate-addons-for-gutenberg"),checked:U,onChange:function(){return S({showAuthor:!U})},help:Object(o.__)("Note: This is a mandatory field for the Review schema.","ultimate-addons-for-gutenberg")}),i.a.createElement(p.ToggleControl,{label:Object(o.__)("Show Ratings","ultimate-addons-for-gutenberg"),checked:V,onChange:function(){return S({showFeature:!V})},help:Object(o.__)("Note: Add feature/section ratings separately.","ultimate-addons-for-gutenberg")}),i.a.createElement(p.ToggleControl,{label:Object(o.__)("Show Review Image","ultimate-addons-for-gutenberg"),checked:Ye,onChange:function(){return S({enableImage:!Ye})},help:Object(o.__)("Note: This is a mandatory field for the Review schema.","ultimate-addons-for-gutenberg")}),i.a.createElement("h2",null,Object(o.__)("Link")),i.a.createElement(p.TextControl,{value:I,onChange:function(e){return S({ctaLink:e})}}),i.a.createElement(p.ToggleControl,{label:Object(o.__)("Open in new window","ultimate-addons-for-gutenberg"),checked:R,onChange:function(){S({ctaTarget:!R})}}))),!0===Ye&&i.a.createElement(p.PanelBody,{title:Object(o.__)("Image","ultimate-addons-for-gutenberg"),initialOpen:!1},i.a.createElement(i.a.Fragment,null,i.a.createElement(m.a,{onSelectImage:function(e){e&&e.url&&e.type&&"image"===e.type?S({mainimage:e}):S({mainimage:null})},backgroundImage:N,onRemoveImage:function(){S({mainimage:""})}}),N&&"null"!==N&&"null"!==N.url&&""!==N.url&&i.a.createElement(p.SelectControl,{label:Object(o.__)("Size","ultimate-addons-for-gutenberg"),options:C,value:G,onChange:function(e){return S({imgSize:e})}}))),function(){if(!0===j)return i.a.createElement(p.PanelBody,{title:Object(o.__)("Schema","ultimate-addons-for-gutenberg"),initialOpen:!1},i.a.createElement(p.SelectControl,{label:Object(o.__)("Item Type","ultimate-addons-for-gutenberg"),value:E,onChange:function(e){S({itemType:e}),"Movie"===E&&S({enableImage:!0}),"Course"===E&&S({enableDescription:!0}),st.hasOwnProperty(E)&&st[E].includes(F)||S({itemSubtype:"None"})},options:[{value:"Book",label:Object(o.__)("Book","ultimate-addons-for-gutenberg")},{value:"Course",label:Object(o.__)("Course","ultimate-addons-for-gutenberg")},{value:"Movie",label:Object(o.__)("Movie","ultimate-addons-for-gutenberg")},{value:"Product",label:Object(o.__)("Product","ultimate-addons-for-gutenberg")},{value:"SoftwareApplication",label:Object(o.__)("Software Application","ultimate-addons-for-gutenberg")}]}),st.hasOwnProperty(E)&&i.a.createElement(p.SelectControl,{label:Object(o.__)("Item Subtype","ultimate-addons-for-gutenberg"),options:[{value:"none",label:Object(o.__)("None","ultimate-addons-for-gutenberg")}].concat((t=st[E],function(e){if(Array.isArray(e))return O(e)}(t)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(t)||function(e,t){if(e){if("string"==typeof e)return O(e,void 0);var a=Object.prototype.toString.call(e).slice(8,-1);return"Object"===a&&e.constructor&&(a=e.constructor.name),"Map"===a||"Set"===a?Array.from(e):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?O(e,void 0):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}())),value:F,onChange:function(e){return S({itemSubtype:e})}}),ct,i.a.createElement(p.TextControl,{label:Object(o.__)("Review Publisher","ultimate-addons-for-gutenberg"),value:at,onChange:function(e){return S({reviewPublisher:e})},help:Object(o.__)("Note: This is a mandatory field for the Review schema","ultimate-addons-for-gutenberg")}),i.a.createElement("h2",null,Object(o.__)("Date Of Publish","ultimate-addons-for-gutenberg")),i.a.createElement(p.DateTimePicker,{className:"uagb-date-picker",currentDate:B,onChange:function(e){return S({datepublish:e})},is12Hour:!0}),["Product","SoftwareApplication"].includes(E)&&i.a.createElement(i.a.Fragment,null,["Product"].includes(E)&&i.a.createElement(i.a.Fragment,null,i.a.createElement(p.TextControl,{label:Object(o.__)("Brand","ultimate-addons-for-gutenberg"),value:x,onChange:function(e){return S({brand:e})}}),i.a.createElement(p.TextControl,{label:Object(o.__)("SKU","ultimate-addons-for-gutenberg"),value:H,onChange:function(e){return S({sku:e})}}),i.a.createElement(p.TextControl,{label:Object(o.__)("Identifier","ultimate-addons-for-gutenberg"),value:P,onChange:function(e){return S({identifier:e})}}),i.a.createElement(p.SelectControl,{label:Object(o.__)("Identifier Type","ultimate-addons-for-gutenberg"),value:A,options:["nsn","mpn","gtin8","gtin12","gtin13","gtin14","gtin"].map((function(e){return{label:Object(o.__)(e.toUpperCase()),value:e}})),onChange:function(e){return S({identifierType:e})}})),["Product","SoftwareApplication"].includes(E)&&i.a.createElement(i.a.Fragment,null,i.a.createElement(p.TextControl,{label:Object(o.__)("Offer Currency","ultimate-addons-for-gutenberg"),value:w,onChange:function(e){return S({offerCurrency:e})}})),"Offer"===L&&i.a.createElement(i.a.Fragment,null,i.a.createElement(p.TextControl,{label:Object(o.__)("Offer Price","ultimate-addons-for-gutenberg"),value:z,onChange:function(e){return S({offerPrice:e})},help:Object(o.__)("Note: This is a mandatory field for the Review schema","ultimate-addons-for-gutenberg")}),i.a.createElement(p.SelectControl,{label:Object(o.__)("Offer Status"),value:k,options:[{value:"https://schema.org/Discontinued",label:Object(o.__)("Discontinued","ultimate-addons-for-gutenberg")},{value:"https://schema.org/InStock",label:Object(o.__)("In Stock","ultimate-addons-for-gutenberg")},{value:"https://schema.org/InStoreOnly",label:Object(o.__)("In Store Only","ultimate-addons-for-gutenberg")},{value:"https://schema.org/LimitedAvailability",label:Object(o.__)("Limited Availability","ultimate-addons-for-gutenberg")},{value:"https://schema.org/OnlineOnly",label:Object(o.__)("Online Only","ultimate-addons-for-gutenberg")},{value:"https://schema.org/OutOfStock",label:Object(o.__)("Out Of Stock","ultimate-addons-for-gutenberg")},{value:"https://schema.org/PreOrder",label:Object(o.__)("Pre Order","ultimate-addons-for-gutenberg")},{value:"https://schema.org/PreSale",label:Object(o.__)("Pre Sale","ultimate-addons-for-gutenberg")},{value:"https://schema.org/SoldOut",label:Object(o.__)("Sold Out","ultimate-addons-for-gutenberg")}],onChange:function(t){return e.setAttributes({offerStatus:t})}}),i.a.createElement("h2",null,Object(o.__)("Price Valid Until","ultimate-addons-for-gutenberg")),i.a.createElement(p.DateTimePicker,{className:"uagb-date-picker",currentDate:M,onChange:function(e){return S({offerExpiry:e})},is12Hour:!0}))));var t}()),i.a.createElement(g.b,g.a.style,i.a.createElement(p.PanelBody,{title:Object(o.__)("Title","ultimate-addons-for-gutenberg"),initialOpen:!0},i.a.createElement(d.a,{label:Object(o.__)("Color","ultimate-addons-for-gutenberg"),colorValue:K,onColorChange:function(e){return S({titleColor:e})}}),i.a.createElement(n.a,{label:Object(o.__)("Typography","ultimate-addons-for-gutenberg"),attributes:e.attributes,setAttributes:S,loadGoogleFonts:{value:re,label:"headLoadGoogleFonts"},fontFamily:{value:q,label:"headFontFamily"},fontWeight:{value:Q,label:"headFontWeight"},fontSubset:{value:X,label:"headFontSubset"},fontSizeType:{value:Y,label:"headFontSizeType"},fontSize:{value:Z,label:"headFontSize"},fontSizeMobile:{value:ee,label:"headFontSizeMobile"},fontSizeTablet:{value:te,label:"headFontSizeTablet"},lineHeightType:{value:ae,label:"headLineHeightType"},lineHeight:{value:ne,label:"headLineHeight"},lineHeightMobile:{value:le,label:"headLineHeightMobile"},lineHeightTablet:{value:oe,label:"headLineHeightTablet"}})),Xe&&i.a.createElement(p.PanelBody,{title:Object(o.__)("Description","ultimate-addons-for-gutenberg"),initialOpen:!1},!0===Xe&&i.a.createElement(i.a.Fragment,null,i.a.createElement(d.a,{label:Object(o.__)("Color","ultimate-addons-for-gutenberg"),colorValue:J,onColorChange:function(e){return S({descColor:e})}}),i.a.createElement(n.a,{label:Object(o.__)("Typography","ultimate-addons-for-gutenberg"),attributes:e.attributes,setAttributes:S,loadGoogleFonts:{value:pe,label:"subHeadLoadGoogleFonts"},fontFamily:{value:ie,label:"subHeadFontFamily"},fontWeight:{value:ue,label:"subHeadFontWeight"},fontSubset:{value:be,label:"subHeadFontSubset"},fontSizeType:{value:ce,label:"subHeadFontSizeType"},fontSize:{value:de,label:"subHeadFontSize"},fontSizeMobile:{value:ge,label:"subHeadFontSizeMobile"},fontSizeTablet:{value:me,label:"subHeadFontSizeTablet"},lineHeightType:{value:fe,label:"subHeadLineHeightType"},lineHeight:{value:se,label:"subHeadLineHeight"},lineHeightMobile:{value:he,label:"subHeadLineHeightMobile"},lineHeightTablet:{value:_e,label:"subHeadLineHeightTablet"}}))),!0===U&&i.a.createElement(p.PanelBody,{title:Object(o.__)("Author","ultimate-addons-for-gutenberg"),initialOpen:!1},i.a.createElement(i.a.Fragment,null,i.a.createElement(d.a,{label:Object(o.__)("Color","ultimate-addons-for-gutenberg"),colorValue:Ke,onColorChange:function(e){return S({authorColor:e})}}))),!0===V&&i.a.createElement(p.PanelBody,{title:Object(o.__)("Content","ultimate-addons-for-gutenberg"),initialOpen:!1},i.a.createElement(i.a.Fragment,null,i.a.createElement(d.a,{label:Object(o.__)("Color","ultimate-addons-for-gutenberg"),colorValue:$,onColorChange:function(e){return S({contentColor:e})}}))),i.a.createElement(p.PanelBody,{title:Object(o.__)("Summary","ultimate-addons-for-gutenberg"),initialOpen:!1},i.a.createElement(d.a,{label:Object(o.__)("Color","ultimate-addons-for-gutenberg"),colorValue:$e,onColorChange:function(e){return S({summaryColor:e})}}),i.a.createElement(n.a,{label:Object(o.__)("Typography","ultimate-addons-for-gutenberg"),attributes:e.attributes,setAttributes:S,loadGoogleFonts:{value:ve,label:"contentLoadGoogleFonts"},fontFamily:{value:Oe,label:"contentFontFamily"},fontWeight:{value:Ce,label:"contentFontWeight"},fontSubset:{value:ye,label:"contentFontSubset"},fontSizeType:{value:Te,label:"contentFontSizeType"},fontSize:{value:je,label:"contentFontSize"},fontSizeMobile:{value:Fe,label:"contentFontSizeMobile"},fontSizeTablet:{value:Ee,label:"contentFontSizeTablet"},lineHeightType:{value:Se,label:"contentLineHeightType"},lineHeight:{value:He,label:"contentLineHeight"},lineHeightMobile:{value:Ae,label:"contentLineHeightMobile"},lineHeightTablet:{value:Pe,label:"contentLineHeightTablet"}})),i.a.createElement(p.PanelBody,{title:Object(o.__)("Star","ultimate-addons-for-gutenberg"),initialOpen:!1},i.a.createElement(d.a,{label:Object(o.__)("Active Color","ultimate-addons-for-gutenberg"),colorValue:W,onColorChange:function(e){return S({starColor:e})}}),i.a.createElement(d.a,{label:Object(o.__)("Inactive Color","ultimate-addons-for-gutenberg"),colorValue:qe,onColorChange:function(e){return S({starActiveColor:e})}}),i.a.createElement(d.a,{label:Object(o.__)("Outline Color","ultimate-addons-for-gutenberg"),colorValue:Qe,onColorChange:function(e){return S({starOutlineColor:e})}})),i.a.createElement(p.PanelBody,{title:Object(o.__)("Spacing","ultimate-addons-for-gutenberg"),initialOpen:!1},i.a.createElement(s.a,v({},e,{label:Object(o.__)("Padding","ultimate-addons-for-gutenberg"),valueTop:{value:Le,label:"topPadding"},valueRight:{value:ke,label:"rightPadding"},valueBottom:{value:we,label:"bottomPadding"},valueLeft:{value:ze,label:"leftPadding"},valueTopTablet:{value:xe,label:"paddingTopTablet"},valueRightTablet:{value:Ne,label:"paddingRightTablet"},valueBottomTablet:{value:De,label:"paddingBottomTablet"},valueLeftTablet:{value:Ge,label:"paddingLeftTablet"},valueTopMobile:{value:Me,label:"paddingTopMobile"},valueRightMobile:{value:Ie,label:"paddingRightMobile"},valueBottomMobile:{value:Be,label:"paddingBottomMobile"},valueLeftMobile:{value:Re,label:"paddingLeftMobile"},unit:{value:Ue,label:"paddingUnit"},mUnit:{value:We,label:"mobilePaddingUnit"},tUnit:{value:Je,label:"tabletPaddingUnit"},attributes:T,setAttributes:S,link:{value:Ve,label:"spacingLink"}})))),i.a.createElement(g.b,v({},g.a.advance,{parentProps:e})))),a,h,t)};t.default=i.a.memo(T)}}]);