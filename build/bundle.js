var app=function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function s(t){t.forEach(e)}function o(t){return"function"==typeof t}function i(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function c(e,n,s){e.$$.on_destroy.push(function(e,...n){if(null==e)return t;const s=e.subscribe(...n);return s.unsubscribe?()=>s.unsubscribe():s}(n,s))}function r(t,e,n,s){if(t){const o=l(t,e,n,s);return t[0](o)}}function l(t,e,n,s){return t[1]&&s?function(t,e){for(const n in e)t[n]=e[n];return t}(n.ctx.slice(),t[1](s(e))):n.ctx}function u(t,e,n,s,o,i,c){const r=function(t,e,n,s){if(t[2]&&s){const o=t[2](s(n));if(void 0===e.dirty)return o;if("object"==typeof o){const t=[],n=Math.max(e.dirty.length,o.length);for(let s=0;s<n;s+=1)t[s]=e.dirty[s]|o[s];return t}return e.dirty|o}return e.dirty}(e,s,o,i);if(r){const o=l(e,n,s,c);t.p(o,r)}}function a(t,e){t.appendChild(e)}function f(t,e,n){t.insertBefore(e,n||null)}function d(t){t.parentNode.removeChild(t)}function $(t){return document.createElement(t)}function p(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function h(t){return document.createTextNode(t)}function m(){return h(" ")}function v(t,e,n,s){return t.addEventListener(e,n,s),()=>t.removeEventListener(e,n,s)}function g(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function b(t){return""===t?null:+t}function y(t,e){t.value=null==e?"":e}function x(t,e,n){t.classList[n?"add":"remove"](e)}let w;function _(t){w=t}function O(){if(!w)throw new Error("Function called outside component initialization");return w}function k(t){O().$$.on_mount.push(t)}function C(){const t=O();return(e,n)=>{const s=t.$$.callbacks[e];if(s){const o=function(t,e){const n=document.createEvent("CustomEvent");return n.initCustomEvent(t,!1,!1,e),n}(e,n);s.slice().forEach((e=>{e.call(t,o)}))}}}function T(t){return O().$$.context.get(t)}const L=[],E=[],I=[],M=[],j=Promise.resolve();let z=!1;function q(){z||(z=!0,j.then(D))}function B(t){I.push(t)}function N(t){M.push(t)}let S=!1;const A=new Set;function D(){if(!S){S=!0;do{for(let t=0;t<L.length;t+=1){const e=L[t];_(e),P(e.$$)}for(_(null),L.length=0;E.length;)E.pop()();for(let t=0;t<I.length;t+=1){const e=I[t];A.has(e)||(A.add(e),e())}I.length=0}while(L.length);for(;M.length;)M.pop()();z=!1,S=!1,A.clear()}}function P(t){if(null!==t.fragment){t.update(),s(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(B)}}const W=new Set;let R;function V(){R={r:0,c:[],p:R}}function X(){R.r||s(R.c),R=R.p}function Y(t,e){t&&t.i&&(W.delete(t),t.i(e))}function H(t,e,n,s){if(t&&t.o){if(W.has(t))return;W.add(t),R.c.push((()=>{W.delete(t),s&&(n&&t.d(1),s())})),t.o(e)}}function U(t,e,n){const s=t.$$.props[e];void 0!==s&&(t.$$.bound[s]=n,n(t.$$.ctx[s]))}function F(t){t&&t.c()}function Z(t,n,i,c){const{fragment:r,on_mount:l,on_destroy:u,after_update:a}=t.$$;r&&r.m(n,i),c||B((()=>{const n=l.map(e).filter(o);u?u.push(...n):s(n),t.$$.on_mount=[]})),a.forEach(B)}function G(t,e){const n=t.$$;null!==n.fragment&&(s(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function J(e,o,i,c,r,l,u=[-1]){const a=w;_(e);const f=e.$$={fragment:null,ctx:null,props:l,update:t,not_equal:r,bound:n(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(a?a.$$.context:o.context||[]),callbacks:n(),dirty:u,skip_bound:!1};let $=!1;if(f.ctx=i?i(e,o.props||{},((t,n,...s)=>{const o=s.length?s[0]:n;return f.ctx&&r(f.ctx[t],f.ctx[t]=o)&&(!f.skip_bound&&f.bound[t]&&f.bound[t](o),$&&function(t,e){-1===t.$$.dirty[0]&&(L.push(t),q(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}(e,t)),n})):[],f.update(),$=!0,s(f.before_update),f.fragment=!!c&&c(f.ctx),o.target){if(o.hydrate){const t=function(t){return Array.from(t.childNodes)}(o.target);f.fragment&&f.fragment.l(t),t.forEach(d)}else f.fragment&&f.fragment.c();o.intro&&Y(e.$$.fragment),Z(e,o.target,o.anchor,o.customElement),D()}_(a)}class K{$destroy(){G(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}class Q{constructor(){this.worker=new Worker("build/worker.js")}async sendWasm(){await this.command("loadWasm",await Q.getWasm())}command(t,e){return new Promise(((n,s)=>{this.worker.onmessage=t=>n(t.data),this.worker.postMessage({action:t,data:e})}))}static async getWasm(){if(void 0===Q.wasm){const t=await fetch("build/generate.wasm");Q.wasm=await t.arrayBuffer()}return Q.wasm}terminate(){this.worker.terminate()}static async changeNumberOfThreads(t){for(;Q.all.length!=t;)if(Q.all.length<t){const t=new Q;await t.sendWasm(),Q.all.push(t)}else Q.all.pop().terminate()}}Q.all=[];class tt{constructor(t,e){this.x=t,this.y=e}copy(){return new tt(this.x,this.y)}}function et(e){let n,s;return{c(){n=p("svg"),s=p("path"),g(s,"d","M12,18V6A6,6 0 0,1 18,12A6,6 0 0,1 12,18M20,15.31L23.31,12L20,8.69V4H15.31L12,0.69L8.69,4H4V8.69L0.69,12L4,15.31V20H8.69L12,23.31L15.31,20H20V15.31Z"),g(s,"fill",e[2]),g(n,"width",e[0]),g(n,"height",e[1]),g(n,"viewBox",e[3])},m(t,e){f(t,n,e),a(n,s)},p(t,[e]){4&e&&g(s,"fill",t[2]),1&e&&g(n,"width",t[0]),2&e&&g(n,"height",t[1]),8&e&&g(n,"viewBox",t[3])},i:t,o:t,d(t){t&&d(n)}}}function nt(t,e,n){let{size:s="1em"}=e,{width:o=s}=e,{height:i=s}=e,{color:c="currentColor"}=e,{viewBox:r="0 0 24 24"}=e;return t.$$set=t=>{"size"in t&&n(4,s=t.size),"width"in t&&n(0,o=t.width),"height"in t&&n(1,i=t.height),"color"in t&&n(2,c=t.color),"viewBox"in t&&n(3,r=t.viewBox)},[o,i,c,r,s]}class st extends K{constructor(t){super(),J(this,t,nt,et,i,{size:4,width:0,height:1,color:2,viewBox:3})}}let ot=1;function it(){return"svelte-tabs-"+ot++}const ct=[];function rt(e,n=t){let s;const o=[];function c(t){if(i(e,t)&&(e=t,s)){const t=!ct.length;for(let t=0;t<o.length;t+=1){const n=o[t];n[1](),ct.push(n,e)}if(t){for(let t=0;t<ct.length;t+=2)ct[t][0](ct[t+1]);ct.length=0}}}return{set:c,update:function(t){c(t(e))},subscribe:function(i,r=t){const l=[i,r];return o.push(l),1===o.length&&(s=n(c)||t),i(e),()=>{const t=o.indexOf(l);-1!==t&&o.splice(t,1),0===o.length&&(s(),s=null)}}}}function lt(t){let e,n,s,o;const i=t[4].default,c=r(i,t,t[3],null);return{c(){e=$("div"),c&&c.c(),g(e,"class","svelte-tabs")},m(i,r){f(i,e,r),c&&c.m(e,null),n=!0,s||(o=v(e,"keydown",t[1]),s=!0)},p(t,[e]){c&&c.p&&(!n||8&e)&&u(c,i,t,t[3],e,null,null)},i(t){n||(Y(c,t),n=!0)},o(t){H(c,t),n=!1},d(t){t&&d(e),c&&c.d(t),s=!1,o()}}}const ut={};function at(t,e,n){let s,{$$slots:o={},$$scope:i}=e,{initialSelectedIndex:r=0}=e;const l=[],u=[],a=[],f=rt({}),d=rt({}),$=rt(null);c(t,$,(t=>n(5,s=t)));const p=rt(null);function h(t,e,n){var s;t.push(e),n.update((t=>t||e)),s=()=>function(t,e,n){const s=t.indexOf(e);t.splice(s,1),n.update((n=>n===e?t[s]||t[t.length-1]:n))}(t,e,n),O().$$.on_destroy.push(s)}function m(t){const e=u.indexOf(t);$.set(t),p.set(a[e])}var v,g,b;return v=ut,g={registerTab(t){h(u,t,$)},registerTabElement(t){l.push(t)},registerPanel(t){h(a,t,p)},selectTab:m,selectedTab:$,selectedPanel:p,controls:f,labeledBy:d},O().$$.context.set(v,g),k((()=>{m(u[r])})),b=()=>{for(let t=0;t<u.length;t++)f.update((e=>({...e,[u[t].id]:a[t].id}))),d.update((e=>({...e,[a[t].id]:u[t].id})))},O().$$.after_update.push(b),t.$$set=t=>{"initialSelectedIndex"in t&&n(2,r=t.initialSelectedIndex),"$$scope"in t&&n(3,i=t.$$scope)},[$,async function(t){if(t.target.classList.contains("svelte-tabs__tab")){let e=u.indexOf(s);switch(t.key){case"ArrowRight":e+=1,e>u.length-1&&(e=0),m(u[e]),l[e].focus();break;case"ArrowLeft":e-=1,e<0&&(e=u.length-1),m(u[e]),l[e].focus()}}},r,i,o]}class ft extends K{constructor(t){super(),J(this,t,at,lt,i,{initialSelectedIndex:2})}}function dt(t){let e,n,s,o,i,c;const l=t[9].default,a=r(l,t,t[8],null);return{c(){e=$("li"),a&&a.c(),g(e,"role","tab"),g(e,"id",t[3].id),g(e,"aria-controls",n=t[2][t[3].id]),g(e,"aria-selected",t[1]),g(e,"tabindex",s=t[1]?0:-1),g(e,"class","svelte-tabs__tab svelte-1fbofsd"),x(e,"svelte-tabs__selected",t[1])},m(n,s){f(n,e,s),a&&a.m(e,null),t[10](e),o=!0,i||(c=v(e,"click",t[11]),i=!0)},p(t,[i]){a&&a.p&&(!o||256&i)&&u(a,l,t,t[8],i,null,null),(!o||4&i&&n!==(n=t[2][t[3].id]))&&g(e,"aria-controls",n),(!o||2&i)&&g(e,"aria-selected",t[1]),(!o||2&i&&s!==(s=t[1]?0:-1))&&g(e,"tabindex",s),2&i&&x(e,"svelte-tabs__selected",t[1])},i(t){o||(Y(a,t),o=!0)},o(t){H(a,t),o=!1},d(n){n&&d(e),a&&a.d(n),t[10](null),i=!1,c()}}}function $t(t,e,n){let s,o,i,{$$slots:r={},$$scope:l}=e;const u={id:it()},{registerTab:a,registerTabElement:f,selectTab:d,selectedTab:$,controls:p}=T(ut);let h;c(t,$,(t=>n(7,s=t))),c(t,p,(t=>n(2,o=t))),a(u),k((async()=>{await(q(),j),f(i)}));return t.$$set=t=>{"$$scope"in t&&n(8,l=t.$$scope)},t.$$.update=()=>{128&t.$$.dirty&&n(1,h=s===u)},[i,h,o,u,d,$,p,s,l,r,function(t){E[t?"unshift":"push"]((()=>{i=t,n(0,i)}))},()=>d(u)]}class pt extends K{constructor(t){super(),J(this,t,$t,dt,i,{})}}function ht(t){let e,n;const s=t[1].default,o=r(s,t,t[0],null);return{c(){e=$("ul"),o&&o.c(),g(e,"role","tablist"),g(e,"class","svelte-tabs__tab-list svelte-12yby2a")},m(t,s){f(t,e,s),o&&o.m(e,null),n=!0},p(t,[e]){o&&o.p&&(!n||1&e)&&u(o,s,t,t[0],e,null,null)},i(t){n||(Y(o,t),n=!0)},o(t){H(o,t),n=!1},d(t){t&&d(e),o&&o.d(t)}}}function mt(t,e,n){let{$$slots:s={},$$scope:o}=e;return t.$$set=t=>{"$$scope"in t&&n(0,o=t.$$scope)},[o,s]}class vt extends K{constructor(t){super(),J(this,t,mt,ht,i,{})}}function gt(t){let e;const n=t[6].default,s=r(n,t,t[5],null);return{c(){s&&s.c()},m(t,n){s&&s.m(t,n),e=!0},p(t,o){s&&s.p&&(!e||32&o)&&u(s,n,t,t[5],o,null,null)},i(t){e||(Y(s,t),e=!0)},o(t){H(s,t),e=!1},d(t){s&&s.d(t)}}}function bt(t){let e,n,s,o=t[1]===t[2]&&gt(t);return{c(){e=$("div"),o&&o.c(),g(e,"id",t[2].id),g(e,"aria-labelledby",n=t[0][t[2].id]),g(e,"class","svelte-tabs__tab-panel svelte-epfyet"),g(e,"role","tabpanel")},m(t,n){f(t,e,n),o&&o.m(e,null),s=!0},p(t,[i]){t[1]===t[2]?o?(o.p(t,i),2&i&&Y(o,1)):(o=gt(t),o.c(),Y(o,1),o.m(e,null)):o&&(V(),H(o,1,1,(()=>{o=null})),X()),(!s||1&i&&n!==(n=t[0][t[2].id]))&&g(e,"aria-labelledby",n)},i(t){s||(Y(o),s=!0)},o(t){H(o),s=!1},d(t){t&&d(e),o&&o.d()}}}function yt(t,e,n){let s,o,{$$slots:i={},$$scope:r}=e;const l={id:it()},{registerPanel:u,selectedPanel:a,labeledBy:f}=T(ut);return c(t,a,(t=>n(1,o=t))),c(t,f,(t=>n(0,s=t))),u(l),t.$$set=t=>{"$$scope"in t&&n(5,r=t.$$scope)},[s,o,l,a,f,r,i]}class xt extends K{constructor(t){super(),J(this,t,yt,bt,i,{})}}function wt(t){let e;return{c(){e=h("Camera")},m(t,n){f(t,e,n)},d(t){t&&d(e)}}}function _t(t){let e;return{c(){e=h("Canvas")},m(t,n){f(t,e,n)},d(t){t&&d(e)}}}function Ot(t){let e;return{c(){e=h("Calculation")},m(t,n){f(t,e,n)},d(t){t&&d(e)}}}function kt(t){let e,n,s,o,i,c;return e=new pt({props:{$$slots:{default:[wt]},$$scope:{ctx:t}}}),s=new pt({props:{$$slots:{default:[_t]},$$scope:{ctx:t}}}),i=new pt({props:{$$slots:{default:[Ot]},$$scope:{ctx:t}}}),{c(){F(e.$$.fragment),n=m(),F(s.$$.fragment),o=m(),F(i.$$.fragment)},m(t,r){Z(e,t,r),f(t,n,r),Z(s,t,r),f(t,o,r),Z(i,t,r),c=!0},p(t,n){const o={};1048576&n&&(o.$$scope={dirty:n,ctx:t}),e.$set(o);const c={};1048576&n&&(c.$$scope={dirty:n,ctx:t}),s.$set(c);const r={};1048576&n&&(r.$$scope={dirty:n,ctx:t}),i.$set(r)},i(t){c||(Y(e.$$.fragment,t),Y(s.$$.fragment,t),Y(i.$$.fragment,t),c=!0)},o(t){H(e.$$.fragment,t),H(s.$$.fragment,t),H(i.$$.fragment,t),c=!1},d(t){G(e,t),t&&d(n),G(s,t),t&&d(o),G(i,t)}}}function Ct(t){let e,n,o,i,c,r,l,u,p,x,w,_,O,k,C;return{c(){e=$("div"),n=$("h2"),n.textContent="Center position",o=h("\n                ("),i=$("input"),c=h(",\n                "),r=$("input"),l=h(")"),u=m(),p=$("div"),x=$("h2"),x.textContent="Zoom",w=m(),_=$("input"),O=h("%"),g(n,"class","svelte-nren95"),g(i,"type","number"),g(i,"step","any"),g(i,"class","svelte-nren95"),g(r,"type","number"),g(r,"step","any"),g(r,"class","svelte-nren95"),g(e,"class","svelte-nren95"),g(x,"class","svelte-nren95"),g(_,"type","number"),g(_,"step","0.1"),g(_,"class","svelte-nren95"),g(p,"class","svelte-nren95")},m(s,d){f(s,e,d),a(e,n),a(e,o),a(e,i),y(i,t[2].x),a(e,c),a(e,r),y(r,t[2].y),a(e,l),f(s,u,d),f(s,p,d),a(p,x),a(p,w),a(p,_),y(_,t[3]),a(p,O),k||(C=[v(i,"input",t[9]),v(r,"input",t[10]),v(_,"input",t[11])],k=!0)},p(t,e){4&e&&b(i.value)!==t[2].x&&y(i,t[2].x),4&e&&b(r.value)!==t[2].y&&y(r,t[2].y),8&e&&b(_.value)!==t[3]&&y(_,t[3])},d(t){t&&d(e),t&&d(u),t&&d(p),k=!1,s(C)}}}function Tt(t){let e,n,o,i,c,r,l,u,p,x,w,_,O,k,C,T,L,E,I;return{c(){e=$("div"),n=$("h2"),n.textContent="Canvas size",o=m(),i=$("input"),c=h("\n                ×\n                "),r=$("input"),l=m(),u=$("div"),p=$("h2"),p.textContent="Color",x=m(),w=$("label"),_=$("input"),O=h("\n                    Color"),k=m(),C=$("label"),T=$("input"),L=h("\n                    Black & white"),g(n,"class","svelte-nren95"),g(i,"type","number"),g(i,"class","svelte-nren95"),g(r,"type","number"),g(r,"class","svelte-nren95"),g(e,"class","svelte-nren95"),g(p,"class","svelte-nren95"),g(_,"type","radio"),_.__value="true",_.value=_.__value,g(_,"class","svelte-nren95"),t[15][0].push(_),g(w,"class","svelte-nren95"),g(T,"type","radio"),T.__value="false",T.value=T.__value,g(T,"class","svelte-nren95"),t[15][0].push(T),g(C,"class","svelte-nren95"),g(u,"class","color-container svelte-nren95")},m(s,d){f(s,e,d),a(e,n),a(e,o),a(e,i),y(i,t[0]),a(e,c),a(e,r),y(r,t[1]),f(s,l,d),f(s,u,d),a(u,p),a(u,x),a(u,w),a(w,_),_.checked=_.__value===t[6],a(w,O),a(u,k),a(u,C),a(C,T),T.checked=T.__value===t[6],a(C,L),E||(I=[v(i,"input",t[12]),v(r,"input",t[13]),v(_,"change",t[14]),v(T,"change",t[16])],E=!0)},p(t,e){1&e&&b(i.value)!==t[0]&&y(i,t[0]),2&e&&b(r.value)!==t[1]&&y(r,t[1]),64&e&&(_.checked=_.__value===t[6]),64&e&&(T.checked=T.__value===t[6])},d(n){n&&d(e),n&&d(l),n&&d(u),t[15][0].splice(t[15][0].indexOf(_),1),t[15][0].splice(t[15][0].indexOf(T),1),E=!1,s(I)}}}function Lt(t){let e,n,o,i,c,r,l,u,p,h,x;return{c(){e=$("div"),n=$("h2"),n.textContent="Number of iterations",o=m(),i=$("input"),c=m(),r=$("div"),l=$("h2"),l.textContent="Number of threads",u=m(),p=$("input"),g(n,"class","svelte-nren95"),g(i,"type","number"),g(i,"class","svelte-nren95"),g(e,"class","svelte-nren95"),g(l,"class","svelte-nren95"),g(p,"type","number"),g(p,"class","svelte-nren95"),g(r,"class","svelte-nren95")},m(s,d){f(s,e,d),a(e,n),a(e,o),a(e,i),y(i,t[4]),f(s,c,d),f(s,r,d),a(r,l),a(r,u),a(r,p),y(p,t[5]),h||(x=[v(i,"input",t[17]),v(p,"input",t[18])],h=!0)},p(t,e){16&e&&b(i.value)!==t[4]&&y(i,t[4]),32&e&&b(p.value)!==t[5]&&y(p,t[5])},d(t){t&&d(e),t&&d(c),t&&d(r),h=!1,s(x)}}}function Et(t){let e,n,s,o,i,c,r,l;return e=new vt({props:{$$slots:{default:[kt]},$$scope:{ctx:t}}}),s=new xt({props:{$$slots:{default:[Ct]},$$scope:{ctx:t}}}),i=new xt({props:{$$slots:{default:[Tt]},$$scope:{ctx:t}}}),r=new xt({props:{$$slots:{default:[Lt]},$$scope:{ctx:t}}}),{c(){F(e.$$.fragment),n=m(),F(s.$$.fragment),o=m(),F(i.$$.fragment),c=m(),F(r.$$.fragment)},m(t,u){Z(e,t,u),f(t,n,u),Z(s,t,u),f(t,o,u),Z(i,t,u),f(t,c,u),Z(r,t,u),l=!0},p(t,n){const o={};1048576&n&&(o.$$scope={dirty:n,ctx:t}),e.$set(o);const c={};1048588&n&&(c.$$scope={dirty:n,ctx:t}),s.$set(c);const l={};1048643&n&&(l.$$scope={dirty:n,ctx:t}),i.$set(l);const u={};1048624&n&&(u.$$scope={dirty:n,ctx:t}),r.$set(u)},i(t){l||(Y(e.$$.fragment,t),Y(s.$$.fragment,t),Y(i.$$.fragment,t),Y(r.$$.fragment,t),l=!0)},o(t){H(e.$$.fragment,t),H(s.$$.fragment,t),H(i.$$.fragment,t),H(r.$$.fragment,t),l=!1},d(t){G(e,t),t&&d(n),G(s,t),t&&d(o),G(i,t),t&&d(c),G(r,t)}}}function It(t){let e,n,s,o,i,c,r;return n=new ft({props:{$$slots:{default:[Et]},$$scope:{ctx:t}}}),{c(){e=$("form"),F(n.$$.fragment),s=m(),o=$("input"),g(o,"type","submit"),o.value="Update",g(o,"class","svelte-nren95"),g(e,"class","svelte-nren95")},m(l,u){f(l,e,u),Z(n,e,null),a(e,s),a(e,o),i=!0,c||(r=v(e,"submit",t[7]),c=!0)},p(t,[e]){const s={};1048703&e&&(s.$$scope={dirty:e,ctx:t}),n.$set(s)},i(t){i||(Y(n.$$.fragment,t),i=!0)},o(t){H(n.$$.fragment,t),i=!1},d(t){t&&d(e),G(n),c=!1,r()}}}function Mt(t,e,n){let s=C();let{width:o}=e,{height:i}=e,{offset:c}=e,{zoom:r}=e,{color:l}=e,{numberOfIterations:u}=e,{numberOfThreads:a}=e,f="true";return t.$$set=t=>{"width"in t&&n(0,o=t.width),"height"in t&&n(1,i=t.height),"offset"in t&&n(2,c=t.offset),"zoom"in t&&n(3,r=t.zoom),"color"in t&&n(8,l=t.color),"numberOfIterations"in t&&n(4,u=t.numberOfIterations),"numberOfThreads"in t&&n(5,a=t.numberOfThreads)},t.$$.update=()=>{64&t.$$.dirty&&n(8,l="true"===f)},[o,i,c,r,u,a,f,function(t){t.preventDefault(),s("update")},l,function(){c.x=b(this.value),n(2,c)},function(){c.y=b(this.value),n(2,c)},function(){r=b(this.value),n(3,r)},function(){o=b(this.value),n(0,o)},function(){i=b(this.value),n(1,i)},function(){f=this.__value,n(6,f)},[[]],function(){f=this.__value,n(6,f)},function(){u=b(this.value),n(4,u)},function(){a=b(this.value),n(5,a)}]}class jt extends K{constructor(t){super(),J(this,t,Mt,It,i,{width:0,height:1,offset:2,zoom:3,color:8,numberOfIterations:4,numberOfThreads:5})}}function zt(e){let n,s;return{c(){n=$("div"),g(n,"style",s="--color: "+(e[0]?"#333":"#ccc")),g(n,"class","svelte-ghrpqq")},m(t,e){f(t,n,e)},p(t,[e]){1&e&&s!==(s="--color: "+(t[0]?"#333":"#ccc"))&&g(n,"style",s)},i:t,o:t,d(t){t&&d(n)}}}function qt(t,e,n){let{lightMode:s=!1}=e;return t.$$set=t=>{"lightMode"in t&&n(0,s=t.lightMode)},[s]}class Bt extends K{constructor(t){super(),J(this,t,qt,zt,i,{lightMode:0})}}function Nt(e){let n,s,o,i;return o=new Bt({props:{lightMode:"true"===localStorage.lightMode}}),{c(){n=$("div"),s=$("div"),F(o.$$.fragment),g(s,"class","spinner-container svelte-1j72xq8"),g(n,"class","overlay svelte-1j72xq8")},m(t,e){f(t,n,e),a(n,s),Z(o,s,null),i=!0},p:t,i(t){i||(Y(o.$$.fragment,t),i=!0)},o(t){H(o.$$.fragment,t),i=!1},d(t){t&&d(n),G(o)}}}function St(t){let e,n,o,i,c,r,l,u,p,b,x,w,_,O,k,C,T,L,I,M,j,z,q,B,S,A,D;function P(e){t[27](e)}function W(e){t[28](e)}function R(e){t[29](e)}function J(e){t[30](e)}function K(e){t[31](e)}function Q(e){t[32](e)}function tt(e){t[33](e)}l=new st({});let et={};void 0!==t[2]&&(et.width=t[2]),void 0!==t[3]&&(et.height=t[3]),void 0!==t[4]&&(et.offset=t[4]),void 0!==t[1]&&(et.zoom=t[1]),void 0!==t[5]&&(et.color=t[5]),void 0!==t[7]&&(et.numberOfThreads=t[7]),void 0!==t[6]&&(et.numberOfIterations=t[6]),k=new jt({props:et}),E.push((()=>U(k,"width",P))),E.push((()=>U(k,"height",W))),E.push((()=>U(k,"offset",R))),E.push((()=>U(k,"zoom",J))),E.push((()=>U(k,"color",K))),E.push((()=>U(k,"numberOfThreads",Q))),E.push((()=>U(k,"numberOfIterations",tt))),k.$on("update",t[20]);let nt=t[9]&&Nt();return{c(){e=$("h1"),e.textContent="Mandelbrot set generator",n=m(),o=$("span"),i=h(t[0]),c=m(),r=$("div"),F(l.$$.fragment),u=m(),p=$("div"),b=$("div"),x=$("canvas"),w=m(),_=$("input"),O=m(),F(k.$$.fragment),q=m(),nt&&nt.c(),B=h(""),g(e,"class","svelte-1j72xq8"),g(o,"class","version svelte-1j72xq8"),g(r,"class","icon-container svelte-1j72xq8"),g(x,"width",t[2]),g(x,"height",t[3]),g(x,"class","svelte-1j72xq8"),g(_,"type","range"),g(_,"min","-1"),g(_,"max","1"),g(_,"step","0.01"),g(_,"class","svelte-1j72xq8"),g(b,"class","container svelte-1j72xq8"),g(p,"class","main-container svelte-1j72xq8")},m(s,d){f(s,e,d),f(s,n,d),f(s,o,d),a(o,i),f(s,c,d),f(s,r,d),Z(l,r,null),f(s,u,d),f(s,p,d),a(p,b),a(b,x),t[22](x),a(b,w),a(b,_),y(_,t[10]),a(p,O),Z(k,p,null),f(s,q,d),nt&&nt.m(s,d),f(s,B,d),S=!0,A||(D=[v(r,"click",At),v(x,"mousedown",t[23]),v(x,"mousemove",t[24]),v(x,"mouseup",t[25]),v(x,"touchstart",t[17]),v(x,"touchmove",t[18]),v(x,"touchend",t[19]),v(_,"change",t[26]),v(_,"input",t[26]),v(_,"mousedown",t[11]),v(_,"touchstart",t[11],{passive:!0}),v(_,"input",t[12]),v(_,"change",t[13])],A=!0)},p(t,e){(!S||1&e[0])&&function(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}(i,t[0]),(!S||4&e[0])&&g(x,"width",t[2]),(!S||8&e[0])&&g(x,"height",t[3]),1024&e[0]&&y(_,t[10]);const n={};!C&&4&e[0]&&(C=!0,n.width=t[2],N((()=>C=!1))),!T&&8&e[0]&&(T=!0,n.height=t[3],N((()=>T=!1))),!L&&16&e[0]&&(L=!0,n.offset=t[4],N((()=>L=!1))),!I&&2&e[0]&&(I=!0,n.zoom=t[1],N((()=>I=!1))),!M&&32&e[0]&&(M=!0,n.color=t[5],N((()=>M=!1))),!j&&128&e[0]&&(j=!0,n.numberOfThreads=t[7],N((()=>j=!1))),!z&&64&e[0]&&(z=!0,n.numberOfIterations=t[6],N((()=>z=!1))),k.$set(n),t[9]?nt?(nt.p(t,e),512&e[0]&&Y(nt,1)):(nt=Nt(),nt.c(),Y(nt,1),nt.m(B.parentNode,B)):nt&&(V(),H(nt,1,1,(()=>{nt=null})),X())},i(t){S||(Y(l.$$.fragment,t),Y(k.$$.fragment,t),Y(nt),S=!0)},o(t){H(l.$$.fragment,t),H(k.$$.fragment,t),H(nt),S=!1},d(i){i&&d(e),i&&d(n),i&&d(o),i&&d(c),i&&d(r),G(l),i&&d(u),i&&d(p),t[22](null),G(k),i&&d(q),nt&&nt.d(i),i&&d(B),A=!1,s(D)}}}function At(){localStorage.lightMode=!document.body.classList.contains("light"),localStorage.lightMode&&document.body.classList.toggle("light")}function Dt(t,e,n){var s=this&&this.__awaiter||function(t,e,n,s){return new(n||(n=Promise))((function(o,i){function c(t){try{l(s.next(t))}catch(t){i(t)}}function r(t){try{l(s.throw(t))}catch(t){i(t)}}function l(t){var e;t.done?o(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(c,r)}l((s=s.apply(t,e||[])).next())}))};let o,i,c,r,l,u=300,a=300,f=new tt(0,0),d=50,$=100,p=navigator.hardwareConcurrency||1,h=!1,{version:m}=e,{test:v}=e,g=0;let y,x,w=!1,_=new Image;function O(t){w=!0,y=t,_.src=c.toDataURL(),x=f.copy()}function C(t){if(w){const e=new tt(t.x-y.x,t.y-y.y);r.clearRect(0,0,u,a),r.drawImage(_,e.x,e.y),n(4,f.x=x.x-e.x/u/o,f),n(4,f.y=x.y+e.y/a/o,f)}}function T(t){return s(this,void 0,void 0,(function*(){t&&C(t),w=!1,yield L()}))}function L(){return s(this,void 0,void 0,(function*(){n(9,h=!0);const t=yield async function(t,e,n,s,o,i,c,r){await Q.changeNumberOfThreads(c);let l=[];for(let r=0;r<Q.all.length;r++)l.push(Q.all[r].command("generate",[t,e,n,s.x,s.y,o,i,c,r]));const u=await Promise.all(l),a=new Uint8ClampedArray(t*e*4);for(let t=0;t<u.length;t++)a.set(u[t],u[0].length*t);return r&&await Q.changeNumberOfThreads(0),a}(u,a,o,f,i,$,p,v),e=new ImageData(t,u);r.putImageData(e,0,0),n(9,h=!1)}))}k((()=>s(void 0,void 0,void 0,(function*(){"true"===localStorage.lightMode&&document.body.classList.add("light"),setTimeout((()=>document.body.classList.add("loaded")),500),r=c.getContext("2d"),yield L()}))));return t.$$set=t=>{"version"in t&&n(0,m=t.version),"test"in t&&n(21,v=t.test)},t.$$.update=()=>{2&t.$$.dirty[0]&&(o=d/100)},[m,d,u,a,f,i,$,p,c,h,g,function(){l=d,_.src=c.toDataURL()},function(){const t=Math.pow(2,g);n(1,d=Number((t*l).toFixed(1))),r.clearRect(0,0,u,a),r.drawImage(_,(u-u*t)/2,(a-a*t)/2,u*t,a*t)},function(){return s(this,void 0,void 0,(function*(){n(10,g=0),yield L()}))},O,C,T,function(t){t.preventDefault(),O(new tt(t.touches[0].clientX,t.touches[0].clientY))},function(t){t.preventDefault(),C(new tt(t.touches[0].clientX,t.touches[0].clientY))},function(t){return s(this,void 0,void 0,(function*(){t.preventDefault(),yield T()}))},L,v,function(t){E[t?"unshift":"push"]((()=>{c=t,n(8,c)}))},t=>O(new tt(t.offsetX,t.offsetY)),t=>C(new tt(t.offsetX,t.offsetY)),t=>T(new tt(t.offsetX,t.offsetY)),function(){g=b(this.value),n(10,g)},function(t){u=t,n(2,u)},function(t){a=t,n(3,a)},function(t){f=t,n(4,f)},function(t){d=t,n(1,d)},function(t){i=t,n(5,i)},function(t){p=t,n(7,p)},function(t){$=t,n(6,$)}]}return new class extends K{constructor(t){super(),J(this,t,Dt,St,i,{version:0,test:21},[-1,-1])}}({target:document.body,props:{version:"1e22c0a",test:!1}})}();
//# sourceMappingURL=bundle.js.map
