(window.webpackJsonp_ultimate_addons_for_gutenberg=window.webpackJsonp_ultimate_addons_for_gutenberg||[]).push([[74],{200:function(e,t,a){"use strict";var n,l=a(1),o=a(6),i=a(4),r=a(0),u=a.n(r),c=a(13),b=a.n(c),s=a(201),g=0,d={injectType:"lazySingletonStyleTag",attributes:{id:"uagb-editor-styles"},insert:"head",singleton:!0},m={};m.locals=s.a.locals||{},m.use=function(){return g++||(n=b()(s.a,d)),m},m.unuse=function(){g>0&&!--g&&(n(),n=null)};var _=m;t.a=e=>{Object(r.useLayoutEffect)(()=>(_.use(),()=>{_.unuse()}),[]);const{onSelectImage:t,backgroundImage:a,onRemoveImage:n,showVideoInput:c,label:b,disableRemove:s=!1,allow:g=["image"]}=e;let d=Object(l.__)("Image","ultimate-addons-for-gutenberg"),m=Object(l.__)("Select Image","ultimate-addons-for-gutenberg"),p=Object(l.__)("Replace Image","ultimate-addons-for-gutenberg"),f=Object(l.__)("Remove Image","ultimate-addons-for-gutenberg"),h=["image"];return c&&(d=Object(l.__)("Video","ultimate-addons-for-gutenberg"),m=Object(l.__)("Select Video","ultimate-addons-for-gutenberg"),p=Object(l.__)("Replace Video","ultimate-addons-for-gutenberg"),f=Object(l.__)("Remove Video","ultimate-addons-for-gutenberg"),h=["video"]),d=b||d,d=!1===b?b:d,"Lottie Animation"===b&&(m=Object(l.__)("Select Lottie Animation","ultimate-addons-for-gutenberg"),p=Object(l.__)("Replace Lottie Animation","ultimate-addons-for-gutenberg"),f=Object(l.__)("Remove Lottie Animation","ultimate-addons-for-gutenberg"),h=g),u.a.createElement(o.BaseControl,{className:"editor-bg-image-control",id:"uagb-option-selector-"+b,label:d},u.a.createElement("div",{className:"uagb-bg-image"},u.a.createElement(i.MediaUpload,{title:m,onSelect:t,allowedTypes:h,value:a,render:e=>{let{open:t}=e;return u.a.createElement(o.Button,{isSecondary:!0,onClick:t},null!=a&&a.url?p:m)}}),!s&&(null==a?void 0:a.url)&&u.a.createElement(o.Button,{className:"uagb-rm-btn",onClick:n,isLink:!0,isDestructive:!0},f),e.help&&u.a.createElement("p",{className:"uag-control-help-notice"},e.help)))}},201:function(e,t,a){"use strict";var n=a(14),l=a.n(n)()((function(e){return e[1]}));l.push([e.i,".uagb-bg-image {\n  border-radius: 2px;\n  background-color: #f0f0f0;\n  min-height: 90px;\n  padding: 8px 0;\n  text-align: center;\n  display: flex;\n  width: 100%;\n  transition: all 0.1s ease-out;\n  box-shadow: 0 0 0 0 #0085ba;\n  margin-top: 10px;\n  align-items: center;\n  justify-content: center; }\n  .uagb-bg-image .components-button {\n    margin: 0;\n    padding: 0; }\n  .uagb-bg-image .uagb-rm-btn {\n    margin-left: 10px; }\n\n.uagb-bg-image .components-button:focus:not(:disabled),\n.uagb-bg-image .components-button.is-secondary:hover:not(:disabled),\n.components-button.is-tertiary:hover:not(:disabled),\n.uagb-bg-image .components-button.is-secondary,\n.components-button.is-tertiary {\n  box-shadow: none; }\n",""]),t.a=l},492:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),o=a(1),i=a(11),r=a(79),u=a(24),c=a(19),b=a(16),s=a(21),g=a(18),d=a(200),m=a(52),_=a(4),p=a(6),f=a(15);function h(){return(h=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}const j=e=>{const{loopLottie:t,reverseDirection:a}=e;e=e.parentProps;const{setAttributes:n,attributes:j}=e,{lottieSource:v,align:O,height:E,heightTablet:w,heightMob:y,width:k,widthTablet:C,widthMob:L,backgroundColor:R,loop:S,speed:A,reverse:I,jsonLottie:T,lottieURl:U,playOn:x,backgroundHColor:N,isPreview:B}=j,V=e=>{e&&e.url?(n({jsonLottie:e}),n({lottieURl:e.url})):n({jsonLottie:null})},M=l.a.createElement(l.a.Fragment,null,l.a.createElement(f.a,{title:Object(o.__)("General","ultimate-addons-for-gutenberg"),initialOpen:!0},l.a.createElement(c.a,{setAttributes:n,label:Object(o.__)("File Source","ultimate-addons-for-gutenberg"),data:{value:v,label:"lottieSource"},options:[{value:"library",label:Object(o.__)("Library","ultimate-addons-for-gutenberg")},{value:"url",label:Object(o.__)("URL","ultimate-addons-for-gutenberg")}]}),"upload"===v&&l.a.createElement(d.a,{label:"Lottie Animation",backgroundImage:T,onSelectImage:V,disableRemove:!0,allow:["application/json"]}),"library"===v&&l.a.createElement(d.a,{label:"Lottie Animation",backgroundImage:T,onSelectImage:V,disableRemove:!0,allow:["application/json"]}),"url"===v&&l.a.createElement(p.TextControl,{label:Object(o.__)("Lottie Animation URL","ultimate-addons-for-gutenberg"),value:U,onChange:e=>n({lottieURl:e})})),l.a.createElement(f.a,{title:Object(o.__)("Content","ultimate-addons-for-gutenberg"),initialOpen:!1},l.a.createElement(c.a,{setAttributes:n,label:Object(o.__)("Play On","ultimate-addons-for-gutenberg"),data:{value:x,label:"playOn"},className:"uagb-multi-button-alignment-control",options:[{value:"none",label:Object(o.__)("Default","ultimate-addons-for-gutenberg")},{value:"hover",label:Object(o.__)("Hover","ultimate-addons-for-gutenberg")},{value:"click",label:Object(o.__)("Click","ultimate-addons-for-gutenberg")},{value:"scroll",label:Object(o.__)("Viewport","ultimate-addons-for-gutenberg")}],help:"scroll"===x?Object(o.__)("This setting will only take effect once you are on the live page, and not while you're editing.","ultimate-addons-for-gutenberg"):""}),l.a.createElement(c.a,{setAttributes:n,label:Object(o.__)("Alignment","ultimate-addons-for-gutenberg"),data:{value:O,label:"align"},className:"uagb-multi-button-alignment-control",options:[{value:"left",icon:l.a.createElement(p.Icon,{icon:Object(i.a)("fa fa-align-left")}),tooltip:Object(o.__)("Left","ultimate-addons-for-gutenberg")},{value:"center",icon:l.a.createElement(p.Icon,{icon:Object(i.a)("fa fa-align-center")}),tooltip:Object(o.__)("Center","ultimate-addons-for-gutenberg")},{value:"right",icon:l.a.createElement(p.Icon,{icon:Object(i.a)("fa fa-align-right")}),tooltip:Object(o.__)("Right","ultimate-addons-for-gutenberg")}],showIcons:!0}),l.a.createElement(p.ToggleControl,{label:Object(o.__)("Loop","ultimate-addons-for-gutenberg"),checked:S,onChange:t,help:Object(o.__)("Enabling this will show the animation in the loop. This setting will only take effect once you are on the live page, and not while you're editing.")}),l.a.createElement(g.a,{label:Object(o.__)("Speed","ultimate-addons-for-gutenberg"),setAttributes:n,value:A,onChange:e=>n({speed:e}),min:1,max:50,displayUnit:!1}),S&&l.a.createElement(p.ToggleControl,{label:Object(o.__)("Reverse","ultimate-addons-for-gutenberg"),checked:I,onChange:a,help:Object(o.__)("Direction of animation.","ultimate-addons-for-gutenberg")}))),P=l.a.createElement(f.a,{title:Object(o.__)("Background","ultimate-addons-for-gutenberg"),initialOpen:!0},l.a.createElement(s.a,{label:Object(o.__)("Width","ultimate-addons-for-gutenberg"),data:{desktop:{value:k,label:"width"},tablet:{value:C,label:"widthTablet"},mobile:{value:L,label:"widthMob"}},min:0,max:1e3,displayUnit:!1,setAttributes:n}),l.a.createElement(s.a,{label:Object(o.__)("Height","ultimate-addons-for-gutenberg"),data:{desktop:{value:E,label:"height"},tablet:{value:w,label:"heightTablet"},mobile:{value:y,label:"heightMob"}},min:0,max:1e3,displayUnit:!1,setAttributes:n}),l.a.createElement(m.a,{tabs:[{name:"normal",title:Object(o.__)("Normal","ultimate-addons-for-gutenberg")},{name:"hover",title:Object(o.__)("Hover","ultimate-addons-for-gutenberg")}],normal:l.a.createElement(b.a,{label:Object(o.__)("Background Color","ultimate-addons-for-gutenberg"),colorValue:R||"",onColorChange:e=>n({backgroundColor:e})}),hover:l.a.createElement(b.a,{label:Object(o.__)("Background Color","ultimate-addons-for-gutenberg"),colorValue:N||"",onColorChange:e=>n({backgroundHColor:e})}),disableBottomSeparator:!0}));let F="invalid";if(U&&U.endsWith(".json")&&(F="valid"),!uagb_blocks_info.uagb_mime_type)return l.a.createElement("div",{className:"uagb-show-notice"},l.a.createElement("span",null,Object(o.__)("Lottie block requires the file type JSON to be uploaded to media files. Seems like your website has disabled this file type. Please refer","ultimate-addons-for-gutenberg"),l.a.createElement("a",{href:uagb_blocks_info.uagb_site_url+"/docs/lottie/?utm_source=uagb-dashboard&utm_medium=uagb-editor-page&utm_campaign=uagb-plugin",target:"__blank"}," ",Object(o.__)("this document")," "),Object(o.__)("to know more about it.")));if("invalid"===F){const e=l.a.createElement("span",null," ",Object(o.__)("Allows you to add fancy animation i.e Lottie to your website. You can see sample Lottie animations","ultimate-addons-for-gutenberg"),l.a.createElement("a",{href:"https://lottiefiles.com/",target:"__blank"}," ",Object(o.__)("here on this")," "),Object(o.__)("website.")),t=uagb_blocks_info.uagb_url+"/admin/assets/preview-images/lottie-animation.png";return B?l.a.createElement("img",{width:"100%",src:t,alt:""}):l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"uagb-lottie_upload_wrap"},l.a.createElement(_.MediaPlaceholder,{labels:{title:Object(o.__)("Lottie","ultimate-addons-for-gutenberg"),instructions:e},allowedTypes:["application/json"],accept:["application/json"],value:T,onSelectURL:e=>n({lottieURl:e}),onSelect:V})))}return l.a.createElement(l.a.Fragment,null,"valid"===F&&l.a.createElement(_.BlockControls,null,l.a.createElement(p.ToolbarGroup,null,l.a.createElement(_.MediaReplaceFlow,{mediaURL:U,allowedTypes:["application/json"],accept:["application/json"],onSelectURL:e=>n({lottieURl:e}),onSelect:V})),l.a.createElement(_.AlignmentToolbar,{value:O,onChange:e=>n({align:e})})),l.a.createElement(_.InspectorControls,null,l.a.createElement(r.a,{tabs:["general","style","advance"]},l.a.createElement(u.b,u.a.general,M),l.a.createElement(u.b,u.a.style,P),l.a.createElement(u.b,h({},u.a.advance,{parentProps:e})))))};t.default=l.a.memo(j)}}]);