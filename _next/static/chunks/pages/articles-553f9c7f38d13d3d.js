(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5091],{65615:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/articles",function(){return n(39294)}])},8087:function(e,t,n){"use strict";n.d(t,{Z:function(){return f}});var r=n(94184),o=n.n(r),a=n(67294),i=n(15479),l=n(91451),c=n(22954),s=n(75769);let d=e=>{let{componentCls:t,sizePaddingEdgeHorizontal:n,colorSplit:r,lineWidth:o}=e;return{[t]:Object.assign(Object.assign({},(0,l.Wf)(e)),{borderBlockStart:"".concat(o,"px solid ").concat(r),"&-vertical":{position:"relative",top:"-0.06em",display:"inline-block",height:"0.9em",margin:"0 ".concat(e.dividerVerticalGutterMargin,"px"),verticalAlign:"middle",borderTop:0,borderInlineStart:"".concat(o,"px solid ").concat(r)},"&-horizontal":{display:"flex",clear:"both",width:"100%",minWidth:"100%",margin:"".concat(e.dividerHorizontalGutterMargin,"px 0")},["&-horizontal".concat(t,"-with-text")]:{display:"flex",alignItems:"center",margin:"".concat(e.dividerHorizontalWithTextGutterMargin,"px 0"),color:e.colorTextHeading,fontWeight:500,fontSize:e.fontSizeLG,whiteSpace:"nowrap",textAlign:"center",borderBlockStart:"0 ".concat(r),"&::before, &::after":{position:"relative",width:"50%",borderBlockStart:"".concat(o,"px solid transparent"),borderBlockStartColor:"inherit",borderBlockEnd:0,transform:"translateY(50%)",content:"''"}},["&-horizontal".concat(t,"-with-text-left")]:{"&::before":{width:"5%"},"&::after":{width:"95%"}},["&-horizontal".concat(t,"-with-text-right")]:{"&::before":{width:"95%"},"&::after":{width:"5%"}},["".concat(t,"-inner-text")]:{display:"inline-block",padding:"0 1em"},"&-dashed":{background:"none",borderColor:r,borderStyle:"dashed",borderWidth:"".concat(o,"px 0 0")},["&-horizontal".concat(t,"-with-text").concat(t,"-dashed")]:{"&::before, &::after":{borderStyle:"dashed none none"}},["&-vertical".concat(t,"-dashed")]:{borderInlineStartWidth:o,borderInlineEnd:0,borderBlockStart:0,borderBlockEnd:0},["&-plain".concat(t,"-with-text")]:{color:e.colorText,fontWeight:"normal",fontSize:e.fontSize},["&-horizontal".concat(t,"-with-text-left").concat(t,"-no-default-orientation-margin-left")]:{"&::before":{width:0},"&::after":{width:"100%"},["".concat(t,"-inner-text")]:{paddingInlineStart:n}},["&-horizontal".concat(t,"-with-text-right").concat(t,"-no-default-orientation-margin-right")]:{"&::before":{width:"100%"},"&::after":{width:0},["".concat(t,"-inner-text")]:{paddingInlineEnd:n}}})}};var u=(0,c.Z)("Divider",e=>{let t=(0,s.TS)(e,{dividerVerticalGutterMargin:e.marginXS,dividerHorizontalWithTextGutterMargin:e.margin,dividerHorizontalGutterMargin:e.marginLG});return[d(t)]},{sizePaddingEdgeHorizontal:0}),h=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&0>t.indexOf(r)&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var o=0,r=Object.getOwnPropertySymbols(e);o<r.length;o++)0>t.indexOf(r[o])&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]]);return n},f=e=>{let{getPrefixCls:t,direction:n}=a.useContext(i.E_),{prefixCls:r,type:l="horizontal",orientation:c="center",orientationMargin:s,className:d,rootClassName:f,children:p,dashed:x,plain:v}=e,m=h(e,["prefixCls","type","orientation","orientationMargin","className","rootClassName","children","dashed","plain"]),g=t("divider",r),[b,j]=u(g),w=c.length>0?"-".concat(c):c,y=!!p,N="left"===c&&null!=s,S="right"===c&&null!=s,k=o()(g,j,"".concat(g,"-").concat(l),{["".concat(g,"-with-text")]:y,["".concat(g,"-with-text").concat(w)]:y,["".concat(g,"-dashed")]:!!x,["".concat(g,"-plain")]:!!v,["".concat(g,"-rtl")]:"rtl"===n,["".concat(g,"-no-default-orientation-margin-left")]:N,["".concat(g,"-no-default-orientation-margin-right")]:S},d,f),_=a.useMemo(()=>"number"==typeof s?s:/^\d+$/.test(s)?Number(s):s,[s]),Z=Object.assign(Object.assign({},N&&{marginLeft:_}),S&&{marginRight:_});return b(a.createElement("div",Object.assign({className:k},m,{role:"separator"}),p&&"vertical"!==l&&a.createElement("span",{className:"".concat(g,"-inner-text"),style:Z},p)))}},13274:function(e,t,n){"use strict";var r=n(85893),o=n(98165),a=n(94184),i=n.n(a);n(67294);var l=n(56537);function c(){return(0,r.jsx)("div",{className:"flex justify-center",children:(0,r.jsx)(o.Z,{spin:!0,className:"text-lg text-[#1677ff]",rev:void 0})})}t.Z=function(e){let{className:t,style:n,visible:o=!0,disabled:a=!1,indicator:s=(0,r.jsx)(c,{}),onEnter:d,...u}=e;return o?(0,r.jsxs)("div",{className:i()("py-3 text-center",t),style:n,children:[a?null:(0,r.jsx)(l.h,{...u,onEnter:e=>{!a&&d&&d(e)}}),s]}):null}},6689:function(e,t,n){"use strict";n.d(t,{Z:function(){return s}});var r=n(85893),o=n(71591),a=n(5152),i=n.n(a),l=n(67294);let c=i()(()=>Promise.all([n.e(8569),n.e(9523)]).then(n.bind(n,49523)),{loadableGenerated:{webpack:()=>[null]},ssr:!1});function s(e){let{onLoad:t,showLoading:n,...a}=e,i=(0,l.useRef)(!1),s=(0,l.useRef)(),[d,u]=(0,l.useState)(!0);return(0,l.useLayoutEffect)(()=>{!function e(){var n;let r=null===(n=s.current)||void 0===n?void 0:n.querySelectorAll(".wmde-markdown");r&&r.length>0?(!i.current&&(u(!1),t&&t()),i.current=!0):setTimeout(e,1e3)}()},[t]),(0,r.jsxs)("div",{ref:s,children:[(0,r.jsx)(c,{...a}),n&&d&&(0,r.jsx)(o.Z,{active:!0})]})}},37172:function(e,t,n){"use strict";n.d(t,{CH:function(){return d},CI:function(){return l},JY:function(){return o},SN:function(){return a},h2:function(){return c},ou:function(){return u},oz:function(){return i},x_:function(){return s}});var r=n(34155);let o=["g","h","p","_","Y","x","6","S","E","W","5","y","c","9","f","A","N","a","A","G","7","t","o","d","Q","L","Y","5","W","S","V","X","p","I","4","J","0","v","k","5"],a=[...r.env.NEXT_GITHUB_BACKEND_TOKEN||""],i="https://api.github.com",l="https://github.com",c="hankliu62",s="hankliu62.github.com",d="interview",u="2022-11-28"},21694:function(e,t,n){"use strict";var r=n(67294);t.Z=function(e,t){(0,r.useEffect)(()=>{e()},t)}},9074:function(e,t,n){"use strict";n.d(t,{W:function(){return l}});var r=n(94301),o=n.n(r),a=n(37172);let i=a.JY.join(""),l=async function(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r="".concat(a.oz,"/repos/").concat(a.h2,"/").concat(e,"/issues");for(let e in console.log(a.JY,a.SN,"----------------"),r+="?creator=".concat(a.h2,"&per_page=10&page=").concat(t||1),n)Object.prototype.hasOwnProperty.call(n,e)&&(r+="&".concat(e,"=").concat(n[e]));return o()(r,{headers:{"X-GitHub-Api-Version":a.ou,Authorization:"Bearer ".concat(i)}}).then(e=>e.json())}},39294:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return _},default:function(){return Z}});var r=n(85893),o=n(67337),a=n(22377),i=n(67966),l=n(74293),c=n(94184),s=n.n(c),d=n(11163),u=n(67294),h=n(65184),f=n(233),p=n(79912),x=n(8087),v=n(71591),m=n(27484),g=n.n(m),b=n(1216),j=n(6689),w=n(37172);function y(e){var t;let{className:n,article:o}=e;return(0,r.jsxs)("article",{className:s()({[n]:n}),children:[(0,r.jsx)("header",{children:(0,r.jsx)("h1",{className:"mb-3 text-4xl font-bold",children:o.title})}),(0,r.jsxs)("section",{className:"flex items-center space-x-8",children:[(0,r.jsxs)(f.Z,{onClick:e=>{(null==e?void 0:e.stopPropagation)&&e.stopPropagation(),(null==e?void 0:e.preventDefault)&&e.preventDefault(),window.open("".concat(w.CI,"/").concat(w.h2,"/").concat(w.x_,"/issues/").concat(null==o?void 0:o.number),"_blank")},className:"group cursor-pointer",children:[(0,r.jsx)(h.Z,{className:"group-hover:text-[#1171ee]",rev:void 0}),(0,r.jsx)("span",{className:"group-hover:text-[#1171ee]",children:"#".concat(null==o?void 0:o.number)})]},"list-vertical-id"),(0,r.jsx)(f.Z,{onClick:e=>{var t;(null==e?void 0:e.stopPropagation)&&e.stopPropagation(),(null==e?void 0:e.preventDefault)&&e.preventDefault(),window.open("".concat(w.CI,"/").concat(null==o?void 0:null===(t=o.user)||void 0===t?void 0:t.login),"_blank")},className:"group cursor-pointer",children:(0,r.jsx)("span",{className:"group-hover:text-sky-500",children:null==o?void 0:null===(t=o.user)||void 0===t?void 0:t.login})},"list-vertical-user"),(0,r.jsx)(f.Z,{children:(0,r.jsx)("span",{className:"text-[#8a919f]",children:(null==o?void 0:o.created_at)&&g()(null==o?void 0:o.created_at).format("YYYY-MM-DD HH:mm:ss")})}),(0,r.jsx)(f.Z,{children:(0,r.jsx)("div",{className:"flex items-center justify-start",children:((null==o?void 0:o.labels)||[]).filter(e=>"blog"!==e.name).map(e=>(0,r.jsx)(p.Z,{color:"#".concat(e.color),children:e.name},e.id))})})]}),(0,r.jsx)(x.Z,{className:"!my-3 !border-[#bfc3c7]"}),(0,r.jsx)("section",{children:(0,r.jsx)(b.ZP,{overflow:!1,once:!1,height:30,offset:50,placeholder:(0,r.jsx)(v.Z,{active:!0}),children:(0,r.jsx)(j.Z,{source:(o.body||"").replace(/^---([\S\s]*?)---/,""),showLoading:!0})})})]})}var N=n(13274),S=n(21694),k=n(9074),_=!0;function Z(e){let{labels:t}=e,n=(0,d.useRouter)(),[c,h]=(0,u.useState)(n.query.label),[f,p]=(0,u.useState)(!0),[x,v]=(0,u.useState)(!1),[m,g]=(0,u.useState)(!0),[b,j]=(0,u.useState)([]),[_,Z]=(0,u.useState)(1);(0,S.Z)(async()=>{E(1,n.query.label)},[]);let E=async(e,t)=>{v(!0),1===e&&g(!1),console.log("fetch articles",e,t);let n=await (0,k.W)(w.x_,e,{labels:["blog",t].filter(Boolean).join(",")});v(!1),Z(e),1===e?j(n):j(e=>[...e,...n||[]]),(null==n?void 0:n.length)===0&&g(!0)},z=e=>{h(null==e?void 0:e.name),E(1,null==e?void 0:e.name);let t=e?{...n.query,label:e.name}:{...n.query};e||delete t.label,n.replace({pathname:n.pathname,query:t})},C=(0,u.useCallback)(()=>{E(_+1,c)},[_,c]);return(0,r.jsxs)("div",{className:"flex space-x-6 bg-white p-6",children:[(0,r.jsxs)("div",{className:"-mx-6 flex-1 space-y-8 overflow-hidden px-6",children:[(b||[]).map(e=>(0,r.jsx)(a.Z,{className:"list-article-card cursor-pointer !border-[#d9d9d9] !p-6 shadow-md",onClick:()=>{n.push({pathname:"".concat(n.pathname,"/").concat(e.number)})},children:(0,r.jsx)(y,{article:e},e.id)},e.id)),(0,r.jsx)(N.Z,{className:s()({invisible:1===_}),disabled:x,visible:!m,onEnter:C})]}),(0,r.jsx)("div",{className:"w-64",children:(0,r.jsx)(i.Z,{offsetTop:24,children:(0,r.jsx)(l.Z,{className:"articles-collapse",defaultActiveKey:["labels"],onChange:e=>{p(e.includes("labels"))},expandIconPosition:"end",items:[{key:"labels",label:(0,r.jsx)("span",{className:"cursor-pointer text-base font-bold underline-offset-2 hover:text-[#1171ee] hover:underline",onClick:e=>{(null==e?void 0:e.preventDefault)&&e.preventDefault(),(null==e?void 0:e.stopPropagation)&&e.stopPropagation(),z()},"aria-hidden":"true",children:"标签"}),children:(0,r.jsx)("div",{className:"max-h-[620px] overflow-y-auto p-[16px]",children:(t||[]).map(e=>(0,r.jsxs)("div",{className:s()("group flex space-x-4 rounded-md p-2 hover:cursor-pointer hover:bg-[#f7f8fa]",{"bg-[#eaf2ff] hover:bg-[#eaf2ff]":e.name===c}),onClick:()=>z(e),"aria-hidden":"true",children:[(0,r.jsx)("div",{className:"flex flex-col justify-center",children:(0,r.jsx)(o.Z,{rev:void 0,style:{color:"#".concat(e.color)},className:"text-lg font-medium"})}),(0,r.jsx)("div",{className:s()("text-base font-normal text-[#515767] group-hover:text-[#1171ee]",{"text-[#1e80ff] group-hover:text-[#1e80ff]":e.name===c}),children:e.title})]},e.id))}),extra:(0,r.jsx)("div",{className:"-mr-2",children:f?"收起":"展开"})}]})})})]})}}},function(e){e.O(0,[6396,8490,2555,2593,1216,9774,2888,179],function(){return e(e.s=65615)}),_N_E=e.O()}]);