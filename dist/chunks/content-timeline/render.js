(window.webpackJsonp_ultimate_addons_for_gutenberg=window.webpackJsonp_ultimate_addons_for_gutenberg||[]).push([[23],{314:function(e,t,n){"use strict";var i=n(16),l=n.n(i)()((function(e){return e[1]}));l.push([e.i,'/*\n  Content Timeline.\n*/\n.block-editor-inner-blocks .block-editor-block-list__layout .block-editor-block-list__block {\n  padding: 0;\n  margin: 0;\n  max-width: unset; }\n\n@media screen and (max-width: 1023px) {\n  .block-editor-inner-blocks .uagb-timeline__center-block .uagb-timeline__day-new.uagb-timeline__day-right.uagb-timeline__events-inner-new {\n    left: -15px; }\n  .block-editor-inner-blocks .uagb-timeline__center-block .uagb-timeline__day-new.uagb-timeline__day-left.uagb-timeline__events-inner-new {\n    right: -15px; }\n  .block-editor-inner-blocks .uagb-timeline__left-block .uagb-timeline__day-new.uagb-timeline__day-right.uagb-timeline__events-inner-new {\n    right: -15px; }\n  .block-editor-inner-blocks .uagb-timeline__left-block .uagb-timeline__day-new.uagb-timeline__day-left.uagb-timeline__events-inner-new {\n    right: -15px; } }\n\n.edit-post-visual-editor .block-editor-block-list__block[data-type="uagb/content-timeline"] {\n  padding: 15px; }\n  .edit-post-visual-editor .block-editor-block-list__block[data-type="uagb/content-timeline"] .components-button svg {\n    fill: #fff;\n    width: 24px; }\n\n.edit-post-visual-editor .block-editor-block-list__block .uagb-timeline__outer-wrap.uagb-timeline__left-block .uagb-timeline__line {\n  right: auto;\n  left: 34px; }\n\n.edit-post-visual-editor .block-editor-block-list__block .uagb-timeline__outer-wrap.uagb-timeline__right-block .uagb-timeline__line {\n  right: 31px;\n  left: auto; }\n',""]),t.a=l},557:function(e,t,n){"use strict";n.r(t);var i,l=n(4),a=n.n(l),o=n(63),r=n(0),b=n.n(r),c=n(5),u=n(15),_=n.n(u),s=n(314),m=0,d={injectType:"lazySingletonStyleTag",attributes:{id:"uagb-editor-styles"},insert:"head",singleton:!0},g={};g.locals=s.a.locals||{},g.use=function(){return m++||(i=_()(s.a,d)),g},g.unuse=function(){m>0&&!--m&&(i(),i=null)};var k=g,p=n(11);const w=["uagb/content-timeline-child"],f=e=>{Object(r.useLayoutEffect)(()=>(k.use(),()=>{k.unuse()}),[]),e=e.parentProps;const t=Object(p.a)(),{className:n,attributes:{isPreview:i,tm_content:l,timelineItem:u}}=e,_=Object(r.useMemo)(()=>{const e=[];for(let t=0;t<u;t++)e.push(["uagb/content-timeline-child",l[t]]);return e},[u,l]),s=uagb_blocks_info.uagb_url+"/admin/assets/preview-images/content-timeline.png";return i?b.a.createElement("img",{width:"100%",src:s,alt:""}):b.a.createElement("div",{className:a()(n,"uagb-timeline__outer-wrap","uagb-editor-preview-mode-"+t.toLowerCase(),"uagb-block-"+e.clientId,"uagb-timeline__content-wrap",...Object(o.a)(e.attributes,t))},b.a.createElement(c.InnerBlocks,{template:_,templateLock:!1,allowedBlocks:w}),b.a.createElement("div",{className:"uagb-timeline__line"},b.a.createElement("div",{className:"uagb-timeline__line__inner"})))};t.default=b.a.memo(f)}}]);