(window.webpackJsonp_ultimate_addons_for_gutenberg=window.webpackJsonp_ultimate_addons_for_gutenberg||[]).push([[59],{307:function(e,t,a){"use strict";var o=a(16),n=a.n(o)()((function(e){return e[1]}));n.push([e.i,'.editor-styles-wrapper [data-type="uagb/how-to"] .how-to-schema-notices {\n  padding: 8px 10px;\n  background-color: #fff8e5;\n  border-left: 5px solid #ffb901;\n  color: #32373c;\n  font-size: 13px;\n  line-height: 20px; }\n  .editor-styles-wrapper [data-type="uagb/how-to"] .how-to-schema-notices ul {\n    padding-bottom: 0;\n    margin: 0; }\n  .editor-styles-wrapper [data-type="uagb/how-to"] .how-to-schema-notices h6 {\n    margin: 0;\n    font-size: inherit;\n    line-height: inherit; }\n  .editor-styles-wrapper [data-type="uagb/how-to"] .how-to-schema-notices p {\n    margin: 15px 0 0;\n    color: #555d66;\n    font-size: inherit; }\n\n.editor-styles-wrapper [data-type="uagb/how-to"] .wp-block {\n  margin: 0;\n  max-width: unset; }\n\n.wp-block-uagb-how-to .block-editor-button-block-appender {\n  width: 10%;\n  margin-top: 0;\n  margin-left: 20px; }\n\n.editor-styles-wrapper .uagb-howto__time-wrap h3,\n.editor-styles-wrapper .uagb-howto__cost-wrap h3,\n.editor-styles-wrapper .uagb-how-to-tools__wrap h3,\n.editor-styles-wrapper .uagb-how-to-steps__wrap h3 {\n  margin-top: 20px;\n  margin-bottom: 20px; }\n\n.editor-styles-wrapper .uagb-howto__time-wrap p,\n.editor-styles-wrapper .uagb-howto__cost-wrap p,\n.editor-styles-wrapper .uagb-how-to-tools__wrap p,\n.editor-styles-wrapper .uagb-how-to-steps__wrap p {\n  margin-top: 25px; }\n',""]),t.a=n},548:function(e,t,a){"use strict";a.r(t);var o,n=a(4),r=a.n(n),l=(a(131),a(1)),s=a(6),i=a(5),c=a(0),m=a.n(c),u=a(15),g=a.n(u),d=a(307),p=0,b={injectType:"lazySingletonStyleTag",attributes:{id:"uagb-editor-styles"},insert:"head",singleton:!0},h={};h.locals=d.a.locals||{},h.use=function(){return p++||(o=g()(d.a,b)),h},h.unuse=function(){p>0&&!--p&&(o(),o=null)};var w=h,_=a(11),f=a(3),N=["uagb/how-to-step"];"yes"===uagb_blocks_info.uagb_old_user_less_than_2&&(N=["uagb/info-box","uagb/how-to-step"]);const j=e=>{Object(c.useLayoutEffect)(()=>(w.use(),()=>{w.unuse()}),[]);const t=(e=e.parentProps).name.replace("uagb/",""),a=Object(_.a)(),{className:o,attributes:n,setAttributes:u,insertBlocksAfter:g,mergeBlocks:d,onReplace:p,attributes:{currencyType:b,showEstcost:h,showTotaltime:j,showMaterials:v,showTools:O,toolsTitle:y,materialTitle:x,stepsTitle:E,tools:T,materials:I,timeNeeded:k,estCost:M,mainimage:R,headingTitle:S,headingDesc:C,headingTag:q,time:H,cost:F,timeInMins:D,timeInHours:z,timeInDays:B,timeInMonths:Y,timeInYears:A}}=e,L=function(e,t){for(var a=arguments.length,o=new Array(a>2?a-2:0),r=2;r<a;r++)o[r-2]=arguments[r];t&&o.push(Object(s.createBlock)("core/paragraph",{content:t})),o.length&&g&&g(o);const{content:l}=n;e?l!==e&&u({content:e}):p([])};let U="",G="",J="";if(void 0!==n.mainimage&&null!==n.mainimage&&""!==n.mainimage&&(U=n.mainimage.url,G=n.mainimage.title),""!==U){const e=n.mainimage.sizes,t=n.imgSize;J=void 0!==e&&void 0!==e[t]?e[t].url:U}let P="";R&&R.url&&(P=m.a.createElement("img",{className:"uagb-howto__source-image",src:J,title:G,alt:""}));const K=Object(f.a)(D,"timeInMins",t)?Object(f.a)(D,"timeInMins",t):H,Q=[["uagb/how-to-step",{name:"Step 1",description:Object(l.__)("Click here to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.","ultimate-addons-for-gutenberg")}],["uagb/how-to-step",{name:"Step 2",description:Object(l.__)("Click here to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.","ultimate-addons-for-gutenberg")}],["uagb/how-to-step",{name:"Step 3",description:Object(l.__)("Click here to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.","ultimate-addons-for-gutenberg")}]],V=Object(f.a)(A,"timeInYears",t)>1?Object(l.__)("Years","ultimate-addons-for-gutenberg"):Object(l.__)("Year","ultimate-addons-for-gutenberg"),W=Object(f.a)(Y,"timeInMonths",t)>1?Object(l.__)(" Months ","ultimate-addons-for-gutenberg"):Object(l.__)(" Month ","ultimate-addons-for-gutenberg"),X=Object(f.a)(B,"timeInDays",t)>1?Object(l.__)(" Days ","ultimate-addons-for-gutenberg"):Object(l.__)(" Day ","ultimate-addons-for-gutenberg"),Z=Object(f.a)(z,"timeInHours",t)>1?Object(l.__)("Hours ","ultimate-addons-for-gutenberg"):Object(l.__)(" Hour ","ultimate-addons-for-gutenberg"),$=K>1?Object(l.__)(" Minutes ","ultimate-addons-for-gutenberg"):Object(l.__)(" Minute ","ultimate-addons-for-gutenberg");return m.a.createElement("div",{className:r()(o,"uagb-editor-preview-mode-"+a.toLowerCase(),"uagb-block-"+e.clientId.substr(0,8),"uagb-how-to-main-wrap")},m.a.createElement(i.RichText,{tagName:q,placeholder:Object(l.__)("How to configure HowTo Schema in UAG?","ultimate-addons-for-gutenberg"),value:S,className:"uagb-howto-heading-text",multiline:!1,onChange:e=>{u({headingTitle:e})},onMerge:d,onSplit:g?function(e,t){u({content:e});for(var a=arguments.length,o=new Array(a>2?a-2:0),n=2;n<a;n++)o[n-2]=arguments[n];g([...o,Object(s.createBlock)("core/paragraph",{content:t})])}:void 0,onRemove:()=>p([])}),m.a.createElement(i.RichText,{tagName:"p",placeholder:Object(l.__)("So to get started, you will just need to drag-n-drop the How-to block in the Gutenberg editor. The How-to block can be used on pages which contain a How-to in their title and describe steps to achieve certain requirements.","ultimate-addons-for-gutenberg"),value:C,className:"uagb-howto-desc-text",onChange:e=>u({headingDesc:e}),onMerge:d,onSplit:L,onRemove:()=>p([])}),P,m.a.createElement("span",{className:"uagb-howto__time-wrap"},j&&m.a.createElement(i.RichText,{tagName:"h4",placeholder:Object(l.__)("Total Time Needed ( Minutes ):","ultimate-addons-for-gutenberg"),value:k,className:"uagb-howto-timeNeeded-text",onChange:e=>u({timeNeeded:e}),onMerge:d,onSplit:L,onRemove:()=>p([])}),j&&m.a.createElement(m.a.Fragment,null,Object(f.a)(A,"timeInYears",t)&&m.a.createElement(m.a.Fragment,null,m.a.createElement("p",{className:"uagb-howto-timeNeeded-value"}," ",Object(f.a)(A,"timeInYears",t)),m.a.createElement("p",{className:"uagb-howto-timeINmin-text"}," ",V)),Object(f.a)(Y,"timeInMonths",t)&&m.a.createElement(m.a.Fragment,null,m.a.createElement("p",{className:"uagb-howto-timeNeeded-value"},Object(f.a)(Y,"timeInMonths",t)),m.a.createElement("p",{className:"uagb-howto-timeINmin-text"},W)),Object(f.a)(B,"timeInDays",t)&&m.a.createElement(m.a.Fragment,null,m.a.createElement("p",{className:"uagb-howto-timeNeeded-value"},Object(f.a)(B,"timeInDays",t)),m.a.createElement("p",{className:"uagb-howto-timeINmin-text"},X)),Object(f.a)(z,"timeInHours",t)&&m.a.createElement(m.a.Fragment,null,m.a.createElement("p",{className:"uagb-howto-timeNeeded-value"},Object(f.a)(z,"timeInHours",t)),m.a.createElement("p",{className:"uagb-howto-timeINmin-text"},Z)),K&&m.a.createElement(m.a.Fragment,null,m.a.createElement("p",{className:"uagb-howto-timeNeeded-value"},K),m.a.createElement("p",{className:"uagb-howto-timeINmin-text"},$)))),m.a.createElement("span",{className:"uagb-howto__cost-wrap"},h&&m.a.createElement(i.RichText,{tagName:"h4",placeholder:Object(l.__)("Total Cost:","ultimate-addons-for-gutenberg"),value:M,className:"uagb-howto-estcost-text",onChange:e=>u({estCost:e}),onMerge:d,onSplit:L,onRemove:()=>p([])}),h&&m.a.createElement(i.RichText,{tagName:"p",placeholder:Object(l.__)("30","ultimate-addons-for-gutenberg"),value:F,className:"uagb-howto-estcost-value",onChange:e=>u({cost:e}),onMerge:d,onSplit:L,onRemove:()=>p([])}),h&&m.a.createElement(i.RichText,{tagName:"p",placeholder:Object(l.__)("USD","ultimate-addons-for-gutenberg"),value:b,className:"uagb-howto-estcost-type",onChange:e=>u({currencyType:e}),onMerge:d,onSplit:L,onRemove:()=>p([])})),O&&m.a.createElement(i.RichText,{tagName:"h4",placeholder:Object(l.__)("requirements tools:","ultimate-addons-for-gutenberg"),value:y,className:"uagb-howto-req-tools-text",onChange:e=>u({toolsTitle:e}),onMerge:d,onSplit:L,onRemove:()=>p([])}),O&&m.a.createElement(m.a.Fragment,null,T.map((e,t)=>m.a.createElement(i.RichText,{tagName:"div",placeholder:Object(l.__)("Requirements Tools:","ultimate-addons-for-gutenberg"),value:e.add_required_tools,onChange:e=>{((e,t)=>{const a=T.map((a,o)=>(t===o&&(a={...a,...e}),a));u({tools:a})})({add_required_tools:e},t)},className:"uagb-tools__label "+t,multiline:!1,allowedFormats:["core/bold","core/italic","core/strikethrough"],key:t}))),v&&m.a.createElement(i.RichText,{tagName:"h4",placeholder:Object(l.__)("requirements materials:","ultimate-addons-for-gutenberg"),value:x,className:"uagb-howto-req-materials-text",onChange:e=>u({materialTitle:e}),onMerge:d,onSplit:L,onRemove:()=>p([])}),v&&m.a.createElement(m.a.Fragment,null,I.map((e,t)=>m.a.createElement(i.RichText,{tagName:"div",placeholder:Object(l.__)("Requirements Materials:","ultimate-addons-for-gutenberg"),value:e.add_required_materials,onChange:e=>{((e,t)=>{const a=I.map((a,o)=>(t===o&&(a={...a,...e}),a));u({materials:a})})({add_required_materials:e},t)},className:"uagb-materials__label "+t,multiline:!1,allowedFormats:["core/bold","core/italic","core/strikethrough"],key:t}))),m.a.createElement(i.RichText,{tagName:"h4",placeholder:Object(l.__)("requirements Steps:","ultimate-addons-for-gutenberg"),value:E,className:"uagb-howto-req-steps-text",onChange:e=>u({stepsTitle:e}),onMerge:d,onSplit:L,onRemove:()=>p([])}),m.a.createElement(i.InnerBlocks,{template:Q,allowedBlocks:N}))};t.default=m.a.memo(j)}}]);