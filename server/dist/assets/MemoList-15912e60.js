import{b as U,x as O,d as R,w as k,r as n,T as E,K as N,y as c,n as L,j as t,E as _}from"./index-d6fbc60c.js";import{M as $}from"./Memo-2db0b764.js";const z=()=>{const l=U(),f=O(),C=R(),m=k().state,{memos:u,isFetching:d}=f.state,[h,a]=n.useState(!1),w=C.getCurrentUsername(),{tag:p,duration:o,text:g,visibility:x}=m,S=(!!(p||o&&o.from<o.to||g||x)?u.filter(e=>{let r=!0;if(p){const b=new Set;for(const F of Array.from(e.content.match(new RegExp(E,"gu"))??[])){const A=F.replace(E,"$1").trim().split("/");let M="";for(const I of A)M+=I,b.add(M),M+="/"}b.has(p)||(r=!1)}return o&&o.from<o.to&&(N(e.displayTs)<o.from||N(e.displayTs)>o.to)&&(r=!1),g&&!e.content.toLowerCase().includes(g.toLowerCase())&&(r=!1),x&&(r=e.visibility===x),r}):u).filter(e=>e.creatorUsername===w&&e.rowStatus==="NORMAL"),j=S.filter(e=>e.pinned),v=S.filter(e=>!e.pinned),T=(e,r)=>r.displayTs-e.displayTs;j.sort(T),v.sort(T);const i=j.concat(v).filter(e=>e.rowStatus==="NORMAL"),s=n.useRef(null);n.useEffect(()=>{f.fetchMemos().then(e=>{e.length<c?a(!0):a(!1)}).catch(e=>{console.error(e),L.error(e.response.data.message)})},[w]),n.useEffect(()=>{const e=document.body.querySelector(".page-wrapper");e&&e.scrollTo(0,0)},[m]),n.useEffect(()=>{if(d||h)return;if(i.length<c){y();return}const e=new IntersectionObserver(([r])=>{r.isIntersecting&&(y(),e.unobserve(r.target))});return s!=null&&s.current&&e.observe(s.current),()=>{s!=null&&s.current&&e.unobserve(s.current)}},[d,h,m,i.length,s]);const y=async()=>{try{(await f.fetchMemos(c,u.length)).length<c?a(!0):a(!1)}catch(e){console.error(e),L.error(e.response.data.message)}};return t.jsxs("div",{className:"memo-list-container",children:[i.map(e=>t.jsx($,{memo:e,lazyRendering:!0,showVisibility:!0},`${e.id}-${e.displayTs}`)),d?t.jsx("div",{className:"status-text-container fetching-tip",children:t.jsx("p",{className:"status-text",children:l("memo.fetching-data")})}):t.jsx("div",{ref:s,className:"status-text-container",children:t.jsx("p",{className:"status-text",children:h?i.length===0&&t.jsxs("div",{className:"w-full mt-12 mb-8 flex flex-col justify-center items-center italic",children:[t.jsx(_,{}),t.jsx("p",{className:"mt-4 text-gray-600 dark:text-gray-400",children:l("message.no-data")})]}):t.jsx(t.Fragment,{children:t.jsx("span",{className:"cursor-pointer hover:text-green-600",onClick:y,children:l("memo.fetch-more")})})})})]})};export{z as M};
