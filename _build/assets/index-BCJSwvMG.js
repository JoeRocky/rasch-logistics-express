import{b as v,w as C,v as y,x as N,f as b,q as x,O as T,s as p}from"./web-qRksBZG2.js";const E="https://rasch-logistics-express.de/",O="",j=E+O,A="Rasch Logistics Express",K="RaschLogistics Express",z="+49 159 01409372",H="Montag bis Freitag",L="08:00 bis 20:00 Uhr",R="info@rasch-logistics-express.de",S="Al-aliko, Farhad",k="Deisterstraße 16",F="30449 Hannover",I="? (wird in Kürze ergänzt)",h=x(),w=["title","meta"],f=[],m=["name","http-equiv","content","charset","media"].concat(["property"]),u=(r,n)=>{const e=Object.fromEntries(Object.entries(r.props).filter(([t])=>n.includes(t)).sort());return(Object.hasOwn(e,"name")||Object.hasOwn(e,"property"))&&(e.name=e.name||e.property,delete e.property),r.tag+JSON.stringify(e)};function M(){if(!T.context){const e=document.head.querySelectorAll("[data-sm]");Array.prototype.forEach.call(e,t=>t.parentNode.removeChild(t))}const r=new Map;function n(e){if(e.ref)return e.ref;let t=document.querySelector(`[data-sm="${e.id}"]`);return t?(t.tagName.toLowerCase()!==e.tag&&(t.parentNode&&t.parentNode.removeChild(t),t=document.createElement(e.tag)),t.removeAttribute("data-sm")):t=document.createElement(e.tag),t}return{addTag(e){if(w.indexOf(e.tag)!==-1){const c=e.tag==="title"?f:m,o=u(e,c);r.has(o)||r.set(o,[]);let s=r.get(o),l=s.length;s=[...s,e],r.set(o,s);let d=n(e);e.ref=d,p(d,e.props);let i=null;for(var t=l-1;t>=0;t--)if(s[t]!=null){i=s[t];break}return d.parentNode!=document.head&&document.head.appendChild(d),i&&i.ref&&i.ref.parentNode&&document.head.removeChild(i.ref),l}let a=n(e);return e.ref=a,p(a,e.props),a.parentNode!=document.head&&document.head.appendChild(a),-1},removeTag(e,t){const a=e.tag==="title"?f:m,c=u(e,a);if(e.ref){const o=r.get(c);if(o){if(e.ref.parentNode){e.ref.parentNode.removeChild(e.ref);for(let s=t-1;s>=0;s--)o[s]!=null&&document.head.appendChild(o[s].ref)}o[t]=null,r.set(c,o)}else e.ref.parentNode&&e.ref.parentNode.removeChild(e.ref)}}}}const U=r=>{const n=M();return v(h.Provider,{value:n,get children(){return r.children}})},g=(r,n,e)=>(P({tag:r,props:n,setting:e,id:C(),get name(){return n.name||n.property}}),null);function P(r){const n=y(h);if(!n)throw new Error("<MetaProvider /> should be in the tree");N(()=>{const e=n.addTag(r);b(()=>n.removeTag(r,e))})}const _=r=>g("title",r,{escape:!0,close:!0}),B=r=>g("meta",r);export{U as M,_ as T,L as a,F as b,A as c,O as d,R as e,B as f,S as g,j as h,K as l,H as o,z as p,k as s,I as u};