(window.webpackJsonp_ultimate_addons_for_gutenberg=window.webpackJsonp_ultimate_addons_for_gutenberg||[]).push([[85],{581:function(e,t,a){"use strict";a.r(t),a.d(t,"removeFromArray",(function(){return d}));var n=a(6),l=a(22),o=a(59),r=a(2),i=a(1),u=a.n(i),c=a(11),b=a(5),s=a(3);function g(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}$=jQuery;var m=[{value:"thumbnail",label:Object(r.__)("Thumbnail","ultimate-addons-for-gutenberg")},{value:"medium",label:Object(r.__)("Medium","ultimate-addons-for-gutenberg")},{value:"full",label:Object(r.__)("Large","ultimate-addons-for-gutenberg")}],d=function(e,t){return e.filter((function(e){return Array.isArray(t)?!t.includes(e):e!==t}))},f=function(e){var t,a,d,f=e=e.parentProps,h=f.attributes,_=f.setAttributes,p=h.enableSchema,v=h.itemType,C=h.itemSubtype,O=h.sku,E=h.identifier,y=h.identifierType,S=h.offerType,j=h.offerCurrency,T=h.offerStatus,F=h.offerPrice,H=h.offerExpiry,w=h.datepublish,N=h.ctaLink,P=h.ctaTarget,k=h.brand,z=h.headingTag,A=h.mainimage,L=h.imgSize,M=h.showFeature,I=h.showAuthor,R=h.starColor,x=h.descColor,D=h.titleColor,G=h.contentColor,B=h.headFontFamily,W=h.headFontWeight,V=h.headFontSubset,U=h.headFontSizeType,J=h.headFontSize,K=h.headFontSizeMobile,Q=h.headFontSizeTablet,q=h.headLineHeightType,X=h.headLineHeight,Y=h.headLineHeightMobile,Z=h.headLineHeightTablet,ee=h.headLoadGoogleFonts,te=h.subHeadFontFamily,ae=h.subHeadFontWeight,ne=h.subHeadFontSubset,le=h.subHeadFontSize,oe=h.subHeadFontSizeType,re=h.subHeadFontSizeMobile,ie=h.subHeadFontSizeTablet,ue=h.subHeadLineHeight,ce=h.subHeadLineHeightType,be=h.subHeadLineHeightMobile,se=h.subHeadLineHeightTablet,ge=h.subHeadLoadGoogleFonts,me=h.contentLoadGoogleFonts,de=h.contentFontFamily,fe=h.contentFontWeight,he=h.contentFontSubset,_e=h.contentFontSizeType,pe=h.contentLineHeightType,ve=h.contentFontSize,Ce=h.contentFontSizeTablet,Oe=h.contentFontSizeMobile,Ee=h.contentLineHeight,ye=h.contentLineHeightTablet,Se=h.contentLineHeightMobile,je=h.contentVrPadding,Te=h.contentHrPadding,Fe=h.authorColor,He=h.summaryColor,we=h.starActiveColor,Ne=h.starOutlineColor,Pe=h.enableDescription,ke=h.enableImage,ze=h.overallAlignment,Ae=h.isbn,Le=h.bookAuthorName,Me=h.reviewPublisher,Ie=h.provider,Re=h.appCategory,xe=h.operatingSystem,De=h.datecreated,Ge=h.directorname;if(1==ee){var Be={google:{families:[B+(W?":"+W:"")]}};a=u.a.createElement(o.a,{config:Be})}if(1==ge){var We={google:{families:[te+(ae?":"+ae:"")]}};d=u.a.createElement(o.a,{config:We})}if(1==me){var Ve={google:{families:[de+(fe?":"+fe:"")]}};t=u.a.createElement(o.a,{config:Ve})}var Ue,$e,Je,Ke={Book:[{value:"Audiobook",label:Object(r.__)("Audio book","ultimate-addons-for-gutenberg")}],Product:[{value:"IndividualProduct",label:Object(r.__)("Individual Product","ultimate-addons-for-gutenberg")},{value:"ProductCollection",label:Object(r.__)("Product Collection","ultimate-addons-for-gutenberg")},{value:"ProductGroup",label:Object(r.__)("Product Group","ultimate-addons-for-gutenberg")},{value:"ProductModel",label:Object(r.__)("Product Model","ultimate-addons-for-gutenberg")},{value:"SomeProducts",label:Object(r.__)("Some Products","ultimate-addons-for-gutenberg")},{value:"Vehicle",label:Object(r.__)("Vehicle","ultimate-addons-for-gutenberg")}],SoftwareApplication:[{value:"MobileApplication",label:Object(r.__)("Mobile Application","ultimate-addons-for-gutenberg")},{value:"VideoGame",label:Object(r.__)("Video Game","ultimate-addons-for-gutenberg")},{value:"WebApplication",label:Object(r.__)("Web Application","ultimate-addons-for-gutenberg")}]};switch(v){default:break;case"Book":Ue=u.a.createElement(u.a.Fragment,null,u.a.createElement(s.TextControl,{label:Object(r.__)("ISBN","ultimate-addons-for-gutenberg"),value:Ae,onChange:function(e){return _({isbn:e})},help:Object(r.__)("Note: This is a mandatory field for the Review schema","ultimate-addons-for-gutenberg")}),u.a.createElement(s.TextControl,{label:Object(r.__)("Book author name","ultimate-addons-for-gutenberg"),value:Le,onChange:function(e){return _({bookAuthorName:e})},help:Object(r.__)("Note: This is a mandatory field for the Review schema","ultimate-addons-for-gutenberg")}));break;case"Course":Ue=u.a.createElement(u.a.Fragment,null,u.a.createElement(s.TextControl,{label:Object(r.__)("Provider","ultimate-addons-for-gutenberg"),value:Ie,onChange:function(e){return _({provider:e})}}));break;case"SoftwareApplication":Ue=u.a.createElement(u.a.Fragment,null,u.a.createElement(s.TextControl,{label:Object(r.__)("Application Category","ultimate-addons-for-gutenberg"),value:Re,onChange:function(e){return _({appCategory:e})}}),u.a.createElement(s.TextControl,{label:Object(r.__)("Operating System","ultimate-addons-for-gutenberg"),value:xe,onChange:function(e){return _({operatingSystem:e})}}));break;case"Movie":Ue=u.a.createElement(u.a.Fragment,null,u.a.createElement(s.TextControl,{label:Object(r.__)("Director Name","ultimate-addons-for-gutenberg"),value:Ge,onChange:function(e){return _({directorname:e})}}),u.a.createElement("h2",null,Object(r.__)("Date of create")),u.a.createElement(s.DateTimePicker,{currentDate:De,onChange:function(e){return _({datecreated:e})},is12Hour:!0}))}return u.a.createElement(i.Suspense,{fallback:Object(c.a)()},u.a.createElement(b.BlockControls,{key:"index"},u.a.createElement(b.AlignmentToolbar,{value:ze,onChange:function(e){return _({overallAlignment:e})}})),u.a.createElement(b.InspectorControls,null,(A&&A.sizes&&($e=A.sizes,Je=[],$.each($e,(function(e){var t={value:e,label:e};Je.push(t)})),m=Je),u.a.createElement(s.PanelBody,{title:Object(r.__)("General","ultimate-addons-for-gutenberg"),initialOpen:!0},u.a.createElement("h2",null,Object(r.__)("Review Title","ultimate-addons-for-gutenberg")),u.a.createElement(s.SelectControl,{label:Object(r.__)("Tag","ultimate-addons-for-gutenberg"),value:z,onChange:function(e){return _({headingTag:e})},options:[{value:"h1",label:Object(r.__)("H1")},{value:"h2",label:Object(r.__)("H2")},{value:"h3",label:Object(r.__)("H3")},{value:"h4",label:Object(r.__)("H4")},{value:"h5",label:Object(r.__)("H5")},{value:"h6",label:Object(r.__)("H6")}]}),u.a.createElement("h2",null,Object(r.__)("Link")),u.a.createElement(s.TextControl,{value:N,onChange:function(e){return _({ctaLink:e})}}),u.a.createElement(s.ToggleControl,{label:Object(r.__)("Open in new window","ultimate-addons-for-gutenberg"),checked:P,onChange:function(){_({ctaTarget:!P})}}),u.a.createElement(s.ToggleControl,{label:Object(r.__)("Show review description","ultimate-addons-for-gutenberg"),checked:Pe,onChange:function(){return _({enableDescription:!Pe})},help:Object(r.__)("Note: This is a mandatory field for the Review schema.","ultimate-addons-for-gutenberg")}),u.a.createElement(s.ToggleControl,{label:Object(r.__)("Show review author","ultimate-addons-for-gutenberg"),checked:I,onChange:function(){return _({showAuthor:!I})},help:Object(r.__)("Note: This is a mandatory field for the Review schema.","ultimate-addons-for-gutenberg")}),u.a.createElement(s.ToggleControl,{label:Object(r.__)("Show review image","ultimate-addons-for-gutenberg"),checked:ke,onChange:function(){return _({enableImage:!ke})},help:Object(r.__)("Note: This is a mandatory field for the Review schema.","ultimate-addons-for-gutenberg")}),!0===ke&&u.a.createElement(u.a.Fragment,null,u.a.createElement("h2",null,Object(r.__)("Image")),u.a.createElement(b.MediaUpload,{title:Object(r.__)("Select Image","ultimate-addons-for-gutenberg"),onSelect:function(e){return _({mainimage:e})},allowedTypes:["image"],value:A,render:function(e){var t=e.open;return u.a.createElement(s.Button,{isSecondary:!0,onClick:t},A.url?Object(r.__)("Replace image","ultimate-addons-for-gutenberg"):Object(r.__)("Select Image","ultimate-addons-for-gutenberg"))}}),A.url&&u.a.createElement(s.Button,{className:"uagb-rm-btn",onClick:function(){return _({mainimage:""})},isLink:!0,isDestructive:!0},Object(r.__)("Remove Image","ultimate-addons-for-gutenberg")),A.url&&u.a.createElement(s.SelectControl,{label:Object(r.__)("Size","ultimate-addons-for-gutenberg"),options:m,value:L,onChange:function(e){return _({imgSize:e})}})),u.a.createElement(s.ToggleControl,{label:Object(r.__)("Show ratings","ultimate-addons-for-gutenberg"),checked:M,onChange:function(){return _({showFeature:!M})},help:Object(r.__)("Note: Add feature/section ratings separately.","ultimate-addons-for-gutenberg")}),u.a.createElement(s.ToggleControl,{label:Object(r.__)("Enable schema support","ultimate-addons-for-gutenberg"),checked:p,onChange:function(){return _({enableSchema:!p})}}))),function(){if(!0===p)return u.a.createElement(s.PanelBody,{title:Object(r.__)("Schema","ultimate-addons-for-gutenberg"),initialOpen:!1},u.a.createElement(s.SelectControl,{label:Object(r.__)("Item type","ultimate-addons-for-gutenberg"),value:v,onChange:function(e){_({itemType:e}),"Movie"===v&&_({enableImage:!0}),"Course"===v&&_({enableDescription:!0}),Ke.hasOwnProperty(v)&&Ke[v].includes(C)||_({itemSubtype:"None"})},options:[{value:"Book",label:Object(r.__)("Book","ultimate-addons-for-gutenberg")},{value:"Course",label:Object(r.__)("Course","ultimate-addons-for-gutenberg")},{value:"Movie",label:Object(r.__)("Movie","ultimate-addons-for-gutenberg")},{value:"Product",label:Object(r.__)("Product","ultimate-addons-for-gutenberg")},{value:"SoftwareApplication",label:Object(r.__)("Software Application","ultimate-addons-for-gutenberg")}]}),Ke.hasOwnProperty(v)&&u.a.createElement(s.SelectControl,{label:Object(r.__)("Item subtype","ultimate-addons-for-gutenberg"),options:[{value:"none",label:Object(r.__)("None","ultimate-addons-for-gutenberg")}].concat((t=Ke[v],function(e){if(Array.isArray(e))return g(e)}(t)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(t)||function(e,t){if(e){if("string"==typeof e)return g(e,void 0);var a=Object.prototype.toString.call(e).slice(8,-1);return"Object"===a&&e.constructor&&(a=e.constructor.name),"Map"===a||"Set"===a?Array.from(e):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?g(e,void 0):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}())),value:C,onChange:function(e){return _({itemSubtype:e})}}),u.a.createElement("hr",{className:"uagb-editor__separator"}),Ue,u.a.createElement(s.TextControl,{label:Object(r.__)("Review publisher","ultimate-addons-for-gutenberg"),value:Me,onChange:function(e){return _({reviewPublisher:e})},help:Object(r.__)("Note: This is a mandatory field for the Review schema","ultimate-addons-for-gutenberg")}),u.a.createElement("h2",null,Object(r.__)("Date of publish","ultimate-addons-for-gutenberg")),u.a.createElement(s.DateTimePicker,{currentDate:w,onChange:function(e){return _({datepublish:e})},is12Hour:!0}),["Product","SoftwareApplication"].includes(v)&&u.a.createElement(u.a.Fragment,null,["Product"].includes(v)&&u.a.createElement(u.a.Fragment,null,u.a.createElement(s.TextControl,{label:Object(r.__)("Brand","ultimate-addons-for-gutenberg"),value:k,onChange:function(e){return _({brand:e})}}),u.a.createElement(s.TextControl,{label:Object(r.__)("SKU","ultimate-addons-for-gutenberg"),value:O,onChange:function(e){return _({sku:e})}}),u.a.createElement(s.TextControl,{label:Object(r.__)("Identifier","ultimate-addons-for-gutenberg"),value:E,onChange:function(e){return _({identifier:e})}}),u.a.createElement(s.SelectControl,{label:Object(r.__)("Identifier type","ultimate-addons-for-gutenberg"),value:y,options:["nsn","mpn","gtin8","gtin12","gtin13","gtin14","gtin"].map((function(e){return{label:Object(r.__)(e.toUpperCase()),value:e}})),onChange:function(e){return _({identifierType:e})}})),["Product","SoftwareApplication"].includes(v)&&u.a.createElement(u.a.Fragment,null,u.a.createElement(s.TextControl,{label:Object(r.__)("Offer Currency","ultimate-addons-for-gutenberg"),value:j,onChange:function(e){return _({offerCurrency:e})}})),"Offer"==S&&u.a.createElement(u.a.Fragment,null,u.a.createElement(s.TextControl,{label:Object(r.__)("Offer Price","ultimate-addons-for-gutenberg"),value:F,onChange:function(e){return _({offerPrice:e})},help:Object(r.__)("Note: This is a mandatory field for the Review schema","ultimate-addons-for-gutenberg")}),u.a.createElement(s.SelectControl,{label:Object(r.__)("Offer Status"),value:T,options:[{value:"https://schema.org/Discontinued",label:Object(r.__)("Discontinued","ultimate-addons-for-gutenberg")},{value:"https://schema.org/InStock",label:Object(r.__)("In Stock","ultimate-addons-for-gutenberg")},{value:"https://schema.org/InStoreOnly",label:Object(r.__)("In Store Only","ultimate-addons-for-gutenberg")},{value:"https://schema.org/LimitedAvailability",label:Object(r.__)("Limited Availability","ultimate-addons-for-gutenberg")},{value:"https://schema.org/OnlineOnly",label:Object(r.__)("Online Only","ultimate-addons-for-gutenberg")},{value:"https://schema.org/OutOfStock",label:Object(r.__)("Out Of Stock","ultimate-addons-for-gutenberg")},{value:"https://schema.org/PreOrder",label:Object(r.__)("Pre Order","ultimate-addons-for-gutenberg")},{value:"https://schema.org/PreSale",label:Object(r.__)("Pre Sale","ultimate-addons-for-gutenberg")},{value:"https://schema.org/SoldOut",label:Object(r.__)("Sold Out","ultimate-addons-for-gutenberg")}],onChange:function(t){return e.setAttributes({offerStatus:t})}}),u.a.createElement("h2",null,Object(r.__)("Price Valid Until","ultimate-addons-for-gutenberg")),u.a.createElement(s.DateTimePicker,{currentDate:H,onChange:function(e){return _({offerExpiry:e})},is12Hour:!0}))));var t}(),u.a.createElement(s.PanelBody,{title:Object(r.__)("Style","ultimate-addons-for-gutenberg"),initialOpen:!1},u.a.createElement(l.a,{label:Object(r.__)("Title Typography","ultimate-addons-for-gutenberg"),attributes:e.attributes,setAttributes:_,loadGoogleFonts:{value:ee,label:"headLoadGoogleFonts"},fontFamily:{value:B,label:"headFontFamily"},fontWeight:{value:W,label:"headFontWeight"},fontSubset:{value:V,label:"headFontSubset"},fontSizeType:{value:U,label:"headFontSizeType"},fontSize:{value:J,label:"headFontSize"},fontSizeMobile:{value:K,label:"headFontSizeMobile"},fontSizeTablet:{value:Q,label:"headFontSizeTablet"},lineHeightType:{value:q,label:"headLineHeightType"},lineHeight:{value:X,label:"headLineHeight"},lineHeightMobile:{value:Y,label:"headLineHeightMobile"},lineHeightTablet:{value:Z,label:"headLineHeightTablet"}}),u.a.createElement("p",{className:"uagb-setting-label"},Object(r.__)("Title Color","ultimate-addons-for-gutenberg"),u.a.createElement("span",{className:"components-base-control__label"},u.a.createElement("span",{className:"component-color-indicator",style:{backgroundColor:D}}))),u.a.createElement(b.ColorPalette,{value:D,onChange:function(e){return _({titleColor:e})},allowReset:!0}),!0===Pe&&u.a.createElement(u.a.Fragment,null,u.a.createElement("hr",{className:"uagb-editor__separator"}),u.a.createElement(l.a,{label:Object(r.__)("Description Typography","ultimate-addons-for-gutenberg"),attributes:e.attributes,setAttributes:_,loadGoogleFonts:{value:ge,label:"subHeadLoadGoogleFonts"},fontFamily:{value:te,label:"subHeadFontFamily"},fontWeight:{value:ae,label:"subHeadFontWeight"},fontSubset:{value:ne,label:"subHeadFontSubset"},fontSizeType:{value:oe,label:"subHeadFontSizeType"},fontSize:{value:le,label:"subHeadFontSize"},fontSizeMobile:{value:re,label:"subHeadFontSizeMobile"},fontSizeTablet:{value:ie,label:"subHeadFontSizeTablet"},lineHeightType:{value:ce,label:"subHeadLineHeightType"},lineHeight:{value:ue,label:"subHeadLineHeight"},lineHeightMobile:{value:be,label:"subHeadLineHeightMobile"},lineHeightTablet:{value:se,label:"subHeadLineHeightTablet"}}),u.a.createElement("p",{className:"uagb-setting-label"},Object(r.__)("Description Color","ultimate-addons-for-gutenberg"),u.a.createElement("span",{className:"components-base-control__label"},u.a.createElement("span",{className:"component-color-indicator",style:{backgroundColor:x}}))),u.a.createElement(b.ColorPalette,{value:x,onChange:function(e){return _({descColor:e})},allowReset:!0})),!0===I&&u.a.createElement(u.a.Fragment,null,u.a.createElement("hr",{className:"uagb-editor__separator"}),u.a.createElement("p",{className:"uagb-setting-label"},Object(r.__)("Author Color","ultimate-addons-for-gutenberg"),u.a.createElement("span",{className:"components-base-control__label"},u.a.createElement("span",{className:"component-color-indicator",style:{backgroundColor:Fe}}))),u.a.createElement(b.ColorPalette,{value:Fe,onChange:function(e){return _({authorColor:e})},allowReset:!0})),!0===M&&u.a.createElement(u.a.Fragment,null,u.a.createElement("hr",{className:"uagb-editor__separator"}),u.a.createElement("p",{className:"uagb-setting-label"},Object(r.__)("Content Color","ultimate-addons-for-gutenberg"),u.a.createElement("span",{className:"components-base-control__label"},u.a.createElement("span",{className:"component-color-indicator",style:{backgroundColor:G}}))),u.a.createElement(b.ColorPalette,{value:G,onChange:function(e){return _({contentColor:e})},allowReset:!0})),u.a.createElement("hr",{className:"uagb-editor__separator"}),u.a.createElement(l.a,{label:Object(r.__)("Summary Typography","ultimate-addons-for-gutenberg"),attributes:e.attributes,setAttributes:_,loadGoogleFonts:{value:me,label:"contentLoadGoogleFonts"},fontFamily:{value:de,label:"contentFontFamily"},fontWeight:{value:fe,label:"contentFontWeight"},fontSubset:{value:he,label:"contentFontSubset"},fontSizeType:{value:_e,label:"contentFontSizeType"},fontSize:{value:ve,label:"contentFontSize"},fontSizeMobile:{value:Oe,label:"contentFontSizeMobile"},fontSizeTablet:{value:Ce,label:"contentFontSizeTablet"},lineHeightType:{value:pe,label:"contentLineHeightType"},lineHeight:{value:Ee,label:"contentLineHeight"},lineHeightMobile:{value:Se,label:"contentLineHeightMobile"},lineHeightTablet:{value:ye,label:"contentLineHeightTablet"}}),u.a.createElement("p",{className:"uagb-setting-label"},Object(r.__)("Summary Color","ultimate-addons-for-gutenberg"),u.a.createElement("span",{className:"components-base-control__label"},u.a.createElement("span",{className:"component-color-indicator",style:{backgroundColor:He}}))),u.a.createElement(b.ColorPalette,{value:He,onChange:function(e){return _({summaryColor:e})},allowReset:!0}),u.a.createElement("hr",{className:"uagb-editor__separator"}),u.a.createElement("p",{className:"uagb-setting-label"},Object(r.__)("Active Star Color","ultimate-addons-for-gutenberg"),u.a.createElement("span",{className:"components-base-control__label"},u.a.createElement("span",{className:"component-color-indicator",style:{backgroundColor:R}}))),u.a.createElement(b.ColorPalette,{value:R,onChange:function(e){return _({starColor:e})},allowReset:!0}),u.a.createElement("hr",{className:"uagb-editor__separator"}),u.a.createElement("p",{className:"uagb-setting-label"},Object(r.__)("Inactive Star Color","ultimate-addons-for-gutenberg"),u.a.createElement("span",{className:"components-base-control__label"},u.a.createElement("span",{className:"component-color-indicator",style:{backgroundColor:we}}))),u.a.createElement(b.ColorPalette,{value:we,onChange:function(e){return _({starActiveColor:e})},allowReset:!0}),u.a.createElement("hr",{className:"uagb-editor__separator"}),u.a.createElement("p",{className:"uagb-setting-label"},Object(r.__)("Star Outline Color","ultimate-addons-for-gutenberg"),u.a.createElement("span",{className:"components-base-control__label"},u.a.createElement("span",{className:"component-color-indicator",style:{backgroundColor:Ne}}))),u.a.createElement(b.ColorPalette,{value:Ne,onChange:function(e){return _({starOutlineColor:e})},allowReset:!0}),u.a.createElement("h2",null,Object(r.__)("Overall Padding (px)","ultimate-addons-for-gutenberg")),u.a.createElement(s.RangeControl,{label:n.a.vertical_spacing,className:"uagb-margin-control",value:je,onChange:function(e){return _({contentVrPadding:e})},min:0,max:50,allowReset:!0}),u.a.createElement(s.RangeControl,{label:n.a.horizontal_spacing,className:"uagb-margin-control",value:Te,onChange:function(e){return _({contentHrPadding:e})},min:0,max:50,allowReset:!0}))),a,d,t)};t.default=u.a.memo(f)}}]);