(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{455:function(e,t,a){"use strict";a.r(t);var l=a(2),n=a.n(l),o=a(3),r=a(4),u=a(5),i=a(0),b=wp.blockEditor,s=b.InspectorControls,c=b.ColorPalette,g=wp.components,m=g.PanelBody,d=g.SelectControl,_=g.RangeControl,f=g.Button,p=g.TextControl,h=g.ToggleControl,v=g.TabPanel,E=g.ButtonGroup,C=g.TextareaControl,O=g.CheckboxControl,j=g.ExternalLink,y=function(e){var t,a,l,b=e=e.parentProps,g=b.attributes,y=b.setAttributes,S=(b.variations,b.hasInnerBlocks,g.block_id,g.submitButtonText,g.formLabel),T=g.buttonAlign,N=g.buttonSize,F=g.confirmationType,x=g.confirmationMessage,B=g.failedMessage,H=g.confirmationUrl,k=g.sendAfterSubmitEmail,z=g.afterSubmitToEmail,w=g.afterSubmitCcEmail,M=g.afterSubmitBccEmail,R=g.afterSubmitEmailSubject,L=g.submitColor,A=g.submitColorHover,P=g.submitBgColor,W=g.submitBgColorHover,G=g.submitborderStyle,K=g.submitborderWidth,D=g.submitborderRadius,V=g.submitborderColor,I=g.submitborderHoverColor,U=g.vPaddingSubmit,J=g.hPaddingSubmit,q=g.submitTextloadGoogleFonts,Q=g.submitTextFontFamily,X=g.submitTextFontWeight,Y=g.submitTextFontSubset,Z=g.submitTextFontSize,$=g.submitTextFontSizeType,ee=g.submitTextFontSizeTablet,te=g.submitTextFontSizeMobile,ae=g.submitTextLineHeightType,le=g.submitTextLineHeight,ne=g.submitTextLineHeightTablet,oe=g.submitTextLineHeightMobile,re=g.labelloadGoogleFonts,ue=g.labelFontFamily,ie=g.labelFontWeight,be=g.labelFontSubset,se=g.labelFontSize,ce=g.labelFontSizeType,ge=g.labelFontSizeTablet,me=g.labelFontSizeMobile,de=g.labelLineHeightType,_e=g.labelLineHeight,fe=g.labelLineHeightTablet,pe=g.labelLineHeightMobile,he=g.inputloadGoogleFonts,ve=g.inputFontFamily,Ee=g.inputFontWeight,Ce=g.inputFontSubset,Oe=g.inputFontSize,je=g.inputFontSizeType,ye=g.inputFontSizeTablet,Se=g.inputFontSizeMobile,Te=g.inputLineHeightType,Ne=g.inputLineHeight,Fe=g.inputLineHeightTablet,xe=g.inputLineHeightMobile,Be=g.toggleSize,He=g.toggleWidthSize,ke=g.toggleHeightSize,ze=g.toggleActiveColor,we=g.labelColor,Me=g.inputColor,Re=g.bgColor,Le=g.inputplaceholderColor,Ae=g.inputactiveColor,Pe=g.inputborderStyle,We=g.inputborderWidth,Ge=g.inputborderRadius,Ke=g.inputborderColor,De=g.inputborderHoverColor,Ve=g.vPaddingField,Ie=g.hPaddingField,Ue=g.fieldGap,Je=g.formStyle,qe=g.overallAlignment,Qe=g.reCaptchaEnable,Xe=g.reCaptchaType,Ye=g.reCaptchaSecretKeyV2,Ze=g.reCaptchaSiteKeyV2,$e=g.reCaptchaSecretKeyV3,et=g.reCaptchaSiteKeyV3,tt=g.hidereCaptchaBatch,at=g.successMessageTextColor,lt=g.successMessageBGColor,nt=g.successMessageBorderColor,ot=g.successMessageBorderStyle,rt=g.successMessageBorderWidth,ut=g.failedMessageTextColor,it=g.failedMessageBorderColor,bt=g.failedMessageBorderStyle,st=g.failedMessageBorderWidth,ct=g.failedMessageBGColor;if(1==q){var gt={google:{families:[Q+(X?":"+X:"")]}};t=n.a.createElement(u.a,{config:gt})}if(1==re){var mt={google:{families:[ue+(ie?":"+ie:"")]}};a=n.a.createElement(u.a,{config:mt})}if(1==he){var dt={google:{families:[ve+(Ee?":"+Ee:"")]}};l=n.a.createElement(u.a,{config:dt})}return n.a.createElement(n.a.Fragment,null,n.a.createElement(s,null,n.a.createElement(m,{title:Object(i.__)("General","ultimate-addons-for-gutenberg"),initialOpen:!0,className:"uagb__url-panel-body"},n.a.createElement(p,{label:Object(i.__)("Hidden Field Label","ultimate-addons-for-gutenberg"),value:S,onChange:function(e){return y({formLabel:e})}}),n.a.createElement(d,{label:Object(i.__)("Style","ultimate-addons-for-gutenberg"),value:Je,onChange:function(e){return y({formStyle:e})},options:[{value:"boxed",label:Object(i.__)("Boxed","ultimate-addons-for-gutenberg")},{value:"underlined",label:Object(i.__)("Underlined","ultimate-addons-for-gutenberg")}]}),n.a.createElement("h2",null," ",Object(i.__)("Overall Alignment","ultimate-addons-for-gutenberg")),n.a.createElement(f,{key:"left",icon:"editor-alignleft",label:Object(i.__)("Left","ultimate-addons-for-gutenberg"),onClick:function(){return y({overallAlignment:"left"})},"aria-pressed":"left"===qe,isPrimary:"left"===qe}),n.a.createElement(f,{key:"center",icon:"editor-aligncenter",label:Object(i.__)("Right","ultimate-addons-for-gutenberg"),onClick:function(){return y({overallAlignment:"center"})},"aria-pressed":"center"===qe,isPrimary:"center"===qe}),n.a.createElement(f,{key:"right",icon:"editor-alignright",label:Object(i.__)("Right","ultimate-addons-for-gutenberg"),onClick:function(){return y({overallAlignment:"right"})},"aria-pressed":"right"===qe,isPrimary:"right"===qe}),n.a.createElement("h2",null," ",Object(i.__)("Confirmation Type","ultimate-addons-for-gutenberg")),n.a.createElement(E,{className:"uagb-forms-button-group","aria-label":Object(i.__)("Confirmation Type","ultimate-addons-for-gutenberg")},n.a.createElement(f,{key:"message",isSmall:!0,isPrimary:"message"===F,"aria-pressed":"message"===F,onClick:function(){return y({confirmationType:"message"})}},Object(i.__)("Message","ultimate-addons-for-gutenberg")),n.a.createElement(f,{key:"url",isSmall:!0,isPrimary:"url"===F,"aria-pressed":"url"===F,onClick:function(){return y({confirmationType:"url"})}},Object(i.__)("URL","ultimate-addons-for-gutenberg"))),"message"===F&&n.a.createElement(n.a.Fragment,null,n.a.createElement(m,{title:Object(i.__)("Success Message","ultimate-addons-for-gutenberg"),initialOpen:!1,className:"uagb__url-panel-body"},n.a.createElement(C,{label:"Success Message Text",help:Object(i.__)("Enter a message you want to display after successfull form submission","ultimate-addons-for-gutenberg"),value:x,onChange:function(e){return y({confirmationMessage:e})}}),n.a.createElement("p",{className:"uagb-setting-label"},Object(i.__)("Text Color","ultimate-addons-for-gutenberg"),n.a.createElement("span",{className:"components-base-control__label"},n.a.createElement("span",{className:"component-color-indicator",style:{Color:at}}))),n.a.createElement(c,{value:at,onChange:function(e){return y({successMessageTextColor:e})},allowReset:!0}),n.a.createElement("p",{className:"uagb-setting-label"},Object(i.__)("Background Color","ultimate-addons-for-gutenberg"),n.a.createElement("span",{className:"components-base-control__label"},n.a.createElement("span",{className:"component-color-indicator",style:{backgroundColor:lt}}))),n.a.createElement(c,{value:lt,onChange:function(e){return y({successMessageBGColor:e})},allowReset:!0}),n.a.createElement(d,{label:Object(i.__)("Border Style","ultimate-addons-for-gutenberg"),value:ot,onChange:function(e){return y({successMessageBorderStyle:e})},options:[{value:"none",label:Object(i.__)("None","ultimate-addons-for-gutenberg")},{value:"solid",label:Object(i.__)("Solid","ultimate-addons-for-gutenberg")},{value:"dotted",label:Object(i.__)("Dotted","ultimate-addons-for-gutenberg")},{value:"dashed",label:Object(i.__)("Dashed","ultimate-addons-for-gutenberg")},{value:"double",label:Object(i.__)("Double","ultimate-addons-for-gutenberg")},{value:"groove",label:Object(i.__)("Groove","ultimate-addons-for-gutenberg")},{value:"inset",label:Object(i.__)("Inset","ultimate-addons-for-gutenberg")},{value:"outset",label:Object(i.__)("Outset","ultimate-addons-for-gutenberg")},{value:"ridge",label:Object(i.__)("Ridge","ultimate-addons-for-gutenberg")}]}),n.a.createElement(_,{label:Object(i.__)("Border Width","ultimate-addons-for-gutenberg"),value:rt,onChange:function(e){return y({successMessageBorderWidth:e})},min:0,max:50,allowReset:!0}),n.a.createElement("p",{className:"uagb-setting-label"},Object(i.__)("Border Color","ultimate-addons-for-gutenberg"),n.a.createElement("span",{className:"components-base-control__label"},n.a.createElement("span",{className:"component-color-indicator",style:{backgroundColor:nt}}))),n.a.createElement(c,{value:nt,onChange:function(e){return y({successMessageBorderColor:e})},allowReset:!0})),n.a.createElement(m,{title:Object(i.__)("Error Message ","ultimate-addons-for-gutenberg"),initialOpen:!1,className:"uagb__url-panel-body"},n.a.createElement(C,{label:"Error Message Text",help:Object(i.__)("Enter a message you want to display after unsuccessfull form submission","ultimate-addons-for-gutenberg"),value:B,onChange:function(e){return y({failedMessage:e})}}),n.a.createElement("p",{className:"uagb-setting-label"},Object(i.__)("Text Color","ultimate-addons-for-gutenberg"),n.a.createElement("span",{className:"components-base-control__label"},n.a.createElement("span",{className:"component-color-indicator",style:{backgroundColor:ut}}))),n.a.createElement(c,{value:ut,onChange:function(e){return y({failedMessageTextColor:e})},allowReset:!0}),n.a.createElement("p",{className:"uagb-setting-label"},Object(i.__)("Background Color","ultimate-addons-for-gutenberg"),n.a.createElement("span",{className:"components-base-control__label"},n.a.createElement("span",{className:"component-color-indicator",style:{backgroundColor:ct}}))),n.a.createElement(c,{value:ct,onChange:function(e){return y({failedMessageBGColor:e})},allowReset:!0}),n.a.createElement(d,{label:Object(i.__)("Border Style","ultimate-addons-for-gutenberg"),value:bt,onChange:function(e){return y({failedMessageBorderStyle:e})},options:[{value:"none",label:Object(i.__)("None","ultimate-addons-for-gutenberg")},{value:"solid",label:Object(i.__)("Solid","ultimate-addons-for-gutenberg")},{value:"dotted",label:Object(i.__)("Dotted","ultimate-addons-for-gutenberg")},{value:"dashed",label:Object(i.__)("Dashed","ultimate-addons-for-gutenberg")},{value:"double",label:Object(i.__)("Double","ultimate-addons-for-gutenberg")},{value:"groove",label:Object(i.__)("Groove","ultimate-addons-for-gutenberg")},{value:"inset",label:Object(i.__)("Inset","ultimate-addons-for-gutenberg")},{value:"outset",label:Object(i.__)("Outset","ultimate-addons-for-gutenberg")},{value:"ridge",label:Object(i.__)("Ridge","ultimate-addons-for-gutenberg")}]}),n.a.createElement(_,{label:Object(i.__)("Border Width","ultimate-addons-for-gutenberg"),value:st,onChange:function(e){return y({failedMessageBorderWidth:e})},min:0,max:50,allowReset:!0}),n.a.createElement("p",{className:"uagb-setting-label"},Object(i.__)("Border Color","ultimate-addons-for-gutenberg"),n.a.createElement("span",{className:"components-base-control__label"},n.a.createElement("span",{className:"component-color-indicator",style:{backgroundColor:it}}))),n.a.createElement(c,{value:it,onChange:function(e){return y({failedMessageBorderColor:e})},allowReset:!0}))),"url"===F&&n.a.createElement(p,{label:Object(i.__)("Success Redirect URL","ultimate-addons-for-gutenberg"),help:Object(i.__)("Enter a URL you want to redirect your page to after form Submission","ultimate-addons-for-gutenberg"),value:H,onChange:function(e){return y({confirmationUrl:e})}})),n.a.createElement(m,{title:Object(i.__)("Submit Button","ultimate-addons-for-gutenberg"),initialOpen:!1,className:"uagb__url-panel-body"},n.a.createElement(n.a.Fragment,null,n.a.createElement(d,{label:Object(i.__)("Button Size","ultimate-addons-for-gutenberg"),value:N,onChange:function(e){return y({buttonSize:e})},options:[{value:"small",label:Object(i.__)("Small","ultimate-addons-for-gutenberg")},{value:"medium",label:Object(i.__)("Medium","ultimate-addons-for-gutenberg")},{value:"large",label:Object(i.__)("Large","ultimate-addons-for-gutenberg")},{value:"extralarge",label:Object(i.__)("Extra Large","ultimate-addons-for-gutenberg")},{value:"full",label:Object(i.__)("Full","ultimate-addons-for-gutenberg")}]}),n.a.createElement("h2",null," ",Object(i.__)("Button Alignment","ultimate-addons-for-gutenberg")),n.a.createElement(f,{key:"left",icon:"editor-alignleft",label:Object(i.__)("Left","ultimate-addons-for-gutenberg"),onClick:function(){return y({buttonAlign:"left"})},"aria-pressed":"left"===T,isPrimary:"left"===T}),n.a.createElement(f,{key:"center",icon:"editor-aligncenter",label:Object(i.__)("Right","ultimate-addons-for-gutenberg"),onClick:function(){return y({buttonAlign:"center"})},"aria-pressed":"center"===T,isPrimary:"center"===T}),n.a.createElement(f,{key:"right",icon:"editor-alignright",label:Object(i.__)("Right","ultimate-addons-for-gutenberg"),onClick:function(){return y({buttonAlign:"right"})},"aria-pressed":"right"===T,isPrimary:"right"===T}),n.a.createElement("h2",null,Object(i.__)("Button Padding","ultimate-addons-for-gutenberg")),n.a.createElement(_,{label:o.a.vertical_spacing,className:"uagb-padding-control submit-btn-control",value:U,onChange:function(e){return y({vPaddingSubmit:e})},min:0,max:100}),n.a.createElement(_,{label:o.a.horizontal_spacing,className:"uagb-padding-control submit-btn-control",value:J,onChange:function(e){return y({hPaddingSubmit:e})},min:0,max:100})),n.a.createElement(v,{className:"uagb-inspect-tabs uagb-inspect-tabs-col-2",activeClass:"active-tab",tabs:[{name:"normal",title:Object(i.__)("Normal","ultimate-addons-for-gutenberg"),className:"uagb-normal-tab"},{name:"hover",title:Object(i.__)("Hover","ultimate-addons-for-gutenberg"),className:"uagb-focus-tab"}]},(function(e){var t;return t="normal"===e.name?n.a.createElement(n.a.Fragment,null,n.a.createElement("p",{className:"uagb-setting-label"},Object(i.__)("Submit Color","ultimate-addons-for-gutenberg"),n.a.createElement("span",{className:"components-base-control__label"},n.a.createElement("span",{className:"component-color-indicator",style:{backgroundColor:L}}))),n.a.createElement(c,{value:L,onChange:function(e){return y({submitColor:e})},allowReset:!0}),n.a.createElement("p",{className:"uagb-setting-label"},Object(i.__)("Background Color","ultimate-addons-for-gutenberg"),n.a.createElement("span",{className:"components-base-control__label"},n.a.createElement("span",{className:"component-color-indicator",style:{backgroundColor:P}}))),n.a.createElement(c,{value:P,onChange:function(e){return y({submitBgColor:e})},allowReset:!0})):n.a.createElement(n.a.Fragment,null,n.a.createElement("p",{className:"uagb-setting-label"},Object(i.__)("Submit Hover Color","ultimate-addons-for-gutenberg"),n.a.createElement("span",{className:"components-base-control__label"},n.a.createElement("span",{className:"component-color-indicator",style:{backgroundColor:A}}))),n.a.createElement(c,{value:A,onChange:function(e){return y({submitColorHover:e})},allowReset:!0}),n.a.createElement("p",{className:"uagb-setting-label"},Object(i.__)("Background Hover Color","ultimate-addons-for-gutenberg"),n.a.createElement("span",{className:"components-base-control__label"},n.a.createElement("span",{className:"component-color-indicator",style:{backgroundColor:W}}))),n.a.createElement(c,{value:W,onChange:function(e){return y({submitBgColorHover:e})},allowReset:!0})),n.a.createElement("div",null,t)})),n.a.createElement(d,{label:Object(i.__)("Border Style","ultimate-addons-for-gutenberg"),value:G,onChange:function(e){return y({submitborderStyle:e})},options:[{value:"none",label:Object(i.__)("None","ultimate-addons-for-gutenberg")},{value:"solid",label:Object(i.__)("Solid","ultimate-addons-for-gutenberg")},{value:"dotted",label:Object(i.__)("Dotted","ultimate-addons-for-gutenberg")},{value:"dashed",label:Object(i.__)("Dashed","ultimate-addons-for-gutenberg")},{value:"double",label:Object(i.__)("Double","ultimate-addons-for-gutenberg")},{value:"groove",label:Object(i.__)("Groove","ultimate-addons-for-gutenberg")},{value:"inset",label:Object(i.__)("Inset","ultimate-addons-for-gutenberg")},{value:"outset",label:Object(i.__)("Outset","ultimate-addons-for-gutenberg")},{value:"ridge",label:Object(i.__)("Ridge","ultimate-addons-for-gutenberg")}]}),"none"!=G&&n.a.createElement(n.a.Fragment,null,n.a.createElement(_,{label:Object(i.__)("Border Width","ultimate-addons-for-gutenberg"),value:K,onChange:function(e){return y({submitborderWidth:e})},min:0,max:50,allowReset:!0}),n.a.createElement(_,{label:Object(i.__)("Border Radius","ultimate-addons-for-gutenberg"),value:D,onChange:function(e){return y({submitborderRadius:e})},min:0,max:100,allowReset:!0}),n.a.createElement("p",{className:"uagb-setting-label"},Object(i.__)("Border Color","ultimate-addons-for-gutenberg"),n.a.createElement("span",{className:"components-base-control__label"},n.a.createElement("span",{className:"component-color-indicator",style:{backgroundColor:V}}))),n.a.createElement(c,{value:V,onChange:function(e){return y({submitborderColor:e})},allowReset:!0}),n.a.createElement("p",{className:"uagb-setting-label"},Object(i.__)("Border Hover Color","ultimate-addons-for-gutenberg"),n.a.createElement("span",{className:"components-base-control__label"},n.a.createElement("span",{className:"component-color-indicator",style:{backgroundColor:I}}))),n.a.createElement(c,{value:I,onChange:function(e){return y({submitborderHoverColor:e})},allowReset:!0})),n.a.createElement(r.a,{label:Object(i.__)("Typography","ultimate-addons-for-gutenberg"),attributes:g,setAttributes:y,loadGoogleFonts:{value:q,label:Object(i.__)("submitTextloadGoogleFonts","ultimate-addons-for-gutenberg")},fontFamily:{value:Q,label:Object(i.__)("submitTextFontFamily","ultimate-addons-for-gutenberg")},fontWeight:{value:X,label:Object(i.__)("submitTextFontWeight","ultimate-addons-for-gutenberg")},fontSubset:{value:Y,label:Object(i.__)("submitTextFontSubset","ultimate-addons-for-gutenberg")},fontSizeType:{value:$,label:Object(i.__)("submitTextFontSizeType","ultimate-addons-for-gutenberg")},fontSize:{value:Z,label:Object(i.__)("submitTextFontSize","ultimate-addons-for-gutenberg")},fontSizeMobile:{value:te,label:Object(i.__)("submitTextFontSizeMobile","ultimate-addons-for-gutenberg")},fontSizeTablet:{value:ee,label:Object(i.__)("submitTextFontSizeTablet","ultimate-addons-for-gutenberg")},lineHeightType:{value:ae,label:Object(i.__)("submitTextLineHeightType","ultimate-addons-for-gutenberg")},lineHeight:{value:le,label:Object(i.__)("submitTextLineHeight","ultimate-addons-for-gutenberg")},lineHeightMobile:{value:oe,label:Object(i.__)("submitTextLineHeightMobile","ultimate-addons-for-gutenberg")},lineHeightTablet:{value:ne,label:Object(i.__)("submitTextLineHeightTablet","ultimate-addons-for-gutenberg")}})),n.a.createElement(m,{title:Object(i.__)("After Submit Actions"),initialOpen:!1,className:"uagb__url-panel-body"},n.a.createElement(O,{label:"Email",checked:k,onChange:function(e){return y({sendAfterSubmitEmail:e})}}),!0===k&&n.a.createElement(n.a.Fragment,null,n.a.createElement(v,{className:"uagb-size-type-field-tabs components-base-control uagb-size-type-field__common-tabs uagb-inline-margin uagb-email-controls-tabs",activeClass:"active-tab",tabs:[{name:"to",title:"To",className:"uagb-desktop-tab uagb-responsive-tabs"},{name:"cc",title:"CC",className:"uagb-tablet-tab uagb-responsive-tabs"},{name:"bcc",title:"BCC",className:"uagb-mobile-tab uagb-responsive-tabs"}]},(function(e){var t;return t="to"===e.name?n.a.createElement(p,{label:Object(i.__)("To","ultimate-addons-for-gutenberg"),placeholder:Object(i.__)("Email","ultimate-addons-for-gutenberg"),value:z,onChange:function(e){return y({afterSubmitToEmail:e})}}):"cc"===e.name?n.a.createElement(p,{label:Object(i.__)("CC","ultimate-addons-for-gutenberg"),placeholder:Object(i.__)("Email","ultimate-addons-for-gutenberg"),value:w,onChange:function(e){return y({afterSubmitCcEmail:e})}}):n.a.createElement(p,{label:Object(i.__)("BCC","ultimate-addons-for-gutenberg"),placeholder:Object(i.__)("Email","ultimate-addons-for-gutenberg"),value:M,onChange:function(e){return y({afterSubmitBccEmail:e})}}),n.a.createElement("div",{className:"uagb-form-emailto"},t)})),n.a.createElement(p,{label:Object(i.__)("Subject","ultimate-addons-for-gutenberg"),placeholder:Object(i.__)("Subject","ultimate-addons-for-gutenberg"),value:R,onChange:function(e){return y({afterSubmitEmailSubject:e})}}))),n.a.createElement(m,{title:Object(i.__)("Design","ultimate-addons-for-gutenberg"),initialOpen:!1,className:"uagb__url-panel-body"},n.a.createElement(r.a,{label:Object(i.__)("Label Typography","ultimate-addons-for-gutenberg"),attributes:g,setAttributes:y,loadGoogleFonts:{value:re,label:Object(i.__)("labelloadGoogleFonts","ultimate-addons-for-gutenberg")},fontFamily:{value:ue,label:Object(i.__)("labelFontFamily","ultimate-addons-for-gutenberg")},fontWeight:{value:ie,label:Object(i.__)("labelFontWeight","ultimate-addons-for-gutenberg")},fontSubset:{value:be,label:Object(i.__)("labelFontSubset","ultimate-addons-for-gutenberg")},fontSizeType:{value:ce,label:Object(i.__)("labelFontSizeType","ultimate-addons-for-gutenberg")},fontSize:{value:se,label:Object(i.__)("labelFontSize","ultimate-addons-for-gutenberg")},fontSizeMobile:{value:me,label:Object(i.__)("labelFontSizeMobile","ultimate-addons-for-gutenberg")},fontSizeTablet:{value:ge,label:Object(i.__)("labelFontSizeTablet","ultimate-addons-for-gutenberg")},lineHeightType:{value:de,label:Object(i.__)("labelLineHeightType","ultimate-addons-for-gutenberg")},lineHeight:{value:_e,label:Object(i.__)("labelLineHeight","ultimate-addons-for-gutenberg")},lineHeightMobile:{value:pe,label:Object(i.__)("labelLineHeightMobile","ultimate-addons-for-gutenberg")},lineHeightTablet:{value:fe,label:Object(i.__)("labelLineHeightTablet","ultimate-addons-for-gutenberg")}}),n.a.createElement(r.a,{label:Object(i.__)("Input Typography","ultimate-addons-for-gutenberg"),attributes:g,setAttributes:y,loadGoogleFonts:{value:he,label:Object(i.__)("inputloadGoogleFonts","ultimate-addons-for-gutenberg")},fontFamily:{value:ve,label:Object(i.__)("inputFontFamily","ultimate-addons-for-gutenberg")},fontWeight:{value:Ee,label:Object(i.__)("inputFontWeight","ultimate-addons-for-gutenberg")},fontSubset:{value:Ce,label:Object(i.__)("inputFontSubset","ultimate-addons-for-gutenberg")},fontSizeType:{value:je,label:Object(i.__)("inputFontSizeType","ultimate-addons-for-gutenberg")},fontSize:{value:Oe,label:Object(i.__)("inputFontSize","ultimate-addons-for-gutenberg")},fontSizeMobile:{value:Se,label:Object(i.__)("inputFontSizeMobile","ultimate-addons-for-gutenberg")},fontSizeTablet:{value:ye,label:Object(i.__)("inputFontSizeTablet","ultimate-addons-for-gutenberg")},lineHeightType:{value:Te,label:Object(i.__)("inputLineHeightType","ultimate-addons-for-gutenberg")},lineHeight:{value:Ne,label:Object(i.__)("inputLineHeight","ultimate-addons-for-gutenberg")},lineHeightMobile:{value:xe,label:Object(i.__)("inputLineHeightMobile","ultimate-addons-for-gutenberg")},lineHeightTablet:{value:Fe,label:Object(i.__)("inputLineHeightTablet","ultimate-addons-for-gutenberg")}}),n.a.createElement(_,{label:Object(i.__)("Checkbox/Radio Size","ultimate-addons-for-gutenberg"),value:Be,onChange:function(e){return y({toggleSize:e})},min:0,max:50,allowReset:!0}),n.a.createElement(_,{label:Object(i.__)("Toggle Width","ultimate-addons-for-gutenberg"),value:He,onChange:function(e){return y({toggleWidthSize:e})},min:0,max:50,allowReset:!0}),n.a.createElement(_,{label:Object(i.__)("Toggle Height","ultimate-addons-for-gutenberg"),value:ke,onChange:function(e){return y({toggleHeightSize:e})},min:0,max:50,allowReset:!0}),n.a.createElement("p",{className:"uagb-setting-label"},Object(i.__)("Toggle Active Color","ultimate-addons-for-gutenberg"),n.a.createElement("span",{className:"components-base-control__label"},n.a.createElement("span",{className:"component-color-indicator",style:{backgroundColor:ze}}))),n.a.createElement(c,{value:ze,onChange:function(e){return y({toggleActiveColor:e})},allowReset:!0}),n.a.createElement("p",{className:"uagb-setting-label"},Object(i.__)("Label Color","ultimate-addons-for-gutenberg"),n.a.createElement("span",{className:"components-base-control__label"},n.a.createElement("span",{className:"component-color-indicator",style:{backgroundColor:we}}))),n.a.createElement(c,{value:we,onChange:function(e){return y({labelColor:e})},allowReset:!0}),n.a.createElement("p",{className:"uagb-setting-label"},Object(i.__)("Input Color","ultimate-addons-for-gutenberg"),n.a.createElement("span",{className:"components-base-control__label"},n.a.createElement("span",{className:"component-color-indicator",style:{backgroundColor:Me}}))),n.a.createElement(c,{value:Me,onChange:function(e){return y({inputColor:e})},allowReset:!0}),n.a.createElement("p",{className:"uagb-setting-label"},Object(i.__)("Field Background Color","ultimate-addons-for-gutenberg"),n.a.createElement("span",{className:"components-base-control__label"},n.a.createElement("span",{className:"component-color-indicator",style:{backgroundColor:Re}}))),n.a.createElement(c,{value:Re,onChange:function(e){return y({bgColor:e})},allowReset:!0}),n.a.createElement("p",{className:"uagb-setting-label"},Object(i.__)("Field Placeholder Color","ultimate-addons-for-gutenberg"),n.a.createElement("span",{className:"components-base-control__label"},n.a.createElement("span",{className:"component-color-indicator",style:{backgroundColor:Le}}))),n.a.createElement(c,{value:Le,onChange:function(e){return y({inputplaceholderColor:e})},allowReset:!0}),n.a.createElement("p",{className:"uagb-setting-label"},Object(i.__)("Field Active Color","ultimate-addons-for-gutenberg"),n.a.createElement("span",{className:"components-base-control__label"},n.a.createElement("span",{className:"component-color-indicator",style:{backgroundColor:Ae}}))),n.a.createElement(c,{value:Ae,onChange:function(e){return y({inputactiveColor:e})},allowReset:!0}),n.a.createElement(d,{label:Object(i.__)("Border Style","ultimate-addons-for-gutenberg"),value:Pe,onChange:function(e){return y({inputborderStyle:e})},options:[{value:"none",label:Object(i.__)("None","ultimate-addons-for-gutenberg")},{value:"solid",label:Object(i.__)("Solid","ultimate-addons-for-gutenberg")},{value:"dotted",label:Object(i.__)("Dotted","ultimate-addons-for-gutenberg")},{value:"dashed",label:Object(i.__)("Dashed","ultimate-addons-for-gutenberg")},{value:"double",label:Object(i.__)("Double","ultimate-addons-for-gutenberg")},{value:"groove",label:Object(i.__)("Groove","ultimate-addons-for-gutenberg")},{value:"inset",label:Object(i.__)("Inset","ultimate-addons-for-gutenberg")},{value:"outset",label:Object(i.__)("Outset","ultimate-addons-for-gutenberg")},{value:"ridge",label:Object(i.__)("Ridge","ultimate-addons-for-gutenberg")}]}),"none"!=Pe&&n.a.createElement(n.a.Fragment,null,n.a.createElement(_,{label:Object(i.__)("Border Width","ultimate-addons-for-gutenberg"),value:We,onChange:function(e){return y({inputborderWidth:e})},min:0,max:50,allowReset:!0}),"boxed"==Je&&n.a.createElement(_,{label:Object(i.__)("Border Radius","ultimate-addons-for-gutenberg"),value:Ge,onChange:function(e){return y({inputborderRadius:e})},min:0,max:100,allowReset:!0}),n.a.createElement("p",{className:"uagb-setting-label"},Object(i.__)("Border Color","ultimate-addons-for-gutenberg"),n.a.createElement("span",{className:"components-base-control__label"},n.a.createElement("span",{className:"component-color-indicator",style:{backgroundColor:Ke}}))),n.a.createElement(c,{value:Ke,onChange:function(e){return y({inputborderColor:e})},allowReset:!0}),n.a.createElement("p",{className:"uagb-setting-label"},Object(i.__)("Border Hover Color","ultimate-addons-for-gutenberg"),n.a.createElement("span",{className:"components-base-control__label"},n.a.createElement("span",{className:"component-color-indicator",style:{backgroundColor:De}}))),n.a.createElement(c,{value:De,onChange:function(e){return y({inputborderHoverColor:e})},allowReset:!0})),n.a.createElement(_,{label:Object(i.__)("Spacing between fields (px)","ultimate-addons-for-gutenberg"),className:"uagb-padding-control",value:Ue,onChange:function(e){return y({fieldGap:e})},min:0,max:100}),n.a.createElement("h2",null,Object(i.__)("Field Padding (px)","ultimate-addons-for-gutenberg")),n.a.createElement(_,{label:o.a.vertical_spacing,className:"uagb-padding-control",value:Ve,onChange:function(e){return y({vPaddingField:e})},min:0,max:100}),n.a.createElement(_,{label:o.a.horizontal_spacing,className:"uagb-padding-control",value:Ie,onChange:function(e){return y({hPaddingField:e})},min:0,max:100})),n.a.createElement(m,{title:Object(i.__)("Google reCAPTCHA","ultimate-addons-for-gutenberg"),initialOpen:!1},n.a.createElement("p",{className:"uagb-form-notice"},Object(i.__)("P.S. Note that If you are using two forms on the same page with the different reCAPTCHA versions (V2 checkbox and V3), it will create conflicts between the versions. Kindly avoid using different versions on same page. ","ultimate-addons-for-gutenberg")),n.a.createElement(h,{label:Object(i.__)("Enable reCAPTCHA ","ultimate-addons-for-gutenberg"),checked:Qe,onChange:function(e){return y({reCaptchaEnable:!Qe})}}),Qe&&n.a.createElement(d,{label:Object(i.__)("Select Version","ultimate-addons-for-gutenberg"),value:Xe,onChange:function(e){return y({reCaptchaType:e})},options:[{value:"v2",label:Object(i.__)("V2","ultimate-addons-for-gutenberg")},{value:"v3",label:Object(i.__)("V3","ultimate-addons-for-gutenberg")}]}),Qe&&"v2"===Xe&&n.a.createElement(n.a.Fragment,null,n.a.createElement(p,{label:Object(i.__)("Site Key","ultimate-addons-for-gutenberg"),value:Ze,onChange:function(e){return y({reCaptchaSiteKeyV2:e})},placeholder:Object(i.__)("Enter v2 Keys","ultimate-addons-for-gutenberg")}),n.a.createElement(p,{label:Object(i.__)("Secret Key","ultimate-addons-for-gutenberg"),value:Ye,onChange:function(e){return y({reCaptchaSecretKeyV2:e})},placeholder:Object(i.__)("Enter v2 Keys","ultimate-addons-for-gutenberg")})),Qe&&"v3"===Xe&&n.a.createElement(n.a.Fragment,null,n.a.createElement(p,{label:Object(i.__)("Site Key","ultimate-addons-for-gutenberg"),value:et,onChange:function(e){return y({reCaptchaSiteKeyV3:e})},placeholder:Object(i.__)("Enter v3 Keys","ultimate-addons-for-gutenberg")}),n.a.createElement(p,{label:Object(i.__)("Secret Key","ultimate-addons-for-gutenberg"),value:$e,onChange:function(e){return y({reCaptchaSecretKeyV3:e})},placeholder:Object(i.__)("Enter v3 Keys","ultimate-addons-for-gutenberg")}),n.a.createElement(h,{label:Object(i.__)("Hide reCAPTCHA Badge","ultimate-addons-for-gutenberg"),checked:tt,onChange:function(e){return y({hidereCaptchaBatch:!tt})}})),n.a.createElement("h2",null," ",Object(i.__)("Know More","ultimate-addons-for-gutenberg")),n.a.createElement(j,{href:"https://www.google.com/recaptcha/admin/create"},Object(i.__)("Get Keys","ultimate-addons-for-gutenberg")),n.a.createElement(j,{href:"https://developers.google.com/recaptcha/intro"},Object(i.__)(" | Documentation","ultimate-addons-for-gutenberg")))),t,a,l)};t.default=n.a.memo(y)}}]);