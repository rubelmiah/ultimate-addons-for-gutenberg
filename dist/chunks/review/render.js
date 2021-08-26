(window.webpackJsonp_ultimate_addons_for_gutenberg=window.webpackJsonp_ultimate_addons_for_gutenberg||[]).push([[21],{282:function(e,t,a){"use strict";var r=a(12),n=a.n(r)()((function(e){return e[1]}));n.push([e.i,'.editor-styles-wrapper [data-type="uagb/review"] .rating-schema-notices {\n  padding: 8px 10px;\n  background-color: #fff8e5;\n  border-left: 5px solid #ffb901;\n  color: #32373c;\n  font-size: 13px;\n  line-height: 20px; }\n  .editor-styles-wrapper [data-type="uagb/review"] .rating-schema-notices ul {\n    padding-bottom: 0;\n    margin: 0; }\n  .editor-styles-wrapper [data-type="uagb/review"] .rating-schema-notices h6 {\n    margin: 0;\n    font-size: inherit;\n    line-height: inherit; }\n  .editor-styles-wrapper [data-type="uagb/review"] .rating-schema-notices p {\n    margin: 15px 0 0;\n    color: #555d66;\n    font-size: inherit; }\n\n.dashicons.dashicons-plus-alt {\n  left: 50%;\n  width: 100%; }\n\n.dashicons.dashicons-trash {\n  margin-left: 50px; }\n\n.uagb_review_average_stars,\n.uagb_review_entry .dashicons-trash {\n  float: right; }\n',""]),t.a=n},372:function(e,t,a){"use strict";a.r(t);var r=a(2),n=a.n(r),i=a(5),o=a(1),l=a(61);function u(e){return function(e){if(Array.isArray(e))return c(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return c(e,void 0);var a=Object.prototype.toString.call(e).slice(8,-1);return"Object"===a&&e.constructor&&(a=e.constructor.name),"Map"===a||"Set"===a?Array.from(e):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?c(e,void 0):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function c(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,r=new Array(t);a<t;a++)r[a]=e[a];return r}var s,m=function(e){var t=e.ID,a=e.items,r=e.summaryTitle,n=e.summaryDescription,c=e.starCount,s=e.setItems,m=e.setSummaryDescription,g=e.setSummaryTitle,d=e.setTitle,f=e.setDescription,h=e.setAuthorName,v=e.inactiveStarColor,b=e.activeStarColor,p=e.selectedStarColor,y=e.starOutlineColor,_=e.ctaTarget,S=e.ctaLink,w=e.setActiveStarIndex,C=e.rTitle,E=e.rContent,N=e.rAuthor,T=e.headingTag,R=e.image_icon_html,A=e.showfeature,O=e.imageEnabled,k=e.descriptionEnabled,j=e.showauthor,I=e.state.average,x=a.map((function(e){return e.value})).reduce((function(e,t){return e+t}))/a.length;I!==x&&e.setStateValue({average:x});var D="_self";return _&&(D="_blank"),React.createElement("div",{className:"uagb_review_block"},React.createElement("a",{href:S,className:"uagb-rating-link-wrapper",target:D,rel:"noopener noreferrer"},React.createElement(i.RichText,{tagName:T,placeholder:Object(o.__)("Title of the review","ultimate-addons-for-gutenberg"),keepPlaceholderOnFocus:!0,value:C,className:"uagb-rating-title",onChange:function(e){return d(e)}})),!0===k&&React.createElement(i.RichText,{tagName:"p",placeholder:Object(o.__)("Review Description","ultimate-addons-for-gutenberg"),keepPlaceholderOnFocus:!0,value:E,className:"uagb-rating-desc",onChange:function(e){return f(e)}}),!0===j&&React.createElement(i.RichText,{tagName:"p",placeholder:Object(o.__)("Review Author","ultimate-addons-for-gutenberg"),keepPlaceholderOnFocus:!0,value:N,className:"uagb-rating-author",onChange:function(e){return h(e)}}),!0===O&&React.createElement("div",{className:"uagb-rating__source-wrap"},R),a.map((function(r,n){return!0===A&&React.createElement("div",{className:"uagb_review_entry",key:n},React.createElement(i.RichText,{style:{marginRight:"auto"},placeholder:Object(o.__)("Edit feature"),value:r.label,onChange:function(e){return s([].concat(u(a.slice(0,n)),[{label:e,value:r.value}],u(a.slice(n+1))))}}),React.createElement("div",{style:{marginLeft:"auto",minWidth:a.length>1?120:100}},a.length>1&&React.createElement("div",{className:"dashicons dashicons-trash",onClick:function(){var t=a.slice(0,n).concat(a.slice(n+1,a.length));s(t),e.setStateValue({average:t.map((function(e){return e.value})).reduce((function(e,t){return e+t}))/t.length})}}),React.createElement(l.a,{id:"".concat(t,"-").concat(n),key:n,value:r.value,limit:c,setValue:function(t){var i=[].concat(u(a.slice(0,n)),[{label:r.label,value:t}],u(a.slice(n+1)));s(i),w(n),e.setStateValue({average:i.map((function(e){return e.value})).reduce((function(e,t){return e+t}))/i.length})},inactiveStarColor:v,activeStarColor:b,selectedStarColor:p,starOutlineColor:y,state:e.starState,setStateValue:e.starSetStateValue})))})),!0===A&&React.createElement("div",{title:Object(o.__)("Insert new review entry"),onClick:function(){s([].concat(u(a),[{label:"",value:0}])),e.setStateValue({average:I/(a.length+1)})},className:"uagb_review_add_entry dashicons dashicons-plus-alt"}),React.createElement("div",{className:"uagb_review_summary"},React.createElement(i.RichText,{className:"uagb_review_summary_title",placeholder:Object(o.__)("Title of the summary goes here","ultimate-addons-for-gutenberg"),tagName:"p",onChange:function(e){return g(e)},value:r}),React.createElement("div",{className:"uagb_review_overall_value"},React.createElement(i.RichText,{placeholder:Object(o.__)("Summary of the review goes here","ultimate-addons-for-gutenberg"),onChange:function(e){return m(e)},value:n}),React.createElement("div",{className:"uagb_review_average"},React.createElement("span",{className:"uagb_review_rating"},Math.round(10*I)/10),React.createElement(l.a,{id:"".concat(t,"-average"),className:"uagb_review_average_stars",onHover:function(){return null},onClick:function(){return null},value:I,limit:c,inactiveStarColor:v,activeStarColor:b,selectedStarColor:p,starOutlineColor:y,state:e.starState,setStateValue:e.starSetStateValue})))))},g=a(0),d=a.n(g),f=a(11),h=a.n(f),v=a(282),b=0,p={injectType:"lazySingletonStyleTag",attributes:{id:"uagb-editor-styles"},insert:"head",singleton:!0},y={};y.locals=v.a.locals||{},y.use=function(){return b++||(s=h()(v.a,p)),y},y.unuse=function(){b>0&&!--b&&(s(),s=null)};var _=y;function S(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var a=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=a){var r,n,i=[],_n=!0,o=!1;try{for(a=a.call(e);!(_n=(r=a.next()).done)&&(i.push(r.value),!t||i.length!==t);_n=!0);}catch(e){o=!0,n=e}finally{try{_n||null==a.return||a.return()}finally{if(o)throw n}}return i}}(e,t)||function(e,t){if(e){if("string"==typeof e)return w(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);return"Object"===a&&e.constructor&&(a=e.constructor.name),"Map"===a||"Set"===a?Array.from(e):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?w(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function w(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,r=new Array(t);a<t;a++)r[a]=e[a];return r}var C=function(e){Object(g.useLayoutEffect)((function(){return _.use(),function(){_.unuse()}}),[]);var t=e=e.parentProps,a=t.attributes,r=a.block_id,i=a.authorName,o=a.itemName,l=a.description,u=a.parts,c=a.starCount,s=a.summaryTitle,f=a.summaryDescription,h=a.inactiveStarColor,v=a.activeStarColor,b=a.ctaLink,p=a.ctaTarget,y=a.rTitle,w=a.rContent,C=a.rAuthor,E=a.headingTag,N=a.mainimage,T=a.imgSize,R=a.showFeature,A=a.showAuthor,O=a.starOutlineColor,k=a.enableDescription,j=a.enableImage,I=t.setAttributes,x=t.isSelected,D=t.className,V={average:e.attributes.parts.map((function(e){return e.value})).reduce((function(e,t){return e+t}))/e.attributes.parts.length},z=S(Object(g.useState)(V),2),L=z[0],F=z[1],P={displayValue:e.value,displayColor:e.activeStarColor},M=S(Object(g.useState)(P),2),U=M[0],J=M[1],$="",H="";void 0!==e.attributes.mainimage&&null!==e.attributes.mainimage&&""!==e.attributes.mainimage&&($=e.attributes.mainimage.url,H=e.attributes.mainimage.title);var W="";if(""!==$){var q=e.attributes.mainimage.sizes,B=e.attributes.imgSize;W=void 0!==q&&void 0!==q[B]?q[B].url:$}var G="";return N&&N.url&&(G=d.a.createElement("img",{className:"uagb-review__source-image",src:W,title:H,alt:""})),d.a.createElement("div",{className:n()(D,"uagb-ratings__outer-wrap","uagb-block-".concat(r.substr(0,8)))},d.a.createElement(m,{rTitle:y,setTitle:function(e){return I({rTitle:e})},ctaLink:b,ctaTarget:p,rContent:w,setDescription:function(e){return I({rContent:e})},rAuthor:C,setAuthorName:function(e){return I({rAuthor:e})},headingTag:E,mainimage:N,imgSize:T,image_icon_html:G,isSelected:x,authorName:i,itemName:o,description:l,descriptionEnabled:k,ID:r,imageEnabled:j,items:u,starCount:c,summaryTitle:s,summaryDescription:f,inactiveStarColor:h,activeStarColor:v,selectedStarColor:v,starOutlineColor:O,setItemName:function(e){return I({itemName:e})},setImage:function(e){return I({imgID:e.id,imgURL:e.url,imgAlt:e.alt})},setItems:function(e){return I({parts:e})},setSummaryTitle:function(e){return I({summaryTitle:e})},setSummaryDescription:function(e){return I({summaryDescription:e})},hasFocus:x,setEditable:function(e){return F({editable:e})},setActiveStarIndex:function(e){return F({editedStar:e})},showfeature:R,showauthor:A,state:L,setStateValue:F,starState:U,starSetStateValue:J}))};t.default=d.a.memo(C)}}]);