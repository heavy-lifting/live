import{j as e}from"./jsx-runtime.DDS51bD4.js";import{u as Y}from"./useEvent.DKA6syeh.js";import{r as o}from"./index.DIn8BZQ7.js";import{g as O}from"./scope.M_6gkdev.js";import{C as G}from"./index.Dkgbun3A.js";import{C as I}from"./Claviature.DCnIPR8v.js";import"./_commonjsHelpers.BosuxZz1.js";function J(c,d=!1){const a=o.useRef(),i=o.useRef(),u=s=>{if(i.current!==void 0){const j=s-i.current;c(s,j)}i.current=s,a.current=requestAnimationFrame(u)},x=()=>{a.current=requestAnimationFrame(u)},n=()=>{a.current&&cancelAnimationFrame(a.current),delete a.current};return o.useEffect(()=>{a.current&&(n(),x())},[c]),o.useEffect(()=>(d&&x(),n),[]),{start:x,stop:n}}let A=c=>e.jsx("button",{...c,className:"bg-lineHighlight p-2 rounded-md color-foreground"});function S(c,d,a,i,u){let{width:x,height:n}=c.canvas;c.strokeStyle=u;const s=8;c.lineWidth=s,c.beginPath();let j=f=>(f-a)/(i-a)*x,v=f=>(1-f/d.length)*n;d.forEach((f,R,l)=>{c.lineTo(j(f),v(R))}),c.stroke()}let K="#eab308",Q="#3b82f6";function re({buttons:c=[],animatable:d=!1,plot:a=!1,showPitchSlider:i=!1,showFrequencySlider:u=!1,pitchStep:x="0.001",min:n=55,max:s=7040,initial:j=220,baseFrequency:v=n,zeroOffset:f=0,claviature:R}){const l=o.useRef(),b=o.useRef(),w=o.useRef(j),F=o.useRef([w.current]),M=o.useRef(),y=o.useRef(),[m,q]=o.useState(w.current);o.useEffect(()=>{w.current=m},[m]),Y("mouseup",()=>{l.current?.stop(),b.current=!1});let z=r=>n+r*(s-n),T=r=>n*2**(r*Math.log2(s/n)),W=r=>(r-n)/(s-n),k=r=>{const[t,p]=[Math.log2(n),Math.log2(s)];return(Math.log2(r)-t)/(p-t)};const B=W(m),L=k(m);let N=r=>{l.current&&l.current.stop(),l.current=O().createOscillator(),l.current.frequency.value=r,l.current.connect(O().destination),l.current.start(),b.current=!0,q(r)},E=(r=!1)=>{let t=n;N(t);const p=()=>{t<s?(r?t*=1.01:t+=10,l.current.frequency.value=t,M.current=requestAnimationFrame(p)):(l.current.stop(),cancelAnimationFrame(M.current)),q(t)};requestAnimationFrame(p)};J(()=>{if(F.current.push(w.current),F.current=F.current.slice(-1e3),y.current){let r=y.current.getContext("2d");if(r.clearRect(0,0,r.canvas.width,r.canvas.height),u&&S(r,F.current,n,s,Q),i){const[t,p]=[Math.log2(n),Math.log2(s)];let V=F.current.map(X=>Math.log2(X));S(r,V,t,p,K)}}},a);let C=r=>{q(r),l.current&&(l.current.frequency.value=r)},D=()=>{cancelAnimationFrame(M.current),N(m)},h,g,H;if(i){const r=v?Math.log2(v/n):0;h=k(m)*Math.log2(s/n)-r;let t=parseFloat((h*12).toFixed(2));if(f){t=t+f;const p=Math.round(t)===t;g=G(Math.round(t)),H=(p?"":"~")+g,t=p?t:t.toFixed(2),h=e.jsxs(e.Fragment,{children:["(",e.jsx("span",{className:"text-yellow-500",children:t})," - ",f,")/12"]})}else t%12===0?h=e.jsx("span",{className:"text-yellow-500",children:t/12}):t%1===0?h=e.jsxs(e.Fragment,{children:[e.jsx("span",{className:"text-yellow-500",children:t}),"/12"]}):h=e.jsx("span",{className:"text-yellow-500",children:h.toFixed(2)})}return e.jsxs(e.Fragment,{children:[e.jsxs("span",{className:"font-mono",children:[u&&e.jsxs("span",{className:"text-blue-500",children:[m.toFixed(0),"Hz"]}),u&&i&&e.jsx(e.Fragment,{children:" = "}),i&&e.jsxs(e.Fragment,{children:[v||n,"Hz * 2",e.jsx("sup",{children:h})]})]}),R&&e.jsxs(e.Fragment,{children:[" ","= ",e.jsx("span",{className:"text-yellow-500",children:H})]}),e.jsxs("div",{children:[u&&e.jsx("div",{className:"flex space-x-1 items-center",children:e.jsx("input",{type:"range",value:B,min:0,max:1,step:.001,onMouseDown:D,className:"block w-full max-w-[600px] accent-blue-500 ",onChange:r=>{const t=z(parseFloat(r.target.value));C(t)}})}),i&&e.jsx("div",{children:e.jsx("input",{type:"range",value:L,min:0,max:1,step:x,onMouseDown:D,className:"block w-full max-w-[600px] accent-yellow-500",onChange:r=>{const t=T(parseFloat(r.target.value));C(t)}})})]}),e.jsx("div",{className:"px-2",children:a&&e.jsx("canvas",{ref:y,className:"w-full max-w-[584px] h-[300px]",height:"600",width:800})}),e.jsxs("div",{className:"space-x-2",children:[d&&e.jsx(A,{onClick:()=>E(),children:e.jsx("span",{style:{color:"#3b82f6"},children:"Frequency Sweep"})}),d&&e.jsx(A,{onClick:()=>E(!0),children:e.jsx("span",{style:{color:"#eab308"},children:"Pitch Sweep"})}),c.map((r,t)=>e.jsxs(A,{onMouseDown:()=>N(r),children:[r,"Hz"]},t))]}),R&&e.jsx(I,{onMouseDown:r=>{const t=440*2**((r-69)/12);C(t),cancelAnimationFrame(M.current),N(t)},options:{range:["A1","A5"],scaleY:.75,scaleX:.86,colorize:g?[{keys:[g],color:"#eab308"}]:[],labels:g?{[g]:g}:{}}})]})}export{re as PitchSlider};
