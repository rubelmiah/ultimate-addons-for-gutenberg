(window.webpackJsonp_ultimate_addons_for_gutenberg=window.webpackJsonp_ultimate_addons_for_gutenberg||[]).push([[83],{251:function(e,t,a){"use strict";var n=a(15),r=a.n(n)()((function(e){return e[1]}));r.push([e.i,"/**\n * #.# Editor Styles\n *\n * CSS for just Backend enqueued after style.scss\n * which makes it higher in priority.\n */\n.edit-post-visual-editor .block-editor-block-list__block .uagb-timeline__field {\n  margin: 0; }\n  .edit-post-visual-editor .block-editor-block-list__block .uagb-timeline__field a {\n    color: inherit;\n    text-decoration: none;\n    font-size: inherit;\n    margin: 0; }\n\n.edit-post-visual-editor .block-editor-block-list__block a {\n  pointer-events: none; }\n",""]),t.a=r},468:function(e,t,a){"use strict";a.r(t);var n=a(3),r=a.n(n),i=a(41),l=a(36),s=a(37),o=a(47),c=a(1),m=a(0),u=a.n(m);const _=e=>{const t=e.attributes.headingTag,{post:a,attributes:n}=e;let r="_self";return n.linkTarget&&(r="_blank"),u.a.createElement(t,{className:"uagb-timeline__heading"},u.a.createElement("a",{href:a.link,target:r,rel:"noopener noreferrer"},Object(o.decodeEntities)(a.title.rendered.trim())||Object(c.__)("(Untitled)")))};var b=u.a.memo(_);const d=e=>{const{post:t,attributes:a}=e;if(a.displayPostImage&&void 0!==t.uagb_featured_image_src&&a.imageSize&&t.uagb_featured_image_src[a.imageSize]){const e=t.uagb_featured_image_src[a.imageSize];let n="_self";return a.linkTarget&&(n="_blank"),u.a.createElement("a",{href:t.link,target:n,rel:"noopener noreferrer",style:{textAlign:a.align},className:"uagb-timeline__image"},u.a.createElement("img",{src:e[0],alt:Object(o.decodeEntities)(t.title.rendered.trim())||Object(c.__)("(Untitled)")}))}return null};var g=u.a.memo(d);const p=e=>{const{post:t,attributes:a}=e;let n;if(a.displayPostExcerpt&&t.uagb_excerpt){n=t.uagb_excerpt.split(/\s+/).slice(0,a.exerptLength).join(" ");let e="";return a.displayPostLink&&(e=a.contentSpace+"px"),u.a.createElement("div",{className:"uagb-timeline-desc-content",dangerouslySetInnerHTML:{__html:n},style:{marginBottom:e}})}return null};var f=u.a.memo(p);const E=e=>{const{post:t,attributes:a}=e;let n="_self";return a.linkTarget&&(n="_blank"),a.displayPostLink?u.a.createElement("a",{className:"uagb-timeline__link",href:t.link,target:n,rel:"noopener noreferrer"},a.readMoreText):null};var k=u.a.memo(E);const h=e=>{const{post:t,attributes:a}=e;let n="_self";return a.linkTarget&&(n="_blank"),u.a.createElement(u.a.Fragment,null,a.displayPostAuthor&&void 0!==t.uagb_author_info&&u.a.createElement(u.a.Fragment,null,u.a.createElement("span",{className:"dashicons-admin-users dashicons"}),u.a.createElement("a",{className:"uagb-timeline__author-link",target:n,href:t.uagb_author_info.author_link,rel:"noopener noreferrer"},t.uagb_author_info.display_name)))};var v=u.a.memo(h),y=a(20);const j=e=>{const{post:t,attributes:a,dateClass:n}=e;return u.a.createElement(u.a.Fragment,null,u.a.createElement("time",{dateTime:Object(y.format)("c",t.date_gmt),className:n,style:{color:a.dateColor}},a.displayPostDate&&t.date_gmt&&Object(y.dateI18n)(a.dateFormat,t.date_gmt)))};var w=u.a.memo(j),N=a(11);const O=e=>{const{attributes:t}=e;return u.a.createElement("div",{className:"uagb-timeline__marker uagb-timeline__out-view-icon uagb-timeline__icon-new"},Object(N.a)(t.icon))};var S,T=u.a.memo(O),P=a(10),x=a(6),A=a(14),L=a.n(A),C=a(251),F=0,z={injectType:"lazySingletonStyleTag",attributes:{id:"uagb-editor-styles"},insert:"head",singleton:!0},I={};I.locals=C.a.locals||{},I.use=function(){return F++||(S=L()(C.a,z)),I},I.unuse=function(){F>0&&!--F&&(S(),S=null)};var B=I;const J=e=>{Object(m.useLayoutEffect)(()=>(B.use(),()=>{B.unuse()}),[]),e=e.parentProps;const t=Object(P.a)(),{attributes:a,className:n,latestPosts:o}=e,{displayPostLink:_,timelinAlignment:d,postsToShow:p}=a;let E="";return _&&(E="uagb_timeline__cta-enable"),u.a.createElement("div",{className:r()(n,"uagb-timeline__outer-wrap","uagb-timeline__content-wrap","uagb-editor-preview-mode-"+t.toLowerCase(),"uagb-block-"+e.clientId,E,...Object(i.a)(e.attributes))},(()=>{if(!Array.isArray(o)||!o.length)return u.a.createElement(x.Placeholder,{icon:"admin-post",label:uagb_blocks_info.blocks["uagb/post-timeline"].title},Array.isArray(o)?Object(c.__)("No posts found."):u.a.createElement(x.Spinner,null));const t=o.length>p?o.slice(0,p):o;let n=Object(l.a)(e.attributes,0),i=Object(s.a)(e.attributes,0),m=!1;return u.a.createElement(u.a.Fragment,null,t.map((t,o)=>("center"===d&&(m=!0,n=Object(l.a)(e.attributes,o),i=Object(s.a)(e.attributes,o)),u.a.createElement("article",{className:r()("uagb-timeline__field ",n),key:o},u.a.createElement(T,{attributes:a}),u.a.createElement("div",{className:r()(i,"uagb-timeline__events-inner-new")},u.a.createElement(w,{post:t,attributes:a,dateClass:"uagb-timeline__date-hide uagb-timeline__inner-date-new"}),u.a.createElement(g,{post:t,attributes:a}),u.a.createElement(b,{post:t,attributes:a}),u.a.createElement(v,{post:t,attributes:a}),u.a.createElement(f,{post:t,attributes:a}),u.a.createElement(k,{post:t,attributes:a}),u.a.createElement("div",{className:"uagb-timeline__arrow"})),m&&u.a.createElement(u.a.Fragment,null,u.a.createElement(w,{post:t,attributes:a,dateClass:"uagb-timeline__date-new"}))))))})(),u.a.createElement("div",{className:"uagb-timeline__line"},u.a.createElement("div",{className:"uagb-timeline__line__inner"})))};t.default=u.a.memo(J)}}]);