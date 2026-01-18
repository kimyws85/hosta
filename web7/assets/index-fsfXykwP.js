(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const m of document.querySelectorAll('link[rel="modulepreload"]'))o(m);new MutationObserver(m=>{for(const h of m)if(h.type==="childList")for(const v of h.addedNodes)v.tagName==="LINK"&&v.rel==="modulepreload"&&o(v)}).observe(document,{childList:!0,subtree:!0});function d(m){const h={};return m.integrity&&(h.integrity=m.integrity),m.referrerPolicy&&(h.referrerPolicy=m.referrerPolicy),m.crossOrigin==="use-credentials"?h.credentials="include":m.crossOrigin==="anonymous"?h.credentials="omit":h.credentials="same-origin",h}function o(m){if(m.ep)return;m.ep=!0;const h=d(m);fetch(m.href,h)}})();var _c={exports:{}},ka={};var eh;function fx(){if(eh)return ka;eh=1;var u=Symbol.for("react.transitional.element"),r=Symbol.for("react.fragment");function d(o,m,h){var v=null;if(h!==void 0&&(v=""+h),m.key!==void 0&&(v=""+m.key),"key"in m){h={};for(var C in m)C!=="key"&&(h[C]=m[C])}else h=m;return m=h.ref,{$$typeof:u,type:o,key:v,ref:m!==void 0?m:null,props:h}}return ka.Fragment=r,ka.jsx=d,ka.jsxs=d,ka}var th;function hx(){return th||(th=1,_c.exports=fx()),_c.exports}var n=hx(),Lc={exports:{}},te={};var lh;function mx(){if(lh)return te;lh=1;var u=Symbol.for("react.transitional.element"),r=Symbol.for("react.portal"),d=Symbol.for("react.fragment"),o=Symbol.for("react.strict_mode"),m=Symbol.for("react.profiler"),h=Symbol.for("react.consumer"),v=Symbol.for("react.context"),C=Symbol.for("react.forward_ref"),x=Symbol.for("react.suspense"),y=Symbol.for("react.memo"),D=Symbol.for("react.lazy"),R=Symbol.for("react.activity"),k=Symbol.iterator;function Q(g){return g===null||typeof g!="object"?null:(g=k&&g[k]||g["@@iterator"],typeof g=="function"?g:null)}var X={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},w=Object.assign,V={};function J(g,H,q){this.props=g,this.context=H,this.refs=V,this.updater=q||X}J.prototype.isReactComponent={},J.prototype.setState=function(g,H){if(typeof g!="object"&&typeof g!="function"&&g!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,g,H,"setState")},J.prototype.forceUpdate=function(g){this.updater.enqueueForceUpdate(this,g,"forceUpdate")};function G(){}G.prototype=J.prototype;function F(g,H,q){this.props=g,this.context=H,this.refs=V,this.updater=q||X}var he=F.prototype=new G;he.constructor=F,w(he,J.prototype),he.isPureReactComponent=!0;var ie=Array.isArray;function je(){}var W={H:null,A:null,T:null,S:null},me=Object.prototype.hasOwnProperty;function Re(g,H,q){var K=q.ref;return{$$typeof:u,type:g,key:H,ref:K!==void 0?K:null,props:q}}function ke(g,H){return Re(g.type,H,g.props)}function Ae(g){return typeof g=="object"&&g!==null&&g.$$typeof===u}function Ve(g){var H={"=":"=0",":":"=2"};return"$"+g.replace(/[=:]/g,function(q){return H[q]})}var _t=/\/+/g;function bt(g,H){return typeof g=="object"&&g!==null&&g.key!=null?Ve(""+g.key):H.toString(36)}function ot(g){switch(g.status){case"fulfilled":return g.value;case"rejected":throw g.reason;default:switch(typeof g.status=="string"?g.then(je,je):(g.status="pending",g.then(function(H){g.status==="pending"&&(g.status="fulfilled",g.value=H)},function(H){g.status==="pending"&&(g.status="rejected",g.reason=H)})),g.status){case"fulfilled":return g.value;case"rejected":throw g.reason}}throw g}function O(g,H,q,K,le){var se=typeof g;(se==="undefined"||se==="boolean")&&(g=null);var ye=!1;if(g===null)ye=!0;else switch(se){case"bigint":case"string":case"number":ye=!0;break;case"object":switch(g.$$typeof){case u:case r:ye=!0;break;case D:return ye=g._init,O(ye(g._payload),H,q,K,le)}}if(ye)return le=le(g),ye=K===""?"."+bt(g,0):K,ie(le)?(q="",ye!=null&&(q=ye.replace(_t,"$&/")+"/"),O(le,H,q,"",function(Qn){return Qn})):le!=null&&(Ae(le)&&(le=ke(le,q+(le.key==null||g&&g.key===le.key?"":(""+le.key).replace(_t,"$&/")+"/")+ye)),H.push(le)),1;ye=0;var tt=K===""?".":K+":";if(ie(g))for(var Be=0;Be<g.length;Be++)K=g[Be],se=tt+bt(K,Be),ye+=O(K,H,q,se,le);else if(Be=Q(g),typeof Be=="function")for(g=Be.call(g),Be=0;!(K=g.next()).done;)K=K.value,se=tt+bt(K,Be++),ye+=O(K,H,q,se,le);else if(se==="object"){if(typeof g.then=="function")return O(ot(g),H,q,K,le);throw H=String(g),Error("Objects are not valid as a React child (found: "+(H==="[object Object]"?"object with keys {"+Object.keys(g).join(", ")+"}":H)+"). If you meant to render a collection of children, use an array instead.")}return ye}function L(g,H,q){if(g==null)return g;var K=[],le=0;return O(g,K,"","",function(se){return H.call(q,se,le++)}),K}function B(g){if(g._status===-1){var H=g._result;H=H(),H.then(function(q){(g._status===0||g._status===-1)&&(g._status=1,g._result=q)},function(q){(g._status===0||g._status===-1)&&(g._status=2,g._result=q)}),g._status===-1&&(g._status=0,g._result=H)}if(g._status===1)return g._result.default;throw g._result}var I=typeof reportError=="function"?reportError:function(g){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var H=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof g=="object"&&g!==null&&typeof g.message=="string"?String(g.message):String(g),error:g});if(!window.dispatchEvent(H))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",g);return}console.error(g)},re={map:L,forEach:function(g,H,q){L(g,function(){H.apply(this,arguments)},q)},count:function(g){var H=0;return L(g,function(){H++}),H},toArray:function(g){return L(g,function(H){return H})||[]},only:function(g){if(!Ae(g))throw Error("React.Children.only expected to receive a single React element child.");return g}};return te.Activity=R,te.Children=re,te.Component=J,te.Fragment=d,te.Profiler=m,te.PureComponent=F,te.StrictMode=o,te.Suspense=x,te.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=W,te.__COMPILER_RUNTIME={__proto__:null,c:function(g){return W.H.useMemoCache(g)}},te.cache=function(g){return function(){return g.apply(null,arguments)}},te.cacheSignal=function(){return null},te.cloneElement=function(g,H,q){if(g==null)throw Error("The argument must be a React element, but you passed "+g+".");var K=w({},g.props),le=g.key;if(H!=null)for(se in H.key!==void 0&&(le=""+H.key),H)!me.call(H,se)||se==="key"||se==="__self"||se==="__source"||se==="ref"&&H.ref===void 0||(K[se]=H[se]);var se=arguments.length-2;if(se===1)K.children=q;else if(1<se){for(var ye=Array(se),tt=0;tt<se;tt++)ye[tt]=arguments[tt+2];K.children=ye}return Re(g.type,le,K)},te.createContext=function(g){return g={$$typeof:v,_currentValue:g,_currentValue2:g,_threadCount:0,Provider:null,Consumer:null},g.Provider=g,g.Consumer={$$typeof:h,_context:g},g},te.createElement=function(g,H,q){var K,le={},se=null;if(H!=null)for(K in H.key!==void 0&&(se=""+H.key),H)me.call(H,K)&&K!=="key"&&K!=="__self"&&K!=="__source"&&(le[K]=H[K]);var ye=arguments.length-2;if(ye===1)le.children=q;else if(1<ye){for(var tt=Array(ye),Be=0;Be<ye;Be++)tt[Be]=arguments[Be+2];le.children=tt}if(g&&g.defaultProps)for(K in ye=g.defaultProps,ye)le[K]===void 0&&(le[K]=ye[K]);return Re(g,se,le)},te.createRef=function(){return{current:null}},te.forwardRef=function(g){return{$$typeof:C,render:g}},te.isValidElement=Ae,te.lazy=function(g){return{$$typeof:D,_payload:{_status:-1,_result:g},_init:B}},te.memo=function(g,H){return{$$typeof:y,type:g,compare:H===void 0?null:H}},te.startTransition=function(g){var H=W.T,q={};W.T=q;try{var K=g(),le=W.S;le!==null&&le(q,K),typeof K=="object"&&K!==null&&typeof K.then=="function"&&K.then(je,I)}catch(se){I(se)}finally{H!==null&&q.types!==null&&(H.types=q.types),W.T=H}},te.unstable_useCacheRefresh=function(){return W.H.useCacheRefresh()},te.use=function(g){return W.H.use(g)},te.useActionState=function(g,H,q){return W.H.useActionState(g,H,q)},te.useCallback=function(g,H){return W.H.useCallback(g,H)},te.useContext=function(g){return W.H.useContext(g)},te.useDebugValue=function(){},te.useDeferredValue=function(g,H){return W.H.useDeferredValue(g,H)},te.useEffect=function(g,H){return W.H.useEffect(g,H)},te.useEffectEvent=function(g){return W.H.useEffectEvent(g)},te.useId=function(){return W.H.useId()},te.useImperativeHandle=function(g,H,q){return W.H.useImperativeHandle(g,H,q)},te.useInsertionEffect=function(g,H){return W.H.useInsertionEffect(g,H)},te.useLayoutEffect=function(g,H){return W.H.useLayoutEffect(g,H)},te.useMemo=function(g,H){return W.H.useMemo(g,H)},te.useOptimistic=function(g,H){return W.H.useOptimistic(g,H)},te.useReducer=function(g,H,q){return W.H.useReducer(g,H,q)},te.useRef=function(g){return W.H.useRef(g)},te.useState=function(g){return W.H.useState(g)},te.useSyncExternalStore=function(g,H,q){return W.H.useSyncExternalStore(g,H,q)},te.useTransition=function(){return W.H.useTransition()},te.version="19.2.3",te}var nh;function Vc(){return nh||(nh=1,Lc.exports=mx()),Lc.exports}var b=Vc(),Hc={exports:{}},Ba={},kc={exports:{}},Bc={};var ah;function px(){return ah||(ah=1,(function(u){function r(O,L){var B=O.length;O.push(L);e:for(;0<B;){var I=B-1>>>1,re=O[I];if(0<m(re,L))O[I]=L,O[B]=re,B=I;else break e}}function d(O){return O.length===0?null:O[0]}function o(O){if(O.length===0)return null;var L=O[0],B=O.pop();if(B!==L){O[0]=B;e:for(var I=0,re=O.length,g=re>>>1;I<g;){var H=2*(I+1)-1,q=O[H],K=H+1,le=O[K];if(0>m(q,B))K<re&&0>m(le,q)?(O[I]=le,O[K]=B,I=K):(O[I]=q,O[H]=B,I=H);else if(K<re&&0>m(le,B))O[I]=le,O[K]=B,I=K;else break e}}return L}function m(O,L){var B=O.sortIndex-L.sortIndex;return B!==0?B:O.id-L.id}if(u.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var h=performance;u.unstable_now=function(){return h.now()}}else{var v=Date,C=v.now();u.unstable_now=function(){return v.now()-C}}var x=[],y=[],D=1,R=null,k=3,Q=!1,X=!1,w=!1,V=!1,J=typeof setTimeout=="function"?setTimeout:null,G=typeof clearTimeout=="function"?clearTimeout:null,F=typeof setImmediate<"u"?setImmediate:null;function he(O){for(var L=d(y);L!==null;){if(L.callback===null)o(y);else if(L.startTime<=O)o(y),L.sortIndex=L.expirationTime,r(x,L);else break;L=d(y)}}function ie(O){if(w=!1,he(O),!X)if(d(x)!==null)X=!0,je||(je=!0,Ve());else{var L=d(y);L!==null&&ot(ie,L.startTime-O)}}var je=!1,W=-1,me=5,Re=-1;function ke(){return V?!0:!(u.unstable_now()-Re<me)}function Ae(){if(V=!1,je){var O=u.unstable_now();Re=O;var L=!0;try{e:{X=!1,w&&(w=!1,G(W),W=-1),Q=!0;var B=k;try{t:{for(he(O),R=d(x);R!==null&&!(R.expirationTime>O&&ke());){var I=R.callback;if(typeof I=="function"){R.callback=null,k=R.priorityLevel;var re=I(R.expirationTime<=O);if(O=u.unstable_now(),typeof re=="function"){R.callback=re,he(O),L=!0;break t}R===d(x)&&o(x),he(O)}else o(x);R=d(x)}if(R!==null)L=!0;else{var g=d(y);g!==null&&ot(ie,g.startTime-O),L=!1}}break e}finally{R=null,k=B,Q=!1}L=void 0}}finally{L?Ve():je=!1}}}var Ve;if(typeof F=="function")Ve=function(){F(Ae)};else if(typeof MessageChannel<"u"){var _t=new MessageChannel,bt=_t.port2;_t.port1.onmessage=Ae,Ve=function(){bt.postMessage(null)}}else Ve=function(){J(Ae,0)};function ot(O,L){W=J(function(){O(u.unstable_now())},L)}u.unstable_IdlePriority=5,u.unstable_ImmediatePriority=1,u.unstable_LowPriority=4,u.unstable_NormalPriority=3,u.unstable_Profiling=null,u.unstable_UserBlockingPriority=2,u.unstable_cancelCallback=function(O){O.callback=null},u.unstable_forceFrameRate=function(O){0>O||125<O?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):me=0<O?Math.floor(1e3/O):5},u.unstable_getCurrentPriorityLevel=function(){return k},u.unstable_next=function(O){switch(k){case 1:case 2:case 3:var L=3;break;default:L=k}var B=k;k=L;try{return O()}finally{k=B}},u.unstable_requestPaint=function(){V=!0},u.unstable_runWithPriority=function(O,L){switch(O){case 1:case 2:case 3:case 4:case 5:break;default:O=3}var B=k;k=O;try{return L()}finally{k=B}},u.unstable_scheduleCallback=function(O,L,B){var I=u.unstable_now();switch(typeof B=="object"&&B!==null?(B=B.delay,B=typeof B=="number"&&0<B?I+B:I):B=I,O){case 1:var re=-1;break;case 2:re=250;break;case 5:re=1073741823;break;case 4:re=1e4;break;default:re=5e3}return re=B+re,O={id:D++,callback:L,priorityLevel:O,startTime:B,expirationTime:re,sortIndex:-1},B>I?(O.sortIndex=B,r(y,O),d(x)===null&&O===d(y)&&(w?(G(W),W=-1):w=!0,ot(ie,B-I))):(O.sortIndex=re,r(x,O),X||Q||(X=!0,je||(je=!0,Ve()))),O},u.unstable_shouldYield=ke,u.unstable_wrapCallback=function(O){var L=k;return function(){var B=k;k=L;try{return O.apply(this,arguments)}finally{k=B}}}})(Bc)),Bc}var ih;function xx(){return ih||(ih=1,kc.exports=px()),kc.exports}var qc={exports:{}},et={};var sh;function vx(){if(sh)return et;sh=1;var u=Vc();function r(x){var y="https://react.dev/errors/"+x;if(1<arguments.length){y+="?args[]="+encodeURIComponent(arguments[1]);for(var D=2;D<arguments.length;D++)y+="&args[]="+encodeURIComponent(arguments[D])}return"Minified React error #"+x+"; visit "+y+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function d(){}var o={d:{f:d,r:function(){throw Error(r(522))},D:d,C:d,L:d,m:d,X:d,S:d,M:d},p:0,findDOMNode:null},m=Symbol.for("react.portal");function h(x,y,D){var R=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:m,key:R==null?null:""+R,children:x,containerInfo:y,implementation:D}}var v=u.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function C(x,y){if(x==="font")return"";if(typeof y=="string")return y==="use-credentials"?y:""}return et.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=o,et.createPortal=function(x,y){var D=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!y||y.nodeType!==1&&y.nodeType!==9&&y.nodeType!==11)throw Error(r(299));return h(x,y,null,D)},et.flushSync=function(x){var y=v.T,D=o.p;try{if(v.T=null,o.p=2,x)return x()}finally{v.T=y,o.p=D,o.d.f()}},et.preconnect=function(x,y){typeof x=="string"&&(y?(y=y.crossOrigin,y=typeof y=="string"?y==="use-credentials"?y:"":void 0):y=null,o.d.C(x,y))},et.prefetchDNS=function(x){typeof x=="string"&&o.d.D(x)},et.preinit=function(x,y){if(typeof x=="string"&&y&&typeof y.as=="string"){var D=y.as,R=C(D,y.crossOrigin),k=typeof y.integrity=="string"?y.integrity:void 0,Q=typeof y.fetchPriority=="string"?y.fetchPriority:void 0;D==="style"?o.d.S(x,typeof y.precedence=="string"?y.precedence:void 0,{crossOrigin:R,integrity:k,fetchPriority:Q}):D==="script"&&o.d.X(x,{crossOrigin:R,integrity:k,fetchPriority:Q,nonce:typeof y.nonce=="string"?y.nonce:void 0})}},et.preinitModule=function(x,y){if(typeof x=="string")if(typeof y=="object"&&y!==null){if(y.as==null||y.as==="script"){var D=C(y.as,y.crossOrigin);o.d.M(x,{crossOrigin:D,integrity:typeof y.integrity=="string"?y.integrity:void 0,nonce:typeof y.nonce=="string"?y.nonce:void 0})}}else y==null&&o.d.M(x)},et.preload=function(x,y){if(typeof x=="string"&&typeof y=="object"&&y!==null&&typeof y.as=="string"){var D=y.as,R=C(D,y.crossOrigin);o.d.L(x,D,{crossOrigin:R,integrity:typeof y.integrity=="string"?y.integrity:void 0,nonce:typeof y.nonce=="string"?y.nonce:void 0,type:typeof y.type=="string"?y.type:void 0,fetchPriority:typeof y.fetchPriority=="string"?y.fetchPriority:void 0,referrerPolicy:typeof y.referrerPolicy=="string"?y.referrerPolicy:void 0,imageSrcSet:typeof y.imageSrcSet=="string"?y.imageSrcSet:void 0,imageSizes:typeof y.imageSizes=="string"?y.imageSizes:void 0,media:typeof y.media=="string"?y.media:void 0})}},et.preloadModule=function(x,y){if(typeof x=="string")if(y){var D=C(y.as,y.crossOrigin);o.d.m(x,{as:typeof y.as=="string"&&y.as!=="script"?y.as:void 0,crossOrigin:D,integrity:typeof y.integrity=="string"?y.integrity:void 0})}else o.d.m(x)},et.requestFormReset=function(x){o.d.r(x)},et.unstable_batchedUpdates=function(x,y){return x(y)},et.useFormState=function(x,y,D){return v.H.useFormState(x,y,D)},et.useFormStatus=function(){return v.H.useHostTransitionStatus()},et.version="19.2.3",et}var uh;function yx(){if(uh)return qc.exports;uh=1;function u(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(u)}catch(r){console.error(r)}}return u(),qc.exports=vx(),qc.exports}var ch;function jx(){if(ch)return Ba;ch=1;var u=xx(),r=Vc(),d=yx();function o(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var l=2;l<arguments.length;l++)t+="&args[]="+encodeURIComponent(arguments[l])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function m(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function h(e){var t=e,l=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(l=t.return),e=t.return;while(e)}return t.tag===3?l:null}function v(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function C(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function x(e){if(h(e)!==e)throw Error(o(188))}function y(e){var t=e.alternate;if(!t){if(t=h(e),t===null)throw Error(o(188));return t!==e?null:e}for(var l=e,a=t;;){var i=l.return;if(i===null)break;var s=i.alternate;if(s===null){if(a=i.return,a!==null){l=a;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===l)return x(i),e;if(s===a)return x(i),t;s=s.sibling}throw Error(o(188))}if(l.return!==a.return)l=i,a=s;else{for(var c=!1,f=i.child;f;){if(f===l){c=!0,l=i,a=s;break}if(f===a){c=!0,a=i,l=s;break}f=f.sibling}if(!c){for(f=s.child;f;){if(f===l){c=!0,l=s,a=i;break}if(f===a){c=!0,a=s,l=i;break}f=f.sibling}if(!c)throw Error(o(189))}}if(l.alternate!==a)throw Error(o(190))}if(l.tag!==3)throw Error(o(188));return l.stateNode.current===l?e:t}function D(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=D(e),t!==null)return t;e=e.sibling}return null}var R=Object.assign,k=Symbol.for("react.element"),Q=Symbol.for("react.transitional.element"),X=Symbol.for("react.portal"),w=Symbol.for("react.fragment"),V=Symbol.for("react.strict_mode"),J=Symbol.for("react.profiler"),G=Symbol.for("react.consumer"),F=Symbol.for("react.context"),he=Symbol.for("react.forward_ref"),ie=Symbol.for("react.suspense"),je=Symbol.for("react.suspense_list"),W=Symbol.for("react.memo"),me=Symbol.for("react.lazy"),Re=Symbol.for("react.activity"),ke=Symbol.for("react.memo_cache_sentinel"),Ae=Symbol.iterator;function Ve(e){return e===null||typeof e!="object"?null:(e=Ae&&e[Ae]||e["@@iterator"],typeof e=="function"?e:null)}var _t=Symbol.for("react.client.reference");function bt(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===_t?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case w:return"Fragment";case J:return"Profiler";case V:return"StrictMode";case ie:return"Suspense";case je:return"SuspenseList";case Re:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case X:return"Portal";case F:return e.displayName||"Context";case G:return(e._context.displayName||"Context")+".Consumer";case he:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case W:return t=e.displayName||null,t!==null?t:bt(e.type)||"Memo";case me:t=e._payload,e=e._init;try{return bt(e(t))}catch{}}return null}var ot=Array.isArray,O=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,L=d.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,B={pending:!1,data:null,method:null,action:null},I=[],re=-1;function g(e){return{current:e}}function H(e){0>re||(e.current=I[re],I[re]=null,re--)}function q(e,t){re++,I[re]=e.current,e.current=t}var K=g(null),le=g(null),se=g(null),ye=g(null);function tt(e,t){switch(q(se,t),q(le,e),q(K,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Cf(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Cf(t),e=Ef(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}H(K),q(K,e)}function Be(){H(K),H(le),H(se)}function Qn(e){e.memoizedState!==null&&q(ye,e);var t=K.current,l=Ef(t,e.type);t!==l&&(q(le,e),q(K,l))}function Qa(e){le.current===e&&(H(K),H(le)),ye.current===e&&(H(ye),Ua._currentValue=B)}var xs,Wc;function kl(e){if(xs===void 0)try{throw Error()}catch(l){var t=l.stack.trim().match(/\n( *(at )?)/);xs=t&&t[1]||"",Wc=-1<l.stack.indexOf(`
    at`)?" (<anonymous>)":-1<l.stack.indexOf("@")?"@unknown:0:0":""}return`
`+xs+e+Wc}var vs=!1;function ys(e,t){if(!e||vs)return"";vs=!0;var l=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var a={DetermineComponentFrameRoot:function(){try{if(t){var _=function(){throw Error()};if(Object.defineProperty(_.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(_,[])}catch(M){var T=M}Reflect.construct(e,[],_)}else{try{_.call()}catch(M){T=M}e.call(_.prototype)}}else{try{throw Error()}catch(M){T=M}(_=e())&&typeof _.catch=="function"&&_.catch(function(){})}}catch(M){if(M&&T&&typeof M.stack=="string")return[M.stack,T.stack]}return[null,null]}};a.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var i=Object.getOwnPropertyDescriptor(a.DetermineComponentFrameRoot,"name");i&&i.configurable&&Object.defineProperty(a.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var s=a.DetermineComponentFrameRoot(),c=s[0],f=s[1];if(c&&f){var p=c.split(`
`),N=f.split(`
`);for(i=a=0;a<p.length&&!p[a].includes("DetermineComponentFrameRoot");)a++;for(;i<N.length&&!N[i].includes("DetermineComponentFrameRoot");)i++;if(a===p.length||i===N.length)for(a=p.length-1,i=N.length-1;1<=a&&0<=i&&p[a]!==N[i];)i--;for(;1<=a&&0<=i;a--,i--)if(p[a]!==N[i]){if(a!==1||i!==1)do if(a--,i--,0>i||p[a]!==N[i]){var z=`
`+p[a].replace(" at new "," at ");return e.displayName&&z.includes("<anonymous>")&&(z=z.replace("<anonymous>",e.displayName)),z}while(1<=a&&0<=i);break}}}finally{vs=!1,Error.prepareStackTrace=l}return(l=e?e.displayName||e.name:"")?kl(l):""}function Yh(e,t){switch(e.tag){case 26:case 27:case 5:return kl(e.type);case 16:return kl("Lazy");case 13:return e.child!==t&&t!==null?kl("Suspense Fallback"):kl("Suspense");case 19:return kl("SuspenseList");case 0:case 15:return ys(e.type,!1);case 11:return ys(e.type.render,!1);case 1:return ys(e.type,!0);case 31:return kl("Activity");default:return""}}function Ic(e){try{var t="",l=null;do t+=Yh(e,l),l=e,e=e.return;while(e);return t}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}var js=Object.prototype.hasOwnProperty,gs=u.unstable_scheduleCallback,bs=u.unstable_cancelCallback,Qh=u.unstable_shouldYield,Vh=u.unstable_requestPaint,dt=u.unstable_now,Zh=u.unstable_getCurrentPriorityLevel,Pc=u.unstable_ImmediatePriority,er=u.unstable_UserBlockingPriority,Va=u.unstable_NormalPriority,Jh=u.unstable_LowPriority,tr=u.unstable_IdlePriority,Kh=u.log,$h=u.unstable_setDisableYieldValue,Vn=null,ft=null;function ol(e){if(typeof Kh=="function"&&$h(e),ft&&typeof ft.setStrictMode=="function")try{ft.setStrictMode(Vn,e)}catch{}}var ht=Math.clz32?Math.clz32:Ih,Fh=Math.log,Wh=Math.LN2;function Ih(e){return e>>>=0,e===0?32:31-(Fh(e)/Wh|0)|0}var Za=256,Ja=262144,Ka=4194304;function Bl(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function $a(e,t,l){var a=e.pendingLanes;if(a===0)return 0;var i=0,s=e.suspendedLanes,c=e.pingedLanes;e=e.warmLanes;var f=a&134217727;return f!==0?(a=f&~s,a!==0?i=Bl(a):(c&=f,c!==0?i=Bl(c):l||(l=f&~e,l!==0&&(i=Bl(l))))):(f=a&~s,f!==0?i=Bl(f):c!==0?i=Bl(c):l||(l=a&~e,l!==0&&(i=Bl(l)))),i===0?0:t!==0&&t!==i&&(t&s)===0&&(s=i&-i,l=t&-t,s>=l||s===32&&(l&4194048)!==0)?t:i}function Zn(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function Ph(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function lr(){var e=Ka;return Ka<<=1,(Ka&62914560)===0&&(Ka=4194304),e}function Ss(e){for(var t=[],l=0;31>l;l++)t.push(e);return t}function Jn(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function em(e,t,l,a,i,s){var c=e.pendingLanes;e.pendingLanes=l,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=l,e.entangledLanes&=l,e.errorRecoveryDisabledLanes&=l,e.shellSuspendCounter=0;var f=e.entanglements,p=e.expirationTimes,N=e.hiddenUpdates;for(l=c&~l;0<l;){var z=31-ht(l),_=1<<z;f[z]=0,p[z]=-1;var T=N[z];if(T!==null)for(N[z]=null,z=0;z<T.length;z++){var M=T[z];M!==null&&(M.lane&=-536870913)}l&=~_}a!==0&&nr(e,a,0),s!==0&&i===0&&e.tag!==0&&(e.suspendedLanes|=s&~(c&~t))}function nr(e,t,l){e.pendingLanes|=t,e.suspendedLanes&=~t;var a=31-ht(t);e.entangledLanes|=t,e.entanglements[a]=e.entanglements[a]|1073741824|l&261930}function ar(e,t){var l=e.entangledLanes|=t;for(e=e.entanglements;l;){var a=31-ht(l),i=1<<a;i&t|e[a]&t&&(e[a]|=t),l&=~i}}function ir(e,t){var l=t&-t;return l=(l&42)!==0?1:Cs(l),(l&(e.suspendedLanes|t))!==0?0:l}function Cs(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Es(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function sr(){var e=L.p;return e!==0?e:(e=window.event,e===void 0?32:Jf(e.type))}function ur(e,t){var l=L.p;try{return L.p=e,t()}finally{L.p=l}}var dl=Math.random().toString(36).slice(2),$e="__reactFiber$"+dl,nt="__reactProps$"+dl,an="__reactContainer$"+dl,Ns="__reactEvents$"+dl,tm="__reactListeners$"+dl,lm="__reactHandles$"+dl,cr="__reactResources$"+dl,Kn="__reactMarker$"+dl;function Ts(e){delete e[$e],delete e[nt],delete e[Ns],delete e[tm],delete e[lm]}function sn(e){var t=e[$e];if(t)return t;for(var l=e.parentNode;l;){if(t=l[an]||l[$e]){if(l=t.alternate,t.child!==null||l!==null&&l.child!==null)for(e=zf(e);e!==null;){if(l=e[$e])return l;e=zf(e)}return t}e=l,l=e.parentNode}return null}function un(e){if(e=e[$e]||e[an]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function $n(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(o(33))}function cn(e){var t=e[cr];return t||(t=e[cr]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function Je(e){e[Kn]=!0}var rr=new Set,or={};function ql(e,t){rn(e,t),rn(e+"Capture",t)}function rn(e,t){for(or[e]=t,e=0;e<t.length;e++)rr.add(t[e])}var nm=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),dr={},fr={};function am(e){return js.call(fr,e)?!0:js.call(dr,e)?!1:nm.test(e)?fr[e]=!0:(dr[e]=!0,!1)}function Fa(e,t,l){if(am(t))if(l===null)e.removeAttribute(t);else{switch(typeof l){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var a=t.toLowerCase().slice(0,5);if(a!=="data-"&&a!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+l)}}function Wa(e,t,l){if(l===null)e.removeAttribute(t);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+l)}}function Yt(e,t,l,a){if(a===null)e.removeAttribute(l);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(l);return}e.setAttributeNS(t,l,""+a)}}function St(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function hr(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function im(e,t,l){var a=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var i=a.get,s=a.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(c){l=""+c,s.call(this,c)}}),Object.defineProperty(e,t,{enumerable:a.enumerable}),{getValue:function(){return l},setValue:function(c){l=""+c},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Rs(e){if(!e._valueTracker){var t=hr(e)?"checked":"value";e._valueTracker=im(e,t,""+e[t])}}function mr(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var l=t.getValue(),a="";return e&&(a=hr(e)?e.checked?"true":"false":e.value),e=a,e!==l?(t.setValue(e),!0):!1}function Ia(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var sm=/[\n"\\]/g;function Ct(e){return e.replace(sm,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function As(e,t,l,a,i,s,c,f){e.name="",c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"?e.type=c:e.removeAttribute("type"),t!=null?c==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+St(t)):e.value!==""+St(t)&&(e.value=""+St(t)):c!=="submit"&&c!=="reset"||e.removeAttribute("value"),t!=null?Ms(e,c,St(t)):l!=null?Ms(e,c,St(l)):a!=null&&e.removeAttribute("value"),i==null&&s!=null&&(e.defaultChecked=!!s),i!=null&&(e.checked=i&&typeof i!="function"&&typeof i!="symbol"),f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"?e.name=""+St(f):e.removeAttribute("name")}function pr(e,t,l,a,i,s,c,f){if(s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"&&(e.type=s),t!=null||l!=null){if(!(s!=="submit"&&s!=="reset"||t!=null)){Rs(e);return}l=l!=null?""+St(l):"",t=t!=null?""+St(t):l,f||t===e.value||(e.value=t),e.defaultValue=t}a=a??i,a=typeof a!="function"&&typeof a!="symbol"&&!!a,e.checked=f?e.checked:!!a,e.defaultChecked=!!a,c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"&&(e.name=c),Rs(e)}function Ms(e,t,l){t==="number"&&Ia(e.ownerDocument)===e||e.defaultValue===""+l||(e.defaultValue=""+l)}function on(e,t,l,a){if(e=e.options,t){t={};for(var i=0;i<l.length;i++)t["$"+l[i]]=!0;for(l=0;l<e.length;l++)i=t.hasOwnProperty("$"+e[l].value),e[l].selected!==i&&(e[l].selected=i),i&&a&&(e[l].defaultSelected=!0)}else{for(l=""+St(l),t=null,i=0;i<e.length;i++){if(e[i].value===l){e[i].selected=!0,a&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function xr(e,t,l){if(t!=null&&(t=""+St(t),t!==e.value&&(e.value=t),l==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=l!=null?""+St(l):""}function vr(e,t,l,a){if(t==null){if(a!=null){if(l!=null)throw Error(o(92));if(ot(a)){if(1<a.length)throw Error(o(93));a=a[0]}l=a}l==null&&(l=""),t=l}l=St(t),e.defaultValue=l,a=e.textContent,a===l&&a!==""&&a!==null&&(e.value=a),Rs(e)}function dn(e,t){if(t){var l=e.firstChild;if(l&&l===e.lastChild&&l.nodeType===3){l.nodeValue=t;return}}e.textContent=t}var um=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function yr(e,t,l){var a=t.indexOf("--")===0;l==null||typeof l=="boolean"||l===""?a?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":a?e.setProperty(t,l):typeof l!="number"||l===0||um.has(t)?t==="float"?e.cssFloat=l:e[t]=(""+l).trim():e[t]=l+"px"}function jr(e,t,l){if(t!=null&&typeof t!="object")throw Error(o(62));if(e=e.style,l!=null){for(var a in l)!l.hasOwnProperty(a)||t!=null&&t.hasOwnProperty(a)||(a.indexOf("--")===0?e.setProperty(a,""):a==="float"?e.cssFloat="":e[a]="");for(var i in t)a=t[i],t.hasOwnProperty(i)&&l[i]!==a&&yr(e,i,a)}else for(var s in t)t.hasOwnProperty(s)&&yr(e,s,t[s])}function Ds(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var cm=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),rm=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Pa(e){return rm.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Qt(){}var zs=null;function Os(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var fn=null,hn=null;function gr(e){var t=un(e);if(t&&(e=t.stateNode)){var l=e[nt]||null;e:switch(e=t.stateNode,t.type){case"input":if(As(e,l.value,l.defaultValue,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name),t=l.name,l.type==="radio"&&t!=null){for(l=e;l.parentNode;)l=l.parentNode;for(l=l.querySelectorAll('input[name="'+Ct(""+t)+'"][type="radio"]'),t=0;t<l.length;t++){var a=l[t];if(a!==e&&a.form===e.form){var i=a[nt]||null;if(!i)throw Error(o(90));As(a,i.value,i.defaultValue,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name)}}for(t=0;t<l.length;t++)a=l[t],a.form===e.form&&mr(a)}break e;case"textarea":xr(e,l.value,l.defaultValue);break e;case"select":t=l.value,t!=null&&on(e,!!l.multiple,t,!1)}}}var Us=!1;function br(e,t,l){if(Us)return e(t,l);Us=!0;try{var a=e(t);return a}finally{if(Us=!1,(fn!==null||hn!==null)&&(wi(),fn&&(t=fn,e=hn,hn=fn=null,gr(t),e)))for(t=0;t<e.length;t++)gr(e[t])}}function Fn(e,t){var l=e.stateNode;if(l===null)return null;var a=l[nt]||null;if(a===null)return null;l=a[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(e=e.type,a=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!a;break e;default:e=!1}if(e)return null;if(l&&typeof l!="function")throw Error(o(231,t,typeof l));return l}var Vt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),_s=!1;if(Vt)try{var Wn={};Object.defineProperty(Wn,"passive",{get:function(){_s=!0}}),window.addEventListener("test",Wn,Wn),window.removeEventListener("test",Wn,Wn)}catch{_s=!1}var fl=null,Ls=null,ei=null;function Sr(){if(ei)return ei;var e,t=Ls,l=t.length,a,i="value"in fl?fl.value:fl.textContent,s=i.length;for(e=0;e<l&&t[e]===i[e];e++);var c=l-e;for(a=1;a<=c&&t[l-a]===i[s-a];a++);return ei=i.slice(e,1<a?1-a:void 0)}function ti(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function li(){return!0}function Cr(){return!1}function at(e){function t(l,a,i,s,c){this._reactName=l,this._targetInst=i,this.type=a,this.nativeEvent=s,this.target=c,this.currentTarget=null;for(var f in e)e.hasOwnProperty(f)&&(l=e[f],this[f]=l?l(s):s[f]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?li:Cr,this.isPropagationStopped=Cr,this}return R(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var l=this.nativeEvent;l&&(l.preventDefault?l.preventDefault():typeof l.returnValue!="unknown"&&(l.returnValue=!1),this.isDefaultPrevented=li)},stopPropagation:function(){var l=this.nativeEvent;l&&(l.stopPropagation?l.stopPropagation():typeof l.cancelBubble!="unknown"&&(l.cancelBubble=!0),this.isPropagationStopped=li)},persist:function(){},isPersistent:li}),t}var wl={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ni=at(wl),In=R({},wl,{view:0,detail:0}),om=at(In),Hs,ks,Pn,ai=R({},In,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:qs,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Pn&&(Pn&&e.type==="mousemove"?(Hs=e.screenX-Pn.screenX,ks=e.screenY-Pn.screenY):ks=Hs=0,Pn=e),Hs)},movementY:function(e){return"movementY"in e?e.movementY:ks}}),Er=at(ai),dm=R({},ai,{dataTransfer:0}),fm=at(dm),hm=R({},In,{relatedTarget:0}),Bs=at(hm),mm=R({},wl,{animationName:0,elapsedTime:0,pseudoElement:0}),pm=at(mm),xm=R({},wl,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),vm=at(xm),ym=R({},wl,{data:0}),Nr=at(ym),jm={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},gm={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},bm={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Sm(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=bm[e])?!!t[e]:!1}function qs(){return Sm}var Cm=R({},In,{key:function(e){if(e.key){var t=jm[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=ti(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?gm[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:qs,charCode:function(e){return e.type==="keypress"?ti(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ti(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Em=at(Cm),Nm=R({},ai,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Tr=at(Nm),Tm=R({},In,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:qs}),Rm=at(Tm),Am=R({},wl,{propertyName:0,elapsedTime:0,pseudoElement:0}),Mm=at(Am),Dm=R({},ai,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),zm=at(Dm),Om=R({},wl,{newState:0,oldState:0}),Um=at(Om),_m=[9,13,27,32],ws=Vt&&"CompositionEvent"in window,ea=null;Vt&&"documentMode"in document&&(ea=document.documentMode);var Lm=Vt&&"TextEvent"in window&&!ea,Rr=Vt&&(!ws||ea&&8<ea&&11>=ea),Ar=" ",Mr=!1;function Dr(e,t){switch(e){case"keyup":return _m.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function zr(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var mn=!1;function Hm(e,t){switch(e){case"compositionend":return zr(t);case"keypress":return t.which!==32?null:(Mr=!0,Ar);case"textInput":return e=t.data,e===Ar&&Mr?null:e;default:return null}}function km(e,t){if(mn)return e==="compositionend"||!ws&&Dr(e,t)?(e=Sr(),ei=Ls=fl=null,mn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Rr&&t.locale!=="ko"?null:t.data;default:return null}}var Bm={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Or(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Bm[e.type]:t==="textarea"}function Ur(e,t,l,a){fn?hn?hn.push(a):hn=[a]:fn=a,t=Ji(t,"onChange"),0<t.length&&(l=new ni("onChange","change",null,l,a),e.push({event:l,listeners:t}))}var ta=null,la=null;function qm(e){vf(e,0)}function ii(e){var t=$n(e);if(mr(t))return e}function _r(e,t){if(e==="change")return t}var Lr=!1;if(Vt){var Gs;if(Vt){var Xs="oninput"in document;if(!Xs){var Hr=document.createElement("div");Hr.setAttribute("oninput","return;"),Xs=typeof Hr.oninput=="function"}Gs=Xs}else Gs=!1;Lr=Gs&&(!document.documentMode||9<document.documentMode)}function kr(){ta&&(ta.detachEvent("onpropertychange",Br),la=ta=null)}function Br(e){if(e.propertyName==="value"&&ii(la)){var t=[];Ur(t,la,e,Os(e)),br(qm,t)}}function wm(e,t,l){e==="focusin"?(kr(),ta=t,la=l,ta.attachEvent("onpropertychange",Br)):e==="focusout"&&kr()}function Gm(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ii(la)}function Xm(e,t){if(e==="click")return ii(t)}function Ym(e,t){if(e==="input"||e==="change")return ii(t)}function Qm(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var mt=typeof Object.is=="function"?Object.is:Qm;function na(e,t){if(mt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var l=Object.keys(e),a=Object.keys(t);if(l.length!==a.length)return!1;for(a=0;a<l.length;a++){var i=l[a];if(!js.call(t,i)||!mt(e[i],t[i]))return!1}return!0}function qr(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function wr(e,t){var l=qr(e);e=0;for(var a;l;){if(l.nodeType===3){if(a=e+l.textContent.length,e<=t&&a>=t)return{node:l,offset:t-e};e=a}e:{for(;l;){if(l.nextSibling){l=l.nextSibling;break e}l=l.parentNode}l=void 0}l=qr(l)}}function Gr(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Gr(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Xr(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Ia(e.document);t instanceof e.HTMLIFrameElement;){try{var l=typeof t.contentWindow.location.href=="string"}catch{l=!1}if(l)e=t.contentWindow;else break;t=Ia(e.document)}return t}function Ys(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var Vm=Vt&&"documentMode"in document&&11>=document.documentMode,pn=null,Qs=null,aa=null,Vs=!1;function Yr(e,t,l){var a=l.window===l?l.document:l.nodeType===9?l:l.ownerDocument;Vs||pn==null||pn!==Ia(a)||(a=pn,"selectionStart"in a&&Ys(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),aa&&na(aa,a)||(aa=a,a=Ji(Qs,"onSelect"),0<a.length&&(t=new ni("onSelect","select",null,t,l),e.push({event:t,listeners:a}),t.target=pn)))}function Gl(e,t){var l={};return l[e.toLowerCase()]=t.toLowerCase(),l["Webkit"+e]="webkit"+t,l["Moz"+e]="moz"+t,l}var xn={animationend:Gl("Animation","AnimationEnd"),animationiteration:Gl("Animation","AnimationIteration"),animationstart:Gl("Animation","AnimationStart"),transitionrun:Gl("Transition","TransitionRun"),transitionstart:Gl("Transition","TransitionStart"),transitioncancel:Gl("Transition","TransitionCancel"),transitionend:Gl("Transition","TransitionEnd")},Zs={},Qr={};Vt&&(Qr=document.createElement("div").style,"AnimationEvent"in window||(delete xn.animationend.animation,delete xn.animationiteration.animation,delete xn.animationstart.animation),"TransitionEvent"in window||delete xn.transitionend.transition);function Xl(e){if(Zs[e])return Zs[e];if(!xn[e])return e;var t=xn[e],l;for(l in t)if(t.hasOwnProperty(l)&&l in Qr)return Zs[e]=t[l];return e}var Vr=Xl("animationend"),Zr=Xl("animationiteration"),Jr=Xl("animationstart"),Zm=Xl("transitionrun"),Jm=Xl("transitionstart"),Km=Xl("transitioncancel"),Kr=Xl("transitionend"),$r=new Map,Js="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Js.push("scrollEnd");function Lt(e,t){$r.set(e,t),ql(t,[e])}var si=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},Et=[],vn=0,Ks=0;function ui(){for(var e=vn,t=Ks=vn=0;t<e;){var l=Et[t];Et[t++]=null;var a=Et[t];Et[t++]=null;var i=Et[t];Et[t++]=null;var s=Et[t];if(Et[t++]=null,a!==null&&i!==null){var c=a.pending;c===null?i.next=i:(i.next=c.next,c.next=i),a.pending=i}s!==0&&Fr(l,i,s)}}function ci(e,t,l,a){Et[vn++]=e,Et[vn++]=t,Et[vn++]=l,Et[vn++]=a,Ks|=a,e.lanes|=a,e=e.alternate,e!==null&&(e.lanes|=a)}function $s(e,t,l,a){return ci(e,t,l,a),ri(e)}function Yl(e,t){return ci(e,null,null,t),ri(e)}function Fr(e,t,l){e.lanes|=l;var a=e.alternate;a!==null&&(a.lanes|=l);for(var i=!1,s=e.return;s!==null;)s.childLanes|=l,a=s.alternate,a!==null&&(a.childLanes|=l),s.tag===22&&(e=s.stateNode,e===null||e._visibility&1||(i=!0)),e=s,s=s.return;return e.tag===3?(s=e.stateNode,i&&t!==null&&(i=31-ht(l),e=s.hiddenUpdates,a=e[i],a===null?e[i]=[t]:a.push(t),t.lane=l|536870912),s):null}function ri(e){if(50<Ta)throw Ta=0,ac=null,Error(o(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var yn={};function $m(e,t,l,a){this.tag=e,this.key=l,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function pt(e,t,l,a){return new $m(e,t,l,a)}function Fs(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Zt(e,t){var l=e.alternate;return l===null?(l=pt(e.tag,t,e.key,e.mode),l.elementType=e.elementType,l.type=e.type,l.stateNode=e.stateNode,l.alternate=e,e.alternate=l):(l.pendingProps=t,l.type=e.type,l.flags=0,l.subtreeFlags=0,l.deletions=null),l.flags=e.flags&65011712,l.childLanes=e.childLanes,l.lanes=e.lanes,l.child=e.child,l.memoizedProps=e.memoizedProps,l.memoizedState=e.memoizedState,l.updateQueue=e.updateQueue,t=e.dependencies,l.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},l.sibling=e.sibling,l.index=e.index,l.ref=e.ref,l.refCleanup=e.refCleanup,l}function Wr(e,t){e.flags&=65011714;var l=e.alternate;return l===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=l.childLanes,e.lanes=l.lanes,e.child=l.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=l.memoizedProps,e.memoizedState=l.memoizedState,e.updateQueue=l.updateQueue,e.type=l.type,t=l.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function oi(e,t,l,a,i,s){var c=0;if(a=e,typeof e=="function")Fs(e)&&(c=1);else if(typeof e=="string")c=ex(e,l,K.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case Re:return e=pt(31,l,t,i),e.elementType=Re,e.lanes=s,e;case w:return Ql(l.children,i,s,t);case V:c=8,i|=24;break;case J:return e=pt(12,l,t,i|2),e.elementType=J,e.lanes=s,e;case ie:return e=pt(13,l,t,i),e.elementType=ie,e.lanes=s,e;case je:return e=pt(19,l,t,i),e.elementType=je,e.lanes=s,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case F:c=10;break e;case G:c=9;break e;case he:c=11;break e;case W:c=14;break e;case me:c=16,a=null;break e}c=29,l=Error(o(130,e===null?"null":typeof e,"")),a=null}return t=pt(c,l,t,i),t.elementType=e,t.type=a,t.lanes=s,t}function Ql(e,t,l,a){return e=pt(7,e,a,t),e.lanes=l,e}function Ws(e,t,l){return e=pt(6,e,null,t),e.lanes=l,e}function Ir(e){var t=pt(18,null,null,0);return t.stateNode=e,t}function Is(e,t,l){return t=pt(4,e.children!==null?e.children:[],e.key,t),t.lanes=l,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Pr=new WeakMap;function Nt(e,t){if(typeof e=="object"&&e!==null){var l=Pr.get(e);return l!==void 0?l:(t={value:e,source:t,stack:Ic(t)},Pr.set(e,t),t)}return{value:e,source:t,stack:Ic(t)}}var jn=[],gn=0,di=null,ia=0,Tt=[],Rt=0,hl=null,Bt=1,qt="";function Jt(e,t){jn[gn++]=ia,jn[gn++]=di,di=e,ia=t}function eo(e,t,l){Tt[Rt++]=Bt,Tt[Rt++]=qt,Tt[Rt++]=hl,hl=e;var a=Bt;e=qt;var i=32-ht(a)-1;a&=~(1<<i),l+=1;var s=32-ht(t)+i;if(30<s){var c=i-i%5;s=(a&(1<<c)-1).toString(32),a>>=c,i-=c,Bt=1<<32-ht(t)+i|l<<i|a,qt=s+e}else Bt=1<<s|l<<i|a,qt=e}function Ps(e){e.return!==null&&(Jt(e,1),eo(e,1,0))}function eu(e){for(;e===di;)di=jn[--gn],jn[gn]=null,ia=jn[--gn],jn[gn]=null;for(;e===hl;)hl=Tt[--Rt],Tt[Rt]=null,qt=Tt[--Rt],Tt[Rt]=null,Bt=Tt[--Rt],Tt[Rt]=null}function to(e,t){Tt[Rt++]=Bt,Tt[Rt++]=qt,Tt[Rt++]=hl,Bt=t.id,qt=t.overflow,hl=e}var Fe=null,Me=null,fe=!1,ml=null,At=!1,tu=Error(o(519));function pl(e){var t=Error(o(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw sa(Nt(t,e)),tu}function lo(e){var t=e.stateNode,l=e.type,a=e.memoizedProps;switch(t[$e]=e,t[nt]=a,l){case"dialog":ce("cancel",t),ce("close",t);break;case"iframe":case"object":case"embed":ce("load",t);break;case"video":case"audio":for(l=0;l<Aa.length;l++)ce(Aa[l],t);break;case"source":ce("error",t);break;case"img":case"image":case"link":ce("error",t),ce("load",t);break;case"details":ce("toggle",t);break;case"input":ce("invalid",t),pr(t,a.value,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name,!0);break;case"select":ce("invalid",t);break;case"textarea":ce("invalid",t),vr(t,a.value,a.defaultValue,a.children)}l=a.children,typeof l!="string"&&typeof l!="number"&&typeof l!="bigint"||t.textContent===""+l||a.suppressHydrationWarning===!0||bf(t.textContent,l)?(a.popover!=null&&(ce("beforetoggle",t),ce("toggle",t)),a.onScroll!=null&&ce("scroll",t),a.onScrollEnd!=null&&ce("scrollend",t),a.onClick!=null&&(t.onclick=Qt),t=!0):t=!1,t||pl(e,!0)}function no(e){for(Fe=e.return;Fe;)switch(Fe.tag){case 5:case 31:case 13:At=!1;return;case 27:case 3:At=!0;return;default:Fe=Fe.return}}function bn(e){if(e!==Fe)return!1;if(!fe)return no(e),fe=!0,!1;var t=e.tag,l;if((l=t!==3&&t!==27)&&((l=t===5)&&(l=e.type,l=!(l!=="form"&&l!=="button")||jc(e.type,e.memoizedProps)),l=!l),l&&Me&&pl(e),no(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(o(317));Me=Df(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(o(317));Me=Df(e)}else t===27?(t=Me,Ml(e.type)?(e=Ec,Ec=null,Me=e):Me=t):Me=Fe?Dt(e.stateNode.nextSibling):null;return!0}function Vl(){Me=Fe=null,fe=!1}function lu(){var e=ml;return e!==null&&(ct===null?ct=e:ct.push.apply(ct,e),ml=null),e}function sa(e){ml===null?ml=[e]:ml.push(e)}var nu=g(null),Zl=null,Kt=null;function xl(e,t,l){q(nu,t._currentValue),t._currentValue=l}function $t(e){e._currentValue=nu.current,H(nu)}function au(e,t,l){for(;e!==null;){var a=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,a!==null&&(a.childLanes|=t)):a!==null&&(a.childLanes&t)!==t&&(a.childLanes|=t),e===l)break;e=e.return}}function iu(e,t,l,a){var i=e.child;for(i!==null&&(i.return=e);i!==null;){var s=i.dependencies;if(s!==null){var c=i.child;s=s.firstContext;e:for(;s!==null;){var f=s;s=i;for(var p=0;p<t.length;p++)if(f.context===t[p]){s.lanes|=l,f=s.alternate,f!==null&&(f.lanes|=l),au(s.return,l,e),a||(c=null);break e}s=f.next}}else if(i.tag===18){if(c=i.return,c===null)throw Error(o(341));c.lanes|=l,s=c.alternate,s!==null&&(s.lanes|=l),au(c,l,e),c=null}else c=i.child;if(c!==null)c.return=i;else for(c=i;c!==null;){if(c===e){c=null;break}if(i=c.sibling,i!==null){i.return=c.return,c=i;break}c=c.return}i=c}}function Sn(e,t,l,a){e=null;for(var i=t,s=!1;i!==null;){if(!s){if((i.flags&524288)!==0)s=!0;else if((i.flags&262144)!==0)break}if(i.tag===10){var c=i.alternate;if(c===null)throw Error(o(387));if(c=c.memoizedProps,c!==null){var f=i.type;mt(i.pendingProps.value,c.value)||(e!==null?e.push(f):e=[f])}}else if(i===ye.current){if(c=i.alternate,c===null)throw Error(o(387));c.memoizedState.memoizedState!==i.memoizedState.memoizedState&&(e!==null?e.push(Ua):e=[Ua])}i=i.return}e!==null&&iu(t,e,l,a),t.flags|=262144}function fi(e){for(e=e.firstContext;e!==null;){if(!mt(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Jl(e){Zl=e,Kt=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function We(e){return ao(Zl,e)}function hi(e,t){return Zl===null&&Jl(e),ao(e,t)}function ao(e,t){var l=t._currentValue;if(t={context:t,memoizedValue:l,next:null},Kt===null){if(e===null)throw Error(o(308));Kt=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Kt=Kt.next=t;return l}var Fm=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(l,a){e.push(a)}};this.abort=function(){t.aborted=!0,e.forEach(function(l){return l()})}},Wm=u.unstable_scheduleCallback,Im=u.unstable_NormalPriority,Ge={$$typeof:F,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function su(){return{controller:new Fm,data:new Map,refCount:0}}function ua(e){e.refCount--,e.refCount===0&&Wm(Im,function(){e.controller.abort()})}var ca=null,uu=0,Cn=0,En=null;function Pm(e,t){if(ca===null){var l=ca=[];uu=0,Cn=oc(),En={status:"pending",value:void 0,then:function(a){l.push(a)}}}return uu++,t.then(io,io),t}function io(){if(--uu===0&&ca!==null){En!==null&&(En.status="fulfilled");var e=ca;ca=null,Cn=0,En=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function ep(e,t){var l=[],a={status:"pending",value:null,reason:null,then:function(i){l.push(i)}};return e.then(function(){a.status="fulfilled",a.value=t;for(var i=0;i<l.length;i++)(0,l[i])(t)},function(i){for(a.status="rejected",a.reason=i,i=0;i<l.length;i++)(0,l[i])(void 0)}),a}var so=O.S;O.S=function(e,t){Qd=dt(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&Pm(e,t),so!==null&&so(e,t)};var Kl=g(null);function cu(){var e=Kl.current;return e!==null?e:Ne.pooledCache}function mi(e,t){t===null?q(Kl,Kl.current):q(Kl,t.pool)}function uo(){var e=cu();return e===null?null:{parent:Ge._currentValue,pool:e}}var Nn=Error(o(460)),ru=Error(o(474)),pi=Error(o(542)),xi={then:function(){}};function co(e){return e=e.status,e==="fulfilled"||e==="rejected"}function ro(e,t,l){switch(l=e[l],l===void 0?e.push(t):l!==t&&(t.then(Qt,Qt),t=l),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,fo(e),e;default:if(typeof t.status=="string")t.then(Qt,Qt);else{if(e=Ne,e!==null&&100<e.shellSuspendCounter)throw Error(o(482));e=t,e.status="pending",e.then(function(a){if(t.status==="pending"){var i=t;i.status="fulfilled",i.value=a}},function(a){if(t.status==="pending"){var i=t;i.status="rejected",i.reason=a}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,fo(e),e}throw Fl=t,Nn}}function $l(e){try{var t=e._init;return t(e._payload)}catch(l){throw l!==null&&typeof l=="object"&&typeof l.then=="function"?(Fl=l,Nn):l}}var Fl=null;function oo(){if(Fl===null)throw Error(o(459));var e=Fl;return Fl=null,e}function fo(e){if(e===Nn||e===pi)throw Error(o(483))}var Tn=null,ra=0;function vi(e){var t=ra;return ra+=1,Tn===null&&(Tn=[]),ro(Tn,e,t)}function oa(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function yi(e,t){throw t.$$typeof===k?Error(o(525)):(e=Object.prototype.toString.call(t),Error(o(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function ho(e){function t(S,j){if(e){var E=S.deletions;E===null?(S.deletions=[j],S.flags|=16):E.push(j)}}function l(S,j){if(!e)return null;for(;j!==null;)t(S,j),j=j.sibling;return null}function a(S){for(var j=new Map;S!==null;)S.key!==null?j.set(S.key,S):j.set(S.index,S),S=S.sibling;return j}function i(S,j){return S=Zt(S,j),S.index=0,S.sibling=null,S}function s(S,j,E){return S.index=E,e?(E=S.alternate,E!==null?(E=E.index,E<j?(S.flags|=67108866,j):E):(S.flags|=67108866,j)):(S.flags|=1048576,j)}function c(S){return e&&S.alternate===null&&(S.flags|=67108866),S}function f(S,j,E,U){return j===null||j.tag!==6?(j=Ws(E,S.mode,U),j.return=S,j):(j=i(j,E),j.return=S,j)}function p(S,j,E,U){var P=E.type;return P===w?z(S,j,E.props.children,U,E.key):j!==null&&(j.elementType===P||typeof P=="object"&&P!==null&&P.$$typeof===me&&$l(P)===j.type)?(j=i(j,E.props),oa(j,E),j.return=S,j):(j=oi(E.type,E.key,E.props,null,S.mode,U),oa(j,E),j.return=S,j)}function N(S,j,E,U){return j===null||j.tag!==4||j.stateNode.containerInfo!==E.containerInfo||j.stateNode.implementation!==E.implementation?(j=Is(E,S.mode,U),j.return=S,j):(j=i(j,E.children||[]),j.return=S,j)}function z(S,j,E,U,P){return j===null||j.tag!==7?(j=Ql(E,S.mode,U,P),j.return=S,j):(j=i(j,E),j.return=S,j)}function _(S,j,E){if(typeof j=="string"&&j!==""||typeof j=="number"||typeof j=="bigint")return j=Ws(""+j,S.mode,E),j.return=S,j;if(typeof j=="object"&&j!==null){switch(j.$$typeof){case Q:return E=oi(j.type,j.key,j.props,null,S.mode,E),oa(E,j),E.return=S,E;case X:return j=Is(j,S.mode,E),j.return=S,j;case me:return j=$l(j),_(S,j,E)}if(ot(j)||Ve(j))return j=Ql(j,S.mode,E,null),j.return=S,j;if(typeof j.then=="function")return _(S,vi(j),E);if(j.$$typeof===F)return _(S,hi(S,j),E);yi(S,j)}return null}function T(S,j,E,U){var P=j!==null?j.key:null;if(typeof E=="string"&&E!==""||typeof E=="number"||typeof E=="bigint")return P!==null?null:f(S,j,""+E,U);if(typeof E=="object"&&E!==null){switch(E.$$typeof){case Q:return E.key===P?p(S,j,E,U):null;case X:return E.key===P?N(S,j,E,U):null;case me:return E=$l(E),T(S,j,E,U)}if(ot(E)||Ve(E))return P!==null?null:z(S,j,E,U,null);if(typeof E.then=="function")return T(S,j,vi(E),U);if(E.$$typeof===F)return T(S,j,hi(S,E),U);yi(S,E)}return null}function M(S,j,E,U,P){if(typeof U=="string"&&U!==""||typeof U=="number"||typeof U=="bigint")return S=S.get(E)||null,f(j,S,""+U,P);if(typeof U=="object"&&U!==null){switch(U.$$typeof){case Q:return S=S.get(U.key===null?E:U.key)||null,p(j,S,U,P);case X:return S=S.get(U.key===null?E:U.key)||null,N(j,S,U,P);case me:return U=$l(U),M(S,j,E,U,P)}if(ot(U)||Ve(U))return S=S.get(E)||null,z(j,S,U,P,null);if(typeof U.then=="function")return M(S,j,E,vi(U),P);if(U.$$typeof===F)return M(S,j,E,hi(j,U),P);yi(j,U)}return null}function Z(S,j,E,U){for(var P=null,pe=null,$=j,ae=j=0,de=null;$!==null&&ae<E.length;ae++){$.index>ae?(de=$,$=null):de=$.sibling;var xe=T(S,$,E[ae],U);if(xe===null){$===null&&($=de);break}e&&$&&xe.alternate===null&&t(S,$),j=s(xe,j,ae),pe===null?P=xe:pe.sibling=xe,pe=xe,$=de}if(ae===E.length)return l(S,$),fe&&Jt(S,ae),P;if($===null){for(;ae<E.length;ae++)$=_(S,E[ae],U),$!==null&&(j=s($,j,ae),pe===null?P=$:pe.sibling=$,pe=$);return fe&&Jt(S,ae),P}for($=a($);ae<E.length;ae++)de=M($,S,ae,E[ae],U),de!==null&&(e&&de.alternate!==null&&$.delete(de.key===null?ae:de.key),j=s(de,j,ae),pe===null?P=de:pe.sibling=de,pe=de);return e&&$.forEach(function(_l){return t(S,_l)}),fe&&Jt(S,ae),P}function ee(S,j,E,U){if(E==null)throw Error(o(151));for(var P=null,pe=null,$=j,ae=j=0,de=null,xe=E.next();$!==null&&!xe.done;ae++,xe=E.next()){$.index>ae?(de=$,$=null):de=$.sibling;var _l=T(S,$,xe.value,U);if(_l===null){$===null&&($=de);break}e&&$&&_l.alternate===null&&t(S,$),j=s(_l,j,ae),pe===null?P=_l:pe.sibling=_l,pe=_l,$=de}if(xe.done)return l(S,$),fe&&Jt(S,ae),P;if($===null){for(;!xe.done;ae++,xe=E.next())xe=_(S,xe.value,U),xe!==null&&(j=s(xe,j,ae),pe===null?P=xe:pe.sibling=xe,pe=xe);return fe&&Jt(S,ae),P}for($=a($);!xe.done;ae++,xe=E.next())xe=M($,S,ae,xe.value,U),xe!==null&&(e&&xe.alternate!==null&&$.delete(xe.key===null?ae:xe.key),j=s(xe,j,ae),pe===null?P=xe:pe.sibling=xe,pe=xe);return e&&$.forEach(function(dx){return t(S,dx)}),fe&&Jt(S,ae),P}function Ee(S,j,E,U){if(typeof E=="object"&&E!==null&&E.type===w&&E.key===null&&(E=E.props.children),typeof E=="object"&&E!==null){switch(E.$$typeof){case Q:e:{for(var P=E.key;j!==null;){if(j.key===P){if(P=E.type,P===w){if(j.tag===7){l(S,j.sibling),U=i(j,E.props.children),U.return=S,S=U;break e}}else if(j.elementType===P||typeof P=="object"&&P!==null&&P.$$typeof===me&&$l(P)===j.type){l(S,j.sibling),U=i(j,E.props),oa(U,E),U.return=S,S=U;break e}l(S,j);break}else t(S,j);j=j.sibling}E.type===w?(U=Ql(E.props.children,S.mode,U,E.key),U.return=S,S=U):(U=oi(E.type,E.key,E.props,null,S.mode,U),oa(U,E),U.return=S,S=U)}return c(S);case X:e:{for(P=E.key;j!==null;){if(j.key===P)if(j.tag===4&&j.stateNode.containerInfo===E.containerInfo&&j.stateNode.implementation===E.implementation){l(S,j.sibling),U=i(j,E.children||[]),U.return=S,S=U;break e}else{l(S,j);break}else t(S,j);j=j.sibling}U=Is(E,S.mode,U),U.return=S,S=U}return c(S);case me:return E=$l(E),Ee(S,j,E,U)}if(ot(E))return Z(S,j,E,U);if(Ve(E)){if(P=Ve(E),typeof P!="function")throw Error(o(150));return E=P.call(E),ee(S,j,E,U)}if(typeof E.then=="function")return Ee(S,j,vi(E),U);if(E.$$typeof===F)return Ee(S,j,hi(S,E),U);yi(S,E)}return typeof E=="string"&&E!==""||typeof E=="number"||typeof E=="bigint"?(E=""+E,j!==null&&j.tag===6?(l(S,j.sibling),U=i(j,E),U.return=S,S=U):(l(S,j),U=Ws(E,S.mode,U),U.return=S,S=U),c(S)):l(S,j)}return function(S,j,E,U){try{ra=0;var P=Ee(S,j,E,U);return Tn=null,P}catch($){if($===Nn||$===pi)throw $;var pe=pt(29,$,null,S.mode);return pe.lanes=U,pe.return=S,pe}}}var Wl=ho(!0),mo=ho(!1),vl=!1;function ou(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function du(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function yl(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function jl(e,t,l){var a=e.updateQueue;if(a===null)return null;if(a=a.shared,(ve&2)!==0){var i=a.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),a.pending=t,t=ri(e),Fr(e,null,l),t}return ci(e,a,t,l),ri(e)}function da(e,t,l){if(t=t.updateQueue,t!==null&&(t=t.shared,(l&4194048)!==0)){var a=t.lanes;a&=e.pendingLanes,l|=a,t.lanes=l,ar(e,l)}}function fu(e,t){var l=e.updateQueue,a=e.alternate;if(a!==null&&(a=a.updateQueue,l===a)){var i=null,s=null;if(l=l.firstBaseUpdate,l!==null){do{var c={lane:l.lane,tag:l.tag,payload:l.payload,callback:null,next:null};s===null?i=s=c:s=s.next=c,l=l.next}while(l!==null);s===null?i=s=t:s=s.next=t}else i=s=t;l={baseState:a.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:a.shared,callbacks:a.callbacks},e.updateQueue=l;return}e=l.lastBaseUpdate,e===null?l.firstBaseUpdate=t:e.next=t,l.lastBaseUpdate=t}var hu=!1;function fa(){if(hu){var e=En;if(e!==null)throw e}}function ha(e,t,l,a){hu=!1;var i=e.updateQueue;vl=!1;var s=i.firstBaseUpdate,c=i.lastBaseUpdate,f=i.shared.pending;if(f!==null){i.shared.pending=null;var p=f,N=p.next;p.next=null,c===null?s=N:c.next=N,c=p;var z=e.alternate;z!==null&&(z=z.updateQueue,f=z.lastBaseUpdate,f!==c&&(f===null?z.firstBaseUpdate=N:f.next=N,z.lastBaseUpdate=p))}if(s!==null){var _=i.baseState;c=0,z=N=p=null,f=s;do{var T=f.lane&-536870913,M=T!==f.lane;if(M?(oe&T)===T:(a&T)===T){T!==0&&T===Cn&&(hu=!0),z!==null&&(z=z.next={lane:0,tag:f.tag,payload:f.payload,callback:null,next:null});e:{var Z=e,ee=f;T=t;var Ee=l;switch(ee.tag){case 1:if(Z=ee.payload,typeof Z=="function"){_=Z.call(Ee,_,T);break e}_=Z;break e;case 3:Z.flags=Z.flags&-65537|128;case 0:if(Z=ee.payload,T=typeof Z=="function"?Z.call(Ee,_,T):Z,T==null)break e;_=R({},_,T);break e;case 2:vl=!0}}T=f.callback,T!==null&&(e.flags|=64,M&&(e.flags|=8192),M=i.callbacks,M===null?i.callbacks=[T]:M.push(T))}else M={lane:T,tag:f.tag,payload:f.payload,callback:f.callback,next:null},z===null?(N=z=M,p=_):z=z.next=M,c|=T;if(f=f.next,f===null){if(f=i.shared.pending,f===null)break;M=f,f=M.next,M.next=null,i.lastBaseUpdate=M,i.shared.pending=null}}while(!0);z===null&&(p=_),i.baseState=p,i.firstBaseUpdate=N,i.lastBaseUpdate=z,s===null&&(i.shared.lanes=0),El|=c,e.lanes=c,e.memoizedState=_}}function po(e,t){if(typeof e!="function")throw Error(o(191,e));e.call(t)}function xo(e,t){var l=e.callbacks;if(l!==null)for(e.callbacks=null,e=0;e<l.length;e++)po(l[e],t)}var Rn=g(null),ji=g(0);function vo(e,t){e=al,q(ji,e),q(Rn,t),al=e|t.baseLanes}function mu(){q(ji,al),q(Rn,Rn.current)}function pu(){al=ji.current,H(Rn),H(ji)}var xt=g(null),Mt=null;function gl(e){var t=e.alternate;q(qe,qe.current&1),q(xt,e),Mt===null&&(t===null||Rn.current!==null||t.memoizedState!==null)&&(Mt=e)}function xu(e){q(qe,qe.current),q(xt,e),Mt===null&&(Mt=e)}function yo(e){e.tag===22?(q(qe,qe.current),q(xt,e),Mt===null&&(Mt=e)):bl()}function bl(){q(qe,qe.current),q(xt,xt.current)}function vt(e){H(xt),Mt===e&&(Mt=null),H(qe)}var qe=g(0);function gi(e){for(var t=e;t!==null;){if(t.tag===13){var l=t.memoizedState;if(l!==null&&(l=l.dehydrated,l===null||Sc(l)||Cc(l)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Ft=0,ne=null,Se=null,Xe=null,bi=!1,An=!1,Il=!1,Si=0,ma=0,Mn=null,tp=0;function Le(){throw Error(o(321))}function vu(e,t){if(t===null)return!1;for(var l=0;l<t.length&&l<e.length;l++)if(!mt(e[l],t[l]))return!1;return!0}function yu(e,t,l,a,i,s){return Ft=s,ne=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,O.H=e===null||e.memoizedState===null?td:Uu,Il=!1,s=l(a,i),Il=!1,An&&(s=go(t,l,a,i)),jo(e),s}function jo(e){O.H=va;var t=Se!==null&&Se.next!==null;if(Ft=0,Xe=Se=ne=null,bi=!1,ma=0,Mn=null,t)throw Error(o(300));e===null||Ye||(e=e.dependencies,e!==null&&fi(e)&&(Ye=!0))}function go(e,t,l,a){ne=e;var i=0;do{if(An&&(Mn=null),ma=0,An=!1,25<=i)throw Error(o(301));if(i+=1,Xe=Se=null,e.updateQueue!=null){var s=e.updateQueue;s.lastEffect=null,s.events=null,s.stores=null,s.memoCache!=null&&(s.memoCache.index=0)}O.H=ld,s=t(l,a)}while(An);return s}function lp(){var e=O.H,t=e.useState()[0];return t=typeof t.then=="function"?pa(t):t,e=e.useState()[0],(Se!==null?Se.memoizedState:null)!==e&&(ne.flags|=1024),t}function ju(){var e=Si!==0;return Si=0,e}function gu(e,t,l){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l}function bu(e){if(bi){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}bi=!1}Ft=0,Xe=Se=ne=null,An=!1,ma=Si=0,Mn=null}function lt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Xe===null?ne.memoizedState=Xe=e:Xe=Xe.next=e,Xe}function we(){if(Se===null){var e=ne.alternate;e=e!==null?e.memoizedState:null}else e=Se.next;var t=Xe===null?ne.memoizedState:Xe.next;if(t!==null)Xe=t,Se=e;else{if(e===null)throw ne.alternate===null?Error(o(467)):Error(o(310));Se=e,e={memoizedState:Se.memoizedState,baseState:Se.baseState,baseQueue:Se.baseQueue,queue:Se.queue,next:null},Xe===null?ne.memoizedState=Xe=e:Xe=Xe.next=e}return Xe}function Ci(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function pa(e){var t=ma;return ma+=1,Mn===null&&(Mn=[]),e=ro(Mn,e,t),t=ne,(Xe===null?t.memoizedState:Xe.next)===null&&(t=t.alternate,O.H=t===null||t.memoizedState===null?td:Uu),e}function Ei(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return pa(e);if(e.$$typeof===F)return We(e)}throw Error(o(438,String(e)))}function Su(e){var t=null,l=ne.updateQueue;if(l!==null&&(t=l.memoCache),t==null){var a=ne.alternate;a!==null&&(a=a.updateQueue,a!==null&&(a=a.memoCache,a!=null&&(t={data:a.data.map(function(i){return i.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),l===null&&(l=Ci(),ne.updateQueue=l),l.memoCache=t,l=t.data[t.index],l===void 0)for(l=t.data[t.index]=Array(e),a=0;a<e;a++)l[a]=ke;return t.index++,l}function Wt(e,t){return typeof t=="function"?t(e):t}function Ni(e){var t=we();return Cu(t,Se,e)}function Cu(e,t,l){var a=e.queue;if(a===null)throw Error(o(311));a.lastRenderedReducer=l;var i=e.baseQueue,s=a.pending;if(s!==null){if(i!==null){var c=i.next;i.next=s.next,s.next=c}t.baseQueue=i=s,a.pending=null}if(s=e.baseState,i===null)e.memoizedState=s;else{t=i.next;var f=c=null,p=null,N=t,z=!1;do{var _=N.lane&-536870913;if(_!==N.lane?(oe&_)===_:(Ft&_)===_){var T=N.revertLane;if(T===0)p!==null&&(p=p.next={lane:0,revertLane:0,gesture:null,action:N.action,hasEagerState:N.hasEagerState,eagerState:N.eagerState,next:null}),_===Cn&&(z=!0);else if((Ft&T)===T){N=N.next,T===Cn&&(z=!0);continue}else _={lane:0,revertLane:N.revertLane,gesture:null,action:N.action,hasEagerState:N.hasEagerState,eagerState:N.eagerState,next:null},p===null?(f=p=_,c=s):p=p.next=_,ne.lanes|=T,El|=T;_=N.action,Il&&l(s,_),s=N.hasEagerState?N.eagerState:l(s,_)}else T={lane:_,revertLane:N.revertLane,gesture:N.gesture,action:N.action,hasEagerState:N.hasEagerState,eagerState:N.eagerState,next:null},p===null?(f=p=T,c=s):p=p.next=T,ne.lanes|=_,El|=_;N=N.next}while(N!==null&&N!==t);if(p===null?c=s:p.next=f,!mt(s,e.memoizedState)&&(Ye=!0,z&&(l=En,l!==null)))throw l;e.memoizedState=s,e.baseState=c,e.baseQueue=p,a.lastRenderedState=s}return i===null&&(a.lanes=0),[e.memoizedState,a.dispatch]}function Eu(e){var t=we(),l=t.queue;if(l===null)throw Error(o(311));l.lastRenderedReducer=e;var a=l.dispatch,i=l.pending,s=t.memoizedState;if(i!==null){l.pending=null;var c=i=i.next;do s=e(s,c.action),c=c.next;while(c!==i);mt(s,t.memoizedState)||(Ye=!0),t.memoizedState=s,t.baseQueue===null&&(t.baseState=s),l.lastRenderedState=s}return[s,a]}function bo(e,t,l){var a=ne,i=we(),s=fe;if(s){if(l===void 0)throw Error(o(407));l=l()}else l=t();var c=!mt((Se||i).memoizedState,l);if(c&&(i.memoizedState=l,Ye=!0),i=i.queue,Ru(Eo.bind(null,a,i,e),[e]),i.getSnapshot!==t||c||Xe!==null&&Xe.memoizedState.tag&1){if(a.flags|=2048,Dn(9,{destroy:void 0},Co.bind(null,a,i,l,t),null),Ne===null)throw Error(o(349));s||(Ft&127)!==0||So(a,t,l)}return l}function So(e,t,l){e.flags|=16384,e={getSnapshot:t,value:l},t=ne.updateQueue,t===null?(t=Ci(),ne.updateQueue=t,t.stores=[e]):(l=t.stores,l===null?t.stores=[e]:l.push(e))}function Co(e,t,l,a){t.value=l,t.getSnapshot=a,No(t)&&To(e)}function Eo(e,t,l){return l(function(){No(t)&&To(e)})}function No(e){var t=e.getSnapshot;e=e.value;try{var l=t();return!mt(e,l)}catch{return!0}}function To(e){var t=Yl(e,2);t!==null&&rt(t,e,2)}function Nu(e){var t=lt();if(typeof e=="function"){var l=e;if(e=l(),Il){ol(!0);try{l()}finally{ol(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Wt,lastRenderedState:e},t}function Ro(e,t,l,a){return e.baseState=l,Cu(e,Se,typeof a=="function"?a:Wt)}function np(e,t,l,a,i){if(Ai(e))throw Error(o(485));if(e=t.action,e!==null){var s={payload:i,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(c){s.listeners.push(c)}};O.T!==null?l(!0):s.isTransition=!1,a(s),l=t.pending,l===null?(s.next=t.pending=s,Ao(t,s)):(s.next=l.next,t.pending=l.next=s)}}function Ao(e,t){var l=t.action,a=t.payload,i=e.state;if(t.isTransition){var s=O.T,c={};O.T=c;try{var f=l(i,a),p=O.S;p!==null&&p(c,f),Mo(e,t,f)}catch(N){Tu(e,t,N)}finally{s!==null&&c.types!==null&&(s.types=c.types),O.T=s}}else try{s=l(i,a),Mo(e,t,s)}catch(N){Tu(e,t,N)}}function Mo(e,t,l){l!==null&&typeof l=="object"&&typeof l.then=="function"?l.then(function(a){Do(e,t,a)},function(a){return Tu(e,t,a)}):Do(e,t,l)}function Do(e,t,l){t.status="fulfilled",t.value=l,zo(t),e.state=l,t=e.pending,t!==null&&(l=t.next,l===t?e.pending=null:(l=l.next,t.next=l,Ao(e,l)))}function Tu(e,t,l){var a=e.pending;if(e.pending=null,a!==null){a=a.next;do t.status="rejected",t.reason=l,zo(t),t=t.next;while(t!==a)}e.action=null}function zo(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function Oo(e,t){return t}function Uo(e,t){if(fe){var l=Ne.formState;if(l!==null){e:{var a=ne;if(fe){if(Me){t:{for(var i=Me,s=At;i.nodeType!==8;){if(!s){i=null;break t}if(i=Dt(i.nextSibling),i===null){i=null;break t}}s=i.data,i=s==="F!"||s==="F"?i:null}if(i){Me=Dt(i.nextSibling),a=i.data==="F!";break e}}pl(a)}a=!1}a&&(t=l[0])}}return l=lt(),l.memoizedState=l.baseState=t,a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Oo,lastRenderedState:t},l.queue=a,l=Io.bind(null,ne,a),a.dispatch=l,a=Nu(!1),s=Ou.bind(null,ne,!1,a.queue),a=lt(),i={state:t,dispatch:null,action:e,pending:null},a.queue=i,l=np.bind(null,ne,i,s,l),i.dispatch=l,a.memoizedState=e,[t,l,!1]}function _o(e){var t=we();return Lo(t,Se,e)}function Lo(e,t,l){if(t=Cu(e,t,Oo)[0],e=Ni(Wt)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var a=pa(t)}catch(c){throw c===Nn?pi:c}else a=t;t=we();var i=t.queue,s=i.dispatch;return l!==t.memoizedState&&(ne.flags|=2048,Dn(9,{destroy:void 0},ap.bind(null,i,l),null)),[a,s,e]}function ap(e,t){e.action=t}function Ho(e){var t=we(),l=Se;if(l!==null)return Lo(t,l,e);we(),t=t.memoizedState,l=we();var a=l.queue.dispatch;return l.memoizedState=e,[t,a,!1]}function Dn(e,t,l,a){return e={tag:e,create:l,deps:a,inst:t,next:null},t=ne.updateQueue,t===null&&(t=Ci(),ne.updateQueue=t),l=t.lastEffect,l===null?t.lastEffect=e.next=e:(a=l.next,l.next=e,e.next=a,t.lastEffect=e),e}function ko(){return we().memoizedState}function Ti(e,t,l,a){var i=lt();ne.flags|=e,i.memoizedState=Dn(1|t,{destroy:void 0},l,a===void 0?null:a)}function Ri(e,t,l,a){var i=we();a=a===void 0?null:a;var s=i.memoizedState.inst;Se!==null&&a!==null&&vu(a,Se.memoizedState.deps)?i.memoizedState=Dn(t,s,l,a):(ne.flags|=e,i.memoizedState=Dn(1|t,s,l,a))}function Bo(e,t){Ti(8390656,8,e,t)}function Ru(e,t){Ri(2048,8,e,t)}function ip(e){ne.flags|=4;var t=ne.updateQueue;if(t===null)t=Ci(),ne.updateQueue=t,t.events=[e];else{var l=t.events;l===null?t.events=[e]:l.push(e)}}function qo(e){var t=we().memoizedState;return ip({ref:t,nextImpl:e}),function(){if((ve&2)!==0)throw Error(o(440));return t.impl.apply(void 0,arguments)}}function wo(e,t){return Ri(4,2,e,t)}function Go(e,t){return Ri(4,4,e,t)}function Xo(e,t){if(typeof t=="function"){e=e();var l=t(e);return function(){typeof l=="function"?l():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Yo(e,t,l){l=l!=null?l.concat([e]):null,Ri(4,4,Xo.bind(null,t,e),l)}function Au(){}function Qo(e,t){var l=we();t=t===void 0?null:t;var a=l.memoizedState;return t!==null&&vu(t,a[1])?a[0]:(l.memoizedState=[e,t],e)}function Vo(e,t){var l=we();t=t===void 0?null:t;var a=l.memoizedState;if(t!==null&&vu(t,a[1]))return a[0];if(a=e(),Il){ol(!0);try{e()}finally{ol(!1)}}return l.memoizedState=[a,t],a}function Mu(e,t,l){return l===void 0||(Ft&1073741824)!==0&&(oe&261930)===0?e.memoizedState=t:(e.memoizedState=l,e=Zd(),ne.lanes|=e,El|=e,l)}function Zo(e,t,l,a){return mt(l,t)?l:Rn.current!==null?(e=Mu(e,l,a),mt(e,t)||(Ye=!0),e):(Ft&42)===0||(Ft&1073741824)!==0&&(oe&261930)===0?(Ye=!0,e.memoizedState=l):(e=Zd(),ne.lanes|=e,El|=e,t)}function Jo(e,t,l,a,i){var s=L.p;L.p=s!==0&&8>s?s:8;var c=O.T,f={};O.T=f,Ou(e,!1,t,l);try{var p=i(),N=O.S;if(N!==null&&N(f,p),p!==null&&typeof p=="object"&&typeof p.then=="function"){var z=ep(p,a);xa(e,t,z,gt(e))}else xa(e,t,a,gt(e))}catch(_){xa(e,t,{then:function(){},status:"rejected",reason:_},gt())}finally{L.p=s,c!==null&&f.types!==null&&(c.types=f.types),O.T=c}}function sp(){}function Du(e,t,l,a){if(e.tag!==5)throw Error(o(476));var i=Ko(e).queue;Jo(e,i,t,B,l===null?sp:function(){return $o(e),l(a)})}function Ko(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:B,baseState:B,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Wt,lastRenderedState:B},next:null};var l={};return t.next={memoizedState:l,baseState:l,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Wt,lastRenderedState:l},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function $o(e){var t=Ko(e);t.next===null&&(t=e.alternate.memoizedState),xa(e,t.next.queue,{},gt())}function zu(){return We(Ua)}function Fo(){return we().memoizedState}function Wo(){return we().memoizedState}function up(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var l=gt();e=yl(l);var a=jl(t,e,l);a!==null&&(rt(a,t,l),da(a,t,l)),t={cache:su()},e.payload=t;return}t=t.return}}function cp(e,t,l){var a=gt();l={lane:a,revertLane:0,gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},Ai(e)?Po(t,l):(l=$s(e,t,l,a),l!==null&&(rt(l,e,a),ed(l,t,a)))}function Io(e,t,l){var a=gt();xa(e,t,l,a)}function xa(e,t,l,a){var i={lane:a,revertLane:0,gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null};if(Ai(e))Po(t,i);else{var s=e.alternate;if(e.lanes===0&&(s===null||s.lanes===0)&&(s=t.lastRenderedReducer,s!==null))try{var c=t.lastRenderedState,f=s(c,l);if(i.hasEagerState=!0,i.eagerState=f,mt(f,c))return ci(e,t,i,0),Ne===null&&ui(),!1}catch{}if(l=$s(e,t,i,a),l!==null)return rt(l,e,a),ed(l,t,a),!0}return!1}function Ou(e,t,l,a){if(a={lane:2,revertLane:oc(),gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Ai(e)){if(t)throw Error(o(479))}else t=$s(e,l,a,2),t!==null&&rt(t,e,2)}function Ai(e){var t=e.alternate;return e===ne||t!==null&&t===ne}function Po(e,t){An=bi=!0;var l=e.pending;l===null?t.next=t:(t.next=l.next,l.next=t),e.pending=t}function ed(e,t,l){if((l&4194048)!==0){var a=t.lanes;a&=e.pendingLanes,l|=a,t.lanes=l,ar(e,l)}}var va={readContext:We,use:Ei,useCallback:Le,useContext:Le,useEffect:Le,useImperativeHandle:Le,useLayoutEffect:Le,useInsertionEffect:Le,useMemo:Le,useReducer:Le,useRef:Le,useState:Le,useDebugValue:Le,useDeferredValue:Le,useTransition:Le,useSyncExternalStore:Le,useId:Le,useHostTransitionStatus:Le,useFormState:Le,useActionState:Le,useOptimistic:Le,useMemoCache:Le,useCacheRefresh:Le};va.useEffectEvent=Le;var td={readContext:We,use:Ei,useCallback:function(e,t){return lt().memoizedState=[e,t===void 0?null:t],e},useContext:We,useEffect:Bo,useImperativeHandle:function(e,t,l){l=l!=null?l.concat([e]):null,Ti(4194308,4,Xo.bind(null,t,e),l)},useLayoutEffect:function(e,t){return Ti(4194308,4,e,t)},useInsertionEffect:function(e,t){Ti(4,2,e,t)},useMemo:function(e,t){var l=lt();t=t===void 0?null:t;var a=e();if(Il){ol(!0);try{e()}finally{ol(!1)}}return l.memoizedState=[a,t],a},useReducer:function(e,t,l){var a=lt();if(l!==void 0){var i=l(t);if(Il){ol(!0);try{l(t)}finally{ol(!1)}}}else i=t;return a.memoizedState=a.baseState=i,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:i},a.queue=e,e=e.dispatch=cp.bind(null,ne,e),[a.memoizedState,e]},useRef:function(e){var t=lt();return e={current:e},t.memoizedState=e},useState:function(e){e=Nu(e);var t=e.queue,l=Io.bind(null,ne,t);return t.dispatch=l,[e.memoizedState,l]},useDebugValue:Au,useDeferredValue:function(e,t){var l=lt();return Mu(l,e,t)},useTransition:function(){var e=Nu(!1);return e=Jo.bind(null,ne,e.queue,!0,!1),lt().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,l){var a=ne,i=lt();if(fe){if(l===void 0)throw Error(o(407));l=l()}else{if(l=t(),Ne===null)throw Error(o(349));(oe&127)!==0||So(a,t,l)}i.memoizedState=l;var s={value:l,getSnapshot:t};return i.queue=s,Bo(Eo.bind(null,a,s,e),[e]),a.flags|=2048,Dn(9,{destroy:void 0},Co.bind(null,a,s,l,t),null),l},useId:function(){var e=lt(),t=Ne.identifierPrefix;if(fe){var l=qt,a=Bt;l=(a&~(1<<32-ht(a)-1)).toString(32)+l,t="_"+t+"R_"+l,l=Si++,0<l&&(t+="H"+l.toString(32)),t+="_"}else l=tp++,t="_"+t+"r_"+l.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:zu,useFormState:Uo,useActionState:Uo,useOptimistic:function(e){var t=lt();t.memoizedState=t.baseState=e;var l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=l,t=Ou.bind(null,ne,!0,l),l.dispatch=t,[e,t]},useMemoCache:Su,useCacheRefresh:function(){return lt().memoizedState=up.bind(null,ne)},useEffectEvent:function(e){var t=lt(),l={impl:e};return t.memoizedState=l,function(){if((ve&2)!==0)throw Error(o(440));return l.impl.apply(void 0,arguments)}}},Uu={readContext:We,use:Ei,useCallback:Qo,useContext:We,useEffect:Ru,useImperativeHandle:Yo,useInsertionEffect:wo,useLayoutEffect:Go,useMemo:Vo,useReducer:Ni,useRef:ko,useState:function(){return Ni(Wt)},useDebugValue:Au,useDeferredValue:function(e,t){var l=we();return Zo(l,Se.memoizedState,e,t)},useTransition:function(){var e=Ni(Wt)[0],t=we().memoizedState;return[typeof e=="boolean"?e:pa(e),t]},useSyncExternalStore:bo,useId:Fo,useHostTransitionStatus:zu,useFormState:_o,useActionState:_o,useOptimistic:function(e,t){var l=we();return Ro(l,Se,e,t)},useMemoCache:Su,useCacheRefresh:Wo};Uu.useEffectEvent=qo;var ld={readContext:We,use:Ei,useCallback:Qo,useContext:We,useEffect:Ru,useImperativeHandle:Yo,useInsertionEffect:wo,useLayoutEffect:Go,useMemo:Vo,useReducer:Eu,useRef:ko,useState:function(){return Eu(Wt)},useDebugValue:Au,useDeferredValue:function(e,t){var l=we();return Se===null?Mu(l,e,t):Zo(l,Se.memoizedState,e,t)},useTransition:function(){var e=Eu(Wt)[0],t=we().memoizedState;return[typeof e=="boolean"?e:pa(e),t]},useSyncExternalStore:bo,useId:Fo,useHostTransitionStatus:zu,useFormState:Ho,useActionState:Ho,useOptimistic:function(e,t){var l=we();return Se!==null?Ro(l,Se,e,t):(l.baseState=e,[e,l.queue.dispatch])},useMemoCache:Su,useCacheRefresh:Wo};ld.useEffectEvent=qo;function _u(e,t,l,a){t=e.memoizedState,l=l(a,t),l=l==null?t:R({},t,l),e.memoizedState=l,e.lanes===0&&(e.updateQueue.baseState=l)}var Lu={enqueueSetState:function(e,t,l){e=e._reactInternals;var a=gt(),i=yl(a);i.payload=t,l!=null&&(i.callback=l),t=jl(e,i,a),t!==null&&(rt(t,e,a),da(t,e,a))},enqueueReplaceState:function(e,t,l){e=e._reactInternals;var a=gt(),i=yl(a);i.tag=1,i.payload=t,l!=null&&(i.callback=l),t=jl(e,i,a),t!==null&&(rt(t,e,a),da(t,e,a))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var l=gt(),a=yl(l);a.tag=2,t!=null&&(a.callback=t),t=jl(e,a,l),t!==null&&(rt(t,e,l),da(t,e,l))}};function nd(e,t,l,a,i,s,c){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(a,s,c):t.prototype&&t.prototype.isPureReactComponent?!na(l,a)||!na(i,s):!0}function ad(e,t,l,a){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(l,a),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(l,a),t.state!==e&&Lu.enqueueReplaceState(t,t.state,null)}function Pl(e,t){var l=t;if("ref"in t){l={};for(var a in t)a!=="ref"&&(l[a]=t[a])}if(e=e.defaultProps){l===t&&(l=R({},l));for(var i in e)l[i]===void 0&&(l[i]=e[i])}return l}function id(e){si(e)}function sd(e){console.error(e)}function ud(e){si(e)}function Mi(e,t){try{var l=e.onUncaughtError;l(t.value,{componentStack:t.stack})}catch(a){setTimeout(function(){throw a})}}function cd(e,t,l){try{var a=e.onCaughtError;a(l.value,{componentStack:l.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(i){setTimeout(function(){throw i})}}function Hu(e,t,l){return l=yl(l),l.tag=3,l.payload={element:null},l.callback=function(){Mi(e,t)},l}function rd(e){return e=yl(e),e.tag=3,e}function od(e,t,l,a){var i=l.type.getDerivedStateFromError;if(typeof i=="function"){var s=a.value;e.payload=function(){return i(s)},e.callback=function(){cd(t,l,a)}}var c=l.stateNode;c!==null&&typeof c.componentDidCatch=="function"&&(e.callback=function(){cd(t,l,a),typeof i!="function"&&(Nl===null?Nl=new Set([this]):Nl.add(this));var f=a.stack;this.componentDidCatch(a.value,{componentStack:f!==null?f:""})})}function rp(e,t,l,a,i){if(l.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){if(t=l.alternate,t!==null&&Sn(t,l,i,!0),l=xt.current,l!==null){switch(l.tag){case 31:case 13:return Mt===null?Gi():l.alternate===null&&He===0&&(He=3),l.flags&=-257,l.flags|=65536,l.lanes=i,a===xi?l.flags|=16384:(t=l.updateQueue,t===null?l.updateQueue=new Set([a]):t.add(a),uc(e,a,i)),!1;case 22:return l.flags|=65536,a===xi?l.flags|=16384:(t=l.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([a])},l.updateQueue=t):(l=t.retryQueue,l===null?t.retryQueue=new Set([a]):l.add(a)),uc(e,a,i)),!1}throw Error(o(435,l.tag))}return uc(e,a,i),Gi(),!1}if(fe)return t=xt.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=i,a!==tu&&(e=Error(o(422),{cause:a}),sa(Nt(e,l)))):(a!==tu&&(t=Error(o(423),{cause:a}),sa(Nt(t,l))),e=e.current.alternate,e.flags|=65536,i&=-i,e.lanes|=i,a=Nt(a,l),i=Hu(e.stateNode,a,i),fu(e,i),He!==4&&(He=2)),!1;var s=Error(o(520),{cause:a});if(s=Nt(s,l),Na===null?Na=[s]:Na.push(s),He!==4&&(He=2),t===null)return!0;a=Nt(a,l),l=t;do{switch(l.tag){case 3:return l.flags|=65536,e=i&-i,l.lanes|=e,e=Hu(l.stateNode,a,e),fu(l,e),!1;case 1:if(t=l.type,s=l.stateNode,(l.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||s!==null&&typeof s.componentDidCatch=="function"&&(Nl===null||!Nl.has(s))))return l.flags|=65536,i&=-i,l.lanes|=i,i=rd(i),od(i,e,l,a),fu(l,i),!1}l=l.return}while(l!==null);return!1}var ku=Error(o(461)),Ye=!1;function Ie(e,t,l,a){t.child=e===null?mo(t,null,l,a):Wl(t,e.child,l,a)}function dd(e,t,l,a,i){l=l.render;var s=t.ref;if("ref"in a){var c={};for(var f in a)f!=="ref"&&(c[f]=a[f])}else c=a;return Jl(t),a=yu(e,t,l,c,s,i),f=ju(),e!==null&&!Ye?(gu(e,t,i),It(e,t,i)):(fe&&f&&Ps(t),t.flags|=1,Ie(e,t,a,i),t.child)}function fd(e,t,l,a,i){if(e===null){var s=l.type;return typeof s=="function"&&!Fs(s)&&s.defaultProps===void 0&&l.compare===null?(t.tag=15,t.type=s,hd(e,t,s,a,i)):(e=oi(l.type,null,a,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(s=e.child,!Vu(e,i)){var c=s.memoizedProps;if(l=l.compare,l=l!==null?l:na,l(c,a)&&e.ref===t.ref)return It(e,t,i)}return t.flags|=1,e=Zt(s,a),e.ref=t.ref,e.return=t,t.child=e}function hd(e,t,l,a,i){if(e!==null){var s=e.memoizedProps;if(na(s,a)&&e.ref===t.ref)if(Ye=!1,t.pendingProps=a=s,Vu(e,i))(e.flags&131072)!==0&&(Ye=!0);else return t.lanes=e.lanes,It(e,t,i)}return Bu(e,t,l,a,i)}function md(e,t,l,a){var i=a.children,s=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),a.mode==="hidden"){if((t.flags&128)!==0){if(s=s!==null?s.baseLanes|l:l,e!==null){for(a=t.child=e.child,i=0;a!==null;)i=i|a.lanes|a.childLanes,a=a.sibling;a=i&~s}else a=0,t.child=null;return pd(e,t,s,l,a)}if((l&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&mi(t,s!==null?s.cachePool:null),s!==null?vo(t,s):mu(),yo(t);else return a=t.lanes=536870912,pd(e,t,s!==null?s.baseLanes|l:l,l,a)}else s!==null?(mi(t,s.cachePool),vo(t,s),bl(),t.memoizedState=null):(e!==null&&mi(t,null),mu(),bl());return Ie(e,t,i,l),t.child}function ya(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function pd(e,t,l,a,i){var s=cu();return s=s===null?null:{parent:Ge._currentValue,pool:s},t.memoizedState={baseLanes:l,cachePool:s},e!==null&&mi(t,null),mu(),yo(t),e!==null&&Sn(e,t,a,!0),t.childLanes=i,null}function Di(e,t){return t=Oi({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function xd(e,t,l){return Wl(t,e.child,null,l),e=Di(t,t.pendingProps),e.flags|=2,vt(t),t.memoizedState=null,e}function op(e,t,l){var a=t.pendingProps,i=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(fe){if(a.mode==="hidden")return e=Di(t,a),t.lanes=536870912,ya(null,e);if(xu(t),(e=Me)?(e=Mf(e,At),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:hl!==null?{id:Bt,overflow:qt}:null,retryLane:536870912,hydrationErrors:null},l=Ir(e),l.return=t,t.child=l,Fe=t,Me=null)):e=null,e===null)throw pl(t);return t.lanes=536870912,null}return Di(t,a)}var s=e.memoizedState;if(s!==null){var c=s.dehydrated;if(xu(t),i)if(t.flags&256)t.flags&=-257,t=xd(e,t,l);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(o(558));else if(Ye||Sn(e,t,l,!1),i=(l&e.childLanes)!==0,Ye||i){if(a=Ne,a!==null&&(c=ir(a,l),c!==0&&c!==s.retryLane))throw s.retryLane=c,Yl(e,c),rt(a,e,c),ku;Gi(),t=xd(e,t,l)}else e=s.treeContext,Me=Dt(c.nextSibling),Fe=t,fe=!0,ml=null,At=!1,e!==null&&to(t,e),t=Di(t,a),t.flags|=4096;return t}return e=Zt(e.child,{mode:a.mode,children:a.children}),e.ref=t.ref,t.child=e,e.return=t,e}function zi(e,t){var l=t.ref;if(l===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof l!="function"&&typeof l!="object")throw Error(o(284));(e===null||e.ref!==l)&&(t.flags|=4194816)}}function Bu(e,t,l,a,i){return Jl(t),l=yu(e,t,l,a,void 0,i),a=ju(),e!==null&&!Ye?(gu(e,t,i),It(e,t,i)):(fe&&a&&Ps(t),t.flags|=1,Ie(e,t,l,i),t.child)}function vd(e,t,l,a,i,s){return Jl(t),t.updateQueue=null,l=go(t,a,l,i),jo(e),a=ju(),e!==null&&!Ye?(gu(e,t,s),It(e,t,s)):(fe&&a&&Ps(t),t.flags|=1,Ie(e,t,l,s),t.child)}function yd(e,t,l,a,i){if(Jl(t),t.stateNode===null){var s=yn,c=l.contextType;typeof c=="object"&&c!==null&&(s=We(c)),s=new l(a,s),t.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,s.updater=Lu,t.stateNode=s,s._reactInternals=t,s=t.stateNode,s.props=a,s.state=t.memoizedState,s.refs={},ou(t),c=l.contextType,s.context=typeof c=="object"&&c!==null?We(c):yn,s.state=t.memoizedState,c=l.getDerivedStateFromProps,typeof c=="function"&&(_u(t,l,c,a),s.state=t.memoizedState),typeof l.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(c=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),c!==s.state&&Lu.enqueueReplaceState(s,s.state,null),ha(t,a,s,i),fa(),s.state=t.memoizedState),typeof s.componentDidMount=="function"&&(t.flags|=4194308),a=!0}else if(e===null){s=t.stateNode;var f=t.memoizedProps,p=Pl(l,f);s.props=p;var N=s.context,z=l.contextType;c=yn,typeof z=="object"&&z!==null&&(c=We(z));var _=l.getDerivedStateFromProps;z=typeof _=="function"||typeof s.getSnapshotBeforeUpdate=="function",f=t.pendingProps!==f,z||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(f||N!==c)&&ad(t,s,a,c),vl=!1;var T=t.memoizedState;s.state=T,ha(t,a,s,i),fa(),N=t.memoizedState,f||T!==N||vl?(typeof _=="function"&&(_u(t,l,_,a),N=t.memoizedState),(p=vl||nd(t,l,p,a,T,N,c))?(z||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=a,t.memoizedState=N),s.props=a,s.state=N,s.context=c,a=p):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),a=!1)}else{s=t.stateNode,du(e,t),c=t.memoizedProps,z=Pl(l,c),s.props=z,_=t.pendingProps,T=s.context,N=l.contextType,p=yn,typeof N=="object"&&N!==null&&(p=We(N)),f=l.getDerivedStateFromProps,(N=typeof f=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(c!==_||T!==p)&&ad(t,s,a,p),vl=!1,T=t.memoizedState,s.state=T,ha(t,a,s,i),fa();var M=t.memoizedState;c!==_||T!==M||vl||e!==null&&e.dependencies!==null&&fi(e.dependencies)?(typeof f=="function"&&(_u(t,l,f,a),M=t.memoizedState),(z=vl||nd(t,l,z,a,T,M,p)||e!==null&&e.dependencies!==null&&fi(e.dependencies))?(N||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(a,M,p),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(a,M,p)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||c===e.memoizedProps&&T===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||c===e.memoizedProps&&T===e.memoizedState||(t.flags|=1024),t.memoizedProps=a,t.memoizedState=M),s.props=a,s.state=M,s.context=p,a=z):(typeof s.componentDidUpdate!="function"||c===e.memoizedProps&&T===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||c===e.memoizedProps&&T===e.memoizedState||(t.flags|=1024),a=!1)}return s=a,zi(e,t),a=(t.flags&128)!==0,s||a?(s=t.stateNode,l=a&&typeof l.getDerivedStateFromError!="function"?null:s.render(),t.flags|=1,e!==null&&a?(t.child=Wl(t,e.child,null,i),t.child=Wl(t,null,l,i)):Ie(e,t,l,i),t.memoizedState=s.state,e=t.child):e=It(e,t,i),e}function jd(e,t,l,a){return Vl(),t.flags|=256,Ie(e,t,l,a),t.child}var qu={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function wu(e){return{baseLanes:e,cachePool:uo()}}function Gu(e,t,l){return e=e!==null?e.childLanes&~l:0,t&&(e|=jt),e}function gd(e,t,l){var a=t.pendingProps,i=!1,s=(t.flags&128)!==0,c;if((c=s)||(c=e!==null&&e.memoizedState===null?!1:(qe.current&2)!==0),c&&(i=!0,t.flags&=-129),c=(t.flags&32)!==0,t.flags&=-33,e===null){if(fe){if(i?gl(t):bl(),(e=Me)?(e=Mf(e,At),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:hl!==null?{id:Bt,overflow:qt}:null,retryLane:536870912,hydrationErrors:null},l=Ir(e),l.return=t,t.child=l,Fe=t,Me=null)):e=null,e===null)throw pl(t);return Cc(e)?t.lanes=32:t.lanes=536870912,null}var f=a.children;return a=a.fallback,i?(bl(),i=t.mode,f=Oi({mode:"hidden",children:f},i),a=Ql(a,i,l,null),f.return=t,a.return=t,f.sibling=a,t.child=f,a=t.child,a.memoizedState=wu(l),a.childLanes=Gu(e,c,l),t.memoizedState=qu,ya(null,a)):(gl(t),Xu(t,f))}var p=e.memoizedState;if(p!==null&&(f=p.dehydrated,f!==null)){if(s)t.flags&256?(gl(t),t.flags&=-257,t=Yu(e,t,l)):t.memoizedState!==null?(bl(),t.child=e.child,t.flags|=128,t=null):(bl(),f=a.fallback,i=t.mode,a=Oi({mode:"visible",children:a.children},i),f=Ql(f,i,l,null),f.flags|=2,a.return=t,f.return=t,a.sibling=f,t.child=a,Wl(t,e.child,null,l),a=t.child,a.memoizedState=wu(l),a.childLanes=Gu(e,c,l),t.memoizedState=qu,t=ya(null,a));else if(gl(t),Cc(f)){if(c=f.nextSibling&&f.nextSibling.dataset,c)var N=c.dgst;c=N,a=Error(o(419)),a.stack="",a.digest=c,sa({value:a,source:null,stack:null}),t=Yu(e,t,l)}else if(Ye||Sn(e,t,l,!1),c=(l&e.childLanes)!==0,Ye||c){if(c=Ne,c!==null&&(a=ir(c,l),a!==0&&a!==p.retryLane))throw p.retryLane=a,Yl(e,a),rt(c,e,a),ku;Sc(f)||Gi(),t=Yu(e,t,l)}else Sc(f)?(t.flags|=192,t.child=e.child,t=null):(e=p.treeContext,Me=Dt(f.nextSibling),Fe=t,fe=!0,ml=null,At=!1,e!==null&&to(t,e),t=Xu(t,a.children),t.flags|=4096);return t}return i?(bl(),f=a.fallback,i=t.mode,p=e.child,N=p.sibling,a=Zt(p,{mode:"hidden",children:a.children}),a.subtreeFlags=p.subtreeFlags&65011712,N!==null?f=Zt(N,f):(f=Ql(f,i,l,null),f.flags|=2),f.return=t,a.return=t,a.sibling=f,t.child=a,ya(null,a),a=t.child,f=e.child.memoizedState,f===null?f=wu(l):(i=f.cachePool,i!==null?(p=Ge._currentValue,i=i.parent!==p?{parent:p,pool:p}:i):i=uo(),f={baseLanes:f.baseLanes|l,cachePool:i}),a.memoizedState=f,a.childLanes=Gu(e,c,l),t.memoizedState=qu,ya(e.child,a)):(gl(t),l=e.child,e=l.sibling,l=Zt(l,{mode:"visible",children:a.children}),l.return=t,l.sibling=null,e!==null&&(c=t.deletions,c===null?(t.deletions=[e],t.flags|=16):c.push(e)),t.child=l,t.memoizedState=null,l)}function Xu(e,t){return t=Oi({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function Oi(e,t){return e=pt(22,e,null,t),e.lanes=0,e}function Yu(e,t,l){return Wl(t,e.child,null,l),e=Xu(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function bd(e,t,l){e.lanes|=t;var a=e.alternate;a!==null&&(a.lanes|=t),au(e.return,t,l)}function Qu(e,t,l,a,i,s){var c=e.memoizedState;c===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:a,tail:l,tailMode:i,treeForkCount:s}:(c.isBackwards=t,c.rendering=null,c.renderingStartTime=0,c.last=a,c.tail=l,c.tailMode=i,c.treeForkCount=s)}function Sd(e,t,l){var a=t.pendingProps,i=a.revealOrder,s=a.tail;a=a.children;var c=qe.current,f=(c&2)!==0;if(f?(c=c&1|2,t.flags|=128):c&=1,q(qe,c),Ie(e,t,a,l),a=fe?ia:0,!f&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&bd(e,l,t);else if(e.tag===19)bd(e,l,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(i){case"forwards":for(l=t.child,i=null;l!==null;)e=l.alternate,e!==null&&gi(e)===null&&(i=l),l=l.sibling;l=i,l===null?(i=t.child,t.child=null):(i=l.sibling,l.sibling=null),Qu(t,!1,i,l,s,a);break;case"backwards":case"unstable_legacy-backwards":for(l=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&gi(e)===null){t.child=i;break}e=i.sibling,i.sibling=l,l=i,i=e}Qu(t,!0,l,null,s,a);break;case"together":Qu(t,!1,null,null,void 0,a);break;default:t.memoizedState=null}return t.child}function It(e,t,l){if(e!==null&&(t.dependencies=e.dependencies),El|=t.lanes,(l&t.childLanes)===0)if(e!==null){if(Sn(e,t,l,!1),(l&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(o(153));if(t.child!==null){for(e=t.child,l=Zt(e,e.pendingProps),t.child=l,l.return=t;e.sibling!==null;)e=e.sibling,l=l.sibling=Zt(e,e.pendingProps),l.return=t;l.sibling=null}return t.child}function Vu(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&fi(e)))}function dp(e,t,l){switch(t.tag){case 3:tt(t,t.stateNode.containerInfo),xl(t,Ge,e.memoizedState.cache),Vl();break;case 27:case 5:Qn(t);break;case 4:tt(t,t.stateNode.containerInfo);break;case 10:xl(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,xu(t),null;break;case 13:var a=t.memoizedState;if(a!==null)return a.dehydrated!==null?(gl(t),t.flags|=128,null):(l&t.child.childLanes)!==0?gd(e,t,l):(gl(t),e=It(e,t,l),e!==null?e.sibling:null);gl(t);break;case 19:var i=(e.flags&128)!==0;if(a=(l&t.childLanes)!==0,a||(Sn(e,t,l,!1),a=(l&t.childLanes)!==0),i){if(a)return Sd(e,t,l);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),q(qe,qe.current),a)break;return null;case 22:return t.lanes=0,md(e,t,l,t.pendingProps);case 24:xl(t,Ge,e.memoizedState.cache)}return It(e,t,l)}function Cd(e,t,l){if(e!==null)if(e.memoizedProps!==t.pendingProps)Ye=!0;else{if(!Vu(e,l)&&(t.flags&128)===0)return Ye=!1,dp(e,t,l);Ye=(e.flags&131072)!==0}else Ye=!1,fe&&(t.flags&1048576)!==0&&eo(t,ia,t.index);switch(t.lanes=0,t.tag){case 16:e:{var a=t.pendingProps;if(e=$l(t.elementType),t.type=e,typeof e=="function")Fs(e)?(a=Pl(e,a),t.tag=1,t=yd(null,t,e,a,l)):(t.tag=0,t=Bu(null,t,e,a,l));else{if(e!=null){var i=e.$$typeof;if(i===he){t.tag=11,t=dd(null,t,e,a,l);break e}else if(i===W){t.tag=14,t=fd(null,t,e,a,l);break e}}throw t=bt(e)||e,Error(o(306,t,""))}}return t;case 0:return Bu(e,t,t.type,t.pendingProps,l);case 1:return a=t.type,i=Pl(a,t.pendingProps),yd(e,t,a,i,l);case 3:e:{if(tt(t,t.stateNode.containerInfo),e===null)throw Error(o(387));a=t.pendingProps;var s=t.memoizedState;i=s.element,du(e,t),ha(t,a,null,l);var c=t.memoizedState;if(a=c.cache,xl(t,Ge,a),a!==s.cache&&iu(t,[Ge],l,!0),fa(),a=c.element,s.isDehydrated)if(s={element:a,isDehydrated:!1,cache:c.cache},t.updateQueue.baseState=s,t.memoizedState=s,t.flags&256){t=jd(e,t,a,l);break e}else if(a!==i){i=Nt(Error(o(424)),t),sa(i),t=jd(e,t,a,l);break e}else for(e=t.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,Me=Dt(e.firstChild),Fe=t,fe=!0,ml=null,At=!0,l=mo(t,null,a,l),t.child=l;l;)l.flags=l.flags&-3|4096,l=l.sibling;else{if(Vl(),a===i){t=It(e,t,l);break e}Ie(e,t,a,l)}t=t.child}return t;case 26:return zi(e,t),e===null?(l=Lf(t.type,null,t.pendingProps,null))?t.memoizedState=l:fe||(l=t.type,e=t.pendingProps,a=Ki(se.current).createElement(l),a[$e]=t,a[nt]=e,Pe(a,l,e),Je(a),t.stateNode=a):t.memoizedState=Lf(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return Qn(t),e===null&&fe&&(a=t.stateNode=Of(t.type,t.pendingProps,se.current),Fe=t,At=!0,i=Me,Ml(t.type)?(Ec=i,Me=Dt(a.firstChild)):Me=i),Ie(e,t,t.pendingProps.children,l),zi(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&fe&&((i=a=Me)&&(a=Gp(a,t.type,t.pendingProps,At),a!==null?(t.stateNode=a,Fe=t,Me=Dt(a.firstChild),At=!1,i=!0):i=!1),i||pl(t)),Qn(t),i=t.type,s=t.pendingProps,c=e!==null?e.memoizedProps:null,a=s.children,jc(i,s)?a=null:c!==null&&jc(i,c)&&(t.flags|=32),t.memoizedState!==null&&(i=yu(e,t,lp,null,null,l),Ua._currentValue=i),zi(e,t),Ie(e,t,a,l),t.child;case 6:return e===null&&fe&&((e=l=Me)&&(l=Xp(l,t.pendingProps,At),l!==null?(t.stateNode=l,Fe=t,Me=null,e=!0):e=!1),e||pl(t)),null;case 13:return gd(e,t,l);case 4:return tt(t,t.stateNode.containerInfo),a=t.pendingProps,e===null?t.child=Wl(t,null,a,l):Ie(e,t,a,l),t.child;case 11:return dd(e,t,t.type,t.pendingProps,l);case 7:return Ie(e,t,t.pendingProps,l),t.child;case 8:return Ie(e,t,t.pendingProps.children,l),t.child;case 12:return Ie(e,t,t.pendingProps.children,l),t.child;case 10:return a=t.pendingProps,xl(t,t.type,a.value),Ie(e,t,a.children,l),t.child;case 9:return i=t.type._context,a=t.pendingProps.children,Jl(t),i=We(i),a=a(i),t.flags|=1,Ie(e,t,a,l),t.child;case 14:return fd(e,t,t.type,t.pendingProps,l);case 15:return hd(e,t,t.type,t.pendingProps,l);case 19:return Sd(e,t,l);case 31:return op(e,t,l);case 22:return md(e,t,l,t.pendingProps);case 24:return Jl(t),a=We(Ge),e===null?(i=cu(),i===null&&(i=Ne,s=su(),i.pooledCache=s,s.refCount++,s!==null&&(i.pooledCacheLanes|=l),i=s),t.memoizedState={parent:a,cache:i},ou(t),xl(t,Ge,i)):((e.lanes&l)!==0&&(du(e,t),ha(t,null,null,l),fa()),i=e.memoizedState,s=t.memoizedState,i.parent!==a?(i={parent:a,cache:a},t.memoizedState=i,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=i),xl(t,Ge,a)):(a=s.cache,xl(t,Ge,a),a!==i.cache&&iu(t,[Ge],l,!0))),Ie(e,t,t.pendingProps.children,l),t.child;case 29:throw t.pendingProps}throw Error(o(156,t.tag))}function Pt(e){e.flags|=4}function Zu(e,t,l,a,i){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(i&335544128)===i)if(e.stateNode.complete)e.flags|=8192;else if(Fd())e.flags|=8192;else throw Fl=xi,ru}else e.flags&=-16777217}function Ed(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!wf(t))if(Fd())e.flags|=8192;else throw Fl=xi,ru}function Ui(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?lr():536870912,e.lanes|=t,_n|=t)}function ja(e,t){if(!fe)switch(e.tailMode){case"hidden":t=e.tail;for(var l=null;t!==null;)t.alternate!==null&&(l=t),t=t.sibling;l===null?e.tail=null:l.sibling=null;break;case"collapsed":l=e.tail;for(var a=null;l!==null;)l.alternate!==null&&(a=l),l=l.sibling;a===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:a.sibling=null}}function De(e){var t=e.alternate!==null&&e.alternate.child===e.child,l=0,a=0;if(t)for(var i=e.child;i!==null;)l|=i.lanes|i.childLanes,a|=i.subtreeFlags&65011712,a|=i.flags&65011712,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)l|=i.lanes|i.childLanes,a|=i.subtreeFlags,a|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=a,e.childLanes=l,t}function fp(e,t,l){var a=t.pendingProps;switch(eu(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return De(t),null;case 1:return De(t),null;case 3:return l=t.stateNode,a=null,e!==null&&(a=e.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),$t(Ge),Be(),l.pendingContext&&(l.context=l.pendingContext,l.pendingContext=null),(e===null||e.child===null)&&(bn(t)?Pt(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,lu())),De(t),null;case 26:var i=t.type,s=t.memoizedState;return e===null?(Pt(t),s!==null?(De(t),Ed(t,s)):(De(t),Zu(t,i,null,a,l))):s?s!==e.memoizedState?(Pt(t),De(t),Ed(t,s)):(De(t),t.flags&=-16777217):(e=e.memoizedProps,e!==a&&Pt(t),De(t),Zu(t,i,e,a,l)),null;case 27:if(Qa(t),l=se.current,i=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==a&&Pt(t);else{if(!a){if(t.stateNode===null)throw Error(o(166));return De(t),null}e=K.current,bn(t)?lo(t):(e=Of(i,a,l),t.stateNode=e,Pt(t))}return De(t),null;case 5:if(Qa(t),i=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==a&&Pt(t);else{if(!a){if(t.stateNode===null)throw Error(o(166));return De(t),null}if(s=K.current,bn(t))lo(t);else{var c=Ki(se.current);switch(s){case 1:s=c.createElementNS("http://www.w3.org/2000/svg",i);break;case 2:s=c.createElementNS("http://www.w3.org/1998/Math/MathML",i);break;default:switch(i){case"svg":s=c.createElementNS("http://www.w3.org/2000/svg",i);break;case"math":s=c.createElementNS("http://www.w3.org/1998/Math/MathML",i);break;case"script":s=c.createElement("div"),s.innerHTML="<script><\/script>",s=s.removeChild(s.firstChild);break;case"select":s=typeof a.is=="string"?c.createElement("select",{is:a.is}):c.createElement("select"),a.multiple?s.multiple=!0:a.size&&(s.size=a.size);break;default:s=typeof a.is=="string"?c.createElement(i,{is:a.is}):c.createElement(i)}}s[$e]=t,s[nt]=a;e:for(c=t.child;c!==null;){if(c.tag===5||c.tag===6)s.appendChild(c.stateNode);else if(c.tag!==4&&c.tag!==27&&c.child!==null){c.child.return=c,c=c.child;continue}if(c===t)break e;for(;c.sibling===null;){if(c.return===null||c.return===t)break e;c=c.return}c.sibling.return=c.return,c=c.sibling}t.stateNode=s;e:switch(Pe(s,i,a),i){case"button":case"input":case"select":case"textarea":a=!!a.autoFocus;break e;case"img":a=!0;break e;default:a=!1}a&&Pt(t)}}return De(t),Zu(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,l),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==a&&Pt(t);else{if(typeof a!="string"&&t.stateNode===null)throw Error(o(166));if(e=se.current,bn(t)){if(e=t.stateNode,l=t.memoizedProps,a=null,i=Fe,i!==null)switch(i.tag){case 27:case 5:a=i.memoizedProps}e[$e]=t,e=!!(e.nodeValue===l||a!==null&&a.suppressHydrationWarning===!0||bf(e.nodeValue,l)),e||pl(t,!0)}else e=Ki(e).createTextNode(a),e[$e]=t,t.stateNode=e}return De(t),null;case 31:if(l=t.memoizedState,e===null||e.memoizedState!==null){if(a=bn(t),l!==null){if(e===null){if(!a)throw Error(o(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(o(557));e[$e]=t}else Vl(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;De(t),e=!1}else l=lu(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=l),e=!0;if(!e)return t.flags&256?(vt(t),t):(vt(t),null);if((t.flags&128)!==0)throw Error(o(558))}return De(t),null;case 13:if(a=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(i=bn(t),a!==null&&a.dehydrated!==null){if(e===null){if(!i)throw Error(o(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(o(317));i[$e]=t}else Vl(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;De(t),i=!1}else i=lu(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=i),i=!0;if(!i)return t.flags&256?(vt(t),t):(vt(t),null)}return vt(t),(t.flags&128)!==0?(t.lanes=l,t):(l=a!==null,e=e!==null&&e.memoizedState!==null,l&&(a=t.child,i=null,a.alternate!==null&&a.alternate.memoizedState!==null&&a.alternate.memoizedState.cachePool!==null&&(i=a.alternate.memoizedState.cachePool.pool),s=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(s=a.memoizedState.cachePool.pool),s!==i&&(a.flags|=2048)),l!==e&&l&&(t.child.flags|=8192),Ui(t,t.updateQueue),De(t),null);case 4:return Be(),e===null&&mc(t.stateNode.containerInfo),De(t),null;case 10:return $t(t.type),De(t),null;case 19:if(H(qe),a=t.memoizedState,a===null)return De(t),null;if(i=(t.flags&128)!==0,s=a.rendering,s===null)if(i)ja(a,!1);else{if(He!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(s=gi(e),s!==null){for(t.flags|=128,ja(a,!1),e=s.updateQueue,t.updateQueue=e,Ui(t,e),t.subtreeFlags=0,e=l,l=t.child;l!==null;)Wr(l,e),l=l.sibling;return q(qe,qe.current&1|2),fe&&Jt(t,a.treeForkCount),t.child}e=e.sibling}a.tail!==null&&dt()>Bi&&(t.flags|=128,i=!0,ja(a,!1),t.lanes=4194304)}else{if(!i)if(e=gi(s),e!==null){if(t.flags|=128,i=!0,e=e.updateQueue,t.updateQueue=e,Ui(t,e),ja(a,!0),a.tail===null&&a.tailMode==="hidden"&&!s.alternate&&!fe)return De(t),null}else 2*dt()-a.renderingStartTime>Bi&&l!==536870912&&(t.flags|=128,i=!0,ja(a,!1),t.lanes=4194304);a.isBackwards?(s.sibling=t.child,t.child=s):(e=a.last,e!==null?e.sibling=s:t.child=s,a.last=s)}return a.tail!==null?(e=a.tail,a.rendering=e,a.tail=e.sibling,a.renderingStartTime=dt(),e.sibling=null,l=qe.current,q(qe,i?l&1|2:l&1),fe&&Jt(t,a.treeForkCount),e):(De(t),null);case 22:case 23:return vt(t),pu(),a=t.memoizedState!==null,e!==null?e.memoizedState!==null!==a&&(t.flags|=8192):a&&(t.flags|=8192),a?(l&536870912)!==0&&(t.flags&128)===0&&(De(t),t.subtreeFlags&6&&(t.flags|=8192)):De(t),l=t.updateQueue,l!==null&&Ui(t,l.retryQueue),l=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(l=e.memoizedState.cachePool.pool),a=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),a!==l&&(t.flags|=2048),e!==null&&H(Kl),null;case 24:return l=null,e!==null&&(l=e.memoizedState.cache),t.memoizedState.cache!==l&&(t.flags|=2048),$t(Ge),De(t),null;case 25:return null;case 30:return null}throw Error(o(156,t.tag))}function hp(e,t){switch(eu(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return $t(Ge),Be(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return Qa(t),null;case 31:if(t.memoizedState!==null){if(vt(t),t.alternate===null)throw Error(o(340));Vl()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(vt(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(o(340));Vl()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return H(qe),null;case 4:return Be(),null;case 10:return $t(t.type),null;case 22:case 23:return vt(t),pu(),e!==null&&H(Kl),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return $t(Ge),null;case 25:return null;default:return null}}function Nd(e,t){switch(eu(t),t.tag){case 3:$t(Ge),Be();break;case 26:case 27:case 5:Qa(t);break;case 4:Be();break;case 31:t.memoizedState!==null&&vt(t);break;case 13:vt(t);break;case 19:H(qe);break;case 10:$t(t.type);break;case 22:case 23:vt(t),pu(),e!==null&&H(Kl);break;case 24:$t(Ge)}}function ga(e,t){try{var l=t.updateQueue,a=l!==null?l.lastEffect:null;if(a!==null){var i=a.next;l=i;do{if((l.tag&e)===e){a=void 0;var s=l.create,c=l.inst;a=s(),c.destroy=a}l=l.next}while(l!==i)}}catch(f){be(t,t.return,f)}}function Sl(e,t,l){try{var a=t.updateQueue,i=a!==null?a.lastEffect:null;if(i!==null){var s=i.next;a=s;do{if((a.tag&e)===e){var c=a.inst,f=c.destroy;if(f!==void 0){c.destroy=void 0,i=t;var p=l,N=f;try{N()}catch(z){be(i,p,z)}}}a=a.next}while(a!==s)}}catch(z){be(t,t.return,z)}}function Td(e){var t=e.updateQueue;if(t!==null){var l=e.stateNode;try{xo(t,l)}catch(a){be(e,e.return,a)}}}function Rd(e,t,l){l.props=Pl(e.type,e.memoizedProps),l.state=e.memoizedState;try{l.componentWillUnmount()}catch(a){be(e,t,a)}}function ba(e,t){try{var l=e.ref;if(l!==null){switch(e.tag){case 26:case 27:case 5:var a=e.stateNode;break;case 30:a=e.stateNode;break;default:a=e.stateNode}typeof l=="function"?e.refCleanup=l(a):l.current=a}}catch(i){be(e,t,i)}}function wt(e,t){var l=e.ref,a=e.refCleanup;if(l!==null)if(typeof a=="function")try{a()}catch(i){be(e,t,i)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof l=="function")try{l(null)}catch(i){be(e,t,i)}else l.current=null}function Ad(e){var t=e.type,l=e.memoizedProps,a=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":l.autoFocus&&a.focus();break e;case"img":l.src?a.src=l.src:l.srcSet&&(a.srcset=l.srcSet)}}catch(i){be(e,e.return,i)}}function Ju(e,t,l){try{var a=e.stateNode;Lp(a,e.type,l,t),a[nt]=t}catch(i){be(e,e.return,i)}}function Md(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Ml(e.type)||e.tag===4}function Ku(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Md(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Ml(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function $u(e,t,l){var a=e.tag;if(a===5||a===6)e=e.stateNode,t?(l.nodeType===9?l.body:l.nodeName==="HTML"?l.ownerDocument.body:l).insertBefore(e,t):(t=l.nodeType===9?l.body:l.nodeName==="HTML"?l.ownerDocument.body:l,t.appendChild(e),l=l._reactRootContainer,l!=null||t.onclick!==null||(t.onclick=Qt));else if(a!==4&&(a===27&&Ml(e.type)&&(l=e.stateNode,t=null),e=e.child,e!==null))for($u(e,t,l),e=e.sibling;e!==null;)$u(e,t,l),e=e.sibling}function _i(e,t,l){var a=e.tag;if(a===5||a===6)e=e.stateNode,t?l.insertBefore(e,t):l.appendChild(e);else if(a!==4&&(a===27&&Ml(e.type)&&(l=e.stateNode),e=e.child,e!==null))for(_i(e,t,l),e=e.sibling;e!==null;)_i(e,t,l),e=e.sibling}function Dd(e){var t=e.stateNode,l=e.memoizedProps;try{for(var a=e.type,i=t.attributes;i.length;)t.removeAttributeNode(i[0]);Pe(t,a,l),t[$e]=e,t[nt]=l}catch(s){be(e,e.return,s)}}var el=!1,Qe=!1,Fu=!1,zd=typeof WeakSet=="function"?WeakSet:Set,Ke=null;function mp(e,t){if(e=e.containerInfo,vc=ts,e=Xr(e),Ys(e)){if("selectionStart"in e)var l={start:e.selectionStart,end:e.selectionEnd};else e:{l=(l=e.ownerDocument)&&l.defaultView||window;var a=l.getSelection&&l.getSelection();if(a&&a.rangeCount!==0){l=a.anchorNode;var i=a.anchorOffset,s=a.focusNode;a=a.focusOffset;try{l.nodeType,s.nodeType}catch{l=null;break e}var c=0,f=-1,p=-1,N=0,z=0,_=e,T=null;t:for(;;){for(var M;_!==l||i!==0&&_.nodeType!==3||(f=c+i),_!==s||a!==0&&_.nodeType!==3||(p=c+a),_.nodeType===3&&(c+=_.nodeValue.length),(M=_.firstChild)!==null;)T=_,_=M;for(;;){if(_===e)break t;if(T===l&&++N===i&&(f=c),T===s&&++z===a&&(p=c),(M=_.nextSibling)!==null)break;_=T,T=_.parentNode}_=M}l=f===-1||p===-1?null:{start:f,end:p}}else l=null}l=l||{start:0,end:0}}else l=null;for(yc={focusedElem:e,selectionRange:l},ts=!1,Ke=t;Ke!==null;)if(t=Ke,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,Ke=e;else for(;Ke!==null;){switch(t=Ke,s=t.alternate,e=t.flags,t.tag){case 0:if((e&4)!==0&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(l=0;l<e.length;l++)i=e[l],i.ref.impl=i.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&s!==null){e=void 0,l=t,i=s.memoizedProps,s=s.memoizedState,a=l.stateNode;try{var Z=Pl(l.type,i);e=a.getSnapshotBeforeUpdate(Z,s),a.__reactInternalSnapshotBeforeUpdate=e}catch(ee){be(l,l.return,ee)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,l=e.nodeType,l===9)bc(e);else if(l===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":bc(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(o(163))}if(e=t.sibling,e!==null){e.return=t.return,Ke=e;break}Ke=t.return}}function Od(e,t,l){var a=l.flags;switch(l.tag){case 0:case 11:case 15:ll(e,l),a&4&&ga(5,l);break;case 1:if(ll(e,l),a&4)if(e=l.stateNode,t===null)try{e.componentDidMount()}catch(c){be(l,l.return,c)}else{var i=Pl(l.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(i,t,e.__reactInternalSnapshotBeforeUpdate)}catch(c){be(l,l.return,c)}}a&64&&Td(l),a&512&&ba(l,l.return);break;case 3:if(ll(e,l),a&64&&(e=l.updateQueue,e!==null)){if(t=null,l.child!==null)switch(l.child.tag){case 27:case 5:t=l.child.stateNode;break;case 1:t=l.child.stateNode}try{xo(e,t)}catch(c){be(l,l.return,c)}}break;case 27:t===null&&a&4&&Dd(l);case 26:case 5:ll(e,l),t===null&&a&4&&Ad(l),a&512&&ba(l,l.return);break;case 12:ll(e,l);break;case 31:ll(e,l),a&4&&Ld(e,l);break;case 13:ll(e,l),a&4&&Hd(e,l),a&64&&(e=l.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(l=Cp.bind(null,l),Yp(e,l))));break;case 22:if(a=l.memoizedState!==null||el,!a){t=t!==null&&t.memoizedState!==null||Qe,i=el;var s=Qe;el=a,(Qe=t)&&!s?nl(e,l,(l.subtreeFlags&8772)!==0):ll(e,l),el=i,Qe=s}break;case 30:break;default:ll(e,l)}}function Ud(e){var t=e.alternate;t!==null&&(e.alternate=null,Ud(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&Ts(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var ze=null,it=!1;function tl(e,t,l){for(l=l.child;l!==null;)_d(e,t,l),l=l.sibling}function _d(e,t,l){if(ft&&typeof ft.onCommitFiberUnmount=="function")try{ft.onCommitFiberUnmount(Vn,l)}catch{}switch(l.tag){case 26:Qe||wt(l,t),tl(e,t,l),l.memoizedState?l.memoizedState.count--:l.stateNode&&(l=l.stateNode,l.parentNode.removeChild(l));break;case 27:Qe||wt(l,t);var a=ze,i=it;Ml(l.type)&&(ze=l.stateNode,it=!1),tl(e,t,l),Da(l.stateNode),ze=a,it=i;break;case 5:Qe||wt(l,t);case 6:if(a=ze,i=it,ze=null,tl(e,t,l),ze=a,it=i,ze!==null)if(it)try{(ze.nodeType===9?ze.body:ze.nodeName==="HTML"?ze.ownerDocument.body:ze).removeChild(l.stateNode)}catch(s){be(l,t,s)}else try{ze.removeChild(l.stateNode)}catch(s){be(l,t,s)}break;case 18:ze!==null&&(it?(e=ze,Rf(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,l.stateNode),Xn(e)):Rf(ze,l.stateNode));break;case 4:a=ze,i=it,ze=l.stateNode.containerInfo,it=!0,tl(e,t,l),ze=a,it=i;break;case 0:case 11:case 14:case 15:Sl(2,l,t),Qe||Sl(4,l,t),tl(e,t,l);break;case 1:Qe||(wt(l,t),a=l.stateNode,typeof a.componentWillUnmount=="function"&&Rd(l,t,a)),tl(e,t,l);break;case 21:tl(e,t,l);break;case 22:Qe=(a=Qe)||l.memoizedState!==null,tl(e,t,l),Qe=a;break;default:tl(e,t,l)}}function Ld(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Xn(e)}catch(l){be(t,t.return,l)}}}function Hd(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Xn(e)}catch(l){be(t,t.return,l)}}function pp(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new zd),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new zd),t;default:throw Error(o(435,e.tag))}}function Li(e,t){var l=pp(e);t.forEach(function(a){if(!l.has(a)){l.add(a);var i=Ep.bind(null,e,a);a.then(i,i)}})}function st(e,t){var l=t.deletions;if(l!==null)for(var a=0;a<l.length;a++){var i=l[a],s=e,c=t,f=c;e:for(;f!==null;){switch(f.tag){case 27:if(Ml(f.type)){ze=f.stateNode,it=!1;break e}break;case 5:ze=f.stateNode,it=!1;break e;case 3:case 4:ze=f.stateNode.containerInfo,it=!0;break e}f=f.return}if(ze===null)throw Error(o(160));_d(s,c,i),ze=null,it=!1,s=i.alternate,s!==null&&(s.return=null),i.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)kd(t,e),t=t.sibling}var Ht=null;function kd(e,t){var l=e.alternate,a=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:st(t,e),ut(e),a&4&&(Sl(3,e,e.return),ga(3,e),Sl(5,e,e.return));break;case 1:st(t,e),ut(e),a&512&&(Qe||l===null||wt(l,l.return)),a&64&&el&&(e=e.updateQueue,e!==null&&(a=e.callbacks,a!==null&&(l=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=l===null?a:l.concat(a))));break;case 26:var i=Ht;if(st(t,e),ut(e),a&512&&(Qe||l===null||wt(l,l.return)),a&4){var s=l!==null?l.memoizedState:null;if(a=e.memoizedState,l===null)if(a===null)if(e.stateNode===null){e:{a=e.type,l=e.memoizedProps,i=i.ownerDocument||i;t:switch(a){case"title":s=i.getElementsByTagName("title")[0],(!s||s[Kn]||s[$e]||s.namespaceURI==="http://www.w3.org/2000/svg"||s.hasAttribute("itemprop"))&&(s=i.createElement(a),i.head.insertBefore(s,i.querySelector("head > title"))),Pe(s,a,l),s[$e]=e,Je(s),a=s;break e;case"link":var c=Bf("link","href",i).get(a+(l.href||""));if(c){for(var f=0;f<c.length;f++)if(s=c[f],s.getAttribute("href")===(l.href==null||l.href===""?null:l.href)&&s.getAttribute("rel")===(l.rel==null?null:l.rel)&&s.getAttribute("title")===(l.title==null?null:l.title)&&s.getAttribute("crossorigin")===(l.crossOrigin==null?null:l.crossOrigin)){c.splice(f,1);break t}}s=i.createElement(a),Pe(s,a,l),i.head.appendChild(s);break;case"meta":if(c=Bf("meta","content",i).get(a+(l.content||""))){for(f=0;f<c.length;f++)if(s=c[f],s.getAttribute("content")===(l.content==null?null:""+l.content)&&s.getAttribute("name")===(l.name==null?null:l.name)&&s.getAttribute("property")===(l.property==null?null:l.property)&&s.getAttribute("http-equiv")===(l.httpEquiv==null?null:l.httpEquiv)&&s.getAttribute("charset")===(l.charSet==null?null:l.charSet)){c.splice(f,1);break t}}s=i.createElement(a),Pe(s,a,l),i.head.appendChild(s);break;default:throw Error(o(468,a))}s[$e]=e,Je(s),a=s}e.stateNode=a}else qf(i,e.type,e.stateNode);else e.stateNode=kf(i,a,e.memoizedProps);else s!==a?(s===null?l.stateNode!==null&&(l=l.stateNode,l.parentNode.removeChild(l)):s.count--,a===null?qf(i,e.type,e.stateNode):kf(i,a,e.memoizedProps)):a===null&&e.stateNode!==null&&Ju(e,e.memoizedProps,l.memoizedProps)}break;case 27:st(t,e),ut(e),a&512&&(Qe||l===null||wt(l,l.return)),l!==null&&a&4&&Ju(e,e.memoizedProps,l.memoizedProps);break;case 5:if(st(t,e),ut(e),a&512&&(Qe||l===null||wt(l,l.return)),e.flags&32){i=e.stateNode;try{dn(i,"")}catch(Z){be(e,e.return,Z)}}a&4&&e.stateNode!=null&&(i=e.memoizedProps,Ju(e,i,l!==null?l.memoizedProps:i)),a&1024&&(Fu=!0);break;case 6:if(st(t,e),ut(e),a&4){if(e.stateNode===null)throw Error(o(162));a=e.memoizedProps,l=e.stateNode;try{l.nodeValue=a}catch(Z){be(e,e.return,Z)}}break;case 3:if(Wi=null,i=Ht,Ht=$i(t.containerInfo),st(t,e),Ht=i,ut(e),a&4&&l!==null&&l.memoizedState.isDehydrated)try{Xn(t.containerInfo)}catch(Z){be(e,e.return,Z)}Fu&&(Fu=!1,Bd(e));break;case 4:a=Ht,Ht=$i(e.stateNode.containerInfo),st(t,e),ut(e),Ht=a;break;case 12:st(t,e),ut(e);break;case 31:st(t,e),ut(e),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,Li(e,a)));break;case 13:st(t,e),ut(e),e.child.flags&8192&&e.memoizedState!==null!=(l!==null&&l.memoizedState!==null)&&(ki=dt()),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,Li(e,a)));break;case 22:i=e.memoizedState!==null;var p=l!==null&&l.memoizedState!==null,N=el,z=Qe;if(el=N||i,Qe=z||p,st(t,e),Qe=z,el=N,ut(e),a&8192)e:for(t=e.stateNode,t._visibility=i?t._visibility&-2:t._visibility|1,i&&(l===null||p||el||Qe||en(e)),l=null,t=e;;){if(t.tag===5||t.tag===26){if(l===null){p=l=t;try{if(s=p.stateNode,i)c=s.style,typeof c.setProperty=="function"?c.setProperty("display","none","important"):c.display="none";else{f=p.stateNode;var _=p.memoizedProps.style,T=_!=null&&_.hasOwnProperty("display")?_.display:null;f.style.display=T==null||typeof T=="boolean"?"":(""+T).trim()}}catch(Z){be(p,p.return,Z)}}}else if(t.tag===6){if(l===null){p=t;try{p.stateNode.nodeValue=i?"":p.memoizedProps}catch(Z){be(p,p.return,Z)}}}else if(t.tag===18){if(l===null){p=t;try{var M=p.stateNode;i?Af(M,!0):Af(p.stateNode,!1)}catch(Z){be(p,p.return,Z)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;l===t&&(l=null),t=t.return}l===t&&(l=null),t.sibling.return=t.return,t=t.sibling}a&4&&(a=e.updateQueue,a!==null&&(l=a.retryQueue,l!==null&&(a.retryQueue=null,Li(e,l))));break;case 19:st(t,e),ut(e),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,Li(e,a)));break;case 30:break;case 21:break;default:st(t,e),ut(e)}}function ut(e){var t=e.flags;if(t&2){try{for(var l,a=e.return;a!==null;){if(Md(a)){l=a;break}a=a.return}if(l==null)throw Error(o(160));switch(l.tag){case 27:var i=l.stateNode,s=Ku(e);_i(e,s,i);break;case 5:var c=l.stateNode;l.flags&32&&(dn(c,""),l.flags&=-33);var f=Ku(e);_i(e,f,c);break;case 3:case 4:var p=l.stateNode.containerInfo,N=Ku(e);$u(e,N,p);break;default:throw Error(o(161))}}catch(z){be(e,e.return,z)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Bd(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;Bd(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function ll(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)Od(e,t.alternate,t),t=t.sibling}function en(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Sl(4,t,t.return),en(t);break;case 1:wt(t,t.return);var l=t.stateNode;typeof l.componentWillUnmount=="function"&&Rd(t,t.return,l),en(t);break;case 27:Da(t.stateNode);case 26:case 5:wt(t,t.return),en(t);break;case 22:t.memoizedState===null&&en(t);break;case 30:en(t);break;default:en(t)}e=e.sibling}}function nl(e,t,l){for(l=l&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var a=t.alternate,i=e,s=t,c=s.flags;switch(s.tag){case 0:case 11:case 15:nl(i,s,l),ga(4,s);break;case 1:if(nl(i,s,l),a=s,i=a.stateNode,typeof i.componentDidMount=="function")try{i.componentDidMount()}catch(N){be(a,a.return,N)}if(a=s,i=a.updateQueue,i!==null){var f=a.stateNode;try{var p=i.shared.hiddenCallbacks;if(p!==null)for(i.shared.hiddenCallbacks=null,i=0;i<p.length;i++)po(p[i],f)}catch(N){be(a,a.return,N)}}l&&c&64&&Td(s),ba(s,s.return);break;case 27:Dd(s);case 26:case 5:nl(i,s,l),l&&a===null&&c&4&&Ad(s),ba(s,s.return);break;case 12:nl(i,s,l);break;case 31:nl(i,s,l),l&&c&4&&Ld(i,s);break;case 13:nl(i,s,l),l&&c&4&&Hd(i,s);break;case 22:s.memoizedState===null&&nl(i,s,l),ba(s,s.return);break;case 30:break;default:nl(i,s,l)}t=t.sibling}}function Wu(e,t){var l=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(l=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==l&&(e!=null&&e.refCount++,l!=null&&ua(l))}function Iu(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&ua(e))}function kt(e,t,l,a){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)qd(e,t,l,a),t=t.sibling}function qd(e,t,l,a){var i=t.flags;switch(t.tag){case 0:case 11:case 15:kt(e,t,l,a),i&2048&&ga(9,t);break;case 1:kt(e,t,l,a);break;case 3:kt(e,t,l,a),i&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&ua(e)));break;case 12:if(i&2048){kt(e,t,l,a),e=t.stateNode;try{var s=t.memoizedProps,c=s.id,f=s.onPostCommit;typeof f=="function"&&f(c,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(p){be(t,t.return,p)}}else kt(e,t,l,a);break;case 31:kt(e,t,l,a);break;case 13:kt(e,t,l,a);break;case 23:break;case 22:s=t.stateNode,c=t.alternate,t.memoizedState!==null?s._visibility&2?kt(e,t,l,a):Sa(e,t):s._visibility&2?kt(e,t,l,a):(s._visibility|=2,zn(e,t,l,a,(t.subtreeFlags&10256)!==0||!1)),i&2048&&Wu(c,t);break;case 24:kt(e,t,l,a),i&2048&&Iu(t.alternate,t);break;default:kt(e,t,l,a)}}function zn(e,t,l,a,i){for(i=i&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var s=e,c=t,f=l,p=a,N=c.flags;switch(c.tag){case 0:case 11:case 15:zn(s,c,f,p,i),ga(8,c);break;case 23:break;case 22:var z=c.stateNode;c.memoizedState!==null?z._visibility&2?zn(s,c,f,p,i):Sa(s,c):(z._visibility|=2,zn(s,c,f,p,i)),i&&N&2048&&Wu(c.alternate,c);break;case 24:zn(s,c,f,p,i),i&&N&2048&&Iu(c.alternate,c);break;default:zn(s,c,f,p,i)}t=t.sibling}}function Sa(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var l=e,a=t,i=a.flags;switch(a.tag){case 22:Sa(l,a),i&2048&&Wu(a.alternate,a);break;case 24:Sa(l,a),i&2048&&Iu(a.alternate,a);break;default:Sa(l,a)}t=t.sibling}}var Ca=8192;function On(e,t,l){if(e.subtreeFlags&Ca)for(e=e.child;e!==null;)wd(e,t,l),e=e.sibling}function wd(e,t,l){switch(e.tag){case 26:On(e,t,l),e.flags&Ca&&e.memoizedState!==null&&tx(l,Ht,e.memoizedState,e.memoizedProps);break;case 5:On(e,t,l);break;case 3:case 4:var a=Ht;Ht=$i(e.stateNode.containerInfo),On(e,t,l),Ht=a;break;case 22:e.memoizedState===null&&(a=e.alternate,a!==null&&a.memoizedState!==null?(a=Ca,Ca=16777216,On(e,t,l),Ca=a):On(e,t,l));break;default:On(e,t,l)}}function Gd(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Ea(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var l=0;l<t.length;l++){var a=t[l];Ke=a,Yd(a,e)}Gd(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Xd(e),e=e.sibling}function Xd(e){switch(e.tag){case 0:case 11:case 15:Ea(e),e.flags&2048&&Sl(9,e,e.return);break;case 3:Ea(e);break;case 12:Ea(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Hi(e)):Ea(e);break;default:Ea(e)}}function Hi(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var l=0;l<t.length;l++){var a=t[l];Ke=a,Yd(a,e)}Gd(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Sl(8,t,t.return),Hi(t);break;case 22:l=t.stateNode,l._visibility&2&&(l._visibility&=-3,Hi(t));break;default:Hi(t)}e=e.sibling}}function Yd(e,t){for(;Ke!==null;){var l=Ke;switch(l.tag){case 0:case 11:case 15:Sl(8,l,t);break;case 23:case 22:if(l.memoizedState!==null&&l.memoizedState.cachePool!==null){var a=l.memoizedState.cachePool.pool;a!=null&&a.refCount++}break;case 24:ua(l.memoizedState.cache)}if(a=l.child,a!==null)a.return=l,Ke=a;else e:for(l=e;Ke!==null;){a=Ke;var i=a.sibling,s=a.return;if(Ud(a),a===l){Ke=null;break e}if(i!==null){i.return=s,Ke=i;break e}Ke=s}}}var xp={getCacheForType:function(e){var t=We(Ge),l=t.data.get(e);return l===void 0&&(l=e(),t.data.set(e,l)),l},cacheSignal:function(){return We(Ge).controller.signal}},vp=typeof WeakMap=="function"?WeakMap:Map,ve=0,Ne=null,ue=null,oe=0,ge=0,yt=null,Cl=!1,Un=!1,Pu=!1,al=0,He=0,El=0,tn=0,ec=0,jt=0,_n=0,Na=null,ct=null,tc=!1,ki=0,Qd=0,Bi=1/0,qi=null,Nl=null,Ze=0,Tl=null,Ln=null,il=0,lc=0,nc=null,Vd=null,Ta=0,ac=null;function gt(){return(ve&2)!==0&&oe!==0?oe&-oe:O.T!==null?oc():sr()}function Zd(){if(jt===0)if((oe&536870912)===0||fe){var e=Ja;Ja<<=1,(Ja&3932160)===0&&(Ja=262144),jt=e}else jt=536870912;return e=xt.current,e!==null&&(e.flags|=32),jt}function rt(e,t,l){(e===Ne&&(ge===2||ge===9)||e.cancelPendingCommit!==null)&&(Hn(e,0),Rl(e,oe,jt,!1)),Jn(e,l),((ve&2)===0||e!==Ne)&&(e===Ne&&((ve&2)===0&&(tn|=l),He===4&&Rl(e,oe,jt,!1)),Gt(e))}function Jd(e,t,l){if((ve&6)!==0)throw Error(o(327));var a=!l&&(t&127)===0&&(t&e.expiredLanes)===0||Zn(e,t),i=a?gp(e,t):sc(e,t,!0),s=a;do{if(i===0){Un&&!a&&Rl(e,t,0,!1);break}else{if(l=e.current.alternate,s&&!yp(l)){i=sc(e,t,!1),s=!1;continue}if(i===2){if(s=t,e.errorRecoveryDisabledLanes&s)var c=0;else c=e.pendingLanes&-536870913,c=c!==0?c:c&536870912?536870912:0;if(c!==0){t=c;e:{var f=e;i=Na;var p=f.current.memoizedState.isDehydrated;if(p&&(Hn(f,c).flags|=256),c=sc(f,c,!1),c!==2){if(Pu&&!p){f.errorRecoveryDisabledLanes|=s,tn|=s,i=4;break e}s=ct,ct=i,s!==null&&(ct===null?ct=s:ct.push.apply(ct,s))}i=c}if(s=!1,i!==2)continue}}if(i===1){Hn(e,0),Rl(e,t,0,!0);break}e:{switch(a=e,s=i,s){case 0:case 1:throw Error(o(345));case 4:if((t&4194048)!==t)break;case 6:Rl(a,t,jt,!Cl);break e;case 2:ct=null;break;case 3:case 5:break;default:throw Error(o(329))}if((t&62914560)===t&&(i=ki+300-dt(),10<i)){if(Rl(a,t,jt,!Cl),$a(a,0,!0)!==0)break e;il=t,a.timeoutHandle=Nf(Kd.bind(null,a,l,ct,qi,tc,t,jt,tn,_n,Cl,s,"Throttled",-0,0),i);break e}Kd(a,l,ct,qi,tc,t,jt,tn,_n,Cl,s,null,-0,0)}}break}while(!0);Gt(e)}function Kd(e,t,l,a,i,s,c,f,p,N,z,_,T,M){if(e.timeoutHandle=-1,_=t.subtreeFlags,_&8192||(_&16785408)===16785408){_={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Qt},wd(t,s,_);var Z=(s&62914560)===s?ki-dt():(s&4194048)===s?Qd-dt():0;if(Z=lx(_,Z),Z!==null){il=s,e.cancelPendingCommit=Z(lf.bind(null,e,t,s,l,a,i,c,f,p,z,_,null,T,M)),Rl(e,s,c,!N);return}}lf(e,t,s,l,a,i,c,f,p)}function yp(e){for(var t=e;;){var l=t.tag;if((l===0||l===11||l===15)&&t.flags&16384&&(l=t.updateQueue,l!==null&&(l=l.stores,l!==null)))for(var a=0;a<l.length;a++){var i=l[a],s=i.getSnapshot;i=i.value;try{if(!mt(s(),i))return!1}catch{return!1}}if(l=t.child,t.subtreeFlags&16384&&l!==null)l.return=t,t=l;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Rl(e,t,l,a){t&=~ec,t&=~tn,e.suspendedLanes|=t,e.pingedLanes&=~t,a&&(e.warmLanes|=t),a=e.expirationTimes;for(var i=t;0<i;){var s=31-ht(i),c=1<<s;a[s]=-1,i&=~c}l!==0&&nr(e,l,t)}function wi(){return(ve&6)===0?(Ra(0),!1):!0}function ic(){if(ue!==null){if(ge===0)var e=ue.return;else e=ue,Kt=Zl=null,bu(e),Tn=null,ra=0,e=ue;for(;e!==null;)Nd(e.alternate,e),e=e.return;ue=null}}function Hn(e,t){var l=e.timeoutHandle;l!==-1&&(e.timeoutHandle=-1,Bp(l)),l=e.cancelPendingCommit,l!==null&&(e.cancelPendingCommit=null,l()),il=0,ic(),Ne=e,ue=l=Zt(e.current,null),oe=t,ge=0,yt=null,Cl=!1,Un=Zn(e,t),Pu=!1,_n=jt=ec=tn=El=He=0,ct=Na=null,tc=!1,(t&8)!==0&&(t|=t&32);var a=e.entangledLanes;if(a!==0)for(e=e.entanglements,a&=t;0<a;){var i=31-ht(a),s=1<<i;t|=e[i],a&=~s}return al=t,ui(),l}function $d(e,t){ne=null,O.H=va,t===Nn||t===pi?(t=oo(),ge=3):t===ru?(t=oo(),ge=4):ge=t===ku?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,yt=t,ue===null&&(He=1,Mi(e,Nt(t,e.current)))}function Fd(){var e=xt.current;return e===null?!0:(oe&4194048)===oe?Mt===null:(oe&62914560)===oe||(oe&536870912)!==0?e===Mt:!1}function Wd(){var e=O.H;return O.H=va,e===null?va:e}function Id(){var e=O.A;return O.A=xp,e}function Gi(){He=4,Cl||(oe&4194048)!==oe&&xt.current!==null||(Un=!0),(El&134217727)===0&&(tn&134217727)===0||Ne===null||Rl(Ne,oe,jt,!1)}function sc(e,t,l){var a=ve;ve|=2;var i=Wd(),s=Id();(Ne!==e||oe!==t)&&(qi=null,Hn(e,t)),t=!1;var c=He;e:do try{if(ge!==0&&ue!==null){var f=ue,p=yt;switch(ge){case 8:ic(),c=6;break e;case 3:case 2:case 9:case 6:xt.current===null&&(t=!0);var N=ge;if(ge=0,yt=null,kn(e,f,p,N),l&&Un){c=0;break e}break;default:N=ge,ge=0,yt=null,kn(e,f,p,N)}}jp(),c=He;break}catch(z){$d(e,z)}while(!0);return t&&e.shellSuspendCounter++,Kt=Zl=null,ve=a,O.H=i,O.A=s,ue===null&&(Ne=null,oe=0,ui()),c}function jp(){for(;ue!==null;)Pd(ue)}function gp(e,t){var l=ve;ve|=2;var a=Wd(),i=Id();Ne!==e||oe!==t?(qi=null,Bi=dt()+500,Hn(e,t)):Un=Zn(e,t);e:do try{if(ge!==0&&ue!==null){t=ue;var s=yt;t:switch(ge){case 1:ge=0,yt=null,kn(e,t,s,1);break;case 2:case 9:if(co(s)){ge=0,yt=null,ef(t);break}t=function(){ge!==2&&ge!==9||Ne!==e||(ge=7),Gt(e)},s.then(t,t);break e;case 3:ge=7;break e;case 4:ge=5;break e;case 7:co(s)?(ge=0,yt=null,ef(t)):(ge=0,yt=null,kn(e,t,s,7));break;case 5:var c=null;switch(ue.tag){case 26:c=ue.memoizedState;case 5:case 27:var f=ue;if(c?wf(c):f.stateNode.complete){ge=0,yt=null;var p=f.sibling;if(p!==null)ue=p;else{var N=f.return;N!==null?(ue=N,Xi(N)):ue=null}break t}}ge=0,yt=null,kn(e,t,s,5);break;case 6:ge=0,yt=null,kn(e,t,s,6);break;case 8:ic(),He=6;break e;default:throw Error(o(462))}}bp();break}catch(z){$d(e,z)}while(!0);return Kt=Zl=null,O.H=a,O.A=i,ve=l,ue!==null?0:(Ne=null,oe=0,ui(),He)}function bp(){for(;ue!==null&&!Qh();)Pd(ue)}function Pd(e){var t=Cd(e.alternate,e,al);e.memoizedProps=e.pendingProps,t===null?Xi(e):ue=t}function ef(e){var t=e,l=t.alternate;switch(t.tag){case 15:case 0:t=vd(l,t,t.pendingProps,t.type,void 0,oe);break;case 11:t=vd(l,t,t.pendingProps,t.type.render,t.ref,oe);break;case 5:bu(t);default:Nd(l,t),t=ue=Wr(t,al),t=Cd(l,t,al)}e.memoizedProps=e.pendingProps,t===null?Xi(e):ue=t}function kn(e,t,l,a){Kt=Zl=null,bu(t),Tn=null,ra=0;var i=t.return;try{if(rp(e,i,t,l,oe)){He=1,Mi(e,Nt(l,e.current)),ue=null;return}}catch(s){if(i!==null)throw ue=i,s;He=1,Mi(e,Nt(l,e.current)),ue=null;return}t.flags&32768?(fe||a===1?e=!0:Un||(oe&536870912)!==0?e=!1:(Cl=e=!0,(a===2||a===9||a===3||a===6)&&(a=xt.current,a!==null&&a.tag===13&&(a.flags|=16384))),tf(t,e)):Xi(t)}function Xi(e){var t=e;do{if((t.flags&32768)!==0){tf(t,Cl);return}e=t.return;var l=fp(t.alternate,t,al);if(l!==null){ue=l;return}if(t=t.sibling,t!==null){ue=t;return}ue=t=e}while(t!==null);He===0&&(He=5)}function tf(e,t){do{var l=hp(e.alternate,e);if(l!==null){l.flags&=32767,ue=l;return}if(l=e.return,l!==null&&(l.flags|=32768,l.subtreeFlags=0,l.deletions=null),!t&&(e=e.sibling,e!==null)){ue=e;return}ue=e=l}while(e!==null);He=6,ue=null}function lf(e,t,l,a,i,s,c,f,p){e.cancelPendingCommit=null;do Yi();while(Ze!==0);if((ve&6)!==0)throw Error(o(327));if(t!==null){if(t===e.current)throw Error(o(177));if(s=t.lanes|t.childLanes,s|=Ks,em(e,l,s,c,f,p),e===Ne&&(ue=Ne=null,oe=0),Ln=t,Tl=e,il=l,lc=s,nc=i,Vd=a,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,Np(Va,function(){return cf(),null})):(e.callbackNode=null,e.callbackPriority=0),a=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||a){a=O.T,O.T=null,i=L.p,L.p=2,c=ve,ve|=4;try{mp(e,t,l)}finally{ve=c,L.p=i,O.T=a}}Ze=1,nf(),af(),sf()}}function nf(){if(Ze===1){Ze=0;var e=Tl,t=Ln,l=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||l){l=O.T,O.T=null;var a=L.p;L.p=2;var i=ve;ve|=4;try{kd(t,e);var s=yc,c=Xr(e.containerInfo),f=s.focusedElem,p=s.selectionRange;if(c!==f&&f&&f.ownerDocument&&Gr(f.ownerDocument.documentElement,f)){if(p!==null&&Ys(f)){var N=p.start,z=p.end;if(z===void 0&&(z=N),"selectionStart"in f)f.selectionStart=N,f.selectionEnd=Math.min(z,f.value.length);else{var _=f.ownerDocument||document,T=_&&_.defaultView||window;if(T.getSelection){var M=T.getSelection(),Z=f.textContent.length,ee=Math.min(p.start,Z),Ee=p.end===void 0?ee:Math.min(p.end,Z);!M.extend&&ee>Ee&&(c=Ee,Ee=ee,ee=c);var S=wr(f,ee),j=wr(f,Ee);if(S&&j&&(M.rangeCount!==1||M.anchorNode!==S.node||M.anchorOffset!==S.offset||M.focusNode!==j.node||M.focusOffset!==j.offset)){var E=_.createRange();E.setStart(S.node,S.offset),M.removeAllRanges(),ee>Ee?(M.addRange(E),M.extend(j.node,j.offset)):(E.setEnd(j.node,j.offset),M.addRange(E))}}}}for(_=[],M=f;M=M.parentNode;)M.nodeType===1&&_.push({element:M,left:M.scrollLeft,top:M.scrollTop});for(typeof f.focus=="function"&&f.focus(),f=0;f<_.length;f++){var U=_[f];U.element.scrollLeft=U.left,U.element.scrollTop=U.top}}ts=!!vc,yc=vc=null}finally{ve=i,L.p=a,O.T=l}}e.current=t,Ze=2}}function af(){if(Ze===2){Ze=0;var e=Tl,t=Ln,l=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||l){l=O.T,O.T=null;var a=L.p;L.p=2;var i=ve;ve|=4;try{Od(e,t.alternate,t)}finally{ve=i,L.p=a,O.T=l}}Ze=3}}function sf(){if(Ze===4||Ze===3){Ze=0,Vh();var e=Tl,t=Ln,l=il,a=Vd;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?Ze=5:(Ze=0,Ln=Tl=null,uf(e,e.pendingLanes));var i=e.pendingLanes;if(i===0&&(Nl=null),Es(l),t=t.stateNode,ft&&typeof ft.onCommitFiberRoot=="function")try{ft.onCommitFiberRoot(Vn,t,void 0,(t.current.flags&128)===128)}catch{}if(a!==null){t=O.T,i=L.p,L.p=2,O.T=null;try{for(var s=e.onRecoverableError,c=0;c<a.length;c++){var f=a[c];s(f.value,{componentStack:f.stack})}}finally{O.T=t,L.p=i}}(il&3)!==0&&Yi(),Gt(e),i=e.pendingLanes,(l&261930)!==0&&(i&42)!==0?e===ac?Ta++:(Ta=0,ac=e):Ta=0,Ra(0)}}function uf(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,ua(t)))}function Yi(){return nf(),af(),sf(),cf()}function cf(){if(Ze!==5)return!1;var e=Tl,t=lc;lc=0;var l=Es(il),a=O.T,i=L.p;try{L.p=32>l?32:l,O.T=null,l=nc,nc=null;var s=Tl,c=il;if(Ze=0,Ln=Tl=null,il=0,(ve&6)!==0)throw Error(o(331));var f=ve;if(ve|=4,Xd(s.current),qd(s,s.current,c,l),ve=f,Ra(0,!1),ft&&typeof ft.onPostCommitFiberRoot=="function")try{ft.onPostCommitFiberRoot(Vn,s)}catch{}return!0}finally{L.p=i,O.T=a,uf(e,t)}}function rf(e,t,l){t=Nt(l,t),t=Hu(e.stateNode,t,2),e=jl(e,t,2),e!==null&&(Jn(e,2),Gt(e))}function be(e,t,l){if(e.tag===3)rf(e,e,l);else for(;t!==null;){if(t.tag===3){rf(t,e,l);break}else if(t.tag===1){var a=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(Nl===null||!Nl.has(a))){e=Nt(l,e),l=rd(2),a=jl(t,l,2),a!==null&&(od(l,a,t,e),Jn(a,2),Gt(a));break}}t=t.return}}function uc(e,t,l){var a=e.pingCache;if(a===null){a=e.pingCache=new vp;var i=new Set;a.set(t,i)}else i=a.get(t),i===void 0&&(i=new Set,a.set(t,i));i.has(l)||(Pu=!0,i.add(l),e=Sp.bind(null,e,t,l),t.then(e,e))}function Sp(e,t,l){var a=e.pingCache;a!==null&&a.delete(t),e.pingedLanes|=e.suspendedLanes&l,e.warmLanes&=~l,Ne===e&&(oe&l)===l&&(He===4||He===3&&(oe&62914560)===oe&&300>dt()-ki?(ve&2)===0&&Hn(e,0):ec|=l,_n===oe&&(_n=0)),Gt(e)}function of(e,t){t===0&&(t=lr()),e=Yl(e,t),e!==null&&(Jn(e,t),Gt(e))}function Cp(e){var t=e.memoizedState,l=0;t!==null&&(l=t.retryLane),of(e,l)}function Ep(e,t){var l=0;switch(e.tag){case 31:case 13:var a=e.stateNode,i=e.memoizedState;i!==null&&(l=i.retryLane);break;case 19:a=e.stateNode;break;case 22:a=e.stateNode._retryCache;break;default:throw Error(o(314))}a!==null&&a.delete(t),of(e,l)}function Np(e,t){return gs(e,t)}var Qi=null,Bn=null,cc=!1,Vi=!1,rc=!1,Al=0;function Gt(e){e!==Bn&&e.next===null&&(Bn===null?Qi=Bn=e:Bn=Bn.next=e),Vi=!0,cc||(cc=!0,Rp())}function Ra(e,t){if(!rc&&Vi){rc=!0;do for(var l=!1,a=Qi;a!==null;){if(e!==0){var i=a.pendingLanes;if(i===0)var s=0;else{var c=a.suspendedLanes,f=a.pingedLanes;s=(1<<31-ht(42|e)+1)-1,s&=i&~(c&~f),s=s&201326741?s&201326741|1:s?s|2:0}s!==0&&(l=!0,mf(a,s))}else s=oe,s=$a(a,a===Ne?s:0,a.cancelPendingCommit!==null||a.timeoutHandle!==-1),(s&3)===0||Zn(a,s)||(l=!0,mf(a,s));a=a.next}while(l);rc=!1}}function Tp(){df()}function df(){Vi=cc=!1;var e=0;Al!==0&&kp()&&(e=Al);for(var t=dt(),l=null,a=Qi;a!==null;){var i=a.next,s=ff(a,t);s===0?(a.next=null,l===null?Qi=i:l.next=i,i===null&&(Bn=l)):(l=a,(e!==0||(s&3)!==0)&&(Vi=!0)),a=i}Ze!==0&&Ze!==5||Ra(e),Al!==0&&(Al=0)}function ff(e,t){for(var l=e.suspendedLanes,a=e.pingedLanes,i=e.expirationTimes,s=e.pendingLanes&-62914561;0<s;){var c=31-ht(s),f=1<<c,p=i[c];p===-1?((f&l)===0||(f&a)!==0)&&(i[c]=Ph(f,t)):p<=t&&(e.expiredLanes|=f),s&=~f}if(t=Ne,l=oe,l=$a(e,e===t?l:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),a=e.callbackNode,l===0||e===t&&(ge===2||ge===9)||e.cancelPendingCommit!==null)return a!==null&&a!==null&&bs(a),e.callbackNode=null,e.callbackPriority=0;if((l&3)===0||Zn(e,l)){if(t=l&-l,t===e.callbackPriority)return t;switch(a!==null&&bs(a),Es(l)){case 2:case 8:l=er;break;case 32:l=Va;break;case 268435456:l=tr;break;default:l=Va}return a=hf.bind(null,e),l=gs(l,a),e.callbackPriority=t,e.callbackNode=l,t}return a!==null&&a!==null&&bs(a),e.callbackPriority=2,e.callbackNode=null,2}function hf(e,t){if(Ze!==0&&Ze!==5)return e.callbackNode=null,e.callbackPriority=0,null;var l=e.callbackNode;if(Yi()&&e.callbackNode!==l)return null;var a=oe;return a=$a(e,e===Ne?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),a===0?null:(Jd(e,a,t),ff(e,dt()),e.callbackNode!=null&&e.callbackNode===l?hf.bind(null,e):null)}function mf(e,t){if(Yi())return null;Jd(e,t,!0)}function Rp(){qp(function(){(ve&6)!==0?gs(Pc,Tp):df()})}function oc(){if(Al===0){var e=Cn;e===0&&(e=Za,Za<<=1,(Za&261888)===0&&(Za=256)),Al=e}return Al}function pf(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Pa(""+e)}function xf(e,t){var l=t.ownerDocument.createElement("input");return l.name=t.name,l.value=t.value,e.id&&l.setAttribute("form",e.id),t.parentNode.insertBefore(l,t),e=new FormData(e),l.parentNode.removeChild(l),e}function Ap(e,t,l,a,i){if(t==="submit"&&l&&l.stateNode===i){var s=pf((i[nt]||null).action),c=a.submitter;c&&(t=(t=c[nt]||null)?pf(t.formAction):c.getAttribute("formAction"),t!==null&&(s=t,c=null));var f=new ni("action","action",null,a,i);e.push({event:f,listeners:[{instance:null,listener:function(){if(a.defaultPrevented){if(Al!==0){var p=c?xf(i,c):new FormData(i);Du(l,{pending:!0,data:p,method:i.method,action:s},null,p)}}else typeof s=="function"&&(f.preventDefault(),p=c?xf(i,c):new FormData(i),Du(l,{pending:!0,data:p,method:i.method,action:s},s,p))},currentTarget:i}]})}}for(var dc=0;dc<Js.length;dc++){var fc=Js[dc],Mp=fc.toLowerCase(),Dp=fc[0].toUpperCase()+fc.slice(1);Lt(Mp,"on"+Dp)}Lt(Vr,"onAnimationEnd"),Lt(Zr,"onAnimationIteration"),Lt(Jr,"onAnimationStart"),Lt("dblclick","onDoubleClick"),Lt("focusin","onFocus"),Lt("focusout","onBlur"),Lt(Zm,"onTransitionRun"),Lt(Jm,"onTransitionStart"),Lt(Km,"onTransitionCancel"),Lt(Kr,"onTransitionEnd"),rn("onMouseEnter",["mouseout","mouseover"]),rn("onMouseLeave",["mouseout","mouseover"]),rn("onPointerEnter",["pointerout","pointerover"]),rn("onPointerLeave",["pointerout","pointerover"]),ql("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),ql("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),ql("onBeforeInput",["compositionend","keypress","textInput","paste"]),ql("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),ql("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),ql("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Aa="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),zp=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Aa));function vf(e,t){t=(t&4)!==0;for(var l=0;l<e.length;l++){var a=e[l],i=a.event;a=a.listeners;e:{var s=void 0;if(t)for(var c=a.length-1;0<=c;c--){var f=a[c],p=f.instance,N=f.currentTarget;if(f=f.listener,p!==s&&i.isPropagationStopped())break e;s=f,i.currentTarget=N;try{s(i)}catch(z){si(z)}i.currentTarget=null,s=p}else for(c=0;c<a.length;c++){if(f=a[c],p=f.instance,N=f.currentTarget,f=f.listener,p!==s&&i.isPropagationStopped())break e;s=f,i.currentTarget=N;try{s(i)}catch(z){si(z)}i.currentTarget=null,s=p}}}}function ce(e,t){var l=t[Ns];l===void 0&&(l=t[Ns]=new Set);var a=e+"__bubble";l.has(a)||(yf(t,e,2,!1),l.add(a))}function hc(e,t,l){var a=0;t&&(a|=4),yf(l,e,a,t)}var Zi="_reactListening"+Math.random().toString(36).slice(2);function mc(e){if(!e[Zi]){e[Zi]=!0,rr.forEach(function(l){l!=="selectionchange"&&(zp.has(l)||hc(l,!1,e),hc(l,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Zi]||(t[Zi]=!0,hc("selectionchange",!1,t))}}function yf(e,t,l,a){switch(Jf(t)){case 2:var i=ix;break;case 8:i=sx;break;default:i=Mc}l=i.bind(null,t,l,e),i=void 0,!_s||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),a?i!==void 0?e.addEventListener(t,l,{capture:!0,passive:i}):e.addEventListener(t,l,!0):i!==void 0?e.addEventListener(t,l,{passive:i}):e.addEventListener(t,l,!1)}function pc(e,t,l,a,i){var s=a;if((t&1)===0&&(t&2)===0&&a!==null)e:for(;;){if(a===null)return;var c=a.tag;if(c===3||c===4){var f=a.stateNode.containerInfo;if(f===i)break;if(c===4)for(c=a.return;c!==null;){var p=c.tag;if((p===3||p===4)&&c.stateNode.containerInfo===i)return;c=c.return}for(;f!==null;){if(c=sn(f),c===null)return;if(p=c.tag,p===5||p===6||p===26||p===27){a=s=c;continue e}f=f.parentNode}}a=a.return}br(function(){var N=s,z=Os(l),_=[];e:{var T=$r.get(e);if(T!==void 0){var M=ni,Z=e;switch(e){case"keypress":if(ti(l)===0)break e;case"keydown":case"keyup":M=Em;break;case"focusin":Z="focus",M=Bs;break;case"focusout":Z="blur",M=Bs;break;case"beforeblur":case"afterblur":M=Bs;break;case"click":if(l.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":M=Er;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":M=fm;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":M=Rm;break;case Vr:case Zr:case Jr:M=pm;break;case Kr:M=Mm;break;case"scroll":case"scrollend":M=om;break;case"wheel":M=zm;break;case"copy":case"cut":case"paste":M=vm;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":M=Tr;break;case"toggle":case"beforetoggle":M=Um}var ee=(t&4)!==0,Ee=!ee&&(e==="scroll"||e==="scrollend"),S=ee?T!==null?T+"Capture":null:T;ee=[];for(var j=N,E;j!==null;){var U=j;if(E=U.stateNode,U=U.tag,U!==5&&U!==26&&U!==27||E===null||S===null||(U=Fn(j,S),U!=null&&ee.push(Ma(j,U,E))),Ee)break;j=j.return}0<ee.length&&(T=new M(T,Z,null,l,z),_.push({event:T,listeners:ee}))}}if((t&7)===0){e:{if(T=e==="mouseover"||e==="pointerover",M=e==="mouseout"||e==="pointerout",T&&l!==zs&&(Z=l.relatedTarget||l.fromElement)&&(sn(Z)||Z[an]))break e;if((M||T)&&(T=z.window===z?z:(T=z.ownerDocument)?T.defaultView||T.parentWindow:window,M?(Z=l.relatedTarget||l.toElement,M=N,Z=Z?sn(Z):null,Z!==null&&(Ee=h(Z),ee=Z.tag,Z!==Ee||ee!==5&&ee!==27&&ee!==6)&&(Z=null)):(M=null,Z=N),M!==Z)){if(ee=Er,U="onMouseLeave",S="onMouseEnter",j="mouse",(e==="pointerout"||e==="pointerover")&&(ee=Tr,U="onPointerLeave",S="onPointerEnter",j="pointer"),Ee=M==null?T:$n(M),E=Z==null?T:$n(Z),T=new ee(U,j+"leave",M,l,z),T.target=Ee,T.relatedTarget=E,U=null,sn(z)===N&&(ee=new ee(S,j+"enter",Z,l,z),ee.target=E,ee.relatedTarget=Ee,U=ee),Ee=U,M&&Z)t:{for(ee=Op,S=M,j=Z,E=0,U=S;U;U=ee(U))E++;U=0;for(var P=j;P;P=ee(P))U++;for(;0<E-U;)S=ee(S),E--;for(;0<U-E;)j=ee(j),U--;for(;E--;){if(S===j||j!==null&&S===j.alternate){ee=S;break t}S=ee(S),j=ee(j)}ee=null}else ee=null;M!==null&&jf(_,T,M,ee,!1),Z!==null&&Ee!==null&&jf(_,Ee,Z,ee,!0)}}e:{if(T=N?$n(N):window,M=T.nodeName&&T.nodeName.toLowerCase(),M==="select"||M==="input"&&T.type==="file")var pe=_r;else if(Or(T))if(Lr)pe=Ym;else{pe=Gm;var $=wm}else M=T.nodeName,!M||M.toLowerCase()!=="input"||T.type!=="checkbox"&&T.type!=="radio"?N&&Ds(N.elementType)&&(pe=_r):pe=Xm;if(pe&&(pe=pe(e,N))){Ur(_,pe,l,z);break e}$&&$(e,T,N),e==="focusout"&&N&&T.type==="number"&&N.memoizedProps.value!=null&&Ms(T,"number",T.value)}switch($=N?$n(N):window,e){case"focusin":(Or($)||$.contentEditable==="true")&&(pn=$,Qs=N,aa=null);break;case"focusout":aa=Qs=pn=null;break;case"mousedown":Vs=!0;break;case"contextmenu":case"mouseup":case"dragend":Vs=!1,Yr(_,l,z);break;case"selectionchange":if(Vm)break;case"keydown":case"keyup":Yr(_,l,z)}var ae;if(ws)e:{switch(e){case"compositionstart":var de="onCompositionStart";break e;case"compositionend":de="onCompositionEnd";break e;case"compositionupdate":de="onCompositionUpdate";break e}de=void 0}else mn?Dr(e,l)&&(de="onCompositionEnd"):e==="keydown"&&l.keyCode===229&&(de="onCompositionStart");de&&(Rr&&l.locale!=="ko"&&(mn||de!=="onCompositionStart"?de==="onCompositionEnd"&&mn&&(ae=Sr()):(fl=z,Ls="value"in fl?fl.value:fl.textContent,mn=!0)),$=Ji(N,de),0<$.length&&(de=new Nr(de,e,null,l,z),_.push({event:de,listeners:$}),ae?de.data=ae:(ae=zr(l),ae!==null&&(de.data=ae)))),(ae=Lm?Hm(e,l):km(e,l))&&(de=Ji(N,"onBeforeInput"),0<de.length&&($=new Nr("onBeforeInput","beforeinput",null,l,z),_.push({event:$,listeners:de}),$.data=ae)),Ap(_,e,N,l,z)}vf(_,t)})}function Ma(e,t,l){return{instance:e,listener:t,currentTarget:l}}function Ji(e,t){for(var l=t+"Capture",a=[];e!==null;){var i=e,s=i.stateNode;if(i=i.tag,i!==5&&i!==26&&i!==27||s===null||(i=Fn(e,l),i!=null&&a.unshift(Ma(e,i,s)),i=Fn(e,t),i!=null&&a.push(Ma(e,i,s))),e.tag===3)return a;e=e.return}return[]}function Op(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function jf(e,t,l,a,i){for(var s=t._reactName,c=[];l!==null&&l!==a;){var f=l,p=f.alternate,N=f.stateNode;if(f=f.tag,p!==null&&p===a)break;f!==5&&f!==26&&f!==27||N===null||(p=N,i?(N=Fn(l,s),N!=null&&c.unshift(Ma(l,N,p))):i||(N=Fn(l,s),N!=null&&c.push(Ma(l,N,p)))),l=l.return}c.length!==0&&e.push({event:t,listeners:c})}var Up=/\r\n?/g,_p=/\u0000|\uFFFD/g;function gf(e){return(typeof e=="string"?e:""+e).replace(Up,`
`).replace(_p,"")}function bf(e,t){return t=gf(t),gf(e)===t}function Ce(e,t,l,a,i,s){switch(l){case"children":typeof a=="string"?t==="body"||t==="textarea"&&a===""||dn(e,a):(typeof a=="number"||typeof a=="bigint")&&t!=="body"&&dn(e,""+a);break;case"className":Wa(e,"class",a);break;case"tabIndex":Wa(e,"tabindex",a);break;case"dir":case"role":case"viewBox":case"width":case"height":Wa(e,l,a);break;case"style":jr(e,a,s);break;case"data":if(t!=="object"){Wa(e,"data",a);break}case"src":case"href":if(a===""&&(t!=="a"||l!=="href")){e.removeAttribute(l);break}if(a==null||typeof a=="function"||typeof a=="symbol"||typeof a=="boolean"){e.removeAttribute(l);break}a=Pa(""+a),e.setAttribute(l,a);break;case"action":case"formAction":if(typeof a=="function"){e.setAttribute(l,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof s=="function"&&(l==="formAction"?(t!=="input"&&Ce(e,t,"name",i.name,i,null),Ce(e,t,"formEncType",i.formEncType,i,null),Ce(e,t,"formMethod",i.formMethod,i,null),Ce(e,t,"formTarget",i.formTarget,i,null)):(Ce(e,t,"encType",i.encType,i,null),Ce(e,t,"method",i.method,i,null),Ce(e,t,"target",i.target,i,null)));if(a==null||typeof a=="symbol"||typeof a=="boolean"){e.removeAttribute(l);break}a=Pa(""+a),e.setAttribute(l,a);break;case"onClick":a!=null&&(e.onclick=Qt);break;case"onScroll":a!=null&&ce("scroll",e);break;case"onScrollEnd":a!=null&&ce("scrollend",e);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(o(61));if(l=a.__html,l!=null){if(i.children!=null)throw Error(o(60));e.innerHTML=l}}break;case"multiple":e.multiple=a&&typeof a!="function"&&typeof a!="symbol";break;case"muted":e.muted=a&&typeof a!="function"&&typeof a!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(a==null||typeof a=="function"||typeof a=="boolean"||typeof a=="symbol"){e.removeAttribute("xlink:href");break}l=Pa(""+a),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",l);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":a!=null&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(l,""+a):e.removeAttribute(l);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":a&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(l,""):e.removeAttribute(l);break;case"capture":case"download":a===!0?e.setAttribute(l,""):a!==!1&&a!=null&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(l,a):e.removeAttribute(l);break;case"cols":case"rows":case"size":case"span":a!=null&&typeof a!="function"&&typeof a!="symbol"&&!isNaN(a)&&1<=a?e.setAttribute(l,a):e.removeAttribute(l);break;case"rowSpan":case"start":a==null||typeof a=="function"||typeof a=="symbol"||isNaN(a)?e.removeAttribute(l):e.setAttribute(l,a);break;case"popover":ce("beforetoggle",e),ce("toggle",e),Fa(e,"popover",a);break;case"xlinkActuate":Yt(e,"http://www.w3.org/1999/xlink","xlink:actuate",a);break;case"xlinkArcrole":Yt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",a);break;case"xlinkRole":Yt(e,"http://www.w3.org/1999/xlink","xlink:role",a);break;case"xlinkShow":Yt(e,"http://www.w3.org/1999/xlink","xlink:show",a);break;case"xlinkTitle":Yt(e,"http://www.w3.org/1999/xlink","xlink:title",a);break;case"xlinkType":Yt(e,"http://www.w3.org/1999/xlink","xlink:type",a);break;case"xmlBase":Yt(e,"http://www.w3.org/XML/1998/namespace","xml:base",a);break;case"xmlLang":Yt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",a);break;case"xmlSpace":Yt(e,"http://www.w3.org/XML/1998/namespace","xml:space",a);break;case"is":Fa(e,"is",a);break;case"innerText":case"textContent":break;default:(!(2<l.length)||l[0]!=="o"&&l[0]!=="O"||l[1]!=="n"&&l[1]!=="N")&&(l=cm.get(l)||l,Fa(e,l,a))}}function xc(e,t,l,a,i,s){switch(l){case"style":jr(e,a,s);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(o(61));if(l=a.__html,l!=null){if(i.children!=null)throw Error(o(60));e.innerHTML=l}}break;case"children":typeof a=="string"?dn(e,a):(typeof a=="number"||typeof a=="bigint")&&dn(e,""+a);break;case"onScroll":a!=null&&ce("scroll",e);break;case"onScrollEnd":a!=null&&ce("scrollend",e);break;case"onClick":a!=null&&(e.onclick=Qt);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!or.hasOwnProperty(l))e:{if(l[0]==="o"&&l[1]==="n"&&(i=l.endsWith("Capture"),t=l.slice(2,i?l.length-7:void 0),s=e[nt]||null,s=s!=null?s[l]:null,typeof s=="function"&&e.removeEventListener(t,s,i),typeof a=="function")){typeof s!="function"&&s!==null&&(l in e?e[l]=null:e.hasAttribute(l)&&e.removeAttribute(l)),e.addEventListener(t,a,i);break e}l in e?e[l]=a:a===!0?e.setAttribute(l,""):Fa(e,l,a)}}}function Pe(e,t,l){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ce("error",e),ce("load",e);var a=!1,i=!1,s;for(s in l)if(l.hasOwnProperty(s)){var c=l[s];if(c!=null)switch(s){case"src":a=!0;break;case"srcSet":i=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(o(137,t));default:Ce(e,t,s,c,l,null)}}i&&Ce(e,t,"srcSet",l.srcSet,l,null),a&&Ce(e,t,"src",l.src,l,null);return;case"input":ce("invalid",e);var f=s=c=i=null,p=null,N=null;for(a in l)if(l.hasOwnProperty(a)){var z=l[a];if(z!=null)switch(a){case"name":i=z;break;case"type":c=z;break;case"checked":p=z;break;case"defaultChecked":N=z;break;case"value":s=z;break;case"defaultValue":f=z;break;case"children":case"dangerouslySetInnerHTML":if(z!=null)throw Error(o(137,t));break;default:Ce(e,t,a,z,l,null)}}pr(e,s,f,p,N,c,i,!1);return;case"select":ce("invalid",e),a=c=s=null;for(i in l)if(l.hasOwnProperty(i)&&(f=l[i],f!=null))switch(i){case"value":s=f;break;case"defaultValue":c=f;break;case"multiple":a=f;default:Ce(e,t,i,f,l,null)}t=s,l=c,e.multiple=!!a,t!=null?on(e,!!a,t,!1):l!=null&&on(e,!!a,l,!0);return;case"textarea":ce("invalid",e),s=i=a=null;for(c in l)if(l.hasOwnProperty(c)&&(f=l[c],f!=null))switch(c){case"value":a=f;break;case"defaultValue":i=f;break;case"children":s=f;break;case"dangerouslySetInnerHTML":if(f!=null)throw Error(o(91));break;default:Ce(e,t,c,f,l,null)}vr(e,a,i,s);return;case"option":for(p in l)l.hasOwnProperty(p)&&(a=l[p],a!=null)&&(p==="selected"?e.selected=a&&typeof a!="function"&&typeof a!="symbol":Ce(e,t,p,a,l,null));return;case"dialog":ce("beforetoggle",e),ce("toggle",e),ce("cancel",e),ce("close",e);break;case"iframe":case"object":ce("load",e);break;case"video":case"audio":for(a=0;a<Aa.length;a++)ce(Aa[a],e);break;case"image":ce("error",e),ce("load",e);break;case"details":ce("toggle",e);break;case"embed":case"source":case"link":ce("error",e),ce("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(N in l)if(l.hasOwnProperty(N)&&(a=l[N],a!=null))switch(N){case"children":case"dangerouslySetInnerHTML":throw Error(o(137,t));default:Ce(e,t,N,a,l,null)}return;default:if(Ds(t)){for(z in l)l.hasOwnProperty(z)&&(a=l[z],a!==void 0&&xc(e,t,z,a,l,void 0));return}}for(f in l)l.hasOwnProperty(f)&&(a=l[f],a!=null&&Ce(e,t,f,a,l,null))}function Lp(e,t,l,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var i=null,s=null,c=null,f=null,p=null,N=null,z=null;for(M in l){var _=l[M];if(l.hasOwnProperty(M)&&_!=null)switch(M){case"checked":break;case"value":break;case"defaultValue":p=_;default:a.hasOwnProperty(M)||Ce(e,t,M,null,a,_)}}for(var T in a){var M=a[T];if(_=l[T],a.hasOwnProperty(T)&&(M!=null||_!=null))switch(T){case"type":s=M;break;case"name":i=M;break;case"checked":N=M;break;case"defaultChecked":z=M;break;case"value":c=M;break;case"defaultValue":f=M;break;case"children":case"dangerouslySetInnerHTML":if(M!=null)throw Error(o(137,t));break;default:M!==_&&Ce(e,t,T,M,a,_)}}As(e,c,f,p,N,z,s,i);return;case"select":M=c=f=T=null;for(s in l)if(p=l[s],l.hasOwnProperty(s)&&p!=null)switch(s){case"value":break;case"multiple":M=p;default:a.hasOwnProperty(s)||Ce(e,t,s,null,a,p)}for(i in a)if(s=a[i],p=l[i],a.hasOwnProperty(i)&&(s!=null||p!=null))switch(i){case"value":T=s;break;case"defaultValue":f=s;break;case"multiple":c=s;default:s!==p&&Ce(e,t,i,s,a,p)}t=f,l=c,a=M,T!=null?on(e,!!l,T,!1):!!a!=!!l&&(t!=null?on(e,!!l,t,!0):on(e,!!l,l?[]:"",!1));return;case"textarea":M=T=null;for(f in l)if(i=l[f],l.hasOwnProperty(f)&&i!=null&&!a.hasOwnProperty(f))switch(f){case"value":break;case"children":break;default:Ce(e,t,f,null,a,i)}for(c in a)if(i=a[c],s=l[c],a.hasOwnProperty(c)&&(i!=null||s!=null))switch(c){case"value":T=i;break;case"defaultValue":M=i;break;case"children":break;case"dangerouslySetInnerHTML":if(i!=null)throw Error(o(91));break;default:i!==s&&Ce(e,t,c,i,a,s)}xr(e,T,M);return;case"option":for(var Z in l)T=l[Z],l.hasOwnProperty(Z)&&T!=null&&!a.hasOwnProperty(Z)&&(Z==="selected"?e.selected=!1:Ce(e,t,Z,null,a,T));for(p in a)T=a[p],M=l[p],a.hasOwnProperty(p)&&T!==M&&(T!=null||M!=null)&&(p==="selected"?e.selected=T&&typeof T!="function"&&typeof T!="symbol":Ce(e,t,p,T,a,M));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ee in l)T=l[ee],l.hasOwnProperty(ee)&&T!=null&&!a.hasOwnProperty(ee)&&Ce(e,t,ee,null,a,T);for(N in a)if(T=a[N],M=l[N],a.hasOwnProperty(N)&&T!==M&&(T!=null||M!=null))switch(N){case"children":case"dangerouslySetInnerHTML":if(T!=null)throw Error(o(137,t));break;default:Ce(e,t,N,T,a,M)}return;default:if(Ds(t)){for(var Ee in l)T=l[Ee],l.hasOwnProperty(Ee)&&T!==void 0&&!a.hasOwnProperty(Ee)&&xc(e,t,Ee,void 0,a,T);for(z in a)T=a[z],M=l[z],!a.hasOwnProperty(z)||T===M||T===void 0&&M===void 0||xc(e,t,z,T,a,M);return}}for(var S in l)T=l[S],l.hasOwnProperty(S)&&T!=null&&!a.hasOwnProperty(S)&&Ce(e,t,S,null,a,T);for(_ in a)T=a[_],M=l[_],!a.hasOwnProperty(_)||T===M||T==null&&M==null||Ce(e,t,_,T,a,M)}function Sf(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Hp(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,l=performance.getEntriesByType("resource"),a=0;a<l.length;a++){var i=l[a],s=i.transferSize,c=i.initiatorType,f=i.duration;if(s&&f&&Sf(c)){for(c=0,f=i.responseEnd,a+=1;a<l.length;a++){var p=l[a],N=p.startTime;if(N>f)break;var z=p.transferSize,_=p.initiatorType;z&&Sf(_)&&(p=p.responseEnd,c+=z*(p<f?1:(f-N)/(p-N)))}if(--a,t+=8*(s+c)/(i.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var vc=null,yc=null;function Ki(e){return e.nodeType===9?e:e.ownerDocument}function Cf(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Ef(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function jc(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var gc=null;function kp(){var e=window.event;return e&&e.type==="popstate"?e===gc?!1:(gc=e,!0):(gc=null,!1)}var Nf=typeof setTimeout=="function"?setTimeout:void 0,Bp=typeof clearTimeout=="function"?clearTimeout:void 0,Tf=typeof Promise=="function"?Promise:void 0,qp=typeof queueMicrotask=="function"?queueMicrotask:typeof Tf<"u"?function(e){return Tf.resolve(null).then(e).catch(wp)}:Nf;function wp(e){setTimeout(function(){throw e})}function Ml(e){return e==="head"}function Rf(e,t){var l=t,a=0;do{var i=l.nextSibling;if(e.removeChild(l),i&&i.nodeType===8)if(l=i.data,l==="/$"||l==="/&"){if(a===0){e.removeChild(i),Xn(t);return}a--}else if(l==="$"||l==="$?"||l==="$~"||l==="$!"||l==="&")a++;else if(l==="html")Da(e.ownerDocument.documentElement);else if(l==="head"){l=e.ownerDocument.head,Da(l);for(var s=l.firstChild;s;){var c=s.nextSibling,f=s.nodeName;s[Kn]||f==="SCRIPT"||f==="STYLE"||f==="LINK"&&s.rel.toLowerCase()==="stylesheet"||l.removeChild(s),s=c}}else l==="body"&&Da(e.ownerDocument.body);l=i}while(l);Xn(t)}function Af(e,t){var l=e;e=0;do{var a=l.nextSibling;if(l.nodeType===1?t?(l._stashedDisplay=l.style.display,l.style.display="none"):(l.style.display=l._stashedDisplay||"",l.getAttribute("style")===""&&l.removeAttribute("style")):l.nodeType===3&&(t?(l._stashedText=l.nodeValue,l.nodeValue=""):l.nodeValue=l._stashedText||""),a&&a.nodeType===8)if(l=a.data,l==="/$"){if(e===0)break;e--}else l!=="$"&&l!=="$?"&&l!=="$~"&&l!=="$!"||e++;l=a}while(l)}function bc(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var l=t;switch(t=t.nextSibling,l.nodeName){case"HTML":case"HEAD":case"BODY":bc(l),Ts(l);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(l.rel.toLowerCase()==="stylesheet")continue}e.removeChild(l)}}function Gp(e,t,l,a){for(;e.nodeType===1;){var i=l;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!a&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(a){if(!e[Kn])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(s=e.getAttribute("rel"),s==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(s!==i.rel||e.getAttribute("href")!==(i.href==null||i.href===""?null:i.href)||e.getAttribute("crossorigin")!==(i.crossOrigin==null?null:i.crossOrigin)||e.getAttribute("title")!==(i.title==null?null:i.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(s=e.getAttribute("src"),(s!==(i.src==null?null:i.src)||e.getAttribute("type")!==(i.type==null?null:i.type)||e.getAttribute("crossorigin")!==(i.crossOrigin==null?null:i.crossOrigin))&&s&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var s=i.name==null?null:""+i.name;if(i.type==="hidden"&&e.getAttribute("name")===s)return e}else return e;if(e=Dt(e.nextSibling),e===null)break}return null}function Xp(e,t,l){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!l||(e=Dt(e.nextSibling),e===null))return null;return e}function Mf(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=Dt(e.nextSibling),e===null))return null;return e}function Sc(e){return e.data==="$?"||e.data==="$~"}function Cc(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function Yp(e,t){var l=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||l.readyState!=="loading")t();else{var a=function(){t(),l.removeEventListener("DOMContentLoaded",a)};l.addEventListener("DOMContentLoaded",a),e._reactRetry=a}}function Dt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var Ec=null;function Df(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var l=e.data;if(l==="/$"||l==="/&"){if(t===0)return Dt(e.nextSibling);t--}else l!=="$"&&l!=="$!"&&l!=="$?"&&l!=="$~"&&l!=="&"||t++}e=e.nextSibling}return null}function zf(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var l=e.data;if(l==="$"||l==="$!"||l==="$?"||l==="$~"||l==="&"){if(t===0)return e;t--}else l!=="/$"&&l!=="/&"||t++}e=e.previousSibling}return null}function Of(e,t,l){switch(t=Ki(l),e){case"html":if(e=t.documentElement,!e)throw Error(o(452));return e;case"head":if(e=t.head,!e)throw Error(o(453));return e;case"body":if(e=t.body,!e)throw Error(o(454));return e;default:throw Error(o(451))}}function Da(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Ts(e)}var zt=new Map,Uf=new Set;function $i(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var sl=L.d;L.d={f:Qp,r:Vp,D:Zp,C:Jp,L:Kp,m:$p,X:Wp,S:Fp,M:Ip};function Qp(){var e=sl.f(),t=wi();return e||t}function Vp(e){var t=un(e);t!==null&&t.tag===5&&t.type==="form"?$o(t):sl.r(e)}var qn=typeof document>"u"?null:document;function _f(e,t,l){var a=qn;if(a&&typeof t=="string"&&t){var i=Ct(t);i='link[rel="'+e+'"][href="'+i+'"]',typeof l=="string"&&(i+='[crossorigin="'+l+'"]'),Uf.has(i)||(Uf.add(i),e={rel:e,crossOrigin:l,href:t},a.querySelector(i)===null&&(t=a.createElement("link"),Pe(t,"link",e),Je(t),a.head.appendChild(t)))}}function Zp(e){sl.D(e),_f("dns-prefetch",e,null)}function Jp(e,t){sl.C(e,t),_f("preconnect",e,t)}function Kp(e,t,l){sl.L(e,t,l);var a=qn;if(a&&e&&t){var i='link[rel="preload"][as="'+Ct(t)+'"]';t==="image"&&l&&l.imageSrcSet?(i+='[imagesrcset="'+Ct(l.imageSrcSet)+'"]',typeof l.imageSizes=="string"&&(i+='[imagesizes="'+Ct(l.imageSizes)+'"]')):i+='[href="'+Ct(e)+'"]';var s=i;switch(t){case"style":s=wn(e);break;case"script":s=Gn(e)}zt.has(s)||(e=R({rel:"preload",href:t==="image"&&l&&l.imageSrcSet?void 0:e,as:t},l),zt.set(s,e),a.querySelector(i)!==null||t==="style"&&a.querySelector(za(s))||t==="script"&&a.querySelector(Oa(s))||(t=a.createElement("link"),Pe(t,"link",e),Je(t),a.head.appendChild(t)))}}function $p(e,t){sl.m(e,t);var l=qn;if(l&&e){var a=t&&typeof t.as=="string"?t.as:"script",i='link[rel="modulepreload"][as="'+Ct(a)+'"][href="'+Ct(e)+'"]',s=i;switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":s=Gn(e)}if(!zt.has(s)&&(e=R({rel:"modulepreload",href:e},t),zt.set(s,e),l.querySelector(i)===null)){switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(l.querySelector(Oa(s)))return}a=l.createElement("link"),Pe(a,"link",e),Je(a),l.head.appendChild(a)}}}function Fp(e,t,l){sl.S(e,t,l);var a=qn;if(a&&e){var i=cn(a).hoistableStyles,s=wn(e);t=t||"default";var c=i.get(s);if(!c){var f={loading:0,preload:null};if(c=a.querySelector(za(s)))f.loading=5;else{e=R({rel:"stylesheet",href:e,"data-precedence":t},l),(l=zt.get(s))&&Nc(e,l);var p=c=a.createElement("link");Je(p),Pe(p,"link",e),p._p=new Promise(function(N,z){p.onload=N,p.onerror=z}),p.addEventListener("load",function(){f.loading|=1}),p.addEventListener("error",function(){f.loading|=2}),f.loading|=4,Fi(c,t,a)}c={type:"stylesheet",instance:c,count:1,state:f},i.set(s,c)}}}function Wp(e,t){sl.X(e,t);var l=qn;if(l&&e){var a=cn(l).hoistableScripts,i=Gn(e),s=a.get(i);s||(s=l.querySelector(Oa(i)),s||(e=R({src:e,async:!0},t),(t=zt.get(i))&&Tc(e,t),s=l.createElement("script"),Je(s),Pe(s,"link",e),l.head.appendChild(s)),s={type:"script",instance:s,count:1,state:null},a.set(i,s))}}function Ip(e,t){sl.M(e,t);var l=qn;if(l&&e){var a=cn(l).hoistableScripts,i=Gn(e),s=a.get(i);s||(s=l.querySelector(Oa(i)),s||(e=R({src:e,async:!0,type:"module"},t),(t=zt.get(i))&&Tc(e,t),s=l.createElement("script"),Je(s),Pe(s,"link",e),l.head.appendChild(s)),s={type:"script",instance:s,count:1,state:null},a.set(i,s))}}function Lf(e,t,l,a){var i=(i=se.current)?$i(i):null;if(!i)throw Error(o(446));switch(e){case"meta":case"title":return null;case"style":return typeof l.precedence=="string"&&typeof l.href=="string"?(t=wn(l.href),l=cn(i).hoistableStyles,a=l.get(t),a||(a={type:"style",instance:null,count:0,state:null},l.set(t,a)),a):{type:"void",instance:null,count:0,state:null};case"link":if(l.rel==="stylesheet"&&typeof l.href=="string"&&typeof l.precedence=="string"){e=wn(l.href);var s=cn(i).hoistableStyles,c=s.get(e);if(c||(i=i.ownerDocument||i,c={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},s.set(e,c),(s=i.querySelector(za(e)))&&!s._p&&(c.instance=s,c.state.loading=5),zt.has(e)||(l={rel:"preload",as:"style",href:l.href,crossOrigin:l.crossOrigin,integrity:l.integrity,media:l.media,hrefLang:l.hrefLang,referrerPolicy:l.referrerPolicy},zt.set(e,l),s||Pp(i,e,l,c.state))),t&&a===null)throw Error(o(528,""));return c}if(t&&a!==null)throw Error(o(529,""));return null;case"script":return t=l.async,l=l.src,typeof l=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=Gn(l),l=cn(i).hoistableScripts,a=l.get(t),a||(a={type:"script",instance:null,count:0,state:null},l.set(t,a)),a):{type:"void",instance:null,count:0,state:null};default:throw Error(o(444,e))}}function wn(e){return'href="'+Ct(e)+'"'}function za(e){return'link[rel="stylesheet"]['+e+"]"}function Hf(e){return R({},e,{"data-precedence":e.precedence,precedence:null})}function Pp(e,t,l,a){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?a.loading=1:(t=e.createElement("link"),a.preload=t,t.addEventListener("load",function(){return a.loading|=1}),t.addEventListener("error",function(){return a.loading|=2}),Pe(t,"link",l),Je(t),e.head.appendChild(t))}function Gn(e){return'[src="'+Ct(e)+'"]'}function Oa(e){return"script[async]"+e}function kf(e,t,l){if(t.count++,t.instance===null)switch(t.type){case"style":var a=e.querySelector('style[data-href~="'+Ct(l.href)+'"]');if(a)return t.instance=a,Je(a),a;var i=R({},l,{"data-href":l.href,"data-precedence":l.precedence,href:null,precedence:null});return a=(e.ownerDocument||e).createElement("style"),Je(a),Pe(a,"style",i),Fi(a,l.precedence,e),t.instance=a;case"stylesheet":i=wn(l.href);var s=e.querySelector(za(i));if(s)return t.state.loading|=4,t.instance=s,Je(s),s;a=Hf(l),(i=zt.get(i))&&Nc(a,i),s=(e.ownerDocument||e).createElement("link"),Je(s);var c=s;return c._p=new Promise(function(f,p){c.onload=f,c.onerror=p}),Pe(s,"link",a),t.state.loading|=4,Fi(s,l.precedence,e),t.instance=s;case"script":return s=Gn(l.src),(i=e.querySelector(Oa(s)))?(t.instance=i,Je(i),i):(a=l,(i=zt.get(s))&&(a=R({},l),Tc(a,i)),e=e.ownerDocument||e,i=e.createElement("script"),Je(i),Pe(i,"link",a),e.head.appendChild(i),t.instance=i);case"void":return null;default:throw Error(o(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(a=t.instance,t.state.loading|=4,Fi(a,l.precedence,e));return t.instance}function Fi(e,t,l){for(var a=l.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),i=a.length?a[a.length-1]:null,s=i,c=0;c<a.length;c++){var f=a[c];if(f.dataset.precedence===t)s=f;else if(s!==i)break}s?s.parentNode.insertBefore(e,s.nextSibling):(t=l.nodeType===9?l.head:l,t.insertBefore(e,t.firstChild))}function Nc(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function Tc(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var Wi=null;function Bf(e,t,l){if(Wi===null){var a=new Map,i=Wi=new Map;i.set(l,a)}else i=Wi,a=i.get(l),a||(a=new Map,i.set(l,a));if(a.has(e))return a;for(a.set(e,null),l=l.getElementsByTagName(e),i=0;i<l.length;i++){var s=l[i];if(!(s[Kn]||s[$e]||e==="link"&&s.getAttribute("rel")==="stylesheet")&&s.namespaceURI!=="http://www.w3.org/2000/svg"){var c=s.getAttribute(t)||"";c=e+c;var f=a.get(c);f?f.push(s):a.set(c,[s])}}return a}function qf(e,t,l){e=e.ownerDocument||e,e.head.insertBefore(l,t==="title"?e.querySelector("head > title"):null)}function ex(e,t,l){if(l===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;return t.rel==="stylesheet"?(e=t.disabled,typeof t.precedence=="string"&&e==null):!0;case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function wf(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function tx(e,t,l,a){if(l.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(l.state.loading&4)===0){if(l.instance===null){var i=wn(a.href),s=t.querySelector(za(i));if(s){t=s._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=Ii.bind(e),t.then(e,e)),l.state.loading|=4,l.instance=s,Je(s);return}s=t.ownerDocument||t,a=Hf(a),(i=zt.get(i))&&Nc(a,i),s=s.createElement("link"),Je(s);var c=s;c._p=new Promise(function(f,p){c.onload=f,c.onerror=p}),Pe(s,"link",a),l.instance=s}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(l,t),(t=l.state.preload)&&(l.state.loading&3)===0&&(e.count++,l=Ii.bind(e),t.addEventListener("load",l),t.addEventListener("error",l))}}var Rc=0;function lx(e,t){return e.stylesheets&&e.count===0&&es(e,e.stylesheets),0<e.count||0<e.imgCount?function(l){var a=setTimeout(function(){if(e.stylesheets&&es(e,e.stylesheets),e.unsuspend){var s=e.unsuspend;e.unsuspend=null,s()}},6e4+t);0<e.imgBytes&&Rc===0&&(Rc=62500*Hp());var i=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&es(e,e.stylesheets),e.unsuspend)){var s=e.unsuspend;e.unsuspend=null,s()}},(e.imgBytes>Rc?50:800)+t);return e.unsuspend=l,function(){e.unsuspend=null,clearTimeout(a),clearTimeout(i)}}:null}function Ii(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)es(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Pi=null;function es(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Pi=new Map,t.forEach(nx,e),Pi=null,Ii.call(e))}function nx(e,t){if(!(t.state.loading&4)){var l=Pi.get(e);if(l)var a=l.get(null);else{l=new Map,Pi.set(e,l);for(var i=e.querySelectorAll("link[data-precedence],style[data-precedence]"),s=0;s<i.length;s++){var c=i[s];(c.nodeName==="LINK"||c.getAttribute("media")!=="not all")&&(l.set(c.dataset.precedence,c),a=c)}a&&l.set(null,a)}i=t.instance,c=i.getAttribute("data-precedence"),s=l.get(c)||a,s===a&&l.set(null,i),l.set(c,i),this.count++,a=Ii.bind(this),i.addEventListener("load",a),i.addEventListener("error",a),s?s.parentNode.insertBefore(i,s.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(i,e.firstChild)),t.state.loading|=4}}var Ua={$$typeof:F,Provider:null,Consumer:null,_currentValue:B,_currentValue2:B,_threadCount:0};function ax(e,t,l,a,i,s,c,f,p){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ss(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ss(0),this.hiddenUpdates=Ss(null),this.identifierPrefix=a,this.onUncaughtError=i,this.onCaughtError=s,this.onRecoverableError=c,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=p,this.incompleteTransitions=new Map}function Gf(e,t,l,a,i,s,c,f,p,N,z,_){return e=new ax(e,t,l,c,p,N,z,_,f),t=1,s===!0&&(t|=24),s=pt(3,null,null,t),e.current=s,s.stateNode=e,t=su(),t.refCount++,e.pooledCache=t,t.refCount++,s.memoizedState={element:a,isDehydrated:l,cache:t},ou(s),e}function Xf(e){return e?(e=yn,e):yn}function Yf(e,t,l,a,i,s){i=Xf(i),a.context===null?a.context=i:a.pendingContext=i,a=yl(t),a.payload={element:l},s=s===void 0?null:s,s!==null&&(a.callback=s),l=jl(e,a,t),l!==null&&(rt(l,e,t),da(l,e,t))}function Qf(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var l=e.retryLane;e.retryLane=l!==0&&l<t?l:t}}function Ac(e,t){Qf(e,t),(e=e.alternate)&&Qf(e,t)}function Vf(e){if(e.tag===13||e.tag===31){var t=Yl(e,67108864);t!==null&&rt(t,e,67108864),Ac(e,67108864)}}function Zf(e){if(e.tag===13||e.tag===31){var t=gt();t=Cs(t);var l=Yl(e,t);l!==null&&rt(l,e,t),Ac(e,t)}}var ts=!0;function ix(e,t,l,a){var i=O.T;O.T=null;var s=L.p;try{L.p=2,Mc(e,t,l,a)}finally{L.p=s,O.T=i}}function sx(e,t,l,a){var i=O.T;O.T=null;var s=L.p;try{L.p=8,Mc(e,t,l,a)}finally{L.p=s,O.T=i}}function Mc(e,t,l,a){if(ts){var i=Dc(a);if(i===null)pc(e,t,a,ls,l),Kf(e,a);else if(cx(i,e,t,l,a))a.stopPropagation();else if(Kf(e,a),t&4&&-1<ux.indexOf(e)){for(;i!==null;){var s=un(i);if(s!==null)switch(s.tag){case 3:if(s=s.stateNode,s.current.memoizedState.isDehydrated){var c=Bl(s.pendingLanes);if(c!==0){var f=s;for(f.pendingLanes|=2,f.entangledLanes|=2;c;){var p=1<<31-ht(c);f.entanglements[1]|=p,c&=~p}Gt(s),(ve&6)===0&&(Bi=dt()+500,Ra(0))}}break;case 31:case 13:f=Yl(s,2),f!==null&&rt(f,s,2),wi(),Ac(s,2)}if(s=Dc(a),s===null&&pc(e,t,a,ls,l),s===i)break;i=s}i!==null&&a.stopPropagation()}else pc(e,t,a,null,l)}}function Dc(e){return e=Os(e),zc(e)}var ls=null;function zc(e){if(ls=null,e=sn(e),e!==null){var t=h(e);if(t===null)e=null;else{var l=t.tag;if(l===13){if(e=v(t),e!==null)return e;e=null}else if(l===31){if(e=C(t),e!==null)return e;e=null}else if(l===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return ls=e,null}function Jf(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Zh()){case Pc:return 2;case er:return 8;case Va:case Jh:return 32;case tr:return 268435456;default:return 32}default:return 32}}var Oc=!1,Dl=null,zl=null,Ol=null,_a=new Map,La=new Map,Ul=[],ux="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Kf(e,t){switch(e){case"focusin":case"focusout":Dl=null;break;case"dragenter":case"dragleave":zl=null;break;case"mouseover":case"mouseout":Ol=null;break;case"pointerover":case"pointerout":_a.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":La.delete(t.pointerId)}}function Ha(e,t,l,a,i,s){return e===null||e.nativeEvent!==s?(e={blockedOn:t,domEventName:l,eventSystemFlags:a,nativeEvent:s,targetContainers:[i]},t!==null&&(t=un(t),t!==null&&Vf(t)),e):(e.eventSystemFlags|=a,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function cx(e,t,l,a,i){switch(t){case"focusin":return Dl=Ha(Dl,e,t,l,a,i),!0;case"dragenter":return zl=Ha(zl,e,t,l,a,i),!0;case"mouseover":return Ol=Ha(Ol,e,t,l,a,i),!0;case"pointerover":var s=i.pointerId;return _a.set(s,Ha(_a.get(s)||null,e,t,l,a,i)),!0;case"gotpointercapture":return s=i.pointerId,La.set(s,Ha(La.get(s)||null,e,t,l,a,i)),!0}return!1}function $f(e){var t=sn(e.target);if(t!==null){var l=h(t);if(l!==null){if(t=l.tag,t===13){if(t=v(l),t!==null){e.blockedOn=t,ur(e.priority,function(){Zf(l)});return}}else if(t===31){if(t=C(l),t!==null){e.blockedOn=t,ur(e.priority,function(){Zf(l)});return}}else if(t===3&&l.stateNode.current.memoizedState.isDehydrated){e.blockedOn=l.tag===3?l.stateNode.containerInfo:null;return}}}e.blockedOn=null}function ns(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var l=Dc(e.nativeEvent);if(l===null){l=e.nativeEvent;var a=new l.constructor(l.type,l);zs=a,l.target.dispatchEvent(a),zs=null}else return t=un(l),t!==null&&Vf(t),e.blockedOn=l,!1;t.shift()}return!0}function Ff(e,t,l){ns(e)&&l.delete(t)}function rx(){Oc=!1,Dl!==null&&ns(Dl)&&(Dl=null),zl!==null&&ns(zl)&&(zl=null),Ol!==null&&ns(Ol)&&(Ol=null),_a.forEach(Ff),La.forEach(Ff)}function as(e,t){e.blockedOn===t&&(e.blockedOn=null,Oc||(Oc=!0,u.unstable_scheduleCallback(u.unstable_NormalPriority,rx)))}var is=null;function Wf(e){is!==e&&(is=e,u.unstable_scheduleCallback(u.unstable_NormalPriority,function(){is===e&&(is=null);for(var t=0;t<e.length;t+=3){var l=e[t],a=e[t+1],i=e[t+2];if(typeof a!="function"){if(zc(a||l)===null)continue;break}var s=un(l);s!==null&&(e.splice(t,3),t-=3,Du(s,{pending:!0,data:i,method:l.method,action:a},a,i))}}))}function Xn(e){function t(p){return as(p,e)}Dl!==null&&as(Dl,e),zl!==null&&as(zl,e),Ol!==null&&as(Ol,e),_a.forEach(t),La.forEach(t);for(var l=0;l<Ul.length;l++){var a=Ul[l];a.blockedOn===e&&(a.blockedOn=null)}for(;0<Ul.length&&(l=Ul[0],l.blockedOn===null);)$f(l),l.blockedOn===null&&Ul.shift();if(l=(e.ownerDocument||e).$$reactFormReplay,l!=null)for(a=0;a<l.length;a+=3){var i=l[a],s=l[a+1],c=i[nt]||null;if(typeof s=="function")c||Wf(l);else if(c){var f=null;if(s&&s.hasAttribute("formAction")){if(i=s,c=s[nt]||null)f=c.formAction;else if(zc(i)!==null)continue}else f=c.action;typeof f=="function"?l[a+1]=f:(l.splice(a,3),a-=3),Wf(l)}}}function If(){function e(s){s.canIntercept&&s.info==="react-transition"&&s.intercept({handler:function(){return new Promise(function(c){return i=c})},focusReset:"manual",scroll:"manual"})}function t(){i!==null&&(i(),i=null),a||setTimeout(l,20)}function l(){if(!a&&!navigation.transition){var s=navigation.currentEntry;s&&s.url!=null&&navigation.navigate(s.url,{state:s.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var a=!1,i=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(l,100),function(){a=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),i!==null&&(i(),i=null)}}}function Uc(e){this._internalRoot=e}ss.prototype.render=Uc.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(o(409));var l=t.current,a=gt();Yf(l,a,e,t,null,null)},ss.prototype.unmount=Uc.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Yf(e.current,2,null,e,null,null),wi(),t[an]=null}};function ss(e){this._internalRoot=e}ss.prototype.unstable_scheduleHydration=function(e){if(e){var t=sr();e={blockedOn:null,target:e,priority:t};for(var l=0;l<Ul.length&&t!==0&&t<Ul[l].priority;l++);Ul.splice(l,0,e),l===0&&$f(e)}};var Pf=r.version;if(Pf!=="19.2.3")throw Error(o(527,Pf,"19.2.3"));L.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(o(188)):(e=Object.keys(e).join(","),Error(o(268,e)));return e=y(t),e=e!==null?D(e):null,e=e===null?null:e.stateNode,e};var ox={bundleType:0,version:"19.2.3",rendererPackageName:"react-dom",currentDispatcherRef:O,reconcilerVersion:"19.2.3"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var us=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!us.isDisabled&&us.supportsFiber)try{Vn=us.inject(ox),ft=us}catch{}}return Ba.createRoot=function(e,t){if(!m(e))throw Error(o(299));var l=!1,a="",i=id,s=sd,c=ud;return t!=null&&(t.unstable_strictMode===!0&&(l=!0),t.identifierPrefix!==void 0&&(a=t.identifierPrefix),t.onUncaughtError!==void 0&&(i=t.onUncaughtError),t.onCaughtError!==void 0&&(s=t.onCaughtError),t.onRecoverableError!==void 0&&(c=t.onRecoverableError)),t=Gf(e,1,!1,null,null,l,a,null,i,s,c,If),e[an]=t.current,mc(e),new Uc(t)},Ba.hydrateRoot=function(e,t,l){if(!m(e))throw Error(o(299));var a=!1,i="",s=id,c=sd,f=ud,p=null;return l!=null&&(l.unstable_strictMode===!0&&(a=!0),l.identifierPrefix!==void 0&&(i=l.identifierPrefix),l.onUncaughtError!==void 0&&(s=l.onUncaughtError),l.onCaughtError!==void 0&&(c=l.onCaughtError),l.onRecoverableError!==void 0&&(f=l.onRecoverableError),l.formState!==void 0&&(p=l.formState)),t=Gf(e,1,!0,t,l??null,a,i,p,s,c,f,If),t.context=Xf(null),l=t.current,a=gt(),a=Cs(a),i=yl(a),i.callback=null,jl(l,i,a),l=a,t.current.lanes=l,Jn(t,l),Gt(t),e[an]=t.current,mc(e),new ss(t)},Ba.version="19.2.3",Ba}var rh;function gx(){if(rh)return Hc.exports;rh=1;function u(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(u)}catch(r){console.error(r)}}return u(),Hc.exports=jx(),Hc.exports}var bx=gx();var oh="popstate";function Sx(u={}){function r(m,h){let{pathname:v="/",search:C="",hash:x=""}=nn(m.location.hash.substring(1));return!v.startsWith("/")&&!v.startsWith(".")&&(v="/"+v),Yc("",{pathname:v,search:C,hash:x},h.state&&h.state.usr||null,h.state&&h.state.key||"default")}function d(m,h){let v=m.document.querySelector("base"),C="";if(v&&v.getAttribute("href")){let x=m.location.href,y=x.indexOf("#");C=y===-1?x:x.slice(0,y)}return C+"#"+(typeof h=="string"?h:wa(h))}function o(m,h){Ot(m.pathname.charAt(0)==="/",`relative pathnames are not supported in hash history.push(${JSON.stringify(h)})`)}return Ex(r,d,o,u)}function Oe(u,r){if(u===!1||u===null||typeof u>"u")throw new Error(r)}function Ot(u,r){if(!u){typeof console<"u"&&console.warn(r);try{throw new Error(r)}catch{}}}function Cx(){return Math.random().toString(36).substring(2,10)}function dh(u,r){return{usr:u.state,key:u.key,idx:r}}function Yc(u,r,d=null,o){return{pathname:typeof u=="string"?u:u.pathname,search:"",hash:"",...typeof r=="string"?nn(r):r,state:d,key:r&&r.key||o||Cx()}}function wa({pathname:u="/",search:r="",hash:d=""}){return r&&r!=="?"&&(u+=r.charAt(0)==="?"?r:"?"+r),d&&d!=="#"&&(u+=d.charAt(0)==="#"?d:"#"+d),u}function nn(u){let r={};if(u){let d=u.indexOf("#");d>=0&&(r.hash=u.substring(d),u=u.substring(0,d));let o=u.indexOf("?");o>=0&&(r.search=u.substring(o),u=u.substring(0,o)),u&&(r.pathname=u)}return r}function Ex(u,r,d,o={}){let{window:m=document.defaultView,v5Compat:h=!1}=o,v=m.history,C="POP",x=null,y=D();y==null&&(y=0,v.replaceState({...v.state,idx:y},""));function D(){return(v.state||{idx:null}).idx}function R(){C="POP";let V=D(),J=V==null?null:V-y;y=V,x&&x({action:C,location:w.location,delta:J})}function k(V,J){C="PUSH";let G=Yc(w.location,V,J);d&&d(G,V),y=D()+1;let F=dh(G,y),he=w.createHref(G);try{v.pushState(F,"",he)}catch(ie){if(ie instanceof DOMException&&ie.name==="DataCloneError")throw ie;m.location.assign(he)}h&&x&&x({action:C,location:w.location,delta:1})}function Q(V,J){C="REPLACE";let G=Yc(w.location,V,J);d&&d(G,V),y=D();let F=dh(G,y),he=w.createHref(G);v.replaceState(F,"",he),h&&x&&x({action:C,location:w.location,delta:0})}function X(V){return Nx(V)}let w={get action(){return C},get location(){return u(m,v)},listen(V){if(x)throw new Error("A history only accepts one active listener");return m.addEventListener(oh,R),x=V,()=>{m.removeEventListener(oh,R),x=null}},createHref(V){return r(m,V)},createURL:X,encodeLocation(V){let J=X(V);return{pathname:J.pathname,search:J.search,hash:J.hash}},push:k,replace:Q,go(V){return v.go(V)}};return w}function Nx(u,r=!1){let d="http://localhost";typeof window<"u"&&(d=window.location.origin!=="null"?window.location.origin:window.location.href),Oe(d,"No window.location.(origin|href) available to create URL");let o=typeof u=="string"?u:wa(u);return o=o.replace(/ $/,"%20"),!r&&o.startsWith("//")&&(o=d+o),new URL(o,d)}function bh(u,r,d="/"){return Tx(u,r,d,!1)}function Tx(u,r,d,o){let m=typeof r=="string"?nn(r):r,h=rl(m.pathname||"/",d);if(h==null)return null;let v=Sh(u);Rx(v);let C=null;for(let x=0;C==null&&x<v.length;++x){let y=Bx(h);C=Hx(v[x],y,o)}return C}function Sh(u,r=[],d=[],o="",m=!1){let h=(v,C,x=m,y)=>{let D={relativePath:y===void 0?v.path||"":y,caseSensitive:v.caseSensitive===!0,childrenIndex:C,route:v};if(D.relativePath.startsWith("/")){if(!D.relativePath.startsWith(o)&&x)return;Oe(D.relativePath.startsWith(o),`Absolute route path "${D.relativePath}" nested under path "${o}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),D.relativePath=D.relativePath.slice(o.length)}let R=cl([o,D.relativePath]),k=d.concat(D);v.children&&v.children.length>0&&(Oe(v.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${R}".`),Sh(v.children,r,k,R,x)),!(v.path==null&&!v.index)&&r.push({path:R,score:_x(R,v.index),routesMeta:k})};return u.forEach((v,C)=>{if(v.path===""||!v.path?.includes("?"))h(v,C);else for(let x of Ch(v.path))h(v,C,!0,x)}),r}function Ch(u){let r=u.split("/");if(r.length===0)return[];let[d,...o]=r,m=d.endsWith("?"),h=d.replace(/\?$/,"");if(o.length===0)return m?[h,""]:[h];let v=Ch(o.join("/")),C=[];return C.push(...v.map(x=>x===""?h:[h,x].join("/"))),m&&C.push(...v),C.map(x=>u.startsWith("/")&&x===""?"/":x)}function Rx(u){u.sort((r,d)=>r.score!==d.score?d.score-r.score:Lx(r.routesMeta.map(o=>o.childrenIndex),d.routesMeta.map(o=>o.childrenIndex)))}var Ax=/^:[\w-]+$/,Mx=3,Dx=2,zx=1,Ox=10,Ux=-2,fh=u=>u==="*";function _x(u,r){let d=u.split("/"),o=d.length;return d.some(fh)&&(o+=Ux),r&&(o+=Dx),d.filter(m=>!fh(m)).reduce((m,h)=>m+(Ax.test(h)?Mx:h===""?zx:Ox),o)}function Lx(u,r){return u.length===r.length&&u.slice(0,-1).every((o,m)=>o===r[m])?u[u.length-1]-r[r.length-1]:0}function Hx(u,r,d=!1){let{routesMeta:o}=u,m={},h="/",v=[];for(let C=0;C<o.length;++C){let x=o[C],y=C===o.length-1,D=h==="/"?r:r.slice(h.length)||"/",R=hs({path:x.relativePath,caseSensitive:x.caseSensitive,end:y},D),k=x.route;if(!R&&y&&d&&!o[o.length-1].route.index&&(R=hs({path:x.relativePath,caseSensitive:x.caseSensitive,end:!1},D)),!R)return null;Object.assign(m,R.params),v.push({params:m,pathname:cl([h,R.pathname]),pathnameBase:Xx(cl([h,R.pathnameBase])),route:k}),R.pathnameBase!=="/"&&(h=cl([h,R.pathnameBase]))}return v}function hs(u,r){typeof u=="string"&&(u={path:u,caseSensitive:!1,end:!0});let[d,o]=kx(u.path,u.caseSensitive,u.end),m=r.match(d);if(!m)return null;let h=m[0],v=h.replace(/(.)\/+$/,"$1"),C=m.slice(1);return{params:o.reduce((y,{paramName:D,isOptional:R},k)=>{if(D==="*"){let X=C[k]||"";v=h.slice(0,h.length-X.length).replace(/(.)\/+$/,"$1")}const Q=C[k];return R&&!Q?y[D]=void 0:y[D]=(Q||"").replace(/%2F/g,"/"),y},{}),pathname:h,pathnameBase:v,pattern:u}}function kx(u,r=!1,d=!0){Ot(u==="*"||!u.endsWith("*")||u.endsWith("/*"),`Route path "${u}" will be treated as if it were "${u.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${u.replace(/\*$/,"/*")}".`);let o=[],m="^"+u.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(v,C,x)=>(o.push({paramName:C,isOptional:x!=null}),x?"/?([^\\/]+)?":"/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return u.endsWith("*")?(o.push({paramName:"*"}),m+=u==="*"||u==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):d?m+="\\/*$":u!==""&&u!=="/"&&(m+="(?:(?=\\/|$))"),[new RegExp(m,r?void 0:"i"),o]}function Bx(u){try{return u.split("/").map(r=>decodeURIComponent(r).replace(/\//g,"%2F")).join("/")}catch(r){return Ot(!1,`The URL path "${u}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${r}).`),u}}function rl(u,r){if(r==="/")return u;if(!u.toLowerCase().startsWith(r.toLowerCase()))return null;let d=r.endsWith("/")?r.length-1:r.length,o=u.charAt(d);return o&&o!=="/"?null:u.slice(d)||"/"}var Eh=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,qx=u=>Eh.test(u);function wx(u,r="/"){let{pathname:d,search:o="",hash:m=""}=typeof u=="string"?nn(u):u,h;if(d)if(qx(d))h=d;else{if(d.includes("//")){let v=d;d=d.replace(/\/\/+/g,"/"),Ot(!1,`Pathnames cannot have embedded double slashes - normalizing ${v} -> ${d}`)}d.startsWith("/")?h=hh(d.substring(1),"/"):h=hh(d,r)}else h=r;return{pathname:h,search:Yx(o),hash:Qx(m)}}function hh(u,r){let d=r.replace(/\/+$/,"").split("/");return u.split("/").forEach(m=>{m===".."?d.length>1&&d.pop():m!=="."&&d.push(m)}),d.length>1?d.join("/"):"/"}function wc(u,r,d,o){return`Cannot include a '${u}' character in a manually specified \`to.${r}\` field [${JSON.stringify(o)}].  Please separate it out to the \`to.${d}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function Gx(u){return u.filter((r,d)=>d===0||r.route.path&&r.route.path.length>0)}function Nh(u){let r=Gx(u);return r.map((d,o)=>o===r.length-1?d.pathname:d.pathnameBase)}function Th(u,r,d,o=!1){let m;typeof u=="string"?m=nn(u):(m={...u},Oe(!m.pathname||!m.pathname.includes("?"),wc("?","pathname","search",m)),Oe(!m.pathname||!m.pathname.includes("#"),wc("#","pathname","hash",m)),Oe(!m.search||!m.search.includes("#"),wc("#","search","hash",m)));let h=u===""||m.pathname==="",v=h?"/":m.pathname,C;if(v==null)C=d;else{let R=r.length-1;if(!o&&v.startsWith("..")){let k=v.split("/");for(;k[0]==="..";)k.shift(),R-=1;m.pathname=k.join("/")}C=R>=0?r[R]:"/"}let x=wx(m,C),y=v&&v!=="/"&&v.endsWith("/"),D=(h||v===".")&&d.endsWith("/");return!x.pathname.endsWith("/")&&(y||D)&&(x.pathname+="/"),x}var cl=u=>u.join("/").replace(/\/\/+/g,"/"),Xx=u=>u.replace(/\/+$/,"").replace(/^\/*/,"/"),Yx=u=>!u||u==="?"?"":u.startsWith("?")?u:"?"+u,Qx=u=>!u||u==="#"?"":u.startsWith("#")?u:"#"+u,Vx=class{constructor(u,r,d,o=!1){this.status=u,this.statusText=r||"",this.internal=o,d instanceof Error?(this.data=d.toString(),this.error=d):this.data=d}};function Zx(u){return u!=null&&typeof u.status=="number"&&typeof u.statusText=="string"&&typeof u.internal=="boolean"&&"data"in u}function Jx(u){return u.map(r=>r.route.path).filter(Boolean).join("/").replace(/\/\/*/g,"/")||"/"}var Rh=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function Ah(u,r){let d=u;if(typeof d!="string"||!Eh.test(d))return{absoluteURL:void 0,isExternal:!1,to:d};let o=d,m=!1;if(Rh)try{let h=new URL(window.location.href),v=d.startsWith("//")?new URL(h.protocol+d):new URL(d),C=rl(v.pathname,r);v.origin===h.origin&&C!=null?d=C+v.search+v.hash:m=!0}catch{Ot(!1,`<Link to="${d}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:o,isExternal:m,to:d}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var Mh=["POST","PUT","PATCH","DELETE"];new Set(Mh);var Kx=["GET",...Mh];new Set(Kx);var Yn=b.createContext(null);Yn.displayName="DataRouter";var ms=b.createContext(null);ms.displayName="DataRouterState";var $x=b.createContext(!1),Dh=b.createContext({isTransitioning:!1});Dh.displayName="ViewTransition";var Fx=b.createContext(new Map);Fx.displayName="Fetchers";var Wx=b.createContext(null);Wx.displayName="Await";var Ut=b.createContext(null);Ut.displayName="Navigation";var Ga=b.createContext(null);Ga.displayName="Location";var Xt=b.createContext({outlet:null,matches:[],isDataRoute:!1});Xt.displayName="Route";var Zc=b.createContext(null);Zc.displayName="RouteError";var zh="REACT_ROUTER_ERROR",Ix="REDIRECT",Px="ROUTE_ERROR_RESPONSE";function ev(u){if(u.startsWith(`${zh}:${Ix}:{`))try{let r=JSON.parse(u.slice(28));if(typeof r=="object"&&r&&typeof r.status=="number"&&typeof r.statusText=="string"&&typeof r.location=="string"&&typeof r.reloadDocument=="boolean"&&typeof r.replace=="boolean")return r}catch{}}function tv(u){if(u.startsWith(`${zh}:${Px}:{`))try{let r=JSON.parse(u.slice(40));if(typeof r=="object"&&r&&typeof r.status=="number"&&typeof r.statusText=="string")return new Vx(r.status,r.statusText,r.data)}catch{}}function lv(u,{relative:r}={}){Oe(Xa(),"useHref() may be used only in the context of a <Router> component.");let{basename:d,navigator:o}=b.useContext(Ut),{hash:m,pathname:h,search:v}=Ya(u,{relative:r}),C=h;return d!=="/"&&(C=h==="/"?d:cl([d,h])),o.createHref({pathname:C,search:v,hash:m})}function Xa(){return b.useContext(Ga)!=null}function Hl(){return Oe(Xa(),"useLocation() may be used only in the context of a <Router> component."),b.useContext(Ga).location}var Oh="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function Uh(u){b.useContext(Ut).static||b.useLayoutEffect(u)}function _h(){let{isDataRoute:u}=b.useContext(Xt);return u?vv():nv()}function nv(){Oe(Xa(),"useNavigate() may be used only in the context of a <Router> component.");let u=b.useContext(Yn),{basename:r,navigator:d}=b.useContext(Ut),{matches:o}=b.useContext(Xt),{pathname:m}=Hl(),h=JSON.stringify(Nh(o)),v=b.useRef(!1);return Uh(()=>{v.current=!0}),b.useCallback((x,y={})=>{if(Ot(v.current,Oh),!v.current)return;if(typeof x=="number"){d.go(x);return}let D=Th(x,JSON.parse(h),m,y.relative==="path");u==null&&r!=="/"&&(D.pathname=D.pathname==="/"?r:cl([r,D.pathname])),(y.replace?d.replace:d.push)(D,y.state,y)},[r,d,h,m,u])}var av=b.createContext(null);function iv(u){let r=b.useContext(Xt).outlet;return b.useMemo(()=>r&&b.createElement(av.Provider,{value:u},r),[r,u])}function Ya(u,{relative:r}={}){let{matches:d}=b.useContext(Xt),{pathname:o}=Hl(),m=JSON.stringify(Nh(d));return b.useMemo(()=>Th(u,JSON.parse(m),o,r==="path"),[u,m,o,r])}function sv(u,r){return Lh(u,r)}function Lh(u,r,d,o,m){Oe(Xa(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:h}=b.useContext(Ut),{matches:v}=b.useContext(Xt),C=v[v.length-1],x=C?C.params:{},y=C?C.pathname:"/",D=C?C.pathnameBase:"/",R=C&&C.route;{let G=R&&R.path||"";kh(y,!R||G.endsWith("*")||G.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${y}" (under <Route path="${G}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${G}"> to <Route path="${G==="/"?"*":`${G}/*`}">.`)}let k=Hl(),Q;if(r){let G=typeof r=="string"?nn(r):r;Oe(D==="/"||G.pathname?.startsWith(D),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${D}" but pathname "${G.pathname}" was given in the \`location\` prop.`),Q=G}else Q=k;let X=Q.pathname||"/",w=X;if(D!=="/"){let G=D.replace(/^\//,"").split("/");w="/"+X.replace(/^\//,"").split("/").slice(G.length).join("/")}let V=bh(u,{pathname:w});Ot(R||V!=null,`No routes matched location "${Q.pathname}${Q.search}${Q.hash}" `),Ot(V==null||V[V.length-1].route.element!==void 0||V[V.length-1].route.Component!==void 0||V[V.length-1].route.lazy!==void 0,`Matched leaf route at location "${Q.pathname}${Q.search}${Q.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let J=dv(V&&V.map(G=>Object.assign({},G,{params:Object.assign({},x,G.params),pathname:cl([D,h.encodeLocation?h.encodeLocation(G.pathname.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:G.pathname]),pathnameBase:G.pathnameBase==="/"?D:cl([D,h.encodeLocation?h.encodeLocation(G.pathnameBase.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:G.pathnameBase])})),v,d,o,m);return r&&J?b.createElement(Ga.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...Q},navigationType:"POP"}},J):J}function uv(){let u=xv(),r=Zx(u)?`${u.status} ${u.statusText}`:u instanceof Error?u.message:JSON.stringify(u),d=u instanceof Error?u.stack:null,o="rgba(200,200,200, 0.5)",m={padding:"0.5rem",backgroundColor:o},h={padding:"2px 4px",backgroundColor:o},v=null;return console.error("Error handled by React Router default ErrorBoundary:",u),v=b.createElement(b.Fragment,null,b.createElement("p",null,"💿 Hey developer 👋"),b.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",b.createElement("code",{style:h},"ErrorBoundary")," or"," ",b.createElement("code",{style:h},"errorElement")," prop on your route.")),b.createElement(b.Fragment,null,b.createElement("h2",null,"Unexpected Application Error!"),b.createElement("h3",{style:{fontStyle:"italic"}},r),d?b.createElement("pre",{style:m},d):null,v)}var cv=b.createElement(uv,null),Hh=class extends b.Component{constructor(u){super(u),this.state={location:u.location,revalidation:u.revalidation,error:u.error}}static getDerivedStateFromError(u){return{error:u}}static getDerivedStateFromProps(u,r){return r.location!==u.location||r.revalidation!=="idle"&&u.revalidation==="idle"?{error:u.error,location:u.location,revalidation:u.revalidation}:{error:u.error!==void 0?u.error:r.error,location:r.location,revalidation:u.revalidation||r.revalidation}}componentDidCatch(u,r){this.props.onError?this.props.onError(u,r):console.error("React Router caught the following error during render",u)}render(){let u=this.state.error;if(this.context&&typeof u=="object"&&u&&"digest"in u&&typeof u.digest=="string"){const d=tv(u.digest);d&&(u=d)}let r=u!==void 0?b.createElement(Xt.Provider,{value:this.props.routeContext},b.createElement(Zc.Provider,{value:u,children:this.props.component})):this.props.children;return this.context?b.createElement(rv,{error:u},r):r}};Hh.contextType=$x;var Gc=new WeakMap;function rv({children:u,error:r}){let{basename:d}=b.useContext(Ut);if(typeof r=="object"&&r&&"digest"in r&&typeof r.digest=="string"){let o=ev(r.digest);if(o){let m=Gc.get(r);if(m)throw m;let h=Ah(o.location,d);if(Rh&&!Gc.get(r))if(h.isExternal||o.reloadDocument)window.location.href=h.absoluteURL||h.to;else{const v=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(h.to,{replace:o.replace}));throw Gc.set(r,v),v}return b.createElement("meta",{httpEquiv:"refresh",content:`0;url=${h.absoluteURL||h.to}`})}}return u}function ov({routeContext:u,match:r,children:d}){let o=b.useContext(Yn);return o&&o.static&&o.staticContext&&(r.route.errorElement||r.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=r.route.id),b.createElement(Xt.Provider,{value:u},d)}function dv(u,r=[],d=null,o=null,m=null){if(u==null){if(!d)return null;if(d.errors)u=d.matches;else if(r.length===0&&!d.initialized&&d.matches.length>0)u=d.matches;else return null}let h=u,v=d?.errors;if(v!=null){let D=h.findIndex(R=>R.route.id&&v?.[R.route.id]!==void 0);Oe(D>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(v).join(",")}`),h=h.slice(0,Math.min(h.length,D+1))}let C=!1,x=-1;if(d)for(let D=0;D<h.length;D++){let R=h[D];if((R.route.HydrateFallback||R.route.hydrateFallbackElement)&&(x=D),R.route.id){let{loaderData:k,errors:Q}=d,X=R.route.loader&&!k.hasOwnProperty(R.route.id)&&(!Q||Q[R.route.id]===void 0);if(R.route.lazy||X){C=!0,x>=0?h=h.slice(0,x+1):h=[h[0]];break}}}let y=d&&o?(D,R)=>{o(D,{location:d.location,params:d.matches?.[0]?.params??{},unstable_pattern:Jx(d.matches),errorInfo:R})}:void 0;return h.reduceRight((D,R,k)=>{let Q,X=!1,w=null,V=null;d&&(Q=v&&R.route.id?v[R.route.id]:void 0,w=R.route.errorElement||cv,C&&(x<0&&k===0?(kh("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),X=!0,V=null):x===k&&(X=!0,V=R.route.hydrateFallbackElement||null)));let J=r.concat(h.slice(0,k+1)),G=()=>{let F;return Q?F=w:X?F=V:R.route.Component?F=b.createElement(R.route.Component,null):R.route.element?F=R.route.element:F=D,b.createElement(ov,{match:R,routeContext:{outlet:D,matches:J,isDataRoute:d!=null},children:F})};return d&&(R.route.ErrorBoundary||R.route.errorElement||k===0)?b.createElement(Hh,{location:d.location,revalidation:d.revalidation,component:w,error:Q,children:G(),routeContext:{outlet:null,matches:J,isDataRoute:!0},onError:y}):G()},null)}function Jc(u){return`${u} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function fv(u){let r=b.useContext(Yn);return Oe(r,Jc(u)),r}function hv(u){let r=b.useContext(ms);return Oe(r,Jc(u)),r}function mv(u){let r=b.useContext(Xt);return Oe(r,Jc(u)),r}function Kc(u){let r=mv(u),d=r.matches[r.matches.length-1];return Oe(d.route.id,`${u} can only be used on routes that contain a unique "id"`),d.route.id}function pv(){return Kc("useRouteId")}function xv(){let u=b.useContext(Zc),r=hv("useRouteError"),d=Kc("useRouteError");return u!==void 0?u:r.errors?.[d]}function vv(){let{router:u}=fv("useNavigate"),r=Kc("useNavigate"),d=b.useRef(!1);return Uh(()=>{d.current=!0}),b.useCallback(async(m,h={})=>{Ot(d.current,Oh),d.current&&(typeof m=="number"?await u.navigate(m):await u.navigate(m,{fromRouteId:r,...h}))},[u,r])}var mh={};function kh(u,r,d){!r&&!mh[u]&&(mh[u]=!0,Ot(!1,d))}b.memo(yv);function yv({routes:u,future:r,state:d,onError:o}){return Lh(u,void 0,d,o,r)}function Bh(u){return iv(u.context)}function Te(u){Oe(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function jv({basename:u="/",children:r=null,location:d,navigationType:o="POP",navigator:m,static:h=!1,unstable_useTransitions:v}){Oe(!Xa(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let C=u.replace(/^\/*/,"/"),x=b.useMemo(()=>({basename:C,navigator:m,static:h,unstable_useTransitions:v,future:{}}),[C,m,h,v]);typeof d=="string"&&(d=nn(d));let{pathname:y="/",search:D="",hash:R="",state:k=null,key:Q="default"}=d,X=b.useMemo(()=>{let w=rl(y,C);return w==null?null:{location:{pathname:w,search:D,hash:R,state:k,key:Q},navigationType:o}},[C,y,D,R,k,Q,o]);return Ot(X!=null,`<Router basename="${C}"> is not able to match the URL "${y}${D}${R}" because it does not start with the basename, so the <Router> won't render anything.`),X==null?null:b.createElement(Ut.Provider,{value:x},b.createElement(Ga.Provider,{children:r,value:X}))}function gv({children:u,location:r}){return sv(Qc(u),r)}function Qc(u,r=[]){let d=[];return b.Children.forEach(u,(o,m)=>{if(!b.isValidElement(o))return;let h=[...r,m];if(o.type===b.Fragment){d.push.apply(d,Qc(o.props.children,h));return}Oe(o.type===Te,`[${typeof o.type=="string"?o.type:o.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Oe(!o.props.index||!o.props.children,"An index route cannot have child routes.");let v={id:o.props.id||h.join("-"),caseSensitive:o.props.caseSensitive,element:o.props.element,Component:o.props.Component,index:o.props.index,path:o.props.path,middleware:o.props.middleware,loader:o.props.loader,action:o.props.action,hydrateFallbackElement:o.props.hydrateFallbackElement,HydrateFallback:o.props.HydrateFallback,errorElement:o.props.errorElement,ErrorBoundary:o.props.ErrorBoundary,hasErrorBoundary:o.props.hasErrorBoundary===!0||o.props.ErrorBoundary!=null||o.props.errorElement!=null,shouldRevalidate:o.props.shouldRevalidate,handle:o.props.handle,lazy:o.props.lazy};o.props.children&&(v.children=Qc(o.props.children,h)),d.push(v)}),d}var ds="get",fs="application/x-www-form-urlencoded";function ps(u){return typeof HTMLElement<"u"&&u instanceof HTMLElement}function bv(u){return ps(u)&&u.tagName.toLowerCase()==="button"}function Sv(u){return ps(u)&&u.tagName.toLowerCase()==="form"}function Cv(u){return ps(u)&&u.tagName.toLowerCase()==="input"}function Ev(u){return!!(u.metaKey||u.altKey||u.ctrlKey||u.shiftKey)}function Nv(u,r){return u.button===0&&(!r||r==="_self")&&!Ev(u)}var cs=null;function Tv(){if(cs===null)try{new FormData(document.createElement("form"),0),cs=!1}catch{cs=!0}return cs}var Rv=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Xc(u){return u!=null&&!Rv.has(u)?(Ot(!1,`"${u}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${fs}"`),null):u}function Av(u,r){let d,o,m,h,v;if(Sv(u)){let C=u.getAttribute("action");o=C?rl(C,r):null,d=u.getAttribute("method")||ds,m=Xc(u.getAttribute("enctype"))||fs,h=new FormData(u)}else if(bv(u)||Cv(u)&&(u.type==="submit"||u.type==="image")){let C=u.form;if(C==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let x=u.getAttribute("formaction")||C.getAttribute("action");if(o=x?rl(x,r):null,d=u.getAttribute("formmethod")||C.getAttribute("method")||ds,m=Xc(u.getAttribute("formenctype"))||Xc(C.getAttribute("enctype"))||fs,h=new FormData(C,u),!Tv()){let{name:y,type:D,value:R}=u;if(D==="image"){let k=y?`${y}.`:"";h.append(`${k}x`,"0"),h.append(`${k}y`,"0")}else y&&h.append(y,R)}}else{if(ps(u))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');d=ds,o=null,m=fs,v=u}return h&&m==="text/plain"&&(v=h,h=void 0),{action:o,method:d.toLowerCase(),encType:m,formData:h,body:v}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function $c(u,r){if(u===!1||u===null||typeof u>"u")throw new Error(r)}function Mv(u,r,d,o){let m=typeof u=="string"?new URL(u,typeof window>"u"?"server://singlefetch/":window.location.origin):u;return d?m.pathname.endsWith("/")?m.pathname=`${m.pathname}_.${o}`:m.pathname=`${m.pathname}.${o}`:m.pathname==="/"?m.pathname=`_root.${o}`:r&&rl(m.pathname,r)==="/"?m.pathname=`${r.replace(/\/$/,"")}/_root.${o}`:m.pathname=`${m.pathname.replace(/\/$/,"")}.${o}`,m}async function Dv(u,r){if(u.id in r)return r[u.id];try{let d=await import(u.module);return r[u.id]=d,d}catch(d){return console.error(`Error loading route module \`${u.module}\`, reloading page...`),console.error(d),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function zv(u){return u==null?!1:u.href==null?u.rel==="preload"&&typeof u.imageSrcSet=="string"&&typeof u.imageSizes=="string":typeof u.rel=="string"&&typeof u.href=="string"}async function Ov(u,r,d){let o=await Promise.all(u.map(async m=>{let h=r.routes[m.route.id];if(h){let v=await Dv(h,d);return v.links?v.links():[]}return[]}));return Hv(o.flat(1).filter(zv).filter(m=>m.rel==="stylesheet"||m.rel==="preload").map(m=>m.rel==="stylesheet"?{...m,rel:"prefetch",as:"style"}:{...m,rel:"prefetch"}))}function ph(u,r,d,o,m,h){let v=(x,y)=>d[y]?x.route.id!==d[y].route.id:!0,C=(x,y)=>d[y].pathname!==x.pathname||d[y].route.path?.endsWith("*")&&d[y].params["*"]!==x.params["*"];return h==="assets"?r.filter((x,y)=>v(x,y)||C(x,y)):h==="data"?r.filter((x,y)=>{let D=o.routes[x.route.id];if(!D||!D.hasLoader)return!1;if(v(x,y)||C(x,y))return!0;if(x.route.shouldRevalidate){let R=x.route.shouldRevalidate({currentUrl:new URL(m.pathname+m.search+m.hash,window.origin),currentParams:d[0]?.params||{},nextUrl:new URL(u,window.origin),nextParams:x.params,defaultShouldRevalidate:!0});if(typeof R=="boolean")return R}return!0}):[]}function Uv(u,r,{includeHydrateFallback:d}={}){return _v(u.map(o=>{let m=r.routes[o.route.id];if(!m)return[];let h=[m.module];return m.clientActionModule&&(h=h.concat(m.clientActionModule)),m.clientLoaderModule&&(h=h.concat(m.clientLoaderModule)),d&&m.hydrateFallbackModule&&(h=h.concat(m.hydrateFallbackModule)),m.imports&&(h=h.concat(m.imports)),h}).flat(1))}function _v(u){return[...new Set(u)]}function Lv(u){let r={},d=Object.keys(u).sort();for(let o of d)r[o]=u[o];return r}function Hv(u,r){let d=new Set;return new Set(r),u.reduce((o,m)=>{let h=JSON.stringify(Lv(m));return d.has(h)||(d.add(h),o.push({key:h,link:m})),o},[])}function qh(){let u=b.useContext(Yn);return $c(u,"You must render this element inside a <DataRouterContext.Provider> element"),u}function kv(){let u=b.useContext(ms);return $c(u,"You must render this element inside a <DataRouterStateContext.Provider> element"),u}var Fc=b.createContext(void 0);Fc.displayName="FrameworkContext";function wh(){let u=b.useContext(Fc);return $c(u,"You must render this element inside a <HydratedRouter> element"),u}function Bv(u,r){let d=b.useContext(Fc),[o,m]=b.useState(!1),[h,v]=b.useState(!1),{onFocus:C,onBlur:x,onMouseEnter:y,onMouseLeave:D,onTouchStart:R}=r,k=b.useRef(null);b.useEffect(()=>{if(u==="render"&&v(!0),u==="viewport"){let w=J=>{J.forEach(G=>{v(G.isIntersecting)})},V=new IntersectionObserver(w,{threshold:.5});return k.current&&V.observe(k.current),()=>{V.disconnect()}}},[u]),b.useEffect(()=>{if(o){let w=setTimeout(()=>{v(!0)},100);return()=>{clearTimeout(w)}}},[o]);let Q=()=>{m(!0)},X=()=>{m(!1),v(!1)};return d?u!=="intent"?[h,k,{}]:[h,k,{onFocus:qa(C,Q),onBlur:qa(x,X),onMouseEnter:qa(y,Q),onMouseLeave:qa(D,X),onTouchStart:qa(R,Q)}]:[!1,k,{}]}function qa(u,r){return d=>{u&&u(d),d.defaultPrevented||r(d)}}function qv({page:u,...r}){let{router:d}=qh(),o=b.useMemo(()=>bh(d.routes,u,d.basename),[d.routes,u,d.basename]);return o?b.createElement(Gv,{page:u,matches:o,...r}):null}function wv(u){let{manifest:r,routeModules:d}=wh(),[o,m]=b.useState([]);return b.useEffect(()=>{let h=!1;return Ov(u,r,d).then(v=>{h||m(v)}),()=>{h=!0}},[u,r,d]),o}function Gv({page:u,matches:r,...d}){let o=Hl(),{future:m,manifest:h,routeModules:v}=wh(),{basename:C}=qh(),{loaderData:x,matches:y}=kv(),D=b.useMemo(()=>ph(u,r,y,h,o,"data"),[u,r,y,h,o]),R=b.useMemo(()=>ph(u,r,y,h,o,"assets"),[u,r,y,h,o]),k=b.useMemo(()=>{if(u===o.pathname+o.search+o.hash)return[];let w=new Set,V=!1;if(r.forEach(G=>{let F=h.routes[G.route.id];!F||!F.hasLoader||(!D.some(he=>he.route.id===G.route.id)&&G.route.id in x&&v[G.route.id]?.shouldRevalidate||F.hasClientLoader?V=!0:w.add(G.route.id))}),w.size===0)return[];let J=Mv(u,C,m.unstable_trailingSlashAwareDataRequests,"data");return V&&w.size>0&&J.searchParams.set("_routes",r.filter(G=>w.has(G.route.id)).map(G=>G.route.id).join(",")),[J.pathname+J.search]},[C,m.unstable_trailingSlashAwareDataRequests,x,o,h,D,r,u,v]),Q=b.useMemo(()=>Uv(R,h),[R,h]),X=wv(R);return b.createElement(b.Fragment,null,k.map(w=>b.createElement("link",{key:w,rel:"prefetch",as:"fetch",href:w,...d})),Q.map(w=>b.createElement("link",{key:w,rel:"modulepreload",href:w,...d})),X.map(({key:w,link:V})=>b.createElement("link",{key:w,nonce:d.nonce,...V})))}function Xv(...u){return r=>{u.forEach(d=>{typeof d=="function"?d(r):d!=null&&(d.current=r)})}}var Yv=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{Yv&&(window.__reactRouterVersion="7.12.0")}catch{}function Qv({basename:u,children:r,unstable_useTransitions:d,window:o}){let m=b.useRef();m.current==null&&(m.current=Sx({window:o,v5Compat:!0}));let h=m.current,[v,C]=b.useState({action:h.action,location:h.location}),x=b.useCallback(y=>{d===!1?C(y):b.startTransition(()=>C(y))},[d]);return b.useLayoutEffect(()=>h.listen(x),[h,x]),b.createElement(jv,{basename:u,children:r,location:v.location,navigationType:v.action,navigator:h,unstable_useTransitions:d})}var Gh=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,ul=b.forwardRef(function({onClick:r,discover:d="render",prefetch:o="none",relative:m,reloadDocument:h,replace:v,state:C,target:x,to:y,preventScrollReset:D,viewTransition:R,unstable_defaultShouldRevalidate:k,...Q},X){let{basename:w,unstable_useTransitions:V}=b.useContext(Ut),J=typeof y=="string"&&Gh.test(y),G=Ah(y,w);y=G.to;let F=lv(y,{relative:m}),[he,ie,je]=Bv(o,Q),W=Jv(y,{replace:v,state:C,target:x,preventScrollReset:D,relative:m,viewTransition:R,unstable_defaultShouldRevalidate:k,unstable_useTransitions:V});function me(ke){r&&r(ke),ke.defaultPrevented||W(ke)}let Re=b.createElement("a",{...Q,...je,href:G.absoluteURL||F,onClick:G.isExternal||h?r:me,ref:Xv(X,ie),target:x,"data-discover":!J&&d==="render"?"true":void 0});return he&&!J?b.createElement(b.Fragment,null,Re,b.createElement(qv,{page:F})):Re});ul.displayName="Link";var ln=b.forwardRef(function({"aria-current":r="page",caseSensitive:d=!1,className:o="",end:m=!1,style:h,to:v,viewTransition:C,children:x,...y},D){let R=Ya(v,{relative:y.relative}),k=Hl(),Q=b.useContext(ms),{navigator:X,basename:w}=b.useContext(Ut),V=Q!=null&&Iv(R)&&C===!0,J=X.encodeLocation?X.encodeLocation(R).pathname:R.pathname,G=k.pathname,F=Q&&Q.navigation&&Q.navigation.location?Q.navigation.location.pathname:null;d||(G=G.toLowerCase(),F=F?F.toLowerCase():null,J=J.toLowerCase()),F&&w&&(F=rl(F,w)||F);const he=J!=="/"&&J.endsWith("/")?J.length-1:J.length;let ie=G===J||!m&&G.startsWith(J)&&G.charAt(he)==="/",je=F!=null&&(F===J||!m&&F.startsWith(J)&&F.charAt(J.length)==="/"),W={isActive:ie,isPending:je,isTransitioning:V},me=ie?r:void 0,Re;typeof o=="function"?Re=o(W):Re=[o,ie?"active":null,je?"pending":null,V?"transitioning":null].filter(Boolean).join(" ");let ke=typeof h=="function"?h(W):h;return b.createElement(ul,{...y,"aria-current":me,className:Re,ref:D,style:ke,to:v,viewTransition:C},typeof x=="function"?x(W):x)});ln.displayName="NavLink";var Vv=b.forwardRef(({discover:u="render",fetcherKey:r,navigate:d,reloadDocument:o,replace:m,state:h,method:v=ds,action:C,onSubmit:x,relative:y,preventScrollReset:D,viewTransition:R,unstable_defaultShouldRevalidate:k,...Q},X)=>{let{unstable_useTransitions:w}=b.useContext(Ut),V=Fv(),J=Wv(C,{relative:y}),G=v.toLowerCase()==="get"?"get":"post",F=typeof C=="string"&&Gh.test(C),he=ie=>{if(x&&x(ie),ie.defaultPrevented)return;ie.preventDefault();let je=ie.nativeEvent.submitter,W=je?.getAttribute("formmethod")||v,me=()=>V(je||ie.currentTarget,{fetcherKey:r,method:W,navigate:d,replace:m,state:h,relative:y,preventScrollReset:D,viewTransition:R,unstable_defaultShouldRevalidate:k});w&&d!==!1?b.startTransition(()=>me()):me()};return b.createElement("form",{ref:X,method:G,action:J,onSubmit:o?x:he,...Q,"data-discover":!F&&u==="render"?"true":void 0})});Vv.displayName="Form";function Zv(u){return`${u} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Xh(u){let r=b.useContext(Yn);return Oe(r,Zv(u)),r}function Jv(u,{target:r,replace:d,state:o,preventScrollReset:m,relative:h,viewTransition:v,unstable_defaultShouldRevalidate:C,unstable_useTransitions:x}={}){let y=_h(),D=Hl(),R=Ya(u,{relative:h});return b.useCallback(k=>{if(Nv(k,r)){k.preventDefault();let Q=d!==void 0?d:wa(D)===wa(R),X=()=>y(u,{replace:Q,state:o,preventScrollReset:m,relative:h,viewTransition:v,unstable_defaultShouldRevalidate:C});x?b.startTransition(()=>X()):X()}},[D,y,R,d,o,r,u,m,h,v,C,x])}var Kv=0,$v=()=>`__${String(++Kv)}__`;function Fv(){let{router:u}=Xh("useSubmit"),{basename:r}=b.useContext(Ut),d=pv(),o=u.fetch,m=u.navigate;return b.useCallback(async(h,v={})=>{let{action:C,method:x,encType:y,formData:D,body:R}=Av(h,r);if(v.navigate===!1){let k=v.fetcherKey||$v();await o(k,d,v.action||C,{unstable_defaultShouldRevalidate:v.unstable_defaultShouldRevalidate,preventScrollReset:v.preventScrollReset,formData:D,body:R,formMethod:v.method||x,formEncType:v.encType||y,flushSync:v.flushSync})}else await m(v.action||C,{unstable_defaultShouldRevalidate:v.unstable_defaultShouldRevalidate,preventScrollReset:v.preventScrollReset,formData:D,body:R,formMethod:v.method||x,formEncType:v.encType||y,replace:v.replace,state:v.state,fromRouteId:d,flushSync:v.flushSync,viewTransition:v.viewTransition})},[o,m,r,d])}function Wv(u,{relative:r}={}){let{basename:d}=b.useContext(Ut),o=b.useContext(Xt);Oe(o,"useFormAction must be used inside a RouteContext");let[m]=o.matches.slice(-1),h={...Ya(u||".",{relative:r})},v=Hl();if(u==null){h.search=v.search;let C=new URLSearchParams(h.search),x=C.getAll("index");if(x.some(D=>D==="")){C.delete("index"),x.filter(R=>R).forEach(R=>C.append("index",R));let D=C.toString();h.search=D?`?${D}`:""}}return(!u||u===".")&&m.route.index&&(h.search=h.search?h.search.replace(/^\?/,"?index&"):"?index"),d!=="/"&&(h.pathname=h.pathname==="/"?d:cl([d,h.pathname])),wa(h)}function Iv(u,{relative:r}={}){let d=b.useContext(Dh);Oe(d!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:o}=Xh("useViewTransitionState"),m=Ya(u,{relative:r});if(!d.isTransitioning)return!1;let h=rl(d.currentLocation.pathname,o)||d.currentLocation.pathname,v=rl(d.nextLocation.pathname,o)||d.nextLocation.pathname;return hs(m.pathname,v)!=null||hs(m.pathname,h)!=null}function Pv(){return n.jsxs("div",{className:"home-layout",children:[n.jsxs("header",{className:"home-header",children:[n.jsxs(ln,{to:"/",className:"logo",children:[n.jsx("i",{className:"fa-brands fa-react logo-icon"}),n.jsx("span",{children:"SBS React"})]}),n.jsxs("nav",{className:"home-nav",children:[n.jsx(ln,{to:"/",end:!0,children:"홈"}),n.jsx(ln,{to:"/learn",children:"학습하기"})]})]}),n.jsx("main",{className:"home-main",children:n.jsx(Bh,{})}),n.jsx("footer",{className:"home-footer",children:n.jsx("p",{children:"SBS React - React 학습 플랫폼"})})]})}const ey=[{id:"basics",title:"기초",icon:"fa-solid fa-book",level:1,lessons:[{path:"/learn/basics/jsx",name:"JSX 문법",xp:100},{path:"/learn/basics/components",name:"컴포넌트",xp:100},{path:"/learn/basics/props",name:"Props",xp:100},{path:"/learn/basics/rendering",name:"조건부 렌더링",xp:150},{path:"/learn/basics/lists",name:"리스트와 Key",xp:150}]},{id:"hooks",title:"Hooks",icon:"fa-solid fa-anchor",level:2,lessons:[{path:"/learn/hooks/usestate",name:"useState",xp:200},{path:"/learn/hooks/useeffect",name:"useEffect",xp:200},{path:"/learn/hooks/useref",name:"useRef",xp:200},{path:"/learn/hooks/usememo",name:"useMemo",xp:250},{path:"/learn/hooks/usecallback",name:"useCallback",xp:250},{path:"/learn/hooks/custom",name:"커스텀 훅",xp:300}]},{id:"components",title:"컴포넌트 패턴",icon:"fa-solid fa-puzzle-piece",level:3,lessons:[{path:"/learn/comps/components",name:"합성",xp:250},{path:"/learn/comps/controlled",name:"제어 컴포넌트",xp:250},{path:"/learn/comps/events",name:"이벤트 핸들링",xp:200},{path:"/learn/comps/forms",name:"폼 관리",xp:300}]},{id:"advanced",title:"심화",icon:"fa-solid fa-rocket",level:4,lessons:[{path:"/learn/advanced/context",name:"Context API",xp:350},{path:"/learn/advanced/reducer",name:"useReducer",xp:350},{path:"/learn/advanced/performance",name:"성능 최적화",xp:400},{path:"/learn/advanced/patterns",name:"고급 패턴",xp:400},{path:"/learn/advanced/suspense",name:"Suspense",xp:450}]},{id:"practice",title:"실전 프로젝트",icon:"fa-solid fa-laptop-code",level:5,lessons:[{path:"/learn/practice/todo",name:"투두 앱",xp:500},{path:"/learn/practice/quiz",name:"퀴즈 앱",xp:500},{path:"/learn/practice/shop",name:"쇼핑몰",xp:600}]}];function ty(){const u=Hl(),[r,d]=b.useState("basics"),[o]=b.useState([]),m=1250,h=Math.floor(m/500)+1,v=h*500-m;return n.jsxs("div",{className:"learn-layout",children:[n.jsxs("header",{className:"learn-header",children:[n.jsxs(ln,{to:"/",className:"logo",children:[n.jsx("i",{className:"fa-brands fa-react logo-icon"}),n.jsx("span",{children:"SBS React"})]}),n.jsxs("div",{className:"player-stats",children:[n.jsxs("div",{className:"stat-item",children:[n.jsx("i",{className:"fa-solid fa-star"}),n.jsxs("span",{className:"stat-value",children:["Lv.",h]})]}),n.jsxs("div",{className:"xp-bar-container",children:[n.jsx("div",{className:"xp-bar",children:n.jsx("div",{className:"xp-fill",style:{width:`${(500-v)/500*100}%`}})}),n.jsxs("span",{className:"xp-text",children:[m," XP"]})]}),n.jsxs("div",{className:"stat-item",children:[n.jsx("i",{className:"fa-solid fa-trophy"}),n.jsx("span",{className:"stat-value",children:o.length})]})]}),n.jsxs(ln,{to:"/",className:"back-home",children:[n.jsx("i",{className:"fa-solid fa-house"}),n.jsx("span",{children:"홈으로"})]})]}),n.jsxs("div",{className:"learn-container",children:[n.jsxs("aside",{className:"learn-sidebar",children:[n.jsxs("div",{className:"sidebar-title",children:[n.jsx("i",{className:"fa-solid fa-graduation-cap"}),n.jsx("span",{children:"학습 목차"})]}),n.jsx("nav",{className:"chapter-nav",children:ey.map(C=>n.jsxs("div",{className:"chapter-group",children:[n.jsxs("button",{className:`chapter-header ${r===C.id?"expanded":""}`,onClick:()=>d(r===C.id?null:C.id),children:[n.jsxs("div",{className:"chapter-info",children:[n.jsx("i",{className:`chapter-icon ${C.icon}`}),n.jsx("span",{className:"chapter-title",children:C.title})]}),n.jsxs("div",{className:"chapter-meta",children:[n.jsxs("span",{className:"chapter-level",children:["Lv.",C.level]}),n.jsx("i",{className:`fa-solid ${r===C.id?"fa-chevron-down":"fa-chevron-right"} expand-icon`})]})]}),r===C.id&&n.jsx("div",{className:"lesson-list",children:C.lessons.map((x,y)=>{const D=x.path.replace("/",""),R=o.includes(D),k=u.pathname===x.path;return n.jsxs(ln,{to:x.path,className:`lesson-item ${R?"completed":""} ${k?"active":""}`,children:[n.jsx("span",{className:"lesson-status",children:R?n.jsx("i",{className:"fa-solid fa-check"}):n.jsx("i",{className:"fa-regular fa-circle"})}),n.jsx("span",{className:"lesson-name",children:x.name}),n.jsxs("span",{className:"lesson-xp",children:["+",x.xp]})]},y)})})]},C.id))}),n.jsx("div",{className:"sidebar-footer",children:n.jsxs("div",{className:"progress-overview",children:[n.jsx("span",{children:"전체 진행률"}),n.jsx("div",{className:"progress-bar",children:n.jsx("div",{className:"progress-fill",style:{width:"15%"}})}),n.jsx("span",{children:"15%"})]})})]}),n.jsx("main",{className:"learn-main",children:n.jsx(Bh,{})})]})]})}function ly(){return b.useEffect(()=>{window.Prism&&window.Prism.highlightAll()},[]),n.jsxs("div",{className:"home",children:[n.jsxs("section",{className:"hero-section",children:[n.jsxs("h1",{children:[n.jsx("i",{className:"fa-brands fa-react hero-react-icon"}),"SBS React"]}),n.jsx("p",{className:"hero-subtitle",children:"현대 웹 개발의 핵심, React를 마스터하세요"}),n.jsx("p",{className:"hero-desc",children:"Facebook이 만든 사용자 인터페이스 구축을 위한 JavaScript 라이브러리"}),n.jsxs("div",{className:"hero-buttons",children:[n.jsxs(ul,{to:"/learn/basics/jsx",className:"btn-primary",children:[n.jsx("i",{className:"fa-solid fa-play"}),"학습 시작하기"]}),n.jsxs("a",{href:"#about-react",className:"btn-secondary",children:[n.jsx("i",{className:"fa-solid fa-info-circle"}),"React란?"]})]})]}),n.jsxs("section",{id:"about-react",className:"about-section",children:[n.jsx("div",{className:"section-header",children:n.jsxs("h2",{children:[n.jsx("i",{className:"fa-solid fa-lightbulb"})," React란 무엇인가?"]})}),n.jsxs("div",{className:"about-content",children:[n.jsxs("div",{className:"about-text",children:[n.jsxs("p",{children:[n.jsx("strong",{children:"React"}),"는 2013년 Facebook(현 Meta)에서 개발한 오픈소스 JavaScript 라이브러리입니다. 사용자 인터페이스(UI)를 구축하기 위해 설계되었으며, 특히 싱글 페이지 애플리케이션(SPA)에서 빠르고 인터랙티브한 사용자 경험을 제공합니다."]}),n.jsxs("p",{children:["현재 ",n.jsx("strong",{children:"Netflix, Instagram, Airbnb, Discord, Uber"})," 등 세계적인 기업들이 React를 사용하고 있으며, 프론트엔드 개발 분야에서 가장 인기 있는 라이브러리 중 하나입니다."]})]}),n.jsxs("div",{className:"stats-grid",children:[n.jsxs("div",{className:"stat-card",children:[n.jsx("i",{className:"fa-solid fa-download"}),n.jsx("span",{className:"stat-number",children:"20M+"}),n.jsx("span",{className:"stat-label",children:"주간 다운로드"})]}),n.jsxs("div",{className:"stat-card",children:[n.jsx("i",{className:"fa-solid fa-star"}),n.jsx("span",{className:"stat-number",children:"220K+"}),n.jsx("span",{className:"stat-label",children:"GitHub Stars"})]}),n.jsxs("div",{className:"stat-card",children:[n.jsx("i",{className:"fa-solid fa-users"}),n.jsx("span",{className:"stat-number",children:"1,600+"}),n.jsx("span",{className:"stat-label",children:"Contributors"})]}),n.jsxs("div",{className:"stat-card",children:[n.jsx("i",{className:"fa-solid fa-building"}),n.jsx("span",{className:"stat-number",children:"10M+"}),n.jsx("span",{className:"stat-label",children:"사용 웹사이트"})]})]})]})]}),n.jsxs("section",{className:"features-section",children:[n.jsx("div",{className:"section-header",children:n.jsxs("h2",{children:[n.jsx("i",{className:"fa-solid fa-bolt"})," React의 핵심 특징"]})}),n.jsxs("div",{className:"features-grid",children:[n.jsxs("div",{className:"feature-card",children:[n.jsx("div",{className:"feature-icon",children:n.jsx("i",{className:"fa-solid fa-cubes"})}),n.jsx("h3",{children:"컴포넌트 기반"}),n.jsx("p",{children:"UI를 독립적이고 재사용 가능한 조각(컴포넌트)으로 나누어 개발합니다. 레고 블록처럼 조합하여 복잡한 UI를 구성할 수 있습니다."}),n.jsx("pre",{children:n.jsx("code",{className:"language-jsx",children:`function Button({ text, onClick }) {
  return (
    <button onClick={onClick}>
      {text}
    </button>
  )
}`})})]}),n.jsxs("div",{className:"feature-card",children:[n.jsx("div",{className:"feature-icon",children:n.jsx("i",{className:"fa-solid fa-code"})}),n.jsx("h3",{children:"JSX 문법"}),n.jsx("p",{children:"JavaScript 안에서 HTML과 유사한 문법을 사용합니다. UI 구조를 직관적으로 표현할 수 있어 코드 가독성이 높아집니다."}),n.jsx("pre",{children:n.jsx("code",{className:"language-jsx",children:`const element = (
  <div className="greeting">
    <h1>Hello, {name}!</h1>
    <p>Welcome to React</p>
  </div>
)`})})]}),n.jsxs("div",{className:"feature-card",children:[n.jsx("div",{className:"feature-icon",children:n.jsx("i",{className:"fa-solid fa-bolt"})}),n.jsx("h3",{children:"Virtual DOM"}),n.jsx("p",{children:"실제 DOM 대신 가상 DOM을 사용하여 변경된 부분만 효율적으로 업데이트합니다. 이를 통해 빠른 렌더링 성능을 제공합니다."}),n.jsx("pre",{children:n.jsx("code",{className:"language-jsx",children:`// React가 자동으로 최적화
setState({ count: count + 1 })
// 변경된 부분만 DOM 업데이트`})})]}),n.jsxs("div",{className:"feature-card",children:[n.jsx("div",{className:"feature-icon",children:n.jsx("i",{className:"fa-solid fa-arrow-down"})}),n.jsx("h3",{children:"단방향 데이터 흐름"}),n.jsx("p",{children:"데이터가 항상 부모에서 자식으로 흐릅니다. 이를 통해 데이터의 흐름을 예측하기 쉽고 디버깅이 용이합니다."}),n.jsx("pre",{children:n.jsx("code",{className:"language-jsx",children:`<Parent>
  <Child data={parentData} />
  {/* 부모 → 자식으로 전달 */}
</Parent>`})})]})]})]}),n.jsxs("section",{className:"why-section",children:[n.jsx("div",{className:"section-header",children:n.jsxs("h2",{children:[n.jsx("i",{className:"fa-solid fa-question-circle"})," 왜 React를 배워야 할까요?"]})}),n.jsxs("div",{className:"why-grid",children:[n.jsxs("div",{className:"why-card",children:[n.jsx("i",{className:"fa-solid fa-briefcase"}),n.jsx("h3",{children:"높은 취업 수요"}),n.jsx("p",{children:"프론트엔드 채용 공고의 대부분이 React 경험을 요구합니다. React를 배우면 취업 경쟁력이 크게 향상됩니다."})]}),n.jsxs("div",{className:"why-card",children:[n.jsx("i",{className:"fa-solid fa-puzzle-piece"}),n.jsx("h3",{children:"풍부한 생태계"}),n.jsx("p",{children:"Redux, Next.js, React Native 등 강력한 도구와 라이브러리가 함께합니다."})]}),n.jsxs("div",{className:"why-card",children:[n.jsx("i",{className:"fa-solid fa-people-group"}),n.jsx("h3",{children:"거대한 커뮤니티"}),n.jsx("p",{children:"수백만 명의 개발자 커뮤니티가 있어 문제 해결과 학습 자료를 쉽게 찾을 수 있습니다."})]}),n.jsxs("div",{className:"why-card",children:[n.jsx("i",{className:"fa-solid fa-mobile-screen"}),n.jsx("h3",{children:"React Native"}),n.jsx("p",{children:"웹뿐만 아니라 React Native로 iOS, Android 모바일 앱도 개발할 수 있습니다."})]})]})]}),n.jsxs("section",{className:"code-section",children:[n.jsx("div",{className:"section-header",children:n.jsxs("h2",{children:[n.jsx("i",{className:"fa-solid fa-code"})," React 코드 맛보기"]})}),n.jsxs("div",{className:"code-demo",children:[n.jsxs("div",{className:"code-block",children:[n.jsxs("div",{className:"code-header",children:[n.jsxs("div",{className:"code-dots",children:[n.jsx("span",{}),n.jsx("span",{}),n.jsx("span",{})]}),n.jsx("span",{className:"code-filename",children:"Counter.jsx"})]}),n.jsx("pre",{children:n.jsx("code",{className:"language-jsx",children:`import { useState } from 'react'

function Counter() {
  const [count, setCount] = useState(0)

  const increment = () => {
    setCount(prevCount => prevCount + 1)
  }

  const decrement = () => {
    setCount(prevCount => prevCount - 1)
  }

  return (
    <div className="counter">
      <h2>카운터</h2>
      <p className="count">{count}</p>
      <div className="buttons">
        <button onClick={decrement}>
          <i className="fa-solid fa-minus"></i>
        </button>
        <button onClick={increment}>
          <i className="fa-solid fa-plus"></i>
        </button>
      </div>
    </div>
  )
}

export default Counter`})})]}),n.jsxs("div",{className:"code-explanation",children:[n.jsx("h3",{children:"코드 설명"}),n.jsxs("ul",{children:[n.jsxs("li",{children:[n.jsx("i",{className:"fa-solid fa-1"}),n.jsx("strong",{children:"useState"}),": 컴포넌트의 상태를 관리하는 Hook"]}),n.jsxs("li",{children:[n.jsx("i",{className:"fa-solid fa-2"}),n.jsx("strong",{children:"count"}),": 현재 카운터 값을 저장하는 상태 변수"]}),n.jsxs("li",{children:[n.jsx("i",{className:"fa-solid fa-3"}),n.jsx("strong",{children:"setCount"}),": count 값을 변경하는 함수"]}),n.jsxs("li",{children:[n.jsx("i",{className:"fa-solid fa-4"}),n.jsx("strong",{children:"onClick"}),": 버튼 클릭 시 실행될 함수 지정"]}),n.jsxs("li",{children:[n.jsx("i",{className:"fa-solid fa-5"}),n.jsx("strong",{children:"JSX"}),": HTML과 유사한 문법으로 UI 작성"]})]})]})]})]}),n.jsxs("section",{className:"roadmap-section",children:[n.jsxs("div",{className:"section-header",children:[n.jsxs("h2",{children:[n.jsx("i",{className:"fa-solid fa-map"})," 학습 로드맵"]}),n.jsx("p",{children:"단계별로 React를 마스터하세요"})]}),n.jsxs("div",{className:"roadmap-grid",children:[n.jsxs(ul,{to:"/learn/basics/jsx",className:"roadmap-card",children:[n.jsx("div",{className:"roadmap-level",children:"Lv.1"}),n.jsx("div",{className:"roadmap-icon",children:n.jsx("i",{className:"fa-solid fa-book"})}),n.jsx("h3",{children:"기초"}),n.jsx("p",{children:"JSX, 컴포넌트, Props의 기본 개념을 배웁니다"}),n.jsxs("div",{className:"roadmap-meta",children:[n.jsxs("span",{children:[n.jsx("i",{className:"fa-solid fa-list"})," 5개 레슨"]}),n.jsxs("span",{children:[n.jsx("i",{className:"fa-solid fa-gem"})," 600 XP"]})]})]}),n.jsxs(ul,{to:"/learn/hooks/usestate",className:"roadmap-card",children:[n.jsx("div",{className:"roadmap-level",children:"Lv.2"}),n.jsx("div",{className:"roadmap-icon",children:n.jsx("i",{className:"fa-solid fa-anchor"})}),n.jsx("h3",{children:"Hooks"}),n.jsx("p",{children:"useState, useEffect 등 핵심 훅들을 마스터합니다"}),n.jsxs("div",{className:"roadmap-meta",children:[n.jsxs("span",{children:[n.jsx("i",{className:"fa-solid fa-list"})," 6개 레슨"]}),n.jsxs("span",{children:[n.jsx("i",{className:"fa-solid fa-gem"})," 1,400 XP"]})]})]}),n.jsxs(ul,{to:"/learn/components/composition",className:"roadmap-card",children:[n.jsx("div",{className:"roadmap-level",children:"Lv.3"}),n.jsx("div",{className:"roadmap-icon",children:n.jsx("i",{className:"fa-solid fa-puzzle-piece"})}),n.jsx("h3",{children:"컴포넌트 패턴"}),n.jsx("p",{children:"재사용 가능한 컴포넌트 설계 방법을 익힙니다"}),n.jsxs("div",{className:"roadmap-meta",children:[n.jsxs("span",{children:[n.jsx("i",{className:"fa-solid fa-list"})," 4개 레슨"]}),n.jsxs("span",{children:[n.jsx("i",{className:"fa-solid fa-gem"})," 1,000 XP"]})]})]}),n.jsxs(ul,{to:"/learn/advanced/context",className:"roadmap-card",children:[n.jsx("div",{className:"roadmap-level",children:"Lv.4"}),n.jsx("div",{className:"roadmap-icon",children:n.jsx("i",{className:"fa-solid fa-rocket"})}),n.jsx("h3",{children:"심화"}),n.jsx("p",{children:"Context, Reducer, 성능 최적화를 배웁니다"}),n.jsxs("div",{className:"roadmap-meta",children:[n.jsxs("span",{children:[n.jsx("i",{className:"fa-solid fa-list"})," 5개 레슨"]}),n.jsxs("span",{children:[n.jsx("i",{className:"fa-solid fa-gem"})," 1,950 XP"]})]})]}),n.jsxs(ul,{to:"/learn/practice/todo",className:"roadmap-card",children:[n.jsx("div",{className:"roadmap-level",children:"Lv.5"}),n.jsx("div",{className:"roadmap-icon",children:n.jsx("i",{className:"fa-solid fa-gamepad"})}),n.jsx("h3",{children:"실전 프로젝트"}),n.jsx("p",{children:"배운 것을 활용한 실전 프로젝트를 만듭니다"}),n.jsxs("div",{className:"roadmap-meta",children:[n.jsxs("span",{children:[n.jsx("i",{className:"fa-solid fa-list"})," 3개 레슨"]}),n.jsxs("span",{children:[n.jsx("i",{className:"fa-solid fa-gem"})," 1,600 XP"]})]})]})]})]}),n.jsx("section",{className:"cta-section",children:n.jsxs("div",{className:"cta-content",children:[n.jsx("h2",{children:"지금 바로 React 여정을 시작하세요!"}),n.jsx("p",{children:"23개의 레슨과 6,550 XP가 당신을 기다리고 있습니다"}),n.jsxs(ul,{to:"/learn/basics/jsx",className:"btn-primary large",children:[n.jsx("i",{className:"fa-solid fa-rocket"}),"학습 시작하기"]})]})})]})}function Ue({title:u,subtitle:r,xp:d,prevLesson:o,nextLesson:m,children:h}){const v=_h();return b.useEffect(()=>{window.Prism&&window.Prism.highlightAll()},[]),n.jsxs("div",{className:"lesson-layout",children:[n.jsxs("div",{className:"lesson-header",children:[n.jsxs("div",{className:"lesson-badge",children:[n.jsx("i",{className:"fa-solid fa-gem"}),n.jsxs("span",{children:["+",d," XP"]})]}),n.jsx("h1",{children:u}),n.jsx("p",{className:"lesson-subtitle",children:r})]}),n.jsx("div",{className:"lesson-content",children:h}),n.jsxs("div",{className:"lesson-navigation",children:[o?n.jsxs("button",{className:"nav-btn prev",onClick:()=>v(o.path),children:[n.jsx("i",{className:"fa-solid fa-arrow-left nav-arrow"}),n.jsxs("span",{className:"nav-text",children:[n.jsx("span",{className:"nav-label",children:"이전"}),n.jsx("span",{className:"nav-title",children:o.name})]})]}):n.jsx("div",{}),n.jsxs("button",{className:"complete-btn",children:[n.jsx("i",{className:"fa-solid fa-check"}),"완료하기"]}),m?n.jsxs("button",{className:"nav-btn next",onClick:()=>v(m.path),children:[n.jsxs("span",{className:"nav-text",children:[n.jsx("span",{className:"nav-label",children:"다음"}),n.jsx("span",{className:"nav-title",children:m.name})]}),n.jsx("i",{className:"fa-solid fa-arrow-right nav-arrow"})]}):n.jsx("div",{})]})]})}function A({title:u,children:r}){return b.useEffect(()=>{window.Prism&&window.Prism.highlightAll()},[r]),n.jsxs("div",{className:"code-block",children:[n.jsxs("div",{className:"code-header",children:[n.jsxs("div",{className:"code-dots",children:[n.jsx("span",{}),n.jsx("span",{}),n.jsx("span",{})]}),u&&n.jsx("span",{className:"code-filename",children:u})]}),n.jsx("pre",{children:n.jsx("code",{className:"language-jsx",children:r})})]})}function Y({type:u="info",title:r,children:d}){const o={info:"fa-solid fa-lightbulb",warning:"fa-solid fa-triangle-exclamation",tip:"fa-solid fa-wand-magic-sparkles",note:"fa-solid fa-note-sticky"};return n.jsxs("div",{className:`info-box ${u}`,children:[n.jsxs("div",{className:"info-header",children:[n.jsx("i",{className:o[u]}),n.jsx("span",{className:"info-title",children:r})]}),n.jsx("div",{className:"info-content",children:d})]})}function _e({question:u,options:r,answer:d,explanation:o}){return n.jsxs("div",{className:"quiz-box",children:[n.jsxs("div",{className:"quiz-header",children:[n.jsx("i",{className:"fa-solid fa-circle-question"}),n.jsx("span",{children:"퀴즈"})]}),n.jsx("p",{className:"quiz-question",children:u}),n.jsx("div",{className:"quiz-options",children:r.map((m,h)=>n.jsxs("button",{className:"quiz-option",children:[n.jsx("span",{className:"option-letter",children:String.fromCharCode(65+h)}),n.jsx("span",{children:m})]},h))})]})}function ny(){return n.jsxs(Ue,{title:"JSX 문법",subtitle:"JavaScript 안에서 HTML처럼 UI를 작성하는 방법을 배웁니다",xp:100,nextLesson:{path:"/learn/basics/components",name:"컴포넌트",xp:100},children:[n.jsxs("section",{children:[n.jsx("h2",{children:"JSX란 무엇인가요?"}),n.jsx("p",{children:"JSX는 JavaScript XML의 약자로, JavaScript 코드 안에서 HTML과 유사한 문법을 사용할 수 있게 해주는 React의 문법 확장입니다. JSX를 사용하면 UI 구조를 더 직관적으로 표현할 수 있습니다."}),n.jsx(A,{title:"JSX 기본 예시",children:`const element = (
  <div className="greeting">
    <h1>안녕하세요!</h1>
    <p>React의 세계에 오신 것을 환영합니다.</p>
  </div>
)`}),n.jsx(Y,{type:"info",title:"알고 계셨나요?",children:"JSX는 필수가 아닙니다! 하지만 대부분의 React 개발자들이 JSX를 선호합니다. JSX 없이 React.createElement()를 직접 호출할 수도 있습니다."})]}),n.jsxs("section",{children:[n.jsx("h2",{children:"JSX 규칙"}),n.jsx("h3",{children:"1. 하나의 루트 요소"}),n.jsx("p",{children:"JSX에서는 반드시 하나의 부모 요소로 감싸야 합니다."}),n.jsx(A,{title:"올바른 예시",children:`// ✅ 올바름 - 하나의 div로 감쌈
return (
  <div>
    <h1>제목</h1>
    <p>내용</p>
  </div>
)

// ✅ 올바름 - Fragment 사용
return (
  <>
    <h1>제목</h1>
    <p>내용</p>
  </>
)`}),n.jsx("h3",{children:"2. 모든 태그는 닫아야 함"}),n.jsx("p",{children:"HTML에서는 img, br 등의 태그를 닫지 않아도 되지만, JSX에서는 반드시 닫아야 합니다."}),n.jsx(A,{title:"태그 닫기",children:`// ❌ 에러 발생
<img src="photo.jpg">
<br>
<input type="text">

// ✅ 올바름
<img src="photo.jpg" />
<br />
<input type="text" />`}),n.jsx("h3",{children:"3. camelCase로 속성 작성"}),n.jsx("p",{children:"JSX에서 대부분의 HTML 속성은 camelCase로 작성합니다."}),n.jsx(A,{title:"속성 이름 변환",children:`// HTML → JSX
class → className
for → htmlFor
onclick → onClick
tabindex → tabIndex
readonly → readOnly

// 예시
<div className="container">
  <label htmlFor="name">이름:</label>
  <input id="name" tabIndex={1} readOnly />
</div>`})]}),n.jsxs("section",{children:[n.jsx("h2",{children:"JSX에서 JavaScript 사용하기"}),n.jsxs("p",{children:["중괄호 ","{ }","를 사용하면 JSX 안에서 JavaScript 표현식을 사용할 수 있습니다."]}),n.jsx(A,{title:"JavaScript 표현식 삽입",children:`function Greeting() {
  const name = "React"
  const today = new Date()

  return (
    <div>
      <h1>안녕하세요, {name}!</h1>
      <p>오늘은 {today.toLocaleDateString()}입니다.</p>
      <p>1 + 1 = {1 + 1}</p>
      <p>대문자: {name.toUpperCase()}</p>
    </div>
  )
}`}),n.jsx(Y,{type:"tip",title:"팁",children:"중괄호 안에는 표현식(expression)만 넣을 수 있습니다. if문이나 for문 같은 문장(statement)은 직접 넣을 수 없어요!"})]}),n.jsxs("section",{children:[n.jsx("h2",{children:"스타일 적용하기"}),n.jsx(A,{title:"인라인 스타일",children:`// 인라인 스타일은 객체로 전달
function StyledComponent() {
  const style = {
    backgroundColor: '#f0f0f0',
    padding: '20px',
    borderRadius: '8px',
    fontSize: '16px'  // camelCase 사용!
  }

  return (
    <div style={style}>
      스타일이 적용된 컴포넌트
    </div>
  )
}

// 또는 직접 객체 전달
<div style={{ color: 'blue', fontWeight: 'bold' }}>
  파란색 굵은 텍스트
</div>`})]}),n.jsx(_e,{question:"JSX에서 HTML의 class 속성은 무엇으로 작성해야 할까요?",options:["class","className","cssClass","htmlClass"],answer:1,explanation:"JSX에서는 class 대신 className을 사용합니다. class는 JavaScript의 예약어이기 때문입니다."})]})}function ay(){return n.jsxs(Ue,{title:"컴포넌트",subtitle:"React 애플리케이션의 기본 구성 단위인 컴포넌트를 배웁니다",xp:100,prevLesson:{path:"/learn/basics/jsx",name:"JSX 문법",xp:100},nextLesson:{path:"/learn/basics/props",name:"Props",xp:100},children:[n.jsxs("section",{children:[n.jsx("h2",{children:"컴포넌트란?"}),n.jsx("p",{children:"컴포넌트는 UI를 독립적이고 재사용 가능한 조각으로 나눈 것입니다. 레고 블록처럼 작은 컴포넌트들을 조합하여 복잡한 UI를 구성할 수 있습니다."}),n.jsx(Y,{type:"info",title:"컴포넌트의 장점",children:n.jsxs("ul",{children:[n.jsxs("li",{children:[n.jsx("strong",{children:"재사용성:"})," 한 번 만들면 여러 곳에서 사용 가능"]}),n.jsxs("li",{children:[n.jsx("strong",{children:"유지보수:"})," 독립적이라 수정이 쉬움"]}),n.jsxs("li",{children:[n.jsx("strong",{children:"가독성:"})," UI 구조를 쉽게 파악 가능"]})]})})]}),n.jsxs("section",{children:[n.jsx("h2",{children:"함수형 컴포넌트"}),n.jsx("p",{children:"현대 React에서는 함수형 컴포넌트가 표준입니다. 함수가 JSX를 반환하면 그것이 컴포넌트입니다."}),n.jsx(A,{title:"함수형 컴포넌트 선언",children:`// 일반 함수 선언
function Welcome() {
  return <h1>안녕하세요!</h1>
}

// 화살표 함수
const Welcome = () => {
  return <h1>안녕하세요!</h1>
}

// 화살표 함수 (암시적 반환)
const Welcome = () => <h1>안녕하세요!</h1>`}),n.jsx(Y,{type:"warning",title:"주의",children:"컴포넌트 이름은 반드시 대문자로 시작해야 합니다! 소문자로 시작하면 React가 HTML 태그로 인식합니다."})]}),n.jsxs("section",{children:[n.jsx("h2",{children:"컴포넌트 사용하기"}),n.jsx("p",{children:"컴포넌트는 HTML 태그처럼 사용할 수 있습니다."}),n.jsx(A,{title:"컴포넌트 조합",children:`function Header() {
  return (
    <header>
      <h1>My App</h1>
      <nav>메뉴</nav>
    </header>
  )
}

function Content() {
  return (
    <main>
      <p>본문 내용입니다.</p>
    </main>
  )
}

function Footer() {
  return (
    <footer>
      <p>© 2024 My App</p>
    </footer>
  )
}

// 컴포넌트 조합
function App() {
  return (
    <div>
      <Header />
      <Content />
      <Footer />
    </div>
  )
}`})]}),n.jsxs("section",{children:[n.jsx("h2",{children:"컴포넌트 분리하기"}),n.jsx("p",{children:"컴포넌트가 너무 커지면 작은 컴포넌트로 분리하세요. 일반적으로 하나의 컴포넌트는 하나의 역할만 담당하는 것이 좋습니다."}),n.jsx(A,{title:"컴포넌트 분리 예시",children:`// 분리 전 - 하나의 큰 컴포넌트
function UserProfile() {
  return (
    <div className="profile">
      <img src="avatar.jpg" alt="아바타" />
      <h2>홍길동</h2>
      <p>프론트엔드 개발자</p>
      <ul>
        <li>React</li>
        <li>TypeScript</li>
        <li>Node.js</li>
      </ul>
    </div>
  )
}

// 분리 후 - 작은 컴포넌트들
function Avatar({ src, alt }) {
  return <img src={src} alt={alt} className="avatar" />
}

function UserInfo({ name, role }) {
  return (
    <div className="user-info">
      <h2>{name}</h2>
      <p>{role}</p>
    </div>
  )
}

function SkillList({ skills }) {
  return (
    <ul className="skills">
      {skills.map(skill => <li key={skill}>{skill}</li>)}
    </ul>
  )
}

function UserProfile() {
  return (
    <div className="profile">
      <Avatar src="avatar.jpg" alt="아바타" />
      <UserInfo name="홍길동" role="프론트엔드 개발자" />
      <SkillList skills={['React', 'TypeScript', 'Node.js']} />
    </div>
  )
}`})]}),n.jsxs("section",{children:[n.jsx("h2",{children:"파일 구조"}),n.jsx("p",{children:"보통 하나의 컴포넌트는 하나의 파일에 작성합니다."}),n.jsx(A,{title:"파일 구조 예시",children:`src/
├── components/
│   ├── Header.jsx
│   ├── Footer.jsx
│   ├── Button.jsx
│   └── Card.jsx
├── pages/
│   ├── Home.jsx
│   ├── About.jsx
│   └── Contact.jsx
└── App.jsx

// Header.jsx
export default function Header() {
  return <header>...</header>
}

// App.jsx
import Header from './components/Header'
import Home from './pages/Home'

function App() {
  return (
    <>
      <Header />
      <Home />
    </>
  )
}`})]}),n.jsx(_e,{question:"React 컴포넌트 이름의 규칙으로 올바른 것은?",options:["소문자로 시작해야 한다","대문자로 시작해야 한다","숫자로 시작해야 한다","특수문자로 시작해야 한다"],answer:1})]})}function iy(){return n.jsxs(Ue,{title:"Props",subtitle:"부모에서 자식으로 데이터를 전달하는 방법을 배웁니다",xp:100,prevLesson:{path:"/learn/basics/components",name:"컴포넌트",xp:100},nextLesson:{path:"/learn/basics/rendering",name:"조건부 렌더링",xp:150},children:[n.jsxs("section",{children:[n.jsx("h2",{children:"Props란?"}),n.jsx("p",{children:"Props(Properties)는 부모 컴포넌트에서 자식 컴포넌트로 데이터를 전달하는 방법입니다. 함수의 매개변수처럼 컴포넌트에 값을 전달할 수 있습니다."}),n.jsx(A,{title:"Props 기본 사용법",children:`// 부모 컴포넌트
function App() {
  return (
    <div>
      <Greeting name="철수" />
      <Greeting name="영희" />
    </div>
  )
}

// 자식 컴포넌트
function Greeting(props) {
  return <h1>안녕하세요, {props.name}님!</h1>
}`})]}),n.jsxs("section",{children:[n.jsx("h2",{children:"구조 분해 할당"}),n.jsx("p",{children:"Props를 더 편리하게 사용하기 위해 구조 분해 할당을 활용할 수 있습니다."}),n.jsx(A,{title:"구조 분해 할당",children:`// 매개변수에서 직접 분해
function UserCard({ name, age, email }) {
  return (
    <div className="card">
      <h2>{name}</h2>
      <p>나이: {age}세</p>
      <p>이메일: {email}</p>
    </div>
  )
}

// 사용
<UserCard name="홍길동" age={25} email="hong@email.com" />`})]}),n.jsxs("section",{children:[n.jsx("h2",{children:"다양한 Props 타입"}),n.jsx(A,{title:"여러 타입의 Props",children:`function ProductCard({
  name,           // 문자열
  price,          // 숫자
  inStock,        // 불리언
  tags,           // 배열
  details,        // 객체
  onBuy           // 함수
}) {
  return (
    <div className="product">
      <h3>{name}</h3>
      <p>가격: {price.toLocaleString()}원</p>
      <p>재고: {inStock ? '있음' : '없음'}</p>

      <div className="tags">
        {tags.map(tag => <span key={tag}>{tag}</span>)}
      </div>

      <p>{details.description}</p>

      <button onClick={onBuy}>구매하기</button>
    </div>
  )
}

// 사용
<ProductCard
  name="맥북 프로"
  price={2500000}
  inStock={true}
  tags={['애플', '노트북', '신제품']}
  details={{ description: '최신 M3 칩 탑재' }}
  onBuy={() => alert('구매!')}
/>`})]}),n.jsxs("section",{children:[n.jsx("h2",{children:"기본값 설정"}),n.jsx("p",{children:"Props에 기본값을 설정하면 값이 전달되지 않았을 때 사용됩니다."}),n.jsx(A,{title:"Props 기본값",children:`// 방법 1: 기본 매개변수
function Button({ text = "클릭", color = "blue", size = "medium" }) {
  return (
    <button
      className={\`btn btn-\${color} btn-\${size}\`}
    >
      {text}
    </button>
  )
}

// 사용
<Button />                    // 기본값 사용
<Button text="저장" />        // text만 변경
<Button color="red" size="large" text="삭제" />

// 방법 2: defaultProps (클래스형에서 주로 사용)
Button.defaultProps = {
  text: "클릭",
  color: "blue",
  size: "medium"
}`})]}),n.jsxs("section",{children:[n.jsx("h2",{children:"children Props"}),n.jsx("p",{children:"컴포넌트 태그 사이의 내용은 children으로 전달됩니다."}),n.jsx(A,{title:"children 활용",children:`function Card({ title, children }) {
  return (
    <div className="card">
      <div className="card-header">
        <h3>{title}</h3>
      </div>
      <div className="card-body">
        {children}
      </div>
    </div>
  )
}

// 사용
<Card title="공지사항">
  <p>새로운 기능이 추가되었습니다.</p>
  <button>자세히 보기</button>
</Card>

<Card title="프로필">
  <img src="avatar.jpg" alt="프로필" />
  <h4>홍길동</h4>
</Card>`}),n.jsx(Y,{type:"tip",title:"children 활용",children:"children을 활용하면 유연하고 재사용 가능한 래퍼 컴포넌트를 만들 수 있습니다. Modal, Card, Layout 등의 컴포넌트에서 자주 사용됩니다."})]}),n.jsxs("section",{children:[n.jsx("h2",{children:"Props는 읽기 전용"}),n.jsx(A,{title:"Props 불변성",children:`// ❌ 잘못된 예 - Props 직접 수정
function Greeting({ name }) {
  name = name.toUpperCase()  // 에러! Props 수정 불가
  return <h1>{name}</h1>
}

// ✅ 올바른 예 - 새 변수 사용
function Greeting({ name }) {
  const upperName = name.toUpperCase()
  return <h1>{upperName}</h1>
}`}),n.jsx(Y,{type:"warning",title:"중요",children:"Props는 부모로부터 전달받은 것이므로 직접 수정하면 안됩니다. 데이터 흐름을 예측 가능하게 유지하기 위한 React의 규칙입니다."})]}),n.jsx(_e,{question:"Props의 특징으로 올바르지 않은 것은?",options:["부모에서 자식으로 전달된다","읽기 전용이다","자식에서 직접 수정할 수 있다","기본값을 설정할 수 있다"],answer:2})]})}function sy(){return n.jsxs(Ue,{title:"조건부 렌더링",subtitle:"상황에 따라 다른 UI를 보여주는 방법을 배웁니다",xp:150,prevLesson:{path:"/learn/basics/props",name:"Props",xp:100},nextLesson:{path:"/learn/basics/lists",name:"리스트와 Key",xp:150},children:[n.jsxs("section",{children:[n.jsx("h2",{children:"조건부 렌더링이란?"}),n.jsx("p",{children:"조건부 렌더링은 특정 조건에 따라 다른 컴포넌트나 요소를 화면에 보여주는 것입니다. JavaScript의 조건문을 그대로 활용할 수 있습니다."})]}),n.jsxs("section",{children:[n.jsx("h2",{children:"if문 사용하기"}),n.jsx(A,{title:"if문으로 조건부 렌더링",children:`function Greeting({ isLoggedIn, username }) {
  if (isLoggedIn) {
    return <h1>환영합니다, {username}님!</h1>
  }
  return <h1>로그인이 필요합니다.</h1>
}

// 사용
<Greeting isLoggedIn={true} username="홍길동" />
<Greeting isLoggedIn={false} />`})]}),n.jsxs("section",{children:[n.jsx("h2",{children:"삼항 연산자"}),n.jsx("p",{children:"JSX 내에서 간단한 조건부 렌더링에 유용합니다."}),n.jsx(A,{title:"삼항 연산자 활용",children:`function UserStatus({ isOnline }) {
  return (
    <div className="status">
      <span className={isOnline ? 'online' : 'offline'}>
        {isOnline ? '🟢 온라인' : '⚫ 오프라인'}
      </span>
    </div>
  )
}

// 더 복잡한 예시
function ProductPrice({ price, discount }) {
  return (
    <div className="price">
      {discount > 0 ? (
        <>
          <span className="original">{price.toLocaleString()}원</span>
          <span className="sale">
            {(price * (1 - discount)).toLocaleString()}원
          </span>
          <span className="badge">{discount * 100}% 할인</span>
        </>
      ) : (
        <span>{price.toLocaleString()}원</span>
      )}
    </div>
  )
}`})]}),n.jsxs("section",{children:[n.jsx("h2",{children:"&& 연산자"}),n.jsx("p",{children:"조건이 참일 때만 렌더링하고 싶을 때 사용합니다."}),n.jsx(A,{title:"&& 연산자 활용",children:`function Notification({ messages }) {
  return (
    <div>
      <h2>알림</h2>
      {messages.length > 0 && (
        <p className="badge">
          새 메시지가 {messages.length}개 있습니다!
        </p>
      )}
    </div>
  )
}

// 여러 조건 조합
function UserProfile({ user }) {
  return (
    <div className="profile">
      <h2>{user.name}</h2>
      {user.isVerified && <span className="verified">✓ 인증됨</span>}
      {user.isPremium && <span className="premium">⭐ 프리미엄</span>}
      {user.isAdmin && <span className="admin">🛡️ 관리자</span>}
    </div>
  )
}`}),n.jsxs(Y,{type:"warning",title:"주의: 0 처리",children:["&& 연산자 사용 시 0은 falsy 값이지만 화면에 렌더링됩니다!",n.jsx("br",{}),n.jsx("code",{children:"{count && <span>...</span>}"})," 대신",n.jsx("br",{}),n.jsx("code",{children:"{count > 0 && <span>...</span>}"}),"를 사용하세요."]})]}),n.jsxs("section",{children:[n.jsx("h2",{children:"switch문 패턴"}),n.jsx(A,{title:"switch문 활용",children:`function StatusMessage({ status }) {
  const renderStatus = () => {
    switch (status) {
      case 'loading':
        return <div className="spinner">로딩 중...</div>
      case 'success':
        return <div className="success">✅ 성공!</div>
      case 'error':
        return <div className="error">❌ 오류 발생</div>
      default:
        return <div>대기 중...</div>
    }
  }

  return <div className="status">{renderStatus()}</div>
}

// 객체 매핑 패턴 (더 간결함)
const statusConfig = {
  loading: { icon: '⏳', text: '로딩 중', className: 'loading' },
  success: { icon: '✅', text: '성공', className: 'success' },
  error: { icon: '❌', text: '오류', className: 'error' }
}

function StatusMessage({ status }) {
  const config = statusConfig[status] || { icon: '⏸️', text: '대기', className: 'idle' }

  return (
    <div className={config.className}>
      {config.icon} {config.text}
    </div>
  )
}`})]}),n.jsxs("section",{children:[n.jsx("h2",{children:"즉시 실행 함수 (IIFE)"}),n.jsx(A,{title:"IIFE 패턴",children:`function OrderStatus({ order }) {
  return (
    <div>
      <h3>주문 #{order.id}</h3>
      {(() => {
        if (order.status === 'pending') {
          return <p>🕐 결제 대기 중</p>
        } else if (order.status === 'paid') {
          return <p>💳 결제 완료</p>
        } else if (order.status === 'shipping') {
          return <p>🚚 배송 중</p>
        } else if (order.status === 'delivered') {
          return <p>📦 배송 완료</p>
        }
        return <p>상태 확인 중...</p>
      })()}
    </div>
  )
}`})]}),n.jsxs("section",{children:[n.jsx("h2",{children:"렌더링 막기"}),n.jsx("p",{children:"null을 반환하면 아무것도 렌더링하지 않습니다."}),n.jsx(A,{title:"null 반환",children:`function WarningBanner({ warning }) {
  // warning이 없으면 아무것도 렌더링하지 않음
  if (!warning) {
    return null
  }

  return (
    <div className="warning-banner">
      ⚠️ {warning}
    </div>
  )
}

// 사용
<WarningBanner warning="비밀번호가 약합니다" />
<WarningBanner warning={null} />  // 아무것도 안 보임`})]}),n.jsx(_e,{question:"다음 중 JSX에서 조건부 렌더링으로 사용할 수 없는 것은?",options:["삼항 연산자 (? :)","&& 연산자","if-else 문을 JSX 중괄호 안에 직접 사용","switch문을 함수로 감싸서 사용"],answer:2})]})}function uy(){return n.jsxs(Ue,{title:"리스트와 Key",subtitle:"배열 데이터를 화면에 렌더링하는 방법을 배웁니다",xp:150,prevLesson:{path:"/learn/basics/rendering",name:"조건부 렌더링",xp:150},nextLesson:{path:"/learn/hooks/usestate",name:"useState",xp:200},children:[n.jsxs("section",{children:[n.jsx("h2",{children:"배열 렌더링하기"}),n.jsx("p",{children:"React에서 배열 데이터를 렌더링할 때는 map() 메서드를 사용합니다. 각 배열 요소를 JSX로 변환하여 화면에 표시합니다."}),n.jsx(A,{title:"기본 리스트 렌더링",children:`function FruitList() {
  const fruits = ['사과', '바나나', '오렌지', '포도']

  return (
    <ul>
      {fruits.map((fruit, index) => (
        <li key={index}>{fruit}</li>
      ))}
    </ul>
  )
}

// 결과:
// • 사과
// • 바나나
// • 오렌지
// • 포도`})]}),n.jsxs("section",{children:[n.jsx("h2",{children:"Key의 중요성"}),n.jsx("p",{children:"key는 React가 어떤 항목이 변경, 추가, 삭제되었는지 식별하는 데 사용됩니다. 리스트의 각 항목에는 반드시 고유한 key를 지정해야 합니다."}),n.jsx(A,{title:"Key 사용법",children:`// ❌ 나쁜 예 - index를 key로 사용 (순서가 바뀔 수 있을 때)
{items.map((item, index) => (
  <li key={index}>{item}</li>
))}

// ✅ 좋은 예 - 고유한 ID 사용
{items.map((item) => (
  <li key={item.id}>{item.name}</li>
))}

// 데이터 예시
const users = [
  { id: 1, name: '홍길동' },
  { id: 2, name: '김철수' },
  { id: 3, name: '이영희' }
]

{users.map(user => (
  <li key={user.id}>{user.name}</li>
))}`}),n.jsx(Y,{type:"warning",title:"Key 규칙",children:n.jsxs("ul",{children:[n.jsx("li",{children:"Key는 형제 요소 사이에서만 고유하면 됩니다"}),n.jsx("li",{children:"Key는 변경되지 않아야 합니다"}),n.jsx("li",{children:"배열의 index는 항목 순서가 바뀔 때 문제가 생길 수 있습니다"})]})})]}),n.jsxs("section",{children:[n.jsx("h2",{children:"객체 배열 렌더링"}),n.jsx(A,{title:"복잡한 데이터 렌더링",children:`function ProductList() {
  const products = [
    { id: 1, name: '노트북', price: 1200000, inStock: true },
    { id: 2, name: '마우스', price: 35000, inStock: true },
    { id: 3, name: '키보드', price: 89000, inStock: false }
  ]

  return (
    <div className="product-list">
      {products.map(product => (
        <div key={product.id} className="product-card">
          <h3>{product.name}</h3>
          <p className="price">
            {product.price.toLocaleString()}원
          </p>
          <span className={product.inStock ? 'in-stock' : 'out-of-stock'}>
            {product.inStock ? '구매 가능' : '품절'}
          </span>
        </div>
      ))}
    </div>
  )
}`})]}),n.jsxs("section",{children:[n.jsx("h2",{children:"컴포넌트로 분리하기"}),n.jsx(A,{title:"리스트 아이템 컴포넌트",children:`// 아이템 컴포넌트
function TodoItem({ todo, onToggle, onDelete }) {
  return (
    <li className={todo.completed ? 'completed' : ''}>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => onToggle(todo.id)}
      />
      <span>{todo.text}</span>
      <button onClick={() => onDelete(todo.id)}>삭제</button>
    </li>
  )
}

// 리스트 컴포넌트
function TodoList({ todos, onToggle, onDelete }) {
  if (todos.length === 0) {
    return <p>할 일이 없습니다.</p>
  }

  return (
    <ul className="todo-list">
      {todos.map(todo => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggle={onToggle}
          onDelete={onDelete}
        />
      ))}
    </ul>
  )
}`})]}),n.jsxs("section",{children:[n.jsx("h2",{children:"필터링과 정렬"}),n.jsx(A,{title:"배열 필터링 및 정렬",children:`function FilteredList({ items, filter, sortBy }) {
  // 필터링
  const filtered = items.filter(item => {
    if (filter === 'all') return true
    if (filter === 'active') return !item.completed
    if (filter === 'completed') return item.completed
    return true
  })

  // 정렬
  const sorted = [...filtered].sort((a, b) => {
    if (sortBy === 'name') return a.name.localeCompare(b.name)
    if (sortBy === 'date') return new Date(b.date) - new Date(a.date)
    if (sortBy === 'price') return a.price - b.price
    return 0
  })

  return (
    <ul>
      {sorted.map(item => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  )
}

// 사용 예시
const items = [
  { id: 1, name: '사과', price: 1000, completed: false },
  { id: 2, name: '바나나', price: 500, completed: true },
  { id: 3, name: '오렌지', price: 800, completed: false }
]

<FilteredList
  items={items}
  filter="active"
  sortBy="price"
/>`})]}),n.jsxs("section",{children:[n.jsx("h2",{children:"중첩 리스트"}),n.jsx(A,{title:"중첩 배열 렌더링",children:`function CategoryList({ categories }) {
  return (
    <div className="categories">
      {categories.map(category => (
        <div key={category.id} className="category">
          <h3>{category.name}</h3>
          <ul>
            {category.items.map(item => (
              <li key={item.id}>{item.name}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}

// 데이터 예시
const categories = [
  {
    id: 1,
    name: '과일',
    items: [
      { id: 101, name: '사과' },
      { id: 102, name: '바나나' }
    ]
  },
  {
    id: 2,
    name: '채소',
    items: [
      { id: 201, name: '당근' },
      { id: 202, name: '양파' }
    ]
  }
]`})]}),n.jsx(_e,{question:"리스트 렌더링 시 key를 지정해야 하는 이유는?",options:["스타일을 적용하기 위해","React가 DOM 업데이트를 효율적으로 하기 위해","SEO를 위해","접근성을 위해"],answer:1})]})}function cy(){return n.jsxs(Ue,{title:"useState",subtitle:"컴포넌트에 상태를 추가하는 가장 기본적인 Hook",xp:200,prevLesson:{path:"/learn/basics/lists",name:"리스트와 Key",xp:150},nextLesson:{path:"/learn/hooks/useeffect",name:"useEffect",xp:200},children:[n.jsxs("section",{children:[n.jsx("h2",{children:"useState란?"}),n.jsx("p",{children:"useState는 함수형 컴포넌트에서 상태(state)를 관리할 수 있게 해주는 React Hook입니다. 상태가 변경되면 컴포넌트가 다시 렌더링됩니다."}),n.jsx(A,{title:"useState 기본 문법",children:`import { useState } from 'react'

function Counter() {
  // [상태값, 상태변경함수] = useState(초기값)
  const [count, setCount] = useState(0)

  return (
    <div>
      <p>현재 카운트: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        증가
      </button>
    </div>
  )
}`}),n.jsxs("div",{style:{padding:"1.5rem",background:"var(--bg-card)",borderRadius:"12px",border:"1px solid var(--border)"},children:[n.jsx("h3",{style:{marginBottom:"1rem"},children:"실습해보기"}),n.jsx(ry,{})]})]}),n.jsxs("section",{children:[n.jsx("h2",{children:"여러 개의 상태 관리"}),n.jsx(A,{title:"다중 상태",children:`function UserForm() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [age, setAge] = useState(0)

  return (
    <form>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="이름"
      />
      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="이메일"
      />
      <input
        type="number"
        value={age}
        onChange={(e) => setAge(Number(e.target.value))}
        placeholder="나이"
      />
    </form>
  )
}`})]}),n.jsxs("section",{children:[n.jsx("h2",{children:"객체 상태 관리"}),n.jsx(A,{title:"객체 상태 업데이트",children:`function ProfileForm() {
  const [user, setUser] = useState({
    name: '',
    email: '',
    address: {
      city: '',
      zipCode: ''
    }
  })

  // 단순 필드 업데이트
  const handleChange = (e) => {
    const { name, value } = e.target
    setUser(prev => ({
      ...prev,        // 기존 값 복사
      [name]: value   // 해당 필드만 업데이트
    }))
  }

  // 중첩 객체 업데이트
  const handleAddressChange = (e) => {
    const { name, value } = e.target
    setUser(prev => ({
      ...prev,
      address: {
        ...prev.address,
        [name]: value
      }
    }))
  }

  return (
    <form>
      <input name="name" value={user.name} onChange={handleChange} />
      <input name="email" value={user.email} onChange={handleChange} />
      <input name="city" value={user.address.city} onChange={handleAddressChange} />
    </form>
  )
}`}),n.jsxs(Y,{type:"warning",title:"주의: 불변성",children:["상태를 직접 수정하면 안됩니다! 항상 새로운 객체를 만들어서 업데이트하세요.",n.jsx("br",{}),n.jsx("code",{children:"user.name = 'new' // ❌"}),n.jsx("br",{}),n.jsxs("code",{children:["setUser(",'{ ...user, name: "new" }',") // ✅"]})]})]}),n.jsxs("section",{children:[n.jsx("h2",{children:"배열 상태 관리"}),n.jsx(A,{title:"배열 상태 업데이트",children:`function TodoApp() {
  const [todos, setTodos] = useState([])

  // 추가
  const addTodo = (text) => {
    setTodos(prev => [
      ...prev,
      { id: Date.now(), text, completed: false }
    ])
  }

  // 삭제
  const deleteTodo = (id) => {
    setTodos(prev => prev.filter(todo => todo.id !== id))
  }

  // 수정
  const toggleTodo = (id) => {
    setTodos(prev => prev.map(todo =>
      todo.id === id
        ? { ...todo, completed: !todo.completed }
        : todo
    ))
  }

  // 전체 완료
  const completeAll = () => {
    setTodos(prev => prev.map(todo => ({
      ...todo,
      completed: true
    })))
  }

  return (/* ... */)
}`})]}),n.jsxs("section",{children:[n.jsx("h2",{children:"함수형 업데이트"}),n.jsx("p",{children:"이전 상태값을 기반으로 업데이트할 때는 함수형 업데이트를 사용하세요."}),n.jsx(A,{title:"함수형 업데이트",children:`function Counter() {
  const [count, setCount] = useState(0)

  // ❌ 문제가 될 수 있음 (클로저 문제)
  const incrementBad = () => {
    setCount(count + 1)
    setCount(count + 1)  // 여전히 같은 count 참조
    // 결과: 1만 증가
  }

  // ✅ 함수형 업데이트 (항상 최신 상태 참조)
  const incrementGood = () => {
    setCount(prev => prev + 1)
    setCount(prev => prev + 1)
    // 결과: 2 증가
  }

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={incrementGood}>+2</button>
    </div>
  )
}`}),n.jsx(Y,{type:"tip",title:"언제 함수형 업데이트를 사용할까?",children:n.jsxs("ul",{children:[n.jsx("li",{children:"이전 상태를 기반으로 새 상태를 계산할 때"}),n.jsx("li",{children:"같은 이벤트에서 여러 번 업데이트할 때"}),n.jsx("li",{children:"비동기 콜백에서 상태를 업데이트할 때"})]})})]}),n.jsxs("section",{children:[n.jsx("h2",{children:"지연 초기화"}),n.jsx("p",{children:"초기값 계산이 복잡할 때 함수를 전달하면 첫 렌더링에서만 실행됩니다."}),n.jsx(A,{title:"지연 초기화",children:`// ❌ 매 렌더링마다 실행됨
const [data, setData] = useState(
  JSON.parse(localStorage.getItem('data')) || []
)

// ✅ 첫 렌더링에서만 실행됨
const [data, setData] = useState(() => {
  const saved = localStorage.getItem('data')
  return saved ? JSON.parse(saved) : []
})

// ✅ 복잡한 계산
const [list, setList] = useState(() => {
  return Array.from({ length: 1000 }, (_, i) => ({
    id: i,
    value: Math.random()
  }))
})`})]}),n.jsx(_e,{question:"useState의 상태 업데이트 함수가 호출되면 어떤 일이 일어날까요?",options:["상태가 즉시 변경된다","컴포넌트가 리렌더링 예약된다","부모 컴포넌트가 리렌더링된다","전체 앱이 리렌더링된다"],answer:1})]})}function ry(){const[u,r]=b.useState(0);return n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"1rem"},children:[n.jsx("button",{onClick:()=>r(d=>d-1),children:"-"}),n.jsx("span",{style:{fontSize:"1.5rem",fontWeight:"bold",minWidth:"3rem",textAlign:"center"},children:u}),n.jsx("button",{onClick:()=>r(d=>d+1),children:"+"}),n.jsx("button",{onClick:()=>r(0),style:{marginLeft:"1rem"},className:"outline",children:"초기화"})]})}function oy(){return n.jsxs(Ue,{title:"useEffect",subtitle:"사이드 이펙트를 처리하는 Hook",xp:200,prevLesson:{path:"/learn/hooks/usestate",name:"useState",xp:200},nextLesson:{path:"/learn/hooks/useref",name:"useRef",xp:200},children:[n.jsxs("section",{children:[n.jsx("h2",{children:"useEffect란?"}),n.jsx("p",{children:"useEffect는 컴포넌트가 렌더링된 후 실행되는 함수입니다. 데이터 fetching, 구독 설정, DOM 직접 조작 등의 사이드 이펙트를 처리합니다."}),n.jsx(A,{title:"useEffect 기본 문법",children:`import { useEffect } from 'react'

function MyComponent() {
  // 기본 형태
  useEffect(() => {
    // 이 코드는 렌더링 후에 실행됩니다
    console.log('컴포넌트가 렌더링되었습니다!')
  })

  return <div>Hello</div>
}`})]}),n.jsxs("section",{children:[n.jsx("h2",{children:"의존성 배열"}),n.jsx("p",{children:"두 번째 인자로 의존성 배열을 전달하여 실행 조건을 제어합니다."}),n.jsx(A,{title:"의존성 배열 패턴",children:`// 1. 의존성 배열 없음 - 매 렌더링마다 실행
useEffect(() => {
  console.log('매번 실행')
})

// 2. 빈 배열 - 마운트 시에만 실행
useEffect(() => {
  console.log('컴포넌트 마운트!')
}, [])

// 3. 의존성 있음 - 해당 값이 변경될 때 실행
useEffect(() => {
  console.log(\`count가 \${count}로 변경됨\`)
}, [count])

// 4. 여러 의존성
useEffect(() => {
  console.log('name 또는 age가 변경됨')
}, [name, age])`}),n.jsx(Y,{type:"info",title:"의존성 배열 규칙",children:"effect 내에서 사용하는 모든 외부 값(state, props, 함수 등)을 의존성 배열에 포함하세요. ESLint의 exhaustive-deps 규칙이 이를 자동으로 감지해줍니다."})]}),n.jsxs("section",{children:[n.jsx("h2",{children:"클린업 함수"}),n.jsx("p",{children:"useEffect에서 함수를 반환하면 컴포넌트가 언마운트되거나 다음 effect가 실행되기 전에 호출됩니다."}),n.jsx(A,{title:"클린업 함수",children:`// 이벤트 리스너 정리
useEffect(() => {
  const handleResize = () => {
    console.log(window.innerWidth)
  }

  window.addEventListener('resize', handleResize)

  // 클린업: 이벤트 리스너 제거
  return () => {
    window.removeEventListener('resize', handleResize)
  }
}, [])

// 타이머 정리
useEffect(() => {
  const timer = setInterval(() => {
    console.log('tick')
  }, 1000)

  // 클린업: 타이머 정리
  return () => {
    clearInterval(timer)
  }
}, [])

// 구독 정리
useEffect(() => {
  const subscription = api.subscribe(userId, (data) => {
    setData(data)
  })

  // 클린업: 구독 해제
  return () => {
    subscription.unsubscribe()
  }
}, [userId])`}),n.jsxs("div",{style:{padding:"1.5rem",background:"var(--bg-card)",borderRadius:"12px",border:"1px solid var(--border)"},children:[n.jsx("h3",{style:{marginBottom:"1rem"},children:"실습: 타이머"}),n.jsx(dy,{})]})]}),n.jsxs("section",{children:[n.jsx("h2",{children:"데이터 Fetching"}),n.jsx(A,{title:"API 데이터 가져오기",children:`function UserProfile({ userId }) {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    // 로딩 시작
    setLoading(true)
    setError(null)

    fetch(\`/api/users/\${userId}\`)
      .then(res => {
        if (!res.ok) throw new Error('Failed to fetch')
        return res.json()
      })
      .then(data => {
        setUser(data)
        setLoading(false)
      })
      .catch(err => {
        setError(err.message)
        setLoading(false)
      })
  }, [userId])  // userId가 바뀔 때마다 다시 fetch

  if (loading) return <div>로딩 중...</div>
  if (error) return <div>에러: {error}</div>

  return (
    <div>
      <h2>{user.name}</h2>
      <p>{user.email}</p>
    </div>
  )
}`}),n.jsx(Y,{type:"tip",title:"async/await 사용",children:"useEffect의 콜백 자체는 async일 수 없습니다. 내부에 async 함수를 정의하세요."}),n.jsx(A,{title:"async/await 패턴",children:`useEffect(() => {
  const fetchData = async () => {
    try {
      setLoading(true)
      const response = await fetch('/api/data')
      const data = await response.json()
      setData(data)
    } catch (error) {
      setError(error.message)
    } finally {
      setLoading(false)
    }
  }

  fetchData()
}, [])`})]}),n.jsxs("section",{children:[n.jsx("h2",{children:"흔한 실수들"}),n.jsx(A,{title:"피해야 할 패턴",children:`// ❌ 무한 루프: 상태 변경 -> 리렌더링 -> effect -> 상태 변경...
useEffect(() => {
  setCount(count + 1)  // 무한 루프!
})

// ❌ 의존성 누락
useEffect(() => {
  console.log(count)  // count를 사용하지만 의존성에 없음
}, [])

// ✅ 올바른 의존성
useEffect(() => {
  console.log(count)
}, [count])

// ❌ 객체/배열 의존성 (매번 새 참조)
useEffect(() => {
  // options가 매번 새로 생성되면 무한 실행
}, [options])

// ✅ 필요한 값만 의존성에
useEffect(() => {
  // options.limit만 비교
}, [options.limit])`})]}),n.jsxs("section",{children:[n.jsx("h2",{children:"실행 순서 이해하기"}),n.jsx(A,{title:"실행 순서",children:`function Example() {
  console.log('1. 렌더링')

  useEffect(() => {
    console.log('3. Effect 실행')
    return () => {
      console.log('2. 클린업 (이전 effect)')
    }
  })

  return <div>Hello</div>
}

// 첫 렌더링:
// 1. 렌더링
// 3. Effect 실행

// 두 번째 렌더링:
// 1. 렌더링
// 2. 클린업 (이전 effect)
// 3. Effect 실행`})]}),n.jsx(_e,{question:"useEffect의 클린업 함수는 언제 실행될까요?",options:["컴포넌트가 마운트될 때만","effect가 실행되기 직전에만","컴포넌트 언마운트 시 또는 다음 effect 실행 전","매 렌더링 시작 시"],answer:2})]})}function dy(){const[u,r]=b.useState(0),[d,o]=b.useState(!1);return b.useEffect(()=>{let m;return d&&(m=setInterval(()=>{r(h=>h+1)},1e3)),()=>clearInterval(m)},[d]),n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"1rem"},children:[n.jsxs("span",{style:{fontSize:"1.5rem",fontWeight:"bold",minWidth:"4rem"},children:[u,"초"]}),n.jsx("button",{onClick:()=>o(!d),children:d?"정지":"시작"}),n.jsx("button",{onClick:()=>{r(0),o(!1)},className:"outline",children:"초기화"})]})}function fy(){return n.jsxs(Ue,{title:"useRef",subtitle:"DOM 참조와 렌더링에 영향 없는 값 저장",xp:200,prevLesson:{path:"/learn/hooks/useeffect",name:"useEffect",xp:200},nextLesson:{path:"/learn/hooks/usememo",name:"useMemo",xp:250},children:[n.jsxs("section",{children:[n.jsx("h2",{children:"useRef란?"}),n.jsxs("p",{children:["useRef는 두 가지 주요 용도로 사용됩니다:",n.jsx("br",{}),"1. DOM 요소에 직접 접근할 때",n.jsx("br",{}),"2. 렌더링에 영향을 주지 않는 값을 저장할 때"]}),n.jsx(A,{title:"useRef 기본 문법",children:`import { useRef } from 'react'

function MyComponent() {
  // ref 생성
  const myRef = useRef(initialValue)

  // 값 접근/변경
  console.log(myRef.current)
  myRef.current = newValue

  return <div>...</div>
}`})]}),n.jsxs("section",{children:[n.jsx("h2",{children:"DOM 요소 접근"}),n.jsx("p",{children:"ref 속성을 사용하여 DOM 요소에 직접 접근할 수 있습니다."}),n.jsx(A,{title:"DOM 요소 참조",children:`function TextInput() {
  const inputRef = useRef(null)

  const focusInput = () => {
    // DOM 요소에 직접 접근
    inputRef.current.focus()
  }

  const clearInput = () => {
    inputRef.current.value = ''
    inputRef.current.focus()
  }

  return (
    <div>
      <input ref={inputRef} type="text" />
      <button onClick={focusInput}>포커스</button>
      <button onClick={clearInput}>지우기</button>
    </div>
  )
}`}),n.jsxs("div",{style:{padding:"1.5rem",background:"var(--bg-card)",borderRadius:"12px",border:"1px solid var(--border)"},children:[n.jsx("h3",{style:{marginBottom:"1rem"},children:"실습: 입력 포커스"}),n.jsx(hy,{})]})]}),n.jsxs("section",{children:[n.jsx("h2",{children:"렌더링 없이 값 저장"}),n.jsx("p",{children:"useRef로 저장한 값은 변경되어도 리렌더링이 발생하지 않습니다. 이전 값 추적, 타이머 ID 저장 등에 유용합니다."}),n.jsx(A,{title:"이전 값 추적",children:`function Counter() {
  const [count, setCount] = useState(0)
  const prevCountRef = useRef()

  useEffect(() => {
    // 렌더링 후에 이전 값 저장
    prevCountRef.current = count
  })

  const prevCount = prevCountRef.current

  return (
    <div>
      <p>현재: {count}, 이전: {prevCount}</p>
      <button onClick={() => setCount(c => c + 1)}>증가</button>
    </div>
  )
}`}),n.jsx(A,{title:"타이머 ID 저장",children:`function Stopwatch() {
  const [time, setTime] = useState(0)
  const timerRef = useRef(null)

  const start = () => {
    if (timerRef.current) return  // 이미 실행 중이면 무시

    timerRef.current = setInterval(() => {
      setTime(t => t + 1)
    }, 1000)
  }

  const stop = () => {
    clearInterval(timerRef.current)
    timerRef.current = null
  }

  const reset = () => {
    stop()
    setTime(0)
  }

  // 언마운트 시 정리
  useEffect(() => {
    return () => clearInterval(timerRef.current)
  }, [])

  return (
    <div>
      <p>{time}초</p>
      <button onClick={start}>시작</button>
      <button onClick={stop}>정지</button>
      <button onClick={reset}>초기화</button>
    </div>
  )
}`})]}),n.jsxs("section",{children:[n.jsx("h2",{children:"useState vs useRef"}),n.jsx(A,{title:"차이점 비교",children:`function Comparison() {
  const [stateCount, setStateCount] = useState(0)
  const refCount = useRef(0)

  const handleStateClick = () => {
    setStateCount(stateCount + 1)
    console.log('state:', stateCount)  // 이전 값 출력 (비동기)
  }

  const handleRefClick = () => {
    refCount.current += 1
    console.log('ref:', refCount.current)  // 즉시 새 값 출력
  }

  console.log('렌더링!')  // state 변경 시에만 출력

  return (
    <div>
      <p>State: {stateCount}</p>
      <p>Ref: {refCount.current}</p>
      <button onClick={handleStateClick}>State +1 (리렌더링)</button>
      <button onClick={handleRefClick}>Ref +1 (리렌더링 안함)</button>
    </div>
  )
}

// useState: 값 변경 → 리렌더링 → UI 업데이트
// useRef: 값 변경 → 리렌더링 없음 → UI 그대로`}),n.jsx(Y,{type:"info",title:"언제 무엇을 사용할까?",children:n.jsxs("ul",{children:[n.jsxs("li",{children:[n.jsx("strong",{children:"useState:"})," 값이 변경되면 화면이 업데이트되어야 할 때"]}),n.jsxs("li",{children:[n.jsx("strong",{children:"useRef:"})," 값이 변경되어도 화면은 그대로일 때 (타이머 ID, 이전 값, DOM 참조 등)"]})]})})]}),n.jsxs("section",{children:[n.jsx("h2",{children:"콜백 ref"}),n.jsx("p",{children:"ref 속성에 함수를 전달하면 더 세밀한 제어가 가능합니다."}),n.jsx(A,{title:"콜백 ref 패턴",children:`function MeasuredComponent() {
  const [height, setHeight] = useState(0)

  // 콜백 ref: 요소가 연결/해제될 때 호출됨
  const measuredRef = useCallback((node) => {
    if (node !== null) {
      setHeight(node.getBoundingClientRect().height)
    }
  }, [])

  return (
    <div>
      <div ref={measuredRef} style={{ padding: '20px' }}>
        내용...
      </div>
      <p>높이: {height}px</p>
    </div>
  )
}

// 여러 요소 참조
function MultipleRefs() {
  const itemsRef = useRef(new Map())

  const scrollToId = (id) => {
    const node = itemsRef.current.get(id)
    node?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <ul>
      {items.map(item => (
        <li
          key={item.id}
          ref={(node) => {
            if (node) {
              itemsRef.current.set(item.id, node)
            } else {
              itemsRef.current.delete(item.id)
            }
          }}
        >
          {item.name}
        </li>
      ))}
    </ul>
  )
}`})]}),n.jsx(_e,{question:"useRef로 저장한 값이 변경되면 어떻게 될까요?",options:["컴포넌트가 리렌더링된다","자식 컴포넌트만 리렌더링된다","리렌더링이 발생하지 않는다","에러가 발생한다"],answer:2})]})}function hy(){const u=b.useRef(null);return n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"1rem"},children:[n.jsx("input",{ref:u,type:"text",placeholder:"텍스트 입력...",style:{padding:"0.75rem",borderRadius:"6px",border:"1px solid var(--border)",background:"var(--bg-secondary)",color:"var(--text-primary)",flex:1}}),n.jsx("button",{onClick:()=>u.current.focus(),children:"포커스"}),n.jsx("button",{onClick:()=>{u.current.value="",u.current.focus()},className:"outline",children:"지우기"})]})}function my(){return n.jsxs(Ue,{title:"useMemo",subtitle:"비용이 큰 연산 결과 메모이제이션",xp:200,prevLesson:{path:"/learn/hooks/useref",name:"useRef",xp:200},nextLesson:{path:"/learn/hooks/usecallback",name:"useCallback",xp:250},children:[n.jsxs("section",{children:[n.jsx("h2",{children:"useMemo란?"}),n.jsxs("p",{children:["useMemo는 ",n.jsx("strong",{children:"연산 결과를 기억(memoization)"}),"해 두었다가 의존성이 변경될 때만 다시 계산하도록 만드는 Hook입니다.",n.jsx("br",{}),"렌더링 자체를 막는 것이 아니라, ",n.jsx("strong",{children:"불필요한 계산을 막는 것"}),"이 목적입니다."]}),n.jsx(A,{title:"useMemo 기본 문법",children:`import { useMemo } from 'react'

const memoizedValue = useMemo(() => {
  // 비용이 큰 연산
  return result
}, [dependency])`})]}),n.jsxs("section",{children:[n.jsx("h2",{children:"문제 상황"}),n.jsxs("p",{children:["상태가 변경될 때마다 컴포넌트는 다시 렌더링됩니다. 이때 렌더링과 상관없는 ",n.jsx("strong",{children:"무거운 계산"}),"도 매번 실행되면 성능 문제가 발생합니다."]}),n.jsx(A,{title:"비용이 큰 연산 예시",children:`function ExpensiveComponent({ count }) {
  const total = heavyCalculation(count)

  return <p>결과: {total}</p>
}

function heavyCalculation(num) {
  console.log('계산 중...')
  let result = 0
  for (let i = 0; i < 1_000_000_000; i++) {
    result += num
  }
  return result
}`})]}),n.jsxs("section",{children:[n.jsx("h2",{children:"useMemo로 최적화"}),n.jsx("p",{children:"count가 바뀔 때만 계산하고, 그 외의 렌더링에서는 이전 결과를 그대로 사용합니다."}),n.jsx(A,{title:"useMemo 적용",children:`function ExpensiveComponent({ count }) {
  const total = useMemo(() => {
    console.log('계산 중...')
    let result = 0
    for (let i = 0; i < 1_000_000_000; i++) {
      result += count
    }
    return result
  }, [count])

  return <p>결과: {total}</p>
}`}),n.jsx(Y,{type:"info",title:"핵심 정리",children:n.jsxs("ul",{children:[n.jsxs("li",{children:["useMemo는 ",n.jsx("strong",{children:"값을 기억"}),"한다"]}),n.jsxs("li",{children:["의존성이 바뀌지 않으면 ",n.jsx("strong",{children:"함수를 다시 실행하지 않는다"})]}),n.jsx("li",{children:"렌더링은 발생하지만 계산은 생략된다"})]})})]}),n.jsxs("section",{children:[n.jsx("h2",{children:"실전 예제: 필터링"}),n.jsx("p",{children:"리스트 필터링은 대표적인 useMemo 사용 사례입니다. 입력값이 바뀔 때만 필터링 로직을 실행합니다."}),n.jsx(A,{title:"리스트 필터링 최적화",children:`function ProductList({ products, keyword }) {
  const filteredProducts = useMemo(() => {
    return products.filter(product =>
      product.name.includes(keyword)
    )
  }, [products, keyword])

  return (
    <ul>
      {filteredProducts.map(p => (
        <li key={p.id}>{p.name}</li>
      ))}
    </ul>
  )
}`})]}),n.jsxs("section",{children:[n.jsx("h2",{children:"useState vs useMemo"}),n.jsx(A,{title:"차이점 비교",children:`// useState: 상태 저장 + 변경 시 리렌더링
const [value, setValue] = useState(0)

// useMemo: 계산 결과 캐싱 (상태 아님)
const computedValue = useMemo(() => {
  return expensiveCalculation(value)
}, [value])

// useMemo는 값 변경용이 아니라
// 계산 최적화용이다`}),n.jsx(Y,{type:"warning",title:"자주 하는 오해",children:n.jsxs("ul",{children:[n.jsx("li",{children:"useMemo는 성능을 자동으로 개선하지 않는다"}),n.jsx("li",{children:"가벼운 계산에는 오히려 오버헤드가 될 수 있다"}),n.jsx("li",{children:"의존성 배열 설계가 잘못되면 의미가 없다"})]})})]}),n.jsxs("section",{children:[n.jsx("h2",{children:"언제 사용해야 할까?"}),n.jsxs("ul",{children:[n.jsx("li",{children:"연산 비용이 크고"}),n.jsx("li",{children:"같은 입력에 대해 결과가 항상 같으며"}),n.jsx("li",{children:"렌더링 빈도가 높은 경우"})]})]}),n.jsx(_e,{question:"useMemo의 주된 목적은 무엇일까요?",options:["렌더링 자체를 막기 위해","상태를 저장하기 위해","비용이 큰 연산을 재사용하기 위해","DOM에 직접 접근하기 위해"],answer:2})]})}function py(){return n.jsxs(Ue,{title:"useCallback",subtitle:"함수 참조를 고정해 불필요한 리렌더링을 줄이는 Hook",xp:250,prevLesson:{path:"/learn/hooks/usememo",name:"useMemo"},nextLesson:{path:"/learn/hooks/custom",name:"커스텀 훅"},children:[n.jsxs("section",{children:[n.jsx("h2",{children:"useCallback이란?"}),n.jsxs("p",{children:["useCallback은 ",n.jsx("strong",{children:"함수 자체를 메모이제이션"}),"하는 Hook입니다.",n.jsx("br",{}),"렌더링이 반복될 때마다 “새 함수”가 만들어지는 것을 막고,",n.jsx("strong",{children:"같은 함수 참조를 재사용"}),"하게 합니다."]}),n.jsx(A,{title:"useCallback 기본 문법",children:`import { useCallback } from 'react'

const fn = useCallback(() => {
  // ...
}, [dependency])`}),n.jsx(Y,{type:"info",title:"useMemo와 관계",children:n.jsxs("ul",{children:[n.jsxs("li",{children:[n.jsx("strong",{children:"useMemo:"})," 값(연산 결과)을 메모"]}),n.jsxs("li",{children:[n.jsx("strong",{children:"useCallback:"})," 함수(콜백)를 메모"]}),n.jsxs("li",{children:["개념적으로 ",n.jsx("code",{children:"useCallback(fn, deps) === useMemo(() => fn, deps)"})]})]})})]}),n.jsxs("section",{children:[n.jsx("h2",{children:"왜 필요한가?"}),n.jsxs("p",{children:["React에서 부모가 리렌더링되면 props로 내려가는 함수는 기본적으로 새로 만들어집니다. 자식이 ",n.jsx("code",{children:"React.memo"}),"로 최적화되어 있어도, 함수 prop의 참조가 바뀌면 자식은 다시 렌더링됩니다."]}),n.jsx(A,{title:"문제 패턴: memo가 있어도 자식이 계속 렌더링",children:`import { memo, useState } from 'react'

const Child = memo(function Child({ onAdd }) {
  console.log('Child 렌더링')
  return <button onClick={onAdd}>+1</button>
})

export default function Parent() {
  const [count, setCount] = useState(0)
  const [text, setText] = useState('')

  // ❌ Parent가 리렌더링 될 때마다 새 함수 생성
  const handleAdd = () => setCount(c => c + 1)

  return (
    <div>
      <input value={text} onChange={e => setText(e.target.value)} />
      <p>count: {count}</p>
      <Child onAdd={handleAdd} />
    </div>
  )
}`})]}),n.jsxs("section",{children:[n.jsx("h2",{children:"useCallback 적용"}),n.jsxs("p",{children:["의존성이 바뀌지 않는 한, 동일한 함수 참조를 유지합니다. 그 결과 ",n.jsx("code",{children:"React.memo"})," 자식이 불필요하게 다시 렌더링되는 것을 줄일 수 있습니다."]}),n.jsx(A,{title:"해결: useCallback으로 함수 참조 고정",children:`import { memo, useState, useCallback } from 'react'

const Child = memo(function Child({ onAdd }) {
  console.log('Child 렌더링')
  return <button onClick={onAdd}>+1</button>
})

export default function Parent() {
  const [count, setCount] = useState(0)
  const [text, setText] = useState('')

  // ✅ text가 바뀌어 Parent가 리렌더링 되어도 handleAdd 참조는 유지됨
  const handleAdd = useCallback(() => {
    setCount(c => c + 1)
  }, [])

  return (
    <div>
      <input value={text} onChange={e => setText(e.target.value)} />
      <p>count: {count}</p>
      <Child onAdd={handleAdd} />
    </div>
  )
}`}),n.jsxs("div",{style:{padding:"1.5rem",background:"var(--bg-card)",borderRadius:"12px",border:"1px solid var(--border)"},children:[n.jsx("h3",{style:{marginBottom:"1rem"},children:"실습: memo + useCallback 체감"}),n.jsx(xy,{})]})]}),n.jsxs("section",{children:[n.jsx("h2",{children:"의존성 배열이 핵심"}),n.jsxs("p",{children:["useCallback은 “함수 내부에서 사용하는 외부 값”이 바뀌면 새 함수가 필요합니다. 의존성 배열을 잘못 주면 ",n.jsx("strong",{children:"오래된 값(스테일 클로저)"}),"를 잡고 있는 버그가 나옵니다."]}),n.jsx(A,{title:"스테일 클로저 예시와 해결",children:`// ❌ 잘못된 예: count를 캡처하지만 deps가 빈 배열
const onClick = useCallback(() => {
  setCount(count + 1) // count는 첫 렌더 값에 고정될 수 있음
}, [])

// ✅ 해결 1: 함수형 업데이트로 외부 의존 제거
const onClick = useCallback(() => {
  setCount(c => c + 1)
}, [])

// ✅ 해결 2: deps에 포함
const onClick = useCallback(() => {
  setCount(count + 1)
}, [count])`}),n.jsx(Y,{type:"warning",title:"남용 금지",children:n.jsxs("ul",{children:[n.jsx("li",{children:"useCallback 자체도 메모 비용이 있습니다"}),n.jsx("li",{children:"자식이 memo 최적화가 없거나, 성능 병목이 없다면 굳이 쓸 이유가 약합니다"}),n.jsx("li",{children:"“함수 prop”이 리렌더링을 유발하는 구조에서만 의미가 큽니다"})]})})]}),n.jsxs("section",{children:[n.jsx("h2",{children:"언제 쓰는 게 맞나?"}),n.jsxs("ul",{children:[n.jsxs("li",{children:[n.jsx("code",{children:"React.memo"})," / ",n.jsx("code",{children:"useMemo"}),"로 최적화된 자식에게 콜백을 props로 넘길 때"]}),n.jsx("li",{children:"의존성 변화가 드물고, 부모 리렌더링이 잦을 때"}),n.jsx("li",{children:"리스트 아이템(많은 자식) 각각에 핸들러를 내려줄 때"})]})]}),n.jsx(_e,{question:"useCallback을 쓰는 가장 정확한 목적은 무엇일까요?",options:["렌더링 자체를 멈추기 위해","상태를 저장하기 위해","함수 참조를 유지해 불필요한 리렌더링을 줄이기 위해","DOM 요소에 직접 접근하기 위해"],answer:2})]})}const xh=b.memo(function({onAdd:r,label:d}){return console.log(`DemoChild(${d}) 렌더링`),n.jsxs("button",{onClick:r,style:{whiteSpace:"nowrap"},children:[d," +1"]})});function xy(){const[u,r]=b.useState(0),[d,o]=b.useState(0),[m,h]=b.useState(""),v=b.useCallback(()=>r(x=>x+1),[]),C=b.useCallback(()=>o(x=>x+1),[]);return n.jsxs("div",{style:{display:"grid",gap:"0.75rem"},children:[n.jsx("div",{style:{display:"flex",gap:"0.75rem",alignItems:"center"},children:n.jsx("input",{value:m,onChange:x=>h(x.target.value),placeholder:"여기 입력해도 Child가 불필요 렌더링 안 나게",style:{padding:"0.75rem",borderRadius:"6px",border:"1px solid var(--border)",background:"var(--bg-secondary)",color:"var(--text-primary)",flex:1}})}),n.jsxs("div",{style:{display:"flex",gap:"0.75rem",alignItems:"center",flexWrap:"wrap"},children:[n.jsxs("span",{style:{minWidth:"7rem"},children:["A: ",u]}),n.jsx(xh,{onAdd:v,label:"A"})]}),n.jsxs("div",{style:{display:"flex",gap:"0.75rem",alignItems:"center",flexWrap:"wrap"},children:[n.jsxs("span",{style:{minWidth:"7rem"},children:["B: ",d]}),n.jsx(xh,{onAdd:C,label:"B"})]}),n.jsxs(Y,{type:"note",title:"관찰 포인트",children:["입력창(text)을 바꾸면 부모는 리렌더링됩니다. 하지만 ",n.jsx("code",{children:"incA"}),", ",n.jsx("code",{children:"incB"}),"의 참조가 유지되므로",n.jsx("code",{children:"React.memo"})," 자식은 불필요 렌더링을 덜 하게 됩니다(콘솔 로그로 확인)."]})]})}function vy(){return n.jsxs(Ue,{title:"커스텀 훅",subtitle:"로직을 재사용 가능한 Hook으로 추출하는 패턴",xp:300,prevLesson:{path:"/learn/hooks/usecallback",name:"useCallback"},nextLesson:{path:"/learn/comps/components",name:"합성",xp:250},children:[n.jsxs("section",{children:[n.jsx("h2",{children:"커스텀 훅이란?"}),n.jsxs("p",{children:["커스텀 훅은 React Hook 로직을 ",n.jsx("strong",{children:"재사용 가능한 함수"}),"로 분리한 것입니다.",n.jsx("br",{}),"이름은 반드시 ",n.jsx("code",{children:"use"}),"로 시작해야 하며, 내부에서 다른 Hook을 사용할 수 있습니다."]}),n.jsx(A,{title:"커스텀 훅 기본 형태",children:`function useSomething() {
  // 내부에서 다른 Hook 사용 가능
  // useState / useEffect / useMemo / useRef 등

  return { /* 필요한 값/함수 반환 */ }
}`}),n.jsx(Y,{type:"info",title:"핵심 관점",children:n.jsxs("ul",{children:[n.jsxs("li",{children:["커스텀 훅은 “컴포넌트 재사용”이 아니라 ",n.jsx("strong",{children:"로직 재사용"}),"입니다"]}),n.jsx("li",{children:"UI는 컴포넌트에 남기고, 데이터/상태/사이드이펙트/계산을 훅으로 뽑습니다"}),n.jsx("li",{children:"테스트/유지보수/일관성에서 강점이 큽니다"})]})})]}),n.jsxs("section",{children:[n.jsx("h2",{children:"언제 추출해야 하나?"}),n.jsx("p",{children:"아래 신호가 보이면 커스텀 훅 후보입니다."}),n.jsxs("ul",{children:[n.jsxs("li",{children:["여러 컴포넌트에서 동일한 ",n.jsx("strong",{children:"useEffect + 상태관리"})," 패턴이 반복된다"]}),n.jsx("li",{children:"폼/입력/검증 로직이 반복된다"}),n.jsx("li",{children:"fetch/로딩/에러/재시도 같은 네트워크 패턴이 반복된다"}),n.jsx("li",{children:"로컬스토리지/세션스토리지 동기화가 반복된다"})]})]}),n.jsxs("section",{children:[n.jsx("h2",{children:"예제 1: 입력 상태(useInput)"}),n.jsx("p",{children:"가장 많이 쓰는 형태 중 하나는 “입력 값 + onChange”를 묶는 훅입니다. UI는 그대로 두고, 반복 로직만 훅으로 빼냅니다."}),n.jsx(A,{title:"useInput 훅",children:`import { useCallback, useState } from 'react'

export function useInput(initialValue = '') {
  const [value, setValue] = useState(initialValue)

  const onChange = useCallback((e) => {
    setValue(e.target.value)
  }, [])

  const reset = useCallback(() => {
    setValue(initialValue)
  }, [initialValue])

  return { value, setValue, onChange, reset }
}`}),n.jsx(A,{title:"useInput 사용",children:`function LoginForm() {
  const email = useInput('')
  const password = useInput('')

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(email.value, password.value)
  }

  return (
    <form onSubmit={handleSubmit}>
      <input value={email.value} onChange={email.onChange} placeholder="email" />
      <input value={password.value} onChange={password.onChange} placeholder="password" type="password" />
      <button type="submit">로그인</button>
      <button type="button" onClick={() => { email.reset(); password.reset() }}>
        초기화
      </button>
    </form>
  )
}`})]}),n.jsxs("section",{children:[n.jsx("h2",{children:"예제 2: 로컬스토리지 동기화(useLocalStorage)"}),n.jsx("p",{children:"“상태 + 저장소 동기화”는 반복되기 쉬운 패턴입니다. 커스텀 훅으로 추출하면 컴포넌트가 깔끔해지고 실수도 줄어듭니다."}),n.jsx(A,{title:"useLocalStorage 훅",children:`import { useEffect, useState } from 'react'

export function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    try {
      const saved = localStorage.getItem(key)
      return saved !== null ? JSON.parse(saved) : initialValue
    } catch {
      return initialValue
    }
  })

  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(value))
    } catch {
      // 저장 실패(용량/권한 등) - 필요하면 에러 상태로 관리
    }
  }, [key, value])

  return [value, setValue]
}`}),n.jsx(A,{title:"useLocalStorage 사용",children:`function ThemeSetting() {
  const [theme, setTheme] = useLocalStorage('theme', 'light')

  return (
    <div>
      <p>현재 테마: {theme}</p>
      <button onClick={() => setTheme(t => (t === 'light' ? 'dark' : 'light'))}>
        토글
      </button>
    </div>
  )
}`})]}),n.jsxs("section",{children:[n.jsx("h2",{children:"예제 3: 데이터 패칭(useFetch)"}),n.jsx("p",{children:"fetch 로직을 그대로 복사/붙여넣기 하면 로딩/에러/취소 처리에서 품질이 빠르게 무너집니다. 최소한의 표준 형태로 훅을 만들어두면 전체 코드가 정렬됩니다."}),n.jsx(A,{title:"useFetch 훅 (AbortController 포함)",children:`import { useEffect, useState, useCallback } from 'react'

export function useFetch(url, options) {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const run = useCallback(async () => {
    if (!url) return

    const controller = new AbortController()

    setLoading(true)
    setError(null)

    try {
      const res = await fetch(url, { ...options, signal: controller.signal })
      if (!res.ok) throw new Error('Failed to fetch')
      const json = await res.json()
      setData(json)
    } catch (e) {
      // Abort는 에러로 취급하지 않는 편이 일반적
      if (e.name !== 'AbortError') setError(e.message)
    } finally {
      setLoading(false)
    }

    return () => controller.abort()
  }, [url, options])

  useEffect(() => {
    let cleanup
    ;(async () => {
      cleanup = await run()
    })()
    return () => cleanup?.()
  }, [run])

  return { data, loading, error, refetch: run }
}`}),n.jsx(A,{title:"useFetch 사용",children:`function Users() {
  const { data, loading, error, refetch } = useFetch('/api/users')

  if (loading) return <p>로딩...</p>
  if (error) return (
    <div>
      <p>에러: {error}</p>
      <button onClick={refetch}>재시도</button>
    </div>
  )

  return (
    <ul>
      {data?.map(u => <li key={u.id}>{u.name}</li>)}
    </ul>
  )
}`}),n.jsx(Y,{type:"warning",title:"실무 포인트",children:n.jsxs("ul",{children:[n.jsxs("li",{children:[n.jsx("code",{children:"options"})," 객체를 매 렌더마다 새로 만들면 의존성이 매번 바뀝니다"]}),n.jsxs("li",{children:["필요하면 ",n.jsx("code",{children:"options"}),"를 상위에서 ",n.jsx("code",{children:"useMemo"}),"로 고정하거나, 훅 API를 단순화하세요"]}),n.jsx("li",{children:"대규모 앱은 TanStack Query 같은 라이브러리가 사실상 표준입니다"})]})})]}),n.jsxs("section",{children:[n.jsx("h2",{children:"훅 설계 규칙"}),n.jsx("p",{children:"커스텀 훅을 “재사용 가능한 도구”로 유지하려면 아래 규칙이 중요합니다."}),n.jsx(A,{title:"설계 규칙 요약",children:`1) 훅 이름은 use로 시작 (React 규칙)
2) 훅은 컴포넌트/훅 내부에서만 호출 (조건문/반복문 안에서 호출 금지)
3) UI를 반환하지 말고 값/함수만 반환 (로직 재사용이 목적)
4) deps(의존성) 설계를 먼저 잡고 API를 단순화
5) 부수효과는 훅 내부에서, 표현(UI)은 컴포넌트에서`}),n.jsx(Y,{type:"tip",title:"반환 형태 선택 기준",children:n.jsxs("ul",{children:[n.jsxs("li",{children:[n.jsx("code",{children:"[value, setValue]"})," 형태: state처럼 쓰고 싶을 때(로컬스토리지 훅 등)"]}),n.jsxs("li",{children:[n.jsx("code",{children:"[value, onChange, reset]"})," 형태: 의미 있는 묶음을 제공할 때(useInput 등)"]})]})})]}),n.jsxs("section",{children:[n.jsx("h2",{children:"실전 예시: 목록 필터 로직 추출"}),n.jsx("p",{children:"“검색어 + 필터링 + 정렬” 같은 로직은 컴포넌트에 두면 금방 난장판이 됩니다. 훅으로 분리하면 UI 코드가 살아남습니다."}),n.jsx(A,{title:"useFilteredList 예시",children:`import { useMemo } from 'react'

export function useFilteredList(items, keyword, getText) {
  const list = useMemo(() => {
    const q = keyword.trim()
    if (!q) return items
    return items.filter(item => getText(item).includes(q))
  }, [items, keyword, getText])

  return list
}`}),n.jsx(A,{title:"사용",children:`function ListView({ items }) {
  const [keyword, setKeyword] = useState('')

  const filtered = useFilteredList(items, keyword, (item) => item.name)

  return (
    <div>
      <input value={keyword} onChange={e => setKeyword(e.target.value)} />
      <ul>
        {filtered.map(i => <li key={i.id}>{i.name}</li>)}
      </ul>
    </div>
  )
}`})]}),n.jsx(_e,{question:"커스텀 훅의 목적에 가장 가까운 설명은 무엇일까요?",options:["UI를 재사용하기 위해","로직(상태/이펙트/계산)을 재사용하기 위해","라우팅을 더 쉽게 만들기 위해","CSS를 모듈화하기 위해"],answer:1})]})}function yy(){return n.jsxs(Ue,{title:"Context API",subtitle:"Props drilling 없이 전역 상태를 공유하는 방법",xp:350,prevLesson:{path:"/learn/comps/forms",name:"폼 관리",xp:300},nextLesson:{path:"/learn/advanced/reducer",name:"useReducer",xp:350},children:[n.jsxs("section",{children:[n.jsx("h2",{children:"Context란?"}),n.jsx("p",{children:"Context는 컴포넌트 트리 전체에 데이터를 전달할 수 있는 방법입니다. 일일이 props를 전달하지 않아도 깊이 중첩된 컴포넌트에서 값을 사용할 수 있습니다."}),n.jsx(Y,{type:"info",title:"Props Drilling 문제",children:"부모에서 깊이 중첩된 자식까지 props를 전달하려면 중간의 모든 컴포넌트가 해당 props를 받아서 전달해야 합니다. Context는 이 문제를 해결합니다."}),n.jsx(A,{title:"Props Drilling vs Context",children:`// ❌ Props Drilling - 모든 중간 컴포넌트가 props 전달
<App>
  <Layout user={user}>
    <Header user={user}>
      <UserMenu user={user} />
    </Header>
  </Layout>
</App>

// ✅ Context - 필요한 곳에서 직접 사용
<UserContext.Provider value={user}>
  <App>
    <Layout>
      <Header>
        <UserMenu />  {/* useContext로 직접 접근 */}
      </Header>
    </Layout>
  </App>
</UserContext.Provider>`})]}),n.jsxs("section",{children:[n.jsx("h2",{children:"Context 생성 및 사용"}),n.jsx(A,{title:"기본 사용법",children:`import { createContext, useContext, useState } from 'react'

// 1. Context 생성
const ThemeContext = createContext('light')

// 2. Provider 컴포넌트
function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light')

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light')
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

// 3. Context 사용
function ThemedButton() {
  const { theme, toggleTheme } = useContext(ThemeContext)

  return (
    <button
      onClick={toggleTheme}
      style={{
        background: theme === 'light' ? '#fff' : '#333',
        color: theme === 'light' ? '#333' : '#fff'
      }}
    >
      현재 테마: {theme}
    </button>
  )
}

// 4. 앱에 적용
function App() {
  return (
    <ThemeProvider>
      <ThemedButton />
    </ThemeProvider>
  )
}`}),n.jsxs("div",{style:{padding:"1.5rem",background:"var(--bg-card)",borderRadius:"12px",border:"1px solid var(--border)"},children:[n.jsx("h3",{style:{marginBottom:"1rem"},children:"실습: 테마 토글"}),n.jsx(gy,{})]})]}),n.jsxs("section",{children:[n.jsx("h2",{children:"실전 예제: 인증 Context"}),n.jsx(A,{title:"AuthContext 구현",children:`// contexts/AuthContext.jsx
import { createContext, useContext, useState, useEffect } from 'react'

const AuthContext = createContext(null)

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // 저장된 토큰으로 사용자 정보 복원
    const token = localStorage.getItem('token')
    if (token) {
      fetchUser(token).then(setUser).finally(() => setLoading(false))
    } else {
      setLoading(false)
    }
  }, [])

  const login = async (email, password) => {
    const response = await fetch('/api/login', {
      method: 'POST',
      body: JSON.stringify({ email, password })
    })
    const { user, token } = await response.json()
    localStorage.setItem('token', token)
    setUser(user)
  }

  const logout = () => {
    localStorage.removeItem('token')
    setUser(null)
  }

  return (
    <AuthContext.Provider value={{ user, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  )
}

// 커스텀 훅으로 사용 편의성 향상
export function useAuth() {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider')
  }
  return context
}

// 사용 예시
function NavBar() {
  const { user, logout } = useAuth()

  return (
    <nav>
      {user ? (
        <>
          <span>{user.name}님</span>
          <button onClick={logout}>로그아웃</button>
        </>
      ) : (
        <Link to="/login">로그인</Link>
      )}
    </nav>
  )
}`})]}),n.jsxs("section",{children:[n.jsx("h2",{children:"Context 분리하기"}),n.jsx("p",{children:"자주 변경되는 값과 정적인 값을 분리하면 불필요한 리렌더링을 줄일 수 있습니다."}),n.jsx(A,{title:"Context 분리 패턴",children:`// ❌ 모든 것을 하나의 Context에
const AppContext = createContext()

function AppProvider({ children }) {
  const [user, setUser] = useState(null)
  const [theme, setTheme] = useState('light')
  const [notifications, setNotifications] = useState([])

  // user만 변경되어도 모든 consumer가 리렌더링됨!
  return (
    <AppContext.Provider value={{ user, theme, notifications, ... }}>
      {children}
    </AppContext.Provider>
  )
}

// ✅ 관심사별로 Context 분리
const UserContext = createContext()
const ThemeContext = createContext()
const NotificationContext = createContext()

function AppProviders({ children }) {
  return (
    <UserProvider>
      <ThemeProvider>
        <NotificationProvider>
          {children}
        </NotificationProvider>
      </ThemeProvider>
    </UserProvider>
  )
}

// 필요한 Context만 구독
function Profile() {
  const { user } = useUser()  // user 변경 시에만 리렌더링
  return <div>{user.name}</div>
}`}),n.jsx(Y,{type:"tip",title:"Context 사용 시 주의점",children:n.jsxs("ul",{children:[n.jsx("li",{children:"Context는 전역 상태 관리를 위한 것이 아닙니다"}),n.jsx("li",{children:"자주 변경되는 값은 Context 대신 다른 방법을 고려하세요"}),n.jsx("li",{children:"Provider의 value가 객체라면 useMemo로 감싸세요"})]})})]}),n.jsxs("section",{children:[n.jsx("h2",{children:"Context 최적화"}),n.jsx(A,{title:"value 메모이제이션",children:`function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light')

  // ❌ 매 렌더링마다 새 객체 생성
  // const value = { theme, setTheme }

  // ✅ useMemo로 메모이제이션
  const value = useMemo(() => ({
    theme,
    setTheme
  }), [theme])

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  )
}

// 상태와 디스패치 분리
const ThemeStateContext = createContext()
const ThemeDispatchContext = createContext()

function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light')

  return (
    <ThemeStateContext.Provider value={theme}>
      <ThemeDispatchContext.Provider value={setTheme}>
        {children}
      </ThemeDispatchContext.Provider>
    </ThemeStateContext.Provider>
  )
}

// 상태만 필요한 컴포넌트
function ThemedText() {
  const theme = useContext(ThemeStateContext)
  return <p style={{ color: theme === 'light' ? '#000' : '#fff' }}>텍스트</p>
}

// 변경 함수만 필요한 컴포넌트 (상태 변경에 리렌더링 안됨)
function ThemeToggle() {
  const setTheme = useContext(ThemeDispatchContext)
  return <button onClick={() => setTheme(t => t === 'light' ? 'dark' : 'light')}>토글</button>
}`})]}),n.jsx(_e,{question:"Context를 사용하면 좋은 경우는?",options:["모든 상태 관리에 사용","자주 변경되는 데이터 공유","테마, 인증, 언어 설정 등 전역적으로 필요한 데이터","컴포넌트 간 직접 통신"],answer:2})]})}const jy=b.createContext();function gy(){const[u,r]=b.useState("light");return n.jsx(jy.Provider,{value:{theme:u,setTheme:r},children:n.jsxs("div",{style:{padding:"1rem",borderRadius:"8px",background:u==="light"?"#f5f5f5":"#1a1a1a",color:u==="light"?"#1a1a1a":"#f5f5f5",transition:"all 0.3s"},children:[n.jsxs("p",{style:{marginBottom:"1rem"},children:["현재 테마: ",u]}),n.jsx("button",{onClick:()=>r(d=>d==="light"?"dark":"light"),style:{background:u==="light"?"#1a1a1a":"#f5f5f5",color:u==="light"?"#f5f5f5":"#1a1a1a",border:"none",padding:"0.5rem 1rem",borderRadius:"6px",cursor:"pointer"},children:"테마 전환"})]})})}function by(){return n.jsxs(Ue,{title:"useReducer",subtitle:"복잡한 상태 로직을 관리하는 Hook",xp:350,prevLesson:{path:"/learn/advanced/context",name:"Context API",xp:350},nextLesson:{path:"/learn/advanced/performance",name:"성능 최적화",xp:400},children:[n.jsxs("section",{children:[n.jsx("h2",{children:"useReducer란?"}),n.jsx("p",{children:"useReducer는 useState의 대안으로, 복잡한 상태 로직을 관리할 때 유용합니다. Redux의 reducer 패턴과 유사하게 action을 통해 상태를 업데이트합니다."}),n.jsx(A,{title:"기본 문법",children:`import { useReducer } from 'react'

// reducer 함수: (현재상태, 액션) => 새로운상태
function reducer(state, action) {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 }
    case 'DECREMENT':
      return { count: state.count - 1 }
    case 'RESET':
      return { count: 0 }
    default:
      return state
  }
}

function Counter() {
  // useReducer(reducer함수, 초기상태)
  const [state, dispatch] = useReducer(reducer, { count: 0 })

  return (
    <div>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>+1</button>
      <button onClick={() => dispatch({ type: 'DECREMENT' })}>-1</button>
      <button onClick={() => dispatch({ type: 'RESET' })}>초기화</button>
    </div>
  )
}`}),n.jsxs("div",{style:{padding:"1.5rem",background:"var(--bg-card)",borderRadius:"12px",border:"1px solid var(--border)"},children:[n.jsx("h3",{style:{marginBottom:"1rem"},children:"실습: 카운터"}),n.jsx(Cy,{})]})]}),n.jsxs("section",{children:[n.jsx("h2",{children:"useState vs useReducer"}),n.jsx(A,{title:"비교",children:`// useState - 간단한 상태에 적합
const [count, setCount] = useState(0)
const [name, setName] = useState('')
const [isLoading, setIsLoading] = useState(false)

// 상태 변경
setCount(count + 1)
setName('홍길동')
setIsLoading(true)

// useReducer - 복잡한 상태에 적합
const [state, dispatch] = useReducer(reducer, initialState)

// 상태 변경
dispatch({ type: 'INCREMENT' })
dispatch({ type: 'SET_NAME', payload: '홍길동' })
dispatch({ type: 'FETCH_START' })`}),n.jsx(Y,{type:"info",title:"useReducer를 선택해야 할 때",children:n.jsxs("ul",{children:[n.jsx("li",{children:"상태가 여러 값을 포함하는 객체일 때"}),n.jsx("li",{children:"다음 상태가 이전 상태에 의존할 때"}),n.jsx("li",{children:"상태 업데이트 로직이 복잡할 때"}),n.jsx("li",{children:"여러 컴포넌트에서 같은 로직을 재사용할 때"})]})})]}),n.jsxs("section",{children:[n.jsx("h2",{children:"실전 예제: Todo 앱"}),n.jsx(A,{title:"Todo Reducer",children:`const initialState = {
  todos: [],
  filter: 'all'  // 'all' | 'active' | 'completed'
}

function todoReducer(state, action) {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            id: Date.now(),
            text: action.payload,
            completed: false
          }
        ]
      }

    case 'TOGGLE_TODO':
      return {
        ...state,
        todos: state.todos.map(todo =>
          todo.id === action.payload
            ? { ...todo, completed: !todo.completed }
            : todo
        )
      }

    case 'DELETE_TODO':
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== action.payload)
      }

    case 'SET_FILTER':
      return {
        ...state,
        filter: action.payload
      }

    case 'CLEAR_COMPLETED':
      return {
        ...state,
        todos: state.todos.filter(todo => !todo.completed)
      }

    default:
      return state
  }
}

function TodoApp() {
  const [state, dispatch] = useReducer(todoReducer, initialState)
  const [input, setInput] = useState('')

  const filteredTodos = state.todos.filter(todo => {
    if (state.filter === 'active') return !todo.completed
    if (state.filter === 'completed') return todo.completed
    return true
  })

  return (
    <div>
      <input
        value={input}
        onChange={e => setInput(e.target.value)}
        onKeyPress={e => {
          if (e.key === 'Enter' && input.trim()) {
            dispatch({ type: 'ADD_TODO', payload: input })
            setInput('')
          }
        }}
      />

      <ul>
        {filteredTodos.map(todo => (
          <li key={todo.id}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => dispatch({ type: 'TOGGLE_TODO', payload: todo.id })}
            />
            <span>{todo.text}</span>
            <button onClick={() => dispatch({ type: 'DELETE_TODO', payload: todo.id })}>
              삭제
            </button>
          </li>
        ))}
      </ul>

      <div>
        <button onClick={() => dispatch({ type: 'SET_FILTER', payload: 'all' })}>
          전체
        </button>
        <button onClick={() => dispatch({ type: 'SET_FILTER', payload: 'active' })}>
          진행중
        </button>
        <button onClick={() => dispatch({ type: 'SET_FILTER', payload: 'completed' })}>
          완료
        </button>
      </div>
    </div>
  )
}`}),n.jsxs("div",{style:{padding:"1.5rem",background:"var(--bg-card)",borderRadius:"12px",border:"1px solid var(--border)"},children:[n.jsx("h3",{style:{marginBottom:"1rem"},children:"실습: Todo 앱"}),n.jsx(Ny,{})]})]}),n.jsxs("section",{children:[n.jsx("h2",{children:"비동기 작업 처리"}),n.jsx(A,{title:"Fetch 상태 관리",children:`const initialState = {
  data: null,
  loading: false,
  error: null
}

function fetchReducer(state, action) {
  switch (action.type) {
    case 'FETCH_START':
      return { ...state, loading: true, error: null }

    case 'FETCH_SUCCESS':
      return { ...state, loading: false, data: action.payload }

    case 'FETCH_ERROR':
      return { ...state, loading: false, error: action.payload }

    default:
      return state
  }
}

function DataFetcher({ url }) {
  const [state, dispatch] = useReducer(fetchReducer, initialState)

  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: 'FETCH_START' })

      try {
        const response = await fetch(url)
        const data = await response.json()
        dispatch({ type: 'FETCH_SUCCESS', payload: data })
      } catch (error) {
        dispatch({ type: 'FETCH_ERROR', payload: error.message })
      }
    }

    fetchData()
  }, [url])

  if (state.loading) return <div>로딩 중...</div>
  if (state.error) return <div>에러: {state.error}</div>

  return <div>{JSON.stringify(state.data)}</div>
}`})]}),n.jsxs("section",{children:[n.jsx("h2",{children:"Context와 함께 사용하기"}),n.jsx(A,{title:"전역 상태 관리",children:`import { createContext, useContext, useReducer } from 'react'

const StateContext = createContext()
const DispatchContext = createContext()

function appReducer(state, action) {
  switch (action.type) {
    case 'LOGIN':
      return { ...state, user: action.payload }
    case 'LOGOUT':
      return { ...state, user: null }
    case 'SET_THEME':
      return { ...state, theme: action.payload }
    default:
      return state
  }
}

const initialState = {
  user: null,
  theme: 'light'
}

export function AppProvider({ children }) {
  const [state, dispatch] = useReducer(appReducer, initialState)

  return (
    <StateContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>
        {children}
      </DispatchContext.Provider>
    </StateContext.Provider>
  )
}

// 커스텀 훅
export const useAppState = () => useContext(StateContext)
export const useAppDispatch = () => useContext(DispatchContext)

// 사용
function UserPanel() {
  const state = useAppState()
  const dispatch = useAppDispatch()

  return (
    <div>
      {state.user ? (
        <button onClick={() => dispatch({ type: 'LOGOUT' })}>
          로그아웃
        </button>
      ) : (
        <button onClick={() => dispatch({ type: 'LOGIN', payload: { name: '홍길동' } })}>
          로그인
        </button>
      )}
    </div>
  )
}`})]}),n.jsx(_e,{question:"useReducer의 dispatch 함수는 언제 재생성될까요?",options:["매 렌더링마다","상태가 변경될 때마다","컴포넌트 생명주기 동안 안정적 (재생성 안됨)","reducer 함수가 변경될 때마다"],answer:2})]})}function Sy(u,r){switch(r.type){case"INCREMENT":return{count:u.count+1};case"DECREMENT":return{count:u.count-1};case"RESET":return{count:0};default:return u}}function Cy(){const[u,r]=b.useReducer(Sy,{count:0});return n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"1rem"},children:[n.jsx("button",{onClick:()=>r({type:"DECREMENT"}),children:"-"}),n.jsx("span",{style:{fontSize:"1.5rem",fontWeight:"bold",minWidth:"3rem",textAlign:"center"},children:u.count}),n.jsx("button",{onClick:()=>r({type:"INCREMENT"}),children:"+"}),n.jsx("button",{onClick:()=>r({type:"RESET"}),className:"outline",style:{marginLeft:"1rem"},children:"초기화"})]})}function Ey(u,r){switch(r.type){case"ADD":return[...u,{id:Date.now(),text:r.payload,done:!1}];case"TOGGLE":return u.map(d=>d.id===r.payload?{...d,done:!d.done}:d);case"DELETE":return u.filter(d=>d.id!==r.payload);default:return u}}function Ny(){const[u,r]=b.useReducer(Ey,[{id:1,text:"useReducer 배우기",done:!0},{id:2,text:"Context와 함께 사용하기",done:!1}]),[d,o]=b.useState(""),m=()=>{d.trim()&&(r({type:"ADD",payload:d}),o(""))};return n.jsxs("div",{children:[n.jsxs("div",{style:{display:"flex",gap:"0.5rem",marginBottom:"1rem"},children:[n.jsx("input",{value:d,onChange:h=>o(h.target.value),onKeyPress:h=>h.key==="Enter"&&m(),placeholder:"새 할 일...",style:{flex:1,padding:"0.5rem",borderRadius:"6px",border:"1px solid var(--border)",background:"var(--bg-secondary)",color:"var(--text-primary)"}}),n.jsx("button",{onClick:m,children:"추가"})]}),n.jsx("ul",{style:{listStyle:"none",padding:0},children:u.map(h=>n.jsxs("li",{style:{display:"flex",alignItems:"center",gap:"0.5rem",padding:"0.5rem 0",borderBottom:"1px solid var(--border)"},children:[n.jsx("input",{type:"checkbox",checked:h.done,onChange:()=>r({type:"TOGGLE",payload:h.id})}),n.jsx("span",{style:{flex:1,textDecoration:h.done?"line-through":"none",color:h.done?"var(--text-secondary)":"var(--text-primary)"},children:h.text}),n.jsx("button",{onClick:()=>r({type:"DELETE",payload:h.id}),style:{padding:"0.25rem 0.5rem",fontSize:"0.8rem"},children:"삭제"})]},h.id))})]})}function Ty(){return n.jsxs(Ue,{title:"성능 최적화",subtitle:"React 앱의 성능을 향상시키는 기법들",xp:400,prevLesson:{path:"/learn/advanced/reducer",name:"useReducer",xp:350},nextLesson:{path:"/learn/advanced/patterns",name:"고급 패턴",xp:400},children:[n.jsxs("section",{children:[n.jsx("h2",{children:"리렌더링 이해하기"}),n.jsx("p",{children:"React 컴포넌트는 다음 상황에서 리렌더링됩니다:"}),n.jsxs("ul",{children:[n.jsx("li",{children:"상태(state)가 변경될 때"}),n.jsx("li",{children:"props가 변경될 때"}),n.jsx("li",{children:"부모 컴포넌트가 리렌더링될 때"}),n.jsx("li",{children:"Context 값이 변경될 때"})]}),n.jsx(Y,{type:"info",title:"불필요한 리렌더링",children:"부모가 리렌더링되면 자식도 기본적으로 리렌더링됩니다. props가 변경되지 않아도요! 이것이 최적화가 필요한 이유입니다."})]}),n.jsxs("section",{children:[n.jsx("h2",{children:"React.memo"}),n.jsx("p",{children:"memo는 컴포넌트를 메모이제이션하여 props가 변경되지 않으면 리렌더링을 건너뜁니다."}),n.jsx(A,{title:"React.memo 사용법",children:`import { memo } from 'react'

// 기본 사용
const ExpensiveComponent = memo(function ExpensiveComponent({ data }) {
  console.log('렌더링!')
  return <div>{/* 복잡한 UI */}</div>
})

// 화살표 함수
const ExpensiveComponent = memo(({ data }) => {
  return <div>{/* 복잡한 UI */}</div>
})

// 커스텀 비교 함수
const MyComponent = memo(
  function MyComponent({ user, onClick }) {
    return <div>{user.name}</div>
  },
  (prevProps, nextProps) => {
    // true를 반환하면 리렌더링 안함
    return prevProps.user.id === nextProps.user.id
  }
)

// 사용 예시
function Parent() {
  const [count, setCount] = useState(0)
  const data = { items: [...] }

  return (
    <div>
      <button onClick={() => setCount(c => c + 1)}>
        Count: {count}
      </button>
      {/* count 변경 시에도 리렌더링 안됨 (data가 같으면) */}
      <ExpensiveComponent data={data} />
    </div>
  )
}`}),n.jsx(Y,{type:"warning",title:"주의",children:"객체/배열/함수 props는 매 렌더링마다 새로 생성됩니다! memo를 사용해도 효과가 없을 수 있어요. useMemo/useCallback과 함께 사용하세요."})]}),n.jsxs("section",{children:[n.jsx("h2",{children:"useMemo"}),n.jsx("p",{children:"값을 메모이제이션하여 불필요한 재계산을 방지합니다."}),n.jsx(A,{title:"useMemo 사용법",children:`import { useMemo } from 'react'

function ExpensiveCalculation({ numbers, filter }) {
  // ❌ 매 렌더링마다 재계산
  const total = numbers
    .filter(n => n > filter)
    .reduce((sum, n) => sum + n, 0)

  // ✅ numbers나 filter가 변경될 때만 재계산
  const total = useMemo(() => {
    console.log('계산 중...')
    return numbers
      .filter(n => n > filter)
      .reduce((sum, n) => sum + n, 0)
  }, [numbers, filter])

  return <div>합계: {total}</div>
}

// 객체 참조 유지
function UserList({ users }) {
  const [search, setSearch] = useState('')

  // ✅ search가 변경될 때만 새 배열 생성
  const filteredUsers = useMemo(() => {
    return users.filter(user =>
      user.name.toLowerCase().includes(search.toLowerCase())
    )
  }, [users, search])

  return (
    <div>
      <input value={search} onChange={e => setSearch(e.target.value)} />
      <MemoizedList users={filteredUsers} />
    </div>
  )
}`}),n.jsxs("div",{style:{padding:"1.5rem",background:"var(--bg-card)",borderRadius:"12px",border:"1px solid var(--border)"},children:[n.jsx("h3",{style:{marginBottom:"1rem"},children:"실습: useMemo"}),n.jsx(Ry,{})]})]}),n.jsxs("section",{children:[n.jsx("h2",{children:"useCallback"}),n.jsx("p",{children:"함수를 메모이제이션하여 자식 컴포넌트의 불필요한 리렌더링을 방지합니다."}),n.jsx(A,{title:"useCallback 사용법",children:`import { useCallback, memo } from 'react'

// 메모이제이션된 자식 컴포넌트
const Button = memo(({ onClick, children }) => {
  console.log('Button 렌더링:', children)
  return <button onClick={onClick}>{children}</button>
})

function Parent() {
  const [count, setCount] = useState(0)
  const [text, setText] = useState('')

  // ❌ 매 렌더링마다 새 함수 생성
  // const handleClick = () => setCount(c => c + 1)

  // ✅ 함수 메모이제이션
  const handleClick = useCallback(() => {
    setCount(c => c + 1)
  }, [])  // 의존성 없음 - 항상 같은 함수

  // 의존성이 있는 경우
  const handleSearch = useCallback((query) => {
    console.log(\`Searching: \${query}, count: \${count}\`)
  }, [count])  // count가 변경되면 새 함수 생성

  return (
    <div>
      <input value={text} onChange={e => setText(e.target.value)} />
      {/* text가 변경되어도 Button은 리렌더링 안됨 */}
      <Button onClick={handleClick}>클릭: {count}</Button>
    </div>
  )
}`})]}),n.jsxs("section",{children:[n.jsx("h2",{children:"최적화 가이드라인"}),n.jsx(A,{title:"언제 최적화할까?",children:`// ✅ 최적화가 필요한 경우
// 1. 큰 리스트 렌더링
const LargeList = memo(({ items }) => (
  <ul>
    {items.map(item => <li key={item.id}>{item.name}</li>)}
  </ul>
))

// 2. 비용이 큰 계산
const expensiveResult = useMemo(() => {
  return heavyCalculation(data)
}, [data])

// 3. 메모이제이션된 자식에게 전달하는 콜백
const handleClick = useCallback(() => {
  doSomething()
}, [])

// ❌ 과도한 최적화 (premature optimization)
// 1. 간단한 컴포넌트
const SimpleText = memo(({ text }) => <span>{text}</span>)  // 불필요

// 2. 항상 다른 props
const item = useMemo(() => ({ id: Math.random() }), [])  // 의미 없음

// 3. 비용이 적은 계산
const doubled = useMemo(() => count * 2, [count])  // 오버헤드만 추가`}),n.jsx(Y,{type:"tip",title:"최적화 원칙",children:n.jsxs("ol",{children:[n.jsxs("li",{children:[n.jsx("strong",{children:"측정 먼저:"})," React DevTools Profiler로 실제 문제 확인"]}),n.jsxs("li",{children:[n.jsx("strong",{children:"구조 개선:"})," 상태 끌어올리기/내리기, 컴포넌트 분리"]}),n.jsxs("li",{children:[n.jsx("strong",{children:"메모이제이션:"})," memo, useMemo, useCallback 적용"]})]})})]}),n.jsxs("section",{children:[n.jsx("h2",{children:"상태 구조 최적화"}),n.jsx(A,{title:"상태 위치 최적화",children:`// ❌ 상태가 너무 높은 위치
function App() {
  const [inputValue, setInputValue] = useState('')

  return (
    <div>
      <Header />  {/* inputValue 변경 시 불필요한 리렌더링 */}
      <Sidebar /> {/* inputValue 변경 시 불필요한 리렌더링 */}
      <SearchBox value={inputValue} onChange={setInputValue} />
    </div>
  )
}

// ✅ 상태를 사용하는 곳 가까이에
function App() {
  return (
    <div>
      <Header />
      <Sidebar />
      <SearchBox />  {/* 상태를 내부에서 관리 */}
    </div>
  )
}

function SearchBox() {
  const [inputValue, setInputValue] = useState('')
  return <input value={inputValue} onChange={e => setInputValue(e.target.value)} />
}

// ✅ 변경되는 부분만 분리
function Parent() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <ExpensiveStatic />  {/* count 변경에 영향 받지 않음 */}
      <CountDisplay count={count} />
      <button onClick={() => setCount(c => c + 1)}>증가</button>
    </div>
  )
}`})]}),n.jsx(_e,{question:"React.memo로 감싼 컴포넌트가 여전히 리렌더링되는 이유로 올바른 것은?",options:["memo가 제대로 작동하지 않아서","props로 전달된 객체/함수가 매번 새로 생성되어서","React의 버그","memo는 클래스 컴포넌트에서만 작동해서"],answer:1})]})}function Ry(){const[u,r]=b.useState(0),[d]=b.useState(()=>Array.from({length:100},(m,h)=>h+1)),o=b.useMemo(()=>(console.log("합계 계산 중..."),d.reduce((m,h)=>m+h,0)),[d]);return n.jsxs("div",{children:[n.jsxs("p",{children:["1~100 합계: ",n.jsx("strong",{children:o})," (콘솔 확인 - 한 번만 계산됨)"]}),n.jsxs("p",{children:["카운트: ",n.jsx("strong",{children:u})]}),n.jsx("button",{onClick:()=>r(m=>m+1),children:"카운트 증가 (합계 재계산 안함)"})]})}function Ay(){return n.jsxs(Ue,{title:"고급 패턴",subtitle:"재사용성과 확장성을 위한 컴포넌트 설계 패턴 모음",xp:400,prevLesson:{path:"/learn/advanced/performance",name:"성능 최적화",xp:400},nextLesson:{path:"/learn/advanced/suspense",name:"Suspense",xp:450},children:[n.jsxs("section",{children:[n.jsx("h2",{children:"고급 패턴이 필요한 이유"}),n.jsx("p",{children:"UI가 커지면 “컴포넌트를 재사용한다”는 말은 단순히 JSX를 복사하지 않는다는 뜻이 아닙니다. 상태/행동/표현 책임을 어떻게 분리해서, 수정 비용이 폭발하지 않게 만들 것인가가 핵심입니다. 아래 패턴들은 그 문제를 구조적으로 해결하는 도구들입니다."}),n.jsx(Y,{type:"info",title:"패턴을 쓰는 기준",children:n.jsxs("ul",{children:[n.jsxs("li",{children:["UI 재사용이 아니라 ",n.jsx("strong",{children:"행동/상태/데이터 흐름"})," 재사용이 필요할 때"]}),n.jsx("li",{children:"컴포넌트가 “옵션 덕지덕지”로 커지고 있다면 패턴으로 분해할 타이밍"}),n.jsx("li",{children:"API(Props) 설계를 단순화하고, 내부 구현을 바꾸기 쉬운 형태로 만들고 싶을 때"})]})})]}),n.jsxs("section",{children:[n.jsx("h2",{children:"1) Compound Components 패턴"}),n.jsx("p",{children:"“부모가 상태를 갖고, 자식들이 그 상태를 공유하며 역할을 분담”하는 패턴입니다. Dropdown, Tabs, Accordion 같은 UI에서 자주 씁니다."}),n.jsx(A,{title:"Compound Components (Context 기반)",children:`import { createContext, useContext, useMemo, useState } from 'react'

const TabsContext = createContext(null)

function Tabs({ defaultValue, children }) {
  const [value, setValue] = useState(defaultValue)

  const ctx = useMemo(() => ({ value, setValue }), [value])
  return <TabsContext.Provider value={ctx}>{children}</TabsContext.Provider>
}

function useTabs() {
  const ctx = useContext(TabsContext)
  if (!ctx) throw new Error('Tabs.* must be used within <Tabs>')
  return ctx
}

Tabs.List = function TabsList({ children }) {
  return <div style={{ display: 'flex', gap: 8 }}>{children}</div>
}

Tabs.Trigger = function TabsTrigger({ value, children }) {
  const tabs = useTabs()
  const active = tabs.value === value

  return (
    <button
      onClick={() => tabs.setValue(value)}
      style={{ fontWeight: active ? 800 : 400 }}
      type="button"
    >
      {children}
    </button>
  )
}

Tabs.Panel = function TabsPanel({ value, children }) {
  const tabs = useTabs()
  if (tabs.value !== value) return null
  return <div style={{ paddingTop: 12 }}>{children}</div>
}

// 사용
function Example() {
  return (
    <Tabs defaultValue="a">
      <Tabs.List>
        <Tabs.Trigger value="a">A</Tabs.Trigger>
        <Tabs.Trigger value="b">B</Tabs.Trigger>
      </Tabs.List>

      <Tabs.Panel value="a">A 내용</Tabs.Panel>
      <Tabs.Panel value="b">B 내용</Tabs.Panel>
    </Tabs>
  )
}`}),n.jsx(Y,{type:"tip",title:"핵심 장점",children:n.jsxs("ul",{children:[n.jsx("li",{children:"Props 폭발을 막습니다 (Tabs에 props 20개 이런 형태를 피함)"}),n.jsx("li",{children:"구조가 “조립 가능한 API”로 바뀝니다"})]})})]}),n.jsxs("section",{children:[n.jsx("h2",{children:"2) Render Props 패턴"}),n.jsx("p",{children:"“컴포넌트가 로직을 제공하고, UI는 함수(children)로 외부에서 결정”하는 방식입니다. 커스텀 훅으로 대체되는 경우가 많지만, UI 제어를 매우 유연하게 해야 할 때 여전히 유효합니다."}),n.jsx(A,{title:"Render Props 예시",children:`function MouseTracker({ children }) {
  const [pos, setPos] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const onMove = (e) => setPos({ x: e.clientX, y: e.clientY })
    window.addEventListener('mousemove', onMove)
    return () => window.removeEventListener('mousemove', onMove)
  }, [])

  return children(pos)
}

// 사용
function Example() {
  return (
    <MouseTracker>
      {({ x, y }) => (
        <p>마우스: {x}, {y}</p>
      )}
    </MouseTracker>
  )
}`}),n.jsx(Y,{type:"warning",title:"주의점",children:n.jsxs("ul",{children:[n.jsx("li",{children:"컴포넌트 트리가 깊어지면 가독성이 떨어질 수 있습니다"}),n.jsx("li",{children:"대부분은 커스텀 훅이 더 단순하지만, UI 제어가 복잡하면 Render Props가 유리합니다"})]})})]}),n.jsxs("section",{children:[n.jsx("h2",{children:"3) Controlled / Uncontrolled 설계"}),n.jsxs("p",{children:["같은 컴포넌트라도 “외부가 상태를 제어할 수 있게” 만들면 재사용성이 크게 올라갑니다. 실무에서는 보통 ",n.jsx("code",{children:"value"}),"/",n.jsx("code",{children:"onChange"}),"가 있으면 controlled, 없으면 내부 state로 동작하는 uncontrolled “하이브리드”를 많이 씁니다."]}),n.jsx(A,{title:"하이브리드 컴포넌트 (controlled/uncontrolled)",children:`function Toggle({ value, defaultValue = false, onChange }) {
  const [internal, setInternal] = useState(defaultValue)

  const isControlled = value !== undefined
  const current = isControlled ? value : internal

  const set = (next) => {
    if (!isControlled) setInternal(next)
    onChange?.(next)
  }

  return (
    <button type="button" onClick={() => set(!current)}>
      {current ? 'ON' : 'OFF'}
    </button>
  )
}

// 사용
function Example() {
  const [v, setV] = useState(false)

  return (
    <div>
      <Toggle value={v} onChange={setV} />
      <Toggle defaultValue />
    </div>
  )
}`}),n.jsx(Y,{type:"info",title:"실무 포인트",children:n.jsxs("ul",{children:[n.jsx("li",{children:"외부 제어 가능하게 만들면 테스트/상태 동기화가 쉬워집니다"}),n.jsx("li",{children:"하지만 controlled는 렌더링/상태 흐름이 더 엄격해져야 합니다"})]})})]}),n.jsxs("section",{children:[n.jsx("h2",{children:"4) Slot 패턴(Composition)"}),n.jsx("p",{children:"Props로 옵션을 계속 늘리는 대신, “자리에 넣는 방식”으로 컴포넌트를 구성합니다. Header / Body / Footer 같은 레이아웃형 UI에서 특히 강력합니다."}),n.jsx(A,{title:"Slot 기반 Card",children:`function Card({ header, footer, children }) {
  return (
    <div style={{ border: '1px solid #3333', borderRadius: 12, padding: 16 }}>
      {header && <div style={{ marginBottom: 12 }}>{header}</div>}
      <div>{children}</div>
      {footer && <div style={{ marginTop: 12 }}>{footer}</div>}
    </div>
  )
}

// 사용
function Example() {
  return (
    <Card
      header={<h3>제목</h3>}
      footer={<button>확인</button>}
    >
      본문 내용...
    </Card>
  )
}`}),n.jsx(Y,{type:"tip",title:"Slot 패턴의 목적",children:n.jsxs("ul",{children:[n.jsx("li",{children:"옵션 prop 폭발 방지"}),n.jsx("li",{children:"UI 확장 지점을 명확하게 노출"})]})})]}),n.jsxs("section",{children:[n.jsx("h2",{children:"5) Polymorphic Component 패턴 (as)"}),n.jsxs("p",{children:["버튼처럼 보이지만 링크로도 쓰고 싶고, div로도 쓰고 싶은 경우가 있습니다. 이때 ",n.jsx("code",{children:"as"})," prop으로 렌더링 태그를 바꾸는 패턴을 씁니다. 디자인 시스템에서 흔합니다."]}),n.jsx(A,{title:"as prop 패턴 (JS 버전)",children:`function Box({ as: Component = 'div', ...props }) {
  return <Component {...props} />
}

// 사용
function Example() {
  return (
    <div>
      <Box as="a" href="/learn">링크처럼</Box>
      <Box as="button" onClick={() => alert('ok')}>버튼처럼</Box>
    </div>
  )
}`}),n.jsx(Y,{type:"warning",title:"타입 안정성",children:n.jsxs("ul",{children:[n.jsx("li",{children:"TypeScript에서는 제네릭으로 “as에 따른 props 타입”을 맞추는 설계가 필요합니다"}),n.jsx("li",{children:"JS만 쓰면 런타임에 잘못된 prop이 섞일 수 있어 주의가 필요합니다"})]})})]}),n.jsxs("section",{children:[n.jsx("h2",{children:"6) 상태를 밖으로 밀어내는 패턴 (State Hoisting)"}),n.jsx("p",{children:"상태를 내부에 숨기면 컴포넌트는 편하지만, 여러 곳에서 동기화해야 할 때 즉시 한계가 옵니다. “공유되어야 하는 상태”는 상위로 끌어올리고, 하위는 표현에 집중시키는 편이 구조적으로 안정적입니다."}),n.jsx(A,{title:"State Hoisting 예시",children:`function FilterBar({ value, onChange }) {
  return (
    <input
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder="검색..."
    />
  )
}

function ListPage({ items }) {
  const [q, setQ] = useState('')

  const filtered = useMemo(() => {
    const t = q.trim()
    if (!t) return items
    return items.filter(i => i.name.includes(t))
  }, [items, q])

  return (
    <div>
      <FilterBar value={q} onChange={setQ} />
      <ul>
        {filtered.map(i => <li key={i.id}>{i.name}</li>)}
      </ul>
    </div>
  )
}`})]}),n.jsxs("section",{children:[n.jsx("h2",{children:"7) Escape Hatch: Imperative Handle"}),n.jsx("p",{children:"원칙적으로 React는 선언형이지만, 특정 UX에서는 “명령형 제어”가 더 안전한 경우가 있습니다. 예: 외부에서 input focus 강제, 스크롤 이동 등. 이때는 ref 기반 API를 명시적으로 제공하는 편이 낫습니다."}),n.jsx(A,{title:"ref로 명령형 API 제공 (개념)",children:`// 실제 구현은 forwardRef/useImperativeHandle을 사용합니다.
// 이 레슨에서는 '언제 쓰는가'만 잡고,
// 상세 구현은 useRef/useImperativeHandle 파트에서 심화로 다루면 됩니다.`}),n.jsx(Y,{type:"note",title:"기준",children:n.jsxs("ul",{children:[n.jsx("li",{children:"정말 필요한 경우에만(입력 포커스/스크롤/애니메이션 트리거)"}),n.jsx("li",{children:"명령형 API는 “컴포넌트 계약”이므로 명확하게 작게 설계"})]})})]}),n.jsx(_e,{question:"Compound Components 패턴의 핵심 목적에 가장 가까운 것은?",options:["컴포넌트를 하나로 합쳐 파일 개수를 줄이기 위해","Props 폭발을 막고 조립 가능한 API로 만들기 위해","렌더링을 무조건 빠르게 하기 위해","useEffect를 대체하기 위해"],answer:1})]})}function My(){return n.jsxs(Ue,{title:"Suspense",subtitle:"렌더링을 지연시키는 고급 패턴",xp:450,prevLesson:{path:"/learn/advanced/patterns",name:"고급 패턴",xp:400},nextLesson:{path:"/learn/practice/todo",name:"투두 앱",xp:500},children:[n.jsxs("section",{children:[n.jsx("h2",{children:"Suspense란?"}),n.jsxs("p",{children:["Suspense는 컴포넌트가 ",n.jsx("strong",{children:"아직 준비되지 않았을 때"}),"렌더링을 잠시 멈추고 대체 UI를 보여주는 React의 렌더링 제어 메커니즘입니다."]}),n.jsx(Y,{type:"info",title:"핵심 개념",children:n.jsxs("ul",{children:[n.jsx("li",{children:"로딩 상태를 관리하지 않는다"}),n.jsxs("li",{children:["조건 분기가 아니라 ",n.jsx("strong",{children:"렌더링 중단"}),"이다"]}),n.jsx("li",{children:"아직 준비되지 않은 UI를 React가 대신 기다린다"})]})})]}),n.jsxs("section",{children:[n.jsx("h2",{children:"기본 문법"}),n.jsx(A,{title:"Suspense 기본 형태",children:`import { Suspense } from 'react'

<Suspense fallback={<div>로딩 중...</div>}>
  <SomeComponent />
</Suspense>`}),n.jsx(Y,{type:"tip",title:"fallback의 의미",children:n.jsxs("p",{children:["fallback은 “에러 UI”가 아니라",n.jsx("strong",{children:"준비되지 않은 동안 대신 보여줄 UI"}),"입니다."]})})]}),n.jsxs("section",{children:[n.jsx("h2",{children:"React.lazy와 함께 사용"}),n.jsx(A,{title:"lazy 컴포넌트",children:`import { lazy } from 'react'

const HeavyComponent = lazy(() => import('./HeavyComponent'))`}),n.jsx(A,{title:"Suspense로 감싸기",children:`<Suspense fallback={<p>컴포넌트 로딩 중...</p>}>
  <HeavyComponent />
</Suspense>`}),n.jsxs("div",{style:{padding:"1.5rem",background:"var(--bg-card)",borderRadius:"12px",border:"1px solid var(--border)"},children:[n.jsx("h3",{style:{marginBottom:"1rem"},children:"실습: lazy 컴포넌트"}),n.jsx(Dy,{})]})]}),n.jsxs("section",{children:[n.jsx("h2",{children:"왜 Suspense를 쓰는가"}),n.jsx(A,{title:"기존 방식",children:`if (loading) {
  return <Spinner />
}

return <Component />`}),n.jsx(A,{title:"Suspense 방식",children:`<Suspense fallback={<Spinner />}>
  <Component />
</Suspense>`}),n.jsx(Y,{type:"info",title:"차이점",children:n.jsxs("ul",{children:[n.jsx("li",{children:"기존: 상태 기반 분기"}),n.jsx("li",{children:"Suspense: 렌더링 단계 제어"}),n.jsx("li",{children:"UI 흐름이 선언적으로 정리된다"})]})})]}),n.jsxs("section",{children:[n.jsx("h2",{children:"Boundary 개념"}),n.jsxs("p",{children:["Suspense는 ",n.jsx("strong",{children:"Boundary"}),"입니다. 내부에서 지연이 발생해도 외부 UI는 영향을 받지 않습니다."]}),n.jsx(A,{title:"Suspense Boundary",children:`<Suspense fallback={<HeaderSkeleton />}>
  <Header />
</Suspense>

<Suspense fallback={<ContentSkeleton />}>
  <Content />
</Suspense>`}),n.jsx(Y,{type:"warning",title:"실무 포인트",children:n.jsxs("ul",{children:[n.jsx("li",{children:"페이지 전체를 하나의 Suspense로 감싸지 않는다"}),n.jsx("li",{children:"UI 단위로 Boundary를 나눈다"}),n.jsx("li",{children:"사용자가 기다리는 이유가 보이게 만든다"})]})})]}),n.jsxs("section",{children:[n.jsx("h2",{children:"현재 한계"}),n.jsx(Y,{type:"note",title:"React 18 기준",children:n.jsxs("ul",{children:[n.jsx("li",{children:"데이터 fetching은 기본 Suspense 대상이 아님"}),n.jsx("li",{children:"Next.js / RSC 환경에서 본격 사용"}),n.jsx("li",{children:"클라이언트 앱에서는 lazy loading이 주 용도"})]})})]}),n.jsx(_e,{question:"Suspense의 역할로 가장 적절한 것은?",options:["로딩 상태를 관리한다","비동기 로직을 실행한다","렌더링을 일시 중단하고 대체 UI를 보여준다","에러를 처리한다"],answer:2})]})}function Dy(){const[u,r]=b.useState(!1);return n.jsxs("div",{children:[n.jsx("button",{onClick:()=>r(!0),children:"컴포넌트 로드"}),u&&n.jsx(b.Suspense,{fallback:n.jsx("p",{style:{marginTop:"1rem"},children:"로딩 중..."}),children:n.jsx(HeavyComponent,{})})]})}function zy(){return n.jsxs(Ue,{title:"합성(Composition)",subtitle:"컴포넌트를 조립해 UI와 책임을 분리하는 패턴",xp:250,prevLesson:{path:"/learn/hooks/custom",name:"커스텀 훅"},nextLesson:{path:"/learn/comps/controlled",name:"제어 컴포넌트",xp:250},children:[n.jsxs("section",{children:[n.jsx("h2",{children:"합성이란?"}),n.jsxs("p",{children:["합성은 작은 컴포넌트를 조합해 큰 UI를 만드는 방식입니다. 상속(extends)으로 구조를 늘리는 대신, ",n.jsx("strong",{children:"children"}),"과 props로 구성 요소를 끼워 넣는 형태가 React의 기본 설계와 맞습니다."]}),n.jsx(A,{title:"합성의 핵심 형태",children:`function Card({ children }) {
  return <div className="card">{children}</div>
}

function Page() {
  return (
    <Card>
      <h2>제목</h2>
      <p>내용</p>
    </Card>
  )
}`}),n.jsx(Y,{type:"info",title:"합성이 해결하는 문제",children:n.jsxs("ul",{children:[n.jsx("li",{children:"UI 레이아웃과 내부 내용을 분리할 수 있습니다"}),n.jsx("li",{children:"공통 스타일/구조를 유지하면서 다양한 화면을 만들 수 있습니다"}),n.jsx("li",{children:"컴포넌트 책임이 명확해져 유지보수가 쉬워집니다"})]})})]}),n.jsxs("section",{children:[n.jsx("h2",{children:"1) children 합성"}),n.jsxs("p",{children:["가장 기본적인 합성은 ",n.jsx("code",{children:"children"}),"을 슬롯처럼 쓰는 방식입니다. “껍데기(레이아웃)”와 “내용”을 분리합니다."]}),n.jsx(A,{title:"LayoutShell + children",children:`function Panel({ title, children }) {
  return (
    <section className="panel">
      <header className="panel-header">
        <h3>{title}</h3>
      </header>
      <div className="panel-body">
        {children}
      </div>
    </section>
  )
}

function Dashboard() {
  return (
    <div>
      <Panel title="공지">
        <p>오늘 점검은 18:00에 시작합니다.</p>
      </Panel>

      <Panel title="통계">
        <strong>방문자: 1,245</strong>
      </Panel>
    </div>
  )
}`}),n.jsxs("div",{style:{padding:"1.5rem",background:"var(--bg-card)",borderRadius:"12px",border:"1px solid var(--border)"},children:[n.jsx("h3",{style:{marginBottom:"1rem"},children:"실습: Panel 조립"}),n.jsx(Oy,{})]})]}),n.jsxs("section",{children:[n.jsx("h2",{children:"2) 다중 슬롯 합성"}),n.jsx("p",{children:"children 하나로 부족하면 “슬롯”을 props로 분리합니다. 이런 구조는 레이아웃의 자유도를 키우면서도, 통제력을 유지합니다."}),n.jsx(A,{title:"header/body/footer 슬롯 합성",children:`function Modal({ title, body, footer, onClose }) {
  return (
    <div className="modal">
      <div className="modal-header">
        <h3>{title}</h3>
        <button onClick={onClose}>X</button>
      </div>

      <div className="modal-body">
        {body}
      </div>

      <div className="modal-footer">
        {footer}
      </div>
    </div>
  )
}

function Example() {
  return (
    <Modal
      title="삭제 확인"
      body={<p>정말 삭제하시겠습니까?</p>}
      footer={
        <>
          <button>취소</button>
          <button className="danger">삭제</button>
        </>
      }
      onClose={() => {}}
    />
  )
}`}),n.jsx(Y,{type:"tip",title:"다중 슬롯의 의도",children:n.jsxs("ul",{children:[n.jsx("li",{children:"레이아웃 컴포넌트가 “어디에 무엇이 들어갈지”를 통제합니다"}),n.jsx("li",{children:"호출부는 “무엇을 넣을지”만 결정합니다"})]})})]}),n.jsxs("section",{children:[n.jsx("h2",{children:"3) Compound Components 패턴"}),n.jsx("p",{children:"부모가 구조를 제공하고, 자식 컴포넌트들이 그 구조 안에서 의미를 가지는 패턴입니다. 사용자가 마치 HTML 태그처럼 조립할 수 있게 됩니다."}),n.jsx(A,{title:"Compound Components 기본 형태",children:`function Tabs({ children }) {
  return <div className="tabs">{children}</div>
}

Tabs.List = function TabsList({ children }) {
  return <div className="tabs-list">{children}</div>
}

Tabs.Panel = function TabsPanel({ children }) {
  return <div className="tabs-panel">{children}</div>
}

function Page() {
  return (
    <Tabs>
      <Tabs.List>
        <button>탭1</button>
        <button>탭2</button>
      </Tabs.List>
      <Tabs.Panel>
        탭 내용...
      </Tabs.Panel>
    </Tabs>
  )
}`}),n.jsx(Y,{type:"warning",title:"한계",children:n.jsxs("ul",{children:[n.jsx("li",{children:"상태 공유/선택 제어가 필요하면 Context가 보통 붙습니다"}),n.jsx("li",{children:"구조 제약이 강한 만큼, 문서화와 규칙이 중요합니다"})]})})]}),n.jsxs("section",{children:[n.jsx("h2",{children:"4) Render Props 합성"}),n.jsx("p",{children:"“무엇을 렌더링할지”를 함수로 넘겨서 조립하는 패턴입니다. 로직(상태/계산)은 컴포넌트가 갖고, 표현은 호출부가 갖습니다."}),n.jsx(A,{title:"Render Props 패턴",children:`function MouseTracker({ render }) {
  const [pos, setPos] = useState({ x: 0, y: 0 })

  return (
    <div
      onMouseMove={(e) => setPos({ x: e.clientX, y: e.clientY })}
      style={{ height: 200, border: '1px solid #444' }}
    >
      {render(pos)}
    </div>
  )
}

function Page() {
  return (
    <MouseTracker
      render={({ x, y }) => <p>좌표: {x}, {y}</p>}
    />
  )
}`}),n.jsx(Y,{type:"info",title:"Render Props의 핵심",children:n.jsxs("ul",{children:[n.jsx("li",{children:"로직과 표현을 분리합니다"}),n.jsx("li",{children:"children을 함수로 쓰는 형태도 흔합니다"})]})})]}),n.jsxs("section",{children:[n.jsx("h2",{children:"언제 어떤 합성을 쓰나?"}),n.jsxs("ul",{children:[n.jsxs("li",{children:[n.jsx("strong",{children:"children:"})," 가장 기본. 레이아웃/컨테이너형"]}),n.jsxs("li",{children:[n.jsx("strong",{children:"다중 슬롯:"})," 위치가 명확한 UI(헤더/푸터 있는 카드, 모달)"]}),n.jsxs("li",{children:[n.jsx("strong",{children:"Compound:"})," 구조 규칙이 중요한 UI(탭, 아코디언, 메뉴)"]}),n.jsxs("li",{children:[n.jsx("strong",{children:"Render Props:"})," 로직/표현 분리가 핵심인 컴포넌트"]})]})]}),n.jsx(_e,{question:"합성(Composition)의 핵심 의도에 가장 가까운 설명은?",options:["컴포넌트 기능을 상속으로 확장한다","작은 컴포넌트를 조립해 구조와 책임을 분리한다","DOM을 직접 조작해 렌더링을 최적화한다","전역 상태를 만들기 위해 Context를 사용한다"],answer:1})]})}function vh({title:u,children:r}){return n.jsxs("section",{style:{border:"1px solid var(--border)",borderRadius:"12px",background:"var(--bg-secondary)",padding:"1rem"},children:[n.jsx("header",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"0.75rem"},children:n.jsx("h4",{style:{margin:0},children:u})}),n.jsx("div",{children:r})]})}function Oy(){const[u,r]=b.useState("");return n.jsxs("div",{style:{display:"grid",gap:"0.75rem"},children:[n.jsx(vh,{title:"입력 영역",children:n.jsx("input",{value:u,onChange:d=>r(d.target.value),placeholder:"Panel 안에 들어가는 내용은 자유",style:{width:"100%",padding:"0.75rem",borderRadius:"6px",border:"1px solid var(--border)",background:"var(--bg-card)",color:"var(--text-primary)"}})}),n.jsx(vh,{title:"미리보기",children:u?n.jsx("p",{style:{margin:0},children:u}):n.jsx("p",{style:{margin:0,opacity:.7},children:"아직 입력이 없습니다."})}),n.jsx(Y,{type:"note",title:"관찰 포인트",children:n.jsxs("ul",{children:[n.jsx("li",{children:"Panel은 레이아웃/스타일만 담당합니다"}),n.jsx("li",{children:"내부 내용은 호출부가 결정합니다"}),n.jsx("li",{children:"이 구조가 “합성”의 기본 형태입니다"})]})})]})}function Uy(){return n.jsxs(Ue,{title:"제어 컴포넌트(Controlled Component)",subtitle:"입력 상태를 React가 소유해 일관성을 확보하는 패턴",xp:250,prevLesson:{path:"/learn/comps/components",name:"합성",xp:250},nextLesson:{path:"/learn/comps/events",name:"이벤트 핸들링",xp:200},children:[n.jsxs("section",{children:[n.jsx("h2",{children:"제어 컴포넌트란?"}),n.jsxs("p",{children:["제어 컴포넌트는 input, select, textarea 같은 폼 요소의 값을",n.jsx("strong",{children:"DOM이 아니라 React state"}),"가 소유하는 방식입니다. 즉, 화면에 보이는 값은 state의 “투영”이고, 사용자의 입력은 onChange를 통해 state로 반영됩니다."]}),n.jsx(A,{title:"핵심 형태",children:`const [value, setValue] = useState('')

<input value={value} onChange={(e) => setValue(e.target.value)} />`}),n.jsx(Y,{type:"info",title:"왜 중요한가?",children:n.jsxs("ul",{children:[n.jsx("li",{children:"입력값을 “데이터”로 다룰 수 있습니다(검증/가공/저장/전송)"}),n.jsx("li",{children:"UI와 상태가 분리되지 않아 예측 가능성이 올라갑니다"}),n.jsx("li",{children:"폼이 커질수록, 제어하지 않으면 관리가 깨집니다"})]})})]}),n.jsxs("section",{children:[n.jsx("h2",{children:"1) 기본 입력 제어"}),n.jsx("p",{children:"value와 onChange를 연결하면 입력의 단일 진실(source of truth)이 state가 됩니다. 이 구조에서 “입력 제한/필터” 같은 정책을 쉽게 넣을 수 있습니다."}),n.jsx(A,{title:"텍스트 입력 제어",children:`function NameForm() {
  const [name, setName] = useState('')

  return (
    <div>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="이름 입력"
      />
      <p>현재 값: {name}</p>
    </div>
  )
}`}),n.jsxs("div",{style:{padding:"1.5rem",background:"var(--bg-card)",borderRadius:"12px",border:"1px solid var(--border)"},children:[n.jsx("h3",{style:{marginBottom:"1rem"},children:"실습: 제어 입력"}),n.jsx(_y,{})]})]}),n.jsxs("section",{children:[n.jsx("h2",{children:"2) 체크박스 / 라디오 / 셀렉트"}),n.jsx(A,{title:"체크박스 제어",children:`const [agree, setAgree] = useState(false)

<input
  type="checkbox"
  checked={agree}
  onChange={(e) => setAgree(e.target.checked)}
/>`}),n.jsx(A,{title:"라디오 제어",children:`const [gender, setGender] = useState('male')

<label>
  <input
    type="radio"
    name="gender"
    value="male"
    checked={gender === 'male'}
    onChange={(e) => setGender(e.target.value)}
  />
  남
</label>

<label>
  <input
    type="radio"
    name="gender"
    value="female"
    checked={gender === 'female'}
    onChange={(e) => setGender(e.target.value)}
  />
  여
</label>`}),n.jsx(A,{title:"select 제어",children:`const [city, setCity] = useState('seoul')

<select value={city} onChange={(e) => setCity(e.target.value)}>
  <option value="seoul">서울</option>
  <option value="busan">부산</option>
  <option value="daegu">대구</option>
</select>`}),n.jsx(Y,{type:"tip",title:"기억할 포인트",children:n.jsxs("ul",{children:[n.jsxs("li",{children:["checkbox는 ",n.jsx("code",{children:"value"}),"가 아니라 ",n.jsx("code",{children:"checked"}),"를 씁니다"]}),n.jsx("li",{children:"라디오는 “현재 state와 value가 같은가”로 checked를 결정합니다"}),n.jsxs("li",{children:["select는 ",n.jsx("code",{children:"value"}),"로 현재 선택을 결정합니다"]})]})})]}),n.jsxs("section",{children:[n.jsx("h2",{children:"3) 입력 검증(Validation)"}),n.jsx("p",{children:"제어 컴포넌트는 검증 로직을 “입력 파이프라인”에 넣기 쉽습니다. 가볍게는 입력 단계에서 막고, 무겁게는 제출 시에 검사합니다."}),n.jsx(A,{title:"입력 단계에서 제한",children:`function AgeInput() {
  const [age, setAge] = useState('')

  const onChange = (e) => {
    const next = e.target.value
    // 숫자만 허용
    if (/^\\d*$/.test(next)) setAge(next)
  }

  return (
    <div>
      <input value={age} onChange={onChange} placeholder="나이(숫자만)" />
      <p>{age ? \`\${age}세\` : '입력 없음'}</p>
    </div>
  )
}`}),n.jsx(A,{title:"제출 시 검증",children:`function Signup() {
  const [email, setEmail] = useState('')
  const [error, setError] = useState('')

  const submit = (e) => {
    e.preventDefault()
    if (!email.includes('@')) {
      setError('이메일 형식이 아닙니다')
      return
    }
    setError('')
    // submit...
  }

  return (
    <form onSubmit={submit}>
      <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="email" />
      {error && <p style={{ color: 'tomato' }}>{error}</p>}
      <button type="submit">가입</button>
    </form>
  )
}`})]}),n.jsxs("section",{children:[n.jsx("h2",{children:"4) 제어 vs 비제어(Uncontrolled)"}),n.jsx("p",{children:"비제어 컴포넌트는 DOM이 값을 가지고 있고, React는 필요할 때 ref로 값을 읽는 방식입니다. “간단한 폼 + 즉시 검증/반응 필요 없음”이면 비제어도 가능하지만, 대부분의 앱 UI는 제어가 장기적으로 안전합니다."}),n.jsx(A,{title:"비제어 컴포넌트 예시",children:`import { useRef } from 'react'

function Uncontrolled() {
  const inputRef = useRef(null)

  const submit = () => {
    alert(inputRef.current.value)
  }

  return (
    <div>
      <input ref={inputRef} defaultValue="초기값" />
      <button onClick={submit}>값 읽기</button>
    </div>
  )
}`}),n.jsx(Y,{type:"warning",title:"선택 기준",children:n.jsxs("ul",{children:[n.jsx("li",{children:"즉시 검증/마스킹/조건부 UI가 있으면 제어가 사실상 필수입니다"}),n.jsx("li",{children:"폼이 단순하고, 제출 시에만 값을 읽으면 비제어도 가능합니다"}),n.jsx("li",{children:"대부분의 실전 폼은 제어로 시작해도 손해가 없습니다"})]})})]}),n.jsxs("section",{children:[n.jsx("h2",{children:"5) 실전 패턴: 폼 상태를 객체로 관리"}),n.jsx("p",{children:"입력이 많아지면 state를 여러 개 두는 방식은 금방 번거로워집니다. 이때는 객체로 묶고, name 기반으로 업데이트하는 방식이 흔합니다."}),n.jsx(A,{title:"객체 폼 상태 + 단일 핸들러",children:`function ProfileForm() {
  const [form, setForm] = useState({ name: '', email: '', agree: false })

  const onChange = (e) => {
    const { name, value, type, checked } = e.target
    setForm(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
  }

  return (
    <form>
      <input name="name" value={form.name} onChange={onChange} placeholder="이름" />
      <input name="email" value={form.email} onChange={onChange} placeholder="이메일" />
      <label>
        <input name="agree" type="checkbox" checked={form.agree} onChange={onChange} />
        약관 동의
      </label>
    </form>
  )
}`}),n.jsxs(Y,{type:"tip",title:"여기서 커스텀 훅으로 넘어갑니다",children:["폼 로직이 반복되면 이전 레슨의 커스텀 훅 패턴으로 ",n.jsx("code",{children:"useForm"})," 형태로 추출하는 게 자연스러운 다음 단계입니다."]})]}),n.jsx(_e,{question:"제어 컴포넌트의 핵심 특징은 무엇일까요?",options:["입력값을 DOM이 관리하고 React는 ref로만 읽는다","입력값을 React state가 소유하고 value/checked로 UI를 결정한다","렌더링을 막기 위해 useMemo를 사용한다","CSS로 입력값을 동기화한다"],answer:1})]})}function _y(){const[u,r]=b.useState(""),[d,o]=b.useState(!1),[m,h]=b.useState("student"),v=u.trim().length>=2&&d;return n.jsxs("div",{style:{display:"grid",gap:"0.75rem"},children:[n.jsxs("div",{style:{display:"grid",gap:"0.4rem"},children:[n.jsx("label",{style:{fontWeight:700},children:"이름(2글자 이상)"}),n.jsx("input",{value:u,onChange:C=>r(C.target.value),placeholder:"이름 입력",style:{padding:"0.75rem",borderRadius:"6px",border:"1px solid var(--border)",background:"var(--bg-secondary)",color:"var(--text-primary)"}})]}),n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.6rem"},children:[n.jsx("input",{id:"agree",type:"checkbox",checked:d,onChange:C=>o(C.target.checked)}),n.jsx("label",{htmlFor:"agree",children:"약관에 동의합니다"})]}),n.jsxs("div",{style:{display:"grid",gap:"0.4rem"},children:[n.jsx("label",{style:{fontWeight:700},children:"역할 선택"}),n.jsxs("select",{value:m,onChange:C=>h(C.target.value),style:{padding:"0.75rem",borderRadius:"6px",border:"1px solid var(--border)",background:"var(--bg-secondary)",color:"var(--text-primary)"},children:[n.jsx("option",{value:"student",children:"학생"}),n.jsx("option",{value:"teacher",children:"강사"}),n.jsx("option",{value:"admin",children:"관리자"})]})]}),n.jsxs("div",{style:{display:"flex",gap:"0.75rem",alignItems:"center",flexWrap:"wrap"},children:[n.jsx("button",{disabled:!v,onClick:()=>alert("제출!"),style:{opacity:v?1:.5},children:"제출"}),n.jsx("button",{className:"outline",onClick:()=>{r(""),o(!1),h("student")},type:"button",children:"초기화"})]}),n.jsx(Y,{type:"note",title:"관찰 포인트",children:n.jsxs("ul",{children:[n.jsx("li",{children:"입력값은 DOM이 아니라 state가 소유합니다"}),n.jsx("li",{children:"조건부 버튼 활성화(canSubmit)가 즉시 가능해집니다"}),n.jsx("li",{children:"검증/마스킹/정책이 들어갈수록 제어 방식이 유리해집니다"})]})})]})}function Ly(){return n.jsxs(Ue,{title:"이벤트 핸들링",subtitle:"사용자 입력을 함수로 받아 상태/동작을 제어하는 패턴",xp:200,prevLesson:{path:"/learn/comps/controlled",name:"제어 컴포넌트",xp:250},nextLesson:{path:"/learn/comps/forms",name:"폼 관리",xp:300},children:[n.jsxs("section",{children:[n.jsx("h2",{children:"이벤트 핸들링이란?"}),n.jsxs("p",{children:["React의 이벤트 핸들링은 DOM 이벤트를 그대로 쓰는 게 아니라, React가 제공하는",n.jsx("strong",{children:"합성 이벤트(SyntheticEvent)"}),"를 통해 처리합니다. 문법은 DOM과 비슷하지만, 실무적으로 중요한 건 “이벤트를 어떻게 설계해서 상태/동작을 안정적으로 제어하느냐”입니다."]}),n.jsx(A,{title:"기본 형태",children:`function Button() {
  const onClick = () => {
    console.log('클릭!')
  }

  return <button onClick={onClick}>클릭</button>
}`}),n.jsx(Y,{type:"info",title:"핵심 규칙",children:n.jsxs("ul",{children:[n.jsxs("li",{children:["핸들러에는 “함수”를 전달합니다: ",n.jsx("code",{children:"onClick={fn}"})]}),n.jsxs("li",{children:["즉시 실행하면 안 됩니다: ",n.jsx("code",{children:"onClick={fn()}"})," ❌"]}),n.jsx("li",{children:"이벤트는 “상태 변경 / 네비게이션 / API 호출 / UI 토글” 같은 트리거 역할입니다"})]})})]}),n.jsxs("section",{children:[n.jsx("h2",{children:"1) 가장 흔한 실수: 즉시 실행"}),n.jsx(A,{title:"즉시 실행 vs 함수 전달",children:`// ✅ 함수 전달 (클릭할 때 실행)
<button onClick={handleClick}>클릭</button>

// ❌ 즉시 실행 (렌더링 순간 실행)
<button onClick={handleClick()}>클릭</button>

// ✅ 인자를 넘겨야 하면 래퍼 함수
<button onClick={() => handleClick(10)}>+10</button>`}),n.jsx(Y,{type:"warning",title:"왜 위험한가?",children:n.jsxs("ul",{children:[n.jsx("li",{children:"렌더링 단계에서 실행되면 렌더링 중 상태 변경 경고/무한 루프 원인이 됩니다"}),n.jsx("li",{children:"의도와 실행 타이밍이 분리되지 않아 디버깅이 어려워집니다"})]})})]}),n.jsxs("section",{children:[n.jsx("h2",{children:"2) 이벤트 객체 다루기"}),n.jsxs("p",{children:["이벤트 핸들러는 보통 ",n.jsx("code",{children:"(e) => ..."})," 형태로 이벤트 객체를 받습니다. 입력 폼에서는 ",n.jsx("code",{children:"e.target.value"}),", 체크박스는 ",n.jsx("code",{children:"e.target.checked"}),"가 핵심입니다."]}),n.jsx(A,{title:"입력 이벤트",children:`function Input() {
  const [text, setText] = useState('')

  const onChange = (e) => {
    setText(e.target.value)
  }

  return <input value={text} onChange={onChange} />
}`}),n.jsx(A,{title:"체크박스 이벤트",children:`function Checkbox() {
  const [agree, setAgree] = useState(false)

  return (
    <input
      type="checkbox"
      checked={agree}
      onChange={(e) => setAgree(e.target.checked)}
    />
  )
}`})]}),n.jsxs("section",{children:[n.jsx("h2",{children:"3) 이벤트 + 상태 업데이트 설계"}),n.jsx("p",{children:"이벤트 핸들러에서 state를 갱신할 때, 이전 state를 기준으로 계산하는 경우가 많습니다. 그럴 땐 함수형 업데이트를 쓰는 게 안전합니다."}),n.jsx(A,{title:"함수형 업데이트",children:`// ✅ 안전: 이전 값 기반
setCount(c => c + 1)

// ❌ 위험: 렌더 시점의 count에 의존
setCount(count + 1)`}),n.jsxs("div",{style:{padding:"1.5rem",background:"var(--bg-card)",borderRadius:"12px",border:"1px solid var(--border)"},children:[n.jsx("h3",{style:{marginBottom:"1rem"},children:"실습: 이벤트로 UI 제어"}),n.jsx(Hy,{})]})]}),n.jsxs("section",{children:[n.jsx("h2",{children:"4) preventDefault / stopPropagation"}),n.jsxs("p",{children:["폼 제출처럼 브라우저 기본 동작을 막아야 하면 ",n.jsx("code",{children:"preventDefault()"}),"를 씁니다. 이벤트 버블링을 막아야 하면 ",n.jsx("code",{children:"stopPropagation()"}),"을 씁니다."]}),n.jsx(A,{title:"폼 제출 막기",children:`function Form() {
  const onSubmit = (e) => {
    e.preventDefault()
    // 제출 로직
  }

  return (
    <form onSubmit={onSubmit}>
      <button type="submit">제출</button>
    </form>
  )
}`}),n.jsx(A,{title:"버블링 제어",children:`function Row({ onOpen }) {
  return (
    <div onClick={onOpen} className="row">
      <button
        onClick={(e) => {
          e.stopPropagation()
          console.log('버튼만 동작')
        }}
      >
        내부 버튼
      </button>
    </div>
  )
}`}),n.jsx(Y,{type:"warning",title:"stopPropagation 남용 주의",children:n.jsxs("ul",{children:[n.jsx("li",{children:"이벤트 흐름을 끊으면 컴포넌트 구조가 바뀔 때 부작용이 생깁니다"}),n.jsx("li",{children:"가능하면 “클릭 영역 분리” 같은 구조적 해결을 먼저 고려하는 편이 안전합니다"})]})})]}),n.jsxs("section",{children:[n.jsx("h2",{children:"5) 이벤트 위임(Delegation) 패턴"}),n.jsxs("p",{children:["리스트 아이템마다 핸들러를 만들면 코드가 지저분해집니다. 이런 경우 부모 한 군데에서 처리하고, ",n.jsx("code",{children:"data-*"}),"로 “무엇을 눌렀는지” 식별하는 방식이 깔끔합니다."]}),n.jsx(A,{title:"data-id 기반 이벤트 위임",children:`function List({ items }) {
  const onClick = (e) => {
    const id = e.target.closest('[data-id]')?.dataset.id
    if (!id) return
    console.log('clicked:', id)
  }

  return (
    <ul onClick={onClick}>
      {items.map(item => (
        <li key={item.id} data-id={item.id}>
          {item.name} <button>선택</button>
        </li>
      ))}
    </ul>
  )
}`}),n.jsx(Y,{type:"tip",title:"언제 유리한가?",children:n.jsxs("ul",{children:[n.jsx("li",{children:"아이템이 많고, 각 아이템 핸들러가 동일할 때"}),n.jsx("li",{children:"동적으로 요소가 추가/삭제되는 리스트일 때"})]})})]}),n.jsxs("section",{children:[n.jsx("h2",{children:"6) 실무 감각: 핸들러는 “동작 단위”로 쪼갠다"}),n.jsx("p",{children:"핸들러가 커지면 UI 로직이 응집을 잃습니다. 이벤트 핸들러는 “입력 수집 → 검증 → 상태 반영 → 부수 효과”의 파이프라인이 되기 쉬우니 동작 단위로 쪼개고, 필요하면 커스텀 훅으로 빼는 게 자연스럽습니다."}),n.jsx(A,{title:"핸들러 분리 예시",children:`function Editor() {
  const [text, setText] = useState('')

  const validate = (value) => value.trim().length >= 3

  const save = async (value) => {
    // API 호출
  }

  const onSave = async () => {
    if (!validate(text)) return alert('3글자 이상')
    await save(text)
    alert('저장 완료')
  }

  return (
    <div>
      <input value={text} onChange={(e) => setText(e.target.value)} />
      <button onClick={onSave}>저장</button>
    </div>
  )
}`})]}),n.jsx(_e,{question:"React 이벤트 핸들러에서 가장 흔한 실수는 무엇일까요?",options:["onClick에 문자열을 넣는 것","onClick에 함수를 전달하는 것","onClick에 함수를 즉시 실행한 결과를 넣는 것","onChange에서 e.target.value를 읽는 것"],answer:2})]})}function Hy(){const[u,r]=b.useState(0),[d,o]=b.useState(!1),[m,h]=b.useState(""),v=m.trim().length>0;return n.jsxs("div",{style:{display:"grid",gap:"0.75rem"},children:[n.jsxs("div",{style:{display:"flex",gap:"0.75rem",alignItems:"center",flexWrap:"wrap"},children:[n.jsx("button",{onClick:()=>r(C=>C+1),children:"+1"}),n.jsx("button",{onClick:()=>r(C=>C-1),children:"-1"}),n.jsx("button",{className:"outline",onClick:()=>r(0),type:"button",children:"리셋"}),n.jsxs("span",{style:{fontWeight:700},children:["count: ",u]})]}),n.jsxs("div",{style:{display:"flex",gap:"0.75rem",alignItems:"center",flexWrap:"wrap"},children:[n.jsx("button",{onClick:()=>o(C=>!C),children:d?"닫기":"열기"}),d&&n.jsx("div",{style:{padding:"0.75rem",borderRadius:"10px",border:"1px solid var(--border)",background:"var(--bg-secondary)"},children:"토글로 열린 영역입니다."})]}),n.jsxs("div",{style:{display:"flex",gap:"0.75rem",alignItems:"center"},children:[n.jsx("input",{value:m,onChange:C=>h(C.target.value),placeholder:"입력하고 추가 버튼을 눌러보세요",style:{padding:"0.75rem",borderRadius:"6px",border:"1px solid var(--border)",background:"var(--bg-secondary)",color:"var(--text-primary)",flex:1}}),n.jsx("button",{disabled:!v,style:{opacity:v?1:.5},onClick:()=>alert(`입력값: ${m}`),type:"button",children:"추가"})]}),n.jsx(Y,{type:"note",title:"관찰 포인트",children:n.jsxs("ul",{children:[n.jsx("li",{children:"핸들러는 “즉시 실행”이 아니라 “함수 전달”이어야 합니다"}),n.jsx("li",{children:"상태 업데이트는 가능하면 함수형 업데이트로 안정성을 올립니다"}),n.jsx("li",{children:"preventDefault/stopPropagation은 구조적으로 필요할 때만 씁니다"})]})})]})}function ky(){return n.jsxs(Ue,{title:"폼 관리",subtitle:"입력 다발을 일관된 상태/검증/제출 파이프라인으로 묶는 패턴",xp:300,prevLesson:{path:"/learn/comps/events",name:"이벤트 핸들링",xp:200},nextLesson:{path:"/learn/advanced/context",name:"Context API",xp:350},children:[n.jsxs("section",{children:[n.jsx("h2",{children:"폼 관리의 본질"}),n.jsx("p",{children:"폼이 커지면 문제는 입력 자체가 아니라 “상태/검증/에러/제출/초기화”가 서로 엉켜서 흐름이 무너진다는 데 있습니다. 폼 관리는 결국 입력을 하나의 파이프라인으로 정리하는 작업입니다."}),n.jsx(Y,{type:"info",title:"폼 파이프라인",children:n.jsxs("ul",{children:[n.jsxs("li",{children:[n.jsx("strong",{children:"state"}),": 입력값의 단일 진실"]}),n.jsxs("li",{children:[n.jsx("strong",{children:"validation"}),": 정책(규칙)을 어디에 둘 것인가"]}),n.jsxs("li",{children:[n.jsx("strong",{children:"errors"}),": 사용자에게 무엇을, 언제 보여줄 것인가"]}),n.jsxs("li",{children:[n.jsx("strong",{children:"submit"}),": 전송 시점/중복 방지/로딩/실패 처리"]}),n.jsxs("li",{children:[n.jsx("strong",{children:"reset"}),": 초기화/기본값/서버 값 동기화"]})]})})]}),n.jsxs("section",{children:[n.jsx("h2",{children:"1) 입력이 적을 때: state 여러 개"}),n.jsx("p",{children:"입력이 2~3개 수준이면 state를 분리해도 괜찮습니다. 하지만 개수가 늘면 유지비가 급격히 증가합니다."}),n.jsx(A,{title:"state 여러 개 (간단 폼)",children:`function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const onSubmit = (e) => {
    e.preventDefault()
    // submit...
  }

  return (
    <form onSubmit={onSubmit}>
      <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="email" />
      <input value={password} onChange={(e) => setPassword(e.target.value)} placeholder="password" type="password" />
      <button type="submit">로그인</button>
    </form>
  )
}`})]}),n.jsxs("section",{children:[n.jsx("h2",{children:"2) 입력이 늘면: 객체 + 단일 onChange"}),n.jsx("p",{children:"입력이 많아지면 state를 객체로 묶고, name 기반으로 업데이트하는 형태가 표준에 가깝습니다. 체크박스/라디오까지 한 핸들러로 흡수할 수 있습니다."}),n.jsx(A,{title:"객체 폼 상태 + 단일 onChange",children:`function ProfileForm() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    role: 'student',
    agree: false
  })

  const onChange = (e) => {
    const { name, value, type, checked } = e.target
    setForm(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
  }

  const onSubmit = (e) => {
    e.preventDefault()
    console.log(form)
  }

  return (
    <form onSubmit={onSubmit}>
      <input name="name" value={form.name} onChange={onChange} placeholder="이름" />
      <input name="email" value={form.email} onChange={onChange} placeholder="이메일" />

      <select name="role" value={form.role} onChange={onChange}>
        <option value="student">학생</option>
        <option value="teacher">강사</option>
        <option value="admin">관리자</option>
      </select>

      <label>
        <input name="agree" type="checkbox" checked={form.agree} onChange={onChange} />
        약관 동의
      </label>

      <button type="submit">저장</button>
    </form>
  )
}`}),n.jsx(Y,{type:"tip",title:"이 방식의 장점",children:n.jsxs("ul",{children:[n.jsx("li",{children:"핸들러/바인딩이 폭발하지 않습니다"}),n.jsx("li",{children:"submit에서 form 객체 하나만 다루면 됩니다"}),n.jsx("li",{children:"초기값/리셋도 form 한 번으로 끝납니다"})]})})]}),n.jsxs("section",{children:[n.jsx("h2",{children:"3) 검증(Validation)과 에러 표시"}),n.jsx("p",{children:"검증을 어디에서 하느냐는 설계 문제입니다. 흔한 선택지는 2가지입니다. “입력 단계에서 막기”와 “제출 시점에 검사하기”입니다."}),n.jsx(A,{title:"제출 시점 검증 (현실적 기본값)",children:`function Signup() {
  const [form, setForm] = useState({ email: '', password: '', password2: '' })
  const [errors, setErrors] = useState({})

  const onChange = (e) => {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
  }

  const validate = (f) => {
    const next = {}
    if (!f.email.includes('@')) next.email = '이메일 형식이 아닙니다'
    if (f.password.length < 8) next.password = '비밀번호는 8자 이상'
    if (f.password !== f.password2) next.password2 = '비밀번호가 일치하지 않습니다'
    return next
  }

  const onSubmit = (e) => {
    e.preventDefault()
    const nextErrors = validate(form)
    setErrors(nextErrors)
    if (Object.keys(nextErrors).length > 0) return
    // submit...
  }

  return (
    <form onSubmit={onSubmit}>
      <input name="email" value={form.email} onChange={onChange} placeholder="email" />
      {errors.email && <p className="error">{errors.email}</p>}

      <input name="password" type="password" value={form.password} onChange={onChange} placeholder="password" />
      {errors.password && <p className="error">{errors.password}</p>}

      <input name="password2" type="password" value={form.password2} onChange={onChange} placeholder="password 확인" />
      {errors.password2 && <p className="error">{errors.password2}</p>}

      <button type="submit">가입</button>
    </form>
  )
}`}),n.jsx(Y,{type:"warning",title:"에러를 언제 보여줄지",children:n.jsxs("ul",{children:[n.jsx("li",{children:"입력하자마자 빨간 에러를 띄우면 UX가 거칠어질 수 있습니다"}),n.jsxs("li",{children:["보통은 ",n.jsx("strong",{children:"제출 시"})," 또는 ",n.jsx("strong",{children:"blur 후"}),"부터 에러를 보여줍니다"]})]})})]}),n.jsxs("section",{children:[n.jsx("h2",{children:"4) 중복 제출 방지와 로딩 상태"}),n.jsx("p",{children:"폼에서 가장 흔한 실수는 “submit을 상태 머신으로 다루지 않는 것”입니다. 로딩/실패/성공을 분리하면 동작이 안정됩니다."}),n.jsx(A,{title:"isSubmitting으로 중복 제출 방지",children:`function SaveForm() {
  const [form, setForm] = useState({ title: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState('')

  const onSubmit = async (e) => {
    e.preventDefault()
    if (isSubmitting) return

    setIsSubmitting(true)
    setError('')

    try {
      // await api.save(form)
      await new Promise(r => setTimeout(r, 800))
      alert('저장 완료')
    } catch (e) {
      setError('저장 실패')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={onSubmit}>
      <input
        value={form.title}
        onChange={(e) => setForm({ title: e.target.value })}
        placeholder="제목"
      />
      {error && <p className="error">{error}</p>}
      <button type="submit" disabled={isSubmitting}>
        {isSubmitting ? '저장 중...' : '저장'}
      </button>
    </form>
  )
}`}),n.jsx(Y,{type:"tip",title:"핵심",children:n.jsxs("ul",{children:[n.jsx("li",{children:"submit은 “한 번만” 실행되도록 상태로 잠그는 편이 안전합니다"}),n.jsx("li",{children:"로딩/에러 표시는 UI 문제가 아니라 상태 설계 문제입니다"})]})})]}),n.jsxs("section",{children:[n.jsx("h2",{children:"5) 실전: 폼 로직을 커스텀 훅으로 정리(useForm)"}),n.jsx("p",{children:"입력 수가 늘고, 검증/에러/리셋/제출이 붙으면 컴포넌트는 급격히 복잡해집니다. 이때 폼 “관리 로직”을 훅으로 추출하면 구조가 안정됩니다."}),n.jsx(A,{title:"useForm 훅 (핵심 버전)",children:`import { useCallback, useMemo, useState } from 'react'

export function useForm({ initialValues, validate }) {
  const [values, setValues] = useState(initialValues)
  const [touched, setTouched] = useState({})
  const [submitted, setSubmitted] = useState(false)

  const errors = useMemo(() => {
    return validate ? validate(values) : {}
  }, [values, validate])

  const onChange = useCallback((e) => {
    const { name, value, type, checked } = e.target
    setValues(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
  }, [])

  const onBlur = useCallback((e) => {
    const { name } = e.target
    setTouched(prev => ({ ...prev, [name]: true }))
  }, [])

  const reset = useCallback(() => {
    setValues(initialValues)
    setTouched({})
    setSubmitted(false)
  }, [initialValues])

  const canSubmit = useMemo(() => {
    return Object.keys(errors).length === 0
  }, [errors])

  return {
    values,
    setValues,
    errors,
    touched,
    submitted,
    canSubmit,
    onChange,
    onBlur,
    reset,
    setSubmitted
  }
}`}),n.jsx(A,{title:"useForm 사용 예시",children:`function Signup() {
  const validate = (v) => {
    const e = {}
    if (!v.email.includes('@')) e.email = '이메일 형식이 아닙니다'
    if (v.password.length < 8) e.password = '비밀번호는 8자 이상'
    return e
  }

  const form = useForm({
    initialValues: { email: '', password: '' },
    validate
  })

  const onSubmit = (e) => {
    e.preventDefault()
    form.setSubmitted(true)
    if (!form.canSubmit) return
    console.log(form.values)
  }

  return (
    <form onSubmit={onSubmit}>
      <input
        name="email"
        value={form.values.email}
        onChange={form.onChange}
        onBlur={form.onBlur}
        placeholder="email"
      />
      {(form.submitted || form.touched.email) && form.errors.email && (
        <p className="error">{form.errors.email}</p>
      )}

      <input
        name="password"
        type="password"
        value={form.values.password}
        onChange={form.onChange}
        onBlur={form.onBlur}
        placeholder="password"
      />
      {(form.submitted || form.touched.password) && form.errors.password && (
        <p className="error">{form.errors.password}</p>
      )}

      <button type="submit" disabled={!form.canSubmit}>
        가입
      </button>
      <button type="button" onClick={form.reset} className="outline">
        초기화
      </button>
    </form>
  )
}`}),n.jsx(Y,{type:"warning",title:"실무 기준",children:n.jsxs("ul",{children:[n.jsx("li",{children:"폼이 많고 복잡해지면 React Hook Form 같은 라이브러리가 생산성이 높습니다"}),n.jsx("li",{children:"하지만 원리를 이해하면 어떤 라이브러리든 “왜 그렇게 생겼는지”가 보입니다"})]})})]}),n.jsxs("section",{children:[n.jsx("h2",{children:"6) 폼 성능: 계산과 렌더링의 분리"}),n.jsx("p",{children:"폼이 커질수록 “입력 하나 바뀔 때 전체가 리렌더링”되는 구조가 부담이 될 수 있습니다. 이때는 컴포넌트 분리, memo, 또는 라이브러리(비제어 기반)로 해결하는 편이 일반적입니다."}),n.jsx(Y,{type:"note",title:"지금 단계의 결론",children:n.jsxs("ul",{children:[n.jsx("li",{children:"제어 폼은 구조적으로 안정하지만, 대형 폼에서는 렌더링 비용이 커질 수 있습니다"}),n.jsx("li",{children:"문제가 실제로 발생하면 그때 최적화 전략을 적용하면 됩니다"})]})})]}),n.jsx(_e,{question:"폼 관리에서 가장 중요한 관점에 가까운 것은?",options:["input 태그를 예쁘게 꾸미는 것","상태/검증/에러/제출/리셋을 하나의 파이프라인으로 정리하는 것","이벤트 버블링을 막는 것","CSS 클래스를 줄이는 것"],answer:1})]})}const yh="todo_app_state_v2",jh={items:[{id:1,text:"투두 앱 UI를 화려하게 만들기",done:!0,createdAt:Date.now()-1e5},{id:2,text:"필터/편집/저장까지 완성하기",done:!1,createdAt:Date.now()-5e4}],filter:"all",editingId:null};function By(u,r){switch(r.type){case"HYDRATE":return r.payload;case"ADD":{const d=r.payload.trim();if(!d)return u;const o={id:Date.now(),text:d,done:!1,createdAt:Date.now()};return{...u,items:[o,...u.items]}}case"TOGGLE":return{...u,items:u.items.map(d=>d.id===r.payload?{...d,done:!d.done}:d)};case"DELETE":return{...u,items:u.items.filter(d=>d.id!==r.payload)};case"SET_FILTER":return{...u,filter:r.payload};case"CLEAR_COMPLETED":return{...u,items:u.items.filter(d=>!d.done)};case"EDIT_START":return{...u,editingId:r.payload};case"EDIT_CANCEL":return{...u,editingId:null};case"EDIT_COMMIT":{const{id:d,text:o}=r.payload,m=o.trim();return m?{...u,items:u.items.map(h=>h.id===d?{...h,text:m}:h),editingId:null}:{...u,items:u.items.filter(h=>h.id!==d),editingId:null}}default:return u}}function qy(){return n.jsxs(Ue,{title:"실전 프로젝트: 투두 앱",subtitle:"실전 상태 설계(useReducer / localStorage / 편집 / 필터)",xp:500,prevLesson:{path:"/learn/advanced/suspense",name:"Suspense"},nextLesson:{path:"/learn/practice/quiz",name:"퀴즈 앱"},children:[n.jsxs("section",{children:[n.jsx("h2",{children:"실습"}),n.jsx("div",{className:"todoStage",children:n.jsx(wy,{})})]}),n.jsxs("section",{children:[n.jsx("h2",{children:"구현 포인트"}),n.jsx(Y,{type:"info",title:"UI를 화려하게 만드는 최소 세트",children:n.jsxs("ul",{children:[n.jsx("li",{children:"배경: 그라데이션 + 블러(Glassmorphism)"}),n.jsx("li",{children:"카드: 그림자 + 테두리 하이라이트"}),n.jsx("li",{children:"상태 피드백: 배지/진행률/완료 애니메이션"})]})}),n.jsx(A,{title:"저장소 영속화 핵심",children:`useEffect(() => {
  localStorage.setItem(KEY, JSON.stringify(state))
}, [state])

const [state, dispatch] = useReducer(reducer, undefined, () => {
  const saved = localStorage.getItem(KEY)
  return saved ? JSON.parse(saved) : initialState
})`})]}),n.jsx(_e,{question:"화려한 UI를 추가하더라도 설계를 망치지 않으려면 무엇을 분리해야 할까요?",options:["CSS는 JS로 옮긴다","UI(표현)와 상태 로직(reducer)을 분리한다","모든 컴포넌트를 하나 파일로 합친다","localStorage를 제거한다"],answer:1})]})}function wy(){const[u,r]=b.useReducer(By,void 0,()=>{try{const x=localStorage.getItem(yh);return x?JSON.parse(x):jh}catch{return jh}});b.useEffect(()=>{try{localStorage.setItem(yh,JSON.stringify(u))}catch{}},[u]);const[d,o]=b.useState(""),m=b.useRef(null),h=b.useMemo(()=>{const x=u.items.length,y=u.items.filter(k=>k.done).length,D=x-y,R=x===0?0:Math.round(y/x*100);return{total:x,done:y,active:D,percent:R}},[u.items]),v=b.useMemo(()=>u.filter==="active"?u.items.filter(x=>!x.done):u.filter==="completed"?u.items.filter(x=>x.done):u.items,[u.items,u.filter]),C=()=>{r({type:"ADD",payload:d}),o(""),m.current?.focus()};return n.jsxs("div",{className:"todoWrap",children:[n.jsxs("header",{className:"todoHero",children:[n.jsxs("div",{className:"todoHeroTop",children:[n.jsxs("div",{className:"todoTitle",children:[n.jsx("div",{className:"todoLogo",children:"✓"}),n.jsxs("div",{children:[n.jsx("h3",{children:"Todo Dashboard"}),n.jsx("p",{children:"Todo web 활용하기"})]})]}),n.jsxs("div",{className:"todoBadges",children:[n.jsxs("span",{className:"badge glow",children:["전체 ",h.total]}),n.jsxs("span",{className:"badge",children:["진행중 ",h.active]}),n.jsxs("span",{className:"badge success",children:["완료 ",h.done]})]})]}),n.jsxs("div",{className:"todoProgress",children:[n.jsxs("div",{className:"todoProgressLabel",children:[n.jsx("span",{children:"진행률"}),n.jsxs("span",{className:"mono",children:[h.percent,"%"]})]}),n.jsx("div",{className:"todoProgressBar",children:n.jsx("div",{className:"todoProgressFill",style:{width:`${h.percent}%`}})})]})]}),n.jsxs("section",{className:"todoCard",children:[n.jsxs("div",{className:"todoInputRow",children:[n.jsxs("div",{className:"todoInputBox",children:[n.jsx("span",{className:"todoInputIcon",children:"＋"}),n.jsx("input",{ref:m,value:d,onChange:x=>o(x.target.value),onKeyDown:x=>x.key==="Enter"&&C(),placeholder:"할 일을 입력하고 Enter"})]}),n.jsx("button",{className:"btn primary",onClick:C,type:"button",children:"추가"})]}),n.jsxs("div",{className:"todoToolbar",children:[n.jsxs("div",{className:"seg",children:[n.jsx("button",{className:`segBtn ${u.filter==="all"?"active":""}`,onClick:()=>r({type:"SET_FILTER",payload:"all"}),type:"button",children:"전체"}),n.jsx("button",{className:`segBtn ${u.filter==="active"?"active":""}`,onClick:()=>r({type:"SET_FILTER",payload:"active"}),type:"button",children:"진행중"}),n.jsx("button",{className:`segBtn ${u.filter==="completed"?"active":""}`,onClick:()=>r({type:"SET_FILTER",payload:"completed"}),type:"button",children:"완료"})]}),n.jsx("button",{className:"btn ghost",onClick:()=>r({type:"CLEAR_COMPLETED"}),disabled:h.done===0,type:"button",children:"완료 항목 삭제"})]}),n.jsx("ul",{className:"todoList",children:v.map(x=>n.jsx(Gy,{item:x,editing:u.editingId===x.id,onToggle:()=>r({type:"TOGGLE",payload:x.id}),onDelete:()=>r({type:"DELETE",payload:x.id}),onEditStart:()=>r({type:"EDIT_START",payload:x.id}),onEditCancel:()=>r({type:"EDIT_CANCEL"}),onEditCommit:y=>r({type:"EDIT_COMMIT",payload:{id:x.id,text:y}})},x.id))}),v.length===0&&n.jsxs("div",{className:"todoEmpty",children:[n.jsx("div",{className:"spark"}),n.jsx("p",{children:"현재 필터에서 표시할 항목이 없습니다."})]})]})]})}function Gy({item:u,editing:r,onToggle:d,onDelete:o,onEditStart:m,onEditCancel:h,onEditCommit:v}){const[C,x]=b.useState(u.text),y=b.useRef(null);return b.useEffect(()=>{r&&(x(u.text),setTimeout(()=>y.current?.focus(),0))},[r,u.text]),n.jsxs("li",{className:`todoRow ${u.done?"done":""}`,children:[n.jsx("button",{className:`check ${u.done?"on":""}`,onClick:d,type:"button","aria-label":"완료 토글",children:u.done?"✓":""}),r?n.jsx("input",{ref:y,className:"todoEdit",value:C,onChange:D=>x(D.target.value),onKeyDown:D=>{D.key==="Enter"&&v(C),D.key==="Escape"&&h()},onBlur:()=>v(C),"aria-label":"할 일 편집"}):n.jsx("button",{className:"todoText",onClick:m,onDoubleClick:m,type:"button",title:"클릭해서 편집",children:u.text}),n.jsxs("div",{className:"todoRowActions",children:[r?n.jsx("button",{className:"btn mini",onClick:()=>v(C),type:"button",children:"저장"}):n.jsx("button",{className:"btn mini",onClick:m,type:"button",children:"편집"}),n.jsx("button",{className:"btn mini danger",onClick:o,type:"button",children:"삭제"})]})]})}function Xy(){return n.jsxs(Ue,{title:"실전 프로젝트: 퀴즈 앱",subtitle:"큰 UI + 게임 요소(타이머/콤보/점수)로 재미있게",xp:500,prevLesson:{path:"/learn/practice/todo",name:"투두 앱"},nextLesson:{path:"/learn/practice/shop",name:"쇼핑몰"},children:[n.jsxs("section",{children:[n.jsx("h2",{children:"실습"}),n.jsx("div",{className:"quizStage",children:n.jsx(Yy,{})}),n.jsx(Y,{type:"tip",title:"재미 포인트",children:n.jsxs("ul",{children:[n.jsx("li",{children:"정답이면 점수 + 콤보 상승"}),n.jsx("li",{children:"오답이면 콤보 초기화"}),n.jsx("li",{children:"타이머가 0이 되면 자동 오답 처리"}),n.jsx("li",{children:"결과 화면에서 요약 + 다시하기"})]})})]}),n.jsxs("section",{children:[n.jsx("h2",{children:"구조 요약"}),n.jsx(A,{title:"상태 구조(핵심)",children:`// quizIndex: 현재 문제 번호
// selected: 사용자가 고른 보기 index
// phase: 'playing' | 'result'
// score, combo: 게임 요소
// timeLeft: 제한 시간(초)
const [quizIndex, setQuizIndex] = useState(0)
const [selected, setSelected] = useState(null)
const [phase, setPhase] = useState('playing')
const [score, setScore] = useState(0)
const [combo, setCombo] = useState(0)
const [timeLeft, setTimeLeft] = useState(12)`}),n.jsx(Y,{type:"warning",title:"실무 포인트",children:n.jsxs("ul",{children:[n.jsx("li",{children:"선택 후 다음 문제로 넘어가는 타이밍(딜레이)을 명확히 관리"}),n.jsx("li",{children:"타이머 interval 정리(useEffect cleanup)"}),n.jsx("li",{children:"문제 데이터는 배열로 분리(추가/수정 편하게)"})]})})]}),n.jsx(_e,{question:"퀴즈 앱에서 타이머를 구현할 때 가장 중요한 건?",options:["setInterval을 여러 개 돌린다","cleanup 없이 계속 유지한다","useEffect cleanup으로 interval을 정리한다","렌더링마다 setInterval을 새로 만든다"],answer:2}),n.jsxs("section",{className:"codeViewer",children:[n.jsx("h2",{children:"코드 열람(화면 영역 ↔ 코드 매칭)"}),n.jsxs("div",{className:"cvItem",children:[n.jsx("h3",{children:"1) 문제 데이터(QUESTIONS)"}),n.jsx("p",{className:"cvDesc",children:"화면의 “문제 텍스트/보기 버튼/정답 판정”의 원천 데이터입니다. 여기서 q/choices/answer/tag 구조가 고정되면, 렌더링은 map으로 끝납니다."}),n.jsx(A,{title:"QUESTIONS 데이터 구조",children:`const QUESTIONS = [
  {
    q: 'React에서 state가 바뀌면 보통 일어나는 일은?',
    choices: ['DOM이 직접 수정된다', '컴포넌트가 리렌더링된다', '브라우저가 재시작된다', 'CSS가 초기화된다'],
    answer: 1,
    tag: '기초'
  },
  ...
]`})]}),n.jsxs("div",{className:"cvItem",children:[n.jsx("h3",{children:"2) 화면 골격(QuizGame의 Render Tree)"}),n.jsx("p",{className:"cvDesc",children:"“플레이 화면(playing)”과 “결과 화면(result)”을 phase로 갈라 끼우는 구조입니다. UI 설계 관점에서는 이 return이 곧 화면 설계도입니다."}),n.jsx(A,{title:"phase 기반 분기(결과/플레이)",children:`if (phase === 'result') {
  return (결과 화면 JSX)
}
return (플레이 화면 JSX)`})]}),n.jsxs("div",{className:"cvItem",children:[n.jsx("h3",{children:"3) 타이머(Interval + Cleanup)"}),n.jsx("p",{className:"cvDesc",children:"플레이 중이고(phase), 선택 잠금이 아닐 때(locked)만 interval을 돌립니다. 그리고 반드시 cleanup에서 clearInterval을 해서 “중복 타이머”를 막습니다."}),n.jsx(A,{title:"타이머 useEffect(핵심)",children:`useEffect(() => {
  if (phase !== 'playing') return
  if (locked) return

  timerRef.current = setInterval(() => {
    setTimeLeft(t => t - 1)
  }, 1000)

  return () => clearInterval(timerRef.current)
}, [phase, locked, quizIndex])`}),n.jsx(A,{title:"시간 0 처리(타임아웃 = 오답 처리)",children:`useEffect(() => {
  if (phase !== 'playing') return
  if (locked) return
  if (timeLeft > 0) return

  handlePick(null, true)
}, [timeLeft, phase, locked])`})]}),n.jsxs("div",{className:"cvItem",children:[n.jsx("h3",{children:"4) 채점 로직(점수/콤보/최대콤보)"}),n.jsx("p",{className:"cvDesc",children:"선택하면 locked로 잠그고, 정답이면 점수를 누적하며 콤보를 올립니다. 오답이면 콤보를 0으로 리셋합니다. 그리고 딜레이 후 다음 문제로 넘어갑니다."}),n.jsx(A,{title:"handlePick(핵심)",children:`const handlePick = (idx, isTimeout = false) => {
  if (locked) return

  setLocked(true)
  setSelected(idx)

  const isCorrect = idx === current.answer
  const gained = isCorrect ? (10 + combo * 2) : 0

  if (isCorrect) {
    setScore(s => s + gained)
    setCombo(c => {
      const next = c + 1
      setMaxCombo(m => Math.max(m, next))
      return next
    })
  } else {
    setCombo(0)
  }

  setTimeout(() => {
    const nextIndex = quizIndex + 1
    if (nextIndex >= total) {
      setPhase('result')
      clearInterval(timerRef.current)
    } else {
      setQuizIndex(nextIndex)
      setSelected(null)
      setLocked(false)
      resetTimer()
    }
  }, isTimeout ? 650 : 900)
}`})]}),n.jsxs("div",{className:"cvItem",children:[n.jsx("h3",{children:"5) 보기 버튼 UI(choices.map)"}),n.jsx("p",{className:"cvDesc",children:"화면의 “보기 버튼 리스트”는 데이터(choices)를 map으로 렌더합니다. locked 상태에서 correct/wrong/dim 클래스로 색을 바꾸는 부분이 UI 게임 감각을 만듭니다."}),n.jsx(A,{title:"보기 렌더링(choices.map)",children:`<div className="choices">
  {current.choices.map((c, idx) => {
    const correct = idx === current.answer
    const picked = idx === selected

    let className = 'choice'
    if (locked) {
      if (correct) className += ' correct'
      else if (picked) className += ' wrong'
      else className += ' dim'
    } else if (picked) {
      className += ' picked'
    }

    return (
      <button
        key={idx}
        className={className}
        disabled={locked}
        onClick={() => handlePick(idx)}
        type="button"
      >
        <span className="letter">{String.fromCharCode(65 + idx)}</span>
        <span className="text">{c}</span>
        <span className="hint">
          {locked && correct ? '정답' : locked && picked && !correct ? '오답' : ''}
        </span>
      </button>
    )
  })}
</div>`})]}),n.jsxs("div",{className:"cvItem",children:[n.jsx("h3",{children:"6) 결과 화면(등급/요약/재시작)"}),n.jsx("p",{className:"cvDesc",children:"결과 화면은 점수로 등급을 만든 다음, 총점/최대 콤보/문항 수를 요약합니다. “다시하기”는 상태를 초기화하는 restart로 묶습니다."}),n.jsx(A,{title:"grade 계산 + 결과 요약",children:`const grade =
  score >= 45 ? 'S' :
  score >= 32 ? 'A' :
  score >= 20 ? 'B' : 'C'

return (
  <div className="quizCard big">
    ...
    <div className="value">{score}</div>
    <div className="value">{maxCombo}</div>
    <div className="value">{total}</div>
    <button onClick={restart}>다시하기</button>
  </div>
)`})]})]})]})}const gh=[{q:"React에서 state가 바뀌면 보통 일어나는 일은?",choices:["DOM이 직접 수정된다","컴포넌트가 리렌더링된다","브라우저가 재시작된다","CSS가 초기화된다"],answer:1,tag:"기초"},{q:"useMemo의 목적에 가장 가까운 것은?",choices:["함수 메모","비동기 처리","계산 결과 캐싱","DOM 참조"],answer:2,tag:"Hooks"},{q:"onClick에 함수 전달이 맞는 형태는?",choices:["onClick={fn()}","onClick={fn}","onClick={fn=>fn}",'onClick="fn"'],answer:1,tag:"이벤트"},{q:"React.lazy는 보통 무엇과 같이 쓰나?",choices:["ErrorBoundary","Suspense","useRef","useReducer"],answer:1,tag:"심화"}];function Yy(){const[u,r]=b.useState("playing"),[d,o]=b.useState(0),[m,h]=b.useState(null),[v,C]=b.useState(!1),[x,y]=b.useState(0),[D,R]=b.useState(0),[k,Q]=b.useState(0),[X,w]=b.useState(60),V=b.useRef(null),J=gh.length,G=gh[d],F=b.useMemo(()=>Math.round(d/J*100),[d,J]);b.useEffect(()=>{if(u==="playing"&&!v)return V.current=setInterval(()=>{w(W=>W-1)},1e3),()=>clearInterval(V.current)},[u,v,d]),b.useEffect(()=>{u==="playing"&&(v||X>0||ie(null,!0))},[X,u,v]);const he=()=>w(60),ie=(W,me=!1)=>{if(v)return;C(!0),h(W);const Re=W===G.answer,ke=Re?10+D*2:0;Re?(y(Ae=>Ae+ke),R(Ae=>{const Ve=Ae+1;return Q(_t=>Math.max(_t,Ve)),Ve})):R(0),setTimeout(()=>{const Ae=d+1;Ae>=J?(r("result"),clearInterval(V.current)):(o(Ae),h(null),C(!1),he())},me?650:900)},je=()=>{r("playing"),o(0),h(null),C(!1),y(0),R(0),Q(0),w(60)};if(u==="result"){const W=x>=45?"S":x>=32?"A":x>=20?"B":"C";return n.jsxs("div",{className:"quizCard big",children:[n.jsxs("div",{className:"quizHeader",children:[n.jsxs("div",{className:"quizTitle",children:[n.jsx("div",{className:"quizLogo",children:"Q"}),n.jsxs("div",{children:[n.jsx("h3",{children:"결과"}),n.jsx("p",{children:"총점과 콤보 기록을 확인하세요"})]})]}),n.jsxs("span",{className:"pill",children:[W," 등급"]})]}),n.jsxs("div",{className:"resultGrid",children:[n.jsxs("div",{className:"resultBox",children:[n.jsx("div",{className:"label",children:"총점"}),n.jsx("div",{className:"value",children:x})]}),n.jsxs("div",{className:"resultBox",children:[n.jsx("div",{className:"label",children:"최대 콤보"}),n.jsx("div",{className:"value",children:k})]}),n.jsxs("div",{className:"resultBox",children:[n.jsx("div",{className:"label",children:"문항 수"}),n.jsx("div",{className:"value",children:J})]})]}),n.jsx("button",{className:"btn primary wide",onClick:je,type:"button",children:"다시하기"})]})}return n.jsxs("div",{className:"quizCard big",children:[n.jsxs("div",{className:"quizHeader",children:[n.jsxs("div",{className:"quizTitle",children:[n.jsx("div",{className:"quizLogo",children:"Q"}),n.jsxs("div",{children:[n.jsx("h3",{children:"React Quiz"}),n.jsx("p",{className:"sub",children:"큰 UI + 타이머 + 콤보"})]})]}),n.jsxs("div",{className:"quizMeta",children:[n.jsx("span",{className:"pill",children:G.tag}),n.jsxs("span",{className:`timer ${X<=4?"danger":""}`,children:[X,"s"]})]})]}),n.jsxs("div",{className:"progress",children:[n.jsxs("div",{className:"progressTop",children:[n.jsxs("span",{children:[d+1," / ",J]}),n.jsxs("span",{className:"mono",children:["점수 ",x," · 콤보 ",D]})]}),n.jsx("div",{className:"bar",children:n.jsx("div",{className:"fill",style:{width:`${F}%`}})})]}),n.jsx("div",{className:"question",children:G.q}),n.jsx("div",{className:"choices",children:G.choices.map((W,me)=>{const Re=me===G.answer,ke=me===m;let Ae="choice";return v?Re?Ae+=" correct":ke?Ae+=" wrong":Ae+=" dim":ke&&(Ae+=" picked"),n.jsxs("button",{className:Ae,disabled:v,onClick:()=>ie(me),type:"button",children:[n.jsx("span",{className:"letter",children:String.fromCharCode(65+me)}),n.jsx("span",{className:"text",children:W}),n.jsx("span",{className:"hint",children:v&&Re?"정답":v&&ke&&!Re?"오답":""})]},me)})}),n.jsxs("div",{className:"actions",children:[n.jsx("button",{className:"btn ghost",type:"button",onClick:()=>je(),children:"처음부터"}),n.jsx("div",{className:"tip",children:"Enter 자동 다음 / 타임아웃 자동 처리"})]})]})}function Qy(){return n.jsxs(Ue,{title:"실전 프로젝트: 쇼핑몰",subtitle:"목록 + 필터/정렬 + 장바구니 + 결제 흐름까지",xp:600,prevLesson:{path:"/learn/practice/quiz",name:"퀴즈 앱",xp:500},children:[n.jsxs("section",{children:[n.jsx("h2",{children:"실습"}),n.jsx("div",{className:"shopStage",children:n.jsx(Jy,{})}),n.jsx(Y,{type:"tip",title:"구성 덩어리(컴포넌트 경계)",children:n.jsxs("ul",{children:[n.jsx("li",{children:"HeaderBar: 타이틀 / 장바구니 카운트 / 결제 버튼"}),n.jsx("li",{children:"ControlsBar: 검색 / 태그 / 정렬"}),n.jsx("li",{children:"ProductGrid: 상품 카드 목록"}),n.jsx("li",{children:"CartPanel: 장바구니 리스트 / 쿠폰 / 합계"}),n.jsx("li",{children:"CheckoutModal: 결제 확인 모달"})]})})]}),n.jsxs("section",{children:[n.jsx("h2",{children:"구조 요약"}),n.jsx(A,{title:"핵심 상태(부모에서 한 번에 관리)",children:`const [query, setQuery] = useState('')
const [activeTag, setActiveTag] = useState('ALL')
const [sortKey, setSortKey] = useState('RECOMMENDED')

const [cart, setCart] = useState({}) // { [id]: qty }
const [phase, setPhase] = useState('shopping') // shopping | checkout | done

const [coupon, setCoupon] = useState('')
const [couponApplied, setCouponApplied] = useState(false)

const [modalOpen, setModalOpen] = useState(false)`}),n.jsx(Y,{type:"warning",title:"실무 포인트",children:n.jsxs("ul",{children:[n.jsx("li",{children:"cart를 객체 맵으로 두면 증감/삭제가 단순합니다."}),n.jsx("li",{children:"필터/정렬/합계 계산은 useMemo로 묶어 렌더 비용을 줄입니다."}),n.jsx("li",{children:"모달: ESC 닫기 + 배경 스크롤 잠금 같은 UX는 useEffect로 처리합니다."})]})})]}),n.jsx(_e,{question:"ProductGrid는 어떤 책임만 가져야 안정적인 구조가 되나?",options:["상품을 fetch하고 cart까지 모두 직접 관리한다","UI 렌더링과 클릭 이벤트 발생만 담당한다(상태는 부모)","쿠폰 로직을 ProductGrid에서 처리한다","결제 모달을 ProductGrid 안에 직접 만든다"],answer:1}),n.jsxs("section",{className:"codeReadSection",children:[n.jsx("h2",{children:"코드 읽기(눈으로 보면서 구성 이해)"}),n.jsxs("div",{className:"readBlock",children:[n.jsxs("div",{className:"readMeta",children:[n.jsx("h3",{children:"1) 데이터: CATALOG / TAGS / SORTS"}),n.jsxs("p",{className:"readDesc",children:["이 쇼핑몰은 서버 없이도 흐름을 연습하기 위해 “상품 목록”을 상수 배열로 둡니다.",n.jsx("span",{className:"readEm",children:" 렌더링·필터·정렬·장바구니"}),"의 핵심은 “배열을 어떻게 다루는지”이기 때문에, 처음엔 fetch 없이도 충분히 학습이 됩니다."]})]}),n.jsx(A,{title:"CATALOG / TAGS / SORTS",children:`const CATALOG = [
  { id: 'p1', name: '미니멀 머그컵', price: 12000, tag: '라이프', stock: 12, score: 4.6 },
  { id: 'p2', name: '드립 커피 원두 200g', price: 16000, tag: '커피', stock: 8, score: 4.8 },
  { id: 'p3', name: '티백 세트 30입', price: 14000, tag: '차', stock: 0, score: 4.4 },
  { id: 'p4', name: '심플 노트 (무지)', price: 6000, tag: '문구', stock: 20, score: 4.1 },
  { id: 'p5', name: '데일리 텀블러 500ml', price: 22000, tag: '라이프', stock: 5, score: 4.7 },
  { id: 'p6', name: '핸드드립 필터 100매', price: 9000, tag: '커피', stock: 10, score: 4.3 }
]

const TAGS = ['ALL', '커피', '차', '라이프', '문구']
const SORTS = [
  { key: 'RECOMMENDED', label: '추천순' },
  { key: 'PRICE_LOW', label: '낮은 가격' },
  { key: 'PRICE_HIGH', label: '높은 가격' },
  { key: 'RATING', label: '평점순' }
]`}),n.jsx(Y,{type:"tip",title:"이 블록을 먼저 만드는 이유",children:n.jsxs("ul",{children:[n.jsx("li",{children:"UI는 “데이터 형태”를 그대로 따라갑니다(상품 객체의 key가 곧 화면에 찍힙니다)."}),n.jsx("li",{children:"tag/stock/score는 단순한 쇼핑몰 UI를 “연습용 프로젝트”답게 풍부하게 만들어 줍니다."})]})})]}),n.jsxs("div",{className:"readBlock",children:[n.jsxs("div",{className:"readMeta",children:[n.jsx("h3",{children:"2) 화면 구성의 뼈대: ShopDemo의 JSX 트리"}),n.jsxs("p",{className:"readDesc",children:["“어떤 덩어리로 화면을 나눴는지”가 교육의 핵심입니다. 아래 JSX는 실질적으로 ",n.jsx("span",{className:"readEm",children:"페이지 레이아웃 설계도"}),"입니다."]})]}),n.jsx(A,{title:"ShopDemo JSX 트리(최상위)",children:`return (
  <div className="shopCard big">
    <HeaderBar ... />

    {phase === 'done' ? (
      <DoneView ... />
    ) : (
      <>
        <ControlsBar ... />
        <ProductGrid ... />
        <CartPanel ... />

        {modalOpen && (
          <CheckoutModal ... />
        )}
      </>
    )}
  </div>
)`}),n.jsx(Y,{type:"warning",title:"여기서 반드시 보이는 것",children:n.jsxs("ul",{children:[n.jsx("li",{children:"HeaderBar/ControlsBar/ProductGrid/CartPanel/CheckoutModal이 “화면 단위”로 고정됩니다."}),n.jsx("li",{children:"phase와 modalOpen만 봐도 “흐름 제어”가 어디서 일어나는지 바로 보입니다."})]})})]}),n.jsxs("div",{className:"readBlock",children:[n.jsxs("div",{className:"readMeta",children:[n.jsx("h3",{children:"3) 상태 설계: 무엇을 state로 두고 무엇을 계산으로 둘 것인가"}),n.jsxs("p",{className:"readDesc",children:["쇼핑몰에서 state는 “사용자의 의사결정”과 “흐름”만 잡습니다. 상품 목록 변형(필터/정렬), 합계 계산은 ",n.jsx("span",{className:"readEm",children:"계산(useMemo)"}),"으로 두는 게 구조가 깔끔합니다."]})]}),n.jsx(A,{title:"ShopDemo 상태 선언(핵심)",children:`// Controls
const [query, setQuery] = useState('')
const [activeTag, setActiveTag] = useState('ALL')
const [sortKey, setSortKey] = useState('RECOMMENDED')

// Cart & Flow
const [cart, setCart] = useState({}) // { [id]: qty }
const [phase, setPhase] = useState('shopping') // shopping | checkout | done

// Coupon
const [coupon, setCoupon] = useState('')
const [couponApplied, setCouponApplied] = useState(false)

// Modal
const [modalOpen, setModalOpen] = useState(false)`}),n.jsx(Y,{type:"tip",title:"왜 cart를 객체 맵으로 두나",children:n.jsxs("ul",{children:[n.jsx("li",{children:"증가/감소/삭제가 O(1)에 가깝고 코드가 짧아집니다."}),n.jsx("li",{children:"렌더링용 배열(cartItems)은 cart에서 “파생”시키면 됩니다."})]})})]}),n.jsxs("div",{className:"readBlock",children:[n.jsxs("div",{className:"readMeta",children:[n.jsx("h3",{children:"4) 파생 데이터(useMemo): 필터 → 정렬 → 합계"}),n.jsxs("p",{className:"readDesc",children:["이 프로젝트에서 “실무적인 맛”은 여기서 나옵니다. 값이 변할 때마다 재계산이 필요한 부분을 useMemo로 묶어",n.jsx("span",{className:"readEm",children:"렌더 비용과 코드 책임"}),"을 분리합니다."]})]}),n.jsx(A,{title:"필터/정렬(useMemo)",children:`const filtered = useMemo(() => {
  const q = query.trim().toLowerCase()
  return CATALOG.filter(p => {
    const byTag = activeTag === 'ALL' ? true : p.tag === activeTag
    const byQuery = q ? p.name.toLowerCase().includes(q) : true
    return byTag && byQuery
  })
}, [query, activeTag])

const sorted = useMemo(() => {
  const arr = [...filtered]
  switch (sortKey) {
    case 'PRICE_LOW':
      arr.sort((a, b) => a.price - b.price)
      break
    case 'PRICE_HIGH':
      arr.sort((a, b) => b.price - a.price)
      break
    case 'RATING':
      arr.sort((a, b) => b.score - a.score)
      break
    default:
      arr.sort((a, b) => (b.score * 10 + Math.min(b.stock, 10)) - (a.score * 10 + Math.min(a.stock, 10)))
  }
  return arr
}, [filtered, sortKey])`}),n.jsx(A,{title:"카트/합계(useMemo)",children:`const cartItems = useMemo(() => {
  return Object.keys(cart)
    .map(id => {
      const product = CATALOG.find(p => p.id === id)
      return { product, qty: cart[id] }
    })
    .filter(x => x.product)
}, [cart])

const cartCount = useMemo(() => cartItems.reduce((sum, x) => sum + x.qty, 0), [cartItems])
const subTotal = useMemo(() => cartItems.reduce((sum, x) => sum + x.product.price * x.qty, 0), [cartItems])

const discount = useMemo(() => {
  if (!couponApplied) return 0
  const raw = Math.floor(subTotal * 0.1)
  return Math.min(raw, 5000)
}, [couponApplied, subTotal])

const shipping = useMemo(() => {
  if (subTotal === 0) return 0
  return subTotal >= 30000 ? 0 : 3000
}, [subTotal])

const total = useMemo(() => Math.max(subTotal - discount + shipping, 0), [subTotal, discount, shipping])`})]}),n.jsxs("div",{className:"readBlock",children:[n.jsxs("div",{className:"readMeta",children:[n.jsx("h3",{children:"5) 핸들러: “UI 클릭”이 state를 어떻게 바꾸는지"}),n.jsxs("p",{className:"readDesc",children:["컴포넌트는 버튼을 보여주고, 실제 상태 변경 로직은 부모(ShopDemo)에 둡니다. 그래서 ProductGrid/CartPanel은 ",n.jsx("span",{className:"readEm",children:"onAdd/onInc/onDec"})," 같은 함수만 호출합니다."]})]}),n.jsx(A,{title:"장바구니 핸들러(추가/증가/감소/비우기)",children:`const addToCart = (id) => {
  const p = CATALOG.find(x => x.id === id)
  if (!p) return
  if (p.stock <= 0) return

  setCart(prev => {
    const currentQty = prev[id] ?? 0
    const nextQty = Math.min(currentQty + 1, p.stock)
    return { ...prev, [id]: nextQty }
  })
}

const decQty = (id) => {
  setCart(prev => {
    const next = { ...prev }
    const q = next[id] ?? 0
    if (q <= 1) delete next[id]
    else next[id] = q - 1
    return next
  })
}

const incQty = (id) => {
  const p = CATALOG.find(x => x.id === id)
  if (!p) return

  setCart(prev => {
    const currentQty = prev[id] ?? 0
    const nextQty = Math.min(currentQty + 1, p.stock)
    return { ...prev, [id]: nextQty }
  })
}

const clearCart = () => setCart({})`}),n.jsx(A,{title:"쿠폰/결제 흐름(모달/완료 화면)",children:`const applyCoupon = () => {
  const code = coupon.trim().toUpperCase()
  if (code === 'CAFE10') setCouponApplied(true)
  else setCouponApplied(false)
}

const openCheckout = () => {
  if (cartCount <= 0) return
  setModalOpen(true)
  setPhase('checkout')
}

const pay = () => {
  setModalOpen(false)
  setPhase('done')
}

const restart = () => {
  setQuery('')
  setActiveTag('ALL')
  setSortKey('RECOMMENDED')
  setCart({})
  setCoupon('')
  setCouponApplied(false)
  setModalOpen(false)
  setPhase('shopping')
}`})]}),n.jsxs("div",{className:"readBlock",children:[n.jsxs("div",{className:"readMeta",children:[n.jsx("h3",{children:"6) 컴포넌트별 JSX: “여기 UI는 여기에서 만든다”"}),n.jsx("p",{className:"readDesc",children:"아래는 각 덩어리의 JSX를 그대로 보여주는 구간입니다. 학생 입장에서는 “화면의 이 영역이 이 코드”라는 매칭이 여기서 됩니다."})]}),n.jsx(A,{title:"HeaderBar",children:`function HeaderBar({ cartCount, onCheckout, checkoutDisabled }) {
  return (
    <div className="shopHeader">
      ...
      <span className="cartCount">{cartCount}</span>
      <button onClick={onCheckout} disabled={checkoutDisabled}>결제하기</button>
    </div>
  )
}`}),n.jsx(A,{title:"ControlsBar",children:`function ControlsBar({ query, onQuery, activeTag, onTag, sortKey, onSort, tags, sorts }) {
  return (
    <div className="controls">
      <input value={query} onChange={(e)=>onQuery(e.target.value)} />
      {tags.map(t => <button onClick={()=>onTag(t)}>{t}</button>)}
      <select value={sortKey} onChange={(e)=>onSort(e.target.value)}>
        {sorts.map(s => <option value={s.key}>{s.label}</option>)}
      </select>
    </div>
  )
}`}),n.jsx(A,{title:"ProductGrid",children:`function ProductGrid({ products, cart, onAdd, onInc, onDec }) {
  return (
    <div className="grid">
      {products.map(p => {
        const inCart = cart[p.id] ?? 0
        const soldOut = p.stock <= 0
        return (
          <div className="product">
            <div className="pName">{p.name}</div>
            <button onClick={() => onAdd(p.id)} disabled={soldOut}>담기</button>
            <button onClick={() => onDec(p.id)} disabled={inCart <= 0}>-</button>
            <span>{inCart}</span>
            <button onClick={() => onInc(p.id)} disabled={inCart <= 0 || inCart >= p.stock}>+</button>
          </div>
        )
      })}
    </div>
  )
}`}),n.jsx(A,{title:"CartPanel",children:`function CartPanel({ cartItems, coupon, onCoupon, onApplyCoupon, total, onCheckout, onInc, onDec }) {
  return (
    <div className="cartPanel">
      {cartItems.map(({ product, qty }) => (
        <div className="cartRow">
          <div>{product.name}</div>
          <button onClick={()=>onDec(product.id)}>-</button>
          <span>{qty}</span>
          <button onClick={()=>onInc(product.id)}>+</button>
        </div>
      ))}
      <input value={coupon} onChange={(e)=>onCoupon(e.target.value)} />
      <button onClick={onApplyCoupon}>쿠폰 적용</button>
      <div>총합: {formatWon(total)}</div>
      <button onClick={onCheckout}>결제하기</button>
    </div>
  )
}`}),n.jsx(A,{title:"CheckoutModal / DoneView",children:`function CheckoutModal({ total, onClose, onPay }) {
  return (
    <div className="modalOverlay" role="dialog" aria-modal="true">
      <div className="modal">
        <div className="payTotal">{formatWon(total)}</div>
        <button onClick={onClose}>취소</button>
        <button onClick={onPay}>결제 완료 처리</button>
      </div>
    </div>
  )
}

function DoneView({ onRestart }) {
  return (
    <div className="doneBox">
      <h4>결제가 완료되었습니다</h4>
      <button onClick={onRestart}>다시 시작</button>
    </div>
  )
}`}),n.jsx(Y,{type:"tip",title:"이 섹션을 어떻게 쓰면 좋나",children:n.jsxs("ul",{children:[n.jsx("li",{children:"학생에게 “HeaderBar만 먼저 만들어서 화면에 띄우기 → 다음 덩어리 추가” 순서로 진행시키면 됩니다."}),n.jsx("li",{children:"각 덩어리는 props 입력/출력이 명확해서, 테스트/디버깅이 쉬워집니다."})]})})]})]})]})}const rs=[{id:"p1",name:"미니멀 머그컵",price:12e3,tag:"라이프",stock:12,score:4.6},{id:"p2",name:"드립 커피 원두 200g",price:16e3,tag:"커피",stock:8,score:4.8},{id:"p3",name:"티백 세트 30입",price:14e3,tag:"차",stock:0,score:4.4},{id:"p4",name:"심플 노트 (무지)",price:6e3,tag:"문구",stock:20,score:4.1},{id:"p5",name:"데일리 텀블러 500ml",price:22e3,tag:"라이프",stock:5,score:4.7},{id:"p6",name:"핸드드립 필터 100매",price:9e3,tag:"커피",stock:10,score:4.3}],Vy=["ALL","커피","차","라이프","문구"],Zy=[{key:"RECOMMENDED",label:"추천순"},{key:"PRICE_LOW",label:"낮은 가격"},{key:"PRICE_HIGH",label:"높은 가격"},{key:"RATING",label:"평점순"}];function Jy(){const[u,r]=b.useState(""),[d,o]=b.useState("ALL"),[m,h]=b.useState("RECOMMENDED"),[v,C]=b.useState({}),[x,y]=b.useState("shopping"),[D,R]=b.useState(""),[k,Q]=b.useState(!1),[X,w]=b.useState(!1),V=b.useRef(null);b.useEffect(()=>{if(!X)return;const L=B=>{B.key==="Escape"&&w(!1)};return window.addEventListener("keydown",L),()=>window.removeEventListener("keydown",L)},[X]),b.useEffect(()=>(X?document.body.style.overflow="hidden":document.body.style.overflow="",()=>{document.body.style.overflow=""}),[X]);const J=b.useMemo(()=>{const L=u.trim().toLowerCase();return rs.filter(B=>{const I=d==="ALL"?!0:B.tag===d,re=L?B.name.toLowerCase().includes(L):!0;return I&&re})},[u,d]),G=b.useMemo(()=>{const L=[...J];switch(m){case"PRICE_LOW":L.sort((B,I)=>B.price-I.price);break;case"PRICE_HIGH":L.sort((B,I)=>I.price-B.price);break;case"RATING":L.sort((B,I)=>I.score-B.score);break;default:L.sort((B,I)=>I.score*10+Math.min(I.stock,10)-(B.score*10+Math.min(B.stock,10)))}return L},[J,m]),F=b.useMemo(()=>Object.keys(v).map(L=>({product:rs.find(I=>I.id===L),qty:v[L]})).filter(L=>L.product),[v]),he=b.useMemo(()=>F.reduce((L,B)=>L+B.qty,0),[F]),ie=b.useMemo(()=>F.reduce((L,B)=>L+B.product.price*B.qty,0),[F]),je=b.useMemo(()=>{if(!k)return 0;const L=Math.floor(ie*.1);return Math.min(L,5e3)},[k,ie]),W=b.useMemo(()=>ie===0||ie>=3e4?0:3e3,[ie]),me=b.useMemo(()=>Math.max(ie-je+W,0),[ie,je,W]),Re=L=>{const B=rs.find(I=>I.id===L);B&&(B.stock<=0||C(I=>{const re=I[L]??0,g=Math.min(re+1,B.stock);return{...I,[L]:g}}))},ke=L=>{C(B=>{const I={...B},re=I[L]??0;return re<=1?delete I[L]:I[L]=re-1,I})},Ae=L=>{const B=rs.find(I=>I.id===L);B&&C(I=>{const re=I[L]??0,g=Math.min(re+1,B.stock);return{...I,[L]:g}})},Ve=()=>C({}),_t=()=>{const L=D.trim().toUpperCase();Q(L==="CAFE10")},bt=()=>{he<=0||(w(!0),y("checkout"))},ot=()=>{w(!1),y("done")},O=()=>{r(""),o("ALL"),h("RECOMMENDED"),C({}),R(""),Q(!1),w(!1),y("shopping")};return n.jsxs("div",{className:"shopCard big",children:[n.jsx(Ky,{cartCount:he,onCheckout:bt,checkoutDisabled:he<=0}),x==="done"?n.jsx(Py,{onRestart:O}):n.jsxs(n.Fragment,{children:[n.jsx($y,{query:u,onQuery:r,activeTag:d,onTag:o,sortKey:m,onSort:h,tags:Vy,sorts:Zy}),n.jsx(Fy,{products:G,cart:v,onAdd:Re,onInc:Ae,onDec:ke}),n.jsx(Wy,{cartItems:F,cartCount:he,coupon:D,onCoupon:R,couponApplied:k,onApplyCoupon:_t,onClear:Ve,onCheckout:bt,subTotal:ie,discount:je,shipping:W,total:me,onInc:Ae,onDec:ke}),X&&n.jsx(Iy,{total:me,onClose:()=>w(!1),onPay:ot,modalRef:V})]})]})}function Ky({cartCount:u,onCheckout:r,checkoutDisabled:d}){return n.jsxs("div",{className:"shopHeader",children:[n.jsxs("div",{className:"shopTitle",children:[n.jsx("div",{className:"shopLogo",children:"S"}),n.jsxs("div",{children:[n.jsx("h3",{children:"Minimal Shop"}),n.jsx("p",{className:"sub",children:"필터 · 정렬 · 장바구니 · 결제"})]})]}),n.jsxs("div",{className:"shopRight",children:[n.jsxs("div",{className:"cartBadge","aria-label":"cart",children:[n.jsx("span",{className:"cartIcon",children:"🛒"}),n.jsx("span",{className:"cartCount",children:u})]}),n.jsx("button",{className:"btn primary",type:"button",onClick:r,disabled:d,children:"결제하기"})]})]})}function $y({query:u,onQuery:r,activeTag:d,onTag:o,sortKey:m,onSort:h,tags:v,sorts:C}){return n.jsxs("div",{className:"controls",children:[n.jsxs("div",{className:"search",children:[n.jsx("input",{value:u,onChange:x=>r(x.target.value),placeholder:"상품 검색 (예: 머그, 원두)","aria-label":"search"}),n.jsx("button",{className:"btn ghost",type:"button",onClick:()=>r(""),children:"지우기"})]}),n.jsxs("div",{className:"filters",children:[n.jsx("div",{className:"tags",children:v.map(x=>n.jsx("button",{type:"button",className:`tag ${d===x?"active":""}`,onClick:()=>o(x),children:x},x))}),n.jsxs("div",{className:"sort",children:[n.jsx("label",{className:"muted",children:"정렬"}),n.jsx("select",{value:m,onChange:x=>h(x.target.value),"aria-label":"sort",children:C.map(x=>n.jsx("option",{value:x.key,children:x.label},x.key))})]})]})]})}function Fy({products:u,cart:r,onAdd:d,onInc:o,onDec:m}){return n.jsx("div",{className:"grid",children:u.map(h=>{const v=r[h.id]??0,C=h.stock<=0;return n.jsxs("div",{className:`product ${C?"soldout":""}`,children:[n.jsxs("div",{className:"thumb",children:[n.jsx("div",{className:"thumbBadge",children:h.tag}),n.jsx("div",{className:"thumbFake",children:"IMG"})]}),n.jsxs("div",{className:"pBody",children:[n.jsxs("div",{className:"pTop",children:[n.jsx("div",{className:"pName",children:h.name}),n.jsxs("div",{className:"pScore",children:["★ ",h.score]})]}),n.jsxs("div",{className:"pMeta",children:[n.jsx("div",{className:"price",children:Ll(h.price)}),n.jsx("div",{className:"stock",children:C?"품절":`재고 ${h.stock}`})]}),n.jsxs("div",{className:"pActions",children:[n.jsx("button",{className:"btn primary wide",type:"button",onClick:()=>d(h.id),disabled:C,children:C?"품절":"담기"}),n.jsxs("div",{className:"qty",children:[n.jsx("button",{className:"btn ghost",type:"button",onClick:()=>m(h.id),disabled:v<=0,children:"−"}),n.jsx("span",{className:"mono",children:v}),n.jsx("button",{className:"btn ghost",type:"button",onClick:()=>o(h.id),disabled:v<=0||v>=h.stock,children:"+"})]})]})]})]},h.id)})})}function Wy({cartItems:u,cartCount:r,coupon:d,onCoupon:o,couponApplied:m,onApplyCoupon:h,onClear:v,onCheckout:C,subTotal:x,discount:y,shipping:D,total:R,onInc:k,onDec:Q}){return n.jsxs("div",{className:"cartPanel",children:[n.jsxs("div",{className:"cartHead",children:[n.jsx("h4",{children:"장바구니"}),n.jsx("button",{className:"btn ghost",type:"button",onClick:v,disabled:r<=0,children:"비우기"})]}),r<=0?n.jsx("div",{className:"empty",children:"아직 담긴 상품이 없습니다."}):n.jsxs(n.Fragment,{children:[n.jsx("div",{className:"cartList",children:u.map(({product:X,qty:w})=>n.jsxs("div",{className:"cartRow",children:[n.jsxs("div",{className:"left",children:[n.jsx("div",{className:"name",children:X.name}),n.jsxs("div",{className:"muted small",children:[X.tag," · ",Ll(X.price)]})]}),n.jsxs("div",{className:"right",children:[n.jsxs("div",{className:"qtyInline",children:[n.jsx("button",{className:"btn ghost",type:"button",onClick:()=>Q(X.id),children:"−"}),n.jsx("span",{className:"mono",children:w}),n.jsx("button",{className:"btn ghost",type:"button",onClick:()=>k(X.id),disabled:w>=X.stock,children:"+"})]}),n.jsx("div",{className:"sum mono",children:Ll(X.price*w)})]})]},X.id))}),n.jsxs("div",{className:"coupon",children:[n.jsx("div",{className:"muted small",children:"쿠폰 코드(예: CAFE10)"}),n.jsxs("div",{className:"couponRow",children:[n.jsx("input",{value:d,onChange:X=>o(X.target.value),placeholder:"CAFE10","aria-label":"coupon"}),n.jsx("button",{className:"btn ghost",type:"button",onClick:h,children:"적용"})]}),n.jsx("div",{className:`couponState ${m?"ok":"no"}`,children:m?"쿠폰 적용됨(10% · 최대 5,000원)":"쿠폰 미적용"})]}),n.jsxs("div",{className:"summary",children:[n.jsx(os,{label:"소계",value:Ll(x)}),n.jsx(os,{label:"할인",value:`- ${Ll(y)}`,muted:!m}),n.jsx(os,{label:"배송",value:D===0?"무료":Ll(D)}),n.jsx("div",{className:"divider"}),n.jsx(os,{label:"총합",value:Ll(R),strong:!0})]}),n.jsx("div",{className:"checkout",children:n.jsx("button",{className:"btn primary wide",type:"button",onClick:C,children:"결제하기"})})]})]})}function Iy({total:u,onClose:r,onPay:d,modalRef:o}){return n.jsx("div",{className:"modalOverlay",role:"dialog","aria-modal":"true",children:n.jsxs("div",{className:"modal",ref:o,children:[n.jsxs("div",{className:"modalHead",children:[n.jsx("h4",{children:"결제 확인"}),n.jsx("button",{className:"btn ghost",type:"button",onClick:r,children:"닫기"})]}),n.jsxs("div",{className:"modalBody",children:[n.jsx("div",{className:"muted",children:"아래 금액으로 결제를 진행합니다."}),n.jsx("div",{className:"payTotal mono",children:Ll(u)}),n.jsx("div",{className:"payHint",children:"실제 결제 연동 전 단계에서, 검증/로딩/에러 처리 흐름을 설계하는 연습용입니다."})]}),n.jsxs("div",{className:"modalActions",children:[n.jsx("button",{className:"btn ghost",type:"button",onClick:r,children:"취소"}),n.jsx("button",{className:"btn primary",type:"button",onClick:d,children:"결제 완료 처리"})]})]})})}function Py({onRestart:u}){return n.jsxs("div",{className:"doneBox",children:[n.jsx("div",{className:"doneEmoji",children:"✅"}),n.jsx("h4",{children:"결제가 완료되었습니다"}),n.jsx("p",{className:"muted",children:"실습용 흐름입니다. 다시 시작해서 다른 케이스를 테스트하세요."}),n.jsx("div",{className:"doneActions",children:n.jsx("button",{className:"btn ghost",type:"button",onClick:u,children:"다시 시작"})})]})}function os({label:u,value:r,strong:d=!1,muted:o=!1}){return n.jsxs("div",{className:`row ${d?"strong":""} ${o?"mutedRow":""}`,children:[n.jsx("span",{children:u}),n.jsx("span",{className:"mono",children:r})]})}function Ll(u){try{return u.toLocaleString("ko-KR")+"원"}catch{return String(u)+"원"}}function ej(){return n.jsxs(gv,{children:[n.jsx(Te,{path:"/",element:n.jsx(Pv,{}),children:n.jsx(Te,{index:!0,element:n.jsx(ly,{})})}),n.jsxs(Te,{path:"/learn",element:n.jsx(ty,{}),children:[n.jsx(Te,{path:"basics/jsx",element:n.jsx(ny,{})}),n.jsx(Te,{path:"basics/components",element:n.jsx(ay,{})}),n.jsx(Te,{path:"basics/props",element:n.jsx(iy,{})}),n.jsx(Te,{path:"basics/rendering",element:n.jsx(sy,{})}),n.jsx(Te,{path:"basics/lists",element:n.jsx(uy,{})}),n.jsx(Te,{path:"hooks/usestate",element:n.jsx(cy,{})}),n.jsx(Te,{path:"hooks/useeffect",element:n.jsx(oy,{})}),n.jsx(Te,{path:"hooks/useref",element:n.jsx(fy,{})}),n.jsx(Te,{path:"hooks/usememo",element:n.jsx(my,{})}),n.jsx(Te,{path:"hooks/usecallback",element:n.jsx(py,{})}),n.jsx(Te,{path:"hooks/custom",element:n.jsx(vy,{})}),n.jsx(Te,{path:"comps/components",element:n.jsx(zy,{})}),n.jsx(Te,{path:"comps/controlled",element:n.jsx(Uy,{})}),n.jsx(Te,{path:"comps/events",element:n.jsx(Ly,{})}),n.jsx(Te,{path:"comps/forms",element:n.jsx(ky,{})}),n.jsx(Te,{path:"advanced/context",element:n.jsx(yy,{})}),n.jsx(Te,{path:"advanced/reducer",element:n.jsx(by,{})}),n.jsx(Te,{path:"advanced/performance",element:n.jsx(Ty,{})}),n.jsx(Te,{path:"advanced/patterns",element:n.jsx(Ay,{})}),n.jsx(Te,{path:"advanced/suspense",element:n.jsx(My,{})}),n.jsx(Te,{path:"practice/todo",element:n.jsx(qy,{})}),n.jsx(Te,{path:"practice/quiz",element:n.jsx(Xy,{})}),n.jsx(Te,{path:"practice/shop",element:n.jsx(Qy,{})})]})]})}bx.createRoot(document.getElementById("root")).render(n.jsx(b.StrictMode,{children:n.jsx(Qv,{children:n.jsx(ej,{})})}));
