(window.webpackJsonp_ultimate_addons_for_gutenberg=window.webpackJsonp_ultimate_addons_for_gutenberg||[]).push([[74],{495:function(e,t,a){"use strict";a.r(t);var l=a(0),n=a.n(l),o=a(1),i=a(11),r=a(80),c=a(24),u=a(19),b=a(16),s=a(21),g=a(18),d=a(52),m=a(4),_=a(6),p=a(15);function h(){return(h=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var l in a)Object.prototype.hasOwnProperty.call(a,l)&&(e[l]=a[l])}return e}).apply(this,arguments)}const f=e=>{const{loopLottie:t,reverseDirection:a}=e;e=e.parentProps;const{setAttributes:l,attributes:f}=e,{align:j,height:v,heightTablet:O,heightMob:E,width:w,widthTablet:y,widthMob:k,backgroundColor:C,loop:L,speed:T,reverse:R,jsonLottie:U,lottieURl:A,playOn:S,backgroundHColor:P,isPreview:M}=f,N=n.a.createElement(p.a,{title:Object(o.__)("Content","ultimate-addons-for-gutenberg"),initialOpen:!0},n.a.createElement(u.a,{setAttributes:l,label:Object(o.__)("Play On","ultimate-addons-for-gutenberg"),data:{value:S,label:"playOn"},className:"uagb-multi-button-alignment-control",options:[{value:"none",label:Object(o.__)("Default","ultimate-addons-for-gutenberg")},{value:"hover",label:Object(o.__)("Hover","ultimate-addons-for-gutenberg")},{value:"click",label:Object(o.__)("Click","ultimate-addons-for-gutenberg")},{value:"scroll",label:Object(o.__)("Viewport","ultimate-addons-for-gutenberg")}],help:"scroll"===S?Object(o.__)("This setting will only take effect once you are on the live page, and not while you're editing.","ultimate-addons-for-gutenberg"):""}),n.a.createElement(u.a,{setAttributes:l,label:Object(o.__)("Alignment","ultimate-addons-for-gutenberg"),data:{value:j,label:"align"},className:"uagb-multi-button-alignment-control",options:[{value:"left",icon:n.a.createElement(_.Icon,{icon:Object(i.a)("fa fa-align-left")}),tooltip:Object(o.__)("Left","ultimate-addons-for-gutenberg")},{value:"center",icon:n.a.createElement(_.Icon,{icon:Object(i.a)("fa fa-align-center")}),tooltip:Object(o.__)("Center","ultimate-addons-for-gutenberg")},{value:"right",icon:n.a.createElement(_.Icon,{icon:Object(i.a)("fa fa-align-right")}),tooltip:Object(o.__)("Right","ultimate-addons-for-gutenberg")}],showIcons:!0}),n.a.createElement(_.ToggleControl,{label:Object(o.__)("Loop","ultimate-addons-for-gutenberg"),checked:L,onChange:t,help:Object(o.__)("Enabling this will show the animation in the loop. This setting will only take effect once you are on the live page, and not while you're editing.")}),n.a.createElement(g.a,{label:Object(o.__)("Speed","ultimate-addons-for-gutenberg"),setAttributes:l,value:T,onChange:e=>l({speed:e}),min:1,max:50,displayUnit:!1}),L&&n.a.createElement(_.ToggleControl,{label:Object(o.__)("Reverse","ultimate-addons-for-gutenberg"),checked:R,onChange:a,help:Object(o.__)("Direction of animation.","ultimate-addons-for-gutenberg")})),H=n.a.createElement(p.a,{title:Object(o.__)("Background","ultimate-addons-for-gutenberg"),initialOpen:!0},n.a.createElement(s.a,{label:Object(o.__)("Width","ultimate-addons-for-gutenberg"),data:{desktop:{value:w,label:"width"},tablet:{value:y,label:"widthTablet"},mobile:{value:k,label:"widthMob"}},min:0,max:1e3,displayUnit:!1,setAttributes:l}),n.a.createElement(s.a,{label:Object(o.__)("Height","ultimate-addons-for-gutenberg"),data:{desktop:{value:v,label:"height"},tablet:{value:O,label:"heightTablet"},mobile:{value:E,label:"heightMob"}},min:0,max:1e3,displayUnit:!1,setAttributes:l}),n.a.createElement(d.a,{tabs:[{name:"normal",title:Object(o.__)("Normal","ultimate-addons-for-gutenberg")},{name:"hover",title:Object(o.__)("Hover","ultimate-addons-for-gutenberg")}],normal:n.a.createElement(b.a,{label:Object(o.__)("Color","ultimate-addons-for-gutenberg"),colorValue:C||"",onColorChange:e=>l({backgroundColor:e})}),hover:n.a.createElement(b.a,{label:Object(o.__)("Color","ultimate-addons-for-gutenberg"),colorValue:P||"",onColorChange:e=>l({backgroundHColor:e})}),disableBottomSeparator:!0})),I=e=>{e&&e.url?(l({jsonLottie:e}),l({lottieURl:e.url})):l({jsonLottie:null})};let x="invalid";if(A&&A.endsWith(".json")&&(x="valid"),!uagb_blocks_info.uagb_mime_type)return n.a.createElement("div",{className:"uagb-show-notice"},n.a.createElement("span",null,Object(o.__)("Lottie block requires the file type JSON to be uploaded to media files. Seems like your website has disabled this file type. Please refer","ultimate-addons-for-gutenberg"),n.a.createElement("a",{href:uagb_blocks_info.uagb_site_url+"/docs/lottie/?utm_source=uagb-dashboard&utm_medium=uagb-editor-page&utm_campaign=uagb-plugin",target:"__blank"}," ",Object(o.__)("this document")," "),Object(o.__)("to know more about it.")));if("invalid"===x){const e=n.a.createElement("span",null," ",Object(o.__)("Allows you to add fancy animation i.e Lottie to your website. You can see sample Lottie animations","ultimate-addons-for-gutenberg"),n.a.createElement("a",{href:"https://lottiefiles.com/",target:"__blank"}," ",Object(o.__)("here on this")," "),Object(o.__)("website.")),t=uagb_blocks_info.uagb_url+"/admin/assets/preview-images/lottie-animation.png";return M?n.a.createElement("img",{width:"100%",src:t,alt:""}):n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"uagb-lottie_upload_wrap"},n.a.createElement(m.MediaPlaceholder,{labels:{title:Object(o.__)("Lottie","ultimate-addons-for-gutenberg"),instructions:e},allowedTypes:["application/json"],accept:["application/json"],value:U,onSelectURL:e=>l({lottieURl:e}),onSelect:I})))}return n.a.createElement(n.a.Fragment,null,"valid"===x&&n.a.createElement(m.BlockControls,null,n.a.createElement(_.ToolbarGroup,null,n.a.createElement(m.MediaReplaceFlow,{mediaURL:A,allowedTypes:["application/json"],accept:["application/json"],onSelectURL:e=>l({lottieURl:e}),onSelect:I})),n.a.createElement(m.AlignmentToolbar,{value:j,onChange:e=>l({align:e})})),n.a.createElement(m.InspectorControls,null,n.a.createElement(r.a,{tabs:["general","style","advance"]},n.a.createElement(c.b,c.a.general,N),n.a.createElement(c.b,c.a.style,H),n.a.createElement(c.b,h({},c.a.advance,{parentProps:e})))))};t.default=n.a.memo(f)}}]);