(window.webpackJsonp_ultimate_addons_for_gutenberg=window.webpackJsonp_ultimate_addons_for_gutenberg||[]).push([[86],{333:function(e,t,n){"use strict";var a=n(17),o=n.n(a)()((function(e){return e[1]}));o.push([e.i,'/**\r\n * #.# Editor Styles\r\n *\r\n * CSS for just Backend enqueued after style.scss\r\n * which makes it higher in priority.\r\n */\n.uagb-section__wrap::before {\n  position: absolute;\n  top: -1px;\n  right: -1px;\n  bottom: -1px;\n  left: -1px;\n  z-index: 0;\n  border: 1px dashed #03ddff;\n  content: ""; }\n\n.uagb-section__edit-active.uagb-section__wrap::before {\n  border-color: #035cff; }\n\n.editor-bg-image-control .components-button,\n.editor-bg-video-control .components-button {\n  vertical-align: middle; }\n\n.editor-bg-image-control .components-button:last-child,\n.editor-bg-video-control .components-button:last-child {\n  margin-left: 10px; }\n\n.editor-block-list__layout .editor-block-list__block[data-align="full"][data-type="uagb/section"] {\n  margin-right: 0;\n  margin-left: 0; }\n',""]),t.a=o},574:function(e,t,n){"use strict";n.r(t);var a,o=n(4),i=n.n(o),r=n(1),c=n.n(r),l=n(5),s=n(16),u=n.n(s),d=n(333),b=0,g={injectType:"lazySingletonStyleTag",attributes:{id:"uagb-editor-styles"},insert:"head",singleton:!0},p={};p.locals=d.a.locals||{},p.use=function(){return b++||(a=u()(d.a,g)),p},p.unuse=function(){b>0&&!--b&&(a(),a=null)};var m=p,_=function(e){Object(r.useLayoutEffect)((function(){return m.use(),function(){m.unuse()}}),[]);var t=e=e.parentProps,n=t.attributes,a=t.isSelected,o=t.className,s=t.deviceType,u=n.align,d=n.contentWidth,b=n.tag,g=n.backgroundType,p=n.backgroundVideo,_="".concat(b),f=a?"active":"not-active",v="";return"full_width"===d&&("wide"!==u&&"full"!==u||(v="align"+u)),c.a.createElement(c.a.Fragment,null,c.a.createElement(_,{className:i()(o,"uagb-section__wrap","uagb-section__background-".concat(g),"uagb-section__edit-".concat(f),v,"uagb-editor-preview-mode-".concat(s.toLowerCase()),"uagb-block-".concat(e.clientId.substr(0,8)))},c.a.createElement("div",{className:"uagb-section__overlay"}),"video"===g&&c.a.createElement("div",{className:"uagb-section__video-wrap"},p&&c.a.createElement("video",{autoPlay:!0,loop:!0,muted:!0,playsinline:!0},c.a.createElement("source",{src:p.url,type:"video/mp4"}))),c.a.createElement("div",{className:"uagb-section__inner-wrap"},c.a.createElement(l.InnerBlocks,{templateLock:!1}))))};t.default=c.a.memo(_)}}]);