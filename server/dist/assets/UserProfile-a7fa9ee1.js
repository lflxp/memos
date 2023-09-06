import{c,j as e,V as x,W as d,X as m,I as u,Y as f,b as h,d as j,i as g,r as n,n as p,U as w,z as v}from"./index-d6fbc60c.js";import{M as N}from"./MemoList-15912e60.js";import"./Memo-2db0b764.js";const b=()=>{const t=c();return e.jsx(e.Fragment,{children:e.jsxs(x,{children:[e.jsx("div",{className:"fixed bottom-6 right-6",children:e.jsx(d,{slots:{root:m},slotProps:{root:{className:"!bg-white dark:!bg-zinc-900 drop-shadow",size:"sm",variant:"outlined",color:"neutral"}},children:e.jsx(u.MoreVertical,{className:"w-4 h-auto"})})}),e.jsx(f,{placement:"top-end",children:e.jsx("button",{className:"w-full text-left text-sm whitespace-nowrap leading-6 py-1 px-3 cursor-pointer hover:bg-gray-100 dark:hover:bg-zinc-600",onClick:()=>t("/"),children:"Back to home"})})]})})},z=()=>{const t=h(),r=j(),l=g(),[s,o]=n.useState();return n.useEffect(()=>{const i=r.getCurrentUsername();r.getUserByUsername(i).then(a=>{o(a),l.setFinish()}).catch(a=>{console.error(a),p.error(t("message.user-not-found"))})},[r.getCurrentUsername()]),e.jsxs(e.Fragment,{children:[e.jsx("section",{className:"relative top-0 w-full min-h-full overflow-x-hidden bg-zinc-100 dark:bg-zinc-800",children:e.jsx("div",{className:"relative w-full min-h-full mx-auto flex flex-col justify-start items-center",children:!l.isLoading&&(s?e.jsx(e.Fragment,{children:e.jsx("main",{className:"relative flex-grow max-w-2xl w-full min-h-full flex flex-col justify-start items-start px-4",children:e.jsx("div",{className:"w-full flex flex-row justify-start items-start",children:e.jsxs("div",{className:"flex-grow shrink w-full",children:[e.jsxs("div",{className:"w-full flex flex-col justify-start items-center py-8",children:[e.jsx(w,{className:"w-16 h-auto mb-4 drop-shadow",avatarUrl:s==null?void 0:s.avatarUrl}),e.jsx("div",{children:e.jsx("p",{className:"text-2xl font-bold text-gray-700 dark:text-gray-300",children:s==null?void 0:s.nickname})})]}),e.jsx("div",{className:"w-full h-auto flex flex-col justify-start items-start bg-zinc-100 dark:bg-zinc-800 rounded-lg",children:e.jsx(v,{})}),e.jsx(N,{})]})})})}):e.jsx(e.Fragment,{children:e.jsx("p",{children:"Not found"})}))})}),e.jsx(b,{})]})};export{z as default};
