(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2153],{82891:function(e,s,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/toolboxes/sql-editor",function(){return n(55836)}])},61647:function(e,s,n){"use strict";var t=n(34037),c=n(20640),i=n.n(c),l=n(67294);class o extends l.Component{render(){let{children:e,tag:s}=this.props;return l.createElement(s,{onClick:this.onClick},e)}constructor(...e){super(...e),this.onClick=e=>{let{children:s,text:n,onSuccess:t,options:c}=this.props,o=l.Children.only(s),r="function"==typeof n?n():n,a=i()(r,c);t&&t(r,a),(null==o?void 0:o.props)&&"function"==typeof o.props.onClick&&o.props.onClick(e)}}}o.defaultProps={tag:"span",text:"",onSuccess(){t.ZP.success("已将内容复制到剪贴板")},options:{}},s.Z=Object.assign(o,{copy:i()})},55836:function(e,s,n){"use strict";n.r(s),n.d(s,{default:function(){return x}});var t=n(85893),c=n(73711),i=n(57132),l=n(78971),o=n(34037),r=n(67294),a=n(46977),d=n(36782),u=n(61647),f=n(5152),p=n.n(f);let h=p()(()=>Promise.all([n.e(8764),n.e(5552),n.e(9878),n.e(8570),n.e(9569)]).then(n.bind(n,19569)),{loadableGenerated:{webpack:()=>[19569]},ssr:!1});function x(){let[e,s]=(0,r.useState)(),n=(0,r.useRef)(),f=(0,r.useCallback)(n=>{n?s((0,d.WU)(n)):e&&s((0,d.WU)(e))},[e]);return(0,a.y1)("cmd+shift+o",()=>{f()},[f]),(0,t.jsx)("div",{className:"bg-white p-6",children:(0,t.jsx)("div",{className:"flex flex-col space-y-6",children:(0,t.jsxs)("div",{children:[(0,t.jsxs)("div",{className:"flex justify-between pb-4",children:[(0,t.jsx)("h2",{className:"text-lg font-medium leading-[32px]",children:"SQL"}),(0,t.jsxs)("div",{className:"flex items-center space-x-5",children:[(0,t.jsx)(l.ZP,{className:"!inline-flex items-center",icon:(0,t.jsx)(c.Z,{rev:void 0}),onClick:()=>{f()},children:"格式化"}),(0,t.jsx)(u.Z,{text:e,onSuccess:()=>{o.ZP.success("复制成功")},children:(0,t.jsx)(l.ZP,{className:"!inline-flex items-center",icon:(0,t.jsx)(i.Z,{rev:void 0}),children:"拷贝"})})]})]}),(0,t.jsx)("div",{className:"mt-2",children:(0,t.jsx)(h,{value:e,onChange:e=>{s(e)},onMount:(e,s)=>{n.current=e,n.current.addCommand(s.KeyMod.CtrlCmd|s.KeyMod.Shift|s.KeyCode.KeyF,function(){console.log("cmd+shift+F",e.getValue()),f(e.getValue())})}})})]})})})}}},function(e){e.O(0,[6323,8971,4037,7225,9774,2888,179],function(){return e(e.s=82891)}),_N_E=e.O()}]);