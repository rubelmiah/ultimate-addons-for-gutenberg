(window.webpackJsonp_ultimate_addons_for_gutenberg=window.webpackJsonp_ultimate_addons_for_gutenberg||[]).push([[93],{308:function(e,t,n){"use strict";var a=n(17),o=n.n(a)()((function(e){return e[1]}));o.push([e.i,'/**\n * #.# Editor Styles\n *\n * CSS for just Backend enqueued after style.scss\n * which makes it higher in priority.\n */\n.uagb-section__wrap::before {\n  position: absolute;\n  top: -1px;\n  right: -1px;\n  bottom: -1px;\n  left: -1px;\n  z-index: 0;\n  border: 1px dashed #03ddff;\n  content: ""; }\n\n.uagb-section__edit-active.uagb-section__wrap::before {\n  border-color: #035cff; }\n\n.editor-bg-image-control .components-button,\n.editor-bg-video-control .components-button {\n  vertical-align: middle; }\n\n.editor-bg-image-control .components-button:last-child,\n.editor-bg-video-control .components-button:last-child {\n  margin-left: 10px; }\n\n.editor-block-list__layout .editor-block-list__block[data-align="full"][data-type="uagb/section"] {\n  margin-right: 0;\n  margin-left: 0; }\n',""]),t.a=o},553:function(e,t,n){"use strict";n.r(t);var a,o=n(3),i=n.n(o),r=n(0),s=n.n(r),c=n(4),l=n(16),u=n.n(l),d=n(308),b=0,g={injectType:"lazySingletonStyleTag",attributes:{id:"uagb-editor-styles"},insert:"head",singleton:!0},m={};m.locals=d.a.locals||{},m.use=function(){return b++||(a=u()(d.a,g)),m},m.unuse=function(){b>0&&!--b&&(a(),a=null)};var p=m,_=n(10);const f=e=>{Object(r.useLayoutEffect)(()=>(p.use(),()=>{p.unuse()}),[]),e=e.parentProps;const t=Object(_.a)(),{attributes:n,isSelected:a,className:o}=e,{isPreview:l,align:u,contentWidth:d,tag:b,backgroundType:g,backgroundVideo:m}=n,f=""+b,v=a?"active":"not-active";let w="";"full_width"===d&&("wide"!==u&&"full"!==u||(w="align"+u));const h=uagb_blocks_info.uagb_url+"/admin/assets/preview-images/advanced-row.png";return s.a.createElement(s.a.Fragment,null,l?s.a.createElement("img",{width:"100%",src:h,alt:""}):s.a.createElement(f,{className:i()(o,"uagb-section__wrap","uagb-section__background-"+g,"uagb-section__edit-"+v,w,"uagb-editor-preview-mode-"+t.toLowerCase(),"uagb-block-"+e.clientId.substr(0,8))},s.a.createElement("div",{className:"uagb-section__overlay"}),"video"===g&&s.a.createElement("div",{className:"uagb-section__video-wrap"},m&&s.a.createElement("video",{autoPlay:!0,loop:!0,muted:!0,playsinline:!0},s.a.createElement("source",{src:m.url,type:"video/mp4"}))),s.a.createElement("div",{className:"uagb-section__inner-wrap"},s.a.createElement(c.InnerBlocks,{templateLock:!1}))))};t.default=s.a.memo(f)}}]);