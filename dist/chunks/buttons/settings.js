(window.webpackJsonp_ultimate_addons_for_gutenberg=window.webpackJsonp_ultimate_addons_for_gutenberg||[]).push([[10],{465:function(e,t,a){"use strict";a.r(t);var l=a(10),n=a(1),o=a.n(n),r=a(2),s=a(4),u=a(5),b=a(19),i=a(66);const g=e=>{e=e.parentProps;const{attributes:t,setAttributes:a}=e,{align:g,gap:c,stack:d,loadGoogleFonts:m,fontFamily:_,fontWeight:f,fontSubset:p}=t;let h;if(1==m){const e={google:{families:[_+(f?":"+f:"")]}};h=o.a.createElement(i.a,{config:e})}return o.a.createElement(n.Suspense,{fallback:Object(l.a)()},o.a.createElement(s.InspectorControls,null,o.a.createElement(u.PanelBody,{title:Object(r.__)("General","ultimate-addons-for-gutenberg"),initialOpen:!0},o.a.createElement(u.BaseControl,null,o.a.createElement(u.BaseControl.VisualLabel,null,Object(r.__)("Alignment","ultimate-addons-for-gutenberg")),o.a.createElement(s.BlockAlignmentToolbar,{value:g,onChange:e=>a({align:e}),controls:["left","center","right","full"],isCollapsed:!1})),o.a.createElement("h2",null,Object(r.__)("Spacing","ultimate-addons-for-gutenberg")),o.a.createElement(u.RangeControl,{label:Object(r.__)("Gap Between Buttons","ultimate-addons-for-gutenberg"),value:c,onChange:e=>a({gap:e}),help:Object(r.__)("Note: The gap between the buttons will seem larger in the editor, for better user edit experience. But at frontend the gap will be exactly what is set from here.","ultimate-addons-for-gutenberg"),min:0,max:500}),o.a.createElement("hr",{className:"uagb-editor__separator"}),o.a.createElement(u.SelectControl,{label:Object(r.__)("Stack on","ultimate-addons-for-gutenberg"),value:d,options:[{value:"none",label:Object(r.__)("None","ultimate-addons-for-gutenberg")},{value:"desktop",label:Object(r.__)("Desktop","ultimate-addons-for-gutenberg")},{value:"tablet",label:Object(r.__)("Tablet","ultimate-addons-for-gutenberg")},{value:"mobile",label:Object(r.__)("Mobile","ultimate-addons-for-gutenberg")}],onChange:e=>a({stack:e}),help:Object(r.__)("Note: Choose on what breakpoint the buttons will stack.","ultimate-addons-for-gutenberg")}),o.a.createElement("hr",{className:"uagb-editor__separator"}),o.a.createElement("h2",null,Object(r.__)("Typography","ultimate-addons-for-gutenberg")),o.a.createElement(b.a,{label:Object(r.__)("Typography","ultimate-addons-for-gutenberg"),attributes:t,setAttributes:a,loadGoogleFonts:{value:m,label:"loadGoogleFonts"},fontFamily:{value:_,label:"fontFamily"},fontWeight:{value:f,label:"fontWeight"},fontSubset:{value:p,label:"fontSubset"},disableFontSize:!0,disableLineHeight:!0}))),h)};t.default=o.a.memo(g)}}]);