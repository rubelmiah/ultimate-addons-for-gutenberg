(window.webpackJsonp_ultimate_addons_for_gutenberg=window.webpackJsonp_ultimate_addons_for_gutenberg||[]).push([[104],{227:function(e,t,a){"use strict";var n=a(17),o=a.n(n)()((function(e){return e[1]}));o.push([e.i,"/**\r\n * #.# Editor Styles\r\n *\r\n * CSS for just Backend enqueued after style.scss\r\n * which makes it higher in priority.\r\n */\n.block-editor-page #wpwrap .edit-post-visual-editor ul.uagb-team__social-list {\n  display: flex;\n  padding: 0;\n  margin: 0;\n  list-style: none; }\n\n.block-editor-page #wpwrap .edit-post-visual-editor .uagb-team__social-icon a {\n  color: #333; }\n\n.wp-block-uagb-team .components-button:focus:enabled,\n.wp-block-uagb-team .components-button {\n  box-shadow: none;\n  background: transparent;\n  border: none; }\n\n.wp-block-uagb-team p.uagb-team__desc.block-editor-rich-text__editable {\n  margin: 0 0 10px; }\n",""]),t.a=o},462:function(e,t,a){"use strict";a.r(t);var n,o=a(4),i=a.n(o),r=a(1),l=a.n(r),c=a(2),s=a(12),u=a(6),g=a(5),m=a(16),b=a.n(m),p=a(227),d=0,_={injectType:"lazySingletonStyleTag",attributes:{id:"uagb-editor-styles"},insert:"head",singleton:!0},f={};f.locals=p.a.locals||{},f.use=function(){return d++||(n=b()(p.a,_)),f},f.unuse=function(){d>0&&!--d&&(n(),n=null)};var k=f,h=a(24);const v=e=>{Object(r.useLayoutEffect)(()=>(k.use(),()=>{k.unuse()}),[]),e=e.parentProps;const t=Object(h.a)(),{className:a,setAttributes:n,attributes:o,mergeBlocks:m,insertBlocksAfter:b,onReplace:p}=e,{align:d,tag:_,title:f,prefix:v,description_text:w,image:E,imgStyle:x,imgSize:N,imgPosition:j,twitterIcon:y,fbIcon:S,linkedinIcon:O,pinIcon:R,twitterLink:T,fbLink:B,linkedinLink:L,pinLink:C,socialTarget:I,socialEnable:z,stack:M}=o,W=l.a.createElement(l.a.Fragment,null,l.a.createElement(g.RichText,{tagName:_,value:f,className:"uagb-team__title",onChange:e=>n({title:e}),multiline:!1,placeholder:Object(c.__)("Write a Title","ultimate-addons-for-gutenberg"),onMerge:m,onSplit:b?(e,t,...a)=>{n({content:e}),b([...a,Object(u.createBlock)("core/paragraph",{content:t})])}:void 0,onRemove:()=>p([])}),l.a.createElement(g.RichText,{tagName:"div",value:v,className:"uagb-team__prefix",onChange:e=>n({prefix:e}),onMerge:m,placeholder:Object(c.__)("Write a Designation","ultimate-addons-for-gutenberg"),onSplit:b?(e,t,...a)=>{n({content:e}),b([...a,Object(u.createBlock)("core/paragraph",{content:t})])}:void 0,onRemove:()=>p([])})),A=(e,t,a)=>{const n=a?"_blank":"_self";return l.a.createElement("li",{className:"uagb-team__social-icon"},l.a.createElement("a",{href:t,"aria-label":e,target:n,title:"",rel:"noopener noreferrer"},Object(s.a)(e)))},D=l.a.createElement("ul",{className:"uagb-team__social-list"},""!==y&&A(y,T,I),""!==S&&A(S,B,I),""!==O&&A(O,L,I),""!==R&&A(R,C,I)),F=l.a.createElement(g.RichText,{tagName:"p",value:w,placeholder:Object(c.__)("Write a Description","ultimate-addons-for-gutenberg"),className:"uagb-team__desc",onChange:e=>n({description_text:e}),onMerge:m,onSplit:b?(e,t,...a)=>{n({content:e}),b([...a,Object(u.createBlock)("core/paragraph",{content:t})])}:void 0,onRemove:()=>p([])});let J="",P="";E&&(J=E.sizes,P=E.sizes&&J[N]?J[N].url:E.url);let q="";return""!==P&&(q=l.a.createElement("img",{className:"uagb-team__image-crop-"+x,src:P,alt:E.alt?E.alt:""})),l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:i()(a,"uagb-team__image-position-"+j,"uagb-team__align-"+d,"uagb-team__stack-"+M,"uagb-editor-preview-mode-"+t.toLowerCase(),"uagb-block-"+e.clientId.substr(0,8))},"left"===j&&q,l.a.createElement("div",{className:"uagb-team__content"},"above"===j&&q,W,F,z&&D),"right"===j&&q))};t.default=l.a.memo(v)}}]);