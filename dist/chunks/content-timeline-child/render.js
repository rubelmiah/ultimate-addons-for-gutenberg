(window.webpackJsonp_ultimate_addons_for_gutenberg=window.webpackJsonp_ultimate_addons_for_gutenberg||[]).push([[17],{306:function(e,t,n){"use strict";var a=n(15),i=n.n(a)()((function(e){return e[1]}));i.push([e.i,'/*\r\n  Content Timeline Child.\r\n*/\n#wpwrap .edit-post-visual-editor .block-editor-block-list__block[data-type="uagb/content-timeline-child"] {\n  padding-left: 0px;\n  padding-right: 0px; }\n',""]),t.a=i},478:function(e,t,n){"use strict";n.r(t);var a,i=n(3),c=n.n(i),l=n(12),r=n(1),o=n.n(r),s=n(14),u=n.n(s),m=n(306),d=0,g={injectType:"lazySingletonStyleTag",attributes:{id:"uagb-editor-styles"},insert:"head",singleton:!0},_={};_.locals=m.a.locals||{},_.use=function(){return d++||(a=u()(m.a,g)),_},_.unuse=function(){d>0&&!--d&&(a(),a=null)};var b=_,p=n(18),f=n(2),v=n(5),h=n(4),w=function(e){Object(r.useLayoutEffect)((function(){return b.use(),function(){b.unuse()}}),[]);var t=e=e.parentProps,n=t.setAttributes,a=t.insertBlocksAfter,i=t.mergeBlocks,s=t.onReplace,u=t.attributes,m=u.block_id,d=u.headingTag,g=u.timelinAlignment,_=u.icon,w=u.t_date,N=u.displayPostDate,E=u.dateFormat,k=u.time_heading,y=u.time_desc,j=u.content,O=!1,T=w;return"center"==g&&(O=!0),o.a.createElement("article",{className:c()("uagb-timeline__field uagb-timeline__field-wrap","uagb-timeline-child-".concat(m))},o.a.createElement("div",{className:e.attributes.content_class},o.a.createElement("div",{className:"uagb-timeline__marker uagb-timeline__out-view-icon"},o.a.createElement("span",{className:"uagb-timeline__icon-new uagb-timeline__out-view-icon "},Object(l.a)(_))),o.a.createElement("div",{className:e.attributes.dayalign_class},o.a.createElement("div",{className:"uagb-timeline__events-inner-new"},o.a.createElement("div",{className:"uagb-timeline__date-hide uagb-timeline__date-inner"},1!=N&&w&&o.a.createElement("div",{className:"uagb-timeline__inner-date-new"},"custom"!=E&&Object(p.dateI18n)(E,T)||T)),o.a.createElement("div",{className:"uagb-content"},o.a.createElement("div",{className:"uagb-timeline__heading-text"},o.a.createElement(h.RichText,{tagName:d,value:k,onChange:function(e){return n({time_heading:e})},placeholder:Object(f.__)("Write a Heading","ultimate-addons-for-gutenberg"),className:"uagb-timeline__heading",onMerge:i,onSplit:a?function(e,t){n({content:e});for(var i=arguments.length,c=new Array(i>2?i-2:0),l=2;l<i;l++)c[l-2]=arguments[l];a([].concat(c,[Object(v.createBlock)("core/paragraph",{content:t})]))}:void 0,onRemove:function(){return s([])}})),o.a.createElement(h.RichText,{tagName:"p",value:y,onChange:function(e){return n({time_desc:e})},placeholder:Object(f.__)("Write a Description","ultimate-addons-for-gutenberg"),className:"uagb-timeline-desc-content",onMerge:i,onSplit:function(e,t){for(var i=arguments.length,c=new Array(i>2?i-2:0),l=2;l<i;l++)c[l-2]=arguments[l];t&&c.push(Object(v.createBlock)("core/paragraph",{content:t})),c.length&&a&&a(c),e?j!==e&&n({content:e}):s([])},onRemove:function(){return s([])}}),o.a.createElement("div",{className:"uagb-timeline__arrow"})))),O&&o.a.createElement("div",{className:"uagb-timeline__date-new"},1!=N&&w&&o.a.createElement("div",{className:"uagb-timeline__date-new"},"custom"!=E&&Object(p.dateI18n)(E,T)||T))))};t.default=o.a.memo(w)}}]);