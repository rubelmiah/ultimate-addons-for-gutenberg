(window.webpackJsonp_ultimate_addons_for_gutenberg=window.webpackJsonp_ultimate_addons_for_gutenberg||[]).push([[73],{260:function(e,t,n){"use strict";var a=n(15),i=n.n(a)()((function(e){return e[1]}));i.push([e.i,"/**\n * Editor styles for the admin\n */\np.uagb-marketing-btn__prefix.block-editor-rich-text__editable {\n  margin-bottom: 0 !important; }\n\n#wpwrap .edit-post-visual-editor a.uagb-marketing-btn__link {\n  pointer-events: all; }\n\n.uagb-marketing-btn__align-text-center .uagb-marketing-btn__link {\n  text-align: center; }\n\n.uagb-marketing-btn__align-text-left .uagb-marketing-btn__link {\n  text-align: left; }\n\n.uagb-marketing-btn__align-text-right .uagb-marketing-btn__link {\n  text-align: right; }\n",""]),t.a=i},501:function(e,t,n){"use strict";n.r(t);var a,i=n(3),M=n.n(i),g=n(11),r=n(0),l=n.n(r),o=n(1),u=n(4),z=n(14),c=n.n(z),s=n(260),b=0,N={injectType:"lazySingletonStyleTag",attributes:{id:"uagb-editor-styles"},insert:"head",singleton:!0},m={};m.locals=s.a.locals||{},m.use=function(){return b++||(a=c()(s.a,N)),m},m.unuse=function(){b>0&&!--b&&(a(),a=null)};var L=m,w=n(10);const j=e=>{Object(r.useLayoutEffect)(()=>(L.use(),()=>{L.unuse()}),[]),e=e.parentProps;const t=Object(w.a)(),{attributes:n,setAttributes:a,className:i,mergeBlocks:z,insertBlocksAfter:c,createBlock:s,onReplace:b}=e,{isPreview:N,block_id:m,align:j,textAlign:d,heading:I,prefix:y,icon:D,iconPosition:x,titleTag:T}=n,k=l.a.createElement(l.a.Fragment,null,""!==D&&Object(g.a)(D)),C=l.a.createElement(l.a.Fragment,null,l.a.createElement(u.RichText,{placeholder:Object(o.__)("Add Button Title…","ultimate-addons-for-gutenberg"),value:I,tagName:T,onChange:e=>a({heading:e}),allowedFormats:["bold","italic","strikethrough"],className:"uagb-marketing-btn__title",onRemove:()=>b([]),multiline:!1,onMerge:z,onSplit:c?function(e,t){a({content:e});for(var n=arguments.length,i=new Array(n>2?n-2:0),M=2;M<n;M++)i[M-2]=arguments[M];c([...i,s("core/paragraph",{content:t})])}:void 0}));return N?l.a.createElement("img",{width:"100%",src:"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxNi4wLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DQo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB3aWR0aD0iMzUwcHgiIGhlaWdodD0iMzUwcHgiIHZpZXdCb3g9IjAgMCAzNTAgMzUwIiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAzNTAgMzUwIiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxwYXRoIGZpbGw9IiNEQkRDREUiIGQ9Ik0yOTQuMDA4LDE3NS42ODljMCwxOS4wNS0xNS40NDQsMzQuNDk0LTM0LjQ5NCwzNC40OTRIOTAuNDg2Yy0xOS4wNSwwLTM0LjQ5NC0xNS40NDQtMzQuNDk0LTM0LjQ5NHYtMS4zNzkNCgljMC0xOS4wNTEsMTUuNDQzLTM0LjQ5NCwzNC40OTQtMzQuNDk0aDE2OS4wMjhjMTkuMDUsMCwzNC40OTQsMTUuNDQzLDM0LjQ5NCwzNC40OTRWMTc1LjY4OXoiLz4NCjxnPg0KCTxwYXRoIGZpbGw9IiNCQkJEQzAiIGQ9Ik0yMzguNSwxNjYuODM0YzAsMS44NDEtMS40OTIsMy4zMzMtMy4zMzMsMy4zMzNIMTE0LjgzNGMtMS44NDIsMC0zLjMzNC0xLjQ5Mi0zLjMzNC0zLjMzM2wwLDANCgkJYzAtMS44NDIsMS40OTItMy4zMzQsMy4zMzQtMy4zMzRoMTIwLjMzM0MyMzcuMDA4LDE2My41LDIzOC41LDE2NC45OTIsMjM4LjUsMTY2LjgzNEwyMzguNSwxNjYuODM0eiIvPg0KCTxwYXRoIGZpbGw9IiNCQkJEQzAiIGQ9Ik0yNDUuMDA1LDE4My4xNjdjMCwxLjg0MS0xLjQ5MiwzLjMzMy0zLjMzMiwzLjMzM0gxMDguMzI5Yy0xLjg0MSwwLTMuMzMzLTEuNDkyLTMuMzMzLTMuMzMzbDAsMA0KCQljMC0xLjg0MiwxLjQ5Mi0zLjMzNCwzLjMzMy0zLjMzNGgxMzMuMzQ0QzI0My41MTMsMTc5LjgzMywyNDUuMDA1LDE4MS4zMjUsMjQ1LjAwNSwxODMuMTY3TDI0NS4wMDUsMTgzLjE2N3oiLz4NCjwvZz4NCjwvc3ZnPg0K"}):l.a.createElement("div",{className:M()(i,"uagb-marketing-btn__align-"+j,"uagb-marketing-btn__align-text-"+d,"uagb-marketing-btn__icon-"+x,"uagb-editor-preview-mode-"+t.toLowerCase(),"uagb-block-"+m)},l.a.createElement("a",{className:"uagb-marketing-btn__link"},"before"===x&&l.a.createElement(l.a.Fragment,null,k,C),"after"===x&&l.a.createElement(l.a.Fragment,null,C,k),l.a.createElement(u.RichText,{placeholder:Object(o.__)("Add Button Description…","ultimate-addons-for-gutenberg"),value:y,tagName:"p",onChange:e=>a({prefix:e}),allowedFormats:["bold","italic","strikethrough"],className:"uagb-marketing-btn__prefix",onRemove:()=>b([]),multiline:!1,onMerge:z,onSplit:c?function(e,t){a({content:e});for(var n=arguments.length,i=new Array(n>2?n-2:0),M=2;M<n;M++)i[M-2]=arguments[M];c([...i,s("core/paragraph",{content:t})])}:void 0})))};t.default=l.a.memo(j)}}]);