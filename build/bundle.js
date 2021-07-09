var app=function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function o(t){t.forEach(e)}function s(t){return"function"==typeof t}function i(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function r(e,n,o){e.$$.on_destroy.push(function(e,...n){if(null==e)return t;const o=e.subscribe(...n);return o.unsubscribe?()=>o.unsubscribe():o}(n,o))}function c(t,e,n,o){if(t){const s=l(t,e,n,o);return t[0](s)}}function l(t,e,n,o){return t[1]&&o?function(t,e){for(const n in e)t[n]=e[n];return t}(n.ctx.slice(),t[1](o(e))):n.ctx}function u(t,e,n,o,s,i,r){const c=function(t,e,n,o){if(t[2]&&o){const s=t[2](o(n));if(void 0===e.dirty)return s;if("object"==typeof s){const t=[],n=Math.max(e.dirty.length,s.length);for(let o=0;o<n;o+=1)t[o]=e.dirty[o]|s[o];return t}return e.dirty|s}return e.dirty}(e,o,s,i);if(c){const s=l(e,n,o,r);t.p(s,c)}}let a,f=!1;function d(t,e,n,o){for(;t<e;){const s=t+(e-t>>1);n(s)<=o?t=s+1:e=s}return t}function h(t,e){f?(!function(t){if(t.hydrate_init)return;t.hydrate_init=!0;const e=t.childNodes,n=new Int32Array(e.length+1),o=new Int32Array(e.length);n[0]=-1;let s=0;for(let t=0;t<e.length;t++){const i=d(1,s+1,(t=>e[n[t]].claim_order),e[t].claim_order)-1;o[t]=n[i]+1;const r=i+1;n[r]=t,s=Math.max(r,s)}const i=[],r=[];let c=e.length-1;for(let t=n[s]+1;0!=t;t=o[t-1]){for(i.push(e[t-1]);c>=t;c--)r.push(e[c]);c--}for(;c>=0;c--)r.push(e[c]);i.reverse(),r.sort(((t,e)=>t.claim_order-e.claim_order));for(let e=0,n=0;e<r.length;e++){for(;n<i.length&&r[e].claim_order>=i[n].claim_order;)n++;const o=n<i.length?i[n]:null;t.insertBefore(r[e],o)}}(t),(void 0===t.actual_end_child||null!==t.actual_end_child&&t.actual_end_child.parentElement!==t)&&(t.actual_end_child=t.firstChild),e!==t.actual_end_child?t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling):e.parentNode!==t&&t.appendChild(e)}function $(t,e,n){f&&!n?h(t,e):(e.parentNode!==t||n&&e.nextSibling!==n)&&t.insertBefore(e,n||null)}function p(t){t.parentNode.removeChild(t)}function m(t){return document.createElement(t)}function g(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function v(t){return document.createTextNode(t)}function b(){return v(" ")}function y(t,e,n,o){return t.addEventListener(e,n,o),()=>t.removeEventListener(e,n,o)}function x(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function w(t){return""===t?null:+t}function _(t,e){t.value=null==e?"":e}function O(t,e,n){t.classList[n?"add":"remove"](e)}function k(t){a=t}function C(){if(!a)throw new Error("Function called outside component initialization");return a}function T(t){C().$$.on_mount.push(t)}function L(){const t=C();return(e,n)=>{const o=t.$$.callbacks[e];if(o){const s=function(t,e){const n=document.createEvent("CustomEvent");return n.initCustomEvent(t,!1,!1,e),n}(e,n);o.slice().forEach((e=>{e.call(t,s)}))}}}function I(t){return C().$$.context.get(t)}const E=[],M=[],j=[],N=[],z=Promise.resolve();let B=!1;function S(){B||(B=!0,z.then(W))}function q(t){j.push(t)}function A(t){N.push(t)}let D=!1;const P=new Set;function W(){if(!D){D=!0;do{for(let t=0;t<E.length;t+=1){const e=E[t];k(e),R(e.$$)}for(k(null),E.length=0;M.length;)M.pop()();for(let t=0;t<j.length;t+=1){const e=j[t];P.has(e)||(P.add(e),e())}j.length=0}while(E.length);for(;N.length;)N.pop()();B=!1,D=!1,P.clear()}}function R(t){if(null!==t.fragment){t.update(),o(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(q)}}const V=new Set;let X;function Y(){X={r:0,c:[],p:X}}function H(){X.r||o(X.c),X=X.p}function U(t,e){t&&t.i&&(V.delete(t),t.i(e))}function F(t,e,n,o){if(t&&t.o){if(V.has(t))return;V.add(t),X.c.push((()=>{V.delete(t),o&&(n&&t.d(1),o())})),t.o(e)}}function Z(t,e,n){const o=t.$$.props[e];void 0!==o&&(t.$$.bound[o]=n,n(t.$$.ctx[o]))}function G(t){t&&t.c()}function J(t,n,i,r){const{fragment:c,on_mount:l,on_destroy:u,after_update:a}=t.$$;c&&c.m(n,i),r||q((()=>{const n=l.map(e).filter(s);u?u.push(...n):o(n),t.$$.on_mount=[]})),a.forEach(q)}function K(t,e){const n=t.$$;null!==n.fragment&&(o(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Q(e,s,i,r,c,l,u=[-1]){const d=a;k(e);const h=e.$$={fragment:null,ctx:null,props:l,update:t,not_equal:c,bound:n(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(d?d.$$.context:s.context||[]),callbacks:n(),dirty:u,skip_bound:!1};let $=!1;if(h.ctx=i?i(e,s.props||{},((t,n,...o)=>{const s=o.length?o[0]:n;return h.ctx&&c(h.ctx[t],h.ctx[t]=s)&&(!h.skip_bound&&h.bound[t]&&h.bound[t](s),$&&function(t,e){-1===t.$$.dirty[0]&&(E.push(t),S(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}(e,t)),n})):[],h.update(),$=!0,o(h.before_update),h.fragment=!!r&&r(h.ctx),s.target){if(s.hydrate){f=!0;const t=function(t){return Array.from(t.childNodes)}(s.target);h.fragment&&h.fragment.l(t),t.forEach(p)}else h.fragment&&h.fragment.c();s.intro&&U(e.$$.fragment),J(e,s.target,s.anchor,s.customElement),f=!1,W()}k(d)}class tt{$destroy(){K(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}class et{constructor(){this.worker=new Worker("build/worker.js")}async sendWasm(){await this.command("loadWasm",await et.getWasm())}command(t,e){return new Promise(((n,o)=>{this.worker.onmessage=t=>n(t.data),this.worker.postMessage({action:t,data:e})}))}static async getWasm(){if(void 0===et.wasm){const t=await fetch("build/generate.wasm");et.wasm=await t.arrayBuffer()}return et.wasm}terminate(){this.worker.terminate()}static async changeNumberOfThreads(t){for(;et.all.length!=t;)if(et.all.length<t){const t=new et;await t.sendWasm(),et.all.push(t)}else et.all.pop().terminate()}}et.all=[];class nt{constructor(t,e){this.x=t,this.y=e}copy(){return new nt(this.x,this.y)}}function ot(e){let n,o;return{c(){n=g("svg"),o=g("path"),x(o,"d","M12,18V6A6,6 0 0,1 18,12A6,6 0 0,1 12,18M20,15.31L23.31,12L20,8.69V4H15.31L12,0.69L8.69,4H4V8.69L0.69,12L4,15.31V20H8.69L12,23.31L15.31,20H20V15.31Z"),x(o,"fill",e[2]),x(n,"width",e[0]),x(n,"height",e[1]),x(n,"viewBox",e[3])},m(t,e){$(t,n,e),h(n,o)},p(t,[e]){4&e&&x(o,"fill",t[2]),1&e&&x(n,"width",t[0]),2&e&&x(n,"height",t[1]),8&e&&x(n,"viewBox",t[3])},i:t,o:t,d(t){t&&p(n)}}}function st(t,e,n){let{size:o="1em"}=e,{width:s=o}=e,{height:i=o}=e,{color:r="currentColor"}=e,{viewBox:c="0 0 24 24"}=e;return t.$$set=t=>{"size"in t&&n(4,o=t.size),"width"in t&&n(0,s=t.width),"height"in t&&n(1,i=t.height),"color"in t&&n(2,r=t.color),"viewBox"in t&&n(3,c=t.viewBox)},[s,i,r,c,o]}class it extends tt{constructor(t){super(),Q(this,t,st,ot,i,{size:4,width:0,height:1,color:2,viewBox:3})}}let rt=1;function ct(){return"svelte-tabs-"+rt++}const lt=[];function ut(e,n=t){let o;const s=[];function r(t){if(i(e,t)&&(e=t,o)){const t=!lt.length;for(let t=0;t<s.length;t+=1){const n=s[t];n[1](),lt.push(n,e)}if(t){for(let t=0;t<lt.length;t+=2)lt[t][0](lt[t+1]);lt.length=0}}}return{set:r,update:function(t){r(t(e))},subscribe:function(i,c=t){const l=[i,c];return s.push(l),1===s.length&&(o=n(r)||t),i(e),()=>{const t=s.indexOf(l);-1!==t&&s.splice(t,1),0===s.length&&(o(),o=null)}}}}function at(t){let e,n,o,s;const i=t[4].default,r=c(i,t,t[3],null);return{c(){e=m("div"),r&&r.c(),x(e,"class","svelte-tabs")},m(i,c){$(i,e,c),r&&r.m(e,null),n=!0,o||(s=y(e,"keydown",t[1]),o=!0)},p(t,[e]){r&&r.p&&(!n||8&e)&&u(r,i,t,t[3],n?e:-1,null,null)},i(t){n||(U(r,t),n=!0)},o(t){F(r,t),n=!1},d(t){t&&p(e),r&&r.d(t),o=!1,s()}}}const ft={};function dt(t,e,n){let o,{$$slots:s={},$$scope:i}=e,{initialSelectedIndex:c=0}=e;const l=[],u=[],a=[],f=ut({}),d=ut({}),h=ut(null);r(t,h,(t=>n(5,o=t)));const $=ut(null);function p(t,e,n){var o;t.push(e),n.update((t=>t||e)),o=()=>function(t,e,n){const o=t.indexOf(e);t.splice(o,1),n.update((n=>n===e?t[o]||t[t.length-1]:n))}(t,e,n),C().$$.on_destroy.push(o)}function m(t){const e=u.indexOf(t);h.set(t),$.set(a[e])}var g,v,b;return g=ft,v={registerTab(t){p(u,t,h)},registerTabElement(t){l.push(t)},registerPanel(t){p(a,t,$)},selectTab:m,selectedTab:h,selectedPanel:$,controls:f,labeledBy:d},C().$$.context.set(g,v),T((()=>{m(u[c])})),b=()=>{for(let t=0;t<u.length;t++)f.update((e=>({...e,[u[t].id]:a[t].id}))),d.update((e=>({...e,[a[t].id]:u[t].id})))},C().$$.after_update.push(b),t.$$set=t=>{"initialSelectedIndex"in t&&n(2,c=t.initialSelectedIndex),"$$scope"in t&&n(3,i=t.$$scope)},[h,async function(t){if(t.target.classList.contains("svelte-tabs__tab")){let e=u.indexOf(o);switch(t.key){case"ArrowRight":e+=1,e>u.length-1&&(e=0),m(u[e]),l[e].focus();break;case"ArrowLeft":e-=1,e<0&&(e=u.length-1),m(u[e]),l[e].focus()}}},c,i,s]}class ht extends tt{constructor(t){super(),Q(this,t,dt,at,i,{initialSelectedIndex:2})}}function $t(t){let e,n,o,s,i,r;const l=t[9].default,a=c(l,t,t[8],null);return{c(){e=m("li"),a&&a.c(),x(e,"role","tab"),x(e,"id",t[3].id),x(e,"aria-controls",n=t[2][t[3].id]),x(e,"aria-selected",t[1]),x(e,"tabindex",o=t[1]?0:-1),x(e,"class","svelte-tabs__tab svelte-1fbofsd"),O(e,"svelte-tabs__selected",t[1])},m(n,o){$(n,e,o),a&&a.m(e,null),t[10](e),s=!0,i||(r=y(e,"click",t[11]),i=!0)},p(t,[i]){a&&a.p&&(!s||256&i)&&u(a,l,t,t[8],s?i:-1,null,null),(!s||4&i&&n!==(n=t[2][t[3].id]))&&x(e,"aria-controls",n),(!s||2&i)&&x(e,"aria-selected",t[1]),(!s||2&i&&o!==(o=t[1]?0:-1))&&x(e,"tabindex",o),2&i&&O(e,"svelte-tabs__selected",t[1])},i(t){s||(U(a,t),s=!0)},o(t){F(a,t),s=!1},d(n){n&&p(e),a&&a.d(n),t[10](null),i=!1,r()}}}function pt(t,e,n){let o,s,i,{$$slots:c={},$$scope:l}=e;const u={id:ct()},{registerTab:a,registerTabElement:f,selectTab:d,selectedTab:h,controls:$}=I(ft);let p;r(t,h,(t=>n(7,o=t))),r(t,$,(t=>n(2,s=t))),a(u),T((async()=>{await(S(),z),f(i)}));return t.$$set=t=>{"$$scope"in t&&n(8,l=t.$$scope)},t.$$.update=()=>{128&t.$$.dirty&&n(1,p=o===u)},[i,p,s,u,d,h,$,o,l,c,function(t){M[t?"unshift":"push"]((()=>{i=t,n(0,i)}))},()=>d(u)]}class mt extends tt{constructor(t){super(),Q(this,t,pt,$t,i,{})}}function gt(t){let e,n;const o=t[1].default,s=c(o,t,t[0],null);return{c(){e=m("ul"),s&&s.c(),x(e,"role","tablist"),x(e,"class","svelte-tabs__tab-list svelte-12yby2a")},m(t,o){$(t,e,o),s&&s.m(e,null),n=!0},p(t,[e]){s&&s.p&&(!n||1&e)&&u(s,o,t,t[0],n?e:-1,null,null)},i(t){n||(U(s,t),n=!0)},o(t){F(s,t),n=!1},d(t){t&&p(e),s&&s.d(t)}}}function vt(t,e,n){let{$$slots:o={},$$scope:s}=e;return t.$$set=t=>{"$$scope"in t&&n(0,s=t.$$scope)},[s,o]}class bt extends tt{constructor(t){super(),Q(this,t,vt,gt,i,{})}}function yt(t){let e;const n=t[6].default,o=c(n,t,t[5],null);return{c(){o&&o.c()},m(t,n){o&&o.m(t,n),e=!0},p(t,s){o&&o.p&&(!e||32&s)&&u(o,n,t,t[5],e?s:-1,null,null)},i(t){e||(U(o,t),e=!0)},o(t){F(o,t),e=!1},d(t){o&&o.d(t)}}}function xt(t){let e,n,o,s=t[1]===t[2]&&yt(t);return{c(){e=m("div"),s&&s.c(),x(e,"id",t[2].id),x(e,"aria-labelledby",n=t[0][t[2].id]),x(e,"class","svelte-tabs__tab-panel svelte-epfyet"),x(e,"role","tabpanel")},m(t,n){$(t,e,n),s&&s.m(e,null),o=!0},p(t,[i]){t[1]===t[2]?s?(s.p(t,i),2&i&&U(s,1)):(s=yt(t),s.c(),U(s,1),s.m(e,null)):s&&(Y(),F(s,1,1,(()=>{s=null})),H()),(!o||1&i&&n!==(n=t[0][t[2].id]))&&x(e,"aria-labelledby",n)},i(t){o||(U(s),o=!0)},o(t){F(s),o=!1},d(t){t&&p(e),s&&s.d()}}}function wt(t,e,n){let o,s,{$$slots:i={},$$scope:c}=e;const l={id:ct()},{registerPanel:u,selectedPanel:a,labeledBy:f}=I(ft);return r(t,a,(t=>n(1,s=t))),r(t,f,(t=>n(0,o=t))),u(l),t.$$set=t=>{"$$scope"in t&&n(5,c=t.$$scope)},[o,s,l,a,f,c,i]}class _t extends tt{constructor(t){super(),Q(this,t,wt,xt,i,{})}}function Ot(t){let e;return{c(){e=v("Camera")},m(t,n){$(t,e,n)},d(t){t&&p(e)}}}function kt(t){let e;return{c(){e=v("Canvas")},m(t,n){$(t,e,n)},d(t){t&&p(e)}}}function Ct(t){let e;return{c(){e=v("Calculation")},m(t,n){$(t,e,n)},d(t){t&&p(e)}}}function Tt(t){let e,n,o,s,i,r;return e=new mt({props:{$$slots:{default:[Ot]},$$scope:{ctx:t}}}),o=new mt({props:{$$slots:{default:[kt]},$$scope:{ctx:t}}}),i=new mt({props:{$$slots:{default:[Ct]},$$scope:{ctx:t}}}),{c(){G(e.$$.fragment),n=b(),G(o.$$.fragment),s=b(),G(i.$$.fragment)},m(t,c){J(e,t,c),$(t,n,c),J(o,t,c),$(t,s,c),J(i,t,c),r=!0},p(t,n){const s={};1048576&n&&(s.$$scope={dirty:n,ctx:t}),e.$set(s);const r={};1048576&n&&(r.$$scope={dirty:n,ctx:t}),o.$set(r);const c={};1048576&n&&(c.$$scope={dirty:n,ctx:t}),i.$set(c)},i(t){r||(U(e.$$.fragment,t),U(o.$$.fragment,t),U(i.$$.fragment,t),r=!0)},o(t){F(e.$$.fragment,t),F(o.$$.fragment,t),F(i.$$.fragment,t),r=!1},d(t){K(e,t),t&&p(n),K(o,t),t&&p(s),K(i,t)}}}function Lt(t){let e,n,s,i,r,c,l,u,a,f,d,g,O,k,C;return{c(){e=m("div"),n=m("h2"),n.textContent="Center position",s=v("\n                ("),i=m("input"),r=v(",\n                "),c=m("input"),l=v(")"),u=b(),a=m("div"),f=m("h2"),f.textContent="Zoom",d=b(),g=m("input"),O=v("%"),x(n,"class","svelte-nren95"),x(i,"type","number"),x(i,"step","any"),x(i,"class","svelte-nren95"),x(c,"type","number"),x(c,"step","any"),x(c,"class","svelte-nren95"),x(e,"class","svelte-nren95"),x(f,"class","svelte-nren95"),x(g,"type","number"),x(g,"step","0.1"),x(g,"class","svelte-nren95"),x(a,"class","svelte-nren95")},m(o,p){$(o,e,p),h(e,n),h(e,s),h(e,i),_(i,t[2].x),h(e,r),h(e,c),_(c,t[2].y),h(e,l),$(o,u,p),$(o,a,p),h(a,f),h(a,d),h(a,g),_(g,t[3]),h(a,O),k||(C=[y(i,"input",t[9]),y(c,"input",t[10]),y(g,"input",t[11])],k=!0)},p(t,e){4&e&&w(i.value)!==t[2].x&&_(i,t[2].x),4&e&&w(c.value)!==t[2].y&&_(c,t[2].y),8&e&&w(g.value)!==t[3]&&_(g,t[3])},d(t){t&&p(e),t&&p(u),t&&p(a),k=!1,o(C)}}}function It(t){let e,n,s,i,r,c,l,u,a,f,d,g,O,k,C,T,L,I,E;return{c(){e=m("div"),n=m("h2"),n.textContent="Canvas size",s=b(),i=m("input"),r=v("\n                ×\n                "),c=m("input"),l=b(),u=m("div"),a=m("h2"),a.textContent="Color",f=b(),d=m("label"),g=m("input"),O=v("\n                    Color"),k=b(),C=m("label"),T=m("input"),L=v("\n                    Black & white"),x(n,"class","svelte-nren95"),x(i,"type","number"),x(i,"class","svelte-nren95"),x(c,"type","number"),x(c,"class","svelte-nren95"),x(e,"class","svelte-nren95"),x(a,"class","svelte-nren95"),x(g,"type","radio"),g.__value="true",g.value=g.__value,x(g,"class","svelte-nren95"),t[15][0].push(g),x(d,"class","svelte-nren95"),x(T,"type","radio"),T.__value="false",T.value=T.__value,x(T,"class","svelte-nren95"),t[15][0].push(T),x(C,"class","svelte-nren95"),x(u,"class","color-container svelte-nren95")},m(o,p){$(o,e,p),h(e,n),h(e,s),h(e,i),_(i,t[0]),h(e,r),h(e,c),_(c,t[1]),$(o,l,p),$(o,u,p),h(u,a),h(u,f),h(u,d),h(d,g),g.checked=g.__value===t[6],h(d,O),h(u,k),h(u,C),h(C,T),T.checked=T.__value===t[6],h(C,L),I||(E=[y(i,"input",t[12]),y(c,"input",t[13]),y(g,"change",t[14]),y(T,"change",t[16])],I=!0)},p(t,e){1&e&&w(i.value)!==t[0]&&_(i,t[0]),2&e&&w(c.value)!==t[1]&&_(c,t[1]),64&e&&(g.checked=g.__value===t[6]),64&e&&(T.checked=T.__value===t[6])},d(n){n&&p(e),n&&p(l),n&&p(u),t[15][0].splice(t[15][0].indexOf(g),1),t[15][0].splice(t[15][0].indexOf(T),1),I=!1,o(E)}}}function Et(t){let e,n,s,i,r,c,l,u,a,f,d;return{c(){e=m("div"),n=m("h2"),n.textContent="Number of iterations",s=b(),i=m("input"),r=b(),c=m("div"),l=m("h2"),l.textContent="Number of threads",u=b(),a=m("input"),x(n,"class","svelte-nren95"),x(i,"type","number"),x(i,"class","svelte-nren95"),x(e,"class","svelte-nren95"),x(l,"class","svelte-nren95"),x(a,"type","number"),x(a,"class","svelte-nren95"),x(c,"class","svelte-nren95")},m(o,p){$(o,e,p),h(e,n),h(e,s),h(e,i),_(i,t[4]),$(o,r,p),$(o,c,p),h(c,l),h(c,u),h(c,a),_(a,t[5]),f||(d=[y(i,"input",t[17]),y(a,"input",t[18])],f=!0)},p(t,e){16&e&&w(i.value)!==t[4]&&_(i,t[4]),32&e&&w(a.value)!==t[5]&&_(a,t[5])},d(t){t&&p(e),t&&p(r),t&&p(c),f=!1,o(d)}}}function Mt(t){let e,n,o,s,i,r,c,l;return e=new bt({props:{$$slots:{default:[Tt]},$$scope:{ctx:t}}}),o=new _t({props:{$$slots:{default:[Lt]},$$scope:{ctx:t}}}),i=new _t({props:{$$slots:{default:[It]},$$scope:{ctx:t}}}),c=new _t({props:{$$slots:{default:[Et]},$$scope:{ctx:t}}}),{c(){G(e.$$.fragment),n=b(),G(o.$$.fragment),s=b(),G(i.$$.fragment),r=b(),G(c.$$.fragment)},m(t,u){J(e,t,u),$(t,n,u),J(o,t,u),$(t,s,u),J(i,t,u),$(t,r,u),J(c,t,u),l=!0},p(t,n){const s={};1048576&n&&(s.$$scope={dirty:n,ctx:t}),e.$set(s);const r={};1048588&n&&(r.$$scope={dirty:n,ctx:t}),o.$set(r);const l={};1048643&n&&(l.$$scope={dirty:n,ctx:t}),i.$set(l);const u={};1048624&n&&(u.$$scope={dirty:n,ctx:t}),c.$set(u)},i(t){l||(U(e.$$.fragment,t),U(o.$$.fragment,t),U(i.$$.fragment,t),U(c.$$.fragment,t),l=!0)},o(t){F(e.$$.fragment,t),F(o.$$.fragment,t),F(i.$$.fragment,t),F(c.$$.fragment,t),l=!1},d(t){K(e,t),t&&p(n),K(o,t),t&&p(s),K(i,t),t&&p(r),K(c,t)}}}function jt(t){let e,n,o,s,i,r,c;return n=new ht({props:{$$slots:{default:[Mt]},$$scope:{ctx:t}}}),{c(){e=m("form"),G(n.$$.fragment),o=b(),s=m("input"),x(s,"type","submit"),s.value="Update",x(s,"class","svelte-nren95"),x(e,"class","svelte-nren95")},m(l,u){$(l,e,u),J(n,e,null),h(e,o),h(e,s),i=!0,r||(c=y(e,"submit",t[7]),r=!0)},p(t,[e]){const o={};1048703&e&&(o.$$scope={dirty:e,ctx:t}),n.$set(o)},i(t){i||(U(n.$$.fragment,t),i=!0)},o(t){F(n.$$.fragment,t),i=!1},d(t){t&&p(e),K(n),r=!1,c()}}}function Nt(t,e,n){let o=L();let{width:s}=e,{height:i}=e,{offset:r}=e,{zoom:c}=e,{color:l}=e,{numberOfIterations:u}=e,{numberOfThreads:a}=e,f="true";return t.$$set=t=>{"width"in t&&n(0,s=t.width),"height"in t&&n(1,i=t.height),"offset"in t&&n(2,r=t.offset),"zoom"in t&&n(3,c=t.zoom),"color"in t&&n(8,l=t.color),"numberOfIterations"in t&&n(4,u=t.numberOfIterations),"numberOfThreads"in t&&n(5,a=t.numberOfThreads)},t.$$.update=()=>{64&t.$$.dirty&&n(8,l="true"===f)},[s,i,r,c,u,a,f,function(t){t.preventDefault(),o("update")},l,function(){r.x=w(this.value),n(2,r)},function(){r.y=w(this.value),n(2,r)},function(){c=w(this.value),n(3,c)},function(){s=w(this.value),n(0,s)},function(){i=w(this.value),n(1,i)},function(){f=this.__value,n(6,f)},[[]],function(){f=this.__value,n(6,f)},function(){u=w(this.value),n(4,u)},function(){a=w(this.value),n(5,a)}]}class zt extends tt{constructor(t){super(),Q(this,t,Nt,jt,i,{width:0,height:1,offset:2,zoom:3,color:8,numberOfIterations:4,numberOfThreads:5})}}function Bt(e){let n,o;return{c(){n=m("div"),x(n,"style",o="--color: "+(e[0]?"#333":"#ccc")),x(n,"class","svelte-ghrpqq")},m(t,e){$(t,n,e)},p(t,[e]){1&e&&o!==(o="--color: "+(t[0]?"#333":"#ccc"))&&x(n,"style",o)},i:t,o:t,d(t){t&&p(n)}}}function St(t,e,n){let{lightMode:o=!1}=e;return t.$$set=t=>{"lightMode"in t&&n(0,o=t.lightMode)},[o]}class qt extends tt{constructor(t){super(),Q(this,t,St,Bt,i,{lightMode:0})}}function At(e){let n,o,s,i;return s=new qt({props:{lightMode:"true"===localStorage.lightMode}}),{c(){n=m("div"),o=m("div"),G(s.$$.fragment),x(o,"class","spinner-container svelte-1j72xq8"),x(n,"class","overlay svelte-1j72xq8")},m(t,e){$(t,n,e),h(n,o),J(s,o,null),i=!0},p:t,i(t){i||(U(s.$$.fragment,t),i=!0)},o(t){F(s.$$.fragment,t),i=!1},d(t){t&&p(n),K(s)}}}function Dt(t){let e,n,s,i,r,c,l,u,a,f,d,g,w,O,k,C,T,L,I,E,j,N,z,B,S,q,D;function P(e){t[27](e)}function W(e){t[28](e)}function R(e){t[29](e)}function V(e){t[30](e)}function X(e){t[31](e)}function Q(e){t[32](e)}function tt(e){t[33](e)}l=new it({});let et={};void 0!==t[2]&&(et.width=t[2]),void 0!==t[3]&&(et.height=t[3]),void 0!==t[4]&&(et.offset=t[4]),void 0!==t[1]&&(et.zoom=t[1]),void 0!==t[5]&&(et.color=t[5]),void 0!==t[7]&&(et.numberOfThreads=t[7]),void 0!==t[6]&&(et.numberOfIterations=t[6]),k=new zt({props:et}),M.push((()=>Z(k,"width",P))),M.push((()=>Z(k,"height",W))),M.push((()=>Z(k,"offset",R))),M.push((()=>Z(k,"zoom",V))),M.push((()=>Z(k,"color",X))),M.push((()=>Z(k,"numberOfThreads",Q))),M.push((()=>Z(k,"numberOfIterations",tt))),k.$on("update",t[20]);let nt=t[9]&&At();return{c(){e=m("h1"),e.textContent="Mandelbrot set generator",n=b(),s=m("span"),i=v(t[0]),r=b(),c=m("div"),G(l.$$.fragment),u=b(),a=m("div"),f=m("div"),d=m("canvas"),g=b(),w=m("input"),O=b(),G(k.$$.fragment),z=b(),nt&&nt.c(),B=v(""),x(e,"class","svelte-1j72xq8"),x(s,"class","version svelte-1j72xq8"),x(c,"class","icon-container svelte-1j72xq8"),x(d,"width",t[2]),x(d,"height",t[3]),x(d,"class","svelte-1j72xq8"),x(w,"type","range"),x(w,"min","-1"),x(w,"max","1"),x(w,"step","0.01"),x(w,"class","svelte-1j72xq8"),x(f,"class","container svelte-1j72xq8"),x(a,"class","main-container svelte-1j72xq8")},m(o,p){$(o,e,p),$(o,n,p),$(o,s,p),h(s,i),$(o,r,p),$(o,c,p),J(l,c,null),$(o,u,p),$(o,a,p),h(a,f),h(f,d),t[22](d),h(f,g),h(f,w),_(w,t[10]),h(a,O),J(k,a,null),$(o,z,p),nt&&nt.m(o,p),$(o,B,p),S=!0,q||(D=[y(c,"click",Pt),y(d,"mousedown",t[23]),y(d,"mousemove",t[24]),y(d,"mouseup",t[25]),y(d,"touchstart",t[17]),y(d,"touchmove",t[18]),y(d,"touchend",t[19]),y(w,"change",t[26]),y(w,"input",t[26]),y(w,"mousedown",t[11]),y(w,"touchstart",t[11],{passive:!0}),y(w,"input",t[12]),y(w,"change",t[13])],q=!0)},p(t,e){(!S||1&e[0])&&function(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}(i,t[0]),(!S||4&e[0])&&x(d,"width",t[2]),(!S||8&e[0])&&x(d,"height",t[3]),1024&e[0]&&_(w,t[10]);const n={};!C&&4&e[0]&&(C=!0,n.width=t[2],A((()=>C=!1))),!T&&8&e[0]&&(T=!0,n.height=t[3],A((()=>T=!1))),!L&&16&e[0]&&(L=!0,n.offset=t[4],A((()=>L=!1))),!I&&2&e[0]&&(I=!0,n.zoom=t[1],A((()=>I=!1))),!E&&32&e[0]&&(E=!0,n.color=t[5],A((()=>E=!1))),!j&&128&e[0]&&(j=!0,n.numberOfThreads=t[7],A((()=>j=!1))),!N&&64&e[0]&&(N=!0,n.numberOfIterations=t[6],A((()=>N=!1))),k.$set(n),t[9]?nt?(nt.p(t,e),512&e[0]&&U(nt,1)):(nt=At(),nt.c(),U(nt,1),nt.m(B.parentNode,B)):nt&&(Y(),F(nt,1,1,(()=>{nt=null})),H())},i(t){S||(U(l.$$.fragment,t),U(k.$$.fragment,t),U(nt),S=!0)},o(t){F(l.$$.fragment,t),F(k.$$.fragment,t),F(nt),S=!1},d(i){i&&p(e),i&&p(n),i&&p(s),i&&p(r),i&&p(c),K(l),i&&p(u),i&&p(a),t[22](null),K(k),i&&p(z),nt&&nt.d(i),i&&p(B),q=!1,o(D)}}}function Pt(){localStorage.lightMode=!document.body.classList.contains("light"),localStorage.lightMode&&document.body.classList.toggle("light")}function Wt(t,e,n){var o=this&&this.__awaiter||function(t,e,n,o){return new(n||(n=Promise))((function(s,i){function r(t){try{l(o.next(t))}catch(t){i(t)}}function c(t){try{l(o.throw(t))}catch(t){i(t)}}function l(t){var e;t.done?s(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(r,c)}l((o=o.apply(t,e||[])).next())}))};let s,i,r,c,l,u=300,a=300,f=new nt(0,0),d=50,h=100,$=navigator.hardwareConcurrency||1,p=!1,{version:m}=e,{test:g}=e,v=0;let b,y,x=!1,_=new Image;function O(t){x=!0,b=t,_.src=r.toDataURL(),y=f.copy()}function k(t){if(x){const e=new nt(t.x-b.x,t.y-b.y);c.clearRect(0,0,u,a),c.drawImage(_,e.x,e.y),n(4,f.x=y.x-e.x/u/s,f),n(4,f.y=y.y+e.y/a/s,f)}}function C(t){return o(this,void 0,void 0,(function*(){t&&k(t),x=!1,yield L()}))}function L(){return o(this,void 0,void 0,(function*(){n(9,p=!0);const t=yield async function(t,e,n,o,s,i,r,c){await et.changeNumberOfThreads(r);let l=[];for(let c=0;c<et.all.length;c++)l.push(et.all[c].command("generate",[t,e,n,o.x,o.y,s,i,r,c]));const u=await Promise.all(l),a=new Uint8ClampedArray(t*e*4);for(let t=0;t<u.length;t++)a.set(u[t],u[0].length*t);return c&&await et.changeNumberOfThreads(0),a}(u,a,s,f,i,h,$,g),e=new ImageData(t,u);c.putImageData(e,0,0),n(9,p=!1)}))}T((()=>o(void 0,void 0,void 0,(function*(){"true"===localStorage.lightMode&&document.body.classList.add("light"),setTimeout((()=>document.body.classList.add("loaded")),500),c=r.getContext("2d"),yield L()}))));return t.$$set=t=>{"version"in t&&n(0,m=t.version),"test"in t&&n(21,g=t.test)},t.$$.update=()=>{2&t.$$.dirty[0]&&(s=d/100)},[m,d,u,a,f,i,h,$,r,p,v,function(){l=d,_.src=r.toDataURL()},function(){const t=Math.pow(2,v);n(1,d=Number((t*l).toFixed(1))),c.clearRect(0,0,u,a),c.drawImage(_,(u-u*t)/2,(a-a*t)/2,u*t,a*t)},function(){return o(this,void 0,void 0,(function*(){n(10,v=0),yield L()}))},O,k,C,function(t){t.preventDefault(),O(new nt(t.touches[0].clientX,t.touches[0].clientY))},function(t){t.preventDefault(),k(new nt(t.touches[0].clientX,t.touches[0].clientY))},function(t){return o(this,void 0,void 0,(function*(){t.preventDefault(),yield C()}))},L,g,function(t){M[t?"unshift":"push"]((()=>{r=t,n(8,r)}))},t=>O(new nt(t.offsetX,t.offsetY)),t=>k(new nt(t.offsetX,t.offsetY)),t=>C(new nt(t.offsetX,t.offsetY)),function(){v=w(this.value),n(10,v)},function(t){u=t,n(2,u)},function(t){a=t,n(3,a)},function(t){f=t,n(4,f)},function(t){d=t,n(1,d)},function(t){i=t,n(5,i)},function(t){$=t,n(7,$)},function(t){h=t,n(6,h)}]}return new class extends tt{constructor(t){super(),Q(this,t,Wt,Dt,i,{version:0,test:21},[-1,-1])}}({target:document.body,props:{version:"734f4af",test:!1}})}();
//# sourceMappingURL=bundle.js.map
