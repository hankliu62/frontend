(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2971],{99204:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/questions",function(){return n(24772)}])},13274:function(e,t,n){"use strict";var s=n(85893),a=n(98165),r=n(94184),i=n.n(r);n(67294);var l=n(56537);function o(){return(0,s.jsx)("div",{className:"flex justify-center",children:(0,s.jsx)(a.Z,{spin:!0,className:"text-lg text-[#1677ff]",rev:void 0})})}t.Z=function(e){let{className:t,style:n,visible:a=!0,disabled:r=!1,indicator:c=(0,s.jsx)(o,{}),onEnter:u,...d}=e;return a?(0,s.jsxs)("div",{className:i()("py-3 text-center",t),style:n,children:[r?null:(0,s.jsx)(l.h,{...d,onEnter:e=>{!r&&u&&u(e)}}),c]}):null}},37172:function(e,t,n){"use strict";n.d(t,{CH:function(){return o},CI:function(){return r},h2:function(){return i},ou:function(){return c},oz:function(){return a},x_:function(){return l},yq:function(){return s}});let s=["g","h","p","_","E","v","x","J","M","b","F","v","K","g","B","w","r","g","L","N","2","5","H","Y","o","1","v","n","g","R","9","4","9","4","2","d","P","p","F","p"],a="https://api.github.com",r="https://github.com",i="hankliu62",l="hankliu62.github.com",o="interview",c="2022-11-28"},21694:function(e,t,n){"use strict";var s=n(67294);t.Z=function(e,t){(0,s.useEffect)(()=>{e()},t)}},56355:function(e,t,n){"use strict";n.d(t,{W7:function(){return l}});var s=n(94301),a=n.n(s),r=n(37172);let i=r.yq.join(""),l=async function(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},s="".concat(r.oz,"/repos/").concat(r.h2,"/").concat(e,"/issues");for(let e in s+="?creator=".concat(r.h2,"&per_page=10&page=").concat(t||1),n)Object.prototype.hasOwnProperty.call(n,e)&&(s+="&".concat(e,"=").concat(n[e]));return a()(s,{headers:{"X-GitHub-Api-Version":r.ou,Authorization:"Bearer ".concat(i)}}).then(e=>e.json())}},24772:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return k},default:function(){return C}});var s=n(85893),a=n(67337),r=n(65184),i=n(87547),l=n(24019),o=n(70801),c=n(233),u=n(67966),d=n(74293),f=n(22377),p=n(77278),h=n(79912),v=n(94184),x=n.n(v),m=n(27484),j=n.n(m),g=n(11163),b=n(67294),N=n(13274),y=n(37172),_=n(21694),Z=n(56355);let w=e=>{let{icon:t,text:n,onClick:a}=e;return(0,s.jsxs)(c.Z,{onClick:a||(()=>{}),children:[b.createElement(t),n]})};var k=!0;function C(e){let{labels:t}=e,n=(0,g.useRouter)(),[v,m]=(0,b.useState)(n.query.label),[k,C]=(0,b.useState)(!0),[P,E]=(0,b.useState)(!1),[S,q]=(0,b.useState)(!0),[D,H]=(0,b.useState)([]),[I,z]=(0,b.useState)(1);(0,_.Z)(async()=>{Y(1,n.query.label)},[]);let Y=async(e,t)=>{E(!0),1===e&&q(!1),console.log("fetch issues",e,t);let n=await (0,Z.W7)(y.CH,e,{labels:[t].filter(Boolean).join(",")});E(!1),z(e),1===e?H(n):H(e=>[...e,...n||[]]),(null==n?void 0:n.length)===0&&q(!0)},M=e=>{m(null==e?void 0:e.name),Y(1,null==e?void 0:e.name);let t=e?{...n.query,label:e.name}:{...n.query};e||delete t.label,n.replace({pathname:n.pathname,query:t})},O=(0,b.useCallback)(()=>{Y(I+1,v)},[I,v]);return(0,s.jsxs)("div",{className:"flex space-x-6 bg-white p-6",children:[(0,s.jsx)("div",{className:"w-64",children:(0,s.jsx)(u.Z,{offsetTop:24,children:(0,s.jsx)(d.Z,{defaultActiveKey:["labels"],onChange:e=>{C(e.includes("labels"))},expandIconPosition:"end",items:[{key:"labels",label:(0,s.jsx)("span",{className:"cursor-pointer text-base font-bold underline-offset-2 hover:text-[#1171ee] hover:underline",onClick:e=>{(null==e?void 0:e.preventDefault)&&e.preventDefault(),(null==e?void 0:e.stopPropagation)&&e.stopPropagation(),M()},"aria-hidden":"true",children:"标签"}),children:(0,s.jsx)("div",{children:(t||[]).map(e=>(0,s.jsxs)("div",{className:x()("group flex space-x-4 rounded-md p-2 hover:cursor-pointer hover:bg-[#f7f8fa]",{"bg-[#eaf2ff] hover:bg-[#eaf2ff]":e.name===v}),onClick:()=>M(e),"aria-hidden":"true",children:[(0,s.jsx)("div",{className:"flex flex-col justify-center",children:(0,s.jsx)(a.Z,{rev:void 0,style:{color:"#".concat(e.color)},className:"text-lg font-medium"})}),(0,s.jsx)("div",{className:x()("text-base font-normal text-[#515767] group-hover:text-[#1171ee]",{"text-[#1e80ff] group-hover:text-[#1e80ff]":e.name===v}),children:e.title})]},e.id))}),extra:(0,s.jsx)("div",{className:"-mr-2",children:k?"收起":"展开"})}]})})}),(0,s.jsx)("div",{className:"flex-1 overflow-hidden",children:(0,s.jsxs)(f.Z,{size:"small",className:"issues-card min-h-full !border-[#d9d9d9]",children:[(0,s.jsx)(p.Z,{className:"issues-list",itemLayout:"vertical",size:"large",pagination:!1,dataSource:D,loading:P,renderItem:e=>(0,s.jsxs)(p.Z.Item,{className:"cursor-pointer rounded-md hover:bg-[#f6f8fa]",actions:[(0,s.jsxs)(c.Z,{onClick:t=>{(null==t?void 0:t.stopPropagation)&&t.stopPropagation(),(null==t?void 0:t.preventDefault)&&t.preventDefault(),window.open("".concat(y.CI,"/").concat(y.h2,"/").concat(y.CH,"/issues/").concat(e.number),"_blank")},className:"group cursor-pointer",children:[(0,s.jsx)(r.Z,{className:"group-hover:text-[#1171ee]",rev:void 0}),(0,s.jsx)("span",{className:"group-hover:text-[#1171ee]",children:"#".concat(e.number)})]},"list-vertical-id"),(0,s.jsxs)(c.Z,{onClick:t=>{(null==t?void 0:t.stopPropagation)&&t.stopPropagation(),(null==t?void 0:t.preventDefault)&&t.preventDefault(),window.open("".concat(y.CI,"/").concat(e.user.login),"_blank")},className:"group cursor-pointer",children:[(0,s.jsx)(i.Z,{className:"group-hover:text-[#1171ee]",rev:void 0}),(0,s.jsx)("span",{className:"group-hover:text-[#1171ee]",children:e.user.login})]},"list-vertical-user"),(0,s.jsx)(w,{icon:l.Z,text:j()(e.created_at).format("YYYY-MM-DD HH:mm:ss")},"list-vertical-time"),(0,s.jsx)(w,{icon:o.Z,text:e.state},"list-vertical-status")],onClick:()=>{n.push({pathname:"".concat(n.pathname,"/").concat(e.number)})},children:[(0,s.jsx)(p.Z.Item.Meta,{className:"!mb-0",title:(0,s.jsxs)("div",{className:"flex items-center justify-start space-x-2",children:[(0,s.jsx)("div",{className:"issue-title underline-offset-2",children:e.title}),(0,s.jsx)("div",{className:"flex items-center justify-start",children:e.labels.map(e=>(0,s.jsx)(h.Z,{color:"#".concat(e.color),children:e.name},e.id))})]})}),(0,s.jsx)("div",{className:"truncate empty:hidden",children:e.body||""})]},e.id)}),(0,s.jsx)(N.Z,{className:x()({invisible:1===I}),disabled:P,visible:!S,onEnter:O})]})})]})}}},function(e){e.O(0,[6396,4006,5861,2377,4334,2555,2593,3452,9774,2888,179],function(){return e(e.s=99204)}),_N_E=e.O()}]);