(window.webpackJsonp_ultimate_addons_for_gutenberg=window.webpackJsonp_ultimate_addons_for_gutenberg||[]).push([[79],{324:function(t,e,a){"use strict";a.r(e);var o=a(4),s=a.n(o),n=a(216),i=a(11),l=a(0),u=a.n(l),c=a(3);const r=t=>{const e=t.name.replace("uagb/",""),a=Object(l.useRef)(),{attributes:o,className:r,latestPosts:g,block_id:m}=t,b=Object(i.a)(),{isPreview:p,columns:d,tcolumns:_,mcolumns:f,imgPosition:w,postsToShow:v,equalHeight:h,paginationMarkup:j,postPagination:k,layoutConfig:y,rowGap:O}=o,E=Object(c.a)(v,"postsToShow",e),N=Object(c.a)(d,"columns",e),L=Object(c.a)(_,"tcolumns",e),P=Object(c.a)(f,"mcolumns",e),C=Object(c.a)(O,"rowGap",e),T=()=>{setTimeout(()=>{if(null!=a&&a.current){var t,e;const s=null==a||null===(t=a.current)||void 0===t?void 0:t.offsetWidth,n=100-C/s*100,i=null==a||null===(e=a.current)||void 0===e?void 0:e.parentNode;if("background"===o.imgPosition&&i&&i.classList.contains("uagb-post__image-position-background")){const t=null==i?void 0:i.getElementsByClassName("uagb-post__image");for(const e of t)e&&(e.style.width=n+"%",e.style.marginLeft=C/2+"px")}if("top"===o.imgPosition){const t=null==i?void 0:i.getElementsByClassName("uagb-post__image");for(const e of t)e&&(e.style.width=null,e.style.marginLeft=null)}}},100)};Object(l.useEffect)(()=>{T()},[a]),Object(l.useEffect)(()=>{T()},[w]);const S=h?"uagb-post__equal-height":"",q=g.length>E?g.slice(0,E):g,B=uagb_blocks_info.uagb_url+"/admin/assets/preview-images/post-grid.png";return p?u.a.createElement("img",{width:"100%",src:B,alt:""}):u.a.createElement("div",{className:s()("is-grid","uagb-post__columns-"+N,"uagb-post__columns-tablet-"+L,"uagb-post__columns-mobile-"+P,"uagb-post__items",""+S,r,"uagb-post-grid","uagb-post__image-position-"+w,"uagb-editor-preview-mode-"+b.toLowerCase(),"uagb-block-"+m)},u.a.createElement(n.b,{parentName:"uagb/post-grid",parentClassName:"uagb-block-grid"},q.map((function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},o=arguments.length>1?arguments[1]:void 0;return u.a.createElement("article",{ref:a,key:o,className:"uagb-post__inner-wrap"},Object(n.e)("uagb/post-grid",e,y,t.attributes,t.categoriesList,a))}))),!0===k&&"empty"!==j&&u.a.createElement("div",{dangerouslySetInnerHTML:{__html:j},className:"uagb-post-pagination-wrap"}))};e.default=u.a.memo(r)}}]);