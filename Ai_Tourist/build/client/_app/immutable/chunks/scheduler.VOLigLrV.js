function D(){}const Y=t=>t;function P(t,e){for(const n in e)t[n]=e[n];return t}function T(t){return t()}function Z(){return Object.create(null)}function B(t){t.forEach(T)}function $(t){return typeof t=="function"}function tt(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}function et(t){return Object.keys(t).length===0}function M(t,...e){if(t==null){for(const i of e)i(void 0);return D}const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function nt(t,e,n){t.$$.on_destroy.push(M(e,n))}function it(t,e,n,i){if(t){const r=E(t,e,n,i);return t[0](r)}}function E(t,e,n,i){return t[1]&&i?P(n.ctx.slice(),t[1](i(e))):n.ctx}function rt(t,e,n,i){if(t[2]&&i){const r=t[2](i(n));if(e.dirty===void 0)return r;if(typeof r=="object"){const o=[],c=Math.max(e.dirty.length,r.length);for(let l=0;l<c;l+=1)o[l]=e.dirty[l]|r[l];return o}return e.dirty|r}return e.dirty}function ct(t,e,n,i,r,o){if(r){const c=E(e,n,i,o);t.p(c,r)}}function st(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}function lt(t){const e={};for(const n in t)n[0]!=="$"&&(e[n]=t[n]);return e}function ot(t,e){const n={};e=new Set(e);for(const i in t)!e.has(i)&&i[0]!=="$"&&(n[i]=t[i]);return n}function ut(t){const e={};for(const n in t)e[n]=!0;return e}function at(t){const e=typeof t=="string"&&t.match(/^\s*(-?[\d.]+)([^\s]*)\s*$/);return e?[parseFloat(e[1]),e[2]||"px"]:[t,"px"]}let m=!1;function ft(){m=!0}function _t(){m=!1}function q(t,e,n,i){for(;t<e;){const r=t+(e-t>>1);n(r)<=i?t=r+1:e=r}return t}function F(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const s=[];for(let u=0;u<e.length;u++){const a=e[u];a.claim_order!==void 0&&s.push(a)}e=s}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let r=0;for(let s=0;s<e.length;s++){const u=e[s].claim_order,a=(r>0&&e[n[r]].claim_order<=u?r+1:q(1,r,O=>e[n[O]].claim_order,u))-1;i[s]=n[a]+1;const w=a+1;n[w]=s,r=Math.max(w,r)}const o=[],c=[];let l=e.length-1;for(let s=n[r]+1;s!=0;s=i[s-1]){for(o.push(e[s-1]);l>=s;l--)c.push(e[l]);l--}for(;l>=0;l--)c.push(e[l]);o.reverse(),c.sort((s,u)=>s.claim_order-u.claim_order);for(let s=0,u=0;s<c.length;s++){for(;u<o.length&&c[s].claim_order>=o[u].claim_order;)u++;const a=u<o.length?o[u]:null;t.insertBefore(c[s],a)}}function H(t,e){t.appendChild(e)}function I(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function dt(t){const e=N("style");return e.textContent="/* empty */",L(I(t),e),e.sheet}function L(t,e){return H(t.head||t,e),e.sheet}function R(t,e){if(m){for(F(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function ht(t,e,n){m&&!n?R(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function mt(t){t.parentNode&&t.parentNode.removeChild(t)}function N(t){return document.createElement(t)}function z(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function x(t){return document.createTextNode(t)}function pt(){return x(" ")}function yt(){return x("")}function bt(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function A(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}const U=["width","height"];function gt(t,e){const n=Object.getOwnPropertyDescriptors(t.__proto__);for(const i in e)e[i]==null?t.removeAttribute(i):i==="style"?t.style.cssText=e[i]:i==="__value"?t.value=t[i]=e[i]:n[i]&&n[i].set&&U.indexOf(i)===-1?t[i]=e[i]:A(t,i,e[i])}function xt(t,e){for(const n in e)A(t,n,e[n])}function wt(t){return t.dataset.svelteH}function vt(t){return Array.from(t.childNodes)}function W(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function j(t,e,n,i,r=!1){W(t);const o=(()=>{for(let c=t.claim_info.last_index;c<t.length;c++){const l=t[c];if(e(l)){const s=n(l);return s===void 0?t.splice(c,1):t[c]=s,r||(t.claim_info.last_index=c),l}}for(let c=t.claim_info.last_index-1;c>=0;c--){const l=t[c];if(e(l)){const s=n(l);return s===void 0?t.splice(c,1):t[c]=s,r?s===void 0&&t.claim_info.last_index--:t.claim_info.last_index=c,l}}return i()})();return o.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,o}function C(t,e,n,i){return j(t,r=>r.nodeName===e,r=>{const o=[];for(let c=0;c<r.attributes.length;c++){const l=r.attributes[c];n[l.name]||o.push(l.name)}o.forEach(c=>r.removeAttribute(c))},()=>i(e))}function kt(t,e,n){return C(t,e,n,N)}function Et(t,e,n){return C(t,e,n,z)}function G(t,e){return j(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>x(e),!0)}function Nt(t){return G(t," ")}function At(t,e){e=""+e,t.data!==e&&(t.data=e)}function jt(t,e,n,i){n==null?t.style.removeProperty(e):t.style.setProperty(e,n,"")}function J(t,e,{bubbles:n=!1,cancelable:i=!1}={}){return new CustomEvent(t,{detail:e,bubbles:n,cancelable:i})}function Ct(t,e){return new t(e)}let h;function y(t){h=t}function p(){if(!h)throw new Error("Function called outside component initialization");return h}function St(t){p().$$.on_mount.push(t)}function Ot(t){p().$$.after_update.push(t)}function Dt(){const t=p();return(e,n,{cancelable:i=!1}={})=>{const r=t.$$.callbacks[e];if(r){const o=J(e,n,{cancelable:i});return r.slice().forEach(c=>{c.call(t,o)}),!o.defaultPrevented}return!0}}function Pt(t){return p().$$.context.get(t)}function Tt(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach(i=>i.call(this,e))}const d=[],v=[];let _=[];const k=[],S=Promise.resolve();let g=!1;function K(){g||(g=!0,S.then(V))}function Bt(){return K(),S}function Q(t){_.push(t)}const b=new Set;let f=0;function V(){if(f!==0)return;const t=h;do{try{for(;f<d.length;){const e=d[f];f++,y(e),X(e.$$)}}catch(e){throw d.length=0,f=0,e}for(y(null),d.length=0,f=0;v.length;)v.pop()();for(let e=0;e<_.length;e+=1){const n=_[e];b.has(n)||(b.add(n),n())}_.length=0}while(d.length);for(;k.length;)k.pop()();g=!1,b.clear(),y(t)}function X(t){if(t.fragment!==null){t.update(),B(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(Q)}}function Mt(t){const e=[],n=[];_.forEach(i=>t.indexOf(i)===-1?e.push(i):n.push(i)),n.forEach(i=>i()),_=e}export{z as $,Bt as A,I as B,dt as C,B as D,$ as E,Q as F,J as G,Y as H,Z as I,V as J,et as K,Mt as L,h as M,y as N,T as O,d as P,K as Q,ft as R,_t as S,at as T,ot as U,Pt as V,P as W,lt as X,Tt as Y,gt as Z,bt as _,pt as a,Et as a0,ut as a1,Dt as a2,xt as a3,Nt as b,kt as c,A as d,N as e,mt as f,wt as g,vt as h,ht as i,G as j,R as k,At as l,nt as m,D as n,it as o,st as p,rt as q,yt as r,tt as s,x as t,ct as u,Ot as v,St as w,jt as x,v as y,Ct as z};