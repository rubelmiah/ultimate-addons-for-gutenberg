(window.webpackJsonp_ultimate_addons_for_gutenberg=window.webpackJsonp_ultimate_addons_for_gutenberg||[]).push([[19],{351:function(e,t,a){"use strict";var n=a(19),i=a.n(n)()((function(e){return e[1]}));i.push([e.i,'/*\r\n  Content Timeline Child.\r\n*/\n#wpwrap .edit-post-visual-editor .block-editor-block-list__block[data-type="uagb/content-timeline-child"] {\n  padding-left: 0;\n  padding-right: 0; }\n',""]),t.a=i},620:function(e,t,a){"use strict";a.r(t);var n,i=a(4),l=a.n(i),c=a(12),s=a(1),r=a.n(s),o=a(18),m=a.n(o),d=a(351),u=0,g={injectType:"lazySingletonStyleTag",attributes:{id:"uagb-editor-styles"},insert:"head",singleton:!0},_={};_.locals=d.a.locals||{},_.use=function(){return u++||(n=m()(d.a,g)),_},_.unuse=function(){u>0&&!--u&&(n(),n=null)};var b=_,p=a(20),h=a(2),v=a(7),w=a(5);const N=e=>{Object(s.useLayoutEffect)(()=>(b.use(),()=>{b.unuse()}),[]),e=e.parentProps;const{setAttributes:t,insertBlocksAfter:a,mergeBlocks:n,onReplace:i,attributes:{block_id:o,headingTag:m,timelinAlignment:d,icon:u,t_date:g,displayPostDate:_,dateFormat:N,time_heading:f,time_desc:E,content:k}}=e;let j=!1;const y=g;return"center"===d&&(j=!0),r.a.createElement("article",{className:l()("uagb-timeline__field uagb-timeline__field-wrap","uagb-timeline-child-"+o)},r.a.createElement("div",{className:e.attributes.content_class},r.a.createElement("div",{className:"uagb-timeline__marker uagb-timeline__out-view-icon"},r.a.createElement("span",{className:"uagb-timeline__icon-new uagb-timeline__out-view-icon "},Object(c.a)(u))),r.a.createElement("div",{className:e.attributes.dayalign_class},r.a.createElement("div",{className:"uagb-timeline__events-inner-new"},r.a.createElement("div",{className:"uagb-timeline__date-hide uagb-timeline__date-inner"},!0!==_&&g&&r.a.createElement("div",{className:"uagb-timeline__inner-date-new"},"custom"!==N&&Object(p.dateI18n)(N,y)||y)),r.a.createElement("div",{className:"uagb-content"},r.a.createElement("div",{className:"uagb-timeline__heading-text"},r.a.createElement(w.RichText,{tagName:m,value:f,onChange:e=>t({time_heading:e}),placeholder:Object(h.__)("Write a Heading","ultimate-addons-for-gutenberg"),className:"uagb-timeline__heading",onMerge:n,onSplit:a?(e,n,...i)=>{t({content:e}),a([...i,Object(v.createBlock)("core/paragraph",{content:n})])}:void 0,onRemove:()=>i([])})),r.a.createElement(w.RichText,{tagName:"p",value:E,onChange:e=>t({time_desc:e}),placeholder:Object(h.__)("Write a Description","ultimate-addons-for-gutenberg"),className:"uagb-timeline-desc-content",onMerge:n,onSplit:(e,n,...l)=>{n&&l.push(Object(v.createBlock)("core/paragraph",{content:n})),l.length&&a&&a(l),e?k!==e&&t({content:e}):i([])},onRemove:()=>i([])}),r.a.createElement("div",{className:"uagb-timeline__arrow"})))),j&&r.a.createElement("div",{className:"uagb-timeline__date-new"},!0!==_&&g&&r.a.createElement("div",{className:"uagb-timeline__date-new"},"custom"!==N&&Object(p.dateI18n)(N,y)||y))))};t.default=r.a.memo(N)}}]);