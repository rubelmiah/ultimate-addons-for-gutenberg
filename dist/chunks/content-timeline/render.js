(window.webpackJsonp_ultimate_addons_for_gutenberg=window.webpackJsonp_ultimate_addons_for_gutenberg||[]).push([[21],{353:function(e,t,n){"use strict";var a=n(19),i=n.n(a)()((function(e){return e[1]}));i.push([e.i,'/*\r\n  Content Timeline.\r\n*/\n#wpwrap .edit-post-visual-editor .block-editor-block-list__block[data-type="uagb/content-timeline"] {\n  padding: 15px; }\n',""]),t.a=i},622:function(e,t,n){"use strict";n.r(t);var a,i=n(4),l=n.n(i),s=n(44),o=n(1),c=n.n(o),u=n(5),r=n(18),m=n.n(r),d=n(353),b=0,_={injectType:"lazySingletonStyleTag",attributes:{id:"uagb-editor-styles"},insert:"head",singleton:!0},p={};p.locals=d.a.locals||{},p.use=function(){return b++||(a=m()(d.a,_)),p},p.unuse=function(){b>0&&!--b&&(a(),a=null)};var g=p;const w=["uagb/content-timeline-child"],f=e=>{Object(o.useLayoutEffect)(()=>(g.use(),()=>{g.unuse()}),[]),e=e.parentProps;const{className:t,deviceType:n,attributes:{tm_content:a,timelineItem:i}}=e,r=Object(o.useMemo)(()=>{const e=[];for(let t=0;t<i;t++)e.push(["uagb/content-timeline-child",a[t]]);return e},[i,a]);return c.a.createElement("div",{className:l()(t,"uagb-timeline__outer-wrap","uagb-editor-preview-mode-"+n.toLowerCase(),"uagb-block-"+e.clientId,"uagb-timeline__content-wrap",...Object(s.a)(e.attributes))},c.a.createElement("div",{className:"uagb-timeline__main"},c.a.createElement("div",{className:"uagb-timeline__days"},c.a.createElement(u.InnerBlocks,{template:r,templateLock:!1,allowedBlocks:w})),c.a.createElement("div",{className:"uagb-timeline__line"},c.a.createElement("div",{className:"uagb-timeline__line__inner"}))))};t.default=c.a.memo(f)}}]);