(window.webpackJsonp_ultimate_addons_for_gutenberg=window.webpackJsonp_ultimate_addons_for_gutenberg||[]).push([[88],{200:function(e,t,n){"use strict";var a,o=n(1),l=n(6),r=n(4),i=n(0),s=n.n(i),u=n(13),c=n.n(u),g=n(201),m=0,b={injectType:"lazySingletonStyleTag",attributes:{id:"uagb-editor-styles"},insert:"head",singleton:!0},d={};d.locals=g.a.locals||{},d.use=function(){return m++||(a=c()(g.a,b)),d},d.unuse=function(){m>0&&!--m&&(a(),a=null)};var p=d;t.a=e=>{Object(i.useLayoutEffect)(()=>(p.use(),()=>{p.unuse()}),[]);const{onSelectImage:t,backgroundImage:n,onRemoveImage:a,showVideoInput:u,label:c}=e;let g=Object(o.__)("Image","ultimate-addons-for-gutenberg"),m=Object(o.__)("Select Image","ultimate-addons-for-gutenberg"),b=Object(o.__)("Replace Image","ultimate-addons-for-gutenberg"),d=Object(o.__)("Remove Image","ultimate-addons-for-gutenberg"),f=["image"];return u&&(g=Object(o.__)("Video","ultimate-addons-for-gutenberg"),m=Object(o.__)("Select Video","ultimate-addons-for-gutenberg"),b=Object(o.__)("Replace Video","ultimate-addons-for-gutenberg"),d=Object(o.__)("Remove Video","ultimate-addons-for-gutenberg"),f=["video"]),g=c||g,g=!1===c?c:g,s.a.createElement(l.BaseControl,{className:"editor-bg-image-control",id:"uagb-option-selector-"+c,label:g},s.a.createElement("div",{className:"uagb-bg-image"},s.a.createElement(r.MediaUpload,{title:m,onSelect:t,allowedTypes:f,value:n,render:e=>{let{open:t}=e;return s.a.createElement(l.Button,{isSecondary:!0,onClick:t},null!=n&&n.url?b:m)}}),(null==n?void 0:n.url)&&s.a.createElement(l.Button,{className:"uagb-rm-btn",onClick:a,isLink:!0,isDestructive:!0},d),e.help&&s.a.createElement("p",{className:"uag-control-help-notice"},e.help)))}},201:function(e,t,n){"use strict";var a=n(14),o=n.n(a)()((function(e){return e[1]}));o.push([e.i,".uagb-bg-image {\n  border-radius: 2px;\n  background-color: #f0f0f0;\n  min-height: 90px;\n  padding: 8px 0;\n  text-align: center;\n  display: flex;\n  width: 100%;\n  transition: all 0.1s ease-out;\n  box-shadow: 0 0 0 0 #0085ba;\n  margin-top: 10px;\n  align-items: center;\n  justify-content: center; }\n  .uagb-bg-image .components-button {\n    margin: 0;\n    padding: 0; }\n  .uagb-bg-image .uagb-rm-btn {\n    margin-left: 10px; }\n\n.uagb-bg-image .components-button:focus:not(:disabled),\n.uagb-bg-image .components-button.is-secondary:hover:not(:disabled),\n.components-button.is-tertiary:hover:not(:disabled),\n.uagb-bg-image .components-button.is-secondary,\n.components-button.is-tertiary {\n  box-shadow: none; }\n",""]),t.a=o},470:function(e,t,n){"use strict";n.r(t);var a=n(1),o=n(0),l=n.n(o),r=n(4),i=n(200),s=n(79),u=n(24),c=n(15);const g=e=>{e=e.parentProps;const{setAttributes:t,attributes:n}=e,{headingAlign:o,imagePosition:g,image:m}=n;return l.a.createElement(l.a.Fragment,null,l.a.createElement(l.a.Fragment,null,"top"===g&&l.a.createElement(r.BlockControls,{key:"controls"},l.a.createElement(r.AlignmentToolbar,{value:o,onChange:e=>t({headingAlign:e})}))),l.a.createElement(r.InspectorControls,null,l.a.createElement(s.a,{tabs:["general","advance"]},l.a.createElement(u.b,u.a.general,l.a.createElement(c.a,{initialOpen:!0},l.a.createElement("p",{className:"uagb-settings-notice"},Object(a.__)("For the common styling options please select the Parent Block of this Price List Item.")),l.a.createElement(i.a,{onSelectImage:e=>{let n=null;n=e&&e.url?e:null,e.type&&"image"===e.type||(n=null),t({image:n})},backgroundImage:m,onRemoveImage:()=>{t({image:null})}}))),l.a.createElement(u.b,u.a.advance))))};t.default=l.a.memo(g)}}]);