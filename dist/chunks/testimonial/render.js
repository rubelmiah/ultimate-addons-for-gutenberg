(window.webpackJsonp_ultimate_addons_for_gutenberg=window.webpackJsonp_ultimate_addons_for_gutenberg||[]).push([[101],{335:function(e,t,a){"use strict";var r=a(15),n=a.n(r)()((function(e){return e[1]}));n.push([e.i,"/**\r\n * #.# Editor Styles\r\n *\r\n * CSS for just Backend enqueued after style.scss\r\n * which makes it higher in priority.\r\n */\n.gutenberg-editor-page #wpwrap ul.slick-dots {\n  margin: 0 auto; }\n\n#wpwrap .edit-post-visual-editor button.slick-arrow {\n  line-height: 16px; }\n\n.uagb-tm__desc,\n.editor-block-list__layout .uagb-tm__desc.block-editor-rich-text__editable {\n  margin-bottom: 15px; }\n\n.uagb-tm__author-name,\n.editor-block-list__layout .uagb-tm__author-name.block-editor-rich-text__editable {\n  margin-bottom: 5px;\n  font-size: 30px;\n  line-height: 16px; }\n\n#wpwrap .edit-post-visual-editor ul.slick-dots {\n  margin: 0; }\n",""]),t.a=n},573:function(e,t,a){"use strict";a.r(t);var r,n=a(3),o=a.n(n),i=a(46),s=a(6),l=a(1),u=a.n(l),c=a(10),d=a(37),m=a(43),b=a(44),p=a(45),_=a(14),g=a.n(_),f=a(335),w=0,y={injectType:"lazySingletonStyleTag",attributes:{id:"uagb-editor-styles"},insert:"head",singleton:!0},v={};v.locals=f.a.locals||{},v.use=function(){return w++||(r=g()(f.a,y)),v},v.unuse=function(){w>0&&!--w&&(r(),r=null)};var h=v;function k(){return(k=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e}).apply(this,arguments)}function E(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,r=new Array(t);a<t;a++)r[a]=e[a];return r}var S=Object(l.lazy)((function(){return a.e(0).then(a.t.bind(null,565,7))})),x=function(e){Object(l.useLayoutEffect)((function(){return h.use(),function(){h.unuse()}}),[]);var t=e=e.parentProps,a=t.className,r=t.setAttributes,n=t.attributes,_=t.deviceType,g=n.test_block,f=n.imagePosition,w=n.columns,y=n.tcolumns,v=n.mcolumns,x=n.pauseOnHover,A=n.infiniteLoop,N=n.transitionSpeed,j=n.arrowDots,O=n.arrowSize,T=n.arrowBorderSize,z=n.arrowBorderRadius,C=n.autoplay,I=n.autoplaySpeed,P=n.arrowColor,B=function(){return u.a.createElement("button",{type:"button","data-role":"none",className:"slick-next slick-arrow","aria-label":"Next",tabIndex:"0",style:{borderColor:P,borderRadius:z,borderWidth:T}},s.a.carousel_right)},L=function(){return u.a.createElement("button",{type:"button","data-role":"none",className:"slick-prev slick-arrow","aria-label":"Previous",tabIndex:"0",style:{borderColor:P,borderRadius:z,borderWidth:T}},s.a.carousel_left)},R={slidesToShow:w,slidesToScroll:1,autoplaySpeed:I,autoplay:C,infinite:A,pauseOnHover:x,speed:N,arrows:"arrows"==j||"arrows_dots"==j,dots:"dots"==j||"arrows_dots"==j,rtl:!1,draggable:!1,nextArrow:u.a.createElement(B,{arrowSize:O}),prevArrow:u.a.createElement(L,{arrowSize:O}),responsive:[{breakpoint:1024,settings:{slidesToShow:y,slidesToScroll:1}},{breakpoint:767,settings:{slidesToShow:v,slidesToScroll:1}}]};return u.a.createElement("div",{className:o()(a,"uagb-slick-carousel uagb-tm__arrow-outside","uagb-editor-preview-mode-".concat(_.toLowerCase()),"uagb-block-".concat(e.clientId.substr(0,8)))},u.a.createElement(l.Suspense,{fallback:Object(c.a)()},u.a.createElement(S,k({className:o()("is-carousel","uagb-tm__columns-".concat(w),"uagb-tm__items")},R),g.map((function(t,a){return u.a.createElement("div",{className:o.a.apply(void 0,["uagb-testimonial__wrap"].concat((s=Object(i.a)(n),function(e){if(Array.isArray(e))return E(e)}(s)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(s)||function(e,t){if(e){if("string"==typeof e)return E(e,void 0);var a=Object.prototype.toString.call(e).slice(8,-1);return"Object"===a&&e.constructor&&(a=e.constructor.name),"Map"===a||"Set"===a?Array.from(e):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?E(e,void 0):void 0}}(s)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()))),key:"wrap-"+a},u.a.createElement("div",{className:"uagb-tm__content",key:"tm_content-"+a},u.a.createElement("div",{className:"uagb-tm__overlay"}),("top"==f||"left"==f)&&u.a.createElement(d.a,{attributes:n,index_value:a}),u.a.createElement("div",{className:"uagb-tm__text-wrap"},u.a.createElement(u.a.Fragment,null,u.a.createElement(p.a,{attributes:n,setAttributes:r,props:e,index_value:a})),u.a.createElement("div",{className:"uagb-tm__meta-inner"},"bottom"==f&&u.a.createElement(d.a,{attributes:n,index_value:a}),u.a.createElement(u.a.Fragment,null,u.a.createElement("div",{className:"uagb-testimonial-details",key:"tm_wraps-"+a},u.a.createElement(m.a,{attributes:n,setAttributes:r,props:e,index_value:a}),u.a.createElement(b.a,{attributes:n,setAttributes:r,props:e,index_value:a}))))),"right"==f&&u.a.createElement(d.a,{attributes:n,index_value:a})));var s})))))};t.default=u.a.memo(x)}}]);