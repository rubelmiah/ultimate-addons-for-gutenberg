(window.webpackJsonp_ultimate_addons_for_gutenberg=window.webpackJsonp_ultimate_addons_for_gutenberg||[]).push([[65],{301:function(e,t,a){"use strict";var r=a(19),n=a.n(r)()((function(e){return e[1]}));n.push([e.i,"/**\r\n * #.# Editor Styles\r\n *\r\n * CSS for just Backend enqueued after style.scss\r\n * which makes it higher in priority.\r\n */\n.block-editor-page #wpwrap .edit-post-visual-editor a.uagb-infobox-link-wrap {\n  z-index: -1;\n  color: inherit; }\n\n.block-editor-page #wpwrap .uagb-ifb-title-wrap h1,\n.block-editor-page #wpwrap .uagb-ifb-title-wrap h2,\n.block-editor-page #wpwrap .uagb-ifb-title-wrap h3,\n.block-editor-page #wpwrap .uagb-ifb-title-wrap h4,\n.block-editor-page #wpwrap .uagb-ifb-title-wrap h5,\n.block-editor-page #wpwrap .uagb-ifb-title-wrap h6 {\n  margin-top: 0; }\n",""]),t.a=n},493:function(e,t,a){"use strict";a.r(t);var r,n=a(4),i=a.n(n),l=a(125),o=a(1),s=a.n(o),b=a(26),c=a(27),u=a(127),p=a(126),g=a(124),m=a(128),f=a(25),w=a(18),d=a.n(w),E=a(301),h=0,_={injectType:"lazySingletonStyleTag",attributes:{id:"uagb-editor-styles"},insert:"head",singleton:!0},k={};k.locals=E.a.locals||{},k.use=function(){return h++||(r=d()(E.a,_)),k},k.unuse=function(){h>0&&!--h&&(r(),r=null)};var v=k;const y=e=>{Object(o.useLayoutEffect)(()=>(v.use(),()=>{v.unuse()}),[]),e=e.parentProps;const{attributes:t,setAttributes:a,deviceType:r}=e,{icon:n,iconimgPosition:w,source_type:d,seperatorPosition:E,seperatorStyle:h,ctaType:_,showPrefix:k,showTitle:y,showDesc:x,block_id:F}=t;let N="";N="icon"===d&&""!==n?s.a.createElement(g.a,{attributes:t}):s.a.createElement(m.a,{attributes:t});let S=N,A=E;const T=s.a.createElement(p.a,{attributes:t});let j=!0;"after_icon"!==E||"above-title"!==w&&"below-title"!==w||(j=!1,S=s.a.createElement(s.a.Fragment,null,N,"none"!==h&&T)),"after_icon"!==E||"above-title"===w&&"below-title"===w||(A="after_title"),"below-title"===w&&"after_title"===E&&(j=!1,S=s.a.createElement(s.a.Fragment,null,"none"!==h&&T,N));const P=s.a.createElement(s.a.Fragment,null,"none"!==h&&"after_title"===A&&j&&T,x&&s.a.createElement(c.a,{attributes:t,setAttributes:a,props:e}),"none"!==h&&"after_desc"===A&&T,s.a.createElement(u.a,{attributes:t,setAttributes:a})),L=s.a.createElement("div",{className:"uagb-ifb-title-wrap"},k&&s.a.createElement(f.a,{attributes:t,setAttributes:a,props:e}),"none"!==h&&"after_prefix"===A&&T,y&&s.a.createElement(b.a,{attributes:t,setAttributes:a,props:e})),z=s.a.createElement(s.a.Fragment,null,"left"===w&&S,s.a.createElement("div",{className:"uagb-ifb-content"},"above-title"===w&&S,("above-title"===w||"below-title"===w)&&L,"below-title"===w&&S,("above-title"===w||"below-title"===w)&&P,"left-title"===w&&s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:"uagb-ifb-left-title-image"},S,L),P),"right-title"===w&&s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:"uagb-ifb-right-title-image"},L,S),P),("left"===w||"right"===w)&&s.a.createElement(s.a.Fragment,null,L,P)),"right"===w&&S);return s.a.createElement("div",{className:i()("uagb-block-"+F,"uagb-editor-preview-mode-"+r.toLowerCase(),"uagb-infobox__content-wrap","all"===_?" uagb-infobox_cta-type-all":"",...Object(l.a)(t))},"all"===_&&s.a.createElement(s.a.Fragment,null,s.a.createElement("a",{className:"uagb-infobox-link-wrap uagb-infbox__link-to-all","aria-label":"Infobox Link",rel:"noopener noreferrer",href:"/"}),z),"all"!==_&&z)};t.default=s.a.memo(y)}}]);