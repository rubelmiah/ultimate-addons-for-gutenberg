(window.webpackJsonp_ultimate_addons_for_gutenberg=window.webpackJsonp_ultimate_addons_for_gutenberg||[]).push([[57],{363:function(e,t,a){"use strict";var o=a(19),n=a.n(o)()((function(e){return e[1]}));n.push([e.i,'.editor-styles-wrapper [data-type="uagb/how-to"] .how-to-schema-notices {\n  padding: 8px 10px;\n  background-color: #fff8e5;\n  border-left: 5px solid #ffb901;\n  color: #32373c;\n  font-size: 13px;\n  line-height: 20px; }\n  .editor-styles-wrapper [data-type="uagb/how-to"] .how-to-schema-notices ul {\n    padding-bottom: 0;\n    margin: 0; }\n  .editor-styles-wrapper [data-type="uagb/how-to"] .how-to-schema-notices h6 {\n    margin: 0;\n    font-size: inherit;\n    line-height: inherit; }\n  .editor-styles-wrapper [data-type="uagb/how-to"] .how-to-schema-notices p {\n    margin: 15px 0 0;\n    color: #555d66;\n    font-size: inherit; }\n\n.wp-block-uagb-how-to .block-editor-button-block-appender {\n  width: 10%;\n  margin-top: 0;\n  margin-left: 20px; }\n\n.editor-styles-wrapper .uagb-howto__time-wrap h3,\n.editor-styles-wrapper .uagb-howto__cost-wrap h3,\n.editor-styles-wrapper .uagb-how-to-tools__wrap h3,\n.editor-styles-wrapper .uagb-how-to-steps__wrap h3 {\n  margin-top: 20px;\n  margin-bottom: 20px; }\n\n.editor-styles-wrapper .uagb-howto__time-wrap p,\n.editor-styles-wrapper .uagb-howto__cost-wrap p,\n.editor-styles-wrapper .uagb-how-to-tools__wrap p,\n.editor-styles-wrapper .uagb-how-to-steps__wrap p {\n  margin-top: 25px; }\n\n.editor-styles-wrapper .wp-block {\n  margin: 0;\n  max-width: unset; }\n',""]),t.a=n},600:function(e,t,a){"use strict";a.r(t);var o,n=a(4),r=a.n(n),l=(a(100),a(2)),s=a(6),i=a(5),c=a(1),m=a.n(c),u=a(18),g=a.n(u),d=a(363),p=0,h={injectType:"lazySingletonStyleTag",attributes:{id:"uagb-editor-styles"},insert:"head",singleton:!0},b={};b.locals=d.a.locals||{},b.use=function(){return p++||(o=g()(d.a,h)),b},b.unuse=function(){p>0&&!--p&&(o(),o=null)};var _=b,w=["uagb/how-to-step"];"yes"===uagb_blocks_info.uagb_old_user_less_than_2&&(w=["uagb/info-box","uagb/how-to-step"]);const N=e=>{Object(c.useLayoutEffect)(()=>(_.use(),()=>{_.unuse()}),[]),e=e.parentProps;const{className:t,attributes:a,setAttributes:o,insertBlocksAfter:n,mergeBlocks:u,onReplace:g,deviceType:d,attributes:{currencyType:p,showEstcost:h,showTotaltime:b,showMaterials:N,showTools:f,toolsTitle:v,materialTitle:x,stepsTitle:E,tools:y,materials:T,timeNeeded:j,estCost:O,mainimage:k,headingTitle:R,headingDesc:S,headingTag:C,time:M,cost:q,timeInMins:I,timeInHours:F,timeInDays:H,timeInMonths:z,timeInYears:B}}=e,D=(e,t,...r)=>{t&&r.push(Object(s.createBlock)("core/paragraph",{content:t})),r.length&&n&&n(r);const{content:l}=a;e?l!==e&&o({content:e}):g([])};let L="",U="",A="";if(void 0!==a.mainimage&&null!==a.mainimage&&""!==a.mainimage&&(L=a.mainimage.url,U=a.mainimage.title),""!==L){const e=a.mainimage.sizes,t=a.imgSize;A=void 0!==e&&void 0!==e[t]?e[t].url:L}let Y="";k&&k.url&&(Y=m.a.createElement("img",{className:"uagb-howto__source-image",src:A,title:U,alt:""}));const G=I||M,J=[["uagb/how-to-step",{name:"Step 1",description:Object(l.__)("Click here to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.","ultimate-addons-for-gutenberg")}],["uagb/how-to-step",{name:"Step 2",description:Object(l.__)("Click here to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.","ultimate-addons-for-gutenberg")}],["uagb/how-to-step",{name:"Step 3",description:Object(l.__)("Click here to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.","ultimate-addons-for-gutenberg")}]],P=B>1?Object(l.__)("Years","ultimate-addons-for-gutenberg"):Object(l.__)("Year","ultimate-addons-for-gutenberg"),K=z>1?Object(l.__)(" Months ","ultimate-addons-for-gutenberg"):Object(l.__)(" Month ","ultimate-addons-for-gutenberg"),Q=H>1?Object(l.__)(" Days ","ultimate-addons-for-gutenberg"):Object(l.__)(" Day ","ultimate-addons-for-gutenberg"),V=F>1?Object(l.__)("Hours ","ultimate-addons-for-gutenberg"):Object(l.__)(" Hour ","ultimate-addons-for-gutenberg"),W=G>1?Object(l.__)(" Minutes ","ultimate-addons-for-gutenberg"):Object(l.__)(" Minute ","ultimate-addons-for-gutenberg");return m.a.createElement("div",{className:r()(t,"uagb-editor-preview-mode-"+d.toLowerCase(),"uagb-block-"+e.clientId.substr(0,8),"uagb-how-to-main-wrap")},m.a.createElement(i.RichText,{tagName:C,placeholder:Object(l.__)("How to configure HowTo Schema in UAG?","ultimate-addons-for-gutenberg"),value:R,className:"uagb-howto-heading-text",multiline:!1,onChange:e=>{o({headingTitle:e})},onMerge:u,onSplit:n?(e,t,...a)=>{o({content:e}),n([...a,Object(s.createBlock)("core/paragraph",{content:t})])}:void 0,onRemove:()=>g([])}),m.a.createElement(i.RichText,{tagName:"p",placeholder:Object(l.__)("So to get started, you will just need to drag-n-drop the How-to block in the Gutenberg editor. The How-to block can be used on pages which contain a How-to in their title and describe steps to achieve certain requirements.","ultimate-addons-for-gutenberg"),value:S,className:"uagb-howto-desc-text",onChange:e=>o({headingDesc:e}),onMerge:u,onSplit:D,onRemove:()=>g([])}),Y,m.a.createElement("span",{className:"uagb-howto__time-wrap"},b&&m.a.createElement(i.RichText,{tagName:"h4",placeholder:Object(l.__)("Total Time Needed ( Minutes ):","ultimate-addons-for-gutenberg"),value:j,className:"uagb-howto-timeNeeded-text",onChange:e=>o({timeNeeded:e}),onMerge:u,onSplit:D,onRemove:()=>g([])}),b&&m.a.createElement(m.a.Fragment,null,B&&m.a.createElement(m.a.Fragment,null,m.a.createElement("p",{className:"uagb-howto-timeNeeded-value"}," ",B),m.a.createElement("p",{className:"uagb-howto-timeINmin-text"}," ",P)),z&&m.a.createElement(m.a.Fragment,null,m.a.createElement("p",{className:"uagb-howto-timeNeeded-value"},z),m.a.createElement("p",{className:"uagb-howto-timeINmin-text"},K)),H&&m.a.createElement(m.a.Fragment,null,m.a.createElement("p",{className:"uagb-howto-timeNeeded-value"},H),m.a.createElement("p",{className:"uagb-howto-timeINmin-text"},Q)),F&&m.a.createElement(m.a.Fragment,null,m.a.createElement("p",{className:"uagb-howto-timeNeeded-value"},F),m.a.createElement("p",{className:"uagb-howto-timeINmin-text"},V)),G&&m.a.createElement(m.a.Fragment,null,m.a.createElement("p",{className:"uagb-howto-timeNeeded-value"},G),m.a.createElement("p",{className:"uagb-howto-timeINmin-text"},W)))),m.a.createElement("span",{className:"uagb-howto__cost-wrap"},h&&m.a.createElement(i.RichText,{tagName:"h4",placeholder:Object(l.__)("Total Cost:","ultimate-addons-for-gutenberg"),value:O,className:"uagb-howto-estcost-text",onChange:e=>o({estCost:e}),onMerge:u,onSplit:D,onRemove:()=>g([])}),h&&m.a.createElement(i.RichText,{tagName:"p",placeholder:Object(l.__)("30","ultimate-addons-for-gutenberg"),value:q,className:"uagb-howto-estcost-value",onChange:e=>o({cost:e}),onMerge:u,onSplit:D,onRemove:()=>g([])}),h&&m.a.createElement(i.RichText,{tagName:"p",placeholder:Object(l.__)("USD","ultimate-addons-for-gutenberg"),value:p,className:"uagb-howto-estcost-type",onChange:e=>o({currencyType:e}),onMerge:u,onSplit:D,onRemove:()=>g([])})),f&&m.a.createElement(i.RichText,{tagName:"h4",placeholder:Object(l.__)("requirements tools:","ultimate-addons-for-gutenberg"),value:v,className:"uagb-howto-req-tools-text",onChange:e=>o({toolsTitle:e}),onMerge:u,onSplit:D,onRemove:()=>g([])}),f&&m.a.createElement(m.a.Fragment,null,y.map((e,t)=>m.a.createElement(i.RichText,{tagName:"div",placeholder:Object(l.__)("Requirements Tools:","ultimate-addons-for-gutenberg"),value:e.add_required_tools,onChange:e=>{((e,t)=>{const a=y.map((a,o)=>(t===o&&(a={...a,...e}),a));o({tools:a})})({add_required_tools:e},t)},className:"uagb-tools__label "+t,multiline:!1,allowedFormats:["core/bold","core/italic","core/strikethrough"],key:t}))),N&&m.a.createElement(i.RichText,{tagName:"h4",placeholder:Object(l.__)("requirements materials:","ultimate-addons-for-gutenberg"),value:x,className:"uagb-howto-req-materials-text",onChange:e=>o({materialTitle:e}),onMerge:u,onSplit:D,onRemove:()=>g([])}),N&&m.a.createElement(m.a.Fragment,null,T.map((e,t)=>m.a.createElement(i.RichText,{tagName:"div",placeholder:Object(l.__)("Requirements Materials:","ultimate-addons-for-gutenberg"),value:e.add_required_materials,onChange:e=>{((e,t)=>{const a=T.map((a,o)=>(t===o&&(a={...a,...e}),a));o({materials:a})})({add_required_materials:e},t)},className:"uagb-materials__label "+t,multiline:!1,allowedFormats:["core/bold","core/italic","core/strikethrough"],key:t}))),m.a.createElement(i.RichText,{tagName:"h4",placeholder:Object(l.__)("requirements Steps:","ultimate-addons-for-gutenberg"),value:E,className:"uagb-howto-req-steps-text",onChange:e=>o({stepsTitle:e}),onMerge:u,onSplit:D,onRemove:()=>g([])}),m.a.createElement(i.InnerBlocks,{template:J,allowedBlocks:w}))};t.default=m.a.memo(N)}}]);