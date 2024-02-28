"use strict";(self.webpackChunkuds=self.webpackChunkuds||[]).push([[260],{728:()=>{!function(e){const n=e.performance;function s(A){n&&n.mark&&n.mark(A)}function r(A,d){n&&n.measure&&n.measure(A,d)}s("Zone");const i=e.__Zone_symbol_prefix||"__zone_symbol__";function l(A){return i+A}const m=!0===e[l("forceDuplicateZoneCheck")];if(e.Zone){if(m||"function"!=typeof e.Zone.__symbol__)throw new Error("Zone already loaded.");return e.Zone}let E=(()=>{class d{static assertZonePatched(){if(e.Promise!==se.ZoneAwarePromise)throw new Error("Zone.js has detected that ZoneAwarePromise `(window|global).Promise` has been overwritten.\nMost likely cause is that a Promise polyfill has been loaded after Zone.js (Polyfilling Promise api is not necessary when zone.js is loaded. If you must load one, do so before loading zone.js.)")}static get root(){let t=d.current;for(;t.parent;)t=t.parent;return t}static get current(){return W.zone}static get currentTask(){return oe}static __load_patch(t,_,R=!1){if(se.hasOwnProperty(t)){if(!R&&m)throw Error("Already loaded patch: "+t)}else if(!e["__Zone_disable_"+t]){const L="Zone:"+t;s(L),se[t]=_(e,d,Y),r(L,L)}}get parent(){return this._parent}get name(){return this._name}constructor(t,_){this._parent=t,this._name=_?_.name||"unnamed":"<root>",this._properties=_&&_.properties||{},this._zoneDelegate=new v(this,this._parent&&this._parent._zoneDelegate,_)}get(t){const _=this.getZoneWith(t);if(_)return _._properties[t]}getZoneWith(t){let _=this;for(;_;){if(_._properties.hasOwnProperty(t))return _;_=_._parent}return null}fork(t){if(!t)throw new Error("ZoneSpec required!");return this._zoneDelegate.fork(this,t)}wrap(t,_){if("function"!=typeof t)throw new Error("Expecting function got: "+t);const R=this._zoneDelegate.intercept(this,t,_),L=this;return function(){return L.runGuarded(R,this,arguments,_)}}run(t,_,R,L){W={parent:W,zone:this};try{return this._zoneDelegate.invoke(this,t,_,R,L)}finally{W=W.parent}}runGuarded(t,_=null,R,L){W={parent:W,zone:this};try{try{return this._zoneDelegate.invoke(this,t,_,R,L)}catch(a){if(this._zoneDelegate.handleError(this,a))throw a}}finally{W=W.parent}}runTask(t,_,R){if(t.zone!=this)throw new Error("A task can only be run in the zone of creation! (Creation: "+(t.zone||J).name+"; Execution: "+this.name+")");if(t.state===G&&(t.type===Q||t.type===w))return;const L=t.state!=y;L&&t._transitionTo(y,j),t.runCount++;const a=oe;oe=t,W={parent:W,zone:this};try{t.type==w&&t.data&&!t.data.isPeriodic&&(t.cancelFn=void 0);try{return this._zoneDelegate.invokeTask(this,t,_,R)}catch(u){if(this._zoneDelegate.handleError(this,u))throw u}}finally{t.state!==G&&t.state!==h&&(t.type==Q||t.data&&t.data.isPeriodic?L&&t._transitionTo(j,y):(t.runCount=0,this._updateTaskCount(t,-1),L&&t._transitionTo(G,y,G))),W=W.parent,oe=a}}scheduleTask(t){if(t.zone&&t.zone!==this){let R=this;for(;R;){if(R===t.zone)throw Error(`can not reschedule task to ${this.name} which is descendants of the original zone ${t.zone.name}`);R=R.parent}}t._transitionTo(z,G);const _=[];t._zoneDelegates=_,t._zone=this;try{t=this._zoneDelegate.scheduleTask(this,t)}catch(R){throw t._transitionTo(h,z,G),this._zoneDelegate.handleError(this,R),R}return t._zoneDelegates===_&&this._updateTaskCount(t,1),t.state==z&&t._transitionTo(j,z),t}scheduleMicroTask(t,_,R,L){return this.scheduleTask(new g(I,t,_,R,L,void 0))}scheduleMacroTask(t,_,R,L,a){return this.scheduleTask(new g(w,t,_,R,L,a))}scheduleEventTask(t,_,R,L,a){return this.scheduleTask(new g(Q,t,_,R,L,a))}cancelTask(t){if(t.zone!=this)throw new Error("A task can only be cancelled in the zone of creation! (Creation: "+(t.zone||J).name+"; Execution: "+this.name+")");if(t.state===j||t.state===y){t._transitionTo(V,j,y);try{this._zoneDelegate.cancelTask(this,t)}catch(_){throw t._transitionTo(h,V),this._zoneDelegate.handleError(this,_),_}return this._updateTaskCount(t,-1),t._transitionTo(G,V),t.runCount=0,t}}_updateTaskCount(t,_){const R=t._zoneDelegates;-1==_&&(t._zoneDelegates=null);for(let L=0;L<R.length;L++)R[L]._updateTaskCount(t.type,_)}}return d.__symbol__=l,d})();const P={name:"",onHasTask:(A,d,c,t)=>A.hasTask(c,t),onScheduleTask:(A,d,c,t)=>A.scheduleTask(c,t),onInvokeTask:(A,d,c,t,_,R)=>A.invokeTask(c,t,_,R),onCancelTask:(A,d,c,t)=>A.cancelTask(c,t)};class v{constructor(d,c,t){this._taskCounts={microTask:0,macroTask:0,eventTask:0},this.zone=d,this._parentDelegate=c,this._forkZS=t&&(t&&t.onFork?t:c._forkZS),this._forkDlgt=t&&(t.onFork?c:c._forkDlgt),this._forkCurrZone=t&&(t.onFork?this.zone:c._forkCurrZone),this._interceptZS=t&&(t.onIntercept?t:c._interceptZS),this._interceptDlgt=t&&(t.onIntercept?c:c._interceptDlgt),this._interceptCurrZone=t&&(t.onIntercept?this.zone:c._interceptCurrZone),this._invokeZS=t&&(t.onInvoke?t:c._invokeZS),this._invokeDlgt=t&&(t.onInvoke?c:c._invokeDlgt),this._invokeCurrZone=t&&(t.onInvoke?this.zone:c._invokeCurrZone),this._handleErrorZS=t&&(t.onHandleError?t:c._handleErrorZS),this._handleErrorDlgt=t&&(t.onHandleError?c:c._handleErrorDlgt),this._handleErrorCurrZone=t&&(t.onHandleError?this.zone:c._handleErrorCurrZone),this._scheduleTaskZS=t&&(t.onScheduleTask?t:c._scheduleTaskZS),this._scheduleTaskDlgt=t&&(t.onScheduleTask?c:c._scheduleTaskDlgt),this._scheduleTaskCurrZone=t&&(t.onScheduleTask?this.zone:c._scheduleTaskCurrZone),this._invokeTaskZS=t&&(t.onInvokeTask?t:c._invokeTaskZS),this._invokeTaskDlgt=t&&(t.onInvokeTask?c:c._invokeTaskDlgt),this._invokeTaskCurrZone=t&&(t.onInvokeTask?this.zone:c._invokeTaskCurrZone),this._cancelTaskZS=t&&(t.onCancelTask?t:c._cancelTaskZS),this._cancelTaskDlgt=t&&(t.onCancelTask?c:c._cancelTaskDlgt),this._cancelTaskCurrZone=t&&(t.onCancelTask?this.zone:c._cancelTaskCurrZone),this._hasTaskZS=null,this._hasTaskDlgt=null,this._hasTaskDlgtOwner=null,this._hasTaskCurrZone=null;const _=t&&t.onHasTask;(_||c&&c._hasTaskZS)&&(this._hasTaskZS=_?t:P,this._hasTaskDlgt=c,this._hasTaskDlgtOwner=this,this._hasTaskCurrZone=d,t.onScheduleTask||(this._scheduleTaskZS=P,this._scheduleTaskDlgt=c,this._scheduleTaskCurrZone=this.zone),t.onInvokeTask||(this._invokeTaskZS=P,this._invokeTaskDlgt=c,this._invokeTaskCurrZone=this.zone),t.onCancelTask||(this._cancelTaskZS=P,this._cancelTaskDlgt=c,this._cancelTaskCurrZone=this.zone))}fork(d,c){return this._forkZS?this._forkZS.onFork(this._forkDlgt,this.zone,d,c):new E(d,c)}intercept(d,c,t){return this._interceptZS?this._interceptZS.onIntercept(this._interceptDlgt,this._interceptCurrZone,d,c,t):c}invoke(d,c,t,_,R){return this._invokeZS?this._invokeZS.onInvoke(this._invokeDlgt,this._invokeCurrZone,d,c,t,_,R):c.apply(t,_)}handleError(d,c){return!this._handleErrorZS||this._handleErrorZS.onHandleError(this._handleErrorDlgt,this._handleErrorCurrZone,d,c)}scheduleTask(d,c){let t=c;if(this._scheduleTaskZS)this._hasTaskZS&&t._zoneDelegates.push(this._hasTaskDlgtOwner),t=this._scheduleTaskZS.onScheduleTask(this._scheduleTaskDlgt,this._scheduleTaskCurrZone,d,c),t||(t=c);else if(c.scheduleFn)c.scheduleFn(c);else{if(c.type!=I)throw new Error("Task is missing scheduleFn.");C(c)}return t}invokeTask(d,c,t,_){return this._invokeTaskZS?this._invokeTaskZS.onInvokeTask(this._invokeTaskDlgt,this._invokeTaskCurrZone,d,c,t,_):c.callback.apply(t,_)}cancelTask(d,c){let t;if(this._cancelTaskZS)t=this._cancelTaskZS.onCancelTask(this._cancelTaskDlgt,this._cancelTaskCurrZone,d,c);else{if(!c.cancelFn)throw Error("Task is not cancelable");t=c.cancelFn(c)}return t}hasTask(d,c){try{this._hasTaskZS&&this._hasTaskZS.onHasTask(this._hasTaskDlgt,this._hasTaskCurrZone,d,c)}catch(t){this.handleError(d,t)}}_updateTaskCount(d,c){const t=this._taskCounts,_=t[d],R=t[d]=_+c;if(R<0)throw new Error("More tasks executed then were scheduled.");0!=_&&0!=R||this.hasTask(this.zone,{microTask:t.microTask>0,macroTask:t.macroTask>0,eventTask:t.eventTask>0,change:d})}}class g{constructor(d,c,t,_,R,L){if(this._zone=null,this.runCount=0,this._zoneDelegates=null,this._state="notScheduled",this.type=d,this.source=c,this.data=_,this.scheduleFn=R,this.cancelFn=L,!t)throw new Error("callback is not defined");this.callback=t;const a=this;this.invoke=d===Q&&_&&_.useG?g.invokeTask:function(){return g.invokeTask.call(e,a,this,arguments)}}static invokeTask(d,c,t){d||(d=this),te++;try{return d.runCount++,d.zone.runTask(d,c,t)}finally{1==te&&T(),te--}}get zone(){return this._zone}get state(){return this._state}cancelScheduleRequest(){this._transitionTo(G,z)}_transitionTo(d,c,t){if(this._state!==c&&this._state!==t)throw new Error(`${this.type} '${this.source}': can not transition to '${d}', expecting state '${c}'${t?" or '"+t+"'":""}, was '${this._state}'.`);this._state=d,d==G&&(this._zoneDelegates=null)}toString(){return this.data&&typeof this.data.handleId<"u"?this.data.handleId.toString():Object.prototype.toString.call(this)}toJSON(){return{type:this.type,state:this.state,source:this.source,zone:this.zone.name,runCount:this.runCount}}}const M=l("setTimeout"),O=l("Promise"),N=l("then");let K,U=[],x=!1;function X(A){if(K||e[O]&&(K=e[O].resolve(0)),K){let d=K[N];d||(d=K.then),d.call(K,A)}else e[M](A,0)}function C(A){0===te&&0===U.length&&X(T),A&&U.push(A)}function T(){if(!x){for(x=!0;U.length;){const A=U;U=[];for(let d=0;d<A.length;d++){const c=A[d];try{c.zone.runTask(c,null,null)}catch(t){Y.onUnhandledError(t)}}}Y.microtaskDrainDone(),x=!1}}const J={name:"NO ZONE"},G="notScheduled",z="scheduling",j="scheduled",y="running",V="canceling",h="unknown",I="microTask",w="macroTask",Q="eventTask",se={},Y={symbol:l,currentZoneFrame:()=>W,onUnhandledError:q,microtaskDrainDone:q,scheduleMicroTask:C,showUncaughtError:()=>!E[l("ignoreConsoleErrorUncaughtError")],patchEventTarget:()=>[],patchOnProperties:q,patchMethod:()=>q,bindArguments:()=>[],patchThen:()=>q,patchMacroTask:()=>q,patchEventPrototype:()=>q,isIEOrEdge:()=>!1,getGlobalObjects:()=>{},ObjectDefineProperty:()=>q,ObjectGetOwnPropertyDescriptor:()=>{},ObjectCreate:()=>{},ArraySlice:()=>[],patchClass:()=>q,wrapWithCurrentZone:()=>q,filterProperties:()=>[],attachOriginToPatched:()=>q,_redefineProperty:()=>q,patchCallbacks:()=>q,nativeScheduleMicroTask:X};let W={parent:null,zone:new E(null,null)},oe=null,te=0;function q(){}r("Zone","Zone"),e.Zone=E}(globalThis);const fe=Object.getOwnPropertyDescriptor,me=Object.defineProperty,be=Object.getPrototypeOf,De=Object.create,ct=Array.prototype.slice,Ze="addEventListener",Oe="removeEventListener",Ne=Zone.__symbol__(Ze),Ie=Zone.__symbol__(Oe),ce="true",ae="false",ge=Zone.__symbol__("");function Me(e,n){return Zone.current.wrap(e,n)}function Le(e,n,s,r,i){return Zone.current.scheduleMacroTask(e,n,s,r,i)}const H=Zone.__symbol__,Pe=typeof window<"u",Ee=Pe?window:void 0,$=Pe&&Ee||globalThis,at="removeAttribute";function je(e,n){for(let s=e.length-1;s>=0;s--)"function"==typeof e[s]&&(e[s]=Me(e[s],n+"_"+s));return e}function Fe(e){return!e||!1!==e.writable&&!("function"==typeof e.get&&typeof e.set>"u")}const Be=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope,we=!("nw"in $)&&typeof $.process<"u"&&"[object process]"==={}.toString.call($.process),Ae=!we&&!Be&&!(!Pe||!Ee.HTMLElement),Ue=typeof $.process<"u"&&"[object process]"==={}.toString.call($.process)&&!Be&&!(!Pe||!Ee.HTMLElement),Re={},We=function(e){if(!(e=e||$.event))return;let n=Re[e.type];n||(n=Re[e.type]=H("ON_PROPERTY"+e.type));const s=this||e.target||$,r=s[n];let i;return Ae&&s===Ee&&"error"===e.type?(i=r&&r.call(this,e.message,e.filename,e.lineno,e.colno,e.error),!0===i&&e.preventDefault()):(i=r&&r.apply(this,arguments),null!=i&&!i&&e.preventDefault()),i};function qe(e,n,s){let r=fe(e,n);if(!r&&s&&fe(s,n)&&(r={enumerable:!0,configurable:!0}),!r||!r.configurable)return;const i=H("on"+n+"patched");if(e.hasOwnProperty(i)&&e[i])return;delete r.writable,delete r.value;const l=r.get,m=r.set,E=n.slice(2);let P=Re[E];P||(P=Re[E]=H("ON_PROPERTY"+E)),r.set=function(v){let g=this;!g&&e===$&&(g=$),g&&("function"==typeof g[P]&&g.removeEventListener(E,We),m&&m.call(g,null),g[P]=v,"function"==typeof v&&g.addEventListener(E,We,!1))},r.get=function(){let v=this;if(!v&&e===$&&(v=$),!v)return null;const g=v[P];if(g)return g;if(l){let M=l.call(this);if(M)return r.set.call(this,M),"function"==typeof v[at]&&v.removeAttribute(n),M}return null},me(e,n,r),e[i]=!0}function Xe(e,n,s){if(n)for(let r=0;r<n.length;r++)qe(e,"on"+n[r],s);else{const r=[];for(const i in e)"on"==i.slice(0,2)&&r.push(i);for(let i=0;i<r.length;i++)qe(e,r[i],s)}}const re=H("originalInstance");function ke(e){const n=$[e];if(!n)return;$[H(e)]=n,$[e]=function(){const i=je(arguments,e);switch(i.length){case 0:this[re]=new n;break;case 1:this[re]=new n(i[0]);break;case 2:this[re]=new n(i[0],i[1]);break;case 3:this[re]=new n(i[0],i[1],i[2]);break;case 4:this[re]=new n(i[0],i[1],i[2],i[3]);break;default:throw new Error("Arg list too long.")}},ue($[e],n);const s=new n(function(){});let r;for(r in s)"XMLHttpRequest"===e&&"responseBlob"===r||function(i){"function"==typeof s[i]?$[e].prototype[i]=function(){return this[re][i].apply(this[re],arguments)}:me($[e].prototype,i,{set:function(l){"function"==typeof l?(this[re][i]=Me(l,e+"."+i),ue(this[re][i],l)):this[re][i]=l},get:function(){return this[re][i]}})}(r);for(r in n)"prototype"!==r&&n.hasOwnProperty(r)&&($[e][r]=n[r])}function le(e,n,s){let r=e;for(;r&&!r.hasOwnProperty(n);)r=be(r);!r&&e[n]&&(r=e);const i=H(n);let l=null;if(r&&(!(l=r[i])||!r.hasOwnProperty(i))&&(l=r[i]=r[n],Fe(r&&fe(r,n)))){const E=s(l,i,n);r[n]=function(){return E(this,arguments)},ue(r[n],l)}return l}function ut(e,n,s){let r=null;function i(l){const m=l.data;return m.args[m.cbIdx]=function(){l.invoke.apply(this,arguments)},r.apply(m.target,m.args),l}r=le(e,n,l=>function(m,E){const P=s(m,E);return P.cbIdx>=0&&"function"==typeof E[P.cbIdx]?Le(P.name,E[P.cbIdx],P,i):l.apply(m,E)})}function ue(e,n){e[H("OriginalDelegate")]=n}let ze=!1,He=!1;function ht(){if(ze)return He;ze=!0;try{const e=Ee.navigator.userAgent;(-1!==e.indexOf("MSIE ")||-1!==e.indexOf("Trident/")||-1!==e.indexOf("Edge/"))&&(He=!0)}catch{}return He}Zone.__load_patch("ZoneAwarePromise",(e,n,s)=>{const r=Object.getOwnPropertyDescriptor,i=Object.defineProperty,m=s.symbol,E=[],P=!1!==e[m("DISABLE_WRAPPING_UNCAUGHT_PROMISE_REJECTION")],v=m("Promise"),g=m("then"),M="__creationTrace__";s.onUnhandledError=a=>{if(s.showUncaughtError()){const u=a&&a.rejection;u?console.error("Unhandled Promise rejection:",u instanceof Error?u.message:u,"; Zone:",a.zone.name,"; Task:",a.task&&a.task.source,"; Value:",u,u instanceof Error?u.stack:void 0):console.error(a)}},s.microtaskDrainDone=()=>{for(;E.length;){const a=E.shift();try{a.zone.runGuarded(()=>{throw a.throwOriginal?a.rejection:a})}catch(u){N(u)}}};const O=m("unhandledPromiseRejectionHandler");function N(a){s.onUnhandledError(a);try{const u=n[O];"function"==typeof u&&u.call(this,a)}catch{}}function U(a){return a&&a.then}function x(a){return a}function K(a){return c.reject(a)}const X=m("state"),C=m("value"),T=m("finally"),J=m("parentPromiseValue"),G=m("parentPromiseState"),z="Promise.then",j=null,y=!0,V=!1,h=0;function I(a,u){return o=>{try{Y(a,u,o)}catch(f){Y(a,!1,f)}}}const w=function(){let a=!1;return function(o){return function(){a||(a=!0,o.apply(null,arguments))}}},Q="Promise resolved with itself",se=m("currentTaskTrace");function Y(a,u,o){const f=w();if(a===o)throw new TypeError(Q);if(a[X]===j){let k=null;try{("object"==typeof o||"function"==typeof o)&&(k=o&&o.then)}catch(b){return f(()=>{Y(a,!1,b)})(),a}if(u!==V&&o instanceof c&&o.hasOwnProperty(X)&&o.hasOwnProperty(C)&&o[X]!==j)oe(o),Y(a,o[X],o[C]);else if(u!==V&&"function"==typeof k)try{k.call(o,f(I(a,u)),f(I(a,!1)))}catch(b){f(()=>{Y(a,!1,b)})()}else{a[X]=u;const b=a[C];if(a[C]=o,a[T]===T&&u===y&&(a[X]=a[G],a[C]=a[J]),u===V&&o instanceof Error){const p=n.currentTask&&n.currentTask.data&&n.currentTask.data[M];p&&i(o,se,{configurable:!0,enumerable:!1,writable:!0,value:p})}for(let p=0;p<b.length;)te(a,b[p++],b[p++],b[p++],b[p++]);if(0==b.length&&u==V){a[X]=h;let p=o;try{throw new Error("Uncaught (in promise): "+function l(a){return a&&a.toString===Object.prototype.toString?(a.constructor&&a.constructor.name||"")+": "+JSON.stringify(a):a?a.toString():Object.prototype.toString.call(a)}(o)+(o&&o.stack?"\n"+o.stack:""))}catch(S){p=S}P&&(p.throwOriginal=!0),p.rejection=o,p.promise=a,p.zone=n.current,p.task=n.currentTask,E.push(p),s.scheduleMicroTask()}}}return a}const W=m("rejectionHandledHandler");function oe(a){if(a[X]===h){try{const u=n[W];u&&"function"==typeof u&&u.call(this,{rejection:a[C],promise:a})}catch{}a[X]=V;for(let u=0;u<E.length;u++)a===E[u].promise&&E.splice(u,1)}}function te(a,u,o,f,k){oe(a);const b=a[X],p=b?"function"==typeof f?f:x:"function"==typeof k?k:K;u.scheduleMicroTask(z,()=>{try{const S=a[C],D=!!o&&T===o[T];D&&(o[J]=S,o[G]=b);const Z=u.run(p,void 0,D&&p!==K&&p!==x?[]:[S]);Y(o,!0,Z)}catch(S){Y(o,!1,S)}},o)}const A=function(){},d=e.AggregateError;class c{static toString(){return"function ZoneAwarePromise() { [native code] }"}static resolve(u){return u instanceof c?u:Y(new this(null),y,u)}static reject(u){return Y(new this(null),V,u)}static withResolvers(){const u={};return u.promise=new c((o,f)=>{u.resolve=o,u.reject=f}),u}static any(u){if(!u||"function"!=typeof u[Symbol.iterator])return Promise.reject(new d([],"All promises were rejected"));const o=[];let f=0;try{for(let p of u)f++,o.push(c.resolve(p))}catch{return Promise.reject(new d([],"All promises were rejected"))}if(0===f)return Promise.reject(new d([],"All promises were rejected"));let k=!1;const b=[];return new c((p,S)=>{for(let D=0;D<o.length;D++)o[D].then(Z=>{k||(k=!0,p(Z))},Z=>{b.push(Z),f--,0===f&&(k=!0,S(new d(b,"All promises were rejected")))})})}static race(u){let o,f,k=new this((S,D)=>{o=S,f=D});function b(S){o(S)}function p(S){f(S)}for(let S of u)U(S)||(S=this.resolve(S)),S.then(b,p);return k}static all(u){return c.allWithCallback(u)}static allSettled(u){return(this&&this.prototype instanceof c?this:c).allWithCallback(u,{thenCallback:f=>({status:"fulfilled",value:f}),errorCallback:f=>({status:"rejected",reason:f})})}static allWithCallback(u,o){let f,k,b=new this((Z,F)=>{f=Z,k=F}),p=2,S=0;const D=[];for(let Z of u){U(Z)||(Z=this.resolve(Z));const F=S;try{Z.then(B=>{D[F]=o?o.thenCallback(B):B,p--,0===p&&f(D)},B=>{o?(D[F]=o.errorCallback(B),p--,0===p&&f(D)):k(B)})}catch(B){k(B)}p++,S++}return p-=2,0===p&&f(D),b}constructor(u){const o=this;if(!(o instanceof c))throw new Error("Must be an instanceof Promise.");o[X]=j,o[C]=[];try{const f=w();u&&u(f(I(o,y)),f(I(o,V)))}catch(f){Y(o,!1,f)}}get[Symbol.toStringTag](){return"Promise"}get[Symbol.species](){return c}then(u,o){var p;let f=null==(p=this.constructor)?void 0:p[Symbol.species];(!f||"function"!=typeof f)&&(f=this.constructor||c);const k=new f(A),b=n.current;return this[X]==j?this[C].push(b,k,u,o):te(this,b,k,u,o),k}catch(u){return this.then(null,u)}finally(u){var b;let o=null==(b=this.constructor)?void 0:b[Symbol.species];(!o||"function"!=typeof o)&&(o=c);const f=new o(A);f[T]=T;const k=n.current;return this[X]==j?this[C].push(k,f,u,u):te(this,k,f,u,u),f}}c.resolve=c.resolve,c.reject=c.reject,c.race=c.race,c.all=c.all;const t=e[v]=e.Promise;e.Promise=c;const _=m("thenPatched");function R(a){const u=a.prototype,o=r(u,"then");if(o&&(!1===o.writable||!o.configurable))return;const f=u.then;u[g]=f,a.prototype.then=function(k,b){return new c((S,D)=>{f.call(this,S,D)}).then(k,b)},a[_]=!0}return s.patchThen=R,t&&(R(t),le(e,"fetch",a=>function L(a){return function(u,o){let f=a.apply(u,o);if(f instanceof c)return f;let k=f.constructor;return k[_]||R(k),f}}(a))),Promise[n.__symbol__("uncaughtPromiseErrors")]=E,c}),Zone.__load_patch("toString",e=>{const n=Function.prototype.toString,s=H("OriginalDelegate"),r=H("Promise"),i=H("Error"),l=function(){if("function"==typeof this){const v=this[s];if(v)return"function"==typeof v?n.call(v):Object.prototype.toString.call(v);if(this===Promise){const g=e[r];if(g)return n.call(g)}if(this===Error){const g=e[i];if(g)return n.call(g)}}return n.call(this)};l[s]=n,Function.prototype.toString=l;const m=Object.prototype.toString;Object.prototype.toString=function(){return"function"==typeof Promise&&this instanceof Promise?"[object Promise]":m.call(this)}});let Te=!1;if(typeof window<"u")try{const e=Object.defineProperty({},"passive",{get:function(){Te=!0}});window.addEventListener("test",e,e),window.removeEventListener("test",e,e)}catch{Te=!1}const dt={useG:!0},ne={},Ye={},$e=new RegExp("^"+ge+"(\\w+)(true|false)$"),Je=H("propagationStopped");function Ke(e,n){const s=(n?n(e):e)+ae,r=(n?n(e):e)+ce,i=ge+s,l=ge+r;ne[e]={},ne[e][ae]=i,ne[e][ce]=l}function _t(e,n,s,r){const i=r&&r.add||Ze,l=r&&r.rm||Oe,m=r&&r.listeners||"eventListeners",E=r&&r.rmAll||"removeAllListeners",P=H(i),v="."+i+":",g="prependListener",M="."+g+":",O=function(C,T,J){if(C.isRemoved)return;const G=C.callback;let z;"object"==typeof G&&G.handleEvent&&(C.callback=y=>G.handleEvent(y),C.originalDelegate=G);try{C.invoke(C,T,[J])}catch(y){z=y}const j=C.options;return j&&"object"==typeof j&&j.once&&T[l].call(T,J.type,C.originalDelegate?C.originalDelegate:C.callback,j),z};function N(C,T,J){if(!(T=T||e.event))return;const G=C||T.target||e,z=G[ne[T.type][J?ce:ae]];if(z){const j=[];if(1===z.length){const y=O(z[0],G,T);y&&j.push(y)}else{const y=z.slice();for(let V=0;V<y.length&&(!T||!0!==T[Je]);V++){const h=O(y[V],G,T);h&&j.push(h)}}if(1===j.length)throw j[0];for(let y=0;y<j.length;y++){const V=j[y];n.nativeScheduleMicroTask(()=>{throw V})}}}const U=function(C){return N(this,C,!1)},x=function(C){return N(this,C,!0)};function K(C,T){if(!C)return!1;let J=!0;T&&void 0!==T.useG&&(J=T.useG);const G=T&&T.vh;let z=!0;T&&void 0!==T.chkDup&&(z=T.chkDup);let j=!1;T&&void 0!==T.rt&&(j=T.rt);let y=C;for(;y&&!y.hasOwnProperty(i);)y=be(y);if(!y&&C[i]&&(y=C),!y||y[P])return!1;const V=T&&T.eventNameToString,h={},I=y[P]=y[i],w=y[H(l)]=y[l],Q=y[H(m)]=y[m],se=y[H(E)]=y[E];let Y;T&&T.prepend&&(Y=y[H(T.prepend)]=y[T.prepend]);const c=J?function(o){if(!h.isExisting)return I.call(h.target,h.eventName,h.capture?x:U,h.options)}:function(o){return I.call(h.target,h.eventName,o.invoke,h.options)},t=J?function(o){if(!o.isRemoved){const f=ne[o.eventName];let k;f&&(k=f[o.capture?ce:ae]);const b=k&&o.target[k];if(b)for(let p=0;p<b.length;p++)if(b[p]===o){b.splice(p,1),o.isRemoved=!0,0===b.length&&(o.allRemoved=!0,o.target[k]=null);break}}if(o.allRemoved)return w.call(o.target,o.eventName,o.capture?x:U,o.options)}:function(o){return w.call(o.target,o.eventName,o.invoke,o.options)},R=T&&T.diff?T.diff:function(o,f){const k=typeof f;return"function"===k&&o.callback===f||"object"===k&&o.originalDelegate===f},L=Zone[H("UNPATCHED_EVENTS")],a=e[H("PASSIVE_EVENTS")],u=function(o,f,k,b,p=!1,S=!1){return function(){const D=this||e;let Z=arguments[0];T&&T.transferEventName&&(Z=T.transferEventName(Z));let F=arguments[1];if(!F)return o.apply(this,arguments);if(we&&"uncaughtException"===Z)return o.apply(this,arguments);let B=!1;if("function"!=typeof F){if(!F.handleEvent)return o.apply(this,arguments);B=!0}if(G&&!G(o,F,D,arguments))return;const he=Te&&!!a&&-1!==a.indexOf(Z),ee=function W(o,f){return!Te&&"object"==typeof o&&o?!!o.capture:Te&&f?"boolean"==typeof o?{capture:o,passive:!0}:o?"object"==typeof o&&!1!==o.passive?{...o,passive:!0}:o:{passive:!0}:o}(arguments[2],he),de=ee&&"object"==typeof ee&&ee.signal&&"object"==typeof ee.signal?ee.signal:void 0;if(null!=de&&de.aborted)return;if(L)for(let _e=0;_e<L.length;_e++)if(Z===L[_e])return he?o.call(D,Z,F,ee):o.apply(this,arguments);const Ge=!!ee&&("boolean"==typeof ee||ee.capture),nt=!(!ee||"object"!=typeof ee)&&ee.once,vt=Zone.current;let Ve=ne[Z];Ve||(Ke(Z,V),Ve=ne[Z]);const rt=Ve[Ge?ce:ae];let Se,pe=D[rt],ot=!1;if(pe){if(ot=!0,z)for(let _e=0;_e<pe.length;_e++)if(R(pe[_e],F))return}else pe=D[rt]=[];const st=D.constructor.name,it=Ye[st];it&&(Se=it[Z]),Se||(Se=st+f+(V?V(Z):Z)),h.options=ee,nt&&(h.options.once=!1),h.target=D,h.capture=Ge,h.eventName=Z,h.isExisting=ot;const ve=J?dt:void 0;ve&&(ve.taskData=h),de&&(h.options.signal=void 0);const ie=vt.scheduleEventTask(Se,F,ve,k,b);return de&&(h.options.signal=de,o.call(de,"abort",()=>{ie.zone.cancelTask(ie)},{once:!0})),h.target=null,ve&&(ve.taskData=null),nt&&(ee.once=!0),!Te&&"boolean"==typeof ie.options||(ie.options=ee),ie.target=D,ie.capture=Ge,ie.eventName=Z,B&&(ie.originalDelegate=F),S?pe.unshift(ie):pe.push(ie),p?D:void 0}};return y[i]=u(I,v,c,t,j),Y&&(y[g]=u(Y,M,function(o){return Y.call(h.target,h.eventName,o.invoke,h.options)},t,j,!0)),y[l]=function(){const o=this||e;let f=arguments[0];T&&T.transferEventName&&(f=T.transferEventName(f));const k=arguments[2],b=!!k&&("boolean"==typeof k||k.capture),p=arguments[1];if(!p)return w.apply(this,arguments);if(G&&!G(w,p,o,arguments))return;const S=ne[f];let D;S&&(D=S[b?ce:ae]);const Z=D&&o[D];if(Z)for(let F=0;F<Z.length;F++){const B=Z[F];if(R(B,p))return Z.splice(F,1),B.isRemoved=!0,0===Z.length&&(B.allRemoved=!0,o[D]=null,"string"==typeof f)&&(o[ge+"ON_PROPERTY"+f]=null),B.zone.cancelTask(B),j?o:void 0}return w.apply(this,arguments)},y[m]=function(){const o=this||e;let f=arguments[0];T&&T.transferEventName&&(f=T.transferEventName(f));const k=[],b=Qe(o,V?V(f):f);for(let p=0;p<b.length;p++){const S=b[p];k.push(S.originalDelegate?S.originalDelegate:S.callback)}return k},y[E]=function(){const o=this||e;let f=arguments[0];if(f){T&&T.transferEventName&&(f=T.transferEventName(f));const k=ne[f];if(k){const S=o[k[ae]],D=o[k[ce]];if(S){const Z=S.slice();for(let F=0;F<Z.length;F++){const B=Z[F];this[l].call(this,f,B.originalDelegate?B.originalDelegate:B.callback,B.options)}}if(D){const Z=D.slice();for(let F=0;F<Z.length;F++){const B=Z[F];this[l].call(this,f,B.originalDelegate?B.originalDelegate:B.callback,B.options)}}}}else{const k=Object.keys(o);for(let b=0;b<k.length;b++){const S=$e.exec(k[b]);let D=S&&S[1];D&&"removeListener"!==D&&this[E].call(this,D)}this[E].call(this,"removeListener")}if(j)return this},ue(y[i],I),ue(y[l],w),se&&ue(y[E],se),Q&&ue(y[m],Q),!0}let X=[];for(let C=0;C<s.length;C++)X[C]=K(s[C],r);return X}function Qe(e,n){if(!n){const l=[];for(let m in e){const E=$e.exec(m);let P=E&&E[1];if(P&&(!n||P===n)){const v=e[m];if(v)for(let g=0;g<v.length;g++)l.push(v[g])}}return l}let s=ne[n];s||(Ke(n),s=ne[n]);const r=e[s[ae]],i=e[s[ce]];return r?i?r.concat(i):r.slice():i?i.slice():[]}function Et(e,n){const s=e.Event;s&&s.prototype&&n.patchMethod(s.prototype,"stopImmediatePropagation",r=>function(i,l){i[Je]=!0,r&&r.apply(i,l)})}function Tt(e,n,s,r,i){const l=Zone.__symbol__(r);if(n[l])return;const m=n[l]=n[r];n[r]=function(E,P,v){return P&&P.prototype&&i.forEach(function(g){const M=`${s}.${r}::`+g,O=P.prototype;try{if(O.hasOwnProperty(g)){const N=e.ObjectGetOwnPropertyDescriptor(O,g);N&&N.value?(N.value=e.wrapWithCurrentZone(N.value,M),e._redefineProperty(P.prototype,g,N)):O[g]&&(O[g]=e.wrapWithCurrentZone(O[g],M))}else O[g]&&(O[g]=e.wrapWithCurrentZone(O[g],M))}catch{}}),m.call(n,E,P,v)},e.attachOriginToPatched(n[r],m)}function et(e,n,s){if(!s||0===s.length)return n;const r=s.filter(l=>l.target===e);if(!r||0===r.length)return n;const i=r[0].ignoreProperties;return n.filter(l=>-1===i.indexOf(l))}function tt(e,n,s,r){e&&Xe(e,et(e,n,s),r)}function xe(e){return Object.getOwnPropertyNames(e).filter(n=>n.startsWith("on")&&n.length>2).map(n=>n.substring(2))}Zone.__load_patch("util",(e,n,s)=>{const r=xe(e);s.patchOnProperties=Xe,s.patchMethod=le,s.bindArguments=je,s.patchMacroTask=ut;const i=n.__symbol__("BLACK_LISTED_EVENTS"),l=n.__symbol__("UNPATCHED_EVENTS");e[l]&&(e[i]=e[l]),e[i]&&(n[i]=n[l]=e[i]),s.patchEventPrototype=Et,s.patchEventTarget=_t,s.isIEOrEdge=ht,s.ObjectDefineProperty=me,s.ObjectGetOwnPropertyDescriptor=fe,s.ObjectCreate=De,s.ArraySlice=ct,s.patchClass=ke,s.wrapWithCurrentZone=Me,s.filterProperties=et,s.attachOriginToPatched=ue,s._redefineProperty=Object.defineProperty,s.patchCallbacks=Tt,s.getGlobalObjects=()=>({globalSources:Ye,zoneSymbolEventNames:ne,eventNames:r,isBrowser:Ae,isMix:Ue,isNode:we,TRUE_STR:ce,FALSE_STR:ae,ZONE_SYMBOL_PREFIX:ge,ADD_EVENT_LISTENER_STR:Ze,REMOVE_EVENT_LISTENER_STR:Oe})});const Ce=H("zoneTask");function ye(e,n,s,r){let i=null,l=null;s+=r;const m={};function E(v){const g=v.data;return g.args[0]=function(){return v.invoke.apply(this,arguments)},g.handleId=i.apply(e,g.args),v}function P(v){return l.call(e,v.data.handleId)}i=le(e,n+=r,v=>function(g,M){if("function"==typeof M[0]){const O={isPeriodic:"Interval"===r,delay:"Timeout"===r||"Interval"===r?M[1]||0:void 0,args:M},N=M[0];M[0]=function(){try{return N.apply(this,arguments)}finally{O.isPeriodic||("number"==typeof O.handleId?delete m[O.handleId]:O.handleId&&(O.handleId[Ce]=null))}};const U=Le(n,M[0],O,E,P);if(!U)return U;const x=U.data.handleId;return"number"==typeof x?m[x]=U:x&&(x[Ce]=U),x&&x.ref&&x.unref&&"function"==typeof x.ref&&"function"==typeof x.unref&&(U.ref=x.ref.bind(x),U.unref=x.unref.bind(x)),"number"==typeof x||x?x:U}return v.apply(e,M)}),l=le(e,s,v=>function(g,M){const O=M[0];let N;"number"==typeof O?N=m[O]:(N=O&&O[Ce],N||(N=O)),N&&"string"==typeof N.type?"notScheduled"!==N.state&&(N.cancelFn&&N.data.isPeriodic||0===N.runCount)&&("number"==typeof O?delete m[O]:O&&(O[Ce]=null),N.zone.cancelTask(N)):v.apply(e,M)})}Zone.__load_patch("legacy",e=>{const n=e[Zone.__symbol__("legacyPatch")];n&&n()}),Zone.__load_patch("timers",e=>{const n="set",s="clear";ye(e,n,s,"Timeout"),ye(e,n,s,"Interval"),ye(e,n,s,"Immediate")}),Zone.__load_patch("requestAnimationFrame",e=>{ye(e,"request","cancel","AnimationFrame"),ye(e,"mozRequest","mozCancel","AnimationFrame"),ye(e,"webkitRequest","webkitCancel","AnimationFrame")}),Zone.__load_patch("blocking",(e,n)=>{const s=["alert","prompt","confirm"];for(let r=0;r<s.length;r++)le(e,s[r],(l,m,E)=>function(P,v){return n.current.run(l,e,v,E)})}),Zone.__load_patch("EventTarget",(e,n,s)=>{(function kt(e,n){n.patchEventPrototype(e,n)})(e,s),function gt(e,n){if(Zone[n.symbol("patchEventTarget")])return;const{eventNames:s,zoneSymbolEventNames:r,TRUE_STR:i,FALSE_STR:l,ZONE_SYMBOL_PREFIX:m}=n.getGlobalObjects();for(let P=0;P<s.length;P++){const v=s[P],O=m+(v+l),N=m+(v+i);r[v]={},r[v][l]=O,r[v][i]=N}const E=e.EventTarget;E&&E.prototype&&n.patchEventTarget(e,n,[E&&E.prototype])}(e,s);const r=e.XMLHttpRequestEventTarget;r&&r.prototype&&s.patchEventTarget(e,s,[r.prototype])}),Zone.__load_patch("MutationObserver",(e,n,s)=>{ke("MutationObserver"),ke("WebKitMutationObserver")}),Zone.__load_patch("IntersectionObserver",(e,n,s)=>{ke("IntersectionObserver")}),Zone.__load_patch("FileReader",(e,n,s)=>{ke("FileReader")}),Zone.__load_patch("on_property",(e,n,s)=>{!function yt(e,n){if(we&&!Ue||Zone[e.symbol("patchEvents")])return;const s=n.__Zone_ignore_on_properties;let r=[];if(Ae){const i=window;r=r.concat(["Document","SVGElement","Element","HTMLElement","HTMLBodyElement","HTMLMediaElement","HTMLFrameSetElement","HTMLFrameElement","HTMLIFrameElement","HTMLMarqueeElement","Worker"]);const l=function ft(){try{const e=Ee.navigator.userAgent;if(-1!==e.indexOf("MSIE ")||-1!==e.indexOf("Trident/"))return!0}catch{}return!1}()?[{target:i,ignoreProperties:["error"]}]:[];tt(i,xe(i),s&&s.concat(l),be(i))}r=r.concat(["XMLHttpRequest","XMLHttpRequestEventTarget","IDBIndex","IDBRequest","IDBOpenDBRequest","IDBDatabase","IDBTransaction","IDBCursor","WebSocket"]);for(let i=0;i<r.length;i++){const l=n[r[i]];l&&l.prototype&&tt(l.prototype,xe(l.prototype),s)}}(s,e)}),Zone.__load_patch("customElements",(e,n,s)=>{!function mt(e,n){const{isBrowser:s,isMix:r}=n.getGlobalObjects();(s||r)&&e.customElements&&"customElements"in e&&n.patchCallbacks(n,e.customElements,"customElements","define",["connectedCallback","disconnectedCallback","adoptedCallback","attributeChangedCallback"])}(e,s)}),Zone.__load_patch("XHR",(e,n)=>{!function P(v){const g=v.XMLHttpRequest;if(!g)return;const M=g.prototype;let N=M[Ne],U=M[Ie];if(!N){const h=v.XMLHttpRequestEventTarget;if(h){const I=h.prototype;N=I[Ne],U=I[Ie]}}const x="readystatechange",K="scheduled";function X(h){const I=h.data,w=I.target;w[l]=!1,w[E]=!1;const Q=w[i];N||(N=w[Ne],U=w[Ie]),Q&&U.call(w,x,Q);const se=w[i]=()=>{if(w.readyState===w.DONE)if(!I.aborted&&w[l]&&h.state===K){const W=w[n.__symbol__("loadfalse")];if(0!==w.status&&W&&W.length>0){const oe=h.invoke;h.invoke=function(){const te=w[n.__symbol__("loadfalse")];for(let q=0;q<te.length;q++)te[q]===h&&te.splice(q,1);!I.aborted&&h.state===K&&oe.call(h)},W.push(h)}else h.invoke()}else!I.aborted&&!1===w[l]&&(w[E]=!0)};return N.call(w,x,se),w[s]||(w[s]=h),y.apply(w,I.args),w[l]=!0,h}function C(){}function T(h){const I=h.data;return I.aborted=!0,V.apply(I.target,I.args)}const J=le(M,"open",()=>function(h,I){return h[r]=0==I[2],h[m]=I[1],J.apply(h,I)}),z=H("fetchTaskAborting"),j=H("fetchTaskScheduling"),y=le(M,"send",()=>function(h,I){if(!0===n.current[j]||h[r])return y.apply(h,I);{const w={target:h,url:h[m],isPeriodic:!1,args:I,aborted:!1},Q=Le("XMLHttpRequest.send",C,w,X,T);h&&!0===h[E]&&!w.aborted&&Q.state===K&&Q.invoke()}}),V=le(M,"abort",()=>function(h,I){const w=function O(h){return h[s]}(h);if(w&&"string"==typeof w.type){if(null==w.cancelFn||w.data&&w.data.aborted)return;w.zone.cancelTask(w)}else if(!0===n.current[z])return V.apply(h,I)})}(e);const s=H("xhrTask"),r=H("xhrSync"),i=H("xhrListener"),l=H("xhrScheduled"),m=H("xhrURL"),E=H("xhrErrorBeforeScheduled")}),Zone.__load_patch("geolocation",e=>{e.navigator&&e.navigator.geolocation&&function lt(e,n){const s=e.constructor.name;for(let r=0;r<n.length;r++){const i=n[r],l=e[i];if(l){if(!Fe(fe(e,i)))continue;e[i]=(E=>{const P=function(){return E.apply(this,je(arguments,s+"."+i))};return ue(P,E),P})(l)}}}(e.navigator.geolocation,["getCurrentPosition","watchPosition"])}),Zone.__load_patch("PromiseRejectionEvent",(e,n)=>{function s(r){return function(i){Qe(e,r).forEach(m=>{const E=e.PromiseRejectionEvent;if(E){const P=new E(r,{promise:i.promise,reason:i.rejection});m.invoke(P)}})}}e.PromiseRejectionEvent&&(n[H("unhandledPromiseRejectionHandler")]=s("unhandledrejection"),n[H("rejectionHandledHandler")]=s("rejectionhandled"))}),Zone.__load_patch("queueMicrotask",(e,n,s)=>{!function pt(e,n){n.patchMethod(e,"queueMicrotask",s=>function(r,i){Zone.current.scheduleMicroTask("queueMicrotask",i[0])})}(e,s)})}},fe=>{fe(fe.s=728)}]);