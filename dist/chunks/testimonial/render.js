(window.webpackJsonp_ultimate_addons_for_gutenberg=window.webpackJsonp_ultimate_addons_for_gutenberg||[]).push([[110],{304:function(e,t,a){"use strict";var r=a(14),i=a.n(r)()((function(e){return e[1]}));i.push([e.i,"/**\n * #.# Editor Styles\n *\n * CSS for just Backend enqueued after style.scss\n * which makes it higher in priority.\n */\n.gutenberg-editor-page #wpwrap ul.slick-dots {\n  margin: 0 auto; }\n\n#wpwrap .edit-post-visual-editor button.slick-arrow {\n  line-height: 16px; }\n\n.uagb-tm__desc,\n.editor-block-list__layout .uagb-tm__desc.block-editor-rich-text__editable {\n  margin-bottom: 15px; }\n\n.uagb-tm__author-name,\n.editor-block-list__layout .uagb-tm__author-name.block-editor-rich-text__editable {\n  margin-bottom: 5px;\n  font-size: 30px;\n  line-height: 16px; }\n\n#wpwrap .edit-post-visual-editor ul.slick-dots {\n  margin: 0;\n  padding: 0; }\n\n.wp-block-uagb-testimonial.uagb-editor-preview-mode-tablet.uagb-slick-carousel .slick-slide,\n.wp-block-uagb-testimonial.uagb-editor-preview-mode-mobile.uagb-slick-carousel .slick-slide {\n  height: auto; }\n\n.wp-block-uagb-testimonial.uagb-editor-preview-mode-tablet.uagb-slick-carousel ul.slick-dots,\n.wp-block-uagb-testimonial.uagb-editor-preview-mode-mobile.uagb-slick-carousel ul.slick-dots {\n  padding-left: 0; }\n",""]),t.a=i},550:function(e,t,a){"use strict";a.r(t);var r,i=a(3),o=a.n(i),s=a(52),n=a(7),l=a(0),u=a.n(l),c=a(9),b=a(53),d=a(49),m=a(50),p=a(51),g=a(13),_=a.n(g),w=a(304),k=0,v={injectType:"lazySingletonStyleTag",attributes:{id:"uagb-editor-styles"},insert:"head",singleton:!0},h={};h.locals=w.a.locals||{},h.use=function(){return k++||(r=_()(w.a,v)),h},h.unuse=function(){k>0&&!--k&&(r(),r=null)};var f=h,y=a(10);function E(){return(E=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e}).apply(this,arguments)}const x=Object(l.lazy)(()=>a.e(1).then(a.t.bind(null,507,7))),S=e=>{Object(l.useLayoutEffect)(()=>(f.use(),()=>{f.unuse()}),[]),e=e.parentProps;const t=Object(y.a)(),{className:a,setAttributes:r,attributes:i}=e,{block_id:g,isPreview:_,test_block:w,imagePosition:k,columns:v,tcolumns:h,mcolumns:S,pauseOnHover:N,infiniteLoop:C,transitionSpeed:O,arrowDots:j,arrowSize:T,arrowBorderSize:z,arrowBorderRadius:A,autoplay:P,autoplaySpeed:R,arrowColor:q,equalHeight:B}=i,H=Object(l.useRef)(),I=e=>{let{onClick:t}=e;return u.a.createElement("button",{type:"button","data-role":"none",className:"slick-next slick-arrow","aria-label":"Next",tabIndex:"0",style:{borderColor:q,borderRadius:A,borderWidth:z},onClick:t},n.a.carousel_right)},L=e=>{let{onClick:t}=e;return u.a.createElement("button",{type:"button","data-role":"none",className:"slick-prev slick-arrow","aria-label":"Previous",tabIndex:"0",style:{borderColor:q,borderRadius:A,borderWidth:z},onClick:t},n.a.carousel_left)},F=B?"uagb-post__carousel_equal-height":"",J={accessibility:!1,slidesToShow:v,slidesToScroll:1,autoplaySpeed:R,autoplay:P,infinite:C,pauseOnHover:N,speed:O,arrows:"arrows"===j||"arrows_dots"===j,dots:"dots"===j||"arrows_dots"===j,rtl:!1,afterChange:()=>{B&&uagb_carousel_height(g)},draggable:!1,nextArrow:u.a.createElement(I,{arrowSize:T,onClick:H.slickNext}),prevArrow:u.a.createElement(L,{arrowSize:T,onClick:H.slickPrev}),responsive:[{breakpoint:1024,settings:{slidesToShow:h,slidesToScroll:1}},{breakpoint:767,settings:{slidesToShow:S,slidesToScroll:1}}]},W=uagb_blocks_info.uagb_url+"/admin/assets/preview-images/testimonials.png";return _?u.a.createElement("img",{width:"100%",src:W,alt:""}):u.a.createElement("div",{className:o()(a,"uagb-slick-carousel uagb-tm__arrow-outside","uagb-editor-preview-mode-"+t.toLowerCase(),"uagb-block-"+e.clientId.substr(0,8),""+F)},u.a.createElement(l.Suspense,{fallback:Object(c.a)()},u.a.createElement(x,E({className:o()("is-carousel","uagb-tm__columns-"+v,"uagb-tm__items")},J,{ref:H}),w.map((t,a)=>u.a.createElement("div",{className:o()("uagb-testimonial__wrap",...Object(s.a)(i)),key:"wrap-"+a},u.a.createElement("div",{className:"uagb-tm__content",key:"tm_content-"+a},u.a.createElement("div",{className:"uagb-tm__overlay"}),("top"===k||"left"===k)&&u.a.createElement(b.a,{attributes:i,index_value:a}),u.a.createElement("div",{className:"uagb-tm__text-wrap"},u.a.createElement(u.a.Fragment,null,u.a.createElement(p.a,{attributes:i,setAttributes:r,props:e,index_value:a})),u.a.createElement("div",{className:"uagb-tm__meta-inner"},"bottom"===k&&u.a.createElement(b.a,{attributes:i,index_value:a}),u.a.createElement(u.a.Fragment,null,u.a.createElement("div",{className:"uagb-testimonial-details",key:"tm_wraps-"+a},u.a.createElement(d.a,{attributes:i,setAttributes:r,props:e,index_value:a}),u.a.createElement(m.a,{attributes:i,setAttributes:r,props:e,index_value:a}))))),"right"===k&&u.a.createElement(b.a,{attributes:i,index_value:a})))))))};t.default=u.a.memo(S)}}]);