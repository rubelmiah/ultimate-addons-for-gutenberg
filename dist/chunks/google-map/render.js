(window.webpackJsonp_ultimate_addons_for_gutenberg=window.webpackJsonp_ultimate_addons_for_gutenberg||[]).push([[57],{271:function(e,a,t){"use strict";var n=t(15),o=t.n(n)()((function(e){return e[1]}));o.push([e.i,".block-editor-block-list__block .uagb-google-map__wrap {\n  padding: 25px; }\n",""]),a.a=o},510:function(e,a,t){"use strict";t.r(a);var n,o=t(0),s=t.n(o),l=t(3),u=t.n(l),r=t(1),i=t(14),g=t.n(i),c=t(271),m=0,d={injectType:"lazySingletonStyleTag",attributes:{id:"uagb-editor-styles"},insert:"head",singleton:!0},b={};b.locals=c.a.locals||{},b.use=function(){return m++||(n=g()(c.a,d)),b},b.unuse=function(){m>0&&!--m&&(n(),n=null)};var p=b;const _=e=>{Object(o.useLayoutEffect)(()=>(p.use(),()=>{p.unuse()}),[]),e=e.parentProps;const{className:a,attributes:{isPreview:t,height:n,zoom:l,address:i,language:g}}=e,c=encodeURI(i),m=g||"en",d=`https://www.google.com/maps/embed/v1/place?key=${wp.uagb_google_api_key}&q=${c}&zoom=${l}&language=${m}`;return t?s.a.createElement("img",{width:"100%",src:"data:image/svg+xml;base64,",alt:""}):s.a.createElement("div",{className:u()(a,"uagb-google-map__wrap","uagb-block-"+e.clientId.substr(0,8))},s.a.createElement("iframe",{className:"uagb-google-map__iframe",title:Object(r.__)("Google Map for ","ultimate-addons-for-gutenberg")+i,src:d,style:{height:n}}))};a.default=s.a.memo(_)}}]);