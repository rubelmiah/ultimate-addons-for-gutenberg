(window.webpackJsonp_ultimate_addons_for_gutenberg=window.webpackJsonp_ultimate_addons_for_gutenberg||[]).push([[110],{299:function(e,t,a){"use strict";var r=a(14),n=a.n(r)()((function(e){return e[1]}));n.push([e.i,"/**\n * #.# Editor Styles\n *\n * CSS for just Backend enqueued after style.scss\n * which makes it higher in priority.\n */\n.gutenberg-editor-page #wpwrap ul.slick-dots {\n  margin: 0 auto; }\n\n#wpwrap .edit-post-visual-editor button.slick-arrow {\n  line-height: 16px; }\n\n.uagb-tm__desc,\n.editor-block-list__layout .uagb-tm__desc.block-editor-rich-text__editable {\n  margin-bottom: 15px; }\n\n.uagb-tm__author-name,\n.editor-block-list__layout .uagb-tm__author-name.block-editor-rich-text__editable {\n  margin-bottom: 5px;\n  font-size: 30px;\n  line-height: 16px; }\n\n#wpwrap .edit-post-visual-editor ul.slick-dots {\n  margin: 0;\n  padding: 0; }\n",""]),t.a=n},545:function(e,t,a){"use strict";a.r(t);var r,n=a(3),s=a.n(n),o=a(64),i=a(7),l=a(0),u=a.n(l),c=a(8),d=a(50),m=a(61),b=a(62),p=a(63),_=a(13),g=a.n(_),w=a(299),v=0,h={injectType:"lazySingletonStyleTag",attributes:{id:"uagb-editor-styles"},insert:"head",singleton:!0},y={};y.locals=w.a.locals||{},y.use=function(){return v++||(r=g()(w.a,h)),y},y.unuse=function(){v>0&&!--v&&(r(),r=null)};var k=y,E=a(10);function f(){return(f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e}).apply(this,arguments)}const x=Object(l.lazy)(()=>a.e(1).then(a.t.bind(null,502,7))),S=e=>{Object(l.useLayoutEffect)(()=>(k.use(),()=>{k.unuse()}),[]),e=e.parentProps;const t=Object(E.a)(),{className:a,setAttributes:r,attributes:n}=e,{isPreview:_,test_block:g,imagePosition:w,columns:v,tcolumns:h,mcolumns:y,pauseOnHover:S,infiniteLoop:N,transitionSpeed:O,arrowDots:j,arrowSize:T,arrowBorderSize:z,arrowBorderRadius:A,autoplay:C,autoplaySpeed:P,arrowColor:B}=n,I=()=>u.a.createElement("button",{type:"button","data-role":"none",className:"slick-next slick-arrow","aria-label":"Next",tabIndex:"0",style:{borderColor:B,borderRadius:A,borderWidth:z}},i.a.carousel_right),L=()=>u.a.createElement("button",{type:"button","data-role":"none",className:"slick-prev slick-arrow","aria-label":"Previous",tabIndex:"0",style:{borderColor:B,borderRadius:A,borderWidth:z}},i.a.carousel_left),R={accessibility:!1,slidesToShow:v,slidesToScroll:1,autoplaySpeed:P,autoplay:C,infinite:N,pauseOnHover:S,speed:O,arrows:"arrows"===j||"arrows_dots"===j,dots:"dots"===j||"arrows_dots"===j,rtl:!1,draggable:!1,nextArrow:u.a.createElement(I,{arrowSize:T}),prevArrow:u.a.createElement(L,{arrowSize:T}),responsive:[{breakpoint:1024,settings:{slidesToShow:h,slidesToScroll:1}},{breakpoint:767,settings:{slidesToShow:y,slidesToScroll:1}}]},F=uagb_blocks_info.uagb_url+"/admin/assets/preview-images/testimonials.png";return _?u.a.createElement("img",{width:"100%",src:F,alt:""}):u.a.createElement("div",{className:s()(a,"uagb-slick-carousel uagb-tm__arrow-outside","uagb-editor-preview-mode-"+t.toLowerCase(),"uagb-block-"+e.clientId.substr(0,8))},u.a.createElement(l.Suspense,{fallback:Object(c.a)()},u.a.createElement(x,f({className:s()("is-carousel","uagb-tm__columns-"+v,"uagb-tm__items")},R),g.map((t,a)=>u.a.createElement("div",{className:s()("uagb-testimonial__wrap",...Object(o.a)(n)),key:"wrap-"+a},u.a.createElement("div",{className:"uagb-tm__content",key:"tm_content-"+a},u.a.createElement("div",{className:"uagb-tm__overlay"}),("top"===w||"left"===w)&&u.a.createElement(d.a,{attributes:n,index_value:a}),u.a.createElement("div",{className:"uagb-tm__text-wrap"},u.a.createElement(u.a.Fragment,null,u.a.createElement(p.a,{attributes:n,setAttributes:r,props:e,index_value:a})),u.a.createElement("div",{className:"uagb-tm__meta-inner"},"bottom"===w&&u.a.createElement(d.a,{attributes:n,index_value:a}),u.a.createElement(u.a.Fragment,null,u.a.createElement("div",{className:"uagb-testimonial-details",key:"tm_wraps-"+a},u.a.createElement(m.a,{attributes:n,setAttributes:r,props:e,index_value:a}),u.a.createElement(b.a,{attributes:n,setAttributes:r,props:e,index_value:a}))))),"right"===w&&u.a.createElement(d.a,{attributes:n,index_value:a})))))))};t.default=u.a.memo(S)}}]);