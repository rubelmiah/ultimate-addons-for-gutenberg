(window.webpackJsonp_ultimate_addons_for_gutenberg=window.webpackJsonp_ultimate_addons_for_gutenberg||[]).push([[69],{340:function(e,t,n){"use strict";var a=n(19),o=n.n(a)()((function(e){return e[1]}));o.push([e.i,".uagb-lottie_upload_wrap {\n  padding: 50px;\n  background: #eee; }\n\n.uagb-lottie_upload_wrap-controller .components-placeholder {\n  box-shadow: none; }\n\n.uagb-show-notice {\n  padding: 20px;\n  background: #eee; }\n\n.uagb-lottie__center {\n  margin: 0 auto; }\n\n.uagb-lottie__right {\n  margin-left: auto; }\n\n.uagb-lottie__left {\n  margin-right: auto; }\n",""]),t.a=o},527:function(e,t,n){"use strict";n.r(t);var a,o=n(1),r=n.n(o),u=n(4),l=n.n(u),s=n(11),i=n(339),c=n(18),p=n.n(c),g=n(340),b=0,d={injectType:"lazySingletonStyleTag",attributes:{id:"uagb-editor-styles"},insert:"head",singleton:!0},_={};_.locals=g.a.locals||{},_.use=function(){return b++||(a=p()(g.a,d)),_},_.unuse=function(){b>0&&!--b&&(a(),a=null)};var f=_;const m=e=>{Object(o.useLayoutEffect)(()=>(f.use(),()=>{f.unuse()}),[]);const{lottieplayer:t}=e;e=e.parentProps;const{className:n,attributes:a}=e,{loop:u,speed:c,reverse:p,lottieURl:g,playOn:b,align:d}=a,_=p&&u?-1:1,m=()=>{t.current.setPlayerDirection(_),t.current.play()},w=()=>{t.current.stop()};return r.a.createElement("div",{className:l()(n,"uagb-block-"+e.clientId.substr(0,8),"uagb-lottie__outer-wrap","uagb-lottie__"+d),onMouseEnter:"hover"===b?m:w,onMouseLeave:"hover"===b?()=>{t.current.setPlayerDirection(_),t.current.stop()}:w,onClick:"click"===b?m:w},r.a.createElement(o.Suspense,{fallback:Object(s.a)()},r.a.createElement(i.a,{autoplay:!0,ref:t,src:g,loop:u,speed:c})))};t.default=r.a.memo(m)}}]);