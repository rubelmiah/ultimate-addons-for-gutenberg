(window.webpackJsonp_ultimate_addons_for_gutenberg=window.webpackJsonp_ultimate_addons_for_gutenberg||[]).push([[17],{613:function(e,t,a){"use strict";a.r(t);var n=a(6),o=a(2),l=a(1),r=a.n(l),i=a(11),u=a(73),b=a(71),c=a(13),g=a(3);function m(e){return(m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}function d(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function f(e,t){return!t||"object"!==m(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function v(e){return(v=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var O=[{value:"5",
/* translators: abbreviation for small size */
label:Object(o.__)("S","ultimate-addons-for-gutenberg"),tooltip:Object(o.__)("Small","ultimate-addons-for-gutenberg")},{value:"15",
/* translators: abbreviation for medium size */
label:Object(o.__)("M","ultimate-addons-for-gutenberg"),tooltip:Object(o.__)("Medium","ultimate-addons-for-gutenberg")},{value:"20",
/* translators: abbreviation for large size */
label:Object(o.__)("L","ultimate-addons-for-gutenberg"),tooltip:Object(o.__)("Large","ultimate-addons-for-gutenberg")},{value:"30",
/* translators: abbreviation for extra large size */
label:Object(o.__)("XL","ultimate-addons-for-gutenberg"),tooltip:Object(o.__)("Extra Large","ultimate-addons-for-gutenberg")}],C={value:"0",label:Object(o.__)("None","ultimate-addons-for-gutenberg"),tooltip:Object(o.__)("None","ultimate-addons-for-gutenberg")},h=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}(r,e);var t,a,n,o,l=(n=r,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=v(n);if(o){var a=v(this).constructor;e=Reflect.construct(t,arguments,a)}else e=t.apply(this,arguments);return f(this,e)});function r(){return d(this,r),l.apply(this,arguments)}return t=r,(a=[{key:"render",value:function(){var e,t=this.props,a=t.advancedMaxValue,n=t.advancedMinValue,o=t.currentOption,l=t.label,r=t.onChange,i=t.options,u=t.showAdvancedControls,b=t.showIcons,c=t.showNoneOption,m=i||O;return c&&(m=[C].concat(function(e){if(Array.isArray(e))return s(e)}(e=m)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return s(e,void 0);var a=Object.prototype.toString.call(e).slice(8,-1);return"Object"===a&&e.constructor&&(a=e.constructor.name),"Map"===a||"Set"===a?Array.from(e):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?s(e,void 0):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}())),u&&!1!==n&&!1!==a?React.createElement(g.RangeControl,{label:l,value:o,onChange:function(e){return r(e)},min:n,max:a}):React.createElement(g.BaseControl,{id:"uagb-option-selector-".concat(l),label:l},React.createElement(g.PanelRow,null,React.createElement(g.ButtonGroup,{"aria-label":l},m.map((function(e){return React.createElement(g.Tooltip,{key:"option-".concat(e.value),text:e.tooltip},React.createElement(g.Button,{isLarge:!0,isSecondary:o!==e.value,isPrimary:o===e.value,"aria-pressed":o===e.value,onClick:function(){return r(e.value)},"aria-label":e.tooltip},b?e.icon:e.label))})))))}}])&&_(t.prototype,a),r}(c.Component),y=a(127),j=a(5),E=function(e){var t,a,c,m=e.parentProps,s=m.attributes,d=m.setAttributes,_=m.deviceType,p=s.stack,f=s.align,v=s.vAlign,O=s.contentWidth,C=s.width,E=s.widthType,k=s.tag,R=s.columnGap,x=s.topMargin,w=s.bottomMargin,T=s.topMarginMobile,S=s.bottomMarginMobile,N=s.topMarginTablet,P=s.bottomMarginTablet,B=s.topPadding,M=s.bottomPadding,z=s.leftPadding,A=s.rightPadding,F=s.topPaddingTablet,H=s.bottomPaddingTablet,V=s.leftPaddingTablet,D=s.rightPaddingTablet,I=s.topPaddingMobile,W=s.bottomPaddingMobile,G=s.leftPaddingMobile,L=s.rightPaddingMobile,U=s.backgroundType,J=s.backgroundImage,X=s.backgroundVideo,Z=s.backgroundColor,$=s.backgroundPosition,q=s.backgroundAttachment,K=s.backgroundRepeat,Q=s.backgroundSize,Y=s.backgroundOpacity,ee=s.backgroundVideoColor,te=s.backgroundVideoOpacity,ae=s.backgroundImageColor,ne=s.borderStyle,oe=s.borderWidth,le=s.borderRadius,re=s.borderColor,ie=s.columns,ue=s.bottomType,be=s.bottomColor,ce=s.bottomHeight,ge=s.bottomHeightTablet,me=s.bottomHeightMobile,se=s.bottomWidth,de=s.topType,_e=s.topColor,pe=s.topHeight,fe=s.topHeightTablet,ve=s.topHeightMobile,Oe=s.topWidth,Ce=s.bottomFlip,he=s.topFlip,ye=s.reverseTablet,je=s.reverseMobile,Ee=s.topDividerOpacity,ke=s.bottomDividerOpacity,Re=s.topContentAboveShape,xe=s.bottomContentAboveShape,we=s.mobileMarginType,Te=s.tabletMarginType,Se=s.desktopMarginType,Ne=s.mobilePaddingType,Pe=s.tabletPaddingType,Be=s.desktopPaddingType,Me=s.boxShadowColor,ze=s.boxShadowHOffset,Ae=s.boxShadowVOffset,Fe=s.boxShadowBlur,He=s.boxShadowSpread,Ve=s.boxShadowPosition;return r.a.createElement(l.Suspense,{fallback:Object(i.a)()},r.a.createElement(j.BlockControls,null,r.a.createElement(j.BlockAlignmentToolbar,{value:f,onChange:function(e){d({align:e})},controls:["wide","full"]}),r.a.createElement(j.BlockVerticalAlignmentToolbar,{value:v,onChange:function(e){d({vAlign:e})}})),r.a.createElement(j.InspectorControls,null,r.a.createElement(g.PanelBody,{title:Object(o.__)("Layout","ultimate-addons-for-gutenberg")},r.a.createElement(g.RangeControl,{label:Object(o.__)("Columns","ultimate-addons-for-gutenberg"),value:ie,min:0,max:6,onChange:function(e){return d({columns:e})}}),r.a.createElement(g.SelectControl,{label:Object(o.__)("Stack on","ultimate-addons-for-gutenberg"),value:p,options:[{value:"none",label:Object(o.__)("None","ultimate-addons-for-gutenberg")},{value:"tablet",label:Object(o.__)("Tablet & Mobile","ultimate-addons-for-gutenberg")},{value:"mobile",label:Object(o.__)("Mobile","ultimate-addons-for-gutenberg")}],onChange:function(e){return d({stack:e})},help:Object(o.__)("Note: Choose on what breakpoint the columns will stack.","ultimate-addons-for-gutenberg")}),r.a.createElement(g.SelectControl,{label:Object(o.__)("Container Width","ultimate-addons-for-gutenberg"),value:O,onChange:function(e){return d({contentWidth:e})},options:[{value:"theme",label:Object(o.__)("Theme Container Width","ultimate-addons-for-gutenberg")},{value:"custom",label:Object(o.__)("Custom","ultimate-addons-for-gutenberg")}]}),"custom"==O&&r.a.createElement(r.a.Fragment,null,r.a.createElement(g.ButtonGroup,{className:"uagb-size-type-field","aria-label":Object(o.__)("Size Type","ultimate-addons-for-gutenberg")},r.a.createElement(g.Button,{key:"px",className:"uagb-size-btn",isSmall:!0,isPrimary:"px"===E,"aria-pressed":"px"===E,min:0,max:2e3,onClick:function(){return d({widthType:"px"})}},"px"),r.a.createElement(g.Button,{key:"%",className:"uagb-size-btn",isSmall:!0,isPrimary:"%"===E,"aria-pressed":"%"===E,min:0,max:100,onClick:function(){return d({widthType:"%"})}},"%")),r.a.createElement(g.RangeControl,{label:Object(o.__)("Inner Width","ultimate-addons-for-gutenberg"),value:C,min:0,max:"%"==E?100:2e3,onChange:function(e){return d({width:e})}})),r.a.createElement(h,{label:Object(o.__)("Column Gap","ultimate-addons-for-gutenberg"),currentOption:R,options:[{value:"10",label:Object(o.__)("Default","ultimate-addons-for-gutenberg"),tooltip:Object(o.__)("Default (10px)","ultimate-addons-for-gutenberg")},{value:"0",label:Object(o.__)("None","ultimate-addons-for-gutenberg"),tooltip:Object(o.__)("No Gap (0px)","ultimate-addons-for-gutenberg")},{value:"5",label:Object(o.__)("S","ultimate-addons-for-gutenberg"),tooltip:Object(o.__)("Narrow (5px)","ultimate-addons-for-gutenberg")},{value:"15",label:Object(o.__)("M","ultimate-addons-for-gutenberg"),tooltip:Object(o.__)("Extended (15px)","ultimate-addons-for-gutenberg")},{value:"20",label:Object(o.__)("L","ultimate-addons-for-gutenberg"),tooltip:Object(o.__)("Wide (20px)","ultimate-addons-for-gutenberg")},{value:"30",label:Object(o.__)("XL","ultimate-addons-for-gutenberg"),tooltip:Object(o.__)("Wider (30px)","ultimate-addons-for-gutenberg")}],onChange:function(e){return d({columnGap:e})},help:Object(o.__)("Note: The individual Column Gap can be managed from Column Settings.","ultimate-addons-for-gutenberg")}),r.a.createElement(g.SelectControl,{label:Object(o.__)("HTML Tag","ultimate-addons-for-gutenberg"),value:k,onChange:function(e){return d({tag:e})},options:[{value:"div",label:Object(o.__)("div","ultimate-addons-for-gutenberg")},{value:"header",label:Object(o.__)("header","ultimate-addons-for-gutenberg")},{value:"footer",label:Object(o.__)("footer","ultimate-addons-for-gutenberg")},{value:"main",label:Object(o.__)("main","ultimate-addons-for-gutenberg")},{value:"article",label:Object(o.__)("article","ultimate-addons-for-gutenberg")},{value:"section",label:Object(o.__)("section","ultimate-addons-for-gutenberg")},{value:"aside",label:Object(o.__)("aside","ultimate-addons-for-gutenberg")},{value:"nav",label:Object(o.__)("nav","ultimate-addons-for-gutenberg")}]}),r.a.createElement(g.ToggleControl,{label:Object(o.__)("Reverse Columns (Tablet & Mobile)","ultimate-addons-for-gutenberg"),checked:ye,onChange:function(){return d({reverseTablet:!ye})}}),r.a.createElement(g.ToggleControl,{label:Object(o.__)("Reverse Columns (Mobile)","ultimate-addons-for-gutenberg"),checked:je,onChange:function(){return d({reverseMobile:!je})}})),r.a.createElement(g.PanelBody,{title:Object(o.__)("Spacing"),initialOpen:!1},r.a.createElement(b.a,null),"Desktop"===_&&r.a.createElement(r.a.Fragment,null,r.a.createElement(g.ButtonGroup,{className:"uagb-size-type-field","aria-label":Object(o.__)("Size Type","ultimate-addons-for-gutenberg")},r.a.createElement(g.Button,{key:"px",className:"uagb-size-btn",isSmall:!0,isPrimary:"px"===Be,"aria-pressed":"px"===Be,onClick:function(){return d({desktopPaddingType:"px"})}},"px"),r.a.createElement(g.Button,{key:"%",className:"uagb-size-btn",isSmall:!0,isPrimary:"%"===Be,"aria-pressed":"%"===Be,onClick:function(){return d({desktopPaddingType:"%"})}},"%")),r.a.createElement("h2",null,Object(o.__)("Padding")),r.a.createElement(g.RangeControl,{label:n.a.top_margin,className:"uagb-margin-control",value:B,onChange:function(e){return d({topPadding:e})},min:0,max:"%"==Be?100:2e3,allowReset:!0}),r.a.createElement(g.RangeControl,{label:n.a.bottom_margin,className:"uagb-margin-control",value:M,onChange:function(e){return d({bottomPadding:e})},min:0,max:"%"==Be?100:2e3,allowReset:!0}),r.a.createElement(g.RangeControl,{label:n.a.left_margin,className:"uagb-margin-control",value:z,onChange:function(e){return d({leftPadding:e})},min:0,max:"%"==Be?100:2e3,allowReset:!0}),r.a.createElement(g.RangeControl,{label:n.a.right_margin,className:"uagb-margin-control",value:A,onChange:function(e){return d({rightPadding:e})},min:0,max:"%"==Be?100:2e3,allowReset:!0})),"Tablet"===_&&r.a.createElement(r.a.Fragment,null,r.a.createElement(g.ButtonGroup,{className:"uagb-size-type-field","aria-label":Object(o.__)("Size Type","ultimate-addons-for-gutenberg")},r.a.createElement(g.Button,{key:"px",className:"uagb-size-btn",isSmall:!0,isPrimary:"px"===Pe,"aria-pressed":"px"===Pe,onClick:function(){return d({tabletPaddingType:"px"})}},"px"),r.a.createElement(g.Button,{key:"%",className:"uagb-size-btn",isSmall:!0,isPrimary:"%"===Pe,"aria-pressed":"%"===Pe,onClick:function(){return d({tabletPaddingType:"%"})}},"%")),r.a.createElement("h2",null,Object(o.__)("Padding","ultimate-addons-for-gutenberg")),r.a.createElement(g.RangeControl,{label:n.a.top_margin,className:"uagb-margin-control",value:F,onChange:function(e){return d({topPaddingTablet:e})},min:0,max:"%"==Pe?100:2e3,allowReset:!0}),r.a.createElement(g.RangeControl,{label:n.a.bottom_margin,className:"uagb-margin-control",value:H,onChange:function(e){return d({bottomPaddingTablet:e})},min:0,max:"%"==Pe?100:2e3,allowReset:!0}),r.a.createElement(g.RangeControl,{label:n.a.left_margin,className:"uagb-margin-control",value:V,onChange:function(e){return d({leftPaddingTablet:e})},min:0,max:"%"==Pe?100:2e3,allowReset:!0}),r.a.createElement(g.RangeControl,{label:n.a.right_margin,className:"uagb-margin-control",value:D,onChange:function(e){return d({rightPaddingTablet:e})},min:0,max:"%"==Pe?100:2e3,allowReset:!0})),"Mobile"===_&&r.a.createElement(r.a.Fragment,null,r.a.createElement(g.ButtonGroup,{className:"uagb-size-type-field","aria-label":Object(o.__)("Size Type","ultimate-addons-for-gutenberg")},r.a.createElement(g.Button,{key:"px",className:"uagb-size-btn",isSmall:!0,isPrimary:"px"===Ne,"aria-pressed":"px"===Ne,onClick:function(){return d({mobilePaddingType:"px"})}},"px"),r.a.createElement(g.Button,{key:"%",className:"uagb-size-btn",isSmall:!0,isPrimary:"%"===Ne,"aria-pressed":"%"===Ne,onClick:function(){return d({mobilePaddingType:"%"})}},"%")),r.a.createElement("h2",null,Object(o.__)("Padding","ultimate-addons-for-gutenberg")),r.a.createElement(g.RangeControl,{label:n.a.top_margin,className:"uagb-margin-control",value:I,onChange:function(e){return d({topPaddingMobile:e})},min:0,max:"%"==Ne?100:2e3,allowReset:!0}),r.a.createElement(g.RangeControl,{label:n.a.bottom_margin,className:"uagb-margin-control",value:W,onChange:function(e){return d({bottomPaddingMobile:e})},min:0,max:"%"==Ne?100:2e3,allowReset:!0}),r.a.createElement(g.RangeControl,{label:n.a.left_margin,className:"uagb-margin-control",value:G,onChange:function(e){return d({leftPaddingMobile:e})},min:0,max:"%"==Ne?100:2e3,allowReset:!0}),r.a.createElement(g.RangeControl,{label:n.a.right_margin,className:"uagb-margin-control",value:L,onChange:function(e){return d({rightPaddingMobile:e})},min:0,max:"%"==Ne?100:2e3,allowReset:!0})),r.a.createElement("hr",{className:"uagb-editor__separator"}),r.a.createElement(b.a,null),"Desktop"===_&&r.a.createElement(r.a.Fragment,null,r.a.createElement(g.ButtonGroup,{className:"uagb-size-type-field","aria-label":Object(o.__)("Size Type")},r.a.createElement(g.Button,{key:"px",className:"uagb-size-btn",isSmall:!0,isPrimary:"px"===Se,"aria-pressed":"px"===Se,onClick:function(){return d({desktopMarginType:"px"})}},"px"),r.a.createElement(g.Button,{key:"%",className:"uagb-size-btn",isSmall:!0,isPrimary:"%"===Se,"aria-pressed":"%"===Se,onClick:function(){return d({desktopMarginType:"%"})}},"%")),r.a.createElement("h2",null,Object(o.__)("Margin","ultimate-addons-for-gutenberg")),r.a.createElement(g.RangeControl,{label:n.a.top_margin,className:"uagb-margin-control",value:x,onChange:function(e){return d({topMargin:e})},min:-2e3,max:2e3,allowReset:!0}),r.a.createElement(g.RangeControl,{label:n.a.bottom_margin,className:"uagb-margin-control",value:w,onChange:function(e){return d({bottomMargin:e})},min:-2e3,max:2e3,allowReset:!0})),"Tablet"===_&&r.a.createElement(r.a.Fragment,null,r.a.createElement(g.ButtonGroup,{className:"uagb-size-type-field","aria-label":Object(o.__)("Size Type","ultimate-addons-for-gutenberg")},r.a.createElement(g.Button,{key:"px",className:"uagb-size-btn",isSmall:!0,isPrimary:"px"===Te,"aria-pressed":"px"===Te,onClick:function(){return d({tabletMarginType:"px"})}},"px"),r.a.createElement(g.Button,{key:"%",className:"uagb-size-btn",isSmall:!0,isPrimary:"%"===Te,"aria-pressed":"%"===Te,onClick:function(){return d({tabletMarginType:"%"})}},"%")),r.a.createElement("h2",null,Object(o.__)("Margin Tablet","ultimate-addons-for-gutenberg")),r.a.createElement(g.RangeControl,{label:n.a.top_margin,className:"uagb-margin-control",value:N,onChange:function(e){return d({topMarginTablet:e})},min:-2e3,max:2e3,allowReset:!0}),r.a.createElement(g.RangeControl,{label:n.a.bottom_margin,className:"uagb-margin-control",value:P,onChange:function(e){return d({bottomMarginTablet:e})},min:-2e3,max:2e3,allowReset:!0})),"Mobile"===_&&r.a.createElement(r.a.Fragment,null,r.a.createElement(g.ButtonGroup,{className:"uagb-size-type-field","aria-label":Object(o.__)("Size Type","ultimate-addons-for-gutenberg")},r.a.createElement(g.Button,{key:"px",className:"uagb-size-btn",isSmall:!0,isPrimary:"px"===we,"aria-pressed":"px"===we,onClick:function(){return d({mobileMarginType:"px"})}},"px"),r.a.createElement(g.Button,{key:"%",className:"uagb-size-btn",isSmall:!0,isPrimary:"%"===we,"aria-pressed":"%"===we,onClick:function(){return d({mobileMarginType:"%"})}},"%")),r.a.createElement("h2",null,Object(o.__)("Margin Mobile","ultimate-addons-for-gutenberg")),r.a.createElement(g.RangeControl,{label:n.a.top_margin,className:"uagb-margin-control",value:T,onChange:function(e){return d({topMarginMobile:e})},min:-2e3,max:2e3,allowReset:!0}),r.a.createElement(g.RangeControl,{label:n.a.bottom_margin,className:"uagb-margin-control",value:S,onChange:function(e){return d({bottomMarginMobile:e})},min:-2e3,max:2e3,allowReset:!0}))),r.a.createElement(g.PanelBody,{title:Object(o.__)("Background","ultimate-addons-for-gutenberg"),initialOpen:!1},r.a.createElement(g.SelectControl,{label:Object(o.__)("Background Type","ultimate-addons-for-gutenberg"),value:U,onChange:function(e){return d({backgroundType:e})},options:[{value:"none",label:Object(o.__)("None","ultimate-addons-for-gutenberg")},{value:"color",label:Object(o.__)("Color","ultimate-addons-for-gutenberg")},{value:"gradient",label:Object(o.__)("Gradient","ultimate-addons-for-gutenberg")},{value:"image",label:Object(o.__)("Image","ultimate-addons-for-gutenberg")},{value:"video",label:Object(o.__)("Video","ultimate-addons-for-gutenberg")}]}),"color"==U&&r.a.createElement(r.a.Fragment,null,r.a.createElement("p",{className:"uagb-setting-label"},Object(o.__)("Background Color","ultimate-addons-for-gutenberg"),r.a.createElement("span",{className:"components-base-control__label"},r.a.createElement("span",{className:"component-color-indicator",style:{backgroundColor:Z}}))),r.a.createElement(j.ColorPalette,{value:Z,onChange:function(e){return d({backgroundColor:e})},allowReset:!0})),"image"==U&&r.a.createElement(r.a.Fragment,null,r.a.createElement(g.BaseControl,{id:"Background Image",className:"editor-bg-image-control",label:Object(o.__)("Background Image","ultimate-addons-for-gutenberg")},r.a.createElement(j.MediaUpload,{title:Object(o.__)("Select Background Image","ultimate-addons-for-gutenberg"),onSelect:function(e){e&&e.url?e.type&&"image"==e.type&&d({backgroundImage:e}):d({backgroundImage:null})},allowedTypes:["image"],value:J,render:function(e){var t=e.open;return r.a.createElement(g.Button,{isSecondary:!0,onClick:t},J?Object(o.__)("Replace image","ultimate-addons-for-gutenberg"):Object(o.__)("Select Background Image","ultimate-addons-for-gutenberg"))}}),J&&r.a.createElement(g.Button,{className:"uagb-rm-btn",onClick:function(){d({backgroundImage:null})},isLink:!0,isDestructive:!0},Object(o.__)("Remove Image","ultimate-addons-for-gutenberg"))),J&&r.a.createElement(r.a.Fragment,null,r.a.createElement(g.SelectControl,{label:Object(o.__)("Image Position","ultimate-addons-for-gutenberg"),value:$,onChange:function(e){return d({backgroundPosition:e})},options:[{value:"top-left",label:Object(o.__)("Top Left","ultimate-addons-for-gutenberg")},{value:"top-center",label:Object(o.__)("Top Center","ultimate-addons-for-gutenberg")},{value:"top-right",label:Object(o.__)("Top Right","ultimate-addons-for-gutenberg")},{value:"center-left",label:Object(o.__)("Center Left","ultimate-addons-for-gutenberg")},{value:"center-center",label:Object(o.__)("Center Center","ultimate-addons-for-gutenberg")},{value:"center-right",label:Object(o.__)("Center Right","ultimate-addons-for-gutenberg")},{value:"bottom-left",label:Object(o.__)("Bottom Left","ultimate-addons-for-gutenberg")},{value:"bottom-center",label:Object(o.__)("Bottom Center","ultimate-addons-for-gutenberg")},{value:"bottom-right",label:Object(o.__)("Bottom Right","ultimate-addons-for-gutenberg")}]}),r.a.createElement(g.SelectControl,{label:Object(o.__)("Attachment","ultimate-addons-for-gutenberg"),value:q,onChange:function(e){return d({backgroundAttachment:e})},options:[{value:"fixed",label:Object(o.__)("Fixed","ultimate-addons-for-gutenberg")},{value:"scroll",label:Object(o.__)("Scroll","ultimate-addons-for-gutenberg")}]}),r.a.createElement(g.SelectControl,{label:Object(o.__)("Repeat","ultimate-addons-for-gutenberg"),value:K,onChange:function(e){return d({backgroundRepeat:e})},options:[{value:"no-repeat",label:Object(o.__)("No Repeat","ultimate-addons-for-gutenberg")},{value:"repeat",label:Object(o.__)("Repeat","ultimate-addons-for-gutenberg")},{value:"repeat-x",label:Object(o.__)("Repeat-x","ultimate-addons-for-gutenberg")},{value:"repeat-y",label:Object(o.__)("Repeat-y","ultimate-addons-for-gutenberg")}]}),r.a.createElement(g.SelectControl,{label:Object(o.__)("Size","ultimate-addons-for-gutenberg"),value:Q,onChange:function(e){return d({backgroundSize:e})},options:[{value:"auto",label:Object(o.__)("Auto","ultimate-addons-for-gutenberg")},{value:"cover",label:Object(o.__)("Cover","ultimate-addons-for-gutenberg")},{value:"contain",label:Object(o.__)("Contain","ultimate-addons-for-gutenberg")}]}),r.a.createElement(r.a.Fragment,null,r.a.createElement("p",{className:"uagb-setting-label"},Object(o.__)("Image Overlay Color","ultimate-addons-for-gutenberg"),r.a.createElement("span",{className:"components-base-control__label"},r.a.createElement("span",{className:"component-color-indicator",style:{backgroundColor:ae}}))),r.a.createElement(j.ColorPalette,{value:ae,onChange:function(e){return d({backgroundImageColor:e})},allowReset:!0})))),"gradient"==U&&r.a.createElement(r.a.Fragment,null,r.a.createElement(u.a,{attributes:s,setAttributes:d})),"video"==U&&r.a.createElement(g.BaseControl,{id:"Background Video",className:"editor-bg-video-control",label:Object(o.__)("Background Video","ultimate-addons-for-gutenberg")},r.a.createElement(j.MediaUpload,{title:Object(o.__)("Select Background Video","ultimate-addons-for-gutenberg"),onSelect:function(e){e&&e.url?e.type&&"video"==e.type&&d({backgroundVideo:e}):d({backgroundVideo:null})},allowedTypes:["video"],value:X,render:function(e){var t=e.open;return r.a.createElement(g.Button,{isSecondary:!0,onClick:t},X?Object(o.__)("Replace Video","ultimate-addons-for-gutenberg"):Object(o.__)("Select Background Video","ultimate-addons-for-gutenberg"))}}),X&&r.a.createElement(g.Button,{onClick:function(){d({backgroundVideo:null})},isLink:!0,isDestructive:!0},Object(o.__)("Remove Video","ultimate-addons-for-gutenberg"))),("color"==U||"image"==U&&J||"gradient"==U)&&r.a.createElement(g.RangeControl,{label:Object(o.__)("Opacity","ultimate-addons-for-gutenberg"),value:Y,onChange:function(e){return d({backgroundOpacity:e})},min:0,max:100,allowReset:!0,initialPosition:0}),"video"==U&&X&&r.a.createElement(r.a.Fragment,null,r.a.createElement("p",{className:"uagb-setting-label"},Object(o.__)("Video Overlay Color","ultimate-addons-for-gutenberg"),r.a.createElement("span",{className:"components-base-control__label"},r.a.createElement("span",{className:"component-color-indicator",style:{backgroundColor:ee}}))),r.a.createElement(j.ColorPalette,{value:ee,onChange:function(e){return d({backgroundVideoColor:e})},allowReset:!0})),"video"==U&&X&&r.a.createElement(g.RangeControl,{label:Object(o.__)("Opacity","ultimate-addons-for-gutenberg"),value:te,onChange:function(e){return d({backgroundVideoOpacity:e})},min:0,max:100,allowReset:!0,initialPosition:50})),(t=[{value:"none",label:Object(o.__)("None","ultimate-addons-for-gutenberg")},{value:"tilt",label:Object(o.__)("Tilt","ultimate-addons-for-gutenberg")},{value:"mountains",label:Object(o.__)("Mountains","ultimate-addons-for-gutenberg")},{value:"wave_brush",label:Object(o.__)("Wave Brush","ultimate-addons-for-gutenberg")},{value:"waves",label:Object(o.__)("Waves","ultimate-addons-for-gutenberg")},{value:"wave_pattern",label:Object(o.__)("Waves Pattern","ultimate-addons-for-gutenberg")},{value:"triangle",label:Object(o.__)("Triangle","ultimate-addons-for-gutenberg")},{value:"drops",label:Object(o.__)("Drops","ultimate-addons-for-gutenberg")},{value:"clouds",label:Object(o.__)("Clouds","ultimate-addons-for-gutenberg")},{value:"zigzag",label:Object(o.__)("ZigZag","ultimate-addons-for-gutenberg")},{value:"pyramids",label:Object(o.__)("Pyramids","ultimate-addons-for-gutenberg")},{value:"triangle_asymmetrical",label:Object(o.__)("Triangle Asymmetrical","ultimate-addons-for-gutenberg")},{value:"tilt_opacity",label:Object(o.__)("Tilt Opacity","ultimate-addons-for-gutenberg")},{value:"fan_opacity",label:Object(o.__)("Fan Opacity","ultimate-addons-for-gutenberg")},{value:"curve",label:Object(o.__)("Curve","ultimate-addons-for-gutenberg")},{value:"curve_asymmetrical",label:Object(o.__)("Curve Asymmetrical","ultimate-addons-for-gutenberg")},{value:"curve_reverse",label:Object(o.__)("Curve Reverse","ultimate-addons-for-gutenberg")},{value:"curve_asym_reverse",label:Object(o.__)("Curve Asymmetrical Reverse","ultimate-addons-for-gutenberg")},{value:"arrow",label:Object(o.__)("Arrow","ultimate-addons-for-gutenberg")},{value:"arrow_split",label:Object(o.__)("Arrow Split","ultimate-addons-for-gutenberg")},{value:"book",label:Object(o.__)("Book","ultimate-addons-for-gutenberg")}],a=r.a.createElement(r.a.Fragment,null,r.a.createElement(g.SelectControl,{label:Object(o.__)("Type","ultimate-addons-for-gutenberg"),value:de,onChange:function(e){return d({topType:e})},options:t}),"none"!=de&&r.a.createElement(r.a.Fragment,null,r.a.createElement("p",{className:"uagb-setting-label"},Object(o.__)("Color","ultimate-addons-for-gutenberg"),r.a.createElement("span",{className:"components-base-control__label"},r.a.createElement("span",{className:"component-color-indicator",style:{topColor:_e}}))),r.a.createElement(j.ColorPalette,{value:_e,onChange:function(e){return d({topColor:e})},allowReset:!0}),r.a.createElement(g.RangeControl,{label:Object(o.__)("Opacity","ultimate-addons-for-gutenberg"),value:Ee,onChange:function(e){return d({topDividerOpacity:e})},min:0,max:100,allowReset:!0}),r.a.createElement(g.RangeControl,{label:Object(o.__)("Width","ultimate-addons-for-gutenberg"),value:Oe,onChange:function(e){return d({topWidth:e})},min:100,max:2e3,allowReset:!0}),r.a.createElement(g.TabPanel,{className:"uagb-size-type-field-tabs uagb-without-size-type",activeClass:"active-tab",tabs:[{name:"desktop",title:r.a.createElement(g.Dashicon,{icon:"desktop"}),className:"uagb-desktop-tab uagb-responsive-tabs"},{name:"tablet",title:r.a.createElement(g.Dashicon,{icon:"tablet"}),className:"uagb-tablet-tab uagb-responsive-tabs"},{name:"mobile",title:r.a.createElement(g.Dashicon,{icon:"smartphone"}),className:"uagb-mobile-tab uagb-responsive-tabs"}]},(function(e){var t;return t="mobile"===e.name?r.a.createElement(g.RangeControl,{label:Object(o.__)("Height","ultimate-addons-for-gutenberg"),value:ve,onChange:function(e){return d({topHeightMobile:e})},min:0,max:500,allowReset:!0}):"tablet"===e.name?r.a.createElement(g.RangeControl,{label:Object(o.__)("Height","ultimate-addons-for-gutenberg"),value:fe,onChange:function(e){return d({topHeightTablet:e})},min:0,max:500,allowReset:!0}):r.a.createElement(g.RangeControl,{label:Object(o.__)("Height","ultimate-addons-for-gutenberg"),value:pe,onChange:function(e){return d({topHeight:e})},min:0,max:500,allowReset:!0}),r.a.createElement("div",null,t)})),r.a.createElement(g.ToggleControl,{label:Object(o.__)("Flip","ultimate-addons-for-gutenberg"),checked:he,onChange:function(){return d({topFlip:!he})}}),r.a.createElement(g.ToggleControl,{label:Object(o.__)("Bring To Front","ultimate-addons-for-gutenberg"),checked:Re,onChange:function(){return d({topContentAboveShape:!Re})}}))),c=r.a.createElement(r.a.Fragment,null,r.a.createElement(g.SelectControl,{label:Object(o.__)("Type","ultimate-addons-for-gutenberg"),value:ue,onChange:function(e){return d({bottomType:e})},options:t}),"none"!=ue&&r.a.createElement(r.a.Fragment,null,r.a.createElement("p",{className:"uagb-setting-label"},Object(o.__)("Color","ultimate-addons-for-gutenberg"),r.a.createElement("span",{className:"components-base-control__label"},r.a.createElement("span",{className:"component-color-indicator",style:{bottomColor:be}}))),r.a.createElement(j.ColorPalette,{value:be,onChange:function(e){return d({bottomColor:e})},allowReset:!0}),r.a.createElement(g.RangeControl,{label:Object(o.__)("Opacity","ultimate-addons-for-gutenberg"),value:ke,onChange:function(e){return d({bottomDividerOpacity:e})},min:0,max:100,allowReset:!0}),r.a.createElement(g.RangeControl,{label:Object(o.__)("Width","ultimate-addons-for-gutenberg"),value:se,onChange:function(e){return d({bottomWidth:e})},min:100,max:2e3,allowReset:!0}),r.a.createElement(g.TabPanel,{className:"uagb-size-type-field-tabs uagb-without-size-type",activeClass:"active-tab",tabs:[{name:"desktop",title:r.a.createElement(g.Dashicon,{icon:"desktop"}),className:"uagb-desktop-tab uagb-responsive-tabs"},{name:"tablet",title:r.a.createElement(g.Dashicon,{icon:"tablet"}),className:"uagb-tablet-tab uagb-responsive-tabs"},{name:"mobile",title:r.a.createElement(g.Dashicon,{icon:"smartphone"}),className:"uagb-mobile-tab uagb-responsive-tabs"}]},(function(e){var t;return t="mobile"===e.name?r.a.createElement(g.RangeControl,{label:Object(o.__)("Height","ultimate-addons-for-gutenberg"),value:me,onChange:function(e){return d({bottomHeightMobile:e})},min:0,max:500,allowReset:!0}):"tablet"===e.name?r.a.createElement(g.RangeControl,{label:Object(o.__)("Height","ultimate-addons-for-gutenberg"),value:ge,onChange:function(e){return d({bottomHeightTablet:e})},min:0,max:500,allowReset:!0}):r.a.createElement(g.RangeControl,{label:Object(o.__)("Height","ultimate-addons-for-gutenberg"),value:ce,onChange:function(e){return d({bottomHeight:e})},min:0,max:500,allowReset:!0}),r.a.createElement("div",null,t)})),r.a.createElement(g.ToggleControl,{label:Object(o.__)("Flip","ultimate-addons-for-gutenberg"),checked:Ce,onChange:function(){return d({bottomFlip:!Ce})}}),r.a.createElement(g.ToggleControl,{label:Object(o.__)("Bring To Front","ultimate-addons-for-gutenberg"),checked:xe,onChange:function(){return d({bottomContentAboveShape:!xe})}}))),r.a.createElement(g.PanelBody,{title:Object(o.__)("Shape Dividers","ultimate-addons-for-gutenberg"),initialOpen:!1},r.a.createElement(g.TabPanel,{className:"uagb-inspect-tabs uagb-inspect-tabs-col-2",activeClass:"active-tab",tabs:[{name:"top",title:Object(o.__)("Top","ultimate-addons-for-gutenberg"),className:"uagb-top-tab"},{name:"bottom",title:Object(o.__)("Bottom","ultimate-addons-for-gutenberg"),className:"uagb-bottom-tab"}]},(function(e){var t;return t="bottom"===e.name?c:a,r.a.createElement("div",null,t)})))),r.a.createElement(g.PanelBody,{title:Object(o.__)("Border","ultimate-addons-for-gutenberg"),initialOpen:!1},r.a.createElement(g.SelectControl,{label:Object(o.__)("Border Style","ultimate-addons-for-gutenberg"),value:ne,onChange:function(e){return d({borderStyle:e})},options:[{value:"none",label:Object(o.__)("None","ultimate-addons-for-gutenberg")},{value:"solid",label:Object(o.__)("Solid","ultimate-addons-for-gutenberg")},{value:"dotted",label:Object(o.__)("Dotted","ultimate-addons-for-gutenberg")},{value:"dashed",label:Object(o.__)("Dashed","ultimate-addons-for-gutenberg")},{value:"double",label:Object(o.__)("Double","ultimate-addons-for-gutenberg")},{value:"groove",label:Object(o.__)("Groove","ultimate-addons-for-gutenberg")},{value:"inset",label:Object(o.__)("Inset","ultimate-addons-for-gutenberg")},{value:"outset",label:Object(o.__)("Outset","ultimate-addons-for-gutenberg")},{value:"ridge",label:Object(o.__)("Ridge","ultimate-addons-for-gutenberg")}]}),"none"!=ne&&r.a.createElement(g.RangeControl,{label:Object(o.__)("Border Width","ultimate-addons-for-gutenberg"),value:oe,onChange:function(e){return d({borderWidth:e})},min:0,max:50,allowReset:!0}),r.a.createElement(g.RangeControl,{label:Object(o.__)("Border Radius","ultimate-addons-for-gutenberg"),value:le,onChange:function(e){return d({borderRadius:e})},min:0,max:1e3,allowReset:!0}),"none"!=ne&&r.a.createElement(r.a.Fragment,null,r.a.createElement("p",{className:"uagb-setting-label"},Object(o.__)("Border Color","ultimate-addons-for-gutenberg"),r.a.createElement("span",{className:"components-base-control__label"},r.a.createElement("span",{className:"component-color-indicator",style:{backgroundColor:re}}))),r.a.createElement(j.ColorPalette,{value:re,onChange:function(e){return d({borderColor:e})},allowReset:!0})),r.a.createElement(y.a,{setAttributes:d,label:Object(o.__)("Box Shadow","ultimate-addons-for-gutenberg"),boxShadowColor:{value:Me,label:Object(o.__)("Color","ultimate-addons-for-gutenberg")},boxShadowHOffset:{value:ze,label:Object(o.__)("Horizontal","ultimate-addons-for-gutenberg")},boxShadowVOffset:{value:Ae,label:Object(o.__)("Vertical","ultimate-addons-for-gutenberg")},boxShadowBlur:{value:Fe,label:Object(o.__)("Blur","ultimate-addons-for-gutenberg")},boxShadowSpread:{value:He,label:Object(o.__)("Spread","ultimate-addons-for-gutenberg")},boxShadowPosition:{value:Ve,label:Object(o.__)("Position","ultimate-addons-for-gutenberg")}}))))};t.default=r.a.memo(E)}}]);