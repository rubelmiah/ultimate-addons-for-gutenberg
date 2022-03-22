(window.webpackJsonp_ultimate_addons_for_gutenberg=window.webpackJsonp_ultimate_addons_for_gutenberg||[]).push([[108],{266:function(e,t,a){"use strict";var i=a(15),s=a.n(i)()((function(e){return e[1]}));s.push([e.i,"/**\n * #.# Editor Styles\n *\n * CSS for just Backend enqueued after style.scss\n * which makes it higher in priority.\n */\n.gutenberg-editor-page #wpwrap ul.slick-dots {\n  margin: 0 auto; }\n\n#wpwrap .edit-post-visual-editor button.slick-arrow {\n  line-height: 16px; }\n\n.uagb-tm__desc,\n.editor-block-list__layout .uagb-tm__desc.block-editor-rich-text__editable {\n  margin-bottom: 15px; }\n\n.uagb-tm__author-name,\n.editor-block-list__layout .uagb-tm__author-name.block-editor-rich-text__editable {\n  margin-bottom: 5px;\n  font-size: 30px;\n  line-height: 16px; }\n\n#wpwrap .edit-post-visual-editor ul.slick-dots {\n  margin: 0;\n  padding: 0; }\n",""]),t.a=s},505:function(e,t,a){"use strict";a.r(t);var i,s=a(3),M=a.n(s),r=a(53),n=a(7),o=a(0),l=a.n(o),u=a(8),c=a(43),z=a(50),N=a(51),I=a(52),m=a(14),g=a.n(m),b=a(266),L=0,d={injectType:"lazySingletonStyleTag",attributes:{id:"uagb-editor-styles"},insert:"head",singleton:!0},w={};w.locals=b.a.locals||{},w.use=function(){return L++||(i=g()(b.a,d)),w},w.unuse=function(){L>0&&!--L&&(i(),i=null)};var D=w,j=a(10);function y(){return(y=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var i in a)Object.prototype.hasOwnProperty.call(a,i)&&(e[i]=a[i])}return e}).apply(this,arguments)}const E=Object(o.lazy)(()=>a.e(1).then(a.t.bind(null,467,7))),S=e=>{Object(o.useLayoutEffect)(()=>(D.use(),()=>{D.unuse()}),[]),e=e.parentProps;const t=Object(j.a)(),{className:a,setAttributes:i,attributes:s}=e,{isPreview:m,test_block:g,imagePosition:b,columns:L,tcolumns:d,mcolumns:w,pauseOnHover:S,infiniteLoop:p,transitionSpeed:C,arrowDots:T,arrowSize:x,arrowBorderSize:k,arrowBorderRadius:Q,autoplay:_,autoplaySpeed:v,arrowColor:O}=s,R=()=>l.a.createElement("button",{type:"button","data-role":"none",className:"slick-next slick-arrow","aria-label":"Next",tabIndex:"0",style:{borderColor:O,borderRadius:Q,borderWidth:k}},n.a.carousel_right),A=()=>l.a.createElement("button",{type:"button","data-role":"none",className:"slick-prev slick-arrow","aria-label":"Previous",tabIndex:"0",style:{borderColor:O,borderRadius:Q,borderWidth:k}},n.a.carousel_left),J={slidesToShow:L,slidesToScroll:1,autoplaySpeed:v,autoplay:_,infinite:p,pauseOnHover:S,speed:C,arrows:"arrows"===T||"arrows_dots"===T,dots:"dots"===T||"arrows_dots"===T,rtl:!1,draggable:!1,nextArrow:l.a.createElement(R,{arrowSize:x}),prevArrow:l.a.createElement(A,{arrowSize:x}),responsive:[{breakpoint:1024,settings:{slidesToShow:d,slidesToScroll:1}},{breakpoint:767,settings:{slidesToShow:w,slidesToScroll:1}}]};return m?l.a.createElement("img",{width:"100%",src:"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxNi4wLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DQo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB3aWR0aD0iMzUwcHgiIGhlaWdodD0iMzUwcHgiIHZpZXdCb3g9IjAgMCAzNTAgMzUwIiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAzNTAgMzUwIiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxnPg0KCTxnPg0KCQk8Zz4NCgkJCTxwYXRoIGZpbGw9IiNEQkRDREUiIGQ9Ik0zMTcuMTExLDEzOC44MjljMCwxLjg5Ni0xLjUzNSwzLjQzMi0zLjQzLDMuNDMySDM2LjMxN2MtMS44OTMsMC0zLjQzLTEuNTM2LTMuNDMtMy40MzJ2LTAuNDI3DQoJCQkJYzAtMS44OTYsMS41MzctMy40MywzLjQzLTMuNDNoMjc3LjM2NGMxLjg5NSwwLDMuNDMsMS41MzQsMy40MywzLjQzVjEzOC44Mjl6Ii8+DQoJCQk8cGF0aCBmaWxsPSIjREJEQ0RFIiBkPSJNMjk5Ljk0OSwxNTYuNDA4YzAsMS44OTMtMS41MzUsMy40MjktMy40MywzLjQyOUg1My40OGMtMS44OTUsMC0zLjQzMS0xLjUzNi0zLjQzMS0zLjQyOXYtMC40Mw0KCQkJCWMwLTEuODkzLDEuNTM2LTMuNDI5LDMuNDMxLTMuNDI5SDI5Ni41MmMxLjg5NSwwLDMuNDMsMS41MzYsMy40MywzLjQyOVYxNTYuNDA4eiIvPg0KCQkJPHBhdGggZmlsbD0iI0RCRENERSIgZD0iTTI4Mi43ODcsMTczLjk4NWMwLDEuODk1LTEuNTM2LDMuNDI5LTMuNDMxLDMuNDI5SDcwLjY0M2MtMS44OTQsMC0zLjQzLTEuNTM0LTMuNDMtMy40Mjl2LTAuNDI3DQoJCQkJYzAtMS44OTYsMS41MzYtMy40MzIsMy40My0zLjQzMmgyMDguNzE0YzEuODk1LDAsMy40MzEsMS41MzYsMy40MzEsMy40MzJWMTczLjk4NXoiLz4NCgkJPC9nPg0KCQk8cGF0aCBmaWxsPSIjREJEQ0RFIiBkPSJNMjA5LjUsMjAxLjMzNGMwLDIuMjA5LTEuNzkxLDQtNCw0aC02MWMtMi4yMDksMC00LTEuNzkxLTQtNFYyMDBjMC0yLjIwOSwxLjc5MS00LDQtNGg2MQ0KCQkJYzIuMjA5LDAsNCwxLjc5MSw0LDRWMjAxLjMzNHoiLz4NCgkJPHBhdGggZmlsbD0iI0RCRENERSIgZD0iTTE5NS4wODMsMjE1LjU4M2MwLDEuMTUtMC45MzMsMi4wODMtMi4wODQsMi4wODNIMTU3Yy0xLjE1LDAtMi4wODMtMC45MzMtMi4wODMtMi4wODNsMCwwDQoJCQljMC0xLjE1MSwwLjkzMy0yLjA4NCwyLjA4My0yLjA4NGgzNS45OTlDMTk0LjE1LDIxMy40OTksMTk1LjA4MywyMTQuNDMyLDE5NS4wODMsMjE1LjU4M0wxOTUuMDgzLDIxNS41ODN6Ii8+DQoJCTxnPg0KCQkJPGNpcmNsZSBmaWxsPSIjREJEQ0RFIiBjeD0iMTY5LjEyNSIgY3k9IjIzMy4zNzUiIHI9IjEuMzc1Ii8+DQoJCQk8Y2lyY2xlIGZpbGw9IiNEQkRDREUiIGN4PSIxNzUiIGN5PSIyMzMuMzc1IiByPSIxLjM3NSIvPg0KCQkJPGNpcmNsZSBmaWxsPSIjREJEQ0RFIiBjeD0iMTgwLjg3NSIgY3k9IjIzMy4zNzUiIHI9IjEuMzc1Ii8+DQoJCTwvZz4NCgk8L2c+DQoJPHBvbHlsaW5lIGZpbGw9Im5vbmUiIHN0cm9rZT0iI0RCRENERSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHBvaW50cz0iMTcuNjc3LDE4MC4zNzUgMTIuOTgyLDE4NC42NzggDQoJCTE3LjY3NSwxODkuMzQ4IAkiLz4NCgk8cG9seWxpbmUgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjREJEQ0RFIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgcG9pbnRzPSIzMzIuMzIxLDE4MC4zNzUgMzM3LjAxNywxODQuNjc4IA0KCQkzMzIuMzIzLDE4OS4zNDggCSIvPg0KPC9nPg0KPC9zdmc+DQo="}):l.a.createElement("div",{className:M()(a,"uagb-slick-carousel uagb-tm__arrow-outside","uagb-editor-preview-mode-"+t.toLowerCase(),"uagb-block-"+e.clientId.substr(0,8))},l.a.createElement(o.Suspense,{fallback:Object(u.a)()},l.a.createElement(E,y({className:M()("is-carousel","uagb-tm__columns-"+L,"uagb-tm__items")},J),g.map((t,a)=>l.a.createElement("div",{className:M()("uagb-testimonial__wrap",...Object(r.a)(s)),key:"wrap-"+a},l.a.createElement("div",{className:"uagb-tm__content",key:"tm_content-"+a},l.a.createElement("div",{className:"uagb-tm__overlay"}),("top"===b||"left"===b)&&l.a.createElement(c.a,{attributes:s,index_value:a}),l.a.createElement("div",{className:"uagb-tm__text-wrap"},l.a.createElement(l.a.Fragment,null,l.a.createElement(I.a,{attributes:s,setAttributes:i,props:e,index_value:a})),l.a.createElement("div",{className:"uagb-tm__meta-inner"},"bottom"===b&&l.a.createElement(c.a,{attributes:s,index_value:a}),l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"uagb-testimonial-details",key:"tm_wraps-"+a},l.a.createElement(z.a,{attributes:s,setAttributes:i,props:e,index_value:a}),l.a.createElement(N.a,{attributes:s,setAttributes:i,props:e,index_value:a}))))),"right"===b&&l.a.createElement(c.a,{attributes:s,index_value:a})))))))};t.default=l.a.memo(S)}}]);