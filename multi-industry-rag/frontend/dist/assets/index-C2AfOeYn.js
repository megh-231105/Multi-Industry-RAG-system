function Du(e,t){for(var n=0;n<t.length;n++){const a=t[n];if(typeof a!="string"&&!Array.isArray(a)){for(const i in a)if(i!=="default"&&!(i in e)){const s=Object.getOwnPropertyDescriptor(a,i);s&&Object.defineProperty(e,i,s.get?s:{enumerable:!0,get:()=>a[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))a(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&a(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function Fu(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var dd={exports:{}},Oa={},cd={exports:{}},F={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Tr=Symbol.for("react.element"),Bu=Symbol.for("react.portal"),Ou=Symbol.for("react.fragment"),$u=Symbol.for("react.strict_mode"),Uu=Symbol.for("react.profiler"),Hu=Symbol.for("react.provider"),Gu=Symbol.for("react.context"),Vu=Symbol.for("react.forward_ref"),Wu=Symbol.for("react.suspense"),Qu=Symbol.for("react.memo"),Yu=Symbol.for("react.lazy"),_o=Symbol.iterator;function qu(e){return e===null||typeof e!="object"?null:(e=_o&&e[_o]||e["@@iterator"],typeof e=="function"?e:null)}var ud={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},pd=Object.assign,fd={};function Dn(e,t,n){this.props=e,this.context=t,this.refs=fd,this.updater=n||ud}Dn.prototype.isReactComponent={};Dn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Dn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function hd(){}hd.prototype=Dn.prototype;function As(e,t,n){this.props=e,this.context=t,this.refs=fd,this.updater=n||ud}var Ls=As.prototype=new hd;Ls.constructor=As;pd(Ls,Dn.prototype);Ls.isPureReactComponent=!0;var Do=Array.isArray,md=Object.prototype.hasOwnProperty,_s={current:null},gd={key:!0,ref:!0,__self:!0,__source:!0};function xd(e,t,n){var a,i={},s=null,o=null;if(t!=null)for(a in t.ref!==void 0&&(o=t.ref),t.key!==void 0&&(s=""+t.key),t)md.call(t,a)&&!gd.hasOwnProperty(a)&&(i[a]=t[a]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var d=Array(l),c=0;c<l;c++)d[c]=arguments[c+2];i.children=d}if(e&&e.defaultProps)for(a in l=e.defaultProps,l)i[a]===void 0&&(i[a]=l[a]);return{$$typeof:Tr,type:e,key:s,ref:o,props:i,_owner:_s.current}}function Ku(e,t){return{$$typeof:Tr,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Ds(e){return typeof e=="object"&&e!==null&&e.$$typeof===Tr}function Xu(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Fo=/\/+/g;function ai(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Xu(""+e.key):t.toString(36)}function ra(e,t,n,a,i){var s=typeof e;(s==="undefined"||s==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case Tr:case Bu:o=!0}}if(o)return o=e,i=i(o),e=a===""?"."+ai(o,0):a,Do(i)?(n="",e!=null&&(n=e.replace(Fo,"$&/")+"/"),ra(i,t,n,"",function(c){return c})):i!=null&&(Ds(i)&&(i=Ku(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Fo,"$&/")+"/")+e)),t.push(i)),1;if(o=0,a=a===""?".":a+":",Do(e))for(var l=0;l<e.length;l++){s=e[l];var d=a+ai(s,l);o+=ra(s,t,n,d,i)}else if(d=qu(e),typeof d=="function")for(e=d.call(e),l=0;!(s=e.next()).done;)s=s.value,d=a+ai(s,l++),o+=ra(s,t,n,d,i);else if(s==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return o}function Fr(e,t,n){if(e==null)return e;var a=[],i=0;return ra(e,a,"","",function(s){return t.call(n,s,i++)}),a}function Ju(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var we={current:null},aa={transition:null},Zu={ReactCurrentDispatcher:we,ReactCurrentBatchConfig:aa,ReactCurrentOwner:_s};function vd(){throw Error("act(...) is not supported in production builds of React.")}F.Children={map:Fr,forEach:function(e,t,n){Fr(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Fr(e,function(){t++}),t},toArray:function(e){return Fr(e,function(t){return t})||[]},only:function(e){if(!Ds(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};F.Component=Dn;F.Fragment=Ou;F.Profiler=Uu;F.PureComponent=As;F.StrictMode=$u;F.Suspense=Wu;F.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Zu;F.act=vd;F.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var a=pd({},e.props),i=e.key,s=e.ref,o=e._owner;if(t!=null){if(t.ref!==void 0&&(s=t.ref,o=_s.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(d in t)md.call(t,d)&&!gd.hasOwnProperty(d)&&(a[d]=t[d]===void 0&&l!==void 0?l[d]:t[d])}var d=arguments.length-2;if(d===1)a.children=n;else if(1<d){l=Array(d);for(var c=0;c<d;c++)l[c]=arguments[c+2];a.children=l}return{$$typeof:Tr,type:e.type,key:i,ref:s,props:a,_owner:o}};F.createContext=function(e){return e={$$typeof:Gu,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Hu,_context:e},e.Consumer=e};F.createElement=xd;F.createFactory=function(e){var t=xd.bind(null,e);return t.type=e,t};F.createRef=function(){return{current:null}};F.forwardRef=function(e){return{$$typeof:Vu,render:e}};F.isValidElement=Ds;F.lazy=function(e){return{$$typeof:Yu,_payload:{_status:-1,_result:e},_init:Ju}};F.memo=function(e,t){return{$$typeof:Qu,type:e,compare:t===void 0?null:t}};F.startTransition=function(e){var t=aa.transition;aa.transition={};try{e()}finally{aa.transition=t}};F.unstable_act=vd;F.useCallback=function(e,t){return we.current.useCallback(e,t)};F.useContext=function(e){return we.current.useContext(e)};F.useDebugValue=function(){};F.useDeferredValue=function(e){return we.current.useDeferredValue(e)};F.useEffect=function(e,t){return we.current.useEffect(e,t)};F.useId=function(){return we.current.useId()};F.useImperativeHandle=function(e,t,n){return we.current.useImperativeHandle(e,t,n)};F.useInsertionEffect=function(e,t){return we.current.useInsertionEffect(e,t)};F.useLayoutEffect=function(e,t){return we.current.useLayoutEffect(e,t)};F.useMemo=function(e,t){return we.current.useMemo(e,t)};F.useReducer=function(e,t,n){return we.current.useReducer(e,t,n)};F.useRef=function(e){return we.current.useRef(e)};F.useState=function(e){return we.current.useState(e)};F.useSyncExternalStore=function(e,t,n){return we.current.useSyncExternalStore(e,t,n)};F.useTransition=function(){return we.current.useTransition()};F.version="18.3.1";cd.exports=F;var g=cd.exports;const yd=Fu(g),ep=Du({__proto__:null,default:yd},[g]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var tp=g,np=Symbol.for("react.element"),rp=Symbol.for("react.fragment"),ap=Object.prototype.hasOwnProperty,ip=tp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,sp={key:!0,ref:!0,__self:!0,__source:!0};function bd(e,t,n){var a,i={},s=null,o=null;n!==void 0&&(s=""+n),t.key!==void 0&&(s=""+t.key),t.ref!==void 0&&(o=t.ref);for(a in t)ap.call(t,a)&&!sp.hasOwnProperty(a)&&(i[a]=t[a]);if(e&&e.defaultProps)for(a in t=e.defaultProps,t)i[a]===void 0&&(i[a]=t[a]);return{$$typeof:np,type:e,key:s,ref:o,props:i,_owner:ip.current}}Oa.Fragment=rp;Oa.jsx=bd;Oa.jsxs=bd;dd.exports=Oa;var r=dd.exports,_i={},jd={exports:{}},Te={},wd={exports:{}},kd={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(E,_){var D=E.length;E.push(_);e:for(;0<D;){var V=D-1>>>1,K=E[V];if(0<i(K,_))E[V]=_,E[D]=K,D=V;else break e}}function n(E){return E.length===0?null:E[0]}function a(E){if(E.length===0)return null;var _=E[0],D=E.pop();if(D!==_){E[0]=D;e:for(var V=0,K=E.length,sn=K>>>1;V<sn;){var st=2*(V+1)-1,on=E[st],Le=st+1,Ht=E[Le];if(0>i(on,D))Le<K&&0>i(Ht,on)?(E[V]=Ht,E[Le]=D,V=Le):(E[V]=on,E[st]=D,V=st);else if(Le<K&&0>i(Ht,D))E[V]=Ht,E[Le]=D,V=Le;else break e}}return _}function i(E,_){var D=E.sortIndex-_.sortIndex;return D!==0?D:E.id-_.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;e.unstable_now=function(){return s.now()}}else{var o=Date,l=o.now();e.unstable_now=function(){return o.now()-l}}var d=[],c=[],h=1,m=null,x=3,w=!1,N=!1,y=!1,j=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,u=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function p(E){for(var _=n(c);_!==null;){if(_.callback===null)a(c);else if(_.startTime<=E)a(c),_.sortIndex=_.expirationTime,t(d,_);else break;_=n(c)}}function v(E){if(y=!1,p(E),!N)if(n(d)!==null)N=!0,xt(S);else{var _=n(c);_!==null&&T(v,_.startTime-E)}}function S(E,_){N=!1,y&&(y=!1,f(M),M=-1),w=!0;var D=x;try{for(p(_),m=n(d);m!==null&&(!(m.expirationTime>_)||E&&!R());){var V=m.callback;if(typeof V=="function"){m.callback=null,x=m.priorityLevel;var K=V(m.expirationTime<=_);_=e.unstable_now(),typeof K=="function"?m.callback=K:m===n(d)&&a(d),p(_)}else a(d);m=n(d)}if(m!==null)var sn=!0;else{var st=n(c);st!==null&&T(v,st.startTime-_),sn=!1}return sn}finally{m=null,x=D,w=!1}}var C=!1,k=null,M=-1,U=5,L=-1;function R(){return!(e.unstable_now()-L<U)}function O(){if(k!==null){var E=e.unstable_now();L=E;var _=!0;try{_=k(!0,E)}finally{_?ie():(C=!1,k=null)}}else C=!1}var ie;if(typeof u=="function")ie=function(){u(O)};else if(typeof MessageChannel<"u"){var Ut=new MessageChannel,Ue=Ut.port2;Ut.port1.onmessage=O,ie=function(){Ue.postMessage(null)}}else ie=function(){j(O,0)};function xt(E){k=E,C||(C=!0,ie())}function T(E,_){M=j(function(){E(e.unstable_now())},_)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(E){E.callback=null},e.unstable_continueExecution=function(){N||w||(N=!0,xt(S))},e.unstable_forceFrameRate=function(E){0>E||125<E?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):U=0<E?Math.floor(1e3/E):5},e.unstable_getCurrentPriorityLevel=function(){return x},e.unstable_getFirstCallbackNode=function(){return n(d)},e.unstable_next=function(E){switch(x){case 1:case 2:case 3:var _=3;break;default:_=x}var D=x;x=_;try{return E()}finally{x=D}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(E,_){switch(E){case 1:case 2:case 3:case 4:case 5:break;default:E=3}var D=x;x=E;try{return _()}finally{x=D}},e.unstable_scheduleCallback=function(E,_,D){var V=e.unstable_now();switch(typeof D=="object"&&D!==null?(D=D.delay,D=typeof D=="number"&&0<D?V+D:V):D=V,E){case 1:var K=-1;break;case 2:K=250;break;case 5:K=1073741823;break;case 4:K=1e4;break;default:K=5e3}return K=D+K,E={id:h++,callback:_,priorityLevel:E,startTime:D,expirationTime:K,sortIndex:-1},D>V?(E.sortIndex=D,t(c,E),n(d)===null&&E===n(c)&&(y?(f(M),M=-1):y=!0,T(v,D-V))):(E.sortIndex=K,t(d,E),N||w||(N=!0,xt(S))),E},e.unstable_shouldYield=R,e.unstable_wrapCallback=function(E){var _=x;return function(){var D=x;x=_;try{return E.apply(this,arguments)}finally{x=D}}}})(kd);wd.exports=kd;var op=wd.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var lp=g,Ie=op;function z(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Nd=new Set,hr={};function nn(e,t){Pn(e,t),Pn(e+"Capture",t)}function Pn(e,t){for(hr[e]=t,e=0;e<t.length;e++)Nd.add(t[e])}var pt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Di=Object.prototype.hasOwnProperty,dp=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Bo={},Oo={};function cp(e){return Di.call(Oo,e)?!0:Di.call(Bo,e)?!1:dp.test(e)?Oo[e]=!0:(Bo[e]=!0,!1)}function up(e,t,n,a){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return a?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function pp(e,t,n,a){if(t===null||typeof t>"u"||up(e,t,n,a))return!0;if(a)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function ke(e,t,n,a,i,s,o){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=a,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=s,this.removeEmptyString=o}var fe={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){fe[e]=new ke(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];fe[t]=new ke(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){fe[e]=new ke(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){fe[e]=new ke(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){fe[e]=new ke(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){fe[e]=new ke(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){fe[e]=new ke(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){fe[e]=new ke(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){fe[e]=new ke(e,5,!1,e.toLowerCase(),null,!1,!1)});var Fs=/[\-:]([a-z])/g;function Bs(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Fs,Bs);fe[t]=new ke(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Fs,Bs);fe[t]=new ke(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Fs,Bs);fe[t]=new ke(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){fe[e]=new ke(e,1,!1,e.toLowerCase(),null,!1,!1)});fe.xlinkHref=new ke("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){fe[e]=new ke(e,1,!1,e.toLowerCase(),null,!0,!0)});function Os(e,t,n,a){var i=fe.hasOwnProperty(t)?fe[t]:null;(i!==null?i.type!==0:a||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(pp(t,n,i,a)&&(n=null),a||i===null?cp(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,a=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,a?e.setAttributeNS(a,t,n):e.setAttribute(t,n))))}var gt=lp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Br=Symbol.for("react.element"),pn=Symbol.for("react.portal"),fn=Symbol.for("react.fragment"),$s=Symbol.for("react.strict_mode"),Fi=Symbol.for("react.profiler"),Sd=Symbol.for("react.provider"),zd=Symbol.for("react.context"),Us=Symbol.for("react.forward_ref"),Bi=Symbol.for("react.suspense"),Oi=Symbol.for("react.suspense_list"),Hs=Symbol.for("react.memo"),yt=Symbol.for("react.lazy"),Cd=Symbol.for("react.offscreen"),$o=Symbol.iterator;function Gn(e){return e===null||typeof e!="object"?null:(e=$o&&e[$o]||e["@@iterator"],typeof e=="function"?e:null)}var Z=Object.assign,ii;function tr(e){if(ii===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);ii=t&&t[1]||""}return`
`+ii+e}var si=!1;function oi(e,t){if(!e||si)return"";si=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var a=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){a=c}e.call(t.prototype)}else{try{throw Error()}catch(c){a=c}e()}}catch(c){if(c&&a&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),s=a.stack.split(`
`),o=i.length-1,l=s.length-1;1<=o&&0<=l&&i[o]!==s[l];)l--;for(;1<=o&&0<=l;o--,l--)if(i[o]!==s[l]){if(o!==1||l!==1)do if(o--,l--,0>l||i[o]!==s[l]){var d=`
`+i[o].replace(" at new "," at ");return e.displayName&&d.includes("<anonymous>")&&(d=d.replace("<anonymous>",e.displayName)),d}while(1<=o&&0<=l);break}}}finally{si=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?tr(e):""}function fp(e){switch(e.tag){case 5:return tr(e.type);case 16:return tr("Lazy");case 13:return tr("Suspense");case 19:return tr("SuspenseList");case 0:case 2:case 15:return e=oi(e.type,!1),e;case 11:return e=oi(e.type.render,!1),e;case 1:return e=oi(e.type,!0),e;default:return""}}function $i(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case fn:return"Fragment";case pn:return"Portal";case Fi:return"Profiler";case $s:return"StrictMode";case Bi:return"Suspense";case Oi:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case zd:return(e.displayName||"Context")+".Consumer";case Sd:return(e._context.displayName||"Context")+".Provider";case Us:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Hs:return t=e.displayName||null,t!==null?t:$i(e.type)||"Memo";case yt:t=e._payload,e=e._init;try{return $i(e(t))}catch{}}return null}function hp(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return $i(t);case 8:return t===$s?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Lt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Md(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function mp(e){var t=Md(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),a=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(o){a=""+o,s.call(this,o)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return a},setValue:function(o){a=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Or(e){e._valueTracker||(e._valueTracker=mp(e))}function Ed(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),a="";return e&&(a=Md(e)?e.checked?"true":"false":e.value),e=a,e!==n?(t.setValue(e),!0):!1}function ma(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Ui(e,t){var n=t.checked;return Z({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Uo(e,t){var n=t.defaultValue==null?"":t.defaultValue,a=t.checked!=null?t.checked:t.defaultChecked;n=Lt(t.value!=null?t.value:n),e._wrapperState={initialChecked:a,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Pd(e,t){t=t.checked,t!=null&&Os(e,"checked",t,!1)}function Hi(e,t){Pd(e,t);var n=Lt(t.value),a=t.type;if(n!=null)a==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(a==="submit"||a==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Gi(e,t.type,n):t.hasOwnProperty("defaultValue")&&Gi(e,t.type,Lt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Ho(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var a=t.type;if(!(a!=="submit"&&a!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Gi(e,t,n){(t!=="number"||ma(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var nr=Array.isArray;function Nn(e,t,n,a){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&a&&(e[n].defaultSelected=!0)}else{for(n=""+Lt(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,a&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Vi(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(z(91));return Z({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Go(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(z(92));if(nr(n)){if(1<n.length)throw Error(z(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Lt(n)}}function Rd(e,t){var n=Lt(t.value),a=Lt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),a!=null&&(e.defaultValue=""+a)}function Vo(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Id(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Wi(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Id(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var $r,Td=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,a,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,a,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for($r=$r||document.createElement("div"),$r.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=$r.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function mr(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var ir={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},gp=["Webkit","ms","Moz","O"];Object.keys(ir).forEach(function(e){gp.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),ir[t]=ir[e]})});function Ad(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||ir.hasOwnProperty(e)&&ir[e]?(""+t).trim():t+"px"}function Ld(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var a=n.indexOf("--")===0,i=Ad(n,t[n],a);n==="float"&&(n="cssFloat"),a?e.setProperty(n,i):e[n]=i}}var xp=Z({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Qi(e,t){if(t){if(xp[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(z(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(z(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(z(61))}if(t.style!=null&&typeof t.style!="object")throw Error(z(62))}}function Yi(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var qi=null;function Gs(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ki=null,Sn=null,zn=null;function Wo(e){if(e=_r(e)){if(typeof Ki!="function")throw Error(z(280));var t=e.stateNode;t&&(t=Va(t),Ki(e.stateNode,e.type,t))}}function _d(e){Sn?zn?zn.push(e):zn=[e]:Sn=e}function Dd(){if(Sn){var e=Sn,t=zn;if(zn=Sn=null,Wo(e),t)for(e=0;e<t.length;e++)Wo(t[e])}}function Fd(e,t){return e(t)}function Bd(){}var li=!1;function Od(e,t,n){if(li)return e(t,n);li=!0;try{return Fd(e,t,n)}finally{li=!1,(Sn!==null||zn!==null)&&(Bd(),Dd())}}function gr(e,t){var n=e.stateNode;if(n===null)return null;var a=Va(n);if(a===null)return null;n=a[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(e=e.type,a=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!a;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(z(231,t,typeof n));return n}var Xi=!1;if(pt)try{var Vn={};Object.defineProperty(Vn,"passive",{get:function(){Xi=!0}}),window.addEventListener("test",Vn,Vn),window.removeEventListener("test",Vn,Vn)}catch{Xi=!1}function vp(e,t,n,a,i,s,o,l,d){var c=Array.prototype.slice.call(arguments,3);try{t.apply(n,c)}catch(h){this.onError(h)}}var sr=!1,ga=null,xa=!1,Ji=null,yp={onError:function(e){sr=!0,ga=e}};function bp(e,t,n,a,i,s,o,l,d){sr=!1,ga=null,vp.apply(yp,arguments)}function jp(e,t,n,a,i,s,o,l,d){if(bp.apply(this,arguments),sr){if(sr){var c=ga;sr=!1,ga=null}else throw Error(z(198));xa||(xa=!0,Ji=c)}}function rn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function $d(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Qo(e){if(rn(e)!==e)throw Error(z(188))}function wp(e){var t=e.alternate;if(!t){if(t=rn(e),t===null)throw Error(z(188));return t!==e?null:e}for(var n=e,a=t;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(a=i.return,a!==null){n=a;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Qo(i),e;if(s===a)return Qo(i),t;s=s.sibling}throw Error(z(188))}if(n.return!==a.return)n=i,a=s;else{for(var o=!1,l=i.child;l;){if(l===n){o=!0,n=i,a=s;break}if(l===a){o=!0,a=i,n=s;break}l=l.sibling}if(!o){for(l=s.child;l;){if(l===n){o=!0,n=s,a=i;break}if(l===a){o=!0,a=s,n=i;break}l=l.sibling}if(!o)throw Error(z(189))}}if(n.alternate!==a)throw Error(z(190))}if(n.tag!==3)throw Error(z(188));return n.stateNode.current===n?e:t}function Ud(e){return e=wp(e),e!==null?Hd(e):null}function Hd(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Hd(e);if(t!==null)return t;e=e.sibling}return null}var Gd=Ie.unstable_scheduleCallback,Yo=Ie.unstable_cancelCallback,kp=Ie.unstable_shouldYield,Np=Ie.unstable_requestPaint,ne=Ie.unstable_now,Sp=Ie.unstable_getCurrentPriorityLevel,Vs=Ie.unstable_ImmediatePriority,Vd=Ie.unstable_UserBlockingPriority,va=Ie.unstable_NormalPriority,zp=Ie.unstable_LowPriority,Wd=Ie.unstable_IdlePriority,$a=null,rt=null;function Cp(e){if(rt&&typeof rt.onCommitFiberRoot=="function")try{rt.onCommitFiberRoot($a,e,void 0,(e.current.flags&128)===128)}catch{}}var qe=Math.clz32?Math.clz32:Pp,Mp=Math.log,Ep=Math.LN2;function Pp(e){return e>>>=0,e===0?32:31-(Mp(e)/Ep|0)|0}var Ur=64,Hr=4194304;function rr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function ya(e,t){var n=e.pendingLanes;if(n===0)return 0;var a=0,i=e.suspendedLanes,s=e.pingedLanes,o=n&268435455;if(o!==0){var l=o&~i;l!==0?a=rr(l):(s&=o,s!==0&&(a=rr(s)))}else o=n&~i,o!==0?a=rr(o):s!==0&&(a=rr(s));if(a===0)return 0;if(t!==0&&t!==a&&!(t&i)&&(i=a&-a,s=t&-t,i>=s||i===16&&(s&4194240)!==0))return t;if(a&4&&(a|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=a;0<t;)n=31-qe(t),i=1<<n,a|=e[n],t&=~i;return a}function Rp(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ip(e,t){for(var n=e.suspendedLanes,a=e.pingedLanes,i=e.expirationTimes,s=e.pendingLanes;0<s;){var o=31-qe(s),l=1<<o,d=i[o];d===-1?(!(l&n)||l&a)&&(i[o]=Rp(l,t)):d<=t&&(e.expiredLanes|=l),s&=~l}}function Zi(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Qd(){var e=Ur;return Ur<<=1,!(Ur&4194240)&&(Ur=64),e}function di(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Ar(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-qe(t),e[t]=n}function Tp(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var a=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-qe(n),s=1<<i;t[i]=0,a[i]=-1,e[i]=-1,n&=~s}}function Ws(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var a=31-qe(n),i=1<<a;i&t|e[a]&t&&(e[a]|=t),n&=~i}}var H=0;function Yd(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var qd,Qs,Kd,Xd,Jd,es=!1,Gr=[],zt=null,Ct=null,Mt=null,xr=new Map,vr=new Map,jt=[],Ap="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function qo(e,t){switch(e){case"focusin":case"focusout":zt=null;break;case"dragenter":case"dragleave":Ct=null;break;case"mouseover":case"mouseout":Mt=null;break;case"pointerover":case"pointerout":xr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":vr.delete(t.pointerId)}}function Wn(e,t,n,a,i,s){return e===null||e.nativeEvent!==s?(e={blockedOn:t,domEventName:n,eventSystemFlags:a,nativeEvent:s,targetContainers:[i]},t!==null&&(t=_r(t),t!==null&&Qs(t)),e):(e.eventSystemFlags|=a,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Lp(e,t,n,a,i){switch(t){case"focusin":return zt=Wn(zt,e,t,n,a,i),!0;case"dragenter":return Ct=Wn(Ct,e,t,n,a,i),!0;case"mouseover":return Mt=Wn(Mt,e,t,n,a,i),!0;case"pointerover":var s=i.pointerId;return xr.set(s,Wn(xr.get(s)||null,e,t,n,a,i)),!0;case"gotpointercapture":return s=i.pointerId,vr.set(s,Wn(vr.get(s)||null,e,t,n,a,i)),!0}return!1}function Zd(e){var t=Wt(e.target);if(t!==null){var n=rn(t);if(n!==null){if(t=n.tag,t===13){if(t=$d(n),t!==null){e.blockedOn=t,Jd(e.priority,function(){Kd(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function ia(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=ts(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var a=new n.constructor(n.type,n);qi=a,n.target.dispatchEvent(a),qi=null}else return t=_r(n),t!==null&&Qs(t),e.blockedOn=n,!1;t.shift()}return!0}function Ko(e,t,n){ia(e)&&n.delete(t)}function _p(){es=!1,zt!==null&&ia(zt)&&(zt=null),Ct!==null&&ia(Ct)&&(Ct=null),Mt!==null&&ia(Mt)&&(Mt=null),xr.forEach(Ko),vr.forEach(Ko)}function Qn(e,t){e.blockedOn===t&&(e.blockedOn=null,es||(es=!0,Ie.unstable_scheduleCallback(Ie.unstable_NormalPriority,_p)))}function yr(e){function t(i){return Qn(i,e)}if(0<Gr.length){Qn(Gr[0],e);for(var n=1;n<Gr.length;n++){var a=Gr[n];a.blockedOn===e&&(a.blockedOn=null)}}for(zt!==null&&Qn(zt,e),Ct!==null&&Qn(Ct,e),Mt!==null&&Qn(Mt,e),xr.forEach(t),vr.forEach(t),n=0;n<jt.length;n++)a=jt[n],a.blockedOn===e&&(a.blockedOn=null);for(;0<jt.length&&(n=jt[0],n.blockedOn===null);)Zd(n),n.blockedOn===null&&jt.shift()}var Cn=gt.ReactCurrentBatchConfig,ba=!0;function Dp(e,t,n,a){var i=H,s=Cn.transition;Cn.transition=null;try{H=1,Ys(e,t,n,a)}finally{H=i,Cn.transition=s}}function Fp(e,t,n,a){var i=H,s=Cn.transition;Cn.transition=null;try{H=4,Ys(e,t,n,a)}finally{H=i,Cn.transition=s}}function Ys(e,t,n,a){if(ba){var i=ts(e,t,n,a);if(i===null)yi(e,t,a,ja,n),qo(e,a);else if(Lp(i,e,t,n,a))a.stopPropagation();else if(qo(e,a),t&4&&-1<Ap.indexOf(e)){for(;i!==null;){var s=_r(i);if(s!==null&&qd(s),s=ts(e,t,n,a),s===null&&yi(e,t,a,ja,n),s===i)break;i=s}i!==null&&a.stopPropagation()}else yi(e,t,a,null,n)}}var ja=null;function ts(e,t,n,a){if(ja=null,e=Gs(a),e=Wt(e),e!==null)if(t=rn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=$d(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return ja=e,null}function ec(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Sp()){case Vs:return 1;case Vd:return 4;case va:case zp:return 16;case Wd:return 536870912;default:return 16}default:return 16}}var kt=null,qs=null,sa=null;function tc(){if(sa)return sa;var e,t=qs,n=t.length,a,i="value"in kt?kt.value:kt.textContent,s=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(a=1;a<=o&&t[n-a]===i[s-a];a++);return sa=i.slice(e,1<a?1-a:void 0)}function oa(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Vr(){return!0}function Xo(){return!1}function Ae(e){function t(n,a,i,s,o){this._reactName=n,this._targetInst=i,this.type=a,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(n=e[l],this[l]=n?n(s):s[l]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Vr:Xo,this.isPropagationStopped=Xo,this}return Z(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Vr)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Vr)},persist:function(){},isPersistent:Vr}),t}var Fn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ks=Ae(Fn),Lr=Z({},Fn,{view:0,detail:0}),Bp=Ae(Lr),ci,ui,Yn,Ua=Z({},Lr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Xs,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Yn&&(Yn&&e.type==="mousemove"?(ci=e.screenX-Yn.screenX,ui=e.screenY-Yn.screenY):ui=ci=0,Yn=e),ci)},movementY:function(e){return"movementY"in e?e.movementY:ui}}),Jo=Ae(Ua),Op=Z({},Ua,{dataTransfer:0}),$p=Ae(Op),Up=Z({},Lr,{relatedTarget:0}),pi=Ae(Up),Hp=Z({},Fn,{animationName:0,elapsedTime:0,pseudoElement:0}),Gp=Ae(Hp),Vp=Z({},Fn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Wp=Ae(Vp),Qp=Z({},Fn,{data:0}),Zo=Ae(Qp),Yp={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},qp={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Kp={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Xp(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Kp[e])?!!t[e]:!1}function Xs(){return Xp}var Jp=Z({},Lr,{key:function(e){if(e.key){var t=Yp[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=oa(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?qp[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Xs,charCode:function(e){return e.type==="keypress"?oa(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?oa(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Zp=Ae(Jp),ef=Z({},Ua,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),el=Ae(ef),tf=Z({},Lr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Xs}),nf=Ae(tf),rf=Z({},Fn,{propertyName:0,elapsedTime:0,pseudoElement:0}),af=Ae(rf),sf=Z({},Ua,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),of=Ae(sf),lf=[9,13,27,32],Js=pt&&"CompositionEvent"in window,or=null;pt&&"documentMode"in document&&(or=document.documentMode);var df=pt&&"TextEvent"in window&&!or,nc=pt&&(!Js||or&&8<or&&11>=or),tl=" ",nl=!1;function rc(e,t){switch(e){case"keyup":return lf.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ac(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var hn=!1;function cf(e,t){switch(e){case"compositionend":return ac(t);case"keypress":return t.which!==32?null:(nl=!0,tl);case"textInput":return e=t.data,e===tl&&nl?null:e;default:return null}}function uf(e,t){if(hn)return e==="compositionend"||!Js&&rc(e,t)?(e=tc(),sa=qs=kt=null,hn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return nc&&t.locale!=="ko"?null:t.data;default:return null}}var pf={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function rl(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!pf[e.type]:t==="textarea"}function ic(e,t,n,a){_d(a),t=wa(t,"onChange"),0<t.length&&(n=new Ks("onChange","change",null,n,a),e.push({event:n,listeners:t}))}var lr=null,br=null;function ff(e){gc(e,0)}function Ha(e){var t=xn(e);if(Ed(t))return e}function hf(e,t){if(e==="change")return t}var sc=!1;if(pt){var fi;if(pt){var hi="oninput"in document;if(!hi){var al=document.createElement("div");al.setAttribute("oninput","return;"),hi=typeof al.oninput=="function"}fi=hi}else fi=!1;sc=fi&&(!document.documentMode||9<document.documentMode)}function il(){lr&&(lr.detachEvent("onpropertychange",oc),br=lr=null)}function oc(e){if(e.propertyName==="value"&&Ha(br)){var t=[];ic(t,br,e,Gs(e)),Od(ff,t)}}function mf(e,t,n){e==="focusin"?(il(),lr=t,br=n,lr.attachEvent("onpropertychange",oc)):e==="focusout"&&il()}function gf(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Ha(br)}function xf(e,t){if(e==="click")return Ha(t)}function vf(e,t){if(e==="input"||e==="change")return Ha(t)}function yf(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Xe=typeof Object.is=="function"?Object.is:yf;function jr(e,t){if(Xe(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),a=Object.keys(t);if(n.length!==a.length)return!1;for(a=0;a<n.length;a++){var i=n[a];if(!Di.call(t,i)||!Xe(e[i],t[i]))return!1}return!0}function sl(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function ol(e,t){var n=sl(e);e=0;for(var a;n;){if(n.nodeType===3){if(a=e+n.textContent.length,e<=t&&a>=t)return{node:n,offset:t-e};e=a}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=sl(n)}}function lc(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?lc(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function dc(){for(var e=window,t=ma();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=ma(e.document)}return t}function Zs(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function bf(e){var t=dc(),n=e.focusedElem,a=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&lc(n.ownerDocument.documentElement,n)){if(a!==null&&Zs(n)){if(t=a.start,e=a.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,s=Math.min(a.start,i);a=a.end===void 0?s:Math.min(a.end,i),!e.extend&&s>a&&(i=a,a=s,s=i),i=ol(n,s);var o=ol(n,a);i&&o&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),s>a?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var jf=pt&&"documentMode"in document&&11>=document.documentMode,mn=null,ns=null,dr=null,rs=!1;function ll(e,t,n){var a=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;rs||mn==null||mn!==ma(a)||(a=mn,"selectionStart"in a&&Zs(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),dr&&jr(dr,a)||(dr=a,a=wa(ns,"onSelect"),0<a.length&&(t=new Ks("onSelect","select",null,t,n),e.push({event:t,listeners:a}),t.target=mn)))}function Wr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var gn={animationend:Wr("Animation","AnimationEnd"),animationiteration:Wr("Animation","AnimationIteration"),animationstart:Wr("Animation","AnimationStart"),transitionend:Wr("Transition","TransitionEnd")},mi={},cc={};pt&&(cc=document.createElement("div").style,"AnimationEvent"in window||(delete gn.animationend.animation,delete gn.animationiteration.animation,delete gn.animationstart.animation),"TransitionEvent"in window||delete gn.transitionend.transition);function Ga(e){if(mi[e])return mi[e];if(!gn[e])return e;var t=gn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in cc)return mi[e]=t[n];return e}var uc=Ga("animationend"),pc=Ga("animationiteration"),fc=Ga("animationstart"),hc=Ga("transitionend"),mc=new Map,dl="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Dt(e,t){mc.set(e,t),nn(t,[e])}for(var gi=0;gi<dl.length;gi++){var xi=dl[gi],wf=xi.toLowerCase(),kf=xi[0].toUpperCase()+xi.slice(1);Dt(wf,"on"+kf)}Dt(uc,"onAnimationEnd");Dt(pc,"onAnimationIteration");Dt(fc,"onAnimationStart");Dt("dblclick","onDoubleClick");Dt("focusin","onFocus");Dt("focusout","onBlur");Dt(hc,"onTransitionEnd");Pn("onMouseEnter",["mouseout","mouseover"]);Pn("onMouseLeave",["mouseout","mouseover"]);Pn("onPointerEnter",["pointerout","pointerover"]);Pn("onPointerLeave",["pointerout","pointerover"]);nn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));nn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));nn("onBeforeInput",["compositionend","keypress","textInput","paste"]);nn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));nn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));nn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ar="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Nf=new Set("cancel close invalid load scroll toggle".split(" ").concat(ar));function cl(e,t,n){var a=e.type||"unknown-event";e.currentTarget=n,jp(a,t,void 0,e),e.currentTarget=null}function gc(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var a=e[n],i=a.event;a=a.listeners;e:{var s=void 0;if(t)for(var o=a.length-1;0<=o;o--){var l=a[o],d=l.instance,c=l.currentTarget;if(l=l.listener,d!==s&&i.isPropagationStopped())break e;cl(i,l,c),s=d}else for(o=0;o<a.length;o++){if(l=a[o],d=l.instance,c=l.currentTarget,l=l.listener,d!==s&&i.isPropagationStopped())break e;cl(i,l,c),s=d}}}if(xa)throw e=Ji,xa=!1,Ji=null,e}function Q(e,t){var n=t[ls];n===void 0&&(n=t[ls]=new Set);var a=e+"__bubble";n.has(a)||(xc(t,e,2,!1),n.add(a))}function vi(e,t,n){var a=0;t&&(a|=4),xc(n,e,a,t)}var Qr="_reactListening"+Math.random().toString(36).slice(2);function wr(e){if(!e[Qr]){e[Qr]=!0,Nd.forEach(function(n){n!=="selectionchange"&&(Nf.has(n)||vi(n,!1,e),vi(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Qr]||(t[Qr]=!0,vi("selectionchange",!1,t))}}function xc(e,t,n,a){switch(ec(t)){case 1:var i=Dp;break;case 4:i=Fp;break;default:i=Ys}n=i.bind(null,t,n,e),i=void 0,!Xi||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),a?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function yi(e,t,n,a,i){var s=a;if(!(t&1)&&!(t&2)&&a!==null)e:for(;;){if(a===null)return;var o=a.tag;if(o===3||o===4){var l=a.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(o===4)for(o=a.return;o!==null;){var d=o.tag;if((d===3||d===4)&&(d=o.stateNode.containerInfo,d===i||d.nodeType===8&&d.parentNode===i))return;o=o.return}for(;l!==null;){if(o=Wt(l),o===null)return;if(d=o.tag,d===5||d===6){a=s=o;continue e}l=l.parentNode}}a=a.return}Od(function(){var c=s,h=Gs(n),m=[];e:{var x=mc.get(e);if(x!==void 0){var w=Ks,N=e;switch(e){case"keypress":if(oa(n)===0)break e;case"keydown":case"keyup":w=Zp;break;case"focusin":N="focus",w=pi;break;case"focusout":N="blur",w=pi;break;case"beforeblur":case"afterblur":w=pi;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":w=Jo;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":w=$p;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":w=nf;break;case uc:case pc:case fc:w=Gp;break;case hc:w=af;break;case"scroll":w=Bp;break;case"wheel":w=of;break;case"copy":case"cut":case"paste":w=Wp;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":w=el}var y=(t&4)!==0,j=!y&&e==="scroll",f=y?x!==null?x+"Capture":null:x;y=[];for(var u=c,p;u!==null;){p=u;var v=p.stateNode;if(p.tag===5&&v!==null&&(p=v,f!==null&&(v=gr(u,f),v!=null&&y.push(kr(u,v,p)))),j)break;u=u.return}0<y.length&&(x=new w(x,N,null,n,h),m.push({event:x,listeners:y}))}}if(!(t&7)){e:{if(x=e==="mouseover"||e==="pointerover",w=e==="mouseout"||e==="pointerout",x&&n!==qi&&(N=n.relatedTarget||n.fromElement)&&(Wt(N)||N[ft]))break e;if((w||x)&&(x=h.window===h?h:(x=h.ownerDocument)?x.defaultView||x.parentWindow:window,w?(N=n.relatedTarget||n.toElement,w=c,N=N?Wt(N):null,N!==null&&(j=rn(N),N!==j||N.tag!==5&&N.tag!==6)&&(N=null)):(w=null,N=c),w!==N)){if(y=Jo,v="onMouseLeave",f="onMouseEnter",u="mouse",(e==="pointerout"||e==="pointerover")&&(y=el,v="onPointerLeave",f="onPointerEnter",u="pointer"),j=w==null?x:xn(w),p=N==null?x:xn(N),x=new y(v,u+"leave",w,n,h),x.target=j,x.relatedTarget=p,v=null,Wt(h)===c&&(y=new y(f,u+"enter",N,n,h),y.target=p,y.relatedTarget=j,v=y),j=v,w&&N)t:{for(y=w,f=N,u=0,p=y;p;p=ln(p))u++;for(p=0,v=f;v;v=ln(v))p++;for(;0<u-p;)y=ln(y),u--;for(;0<p-u;)f=ln(f),p--;for(;u--;){if(y===f||f!==null&&y===f.alternate)break t;y=ln(y),f=ln(f)}y=null}else y=null;w!==null&&ul(m,x,w,y,!1),N!==null&&j!==null&&ul(m,j,N,y,!0)}}e:{if(x=c?xn(c):window,w=x.nodeName&&x.nodeName.toLowerCase(),w==="select"||w==="input"&&x.type==="file")var S=hf;else if(rl(x))if(sc)S=vf;else{S=gf;var C=mf}else(w=x.nodeName)&&w.toLowerCase()==="input"&&(x.type==="checkbox"||x.type==="radio")&&(S=xf);if(S&&(S=S(e,c))){ic(m,S,n,h);break e}C&&C(e,x,c),e==="focusout"&&(C=x._wrapperState)&&C.controlled&&x.type==="number"&&Gi(x,"number",x.value)}switch(C=c?xn(c):window,e){case"focusin":(rl(C)||C.contentEditable==="true")&&(mn=C,ns=c,dr=null);break;case"focusout":dr=ns=mn=null;break;case"mousedown":rs=!0;break;case"contextmenu":case"mouseup":case"dragend":rs=!1,ll(m,n,h);break;case"selectionchange":if(jf)break;case"keydown":case"keyup":ll(m,n,h)}var k;if(Js)e:{switch(e){case"compositionstart":var M="onCompositionStart";break e;case"compositionend":M="onCompositionEnd";break e;case"compositionupdate":M="onCompositionUpdate";break e}M=void 0}else hn?rc(e,n)&&(M="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(M="onCompositionStart");M&&(nc&&n.locale!=="ko"&&(hn||M!=="onCompositionStart"?M==="onCompositionEnd"&&hn&&(k=tc()):(kt=h,qs="value"in kt?kt.value:kt.textContent,hn=!0)),C=wa(c,M),0<C.length&&(M=new Zo(M,e,null,n,h),m.push({event:M,listeners:C}),k?M.data=k:(k=ac(n),k!==null&&(M.data=k)))),(k=df?cf(e,n):uf(e,n))&&(c=wa(c,"onBeforeInput"),0<c.length&&(h=new Zo("onBeforeInput","beforeinput",null,n,h),m.push({event:h,listeners:c}),h.data=k))}gc(m,t)})}function kr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function wa(e,t){for(var n=t+"Capture",a=[];e!==null;){var i=e,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=gr(e,n),s!=null&&a.unshift(kr(e,s,i)),s=gr(e,t),s!=null&&a.push(kr(e,s,i))),e=e.return}return a}function ln(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function ul(e,t,n,a,i){for(var s=t._reactName,o=[];n!==null&&n!==a;){var l=n,d=l.alternate,c=l.stateNode;if(d!==null&&d===a)break;l.tag===5&&c!==null&&(l=c,i?(d=gr(n,s),d!=null&&o.unshift(kr(n,d,l))):i||(d=gr(n,s),d!=null&&o.push(kr(n,d,l)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var Sf=/\r\n?/g,zf=/\u0000|\uFFFD/g;function pl(e){return(typeof e=="string"?e:""+e).replace(Sf,`
`).replace(zf,"")}function Yr(e,t,n){if(t=pl(t),pl(e)!==t&&n)throw Error(z(425))}function ka(){}var as=null,is=null;function ss(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var os=typeof setTimeout=="function"?setTimeout:void 0,Cf=typeof clearTimeout=="function"?clearTimeout:void 0,fl=typeof Promise=="function"?Promise:void 0,Mf=typeof queueMicrotask=="function"?queueMicrotask:typeof fl<"u"?function(e){return fl.resolve(null).then(e).catch(Ef)}:os;function Ef(e){setTimeout(function(){throw e})}function bi(e,t){var n=t,a=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(a===0){e.removeChild(i),yr(t);return}a--}else n!=="$"&&n!=="$?"&&n!=="$!"||a++;n=i}while(n);yr(t)}function Et(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function hl(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Bn=Math.random().toString(36).slice(2),nt="__reactFiber$"+Bn,Nr="__reactProps$"+Bn,ft="__reactContainer$"+Bn,ls="__reactEvents$"+Bn,Pf="__reactListeners$"+Bn,Rf="__reactHandles$"+Bn;function Wt(e){var t=e[nt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[ft]||n[nt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=hl(e);e!==null;){if(n=e[nt])return n;e=hl(e)}return t}e=n,n=e.parentNode}return null}function _r(e){return e=e[nt]||e[ft],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function xn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(z(33))}function Va(e){return e[Nr]||null}var ds=[],vn=-1;function Ft(e){return{current:e}}function Y(e){0>vn||(e.current=ds[vn],ds[vn]=null,vn--)}function G(e,t){vn++,ds[vn]=e.current,e.current=t}var _t={},ve=Ft(_t),ze=Ft(!1),Xt=_t;function Rn(e,t){var n=e.type.contextTypes;if(!n)return _t;var a=e.stateNode;if(a&&a.__reactInternalMemoizedUnmaskedChildContext===t)return a.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=t[s];return a&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function Ce(e){return e=e.childContextTypes,e!=null}function Na(){Y(ze),Y(ve)}function ml(e,t,n){if(ve.current!==_t)throw Error(z(168));G(ve,t),G(ze,n)}function vc(e,t,n){var a=e.stateNode;if(t=t.childContextTypes,typeof a.getChildContext!="function")return n;a=a.getChildContext();for(var i in a)if(!(i in t))throw Error(z(108,hp(e)||"Unknown",i));return Z({},n,a)}function Sa(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||_t,Xt=ve.current,G(ve,e),G(ze,ze.current),!0}function gl(e,t,n){var a=e.stateNode;if(!a)throw Error(z(169));n?(e=vc(e,t,Xt),a.__reactInternalMemoizedMergedChildContext=e,Y(ze),Y(ve),G(ve,e)):Y(ze),G(ze,n)}var lt=null,Wa=!1,ji=!1;function yc(e){lt===null?lt=[e]:lt.push(e)}function If(e){Wa=!0,yc(e)}function Bt(){if(!ji&&lt!==null){ji=!0;var e=0,t=H;try{var n=lt;for(H=1;e<n.length;e++){var a=n[e];do a=a(!0);while(a!==null)}lt=null,Wa=!1}catch(i){throw lt!==null&&(lt=lt.slice(e+1)),Gd(Vs,Bt),i}finally{H=t,ji=!1}}return null}var yn=[],bn=0,za=null,Ca=0,_e=[],De=0,Jt=null,dt=1,ct="";function Gt(e,t){yn[bn++]=Ca,yn[bn++]=za,za=e,Ca=t}function bc(e,t,n){_e[De++]=dt,_e[De++]=ct,_e[De++]=Jt,Jt=e;var a=dt;e=ct;var i=32-qe(a)-1;a&=~(1<<i),n+=1;var s=32-qe(t)+i;if(30<s){var o=i-i%5;s=(a&(1<<o)-1).toString(32),a>>=o,i-=o,dt=1<<32-qe(t)+i|n<<i|a,ct=s+e}else dt=1<<s|n<<i|a,ct=e}function eo(e){e.return!==null&&(Gt(e,1),bc(e,1,0))}function to(e){for(;e===za;)za=yn[--bn],yn[bn]=null,Ca=yn[--bn],yn[bn]=null;for(;e===Jt;)Jt=_e[--De],_e[De]=null,ct=_e[--De],_e[De]=null,dt=_e[--De],_e[De]=null}var Re=null,Pe=null,q=!1,Ye=null;function jc(e,t){var n=Fe(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function xl(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Re=e,Pe=Et(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Re=e,Pe=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Jt!==null?{id:dt,overflow:ct}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Fe(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Re=e,Pe=null,!0):!1;default:return!1}}function cs(e){return(e.mode&1)!==0&&(e.flags&128)===0}function us(e){if(q){var t=Pe;if(t){var n=t;if(!xl(e,t)){if(cs(e))throw Error(z(418));t=Et(n.nextSibling);var a=Re;t&&xl(e,t)?jc(a,n):(e.flags=e.flags&-4097|2,q=!1,Re=e)}}else{if(cs(e))throw Error(z(418));e.flags=e.flags&-4097|2,q=!1,Re=e}}}function vl(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Re=e}function qr(e){if(e!==Re)return!1;if(!q)return vl(e),q=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!ss(e.type,e.memoizedProps)),t&&(t=Pe)){if(cs(e))throw wc(),Error(z(418));for(;t;)jc(e,t),t=Et(t.nextSibling)}if(vl(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(z(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Pe=Et(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Pe=null}}else Pe=Re?Et(e.stateNode.nextSibling):null;return!0}function wc(){for(var e=Pe;e;)e=Et(e.nextSibling)}function In(){Pe=Re=null,q=!1}function no(e){Ye===null?Ye=[e]:Ye.push(e)}var Tf=gt.ReactCurrentBatchConfig;function qn(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(z(309));var a=n.stateNode}if(!a)throw Error(z(147,e));var i=a,s=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===s?t.ref:(t=function(o){var l=i.refs;o===null?delete l[s]:l[s]=o},t._stringRef=s,t)}if(typeof e!="string")throw Error(z(284));if(!n._owner)throw Error(z(290,e))}return e}function Kr(e,t){throw e=Object.prototype.toString.call(t),Error(z(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function yl(e){var t=e._init;return t(e._payload)}function kc(e){function t(f,u){if(e){var p=f.deletions;p===null?(f.deletions=[u],f.flags|=16):p.push(u)}}function n(f,u){if(!e)return null;for(;u!==null;)t(f,u),u=u.sibling;return null}function a(f,u){for(f=new Map;u!==null;)u.key!==null?f.set(u.key,u):f.set(u.index,u),u=u.sibling;return f}function i(f,u){return f=Tt(f,u),f.index=0,f.sibling=null,f}function s(f,u,p){return f.index=p,e?(p=f.alternate,p!==null?(p=p.index,p<u?(f.flags|=2,u):p):(f.flags|=2,u)):(f.flags|=1048576,u)}function o(f){return e&&f.alternate===null&&(f.flags|=2),f}function l(f,u,p,v){return u===null||u.tag!==6?(u=Mi(p,f.mode,v),u.return=f,u):(u=i(u,p),u.return=f,u)}function d(f,u,p,v){var S=p.type;return S===fn?h(f,u,p.props.children,v,p.key):u!==null&&(u.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===yt&&yl(S)===u.type)?(v=i(u,p.props),v.ref=qn(f,u,p),v.return=f,v):(v=ha(p.type,p.key,p.props,null,f.mode,v),v.ref=qn(f,u,p),v.return=f,v)}function c(f,u,p,v){return u===null||u.tag!==4||u.stateNode.containerInfo!==p.containerInfo||u.stateNode.implementation!==p.implementation?(u=Ei(p,f.mode,v),u.return=f,u):(u=i(u,p.children||[]),u.return=f,u)}function h(f,u,p,v,S){return u===null||u.tag!==7?(u=Kt(p,f.mode,v,S),u.return=f,u):(u=i(u,p),u.return=f,u)}function m(f,u,p){if(typeof u=="string"&&u!==""||typeof u=="number")return u=Mi(""+u,f.mode,p),u.return=f,u;if(typeof u=="object"&&u!==null){switch(u.$$typeof){case Br:return p=ha(u.type,u.key,u.props,null,f.mode,p),p.ref=qn(f,null,u),p.return=f,p;case pn:return u=Ei(u,f.mode,p),u.return=f,u;case yt:var v=u._init;return m(f,v(u._payload),p)}if(nr(u)||Gn(u))return u=Kt(u,f.mode,p,null),u.return=f,u;Kr(f,u)}return null}function x(f,u,p,v){var S=u!==null?u.key:null;if(typeof p=="string"&&p!==""||typeof p=="number")return S!==null?null:l(f,u,""+p,v);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case Br:return p.key===S?d(f,u,p,v):null;case pn:return p.key===S?c(f,u,p,v):null;case yt:return S=p._init,x(f,u,S(p._payload),v)}if(nr(p)||Gn(p))return S!==null?null:h(f,u,p,v,null);Kr(f,p)}return null}function w(f,u,p,v,S){if(typeof v=="string"&&v!==""||typeof v=="number")return f=f.get(p)||null,l(u,f,""+v,S);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Br:return f=f.get(v.key===null?p:v.key)||null,d(u,f,v,S);case pn:return f=f.get(v.key===null?p:v.key)||null,c(u,f,v,S);case yt:var C=v._init;return w(f,u,p,C(v._payload),S)}if(nr(v)||Gn(v))return f=f.get(p)||null,h(u,f,v,S,null);Kr(u,v)}return null}function N(f,u,p,v){for(var S=null,C=null,k=u,M=u=0,U=null;k!==null&&M<p.length;M++){k.index>M?(U=k,k=null):U=k.sibling;var L=x(f,k,p[M],v);if(L===null){k===null&&(k=U);break}e&&k&&L.alternate===null&&t(f,k),u=s(L,u,M),C===null?S=L:C.sibling=L,C=L,k=U}if(M===p.length)return n(f,k),q&&Gt(f,M),S;if(k===null){for(;M<p.length;M++)k=m(f,p[M],v),k!==null&&(u=s(k,u,M),C===null?S=k:C.sibling=k,C=k);return q&&Gt(f,M),S}for(k=a(f,k);M<p.length;M++)U=w(k,f,M,p[M],v),U!==null&&(e&&U.alternate!==null&&k.delete(U.key===null?M:U.key),u=s(U,u,M),C===null?S=U:C.sibling=U,C=U);return e&&k.forEach(function(R){return t(f,R)}),q&&Gt(f,M),S}function y(f,u,p,v){var S=Gn(p);if(typeof S!="function")throw Error(z(150));if(p=S.call(p),p==null)throw Error(z(151));for(var C=S=null,k=u,M=u=0,U=null,L=p.next();k!==null&&!L.done;M++,L=p.next()){k.index>M?(U=k,k=null):U=k.sibling;var R=x(f,k,L.value,v);if(R===null){k===null&&(k=U);break}e&&k&&R.alternate===null&&t(f,k),u=s(R,u,M),C===null?S=R:C.sibling=R,C=R,k=U}if(L.done)return n(f,k),q&&Gt(f,M),S;if(k===null){for(;!L.done;M++,L=p.next())L=m(f,L.value,v),L!==null&&(u=s(L,u,M),C===null?S=L:C.sibling=L,C=L);return q&&Gt(f,M),S}for(k=a(f,k);!L.done;M++,L=p.next())L=w(k,f,M,L.value,v),L!==null&&(e&&L.alternate!==null&&k.delete(L.key===null?M:L.key),u=s(L,u,M),C===null?S=L:C.sibling=L,C=L);return e&&k.forEach(function(O){return t(f,O)}),q&&Gt(f,M),S}function j(f,u,p,v){if(typeof p=="object"&&p!==null&&p.type===fn&&p.key===null&&(p=p.props.children),typeof p=="object"&&p!==null){switch(p.$$typeof){case Br:e:{for(var S=p.key,C=u;C!==null;){if(C.key===S){if(S=p.type,S===fn){if(C.tag===7){n(f,C.sibling),u=i(C,p.props.children),u.return=f,f=u;break e}}else if(C.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===yt&&yl(S)===C.type){n(f,C.sibling),u=i(C,p.props),u.ref=qn(f,C,p),u.return=f,f=u;break e}n(f,C);break}else t(f,C);C=C.sibling}p.type===fn?(u=Kt(p.props.children,f.mode,v,p.key),u.return=f,f=u):(v=ha(p.type,p.key,p.props,null,f.mode,v),v.ref=qn(f,u,p),v.return=f,f=v)}return o(f);case pn:e:{for(C=p.key;u!==null;){if(u.key===C)if(u.tag===4&&u.stateNode.containerInfo===p.containerInfo&&u.stateNode.implementation===p.implementation){n(f,u.sibling),u=i(u,p.children||[]),u.return=f,f=u;break e}else{n(f,u);break}else t(f,u);u=u.sibling}u=Ei(p,f.mode,v),u.return=f,f=u}return o(f);case yt:return C=p._init,j(f,u,C(p._payload),v)}if(nr(p))return N(f,u,p,v);if(Gn(p))return y(f,u,p,v);Kr(f,p)}return typeof p=="string"&&p!==""||typeof p=="number"?(p=""+p,u!==null&&u.tag===6?(n(f,u.sibling),u=i(u,p),u.return=f,f=u):(n(f,u),u=Mi(p,f.mode,v),u.return=f,f=u),o(f)):n(f,u)}return j}var Tn=kc(!0),Nc=kc(!1),Ma=Ft(null),Ea=null,jn=null,ro=null;function ao(){ro=jn=Ea=null}function io(e){var t=Ma.current;Y(Ma),e._currentValue=t}function ps(e,t,n){for(;e!==null;){var a=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,a!==null&&(a.childLanes|=t)):a!==null&&(a.childLanes&t)!==t&&(a.childLanes|=t),e===n)break;e=e.return}}function Mn(e,t){Ea=e,ro=jn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Se=!0),e.firstContext=null)}function Oe(e){var t=e._currentValue;if(ro!==e)if(e={context:e,memoizedValue:t,next:null},jn===null){if(Ea===null)throw Error(z(308));jn=e,Ea.dependencies={lanes:0,firstContext:e}}else jn=jn.next=e;return t}var Qt=null;function so(e){Qt===null?Qt=[e]:Qt.push(e)}function Sc(e,t,n,a){var i=t.interleaved;return i===null?(n.next=n,so(t)):(n.next=i.next,i.next=n),t.interleaved=n,ht(e,a)}function ht(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var bt=!1;function oo(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function zc(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function ut(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Pt(e,t,n){var a=e.updateQueue;if(a===null)return null;if(a=a.shared,$&2){var i=a.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),a.pending=t,ht(e,n)}return i=a.interleaved,i===null?(t.next=t,so(a)):(t.next=i.next,i.next=t),a.interleaved=t,ht(e,n)}function la(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var a=t.lanes;a&=e.pendingLanes,n|=a,t.lanes=n,Ws(e,n)}}function bl(e,t){var n=e.updateQueue,a=e.alternate;if(a!==null&&(a=a.updateQueue,n===a)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=t:s=s.next=t}else i=s=t;n={baseState:a.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:a.shared,effects:a.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Pa(e,t,n,a){var i=e.updateQueue;bt=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var d=l,c=d.next;d.next=null,o===null?s=c:o.next=c,o=d;var h=e.alternate;h!==null&&(h=h.updateQueue,l=h.lastBaseUpdate,l!==o&&(l===null?h.firstBaseUpdate=c:l.next=c,h.lastBaseUpdate=d))}if(s!==null){var m=i.baseState;o=0,h=c=d=null,l=s;do{var x=l.lane,w=l.eventTime;if((a&x)===x){h!==null&&(h=h.next={eventTime:w,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var N=e,y=l;switch(x=t,w=n,y.tag){case 1:if(N=y.payload,typeof N=="function"){m=N.call(w,m,x);break e}m=N;break e;case 3:N.flags=N.flags&-65537|128;case 0:if(N=y.payload,x=typeof N=="function"?N.call(w,m,x):N,x==null)break e;m=Z({},m,x);break e;case 2:bt=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,x=i.effects,x===null?i.effects=[l]:x.push(l))}else w={eventTime:w,lane:x,tag:l.tag,payload:l.payload,callback:l.callback,next:null},h===null?(c=h=w,d=m):h=h.next=w,o|=x;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;x=l,l=x.next,x.next=null,i.lastBaseUpdate=x,i.shared.pending=null}}while(!0);if(h===null&&(d=m),i.baseState=d,i.firstBaseUpdate=c,i.lastBaseUpdate=h,t=i.shared.interleaved,t!==null){i=t;do o|=i.lane,i=i.next;while(i!==t)}else s===null&&(i.shared.lanes=0);en|=o,e.lanes=o,e.memoizedState=m}}function jl(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var a=e[t],i=a.callback;if(i!==null){if(a.callback=null,a=n,typeof i!="function")throw Error(z(191,i));i.call(a)}}}var Dr={},at=Ft(Dr),Sr=Ft(Dr),zr=Ft(Dr);function Yt(e){if(e===Dr)throw Error(z(174));return e}function lo(e,t){switch(G(zr,t),G(Sr,e),G(at,Dr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Wi(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Wi(t,e)}Y(at),G(at,t)}function An(){Y(at),Y(Sr),Y(zr)}function Cc(e){Yt(zr.current);var t=Yt(at.current),n=Wi(t,e.type);t!==n&&(G(Sr,e),G(at,n))}function co(e){Sr.current===e&&(Y(at),Y(Sr))}var X=Ft(0);function Ra(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var wi=[];function uo(){for(var e=0;e<wi.length;e++)wi[e]._workInProgressVersionPrimary=null;wi.length=0}var da=gt.ReactCurrentDispatcher,ki=gt.ReactCurrentBatchConfig,Zt=0,J=null,oe=null,de=null,Ia=!1,cr=!1,Cr=0,Af=0;function he(){throw Error(z(321))}function po(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Xe(e[n],t[n]))return!1;return!0}function fo(e,t,n,a,i,s){if(Zt=s,J=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,da.current=e===null||e.memoizedState===null?Ff:Bf,e=n(a,i),cr){s=0;do{if(cr=!1,Cr=0,25<=s)throw Error(z(301));s+=1,de=oe=null,t.updateQueue=null,da.current=Of,e=n(a,i)}while(cr)}if(da.current=Ta,t=oe!==null&&oe.next!==null,Zt=0,de=oe=J=null,Ia=!1,t)throw Error(z(300));return e}function ho(){var e=Cr!==0;return Cr=0,e}function tt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return de===null?J.memoizedState=de=e:de=de.next=e,de}function $e(){if(oe===null){var e=J.alternate;e=e!==null?e.memoizedState:null}else e=oe.next;var t=de===null?J.memoizedState:de.next;if(t!==null)de=t,oe=e;else{if(e===null)throw Error(z(310));oe=e,e={memoizedState:oe.memoizedState,baseState:oe.baseState,baseQueue:oe.baseQueue,queue:oe.queue,next:null},de===null?J.memoizedState=de=e:de=de.next=e}return de}function Mr(e,t){return typeof t=="function"?t(e):t}function Ni(e){var t=$e(),n=t.queue;if(n===null)throw Error(z(311));n.lastRenderedReducer=e;var a=oe,i=a.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}a.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,a=a.baseState;var l=o=null,d=null,c=s;do{var h=c.lane;if((Zt&h)===h)d!==null&&(d=d.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),a=c.hasEagerState?c.eagerState:e(a,c.action);else{var m={lane:h,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};d===null?(l=d=m,o=a):d=d.next=m,J.lanes|=h,en|=h}c=c.next}while(c!==null&&c!==s);d===null?o=a:d.next=l,Xe(a,t.memoizedState)||(Se=!0),t.memoizedState=a,t.baseState=o,t.baseQueue=d,n.lastRenderedState=a}if(e=n.interleaved,e!==null){i=e;do s=i.lane,J.lanes|=s,en|=s,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Si(e){var t=$e(),n=t.queue;if(n===null)throw Error(z(311));n.lastRenderedReducer=e;var a=n.dispatch,i=n.pending,s=t.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=e(s,o.action),o=o.next;while(o!==i);Xe(s,t.memoizedState)||(Se=!0),t.memoizedState=s,t.baseQueue===null&&(t.baseState=s),n.lastRenderedState=s}return[s,a]}function Mc(){}function Ec(e,t){var n=J,a=$e(),i=t(),s=!Xe(a.memoizedState,i);if(s&&(a.memoizedState=i,Se=!0),a=a.queue,mo(Ic.bind(null,n,a,e),[e]),a.getSnapshot!==t||s||de!==null&&de.memoizedState.tag&1){if(n.flags|=2048,Er(9,Rc.bind(null,n,a,i,t),void 0,null),ce===null)throw Error(z(349));Zt&30||Pc(n,t,i)}return i}function Pc(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=J.updateQueue,t===null?(t={lastEffect:null,stores:null},J.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Rc(e,t,n,a){t.value=n,t.getSnapshot=a,Tc(t)&&Ac(e)}function Ic(e,t,n){return n(function(){Tc(t)&&Ac(e)})}function Tc(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Xe(e,n)}catch{return!0}}function Ac(e){var t=ht(e,1);t!==null&&Ke(t,e,1,-1)}function wl(e){var t=tt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Mr,lastRenderedState:e},t.queue=e,e=e.dispatch=Df.bind(null,J,e),[t.memoizedState,e]}function Er(e,t,n,a){return e={tag:e,create:t,destroy:n,deps:a,next:null},t=J.updateQueue,t===null?(t={lastEffect:null,stores:null},J.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(a=n.next,n.next=e,e.next=a,t.lastEffect=e)),e}function Lc(){return $e().memoizedState}function ca(e,t,n,a){var i=tt();J.flags|=e,i.memoizedState=Er(1|t,n,void 0,a===void 0?null:a)}function Qa(e,t,n,a){var i=$e();a=a===void 0?null:a;var s=void 0;if(oe!==null){var o=oe.memoizedState;if(s=o.destroy,a!==null&&po(a,o.deps)){i.memoizedState=Er(t,n,s,a);return}}J.flags|=e,i.memoizedState=Er(1|t,n,s,a)}function kl(e,t){return ca(8390656,8,e,t)}function mo(e,t){return Qa(2048,8,e,t)}function _c(e,t){return Qa(4,2,e,t)}function Dc(e,t){return Qa(4,4,e,t)}function Fc(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Bc(e,t,n){return n=n!=null?n.concat([e]):null,Qa(4,4,Fc.bind(null,t,e),n)}function go(){}function Oc(e,t){var n=$e();t=t===void 0?null:t;var a=n.memoizedState;return a!==null&&t!==null&&po(t,a[1])?a[0]:(n.memoizedState=[e,t],e)}function $c(e,t){var n=$e();t=t===void 0?null:t;var a=n.memoizedState;return a!==null&&t!==null&&po(t,a[1])?a[0]:(e=e(),n.memoizedState=[e,t],e)}function Uc(e,t,n){return Zt&21?(Xe(n,t)||(n=Qd(),J.lanes|=n,en|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Se=!0),e.memoizedState=n)}function Lf(e,t){var n=H;H=n!==0&&4>n?n:4,e(!0);var a=ki.transition;ki.transition={};try{e(!1),t()}finally{H=n,ki.transition=a}}function Hc(){return $e().memoizedState}function _f(e,t,n){var a=It(e);if(n={lane:a,action:n,hasEagerState:!1,eagerState:null,next:null},Gc(e))Vc(t,n);else if(n=Sc(e,t,n,a),n!==null){var i=je();Ke(n,e,a,i),Wc(n,t,a)}}function Df(e,t,n){var a=It(e),i={lane:a,action:n,hasEagerState:!1,eagerState:null,next:null};if(Gc(e))Vc(t,i);else{var s=e.alternate;if(e.lanes===0&&(s===null||s.lanes===0)&&(s=t.lastRenderedReducer,s!==null))try{var o=t.lastRenderedState,l=s(o,n);if(i.hasEagerState=!0,i.eagerState=l,Xe(l,o)){var d=t.interleaved;d===null?(i.next=i,so(t)):(i.next=d.next,d.next=i),t.interleaved=i;return}}catch{}finally{}n=Sc(e,t,i,a),n!==null&&(i=je(),Ke(n,e,a,i),Wc(n,t,a))}}function Gc(e){var t=e.alternate;return e===J||t!==null&&t===J}function Vc(e,t){cr=Ia=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Wc(e,t,n){if(n&4194240){var a=t.lanes;a&=e.pendingLanes,n|=a,t.lanes=n,Ws(e,n)}}var Ta={readContext:Oe,useCallback:he,useContext:he,useEffect:he,useImperativeHandle:he,useInsertionEffect:he,useLayoutEffect:he,useMemo:he,useReducer:he,useRef:he,useState:he,useDebugValue:he,useDeferredValue:he,useTransition:he,useMutableSource:he,useSyncExternalStore:he,useId:he,unstable_isNewReconciler:!1},Ff={readContext:Oe,useCallback:function(e,t){return tt().memoizedState=[e,t===void 0?null:t],e},useContext:Oe,useEffect:kl,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,ca(4194308,4,Fc.bind(null,t,e),n)},useLayoutEffect:function(e,t){return ca(4194308,4,e,t)},useInsertionEffect:function(e,t){return ca(4,2,e,t)},useMemo:function(e,t){var n=tt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var a=tt();return t=n!==void 0?n(t):t,a.memoizedState=a.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},a.queue=e,e=e.dispatch=_f.bind(null,J,e),[a.memoizedState,e]},useRef:function(e){var t=tt();return e={current:e},t.memoizedState=e},useState:wl,useDebugValue:go,useDeferredValue:function(e){return tt().memoizedState=e},useTransition:function(){var e=wl(!1),t=e[0];return e=Lf.bind(null,e[1]),tt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var a=J,i=tt();if(q){if(n===void 0)throw Error(z(407));n=n()}else{if(n=t(),ce===null)throw Error(z(349));Zt&30||Pc(a,t,n)}i.memoizedState=n;var s={value:n,getSnapshot:t};return i.queue=s,kl(Ic.bind(null,a,s,e),[e]),a.flags|=2048,Er(9,Rc.bind(null,a,s,n,t),void 0,null),n},useId:function(){var e=tt(),t=ce.identifierPrefix;if(q){var n=ct,a=dt;n=(a&~(1<<32-qe(a)-1)).toString(32)+n,t=":"+t+"R"+n,n=Cr++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Af++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Bf={readContext:Oe,useCallback:Oc,useContext:Oe,useEffect:mo,useImperativeHandle:Bc,useInsertionEffect:_c,useLayoutEffect:Dc,useMemo:$c,useReducer:Ni,useRef:Lc,useState:function(){return Ni(Mr)},useDebugValue:go,useDeferredValue:function(e){var t=$e();return Uc(t,oe.memoizedState,e)},useTransition:function(){var e=Ni(Mr)[0],t=$e().memoizedState;return[e,t]},useMutableSource:Mc,useSyncExternalStore:Ec,useId:Hc,unstable_isNewReconciler:!1},Of={readContext:Oe,useCallback:Oc,useContext:Oe,useEffect:mo,useImperativeHandle:Bc,useInsertionEffect:_c,useLayoutEffect:Dc,useMemo:$c,useReducer:Si,useRef:Lc,useState:function(){return Si(Mr)},useDebugValue:go,useDeferredValue:function(e){var t=$e();return oe===null?t.memoizedState=e:Uc(t,oe.memoizedState,e)},useTransition:function(){var e=Si(Mr)[0],t=$e().memoizedState;return[e,t]},useMutableSource:Mc,useSyncExternalStore:Ec,useId:Hc,unstable_isNewReconciler:!1};function We(e,t){if(e&&e.defaultProps){t=Z({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function fs(e,t,n,a){t=e.memoizedState,n=n(a,t),n=n==null?t:Z({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Ya={isMounted:function(e){return(e=e._reactInternals)?rn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var a=je(),i=It(e),s=ut(a,i);s.payload=t,n!=null&&(s.callback=n),t=Pt(e,s,i),t!==null&&(Ke(t,e,i,a),la(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var a=je(),i=It(e),s=ut(a,i);s.tag=1,s.payload=t,n!=null&&(s.callback=n),t=Pt(e,s,i),t!==null&&(Ke(t,e,i,a),la(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=je(),a=It(e),i=ut(n,a);i.tag=2,t!=null&&(i.callback=t),t=Pt(e,i,a),t!==null&&(Ke(t,e,a,n),la(t,e,a))}};function Nl(e,t,n,a,i,s,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(a,s,o):t.prototype&&t.prototype.isPureReactComponent?!jr(n,a)||!jr(i,s):!0}function Qc(e,t,n){var a=!1,i=_t,s=t.contextType;return typeof s=="object"&&s!==null?s=Oe(s):(i=Ce(t)?Xt:ve.current,a=t.contextTypes,s=(a=a!=null)?Rn(e,i):_t),t=new t(n,s),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Ya,e.stateNode=t,t._reactInternals=e,a&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=s),t}function Sl(e,t,n,a){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,a),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,a),t.state!==e&&Ya.enqueueReplaceState(t,t.state,null)}function hs(e,t,n,a){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},oo(e);var s=t.contextType;typeof s=="object"&&s!==null?i.context=Oe(s):(s=Ce(t)?Xt:ve.current,i.context=Rn(e,s)),i.state=e.memoizedState,s=t.getDerivedStateFromProps,typeof s=="function"&&(fs(e,t,s,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&Ya.enqueueReplaceState(i,i.state,null),Pa(e,n,i,a),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function Ln(e,t){try{var n="",a=t;do n+=fp(a),a=a.return;while(a);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:e,source:t,stack:i,digest:null}}function zi(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function ms(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var $f=typeof WeakMap=="function"?WeakMap:Map;function Yc(e,t,n){n=ut(-1,n),n.tag=3,n.payload={element:null};var a=t.value;return n.callback=function(){La||(La=!0,Ss=a),ms(e,t)},n}function qc(e,t,n){n=ut(-1,n),n.tag=3;var a=e.type.getDerivedStateFromError;if(typeof a=="function"){var i=t.value;n.payload=function(){return a(i)},n.callback=function(){ms(e,t)}}var s=e.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){ms(e,t),typeof a!="function"&&(Rt===null?Rt=new Set([this]):Rt.add(this));var o=t.stack;this.componentDidCatch(t.value,{componentStack:o!==null?o:""})}),n}function zl(e,t,n){var a=e.pingCache;if(a===null){a=e.pingCache=new $f;var i=new Set;a.set(t,i)}else i=a.get(t),i===void 0&&(i=new Set,a.set(t,i));i.has(n)||(i.add(n),e=th.bind(null,e,t,n),t.then(e,e))}function Cl(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Ml(e,t,n,a,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=ut(-1,1),t.tag=2,Pt(n,t,1))),n.lanes|=1),e)}var Uf=gt.ReactCurrentOwner,Se=!1;function ye(e,t,n,a){t.child=e===null?Nc(t,null,n,a):Tn(t,e.child,n,a)}function El(e,t,n,a,i){n=n.render;var s=t.ref;return Mn(t,i),a=fo(e,t,n,a,s,i),n=ho(),e!==null&&!Se?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,mt(e,t,i)):(q&&n&&eo(t),t.flags|=1,ye(e,t,a,i),t.child)}function Pl(e,t,n,a,i){if(e===null){var s=n.type;return typeof s=="function"&&!No(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=s,Kc(e,t,s,a,i)):(e=ha(n.type,null,a,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(s=e.child,!(e.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:jr,n(o,a)&&e.ref===t.ref)return mt(e,t,i)}return t.flags|=1,e=Tt(s,a),e.ref=t.ref,e.return=t,t.child=e}function Kc(e,t,n,a,i){if(e!==null){var s=e.memoizedProps;if(jr(s,a)&&e.ref===t.ref)if(Se=!1,t.pendingProps=a=s,(e.lanes&i)!==0)e.flags&131072&&(Se=!0);else return t.lanes=e.lanes,mt(e,t,i)}return gs(e,t,n,a,i)}function Xc(e,t,n){var a=t.pendingProps,i=a.children,s=e!==null?e.memoizedState:null;if(a.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},G(kn,Ee),Ee|=n;else{if(!(n&1073741824))return e=s!==null?s.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,G(kn,Ee),Ee|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},a=s!==null?s.baseLanes:n,G(kn,Ee),Ee|=a}else s!==null?(a=s.baseLanes|n,t.memoizedState=null):a=n,G(kn,Ee),Ee|=a;return ye(e,t,i,n),t.child}function Jc(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function gs(e,t,n,a,i){var s=Ce(n)?Xt:ve.current;return s=Rn(t,s),Mn(t,i),n=fo(e,t,n,a,s,i),a=ho(),e!==null&&!Se?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,mt(e,t,i)):(q&&a&&eo(t),t.flags|=1,ye(e,t,n,i),t.child)}function Rl(e,t,n,a,i){if(Ce(n)){var s=!0;Sa(t)}else s=!1;if(Mn(t,i),t.stateNode===null)ua(e,t),Qc(t,n,a),hs(t,n,a,i),a=!0;else if(e===null){var o=t.stateNode,l=t.memoizedProps;o.props=l;var d=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=Oe(c):(c=Ce(n)?Xt:ve.current,c=Rn(t,c));var h=n.getDerivedStateFromProps,m=typeof h=="function"||typeof o.getSnapshotBeforeUpdate=="function";m||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==a||d!==c)&&Sl(t,o,a,c),bt=!1;var x=t.memoizedState;o.state=x,Pa(t,a,o,i),d=t.memoizedState,l!==a||x!==d||ze.current||bt?(typeof h=="function"&&(fs(t,n,h,a),d=t.memoizedState),(l=bt||Nl(t,n,l,a,x,d,c))?(m||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=a,t.memoizedState=d),o.props=a,o.state=d,o.context=c,a=l):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),a=!1)}else{o=t.stateNode,zc(e,t),l=t.memoizedProps,c=t.type===t.elementType?l:We(t.type,l),o.props=c,m=t.pendingProps,x=o.context,d=n.contextType,typeof d=="object"&&d!==null?d=Oe(d):(d=Ce(n)?Xt:ve.current,d=Rn(t,d));var w=n.getDerivedStateFromProps;(h=typeof w=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==m||x!==d)&&Sl(t,o,a,d),bt=!1,x=t.memoizedState,o.state=x,Pa(t,a,o,i);var N=t.memoizedState;l!==m||x!==N||ze.current||bt?(typeof w=="function"&&(fs(t,n,w,a),N=t.memoizedState),(c=bt||Nl(t,n,c,a,x,N,d)||!1)?(h||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(a,N,d),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(a,N,d)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===e.memoizedProps&&x===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&x===e.memoizedState||(t.flags|=1024),t.memoizedProps=a,t.memoizedState=N),o.props=a,o.state=N,o.context=d,a=c):(typeof o.componentDidUpdate!="function"||l===e.memoizedProps&&x===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&x===e.memoizedState||(t.flags|=1024),a=!1)}return xs(e,t,n,a,s,i)}function xs(e,t,n,a,i,s){Jc(e,t);var o=(t.flags&128)!==0;if(!a&&!o)return i&&gl(t,n,!1),mt(e,t,s);a=t.stateNode,Uf.current=t;var l=o&&typeof n.getDerivedStateFromError!="function"?null:a.render();return t.flags|=1,e!==null&&o?(t.child=Tn(t,e.child,null,s),t.child=Tn(t,null,l,s)):ye(e,t,l,s),t.memoizedState=a.state,i&&gl(t,n,!0),t.child}function Zc(e){var t=e.stateNode;t.pendingContext?ml(e,t.pendingContext,t.pendingContext!==t.context):t.context&&ml(e,t.context,!1),lo(e,t.containerInfo)}function Il(e,t,n,a,i){return In(),no(i),t.flags|=256,ye(e,t,n,a),t.child}var vs={dehydrated:null,treeContext:null,retryLane:0};function ys(e){return{baseLanes:e,cachePool:null,transitions:null}}function eu(e,t,n){var a=t.pendingProps,i=X.current,s=!1,o=(t.flags&128)!==0,l;if((l=o)||(l=e!==null&&e.memoizedState===null?!1:(i&2)!==0),l?(s=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),G(X,i&1),e===null)return us(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(o=a.children,e=a.fallback,s?(a=t.mode,s=t.child,o={mode:"hidden",children:o},!(a&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Xa(o,a,0,null),e=Kt(e,a,n,null),s.return=t,e.return=t,s.sibling=e,t.child=s,t.child.memoizedState=ys(n),t.memoizedState=vs,e):xo(t,o));if(i=e.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return Hf(e,t,o,a,l,i,n);if(s){s=a.fallback,o=t.mode,i=e.child,l=i.sibling;var d={mode:"hidden",children:a.children};return!(o&1)&&t.child!==i?(a=t.child,a.childLanes=0,a.pendingProps=d,t.deletions=null):(a=Tt(i,d),a.subtreeFlags=i.subtreeFlags&14680064),l!==null?s=Tt(l,s):(s=Kt(s,o,n,null),s.flags|=2),s.return=t,a.return=t,a.sibling=s,t.child=a,a=s,s=t.child,o=e.child.memoizedState,o=o===null?ys(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=e.childLanes&~n,t.memoizedState=vs,a}return s=e.child,e=s.sibling,a=Tt(s,{mode:"visible",children:a.children}),!(t.mode&1)&&(a.lanes=n),a.return=t,a.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=a,t.memoizedState=null,a}function xo(e,t){return t=Xa({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Xr(e,t,n,a){return a!==null&&no(a),Tn(t,e.child,null,n),e=xo(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Hf(e,t,n,a,i,s,o){if(n)return t.flags&256?(t.flags&=-257,a=zi(Error(z(422))),Xr(e,t,o,a)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(s=a.fallback,i=t.mode,a=Xa({mode:"visible",children:a.children},i,0,null),s=Kt(s,i,o,null),s.flags|=2,a.return=t,s.return=t,a.sibling=s,t.child=a,t.mode&1&&Tn(t,e.child,null,o),t.child.memoizedState=ys(o),t.memoizedState=vs,s);if(!(t.mode&1))return Xr(e,t,o,null);if(i.data==="$!"){if(a=i.nextSibling&&i.nextSibling.dataset,a)var l=a.dgst;return a=l,s=Error(z(419)),a=zi(s,a,void 0),Xr(e,t,o,a)}if(l=(o&e.childLanes)!==0,Se||l){if(a=ce,a!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(a.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,ht(e,i),Ke(a,e,i,-1))}return ko(),a=zi(Error(z(421))),Xr(e,t,o,a)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=nh.bind(null,e),i._reactRetry=t,null):(e=s.treeContext,Pe=Et(i.nextSibling),Re=t,q=!0,Ye=null,e!==null&&(_e[De++]=dt,_e[De++]=ct,_e[De++]=Jt,dt=e.id,ct=e.overflow,Jt=t),t=xo(t,a.children),t.flags|=4096,t)}function Tl(e,t,n){e.lanes|=t;var a=e.alternate;a!==null&&(a.lanes|=t),ps(e.return,t,n)}function Ci(e,t,n,a,i){var s=e.memoizedState;s===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:a,tail:n,tailMode:i}:(s.isBackwards=t,s.rendering=null,s.renderingStartTime=0,s.last=a,s.tail=n,s.tailMode=i)}function tu(e,t,n){var a=t.pendingProps,i=a.revealOrder,s=a.tail;if(ye(e,t,a.children,n),a=X.current,a&2)a=a&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Tl(e,n,t);else if(e.tag===19)Tl(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}a&=1}if(G(X,a),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&Ra(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Ci(t,!1,i,n,s);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Ra(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Ci(t,!0,n,null,s);break;case"together":Ci(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function ua(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function mt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),en|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(z(153));if(t.child!==null){for(e=t.child,n=Tt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Tt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Gf(e,t,n){switch(t.tag){case 3:Zc(t),In();break;case 5:Cc(t);break;case 1:Ce(t.type)&&Sa(t);break;case 4:lo(t,t.stateNode.containerInfo);break;case 10:var a=t.type._context,i=t.memoizedProps.value;G(Ma,a._currentValue),a._currentValue=i;break;case 13:if(a=t.memoizedState,a!==null)return a.dehydrated!==null?(G(X,X.current&1),t.flags|=128,null):n&t.child.childLanes?eu(e,t,n):(G(X,X.current&1),e=mt(e,t,n),e!==null?e.sibling:null);G(X,X.current&1);break;case 19:if(a=(n&t.childLanes)!==0,e.flags&128){if(a)return tu(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),G(X,X.current),a)break;return null;case 22:case 23:return t.lanes=0,Xc(e,t,n)}return mt(e,t,n)}var nu,bs,ru,au;nu=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};bs=function(){};ru=function(e,t,n,a){var i=e.memoizedProps;if(i!==a){e=t.stateNode,Yt(at.current);var s=null;switch(n){case"input":i=Ui(e,i),a=Ui(e,a),s=[];break;case"select":i=Z({},i,{value:void 0}),a=Z({},a,{value:void 0}),s=[];break;case"textarea":i=Vi(e,i),a=Vi(e,a),s=[];break;default:typeof i.onClick!="function"&&typeof a.onClick=="function"&&(e.onclick=ka)}Qi(n,a);var o;n=null;for(c in i)if(!a.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var l=i[c];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(hr.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in a){var d=a[c];if(l=i!=null?i[c]:void 0,a.hasOwnProperty(c)&&d!==l&&(d!=null||l!=null))if(c==="style")if(l){for(o in l)!l.hasOwnProperty(o)||d&&d.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in d)d.hasOwnProperty(o)&&l[o]!==d[o]&&(n||(n={}),n[o]=d[o])}else n||(s||(s=[]),s.push(c,n)),n=d;else c==="dangerouslySetInnerHTML"?(d=d?d.__html:void 0,l=l?l.__html:void 0,d!=null&&l!==d&&(s=s||[]).push(c,d)):c==="children"?typeof d!="string"&&typeof d!="number"||(s=s||[]).push(c,""+d):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(hr.hasOwnProperty(c)?(d!=null&&c==="onScroll"&&Q("scroll",e),s||l===d||(s=[])):(s=s||[]).push(c,d))}n&&(s=s||[]).push("style",n);var c=s;(t.updateQueue=c)&&(t.flags|=4)}};au=function(e,t,n,a){n!==a&&(t.flags|=4)};function Kn(e,t){if(!q)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:a.sibling=null}}function me(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,a=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,a|=i.subtreeFlags&14680064,a|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,a|=i.subtreeFlags,a|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=a,e.childLanes=n,t}function Vf(e,t,n){var a=t.pendingProps;switch(to(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return me(t),null;case 1:return Ce(t.type)&&Na(),me(t),null;case 3:return a=t.stateNode,An(),Y(ze),Y(ve),uo(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(qr(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Ye!==null&&(Ms(Ye),Ye=null))),bs(e,t),me(t),null;case 5:co(t);var i=Yt(zr.current);if(n=t.type,e!==null&&t.stateNode!=null)ru(e,t,n,a,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!a){if(t.stateNode===null)throw Error(z(166));return me(t),null}if(e=Yt(at.current),qr(t)){a=t.stateNode,n=t.type;var s=t.memoizedProps;switch(a[nt]=t,a[Nr]=s,e=(t.mode&1)!==0,n){case"dialog":Q("cancel",a),Q("close",a);break;case"iframe":case"object":case"embed":Q("load",a);break;case"video":case"audio":for(i=0;i<ar.length;i++)Q(ar[i],a);break;case"source":Q("error",a);break;case"img":case"image":case"link":Q("error",a),Q("load",a);break;case"details":Q("toggle",a);break;case"input":Uo(a,s),Q("invalid",a);break;case"select":a._wrapperState={wasMultiple:!!s.multiple},Q("invalid",a);break;case"textarea":Go(a,s),Q("invalid",a)}Qi(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var l=s[o];o==="children"?typeof l=="string"?a.textContent!==l&&(s.suppressHydrationWarning!==!0&&Yr(a.textContent,l,e),i=["children",l]):typeof l=="number"&&a.textContent!==""+l&&(s.suppressHydrationWarning!==!0&&Yr(a.textContent,l,e),i=["children",""+l]):hr.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&Q("scroll",a)}switch(n){case"input":Or(a),Ho(a,s,!0);break;case"textarea":Or(a),Vo(a);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(a.onclick=ka)}a=i,t.updateQueue=a,a!==null&&(t.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Id(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof a.is=="string"?e=o.createElement(n,{is:a.is}):(e=o.createElement(n),n==="select"&&(o=e,a.multiple?o.multiple=!0:a.size&&(o.size=a.size))):e=o.createElementNS(e,n),e[nt]=t,e[Nr]=a,nu(e,t,!1,!1),t.stateNode=e;e:{switch(o=Yi(n,a),n){case"dialog":Q("cancel",e),Q("close",e),i=a;break;case"iframe":case"object":case"embed":Q("load",e),i=a;break;case"video":case"audio":for(i=0;i<ar.length;i++)Q(ar[i],e);i=a;break;case"source":Q("error",e),i=a;break;case"img":case"image":case"link":Q("error",e),Q("load",e),i=a;break;case"details":Q("toggle",e),i=a;break;case"input":Uo(e,a),i=Ui(e,a),Q("invalid",e);break;case"option":i=a;break;case"select":e._wrapperState={wasMultiple:!!a.multiple},i=Z({},a,{value:void 0}),Q("invalid",e);break;case"textarea":Go(e,a),i=Vi(e,a),Q("invalid",e);break;default:i=a}Qi(n,i),l=i;for(s in l)if(l.hasOwnProperty(s)){var d=l[s];s==="style"?Ld(e,d):s==="dangerouslySetInnerHTML"?(d=d?d.__html:void 0,d!=null&&Td(e,d)):s==="children"?typeof d=="string"?(n!=="textarea"||d!=="")&&mr(e,d):typeof d=="number"&&mr(e,""+d):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(hr.hasOwnProperty(s)?d!=null&&s==="onScroll"&&Q("scroll",e):d!=null&&Os(e,s,d,o))}switch(n){case"input":Or(e),Ho(e,a,!1);break;case"textarea":Or(e),Vo(e);break;case"option":a.value!=null&&e.setAttribute("value",""+Lt(a.value));break;case"select":e.multiple=!!a.multiple,s=a.value,s!=null?Nn(e,!!a.multiple,s,!1):a.defaultValue!=null&&Nn(e,!!a.multiple,a.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=ka)}switch(n){case"button":case"input":case"select":case"textarea":a=!!a.autoFocus;break e;case"img":a=!0;break e;default:a=!1}}a&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return me(t),null;case 6:if(e&&t.stateNode!=null)au(e,t,e.memoizedProps,a);else{if(typeof a!="string"&&t.stateNode===null)throw Error(z(166));if(n=Yt(zr.current),Yt(at.current),qr(t)){if(a=t.stateNode,n=t.memoizedProps,a[nt]=t,(s=a.nodeValue!==n)&&(e=Re,e!==null))switch(e.tag){case 3:Yr(a.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Yr(a.nodeValue,n,(e.mode&1)!==0)}s&&(t.flags|=4)}else a=(n.nodeType===9?n:n.ownerDocument).createTextNode(a),a[nt]=t,t.stateNode=a}return me(t),null;case 13:if(Y(X),a=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(q&&Pe!==null&&t.mode&1&&!(t.flags&128))wc(),In(),t.flags|=98560,s=!1;else if(s=qr(t),a!==null&&a.dehydrated!==null){if(e===null){if(!s)throw Error(z(318));if(s=t.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(z(317));s[nt]=t}else In(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;me(t),s=!1}else Ye!==null&&(Ms(Ye),Ye=null),s=!0;if(!s)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(a=a!==null,a!==(e!==null&&e.memoizedState!==null)&&a&&(t.child.flags|=8192,t.mode&1&&(e===null||X.current&1?le===0&&(le=3):ko())),t.updateQueue!==null&&(t.flags|=4),me(t),null);case 4:return An(),bs(e,t),e===null&&wr(t.stateNode.containerInfo),me(t),null;case 10:return io(t.type._context),me(t),null;case 17:return Ce(t.type)&&Na(),me(t),null;case 19:if(Y(X),s=t.memoizedState,s===null)return me(t),null;if(a=(t.flags&128)!==0,o=s.rendering,o===null)if(a)Kn(s,!1);else{if(le!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=Ra(e),o!==null){for(t.flags|=128,Kn(s,!1),a=o.updateQueue,a!==null&&(t.updateQueue=a,t.flags|=4),t.subtreeFlags=0,a=n,n=t.child;n!==null;)s=n,e=a,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=e,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,e=o.dependencies,s.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return G(X,X.current&1|2),t.child}e=e.sibling}s.tail!==null&&ne()>_n&&(t.flags|=128,a=!0,Kn(s,!1),t.lanes=4194304)}else{if(!a)if(e=Ra(o),e!==null){if(t.flags|=128,a=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Kn(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!q)return me(t),null}else 2*ne()-s.renderingStartTime>_n&&n!==1073741824&&(t.flags|=128,a=!0,Kn(s,!1),t.lanes=4194304);s.isBackwards?(o.sibling=t.child,t.child=o):(n=s.last,n!==null?n.sibling=o:t.child=o,s.last=o)}return s.tail!==null?(t=s.tail,s.rendering=t,s.tail=t.sibling,s.renderingStartTime=ne(),t.sibling=null,n=X.current,G(X,a?n&1|2:n&1),t):(me(t),null);case 22:case 23:return wo(),a=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==a&&(t.flags|=8192),a&&t.mode&1?Ee&1073741824&&(me(t),t.subtreeFlags&6&&(t.flags|=8192)):me(t),null;case 24:return null;case 25:return null}throw Error(z(156,t.tag))}function Wf(e,t){switch(to(t),t.tag){case 1:return Ce(t.type)&&Na(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return An(),Y(ze),Y(ve),uo(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return co(t),null;case 13:if(Y(X),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(z(340));In()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Y(X),null;case 4:return An(),null;case 10:return io(t.type._context),null;case 22:case 23:return wo(),null;case 24:return null;default:return null}}var Jr=!1,xe=!1,Qf=typeof WeakSet=="function"?WeakSet:Set,P=null;function wn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(a){te(e,t,a)}else n.current=null}function js(e,t,n){try{n()}catch(a){te(e,t,a)}}var Al=!1;function Yf(e,t){if(as=ba,e=dc(),Zs(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var a=n.getSelection&&n.getSelection();if(a&&a.rangeCount!==0){n=a.anchorNode;var i=a.anchorOffset,s=a.focusNode;a=a.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,l=-1,d=-1,c=0,h=0,m=e,x=null;t:for(;;){for(var w;m!==n||i!==0&&m.nodeType!==3||(l=o+i),m!==s||a!==0&&m.nodeType!==3||(d=o+a),m.nodeType===3&&(o+=m.nodeValue.length),(w=m.firstChild)!==null;)x=m,m=w;for(;;){if(m===e)break t;if(x===n&&++c===i&&(l=o),x===s&&++h===a&&(d=o),(w=m.nextSibling)!==null)break;m=x,x=m.parentNode}m=w}n=l===-1||d===-1?null:{start:l,end:d}}else n=null}n=n||{start:0,end:0}}else n=null;for(is={focusedElem:e,selectionRange:n},ba=!1,P=t;P!==null;)if(t=P,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,P=e;else for(;P!==null;){t=P;try{var N=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(N!==null){var y=N.memoizedProps,j=N.memoizedState,f=t.stateNode,u=f.getSnapshotBeforeUpdate(t.elementType===t.type?y:We(t.type,y),j);f.__reactInternalSnapshotBeforeUpdate=u}break;case 3:var p=t.stateNode.containerInfo;p.nodeType===1?p.textContent="":p.nodeType===9&&p.documentElement&&p.removeChild(p.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(z(163))}}catch(v){te(t,t.return,v)}if(e=t.sibling,e!==null){e.return=t.return,P=e;break}P=t.return}return N=Al,Al=!1,N}function ur(e,t,n){var a=t.updateQueue;if(a=a!==null?a.lastEffect:null,a!==null){var i=a=a.next;do{if((i.tag&e)===e){var s=i.destroy;i.destroy=void 0,s!==void 0&&js(t,n,s)}i=i.next}while(i!==a)}}function qa(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var a=n.create;n.destroy=a()}n=n.next}while(n!==t)}}function ws(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function iu(e){var t=e.alternate;t!==null&&(e.alternate=null,iu(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[nt],delete t[Nr],delete t[ls],delete t[Pf],delete t[Rf])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function su(e){return e.tag===5||e.tag===3||e.tag===4}function Ll(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||su(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function ks(e,t,n){var a=e.tag;if(a===5||a===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=ka));else if(a!==4&&(e=e.child,e!==null))for(ks(e,t,n),e=e.sibling;e!==null;)ks(e,t,n),e=e.sibling}function Ns(e,t,n){var a=e.tag;if(a===5||a===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(a!==4&&(e=e.child,e!==null))for(Ns(e,t,n),e=e.sibling;e!==null;)Ns(e,t,n),e=e.sibling}var ue=null,Qe=!1;function vt(e,t,n){for(n=n.child;n!==null;)ou(e,t,n),n=n.sibling}function ou(e,t,n){if(rt&&typeof rt.onCommitFiberUnmount=="function")try{rt.onCommitFiberUnmount($a,n)}catch{}switch(n.tag){case 5:xe||wn(n,t);case 6:var a=ue,i=Qe;ue=null,vt(e,t,n),ue=a,Qe=i,ue!==null&&(Qe?(e=ue,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):ue.removeChild(n.stateNode));break;case 18:ue!==null&&(Qe?(e=ue,n=n.stateNode,e.nodeType===8?bi(e.parentNode,n):e.nodeType===1&&bi(e,n),yr(e)):bi(ue,n.stateNode));break;case 4:a=ue,i=Qe,ue=n.stateNode.containerInfo,Qe=!0,vt(e,t,n),ue=a,Qe=i;break;case 0:case 11:case 14:case 15:if(!xe&&(a=n.updateQueue,a!==null&&(a=a.lastEffect,a!==null))){i=a=a.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&js(n,t,o),i=i.next}while(i!==a)}vt(e,t,n);break;case 1:if(!xe&&(wn(n,t),a=n.stateNode,typeof a.componentWillUnmount=="function"))try{a.props=n.memoizedProps,a.state=n.memoizedState,a.componentWillUnmount()}catch(l){te(n,t,l)}vt(e,t,n);break;case 21:vt(e,t,n);break;case 22:n.mode&1?(xe=(a=xe)||n.memoizedState!==null,vt(e,t,n),xe=a):vt(e,t,n);break;default:vt(e,t,n)}}function _l(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Qf),t.forEach(function(a){var i=rh.bind(null,e,a);n.has(a)||(n.add(a),a.then(i,i))})}}function He(e,t){var n=t.deletions;if(n!==null)for(var a=0;a<n.length;a++){var i=n[a];try{var s=e,o=t,l=o;e:for(;l!==null;){switch(l.tag){case 5:ue=l.stateNode,Qe=!1;break e;case 3:ue=l.stateNode.containerInfo,Qe=!0;break e;case 4:ue=l.stateNode.containerInfo,Qe=!0;break e}l=l.return}if(ue===null)throw Error(z(160));ou(s,o,i),ue=null,Qe=!1;var d=i.alternate;d!==null&&(d.return=null),i.return=null}catch(c){te(i,t,c)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)lu(t,e),t=t.sibling}function lu(e,t){var n=e.alternate,a=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(He(t,e),Je(e),a&4){try{ur(3,e,e.return),qa(3,e)}catch(y){te(e,e.return,y)}try{ur(5,e,e.return)}catch(y){te(e,e.return,y)}}break;case 1:He(t,e),Je(e),a&512&&n!==null&&wn(n,n.return);break;case 5:if(He(t,e),Je(e),a&512&&n!==null&&wn(n,n.return),e.flags&32){var i=e.stateNode;try{mr(i,"")}catch(y){te(e,e.return,y)}}if(a&4&&(i=e.stateNode,i!=null)){var s=e.memoizedProps,o=n!==null?n.memoizedProps:s,l=e.type,d=e.updateQueue;if(e.updateQueue=null,d!==null)try{l==="input"&&s.type==="radio"&&s.name!=null&&Pd(i,s),Yi(l,o);var c=Yi(l,s);for(o=0;o<d.length;o+=2){var h=d[o],m=d[o+1];h==="style"?Ld(i,m):h==="dangerouslySetInnerHTML"?Td(i,m):h==="children"?mr(i,m):Os(i,h,m,c)}switch(l){case"input":Hi(i,s);break;case"textarea":Rd(i,s);break;case"select":var x=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var w=s.value;w!=null?Nn(i,!!s.multiple,w,!1):x!==!!s.multiple&&(s.defaultValue!=null?Nn(i,!!s.multiple,s.defaultValue,!0):Nn(i,!!s.multiple,s.multiple?[]:"",!1))}i[Nr]=s}catch(y){te(e,e.return,y)}}break;case 6:if(He(t,e),Je(e),a&4){if(e.stateNode===null)throw Error(z(162));i=e.stateNode,s=e.memoizedProps;try{i.nodeValue=s}catch(y){te(e,e.return,y)}}break;case 3:if(He(t,e),Je(e),a&4&&n!==null&&n.memoizedState.isDehydrated)try{yr(t.containerInfo)}catch(y){te(e,e.return,y)}break;case 4:He(t,e),Je(e);break;case 13:He(t,e),Je(e),i=e.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(bo=ne())),a&4&&_l(e);break;case 22:if(h=n!==null&&n.memoizedState!==null,e.mode&1?(xe=(c=xe)||h,He(t,e),xe=c):He(t,e),Je(e),a&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!h&&e.mode&1)for(P=e,h=e.child;h!==null;){for(m=P=h;P!==null;){switch(x=P,w=x.child,x.tag){case 0:case 11:case 14:case 15:ur(4,x,x.return);break;case 1:wn(x,x.return);var N=x.stateNode;if(typeof N.componentWillUnmount=="function"){a=x,n=x.return;try{t=a,N.props=t.memoizedProps,N.state=t.memoizedState,N.componentWillUnmount()}catch(y){te(a,n,y)}}break;case 5:wn(x,x.return);break;case 22:if(x.memoizedState!==null){Fl(m);continue}}w!==null?(w.return=x,P=w):Fl(m)}h=h.sibling}e:for(h=null,m=e;;){if(m.tag===5){if(h===null){h=m;try{i=m.stateNode,c?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(l=m.stateNode,d=m.memoizedProps.style,o=d!=null&&d.hasOwnProperty("display")?d.display:null,l.style.display=Ad("display",o))}catch(y){te(e,e.return,y)}}}else if(m.tag===6){if(h===null)try{m.stateNode.nodeValue=c?"":m.memoizedProps}catch(y){te(e,e.return,y)}}else if((m.tag!==22&&m.tag!==23||m.memoizedState===null||m===e)&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===e)break e;for(;m.sibling===null;){if(m.return===null||m.return===e)break e;h===m&&(h=null),m=m.return}h===m&&(h=null),m.sibling.return=m.return,m=m.sibling}}break;case 19:He(t,e),Je(e),a&4&&_l(e);break;case 21:break;default:He(t,e),Je(e)}}function Je(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(su(n)){var a=n;break e}n=n.return}throw Error(z(160))}switch(a.tag){case 5:var i=a.stateNode;a.flags&32&&(mr(i,""),a.flags&=-33);var s=Ll(e);Ns(e,s,i);break;case 3:case 4:var o=a.stateNode.containerInfo,l=Ll(e);ks(e,l,o);break;default:throw Error(z(161))}}catch(d){te(e,e.return,d)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function qf(e,t,n){P=e,du(e)}function du(e,t,n){for(var a=(e.mode&1)!==0;P!==null;){var i=P,s=i.child;if(i.tag===22&&a){var o=i.memoizedState!==null||Jr;if(!o){var l=i.alternate,d=l!==null&&l.memoizedState!==null||xe;l=Jr;var c=xe;if(Jr=o,(xe=d)&&!c)for(P=i;P!==null;)o=P,d=o.child,o.tag===22&&o.memoizedState!==null?Bl(i):d!==null?(d.return=o,P=d):Bl(i);for(;s!==null;)P=s,du(s),s=s.sibling;P=i,Jr=l,xe=c}Dl(e)}else i.subtreeFlags&8772&&s!==null?(s.return=i,P=s):Dl(e)}}function Dl(e){for(;P!==null;){var t=P;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:xe||qa(5,t);break;case 1:var a=t.stateNode;if(t.flags&4&&!xe)if(n===null)a.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:We(t.type,n.memoizedProps);a.componentDidUpdate(i,n.memoizedState,a.__reactInternalSnapshotBeforeUpdate)}var s=t.updateQueue;s!==null&&jl(t,s,a);break;case 3:var o=t.updateQueue;if(o!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}jl(t,o,n)}break;case 5:var l=t.stateNode;if(n===null&&t.flags&4){n=l;var d=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":d.autoFocus&&n.focus();break;case"img":d.src&&(n.src=d.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var c=t.alternate;if(c!==null){var h=c.memoizedState;if(h!==null){var m=h.dehydrated;m!==null&&yr(m)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(z(163))}xe||t.flags&512&&ws(t)}catch(x){te(t,t.return,x)}}if(t===e){P=null;break}if(n=t.sibling,n!==null){n.return=t.return,P=n;break}P=t.return}}function Fl(e){for(;P!==null;){var t=P;if(t===e){P=null;break}var n=t.sibling;if(n!==null){n.return=t.return,P=n;break}P=t.return}}function Bl(e){for(;P!==null;){var t=P;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{qa(4,t)}catch(d){te(t,n,d)}break;case 1:var a=t.stateNode;if(typeof a.componentDidMount=="function"){var i=t.return;try{a.componentDidMount()}catch(d){te(t,i,d)}}var s=t.return;try{ws(t)}catch(d){te(t,s,d)}break;case 5:var o=t.return;try{ws(t)}catch(d){te(t,o,d)}}}catch(d){te(t,t.return,d)}if(t===e){P=null;break}var l=t.sibling;if(l!==null){l.return=t.return,P=l;break}P=t.return}}var Kf=Math.ceil,Aa=gt.ReactCurrentDispatcher,vo=gt.ReactCurrentOwner,Be=gt.ReactCurrentBatchConfig,$=0,ce=null,ae=null,pe=0,Ee=0,kn=Ft(0),le=0,Pr=null,en=0,Ka=0,yo=0,pr=null,Ne=null,bo=0,_n=1/0,ot=null,La=!1,Ss=null,Rt=null,Zr=!1,Nt=null,_a=0,fr=0,zs=null,pa=-1,fa=0;function je(){return $&6?ne():pa!==-1?pa:pa=ne()}function It(e){return e.mode&1?$&2&&pe!==0?pe&-pe:Tf.transition!==null?(fa===0&&(fa=Qd()),fa):(e=H,e!==0||(e=window.event,e=e===void 0?16:ec(e.type)),e):1}function Ke(e,t,n,a){if(50<fr)throw fr=0,zs=null,Error(z(185));Ar(e,n,a),(!($&2)||e!==ce)&&(e===ce&&(!($&2)&&(Ka|=n),le===4&&wt(e,pe)),Me(e,a),n===1&&$===0&&!(t.mode&1)&&(_n=ne()+500,Wa&&Bt()))}function Me(e,t){var n=e.callbackNode;Ip(e,t);var a=ya(e,e===ce?pe:0);if(a===0)n!==null&&Yo(n),e.callbackNode=null,e.callbackPriority=0;else if(t=a&-a,e.callbackPriority!==t){if(n!=null&&Yo(n),t===1)e.tag===0?If(Ol.bind(null,e)):yc(Ol.bind(null,e)),Mf(function(){!($&6)&&Bt()}),n=null;else{switch(Yd(a)){case 1:n=Vs;break;case 4:n=Vd;break;case 16:n=va;break;case 536870912:n=Wd;break;default:n=va}n=xu(n,cu.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function cu(e,t){if(pa=-1,fa=0,$&6)throw Error(z(327));var n=e.callbackNode;if(En()&&e.callbackNode!==n)return null;var a=ya(e,e===ce?pe:0);if(a===0)return null;if(a&30||a&e.expiredLanes||t)t=Da(e,a);else{t=a;var i=$;$|=2;var s=pu();(ce!==e||pe!==t)&&(ot=null,_n=ne()+500,qt(e,t));do try{Zf();break}catch(l){uu(e,l)}while(!0);ao(),Aa.current=s,$=i,ae!==null?t=0:(ce=null,pe=0,t=le)}if(t!==0){if(t===2&&(i=Zi(e),i!==0&&(a=i,t=Cs(e,i))),t===1)throw n=Pr,qt(e,0),wt(e,a),Me(e,ne()),n;if(t===6)wt(e,a);else{if(i=e.current.alternate,!(a&30)&&!Xf(i)&&(t=Da(e,a),t===2&&(s=Zi(e),s!==0&&(a=s,t=Cs(e,s))),t===1))throw n=Pr,qt(e,0),wt(e,a),Me(e,ne()),n;switch(e.finishedWork=i,e.finishedLanes=a,t){case 0:case 1:throw Error(z(345));case 2:Vt(e,Ne,ot);break;case 3:if(wt(e,a),(a&130023424)===a&&(t=bo+500-ne(),10<t)){if(ya(e,0)!==0)break;if(i=e.suspendedLanes,(i&a)!==a){je(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=os(Vt.bind(null,e,Ne,ot),t);break}Vt(e,Ne,ot);break;case 4:if(wt(e,a),(a&4194240)===a)break;for(t=e.eventTimes,i=-1;0<a;){var o=31-qe(a);s=1<<o,o=t[o],o>i&&(i=o),a&=~s}if(a=i,a=ne()-a,a=(120>a?120:480>a?480:1080>a?1080:1920>a?1920:3e3>a?3e3:4320>a?4320:1960*Kf(a/1960))-a,10<a){e.timeoutHandle=os(Vt.bind(null,e,Ne,ot),a);break}Vt(e,Ne,ot);break;case 5:Vt(e,Ne,ot);break;default:throw Error(z(329))}}}return Me(e,ne()),e.callbackNode===n?cu.bind(null,e):null}function Cs(e,t){var n=pr;return e.current.memoizedState.isDehydrated&&(qt(e,t).flags|=256),e=Da(e,t),e!==2&&(t=Ne,Ne=n,t!==null&&Ms(t)),e}function Ms(e){Ne===null?Ne=e:Ne.push.apply(Ne,e)}function Xf(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var a=0;a<n.length;a++){var i=n[a],s=i.getSnapshot;i=i.value;try{if(!Xe(s(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function wt(e,t){for(t&=~yo,t&=~Ka,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-qe(t),a=1<<n;e[n]=-1,t&=~a}}function Ol(e){if($&6)throw Error(z(327));En();var t=ya(e,0);if(!(t&1))return Me(e,ne()),null;var n=Da(e,t);if(e.tag!==0&&n===2){var a=Zi(e);a!==0&&(t=a,n=Cs(e,a))}if(n===1)throw n=Pr,qt(e,0),wt(e,t),Me(e,ne()),n;if(n===6)throw Error(z(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Vt(e,Ne,ot),Me(e,ne()),null}function jo(e,t){var n=$;$|=1;try{return e(t)}finally{$=n,$===0&&(_n=ne()+500,Wa&&Bt())}}function tn(e){Nt!==null&&Nt.tag===0&&!($&6)&&En();var t=$;$|=1;var n=Be.transition,a=H;try{if(Be.transition=null,H=1,e)return e()}finally{H=a,Be.transition=n,$=t,!($&6)&&Bt()}}function wo(){Ee=kn.current,Y(kn)}function qt(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Cf(n)),ae!==null)for(n=ae.return;n!==null;){var a=n;switch(to(a),a.tag){case 1:a=a.type.childContextTypes,a!=null&&Na();break;case 3:An(),Y(ze),Y(ve),uo();break;case 5:co(a);break;case 4:An();break;case 13:Y(X);break;case 19:Y(X);break;case 10:io(a.type._context);break;case 22:case 23:wo()}n=n.return}if(ce=e,ae=e=Tt(e.current,null),pe=Ee=t,le=0,Pr=null,yo=Ka=en=0,Ne=pr=null,Qt!==null){for(t=0;t<Qt.length;t++)if(n=Qt[t],a=n.interleaved,a!==null){n.interleaved=null;var i=a.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,a.next=o}n.pending=a}Qt=null}return e}function uu(e,t){do{var n=ae;try{if(ao(),da.current=Ta,Ia){for(var a=J.memoizedState;a!==null;){var i=a.queue;i!==null&&(i.pending=null),a=a.next}Ia=!1}if(Zt=0,de=oe=J=null,cr=!1,Cr=0,vo.current=null,n===null||n.return===null){le=1,Pr=t,ae=null;break}e:{var s=e,o=n.return,l=n,d=t;if(t=pe,l.flags|=32768,d!==null&&typeof d=="object"&&typeof d.then=="function"){var c=d,h=l,m=h.tag;if(!(h.mode&1)&&(m===0||m===11||m===15)){var x=h.alternate;x?(h.updateQueue=x.updateQueue,h.memoizedState=x.memoizedState,h.lanes=x.lanes):(h.updateQueue=null,h.memoizedState=null)}var w=Cl(o);if(w!==null){w.flags&=-257,Ml(w,o,l,s,t),w.mode&1&&zl(s,c,t),t=w,d=c;var N=t.updateQueue;if(N===null){var y=new Set;y.add(d),t.updateQueue=y}else N.add(d);break e}else{if(!(t&1)){zl(s,c,t),ko();break e}d=Error(z(426))}}else if(q&&l.mode&1){var j=Cl(o);if(j!==null){!(j.flags&65536)&&(j.flags|=256),Ml(j,o,l,s,t),no(Ln(d,l));break e}}s=d=Ln(d,l),le!==4&&(le=2),pr===null?pr=[s]:pr.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,t&=-t,s.lanes|=t;var f=Yc(s,d,t);bl(s,f);break e;case 1:l=d;var u=s.type,p=s.stateNode;if(!(s.flags&128)&&(typeof u.getDerivedStateFromError=="function"||p!==null&&typeof p.componentDidCatch=="function"&&(Rt===null||!Rt.has(p)))){s.flags|=65536,t&=-t,s.lanes|=t;var v=qc(s,l,t);bl(s,v);break e}}s=s.return}while(s!==null)}hu(n)}catch(S){t=S,ae===n&&n!==null&&(ae=n=n.return);continue}break}while(!0)}function pu(){var e=Aa.current;return Aa.current=Ta,e===null?Ta:e}function ko(){(le===0||le===3||le===2)&&(le=4),ce===null||!(en&268435455)&&!(Ka&268435455)||wt(ce,pe)}function Da(e,t){var n=$;$|=2;var a=pu();(ce!==e||pe!==t)&&(ot=null,qt(e,t));do try{Jf();break}catch(i){uu(e,i)}while(!0);if(ao(),$=n,Aa.current=a,ae!==null)throw Error(z(261));return ce=null,pe=0,le}function Jf(){for(;ae!==null;)fu(ae)}function Zf(){for(;ae!==null&&!kp();)fu(ae)}function fu(e){var t=gu(e.alternate,e,Ee);e.memoizedProps=e.pendingProps,t===null?hu(e):ae=t,vo.current=null}function hu(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=Wf(n,t),n!==null){n.flags&=32767,ae=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{le=6,ae=null;return}}else if(n=Vf(n,t,Ee),n!==null){ae=n;return}if(t=t.sibling,t!==null){ae=t;return}ae=t=e}while(t!==null);le===0&&(le=5)}function Vt(e,t,n){var a=H,i=Be.transition;try{Be.transition=null,H=1,eh(e,t,n,a)}finally{Be.transition=i,H=a}return null}function eh(e,t,n,a){do En();while(Nt!==null);if($&6)throw Error(z(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(z(177));e.callbackNode=null,e.callbackPriority=0;var s=n.lanes|n.childLanes;if(Tp(e,s),e===ce&&(ae=ce=null,pe=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Zr||(Zr=!0,xu(va,function(){return En(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Be.transition,Be.transition=null;var o=H;H=1;var l=$;$|=4,vo.current=null,Yf(e,n),lu(n,e),bf(is),ba=!!as,is=as=null,e.current=n,qf(n),Np(),$=l,H=o,Be.transition=s}else e.current=n;if(Zr&&(Zr=!1,Nt=e,_a=i),s=e.pendingLanes,s===0&&(Rt=null),Cp(n.stateNode),Me(e,ne()),t!==null)for(a=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],a(i.value,{componentStack:i.stack,digest:i.digest});if(La)throw La=!1,e=Ss,Ss=null,e;return _a&1&&e.tag!==0&&En(),s=e.pendingLanes,s&1?e===zs?fr++:(fr=0,zs=e):fr=0,Bt(),null}function En(){if(Nt!==null){var e=Yd(_a),t=Be.transition,n=H;try{if(Be.transition=null,H=16>e?16:e,Nt===null)var a=!1;else{if(e=Nt,Nt=null,_a=0,$&6)throw Error(z(331));var i=$;for($|=4,P=e.current;P!==null;){var s=P,o=s.child;if(P.flags&16){var l=s.deletions;if(l!==null){for(var d=0;d<l.length;d++){var c=l[d];for(P=c;P!==null;){var h=P;switch(h.tag){case 0:case 11:case 15:ur(8,h,s)}var m=h.child;if(m!==null)m.return=h,P=m;else for(;P!==null;){h=P;var x=h.sibling,w=h.return;if(iu(h),h===c){P=null;break}if(x!==null){x.return=w,P=x;break}P=w}}}var N=s.alternate;if(N!==null){var y=N.child;if(y!==null){N.child=null;do{var j=y.sibling;y.sibling=null,y=j}while(y!==null)}}P=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,P=o;else e:for(;P!==null;){if(s=P,s.flags&2048)switch(s.tag){case 0:case 11:case 15:ur(9,s,s.return)}var f=s.sibling;if(f!==null){f.return=s.return,P=f;break e}P=s.return}}var u=e.current;for(P=u;P!==null;){o=P;var p=o.child;if(o.subtreeFlags&2064&&p!==null)p.return=o,P=p;else e:for(o=u;P!==null;){if(l=P,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:qa(9,l)}}catch(S){te(l,l.return,S)}if(l===o){P=null;break e}var v=l.sibling;if(v!==null){v.return=l.return,P=v;break e}P=l.return}}if($=i,Bt(),rt&&typeof rt.onPostCommitFiberRoot=="function")try{rt.onPostCommitFiberRoot($a,e)}catch{}a=!0}return a}finally{H=n,Be.transition=t}}return!1}function $l(e,t,n){t=Ln(n,t),t=Yc(e,t,1),e=Pt(e,t,1),t=je(),e!==null&&(Ar(e,1,t),Me(e,t))}function te(e,t,n){if(e.tag===3)$l(e,e,n);else for(;t!==null;){if(t.tag===3){$l(t,e,n);break}else if(t.tag===1){var a=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(Rt===null||!Rt.has(a))){e=Ln(n,e),e=qc(t,e,1),t=Pt(t,e,1),e=je(),t!==null&&(Ar(t,1,e),Me(t,e));break}}t=t.return}}function th(e,t,n){var a=e.pingCache;a!==null&&a.delete(t),t=je(),e.pingedLanes|=e.suspendedLanes&n,ce===e&&(pe&n)===n&&(le===4||le===3&&(pe&130023424)===pe&&500>ne()-bo?qt(e,0):yo|=n),Me(e,t)}function mu(e,t){t===0&&(e.mode&1?(t=Hr,Hr<<=1,!(Hr&130023424)&&(Hr=4194304)):t=1);var n=je();e=ht(e,t),e!==null&&(Ar(e,t,n),Me(e,n))}function nh(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),mu(e,n)}function rh(e,t){var n=0;switch(e.tag){case 13:var a=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:a=e.stateNode;break;default:throw Error(z(314))}a!==null&&a.delete(t),mu(e,n)}var gu;gu=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||ze.current)Se=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Se=!1,Gf(e,t,n);Se=!!(e.flags&131072)}else Se=!1,q&&t.flags&1048576&&bc(t,Ca,t.index);switch(t.lanes=0,t.tag){case 2:var a=t.type;ua(e,t),e=t.pendingProps;var i=Rn(t,ve.current);Mn(t,n),i=fo(null,t,a,e,i,n);var s=ho();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Ce(a)?(s=!0,Sa(t)):s=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,oo(t),i.updater=Ya,t.stateNode=i,i._reactInternals=t,hs(t,a,e,n),t=xs(null,t,a,!0,s,n)):(t.tag=0,q&&s&&eo(t),ye(null,t,i,n),t=t.child),t;case 16:a=t.elementType;e:{switch(ua(e,t),e=t.pendingProps,i=a._init,a=i(a._payload),t.type=a,i=t.tag=ih(a),e=We(a,e),i){case 0:t=gs(null,t,a,e,n);break e;case 1:t=Rl(null,t,a,e,n);break e;case 11:t=El(null,t,a,e,n);break e;case 14:t=Pl(null,t,a,We(a.type,e),n);break e}throw Error(z(306,a,""))}return t;case 0:return a=t.type,i=t.pendingProps,i=t.elementType===a?i:We(a,i),gs(e,t,a,i,n);case 1:return a=t.type,i=t.pendingProps,i=t.elementType===a?i:We(a,i),Rl(e,t,a,i,n);case 3:e:{if(Zc(t),e===null)throw Error(z(387));a=t.pendingProps,s=t.memoizedState,i=s.element,zc(e,t),Pa(t,a,null,n);var o=t.memoizedState;if(a=o.element,s.isDehydrated)if(s={element:a,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},t.updateQueue.baseState=s,t.memoizedState=s,t.flags&256){i=Ln(Error(z(423)),t),t=Il(e,t,a,n,i);break e}else if(a!==i){i=Ln(Error(z(424)),t),t=Il(e,t,a,n,i);break e}else for(Pe=Et(t.stateNode.containerInfo.firstChild),Re=t,q=!0,Ye=null,n=Nc(t,null,a,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(In(),a===i){t=mt(e,t,n);break e}ye(e,t,a,n)}t=t.child}return t;case 5:return Cc(t),e===null&&us(t),a=t.type,i=t.pendingProps,s=e!==null?e.memoizedProps:null,o=i.children,ss(a,i)?o=null:s!==null&&ss(a,s)&&(t.flags|=32),Jc(e,t),ye(e,t,o,n),t.child;case 6:return e===null&&us(t),null;case 13:return eu(e,t,n);case 4:return lo(t,t.stateNode.containerInfo),a=t.pendingProps,e===null?t.child=Tn(t,null,a,n):ye(e,t,a,n),t.child;case 11:return a=t.type,i=t.pendingProps,i=t.elementType===a?i:We(a,i),El(e,t,a,i,n);case 7:return ye(e,t,t.pendingProps,n),t.child;case 8:return ye(e,t,t.pendingProps.children,n),t.child;case 12:return ye(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(a=t.type._context,i=t.pendingProps,s=t.memoizedProps,o=i.value,G(Ma,a._currentValue),a._currentValue=o,s!==null)if(Xe(s.value,o)){if(s.children===i.children&&!ze.current){t=mt(e,t,n);break e}}else for(s=t.child,s!==null&&(s.return=t);s!==null;){var l=s.dependencies;if(l!==null){o=s.child;for(var d=l.firstContext;d!==null;){if(d.context===a){if(s.tag===1){d=ut(-1,n&-n),d.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var h=c.pending;h===null?d.next=d:(d.next=h.next,h.next=d),c.pending=d}}s.lanes|=n,d=s.alternate,d!==null&&(d.lanes|=n),ps(s.return,n,t),l.lanes|=n;break}d=d.next}}else if(s.tag===10)o=s.type===t.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(z(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),ps(o,n,t),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===t){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}ye(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,a=t.pendingProps.children,Mn(t,n),i=Oe(i),a=a(i),t.flags|=1,ye(e,t,a,n),t.child;case 14:return a=t.type,i=We(a,t.pendingProps),i=We(a.type,i),Pl(e,t,a,i,n);case 15:return Kc(e,t,t.type,t.pendingProps,n);case 17:return a=t.type,i=t.pendingProps,i=t.elementType===a?i:We(a,i),ua(e,t),t.tag=1,Ce(a)?(e=!0,Sa(t)):e=!1,Mn(t,n),Qc(t,a,i),hs(t,a,i,n),xs(null,t,a,!0,e,n);case 19:return tu(e,t,n);case 22:return Xc(e,t,n)}throw Error(z(156,t.tag))};function xu(e,t){return Gd(e,t)}function ah(e,t,n,a){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Fe(e,t,n,a){return new ah(e,t,n,a)}function No(e){return e=e.prototype,!(!e||!e.isReactComponent)}function ih(e){if(typeof e=="function")return No(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Us)return 11;if(e===Hs)return 14}return 2}function Tt(e,t){var n=e.alternate;return n===null?(n=Fe(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function ha(e,t,n,a,i,s){var o=2;if(a=e,typeof e=="function")No(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case fn:return Kt(n.children,i,s,t);case $s:o=8,i|=8;break;case Fi:return e=Fe(12,n,t,i|2),e.elementType=Fi,e.lanes=s,e;case Bi:return e=Fe(13,n,t,i),e.elementType=Bi,e.lanes=s,e;case Oi:return e=Fe(19,n,t,i),e.elementType=Oi,e.lanes=s,e;case Cd:return Xa(n,i,s,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Sd:o=10;break e;case zd:o=9;break e;case Us:o=11;break e;case Hs:o=14;break e;case yt:o=16,a=null;break e}throw Error(z(130,e==null?e:typeof e,""))}return t=Fe(o,n,t,i),t.elementType=e,t.type=a,t.lanes=s,t}function Kt(e,t,n,a){return e=Fe(7,e,a,t),e.lanes=n,e}function Xa(e,t,n,a){return e=Fe(22,e,a,t),e.elementType=Cd,e.lanes=n,e.stateNode={isHidden:!1},e}function Mi(e,t,n){return e=Fe(6,e,null,t),e.lanes=n,e}function Ei(e,t,n){return t=Fe(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function sh(e,t,n,a,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=di(0),this.expirationTimes=di(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=di(0),this.identifierPrefix=a,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function So(e,t,n,a,i,s,o,l,d){return e=new sh(e,t,n,l,d),t===1?(t=1,s===!0&&(t|=8)):t=0,s=Fe(3,null,null,t),e.current=s,s.stateNode=e,s.memoizedState={element:a,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},oo(s),e}function oh(e,t,n){var a=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:pn,key:a==null?null:""+a,children:e,containerInfo:t,implementation:n}}function vu(e){if(!e)return _t;e=e._reactInternals;e:{if(rn(e)!==e||e.tag!==1)throw Error(z(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Ce(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(z(171))}if(e.tag===1){var n=e.type;if(Ce(n))return vc(e,n,t)}return t}function yu(e,t,n,a,i,s,o,l,d){return e=So(n,a,!0,e,i,s,o,l,d),e.context=vu(null),n=e.current,a=je(),i=It(n),s=ut(a,i),s.callback=t??null,Pt(n,s,i),e.current.lanes=i,Ar(e,i,a),Me(e,a),e}function Ja(e,t,n,a){var i=t.current,s=je(),o=It(i);return n=vu(n),t.context===null?t.context=n:t.pendingContext=n,t=ut(s,o),t.payload={element:e},a=a===void 0?null:a,a!==null&&(t.callback=a),e=Pt(i,t,o),e!==null&&(Ke(e,i,o,s),la(e,i,o)),o}function Fa(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Ul(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function zo(e,t){Ul(e,t),(e=e.alternate)&&Ul(e,t)}function lh(){return null}var bu=typeof reportError=="function"?reportError:function(e){console.error(e)};function Co(e){this._internalRoot=e}Za.prototype.render=Co.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(z(409));Ja(e,t,null,null)};Za.prototype.unmount=Co.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;tn(function(){Ja(null,e,null,null)}),t[ft]=null}};function Za(e){this._internalRoot=e}Za.prototype.unstable_scheduleHydration=function(e){if(e){var t=Xd();e={blockedOn:null,target:e,priority:t};for(var n=0;n<jt.length&&t!==0&&t<jt[n].priority;n++);jt.splice(n,0,e),n===0&&Zd(e)}};function Mo(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function ei(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Hl(){}function dh(e,t,n,a,i){if(i){if(typeof a=="function"){var s=a;a=function(){var c=Fa(o);s.call(c)}}var o=yu(t,a,e,0,null,!1,!1,"",Hl);return e._reactRootContainer=o,e[ft]=o.current,wr(e.nodeType===8?e.parentNode:e),tn(),o}for(;i=e.lastChild;)e.removeChild(i);if(typeof a=="function"){var l=a;a=function(){var c=Fa(d);l.call(c)}}var d=So(e,0,!1,null,null,!1,!1,"",Hl);return e._reactRootContainer=d,e[ft]=d.current,wr(e.nodeType===8?e.parentNode:e),tn(function(){Ja(t,d,n,a)}),d}function ti(e,t,n,a,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var l=i;i=function(){var d=Fa(o);l.call(d)}}Ja(t,o,e,i)}else o=dh(n,t,e,i,a);return Fa(o)}qd=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=rr(t.pendingLanes);n!==0&&(Ws(t,n|1),Me(t,ne()),!($&6)&&(_n=ne()+500,Bt()))}break;case 13:tn(function(){var a=ht(e,1);if(a!==null){var i=je();Ke(a,e,1,i)}}),zo(e,1)}};Qs=function(e){if(e.tag===13){var t=ht(e,134217728);if(t!==null){var n=je();Ke(t,e,134217728,n)}zo(e,134217728)}};Kd=function(e){if(e.tag===13){var t=It(e),n=ht(e,t);if(n!==null){var a=je();Ke(n,e,t,a)}zo(e,t)}};Xd=function(){return H};Jd=function(e,t){var n=H;try{return H=e,t()}finally{H=n}};Ki=function(e,t,n){switch(t){case"input":if(Hi(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var a=n[t];if(a!==e&&a.form===e.form){var i=Va(a);if(!i)throw Error(z(90));Ed(a),Hi(a,i)}}}break;case"textarea":Rd(e,n);break;case"select":t=n.value,t!=null&&Nn(e,!!n.multiple,t,!1)}};Fd=jo;Bd=tn;var ch={usingClientEntryPoint:!1,Events:[_r,xn,Va,_d,Dd,jo]},Xn={findFiberByHostInstance:Wt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},uh={bundleType:Xn.bundleType,version:Xn.version,rendererPackageName:Xn.rendererPackageName,rendererConfig:Xn.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:gt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Ud(e),e===null?null:e.stateNode},findFiberByHostInstance:Xn.findFiberByHostInstance||lh,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ea=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ea.isDisabled&&ea.supportsFiber)try{$a=ea.inject(uh),rt=ea}catch{}}Te.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ch;Te.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Mo(t))throw Error(z(200));return oh(e,t,null,n)};Te.createRoot=function(e,t){if(!Mo(e))throw Error(z(299));var n=!1,a="",i=bu;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(a=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=So(e,1,!1,null,null,n,!1,a,i),e[ft]=t.current,wr(e.nodeType===8?e.parentNode:e),new Co(t)};Te.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(z(188)):(e=Object.keys(e).join(","),Error(z(268,e)));return e=Ud(t),e=e===null?null:e.stateNode,e};Te.flushSync=function(e){return tn(e)};Te.hydrate=function(e,t,n){if(!ei(t))throw Error(z(200));return ti(null,e,t,!0,n)};Te.hydrateRoot=function(e,t,n){if(!Mo(e))throw Error(z(405));var a=n!=null&&n.hydratedSources||null,i=!1,s="",o=bu;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),t=yu(t,null,e,1,n??null,i,!1,s,o),e[ft]=t.current,wr(e),a)for(e=0;e<a.length;e++)n=a[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new Za(t)};Te.render=function(e,t,n){if(!ei(t))throw Error(z(200));return ti(null,e,t,!1,n)};Te.unmountComponentAtNode=function(e){if(!ei(e))throw Error(z(40));return e._reactRootContainer?(tn(function(){ti(null,null,e,!1,function(){e._reactRootContainer=null,e[ft]=null})}),!0):!1};Te.unstable_batchedUpdates=jo;Te.unstable_renderSubtreeIntoContainer=function(e,t,n,a){if(!ei(n))throw Error(z(200));if(e==null||e._reactInternals===void 0)throw Error(z(38));return ti(e,t,n,!1,a)};Te.version="18.3.1-next-f1338f8080-20240426";function ju(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(ju)}catch(e){console.error(e)}}ju(),jd.exports=Te;var ph=jd.exports,Gl=ph;_i.createRoot=Gl.createRoot,_i.hydrateRoot=Gl.hydrateRoot;/**
 * @remix-run/router v1.23.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Rr(){return Rr=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)({}).hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},Rr.apply(null,arguments)}var St;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(St||(St={}));const Vl="popstate";function fh(e){e===void 0&&(e={});function t(a,i){let{pathname:s,search:o,hash:l}=a.location;return Es("",{pathname:s,search:o,hash:l},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(a,i){return typeof i=="string"?i:Ba(i)}return mh(t,n,null,e)}function re(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Eo(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function hh(){return Math.random().toString(36).substr(2,8)}function Wl(e,t){return{usr:e.state,key:e.key,idx:t}}function Es(e,t,n,a){return n===void 0&&(n=null),Rr({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?On(t):t,{state:n,key:t&&t.key||a||hh()})}function Ba(e){let{pathname:t="/",search:n="",hash:a=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),a&&a!=="#"&&(t+=a.charAt(0)==="#"?a:"#"+a),t}function On(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let a=e.indexOf("?");a>=0&&(t.search=e.substr(a),e=e.substr(0,a)),e&&(t.pathname=e)}return t}function mh(e,t,n,a){a===void 0&&(a={});let{window:i=document.defaultView,v5Compat:s=!1}=a,o=i.history,l=St.Pop,d=null,c=h();c==null&&(c=0,o.replaceState(Rr({},o.state,{idx:c}),""));function h(){return(o.state||{idx:null}).idx}function m(){l=St.Pop;let j=h(),f=j==null?null:j-c;c=j,d&&d({action:l,location:y.location,delta:f})}function x(j,f){l=St.Push;let u=Es(y.location,j,f);c=h()+1;let p=Wl(u,c),v=y.createHref(u);try{o.pushState(p,"",v)}catch(S){if(S instanceof DOMException&&S.name==="DataCloneError")throw S;i.location.assign(v)}s&&d&&d({action:l,location:y.location,delta:1})}function w(j,f){l=St.Replace;let u=Es(y.location,j,f);c=h();let p=Wl(u,c),v=y.createHref(u);o.replaceState(p,"",v),s&&d&&d({action:l,location:y.location,delta:0})}function N(j){let f=i.location.origin!=="null"?i.location.origin:i.location.href,u=typeof j=="string"?j:Ba(j);return u=u.replace(/ $/,"%20"),re(f,"No window.location.(origin|href) available to create URL for href: "+u),new URL(u,f)}let y={get action(){return l},get location(){return e(i,o)},listen(j){if(d)throw new Error("A history only accepts one active listener");return i.addEventListener(Vl,m),d=j,()=>{i.removeEventListener(Vl,m),d=null}},createHref(j){return t(i,j)},createURL:N,encodeLocation(j){let f=N(j);return{pathname:f.pathname,search:f.search,hash:f.hash}},push:x,replace:w,go(j){return o.go(j)}};return y}var Ql;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Ql||(Ql={}));function gh(e,t,n){return n===void 0&&(n="/"),xh(e,t,n)}function xh(e,t,n,a){let i=typeof t=="string"?On(t):t,s=Po(i.pathname||"/",n);if(s==null)return null;let o=wu(e);vh(o);let l=null,d=Ph(s);for(let c=0;l==null&&c<o.length;++c)l=Ch(o[c],d);return l}function wu(e,t,n,a){t===void 0&&(t=[]),n===void 0&&(n=[]),a===void 0&&(a="");let i=(s,o,l)=>{let d={relativePath:l===void 0?s.path||"":l,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};d.relativePath.startsWith("/")&&(re(d.relativePath.startsWith(a),'Absolute route path "'+d.relativePath+'" nested under path '+('"'+a+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),d.relativePath=d.relativePath.slice(a.length));let c=At([a,d.relativePath]),h=n.concat(d);s.children&&s.children.length>0&&(re(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),wu(s.children,t,h,c)),!(s.path==null&&!s.index)&&t.push({path:c,score:Sh(c,s.index),routesMeta:h})};return e.forEach((s,o)=>{var l;if(s.path===""||!((l=s.path)!=null&&l.includes("?")))i(s,o);else for(let d of ku(s.path))i(s,o,d)}),t}function ku(e){let t=e.split("/");if(t.length===0)return[];let[n,...a]=t,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(a.length===0)return i?[s,""]:[s];let o=ku(a.join("/")),l=[];return l.push(...o.map(d=>d===""?s:[s,d].join("/"))),i&&l.push(...o),l.map(d=>e.startsWith("/")&&d===""?"/":d)}function vh(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:zh(t.routesMeta.map(a=>a.childrenIndex),n.routesMeta.map(a=>a.childrenIndex)))}const yh=/^:[\w-]+$/,bh=3,jh=2,wh=1,kh=10,Nh=-2,Yl=e=>e==="*";function Sh(e,t){let n=e.split("/"),a=n.length;return n.some(Yl)&&(a+=Nh),t&&(a+=jh),n.filter(i=>!Yl(i)).reduce((i,s)=>i+(yh.test(s)?bh:s===""?wh:kh),a)}function zh(e,t){return e.length===t.length&&e.slice(0,-1).every((a,i)=>a===t[i])?e[e.length-1]-t[t.length-1]:0}function Ch(e,t,n){let{routesMeta:a}=e,i={},s="/",o=[];for(let l=0;l<a.length;++l){let d=a[l],c=l===a.length-1,h=s==="/"?t:t.slice(s.length)||"/",m=Mh({path:d.relativePath,caseSensitive:d.caseSensitive,end:c},h),x=d.route;if(!m)return null;Object.assign(i,m.params),o.push({params:i,pathname:At([s,m.pathname]),pathnameBase:Lh(At([s,m.pathnameBase])),route:x}),m.pathnameBase!=="/"&&(s=At([s,m.pathnameBase]))}return o}function Mh(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,a]=Eh(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),l=i.slice(1);return{params:a.reduce((c,h,m)=>{let{paramName:x,isOptional:w}=h;if(x==="*"){let y=l[m]||"";o=s.slice(0,s.length-y.length).replace(/(.)\/+$/,"$1")}const N=l[m];return w&&!N?c[x]=void 0:c[x]=(N||"").replace(/%2F/g,"/"),c},{}),pathname:s,pathnameBase:o,pattern:e}}function Eh(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),Eo(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let a=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,l,d)=>(a.push({paramName:l,isOptional:d!=null}),d?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(a.push({paramName:"*"}),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),a]}function Ph(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return Eo(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function Po(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,a=e.charAt(n);return a&&a!=="/"?null:e.slice(n)||"/"}const Rh=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Ih=e=>Rh.test(e);function Th(e,t){t===void 0&&(t="/");let{pathname:n,search:a="",hash:i=""}=typeof e=="string"?On(e):e,s;if(n)if(Ih(n))s=n;else{if(n.includes("//")){let o=n;n=Nu(n),Eo(!1,"Pathnames cannot have embedded double slashes - normalizing "+(o+" -> "+n))}n.startsWith("/")?s=ql(n.substring(1),"/"):s=ql(n,t)}else s=t;return{pathname:s,search:_h(a),hash:Dh(i)}}function ql(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Pi(e,t,n,a){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(a)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Ah(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function Ro(e,t){let n=Ah(e);return t?n.map((a,i)=>i===n.length-1?a.pathname:a.pathnameBase):n.map(a=>a.pathnameBase)}function Io(e,t,n,a){a===void 0&&(a=!1);let i;typeof e=="string"?i=On(e):(i=Rr({},e),re(!i.pathname||!i.pathname.includes("?"),Pi("?","pathname","search",i)),re(!i.pathname||!i.pathname.includes("#"),Pi("#","pathname","hash",i)),re(!i.search||!i.search.includes("#"),Pi("#","search","hash",i)));let s=e===""||i.pathname==="",o=s?"/":i.pathname,l;if(o==null)l=n;else{let m=t.length-1;if(!a&&o.startsWith("..")){let x=o.split("/");for(;x[0]==="..";)x.shift(),m-=1;i.pathname=x.join("/")}l=m>=0?t[m]:"/"}let d=Th(i,l),c=o&&o!=="/"&&o.endsWith("/"),h=(s||o===".")&&n.endsWith("/");return!d.pathname.endsWith("/")&&(c||h)&&(d.pathname+="/"),d}const Nu=e=>e.replace(/\/\/+/g,"/"),At=e=>Nu(e.join("/")),Lh=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),_h=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,Dh=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function Fh(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const Su=["post","put","patch","delete"];new Set(Su);const Bh=["get",...Su];new Set(Bh);/**
 * React Router v6.30.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ir(){return Ir=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)({}).hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},Ir.apply(null,arguments)}const To=g.createContext(null),Oh=g.createContext(null),Ot=g.createContext(null),ni=g.createContext(null),$t=g.createContext({outlet:null,matches:[],isDataRoute:!1}),zu=g.createContext(null);function $h(e,t){let{relative:n}=t===void 0?{}:t;$n()||re(!1);let{basename:a,navigator:i}=g.useContext(Ot),{hash:s,pathname:o,search:l}=Mu(e,{relative:n}),d=o;return a!=="/"&&(d=o==="/"?a:At([a,o])),i.createHref({pathname:d,search:l,hash:s})}function $n(){return g.useContext(ni)!=null}function an(){return $n()||re(!1),g.useContext(ni).location}function Cu(e){g.useContext(Ot).static||g.useLayoutEffect(e)}function it(){let{isDataRoute:e}=g.useContext($t);return e?em():Uh()}function Uh(){$n()||re(!1);let e=g.useContext(To),{basename:t,future:n,navigator:a}=g.useContext(Ot),{matches:i}=g.useContext($t),{pathname:s}=an(),o=JSON.stringify(Ro(i,n.v7_relativeSplatPath)),l=g.useRef(!1);return Cu(()=>{l.current=!0}),g.useCallback(function(c,h){if(h===void 0&&(h={}),!l.current)return;if(typeof c=="number"){a.go(c);return}let m=Io(c,JSON.parse(o),s,h.relative==="path");e==null&&t!=="/"&&(m.pathname=m.pathname==="/"?t:At([t,m.pathname])),(h.replace?a.replace:a.push)(m,h.state,h)},[t,a,o,s,e])}function Mu(e,t){let{relative:n}=t===void 0?{}:t,{future:a}=g.useContext(Ot),{matches:i}=g.useContext($t),{pathname:s}=an(),o=JSON.stringify(Ro(i,a.v7_relativeSplatPath));return g.useMemo(()=>Io(e,JSON.parse(o),s,n==="path"),[e,o,s,n])}function Hh(e,t){return Gh(e,t)}function Gh(e,t,n,a){$n()||re(!1);let{navigator:i}=g.useContext(Ot),{matches:s}=g.useContext($t),o=s[s.length-1],l=o?o.params:{};o&&o.pathname;let d=o?o.pathnameBase:"/";o&&o.route;let c=an(),h;if(t){var m;let j=typeof t=="string"?On(t):t;d==="/"||(m=j.pathname)!=null&&m.startsWith(d)||re(!1),h=j}else h=c;let x=h.pathname||"/",w=x;if(d!=="/"){let j=d.replace(/^\//,"").split("/");w="/"+x.replace(/^\//,"").split("/").slice(j.length).join("/")}let N=gh(e,{pathname:w}),y=qh(N&&N.map(j=>Object.assign({},j,{params:Object.assign({},l,j.params),pathname:At([d,i.encodeLocation?i.encodeLocation(j.pathname).pathname:j.pathname]),pathnameBase:j.pathnameBase==="/"?d:At([d,i.encodeLocation?i.encodeLocation(j.pathnameBase).pathname:j.pathnameBase])})),s,n,a);return t&&y?g.createElement(ni.Provider,{value:{location:Ir({pathname:"/",search:"",hash:"",state:null,key:"default"},h),navigationType:St.Pop}},y):y}function Vh(){let e=Zh(),t=Fh(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return g.createElement(g.Fragment,null,g.createElement("h2",null,"Unexpected Application Error!"),g.createElement("h3",{style:{fontStyle:"italic"}},t),n?g.createElement("pre",{style:i},n):null,null)}const Wh=g.createElement(Vh,null);class Qh extends g.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?g.createElement($t.Provider,{value:this.props.routeContext},g.createElement(zu.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Yh(e){let{routeContext:t,match:n,children:a}=e,i=g.useContext(To);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),g.createElement($t.Provider,{value:t},a)}function qh(e,t,n,a){var i;if(t===void 0&&(t=[]),n===void 0&&(n=null),a===void 0&&(a=null),e==null){var s;if(!n)return null;if(n.errors)e=n.matches;else if((s=a)!=null&&s.v7_partialHydration&&t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let o=e,l=(i=n)==null?void 0:i.errors;if(l!=null){let h=o.findIndex(m=>m.route.id&&(l==null?void 0:l[m.route.id])!==void 0);h>=0||re(!1),o=o.slice(0,Math.min(o.length,h+1))}let d=!1,c=-1;if(n&&a&&a.v7_partialHydration)for(let h=0;h<o.length;h++){let m=o[h];if((m.route.HydrateFallback||m.route.hydrateFallbackElement)&&(c=h),m.route.id){let{loaderData:x,errors:w}=n,N=m.route.loader&&x[m.route.id]===void 0&&(!w||w[m.route.id]===void 0);if(m.route.lazy||N){d=!0,c>=0?o=o.slice(0,c+1):o=[o[0]];break}}}return o.reduceRight((h,m,x)=>{let w,N=!1,y=null,j=null;n&&(w=l&&m.route.id?l[m.route.id]:void 0,y=m.route.errorElement||Wh,d&&(c<0&&x===0?(tm("route-fallback"),N=!0,j=null):c===x&&(N=!0,j=m.route.hydrateFallbackElement||null)));let f=t.concat(o.slice(0,x+1)),u=()=>{let p;return w?p=y:N?p=j:m.route.Component?p=g.createElement(m.route.Component,null):m.route.element?p=m.route.element:p=h,g.createElement(Yh,{match:m,routeContext:{outlet:h,matches:f,isDataRoute:n!=null},children:p})};return n&&(m.route.ErrorBoundary||m.route.errorElement||x===0)?g.createElement(Qh,{location:n.location,revalidation:n.revalidation,component:y,error:w,children:u(),routeContext:{outlet:null,matches:f,isDataRoute:!0}}):u()},null)}var Eu=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(Eu||{}),Pu=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(Pu||{});function Kh(e){let t=g.useContext(To);return t||re(!1),t}function Xh(e){let t=g.useContext(Oh);return t||re(!1),t}function Jh(e){let t=g.useContext($t);return t||re(!1),t}function Ru(e){let t=Jh(),n=t.matches[t.matches.length-1];return n.route.id||re(!1),n.route.id}function Zh(){var e;let t=g.useContext(zu),n=Xh(),a=Ru();return t!==void 0?t:(e=n.errors)==null?void 0:e[a]}function em(){let{router:e}=Kh(Eu.UseNavigateStable),t=Ru(Pu.UseNavigateStable),n=g.useRef(!1);return Cu(()=>{n.current=!0}),g.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,Ir({fromRouteId:t},s)))},[e,t])}const Kl={};function tm(e,t,n){Kl[e]||(Kl[e]=!0)}function nm(e,t){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function Ps(e){let{to:t,replace:n,state:a,relative:i}=e;$n()||re(!1);let{future:s,static:o}=g.useContext(Ot),{matches:l}=g.useContext($t),{pathname:d}=an(),c=it(),h=Io(t,Ro(l,s.v7_relativeSplatPath),d,i==="path"),m=JSON.stringify(h);return g.useEffect(()=>c(JSON.parse(m),{replace:n,state:a,relative:i}),[c,m,i,n,a]),null}function ge(e){re(!1)}function rm(e){let{basename:t="/",children:n=null,location:a,navigationType:i=St.Pop,navigator:s,static:o=!1,future:l}=e;$n()&&re(!1);let d=t.replace(/^\/*/,"/"),c=g.useMemo(()=>({basename:d,navigator:s,static:o,future:Ir({v7_relativeSplatPath:!1},l)}),[d,l,s,o]);typeof a=="string"&&(a=On(a));let{pathname:h="/",search:m="",hash:x="",state:w=null,key:N="default"}=a,y=g.useMemo(()=>{let j=Po(h,d);return j==null?null:{location:{pathname:j,search:m,hash:x,state:w,key:N},navigationType:i}},[d,h,m,x,w,N,i]);return y==null?null:g.createElement(Ot.Provider,{value:c},g.createElement(ni.Provider,{children:n,value:y}))}function am(e){let{children:t,location:n}=e;return Hh(Rs(t),n)}new Promise(()=>{});function Rs(e,t){t===void 0&&(t=[]);let n=[];return g.Children.forEach(e,(a,i)=>{if(!g.isValidElement(a))return;let s=[...t,i];if(a.type===g.Fragment){n.push.apply(n,Rs(a.props.children,s));return}a.type!==ge&&re(!1),!a.props.index||!a.props.children||re(!1);let o={id:a.props.id||s.join("-"),caseSensitive:a.props.caseSensitive,element:a.props.element,Component:a.props.Component,index:a.props.index,path:a.props.path,loader:a.props.loader,action:a.props.action,errorElement:a.props.errorElement,ErrorBoundary:a.props.ErrorBoundary,hasErrorBoundary:a.props.ErrorBoundary!=null||a.props.errorElement!=null,shouldRevalidate:a.props.shouldRevalidate,handle:a.props.handle,lazy:a.props.lazy};a.props.children&&(o.children=Rs(a.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.30.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Is(){return Is=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)({}).hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},Is.apply(null,arguments)}function im(e,t){if(e==null)return{};var n={};for(var a in e)if({}.hasOwnProperty.call(e,a)){if(t.indexOf(a)!==-1)continue;n[a]=e[a]}return n}function sm(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function om(e,t){return e.button===0&&(!t||t==="_self")&&!sm(e)}const lm=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],dm="6";try{window.__reactRouterVersion=dm}catch{}const cm="startTransition",Xl=ep[cm];function um(e){let{basename:t,children:n,future:a,window:i}=e,s=g.useRef();s.current==null&&(s.current=fh({window:i,v5Compat:!0}));let o=s.current,[l,d]=g.useState({action:o.action,location:o.location}),{v7_startTransition:c}=a||{},h=g.useCallback(m=>{c&&Xl?Xl(()=>d(m)):d(m)},[d,c]);return g.useLayoutEffect(()=>o.listen(h),[o,h]),g.useEffect(()=>nm(a),[a]),g.createElement(rm,{basename:t,children:n,location:l.location,navigationType:l.action,navigator:o,future:a})}const pm=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",fm=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,I=g.forwardRef(function(t,n){let{onClick:a,relative:i,reloadDocument:s,replace:o,state:l,target:d,to:c,preventScrollReset:h,viewTransition:m}=t,x=im(t,lm),{basename:w}=g.useContext(Ot),N,y=!1;if(typeof c=="string"&&fm.test(c)&&(N=c,pm))try{let p=new URL(window.location.href),v=c.startsWith("//")?new URL(p.protocol+c):new URL(c),S=Po(v.pathname,w);v.origin===p.origin&&S!=null?c=S+v.search+v.hash:y=!0}catch{}let j=$h(c,{relative:i}),f=hm(c,{replace:o,state:l,target:d,preventScrollReset:h,relative:i,viewTransition:m});function u(p){a&&a(p),p.defaultPrevented||f(p)}return g.createElement("a",Is({},x,{href:N||j,onClick:y||s?a:u,ref:n,target:d}))});var Jl;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(Jl||(Jl={}));var Zl;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Zl||(Zl={}));function hm(e,t){let{target:n,replace:a,state:i,preventScrollReset:s,relative:o,viewTransition:l}=t===void 0?{}:t,d=it(),c=an(),h=Mu(e,{relative:o});return g.useCallback(m=>{if(om(m,n)){m.preventDefault();let x=a!==void 0?a:Ba(c)===Ba(h);d(e,{replace:x,state:i,preventScrollReset:s,relative:o,viewTransition:l})}},[c,d,h,a,i,n,e,s,o,l])}const Iu=g.createContext(null),mm="admin@nexusrag.com",gm="admin@1234";function xm({children:e}){const[t,n]=g.useState(null),a=(s,o,l=!1)=>{if(l)return s===mm&&o===gm?(n({name:"Admin",email:s,role:"admin"}),{ok:!0}):{ok:!1,error:"Invalid admin credentials."};if(!s||!o)return{ok:!1,error:"Please fill in all fields."};const d=s.split("@")[0].replace(/[._]/g," ").replace(/\b\w/g,c=>c.toUpperCase());return n({name:d,email:s,role:"user"}),{ok:!0}},i=()=>n(null);return r.jsx(Iu.Provider,{value:{user:t,login:a,logout:i,isLoggedIn:!!t,isAdmin:(t==null?void 0:t.role)==="admin",isUser:(t==null?void 0:t.role)==="user"},children:e})}function Un(){return g.useContext(Iu)}const Tu=g.createContext(null);function vm({children:e}){const[t,n]=g.useState(()=>localStorage.getItem("nexus-theme")||"light");g.useEffect(()=>{document.documentElement.setAttribute("data-theme",t),localStorage.setItem("nexus-theme",t)},[t]);const a=()=>n(o=>o==="light"?"dark":"light"),i=()=>n("light"),s=()=>n("dark");return r.jsx(Tu.Provider,{value:{theme:t,toggle:a,setLight:i,setDark:s},children:e})}function ym(){return g.useContext(Tu)}const ed=["Healthcare","Finance","Traffic & Transport","Manufacturing","Agriculture","Legal Services"],td=["Healthcare","Finance","Traffic","Manufacturing","Agriculture","Legal","Logistics","Education"],bm=[{key:"hc",className:"project-card re",title:"Healthcare RAG",tag:"Healthcare · PubMedQA",desc:"Instant, cited answers from millions of medical papers for clinicians and researchers.",visual:"Healthcare RAG",img:"/industries/healthcare.jpg"},{key:"fin",className:"project-card fin dark",title:"Finance Intelligence",tag:"Finance · FinQA · TAT-QA",desc:"Grounded answers on markets, risk and banking regulations — with source citations.",visual:"Finance Intelligence",img:"/industries/finance.jpg"},{key:"traffic",className:"project-card health",title:"Traffic & Transport",tag:"Traffic · Driving Law",desc:"Road rules, accident analysis and transport policy Q&A for operators and planners.",visual:"Traffic & Transport",img:"/industries/traffic.jpg"}],jm=[{quote:"NexusRAG transformed how our team accesses clinical research. We get accurate, cited answers in seconds instead of spending hours in PubMed — it's changed our workflow entirely.",name:"Dr. Priya Sharma",role:"Head of Research, HealthFirst"},{quote:"The Finance RAG module gave our analysts instant grounded answers on regulatory filings and market data. Adoption was immediate — the accuracy is genuinely impressive.",name:"Arjun Mehta",role:"CTO, Ledger Analytics"}],wm=[{num:"01",icon:"RAG",title:"Retrieval-Augmented Generation",desc:"Ground every answer in your own documents. NexusRAG retrieves the most relevant passages and generates precise, cited responses — no hallucinations."},{num:"02",icon:"MI",title:"Multi-Industry Knowledge Bases",desc:"25 industry-specific corpora out of the box — Healthcare, Finance, Traffic, Manufacturing and more. Each tuned to its domain's vocabulary and standards."},{num:"03",icon:"DS",title:"Document Management",desc:"Upload PDFs, CSVs, DOCX and more to any industry knowledge base. Share, query and cite them — all from one dashboard."},{num:"04",icon:"API",title:"API & Integrations",desc:"Connect NexusRAG to your existing tools via REST API. Works with LangChain, Pinecone, Weaviate and major LLM providers."}],km=[{key:"cc1",className:"creative-card cc1",top:"Healthcare",bottom:"RAG demo",img:"/industries/healthcare.jpg"},{key:"cc2",className:"creative-card cc2",top:"Finance",bottom:"query engine",img:"/industries/finance.jpg"},{key:"cc3",className:"creative-card cc3",top:"Traffic",bottom:"knowledge base",img:"/industries/traffic.jpg"},{key:"cc4",className:"creative-card cc4",top:"Manufacturing",bottom:"AI assistant",img:"/industries/manufacturing.jpg"}];function Ge({as:e="div",className:t="",children:n,...a}){const i=g.useRef(null),[s,o]=g.useState(!1);return g.useEffect(()=>{const l=i.current;if(!l)return;const d=new IntersectionObserver(([c])=>{c.isIntersecting&&(o(!0),d.unobserve(l))},{threshold:.15});return d.observe(l),()=>d.disconnect()},[]),r.jsx(e,{ref:i,className:`${t} reveal${s?" in":""}`,...a,children:n})}function ta({as:e="div",className:t="",children:n,...a}){const i=g.useRef(null),[s,o]=g.useState(!1);return g.useEffect(()=>{const l=i.current;if(!l)return;const d=new IntersectionObserver(([c])=>{c.isIntersecting&&(o(!0),d.unobserve(l))},{threshold:.15});return d.observe(l),()=>d.disconnect()},[]),r.jsx(e,{ref:i,className:`${t} reveal-stagger${s?" in":""}`,...a,children:n})}function Ri({target:e,label:t}){const n=g.useRef(null),[a,i]=g.useState(0);return g.useEffect(()=>{const s=n.current;if(!s)return;const o=new IntersectionObserver(([l])=>{if(!l.isIntersecting)return;o.unobserve(s);let d=0;const c=Math.max(1,Math.round(e/40)),h=setInterval(()=>{d+=c,d>=e&&(d=e,clearInterval(h)),i(d)},28)},{threshold:.5});return o.observe(s),()=>o.disconnect()},[e]),r.jsxs("div",{className:"stat",ref:n,children:[r.jsx("span",{className:"num",children:a}),r.jsx("span",{className:"lbl",children:t})]})}function Nm(){const[e,t]=g.useState(0);return g.useEffect(()=>{const n=setInterval(()=>{t(a=>(a+1)%ed.length)},2200);return()=>clearInterval(n)},[]),r.jsx("span",{className:"cyc-word",children:r.jsx("span",{className:"active",children:ed[e]},e)})}function Sm(){const e=g.useRef(null),t=[g.useRef(null),g.useRef(null),g.useRef(null),g.useRef(null)],n=g.useRef({x:0,y:0}),a=g.useRef([{x:0,y:0},{x:0,y:0},{x:0,y:0},{x:0,y:0}]),i=g.useRef(!1),s=[.06,.1,.16,.28];g.useEffect(()=>{let l;const d=()=>{t.forEach((c,h)=>{const m=i.current?n.current:{x:0,y:0};a.current[h].x+=(m.x-a.current[h].x)*s[h],a.current[h].y+=(m.y-a.current[h].y)*s[h];const x=c.current;x&&(x.style.transform=`translate(calc(-50% + ${a.current[h].x}px), calc(-50% + ${a.current[h].y}px))`)}),l=requestAnimationFrame(d)};return l=requestAnimationFrame(d),()=>cancelAnimationFrame(l)},[]);const o=l=>{const d=e.current.getBoundingClientRect();n.current={x:l.clientX-d.left-d.width/2,y:l.clientY-d.top-d.height/2}};return r.jsxs("div",{id:"circleStage",ref:e,onMouseEnter:()=>i.current=!0,onMouseLeave:()=>i.current=!1,onMouseMove:o,children:[r.jsx("div",{className:"ring r1",ref:t[0]}),r.jsx("div",{className:"ring r2",ref:t[1]}),r.jsx("div",{className:"ring r3",ref:t[2]}),r.jsx("div",{className:"ring r4",ref:t[3]})]})}function zm(){const e=g.useRef(null);return g.useEffect(()=>{const t=n=>{e.current&&(e.current.style.left=`${n.clientX}px`,e.current.style.top=`${n.clientY}px`)};return window.addEventListener("mousemove",t),()=>window.removeEventListener("mousemove",t)},[]),r.jsxs("div",{className:"meridian-home",children:[r.jsx("style",{children:`
/* Home.css — styles for Home.jsx (Meridian multi-industry studio homepage)
   Import Space Grotesk / Inter / IBM Plex Mono in your app's index.html or _document,
   e.g.:
   <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@400;500;600;700&family=IBM+Plex+Mono:wght@400;500&display=swap" rel="stylesheet">
*/

.meridian-home {
  --ink: #0c0f17;
  --ink-2: #141928;
  --navy: #0a1730;
  --paper: #f1f0fa;
  --paper-2: #e8e6f6;
  --indigo: #4f46e5;
  --indigo-2: #7c74ff;
  --amber: #ffb020;
  --coral: #ff6452;
  --slate: #5b6270;
  --slate-l: #9296a6;
  --line: rgba(12, 15, 23, 0.1);
  --line-dark: rgba(255, 255, 255, 0.12);
  --radius: 22px;

  font-family: "Inter", sans-serif;
  background: var(--paper);
  color: var(--ink);
  overflow-x: hidden;
  -webkit-font-smoothing: antialiased;
  scroll-behavior: smooth;
}

.meridian-home *,
.meridian-home *::before,
.meridian-home *::after {
  box-sizing: border-box;
}

.meridian-home ::selection {
  background: var(--indigo);
  color: #fff;
}

.meridian-home h1,
.meridian-home h2,
.meridian-home h3,
.meridian-home .display {
  font-family: "Space Grotesk", sans-serif;
  margin: 0;
}

.meridian-home .mono {
  font-family: "IBM Plex Mono", monospace;
}

.meridian-home a {
  color: inherit;
  text-decoration: none;
}

.meridian-home img {
  max-width: 100%;
  display: block;
}

.meridian-home .wrap {
  max-width: 1240px;
  margin: 0 auto;
  padding: 0 32px;
}

.meridian-home section {
  position: relative;
}

/* ===== reveal on scroll ===== */
.meridian-home .reveal {
  opacity: 0;
  transform: translateY(28px);
  transition: opacity 0.9s cubic-bezier(0.2, 0.7, 0.2, 1), transform 0.9s cubic-bezier(0.2, 0.7, 0.2, 1);
}
.meridian-home .reveal.in {
  opacity: 1;
  transform: translateY(0);
}
.meridian-home .reveal-stagger > * {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.7s ease, transform 0.7s ease;
}
.meridian-home .reveal-stagger.in > * {
  opacity: 1;
  transform: translateY(0);
}
.meridian-home .reveal-stagger.in > *:nth-child(1) {
  transition-delay: 0.03s;
}
.meridian-home .reveal-stagger.in > *:nth-child(2) {
  transition-delay: 0.11s;
}
.meridian-home .reveal-stagger.in > *:nth-child(3) {
  transition-delay: 0.19s;
}
.meridian-home .reveal-stagger.in > *:nth-child(4) {
  transition-delay: 0.27s;
}
.meridian-home .reveal-stagger.in > *:nth-child(5) {
  transition-delay: 0.35s;
}

@media (prefers-reduced-motion: reduce) {
  .meridian-home .reveal,
  .meridian-home .reveal-stagger > * {
    opacity: 1 !important;
    transform: none !important;
    transition: none !important;
  }
  .meridian-home * {
    animation: none !important;
  }
}

.meridian-home :focus-visible {
  outline: 2px solid var(--indigo);
  outline-offset: 3px;
  border-radius: 4px;
}

/* ===== nav ===== */
.meridian-home nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 22px 40px;
  background: var(--navy);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}
.meridian-home .brand {
  display: flex;
  align-items: center;
  gap: 10px;
  font-weight: 600;
  font-size: 19px;
  color: #fff;
}
.meridian-home .brand .mark {
  width: 22px;
  height: 22px;
  position: relative;
}
.meridian-home .brand .mark svg {
  width: 100%;
  height: 100%;
}
.meridian-home .nav-links {
  display: flex;
  gap: 34px;
  font-size: 14px;
  color: #fff;
}
.meridian-home .nav-links a {
  opacity: 0.75;
  transition: opacity 0.25s;
}
.meridian-home .nav-links a:hover {
  opacity: 1;
}
.meridian-home .nav-cta {
  color: #fff;
  font-size: 14px;
  border: 1px solid rgba(255, 255, 255, 0.5);
  padding: 9px 18px;
  border-radius: 100px;
  transition: all 0.25s;
}
.meridian-home .nav-cta:hover {
  background: #fff;
  color: #000;
}
.meridian-home .nav-auth {
  display: flex;
  align-items: center;
  gap: 18px;
}
.meridian-home .nav-login {
  color: #fff;
  font-size: 14px;
  opacity: 0.75;
  transition: opacity 0.25s;
}
.meridian-home .nav-login:hover {
  opacity: 1;
}
.meridian-home .nav-signup {
  color: #fff;
  font-size: 14px;
  opacity: 0.75;
  transition: opacity 0.25s;
  border-right: 1px solid rgba(255, 255, 255, 0.3);
  padding-right: 18px;
}
.meridian-home .nav-signup:hover {
  opacity: 1;
}
@media (max-width: 820px) {
  .meridian-home .nav-links {
    display: none;
  }
  .meridian-home .nav-auth {
    gap: 10px;
  }
  .meridian-home .nav-login {
    display: none;
  }
  .meridian-home .nav-signup {
    display: none;
  }
}

/* ===== hero ===== */
.meridian-home .hero {
  background: radial-gradient(ellipse 120% 90% at 50% -10%, #1a2140 0%, var(--ink) 55%);
  color: #fff;
  padding: 150px 0 90px;
  overflow: hidden;
  position: relative;
}
.meridian-home .hero::before {
  content: "";
  position: absolute;
  inset: 0;
  background-image: radial-gradient(circle at 15% 30%, rgba(79, 70, 229, 0.35), transparent 45%),
    radial-gradient(circle at 85% 15%, rgba(255, 176, 32, 0.18), transparent 40%);
  pointer-events: none;
}
.meridian-home .hero-top {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 40px;
  position: relative;
}
.meridian-home .eyebrow {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-family: "IBM Plex Mono", monospace;
  font-size: 12.5px;
  letter-spacing: 0.06em;
  color: var(--indigo-2);
  text-transform: uppercase;
  margin-bottom: 22px;
}
.meridian-home .eyebrow::before {
  content: "";
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: var(--amber);
  box-shadow: 0 0 0 4px rgba(255, 176, 32, 0.2);
}
.meridian-home h1.headline {
  font-size: clamp(38px, 6vw, 76px);
  line-height: 1.03;
  font-weight: 600;
  letter-spacing: -0.02em;
  max-width: 850px;
}
.meridian-home h1.headline .thin {
  color: var(--slate-l);
  font-weight: 400;
}
.meridian-home .hero-sub {
  max-width: 380px;
  font-size: 15.5px;
  line-height: 1.6;
  color: #c9cbdb;
  margin-top: 8px;
}
.meridian-home .hero-people {
  display: flex;
  align-items: center;
  gap: 14px;
  margin-top: 26px;
}
.meridian-home .avatars {
  display: flex;
}
.meridian-home .avatars span {
  width: 38px;
  height: 38px;
  border-radius: 50%;
  border: 2px solid var(--ink);
  background: linear-gradient(135deg, var(--indigo), var(--coral));
  margin-left: -10px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  font-weight: 600;
  color: #fff;
}
.meridian-home .avatars span:first-child {
  margin-left: 0;
}
.meridian-home .watch-btn {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 13.5px;
  color: #fff;
}
.meridian-home .watch-btn .circ {
  width: 34px;
  height: 34px;
  border-radius: 50%;
  background: #fff;
  color: #000;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.3s;
}
.meridian-home .watch-btn:hover .circ {
  transform: scale(1.12);
}

.meridian-home .industry-cycler {
  margin-top: 64px;
  display: flex;
  align-items: center;
  gap: 14px;
  font-family: "IBM Plex Mono", monospace;
  font-size: 13px;
  color: var(--slate-l);
}
.meridian-home .cyc-word {
  color: #fff;
  font-weight: 500;
  min-width: 150px;
  display: inline-block;
  position: relative;
  height: 20px;
  overflow: hidden;
}
.meridian-home .cyc-word span {
  position: absolute;
  left: 0;
  top: 0;
  opacity: 0;
  transform: translateY(14px);
  transition: opacity 0.5s ease, transform 0.5s ease;
}
.meridian-home .cyc-word span.active {
  opacity: 1;
  transform: translateY(0);
}

.meridian-home .pills-row {
  display: flex;
  margin-top: 56px;
  border-top: 1px solid var(--line-dark);
  position: relative;
}
.meridian-home .pills-row .pill {
  flex: 1;
  padding: 20px 4px 0;
  font-size: 13.5px;
  color: #c9cbdb;
  border-right: 1px solid var(--line-dark);
  text-align: center;
  transition: color 0.3s;
  cursor: default;
}
.meridian-home .pills-row .pill:hover {
  color: #fff;
}
.meridian-home .pills-row .pill:last-child {
  border-right: none;
}
@media (max-width: 760px) {
  .meridian-home .pills-row {
    flex-wrap: wrap;
  }
  .meridian-home .pills-row .pill {
    flex: 1 1 50%;
    border-bottom: 1px solid var(--line-dark);
    padding-bottom: 14px;
  }
}

/* marquee */
.meridian-home .marquee-wrap {
  background: var(--ink-2);
  padding: 22px 0;
  overflow: hidden;
  border-top: 1px solid var(--line-dark);
  border-bottom: 1px solid var(--line-dark);
}
.meridian-home .marquee {
  display: flex;
  width: max-content;
  animation: meridian-scroll 32s linear infinite;
}
.meridian-home .marquee:hover {
  animation-play-state: paused;
}
.meridian-home .marquee span {
  font-family: "Space Grotesk", sans-serif;
  font-size: 22px;
  color: var(--slate-l);
  padding: 0 34px;
  white-space: nowrap;
  display: flex;
  align-items: center;
  gap: 14px;
}
.meridian-home .marquee span::after {
  content: "✦";
  font-size: 12px;
  color: var(--indigo-2);
}
@keyframes meridian-scroll {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-50%);
  }
}

/* ===== section headers ===== */
.meridian-home .sec-head {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  gap: 24px;
  margin-bottom: 52px;
  flex-wrap: wrap;
}
.meridian-home .sec-head h2 {
  font-size: clamp(30px, 4vw, 46px);
  font-weight: 600;
  letter-spacing: -0.01em;
}
.meridian-home .sec-head p {
  max-width: 340px;
  color: var(--slate);
  font-size: 14.5px;
  line-height: 1.6;
}
.meridian-home .sec-label {
  font-family: "IBM Plex Mono", monospace;
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--indigo);
  margin-bottom: 14px;
  display: block;
}

/* ===== stats / projects ===== */
.meridian-home .stats-section {
  padding: 120px 0 60px;
}
.meridian-home .stat-row {
  display: flex;
  gap: 70px;
  flex-wrap: wrap;
  margin-bottom: 16px;
}
.meridian-home .stat {
  display: flex;
  align-items: flex-end;
  gap: 10px;
}
.meridian-home .stat .num {
  font-size: clamp(48px, 7vw, 84px);
  font-weight: 600;
  line-height: 0.9;
  font-family: "Space Grotesk", sans-serif;
}
.meridian-home .stat .lbl {
  font-size: 13px;
  color: var(--slate);
  padding-bottom: 10px;
  max-width: 110px;
  line-height: 1.3;
}

.meridian-home .project-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 22px;
  margin-top: 70px;
}
@media (max-width: 900px) {
  .meridian-home .project-grid {
    grid-template-columns: 1fr;
  }
}
.meridian-home .project-card {
  position: relative;
  border-radius: var(--radius);
  overflow: hidden;
  aspect-ratio: 4 / 5;
  background: linear-gradient(135deg, #e3e1f5, #d6d3ee);
  cursor: pointer;
  transform: translateY(0);
  transition: transform 0.5s cubic-bezier(0.2, 0.8, 0.2, 1), box-shadow 0.5s;
}
.meridian-home .project-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 30px 60px -20px rgba(12, 15, 23, 0.35);
}
.meridian-home .project-card .pc-visual {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 26px;
  font-family: "Space Grotesk", sans-serif;
  font-weight: 600;
  font-size: 22px;
  line-height: 1.2;
  color: var(--ink);
  text-align: center;
}
.meridian-home .project-card.dark .pc-visual {
  color: #fff;
}
.meridian-home .project-card.re {
  background: linear-gradient(160deg, #e7c9a8, #c98f5c);
}
.meridian-home .project-card.fin {
  background: linear-gradient(160deg, #101625, #1e2a45);
  color: #fff;
}
.meridian-home .project-card.health {
  background: linear-gradient(160deg, #c9ede0, #7fd4b5);
}
.meridian-home .pc-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(12, 15, 23, 0.88) 0%, rgba(12, 15, 23, 0) 55%);
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 24px;
  opacity: 0;
  transition: opacity 0.4s;
}
.meridian-home .project-card:hover .pc-overlay {
  opacity: 1;
}
.meridian-home .pc-overlay .pc-tag {
  display: inline-flex;
  gap: 6px;
  font-family: "IBM Plex Mono", monospace;
  font-size: 11px;
  color: var(--amber);
  margin-bottom: 8px;
}
.meridian-home .pc-overlay h4 {
  color: #fff;
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 6px;
}
.meridian-home .pc-overlay p {
  color: #c9cbdb;
  font-size: 13px;
  line-height: 1.5;
  margin: 0;
}
.meridian-home .pc-chip {
  position: absolute;
  top: 20px;
  right: 20px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.92);
  display: flex;
  align-items: center;
  justify-content: center;
  transform: scale(0) rotate(-30deg);
  transition: transform 0.4s cubic-bezier(0.3, 1.4, 0.4, 1);
}
.meridian-home .project-card:hover .pc-chip {
  transform: scale(1) rotate(0);
}

/* ===== testimonials ===== */
.meridian-home .testi-section {
  padding: 100px 0;
}
.meridian-home .testi-grid {
  display: grid;
  grid-template-columns: 0.85fr 1fr 1fr;
  gap: 20px;
  margin-top: 20px;
}
@media (max-width: 900px) {
  .meridian-home .testi-grid {
    grid-template-columns: 1fr;
  }
}
.meridian-home .clutch-card {
  background: var(--ink);
  color: #fff;
  border-radius: var(--radius);
  padding: 34px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 280px;
  background-image: radial-gradient(circle at 30% 20%, rgba(79, 70, 229, 0.5), transparent 60%);
}
.meridian-home .clutch-card .stars {
  color: var(--amber);
  font-size: 18px;
  letter-spacing: 2px;
}
.meridian-home .clutch-card .brand-mini {
  font-family: "Space Grotesk", sans-serif;
  font-weight: 700;
  font-size: 24px;
}
.meridian-home .clutch-card .cta-mini {
  align-self: flex-start;
  font-size: 12.5px;
  border: 1px solid rgba(255, 255, 255, 0.3);
  padding: 9px 16px;
  border-radius: 100px;
  transition: 0.3s;
  display: inline-block;
}
.meridian-home .clutch-card .cta-mini:hover {
  background: #fff;
  color: #000;
}
.meridian-home .testi-card {
  background: #fff;
  border: 1px solid var(--line);
  border-radius: var(--radius);
  padding: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: transform 0.4s, box-shadow 0.4s;
}
.meridian-home .testi-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 20px 40px -20px rgba(12, 15, 23, 0.2);
}
.meridian-home .testi-card .stars {
  color: var(--amber);
  font-size: 14px;
  margin-bottom: 16px;
}
.meridian-home .testi-card p {
  font-size: 14.5px;
  line-height: 1.65;
  color: var(--ink);
  margin: 0 0 22px;
}
.meridian-home .testi-who {
  display: flex;
  align-items: center;
  gap: 12px;
}
.meridian-home .testi-who .dot {
  width: 38px;
  height: 38px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--indigo-2), var(--coral));
  flex-shrink: 0;
}
.meridian-home .testi-who .name {
  font-size: 13.5px;
  font-weight: 600;
}
.meridian-home .testi-who .role {
  font-size: 12px;
  color: var(--slate);
}

.meridian-home .clients-row {
  margin-top: 80px;
  padding-top: 44px;
  border-top: 1px solid var(--line);
  display: flex;
  align-items: center;
  gap: 46px;
  flex-wrap: wrap;
  justify-content: space-between;
}
.meridian-home .clients-row .cl-label {
  font-size: 12.5px;
  color: var(--slate);
  font-family: "IBM Plex Mono", monospace;
}
.meridian-home .clients-logos {
  display: flex;
  gap: 42px;
  flex-wrap: wrap;
  align-items: center;
}
.meridian-home .clients-logos span {
  font-family: "Space Grotesk", sans-serif;
  font-weight: 600;
  font-size: 17px;
  color: var(--slate);
  opacity: 0.6;
  transition: opacity 0.3s, color 0.3s;
}
.meridian-home .clients-logos span:hover {
  opacity: 1;
  color: var(--ink);
}

/* ===== big tagline ===== */
.meridian-home .tagline-section {
  padding: 120px 0;
  text-align: center;
  overflow: hidden;
}
.meridian-home .tagline-section h2 {
  font-size: clamp(48px, 10vw, 130px);
  font-weight: 600;
  letter-spacing: -0.03em;
  line-height: 1;
  display: flex;
  justify-content: center;
  gap: 0.28em;
  flex-wrap: wrap;
}
.meridian-home .tagline-section h2 .accent {
  color: transparent;
  -webkit-text-stroke: 1.5px var(--ink);
  position: relative;
}
.meridian-home .tagline-section h2 .accent .diamond {
  position: absolute;
  top: -0.35em;
  right: -0.55em;
  width: 0.28em;
  height: 0.28em;
  background: var(--indigo);
  clip-path: polygon(50% 0, 100% 50%, 50% 100%, 0 50%);
  animation: meridian-spin 6s linear infinite;
}
@keyframes meridian-spin {
  to {
    transform: rotate(360deg);
  }
}

/* ===== services ===== */
.meridian-home .services-section {
  padding: 0 0 120px;
}
.meridian-home .services-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1px;
  background: var(--line);
  border: 1px solid var(--line);
  border-radius: var(--radius);
  overflow: hidden;
}
@media (max-width: 760px) {
  .meridian-home .services-grid {
    grid-template-columns: 1fr;
  }
}
.meridian-home .service-item {
  background: #fff;
  padding: 44px;
  transition: background 0.35s;
}
.meridian-home .service-item:hover {
  background: var(--paper-2);
}
.meridian-home .service-item .si-top {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 26px;
}
.meridian-home .service-item .si-icon {
  width: 46px;
  height: 46px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--ink);
  color: #fff;
  font-family: "Space Grotesk", sans-serif;
  font-weight: 600;
}
.meridian-home .service-item .si-num {
  font-family: "IBM Plex Mono", monospace;
  font-size: 12px;
  color: var(--slate-l);
}
.meridian-home .service-item h3 {
  font-size: 22px;
  font-weight: 600;
  margin-bottom: 10px;
}
.meridian-home .service-item p {
  font-size: 14px;
  color: var(--slate);
  line-height: 1.6;
  max-width: 340px;
  margin: 0;
}

/* ===== expertise ===== */
.meridian-home .expertise-section {
  padding: 0 0 120px;
}
.meridian-home .expertise-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: start;
}
@media (max-width: 860px) {
  .meridian-home .expertise-grid {
    grid-template-columns: 1fr;
    gap: 40px;
  }
}
.meridian-home .exp-cols {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
  margin-top: 26px;
}
.meridian-home .exp-cols .col-label {
  font-size: 12px;
  color: var(--slate-l);
  font-family: "IBM Plex Mono", monospace;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  margin-bottom: 14px;
}
.meridian-home .exp-cols ul {
  margin: 0;
  padding: 0;
}
.meridian-home .exp-cols li {
  list-style: none;
  font-size: 16px;
  padding: 10px 0;
  border-bottom: 1px solid var(--line);
  transition: padding-left 0.3s, color 0.3s;
}
.meridian-home .exp-cols li:hover {
  padding-left: 8px;
  color: var(--indigo);
}
.meridian-home .exp-card {
  background: var(--amber);
  border-radius: var(--radius);
  padding: 32px;
  position: relative;
  overflow: hidden;
}
.meridian-home .exp-card::after {
  content: "";
  position: absolute;
  width: 220px;
  height: 220px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.25);
  top: -90px;
  right: -90px;
}
.meridian-home .exp-card .exp-eyebrow {
  font-family: "IBM Plex Mono", monospace;
  font-size: 12px;
  text-transform: uppercase;
  margin-bottom: 14px;
  opacity: 0.75;
}
.meridian-home .exp-card p {
  font-size: 19px;
  font-weight: 500;
  line-height: 1.4;
  margin-bottom: 26px;
  position: relative;
}
.meridian-home .exp-founder {
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
}
.meridian-home .exp-founder .who {
  display: flex;
  align-items: center;
  gap: 12px;
}
.meridian-home .exp-founder .dot {
  width: 42px;
  height: 42px;
  border-radius: 50%;
  background: var(--ink);
}
.meridian-home .exp-founder .name {
  font-size: 13.5px;
  font-weight: 600;
}
.meridian-home .exp-founder .role {
  font-size: 11.5px;
  opacity: 0.7;
}
.meridian-home .exp-founder .go {
  width: 38px;
  height: 38px;
  border-radius: 50%;
  background: var(--ink);
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.3s;
}
.meridian-home .exp-founder .go:hover {
  transform: translateX(4px);
}

/* ===== playground / interactive ===== */
.meridian-home .play-section {
  padding: 130px 0;
  text-align: center;
  position: relative;
  overflow: hidden;
  background: var(--paper-2);
}
.meridian-home .play-section h2 {
  font-size: clamp(30px, 4.5vw, 48px);
  font-weight: 600;
  margin-bottom: 6px;
}
.meridian-home .play-section .sub {
  color: var(--slate);
  font-size: 14px;
  margin-bottom: 70px;
}
.meridian-home #circleStage {
  width: 100%;
  height: 360px;
  position: relative;
  cursor: none;
}
.meridian-home .ring {
  position: absolute;
  border-radius: 50%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.meridian-home .ring.r1 {
  width: 340px;
  height: 340px;
  background: rgba(255, 176, 32, 0.35);
}
.meridian-home .ring.r2 {
  width: 220px;
  height: 220px;
  background: rgba(255, 176, 32, 0.55);
}
.meridian-home .ring.r3 {
  width: 110px;
  height: 110px;
  background: var(--indigo);
}
.meridian-home .ring.r4 {
  width: 30px;
  height: 30px;
  background: #fff;
}
.meridian-home .play-hint {
  margin-top: 70px;
  font-size: 12.5px;
  color: var(--slate-l);
  font-family: "IBM Plex Mono", monospace;
}

/* ===== behind the scenes ===== */
.meridian-home .scene-section {
  padding: 0 0 30px;
}
.meridian-home .scene-board {
  background: linear-gradient(135deg, #4f46e5, #6d28d9);
  border-radius: var(--radius);
  min-height: 440px;
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 40px;
}
.meridian-home .scene-board h3 {
  color: #fff;
  font-size: clamp(24px, 4vw, 40px);
  font-weight: 600;
  max-width: 640px;
  line-height: 1.25;
  margin: 0 auto;
}
.meridian-home .scene-board .sub {
  color: #d8d5ff;
  font-size: 13.5px;
  margin-top: 18px;
}
.meridian-home .bubble {
  position: absolute;
  background: #fff;
  border-radius: 14px 14px 14px 4px;
  padding: 8px 14px;
  font-size: 12px;
  font-weight: 600;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.25);
  animation: meridian-float 5s ease-in-out infinite;
}
.meridian-home .bubble.tag {
  border-radius: 100px;
  color: #fff;
  padding: 6px 14px;
}
@keyframes meridian-float {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-12px);
  }
}
.meridian-home .b1 {
  top: 14%;
  left: 10%;
  animation-delay: 0.2s;
}
.meridian-home .b2 {
  top: 20%;
  right: 12%;
  background: #4f46e5;
  color: #fff;
  animation-delay: 1.1s;
}
.meridian-home .b3 {
  bottom: 22%;
  left: 14%;
  background: var(--coral);
  color: #fff;
  animation-delay: 0.6s;
}
.meridian-home .b4 {
  bottom: 16%;
  right: 16%;
  animation-delay: 1.6s;
}
.meridian-home .b5 {
  top: 50%;
  left: 6%;
  background: var(--amber);
  animation-delay: 0.9s;
}
.meridian-home .b6 {
  top: 46%;
  right: 8%;
  animation-delay: 1.4s;
}

/* ===== creative grid ===== */
.meridian-home .creative-section {
  padding: 100px 0;
}
.meridian-home .creative-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 18px;
  margin-top: 50px;
}
@media (max-width: 900px) {
  .meridian-home .creative-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
.meridian-home .creative-card {
  aspect-ratio: 3 / 4;
  border-radius: 18px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-family: "Space Grotesk", sans-serif;
  font-weight: 600;
  font-size: 15px;
  transition: transform 0.4s;
}
.meridian-home .creative-card:hover {
  transform: translateY(-8px) rotate(-1deg);
}
.meridian-home .cc1 {
  background: #101625;
  color: #fff;
}
.meridian-home .cc2 {
  color: #fff;
}
.meridian-home .cc3 {
  color: #fff;
}
.meridian-home .cc4 {
  background: #141928;
  color: #fff;
  background-image: linear-gradient(160deg, #1e2a45, #0c0f17);
}

/* ===== about ===== */
.meridian-home .about-section {
  padding: 60px 0 130px;
}
.meridian-home .about-text {
  font-size: clamp(22px, 3.4vw, 38px);
  line-height: 1.5;
  font-weight: 500;
  max-width: 920px;
  margin: 0;
}
.meridian-home .about-text .chip {
  display: inline-block;
  width: 1.6em;
  height: 1em;
  border-radius: 100px;
  vertical-align: middle;
  background: linear-gradient(135deg, var(--indigo-2), var(--coral));
  margin: 0 4px;
  transform: translateY(-2px);
}

.meridian-home .about-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: center;
}
@media (max-width: 860px) {
  .meridian-home .about-grid {
    grid-template-columns: 1fr;
    gap: 40px;
  }
}
.meridian-home .about-img-wrap {
  position: relative;
  border-radius: 24px;
  overflow: hidden;
  background: #080e1c;
  box-shadow: 0 24px 60px -20px rgba(79,70,229,0.35), 0 0 0 1px rgba(79,70,229,0.15);
  transition: transform 0.5s cubic-bezier(0.2,0.8,0.2,1), box-shadow 0.5s;
}
.meridian-home .about-img-wrap:hover {
  transform: translateY(-8px);
  box-shadow: 0 36px 80px -20px rgba(79,70,229,0.45), 0 0 0 1px rgba(79,70,229,0.25);
}
.meridian-home .about-img-wrap img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  border-radius: 24px;
}

/* ===== footer ===== */
.meridian-home footer {
  background: var(--ink);
  color: #fff;
  padding: 90px 0 34px;
  border-radius: 36px 36px 0 0;
}
.meridian-home .foot-top {
  display: flex;
  justify-content: space-between;
  gap: 40px;
  flex-wrap: wrap;
  padding-bottom: 70px;
  border-bottom: 1px solid var(--line-dark);
}
.meridian-home .foot-cta h2 {
  font-size: clamp(30px, 4.5vw, 48px);
  font-weight: 600;
  max-width: 440px;
  margin-bottom: 22px;
}
.meridian-home .foot-cta .become {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  background: var(--indigo);
  color: #fff;
  padding: 14px 26px;
  border-radius: 100px;
  font-size: 14.5px;
  font-weight: 500;
  transition: transform 0.3s, background 0.3s;
}
.meridian-home .foot-cta .become:hover {
  transform: translateX(4px);
  background: var(--indigo-2);
}
.meridian-home .foot-cta .email {
  margin-top: 22px;
  font-size: 13.5px;
  color: #9296a6;
}
.meridian-home .foot-cta .email a {
  color: #fff;
  text-decoration: underline;
  text-underline-offset: 3px;
}
.meridian-home .foot-cols {
  display: flex;
  gap: 70px;
  flex-wrap: wrap;
}
.meridian-home .foot-cols .fc h4 {
  font-size: 11.5px;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: #6b7080;
  margin-bottom: 16px;
  font-family: "IBM Plex Mono", monospace;
}
.meridian-home .foot-cols .fc a,
.meridian-home .foot-cols .fc p {
  display: block;
  font-size: 14px;
  color: #c9cbdb;
  margin: 0 0 11px;
}
.meridian-home .foot-cols .fc a:hover {
  color: #fff;
}
.meridian-home .foot-bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 28px;
  flex-wrap: wrap;
  gap: 14px;
}
.meridian-home .foot-bottom .brand {
  color: #fff;
}
.meridian-home .foot-bottom p {
  font-size: 12.5px;
  color: #6b7080;
  margin: 0;
}

/* cursor dot for playground */
.meridian-home .cdot {
  position: fixed;
  width: 8px;
  height: 8px;
  background: var(--indigo);
  border-radius: 50%;
  pointer-events: none;
  z-index: 9999;
  display: block;
  transform: translate(-50%, -50%);
}

`}),r.jsx("div",{className:"cdot",ref:e}),r.jsxs("nav",{children:[r.jsxs("div",{className:"brand",children:[r.jsx("span",{className:"mark",children:r.jsx("svg",{viewBox:"0 0 24 24",fill:"none",children:r.jsx("path",{d:"M3 21 L21 3 L21 21 Z",fill:"currentColor"})})}),"NexusRAG"]}),r.jsxs("div",{className:"nav-links",children:[r.jsx("a",{href:"#work",children:"Industries"}),r.jsx("a",{href:"#services",children:"Capabilities"}),r.jsx("a",{href:"#expertise",children:"Technology"}),r.jsx("a",{href:"#studio",children:"Team"})]}),r.jsxs("div",{className:"nav-auth",children:[r.jsx(I,{to:"/login",className:"nav-login",children:"Log in"}),r.jsx(I,{to:"/signup",className:"nav-signup",children:"Sign up"}),r.jsx(I,{to:"/chat",className:"nav-cta",children:"Try NexusRAG free"})]})]}),r.jsx("section",{className:"hero",children:r.jsxs("div",{className:"wrap",children:[r.jsxs("div",{className:"hero-top",children:[r.jsxs("div",{children:[r.jsx("span",{className:"eyebrow",children:"Multi-Industry AI Platform"}),r.jsxs("h1",{className:"headline",children:["One platform,",r.jsx("br",{}),r.jsx("span",{className:"thin",children:"every"})," industry."]})]}),r.jsx("div",{className:"hero-sub",children:"NexusRAG delivers grounded, cited answers from your documents — across Healthcare, Finance, Traffic, Manufacturing and 21 more industries."})]}),r.jsxs("div",{className:"hero-people",children:[r.jsxs("div",{className:"avatars",children:[r.jsx("span",{children:"HC"}),r.jsx("span",{children:"FI"}),r.jsx("span",{children:"TF"})]}),r.jsxs(I,{to:"/chat",className:"watch-btn",children:[r.jsx("span",{className:"circ",children:"▶"})," Start querying free"]})]}),r.jsxs("div",{className:"industry-cycler",children:["Currently answering questions for",r.jsx(Nm,{})]}),r.jsxs("div",{className:"pills-row",children:[r.jsx("div",{className:"pill",children:"RAG Pipeline"}),r.jsx("div",{className:"pill",children:"25 Industries"}),r.jsx("div",{className:"pill",children:"Document Upload"}),r.jsx("div",{className:"pill",children:"Cited Answers"})]})]})}),r.jsx("div",{className:"marquee-wrap",children:r.jsx("div",{className:"marquee",children:[...td,...td].map((t,n)=>r.jsx("span",{children:t},n))})}),r.jsxs("section",{className:"stats-section wrap",id:"work",children:[r.jsxs(Ge,{children:[r.jsx("span",{className:"sec-label",children:"Impact so far"}),r.jsxs("div",{className:"stat-row",children:[r.jsx(Ri,{target:25,label:"industries supported"}),r.jsx(Ri,{target:10,label:"million documents indexed"}),r.jsx(Ri,{target:99,label:"% answer accuracy"})]}),r.jsx("p",{style:{maxWidth:420,color:"var(--slate)",fontSize:14.5,lineHeight:1.6},children:"From healthcare diagnostics to financial regulations — NexusRAG retrieves the right answer from the right document, every time."})]}),r.jsx(ta,{className:"project-grid",children:bm.map(t=>r.jsxs("div",{className:t.className,style:t.img?{backgroundImage:`url(${t.img})`,backgroundSize:"cover",backgroundPosition:"center"}:{},children:[!t.img&&r.jsx("div",{className:"pc-visual",children:t.visual}),r.jsx("div",{className:"pc-chip",children:"↗"}),r.jsxs("div",{className:"pc-overlay",children:[r.jsx("div",{className:"pc-tag",children:t.tag}),r.jsx("h4",{children:t.title}),r.jsx("p",{children:t.desc})]})]},t.key))})]}),r.jsxs("section",{className:"testi-section wrap",children:[r.jsxs(Ge,{as:"div",className:"sec-head",children:[r.jsxs("div",{children:[r.jsx("span",{className:"sec-label",children:"User feedback"}),r.jsx("h2",{children:"Testimonials"})]}),r.jsx("p",{children:"Real results from teams across industries who rely on NexusRAG every day."})]}),r.jsxs(ta,{className:"testi-grid",children:[r.jsxs("div",{className:"clutch-card",children:[r.jsxs("div",{children:[r.jsx("div",{className:"brand-mini",children:"NexusRAG"}),r.jsx("div",{className:"stars",children:"★★★★★"})]}),r.jsxs("div",{children:[r.jsx("p",{className:"mono",style:{fontSize:12,color:"#c9cbdb",marginBottom:14},children:"4.9 average · 38 reviews"}),r.jsx(I,{to:"/chat",className:"cta-mini",children:"Try it free →"})]})]}),jm.map(t=>r.jsxs("div",{className:"testi-card",children:[r.jsxs("div",{children:[r.jsx("div",{className:"stars",children:"★★★★★"}),r.jsx("p",{children:t.quote})]}),r.jsxs("div",{className:"testi-who",children:[r.jsx("div",{className:"dot"}),r.jsxs("div",{children:[r.jsx("div",{className:"name",children:t.name}),r.jsx("div",{className:"role",children:t.role})]})]})]},t.name))]}),r.jsxs(Ge,{as:"div",className:"clients-row",children:[r.jsx("span",{className:"cl-label",children:"Trusted by teams across sectors"}),r.jsxs("div",{className:"clients-logos",children:[r.jsx("span",{children:"HealthFirst"}),r.jsx("span",{children:"Ledger Analytics"}),r.jsx("span",{children:"TrafficIQ"}),r.jsx("span",{children:"AgriSense"}),r.jsx("span",{children:"LexAI"})]})]})]}),r.jsx(Ge,{as:"section",className:"tagline-section wrap",children:r.jsxs("h2",{children:["We speak every",r.jsx("br",{}),"industry's"," ",r.jsxs("span",{className:"accent",children:["language",r.jsx("span",{className:"diamond"})]}),"."]})}),r.jsxs("section",{className:"services-section wrap",id:"services",children:[r.jsxs(Ge,{as:"div",className:"sec-head",children:[r.jsxs("div",{children:[r.jsx("span",{className:"sec-label",children:"Capabilities"}),r.jsx("h2",{children:"What NexusRAG does"})]}),r.jsx("p",{children:"Four core capabilities that make NexusRAG the definitive multi-industry AI platform."})]}),r.jsx(ta,{className:"services-grid",children:wm.map(t=>r.jsxs("div",{className:"service-item",children:[r.jsxs("div",{className:"si-top",children:[r.jsx("div",{className:"si-icon",children:t.icon}),r.jsx("span",{className:"si-num",children:t.num})]}),r.jsx("h3",{children:t.title}),r.jsx("p",{children:t.desc})]},t.num))})]}),r.jsx("section",{className:"expertise-section wrap",id:"expertise",children:r.jsxs("div",{className:"expertise-grid",children:[r.jsxs(Ge,{children:[r.jsx("span",{className:"sec-label",children:"What we know"}),r.jsx("h2",{style:{fontSize:"clamp(28px,4vw,42px)",fontWeight:600},children:"Expertise"}),r.jsxs("div",{className:"exp-cols",children:[r.jsxs("div",{children:[r.jsx("div",{className:"col-label",children:"Specialization"}),r.jsxs("ul",{children:[r.jsx("li",{children:"Retrieval-Augmented Generation"}),r.jsx("li",{children:"Multi-industry NLP"}),r.jsx("li",{children:"Document indexing & search"}),r.jsx("li",{children:"Cited answer generation"})]})]}),r.jsxs("div",{children:[r.jsx("div",{className:"col-label",children:"Industries"}),r.jsxs("ul",{children:[r.jsx("li",{children:"Healthcare & Medicine"}),r.jsx("li",{children:"Finance & Banking"}),r.jsx("li",{children:"Traffic & Transport"}),r.jsx("li",{children:"Manufacturing & Agriculture"})]})]})]})]}),r.jsxs(Ge,{className:"exp-card",children:[r.jsx("div",{className:"exp-eyebrow",children:"Why it works"}),r.jsx("p",{children:"Our RAG pipeline retrieves only the most relevant passages from your documents, then generates answers grounded in evidence — so every response is accurate, traceable and industry-specific."}),r.jsxs("div",{className:"exp-founder",children:[r.jsxs("div",{className:"who",children:[r.jsx("div",{className:"dot"}),r.jsxs("div",{children:[r.jsx("div",{className:"name",children:"Meghna Rao"}),r.jsx("div",{className:"role",children:"Co-founder & CTO"})]})]}),r.jsx(I,{to:"/chat",className:"go",children:"→"})]})]})]})}),r.jsxs(Ge,{as:"section",className:"play-section",children:[r.jsx("h2",{children:"Let's play a bit."}),r.jsx("div",{className:"sub",children:"Move your cursor across the field."}),r.jsx(Sm,{}),r.jsx("div",{className:"play-hint",children:"// no agenda here, just a bit of delight"})]}),r.jsx("section",{className:"scene-section wrap",id:"studio",children:r.jsxs(Ge,{className:"scene-board",children:[r.jsx("div",{className:"bubble b1",children:"Meghna"}),r.jsx("div",{className:"bubble tag b2",children:'"context retrieved"'}),r.jsx("div",{className:"bubble tag b3",children:"Arjun"}),r.jsx("div",{className:"bubble b4",children:"Ravi"}),r.jsx("div",{className:"bubble tag b5",children:'"accuracy: 99%"'}),r.jsx("div",{className:"bubble b6",children:"Priya"}),r.jsxs("div",{children:[r.jsxs("h3",{children:["What's powering NexusRAG?",r.jsx("br",{}),"Come see inside."]}),r.jsx("div",{className:"sub",children:"Open research, open models, grounded in your own data."})]})]})}),r.jsxs("section",{className:"creative-section wrap",children:[r.jsxs(Ge,{as:"div",className:"sec-head",children:[r.jsxs("div",{children:[r.jsx("span",{className:"sec-label",children:"Live demos"}),r.jsx("h2",{children:"See NexusRAG in action across industries"})]}),r.jsx(I,{to:"/chat",style:{border:"1px solid var(--line)",padding:"9px 18px",borderRadius:100,fontSize:13},children:"Try the demo →"})]}),r.jsx(ta,{className:"creative-grid",children:km.map(t=>r.jsxs("div",{className:t.className,style:t.img?{backgroundImage:`linear-gradient(to top, rgba(5,8,18,0.75) 0%, rgba(5,8,18,0.15) 55%), url(${t.img})`,backgroundSize:"cover",backgroundPosition:"center"}:{},children:[r.jsx("span",{children:t.top}),r.jsx("span",{children:t.bottom})]},t.key))})]}),r.jsx(Ge,{as:"section",className:"about-section wrap",children:r.jsxs("div",{className:"about-grid",children:[r.jsxs("p",{className:"about-text",children:["Built by a team of ML engineers and domain experts who got tired of AI that hallucinates,",r.jsx("span",{className:"chip"})," we combined retrieval engineering and genuine curiosity about how different industries actually work",r.jsx("span",{className:"chip"})," to build a platform that grounds every answer in real documents."]}),r.jsx("div",{className:"about-img-wrap",children:r.jsx("img",{src:"/industries/about.jpg",alt:"NexusRAG RAG pipeline — documents to AI to grounded answer",loading:"lazy"})})]})}),r.jsx("footer",{id:"contact",children:r.jsxs("div",{className:"wrap",children:[r.jsxs("div",{className:"foot-top",children:[r.jsxs("div",{className:"foot-cta",children:[r.jsx("h2",{children:"Ready to query your documents with AI?"}),r.jsx(I,{to:"/chat",className:"become",children:"Start for free →"}),r.jsxs("div",{className:"email",children:["Questions? Write to ",r.jsx("a",{href:"mailto:hello@nexusrag.ai",children:"hello@nexusrag.ai"})]})]}),r.jsxs("div",{className:"foot-cols",children:[r.jsxs("div",{className:"fc",children:[r.jsx("h4",{children:"Platform"}),r.jsx("p",{children:"NexusRAG HQ"}),r.jsx("p",{children:"Bengaluru, India"}),r.jsx("p",{children:"hello@nexusrag.ai"})]}),r.jsxs("div",{className:"fc",children:[r.jsx("h4",{children:"Follow"}),r.jsx("a",{href:"#",children:"GitHub ↗"}),r.jsx("a",{href:"#",children:"LinkedIn ↗"}),r.jsx("a",{href:"#",children:"Twitter / X ↗"}),r.jsx("a",{href:"#",children:"HuggingFace ↗"})]}),r.jsxs("div",{className:"fc",children:[r.jsx("h4",{children:"Navigate"}),r.jsx("a",{href:"#work",children:"Industries"}),r.jsx("a",{href:"#services",children:"Capabilities"}),r.jsx("a",{href:"#expertise",children:"Technology"}),r.jsx("a",{href:"#studio",children:"Team"})]})]})]}),r.jsxs("div",{className:"foot-bottom",children:[r.jsx("div",{className:"brand",children:"NexusRAG"}),r.jsx("p",{children:"© 2026 NexusRAG. All rights reserved."})]})]})})]})}const nd=["Healthcare","Finance","Traffic","Manufacturing","Agriculture","Legal Services"];function Cm(){const[e,t]=g.useState(0);return g.useEffect(()=>{const n=setInterval(()=>{t(a=>(a+1)%nd.length)},2200);return()=>clearInterval(n)},[]),r.jsx("span",{className:"cyc-word",children:r.jsx("span",{className:"active",children:nd[e]},e)})}function Mm(){const[e,t]=g.useState(!1),[n,a]=g.useState(!1),[i,s]=g.useState(""),[o,l]=g.useState(""),[d,c]=g.useState(""),{login:h}=Un(),m=it();g.useEffect(()=>{const w=setTimeout(()=>a(!0),50);return()=>clearTimeout(w)},[]);const x=w=>{w.preventDefault(),c("");const N=h(i.trim(),o,!1);N.ok?m("/dashboard"):c(N.error)};return r.jsxs("div",{className:`meridian-auth${n?" mounted":""}`,children:[r.jsx("style",{children:`
.meridian-auth {
  --ink: #0c0f17;
  --ink-2: #141928;
  --paper: #f1f0fa;
  --paper-2: #e8e6f6;
  --indigo: #4f46e5;
  --indigo-2: #7c74ff;
  --amber: #ffb020;
  --coral: #ff6452;
  --slate: #5b6270;
  --slate-l: #9296a6;
  --line: rgba(12, 15, 23, 0.1);
  --line-dark: rgba(255, 255, 255, 0.12);
  --radius: 22px;

  font-family: "Inter", sans-serif;
  background: var(--paper);
  color: var(--ink);
  min-height: 100vh;
  -webkit-font-smoothing: antialiased;
}

.meridian-auth *,
.meridian-auth *::before,
.meridian-auth *::after {
  box-sizing: border-box;
}

.meridian-auth h1,
.meridian-auth h2,
.meridian-auth .display {
  font-family: "Space Grotesk", sans-serif;
  margin: 0;
}

.meridian-auth .mono {
  font-family: "IBM Plex Mono", monospace;
}

.meridian-auth a {
  color: inherit;
  text-decoration: none;
}

@media (prefers-reduced-motion: reduce) {
  .meridian-auth * {
    animation: none !important;
    transition: none !important;
  }
}

.meridian-auth :focus-visible {
  outline: 2px solid var(--indigo);
  outline-offset: 3px;
  border-radius: 4px;
}

/* ===== shell ===== */
.meridian-auth .auth-shell {
  display: grid;
  grid-template-columns: 1fr 1fr;
  min-height: 100vh;
}
@media (max-width: 900px) {
  .meridian-auth .auth-shell {
    grid-template-columns: 1fr;
  }
  .meridian-auth .auth-visual {
    display: none;
  }
}

/* ===== left / visual panel ===== */
.meridian-auth .auth-visual {
  position: relative;
  background: linear-gradient(120deg, #0a1730, #1a2140, #221a45, #0a1730);
  background-size: 300% 300%;
  animation: meridian-aurora-shift 18s ease-in-out infinite;
  color: #fff;
  overflow: hidden;
  padding: 44px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
@keyframes meridian-aurora-shift {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
.meridian-auth .auth-visual::before {
  content: "";
  position: absolute;
  inset: -20%;
  background-image: radial-gradient(circle at 20% 25%, rgba(79, 70, 229, 0.45), transparent 42%),
    radial-gradient(circle at 82% 78%, rgba(255, 176, 32, 0.22), transparent 38%),
    radial-gradient(circle at 75% 20%, rgba(255, 100, 82, 0.18), transparent 35%);
  animation: meridian-blob-drift 14s ease-in-out infinite alternate;
  pointer-events: none;
}
@keyframes meridian-blob-drift {
  0% {
    transform: translate(0, 0) scale(1);
  }
  50% {
    transform: translate(3%, -4%) scale(1.08);
  }
  100% {
    transform: translate(-3%, 3%) scale(1);
  }
}
.meridian-auth .brand {
  display: flex;
  align-items: center;
  gap: 10px;
  font-weight: 600;
  font-size: 19px;
  position: relative;
  z-index: 1;
}
.meridian-auth .brand .mark {
  width: 22px;
  height: 22px;
}
.meridian-auth .brand .mark svg {
  width: 100%;
  height: 100%;
}

.meridian-auth .auth-visual-mid {
  position: relative;
  z-index: 1;
  opacity: 0;
  transform: translateY(24px);
  transition: opacity 0.9s cubic-bezier(0.2, 0.7, 0.2, 1), transform 0.9s cubic-bezier(0.2, 0.7, 0.2, 1);
}
.meridian-auth.mounted .auth-visual-mid {
  opacity: 1;
  transform: translateY(0);
}
.meridian-auth .auth-visual-mid .eyebrow {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-family: "IBM Plex Mono", monospace;
  font-size: 12.5px;
  letter-spacing: 0.06em;
  color: var(--indigo-2);
  text-transform: uppercase;
  margin-bottom: 20px;
}
.meridian-auth .auth-visual-mid .eyebrow::before {
  content: "";
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: var(--amber);
  box-shadow: 0 0 0 4px rgba(255, 176, 32, 0.2);
}
.meridian-auth .auth-visual-mid h1 {
  font-size: clamp(30px, 3.4vw, 44px);
  line-height: 1.12;
  font-weight: 600;
  letter-spacing: -0.01em;
  max-width: 420px;
}
.meridian-auth .auth-visual-mid .thin {
  color: var(--slate-l);
  font-weight: 400;
}
.meridian-auth .auth-cycler {
  margin-top: 30px;
  display: flex;
  align-items: center;
  gap: 12px;
  font-family: "IBM Plex Mono", monospace;
  font-size: 13px;
  color: var(--slate-l);
}
.meridian-auth .cyc-word {
  color: #fff;
  font-weight: 500;
  min-width: 140px;
  display: inline-block;
  position: relative;
  height: 20px;
  overflow: hidden;
}
.meridian-auth .cyc-word span {
  position: absolute;
  left: 0;
  top: 0;
  opacity: 0;
  transform: translateY(14px);
  transition: opacity 0.5s ease, transform 0.5s ease;
}
.meridian-auth .cyc-word span.active {
  opacity: 1;
  transform: translateY(0);
}

.meridian-auth .auth-quote {
  position: relative;
  z-index: 1;
  border-top: 1px solid var(--line-dark);
  padding-top: 22px;
}
.meridian-auth .auth-quote p {
  font-size: 14.5px;
  line-height: 1.6;
  color: #c9cbdb;
  margin: 0 0 14px;
  max-width: 380px;
}
.meridian-auth .auth-quote .who {
  display: flex;
  align-items: center;
  gap: 12px;
}
.meridian-auth .auth-quote .dot {
  width: 34px;
  height: 34px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--indigo-2), var(--coral));
  flex-shrink: 0;
}
.meridian-auth .auth-quote .name {
  font-size: 13px;
  font-weight: 600;
}
.meridian-auth .auth-quote .role {
  font-size: 11.5px;
  color: var(--slate-l);
}

/* floating bubbles, echoing the homepage "behind the scenes" section */
.meridian-auth .bubble {
  position: absolute;
  background: #fff;
  color: var(--ink);
  border-radius: 14px 14px 14px 4px;
  padding: 7px 12px;
  font-size: 11.5px;
  font-weight: 600;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.25);
  animation: meridian-float 5s ease-in-out infinite;
  z-index: 1;
  opacity: 0;
}
.meridian-auth.mounted .bubble {
  animation: meridian-float 5s ease-in-out infinite, meridian-bubble-in 0.7s ease forwards;
}
.meridian-auth .bubble.tag {
  border-radius: 100px;
  background: var(--indigo);
  color: #fff;
}
@keyframes meridian-float {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}
@keyframes meridian-bubble-in {
  from {
    opacity: 0;
    transform: translateY(8px) scale(0.9);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}
.meridian-auth .b1 {
  top: 20%;
  right: 12%;
  animation-delay: 0.3s;
}
.meridian-auth .b2 {
  bottom: 26%;
  right: 18%;
  animation-delay: 0.9s;
}
.meridian-auth .b3 {
  bottom: 14%;
  left: 8%;
  animation-delay: 1.3s;
}

/* soft ring decoration */
.meridian-auth .auth-ring {
  position: absolute;
  border-radius: 50%;
  border: 1px solid var(--line-dark);
  z-index: 0;
  animation: meridian-ring-pulse 9s ease-in-out infinite;
}
@keyframes meridian-ring-pulse {
  0%,
  100% {
    transform: scale(1) rotate(0deg);
    opacity: 0.55;
  }
  50% {
    transform: scale(1.06) rotate(8deg);
    opacity: 1;
  }
}
.meridian-auth .ring-a {
  width: 380px;
  height: 380px;
  top: -120px;
  right: -140px;
}
.meridian-auth .ring-b {
  width: 240px;
  height: 240px;
  bottom: -80px;
  right: 60px;
  animation-delay: 1.5s;
}

/* ===== right / form panel ===== */
.meridian-auth .auth-form-side {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 48px 32px;
}
.meridian-auth .auth-form-wrap {
  width: 100%;
  max-width: 380px;
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.8s cubic-bezier(0.2, 0.7, 0.2, 1) 0.1s, transform 0.8s cubic-bezier(0.2, 0.7, 0.2, 1) 0.1s;
}
.meridian-auth.mounted .auth-form-wrap {
  opacity: 1;
  transform: translateY(0);
}
.meridian-auth .mobile-brand {
  display: none;
  align-items: center;
  gap: 10px;
  font-weight: 600;
  font-size: 18px;
  margin-bottom: 40px;
}
.meridian-auth .mobile-brand .mark {
  width: 20px;
  height: 20px;
  color: var(--ink);
}
.meridian-auth .mobile-brand .mark svg {
  width: 100%;
  height: 100%;
}
@media (max-width: 900px) {
  .meridian-auth .mobile-brand {
    display: flex;
  }
}

.meridian-auth .auth-form-wrap .sec-label {
  font-family: "IBM Plex Mono", monospace;
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--indigo);
  margin-bottom: 12px;
  display: block;
}
.meridian-auth .auth-form-wrap h2 {
  font-size: clamp(32px, 4vw, 42px);
  font-weight: 600;
  letter-spacing: -0.01em;
  margin-bottom: 10px;
}
.meridian-auth .auth-form-wrap .sub {
  font-size: 16px;
  color: var(--slate);
  line-height: 1.55;
  margin-bottom: 36px;
}
.meridian-auth .auth-form-wrap .sub a {
  color: var(--indigo);
  font-weight: 500;
}
.meridian-auth .auth-form-wrap .sub a:hover {
  text-decoration: underline;
}

.meridian-auth .field {
  margin-bottom: 22px;
}
.meridian-auth .field label {
  display: block;
  font-size: 13.5px;
  font-weight: 600;
  color: var(--ink);
  margin-bottom: 8px;
  font-family: "IBM Plex Mono", monospace;
  letter-spacing: 0.02em;
}
.meridian-auth .field-input {
  position: relative;
}
.meridian-auth .field input {
  width: 100%;
  padding: 14px 15px;
  font-size: 16.5px;
  font-family: "Inter", sans-serif;
  color: var(--ink);
  background: #fff;
  border: 1.5px solid var(--line);
  border-radius: 12px;
  outline: none;
  transition: border-color 0.25s, box-shadow 0.25s;
}
.meridian-auth .field input::placeholder {
  color: var(--slate-l);
}
.meridian-auth .field input:focus {
  border-color: var(--indigo);
  box-shadow: 0 0 0 4px rgba(79, 70, 229, 0.12);
}
.meridian-auth .field-toggle {
  position: absolute;
  right: 14px;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  font-size: 11.5px;
  font-family: "IBM Plex Mono", monospace;
  color: var(--slate);
  cursor: pointer;
  padding: 4px;
}
.meridian-auth .field-toggle:hover {
  color: var(--indigo);
}

.meridian-auth .row-between {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 28px;
  font-size: 14.5px;
}
.meridian-auth .remember {
  display: flex;
  align-items: center;
  gap: 8px;
  color: var(--slate);
}
.meridian-auth .remember input {
  accent-color: var(--indigo);
  width: 15px;
  height: 15px;
}
.meridian-auth .forgot {
  color: var(--indigo);
  font-weight: 500;
}
.meridian-auth .forgot:hover {
  text-decoration: underline;
}

.meridian-auth .submit-btn {
  width: 100%;
  padding: 15px;
  background: var(--ink);
  color: #fff;
  border: none;
  border-radius: 100px;
  font-size: 16.5px;
  font-weight: 500;
  font-family: "Inter", sans-serif;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  transition: background 0.3s, transform 0.3s;
}
.meridian-auth .submit-btn:hover {
  background: var(--indigo);
  transform: translateY(-1px);
}
.meridian-auth .submit-btn:active {
  transform: translateY(0);
}

.meridian-auth .divider {
  display: flex;
  align-items: center;
  gap: 14px;
  margin: 28px 0;
  color: var(--slate-l);
  font-size: 13px;
  font-family: "IBM Plex Mono", monospace;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}
.meridian-auth .divider::before,
.meridian-auth .divider::after {
  content: "";
  flex: 1;
  height: 1px;
  background: var(--line);
}

.meridian-auth .social-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
}
.meridian-auth .social-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 12px;
  border: 1.5px solid var(--line);
  border-radius: 12px;
  background: #fff;
  font-size: 15px;
  font-weight: 500;
  color: var(--ink);
  cursor: pointer;
  transition: border-color 0.25s, background 0.25s;
}
.meridian-auth .social-btn:hover {
  border-color: var(--ink);
  background: var(--paper-2);
}

.meridian-auth .back-home {
  margin-top: 40px;
  font-size: 14.5px;
  color: var(--slate);
  display: inline-flex;
  align-items: center;
  gap: 6px;
}
.meridian-auth .back-home:hover {
  color: var(--indigo);
}
`}),r.jsxs("div",{className:"auth-shell",children:[r.jsxs("div",{className:"auth-visual",children:[r.jsx("div",{className:"auth-ring ring-a"}),r.jsx("div",{className:"auth-ring ring-b"}),r.jsxs(I,{to:"/",className:"brand",children:[r.jsx("span",{className:"mark",children:r.jsx("svg",{viewBox:"0 0 24 24",fill:"none",children:r.jsx("path",{d:"M3 21 L21 3 L21 21 Z",fill:"currentColor"})})}),"NexusRAG"]}),r.jsxs("div",{className:"auth-visual-mid",children:[r.jsx("span",{className:"eyebrow",children:"Welcome back"}),r.jsxs("h1",{children:["Ask smarter,",r.jsx("br",{}),r.jsx("span",{className:"thin",children:"across every"})," industry."]}),r.jsxs("div",{className:"auth-cycler",children:["Querying knowledge for",r.jsx(Cm,{})]})]}),r.jsx("div",{className:"bubble b1",children:'"retrieving context"'}),r.jsx("div",{className:"bubble tag b2",children:"Dr. Priya"}),r.jsx("div",{className:"bubble b3",children:"Meghna"}),r.jsxs("div",{className:"auth-quote",children:[r.jsx("p",{children:'"NexusRAG gave our clinical team instant, cited answers from thousands of medical documents — the accuracy is remarkable."'}),r.jsxs("div",{className:"who",children:[r.jsx("div",{className:"dot"}),r.jsxs("div",{children:[r.jsx("div",{className:"name",children:"Dr. Priya Sharma"}),r.jsx("div",{className:"role",children:"Head of Research, HealthFirst"})]})]})]})]}),r.jsx("div",{className:"auth-form-side",children:r.jsxs("div",{className:"auth-form-wrap",children:[r.jsxs(I,{to:"/",className:"mobile-brand",children:[r.jsx("span",{className:"mark",children:r.jsx("svg",{viewBox:"0 0 24 24",fill:"none",children:r.jsx("path",{d:"M3 21 L21 3 L21 21 Z",fill:"currentColor"})})}),"NexusRAG"]}),r.jsx("span",{className:"sec-label",children:"Sign in"}),r.jsx("h2",{children:"Welcome back"}),r.jsxs("div",{className:"sub",children:["New to NexusRAG? ",r.jsx(I,{to:"/signup",children:"Create an account"})]}),r.jsxs("form",{onSubmit:x,children:[r.jsxs("div",{className:"field",children:[r.jsx("label",{htmlFor:"login-email",children:"Email"}),r.jsx("div",{className:"field-input",children:r.jsx("input",{id:"login-email",type:"email",placeholder:"you@company.com",required:!0,autoComplete:"email",value:i,onChange:w=>{s(w.target.value),c("")}})})]}),r.jsxs("div",{className:"field",children:[r.jsx("label",{htmlFor:"login-password",children:"Password"}),r.jsxs("div",{className:"field-input",children:[r.jsx("input",{id:"login-password",type:e?"text":"password",placeholder:"••••••••",required:!0,autoComplete:"current-password",value:o,onChange:w=>{l(w.target.value),c("")}}),r.jsx("button",{type:"button",className:"field-toggle",onClick:()=>t(w=>!w),"aria-label":e?"Hide password":"Show password",children:e?"HIDE":"SHOW"})]})]}),r.jsxs("div",{className:"row-between",children:[r.jsxs("label",{className:"remember",children:[r.jsx("input",{type:"checkbox"}),"Remember me"]}),r.jsx("a",{href:"#",className:"forgot",children:"Forgot password?"})]}),d&&r.jsxs("div",{style:{background:"#fff1f1",border:"1px solid #fecaca",borderRadius:10,padding:"10px 14px",fontSize:13.5,color:"#dc2626",marginBottom:16},children:["⚠️ ",d]}),r.jsx("button",{type:"submit",className:"submit-btn",children:"Sign in →"})]}),r.jsx("div",{className:"divider",children:"or continue with"}),r.jsxs("div",{className:"social-row",children:[r.jsx("button",{type:"button",className:"social-btn",children:"Google"}),r.jsx("button",{type:"button",className:"social-btn",children:"GitHub"})]}),r.jsx(I,{to:"/",className:"back-home",children:"← Back to homepage"}),r.jsxs("div",{style:{textAlign:"center",marginTop:16,fontSize:13,color:"var(--slate-l)"},children:["Are you an admin?"," ",r.jsx(I,{to:"/admin-login",style:{color:"var(--indigo)",fontWeight:600},children:"Admin portal →"})]})]})})]})]})}const Ts=["Healthcare","Finance","Traffic","Manufacturing","Agriculture","Legal Services"];function Em(){const[e,t]=g.useState(0);return g.useEffect(()=>{const n=setInterval(()=>{t(a=>(a+1)%Ts.length)},2200);return()=>clearInterval(n)},[]),r.jsx("span",{className:"cyc-word",children:r.jsx("span",{className:"active",children:Ts[e]},e)})}function Pm(){const[e,t]=g.useState(!1),[n,a]=g.useState(!1),[i,s]=g.useState(""),[o,l]=g.useState(""),[d,c]=g.useState(""),[h,m]=g.useState(""),[x,w]=g.useState(""),[N,y]=g.useState(""),{login:j}=Un(),f=it();g.useEffect(()=>{const p=setTimeout(()=>a(!0),50);return()=>clearTimeout(p)},[]);const u=p=>{p.preventDefault(),y("");const v=j(h.trim(),x,!1);v.ok?f("/dashboard"):y(v.error)};return r.jsxs("div",{className:`meridian-auth${n?" mounted":""}`,children:[r.jsx("style",{children:`
.meridian-auth {
  --ink: #0c0f17;
  --ink-2: #141928;
  --paper: #f1f0fa;
  --paper-2: #e8e6f6;
  --indigo: #4f46e5;
  --indigo-2: #7c74ff;
  --amber: #ffb020;
  --coral: #ff6452;
  --slate: #5b6270;
  --slate-l: #9296a6;
  --line: rgba(12, 15, 23, 0.1);
  --line-dark: rgba(255, 255, 255, 0.12);
  --radius: 22px;

  font-family: "Inter", sans-serif;
  background: var(--paper);
  color: var(--ink);
  min-height: 100vh;
  -webkit-font-smoothing: antialiased;
}

.meridian-auth *,
.meridian-auth *::before,
.meridian-auth *::after {
  box-sizing: border-box;
}

.meridian-auth h1,
.meridian-auth h2,
.meridian-auth .display {
  font-family: "Space Grotesk", sans-serif;
  margin: 0;
}

.meridian-auth .mono {
  font-family: "IBM Plex Mono", monospace;
}

.meridian-auth a {
  color: inherit;
  text-decoration: none;
}

@media (prefers-reduced-motion: reduce) {
  .meridian-auth * {
    animation: none !important;
    transition: none !important;
  }
}

.meridian-auth :focus-visible {
  outline: 2px solid var(--indigo);
  outline-offset: 3px;
  border-radius: 4px;
}

/* ===== shell ===== */
.meridian-auth .auth-shell {
  display: grid;
  grid-template-columns: 1fr 1fr;
  min-height: 100vh;
}
@media (max-width: 900px) {
  .meridian-auth .auth-shell {
    grid-template-columns: 1fr;
  }
  .meridian-auth .auth-visual {
    display: none;
  }
}

/* ===== left / visual panel ===== */
.meridian-auth .auth-visual {
  position: relative;
  background: linear-gradient(120deg, #0a1730, #1a2140, #221a45, #0a1730);
  background-size: 300% 300%;
  animation: meridian-aurora-shift 18s ease-in-out infinite;
  color: #fff;
  overflow: hidden;
  padding: 44px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
@keyframes meridian-aurora-shift {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
.meridian-auth .auth-visual::before {
  content: "";
  position: absolute;
  inset: -20%;
  background-image: radial-gradient(circle at 20% 25%, rgba(79, 70, 229, 0.45), transparent 42%),
    radial-gradient(circle at 82% 78%, rgba(255, 176, 32, 0.22), transparent 38%),
    radial-gradient(circle at 75% 20%, rgba(255, 100, 82, 0.18), transparent 35%);
  animation: meridian-blob-drift 14s ease-in-out infinite alternate;
  pointer-events: none;
}
@keyframes meridian-blob-drift {
  0% {
    transform: translate(0, 0) scale(1);
  }
  50% {
    transform: translate(3%, -4%) scale(1.08);
  }
  100% {
    transform: translate(-3%, 3%) scale(1);
  }
}
.meridian-auth .brand {
  display: flex;
  align-items: center;
  gap: 10px;
  font-weight: 600;
  font-size: 19px;
  position: relative;
  z-index: 1;
}
.meridian-auth .brand .mark {
  width: 22px;
  height: 22px;
}
.meridian-auth .brand .mark svg {
  width: 100%;
  height: 100%;
}

.meridian-auth .auth-visual-mid {
  position: relative;
  z-index: 1;
  opacity: 0;
  transform: translateY(24px);
  transition: opacity 0.9s cubic-bezier(0.2, 0.7, 0.2, 1), transform 0.9s cubic-bezier(0.2, 0.7, 0.2, 1);
}
.meridian-auth.mounted .auth-visual-mid {
  opacity: 1;
  transform: translateY(0);
}
.meridian-auth .auth-visual-mid .eyebrow {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-family: "IBM Plex Mono", monospace;
  font-size: 12.5px;
  letter-spacing: 0.06em;
  color: var(--indigo-2);
  text-transform: uppercase;
  margin-bottom: 20px;
}
.meridian-auth .auth-visual-mid .eyebrow::before {
  content: "";
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: var(--amber);
  box-shadow: 0 0 0 4px rgba(255, 176, 32, 0.2);
}
.meridian-auth .auth-visual-mid h1 {
  font-size: clamp(30px, 3.4vw, 44px);
  line-height: 1.12;
  font-weight: 600;
  letter-spacing: -0.01em;
  max-width: 420px;
}
.meridian-auth .auth-visual-mid .thin {
  color: var(--slate-l);
  font-weight: 400;
}
.meridian-auth .auth-cycler {
  margin-top: 30px;
  display: flex;
  align-items: center;
  gap: 12px;
  font-family: "IBM Plex Mono", monospace;
  font-size: 13px;
  color: var(--slate-l);
}
.meridian-auth .cyc-word {
  color: #fff;
  font-weight: 500;
  min-width: 140px;
  display: inline-block;
  position: relative;
  height: 20px;
  overflow: hidden;
}
.meridian-auth .cyc-word span {
  position: absolute;
  left: 0;
  top: 0;
  opacity: 0;
  transform: translateY(14px);
  transition: opacity 0.5s ease, transform 0.5s ease;
}
.meridian-auth .cyc-word span.active {
  opacity: 1;
  transform: translateY(0);
}

.meridian-auth .auth-stats {
  position: relative;
  z-index: 1;
  border-top: 1px solid var(--line-dark);
  padding-top: 22px;
  display: flex;
  gap: 40px;
}
.meridian-auth .auth-stats .stat .num {
  font-size: 30px;
  font-weight: 600;
  font-family: "Space Grotesk", sans-serif;
  line-height: 1;
}
.meridian-auth .auth-stats .stat .lbl {
  font-size: 12px;
  color: var(--slate-l);
  margin-top: 6px;
}

/* floating bubbles, echoing the homepage "behind the scenes" section */
.meridian-auth .bubble {
  position: absolute;
  background: #fff;
  color: var(--ink);
  border-radius: 14px 14px 14px 4px;
  padding: 7px 12px;
  font-size: 11.5px;
  font-weight: 600;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.25);
  z-index: 1;
  opacity: 0;
}
.meridian-auth.mounted .bubble {
  animation: meridian-float 5s ease-in-out infinite, meridian-bubble-in 0.7s ease forwards;
}
.meridian-auth .bubble.tag {
  border-radius: 100px;
  background: var(--indigo);
  color: #fff;
}
@keyframes meridian-float {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}
@keyframes meridian-bubble-in {
  from {
    opacity: 0;
    transform: translateY(8px) scale(0.9);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}
.meridian-auth .b1 {
  top: 18%;
  right: 14%;
  animation-delay: 0.3s;
}
.meridian-auth .b2 {
  top: 34%;
  right: 8%;
  background: var(--amber);
  animation-delay: 0.9s;
}
.meridian-auth .b3 {
  bottom: 30%;
  left: 10%;
  animation-delay: 1.3s;
}

/* soft ring decoration */
.meridian-auth .auth-ring {
  position: absolute;
  border-radius: 50%;
  border: 1px solid var(--line-dark);
  z-index: 0;
  animation: meridian-ring-pulse 9s ease-in-out infinite;
}
@keyframes meridian-ring-pulse {
  0%,
  100% {
    transform: scale(1) rotate(0deg);
    opacity: 0.55;
  }
  50% {
    transform: scale(1.06) rotate(8deg);
    opacity: 1;
  }
}
.meridian-auth .ring-a {
  width: 380px;
  height: 380px;
  top: -120px;
  right: -140px;
}
.meridian-auth .ring-b {
  width: 240px;
  height: 240px;
  bottom: -80px;
  right: 60px;
  animation-delay: 1.5s;
}

/* ===== right / form panel ===== */
.meridian-auth .auth-form-side {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 48px 32px;
  overflow-y: auto;
}
.meridian-auth .auth-form-wrap {
  width: 100%;
  max-width: 400px;
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.8s cubic-bezier(0.2, 0.7, 0.2, 1) 0.1s, transform 0.8s cubic-bezier(0.2, 0.7, 0.2, 1) 0.1s;
  padding: 24px 0;
}
.meridian-auth.mounted .auth-form-wrap {
  opacity: 1;
  transform: translateY(0);
}
.meridian-auth .mobile-brand {
  display: none;
  align-items: center;
  gap: 10px;
  font-weight: 600;
  font-size: 18px;
  margin-bottom: 40px;
}
.meridian-auth .mobile-brand .mark {
  width: 20px;
  height: 20px;
  color: var(--ink);
}
.meridian-auth .mobile-brand .mark svg {
  width: 100%;
  height: 100%;
}
@media (max-width: 900px) {
  .meridian-auth .mobile-brand {
    display: flex;
  }
}

.meridian-auth .auth-form-wrap .sec-label {
  font-family: "IBM Plex Mono", monospace;
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--indigo);
  margin-bottom: 12px;
  display: block;
}
.meridian-auth .auth-form-wrap h2 {
  font-size: clamp(32px, 4vw, 42px);
  font-weight: 600;
  letter-spacing: -0.01em;
  margin-bottom: 10px;
}
.meridian-auth .auth-form-wrap .sub {
  font-size: 16px;
  color: var(--slate);
  line-height: 1.55;
  margin-bottom: 32px;
}
.meridian-auth .auth-form-wrap .sub a {
  color: var(--indigo);
  font-weight: 500;
}
.meridian-auth .auth-form-wrap .sub a:hover {
  text-decoration: underline;
}

.meridian-auth .field-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 14px;
}

.meridian-auth .field {
  margin-bottom: 20px;
}
.meridian-auth .field label {
  display: block;
  font-size: 13.5px;
  font-weight: 600;
  color: var(--ink);
  margin-bottom: 8px;
  font-family: "IBM Plex Mono", monospace;
  letter-spacing: 0.02em;
}
.meridian-auth .field-input {
  position: relative;
}
.meridian-auth .field input,
.meridian-auth .field select {
  width: 100%;
  padding: 14px 15px;
  font-size: 16.5px;
  font-family: "Inter", sans-serif;
  color: var(--ink);
  background: #fff;
  border: 1.5px solid var(--line);
  border-radius: 12px;
  outline: none;
  transition: border-color 0.25s, box-shadow 0.25s;
  appearance: none;
}
.meridian-auth .field select {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='%235b6270'%3E%3Cpath fill-rule='evenodd' d='M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z' clip-rule='evenodd'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 14px center;
  background-size: 16px;
  padding-right: 38px;
  color: var(--ink);
}
.meridian-auth .field select:invalid {
  color: var(--slate-l);
}
.meridian-auth .field input::placeholder {
  color: var(--slate-l);
}
.meridian-auth .field input:focus,
.meridian-auth .field select:focus {
  border-color: var(--indigo);
  box-shadow: 0 0 0 4px rgba(79, 70, 229, 0.12);
}
.meridian-auth .field-toggle {
  position: absolute;
  right: 14px;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  font-size: 11.5px;
  font-family: "IBM Plex Mono", monospace;
  color: var(--slate);
  cursor: pointer;
  padding: 4px;
}
.meridian-auth .field-toggle:hover {
  color: var(--indigo);
}
.meridian-auth .field-hint {
  font-size: 13px;
  color: var(--slate-l);
  margin-top: 7px;
}

.meridian-auth .terms-row {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  margin-bottom: 26px;
  font-size: 14px;
  color: var(--slate);
  line-height: 1.5;
}
.meridian-auth .terms-row input {
  accent-color: var(--indigo);
  width: 15px;
  height: 15px;
  margin-top: 2px;
  flex-shrink: 0;
}
.meridian-auth .terms-row a {
  color: var(--indigo);
  font-weight: 500;
}
.meridian-auth .terms-row a:hover {
  text-decoration: underline;
}

.meridian-auth .submit-btn {
  width: 100%;
  padding: 15px;
  background: var(--ink);
  color: #fff;
  border: none;
  border-radius: 100px;
  font-size: 16.5px;
  font-weight: 500;
  font-family: "Inter", sans-serif;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  transition: background 0.3s, transform 0.3s;
}
.meridian-auth .submit-btn:hover {
  background: var(--indigo);
  transform: translateY(-1px);
}
.meridian-auth .submit-btn:active {
  transform: translateY(0);
}

.meridian-auth .divider {
  display: flex;
  align-items: center;
  gap: 14px;
  margin: 26px 0;
  color: var(--slate-l);
  font-size: 13px;
  font-family: "IBM Plex Mono", monospace;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}
.meridian-auth .divider::before,
.meridian-auth .divider::after {
  content: "";
  flex: 1;
  height: 1px;
  background: var(--line);
}

.meridian-auth .social-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
}
.meridian-auth .social-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 12px;
  border: 1.5px solid var(--line);
  border-radius: 12px;
  background: #fff;
  font-size: 15px;
  font-weight: 500;
  color: var(--ink);
  cursor: pointer;
  transition: border-color 0.25s, background 0.25s;
}
.meridian-auth .social-btn:hover {
  border-color: var(--ink);
  background: var(--paper-2);
}

.meridian-auth .back-home {
  margin-top: 36px;
  font-size: 14.5px;
  color: var(--slate);
  display: inline-flex;
  align-items: center;
  gap: 6px;
}
.meridian-auth .back-home:hover {
  color: var(--indigo);
}
`}),r.jsxs("div",{className:"auth-shell",children:[r.jsxs("div",{className:"auth-visual",children:[r.jsx("div",{className:"auth-ring ring-a"}),r.jsx("div",{className:"auth-ring ring-b"}),r.jsxs(I,{to:"/",className:"brand",children:[r.jsx("span",{className:"mark",children:r.jsx("svg",{viewBox:"0 0 24 24",fill:"none",children:r.jsx("path",{d:"M3 21 L21 3 L21 21 Z",fill:"currentColor"})})}),"NexusRAG"]}),r.jsxs("div",{className:"auth-visual-mid",children:[r.jsx("span",{className:"eyebrow",children:"Join NexusRAG"}),r.jsxs("h1",{children:["One platform,",r.jsx("br",{}),r.jsx("span",{className:"thin",children:"every"})," industry."]}),r.jsxs("div",{className:"auth-cycler",children:["RAG-powered answers for",r.jsx(Em,{})]})]}),r.jsx("div",{className:"bubble b1",children:'"RAG pipeline ready"'}),r.jsx("div",{className:"bubble tag b2",children:"Arjun"}),r.jsx("div",{className:"bubble b3",children:'"query time: 0.3s"'}),r.jsxs("div",{className:"auth-stats",children:[r.jsxs("div",{className:"stat",children:[r.jsx("div",{className:"num",children:"25"}),r.jsx("div",{className:"lbl",children:"industries covered"})]}),r.jsxs("div",{className:"stat",children:[r.jsx("div",{className:"num",children:"10M+"}),r.jsx("div",{className:"lbl",children:"documents indexed"})]}),r.jsxs("div",{className:"stat",children:[r.jsx("div",{className:"num",children:"99%"}),r.jsx("div",{className:"lbl",children:"answer accuracy"})]})]})]}),r.jsx("div",{className:"auth-form-side",children:r.jsxs("div",{className:"auth-form-wrap",children:[r.jsxs(I,{to:"/",className:"mobile-brand",children:[r.jsx("span",{className:"mark",children:r.jsx("svg",{viewBox:"0 0 24 24",fill:"none",children:r.jsx("path",{d:"M3 21 L21 3 L21 21 Z",fill:"currentColor"})})}),"NexusRAG"]}),r.jsx("span",{className:"sec-label",children:"Create account"}),r.jsx("h2",{children:"Start querying smarter"}),r.jsxs("div",{className:"sub",children:["Already have an account? ",r.jsx(I,{to:"/login",children:"Sign in"})]}),r.jsxs("form",{onSubmit:u,children:[r.jsxs("div",{className:"field-row",children:[r.jsxs("div",{className:"field",children:[r.jsx("label",{htmlFor:"signup-first",children:"First name"}),r.jsx("div",{className:"field-input",children:r.jsx("input",{id:"signup-first",type:"text",placeholder:"Priya",required:!0,autoComplete:"given-name",value:o,onChange:p=>{l(p.target.value),y("")}})})]}),r.jsxs("div",{className:"field",children:[r.jsx("label",{htmlFor:"signup-last",children:"Last name"}),r.jsx("div",{className:"field-input",children:r.jsx("input",{id:"signup-last",type:"text",placeholder:"Nadar",required:!0,autoComplete:"family-name",value:d,onChange:p=>{c(p.target.value),y("")}})})]})]}),r.jsxs("div",{className:"field",children:[r.jsx("label",{htmlFor:"signup-email",children:"Work email"}),r.jsx("div",{className:"field-input",children:r.jsx("input",{id:"signup-email",type:"email",placeholder:"you@company.com",required:!0,autoComplete:"email",value:h,onChange:p=>{m(p.target.value),y("")}})})]}),r.jsxs("div",{className:"field",children:[r.jsx("label",{htmlFor:"signup-industry",children:"Industry"}),r.jsx("div",{className:"field-input",children:r.jsxs("select",{id:"signup-industry",value:i,onChange:p=>s(p.target.value),required:!0,children:[r.jsx("option",{value:"",disabled:!0,children:"Select your industry"}),Ts.map(p=>r.jsx("option",{value:p,children:p},p)),r.jsx("option",{value:"Other",children:"Other"})]})})]}),r.jsxs("div",{className:"field",children:[r.jsx("label",{htmlFor:"signup-password",children:"Password"}),r.jsxs("div",{className:"field-input",children:[r.jsx("input",{id:"signup-password",type:e?"text":"password",placeholder:"••••••••",required:!0,autoComplete:"new-password",minLength:8,value:x,onChange:p=>{w(p.target.value),y("")}}),r.jsx("button",{type:"button",className:"field-toggle",onClick:()=>t(p=>!p),"aria-label":e?"Hide password":"Show password",children:e?"HIDE":"SHOW"})]}),r.jsx("div",{className:"field-hint",children:"At least 8 characters."})]}),r.jsxs("div",{className:"terms-row",children:[r.jsx("input",{type:"checkbox",id:"signup-terms",required:!0}),r.jsxs("label",{htmlFor:"signup-terms",children:["I agree to NexusRAG's ",r.jsx("a",{href:"#",children:"Terms of Service"})," and ",r.jsx("a",{href:"#",children:"Privacy Policy"}),"."]})]}),N&&r.jsxs("div",{style:{background:"#fff1f1",border:"1px solid #fecaca",borderRadius:10,padding:"10px 14px",fontSize:13.5,color:"#dc2626",marginBottom:16},children:["⚠️ ",N]}),r.jsx("button",{type:"submit",className:"submit-btn",children:"Create account →"})]}),r.jsx("div",{className:"divider",children:"or continue with"}),r.jsxs("div",{className:"social-row",children:[r.jsx("button",{type:"button",className:"social-btn",children:"Google"}),r.jsx("button",{type:"button",className:"social-btn",children:"GitHub"})]}),r.jsx(I,{to:"/",className:"back-home",children:"← Back to homepage"})]})})]})]})}function Rm(){var v,S;const[e,t]=g.useState(""),[n,a]=g.useState(""),[i,s]=g.useState(!1),[o,l]=g.useState(""),[d,c]=g.useState(!1),[h,m]=g.useState(!1),{login:x,isAdmin:w,isLoggedIn:N}=Un(),y=it(),f=((S=(v=an().state)==null?void 0:v.from)==null?void 0:S.pathname)||"/admin";g.useEffect(()=>{const C=setTimeout(()=>c(!0),60);return()=>clearTimeout(C)},[]),g.useEffect(()=>{N&&w&&y(f,{replace:!0})},[N,w]);const u=C=>{C.preventDefault(),l(""),m(!0),setTimeout(()=>{const k=x(e.trim(),n,!0);k.ok?y(f,{replace:!0}):l(k.error),m(!1)},600)};function p({name:C,size:k=18}){const M={width:k,height:k,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:1.8,strokeLinecap:"round",strokeLinejoin:"round"};switch(C){case"shield":return r.jsx("svg",{...M,children:r.jsx("path",{d:"M12 3l8 3.5V11c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V6.5z"})});case"eye":return r.jsxs("svg",{...M,children:[r.jsx("ellipse",{cx:"12",cy:"12",rx:"9",ry:"5"}),r.jsx("circle",{cx:"12",cy:"12",r:"2.5"})]});case"eyeoff":return r.jsx("svg",{...M,children:r.jsx("path",{d:"M3 3l18 18M10.5 10.7A3 3 0 0 0 13.3 13.5M6.5 6.7A9 9 0 0 0 3 12c2 4 5.5 6 9 6a9 9 0 0 0 4.5-1.2M9.5 5.2A9 9 0 0 1 21 12a10 10 0 0 1-.9 2.1"})});case"lock":return r.jsxs("svg",{...M,children:[r.jsx("rect",{x:"5",y:"11",width:"14",height:"10",rx:"2"}),r.jsx("path",{d:"M8 11V7a4 4 0 1 1 8 0v4"})]});case"mail":return r.jsxs("svg",{...M,children:[r.jsx("rect",{x:"3",y:"5",width:"18",height:"14",rx:"2"}),r.jsx("path",{d:"M3 7l9 6 9-6"})]});default:return null}}return r.jsxs("div",{className:`admin-login${d?" mounted":""}`,children:[r.jsx("style",{children:`
.admin-login {
  --ink: #0c0f17;
  --navy: #0a1730;
  --paper: #f1f0fa;
  --panel: #ffffff;
  --indigo: #4f46e5;
  --indigo-2: #7c74ff;
  --amber: #ffb020;
  --coral: #ff4f4f;
  --line: rgba(12,15,23,0.1);
  --slate: #5b6270;
  --slate-l: #9296a6;
  font-family: "Inter", sans-serif;
  min-height: 100vh; display: flex;
  -webkit-font-smoothing: antialiased;
}
.admin-login *, .admin-login *::before, .admin-login *::after { box-sizing: border-box; margin: 0; }
.admin-login h1, .admin-login h2 { font-family: "Space Grotesk", sans-serif; }
.admin-login a { color: inherit; text-decoration: none; }
.admin-login button { font-family: inherit; cursor: pointer; }

/* split */
.admin-login .left-pane {
  width: 420px; flex-shrink: 0;
  background: var(--navy);
  display: flex; flex-direction: column;
  padding: 48px 40px;
  position: relative; overflow: hidden;
}
@media (max-width: 860px) { .admin-login .left-pane { display: none; } }
.admin-login .left-pane::before {
  content: ""; position: absolute;
  width: 400px; height: 400px; border-radius: 50%;
  background: radial-gradient(circle, rgba(79,70,229,0.35) 0%, transparent 70%);
  top: -80px; right: -120px; pointer-events: none;
}
.admin-login .lp-brand {
  display: flex; align-items: center; gap: 10px;
  font-family: "Space Grotesk", sans-serif;
  font-weight: 700; font-size: 20px; color: #fff; margin-bottom: 60px;
}
.admin-login .lp-mark {
  width: 36px; height: 36px; border-radius: 10px;
  background: linear-gradient(135deg, var(--indigo), var(--indigo-2));
  display: flex; align-items: center; justify-content: center;
  font-size: 16px; font-weight: 800; color: #fff;
}
.admin-login .lp-shield {
  width: 80px; height: 80px; border-radius: 24px;
  background: rgba(79,70,229,0.25);
  border: 2px solid rgba(79,70,229,0.5);
  display: flex; align-items: center; justify-content: center;
  color: var(--indigo-2); margin-bottom: 32px;
}
.admin-login .lp-title { font-size: 28px; font-weight: 700; color: #fff; margin-bottom: 14px; line-height: 1.2; }
.admin-login .lp-desc { font-size: 14.5px; color: rgba(255,255,255,0.5); line-height: 1.65; margin-bottom: 40px; }
.admin-login .lp-creds {
  background: rgba(255,255,255,0.06);
  border: 1px solid rgba(255,255,255,0.12);
  border-radius: 16px; padding: 20px;
}
.admin-login .lp-creds-label {
  font-family: "IBM Plex Mono", monospace;
  font-size: 10.5px; text-transform: uppercase; letter-spacing: 0.08em;
  color: rgba(255,255,255,0.4); margin-bottom: 12px;
}
.admin-login .lp-cred-row { display: flex; flex-direction: column; gap: 8px; }
.admin-login .lp-cred {
  font-family: "IBM Plex Mono", monospace; font-size: 13px;
  color: rgba(255,255,255,0.75);
  display: flex; gap: 12px; align-items: center;
}
.admin-login .lp-cred span:first-child { color: rgba(255,255,255,0.35); width: 70px; flex-shrink: 0; }
.admin-login .lp-spacer { flex: 1; }
.admin-login .lp-user-link {
  display: inline-flex; align-items: center; gap: 8px;
  color: rgba(255,255,255,0.5); font-size: 13.5px;
  transition: color 0.2s;
}
.admin-login .lp-user-link:hover { color: #fff; }

/* right pane */
.admin-login .right-pane {
  flex: 1; display: flex; align-items: center; justify-content: center;
  padding: 40px 24px; background: var(--paper);
  opacity: 0; transform: translateX(20px);
  transition: opacity 0.6s ease, transform 0.6s ease;
}
.admin-login.mounted .right-pane { opacity: 1; transform: none; }
.admin-login .form-box { width: 100%; max-width: 400px; }

.admin-login .admin-badge {
  display: inline-flex; align-items: center; gap: 8px;
  padding: 6px 14px; border-radius: 100px;
  background: #fff; border: 1px solid var(--line);
  font-size: 12.5px; font-weight: 600; color: var(--indigo);
  margin-bottom: 28px;
  box-shadow: 0 2px 8px -2px rgba(79,70,229,0.12);
}
.admin-login .admin-badge span { color: var(--slate-l); font-weight: 400; }

.admin-login .form-box h1 { font-size: 30px; font-weight: 700; letter-spacing: -0.01em; margin-bottom: 8px; }
.admin-login .form-box p { font-size: 14.5px; color: var(--slate); line-height: 1.6; margin-bottom: 36px; }

.admin-login .field { margin-bottom: 18px; }
.admin-login label { display: block; font-size: 13.5px; font-weight: 600; margin-bottom: 7px; color: var(--ink); }
.admin-login .input-wrap {
  display: flex; align-items: center; gap: 10px;
  border: 1.5px solid var(--line); border-radius: 14px;
  padding: 12px 16px; background: #fff;
  transition: border-color 0.25s, box-shadow 0.25s;
}
.admin-login .input-wrap:focus-within {
  border-color: var(--indigo); box-shadow: 0 0 0 4px rgba(79,70,229,0.1);
}
.admin-login .input-wrap.error-ring { border-color: var(--coral); }
.admin-login .input-wrap svg { color: var(--slate-l); flex-shrink: 0; }
.admin-login .input-wrap input {
  flex: 1; border: none; outline: none; font-size: 14.5px;
  color: var(--ink); background: transparent;
}
.admin-login .input-wrap input::placeholder { color: var(--slate-l); }
.admin-login .pw-toggle { background: none; border: none; color: var(--slate-l); display: flex; padding: 2px; transition: color 0.2s; }
.admin-login .pw-toggle:hover { color: var(--ink); }

.admin-login .error-msg {
  background: #fff1f1; border: 1px solid #fecaca;
  border-radius: 12px; padding: 12px 16px;
  font-size: 13.5px; color: #dc2626; margin-bottom: 18px;
  display: flex; align-items: center; gap: 8px;
}

.admin-login .submit-btn {
  width: 100%; padding: 14px;
  background: var(--ink); color: #fff; border: none;
  border-radius: 14px; font-size: 15px; font-weight: 700;
  transition: background 0.25s, transform 0.15s;
  margin-top: 6px;
}
.admin-login .submit-btn:hover:not(:disabled) { background: var(--indigo); }
.admin-login .submit-btn:active:not(:disabled) { transform: scale(0.985); }
.admin-login .submit-btn:disabled { opacity: 0.55; cursor: not-allowed; }

.admin-login .divider {
  text-align: center; font-size: 13px; color: var(--slate-l);
  margin: 24px 0; position: relative;
}
.admin-login .divider::before {
  content: ""; position: absolute; left: 0; top: 50%;
  width: 100%; height: 1px; background: var(--line);
}
.admin-login .divider span { background: var(--paper); padding: 0 12px; position: relative; }

.admin-login .user-link-btn {
  display: block; width: 100%; padding: 13px;
  background: transparent; color: var(--ink);
  border: 1.5px solid var(--line); border-radius: 14px;
  font-size: 14.5px; font-weight: 600; text-align: center;
  text-decoration: none; transition: all 0.2s;
}
.admin-login .user-link-btn:hover { background: #fff; border-color: var(--indigo); color: var(--indigo); }
`}),r.jsxs("div",{className:"left-pane",children:[r.jsxs("div",{className:"lp-brand",children:[r.jsx("div",{className:"lp-mark",children:"N"}),"NexusRAG"]}),r.jsx("div",{className:"lp-shield",children:r.jsx(p,{name:"shield",size:36})}),r.jsxs("div",{className:"lp-title",children:["Admin Portal",r.jsx("br",{}),"Access Only"]}),r.jsx("div",{className:"lp-desc",children:"This portal is restricted to system administrators. Regular users must log in through the standard sign-in page."}),r.jsxs("div",{className:"lp-creds",children:[r.jsx("div",{className:"lp-creds-label",children:"Demo Admin Credentials"}),r.jsxs("div",{className:"lp-cred-row",children:[r.jsxs("div",{className:"lp-cred",children:[r.jsx("span",{children:"Email"}),r.jsx("span",{children:"admin@nexusrag.com"})]}),r.jsxs("div",{className:"lp-cred",children:[r.jsx("span",{children:"Password"}),r.jsx("span",{children:"admin@1234"})]})]})]}),r.jsx("div",{className:"lp-spacer"}),r.jsx(I,{to:"/login",className:"lp-user-link",children:"← Regular user login"})]}),r.jsx("div",{className:"right-pane",children:r.jsxs("div",{className:"form-box",children:[r.jsxs("div",{className:"admin-badge",children:["🛡️ Admin Access ",r.jsx("span",{children:"· Restricted"})]}),r.jsx("h1",{children:"Admin Sign In"}),r.jsx("p",{children:"Enter your administrator credentials to access the NexusRAG admin panel."}),o&&r.jsxs("div",{className:"error-msg",children:["⚠️ ",o]}),r.jsxs("form",{onSubmit:u,noValidate:!0,children:[r.jsxs("div",{className:"field",children:[r.jsx("label",{htmlFor:"admin-email",children:"Admin Email"}),r.jsxs("div",{className:`input-wrap${o?" error-ring":""}`,children:[r.jsx(p,{name:"mail",size:17}),r.jsx("input",{id:"admin-email",type:"email",placeholder:"admin@nexusrag.com",value:e,onChange:C=>{t(C.target.value),l("")},autoComplete:"username",required:!0})]})]}),r.jsxs("div",{className:"field",children:[r.jsx("label",{htmlFor:"admin-password",children:"Password"}),r.jsxs("div",{className:`input-wrap${o?" error-ring":""}`,children:[r.jsx(p,{name:"lock",size:17}),r.jsx("input",{id:"admin-password",type:i?"text":"password",placeholder:"Enter admin password",value:n,onChange:C=>{a(C.target.value),l("")},autoComplete:"current-password",required:!0}),r.jsx("button",{type:"button",className:"pw-toggle",onClick:()=>s(C=>!C),children:r.jsx(p,{name:i?"eyeoff":"eye",size:16})})]})]}),r.jsx("button",{type:"submit",className:"submit-btn",disabled:h,children:h?"Verifying…":"Sign in as Admin →"})]}),r.jsx("div",{className:"divider",children:r.jsx("span",{children:"or"})}),r.jsx(I,{to:"/login",className:"user-link-btn",children:"Continue as Regular User"})]})})]})}const Im=["How do I prepare for a web designer interview?","What are the key principles of effective web design?","What are the best design trends for websites in 2025?"],Tm=[{key:"rc1",title:"New chat",time:"20 secs ago"},{key:"rc2",title:"Give me unique name logo for CRM dashboard",time:"45 mins ago"},{key:"rc3",title:"Create SaaS web app categories",time:"3 hours ago"}],Am=[{group:"Today",items:[{key:"h1",title:"New Chat",time:"Today, 11:50 pm"},{key:"h2",title:"Give me unique name logo for...",time:"Today, 11:05 pm"},{key:"h3",title:"Create SaaS web app categori...",time:"Today, 08:57 pm"}]},{group:"Yesterday",items:[{key:"h4",title:"Custom platform solution",time:"Yesterday, 09:15 am"},{key:"h5",title:"Investment insights monetizati...",time:"Yesterday, 07:02 am"},{key:"h6",title:"Give me 10 similar ecommerce...",time:"Yesterday, 04:50 am"},{key:"h7",title:"5 top ecommerce integration a...",time:"Yesterday, 04:11 am"},{key:"h8",title:"Create content for privacy poli...",time:"Yesterday, 02:15 am"}]}],dn=[{key:"health",emoji:"🏥",label:"Health",color:"#22c55e",bg:"#dcfce7",areas:"Diagnostics, patient care, medical records"},{key:"finance",emoji:"💰",label:"Finance",color:"#3b82f6",bg:"#dbeafe",areas:"Banking, investing, risk & fraud detection"},{key:"traffic",emoji:"🚦",label:"Traffic",color:"#f59e0b",bg:"#fef3c7",areas:"Route planning, congestion monitoring, signals"},{key:"manufacturing",emoji:"🏭",label:"Manufacturing",color:"#8b5cf6",bg:"#ede9fe",areas:"Production, quality control, predictive maintenance"},{key:"retail",emoji:"🛒",label:"Retail & E-commerce",color:"#ec4899",bg:"#fce7f3",areas:"Shopping, recommendations, inventory"},{key:"logistics",emoji:"🚚",label:"Logistics & Supply",color:"#0ea5e9",bg:"#e0f2fe",areas:"Warehousing, delivery, shipment tracking"},{key:"agriculture",emoji:"🌾",label:"Agriculture",color:"#84cc16",bg:"#f7fee7",areas:"Crop monitoring, irrigation, pest detection"},{key:"energy",emoji:"⚡",label:"Energy & Utilities",color:"#eab308",bg:"#fefce8",areas:"Solar, electricity, power management"},{key:"construction",emoji:"🏗️",label:"Construction",color:"#f97316",bg:"#fff7ed",areas:"Site monitoring, safety, project management"},{key:"education",emoji:"🎓",label:"Education",color:"#6366f1",bg:"#eef2ff",areas:"Online learning, tutoring, student assessment"},{key:"hospitality",emoji:"🏨",label:"Hospitality",color:"#14b8a6",bg:"#f0fdfa",areas:"Hotels, travel planning, customer service"},{key:"food",emoji:"🍔",label:"Food & Restaurants",color:"#ef4444",bg:"#fef2f2",areas:"Restaurant management, food delivery"},{key:"aviation",emoji:"✈️",label:"Aviation",color:"#06b6d4",bg:"#ecfeff",areas:"Airport operations, aircraft maintenance"},{key:"maritime",emoji:"🚢",label:"Maritime",color:"#1d4ed8",bg:"#eff6ff",areas:"Ports, cargo, vessel management"},{key:"railways",emoji:"🚆",label:"Railways",color:"#4f46e5",bg:"#eef2ff",areas:"Train operations, maintenance, passenger services"},{key:"realestate",emoji:"🏢",label:"Real Estate",color:"#64748b",bg:"#f8fafc",areas:"Property management, valuation, smart buildings"},{key:"telecom",emoji:"📡",label:"Telecommunications",color:"#7c3aed",bg:"#f5f3ff",areas:"Network optimization, customer support"},{key:"itsoftware",emoji:"💻",label:"IT & Software",color:"#059669",bg:"#ecfdf5",areas:"Cybersecurity, cloud services, automation"},{key:"gaming",emoji:"🎮",label:"Entertainment",color:"#dc2626",bg:"#fef2f2",areas:"Games, streaming, content recommendation"},{key:"legal",emoji:"⚖️",label:"Legal Services",color:"#92400e",bg:"#fffbeb",areas:"Legal research, contracts, case management"},{key:"insurance",emoji:"🛡️",label:"Insurance",color:"#0f766e",bg:"#f0fdfa",areas:"Claims, risk assessment, customer service"},{key:"government",emoji:"🏛️",label:"Government",color:"#374151",bg:"#f9fafb",areas:"Citizen services, document processing"},{key:"research",emoji:"🔬",label:"Research & Science",color:"#9333ea",bg:"#faf5ff",areas:"Data analysis, simulations, labs"},{key:"automotive",emoji:"🚗",label:"Automotive",color:"#be123c",bg:"#fff1f2",areas:"Manufacturing, autonomous systems, maintenance"},{key:"defense",emoji:"🛩️",label:"Defense & Aerospace",color:"#1e3a5f",bg:"#eff6ff",areas:"Aircraft, satellites, mission systems"}],Lm={health:[{id:"hc-1",name:"PubMedQA Dataset v2.pdf",size:"14.2 MB",date:"2 hrs ago",type:"pdf",sharedBy:"Dr. Priya S.",note:"Useful for diagnostics Q&A benchmarking."},{id:"hc-2",name:"WHO Diabetes Fact Sheet 2023.pdf",size:"3.8 MB",date:"1 day ago",type:"pdf",sharedBy:"Dr. Meghna R.",note:"Latest WHO diabetes global report."},{id:"hc-3",name:"ADA Standards of Care 2024.pdf",size:"22.1 MB",date:"3 days ago",type:"pdf",sharedBy:"Dr. Meghna R.",note:"Clinical care standards from ADA."}],finance:[{id:"fi-1",name:"FinQA Benchmark Dataset.pdf",size:"9.5 MB",date:"5 hrs ago",type:"pdf",sharedBy:"Wei L.",note:"Financial reasoning evaluation corpus."},{id:"fi-2",name:"Federal Reserve Working Paper 2022.pdf",size:"2.1 MB",date:"2 days ago",type:"pdf",sharedBy:"Arjun M.",note:"Key macroeconomic risk insights."},{id:"fi-3",name:"IMF Global Financial Stability Report.pdf",size:"18.7 MB",date:"1 week ago",type:"pdf",sharedBy:"Arjun M.",note:"Key Q3 risk review document."}],traffic:[{id:"tr-1",name:"Highway Code 2024.pdf",size:"6.3 MB",date:"1 day ago",type:"pdf",sharedBy:"Samira K.",note:"Updated 2024 driving licence rules."},{id:"tr-2",name:"Road Traffic Act 1988 (UK).pdf",size:"1.9 MB",date:"4 days ago",type:"pdf",sharedBy:"Samira K.",note:"UK traffic legislation reference."},{id:"tr-3",name:"DfT Driving Standards Guide 2023.pdf",size:"4.4 MB",date:"1 week ago",type:"pdf",sharedBy:"Samira K.",note:"DVSA standards guide 2023."}]},_m=[{id:"whatsapp",label:"WhatsApp",color:"#25D366",icon:"W",url:e=>`https://wa.me/?text=${encodeURIComponent(e)}`},{id:"twitter",label:"X / Twitter",color:"#000",icon:"𝕏",url:e=>`https://twitter.com/intent/tweet?text=${encodeURIComponent(e.slice(0,280))}`},{id:"linkedin",label:"LinkedIn",color:"#0A66C2",icon:"in",url:e=>`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}&summary=${encodeURIComponent(e.slice(0,300))}`},{id:"facebook",label:"Facebook",color:"#1877F2",icon:"f",url:e=>`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}&quote=${encodeURIComponent(e.slice(0,300))}`},{id:"telegram",label:"Telegram",color:"#26A5E4",icon:"✈",url:e=>`https://t.me/share/url?url=${encodeURIComponent(window.location.href)}&text=${encodeURIComponent(e.slice(0,400))}`},{id:"email",label:"Email",color:"#6b7280",icon:"✉",url:e=>`mailto:?subject=NexusRAG%20Document&body=${encodeURIComponent(e)}`}];function Dm({doc:e,industry:t,onClose:n}){const[a,i]=g.useState(!1),s=`📄 ${e.name}
🏭 Industry: ${t.label}
Shared via NexusRAG

${window.location.origin}`,o=()=>{navigator.clipboard.writeText(s).catch(()=>{}),i(!0),setTimeout(()=>i(!1),2e3)};return r.jsx("div",{className:"jd-overlay",onClick:n,children:r.jsxs("div",{className:"jd-modal",onClick:l=>l.stopPropagation(),children:[r.jsxs("div",{className:"jd-modal-hd",children:[r.jsx("div",{className:"jd-modal-title",children:"Share Document"}),r.jsx("button",{className:"jd-modal-close",onClick:n,children:"✕"})]}),r.jsxs("div",{className:"jd-modal-preview",children:[r.jsxs("div",{className:"jd-modal-ind",style:{background:t.bg,color:t.color},children:[t.emoji," ",t.label]}),r.jsxs("div",{className:"jd-modal-docname",children:["📄 ",e.name]}),e.note&&r.jsx("div",{className:"jd-modal-note",children:e.note})]}),r.jsx("div",{className:"jd-modal-grid",children:_m.map(l=>r.jsxs("a",{href:l.url(s),target:"_blank",rel:"noopener noreferrer",className:"jd-social-btn",style:{"--sc":l.color},children:[r.jsx("span",{className:"jd-social-icon",children:l.icon}),r.jsx("span",{className:"jd-social-label",children:l.label})]},l.id))}),r.jsx("div",{className:"jd-modal-divider",children:"or"}),r.jsx("button",{className:`jd-copy-btn${a?" copied":""}`,onClick:o,children:a?"✓ Copied!":"🔗 Copy link"})]})})}function B({name:e,size:t=18}){const n={width:t,height:t,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:1.8,strokeLinecap:"round",strokeLinejoin:"round"};switch(e){case"home":return r.jsxs("svg",{...n,children:[r.jsx("path",{d:"M3 11.5 12 4l9 7.5"}),r.jsx("path",{d:"M5 10v9a1 1 0 0 0 1 1h4v-6h4v6h4a1 1 0 0 0 1-1v-9"})]});case"calendar":return r.jsxs("svg",{...n,children:[r.jsx("rect",{x:"3.5",y:"5",width:"17",height:"16",rx:"2.5"}),r.jsx("path",{d:"M8 3v4M16 3v4M3.5 10h17"})]});case"chat":return r.jsx("svg",{...n,children:r.jsx("path",{d:"M4 5.5A2.5 2.5 0 0 1 6.5 3h11A2.5 2.5 0 0 1 20 5.5v8A2.5 2.5 0 0 1 17.5 16H10l-4.5 4v-4H6.5A2.5 2.5 0 0 1 4 13.5z"})});case"share":return r.jsxs("svg",{...n,children:[r.jsx("circle",{cx:"18",cy:"5",r:"2.3"}),r.jsx("circle",{cx:"6",cy:"12",r:"2.3"}),r.jsx("circle",{cx:"18",cy:"19",r:"2.3"}),r.jsx("path",{d:"M8.1 10.8 15.9 6.2M8.1 13.2l7.8 4.6"})]});case"note":return r.jsxs("svg",{...n,children:[r.jsx("path",{d:"M6 3.5h9l3 3V20a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5z"}),r.jsx("path",{d:"M9 10h6M9 13.5h6M9 17h3.5"})]});case"grid":return r.jsxs("svg",{...n,children:[r.jsx("rect",{x:"3.5",y:"3.5",width:"7",height:"7",rx:"1.5"}),r.jsx("rect",{x:"13.5",y:"3.5",width:"7",height:"7",rx:"1.5"}),r.jsx("rect",{x:"3.5",y:"13.5",width:"7",height:"7",rx:"1.5"}),r.jsx("rect",{x:"13.5",y:"13.5",width:"7",height:"7",rx:"1.5"})]});case"settings":return r.jsxs("svg",{...n,children:[r.jsx("circle",{cx:"12",cy:"12",r:"3.2"}),r.jsx("path",{d:"M12 3v2.2M12 18.8V21M21 12h-2.2M5.2 12H3M18.1 5.9l-1.55 1.55M7.45 16.55 5.9 18.1M18.1 18.1l-1.55-1.55M7.45 7.45 5.9 5.9"})]});case"help":return r.jsxs("svg",{...n,children:[r.jsx("circle",{cx:"12",cy:"12",r:"9"}),r.jsx("path",{d:"M9.5 9.3a2.5 2.5 0 1 1 3.4 2.3c-.8.4-1.1.9-1.1 1.7v.4"}),r.jsx("circle",{cx:"12",cy:"17",r:"0.6",fill:"currentColor",stroke:"none"})]});case"sidebar":return r.jsxs("svg",{...n,children:[r.jsx("rect",{x:"3.5",y:"4",width:"17",height:"16",rx:"2.5"}),r.jsx("path",{d:"M9.5 4v16"})]});case"plus":return r.jsx("svg",{...n,children:r.jsx("path",{d:"M12 5v14M5 12h14"})});case"shareTop":return r.jsxs("svg",{...n,children:[r.jsx("path",{d:"M12 15V4M8 8l4-4 4 4"}),r.jsx("path",{d:"M5 14v4.5A1.5 1.5 0 0 0 6.5 20h11a1.5 1.5 0 0 0 1.5-1.5V14"})]});case"trash":return r.jsx("svg",{...n,children:r.jsx("path",{d:"M5.5 7h13M9.5 7V5a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v2M7 7l.8 12a1.5 1.5 0 0 0 1.5 1.4h5.4a1.5 1.5 0 0 0 1.5-1.4L17 7"})});case"close":return r.jsx("svg",{...n,children:r.jsx("path",{d:"M6 6l12 12M18 6 6 18"})});case"clip":return r.jsx("svg",{...n,children:r.jsx("path",{d:"M8 12.5 15 5.5a3 3 0 1 1 4.2 4.2l-8.5 8.5a5 5 0 1 1-7.1-7.1L12 2.5"})});case"up":return r.jsx("svg",{...n,children:r.jsx("path",{d:"M12 19V5M6 11l6-6 6 6"})});case"search":return r.jsxs("svg",{...n,children:[r.jsx("circle",{cx:"11",cy:"11",r:"7"}),r.jsx("path",{d:"M20 20l-4.35-4.35"})]});case"chevron":return r.jsx("svg",{...n,children:r.jsx("path",{d:"M9 6l6 6-6 6"})});case"refresh":return r.jsxs("svg",{...n,children:[r.jsx("path",{d:"M4 12a8 8 0 0 1 14.5-4.6M20 12a8 8 0 0 1-14.5 4.6"}),r.jsx("path",{d:"M18.5 3.5v4h-4M5.5 20.5v-4h4"})]});case"check":return r.jsx("svg",{...n,children:r.jsx("path",{d:"M5 12.5l4.5 4.5L19 7"})});case"industry":return r.jsxs("svg",{...n,children:[r.jsx("path",{d:"M3.5 20.5V10l6-4v14.5M9.5 20.5V6l5-3v17.5M14.5 20.5V9l6 3v8.5"}),r.jsx("path",{d:"M3.5 20.5h17"})]});case"file":return r.jsxs("svg",{...n,children:[r.jsx("path",{d:"M7 3.5h7l4 4V20a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5z"}),r.jsx("path",{d:"M14 3.5V8h4.5"})]});case"upload":return r.jsxs("svg",{...n,children:[r.jsx("path",{d:"M12 15V4M8 8l4-4 4 4"}),r.jsx("path",{d:"M5 14v4.5A1.5 1.5 0 0 0 6.5 20h11a1.5 1.5 0 0 0 1.5-1.5V14"})]});case"bell":return r.jsxs("svg",{...n,children:[r.jsx("path",{d:"M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"}),r.jsx("path",{d:"M13.73 21a2 2 0 0 1-3.46 0"})]});case"logout":return r.jsxs("svg",{...n,children:[r.jsx("path",{d:"M9.5 12h11M17 8.5l3.5 3.5-3.5 3.5"}),r.jsx("path",{d:"M14 5H5a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h9"})]});default:return null}}function Fm(e){return e<1024?`${e} B`:e<1024*1024?`${Math.round(e/1024)} KB`:`${(e/(1024*1024)).toFixed(1)} MB`}function Bm(){const e=it(),{logout:t}=Un(),[n,a]=g.useState(""),[i,s]=g.useState(!0),[o,l]=g.useState(!0),[d,c]=g.useState([]),[h,m]=g.useState(null),[x,w]=g.useState([]),[N,y]=g.useState(!1),[j,f]=g.useState(""),[u,p]=g.useState([]),[v,S]=g.useState(!1),[C,k]=g.useState("history"),[M,U]=g.useState(null),[L,R]=g.useState(()=>Object.fromEntries(dn.map(b=>[b.key,[...Lm[b.key]||[]]]))),[O,ie]=g.useState(null),Ut=g.useRef(null),Ue=g.useRef(null),xt=g.useRef(null),T=dn.find(b=>b.key===O)||null,E=O?L[O]||[]:[],_=b=>{const A=Array.from(b.target.files||[]);if(!A.length||!O)return;const W=A.map(se=>({id:`doc-${Date.now()}-${Math.random()}`,name:se.name,size:se.size<1024*1024?`${Math.round(se.size/1024)} KB`:`${(se.size/(1024*1024)).toFixed(1)} MB`,date:"Just now",type:se.name.split(".").pop().toLowerCase(),sharedBy:"Me",note:""}));R(se=>({...se,[O]:[...W,...se[O]||[]]})),b.target.value=""},D=(b,A)=>R(W=>({...W,[b]:(W[b]||[]).filter(se=>se.id!==A)}));g.useEffect(()=>{var b;(b=xt.current)==null||b.scrollIntoView({behavior:"smooth",block:"end"})},[u,v]);const V=b=>{const A=Array.from(b.target.files||[]);A.length&&(c(W=>[...W,...A.map(se=>({id:`${se.name}-${se.size}-${Date.now()}-${Math.random()}`,file:se}))]),b.target.value="")},K=b=>c(A=>A.filter(W=>W.id!==b)),sn=b=>{w(A=>A.includes(b)?A.filter(W=>W!==b):[...A,b]),y(!1)},st=b=>w(A=>A.filter(W=>W!==b)),on=()=>{const b=n.trim();if(!b&&!d.length&&!x.length)return;const A={id:`msg-${Date.now()}-${Math.random()}`,role:"user",text:b,attachments:d.map(W=>({id:W.id,name:W.file.name,size:W.file.size})),tags:x};p(W=>[...W,A]),a(""),c([]),w([]),S(!0),setTimeout(()=>{p(W=>[...W,{id:`msg-${Date.now()}-${Math.random()}`,role:"assistant",text:"Thanks for your question! This is a placeholder reply — wire this up to the NexusRAG /rag/query API endpoint to get real grounded answers with cited sources."}]),S(!1)},900)},Le=()=>{p([]),a(""),c([]),w([]),S(!1),ie(null)},Ht=u.length>0,ri=j.trim().toLowerCase(),Ao=Am.map(b=>({...b,items:ri?b.items.filter(A=>A.title.toLowerCase().includes(ri)):b.items})).filter(b=>b.items.length>0),Lu=ri.length>0&&Ao.length===0,_u=[{key:"home",label:"Home",icon:"home",href:"/"},{key:"meetings",label:"My Meetings",icon:"calendar",href:"/meetings"},{key:"chat",label:"NexusRAG Chat",icon:"chat",badge:"NEW",active:!O,href:"/chat"},{key:"industries",label:"Industries",icon:"industry",children:dn.map(b=>({key:b.key,label:b.label,emoji:b.emoji,action:()=>ie(b.key)}))},{key:"shared",label:"Shared with Me",icon:"share",action:()=>{ie(null),k("shared")}},{key:"notes",label:"Notes",icon:"note",href:"/notes"},{key:"notifications",label:"Notifications",icon:"bell",href:"/notifications"}];return r.jsxs("div",{className:"jolly-dash",children:[r.jsx("style",{children:`
/* ===== Jolly / NexusRAG User Dashboard ===== */
.jolly-dash {
  --ink: #0f1115;
  --paper: #ececef;
  --panel: #ffffff;
  --line: #e7e7ea;
  --line-soft: #f0f0f2;
  --violet: #7c5cff;
  --violet-soft: #efeaff;
  --text: #14151a;
  --text-soft: #6b6d76;
  --text-faint: #9a9ca4;

  font-family: "Inter", sans-serif;
  background: var(--paper);
  min-height: 100vh;
  color: var(--text);
  -webkit-font-smoothing: antialiased;
}
.jolly-dash *, .jolly-dash *::before, .jolly-dash *::after { box-sizing: border-box; }
.jolly-dash button { font-family: inherit; }

/* ── top bar ── */
.jolly-dash .top-bar {
  background: #0b0c10; color: #fff;
  font-size: 13px;
  display: flex; align-items: center; justify-content: center;
  gap: 10px; padding: 9px 16px; position: relative;
}
.jolly-dash .top-bar .badges { display: inline-flex; gap: 4px; align-items: center; }
.jolly-dash .top-bar .badges span {
  width: 16px; height: 16px; border-radius: 4px;
  background: rgba(255,255,255,0.15); display: inline-block;
}
.jolly-dash .top-bar a { color: #fff; text-decoration: underline; font-weight: 600; margin-left: 4px; }
.jolly-dash .top-bar .close {
  position: absolute; right: 18px; top: 50%; transform: translateY(-50%);
  background: none; border: none; color: #fff; opacity: 0.7; cursor: pointer; display: flex;
}
.jolly-dash .top-bar .close:hover { opacity: 1; }

/* ── shell ── */
.jolly-dash .shell { max-width: 1440px; margin: 0 auto; padding: 22px; }
.jolly-dash .app-frame {
  background: var(--panel); border-radius: 22px;
  box-shadow: 0 20px 50px -20px rgba(15,17,21,0.15);
  display: grid; grid-template-columns: 250px 1fr 280px;
  min-height: calc(100vh - 44px); overflow: hidden;
}
@media (max-width: 1100px) {
  .jolly-dash .app-frame { grid-template-columns: 220px 1fr; }
  .jolly-dash .right-panel { display: none; }
}
@media (max-width: 760px) {
  .jolly-dash .app-frame { grid-template-columns: 1fr; }
  .jolly-dash .side-panel { display: none; }
}

/* ── sidebar ── */
.jolly-dash .side-panel {
  border-right: 1px solid var(--line);
  padding: 22px 18px;
  display: flex; flex-direction: column;
}
.jolly-dash .brand-row {
  display: flex; align-items: center; gap: 10px;
  margin-bottom: 26px; padding: 0 4px;
}
.jolly-dash .brand-mark {
  width: 34px; height: 34px; border-radius: 10px;
  background: var(--violet); display: flex; align-items: center; justify-content: center;
  color: #fff; flex-shrink: 0;
}
.jolly-dash .brand-name { font-weight: 700; font-size: 18px; letter-spacing: -0.01em; }

.jolly-dash .profile-card {
  display: flex; align-items: center; gap: 10px;
  padding: 10px; border-radius: 14px; border: 1px solid var(--line);
  margin-bottom: 22px; cursor: pointer; transition: background 0.2s;
}
.jolly-dash .profile-card:hover { background: var(--line-soft); }
.jolly-dash .avatar {
  width: 36px; height: 36px; border-radius: 50%;
  background: linear-gradient(135deg, var(--violet), #b8a6ff); flex-shrink: 0;
}
.jolly-dash .profile-meta { flex: 1; min-width: 0; }
.jolly-dash .profile-name { font-size: 13.5px; font-weight: 600; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
.jolly-dash .profile-plan { font-size: 12px; color: var(--text-faint); }
.jolly-dash .profile-card .chev { color: var(--text-faint); flex-shrink: 0; }

.jolly-dash .menu-label {
  font-size: 11px; font-weight: 600; letter-spacing: 0.08em;
  color: var(--text-faint); padding: 0 10px; margin-bottom: 8px;
}
.jolly-dash .menu-list { display: flex; flex-direction: column; gap: 2px; }
.jolly-dash .menu-item {
  display: flex; align-items: center; gap: 11px;
  padding: 10px 12px; border-radius: 10px;
  font-size: 14px; color: var(--text-soft);
  cursor: pointer; transition: background 0.2s, color 0.2s;
  border: none; background: none; width: 100%; text-align: left;
}
.jolly-dash .menu-item:hover { background: var(--line-soft); color: var(--text); }
.jolly-dash .menu-item.active { background: var(--violet-soft); color: var(--violet); font-weight: 600; }
.jolly-dash .menu-item .badge {
  margin-left: auto; font-size: 9.5px; font-weight: 700;
  background: var(--violet); color: #fff;
  padding: 2px 6px; border-radius: 6px;
}
.jolly-dash .menu-chev {
  margin-left: auto; color: var(--text-faint);
  display: flex; transition: transform 0.2s;
}
.jolly-dash .menu-item.expanded .menu-chev { transform: rotate(90deg); }
.jolly-dash .menu-group { display: flex; flex-direction: column; }
.jolly-dash .submenu { display: flex; flex-direction: column; gap: 1px; padding: 2px 0 4px 36px; max-height: 280px; overflow-y: auto; }
.jolly-dash .submenu-item {
  display: flex; align-items: center; gap: 7px; width: 100%; text-align: left;
  border: none; background: none; font-size: 12.5px; color: var(--text-soft);
  padding: 7px 10px; border-radius: 8px; cursor: pointer;
  transition: background 0.2s, color 0.2s; font-family: inherit;
}
.jolly-dash .submenu-item:hover { background: var(--line-soft); color: var(--text); }
.jolly-dash .submenu-item.active { background: var(--violet-soft); color: var(--violet); font-weight: 600; }
.jolly-dash .sub-label { flex: 1; min-width: 0; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
.jolly-dash .sub-count { font-size: 9.5px; font-weight: 700; padding: 1px 6px; border-radius: 100px; background: var(--line); color: var(--text-faint); flex-shrink: 0; transition: background 0.2s; }
.jolly-dash .submenu-item.active .sub-count { background: var(--violet); color: #fff; }

.jolly-dash .side-spacer { flex: 1; }
.jolly-dash .bottom-links { display: flex; flex-direction: column; gap: 2px; }

/* ── main panel ── */
.jolly-dash .main-panel {
  display: flex; flex-direction: column; min-width: 0; min-height: 0;
  max-height: calc(100vh - 44px); overflow-y: auto;
}
.jolly-dash .main-top {
  display: flex; align-items: center; justify-content: space-between; padding: 20px 26px;
}
.jolly-dash .icon-btn {
  width: 36px; height: 36px; border-radius: 10px;
  border: 1px solid var(--line); background: #fff;
  display: flex; align-items: center; justify-content: center;
  color: var(--text-soft); cursor: pointer; transition: background 0.2s;
}
.jolly-dash .icon-btn:hover { background: var(--line-soft); }
.jolly-dash .main-top-left { display: flex; gap: 8px; }
.jolly-dash .main-top-right { display: flex; gap: 10px; }
.jolly-dash .pill-btn {
  display: inline-flex; align-items: center; gap: 7px;
  padding: 8px 14px; border-radius: 100px;
  border: 1px solid var(--line); background: #fff;
  font-size: 13.5px; font-weight: 500; color: var(--text);
  cursor: pointer; transition: background 0.2s;
}
.jolly-dash .pill-btn:hover { background: var(--line-soft); }
.jolly-dash .pill-btn.danger { color: #e0433d; border-color: #f3c9c7; }
.jolly-dash .pill-btn.danger:hover { background: #fdf1f0; }

.jolly-dash .promo-banner {
  margin: 0 26px 18px;
  display: flex; align-items: center; gap: 12px;
  padding: 11px 16px; border-radius: 14px;
  background: var(--violet-soft); border: 1px solid #e2d9ff; font-size: 13.5px;
}
.jolly-dash .promo-tag {
  font-size: 10px; font-weight: 700; letter-spacing: 0.04em;
  background: var(--violet); color: #fff; padding: 3px 8px; border-radius: 6px; flex-shrink: 0;
}
.jolly-dash .promo-text { color: var(--text); flex: 1; }
.jolly-dash .promo-text a { color: var(--violet); font-weight: 600; text-decoration: underline; }
.jolly-dash .promo-close {
  background: none; border: none; color: var(--text-faint); cursor: pointer; display: flex; flex-shrink: 0;
}
.jolly-dash .promo-close:hover { color: var(--text); }

/* ── chat hero ── */
.jolly-dash .chat-hero { text-align: center; padding: 30px 26px 26px; }
.jolly-dash .chat-hero h1 {
  font-size: 34px; font-weight: 700; letter-spacing: -0.01em; margin: 0 0 10px;
  display: flex; align-items: center; justify-content: center; gap: 10px;
}
.jolly-dash .chat-hero h1 .mascot {
  width: 34px; height: 34px; border-radius: 9px; background: var(--violet);
  display: inline-flex; align-items: center; justify-content: center; color: #fff;
}
.jolly-dash .chat-hero h1 .brand-word { color: var(--violet); }
.jolly-dash .chat-hero p { color: var(--text-soft); font-size: 14.5px; line-height: 1.6; max-width: 520px; margin: 0 auto; }

/* ── chat thread ── */
.jolly-dash .chat-thread {
  flex: 1; padding: 10px 26px 20px;
  display: flex; flex-direction: column; gap: 16px;
  max-width: 760px; margin: 0 auto; width: 100%;
}
.jolly-dash .msg-row { display: flex; align-items: flex-end; gap: 10px; }
.jolly-dash .msg-row.user { flex-direction: row-reverse; }
.jolly-dash .msg-avatar {
  width: 28px; height: 28px; border-radius: 50%; flex-shrink: 0;
  display: flex; align-items: center; justify-content: center;
}
.jolly-dash .msg-avatar.assistant { background: var(--violet); color: #fff; }
.jolly-dash .msg-avatar.user { background: linear-gradient(135deg, var(--violet), #b8a6ff); }
.jolly-dash .msg-bubble { max-width: 72%; padding: 12px 15px; border-radius: 16px; font-size: 14px; line-height: 1.55; }
.jolly-dash .msg-row.assistant .msg-bubble { background: var(--line-soft); color: var(--text); border-bottom-left-radius: 4px; }
.jolly-dash .msg-row.user .msg-bubble { background: var(--ink); color: #fff; border-bottom-right-radius: 4px; }
.jolly-dash .msg-text { white-space: pre-wrap; word-break: break-word; }
.jolly-dash .msg-meta-row { display: flex; flex-wrap: wrap; gap: 6px; margin-bottom: 8px; }
.jolly-dash .msg-tag { font-size: 10.5px; font-weight: 600; padding: 3px 8px; border-radius: 100px; background: rgba(255,255,255,0.18); }
.jolly-dash .msg-row.assistant .msg-tag { background: var(--violet-soft); color: var(--violet); }
.jolly-dash .msg-file { display: inline-flex; align-items: center; gap: 4px; font-size: 11px; padding: 3px 8px; border-radius: 100px; background: rgba(255,255,255,0.18); }
.jolly-dash .msg-bubble.typing { display: flex; align-items: center; gap: 4px; padding: 14px 16px; }
.jolly-dash .typing-dot { width: 6px; height: 6px; border-radius: 50%; background: var(--text-faint); animation: jolly-typing 1.2s infinite ease-in-out; }
.jolly-dash .typing-dot:nth-child(2) { animation-delay: 0.15s; }
.jolly-dash .typing-dot:nth-child(3) { animation-delay: 0.3s; }
@keyframes jolly-typing { 0%,60%,100%{opacity:0.3;transform:translateY(0)} 30%{opacity:1;transform:translateY(-3px)} }

/* ── composer ── */
.jolly-dash .composer-wrap { padding: 0 26px 30px; max-width: 700px; margin: 0 auto; width: 100%; }
.jolly-dash .composer { border: 1px solid var(--line); border-radius: 20px; padding: 16px 18px 14px; background: #fff; }
.jolly-dash .composer textarea {
  width: 100%; border: none; outline: none; resize: none;
  font-size: 14.5px; font-family: "Inter", sans-serif;
  color: var(--text); min-height: 46px; margin-bottom: 10px;
}
.jolly-dash .composer textarea::placeholder { color: var(--text-faint); }
.jolly-dash .composer-bottom { display: flex; align-items: center; justify-content: space-between; }
.jolly-dash .composer-bottom-left { display: flex; align-items: center; gap: 8px; }
.jolly-dash .attach-btn {
  width: 32px; height: 32px; border-radius: 9px; border: 1px solid var(--line);
  background: #fff; color: var(--text-soft);
  display: flex; align-items: center; justify-content: center; cursor: pointer;
  transition: background 0.2s, color 0.2s, border-color 0.2s; flex-shrink: 0;
}
.jolly-dash .attach-btn:hover { background: var(--violet-soft); border-color: var(--violet); color: var(--violet); }
.jolly-dash .model-select {
  display: inline-flex; align-items: center; gap: 6px;
  font-size: 13px; color: var(--text-soft);
  border: 1px solid var(--line); padding: 6px 10px; border-radius: 10px; cursor: pointer; background: #fff;
}
.jolly-dash .send-btn {
  width: 34px; height: 34px; border-radius: 10px; background: var(--ink);
  color: #fff; border: none; display: flex; align-items: center; justify-content: center;
  cursor: pointer; transition: background 0.2s;
}
.jolly-dash .send-btn:hover { background: var(--violet); }

/* ── content extras ── */
.jolly-dash .add-content-row { display: flex; align-items: center; gap: 10px; margin-top: 14px; flex-wrap: wrap; }
.jolly-dash .add-content-btn {
  display: inline-flex; align-items: center; gap: 6px;
  font-size: 12.5px; font-weight: 600; color: var(--violet);
  background: var(--violet-soft); border: 1px solid #e2d9ff;
  cursor: pointer; padding: 8px 13px; border-radius: 10px;
  transition: background 0.2s; font-family: inherit;
}
.jolly-dash .add-content-btn:hover { background: #e2d9ff; border-color: var(--violet); }
.jolly-dash .add-content-menu-wrap { position: relative; flex-shrink: 0; }
.jolly-dash .content-dropdown {
  position: absolute; top: calc(100% + 6px); left: 0;
  background: #fff; border: 1px solid var(--line); border-radius: 12px;
  box-shadow: 0 12px 30px -10px rgba(15,17,21,0.18);
  padding: 6px; min-width: 160px; z-index: 20;
  display: flex; flex-direction: column; gap: 1px;
}
.jolly-dash .content-dropdown-item {
  display: flex; align-items: center; justify-content: space-between; gap: 8px;
  padding: 9px 10px; border-radius: 8px; border: none; background: none;
  font-size: 13.5px; color: var(--text); cursor: pointer; text-align: left;
  font-family: inherit; transition: background 0.2s;
}
.jolly-dash .content-dropdown-item:hover { background: var(--line-soft); }
.jolly-dash .content-dropdown-item.selected { color: var(--violet); font-weight: 600; }
.jolly-dash .industries-dropdown { min-width: 260px; max-height: 320px; overflow-y: auto; }
.jolly-dash .industry-emoji { flex-shrink: 0; font-size: 14px; line-height: 1; }
.jolly-dash .content-dropdown-label { flex: 1; min-width: 0; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
.jolly-dash .hidden-file-input { display: none; }
.jolly-dash .attachment-row { display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 12px; }
.jolly-dash .attachment-chip {
  display: flex; align-items: center; gap: 8px;
  background: var(--line-soft); border: 1px solid var(--line);
  border-radius: 12px; padding: 7px 8px 7px 10px; max-width: 220px;
}
.jolly-dash .content-tag-chip {
  display: flex; align-items: center; gap: 8px;
  background: var(--violet-soft); border: 1px solid #e2d9ff;
  border-radius: 100px; padding: 6px 6px 6px 12px;
}
.jolly-dash .content-tag-name { font-size: 12.5px; font-weight: 600; color: var(--violet); }
.jolly-dash .attachment-icon { color: var(--violet); flex-shrink: 0; display: flex; }
.jolly-dash .attachment-meta { min-width: 0; flex: 1; }
.jolly-dash .attachment-name { font-size: 12px; font-weight: 600; color: var(--text); white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
.jolly-dash .attachment-size { font-size: 10.5px; color: var(--text-faint); }
.jolly-dash .attachment-remove {
  background: none; border: none; color: var(--text-faint); cursor: pointer;
  display: flex; align-items: center; justify-content: center;
  flex-shrink: 0; padding: 2px; border-radius: 50%; transition: background 0.2s, color 0.2s;
}
.jolly-dash .attachment-remove:hover { background: #fff; color: var(--text); }
.jolly-dash .suggestion-chip {
  font-size: 12.5px; color: var(--text-soft); background: var(--line-soft);
  border: 1px solid var(--line); padding: 9px 13px; border-radius: 12px;
  cursor: pointer; transition: background 0.2s, border-color 0.2s;
  text-align: left; line-height: 1.4; max-width: 220px;
}
.jolly-dash .suggestion-chip:hover { background: #fff; border-color: var(--violet); color: var(--text); }

/* ── recent cards ── */
.jolly-dash .recent-section { padding: 0 26px 30px; }
.jolly-dash .recent-label { font-size: 13px; font-weight: 600; color: var(--text); margin-bottom: 12px; }
.jolly-dash .recent-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 14px; }
@media (max-width: 900px) { .jolly-dash .recent-grid { grid-template-columns: 1fr; } }
.jolly-dash .recent-card {
  border: 1px solid var(--line); border-radius: 14px; padding: 16px;
  cursor: pointer; transition: border-color 0.2s, background 0.2s;
  display: flex; flex-direction: column; gap: 26px;
  background: #fff; text-align: left; font-family: inherit; width: 100%;
}
.jolly-dash .recent-card:hover { border-color: var(--violet); background: var(--violet-soft); }
.jolly-dash .recent-card .r-icon {
  width: 28px; height: 28px; border-radius: 8px; background: var(--line-soft);
  display: flex; align-items: center; justify-content: center; color: var(--text-soft);
}
.jolly-dash .recent-card .r-title { font-size: 13.5px; font-weight: 600; line-height: 1.4; }
.jolly-dash .recent-card .r-time { font-size: 12px; color: var(--text-faint); }

/* ── back btn ── */
.jolly-dash .back-btn { display: inline-flex; align-items: center; gap: 7px; padding: 8px 14px; border-radius: 10px; border: 1px solid var(--line); background: var(--paper); font-size: 13px; font-weight: 500; color: var(--text-soft); cursor: pointer; transition: background 0.2s; font-family: inherit; }
.jolly-dash .back-btn:hover { background: var(--line-soft); color: var(--text); }

/* ── industry doc panel ── */
.jolly-dash .ind-panel { padding: 0 26px 30px; }
.jolly-dash .ind-hd { display: flex; align-items: center; gap: 16px; padding: 20px 0 18px; border-bottom: 1px solid var(--line); margin-bottom: 22px; }
.jolly-dash .ind-hd-emoji { width: 56px; height: 56px; border-radius: 18px; display: flex; align-items: center; justify-content: center; font-size: 28px; flex-shrink: 0; }
.jolly-dash .ind-hd-info { flex: 1; min-width: 0; }
.jolly-dash .ind-hd-title { font-size: 21px; font-weight: 700; letter-spacing: -0.01em; margin-bottom: 4px; }
.jolly-dash .ind-hd-desc { font-size: 13px; color: var(--text-soft); }
.jolly-dash .ind-stats { display: flex; gap: 20px; flex-shrink: 0; text-align: center; }
.jolly-dash .ind-stat-val { font-size: 22px; font-weight: 700; color: var(--violet); }
.jolly-dash .ind-stat-lbl { font-size: 11px; color: var(--text-faint); }
.jolly-dash .ind-upload-zone { border: 2px dashed var(--line); border-radius: 18px; padding: 32px 24px; text-align: center; margin-bottom: 24px; cursor: pointer; transition: border-color 0.2s, background 0.2s; }
.jolly-dash .ind-upload-zone:hover { border-color: var(--violet); background: var(--violet-soft); }
.jolly-dash .ind-upload-zone .uicon { font-size: 36px; margin-bottom: 10px; }
.jolly-dash .ind-upload-zone .utxt { font-size: 14.5px; font-weight: 600; margin-bottom: 4px; }
.jolly-dash .ind-upload-zone .uhint { font-size: 12px; color: var(--text-faint); }
.jolly-dash .ind-toolbar { display: flex; align-items: center; justify-content: space-between; margin-bottom: 14px; }
.jolly-dash .ind-toolbar-title { font-size: 14px; font-weight: 600; }
.jolly-dash .ind-add-btn { display: inline-flex; align-items: center; gap: 7px; padding: 8px 16px; border-radius: 10px; border: none; background: var(--violet); color: #fff; font-size: 13px; font-weight: 600; cursor: pointer; transition: background 0.2s; font-family: inherit; }
.jolly-dash .ind-add-btn:hover { background: #6b4ef5; }
.jolly-dash .ind-doc-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(240px,1fr)); gap: 14px; }
.jolly-dash .ind-doc-card { border: 1px solid var(--line); border-radius: 16px; padding: 16px; background: #fff; display: flex; flex-direction: column; gap: 10px; transition: border-color 0.2s, box-shadow 0.2s; }
.jolly-dash .ind-doc-card:hover { border-color: var(--violet); box-shadow: 0 4px 20px -8px rgba(124,92,255,0.2); }
.jolly-dash .ind-card-top { display: flex; align-items: flex-start; gap: 12px; }
.jolly-dash .ind-type-icon { width: 38px; height: 38px; border-radius: 10px; display: flex; align-items: center; justify-content: center; font-size: 18px; flex-shrink: 0; }
.jolly-dash .ind-type-icon.pdf { background: #fee2e2; } .jolly-dash .ind-type-icon.csv { background: #dcfce7; } .jolly-dash .ind-type-icon.xlsx { background: #dbeafe; } .jolly-dash .ind-type-icon.other { background: var(--line-soft); }
.jolly-dash .ind-card-meta { flex: 1; min-width: 0; }
.jolly-dash .ind-card-name { font-size: 13px; font-weight: 600; line-height: 1.4; word-break: break-word; color: var(--text); }
.jolly-dash .ind-card-info { font-size: 11px; color: var(--text-faint); margin-top: 2px; }
.jolly-dash .ind-card-note { font-size: 12px; color: var(--text-soft); background: var(--line-soft); border-radius: 8px; padding: 7px 10px; line-height: 1.4; }
.jolly-dash .ind-card-actions { display: flex; gap: 6px; flex-wrap: wrap; }
.jolly-dash .idc-btn { display: inline-flex; align-items: center; gap: 5px; padding: 5px 11px; border-radius: 8px; border: 1px solid var(--line); background: var(--paper); font-size: 11.5px; font-weight: 500; color: var(--text-soft); cursor: pointer; transition: all 0.2s; font-family: inherit; }
.jolly-dash .idc-btn:hover { background: #fff; color: var(--text); border-color: var(--violet); }
.jolly-dash .idc-btn.share { color: var(--violet); border-color: var(--violet); background: var(--violet-soft); } .jolly-dash .idc-btn.share:hover { background: var(--violet); color: #fff; }
.jolly-dash .idc-btn.del:hover { color: #dc2626; border-color: #fecaca; background: #fef2f2; }
.jolly-dash .ind-empty { text-align: center; padding: 60px 24px; border: 2px dashed var(--line); border-radius: 18px; }
.jolly-dash .ind-empty-icon { font-size: 42px; margin-bottom: 12px; } .jolly-dash .ind-empty-title { font-size: 16px; font-weight: 700; margin-bottom: 6px; } .jolly-dash .ind-empty-desc { font-size: 13.5px; color: var(--text-soft); margin-bottom: 20px; }

/* ── right panel ── */
.jolly-dash .right-panel { border-left: 1px solid var(--line); padding: 20px 18px; overflow-y: auto; }
.jolly-dash .rp-tabs { display: flex; margin-bottom: 18px; border: 1px solid var(--line); border-radius: 12px; overflow: hidden; }
.jolly-dash .rp-tab { flex: 1; padding: 9px 0; border: none; background: none; font-size: 12.5px; font-weight: 600; color: var(--text-soft); cursor: pointer; transition: background 0.2s, color 0.2s; font-family: inherit; }
.jolly-dash .rp-tab:first-child { border-right: 1px solid var(--line); }
.jolly-dash .rp-tab.active { background: var(--violet); color: #fff; }
.jolly-dash .rp-tab:not(.active):hover { background: var(--line-soft); color: var(--text); }
.jolly-dash .search-box { display: flex; align-items: center; gap: 8px; border: 1px solid var(--line); border-radius: 12px; padding: 9px 12px; margin-bottom: 22px; }
.jolly-dash .search-box input { border: none; outline: none; font-size: 13.5px; flex: 1; color: var(--text); background: none; }
.jolly-dash .search-box input::placeholder { color: var(--text-faint); }
.jolly-dash .search-box .kbd { font-size: 11px; color: var(--text-faint); border: 1px solid var(--line); border-radius: 5px; padding: 2px 5px; flex-shrink: 0; }
.jolly-dash .search-clear { background: none; border: none; color: var(--text-faint); cursor: pointer; display: flex; align-items: center; justify-content: center; flex-shrink: 0; padding: 2px; border-radius: 50%; transition: background 0.2s, color 0.2s; }
.jolly-dash .search-clear:hover { background: var(--line-soft); color: var(--text); }
.jolly-dash .no-results { font-size: 12.5px; color: var(--text-faint); padding: 8px 4px 16px; line-height: 1.5; }
.jolly-dash .history-group { margin-bottom: 20px; }
.jolly-dash .history-group-label { font-size: 11px; font-weight: 600; letter-spacing: 0.08em; color: var(--text-faint); text-transform: uppercase; margin-bottom: 8px; padding: 0 4px; }
.jolly-dash .history-item { display: flex; align-items: flex-start; gap: 10px; padding: 9px 6px; border-radius: 10px; cursor: pointer; transition: background 0.2s; border: none; background: none; width: 100%; text-align: left; font-family: inherit; }
.jolly-dash .history-item:hover { background: var(--line-soft); }
.jolly-dash .history-item .h-icon { color: var(--text-faint); margin-top: 2px; flex-shrink: 0; }
.jolly-dash .history-item .h-meta { flex: 1; min-width: 0; }
.jolly-dash .history-item .h-title { font-size: 13px; font-weight: 500; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
.jolly-dash .history-item .h-time { font-size: 11.5px; color: var(--text-faint); margin-top: 1px; }
.jolly-dash .shared-ind-label { font-size: 11px; font-weight: 700; letter-spacing: 0.06em; text-transform: uppercase; display: flex; align-items: center; gap: 6px; margin-bottom: 8px; }
.jolly-dash .shared-count-badge { font-size: 10px; font-weight: 700; padding: 1px 7px; border-radius: 100px; }
.jolly-dash .shared-card { border: 1px solid var(--line); border-radius: 14px; padding: 13px; background: #fff; display: flex; flex-direction: column; gap: 8px; transition: border-color 0.2s, box-shadow 0.2s; margin-bottom: 8px; }
.jolly-dash .shared-card:hover { border-color: var(--violet); box-shadow: 0 4px 16px -8px rgba(124,92,255,0.2); }
.jolly-dash .shared-card-top { display: flex; align-items: flex-start; gap: 10px; }
.jolly-dash .shared-doc-icon { width: 32px; height: 32px; border-radius: 8px; display: flex; align-items: center; justify-content: center; font-size: 15px; flex-shrink: 0; background: #fee2e2; }
.jolly-dash .shared-doc-meta { flex: 1; min-width: 0; }
.jolly-dash .shared-doc-name { font-size: 12.5px; font-weight: 600; line-height: 1.4; word-break: break-word; color: var(--text); }
.jolly-dash .shared-doc-by { font-size: 11px; color: var(--text-faint); margin-top: 2px; }
.jolly-dash .shared-doc-note { font-size: 11.5px; color: var(--text-soft); padding: 6px 9px; border-radius: 8px; background: var(--line-soft); line-height: 1.45; }
.jolly-dash .shared-actions { display: flex; gap: 6px; }
.jolly-dash .shared-btn { display: inline-flex; align-items: center; gap: 5px; padding: 5px 10px; border-radius: 8px; border: 1px solid var(--line); background: var(--paper); font-size: 11.5px; font-weight: 500; color: var(--text-soft); cursor: pointer; transition: all 0.2s; font-family: inherit; }
.jolly-dash .shared-btn:hover { background: #fff; color: var(--text); border-color: var(--violet); }
.jolly-dash .shared-btn.share { color: var(--violet); border-color: var(--violet); background: var(--violet-soft); } .jolly-dash .shared-btn.share:hover { background: var(--violet); color: #fff; }
.jolly-dash .jd-overlay { position: fixed; inset: 0; z-index: 9999; background: rgba(15,17,21,0.5); backdrop-filter: blur(5px); display: flex; align-items: center; justify-content: center; padding: 24px; }
.jolly-dash .jd-modal { background: var(--panel); border-radius: 22px; box-shadow: 0 30px 60px -20px rgba(15,17,21,0.35); padding: 26px; width: 100%; max-width: 400px; }
.jolly-dash .jd-modal-hd { display: flex; align-items: center; justify-content: space-between; margin-bottom: 16px; }
.jolly-dash .jd-modal-title { font-size: 16px; font-weight: 700; }
.jolly-dash .jd-modal-close { width: 30px; height: 30px; border-radius: 50%; border: 1px solid var(--line); background: var(--paper); color: var(--text-soft); font-size: 13px; display: flex; align-items: center; justify-content: center; cursor: pointer; transition: background 0.2s; }
.jolly-dash .jd-modal-close:hover { background: var(--line-soft); color: var(--text); }
.jolly-dash .jd-modal-preview { background: var(--paper); border: 1px solid var(--line); border-radius: 12px; padding: 12px 14px; margin-bottom: 18px; display: flex; flex-direction: column; gap: 7px; }
.jolly-dash .jd-modal-ind { display: inline-flex; align-items: center; gap: 6px; font-size: 11px; font-weight: 700; padding: 3px 10px; border-radius: 100px; width: fit-content; }
.jolly-dash .jd-modal-docname { font-size: 13px; font-weight: 600; color: var(--text); }
.jolly-dash .jd-modal-note { font-size: 12px; color: var(--text-soft); line-height: 1.4; }
.jolly-dash .jd-modal-grid { display: grid; grid-template-columns: repeat(3,1fr); gap: 8px; margin-bottom: 16px; }
.jolly-dash .jd-social-btn { display: flex; flex-direction: column; align-items: center; gap: 6px; padding: 12px 6px; border-radius: 12px; border: 1.5px solid var(--line); background: var(--paper); text-decoration: none; color: var(--text); transition: all 0.2s; cursor: pointer; }
.jolly-dash .jd-social-btn:hover { background: var(--sc, var(--violet)); color: #fff; border-color: transparent; box-shadow: 0 4px 14px -4px var(--sc,rgba(124,92,255,0.5)); }
.jolly-dash .jd-social-icon { font-size: 18px; font-weight: 700; line-height: 1; } .jolly-dash .jd-social-label { font-size: 10px; font-weight: 600; white-space: nowrap; }
.jolly-dash .jd-modal-divider { text-align: center; color: var(--text-faint); font-size: 11.5px; position: relative; margin-bottom: 14px; }
.jolly-dash .jd-modal-divider::before,.jolly-dash .jd-modal-divider::after { content:""; position: absolute; top: 50%; width: calc(50% - 18px); height: 1px; background: var(--line); }
.jolly-dash .jd-modal-divider::before { left: 0; } .jolly-dash .jd-modal-divider::after { right: 0; }
.jolly-dash .jd-copy-btn { width: 100%; padding: 11px; border-radius: 10px; border: 1.5px solid var(--line); background: var(--paper); font-size: 13.5px; font-weight: 600; color: var(--text); cursor: pointer; transition: all 0.2s; font-family: inherit; }
.jolly-dash .jd-copy-btn:hover { background: var(--line-soft); } .jolly-dash .jd-copy-btn.copied { background: #dcfce7; border-color: #86efac; color: #15803d; }
`}),o&&r.jsxs("div",{className:"top-bar",children:[r.jsxs("span",{className:"badges",children:[r.jsx("span",{}),r.jsx("span",{}),r.jsx("span",{})]}),"Get NexusRAG for Chrome ",r.jsx(I,{to:"/chat",children:"Open Chat →"}),r.jsx("button",{className:"close",onClick:()=>l(!1),"aria-label":"Dismiss",children:r.jsx(B,{name:"close",size:15})})]}),r.jsx("div",{className:"shell",children:r.jsxs("div",{className:"app-frame",children:[r.jsxs("div",{className:"side-panel",children:[r.jsxs("div",{className:"brand-row",children:[r.jsx("div",{className:"brand-mark",children:r.jsx(B,{name:"chat",size:17})}),r.jsx("div",{className:"brand-name",children:"NexusRAG"})]}),r.jsxs("div",{className:"profile-card",onClick:()=>e("/dashboard"),children:[r.jsx("div",{className:"avatar"}),r.jsxs("div",{className:"profile-meta",children:[r.jsx("div",{className:"profile-name",children:"Matthew Johnson"}),r.jsx("div",{className:"profile-plan",children:"Free account"})]}),r.jsx("span",{className:"chev",children:r.jsx(B,{name:"chevron",size:16})})]}),r.jsx("div",{className:"menu-label",children:"MENU"}),r.jsx("div",{className:"menu-list",children:_u.map(b=>b.children?r.jsxs("div",{className:"menu-group",children:[r.jsxs("button",{className:`menu-item${h===b.key?" expanded":""}`,onClick:()=>m(A=>A===b.key?null:b.key),children:[r.jsx(B,{name:b.icon,size:17}),b.label,r.jsx("span",{className:"menu-chev",children:r.jsx(B,{name:"chevron",size:14})})]}),h===b.key&&r.jsx("div",{className:"submenu",children:b.children.map(A=>r.jsxs("button",{className:`submenu-item${O===A.key?" active":""}`,onClick:A.action||(()=>e(A.href)),children:[r.jsx("span",{style:{fontSize:13,flexShrink:0},children:A.emoji}),r.jsx("span",{className:"sub-label",children:A.label}),r.jsx("span",{className:"sub-count",children:(L[A.key]||[]).length})]},A.key))})]},b.key):r.jsxs("button",{className:`menu-item${b.active?" active":""}`,onClick:b.action||(()=>e(b.href)),children:[r.jsx(B,{name:b.icon,size:17}),b.label,b.badge&&r.jsx("span",{className:"badge",children:b.badge})]},b.key))}),r.jsx("div",{className:"side-spacer"}),r.jsxs("div",{className:"bottom-links",children:[r.jsxs("button",{className:"menu-item",onClick:()=>e("/settings"),children:[r.jsx(B,{name:"settings",size:17})," Settings"]}),r.jsxs("button",{className:"menu-item",onClick:()=>e("/help"),children:[r.jsx(B,{name:"help",size:17})," Help & Support"]}),r.jsxs("button",{className:"menu-item",onClick:()=>{t(),e("/login")},children:[r.jsx(B,{name:"logout",size:17})," Sign Out"]})]})]}),r.jsxs("div",{className:"main-panel",children:[r.jsxs("div",{className:"main-top",children:[r.jsxs("div",{className:"main-top-left",children:[r.jsx("button",{className:"icon-btn","aria-label":"Toggle sidebar",children:r.jsx(B,{name:"sidebar",size:17})}),O?r.jsx("button",{className:"back-btn",onClick:()=>ie(null),children:"← Back to Chat"}):r.jsx("button",{className:"icon-btn","aria-label":"New chat",onClick:Le,children:r.jsx(B,{name:"plus",size:17})})]}),r.jsx("div",{className:"main-top-right",children:O?r.jsxs("button",{className:"pill-btn",onClick:()=>e("/chat"),children:[r.jsx(B,{name:"chat",size:15})," Open in Chat"]}):r.jsxs(r.Fragment,{children:[r.jsxs("button",{className:"pill-btn",onClick:()=>e("/chat"),children:[r.jsx(B,{name:"shareTop",size:15})," Open Full Chat"]}),r.jsxs("button",{className:"pill-btn danger",onClick:Le,children:[r.jsx(B,{name:"trash",size:15})," Clear Chat"]})]})})]}),i&&!O&&r.jsxs("div",{className:"promo-banner",children:[r.jsx("span",{className:"promo-tag",children:"LIMITED"}),r.jsxs("span",{className:"promo-text",children:["Get 1 month FREE by paying annually"," ",r.jsx(I,{to:"/chat",children:"Start Querying →"})]}),r.jsx("button",{className:"promo-close",onClick:()=>s(!1),children:r.jsx(B,{name:"close",size:15})})]}),O&&T?r.jsxs("div",{className:"ind-panel",children:[r.jsxs("div",{className:"ind-hd",children:[r.jsx("div",{className:"ind-hd-emoji",style:{background:T.bg},children:T.emoji}),r.jsxs("div",{className:"ind-hd-info",children:[r.jsx("div",{className:"ind-hd-title",children:T.label}),r.jsx("div",{className:"ind-hd-desc",children:T.areas})]}),r.jsx("div",{className:"ind-stats",children:r.jsxs("div",{children:[r.jsx("div",{className:"ind-stat-val",children:E.length}),r.jsx("div",{className:"ind-stat-lbl",children:"Documents"})]})})]}),r.jsxs("div",{className:"ind-upload-zone",onClick:()=>{var b;return(b=Ue.current)==null?void 0:b.click()},children:[r.jsx("div",{className:"uicon",children:"📤"}),r.jsx("div",{className:"utxt",children:"Drop files here or click to upload"}),r.jsx("div",{className:"uhint",children:"PDF, CSV, XLSX, DOCX, TXT, MD — all accepted"})]}),r.jsx("input",{ref:Ue,type:"file",multiple:!0,style:{display:"none"},accept:".pdf,.csv,.xlsx,.xls,.docx,.txt,.md",onChange:_}),r.jsxs("div",{className:"ind-toolbar",children:[r.jsxs("div",{className:"ind-toolbar-title",children:["📄 ",E.length," document",E.length!==1?"s":""," — ",T.label]}),r.jsxs("button",{className:"ind-add-btn",onClick:()=>{var b;return(b=Ue.current)==null?void 0:b.click()},children:[r.jsx(B,{name:"upload",size:14})," Add Document"]})]}),E.length===0?r.jsxs("div",{className:"ind-empty",children:[r.jsx("div",{className:"ind-empty-icon",children:"📭"}),r.jsx("div",{className:"ind-empty-title",children:"No documents yet"}),r.jsxs("div",{className:"ind-empty-desc",children:["Upload your first document for the ",T.label," knowledge base."]}),r.jsxs("button",{className:"ind-add-btn",onClick:()=>{var b;return(b=Ue.current)==null?void 0:b.click()},children:[r.jsx(B,{name:"upload",size:14})," Upload First Document"]})]}):r.jsx("div",{className:"ind-doc-grid",children:E.map(b=>{const A=b.type||"other",W={pdf:"📄",csv:"📊",xlsx:"📊",xls:"📊",docx:"📝",txt:"📝",md:"📝"},se=["pdf","csv","xlsx"].includes(A)?A:"other";return r.jsxs("div",{className:"ind-doc-card",children:[r.jsxs("div",{className:"ind-card-top",children:[r.jsx("div",{className:`ind-type-icon ${se}`,children:W[A]||"📄"}),r.jsxs("div",{className:"ind-card-meta",children:[r.jsx("div",{className:"ind-card-name",children:b.name}),r.jsxs("div",{className:"ind-card-info",children:[b.size," · ",b.date,b.sharedBy&&b.sharedBy!=="Me"&&` · by ${b.sharedBy}`]})]})]}),b.note&&r.jsx("div",{className:"ind-card-note",children:b.note}),r.jsxs("div",{className:"ind-card-actions",children:[r.jsx("button",{className:"idc-btn share",onClick:()=>U({doc:b,industry:T}),children:"↑ Share"}),r.jsx("button",{className:"idc-btn",onClick:()=>e("/chat"),children:"💬 Query"}),r.jsx("button",{className:"idc-btn del",onClick:()=>D(O,b.id),children:r.jsx(B,{name:"trash",size:12})})]})]},b.id)})})]}):r.jsxs(r.Fragment,{children:[Ht?r.jsxs("div",{className:"chat-thread",children:[u.map(b=>{var A,W,se,Lo;return r.jsxs("div",{className:`msg-row ${b.role}`,children:[b.role==="assistant"&&r.jsx("div",{className:"msg-avatar assistant",children:r.jsx(B,{name:"chat",size:14})}),r.jsxs("div",{className:"msg-bubble",children:[(((A=b.tags)==null?void 0:A.length)>0||((W=b.attachments)==null?void 0:W.length)>0)&&r.jsxs("div",{className:"msg-meta-row",children:[(se=b.tags)==null?void 0:se.map(Hn=>r.jsx("span",{className:"msg-tag",children:Hn},Hn)),(Lo=b.attachments)==null?void 0:Lo.map(Hn=>r.jsxs("span",{className:"msg-file",children:[r.jsx(B,{name:"file",size:12})," ",Hn.name]},Hn.id))]}),b.text&&r.jsx("div",{className:"msg-text",children:b.text})]}),b.role==="user"&&r.jsx("div",{className:"msg-avatar user"})]},b.id)}),v&&r.jsxs("div",{className:"msg-row assistant",children:[r.jsx("div",{className:"msg-avatar assistant",children:r.jsx(B,{name:"chat",size:14})}),r.jsxs("div",{className:"msg-bubble typing",children:[r.jsx("span",{className:"typing-dot"}),r.jsx("span",{className:"typing-dot"}),r.jsx("span",{className:"typing-dot"})]})]}),r.jsx("div",{ref:xt})]}):r.jsxs("div",{className:"chat-hero",children:[r.jsxs("h1",{children:["Start talking to ",r.jsx("span",{className:"mascot",children:r.jsx(B,{name:"chat",size:17})})," ",r.jsx("span",{className:"brand-word",children:"NexusRAG"})]}),r.jsx("p",{children:"Your multi-industry RAG assistant. Ask questions about Healthcare, Finance, Traffic and more — every answer is grounded in retrieved documents with cited sources."})]}),r.jsxs("div",{className:"composer-wrap",children:[r.jsxs("div",{className:"composer",children:[(d.length>0||x.length>0)&&r.jsxs("div",{className:"attachment-row",children:[x.map(b=>r.jsxs("div",{className:"content-tag-chip",children:[r.jsx("span",{className:"content-tag-name",children:b}),r.jsx("button",{type:"button",className:"attachment-remove",onClick:()=>st(b),children:r.jsx(B,{name:"close",size:12})})]},b)),d.map(b=>r.jsxs("div",{className:"attachment-chip",children:[r.jsx("span",{className:"attachment-icon",children:r.jsx(B,{name:"file",size:14})}),r.jsxs("div",{className:"attachment-meta",children:[r.jsx("div",{className:"attachment-name",children:b.file.name}),r.jsx("div",{className:"attachment-size",children:Fm(b.file.size)})]}),r.jsx("button",{type:"button",className:"attachment-remove",onClick:()=>K(b.id),children:r.jsx(B,{name:"close",size:12})})]},b.id))]}),r.jsx("textarea",{placeholder:"Write a question…",rows:2,value:n,onChange:b=>a(b.target.value),onKeyDown:b=>{b.key==="Enter"&&!b.shiftKey&&(b.preventDefault(),on())}}),r.jsxs("div",{className:"composer-bottom",children:[r.jsxs("div",{className:"composer-bottom-left",children:[r.jsx("button",{type:"button",className:"attach-btn",onClick:()=>{var b;return(b=Ut.current)==null?void 0:b.click()},"aria-label":"Attach files",children:r.jsx(B,{name:"clip",size:16})}),r.jsxs("div",{className:"model-select",children:["NexusRAG ",r.jsx(B,{name:"chevron",size:13})]})]}),r.jsx("button",{className:"send-btn",onClick:on,"aria-label":"Send",children:r.jsx(B,{name:"up",size:16})})]})]}),r.jsx("input",{ref:Ut,type:"file",multiple:!0,className:"hidden-file-input",onChange:V}),r.jsxs("div",{className:"add-content-row",children:[r.jsxs("div",{className:"add-content-menu-wrap",children:[r.jsxs("button",{type:"button",className:"add-content-btn",onClick:()=>y(b=>!b),children:[r.jsx(B,{name:"clip",size:14})," Add industry context",r.jsx(B,{name:"chevron",size:12})]}),N&&r.jsx("div",{className:"content-dropdown industries-dropdown",children:dn.map(b=>r.jsxs("button",{type:"button",className:`content-dropdown-item${x.includes(b.label)?" selected":""}`,onClick:()=>sn(b.label),children:[r.jsx("span",{className:"industry-emoji",children:b.emoji}),r.jsx("span",{className:"content-dropdown-label",children:b.label}),x.includes(b.label)&&r.jsx(B,{name:"check",size:14})]},b.key))})]}),Im.map(b=>r.jsx("button",{className:"suggestion-chip",onClick:()=>a(b),children:b},b))]})]}),!Ht&&r.jsxs("div",{className:"recent-section",children:[r.jsx("div",{className:"recent-label",children:"Recent Chats"}),r.jsx("div",{className:"recent-grid",children:Tm.map(b=>r.jsxs("button",{className:"recent-card",onClick:()=>b.title.toLowerCase()==="new chat"?Le():p([{id:`seed-${b.key}`,role:"user",text:b.title,attachments:[],tags:[]}]),children:[r.jsx("div",{className:"r-icon",children:r.jsx(B,{name:"chat",size:15})}),r.jsxs("div",{children:[r.jsx("div",{className:"r-title",children:b.title}),r.jsx("div",{className:"r-time",children:b.time})]})]},b.key))})]})]})]}),r.jsxs("div",{className:"right-panel",children:[r.jsxs("div",{className:"rp-tabs",children:[r.jsx("button",{className:`rp-tab${C==="history"?" active":""}`,onClick:()=>k("history"),children:"💬 History"}),r.jsx("button",{className:`rp-tab${C==="shared"?" active":""}`,onClick:()=>k("shared"),children:"🔗 Shared"})]}),C==="history"?r.jsxs(r.Fragment,{children:[r.jsxs("div",{className:"search-box",children:[r.jsx(B,{name:"search",size:15}),r.jsx("input",{type:"text",placeholder:"Search history",value:j,onChange:b=>f(b.target.value)}),j?r.jsx("button",{type:"button",className:"search-clear",onClick:()=>f(""),children:r.jsx(B,{name:"close",size:13})}):r.jsx("span",{className:"kbd",children:"⌘ K"})]}),Lu&&r.jsxs("div",{className:"no-results",children:['No chats match "',j,'"']}),Ao.map(b=>r.jsxs("div",{className:"history-group",children:[r.jsx("div",{className:"history-group-label",children:b.group}),b.items.map(A=>r.jsxs("button",{className:"history-item",onClick:()=>A.title.toLowerCase()==="new chat"?Le():p([{id:`seed-${A.key}`,role:"user",text:A.title,attachments:[],tags:[]}]),children:[r.jsx("span",{className:"h-icon",children:r.jsx(B,{name:"chat",size:15})}),r.jsxs("div",{className:"h-meta",children:[r.jsx("div",{className:"h-title",children:A.title}),r.jsx("div",{className:"h-time",children:A.time})]})]},A.key))]},b.group))]}):r.jsxs("div",{children:[dn.filter(b=>(L[b.key]||[]).length>0).map(b=>r.jsxs("div",{style:{marginBottom:18},children:[r.jsxs("div",{className:"shared-ind-label",style:{color:b.color},children:[b.emoji," ",b.label,r.jsx("span",{className:"shared-count-badge",style:{background:b.bg,color:b.color},children:(L[b.key]||[]).length})]}),(L[b.key]||[]).map(A=>r.jsxs("div",{className:"shared-card",children:[r.jsxs("div",{className:"shared-card-top",children:[r.jsx("div",{className:"shared-doc-icon",children:"📄"}),r.jsxs("div",{className:"shared-doc-meta",children:[r.jsx("div",{className:"shared-doc-name",children:A.name}),r.jsxs("div",{className:"shared-doc-by",children:[A.sharedBy!=="Me"?`from ${A.sharedBy}`:"Uploaded by you"," · ",A.date]})]})]}),A.note&&r.jsx("div",{className:"shared-doc-note",children:A.note}),r.jsxs("div",{className:"shared-actions",children:[r.jsx("button",{className:"shared-btn share",onClick:()=>U({doc:A,industry:b}),children:"↑ Share"}),r.jsx("button",{className:"shared-btn",onClick:()=>{ie(b.key),m("industries")},children:"📁 View"})]})]},A.id))]},b.key)),dn.every(b=>(L[b.key]||[]).length===0)&&r.jsxs("div",{style:{textAlign:"center",color:"var(--text-faint)",padding:"40px 16px",fontSize:13},children:[r.jsx("div",{style:{fontSize:32,marginBottom:10},children:"📂"}),"No documents yet. Use the Industries menu to add docs per sector."]})]})]})]})}),M&&r.jsx(Dm,{doc:M.doc,industry:M.industry,onClose:()=>U(null)})]})}function Om(e,t){const n=`💡 Ask NexusRAG about ${(t==null?void 0:t.label)||"AI"}:

`,a=e.text.replace(/\*\*(.*?)\*\*/g,"$1").replace(/\n•/g,`
•`);return n+a.slice(0,600)+(a.length>600?"…":"")}const $m=[{id:"whatsapp",label:"WhatsApp",color:"#25D366",icon:"W",url:e=>`https://wa.me/?text=${encodeURIComponent(e)}`},{id:"twitter",label:"Twitter / X",color:"#000",icon:"𝕏",url:e=>`https://twitter.com/intent/tweet?text=${encodeURIComponent(e.slice(0,280))}`},{id:"linkedin",label:"LinkedIn",color:"#0A66C2",icon:"in",url:e=>`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}&summary=${encodeURIComponent(e.slice(0,300))}`},{id:"facebook",label:"Facebook",color:"#1877F2",icon:"f",url:e=>`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}&quote=${encodeURIComponent(e.slice(0,300))}`},{id:"telegram",label:"Telegram",color:"#26A5E4",icon:"✈",url:e=>`https://t.me/share/url?url=${encodeURIComponent(window.location.href)}&text=${encodeURIComponent(e.slice(0,400))}`},{id:"email",label:"Email",color:"#6b7280",icon:"✉",url:e=>`mailto:?subject=NexusRAG%20Answer&body=${encodeURIComponent(e)}`}];function Um({msg:e,industry:t,onClose:n}){const[a,i]=g.useState(!1),s=Om(e,t),o=()=>{const l=`${s}

${window.location.href}`;navigator.clipboard.writeText(l).catch(()=>{}),i(!0),setTimeout(()=>i(!1),2e3)};return r.jsx("div",{className:"share-overlay",onClick:n,children:r.jsxs("div",{className:"share-box",onClick:l=>l.stopPropagation(),children:[r.jsxs("div",{className:"share-hd",children:[r.jsx("div",{className:"share-title",children:"Share this answer"}),r.jsx("button",{className:"share-close",onClick:n,children:"✕"})]}),r.jsxs("div",{className:"share-preview",children:[r.jsxs("div",{className:"share-preview-label",children:[t==null?void 0:t.emoji," ",t==null?void 0:t.label," · NexusRAG"]}),r.jsxs("div",{className:"share-preview-text",children:[s.slice(0,200),s.length>200?"…":""]})]}),r.jsx("div",{className:"share-grid",children:$m.map(l=>r.jsxs("a",{href:l.url(s),target:"_blank",rel:"noopener noreferrer",className:"social-btn",style:{"--sc":l.color},children:[r.jsx("span",{className:"social-icon",children:l.icon}),r.jsx("span",{className:"social-label",children:l.label})]},l.id))}),r.jsx("div",{className:"share-divider",children:"or"}),r.jsx("button",{className:`copy-link-btn${a?" copied":""}`,onClick:o,children:a?"✓ Copied to clipboard!":"🔗 Copy answer + link"})]})})}const rd=[{key:"healthcare",emoji:"🏥",label:"Healthcare",desc:"PubMedQA — diagnostics, patient care, medical research",color:"#22c55e",bg:"#dcfce7",samples:["What are the common symptoms of Type 2 diabetes?","How is CRISPR used in gene therapy?","What treatment options exist for early-stage lung cancer?"]},{key:"finance",emoji:"💰",label:"Banking & Finance",desc:"FinQA / TAT-QA — market analysis, risk, banking regulations",color:"#3b82f6",bg:"#dbeafe",samples:["What are the Basel III capital adequacy requirements?","How does quantitative easing affect inflation?","Explain the difference between CDOs and CMOs."]},{key:"traffic",emoji:"🚦",label:"Traffic & Transport",desc:"Custom dataset — driving rules, road safety, traffic law",color:"#f59e0b",bg:"#fef3c7",samples:["What is the legal blood alcohol limit for driving?","When must a driver yield to pedestrians at a zebra crossing?","What are the rules for overtaking on a single-lane road?"]}],ad={healthcare:{text:`Based on the retrieved medical literature, **Type 2 diabetes** is characterised by insulin resistance and relative insulin deficiency. Common symptoms include:

• **Polyuria** — frequent urination, especially at night
• **Polydipsia** — increased thirst
• **Unexplained weight loss**
• **Fatigue and lethargy**
• **Blurred vision**
• **Slow-healing wounds**
• **Recurrent infections** (particularly skin, gum, bladder)

Many patients remain **asymptomatic** for years, which is why routine screening is recommended for at-risk individuals (BMI > 25, family history, age > 45).`,sources:[{id:"src-1",title:"PubMedQA: Biomedical Research QA",page:"p. 42",relevance:.94},{id:"src-2",title:"WHO Diabetes Fact Sheet 2023",page:"§ 2.1",relevance:.91},{id:"src-3",title:"ADA Standards of Medical Care 2024",page:"p. 118",relevance:.87}]},finance:{text:`**Quantitative Easing (QE)** is a monetary policy tool where a central bank purchases financial assets to inject liquidity into the economy. Its effects on inflation include:

• **Increases money supply** — more currency in circulation can drive prices up
• **Lowers interest rates** — stimulates borrowing, spending, and investment
• **Weakens currency** — makes imports more expensive (imported inflation)
• **Asset price inflation** — raises stock and real estate prices

The relationship is complex: QE did not trigger hyperinflation post-2008 as expected, partly because banks held excess reserves. However, the 2021–22 inflation surge was partly attributed to aggressive pandemic-era QE combined with supply shocks.`,sources:[{id:"src-1",title:"FinQA: Financial Question Answering",page:"p. 28",relevance:.96},{id:"src-2",title:"Federal Reserve Working Paper 2022",page:"§ 4.3",relevance:.89},{id:"src-3",title:"IMF Global Financial Stability Report",page:"p. 74",relevance:.85}]},traffic:{text:`According to the retrieved traffic regulations:

**Zebra crossing (uncontrolled pedestrian crossing) rules:**

• Drivers **must give way** to any pedestrian who has stepped onto or is waiting at a zebra crossing
• You must **slow down and stop** if a pedestrian intends to cross — do not wave them across or assume they will wait
• **Overtaking** a vehicle that has stopped at a zebra crossing is illegal
• In some jurisdictions, cyclists must also dismount or give way
• **Flashing amber Belisha beacons** mark zebra crossings — approach at a speed that allows you to stop safely

Penalties for failing to yield can include fines and penalty points on the driver's licence.`,sources:[{id:"src-1",title:"Highway Code — Rule 195",page:"Rule 195",relevance:.97},{id:"src-2",title:"Road Traffic Act 1988 (UK)",page:"§ 25",relevance:.92},{id:"src-3",title:"DfT Driving Standards Guide 2023",page:"p. 61",relevance:.84}]}};function Jn({name:e,size:t=18}){const n={width:t,height:t,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:1.8,strokeLinecap:"round",strokeLinejoin:"round"};switch(e){case"send":return r.jsxs("svg",{...n,children:[r.jsx("path",{d:"M22 2L11 13"}),r.jsx("path",{d:"M22 2 15 22 11 13 2 9l20-7z"})]});case"close":return r.jsx("svg",{...n,children:r.jsx("path",{d:"M6 6l12 12M18 6 6 18"})});case"refresh":return r.jsxs("svg",{...n,children:[r.jsx("path",{d:"M4 12a8 8 0 0 1 14.5-4.6M20 12a8 8 0 0 1-14.5 4.6"}),r.jsx("path",{d:"M18.5 3.5v4h-4M5.5 20.5v-4h4"})]});case"share":return r.jsxs("svg",{...n,children:[r.jsx("path",{d:"M12 15V4M8 8l4-4 4 4"}),r.jsx("path",{d:"M5 14v4.5A1.5 1.5 0 0 0 6.5 20h11a1.5 1.5 0 0 0 1.5-1.5V14"})]});case"chevron":return r.jsx("svg",{...n,children:r.jsx("path",{d:"M9 6l6 6-6 6"})});case"info":return r.jsxs("svg",{...n,children:[r.jsx("circle",{cx:"12",cy:"12",r:"9"}),r.jsx("path",{d:"M12 8v4M12 16h.01"})]});case"clipboard":return r.jsxs("svg",{...n,children:[r.jsx("rect",{x:"8",y:"2",width:"8",height:"4",rx:"1.5"}),r.jsx("path",{d:"M7 4H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-2"})]});case"arrow":return r.jsx("svg",{...n,children:r.jsx("path",{d:"M5 12h14M13 6l6 6-6 6"})});default:return null}}function Hm(){return r.jsxs("div",{className:"typing-dots",children:[r.jsx("span",{}),r.jsx("span",{}),r.jsx("span",{})]})}function Gm({text:e}){const t=e.split(`
`);return r.jsx("div",{className:"md-text",children:t.map((n,a)=>{if(n.startsWith("• ")){const s=n.slice(2).replace(/\*\*(.*?)\*\*/g,(o,l)=>`<strong>${l}</strong>`);return r.jsx("li",{dangerouslySetInnerHTML:{__html:s}},a)}const i=n.replace(/\*\*(.*?)\*\*/g,(s,o)=>`<strong>${o}</strong>`);return n?r.jsx("p",{dangerouslySetInnerHTML:{__html:i}},a):r.jsx("br",{},a)})})}function Vm(){const[e,t]=g.useState(null),[n,a]=g.useState(""),[i,s]=g.useState([]),[o,l]=g.useState(!1),[d,c]=g.useState(null),[h,m]=g.useState(null),x=g.useRef(null),w=g.useRef(null);g.useEffect(()=>{var v;(v=x.current)==null||v.scrollTo({top:x.current.scrollHeight,behavior:"smooth"})},[i,o]);const N=v=>{const S=(v==null?void 0:v.key)||"healthcare";return ad[S]||ad.healthcare},y=()=>{const v=n.trim();if(!v||!e)return;const S={id:`u-${Date.now()}`,role:"user",text:v};s(k=>[...k,S]),a(""),l(!0);const C=e;setTimeout(()=>{const k=N(C);s(M=>[...M,{id:`a-${Date.now()}`,role:"assistant",text:k.text,sources:k.sources,industry:C}]),l(!1)},1400)},j=v=>{v.key==="Enter"&&!v.shiftKey&&(v.preventDefault(),y())},f=(v,S)=>{navigator.clipboard.writeText(S).catch(()=>{}),c(v),setTimeout(()=>c(null),1800)},u=v=>{var S;a(v),(S=w.current)==null||S.focus()},p=()=>{s([]),a(""),l(!1)};return r.jsxs("div",{className:"rag-chat",children:[r.jsx("style",{children:`
/* ===== RAG Chat Page ===== */
.rag-chat {
  --ink: #0c0f17;
  --navy: #0a1730;
  --paper: #f1f0fa;
  --paper-2: #e8e6f6;
  --panel: #ffffff;
  --indigo: #4f46e5;
  --indigo-2: #7c74ff;
  --amber: #ffb020;
  --coral: #ff6452;
  --green: #22c55e;
  --slate: #5b6270;
  --slate-l: #9296a6;
  --line: rgba(12, 15, 23, 0.1);
  --radius: 22px;

  font-family: "Inter", sans-serif;
  background: var(--paper);
  color: var(--ink);
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  -webkit-font-smoothing: antialiased;
}
.rag-chat *, .rag-chat *::before, .rag-chat *::after { box-sizing: border-box; }
.rag-chat h1, .rag-chat h2, .rag-chat h3 { font-family: "Space Grotesk", sans-serif; margin: 0; }
.rag-chat a { color: inherit; text-decoration: none; }
.rag-chat button { font-family: inherit; cursor: pointer; }
.rag-chat textarea { font-family: inherit; }

/* ===== nav ===== */
.rag-chat nav {
  display: flex; align-items: center; justify-content: space-between;
  padding: 16px 32px;
  background: var(--navy);
  border-bottom: 1px solid rgba(255,255,255,0.08);
  flex-shrink: 0;
  position: sticky; top: 0; z-index: 100;
}
.rag-chat .brand {
  display: flex; align-items: center; gap: 10px;
  font-weight: 700; font-size: 18px; color: #fff;
  font-family: "Space Grotesk", sans-serif;
}
.rag-chat .brand-mark {
  width: 28px; height: 28px; border-radius: 8px;
  background: linear-gradient(135deg, var(--indigo), var(--indigo-2));
  display: flex; align-items: center; justify-content: center;
  color: #fff; font-size: 14px; font-weight: 700;
}
.rag-chat .nav-right {
  display: flex; align-items: center; gap: 14px;
}
.rag-chat .nav-chip {
  display: inline-flex; align-items: center; gap: 8px;
  padding: 7px 14px; border-radius: 100px;
  background: rgba(255,255,255,0.1);
  border: 1px solid rgba(255,255,255,0.15);
  font-size: 13px; color: #fff;
}
.rag-chat .nav-link {
  color: rgba(255,255,255,0.6); font-size: 14px;
  transition: color 0.2s;
}
.rag-chat .nav-link:hover { color: #fff; }
.rag-chat .nav-btn {
  padding: 8px 16px; border-radius: 100px;
  border: 1px solid rgba(255,255,255,0.35);
  background: transparent; color: #fff;
  font-size: 13.5px; font-weight: 500;
  transition: all 0.25s;
}
.rag-chat .nav-btn:hover { background: #fff; color: #000; }

/* ===== layout ===== */
.rag-chat .layout {
  display: flex; flex: 1; min-height: 0;
  height: calc(100vh - 64px);
}

/* ===== left panel: industry selector ===== */
.rag-chat .left-panel {
  width: 300px; flex-shrink: 0;
  background: var(--panel);
  border-right: 1px solid var(--line);
  display: flex; flex-direction: column;
  overflow-y: auto;
}
@media (max-width: 860px) {
  .rag-chat .left-panel { display: none; }
}
.rag-chat .lp-head {
  padding: 24px 20px 18px;
  border-bottom: 1px solid var(--line);
}
.rag-chat .lp-head h2 { font-size: 15px; font-weight: 700; margin-bottom: 5px; }
.rag-chat .lp-head p { font-size: 12.5px; color: var(--slate); line-height: 1.5; }
.rag-chat .industry-list {
  padding: 16px 16px;
  display: flex; flex-direction: column; gap: 10px;
}
.rag-chat .ind-btn {
  display: flex; align-items: center; gap: 12px;
  padding: 14px 16px; border-radius: 16px;
  border: 1.5px solid var(--line);
  background: var(--paper); width: 100%; text-align: left;
  cursor: pointer; transition: all 0.2s;
}
.rag-chat .ind-btn:hover {
  border-color: var(--indigo-2);
  background: #f5f3ff;
}
.rag-chat .ind-btn.selected {
  border-color: var(--indigo);
  background: #eef2ff;
}
.rag-chat .ind-emoji { font-size: 24px; flex-shrink: 0; }
.rag-chat .ind-meta { flex: 1; min-width: 0; }
.rag-chat .ind-name { font-size: 14px; font-weight: 700; margin-bottom: 3px; }
.rag-chat .ind-desc { font-size: 11.5px; color: var(--slate); line-height: 1.4; }
.rag-chat .lp-footer {
  margin-top: auto; padding: 16px;
  border-top: 1px solid var(--line);
}
.rag-chat .admin-link {
  display: flex; align-items: center; gap: 8px;
  padding: 10px 14px; border-radius: 12px;
  background: var(--paper-2); border: 1px solid var(--line);
  font-size: 13px; font-weight: 600; color: var(--indigo);
  transition: background 0.2s;
}
.rag-chat .admin-link:hover { background: #eef2ff; }

/* ===== main chat area ===== */
.rag-chat .chat-main {
  flex: 1; display: flex; flex-direction: column; min-width: 0;
}

/* ===== select-industry prompt ===== */
.rag-chat .select-prompt {
  flex: 1; display: flex; flex-direction: column;
  align-items: center; justify-content: center;
  padding: 40px 24px; text-align: center;
}
.rag-chat .sp-icon {
  width: 80px; height: 80px; border-radius: 24px;
  background: linear-gradient(135deg, #eef2ff, #e0e7ff);
  display: flex; align-items: center; justify-content: center;
  font-size: 36px; margin: 0 auto 24px;
}
.rag-chat .select-prompt h1 {
  font-size: 28px; font-weight: 700;
  letter-spacing: -0.01em; margin-bottom: 12px;
}
.rag-chat .select-prompt p {
  font-size: 15px; color: var(--slate);
  line-height: 1.6; max-width: 420px; margin-bottom: 40px;
}
.rag-chat .mobile-industries {
  display: none;
  grid-template-columns: repeat(3, 1fr); gap: 14px;
  width: 100%; max-width: 620px;
}
@media (max-width: 860px) {
  .rag-chat .mobile-industries { display: grid; }
}
.rag-chat .mob-ind-btn {
  display: flex; flex-direction: column; align-items: center; gap: 8px;
  padding: 18px 10px; border-radius: 16px;
  border: 1.5px solid var(--line); background: #fff;
  cursor: pointer; transition: all 0.2s;
}
.rag-chat .mob-ind-btn:hover { border-color: var(--indigo-2); background: #f5f3ff; }
.rag-chat .mob-ind-btn.selected { border-color: var(--indigo); background: #eef2ff; }
.rag-chat .mob-ind-emoji { font-size: 28px; }
.rag-chat .mob-ind-label { font-size: 12.5px; font-weight: 700; }

/* ===== chat thread ===== */
.rag-chat .chat-thread {
  flex: 1; overflow-y: auto;
  padding: 28px 0;
  display: flex; flex-direction: column; gap: 22px;
}
.rag-chat .thread-inner {
  max-width: 760px; margin: 0 auto; width: 100%; padding: 0 24px;
}

/* industry header in chat */
.rag-chat .chat-industry-badge {
  display: inline-flex; align-items: center; gap: 8px;
  padding: 7px 14px; border-radius: 100px;
  font-size: 13px; font-weight: 600;
  background: var(--paper-2); border: 1px solid var(--line);
  margin-bottom: 24px;
  cursor: pointer; transition: background 0.2s;
}
.rag-chat .chat-industry-badge:hover { background: #eef2ff; color: var(--indigo); }

/* messages */
.rag-chat .msg-user {
  display: flex; justify-content: flex-end;
}
.rag-chat .msg-user .bubble {
  background: var(--ink); color: #fff;
  padding: 14px 18px; border-radius: 20px 20px 6px 20px;
  font-size: 15px; line-height: 1.55; max-width: 560px;
}
.rag-chat .msg-assistant {
  display: flex; align-items: flex-start; gap: 12px;
}
.rag-chat .asst-avatar {
  width: 36px; height: 36px; border-radius: 12px;
  background: linear-gradient(135deg, var(--indigo), var(--indigo-2));
  display: flex; align-items: center; justify-content: center;
  color: #fff; font-size: 16px; flex-shrink: 0; margin-top: 2px;
}
.rag-chat .asst-body { flex: 1; min-width: 0; }
.rag-chat .asst-name {
  font-size: 12.5px; font-weight: 700; color: var(--slate);
  font-family: "IBM Plex Mono", monospace;
  margin-bottom: 8px;
  display: flex; align-items: center; gap: 8px;
}
.rag-chat .asst-tag {
  font-size: 10.5px; padding: 2px 8px; border-radius: 100px;
  background: var(--paper-2); color: var(--slate);
}
.rag-chat .asst-bubble {
  background: var(--panel); border: 1px solid var(--line);
  border-radius: 6px 20px 20px 20px;
  padding: 18px 20px;
  font-size: 14.5px; line-height: 1.65;
}
.rag-chat .md-text p { margin: 0 0 8px; }
.rag-chat .md-text p:last-child { margin-bottom: 0; }
.rag-chat .md-text li {
  margin: 4px 0; padding-left: 4px;
  list-style: none;
}
.rag-chat .md-text li::before {
  content: "·"; margin-right: 8px; color: var(--indigo); font-weight: 700;
}

/* sources */
.rag-chat .sources-section {
  margin-top: 16px; padding-top: 14px;
  border-top: 1px solid var(--line);
}
.rag-chat .sources-label {
  font-size: 11px; font-family: "IBM Plex Mono", monospace;
  text-transform: uppercase; letter-spacing: 0.08em;
  color: var(--slate-l); margin-bottom: 10px;
}
.rag-chat .sources-list {
  display: flex; flex-direction: column; gap: 7px;
}
.rag-chat .source-tag {
  display: inline-flex; align-items: center; gap: 8px;
  padding: 7px 12px; border-radius: 10px;
  background: var(--paper); border: 1px solid var(--line);
  font-size: 12.5px; width: 100%;
  transition: background 0.2s, border-color 0.2s;
  cursor: default;
}
.rag-chat .source-tag:hover {
  background: #eef2ff; border-color: #c7d2fe;
}
.rag-chat .src-num {
  width: 22px; height: 22px; border-radius: 6px;
  background: var(--indigo); color: #fff;
  font-size: 10.5px; font-weight: 700;
  display: flex; align-items: center; justify-content: center;
  flex-shrink: 0;
}
.rag-chat .src-title { flex: 1; font-weight: 600; }
.rag-chat .src-page { font-family: "IBM Plex Mono", monospace; font-size: 11px; color: var(--slate-l); }
.rag-chat .src-score {
  font-family: "IBM Plex Mono", monospace; font-size: 11px;
  color: var(--green); font-weight: 600;
}

/* msg actions */
.rag-chat .msg-actions {
  display: flex; gap: 6px; margin-top: 10px;
}
.rag-chat .action-btn {
  display: inline-flex; align-items: center; gap: 5px;
  padding: 5px 10px; border-radius: 8px;
  border: 1px solid var(--line); background: var(--paper);
  font-size: 12px; color: var(--slate);
  transition: all 0.2s;
}
.rag-chat .action-btn:hover { background: var(--paper-2); color: var(--ink); }
.rag-chat .action-btn.copied { color: var(--green); border-color: #86efac; }

/* typing dots */
.rag-chat .typing-dots {
  display: flex; align-items: center; gap: 4px; padding: 4px 0;
}
.rag-chat .typing-dots span {
  width: 8px; height: 8px; border-radius: 50%;
  background: var(--slate-l);
  animation: rag-dot-pulse 1.2s ease-in-out infinite;
}
.rag-chat .typing-dots span:nth-child(2) { animation-delay: 0.2s; }
.rag-chat .typing-dots span:nth-child(3) { animation-delay: 0.4s; }
@keyframes rag-dot-pulse {
  0%, 60%, 100% { transform: scale(0.7); opacity: 0.5; }
  30% { transform: scale(1); opacity: 1; }
}

/* sample questions */
.rag-chat .samples-row {
  max-width: 760px; margin: 0 auto; padding: 0 24px 24px;
  display: flex; flex-direction: column; gap: 8px;
}
.rag-chat .samples-label {
  font-size: 11.5px; font-family: "IBM Plex Mono", monospace;
  text-transform: uppercase; letter-spacing: 0.08em;
  color: var(--slate-l); margin-bottom: 4px;
}
.rag-chat .sample-btn {
  display: flex; align-items: center; gap: 10px;
  padding: 12px 16px; border-radius: 12px;
  border: 1px solid var(--line); background: var(--panel);
  font-size: 13.5px; color: var(--ink); text-align: left;
  cursor: pointer; transition: all 0.2s;
}
.rag-chat .sample-btn:hover {
  background: #eef2ff; border-color: #c7d2fe; color: var(--indigo);
}

/* ===== input bar ===== */
.rag-chat .input-bar {
  flex-shrink: 0;
  padding: 16px 24px 20px;
  border-top: 1px solid var(--line);
  background: var(--panel);
}
.rag-chat .input-wrap {
  max-width: 760px; margin: 0 auto;
  background: var(--paper); border: 1.5px solid var(--line);
  border-radius: 18px; display: flex; align-items: flex-end;
  gap: 10px; padding: 12px 16px;
  transition: border-color 0.25s, box-shadow 0.25s;
}
.rag-chat .input-wrap:focus-within {
  border-color: var(--indigo);
  box-shadow: 0 0 0 4px rgba(79,70,229,0.1);
}
.rag-chat .input-wrap textarea {
  flex: 1; border: none; background: transparent;
  font-size: 15px; line-height: 1.55;
  color: var(--ink); resize: none; outline: none;
  min-height: 24px; max-height: 140px;
  overflow-y: auto;
}
.rag-chat .input-wrap textarea::placeholder { color: var(--slate-l); }
.rag-chat .send-btn {
  width: 40px; height: 40px; border-radius: 12px;
  background: var(--ink); color: #fff; border: none;
  display: flex; align-items: center; justify-content: center;
  flex-shrink: 0;
  transition: background 0.2s, transform 0.2s;
}
.rag-chat .send-btn:hover:not(:disabled) { background: var(--indigo); transform: scale(1.05); }
.rag-chat .send-btn:disabled { opacity: 0.35; cursor: not-allowed; transform: none; }
.rag-chat .input-hint {
  max-width: 760px; margin: 8px auto 0;
  font-size: 12px; color: var(--slate-l);
  font-family: "IBM Plex Mono", monospace;
  text-align: center;
}

/* ===== share modal ===== */
.rag-chat .share-overlay {
  position: fixed; inset: 0; z-index: 9999;
  background: rgba(10,23,48,0.55); backdrop-filter: blur(6px);
  display: flex; align-items: center; justify-content: center;
  padding: 24px;
}
.rag-chat .share-box {
  background: var(--panel); border-radius: 22px;
  box-shadow: 0 30px 60px -20px rgba(10,23,48,0.4);
  padding: 26px; width: 100%; max-width: 400px;
}
.rag-chat .share-hd {
  display: flex; align-items: center;
  justify-content: space-between; margin-bottom: 16px;
}
.rag-chat .share-title { font-size: 16px; font-weight: 700; font-family: "Space Grotesk", sans-serif; }
.rag-chat .share-close {
  width: 30px; height: 30px; border-radius: 50%;
  border: 1px solid var(--line); background: var(--paper);
  color: var(--slate); font-size: 14px; display: flex;
  align-items: center; justify-content: center; cursor: pointer;
  transition: background 0.2s;
}
.rag-chat .share-close:hover { background: var(--paper-2); }
.rag-chat .share-preview {
  background: var(--paper); border: 1px solid var(--line);
  border-radius: 12px; padding: 12px 14px; margin-bottom: 18px;
}
.rag-chat .share-preview-label {
  font-size: 11.5px; font-weight: 600; color: var(--indigo);
  margin-bottom: 6px;
}
.rag-chat .share-preview-text {
  font-size: 13px; color: var(--slate); line-height: 1.5;
}
.rag-chat .share-grid {
  display: grid; grid-template-columns: repeat(3, 1fr);
  gap: 8px; margin-bottom: 16px;
}
.rag-chat .social-btn {
  display: flex; flex-direction: column; align-items: center;
  gap: 6px; padding: 12px 6px; border-radius: 12px;
  border: 1.5px solid var(--line); background: var(--paper);
  text-decoration: none; color: var(--ink);
  transition: all 0.2s; cursor: pointer;
}
.rag-chat .social-btn:hover {
  background: var(--sc, var(--indigo)); color: #fff;
  border-color: transparent;
  box-shadow: 0 4px 14px -4px var(--sc, rgba(79,70,229,0.5));
}
.rag-chat .social-icon { font-size: 18px; font-weight: 700; line-height: 1; }
.rag-chat .social-label { font-size: 10px; font-weight: 600; white-space: nowrap; }
.rag-chat .share-divider {
  text-align: center; color: var(--slate-l); font-size: 11.5px;
  position: relative; margin-bottom: 14px;
}
.rag-chat .share-divider::before,
.rag-chat .share-divider::after {
  content: ""; position: absolute; top: 50%;
  width: calc(50% - 18px); height: 1px; background: var(--line);
}
.rag-chat .share-divider::before { left: 0; }
.rag-chat .share-divider::after { right: 0; }
.rag-chat .copy-link-btn {
  width: 100%; padding: 11px; border-radius: 10px;
  border: 1.5px solid var(--line); background: var(--paper);
  font-size: 13.5px; font-weight: 600; color: var(--ink);
  cursor: pointer; transition: all 0.2s; font-family: inherit;
}
.rag-chat .copy-link-btn:hover { background: var(--paper-2); }
.rag-chat .copy-link-btn.copied { background: #dcfce7; border-color: #86efac; color: #15803d; }
`}),r.jsxs("nav",{children:[r.jsxs(I,{to:"/",className:"brand",children:[r.jsx("span",{className:"brand-mark",children:"N"}),"NexusRAG"]}),r.jsxs("div",{className:"nav-right",children:[e&&r.jsxs("span",{className:"nav-chip",children:[e.emoji," ",e.label]}),r.jsx(I,{to:"/dashboard",className:"nav-link",children:"My Chats"}),r.jsx("button",{className:"nav-btn",onClick:p,children:"+ New Chat"})]})]}),r.jsxs("div",{className:"layout",children:[r.jsxs("aside",{className:"left-panel",children:[r.jsxs("div",{className:"lp-head",children:[r.jsx("h2",{children:"Select Industry"}),r.jsx("p",{children:"Choose a knowledge base to query. Each sector has its own curated document collection."})]}),r.jsx("div",{className:"industry-list",children:rd.map(v=>r.jsxs("button",{className:`ind-btn${(e==null?void 0:e.key)===v.key?" selected":""}`,onClick:()=>{t(v),s([])},children:[r.jsx("span",{className:"ind-emoji",children:v.emoji}),r.jsxs("div",{className:"ind-meta",children:[r.jsx("div",{className:"ind-name",children:v.label}),r.jsx("div",{className:"ind-desc",children:v.desc})]})]},v.key))}),r.jsx("div",{className:"lp-footer",children:r.jsx("span",{className:"lp-footer-note",children:"Select an industry to start asking questions."})})]}),r.jsx("main",{className:"chat-main",children:e?r.jsxs(r.Fragment,{children:[r.jsx("div",{className:"chat-thread",ref:x,children:r.jsxs("div",{className:"thread-inner",children:[r.jsxs("button",{className:"chat-industry-badge",onClick:()=>{t(null),s([])},children:[e.emoji," ",e.label,r.jsx("span",{style:{fontSize:11,opacity:.6},children:"· click to change ✕"})]}),i.map(v=>{var S,C;return v.role==="user"?r.jsx("div",{className:"msg-user",style:{marginBottom:18},children:r.jsx("div",{className:"bubble",children:v.text})},v.id):r.jsxs("div",{className:"msg-assistant",style:{marginBottom:18},children:[r.jsx("div",{className:"asst-avatar",children:"✦"}),r.jsxs("div",{className:"asst-body",children:[r.jsxs("div",{className:"asst-name",children:["NexusRAG",r.jsxs("span",{className:"asst-tag",children:[(S=v.industry)==null?void 0:S.emoji," ",(C=v.industry)==null?void 0:C.label]})]}),r.jsxs("div",{className:"asst-bubble",children:[r.jsx(Gm,{text:v.text}),v.sources&&v.sources.length>0&&r.jsxs("div",{className:"sources-section",children:[r.jsx("div",{className:"sources-label",children:"Retrieved Sources"}),r.jsx("div",{className:"sources-list",children:v.sources.map((k,M)=>r.jsxs("div",{className:"source-tag",children:[r.jsx("span",{className:"src-num",children:M+1}),r.jsx("span",{className:"src-title",children:k.title}),r.jsx("span",{className:"src-page",children:k.page}),r.jsxs("span",{className:"src-score",children:[Math.round(k.relevance*100),"%"]})]},k.id))})]})]}),r.jsxs("div",{className:"msg-actions",children:[r.jsxs("button",{className:`action-btn${d===v.id?" copied":""}`,onClick:()=>f(v.id,v.text),children:[r.jsx(Jn,{name:"clipboard",size:13}),d===v.id?"Copied!":"Copy"]}),r.jsxs("button",{className:"action-btn share-action",onClick:()=>m({msg:v,industry:v.industry}),children:[r.jsx(Jn,{name:"share",size:13})," Share"]}),r.jsxs("button",{className:"action-btn",onClick:p,children:[r.jsx(Jn,{name:"refresh",size:13})," New chat"]})]})]})]},v.id)}),o&&r.jsxs("div",{className:"msg-assistant",style:{marginBottom:18},children:[r.jsx("div",{className:"asst-avatar",children:"✦"}),r.jsxs("div",{className:"asst-body",children:[r.jsxs("div",{className:"asst-name",children:["NexusRAG ",r.jsx("span",{className:"asst-tag",children:"Retrieving…"})]}),r.jsx("div",{className:"asst-bubble",children:r.jsx(Hm,{})})]})]})]})}),i.length===0&&!o&&r.jsxs("div",{className:"samples-row",children:[r.jsx("div",{className:"samples-label",children:"Try asking…"}),e.samples.map(v=>r.jsxs("button",{className:"sample-btn",onClick:()=>u(v),children:[r.jsx(Jn,{name:"arrow",size:15}),v]},v))]}),r.jsxs("div",{className:"input-bar",children:[r.jsxs("div",{className:"input-wrap",children:[r.jsx("textarea",{ref:w,rows:1,placeholder:`Ask anything about ${e.label}…`,value:n,onChange:v=>a(v.target.value),onKeyDown:j,onInput:v=>{v.target.style.height="auto",v.target.style.height=`${Math.min(v.target.scrollHeight,140)}px`}}),r.jsx("button",{className:"send-btn",onClick:y,disabled:!n.trim()||o,"aria-label":"Send question",children:r.jsx(Jn,{name:"send",size:17})})]}),r.jsxs("div",{className:"input-hint",children:["Enter to send · Shift+Enter for new line · Answers grounded in ",e.label," knowledge base"]})]})]}):r.jsxs("div",{className:"select-prompt",children:[r.jsx("div",{className:"sp-icon",children:"🧠"}),r.jsx("h1",{children:"Multi-Industry RAG Q&A"}),r.jsx("p",{children:"Select an industry from the left panel to start querying its knowledge base. Each answer is grounded in retrieved documents with cited sources."}),r.jsx("div",{className:"mobile-industries",children:rd.map(v=>r.jsxs("button",{className:`mob-ind-btn${(e==null?void 0:e.key)===v.key?" selected":""}`,onClick:()=>t(v),children:[r.jsx("span",{className:"mob-ind-emoji",children:v.emoji}),r.jsx("span",{className:"mob-ind-label",children:v.label})]},v.key))})]})})]}),h&&r.jsx(Um,{msg:h.msg,industry:h.industry,onClose:()=>m(null)})]})}const Wm=[{id:"n1",type:"success",icon:"✅",title:"Healthcare collection updated",desc:"842 new documents indexed from PubMedQA batch upload. 18,420 new chunks created.",time:"2 hours ago",read:!1,action:{label:"View Collection",href:"/collections"}},{id:"n2",type:"info",icon:"🔔",title:"New query milestone",desc:"The Finance knowledge base has received 3,000+ queries this month — your most-used sector.",time:"5 hours ago",read:!1,action:{label:"Ask Finance Q&A",href:"/chat"}},{id:"n3",type:"success",icon:"✅",title:"Traffic dataset indexed",desc:"Custom traffic dataset successfully embedded using all-MiniLM-L6-v2. HyPE retrieval is now active.",time:"3 days ago",read:!0,action:{label:"Query Traffic",href:"/chat"}},{id:"n4",type:"warning",icon:"⚠️",title:"Legal collection is empty",desc:"The Legal Services knowledge base has no documents. Upload files to enable querying this sector.",time:"5 days ago",read:!0,action:{label:"Upload Documents",href:"/upload"}},{id:"n5",type:"info",icon:"🔔",title:"System update: Semantic chunking enabled",desc:"All future uploads will use topic-based semantic chunking instead of fixed-length chunking. This improves retrieval accuracy.",time:"1 week ago",read:!0,action:null},{id:"n6",type:"success",icon:"✅",title:"MiniLM reranker activated",desc:"Cross-encoder reranking (MiniLM) is now the default second-stage model. BGE reranker remains available for comparison.",time:"2 weeks ago",read:!0,action:{label:"Try Reranked Q&A",href:"/chat"}}];function id({name:e,size:t=18}){const n={width:t,height:t,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:1.8,strokeLinecap:"round",strokeLinejoin:"round"};switch(e){case"check":return r.jsx("svg",{...n,children:r.jsx("path",{d:"M5 12.5l4.5 4.5L19 7"})});case"bell":return r.jsxs("svg",{...n,children:[r.jsx("path",{d:"M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"}),r.jsx("path",{d:"M13.73 21a2 2 0 0 1-3.46 0"})]});case"close":return r.jsx("svg",{...n,children:r.jsx("path",{d:"M6 6l12 12M18 6 6 18"})});case"arrow":return r.jsx("svg",{...n,children:r.jsx("path",{d:"M5 12h14M13 6l6 6-6 6"})});default:return null}}function Qm(){const[e,t]=g.useState(Wm),[n,a]=g.useState("all"),i=()=>t(c=>c.map(h=>({...h,read:!0}))),s=c=>t(h=>h.map(m=>m.id===c?{...m,read:!0}:m)),o=c=>t(h=>h.filter(m=>m.id!==c)),l=e.filter(c=>!c.read).length,d=n==="unread"?e.filter(c=>!c.read):e;return r.jsxs("div",{className:"rag-notif",children:[r.jsx("style",{children:`
.rag-notif {
  --ink: #0c0f17;
  --navy: #0a1730;
  --paper: #f1f0fa;
  --paper-2: #e8e6f6;
  --panel: #ffffff;
  --indigo: #4f46e5;
  --indigo-2: #7c74ff;
  --amber: #ffb020;
  --green: #22c55e;
  --slate: #5b6270;
  --slate-l: #9296a6;
  --line: rgba(12, 15, 23, 0.1);
  --radius: 22px;

  font-family: "Inter", sans-serif;
  background: var(--paper);
  color: var(--ink);
  min-height: 100vh;
  -webkit-font-smoothing: antialiased;
}
.rag-notif *, .rag-notif *::before, .rag-notif *::after { box-sizing: border-box; }
.rag-notif h1, .rag-notif h2, .rag-notif h3 { font-family: "Space Grotesk", sans-serif; margin: 0; }
.rag-notif a { color: inherit; text-decoration: none; }
.rag-notif button { font-family: inherit; cursor: pointer; }

/* nav */
.rag-notif nav {
  position: sticky; top: 0; z-index: 100;
  display: flex; align-items: center; justify-content: space-between;
  padding: 18px 40px; background: var(--navy);
  border-bottom: 1px solid rgba(255,255,255,0.08);
}
.rag-notif .brand {
  display: flex; align-items: center; gap: 10px;
  font-weight: 700; font-size: 18px; color: #fff;
  font-family: "Space Grotesk", sans-serif;
}
.rag-notif .brand-mark {
  width: 28px; height: 28px; border-radius: 8px;
  background: linear-gradient(135deg, var(--indigo), var(--indigo-2));
  display: flex; align-items: center; justify-content: center;
  color: #fff; font-size: 14px; font-weight: 700;
}
.rag-notif .nav-right {
  display: flex; align-items: center; gap: 16px;
}
.rag-notif .nav-link { color: rgba(255,255,255,0.65); font-size: 14px; transition: color 0.2s; }
.rag-notif .nav-link:hover { color: #fff; }
.rag-notif .nav-btn {
  padding: 9px 18px; border-radius: 100px;
  border: 1px solid rgba(255,255,255,0.35);
  background: transparent; color: #fff;
  font-size: 13.5px; font-weight: 500;
  transition: all 0.25s;
}
.rag-notif .nav-btn:hover { background: #fff; color: #000; }

/* page */
.rag-notif .page-wrap {
  max-width: 800px; margin: 0 auto; padding: 52px 24px 100px;
}

/* header */
.rag-notif .page-head {
  display: flex; align-items: flex-start; justify-content: space-between;
  margin-bottom: 36px; gap: 16px; flex-wrap: wrap;
}
.rag-notif .head-left .eyebrow {
  display: inline-flex; align-items: center; gap: 8px;
  font-family: "IBM Plex Mono", monospace;
  font-size: 12px; letter-spacing: 0.08em;
  text-transform: uppercase; color: var(--indigo);
  margin-bottom: 12px;
}
.rag-notif .head-left .eyebrow::before {
  content: ""; width: 7px; height: 7px; border-radius: 50%;
  background: var(--amber); box-shadow: 0 0 0 4px rgba(255,176,32,0.2);
}
.rag-notif .head-left h1 {
  font-size: clamp(24px, 4vw, 36px); font-weight: 700;
  letter-spacing: -0.01em;
  display: flex; align-items: center; gap: 12px;
}
.rag-notif .unread-badge {
  display: inline-flex; align-items: center; justify-content: center;
  width: 28px; height: 28px; border-radius: 50%;
  background: var(--indigo); color: #fff;
  font-size: 13px; font-weight: 700;
}
.rag-notif .head-actions { display: flex; gap: 10px; align-items: flex-start; }
.rag-notif .mark-all-btn {
  padding: 9px 16px; border-radius: 100px;
  border: 1.5px solid var(--line); background: var(--panel);
  font-size: 13.5px; font-weight: 500; color: var(--ink);
  transition: all 0.2s;
}
.rag-notif .mark-all-btn:hover { background: var(--paper-2); border-color: var(--slate-l); }

/* filter tabs */
.rag-notif .filter-tabs {
  display: flex; gap: 4px; margin-bottom: 28px;
  background: var(--panel); border: 1px solid var(--line);
  border-radius: 12px; padding: 4px;
  display: inline-flex;
}
.rag-notif .ftab {
  padding: 8px 18px; border-radius: 9px;
  border: none; background: transparent;
  font-size: 13.5px; font-weight: 500; color: var(--slate);
  transition: all 0.2s;
}
.rag-notif .ftab.active { background: var(--ink); color: #fff; }
.rag-notif .ftab:hover:not(.active) { background: var(--paper-2); color: var(--ink); }

/* notification items */
.rag-notif .notif-list { display: flex; flex-direction: column; gap: 12px; }
.rag-notif .notif-item {
  background: var(--panel); border: 1.5px solid var(--line);
  border-radius: 20px; padding: 22px 24px;
  display: flex; gap: 16px; align-items: flex-start;
  transition: border-color 0.25s, box-shadow 0.25s;
  position: relative;
}
.rag-notif .notif-item:hover {
  border-color: rgba(79,70,229,0.25);
  box-shadow: 0 4px 18px -8px rgba(12,15,23,0.15);
}
.rag-notif .notif-item.unread { border-color: rgba(79,70,229,0.2); background: #fdfcff; }
.rag-notif .notif-item.unread::before {
  content: ""; position: absolute;
  left: -6px; top: 50%; transform: translateY(-50%);
  width: 10px; height: 10px; border-radius: 50%;
  background: var(--indigo);
  box-shadow: 0 0 0 3px rgba(79,70,229,0.2);
}
.rag-notif .notif-icon {
  width: 44px; height: 44px; border-radius: 14px;
  background: var(--paper-2); flex-shrink: 0;
  display: flex; align-items: center; justify-content: center;
  font-size: 20px;
}
.rag-notif .notif-icon.success { background: #dcfce7; }
.rag-notif .notif-icon.warning { background: #fef3c7; }
.rag-notif .notif-icon.info { background: #dbeafe; }
.rag-notif .notif-body { flex: 1; min-width: 0; }
.rag-notif .notif-title {
  font-size: 15px; font-weight: 700; margin-bottom: 5px;
  display: flex; align-items: center; justify-content: space-between; gap: 12px;
}
.rag-notif .notif-time {
  font-size: 12px; color: var(--slate-l);
  font-family: "IBM Plex Mono", monospace; flex-shrink: 0;
}
.rag-notif .notif-desc {
  font-size: 13.5px; color: var(--slate); line-height: 1.55;
  margin-bottom: 14px;
}
.rag-notif .notif-actions { display: flex; gap: 8px; align-items: center; }
.rag-notif .notif-action-btn {
  display: inline-flex; align-items: center; gap: 5px;
  padding: 7px 14px; border-radius: 100px;
  background: var(--ink); color: #fff; border: none;
  font-size: 12.5px; font-weight: 600;
  transition: background 0.2s;
}
.rag-notif .notif-action-btn:hover { background: var(--indigo); }
.rag-notif .notif-mark-btn {
  padding: 7px 12px; border-radius: 100px;
  border: 1px solid var(--line); background: transparent;
  font-size: 12.5px; color: var(--slate);
  transition: all 0.2s;
}
.rag-notif .notif-mark-btn:hover { background: var(--paper-2); color: var(--ink); }
.rag-notif .notif-dismiss {
  position: absolute; top: 14px; right: 14px;
  background: none; border: none; color: var(--slate-l);
  padding: 4px; border-radius: 8px; display: flex;
  transition: color 0.2s, background 0.2s;
}
.rag-notif .notif-dismiss:hover { color: var(--ink); background: var(--paper-2); }

/* empty */
.rag-notif .empty {
  text-align: center; padding: 60px 24px;
  background: var(--panel); border: 1px solid var(--line); border-radius: 22px;
}
.rag-notif .empty-icon { font-size: 52px; margin-bottom: 16px; }
.rag-notif .empty h3 { font-size: 20px; font-weight: 700; margin-bottom: 10px; }
.rag-notif .empty p { font-size: 14.5px; color: var(--slate); }
`}),r.jsxs("nav",{children:[r.jsxs(I,{to:"/",className:"brand",children:[r.jsx("span",{className:"brand-mark",children:"N"}),"NexusRAG"]}),r.jsxs("div",{className:"nav-right",children:[r.jsx(I,{to:"/dashboard",className:"nav-link",children:"Dashboard"}),r.jsx(I,{to:"/chat",className:"nav-link",children:"Query"}),r.jsx(I,{to:"/settings",className:"nav-btn",children:"Settings →"})]})]}),r.jsxs("div",{className:"page-wrap",children:[r.jsxs("div",{className:"page-head",children:[r.jsxs("div",{className:"head-left",children:[r.jsx("div",{className:"eyebrow",children:"System Alerts"}),r.jsxs("h1",{children:["Notifications",l>0&&r.jsx("span",{className:"unread-badge",children:l})]})]}),r.jsx("div",{className:"head-actions",children:l>0&&r.jsxs("button",{className:"mark-all-btn",onClick:i,children:[r.jsx(id,{name:"check",size:14})," Mark all read"]})})]}),r.jsxs("div",{className:"filter-tabs",children:[r.jsxs("button",{className:`ftab${n==="all"?" active":""}`,onClick:()=>a("all"),children:["All (",e.length,")"]}),r.jsxs("button",{className:`ftab${n==="unread"?" active":""}`,onClick:()=>a("unread"),children:["Unread (",l,")"]})]}),r.jsx("div",{className:"notif-list",children:d.length===0?r.jsxs("div",{className:"empty",children:[r.jsx("div",{className:"empty-icon",children:"🔔"}),r.jsx("h3",{children:"All caught up!"}),r.jsxs("p",{children:["No ",n==="unread"?"unread ":"","notifications to show."]})]}):d.map(c=>r.jsxs("div",{className:`notif-item ${c.read?"":"unread"}`,children:[r.jsx("div",{className:`notif-icon ${c.type}`,children:c.icon}),r.jsxs("div",{className:"notif-body",children:[r.jsxs("div",{className:"notif-title",children:[c.title,r.jsx("span",{className:"notif-time",children:c.time})]}),r.jsx("div",{className:"notif-desc",children:c.desc}),r.jsxs("div",{className:"notif-actions",children:[c.action&&r.jsxs(I,{to:c.action.href,className:"notif-action-btn",children:[c.action.label," →"]}),!c.read&&r.jsx("button",{className:"notif-mark-btn",onClick:()=>s(c.id),children:"Mark as read"})]})]}),r.jsx("button",{className:"notif-dismiss",onClick:()=>o(c.id),"aria-label":"Dismiss",children:r.jsx(id,{name:"close",size:14})})]},c.id))})]})]})}const cn=new Date,un=e=>new Date(e).toLocaleDateString("en-IN",{day:"numeric",month:"short",year:"numeric"}),Ym=e=>{if(!e)return"";const[t,n]=e.split(":").map(Number);return`${t%12||12}:${String(n).padStart(2,"0")} ${t<12?"AM":"PM"}`},sd=()=>cn.toISOString().slice(0,10),Zn=(e,t)=>{const n=new Date(e);return n.setDate(n.getDate()+t),n},qm=["🏥 Healthcare","💰 Finance","🚦 Traffic","🔬 Research","💻 IT & AI","⚖️ Legal","🛒 Retail","⚡ Energy","🎓 Education","🏭 Manufacturing","🌾 Agriculture","🚚 Logistics","✈️ Aviation","🏢 Real Estate","🎮 Entertainment","🛡️ Insurance","🏛️ Government","🚗 Automotive"],Km=["15 min","30 min","45 min","60 min","90 min","2 hrs","3 hrs"],Xm=[{id:"m1",title:"RAG System Demo — Healthcare Sector",date:un(Zn(cn,0)),time:"10:00 AM",duration:"45 min",status:"upcoming",attendees:["You","Dr. Priya S.","Rahul M."],industry:"🏥 Healthcare",link:"https://meet.google.com/abc-defg-hij"},{id:"m2",title:"Finance Q&A Pipeline Review",date:un(Zn(cn,0)),time:"3:30 PM",duration:"60 min",status:"upcoming",attendees:["You","Aman K.","Shruti P."],industry:"💰 Finance",link:"https://zoom.us/j/123456789"},{id:"m3",title:"Traffic Dataset Indexing Walkthrough",date:un(Zn(cn,-1)),time:"11:00 AM",duration:"30 min",status:"done",attendees:["You","Neha R."],industry:"🚦 Traffic",link:null},{id:"m4",title:"Final Year Project Guide Review",date:un(Zn(cn,-2)),time:"2:00 PM",duration:"90 min",status:"done",attendees:["You","Prof. Desai","Meera S."],industry:"🔬 Research",link:null},{id:"m5",title:"MiniLM Reranker Evaluation Meeting",date:un(Zn(cn,2)),time:"10:30 AM",duration:"60 min",status:"upcoming",attendees:["You","Vikram T.","Ananya B."],industry:"💻 IT & AI",link:"https://teams.microsoft.com/l/meetup"}];function be({name:e,size:t=18}){const n={width:t,height:t,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:1.8,strokeLinecap:"round",strokeLinejoin:"round"};switch(e){case"calendar":return r.jsxs("svg",{...n,children:[r.jsx("rect",{x:"3.5",y:"5",width:"17",height:"16",rx:"2.5"}),r.jsx("path",{d:"M8 3v4M16 3v4M3.5 10h17"})]});case"clock":return r.jsxs("svg",{...n,children:[r.jsx("circle",{cx:"12",cy:"12",r:"9"}),r.jsx("path",{d:"M12 7v5l3 3"})]});case"users":return r.jsxs("svg",{...n,children:[r.jsx("circle",{cx:"9",cy:"8",r:"3.5"}),r.jsx("path",{d:"M3 20c0-3.87 2.69-7 6-7h.5"}),r.jsx("circle",{cx:"16",cy:"10",r:"2.5"}),r.jsx("path",{d:"M12.5 20c0-2.76 1.57-5 3.5-5s3.5 2.24 3.5 5"})]});case"video":return r.jsxs("svg",{...n,children:[r.jsx("path",{d:"M17 7H7a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z"}),r.jsx("path",{d:"M22 8.5l-5 3.5 5 3.5z"})]});case"plus":return r.jsx("svg",{...n,children:r.jsx("path",{d:"M12 5v14M5 12h14"})});case"check":return r.jsx("svg",{...n,children:r.jsx("path",{d:"M5 12.5l4.5 4.5L19 7"})});case"close":return r.jsx("svg",{...n,children:r.jsx("path",{d:"M6 6l12 12M18 6 6 18"})});case"chat":return r.jsx("svg",{...n,children:r.jsx("path",{d:"M4 5.5A2.5 2.5 0 0 1 6.5 3h11A2.5 2.5 0 0 1 20 5.5v8A2.5 2.5 0 0 1 17.5 16H10l-4.5 4v-4H6.5A2.5 2.5 0 0 1 4 13.5z"})});case"trash":return r.jsx("svg",{...n,children:r.jsx("path",{d:"M5.5 7h13M9.5 7V5a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v2M7 7l.8 12a1.5 1.5 0 0 0 1.5 1.4h5.4a1.5 1.5 0 0 0 1.5-1.4L17 7"})});case"link":return r.jsxs("svg",{...n,children:[r.jsx("path",{d:"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"}),r.jsx("path",{d:"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"})]});case"person":return r.jsxs("svg",{...n,children:[r.jsx("circle",{cx:"12",cy:"8",r:"4"}),r.jsx("path",{d:"M4 20c0-4 3.58-7 8-7s8 3 8 7"})]});default:return null}}function Jm({onSave:e,onClose:t}){const[n,a]=g.useState(""),[i,s]=g.useState("🏥 Healthcare"),[o,l]=g.useState(sd()),[d,c]=g.useState("10:00"),[h,m]=g.useState("30 min"),[x,w]=g.useState(""),[N,y]=g.useState(""),[j,f]=g.useState(["You"]),[u,p]=g.useState(""),v=()=>{const k=N.trim();if(k){if(j.includes(k)){y("");return}f(M=>[...M,k]),y("")}},S=k=>k!=="You"&&f(M=>M.filter(U=>U!==k)),C=k=>{if(k.preventDefault(),!n.trim()){p("Title is required.");return}if(!o){p("Please choose a date.");return}p(""),e({id:`m${Date.now()}`,title:n.trim(),industry:i,date:un(o),time:Ym(d),duration:h,attendees:j,link:x.trim()||null,status:"upcoming"}),t()};return r.jsx("div",{className:"modal-overlay",onClick:t,children:r.jsxs("div",{className:"modal-box",onClick:k=>k.stopPropagation(),children:[r.jsxs("div",{className:"modal-hd",children:[r.jsx("h2",{children:"📅 Schedule New Meeting"}),r.jsx("button",{className:"modal-x",onClick:t,"aria-label":"Close",children:r.jsx(be,{name:"close",size:16})})]}),u&&r.jsxs("div",{className:"modal-error",children:["⚠️ ",u]}),r.jsxs("form",{onSubmit:C,noValidate:!0,children:[r.jsxs("div",{className:"mfield",children:[r.jsx("label",{children:"Meeting Title *"}),r.jsx("input",{type:"text",placeholder:"e.g. RAG System Demo — Healthcare",value:n,onChange:k=>{a(k.target.value),p("")},autoFocus:!0,required:!0})]}),r.jsxs("div",{className:"mfield",children:[r.jsx("label",{children:"Industry / Topic"}),r.jsx("select",{value:i,onChange:k=>s(k.target.value),children:qm.map(k=>r.jsx("option",{value:k,children:k},k))})]}),r.jsxs("div",{className:"mfield-row",children:[r.jsxs("div",{className:"mfield",children:[r.jsx("label",{children:"Date *"}),r.jsx("input",{type:"date",value:o,min:sd(),onChange:k=>{l(k.target.value),p("")},required:!0})]}),r.jsxs("div",{className:"mfield",children:[r.jsx("label",{children:"Time"}),r.jsx("input",{type:"time",value:d,onChange:k=>c(k.target.value)})]})]}),r.jsxs("div",{className:"mfield",children:[r.jsx("label",{children:"Duration"}),r.jsx("div",{className:"duration-chips",children:Km.map(k=>r.jsx("button",{type:"button",className:`dur-chip${h===k?" active":""}`,onClick:()=>m(k),children:k},k))})]}),r.jsxs("div",{className:"mfield",children:[r.jsx("label",{children:"Attendees"}),r.jsxs("div",{className:"attendee-input-row",children:[r.jsx("input",{type:"text",placeholder:"Type a name and press Enter",value:N,onChange:k=>y(k.target.value),onKeyDown:k=>{k.key==="Enter"&&(k.preventDefault(),v())}}),r.jsxs("button",{type:"button",className:"add-attendee-btn",onClick:v,children:[r.jsx(be,{name:"plus",size:14})," Add"]})]}),j.length>0&&r.jsx("div",{className:"attendee-list",children:j.map(k=>r.jsxs("span",{className:"attendee-tag",children:[r.jsx(be,{name:"person",size:12}),k,k!=="You"&&r.jsx("button",{type:"button",className:"remove-att",onClick:()=>S(k),"aria-label":`Remove ${k}`,children:r.jsx(be,{name:"close",size:10})})]},k))})]}),r.jsxs("div",{className:"mfield",children:[r.jsx("label",{children:"Meeting Link (optional)"}),r.jsxs("div",{className:"link-input-wrap",children:[r.jsx(be,{name:"link",size:16}),r.jsx("input",{type:"url",placeholder:"https://zoom.us/j/...",value:x,onChange:k=>w(k.target.value)})]})]}),r.jsxs("div",{className:"modal-footer",children:[r.jsx("button",{type:"button",className:"cancel-btn",onClick:t,children:"Cancel"}),r.jsxs("button",{type:"submit",className:"save-btn",children:[r.jsx(be,{name:"check",size:15})," Schedule Meeting"]})]})]})]})})}function Zm(){const e=it(),[t,n]=g.useState(Xm),[a,i]=g.useState("all"),[s,o]=g.useState(!1),[l,d]=g.useState(null),[c,h]=g.useState(""),m=t.filter(j=>a==="all"||j.status===a).sort((j,f)=>j.status==="upcoming"?-1:1),x=t.filter(j=>j.status==="upcoming").length,w=j=>{n(f=>[j,...f]),y("Meeting scheduled successfully! 🎉")},N=j=>{n(f=>f.filter(u=>u.id!==j)),d(null),y("Meeting removed.")},y=j=>{h(j),setTimeout(()=>h(""),3e3)};return r.jsxs("div",{className:"meetings-page",children:[r.jsx("style",{children:`
/* ===== Meetings Page ===== */
.meetings-page {
  --ink: #0c0f17; --navy: #0a1730; --paper: #f1f0fa;
  --paper-2: #e8e6f6; --panel: #ffffff;
  --indigo: #4f46e5; --indigo-2: #7c74ff;
  --green: #22c55e; --amber: #f59e0b; --coral: #ef4444;
  --slate: #5b6270; --slate-l: #9296a6;
  --line: rgba(12,15,23,0.1);
  font-family: "Inter", sans-serif;
  background: var(--bg, var(--paper)); color: var(--text, var(--ink));
  min-height: 100vh; -webkit-font-smoothing: antialiased;
}
.meetings-page *, .meetings-page *::before, .meetings-page *::after { box-sizing: border-box; margin: 0; }
.meetings-page h1,.meetings-page h2,.meetings-page h3 { font-family: "Space Grotesk", sans-serif; }
.meetings-page a { color: inherit; text-decoration: none; }
.meetings-page button, .meetings-page select { font-family: inherit; cursor: pointer; }
.meetings-page input, .meetings-page textarea, .meetings-page select { font-family: inherit; }
.meetings-page label { display: block; }

/* ── nav ── */
.meetings-page nav {
  position: sticky; top: 0; z-index: 100;
  display: flex; align-items: center; justify-content: space-between;
  padding: 18px 40px; background: var(--nav-bg, var(--navy));
  border-bottom: 1px solid rgba(255,255,255,0.08);
}
.meetings-page .brand {
  display: flex; align-items: center; gap: 10px;
  font-weight: 700; font-size: 18px; color: #fff;
  font-family: "Space Grotesk", sans-serif;
}
.meetings-page .brand-mark {
  width: 28px; height: 28px; border-radius: 8px;
  background: linear-gradient(135deg, var(--indigo), var(--indigo-2));
  display: flex; align-items: center; justify-content: center;
  font-size: 14px; font-weight: 700; color: #fff;
}
.meetings-page .nav-right { display: flex; align-items: center; gap: 14px; }
.meetings-page .nav-link { color: rgba(255,255,255,0.65); font-size: 14px; transition: color 0.2s; }
.meetings-page .nav-link:hover { color: #fff; }
.meetings-page .nav-btn {
  display: inline-flex; align-items: center; gap: 7px;
  padding: 9px 18px; border-radius: 100px;
  background: var(--indigo); color: #fff; border: none;
  font-size: 13.5px; font-weight: 600; transition: background 0.2s;
}
.meetings-page .nav-btn:hover { background: var(--indigo-2); }

/* ── toast ── */
.meetings-page .toast {
  position: fixed; bottom: 28px; left: 50%; transform: translateX(-50%);
  background: var(--ink); color: #fff; padding: 12px 22px;
  border-radius: 100px; font-size: 14px; font-weight: 600;
  display: flex; align-items: center; gap: 8px;
  box-shadow: 0 8px 24px -6px rgba(12,15,23,0.4);
  z-index: 9999; white-space: nowrap;
  animation: toast-in 0.3s ease;
}
@keyframes toast-in { from { opacity:0; transform: translateX(-50%) translateY(10px); } to { opacity:1; transform: translateX(-50%) translateY(0); } }

/* ── page ── */
.meetings-page .page-wrap { max-width: 900px; margin: 0 auto; padding: 52px 28px 100px; }
.meetings-page .page-head { margin-bottom: 36px; }
.meetings-page .eyebrow {
  display: inline-flex; align-items: center; gap: 8px;
  font-family: "IBM Plex Mono", monospace;
  font-size: 12px; letter-spacing: 0.08em;
  text-transform: uppercase; color: var(--indigo); margin-bottom: 12px;
}
.meetings-page .eyebrow::before {
  content: ""; width: 7px; height: 7px; border-radius: 50%;
  background: var(--amber); box-shadow: 0 0 0 4px rgba(245,158,11,0.2);
}
.meetings-page .page-head h1 { font-size: 36px; font-weight: 700; letter-spacing: -0.01em; }
.meetings-page .head-row {
  display: flex; align-items: center; justify-content: space-between;
  gap: 16px; flex-wrap: wrap; margin-top: 8px;
}
.meetings-page .head-sub { font-size: 15px; color: var(--slate); }
.meetings-page .new-btn {
  display: inline-flex; align-items: center; gap: 7px;
  padding: 10px 20px; border-radius: 100px;
  background: var(--ink); color: #fff; border: none;
  font-size: 14px; font-weight: 600; transition: background 0.2s;
}
.meetings-page .new-btn:hover { background: var(--indigo); }

/* ── filter tabs ── */
.meetings-page .filter-tabs {
  display: inline-flex; gap: 4px;
  background: var(--panel); border: 1px solid var(--line);
  border-radius: 12px; padding: 4px; margin-bottom: 28px;
}
.meetings-page .ftab {
  padding: 8px 18px; border-radius: 9px; border: none;
  background: transparent; font-size: 13.5px; font-weight: 500;
  color: var(--slate); transition: all 0.2s;
}
.meetings-page .ftab.active { background: var(--ink); color: #fff; }
.meetings-page .ftab:hover:not(.active) { background: var(--paper-2); color: var(--ink); }

/* ── meeting cards ── */
.meetings-page .meetings-list { display: flex; flex-direction: column; gap: 16px; }
.meetings-page .meeting-card {
  background: var(--surface, var(--panel)); border: 1.5px solid var(--line);
  border-radius: 22px; padding: 26px 28px;
  transition: box-shadow 0.25s, border-color 0.25s;
}
.meetings-page .meeting-card:hover { box-shadow: 0 8px 28px -10px rgba(12,15,23,0.15); border-color: rgba(79,70,229,0.2); }
.meetings-page .meeting-card.upcoming { border-left: 4px solid var(--indigo); padding-left: 24px; }
.meetings-page .meeting-card.done { opacity: 0.75; }

.meetings-page .mc-top {
  display: flex; align-items: flex-start; justify-content: space-between; gap: 16px; margin-bottom: 16px;
}
.meetings-page .mc-title-row { flex: 1; }
.meetings-page .mc-industry { font-size: 12px; font-weight: 600; color: var(--slate); font-family: "IBM Plex Mono", monospace; margin-bottom: 7px; }
.meetings-page .mc-title { font-size: 17px; font-weight: 700; line-height: 1.3; font-family: "Space Grotesk", sans-serif; }
.meetings-page .mc-top-right { display: flex; align-items: center; gap: 8px; flex-shrink: 0; }

.meetings-page .status-pill {
  display: inline-flex; align-items: center; gap: 5px;
  padding: 5px 12px; border-radius: 100px; font-size: 12px; font-weight: 700;
}
.meetings-page .status-pill::before { content: ""; width: 6px; height: 6px; border-radius: 50%; background: currentColor; }
.meetings-page .status-pill.upcoming { background: #ede9fe; color: #6d28d9; }
.meetings-page .status-pill.done { background: #f1f5f9; color: var(--slate); }

.meetings-page .del-btn {
  width: 30px; height: 30px; border-radius: 8px;
  border: 1px solid var(--line); background: var(--paper);
  display: flex; align-items: center; justify-content: center;
  color: var(--slate-l); transition: all 0.2s;
}
.meetings-page .del-btn:hover { border-color: #fca5a5; background: #fef2f2; color: #dc2626; }

.meetings-page .mc-meta { display: flex; flex-wrap: wrap; gap: 18px; margin-bottom: 18px; }
.meetings-page .mc-meta-item { display: flex; align-items: center; gap: 7px; font-size: 13.5px; color: var(--slate); }
.meetings-page .attendee-chips { display: flex; gap: 6px; flex-wrap: wrap; }
.meetings-page .attendee-chip { background: var(--paper-2); border-radius: 100px; padding: 3px 10px; font-size: 12px; font-weight: 600; }

.meetings-page .mc-actions { display: flex; gap: 10px; flex-wrap: wrap; }
.meetings-page .mc-btn {
  display: inline-flex; align-items: center; gap: 7px;
  padding: 9px 18px; border-radius: 100px;
  border: 1.5px solid var(--line); background: var(--paper);
  font-size: 13px; font-weight: 600; color: var(--ink);
  transition: all 0.2s; text-decoration: none;
}
.meetings-page .mc-btn:hover { background: var(--paper-2); border-color: var(--slate-l); }
.meetings-page .mc-btn.primary { background: var(--indigo); color: #fff; border-color: transparent; }
.meetings-page .mc-btn.primary:hover { background: var(--indigo-2); }

/* ── empty ── */
.meetings-page .empty { text-align: center; padding: 60px; background: var(--surface, var(--panel)); border: 1px solid var(--line); border-radius: 22px; }
.meetings-page .empty-icon { font-size: 48px; margin-bottom: 16px; }
.meetings-page .empty h3 { font-size: 20px; font-weight: 700; margin-bottom: 10px; font-family: "Space Grotesk", sans-serif; }
.meetings-page .empty p { color: var(--slate); font-size: 14.5px; margin-bottom: 20px; }
.meetings-page .empty-btn {
  display: inline-flex; align-items: center; gap: 7px;
  padding: 11px 22px; border-radius: 100px;
  background: var(--ink); color: #fff; border: none;
  font-size: 14px; font-weight: 600; transition: background 0.2s;
}
.meetings-page .empty-btn:hover { background: var(--indigo); }

/* ── confirm delete ── */
.meetings-page .confirm-overlay {
  position: fixed; inset: 0; background: rgba(12,15,23,0.5);
  display: flex; align-items: center; justify-content: center;
  z-index: 600; padding: 20px;
}
.meetings-page .confirm-box {
  background: #fff; border-radius: 20px; padding: 28px;
  max-width: 360px; width: 100%;
  box-shadow: 0 20px 50px -12px rgba(12,15,23,0.35); text-align: center;
}
.meetings-page .confirm-box h3 { font-size: 18px; font-weight: 700; margin-bottom: 10px; font-family: "Space Grotesk", sans-serif; }
.meetings-page .confirm-box p { font-size: 14px; color: var(--slate); margin-bottom: 24px; line-height: 1.55; }
.meetings-page .confirm-btns { display: flex; gap: 10px; justify-content: center; }
.meetings-page .confirm-cancel { padding: 10px 22px; border-radius: 100px; border: 1.5px solid var(--line); background: var(--paper-2); font-size: 14px; font-weight: 600; transition: all 0.2s; }
.meetings-page .confirm-cancel:hover { background: var(--paper); }
.meetings-page .confirm-delete { padding: 10px 22px; border-radius: 100px; background: #dc2626; color: #fff; border: none; font-size: 14px; font-weight: 600; transition: background 0.2s; }
.meetings-page .confirm-delete:hover { background: #b91c1c; }

/* ══════════ MODAL ══════════ */
.meetings-page .modal-overlay {
  position: fixed; inset: 0; background: rgba(12,15,23,0.5);
  backdrop-filter: blur(4px);
  display: flex; align-items: center; justify-content: center;
  z-index: 500; padding: 20px;
}
.meetings-page .modal-box {
  background: #fff; border-radius: 24px;
  width: 100%; max-width: 560px;
  box-shadow: 0 24px 60px -12px rgba(12,15,23,0.4);
  padding: 28px; max-height: 92vh; overflow-y: auto;
  display: flex; flex-direction: column; gap: 0;
  animation: modal-pop 0.25s cubic-bezier(0.34,1.56,0.64,1);
}
@keyframes modal-pop { from { opacity:0; transform: scale(0.93); } to { opacity:1; transform: scale(1); } }

.meetings-page .modal-hd {
  display: flex; align-items: center; justify-content: space-between;
  margin-bottom: 20px;
}
.meetings-page .modal-hd h2 { font-size: 19px; font-weight: 700; font-family: "Space Grotesk", sans-serif; }
.meetings-page .modal-x {
  width: 32px; height: 32px; border-radius: 9px;
  border: none; background: #f1f0fa;
  display: flex; align-items: center; justify-content: center;
  color: var(--slate); transition: background 0.2s;
}
.meetings-page .modal-x:hover { background: #e8e6f6; }
.meetings-page .modal-error {
  background: #fff1f1; border: 1px solid #fecaca;
  border-radius: 10px; padding: 10px 14px;
  font-size: 13.5px; color: #dc2626; margin-bottom: 16px;
}

/* form fields */
.meetings-page .mfield { margin-bottom: 18px; }
.meetings-page .mfield > label {
  font-size: 13px; font-weight: 600; color: var(--ink);
  margin-bottom: 7px; display: block;
}
.meetings-page .mfield input[type="text"],
.meetings-page .mfield input[type="url"],
.meetings-page .mfield input[type="date"],
.meetings-page .mfield input[type="time"],
.meetings-page .mfield select {
  width: 100%; padding: 11px 14px; border-radius: 12px;
  border: 1.5px solid var(--line); background: #f8f7fc;
  font-size: 14px; color: var(--ink); outline: none;
  transition: border-color 0.2s, box-shadow 0.2s;
}
.meetings-page .mfield input:focus,
.meetings-page .mfield select:focus {
  border-color: var(--indigo); box-shadow: 0 0 0 3px rgba(79,70,229,0.1);
  background: #fff;
}
.meetings-page .mfield-row { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; }
@media (max-width: 480px) { .meetings-page .mfield-row { grid-template-columns: 1fr; } }

/* duration chips */
.meetings-page .duration-chips { display: flex; flex-wrap: wrap; gap: 8px; }
.meetings-page .dur-chip {
  padding: 7px 14px; border-radius: 100px;
  border: 1.5px solid var(--line); background: #f8f7fc;
  font-size: 13px; font-weight: 500; color: var(--slate);
  transition: all 0.2s;
}
.meetings-page .dur-chip:hover { border-color: var(--indigo); color: var(--indigo); }
.meetings-page .dur-chip.active { background: var(--indigo); color: #fff; border-color: transparent; }

/* attendees */
.meetings-page .attendee-input-row { display: flex; gap: 8px; margin-bottom: 10px; }
.meetings-page .attendee-input-row input { flex: 1; }
.meetings-page .add-attendee-btn {
  display: inline-flex; align-items: center; gap: 5px;
  padding: 10px 14px; border-radius: 12px;
  background: var(--ink); color: #fff; border: none;
  font-size: 13px; font-weight: 600; white-space: nowrap; transition: background 0.2s;
}
.meetings-page .add-attendee-btn:hover { background: var(--indigo); }
.meetings-page .attendee-list { display: flex; flex-wrap: wrap; gap: 7px; }
.meetings-page .attendee-tag {
  display: inline-flex; align-items: center; gap: 5px;
  background: #eef2ff; border: 1px solid #c7d2fe;
  border-radius: 100px; padding: 4px 10px;
  font-size: 12.5px; font-weight: 600; color: var(--indigo);
}
.meetings-page .remove-att {
  background: none; border: none; color: var(--indigo); display: flex;
  padding: 0; margin-left: 2px; opacity: 0.6; transition: opacity 0.2s;
}
.meetings-page .remove-att:hover { opacity: 1; }

/* link input */
.meetings-page .link-input-wrap {
  display: flex; align-items: center; gap: 10px;
  padding: 11px 14px; border-radius: 12px;
  border: 1.5px solid var(--line); background: #f8f7fc;
  transition: border-color 0.2s;
}
.meetings-page .link-input-wrap:focus-within { border-color: var(--indigo); background: #fff; }
.meetings-page .link-input-wrap svg { color: var(--slate-l); flex-shrink: 0; }
.meetings-page .link-input-wrap input {
  border: none; outline: none; background: transparent;
  font-size: 14px; color: var(--ink); flex: 1; padding: 0;
}
.meetings-page .link-input-wrap input::placeholder { color: var(--slate-l); }

/* modal footer */
.meetings-page .modal-footer { display: flex; justify-content: flex-end; gap: 10px; margin-top: 22px; }
.meetings-page .cancel-btn {
  padding: 11px 22px; border-radius: 100px;
  border: 1.5px solid var(--line); background: var(--paper-2);
  font-size: 14px; font-weight: 600; transition: all 0.2s;
}
.meetings-page .cancel-btn:hover { background: var(--paper); border-color: var(--slate-l); }
.meetings-page .save-btn {
  display: inline-flex; align-items: center; gap: 7px;
  padding: 11px 22px; border-radius: 100px;
  background: var(--indigo); color: #fff; border: none;
  font-size: 14px; font-weight: 700; transition: background 0.2s;
}
.meetings-page .save-btn:hover { background: var(--indigo-2); }
`}),c&&r.jsxs("div",{className:"toast",children:["✅ ",c]}),r.jsxs("nav",{children:[r.jsxs(I,{to:"/",className:"brand",children:[r.jsx("span",{className:"brand-mark",children:"N"})," NexusRAG"]}),r.jsxs("div",{className:"nav-right",children:[r.jsx(I,{to:"/dashboard",className:"nav-link",children:"← Dashboard"}),r.jsx(I,{to:"/chat",className:"nav-link",children:"Chat"}),r.jsxs("button",{className:"nav-btn",onClick:()=>o(!0),children:[r.jsx(be,{name:"plus",size:14})," Schedule Meeting"]})]})]}),r.jsxs("div",{className:"page-wrap",children:[r.jsxs("div",{className:"page-head",children:[r.jsx("div",{className:"eyebrow",children:"Scheduled"}),r.jsx("h1",{children:"My Meetings"}),r.jsxs("div",{className:"head-row",children:[r.jsxs("p",{className:"head-sub",children:[x," upcoming · ",t.length-x," past · ",t.length," total"]}),r.jsxs("button",{className:"new-btn",onClick:()=>o(!0),children:[r.jsx(be,{name:"plus",size:15})," Schedule New Meeting"]})]})]}),r.jsx("div",{className:"filter-tabs",children:[["all","All"],["upcoming","Upcoming"],["done","Past"]].map(([j,f])=>r.jsx("button",{className:`ftab${a===j?" active":""}`,onClick:()=>i(j),children:f},j))}),r.jsx("div",{className:"meetings-list",children:m.length===0?r.jsxs("div",{className:"empty",children:[r.jsx("div",{className:"empty-icon",children:"📅"}),r.jsx("h3",{children:"No meetings found"}),r.jsx("p",{children:a!=="all"?`No ${a} meetings.`:"Start by scheduling your first meeting."}),r.jsxs("button",{className:"empty-btn",onClick:()=>o(!0),children:[r.jsx(be,{name:"plus",size:15})," Schedule Meeting"]})]}):m.map(j=>{var f;return r.jsxs("div",{className:`meeting-card ${j.status}`,children:[r.jsxs("div",{className:"mc-top",children:[r.jsxs("div",{className:"mc-title-row",children:[r.jsx("div",{className:"mc-industry",children:j.industry}),r.jsx("div",{className:"mc-title",children:j.title})]}),r.jsxs("div",{className:"mc-top-right",children:[r.jsx("span",{className:`status-pill ${j.status}`,children:j.status==="upcoming"?"Upcoming":"Completed"}),r.jsx("button",{className:"del-btn",title:"Remove meeting",onClick:()=>d(j.id),children:r.jsx(be,{name:"trash",size:14})})]})]}),r.jsxs("div",{className:"mc-meta",children:[r.jsxs("div",{className:"mc-meta-item",children:[r.jsx(be,{name:"calendar",size:15})," ",j.date]}),r.jsxs("div",{className:"mc-meta-item",children:[r.jsx(be,{name:"clock",size:15})," ",j.time," · ",j.duration]}),((f=j.attendees)==null?void 0:f.length)>0&&r.jsxs("div",{className:"mc-meta-item",children:[r.jsx(be,{name:"users",size:15}),r.jsx("div",{className:"attendee-chips",children:j.attendees.map(u=>r.jsx("span",{className:"attendee-chip",children:u},u))})]})]}),r.jsxs("div",{className:"mc-actions",children:[j.status==="upcoming"&&j.link&&r.jsxs("a",{href:j.link,className:"mc-btn primary",target:"_blank",rel:"noopener noreferrer",children:[r.jsx(be,{name:"video",size:14})," Join Meeting"]}),r.jsxs("button",{className:"mc-btn",onClick:()=>e("/chat"),children:[r.jsx(be,{name:"chat",size:14})," Open Chat"]}),j.status==="done"&&r.jsx("button",{className:"mc-btn",children:"View Notes"})]})]},j.id)})})]}),s&&r.jsx("div",{className:"meetings-page",children:r.jsx(Jm,{onSave:w,onClose:()=>o(!1)})}),l&&r.jsx("div",{className:"confirm-overlay",onClick:()=>d(null),children:r.jsxs("div",{className:"confirm-box",onClick:j=>j.stopPropagation(),children:[r.jsx("h3",{children:"Remove meeting?"}),r.jsx("p",{children:"This will permanently delete the meeting from your schedule."}),r.jsxs("div",{className:"confirm-btns",children:[r.jsx("button",{className:"confirm-cancel",onClick:()=>d(null),children:"Cancel"}),r.jsx("button",{className:"confirm-delete",onClick:()=>N(l),children:"Remove"})]})]})})]})}const eg=[{id:"n1",title:"HyPE Retrieval — Key Takeaways",body:`HyPE (Hypothetical Passage Embeddings) generates hypothetical answer passages for each query before retrieval. This bridges the gap between sparse query embeddings and dense document embeddings, especially for short or ambiguous questions.

- Improves recall by ~12% over vanilla dense retrieval
- Works best when combined with BM25 hybrid search
- MiniLM reranker further pushes precision after HyPE retrieval`,tag:"Research",color:"#eef2ff",border:"#c7d2fe",pinned:!0,updatedAt:"Today, 10:30 am"},{id:"n2",title:"Dataset Notes — Healthcare (PubMedQA)",body:`PubMedQA contains 1K expert-annotated QA pairs from PubMed abstracts. Labels: yes/no/maybe.

- Use semantic chunking at sentence boundary
- Cosine similarity outperforms Inner Product on this corpus
- Avg chunk size: 180 tokens`,tag:"Healthcare",color:"#f0fdf4",border:"#86efac",pinned:!0,updatedAt:"Today, 9:15 am"},{id:"n3",title:"Finance Dataset — FinQA / TAT-QA",body:`FinQA requires numerical reasoning over financial tables + text. TAT-QA mixes tabular and textual evidence.

Challenges:
- Numbers extracted from tables need special handling
- Hybrid retrieval (BM25 + dense) significantly helps table-heavy queries
- Consider adding table-aware chunking strategy`,tag:"Finance",color:"#fffbeb",border:"#fcd34d",pinned:!1,updatedAt:"Yesterday, 4:00 pm"},{id:"n4",title:"Traffic Dataset — Driving Rules (India)",body:`Custom dataset compiled from:
- Motor Vehicles Act, 1988
- CMVR rules
- State transport department PDFs

Indexing strategy: IVF with 256 clusters works well for ~50K chunks.`,tag:"Traffic",color:"#fff1f2",border:"#fda4af",pinned:!1,updatedAt:"2 days ago"},{id:"n5",title:"Project Guide Review — Action Items",body:`From guide meeting on Sept 5:
✅ Add ANOVA table to Chapter 4
✅ Update retrieval strategy diagram
⬜ Write discussion for effect size results
⬜ Cross-check references (IEEE format)
⬜ Submit draft by Sept 20`,tag:"Project",color:"#fdf4ff",border:"#e9d5ff",pinned:!1,updatedAt:"3 days ago"},{id:"n6",title:"MiniLM vs BGE Reranker — Comparison",body:`Empirical results from evaluation:

MiniLM cross-encoder:
- MRR@10: 0.74
- Latency: ~18ms

BGE Reranker:
- MRR@10: 0.71
- Latency: ~42ms

Conclusion: MiniLM wins on both accuracy and speed for this use case.`,tag:"Research",color:"#eef2ff",border:"#c7d2fe",pinned:!1,updatedAt:"4 days ago"}],Au=["All","Research","Healthcare","Finance","Traffic","Project"],od=[{bg:"#eef2ff",border:"#c7d2fe"},{bg:"#f0fdf4",border:"#86efac"},{bg:"#fffbeb",border:"#fcd34d"},{bg:"#fff1f2",border:"#fda4af"},{bg:"#fdf4ff",border:"#e9d5ff"},{bg:"#f0f9ff",border:"#7dd3fc"}];function Ve({name:e,size:t=18}){const n={width:t,height:t,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:1.8,strokeLinecap:"round",strokeLinejoin:"round"};switch(e){case"plus":return r.jsx("svg",{...n,children:r.jsx("path",{d:"M12 5v14M5 12h14"})});case"pin":return r.jsxs("svg",{...n,children:[r.jsx("path",{d:"M12 17v5M8 8l2 5h4l2-5"}),r.jsx("path",{d:"M5 8h14M9 8V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v4"})]});case"trash":return r.jsx("svg",{...n,children:r.jsx("path",{d:"M5.5 7h13M9.5 7V5a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v2M7 7l.8 12a1.5 1.5 0 0 0 1.5 1.4h5.4a1.5 1.5 0 0 0 1.5-1.4L17 7"})});case"close":return r.jsx("svg",{...n,children:r.jsx("path",{d:"M6 6l12 12M18 6 6 18"})});case"search":return r.jsxs("svg",{...n,children:[r.jsx("circle",{cx:"11",cy:"11",r:"7"}),r.jsx("path",{d:"M20 20l-4.35-4.35"})]});case"pencil":return r.jsxs("svg",{...n,children:[r.jsx("path",{d:"M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"}),r.jsx("path",{d:"M18.5 2.5a2.12 2.12 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"})]});case"note":return r.jsxs("svg",{...n,children:[r.jsx("path",{d:"M6 3.5h9l3 3V20a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5z"}),r.jsx("path",{d:"M9 10h6M9 13.5h6M9 17h3.5"})]});case"check":return r.jsx("svg",{...n,children:r.jsx("path",{d:"M5 12.5l4.5 4.5L19 7"})});default:return null}}function tg({note:e,onSave:t,onClose:n}){const[a,i]=g.useState((e==null?void 0:e.title)||""),[s,o]=g.useState((e==null?void 0:e.body)||""),[l,d]=g.useState((e==null?void 0:e.tag)||"Research"),[c,h]=g.useState(e?{bg:e.color,border:e.border}:od[0]),m=!(e!=null&&e.id);return r.jsx("div",{className:"modal-overlay",onClick:n,children:r.jsxs("div",{className:"modal-box",onClick:x=>x.stopPropagation(),children:[r.jsxs("div",{className:"modal-header",children:[r.jsx("h2",{children:m?"New Note":"Edit Note"}),r.jsx("button",{className:"modal-close",onClick:n,children:r.jsx(Ve,{name:"close",size:17})})]}),r.jsx("input",{className:"modal-title-input",placeholder:"Note title…",value:a,onChange:x=>i(x.target.value),autoFocus:!0}),r.jsx("textarea",{className:"modal-body-input",placeholder:"Write your note here…",value:s,onChange:x=>o(x.target.value),rows:10}),r.jsxs("div",{className:"modal-footer",children:[r.jsxs("div",{className:"modal-footer-left",children:[r.jsx("select",{className:"tag-select",value:l,onChange:x=>d(x.target.value),children:Au.filter(x=>x!=="All").map(x=>r.jsx("option",{value:x,children:x},x))}),r.jsx("div",{className:"color-row",children:od.map(x=>r.jsx("button",{type:"button",className:`color-dot${c.bg===x.bg?" active":""}`,style:{background:x.bg,border:`2px solid ${x.border}`},onClick:()=>h(x)},x.bg))})]}),r.jsxs("button",{className:"modal-save-btn",disabled:!a.trim(),onClick:()=>{a.trim()&&(t({id:(e==null?void 0:e.id)||`n${Date.now()}`,title:a.trim(),body:s.trim(),tag:l,color:c.bg,border:c.border,pinned:(e==null?void 0:e.pinned)||!1,updatedAt:"Just now"}),n())},children:[r.jsx(Ve,{name:"check",size:15})," Save Note"]})]})]})})}function ng(){it();const[e,t]=g.useState(eg),[n,a]=g.useState("All"),[i,s]=g.useState(""),[o,l]=g.useState(null),[d,c]=g.useState(null),h=e.filter(y=>n==="All"||y.tag===n).filter(y=>!i.trim()||y.title.toLowerCase().includes(i.trim().toLowerCase())||y.body.toLowerCase().includes(i.trim().toLowerCase())).sort((y,j)=>(j.pinned?1:0)-(y.pinned?1:0)),m=y=>{t(j=>j.findIndex(u=>u.id===y.id)>=0?j.map(u=>u.id===y.id?y:u):[y,...j])},x=y=>t(j=>j.map(f=>f.id===y?{...f,pinned:!f.pinned}:f)),w=y=>{t(j=>j.filter(f=>f.id!==y)),c(null)},N=e.filter(y=>y.pinned).length;return r.jsxs("div",{className:"notes-page",children:[r.jsx("style",{children:`
/* ===== Notes Page ===== */
.notes-page {
  --ink: #0c0f17; --navy: #0a1730; --paper: #f1f0fa;
  --paper-2: #e8e6f6; --panel: #ffffff;
  --indigo: #4f46e5; --indigo-2: #7c74ff;
  --slate: #5b6270; --slate-l: #9296a6;
  --line: rgba(12,15,23,0.1);
  font-family: "Inter", sans-serif;
  background: var(--paper); color: var(--ink);
  min-height: 100vh; -webkit-font-smoothing: antialiased;
}
.notes-page *, .notes-page *::before, .notes-page *::after { box-sizing: border-box; margin: 0; }
.notes-page h1, .notes-page h2, .notes-page h3 { font-family: "Space Grotesk", sans-serif; }
.notes-page a { color: inherit; text-decoration: none; }
.notes-page button, .notes-page select { font-family: inherit; cursor: pointer; }
.notes-page textarea, .notes-page input { font-family: inherit; }

/* ── nav ── */
.notes-page nav {
  position: sticky; top: 0; z-index: 100;
  display: flex; align-items: center; justify-content: space-between;
  padding: 18px 40px; background: var(--navy);
  border-bottom: 1px solid rgba(255,255,255,0.08);
}
.notes-page .brand {
  display: flex; align-items: center; gap: 10px;
  font-weight: 700; font-size: 18px; color: #fff;
  font-family: "Space Grotesk", sans-serif;
}
.notes-page .brand-mark {
  width: 28px; height: 28px; border-radius: 8px;
  background: linear-gradient(135deg, var(--indigo), var(--indigo-2));
  display: flex; align-items: center; justify-content: center;
  font-size: 14px; font-weight: 700; color: #fff;
}
.notes-page .nav-right { display: flex; align-items: center; gap: 12px; }
.notes-page .nav-link { color: rgba(255,255,255,0.65); font-size: 14px; transition: color 0.2s; }
.notes-page .nav-link:hover { color: #fff; }
.notes-page .nav-btn {
  display: inline-flex; align-items: center; gap: 7px;
  padding: 9px 18px; border-radius: 100px;
  background: var(--indigo); color: #fff; border: none;
  font-size: 13.5px; font-weight: 600; transition: background 0.2s;
}
.notes-page .nav-btn:hover { background: var(--indigo-2); }

/* ── page wrap ── */
.notes-page .page-wrap { max-width: 1100px; margin: 0 auto; padding: 48px 28px 100px; }

/* ── page header ── */
.notes-page .page-head { margin-bottom: 32px; }
.notes-page .page-head h1 { font-size: 34px; font-weight: 700; letter-spacing: -0.01em; margin-bottom: 6px; }
.notes-page .page-head p { font-size: 14.5px; color: var(--slate); }

/* ── toolbar ── */
.notes-page .toolbar {
  display: flex; align-items: center; justify-content: space-between;
  gap: 16px; flex-wrap: wrap; margin-bottom: 28px;
}
.notes-page .search-wrap {
  display: flex; align-items: center; gap: 9px;
  background: var(--panel); border: 1.5px solid var(--line);
  border-radius: 12px; padding: 10px 14px;
  flex: 1; max-width: 340px; transition: border-color 0.2s;
}
.notes-page .search-wrap:focus-within { border-color: var(--indigo); }
.notes-page .search-wrap input {
  border: none; outline: none; font-size: 14px;
  color: var(--ink); background: transparent; flex: 1;
}
.notes-page .search-wrap input::placeholder { color: var(--slate-l); }
.notes-page .search-clear { background: none; border: none; color: var(--slate-l); display: flex; padding: 1px; transition: color 0.2s; }
.notes-page .search-clear:hover { color: var(--ink); }

.notes-page .new-note-btn {
  display: inline-flex; align-items: center; gap: 7px;
  padding: 10px 20px; border-radius: 100px;
  background: var(--ink); color: #fff; border: none;
  font-size: 14px; font-weight: 600; transition: background 0.2s;
  flex-shrink: 0;
}
.notes-page .new-note-btn:hover { background: var(--indigo); }

/* ── tag filter ── */
.notes-page .tag-filter {
  display: flex; gap: 6px; flex-wrap: wrap; margin-bottom: 28px;
}
.notes-page .tag-btn {
  padding: 7px 16px; border-radius: 100px; border: 1.5px solid var(--line);
  background: var(--panel); font-size: 13px; font-weight: 500;
  color: var(--slate); transition: all 0.2s;
}
.notes-page .tag-btn:hover { border-color: var(--slate-l); color: var(--ink); }
.notes-page .tag-btn.active {
  background: var(--ink); color: #fff; border-color: transparent;
}

/* ── notes grid ── */
.notes-page .notes-grid {
  display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 18px;
}
@media (max-width: 560px) { .notes-page .notes-grid { grid-template-columns: 1fr; } }

/* ── note card ── */
.notes-page .note-card {
  border-radius: 20px; padding: 22px;
  border: 1.5px solid transparent;
  position: relative; transition: transform 0.22s, box-shadow 0.22s;
  display: flex; flex-direction: column; gap: 12px;
}
.notes-page .note-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 32px -12px rgba(12,15,23,0.18);
}
.notes-page .note-card-top {
  display: flex; align-items: flex-start; justify-content: space-between; gap: 8px;
}
.notes-page .note-tag {
  font-size: 11px; font-weight: 700; text-transform: uppercase;
  letter-spacing: 0.06em; color: var(--slate);
  font-family: "IBM Plex Mono", monospace;
}
.notes-page .note-actions { display: flex; gap: 4px; opacity: 0; transition: opacity 0.2s; }
.notes-page .note-card:hover .note-actions { opacity: 1; }
.notes-page .note-action-btn {
  width: 28px; height: 28px; border-radius: 8px;
  border: none; background: rgba(12,15,23,0.07);
  display: flex; align-items: center; justify-content: center;
  color: var(--slate); transition: background 0.2s, color 0.2s;
}
.notes-page .note-action-btn:hover { background: rgba(12,15,23,0.15); color: var(--ink); }
.notes-page .note-action-btn.pinned { color: var(--indigo); background: rgba(79,70,229,0.12); }
.notes-page .note-action-btn.danger:hover { background: #fee2e2; color: #dc2626; }

.notes-page .note-title { font-size: 15.5px; font-weight: 700; line-height: 1.35; font-family: "Space Grotesk", sans-serif; }
.notes-page .note-body {
  font-size: 13px; color: var(--slate); line-height: 1.6;
  white-space: pre-wrap; word-break: break-word;
  display: -webkit-box; -webkit-line-clamp: 5;
  -webkit-box-orient: vertical; overflow: hidden;
}
.notes-page .note-footer {
  display: flex; align-items: center; justify-content: space-between;
  font-size: 11.5px; color: var(--slate-l); margin-top: auto;
}
.notes-page .pin-badge {
  display: inline-flex; align-items: center; gap: 4px;
  font-size: 10.5px; font-weight: 700; color: var(--indigo);
}

/* ── empty ── */
.notes-page .empty {
  text-align: center; padding: 60px 20px;
  background: var(--panel); border: 1px solid var(--line);
  border-radius: 22px; grid-column: 1 / -1;
}
.notes-page .empty-icon { font-size: 48px; margin-bottom: 14px; }
.notes-page .empty h3 { font-size: 20px; font-weight: 700; margin-bottom: 8px; font-family: "Space Grotesk", sans-serif; }
.notes-page .empty p { color: var(--slate); font-size: 14.5px; margin-bottom: 20px; }
.notes-page .empty-btn {
  display: inline-flex; align-items: center; gap: 7px;
  padding: 11px 22px; border-radius: 100px;
  background: var(--ink); color: #fff; border: none;
  font-size: 14px; font-weight: 600; transition: background 0.2s;
}
.notes-page .empty-btn:hover { background: var(--indigo); }

/* ── modal ── */
.notes-page .modal-overlay {
  position: fixed; inset: 0; background: rgba(12,15,23,0.45);
  backdrop-filter: blur(4px); display: flex;
  align-items: center; justify-content: center;
  z-index: 500; padding: 20px;
}
.notes-page .modal-box {
  background: #fff; border-radius: 24px;
  width: 100%; max-width: 560px;
  box-shadow: 0 24px 60px -12px rgba(12,15,23,0.35);
  display: flex; flex-direction: column; gap: 16px;
  padding: 28px; max-height: 90vh; overflow-y: auto;
}
.notes-page .modal-header {
  display: flex; align-items: center; justify-content: space-between;
}
.notes-page .modal-header h2 { font-size: 20px; font-weight: 700; font-family: "Space Grotesk", sans-serif; }
.notes-page .modal-close {
  width: 32px; height: 32px; border-radius: 9px;
  border: none; background: var(--paper);
  display: flex; align-items: center; justify-content: center;
  color: var(--slate); transition: background 0.2s;
}
.notes-page .modal-close:hover { background: var(--paper-2); }
.notes-page .modal-title-input {
  width: 100%; padding: 11px 14px; border-radius: 12px;
  border: 1.5px solid var(--line); font-size: 15.5px;
  font-weight: 700; color: var(--ink); outline: none;
  font-family: "Space Grotesk", sans-serif;
  transition: border-color 0.2s;
}
.notes-page .modal-title-input:focus { border-color: var(--indigo); }
.notes-page .modal-body-input {
  width: 100%; padding: 11px 14px; border-radius: 12px;
  border: 1.5px solid var(--line); font-size: 14px;
  color: var(--ink); outline: none; resize: vertical;
  min-height: 180px; line-height: 1.65;
  transition: border-color 0.2s;
}
.notes-page .modal-body-input:focus { border-color: var(--indigo); }
.notes-page .modal-footer {
  display: flex; align-items: center; justify-content: space-between; gap: 12px; flex-wrap: wrap;
}
.notes-page .modal-footer-left { display: flex; align-items: center; gap: 12px; }
.notes-page .tag-select {
  padding: 8px 12px; border-radius: 10px;
  border: 1.5px solid var(--line); font-size: 13.5px;
  color: var(--ink); background: var(--paper); outline: none;
}
.notes-page .color-row { display: flex; gap: 6px; }
.notes-page .color-dot {
  width: 20px; height: 20px; border-radius: 50%;
  transition: transform 0.2s; outline-offset: 2px;
}
.notes-page .color-dot.active { transform: scale(1.3); outline: 2px solid var(--indigo); }
.notes-page .modal-save-btn {
  display: inline-flex; align-items: center; gap: 7px;
  padding: 10px 22px; border-radius: 100px;
  background: var(--ink); color: #fff; border: none;
  font-size: 14px; font-weight: 700; transition: background 0.2s;
}
.notes-page .modal-save-btn:hover:not(:disabled) { background: var(--indigo); }
.notes-page .modal-save-btn:disabled { opacity: 0.45; cursor: not-allowed; }

/* ── confirm delete ── */
.notes-page .confirm-overlay {
  position: fixed; inset: 0; background: rgba(12,15,23,0.5);
  display: flex; align-items: center; justify-content: center;
  z-index: 600; padding: 20px;
}
.notes-page .confirm-box {
  background: #fff; border-radius: 20px; padding: 28px;
  max-width: 360px; width: 100%;
  box-shadow: 0 20px 50px -12px rgba(12,15,23,0.35);
  text-align: center;
}
.notes-page .confirm-box h3 { font-size: 18px; font-weight: 700; margin-bottom: 10px; font-family: "Space Grotesk", sans-serif; }
.notes-page .confirm-box p { font-size: 14px; color: var(--slate); margin-bottom: 24px; line-height: 1.55; }
.notes-page .confirm-btns { display: flex; gap: 10px; justify-content: center; }
.notes-page .confirm-cancel {
  padding: 10px 22px; border-radius: 100px;
  border: 1.5px solid var(--line); background: var(--paper);
  font-size: 14px; font-weight: 600; transition: all 0.2s;
}
.notes-page .confirm-cancel:hover { background: var(--paper-2); }
.notes-page .confirm-delete {
  padding: 10px 22px; border-radius: 100px;
  background: #dc2626; color: #fff; border: none;
  font-size: 14px; font-weight: 600; transition: background 0.2s;
}
.notes-page .confirm-delete:hover { background: #b91c1c; }
`}),r.jsxs("nav",{children:[r.jsxs(I,{to:"/",className:"brand",children:[r.jsx("span",{className:"brand-mark",children:"N"})," NexusRAG"]}),r.jsxs("div",{className:"nav-right",children:[r.jsx(I,{to:"/dashboard",className:"nav-link",children:"← Dashboard"}),r.jsx(I,{to:"/chat",className:"nav-link",children:"Chat"}),r.jsxs("button",{className:"nav-btn",onClick:()=>l("new"),children:[r.jsx(Ve,{name:"plus",size:14})," New Note"]})]})]}),r.jsxs("div",{className:"page-wrap",children:[r.jsxs("div",{className:"page-head",children:[r.jsx("h1",{children:"📝 Notes"}),r.jsxs("p",{children:[e.length," notes · ",N," pinned"]})]}),r.jsxs("div",{className:"toolbar",children:[r.jsxs("div",{className:"search-wrap",children:[r.jsx(Ve,{name:"search",size:16}),r.jsx("input",{placeholder:"Search notes…",value:i,onChange:y=>s(y.target.value)}),i&&r.jsx("button",{className:"search-clear",onClick:()=>s(""),children:r.jsx(Ve,{name:"close",size:14})})]}),r.jsxs("button",{className:"new-note-btn",onClick:()=>l("new"),children:[r.jsx(Ve,{name:"plus",size:15})," New Note"]})]}),r.jsx("div",{className:"tag-filter",children:Au.map(y=>r.jsx("button",{className:`tag-btn${n===y?" active":""}`,onClick:()=>a(y),children:y},y))}),r.jsx("div",{className:"notes-grid",children:h.length===0?r.jsxs("div",{className:"empty",children:[r.jsx("div",{className:"empty-icon",children:"🗒️"}),r.jsx("h3",{children:"No notes found"}),r.jsx("p",{children:i?`No notes match "${i}"`:"Start by creating your first note."}),r.jsxs("button",{className:"empty-btn",onClick:()=>l("new"),children:[r.jsx(Ve,{name:"plus",size:15})," Create Note"]})]}):h.map(y=>r.jsxs("div",{className:"note-card",style:{background:y.color,borderColor:y.border},children:[r.jsxs("div",{className:"note-card-top",children:[r.jsx("span",{className:"note-tag",children:y.tag}),r.jsxs("div",{className:"note-actions",children:[r.jsx("button",{className:`note-action-btn${y.pinned?" pinned":""}`,title:y.pinned?"Unpin":"Pin",onClick:()=>x(y.id),children:r.jsx(Ve,{name:"pin",size:14})}),r.jsx("button",{className:"note-action-btn",title:"Edit",onClick:()=>l(y),children:r.jsx(Ve,{name:"pencil",size:14})}),r.jsx("button",{className:"note-action-btn danger",title:"Delete",onClick:()=>c(y.id),children:r.jsx(Ve,{name:"trash",size:14})})]})]}),r.jsx("div",{className:"note-title",children:y.title}),y.body&&r.jsx("div",{className:"note-body",children:y.body}),r.jsxs("div",{className:"note-footer",children:[r.jsx("span",{children:y.updatedAt}),y.pinned&&r.jsxs("span",{className:"pin-badge",children:[r.jsx(Ve,{name:"pin",size:11})," Pinned"]})]})]},y.id))})]}),o&&r.jsx("div",{className:"notes-page",children:r.jsx(tg,{note:o==="new"?null:o,onSave:m,onClose:()=>l(null)})}),d&&r.jsx("div",{className:"confirm-overlay",onClick:()=>c(null),children:r.jsxs("div",{className:"confirm-box",onClick:y=>y.stopPropagation(),children:[r.jsx("h3",{children:"Delete note?"}),r.jsx("p",{children:"This action cannot be undone. The note will be permanently removed."}),r.jsxs("div",{className:"confirm-btns",children:[r.jsx("button",{className:"confirm-cancel",onClick:()=>c(null),children:"Cancel"}),r.jsx("button",{className:"confirm-delete",onClick:()=>w(d),children:"Delete"})]})]})})]})}function Ii({name:e,size:t=18}){const n={width:t,height:t,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:1.8,strokeLinecap:"round",strokeLinejoin:"round"};switch(e){case"user":return r.jsxs("svg",{...n,children:[r.jsx("circle",{cx:"12",cy:"8",r:"4"}),r.jsx("path",{d:"M4 20c0-4 3.58-7 8-7s8 3 8 7"})]});case"lock":return r.jsxs("svg",{...n,children:[r.jsx("rect",{x:"5",y:"11",width:"14",height:"10",rx:"2"}),r.jsx("path",{d:"M8 11V7a4 4 0 1 1 8 0v4"})]});case"bell":return r.jsxs("svg",{...n,children:[r.jsx("path",{d:"M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"}),r.jsx("path",{d:"M13.73 21a2 2 0 0 1-3.46 0"})]});case"palette":return r.jsxs("svg",{...n,children:[r.jsx("circle",{cx:"12",cy:"12",r:"9"}),r.jsx("circle",{cx:"12",cy:"12",r:"2.5",fill:"currentColor",stroke:"none"}),r.jsx("path",{d:"M12 3v2.5M12 18.5V21M3 12h2.5M18.5 12H21"})]});case"database":return r.jsxs("svg",{...n,children:[r.jsx("ellipse",{cx:"12",cy:"6",rx:"8",ry:"3"}),r.jsx("path",{d:"M4 6v6c0 1.66 3.58 3 8 3s8-1.34 8-3V6"}),r.jsx("path",{d:"M4 12v6c0 1.66 3.58 3 8 3s8-1.34 8-3v-6"})]});case"logout":return r.jsxs("svg",{...n,children:[r.jsx("path",{d:"M9.5 12h11M17 8.5l3.5 3.5-3.5 3.5"}),r.jsx("path",{d:"M14 5H5a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h9"})]});case"check":return r.jsx("svg",{...n,children:r.jsx("path",{d:"M5 12.5l4.5 4.5L19 7"})});case"chevron":return r.jsx("svg",{...n,children:r.jsx("path",{d:"M9 6l6 6-6 6"})});default:return null}}function Ti({checked:e,onChange:t}){return r.jsx("button",{type:"button",role:"switch","aria-checked":e,onClick:()=>t(!e),style:{width:44,height:24,borderRadius:100,border:"none",cursor:"pointer",background:e?"#4f46e5":"#d1d5db",position:"relative",transition:"background 0.25s",flexShrink:0},children:r.jsx("span",{style:{position:"absolute",top:3,left:e?23:3,width:18,height:18,borderRadius:"50%",background:"#fff",transition:"left 0.25s",boxShadow:"0 1px 4px rgba(0,0,0,0.2)"}})})}const rg=[{key:"profile",icon:"user",label:"Profile"},{key:"security",icon:"lock",label:"Security"},{key:"notifs",icon:"bell",label:"Notifications"},{key:"appearance",icon:"palette",label:"Appearance"},{key:"data",icon:"database",label:"Data & Privacy"}];function ag(){const e=it(),{user:t,logout:n}=Un(),[a,i]=g.useState("profile"),[s,o]=g.useState(!1),l=g.useRef(null),[d,c]=g.useState(()=>localStorage.getItem("nexus-avatar")||null),h=T=>{var D;const E=(D=T.target.files)==null?void 0:D[0];if(!E)return;const _=new FileReader;_.onload=V=>{const K=V.target.result;c(K),localStorage.setItem("nexus-avatar",K)},_.readAsDataURL(E)},m=()=>{c(null),localStorage.removeItem("nexus-avatar")},[x,w]=g.useState((t==null?void 0:t.name)||"Matthew Johnson"),[N,y]=g.useState((t==null?void 0:t.email)||"user@example.com"),[j,f]=g.useState("Final year project — Multi-Industry RAG System"),[u,p]=g.useState(""),[v,S]=g.useState(""),[C,k]=g.useState(""),[M,U]=g.useState({uploadDone:!0,queryAlert:!1,weeklyDigest:!0,systemUpdates:!0}),{theme:L,setLight:R,setDark:O}=ym(),[ie,Ut]=g.useState(!1),Ue=()=>{o(!0),setTimeout(()=>o(!1),2500)},xt=()=>{n(),e("/login")};return r.jsxs("div",{className:"settings-page",children:[r.jsx("style",{children:`
.settings-page {
  --ink: #0c0f17; --navy: #0a1730; --paper: #f1f0fa;
  --paper-2: #e8e6f6; --panel: #ffffff;
  --indigo: #4f46e5; --indigo-2: #7c74ff;
  --amber: #f59e0b; --green: #22c55e; --coral: #ef4444;
  --slate: #5b6270; --slate-l: #9296a6;
  --line: rgba(12,15,23,0.1);
  font-family: "Inter", sans-serif;
  background: var(--paper); color: var(--ink);
  min-height: 100vh; -webkit-font-smoothing: antialiased;
}
.settings-page *, .settings-page *::before, .settings-page *::after { box-sizing: border-box; margin: 0; }
.settings-page h1, .settings-page h2, .settings-page h3 { font-family: "Space Grotesk", sans-serif; }
.settings-page a { color: inherit; text-decoration: none; }
.settings-page button { font-family: inherit; cursor: pointer; }
.settings-page input, .settings-page textarea { font-family: inherit; }

/* nav */
.settings-page nav {
  position: sticky; top: 0; z-index: 100;
  display: flex; align-items: center; justify-content: space-between;
  padding: 18px 40px; background: var(--navy);
  border-bottom: 1px solid rgba(255,255,255,0.08);
}
.settings-page .brand {
  display: flex; align-items: center; gap: 10px;
  font-weight: 700; font-size: 18px; color: #fff;
  font-family: "Space Grotesk", sans-serif;
}
.settings-page .brand-mark {
  width: 28px; height: 28px; border-radius: 8px;
  background: linear-gradient(135deg, var(--indigo), var(--indigo-2));
  display: flex; align-items: center; justify-content: center;
  font-size: 14px; font-weight: 700; color: #fff;
}
.settings-page .nav-right { display: flex; align-items: center; gap: 14px; }
.settings-page .nav-link { color: rgba(255,255,255,0.65); font-size: 14px; transition: color 0.2s; }
.settings-page .nav-link:hover { color: #fff; }

/* toast */
.settings-page .toast {
  position: fixed; bottom: 28px; left: 50%; transform: translateX(-50%);
  background: var(--ink); color: #fff; padding: 12px 22px;
  border-radius: 100px; font-size: 14px; font-weight: 600;
  display: flex; align-items: center; gap: 8px;
  box-shadow: 0 8px 24px -6px rgba(12,15,23,0.4);
  z-index: 999; animation: fade-in-up 0.3s ease;
}
@keyframes fade-in-up { from { opacity:0; transform: translateX(-50%) translateY(10px); } to { opacity:1; transform: translateX(-50%) translateY(0); } }

/* layout */
.settings-page .layout {
  display: grid; grid-template-columns: 240px 1fr;
  max-width: 1000px; margin: 48px auto; gap: 28px; padding: 0 28px 80px;
}
@media (max-width: 760px) {
  .settings-page .layout { grid-template-columns: 1fr; }
}

/* sidebar */
.settings-page .settings-nav {
  background: var(--panel); border: 1px solid var(--line);
  border-radius: 20px; padding: 18px 14px;
  height: fit-content; position: sticky; top: 100px;
}
.settings-page .settings-nav-label {
  font-family: "IBM Plex Mono", monospace;
  font-size: 10.5px; text-transform: uppercase; letter-spacing: 0.08em;
  color: var(--slate-l); padding: 0 10px; margin-bottom: 12px;
}
.settings-page .sn-item {
  display: flex; align-items: center; gap: 10px;
  width: 100%; text-align: left; border: none; background: none;
  padding: 10px 12px; border-radius: 12px; font-size: 14px;
  color: var(--slate); transition: all 0.2s; margin-bottom: 2px;
}
.settings-page .sn-item:hover { background: var(--paper-2); color: var(--ink); }
.settings-page .sn-item.active { background: #eef2ff; color: var(--indigo); font-weight: 600; }

.settings-page .sn-divider { height: 1px; background: var(--line); margin: 14px 0; }
.settings-page .logout-btn {
  display: flex; align-items: center; gap: 10px;
  width: 100%; text-align: left; border: none; background: none;
  padding: 10px 12px; border-radius: 12px; font-size: 14px;
  color: #dc2626; transition: background 0.2s;
}
.settings-page .logout-btn:hover { background: #fef2f2; }

/* content */
.settings-page .settings-content {
  background: var(--panel); border: 1px solid var(--line);
  border-radius: 20px; padding: 32px;
}
.settings-page .sec-title { font-size: 22px; font-weight: 700; margin-bottom: 6px; }
.settings-page .sec-desc { font-size: 14px; color: var(--slate); margin-bottom: 28px; line-height: 1.6; }

/* form fields */
.settings-page .field { margin-bottom: 22px; }
.settings-page .field label { display: block; font-size: 13.5px; font-weight: 600; margin-bottom: 7px; }
.settings-page .field input, .settings-page .field textarea {
  width: 100%; padding: 12px 16px; border-radius: 12px;
  border: 1.5px solid var(--line); background: var(--paper);
  font-size: 14.5px; color: var(--ink); outline: none;
  transition: border-color 0.25s, box-shadow 0.25s;
}
.settings-page .field input:focus, .settings-page .field textarea:focus {
  border-color: var(--indigo); box-shadow: 0 0 0 4px rgba(79,70,229,0.1);
}
.settings-page .field textarea { resize: vertical; min-height: 80px; }
.settings-page .field-hint { font-size: 12px; color: var(--slate-l); margin-top: 5px; }

.settings-page .two-col { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
@media (max-width: 600px) { .settings-page .two-col { grid-template-columns: 1fr; } }

/* avatar */
.settings-page .avatar-row {
  display: flex; align-items: center; gap: 18px; margin-bottom: 28px;
  padding-bottom: 28px; border-bottom: 1px solid var(--line);
}
.settings-page .avatar-wrap {
  position: relative; width: 80px; height: 80px; flex-shrink: 0; cursor: pointer;
}
.settings-page .avatar-circle {
  width: 80px; height: 80px; border-radius: 50%;
  background: linear-gradient(135deg, var(--indigo), var(--indigo-2));
  display: flex; align-items: center; justify-content: center;
  color: #fff; font-size: 28px; font-weight: 700;
  font-family: "Space Grotesk", sans-serif;
  overflow: hidden; border: 3px solid transparent;
  transition: border-color 0.2s;
}
.settings-page .avatar-wrap:hover .avatar-circle { border-color: var(--indigo); }
.settings-page .avatar-circle img { width: 100%; height: 100%; object-fit: cover; display: block; }
.settings-page .avatar-overlay {
  position: absolute; inset: 0; border-radius: 50%;
  background: rgba(12,15,23,0.55);
  display: flex; align-items: center; justify-content: center;
  opacity: 0; transition: opacity 0.2s;
  pointer-events: none;
}
.settings-page .avatar-wrap:hover .avatar-overlay { opacity: 1; }
.settings-page .avatar-overlay svg { color: #fff; }
.settings-page .avatar-file-input { display: none; }
.settings-page .avatar-info { flex: 1; }
.settings-page .avatar-info h3 { font-size: 17px; font-weight: 700; margin-bottom: 4px; }
.settings-page .avatar-info p { font-size: 13px; color: var(--slate); margin-bottom: 12px; }
.settings-page .avatar-actions { display: flex; gap: 10px; flex-wrap: wrap; }
.settings-page .avatar-btn {
  padding: 8px 16px; border-radius: 100px;
  border: 1.5px solid var(--line); background: var(--paper-2);
  font-size: 13px; font-weight: 600; transition: all 0.2s; cursor: pointer;
}
.settings-page .avatar-btn:hover { background: var(--paper); border-color: var(--indigo); color: var(--indigo); }
.settings-page .avatar-btn.danger { border-color: #fca5a5; color: #dc2626; }
.settings-page .avatar-btn.danger:hover { background: #fef2f2; border-color: #dc2626; }

/* toggle rows */
.settings-page .toggle-row {
  display: flex; align-items: center; justify-content: space-between;
  padding: 14px 0; border-bottom: 1px solid var(--line);
}
.settings-page .toggle-row:last-child { border-bottom: none; }
.settings-page .toggle-meta .tl { font-size: 14px; font-weight: 600; margin-bottom: 3px; }
.settings-page .toggle-meta .ts { font-size: 12.5px; color: var(--slate); }

/* theme cards */
.settings-page .theme-cards { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; margin-bottom: 24px; }
.settings-page .theme-card {
  border: 2px solid var(--line); border-radius: 14px;
  padding: 18px; cursor: pointer; transition: all 0.2s; text-align: center;
}
.settings-page .theme-card.selected { border-color: var(--indigo); background: #eef2ff; }
.settings-page .theme-preview {
  width: 100%; height: 52px; border-radius: 9px; margin-bottom: 10px;
}
.settings-page .theme-preview.light { background: linear-gradient(135deg, #f1f0fa, #fff); border: 1px solid var(--line); }
.settings-page .theme-preview.dark  { background: linear-gradient(135deg, #0a1730, #1e2740); }
.settings-page .theme-label { font-size: 13.5px; font-weight: 700; }

/* save btn */
.settings-page .save-btn {
  padding: 12px 28px; border-radius: 100px;
  background: var(--ink); color: #fff; border: none;
  font-size: 14px; font-weight: 700; transition: background 0.2s;
  margin-top: 8px;
}
.settings-page .save-btn:hover { background: var(--indigo); }
`}),s&&r.jsxs("div",{className:"toast",children:[r.jsx(Ii,{name:"check",size:16})," Changes saved successfully"]}),r.jsxs("nav",{children:[r.jsxs(I,{to:"/",className:"brand",children:[r.jsx("span",{className:"brand-mark",children:"N"})," NexusRAG"]}),r.jsxs("div",{className:"nav-right",children:[r.jsx(I,{to:"/dashboard",className:"nav-link",children:"← Dashboard"}),r.jsx(I,{to:"/chat",className:"nav-link",children:"Chat"})]})]}),r.jsxs("div",{className:"layout",children:[r.jsxs("div",{className:"settings-nav",children:[r.jsx("div",{className:"settings-nav-label",children:"Settings"}),rg.map(T=>r.jsxs("button",{className:`sn-item${a===T.key?" active":""}`,onClick:()=>i(T.key),children:[r.jsx(Ii,{name:T.icon,size:16})," ",T.label]},T.key)),r.jsx("div",{className:"sn-divider"}),r.jsxs("button",{className:"logout-btn",onClick:xt,children:[r.jsx(Ii,{name:"logout",size:16})," Sign Out"]})]}),r.jsxs("div",{className:"settings-content",children:[a==="profile"&&r.jsxs(r.Fragment,{children:[r.jsx("h2",{className:"sec-title",children:"Profile"}),r.jsx("p",{className:"sec-desc",children:"Manage your personal information and how others see you."}),r.jsxs("div",{className:"avatar-row",children:[r.jsx("input",{ref:l,type:"file",accept:"image/*",className:"avatar-file-input",onChange:h}),r.jsxs("div",{className:"avatar-wrap",onClick:()=>{var T;return(T=l.current)==null?void 0:T.click()},title:"Click to change photo",children:[r.jsx("div",{className:"avatar-circle",children:d?r.jsx("img",{src:d,alt:"Profile"}):x.charAt(0).toUpperCase()}),r.jsx("div",{className:"avatar-overlay",children:r.jsxs("svg",{width:"22",height:"22",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[r.jsx("path",{d:"M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"}),r.jsx("circle",{cx:"12",cy:"13",r:"4"})]})})]}),r.jsxs("div",{className:"avatar-info",children:[r.jsx("h3",{children:x}),r.jsx("p",{children:N}),r.jsxs("div",{className:"avatar-actions",children:[r.jsx("button",{className:"avatar-btn",onClick:()=>{var T;return(T=l.current)==null?void 0:T.click()},children:"📷 Upload Photo"}),d&&r.jsx("button",{className:"avatar-btn danger",onClick:m,children:"Remove"})]})]})]}),r.jsxs("div",{className:"two-col",children:[r.jsxs("div",{className:"field",children:[r.jsx("label",{children:"Full Name"}),r.jsx("input",{value:x,onChange:T=>w(T.target.value)})]}),r.jsxs("div",{className:"field",children:[r.jsx("label",{children:"Email Address"}),r.jsx("input",{type:"email",value:N,onChange:T=>y(T.target.value)})]})]}),r.jsxs("div",{className:"field",children:[r.jsx("label",{children:"Bio"}),r.jsx("textarea",{value:j,onChange:T=>f(T.target.value),rows:3}),r.jsx("div",{className:"field-hint",children:"Brief description shown on your profile."})]}),r.jsx("button",{className:"save-btn",onClick:Ue,children:"Save Profile"})]}),a==="security"&&r.jsxs(r.Fragment,{children:[r.jsx("h2",{className:"sec-title",children:"Security"}),r.jsx("p",{className:"sec-desc",children:"Update your password to keep your account safe."}),r.jsxs("div",{className:"field",children:[r.jsx("label",{children:"Current Password"}),r.jsx("input",{type:"password",placeholder:"Enter current password",value:u,onChange:T=>p(T.target.value)})]}),r.jsxs("div",{className:"two-col",children:[r.jsxs("div",{className:"field",children:[r.jsx("label",{children:"New Password"}),r.jsx("input",{type:"password",placeholder:"Min 8 characters",value:v,onChange:T=>S(T.target.value)})]}),r.jsxs("div",{className:"field",children:[r.jsx("label",{children:"Confirm Password"}),r.jsx("input",{type:"password",placeholder:"Repeat new password",value:C,onChange:T=>k(T.target.value)})]})]}),r.jsx("button",{className:"save-btn",onClick:Ue,children:"Update Password"})]}),a==="notifs"&&r.jsxs(r.Fragment,{children:[r.jsx("h2",{className:"sec-title",children:"Notifications"}),r.jsx("p",{className:"sec-desc",children:"Choose which events send you alerts."}),[{key:"uploadDone",label:"Upload complete",desc:"When document indexing finishes"},{key:"queryAlert",label:"Query alerts",desc:"Unusual query patterns detected"},{key:"weeklyDigest",label:"Weekly digest",desc:"Summary of usage every Monday"},{key:"systemUpdates",label:"System updates",desc:"Pipeline config or model changes"}].map(T=>r.jsxs("div",{className:"toggle-row",children:[r.jsxs("div",{className:"toggle-meta",children:[r.jsx("div",{className:"tl",children:T.label}),r.jsx("div",{className:"ts",children:T.desc})]}),r.jsx(Ti,{checked:M[T.key],onChange:E=>U(_=>({..._,[T.key]:E}))})]},T.key)),r.jsx("button",{className:"save-btn",style:{marginTop:24},onClick:Ue,children:"Save Preferences"})]}),a==="appearance"&&r.jsxs(r.Fragment,{children:[r.jsx("h2",{className:"sec-title",children:"Appearance"}),r.jsx("p",{className:"sec-desc",children:"Customise how NexusRAG looks for you. Changes apply to the whole website instantly."}),r.jsx("div",{style:{marginBottom:16,fontSize:13.5,fontWeight:600},children:"Theme"}),r.jsx("div",{className:"theme-cards",children:["light","dark"].map(T=>r.jsxs("div",{className:`theme-card${L===T?" selected":""}`,onClick:()=>T==="dark"?O():R(),role:"button",tabIndex:0,onKeyDown:E=>E.key==="Enter"&&(T==="dark"?O():R()),children:[r.jsx("div",{className:`theme-preview ${T}`}),r.jsx("div",{className:"theme-label",children:T==="light"?"☀️ Light":"🌙 Dark"}),L===T&&r.jsx("div",{style:{fontSize:11,color:"var(--indigo)",fontWeight:700,marginTop:4},children:"Active"})]},T))}),r.jsxs("div",{className:"toggle-row",children:[r.jsxs("div",{className:"toggle-meta",children:[r.jsx("div",{className:"tl",children:"Compact mode"}),r.jsx("div",{className:"ts",children:"Reduce spacing for denser layout"})]}),r.jsx(Ti,{checked:ie,onChange:Ut})]}),r.jsx("button",{className:"save-btn",onClick:Ue,children:"Save Appearance"})]}),a==="data"&&r.jsxs(r.Fragment,{children:[r.jsx("h2",{className:"sec-title",children:"Data & Privacy"}),r.jsx("p",{className:"sec-desc",children:"Manage your chat history and data preferences."}),[{label:"Save chat history",desc:"Retain conversation history across sessions"},{label:"Share analytics",desc:"Help improve NexusRAG with anonymous usage data"}].map(T=>r.jsxs("div",{className:"toggle-row",children:[r.jsxs("div",{className:"toggle-meta",children:[r.jsx("div",{className:"tl",children:T.label}),r.jsx("div",{className:"ts",children:T.desc})]}),r.jsx(Ti,{checked:!0,onChange:()=>{}})]},T.label)),r.jsxs("div",{style:{marginTop:28,padding:20,background:"#fef2f2",borderRadius:14,border:"1px solid #fecaca"},children:[r.jsx("div",{style:{fontWeight:700,color:"#dc2626",marginBottom:6,fontSize:14},children:"Danger Zone"}),r.jsx("p",{style:{fontSize:13.5,color:"#7f1d1d",marginBottom:14},children:"Deleting your account is permanent and cannot be undone."}),r.jsx("button",{style:{padding:"9px 18px",borderRadius:100,border:"1.5px solid #fca5a5",background:"transparent",color:"#dc2626",fontWeight:700,fontSize:13},children:"Delete Account"})]})]})]})]})]})}const ig=[{q:"What industries does NexusRAG support?",a:"NexusRAG currently supports Healthcare (PubMedQA), Banking & Finance (FinQA / TAT-QA), and Traffic & Transport (custom dataset). You can add new industry collections via the admin upload wizard."},{q:"How does the RAG pipeline work?",a:"Your question is first transformed using HyPE (Hypothetical Passage Embeddings) retrieval. Relevant chunks are fetched from the HNSW vector index using cosine similarity, then re-ranked by MiniLM cross-encoder. The top results are passed to the LLM to generate a grounded answer."},{q:"Why do answers show cited sources?",a:"Every answer is grounded in retrieved documents. The citations (title, page reference, relevance %) let you verify the source of each fact — a core requirement for trustworthy RAG systems in high-stakes domains like healthcare and finance."},{q:"How do I upload new documents?",a:"Ask your administrator. Admins log in via /admin-login, then use the Upload page to select an industry, drag-and-drop files, and trigger indexing. Only administrators can modify the knowledge base."},{q:"What file types are supported?",a:"PDF, DOCX, TXT, JSON, and CSV are all supported. Files are semantically chunked before embedding. Maximum file size is 50 MB per file."},{q:"Can I use NexusRAG for my own industry?",a:"Yes. The admin can create a new collection by selecting 'Add New Sector' in the upload wizard and uploading relevant documents. The same HyPE + MiniLM pipeline applies to any domain."}],sg=[{icon:"🚀",title:"Getting Started",desc:"How to sign up, pick an industry, and ask your first RAG question."},{icon:"💬",title:"Using the Chat Interface",desc:"Industry selector, cited sources, suggestion chips, and chat history."},{icon:"📁",title:"Understanding Collections",desc:"What a collection is, how documents are chunked and indexed."},{icon:"🔍",title:"How Retrieval Works",desc:"HyPE, cosine similarity, HNSW index, BM25 hybrid search explained."},{icon:"⚙️",title:"Admin Guide",desc:"Uploading documents, managing collections, and pipeline settings."},{icon:"🔒",title:"Security & Privacy",desc:"Role separation, admin-only access, and data retention policies."}];function Ai({name:e,size:t=18}){const n={width:t,height:t,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:1.8,strokeLinecap:"round",strokeLinejoin:"round"};switch(e){case"chevron":return r.jsx("svg",{...n,children:r.jsx("path",{d:"M9 6l6 6-6 6"})});case"search":return r.jsxs("svg",{...n,children:[r.jsx("circle",{cx:"11",cy:"11",r:"7"}),r.jsx("path",{d:"M20 20l-4.35-4.35"})]});case"mail":return r.jsxs("svg",{...n,children:[r.jsx("rect",{x:"3",y:"5",width:"18",height:"14",rx:"2"}),r.jsx("path",{d:"M3 7l9 6 9-6"})]});case"chat":return r.jsx("svg",{...n,children:r.jsx("path",{d:"M4 5.5A2.5 2.5 0 0 1 6.5 3h11A2.5 2.5 0 0 1 20 5.5v8A2.5 2.5 0 0 1 17.5 16H10l-4.5 4v-4H6.5A2.5 2.5 0 0 1 4 13.5z"})});case"send":return r.jsxs("svg",{...n,children:[r.jsx("path",{d:"M22 2L11 13"}),r.jsx("path",{d:"M22 2 15 22 11 13 2 9l20-7z"})]});default:return null}}function og(){const[e,t]=g.useState(null),[n,a]=g.useState(""),[i,s]=g.useState(""),[o,l]=g.useState(!1),d=c=>{c.preventDefault(),!(!n.trim()||!i.trim())&&(l(!0),a(""),s(""),setTimeout(()=>l(!1),4e3))};return r.jsxs("div",{className:"help-page",children:[r.jsx("style",{children:`
.help-page {
  --ink: #0c0f17; --navy: #0a1730; --paper: #f1f0fa;
  --paper-2: #e8e6f6; --panel: #ffffff;
  --indigo: #4f46e5; --indigo-2: #7c74ff;
  --amber: #f59e0b; --green: #22c55e;
  --slate: #5b6270; --slate-l: #9296a6;
  --line: rgba(12,15,23,0.1);
  font-family: "Inter", sans-serif;
  background: var(--paper); color: var(--ink);
  min-height: 100vh; -webkit-font-smoothing: antialiased;
}
.help-page *, .help-page *::before, .help-page *::after { box-sizing: border-box; margin: 0; }
.help-page h1, .help-page h2, .help-page h3 { font-family: "Space Grotesk", sans-serif; }
.help-page a { color: inherit; text-decoration: none; }
.help-page button { font-family: inherit; cursor: pointer; }
.help-page textarea, .help-page input { font-family: inherit; }

/* nav */
.help-page nav {
  position: sticky; top: 0; z-index: 100;
  display: flex; align-items: center; justify-content: space-between;
  padding: 18px 40px; background: var(--navy);
  border-bottom: 1px solid rgba(255,255,255,0.08);
}
.help-page .brand {
  display: flex; align-items: center; gap: 10px;
  font-weight: 700; font-size: 18px; color: #fff;
  font-family: "Space Grotesk", sans-serif;
}
.help-page .brand-mark {
  width: 28px; height: 28px; border-radius: 8px;
  background: linear-gradient(135deg, var(--indigo), var(--indigo-2));
  display: flex; align-items: center; justify-content: center;
  font-size: 14px; font-weight: 700; color: #fff;
}
.help-page .nav-right { display: flex; align-items: center; gap: 14px; }
.help-page .nav-link { color: rgba(255,255,255,0.65); font-size: 14px; transition: color 0.2s; }
.help-page .nav-link:hover { color: #fff; }

/* hero */
.help-page .help-hero {
  background: linear-gradient(135deg, var(--navy) 0%, #1e2d5a 100%);
  padding: 60px 24px 80px; text-align: center; color: #fff;
}
.help-page .help-hero h1 { font-size: clamp(26px, 4vw, 40px); font-weight: 700; margin-bottom: 12px; }
.help-page .help-hero p { font-size: 15.5px; color: rgba(255,255,255,0.6); margin-bottom: 30px; }
.help-page .hero-search {
  display: flex; align-items: center; gap: 12px;
  background: #fff; border-radius: 16px; padding: 13px 18px;
  max-width: 520px; margin: 0 auto;
  box-shadow: 0 12px 40px -10px rgba(0,0,0,0.3);
}
.help-page .hero-search input {
  flex: 1; border: none; outline: none; font-size: 15px; color: var(--ink); background: transparent;
}
.help-page .hero-search input::placeholder { color: var(--slate-l); }

/* page */
.help-page .page-wrap { max-width: 960px; margin: 0 auto; padding: 52px 28px 100px; }

/* articles */
.help-page .articles-grid {
  display: grid; grid-template-columns: repeat(3, 1fr);
  gap: 16px; margin-bottom: 52px;
}
@media (max-width: 760px) { .help-page .articles-grid { grid-template-columns: 1fr 1fr; } }
@media (max-width: 480px) { .help-page .articles-grid { grid-template-columns: 1fr; } }
.help-page .article-card {
  background: var(--panel); border: 1px solid var(--line);
  border-radius: 18px; padding: 22px;
  cursor: pointer; transition: all 0.2s;
  text-align: left; width: 100%;
}
.help-page .article-card:hover { box-shadow: 0 6px 20px -8px rgba(12,15,23,0.15); border-color: rgba(79,70,229,0.2); transform: translateY(-2px); }
.help-page .article-icon { font-size: 28px; margin-bottom: 14px; }
.help-page .article-title { font-size: 15px; font-weight: 700; margin-bottom: 7px; font-family: "Space Grotesk", sans-serif; }
.help-page .article-desc { font-size: 13px; color: var(--slate); line-height: 1.55; }

/* faq */
.help-page .faq-section { margin-bottom: 52px; }
.help-page .section-head { margin-bottom: 24px; }
.help-page .section-head h2 { font-size: 24px; font-weight: 700; margin-bottom: 6px; }
.help-page .section-head p { font-size: 14.5px; color: var(--slate); }
.help-page .faq-list { display: flex; flex-direction: column; gap: 10px; }
.help-page .faq-item {
  background: var(--panel); border: 1px solid var(--line);
  border-radius: 16px; overflow: hidden; transition: border-color 0.2s;
}
.help-page .faq-item.open { border-color: rgba(79,70,229,0.25); }
.help-page .faq-q {
  display: flex; align-items: center; justify-content: space-between;
  padding: 18px 22px; cursor: pointer; border: none; background: none;
  width: 100%; text-align: left; font-size: 15px; font-weight: 600;
  color: var(--ink); font-family: inherit; gap: 12px;
  transition: background 0.2s;
}
.help-page .faq-q:hover { background: var(--paper); }
.help-page .faq-chev { color: var(--slate-l); flex-shrink: 0; transition: transform 0.25s; }
.help-page .faq-item.open .faq-chev { transform: rotate(90deg); color: var(--indigo); }
.help-page .faq-a {
  padding: 0 22px 18px; font-size: 14.5px;
  color: var(--slate); line-height: 1.65;
}

/* contact form */
.help-page .contact-section {
  background: var(--panel); border: 1px solid var(--line);
  border-radius: 22px; padding: 36px;
}
.help-page .contact-section h2 { font-size: 24px; font-weight: 700; margin-bottom: 6px; }
.help-page .contact-section > p { font-size: 14.5px; color: var(--slate); margin-bottom: 28px; }
.help-page .field { margin-bottom: 18px; }
.help-page .field label { display: block; font-size: 13.5px; font-weight: 600; margin-bottom: 7px; }
.help-page .field input, .help-page .field textarea {
  width: 100%; padding: 12px 16px; border-radius: 12px;
  border: 1.5px solid var(--line); background: var(--paper);
  font-size: 14.5px; color: var(--ink); outline: none;
  transition: border-color 0.25s, box-shadow 0.25s;
}
.help-page .field input:focus, .help-page .field textarea:focus {
  border-color: var(--indigo); box-shadow: 0 0 0 4px rgba(79,70,229,0.1);
}
.help-page .field textarea { resize: vertical; min-height: 100px; }
.help-page .send-btn {
  display: inline-flex; align-items: center; gap: 8px;
  padding: 12px 26px; border-radius: 100px;
  background: var(--ink); color: #fff; border: none;
  font-size: 14px; font-weight: 700; transition: background 0.2s;
}
.help-page .send-btn:hover { background: var(--indigo); }
.help-page .success-msg {
  background: #f0fdf4; border: 1px solid #86efac;
  border-radius: 12px; padding: 14px 18px;
  font-size: 14px; color: #15803d; font-weight: 600;
  margin-bottom: 18px; display: flex; align-items: center; gap: 8px;
}
`}),r.jsxs("nav",{children:[r.jsxs(I,{to:"/",className:"brand",children:[r.jsx("span",{className:"brand-mark",children:"N"})," NexusRAG"]}),r.jsxs("div",{className:"nav-right",children:[r.jsx(I,{to:"/dashboard",className:"nav-link",children:"← Dashboard"}),r.jsx(I,{to:"/chat",className:"nav-link",children:"Chat"})]})]}),r.jsxs("div",{className:"help-hero",children:[r.jsx("h1",{children:"Help & Support"}),r.jsx("p",{children:"Find answers, guides, and contact us if you need more."}),r.jsxs("div",{className:"hero-search",children:[r.jsx(Ai,{name:"search",size:18}),r.jsx("input",{placeholder:"Search documentation…"})]})]}),r.jsxs("div",{className:"page-wrap",children:[r.jsxs("div",{className:"section-head",children:[r.jsx("h2",{children:"Popular Articles"}),r.jsx("p",{children:"Get up to speed quickly with these guides."})]}),r.jsx("div",{className:"articles-grid",children:sg.map(c=>r.jsxs("button",{className:"article-card",children:[r.jsx("div",{className:"article-icon",children:c.icon}),r.jsx("div",{className:"article-title",children:c.title}),r.jsx("div",{className:"article-desc",children:c.desc})]},c.title))}),r.jsxs("div",{className:"faq-section",children:[r.jsxs("div",{className:"section-head",children:[r.jsx("h2",{children:"Frequently Asked Questions"}),r.jsx("p",{children:"Common questions about NexusRAG answered."})]}),r.jsx("div",{className:"faq-list",children:ig.map((c,h)=>r.jsxs("div",{className:`faq-item${e===h?" open":""}`,children:[r.jsxs("button",{className:"faq-q",onClick:()=>t(e===h?null:h),children:[c.q,r.jsx("span",{className:"faq-chev",children:r.jsx(Ai,{name:"chevron",size:18})})]}),e===h&&r.jsx("div",{className:"faq-a",children:c.a})]},h))})]}),r.jsxs("div",{className:"contact-section",children:[r.jsx("h2",{children:"Contact Support"}),r.jsx("p",{children:"Didn't find your answer? Send us a message and we'll get back to you."}),o&&r.jsx("div",{className:"success-msg",children:"✅ Message sent! We'll respond within 24 hours."}),r.jsxs("form",{onSubmit:d,noValidate:!0,children:[r.jsxs("div",{className:"field",children:[r.jsx("label",{children:"Subject"}),r.jsx("input",{placeholder:"e.g. Issue with Healthcare collection",value:n,onChange:c=>a(c.target.value),required:!0})]}),r.jsxs("div",{className:"field",children:[r.jsx("label",{children:"Message"}),r.jsx("textarea",{placeholder:"Describe your issue or question…",rows:4,value:i,onChange:c=>s(c.target.value),required:!0})]}),r.jsxs("button",{type:"submit",className:"send-btn",children:[r.jsx(Ai,{name:"send",size:15})," Send Message"]})]})]})]})]})}const ld=[{key:"healthcare",emoji:"🏥",label:"Healthcare",docs:1842,chunks:38410,lastUpdated:"2 hours ago",status:"active",color:"#22c55e",bg:"#dcfce7",queries:4820,embeddingModel:"all-MiniLM-L6-v2"},{key:"finance",emoji:"💰",label:"Banking & Finance",docs:973,chunks:21560,lastUpdated:"1 day ago",status:"active",color:"#3b82f6",bg:"#dbeafe",queries:3310,embeddingModel:"all-MiniLM-L6-v2"},{key:"traffic",emoji:"🚦",label:"Traffic & Transport",docs:312,chunks:6890,lastUpdated:"3 days ago",status:"active",color:"#f59e0b",bg:"#fef3c7",queries:1204,embeddingModel:"all-MiniLM-L6-v2"},{key:"legal",emoji:"⚖️",label:"Legal Services",docs:0,chunks:0,lastUpdated:"Never",status:"empty",color:"#8b5cf6",bg:"#ede9fe",queries:0,embeddingModel:"—"}],lg=[{name:"pubmed_qa_train.json",size:"14.2 MB",industry:"Healthcare",time:"2h ago",status:"done"},{name:"finqa_corpus_v2.pdf",size:"8.7 MB",industry:"Finance",time:"1d ago",status:"done"},{name:"traffic_rules_2024.pdf",size:"3.1 MB",industry:"Traffic",time:"3d ago",status:"done"},{name:"tat_qa_dataset.csv",size:"22.5 MB",industry:"Finance",time:"4d ago",status:"done"}],dg=[{label:"Retrieval Strategy",value:"HyPE (Hypothetical Passage Embeddings)",accent:"#4f46e5"},{label:"Similarity Metric",value:"Cosine + Inner Product",accent:"#22c55e"},{label:"Reranker",value:"MiniLM (cross-encoder)",accent:"#f59e0b"},{label:"Index Type",value:"HNSW (Hierarchical NSW)",accent:"#3b82f6"},{label:"Chunking",value:"Semantic (topic-based)",accent:"#8b5cf6"},{label:"Hybrid Search",value:"Dense + BM25 keyword",accent:"#ec4899"}];function ee({name:e,size:t=18}){const n={width:t,height:t,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:1.8,strokeLinecap:"round",strokeLinejoin:"round"};switch(e){case"upload":return r.jsxs("svg",{...n,children:[r.jsx("path",{d:"M12 15V4M8 8l4-4 4 4"}),r.jsx("path",{d:"M5 14v4.5A1.5 1.5 0 0 0 6.5 20h11a1.5 1.5 0 0 0 1.5-1.5V14"})]});case"file":return r.jsxs("svg",{...n,children:[r.jsx("path",{d:"M7 3.5h7l4 4V20a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5z"}),r.jsx("path",{d:"M14 3.5V8h4.5"})]});case"check":return r.jsx("svg",{...n,children:r.jsx("path",{d:"M5 12.5l4.5 4.5L19 7"})});case"plus":return r.jsx("svg",{...n,children:r.jsx("path",{d:"M12 5v14M5 12h14"})});case"settings":return r.jsxs("svg",{...n,children:[r.jsx("circle",{cx:"12",cy:"12",r:"3.2"}),r.jsx("path",{d:"M12 3v2.2M12 18.8V21M21 12h-2.2M5.2 12H3M18.1 5.9l-1.55 1.55M7.45 16.55 5.9 18.1M18.1 18.1l-1.55-1.55M7.45 7.45 5.9 5.9"})]});case"database":return r.jsxs("svg",{...n,children:[r.jsx("ellipse",{cx:"12",cy:"6",rx:"8",ry:"3"}),r.jsx("path",{d:"M4 6v6c0 1.66 3.58 3 8 3s8-1.34 8-3V6"}),r.jsx("path",{d:"M4 12v6c0 1.66 3.58 3 8 3s8-1.34 8-3v-6"})]});case"chart":return r.jsx("svg",{...n,children:r.jsx("path",{d:"M3 20h18M7 16V10M11 16V4M15 16V8M19 16v-4"})});case"logout":return r.jsxs("svg",{...n,children:[r.jsx("path",{d:"M9.5 12h11M17 8.5l3.5 3.5-3.5 3.5"}),r.jsx("path",{d:"M14 5H5a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h9"})]});case"users":return r.jsxs("svg",{...n,children:[r.jsx("circle",{cx:"9",cy:"8",r:"3.5"}),r.jsx("path",{d:"M3 20c0-3.87 2.69-7 6-7h.5"}),r.jsx("circle",{cx:"16",cy:"10",r:"2.5"}),r.jsx("path",{d:"M12.5 20c0-2.76 1.57-5 3.5-5s3.5 2.24 3.5 5"})]});case"trash":return r.jsx("svg",{...n,children:r.jsx("path",{d:"M5.5 7h13M9.5 7V5a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v2M7 7l.8 12a1.5 1.5 0 0 0 1.5 1.4h5.4a1.5 1.5 0 0 0 1.5-1.4L17 7"})});case"chevron":return r.jsx("svg",{...n,children:r.jsx("path",{d:"M9 6l6 6-6 6"})});default:return null}}function na({icon:e,label:t,value:n,sub:a,accent:i}){return r.jsxs("div",{className:"stat-card",style:{"--accent":i},children:[r.jsx("div",{className:"stat-icon",children:e}),r.jsx("div",{className:"stat-val",children:n}),r.jsx("div",{className:"stat-label",children:t}),a&&r.jsx("div",{className:"stat-sub",children:a})]})}function cg(){const[e,t]=g.useState(!1),[n,a]=g.useState("overview");return g.useEffect(()=>{const i=setTimeout(()=>t(!0),60);return()=>clearTimeout(i)},[]),r.jsxs("div",{className:`rag-admin${e?" mounted":""}`,children:[r.jsx("style",{children:`
/* ===== Admin Dashboard ===== */
.rag-admin {
  --ink: #0c0f17;
  --navy: #0a1730;
  --paper: #f1f0fa;
  --paper-2: #e8e6f6;
  --panel: #ffffff;
  --indigo: #4f46e5;
  --indigo-2: #7c74ff;
  --amber: #ffb020;
  --coral: #ff6452;
  --green: #22c55e;
  --slate: #5b6270;
  --slate-l: #9296a6;
  --line: rgba(12, 15, 23, 0.1);
  --radius: 22px;

  font-family: "Inter", sans-serif;
  background: var(--paper);
  color: var(--ink);
  min-height: 100vh;
  -webkit-font-smoothing: antialiased;
}
.rag-admin *, .rag-admin *::before, .rag-admin *::after { box-sizing: border-box; }
.rag-admin h1, .rag-admin h2, .rag-admin h3 { font-family: "Space Grotesk", sans-serif; margin: 0; }
.rag-admin a { color: inherit; text-decoration: none; }
.rag-admin button { font-family: inherit; cursor: pointer; }

/* ===== shell ===== */
.rag-admin .shell {
  display: grid;
  grid-template-columns: 260px 1fr;
  min-height: 100vh;
}
@media (max-width: 900px) {
  .rag-admin .shell { grid-template-columns: 1fr; }
  .rag-admin .sidebar { display: none; }
}

/* ===== sidebar ===== */
.rag-admin .sidebar {
  background: var(--navy);
  color: #fff;
  padding: 28px 20px;
  display: flex;
  flex-direction: column;
  position: sticky;
  top: 0;
  height: 100vh;
  overflow-y: auto;
}
.rag-admin .sb-brand {
  display: flex; align-items: center; gap: 10px;
  font-weight: 700; font-size: 18px;
  font-family: "Space Grotesk", sans-serif;
  margin-bottom: 36px; padding-bottom: 28px;
  border-bottom: 1px solid rgba(255,255,255,0.1);
}
.rag-admin .sb-brand-mark {
  width: 34px; height: 34px; border-radius: 10px;
  background: linear-gradient(135deg, var(--indigo), var(--indigo-2));
  display: flex; align-items: center; justify-content: center;
  font-size: 16px; font-weight: 700;
}
.rag-admin .sb-section { margin-bottom: 28px; }
.rag-admin .sb-label {
  font-family: "IBM Plex Mono", monospace;
  font-size: 10.5px; text-transform: uppercase; letter-spacing: 0.1em;
  color: rgba(255,255,255,0.35); margin-bottom: 10px; padding: 0 8px;
}
.rag-admin .sb-item {
  display: flex; align-items: center; gap: 11px;
  padding: 10px 12px; border-radius: 11px;
  font-size: 14px; color: rgba(255,255,255,0.65);
  cursor: pointer; transition: all 0.2s;
  background: none; border: none; width: 100%; text-align: left;
  margin-bottom: 2px;
}
.rag-admin .sb-item:hover { background: rgba(255,255,255,0.08); color: #fff; }
.rag-admin .sb-item.active { background: rgba(79,70,229,0.35); color: #fff; }
.rag-admin .sb-spacer { flex: 1; }
.rag-admin .sb-user {
  display: flex; align-items: center; gap: 10px;
  padding: 12px; border-radius: 14px;
  background: rgba(255,255,255,0.06);
  border: 1px solid rgba(255,255,255,0.1);
}
.rag-admin .sb-avatar {
  width: 36px; height: 36px; border-radius: 50%;
  background: linear-gradient(135deg, var(--indigo), #b8a6ff);
  flex-shrink: 0;
}
.rag-admin .sb-name { font-size: 13.5px; font-weight: 600; }
.rag-admin .sb-role { font-size: 11.5px; color: rgba(255,255,255,0.45); }

/* ===== main ===== */
.rag-admin .main {
  min-width: 0;
  opacity: 0;
  transform: translateX(12px);
  transition: opacity 0.7s ease, transform 0.7s ease;
}
.rag-admin.mounted .main { opacity: 1; transform: none; }

/* ===== topbar ===== */
.rag-admin .topbar {
  display: flex; align-items: center; justify-content: space-between;
  padding: 22px 36px;
  border-bottom: 1px solid var(--line);
  background: var(--panel);
  position: sticky; top: 0; z-index: 10;
}
.rag-admin .topbar h1 { font-size: 22px; font-weight: 700; }
.rag-admin .topbar-right { display: flex; gap: 12px; align-items: center; }
.rag-admin .topbar-badge {
  font-family: "IBM Plex Mono", monospace;
  font-size: 11px; padding: 4px 10px; border-radius: 100px;
  background: #dcfce7; color: #15803d; font-weight: 600;
}
.rag-admin .topbar-btn {
  display: inline-flex; align-items: center; gap: 7px;
  padding: 9px 18px; border-radius: 100px;
  background: var(--ink); color: #fff;
  border: none; font-size: 13.5px; font-weight: 600;
  transition: background 0.2s;
}
.rag-admin .topbar-btn:hover { background: var(--indigo); }

/* ===== tabs ===== */
.rag-admin .tabs {
  display: flex; gap: 0;
  border-bottom: 1px solid var(--line);
  padding: 0 36px;
  background: var(--panel);
}
.rag-admin .tab-btn {
  padding: 14px 20px; border: none; background: none;
  font-size: 14px; font-weight: 500; color: var(--slate);
  cursor: pointer; border-bottom: 2px solid transparent;
  transition: color 0.2s, border-color 0.2s;
  margin-bottom: -1px;
}
.rag-admin .tab-btn:hover { color: var(--ink); }
.rag-admin .tab-btn.active {
  color: var(--indigo); border-bottom-color: var(--indigo); font-weight: 600;
}

/* ===== content ===== */
.rag-admin .content { padding: 36px; }

/* ===== stat cards ===== */
.rag-admin .stats-row {
  display: grid; grid-template-columns: repeat(4, 1fr);
  gap: 18px; margin-bottom: 36px;
}
@media (max-width: 1100px) {
  .rag-admin .stats-row { grid-template-columns: repeat(2, 1fr); }
}
@media (max-width: 600px) {
  .rag-admin .stats-row { grid-template-columns: 1fr; }
}
.rag-admin .stat-card {
  background: var(--panel);
  border: 1px solid var(--line);
  border-radius: 18px;
  padding: 24px;
  transition: transform 0.25s, box-shadow 0.25s;
}
.rag-admin .stat-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 30px -10px rgba(12,15,23,0.18);
}
.rag-admin .stat-icon {
  width: 42px; height: 42px; border-radius: 12px;
  background: color-mix(in srgb, var(--accent, var(--indigo)) 12%, white);
  display: flex; align-items: center; justify-content: center;
  color: var(--accent, var(--indigo));
  margin-bottom: 16px;
}
.rag-admin .stat-val {
  font-size: 32px; font-weight: 700;
  font-family: "Space Grotesk", sans-serif;
  letter-spacing: -0.02em; line-height: 1;
  margin-bottom: 6px;
}
.rag-admin .stat-label { font-size: 13.5px; font-weight: 600; margin-bottom: 4px; }
.rag-admin .stat-sub { font-size: 12px; color: var(--slate-l); }

/* ===== section headers ===== */
.rag-admin .sec-head {
  display: flex; align-items: center; justify-content: space-between;
  margin-bottom: 20px;
}
.rag-admin .sec-head h2 { font-size: 18px; font-weight: 700; }
.rag-admin .sec-link {
  font-size: 13.5px; color: var(--indigo); font-weight: 500;
  display: flex; align-items: center; gap: 4px;
}
.rag-admin .sec-link:hover { text-decoration: underline; }

/* ===== collections grid ===== */
.rag-admin .collections-grid {
  display: grid; grid-template-columns: repeat(2, 1fr);
  gap: 18px; margin-bottom: 36px;
}
@media (max-width: 860px) {
  .rag-admin .collections-grid { grid-template-columns: 1fr; }
}
.rag-admin .coll-card {
  background: var(--panel); border: 1px solid var(--line);
  border-radius: 20px; padding: 26px;
  transition: transform 0.25s, box-shadow 0.25s;
}
.rag-admin .coll-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 28px -10px rgba(12,15,23,0.15);
}
.rag-admin .coll-top {
  display: flex; align-items: flex-start; justify-content: space-between;
  margin-bottom: 20px;
}
.rag-admin .coll-label-row {
  display: flex; align-items: center; gap: 12px;
}
.rag-admin .coll-emoji {
  font-size: 28px; width: 52px; height: 52px;
  background: var(--paper-2); border-radius: 14px;
  display: flex; align-items: center; justify-content: center;
}
.rag-admin .coll-name { font-size: 17px; font-weight: 700; margin-bottom: 4px; }
.rag-admin .coll-updated { font-size: 12px; color: var(--slate-l); }
.rag-admin .status-pill {
  display: inline-flex; align-items: center; gap: 5px;
  font-size: 11.5px; font-weight: 600; padding: 4px 10px;
  border-radius: 100px;
}
.rag-admin .status-pill.active { background: #dcfce7; color: #15803d; }
.rag-admin .status-pill.empty { background: var(--paper-2); color: var(--slate); }
.rag-admin .status-pill::before {
  content: ""; width: 6px; height: 6px; border-radius: 50%;
  background: currentColor;
}
.rag-admin .coll-stats {
  display: grid; grid-template-columns: repeat(3, 1fr);
  gap: 14px; padding-top: 18px;
  border-top: 1px solid var(--line);
}
.rag-admin .cs-val { font-size: 22px; font-weight: 700; letter-spacing: -0.01em; }
.rag-admin .cs-label { font-size: 11.5px; color: var(--slate-l); margin-top: 3px; }
.rag-admin .coll-actions {
  display: flex; gap: 8px; margin-top: 18px;
}
.rag-admin .coll-btn {
  display: inline-flex; align-items: center; gap: 6px;
  padding: 8px 14px; border-radius: 100px;
  border: 1px solid var(--line); background: var(--paper);
  font-size: 12.5px; font-weight: 500; color: var(--ink);
  transition: all 0.2s;
}
.rag-admin .coll-btn:hover { background: var(--paper-2); border-color: var(--slate-l); }
.rag-admin .coll-btn.primary {
  background: var(--ink); color: #fff; border-color: transparent;
}
.rag-admin .coll-btn.primary:hover { background: var(--indigo); }

/* ===== recent uploads table ===== */
.rag-admin .table-wrap {
  background: var(--panel); border: 1px solid var(--line);
  border-radius: 20px; overflow: hidden; margin-bottom: 36px;
}
.rag-admin table {
  width: 100%; border-collapse: collapse;
}
.rag-admin th {
  text-align: left; padding: 14px 20px;
  font-size: 11.5px; font-weight: 600;
  font-family: "IBM Plex Mono", monospace;
  text-transform: uppercase; letter-spacing: 0.06em;
  color: var(--slate-l); background: var(--paper);
  border-bottom: 1px solid var(--line);
}
.rag-admin td {
  padding: 14px 20px; font-size: 13.5px;
  border-bottom: 1px solid var(--line);
}
.rag-admin tr:last-child td { border-bottom: none; }
.rag-admin tr:hover td { background: var(--paper); }
.rag-admin .td-file { display: flex; align-items: center; gap: 10px; }
.rag-admin .td-icon {
  width: 32px; height: 32px; border-radius: 8px;
  background: var(--paper-2); display: flex; align-items: center; justify-content: center;
  color: var(--indigo); flex-shrink: 0;
}
.rag-admin .td-badge {
  display: inline-flex; align-items: center; gap: 5px;
  font-size: 11.5px; font-weight: 600; padding: 3px 9px;
  border-radius: 100px; background: #dcfce7; color: #15803d;
}

/* ===== pipeline config ===== */
.rag-admin .pipeline-grid {
  display: grid; grid-template-columns: repeat(3, 1fr);
  gap: 16px; margin-bottom: 36px;
}
@media (max-width: 860px) {
  .rag-admin .pipeline-grid { grid-template-columns: repeat(2, 1fr); }
}
.rag-admin .config-card {
  background: var(--panel); border: 1px solid var(--line);
  border-radius: 16px; padding: 20px;
}
.rag-admin .config-label {
  font-family: "IBM Plex Mono", monospace;
  font-size: 11px; text-transform: uppercase; letter-spacing: 0.07em;
  color: var(--slate-l); margin-bottom: 10px;
}
.rag-admin .config-val {
  font-size: 15px; font-weight: 600;
  line-height: 1.4;
}
.rag-admin .config-dot {
  width: 8px; height: 8px; border-radius: 50%;
  display: inline-block; margin-right: 6px;
}
`}),r.jsxs("div",{className:"shell",children:[r.jsxs("aside",{className:"sidebar",children:[r.jsxs("div",{className:"sb-brand",children:[r.jsx("div",{className:"sb-brand-mark",children:"N"}),"NexusRAG"]}),r.jsxs("div",{className:"sb-section",children:[r.jsx("div",{className:"sb-label",children:"Admin"}),r.jsxs("button",{className:`sb-item${n==="overview"?" active":""}`,onClick:()=>a("overview"),children:[r.jsx(ee,{name:"chart",size:16})," Overview"]}),r.jsxs("button",{className:`sb-item${n==="collections"?" active":""}`,onClick:()=>a("collections"),children:[r.jsx(ee,{name:"database",size:16})," Collections"]}),r.jsxs(I,{to:"/upload",className:"sb-item",children:[r.jsx(ee,{name:"upload",size:16})," Upload Docs"]}),r.jsxs("button",{className:`sb-item${n==="pipeline"?" active":""}`,onClick:()=>a("pipeline"),children:[r.jsx(ee,{name:"settings",size:16})," Pipeline Config"]}),r.jsxs("button",{className:"sb-item",children:[r.jsx(ee,{name:"users",size:16})," Users"]})]}),r.jsx("div",{className:"sb-spacer"}),r.jsxs("div",{className:"sb-section",children:[r.jsxs(I,{to:"/dashboard",className:"sb-item",children:[r.jsx(ee,{name:"chevron",size:16})," User View"]}),r.jsxs(I,{to:"/",className:"sb-item",children:[r.jsx(ee,{name:"logout",size:16})," Back to Home"]})]}),r.jsxs("div",{className:"sb-user",children:[r.jsx("div",{className:"sb-avatar"}),r.jsxs("div",{children:[r.jsx("div",{className:"sb-name",children:"Admin"}),r.jsx("div",{className:"sb-role",children:"System Administrator"})]})]})]}),r.jsxs("div",{className:"main",children:[r.jsxs("div",{className:"topbar",children:[r.jsxs("h1",{children:[n==="overview"&&"Dashboard Overview",n==="collections"&&"Document Collections",n==="pipeline"&&"Pipeline Configuration"]}),r.jsxs("div",{className:"topbar-right",children:[r.jsx("span",{className:"topbar-badge",children:"● System Active"}),r.jsxs(I,{to:"/upload",className:"topbar-btn",children:[r.jsx(ee,{name:"upload",size:14})," Upload Docs"]})]})]}),r.jsx("div",{className:"tabs",children:[{key:"overview",label:"Overview"},{key:"collections",label:"Collections"},{key:"pipeline",label:"Pipeline Config"}].map(i=>r.jsx("button",{className:`tab-btn${n===i.key?" active":""}`,onClick:()=>a(i.key),children:i.label},i.key))}),r.jsxs("div",{className:"content",children:[n==="overview"&&r.jsxs(r.Fragment,{children:[r.jsxs("div",{className:"stats-row",children:[r.jsx(na,{icon:r.jsx(ee,{name:"database",size:20}),label:"Total Documents",value:"3,127",sub:"Across 3 active sectors",accent:"#4f46e5"}),r.jsx(na,{icon:r.jsx(ee,{name:"chart",size:20}),label:"Total Chunks",value:"66,860",sub:"Embedded vectors",accent:"#22c55e"}),r.jsx(na,{icon:r.jsx(ee,{name:"users",size:20}),label:"Total Queries",value:"9,334",sub:"Last 30 days",accent:"#f59e0b"}),r.jsx(na,{icon:r.jsx(ee,{name:"file",size:20}),label:"Collections",value:"4",sub:"3 active · 1 empty",accent:"#3b82f6"})]}),r.jsxs("div",{className:"sec-head",children:[r.jsx("h2",{children:"Knowledge Base Collections"}),r.jsxs(I,{to:"/upload",className:"sec-link",children:["Upload new docs ",r.jsx(ee,{name:"chevron",size:14})]})]}),r.jsx("div",{className:"collections-grid",children:ld.map(i=>r.jsxs("div",{className:"coll-card",children:[r.jsxs("div",{className:"coll-top",children:[r.jsxs("div",{className:"coll-label-row",children:[r.jsx("div",{className:"coll-emoji",children:i.emoji}),r.jsxs("div",{children:[r.jsx("div",{className:"coll-name",children:i.label}),r.jsxs("div",{className:"coll-updated",children:["Updated ",i.lastUpdated]})]})]}),r.jsx("span",{className:`status-pill ${i.status}`,children:i.status})]}),r.jsxs("div",{className:"coll-stats",children:[r.jsxs("div",{children:[r.jsx("div",{className:"cs-val",children:i.docs.toLocaleString()}),r.jsx("div",{className:"cs-label",children:"Documents"})]}),r.jsxs("div",{children:[r.jsx("div",{className:"cs-val",children:i.chunks.toLocaleString()}),r.jsx("div",{className:"cs-label",children:"Chunks"})]}),r.jsxs("div",{children:[r.jsx("div",{className:"cs-val",children:i.queries.toLocaleString()}),r.jsx("div",{className:"cs-label",children:"Queries"})]})]}),r.jsxs("div",{className:"coll-actions",children:[r.jsxs(I,{to:"/upload",className:"coll-btn primary",children:[r.jsx(ee,{name:"upload",size:13})," Add Docs"]}),r.jsxs("button",{className:"coll-btn",children:[r.jsx(ee,{name:"chart",size:13})," Stats"]}),i.status!=="empty"&&r.jsxs("button",{className:"coll-btn",children:[r.jsx(ee,{name:"trash",size:13})," Clear"]})]})]},i.key))}),r.jsxs("div",{className:"sec-head",children:[r.jsx("h2",{children:"Recent Uploads"}),r.jsxs(I,{to:"/upload",className:"sec-link",children:["Upload more ",r.jsx(ee,{name:"chevron",size:14})]})]}),r.jsx("div",{className:"table-wrap",children:r.jsxs("table",{children:[r.jsx("thead",{children:r.jsxs("tr",{children:[r.jsx("th",{children:"File"}),r.jsx("th",{children:"Size"}),r.jsx("th",{children:"Industry"}),r.jsx("th",{children:"Uploaded"}),r.jsx("th",{children:"Status"})]})}),r.jsx("tbody",{children:lg.map((i,s)=>r.jsxs("tr",{children:[r.jsx("td",{children:r.jsxs("div",{className:"td-file",children:[r.jsx("div",{className:"td-icon",children:r.jsx(ee,{name:"file",size:16})}),i.name]})}),r.jsx("td",{children:i.size}),r.jsx("td",{children:i.industry}),r.jsx("td",{children:i.time}),r.jsx("td",{children:r.jsxs("span",{className:"td-badge",children:[r.jsx(ee,{name:"check",size:11})," ",i.status]})})]},s))})]})})]}),n==="collections"&&r.jsxs(r.Fragment,{children:[r.jsxs("div",{className:"sec-head",children:[r.jsx("h2",{children:"All Collections"}),r.jsxs(I,{to:"/upload",className:"topbar-btn",style:{display:"inline-flex",alignItems:"center",gap:7,padding:"9px 18px",borderRadius:100,background:"var(--ink)",color:"#fff",border:"none",fontSize:13.5,fontWeight:600},children:[r.jsx(ee,{name:"plus",size:14})," New Collection"]})]}),r.jsx("div",{className:"collections-grid",children:ld.map(i=>r.jsxs("div",{className:"coll-card",children:[r.jsxs("div",{className:"coll-top",children:[r.jsxs("div",{className:"coll-label-row",children:[r.jsx("div",{className:"coll-emoji",children:i.emoji}),r.jsxs("div",{children:[r.jsx("div",{className:"coll-name",children:i.label}),r.jsxs("div",{className:"coll-updated",children:["Model: ",i.embeddingModel]})]})]}),r.jsx("span",{className:`status-pill ${i.status}`,children:i.status})]}),r.jsxs("div",{className:"coll-stats",children:[r.jsxs("div",{children:[r.jsx("div",{className:"cs-val",children:i.docs.toLocaleString()}),r.jsx("div",{className:"cs-label",children:"Documents"})]}),r.jsxs("div",{children:[r.jsx("div",{className:"cs-val",children:i.chunks.toLocaleString()}),r.jsx("div",{className:"cs-label",children:"Chunks"})]}),r.jsxs("div",{children:[r.jsx("div",{className:"cs-val",children:i.queries.toLocaleString()}),r.jsx("div",{className:"cs-label",children:"Queries"})]})]}),r.jsxs("div",{className:"coll-actions",children:[r.jsxs(I,{to:"/upload",className:"coll-btn primary",children:[r.jsx(ee,{name:"upload",size:13})," Add Docs"]}),r.jsxs(I,{to:"/dashboard",className:"coll-btn",children:[r.jsx(ee,{name:"chart",size:13})," Query"]})]})]},i.key))})]}),n==="pipeline"&&r.jsxs(r.Fragment,{children:[r.jsxs("div",{className:"sec-head",children:[r.jsx("h2",{children:"Active Pipeline Configuration"}),r.jsx("span",{style:{fontSize:13,color:"var(--slate)",fontFamily:'"IBM Plex Mono", monospace'},children:"Based on Elkiran & Rasheed, IEEE Access 2026"})]}),r.jsx("div",{className:"pipeline-grid",children:dg.map(i=>r.jsxs("div",{className:"config-card",children:[r.jsx("div",{className:"config-label",children:i.label}),r.jsxs("div",{className:"config-val",children:[r.jsx("span",{className:"config-dot",style:{background:i.accent}}),i.value]})]},i.label))}),r.jsxs("div",{style:{background:"#fff",border:"1px solid var(--line)",borderRadius:18,padding:28,marginBottom:28},children:[r.jsx("h3",{style:{marginBottom:16,fontSize:16},children:"Why these settings?"}),r.jsxs("p",{style:{fontSize:14.5,color:"var(--slate)",lineHeight:1.7,margin:0},children:["The base paper (Elkiran & Rasheed, IEEE Access 2026) found that ",r.jsx("strong",{children:"retrieval strategy"})," and",r.jsx("strong",{children:" similarity metric"})," matter most — statistically significant with large effect sizes (η² ≈ 0.31). HyPE retrieval and cosine/inner-product similarity clearly outperformed alternatives. MiniLM reranking was added as a second-stage refinement. Our project extends this with ",r.jsx("strong",{children:"hybrid search"})," (dense + BM25), ",r.jsx("strong",{children:"semantic chunking"}),", and ",r.jsx("strong",{children:"multi-industry generalisation"})," — directly addressing the paper's stated limitations."]})]})]})]})]})]})]})}const Li=[{key:"healthcare",emoji:"🏥",label:"Healthcare",desc:"PubMedQA, clinical notes, diagnostics"},{key:"finance",emoji:"💰",label:"Banking & Finance",desc:"FinQA, TAT-QA, market analysis"},{key:"traffic",emoji:"🚦",label:"Traffic & Transport",desc:"Driving rules, government docs, route data"},{key:"legal",emoji:"⚖️",label:"Legal Services",desc:"Contracts, regulations, case law"},{key:"retail",emoji:"🛒",label:"Retail & E-commerce",desc:"Product docs, inventory, customer support"},{key:"energy",emoji:"⚡",label:"Energy & Utilities",desc:"Grid management, renewable energy docs"},{key:"education",emoji:"🎓",label:"Education",desc:"Curriculum, student records, research papers"},{key:"insurance",emoji:"🛡️",label:"Insurance",desc:"Policies, claims, risk assessment documents"},{key:"custom",emoji:"➕",label:"Add New Sector",desc:"Onboard a completely new industry"}];function Ze({name:e,size:t=18}){const n={width:t,height:t,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:1.8,strokeLinecap:"round",strokeLinejoin:"round"};switch(e){case"upload":return r.jsxs("svg",{...n,children:[r.jsx("path",{d:"M12 15V4M8 8l4-4 4 4"}),r.jsx("path",{d:"M5 14v4.5A1.5 1.5 0 0 0 6.5 20h11a1.5 1.5 0 0 0 1.5-1.5V14"})]});case"file":return r.jsxs("svg",{...n,children:[r.jsx("path",{d:"M7 3.5h7l4 4V20a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5z"}),r.jsx("path",{d:"M14 3.5V8h4.5"})]});case"close":return r.jsx("svg",{...n,children:r.jsx("path",{d:"M6 6l12 12M18 6 6 18"})});case"check":return r.jsx("svg",{...n,children:r.jsx("path",{d:"M5 12.5l4.5 4.5L19 7"})});case"folder":return r.jsx("svg",{...n,children:r.jsx("path",{d:"M3.5 7.5A2 2 0 0 1 5.5 5.5h3.6l1.4 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5.5a2 2 0 0 1-2-2z"})});case"chevron":return r.jsx("svg",{...n,children:r.jsx("path",{d:"M9 6l6 6-6 6"})});case"warning":return r.jsxs("svg",{...n,children:[r.jsx("path",{d:"M10.3 3.5 2 19h20L13.7 3.5a2 2 0 0 0-3.4 0z"}),r.jsx("path",{d:"M12 10v4M12 17h.01"})]});default:return null}}function ug(e){return e<1024?`${e} B`:e<1024*1024?`${Math.round(e/1024)} KB`:`${(e/(1024*1024)).toFixed(1)} MB`}function pg(){var U,L;const[e,t]=g.useState(!1),[n,a]=g.useState(null),[i,s]=g.useState(""),[o,l]=g.useState([]),[d,c]=g.useState(!1),[h,m]=g.useState(1),[x,w]=g.useState(!1),[N,y]=g.useState(!1),[j,f]=g.useState(0),u=g.useRef(null);it(),g.useEffect(()=>{const R=setTimeout(()=>t(!0),50);return()=>clearTimeout(R)},[]);const p=R=>{R.preventDefault(),c(!1);const O=Array.from(R.dataTransfer.files);v(O)},v=R=>{l(O=>[...O,...R.map(ie=>({id:`${ie.name}-${ie.size}-${Date.now()}-${Math.random()}`,file:ie,status:"pending"}))])},S=R=>l(O=>O.filter(ie=>ie.id!==R)),C=R=>{a(R),R!=="custom"&&m(2)},k=()=>{if(o.length===0)return;m(3),w(!0);let R=0;const O=setInterval(()=>{R+=Math.random()*12+3,R>=100&&(R=100,clearInterval(O),w(!1),y(!0)),f(Math.min(R,100))},180)},M=n==="custom"?i||"Custom Sector":((U=Li.find(R=>R.key===n))==null?void 0:U.label)||"";return r.jsxs("div",{className:`rag-upload${e?" mounted":""}`,children:[r.jsx("style",{children:`
/* ===== RAG Upload Page ===== */
.rag-upload {
  --ink: #0c0f17;
  --ink-2: #141928;
  --navy: #0a1730;
  --paper: #f1f0fa;
  --paper-2: #e8e6f6;
  --indigo: #4f46e5;
  --indigo-2: #7c74ff;
  --amber: #ffb020;
  --coral: #ff6452;
  --green: #22c55e;
  --slate: #5b6270;
  --slate-l: #9296a6;
  --line: rgba(12, 15, 23, 0.1);
  --line-dark: rgba(255, 255, 255, 0.12);
  --radius: 22px;

  font-family: "Inter", sans-serif;
  background: var(--paper);
  color: var(--ink);
  min-height: 100vh;
  -webkit-font-smoothing: antialiased;
}
.rag-upload *, .rag-upload *::before, .rag-upload *::after { box-sizing: border-box; }
.rag-upload h1, .rag-upload h2, .rag-upload h3 { font-family: "Space Grotesk", sans-serif; margin: 0; }
.rag-upload a { color: inherit; text-decoration: none; }
.rag-upload button { font-family: inherit; cursor: pointer; }

@media (prefers-reduced-motion: reduce) {
  .rag-upload * { animation: none !important; transition: none !important; }
}

/* ===== nav ===== */
.rag-upload nav {
  position: sticky;
  top: 0;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 18px 40px;
  background: var(--navy);
  border-bottom: 1px solid rgba(255,255,255,0.08);
}
.rag-upload .brand {
  display: flex; align-items: center; gap: 10px;
  font-weight: 700; font-size: 18px; color: #fff;
  font-family: "Space Grotesk", sans-serif;
}
.rag-upload .brand-mark {
  width: 28px; height: 28px; border-radius: 8px;
  background: linear-gradient(135deg, var(--indigo), var(--indigo-2));
  display: flex; align-items: center; justify-content: center;
  color: #fff; font-size: 14px; font-weight: 700;
}
.rag-upload .nav-right {
  display: flex; align-items: center; gap: 16px;
}
.rag-upload .nav-link {
  color: rgba(255,255,255,0.65); font-size: 14px;
  transition: color 0.2s;
}
.rag-upload .nav-link:hover { color: #fff; }
.rag-upload .nav-btn {
  padding: 9px 18px; border-radius: 100px;
  border: 1px solid rgba(255,255,255,0.4);
  background: transparent; color: #fff;
  font-size: 14px; font-weight: 500;
  transition: all 0.25s;
}
.rag-upload .nav-btn:hover { background: #fff; color: #000; }

/* ===== page layout ===== */
.rag-upload .page-wrap {
  max-width: 1100px;
  margin: 0 auto;
  padding: 60px 32px 100px;
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.8s ease, transform 0.8s ease;
}
.rag-upload.mounted .page-wrap { opacity: 1; transform: none; }

.rag-upload .page-head {
  margin-bottom: 50px;
}
.rag-upload .eyebrow {
  display: inline-flex; align-items: center; gap: 8px;
  font-family: "IBM Plex Mono", monospace;
  font-size: 12px; letter-spacing: 0.08em;
  text-transform: uppercase; color: var(--indigo);
  margin-bottom: 14px;
}
.rag-upload .eyebrow::before {
  content: ""; width: 7px; height: 7px; border-radius: 50%;
  background: var(--amber);
  box-shadow: 0 0 0 4px rgba(255,176,32,0.2);
}
.rag-upload .page-head h1 {
  font-size: clamp(30px, 4vw, 48px);
  font-weight: 700; letter-spacing: -0.02em;
  line-height: 1.1; margin-bottom: 12px;
}
.rag-upload .page-head p {
  font-size: 16px; color: var(--slate);
  line-height: 1.6; max-width: 560px;
}

/* ===== step progress ===== */
.rag-upload .steps {
  display: flex; align-items: center; gap: 0;
  margin-bottom: 52px;
}
.rag-upload .step-item {
  display: flex; align-items: center; gap: 12px;
  flex: 1;
}
.rag-upload .step-item:last-child { flex: 0; }
.rag-upload .step-dot {
  width: 38px; height: 38px; border-radius: 50%;
  border: 2px solid var(--line);
  display: flex; align-items: center; justify-content: center;
  font-family: "IBM Plex Mono", monospace;
  font-size: 13px; font-weight: 600;
  background: #fff; color: var(--slate-l);
  flex-shrink: 0;
  transition: all 0.35s;
}
.rag-upload .step-item.active .step-dot {
  border-color: var(--indigo);
  background: var(--indigo); color: #fff;
}
.rag-upload .step-item.done .step-dot {
  border-color: var(--green);
  background: var(--green); color: #fff;
}
.rag-upload .step-meta { flex: 1; }
.rag-upload .step-label {
  font-size: 13.5px; font-weight: 600; margin-bottom: 2px;
}
.rag-upload .step-desc { font-size: 12px; color: var(--slate-l); }
.rag-upload .step-connector {
  height: 2px; background: var(--line);
  flex: 1; margin: 0 16px;
  border-radius: 2px;
  transition: background 0.4s;
}
.rag-upload .step-connector.done { background: var(--green); }

/* ===== industry grid ===== */
.rag-upload .industry-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  margin-bottom: 32px;
}
@media (max-width: 860px) {
  .rag-upload .industry-grid { grid-template-columns: repeat(2, 1fr); }
}
@media (max-width: 560px) {
  .rag-upload .industry-grid { grid-template-columns: 1fr; }
}
.rag-upload .ind-card {
  background: #fff;
  border: 2px solid var(--line);
  border-radius: 18px;
  padding: 22px;
  cursor: pointer;
  transition: border-color 0.25s, box-shadow 0.25s, transform 0.25s;
  text-align: left;
}
.rag-upload .ind-card:hover {
  border-color: var(--indigo-2);
  box-shadow: 0 8px 30px -8px rgba(79,70,229,0.25);
  transform: translateY(-3px);
}
.rag-upload .ind-card.selected {
  border-color: var(--indigo);
  background: #f5f3ff;
  box-shadow: 0 0 0 4px rgba(79,70,229,0.12);
}
.rag-upload .ind-card.custom-card {
  border-style: dashed;
  background: var(--paper);
}
.rag-upload .ind-emoji {
  font-size: 30px; margin-bottom: 12px;
  display: block;
}
.rag-upload .ind-label {
  font-size: 15px; font-weight: 700;
  font-family: "Space Grotesk", sans-serif;
  margin-bottom: 5px;
}
.rag-upload .ind-desc {
  font-size: 12.5px; color: var(--slate);
  line-height: 1.5;
}

/* ===== custom sector input ===== */
.rag-upload .custom-field {
  margin-top: 16px;
}
.rag-upload .custom-field input {
  width: 100%; padding: 14px 16px;
  border: 1.5px solid var(--line); border-radius: 12px;
  font-size: 15px; font-family: "Inter", sans-serif;
  background: #fff; color: var(--ink); outline: none;
  transition: border-color 0.25s, box-shadow 0.25s;
}
.rag-upload .custom-field input:focus {
  border-color: var(--indigo);
  box-shadow: 0 0 0 4px rgba(79,70,229,0.12);
}
.rag-upload .custom-field input::placeholder { color: var(--slate-l); }

/* ===== upload zone ===== */
.rag-upload .upload-zone {
  border: 2px dashed var(--line);
  border-radius: 22px;
  padding: 60px 32px;
  text-align: center;
  cursor: pointer;
  transition: border-color 0.25s, background 0.25s;
  background: #fff;
  margin-bottom: 32px;
}
.rag-upload .upload-zone.drag-over {
  border-color: var(--indigo);
  background: #f5f3ff;
}
.rag-upload .upload-zone .zone-icon {
  width: 64px; height: 64px; border-radius: 18px;
  background: var(--paper-2);
  display: flex; align-items: center; justify-content: center;
  margin: 0 auto 20px;
  color: var(--indigo);
  transition: transform 0.3s;
}
.rag-upload .upload-zone:hover .zone-icon { transform: scale(1.08); }
.rag-upload .upload-zone h3 {
  font-size: 20px; font-weight: 700; margin-bottom: 8px;
}
.rag-upload .upload-zone p {
  font-size: 14.5px; color: var(--slate); line-height: 1.5; margin-bottom: 24px;
}
.rag-upload .zone-btn {
  display: inline-flex; align-items: center; gap: 8px;
  padding: 12px 24px; border-radius: 100px;
  background: var(--ink); color: #fff;
  border: none; font-size: 15px; font-weight: 500;
  transition: background 0.25s, transform 0.25s;
}
.rag-upload .zone-btn:hover { background: var(--indigo); transform: translateY(-2px); }
.rag-upload .zone-hint {
  margin-top: 14px; font-size: 12.5px;
  font-family: "IBM Plex Mono", monospace;
  color: var(--slate-l); letter-spacing: 0.03em;
}

/* ===== file list ===== */
.rag-upload .file-list-head {
  display: flex; align-items: center; justify-content: space-between;
  margin-bottom: 14px;
}
.rag-upload .file-list-head h3 {
  font-size: 16px; font-weight: 700;
}
.rag-upload .clear-btn {
  background: none; border: none; font-size: 13px;
  color: var(--slate); cursor: pointer;
  transition: color 0.2s;
}
.rag-upload .clear-btn:hover { color: var(--coral); }
.rag-upload .file-list {
  display: flex; flex-direction: column; gap: 8px;
  margin-bottom: 32px;
  max-height: 320px; overflow-y: auto;
}
.rag-upload .file-row {
  display: flex; align-items: center; gap: 12px;
  padding: 12px 16px;
  background: #fff; border: 1px solid var(--line);
  border-radius: 12px;
  transition: background 0.2s;
}
.rag-upload .file-row:hover { background: var(--paper-2); }
.rag-upload .file-icon {
  width: 36px; height: 36px; border-radius: 10px;
  background: var(--paper-2);
  display: flex; align-items: center; justify-content: center;
  color: var(--indigo); flex-shrink: 0;
}
.rag-upload .file-meta { flex: 1; min-width: 0; }
.rag-upload .file-name {
  font-size: 13.5px; font-weight: 600;
  white-space: nowrap; overflow: hidden; text-overflow: ellipsis;
}
.rag-upload .file-size { font-size: 12px; color: var(--slate-l); }
.rag-upload .file-remove {
  background: none; border: none; color: var(--slate-l);
  padding: 4px; border-radius: 6px;
  cursor: pointer; display: flex;
  transition: color 0.2s, background 0.2s;
}
.rag-upload .file-remove:hover {
  color: var(--coral); background: #fdf1f0;
}

/* ===== warning / info banner ===== */
.rag-upload .info-banner {
  display: flex; align-items: flex-start; gap: 12px;
  padding: 14px 18px; border-radius: 14px;
  background: #fffbeb; border: 1px solid #f9d84a;
  margin-bottom: 28px;
  font-size: 13.5px; line-height: 1.5;
  color: #7a5800;
}
.rag-upload .info-banner svg { flex-shrink: 0; margin-top: 1px; }

/* ===== action bar ===== */
.rag-upload .action-bar {
  display: flex; align-items: center; gap: 14px;
  flex-wrap: wrap;
}
.rag-upload .btn-primary {
  display: inline-flex; align-items: center; gap: 8px;
  padding: 14px 28px; border-radius: 100px;
  background: var(--ink); color: #fff;
  border: none; font-size: 15.5px; font-weight: 600;
  transition: background 0.25s, transform 0.25s;
}
.rag-upload .btn-primary:hover { background: var(--indigo); transform: translateY(-1px); }
.rag-upload .btn-primary:disabled {
  opacity: 0.4; cursor: not-allowed; transform: none;
}
.rag-upload .btn-secondary {
  display: inline-flex; align-items: center; gap: 8px;
  padding: 14px 22px; border-radius: 100px;
  border: 1.5px solid var(--line);
  background: #fff; color: var(--ink);
  font-size: 15px; font-weight: 500;
  transition: background 0.2s, border-color 0.2s;
}
.rag-upload .btn-secondary:hover { background: var(--paper-2); border-color: var(--slate-l); }

/* ===== selected industry chip ===== */
.rag-upload .industry-chip {
  display: inline-flex; align-items: center; gap: 10px;
  padding: 10px 18px; border-radius: 100px;
  background: #eef2ff; border: 1.5px solid #c7d2fe;
  font-size: 14px; font-weight: 600; color: var(--indigo);
  margin-bottom: 30px;
}
.rag-upload .industry-chip .chip-change {
  background: none; border: none; font-size: 12px;
  color: var(--slate); cursor: pointer;
  margin-left: 4px; padding: 2px;
  transition: color 0.2s;
}
.rag-upload .industry-chip .chip-change:hover { color: var(--indigo); }

/* ===== progress / uploading ===== */
.rag-upload .upload-progress {
  background: #fff; border: 1px solid var(--line);
  border-radius: 22px; padding: 48px 36px;
  text-align: center;
}
.rag-upload .progress-ring {
  width: 100px; height: 100px;
  margin: 0 auto 28px;
  position: relative;
}
.rag-upload .progress-ring svg { transform: rotate(-90deg); }
.rag-upload .progress-ring .track {
  fill: none; stroke: var(--paper-2); stroke-width: 8;
}
.rag-upload .progress-ring .fill {
  fill: none; stroke: var(--indigo); stroke-width: 8;
  stroke-linecap: round;
  stroke-dasharray: 251.3;
  transition: stroke-dashoffset 0.4s ease;
}
.rag-upload .progress-ring .ring-text {
  position: absolute; inset: 0;
  display: flex; align-items: center; justify-content: center;
  font-size: 20px; font-weight: 700;
  font-family: "Space Grotesk", sans-serif;
}
.rag-upload .upload-progress h2 {
  font-size: 26px; font-weight: 700; margin-bottom: 10px;
}
.rag-upload .upload-progress p {
  font-size: 15px; color: var(--slate); line-height: 1.6; margin-bottom: 28px;
}
.rag-upload .file-summary {
  display: inline-flex; align-items: center; gap: 8px;
  padding: 8px 16px; border-radius: 100px;
  background: var(--paper-2); font-size: 13px;
  font-family: "IBM Plex Mono", monospace;
  margin-bottom: 28px;
}

/* ===== success state ===== */
.rag-upload .success-icon {
  width: 90px; height: 90px; border-radius: 50%;
  background: #dcfce7; border: 3px solid #86efac;
  display: flex; align-items: center; justify-content: center;
  margin: 0 auto 28px;
  color: var(--green);
  animation: rag-pop 0.5s cubic-bezier(0.3,1.4,0.4,1) forwards;
}
@keyframes rag-pop {
  from { transform: scale(0.4); opacity: 0; }
  to { transform: scale(1); opacity: 1; }
}
`}),r.jsxs("nav",{children:[r.jsxs(I,{to:"/",className:"brand",children:[r.jsx("span",{className:"brand-mark",children:"N"}),"NexusRAG"]}),r.jsxs("div",{className:"nav-right",children:[r.jsx(I,{to:"/admin",className:"nav-link",children:"Dashboard"}),r.jsx(I,{to:"/dashboard",className:"nav-link",children:"User View"}),r.jsx(I,{to:"/",className:"nav-btn",children:"← Home"})]})]}),r.jsxs("div",{className:"page-wrap",children:[r.jsxs("div",{className:"page-head",children:[r.jsx("span",{className:"eyebrow",children:"Admin · Document Management"}),r.jsx("h1",{children:"Bulk Document Upload"}),r.jsx("p",{children:"Tag an entire folder with one industry label. The pipeline handles chunking, embedding, and storage automatically — no code changes needed to add a new sector."})]}),r.jsxs("div",{className:"steps",children:[r.jsxs("div",{className:`step-item ${h>=1?h>1?"done":"active":""}`,children:[r.jsx("div",{className:"step-dot",children:h>1?r.jsx(Ze,{name:"check",size:16}):"01"}),r.jsxs("div",{className:"step-meta",children:[r.jsx("div",{className:"step-label",children:"Select Industry"}),r.jsx("div",{className:"step-desc",children:"Tag this batch"})]})]}),r.jsx("div",{className:`step-connector ${h>1?"done":""}`}),r.jsxs("div",{className:`step-item ${h>=2?h>2?"done":"active":""}`,children:[r.jsx("div",{className:"step-dot",children:h>2?r.jsx(Ze,{name:"check",size:16}):"02"}),r.jsxs("div",{className:"step-meta",children:[r.jsx("div",{className:"step-label",children:"Upload Files"}),r.jsx("div",{className:"step-desc",children:"Drag or browse"})]})]}),r.jsx("div",{className:`step-connector ${h>2?"done":""}`}),r.jsxs("div",{className:`step-item ${h>=3?"active":""}`,children:[r.jsx("div",{className:"step-dot",children:N?r.jsx(Ze,{name:"check",size:16}):"03"}),r.jsxs("div",{className:"step-meta",children:[r.jsx("div",{className:"step-label",children:"Confirm & Index"}),r.jsx("div",{className:"step-desc",children:"Embed & store"})]})]})]}),h===1&&r.jsxs(r.Fragment,{children:[r.jsx("div",{className:"industry-grid",children:Li.map(R=>r.jsxs("button",{className:`ind-card${R.key==="custom"?" custom-card":""}${n===R.key?" selected":""}`,onClick:()=>C(R.key),children:[r.jsx("span",{className:"ind-emoji",children:R.emoji}),r.jsx("div",{className:"ind-label",children:R.label}),r.jsx("div",{className:"ind-desc",children:R.desc})]},R.key))}),n==="custom"&&r.jsxs(r.Fragment,{children:[r.jsx("div",{className:"custom-field",children:r.jsx("input",{type:"text",placeholder:"Enter sector name (e.g. Mining, Aquaculture…)",value:i,onChange:R=>s(R.target.value),autoFocus:!0})}),r.jsx("div",{className:"action-bar",style:{marginTop:"16px"},children:r.jsx("button",{className:"btn-primary",disabled:!i.trim(),onClick:()=>m(2),children:"Continue →"})})]})]}),h===2&&r.jsxs(r.Fragment,{children:[r.jsxs("div",{className:"industry-chip",children:[r.jsx("span",{children:((L=Li.find(R=>R.key===n))==null?void 0:L.emoji)||"📁"}),r.jsx("span",{children:M}),r.jsx("button",{className:"chip-change",onClick:()=>{m(1),l([])},children:"Change ✕"})]}),r.jsxs("div",{className:`upload-zone${d?" drag-over":""}`,onDragOver:R=>{R.preventDefault(),c(!0)},onDragLeave:()=>c(!1),onDrop:p,onClick:()=>{var R;return(R=u.current)==null?void 0:R.click()},children:[r.jsx("div",{className:"zone-icon",children:r.jsx(Ze,{name:"folder",size:30})}),r.jsx("h3",{children:"Drop your folder here"}),r.jsxs("p",{children:["Drag an entire folder — or click to browse individual files.",r.jsx("br",{}),"Supported: PDF, DOCX, TXT, MD, CSV, JSON"]}),r.jsxs("button",{className:"zone-btn",onClick:R=>{var O;R.stopPropagation(),(O=u.current)==null||O.click()},children:[r.jsx(Ze,{name:"upload",size:16}),"Browse Files"]}),r.jsx("div",{className:"zone-hint",children:"PDF · DOCX · TXT · MD · CSV · JSON supported"}),r.jsx("input",{ref:u,type:"file",multiple:!0,accept:".pdf,.docx,.txt,.md,.csv,.json",style:{display:"none"},onChange:R=>{v(Array.from(R.target.files)),R.target.value=""}})]}),o.length>0&&r.jsxs(r.Fragment,{children:[r.jsxs("div",{className:"file-list-head",children:[r.jsxs("h3",{children:[o.length," file",o.length!==1?"s":""," selected"]}),r.jsx("button",{className:"clear-btn",onClick:()=>l([]),children:"Clear all"})]}),r.jsx("div",{className:"file-list",children:o.map(R=>r.jsxs("div",{className:"file-row",children:[r.jsx("div",{className:"file-icon",children:r.jsx(Ze,{name:"file",size:18})}),r.jsxs("div",{className:"file-meta",children:[r.jsx("div",{className:"file-name",children:R.file.name}),r.jsx("div",{className:"file-size",children:ug(R.file.size)})]}),r.jsx("button",{className:"file-remove",onClick:()=>S(R.id),children:r.jsx(Ze,{name:"close",size:14})})]},R.id))}),r.jsxs("div",{className:"info-banner",children:[r.jsx(Ze,{name:"warning",size:18}),r.jsxs("div",{children:["Every file in this batch will be tagged as ",r.jsx("strong",{children:M}),". If any file belongs to a different industry, remove it before confirming."]})]})]}),r.jsxs("div",{className:"action-bar",children:[r.jsxs("button",{className:"btn-primary",disabled:o.length===0,onClick:k,children:["Confirm & Index ",o.length>0?`(${o.length} files)`:"","  →"]}),r.jsx("button",{className:"btn-secondary",onClick:()=>m(1),children:"← Back"})]})]}),h===3&&r.jsx("div",{className:"upload-progress",children:N?r.jsxs(r.Fragment,{children:[r.jsx("div",{className:"success-icon",children:r.jsx(Ze,{name:"check",size:40})}),r.jsx("h2",{children:"Upload Complete!"}),r.jsxs("p",{children:[o.length," document",o.length!==1?"s":""," have been chunked, embedded, and indexed into the ",r.jsx("strong",{children:M})," knowledge base.",r.jsx("br",{}),"Users can now query this sector immediately."]}),r.jsxs("div",{className:"action-bar",style:{justifyContent:"center"},children:[r.jsx("button",{className:"btn-primary",onClick:()=>{m(1),l([]),a(null),f(0),y(!1)},children:"Upload More Files"}),r.jsx(I,{to:"/admin",className:"btn-secondary",children:"View Collections →"})]})]}):r.jsxs(r.Fragment,{children:[r.jsxs("div",{className:"progress-ring",children:[r.jsxs("svg",{width:"100",height:"100",viewBox:"0 0 100 100",children:[r.jsx("circle",{className:"track",cx:"50",cy:"50",r:"40"}),r.jsx("circle",{className:"fill",cx:"50",cy:"50",r:"40",style:{strokeDashoffset:251.3*(1-j/100)}})]}),r.jsxs("div",{className:"ring-text",children:[Math.round(j),"%"]})]}),r.jsx("h2",{children:"Indexing documents…"}),r.jsxs("p",{children:["Chunking, embedding, and storing your ",o.length," files into the"," ",r.jsx("strong",{children:M})," knowledge base.",r.jsx("br",{}),"This may take a few moments."]}),r.jsxs("div",{className:"file-summary",children:[r.jsx(Ze,{name:"file",size:14}),o.length," files · ",M]})]})})]})]})}const fg=[{key:"healthcare",emoji:"🏥",label:"Healthcare",desc:"PubMedQA, clinical notes, medical research papers",docs:1842,chunks:38410,queries:4820,size:"2.4 GB",lastUpdated:"2 hours ago",status:"active",embeddingModel:"all-MiniLM-L6-v2",retriever:"HyPE",similarity:"Cosine",reranker:"MiniLM",color:"#22c55e",bg:"#dcfce7"},{key:"finance",emoji:"💰",label:"Banking & Finance",desc:"FinQA, TAT-QA, market analysis, risk and regulatory documents",docs:973,chunks:21560,queries:3310,size:"1.1 GB",lastUpdated:"1 day ago",status:"active",embeddingModel:"all-MiniLM-L6-v2",retriever:"HyPE",similarity:"Inner Product",reranker:"MiniLM",color:"#3b82f6",bg:"#dbeafe"},{key:"traffic",emoji:"🚦",label:"Traffic & Transport",desc:"Driving rules, government road safety docs, traffic law, exam question banks",docs:312,chunks:6890,queries:1204,size:"380 MB",lastUpdated:"3 days ago",status:"active",embeddingModel:"all-MiniLM-L6-v2",retriever:"HyPE",similarity:"Cosine",reranker:"MiniLM",color:"#f59e0b",bg:"#fef3c7"},{key:"legal",emoji:"⚖️",label:"Legal Services",desc:"Contracts, regulations, case law, compliance documents",docs:0,chunks:0,queries:0,size:"—",lastUpdated:"Never",status:"empty",embeddingModel:"—",retriever:"—",similarity:"—",reranker:"—",color:"#8b5cf6",bg:"#ede9fe"}];function er({name:e,size:t=18}){const n={width:t,height:t,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:1.8,strokeLinecap:"round",strokeLinejoin:"round"};switch(e){case"upload":return r.jsxs("svg",{...n,children:[r.jsx("path",{d:"M12 15V4M8 8l4-4 4 4"}),r.jsx("path",{d:"M5 14v4.5A1.5 1.5 0 0 0 6.5 20h11a1.5 1.5 0 0 0 1.5-1.5V14"})]});case"database":return r.jsxs("svg",{...n,children:[r.jsx("ellipse",{cx:"12",cy:"6",rx:"8",ry:"3"}),r.jsx("path",{d:"M4 6v6c0 1.66 3.58 3 8 3s8-1.34 8-3V6"}),r.jsx("path",{d:"M4 12v6c0 1.66 3.58 3 8 3s8-1.34 8-3v-6"})]});case"chart":return r.jsx("svg",{...n,children:r.jsx("path",{d:"M3 20h18M7 16V10M11 16V4M15 16V8M19 16v-4"})});case"chat":return r.jsx("svg",{...n,children:r.jsx("path",{d:"M4 5.5A2.5 2.5 0 0 1 6.5 3h11A2.5 2.5 0 0 1 20 5.5v8A2.5 2.5 0 0 1 17.5 16H10l-4.5 4v-4H6.5A2.5 2.5 0 0 1 4 13.5z"})});case"trash":return r.jsx("svg",{...n,children:r.jsx("path",{d:"M5.5 7h13M9.5 7V5a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v2M7 7l.8 12a1.5 1.5 0 0 0 1.5 1.4h5.4a1.5 1.5 0 0 0 1.5-1.4L17 7"})});case"search":return r.jsxs("svg",{...n,children:[r.jsx("circle",{cx:"11",cy:"11",r:"7"}),r.jsx("path",{d:"M20 20l-4.35-4.35"})]});case"plus":return r.jsx("svg",{...n,children:r.jsx("path",{d:"M12 5v14M5 12h14"})});case"check":return r.jsx("svg",{...n,children:r.jsx("path",{d:"M5 12.5l4.5 4.5L19 7"})});case"arrow":return r.jsx("svg",{...n,children:r.jsx("path",{d:"M5 12h14M13 6l6 6-6 6"})});default:return null}}function hg(){const[e,t]=g.useState(""),[n,a]=g.useState("all"),[i,s]=g.useState(null),o=fg.filter(l=>{const d=l.label.toLowerCase().includes(e.toLowerCase())||l.desc.toLowerCase().includes(e.toLowerCase()),c=n==="all"||l.status===n;return d&&c});return r.jsxs("div",{className:"rag-collections",children:[r.jsx("style",{children:`
.rag-collections {
  --ink: #0c0f17;
  --navy: #0a1730;
  --paper: #f1f0fa;
  --paper-2: #e8e6f6;
  --panel: #ffffff;
  --indigo: #4f46e5;
  --indigo-2: #7c74ff;
  --amber: #ffb020;
  --green: #22c55e;
  --slate: #5b6270;
  --slate-l: #9296a6;
  --line: rgba(12, 15, 23, 0.1);
  --radius: 22px;

  font-family: "Inter", sans-serif;
  background: var(--paper);
  color: var(--ink);
  min-height: 100vh;
  -webkit-font-smoothing: antialiased;
}
.rag-collections *, .rag-collections *::before, .rag-collections *::after { box-sizing: border-box; }
.rag-collections h1, .rag-collections h2, .rag-collections h3 { font-family: "Space Grotesk", sans-serif; margin: 0; }
.rag-collections a { color: inherit; text-decoration: none; }
.rag-collections button { font-family: inherit; cursor: pointer; }

/* nav */
.rag-collections nav {
  position: sticky; top: 0; z-index: 100;
  display: flex; align-items: center; justify-content: space-between;
  padding: 18px 40px;
  background: var(--navy);
  border-bottom: 1px solid rgba(255,255,255,0.08);
}
.rag-collections .brand {
  display: flex; align-items: center; gap: 10px;
  font-weight: 700; font-size: 18px; color: #fff;
  font-family: "Space Grotesk", sans-serif;
}
.rag-collections .brand-mark {
  width: 28px; height: 28px; border-radius: 8px;
  background: linear-gradient(135deg, var(--indigo), var(--indigo-2));
  display: flex; align-items: center; justify-content: center;
  color: #fff; font-size: 14px; font-weight: 700;
}
.rag-collections .nav-right {
  display: flex; align-items: center; gap: 16px;
}
.rag-collections .nav-link { color: rgba(255,255,255,0.65); font-size: 14px; transition: color 0.2s; }
.rag-collections .nav-link:hover { color: #fff; }
.rag-collections .nav-btn {
  display: inline-flex; align-items: center; gap: 7px;
  padding: 9px 18px; border-radius: 100px;
  background: var(--indigo); color: #fff;
  border: none; font-size: 13.5px; font-weight: 600;
  transition: background 0.2s;
}
.rag-collections .nav-btn:hover { background: var(--indigo-2); }

/* page */
.rag-collections .page-wrap {
  max-width: 1100px; margin: 0 auto; padding: 52px 32px 100px;
}

/* header */
.rag-collections .page-head { margin-bottom: 44px; }
.rag-collections .eyebrow {
  display: inline-flex; align-items: center; gap: 8px;
  font-family: "IBM Plex Mono", monospace;
  font-size: 12px; letter-spacing: 0.08em;
  text-transform: uppercase; color: var(--indigo);
  margin-bottom: 14px;
}
.rag-collections .eyebrow::before {
  content: ""; width: 7px; height: 7px; border-radius: 50%;
  background: var(--amber); box-shadow: 0 0 0 4px rgba(255,176,32,0.2);
}
.rag-collections .page-head h1 {
  font-size: clamp(30px, 4vw, 44px); font-weight: 700;
  letter-spacing: -0.02em; margin-bottom: 12px;
}
.rag-collections .page-head p { font-size: 15.5px; color: var(--slate); line-height: 1.6; max-width: 520px; }

/* toolbar */
.rag-collections .toolbar {
  display: flex; align-items: center; gap: 14px;
  margin-bottom: 32px; flex-wrap: wrap;
}
.rag-collections .search-wrap {
  flex: 1; min-width: 200px;
  display: flex; align-items: center; gap: 10px;
  background: var(--panel); border: 1.5px solid var(--line);
  border-radius: 12px; padding: 10px 16px;
  transition: border-color 0.25s, box-shadow 0.25s;
}
.rag-collections .search-wrap:focus-within {
  border-color: var(--indigo); box-shadow: 0 0 0 4px rgba(79,70,229,0.1);
}
.rag-collections .search-wrap input {
  border: none; background: transparent; flex: 1;
  font-size: 14.5px; color: var(--ink); outline: none;
  font-family: "Inter", sans-serif;
}
.rag-collections .search-wrap input::placeholder { color: var(--slate-l); }
.rag-collections .filter-btns { display: flex; gap: 8px; }
.rag-collections .filter-btn {
  padding: 9px 16px; border-radius: 100px;
  border: 1.5px solid var(--line); background: var(--panel);
  font-size: 13px; font-weight: 500; color: var(--slate);
  transition: all 0.2s;
}
.rag-collections .filter-btn:hover { color: var(--ink); border-color: var(--ink); }
.rag-collections .filter-btn.active {
  background: var(--ink); color: #fff; border-color: transparent;
}

/* summary stats */
.rag-collections .summary-row {
  display: grid; grid-template-columns: repeat(4, 1fr);
  gap: 16px; margin-bottom: 36px;
}
@media (max-width: 860px) {
  .rag-collections .summary-row { grid-template-columns: repeat(2, 1fr); }
}
.rag-collections .sum-card {
  background: var(--panel); border: 1px solid var(--line);
  border-radius: 16px; padding: 20px;
}
.rag-collections .sum-val {
  font-size: 26px; font-weight: 700;
  font-family: "Space Grotesk", sans-serif;
  letter-spacing: -0.01em; margin-bottom: 5px;
}
.rag-collections .sum-label { font-size: 12.5px; color: var(--slate-l); }

/* collection cards */
.rag-collections .coll-list { display: flex; flex-direction: column; gap: 18px; }
.rag-collections .coll-card {
  background: var(--panel); border: 1px solid var(--line);
  border-radius: 22px; overflow: hidden;
  transition: box-shadow 0.25s;
}
.rag-collections .coll-card:hover { box-shadow: 0 8px 28px -10px rgba(12,15,23,0.15); }
.rag-collections .coll-main {
  display: flex; align-items: center; gap: 20px;
  padding: 24px 28px;
}
.rag-collections .coll-emoji-wrap {
  width: 58px; height: 58px; border-radius: 16px;
  display: flex; align-items: center; justify-content: center;
  font-size: 28px; flex-shrink: 0;
}
.rag-collections .coll-info { flex: 1; min-width: 0; }
.rag-collections .coll-name-row {
  display: flex; align-items: center; gap: 10px; margin-bottom: 5px;
}
.rag-collections .coll-name { font-size: 17px; font-weight: 700; }
.rag-collections .status-pill {
  display: inline-flex; align-items: center; gap: 5px;
  font-size: 11px; font-weight: 600; padding: 3px 9px; border-radius: 100px;
}
.rag-collections .status-pill.active { background: #dcfce7; color: #15803d; }
.rag-collections .status-pill.empty { background: var(--paper-2); color: var(--slate); }
.rag-collections .status-pill::before {
  content: ""; width: 5px; height: 5px; border-radius: 50%; background: currentColor;
}
.rag-collections .coll-desc { font-size: 13px; color: var(--slate); line-height: 1.5; }
.rag-collections .coll-metrics {
  display: flex; gap: 28px; align-items: center;
}
@media (max-width: 760px) {
  .rag-collections .coll-main { flex-wrap: wrap; }
  .rag-collections .coll-metrics { gap: 16px; }
}
.rag-collections .metric { text-align: right; }
.rag-collections .metric-val {
  font-size: 18px; font-weight: 700;
  font-family: "Space Grotesk", sans-serif;
}
.rag-collections .metric-label { font-size: 11.5px; color: var(--slate-l); }
.rag-collections .coll-actions-row {
  display: flex; gap: 8px; margin-left: 16px; flex-shrink: 0;
}
.rag-collections .ca-btn {
  display: inline-flex; align-items: center; gap: 6px;
  padding: 8px 14px; border-radius: 100px;
  border: 1px solid var(--line); background: var(--paper);
  font-size: 12.5px; font-weight: 500; color: var(--ink);
  transition: all 0.2s;
}
.rag-collections .ca-btn:hover { background: var(--paper-2); border-color: var(--slate-l); }
.rag-collections .ca-btn.primary {
  background: var(--ink); color: #fff; border-color: transparent;
}
.rag-collections .ca-btn.primary:hover { background: var(--indigo); }
.rag-collections .ca-btn.danger { color: #dc2626; border-color: #fecaca; }
.rag-collections .ca-btn.danger:hover { background: #fef2f2; }

/* expanded details */
.rag-collections .coll-details {
  border-top: 1px solid var(--line);
  padding: 20px 28px;
  background: var(--paper);
  display: grid; grid-template-columns: repeat(4, 1fr);
  gap: 20px;
}
@media (max-width: 760px) {
  .rag-collections .coll-details { grid-template-columns: repeat(2, 1fr); }
}
.rag-collections .detail-item .d-label {
  font-family: "IBM Plex Mono", monospace;
  font-size: 10.5px; text-transform: uppercase; letter-spacing: 0.07em;
  color: var(--slate-l); margin-bottom: 5px;
}
.rag-collections .detail-item .d-val {
  font-size: 14px; font-weight: 600;
}
.rag-collections .expand-btn {
  display: flex; align-items: center; gap: 6px;
  padding: 6px 12px; border-radius: 8px;
  border: none; background: none;
  font-size: 12.5px; color: var(--slate);
  transition: color 0.2s, background 0.2s;
}
.rag-collections .expand-btn:hover { color: var(--indigo); background: var(--paper-2); }

/* empty state */
.rag-collections .empty-state {
  text-align: center; padding: 60px 24px;
  background: var(--panel); border: 1px solid var(--line); border-radius: 22px;
}
.rag-collections .empty-icon {
  font-size: 48px; margin-bottom: 18px;
}
.rag-collections .empty-state h3 { font-size: 20px; font-weight: 700; margin-bottom: 10px; }
.rag-collections .empty-state p { font-size: 14.5px; color: var(--slate); margin-bottom: 24px; }
`}),r.jsxs("nav",{children:[r.jsxs(I,{to:"/",className:"brand",children:[r.jsx("span",{className:"brand-mark",children:"N"}),"NexusRAG"]}),r.jsxs("div",{className:"nav-right",children:[r.jsx(I,{to:"/chat",className:"nav-link",children:"Query"}),r.jsx(I,{to:"/admin",className:"nav-link",children:"Admin"}),r.jsxs(I,{to:"/upload",className:"nav-btn",children:[r.jsx(er,{name:"plus",size:14})," Add Documents"]})]})]}),r.jsxs("div",{className:"page-wrap",children:[r.jsxs("div",{className:"page-head",children:[r.jsx("span",{className:"eyebrow",children:"Knowledge Base"}),r.jsx("h1",{children:"Document Collections"}),r.jsx("p",{children:"Each collection is a separate vector store for one industry. All share the same retrieval pipeline — only the document set being searched changes."})]}),r.jsxs("div",{className:"summary-row",children:[r.jsxs("div",{className:"sum-card",children:[r.jsx("div",{className:"sum-val",children:"3,127"}),r.jsx("div",{className:"sum-label",children:"Total Documents"})]}),r.jsxs("div",{className:"sum-card",children:[r.jsx("div",{className:"sum-val",children:"66,860"}),r.jsx("div",{className:"sum-label",children:"Embedded Chunks"})]}),r.jsxs("div",{className:"sum-card",children:[r.jsx("div",{className:"sum-val",children:"9,334"}),r.jsx("div",{className:"sum-label",children:"Total Queries"})]}),r.jsxs("div",{className:"sum-card",children:[r.jsx("div",{className:"sum-val",children:"3 / 4"}),r.jsx("div",{className:"sum-label",children:"Active Collections"})]})]}),r.jsxs("div",{className:"toolbar",children:[r.jsxs("div",{className:"search-wrap",children:[r.jsx(er,{name:"search",size:16}),r.jsx("input",{type:"text",placeholder:"Search collections…",value:e,onChange:l=>t(l.target.value)})]}),r.jsx("div",{className:"filter-btns",children:["all","active","empty"].map(l=>r.jsx("button",{className:`filter-btn${n===l?" active":""}`,onClick:()=>a(l),children:l==="all"?"All":l.charAt(0).toUpperCase()+l.slice(1)},l))})]}),r.jsx("div",{className:"coll-list",children:o.length===0?r.jsxs("div",{className:"empty-state",children:[r.jsx("div",{className:"empty-icon",children:"🔍"}),r.jsx("h3",{children:"No collections match"}),r.jsx("p",{children:"Try a different search or filter."})]}):o.map(l=>r.jsxs("div",{className:"coll-card",children:[r.jsxs("div",{className:"coll-main",children:[r.jsx("div",{className:"coll-emoji-wrap",style:{background:l.bg},children:l.emoji}),r.jsxs("div",{className:"coll-info",children:[r.jsxs("div",{className:"coll-name-row",children:[r.jsx("span",{className:"coll-name",children:l.label}),r.jsx("span",{className:`status-pill ${l.status}`,children:l.status})]}),r.jsx("div",{className:"coll-desc",children:l.desc}),r.jsx("div",{style:{marginTop:8,display:"flex",gap:8},children:r.jsx("button",{className:"expand-btn",onClick:()=>s(i===l.key?null:l.key),children:i===l.key?"▲ Hide details":"▼ Show details"})})]}),l.status==="active"&&r.jsxs("div",{className:"coll-metrics",children:[r.jsxs("div",{className:"metric",children:[r.jsx("div",{className:"metric-val",children:l.docs.toLocaleString()}),r.jsx("div",{className:"metric-label",children:"Docs"})]}),r.jsxs("div",{className:"metric",children:[r.jsxs("div",{className:"metric-val",children:[(l.chunks/1e3).toFixed(1),"k"]}),r.jsx("div",{className:"metric-label",children:"Chunks"})]}),r.jsxs("div",{className:"metric",children:[r.jsx("div",{className:"metric-val",children:l.queries.toLocaleString()}),r.jsx("div",{className:"metric-label",children:"Queries"})]})]}),r.jsxs("div",{className:"coll-actions-row",children:[l.status==="active"&&r.jsxs(I,{to:"/chat",className:"ca-btn primary",children:[r.jsx(er,{name:"chat",size:13})," Query"]}),r.jsxs(I,{to:"/upload",className:"ca-btn",children:[r.jsx(er,{name:"upload",size:13})," Add Docs"]}),l.status==="active"&&r.jsx("button",{className:"ca-btn danger",children:r.jsx(er,{name:"trash",size:13})})]})]}),i===l.key&&r.jsxs("div",{className:"coll-details",children:[r.jsxs("div",{className:"detail-item",children:[r.jsx("div",{className:"d-label",children:"Embedding Model"}),r.jsx("div",{className:"d-val",children:l.embeddingModel})]}),r.jsxs("div",{className:"detail-item",children:[r.jsx("div",{className:"d-label",children:"Retriever"}),r.jsx("div",{className:"d-val",children:l.retriever})]}),r.jsxs("div",{className:"detail-item",children:[r.jsx("div",{className:"d-label",children:"Similarity"}),r.jsx("div",{className:"d-val",children:l.similarity})]}),r.jsxs("div",{className:"detail-item",children:[r.jsx("div",{className:"d-label",children:"Reranker"}),r.jsx("div",{className:"d-val",children:l.reranker})]}),r.jsxs("div",{className:"detail-item",children:[r.jsx("div",{className:"d-label",children:"Storage Size"}),r.jsx("div",{className:"d-val",children:l.size})]}),r.jsxs("div",{className:"detail-item",children:[r.jsx("div",{className:"d-label",children:"Last Updated"}),r.jsx("div",{className:"d-val",children:l.lastUpdated})]}),r.jsxs("div",{className:"detail-item",children:[r.jsx("div",{className:"d-label",children:"Chunking"}),r.jsx("div",{className:"d-val",children:"Semantic (topic-based)"})]}),r.jsxs("div",{className:"detail-item",children:[r.jsx("div",{className:"d-label",children:"Hybrid Search"}),r.jsx("div",{className:"d-val",children:"Dense + BM25"})]})]})]},l.key))})]})]})}function et({children:e,adminOnly:t=!1}){const{isLoggedIn:n,isAdmin:a}=Un(),i=an();if(t){if(!n||!a)return r.jsx(Ps,{to:"/admin-login",state:{from:i},replace:!0})}else if(!n)return r.jsx(Ps,{to:"/login",state:{from:i},replace:!0});return e}function mg(){return r.jsx(vm,{children:r.jsx(xm,{children:r.jsx(um,{children:r.jsxs(am,{children:[r.jsx(ge,{path:"/",element:r.jsx(zm,{})}),r.jsx(ge,{path:"/login",element:r.jsx(Mm,{})}),r.jsx(ge,{path:"/signup",element:r.jsx(Pm,{})}),r.jsx(ge,{path:"/admin-login",element:r.jsx(Rm,{})}),r.jsx(ge,{path:"/dashboard",element:r.jsx(et,{children:r.jsx(Bm,{})})}),r.jsx(ge,{path:"/chat",element:r.jsx(et,{children:r.jsx(Vm,{})})}),r.jsx(ge,{path:"/notifications",element:r.jsx(et,{children:r.jsx(Qm,{})})}),r.jsx(ge,{path:"/meetings",element:r.jsx(et,{children:r.jsx(Zm,{})})}),r.jsx(ge,{path:"/notes",element:r.jsx(et,{children:r.jsx(ng,{})})}),r.jsx(ge,{path:"/settings",element:r.jsx(et,{children:r.jsx(ag,{})})}),r.jsx(ge,{path:"/help",element:r.jsx(et,{children:r.jsx(og,{})})}),r.jsx(ge,{path:"/admin",element:r.jsx(et,{adminOnly:!0,children:r.jsx(cg,{})})}),r.jsx(ge,{path:"/upload",element:r.jsx(et,{adminOnly:!0,children:r.jsx(pg,{})})}),r.jsx(ge,{path:"/collections",element:r.jsx(et,{adminOnly:!0,children:r.jsx(hg,{})})}),r.jsx(ge,{path:"*",element:r.jsx(Ps,{to:"/",replace:!0})})]})})})})}_i.createRoot(document.getElementById("root")).render(r.jsx(yd.StrictMode,{children:r.jsx(mg,{})}));
