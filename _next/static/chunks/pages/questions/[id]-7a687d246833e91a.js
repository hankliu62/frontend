(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[134],{4392:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/questions/[id]",function(){return n(2257)}])},6689:function(e,t,n){"use strict";n.d(t,{Z:function(){return u}});var l=n(5893),r=n(1591),i=n(5152),s=n.n(i),o=n(7294);let a=s()(()=>n.e(467).then(n.bind(n,8467)),{loadableGenerated:{webpack:()=>[null]},ssr:!1});function u(e){let{onLoad:t,showLoading:n,...i}=e,s=(0,o.useRef)(!1),u=(0,o.useRef)(),[c,d]=(0,o.useState)(!0);return(0,o.useLayoutEffect)(()=>{!function e(){var n;let l=null===(n=u.current)||void 0===n?void 0:n.querySelectorAll(".wmde-markdown");l&&l.length>0?(!s.current&&(d(!1),t&&t()),s.current=!0):setTimeout(e,1e3)}()},[t]),(0,l.jsxs)("div",{ref:u,children:[(0,l.jsx)(a,{...i}),n&&c&&(0,l.jsx)(r.Z,{active:!0})]})}},7172:function(e,t,n){"use strict";n.d(t,{CH:function(){return u},CI:function(){return s},JY:function(){return r},h2:function(){return o},ou:function(){return c},oz:function(){return i},x_:function(){return a}});var l=n(4155);let r=["g","h","p","_","Y","x","6","S","E","W","5","y","c","9","f","A","N","a","A","G","7","t","o","d","Q","L","Y","5","W","S","V","X","p","I","4","J","0","v","k","5"];[...l.env.NEXT_GITHUB_BACKEND_TOKEN||""];let i="https://api.github.com",s="https://github.com",o="hankliu62",a="hankliu62.github.com",u="interview",c="2022-11-28"},4246:function(e,t,n){"use strict";n.d(t,{Z:function(){return r}});var l=n(7294);function r(e){var t,n;let[r,i]=(0,l.useState)((null===(t=e[0])||void 0===t?void 0:t.id)||(null===(n=e[0])||void 0===n?void 0:n.title)),s=(0,l.useCallback)(e=>e.map(e=>{let{id:t}=e,n=document.getElementById(t);if(!n)return;let l=window.getComputedStyle(n),r=Number.parseFloat(l.scrollMarginTop),i=window.scrollY+n.getBoundingClientRect().top-r;return{id:t,top:i}}),[]);return(0,l.useEffect)(()=>{if(0===e.length)return;let t=s(e);function n(){if(t.filter(Boolean).length!==e.length&&(t=s(e)),0===t.filter(Boolean).length)return;let n=window.scrollY,l=t[0].id;for(let e of t)if(e&&n>=e.top)l=e.id;else break;i(l)}return window.addEventListener("scroll",n,{passive:!0}),n(),()=>{window.removeEventListener("scroll",n,{passive:!0})}},[s,e]),r}},2257:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return C},default:function(){return F}});var l=n(5893),r=n(5184),i=n(2377),s=n(233),o=n(9912),a=n(1289),u=n(3686),c=n(7966),d=n(8382),f=n(4184),h=n.n(f),p=n(7484),v=n.n(p),x=n(2918),m=n.n(x),b=n(1664),g=n.n(b),j=n(1163),w=n(7294),N=n(6689),_=n(7172),k=n(4246),C=!0;function F(e){var t,n,f,p;let{issue:x,menus:b}=e,C=(0,j.useRouter)(),[F,Z]=(0,w.useState)(!0),y=(0,w.useMemo)(()=>{let e=Number.MAX_VALUE,t=[];for(let n of b){let l=n.replace(/^(#+)\s(.*)/,"$1").length;e=Math.min(l,e);let r=n.replace(/^#+\s/,""),i=r.toLowerCase().replace(/\s/g,"-").replace(/[\u3002\uFF1F\uFF0C\uFF1A\u201C-\u201D\uFF08-\uFF09\u3001\uFF1B\uFF1A]/g,"");t.push({id:i,text:n,href:"#".concat(i),title:r,prefixLength:l})}return t.map(t=>({...t,minPrefixLength:e,paddingLeft:(t.prefixLength-e)*16+16}))},[b]),E=(0,k.Z)(y);function L(e){return e.id===E||!!e.children&&e.children.findIndex(e=>L(e))>-1}return C.isFallback||(null==x?void 0:x.number)?(0,l.jsxs)("div",{className:"flex space-x-6 bg-white p-6",children:[(0,l.jsx)("div",{className:"flex-1",children:(0,l.jsx)(i.Z,{className:"article-card min-h-full !border-[#d9d9d9]",children:(0,l.jsxs)("article",{children:[(0,l.jsx)("header",{children:(0,l.jsx)("h1",{className:"mb-5 text-4xl font-bold",children:x.title})}),(0,l.jsxs)("section",{className:"mb-12 flex items-center space-x-8",children:[(0,l.jsxs)(s.Z,{onClick:e=>{(null==e?void 0:e.stopPropagation)&&e.stopPropagation(),(null==e?void 0:e.preventDefault)&&e.preventDefault(),window.open("".concat(_.CI,"/").concat(_.h2,"/").concat(_.CH,"/issues/").concat(null==x?void 0:x.number),"_blank")},className:"group cursor-pointer",children:[(0,l.jsx)(r.Z,{className:"group-hover:text-[#1171ee]",rev:void 0}),(0,l.jsx)("span",{className:"group-hover:text-[#1171ee]",children:"#".concat(null==x?void 0:x.number)})]},"list-vertical-id"),(0,l.jsx)(s.Z,{onClick:e=>{var t;(null==e?void 0:e.stopPropagation)&&e.stopPropagation(),(null==e?void 0:e.preventDefault)&&e.preventDefault(),window.open("".concat(_.CI,"/").concat(null==x?void 0:null===(t=x.user)||void 0===t?void 0:t.login),"_blank")},className:"group cursor-pointer",children:(0,l.jsx)("span",{className:"group-hover:text-sky-500",children:null==x?void 0:null===(t=x.user)||void 0===t?void 0:t.login})},"list-vertical-user"),(0,l.jsx)(s.Z,{children:(0,l.jsx)("span",{className:"text-[#8a919f]",children:(null==x?void 0:x.created_at)&&v()(null==x?void 0:x.created_at).format("YYYY-MM-DD HH:mm:ss")})}),(0,l.jsx)(s.Z,{children:(0,l.jsx)("div",{className:"flex items-center justify-start",children:((null==x?void 0:x.labels)||[]).map(e=>(0,l.jsx)(o.Z,{color:"#".concat(e.color),children:e.name},e.id))})}),(0,l.jsx)(s.Z,{children:(0,l.jsx)(a.Z,{title:"难度: ".concat((null===(n=x.milestone)||void 0===n?void 0:n.number)?(null===(f=x.milestone)||void 0===f?void 0:f.number)+"颗\uD83C\uDF1F":"未设置"),children:(0,l.jsx)(u.Z,{defaultValue:(null===(p=x.milestone)||void 0===p?void 0:p.number)||0,disabled:!0})})},"list-difficulty")]}),(0,l.jsx)("section",{children:(0,l.jsx)(N.Z,{source:x.body||"",showLoading:!0})})]})})}),(0,l.jsx)("div",{className:"w-64 bg-white",children:(0,l.jsx)(c.Z,{offsetTop:24,children:(0,l.jsx)(d.Z,{className:"question-menus-collapse",defaultActiveKey:["menu"],onChange:e=>{Z(e.includes("labels"))},expandIconPosition:"end",items:[{key:"menu",label:(0,l.jsx)("span",{className:"text-base",children:"目录"}),children:(0,l.jsx)("ul",{className:"max-h-[620px] list-none space-y-3 overflow-y-auto text-slate-500 dark:text-slate-400",children:y.map(e=>(0,l.jsx)("li",{id:e.text,className:h()("border-0 !border-l-2 border-solid border-transparent pr-[16px] text-base",{"!border-sky-500":L(e)}),children:(0,l.jsx)(g(),{href:e.href,className:h()("w-full overflow-hidden !text-[#515767]",L(e)?"!text-sky-500":"!hover:text-slate-600 !dark:hover:text-slate-300"),children:(0,l.jsx)("div",{className:"truncate",style:{paddingLeft:"".concat(e.paddingLeft,"px")},children:e.title})})},e.title))}),extra:(0,l.jsx)("div",{className:"-mr-2",children:F?"收起":"展开"})}]})})})]}):(0,l.jsx)(m(),{statusCode:404})}},2918:function(e,t,n){e.exports=n(9185)}},function(e){e.O(0,[753,63,555,686,774,888,179],function(){return e(e.s=4392)}),_N_E=e.O()}]);