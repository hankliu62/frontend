"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2084],{64773:function(e,t,n){n.d(t,{Z:function(){return r}});var o=n(67294);function r(){let[,e]=o.useReducer(e=>e+1,0);return e}},88153:function(e,t,n){n.d(t,{ZP:function(){return i},c4:function(){return a}});var o=n(67294),r=n(71845);let a=["xxl","xl","lg","md","sm","xs"],c=e=>({xs:"(max-width: ".concat(e.screenXSMax,"px)"),sm:"(min-width: ".concat(e.screenSM,"px)"),md:"(min-width: ".concat(e.screenMD,"px)"),lg:"(min-width: ".concat(e.screenLG,"px)"),xl:"(min-width: ".concat(e.screenXL,"px)"),xxl:"(min-width: ".concat(e.screenXXL,"px)")}),l=e=>{let t=[].concat(a).reverse();return t.forEach((n,o)=>{let r=n.toUpperCase(),a="screen".concat(r,"Min"),c="screen".concat(r);if(!(e[a]<=e[c]))throw Error("".concat(a,"<=").concat(c," fails : !(").concat(e[a],"<=").concat(e[c],")"));if(o<t.length-1){let n="screen".concat(r,"Max");if(!(e[c]<=e[n]))throw Error("".concat(c,"<=").concat(n," fails : !(").concat(e[c],"<=").concat(e[n],")"));let a=t[o+1].toUpperCase(),l="screen".concat(a,"Min");if(!(e[n]<=e[l]))throw Error("".concat(n,"<=").concat(l," fails : !(").concat(e[n],"<=").concat(e[l],")"))}}),e};function i(){let[,e]=(0,r.ZP)(),t=c(l(e));return o.useMemo(()=>{let e=new Map,n=-1,o={};return{matchHandlers:{},dispatch:t=>(o=t,e.forEach(e=>e(o)),e.size>=1),subscribe(t){return e.size||this.register(),n+=1,e.set(n,t),t(o),n},unsubscribe(t){e.delete(t),e.size||this.unregister()},unregister(){Object.keys(t).forEach(e=>{let n=t[e],o=this.matchHandlers[n];null==o||o.mql.removeListener(null==o?void 0:o.listener)}),e.clear()},register(){Object.keys(t).forEach(e=>{let n=t[e],r=t=>{let{matches:n}=t;this.dispatch(Object.assign(Object.assign({},o),{[e]:n}))},a=window.matchMedia(n);a.addListener(r),this.matchHandlers[n]={mql:a,listener:r},r(a)})},responsiveMap:t}},[e])}},67661:function(e,t,n){n.d(t,{C:function(){return k}});var o=n(67294),r=n(93967),a=n.n(r),c=n(48555),l=n(89157),i=n(88153),s=n(17399),u=n(85980),d=n(35332),p=n(23061);let m=o.createContext({});var g=n(39302),f=n(30641),h=n(52107),v=n(69641);let b=e=>{let{antCls:t,componentCls:n,iconCls:o,avatarBg:r,avatarColor:a,containerSize:c,containerSizeLG:l,containerSizeSM:i,textFontSize:s,textFontSizeLG:u,textFontSizeSM:d,borderRadius:p,borderRadiusLG:m,borderRadiusSM:h,lineWidth:v,lineType:b}=e,y=(e,t,r)=>({width:e,height:e,borderRadius:"50%",["&".concat(n,"-square")]:{borderRadius:r},["&".concat(n,"-icon")]:{fontSize:t,["> ".concat(o)]:{margin:0}}});return{[n]:Object.assign(Object.assign(Object.assign(Object.assign({},(0,f.Wf)(e)),{position:"relative",display:"inline-flex",justifyContent:"center",alignItems:"center",overflow:"hidden",color:a,whiteSpace:"nowrap",textAlign:"center",verticalAlign:"middle",background:r,border:"".concat((0,g.bf)(v)," ").concat(b," transparent"),"&-image":{background:"transparent"},["".concat(t,"-image-img")]:{display:"block"}}),y(c,s,p)),{"&-lg":Object.assign({},y(l,u,m)),"&-sm":Object.assign({},y(i,d,h)),"> img":{display:"block",width:"100%",height:"100%",objectFit:"cover"}})}},y=e=>{let{componentCls:t,groupBorderColor:n,groupOverlapping:o,groupSpace:r}=e;return{["".concat(t,"-group")]:{display:"inline-flex",["".concat(t)]:{borderColor:n},"> *:not(:first-child)":{marginInlineStart:o}},["".concat(t,"-group-popover")]:{["".concat(t," + ").concat(t)]:{marginInlineStart:r}}}};var x=(0,h.I$)("Avatar",e=>{let{colorTextLightSolid:t,colorTextPlaceholder:n}=e,o=(0,v.TS)(e,{avatarBg:n,avatarColor:t});return[b(o),y(o)]},e=>{let{controlHeight:t,controlHeightLG:n,controlHeightSM:o,fontSize:r,fontSizeLG:a,fontSizeXL:c,fontSizeHeading3:l,marginXS:i,marginXXS:s,colorBorderBg:u}=e;return{containerSize:t,containerSizeLG:n,containerSizeSM:o,textFontSize:Math.round((a+c)/2),textFontSizeLG:l,textFontSizeSM:r,groupSpace:s,groupOverlapping:-i,groupBorderColor:u}}),O=function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&0>t.indexOf(o)&&(n[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var r=0,o=Object.getOwnPropertySymbols(e);r<o.length;r++)0>t.indexOf(o[r])&&Object.prototype.propertyIsEnumerable.call(e,o[r])&&(n[o[r]]=e[o[r]]);return n};let E=o.forwardRef((e,t)=>{let n;let[r,g]=o.useState(1),[f,h]=o.useState(!1),[v,b]=o.useState(!0),y=o.useRef(null),E=o.useRef(null),w=(0,l.sQ)(t,y),{getPrefixCls:C,avatar:S}=o.useContext(s.E_),j=o.useContext(m),k=()=>{if(!E.current||!y.current)return;let t=E.current.offsetWidth,n=y.current.offsetWidth;if(0!==t&&0!==n){let{gap:o=4}=e;2*o<n&&g(n-2*o<t?(n-2*o)/t:1)}};o.useEffect(()=>{h(!0)},[]),o.useEffect(()=>{b(!0),g(1)},[e.src]),o.useEffect(k,[e.gap]);let{prefixCls:M,shape:P,size:z,src:N,srcSet:D,icon:Z,className:T,rootClassName:L,alt:W,draggable:I,children:R,crossOrigin:_}=e,B=O(e,["prefixCls","shape","size","src","srcSet","icon","className","rootClassName","alt","draggable","children","crossOrigin"]),F=(0,d.Z)(e=>{var t,n;return null!==(n=null!==(t=null!=z?z:null==j?void 0:j.size)&&void 0!==t?t:e)&&void 0!==n?n:"default"}),V=Object.keys("object"==typeof F&&F||{}).some(e=>["xs","sm","md","lg","xl","xxl"].includes(e)),A=(0,p.Z)(V),G=o.useMemo(()=>{if("object"!=typeof F)return{};let e=F[i.c4.find(e=>A[e])];return e?{width:e,height:e,fontSize:e&&(Z||R)?e/2:18}:{}},[A,F]),U=C("avatar",M),K=(0,u.Z)(U),[H,q,X]=x(U,K),$=a()({["".concat(U,"-lg")]:"large"===F,["".concat(U,"-sm")]:"small"===F}),Q=o.isValidElement(N),Y=P||(null==j?void 0:j.shape)||"circle",J=a()(U,$,null==S?void 0:S.className,"".concat(U,"-").concat(Y),{["".concat(U,"-image")]:Q||N&&v,["".concat(U,"-icon")]:!!Z},X,K,T,L,q),ee="number"==typeof F?{width:F,height:F,fontSize:Z?F/2:18}:{};if("string"==typeof N&&v)n=o.createElement("img",{src:N,draggable:I,srcSet:D,onError:()=>{let{onError:t}=e;!1!==(null==t?void 0:t())&&b(!1)},alt:W,crossOrigin:_});else if(Q)n=N;else if(Z)n=Z;else if(f||1!==r){let e="scale(".concat(r,")");n=o.createElement(c.Z,{onResize:k},o.createElement("span",{className:"".concat(U,"-string"),ref:E,style:Object.assign({},{msTransform:e,WebkitTransform:e,transform:e})},R))}else n=o.createElement("span",{className:"".concat(U,"-string"),style:{opacity:0},ref:E},R);return delete B.onError,delete B.gap,H(o.createElement("span",Object.assign({},B,{style:Object.assign(Object.assign(Object.assign(Object.assign({},ee),G),null==S?void 0:S.style),B.style),className:J,ref:w}),n))});var w=n(22610),C=n(84476),S=n(77874);let j=e=>{let{size:t,shape:n}=o.useContext(m),r=o.useMemo(()=>({size:e.size||t,shape:e.shape||n}),[e.size,e.shape,t,n]);return o.createElement(m.Provider,{value:r},e.children)};E.Group=e=>{let{getPrefixCls:t,direction:n}=o.useContext(s.E_),{prefixCls:r,className:c,rootClassName:l,style:i,maxCount:d,maxStyle:p,size:m,shape:g,maxPopoverPlacement:f="top",maxPopoverTrigger:h="hover",children:v}=e,b=t("avatar",r),y="".concat(b,"-group"),O=(0,u.Z)(b),[k,M,P]=x(b,O),z=a()(y,{["".concat(y,"-rtl")]:"rtl"===n},P,O,c,l,M),N=(0,w.Z)(v).map((e,t)=>(0,C.Tm)(e,{key:"avatar-key-".concat(t)})),D=N.length;if(d&&d<D){let e=N.slice(0,d),t=N.slice(d,D);return e.push(o.createElement(S.Z,{key:"avatar-popover-key",content:t,trigger:h,placement:f,overlayClassName:"".concat(y,"-popover"),destroyTooltipOnHide:!0},o.createElement(E,{style:p},"+".concat(D-d)))),k(o.createElement(j,{shape:g,size:m},o.createElement("div",{className:z,style:i},e)))}return k(o.createElement(j,{shape:g,size:m},o.createElement("div",{className:z,style:i},N)))};var k=E},23061:function(e,t,n){var o=n(67294),r=n(5842),a=n(64773),c=n(88153);t.Z=function(){let e=!(arguments.length>0)||void 0===arguments[0]||arguments[0],t=(0,o.useRef)({}),n=(0,a.Z)(),l=(0,c.ZP)();return(0,r.Z)(()=>{let o=l.subscribe(o=>{t.current=o,e&&n()});return()=>l.unsubscribe(o)},[]),t.current}},77874:function(e,t,n){n.d(t,{Z:function(){return z}});var o=n(67294),r=n(93967),a=n.n(r),c=n(22720),l=n(77524);let i=e=>e?"function"==typeof e?e():e:null;var s=n(99293),u=n(84476),d=n(17399),p=n(10502),m=n(48886),g=n(30641),f=n(70201),h=n(26069),v=n(47211),b=n(70959),y=n(52107),x=n(69641);let O=e=>{let{componentCls:t,popoverColor:n,titleMinWidth:o,fontWeightStrong:r,innerPadding:a,boxShadowSecondary:c,colorTextHeading:l,borderRadiusLG:i,zIndexPopup:s,titleMarginBottom:u,colorBgElevated:d,popoverBg:p,titleBorderBottom:m,innerContentPadding:f,titlePadding:v}=e;return[{[t]:Object.assign(Object.assign({},(0,g.Wf)(e)),{position:"absolute",top:0,left:{_skip_check_:!0,value:0},zIndex:s,fontWeight:"normal",whiteSpace:"normal",textAlign:"start",cursor:"auto",userSelect:"text",transformOrigin:"var(--arrow-x, 50%) var(--arrow-y, 50%)","--antd-arrow-background-color":d,width:"max-content",maxWidth:"100vw","&-rtl":{direction:"rtl"},"&-hidden":{display:"none"},["".concat(t,"-content")]:{position:"relative"},["".concat(t,"-inner")]:{backgroundColor:p,backgroundClip:"padding-box",borderRadius:i,boxShadow:c,padding:a},["".concat(t,"-title")]:{minWidth:o,marginBottom:u,color:l,fontWeight:r,borderBottom:m,padding:v},["".concat(t,"-inner-content")]:{color:n,padding:f}})},(0,h.ZP)(e,"var(--antd-arrow-background-color)"),{["".concat(t,"-pure")]:{position:"relative",maxWidth:"none",margin:e.sizePopupArrow,display:"inline-block",["".concat(t,"-content")]:{display:"inline-block"}}}]},E=e=>{let{componentCls:t}=e;return{[t]:b.i.map(n=>{let o=e["".concat(n,"6")];return{["&".concat(t,"-").concat(n)]:{"--antd-arrow-background-color":o,["".concat(t,"-inner")]:{backgroundColor:o},["".concat(t,"-arrow")]:{background:"transparent"}}}})}};var w=(0,y.I$)("Popover",e=>{let{colorBgElevated:t,colorText:n}=e,o=(0,x.TS)(e,{popoverBg:t,popoverColor:n});return[O(o),E(o),(0,f._y)(o,"zoom-big")]},e=>{let{lineWidth:t,controlHeight:n,fontHeight:o,padding:r,wireframe:a,zIndexPopupBase:c,borderRadiusLG:l,marginXS:i,lineType:s,colorSplit:u,paddingSM:d}=e,p=n-o;return Object.assign(Object.assign(Object.assign({titleMinWidth:177,zIndexPopup:c+30},(0,v.w)(e)),(0,h.wZ)({contentRadius:l,limitVerticalRadius:!0})),{innerPadding:a?0:12,titleMarginBottom:a?0:i,titlePadding:a?"".concat(p/2,"px ").concat(r,"px ").concat(p/2-t,"px"):0,titleBorderBottom:a?"".concat(t,"px ").concat(s," ").concat(u):"none",innerContentPadding:a?"".concat(d,"px ").concat(r,"px"):0})},{resetStyle:!1,deprecatedTokens:[["width","titleMinWidth"],["minWidth","titleMinWidth"]]}),C=function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&0>t.indexOf(o)&&(n[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var r=0,o=Object.getOwnPropertySymbols(e);r<o.length;r++)0>t.indexOf(o[r])&&Object.prototype.propertyIsEnumerable.call(e,o[r])&&(n[o[r]]=e[o[r]]);return n};let S=(e,t,n)=>t||n?o.createElement(o.Fragment,null,t&&o.createElement("div",{className:"".concat(e,"-title")},i(t)),o.createElement("div",{className:"".concat(e,"-inner-content")},i(n))):null,j=e=>{let{hashId:t,prefixCls:n,className:r,style:c,placement:l="top",title:i,content:s,children:u}=e;return o.createElement("div",{className:a()(t,n,"".concat(n,"-pure"),"".concat(n,"-placement-").concat(l),r),style:c},o.createElement("div",{className:"".concat(n,"-arrow")}),o.createElement(m.G,Object.assign({},e,{className:t,prefixCls:n}),u||S(n,i,s)))};var k=function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&0>t.indexOf(o)&&(n[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var r=0,o=Object.getOwnPropertySymbols(e);r<o.length;r++)0>t.indexOf(o[r])&&Object.prototype.propertyIsEnumerable.call(e,o[r])&&(n[o[r]]=e[o[r]]);return n};let M=e=>{let{title:t,content:n,prefixCls:r}=e;return o.createElement(o.Fragment,null,t&&o.createElement("div",{className:"".concat(r,"-title")},i(t)),o.createElement("div",{className:"".concat(r,"-inner-content")},i(n)))},P=o.forwardRef((e,t)=>{var n,r;let{prefixCls:i,title:m,content:g,overlayClassName:f,placement:h="top",trigger:v="hover",children:b,mouseEnterDelay:y=.1,mouseLeaveDelay:x=.1,onOpenChange:O,overlayStyle:E={}}=e,C=k(e,["prefixCls","title","content","overlayClassName","placement","trigger","children","mouseEnterDelay","mouseLeaveDelay","onOpenChange","overlayStyle"]),{getPrefixCls:S}=o.useContext(d.E_),j=S("popover",i),[P,z,N]=w(j),D=S(),Z=a()(f,z,N),[T,L]=(0,c.Z)(!1,{value:null!==(n=e.open)&&void 0!==n?n:e.visible,defaultValue:null!==(r=e.defaultOpen)&&void 0!==r?r:e.defaultVisible}),W=(e,t)=>{L(e,!0),null==O||O(e,t)},I=e=>{e.keyCode===l.Z.ESC&&W(!1,e)};return P(o.createElement(p.Z,Object.assign({placement:h,trigger:v,mouseEnterDelay:y,mouseLeaveDelay:x,overlayStyle:E},C,{prefixCls:j,overlayClassName:Z,ref:t,open:T,onOpenChange:e=>{W(e)},overlay:m||g?o.createElement(M,{prefixCls:j,title:m,content:g}):null,transitionName:(0,s.m)(D,"zoom-big",C.transitionName),"data-popover-inject":!0}),(0,u.Tm)(b,{onKeyDown:e=>{var t,n;o.isValidElement(b)&&(null===(n=null==b?void 0:(t=b.props).onKeyDown)||void 0===n||n.call(t,e)),I(e)}})))});P._InternalPanelDoNotUseOrYouWillBeFired=e=>{let{prefixCls:t,className:n}=e,r=C(e,["prefixCls","className"]),{getPrefixCls:c}=o.useContext(d.E_),l=c("popover",t),[i,s,u]=w(l);return i(o.createElement(j,Object.assign({},r,{prefixCls:l,hashId:s,className:a()(n,u)})))};var z=P},80672:function(e,t,n){n.d(t,{Z:function(){return c}});var o=n(1413),r="".concat("accept acceptCharset accessKey action allowFullScreen allowTransparency\n    alt async autoComplete autoFocus autoPlay capture cellPadding cellSpacing challenge\n    charSet checked classID className colSpan cols content contentEditable contextMenu\n    controls coords crossOrigin data dateTime default defer dir disabled download draggable\n    encType form formAction formEncType formMethod formNoValidate formTarget frameBorder\n    headers height hidden high href hrefLang htmlFor httpEquiv icon id inputMode integrity\n    is keyParams keyType kind label lang list loop low manifest marginHeight marginWidth max maxLength media\n    mediaGroup method min minLength multiple muted name noValidate nonce open\n    optimum pattern placeholder poster preload radioGroup readOnly rel required\n    reversed role rowSpan rows sandbox scope scoped scrolling seamless selected\n    shape size sizes span spellCheck src srcDoc srcLang srcSet start step style\n    summary tabIndex target title type useMap value width wmode wrap"," ").concat("onCopy onCut onPaste onCompositionEnd onCompositionStart onCompositionUpdate onKeyDown\n    onKeyPress onKeyUp onFocus onBlur onChange onInput onSubmit onClick onContextMenu onDoubleClick\n    onDrag onDragEnd onDragEnter onDragExit onDragLeave onDragOver onDragStart onDrop onMouseDown\n    onMouseEnter onMouseLeave onMouseMove onMouseOut onMouseOver onMouseUp onSelect onTouchCancel\n    onTouchEnd onTouchMove onTouchStart onScroll onWheel onAbort onCanPlay onCanPlayThrough\n    onDurationChange onEmptied onEncrypted onEnded onError onLoadedData onLoadedMetadata\n    onLoadStart onPause onPlay onPlaying onProgress onRateChange onSeeked onSeeking onStalled onSuspend onTimeUpdate onVolumeChange onWaiting onLoad onError").split(/[\s\n]+/);function a(e,t){return 0===e.indexOf(t)}function c(e){var t,n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];t=!1===n?{aria:!0,data:!0,attr:!0}:!0===n?{aria:!0}:(0,o.Z)({},n);var c={};return Object.keys(e).forEach(function(n){(t.aria&&("role"===n||a(n,"aria-"))||t.data&&a(n,"data-")||t.attr&&r.includes(n))&&(c[n]=e[n])}),c}}}]);