(window.webpackJsonp_ultimate_addons_for_gutenberg=window.webpackJsonp_ultimate_addons_for_gutenberg||[]).push([[55],{317:function(e,t,n){"use strict";var a=n(16),l=n.n(a)()((function(e){return e[1]}));l.push([e.i,'/**\n * #.# Editor Styles\n *\n * CSS for just Backend enqueued after style.scss\n * which makes it higher in priority.\n */\n.wp-block-uagb-gf-styler .uagb-gf-styler__gform-heading-none .gform_heading,\n.wp-block-uagb-gf-styler .uagb-gf-styler__gform-heading-no .gform_heading,\n.wp-block-uagb-gf-styler .uagb-gf-styler__gform-heading-yes .gform_heading.custom_gform_heading {\n  display: none; }\n\n.wp-block-uagb-gf-styler .uagb-gf-styler__gform-heading-no .gform_heading.custom_gform_heading,\n.wp-block-uagb-gf-styler .uagb-gf-styler__gform-heading-yes .gform_heading {\n  display: block; }\n\n.wp-block-uagb-gf-styler .uagb-gf-styler__check-style-enabled input[type="radio"],\n.wp-block-uagb-gf-styler .uagb-gf-styler__check-style-enabled input[type="checkbox"] {\n  -webkit-appearance: none; }\n\n.wp-block-uagb-gf-styler input[type="radio"] {\n  -webkit-appearance: radio; }\n\n.wp-block-uagb-gf-styler input[type="checkbox"] {\n  -webkit-appearance: checkbox; }\n\n.wp-block-uagb-gf-styler input[type="radio"]:focus,\n.wp-block-uagb-gf-styler input[type="checkbox"]:focus,\n.wp-block-uagb-gf-styler input[type="radio"]:checked:focus,\n.wp-block-uagb-gf-styler input[type="checkbox"]:checked:focus {\n  box-shadow: none; }\n\n.wp-block-uagb-gf-styler input[type="radio"]:checked::before,\n.wp-block-uagb-gf-styler input[type="checkbox"]:checked::before {\n  content: "";\n  display: inline;\n  float: unset; }\n\n.wp-block-uagb-gf-styler input[type="number"] {\n  height: auto; }\n\n.block-editor-page #wpwrap .edit-post-visual-editor .wp-block-uagb-gf-styler .button,\n.block-editor-page #wpwrap .edit-post-visual-editor .wp-block-uagb-gf-styler button,\n.block-editor-page #wpwrap .edit-post-visual-editor .wp-block-uagb-gf-styler input,\n.block-editor-page #wpwrap .edit-post-visual-editor .wp-block-uagb-gf-styler select,\n.block-editor-page #wpwrap .edit-post-visual-editor .wp-block-uagb-gf-styler textarea {\n  color: inherit;\n  font-size: 100%;\n  line-height: inherit; }\n\n.block-editor-page #wpwrap .edit-post-visual-editor .wp-block-uagb-gf-styler select,\n.block-editor-page #wpwrap .edit-post-visual-editor .wp-block-uagb-gf-styler .gform_button.button {\n  height: auto; }\n\n[data-type="uagb/gf-styler"].block-editor-block-list__block.wp-block {\n  border: 1px solid #0085ba; }\n  [data-type="uagb/gf-styler"].block-editor-block-list__block.wp-block .components-placeholder {\n    align-items: center; }\n  [data-type="uagb/gf-styler"].block-editor-block-list__block.wp-block .components-placeholder__fieldset {\n    justify-content: center; }\n  [data-type="uagb/gf-styler"].block-editor-block-list__block.wp-block .dashicon.dashicons-admin-post {\n    margin-right: 10px; }\n',""]),t.a=l},562:function(e,t,n){"use strict";n.r(t);var a,l=n(4),o=n.n(l),r=n(7),i=n(1),g=n(0),s=n.n(g),b=n(15),c=n.n(b),u=n(317),p=0,d={injectType:"lazySingletonStyleTag",attributes:{id:"uagb-editor-styles"},insert:"head",singleton:!0},f={};f.locals=u.a.locals||{},f.use=function(){return p++||(a=c()(u.a,d)),f},f.unuse=function(){p>0&&!--p&&(a(),a=null)};var y=f,_=n(11);const k=e=>{Object(g.useLayoutEffect)(()=>(y.use(),()=>{y.unuse()}),[]),e=e.parentProps;const t=Object(_.a)(),{className:n,attributes:a,setAttributes:l}=e,{isPreview:b,formId:c,align:u,isHtml:p,formJson:d,titleDescStyle:f,fieldStyle:k,buttonAlignment:m,buttonAlignmentTablet:w,buttonAlignmentMobile:h,enableLabel:v,enableOveride:S,advancedValidationSettings:E}=a;let x="";d&&d.data.html&&(x=d.data.html);const j=uagb_blocks_info.uagb_url+"/admin/assets/preview-images/gf-cf-styler.png";return 0===parseInt(c)?b?s.a.createElement("img",{width:"100%",src:j,alt:""}):s.a.createElement(s.a.Fragment,null,s.a.createElement(r.Placeholder,{icon:"admin-post",label:Object(i.__)("Select a Gravity Form","ultimate-addons-for-gutenberg")},s.a.createElement(r.SelectControl,{value:c,onChange:e=>{if(!e)return l({isHtml:!1}),void l({formId:null});l({isHtml:!1}),l({formId:e})},options:uagb_blocks_info.gf_forms}))):s.a.createElement("div",{className:o()(n,"uagb-gf-styler__outer-wrap","uagb-editor-preview-mode-"+t.toLowerCase(),"uagb-block-"+e.clientId.substr(0,8))},s.a.createElement("div",{className:o()("uagb-gf-styler__align-"+u,"uagb-gf-styler__field-style-"+k,"uagb-gf-styler__btn-align-"+m,"uagb-gf-styler__btn-align-tablet-"+w,"uagb-gf-styler__btn-align-mobile-"+h,"uagb-gf-styler__gform-heading-"+f,S?"uagb-gf-styler__check-style-enabled":"",v?"uagb-gf-styler__hide-label":"",E?"uagb-gf-styler__error-yes":"")},p&&s.a.createElement("div",{dangerouslySetInnerHTML:{__html:x}}),!1===p&&s.a.createElement(r.Placeholder,{icon:"admin-post",label:Object(i.__)("Loading","ultimate-addons-for-gutenberg")},s.a.createElement(r.Spinner,null))))};t.default=s.a.memo(k)}}]);