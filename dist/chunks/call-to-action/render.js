(window.webpackJsonp_ultimate_addons_for_gutenberg=window.webpackJsonp_ultimate_addons_for_gutenberg||[]).push([[11],{252:function(t,e,a){"use strict";var n=a(16),r=a.n(n)()((function(t){return t[1]}));r.push([t.i,"/**\n * #.# Editor Styles\n *\n * CSS for just Backend enqueued after style.scss\n * which makes it higher in priority.\n */\n.uagb-cta__content-wrap.uagb-cta__icon-position-above-title {\n  text-align: center; }\n\n.editor-styles-wrapper .edit-post-visual-editor a.uagb-cta__block-link-wrap {\n  color: inherit; }\n\n.editor-styles-wrapper .uagb-cta__title,\n.editor-styles-wrapper .uagb-cta-separator-parent,\n.editor-styles-wrapper .uagb-cta__desc {\n  margin-bottom: 10px; }\n\n.editor-styles-wrapper .uagb-cta__desc {\n  margin: 0; }\n\n.editor-styles-wrapper .uagb-cta__block-link i {\n  font-style: normal; }\n\n.wp-block-uagb-call-to-action.uagb-cta__outer-wrap a.uagb-cta__link-to-all {\n  z-index: 0; }\n\n.editor-styles-wrapper .uagb-cta__outer-wrap a.uagb-cta__button-link-wrapper {\n  text-decoration: none;\n  fill: currentColor; }\n\n.editor-styles-wrapper .uagb-editor-preview-mode-tablet .uagb-cta__content-stacked-tablet .uagb-cta__left-right-wrap {\n  flex-direction: column;\n  text-align: center; }\n  .editor-styles-wrapper .uagb-editor-preview-mode-tablet .uagb-cta__content-stacked-tablet .uagb-cta__left-right-wrap .uagb-cta__link-wrapper {\n    width: 100%; }\n    .editor-styles-wrapper .uagb-editor-preview-mode-tablet .uagb-cta__content-stacked-tablet .uagb-cta__left-right-wrap .uagb-cta__link-wrapper .uagb-cta__button-wrapper {\n      float: none;\n      margin: 0 auto; }\n\n.editor-styles-wrapper .uagb-editor-preview-mode-mobile .uagb-cta__content-stacked-mobile .uagb-cta__left-right-wrap {\n  flex-direction: column;\n  text-align: center; }\n  .editor-styles-wrapper .uagb-editor-preview-mode-mobile .uagb-cta__content-stacked-mobile .uagb-cta__left-right-wrap .uagb-cta__link-wrapper {\n    width: 100%; }\n    .editor-styles-wrapper .uagb-editor-preview-mode-mobile .uagb-cta__content-stacked-mobile .uagb-cta__left-right-wrap .uagb-cta__link-wrapper .uagb-cta__button-wrapper {\n      float: none;\n      margin: 0 auto; }\n\n.editor-styles-wrapper .uagb-editor-preview-mode-mobile .uagb-cta__content-stacked-tablet .uagb-cta__left-right-wrap {\n  flex-direction: column;\n  text-align: center; }\n  .editor-styles-wrapper .uagb-editor-preview-mode-mobile .uagb-cta__content-stacked-tablet .uagb-cta__left-right-wrap .uagb-cta__link-wrapper {\n    width: 100%; }\n    .editor-styles-wrapper .uagb-editor-preview-mode-mobile .uagb-cta__content-stacked-tablet .uagb-cta__left-right-wrap .uagb-cta__link-wrapper .uagb-cta__button-wrapper {\n      float: none;\n      margin: 0 auto; }\n",""]),e.a=r},490:function(t,e,a){"use strict";a.r(e);var n,r=a(3),i=a.n(r),c=a(0),u=a.n(c),o=a(57),l=a(58),M=a(115),s=a(15),w=a.n(s),b=a(252),g=0,N={injectType:"lazySingletonStyleTag",attributes:{id:"uagb-editor-styles"},insert:"head",singleton:!0},L={};L.locals=b.a.locals||{},L.use=function(){return g++||(n=w()(b.a,N)),L},L.unuse=function(){g>0&&!--g&&(n(),n=null)};var p=L,d=a(10);const y=t=>{Object(c.useLayoutEffect)(()=>(p.use(),()=>{p.unuse()}),[]),t=t.parentProps;const{setAttributes:e,attributes:a}=t,n=Object(d.a)(),{isPreview:r,block_id:s,ctaPosition:w,ctaType:b,stack:g}=a,N=u.a.createElement(M.a,{attributes:a,setAttributes:e}),L=u.a.createElement(l.a,{attributes:a,setAttributes:e,props:t}),y=u.a.createElement(o.a,{attributes:a,setAttributes:e,props:t}),z=()=>u.a.createElement(u.a.Fragment,null,"below-title"===w&&u.a.createElement(u.a.Fragment,null,y,L,N),"right"===w&&u.a.createElement(u.a.Fragment,null,u.a.createElement("div",{className:"uagb-cta__wrap"},y,L),N));let _;return"right"===w&&"none"!==g&&(_="uagb-cta__content-stacked-"+g+" "),r?u.a.createElement("img",{width:"100%",src:"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxNi4wLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DQo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB3aWR0aD0iMzUwcHgiIGhlaWdodD0iMzUwcHgiIHZpZXdCb3g9IjAgMCAzNTAgMzUwIiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAzNTAgMzUwIiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxnPg0KCTxwYXRoIGZpbGw9IiNEQkRDREUiIGQ9Ik0yMjYuODU4LDExOC4yNTJjMCwzLjk3Ni0zLjIyNCw3LjItNy4xOTksNy4ySDM4LjEyNmMtMy45NzYsMC03LjItMy4yMjQtNy4yLTcuMnYwLjQzNg0KCQljMC0zLjk3NSwzLjIyNC03LjIsNy4yLTcuMmgxODEuNTMzYzMuOTc2LDAsNy4xOTksMy4yMjUsNy4xOTksNy4yVjExOC4yNTJ6Ii8+DQoJPGc+DQoJCTxwYXRoIGZpbGw9IiNEQkRDREUiIGQ9Ik0zMTkuMDczLDE1NS43OWMwLDIuMDcxLTEuNjc3LDMuNzQ4LTMuNzQ5LDMuNzQ4SDM0LjY3NmMtMi4wNzIsMC0zLjc1LTEuNjc3LTMuNzUtMy43NDhsMCwwDQoJCQljMC0yLjA3MywxLjY3Ny0zLjc1MSwzLjc1LTMuNzUxaDI4MC42NDhDMzE3LjM5NiwxNTIuMDM4LDMxOS4wNzMsMTUzLjcxNywzMTkuMDczLDE1NS43OUwzMTkuMDczLDE1NS43OXoiLz4NCgkJPHBhdGggZmlsbD0iI0RCRENERSIgZD0iTTMxOS4wNzMsMTY5LjQ4NGMwLDIuMDY5LTEuNjc3LDMuNzQ3LTMuNzQ5LDMuNzQ3SDM0LjY3NmMtMi4wNzIsMC0zLjc1LTEuNjc3LTMuNzUtMy43NDdsMCwwDQoJCQljMC0yLjA3NCwxLjY3Ny0zLjc1MiwzLjc1LTMuNzUyaDI4MC42NDhDMzE3LjM5NiwxNjUuNzMyLDMxOS4wNzMsMTY3LjQxMSwzMTkuMDczLDE2OS40ODRMMzE5LjA3MywxNjkuNDg0eiIvPg0KCQk8cGF0aCBmaWxsPSIjREJEQ0RFIiBkPSJNMzE5LjA3MywxODQuNTk2YzAsMi4wNzItMS42NzcsMy43NS0zLjc0OSwzLjc1SDM0LjY3NmMtMi4wNzIsMC0zLjc1LTEuNjc4LTMuNzUtMy43NWwwLDANCgkJCWMwLTIuMDczLDEuNjc3LTMuNzUsMy43NS0zLjc1aDI4MC42NDhDMzE3LjM5NiwxODAuODQ2LDMxOS4wNzMsMTgyLjUyMiwzMTkuMDczLDE4NC41OTZMMzE5LjA3MywxODQuNTk2eiIvPg0KCTwvZz4NCgk8cGF0aCBmaWxsPSIjREJEQ0RFIiBkPSJNMTU2LjA0NiwyMjYuNzIzYzAsNi41MTItNS4yNzksMTEuNzg5LTExLjc5MSwxMS43ODlINDIuNzE5Yy02LjUxMiwwLTExLjc5Mi01LjI3Ny0xMS43OTItMTEuNzg5bDAsMA0KCQljMC02LjUxMiw1LjI4LTExLjc5MiwxMS43OTItMTEuNzkyaDEwMS41MzZDMTUwLjc2NywyMTQuOTMxLDE1Ni4wNDYsMjIwLjIxMSwxNTYuMDQ2LDIyNi43MjNMMTU2LjA0NiwyMjYuNzIzeiIvPg0KPC9nPg0KPC9zdmc+DQo=",alt:""}):u.a.createElement("div",{className:i()("uagb-block-"+s,"uagb-editor-preview-mode-"+n.toLowerCase(),"uagb-cta__outer-wrap","button"===b?"wp-block-button":"",_)},"all"===b&&u.a.createElement(u.a.Fragment,null,u.a.createElement("a",{href:"/",className:"uagb-cta__link-to-all",rel:"noopener noreferrer"}," "),z()),"all"!==b&&z())};e.default=u.a.memo(y)}}]);