(window.webpackJsonp_ultimate_addons_for_gutenberg=window.webpackJsonp_ultimate_addons_for_gutenberg||[]).push([[59],{283:function(e,t,a){"use strict";var o=a(16),n=a.n(o)()((function(e){return e[1]}));n.push([e.i,'.editor-styles-wrapper [data-type="uagb/how-to"] .how-to-schema-notices {\n  padding: 8px 10px;\n  background-color: #fff8e5;\n  border-left: 5px solid #ffb901;\n  color: #32373c;\n  font-size: 13px;\n  line-height: 20px; }\n  .editor-styles-wrapper [data-type="uagb/how-to"] .how-to-schema-notices ul {\n    padding-bottom: 0;\n    margin: 0; }\n  .editor-styles-wrapper [data-type="uagb/how-to"] .how-to-schema-notices h6 {\n    margin: 0;\n    font-size: inherit;\n    line-height: inherit; }\n  .editor-styles-wrapper [data-type="uagb/how-to"] .how-to-schema-notices p {\n    margin: 15px 0 0;\n    color: #555d66;\n    font-size: inherit; }\n\n.wp-block-uagb-how-to .block-editor-button-block-appender {\n  width: 10%;\n  margin-top: 0;\n  margin-left: 20px; }\n\n.editor-styles-wrapper .uagb-howto__time-wrap h3,\n.editor-styles-wrapper .uagb-howto__cost-wrap h3,\n.editor-styles-wrapper .uagb-how-to-tools__wrap h3,\n.editor-styles-wrapper .uagb-how-to-steps__wrap h3 {\n  margin-top: 20px;\n  margin-bottom: 20px; }\n\n.editor-styles-wrapper .uagb-howto__time-wrap p,\n.editor-styles-wrapper .uagb-howto__cost-wrap p,\n.editor-styles-wrapper .uagb-how-to-tools__wrap p,\n.editor-styles-wrapper .uagb-how-to-steps__wrap p {\n  margin-top: 25px; }\n\n.editor-styles-wrapper .wp-block {\n  margin: 0;\n  max-width: unset; }\n',""]),t.a=n},523:function(e,t,a){"use strict";a.r(t);var o,n=a(3),r=a.n(n),l=(a(121),a(1)),s=a(5),i=a(4),c=a(0),m=a.n(c),u=a(15),g=a.n(u),d=a(283),p=0,h={injectType:"lazySingletonStyleTag",attributes:{id:"uagb-editor-styles"},insert:"head",singleton:!0},b={};b.locals=d.a.locals||{},b.use=function(){return p++||(o=g()(d.a,h)),b},b.unuse=function(){p>0&&!--p&&(o(),o=null)};var _=b,w=a(10),N=["uagb/how-to-step"];"yes"===uagb_blocks_info.uagb_old_user_less_than_2&&(N=["uagb/info-box","uagb/how-to-step"]);const f=e=>{Object(c.useLayoutEffect)(()=>(_.use(),()=>{_.unuse()}),[]),e=e.parentProps;const t=Object(w.a)(),{className:a,attributes:o,setAttributes:n,insertBlocksAfter:u,mergeBlocks:g,onReplace:d,attributes:{currencyType:p,showEstcost:h,showTotaltime:b,showMaterials:f,showTools:v,toolsTitle:x,materialTitle:E,stepsTitle:y,tools:T,materials:j,timeNeeded:O,estCost:k,mainimage:R,headingTitle:S,headingDesc:C,headingTag:M,time:q,cost:I,timeInMins:F,timeInHours:H,timeInDays:z,timeInMonths:B,timeInYears:D}}=e,L=(e,t,...a)=>{t&&a.push(Object(s.createBlock)("core/paragraph",{content:t})),a.length&&u&&u(a);const{content:r}=o;e?r!==e&&n({content:e}):d([])};let U="",A="",Y="";if(void 0!==o.mainimage&&null!==o.mainimage&&""!==o.mainimage&&(U=o.mainimage.url,A=o.mainimage.title),""!==U){const e=o.mainimage.sizes,t=o.imgSize;Y=void 0!==e&&void 0!==e[t]?e[t].url:U}let G="";R&&R.url&&(G=m.a.createElement("img",{className:"uagb-howto__source-image",src:Y,title:A,alt:""}));const J=F||q,P=[["uagb/how-to-step",{name:"Step 1",description:Object(l.__)("Click here to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.","ultimate-addons-for-gutenberg")}],["uagb/how-to-step",{name:"Step 2",description:Object(l.__)("Click here to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.","ultimate-addons-for-gutenberg")}],["uagb/how-to-step",{name:"Step 3",description:Object(l.__)("Click here to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.","ultimate-addons-for-gutenberg")}]],K=D>1?Object(l.__)("Years","ultimate-addons-for-gutenberg"):Object(l.__)("Year","ultimate-addons-for-gutenberg"),Q=B>1?Object(l.__)(" Months ","ultimate-addons-for-gutenberg"):Object(l.__)(" Month ","ultimate-addons-for-gutenberg"),V=z>1?Object(l.__)(" Days ","ultimate-addons-for-gutenberg"):Object(l.__)(" Day ","ultimate-addons-for-gutenberg"),W=H>1?Object(l.__)("Hours ","ultimate-addons-for-gutenberg"):Object(l.__)(" Hour ","ultimate-addons-for-gutenberg"),X=J>1?Object(l.__)(" Minutes ","ultimate-addons-for-gutenberg"):Object(l.__)(" Minute ","ultimate-addons-for-gutenberg");return m.a.createElement("div",{className:r()(a,"uagb-editor-preview-mode-"+t.toLowerCase(),"uagb-block-"+e.clientId.substr(0,8),"uagb-how-to-main-wrap")},m.a.createElement(i.RichText,{tagName:M,placeholder:Object(l.__)("How to configure HowTo Schema in UAG?","ultimate-addons-for-gutenberg"),value:S,className:"uagb-howto-heading-text",multiline:!1,onChange:e=>{n({headingTitle:e})},onMerge:g,onSplit:u?(e,t,...a)=>{n({content:e}),u([...a,Object(s.createBlock)("core/paragraph",{content:t})])}:void 0,onRemove:()=>d([])}),m.a.createElement(i.RichText,{tagName:"p",placeholder:Object(l.__)("So to get started, you will just need to drag-n-drop the How-to block in the Gutenberg editor. The How-to block can be used on pages which contain a How-to in their title and describe steps to achieve certain requirements.","ultimate-addons-for-gutenberg"),value:C,className:"uagb-howto-desc-text",onChange:e=>n({headingDesc:e}),onMerge:g,onSplit:L,onRemove:()=>d([])}),G,m.a.createElement("span",{className:"uagb-howto__time-wrap"},b&&m.a.createElement(i.RichText,{tagName:"h4",placeholder:Object(l.__)("Total Time Needed ( Minutes ):","ultimate-addons-for-gutenberg"),value:O,className:"uagb-howto-timeNeeded-text",onChange:e=>n({timeNeeded:e}),onMerge:g,onSplit:L,onRemove:()=>d([])}),b&&m.a.createElement(m.a.Fragment,null,D&&m.a.createElement(m.a.Fragment,null,m.a.createElement("p",{className:"uagb-howto-timeNeeded-value"}," ",D),m.a.createElement("p",{className:"uagb-howto-timeINmin-text"}," ",K)),B&&m.a.createElement(m.a.Fragment,null,m.a.createElement("p",{className:"uagb-howto-timeNeeded-value"},B),m.a.createElement("p",{className:"uagb-howto-timeINmin-text"},Q)),z&&m.a.createElement(m.a.Fragment,null,m.a.createElement("p",{className:"uagb-howto-timeNeeded-value"},z),m.a.createElement("p",{className:"uagb-howto-timeINmin-text"},V)),H&&m.a.createElement(m.a.Fragment,null,m.a.createElement("p",{className:"uagb-howto-timeNeeded-value"},H),m.a.createElement("p",{className:"uagb-howto-timeINmin-text"},W)),J&&m.a.createElement(m.a.Fragment,null,m.a.createElement("p",{className:"uagb-howto-timeNeeded-value"},J),m.a.createElement("p",{className:"uagb-howto-timeINmin-text"},X)))),m.a.createElement("span",{className:"uagb-howto__cost-wrap"},h&&m.a.createElement(i.RichText,{tagName:"h4",placeholder:Object(l.__)("Total Cost:","ultimate-addons-for-gutenberg"),value:k,className:"uagb-howto-estcost-text",onChange:e=>n({estCost:e}),onMerge:g,onSplit:L,onRemove:()=>d([])}),h&&m.a.createElement(i.RichText,{tagName:"p",placeholder:Object(l.__)("30","ultimate-addons-for-gutenberg"),value:I,className:"uagb-howto-estcost-value",onChange:e=>n({cost:e}),onMerge:g,onSplit:L,onRemove:()=>d([])}),h&&m.a.createElement(i.RichText,{tagName:"p",placeholder:Object(l.__)("USD","ultimate-addons-for-gutenberg"),value:p,className:"uagb-howto-estcost-type",onChange:e=>n({currencyType:e}),onMerge:g,onSplit:L,onRemove:()=>d([])})),v&&m.a.createElement(i.RichText,{tagName:"h4",placeholder:Object(l.__)("requirements tools:","ultimate-addons-for-gutenberg"),value:x,className:"uagb-howto-req-tools-text",onChange:e=>n({toolsTitle:e}),onMerge:g,onSplit:L,onRemove:()=>d([])}),v&&m.a.createElement(m.a.Fragment,null,T.map((e,t)=>m.a.createElement(i.RichText,{tagName:"div",placeholder:Object(l.__)("Requirements Tools:","ultimate-addons-for-gutenberg"),value:e.add_required_tools,onChange:e=>{((e,t)=>{const a=T.map((a,o)=>(t===o&&(a={...a,...e}),a));n({tools:a})})({add_required_tools:e},t)},className:"uagb-tools__label "+t,multiline:!1,allowedFormats:["core/bold","core/italic","core/strikethrough"],key:t}))),f&&m.a.createElement(i.RichText,{tagName:"h4",placeholder:Object(l.__)("requirements materials:","ultimate-addons-for-gutenberg"),value:E,className:"uagb-howto-req-materials-text",onChange:e=>n({materialTitle:e}),onMerge:g,onSplit:L,onRemove:()=>d([])}),f&&m.a.createElement(m.a.Fragment,null,j.map((e,t)=>m.a.createElement(i.RichText,{tagName:"div",placeholder:Object(l.__)("Requirements Materials:","ultimate-addons-for-gutenberg"),value:e.add_required_materials,onChange:e=>{((e,t)=>{const a=j.map((a,o)=>(t===o&&(a={...a,...e}),a));n({materials:a})})({add_required_materials:e},t)},className:"uagb-materials__label "+t,multiline:!1,allowedFormats:["core/bold","core/italic","core/strikethrough"],key:t}))),m.a.createElement(i.RichText,{tagName:"h4",placeholder:Object(l.__)("requirements Steps:","ultimate-addons-for-gutenberg"),value:y,className:"uagb-howto-req-steps-text",onChange:e=>n({stepsTitle:e}),onMerge:g,onSplit:L,onRemove:()=>d([])}),m.a.createElement(i.InnerBlocks,{template:P,allowedBlocks:N}))};t.default=m.a.memo(f)}}]);