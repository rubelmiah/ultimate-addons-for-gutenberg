(window.webpackJsonp_ultimate_addons_for_gutenberg=window.webpackJsonp_ultimate_addons_for_gutenberg||[]).push([[21],{292:function(e,t,n){"use strict";var a=n(17),i=n.n(a)()((function(e){return e[1]}));i.push([e.i,'/*\n  Content Timeline Child.\n*/\n#wpwrap .edit-post-visual-editor .block-editor-block-list__block[data-type="uagb/content-timeline-child"] {\n  padding-left: 0;\n  padding-right: 0; }\n',""]),t.a=i},534:function(e,t,n){"use strict";n.r(t);var a,i=n(3),l=n.n(i),c=n(12),o=n(0),r=n.n(o),s=n(16),u=n.n(s),d=n(292),m=0,g={injectType:"lazySingletonStyleTag",attributes:{id:"uagb-editor-styles"},insert:"head",singleton:!0},_={};_.locals=d.a.locals||{},_.use=function(){return m++||(a=u()(d.a,g)),_},_.unuse=function(){m>0&&!--m&&(a(),a=null)};var b=_,p=n(21),h=n(1),f=n(5),v=n(4);const w=e=>{Object(o.useLayoutEffect)(()=>(b.use(),()=>{b.unuse()}),[]),e=e.parentProps;const{setAttributes:t,insertBlocksAfter:n,mergeBlocks:a,onReplace:i,attributes:{block_id:s,headingTag:u,timelinAlignment:d,icon:m,t_date:g,displayPostDate:_,dateFormat:w,time_heading:k,time_desc:y,content:E}}=e;let N=!1;const j=g;return"center"===d&&(N=!0),r.a.createElement("article",{className:l()("wp-block-uagb-content-timeline-child uagb-timeline__field","uagb-timeline-child-"+s,e.attributes.content_class)},r.a.createElement("div",{className:"uagb-timeline__marker uagb-timeline__out-view-icon"},Object(c.a)(m)),r.a.createElement("div",{className:l()(e.attributes.dayalign_class,"uagb-timeline__events-inner-new")},!0!==_&&g&&r.a.createElement("div",{className:"uagb-timeline__date-hide uagb-timeline__inner-date-new"},"custom"!==w&&Object(p.dateI18n)(w,j)||j),r.a.createElement(v.RichText,{tagName:u,value:k,onChange:e=>t({time_heading:e}),placeholder:Object(h.__)("Write a Heading","ultimate-addons-for-gutenberg"),className:"uagb-timeline__heading",onMerge:a,onSplit:n?function(e,a){t({content:e});for(var i=arguments.length,l=new Array(i>2?i-2:0),c=2;c<i;c++)l[c-2]=arguments[c];n([...l,Object(f.createBlock)("core/paragraph",{content:a})])}:void 0,onRemove:()=>i([])}),r.a.createElement(v.RichText,{tagName:"p",value:y,onChange:e=>t({time_desc:e}),placeholder:Object(h.__)("Write a Description","ultimate-addons-for-gutenberg"),className:"uagb-timeline-desc-content",onMerge:a,onSplit:function(e,a){for(var l=arguments.length,c=new Array(l>2?l-2:0),o=2;o<l;o++)c[o-2]=arguments[o];a&&c.push(Object(f.createBlock)("core/paragraph",{content:a})),c.length&&n&&n(c),e?E!==e&&t({content:e}):i([])},onRemove:()=>i([])}),r.a.createElement("div",{className:"uagb-timeline__arrow"})),N&&r.a.createElement("div",{className:"uagb-timeline__date-new"},!0!==_&&g&&r.a.createElement(r.a.Fragment,null,"custom"!==w&&Object(p.dateI18n)(w,j)||j)))};t.default=r.a.memo(w)}}]);