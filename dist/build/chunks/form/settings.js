(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{334:function(e,t,a){"use strict";a.r(t);var l=a(3),n=a.n(l),o=a(2),r=a(0),u=a(8),i=Object(l.lazy)((function(){return Promise.resolve().then(a.bind(null,5))})),b=Object(l.lazy)((function(){return Promise.resolve().then(a.bind(null,6))})),s=wp.blockEditor,c=s.InspectorControls,g=s.ColorPalette,m=wp.components,d=m.PanelBody,_=m.SelectControl,f=m.RangeControl,p=m.Button,h=m.TextControl,v=m.ToggleControl,E=m.TabPanel,C=m.ButtonGroup,O=m.TextareaControl,j=m.CheckboxControl,y=m.ExternalLink,S=function(e){var t,a,s,m=e=e.parentProps,S=m.attributes,T=m.setAttributes,N=S.formLabel,F=S.buttonAlign,x=S.buttonSize,H=S.confirmationType,B=S.confirmationMessage,k=S.failedMessage,z=S.confirmationUrl,w=S.sendAfterSubmitEmail,M=S.afterSubmitToEmail,R=S.afterSubmitCcEmail,L=S.afterSubmitBccEmail,A=S.afterSubmitEmailSubject,P=S.submitColor,W=S.submitColorHover,G=S.submitBgColor,K=S.submitBgColorHover,D=S.submitborderStyle,V=S.submitborderWidth,I=S.submitborderRadius,U=S.submitborderColor,J=S.submitborderHoverColor,q=S.vPaddingSubmit,Q=S.hPaddingSubmit,X=S.submitTextloadGoogleFonts,Y=S.submitTextFontFamily,Z=S.submitTextFontWeight,$=S.submitTextFontSubset,ee=S.submitTextFontSize,te=S.submitTextFontSizeType,ae=S.submitTextFontSizeTablet,le=S.submitTextFontSizeMobile,ne=S.submitTextLineHeightType,oe=S.submitTextLineHeight,re=S.submitTextLineHeightTablet,ue=S.submitTextLineHeightMobile,ie=S.labelloadGoogleFonts,be=S.labelFontFamily,se=S.labelFontWeight,ce=S.labelFontSubset,ge=S.labelFontSize,me=S.labelFontSizeType,de=S.labelFontSizeTablet,_e=S.labelFontSizeMobile,fe=S.labelLineHeightType,pe=S.labelLineHeight,he=S.labelLineHeightTablet,ve=S.labelLineHeightMobile,Ee=S.inputloadGoogleFonts,Ce=S.inputFontFamily,Oe=S.inputFontWeight,je=S.inputFontSubset,ye=S.inputFontSize,Se=S.inputFontSizeType,Te=S.inputFontSizeTablet,Ne=S.inputFontSizeMobile,Fe=S.inputLineHeightType,xe=S.inputLineHeight,He=S.inputLineHeightTablet,Be=S.inputLineHeightMobile,ke=S.toggleSize,ze=S.toggleWidthSize,we=S.toggleHeightSize,Me=S.toggleActiveColor,Re=S.labelColor,Le=S.inputColor,Ae=S.bgColor,Pe=S.inputplaceholderColor,We=S.inputactiveColor,Ge=S.inputborderStyle,Ke=S.inputborderWidth,De=S.inputborderRadius,Ve=S.inputborderColor,Ie=S.inputborderHoverColor,Ue=S.vPaddingField,Je=S.hPaddingField,qe=S.fieldGap,Qe=S.formStyle,Xe=S.overallAlignment,Ye=S.reCaptchaEnable,Ze=S.reCaptchaType,$e=S.reCaptchaSecretKeyV2,et=S.reCaptchaSiteKeyV2,tt=S.reCaptchaSecretKeyV3,at=S.reCaptchaSiteKeyV3,lt=S.hidereCaptchaBatch,nt=S.successMessageTextColor,ot=S.successMessageBGColor,rt=S.successMessageBorderColor,ut=S.successMessageBorderStyle,it=S.successMessageBorderWidth,bt=S.failedMessageTextColor,st=S.failedMessageBorderColor,ct=S.failedMessageBorderStyle,gt=S.failedMessageBorderWidth,mt=S.failedMessageBGColor;if(1==X){var dt={google:{families:[Y+(Z?":"+Z:"")]}};t=n.a.createElement(b,{config:dt})}if(1==ie){var _t={google:{families:[be+(se?":"+se:"")]}};a=n.a.createElement(b,{config:_t})}if(1==Ee){var ft={google:{families:[Ce+(Oe?":"+Oe:"")]}};s=n.a.createElement(b,{config:ft})}return n.a.createElement(n.a.Fragment,null,n.a.createElement(c,null,n.a.createElement(d,{title:Object(r.__)("General","ultimate-addons-for-gutenberg"),initialOpen:!0,className:"uagb__url-panel-body"},n.a.createElement(h,{label:Object(r.__)("Hidden Field Label","ultimate-addons-for-gutenberg"),value:N,onChange:function(e){return T({formLabel:e})}}),n.a.createElement(_,{label:Object(r.__)("Style","ultimate-addons-for-gutenberg"),value:Qe,onChange:function(e){return T({formStyle:e})},options:[{value:"boxed",label:Object(r.__)("Boxed","ultimate-addons-for-gutenberg")},{value:"underlined",label:Object(r.__)("Underlined","ultimate-addons-for-gutenberg")}]}),n.a.createElement("h2",null," ",Object(r.__)("Overall Alignment","ultimate-addons-for-gutenberg")),n.a.createElement(p,{key:"left",icon:"editor-alignleft",label:Object(r.__)("Left","ultimate-addons-for-gutenberg"),onClick:function(){return T({overallAlignment:"left"})},"aria-pressed":"left"===Xe,isPrimary:"left"===Xe}),n.a.createElement(p,{key:"center",icon:"editor-aligncenter",label:Object(r.__)("Right","ultimate-addons-for-gutenberg"),onClick:function(){return T({overallAlignment:"center"})},"aria-pressed":"center"===Xe,isPrimary:"center"===Xe}),n.a.createElement(p,{key:"right",icon:"editor-alignright",label:Object(r.__)("Right","ultimate-addons-for-gutenberg"),onClick:function(){return T({overallAlignment:"right"})},"aria-pressed":"right"===Xe,isPrimary:"right"===Xe}),n.a.createElement("h2",null," ",Object(r.__)("Confirmation Type","ultimate-addons-for-gutenberg")),n.a.createElement(C,{className:"uagb-forms-button-group","aria-label":Object(r.__)("Confirmation Type","ultimate-addons-for-gutenberg")},n.a.createElement(p,{key:"message",isSmall:!0,isPrimary:"message"===H,"aria-pressed":"message"===H,onClick:function(){return T({confirmationType:"message"})}},Object(r.__)("Message","ultimate-addons-for-gutenberg")),n.a.createElement(p,{key:"url",isSmall:!0,isPrimary:"url"===H,"aria-pressed":"url"===H,onClick:function(){return T({confirmationType:"url"})}},Object(r.__)("URL","ultimate-addons-for-gutenberg"))),"message"===H&&n.a.createElement(n.a.Fragment,null,n.a.createElement(d,{title:Object(r.__)("Success Message","ultimate-addons-for-gutenberg"),initialOpen:!1,className:"uagb__url-panel-body"},n.a.createElement(O,{label:"Success Message Text",help:Object(r.__)("Enter a message you want to display after successfull form submission","ultimate-addons-for-gutenberg"),value:B,onChange:function(e){return T({confirmationMessage:e})}}),n.a.createElement("p",{className:"uagb-setting-label"},Object(r.__)("Text Color","ultimate-addons-for-gutenberg"),n.a.createElement("span",{className:"components-base-control__label"},n.a.createElement("span",{className:"component-color-indicator",style:{Color:nt}}))),n.a.createElement(g,{value:nt,onChange:function(e){return T({successMessageTextColor:e})},allowReset:!0}),n.a.createElement("p",{className:"uagb-setting-label"},Object(r.__)("Background Color","ultimate-addons-for-gutenberg"),n.a.createElement("span",{className:"components-base-control__label"},n.a.createElement("span",{className:"component-color-indicator",style:{backgroundColor:ot}}))),n.a.createElement(g,{value:ot,onChange:function(e){return T({successMessageBGColor:e})},allowReset:!0}),n.a.createElement(_,{label:Object(r.__)("Border Style","ultimate-addons-for-gutenberg"),value:ut,onChange:function(e){return T({successMessageBorderStyle:e})},options:[{value:"none",label:Object(r.__)("None","ultimate-addons-for-gutenberg")},{value:"solid",label:Object(r.__)("Solid","ultimate-addons-for-gutenberg")},{value:"dotted",label:Object(r.__)("Dotted","ultimate-addons-for-gutenberg")},{value:"dashed",label:Object(r.__)("Dashed","ultimate-addons-for-gutenberg")},{value:"double",label:Object(r.__)("Double","ultimate-addons-for-gutenberg")},{value:"groove",label:Object(r.__)("Groove","ultimate-addons-for-gutenberg")},{value:"inset",label:Object(r.__)("Inset","ultimate-addons-for-gutenberg")},{value:"outset",label:Object(r.__)("Outset","ultimate-addons-for-gutenberg")},{value:"ridge",label:Object(r.__)("Ridge","ultimate-addons-for-gutenberg")}]}),n.a.createElement(f,{label:Object(r.__)("Border Width","ultimate-addons-for-gutenberg"),value:it,onChange:function(e){return T({successMessageBorderWidth:e})},min:0,max:50,allowReset:!0}),n.a.createElement("p",{className:"uagb-setting-label"},Object(r.__)("Border Color","ultimate-addons-for-gutenberg"),n.a.createElement("span",{className:"components-base-control__label"},n.a.createElement("span",{className:"component-color-indicator",style:{backgroundColor:rt}}))),n.a.createElement(g,{value:rt,onChange:function(e){return T({successMessageBorderColor:e})},allowReset:!0})),n.a.createElement(d,{title:Object(r.__)("Error Message ","ultimate-addons-for-gutenberg"),initialOpen:!1,className:"uagb__url-panel-body"},n.a.createElement(O,{label:"Error Message Text",help:Object(r.__)("Enter a message you want to display after unsuccessfull form submission","ultimate-addons-for-gutenberg"),value:k,onChange:function(e){return T({failedMessage:e})}}),n.a.createElement("p",{className:"uagb-setting-label"},Object(r.__)("Text Color","ultimate-addons-for-gutenberg"),n.a.createElement("span",{className:"components-base-control__label"},n.a.createElement("span",{className:"component-color-indicator",style:{backgroundColor:bt}}))),n.a.createElement(g,{value:bt,onChange:function(e){return T({failedMessageTextColor:e})},allowReset:!0}),n.a.createElement("p",{className:"uagb-setting-label"},Object(r.__)("Background Color","ultimate-addons-for-gutenberg"),n.a.createElement("span",{className:"components-base-control__label"},n.a.createElement("span",{className:"component-color-indicator",style:{backgroundColor:mt}}))),n.a.createElement(g,{value:mt,onChange:function(e){return T({failedMessageBGColor:e})},allowReset:!0}),n.a.createElement(_,{label:Object(r.__)("Border Style","ultimate-addons-for-gutenberg"),value:ct,onChange:function(e){return T({failedMessageBorderStyle:e})},options:[{value:"none",label:Object(r.__)("None","ultimate-addons-for-gutenberg")},{value:"solid",label:Object(r.__)("Solid","ultimate-addons-for-gutenberg")},{value:"dotted",label:Object(r.__)("Dotted","ultimate-addons-for-gutenberg")},{value:"dashed",label:Object(r.__)("Dashed","ultimate-addons-for-gutenberg")},{value:"double",label:Object(r.__)("Double","ultimate-addons-for-gutenberg")},{value:"groove",label:Object(r.__)("Groove","ultimate-addons-for-gutenberg")},{value:"inset",label:Object(r.__)("Inset","ultimate-addons-for-gutenberg")},{value:"outset",label:Object(r.__)("Outset","ultimate-addons-for-gutenberg")},{value:"ridge",label:Object(r.__)("Ridge","ultimate-addons-for-gutenberg")}]}),n.a.createElement(f,{label:Object(r.__)("Border Width","ultimate-addons-for-gutenberg"),value:gt,onChange:function(e){return T({failedMessageBorderWidth:e})},min:0,max:50,allowReset:!0}),n.a.createElement("p",{className:"uagb-setting-label"},Object(r.__)("Border Color","ultimate-addons-for-gutenberg"),n.a.createElement("span",{className:"components-base-control__label"},n.a.createElement("span",{className:"component-color-indicator",style:{backgroundColor:st}}))),n.a.createElement(g,{value:st,onChange:function(e){return T({failedMessageBorderColor:e})},allowReset:!0}))),"url"===H&&n.a.createElement(h,{label:Object(r.__)("Success Redirect URL","ultimate-addons-for-gutenberg"),help:Object(r.__)("Enter a URL you want to redirect your page to after form Submission","ultimate-addons-for-gutenberg"),value:z,onChange:function(e){return T({confirmationUrl:e})}})),n.a.createElement(d,{title:Object(r.__)("Submit Button","ultimate-addons-for-gutenberg"),initialOpen:!1,className:"uagb__url-panel-body"},n.a.createElement(n.a.Fragment,null,n.a.createElement(_,{label:Object(r.__)("Button Size","ultimate-addons-for-gutenberg"),value:x,onChange:function(e){return T({buttonSize:e})},options:[{value:"small",label:Object(r.__)("Small","ultimate-addons-for-gutenberg")},{value:"medium",label:Object(r.__)("Medium","ultimate-addons-for-gutenberg")},{value:"large",label:Object(r.__)("Large","ultimate-addons-for-gutenberg")},{value:"extralarge",label:Object(r.__)("Extra Large","ultimate-addons-for-gutenberg")},{value:"full",label:Object(r.__)("Full","ultimate-addons-for-gutenberg")}]}),n.a.createElement("h2",null," ",Object(r.__)("Button Alignment","ultimate-addons-for-gutenberg")),n.a.createElement(p,{key:"left",icon:"editor-alignleft",label:Object(r.__)("Left","ultimate-addons-for-gutenberg"),onClick:function(){return T({buttonAlign:"left"})},"aria-pressed":"left"===F,isPrimary:"left"===F}),n.a.createElement(p,{key:"center",icon:"editor-aligncenter",label:Object(r.__)("Right","ultimate-addons-for-gutenberg"),onClick:function(){return T({buttonAlign:"center"})},"aria-pressed":"center"===F,isPrimary:"center"===F}),n.a.createElement(p,{key:"right",icon:"editor-alignright",label:Object(r.__)("Right","ultimate-addons-for-gutenberg"),onClick:function(){return T({buttonAlign:"right"})},"aria-pressed":"right"===F,isPrimary:"right"===F}),n.a.createElement("h2",null,Object(r.__)("Button Padding","ultimate-addons-for-gutenberg")),n.a.createElement(f,{label:o.a.vertical_spacing,className:"uagb-padding-control submit-btn-control",value:q,onChange:function(e){return T({vPaddingSubmit:e})},min:0,max:100}),n.a.createElement(f,{label:o.a.horizontal_spacing,className:"uagb-padding-control submit-btn-control",value:Q,onChange:function(e){return T({hPaddingSubmit:e})},min:0,max:100})),n.a.createElement(E,{className:"uagb-inspect-tabs uagb-inspect-tabs-col-2",activeClass:"active-tab",tabs:[{name:"normal",title:Object(r.__)("Normal","ultimate-addons-for-gutenberg"),className:"uagb-normal-tab"},{name:"hover",title:Object(r.__)("Hover","ultimate-addons-for-gutenberg"),className:"uagb-focus-tab"}]},(function(e){var t;return t="normal"===e.name?n.a.createElement(n.a.Fragment,null,n.a.createElement("p",{className:"uagb-setting-label"},Object(r.__)("Submit Color","ultimate-addons-for-gutenberg"),n.a.createElement("span",{className:"components-base-control__label"},n.a.createElement("span",{className:"component-color-indicator",style:{backgroundColor:P}}))),n.a.createElement(g,{value:P,onChange:function(e){return T({submitColor:e})},allowReset:!0}),n.a.createElement("p",{className:"uagb-setting-label"},Object(r.__)("Background Color","ultimate-addons-for-gutenberg"),n.a.createElement("span",{className:"components-base-control__label"},n.a.createElement("span",{className:"component-color-indicator",style:{backgroundColor:G}}))),n.a.createElement(g,{value:G,onChange:function(e){return T({submitBgColor:e})},allowReset:!0})):n.a.createElement(n.a.Fragment,null,n.a.createElement("p",{className:"uagb-setting-label"},Object(r.__)("Submit Hover Color","ultimate-addons-for-gutenberg"),n.a.createElement("span",{className:"components-base-control__label"},n.a.createElement("span",{className:"component-color-indicator",style:{backgroundColor:W}}))),n.a.createElement(g,{value:W,onChange:function(e){return T({submitColorHover:e})},allowReset:!0}),n.a.createElement("p",{className:"uagb-setting-label"},Object(r.__)("Background Hover Color","ultimate-addons-for-gutenberg"),n.a.createElement("span",{className:"components-base-control__label"},n.a.createElement("span",{className:"component-color-indicator",style:{backgroundColor:K}}))),n.a.createElement(g,{value:K,onChange:function(e){return T({submitBgColorHover:e})},allowReset:!0})),n.a.createElement("div",null,t)})),n.a.createElement(_,{label:Object(r.__)("Border Style","ultimate-addons-for-gutenberg"),value:D,onChange:function(e){return T({submitborderStyle:e})},options:[{value:"none",label:Object(r.__)("None","ultimate-addons-for-gutenberg")},{value:"solid",label:Object(r.__)("Solid","ultimate-addons-for-gutenberg")},{value:"dotted",label:Object(r.__)("Dotted","ultimate-addons-for-gutenberg")},{value:"dashed",label:Object(r.__)("Dashed","ultimate-addons-for-gutenberg")},{value:"double",label:Object(r.__)("Double","ultimate-addons-for-gutenberg")},{value:"groove",label:Object(r.__)("Groove","ultimate-addons-for-gutenberg")},{value:"inset",label:Object(r.__)("Inset","ultimate-addons-for-gutenberg")},{value:"outset",label:Object(r.__)("Outset","ultimate-addons-for-gutenberg")},{value:"ridge",label:Object(r.__)("Ridge","ultimate-addons-for-gutenberg")}]}),"none"!=D&&n.a.createElement(n.a.Fragment,null,n.a.createElement(f,{label:Object(r.__)("Border Width","ultimate-addons-for-gutenberg"),value:V,onChange:function(e){return T({submitborderWidth:e})},min:0,max:50,allowReset:!0}),n.a.createElement(f,{label:Object(r.__)("Border Radius","ultimate-addons-for-gutenberg"),value:I,onChange:function(e){return T({submitborderRadius:e})},min:0,max:100,allowReset:!0}),n.a.createElement("p",{className:"uagb-setting-label"},Object(r.__)("Border Color","ultimate-addons-for-gutenberg"),n.a.createElement("span",{className:"components-base-control__label"},n.a.createElement("span",{className:"component-color-indicator",style:{backgroundColor:U}}))),n.a.createElement(g,{value:U,onChange:function(e){return T({submitborderColor:e})},allowReset:!0}),n.a.createElement("p",{className:"uagb-setting-label"},Object(r.__)("Border Hover Color","ultimate-addons-for-gutenberg"),n.a.createElement("span",{className:"components-base-control__label"},n.a.createElement("span",{className:"component-color-indicator",style:{backgroundColor:J}}))),n.a.createElement(g,{value:J,onChange:function(e){return T({submitborderHoverColor:e})},allowReset:!0})),n.a.createElement(l.Suspense,{fallback:Object(u.a)()},n.a.createElement(i,{label:Object(r.__)("Typography","ultimate-addons-for-gutenberg"),attributes:S,setAttributes:T,loadGoogleFonts:{value:X,label:Object(r.__)("submitTextloadGoogleFonts","ultimate-addons-for-gutenberg")},fontFamily:{value:Y,label:Object(r.__)("submitTextFontFamily","ultimate-addons-for-gutenberg")},fontWeight:{value:Z,label:Object(r.__)("submitTextFontWeight","ultimate-addons-for-gutenberg")},fontSubset:{value:$,label:Object(r.__)("submitTextFontSubset","ultimate-addons-for-gutenberg")},fontSizeType:{value:te,label:Object(r.__)("submitTextFontSizeType","ultimate-addons-for-gutenberg")},fontSize:{value:ee,label:Object(r.__)("submitTextFontSize","ultimate-addons-for-gutenberg")},fontSizeMobile:{value:le,label:Object(r.__)("submitTextFontSizeMobile","ultimate-addons-for-gutenberg")},fontSizeTablet:{value:ae,label:Object(r.__)("submitTextFontSizeTablet","ultimate-addons-for-gutenberg")},lineHeightType:{value:ne,label:Object(r.__)("submitTextLineHeightType","ultimate-addons-for-gutenberg")},lineHeight:{value:oe,label:Object(r.__)("submitTextLineHeight","ultimate-addons-for-gutenberg")},lineHeightMobile:{value:ue,label:Object(r.__)("submitTextLineHeightMobile","ultimate-addons-for-gutenberg")},lineHeightTablet:{value:re,label:Object(r.__)("submitTextLineHeightTablet","ultimate-addons-for-gutenberg")}}))),n.a.createElement(d,{title:Object(r.__)("After Submit Actions"),initialOpen:!1,className:"uagb__url-panel-body"},n.a.createElement(j,{label:"Email",checked:w,onChange:function(e){return T({sendAfterSubmitEmail:e})}}),!0===w&&n.a.createElement(n.a.Fragment,null,n.a.createElement(E,{className:"uagb-size-type-field-tabs components-base-control uagb-size-type-field__common-tabs uagb-inline-margin uagb-email-controls-tabs",activeClass:"active-tab",tabs:[{name:"to",title:"To",className:"uagb-desktop-tab uagb-responsive-tabs"},{name:"cc",title:"CC",className:"uagb-tablet-tab uagb-responsive-tabs"},{name:"bcc",title:"BCC",className:"uagb-mobile-tab uagb-responsive-tabs"}]},(function(e){var t;return t="to"===e.name?n.a.createElement(h,{label:Object(r.__)("To","ultimate-addons-for-gutenberg"),placeholder:Object(r.__)("Email","ultimate-addons-for-gutenberg"),value:M,onChange:function(e){return T({afterSubmitToEmail:e})}}):"cc"===e.name?n.a.createElement(h,{label:Object(r.__)("CC","ultimate-addons-for-gutenberg"),placeholder:Object(r.__)("Email","ultimate-addons-for-gutenberg"),value:R,onChange:function(e){return T({afterSubmitCcEmail:e})}}):n.a.createElement(h,{label:Object(r.__)("BCC","ultimate-addons-for-gutenberg"),placeholder:Object(r.__)("Email","ultimate-addons-for-gutenberg"),value:L,onChange:function(e){return T({afterSubmitBccEmail:e})}}),n.a.createElement("div",{className:"uagb-form-emailto"},t)})),n.a.createElement(h,{label:Object(r.__)("Subject","ultimate-addons-for-gutenberg"),placeholder:Object(r.__)("Subject","ultimate-addons-for-gutenberg"),value:A,onChange:function(e){return T({afterSubmitEmailSubject:e})}}))),n.a.createElement(d,{title:Object(r.__)("Design","ultimate-addons-for-gutenberg"),initialOpen:!1,className:"uagb__url-panel-body"},n.a.createElement(l.Suspense,{fallback:Object(u.a)()},n.a.createElement(i,{label:Object(r.__)("Label Typography","ultimate-addons-for-gutenberg"),attributes:S,setAttributes:T,loadGoogleFonts:{value:ie,label:Object(r.__)("labelloadGoogleFonts","ultimate-addons-for-gutenberg")},fontFamily:{value:be,label:Object(r.__)("labelFontFamily","ultimate-addons-for-gutenberg")},fontWeight:{value:se,label:Object(r.__)("labelFontWeight","ultimate-addons-for-gutenberg")},fontSubset:{value:ce,label:Object(r.__)("labelFontSubset","ultimate-addons-for-gutenberg")},fontSizeType:{value:me,label:Object(r.__)("labelFontSizeType","ultimate-addons-for-gutenberg")},fontSize:{value:ge,label:Object(r.__)("labelFontSize","ultimate-addons-for-gutenberg")},fontSizeMobile:{value:_e,label:Object(r.__)("labelFontSizeMobile","ultimate-addons-for-gutenberg")},fontSizeTablet:{value:de,label:Object(r.__)("labelFontSizeTablet","ultimate-addons-for-gutenberg")},lineHeightType:{value:fe,label:Object(r.__)("labelLineHeightType","ultimate-addons-for-gutenberg")},lineHeight:{value:pe,label:Object(r.__)("labelLineHeight","ultimate-addons-for-gutenberg")},lineHeightMobile:{value:ve,label:Object(r.__)("labelLineHeightMobile","ultimate-addons-for-gutenberg")},lineHeightTablet:{value:he,label:Object(r.__)("labelLineHeightTablet","ultimate-addons-for-gutenberg")}}),n.a.createElement(i,{label:Object(r.__)("Input Typography","ultimate-addons-for-gutenberg"),attributes:S,setAttributes:T,loadGoogleFonts:{value:Ee,label:Object(r.__)("inputloadGoogleFonts","ultimate-addons-for-gutenberg")},fontFamily:{value:Ce,label:Object(r.__)("inputFontFamily","ultimate-addons-for-gutenberg")},fontWeight:{value:Oe,label:Object(r.__)("inputFontWeight","ultimate-addons-for-gutenberg")},fontSubset:{value:je,label:Object(r.__)("inputFontSubset","ultimate-addons-for-gutenberg")},fontSizeType:{value:Se,label:Object(r.__)("inputFontSizeType","ultimate-addons-for-gutenberg")},fontSize:{value:ye,label:Object(r.__)("inputFontSize","ultimate-addons-for-gutenberg")},fontSizeMobile:{value:Ne,label:Object(r.__)("inputFontSizeMobile","ultimate-addons-for-gutenberg")},fontSizeTablet:{value:Te,label:Object(r.__)("inputFontSizeTablet","ultimate-addons-for-gutenberg")},lineHeightType:{value:Fe,label:Object(r.__)("inputLineHeightType","ultimate-addons-for-gutenberg")},lineHeight:{value:xe,label:Object(r.__)("inputLineHeight","ultimate-addons-for-gutenberg")},lineHeightMobile:{value:Be,label:Object(r.__)("inputLineHeightMobile","ultimate-addons-for-gutenberg")},lineHeightTablet:{value:He,label:Object(r.__)("inputLineHeightTablet","ultimate-addons-for-gutenberg")}})),n.a.createElement(f,{label:Object(r.__)("Checkbox/Radio Size","ultimate-addons-for-gutenberg"),value:ke,onChange:function(e){return T({toggleSize:e})},min:0,max:50,allowReset:!0}),n.a.createElement(f,{label:Object(r.__)("Toggle Width","ultimate-addons-for-gutenberg"),value:ze,onChange:function(e){return T({toggleWidthSize:e})},min:0,max:50,allowReset:!0}),n.a.createElement(f,{label:Object(r.__)("Toggle Height","ultimate-addons-for-gutenberg"),value:we,onChange:function(e){return T({toggleHeightSize:e})},min:0,max:50,allowReset:!0}),n.a.createElement("p",{className:"uagb-setting-label"},Object(r.__)("Toggle Active Color","ultimate-addons-for-gutenberg"),n.a.createElement("span",{className:"components-base-control__label"},n.a.createElement("span",{className:"component-color-indicator",style:{backgroundColor:Me}}))),n.a.createElement(g,{value:Me,onChange:function(e){return T({toggleActiveColor:e})},allowReset:!0}),n.a.createElement("p",{className:"uagb-setting-label"},Object(r.__)("Label Color","ultimate-addons-for-gutenberg"),n.a.createElement("span",{className:"components-base-control__label"},n.a.createElement("span",{className:"component-color-indicator",style:{backgroundColor:Re}}))),n.a.createElement(g,{value:Re,onChange:function(e){return T({labelColor:e})},allowReset:!0}),n.a.createElement("p",{className:"uagb-setting-label"},Object(r.__)("Input Color","ultimate-addons-for-gutenberg"),n.a.createElement("span",{className:"components-base-control__label"},n.a.createElement("span",{className:"component-color-indicator",style:{backgroundColor:Le}}))),n.a.createElement(g,{value:Le,onChange:function(e){return T({inputColor:e})},allowReset:!0}),n.a.createElement("p",{className:"uagb-setting-label"},Object(r.__)("Field Background Color","ultimate-addons-for-gutenberg"),n.a.createElement("span",{className:"components-base-control__label"},n.a.createElement("span",{className:"component-color-indicator",style:{backgroundColor:Ae}}))),n.a.createElement(g,{value:Ae,onChange:function(e){return T({bgColor:e})},allowReset:!0}),n.a.createElement("p",{className:"uagb-setting-label"},Object(r.__)("Field Placeholder Color","ultimate-addons-for-gutenberg"),n.a.createElement("span",{className:"components-base-control__label"},n.a.createElement("span",{className:"component-color-indicator",style:{backgroundColor:Pe}}))),n.a.createElement(g,{value:Pe,onChange:function(e){return T({inputplaceholderColor:e})},allowReset:!0}),n.a.createElement("p",{className:"uagb-setting-label"},Object(r.__)("Field Active Color","ultimate-addons-for-gutenberg"),n.a.createElement("span",{className:"components-base-control__label"},n.a.createElement("span",{className:"component-color-indicator",style:{backgroundColor:We}}))),n.a.createElement(g,{value:We,onChange:function(e){return T({inputactiveColor:e})},allowReset:!0}),n.a.createElement(_,{label:Object(r.__)("Border Style","ultimate-addons-for-gutenberg"),value:Ge,onChange:function(e){return T({inputborderStyle:e})},options:[{value:"none",label:Object(r.__)("None","ultimate-addons-for-gutenberg")},{value:"solid",label:Object(r.__)("Solid","ultimate-addons-for-gutenberg")},{value:"dotted",label:Object(r.__)("Dotted","ultimate-addons-for-gutenberg")},{value:"dashed",label:Object(r.__)("Dashed","ultimate-addons-for-gutenberg")},{value:"double",label:Object(r.__)("Double","ultimate-addons-for-gutenberg")},{value:"groove",label:Object(r.__)("Groove","ultimate-addons-for-gutenberg")},{value:"inset",label:Object(r.__)("Inset","ultimate-addons-for-gutenberg")},{value:"outset",label:Object(r.__)("Outset","ultimate-addons-for-gutenberg")},{value:"ridge",label:Object(r.__)("Ridge","ultimate-addons-for-gutenberg")}]}),"none"!=Ge&&n.a.createElement(n.a.Fragment,null,n.a.createElement(f,{label:Object(r.__)("Border Width","ultimate-addons-for-gutenberg"),value:Ke,onChange:function(e){return T({inputborderWidth:e})},min:0,max:50,allowReset:!0}),"boxed"==Qe&&n.a.createElement(f,{label:Object(r.__)("Border Radius","ultimate-addons-for-gutenberg"),value:De,onChange:function(e){return T({inputborderRadius:e})},min:0,max:100,allowReset:!0}),n.a.createElement("p",{className:"uagb-setting-label"},Object(r.__)("Border Color","ultimate-addons-for-gutenberg"),n.a.createElement("span",{className:"components-base-control__label"},n.a.createElement("span",{className:"component-color-indicator",style:{backgroundColor:Ve}}))),n.a.createElement(g,{value:Ve,onChange:function(e){return T({inputborderColor:e})},allowReset:!0}),n.a.createElement("p",{className:"uagb-setting-label"},Object(r.__)("Border Hover Color","ultimate-addons-for-gutenberg"),n.a.createElement("span",{className:"components-base-control__label"},n.a.createElement("span",{className:"component-color-indicator",style:{backgroundColor:Ie}}))),n.a.createElement(g,{value:Ie,onChange:function(e){return T({inputborderHoverColor:e})},allowReset:!0})),n.a.createElement(f,{label:Object(r.__)("Spacing between fields (px)","ultimate-addons-for-gutenberg"),className:"uagb-padding-control",value:qe,onChange:function(e){return T({fieldGap:e})},min:0,max:100}),n.a.createElement("h2",null,Object(r.__)("Field Padding (px)","ultimate-addons-for-gutenberg")),n.a.createElement(f,{label:o.a.vertical_spacing,className:"uagb-padding-control",value:Ue,onChange:function(e){return T({vPaddingField:e})},min:0,max:100}),n.a.createElement(f,{label:o.a.horizontal_spacing,className:"uagb-padding-control",value:Je,onChange:function(e){return T({hPaddingField:e})},min:0,max:100})),n.a.createElement(d,{title:Object(r.__)("Google reCAPTCHA","ultimate-addons-for-gutenberg"),initialOpen:!1},n.a.createElement("p",{className:"uagb-form-notice"},Object(r.__)("P.S. Note that If you are using two forms on the same page with the different reCAPTCHA versions (V2 checkbox and V3), it will create conflicts between the versions. Kindly avoid using different versions on same page. ","ultimate-addons-for-gutenberg")),n.a.createElement(v,{label:Object(r.__)("Enable reCAPTCHA ","ultimate-addons-for-gutenberg"),checked:Ye,onChange:function(){return T({reCaptchaEnable:!Ye})}}),Ye&&n.a.createElement(_,{label:Object(r.__)("Select Version","ultimate-addons-for-gutenberg"),value:Ze,onChange:function(e){return T({reCaptchaType:e})},options:[{value:"v2",label:Object(r.__)("V2","ultimate-addons-for-gutenberg")},{value:"v3",label:Object(r.__)("V3","ultimate-addons-for-gutenberg")}]}),Ye&&"v2"===Ze&&n.a.createElement(n.a.Fragment,null,n.a.createElement(h,{label:Object(r.__)("Site Key","ultimate-addons-for-gutenberg"),value:et,onChange:function(e){return T({reCaptchaSiteKeyV2:e})},placeholder:Object(r.__)("Enter v2 Keys","ultimate-addons-for-gutenberg")}),n.a.createElement(h,{label:Object(r.__)("Secret Key","ultimate-addons-for-gutenberg"),value:$e,onChange:function(e){return T({reCaptchaSecretKeyV2:e})},placeholder:Object(r.__)("Enter v2 Keys","ultimate-addons-for-gutenberg")})),Ye&&"v3"===Ze&&n.a.createElement(n.a.Fragment,null,n.a.createElement(h,{label:Object(r.__)("Site Key","ultimate-addons-for-gutenberg"),value:at,onChange:function(e){return T({reCaptchaSiteKeyV3:e})},placeholder:Object(r.__)("Enter v3 Keys","ultimate-addons-for-gutenberg")}),n.a.createElement(h,{label:Object(r.__)("Secret Key","ultimate-addons-for-gutenberg"),value:tt,onChange:function(e){return T({reCaptchaSecretKeyV3:e})},placeholder:Object(r.__)("Enter v3 Keys","ultimate-addons-for-gutenberg")}),n.a.createElement(v,{label:Object(r.__)("Hide reCAPTCHA Badge","ultimate-addons-for-gutenberg"),checked:lt,onChange:function(){return T({hidereCaptchaBatch:!lt})}})),n.a.createElement("h2",null," ",Object(r.__)("Know More","ultimate-addons-for-gutenberg")),n.a.createElement(y,{href:"https://www.google.com/recaptcha/admin/create"},Object(r.__)("Get Keys","ultimate-addons-for-gutenberg")),n.a.createElement(y,{href:"https://developers.google.com/recaptcha/intro"},Object(r.__)(" | Documentation","ultimate-addons-for-gutenberg")))),n.a.createElement(l.Suspense,{fallback:Object(u.a)()},t,a,s))};t.default=n.a.memo(S)}}]);