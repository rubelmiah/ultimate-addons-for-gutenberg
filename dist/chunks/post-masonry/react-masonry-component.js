(window.webpackJsonp_ultimate_addons_for_gutenberg=window.webpackJsonp_ultimate_addons_for_gutenberg||[]).push([[80],{282:function(e,a,t){"use strict";t.r(a);var o=t(3),s=t.n(o),n=t(0),l=t.n(n),i=t(8),r=t(10),u=t(180);const c=Object(n.lazy)(()=>Promise.all([t.e(114),t.e(80)]).then(t.t.bind(null,298,7)));a.default=function(e){const a=Object(n.useRef)(),{attributes:t,className:o,latestPosts:b,block_id:m}=e,g=Object(r.a)(),{columns:p,tcolumns:d,mcolumns:_,imgPosition:f,postsToShow:w,paginationEventType:v,buttonText:E,paginationType:N,layoutConfig:y,rowGap:k}=t,j=()=>{setTimeout(()=>{if(null!=a&&a.current){var e,t;let o=null==a||null===(e=a.current)||void 0===e?void 0:e.offsetWidth,s=100-k/o*100,n=null==a||null===(t=a.current)||void 0===t?void 0:t.parentNode;if(n&&n.classList.contains("uagb-post__image-position-background")){let e=null==n?void 0:n.getElementsByClassName("uagb-post__image");for(let a of e)a&&(a.style.width=s+"%",a.style.marginLeft=k/2+"px")}}},100)};Object(n.useEffect)(()=>{j()},[a]),Object(n.useEffect)(()=>{j()},[f]);const O=b.length>w?b.slice(0,w):b;return l.a.createElement("div",{className:s()(o,"uagb-post-grid","uagb-post__arrow-outside","uagb-post__image-position-"+f,"uagb-editor-preview-mode-"+g.toLowerCase(),"uagb-block-"+m),"data-blog-id":m},l.a.createElement(n.Suspense,{fallback:Object(i.a)()},l.a.createElement(c,{className:s()("is-masonry","uagb-post__columns-"+p,"uagb-post__columns-tablet-"+d,"uagb-post__columns-mobile-"+_,"uagb-post__items",o,"uagb-post-grid","uagb-post__arrow-outside","uagb-post__image-position-"+f,"uagb-editor-preview-mode-"+g.toLowerCase(),"uagb-block-"+m),"data-blog-id":m},l.a.createElement(u.b,{parentName:"uagb/post-masonry",parentClassName:"uagb-block-grid"},O.map((t,o)=>l.a.createElement("article",{ref:a,key:o,className:"uagb-post__inner-wrap"},Object(u.e)("uagb/post-masonry",t,y,e.attributes,e.categoriesList)))))),(()=>{if("infinite"===N){if("scroll"===v)return l.a.createElement("div",{className:"uagb-post-inf-loader"},l.a.createElement("div",{className:"uagb-post-loader-1"}),l.a.createElement("div",{className:"uagb-post-loader-2"}),l.a.createElement("div",{className:"uagb-post-loader-3"}));if("button"===v)return l.a.createElement("div",{className:"uagb-post__load-more-wrap"},l.a.createElement("span",{className:"uagb-post-pagination-button"},l.a.createElement("a",{className:"uagb-post__load-more"},E)))}})())}}}]);