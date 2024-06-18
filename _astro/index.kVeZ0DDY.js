function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as C}from"./preload-helper.BO48x9DZ.js";import{I as h,G as g,J as y}from"./index.Dkgbun3A.js";import{g as k}from"./scope.M_6gkdev.js";import"./_commonjsHelpers.BosuxZz1.js";const q=`<CsoundSynthesizer>\r
<CsInstruments>\r
\r
sr=48000\r
ksmps=64\r
nchnls=2\r
0dbfs=1\r
\r
</CsInstruments>\r
</CsoundSynthesizer>`,$=`; returns value of given key in given "string map"\r
; keymap("freq", "note/c3/freq/220/gain/0.5")\r
; yields "220"\r
opcode keymap, S, SS\r
  Skey, Smap xin\r
  idelimiter = strindex(Smap, strcat(Skey, "/"))\r
  ifrom = idelimiter + strlen(Skey) + 1\r
  Svalue = strsub(Smap, ifrom, strlen(Smap))\r
  Svalue = strsub(Svalue, 0, strindex(Svalue, "/"))\r
  xout Svalue\r
endop\r
\r
; TODO add incredibly dope synths\r
instr organ\r
    iduration = p3\r
    ifreq = p4\r
    igain = p5\r
    ioct = octcps(ifreq)\r
\r
    asig = vco2(igain, ifreq, 12, .5) ; my edit\r
    kpwm = oscili(.1, 5)\r
    asig = vco2(igain, ifreq, 4, .5 + kpwm)\r
    asig += vco2(igain/4, ifreq * 2)\r
\r
    ; filter\r
    ; idepth = 2\r
    ; acut = transegr:a(0, .005, 0, idepth, .06, -4.2, 0.001, .01, -4.2, 0) ; filter envelope\r
    ; asig = zdf_2pole(asig, cpsoct(ioct + acut), 0.5)\r
\r
    ; amp envelope\r
    iattack = .001\r
    irelease = .05\r
    asig *= linsegr:a(0, iattack, 1, iduration, 1, irelease, 0)\r
\r
    out(asig, asig)\r
\r
endin\r
\r
instr triangle\r
  iduration = p3\r
  ifreq = p4\r
  igain = p5\r
  ioct = octcps(ifreq)\r
  \r
  asig = vco2(igain, ifreq, 12, .5)\r
  \r
  ; amp envelope\r
  iattack = .001\r
  irelease = .05\r
  asig *= linsegr:a(0, iattack, 1, iduration, 1, irelease, 0)\r
  \r
  out(asig, asig)\r
endin\r
\r
instr pad\r
    iduration = p3\r
    ifreq = p4\r
    igain = p5\r
    ioct = octcps(ifreq)\r
\r
    asig = vco2(igain, ifreq, 0)\r
\r
    ; amp envelope\r
    iattack = .5\r
    irelease = .1\r
    asig *= linsegr:a(0, iattack, 1, iduration, 1, irelease, 0)\r
    \r
    idepth = 2\r
    acut = transegr:a(0, .005, 0, idepth, .06, -4.2, 0.001, .01, -4.2, 0)\r
    asig = zdf_2pole(asig, 1000, 2)\r
\r
    out(asig, asig)\r
endin\r
\r
\r
gisine	ftgen	0, 0, 4096, 10, 1\r
\r
instr bow\r
    kpres = 2\r
    krat = 0.16\r
    kvibf = 6.12723\r
    \r
    kvib  linseg 0, 0.5, 0, 1, 1, p3-0.5, 1	\r
    kvamp = kvib * 0.01\r
    asig  wgbow .7, p4, kpres, krat, kvibf, kvamp, gisine\r
    asig = asig*p5\r
    outs asig, asig\r
endin\r
\r
\r
instr Meta\r
    Smap = strget(p6)\r
    Sinstrument = keymap("s", Smap)\r
    schedule(Sinstrument, 0, p3, p4, p5)\r
    ; TODO find a way to pipe Sinstrument through effects\r
endin`;let l,t;async function S(n=""){await p(),n&&(n=`${n}`,await t?.evalCode(n))}const I=S,z=S,A=h("csound",(n,e)=>(n=n||"triangle",p(),e.onTrigger((r,i,s,m,d)=>{if(!t){g("[csound] not loaded yet","warning");return}i.ensureObjectValue();let{gain:a=.8}=i.value;a*=.2;const c=Math.round(y(i)),o=Object.entries({...i.value,freq:c}).flat().join("/"),v=d-s,u=`i ${[`"${n}"`,v,i.duration+0,c,a,`"${o}"`].join(" ")}`;t.inputMessage(u)})));function x(n,e){const[r]=e;if(n==="message"&&(["[commit: HEAD]"].includes(r)||r.startsWith("--Csound version")||r.startsWith("libsndfile")||r.startsWith("sr =")||r.startsWith("0dBFS")||r.startsWith("audio buffered")||r.startsWith("writing")||r.startsWith("SECTION 1:")))return;let i="info";r.startsWith("error:")&&(i="error"),g(`[csound] ${r||""}`,i)}async function T(){if(window.__csound__)return g("[load] Using external Csound","warning"),t=window.__csound__,t;{const{Csound:n}=await C(()=>import("./csound.rGqV05_F.js"),__vite__mapDeps([]));return t=await n({audioContext:k()}),t.removeAllListeners("message"),["message"].forEach(e=>t.on(e,(...r)=>x(e,r))),await t.setOption("-m0d"),await t.setOption("--sample-accurate"),await t.setOption("-odac"),await t.compileCsdText(q),await t.compileOrc($),await t.start(),t}}async function p(){return l=l||T(),l}let f={};async function D(n){if(await p(),typeof n!="string")throw new Error("loadOrc: expected url string");if(n.startsWith("github:")){const[e,r]=n.split("github:");n=`https://raw.githubusercontent.com/${r}`}f[n]||(f[n]=fetch(n).then(e=>e.text()).then(e=>t.compileOrc(e))),await f[n]}const L=h("csoundm",(n,e)=>{let r=n;return typeof n=="string"&&(r=`"${n}"`),p(),e.onTrigger((i,s)=>{if(!t){g("[csound] not loaded yet","warning");return}if(typeof s.value!="object")throw new Error("csound only support objects as hap values");const m=i-k().currentTime,d=s.duration.valueOf()+0,a=y(s);let{gain:c=1,velocity:o=.9}=s.value;o=c*o;const u=(Math.log(a/261.62558)/Math.log(2)+8)*12-36,b=127*o,O=Object.entries({...s.value,frequency:a}).flat().join("/"),w=`i ${r} ${m} ${d} ${u} ${b} "${O}"`;console.log("[csoundm]:",w),t.inputMessage(w)})});export{A as csound,L as csoundm,S as loadCSound,z as loadCsound,D as loadOrc,I as loadcsound};
