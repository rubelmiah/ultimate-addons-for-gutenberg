(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{390:function(e,t,a){"use strict";a.r(t);var n=a(3),c=a.n(n),i=a(8),r=a(22),l=a(0),m=a(11),s=a(7);t.default=React.memo((function(e){var t=e=e.parentProps,a=t.setAttributes,n=t.insertBlocksAfter,o=t.mergeBlocks,u=t.onReplace,d=t.attributes,g=d.block_id,_=d.headingTag,b=d.timelinAlignment,v=d.icon,p=d.t_date,R=d.displayPostDate,h=d.dateFormat,f=d.time_heading,w=d.time_desc,N=!1,E=p;return"center"==b&&(N=!0),React.createElement("article",{className:c()("uagb-timeline__field uagb-timeline__field-wrap","uagb-timeline-child-".concat(g))},React.createElement("div",{className:e.attributes.content_class},React.createElement("div",{className:"uagb-timeline__marker uagb-timeline__out-view-icon"},React.createElement("span",{className:"uagb-timeline__icon-new uagb-timeline__out-view-icon "},Object(i.a)(v))),React.createElement("div",{className:e.attributes.dayalign_class},React.createElement("div",{className:"uagb-timeline__events-inner-new"},React.createElement("div",{className:"uagb-timeline__date-hide uagb-timeline__date-inner"},1!=R&&p&&React.createElement("div",{className:"uagb-timeline__inner-date-new"},"custom"!=h&&Object(r.dateI18n)(h,E)||E)),React.createElement("div",{className:"uagb-content"},React.createElement("div",{className:"uagb-timeline__heading-text"},React.createElement(s.RichText,{tagName:_,value:f,onChange:function(e){return a({time_heading:e})},placeholder:Object(l.__)("Write a Heading","ultimate-addons-for-gutenberg"),className:"uagb-timeline__heading",onMerge:o,onSplit:n?function(e,t){a({content:e});for(var c=arguments.length,i=new Array(c>2?c-2:0),r=2;r<c;r++)i[r-2]=arguments[r];n([].concat(i,[Object(m.createBlock)("core/paragraph",{content:t})]))}:void 0,onRemove:function(){return u([])}})),React.createElement(s.RichText,{tagName:"p",value:w,onChange:function(e){return a({time_desc:e})},placeholder:Object(l.__)("Write a Description","ultimate-addons-for-gutenberg"),className:"uagb-timeline-desc-content",onMerge:o,onSplit:function(t,a){for(var n=e,c=n.attributes,i=n.insertBlocksAfter,r=n.setAttributes,l=n.onReplace,s=arguments.length,o=new Array(s>2?s-2:0),u=2;u<s;u++)o[u-2]=arguments[u];a&&o.push(Object(m.createBlock)("core/paragraph",{content:a})),o.length&&i&&i(o);var d=c.content;t?d!==t&&r({content:t}):l([])},onRemove:function(){return u([])}}),React.createElement("div",{className:"uagb-timeline__arrow"})))),N&&React.createElement("div",{className:"uagb-timeline__date-new"},1!=R&&p&&React.createElement("div",{className:"uagb-timeline__date-new"},"custom"!=h&&Object(r.dateI18n)(h,E)||E))))}))}}]);