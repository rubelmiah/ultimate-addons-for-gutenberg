(window.webpackJsonp_ultimate_addons_for_gutenberg=window.webpackJsonp_ultimate_addons_for_gutenberg||[]).push([[83],{265:function(e,t,a){"use strict";var n=a(15),r=a.n(n)()((function(e){return e[1]}));r.push([e.i,"/**\n * #.# Editor Styles\n *\n * CSS for just Backend enqueued after style.scss\n * which makes it higher in priority.\n */\n.edit-post-visual-editor .block-editor-block-list__block .uagb-timeline__field {\n  margin: 0; }\n  .edit-post-visual-editor .block-editor-block-list__block .uagb-timeline__field a {\n    color: inherit;\n    text-decoration: none;\n    font-size: inherit;\n    margin: 0; }\n\n.edit-post-visual-editor .block-editor-block-list__block a {\n  pointer-events: none; }\n",""]),t.a=r},468:function(e,t,a){"use strict";a.r(t);var n=a(3),r=a.n(n),i=a(41),l=a(36),s=a(37),o=a(47),c=a(1),u=a(0),m=a.n(u);const _=e=>{const t=e.attributes.headingTag,{post:a,attributes:n}=e;let r="_self";return n.linkTarget&&(r="_blank"),m.a.createElement(t,{className:"uagb-timeline__heading"},m.a.createElement("a",{href:a.link,target:r,rel:"noopener noreferrer"},Object(o.decodeEntities)(a.title.rendered.trim())||Object(c.__)("(Untitled)")))};var b=m.a.memo(_);const d=e=>{const{post:t,attributes:a}=e;if(a.displayPostImage&&void 0!==t.uagb_featured_image_src&&a.imageSize&&t.uagb_featured_image_src[a.imageSize]){const e=t.uagb_featured_image_src[a.imageSize];let n="_self";return a.linkTarget&&(n="_blank"),m.a.createElement("a",{href:t.link,target:n,rel:"noopener noreferrer",style:{textAlign:a.align},className:"uagb-timeline__image"},m.a.createElement("img",{src:e[0],alt:Object(o.decodeEntities)(t.title.rendered.trim())||Object(c.__)("(Untitled)")}))}return null};var g=m.a.memo(d);const p=e=>{const{post:t,attributes:a}=e;let n;if(a.displayPostExcerpt&&t.uagb_excerpt){n=t.uagb_excerpt.split(/\s+/).slice(0,a.exerptLength).join(" ");let e="";return a.displayPostLink&&(e=a.contentSpace+"px"),m.a.createElement("div",{className:"uagb-timeline-desc-content",dangerouslySetInnerHTML:{__html:n},style:{marginBottom:e}})}return null};var f=m.a.memo(p);const E=e=>{const{post:t,attributes:a}=e;let n="_self";return a.linkTarget&&(n="_blank"),a.displayPostLink?m.a.createElement("a",{className:"uagb-timeline__link",href:t.link,target:n,rel:"noopener noreferrer"},a.readMoreText):null};var k=m.a.memo(E);const h=e=>{const{post:t,attributes:a}=e;let n="_self";return a.linkTarget&&(n="_blank"),m.a.createElement(m.a.Fragment,null,a.displayPostAuthor&&void 0!==t.uagb_author_info&&m.a.createElement(m.a.Fragment,null,m.a.createElement("span",{className:"dashicons-admin-users dashicons"}),m.a.createElement("a",{className:"uagb-timeline__author-link",target:n,href:t.uagb_author_info.author_link,rel:"noopener noreferrer"},t.uagb_author_info.display_name)))};var v=m.a.memo(h),y=a(20);const j=e=>{const{post:t,attributes:a,dateClass:n}=e;return m.a.createElement(m.a.Fragment,null,m.a.createElement("div",{dateTime:Object(y.format)("c",t.date_gmt),className:n,style:{color:a.dateColor}},a.displayPostDate&&t.date_gmt&&Object(y.dateI18n)(a.dateFormat,t.date_gmt)))};var w=m.a.memo(j),N=a(11);const O=e=>{const{attributes:t}=e;return m.a.createElement("div",{className:"uagb-timeline__marker uagb-timeline__out-view-icon uagb-timeline__icon-new"},Object(N.a)(t.icon))};var S,T=m.a.memo(O),P=a(10),x=a(6),A=a(14),L=a.n(A),C=a(265),F=0,z={injectType:"lazySingletonStyleTag",attributes:{id:"uagb-editor-styles"},insert:"head",singleton:!0},I={};I.locals=C.a.locals||{},I.use=function(){return F++||(S=L()(C.a,z)),I},I.unuse=function(){F>0&&!--F&&(S(),S=null)};var B=I;const J=e=>{Object(u.useLayoutEffect)(()=>(B.use(),()=>{B.unuse()}),[]),e=e.parentProps;const t=Object(P.a)(),{attributes:a,className:n,latestPosts:o}=e,{displayPostLink:_,timelinAlignment:d,postsToShow:p}=a;let E="";return _&&(E="uagb_timeline__cta-enable"),m.a.createElement("div",{className:r()(n,"uagb-timeline__outer-wrap","uagb-timeline__content-wrap","uagb-editor-preview-mode-"+t.toLowerCase(),"uagb-block-"+e.clientId,E,...Object(i.a)(e.attributes))},(()=>{if(!Array.isArray(o)||!o.length)return m.a.createElement(x.Placeholder,{icon:"admin-post",label:uagb_blocks_info.blocks["uagb/post-timeline"].title},Array.isArray(o)?Object(c.__)("No posts found."):m.a.createElement(x.Spinner,null));const t=o.length>p?o.slice(0,p):o;let n=Object(l.a)(e.attributes,0),i=Object(s.a)(e.attributes,0),u=!1;return m.a.createElement(m.a.Fragment,null,t.map((t,o)=>("center"===d&&(u=!0,n=Object(l.a)(e.attributes,o),i=Object(s.a)(e.attributes,o)),m.a.createElement("article",{className:r()("uagb-timeline__field ",n),key:o},m.a.createElement(T,{attributes:a}),m.a.createElement("div",{className:r()(i,"uagb-timeline__events-inner-new")},m.a.createElement(w,{post:t,attributes:a,dateClass:"uagb-timeline__date-hide uagb-timeline__inner-date-new"}),m.a.createElement(g,{post:t,attributes:a}),m.a.createElement(b,{post:t,attributes:a}),m.a.createElement(v,{post:t,attributes:a}),m.a.createElement(f,{post:t,attributes:a}),m.a.createElement(k,{post:t,attributes:a}),m.a.createElement("div",{className:"uagb-timeline__arrow"})),u&&m.a.createElement(m.a.Fragment,null,m.a.createElement(w,{post:t,attributes:a,dateClass:"uagb-timeline__date-new"}))))))})(),m.a.createElement("div",{className:"uagb-timeline__line"},m.a.createElement("div",{className:"uagb-timeline__line__inner"})))};t.default=m.a.memo(J)}}]);