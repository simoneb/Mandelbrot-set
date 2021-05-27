var app=function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function o(t){t.forEach(e)}function s(t){return"function"==typeof t}function r(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function i(e,n,o){e.$$.on_destroy.push(function(e,...n){if(null==e)return t;const o=e.subscribe(...n);return o.unsubscribe?()=>o.unsubscribe():o}(n,o))}function c(t,e,n,o){if(t){const s=l(t,e,n,o);return t[0](s)}}function l(t,e,n,o){return t[1]&&o?function(t,e){for(const n in e)t[n]=e[n];return t}(n.ctx.slice(),t[1](o(e))):n.ctx}function u(t,e,n,o,s,r,i){const c=function(t,e,n,o){if(t[2]&&o){const s=t[2](o(n));if(void 0===e.dirty)return s;if("object"==typeof s){const t=[],n=Math.max(e.dirty.length,s.length);for(let o=0;o<n;o+=1)t[o]=e.dirty[o]|s[o];return t}return e.dirty|s}return e.dirty}(e,o,s,r);if(c){const s=l(e,n,o,i);t.p(s,c)}}function a(t,e){t.appendChild(e)}function f(t,e,n){t.insertBefore(e,n||null)}function d(t){t.parentNode.removeChild(t)}function $(t){return document.createElement(t)}function p(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function h(t){return document.createTextNode(t)}function m(){return h(" ")}function g(t,e,n,o){return t.addEventListener(e,n,o),()=>t.removeEventListener(e,n,o)}function v(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function b(t){return""===t?null:+t}function y(t,e){t.value=null==e?"":e}function w(t,e,n){t.classList[n?"add":"remove"](e)}let x;function _(t){x=t}function k(){if(!x)throw new Error("Function called outside component initialization");return x}function O(t){k().$$.on_mount.push(t)}function T(){const t=k();return(e,n)=>{const o=t.$$.callbacks[e];if(o){const s=function(t,e){const n=document.createEvent("CustomEvent");return n.initCustomEvent(t,!1,!1,e),n}(e,n);o.slice().forEach((e=>{e.call(t,s)}))}}}function C(t){return k().$$.context.get(t)}const q=[],L=[],E=[],j=[],I=Promise.resolve();let M=!1;function z(){M||(M=!0,I.then(D))}function S(t){E.push(t)}function B(t){j.push(t)}let N=!1;const A=new Set;function D(){if(!N){N=!0;do{for(let t=0;t<q.length;t+=1){const e=q[t];_(e),P(e.$$)}for(_(null),q.length=0;L.length;)L.pop()();for(let t=0;t<E.length;t+=1){const e=E[t];A.has(e)||(A.add(e),e())}E.length=0}while(q.length);for(;j.length;)j.pop()();M=!1,N=!1,A.clear()}}function P(t){if(null!==t.fragment){t.update(),o(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(S)}}const R=new Set;let W;function V(){W={r:0,c:[],p:W}}function X(){W.r||o(W.c),W=W.p}function Y(t,e){t&&t.i&&(R.delete(t),t.i(e))}function H(t,e,n,o){if(t&&t.o){if(R.has(t))return;R.add(t),W.c.push((()=>{R.delete(t),o&&(n&&t.d(1),o())})),t.o(e)}}function U(t,e,n){const o=t.$$.props[e];void 0!==o&&(t.$$.bound[o]=n,n(t.$$.ctx[o]))}function F(t){t&&t.c()}function Z(t,n,r,i){const{fragment:c,on_mount:l,on_destroy:u,after_update:a}=t.$$;c&&c.m(n,r),i||S((()=>{const n=l.map(e).filter(s);u?u.push(...n):o(n),t.$$.on_mount=[]})),a.forEach(S)}function G(t,e){const n=t.$$;null!==n.fragment&&(o(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function J(e,s,r,i,c,l,u=[-1]){const a=x;_(e);const f=e.$$={fragment:null,ctx:null,props:l,update:t,not_equal:c,bound:n(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(a?a.$$.context:s.context||[]),callbacks:n(),dirty:u,skip_bound:!1};let $=!1;if(f.ctx=r?r(e,s.props||{},((t,n,...o)=>{const s=o.length?o[0]:n;return f.ctx&&c(f.ctx[t],f.ctx[t]=s)&&(!f.skip_bound&&f.bound[t]&&f.bound[t](s),$&&function(t,e){-1===t.$$.dirty[0]&&(q.push(t),z(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}(e,t)),n})):[],f.update(),$=!0,o(f.before_update),f.fragment=!!i&&i(f.ctx),s.target){if(s.hydrate){const t=function(t){return Array.from(t.childNodes)}(s.target);f.fragment&&f.fragment.l(t),t.forEach(d)}else f.fragment&&f.fragment.c();s.intro&&Y(e.$$.fragment),Z(e,s.target,s.anchor,s.customElement),D()}_(a)}class K{$destroy(){G(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}var Q="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function tt(t){throw new Error('Could not dynamically require "'+t+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}function et(t){let e={};if(void 0!==e)for(let n in t.require)e[n]=tt(t.require[n]);return t.run(e)}var nt=function(t){return!0!==Q.testing?et(t.browser):et(t.node)};class ot{constructor(){this.worker=nt({browser:{run:()=>new Worker("build/worker.js")},node:{run:()=>new Worker("public/build/worker.js")}})}async sendWasm(){await this.command("loadWasm",await ot.getWasm())}command(t,e){return new Promise(((n,o)=>{this.worker.onmessage=t=>n(t.data),this.worker.postMessage({action:t,data:e})}))}static async getWasm(){return void 0===ot.wasm&&(ot.wasm=await nt({browser:{run:async()=>{const t=await fetch("build/generate.wasm");return await t.arrayBuffer()}},node:{require:{fs:"fs"},run:async t=>t.fs.readFileSync("public/build/generate.wasm")}})),ot.wasm}terminate(){this.worker.terminate()}static async changeNumberOfThreads(t){for(;ot.all.length!=t;)if(ot.all.length<t){const t=new ot;await t.sendWasm(),ot.all.push(t)}else ot.all.pop().terminate()}}ot.all=[];class st{constructor(t,e){this.x=t,this.y=e}copy(){return new st(this.x,this.y)}}function rt(e){let n,o;return{c(){n=p("svg"),o=p("path"),v(o,"d","M12,18V6A6,6 0 0,1 18,12A6,6 0 0,1 12,18M20,15.31L23.31,12L20,8.69V4H15.31L12,0.69L8.69,4H4V8.69L0.69,12L4,15.31V20H8.69L12,23.31L15.31,20H20V15.31Z"),v(o,"fill",e[2]),v(n,"width",e[0]),v(n,"height",e[1]),v(n,"viewBox",e[3])},m(t,e){f(t,n,e),a(n,o)},p(t,[e]){4&e&&v(o,"fill",t[2]),1&e&&v(n,"width",t[0]),2&e&&v(n,"height",t[1]),8&e&&v(n,"viewBox",t[3])},i:t,o:t,d(t){t&&d(n)}}}function it(t,e,n){let{size:o="1em"}=e,{width:s=o}=e,{height:r=o}=e,{color:i="currentColor"}=e,{viewBox:c="0 0 24 24"}=e;return t.$$set=t=>{"size"in t&&n(4,o=t.size),"width"in t&&n(0,s=t.width),"height"in t&&n(1,r=t.height),"color"in t&&n(2,i=t.color),"viewBox"in t&&n(3,c=t.viewBox)},[s,r,i,c,o]}class ct extends K{constructor(t){super(),J(this,t,it,rt,r,{size:4,width:0,height:1,color:2,viewBox:3})}}let lt=1;function ut(){return"svelte-tabs-"+lt++}const at=[];function ft(e,n=t){let o;const s=[];function i(t){if(r(e,t)&&(e=t,o)){const t=!at.length;for(let t=0;t<s.length;t+=1){const n=s[t];n[1](),at.push(n,e)}if(t){for(let t=0;t<at.length;t+=2)at[t][0](at[t+1]);at.length=0}}}return{set:i,update:function(t){i(t(e))},subscribe:function(r,c=t){const l=[r,c];return s.push(l),1===s.length&&(o=n(i)||t),r(e),()=>{const t=s.indexOf(l);-1!==t&&s.splice(t,1),0===s.length&&(o(),o=null)}}}}function dt(t){let e,n,o,s;const r=t[4].default,i=c(r,t,t[3],null);return{c(){e=$("div"),i&&i.c(),v(e,"class","svelte-tabs")},m(r,c){f(r,e,c),i&&i.m(e,null),n=!0,o||(s=g(e,"keydown",t[1]),o=!0)},p(t,[e]){i&&i.p&&(!n||8&e)&&u(i,r,t,t[3],e,null,null)},i(t){n||(Y(i,t),n=!0)},o(t){H(i,t),n=!1},d(t){t&&d(e),i&&i.d(t),o=!1,s()}}}const $t={};function pt(t,e,n){let o,{$$slots:s={},$$scope:r}=e,{initialSelectedIndex:c=0}=e;const l=[],u=[],a=[],f=ft({}),d=ft({}),$=ft(null);i(t,$,(t=>n(5,o=t)));const p=ft(null);function h(t,e,n){var o;t.push(e),n.update((t=>t||e)),o=()=>function(t,e,n){const o=t.indexOf(e);t.splice(o,1),n.update((n=>n===e?t[o]||t[t.length-1]:n))}(t,e,n),k().$$.on_destroy.push(o)}function m(t){const e=u.indexOf(t);$.set(t),p.set(a[e])}var g,v,b;return g=$t,v={registerTab(t){h(u,t,$)},registerTabElement(t){l.push(t)},registerPanel(t){h(a,t,p)},selectTab:m,selectedTab:$,selectedPanel:p,controls:f,labeledBy:d},k().$$.context.set(g,v),O((()=>{m(u[c])})),b=()=>{for(let t=0;t<u.length;t++)f.update((e=>({...e,[u[t].id]:a[t].id}))),d.update((e=>({...e,[a[t].id]:u[t].id})))},k().$$.after_update.push(b),t.$$set=t=>{"initialSelectedIndex"in t&&n(2,c=t.initialSelectedIndex),"$$scope"in t&&n(3,r=t.$$scope)},[$,async function(t){if(t.target.classList.contains("svelte-tabs__tab")){let e=u.indexOf(o);switch(t.key){case"ArrowRight":e+=1,e>u.length-1&&(e=0),m(u[e]),l[e].focus();break;case"ArrowLeft":e-=1,e<0&&(e=u.length-1),m(u[e]),l[e].focus()}}},c,r,s]}class ht extends K{constructor(t){super(),J(this,t,pt,dt,r,{initialSelectedIndex:2})}}function mt(t){let e,n,o,s,r,i;const l=t[9].default,a=c(l,t,t[8],null);return{c(){e=$("li"),a&&a.c(),v(e,"role","tab"),v(e,"id",t[3].id),v(e,"aria-controls",n=t[2][t[3].id]),v(e,"aria-selected",t[1]),v(e,"tabindex",o=t[1]?0:-1),v(e,"class","svelte-tabs__tab svelte-1fbofsd"),w(e,"svelte-tabs__selected",t[1])},m(n,o){f(n,e,o),a&&a.m(e,null),t[10](e),s=!0,r||(i=g(e,"click",t[11]),r=!0)},p(t,[r]){a&&a.p&&(!s||256&r)&&u(a,l,t,t[8],r,null,null),(!s||4&r&&n!==(n=t[2][t[3].id]))&&v(e,"aria-controls",n),(!s||2&r)&&v(e,"aria-selected",t[1]),(!s||2&r&&o!==(o=t[1]?0:-1))&&v(e,"tabindex",o),2&r&&w(e,"svelte-tabs__selected",t[1])},i(t){s||(Y(a,t),s=!0)},o(t){H(a,t),s=!1},d(n){n&&d(e),a&&a.d(n),t[10](null),r=!1,i()}}}function gt(t,e,n){let o,s,r,{$$slots:c={},$$scope:l}=e;const u={id:ut()},{registerTab:a,registerTabElement:f,selectTab:d,selectedTab:$,controls:p}=C($t);let h;i(t,$,(t=>n(7,o=t))),i(t,p,(t=>n(2,s=t))),a(u),O((async()=>{await(z(),I),f(r)}));return t.$$set=t=>{"$$scope"in t&&n(8,l=t.$$scope)},t.$$.update=()=>{128&t.$$.dirty&&n(1,h=o===u)},[r,h,s,u,d,$,p,o,l,c,function(t){L[t?"unshift":"push"]((()=>{r=t,n(0,r)}))},()=>d(u)]}class vt extends K{constructor(t){super(),J(this,t,gt,mt,r,{})}}function bt(t){let e,n;const o=t[1].default,s=c(o,t,t[0],null);return{c(){e=$("ul"),s&&s.c(),v(e,"role","tablist"),v(e,"class","svelte-tabs__tab-list svelte-12yby2a")},m(t,o){f(t,e,o),s&&s.m(e,null),n=!0},p(t,[e]){s&&s.p&&(!n||1&e)&&u(s,o,t,t[0],e,null,null)},i(t){n||(Y(s,t),n=!0)},o(t){H(s,t),n=!1},d(t){t&&d(e),s&&s.d(t)}}}function yt(t,e,n){let{$$slots:o={},$$scope:s}=e;return t.$$set=t=>{"$$scope"in t&&n(0,s=t.$$scope)},[s,o]}class wt extends K{constructor(t){super(),J(this,t,yt,bt,r,{})}}function xt(t){let e;const n=t[6].default,o=c(n,t,t[5],null);return{c(){o&&o.c()},m(t,n){o&&o.m(t,n),e=!0},p(t,s){o&&o.p&&(!e||32&s)&&u(o,n,t,t[5],s,null,null)},i(t){e||(Y(o,t),e=!0)},o(t){H(o,t),e=!1},d(t){o&&o.d(t)}}}function _t(t){let e,n,o,s=t[1]===t[2]&&xt(t);return{c(){e=$("div"),s&&s.c(),v(e,"id",t[2].id),v(e,"aria-labelledby",n=t[0][t[2].id]),v(e,"class","svelte-tabs__tab-panel svelte-epfyet"),v(e,"role","tabpanel")},m(t,n){f(t,e,n),s&&s.m(e,null),o=!0},p(t,[r]){t[1]===t[2]?s?(s.p(t,r),2&r&&Y(s,1)):(s=xt(t),s.c(),Y(s,1),s.m(e,null)):s&&(V(),H(s,1,1,(()=>{s=null})),X()),(!o||1&r&&n!==(n=t[0][t[2].id]))&&v(e,"aria-labelledby",n)},i(t){o||(Y(s),o=!0)},o(t){H(s),o=!1},d(t){t&&d(e),s&&s.d()}}}function kt(t,e,n){let o,s,{$$slots:r={},$$scope:c}=e;const l={id:ut()},{registerPanel:u,selectedPanel:a,labeledBy:f}=C($t);return i(t,a,(t=>n(1,s=t))),i(t,f,(t=>n(0,o=t))),u(l),t.$$set=t=>{"$$scope"in t&&n(5,c=t.$$scope)},[o,s,l,a,f,c,r]}class Ot extends K{constructor(t){super(),J(this,t,kt,_t,r,{})}}function Tt(t){let e;return{c(){e=h("Camera")},m(t,n){f(t,e,n)},d(t){t&&d(e)}}}function Ct(t){let e;return{c(){e=h("Canvas")},m(t,n){f(t,e,n)},d(t){t&&d(e)}}}function qt(t){let e;return{c(){e=h("Calculation")},m(t,n){f(t,e,n)},d(t){t&&d(e)}}}function Lt(t){let e,n,o,s,r,i;return e=new vt({props:{$$slots:{default:[Tt]},$$scope:{ctx:t}}}),o=new vt({props:{$$slots:{default:[Ct]},$$scope:{ctx:t}}}),r=new vt({props:{$$slots:{default:[qt]},$$scope:{ctx:t}}}),{c(){F(e.$$.fragment),n=m(),F(o.$$.fragment),s=m(),F(r.$$.fragment)},m(t,c){Z(e,t,c),f(t,n,c),Z(o,t,c),f(t,s,c),Z(r,t,c),i=!0},p(t,n){const s={};1048576&n&&(s.$$scope={dirty:n,ctx:t}),e.$set(s);const i={};1048576&n&&(i.$$scope={dirty:n,ctx:t}),o.$set(i);const c={};1048576&n&&(c.$$scope={dirty:n,ctx:t}),r.$set(c)},i(t){i||(Y(e.$$.fragment,t),Y(o.$$.fragment,t),Y(r.$$.fragment,t),i=!0)},o(t){H(e.$$.fragment,t),H(o.$$.fragment,t),H(r.$$.fragment,t),i=!1},d(t){G(e,t),t&&d(n),G(o,t),t&&d(s),G(r,t)}}}function Et(t){let e,n,s,r,i,c,l,u,p,w,x,_,k,O,T;return{c(){e=$("div"),n=$("h2"),n.textContent="Center position",s=h("\n                ("),r=$("input"),i=h(",\n                "),c=$("input"),l=h(")"),u=m(),p=$("div"),w=$("h2"),w.textContent="Zoom",x=m(),_=$("input"),k=h("%"),v(n,"class","svelte-nren95"),v(r,"type","number"),v(r,"step","any"),v(r,"class","svelte-nren95"),v(c,"type","number"),v(c,"step","any"),v(c,"class","svelte-nren95"),v(e,"class","svelte-nren95"),v(w,"class","svelte-nren95"),v(_,"type","number"),v(_,"step","0.1"),v(_,"class","svelte-nren95"),v(p,"class","svelte-nren95")},m(o,d){f(o,e,d),a(e,n),a(e,s),a(e,r),y(r,t[2].x),a(e,i),a(e,c),y(c,t[2].y),a(e,l),f(o,u,d),f(o,p,d),a(p,w),a(p,x),a(p,_),y(_,t[3]),a(p,k),O||(T=[g(r,"input",t[9]),g(c,"input",t[10]),g(_,"input",t[11])],O=!0)},p(t,e){4&e&&b(r.value)!==t[2].x&&y(r,t[2].x),4&e&&b(c.value)!==t[2].y&&y(c,t[2].y),8&e&&b(_.value)!==t[3]&&y(_,t[3])},d(t){t&&d(e),t&&d(u),t&&d(p),O=!1,o(T)}}}function jt(t){let e,n,s,r,i,c,l,u,p,w,x,_,k,O,T,C,q,L,E;return{c(){e=$("div"),n=$("h2"),n.textContent="Canvas size",s=m(),r=$("input"),i=h("\n                ×\n                "),c=$("input"),l=m(),u=$("div"),p=$("h2"),p.textContent="Color",w=m(),x=$("label"),_=$("input"),k=h("\n                    Color"),O=m(),T=$("label"),C=$("input"),q=h("\n                    Black & white"),v(n,"class","svelte-nren95"),v(r,"type","number"),v(r,"class","svelte-nren95"),v(c,"type","number"),v(c,"class","svelte-nren95"),v(e,"class","svelte-nren95"),v(p,"class","svelte-nren95"),v(_,"type","radio"),_.__value="true",_.value=_.__value,v(_,"class","svelte-nren95"),t[15][0].push(_),v(x,"class","svelte-nren95"),v(C,"type","radio"),C.__value="false",C.value=C.__value,v(C,"class","svelte-nren95"),t[15][0].push(C),v(T,"class","svelte-nren95"),v(u,"class","color-container svelte-nren95")},m(o,d){f(o,e,d),a(e,n),a(e,s),a(e,r),y(r,t[0]),a(e,i),a(e,c),y(c,t[1]),f(o,l,d),f(o,u,d),a(u,p),a(u,w),a(u,x),a(x,_),_.checked=_.__value===t[6],a(x,k),a(u,O),a(u,T),a(T,C),C.checked=C.__value===t[6],a(T,q),L||(E=[g(r,"input",t[12]),g(c,"input",t[13]),g(_,"change",t[14]),g(C,"change",t[16])],L=!0)},p(t,e){1&e&&b(r.value)!==t[0]&&y(r,t[0]),2&e&&b(c.value)!==t[1]&&y(c,t[1]),64&e&&(_.checked=_.__value===t[6]),64&e&&(C.checked=C.__value===t[6])},d(n){n&&d(e),n&&d(l),n&&d(u),t[15][0].splice(t[15][0].indexOf(_),1),t[15][0].splice(t[15][0].indexOf(C),1),L=!1,o(E)}}}function It(t){let e,n,s,r,i,c,l,u,p,h,w;return{c(){e=$("div"),n=$("h2"),n.textContent="Number of iterations",s=m(),r=$("input"),i=m(),c=$("div"),l=$("h2"),l.textContent="Number of threads",u=m(),p=$("input"),v(n,"class","svelte-nren95"),v(r,"type","number"),v(r,"class","svelte-nren95"),v(e,"class","svelte-nren95"),v(l,"class","svelte-nren95"),v(p,"type","number"),v(p,"class","svelte-nren95"),v(c,"class","svelte-nren95")},m(o,d){f(o,e,d),a(e,n),a(e,s),a(e,r),y(r,t[4]),f(o,i,d),f(o,c,d),a(c,l),a(c,u),a(c,p),y(p,t[5]),h||(w=[g(r,"input",t[17]),g(p,"input",t[18])],h=!0)},p(t,e){16&e&&b(r.value)!==t[4]&&y(r,t[4]),32&e&&b(p.value)!==t[5]&&y(p,t[5])},d(t){t&&d(e),t&&d(i),t&&d(c),h=!1,o(w)}}}function Mt(t){let e,n,o,s,r,i,c,l;return e=new wt({props:{$$slots:{default:[Lt]},$$scope:{ctx:t}}}),o=new Ot({props:{$$slots:{default:[Et]},$$scope:{ctx:t}}}),r=new Ot({props:{$$slots:{default:[jt]},$$scope:{ctx:t}}}),c=new Ot({props:{$$slots:{default:[It]},$$scope:{ctx:t}}}),{c(){F(e.$$.fragment),n=m(),F(o.$$.fragment),s=m(),F(r.$$.fragment),i=m(),F(c.$$.fragment)},m(t,u){Z(e,t,u),f(t,n,u),Z(o,t,u),f(t,s,u),Z(r,t,u),f(t,i,u),Z(c,t,u),l=!0},p(t,n){const s={};1048576&n&&(s.$$scope={dirty:n,ctx:t}),e.$set(s);const i={};1048588&n&&(i.$$scope={dirty:n,ctx:t}),o.$set(i);const l={};1048643&n&&(l.$$scope={dirty:n,ctx:t}),r.$set(l);const u={};1048624&n&&(u.$$scope={dirty:n,ctx:t}),c.$set(u)},i(t){l||(Y(e.$$.fragment,t),Y(o.$$.fragment,t),Y(r.$$.fragment,t),Y(c.$$.fragment,t),l=!0)},o(t){H(e.$$.fragment,t),H(o.$$.fragment,t),H(r.$$.fragment,t),H(c.$$.fragment,t),l=!1},d(t){G(e,t),t&&d(n),G(o,t),t&&d(s),G(r,t),t&&d(i),G(c,t)}}}function zt(t){let e,n,o,s,r,i,c;return n=new ht({props:{$$slots:{default:[Mt]},$$scope:{ctx:t}}}),{c(){e=$("form"),F(n.$$.fragment),o=m(),s=$("input"),v(s,"type","submit"),s.value="Update",v(s,"class","svelte-nren95"),v(e,"class","svelte-nren95")},m(l,u){f(l,e,u),Z(n,e,null),a(e,o),a(e,s),r=!0,i||(c=g(e,"submit",t[7]),i=!0)},p(t,[e]){const o={};1048703&e&&(o.$$scope={dirty:e,ctx:t}),n.$set(o)},i(t){r||(Y(n.$$.fragment,t),r=!0)},o(t){H(n.$$.fragment,t),r=!1},d(t){t&&d(e),G(n),i=!1,c()}}}function St(t,e,n){let o=T();let{width:s}=e,{height:r}=e,{offset:i}=e,{zoom:c}=e,{color:l}=e,{numberOfIterations:u}=e,{numberOfThreads:a}=e,f="true";return t.$$set=t=>{"width"in t&&n(0,s=t.width),"height"in t&&n(1,r=t.height),"offset"in t&&n(2,i=t.offset),"zoom"in t&&n(3,c=t.zoom),"color"in t&&n(8,l=t.color),"numberOfIterations"in t&&n(4,u=t.numberOfIterations),"numberOfThreads"in t&&n(5,a=t.numberOfThreads)},t.$$.update=()=>{64&t.$$.dirty&&n(8,l="true"===f)},[s,r,i,c,u,a,f,function(t){t.preventDefault(),o("update")},l,function(){i.x=b(this.value),n(2,i)},function(){i.y=b(this.value),n(2,i)},function(){c=b(this.value),n(3,c)},function(){s=b(this.value),n(0,s)},function(){r=b(this.value),n(1,r)},function(){f=this.__value,n(6,f)},[[]],function(){f=this.__value,n(6,f)},function(){u=b(this.value),n(4,u)},function(){a=b(this.value),n(5,a)}]}class Bt extends K{constructor(t){super(),J(this,t,St,zt,r,{width:0,height:1,offset:2,zoom:3,color:8,numberOfIterations:4,numberOfThreads:5})}}function Nt(e){let n,o;return{c(){n=$("div"),v(n,"style",o="--color: "+(e[0]?"#333":"#ccc")),v(n,"class","svelte-ghrpqq")},m(t,e){f(t,n,e)},p(t,[e]){1&e&&o!==(o="--color: "+(t[0]?"#333":"#ccc"))&&v(n,"style",o)},i:t,o:t,d(t){t&&d(n)}}}function At(t,e,n){let{lightMode:o=!1}=e;return t.$$set=t=>{"lightMode"in t&&n(0,o=t.lightMode)},[o]}class Dt extends K{constructor(t){super(),J(this,t,At,Nt,r,{lightMode:0})}}function Pt(e){let n,o,s,r;return s=new Dt({props:{lightMode:"true"===localStorage.lightMode}}),{c(){n=$("div"),o=$("div"),F(s.$$.fragment),v(o,"class","spinner-container svelte-1j72xq8"),v(n,"class","overlay svelte-1j72xq8")},m(t,e){f(t,n,e),a(n,o),Z(s,o,null),r=!0},p:t,i(t){r||(Y(s.$$.fragment,t),r=!0)},o(t){H(s.$$.fragment,t),r=!1},d(t){t&&d(n),G(s)}}}function Rt(t){let e,n,s,r,i,c,l,u,p,b,w,x,_,k,O,T,C,q,E,j,I,M,z,S,N,A,D;function P(e){t[27](e)}function R(e){t[28](e)}function W(e){t[29](e)}function J(e){t[30](e)}function K(e){t[31](e)}function Q(e){t[32](e)}function tt(e){t[33](e)}l=new ct({});let et={};void 0!==t[2]&&(et.width=t[2]),void 0!==t[3]&&(et.height=t[3]),void 0!==t[4]&&(et.offset=t[4]),void 0!==t[1]&&(et.zoom=t[1]),void 0!==t[5]&&(et.color=t[5]),void 0!==t[7]&&(et.numberOfThreads=t[7]),void 0!==t[6]&&(et.numberOfIterations=t[6]),O=new Bt({props:et}),L.push((()=>U(O,"width",P))),L.push((()=>U(O,"height",R))),L.push((()=>U(O,"offset",W))),L.push((()=>U(O,"zoom",J))),L.push((()=>U(O,"color",K))),L.push((()=>U(O,"numberOfThreads",Q))),L.push((()=>U(O,"numberOfIterations",tt))),O.$on("update",t[20]);let nt=t[9]&&Pt();return{c(){e=$("h1"),e.textContent="Mandelbrot set generator",n=m(),s=$("span"),r=h(t[0]),i=m(),c=$("div"),F(l.$$.fragment),u=m(),p=$("div"),b=$("div"),w=$("canvas"),x=m(),_=$("input"),k=m(),F(O.$$.fragment),z=m(),nt&&nt.c(),S=h(""),v(e,"class","svelte-1j72xq8"),v(s,"class","version svelte-1j72xq8"),v(c,"class","icon-container svelte-1j72xq8"),v(w,"width",t[2]),v(w,"height",t[3]),v(w,"class","svelte-1j72xq8"),v(_,"type","range"),v(_,"min","-1"),v(_,"max","1"),v(_,"step","0.01"),v(_,"class","svelte-1j72xq8"),v(b,"class","container svelte-1j72xq8"),v(p,"class","main-container svelte-1j72xq8")},m(o,d){f(o,e,d),f(o,n,d),f(o,s,d),a(s,r),f(o,i,d),f(o,c,d),Z(l,c,null),f(o,u,d),f(o,p,d),a(p,b),a(b,w),t[22](w),a(b,x),a(b,_),y(_,t[10]),a(p,k),Z(O,p,null),f(o,z,d),nt&&nt.m(o,d),f(o,S,d),N=!0,A||(D=[g(c,"click",Wt),g(w,"mousedown",t[23]),g(w,"mousemove",t[24]),g(w,"mouseup",t[25]),g(w,"touchstart",t[17]),g(w,"touchmove",t[18]),g(w,"touchend",t[19]),g(_,"change",t[26]),g(_,"input",t[26]),g(_,"mousedown",t[11]),g(_,"touchstart",t[11],{passive:!0}),g(_,"input",t[12]),g(_,"change",t[13])],A=!0)},p(t,e){(!N||1&e[0])&&function(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}(r,t[0]),(!N||4&e[0])&&v(w,"width",t[2]),(!N||8&e[0])&&v(w,"height",t[3]),1024&e[0]&&y(_,t[10]);const n={};!T&&4&e[0]&&(T=!0,n.width=t[2],B((()=>T=!1))),!C&&8&e[0]&&(C=!0,n.height=t[3],B((()=>C=!1))),!q&&16&e[0]&&(q=!0,n.offset=t[4],B((()=>q=!1))),!E&&2&e[0]&&(E=!0,n.zoom=t[1],B((()=>E=!1))),!j&&32&e[0]&&(j=!0,n.color=t[5],B((()=>j=!1))),!I&&128&e[0]&&(I=!0,n.numberOfThreads=t[7],B((()=>I=!1))),!M&&64&e[0]&&(M=!0,n.numberOfIterations=t[6],B((()=>M=!1))),O.$set(n),t[9]?nt?(nt.p(t,e),512&e[0]&&Y(nt,1)):(nt=Pt(),nt.c(),Y(nt,1),nt.m(S.parentNode,S)):nt&&(V(),H(nt,1,1,(()=>{nt=null})),X())},i(t){N||(Y(l.$$.fragment,t),Y(O.$$.fragment,t),Y(nt),N=!0)},o(t){H(l.$$.fragment,t),H(O.$$.fragment,t),H(nt),N=!1},d(r){r&&d(e),r&&d(n),r&&d(s),r&&d(i),r&&d(c),G(l),r&&d(u),r&&d(p),t[22](null),G(O),r&&d(z),nt&&nt.d(r),r&&d(S),A=!1,o(D)}}}function Wt(){localStorage.lightMode=!document.body.classList.contains("light"),localStorage.lightMode&&document.body.classList.toggle("light")}function Vt(t,e,n){var o=this&&this.__awaiter||function(t,e,n,o){return new(n||(n=Promise))((function(s,r){function i(t){try{l(o.next(t))}catch(t){r(t)}}function c(t){try{l(o.throw(t))}catch(t){r(t)}}function l(t){var e;t.done?s(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(i,c)}l((o=o.apply(t,e||[])).next())}))};let s,r,i,c,l,u=300,a=300,f=new st(0,0),d=50,$=100,p=navigator.hardwareConcurrency||1,h=!1,{version:m}=e,{test:g}=e,v=0;let y,w,x=!1,_=new Image;function k(t){x=!0,y=t,_.src=i.toDataURL(),w=f.copy()}function T(t){if(x){const e=new st(t.x-y.x,t.y-y.y);c.clearRect(0,0,u,a),c.drawImage(_,e.x,e.y),n(4,f.x=w.x-e.x/u/s,f),n(4,f.y=w.y+e.y/a/s,f)}}function C(t){return o(this,void 0,void 0,(function*(){t&&T(t),x=!1,yield q()}))}function q(){return o(this,void 0,void 0,(function*(){n(9,h=!0);const t=yield async function(t,e,n,o,s,r,i,c){await ot.changeNumberOfThreads(i);let l=[];for(let c=0;c<ot.all.length;c++)l.push(ot.all[c].command("generate",[t,e,n,o.x,o.y,s,r,i,c]));const u=await Promise.all(l),a=new Uint8ClampedArray(t*e*4);for(let t=0;t<u.length;t++)a.set(u[t],u[0].length*t);return c&&await ot.changeNumberOfThreads(0),a}(u,a,s,f,r,$,p,g),e=new ImageData(t,u);c.putImageData(e,0,0),n(9,h=!1)}))}O((()=>o(void 0,void 0,void 0,(function*(){"true"===localStorage.lightMode&&document.body.classList.add("light"),setTimeout((()=>document.body.classList.add("loaded")),500),c=i.getContext("2d"),yield q()}))));return t.$$set=t=>{"version"in t&&n(0,m=t.version),"test"in t&&n(21,g=t.test)},t.$$.update=()=>{2&t.$$.dirty[0]&&(s=d/100)},[m,d,u,a,f,r,$,p,i,h,v,function(){l=d,_.src=i.toDataURL()},function(){const t=Math.pow(2,v);n(1,d=Number((t*l).toFixed(1))),c.clearRect(0,0,u,a),c.drawImage(_,(u-u*t)/2,(a-a*t)/2,u*t,a*t)},function(){return o(this,void 0,void 0,(function*(){n(10,v=0),yield q()}))},k,T,C,function(t){t.preventDefault(),k(new st(t.touches[0].clientX,t.touches[0].clientY))},function(t){t.preventDefault(),T(new st(t.touches[0].clientX,t.touches[0].clientY))},function(t){return o(this,void 0,void 0,(function*(){t.preventDefault(),yield C()}))},q,g,function(t){L[t?"unshift":"push"]((()=>{i=t,n(8,i)}))},t=>k(new st(t.offsetX,t.offsetY)),t=>T(new st(t.offsetX,t.offsetY)),t=>C(new st(t.offsetX,t.offsetY)),function(){v=b(this.value),n(10,v)},function(t){u=t,n(2,u)},function(t){a=t,n(3,a)},function(t){f=t,n(4,f)},function(t){d=t,n(1,d)},function(t){r=t,n(5,r)},function(t){p=t,n(7,p)},function(t){$=t,n(6,$)}]}return new class extends K{constructor(t){super(),J(this,t,Vt,Rt,r,{version:0,test:21},[-1,-1])}}({target:document.body,props:{version:"87c63d6",test:!1}})}();
//# sourceMappingURL=bundle.js.map
