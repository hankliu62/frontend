(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9326],{7685:function(e,s,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/toolkits/qrcode",function(){return a(43603)}])},7892:function(e,s,a){"use strict";var l=a(4486),t=a(20640),r=a.n(t),n=a(67294);class i extends n.Component{render(){let{children:e,tag:s}=this.props;return n.createElement(s,{onClick:this.onClick},e)}constructor(...e){super(...e),this.onClick=e=>{let{children:s,text:a,onSuccess:l,options:t}=this.props,i=n.Children.only(s),c="function"==typeof a?a():a,o=r()(c,t);l&&l(c,o),(null==i?void 0:i.props)&&"function"==typeof i.props.onClick&&i.props.onClick(e)}}}i.defaultProps={tag:"span",text:"",onSuccess(){l.ZP.success("已将内容复制到剪贴板")},options:{}},s.Z=Object.assign(i,{copy:r()})},13533:function(e,s,a){"use strict";a.d(s,{p:function(){return t}});var l=a(5152);let t=a.n(l)()(()=>Promise.all([a.e(9282),a.e(2793),a.e(1599),a.e(8764),a.e(8657),a.e(717),a.e(6928)]).then(a.bind(a,26928)),{loadableGenerated:{webpack:()=>[26928]},ssr:!1})},43603:function(e,s,a){"use strict";a.r(s),a.d(s,{default:function(){return y}});var l=a(85893),t=a(5714),r=a(52647),n=a(44839),i=a(64484),c=a(81024),o=a(4486),d=a(48951),u=a(31855),p=a(28164),x=a(78038),m=a(92592),h=a(67004),f=a(67294),g=a(78396),b=a.n(g),j=a(57632),v=a(7892),N=a(13533);let{Dragger:w}=c.default;function y(){let[e,s]=(0,f.useState)(),[a,c]=(0,f.useState)(),[g,y]=(0,f.useState)(),[k,Z]=(0,f.useState)(),[C,P]=(0,f.useState)();function _(){P(void 0),y(void 0),Z(void 0)}let S=(0,f.useCallback)(async()=>{_();try{for(let e of(await navigator.clipboard.read())){if(!e.types.includes("image/png"))throw Error("Clipboard contains non-image data.");let s=await e.getType("image/png"),a=URL.createObjectURL(s),l=await (0,h.Z)(a);y(l),Z(a)}}catch(e){P(e.message),o.ZP.error(e.message)}},[]),E=(0,f.useCallback)(async e=>{_();let{status:s,originFileObj:a}=e.file;if("uploading"!==s&&console.log(e.file,e.fileList),"done"===s)try{let s=await (0,h.Z)(a);y(s);let l=new FileReader;l.onloadend=()=>{Z(l.result.toString()),o.ZP.success("".concat(e.file.name," 文件上传成功。"))},l.onerror=e=>{var s,a;P(null==e?void 0:null===(a=e.target)||void 0===a?void 0:null===(s=a.error)||void 0===s?void 0:s.message),console.error(e)},l.readAsDataURL(a)}catch(e){P(e.message),console.error(e)}else"error"===s&&o.ZP.error("".concat(e.file.name," 文件上传失败。"))},[]),L=(0,f.useCallback)(async()=>{try{let s=await m.toDataURL(e,{width:300});c(a=>[...a||[],{uuid:(0,j.Z)(),content:e,image:s}])}catch(e){o.ZP.error(e.message)}},[e]),O=(0,f.useCallback)(e=>{c(s=>(s||[]).filter((s,a)=>e!==a))},[]);return(0,l.jsx)("div",{className:"relative flex h-full flex-1 flex-col bg-white",children:(0,l.jsxs)(b(),{className:"flex-1",split:"vertical",minSize:50,maxSize:75,children:[(0,l.jsxs)("div",{className:"overflow-y-auto",children:[(0,l.jsxs)("div",{className:"flex justify-between border-b border-black/20 px-6 py-4",children:[(0,l.jsx)("h2",{className:"text-lg font-medium leading-[32px]",children:"生成二维码"}),(0,l.jsx)("div",{className:"flex items-center space-x-5",children:(0,l.jsx)(d.ZP,{className:"!inline-flex items-center",icon:(0,l.jsx)(t.Z,{}),onClick:L,children:"生成"})})]}),(0,l.jsx)(N.p,{className:"h-60 min-h-0",value:e,language:"plaintext",onChange:e=>{s(e)},options:{theme:"vs-dark"}}),(0,l.jsx)("div",{className:"m-5 space-y-5",children:null==a?void 0:a.map((e,s)=>{let{uuid:a,content:t,image:n}=e;return(0,l.jsxs)("div",{className:"flex items-start justify-between gap-2",children:[(0,l.jsxs)("div",{className:"flex flex-1 items-stretch gap-2",children:[(0,l.jsx)(u.Z,{className:"rounded border border-common-border",width:156,height:156,src:n,alt:t}),(0,l.jsx)("div",{className:"flex flex-1",children:(0,l.jsx)(p.Z.TextArea,{className:"h-full w-full flex-1 !bg-black/5",value:t,autoSize:!1,readOnly:!0})})]}),(0,l.jsx)("div",{className:"group p-2 text-[0px]",onClick:()=>O(s),"aria-hidden":"true",children:(0,l.jsx)(r.Z,{className:"cursor-pointer text-base group-hover:text-red-600"})})]},a)})})]}),(0,l.jsxs)("div",{className:"overflow-y-auto",children:[(0,l.jsxs)("div",{className:"flex justify-between border-b border-black/20 px-6 py-4",children:[(0,l.jsx)("h2",{className:"text-lg font-medium leading-[32px]",children:"解析二维码"}),(0,l.jsx)("div",{className:"flex items-center space-x-5",children:(0,l.jsx)(d.ZP,{className:"!inline-flex items-center",icon:(0,l.jsx)(t.Z,{}),onClick:S,children:"粘贴图片"})})]}),(0,l.jsxs)("div",{className:"m-5 space-y-5",children:[(0,l.jsxs)(w,{accept:"image/*",className:"block",name:"file",multiple:!1,onChange:E,onDrop:e=>{console.log("Dropped files",e.dataTransfer.files)},showUploadList:!1,children:[(0,l.jsx)("p",{className:"ant-upload-drag-icon",children:(0,l.jsx)(n.Z,{})}),(0,l.jsx)("p",{className:"ant-upload-text",children:"点击选择图片文件 或 拖进来"}),(0,l.jsx)("p",{className:"ant-upload-hint",children:"仅支持jpg、jpeg、png等图片格式，单个文件大小不超过10M"})]}),C&&(0,l.jsx)(x.Z,{message:"Error",description:C,type:"error",showIcon:!0,closable:!0,onClose:()=>P(void 0)}),k&&(0,l.jsxs)("div",{className:"flex items-start justify-between gap-2",children:[(0,l.jsxs)("div",{className:"flex items-stretch gap-2",children:[(0,l.jsx)(u.Z,{className:"rounded border border-common-border",width:168,height:168,src:k,alt:g}),(0,l.jsx)("div",{className:"h-[168px] flex-1 overflow-y-auto whitespace-pre-wrap break-all rounded border border-common-border bg-black/5 px-3 py-1 leading-[20px]",children:g})]}),(0,l.jsx)(v.Z,{text:g,onSuccess:()=>{o.ZP.success("复制成功")},children:(0,l.jsx)("div",{className:"group p-2 text-[0px]",children:(0,l.jsx)(i.Z,{className:"cursor-pointer text-base group-hover:text-blue-500"})})})]})]})]})]})})}}},function(e){e.O(0,[6148,5367,8951,438,4486,8164,8396,2287,2888,9774,179],function(){return e(e.s=7685)}),_N_E=e.O()}]);