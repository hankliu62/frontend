"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[278],{5670:function(e,t,n){n.d(t,{J:function(){return q}});var r,o,l,a,u=n(7294),i=n(2984),s=n(2351),c=n(3784),d=n(9946),p=n(1363),f=n(4103),v=n(4575),m=n(6567),h=n(4157),b=n(9650),E=n(5466),g=n(1074),w=n(3855),P=((r=P||{})[r.None=1]="None",r[r.Focusable=2]="Focusable",r[r.Hidden=4]="Hidden",r);let y=(0,s.yV)(function(e,t){let{features:n=1,...r}=e,o={ref:t,"aria-hidden":(2&n)==2||void 0,style:{position:"fixed",top:1,left:1,width:1,height:0,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",borderWidth:"0",...(4&n)==4&&(2&n)!=2&&{display:"none"}}};return(0,s.sY)({ourProps:o,theirProps:r,slot:{},defaultTag:"div",name:"Hidden"})});var k=n(3781),S=n(7815),M=((o=M||{})[o.Forwards=0]="Forwards",o[o.Backwards=1]="Backwards",o);function L(){let e=(0,u.useRef)(0);return(0,S.s)("keydown",t=>{"Tab"===t.key&&(e.current=t.shiftKey?1:0)},!0),e}var x=n(6723),C=n(3935);let O=(0,u.createContext)(!1);var T=n(2180),z=n(1021),I=n(7896);let R=u.Fragment,j=u.Fragment,B=(0,u.createContext)(null),A=(0,u.createContext)(null);Object.assign((0,s.yV)(function(e,t){let n,r,o=(0,u.useRef)(null),l=(0,c.T)((0,c.h)(e=>{o.current=e}),t),a=(0,g.i)(o),i=function(e){let t=(0,u.useContext)(O),n=(0,u.useContext)(B),r=(0,g.i)(e),[o,l]=(0,u.useState)(()=>{if(!t&&null!==n||I.O.isServer)return null;let e=null==r?void 0:r.getElementById("headlessui-portal-root");if(e)return e;if(null===r)return null;let o=r.createElement("div");return o.setAttribute("id","headlessui-portal-root"),r.body.appendChild(o)});return(0,u.useEffect)(()=>{null!==o&&(null!=r&&r.body.contains(o)||null==r||r.body.appendChild(o))},[o,r]),(0,u.useEffect)(()=>{t||null!==n&&l(n.current)},[n,l,t]),o}(o),[d]=(0,u.useState)(()=>{var e;return I.O.isServer?null:null!=(e=null==a?void 0:a.createElement("div"))?e:null}),p=(0,u.useContext)(A),f=(0,T.H)();return(0,x.e)(()=>{!i||!d||i.contains(d)||(d.setAttribute("data-headlessui-portal",""),i.appendChild(d))},[i,d]),(0,x.e)(()=>{if(d&&p)return p.register(d)},[p,d]),n=(0,k.z)(()=>{var e;i&&d&&(d instanceof Node&&i.contains(d)&&i.removeChild(d),i.childNodes.length<=0&&(null==(e=i.parentElement)||e.removeChild(i)))}),r=(0,u.useRef)(!1),(0,u.useEffect)(()=>(r.current=!1,()=>{r.current=!0,(0,z.Y)(()=>{r.current&&n()})}),[n]),f&&i&&d?(0,C.createPortal)((0,s.sY)({ourProps:{ref:l},theirProps:e,defaultTag:R,name:"Portal"}),d):null}),{Group:(0,s.yV)(function(e,t){let{target:n,...r}=e,o={ref:(0,c.T)(t)};return u.createElement(B.Provider,{value:n},(0,s.sY)({ourProps:o,theirProps:r,defaultTag:j,name:"Popover.Group"}))})});var F=((l=F||{})[l.Open=0]="Open",l[l.Closed=1]="Closed",l),H=((a=H||{})[a.TogglePopover=0]="TogglePopover",a[a.ClosePopover=1]="ClosePopover",a[a.SetButton=2]="SetButton",a[a.SetButtonId=3]="SetButtonId",a[a.SetPanel=4]="SetPanel",a[a.SetPanelId=5]="SetPanelId",a);let N={0:e=>{let t={...e,popoverState:(0,i.E)(e.popoverState,{0:1,1:0})};return 0===t.popoverState&&(t.__demoMode=!1),t},1:e=>1===e.popoverState?e:{...e,popoverState:1},2:(e,t)=>e.button===t.button?e:{...e,button:t.button},3:(e,t)=>e.buttonId===t.buttonId?e:{...e,buttonId:t.buttonId},4:(e,t)=>e.panel===t.panel?e:{...e,panel:t.panel},5:(e,t)=>e.panelId===t.panelId?e:{...e,panelId:t.panelId}},Z=(0,u.createContext)(null);function V(e){let t=(0,u.useContext)(Z);if(null===t){let t=Error(`<${e} /> is missing a parent <Popover /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(t,V),t}return t}Z.displayName="PopoverContext";let W=(0,u.createContext)(null);function _(e){let t=(0,u.useContext)(W);if(null===t){let t=Error(`<${e} /> is missing a parent <Popover /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(t,_),t}return t}W.displayName="PopoverAPIContext";let D=(0,u.createContext)(null);function G(){return(0,u.useContext)(D)}D.displayName="PopoverGroupContext";let Y=(0,u.createContext)(null);function $(e,t){return(0,i.E)(t.type,N,e,t)}Y.displayName="PopoverPanelContext";let K=s.AN.RenderStrategy|s.AN.Static,J=s.AN.RenderStrategy|s.AN.Static,q=Object.assign((0,s.yV)(function(e,t){var n,r,o;let l,a,d,p,f,h;let{__demoMode:E=!1,...S}=e,M=(0,u.useRef)(null),L=(0,c.T)(t,(0,c.h)(e=>{M.current=e})),x=(0,u.useRef)([]),C=(0,u.useReducer)($,{__demoMode:E,popoverState:E?0:1,buttons:x,button:null,buttonId:null,panel:null,panelId:null,beforePanelSentinel:(0,u.createRef)(),afterPanelSentinel:(0,u.createRef)()}),[{popoverState:O,button:T,buttonId:z,panel:I,panelId:R,beforePanelSentinel:j,afterPanelSentinel:B},F]=C,H=(0,g.i)(null!=(n=M.current)?n:T),N=(0,u.useMemo)(()=>{if(!T||!I)return!1;for(let e of document.querySelectorAll("body > *"))if(Number(null==e?void 0:e.contains(T))^Number(null==e?void 0:e.contains(I)))return!0;let e=(0,v.GO)(),t=e.indexOf(T),n=(t+e.length-1)%e.length,r=(t+1)%e.length,o=e[n],l=e[r];return!I.contains(o)&&!I.contains(l)},[T,I]),V=(0,w.E)(z),_=(0,w.E)(R),D=(0,u.useMemo)(()=>({buttonId:V,panelId:_,close:()=>F({type:1})}),[V,_,F]),K=G(),J=null==K?void 0:K.registerPopover,q=(0,k.z)(()=>{var e;return null!=(e=null==K?void 0:K.isFocusWithinPopoverGroup())?e:(null==H?void 0:H.activeElement)&&((null==T?void 0:T.contains(H.activeElement))||(null==I?void 0:I.contains(H.activeElement)))});(0,u.useEffect)(()=>null==J?void 0:J(D),[J,D]);let[U,Q]=(l=(0,u.useContext)(A),a=(0,u.useRef)([]),d=(0,k.z)(e=>(a.current.push(e),l&&l.register(e),()=>p(e))),p=(0,k.z)(e=>{let t=a.current.indexOf(e);-1!==t&&a.current.splice(t,1),l&&l.unregister(e)}),f=(0,u.useMemo)(()=>({register:d,unregister:p,portals:a}),[d,p,a]),[a,(0,u.useMemo)(()=>function({children:e}){return u.createElement(A.Provider,{value:f},e)},[f])]),X=function({defaultContainers:e=[],portals:t}={}){let n=(0,u.useRef)(null),r=(0,g.i)(n),o=(0,k.z)(()=>{var o;let l=[];for(let t of e)null!==t&&(t instanceof HTMLElement?l.push(t):"current"in t&&t.current instanceof HTMLElement&&l.push(t.current));if(null!=t&&t.current)for(let e of t.current)l.push(e);for(let e of null!=(o=null==r?void 0:r.querySelectorAll("html > *, body > *"))?o:[])e!==document.body&&e!==document.head&&e instanceof HTMLElement&&"headlessui-portal-root"!==e.id&&(e.contains(n.current)||l.some(t=>e.contains(t))||l.push(e));return l});return{resolveContainers:o,contains:(0,k.z)(e=>o().some(t=>t.contains(e))),mainTreeNodeRef:n,MainTreeNode:(0,u.useMemo)(()=>function(){return u.createElement(y,{features:P.Hidden,ref:n})},[n])}}({portals:U,defaultContainers:[T,I]});r=null==H?void 0:H.defaultView,o="focus",h=(0,w.E)(e=>{var t,n,r,o;e.target!==window&&e.target instanceof HTMLElement&&0===O&&(q()||T&&I&&(X.contains(e.target)||null!=(n=null==(t=j.current)?void 0:t.contains)&&n.call(t,e.target)||null!=(o=null==(r=B.current)?void 0:r.contains)&&o.call(r,e.target)||F({type:1})))}),(0,u.useEffect)(()=>{function e(e){h.current(e)}return(r=null!=r?r:window).addEventListener(o,e,!0),()=>r.removeEventListener(o,e,!0)},[r,o,!0]),(0,b.O)(X.resolveContainers,(e,t)=>{F({type:1}),(0,v.sP)(t,v.tJ.Loose)||(e.preventDefault(),null==T||T.focus())},0===O);let ee=(0,k.z)(e=>{F({type:1});let t=e?e instanceof HTMLElement?e:"current"in e&&e.current instanceof HTMLElement?e.current:T:T;null==t||t.focus()}),et=(0,u.useMemo)(()=>({close:ee,isPortalled:N}),[ee,N]),en=(0,u.useMemo)(()=>({open:0===O,close:ee}),[O,ee]);return u.createElement(Y.Provider,{value:null},u.createElement(Z.Provider,{value:C},u.createElement(W.Provider,{value:et},u.createElement(m.up,{value:(0,i.E)(O,{0:m.ZM.Open,1:m.ZM.Closed})},u.createElement(Q,null,(0,s.sY)({ourProps:{ref:L},theirProps:S,slot:en,defaultTag:"div",name:"Popover"}),u.createElement(X.MainTreeNode,null))))))}),{Button:(0,s.yV)(function(e,t){let n=(0,d.M)(),{id:r=`headlessui-popover-button-${n}`,...o}=e,[l,a]=V("Popover.Button"),{isPortalled:m}=_("Popover.Button"),b=(0,u.useRef)(null),E=`headlessui-focus-sentinel-${(0,d.M)()}`,w=G(),S=null==w?void 0:w.closeOthers,x=null!==(0,u.useContext)(Y);(0,u.useEffect)(()=>{if(!x)return a({type:3,buttonId:r}),()=>{a({type:3,buttonId:null})}},[x,r,a]);let[C]=(0,u.useState)(()=>Symbol()),O=(0,c.T)(b,t,x?null:e=>{if(e)l.buttons.current.push(C);else{let e=l.buttons.current.indexOf(C);-1!==e&&l.buttons.current.splice(e,1)}l.buttons.current.length>1&&console.warn("You are already using a <Popover.Button /> but only 1 <Popover.Button /> is supported."),e&&a({type:2,button:e})}),T=(0,c.T)(b,t),z=(0,g.i)(b),I=(0,k.z)(e=>{var t,n,r;if(x){if(1===l.popoverState)return;switch(e.key){case p.R.Space:case p.R.Enter:e.preventDefault(),null==(n=(t=e.target).click)||n.call(t),a({type:1}),null==(r=l.button)||r.focus()}}else switch(e.key){case p.R.Space:case p.R.Enter:e.preventDefault(),e.stopPropagation(),1===l.popoverState&&(null==S||S(l.buttonId)),a({type:0});break;case p.R.Escape:if(0!==l.popoverState)return null==S?void 0:S(l.buttonId);if(!b.current||null!=z&&z.activeElement&&!b.current.contains(z.activeElement))return;e.preventDefault(),e.stopPropagation(),a({type:1})}}),R=(0,k.z)(e=>{x||e.key===p.R.Space&&e.preventDefault()}),j=(0,k.z)(t=>{var n,r;(0,f.P)(t.currentTarget)||e.disabled||(x?(a({type:1}),null==(n=l.button)||n.focus()):(t.preventDefault(),t.stopPropagation(),1===l.popoverState&&(null==S||S(l.buttonId)),a({type:0}),null==(r=l.button)||r.focus()))}),B=(0,k.z)(e=>{e.preventDefault(),e.stopPropagation()}),A=0===l.popoverState,F=(0,u.useMemo)(()=>({open:A}),[A]),H=(0,h.f)(e,b),N=x?{ref:T,type:H,onKeyDown:I,onClick:j}:{ref:O,id:l.buttonId,type:H,"aria-expanded":e.disabled?void 0:0===l.popoverState,"aria-controls":l.panel?l.panelId:void 0,onKeyDown:I,onKeyUp:R,onClick:j,onMouseDown:B},Z=L(),W=(0,k.z)(()=>{let e=l.panel;e&&(0,i.E)(Z.current,{[M.Forwards]:()=>(0,v.jA)(e,v.TO.First),[M.Backwards]:()=>(0,v.jA)(e,v.TO.Last)})===v.fE.Error&&(0,v.jA)((0,v.GO)().filter(e=>"true"!==e.dataset.headlessuiFocusGuard),(0,i.E)(Z.current,{[M.Forwards]:v.TO.Next,[M.Backwards]:v.TO.Previous}),{relativeTo:l.button})});return u.createElement(u.Fragment,null,(0,s.sY)({ourProps:N,theirProps:o,slot:F,defaultTag:"button",name:"Popover.Button"}),A&&!x&&m&&u.createElement(y,{id:E,features:P.Focusable,"data-headlessui-focus-guard":!0,as:"button",type:"button",onFocus:W}))}),Overlay:(0,s.yV)(function(e,t){let n=(0,d.M)(),{id:r=`headlessui-popover-overlay-${n}`,...o}=e,[{popoverState:l},a]=V("Popover.Overlay"),i=(0,c.T)(t),p=(0,m.oJ)(),v=null!==p?(p&m.ZM.Open)===m.ZM.Open:0===l,h=(0,k.z)(e=>{if((0,f.P)(e.currentTarget))return e.preventDefault();a({type:1})}),b=(0,u.useMemo)(()=>({open:0===l}),[l]);return(0,s.sY)({ourProps:{ref:i,id:r,"aria-hidden":!0,onClick:h},theirProps:o,slot:b,defaultTag:"div",features:K,visible:v,name:"Popover.Overlay"})}),Panel:(0,s.yV)(function(e,t){let n=(0,d.M)(),{id:r=`headlessui-popover-panel-${n}`,focus:o=!1,...l}=e,[a,f]=V("Popover.Panel"),{close:h,isPortalled:b}=_("Popover.Panel"),E=`headlessui-focus-sentinel-before-${(0,d.M)()}`,w=`headlessui-focus-sentinel-after-${(0,d.M)()}`,S=(0,u.useRef)(null),C=(0,c.T)(S,t,e=>{f({type:4,panel:e})}),O=(0,g.i)(S);(0,x.e)(()=>(f({type:5,panelId:r}),()=>{f({type:5,panelId:null})}),[r,f]);let T=(0,m.oJ)(),z=null!==T?(T&m.ZM.Open)===m.ZM.Open:0===a.popoverState,I=(0,k.z)(e=>{var t;if(e.key===p.R.Escape){if(0!==a.popoverState||!S.current||null!=O&&O.activeElement&&!S.current.contains(O.activeElement))return;e.preventDefault(),e.stopPropagation(),f({type:1}),null==(t=a.button)||t.focus()}});(0,u.useEffect)(()=>{var t;e.static||1===a.popoverState&&(null==(t=e.unmount)||t)&&f({type:4,panel:null})},[a.popoverState,e.unmount,e.static,f]),(0,u.useEffect)(()=>{if(a.__demoMode||!o||0!==a.popoverState||!S.current)return;let e=null==O?void 0:O.activeElement;S.current.contains(e)||(0,v.jA)(S.current,v.TO.First)},[a.__demoMode,o,S,a.popoverState]);let R=(0,u.useMemo)(()=>({open:0===a.popoverState,close:h}),[a,h]),j={ref:C,id:r,onKeyDown:I,onBlur:o&&0===a.popoverState?e=>{var t,n,r,o,l;let u=e.relatedTarget;u&&S.current&&(null!=(t=S.current)&&t.contains(u)||(f({type:1}),(null!=(r=null==(n=a.beforePanelSentinel.current)?void 0:n.contains)&&r.call(n,u)||null!=(l=null==(o=a.afterPanelSentinel.current)?void 0:o.contains)&&l.call(o,u))&&u.focus({preventScroll:!0})))}:void 0,tabIndex:-1},B=L(),A=(0,k.z)(()=>{let e=S.current;e&&(0,i.E)(B.current,{[M.Forwards]:()=>{var t;(0,v.jA)(e,v.TO.First)===v.fE.Error&&(null==(t=a.afterPanelSentinel.current)||t.focus())},[M.Backwards]:()=>{var e;null==(e=a.button)||e.focus({preventScroll:!0})}})}),F=(0,k.z)(()=>{let e=S.current;e&&(0,i.E)(B.current,{[M.Forwards]:()=>{var e;if(!a.button)return;let t=(0,v.GO)(),n=t.indexOf(a.button),r=t.slice(0,n+1),o=[...t.slice(n+1),...r];for(let t of o.slice())if("true"===t.dataset.headlessuiFocusGuard||null!=(e=a.panel)&&e.contains(t)){let e=o.indexOf(t);-1!==e&&o.splice(e,1)}(0,v.jA)(o,v.TO.First,{sorted:!1})},[M.Backwards]:()=>{var t;(0,v.jA)(e,v.TO.Previous)===v.fE.Error&&(null==(t=a.button)||t.focus())}})});return u.createElement(Y.Provider,{value:r},z&&b&&u.createElement(y,{id:E,ref:a.beforePanelSentinel,features:P.Focusable,"data-headlessui-focus-guard":!0,as:"button",type:"button",onFocus:A}),(0,s.sY)({ourProps:j,theirProps:l,slot:R,defaultTag:"div",features:J,visible:z,name:"Popover.Panel"}),z&&b&&u.createElement(y,{id:w,ref:a.afterPanelSentinel,features:P.Focusable,"data-headlessui-focus-guard":!0,as:"button",type:"button",onFocus:F}))}),Group:(0,s.yV)(function(e,t){let n=(0,u.useRef)(null),r=(0,c.T)(n,t),[o,l]=(0,u.useState)([]),a=(0,k.z)(e=>{l(t=>{let n=t.indexOf(e);if(-1!==n){let e=t.slice();return e.splice(n,1),e}return t})}),i=(0,k.z)(e=>(l(t=>[...t,e]),()=>a(e))),d=(0,k.z)(()=>{var e;let t=(0,E.r)(n);if(!t)return!1;let r=t.activeElement;return!!(null!=(e=n.current)&&e.contains(r))||o.some(e=>{var n,o;return(null==(n=t.getElementById(e.buttonId.current))?void 0:n.contains(r))||(null==(o=t.getElementById(e.panelId.current))?void 0:o.contains(r))})}),p=(0,k.z)(e=>{for(let t of o)t.buttonId.current!==e&&t.close()}),f=(0,u.useMemo)(()=>({registerPopover:i,unregisterPopover:a,isFocusWithinPopoverGroup:d,closeOthers:p}),[i,a,d,p]),v=(0,u.useMemo)(()=>({}),[]);return u.createElement(D.Provider,{value:f},(0,s.sY)({ourProps:{ref:r},theirProps:e,slot:v,defaultTag:"div",name:"Popover.Group"}))})})},5231:function(e,t,n){var r=n(7294);let o=r.forwardRef(function({title:e,titleId:t,...n},o){return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true",ref:o,"aria-labelledby":t},n),e?r.createElement("title",{id:t},e):null,r.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3"}))});t.Z=o},682:function(e,t,n){var r=n(7294);let o=r.forwardRef(function({title:e,titleId:t,...n},o){return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true",ref:o,"aria-labelledby":t},n),e?r.createElement("title",{id:t},e):null,r.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"}))});t.Z=o},5783:function(e,t,n){var r=n(7294);let o=r.forwardRef(function({title:e,titleId:t,...n},o){return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true",ref:o,"aria-labelledby":t},n),e?r.createElement("title",{id:t},e):null,r.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 01.778-.332 48.294 48.294 0 005.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"}))});t.Z=o},2418:function(e,t,n){var r=n(7294);let o=r.forwardRef(function({title:e,titleId:t,...n},o){return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true",ref:o,"aria-labelledby":t},n),e?r.createElement("title",{id:t},e):null,r.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"}))});t.Z=o},7621:function(e,t,n){var r=n(7294);let o=r.forwardRef(function({title:e,titleId:t,...n},o){return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true",ref:o,"aria-labelledby":t},n),e?r.createElement("title",{id:t},e):null,r.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25M9 16.5v.75m3-3v3M15 12v5.25m-4.5-15H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"}))});t.Z=o},63:function(e,t,n){var r=n(7294);let o=r.forwardRef(function({title:e,titleId:t,...n},o){return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true",ref:o,"aria-labelledby":t},n),e?r.createElement("title",{id:t},e):null,r.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"}))});t.Z=o},8832:function(e,t,n){var r=n(7294);let o=r.forwardRef(function({title:e,titleId:t,...n},o){return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true",ref:o,"aria-labelledby":t},n),e?r.createElement("title",{id:t},e):null,r.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M2.25 13.5h3.86a2.25 2.25 0 012.012 1.244l.256.512a2.25 2.25 0 002.013 1.244h3.218a2.25 2.25 0 002.013-1.244l.256-.512a2.25 2.25 0 012.013-1.244h3.859m-19.5.338V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 00-2.15-1.588H6.911a2.25 2.25 0 00-2.15 1.588L2.35 13.177a2.25 2.25 0 00-.1.661z"}))});t.Z=o},311:function(e,t,n){var r=n(7294);let o=r.forwardRef(function({title:e,titleId:t,...n},o){return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true",ref:o,"aria-labelledby":t},n),e?r.createElement("title",{id:t},e):null,r.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"}))});t.Z=o},6799:function(e,t,n){var r=n(7294);let o=r.forwardRef(function({title:e,titleId:t,...n},o){return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true",ref:o,"aria-labelledby":t},n),e?r.createElement("title",{id:t},e):null,r.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z"}))});t.Z=o},5083:function(e,t,n){var r=n(7294);let o=r.forwardRef(function({title:e,titleId:t,...n},o){return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true",ref:o,"aria-labelledby":t},n),e?r.createElement("title",{id:t},e):null,r.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z"}))});t.Z=o},6249:function(e,t,n){var r=n(7294);let o=r.forwardRef(function({title:e,titleId:t,...n},o){return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true",ref:o,"aria-labelledby":t},n),e?r.createElement("title",{id:t},e):null,r.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"}))});t.Z=o},7543:function(e,t,n){var r=n(7294);let o=r.forwardRef(function({title:e,titleId:t,...n},o){return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true",ref:o,"aria-labelledby":t},n),e?r.createElement("title",{id:t},e):null,r.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"}))});t.Z=o}}]);