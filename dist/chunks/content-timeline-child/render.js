(window.webpackJsonp_ultimate_addons_for_gutenberg=window.webpackJsonp_ultimate_addons_for_gutenberg||[]).push([[19],{313:function(e,t,n){"use strict";var a=n(19),i=n.n(a)()((function(e){return e[1]}));i.push([e.i,'/*\r\n  Content Timeline Child.\r\n*/\n#wpwrap .edit-post-visual-editor .block-editor-block-list__block[data-type="uagb/content-timeline-child"] {\n  padding-left: 0;\n  padding-right: 0; }\n',""]),t.a=i},533:function(e,t,n){"use strict";n.r(t);var a,i=n(4),l=n.n(i),c=n(12),o=n(1),r=n.n(o),s=n(18),u=n.n(s),d=n(313),m=0,g={injectType:"lazySingletonStyleTag",attributes:{id:"uagb-editor-styles"},insert:"head",singleton:!0},_={};_.locals=d.a.locals||{},_.use=function(){return m++||(a=u()(d.a,g)),_},_.unuse=function(){m>0&&!--m&&(a(),a=null)};var b=_,p=n(20),h=n(2),v=n(6),f=n(5);const w=e=>{Object(o.useLayoutEffect)(()=>(b.use(),()=>{b.unuse()}),[]),e=e.parentProps;const{setAttributes:t,insertBlocksAfter:n,mergeBlocks:a,onReplace:i,attributes:{block_id:s,headingTag:u,timelinAlignment:d,icon:m,t_date:g,displayPostDate:_,dateFormat:w,time_heading:k,time_desc:E,content:N}}=e;let j=!1;const y=g;return"center"===d&&(j=!0),r.a.createElement("article",{className:l()("wp-block-uagb-content-timeline-child uagb-timeline__field","uagb-timeline-child-"+s,e.attributes.content_class)},r.a.createElement("div",{className:"uagb-timeline__marker uagb-timeline__out-view-icon"},Object(c.a)(m)),r.a.createElement("div",{className:l()(e.attributes.dayalign_class,"uagb-timeline__events-inner-new")},!0!==_&&g&&r.a.createElement("div",{className:"uagb-timeline__date-hide uagb-timeline__inner-date-new"},"custom"!==w&&Object(p.dateI18n)(w,y)||y),r.a.createElement(f.RichText,{tagName:u,value:k,onChange:e=>t({time_heading:e}),placeholder:Object(h.__)("Write a Heading","ultimate-addons-for-gutenberg"),className:"uagb-timeline__heading",onMerge:a,onSplit:n?(e,a,...i)=>{t({content:e}),n([...i,Object(v.createBlock)("core/paragraph",{content:a})])}:void 0,onRemove:()=>i([])}),r.a.createElement(f.RichText,{tagName:"p",value:E,onChange:e=>t({time_desc:e}),placeholder:Object(h.__)("Write a Description","ultimate-addons-for-gutenberg"),className:"uagb-timeline-desc-content",onMerge:a,onSplit:(e,a,...l)=>{a&&l.push(Object(v.createBlock)("core/paragraph",{content:a})),l.length&&n&&n(l),e?N!==e&&t({content:e}):i([])},onRemove:()=>i([])}),r.a.createElement("div",{className:"uagb-timeline__arrow"})),j&&r.a.createElement("div",{className:"uagb-timeline__date-new"},!0!==_&&g&&r.a.createElement(r.a.Fragment,null,"custom"!==w&&Object(p.dateI18n)(w,y)||y)))};t.default=r.a.memo(w)}}]);