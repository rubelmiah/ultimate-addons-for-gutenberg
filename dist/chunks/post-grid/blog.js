(window.webpackJsonp_ultimate_addons_for_gutenberg=window.webpackJsonp_ultimate_addons_for_gutenberg||[]).push([[77],{305:function(e,t,a){"use strict";a.r(t);var s=a(3),o=a.n(s),i=a(204),n=a(10),u=a(0),l=a.n(u);const r=e=>{const t=Object(u.useRef)(),{attributes:a,className:s,latestPosts:r,block_id:g}=e,c=Object(n.a)(),{isPreview:m,columns:p,tcolumns:b,mcolumns:_,imgPosition:d,postsToShow:f,equalHeight:w,paginationMarkup:v,postPagination:h,layoutConfig:k,rowGap:E}=a,N=()=>{setTimeout(()=>{if(null!=t&&t.current){var e,a;const s=null==t||null===(e=t.current)||void 0===e?void 0:e.offsetWidth,o=100-E/s*100,i=null==t||null===(a=t.current)||void 0===a?void 0:a.parentNode;if(i&&i.classList.contains("uagb-post__image-position-background")){const e=null==i?void 0:i.getElementsByClassName("uagb-post__image");for(const t of e)t&&(t.style.width=o+"%",t.style.marginLeft=E/2+"px")}}},100)};Object(u.useEffect)(()=>{N()},[t]),Object(u.useEffect)(()=>{N()},[d]);const y=w?"uagb-post__equal-height":"",j=r.length>f?r.slice(0,f):r,L=uagb_blocks_info.uagb_url+"/admin/assets/preview-images/post-grid.png";return m?l.a.createElement("img",{width:"100%",src:L,alt:""}):l.a.createElement("div",{className:o()("is-grid","uagb-post__columns-"+p,"uagb-post__columns-tablet-"+b,"uagb-post__columns-mobile-"+_,"uagb-post__items",""+y,s,"uagb-post-grid","uagb-post__image-position-"+d,"uagb-editor-preview-mode-"+c.toLowerCase(),"uagb-block-"+g)},l.a.createElement(i.b,{parentName:"uagb/post-grid",parentClassName:"uagb-block-grid"},j.map((a={},s)=>l.a.createElement("article",{ref:t,key:s,className:"uagb-post__inner-wrap"},Object(i.e)("uagb/post-grid",a,k,e.attributes,e.categoriesList,t)))),!0===h&&"empty"!==v&&l.a.createElement("div",{dangerouslySetInnerHTML:{__html:v},className:"uagb-post-pagination-wrap"}))};t.default=l.a.memo(r)}}]);