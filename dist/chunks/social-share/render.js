(window.webpackJsonp_ultimate_addons_for_gutenberg=window.webpackJsonp_ultimate_addons_for_gutenberg||[]).push([[97],{317:function(o,e,a){"use strict";var i=a(15),c=a.n(i)()((function(o){return o[1]}));c.push([o.i,'/**\n * Editor styles for the admin\n */\n#wpwrap .edit-post-visual-editor a.uagb-ss__link {\n  color: #3a3a3a; }\n\n.uagb-social-share__layout-vertical .uagb-social-share__outer-wrap > .block-editor-inner-blocks {\n  width: 100%; }\n\n[data-type="uagb/social-share"] .uagb-social-share__layout-horizontal .block-editor-inner-blocks > .block-editor-block-list__layout {\n  display: flex; }\n\n[data-type="uagb/social-share"] .block-editor-inner-blocks > .block-editor-block-list__layout > .wp-block {\n  width: auto;\n  padding-right: 0;\n  padding-left: 0; }\n',""]),e.a=c},557:function(o,e,a){"use strict";a.r(e);var i,c=a(4),n=a.n(c),t=a(5),r=a(0),l=a.n(r),s=a(14),_=a.n(s),u=a(317),b=0,g={injectType:"lazySingletonStyleTag",attributes:{id:"uagb-editor-styles"},insert:"head",singleton:!0},d={};d.locals=u.a.locals||{},d.use=function(){return b++||(i=_()(u.a,g)),d},d.unuse=function(){b>0&&!--b&&(i(),i=null)};var h=d,p=a(11);const m=["uagb/social-share-child"],f=o=>{Object(r.useLayoutEffect)(()=>(h.use(),()=>{h.unuse()}),[]),o=o.parentProps;const e=Object(p.a)(),{attributes:a}=o,{isPreview:i,className:c,social_layout:s}=a,_=uagb_blocks_info.uagb_url+"/admin/assets/preview-images/social-share.png";return i?l.a.createElement("img",{width:"100%",src:_,alt:""}):l.a.createElement("div",{className:n()(c,"uagb-social-share__outer-wrap","uagb-social-share__layout-"+s,"uagb-editor-preview-mode-"+e.toLowerCase(),"uagb-block-"+o.clientId.substr(0,8))},l.a.createElement(t.InnerBlocks,{template:[["uagb/social-share-child",{type:"facebook",image_icon:"icon",icon:"fab fa-facebook",image:"",icon_color:"#3b5998",icon_hover_color:"",icon_bg_color:"",icon_bg_hover_color:""}],["uagb/social-share-child",{type:"twitter",image_icon:"icon",icon:"fab fa-twitter-square",image:"",icon_color:"#55acee",icon_hover_color:"",icon_bg_color:"",icon_bg_hover_color:""}],["uagb/social-share-child",{type:"pinterest",image_icon:"icon",icon:"fab fa-pinterest-square",image:"",icon_color:"#bd081c",icon_hover_color:"",icon_bg_color:"",icon_bg_hover_color:""}],["uagb/social-share-child",{type:"linkedin",image_icon:"icon",icon:"fab fa-linkedin",image:"",icon_color:"#0077b5",icon_hover_color:"",icon_bg_color:"",icon_bg_hover_color:""}]],templateLock:!1,allowedBlocks:m,__experimentalMoverDirection:s}))};e.default=l.a.memo(f)}}]);