(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5134],{64392:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/questions/[id]",function(){return t(83410)}])},80672:function(e,n,t){"use strict";t.d(n,{Z:function(){return a}});var o=t(1413),r="".concat("accept acceptCharset accessKey action allowFullScreen allowTransparency\n    alt async autoComplete autoFocus autoPlay capture cellPadding cellSpacing challenge\n    charSet checked classID className colSpan cols content contentEditable contextMenu\n    controls coords crossOrigin data dateTime default defer dir disabled download draggable\n    encType form formAction formEncType formMethod formNoValidate formTarget frameBorder\n    headers height hidden high href hrefLang htmlFor httpEquiv icon id inputMode integrity\n    is keyParams keyType kind label lang list loop low manifest marginHeight marginWidth max maxLength media\n    mediaGroup method min minLength multiple muted name noValidate nonce open\n    optimum pattern placeholder poster preload radioGroup readOnly rel required\n    reversed role rowSpan rows sandbox scope scoped scrolling seamless selected\n    shape size sizes span spellCheck src srcDoc srcLang srcSet start step style\n    summary tabIndex target title type useMap value width wmode wrap"," ").concat("onCopy onCut onPaste onCompositionEnd onCompositionStart onCompositionUpdate onKeyDown\n    onKeyPress onKeyUp onFocus onBlur onChange onInput onSubmit onClick onContextMenu onDoubleClick\n    onDrag onDragEnd onDragEnter onDragExit onDragLeave onDragOver onDragStart onDrop onMouseDown\n    onMouseEnter onMouseLeave onMouseMove onMouseOut onMouseOver onMouseUp onSelect onTouchCancel\n    onTouchEnd onTouchMove onTouchStart onScroll onWheel onAbort onCanPlay onCanPlayThrough\n    onDurationChange onEmptied onEncrypted onEnded onError onLoadedData onLoadedMetadata\n    onLoadStart onPause onPlay onPlaying onProgress onRateChange onSeeked onSeeking onStalled onSuspend onTimeUpdate onVolumeChange onWaiting onLoad onError").split(/[\s\n]+/);function i(e,n){return 0===e.indexOf(n)}function a(e){var n,t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];n=!1===t?{aria:!0,data:!0,attr:!0}:!0===t?{aria:!0}:(0,o.Z)({},t);var a={};return Object.keys(e).forEach(function(t){(n.aria&&("role"===t||i(t,"aria-"))||n.data&&i(t,"data-")||n.attr&&r.includes(t))&&(a[t]=e[t])}),a}},41548:function(e,n,t){"use strict";t.d(n,{Z:function(){return c}});var o=t(85893),r=t(90700),i=t(5152),a=t.n(i),l=t(67294);let s=a()(()=>t.e(7743).then(t.bind(t,37743)),{loadableGenerated:{webpack:()=>[null]},ssr:!1});function c(e){let{onLoad:n,showLoading:t,...i}=e,a=(0,l.useRef)(!1),c=(0,l.useRef)(),[u,d]=(0,l.useState)(!0);return(0,l.useLayoutEffect)(()=>{!function e(){var t;let o=null===(t=c.current)||void 0===t?void 0:t.querySelectorAll(".wmde-markdown");o&&o.length>0?(!a.current&&(d(!1),n&&n()),a.current=!0):setTimeout(e,1e3)}()},[n]),(0,o.jsxs)("div",{ref:c,children:[(0,o.jsx)(s,{...i}),t&&u&&(0,o.jsx)(r.Z,{active:!0})]})}},84285:function(e,n,t){"use strict";t.d(n,{CH:function(){return c},CI:function(){return a},JY:function(){return r},h2:function(){return l},ou:function(){return u},oz:function(){return i},x_:function(){return s}});var o=t(34155);let r=["g","h","p","_","Y","x","6","S","E","W","5","y","c","9","f","A","N","a","A","G","7","t","o","d","Q","L","Y","5","W","S","V","X","p","I","4","J","0","v","k","5"];[...o.env.NEXT_GITHUB_BACKEND_TOKEN||""];let i="https://api.github.com",a="https://github.com",l="hankliu62",s="hankliu62.github.com",c="interview",u="2022-11-28"},6893:function(e,n,t){"use strict";t.d(n,{Z:function(){return r}});var o=t(67294);function r(e){var n,t;let[r,i]=(0,o.useState)((null===(n=e[0])||void 0===n?void 0:n.id)||(null===(t=e[0])||void 0===t?void 0:t.title)),a=(0,o.useCallback)(e=>e.map(e=>{let{id:n}=e,t=document.getElementById(n);if(!t)return;let o=Number.parseFloat(window.getComputedStyle(t).scrollMarginTop);return{id:n,top:window.scrollY+t.getBoundingClientRect().top-o}}),[]);return(0,o.useEffect)(()=>{if(0===e.length)return;let n=a(e);function t(){if(n.filter(Boolean).length!==e.length&&(n=a(e)),0===n.filter(Boolean).length)return;let t=window.scrollY,o=n[0].id;for(let e of n)if(e&&t>=e.top)o=e.id;else break;i(o)}return window.addEventListener("scroll",t,{passive:!0}),t(),()=>{window.removeEventListener("scroll",t,{passive:!0})}},[a,e]),r}},83410:function(e,n,t){"use strict";t.r(n),t.d(n,{__N_SSG:function(){return k},default:function(){return E}});var o=t(85893),r=t(12983),i=t(31385),a=t(35054),l=t(79579),s=t(10502),c=t(37202),u=t(6947),d=t(34953),h=t(93967),p=t.n(h),f=t(27484),m=t.n(f),v=t(12918),g=t.n(v),x=t(41664),b=t.n(x),y=t(11163),w=t(67294),j=t(41548),C=t(84285),T=t(6893),k=!0;function E(e){var n,t,h,f;let{issue:v,menus:x}=e,k=(0,y.useRouter)(),[E,N]=(0,w.useState)(!0),L=(0,w.useMemo)(()=>{let e=Number.MAX_VALUE,n=[];for(let t of x){let o=t.replace(/^(#+)\s(.*)/,"$1").length;e=Math.min(o,e);let r=t.replace(/^#+\s/,""),i=r.toLowerCase().replace(/\s/g,"-").replace(/[\u3002\uFF1F\uFF0C\uFF1A\u201C-\u201D\uFF08-\uFF09\u3001\uFF1B\uFF1A]/g,"");n.push({id:i,text:t,href:"#".concat(i),title:r,prefixLength:o})}return n.map(n=>({...n,minPrefixLength:e,paddingLeft:(n.prefixLength-e)*16+16}))},[x]),S=(0,T.Z)(L);function D(e){return e.id===S||!!e.children&&e.children.findIndex(e=>D(e))>-1}return k.isFallback||(null==v?void 0:v.number)?(0,o.jsxs)("div",{className:"flex space-x-6 bg-white p-6",children:[(0,o.jsx)("div",{className:"flex-1",children:(0,o.jsx)(i.Z,{className:"article-card min-h-full !border-[#d9d9d9]",children:(0,o.jsxs)("article",{children:[(0,o.jsx)("header",{children:(0,o.jsx)("h1",{className:"mb-5 text-4xl font-bold",children:v.title})}),(0,o.jsxs)("section",{className:"mb-12 flex items-center space-x-8",children:[(0,o.jsxs)(a.Z,{onClick:e=>{(null==e?void 0:e.stopPropagation)&&e.stopPropagation(),(null==e?void 0:e.preventDefault)&&e.preventDefault(),window.open("".concat(C.CI,"/").concat(C.h2,"/").concat(C.CH,"/issues/").concat(null==v?void 0:v.number),"_blank")},className:"group cursor-pointer",children:[(0,o.jsx)(r.Z,{className:"group-hover:text-[#1171ee]"}),(0,o.jsx)("span",{className:"group-hover:text-[#1171ee]",children:"#".concat(null==v?void 0:v.number)})]},"list-vertical-id"),(0,o.jsx)(a.Z,{onClick:e=>{var n;(null==e?void 0:e.stopPropagation)&&e.stopPropagation(),(null==e?void 0:e.preventDefault)&&e.preventDefault(),window.open("".concat(C.CI,"/").concat(null==v?void 0:null===(n=v.user)||void 0===n?void 0:n.login),"_blank")},className:"group cursor-pointer",children:(0,o.jsx)("span",{className:"group-hover:text-sky-500",children:null==v?void 0:null===(n=v.user)||void 0===n?void 0:n.login})},"list-vertical-user"),(0,o.jsx)(a.Z,{children:(0,o.jsx)("span",{className:"text-[#8a919f]",children:(null==v?void 0:v.created_at)&&m()(null==v?void 0:v.created_at).format("YYYY-MM-DD HH:mm:ss")})}),(0,o.jsx)(a.Z,{children:(0,o.jsx)("div",{className:"flex items-center justify-start",children:((null==v?void 0:v.labels)||[]).map(e=>(0,o.jsx)(l.Z,{color:"#".concat(e.color),children:e.name},e.id))})}),(0,o.jsx)(a.Z,{children:(0,o.jsx)(s.Z,{title:"难度: ".concat((null===(t=v.milestone)||void 0===t?void 0:t.number)?(null===(h=v.milestone)||void 0===h?void 0:h.number)+"颗\uD83C\uDF1F":"未设置"),children:(0,o.jsx)(c.Z,{defaultValue:(null===(f=v.milestone)||void 0===f?void 0:f.number)||0,disabled:!0})})},"list-difficulty")]}),(0,o.jsx)("section",{children:(0,o.jsx)(j.Z,{source:v.body||"",showLoading:!0})})]})})}),(0,o.jsx)("div",{className:"w-64 bg-white",children:(0,o.jsx)(u.Z,{offsetTop:24,children:(0,o.jsx)(d.Z,{className:"question-menus-collapse",defaultActiveKey:["menu"],onChange:e=>{N(e.includes("labels"))},expandIconPosition:"end",items:[{key:"menu",label:(0,o.jsx)("span",{className:"text-base",children:"目录"}),children:(0,o.jsx)("ul",{className:"max-h-[620px] list-none space-y-3 overflow-y-auto text-slate-500 dark:text-slate-400",children:L.map(e=>(0,o.jsx)("li",{id:e.text,className:p()("border-0 !border-l-2 border-solid border-transparent pr-[16px] text-base",{"!border-sky-500":D(e)}),children:(0,o.jsx)(b(),{href:e.href,className:p()("w-full overflow-hidden !text-[#515767]",D(e)?"!text-sky-500":"!hover:text-slate-600 !dark:hover:text-slate-300"),children:(0,o.jsx)("div",{className:"truncate",style:{paddingLeft:"".concat(e.paddingLeft,"px")},children:e.title})})},e.title))}),extra:(0,o.jsx)("div",{className:"-mr-2",children:E?"收起":"展开"})}]})})})]}):(0,o.jsx)(g(),{statusCode:404})}},12918:function(e,n,t){e.exports=t(2111)},34155:function(e){var n,t,o,r=e.exports={};function i(){throw Error("setTimeout has not been defined")}function a(){throw Error("clearTimeout has not been defined")}function l(e){if(n===setTimeout)return setTimeout(e,0);if((n===i||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:i}catch(e){n=i}try{t="function"==typeof clearTimeout?clearTimeout:a}catch(e){t=a}}();var s=[],c=!1,u=-1;function d(){c&&o&&(c=!1,o.length?s=o.concat(s):u=-1,s.length&&h())}function h(){if(!c){var e=l(d);c=!0;for(var n=s.length;n;){for(o=s,s=[];++u<n;)o&&o[u].run();u=-1,n=s.length}o=null,c=!1,function(e){if(t===clearTimeout)return clearTimeout(e);if((t===a||!t)&&clearTimeout)return t=clearTimeout,clearTimeout(e);try{t(e)}catch(n){try{return t.call(null,e)}catch(n){return t.call(this,e)}}}(e)}}function p(e,n){this.fun=e,this.array=n}function f(){}r.nextTick=function(e){var n=Array(arguments.length-1);if(arguments.length>1)for(var t=1;t<arguments.length;t++)n[t-1]=arguments[t];s.push(new p(e,n)),1!==s.length||c||l(h)},p.prototype.run=function(){this.fun.apply(null,this.array)},r.title="browser",r.browser=!0,r.env={},r.argv=[],r.version="",r.versions={},r.on=f,r.addListener=f,r.once=f,r.off=f,r.removeListener=f,r.removeAllListeners=f,r.emit=f,r.prependListener=f,r.prependOnceListener=f,r.listeners=function(e){return[]},r.binding=function(e){throw Error("process.binding is not supported")},r.cwd=function(){return"/"},r.chdir=function(e){throw Error("process.chdir is not supported")},r.umask=function(){return 0}}},function(e){e.O(0,[5367,4853,3239,1664,418,7202,2888,9774,179],function(){return e(e.s=64392)}),_N_E=e.O()}]);