import{j as n}from"./jsx-runtime.DDS51bD4.js";import{r as o}from"./index.DIn8BZQ7.js";import"./_commonjsHelpers.BosuxZz1.js";const{replace:b}="",v=/&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34);/g,w={"&amp;":"&","&#38;":"&","&lt;":"<","&#60;":"<","&gt;":">","&#62;":">","&apos;":"'","&#39;":"'","&quot;":'"',"&#34;":'"'},x=t=>w[t],E=t=>b.call(t,v,x),I=({headings:t=[],currentPage:f})=>{const c=o.useRef(),p="on-this-page-heading",h=o.useRef([]),[g,a]=o.useState("overview");o.useEffect(()=>{const e=()=>{const r=document.querySelectorAll("article :is(h1, h2, h3, h4)");h.current=Array.from(r).map(s=>({id:s.id,topOffset:s.getBoundingClientRect().top+window.scrollY}))};return e(),window.addEventListener("resize",e),()=>{window.removeEventListener("resize",e)}},[]),o.useEffect(()=>{if(!c.current)return;const e=i=>{for(const l of i)if(l.isIntersecting){const{id:d}=l.target;if(d===p)continue;a(l.target.id);break}},r={rootMargin:"-100px 0% -66%",threshold:1},s=new IntersectionObserver(e,r);return document.querySelectorAll("article :is(h1,h2,h3)").forEach(i=>s.observe(i)),()=>s.disconnect()},[c.current]);const m=e=>{a(e.target.getAttribute("href").replace("#",""))},u=1;return n.jsx(n.Fragment,{children:n.jsx("ul",{ref:c,children:t.filter(({depth:e})=>e>=u&&e<4).map((e,r)=>n.jsx("li",{className:"w-full",children:n.jsx("a",{href:`${f}/#${e.slug}`,onClick:m,className:`py-0.5 block cursor-pointer w-full border-l-4 border-lineHighlight hover:bg-lineHighlight ${["pl-4","pl-9","pl-12"][e.depth-u]} ${g===e.slug?"bg-lineHighlight":""}`.trim(),children:E(e.text)})},r))})})};export{I as default};