(window.webpackJsonp_ultimate_addons_for_gutenberg=window.webpackJsonp_ultimate_addons_for_gutenberg||[]).push([[17],{425:function(e,a,o){"use strict";o.r(a);var t=o(3),n=o.n(t),s=o(77),l=o(0),u=o.n(l),c=o(10),m=o(4);const r=["uagb/column"],b=e=>{const{attributes:a,isSelected:o,className:t}=e.parentProps,b=Object(c.a)(),{isPreview:_,stack:i,align:p,vAlign:g,tag:d,columnGap:v,backgroundType:h,backgroundVideo:w,columns:k,bottomType:f,topType:E,bottomFlip:y,topFlip:N,reverseTablet:P,reverseMobile:T,topContentAboveShape:A,bottomContentAboveShape:C}=a,S=Object(l.useMemo)(()=>{const e=[];for(let a=0;a<k;a++)e.push(["uagb/column",{id:a+1}]);return e},[k]),j="none"!==E&&u.a.createElement("div",{className:n()("uagb-columns__shape","uagb-columns__shape-top",{"uagb-columns__shape-flip":!0===N},{"uagb-columns__shape-above-content":!0===A})},s.a[E]),B="none"!==f&&u.a.createElement("div",{className:n()("uagb-columns__shape","uagb-columns__shape-bottom",{"uagb-columns__shape-flip":!0===y},{"uagb-columns__shape-above-content":!0===C}),"data-negative":"false"},s.a[f]),F=P?"uagb-columns__reverse-tablet":"",I=T?"uagb-columns__reverse-mobile":"",J=""+d,L=o?"active":"not-active",M=void 0!==h?"uagb-columns__background-"+h:"",O=void 0!==g?"uagb-columns__valign-"+g:"",G=void 0!==p?"align"+p:"";return u.a.createElement(J,{className:n()(t,"uagb-columns__wrap",""+M,"uagb-columns__edit-"+L,"uagb-editor-preview-mode-"+b.toLowerCase(),"uagb-columns__stack-"+i,""+O,"uagb-columns__gap-"+v,""+G,F,I,"uagb-block-"+e.parentProps.clientId.substr(0,8),"uagb-columns__columns-"+k)},u.a.createElement("div",{className:"uagb-columns__overlay"}),j,"video"===h&&u.a.createElement("div",{className:"uagb-columns__video-wrap"},w&&u.a.createElement("video",{autoPlay:!0,loop:!0,muted:!0,playsinline:!0},u.a.createElement("source",{src:w.url,type:"video/mp4"}))),u.a.createElement(m.InnerBlocks,{template:S,templateLock:"all",allowedBlocks:r}),B)};a.default=u.a.memo(b)}}]);