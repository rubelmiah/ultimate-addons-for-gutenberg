(window.webpackJsonp_ultimate_addons_for_gutenberg=window.webpackJsonp_ultimate_addons_for_gutenberg||[]).push([[57],{313:function(e,a,t){"use strict";var o=t(16),n=t.n(o)()((function(e){return e[1]}));n.push([e.i,".block-editor-block-list__block .uagb-google-map__wrap {\n  padding: 25px; }\n",""]),a.a=n},556:function(e,a,t){"use strict";t.r(a);var o,n=t(0),s=t.n(n),r=t(4),u=t.n(r),l=t(1),i=t(15),g=t.n(i),c=t(313),b=0,m={injectType:"lazySingletonStyleTag",attributes:{id:"uagb-editor-styles"},insert:"head",singleton:!0},p={};p.locals=c.a.locals||{},p.use=function(){return b++||(o=g()(c.a,m)),p},p.unuse=function(){b>0&&!--b&&(o(),o=null)};var d=p,_=t(3),w=t(11);const f=e=>{const a=Object(w.a)();Object(n.useLayoutEffect)(()=>(d.use(),()=>{d.unuse()}),[]);const t=(e=e.parentProps).name.replace("uagb/",""),{className:o,attributes:{isPreview:r,zoom:i,address:g,language:c}}=e,b=encodeURI(g),m=c||"en",p=`https://www.google.com/maps/embed/v1/place?key=${wp.uagb_google_api_key}&q=${b}&zoom=${Object(_.a)(i,"zoom",t)}&language=${m}`,f=uagb_blocks_info.uagb_url+"/admin/assets/preview-images/gmap.png";return r?s.a.createElement("img",{width:"100%",src:f,alt:""}):s.a.createElement("div",{className:u()(o,"uagb-google-map__wrap","uagb-block-"+e.clientId.substr(0,8),"uagb-editor-preview-mode-"+a.toLowerCase())},s.a.createElement("iframe",{className:"uagb-google-map__iframe",title:Object(l.__)("Google Map for ","ultimate-addons-for-gutenberg")+g,src:p}))};a.default=s.a.memo(f)}}]);