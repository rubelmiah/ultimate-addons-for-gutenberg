(window.webpackJsonp_ultimate_addons_for_gutenberg=window.webpackJsonp_ultimate_addons_for_gutenberg||[]).push([[69],{283:function(e,t,n){"use strict";var a=n(15),i=n.n(a)()((function(e){return e[1]}));i.push([e.i,'.editor-styles-wrapper [data-type="uagb/inline-notice"] .uagb-notice-title {\n  margin: 0; }\n\n.editor-styles-wrapper [data-type="uagb/inline-notice"] p.block-editor-rich-text__editable.uagb-notice-text.rich-text {\n  margin: 0; }\n',""]),t.a=i},523:function(e,t,n){"use strict";n.r(t);var a,i=n(3),o=n.n(i),c=n(11),l=n(4),s=n(1),r=n(0),u=n.n(r),g=n(14),d=n.n(g),b=n(283),m=0,p={injectType:"lazySingletonStyleTag",attributes:{id:"uagb-editor-styles"},insert:"head",singleton:!0},_={};_.locals=b.a.locals||{},_.use=function(){return m++||(a=d()(b.a,p)),_},_.unuse=function(){m>0&&!--m&&(a(),a=null)};var h=_,f=n(10);const w=e=>{Object(r.useLayoutEffect)(()=>(h.use(),()=>{h.unuse()}),[]),e=e.parentProps;const t=Object(f.a)(),{attributes:{isPreview:n,block_id:a,icon:i,noticeTitle:g,noticeContent:d,noticeDismiss:b,noticeAlignment:m,headingTag:p},setAttributes:_,className:w}=e;let v="";b&&(v=Object(c.a)(i));const y=uagb_blocks_info.uagb_url+"/admin/assets/preview-images/inline-notice.png";return n?u.a.createElement("img",{width:"100%",src:y,alt:""}):u.a.createElement("div",{className:o()(w,""+b,"uagb-inline_notice__align-"+m,"uagb-block-"+a,"uagb-editor-preview-mode-"+t.toLowerCase())},v,u.a.createElement(l.RichText,{tagName:p,placeholder:Object(s.__)("Notice Title","ultimate-addons-for-gutenberg"),keepPlaceholderOnFocus:!0,value:g,className:"uagb-notice-title",onChange:e=>_({noticeTitle:e})}),u.a.createElement(l.RichText,{tagName:"div",multiline:"p",placeholder:Object(s.__)("Add Content…","ultimate-addons-for-gutenberg"),value:d,className:"uagb-notice-text",onChange:e=>_({noticeContent:e})}))};t.default=u.a.memo(w)}}]);