(window.webpackJsonp_ultimate_addons_for_gutenberg=window.webpackJsonp_ultimate_addons_for_gutenberg||[]).push([[88],{210:function(e,a,t){"use strict";var l=t(1),n=t(8),o=t(5),c=t(0),r=t.n(c),s=t(7);a.a=e=>{const{onSelectImage:a,backgroundImage:t,onRemoveImage:c,showVideoInput:i,label:m,disableRemove:u=!1,allow:d=["image"]}=e;let g,b=Object(l.__)("Image","ultimate-addons-for-gutenberg"),_=Object(l.__)("Select Image","ultimate-addons-for-gutenberg"),p=Object(l.__)("Change Image","ultimate-addons-for-gutenberg"),v=["image"];i&&(b=Object(l.__)("Video","ultimate-addons-for-gutenberg"),_=Object(l.__)("Select Video","ultimate-addons-for-gutenberg"),p=Object(l.__)("Change Video","ultimate-addons-for-gutenberg"),v=["video"],g=s.a.video_placeholder),b=m||b,b=!1===m?m:b,"Lottie Animation"===m&&(_=Object(l.__)("Select Lottie Animation","ultimate-addons-for-gutenberg"),p=Object(l.__)("Change Lottie Animation","ultimate-addons-for-gutenberg"),v=d,g=s.a.lottie);const E=e=>r.a.createElement("div",{className:"spectra-media-control__button spectra-media-control__button--"+e},s.a[e]);return r.a.createElement(n.BaseControl,{className:"spectra-media-control",id:"uagb-option-selector-"+m,label:b},r.a.createElement("div",{className:"spectra-media-control__wrapper",style:{backgroundImage:!g&&(null==t?void 0:t.url)&&`url("${(e=>{let a=e;switch(/(?:\.([^.]+))?$/.exec(String(a))[1]){case"json":a="";break;case"avi":case"mpg":case"mp4":case"m4v":case"mov":case"ogv":case"vtt":case"wmv":case"3gp":case"3g2":a=""}return a})(null==t?void 0:t.url)}")`}},g&&(null==t?void 0:t.url)&&r.a.createElement("div",{className:"spectra-media-control__icon"},g),r.a.createElement(o.MediaUpload,{title:_,onSelect:a,allowedTypes:v,value:t,render:e=>{let{open:a}=e;return(e=>{const a=null!=t&&t.url?"replace":"add";return r.a.createElement("button",{className:"spectra-media-control__clickable spectra-media-control__clickable--"+a,onClick:e},"add"===a?E(a):r.a.createElement("div",{className:"uag-control-label"},p))})(a)}}),!u&&(null==t?void 0:t.url)&&r.a.createElement("button",{className:"spectra-media-control__clickable spectra-media-control__clickable--close",onClick:c},E("close"))),e.help&&r.a.createElement("p",{className:"uag-control-help-notice"},e.help))}},482:function(e,a,t){"use strict";t.r(a);var l=t(1),n=t(0),o=t.n(n),c=t(5),r=t(210),s=t(83),i=t(29),m=t(17);const u=e=>{e=e.parentProps;const{setAttributes:a,attributes:t}=e,{image:n}=t;return o.a.createElement(o.a.Fragment,null,o.a.createElement(c.InspectorControls,null,o.a.createElement(s.a,{tabs:["general","advance"]},o.a.createElement(i.b,i.a.general,o.a.createElement(m.a,{initialOpen:!0},o.a.createElement("p",{className:"uagb-settings-notice"},Object(l.__)("For the common styling options please select the Parent Block of this Price List Item.")),o.a.createElement(r.a,{onSelectImage:e=>{let t=null;t=e&&e.url?e:null,e.type&&"image"===e.type||(t=null),a({image:t})},backgroundImage:n,onRemoveImage:()=>{a({image:null})}}))),o.a.createElement(i.b,i.a.advance))))};a.default=o.a.memo(u)}}]);