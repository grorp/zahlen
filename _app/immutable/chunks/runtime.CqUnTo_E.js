var Rn=Array.isArray,Sn=Array.from,In=Object.defineProperty,it=Object.getOwnPropertyDescriptor,Kt=Object.getOwnPropertyDescriptors,Dn=Object.prototype,xn=Array.prototype,$t=Object.getPrototypeOf;const On=()=>{};function Cn(t){return t()}function pt(t){for(var n=0;n<t.length;n++)t[n]()}const T=2,ht=4,M=8,et=16,E=32,Z=64,S=128,U=256,p=512,g=1024,Y=2048,O=4096,j=8192,Zt=16384,dt=32768,Nn=65536,zt=1<<18,Et=1<<19,ft=Symbol("$state"),bn=Symbol("legacy props"),qn=Symbol("");function yt(t){return t===this.v}function Wt(t,n){return t!=t?n==n:t!==n||t!==null&&typeof t=="object"||typeof t=="function"}function wt(t){return!Wt(t,this.v)}function Xt(t){throw new Error("effect_in_teardown")}function Jt(){throw new Error("effect_in_unowned_derived")}function Qt(t){throw new Error("effect_orphan")}function tn(){throw new Error("effect_update_depth_exceeded")}function Pn(){throw new Error("hydration_failed")}function Fn(t){throw new Error("props_invalid_value")}function Ln(){throw new Error("state_descriptors_fixed")}function Mn(){throw new Error("state_prototype_fixed")}function nn(){throw new Error("state_unsafe_local_read")}function rn(){throw new Error("state_unsafe_mutation")}let z=!1;function Yn(){z=!0}function st(t){return{f:0,v:t,reactions:null,equals:yt,version:0}}function jn(t){return en(st(t))}function Hn(t,n=!1){var e;const r=st(t);return n||(r.equals=wt),z&&f!==null&&f.l!==null&&((e=f.l).s??(e.s=[])).push(r),r}function en(t){return o!==null&&o.f&T&&(d===null?yn([t]):d.push(t)),t}function Bn(t,n){return o!==null&&ut()&&o.f&(T|et)&&(d===null||!d.includes(t))&&rn(),sn(t,n)}function sn(t,n){return t.equals(n)||(t.v=n,t.version=jt(),Tt(t,g),ut()&&u!==null&&u.f&p&&!(u.f&E)&&(_!==null&&_.includes(t)?(y(u,g),X(u)):k===null?wn([t]):k.push(t))),n}function Tt(t,n){var r=t.reactions;if(r!==null)for(var e=ut(),s=r.length,l=0;l<s;l++){var a=r[l],i=a.f;i&g||!e&&a===u||(y(a,n),i&(p|S)&&(i&T?Tt(a,Y):X(a)))}}const Un=1,Vn=2,Gn=16,Kn=1,$n=2,Zn=4,zn=8,Wn=16,Xn=1,Jn=2,ln="[",an="[!",un="]",mt={},Qn=Symbol();function At(t){console.warn("hydration_mismatch")}let C=!1;function tr(t){C=t}let m;function P(t){if(t===null)throw At(),mt;return m=t}function nr(){return P(N(m))}function rr(t){if(C){if(N(m)!==null)throw At(),mt;m=t}}function er(){for(var t=0,n=m;;){if(n.nodeType===8){var r=n.data;if(r===un){if(t===0)return n;t-=1}else(r===ln||r===an)&&(t+=1)}var e=N(n);n.remove(),n=e}}var _t,kt,gt;function sr(){if(_t===void 0){_t=window;var t=Element.prototype,n=Node.prototype;kt=it(n,"firstChild").get,gt=it(n,"nextSibling").get,t.__click=void 0,t.__className="",t.__attributes=null,t.__styles=null,t.__e=void 0,Text.prototype.__t=void 0}}function J(t=""){return document.createTextNode(t)}function Q(t){return kt.call(t)}function N(t){return gt.call(t)}function lr(t,n){if(!C)return Q(t);var r=Q(m);if(r===null)r=m.appendChild(J());else if(n&&r.nodeType!==3){var e=J();return r==null||r.before(e),P(e),e}return P(r),r}function ar(t,n){if(!C){var r=Q(t);return r instanceof Comment&&r.data===""?N(r):r}return m}function ur(t,n=1,r=!1){let e=C?m:t;for(;n--;)e=N(e);if(!C)return e;var s=e.nodeType;if(r&&s!==3){var l=J();return e==null||e.before(l),P(l),l}return P(e),e}function or(t){t.textContent=""}function on(t){var n=T|g;u===null?n|=S:u.f|=Et;const r={children:null,ctx:f,deps:null,equals:yt,f:n,fn:t,reactions:null,v:null,version:0,parent:u};if(o!==null&&o.f&T){var e=o;(e.children??(e.children=[])).push(r)}return r}function ir(t){const n=on(t);return n.equals=wt,n}function Rt(t){var n=t.children;if(n!==null){t.children=null;for(var r=0;r<n.length;r+=1){var e=n[r];e.f&T?lt(e):q(e)}}}function St(t){var n,r=u;$(t.parent);try{Rt(t),n=Ht(t)}finally{$(r)}return n}function It(t){var n=St(t),r=(I||t.f&S)&&t.deps!==null?Y:p;y(t,r),t.equals(n)||(t.v=n,t.version=jt())}function lt(t){Rt(t),L(t,0),y(t,j),t.v=t.children=t.deps=t.ctx=t.reactions=null}function Dt(t){u===null&&o===null&&Qt(),o!==null&&o.f&S&&Jt(),at&&Xt()}function fn(t,n){var r=n.last;r===null?n.last=n.first=t:(r.next=t,t.prev=r,n.last=t)}function b(t,n,r,e=!0){var s=(t&Z)!==0,l=u,a={ctx:f,deps:null,deriveds:null,nodes_start:null,nodes_end:null,f:t|g,first:null,fn:n,last:null,next:null,parent:s?null:l,prev:null,teardown:null,transitions:null,version:0};if(r){var i=D;try{ct(!0),W(a),a.f|=Zt}catch(c){throw q(a),c}finally{ct(i)}}else n!==null&&X(a);var w=r&&a.deps===null&&a.first===null&&a.nodes_start===null&&a.teardown===null&&(a.f&Et)===0;if(!w&&!s&&e&&(l!==null&&fn(a,l),o!==null&&o.f&T)){var A=o;(A.children??(A.children=[])).push(a)}return a}function fr(t){const n=b(M,null,!1);return y(n,p),n.teardown=t,n}function _r(t){Dt();var n=u!==null&&(u.f&E)!==0&&f!==null&&!f.m;if(n){var r=f;(r.e??(r.e=[])).push({fn:t,effect:u,reaction:o})}else{var e=xt(t);return e}}function cr(t){return Dt(),_n(t)}function vr(t){const n=b(Z,t,!0);return()=>{q(n)}}function xt(t){return b(ht,t,!1)}function _n(t){return b(M,t,!0)}function pr(t){return cn(t)}function cn(t,n=0){return b(M|et|n,t,!0)}function hr(t,n=!0){return b(M|E,t,!0,n)}function Ot(t){var n=t.teardown;if(n!==null){const r=at,e=o;vt(!0),K(null);try{n.call(null)}finally{vt(r),K(e)}}}function Ct(t){var n=t.deriveds;if(n!==null){t.deriveds=null;for(var r=0;r<n.length;r+=1)lt(n[r])}}function Nt(t,n=!1){var r=t.first;for(t.first=t.last=null;r!==null;){var e=r.next;q(r,n),r=e}}function vn(t){for(var n=t.first;n!==null;){var r=n.next;n.f&E||q(n),n=r}}function q(t,n=!0){var r=!1;if((n||t.f&zt)&&t.nodes_start!==null){for(var e=t.nodes_start,s=t.nodes_end;e!==null;){var l=e===s?null:N(e);e.remove(),e=l}r=!0}Nt(t,n&&!r),Ct(t),L(t,0),y(t,j);var a=t.transitions;if(a!==null)for(const w of a)w.stop();Ot(t);var i=t.parent;i!==null&&i.first!==null&&bt(t),t.next=t.prev=t.teardown=t.ctx=t.deps=t.parent=t.fn=t.nodes_start=t.nodes_end=null}function bt(t){var n=t.parent,r=t.prev,e=t.next;r!==null&&(r.next=e),e!==null&&(e.prev=r),n!==null&&(n.first===t&&(n.first=e),n.last===t&&(n.last=r))}function dr(t,n){var r=[];qt(t,r,!0),pn(r,()=>{q(t),n&&n()})}function pn(t,n){var r=t.length;if(r>0){var e=()=>--r||n();for(var s of t)s.out(e)}else n()}function qt(t,n,r){if(!(t.f&O)){if(t.f^=O,t.transitions!==null)for(const a of t.transitions)(a.is_global||r)&&n.push(a);for(var e=t.first;e!==null;){var s=e.next,l=(e.f&dt)!==0||(e.f&E)!==0;qt(e,n,l?r:!1),e=s}}}function Er(t){Pt(t,!0)}function Pt(t,n){if(t.f&O){H(t)&&W(t),t.f^=O;for(var r=t.first;r!==null;){var e=r.next,s=(r.f&dt)!==0||(r.f&E)!==0;Pt(r,s?n:!1),r=e}if(t.transitions!==null)for(const l of t.transitions)(l.is_global||n)&&l.in()}}const hn=typeof requestIdleCallback>"u"?t=>setTimeout(t,1):requestIdleCallback;let V=!1,G=!1,tt=[],nt=[];function Ft(){V=!1;const t=tt.slice();tt=[],pt(t)}function Lt(){G=!1;const t=nt.slice();nt=[],pt(t)}function yr(t){V||(V=!0,queueMicrotask(Ft)),tt.push(t)}function wr(t){G||(G=!0,hn(Lt)),nt.push(t)}function dn(){V&&Ft(),G&&Lt()}const Mt=0,En=1;let B=Mt,F=!1,D=!1,at=!1;function ct(t){D=t}function vt(t){at=t}let R=[],x=0;let o=null;function K(t){o=t}let u=null;function $(t){u=t}let d=null;function yn(t){d=t}let _=null,h=0,k=null;function wn(t){k=t}let Yt=0,I=!1,f=null;function jt(){return++Yt}function ut(){return!z||f!==null&&f.l===null}function H(t){var a,i;var n=t.f;if(n&g)return!0;if(n&Y){var r=t.deps,e=(n&S)!==0;if(r!==null){var s;if(n&U){for(s=0;s<r.length;s++)((a=r[s]).reactions??(a.reactions=[])).push(t);t.f^=U}for(s=0;s<r.length;s++){var l=r[s];if(H(l)&&It(l),e&&u!==null&&!I&&!((i=l==null?void 0:l.reactions)!=null&&i.includes(t))&&(l.reactions??(l.reactions=[])).push(t),l.version>t.version)return!0}}e||y(t,p)}return!1}function Tn(t,n,r){throw t}function Ht(t){var ot;var n=_,r=h,e=k,s=o,l=I,a=d,i=f,w=t.f;_=null,h=0,k=null,o=w&(E|Z)?null:t,I=!D&&(w&S)!==0,d=null,f=t.ctx;try{var A=(0,t.fn)(),c=t.deps;if(_!==null){var v;if(L(t,h),c!==null&&h>0)for(c.length=h+_.length,v=0;v<_.length;v++)c[h+v]=_[v];else t.deps=c=_;if(!I)for(v=h;v<c.length;v++)((ot=c[v]).reactions??(ot.reactions=[])).push(t)}else c!==null&&h<c.length&&(L(t,h),c.length=h);return A}finally{_=n,h=r,k=e,o=s,I=l,d=a,f=i}}function mn(t,n){let r=n.reactions;if(r!==null){var e=r.indexOf(t);if(e!==-1){var s=r.length-1;s===0?r=n.reactions=null:(r[e]=r[s],r.pop())}}r===null&&n.f&T&&(_===null||!_.includes(n))&&(y(n,Y),n.f&(S|U)||(n.f^=U),L(n,0))}function L(t,n){var r=t.deps;if(r!==null)for(var e=n;e<r.length;e++)mn(t,r[e])}function W(t){var n=t.f;if(!(n&j)){y(t,p);var r=u;u=t;try{n&et?vn(t):Nt(t),Ct(t),Ot(t);var e=Ht(t);t.teardown=typeof e=="function"?e:null,t.version=Yt}catch(s){Tn(s)}finally{u=r}}}function Bt(){x>1e3&&(x=0,tn()),x++}function Ut(t){var n=t.length;if(n!==0){Bt();var r=D;D=!0;try{for(var e=0;e<n;e++){var s=t[e];s.f&p||(s.f^=p);var l=[];Vt(s,l),An(l)}}finally{D=r}}}function An(t){var n=t.length;if(n!==0)for(var r=0;r<n;r++){var e=t[r];!(e.f&(j|O))&&H(e)&&(W(e),e.deps===null&&e.first===null&&e.nodes_start===null&&(e.teardown===null?bt(e):e.fn=null))}}function kn(){if(F=!1,x>1001)return;const t=R;R=[],Ut(t),F||(x=0)}function X(t){B===Mt&&(F||(F=!0,queueMicrotask(kn)));for(var n=t;n.parent!==null;){n=n.parent;var r=n.f;if(r&(Z|E)){if(!(r&p))return;n.f^=p}}R.push(n)}function Vt(t,n){var r=t.first,e=[];t:for(;r!==null;){var s=r.f,l=(s&E)!==0,a=l&&(s&p)!==0;if(!a&&!(s&O))if(s&M){l?r.f^=p:H(r)&&W(r);var i=r.first;if(i!==null){r=i;continue}}else s&ht&&e.push(r);var w=r.next;if(w===null){let v=r.parent;for(;v!==null;){if(t===v)break t;var A=v.next;if(A!==null){r=A;continue t}v=v.parent}}r=w}for(var c=0;c<e.length;c++)i=e[c],n.push(i),Vt(i,n)}function Gt(t){var n=B,r=R;try{Bt();const s=[];B=En,R=s,F=!1,Ut(r);var e=t==null?void 0:t();return dn(),(R.length>0||s.length>0)&&Gt(),x=0,e}finally{B=n,R=r}}async function Tr(){await Promise.resolve(),Gt()}function mr(t){var i;var n=t.f,r=(n&T)!==0;if(r&&n&j){var e=St(t);return lt(t),e}if(o!==null){d!==null&&d.includes(t)&&nn();var s=o.deps;_===null&&s!==null&&s[h]===t?h++:_===null?_=[t]:_.push(t),k!==null&&u!==null&&u.f&p&&!(u.f&E)&&k.includes(t)&&(y(u,g),X(u))}else if(r&&t.deps===null){var l=t,a=l.parent;a!==null&&!((i=a.deriveds)!=null&&i.includes(l))&&(a.deriveds??(a.deriveds=[])).push(l)}return r&&(l=t,H(l)&&It(l)),t.v}function Ar(t){const n=o;try{return o=null,t()}finally{o=n}}const gn=~(g|Y|p);function y(t,n){t.f=t.f&gn|n}function kr(t,n=!1,r){f={p:f,c:null,e:null,m:!1,s:t,x:null,l:null},z&&!n&&(f.l={s:null,u:null,r1:[],r2:st(!1)})}function gr(t){const n=f;if(n!==null){t!==void 0&&(n.x=t);const a=n.e;if(a!==null){var r=u,e=o;n.e=null;try{for(var s=0;s<a.length;s++){var l=a[s];$(l.effect),K(l.reaction),xt(l.fn)}}finally{$(r),K(e)}}f=n.p,n.m=!0}return t||{}}function Rr(t){if(!(typeof t!="object"||!t||t instanceof EventTarget)){if(ft in t)rt(t);else if(!Array.isArray(t))for(let n in t){const r=t[n];typeof r=="object"&&r&&ft in r&&rt(r)}}}function rt(t,n=new Set){if(typeof t=="object"&&t!==null&&!(t instanceof EventTarget)&&!n.has(t)){n.add(t),t instanceof Date&&t.getTime();for(let e in t)try{rt(t[e],n)}catch{}const r=$t(t);if(r!==Object.prototype&&r!==Array.prototype&&r!==Map.prototype&&r!==Set.prototype&&r!==Date.prototype){const e=Kt(r);for(let s in e){const l=e[s].get;if(l)try{l.call(t)}catch{}}}}}export{Yn as $,bn as A,E as B,on as C,ir as D,dt as E,Zn as F,wt as G,an as H,Kn as I,Wn as J,Hn as K,Nn as L,On as M,q as N,kr as O,$n as P,ar as Q,Z as R,ft as S,gr as T,Qn as U,cr as V,_r as W,f as X,Cn as Y,pt as Z,Rr as _,xn as a,pr as a0,ur as a1,lr as a2,rr as a3,J as a4,Q as a5,Xn as a6,Jn as a7,In as a8,K as a9,yr as aA,Gt as aB,Tr as aC,Wt as aD,o as aa,sr as ab,ln as ac,N as ad,mt as ae,un as af,At as ag,Pn as ah,or as ai,Sn as aj,vr as ak,fr as al,O as am,sn as an,qt as ao,pn as ap,Vn as aq,Un as ar,Gn as as,Kt as at,wr as au,qn as av,ut as aw,_n as ax,jn as ay,xt as az,Ln as b,Bn as c,mr as d,u as e,Mn as f,it as g,$t as h,Rn as i,cn as j,hr as k,C as l,nr as m,er as n,Dn as o,dr as p,P as q,Er as r,st as s,tr as t,m as u,Fn as v,Ar as w,$ as x,z as y,zn as z};