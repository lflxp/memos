import{b as L,e as b,w as A,x as F,r as x,i as C,T as d,y as a,n as u,j as t,M as N,z as R,E as k}from"./index-d6fbc60c.js";import{M as v}from"./Memo-2db0b764.js";const O=()=>{const m=L(),p=b(),g=A(),r=F(),M=g.state,{memos:o}=r.state,[y,l]=x.useState(!1),f=C(),{tag:c,text:n}=M,w=(!!(c||n)?o.filter(e=>{let s=!0;if(c){const h=new Set;for(const E of Array.from(e.content.match(new RegExp(d,"g"))??[])){const S=E.replace(d,"$1").trim().split("/");let i="";for(const T of S)i+=T,h.add(i),i+="/"}h.has(c)||(s=!1)}return n&&!e.content.toLowerCase().includes(n.toLowerCase())&&(s=!1),s}):o).filter(e=>e.rowStatus==="NORMAL"&&e.visibility!=="PRIVATE").sort((e,s)=>s.displayTs-e.displayTs);x.useEffect(()=>{r.fetchAllMemos(a,0).then(e=>{e.length<a&&l(!0),f.setFinish()}).catch(e=>{console.error(e),u.error(e.response.data.message)})},[p]);const j=async()=>{try{(await r.fetchAllMemos(a,o.length)).length<a?l(!0):l(!1)}catch(e){console.error(e),u.error(e.response.data.message)}};return t.jsxs("section",{className:"w-full max-w-3xl min-h-full flex flex-col justify-start items-center px-4 sm:px-2 sm:pt-4 pb-8 bg-zinc-100 dark:bg-zinc-800",children:[t.jsx(N,{showSearch:!1}),!f.isLoading&&t.jsxs("main",{className:"relative w-full h-auto flex flex-col justify-start items-start",children:[t.jsx(R,{}),w.map(e=>t.jsx(v,{memo:e},`${e.id}-${e.displayTs}`)),y?o.length===0&&t.jsxs("div",{className:"w-full mt-16 mb-8 flex flex-col justify-center items-center italic",children:[t.jsx(k,{}),t.jsx("p",{className:"mt-4 text-gray-600 dark:text-gray-400",children:m("message.no-data")})]}):t.jsx("p",{className:"m-auto text-center mt-4 italic cursor-pointer text-gray-500 hover:text-green-600",onClick:j,children:m("memo.fetch-more")})]})]})};export{O as default};
