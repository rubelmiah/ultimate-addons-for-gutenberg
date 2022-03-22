(window.webpackJsonp_ultimate_addons_for_gutenberg=window.webpackJsonp_ultimate_addons_for_gutenberg||[]).push([[91],{244:function(e,t,i){"use strict";var n=i(15),a=i.n(n)()((function(e){return e[1]}));a.push([e.i,'/**\n * #.# Editor Styles\n *\n * CSS for just Backend enqueued after style.scss\n * which makes it higher in priority.\n */\n.uagb-section__wrap::before {\n  position: absolute;\n  top: -1px;\n  right: -1px;\n  bottom: -1px;\n  left: -1px;\n  z-index: 0;\n  border: 1px dashed #03ddff;\n  content: ""; }\n\n.uagb-section__edit-active.uagb-section__wrap::before {\n  border-color: #035cff; }\n\n.editor-bg-image-control .components-button,\n.editor-bg-video-control .components-button {\n  vertical-align: middle; }\n\n.editor-bg-image-control .components-button:last-child,\n.editor-bg-video-control .components-button:last-child {\n  margin-left: 10px; }\n\n.editor-block-list__layout .editor-block-list__block[data-align="full"][data-type="uagb/section"] {\n  margin-right: 0;\n  margin-left: 0; }\n',""]),t.a=a},483:function(e,t,i){"use strict";i.r(t);var n,a=i(3),o=i.n(a),c=i(0),u=i.n(c),l=i(4),M=i(14),s=i.n(M),r=i(244),g=0,I={injectType:"lazySingletonStyleTag",attributes:{id:"uagb-editor-styles"},insert:"head",singleton:!0},d={};d.locals=r.a.locals||{},d.use=function(){return g++||(n=s()(r.a,I)),d},d.unuse=function(){g>0&&!--g&&(n(),n=null)};var b=d,y=i(10);const L=e=>{Object(c.useLayoutEffect)(()=>(b.use(),()=>{b.unuse()}),[]),e=e.parentProps;const t=Object(y.a)(),{attributes:i,isSelected:n,className:a}=e,{isPreview:M,align:s,contentWidth:r,tag:g,backgroundType:I,backgroundVideo:d}=i,L=""+g,z=n?"active":"not-active";let j="";return"full_width"===r&&("wide"!==s&&"full"!==s||(j="align"+s)),u.a.createElement(u.a.Fragment,null,M?u.a.createElement("img",{width:"100%",src:"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxNi4wLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DQo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB3aWR0aD0iMzUwcHgiIGhlaWdodD0iMzUwcHgiIHZpZXdCb3g9IjAgMCAzNTAgMzUwIiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAzNTAgMzUwIiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxnPg0KCTxwYXRoIGZpbGw9IiNGMUYxRjIiIGQ9Ik0zMTMuNzU1LDIwNC41MzhjMCw0LjI5My0zLjQ4LDcuNzc0LTcuNzczLDcuNzc0SDQ0LjAxOWMtNC4yOTMsMC03Ljc3My0zLjQ4MS03Ljc3My03Ljc3NHYtNTkuMDc3DQoJCWMwLTQuMjkzLDMuNDgtNy43NzMsNy43NzMtNy43NzNoMjYxLjk2M2M0LjI5MywwLDcuNzczLDMuNDgsNy43NzMsNy43NzNWMjA0LjUzOHoiLz4NCgk8cGF0aCBmaWxsPSIjREJEQ0RFIiBkPSJNMjk3LjgyNywxOTUuODA4YzAsMS4yODctMS4wNDQsMi4zMzItMi4zMzIsMi4zMzJoLTE1LjE1OGMtMS4yODYsMC0yLjMzMi0xLjA0NS0yLjMzMi0yLjMzMnYtMTUuMTU4DQoJCWMwLTEuMjg5LDEuMDQ2LTIuMzMyLDIuMzMyLTIuMzMyaDE1LjE1OGMxLjI4OCwwLDIuMzMyLDEuMDQzLDIuMzMyLDIuMzMyVjE5NS44MDh6Ii8+DQoJPGc+DQoJCQ0KCQkJPGxpbmUgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjQkJCREMwIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgeDE9IjI4Ny45MTYiIHkxPSIxODQuMjEyIiB4Mj0iMjg3LjkxNiIgeTI9IjE5Mi4yNDQiLz4NCgkJDQoJCQk8bGluZSBmaWxsPSJub25lIiBzdHJva2U9IiNCQkJEQzAiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiB4MT0iMjkxLjkzMyIgeTE9IjE4OC4yMjkiIHgyPSIyODMuOTAxIiB5Mj0iMTg4LjIyOSIvPg0KCTwvZz4NCjwvZz4NCjwvc3ZnPg0K",alt:""}):u.a.createElement(L,{className:o()(a,"uagb-section__wrap","uagb-section__background-"+I,"uagb-section__edit-"+z,j,"uagb-editor-preview-mode-"+t.toLowerCase(),"uagb-block-"+e.clientId.substr(0,8))},u.a.createElement("div",{className:"uagb-section__overlay"}),"video"===I&&u.a.createElement("div",{className:"uagb-section__video-wrap"},d&&u.a.createElement("video",{autoPlay:!0,loop:!0,muted:!0,playsinline:!0},u.a.createElement("source",{src:d.url,type:"video/mp4"}))),u.a.createElement("div",{className:"uagb-section__inner-wrap"},u.a.createElement(l.InnerBlocks,{templateLock:!1}))))};t.default=u.a.memo(L)}}]);