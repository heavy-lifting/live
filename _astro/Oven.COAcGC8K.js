import{j as t}from"./jsx-runtime.DDS51bD4.js";import{r as a}from"./index.DIn8BZQ7.js";import{l,a as d}from"./useClient.C3xvyNXE.js";import{MiniRepl as c}from"./MiniRepl.CCO272pQ.js";import{P as m}from"./PatternsTab.BQ_t7lqW.js";import"./_commonjsHelpers.BosuxZz1.js";import"./preload-helper.BO48x9DZ.js";import"./index.Dkgbun3A.js";import"./scope.M_6gkdev.js";/* empty css                      */import"./Claviature.DCnIPR8v.js";function n({patterns:s}){return t.jsx("div",{className:"space-y-4",children:s.map(e=>t.jsxs("div",{children:[t.jsx("div",{className:"flex justify-between not-prose pb-2",children:t.jsx("h2",{className:"text-lg",children:t.jsx("a",{href:`/?${e.hash}`,target:"_blank",className:"underline",children:t.jsx(m,{pattern:e})})})}),t.jsx(c,{tune:e.code.trim(),maxHeight:300})]},e.id))})}function E(){const[s,e]=a.useState([]),[i,o]=a.useState([]);return a.useEffect(()=>{l().then(({data:r})=>{console.log("pats",r),o(r)}),d().then(({data:r})=>{console.log("pats",r),e(r)})},[]),t.jsxs("div",{children:[t.jsx("h2",{id:"featured",children:"Featured Patterns"}),t.jsx(n,{patterns:s}),t.jsx("h2",{id:"latest",children:"Last Creations"}),t.jsx(n,{patterns:i})]})}export{E as Oven};