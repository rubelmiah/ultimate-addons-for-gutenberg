(window.webpackJsonp_ultimate_addons_for_gutenberg=window.webpackJsonp_ultimate_addons_for_gutenberg||[]).push([[67],{229:function(e,t,a){"use strict";a.d(t,"e",(function(){return i})),a.d(t,"d",(function(){return l})),a.d(t,"b",(function(){return o})),a.d(t,"a",(function(){return r})),a.d(t,"c",(function(){return c}));var n=a(200);const i=(e,t)=>{var a;const{alt:n,id:i,link:l,caption:o,url:r}=e,c={alt:n,id:i,link:l,caption:o,url:r};var s,u,d,m,b,g,h,p,v;return null!=e&&e.sizes&&null!=e&&e.sizes[t]?{...c,width:null==e||null===(s=e.sizes[t])||void 0===s?void 0:s.width,height:null==e||null===(u=e.sizes[t])||void 0===u?void 0:u.height,url:null==e||null===(d=e.sizes[t])||void 0===d?void 0:d.url}:null!=e&&e.media_details&&null!=e&&null!==(a=e.media_details)&&void 0!==a&&a.sizes[t]?{...c,width:null==e||null===(m=e.media_details)||void 0===m||null===(b=m.sizes[t])||void 0===b?void 0:b.width,height:null==e||null===(g=e.media_details)||void 0===g||null===(h=g.sizes[t])||void 0===h?void 0:h.height,url:null==e||null===(p=e.media_details)||void 0===p||null===(v=p.sizes[t])||void 0===v?void 0:v.source_url}:{...c,url:null==e?void 0:e.url}},l=(e,t)=>!e&&Object(n.isBlobURL)(t),o=(e,t)=>t&&!e&&!Object(n.isBlobURL)(t),r=(e,t)=>e.hasOwnProperty("sizes")||e.hasOwnProperty("url")||e.hasOwnProperty("media_details")||e.hasOwnProperty("source_url")||void 0!==e[t],c=e=>{var t,a;return((null===(t=wp)||void 0===t||null===(a=t.media)||void 0===a?void 0:a.attachment(e))||{}).destroyed}},324:function(e,t,a){"use strict";var n=a(16),i=a.n(n)()((function(e){return e[1]}));i.push([e.i,".uagb-inspector-tab.uagb-tab-content-general .uag-advance-panel-body-image .editor-bg-image-control {\n  margin-top: -35px; }\n\n.uagb-inspector-tab .block-editor-image-size-control .block-editor-image-size-control__row {\n  text-transform: capitalize; }\n\n.uagb-inspector-tab .components-base-control label.components-input-control__label {\n  text-transform: capitalize; }\n\n.uagb-inspector-tab .block-editor-image-size-control__row .components-button-group .components-button {\n  border: 1px solid #8f9395;\n  box-shadow: none;\n  font-size: 13px;\n  font-weight: 400;\n  height: 26px; }\n  .uagb-inspector-tab .block-editor-image-size-control__row .components-button-group .components-button.is-pressed {\n    background: #0085ba;\n    border-color: #0085ba; }\n\n.uagb-inspector-tab .block-editor-image-size-control__row .components-button span.dashicons-image-rotate {\n  font-size: 9px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  color: #2e92c4; }\n\n.wp-block-uagb-image .components-resizable-box__container {\n  max-width: 100% !important;\n  height: auto !important; }\n  .wp-block-uagb-image .components-resizable-box__container img {\n    max-width: 100% !important; }\n\n.wp-block-uagb-image .components-placeholder.is-medium .components-placeholder__instructions {\n  display: block !important; }\n\n.wp-block-uagb-image .components-placeholder.is-medium .components-placeholder__fieldset {\n  flex-direction: row; }\n  .wp-block-uagb-image .components-placeholder.is-medium .components-placeholder__fieldset .components-button {\n    margin-right: 10px; }\n",""]),t.a=i},513:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),l=a(4),o=a.n(l),r=a(200),c=a(7),s=a(9),u=a(2),d=a(202),m=Object(u.createElement)(d.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},Object(u.createElement)(d.Path,{d:"M18.5 15v3.5H13V6.7l4.5 4.1 1-1.1-6.2-5.8-5.8 5.8 1 1.1 4-4v11.7h-6V15H4v5h16v-5z"})),b=a(5),g=a(201),h=a(1),p=a(11),v=a(8),f=a(14),w=a(203),_=Object(u.createElement)(d.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},Object(u.createElement)(d.Path,{d:"M17.5 7v8H19V7c0-1.1-.9-2-2-2H9v1.5h8c.3 0 .5.2.5.5zM7 17.5c-.3 0-.5-.2-.5-.5V1H5v4H1v1.5h4V17c0 1.1.9 2 2 2h10.5v4H19v-4h4v-1.5H7z"}));const E=["image"];var O=a(229);function j(e){var t;let{temporaryURL:a,attributes:{url:n="",urlTablet:i="",urlMobile:l="",alt:o,align:r,id:d,width:m,widthTablet:g,widthMobile:v,height:j,heightTablet:k,heightMobile:R},setAttributes:y,isSelected:S,onCloseModal:x,onSelectImage:z,onSelectURL:I,onUploadError:L,containerRef:M,context:T,clientId:U,onImageLoadError:B}=e;const C=Object(u.useRef)(),{allowResize:H=!0}=T,{toggleSelection:N}=Object(s.useDispatch)(b.store),P=Object(p.a)(),{multiImageSelection:W}=Object(s.useSelect)(e=>{const{getMultiSelectedBlockClientIds:t,getBlockName:a}=e(b.store),n=t();return{multiImageSelection:n.length&&n.every(e=>"uagb/image"===a(e))}},[d,S]),{imageEditing:F,maxWidth:A}=Object(s.useSelect)(e=>{const{getSettings:t}=e(b.store),{imageEditing:a,maxWidth:n}=t();return{imageEditing:a,maxWidth:n}},[U]),D=Object(f.useViewportMatch)("medium"),V=["wide","full"].includes(r),[{loadedNaturalWidth:$,loadedNaturalHeight:G},J]=Object(u.useState)({}),[q,K]=Object(u.useState)(!1),Q=function(e,t){const[a,n]=Object(u.useState)();function i(){n(e.current.clientWidth)}return Object(u.useEffect)(i,t),Object(u.useEffect)(()=>{const{defaultView:t}=e.current.ownerDocument;return t.addEventListener("resize",i),()=>{t.removeEventListener("resize",i)}},[]),a}(M,[r]),X=H&&!(V&&D),{naturalWidth:Y,naturalHeight:Z}=Object(u.useMemo)(()=>{var e,t;const a=(null===(e=C.current)||void 0===e?void 0:e.naturalWidth)||$||void 0,n=(null===(t=C.current)||void 0===t?void 0:t.naturalHeight)||G||void 0;return y({naturalWidth:a,naturalHeight:n}),{naturalWidth:a,naturalHeight:n}},[$,G,null===(t=C.current)||void 0===t?void 0:t.complete]),ee=Object(w.getFilename)(n);let te;te=o||(ee?Object(h.sprintf)(
/* translators: %s: file name */
Object(h.__)("This image has an empty alt attribute; its file name is %s"),ee):Object(h.__)("This image has an empty alt attribute"));let ae,ne,ie=React.createElement(React.Fragment,null,React.createElement("img",{srcSet:`${a||n} 1024w${i?","+i+" 780w":""}${l?", "+l+" 360w":""}`,src:a||n,alt:te,onLoad:e=>{var t,a;J({loadedNaturalWidth:null===(t=e.target)||void 0===t?void 0:t.naturalWidth,loadedNaturalHeight:null===(a=e.target)||void 0===a?void 0:a.naturalHeight})},ref:C}),a&&React.createElement(c.Spinner,null));if(Q&&Y&&Z){const e=Y>Q,t=Z/Y;ae=e?Q:Y,ne=e?Q*t:Z}Object(u.useEffect)(()=>{S||K(!1),S&&Object(O.c)(d)&&B()},[S]);const le=d&&Y&&Z&&F,oe=!W&&le&&!q;if(le&&q)ie=React.createElement(b.__experimentalImageEditor,{url:n,width:m,height:j,clientWidth:Q,naturalHeight:Z,naturalWidth:Y});else if(X&&ae){const e=m||ae,t=j||ne,a=Y/Z,n=Y<Z?20:20*a,i=Z<Y?20:20/a,l=2.5*A;let o=!1,s=!1;"center"===r?(o=!0,s=!0):Object(h.isRTL)()?"left"===r?o=!0:s=!0:"right"===r?s=!0:o=!0;let u="",d="";"Tablet"===P?(u=g||m,d=k||j):"Mobile"===P?(u=v||g||m,d=R||k||j):(u=m,d=j),ie=React.createElement(c.ResizableBox,{size:{width:u||"auto",height:d||"auto"},showHandle:S,minWidth:n,maxWidth:l,minHeight:i,maxHeight:l/a,lockAspectRatio:!0,enable:{top:!1,right:o,bottom:!0,left:s},onResizeStart:function(){N(!1)},onResizeStop:(a,n,i,l)=>{if(N(!0),"Tablet"===P){const e=g||780;y({widthTablet:Math.abs(parseInt(e+l.width,10)),heightTablet:Math.abs(parseInt(k+l.height,10))})}else if("Mobile"===P){const e=v||320;y({widthMobile:Math.abs(parseInt(e+l.width,10)),heightMobile:Math.abs(parseInt(R+l.height,10))})}else y({width:Math.abs(parseInt(e+l.width,10)),height:Math.abs(parseInt(t+l.height,10))})}},ie)}else"full"!==r&&(ie=React.createElement("div",null,ie));const re=React.createElement(React.Fragment,null,React.createElement(b.BlockControls,{group:"block"},oe&&React.createElement(c.ToolbarButton,{onClick:()=>K(!0),icon:_,label:Object(h.__)("Crop")})),!W&&!q&&React.createElement(b.BlockControls,{group:"other"},React.createElement(b.MediaReplaceFlow,{mediaId:d,mediaURL:n,allowedTypes:E,accept:"image/*",onSelect:z,onSelectURL:I,onError:L,onCloseModal:x})));return React.createElement(React.Fragment,null,React.createElement(b.__experimentalImageEditingProvider,{id:d,url:n,naturalWidth:Y,naturalHeight:Z,clientWidth:Q,onSaveImage:e=>y(e),isEditing:q,onFinishEditing:()=>K(!1)},!a&&re,ie))}function k(e){let{attributes:t,isSelected:a,setAttributes:l,captionRef:o}=e;const{caption:r,enableCaption:c,heading:s,headingTag:u,layout:d,overlayContentPosition:m,seperatorStyle:g,seperatorPosition:p}=t,v=Object(n.useRef)();Object(n.useEffect)(()=>{v.current=s},[r]);const f=i.a.createElement(i.a.Fragment,null,(!b.RichText.isEmpty(s)||a)&&i.a.createElement(b.RichText,{ref:v,tagName:u,className:"uagb-image-heading","aria-label":Object(h.__)("Image overlay heading text"),placeholder:Object(h.__)("Add Heading"),value:s,onChange:e=>l({heading:e})})),w=i.a.createElement(i.a.Fragment,null,(!b.RichText.isEmpty(r)||a)&&i.a.createElement(b.RichText,{ref:o,tagName:"figcaption",className:"uagb-image-caption","aria-label":Object(h.__)("Image caption text"),placeholder:Object(h.__)("Add caption"),value:r,onChange:e=>l({caption:e})})),_="none"!==g&&i.a.createElement("div",{className:"uagb-image-separator"});return i.a.createElement(i.a.Fragment,null,"overlay"===d?i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"wp-block-uagb-image--layout-overlay__color-wrapper"}),i.a.createElement("div",{className:"wp-block-uagb-image--layout-overlay__inner "+m.replace(" ","-")},"before_title"===p&&_,f,"after_title"===p&&_,w,"after_sub_title"===p&&_)):i.a.createElement(i.a.Fragment,null,c&&w))}var R,y=a(15),S=a.n(y),x=a(324),z=0,I={injectType:"lazySingletonStyleTag",attributes:{id:"uagb-editor-styles"},insert:"head",singleton:!0},L={};L.locals=x.a.locals||{},L.use=function(){return z++||(R=S()(x.a,I)),L},L.unuse=function(){z>0&&!--z&&(R(),R=null)};var M=L;function T(){return(T=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}const U=e=>{const{attributes:t,setAttributes:a,className:l,isSelected:u,insertBlocksAfter:d,onReplace:f,context:w,clientId:_}=e.parentProps,{block_id:R,isPreview:y,layout:S,url:x,alt:z,caption:I,align:L,id:U,linkTarget:B,linkClass:C,rel:H,imageHoverEffect:N,href:P,linkDestination:W}=t;Object(n.useLayoutEffect)(()=>(M.use(),()=>{M.unuse()}),[]);const F=Object(p.a)(),{createNotice:A}=Object(s.useDispatch)("core/notices"),[D,V]=Object(n.useState)(),[$,G]=Object(n.useState)(),J=Object(n.useRef)();Object(n.useEffect)(()=>{J.current=z},[z]);const q=Object(n.useRef)();Object(n.useEffect)(()=>{q.current=I},[I]);const K=Object(n.useRef)(),{imageDefaultSize:Q,mediaUpload:X}=Object(s.useSelect)(e=>{const{getSettings:t}=e(b.store),{imageDefaultSize:a,mediaUpload:n}=t();return{imageDefaultSize:a,mediaUpload:n}},[]),{image:Y}=Object(s.useSelect)(e=>{const{getMedia:t}=e(g.store);return{image:U&&u?t(U):null}},[U,u]);function Z(){Object(O.c)(null==t?void 0:t.id)&&a({url:void 0,id:void 0})}function ee(e){A("error",e,{type:"snackbar"})}function te(e){var n,i,l,o,c;if(!e||!e.url)return void a({url:void 0,alt:void 0,id:void 0,title:void 0,caption:void 0});if(Object(r.isBlobURL)(e.url))return void V(e.url);V();let s,u=Object(O.e)(e,Q);q.current&&!u.caption&&(u={...u,alt:u.alt,id:u.id,link:u.link}),s=e.id&&e.id===U?{url:x}:{width:void 0,height:void 0,sizeSlug:Object(O.a)(e,Q)?Q:"full"};let d,m=t.linkDestination;if(!m)switch((null===(n=wp)||void 0===n||null===(i=n.media)||void 0===i||null===(l=i.view)||void 0===l||null===(o=l.settings)||void 0===o||null===(c=o.defaultProps)||void 0===c?void 0:c.link)||"none"){case"file":case"media":m="media";break;case"post":case"attachment":m="attachment";break;case"custom":m="custom";break;case"none":m="none"}switch(m){case"media":d=e.url;break;case"attachment":d=e.link}u.href=d;const b={...u,...s,linkDestination:m};a(b)}function ae(e){e!==x&&a({url:e,id:void 0,width:void 0,height:void 0,sizeSlug:Q})}let ne=Object(O.d)(U,x);Object(n.useEffect)(()=>{if(!ne)return;const e=Object(r.getBlobByURL)(x);e&&X({filesList:[e],onFileChange:e=>{let[t]=e;te(t)},allowedTypes:E,onError:e=>{ne=!1,A("error",e,{type:"snackbar"}),a({src:void 0,id:void 0,url:void 0})}})},[]),Object(n.useEffect)(()=>{ne?V(x):Object(r.revokeBlobURL)(D)},[ne,x]);const ie=Object(O.b)(U,x)?x:void 0,le=!!x&&i.a.createElement("img",{alt:Object(h.__)("Edit image"),title:Object(h.__)("Edit image"),className:"edit-image-preview",src:x});Object(n.useEffect)(()=>{Object(O.b)(U,x)&&u&&!$&&window.fetch(x).then(e=>e.blob()).then(e=>G(e)).catch(()=>{})},[U,x,u,$]);const oe=uagb_blocks_info.uagb_url+"/admin/assets/preview-images/image.svg",re=Object(b.useBlockProps)({ref:K});return i.a.createElement(i.a.Fragment,null,i.a.createElement(b.BlockControls,{group:"block"},i.a.createElement(b.BlockAlignmentControl,{value:L,onChange:function(e){const t=["wide","full"].includes(e)?{width:void 0,height:void 0}:{};a({...t,align:e})}}),i.a.createElement(b.__experimentalImageURLInputUI,{url:P||"",onChangeUrl:function(e){a(e)},linkDestination:W,mediaUrl:Y&&Y.source_url||x,mediaLink:Y&&Y.link,linkTarget:B,linkClass:C,rel:H}),$&&i.a.createElement(c.ToolbarButton,{onClick:function(){X({filesList:[$],onFileChange(e){let[t]=e;te(t),Object(r.isBlobURL)(null==t?void 0:t.url)||(G(),A("success",Object(h.__)("Image uploaded."),{type:"snackbar"}))},allowedTypes:E,onError(e){A("error",e,{type:"snackbar"})}})},icon:m,label:Object(h.__)("Upload external image")})),i.a.createElement("div",T({},re,{className:o()(l,"uagb-editor-preview-mode-"+F.toLowerCase(),"uagb-block-"+R,"wp-block-uagb-image--layout-"+S,"wp-block-uagb-image--effect-"+N,"wp-block-uagb-image--align-"+(L||"none"))}),(D||x)&&i.a.createElement("figure",{className:"wp-block-uagb-image__figure"},i.a.createElement(j,{temporaryURL:D,attributes:t,setAttributes:a,isSelected:u,insertBlocksAfter:d,onReplace:f,onSelectImage:te,onSelectURL:ae,onUploadError:ee,containerRef:K,context:w,clientId:_,onCloseModal:Z,onImageLoadError:function(){let e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];e||a({url:void 0,id:void 0})}}),i.a.createElement(k,{captionRef:q,attributes:t,setAttributes:a,isSelected:u})),y?i.a.createElement("img",{width:"100%",src:oe,alt:""}):i.a.createElement(b.MediaPlaceholder,{icon:i.a.createElement(b.BlockIcon,{icon:v.a.image}),labels:{title:Object(h.__)("Image","ultimate-addons-for-gutenberg"),instructions:Object(h.__)("Upload an image file, pick one from your media library, or add one with a URL.","ultimate-addons-for-gutenberg")},onSelect:te,onSelectURL:ae,onError:ee,onClose:Z,accept:"image/*",allowedTypes:E,value:{id:U,src:ie},mediaPreview:le,disableMediaButtons:D||x})))};U.propTypes={},U.defaultProps={},t.default=i.a.memo(U)}}]);