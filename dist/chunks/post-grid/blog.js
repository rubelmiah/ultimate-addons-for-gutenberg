(window.webpackJsonp_ultimate_addons_for_gutenberg=window.webpackJsonp_ultimate_addons_for_gutenberg||[]).push([[79],{317:function(t,e,a){"use strict";a.r(e);var o=a(3),s=a.n(o),i=a(212),n=a(10),l=a(0),u=a.n(l);const r=t=>{const e=Object(l.useRef)(),{attributes:a,className:o,latestPosts:r,block_id:g}=t,c=Object(n.a)(),{isPreview:m,columns:p,tcolumns:b,mcolumns:d,imgPosition:_,postsToShow:f,equalHeight:w,paginationMarkup:v,postPagination:h,layoutConfig:k,rowGap:y}=a,E=()=>{setTimeout(()=>{if(null!=e&&e.current){var t,o;const s=null==e||null===(t=e.current)||void 0===t?void 0:t.offsetWidth,i=100-y/s*100,n=null==e||null===(o=e.current)||void 0===o?void 0:o.parentNode;if("background"===a.imgPosition&&n&&n.classList.contains("uagb-post__image-position-background")){const t=null==n?void 0:n.getElementsByClassName("uagb-post__image");for(const e of t)e&&(e.style.width=i+"%",e.style.marginLeft=y/2+"px")}if("top"===a.imgPosition){const t=null==n?void 0:n.getElementsByClassName("uagb-post__image");for(const e of t)e&&(e.style.width=null,e.style.marginLeft=null)}}},100)};Object(l.useEffect)(()=>{E()},[e]),Object(l.useEffect)(()=>{E()},[_]);const N=w?"uagb-post__equal-height":"",L=r.length>f?r.slice(0,f):r,P=uagb_blocks_info.uagb_url+"/admin/assets/preview-images/post-grid.png";return m?u.a.createElement("img",{width:"100%",src:P,alt:""}):u.a.createElement("div",{className:s()("is-grid","uagb-post__columns-"+p,"uagb-post__columns-tablet-"+b,"uagb-post__columns-mobile-"+d,"uagb-post__items",""+N,o,"uagb-post-grid","uagb-post__image-position-"+_,"uagb-editor-preview-mode-"+c.toLowerCase(),"uagb-block-"+g)},u.a.createElement(i.b,{parentName:"uagb/post-grid",parentClassName:"uagb-block-grid"},L.map((function(){let a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},o=arguments.length>1?arguments[1]:void 0;return u.a.createElement("article",{ref:e,key:o,className:"uagb-post__inner-wrap"},Object(i.e)("uagb/post-grid",a,k,t.attributes,t.categoriesList,e))}))),!0===h&&"empty"!==v&&u.a.createElement("div",{dangerouslySetInnerHTML:{__html:v},className:"uagb-post-pagination-wrap"}))};e.default=u.a.memo(r)}}]);