(window.webpackJsonp_ultimate_addons_for_gutenberg=window.webpackJsonp_ultimate_addons_for_gutenberg||[]).push([[37],{456:function(e,a,t){"use strict";t.r(a);var n=t(3),l=t.n(n),d=t(0),r=t.n(d);const s=e=>{e=e.parentProps;const{attributes:a}=e,{block_id:t,hidden_field_name:n,hidden_field_value:d}=a,s=n.replace(/\s+/g,"-").toLowerCase();return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:l()("uagb-forms-hidden-wrap","uagb-block-"+t)},e.isSelected&&r.a.createElement("input",{type:"text",className:"uagb-forms-hidden-input",onChange:a=>{const{setAttributes:t}=e;t({hidden_field_name:a.target.value})},value:n}),!e.isSelected&&r.a.createElement(r.a.Fragment,null,r.a.createElement("label",{className:"uagb-forms-hidden-label uagb-form-hidden-"+s,htmlFor:s},n),r.a.createElement("input",{id:s,type:"hidden",className:"uagb-forms-hidden-input",value:d}))))};a.default=r.a.memo(s)}}]);