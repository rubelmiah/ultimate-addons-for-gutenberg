(window.webpackJsonp_ultimate_addons_for_gutenberg=window.webpackJsonp_ultimate_addons_for_gutenberg||[]).push([[73],{257:function(e,t,n){"use strict";var a=n(15),i=n.n(a)()((function(e){return e[1]}));i.push([e.i,"/**\n * Editor styles for the admin\n */\np.uagb-marketing-btn__prefix.block-editor-rich-text__editable {\n  margin-bottom: 0 !important; }\n\n#wpwrap .edit-post-visual-editor a.uagb-marketing-btn__link {\n  pointer-events: all; }\n\n.uagb-marketing-btn__align-text-center .uagb-marketing-btn__link {\n  text-align: center; }\n\n.uagb-marketing-btn__align-text-left .uagb-marketing-btn__link {\n  text-align: left; }\n\n.uagb-marketing-btn__align-text-right .uagb-marketing-btn__link {\n  text-align: right; }\n",""]),t.a=i},496:function(e,t,n){"use strict";n.r(t);var a,i=n(3),r=n.n(i),l=n(11),o=n(0),g=n.n(o),u=n(1),c=n(4),s=n(14),b=n.n(s),m=n(257),_=0,d={injectType:"lazySingletonStyleTag",attributes:{id:"uagb-editor-styles"},insert:"head",singleton:!0},p={};p.locals=m.a.locals||{},p.use=function(){return _++||(a=b()(m.a,d)),p},p.unuse=function(){_>0&&!--_&&(a(),a=null)};var k=p,f=n(10);const h=e=>{Object(o.useLayoutEffect)(()=>(k.use(),()=>{k.unuse()}),[]),e=e.parentProps;const t=Object(f.a)(),{attributes:n,setAttributes:a,className:i,mergeBlocks:s,insertBlocksAfter:b,createBlock:m,onReplace:_}=e,{block_id:d,align:p,textAlign:h,heading:x,prefix:v,icon:w,iconPosition:E,titleTag:N}=n,j=g.a.createElement(g.a.Fragment,null,""!==w&&Object(l.a)(w)),y=g.a.createElement(g.a.Fragment,null,g.a.createElement(c.RichText,{placeholder:Object(u.__)("Add Button Title…","ultimate-addons-for-gutenberg"),value:x,tagName:N,onChange:e=>a({heading:e}),allowedFormats:["bold","italic","strikethrough"],className:"uagb-marketing-btn__title",onRemove:()=>_([]),multiline:!1,onMerge:s,onSplit:b?(e,t,...n)=>{a({content:e}),b([...n,m("core/paragraph",{content:t})])}:void 0}));return g.a.createElement("div",{className:r()(i,"uagb-marketing-btn__align-"+p,"uagb-marketing-btn__align-text-"+h,"uagb-marketing-btn__icon-"+E,"uagb-editor-preview-mode-"+t.toLowerCase(),"uagb-block-"+d)},g.a.createElement("a",{className:"uagb-marketing-btn__link"},"before"===E&&g.a.createElement(g.a.Fragment,null,j,y),"after"===E&&g.a.createElement(g.a.Fragment,null,y,j),g.a.createElement(c.RichText,{placeholder:Object(u.__)("Add Button Description…","ultimate-addons-for-gutenberg"),value:v,tagName:"p",onChange:e=>a({prefix:e}),allowedFormats:["bold","italic","strikethrough"],className:"uagb-marketing-btn__prefix",onRemove:()=>_([]),multiline:!1,onMerge:s,onSplit:b?(e,t,...n)=>{a({content:e}),b([...n,m("core/paragraph",{content:t})])}:void 0})))};t.default=g.a.memo(h)}}]);