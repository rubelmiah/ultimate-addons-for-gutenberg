(window.webpackJsonp_ultimate_addons_for_gutenberg=window.webpackJsonp_ultimate_addons_for_gutenberg||[]).push([[11],{252:function(t,e,a){"use strict";var r=a(16),n=a.n(r)()((function(t){return t[1]}));n.push([t.i,"/**\n * #.# Editor Styles\n *\n * CSS for just Backend enqueued after style.scss\n * which makes it higher in priority.\n */\n.uagb-cta__content-wrap.uagb-cta__icon-position-above-title {\n  text-align: center; }\n\n.editor-styles-wrapper .edit-post-visual-editor a.uagb-cta__block-link-wrap {\n  color: inherit; }\n\n.editor-styles-wrapper .uagb-cta__title,\n.editor-styles-wrapper .uagb-cta-separator-parent,\n.editor-styles-wrapper .uagb-cta__desc {\n  margin-bottom: 10px; }\n\n.editor-styles-wrapper .uagb-cta__desc {\n  margin: 0; }\n\n.editor-styles-wrapper .uagb-cta__block-link i {\n  font-style: normal; }\n\n.wp-block-uagb-call-to-action.uagb-cta__outer-wrap a.uagb-cta__link-to-all {\n  z-index: 0; }\n\n.editor-styles-wrapper .uagb-cta__outer-wrap a.uagb-cta__button-link-wrapper {\n  text-decoration: none;\n  fill: currentColor; }\n\n.editor-styles-wrapper .uagb-editor-preview-mode-tablet .uagb-cta__content-stacked-tablet .uagb-cta__left-right-wrap {\n  flex-direction: column;\n  text-align: center; }\n  .editor-styles-wrapper .uagb-editor-preview-mode-tablet .uagb-cta__content-stacked-tablet .uagb-cta__left-right-wrap .uagb-cta__link-wrapper {\n    width: 100%; }\n    .editor-styles-wrapper .uagb-editor-preview-mode-tablet .uagb-cta__content-stacked-tablet .uagb-cta__left-right-wrap .uagb-cta__link-wrapper .uagb-cta__button-wrapper {\n      float: none;\n      margin: 0 auto; }\n\n.editor-styles-wrapper .uagb-editor-preview-mode-mobile .uagb-cta__content-stacked-mobile .uagb-cta__left-right-wrap {\n  flex-direction: column;\n  text-align: center; }\n  .editor-styles-wrapper .uagb-editor-preview-mode-mobile .uagb-cta__content-stacked-mobile .uagb-cta__left-right-wrap .uagb-cta__link-wrapper {\n    width: 100%; }\n    .editor-styles-wrapper .uagb-editor-preview-mode-mobile .uagb-cta__content-stacked-mobile .uagb-cta__left-right-wrap .uagb-cta__link-wrapper .uagb-cta__button-wrapper {\n      float: none;\n      margin: 0 auto; }\n\n.editor-styles-wrapper .uagb-editor-preview-mode-mobile .uagb-cta__content-stacked-tablet .uagb-cta__left-right-wrap {\n  flex-direction: column;\n  text-align: center; }\n  .editor-styles-wrapper .uagb-editor-preview-mode-mobile .uagb-cta__content-stacked-tablet .uagb-cta__left-right-wrap .uagb-cta__link-wrapper {\n    width: 100%; }\n    .editor-styles-wrapper .uagb-editor-preview-mode-mobile .uagb-cta__content-stacked-tablet .uagb-cta__left-right-wrap .uagb-cta__link-wrapper .uagb-cta__button-wrapper {\n      float: none;\n      margin: 0 auto; }\n",""]),e.a=n},489:function(t,e,a){"use strict";a.r(e);var r,n=a(3),o=a.n(n),i=a(0),l=a.n(i),c=a(57),u=a(58),b=a(113),s=a(15),p=a.n(s),_=a(252),g=0,d={injectType:"lazySingletonStyleTag",attributes:{id:"uagb-editor-styles"},insert:"head",singleton:!0},w={};w.locals=_.a.locals||{},w.use=function(){return g++||(r=p()(_.a,d)),w},w.unuse=function(){g>0&&!--g&&(r(),r=null)};var m=w,k=a(10);const f=t=>{Object(i.useLayoutEffect)(()=>(m.use(),()=>{m.unuse()}),[]),t=t.parentProps;const{setAttributes:e,attributes:a}=t,r=Object(k.a)(),{block_id:n,ctaPosition:s,ctaType:p,stack:_}=a,g=l.a.createElement(b.a,{attributes:a,setAttributes:e}),d=l.a.createElement(u.a,{attributes:a,setAttributes:e,props:t}),w=l.a.createElement(c.a,{attributes:a,setAttributes:e,props:t}),f=()=>l.a.createElement(l.a.Fragment,null,"below-title"===s&&l.a.createElement(l.a.Fragment,null,w,d,g),"right"===s&&l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"uagb-cta__wrap"},w,d),g));let y;return"right"===s&&"none"!==_&&(y="uagb-cta__content-stacked-"+_+" "),l.a.createElement("div",{className:o()("uagb-block-"+n,"uagb-editor-preview-mode-"+r.toLowerCase(),"uagb-cta__outer-wrap","button"===p?"wp-block-button":"",y)},"all"===p&&l.a.createElement(l.a.Fragment,null,l.a.createElement("a",{href:"/",className:"uagb-cta__link-to-all",rel:"noopener noreferrer"}," "),f()),"all"!==p&&f())};e.default=l.a.memo(f)}}]);