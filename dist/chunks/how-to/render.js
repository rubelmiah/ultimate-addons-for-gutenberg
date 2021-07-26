(window.webpackJsonp_ultimate_addons_for_gutenberg=window.webpackJsonp_ultimate_addons_for_gutenberg||[]).push([[56],{421:function(e,t,a){"use strict";var o=a(18),n=a.n(o)()((function(e){return e[1]}));n.push([e.i,'.editor-styles-wrapper [data-type="uagb/how-to"] .how-to-schema-notices {\n  padding: 8px 10px;\n  background-color: #fff8e5;\n  border-left: 5px solid #ffb901;\n  color: #32373c;\n  font-size: 13px;\n  line-height: 20px; }\n  .editor-styles-wrapper [data-type="uagb/how-to"] .how-to-schema-notices ul {\n    padding-bottom: 0;\n    margin: 0; }\n  .editor-styles-wrapper [data-type="uagb/how-to"] .how-to-schema-notices h6 {\n    margin: 0;\n    font-size: inherit;\n    line-height: inherit; }\n  .editor-styles-wrapper [data-type="uagb/how-to"] .how-to-schema-notices p {\n    margin: 15px 0 0;\n    color: #555d66;\n    font-size: inherit; }\n\n.wp-block-uagb-how-to .block-editor-button-block-appender {\n  width: 10%;\n  margin-top: 0;\n  margin-left: 20px; }\n\n.editor-styles-wrapper .uagb-howto__time-wrap h3,\n.editor-styles-wrapper .uagb-howto__cost-wrap h3,\n.editor-styles-wrapper .uagb-how-to-tools__wrap h3,\n.editor-styles-wrapper .uagb-how-to-steps__wrap h3 {\n  margin-top: 20px;\n  margin-bottom: 20px; }\n\n.editor-styles-wrapper .uagb-howto__time-wrap p,\n.editor-styles-wrapper .uagb-howto__cost-wrap p,\n.editor-styles-wrapper .uagb-how-to-tools__wrap p,\n.editor-styles-wrapper .uagb-how-to-steps__wrap p {\n  margin-top: 25px; }\n',""]),t.a=n},622:function(e,t,a){"use strict";a.r(t);var o,n=a(4),r=a.n(n),i=(a(131),a(2)),l=a(7),c=a(5),s=a(1),u=a.n(s),m=a(17),g=a.n(m),d=a(421),p=0,h={injectType:"lazySingletonStyleTag",attributes:{id:"uagb-editor-styles"},insert:"head",singleton:!0},b={};b.locals=d.a.locals||{},b.use=function(){return p++||(o=g()(d.a,h)),b},b.unuse=function(){p>0&&!--p&&(o(),o=null)};var w=b;function f(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function _(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?f(Object(a),!0).forEach((function(t){v(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):f(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function v(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var N=["uagb/info-box"],y=function(e){Object(s.useLayoutEffect)((function(){return w.use(),function(){w.unuse()}}),[]);var t=e=e.parentProps,a=t.className,o=t.attributes,n=t.setAttributes,m=t.insertBlocksAfter,g=t.mergeBlocks,d=t.onReplace,p=t.deviceType,h=t.attributes,b=h.currencyType,f=h.showEstcost,y=h.showTotaltime,E=h.showMaterials,O=h.showTools,x=h.toolsTitle,T=h.materialTitle,j=h.stepsTitle,S=h.tools,R=h.materials,k=h.timeNeeded,M=h.estCost,P=h.mainimage,C=h.headingTitle,q=h.headingDesc,D=h.headingTag,I=h.time,B=h.cost,F=h.timeInMins,H=h.timeInHours,z=h.timeInDays,A=h.timeInMonths,Y=h.timeInYears,G=function(e,t){for(var a=arguments.length,r=new Array(a>2?a-2:0),i=2;i<a;i++)r[i-2]=arguments[i];t&&r.push(Object(l.createBlock)("core/paragraph",{content:t})),r.length&&m&&m(r);var c=o.content;e?c!==e&&n({content:e}):d([])},J="",L="",U="";if(void 0!==o.mainimage&&null!==o.mainimage&&""!==o.mainimage&&(J=o.mainimage.url,L=o.mainimage.title),""!==J){var K=o.mainimage.sizes,Q=o.imgSize;U=void 0!==K&&void 0!==K[Q]?K[Q].url:J}var V="";P&&P.url&&(V=u.a.createElement("img",{className:"uagb-howto__source-image",src:U,title:L,alt:""}));var W=F||I,X=Y>1?Object(i.__)("Years","ultimate-addons-for-gutenberg"):Object(i.__)("Year","ultimate-addons-for-gutenberg"),Z=A>1?Object(i.__)(" Months ","ultimate-addons-for-gutenberg"):Object(i.__)(" Month ","ultimate-addons-for-gutenberg"),$=z>1?Object(i.__)(" Days ","ultimate-addons-for-gutenberg"):Object(i.__)(" Day ","ultimate-addons-for-gutenberg"),ee=H>1?Object(i.__)("Hours ","ultimate-addons-for-gutenberg"):Object(i.__)(" Hour ","ultimate-addons-for-gutenberg"),te=W>1?Object(i.__)(" Minutes ","ultimate-addons-for-gutenberg"):Object(i.__)(" Minute ","ultimate-addons-for-gutenberg");return u.a.createElement("div",{className:r()(a,"uagb-editor-preview-mode-".concat(p.toLowerCase()),"uagb-block-".concat(e.clientId.substr(0,8)),"uagb-how-to-main-wrap")},u.a.createElement(c.RichText,{tagName:D,placeholder:Object(i.__)("How to configure HowTo Schema in UAG?","ultimate-addons-for-gutenberg"),value:C,className:"uagb-howto-heading-text",multiline:!1,onChange:function(e){n({headingTitle:e})},onMerge:g,onSplit:m?function(e,t){n({content:e});for(var a=arguments.length,o=new Array(a>2?a-2:0),r=2;r<a;r++)o[r-2]=arguments[r];m([].concat(o,[Object(l.createBlock)("core/paragraph",{content:t})]))}:void 0,onRemove:function(){return d([])}}),u.a.createElement(c.RichText,{tagName:"p",placeholder:Object(i.__)("So to get started, you will just need to drag-n-drop the How-to Schema block in the Gutenberg editor. The How-to Schema block can be used on pages which contain a How-to in their title and describe steps to achieve certain requirements.","ultimate-addons-for-gutenberg"),value:q,className:"uagb-howto-desc-text",onChange:function(e){return n({headingDesc:e})},onMerge:g,onSplit:G,onRemove:function(){return d([])}}),u.a.createElement("div",{className:"uagb-howto__source-wrap"},V),u.a.createElement("span",{className:"uagb-howto__time-wrap"},y&&u.a.createElement(c.RichText,{tagName:"h4",placeholder:Object(i.__)("Total Time Needed ( Minutes ):","ultimate-addons-for-gutenberg"),value:k,className:"uagb-howto-timeNeeded-text",onChange:function(e){return n({timeNeeded:e})},onMerge:g,onSplit:G,onRemove:function(){return d([])}}),y&&u.a.createElement(u.a.Fragment,null,Y&&u.a.createElement(u.a.Fragment,null,u.a.createElement("p",{className:"uagb-howto-timeNeeded-value"}," ",Y),u.a.createElement("p",{className:"uagb-howto-timeINmin-text"}," ",X)),A&&u.a.createElement(u.a.Fragment,null,u.a.createElement("p",{className:"uagb-howto-timeNeeded-value"},A),u.a.createElement("p",{className:"uagb-howto-timeINmin-text"},Z)),z&&u.a.createElement(u.a.Fragment,null,u.a.createElement("p",{className:"uagb-howto-timeNeeded-value"},z),u.a.createElement("p",{className:"uagb-howto-timeINmin-text"},$)),H&&u.a.createElement(u.a.Fragment,null,u.a.createElement("p",{className:"uagb-howto-timeNeeded-value"},H),u.a.createElement("p",{className:"uagb-howto-timeINmin-text"},ee)),W&&u.a.createElement(u.a.Fragment,null,u.a.createElement("p",{className:"uagb-howto-timeNeeded-value"},W),u.a.createElement("p",{className:"uagb-howto-timeINmin-text"},te)))),u.a.createElement("span",{className:"uagb-howto__cost-wrap"},f&&u.a.createElement(c.RichText,{tagName:"h4",placeholder:Object(i.__)("Total Cost:","ultimate-addons-for-gutenberg"),value:M,className:"uagb-howto-estcost-text",onChange:function(e){return n({estCost:e})},onMerge:g,onSplit:G,onRemove:function(){return d([])}}),f&&u.a.createElement(c.RichText,{tagName:"p",placeholder:Object(i.__)("30","ultimate-addons-for-gutenberg"),value:B,className:"uagb-howto-estcost-value",onChange:function(e){return n({cost:e})},onMerge:g,onSplit:G,onRemove:function(){return d([])}}),f&&u.a.createElement(c.RichText,{tagName:"p",placeholder:Object(i.__)("USD","ultimate-addons-for-gutenberg"),value:b,className:"uagb-howto-estcost-type",onChange:function(e){return n({currencyType:e})},onMerge:g,onSplit:G,onRemove:function(){return d([])}})),u.a.createElement("div",{className:"uagb-how-to-tools__wrap"},O&&u.a.createElement(c.RichText,{tagName:"h4",placeholder:Object(i.__)("requirements tools:","ultimate-addons-for-gutenberg"),value:x,className:"uagb-howto-req-tools-text",onChange:function(e){return n({toolsTitle:e})},onMerge:g,onSplit:G,onRemove:function(){return d([])}}),O&&u.a.createElement("div",{className:"uagb-how-to-tools"},S.map((function(e,t){var a;return u.a.createElement("div",{className:r()("uagb-how-to-tools-".concat(t),"uagb-how-to-tools-child__wrapper"),key:t},u.a.createElement("div",{className:"uagb-tools"},u.a.createElement(c.RichText,(v(a={tagName:"div",placeholder:Object(i.__)("Requirements Tools:","ultimate-addons-for-gutenberg"),value:e.add_required_tools,onChange:function(e){!function(e,t){var a=S.map((function(a,o){return t===o&&(a=_(_({},a),e)),a}));n({tools:a})}({add_required_tools:e},t)},className:"uagb-tools__label"},"placeholder",Object(i.__)("Description","ultimate-addons-for-gutenberg")),v(a,"multiline",!1),v(a,"allowedFormats",["core/bold","core/italic","core/strikethrough"]),a))))}))),E&&u.a.createElement(c.RichText,{tagName:"h4",placeholder:Object(i.__)("requirements materials:","ultimate-addons-for-gutenberg"),value:T,className:"uagb-howto-req-materials-text",onChange:function(e){return n({materialTitle:e})},onMerge:g,onSplit:G,onRemove:function(){return d([])}}),E&&u.a.createElement(u.a.Fragment,null,R.map((function(e,t){var a;return u.a.createElement("div",{className:r()("uagb-how-to-materials-".concat(t),"uagb-how-to-materials-child__wrapper"),key:t},u.a.createElement("div",{className:"uagb-materials"},u.a.createElement(c.RichText,(v(a={tagName:"div",placeholder:Object(i.__)("Requirements Materials:","ultimate-addons-for-gutenberg"),value:e.add_required_materials,onChange:function(e){!function(e,t){var a=R.map((function(a,o){return t===o&&(a=_(_({},a),e)),a}));n({materials:a})}({add_required_materials:e},t)},className:"uagb-materials__label"},"placeholder",Object(i.__)("Description","ultimate-addons-for-gutenberg")),v(a,"multiline",!1),v(a,"allowedFormats",["core/bold","core/italic","core/strikethrough"]),a))))})))),u.a.createElement("div",{className:"uagb-how-to-steps__wrap"},u.a.createElement(c.RichText,{tagName:"h4",placeholder:Object(i.__)("requirements Steps:","ultimate-addons-for-gutenberg"),value:j,className:"uagb-howto-req-steps-text",onChange:function(e){return n({stepsTitle:e})},onMerge:g,onSplit:G,onRemove:function(){return d([])}}),u.a.createElement(c.InnerBlocks,{template:[["uagb/info-box",{infoBoxTitle:"Step 1",iconimgPosition:"left",source_type:"image",showPrefix:!1,seperatorStyle:"none",ctaType:"all",headingTag:"h4"}],["uagb/info-box",{infoBoxTitle:"Step 2",iconimgPosition:"left",source_type:"image",showPrefix:!1,seperatorStyle:"none",ctaType:"all",headingTag:"h4"}],["uagb/info-box",{infoBoxTitle:"Step 3",iconimgPosition:"left",source_type:"image",showPrefix:!1,seperatorStyle:"none",ctaType:"all",headingTag:"h4"}]],allowedBlocks:N})))};t.default=u.a.memo(y)}}]);