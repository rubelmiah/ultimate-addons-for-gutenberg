(window.webpackJsonp_ultimate_addons_for_gutenberg=window.webpackJsonp_ultimate_addons_for_gutenberg||[]).push([[34],{454:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),o=t(1),r=t(6),c=t(78),s=t(23),m=t(4),u=t(14);const i=[{label:"YYYY",value:""}],d=[{label:"MM",value:""}],b=[{label:"DD",value:""}];let g;for(g=1930;g<=2030;g++)i.push({label:""+g,value:""+g});for(g=1;g<=12;g++){const e=g<10?"0"+g:""+g;d.push({label:e,value:e})}for(g=1;g<=31;g++){const e=g<10?"0"+g:""+g;b.push({label:e,value:e})}const p=e=>{e=e.parentProps;const{attributes:a,setAttributes:t}=e,{dateRequired:n,additonalVal:g,minYear:p,minMonth:h,minDay:_,maxYear:E,maxMonth:v,maxDay:C}=a;let D="",f="";p&&h&&_&&(D=p+"-"+h+"-"+_),E&&v&&C&&(f=E+"-"+v+"-"+C);let M="";return Date.parse(D)>Date.parse(f)&&(M=l.a.createElement("p",{className:"uagb-forms-date-invalidate"},Object(o.__)("Invalid date range selected","ultimate-addons-for-gutenberg"))),l.a.createElement(l.a.Fragment,null,l.a.createElement(m.InspectorControls,null,l.a.createElement(c.a,{tabs:["general","advance"]},l.a.createElement(s.b,s.a.general,l.a.createElement(u.a,{initialOpen:!0},l.a.createElement(r.ToggleControl,{label:Object(o.__)("Required","ultimate-addons-for-gutenberg"),checked:n,onChange:()=>t({dateRequired:!n})}),l.a.createElement(r.ToggleControl,{label:Object(o.__)("Additional Validation","ultimate-addons-for-gutenberg"),checked:g,onChange:()=>t({additonalVal:!g}),help:Object(o.__)("Helps to set range of calender","ultimate-addons-for-gutenberg")}),g&&l.a.createElement(l.a.Fragment,null,l.a.createElement("p",null,Object(o.__)("From","ultimate-addons-for-gutenberg")," :"),l.a.createElement(r.SelectControl,{className:"minDate",label:"Year",value:p,options:i,onChange:e=>t({newMinYear:e})}),l.a.createElement(r.SelectControl,{className:"minDate",label:"Month",value:h,options:d,onChange:e=>t({newMinMonth:e})}),l.a.createElement(r.SelectControl,{className:"minDate",label:"Date",value:_,options:b,onChange:e=>t({newMinDay:e})}),l.a.createElement("p",null," ",Object(o.__)("To","ultimate-addons-for-gutenberg")," :"),l.a.createElement(r.SelectControl,{className:"maxDate",label:"Year",value:E,options:i,onChange:e=>t({newMaxYear:e})}),l.a.createElement(r.SelectControl,{className:"maxDate",label:"Month",value:v,options:d,onChange:e=>t({newMaxMonth:e})}),l.a.createElement(r.SelectControl,{className:"maxDate",label:"Date",value:C,options:b,onChange:e=>t({newMaxDay:e})}),M))),l.a.createElement(s.b,s.a.advance))))};a.default=l.a.memo(p)}}]);