(window.webpackJsonp_ultimate_addons_for_gutenberg=window.webpackJsonp_ultimate_addons_for_gutenberg||[]).push([[67],{316:function(e,t,a){"use strict";var i=a(14),n=a.n(i)()((function(e){return e[1]}));n.push([e.i,".uagb-inspector-tab .block-editor-image-size-control .block-editor-image-size-control__row {\n  text-transform: capitalize; }\n\n.uagb-inspector-tab .components-base-control label.components-input-control__label {\n  text-transform: capitalize; }\n\n.uagb-inspector-tab .block-editor-image-size-control__row .components-button-group .components-button {\n  border: 1px solid #8f9395;\n  box-shadow: none;\n  font-size: 13px;\n  font-weight: 400;\n  height: 26px; }\n  .uagb-inspector-tab .block-editor-image-size-control__row .components-button-group .components-button.is-pressed {\n    background: #0085ba;\n    border-color: #0085ba; }\n\n.uagb-inspector-tab .block-editor-image-size-control__row .components-button span.dashicons-image-rotate {\n  font-size: 9px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  color: #2e92c4; }\n\n.wp-block-uagb-image .components-resizable-box__container {\n  max-width: 100% !important;\n  height: auto !important; }\n  .wp-block-uagb-image .components-resizable-box__container img {\n    max-width: 100% !important; }\n\n.wp-block-uagb-image .components-placeholder.is-medium .components-placeholder__instructions {\n  display: block !important; }\n\n.wp-block-uagb-image .components-placeholder.is-medium .components-placeholder__fieldset {\n  flex-direction: row; }\n  .wp-block-uagb-image .components-placeholder.is-medium .components-placeholder__fieldset .components-button {\n    margin-right: 10px; }\n",""]),t.a=n},505:function(e,t,a){"use strict";a.r(t);var i=a(0),n=a.n(i),l=a(3),o=a.n(l),r=a(194),c=a(6),s=a(9),u=a(2),d=a(195),m=Object(u.createElement)(d.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},Object(u.createElement)(d.Path,{d:"M18.5 15v3.5H13V6.7l4.5 4.1 1-1.1-6.2-5.8-5.8 5.8 1 1.1 4-4v11.7h-6V15H4v5h16v-5z"})),g=a(4),b=a(193),h=a(1),p=a(10),v=a(7),f=a(12),w=a(196),_=Object(u.createElement)(d.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},Object(u.createElement)(d.Path,{d:"M17.5 7v8H19V7c0-1.1-.9-2-2-2H9v1.5h8c.3 0 .5.2.5.5zM7 17.5c-.3 0-.5-.2-.5-.5V1H5v4H1v1.5h4V17c0 1.1.9 2 2 2h10.5v4H19v-4h4v-1.5H7z"}));const E=["image"],k=(e,t)=>t&&!e&&!Object(r.isBlobURL)(t),O=(e,t)=>e.hasOwnProperty("sizes")||e.hasOwnProperty("url")||e.hasOwnProperty("media_details")||e.hasOwnProperty("source_url")||void 0!==e[t],j=e=>{var t,a;return((null===(t=wp)||void 0===t||null===(a=t.media)||void 0===a?void 0:a.attachment(e))||{}).destroyed};function R(e){var t;let{temporaryURL:a,attributes:{url:i="",urlTablet:n="",urlMobile:l="",alt:o,align:r,id:d,width:m,widthTablet:b,widthMobile:v,height:k,heightTablet:O,heightMobile:R},setAttributes:y,isSelected:S,onCloseModal:x,onSelectImage:z,onSelectURL:I,onUploadError:L,containerRef:M,context:T,clientId:U,onImageLoadError:B}=e;const C=Object(u.useRef)(),{allowResize:H=!0}=T,{toggleSelection:N}=Object(s.useDispatch)(g.store),P=Object(p.a)(),{multiImageSelection:W}=Object(s.useSelect)(e=>{const{getMultiSelectedBlockClientIds:t,getBlockName:a}=e(g.store),i=t();return{multiImageSelection:i.length&&i.every(e=>"uagb/image"===a(e))}},[d,S]),{imageEditing:F,maxWidth:A}=Object(s.useSelect)(e=>{const{getSettings:t}=e(g.store),{imageEditing:a,maxWidth:i}=t();return{imageEditing:a,maxWidth:i}},[U]),D=Object(f.useViewportMatch)("medium"),V=["wide","full"].includes(r),[{loadedNaturalWidth:$,loadedNaturalHeight:G},J]=Object(u.useState)({}),[q,K]=Object(u.useState)(!1),Q=function(e,t){const[a,i]=Object(u.useState)();function n(){i(e.current.clientWidth)}return Object(u.useEffect)(n,t),Object(u.useEffect)(()=>{const{defaultView:t}=e.current.ownerDocument;return t.addEventListener("resize",n),()=>{t.removeEventListener("resize",n)}},[]),a}(M,[r]),X=H&&!(V&&D),{naturalWidth:Y,naturalHeight:Z}=Object(u.useMemo)(()=>{var e,t;return{naturalWidth:(null===(e=C.current)||void 0===e?void 0:e.naturalWidth)||$||void 0,naturalHeight:(null===(t=C.current)||void 0===t?void 0:t.naturalHeight)||G||void 0}},[$,G,null===(t=C.current)||void 0===t?void 0:t.complete]),ee=Object(w.getFilename)(i);let te;te=o||(ee?Object(h.sprintf)(
/* translators: %s: file name */
Object(h.__)("This image has an empty alt attribute; its file name is %s"),ee):Object(h.__)("This image has an empty alt attribute"));let ae,ie,ne=React.createElement(React.Fragment,null,React.createElement("img",{srcSet:`${a||i} 1024w${n?","+n+" 780w":""}${l?", "+l+" 360w":""}`,src:a||i,alt:te,onLoad:e=>{var t,a;J({loadedNaturalWidth:null===(t=e.target)||void 0===t?void 0:t.naturalWidth,loadedNaturalHeight:null===(a=e.target)||void 0===a?void 0:a.naturalHeight})},ref:C}),a&&React.createElement(c.Spinner,null));if(Q&&Y&&Z){const e=Y>Q,t=Z/Y;ae=e?Q:Y,ie=e?Q*t:Z}Object(u.useEffect)(()=>{S||K(!1),S&&j(d)&&B()},[S]);const le=d&&Y&&Z&&F,oe=!W&&le&&!q;if(le&&q)ne=React.createElement(g.__experimentalImageEditor,{url:i,width:m,height:k,clientWidth:Q,naturalHeight:Z,naturalWidth:Y});else if(X&&ae){const e=m||ae,t=k||ie,a=Y/Z,i=Y<Z?20:20*a,n=Z<Y?20:20/a,l=2.5*A;let o=!1,s=!1;"center"===r?(o=!0,s=!0):Object(h.isRTL)()?"left"===r?o=!0:s=!0:"right"===r?s=!0:o=!0;let u="",d="";"Tablet"===P?(u=b,d=O):"Mobile"===P?(u=v,d=R):(u=m,d=k),ne=React.createElement(c.ResizableBox,{size:{width:u||"auto",height:d||"auto"},showHandle:S,minWidth:i,maxWidth:l,minHeight:n,maxHeight:l/a,lockAspectRatio:!0,enable:{top:!1,right:o,bottom:!0,left:s},onResizeStart:function(){N(!1)},onResizeStop:(a,i,n,l)=>{if(N(!0),"Tablet"===P){const e=b||780;y({widthTablet:Math.abs(parseInt(e+l.width,10)),heightTablet:Math.abs(parseInt(O+l.height,10))})}else if("Mobile"===P){const e=v||320;y({widthMobile:Math.abs(parseInt(e+l.width,10)),heightMobile:Math.abs(parseInt(R+l.height,10))})}else y({width:Math.abs(parseInt(e+l.width,10)),height:Math.abs(parseInt(t+l.height,10))})}},ne)}else ne=React.createElement("div",{style:{width:m,height:k}},ne);const re=React.createElement(React.Fragment,null,React.createElement(g.BlockControls,{group:"block"},oe&&React.createElement(c.ToolbarButton,{onClick:()=>K(!0),icon:_,label:Object(h.__)("Crop")})),!W&&!q&&React.createElement(g.BlockControls,{group:"other"},React.createElement(g.MediaReplaceFlow,{mediaId:d,mediaURL:i,allowedTypes:E,accept:"image/*",onSelect:z,onSelectURL:I,onError:L,onCloseModal:x})));return React.createElement(React.Fragment,null,React.createElement(g.__experimentalImageEditingProvider,{id:d,url:i,naturalWidth:Y,naturalHeight:Z,clientWidth:Q,onSaveImage:e=>y(e),isEditing:q,onFinishEditing:()=>K(!1)},!a&&re,ne))}function y(e){let{attributes:t,isSelected:a,setAttributes:l,captionRef:o}=e;const{caption:r,heading:c,headingTag:s,layout:u,overlayContentPosition:d,seperatorStyle:m,seperatorPosition:b}=t,p=Object(i.useRef)();Object(i.useEffect)(()=>{p.current=c},[r]);const v=n.a.createElement(n.a.Fragment,null,(!g.RichText.isEmpty(c)||a)&&n.a.createElement(g.RichText,{ref:p,tagName:s,className:"uagb-image-heading","aria-label":Object(h.__)("Image overlay heading text"),placeholder:Object(h.__)("Add Heading"),value:c,onChange:e=>l({heading:e})})),f=n.a.createElement(n.a.Fragment,null,(!g.RichText.isEmpty(r)||a)&&n.a.createElement(g.RichText,{ref:o,tagName:"figcaption",className:"uagb-image-caption","aria-label":Object(h.__)("Image caption text"),placeholder:Object(h.__)("Add caption"),value:r,onChange:e=>l({caption:e})})),w="none"!==m&&n.a.createElement("div",{className:"uagb-image-separator"});return n.a.createElement(n.a.Fragment,null,"overlay"===u?n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"wp-block-uagb-image--layout-overlay__color-wrapper"}),n.a.createElement("div",{className:"wp-block-uagb-image--layout-overlay__inner "+d.replace(" ","-")},"before_title"===b&&w,v,"after_title"===b&&w,f,"after_sub_title"===b&&w)):f)}var S,x=a(13),z=a.n(x),I=a(316),L=0,M={injectType:"lazySingletonStyleTag",attributes:{id:"uagb-editor-styles"},insert:"head",singleton:!0},T={};T.locals=I.a.locals||{},T.use=function(){return L++||(S=z()(I.a,M)),T},T.unuse=function(){L>0&&!--L&&(S(),S=null)};var U=T;function B(){return(B=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var i in a)Object.prototype.hasOwnProperty.call(a,i)&&(e[i]=a[i])}return e}).apply(this,arguments)}const C=e=>{const{attributes:t,setAttributes:a,className:l,isSelected:u,insertBlocksAfter:d,onReplace:f,context:w,clientId:_}=e.parentProps,{block_id:S,isPreview:x,layout:z,url:I,alt:L,caption:M,align:T,id:C,linkTarget:H,linkClass:N,rel:P,imageHoverEffect:W,href:F,linkDestination:A}=t;Object(i.useLayoutEffect)(()=>(U.use(),()=>{U.unuse()}),[]);const D=Object(p.a)(),{createNotice:V}=Object(s.useDispatch)("core/notices"),[$,G]=Object(i.useState)(),[J,q]=Object(i.useState)(),K=Object(i.useRef)();Object(i.useEffect)(()=>{K.current=L},[L]);const Q=Object(i.useRef)();Object(i.useEffect)(()=>{Q.current=M},[M]);const X=Object(i.useRef)(),{imageDefaultSize:Y,mediaUpload:Z}=Object(s.useSelect)(e=>{const{getSettings:t}=e(g.store),{imageDefaultSize:a,mediaUpload:i}=t();return{imageDefaultSize:a,mediaUpload:i}},[]),{image:ee}=Object(s.useSelect)(e=>{const{getMedia:t}=e(b.store);return{image:C&&u?t(C):null}},[C,u]);function te(){j(null==t?void 0:t.id)&&a({url:void 0,id:void 0})}function ae(e){V("error",e,{type:"snackbar"})}function ie(e){var i,n,l,o,c;if(!e||!e.url)return void a({url:void 0,alt:void 0,id:void 0,title:void 0,caption:void 0});if(Object(r.isBlobURL)(e.url))return void G(e.url);G();let s,u=((e,t)=>{var a;const{alt:i,id:n,link:l,caption:o,url:r}=e,c={alt:i,id:n,link:l,caption:o,url:r};var s,u,d,m,g,b,h,p,v;return null!=e&&e.sizes&&null!=e&&e.sizes[t]?{...c,width:null==e||null===(s=e.sizes[t])||void 0===s?void 0:s.width,height:null==e||null===(u=e.sizes[t])||void 0===u?void 0:u.height,url:null==e||null===(d=e.sizes[t])||void 0===d?void 0:d.url}:null!=e&&e.media_details&&null!=e&&null!==(a=e.media_details)&&void 0!==a&&a.sizes[t]?{...c,width:null==e||null===(m=e.media_details)||void 0===m||null===(g=m.sizes[t])||void 0===g?void 0:g.width,height:null==e||null===(b=e.media_details)||void 0===b||null===(h=b.sizes[t])||void 0===h?void 0:h.height,url:null==e||null===(p=e.media_details)||void 0===p||null===(v=p.sizes[t])||void 0===v?void 0:v.source_url}:{...c,url:null==e?void 0:e.url}})(e,Y);Q.current&&!u.caption&&(u={...u,alt:u.alt,id:u.id,link:u.link}),s=e.id&&e.id===C?{url:I}:{width:void 0,height:void 0,sizeSlug:O(e,Y)?Y:"full"};let d,m=t.linkDestination;if(!m)switch((null===(i=wp)||void 0===i||null===(n=i.media)||void 0===n||null===(l=n.view)||void 0===l||null===(o=l.settings)||void 0===o||null===(c=o.defaultProps)||void 0===c?void 0:c.link)||"none"){case"file":case"media":m="media";break;case"post":case"attachment":m="attachment";break;case"custom":m="custom";break;case"none":m="none"}switch(m){case"media":d=e.url;break;case"attachment":d=e.link}u.href=d,a({...u,...s,linkDestination:m})}function ne(e){e!==I&&a({url:e,id:void 0,width:void 0,height:void 0,sizeSlug:Y})}let le=((e,t)=>!e&&Object(r.isBlobURL)(t))(C,I);Object(i.useEffect)(()=>{if(!le)return;const e=Object(r.getBlobByURL)(I);e&&Z({filesList:[e],onFileChange:e=>{let[t]=e;ie(t)},allowedTypes:E,onError:e=>{le=!1,V("error",e,{type:"snackbar"}),a({src:void 0,id:void 0,url:void 0})}})},[]),Object(i.useEffect)(()=>{le?G(I):Object(r.revokeBlobURL)($)},[le,I]);const oe=k(C,I)?I:void 0,re=!!I&&n.a.createElement("img",{alt:Object(h.__)("Edit image"),title:Object(h.__)("Edit image"),className:"edit-image-preview",src:I});Object(i.useEffect)(()=>{k(C,I)&&u&&!J&&window.fetch(I).then(e=>e.blob()).then(e=>q(e)).catch(()=>{})},[C,I,u,J]);const ce=uagb_blocks_info.uagb_url+"/admin/assets/preview-images/image.svg",se=Object(g.useBlockProps)({ref:X});return n.a.createElement(n.a.Fragment,null,n.a.createElement(g.BlockControls,{group:"block"},n.a.createElement(g.BlockAlignmentControl,{value:T,onChange:function(e){const t=["wide","full"].includes(e)?{width:void 0,height:void 0}:{};a({...t,align:e})}}),n.a.createElement(g.__experimentalImageURLInputUI,{url:F||"",onChangeUrl:function(e){a(e)},linkDestination:A,mediaUrl:ee&&ee.source_url||I,mediaLink:ee&&ee.link,linkTarget:H,linkClass:N,rel:P}),J&&n.a.createElement(c.ToolbarButton,{onClick:function(){Z({filesList:[J],onFileChange(e){let[t]=e;ie(t),Object(r.isBlobURL)(null==t?void 0:t.url)||(q(),V("success",Object(h.__)("Image uploaded."),{type:"snackbar"}))},allowedTypes:E,onError(e){V("error",e,{type:"snackbar"})}})},icon:m,label:Object(h.__)("Upload external image")})),n.a.createElement("div",B({},se,{className:o()(l,"uagb-editor-preview-mode-"+D.toLowerCase(),"uagb-block-"+S,"wp-block-uagb-image--layout-"+z,"wp-block-uagb-image--effect-"+W,"wp-block-uagb-image--align-"+(T||"none"))}),($||I)&&n.a.createElement("figure",{className:"wp-block-uagb-image__figure"},n.a.createElement(R,{temporaryURL:$,attributes:t,setAttributes:a,isSelected:u,insertBlocksAfter:d,onReplace:f,onSelectImage:ie,onSelectURL:ne,onUploadError:ae,containerRef:X,context:w,clientId:_,onCloseModal:te,onImageLoadError:function(){let e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];e||a({url:void 0,id:void 0})}}),n.a.createElement(y,{captionRef:Q,attributes:t,setAttributes:a,isSelected:u})),x?n.a.createElement("img",{width:"100%",src:ce,alt:""}):n.a.createElement(g.MediaPlaceholder,{icon:n.a.createElement(g.BlockIcon,{icon:v.a.image}),labels:{title:Object(h.__)("Image","ultimate-addons-for-gutenberg"),instructions:Object(h.__)("Upload an image file, pick one from your media library, or add one with a URL.","ultimate-addons-for-gutenberg")},onSelect:ie,onSelectURL:ne,onError:ae,onClose:te,accept:"image/*",allowedTypes:E,value:{id:C,src:oe},mediaPreview:re,disableMediaButtons:$||I})))};C.propTypes={},C.defaultProps={},t.default=n.a.memo(C)}}]);