(window.webpackJsonp_ultimate_addons_for_gutenberg=window.webpackJsonp_ultimate_addons_for_gutenberg||[]).push([[3],{516:function(e,a,t){"use strict";t.r(a);var n=t(4),r=t.n(n),s=t(5),i=t(2),o=t(1),c=t.n(o);const l=e=>{e=e.parentProps;const{attributes:{block_id:a,headingTitle:t,headingDesc:n,headingTag:o,seperatorStyle:l},setAttributes:d,className:g,deviceType:u}=e,m=c.a.createElement(s.RichText,{tagName:o,placeholder:Object(i.__)("Write a Heading","ultimate-addons-for-gutenberg"),value:t,className:"uagb-heading-text",multiline:!1,onChange:e=>{d({headingTitle:e})}}),b="none"!==l&&c.a.createElement("div",{className:"uagb-separator-wrap"},c.a.createElement("div",{className:"uagb-separator"})),p=c.a.createElement(s.RichText,{tagName:"p",placeholder:Object(i.__)("Write a Description","ultimate-addons-for-gutenberg"),value:n,className:"uagb-desc-text",onChange:e=>d({headingDesc:e})});return c.a.createElement("div",{className:r()(g,"uagb-editor-preview-mode-"+u.toLowerCase(),"uagb-block-"+a)},m,b,p)};a.default=c.a.memo(l)}}]);