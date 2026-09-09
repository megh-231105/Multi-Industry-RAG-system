function zu(e,t){for(var n=0;n<t.length;n++){const a=t[n];if(typeof a!="string"&&!Array.isArray(a)){for(const i in a)if(i!=="default"&&!(i in e)){const s=Object.getOwnPropertyDescriptor(a,i);s&&Object.defineProperty(e,i,s.get?s:{enumerable:!0,get:()=>a[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))a(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&a(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function Cu(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var ed={exports:{}},Ra={},td={exports:{}},D={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Nr=Symbol.for("react.element"),Mu=Symbol.for("react.portal"),Eu=Symbol.for("react.fragment"),Pu=Symbol.for("react.strict_mode"),Iu=Symbol.for("react.profiler"),Tu=Symbol.for("react.provider"),Ru=Symbol.for("react.context"),Lu=Symbol.for("react.forward_ref"),_u=Symbol.for("react.suspense"),Au=Symbol.for("react.memo"),Du=Symbol.for("react.lazy"),Co=Symbol.iterator;function Fu(e){return e===null||typeof e!="object"?null:(e=Co&&e[Co]||e["@@iterator"],typeof e=="function"?e:null)}var nd={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},rd=Object.assign,ad={};function Pn(e,t,n){this.props=e,this.context=t,this.refs=ad,this.updater=n||nd}Pn.prototype.isReactComponent={};Pn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Pn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function id(){}id.prototype=Pn.prototype;function Cs(e,t,n){this.props=e,this.context=t,this.refs=ad,this.updater=n||nd}var Ms=Cs.prototype=new id;Ms.constructor=Cs;rd(Ms,Pn.prototype);Ms.isPureReactComponent=!0;var Mo=Array.isArray,sd=Object.prototype.hasOwnProperty,Es={current:null},od={key:!0,ref:!0,__self:!0,__source:!0};function ld(e,t,n){var a,i={},s=null,o=null;if(t!=null)for(a in t.ref!==void 0&&(o=t.ref),t.key!==void 0&&(s=""+t.key),t)sd.call(t,a)&&!od.hasOwnProperty(a)&&(i[a]=t[a]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var d=Array(l),c=0;c<l;c++)d[c]=arguments[c+2];i.children=d}if(e&&e.defaultProps)for(a in l=e.defaultProps,l)i[a]===void 0&&(i[a]=l[a]);return{$$typeof:Nr,type:e,key:s,ref:o,props:i,_owner:Es.current}}function Ou(e,t){return{$$typeof:Nr,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Ps(e){return typeof e=="object"&&e!==null&&e.$$typeof===Nr}function Bu(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Eo=/\/+/g;function Xa(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Bu(""+e.key):t.toString(36)}function Kr(e,t,n,a,i){var s=typeof e;(s==="undefined"||s==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case Nr:case Mu:o=!0}}if(o)return o=e,i=i(o),e=a===""?"."+Xa(o,0):a,Mo(i)?(n="",e!=null&&(n=e.replace(Eo,"$&/")+"/"),Kr(i,t,n,"",function(c){return c})):i!=null&&(Ps(i)&&(i=Ou(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Eo,"$&/")+"/")+e)),t.push(i)),1;if(o=0,a=a===""?".":a+":",Mo(e))for(var l=0;l<e.length;l++){s=e[l];var d=a+Xa(s,l);o+=Kr(s,t,n,d,i)}else if(d=Fu(e),typeof d=="function")for(e=d.call(e),l=0;!(s=e.next()).done;)s=s.value,d=a+Xa(s,l++),o+=Kr(s,t,n,d,i);else if(s==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return o}function Pr(e,t,n){if(e==null)return e;var a=[],i=0;return Kr(e,a,"","",function(s){return t.call(n,s,i++)}),a}function Uu(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var ve={current:null},Xr={transition:null},$u={ReactCurrentDispatcher:ve,ReactCurrentBatchConfig:Xr,ReactCurrentOwner:Es};function dd(){throw Error("act(...) is not supported in production builds of React.")}D.Children={map:Pr,forEach:function(e,t,n){Pr(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Pr(e,function(){t++}),t},toArray:function(e){return Pr(e,function(t){return t})||[]},only:function(e){if(!Ps(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};D.Component=Pn;D.Fragment=Eu;D.Profiler=Iu;D.PureComponent=Cs;D.StrictMode=Pu;D.Suspense=_u;D.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=$u;D.act=dd;D.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var a=rd({},e.props),i=e.key,s=e.ref,o=e._owner;if(t!=null){if(t.ref!==void 0&&(s=t.ref,o=Es.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(d in t)sd.call(t,d)&&!od.hasOwnProperty(d)&&(a[d]=t[d]===void 0&&l!==void 0?l[d]:t[d])}var d=arguments.length-2;if(d===1)a.children=n;else if(1<d){l=Array(d);for(var c=0;c<d;c++)l[c]=arguments[c+2];a.children=l}return{$$typeof:Nr,type:e.type,key:i,ref:s,props:a,_owner:o}};D.createContext=function(e){return e={$$typeof:Ru,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Tu,_context:e},e.Consumer=e};D.createElement=ld;D.createFactory=function(e){var t=ld.bind(null,e);return t.type=e,t};D.createRef=function(){return{current:null}};D.forwardRef=function(e){return{$$typeof:Lu,render:e}};D.isValidElement=Ps;D.lazy=function(e){return{$$typeof:Du,_payload:{_status:-1,_result:e},_init:Uu}};D.memo=function(e,t){return{$$typeof:Au,type:e,compare:t===void 0?null:t}};D.startTransition=function(e){var t=Xr.transition;Xr.transition={};try{e()}finally{Xr.transition=t}};D.unstable_act=dd;D.useCallback=function(e,t){return ve.current.useCallback(e,t)};D.useContext=function(e){return ve.current.useContext(e)};D.useDebugValue=function(){};D.useDeferredValue=function(e){return ve.current.useDeferredValue(e)};D.useEffect=function(e,t){return ve.current.useEffect(e,t)};D.useId=function(){return ve.current.useId()};D.useImperativeHandle=function(e,t,n){return ve.current.useImperativeHandle(e,t,n)};D.useInsertionEffect=function(e,t){return ve.current.useInsertionEffect(e,t)};D.useLayoutEffect=function(e,t){return ve.current.useLayoutEffect(e,t)};D.useMemo=function(e,t){return ve.current.useMemo(e,t)};D.useReducer=function(e,t,n){return ve.current.useReducer(e,t,n)};D.useRef=function(e){return ve.current.useRef(e)};D.useState=function(e){return ve.current.useState(e)};D.useSyncExternalStore=function(e,t,n){return ve.current.useSyncExternalStore(e,t,n)};D.useTransition=function(){return ve.current.useTransition()};D.version="18.3.1";td.exports=D;var g=td.exports;const cd=Cu(g),Hu=zu({__proto__:null,default:cd},[g]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Vu=g,Wu=Symbol.for("react.element"),Gu=Symbol.for("react.fragment"),Qu=Object.prototype.hasOwnProperty,Yu=Vu.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,qu={key:!0,ref:!0,__self:!0,__source:!0};function ud(e,t,n){var a,i={},s=null,o=null;n!==void 0&&(s=""+n),t.key!==void 0&&(s=""+t.key),t.ref!==void 0&&(o=t.ref);for(a in t)Qu.call(t,a)&&!qu.hasOwnProperty(a)&&(i[a]=t[a]);if(e&&e.defaultProps)for(a in t=e.defaultProps,t)i[a]===void 0&&(i[a]=t[a]);return{$$typeof:Wu,type:e,key:s,ref:o,props:i,_owner:Yu.current}}Ra.Fragment=Gu;Ra.jsx=ud;Ra.jsxs=ud;ed.exports=Ra;var r=ed.exports,Ei={},pd={exports:{}},Pe={},fd={exports:{}},md={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(E,y){var P=E.length;E.push(y);e:for(;0<P;){var A=P-1>>>1,$=E[A];if(0<i($,y))E[A]=y,E[P]=$,P=A;else break e}}function n(E){return E.length===0?null:E[0]}function a(E){if(E.length===0)return null;var y=E[0],P=E.pop();if(P!==y){E[0]=P;e:for(var A=0,$=E.length,Ft=$>>>1;A<Ft;){var Se=2*(A+1)-1,Ka=E[Se],Ot=Se+1,Er=E[Ot];if(0>i(Ka,P))Ot<$&&0>i(Er,Ka)?(E[A]=Er,E[Ot]=P,A=Ot):(E[A]=Ka,E[Se]=P,A=Se);else if(Ot<$&&0>i(Er,P))E[A]=Er,E[Ot]=P,A=Ot;else break e}}return y}function i(E,y){var P=E.sortIndex-y.sortIndex;return P!==0?P:E.id-y.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;e.unstable_now=function(){return s.now()}}else{var o=Date,l=o.now();e.unstable_now=function(){return o.now()-l}}var d=[],c=[],m=1,h=null,x=3,j=!1,k=!1,v=!1,b=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,u=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function p(E){for(var y=n(c);y!==null;){if(y.callback===null)a(c);else if(y.startTime<=E)a(c),y.sortIndex=y.expirationTime,t(d,y);else break;y=n(c)}}function w(E){if(v=!1,p(E),!k)if(n(d)!==null)k=!0,pt(S);else{var y=n(c);y!==null&&L(w,y.startTime-E)}}function S(E,y){k=!1,v&&(v=!1,f(M),M=-1),j=!0;var P=x;try{for(p(y),h=n(d);h!==null&&(!(h.expirationTime>y)||E&&!T());){var A=h.callback;if(typeof A=="function"){h.callback=null,x=h.priorityLevel;var $=A(h.expirationTime<=y);y=e.unstable_now(),typeof $=="function"?h.callback=$:h===n(d)&&a(d),p(y)}else a(d);h=n(d)}if(h!==null)var Ft=!0;else{var Se=n(c);Se!==null&&L(w,Se.startTime-y),Ft=!1}return Ft}finally{h=null,x=P,j=!1}}var C=!1,N=null,M=-1,B=5,_=-1;function T(){return!(e.unstable_now()-_<B)}function K(){if(N!==null){var E=e.unstable_now();_=E;var y=!0;try{y=N(!0,E)}finally{y?ae():(C=!1,N=null)}}else C=!1}var ae;if(typeof u=="function")ae=function(){u(K)};else if(typeof MessageChannel<"u"){var Dt=new MessageChannel,Qe=Dt.port2;Dt.port1.onmessage=K,ae=function(){Qe.postMessage(null)}}else ae=function(){b(K,0)};function pt(E){N=E,C||(C=!0,ae())}function L(E,y){M=b(function(){E(e.unstable_now())},y)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(E){E.callback=null},e.unstable_continueExecution=function(){k||j||(k=!0,pt(S))},e.unstable_forceFrameRate=function(E){0>E||125<E?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):B=0<E?Math.floor(1e3/E):5},e.unstable_getCurrentPriorityLevel=function(){return x},e.unstable_getFirstCallbackNode=function(){return n(d)},e.unstable_next=function(E){switch(x){case 1:case 2:case 3:var y=3;break;default:y=x}var P=x;x=y;try{return E()}finally{x=P}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(E,y){switch(E){case 1:case 2:case 3:case 4:case 5:break;default:E=3}var P=x;x=E;try{return y()}finally{x=P}},e.unstable_scheduleCallback=function(E,y,P){var A=e.unstable_now();switch(typeof P=="object"&&P!==null?(P=P.delay,P=typeof P=="number"&&0<P?A+P:A):P=A,E){case 1:var $=-1;break;case 2:$=250;break;case 5:$=1073741823;break;case 4:$=1e4;break;default:$=5e3}return $=P+$,E={id:m++,callback:y,priorityLevel:E,startTime:P,expirationTime:$,sortIndex:-1},P>A?(E.sortIndex=P,t(c,E),n(d)===null&&E===n(c)&&(v?(f(M),M=-1):v=!0,L(w,P-A))):(E.sortIndex=$,t(d,E),k||j||(k=!0,pt(S))),E},e.unstable_shouldYield=T,e.unstable_wrapCallback=function(E){var y=x;return function(){var P=x;x=y;try{return E.apply(this,arguments)}finally{x=P}}}})(md);fd.exports=md;var Ku=fd.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xu=g,Ee=Ku;function z(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var hd=new Set,ir={};function Jt(e,t){kn(e,t),kn(e+"Capture",t)}function kn(e,t){for(ir[e]=t,e=0;e<t.length;e++)hd.add(t[e])}var ot=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Pi=Object.prototype.hasOwnProperty,Ju=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Po={},Io={};function Zu(e){return Pi.call(Io,e)?!0:Pi.call(Po,e)?!1:Ju.test(e)?Io[e]=!0:(Po[e]=!0,!1)}function ep(e,t,n,a){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return a?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function tp(e,t,n,a){if(t===null||typeof t>"u"||ep(e,t,n,a))return!0;if(a)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function ye(e,t,n,a,i,s,o){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=a,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=s,this.removeEmptyString=o}var de={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){de[e]=new ye(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];de[t]=new ye(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){de[e]=new ye(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){de[e]=new ye(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){de[e]=new ye(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){de[e]=new ye(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){de[e]=new ye(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){de[e]=new ye(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){de[e]=new ye(e,5,!1,e.toLowerCase(),null,!1,!1)});var Is=/[\-:]([a-z])/g;function Ts(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Is,Ts);de[t]=new ye(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Is,Ts);de[t]=new ye(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Is,Ts);de[t]=new ye(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){de[e]=new ye(e,1,!1,e.toLowerCase(),null,!1,!1)});de.xlinkHref=new ye("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){de[e]=new ye(e,1,!1,e.toLowerCase(),null,!0,!0)});function Rs(e,t,n,a){var i=de.hasOwnProperty(t)?de[t]:null;(i!==null?i.type!==0:a||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(tp(t,n,i,a)&&(n=null),a||i===null?Zu(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,a=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,a?e.setAttributeNS(a,t,n):e.setAttribute(t,n))))}var ut=Xu.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ir=Symbol.for("react.element"),an=Symbol.for("react.portal"),sn=Symbol.for("react.fragment"),Ls=Symbol.for("react.strict_mode"),Ii=Symbol.for("react.profiler"),gd=Symbol.for("react.provider"),xd=Symbol.for("react.context"),_s=Symbol.for("react.forward_ref"),Ti=Symbol.for("react.suspense"),Ri=Symbol.for("react.suspense_list"),As=Symbol.for("react.memo"),mt=Symbol.for("react.lazy"),vd=Symbol.for("react.offscreen"),To=Symbol.iterator;function An(e){return e===null||typeof e!="object"?null:(e=To&&e[To]||e["@@iterator"],typeof e=="function"?e:null)}var q=Object.assign,Ja;function Gn(e){if(Ja===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Ja=t&&t[1]||""}return`
`+Ja+e}var Za=!1;function ei(e,t){if(!e||Za)return"";Za=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var a=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){a=c}e.call(t.prototype)}else{try{throw Error()}catch(c){a=c}e()}}catch(c){if(c&&a&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),s=a.stack.split(`
`),o=i.length-1,l=s.length-1;1<=o&&0<=l&&i[o]!==s[l];)l--;for(;1<=o&&0<=l;o--,l--)if(i[o]!==s[l]){if(o!==1||l!==1)do if(o--,l--,0>l||i[o]!==s[l]){var d=`
`+i[o].replace(" at new "," at ");return e.displayName&&d.includes("<anonymous>")&&(d=d.replace("<anonymous>",e.displayName)),d}while(1<=o&&0<=l);break}}}finally{Za=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Gn(e):""}function np(e){switch(e.tag){case 5:return Gn(e.type);case 16:return Gn("Lazy");case 13:return Gn("Suspense");case 19:return Gn("SuspenseList");case 0:case 2:case 15:return e=ei(e.type,!1),e;case 11:return e=ei(e.type.render,!1),e;case 1:return e=ei(e.type,!0),e;default:return""}}function Li(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case sn:return"Fragment";case an:return"Portal";case Ii:return"Profiler";case Ls:return"StrictMode";case Ti:return"Suspense";case Ri:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case xd:return(e.displayName||"Context")+".Consumer";case gd:return(e._context.displayName||"Context")+".Provider";case _s:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case As:return t=e.displayName||null,t!==null?t:Li(e.type)||"Memo";case mt:t=e._payload,e=e._init;try{return Li(e(t))}catch{}}return null}function rp(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Li(t);case 8:return t===Ls?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Pt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function yd(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function ap(e){var t=yd(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),a=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(o){a=""+o,s.call(this,o)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return a},setValue:function(o){a=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Tr(e){e._valueTracker||(e._valueTracker=ap(e))}function bd(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),a="";return e&&(a=yd(e)?e.checked?"true":"false":e.value),e=a,e!==n?(t.setValue(e),!0):!1}function la(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function _i(e,t){var n=t.checked;return q({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Ro(e,t){var n=t.defaultValue==null?"":t.defaultValue,a=t.checked!=null?t.checked:t.defaultChecked;n=Pt(t.value!=null?t.value:n),e._wrapperState={initialChecked:a,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function jd(e,t){t=t.checked,t!=null&&Rs(e,"checked",t,!1)}function Ai(e,t){jd(e,t);var n=Pt(t.value),a=t.type;if(n!=null)a==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(a==="submit"||a==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Di(e,t.type,n):t.hasOwnProperty("defaultValue")&&Di(e,t.type,Pt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Lo(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var a=t.type;if(!(a!=="submit"&&a!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Di(e,t,n){(t!=="number"||la(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Qn=Array.isArray;function xn(e,t,n,a){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&a&&(e[n].defaultSelected=!0)}else{for(n=""+Pt(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,a&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Fi(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(z(91));return q({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function _o(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(z(92));if(Qn(n)){if(1<n.length)throw Error(z(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Pt(n)}}function wd(e,t){var n=Pt(t.value),a=Pt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),a!=null&&(e.defaultValue=""+a)}function Ao(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function kd(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Oi(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?kd(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Rr,Nd=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,a,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,a,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Rr=Rr||document.createElement("div"),Rr.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Rr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function sr(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Kn={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},ip=["Webkit","ms","Moz","O"];Object.keys(Kn).forEach(function(e){ip.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Kn[t]=Kn[e]})});function Sd(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Kn.hasOwnProperty(e)&&Kn[e]?(""+t).trim():t+"px"}function zd(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var a=n.indexOf("--")===0,i=Sd(n,t[n],a);n==="float"&&(n="cssFloat"),a?e.setProperty(n,i):e[n]=i}}var sp=q({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Bi(e,t){if(t){if(sp[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(z(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(z(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(z(61))}if(t.style!=null&&typeof t.style!="object")throw Error(z(62))}}function Ui(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var $i=null;function Ds(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Hi=null,vn=null,yn=null;function Do(e){if(e=Cr(e)){if(typeof Hi!="function")throw Error(z(280));var t=e.stateNode;t&&(t=Fa(t),Hi(e.stateNode,e.type,t))}}function Cd(e){vn?yn?yn.push(e):yn=[e]:vn=e}function Md(){if(vn){var e=vn,t=yn;if(yn=vn=null,Do(e),t)for(e=0;e<t.length;e++)Do(t[e])}}function Ed(e,t){return e(t)}function Pd(){}var ti=!1;function Id(e,t,n){if(ti)return e(t,n);ti=!0;try{return Ed(e,t,n)}finally{ti=!1,(vn!==null||yn!==null)&&(Pd(),Md())}}function or(e,t){var n=e.stateNode;if(n===null)return null;var a=Fa(n);if(a===null)return null;n=a[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(e=e.type,a=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!a;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(z(231,t,typeof n));return n}var Vi=!1;if(ot)try{var Dn={};Object.defineProperty(Dn,"passive",{get:function(){Vi=!0}}),window.addEventListener("test",Dn,Dn),window.removeEventListener("test",Dn,Dn)}catch{Vi=!1}function op(e,t,n,a,i,s,o,l,d){var c=Array.prototype.slice.call(arguments,3);try{t.apply(n,c)}catch(m){this.onError(m)}}var Xn=!1,da=null,ca=!1,Wi=null,lp={onError:function(e){Xn=!0,da=e}};function dp(e,t,n,a,i,s,o,l,d){Xn=!1,da=null,op.apply(lp,arguments)}function cp(e,t,n,a,i,s,o,l,d){if(dp.apply(this,arguments),Xn){if(Xn){var c=da;Xn=!1,da=null}else throw Error(z(198));ca||(ca=!0,Wi=c)}}function Zt(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Td(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Fo(e){if(Zt(e)!==e)throw Error(z(188))}function up(e){var t=e.alternate;if(!t){if(t=Zt(e),t===null)throw Error(z(188));return t!==e?null:e}for(var n=e,a=t;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(a=i.return,a!==null){n=a;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Fo(i),e;if(s===a)return Fo(i),t;s=s.sibling}throw Error(z(188))}if(n.return!==a.return)n=i,a=s;else{for(var o=!1,l=i.child;l;){if(l===n){o=!0,n=i,a=s;break}if(l===a){o=!0,a=i,n=s;break}l=l.sibling}if(!o){for(l=s.child;l;){if(l===n){o=!0,n=s,a=i;break}if(l===a){o=!0,a=s,n=i;break}l=l.sibling}if(!o)throw Error(z(189))}}if(n.alternate!==a)throw Error(z(190))}if(n.tag!==3)throw Error(z(188));return n.stateNode.current===n?e:t}function Rd(e){return e=up(e),e!==null?Ld(e):null}function Ld(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Ld(e);if(t!==null)return t;e=e.sibling}return null}var _d=Ee.unstable_scheduleCallback,Oo=Ee.unstable_cancelCallback,pp=Ee.unstable_shouldYield,fp=Ee.unstable_requestPaint,Z=Ee.unstable_now,mp=Ee.unstable_getCurrentPriorityLevel,Fs=Ee.unstable_ImmediatePriority,Ad=Ee.unstable_UserBlockingPriority,ua=Ee.unstable_NormalPriority,hp=Ee.unstable_LowPriority,Dd=Ee.unstable_IdlePriority,La=null,Ze=null;function gp(e){if(Ze&&typeof Ze.onCommitFiberRoot=="function")try{Ze.onCommitFiberRoot(La,e,void 0,(e.current.flags&128)===128)}catch{}}var Ve=Math.clz32?Math.clz32:yp,xp=Math.log,vp=Math.LN2;function yp(e){return e>>>=0,e===0?32:31-(xp(e)/vp|0)|0}var Lr=64,_r=4194304;function Yn(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function pa(e,t){var n=e.pendingLanes;if(n===0)return 0;var a=0,i=e.suspendedLanes,s=e.pingedLanes,o=n&268435455;if(o!==0){var l=o&~i;l!==0?a=Yn(l):(s&=o,s!==0&&(a=Yn(s)))}else o=n&~i,o!==0?a=Yn(o):s!==0&&(a=Yn(s));if(a===0)return 0;if(t!==0&&t!==a&&!(t&i)&&(i=a&-a,s=t&-t,i>=s||i===16&&(s&4194240)!==0))return t;if(a&4&&(a|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=a;0<t;)n=31-Ve(t),i=1<<n,a|=e[n],t&=~i;return a}function bp(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function jp(e,t){for(var n=e.suspendedLanes,a=e.pingedLanes,i=e.expirationTimes,s=e.pendingLanes;0<s;){var o=31-Ve(s),l=1<<o,d=i[o];d===-1?(!(l&n)||l&a)&&(i[o]=bp(l,t)):d<=t&&(e.expiredLanes|=l),s&=~l}}function Gi(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Fd(){var e=Lr;return Lr<<=1,!(Lr&4194240)&&(Lr=64),e}function ni(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Sr(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Ve(t),e[t]=n}function wp(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var a=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-Ve(n),s=1<<i;t[i]=0,a[i]=-1,e[i]=-1,n&=~s}}function Os(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var a=31-Ve(n),i=1<<a;i&t|e[a]&t&&(e[a]|=t),n&=~i}}var U=0;function Od(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Bd,Bs,Ud,$d,Hd,Qi=!1,Ar=[],jt=null,wt=null,kt=null,lr=new Map,dr=new Map,gt=[],kp="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Bo(e,t){switch(e){case"focusin":case"focusout":jt=null;break;case"dragenter":case"dragleave":wt=null;break;case"mouseover":case"mouseout":kt=null;break;case"pointerover":case"pointerout":lr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":dr.delete(t.pointerId)}}function Fn(e,t,n,a,i,s){return e===null||e.nativeEvent!==s?(e={blockedOn:t,domEventName:n,eventSystemFlags:a,nativeEvent:s,targetContainers:[i]},t!==null&&(t=Cr(t),t!==null&&Bs(t)),e):(e.eventSystemFlags|=a,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Np(e,t,n,a,i){switch(t){case"focusin":return jt=Fn(jt,e,t,n,a,i),!0;case"dragenter":return wt=Fn(wt,e,t,n,a,i),!0;case"mouseover":return kt=Fn(kt,e,t,n,a,i),!0;case"pointerover":var s=i.pointerId;return lr.set(s,Fn(lr.get(s)||null,e,t,n,a,i)),!0;case"gotpointercapture":return s=i.pointerId,dr.set(s,Fn(dr.get(s)||null,e,t,n,a,i)),!0}return!1}function Vd(e){var t=$t(e.target);if(t!==null){var n=Zt(t);if(n!==null){if(t=n.tag,t===13){if(t=Td(n),t!==null){e.blockedOn=t,Hd(e.priority,function(){Ud(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Jr(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Yi(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var a=new n.constructor(n.type,n);$i=a,n.target.dispatchEvent(a),$i=null}else return t=Cr(n),t!==null&&Bs(t),e.blockedOn=n,!1;t.shift()}return!0}function Uo(e,t,n){Jr(e)&&n.delete(t)}function Sp(){Qi=!1,jt!==null&&Jr(jt)&&(jt=null),wt!==null&&Jr(wt)&&(wt=null),kt!==null&&Jr(kt)&&(kt=null),lr.forEach(Uo),dr.forEach(Uo)}function On(e,t){e.blockedOn===t&&(e.blockedOn=null,Qi||(Qi=!0,Ee.unstable_scheduleCallback(Ee.unstable_NormalPriority,Sp)))}function cr(e){function t(i){return On(i,e)}if(0<Ar.length){On(Ar[0],e);for(var n=1;n<Ar.length;n++){var a=Ar[n];a.blockedOn===e&&(a.blockedOn=null)}}for(jt!==null&&On(jt,e),wt!==null&&On(wt,e),kt!==null&&On(kt,e),lr.forEach(t),dr.forEach(t),n=0;n<gt.length;n++)a=gt[n],a.blockedOn===e&&(a.blockedOn=null);for(;0<gt.length&&(n=gt[0],n.blockedOn===null);)Vd(n),n.blockedOn===null&&gt.shift()}var bn=ut.ReactCurrentBatchConfig,fa=!0;function zp(e,t,n,a){var i=U,s=bn.transition;bn.transition=null;try{U=1,Us(e,t,n,a)}finally{U=i,bn.transition=s}}function Cp(e,t,n,a){var i=U,s=bn.transition;bn.transition=null;try{U=4,Us(e,t,n,a)}finally{U=i,bn.transition=s}}function Us(e,t,n,a){if(fa){var i=Yi(e,t,n,a);if(i===null)pi(e,t,a,ma,n),Bo(e,a);else if(Np(i,e,t,n,a))a.stopPropagation();else if(Bo(e,a),t&4&&-1<kp.indexOf(e)){for(;i!==null;){var s=Cr(i);if(s!==null&&Bd(s),s=Yi(e,t,n,a),s===null&&pi(e,t,a,ma,n),s===i)break;i=s}i!==null&&a.stopPropagation()}else pi(e,t,a,null,n)}}var ma=null;function Yi(e,t,n,a){if(ma=null,e=Ds(a),e=$t(e),e!==null)if(t=Zt(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Td(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return ma=e,null}function Wd(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(mp()){case Fs:return 1;case Ad:return 4;case ua:case hp:return 16;case Dd:return 536870912;default:return 16}default:return 16}}var vt=null,$s=null,Zr=null;function Gd(){if(Zr)return Zr;var e,t=$s,n=t.length,a,i="value"in vt?vt.value:vt.textContent,s=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(a=1;a<=o&&t[n-a]===i[s-a];a++);return Zr=i.slice(e,1<a?1-a:void 0)}function ea(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Dr(){return!0}function $o(){return!1}function Ie(e){function t(n,a,i,s,o){this._reactName=n,this._targetInst=i,this.type=a,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(n=e[l],this[l]=n?n(s):s[l]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Dr:$o,this.isPropagationStopped=$o,this}return q(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Dr)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Dr)},persist:function(){},isPersistent:Dr}),t}var In={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Hs=Ie(In),zr=q({},In,{view:0,detail:0}),Mp=Ie(zr),ri,ai,Bn,_a=q({},zr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Vs,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Bn&&(Bn&&e.type==="mousemove"?(ri=e.screenX-Bn.screenX,ai=e.screenY-Bn.screenY):ai=ri=0,Bn=e),ri)},movementY:function(e){return"movementY"in e?e.movementY:ai}}),Ho=Ie(_a),Ep=q({},_a,{dataTransfer:0}),Pp=Ie(Ep),Ip=q({},zr,{relatedTarget:0}),ii=Ie(Ip),Tp=q({},In,{animationName:0,elapsedTime:0,pseudoElement:0}),Rp=Ie(Tp),Lp=q({},In,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),_p=Ie(Lp),Ap=q({},In,{data:0}),Vo=Ie(Ap),Dp={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Fp={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Op={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Bp(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Op[e])?!!t[e]:!1}function Vs(){return Bp}var Up=q({},zr,{key:function(e){if(e.key){var t=Dp[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=ea(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Fp[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Vs,charCode:function(e){return e.type==="keypress"?ea(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ea(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),$p=Ie(Up),Hp=q({},_a,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Wo=Ie(Hp),Vp=q({},zr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Vs}),Wp=Ie(Vp),Gp=q({},In,{propertyName:0,elapsedTime:0,pseudoElement:0}),Qp=Ie(Gp),Yp=q({},_a,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),qp=Ie(Yp),Kp=[9,13,27,32],Ws=ot&&"CompositionEvent"in window,Jn=null;ot&&"documentMode"in document&&(Jn=document.documentMode);var Xp=ot&&"TextEvent"in window&&!Jn,Qd=ot&&(!Ws||Jn&&8<Jn&&11>=Jn),Go=" ",Qo=!1;function Yd(e,t){switch(e){case"keyup":return Kp.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function qd(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var on=!1;function Jp(e,t){switch(e){case"compositionend":return qd(t);case"keypress":return t.which!==32?null:(Qo=!0,Go);case"textInput":return e=t.data,e===Go&&Qo?null:e;default:return null}}function Zp(e,t){if(on)return e==="compositionend"||!Ws&&Yd(e,t)?(e=Gd(),Zr=$s=vt=null,on=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Qd&&t.locale!=="ko"?null:t.data;default:return null}}var ef={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Yo(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!ef[e.type]:t==="textarea"}function Kd(e,t,n,a){Cd(a),t=ha(t,"onChange"),0<t.length&&(n=new Hs("onChange","change",null,n,a),e.push({event:n,listeners:t}))}var Zn=null,ur=null;function tf(e){oc(e,0)}function Aa(e){var t=cn(e);if(bd(t))return e}function nf(e,t){if(e==="change")return t}var Xd=!1;if(ot){var si;if(ot){var oi="oninput"in document;if(!oi){var qo=document.createElement("div");qo.setAttribute("oninput","return;"),oi=typeof qo.oninput=="function"}si=oi}else si=!1;Xd=si&&(!document.documentMode||9<document.documentMode)}function Ko(){Zn&&(Zn.detachEvent("onpropertychange",Jd),ur=Zn=null)}function Jd(e){if(e.propertyName==="value"&&Aa(ur)){var t=[];Kd(t,ur,e,Ds(e)),Id(tf,t)}}function rf(e,t,n){e==="focusin"?(Ko(),Zn=t,ur=n,Zn.attachEvent("onpropertychange",Jd)):e==="focusout"&&Ko()}function af(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Aa(ur)}function sf(e,t){if(e==="click")return Aa(t)}function of(e,t){if(e==="input"||e==="change")return Aa(t)}function lf(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Ge=typeof Object.is=="function"?Object.is:lf;function pr(e,t){if(Ge(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),a=Object.keys(t);if(n.length!==a.length)return!1;for(a=0;a<n.length;a++){var i=n[a];if(!Pi.call(t,i)||!Ge(e[i],t[i]))return!1}return!0}function Xo(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Jo(e,t){var n=Xo(e);e=0;for(var a;n;){if(n.nodeType===3){if(a=e+n.textContent.length,e<=t&&a>=t)return{node:n,offset:t-e};e=a}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Xo(n)}}function Zd(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Zd(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function ec(){for(var e=window,t=la();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=la(e.document)}return t}function Gs(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function df(e){var t=ec(),n=e.focusedElem,a=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Zd(n.ownerDocument.documentElement,n)){if(a!==null&&Gs(n)){if(t=a.start,e=a.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,s=Math.min(a.start,i);a=a.end===void 0?s:Math.min(a.end,i),!e.extend&&s>a&&(i=a,a=s,s=i),i=Jo(n,s);var o=Jo(n,a);i&&o&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),s>a?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var cf=ot&&"documentMode"in document&&11>=document.documentMode,ln=null,qi=null,er=null,Ki=!1;function Zo(e,t,n){var a=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Ki||ln==null||ln!==la(a)||(a=ln,"selectionStart"in a&&Gs(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),er&&pr(er,a)||(er=a,a=ha(qi,"onSelect"),0<a.length&&(t=new Hs("onSelect","select",null,t,n),e.push({event:t,listeners:a}),t.target=ln)))}function Fr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var dn={animationend:Fr("Animation","AnimationEnd"),animationiteration:Fr("Animation","AnimationIteration"),animationstart:Fr("Animation","AnimationStart"),transitionend:Fr("Transition","TransitionEnd")},li={},tc={};ot&&(tc=document.createElement("div").style,"AnimationEvent"in window||(delete dn.animationend.animation,delete dn.animationiteration.animation,delete dn.animationstart.animation),"TransitionEvent"in window||delete dn.transitionend.transition);function Da(e){if(li[e])return li[e];if(!dn[e])return e;var t=dn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in tc)return li[e]=t[n];return e}var nc=Da("animationend"),rc=Da("animationiteration"),ac=Da("animationstart"),ic=Da("transitionend"),sc=new Map,el="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Tt(e,t){sc.set(e,t),Jt(t,[e])}for(var di=0;di<el.length;di++){var ci=el[di],uf=ci.toLowerCase(),pf=ci[0].toUpperCase()+ci.slice(1);Tt(uf,"on"+pf)}Tt(nc,"onAnimationEnd");Tt(rc,"onAnimationIteration");Tt(ac,"onAnimationStart");Tt("dblclick","onDoubleClick");Tt("focusin","onFocus");Tt("focusout","onBlur");Tt(ic,"onTransitionEnd");kn("onMouseEnter",["mouseout","mouseover"]);kn("onMouseLeave",["mouseout","mouseover"]);kn("onPointerEnter",["pointerout","pointerover"]);kn("onPointerLeave",["pointerout","pointerover"]);Jt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Jt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Jt("onBeforeInput",["compositionend","keypress","textInput","paste"]);Jt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Jt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Jt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var qn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),ff=new Set("cancel close invalid load scroll toggle".split(" ").concat(qn));function tl(e,t,n){var a=e.type||"unknown-event";e.currentTarget=n,cp(a,t,void 0,e),e.currentTarget=null}function oc(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var a=e[n],i=a.event;a=a.listeners;e:{var s=void 0;if(t)for(var o=a.length-1;0<=o;o--){var l=a[o],d=l.instance,c=l.currentTarget;if(l=l.listener,d!==s&&i.isPropagationStopped())break e;tl(i,l,c),s=d}else for(o=0;o<a.length;o++){if(l=a[o],d=l.instance,c=l.currentTarget,l=l.listener,d!==s&&i.isPropagationStopped())break e;tl(i,l,c),s=d}}}if(ca)throw e=Wi,ca=!1,Wi=null,e}function V(e,t){var n=t[ts];n===void 0&&(n=t[ts]=new Set);var a=e+"__bubble";n.has(a)||(lc(t,e,2,!1),n.add(a))}function ui(e,t,n){var a=0;t&&(a|=4),lc(n,e,a,t)}var Or="_reactListening"+Math.random().toString(36).slice(2);function fr(e){if(!e[Or]){e[Or]=!0,hd.forEach(function(n){n!=="selectionchange"&&(ff.has(n)||ui(n,!1,e),ui(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Or]||(t[Or]=!0,ui("selectionchange",!1,t))}}function lc(e,t,n,a){switch(Wd(t)){case 1:var i=zp;break;case 4:i=Cp;break;default:i=Us}n=i.bind(null,t,n,e),i=void 0,!Vi||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),a?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function pi(e,t,n,a,i){var s=a;if(!(t&1)&&!(t&2)&&a!==null)e:for(;;){if(a===null)return;var o=a.tag;if(o===3||o===4){var l=a.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(o===4)for(o=a.return;o!==null;){var d=o.tag;if((d===3||d===4)&&(d=o.stateNode.containerInfo,d===i||d.nodeType===8&&d.parentNode===i))return;o=o.return}for(;l!==null;){if(o=$t(l),o===null)return;if(d=o.tag,d===5||d===6){a=s=o;continue e}l=l.parentNode}}a=a.return}Id(function(){var c=s,m=Ds(n),h=[];e:{var x=sc.get(e);if(x!==void 0){var j=Hs,k=e;switch(e){case"keypress":if(ea(n)===0)break e;case"keydown":case"keyup":j=$p;break;case"focusin":k="focus",j=ii;break;case"focusout":k="blur",j=ii;break;case"beforeblur":case"afterblur":j=ii;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":j=Ho;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":j=Pp;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":j=Wp;break;case nc:case rc:case ac:j=Rp;break;case ic:j=Qp;break;case"scroll":j=Mp;break;case"wheel":j=qp;break;case"copy":case"cut":case"paste":j=_p;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":j=Wo}var v=(t&4)!==0,b=!v&&e==="scroll",f=v?x!==null?x+"Capture":null:x;v=[];for(var u=c,p;u!==null;){p=u;var w=p.stateNode;if(p.tag===5&&w!==null&&(p=w,f!==null&&(w=or(u,f),w!=null&&v.push(mr(u,w,p)))),b)break;u=u.return}0<v.length&&(x=new j(x,k,null,n,m),h.push({event:x,listeners:v}))}}if(!(t&7)){e:{if(x=e==="mouseover"||e==="pointerover",j=e==="mouseout"||e==="pointerout",x&&n!==$i&&(k=n.relatedTarget||n.fromElement)&&($t(k)||k[lt]))break e;if((j||x)&&(x=m.window===m?m:(x=m.ownerDocument)?x.defaultView||x.parentWindow:window,j?(k=n.relatedTarget||n.toElement,j=c,k=k?$t(k):null,k!==null&&(b=Zt(k),k!==b||k.tag!==5&&k.tag!==6)&&(k=null)):(j=null,k=c),j!==k)){if(v=Ho,w="onMouseLeave",f="onMouseEnter",u="mouse",(e==="pointerout"||e==="pointerover")&&(v=Wo,w="onPointerLeave",f="onPointerEnter",u="pointer"),b=j==null?x:cn(j),p=k==null?x:cn(k),x=new v(w,u+"leave",j,n,m),x.target=b,x.relatedTarget=p,w=null,$t(m)===c&&(v=new v(f,u+"enter",k,n,m),v.target=p,v.relatedTarget=b,w=v),b=w,j&&k)t:{for(v=j,f=k,u=0,p=v;p;p=tn(p))u++;for(p=0,w=f;w;w=tn(w))p++;for(;0<u-p;)v=tn(v),u--;for(;0<p-u;)f=tn(f),p--;for(;u--;){if(v===f||f!==null&&v===f.alternate)break t;v=tn(v),f=tn(f)}v=null}else v=null;j!==null&&nl(h,x,j,v,!1),k!==null&&b!==null&&nl(h,b,k,v,!0)}}e:{if(x=c?cn(c):window,j=x.nodeName&&x.nodeName.toLowerCase(),j==="select"||j==="input"&&x.type==="file")var S=nf;else if(Yo(x))if(Xd)S=of;else{S=af;var C=rf}else(j=x.nodeName)&&j.toLowerCase()==="input"&&(x.type==="checkbox"||x.type==="radio")&&(S=sf);if(S&&(S=S(e,c))){Kd(h,S,n,m);break e}C&&C(e,x,c),e==="focusout"&&(C=x._wrapperState)&&C.controlled&&x.type==="number"&&Di(x,"number",x.value)}switch(C=c?cn(c):window,e){case"focusin":(Yo(C)||C.contentEditable==="true")&&(ln=C,qi=c,er=null);break;case"focusout":er=qi=ln=null;break;case"mousedown":Ki=!0;break;case"contextmenu":case"mouseup":case"dragend":Ki=!1,Zo(h,n,m);break;case"selectionchange":if(cf)break;case"keydown":case"keyup":Zo(h,n,m)}var N;if(Ws)e:{switch(e){case"compositionstart":var M="onCompositionStart";break e;case"compositionend":M="onCompositionEnd";break e;case"compositionupdate":M="onCompositionUpdate";break e}M=void 0}else on?Yd(e,n)&&(M="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(M="onCompositionStart");M&&(Qd&&n.locale!=="ko"&&(on||M!=="onCompositionStart"?M==="onCompositionEnd"&&on&&(N=Gd()):(vt=m,$s="value"in vt?vt.value:vt.textContent,on=!0)),C=ha(c,M),0<C.length&&(M=new Vo(M,e,null,n,m),h.push({event:M,listeners:C}),N?M.data=N:(N=qd(n),N!==null&&(M.data=N)))),(N=Xp?Jp(e,n):Zp(e,n))&&(c=ha(c,"onBeforeInput"),0<c.length&&(m=new Vo("onBeforeInput","beforeinput",null,n,m),h.push({event:m,listeners:c}),m.data=N))}oc(h,t)})}function mr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function ha(e,t){for(var n=t+"Capture",a=[];e!==null;){var i=e,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=or(e,n),s!=null&&a.unshift(mr(e,s,i)),s=or(e,t),s!=null&&a.push(mr(e,s,i))),e=e.return}return a}function tn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function nl(e,t,n,a,i){for(var s=t._reactName,o=[];n!==null&&n!==a;){var l=n,d=l.alternate,c=l.stateNode;if(d!==null&&d===a)break;l.tag===5&&c!==null&&(l=c,i?(d=or(n,s),d!=null&&o.unshift(mr(n,d,l))):i||(d=or(n,s),d!=null&&o.push(mr(n,d,l)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var mf=/\r\n?/g,hf=/\u0000|\uFFFD/g;function rl(e){return(typeof e=="string"?e:""+e).replace(mf,`
`).replace(hf,"")}function Br(e,t,n){if(t=rl(t),rl(e)!==t&&n)throw Error(z(425))}function ga(){}var Xi=null,Ji=null;function Zi(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var es=typeof setTimeout=="function"?setTimeout:void 0,gf=typeof clearTimeout=="function"?clearTimeout:void 0,al=typeof Promise=="function"?Promise:void 0,xf=typeof queueMicrotask=="function"?queueMicrotask:typeof al<"u"?function(e){return al.resolve(null).then(e).catch(vf)}:es;function vf(e){setTimeout(function(){throw e})}function fi(e,t){var n=t,a=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(a===0){e.removeChild(i),cr(t);return}a--}else n!=="$"&&n!=="$?"&&n!=="$!"||a++;n=i}while(n);cr(t)}function Nt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function il(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Tn=Math.random().toString(36).slice(2),Je="__reactFiber$"+Tn,hr="__reactProps$"+Tn,lt="__reactContainer$"+Tn,ts="__reactEvents$"+Tn,yf="__reactListeners$"+Tn,bf="__reactHandles$"+Tn;function $t(e){var t=e[Je];if(t)return t;for(var n=e.parentNode;n;){if(t=n[lt]||n[Je]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=il(e);e!==null;){if(n=e[Je])return n;e=il(e)}return t}e=n,n=e.parentNode}return null}function Cr(e){return e=e[Je]||e[lt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function cn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(z(33))}function Fa(e){return e[hr]||null}var ns=[],un=-1;function Rt(e){return{current:e}}function W(e){0>un||(e.current=ns[un],ns[un]=null,un--)}function H(e,t){un++,ns[un]=e.current,e.current=t}var It={},me=Rt(It),we=Rt(!1),Qt=It;function Nn(e,t){var n=e.type.contextTypes;if(!n)return It;var a=e.stateNode;if(a&&a.__reactInternalMemoizedUnmaskedChildContext===t)return a.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=t[s];return a&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function ke(e){return e=e.childContextTypes,e!=null}function xa(){W(we),W(me)}function sl(e,t,n){if(me.current!==It)throw Error(z(168));H(me,t),H(we,n)}function dc(e,t,n){var a=e.stateNode;if(t=t.childContextTypes,typeof a.getChildContext!="function")return n;a=a.getChildContext();for(var i in a)if(!(i in t))throw Error(z(108,rp(e)||"Unknown",i));return q({},n,a)}function va(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||It,Qt=me.current,H(me,e),H(we,we.current),!0}function ol(e,t,n){var a=e.stateNode;if(!a)throw Error(z(169));n?(e=dc(e,t,Qt),a.__reactInternalMemoizedMergedChildContext=e,W(we),W(me),H(me,e)):W(we),H(we,n)}var rt=null,Oa=!1,mi=!1;function cc(e){rt===null?rt=[e]:rt.push(e)}function jf(e){Oa=!0,cc(e)}function Lt(){if(!mi&&rt!==null){mi=!0;var e=0,t=U;try{var n=rt;for(U=1;e<n.length;e++){var a=n[e];do a=a(!0);while(a!==null)}rt=null,Oa=!1}catch(i){throw rt!==null&&(rt=rt.slice(e+1)),_d(Fs,Lt),i}finally{U=t,mi=!1}}return null}var pn=[],fn=0,ya=null,ba=0,Te=[],Re=0,Yt=null,at=1,it="";function Bt(e,t){pn[fn++]=ba,pn[fn++]=ya,ya=e,ba=t}function uc(e,t,n){Te[Re++]=at,Te[Re++]=it,Te[Re++]=Yt,Yt=e;var a=at;e=it;var i=32-Ve(a)-1;a&=~(1<<i),n+=1;var s=32-Ve(t)+i;if(30<s){var o=i-i%5;s=(a&(1<<o)-1).toString(32),a>>=o,i-=o,at=1<<32-Ve(t)+i|n<<i|a,it=s+e}else at=1<<s|n<<i|a,it=e}function Qs(e){e.return!==null&&(Bt(e,1),uc(e,1,0))}function Ys(e){for(;e===ya;)ya=pn[--fn],pn[fn]=null,ba=pn[--fn],pn[fn]=null;for(;e===Yt;)Yt=Te[--Re],Te[Re]=null,it=Te[--Re],Te[Re]=null,at=Te[--Re],Te[Re]=null}var Me=null,Ce=null,G=!1,He=null;function pc(e,t){var n=Le(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function ll(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Me=e,Ce=Nt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Me=e,Ce=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Yt!==null?{id:at,overflow:it}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Le(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Me=e,Ce=null,!0):!1;default:return!1}}function rs(e){return(e.mode&1)!==0&&(e.flags&128)===0}function as(e){if(G){var t=Ce;if(t){var n=t;if(!ll(e,t)){if(rs(e))throw Error(z(418));t=Nt(n.nextSibling);var a=Me;t&&ll(e,t)?pc(a,n):(e.flags=e.flags&-4097|2,G=!1,Me=e)}}else{if(rs(e))throw Error(z(418));e.flags=e.flags&-4097|2,G=!1,Me=e}}}function dl(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Me=e}function Ur(e){if(e!==Me)return!1;if(!G)return dl(e),G=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Zi(e.type,e.memoizedProps)),t&&(t=Ce)){if(rs(e))throw fc(),Error(z(418));for(;t;)pc(e,t),t=Nt(t.nextSibling)}if(dl(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(z(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Ce=Nt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Ce=null}}else Ce=Me?Nt(e.stateNode.nextSibling):null;return!0}function fc(){for(var e=Ce;e;)e=Nt(e.nextSibling)}function Sn(){Ce=Me=null,G=!1}function qs(e){He===null?He=[e]:He.push(e)}var wf=ut.ReactCurrentBatchConfig;function Un(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(z(309));var a=n.stateNode}if(!a)throw Error(z(147,e));var i=a,s=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===s?t.ref:(t=function(o){var l=i.refs;o===null?delete l[s]:l[s]=o},t._stringRef=s,t)}if(typeof e!="string")throw Error(z(284));if(!n._owner)throw Error(z(290,e))}return e}function $r(e,t){throw e=Object.prototype.toString.call(t),Error(z(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function cl(e){var t=e._init;return t(e._payload)}function mc(e){function t(f,u){if(e){var p=f.deletions;p===null?(f.deletions=[u],f.flags|=16):p.push(u)}}function n(f,u){if(!e)return null;for(;u!==null;)t(f,u),u=u.sibling;return null}function a(f,u){for(f=new Map;u!==null;)u.key!==null?f.set(u.key,u):f.set(u.index,u),u=u.sibling;return f}function i(f,u){return f=Mt(f,u),f.index=0,f.sibling=null,f}function s(f,u,p){return f.index=p,e?(p=f.alternate,p!==null?(p=p.index,p<u?(f.flags|=2,u):p):(f.flags|=2,u)):(f.flags|=1048576,u)}function o(f){return e&&f.alternate===null&&(f.flags|=2),f}function l(f,u,p,w){return u===null||u.tag!==6?(u=ji(p,f.mode,w),u.return=f,u):(u=i(u,p),u.return=f,u)}function d(f,u,p,w){var S=p.type;return S===sn?m(f,u,p.props.children,w,p.key):u!==null&&(u.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===mt&&cl(S)===u.type)?(w=i(u,p.props),w.ref=Un(f,u,p),w.return=f,w):(w=oa(p.type,p.key,p.props,null,f.mode,w),w.ref=Un(f,u,p),w.return=f,w)}function c(f,u,p,w){return u===null||u.tag!==4||u.stateNode.containerInfo!==p.containerInfo||u.stateNode.implementation!==p.implementation?(u=wi(p,f.mode,w),u.return=f,u):(u=i(u,p.children||[]),u.return=f,u)}function m(f,u,p,w,S){return u===null||u.tag!==7?(u=Gt(p,f.mode,w,S),u.return=f,u):(u=i(u,p),u.return=f,u)}function h(f,u,p){if(typeof u=="string"&&u!==""||typeof u=="number")return u=ji(""+u,f.mode,p),u.return=f,u;if(typeof u=="object"&&u!==null){switch(u.$$typeof){case Ir:return p=oa(u.type,u.key,u.props,null,f.mode,p),p.ref=Un(f,null,u),p.return=f,p;case an:return u=wi(u,f.mode,p),u.return=f,u;case mt:var w=u._init;return h(f,w(u._payload),p)}if(Qn(u)||An(u))return u=Gt(u,f.mode,p,null),u.return=f,u;$r(f,u)}return null}function x(f,u,p,w){var S=u!==null?u.key:null;if(typeof p=="string"&&p!==""||typeof p=="number")return S!==null?null:l(f,u,""+p,w);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case Ir:return p.key===S?d(f,u,p,w):null;case an:return p.key===S?c(f,u,p,w):null;case mt:return S=p._init,x(f,u,S(p._payload),w)}if(Qn(p)||An(p))return S!==null?null:m(f,u,p,w,null);$r(f,p)}return null}function j(f,u,p,w,S){if(typeof w=="string"&&w!==""||typeof w=="number")return f=f.get(p)||null,l(u,f,""+w,S);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case Ir:return f=f.get(w.key===null?p:w.key)||null,d(u,f,w,S);case an:return f=f.get(w.key===null?p:w.key)||null,c(u,f,w,S);case mt:var C=w._init;return j(f,u,p,C(w._payload),S)}if(Qn(w)||An(w))return f=f.get(p)||null,m(u,f,w,S,null);$r(u,w)}return null}function k(f,u,p,w){for(var S=null,C=null,N=u,M=u=0,B=null;N!==null&&M<p.length;M++){N.index>M?(B=N,N=null):B=N.sibling;var _=x(f,N,p[M],w);if(_===null){N===null&&(N=B);break}e&&N&&_.alternate===null&&t(f,N),u=s(_,u,M),C===null?S=_:C.sibling=_,C=_,N=B}if(M===p.length)return n(f,N),G&&Bt(f,M),S;if(N===null){for(;M<p.length;M++)N=h(f,p[M],w),N!==null&&(u=s(N,u,M),C===null?S=N:C.sibling=N,C=N);return G&&Bt(f,M),S}for(N=a(f,N);M<p.length;M++)B=j(N,f,M,p[M],w),B!==null&&(e&&B.alternate!==null&&N.delete(B.key===null?M:B.key),u=s(B,u,M),C===null?S=B:C.sibling=B,C=B);return e&&N.forEach(function(T){return t(f,T)}),G&&Bt(f,M),S}function v(f,u,p,w){var S=An(p);if(typeof S!="function")throw Error(z(150));if(p=S.call(p),p==null)throw Error(z(151));for(var C=S=null,N=u,M=u=0,B=null,_=p.next();N!==null&&!_.done;M++,_=p.next()){N.index>M?(B=N,N=null):B=N.sibling;var T=x(f,N,_.value,w);if(T===null){N===null&&(N=B);break}e&&N&&T.alternate===null&&t(f,N),u=s(T,u,M),C===null?S=T:C.sibling=T,C=T,N=B}if(_.done)return n(f,N),G&&Bt(f,M),S;if(N===null){for(;!_.done;M++,_=p.next())_=h(f,_.value,w),_!==null&&(u=s(_,u,M),C===null?S=_:C.sibling=_,C=_);return G&&Bt(f,M),S}for(N=a(f,N);!_.done;M++,_=p.next())_=j(N,f,M,_.value,w),_!==null&&(e&&_.alternate!==null&&N.delete(_.key===null?M:_.key),u=s(_,u,M),C===null?S=_:C.sibling=_,C=_);return e&&N.forEach(function(K){return t(f,K)}),G&&Bt(f,M),S}function b(f,u,p,w){if(typeof p=="object"&&p!==null&&p.type===sn&&p.key===null&&(p=p.props.children),typeof p=="object"&&p!==null){switch(p.$$typeof){case Ir:e:{for(var S=p.key,C=u;C!==null;){if(C.key===S){if(S=p.type,S===sn){if(C.tag===7){n(f,C.sibling),u=i(C,p.props.children),u.return=f,f=u;break e}}else if(C.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===mt&&cl(S)===C.type){n(f,C.sibling),u=i(C,p.props),u.ref=Un(f,C,p),u.return=f,f=u;break e}n(f,C);break}else t(f,C);C=C.sibling}p.type===sn?(u=Gt(p.props.children,f.mode,w,p.key),u.return=f,f=u):(w=oa(p.type,p.key,p.props,null,f.mode,w),w.ref=Un(f,u,p),w.return=f,f=w)}return o(f);case an:e:{for(C=p.key;u!==null;){if(u.key===C)if(u.tag===4&&u.stateNode.containerInfo===p.containerInfo&&u.stateNode.implementation===p.implementation){n(f,u.sibling),u=i(u,p.children||[]),u.return=f,f=u;break e}else{n(f,u);break}else t(f,u);u=u.sibling}u=wi(p,f.mode,w),u.return=f,f=u}return o(f);case mt:return C=p._init,b(f,u,C(p._payload),w)}if(Qn(p))return k(f,u,p,w);if(An(p))return v(f,u,p,w);$r(f,p)}return typeof p=="string"&&p!==""||typeof p=="number"?(p=""+p,u!==null&&u.tag===6?(n(f,u.sibling),u=i(u,p),u.return=f,f=u):(n(f,u),u=ji(p,f.mode,w),u.return=f,f=u),o(f)):n(f,u)}return b}var zn=mc(!0),hc=mc(!1),ja=Rt(null),wa=null,mn=null,Ks=null;function Xs(){Ks=mn=wa=null}function Js(e){var t=ja.current;W(ja),e._currentValue=t}function is(e,t,n){for(;e!==null;){var a=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,a!==null&&(a.childLanes|=t)):a!==null&&(a.childLanes&t)!==t&&(a.childLanes|=t),e===n)break;e=e.return}}function jn(e,t){wa=e,Ks=mn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(je=!0),e.firstContext=null)}function Ae(e){var t=e._currentValue;if(Ks!==e)if(e={context:e,memoizedValue:t,next:null},mn===null){if(wa===null)throw Error(z(308));mn=e,wa.dependencies={lanes:0,firstContext:e}}else mn=mn.next=e;return t}var Ht=null;function Zs(e){Ht===null?Ht=[e]:Ht.push(e)}function gc(e,t,n,a){var i=t.interleaved;return i===null?(n.next=n,Zs(t)):(n.next=i.next,i.next=n),t.interleaved=n,dt(e,a)}function dt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var ht=!1;function eo(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function xc(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function st(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function St(e,t,n){var a=e.updateQueue;if(a===null)return null;if(a=a.shared,F&2){var i=a.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),a.pending=t,dt(e,n)}return i=a.interleaved,i===null?(t.next=t,Zs(a)):(t.next=i.next,i.next=t),a.interleaved=t,dt(e,n)}function ta(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var a=t.lanes;a&=e.pendingLanes,n|=a,t.lanes=n,Os(e,n)}}function ul(e,t){var n=e.updateQueue,a=e.alternate;if(a!==null&&(a=a.updateQueue,n===a)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=t:s=s.next=t}else i=s=t;n={baseState:a.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:a.shared,effects:a.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function ka(e,t,n,a){var i=e.updateQueue;ht=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var d=l,c=d.next;d.next=null,o===null?s=c:o.next=c,o=d;var m=e.alternate;m!==null&&(m=m.updateQueue,l=m.lastBaseUpdate,l!==o&&(l===null?m.firstBaseUpdate=c:l.next=c,m.lastBaseUpdate=d))}if(s!==null){var h=i.baseState;o=0,m=c=d=null,l=s;do{var x=l.lane,j=l.eventTime;if((a&x)===x){m!==null&&(m=m.next={eventTime:j,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var k=e,v=l;switch(x=t,j=n,v.tag){case 1:if(k=v.payload,typeof k=="function"){h=k.call(j,h,x);break e}h=k;break e;case 3:k.flags=k.flags&-65537|128;case 0:if(k=v.payload,x=typeof k=="function"?k.call(j,h,x):k,x==null)break e;h=q({},h,x);break e;case 2:ht=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,x=i.effects,x===null?i.effects=[l]:x.push(l))}else j={eventTime:j,lane:x,tag:l.tag,payload:l.payload,callback:l.callback,next:null},m===null?(c=m=j,d=h):m=m.next=j,o|=x;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;x=l,l=x.next,x.next=null,i.lastBaseUpdate=x,i.shared.pending=null}}while(!0);if(m===null&&(d=h),i.baseState=d,i.firstBaseUpdate=c,i.lastBaseUpdate=m,t=i.shared.interleaved,t!==null){i=t;do o|=i.lane,i=i.next;while(i!==t)}else s===null&&(i.shared.lanes=0);Kt|=o,e.lanes=o,e.memoizedState=h}}function pl(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var a=e[t],i=a.callback;if(i!==null){if(a.callback=null,a=n,typeof i!="function")throw Error(z(191,i));i.call(a)}}}var Mr={},et=Rt(Mr),gr=Rt(Mr),xr=Rt(Mr);function Vt(e){if(e===Mr)throw Error(z(174));return e}function to(e,t){switch(H(xr,t),H(gr,e),H(et,Mr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Oi(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Oi(t,e)}W(et),H(et,t)}function Cn(){W(et),W(gr),W(xr)}function vc(e){Vt(xr.current);var t=Vt(et.current),n=Oi(t,e.type);t!==n&&(H(gr,e),H(et,n))}function no(e){gr.current===e&&(W(et),W(gr))}var Q=Rt(0);function Na(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var hi=[];function ro(){for(var e=0;e<hi.length;e++)hi[e]._workInProgressVersionPrimary=null;hi.length=0}var na=ut.ReactCurrentDispatcher,gi=ut.ReactCurrentBatchConfig,qt=0,Y=null,ne=null,ie=null,Sa=!1,tr=!1,vr=0,kf=0;function ce(){throw Error(z(321))}function ao(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Ge(e[n],t[n]))return!1;return!0}function io(e,t,n,a,i,s){if(qt=s,Y=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,na.current=e===null||e.memoizedState===null?Cf:Mf,e=n(a,i),tr){s=0;do{if(tr=!1,vr=0,25<=s)throw Error(z(301));s+=1,ie=ne=null,t.updateQueue=null,na.current=Ef,e=n(a,i)}while(tr)}if(na.current=za,t=ne!==null&&ne.next!==null,qt=0,ie=ne=Y=null,Sa=!1,t)throw Error(z(300));return e}function so(){var e=vr!==0;return vr=0,e}function Xe(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ie===null?Y.memoizedState=ie=e:ie=ie.next=e,ie}function De(){if(ne===null){var e=Y.alternate;e=e!==null?e.memoizedState:null}else e=ne.next;var t=ie===null?Y.memoizedState:ie.next;if(t!==null)ie=t,ne=e;else{if(e===null)throw Error(z(310));ne=e,e={memoizedState:ne.memoizedState,baseState:ne.baseState,baseQueue:ne.baseQueue,queue:ne.queue,next:null},ie===null?Y.memoizedState=ie=e:ie=ie.next=e}return ie}function yr(e,t){return typeof t=="function"?t(e):t}function xi(e){var t=De(),n=t.queue;if(n===null)throw Error(z(311));n.lastRenderedReducer=e;var a=ne,i=a.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}a.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,a=a.baseState;var l=o=null,d=null,c=s;do{var m=c.lane;if((qt&m)===m)d!==null&&(d=d.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),a=c.hasEagerState?c.eagerState:e(a,c.action);else{var h={lane:m,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};d===null?(l=d=h,o=a):d=d.next=h,Y.lanes|=m,Kt|=m}c=c.next}while(c!==null&&c!==s);d===null?o=a:d.next=l,Ge(a,t.memoizedState)||(je=!0),t.memoizedState=a,t.baseState=o,t.baseQueue=d,n.lastRenderedState=a}if(e=n.interleaved,e!==null){i=e;do s=i.lane,Y.lanes|=s,Kt|=s,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function vi(e){var t=De(),n=t.queue;if(n===null)throw Error(z(311));n.lastRenderedReducer=e;var a=n.dispatch,i=n.pending,s=t.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=e(s,o.action),o=o.next;while(o!==i);Ge(s,t.memoizedState)||(je=!0),t.memoizedState=s,t.baseQueue===null&&(t.baseState=s),n.lastRenderedState=s}return[s,a]}function yc(){}function bc(e,t){var n=Y,a=De(),i=t(),s=!Ge(a.memoizedState,i);if(s&&(a.memoizedState=i,je=!0),a=a.queue,oo(kc.bind(null,n,a,e),[e]),a.getSnapshot!==t||s||ie!==null&&ie.memoizedState.tag&1){if(n.flags|=2048,br(9,wc.bind(null,n,a,i,t),void 0,null),se===null)throw Error(z(349));qt&30||jc(n,t,i)}return i}function jc(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Y.updateQueue,t===null?(t={lastEffect:null,stores:null},Y.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function wc(e,t,n,a){t.value=n,t.getSnapshot=a,Nc(t)&&Sc(e)}function kc(e,t,n){return n(function(){Nc(t)&&Sc(e)})}function Nc(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Ge(e,n)}catch{return!0}}function Sc(e){var t=dt(e,1);t!==null&&We(t,e,1,-1)}function fl(e){var t=Xe();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:yr,lastRenderedState:e},t.queue=e,e=e.dispatch=zf.bind(null,Y,e),[t.memoizedState,e]}function br(e,t,n,a){return e={tag:e,create:t,destroy:n,deps:a,next:null},t=Y.updateQueue,t===null?(t={lastEffect:null,stores:null},Y.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(a=n.next,n.next=e,e.next=a,t.lastEffect=e)),e}function zc(){return De().memoizedState}function ra(e,t,n,a){var i=Xe();Y.flags|=e,i.memoizedState=br(1|t,n,void 0,a===void 0?null:a)}function Ba(e,t,n,a){var i=De();a=a===void 0?null:a;var s=void 0;if(ne!==null){var o=ne.memoizedState;if(s=o.destroy,a!==null&&ao(a,o.deps)){i.memoizedState=br(t,n,s,a);return}}Y.flags|=e,i.memoizedState=br(1|t,n,s,a)}function ml(e,t){return ra(8390656,8,e,t)}function oo(e,t){return Ba(2048,8,e,t)}function Cc(e,t){return Ba(4,2,e,t)}function Mc(e,t){return Ba(4,4,e,t)}function Ec(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Pc(e,t,n){return n=n!=null?n.concat([e]):null,Ba(4,4,Ec.bind(null,t,e),n)}function lo(){}function Ic(e,t){var n=De();t=t===void 0?null:t;var a=n.memoizedState;return a!==null&&t!==null&&ao(t,a[1])?a[0]:(n.memoizedState=[e,t],e)}function Tc(e,t){var n=De();t=t===void 0?null:t;var a=n.memoizedState;return a!==null&&t!==null&&ao(t,a[1])?a[0]:(e=e(),n.memoizedState=[e,t],e)}function Rc(e,t,n){return qt&21?(Ge(n,t)||(n=Fd(),Y.lanes|=n,Kt|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,je=!0),e.memoizedState=n)}function Nf(e,t){var n=U;U=n!==0&&4>n?n:4,e(!0);var a=gi.transition;gi.transition={};try{e(!1),t()}finally{U=n,gi.transition=a}}function Lc(){return De().memoizedState}function Sf(e,t,n){var a=Ct(e);if(n={lane:a,action:n,hasEagerState:!1,eagerState:null,next:null},_c(e))Ac(t,n);else if(n=gc(e,t,n,a),n!==null){var i=xe();We(n,e,a,i),Dc(n,t,a)}}function zf(e,t,n){var a=Ct(e),i={lane:a,action:n,hasEagerState:!1,eagerState:null,next:null};if(_c(e))Ac(t,i);else{var s=e.alternate;if(e.lanes===0&&(s===null||s.lanes===0)&&(s=t.lastRenderedReducer,s!==null))try{var o=t.lastRenderedState,l=s(o,n);if(i.hasEagerState=!0,i.eagerState=l,Ge(l,o)){var d=t.interleaved;d===null?(i.next=i,Zs(t)):(i.next=d.next,d.next=i),t.interleaved=i;return}}catch{}finally{}n=gc(e,t,i,a),n!==null&&(i=xe(),We(n,e,a,i),Dc(n,t,a))}}function _c(e){var t=e.alternate;return e===Y||t!==null&&t===Y}function Ac(e,t){tr=Sa=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Dc(e,t,n){if(n&4194240){var a=t.lanes;a&=e.pendingLanes,n|=a,t.lanes=n,Os(e,n)}}var za={readContext:Ae,useCallback:ce,useContext:ce,useEffect:ce,useImperativeHandle:ce,useInsertionEffect:ce,useLayoutEffect:ce,useMemo:ce,useReducer:ce,useRef:ce,useState:ce,useDebugValue:ce,useDeferredValue:ce,useTransition:ce,useMutableSource:ce,useSyncExternalStore:ce,useId:ce,unstable_isNewReconciler:!1},Cf={readContext:Ae,useCallback:function(e,t){return Xe().memoizedState=[e,t===void 0?null:t],e},useContext:Ae,useEffect:ml,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,ra(4194308,4,Ec.bind(null,t,e),n)},useLayoutEffect:function(e,t){return ra(4194308,4,e,t)},useInsertionEffect:function(e,t){return ra(4,2,e,t)},useMemo:function(e,t){var n=Xe();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var a=Xe();return t=n!==void 0?n(t):t,a.memoizedState=a.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},a.queue=e,e=e.dispatch=Sf.bind(null,Y,e),[a.memoizedState,e]},useRef:function(e){var t=Xe();return e={current:e},t.memoizedState=e},useState:fl,useDebugValue:lo,useDeferredValue:function(e){return Xe().memoizedState=e},useTransition:function(){var e=fl(!1),t=e[0];return e=Nf.bind(null,e[1]),Xe().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var a=Y,i=Xe();if(G){if(n===void 0)throw Error(z(407));n=n()}else{if(n=t(),se===null)throw Error(z(349));qt&30||jc(a,t,n)}i.memoizedState=n;var s={value:n,getSnapshot:t};return i.queue=s,ml(kc.bind(null,a,s,e),[e]),a.flags|=2048,br(9,wc.bind(null,a,s,n,t),void 0,null),n},useId:function(){var e=Xe(),t=se.identifierPrefix;if(G){var n=it,a=at;n=(a&~(1<<32-Ve(a)-1)).toString(32)+n,t=":"+t+"R"+n,n=vr++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=kf++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Mf={readContext:Ae,useCallback:Ic,useContext:Ae,useEffect:oo,useImperativeHandle:Pc,useInsertionEffect:Cc,useLayoutEffect:Mc,useMemo:Tc,useReducer:xi,useRef:zc,useState:function(){return xi(yr)},useDebugValue:lo,useDeferredValue:function(e){var t=De();return Rc(t,ne.memoizedState,e)},useTransition:function(){var e=xi(yr)[0],t=De().memoizedState;return[e,t]},useMutableSource:yc,useSyncExternalStore:bc,useId:Lc,unstable_isNewReconciler:!1},Ef={readContext:Ae,useCallback:Ic,useContext:Ae,useEffect:oo,useImperativeHandle:Pc,useInsertionEffect:Cc,useLayoutEffect:Mc,useMemo:Tc,useReducer:vi,useRef:zc,useState:function(){return vi(yr)},useDebugValue:lo,useDeferredValue:function(e){var t=De();return ne===null?t.memoizedState=e:Rc(t,ne.memoizedState,e)},useTransition:function(){var e=vi(yr)[0],t=De().memoizedState;return[e,t]},useMutableSource:yc,useSyncExternalStore:bc,useId:Lc,unstable_isNewReconciler:!1};function Ue(e,t){if(e&&e.defaultProps){t=q({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function ss(e,t,n,a){t=e.memoizedState,n=n(a,t),n=n==null?t:q({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Ua={isMounted:function(e){return(e=e._reactInternals)?Zt(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var a=xe(),i=Ct(e),s=st(a,i);s.payload=t,n!=null&&(s.callback=n),t=St(e,s,i),t!==null&&(We(t,e,i,a),ta(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var a=xe(),i=Ct(e),s=st(a,i);s.tag=1,s.payload=t,n!=null&&(s.callback=n),t=St(e,s,i),t!==null&&(We(t,e,i,a),ta(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=xe(),a=Ct(e),i=st(n,a);i.tag=2,t!=null&&(i.callback=t),t=St(e,i,a),t!==null&&(We(t,e,a,n),ta(t,e,a))}};function hl(e,t,n,a,i,s,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(a,s,o):t.prototype&&t.prototype.isPureReactComponent?!pr(n,a)||!pr(i,s):!0}function Fc(e,t,n){var a=!1,i=It,s=t.contextType;return typeof s=="object"&&s!==null?s=Ae(s):(i=ke(t)?Qt:me.current,a=t.contextTypes,s=(a=a!=null)?Nn(e,i):It),t=new t(n,s),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Ua,e.stateNode=t,t._reactInternals=e,a&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=s),t}function gl(e,t,n,a){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,a),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,a),t.state!==e&&Ua.enqueueReplaceState(t,t.state,null)}function os(e,t,n,a){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},eo(e);var s=t.contextType;typeof s=="object"&&s!==null?i.context=Ae(s):(s=ke(t)?Qt:me.current,i.context=Nn(e,s)),i.state=e.memoizedState,s=t.getDerivedStateFromProps,typeof s=="function"&&(ss(e,t,s,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&Ua.enqueueReplaceState(i,i.state,null),ka(e,n,i,a),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function Mn(e,t){try{var n="",a=t;do n+=np(a),a=a.return;while(a);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:e,source:t,stack:i,digest:null}}function yi(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function ls(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Pf=typeof WeakMap=="function"?WeakMap:Map;function Oc(e,t,n){n=st(-1,n),n.tag=3,n.payload={element:null};var a=t.value;return n.callback=function(){Ma||(Ma=!0,vs=a),ls(e,t)},n}function Bc(e,t,n){n=st(-1,n),n.tag=3;var a=e.type.getDerivedStateFromError;if(typeof a=="function"){var i=t.value;n.payload=function(){return a(i)},n.callback=function(){ls(e,t)}}var s=e.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){ls(e,t),typeof a!="function"&&(zt===null?zt=new Set([this]):zt.add(this));var o=t.stack;this.componentDidCatch(t.value,{componentStack:o!==null?o:""})}),n}function xl(e,t,n){var a=e.pingCache;if(a===null){a=e.pingCache=new Pf;var i=new Set;a.set(t,i)}else i=a.get(t),i===void 0&&(i=new Set,a.set(t,i));i.has(n)||(i.add(n),e=Vf.bind(null,e,t,n),t.then(e,e))}function vl(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function yl(e,t,n,a,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=st(-1,1),t.tag=2,St(n,t,1))),n.lanes|=1),e)}var If=ut.ReactCurrentOwner,je=!1;function he(e,t,n,a){t.child=e===null?hc(t,null,n,a):zn(t,e.child,n,a)}function bl(e,t,n,a,i){n=n.render;var s=t.ref;return jn(t,i),a=io(e,t,n,a,s,i),n=so(),e!==null&&!je?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,ct(e,t,i)):(G&&n&&Qs(t),t.flags|=1,he(e,t,a,i),t.child)}function jl(e,t,n,a,i){if(e===null){var s=n.type;return typeof s=="function"&&!xo(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=s,Uc(e,t,s,a,i)):(e=oa(n.type,null,a,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(s=e.child,!(e.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:pr,n(o,a)&&e.ref===t.ref)return ct(e,t,i)}return t.flags|=1,e=Mt(s,a),e.ref=t.ref,e.return=t,t.child=e}function Uc(e,t,n,a,i){if(e!==null){var s=e.memoizedProps;if(pr(s,a)&&e.ref===t.ref)if(je=!1,t.pendingProps=a=s,(e.lanes&i)!==0)e.flags&131072&&(je=!0);else return t.lanes=e.lanes,ct(e,t,i)}return ds(e,t,n,a,i)}function $c(e,t,n){var a=t.pendingProps,i=a.children,s=e!==null?e.memoizedState:null;if(a.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},H(gn,ze),ze|=n;else{if(!(n&1073741824))return e=s!==null?s.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,H(gn,ze),ze|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},a=s!==null?s.baseLanes:n,H(gn,ze),ze|=a}else s!==null?(a=s.baseLanes|n,t.memoizedState=null):a=n,H(gn,ze),ze|=a;return he(e,t,i,n),t.child}function Hc(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function ds(e,t,n,a,i){var s=ke(n)?Qt:me.current;return s=Nn(t,s),jn(t,i),n=io(e,t,n,a,s,i),a=so(),e!==null&&!je?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,ct(e,t,i)):(G&&a&&Qs(t),t.flags|=1,he(e,t,n,i),t.child)}function wl(e,t,n,a,i){if(ke(n)){var s=!0;va(t)}else s=!1;if(jn(t,i),t.stateNode===null)aa(e,t),Fc(t,n,a),os(t,n,a,i),a=!0;else if(e===null){var o=t.stateNode,l=t.memoizedProps;o.props=l;var d=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=Ae(c):(c=ke(n)?Qt:me.current,c=Nn(t,c));var m=n.getDerivedStateFromProps,h=typeof m=="function"||typeof o.getSnapshotBeforeUpdate=="function";h||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==a||d!==c)&&gl(t,o,a,c),ht=!1;var x=t.memoizedState;o.state=x,ka(t,a,o,i),d=t.memoizedState,l!==a||x!==d||we.current||ht?(typeof m=="function"&&(ss(t,n,m,a),d=t.memoizedState),(l=ht||hl(t,n,l,a,x,d,c))?(h||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=a,t.memoizedState=d),o.props=a,o.state=d,o.context=c,a=l):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),a=!1)}else{o=t.stateNode,xc(e,t),l=t.memoizedProps,c=t.type===t.elementType?l:Ue(t.type,l),o.props=c,h=t.pendingProps,x=o.context,d=n.contextType,typeof d=="object"&&d!==null?d=Ae(d):(d=ke(n)?Qt:me.current,d=Nn(t,d));var j=n.getDerivedStateFromProps;(m=typeof j=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==h||x!==d)&&gl(t,o,a,d),ht=!1,x=t.memoizedState,o.state=x,ka(t,a,o,i);var k=t.memoizedState;l!==h||x!==k||we.current||ht?(typeof j=="function"&&(ss(t,n,j,a),k=t.memoizedState),(c=ht||hl(t,n,c,a,x,k,d)||!1)?(m||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(a,k,d),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(a,k,d)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===e.memoizedProps&&x===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&x===e.memoizedState||(t.flags|=1024),t.memoizedProps=a,t.memoizedState=k),o.props=a,o.state=k,o.context=d,a=c):(typeof o.componentDidUpdate!="function"||l===e.memoizedProps&&x===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&x===e.memoizedState||(t.flags|=1024),a=!1)}return cs(e,t,n,a,s,i)}function cs(e,t,n,a,i,s){Hc(e,t);var o=(t.flags&128)!==0;if(!a&&!o)return i&&ol(t,n,!1),ct(e,t,s);a=t.stateNode,If.current=t;var l=o&&typeof n.getDerivedStateFromError!="function"?null:a.render();return t.flags|=1,e!==null&&o?(t.child=zn(t,e.child,null,s),t.child=zn(t,null,l,s)):he(e,t,l,s),t.memoizedState=a.state,i&&ol(t,n,!0),t.child}function Vc(e){var t=e.stateNode;t.pendingContext?sl(e,t.pendingContext,t.pendingContext!==t.context):t.context&&sl(e,t.context,!1),to(e,t.containerInfo)}function kl(e,t,n,a,i){return Sn(),qs(i),t.flags|=256,he(e,t,n,a),t.child}var us={dehydrated:null,treeContext:null,retryLane:0};function ps(e){return{baseLanes:e,cachePool:null,transitions:null}}function Wc(e,t,n){var a=t.pendingProps,i=Q.current,s=!1,o=(t.flags&128)!==0,l;if((l=o)||(l=e!==null&&e.memoizedState===null?!1:(i&2)!==0),l?(s=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),H(Q,i&1),e===null)return as(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(o=a.children,e=a.fallback,s?(a=t.mode,s=t.child,o={mode:"hidden",children:o},!(a&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Va(o,a,0,null),e=Gt(e,a,n,null),s.return=t,e.return=t,s.sibling=e,t.child=s,t.child.memoizedState=ps(n),t.memoizedState=us,e):co(t,o));if(i=e.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return Tf(e,t,o,a,l,i,n);if(s){s=a.fallback,o=t.mode,i=e.child,l=i.sibling;var d={mode:"hidden",children:a.children};return!(o&1)&&t.child!==i?(a=t.child,a.childLanes=0,a.pendingProps=d,t.deletions=null):(a=Mt(i,d),a.subtreeFlags=i.subtreeFlags&14680064),l!==null?s=Mt(l,s):(s=Gt(s,o,n,null),s.flags|=2),s.return=t,a.return=t,a.sibling=s,t.child=a,a=s,s=t.child,o=e.child.memoizedState,o=o===null?ps(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=e.childLanes&~n,t.memoizedState=us,a}return s=e.child,e=s.sibling,a=Mt(s,{mode:"visible",children:a.children}),!(t.mode&1)&&(a.lanes=n),a.return=t,a.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=a,t.memoizedState=null,a}function co(e,t){return t=Va({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Hr(e,t,n,a){return a!==null&&qs(a),zn(t,e.child,null,n),e=co(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Tf(e,t,n,a,i,s,o){if(n)return t.flags&256?(t.flags&=-257,a=yi(Error(z(422))),Hr(e,t,o,a)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(s=a.fallback,i=t.mode,a=Va({mode:"visible",children:a.children},i,0,null),s=Gt(s,i,o,null),s.flags|=2,a.return=t,s.return=t,a.sibling=s,t.child=a,t.mode&1&&zn(t,e.child,null,o),t.child.memoizedState=ps(o),t.memoizedState=us,s);if(!(t.mode&1))return Hr(e,t,o,null);if(i.data==="$!"){if(a=i.nextSibling&&i.nextSibling.dataset,a)var l=a.dgst;return a=l,s=Error(z(419)),a=yi(s,a,void 0),Hr(e,t,o,a)}if(l=(o&e.childLanes)!==0,je||l){if(a=se,a!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(a.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,dt(e,i),We(a,e,i,-1))}return go(),a=yi(Error(z(421))),Hr(e,t,o,a)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=Wf.bind(null,e),i._reactRetry=t,null):(e=s.treeContext,Ce=Nt(i.nextSibling),Me=t,G=!0,He=null,e!==null&&(Te[Re++]=at,Te[Re++]=it,Te[Re++]=Yt,at=e.id,it=e.overflow,Yt=t),t=co(t,a.children),t.flags|=4096,t)}function Nl(e,t,n){e.lanes|=t;var a=e.alternate;a!==null&&(a.lanes|=t),is(e.return,t,n)}function bi(e,t,n,a,i){var s=e.memoizedState;s===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:a,tail:n,tailMode:i}:(s.isBackwards=t,s.rendering=null,s.renderingStartTime=0,s.last=a,s.tail=n,s.tailMode=i)}function Gc(e,t,n){var a=t.pendingProps,i=a.revealOrder,s=a.tail;if(he(e,t,a.children,n),a=Q.current,a&2)a=a&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Nl(e,n,t);else if(e.tag===19)Nl(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}a&=1}if(H(Q,a),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&Na(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),bi(t,!1,i,n,s);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Na(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}bi(t,!0,n,null,s);break;case"together":bi(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function aa(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function ct(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Kt|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(z(153));if(t.child!==null){for(e=t.child,n=Mt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Mt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Rf(e,t,n){switch(t.tag){case 3:Vc(t),Sn();break;case 5:vc(t);break;case 1:ke(t.type)&&va(t);break;case 4:to(t,t.stateNode.containerInfo);break;case 10:var a=t.type._context,i=t.memoizedProps.value;H(ja,a._currentValue),a._currentValue=i;break;case 13:if(a=t.memoizedState,a!==null)return a.dehydrated!==null?(H(Q,Q.current&1),t.flags|=128,null):n&t.child.childLanes?Wc(e,t,n):(H(Q,Q.current&1),e=ct(e,t,n),e!==null?e.sibling:null);H(Q,Q.current&1);break;case 19:if(a=(n&t.childLanes)!==0,e.flags&128){if(a)return Gc(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),H(Q,Q.current),a)break;return null;case 22:case 23:return t.lanes=0,$c(e,t,n)}return ct(e,t,n)}var Qc,fs,Yc,qc;Qc=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};fs=function(){};Yc=function(e,t,n,a){var i=e.memoizedProps;if(i!==a){e=t.stateNode,Vt(et.current);var s=null;switch(n){case"input":i=_i(e,i),a=_i(e,a),s=[];break;case"select":i=q({},i,{value:void 0}),a=q({},a,{value:void 0}),s=[];break;case"textarea":i=Fi(e,i),a=Fi(e,a),s=[];break;default:typeof i.onClick!="function"&&typeof a.onClick=="function"&&(e.onclick=ga)}Bi(n,a);var o;n=null;for(c in i)if(!a.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var l=i[c];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(ir.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in a){var d=a[c];if(l=i!=null?i[c]:void 0,a.hasOwnProperty(c)&&d!==l&&(d!=null||l!=null))if(c==="style")if(l){for(o in l)!l.hasOwnProperty(o)||d&&d.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in d)d.hasOwnProperty(o)&&l[o]!==d[o]&&(n||(n={}),n[o]=d[o])}else n||(s||(s=[]),s.push(c,n)),n=d;else c==="dangerouslySetInnerHTML"?(d=d?d.__html:void 0,l=l?l.__html:void 0,d!=null&&l!==d&&(s=s||[]).push(c,d)):c==="children"?typeof d!="string"&&typeof d!="number"||(s=s||[]).push(c,""+d):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(ir.hasOwnProperty(c)?(d!=null&&c==="onScroll"&&V("scroll",e),s||l===d||(s=[])):(s=s||[]).push(c,d))}n&&(s=s||[]).push("style",n);var c=s;(t.updateQueue=c)&&(t.flags|=4)}};qc=function(e,t,n,a){n!==a&&(t.flags|=4)};function $n(e,t){if(!G)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:a.sibling=null}}function ue(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,a=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,a|=i.subtreeFlags&14680064,a|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,a|=i.subtreeFlags,a|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=a,e.childLanes=n,t}function Lf(e,t,n){var a=t.pendingProps;switch(Ys(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ue(t),null;case 1:return ke(t.type)&&xa(),ue(t),null;case 3:return a=t.stateNode,Cn(),W(we),W(me),ro(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(Ur(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,He!==null&&(js(He),He=null))),fs(e,t),ue(t),null;case 5:no(t);var i=Vt(xr.current);if(n=t.type,e!==null&&t.stateNode!=null)Yc(e,t,n,a,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!a){if(t.stateNode===null)throw Error(z(166));return ue(t),null}if(e=Vt(et.current),Ur(t)){a=t.stateNode,n=t.type;var s=t.memoizedProps;switch(a[Je]=t,a[hr]=s,e=(t.mode&1)!==0,n){case"dialog":V("cancel",a),V("close",a);break;case"iframe":case"object":case"embed":V("load",a);break;case"video":case"audio":for(i=0;i<qn.length;i++)V(qn[i],a);break;case"source":V("error",a);break;case"img":case"image":case"link":V("error",a),V("load",a);break;case"details":V("toggle",a);break;case"input":Ro(a,s),V("invalid",a);break;case"select":a._wrapperState={wasMultiple:!!s.multiple},V("invalid",a);break;case"textarea":_o(a,s),V("invalid",a)}Bi(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var l=s[o];o==="children"?typeof l=="string"?a.textContent!==l&&(s.suppressHydrationWarning!==!0&&Br(a.textContent,l,e),i=["children",l]):typeof l=="number"&&a.textContent!==""+l&&(s.suppressHydrationWarning!==!0&&Br(a.textContent,l,e),i=["children",""+l]):ir.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&V("scroll",a)}switch(n){case"input":Tr(a),Lo(a,s,!0);break;case"textarea":Tr(a),Ao(a);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(a.onclick=ga)}a=i,t.updateQueue=a,a!==null&&(t.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=kd(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof a.is=="string"?e=o.createElement(n,{is:a.is}):(e=o.createElement(n),n==="select"&&(o=e,a.multiple?o.multiple=!0:a.size&&(o.size=a.size))):e=o.createElementNS(e,n),e[Je]=t,e[hr]=a,Qc(e,t,!1,!1),t.stateNode=e;e:{switch(o=Ui(n,a),n){case"dialog":V("cancel",e),V("close",e),i=a;break;case"iframe":case"object":case"embed":V("load",e),i=a;break;case"video":case"audio":for(i=0;i<qn.length;i++)V(qn[i],e);i=a;break;case"source":V("error",e),i=a;break;case"img":case"image":case"link":V("error",e),V("load",e),i=a;break;case"details":V("toggle",e),i=a;break;case"input":Ro(e,a),i=_i(e,a),V("invalid",e);break;case"option":i=a;break;case"select":e._wrapperState={wasMultiple:!!a.multiple},i=q({},a,{value:void 0}),V("invalid",e);break;case"textarea":_o(e,a),i=Fi(e,a),V("invalid",e);break;default:i=a}Bi(n,i),l=i;for(s in l)if(l.hasOwnProperty(s)){var d=l[s];s==="style"?zd(e,d):s==="dangerouslySetInnerHTML"?(d=d?d.__html:void 0,d!=null&&Nd(e,d)):s==="children"?typeof d=="string"?(n!=="textarea"||d!=="")&&sr(e,d):typeof d=="number"&&sr(e,""+d):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(ir.hasOwnProperty(s)?d!=null&&s==="onScroll"&&V("scroll",e):d!=null&&Rs(e,s,d,o))}switch(n){case"input":Tr(e),Lo(e,a,!1);break;case"textarea":Tr(e),Ao(e);break;case"option":a.value!=null&&e.setAttribute("value",""+Pt(a.value));break;case"select":e.multiple=!!a.multiple,s=a.value,s!=null?xn(e,!!a.multiple,s,!1):a.defaultValue!=null&&xn(e,!!a.multiple,a.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=ga)}switch(n){case"button":case"input":case"select":case"textarea":a=!!a.autoFocus;break e;case"img":a=!0;break e;default:a=!1}}a&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return ue(t),null;case 6:if(e&&t.stateNode!=null)qc(e,t,e.memoizedProps,a);else{if(typeof a!="string"&&t.stateNode===null)throw Error(z(166));if(n=Vt(xr.current),Vt(et.current),Ur(t)){if(a=t.stateNode,n=t.memoizedProps,a[Je]=t,(s=a.nodeValue!==n)&&(e=Me,e!==null))switch(e.tag){case 3:Br(a.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Br(a.nodeValue,n,(e.mode&1)!==0)}s&&(t.flags|=4)}else a=(n.nodeType===9?n:n.ownerDocument).createTextNode(a),a[Je]=t,t.stateNode=a}return ue(t),null;case 13:if(W(Q),a=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(G&&Ce!==null&&t.mode&1&&!(t.flags&128))fc(),Sn(),t.flags|=98560,s=!1;else if(s=Ur(t),a!==null&&a.dehydrated!==null){if(e===null){if(!s)throw Error(z(318));if(s=t.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(z(317));s[Je]=t}else Sn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;ue(t),s=!1}else He!==null&&(js(He),He=null),s=!0;if(!s)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(a=a!==null,a!==(e!==null&&e.memoizedState!==null)&&a&&(t.child.flags|=8192,t.mode&1&&(e===null||Q.current&1?re===0&&(re=3):go())),t.updateQueue!==null&&(t.flags|=4),ue(t),null);case 4:return Cn(),fs(e,t),e===null&&fr(t.stateNode.containerInfo),ue(t),null;case 10:return Js(t.type._context),ue(t),null;case 17:return ke(t.type)&&xa(),ue(t),null;case 19:if(W(Q),s=t.memoizedState,s===null)return ue(t),null;if(a=(t.flags&128)!==0,o=s.rendering,o===null)if(a)$n(s,!1);else{if(re!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=Na(e),o!==null){for(t.flags|=128,$n(s,!1),a=o.updateQueue,a!==null&&(t.updateQueue=a,t.flags|=4),t.subtreeFlags=0,a=n,n=t.child;n!==null;)s=n,e=a,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=e,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,e=o.dependencies,s.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return H(Q,Q.current&1|2),t.child}e=e.sibling}s.tail!==null&&Z()>En&&(t.flags|=128,a=!0,$n(s,!1),t.lanes=4194304)}else{if(!a)if(e=Na(o),e!==null){if(t.flags|=128,a=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),$n(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!G)return ue(t),null}else 2*Z()-s.renderingStartTime>En&&n!==1073741824&&(t.flags|=128,a=!0,$n(s,!1),t.lanes=4194304);s.isBackwards?(o.sibling=t.child,t.child=o):(n=s.last,n!==null?n.sibling=o:t.child=o,s.last=o)}return s.tail!==null?(t=s.tail,s.rendering=t,s.tail=t.sibling,s.renderingStartTime=Z(),t.sibling=null,n=Q.current,H(Q,a?n&1|2:n&1),t):(ue(t),null);case 22:case 23:return ho(),a=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==a&&(t.flags|=8192),a&&t.mode&1?ze&1073741824&&(ue(t),t.subtreeFlags&6&&(t.flags|=8192)):ue(t),null;case 24:return null;case 25:return null}throw Error(z(156,t.tag))}function _f(e,t){switch(Ys(t),t.tag){case 1:return ke(t.type)&&xa(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Cn(),W(we),W(me),ro(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return no(t),null;case 13:if(W(Q),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(z(340));Sn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return W(Q),null;case 4:return Cn(),null;case 10:return Js(t.type._context),null;case 22:case 23:return ho(),null;case 24:return null;default:return null}}var Vr=!1,fe=!1,Af=typeof WeakSet=="function"?WeakSet:Set,I=null;function hn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(a){J(e,t,a)}else n.current=null}function ms(e,t,n){try{n()}catch(a){J(e,t,a)}}var Sl=!1;function Df(e,t){if(Xi=fa,e=ec(),Gs(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var a=n.getSelection&&n.getSelection();if(a&&a.rangeCount!==0){n=a.anchorNode;var i=a.anchorOffset,s=a.focusNode;a=a.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,l=-1,d=-1,c=0,m=0,h=e,x=null;t:for(;;){for(var j;h!==n||i!==0&&h.nodeType!==3||(l=o+i),h!==s||a!==0&&h.nodeType!==3||(d=o+a),h.nodeType===3&&(o+=h.nodeValue.length),(j=h.firstChild)!==null;)x=h,h=j;for(;;){if(h===e)break t;if(x===n&&++c===i&&(l=o),x===s&&++m===a&&(d=o),(j=h.nextSibling)!==null)break;h=x,x=h.parentNode}h=j}n=l===-1||d===-1?null:{start:l,end:d}}else n=null}n=n||{start:0,end:0}}else n=null;for(Ji={focusedElem:e,selectionRange:n},fa=!1,I=t;I!==null;)if(t=I,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,I=e;else for(;I!==null;){t=I;try{var k=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(k!==null){var v=k.memoizedProps,b=k.memoizedState,f=t.stateNode,u=f.getSnapshotBeforeUpdate(t.elementType===t.type?v:Ue(t.type,v),b);f.__reactInternalSnapshotBeforeUpdate=u}break;case 3:var p=t.stateNode.containerInfo;p.nodeType===1?p.textContent="":p.nodeType===9&&p.documentElement&&p.removeChild(p.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(z(163))}}catch(w){J(t,t.return,w)}if(e=t.sibling,e!==null){e.return=t.return,I=e;break}I=t.return}return k=Sl,Sl=!1,k}function nr(e,t,n){var a=t.updateQueue;if(a=a!==null?a.lastEffect:null,a!==null){var i=a=a.next;do{if((i.tag&e)===e){var s=i.destroy;i.destroy=void 0,s!==void 0&&ms(t,n,s)}i=i.next}while(i!==a)}}function $a(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var a=n.create;n.destroy=a()}n=n.next}while(n!==t)}}function hs(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Kc(e){var t=e.alternate;t!==null&&(e.alternate=null,Kc(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Je],delete t[hr],delete t[ts],delete t[yf],delete t[bf])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Xc(e){return e.tag===5||e.tag===3||e.tag===4}function zl(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Xc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function gs(e,t,n){var a=e.tag;if(a===5||a===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=ga));else if(a!==4&&(e=e.child,e!==null))for(gs(e,t,n),e=e.sibling;e!==null;)gs(e,t,n),e=e.sibling}function xs(e,t,n){var a=e.tag;if(a===5||a===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(a!==4&&(e=e.child,e!==null))for(xs(e,t,n),e=e.sibling;e!==null;)xs(e,t,n),e=e.sibling}var oe=null,$e=!1;function ft(e,t,n){for(n=n.child;n!==null;)Jc(e,t,n),n=n.sibling}function Jc(e,t,n){if(Ze&&typeof Ze.onCommitFiberUnmount=="function")try{Ze.onCommitFiberUnmount(La,n)}catch{}switch(n.tag){case 5:fe||hn(n,t);case 6:var a=oe,i=$e;oe=null,ft(e,t,n),oe=a,$e=i,oe!==null&&($e?(e=oe,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):oe.removeChild(n.stateNode));break;case 18:oe!==null&&($e?(e=oe,n=n.stateNode,e.nodeType===8?fi(e.parentNode,n):e.nodeType===1&&fi(e,n),cr(e)):fi(oe,n.stateNode));break;case 4:a=oe,i=$e,oe=n.stateNode.containerInfo,$e=!0,ft(e,t,n),oe=a,$e=i;break;case 0:case 11:case 14:case 15:if(!fe&&(a=n.updateQueue,a!==null&&(a=a.lastEffect,a!==null))){i=a=a.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&ms(n,t,o),i=i.next}while(i!==a)}ft(e,t,n);break;case 1:if(!fe&&(hn(n,t),a=n.stateNode,typeof a.componentWillUnmount=="function"))try{a.props=n.memoizedProps,a.state=n.memoizedState,a.componentWillUnmount()}catch(l){J(n,t,l)}ft(e,t,n);break;case 21:ft(e,t,n);break;case 22:n.mode&1?(fe=(a=fe)||n.memoizedState!==null,ft(e,t,n),fe=a):ft(e,t,n);break;default:ft(e,t,n)}}function Cl(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Af),t.forEach(function(a){var i=Gf.bind(null,e,a);n.has(a)||(n.add(a),a.then(i,i))})}}function Fe(e,t){var n=t.deletions;if(n!==null)for(var a=0;a<n.length;a++){var i=n[a];try{var s=e,o=t,l=o;e:for(;l!==null;){switch(l.tag){case 5:oe=l.stateNode,$e=!1;break e;case 3:oe=l.stateNode.containerInfo,$e=!0;break e;case 4:oe=l.stateNode.containerInfo,$e=!0;break e}l=l.return}if(oe===null)throw Error(z(160));Jc(s,o,i),oe=null,$e=!1;var d=i.alternate;d!==null&&(d.return=null),i.return=null}catch(c){J(i,t,c)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Zc(t,e),t=t.sibling}function Zc(e,t){var n=e.alternate,a=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Fe(t,e),Ye(e),a&4){try{nr(3,e,e.return),$a(3,e)}catch(v){J(e,e.return,v)}try{nr(5,e,e.return)}catch(v){J(e,e.return,v)}}break;case 1:Fe(t,e),Ye(e),a&512&&n!==null&&hn(n,n.return);break;case 5:if(Fe(t,e),Ye(e),a&512&&n!==null&&hn(n,n.return),e.flags&32){var i=e.stateNode;try{sr(i,"")}catch(v){J(e,e.return,v)}}if(a&4&&(i=e.stateNode,i!=null)){var s=e.memoizedProps,o=n!==null?n.memoizedProps:s,l=e.type,d=e.updateQueue;if(e.updateQueue=null,d!==null)try{l==="input"&&s.type==="radio"&&s.name!=null&&jd(i,s),Ui(l,o);var c=Ui(l,s);for(o=0;o<d.length;o+=2){var m=d[o],h=d[o+1];m==="style"?zd(i,h):m==="dangerouslySetInnerHTML"?Nd(i,h):m==="children"?sr(i,h):Rs(i,m,h,c)}switch(l){case"input":Ai(i,s);break;case"textarea":wd(i,s);break;case"select":var x=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var j=s.value;j!=null?xn(i,!!s.multiple,j,!1):x!==!!s.multiple&&(s.defaultValue!=null?xn(i,!!s.multiple,s.defaultValue,!0):xn(i,!!s.multiple,s.multiple?[]:"",!1))}i[hr]=s}catch(v){J(e,e.return,v)}}break;case 6:if(Fe(t,e),Ye(e),a&4){if(e.stateNode===null)throw Error(z(162));i=e.stateNode,s=e.memoizedProps;try{i.nodeValue=s}catch(v){J(e,e.return,v)}}break;case 3:if(Fe(t,e),Ye(e),a&4&&n!==null&&n.memoizedState.isDehydrated)try{cr(t.containerInfo)}catch(v){J(e,e.return,v)}break;case 4:Fe(t,e),Ye(e);break;case 13:Fe(t,e),Ye(e),i=e.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(fo=Z())),a&4&&Cl(e);break;case 22:if(m=n!==null&&n.memoizedState!==null,e.mode&1?(fe=(c=fe)||m,Fe(t,e),fe=c):Fe(t,e),Ye(e),a&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!m&&e.mode&1)for(I=e,m=e.child;m!==null;){for(h=I=m;I!==null;){switch(x=I,j=x.child,x.tag){case 0:case 11:case 14:case 15:nr(4,x,x.return);break;case 1:hn(x,x.return);var k=x.stateNode;if(typeof k.componentWillUnmount=="function"){a=x,n=x.return;try{t=a,k.props=t.memoizedProps,k.state=t.memoizedState,k.componentWillUnmount()}catch(v){J(a,n,v)}}break;case 5:hn(x,x.return);break;case 22:if(x.memoizedState!==null){El(h);continue}}j!==null?(j.return=x,I=j):El(h)}m=m.sibling}e:for(m=null,h=e;;){if(h.tag===5){if(m===null){m=h;try{i=h.stateNode,c?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(l=h.stateNode,d=h.memoizedProps.style,o=d!=null&&d.hasOwnProperty("display")?d.display:null,l.style.display=Sd("display",o))}catch(v){J(e,e.return,v)}}}else if(h.tag===6){if(m===null)try{h.stateNode.nodeValue=c?"":h.memoizedProps}catch(v){J(e,e.return,v)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===e)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===e)break e;for(;h.sibling===null;){if(h.return===null||h.return===e)break e;m===h&&(m=null),h=h.return}m===h&&(m=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:Fe(t,e),Ye(e),a&4&&Cl(e);break;case 21:break;default:Fe(t,e),Ye(e)}}function Ye(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Xc(n)){var a=n;break e}n=n.return}throw Error(z(160))}switch(a.tag){case 5:var i=a.stateNode;a.flags&32&&(sr(i,""),a.flags&=-33);var s=zl(e);xs(e,s,i);break;case 3:case 4:var o=a.stateNode.containerInfo,l=zl(e);gs(e,l,o);break;default:throw Error(z(161))}}catch(d){J(e,e.return,d)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Ff(e,t,n){I=e,eu(e)}function eu(e,t,n){for(var a=(e.mode&1)!==0;I!==null;){var i=I,s=i.child;if(i.tag===22&&a){var o=i.memoizedState!==null||Vr;if(!o){var l=i.alternate,d=l!==null&&l.memoizedState!==null||fe;l=Vr;var c=fe;if(Vr=o,(fe=d)&&!c)for(I=i;I!==null;)o=I,d=o.child,o.tag===22&&o.memoizedState!==null?Pl(i):d!==null?(d.return=o,I=d):Pl(i);for(;s!==null;)I=s,eu(s),s=s.sibling;I=i,Vr=l,fe=c}Ml(e)}else i.subtreeFlags&8772&&s!==null?(s.return=i,I=s):Ml(e)}}function Ml(e){for(;I!==null;){var t=I;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:fe||$a(5,t);break;case 1:var a=t.stateNode;if(t.flags&4&&!fe)if(n===null)a.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:Ue(t.type,n.memoizedProps);a.componentDidUpdate(i,n.memoizedState,a.__reactInternalSnapshotBeforeUpdate)}var s=t.updateQueue;s!==null&&pl(t,s,a);break;case 3:var o=t.updateQueue;if(o!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}pl(t,o,n)}break;case 5:var l=t.stateNode;if(n===null&&t.flags&4){n=l;var d=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":d.autoFocus&&n.focus();break;case"img":d.src&&(n.src=d.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var c=t.alternate;if(c!==null){var m=c.memoizedState;if(m!==null){var h=m.dehydrated;h!==null&&cr(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(z(163))}fe||t.flags&512&&hs(t)}catch(x){J(t,t.return,x)}}if(t===e){I=null;break}if(n=t.sibling,n!==null){n.return=t.return,I=n;break}I=t.return}}function El(e){for(;I!==null;){var t=I;if(t===e){I=null;break}var n=t.sibling;if(n!==null){n.return=t.return,I=n;break}I=t.return}}function Pl(e){for(;I!==null;){var t=I;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{$a(4,t)}catch(d){J(t,n,d)}break;case 1:var a=t.stateNode;if(typeof a.componentDidMount=="function"){var i=t.return;try{a.componentDidMount()}catch(d){J(t,i,d)}}var s=t.return;try{hs(t)}catch(d){J(t,s,d)}break;case 5:var o=t.return;try{hs(t)}catch(d){J(t,o,d)}}}catch(d){J(t,t.return,d)}if(t===e){I=null;break}var l=t.sibling;if(l!==null){l.return=t.return,I=l;break}I=t.return}}var Of=Math.ceil,Ca=ut.ReactCurrentDispatcher,uo=ut.ReactCurrentOwner,_e=ut.ReactCurrentBatchConfig,F=0,se=null,te=null,le=0,ze=0,gn=Rt(0),re=0,jr=null,Kt=0,Ha=0,po=0,rr=null,be=null,fo=0,En=1/0,nt=null,Ma=!1,vs=null,zt=null,Wr=!1,yt=null,Ea=0,ar=0,ys=null,ia=-1,sa=0;function xe(){return F&6?Z():ia!==-1?ia:ia=Z()}function Ct(e){return e.mode&1?F&2&&le!==0?le&-le:wf.transition!==null?(sa===0&&(sa=Fd()),sa):(e=U,e!==0||(e=window.event,e=e===void 0?16:Wd(e.type)),e):1}function We(e,t,n,a){if(50<ar)throw ar=0,ys=null,Error(z(185));Sr(e,n,a),(!(F&2)||e!==se)&&(e===se&&(!(F&2)&&(Ha|=n),re===4&&xt(e,le)),Ne(e,a),n===1&&F===0&&!(t.mode&1)&&(En=Z()+500,Oa&&Lt()))}function Ne(e,t){var n=e.callbackNode;jp(e,t);var a=pa(e,e===se?le:0);if(a===0)n!==null&&Oo(n),e.callbackNode=null,e.callbackPriority=0;else if(t=a&-a,e.callbackPriority!==t){if(n!=null&&Oo(n),t===1)e.tag===0?jf(Il.bind(null,e)):cc(Il.bind(null,e)),xf(function(){!(F&6)&&Lt()}),n=null;else{switch(Od(a)){case 1:n=Fs;break;case 4:n=Ad;break;case 16:n=ua;break;case 536870912:n=Dd;break;default:n=ua}n=lu(n,tu.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function tu(e,t){if(ia=-1,sa=0,F&6)throw Error(z(327));var n=e.callbackNode;if(wn()&&e.callbackNode!==n)return null;var a=pa(e,e===se?le:0);if(a===0)return null;if(a&30||a&e.expiredLanes||t)t=Pa(e,a);else{t=a;var i=F;F|=2;var s=ru();(se!==e||le!==t)&&(nt=null,En=Z()+500,Wt(e,t));do try{$f();break}catch(l){nu(e,l)}while(!0);Xs(),Ca.current=s,F=i,te!==null?t=0:(se=null,le=0,t=re)}if(t!==0){if(t===2&&(i=Gi(e),i!==0&&(a=i,t=bs(e,i))),t===1)throw n=jr,Wt(e,0),xt(e,a),Ne(e,Z()),n;if(t===6)xt(e,a);else{if(i=e.current.alternate,!(a&30)&&!Bf(i)&&(t=Pa(e,a),t===2&&(s=Gi(e),s!==0&&(a=s,t=bs(e,s))),t===1))throw n=jr,Wt(e,0),xt(e,a),Ne(e,Z()),n;switch(e.finishedWork=i,e.finishedLanes=a,t){case 0:case 1:throw Error(z(345));case 2:Ut(e,be,nt);break;case 3:if(xt(e,a),(a&130023424)===a&&(t=fo+500-Z(),10<t)){if(pa(e,0)!==0)break;if(i=e.suspendedLanes,(i&a)!==a){xe(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=es(Ut.bind(null,e,be,nt),t);break}Ut(e,be,nt);break;case 4:if(xt(e,a),(a&4194240)===a)break;for(t=e.eventTimes,i=-1;0<a;){var o=31-Ve(a);s=1<<o,o=t[o],o>i&&(i=o),a&=~s}if(a=i,a=Z()-a,a=(120>a?120:480>a?480:1080>a?1080:1920>a?1920:3e3>a?3e3:4320>a?4320:1960*Of(a/1960))-a,10<a){e.timeoutHandle=es(Ut.bind(null,e,be,nt),a);break}Ut(e,be,nt);break;case 5:Ut(e,be,nt);break;default:throw Error(z(329))}}}return Ne(e,Z()),e.callbackNode===n?tu.bind(null,e):null}function bs(e,t){var n=rr;return e.current.memoizedState.isDehydrated&&(Wt(e,t).flags|=256),e=Pa(e,t),e!==2&&(t=be,be=n,t!==null&&js(t)),e}function js(e){be===null?be=e:be.push.apply(be,e)}function Bf(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var a=0;a<n.length;a++){var i=n[a],s=i.getSnapshot;i=i.value;try{if(!Ge(s(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function xt(e,t){for(t&=~po,t&=~Ha,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Ve(t),a=1<<n;e[n]=-1,t&=~a}}function Il(e){if(F&6)throw Error(z(327));wn();var t=pa(e,0);if(!(t&1))return Ne(e,Z()),null;var n=Pa(e,t);if(e.tag!==0&&n===2){var a=Gi(e);a!==0&&(t=a,n=bs(e,a))}if(n===1)throw n=jr,Wt(e,0),xt(e,t),Ne(e,Z()),n;if(n===6)throw Error(z(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Ut(e,be,nt),Ne(e,Z()),null}function mo(e,t){var n=F;F|=1;try{return e(t)}finally{F=n,F===0&&(En=Z()+500,Oa&&Lt())}}function Xt(e){yt!==null&&yt.tag===0&&!(F&6)&&wn();var t=F;F|=1;var n=_e.transition,a=U;try{if(_e.transition=null,U=1,e)return e()}finally{U=a,_e.transition=n,F=t,!(F&6)&&Lt()}}function ho(){ze=gn.current,W(gn)}function Wt(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,gf(n)),te!==null)for(n=te.return;n!==null;){var a=n;switch(Ys(a),a.tag){case 1:a=a.type.childContextTypes,a!=null&&xa();break;case 3:Cn(),W(we),W(me),ro();break;case 5:no(a);break;case 4:Cn();break;case 13:W(Q);break;case 19:W(Q);break;case 10:Js(a.type._context);break;case 22:case 23:ho()}n=n.return}if(se=e,te=e=Mt(e.current,null),le=ze=t,re=0,jr=null,po=Ha=Kt=0,be=rr=null,Ht!==null){for(t=0;t<Ht.length;t++)if(n=Ht[t],a=n.interleaved,a!==null){n.interleaved=null;var i=a.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,a.next=o}n.pending=a}Ht=null}return e}function nu(e,t){do{var n=te;try{if(Xs(),na.current=za,Sa){for(var a=Y.memoizedState;a!==null;){var i=a.queue;i!==null&&(i.pending=null),a=a.next}Sa=!1}if(qt=0,ie=ne=Y=null,tr=!1,vr=0,uo.current=null,n===null||n.return===null){re=1,jr=t,te=null;break}e:{var s=e,o=n.return,l=n,d=t;if(t=le,l.flags|=32768,d!==null&&typeof d=="object"&&typeof d.then=="function"){var c=d,m=l,h=m.tag;if(!(m.mode&1)&&(h===0||h===11||h===15)){var x=m.alternate;x?(m.updateQueue=x.updateQueue,m.memoizedState=x.memoizedState,m.lanes=x.lanes):(m.updateQueue=null,m.memoizedState=null)}var j=vl(o);if(j!==null){j.flags&=-257,yl(j,o,l,s,t),j.mode&1&&xl(s,c,t),t=j,d=c;var k=t.updateQueue;if(k===null){var v=new Set;v.add(d),t.updateQueue=v}else k.add(d);break e}else{if(!(t&1)){xl(s,c,t),go();break e}d=Error(z(426))}}else if(G&&l.mode&1){var b=vl(o);if(b!==null){!(b.flags&65536)&&(b.flags|=256),yl(b,o,l,s,t),qs(Mn(d,l));break e}}s=d=Mn(d,l),re!==4&&(re=2),rr===null?rr=[s]:rr.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,t&=-t,s.lanes|=t;var f=Oc(s,d,t);ul(s,f);break e;case 1:l=d;var u=s.type,p=s.stateNode;if(!(s.flags&128)&&(typeof u.getDerivedStateFromError=="function"||p!==null&&typeof p.componentDidCatch=="function"&&(zt===null||!zt.has(p)))){s.flags|=65536,t&=-t,s.lanes|=t;var w=Bc(s,l,t);ul(s,w);break e}}s=s.return}while(s!==null)}iu(n)}catch(S){t=S,te===n&&n!==null&&(te=n=n.return);continue}break}while(!0)}function ru(){var e=Ca.current;return Ca.current=za,e===null?za:e}function go(){(re===0||re===3||re===2)&&(re=4),se===null||!(Kt&268435455)&&!(Ha&268435455)||xt(se,le)}function Pa(e,t){var n=F;F|=2;var a=ru();(se!==e||le!==t)&&(nt=null,Wt(e,t));do try{Uf();break}catch(i){nu(e,i)}while(!0);if(Xs(),F=n,Ca.current=a,te!==null)throw Error(z(261));return se=null,le=0,re}function Uf(){for(;te!==null;)au(te)}function $f(){for(;te!==null&&!pp();)au(te)}function au(e){var t=ou(e.alternate,e,ze);e.memoizedProps=e.pendingProps,t===null?iu(e):te=t,uo.current=null}function iu(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=_f(n,t),n!==null){n.flags&=32767,te=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{re=6,te=null;return}}else if(n=Lf(n,t,ze),n!==null){te=n;return}if(t=t.sibling,t!==null){te=t;return}te=t=e}while(t!==null);re===0&&(re=5)}function Ut(e,t,n){var a=U,i=_e.transition;try{_e.transition=null,U=1,Hf(e,t,n,a)}finally{_e.transition=i,U=a}return null}function Hf(e,t,n,a){do wn();while(yt!==null);if(F&6)throw Error(z(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(z(177));e.callbackNode=null,e.callbackPriority=0;var s=n.lanes|n.childLanes;if(wp(e,s),e===se&&(te=se=null,le=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Wr||(Wr=!0,lu(ua,function(){return wn(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=_e.transition,_e.transition=null;var o=U;U=1;var l=F;F|=4,uo.current=null,Df(e,n),Zc(n,e),df(Ji),fa=!!Xi,Ji=Xi=null,e.current=n,Ff(n),fp(),F=l,U=o,_e.transition=s}else e.current=n;if(Wr&&(Wr=!1,yt=e,Ea=i),s=e.pendingLanes,s===0&&(zt=null),gp(n.stateNode),Ne(e,Z()),t!==null)for(a=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],a(i.value,{componentStack:i.stack,digest:i.digest});if(Ma)throw Ma=!1,e=vs,vs=null,e;return Ea&1&&e.tag!==0&&wn(),s=e.pendingLanes,s&1?e===ys?ar++:(ar=0,ys=e):ar=0,Lt(),null}function wn(){if(yt!==null){var e=Od(Ea),t=_e.transition,n=U;try{if(_e.transition=null,U=16>e?16:e,yt===null)var a=!1;else{if(e=yt,yt=null,Ea=0,F&6)throw Error(z(331));var i=F;for(F|=4,I=e.current;I!==null;){var s=I,o=s.child;if(I.flags&16){var l=s.deletions;if(l!==null){for(var d=0;d<l.length;d++){var c=l[d];for(I=c;I!==null;){var m=I;switch(m.tag){case 0:case 11:case 15:nr(8,m,s)}var h=m.child;if(h!==null)h.return=m,I=h;else for(;I!==null;){m=I;var x=m.sibling,j=m.return;if(Kc(m),m===c){I=null;break}if(x!==null){x.return=j,I=x;break}I=j}}}var k=s.alternate;if(k!==null){var v=k.child;if(v!==null){k.child=null;do{var b=v.sibling;v.sibling=null,v=b}while(v!==null)}}I=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,I=o;else e:for(;I!==null;){if(s=I,s.flags&2048)switch(s.tag){case 0:case 11:case 15:nr(9,s,s.return)}var f=s.sibling;if(f!==null){f.return=s.return,I=f;break e}I=s.return}}var u=e.current;for(I=u;I!==null;){o=I;var p=o.child;if(o.subtreeFlags&2064&&p!==null)p.return=o,I=p;else e:for(o=u;I!==null;){if(l=I,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:$a(9,l)}}catch(S){J(l,l.return,S)}if(l===o){I=null;break e}var w=l.sibling;if(w!==null){w.return=l.return,I=w;break e}I=l.return}}if(F=i,Lt(),Ze&&typeof Ze.onPostCommitFiberRoot=="function")try{Ze.onPostCommitFiberRoot(La,e)}catch{}a=!0}return a}finally{U=n,_e.transition=t}}return!1}function Tl(e,t,n){t=Mn(n,t),t=Oc(e,t,1),e=St(e,t,1),t=xe(),e!==null&&(Sr(e,1,t),Ne(e,t))}function J(e,t,n){if(e.tag===3)Tl(e,e,n);else for(;t!==null;){if(t.tag===3){Tl(t,e,n);break}else if(t.tag===1){var a=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(zt===null||!zt.has(a))){e=Mn(n,e),e=Bc(t,e,1),t=St(t,e,1),e=xe(),t!==null&&(Sr(t,1,e),Ne(t,e));break}}t=t.return}}function Vf(e,t,n){var a=e.pingCache;a!==null&&a.delete(t),t=xe(),e.pingedLanes|=e.suspendedLanes&n,se===e&&(le&n)===n&&(re===4||re===3&&(le&130023424)===le&&500>Z()-fo?Wt(e,0):po|=n),Ne(e,t)}function su(e,t){t===0&&(e.mode&1?(t=_r,_r<<=1,!(_r&130023424)&&(_r=4194304)):t=1);var n=xe();e=dt(e,t),e!==null&&(Sr(e,t,n),Ne(e,n))}function Wf(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),su(e,n)}function Gf(e,t){var n=0;switch(e.tag){case 13:var a=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:a=e.stateNode;break;default:throw Error(z(314))}a!==null&&a.delete(t),su(e,n)}var ou;ou=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||we.current)je=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return je=!1,Rf(e,t,n);je=!!(e.flags&131072)}else je=!1,G&&t.flags&1048576&&uc(t,ba,t.index);switch(t.lanes=0,t.tag){case 2:var a=t.type;aa(e,t),e=t.pendingProps;var i=Nn(t,me.current);jn(t,n),i=io(null,t,a,e,i,n);var s=so();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,ke(a)?(s=!0,va(t)):s=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,eo(t),i.updater=Ua,t.stateNode=i,i._reactInternals=t,os(t,a,e,n),t=cs(null,t,a,!0,s,n)):(t.tag=0,G&&s&&Qs(t),he(null,t,i,n),t=t.child),t;case 16:a=t.elementType;e:{switch(aa(e,t),e=t.pendingProps,i=a._init,a=i(a._payload),t.type=a,i=t.tag=Yf(a),e=Ue(a,e),i){case 0:t=ds(null,t,a,e,n);break e;case 1:t=wl(null,t,a,e,n);break e;case 11:t=bl(null,t,a,e,n);break e;case 14:t=jl(null,t,a,Ue(a.type,e),n);break e}throw Error(z(306,a,""))}return t;case 0:return a=t.type,i=t.pendingProps,i=t.elementType===a?i:Ue(a,i),ds(e,t,a,i,n);case 1:return a=t.type,i=t.pendingProps,i=t.elementType===a?i:Ue(a,i),wl(e,t,a,i,n);case 3:e:{if(Vc(t),e===null)throw Error(z(387));a=t.pendingProps,s=t.memoizedState,i=s.element,xc(e,t),ka(t,a,null,n);var o=t.memoizedState;if(a=o.element,s.isDehydrated)if(s={element:a,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},t.updateQueue.baseState=s,t.memoizedState=s,t.flags&256){i=Mn(Error(z(423)),t),t=kl(e,t,a,n,i);break e}else if(a!==i){i=Mn(Error(z(424)),t),t=kl(e,t,a,n,i);break e}else for(Ce=Nt(t.stateNode.containerInfo.firstChild),Me=t,G=!0,He=null,n=hc(t,null,a,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Sn(),a===i){t=ct(e,t,n);break e}he(e,t,a,n)}t=t.child}return t;case 5:return vc(t),e===null&&as(t),a=t.type,i=t.pendingProps,s=e!==null?e.memoizedProps:null,o=i.children,Zi(a,i)?o=null:s!==null&&Zi(a,s)&&(t.flags|=32),Hc(e,t),he(e,t,o,n),t.child;case 6:return e===null&&as(t),null;case 13:return Wc(e,t,n);case 4:return to(t,t.stateNode.containerInfo),a=t.pendingProps,e===null?t.child=zn(t,null,a,n):he(e,t,a,n),t.child;case 11:return a=t.type,i=t.pendingProps,i=t.elementType===a?i:Ue(a,i),bl(e,t,a,i,n);case 7:return he(e,t,t.pendingProps,n),t.child;case 8:return he(e,t,t.pendingProps.children,n),t.child;case 12:return he(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(a=t.type._context,i=t.pendingProps,s=t.memoizedProps,o=i.value,H(ja,a._currentValue),a._currentValue=o,s!==null)if(Ge(s.value,o)){if(s.children===i.children&&!we.current){t=ct(e,t,n);break e}}else for(s=t.child,s!==null&&(s.return=t);s!==null;){var l=s.dependencies;if(l!==null){o=s.child;for(var d=l.firstContext;d!==null;){if(d.context===a){if(s.tag===1){d=st(-1,n&-n),d.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var m=c.pending;m===null?d.next=d:(d.next=m.next,m.next=d),c.pending=d}}s.lanes|=n,d=s.alternate,d!==null&&(d.lanes|=n),is(s.return,n,t),l.lanes|=n;break}d=d.next}}else if(s.tag===10)o=s.type===t.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(z(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),is(o,n,t),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===t){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}he(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,a=t.pendingProps.children,jn(t,n),i=Ae(i),a=a(i),t.flags|=1,he(e,t,a,n),t.child;case 14:return a=t.type,i=Ue(a,t.pendingProps),i=Ue(a.type,i),jl(e,t,a,i,n);case 15:return Uc(e,t,t.type,t.pendingProps,n);case 17:return a=t.type,i=t.pendingProps,i=t.elementType===a?i:Ue(a,i),aa(e,t),t.tag=1,ke(a)?(e=!0,va(t)):e=!1,jn(t,n),Fc(t,a,i),os(t,a,i,n),cs(null,t,a,!0,e,n);case 19:return Gc(e,t,n);case 22:return $c(e,t,n)}throw Error(z(156,t.tag))};function lu(e,t){return _d(e,t)}function Qf(e,t,n,a){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Le(e,t,n,a){return new Qf(e,t,n,a)}function xo(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Yf(e){if(typeof e=="function")return xo(e)?1:0;if(e!=null){if(e=e.$$typeof,e===_s)return 11;if(e===As)return 14}return 2}function Mt(e,t){var n=e.alternate;return n===null?(n=Le(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function oa(e,t,n,a,i,s){var o=2;if(a=e,typeof e=="function")xo(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case sn:return Gt(n.children,i,s,t);case Ls:o=8,i|=8;break;case Ii:return e=Le(12,n,t,i|2),e.elementType=Ii,e.lanes=s,e;case Ti:return e=Le(13,n,t,i),e.elementType=Ti,e.lanes=s,e;case Ri:return e=Le(19,n,t,i),e.elementType=Ri,e.lanes=s,e;case vd:return Va(n,i,s,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case gd:o=10;break e;case xd:o=9;break e;case _s:o=11;break e;case As:o=14;break e;case mt:o=16,a=null;break e}throw Error(z(130,e==null?e:typeof e,""))}return t=Le(o,n,t,i),t.elementType=e,t.type=a,t.lanes=s,t}function Gt(e,t,n,a){return e=Le(7,e,a,t),e.lanes=n,e}function Va(e,t,n,a){return e=Le(22,e,a,t),e.elementType=vd,e.lanes=n,e.stateNode={isHidden:!1},e}function ji(e,t,n){return e=Le(6,e,null,t),e.lanes=n,e}function wi(e,t,n){return t=Le(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function qf(e,t,n,a,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ni(0),this.expirationTimes=ni(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ni(0),this.identifierPrefix=a,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function vo(e,t,n,a,i,s,o,l,d){return e=new qf(e,t,n,l,d),t===1?(t=1,s===!0&&(t|=8)):t=0,s=Le(3,null,null,t),e.current=s,s.stateNode=e,s.memoizedState={element:a,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},eo(s),e}function Kf(e,t,n){var a=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:an,key:a==null?null:""+a,children:e,containerInfo:t,implementation:n}}function du(e){if(!e)return It;e=e._reactInternals;e:{if(Zt(e)!==e||e.tag!==1)throw Error(z(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(ke(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(z(171))}if(e.tag===1){var n=e.type;if(ke(n))return dc(e,n,t)}return t}function cu(e,t,n,a,i,s,o,l,d){return e=vo(n,a,!0,e,i,s,o,l,d),e.context=du(null),n=e.current,a=xe(),i=Ct(n),s=st(a,i),s.callback=t??null,St(n,s,i),e.current.lanes=i,Sr(e,i,a),Ne(e,a),e}function Wa(e,t,n,a){var i=t.current,s=xe(),o=Ct(i);return n=du(n),t.context===null?t.context=n:t.pendingContext=n,t=st(s,o),t.payload={element:e},a=a===void 0?null:a,a!==null&&(t.callback=a),e=St(i,t,o),e!==null&&(We(e,i,o,s),ta(e,i,o)),o}function Ia(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Rl(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function yo(e,t){Rl(e,t),(e=e.alternate)&&Rl(e,t)}function Xf(){return null}var uu=typeof reportError=="function"?reportError:function(e){console.error(e)};function bo(e){this._internalRoot=e}Ga.prototype.render=bo.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(z(409));Wa(e,t,null,null)};Ga.prototype.unmount=bo.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Xt(function(){Wa(null,e,null,null)}),t[lt]=null}};function Ga(e){this._internalRoot=e}Ga.prototype.unstable_scheduleHydration=function(e){if(e){var t=$d();e={blockedOn:null,target:e,priority:t};for(var n=0;n<gt.length&&t!==0&&t<gt[n].priority;n++);gt.splice(n,0,e),n===0&&Vd(e)}};function jo(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Qa(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Ll(){}function Jf(e,t,n,a,i){if(i){if(typeof a=="function"){var s=a;a=function(){var c=Ia(o);s.call(c)}}var o=cu(t,a,e,0,null,!1,!1,"",Ll);return e._reactRootContainer=o,e[lt]=o.current,fr(e.nodeType===8?e.parentNode:e),Xt(),o}for(;i=e.lastChild;)e.removeChild(i);if(typeof a=="function"){var l=a;a=function(){var c=Ia(d);l.call(c)}}var d=vo(e,0,!1,null,null,!1,!1,"",Ll);return e._reactRootContainer=d,e[lt]=d.current,fr(e.nodeType===8?e.parentNode:e),Xt(function(){Wa(t,d,n,a)}),d}function Ya(e,t,n,a,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var l=i;i=function(){var d=Ia(o);l.call(d)}}Wa(t,o,e,i)}else o=Jf(n,t,e,i,a);return Ia(o)}Bd=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Yn(t.pendingLanes);n!==0&&(Os(t,n|1),Ne(t,Z()),!(F&6)&&(En=Z()+500,Lt()))}break;case 13:Xt(function(){var a=dt(e,1);if(a!==null){var i=xe();We(a,e,1,i)}}),yo(e,1)}};Bs=function(e){if(e.tag===13){var t=dt(e,134217728);if(t!==null){var n=xe();We(t,e,134217728,n)}yo(e,134217728)}};Ud=function(e){if(e.tag===13){var t=Ct(e),n=dt(e,t);if(n!==null){var a=xe();We(n,e,t,a)}yo(e,t)}};$d=function(){return U};Hd=function(e,t){var n=U;try{return U=e,t()}finally{U=n}};Hi=function(e,t,n){switch(t){case"input":if(Ai(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var a=n[t];if(a!==e&&a.form===e.form){var i=Fa(a);if(!i)throw Error(z(90));bd(a),Ai(a,i)}}}break;case"textarea":wd(e,n);break;case"select":t=n.value,t!=null&&xn(e,!!n.multiple,t,!1)}};Ed=mo;Pd=Xt;var Zf={usingClientEntryPoint:!1,Events:[Cr,cn,Fa,Cd,Md,mo]},Hn={findFiberByHostInstance:$t,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},em={bundleType:Hn.bundleType,version:Hn.version,rendererPackageName:Hn.rendererPackageName,rendererConfig:Hn.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ut.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Rd(e),e===null?null:e.stateNode},findFiberByHostInstance:Hn.findFiberByHostInstance||Xf,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Gr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Gr.isDisabled&&Gr.supportsFiber)try{La=Gr.inject(em),Ze=Gr}catch{}}Pe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Zf;Pe.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!jo(t))throw Error(z(200));return Kf(e,t,null,n)};Pe.createRoot=function(e,t){if(!jo(e))throw Error(z(299));var n=!1,a="",i=uu;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(a=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=vo(e,1,!1,null,null,n,!1,a,i),e[lt]=t.current,fr(e.nodeType===8?e.parentNode:e),new bo(t)};Pe.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(z(188)):(e=Object.keys(e).join(","),Error(z(268,e)));return e=Rd(t),e=e===null?null:e.stateNode,e};Pe.flushSync=function(e){return Xt(e)};Pe.hydrate=function(e,t,n){if(!Qa(t))throw Error(z(200));return Ya(null,e,t,!0,n)};Pe.hydrateRoot=function(e,t,n){if(!jo(e))throw Error(z(405));var a=n!=null&&n.hydratedSources||null,i=!1,s="",o=uu;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),t=cu(t,null,e,1,n??null,i,!1,s,o),e[lt]=t.current,fr(e),a)for(e=0;e<a.length;e++)n=a[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new Ga(t)};Pe.render=function(e,t,n){if(!Qa(t))throw Error(z(200));return Ya(null,e,t,!1,n)};Pe.unmountComponentAtNode=function(e){if(!Qa(e))throw Error(z(40));return e._reactRootContainer?(Xt(function(){Ya(null,null,e,!1,function(){e._reactRootContainer=null,e[lt]=null})}),!0):!1};Pe.unstable_batchedUpdates=mo;Pe.unstable_renderSubtreeIntoContainer=function(e,t,n,a){if(!Qa(n))throw Error(z(200));if(e==null||e._reactInternals===void 0)throw Error(z(38));return Ya(e,t,n,!1,a)};Pe.version="18.3.1-next-f1338f8080-20240426";function pu(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(pu)}catch(e){console.error(e)}}pu(),pd.exports=Pe;var tm=pd.exports,_l=tm;Ei.createRoot=_l.createRoot,Ei.hydrateRoot=_l.hydrateRoot;/**
 * @remix-run/router v1.23.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function wr(){return wr=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)({}).hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},wr.apply(null,arguments)}var bt;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(bt||(bt={}));const Al="popstate";function nm(e){e===void 0&&(e={});function t(a,i){let{pathname:s,search:o,hash:l}=a.location;return ws("",{pathname:s,search:o,hash:l},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(a,i){return typeof i=="string"?i:Ta(i)}return am(t,n,null,e)}function ee(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function wo(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function rm(){return Math.random().toString(36).substr(2,8)}function Dl(e,t){return{usr:e.state,key:e.key,idx:t}}function ws(e,t,n,a){return n===void 0&&(n=null),wr({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?Rn(t):t,{state:n,key:t&&t.key||a||rm()})}function Ta(e){let{pathname:t="/",search:n="",hash:a=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),a&&a!=="#"&&(t+=a.charAt(0)==="#"?a:"#"+a),t}function Rn(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let a=e.indexOf("?");a>=0&&(t.search=e.substr(a),e=e.substr(0,a)),e&&(t.pathname=e)}return t}function am(e,t,n,a){a===void 0&&(a={});let{window:i=document.defaultView,v5Compat:s=!1}=a,o=i.history,l=bt.Pop,d=null,c=m();c==null&&(c=0,o.replaceState(wr({},o.state,{idx:c}),""));function m(){return(o.state||{idx:null}).idx}function h(){l=bt.Pop;let b=m(),f=b==null?null:b-c;c=b,d&&d({action:l,location:v.location,delta:f})}function x(b,f){l=bt.Push;let u=ws(v.location,b,f);c=m()+1;let p=Dl(u,c),w=v.createHref(u);try{o.pushState(p,"",w)}catch(S){if(S instanceof DOMException&&S.name==="DataCloneError")throw S;i.location.assign(w)}s&&d&&d({action:l,location:v.location,delta:1})}function j(b,f){l=bt.Replace;let u=ws(v.location,b,f);c=m();let p=Dl(u,c),w=v.createHref(u);o.replaceState(p,"",w),s&&d&&d({action:l,location:v.location,delta:0})}function k(b){let f=i.location.origin!=="null"?i.location.origin:i.location.href,u=typeof b=="string"?b:Ta(b);return u=u.replace(/ $/,"%20"),ee(f,"No window.location.(origin|href) available to create URL for href: "+u),new URL(u,f)}let v={get action(){return l},get location(){return e(i,o)},listen(b){if(d)throw new Error("A history only accepts one active listener");return i.addEventListener(Al,h),d=b,()=>{i.removeEventListener(Al,h),d=null}},createHref(b){return t(i,b)},createURL:k,encodeLocation(b){let f=k(b);return{pathname:f.pathname,search:f.search,hash:f.hash}},push:x,replace:j,go(b){return o.go(b)}};return v}var Fl;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Fl||(Fl={}));function im(e,t,n){return n===void 0&&(n="/"),sm(e,t,n)}function sm(e,t,n,a){let i=typeof t=="string"?Rn(t):t,s=ko(i.pathname||"/",n);if(s==null)return null;let o=fu(e);om(o);let l=null,d=ym(s);for(let c=0;l==null&&c<o.length;++c)l=gm(o[c],d);return l}function fu(e,t,n,a){t===void 0&&(t=[]),n===void 0&&(n=[]),a===void 0&&(a="");let i=(s,o,l)=>{let d={relativePath:l===void 0?s.path||"":l,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};d.relativePath.startsWith("/")&&(ee(d.relativePath.startsWith(a),'Absolute route path "'+d.relativePath+'" nested under path '+('"'+a+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),d.relativePath=d.relativePath.slice(a.length));let c=Et([a,d.relativePath]),m=n.concat(d);s.children&&s.children.length>0&&(ee(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),fu(s.children,t,m,c)),!(s.path==null&&!s.index)&&t.push({path:c,score:mm(c,s.index),routesMeta:m})};return e.forEach((s,o)=>{var l;if(s.path===""||!((l=s.path)!=null&&l.includes("?")))i(s,o);else for(let d of mu(s.path))i(s,o,d)}),t}function mu(e){let t=e.split("/");if(t.length===0)return[];let[n,...a]=t,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(a.length===0)return i?[s,""]:[s];let o=mu(a.join("/")),l=[];return l.push(...o.map(d=>d===""?s:[s,d].join("/"))),i&&l.push(...o),l.map(d=>e.startsWith("/")&&d===""?"/":d)}function om(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:hm(t.routesMeta.map(a=>a.childrenIndex),n.routesMeta.map(a=>a.childrenIndex)))}const lm=/^:[\w-]+$/,dm=3,cm=2,um=1,pm=10,fm=-2,Ol=e=>e==="*";function mm(e,t){let n=e.split("/"),a=n.length;return n.some(Ol)&&(a+=fm),t&&(a+=cm),n.filter(i=>!Ol(i)).reduce((i,s)=>i+(lm.test(s)?dm:s===""?um:pm),a)}function hm(e,t){return e.length===t.length&&e.slice(0,-1).every((a,i)=>a===t[i])?e[e.length-1]-t[t.length-1]:0}function gm(e,t,n){let{routesMeta:a}=e,i={},s="/",o=[];for(let l=0;l<a.length;++l){let d=a[l],c=l===a.length-1,m=s==="/"?t:t.slice(s.length)||"/",h=xm({path:d.relativePath,caseSensitive:d.caseSensitive,end:c},m),x=d.route;if(!h)return null;Object.assign(i,h.params),o.push({params:i,pathname:Et([s,h.pathname]),pathnameBase:Nm(Et([s,h.pathnameBase])),route:x}),h.pathnameBase!=="/"&&(s=Et([s,h.pathnameBase]))}return o}function xm(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,a]=vm(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),l=i.slice(1);return{params:a.reduce((c,m,h)=>{let{paramName:x,isOptional:j}=m;if(x==="*"){let v=l[h]||"";o=s.slice(0,s.length-v.length).replace(/(.)\/+$/,"$1")}const k=l[h];return j&&!k?c[x]=void 0:c[x]=(k||"").replace(/%2F/g,"/"),c},{}),pathname:s,pathnameBase:o,pattern:e}}function vm(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),wo(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let a=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,l,d)=>(a.push({paramName:l,isOptional:d!=null}),d?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(a.push({paramName:"*"}),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),a]}function ym(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return wo(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function ko(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,a=e.charAt(n);return a&&a!=="/"?null:e.slice(n)||"/"}const bm=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,jm=e=>bm.test(e);function wm(e,t){t===void 0&&(t="/");let{pathname:n,search:a="",hash:i=""}=typeof e=="string"?Rn(e):e,s;if(n)if(jm(n))s=n;else{if(n.includes("//")){let o=n;n=hu(n),wo(!1,"Pathnames cannot have embedded double slashes - normalizing "+(o+" -> "+n))}n.startsWith("/")?s=Bl(n.substring(1),"/"):s=Bl(n,t)}else s=t;return{pathname:s,search:Sm(a),hash:zm(i)}}function Bl(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function ki(e,t,n,a){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(a)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function km(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function No(e,t){let n=km(e);return t?n.map((a,i)=>i===n.length-1?a.pathname:a.pathnameBase):n.map(a=>a.pathnameBase)}function So(e,t,n,a){a===void 0&&(a=!1);let i;typeof e=="string"?i=Rn(e):(i=wr({},e),ee(!i.pathname||!i.pathname.includes("?"),ki("?","pathname","search",i)),ee(!i.pathname||!i.pathname.includes("#"),ki("#","pathname","hash",i)),ee(!i.search||!i.search.includes("#"),ki("#","search","hash",i)));let s=e===""||i.pathname==="",o=s?"/":i.pathname,l;if(o==null)l=n;else{let h=t.length-1;if(!a&&o.startsWith("..")){let x=o.split("/");for(;x[0]==="..";)x.shift(),h-=1;i.pathname=x.join("/")}l=h>=0?t[h]:"/"}let d=wm(i,l),c=o&&o!=="/"&&o.endsWith("/"),m=(s||o===".")&&n.endsWith("/");return!d.pathname.endsWith("/")&&(c||m)&&(d.pathname+="/"),d}const hu=e=>e.replace(/\/\/+/g,"/"),Et=e=>hu(e.join("/")),Nm=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),Sm=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,zm=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function Cm(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const gu=["post","put","patch","delete"];new Set(gu);const Mm=["get",...gu];new Set(Mm);/**
 * React Router v6.30.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function kr(){return kr=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)({}).hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},kr.apply(null,arguments)}const zo=g.createContext(null),Em=g.createContext(null),_t=g.createContext(null),qa=g.createContext(null),At=g.createContext({outlet:null,matches:[],isDataRoute:!1}),xu=g.createContext(null);function Pm(e,t){let{relative:n}=t===void 0?{}:t;Ln()||ee(!1);let{basename:a,navigator:i}=g.useContext(_t),{hash:s,pathname:o,search:l}=yu(e,{relative:n}),d=o;return a!=="/"&&(d=o==="/"?a:Et([a,o])),i.createHref({pathname:d,search:l,hash:s})}function Ln(){return g.useContext(qa)!=null}function en(){return Ln()||ee(!1),g.useContext(qa).location}function vu(e){g.useContext(_t).static||g.useLayoutEffect(e)}function tt(){let{isDataRoute:e}=g.useContext(At);return e?Hm():Im()}function Im(){Ln()||ee(!1);let e=g.useContext(zo),{basename:t,future:n,navigator:a}=g.useContext(_t),{matches:i}=g.useContext(At),{pathname:s}=en(),o=JSON.stringify(No(i,n.v7_relativeSplatPath)),l=g.useRef(!1);return vu(()=>{l.current=!0}),g.useCallback(function(c,m){if(m===void 0&&(m={}),!l.current)return;if(typeof c=="number"){a.go(c);return}let h=So(c,JSON.parse(o),s,m.relative==="path");e==null&&t!=="/"&&(h.pathname=h.pathname==="/"?t:Et([t,h.pathname])),(m.replace?a.replace:a.push)(h,m.state,m)},[t,a,o,s,e])}function yu(e,t){let{relative:n}=t===void 0?{}:t,{future:a}=g.useContext(_t),{matches:i}=g.useContext(At),{pathname:s}=en(),o=JSON.stringify(No(i,a.v7_relativeSplatPath));return g.useMemo(()=>So(e,JSON.parse(o),s,n==="path"),[e,o,s,n])}function Tm(e,t){return Rm(e,t)}function Rm(e,t,n,a){Ln()||ee(!1);let{navigator:i}=g.useContext(_t),{matches:s}=g.useContext(At),o=s[s.length-1],l=o?o.params:{};o&&o.pathname;let d=o?o.pathnameBase:"/";o&&o.route;let c=en(),m;if(t){var h;let b=typeof t=="string"?Rn(t):t;d==="/"||(h=b.pathname)!=null&&h.startsWith(d)||ee(!1),m=b}else m=c;let x=m.pathname||"/",j=x;if(d!=="/"){let b=d.replace(/^\//,"").split("/");j="/"+x.replace(/^\//,"").split("/").slice(b.length).join("/")}let k=im(e,{pathname:j}),v=Fm(k&&k.map(b=>Object.assign({},b,{params:Object.assign({},l,b.params),pathname:Et([d,i.encodeLocation?i.encodeLocation(b.pathname).pathname:b.pathname]),pathnameBase:b.pathnameBase==="/"?d:Et([d,i.encodeLocation?i.encodeLocation(b.pathnameBase).pathname:b.pathnameBase])})),s,n,a);return t&&v?g.createElement(qa.Provider,{value:{location:kr({pathname:"/",search:"",hash:"",state:null,key:"default"},m),navigationType:bt.Pop}},v):v}function Lm(){let e=$m(),t=Cm(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return g.createElement(g.Fragment,null,g.createElement("h2",null,"Unexpected Application Error!"),g.createElement("h3",{style:{fontStyle:"italic"}},t),n?g.createElement("pre",{style:i},n):null,null)}const _m=g.createElement(Lm,null);class Am extends g.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?g.createElement(At.Provider,{value:this.props.routeContext},g.createElement(xu.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Dm(e){let{routeContext:t,match:n,children:a}=e,i=g.useContext(zo);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),g.createElement(At.Provider,{value:t},a)}function Fm(e,t,n,a){var i;if(t===void 0&&(t=[]),n===void 0&&(n=null),a===void 0&&(a=null),e==null){var s;if(!n)return null;if(n.errors)e=n.matches;else if((s=a)!=null&&s.v7_partialHydration&&t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let o=e,l=(i=n)==null?void 0:i.errors;if(l!=null){let m=o.findIndex(h=>h.route.id&&(l==null?void 0:l[h.route.id])!==void 0);m>=0||ee(!1),o=o.slice(0,Math.min(o.length,m+1))}let d=!1,c=-1;if(n&&a&&a.v7_partialHydration)for(let m=0;m<o.length;m++){let h=o[m];if((h.route.HydrateFallback||h.route.hydrateFallbackElement)&&(c=m),h.route.id){let{loaderData:x,errors:j}=n,k=h.route.loader&&x[h.route.id]===void 0&&(!j||j[h.route.id]===void 0);if(h.route.lazy||k){d=!0,c>=0?o=o.slice(0,c+1):o=[o[0]];break}}}return o.reduceRight((m,h,x)=>{let j,k=!1,v=null,b=null;n&&(j=l&&h.route.id?l[h.route.id]:void 0,v=h.route.errorElement||_m,d&&(c<0&&x===0?(Vm("route-fallback"),k=!0,b=null):c===x&&(k=!0,b=h.route.hydrateFallbackElement||null)));let f=t.concat(o.slice(0,x+1)),u=()=>{let p;return j?p=v:k?p=b:h.route.Component?p=g.createElement(h.route.Component,null):h.route.element?p=h.route.element:p=m,g.createElement(Dm,{match:h,routeContext:{outlet:m,matches:f,isDataRoute:n!=null},children:p})};return n&&(h.route.ErrorBoundary||h.route.errorElement||x===0)?g.createElement(Am,{location:n.location,revalidation:n.revalidation,component:v,error:j,children:u(),routeContext:{outlet:null,matches:f,isDataRoute:!0}}):u()},null)}var bu=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(bu||{}),ju=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(ju||{});function Om(e){let t=g.useContext(zo);return t||ee(!1),t}function Bm(e){let t=g.useContext(Em);return t||ee(!1),t}function Um(e){let t=g.useContext(At);return t||ee(!1),t}function wu(e){let t=Um(),n=t.matches[t.matches.length-1];return n.route.id||ee(!1),n.route.id}function $m(){var e;let t=g.useContext(xu),n=Bm(),a=wu();return t!==void 0?t:(e=n.errors)==null?void 0:e[a]}function Hm(){let{router:e}=Om(bu.UseNavigateStable),t=wu(ju.UseNavigateStable),n=g.useRef(!1);return vu(()=>{n.current=!0}),g.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,kr({fromRouteId:t},s)))},[e,t])}const Ul={};function Vm(e,t,n){Ul[e]||(Ul[e]=!0)}function Wm(e,t){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function ks(e){let{to:t,replace:n,state:a,relative:i}=e;Ln()||ee(!1);let{future:s,static:o}=g.useContext(_t),{matches:l}=g.useContext(At),{pathname:d}=en(),c=tt(),m=So(t,No(l,s.v7_relativeSplatPath),d,i==="path"),h=JSON.stringify(m);return g.useEffect(()=>c(JSON.parse(h),{replace:n,state:a,relative:i}),[c,h,i,n,a]),null}function pe(e){ee(!1)}function Gm(e){let{basename:t="/",children:n=null,location:a,navigationType:i=bt.Pop,navigator:s,static:o=!1,future:l}=e;Ln()&&ee(!1);let d=t.replace(/^\/*/,"/"),c=g.useMemo(()=>({basename:d,navigator:s,static:o,future:kr({v7_relativeSplatPath:!1},l)}),[d,l,s,o]);typeof a=="string"&&(a=Rn(a));let{pathname:m="/",search:h="",hash:x="",state:j=null,key:k="default"}=a,v=g.useMemo(()=>{let b=ko(m,d);return b==null?null:{location:{pathname:b,search:h,hash:x,state:j,key:k},navigationType:i}},[d,m,h,x,j,k,i]);return v==null?null:g.createElement(_t.Provider,{value:c},g.createElement(qa.Provider,{children:n,value:v}))}function Qm(e){let{children:t,location:n}=e;return Tm(Ns(t),n)}new Promise(()=>{});function Ns(e,t){t===void 0&&(t=[]);let n=[];return g.Children.forEach(e,(a,i)=>{if(!g.isValidElement(a))return;let s=[...t,i];if(a.type===g.Fragment){n.push.apply(n,Ns(a.props.children,s));return}a.type!==pe&&ee(!1),!a.props.index||!a.props.children||ee(!1);let o={id:a.props.id||s.join("-"),caseSensitive:a.props.caseSensitive,element:a.props.element,Component:a.props.Component,index:a.props.index,path:a.props.path,loader:a.props.loader,action:a.props.action,errorElement:a.props.errorElement,ErrorBoundary:a.props.ErrorBoundary,hasErrorBoundary:a.props.ErrorBoundary!=null||a.props.errorElement!=null,shouldRevalidate:a.props.shouldRevalidate,handle:a.props.handle,lazy:a.props.lazy};a.props.children&&(o.children=Ns(a.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.30.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ss(){return Ss=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)({}).hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},Ss.apply(null,arguments)}function Ym(e,t){if(e==null)return{};var n={};for(var a in e)if({}.hasOwnProperty.call(e,a)){if(t.indexOf(a)!==-1)continue;n[a]=e[a]}return n}function qm(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function Km(e,t){return e.button===0&&(!t||t==="_self")&&!qm(e)}const Xm=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],Jm="6";try{window.__reactRouterVersion=Jm}catch{}const Zm="startTransition",$l=Hu[Zm];function eh(e){let{basename:t,children:n,future:a,window:i}=e,s=g.useRef();s.current==null&&(s.current=nm({window:i,v5Compat:!0}));let o=s.current,[l,d]=g.useState({action:o.action,location:o.location}),{v7_startTransition:c}=a||{},m=g.useCallback(h=>{c&&$l?$l(()=>d(h)):d(h)},[d,c]);return g.useLayoutEffect(()=>o.listen(m),[o,m]),g.useEffect(()=>Wm(a),[a]),g.createElement(Gm,{basename:t,children:n,location:l.location,navigationType:l.action,navigator:o,future:a})}const th=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",nh=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,R=g.forwardRef(function(t,n){let{onClick:a,relative:i,reloadDocument:s,replace:o,state:l,target:d,to:c,preventScrollReset:m,viewTransition:h}=t,x=Ym(t,Xm),{basename:j}=g.useContext(_t),k,v=!1;if(typeof c=="string"&&nh.test(c)&&(k=c,th))try{let p=new URL(window.location.href),w=c.startsWith("//")?new URL(p.protocol+c):new URL(c),S=ko(w.pathname,j);w.origin===p.origin&&S!=null?c=S+w.search+w.hash:v=!0}catch{}let b=Pm(c,{relative:i}),f=rh(c,{replace:o,state:l,target:d,preventScrollReset:m,relative:i,viewTransition:h});function u(p){a&&a(p),p.defaultPrevented||f(p)}return g.createElement("a",Ss({},x,{href:k||b,onClick:v||s?a:u,ref:n,target:d}))});var Hl;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(Hl||(Hl={}));var Vl;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Vl||(Vl={}));function rh(e,t){let{target:n,replace:a,state:i,preventScrollReset:s,relative:o,viewTransition:l}=t===void 0?{}:t,d=tt(),c=en(),m=yu(e,{relative:o});return g.useCallback(h=>{if(Km(h,n)){h.preventDefault();let x=a!==void 0?a:Ta(c)===Ta(m);d(e,{replace:x,state:i,preventScrollReset:s,relative:o,viewTransition:l})}},[c,d,m,a,i,n,e,s,o,l])}const ku=g.createContext(null),ah="admin@nexusrag.com",ih="admin@1234";function sh({children:e}){const[t,n]=g.useState(null),a=(s,o,l=!1)=>{if(l)return s===ah&&o===ih?(n({name:"Admin",email:s,role:"admin"}),{ok:!0}):{ok:!1,error:"Invalid admin credentials."};if(!s||!o)return{ok:!1,error:"Please fill in all fields."};const d=s.split("@")[0].replace(/[._]/g," ").replace(/\b\w/g,c=>c.toUpperCase());return n({name:d,email:s,role:"user"}),{ok:!0}},i=()=>n(null);return r.jsx(ku.Provider,{value:{user:t,login:a,logout:i,isLoggedIn:!!t,isAdmin:(t==null?void 0:t.role)==="admin",isUser:(t==null?void 0:t.role)==="user"},children:e})}function _n(){return g.useContext(ku)}const Nu=g.createContext(null);function oh({children:e}){const[t,n]=g.useState(()=>localStorage.getItem("nexus-theme")||"light");g.useEffect(()=>{document.documentElement.setAttribute("data-theme",t),localStorage.setItem("nexus-theme",t)},[t]);const a=()=>n(o=>o==="light"?"dark":"light"),i=()=>n("light"),s=()=>n("dark");return r.jsx(Nu.Provider,{value:{theme:t,toggle:a,setLight:i,setDark:s},children:e})}function lh(){return g.useContext(Nu)}const Wl=["Real Estate","Fintech","Healthtech","Hospitality","Proptech","Edtech"],Gl=["Real Estate","Fintech","Healthtech","Hospitality","Proptech","Edtech","Logistics","SaaS"],dh=[{key:"re",className:"project-card re",title:"Kōrn Estates",tag:"Real Estate · 2024",desc:"Brand identity & site for a boutique housebuilder in the South West.",visual:"Kōrn Estates"},{key:"fin",className:"project-card fin dark",title:"Ledgerly",tag:"Fintech · 2024",desc:"A business analytics platform that shows founders what's really going on.",visual:"Ledgerly"},{key:"health",className:"project-card health",title:"Vitalis Care",tag:"Healthtech · 2023",desc:"Patient-first booking experience for a network of private clinics.",visual:"Vitalis Care"}],ch=[{quote:"Meridian understood our regulatory constraints from day one — rare for a design studio working in fintech. The dashboard shipped on time and adoption jumped within a month.",name:"Anastasia Bell",role:"COO, Ledgerly"},{quote:"We build homes, not apps — so we needed a partner who could translate that into a site. Meridian nailed the tone and the project management was tight but realistic.",name:"Owen Marsh",role:"Founder, Kōrn Estates"}],uh=[{num:"01",icon:"Bi",title:"Brand Identity",desc:"Timeless, memorable identities that help businesses establish a consistent presence — whether that's a housing developer or a healthtech startup."},{num:"02",icon:"Pd",title:"Product Design",desc:"Functional, industry-aware product design — dashboards for fintech, booking flows for hospitality, portals for proptech."},{num:"03",icon:"Wd",title:"Website Design",desc:"A wide range of website experiences — promo, landing, portfolio and corporate sites, tuned to each sector's conventions."},{num:"04",icon:"Dv",title:"Web Development",desc:"Jamstack builds for large, custom projects; no-code for smaller, faster-turnaround sites."}],ph=[{key:"cc1",className:"creative-card cc1",top:"Ledger UI",bottom:"exploration"},{key:"cc2",className:"creative-card cc2",top:"Estate",bottom:"brand system"},{key:"cc3",className:"creative-card cc3",top:"Vitalis",bottom:"app concept"},{key:"cc4",className:"creative-card cc4",top:"Type",bottom:"study 04"}];function Oe({as:e="div",className:t="",children:n,...a}){const i=g.useRef(null),[s,o]=g.useState(!1);return g.useEffect(()=>{const l=i.current;if(!l)return;const d=new IntersectionObserver(([c])=>{c.isIntersecting&&(o(!0),d.unobserve(l))},{threshold:.15});return d.observe(l),()=>d.disconnect()},[]),r.jsx(e,{ref:i,className:`${t} reveal${s?" in":""}`,...a,children:n})}function Qr({as:e="div",className:t="",children:n,...a}){const i=g.useRef(null),[s,o]=g.useState(!1);return g.useEffect(()=>{const l=i.current;if(!l)return;const d=new IntersectionObserver(([c])=>{c.isIntersecting&&(o(!0),d.unobserve(l))},{threshold:.15});return d.observe(l),()=>d.disconnect()},[]),r.jsx(e,{ref:i,className:`${t} reveal-stagger${s?" in":""}`,...a,children:n})}function Ni({target:e,label:t}){const n=g.useRef(null),[a,i]=g.useState(0);return g.useEffect(()=>{const s=n.current;if(!s)return;const o=new IntersectionObserver(([l])=>{if(!l.isIntersecting)return;o.unobserve(s);let d=0;const c=Math.max(1,Math.round(e/40)),m=setInterval(()=>{d+=c,d>=e&&(d=e,clearInterval(m)),i(d)},28)},{threshold:.5});return o.observe(s),()=>o.disconnect()},[e]),r.jsxs("div",{className:"stat",ref:n,children:[r.jsx("span",{className:"num",children:a}),r.jsx("span",{className:"lbl",children:t})]})}function fh(){const[e,t]=g.useState(0);return g.useEffect(()=>{const n=setInterval(()=>{t(a=>(a+1)%Wl.length)},2200);return()=>clearInterval(n)},[]),r.jsx("span",{className:"cyc-word",children:r.jsx("span",{className:"active",children:Wl[e]},e)})}function mh(){const e=g.useRef(null),t=[g.useRef(null),g.useRef(null),g.useRef(null),g.useRef(null)],n=g.useRef({x:0,y:0}),a=g.useRef([{x:0,y:0},{x:0,y:0},{x:0,y:0},{x:0,y:0}]),i=g.useRef(!1),s=[.06,.1,.16,.28];g.useEffect(()=>{let l;const d=()=>{t.forEach((c,m)=>{const h=i.current?n.current:{x:0,y:0};a.current[m].x+=(h.x-a.current[m].x)*s[m],a.current[m].y+=(h.y-a.current[m].y)*s[m];const x=c.current;x&&(x.style.transform=`translate(calc(-50% + ${a.current[m].x}px), calc(-50% + ${a.current[m].y}px))`)}),l=requestAnimationFrame(d)};return l=requestAnimationFrame(d),()=>cancelAnimationFrame(l)},[]);const o=l=>{const d=e.current.getBoundingClientRect();n.current={x:l.clientX-d.left-d.width/2,y:l.clientY-d.top-d.height/2}};return r.jsxs("div",{id:"circleStage",ref:e,onMouseEnter:()=>i.current=!0,onMouseLeave:()=>i.current=!1,onMouseMove:o,children:[r.jsx("div",{className:"ring r1",ref:t[0]}),r.jsx("div",{className:"ring r2",ref:t[1]}),r.jsx("div",{className:"ring r3",ref:t[2]}),r.jsx("div",{className:"ring r4",ref:t[3]})]})}function hh(){const e=g.useRef(null);return g.useEffect(()=>{const t=n=>{e.current&&(e.current.style.left=`${n.clientX}px`,e.current.style.top=`${n.clientY}px`)};return window.addEventListener("mousemove",t),()=>window.removeEventListener("mousemove",t)},[]),r.jsxs("div",{className:"meridian-home",children:[r.jsx("style",{children:`
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
  background: #e7c9a8;
}
.meridian-home .cc3 {
  background: #d7f5e8;
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

`}),r.jsx("div",{className:"cdot",ref:e}),r.jsxs("nav",{children:[r.jsxs("div",{className:"brand",children:[r.jsx("span",{className:"mark",children:r.jsx("svg",{viewBox:"0 0 24 24",fill:"none",children:r.jsx("path",{d:"M3 21 L21 3 L21 21 Z",fill:"currentColor"})})}),"Meridian"]}),r.jsxs("div",{className:"nav-links",children:[r.jsx("a",{href:"#work",children:"Work"}),r.jsx("a",{href:"#services",children:"Services"}),r.jsx("a",{href:"#expertise",children:"Expertise"}),r.jsx("a",{href:"#studio",children:"Studio"})]}),r.jsxs("div",{className:"nav-auth",children:[r.jsx(R,{to:"/login",className:"nav-login",children:"Log in"}),r.jsx(R,{to:"/signup",className:"nav-signup",children:"Sign up"}),r.jsx("a",{href:"#contact",className:"nav-cta",children:"Start a project"})]})]}),r.jsx("section",{className:"hero",children:r.jsxs("div",{className:"wrap",children:[r.jsxs("div",{className:"hero-top",children:[r.jsxs("div",{children:[r.jsx("span",{className:"eyebrow",children:"Design & Development Studio"}),r.jsxs("h1",{className:"headline",children:["One studio,",r.jsx("br",{}),r.jsx("span",{className:"thin",children:"every"})," industry."]})]}),r.jsx("div",{className:"hero-sub",children:"We design and build digital products for real estate, fintech, healthtech and hospitality brands — trading industry jargon for craft that actually converts."})]}),r.jsxs("div",{className:"hero-people",children:[r.jsxs("div",{className:"avatars",children:[r.jsx("span",{children:"RK"}),r.jsx("span",{children:"AN"}),r.jsx("span",{children:"TS"})]}),r.jsxs("a",{href:"#work",className:"watch-btn",children:[r.jsx("span",{className:"circ",children:"▶"})," See our work"]})]}),r.jsxs("div",{className:"industry-cycler",children:["Currently shaping products for",r.jsx(fh,{})]}),r.jsxs("div",{className:"pills-row",children:[r.jsx("div",{className:"pill",children:"Brand Identity"}),r.jsx("div",{className:"pill",children:"Product Design"}),r.jsx("div",{className:"pill",children:"Website Design"}),r.jsx("div",{className:"pill",children:"Web Development"})]})]})}),r.jsx("div",{className:"marquee-wrap",children:r.jsx("div",{className:"marquee",children:[...Gl,...Gl].map((t,n)=>r.jsx("span",{children:t},n))})}),r.jsxs("section",{className:"stats-section wrap",id:"work",children:[r.jsxs(Oe,{children:[r.jsx("span",{className:"sec-label",children:"Track record"}),r.jsxs("div",{className:"stat-row",children:[r.jsx(Ni,{target:58,label:"completed projects"}),r.jsx(Ni,{target:6,label:"industries served"}),r.jsx(Ni,{target:19,label:"awards & features"})]}),r.jsx("p",{style:{maxWidth:420,color:"var(--slate)",fontSize:14.5,lineHeight:1.6},children:"From a boutique real-estate developer's brand book to a fintech dashboard used by thousands — different worlds, same rigor."})]}),r.jsx(Qr,{className:"project-grid",children:dh.map(t=>r.jsxs("div",{className:t.className,children:[r.jsx("div",{className:"pc-visual",children:t.visual}),r.jsx("div",{className:"pc-chip",children:"↗"}),r.jsxs("div",{className:"pc-overlay",children:[r.jsx("div",{className:"pc-tag",children:t.tag}),r.jsx("h4",{children:t.title}),r.jsx("p",{children:t.desc})]})]},t.key))})]}),r.jsxs("section",{className:"testi-section wrap",children:[r.jsxs(Oe,{as:"div",className:"sec-head",children:[r.jsxs("div",{children:[r.jsx("span",{className:"sec-label",children:"Client feedback"}),r.jsx("h2",{children:"Testimonials"})]}),r.jsx("p",{children:"A satisfied client is the clearest signal of a good collaboration — across every sector we work in."})]}),r.jsxs(Qr,{className:"testi-grid",children:[r.jsxs("div",{className:"clutch-card",children:[r.jsxs("div",{children:[r.jsx("div",{className:"brand-mini",children:"Clutch"}),r.jsx("div",{className:"stars",children:"★★★★★"})]}),r.jsxs("div",{children:[r.jsx("p",{className:"mono",style:{fontSize:12,color:"#c9cbdb",marginBottom:14},children:"5.0 average · 12 reviews"}),r.jsx("a",{href:"#",className:"cta-mini",children:"View on Clutch"})]})]}),ch.map(t=>r.jsxs("div",{className:"testi-card",children:[r.jsxs("div",{children:[r.jsx("div",{className:"stars",children:"★★★★★"}),r.jsx("p",{children:t.quote})]}),r.jsxs("div",{className:"testi-who",children:[r.jsx("div",{className:"dot"}),r.jsxs("div",{children:[r.jsx("div",{className:"name",children:t.name}),r.jsx("div",{className:"role",children:t.role})]})]})]},t.name))]}),r.jsxs(Oe,{as:"div",className:"clients-row",children:[r.jsx("span",{className:"cl-label",children:"Trusted by teams across sectors"}),r.jsxs("div",{className:"clients-logos",children:[r.jsx("span",{children:"Ledgerly"}),r.jsx("span",{children:"Kōrn Estates"}),r.jsx("span",{children:"Vitalis"}),r.jsx("span",{children:"Northbound"}),r.jsx("span",{children:"Clickl"})]})]})]}),r.jsx(Oe,{as:"section",className:"tagline-section wrap",children:r.jsxs("h2",{children:["We speak every",r.jsx("br",{}),"industry's"," ",r.jsxs("span",{className:"accent",children:["language",r.jsx("span",{className:"diamond"})]}),"."]})}),r.jsxs("section",{className:"services-section wrap",id:"services",children:[r.jsxs(Oe,{as:"div",className:"sec-head",children:[r.jsxs("div",{children:[r.jsx("span",{className:"sec-label",children:"Capabilities"}),r.jsx("h2",{children:"Services"})]}),r.jsx("p",{children:"Four disciplines, applied differently depending on who we're building for."})]}),r.jsx(Qr,{className:"services-grid",children:uh.map(t=>r.jsxs("div",{className:"service-item",children:[r.jsxs("div",{className:"si-top",children:[r.jsx("div",{className:"si-icon",children:t.icon}),r.jsx("span",{className:"si-num",children:t.num})]}),r.jsx("h3",{children:t.title}),r.jsx("p",{children:t.desc})]},t.num))})]}),r.jsx("section",{className:"expertise-section wrap",id:"expertise",children:r.jsxs("div",{className:"expertise-grid",children:[r.jsxs(Oe,{children:[r.jsx("span",{className:"sec-label",children:"What we know"}),r.jsx("h2",{style:{fontSize:"clamp(28px,4vw,42px)",fontWeight:600},children:"Expertise"}),r.jsxs("div",{className:"exp-cols",children:[r.jsxs("div",{children:[r.jsx("div",{className:"col-label",children:"Specialization"}),r.jsxs("ul",{children:[r.jsx("li",{children:"Brand visualisation"}),r.jsx("li",{children:"Marketing websites"}),r.jsx("li",{children:"Corporate websites"}),r.jsx("li",{children:"Digital products"})]})]}),r.jsxs("div",{children:[r.jsx("div",{className:"col-label",children:"Industries"}),r.jsxs("ul",{children:[r.jsx("li",{children:"Real estate & Proptech"}),r.jsx("li",{children:"Fintech"}),r.jsx("li",{children:"Healthtech"}),r.jsx("li",{children:"Hospitality"})]})]})]})]}),r.jsxs(Oe,{className:"exp-card",children:[r.jsx("div",{className:"exp-eyebrow",children:"Why it works"}),r.jsx("p",{children:"Our team has shipped in enough different sectors to know that a fintech dashboard and a hotel booking flow need completely different instincts — so that's what we bring."}),r.jsxs("div",{className:"exp-founder",children:[r.jsxs("div",{className:"who",children:[r.jsx("div",{className:"dot"}),r.jsxs("div",{children:[r.jsx("div",{className:"name",children:"Priya Nadar"}),r.jsx("div",{className:"role",children:"Founder & CEO"})]})]}),r.jsx("a",{href:"#contact",className:"go",children:"→"})]})]})]})}),r.jsxs(Oe,{as:"section",className:"play-section",children:[r.jsx("h2",{children:"Let's play a bit."}),r.jsx("div",{className:"sub",children:"Move your cursor across the field."}),r.jsx(mh,{}),r.jsx("div",{className:"play-hint",children:"// no agenda here, just a bit of delight"})]}),r.jsx("section",{className:"scene-section wrap",id:"studio",children:r.jsxs(Oe,{className:"scene-board",children:[r.jsx("div",{className:"bubble b1",children:"Priya"}),r.jsx("div",{className:"bubble tag b2",children:'"ship it Friday"'}),r.jsx("div",{className:"bubble tag b3",children:"Owen"}),r.jsx("div",{className:"bubble b4",children:"Rian"}),r.jsx("div",{className:"bubble tag b5",children:'"almost"'}),r.jsx("div",{className:"bubble b6",children:"Tara"}),r.jsxs("div",{children:[r.jsxs("h3",{children:["What's going on behind the scenes?",r.jsx("br",{}),"Come say hi."]}),r.jsx("div",{className:"sub",children:"This is a studio, not a black box — we like to work in the open."})]})]})}),r.jsxs("section",{className:"creative-section wrap",children:[r.jsxs(Oe,{as:"div",className:"sec-head",children:[r.jsxs("div",{children:[r.jsx("span",{className:"sec-label",children:"Off the clock"}),r.jsx("h2",{children:"Our creativity doesn't end on projects only"})]}),r.jsx("a",{href:"#",style:{border:"1px solid var(--line)",padding:"9px 18px",borderRadius:100,fontSize:13},children:"Dribbble ↗"})]}),r.jsx(Qr,{className:"creative-grid",children:ph.map(t=>r.jsxs("div",{className:t.className,children:[r.jsx("span",{children:t.top}),r.jsx("span",{children:t.bottom})]},t.key))})]}),r.jsx(Oe,{as:"section",className:"about-section wrap",children:r.jsxs("p",{className:"about-text",children:["Starting as generalists who got bored designing the same template twice, we combined",r.jsx("span",{className:"chip"})," professional craft and genuine curiosity about how different industries actually work",r.jsx("span",{className:"chip"})," to build a studio that adapts instead of repeating itself."]})}),r.jsx("footer",{id:"contact",children:r.jsxs("div",{className:"wrap",children:[r.jsxs("div",{className:"foot-top",children:[r.jsxs("div",{className:"foot-cta",children:[r.jsx("h2",{children:"We'd love to hear what you're building."}),r.jsx("a",{href:"mailto:hello@meridian.studio",className:"become",children:"Become a client →"}),r.jsxs("div",{className:"email",children:["Prefer email? Write to ",r.jsx("a",{href:"mailto:hello@meridian.studio",children:"hello@meridian.studio"})]})]}),r.jsxs("div",{className:"foot-cols",children:[r.jsxs("div",{className:"fc",children:[r.jsx("h4",{children:"Studio"}),r.jsx("p",{children:"Kanto Business Loft"}),r.jsx("p",{children:"Level 4, Warsaw, Poland"}),r.jsx("p",{children:"VAT: 5252837088"})]}),r.jsxs("div",{className:"fc",children:[r.jsx("h4",{children:"Follow"}),r.jsx("a",{href:"#",children:"Behance ↗"}),r.jsx("a",{href:"#",children:"Dribbble ↗"}),r.jsx("a",{href:"#",children:"Clutch ↗"}),r.jsx("a",{href:"#",children:"LinkedIn ↗"})]}),r.jsxs("div",{className:"fc",children:[r.jsx("h4",{children:"Navigate"}),r.jsx("a",{href:"#work",children:"Work"}),r.jsx("a",{href:"#services",children:"Services"}),r.jsx("a",{href:"#expertise",children:"Expertise"}),r.jsx("a",{href:"#studio",children:"Studio"})]})]})]}),r.jsxs("div",{className:"foot-bottom",children:[r.jsx("div",{className:"brand",children:"Meridian"}),r.jsx("p",{children:"© 2026 Meridian Studio. All rights reserved."})]})]})})]})}const Ql=["Real Estate","Fintech","Healthtech","Hospitality","Proptech","Edtech"];function gh(){const[e,t]=g.useState(0);return g.useEffect(()=>{const n=setInterval(()=>{t(a=>(a+1)%Ql.length)},2200);return()=>clearInterval(n)},[]),r.jsx("span",{className:"cyc-word",children:r.jsx("span",{className:"active",children:Ql[e]},e)})}function xh(){const[e,t]=g.useState(!1),[n,a]=g.useState(!1),[i,s]=g.useState(""),[o,l]=g.useState(""),[d,c]=g.useState(""),{login:m}=_n(),h=tt();g.useEffect(()=>{const j=setTimeout(()=>a(!0),50);return()=>clearTimeout(j)},[]);const x=j=>{j.preventDefault(),c("");const k=m(i.trim(),o,!1);k.ok?h("/dashboard"):c(k.error)};return r.jsxs("div",{className:`meridian-auth${n?" mounted":""}`,children:[r.jsx("style",{children:`
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
`}),r.jsxs("div",{className:"auth-shell",children:[r.jsxs("div",{className:"auth-visual",children:[r.jsx("div",{className:"auth-ring ring-a"}),r.jsx("div",{className:"auth-ring ring-b"}),r.jsxs(R,{to:"/",className:"brand",children:[r.jsx("span",{className:"mark",children:r.jsx("svg",{viewBox:"0 0 24 24",fill:"none",children:r.jsx("path",{d:"M3 21 L21 3 L21 21 Z",fill:"currentColor"})})}),"Meridian"]}),r.jsxs("div",{className:"auth-visual-mid",children:[r.jsx("span",{className:"eyebrow",children:"Welcome back"}),r.jsxs("h1",{children:["Pick up where you",r.jsx("br",{}),r.jsx("span",{className:"thin",children:"left off, in"})]}),r.jsxs("div",{className:"auth-cycler",children:["Building for",r.jsx(gh,{})]})]}),r.jsx("div",{className:"bubble b1",children:'"ship it Friday"'}),r.jsx("div",{className:"bubble tag b2",children:"Owen"}),r.jsx("div",{className:"bubble b3",children:"Priya"}),r.jsxs("div",{className:"auth-quote",children:[r.jsx("p",{children:'"Meridian understood our regulatory constraints from day one — the dashboard shipped on time and adoption jumped within a month."'}),r.jsxs("div",{className:"who",children:[r.jsx("div",{className:"dot"}),r.jsxs("div",{children:[r.jsx("div",{className:"name",children:"Anastasia Bell"}),r.jsx("div",{className:"role",children:"COO, Ledgerly"})]})]})]})]}),r.jsx("div",{className:"auth-form-side",children:r.jsxs("div",{className:"auth-form-wrap",children:[r.jsxs(R,{to:"/",className:"mobile-brand",children:[r.jsx("span",{className:"mark",children:r.jsx("svg",{viewBox:"0 0 24 24",fill:"none",children:r.jsx("path",{d:"M3 21 L21 3 L21 21 Z",fill:"currentColor"})})}),"Meridian"]}),r.jsx("span",{className:"sec-label",children:"Sign in"}),r.jsx("h2",{children:"Welcome back"}),r.jsxs("div",{className:"sub",children:["New to Meridian? ",r.jsx(R,{to:"/signup",children:"Create an account"})]}),r.jsxs("form",{onSubmit:x,children:[r.jsxs("div",{className:"field",children:[r.jsx("label",{htmlFor:"login-email",children:"Email"}),r.jsx("div",{className:"field-input",children:r.jsx("input",{id:"login-email",type:"email",placeholder:"you@company.com",required:!0,autoComplete:"email",value:i,onChange:j=>{s(j.target.value),c("")}})})]}),r.jsxs("div",{className:"field",children:[r.jsx("label",{htmlFor:"login-password",children:"Password"}),r.jsxs("div",{className:"field-input",children:[r.jsx("input",{id:"login-password",type:e?"text":"password",placeholder:"••••••••",required:!0,autoComplete:"current-password",value:o,onChange:j=>{l(j.target.value),c("")}}),r.jsx("button",{type:"button",className:"field-toggle",onClick:()=>t(j=>!j),"aria-label":e?"Hide password":"Show password",children:e?"HIDE":"SHOW"})]})]}),r.jsxs("div",{className:"row-between",children:[r.jsxs("label",{className:"remember",children:[r.jsx("input",{type:"checkbox"}),"Remember me"]}),r.jsx("a",{href:"#",className:"forgot",children:"Forgot password?"})]}),d&&r.jsxs("div",{style:{background:"#fff1f1",border:"1px solid #fecaca",borderRadius:10,padding:"10px 14px",fontSize:13.5,color:"#dc2626",marginBottom:16},children:["⚠️ ",d]}),r.jsx("button",{type:"submit",className:"submit-btn",children:"Sign in →"})]}),r.jsx("div",{className:"divider",children:"or continue with"}),r.jsxs("div",{className:"social-row",children:[r.jsx("button",{type:"button",className:"social-btn",children:"Google"}),r.jsx("button",{type:"button",className:"social-btn",children:"GitHub"})]}),r.jsx(R,{to:"/",className:"back-home",children:"← Back to homepage"}),r.jsxs("div",{style:{textAlign:"center",marginTop:16,fontSize:13,color:"var(--slate-l)"},children:["Are you an admin?"," ",r.jsx(R,{to:"/admin-login",style:{color:"var(--indigo)",fontWeight:600},children:"Admin portal →"})]})]})})]})]})}const zs=["Real Estate","Fintech","Healthtech","Hospitality","Proptech","Edtech"];function vh(){const[e,t]=g.useState(0);return g.useEffect(()=>{const n=setInterval(()=>{t(a=>(a+1)%zs.length)},2200);return()=>clearInterval(n)},[]),r.jsx("span",{className:"cyc-word",children:r.jsx("span",{className:"active",children:zs[e]},e)})}function yh(){const[e,t]=g.useState(!1),[n,a]=g.useState(!1),[i,s]=g.useState(""),[o,l]=g.useState(""),[d,c]=g.useState(""),[m,h]=g.useState(""),[x,j]=g.useState(""),[k,v]=g.useState(""),{login:b}=_n(),f=tt();g.useEffect(()=>{const p=setTimeout(()=>a(!0),50);return()=>clearTimeout(p)},[]);const u=p=>{p.preventDefault(),v("");const w=b(m.trim(),x,!1);w.ok?f("/dashboard"):v(w.error)};return r.jsxs("div",{className:`meridian-auth${n?" mounted":""}`,children:[r.jsx("style",{children:`
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
`}),r.jsxs("div",{className:"auth-shell",children:[r.jsxs("div",{className:"auth-visual",children:[r.jsx("div",{className:"auth-ring ring-a"}),r.jsx("div",{className:"auth-ring ring-b"}),r.jsxs(R,{to:"/",className:"brand",children:[r.jsx("span",{className:"mark",children:r.jsx("svg",{viewBox:"0 0 24 24",fill:"none",children:r.jsx("path",{d:"M3 21 L21 3 L21 21 Z",fill:"currentColor"})})}),"Meridian"]}),r.jsxs("div",{className:"auth-visual-mid",children:[r.jsx("span",{className:"eyebrow",children:"Join the studio"}),r.jsxs("h1",{children:["One account,",r.jsx("br",{}),r.jsx("span",{className:"thin",children:"every"})," industry."]}),r.jsxs("div",{className:"auth-cycler",children:["Currently building for",r.jsx(vh,{})]})]}),r.jsx("div",{className:"bubble b1",children:'"almost"'}),r.jsx("div",{className:"bubble tag b2",children:"Tara"}),r.jsx("div",{className:"bubble b3",children:'"ship it Friday"'}),r.jsxs("div",{className:"auth-stats",children:[r.jsxs("div",{className:"stat",children:[r.jsx("div",{className:"num",children:"58"}),r.jsx("div",{className:"lbl",children:"completed projects"})]}),r.jsxs("div",{className:"stat",children:[r.jsx("div",{className:"num",children:"6"}),r.jsx("div",{className:"lbl",children:"industries served"})]}),r.jsxs("div",{className:"stat",children:[r.jsx("div",{className:"num",children:"19"}),r.jsx("div",{className:"lbl",children:"awards & features"})]})]})]}),r.jsx("div",{className:"auth-form-side",children:r.jsxs("div",{className:"auth-form-wrap",children:[r.jsxs(R,{to:"/",className:"mobile-brand",children:[r.jsx("span",{className:"mark",children:r.jsx("svg",{viewBox:"0 0 24 24",fill:"none",children:r.jsx("path",{d:"M3 21 L21 3 L21 21 Z",fill:"currentColor"})})}),"Meridian"]}),r.jsx("span",{className:"sec-label",children:"Create account"}),r.jsx("h2",{children:"Start your project"}),r.jsxs("div",{className:"sub",children:["Already have an account? ",r.jsx(R,{to:"/login",children:"Sign in"})]}),r.jsxs("form",{onSubmit:u,children:[r.jsxs("div",{className:"field-row",children:[r.jsxs("div",{className:"field",children:[r.jsx("label",{htmlFor:"signup-first",children:"First name"}),r.jsx("div",{className:"field-input",children:r.jsx("input",{id:"signup-first",type:"text",placeholder:"Priya",required:!0,autoComplete:"given-name",value:o,onChange:p=>{l(p.target.value),v("")}})})]}),r.jsxs("div",{className:"field",children:[r.jsx("label",{htmlFor:"signup-last",children:"Last name"}),r.jsx("div",{className:"field-input",children:r.jsx("input",{id:"signup-last",type:"text",placeholder:"Nadar",required:!0,autoComplete:"family-name",value:d,onChange:p=>{c(p.target.value),v("")}})})]})]}),r.jsxs("div",{className:"field",children:[r.jsx("label",{htmlFor:"signup-email",children:"Work email"}),r.jsx("div",{className:"field-input",children:r.jsx("input",{id:"signup-email",type:"email",placeholder:"you@company.com",required:!0,autoComplete:"email",value:m,onChange:p=>{h(p.target.value),v("")}})})]}),r.jsxs("div",{className:"field",children:[r.jsx("label",{htmlFor:"signup-industry",children:"Industry"}),r.jsx("div",{className:"field-input",children:r.jsxs("select",{id:"signup-industry",value:i,onChange:p=>s(p.target.value),required:!0,children:[r.jsx("option",{value:"",disabled:!0,children:"Select your industry"}),zs.map(p=>r.jsx("option",{value:p,children:p},p)),r.jsx("option",{value:"Other",children:"Other"})]})})]}),r.jsxs("div",{className:"field",children:[r.jsx("label",{htmlFor:"signup-password",children:"Password"}),r.jsxs("div",{className:"field-input",children:[r.jsx("input",{id:"signup-password",type:e?"text":"password",placeholder:"••••••••",required:!0,autoComplete:"new-password",minLength:8,value:x,onChange:p=>{j(p.target.value),v("")}}),r.jsx("button",{type:"button",className:"field-toggle",onClick:()=>t(p=>!p),"aria-label":e?"Hide password":"Show password",children:e?"HIDE":"SHOW"})]}),r.jsx("div",{className:"field-hint",children:"At least 8 characters."})]}),r.jsxs("div",{className:"terms-row",children:[r.jsx("input",{type:"checkbox",id:"signup-terms",required:!0}),r.jsxs("label",{htmlFor:"signup-terms",children:["I agree to NexusRAG's ",r.jsx("a",{href:"#",children:"Terms of Service"})," and ",r.jsx("a",{href:"#",children:"Privacy Policy"}),"."]})]}),k&&r.jsxs("div",{style:{background:"#fff1f1",border:"1px solid #fecaca",borderRadius:10,padding:"10px 14px",fontSize:13.5,color:"#dc2626",marginBottom:16},children:["⚠️ ",k]}),r.jsx("button",{type:"submit",className:"submit-btn",children:"Create account →"})]}),r.jsx("div",{className:"divider",children:"or continue with"}),r.jsxs("div",{className:"social-row",children:[r.jsx("button",{type:"button",className:"social-btn",children:"Google"}),r.jsx("button",{type:"button",className:"social-btn",children:"GitHub"})]}),r.jsx(R,{to:"/",className:"back-home",children:"← Back to homepage"})]})})]})]})}function bh(){var w,S;const[e,t]=g.useState(""),[n,a]=g.useState(""),[i,s]=g.useState(!1),[o,l]=g.useState(""),[d,c]=g.useState(!1),[m,h]=g.useState(!1),{login:x,isAdmin:j,isLoggedIn:k}=_n(),v=tt(),f=((S=(w=en().state)==null?void 0:w.from)==null?void 0:S.pathname)||"/admin";g.useEffect(()=>{const C=setTimeout(()=>c(!0),60);return()=>clearTimeout(C)},[]),g.useEffect(()=>{k&&j&&v(f,{replace:!0})},[k,j]);const u=C=>{C.preventDefault(),l(""),h(!0),setTimeout(()=>{const N=x(e.trim(),n,!0);N.ok?v(f,{replace:!0}):l(N.error),h(!1)},600)};function p({name:C,size:N=18}){const M={width:N,height:N,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:1.8,strokeLinecap:"round",strokeLinejoin:"round"};switch(C){case"shield":return r.jsx("svg",{...M,children:r.jsx("path",{d:"M12 3l8 3.5V11c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V6.5z"})});case"eye":return r.jsxs("svg",{...M,children:[r.jsx("ellipse",{cx:"12",cy:"12",rx:"9",ry:"5"}),r.jsx("circle",{cx:"12",cy:"12",r:"2.5"})]});case"eyeoff":return r.jsx("svg",{...M,children:r.jsx("path",{d:"M3 3l18 18M10.5 10.7A3 3 0 0 0 13.3 13.5M6.5 6.7A9 9 0 0 0 3 12c2 4 5.5 6 9 6a9 9 0 0 0 4.5-1.2M9.5 5.2A9 9 0 0 1 21 12a10 10 0 0 1-.9 2.1"})});case"lock":return r.jsxs("svg",{...M,children:[r.jsx("rect",{x:"5",y:"11",width:"14",height:"10",rx:"2"}),r.jsx("path",{d:"M8 11V7a4 4 0 1 1 8 0v4"})]});case"mail":return r.jsxs("svg",{...M,children:[r.jsx("rect",{x:"3",y:"5",width:"18",height:"14",rx:"2"}),r.jsx("path",{d:"M3 7l9 6 9-6"})]});default:return null}}return r.jsxs("div",{className:`admin-login${d?" mounted":""}`,children:[r.jsx("style",{children:`
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
`}),r.jsxs("div",{className:"left-pane",children:[r.jsxs("div",{className:"lp-brand",children:[r.jsx("div",{className:"lp-mark",children:"N"}),"NexusRAG"]}),r.jsx("div",{className:"lp-shield",children:r.jsx(p,{name:"shield",size:36})}),r.jsxs("div",{className:"lp-title",children:["Admin Portal",r.jsx("br",{}),"Access Only"]}),r.jsx("div",{className:"lp-desc",children:"This portal is restricted to system administrators. Regular users must log in through the standard sign-in page."}),r.jsxs("div",{className:"lp-creds",children:[r.jsx("div",{className:"lp-creds-label",children:"Demo Admin Credentials"}),r.jsxs("div",{className:"lp-cred-row",children:[r.jsxs("div",{className:"lp-cred",children:[r.jsx("span",{children:"Email"}),r.jsx("span",{children:"admin@nexusrag.com"})]}),r.jsxs("div",{className:"lp-cred",children:[r.jsx("span",{children:"Password"}),r.jsx("span",{children:"admin@1234"})]})]})]}),r.jsx("div",{className:"lp-spacer"}),r.jsx(R,{to:"/login",className:"lp-user-link",children:"← Regular user login"})]}),r.jsx("div",{className:"right-pane",children:r.jsxs("div",{className:"form-box",children:[r.jsxs("div",{className:"admin-badge",children:["🛡️ Admin Access ",r.jsx("span",{children:"· Restricted"})]}),r.jsx("h1",{children:"Admin Sign In"}),r.jsx("p",{children:"Enter your administrator credentials to access the NexusRAG admin panel."}),o&&r.jsxs("div",{className:"error-msg",children:["⚠️ ",o]}),r.jsxs("form",{onSubmit:u,noValidate:!0,children:[r.jsxs("div",{className:"field",children:[r.jsx("label",{htmlFor:"admin-email",children:"Admin Email"}),r.jsxs("div",{className:`input-wrap${o?" error-ring":""}`,children:[r.jsx(p,{name:"mail",size:17}),r.jsx("input",{id:"admin-email",type:"email",placeholder:"admin@nexusrag.com",value:e,onChange:C=>{t(C.target.value),l("")},autoComplete:"username",required:!0})]})]}),r.jsxs("div",{className:"field",children:[r.jsx("label",{htmlFor:"admin-password",children:"Password"}),r.jsxs("div",{className:`input-wrap${o?" error-ring":""}`,children:[r.jsx(p,{name:"lock",size:17}),r.jsx("input",{id:"admin-password",type:i?"text":"password",placeholder:"Enter admin password",value:n,onChange:C=>{a(C.target.value),l("")},autoComplete:"current-password",required:!0}),r.jsx("button",{type:"button",className:"pw-toggle",onClick:()=>s(C=>!C),children:r.jsx(p,{name:i?"eyeoff":"eye",size:16})})]})]}),r.jsx("button",{type:"submit",className:"submit-btn",disabled:m,children:m?"Verifying…":"Sign in as Admin →"})]}),r.jsx("div",{className:"divider",children:r.jsx("span",{children:"or"})}),r.jsx(R,{to:"/login",className:"user-link-btn",children:"Continue as Regular User"})]})})]})}const jh=["How do I prepare for a web designer interview?","What are the key principles of effective web design?","What are the best design trends for websites in 2025?"],wh=[{key:"rc1",title:"New chat",time:"20 secs ago"},{key:"rc2",title:"Give me unique name logo for CRM dashboard",time:"45 mins ago"},{key:"rc3",title:"Create SaaS web app categories",time:"3 hours ago"}],kh=[{group:"Today",items:[{key:"h1",title:"New Chat",time:"Today, 11:50 pm"},{key:"h2",title:"Give me unique name logo for...",time:"Today, 11:05 pm"},{key:"h3",title:"Create SaaS web app categori...",time:"Today, 08:57 pm"}]},{group:"Yesterday",items:[{key:"h4",title:"Custom platform solution",time:"Yesterday, 09:15 am"},{key:"h5",title:"Investment insights monetizati...",time:"Yesterday, 07:02 am"},{key:"h6",title:"Give me 10 similar ecommerce...",time:"Yesterday, 04:50 am"},{key:"h7",title:"5 top ecommerce integration a...",time:"Yesterday, 04:11 am"},{key:"h8",title:"Create content for privacy poli...",time:"Yesterday, 02:15 am"}]}],Nh=[{key:"health",emoji:"🏥",label:"Health",areas:"Diagnostics, patient care, medical records"},{key:"finance",emoji:"💰",label:"Finance",areas:"Banking, investing, risk & fraud detection"},{key:"traffic",emoji:"🚦",label:"Traffic",areas:"Route planning, congestion monitoring, signals"},{key:"manufacturing",emoji:"🏭",label:"Manufacturing",areas:"Production, quality control, predictive maintenance"},{key:"retail",emoji:"🛒",label:"Retail & E-commerce",areas:"Shopping, recommendations, inventory"},{key:"logistics",emoji:"🚚",label:"Logistics & Supply",areas:"Warehousing, delivery, shipment tracking"},{key:"agriculture",emoji:"🌾",label:"Agriculture",areas:"Crop monitoring, irrigation, pest detection"},{key:"energy",emoji:"⚡",label:"Energy & Utilities",areas:"Solar, electricity, power management"},{key:"construction",emoji:"🏗️",label:"Construction",areas:"Site monitoring, safety, project management"},{key:"education",emoji:"🎓",label:"Education",areas:"Online learning, tutoring, student assessment"},{key:"hospitality",emoji:"🏨",label:"Hospitality",areas:"Hotels, travel planning, customer service"},{key:"food",emoji:"🍔",label:"Food & Restaurants",areas:"Restaurant management, food delivery"},{key:"aviation",emoji:"✈️",label:"Aviation",areas:"Airport operations, aircraft maintenance"},{key:"maritime",emoji:"🚢",label:"Maritime",areas:"Ports, cargo, vessel management"},{key:"railways",emoji:"🚆",label:"Railways",areas:"Train operations, maintenance, passenger services"},{key:"realestate",emoji:"🏢",label:"Real Estate",areas:"Property management, valuation, smart buildings"},{key:"telecom",emoji:"📡",label:"Telecommunications",areas:"Network optimization, customer support"},{key:"itsoftware",emoji:"💻",label:"IT & Software",areas:"Cybersecurity, cloud services, automation"},{key:"gaming",emoji:"🎮",label:"Entertainment",areas:"Games, streaming, content recommendation"},{key:"legal",emoji:"⚖️",label:"Legal Services",areas:"Legal research, contracts, case management"},{key:"insurance",emoji:"🛡️",label:"Insurance",areas:"Claims, risk assessment, customer service"},{key:"government",emoji:"🏛️",label:"Government",areas:"Citizen services, document processing"},{key:"research",emoji:"🔬",label:"Research & Science",areas:"Data analysis, simulations, labs"},{key:"automotive",emoji:"🚗",label:"Automotive",areas:"Manufacturing, autonomous systems, maintenance"},{key:"defense",emoji:"🛩️",label:"Defense & Aerospace",areas:"Aircraft, satellites, mission systems"}];function O({name:e,size:t=18}){const n={width:t,height:t,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:1.8,strokeLinecap:"round",strokeLinejoin:"round"};switch(e){case"home":return r.jsxs("svg",{...n,children:[r.jsx("path",{d:"M3 11.5 12 4l9 7.5"}),r.jsx("path",{d:"M5 10v9a1 1 0 0 0 1 1h4v-6h4v6h4a1 1 0 0 0 1-1v-9"})]});case"calendar":return r.jsxs("svg",{...n,children:[r.jsx("rect",{x:"3.5",y:"5",width:"17",height:"16",rx:"2.5"}),r.jsx("path",{d:"M8 3v4M16 3v4M3.5 10h17"})]});case"chat":return r.jsx("svg",{...n,children:r.jsx("path",{d:"M4 5.5A2.5 2.5 0 0 1 6.5 3h11A2.5 2.5 0 0 1 20 5.5v8A2.5 2.5 0 0 1 17.5 16H10l-4.5 4v-4H6.5A2.5 2.5 0 0 1 4 13.5z"})});case"share":return r.jsxs("svg",{...n,children:[r.jsx("circle",{cx:"18",cy:"5",r:"2.3"}),r.jsx("circle",{cx:"6",cy:"12",r:"2.3"}),r.jsx("circle",{cx:"18",cy:"19",r:"2.3"}),r.jsx("path",{d:"M8.1 10.8 15.9 6.2M8.1 13.2l7.8 4.6"})]});case"note":return r.jsxs("svg",{...n,children:[r.jsx("path",{d:"M6 3.5h9l3 3V20a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5z"}),r.jsx("path",{d:"M9 10h6M9 13.5h6M9 17h3.5"})]});case"grid":return r.jsxs("svg",{...n,children:[r.jsx("rect",{x:"3.5",y:"3.5",width:"7",height:"7",rx:"1.5"}),r.jsx("rect",{x:"13.5",y:"3.5",width:"7",height:"7",rx:"1.5"}),r.jsx("rect",{x:"3.5",y:"13.5",width:"7",height:"7",rx:"1.5"}),r.jsx("rect",{x:"13.5",y:"13.5",width:"7",height:"7",rx:"1.5"})]});case"settings":return r.jsxs("svg",{...n,children:[r.jsx("circle",{cx:"12",cy:"12",r:"3.2"}),r.jsx("path",{d:"M12 3v2.2M12 18.8V21M21 12h-2.2M5.2 12H3M18.1 5.9l-1.55 1.55M7.45 16.55 5.9 18.1M18.1 18.1l-1.55-1.55M7.45 7.45 5.9 5.9"})]});case"help":return r.jsxs("svg",{...n,children:[r.jsx("circle",{cx:"12",cy:"12",r:"9"}),r.jsx("path",{d:"M9.5 9.3a2.5 2.5 0 1 1 3.4 2.3c-.8.4-1.1.9-1.1 1.7v.4"}),r.jsx("circle",{cx:"12",cy:"17",r:"0.6",fill:"currentColor",stroke:"none"})]});case"sidebar":return r.jsxs("svg",{...n,children:[r.jsx("rect",{x:"3.5",y:"4",width:"17",height:"16",rx:"2.5"}),r.jsx("path",{d:"M9.5 4v16"})]});case"plus":return r.jsx("svg",{...n,children:r.jsx("path",{d:"M12 5v14M5 12h14"})});case"shareTop":return r.jsxs("svg",{...n,children:[r.jsx("path",{d:"M12 15V4M8 8l4-4 4 4"}),r.jsx("path",{d:"M5 14v4.5A1.5 1.5 0 0 0 6.5 20h11a1.5 1.5 0 0 0 1.5-1.5V14"})]});case"trash":return r.jsx("svg",{...n,children:r.jsx("path",{d:"M5.5 7h13M9.5 7V5a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v2M7 7l.8 12a1.5 1.5 0 0 0 1.5 1.4h5.4a1.5 1.5 0 0 0 1.5-1.4L17 7"})});case"close":return r.jsx("svg",{...n,children:r.jsx("path",{d:"M6 6l12 12M18 6 6 18"})});case"clip":return r.jsx("svg",{...n,children:r.jsx("path",{d:"M8 12.5 15 5.5a3 3 0 1 1 4.2 4.2l-8.5 8.5a5 5 0 1 1-7.1-7.1L12 2.5"})});case"up":return r.jsx("svg",{...n,children:r.jsx("path",{d:"M12 19V5M6 11l6-6 6 6"})});case"search":return r.jsxs("svg",{...n,children:[r.jsx("circle",{cx:"11",cy:"11",r:"7"}),r.jsx("path",{d:"M20 20l-4.35-4.35"})]});case"chevron":return r.jsx("svg",{...n,children:r.jsx("path",{d:"M9 6l6 6-6 6"})});case"refresh":return r.jsxs("svg",{...n,children:[r.jsx("path",{d:"M4 12a8 8 0 0 1 14.5-4.6M20 12a8 8 0 0 1-14.5 4.6"}),r.jsx("path",{d:"M18.5 3.5v4h-4M5.5 20.5v-4h4"})]});case"check":return r.jsx("svg",{...n,children:r.jsx("path",{d:"M5 12.5l4.5 4.5L19 7"})});case"industry":return r.jsxs("svg",{...n,children:[r.jsx("path",{d:"M3.5 20.5V10l6-4v14.5M9.5 20.5V6l5-3v17.5M14.5 20.5V9l6 3v8.5"}),r.jsx("path",{d:"M3.5 20.5h17"})]});case"file":return r.jsxs("svg",{...n,children:[r.jsx("path",{d:"M7 3.5h7l4 4V20a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5z"}),r.jsx("path",{d:"M14 3.5V8h4.5"})]});case"upload":return r.jsxs("svg",{...n,children:[r.jsx("path",{d:"M12 15V4M8 8l4-4 4 4"}),r.jsx("path",{d:"M5 14v4.5A1.5 1.5 0 0 0 6.5 20h11a1.5 1.5 0 0 0 1.5-1.5V14"})]});case"bell":return r.jsxs("svg",{...n,children:[r.jsx("path",{d:"M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"}),r.jsx("path",{d:"M13.73 21a2 2 0 0 1-3.46 0"})]});case"logout":return r.jsxs("svg",{...n,children:[r.jsx("path",{d:"M9.5 12h11M17 8.5l3.5 3.5-3.5 3.5"}),r.jsx("path",{d:"M14 5H5a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h9"})]});default:return null}}function Sh(e){return e<1024?`${e} B`:e<1024*1024?`${Math.round(e/1024)} KB`:`${(e/(1024*1024)).toFixed(1)} MB`}function zh(){const e=tt(),{logout:t}=_n(),[n,a]=g.useState(""),[i,s]=g.useState(!0),[o,l]=g.useState(!0),[d,c]=g.useState([]),[m,h]=g.useState(null),[x,j]=g.useState([]),[k,v]=g.useState(!1),[b,f]=g.useState(""),[u,p]=g.useState([]),[w,S]=g.useState(!1),C=g.useRef(null),N=g.useRef(null);g.useEffect(()=>{var y;(y=N.current)==null||y.scrollIntoView({behavior:"smooth",block:"end"})},[u,w]);const M=y=>{const P=Array.from(y.target.files||[]);P.length&&(c(A=>[...A,...P.map($=>({id:`${$.name}-${$.size}-${Date.now()}-${Math.random()}`,file:$}))]),y.target.value="")},B=y=>c(P=>P.filter(A=>A.id!==y)),_=y=>{j(P=>P.includes(y)?P.filter(A=>A!==y):[...P,y]),v(!1)},T=y=>j(P=>P.filter(A=>A!==y)),K=()=>{const y=n.trim();if(!y&&!d.length&&!x.length)return;const P={id:`msg-${Date.now()}-${Math.random()}`,role:"user",text:y,attachments:d.map(A=>({id:A.id,name:A.file.name,size:A.file.size})),tags:x};p(A=>[...A,P]),a(""),c([]),j([]),S(!0),setTimeout(()=>{p(A=>[...A,{id:`msg-${Date.now()}-${Math.random()}`,role:"assistant",text:"Thanks for your question! This is a placeholder reply — wire this up to the NexusRAG /rag/query API endpoint to get real grounded answers with cited sources."}]),S(!1)},900)},ae=()=>{p([]),a(""),c([]),j([]),S(!1)},Dt=u.length>0,Qe=b.trim().toLowerCase(),pt=kh.map(y=>({...y,items:Qe?y.items.filter(P=>P.title.toLowerCase().includes(Qe)):y.items})).filter(y=>y.items.length>0),L=Qe.length>0&&pt.length===0,E=[{key:"home",label:"Home",icon:"home",href:"/"},{key:"meetings",label:"My Meetings",icon:"calendar",href:"/meetings"},{key:"chat",label:"NexusRAG Chat",icon:"chat",badge:"NEW",active:!0,href:"/chat"},{key:"industries",label:"Industries",icon:"industry",children:[{key:"health",label:"Health",href:"/chat"},{key:"traffic",label:"Traffic",href:"/chat"},{key:"finance",label:"Finance",href:"/chat"}]},{key:"shared",label:"Shared with Me",icon:"share",href:"/collections"},{key:"notes",label:"Notes",icon:"note",href:"/notes"},{key:"notifications",label:"Notifications",icon:"bell",href:"/notifications"}];return r.jsxs("div",{className:"jolly-dash",children:[r.jsx("style",{children:`
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
.jolly-dash .submenu { display: flex; flex-direction: column; gap: 1px; padding: 2px 0 4px 40px; }
.jolly-dash .submenu-item {
  display: flex; align-items: center; width: 100%; text-align: left;
  border: none; background: none; font-size: 13px; color: var(--text-soft);
  padding: 8px 10px; border-radius: 8px; cursor: pointer;
  transition: background 0.2s, color 0.2s; font-family: inherit;
}
.jolly-dash .submenu-item:hover { background: var(--line-soft); color: var(--text); }

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

/* ── right panel ── */
.jolly-dash .right-panel { border-left: 1px solid var(--line); padding: 20px 18px; overflow-y: auto; }
.jolly-dash .search-box {
  display: flex; align-items: center; gap: 8px;
  border: 1px solid var(--line); border-radius: 12px;
  padding: 9px 12px; margin-bottom: 22px;
}
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
`}),o&&r.jsxs("div",{className:"top-bar",children:[r.jsxs("span",{className:"badges",children:[r.jsx("span",{}),r.jsx("span",{}),r.jsx("span",{})]}),"Get NexusRAG for Chrome ",r.jsx(R,{to:"/chat",children:"Open Chat →"}),r.jsx("button",{className:"close",onClick:()=>l(!1),"aria-label":"Dismiss",children:r.jsx(O,{name:"close",size:15})})]}),r.jsx("div",{className:"shell",children:r.jsxs("div",{className:"app-frame",children:[r.jsxs("div",{className:"side-panel",children:[r.jsxs("div",{className:"brand-row",children:[r.jsx("div",{className:"brand-mark",children:r.jsx(O,{name:"chat",size:17})}),r.jsx("div",{className:"brand-name",children:"NexusRAG"})]}),r.jsxs("div",{className:"profile-card",onClick:()=>e("/dashboard"),children:[r.jsx("div",{className:"avatar"}),r.jsxs("div",{className:"profile-meta",children:[r.jsx("div",{className:"profile-name",children:"Matthew Johnson"}),r.jsx("div",{className:"profile-plan",children:"Free account"})]}),r.jsx("span",{className:"chev",children:r.jsx(O,{name:"chevron",size:16})})]}),r.jsx("div",{className:"menu-label",children:"MENU"}),r.jsx("div",{className:"menu-list",children:E.map(y=>y.children?r.jsxs("div",{className:"menu-group",children:[r.jsxs("button",{className:`menu-item${m===y.key?" expanded":""}`,onClick:()=>h(P=>P===y.key?null:y.key),children:[r.jsx(O,{name:y.icon,size:17}),y.label,r.jsx("span",{className:"menu-chev",children:r.jsx(O,{name:"chevron",size:14})})]}),m===y.key&&r.jsx("div",{className:"submenu",children:y.children.map(P=>r.jsx("button",{className:"submenu-item",onClick:()=>e(P.href),children:P.label},P.key))})]},y.key):r.jsxs("button",{className:`menu-item${y.active?" active":""}`,onClick:()=>e(y.href),children:[r.jsx(O,{name:y.icon,size:17}),y.label,y.badge&&r.jsx("span",{className:"badge",children:y.badge})]},y.key))}),r.jsx("div",{className:"side-spacer"}),r.jsxs("div",{className:"bottom-links",children:[r.jsxs("button",{className:"menu-item",onClick:()=>e("/settings"),children:[r.jsx(O,{name:"settings",size:17})," Settings"]}),r.jsxs("button",{className:"menu-item",onClick:()=>e("/help"),children:[r.jsx(O,{name:"help",size:17})," Help & Support"]}),r.jsxs("button",{className:"menu-item",onClick:()=>{t(),e("/login")},children:[r.jsx(O,{name:"logout",size:17})," Sign Out"]})]})]}),r.jsxs("div",{className:"main-panel",children:[r.jsxs("div",{className:"main-top",children:[r.jsxs("div",{className:"main-top-left",children:[r.jsx("button",{className:"icon-btn","aria-label":"Toggle sidebar",children:r.jsx(O,{name:"sidebar",size:17})}),r.jsx("button",{className:"icon-btn","aria-label":"New chat",onClick:ae,children:r.jsx(O,{name:"plus",size:17})})]}),r.jsxs("div",{className:"main-top-right",children:[r.jsxs("button",{className:"pill-btn",onClick:()=>e("/chat"),children:[r.jsx(O,{name:"shareTop",size:15})," Open Full Chat"]}),r.jsxs("button",{className:"pill-btn danger",onClick:ae,children:[r.jsx(O,{name:"trash",size:15})," Clear Chat"]})]})]}),i&&r.jsxs("div",{className:"promo-banner",children:[r.jsx("span",{className:"promo-tag",children:"LIMITED"}),r.jsxs("span",{className:"promo-text",children:["Get 1 month FREE by paying annually"," ",r.jsx(R,{to:"/chat",children:"Start Querying →"})]}),r.jsx("button",{className:"promo-close",onClick:()=>s(!1),children:r.jsx(O,{name:"close",size:15})})]}),Dt?r.jsxs("div",{className:"chat-thread",children:[u.map(y=>{var P,A,$,Ft;return r.jsxs("div",{className:`msg-row ${y.role}`,children:[y.role==="assistant"&&r.jsx("div",{className:"msg-avatar assistant",children:r.jsx(O,{name:"chat",size:14})}),r.jsxs("div",{className:"msg-bubble",children:[(((P=y.tags)==null?void 0:P.length)>0||((A=y.attachments)==null?void 0:A.length)>0)&&r.jsxs("div",{className:"msg-meta-row",children:[($=y.tags)==null?void 0:$.map(Se=>r.jsx("span",{className:"msg-tag",children:Se},Se)),(Ft=y.attachments)==null?void 0:Ft.map(Se=>r.jsxs("span",{className:"msg-file",children:[r.jsx(O,{name:"file",size:12})," ",Se.name]},Se.id))]}),y.text&&r.jsx("div",{className:"msg-text",children:y.text})]}),y.role==="user"&&r.jsx("div",{className:"msg-avatar user"})]},y.id)}),w&&r.jsxs("div",{className:"msg-row assistant",children:[r.jsx("div",{className:"msg-avatar assistant",children:r.jsx(O,{name:"chat",size:14})}),r.jsxs("div",{className:"msg-bubble typing",children:[r.jsx("span",{className:"typing-dot"}),r.jsx("span",{className:"typing-dot"}),r.jsx("span",{className:"typing-dot"})]})]}),r.jsx("div",{ref:N})]}):r.jsxs("div",{className:"chat-hero",children:[r.jsxs("h1",{children:["Start talking to ",r.jsx("span",{className:"mascot",children:r.jsx(O,{name:"chat",size:17})})," ",r.jsx("span",{className:"brand-word",children:"NexusRAG"})]}),r.jsx("p",{children:"Your multi-industry RAG assistant. Ask questions about Healthcare, Finance, Traffic and more — every answer is grounded in retrieved documents with cited sources."})]}),r.jsxs("div",{className:"composer-wrap",children:[r.jsxs("div",{className:"composer",children:[(d.length>0||x.length>0)&&r.jsxs("div",{className:"attachment-row",children:[x.map(y=>r.jsxs("div",{className:"content-tag-chip",children:[r.jsx("span",{className:"content-tag-name",children:y}),r.jsx("button",{type:"button",className:"attachment-remove",onClick:()=>T(y),children:r.jsx(O,{name:"close",size:12})})]},y)),d.map(y=>r.jsxs("div",{className:"attachment-chip",children:[r.jsx("span",{className:"attachment-icon",children:r.jsx(O,{name:"file",size:14})}),r.jsxs("div",{className:"attachment-meta",children:[r.jsx("div",{className:"attachment-name",children:y.file.name}),r.jsx("div",{className:"attachment-size",children:Sh(y.file.size)})]}),r.jsx("button",{type:"button",className:"attachment-remove",onClick:()=>B(y.id),children:r.jsx(O,{name:"close",size:12})})]},y.id))]}),r.jsx("textarea",{placeholder:"Write a question…",rows:2,value:n,onChange:y=>a(y.target.value),onKeyDown:y=>{y.key==="Enter"&&!y.shiftKey&&(y.preventDefault(),K())}}),r.jsxs("div",{className:"composer-bottom",children:[r.jsxs("div",{className:"composer-bottom-left",children:[r.jsx("button",{type:"button",className:"attach-btn",onClick:()=>{var y;return(y=C.current)==null?void 0:y.click()},"aria-label":"Attach files",children:r.jsx(O,{name:"clip",size:16})}),r.jsxs("div",{className:"model-select",children:["NexusRAG ",r.jsx(O,{name:"chevron",size:13})]})]}),r.jsx("button",{className:"send-btn",onClick:K,"aria-label":"Send",children:r.jsx(O,{name:"up",size:16})})]})]}),r.jsx("input",{ref:C,type:"file",multiple:!0,className:"hidden-file-input",onChange:M}),r.jsxs("div",{className:"add-content-row",children:[r.jsxs("div",{className:"add-content-menu-wrap",children:[r.jsxs("button",{type:"button",className:"add-content-btn",onClick:()=>v(y=>!y),children:[r.jsx(O,{name:"clip",size:14})," Add industry context",r.jsx(O,{name:"chevron",size:12})]}),k&&r.jsx("div",{className:"content-dropdown industries-dropdown",children:Nh.map(y=>r.jsxs("button",{type:"button",className:`content-dropdown-item${x.includes(y.label)?" selected":""}`,onClick:()=>_(y.label),children:[r.jsx("span",{className:"industry-emoji",children:y.emoji}),r.jsx("span",{className:"content-dropdown-label",children:y.label}),x.includes(y.label)&&r.jsx(O,{name:"check",size:14})]},y.key))})]}),jh.map(y=>r.jsx("button",{className:"suggestion-chip",onClick:()=>a(y),children:y},y))]})]}),!Dt&&r.jsxs("div",{className:"recent-section",children:[r.jsx("div",{className:"recent-label",children:"Recent Chats"}),r.jsx("div",{className:"recent-grid",children:wh.map(y=>r.jsxs("button",{className:"recent-card",onClick:()=>y.title.toLowerCase()==="new chat"?ae():p([{id:`seed-${y.key}`,role:"user",text:y.title,attachments:[],tags:[]}]),children:[r.jsx("div",{className:"r-icon",children:r.jsx(O,{name:"chat",size:15})}),r.jsxs("div",{children:[r.jsx("div",{className:"r-title",children:y.title}),r.jsx("div",{className:"r-time",children:y.time})]})]},y.key))})]})]}),r.jsxs("div",{className:"right-panel",children:[r.jsxs("div",{className:"search-box",children:[r.jsx(O,{name:"search",size:15}),r.jsx("input",{type:"text",placeholder:"Search history",value:b,onChange:y=>f(y.target.value)}),b?r.jsx("button",{type:"button",className:"search-clear",onClick:()=>f(""),children:r.jsx(O,{name:"close",size:13})}):r.jsx("span",{className:"kbd",children:"⌘ K"})]}),L&&r.jsxs("div",{className:"no-results",children:['No chats match "',b,'"']}),pt.map(y=>r.jsxs("div",{className:"history-group",children:[r.jsx("div",{className:"history-group-label",children:y.group}),y.items.map(P=>r.jsxs("button",{className:"history-item",onClick:()=>P.title.toLowerCase()==="new chat"?ae():p([{id:`seed-${P.key}`,role:"user",text:P.title,attachments:[],tags:[]}]),children:[r.jsx("span",{className:"h-icon",children:r.jsx(O,{name:"chat",size:15})}),r.jsxs("div",{className:"h-meta",children:[r.jsx("div",{className:"h-title",children:P.title}),r.jsx("div",{className:"h-time",children:P.time})]})]},P.key))]},y.group))]})]})})]})}const Yl=[{key:"healthcare",emoji:"🏥",label:"Healthcare",desc:"PubMedQA — diagnostics, patient care, medical research",color:"#22c55e",bg:"#dcfce7",samples:["What are the common symptoms of Type 2 diabetes?","How is CRISPR used in gene therapy?","What treatment options exist for early-stage lung cancer?"]},{key:"finance",emoji:"💰",label:"Banking & Finance",desc:"FinQA / TAT-QA — market analysis, risk, banking regulations",color:"#3b82f6",bg:"#dbeafe",samples:["What are the Basel III capital adequacy requirements?","How does quantitative easing affect inflation?","Explain the difference between CDOs and CMOs."]},{key:"traffic",emoji:"🚦",label:"Traffic & Transport",desc:"Custom dataset — driving rules, road safety, traffic law",color:"#f59e0b",bg:"#fef3c7",samples:["What is the legal blood alcohol limit for driving?","When must a driver yield to pedestrians at a zebra crossing?","What are the rules for overtaking on a single-lane road?"]}],ql={healthcare:{text:`Based on the retrieved medical literature, **Type 2 diabetes** is characterised by insulin resistance and relative insulin deficiency. Common symptoms include:

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

Penalties for failing to yield can include fines and penalty points on the driver's licence.`,sources:[{id:"src-1",title:"Highway Code — Rule 195",page:"Rule 195",relevance:.97},{id:"src-2",title:"Road Traffic Act 1988 (UK)",page:"§ 25",relevance:.92},{id:"src-3",title:"DfT Driving Standards Guide 2023",page:"p. 61",relevance:.84}]}};function Yr({name:e,size:t=18}){const n={width:t,height:t,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:1.8,strokeLinecap:"round",strokeLinejoin:"round"};switch(e){case"send":return r.jsxs("svg",{...n,children:[r.jsx("path",{d:"M22 2L11 13"}),r.jsx("path",{d:"M22 2 15 22 11 13 2 9l20-7z"})]});case"close":return r.jsx("svg",{...n,children:r.jsx("path",{d:"M6 6l12 12M18 6 6 18"})});case"refresh":return r.jsxs("svg",{...n,children:[r.jsx("path",{d:"M4 12a8 8 0 0 1 14.5-4.6M20 12a8 8 0 0 1-14.5 4.6"}),r.jsx("path",{d:"M18.5 3.5v4h-4M5.5 20.5v-4h4"})]});case"share":return r.jsxs("svg",{...n,children:[r.jsx("path",{d:"M12 15V4M8 8l4-4 4 4"}),r.jsx("path",{d:"M5 14v4.5A1.5 1.5 0 0 0 6.5 20h11a1.5 1.5 0 0 0 1.5-1.5V14"})]});case"chevron":return r.jsx("svg",{...n,children:r.jsx("path",{d:"M9 6l6 6-6 6"})});case"info":return r.jsxs("svg",{...n,children:[r.jsx("circle",{cx:"12",cy:"12",r:"9"}),r.jsx("path",{d:"M12 8v4M12 16h.01"})]});case"clipboard":return r.jsxs("svg",{...n,children:[r.jsx("rect",{x:"8",y:"2",width:"8",height:"4",rx:"1.5"}),r.jsx("path",{d:"M7 4H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-2"})]});case"arrow":return r.jsx("svg",{...n,children:r.jsx("path",{d:"M5 12h14M13 6l6 6-6 6"})});default:return null}}function Ch(){return r.jsxs("div",{className:"typing-dots",children:[r.jsx("span",{}),r.jsx("span",{}),r.jsx("span",{})]})}function Mh({text:e}){const t=e.split(`
`);return r.jsx("div",{className:"md-text",children:t.map((n,a)=>{if(n.startsWith("• ")){const s=n.slice(2).replace(/\*\*(.*?)\*\*/g,(o,l)=>`<strong>${l}</strong>`);return r.jsx("li",{dangerouslySetInnerHTML:{__html:s}},a)}const i=n.replace(/\*\*(.*?)\*\*/g,(s,o)=>`<strong>${o}</strong>`);return n?r.jsx("p",{dangerouslySetInnerHTML:{__html:i}},a):r.jsx("br",{},a)})})}function Eh(){const[e,t]=g.useState(null),[n,a]=g.useState(""),[i,s]=g.useState([]),[o,l]=g.useState(!1),[d,c]=g.useState(null),m=g.useRef(null),h=g.useRef(null);g.useEffect(()=>{var u;(u=m.current)==null||u.scrollTo({top:m.current.scrollHeight,behavior:"smooth"})},[i,o]);const x=u=>{const p=(u==null?void 0:u.key)||"healthcare";return ql[p]||ql.healthcare},j=()=>{const u=n.trim();if(!u||!e)return;const p={id:`u-${Date.now()}`,role:"user",text:u};s(S=>[...S,p]),a(""),l(!0);const w=e;setTimeout(()=>{const S=x(w);s(C=>[...C,{id:`a-${Date.now()}`,role:"assistant",text:S.text,sources:S.sources,industry:w}]),l(!1)},1400)},k=u=>{u.key==="Enter"&&!u.shiftKey&&(u.preventDefault(),j())},v=(u,p)=>{navigator.clipboard.writeText(p).catch(()=>{}),c(u),setTimeout(()=>c(null),1800)},b=u=>{var p;a(u),(p=h.current)==null||p.focus()},f=()=>{s([]),a(""),l(!1)};return r.jsxs("div",{className:"rag-chat",children:[r.jsx("style",{children:`
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
`}),r.jsxs("nav",{children:[r.jsxs(R,{to:"/",className:"brand",children:[r.jsx("span",{className:"brand-mark",children:"N"}),"NexusRAG"]}),r.jsxs("div",{className:"nav-right",children:[e&&r.jsxs("span",{className:"nav-chip",children:[e.emoji," ",e.label]}),r.jsx(R,{to:"/dashboard",className:"nav-link",children:"My Chats"}),r.jsx("button",{className:"nav-btn",onClick:f,children:"+ New Chat"})]})]}),r.jsxs("div",{className:"layout",children:[r.jsxs("aside",{className:"left-panel",children:[r.jsxs("div",{className:"lp-head",children:[r.jsx("h2",{children:"Select Industry"}),r.jsx("p",{children:"Choose a knowledge base to query. Each sector has its own curated document collection."})]}),r.jsx("div",{className:"industry-list",children:Yl.map(u=>r.jsxs("button",{className:`ind-btn${(e==null?void 0:e.key)===u.key?" selected":""}`,onClick:()=>{t(u),s([])},children:[r.jsx("span",{className:"ind-emoji",children:u.emoji}),r.jsxs("div",{className:"ind-meta",children:[r.jsx("div",{className:"ind-name",children:u.label}),r.jsx("div",{className:"ind-desc",children:u.desc})]})]},u.key))}),r.jsx("div",{className:"lp-footer",children:r.jsx("span",{className:"lp-footer-note",children:"Select an industry to start asking questions."})})]}),r.jsx("main",{className:"chat-main",children:e?r.jsxs(r.Fragment,{children:[r.jsx("div",{className:"chat-thread",ref:m,children:r.jsxs("div",{className:"thread-inner",children:[r.jsxs("button",{className:"chat-industry-badge",onClick:()=>{t(null),s([])},children:[e.emoji," ",e.label,r.jsx("span",{style:{fontSize:11,opacity:.6},children:"· click to change ✕"})]}),i.map(u=>{var p,w;return u.role==="user"?r.jsx("div",{className:"msg-user",style:{marginBottom:18},children:r.jsx("div",{className:"bubble",children:u.text})},u.id):r.jsxs("div",{className:"msg-assistant",style:{marginBottom:18},children:[r.jsx("div",{className:"asst-avatar",children:"✦"}),r.jsxs("div",{className:"asst-body",children:[r.jsxs("div",{className:"asst-name",children:["NexusRAG",r.jsxs("span",{className:"asst-tag",children:[(p=u.industry)==null?void 0:p.emoji," ",(w=u.industry)==null?void 0:w.label]})]}),r.jsxs("div",{className:"asst-bubble",children:[r.jsx(Mh,{text:u.text}),u.sources&&u.sources.length>0&&r.jsxs("div",{className:"sources-section",children:[r.jsx("div",{className:"sources-label",children:"Retrieved Sources"}),r.jsx("div",{className:"sources-list",children:u.sources.map((S,C)=>r.jsxs("div",{className:"source-tag",children:[r.jsx("span",{className:"src-num",children:C+1}),r.jsx("span",{className:"src-title",children:S.title}),r.jsx("span",{className:"src-page",children:S.page}),r.jsxs("span",{className:"src-score",children:[Math.round(S.relevance*100),"%"]})]},S.id))})]})]}),r.jsxs("div",{className:"msg-actions",children:[r.jsxs("button",{className:`action-btn${d===u.id?" copied":""}`,onClick:()=>v(u.id,u.text),children:[r.jsx(Yr,{name:"clipboard",size:13}),d===u.id?"Copied!":"Copy"]}),r.jsxs("button",{className:"action-btn",onClick:f,children:[r.jsx(Yr,{name:"refresh",size:13})," New chat"]})]})]})]},u.id)}),o&&r.jsxs("div",{className:"msg-assistant",style:{marginBottom:18},children:[r.jsx("div",{className:"asst-avatar",children:"✦"}),r.jsxs("div",{className:"asst-body",children:[r.jsxs("div",{className:"asst-name",children:["NexusRAG ",r.jsx("span",{className:"asst-tag",children:"Retrieving…"})]}),r.jsx("div",{className:"asst-bubble",children:r.jsx(Ch,{})})]})]})]})}),i.length===0&&!o&&r.jsxs("div",{className:"samples-row",children:[r.jsx("div",{className:"samples-label",children:"Try asking…"}),e.samples.map(u=>r.jsxs("button",{className:"sample-btn",onClick:()=>b(u),children:[r.jsx(Yr,{name:"arrow",size:15}),u]},u))]}),r.jsxs("div",{className:"input-bar",children:[r.jsxs("div",{className:"input-wrap",children:[r.jsx("textarea",{ref:h,rows:1,placeholder:`Ask anything about ${e.label}…`,value:n,onChange:u=>a(u.target.value),onKeyDown:k,onInput:u=>{u.target.style.height="auto",u.target.style.height=`${Math.min(u.target.scrollHeight,140)}px`}}),r.jsx("button",{className:"send-btn",onClick:j,disabled:!n.trim()||o,"aria-label":"Send question",children:r.jsx(Yr,{name:"send",size:17})})]}),r.jsxs("div",{className:"input-hint",children:["Enter to send · Shift+Enter for new line · Answers grounded in ",e.label," knowledge base"]})]})]}):r.jsxs("div",{className:"select-prompt",children:[r.jsx("div",{className:"sp-icon",children:"🧠"}),r.jsx("h1",{children:"Multi-Industry RAG Q&A"}),r.jsx("p",{children:"Select an industry from the left panel to start querying its knowledge base. Each answer is grounded in retrieved documents with cited sources."}),r.jsx("div",{className:"mobile-industries",children:Yl.map(u=>r.jsxs("button",{className:`mob-ind-btn${(e==null?void 0:e.key)===u.key?" selected":""}`,onClick:()=>t(u),children:[r.jsx("span",{className:"mob-ind-emoji",children:u.emoji}),r.jsx("span",{className:"mob-ind-label",children:u.label})]},u.key))})]})})]})]})}const Ph=[{id:"n1",type:"success",icon:"✅",title:"Healthcare collection updated",desc:"842 new documents indexed from PubMedQA batch upload. 18,420 new chunks created.",time:"2 hours ago",read:!1,action:{label:"View Collection",href:"/collections"}},{id:"n2",type:"info",icon:"🔔",title:"New query milestone",desc:"The Finance knowledge base has received 3,000+ queries this month — your most-used sector.",time:"5 hours ago",read:!1,action:{label:"Ask Finance Q&A",href:"/chat"}},{id:"n3",type:"success",icon:"✅",title:"Traffic dataset indexed",desc:"Custom traffic dataset successfully embedded using all-MiniLM-L6-v2. HyPE retrieval is now active.",time:"3 days ago",read:!0,action:{label:"Query Traffic",href:"/chat"}},{id:"n4",type:"warning",icon:"⚠️",title:"Legal collection is empty",desc:"The Legal Services knowledge base has no documents. Upload files to enable querying this sector.",time:"5 days ago",read:!0,action:{label:"Upload Documents",href:"/upload"}},{id:"n5",type:"info",icon:"🔔",title:"System update: Semantic chunking enabled",desc:"All future uploads will use topic-based semantic chunking instead of fixed-length chunking. This improves retrieval accuracy.",time:"1 week ago",read:!0,action:null},{id:"n6",type:"success",icon:"✅",title:"MiniLM reranker activated",desc:"Cross-encoder reranking (MiniLM) is now the default second-stage model. BGE reranker remains available for comparison.",time:"2 weeks ago",read:!0,action:{label:"Try Reranked Q&A",href:"/chat"}}];function Kl({name:e,size:t=18}){const n={width:t,height:t,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:1.8,strokeLinecap:"round",strokeLinejoin:"round"};switch(e){case"check":return r.jsx("svg",{...n,children:r.jsx("path",{d:"M5 12.5l4.5 4.5L19 7"})});case"bell":return r.jsxs("svg",{...n,children:[r.jsx("path",{d:"M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"}),r.jsx("path",{d:"M13.73 21a2 2 0 0 1-3.46 0"})]});case"close":return r.jsx("svg",{...n,children:r.jsx("path",{d:"M6 6l12 12M18 6 6 18"})});case"arrow":return r.jsx("svg",{...n,children:r.jsx("path",{d:"M5 12h14M13 6l6 6-6 6"})});default:return null}}function Ih(){const[e,t]=g.useState(Ph),[n,a]=g.useState("all"),i=()=>t(c=>c.map(m=>({...m,read:!0}))),s=c=>t(m=>m.map(h=>h.id===c?{...h,read:!0}:h)),o=c=>t(m=>m.filter(h=>h.id!==c)),l=e.filter(c=>!c.read).length,d=n==="unread"?e.filter(c=>!c.read):e;return r.jsxs("div",{className:"rag-notif",children:[r.jsx("style",{children:`
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
`}),r.jsxs("nav",{children:[r.jsxs(R,{to:"/",className:"brand",children:[r.jsx("span",{className:"brand-mark",children:"N"}),"NexusRAG"]}),r.jsxs("div",{className:"nav-right",children:[r.jsx(R,{to:"/dashboard",className:"nav-link",children:"Dashboard"}),r.jsx(R,{to:"/chat",className:"nav-link",children:"Query"}),r.jsx(R,{to:"/settings",className:"nav-btn",children:"Settings →"})]})]}),r.jsxs("div",{className:"page-wrap",children:[r.jsxs("div",{className:"page-head",children:[r.jsxs("div",{className:"head-left",children:[r.jsx("div",{className:"eyebrow",children:"System Alerts"}),r.jsxs("h1",{children:["Notifications",l>0&&r.jsx("span",{className:"unread-badge",children:l})]})]}),r.jsx("div",{className:"head-actions",children:l>0&&r.jsxs("button",{className:"mark-all-btn",onClick:i,children:[r.jsx(Kl,{name:"check",size:14})," Mark all read"]})})]}),r.jsxs("div",{className:"filter-tabs",children:[r.jsxs("button",{className:`ftab${n==="all"?" active":""}`,onClick:()=>a("all"),children:["All (",e.length,")"]}),r.jsxs("button",{className:`ftab${n==="unread"?" active":""}`,onClick:()=>a("unread"),children:["Unread (",l,")"]})]}),r.jsx("div",{className:"notif-list",children:d.length===0?r.jsxs("div",{className:"empty",children:[r.jsx("div",{className:"empty-icon",children:"🔔"}),r.jsx("h3",{children:"All caught up!"}),r.jsxs("p",{children:["No ",n==="unread"?"unread ":"","notifications to show."]})]}):d.map(c=>r.jsxs("div",{className:`notif-item ${c.read?"":"unread"}`,children:[r.jsx("div",{className:`notif-icon ${c.type}`,children:c.icon}),r.jsxs("div",{className:"notif-body",children:[r.jsxs("div",{className:"notif-title",children:[c.title,r.jsx("span",{className:"notif-time",children:c.time})]}),r.jsx("div",{className:"notif-desc",children:c.desc}),r.jsxs("div",{className:"notif-actions",children:[c.action&&r.jsxs(R,{to:c.action.href,className:"notif-action-btn",children:[c.action.label," →"]}),!c.read&&r.jsx("button",{className:"notif-mark-btn",onClick:()=>s(c.id),children:"Mark as read"})]})]}),r.jsx("button",{className:"notif-dismiss",onClick:()=>o(c.id),"aria-label":"Dismiss",children:r.jsx(Kl,{name:"close",size:14})})]},c.id))})]})]})}const nn=new Date,rn=e=>new Date(e).toLocaleDateString("en-IN",{day:"numeric",month:"short",year:"numeric"}),Th=e=>{if(!e)return"";const[t,n]=e.split(":").map(Number);return`${t%12||12}:${String(n).padStart(2,"0")} ${t<12?"AM":"PM"}`},Xl=()=>nn.toISOString().slice(0,10),Vn=(e,t)=>{const n=new Date(e);return n.setDate(n.getDate()+t),n},Rh=["🏥 Healthcare","💰 Finance","🚦 Traffic","🔬 Research","💻 IT & AI","⚖️ Legal","🛒 Retail","⚡ Energy","🎓 Education","🏭 Manufacturing","🌾 Agriculture","🚚 Logistics","✈️ Aviation","🏢 Real Estate","🎮 Entertainment","🛡️ Insurance","🏛️ Government","🚗 Automotive"],Lh=["15 min","30 min","45 min","60 min","90 min","2 hrs","3 hrs"],_h=[{id:"m1",title:"RAG System Demo — Healthcare Sector",date:rn(Vn(nn,0)),time:"10:00 AM",duration:"45 min",status:"upcoming",attendees:["You","Dr. Priya S.","Rahul M."],industry:"🏥 Healthcare",link:"https://meet.google.com/abc-defg-hij"},{id:"m2",title:"Finance Q&A Pipeline Review",date:rn(Vn(nn,0)),time:"3:30 PM",duration:"60 min",status:"upcoming",attendees:["You","Aman K.","Shruti P."],industry:"💰 Finance",link:"https://zoom.us/j/123456789"},{id:"m3",title:"Traffic Dataset Indexing Walkthrough",date:rn(Vn(nn,-1)),time:"11:00 AM",duration:"30 min",status:"done",attendees:["You","Neha R."],industry:"🚦 Traffic",link:null},{id:"m4",title:"Final Year Project Guide Review",date:rn(Vn(nn,-2)),time:"2:00 PM",duration:"90 min",status:"done",attendees:["You","Prof. Desai","Meera S."],industry:"🔬 Research",link:null},{id:"m5",title:"MiniLM Reranker Evaluation Meeting",date:rn(Vn(nn,2)),time:"10:30 AM",duration:"60 min",status:"upcoming",attendees:["You","Vikram T.","Ananya B."],industry:"💻 IT & AI",link:"https://teams.microsoft.com/l/meetup"}];function ge({name:e,size:t=18}){const n={width:t,height:t,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:1.8,strokeLinecap:"round",strokeLinejoin:"round"};switch(e){case"calendar":return r.jsxs("svg",{...n,children:[r.jsx("rect",{x:"3.5",y:"5",width:"17",height:"16",rx:"2.5"}),r.jsx("path",{d:"M8 3v4M16 3v4M3.5 10h17"})]});case"clock":return r.jsxs("svg",{...n,children:[r.jsx("circle",{cx:"12",cy:"12",r:"9"}),r.jsx("path",{d:"M12 7v5l3 3"})]});case"users":return r.jsxs("svg",{...n,children:[r.jsx("circle",{cx:"9",cy:"8",r:"3.5"}),r.jsx("path",{d:"M3 20c0-3.87 2.69-7 6-7h.5"}),r.jsx("circle",{cx:"16",cy:"10",r:"2.5"}),r.jsx("path",{d:"M12.5 20c0-2.76 1.57-5 3.5-5s3.5 2.24 3.5 5"})]});case"video":return r.jsxs("svg",{...n,children:[r.jsx("path",{d:"M17 7H7a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z"}),r.jsx("path",{d:"M22 8.5l-5 3.5 5 3.5z"})]});case"plus":return r.jsx("svg",{...n,children:r.jsx("path",{d:"M12 5v14M5 12h14"})});case"check":return r.jsx("svg",{...n,children:r.jsx("path",{d:"M5 12.5l4.5 4.5L19 7"})});case"close":return r.jsx("svg",{...n,children:r.jsx("path",{d:"M6 6l12 12M18 6 6 18"})});case"chat":return r.jsx("svg",{...n,children:r.jsx("path",{d:"M4 5.5A2.5 2.5 0 0 1 6.5 3h11A2.5 2.5 0 0 1 20 5.5v8A2.5 2.5 0 0 1 17.5 16H10l-4.5 4v-4H6.5A2.5 2.5 0 0 1 4 13.5z"})});case"trash":return r.jsx("svg",{...n,children:r.jsx("path",{d:"M5.5 7h13M9.5 7V5a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v2M7 7l.8 12a1.5 1.5 0 0 0 1.5 1.4h5.4a1.5 1.5 0 0 0 1.5-1.4L17 7"})});case"link":return r.jsxs("svg",{...n,children:[r.jsx("path",{d:"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"}),r.jsx("path",{d:"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"})]});case"person":return r.jsxs("svg",{...n,children:[r.jsx("circle",{cx:"12",cy:"8",r:"4"}),r.jsx("path",{d:"M4 20c0-4 3.58-7 8-7s8 3 8 7"})]});default:return null}}function Ah({onSave:e,onClose:t}){const[n,a]=g.useState(""),[i,s]=g.useState("🏥 Healthcare"),[o,l]=g.useState(Xl()),[d,c]=g.useState("10:00"),[m,h]=g.useState("30 min"),[x,j]=g.useState(""),[k,v]=g.useState(""),[b,f]=g.useState(["You"]),[u,p]=g.useState(""),w=()=>{const N=k.trim();if(N){if(b.includes(N)){v("");return}f(M=>[...M,N]),v("")}},S=N=>N!=="You"&&f(M=>M.filter(B=>B!==N)),C=N=>{if(N.preventDefault(),!n.trim()){p("Title is required.");return}if(!o){p("Please choose a date.");return}p(""),e({id:`m${Date.now()}`,title:n.trim(),industry:i,date:rn(o),time:Th(d),duration:m,attendees:b,link:x.trim()||null,status:"upcoming"}),t()};return r.jsx("div",{className:"modal-overlay",onClick:t,children:r.jsxs("div",{className:"modal-box",onClick:N=>N.stopPropagation(),children:[r.jsxs("div",{className:"modal-hd",children:[r.jsx("h2",{children:"📅 Schedule New Meeting"}),r.jsx("button",{className:"modal-x",onClick:t,"aria-label":"Close",children:r.jsx(ge,{name:"close",size:16})})]}),u&&r.jsxs("div",{className:"modal-error",children:["⚠️ ",u]}),r.jsxs("form",{onSubmit:C,noValidate:!0,children:[r.jsxs("div",{className:"mfield",children:[r.jsx("label",{children:"Meeting Title *"}),r.jsx("input",{type:"text",placeholder:"e.g. RAG System Demo — Healthcare",value:n,onChange:N=>{a(N.target.value),p("")},autoFocus:!0,required:!0})]}),r.jsxs("div",{className:"mfield",children:[r.jsx("label",{children:"Industry / Topic"}),r.jsx("select",{value:i,onChange:N=>s(N.target.value),children:Rh.map(N=>r.jsx("option",{value:N,children:N},N))})]}),r.jsxs("div",{className:"mfield-row",children:[r.jsxs("div",{className:"mfield",children:[r.jsx("label",{children:"Date *"}),r.jsx("input",{type:"date",value:o,min:Xl(),onChange:N=>{l(N.target.value),p("")},required:!0})]}),r.jsxs("div",{className:"mfield",children:[r.jsx("label",{children:"Time"}),r.jsx("input",{type:"time",value:d,onChange:N=>c(N.target.value)})]})]}),r.jsxs("div",{className:"mfield",children:[r.jsx("label",{children:"Duration"}),r.jsx("div",{className:"duration-chips",children:Lh.map(N=>r.jsx("button",{type:"button",className:`dur-chip${m===N?" active":""}`,onClick:()=>h(N),children:N},N))})]}),r.jsxs("div",{className:"mfield",children:[r.jsx("label",{children:"Attendees"}),r.jsxs("div",{className:"attendee-input-row",children:[r.jsx("input",{type:"text",placeholder:"Type a name and press Enter",value:k,onChange:N=>v(N.target.value),onKeyDown:N=>{N.key==="Enter"&&(N.preventDefault(),w())}}),r.jsxs("button",{type:"button",className:"add-attendee-btn",onClick:w,children:[r.jsx(ge,{name:"plus",size:14})," Add"]})]}),b.length>0&&r.jsx("div",{className:"attendee-list",children:b.map(N=>r.jsxs("span",{className:"attendee-tag",children:[r.jsx(ge,{name:"person",size:12}),N,N!=="You"&&r.jsx("button",{type:"button",className:"remove-att",onClick:()=>S(N),"aria-label":`Remove ${N}`,children:r.jsx(ge,{name:"close",size:10})})]},N))})]}),r.jsxs("div",{className:"mfield",children:[r.jsx("label",{children:"Meeting Link (optional)"}),r.jsxs("div",{className:"link-input-wrap",children:[r.jsx(ge,{name:"link",size:16}),r.jsx("input",{type:"url",placeholder:"https://zoom.us/j/...",value:x,onChange:N=>j(N.target.value)})]})]}),r.jsxs("div",{className:"modal-footer",children:[r.jsx("button",{type:"button",className:"cancel-btn",onClick:t,children:"Cancel"}),r.jsxs("button",{type:"submit",className:"save-btn",children:[r.jsx(ge,{name:"check",size:15})," Schedule Meeting"]})]})]})]})})}function Dh(){const e=tt(),[t,n]=g.useState(_h),[a,i]=g.useState("all"),[s,o]=g.useState(!1),[l,d]=g.useState(null),[c,m]=g.useState(""),h=t.filter(b=>a==="all"||b.status===a).sort((b,f)=>b.status==="upcoming"?-1:1),x=t.filter(b=>b.status==="upcoming").length,j=b=>{n(f=>[b,...f]),v("Meeting scheduled successfully! 🎉")},k=b=>{n(f=>f.filter(u=>u.id!==b)),d(null),v("Meeting removed.")},v=b=>{m(b),setTimeout(()=>m(""),3e3)};return r.jsxs("div",{className:"meetings-page",children:[r.jsx("style",{children:`
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
`}),c&&r.jsxs("div",{className:"toast",children:["✅ ",c]}),r.jsxs("nav",{children:[r.jsxs(R,{to:"/",className:"brand",children:[r.jsx("span",{className:"brand-mark",children:"N"})," NexusRAG"]}),r.jsxs("div",{className:"nav-right",children:[r.jsx(R,{to:"/dashboard",className:"nav-link",children:"← Dashboard"}),r.jsx(R,{to:"/chat",className:"nav-link",children:"Chat"}),r.jsxs("button",{className:"nav-btn",onClick:()=>o(!0),children:[r.jsx(ge,{name:"plus",size:14})," Schedule Meeting"]})]})]}),r.jsxs("div",{className:"page-wrap",children:[r.jsxs("div",{className:"page-head",children:[r.jsx("div",{className:"eyebrow",children:"Scheduled"}),r.jsx("h1",{children:"My Meetings"}),r.jsxs("div",{className:"head-row",children:[r.jsxs("p",{className:"head-sub",children:[x," upcoming · ",t.length-x," past · ",t.length," total"]}),r.jsxs("button",{className:"new-btn",onClick:()=>o(!0),children:[r.jsx(ge,{name:"plus",size:15})," Schedule New Meeting"]})]})]}),r.jsx("div",{className:"filter-tabs",children:[["all","All"],["upcoming","Upcoming"],["done","Past"]].map(([b,f])=>r.jsx("button",{className:`ftab${a===b?" active":""}`,onClick:()=>i(b),children:f},b))}),r.jsx("div",{className:"meetings-list",children:h.length===0?r.jsxs("div",{className:"empty",children:[r.jsx("div",{className:"empty-icon",children:"📅"}),r.jsx("h3",{children:"No meetings found"}),r.jsx("p",{children:a!=="all"?`No ${a} meetings.`:"Start by scheduling your first meeting."}),r.jsxs("button",{className:"empty-btn",onClick:()=>o(!0),children:[r.jsx(ge,{name:"plus",size:15})," Schedule Meeting"]})]}):h.map(b=>{var f;return r.jsxs("div",{className:`meeting-card ${b.status}`,children:[r.jsxs("div",{className:"mc-top",children:[r.jsxs("div",{className:"mc-title-row",children:[r.jsx("div",{className:"mc-industry",children:b.industry}),r.jsx("div",{className:"mc-title",children:b.title})]}),r.jsxs("div",{className:"mc-top-right",children:[r.jsx("span",{className:`status-pill ${b.status}`,children:b.status==="upcoming"?"Upcoming":"Completed"}),r.jsx("button",{className:"del-btn",title:"Remove meeting",onClick:()=>d(b.id),children:r.jsx(ge,{name:"trash",size:14})})]})]}),r.jsxs("div",{className:"mc-meta",children:[r.jsxs("div",{className:"mc-meta-item",children:[r.jsx(ge,{name:"calendar",size:15})," ",b.date]}),r.jsxs("div",{className:"mc-meta-item",children:[r.jsx(ge,{name:"clock",size:15})," ",b.time," · ",b.duration]}),((f=b.attendees)==null?void 0:f.length)>0&&r.jsxs("div",{className:"mc-meta-item",children:[r.jsx(ge,{name:"users",size:15}),r.jsx("div",{className:"attendee-chips",children:b.attendees.map(u=>r.jsx("span",{className:"attendee-chip",children:u},u))})]})]}),r.jsxs("div",{className:"mc-actions",children:[b.status==="upcoming"&&b.link&&r.jsxs("a",{href:b.link,className:"mc-btn primary",target:"_blank",rel:"noopener noreferrer",children:[r.jsx(ge,{name:"video",size:14})," Join Meeting"]}),r.jsxs("button",{className:"mc-btn",onClick:()=>e("/chat"),children:[r.jsx(ge,{name:"chat",size:14})," Open Chat"]}),b.status==="done"&&r.jsx("button",{className:"mc-btn",children:"View Notes"})]})]},b.id)})})]}),s&&r.jsx("div",{className:"meetings-page",children:r.jsx(Ah,{onSave:j,onClose:()=>o(!1)})}),l&&r.jsx("div",{className:"confirm-overlay",onClick:()=>d(null),children:r.jsxs("div",{className:"confirm-box",onClick:b=>b.stopPropagation(),children:[r.jsx("h3",{children:"Remove meeting?"}),r.jsx("p",{children:"This will permanently delete the meeting from your schedule."}),r.jsxs("div",{className:"confirm-btns",children:[r.jsx("button",{className:"confirm-cancel",onClick:()=>d(null),children:"Cancel"}),r.jsx("button",{className:"confirm-delete",onClick:()=>k(l),children:"Remove"})]})]})})]})}const Fh=[{id:"n1",title:"HyPE Retrieval — Key Takeaways",body:`HyPE (Hypothetical Passage Embeddings) generates hypothetical answer passages for each query before retrieval. This bridges the gap between sparse query embeddings and dense document embeddings, especially for short or ambiguous questions.

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

Conclusion: MiniLM wins on both accuracy and speed for this use case.`,tag:"Research",color:"#eef2ff",border:"#c7d2fe",pinned:!1,updatedAt:"4 days ago"}],Su=["All","Research","Healthcare","Finance","Traffic","Project"],Jl=[{bg:"#eef2ff",border:"#c7d2fe"},{bg:"#f0fdf4",border:"#86efac"},{bg:"#fffbeb",border:"#fcd34d"},{bg:"#fff1f2",border:"#fda4af"},{bg:"#fdf4ff",border:"#e9d5ff"},{bg:"#f0f9ff",border:"#7dd3fc"}];function Be({name:e,size:t=18}){const n={width:t,height:t,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:1.8,strokeLinecap:"round",strokeLinejoin:"round"};switch(e){case"plus":return r.jsx("svg",{...n,children:r.jsx("path",{d:"M12 5v14M5 12h14"})});case"pin":return r.jsxs("svg",{...n,children:[r.jsx("path",{d:"M12 17v5M8 8l2 5h4l2-5"}),r.jsx("path",{d:"M5 8h14M9 8V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v4"})]});case"trash":return r.jsx("svg",{...n,children:r.jsx("path",{d:"M5.5 7h13M9.5 7V5a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v2M7 7l.8 12a1.5 1.5 0 0 0 1.5 1.4h5.4a1.5 1.5 0 0 0 1.5-1.4L17 7"})});case"close":return r.jsx("svg",{...n,children:r.jsx("path",{d:"M6 6l12 12M18 6 6 18"})});case"search":return r.jsxs("svg",{...n,children:[r.jsx("circle",{cx:"11",cy:"11",r:"7"}),r.jsx("path",{d:"M20 20l-4.35-4.35"})]});case"pencil":return r.jsxs("svg",{...n,children:[r.jsx("path",{d:"M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"}),r.jsx("path",{d:"M18.5 2.5a2.12 2.12 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"})]});case"note":return r.jsxs("svg",{...n,children:[r.jsx("path",{d:"M6 3.5h9l3 3V20a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5z"}),r.jsx("path",{d:"M9 10h6M9 13.5h6M9 17h3.5"})]});case"check":return r.jsx("svg",{...n,children:r.jsx("path",{d:"M5 12.5l4.5 4.5L19 7"})});default:return null}}function Oh({note:e,onSave:t,onClose:n}){const[a,i]=g.useState((e==null?void 0:e.title)||""),[s,o]=g.useState((e==null?void 0:e.body)||""),[l,d]=g.useState((e==null?void 0:e.tag)||"Research"),[c,m]=g.useState(e?{bg:e.color,border:e.border}:Jl[0]),h=!(e!=null&&e.id);return r.jsx("div",{className:"modal-overlay",onClick:n,children:r.jsxs("div",{className:"modal-box",onClick:x=>x.stopPropagation(),children:[r.jsxs("div",{className:"modal-header",children:[r.jsx("h2",{children:h?"New Note":"Edit Note"}),r.jsx("button",{className:"modal-close",onClick:n,children:r.jsx(Be,{name:"close",size:17})})]}),r.jsx("input",{className:"modal-title-input",placeholder:"Note title…",value:a,onChange:x=>i(x.target.value),autoFocus:!0}),r.jsx("textarea",{className:"modal-body-input",placeholder:"Write your note here…",value:s,onChange:x=>o(x.target.value),rows:10}),r.jsxs("div",{className:"modal-footer",children:[r.jsxs("div",{className:"modal-footer-left",children:[r.jsx("select",{className:"tag-select",value:l,onChange:x=>d(x.target.value),children:Su.filter(x=>x!=="All").map(x=>r.jsx("option",{value:x,children:x},x))}),r.jsx("div",{className:"color-row",children:Jl.map(x=>r.jsx("button",{type:"button",className:`color-dot${c.bg===x.bg?" active":""}`,style:{background:x.bg,border:`2px solid ${x.border}`},onClick:()=>m(x)},x.bg))})]}),r.jsxs("button",{className:"modal-save-btn",disabled:!a.trim(),onClick:()=>{a.trim()&&(t({id:(e==null?void 0:e.id)||`n${Date.now()}`,title:a.trim(),body:s.trim(),tag:l,color:c.bg,border:c.border,pinned:(e==null?void 0:e.pinned)||!1,updatedAt:"Just now"}),n())},children:[r.jsx(Be,{name:"check",size:15})," Save Note"]})]})]})})}function Bh(){tt();const[e,t]=g.useState(Fh),[n,a]=g.useState("All"),[i,s]=g.useState(""),[o,l]=g.useState(null),[d,c]=g.useState(null),m=e.filter(v=>n==="All"||v.tag===n).filter(v=>!i.trim()||v.title.toLowerCase().includes(i.trim().toLowerCase())||v.body.toLowerCase().includes(i.trim().toLowerCase())).sort((v,b)=>(b.pinned?1:0)-(v.pinned?1:0)),h=v=>{t(b=>b.findIndex(u=>u.id===v.id)>=0?b.map(u=>u.id===v.id?v:u):[v,...b])},x=v=>t(b=>b.map(f=>f.id===v?{...f,pinned:!f.pinned}:f)),j=v=>{t(b=>b.filter(f=>f.id!==v)),c(null)},k=e.filter(v=>v.pinned).length;return r.jsxs("div",{className:"notes-page",children:[r.jsx("style",{children:`
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
`}),r.jsxs("nav",{children:[r.jsxs(R,{to:"/",className:"brand",children:[r.jsx("span",{className:"brand-mark",children:"N"})," NexusRAG"]}),r.jsxs("div",{className:"nav-right",children:[r.jsx(R,{to:"/dashboard",className:"nav-link",children:"← Dashboard"}),r.jsx(R,{to:"/chat",className:"nav-link",children:"Chat"}),r.jsxs("button",{className:"nav-btn",onClick:()=>l("new"),children:[r.jsx(Be,{name:"plus",size:14})," New Note"]})]})]}),r.jsxs("div",{className:"page-wrap",children:[r.jsxs("div",{className:"page-head",children:[r.jsx("h1",{children:"📝 Notes"}),r.jsxs("p",{children:[e.length," notes · ",k," pinned"]})]}),r.jsxs("div",{className:"toolbar",children:[r.jsxs("div",{className:"search-wrap",children:[r.jsx(Be,{name:"search",size:16}),r.jsx("input",{placeholder:"Search notes…",value:i,onChange:v=>s(v.target.value)}),i&&r.jsx("button",{className:"search-clear",onClick:()=>s(""),children:r.jsx(Be,{name:"close",size:14})})]}),r.jsxs("button",{className:"new-note-btn",onClick:()=>l("new"),children:[r.jsx(Be,{name:"plus",size:15})," New Note"]})]}),r.jsx("div",{className:"tag-filter",children:Su.map(v=>r.jsx("button",{className:`tag-btn${n===v?" active":""}`,onClick:()=>a(v),children:v},v))}),r.jsx("div",{className:"notes-grid",children:m.length===0?r.jsxs("div",{className:"empty",children:[r.jsx("div",{className:"empty-icon",children:"🗒️"}),r.jsx("h3",{children:"No notes found"}),r.jsx("p",{children:i?`No notes match "${i}"`:"Start by creating your first note."}),r.jsxs("button",{className:"empty-btn",onClick:()=>l("new"),children:[r.jsx(Be,{name:"plus",size:15})," Create Note"]})]}):m.map(v=>r.jsxs("div",{className:"note-card",style:{background:v.color,borderColor:v.border},children:[r.jsxs("div",{className:"note-card-top",children:[r.jsx("span",{className:"note-tag",children:v.tag}),r.jsxs("div",{className:"note-actions",children:[r.jsx("button",{className:`note-action-btn${v.pinned?" pinned":""}`,title:v.pinned?"Unpin":"Pin",onClick:()=>x(v.id),children:r.jsx(Be,{name:"pin",size:14})}),r.jsx("button",{className:"note-action-btn",title:"Edit",onClick:()=>l(v),children:r.jsx(Be,{name:"pencil",size:14})}),r.jsx("button",{className:"note-action-btn danger",title:"Delete",onClick:()=>c(v.id),children:r.jsx(Be,{name:"trash",size:14})})]})]}),r.jsx("div",{className:"note-title",children:v.title}),v.body&&r.jsx("div",{className:"note-body",children:v.body}),r.jsxs("div",{className:"note-footer",children:[r.jsx("span",{children:v.updatedAt}),v.pinned&&r.jsxs("span",{className:"pin-badge",children:[r.jsx(Be,{name:"pin",size:11})," Pinned"]})]})]},v.id))})]}),o&&r.jsx("div",{className:"notes-page",children:r.jsx(Oh,{note:o==="new"?null:o,onSave:h,onClose:()=>l(null)})}),d&&r.jsx("div",{className:"confirm-overlay",onClick:()=>c(null),children:r.jsxs("div",{className:"confirm-box",onClick:v=>v.stopPropagation(),children:[r.jsx("h3",{children:"Delete note?"}),r.jsx("p",{children:"This action cannot be undone. The note will be permanently removed."}),r.jsxs("div",{className:"confirm-btns",children:[r.jsx("button",{className:"confirm-cancel",onClick:()=>c(null),children:"Cancel"}),r.jsx("button",{className:"confirm-delete",onClick:()=>j(d),children:"Delete"})]})]})})]})}function Si({name:e,size:t=18}){const n={width:t,height:t,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:1.8,strokeLinecap:"round",strokeLinejoin:"round"};switch(e){case"user":return r.jsxs("svg",{...n,children:[r.jsx("circle",{cx:"12",cy:"8",r:"4"}),r.jsx("path",{d:"M4 20c0-4 3.58-7 8-7s8 3 8 7"})]});case"lock":return r.jsxs("svg",{...n,children:[r.jsx("rect",{x:"5",y:"11",width:"14",height:"10",rx:"2"}),r.jsx("path",{d:"M8 11V7a4 4 0 1 1 8 0v4"})]});case"bell":return r.jsxs("svg",{...n,children:[r.jsx("path",{d:"M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"}),r.jsx("path",{d:"M13.73 21a2 2 0 0 1-3.46 0"})]});case"palette":return r.jsxs("svg",{...n,children:[r.jsx("circle",{cx:"12",cy:"12",r:"9"}),r.jsx("circle",{cx:"12",cy:"12",r:"2.5",fill:"currentColor",stroke:"none"}),r.jsx("path",{d:"M12 3v2.5M12 18.5V21M3 12h2.5M18.5 12H21"})]});case"database":return r.jsxs("svg",{...n,children:[r.jsx("ellipse",{cx:"12",cy:"6",rx:"8",ry:"3"}),r.jsx("path",{d:"M4 6v6c0 1.66 3.58 3 8 3s8-1.34 8-3V6"}),r.jsx("path",{d:"M4 12v6c0 1.66 3.58 3 8 3s8-1.34 8-3v-6"})]});case"logout":return r.jsxs("svg",{...n,children:[r.jsx("path",{d:"M9.5 12h11M17 8.5l3.5 3.5-3.5 3.5"}),r.jsx("path",{d:"M14 5H5a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h9"})]});case"check":return r.jsx("svg",{...n,children:r.jsx("path",{d:"M5 12.5l4.5 4.5L19 7"})});case"chevron":return r.jsx("svg",{...n,children:r.jsx("path",{d:"M9 6l6 6-6 6"})});default:return null}}function zi({checked:e,onChange:t}){return r.jsx("button",{type:"button",role:"switch","aria-checked":e,onClick:()=>t(!e),style:{width:44,height:24,borderRadius:100,border:"none",cursor:"pointer",background:e?"#4f46e5":"#d1d5db",position:"relative",transition:"background 0.25s",flexShrink:0},children:r.jsx("span",{style:{position:"absolute",top:3,left:e?23:3,width:18,height:18,borderRadius:"50%",background:"#fff",transition:"left 0.25s",boxShadow:"0 1px 4px rgba(0,0,0,0.2)"}})})}const Uh=[{key:"profile",icon:"user",label:"Profile"},{key:"security",icon:"lock",label:"Security"},{key:"notifs",icon:"bell",label:"Notifications"},{key:"appearance",icon:"palette",label:"Appearance"},{key:"data",icon:"database",label:"Data & Privacy"}];function $h(){const e=tt(),{user:t,logout:n}=_n(),[a,i]=g.useState("profile"),[s,o]=g.useState(!1),l=g.useRef(null),[d,c]=g.useState(()=>localStorage.getItem("nexus-avatar")||null),m=L=>{var P;const E=(P=L.target.files)==null?void 0:P[0];if(!E)return;const y=new FileReader;y.onload=A=>{const $=A.target.result;c($),localStorage.setItem("nexus-avatar",$)},y.readAsDataURL(E)},h=()=>{c(null),localStorage.removeItem("nexus-avatar")},[x,j]=g.useState((t==null?void 0:t.name)||"Matthew Johnson"),[k,v]=g.useState((t==null?void 0:t.email)||"user@example.com"),[b,f]=g.useState("Final year project — Multi-Industry RAG System"),[u,p]=g.useState(""),[w,S]=g.useState(""),[C,N]=g.useState(""),[M,B]=g.useState({uploadDone:!0,queryAlert:!1,weeklyDigest:!0,systemUpdates:!0}),{theme:_,setLight:T,setDark:K}=lh(),[ae,Dt]=g.useState(!1),Qe=()=>{o(!0),setTimeout(()=>o(!1),2500)},pt=()=>{n(),e("/login")};return r.jsxs("div",{className:"settings-page",children:[r.jsx("style",{children:`
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
`}),s&&r.jsxs("div",{className:"toast",children:[r.jsx(Si,{name:"check",size:16})," Changes saved successfully"]}),r.jsxs("nav",{children:[r.jsxs(R,{to:"/",className:"brand",children:[r.jsx("span",{className:"brand-mark",children:"N"})," NexusRAG"]}),r.jsxs("div",{className:"nav-right",children:[r.jsx(R,{to:"/dashboard",className:"nav-link",children:"← Dashboard"}),r.jsx(R,{to:"/chat",className:"nav-link",children:"Chat"})]})]}),r.jsxs("div",{className:"layout",children:[r.jsxs("div",{className:"settings-nav",children:[r.jsx("div",{className:"settings-nav-label",children:"Settings"}),Uh.map(L=>r.jsxs("button",{className:`sn-item${a===L.key?" active":""}`,onClick:()=>i(L.key),children:[r.jsx(Si,{name:L.icon,size:16})," ",L.label]},L.key)),r.jsx("div",{className:"sn-divider"}),r.jsxs("button",{className:"logout-btn",onClick:pt,children:[r.jsx(Si,{name:"logout",size:16})," Sign Out"]})]}),r.jsxs("div",{className:"settings-content",children:[a==="profile"&&r.jsxs(r.Fragment,{children:[r.jsx("h2",{className:"sec-title",children:"Profile"}),r.jsx("p",{className:"sec-desc",children:"Manage your personal information and how others see you."}),r.jsxs("div",{className:"avatar-row",children:[r.jsx("input",{ref:l,type:"file",accept:"image/*",className:"avatar-file-input",onChange:m}),r.jsxs("div",{className:"avatar-wrap",onClick:()=>{var L;return(L=l.current)==null?void 0:L.click()},title:"Click to change photo",children:[r.jsx("div",{className:"avatar-circle",children:d?r.jsx("img",{src:d,alt:"Profile"}):x.charAt(0).toUpperCase()}),r.jsx("div",{className:"avatar-overlay",children:r.jsxs("svg",{width:"22",height:"22",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[r.jsx("path",{d:"M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"}),r.jsx("circle",{cx:"12",cy:"13",r:"4"})]})})]}),r.jsxs("div",{className:"avatar-info",children:[r.jsx("h3",{children:x}),r.jsx("p",{children:k}),r.jsxs("div",{className:"avatar-actions",children:[r.jsx("button",{className:"avatar-btn",onClick:()=>{var L;return(L=l.current)==null?void 0:L.click()},children:"📷 Upload Photo"}),d&&r.jsx("button",{className:"avatar-btn danger",onClick:h,children:"Remove"})]})]})]}),r.jsxs("div",{className:"two-col",children:[r.jsxs("div",{className:"field",children:[r.jsx("label",{children:"Full Name"}),r.jsx("input",{value:x,onChange:L=>j(L.target.value)})]}),r.jsxs("div",{className:"field",children:[r.jsx("label",{children:"Email Address"}),r.jsx("input",{type:"email",value:k,onChange:L=>v(L.target.value)})]})]}),r.jsxs("div",{className:"field",children:[r.jsx("label",{children:"Bio"}),r.jsx("textarea",{value:b,onChange:L=>f(L.target.value),rows:3}),r.jsx("div",{className:"field-hint",children:"Brief description shown on your profile."})]}),r.jsx("button",{className:"save-btn",onClick:Qe,children:"Save Profile"})]}),a==="security"&&r.jsxs(r.Fragment,{children:[r.jsx("h2",{className:"sec-title",children:"Security"}),r.jsx("p",{className:"sec-desc",children:"Update your password to keep your account safe."}),r.jsxs("div",{className:"field",children:[r.jsx("label",{children:"Current Password"}),r.jsx("input",{type:"password",placeholder:"Enter current password",value:u,onChange:L=>p(L.target.value)})]}),r.jsxs("div",{className:"two-col",children:[r.jsxs("div",{className:"field",children:[r.jsx("label",{children:"New Password"}),r.jsx("input",{type:"password",placeholder:"Min 8 characters",value:w,onChange:L=>S(L.target.value)})]}),r.jsxs("div",{className:"field",children:[r.jsx("label",{children:"Confirm Password"}),r.jsx("input",{type:"password",placeholder:"Repeat new password",value:C,onChange:L=>N(L.target.value)})]})]}),r.jsx("button",{className:"save-btn",onClick:Qe,children:"Update Password"})]}),a==="notifs"&&r.jsxs(r.Fragment,{children:[r.jsx("h2",{className:"sec-title",children:"Notifications"}),r.jsx("p",{className:"sec-desc",children:"Choose which events send you alerts."}),[{key:"uploadDone",label:"Upload complete",desc:"When document indexing finishes"},{key:"queryAlert",label:"Query alerts",desc:"Unusual query patterns detected"},{key:"weeklyDigest",label:"Weekly digest",desc:"Summary of usage every Monday"},{key:"systemUpdates",label:"System updates",desc:"Pipeline config or model changes"}].map(L=>r.jsxs("div",{className:"toggle-row",children:[r.jsxs("div",{className:"toggle-meta",children:[r.jsx("div",{className:"tl",children:L.label}),r.jsx("div",{className:"ts",children:L.desc})]}),r.jsx(zi,{checked:M[L.key],onChange:E=>B(y=>({...y,[L.key]:E}))})]},L.key)),r.jsx("button",{className:"save-btn",style:{marginTop:24},onClick:Qe,children:"Save Preferences"})]}),a==="appearance"&&r.jsxs(r.Fragment,{children:[r.jsx("h2",{className:"sec-title",children:"Appearance"}),r.jsx("p",{className:"sec-desc",children:"Customise how NexusRAG looks for you. Changes apply to the whole website instantly."}),r.jsx("div",{style:{marginBottom:16,fontSize:13.5,fontWeight:600},children:"Theme"}),r.jsx("div",{className:"theme-cards",children:["light","dark"].map(L=>r.jsxs("div",{className:`theme-card${_===L?" selected":""}`,onClick:()=>L==="dark"?K():T(),role:"button",tabIndex:0,onKeyDown:E=>E.key==="Enter"&&(L==="dark"?K():T()),children:[r.jsx("div",{className:`theme-preview ${L}`}),r.jsx("div",{className:"theme-label",children:L==="light"?"☀️ Light":"🌙 Dark"}),_===L&&r.jsx("div",{style:{fontSize:11,color:"var(--indigo)",fontWeight:700,marginTop:4},children:"Active"})]},L))}),r.jsxs("div",{className:"toggle-row",children:[r.jsxs("div",{className:"toggle-meta",children:[r.jsx("div",{className:"tl",children:"Compact mode"}),r.jsx("div",{className:"ts",children:"Reduce spacing for denser layout"})]}),r.jsx(zi,{checked:ae,onChange:Dt})]}),r.jsx("button",{className:"save-btn",onClick:Qe,children:"Save Appearance"})]}),a==="data"&&r.jsxs(r.Fragment,{children:[r.jsx("h2",{className:"sec-title",children:"Data & Privacy"}),r.jsx("p",{className:"sec-desc",children:"Manage your chat history and data preferences."}),[{label:"Save chat history",desc:"Retain conversation history across sessions"},{label:"Share analytics",desc:"Help improve NexusRAG with anonymous usage data"}].map(L=>r.jsxs("div",{className:"toggle-row",children:[r.jsxs("div",{className:"toggle-meta",children:[r.jsx("div",{className:"tl",children:L.label}),r.jsx("div",{className:"ts",children:L.desc})]}),r.jsx(zi,{checked:!0,onChange:()=>{}})]},L.label)),r.jsxs("div",{style:{marginTop:28,padding:20,background:"#fef2f2",borderRadius:14,border:"1px solid #fecaca"},children:[r.jsx("div",{style:{fontWeight:700,color:"#dc2626",marginBottom:6,fontSize:14},children:"Danger Zone"}),r.jsx("p",{style:{fontSize:13.5,color:"#7f1d1d",marginBottom:14},children:"Deleting your account is permanent and cannot be undone."}),r.jsx("button",{style:{padding:"9px 18px",borderRadius:100,border:"1.5px solid #fca5a5",background:"transparent",color:"#dc2626",fontWeight:700,fontSize:13},children:"Delete Account"})]})]})]})]})]})}const Hh=[{q:"What industries does NexusRAG support?",a:"NexusRAG currently supports Healthcare (PubMedQA), Banking & Finance (FinQA / TAT-QA), and Traffic & Transport (custom dataset). You can add new industry collections via the admin upload wizard."},{q:"How does the RAG pipeline work?",a:"Your question is first transformed using HyPE (Hypothetical Passage Embeddings) retrieval. Relevant chunks are fetched from the HNSW vector index using cosine similarity, then re-ranked by MiniLM cross-encoder. The top results are passed to the LLM to generate a grounded answer."},{q:"Why do answers show cited sources?",a:"Every answer is grounded in retrieved documents. The citations (title, page reference, relevance %) let you verify the source of each fact — a core requirement for trustworthy RAG systems in high-stakes domains like healthcare and finance."},{q:"How do I upload new documents?",a:"Ask your administrator. Admins log in via /admin-login, then use the Upload page to select an industry, drag-and-drop files, and trigger indexing. Only administrators can modify the knowledge base."},{q:"What file types are supported?",a:"PDF, DOCX, TXT, JSON, and CSV are all supported. Files are semantically chunked before embedding. Maximum file size is 50 MB per file."},{q:"Can I use NexusRAG for my own industry?",a:"Yes. The admin can create a new collection by selecting 'Add New Sector' in the upload wizard and uploading relevant documents. The same HyPE + MiniLM pipeline applies to any domain."}],Vh=[{icon:"🚀",title:"Getting Started",desc:"How to sign up, pick an industry, and ask your first RAG question."},{icon:"💬",title:"Using the Chat Interface",desc:"Industry selector, cited sources, suggestion chips, and chat history."},{icon:"📁",title:"Understanding Collections",desc:"What a collection is, how documents are chunked and indexed."},{icon:"🔍",title:"How Retrieval Works",desc:"HyPE, cosine similarity, HNSW index, BM25 hybrid search explained."},{icon:"⚙️",title:"Admin Guide",desc:"Uploading documents, managing collections, and pipeline settings."},{icon:"🔒",title:"Security & Privacy",desc:"Role separation, admin-only access, and data retention policies."}];function Ci({name:e,size:t=18}){const n={width:t,height:t,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:1.8,strokeLinecap:"round",strokeLinejoin:"round"};switch(e){case"chevron":return r.jsx("svg",{...n,children:r.jsx("path",{d:"M9 6l6 6-6 6"})});case"search":return r.jsxs("svg",{...n,children:[r.jsx("circle",{cx:"11",cy:"11",r:"7"}),r.jsx("path",{d:"M20 20l-4.35-4.35"})]});case"mail":return r.jsxs("svg",{...n,children:[r.jsx("rect",{x:"3",y:"5",width:"18",height:"14",rx:"2"}),r.jsx("path",{d:"M3 7l9 6 9-6"})]});case"chat":return r.jsx("svg",{...n,children:r.jsx("path",{d:"M4 5.5A2.5 2.5 0 0 1 6.5 3h11A2.5 2.5 0 0 1 20 5.5v8A2.5 2.5 0 0 1 17.5 16H10l-4.5 4v-4H6.5A2.5 2.5 0 0 1 4 13.5z"})});case"send":return r.jsxs("svg",{...n,children:[r.jsx("path",{d:"M22 2L11 13"}),r.jsx("path",{d:"M22 2 15 22 11 13 2 9l20-7z"})]});default:return null}}function Wh(){const[e,t]=g.useState(null),[n,a]=g.useState(""),[i,s]=g.useState(""),[o,l]=g.useState(!1),d=c=>{c.preventDefault(),!(!n.trim()||!i.trim())&&(l(!0),a(""),s(""),setTimeout(()=>l(!1),4e3))};return r.jsxs("div",{className:"help-page",children:[r.jsx("style",{children:`
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
`}),r.jsxs("nav",{children:[r.jsxs(R,{to:"/",className:"brand",children:[r.jsx("span",{className:"brand-mark",children:"N"})," NexusRAG"]}),r.jsxs("div",{className:"nav-right",children:[r.jsx(R,{to:"/dashboard",className:"nav-link",children:"← Dashboard"}),r.jsx(R,{to:"/chat",className:"nav-link",children:"Chat"})]})]}),r.jsxs("div",{className:"help-hero",children:[r.jsx("h1",{children:"Help & Support"}),r.jsx("p",{children:"Find answers, guides, and contact us if you need more."}),r.jsxs("div",{className:"hero-search",children:[r.jsx(Ci,{name:"search",size:18}),r.jsx("input",{placeholder:"Search documentation…"})]})]}),r.jsxs("div",{className:"page-wrap",children:[r.jsxs("div",{className:"section-head",children:[r.jsx("h2",{children:"Popular Articles"}),r.jsx("p",{children:"Get up to speed quickly with these guides."})]}),r.jsx("div",{className:"articles-grid",children:Vh.map(c=>r.jsxs("button",{className:"article-card",children:[r.jsx("div",{className:"article-icon",children:c.icon}),r.jsx("div",{className:"article-title",children:c.title}),r.jsx("div",{className:"article-desc",children:c.desc})]},c.title))}),r.jsxs("div",{className:"faq-section",children:[r.jsxs("div",{className:"section-head",children:[r.jsx("h2",{children:"Frequently Asked Questions"}),r.jsx("p",{children:"Common questions about NexusRAG answered."})]}),r.jsx("div",{className:"faq-list",children:Hh.map((c,m)=>r.jsxs("div",{className:`faq-item${e===m?" open":""}`,children:[r.jsxs("button",{className:"faq-q",onClick:()=>t(e===m?null:m),children:[c.q,r.jsx("span",{className:"faq-chev",children:r.jsx(Ci,{name:"chevron",size:18})})]}),e===m&&r.jsx("div",{className:"faq-a",children:c.a})]},m))})]}),r.jsxs("div",{className:"contact-section",children:[r.jsx("h2",{children:"Contact Support"}),r.jsx("p",{children:"Didn't find your answer? Send us a message and we'll get back to you."}),o&&r.jsx("div",{className:"success-msg",children:"✅ Message sent! We'll respond within 24 hours."}),r.jsxs("form",{onSubmit:d,noValidate:!0,children:[r.jsxs("div",{className:"field",children:[r.jsx("label",{children:"Subject"}),r.jsx("input",{placeholder:"e.g. Issue with Healthcare collection",value:n,onChange:c=>a(c.target.value),required:!0})]}),r.jsxs("div",{className:"field",children:[r.jsx("label",{children:"Message"}),r.jsx("textarea",{placeholder:"Describe your issue or question…",rows:4,value:i,onChange:c=>s(c.target.value),required:!0})]}),r.jsxs("button",{type:"submit",className:"send-btn",children:[r.jsx(Ci,{name:"send",size:15})," Send Message"]})]})]})]})]})}const Zl=[{key:"healthcare",emoji:"🏥",label:"Healthcare",docs:1842,chunks:38410,lastUpdated:"2 hours ago",status:"active",color:"#22c55e",bg:"#dcfce7",queries:4820,embeddingModel:"all-MiniLM-L6-v2"},{key:"finance",emoji:"💰",label:"Banking & Finance",docs:973,chunks:21560,lastUpdated:"1 day ago",status:"active",color:"#3b82f6",bg:"#dbeafe",queries:3310,embeddingModel:"all-MiniLM-L6-v2"},{key:"traffic",emoji:"🚦",label:"Traffic & Transport",docs:312,chunks:6890,lastUpdated:"3 days ago",status:"active",color:"#f59e0b",bg:"#fef3c7",queries:1204,embeddingModel:"all-MiniLM-L6-v2"},{key:"legal",emoji:"⚖️",label:"Legal Services",docs:0,chunks:0,lastUpdated:"Never",status:"empty",color:"#8b5cf6",bg:"#ede9fe",queries:0,embeddingModel:"—"}],Gh=[{name:"pubmed_qa_train.json",size:"14.2 MB",industry:"Healthcare",time:"2h ago",status:"done"},{name:"finqa_corpus_v2.pdf",size:"8.7 MB",industry:"Finance",time:"1d ago",status:"done"},{name:"traffic_rules_2024.pdf",size:"3.1 MB",industry:"Traffic",time:"3d ago",status:"done"},{name:"tat_qa_dataset.csv",size:"22.5 MB",industry:"Finance",time:"4d ago",status:"done"}],Qh=[{label:"Retrieval Strategy",value:"HyPE (Hypothetical Passage Embeddings)",accent:"#4f46e5"},{label:"Similarity Metric",value:"Cosine + Inner Product",accent:"#22c55e"},{label:"Reranker",value:"MiniLM (cross-encoder)",accent:"#f59e0b"},{label:"Index Type",value:"HNSW (Hierarchical NSW)",accent:"#3b82f6"},{label:"Chunking",value:"Semantic (topic-based)",accent:"#8b5cf6"},{label:"Hybrid Search",value:"Dense + BM25 keyword",accent:"#ec4899"}];function X({name:e,size:t=18}){const n={width:t,height:t,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:1.8,strokeLinecap:"round",strokeLinejoin:"round"};switch(e){case"upload":return r.jsxs("svg",{...n,children:[r.jsx("path",{d:"M12 15V4M8 8l4-4 4 4"}),r.jsx("path",{d:"M5 14v4.5A1.5 1.5 0 0 0 6.5 20h11a1.5 1.5 0 0 0 1.5-1.5V14"})]});case"file":return r.jsxs("svg",{...n,children:[r.jsx("path",{d:"M7 3.5h7l4 4V20a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5z"}),r.jsx("path",{d:"M14 3.5V8h4.5"})]});case"check":return r.jsx("svg",{...n,children:r.jsx("path",{d:"M5 12.5l4.5 4.5L19 7"})});case"plus":return r.jsx("svg",{...n,children:r.jsx("path",{d:"M12 5v14M5 12h14"})});case"settings":return r.jsxs("svg",{...n,children:[r.jsx("circle",{cx:"12",cy:"12",r:"3.2"}),r.jsx("path",{d:"M12 3v2.2M12 18.8V21M21 12h-2.2M5.2 12H3M18.1 5.9l-1.55 1.55M7.45 16.55 5.9 18.1M18.1 18.1l-1.55-1.55M7.45 7.45 5.9 5.9"})]});case"database":return r.jsxs("svg",{...n,children:[r.jsx("ellipse",{cx:"12",cy:"6",rx:"8",ry:"3"}),r.jsx("path",{d:"M4 6v6c0 1.66 3.58 3 8 3s8-1.34 8-3V6"}),r.jsx("path",{d:"M4 12v6c0 1.66 3.58 3 8 3s8-1.34 8-3v-6"})]});case"chart":return r.jsx("svg",{...n,children:r.jsx("path",{d:"M3 20h18M7 16V10M11 16V4M15 16V8M19 16v-4"})});case"logout":return r.jsxs("svg",{...n,children:[r.jsx("path",{d:"M9.5 12h11M17 8.5l3.5 3.5-3.5 3.5"}),r.jsx("path",{d:"M14 5H5a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h9"})]});case"users":return r.jsxs("svg",{...n,children:[r.jsx("circle",{cx:"9",cy:"8",r:"3.5"}),r.jsx("path",{d:"M3 20c0-3.87 2.69-7 6-7h.5"}),r.jsx("circle",{cx:"16",cy:"10",r:"2.5"}),r.jsx("path",{d:"M12.5 20c0-2.76 1.57-5 3.5-5s3.5 2.24 3.5 5"})]});case"trash":return r.jsx("svg",{...n,children:r.jsx("path",{d:"M5.5 7h13M9.5 7V5a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v2M7 7l.8 12a1.5 1.5 0 0 0 1.5 1.4h5.4a1.5 1.5 0 0 0 1.5-1.4L17 7"})});case"chevron":return r.jsx("svg",{...n,children:r.jsx("path",{d:"M9 6l6 6-6 6"})});default:return null}}function qr({icon:e,label:t,value:n,sub:a,accent:i}){return r.jsxs("div",{className:"stat-card",style:{"--accent":i},children:[r.jsx("div",{className:"stat-icon",children:e}),r.jsx("div",{className:"stat-val",children:n}),r.jsx("div",{className:"stat-label",children:t}),a&&r.jsx("div",{className:"stat-sub",children:a})]})}function Yh(){const[e,t]=g.useState(!1),[n,a]=g.useState("overview");return g.useEffect(()=>{const i=setTimeout(()=>t(!0),60);return()=>clearTimeout(i)},[]),r.jsxs("div",{className:`rag-admin${e?" mounted":""}`,children:[r.jsx("style",{children:`
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
`}),r.jsxs("div",{className:"shell",children:[r.jsxs("aside",{className:"sidebar",children:[r.jsxs("div",{className:"sb-brand",children:[r.jsx("div",{className:"sb-brand-mark",children:"N"}),"NexusRAG"]}),r.jsxs("div",{className:"sb-section",children:[r.jsx("div",{className:"sb-label",children:"Admin"}),r.jsxs("button",{className:`sb-item${n==="overview"?" active":""}`,onClick:()=>a("overview"),children:[r.jsx(X,{name:"chart",size:16})," Overview"]}),r.jsxs("button",{className:`sb-item${n==="collections"?" active":""}`,onClick:()=>a("collections"),children:[r.jsx(X,{name:"database",size:16})," Collections"]}),r.jsxs(R,{to:"/upload",className:"sb-item",children:[r.jsx(X,{name:"upload",size:16})," Upload Docs"]}),r.jsxs("button",{className:`sb-item${n==="pipeline"?" active":""}`,onClick:()=>a("pipeline"),children:[r.jsx(X,{name:"settings",size:16})," Pipeline Config"]}),r.jsxs("button",{className:"sb-item",children:[r.jsx(X,{name:"users",size:16})," Users"]})]}),r.jsx("div",{className:"sb-spacer"}),r.jsxs("div",{className:"sb-section",children:[r.jsxs(R,{to:"/dashboard",className:"sb-item",children:[r.jsx(X,{name:"chevron",size:16})," User View"]}),r.jsxs(R,{to:"/",className:"sb-item",children:[r.jsx(X,{name:"logout",size:16})," Back to Home"]})]}),r.jsxs("div",{className:"sb-user",children:[r.jsx("div",{className:"sb-avatar"}),r.jsxs("div",{children:[r.jsx("div",{className:"sb-name",children:"Admin"}),r.jsx("div",{className:"sb-role",children:"System Administrator"})]})]})]}),r.jsxs("div",{className:"main",children:[r.jsxs("div",{className:"topbar",children:[r.jsxs("h1",{children:[n==="overview"&&"Dashboard Overview",n==="collections"&&"Document Collections",n==="pipeline"&&"Pipeline Configuration"]}),r.jsxs("div",{className:"topbar-right",children:[r.jsx("span",{className:"topbar-badge",children:"● System Active"}),r.jsxs(R,{to:"/upload",className:"topbar-btn",children:[r.jsx(X,{name:"upload",size:14})," Upload Docs"]})]})]}),r.jsx("div",{className:"tabs",children:[{key:"overview",label:"Overview"},{key:"collections",label:"Collections"},{key:"pipeline",label:"Pipeline Config"}].map(i=>r.jsx("button",{className:`tab-btn${n===i.key?" active":""}`,onClick:()=>a(i.key),children:i.label},i.key))}),r.jsxs("div",{className:"content",children:[n==="overview"&&r.jsxs(r.Fragment,{children:[r.jsxs("div",{className:"stats-row",children:[r.jsx(qr,{icon:r.jsx(X,{name:"database",size:20}),label:"Total Documents",value:"3,127",sub:"Across 3 active sectors",accent:"#4f46e5"}),r.jsx(qr,{icon:r.jsx(X,{name:"chart",size:20}),label:"Total Chunks",value:"66,860",sub:"Embedded vectors",accent:"#22c55e"}),r.jsx(qr,{icon:r.jsx(X,{name:"users",size:20}),label:"Total Queries",value:"9,334",sub:"Last 30 days",accent:"#f59e0b"}),r.jsx(qr,{icon:r.jsx(X,{name:"file",size:20}),label:"Collections",value:"4",sub:"3 active · 1 empty",accent:"#3b82f6"})]}),r.jsxs("div",{className:"sec-head",children:[r.jsx("h2",{children:"Knowledge Base Collections"}),r.jsxs(R,{to:"/upload",className:"sec-link",children:["Upload new docs ",r.jsx(X,{name:"chevron",size:14})]})]}),r.jsx("div",{className:"collections-grid",children:Zl.map(i=>r.jsxs("div",{className:"coll-card",children:[r.jsxs("div",{className:"coll-top",children:[r.jsxs("div",{className:"coll-label-row",children:[r.jsx("div",{className:"coll-emoji",children:i.emoji}),r.jsxs("div",{children:[r.jsx("div",{className:"coll-name",children:i.label}),r.jsxs("div",{className:"coll-updated",children:["Updated ",i.lastUpdated]})]})]}),r.jsx("span",{className:`status-pill ${i.status}`,children:i.status})]}),r.jsxs("div",{className:"coll-stats",children:[r.jsxs("div",{children:[r.jsx("div",{className:"cs-val",children:i.docs.toLocaleString()}),r.jsx("div",{className:"cs-label",children:"Documents"})]}),r.jsxs("div",{children:[r.jsx("div",{className:"cs-val",children:i.chunks.toLocaleString()}),r.jsx("div",{className:"cs-label",children:"Chunks"})]}),r.jsxs("div",{children:[r.jsx("div",{className:"cs-val",children:i.queries.toLocaleString()}),r.jsx("div",{className:"cs-label",children:"Queries"})]})]}),r.jsxs("div",{className:"coll-actions",children:[r.jsxs(R,{to:"/upload",className:"coll-btn primary",children:[r.jsx(X,{name:"upload",size:13})," Add Docs"]}),r.jsxs("button",{className:"coll-btn",children:[r.jsx(X,{name:"chart",size:13})," Stats"]}),i.status!=="empty"&&r.jsxs("button",{className:"coll-btn",children:[r.jsx(X,{name:"trash",size:13})," Clear"]})]})]},i.key))}),r.jsxs("div",{className:"sec-head",children:[r.jsx("h2",{children:"Recent Uploads"}),r.jsxs(R,{to:"/upload",className:"sec-link",children:["Upload more ",r.jsx(X,{name:"chevron",size:14})]})]}),r.jsx("div",{className:"table-wrap",children:r.jsxs("table",{children:[r.jsx("thead",{children:r.jsxs("tr",{children:[r.jsx("th",{children:"File"}),r.jsx("th",{children:"Size"}),r.jsx("th",{children:"Industry"}),r.jsx("th",{children:"Uploaded"}),r.jsx("th",{children:"Status"})]})}),r.jsx("tbody",{children:Gh.map((i,s)=>r.jsxs("tr",{children:[r.jsx("td",{children:r.jsxs("div",{className:"td-file",children:[r.jsx("div",{className:"td-icon",children:r.jsx(X,{name:"file",size:16})}),i.name]})}),r.jsx("td",{children:i.size}),r.jsx("td",{children:i.industry}),r.jsx("td",{children:i.time}),r.jsx("td",{children:r.jsxs("span",{className:"td-badge",children:[r.jsx(X,{name:"check",size:11})," ",i.status]})})]},s))})]})})]}),n==="collections"&&r.jsxs(r.Fragment,{children:[r.jsxs("div",{className:"sec-head",children:[r.jsx("h2",{children:"All Collections"}),r.jsxs(R,{to:"/upload",className:"topbar-btn",style:{display:"inline-flex",alignItems:"center",gap:7,padding:"9px 18px",borderRadius:100,background:"var(--ink)",color:"#fff",border:"none",fontSize:13.5,fontWeight:600},children:[r.jsx(X,{name:"plus",size:14})," New Collection"]})]}),r.jsx("div",{className:"collections-grid",children:Zl.map(i=>r.jsxs("div",{className:"coll-card",children:[r.jsxs("div",{className:"coll-top",children:[r.jsxs("div",{className:"coll-label-row",children:[r.jsx("div",{className:"coll-emoji",children:i.emoji}),r.jsxs("div",{children:[r.jsx("div",{className:"coll-name",children:i.label}),r.jsxs("div",{className:"coll-updated",children:["Model: ",i.embeddingModel]})]})]}),r.jsx("span",{className:`status-pill ${i.status}`,children:i.status})]}),r.jsxs("div",{className:"coll-stats",children:[r.jsxs("div",{children:[r.jsx("div",{className:"cs-val",children:i.docs.toLocaleString()}),r.jsx("div",{className:"cs-label",children:"Documents"})]}),r.jsxs("div",{children:[r.jsx("div",{className:"cs-val",children:i.chunks.toLocaleString()}),r.jsx("div",{className:"cs-label",children:"Chunks"})]}),r.jsxs("div",{children:[r.jsx("div",{className:"cs-val",children:i.queries.toLocaleString()}),r.jsx("div",{className:"cs-label",children:"Queries"})]})]}),r.jsxs("div",{className:"coll-actions",children:[r.jsxs(R,{to:"/upload",className:"coll-btn primary",children:[r.jsx(X,{name:"upload",size:13})," Add Docs"]}),r.jsxs(R,{to:"/dashboard",className:"coll-btn",children:[r.jsx(X,{name:"chart",size:13})," Query"]})]})]},i.key))})]}),n==="pipeline"&&r.jsxs(r.Fragment,{children:[r.jsxs("div",{className:"sec-head",children:[r.jsx("h2",{children:"Active Pipeline Configuration"}),r.jsx("span",{style:{fontSize:13,color:"var(--slate)",fontFamily:'"IBM Plex Mono", monospace'},children:"Based on Elkiran & Rasheed, IEEE Access 2026"})]}),r.jsx("div",{className:"pipeline-grid",children:Qh.map(i=>r.jsxs("div",{className:"config-card",children:[r.jsx("div",{className:"config-label",children:i.label}),r.jsxs("div",{className:"config-val",children:[r.jsx("span",{className:"config-dot",style:{background:i.accent}}),i.value]})]},i.label))}),r.jsxs("div",{style:{background:"#fff",border:"1px solid var(--line)",borderRadius:18,padding:28,marginBottom:28},children:[r.jsx("h3",{style:{marginBottom:16,fontSize:16},children:"Why these settings?"}),r.jsxs("p",{style:{fontSize:14.5,color:"var(--slate)",lineHeight:1.7,margin:0},children:["The base paper (Elkiran & Rasheed, IEEE Access 2026) found that ",r.jsx("strong",{children:"retrieval strategy"})," and",r.jsx("strong",{children:" similarity metric"})," matter most — statistically significant with large effect sizes (η² ≈ 0.31). HyPE retrieval and cosine/inner-product similarity clearly outperformed alternatives. MiniLM reranking was added as a second-stage refinement. Our project extends this with ",r.jsx("strong",{children:"hybrid search"})," (dense + BM25), ",r.jsx("strong",{children:"semantic chunking"}),", and ",r.jsx("strong",{children:"multi-industry generalisation"})," — directly addressing the paper's stated limitations."]})]})]})]})]})]})]})}const Mi=[{key:"healthcare",emoji:"🏥",label:"Healthcare",desc:"PubMedQA, clinical notes, diagnostics"},{key:"finance",emoji:"💰",label:"Banking & Finance",desc:"FinQA, TAT-QA, market analysis"},{key:"traffic",emoji:"🚦",label:"Traffic & Transport",desc:"Driving rules, government docs, route data"},{key:"legal",emoji:"⚖️",label:"Legal Services",desc:"Contracts, regulations, case law"},{key:"retail",emoji:"🛒",label:"Retail & E-commerce",desc:"Product docs, inventory, customer support"},{key:"energy",emoji:"⚡",label:"Energy & Utilities",desc:"Grid management, renewable energy docs"},{key:"education",emoji:"🎓",label:"Education",desc:"Curriculum, student records, research papers"},{key:"insurance",emoji:"🛡️",label:"Insurance",desc:"Policies, claims, risk assessment documents"},{key:"custom",emoji:"➕",label:"Add New Sector",desc:"Onboard a completely new industry"}];function qe({name:e,size:t=18}){const n={width:t,height:t,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:1.8,strokeLinecap:"round",strokeLinejoin:"round"};switch(e){case"upload":return r.jsxs("svg",{...n,children:[r.jsx("path",{d:"M12 15V4M8 8l4-4 4 4"}),r.jsx("path",{d:"M5 14v4.5A1.5 1.5 0 0 0 6.5 20h11a1.5 1.5 0 0 0 1.5-1.5V14"})]});case"file":return r.jsxs("svg",{...n,children:[r.jsx("path",{d:"M7 3.5h7l4 4V20a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5z"}),r.jsx("path",{d:"M14 3.5V8h4.5"})]});case"close":return r.jsx("svg",{...n,children:r.jsx("path",{d:"M6 6l12 12M18 6 6 18"})});case"check":return r.jsx("svg",{...n,children:r.jsx("path",{d:"M5 12.5l4.5 4.5L19 7"})});case"folder":return r.jsx("svg",{...n,children:r.jsx("path",{d:"M3.5 7.5A2 2 0 0 1 5.5 5.5h3.6l1.4 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5.5a2 2 0 0 1-2-2z"})});case"chevron":return r.jsx("svg",{...n,children:r.jsx("path",{d:"M9 6l6 6-6 6"})});case"warning":return r.jsxs("svg",{...n,children:[r.jsx("path",{d:"M10.3 3.5 2 19h20L13.7 3.5a2 2 0 0 0-3.4 0z"}),r.jsx("path",{d:"M12 10v4M12 17h.01"})]});default:return null}}function qh(e){return e<1024?`${e} B`:e<1024*1024?`${Math.round(e/1024)} KB`:`${(e/(1024*1024)).toFixed(1)} MB`}function Kh(){var B,_;const[e,t]=g.useState(!1),[n,a]=g.useState(null),[i,s]=g.useState(""),[o,l]=g.useState([]),[d,c]=g.useState(!1),[m,h]=g.useState(1),[x,j]=g.useState(!1),[k,v]=g.useState(!1),[b,f]=g.useState(0),u=g.useRef(null);tt(),g.useEffect(()=>{const T=setTimeout(()=>t(!0),50);return()=>clearTimeout(T)},[]);const p=T=>{T.preventDefault(),c(!1);const K=Array.from(T.dataTransfer.files);w(K)},w=T=>{l(K=>[...K,...T.map(ae=>({id:`${ae.name}-${ae.size}-${Date.now()}-${Math.random()}`,file:ae,status:"pending"}))])},S=T=>l(K=>K.filter(ae=>ae.id!==T)),C=T=>{a(T),T!=="custom"&&h(2)},N=()=>{if(o.length===0)return;h(3),j(!0);let T=0;const K=setInterval(()=>{T+=Math.random()*12+3,T>=100&&(T=100,clearInterval(K),j(!1),v(!0)),f(Math.min(T,100))},180)},M=n==="custom"?i||"Custom Sector":((B=Mi.find(T=>T.key===n))==null?void 0:B.label)||"";return r.jsxs("div",{className:`rag-upload${e?" mounted":""}`,children:[r.jsx("style",{children:`
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
`}),r.jsxs("nav",{children:[r.jsxs(R,{to:"/",className:"brand",children:[r.jsx("span",{className:"brand-mark",children:"N"}),"NexusRAG"]}),r.jsxs("div",{className:"nav-right",children:[r.jsx(R,{to:"/admin",className:"nav-link",children:"Dashboard"}),r.jsx(R,{to:"/dashboard",className:"nav-link",children:"User View"}),r.jsx(R,{to:"/",className:"nav-btn",children:"← Home"})]})]}),r.jsxs("div",{className:"page-wrap",children:[r.jsxs("div",{className:"page-head",children:[r.jsx("span",{className:"eyebrow",children:"Admin · Document Management"}),r.jsx("h1",{children:"Bulk Document Upload"}),r.jsx("p",{children:"Tag an entire folder with one industry label. The pipeline handles chunking, embedding, and storage automatically — no code changes needed to add a new sector."})]}),r.jsxs("div",{className:"steps",children:[r.jsxs("div",{className:`step-item ${m>=1?m>1?"done":"active":""}`,children:[r.jsx("div",{className:"step-dot",children:m>1?r.jsx(qe,{name:"check",size:16}):"01"}),r.jsxs("div",{className:"step-meta",children:[r.jsx("div",{className:"step-label",children:"Select Industry"}),r.jsx("div",{className:"step-desc",children:"Tag this batch"})]})]}),r.jsx("div",{className:`step-connector ${m>1?"done":""}`}),r.jsxs("div",{className:`step-item ${m>=2?m>2?"done":"active":""}`,children:[r.jsx("div",{className:"step-dot",children:m>2?r.jsx(qe,{name:"check",size:16}):"02"}),r.jsxs("div",{className:"step-meta",children:[r.jsx("div",{className:"step-label",children:"Upload Files"}),r.jsx("div",{className:"step-desc",children:"Drag or browse"})]})]}),r.jsx("div",{className:`step-connector ${m>2?"done":""}`}),r.jsxs("div",{className:`step-item ${m>=3?"active":""}`,children:[r.jsx("div",{className:"step-dot",children:k?r.jsx(qe,{name:"check",size:16}):"03"}),r.jsxs("div",{className:"step-meta",children:[r.jsx("div",{className:"step-label",children:"Confirm & Index"}),r.jsx("div",{className:"step-desc",children:"Embed & store"})]})]})]}),m===1&&r.jsxs(r.Fragment,{children:[r.jsx("div",{className:"industry-grid",children:Mi.map(T=>r.jsxs("button",{className:`ind-card${T.key==="custom"?" custom-card":""}${n===T.key?" selected":""}`,onClick:()=>C(T.key),children:[r.jsx("span",{className:"ind-emoji",children:T.emoji}),r.jsx("div",{className:"ind-label",children:T.label}),r.jsx("div",{className:"ind-desc",children:T.desc})]},T.key))}),n==="custom"&&r.jsxs(r.Fragment,{children:[r.jsx("div",{className:"custom-field",children:r.jsx("input",{type:"text",placeholder:"Enter sector name (e.g. Mining, Aquaculture…)",value:i,onChange:T=>s(T.target.value),autoFocus:!0})}),r.jsx("div",{className:"action-bar",style:{marginTop:"16px"},children:r.jsx("button",{className:"btn-primary",disabled:!i.trim(),onClick:()=>h(2),children:"Continue →"})})]})]}),m===2&&r.jsxs(r.Fragment,{children:[r.jsxs("div",{className:"industry-chip",children:[r.jsx("span",{children:((_=Mi.find(T=>T.key===n))==null?void 0:_.emoji)||"📁"}),r.jsx("span",{children:M}),r.jsx("button",{className:"chip-change",onClick:()=>{h(1),l([])},children:"Change ✕"})]}),r.jsxs("div",{className:`upload-zone${d?" drag-over":""}`,onDragOver:T=>{T.preventDefault(),c(!0)},onDragLeave:()=>c(!1),onDrop:p,onClick:()=>{var T;return(T=u.current)==null?void 0:T.click()},children:[r.jsx("div",{className:"zone-icon",children:r.jsx(qe,{name:"folder",size:30})}),r.jsx("h3",{children:"Drop your folder here"}),r.jsxs("p",{children:["Drag an entire folder — or click to browse individual files.",r.jsx("br",{}),"Supported: PDF, DOCX, TXT, MD, CSV, JSON"]}),r.jsxs("button",{className:"zone-btn",onClick:T=>{var K;T.stopPropagation(),(K=u.current)==null||K.click()},children:[r.jsx(qe,{name:"upload",size:16}),"Browse Files"]}),r.jsx("div",{className:"zone-hint",children:"PDF · DOCX · TXT · MD · CSV · JSON supported"}),r.jsx("input",{ref:u,type:"file",multiple:!0,accept:".pdf,.docx,.txt,.md,.csv,.json",style:{display:"none"},onChange:T=>{w(Array.from(T.target.files)),T.target.value=""}})]}),o.length>0&&r.jsxs(r.Fragment,{children:[r.jsxs("div",{className:"file-list-head",children:[r.jsxs("h3",{children:[o.length," file",o.length!==1?"s":""," selected"]}),r.jsx("button",{className:"clear-btn",onClick:()=>l([]),children:"Clear all"})]}),r.jsx("div",{className:"file-list",children:o.map(T=>r.jsxs("div",{className:"file-row",children:[r.jsx("div",{className:"file-icon",children:r.jsx(qe,{name:"file",size:18})}),r.jsxs("div",{className:"file-meta",children:[r.jsx("div",{className:"file-name",children:T.file.name}),r.jsx("div",{className:"file-size",children:qh(T.file.size)})]}),r.jsx("button",{className:"file-remove",onClick:()=>S(T.id),children:r.jsx(qe,{name:"close",size:14})})]},T.id))}),r.jsxs("div",{className:"info-banner",children:[r.jsx(qe,{name:"warning",size:18}),r.jsxs("div",{children:["Every file in this batch will be tagged as ",r.jsx("strong",{children:M}),". If any file belongs to a different industry, remove it before confirming."]})]})]}),r.jsxs("div",{className:"action-bar",children:[r.jsxs("button",{className:"btn-primary",disabled:o.length===0,onClick:N,children:["Confirm & Index ",o.length>0?`(${o.length} files)`:"","  →"]}),r.jsx("button",{className:"btn-secondary",onClick:()=>h(1),children:"← Back"})]})]}),m===3&&r.jsx("div",{className:"upload-progress",children:k?r.jsxs(r.Fragment,{children:[r.jsx("div",{className:"success-icon",children:r.jsx(qe,{name:"check",size:40})}),r.jsx("h2",{children:"Upload Complete!"}),r.jsxs("p",{children:[o.length," document",o.length!==1?"s":""," have been chunked, embedded, and indexed into the ",r.jsx("strong",{children:M})," knowledge base.",r.jsx("br",{}),"Users can now query this sector immediately."]}),r.jsxs("div",{className:"action-bar",style:{justifyContent:"center"},children:[r.jsx("button",{className:"btn-primary",onClick:()=>{h(1),l([]),a(null),f(0),v(!1)},children:"Upload More Files"}),r.jsx(R,{to:"/admin",className:"btn-secondary",children:"View Collections →"})]})]}):r.jsxs(r.Fragment,{children:[r.jsxs("div",{className:"progress-ring",children:[r.jsxs("svg",{width:"100",height:"100",viewBox:"0 0 100 100",children:[r.jsx("circle",{className:"track",cx:"50",cy:"50",r:"40"}),r.jsx("circle",{className:"fill",cx:"50",cy:"50",r:"40",style:{strokeDashoffset:251.3*(1-b/100)}})]}),r.jsxs("div",{className:"ring-text",children:[Math.round(b),"%"]})]}),r.jsx("h2",{children:"Indexing documents…"}),r.jsxs("p",{children:["Chunking, embedding, and storing your ",o.length," files into the"," ",r.jsx("strong",{children:M})," knowledge base.",r.jsx("br",{}),"This may take a few moments."]}),r.jsxs("div",{className:"file-summary",children:[r.jsx(qe,{name:"file",size:14}),o.length," files · ",M]})]})})]})]})}const Xh=[{key:"healthcare",emoji:"🏥",label:"Healthcare",desc:"PubMedQA, clinical notes, medical research papers",docs:1842,chunks:38410,queries:4820,size:"2.4 GB",lastUpdated:"2 hours ago",status:"active",embeddingModel:"all-MiniLM-L6-v2",retriever:"HyPE",similarity:"Cosine",reranker:"MiniLM",color:"#22c55e",bg:"#dcfce7"},{key:"finance",emoji:"💰",label:"Banking & Finance",desc:"FinQA, TAT-QA, market analysis, risk and regulatory documents",docs:973,chunks:21560,queries:3310,size:"1.1 GB",lastUpdated:"1 day ago",status:"active",embeddingModel:"all-MiniLM-L6-v2",retriever:"HyPE",similarity:"Inner Product",reranker:"MiniLM",color:"#3b82f6",bg:"#dbeafe"},{key:"traffic",emoji:"🚦",label:"Traffic & Transport",desc:"Driving rules, government road safety docs, traffic law, exam question banks",docs:312,chunks:6890,queries:1204,size:"380 MB",lastUpdated:"3 days ago",status:"active",embeddingModel:"all-MiniLM-L6-v2",retriever:"HyPE",similarity:"Cosine",reranker:"MiniLM",color:"#f59e0b",bg:"#fef3c7"},{key:"legal",emoji:"⚖️",label:"Legal Services",desc:"Contracts, regulations, case law, compliance documents",docs:0,chunks:0,queries:0,size:"—",lastUpdated:"Never",status:"empty",embeddingModel:"—",retriever:"—",similarity:"—",reranker:"—",color:"#8b5cf6",bg:"#ede9fe"}];function Wn({name:e,size:t=18}){const n={width:t,height:t,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:1.8,strokeLinecap:"round",strokeLinejoin:"round"};switch(e){case"upload":return r.jsxs("svg",{...n,children:[r.jsx("path",{d:"M12 15V4M8 8l4-4 4 4"}),r.jsx("path",{d:"M5 14v4.5A1.5 1.5 0 0 0 6.5 20h11a1.5 1.5 0 0 0 1.5-1.5V14"})]});case"database":return r.jsxs("svg",{...n,children:[r.jsx("ellipse",{cx:"12",cy:"6",rx:"8",ry:"3"}),r.jsx("path",{d:"M4 6v6c0 1.66 3.58 3 8 3s8-1.34 8-3V6"}),r.jsx("path",{d:"M4 12v6c0 1.66 3.58 3 8 3s8-1.34 8-3v-6"})]});case"chart":return r.jsx("svg",{...n,children:r.jsx("path",{d:"M3 20h18M7 16V10M11 16V4M15 16V8M19 16v-4"})});case"chat":return r.jsx("svg",{...n,children:r.jsx("path",{d:"M4 5.5A2.5 2.5 0 0 1 6.5 3h11A2.5 2.5 0 0 1 20 5.5v8A2.5 2.5 0 0 1 17.5 16H10l-4.5 4v-4H6.5A2.5 2.5 0 0 1 4 13.5z"})});case"trash":return r.jsx("svg",{...n,children:r.jsx("path",{d:"M5.5 7h13M9.5 7V5a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v2M7 7l.8 12a1.5 1.5 0 0 0 1.5 1.4h5.4a1.5 1.5 0 0 0 1.5-1.4L17 7"})});case"search":return r.jsxs("svg",{...n,children:[r.jsx("circle",{cx:"11",cy:"11",r:"7"}),r.jsx("path",{d:"M20 20l-4.35-4.35"})]});case"plus":return r.jsx("svg",{...n,children:r.jsx("path",{d:"M12 5v14M5 12h14"})});case"check":return r.jsx("svg",{...n,children:r.jsx("path",{d:"M5 12.5l4.5 4.5L19 7"})});case"arrow":return r.jsx("svg",{...n,children:r.jsx("path",{d:"M5 12h14M13 6l6 6-6 6"})});default:return null}}function Jh(){const[e,t]=g.useState(""),[n,a]=g.useState("all"),[i,s]=g.useState(null),o=Xh.filter(l=>{const d=l.label.toLowerCase().includes(e.toLowerCase())||l.desc.toLowerCase().includes(e.toLowerCase()),c=n==="all"||l.status===n;return d&&c});return r.jsxs("div",{className:"rag-collections",children:[r.jsx("style",{children:`
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
`}),r.jsxs("nav",{children:[r.jsxs(R,{to:"/",className:"brand",children:[r.jsx("span",{className:"brand-mark",children:"N"}),"NexusRAG"]}),r.jsxs("div",{className:"nav-right",children:[r.jsx(R,{to:"/chat",className:"nav-link",children:"Query"}),r.jsx(R,{to:"/admin",className:"nav-link",children:"Admin"}),r.jsxs(R,{to:"/upload",className:"nav-btn",children:[r.jsx(Wn,{name:"plus",size:14})," Add Documents"]})]})]}),r.jsxs("div",{className:"page-wrap",children:[r.jsxs("div",{className:"page-head",children:[r.jsx("span",{className:"eyebrow",children:"Knowledge Base"}),r.jsx("h1",{children:"Document Collections"}),r.jsx("p",{children:"Each collection is a separate vector store for one industry. All share the same retrieval pipeline — only the document set being searched changes."})]}),r.jsxs("div",{className:"summary-row",children:[r.jsxs("div",{className:"sum-card",children:[r.jsx("div",{className:"sum-val",children:"3,127"}),r.jsx("div",{className:"sum-label",children:"Total Documents"})]}),r.jsxs("div",{className:"sum-card",children:[r.jsx("div",{className:"sum-val",children:"66,860"}),r.jsx("div",{className:"sum-label",children:"Embedded Chunks"})]}),r.jsxs("div",{className:"sum-card",children:[r.jsx("div",{className:"sum-val",children:"9,334"}),r.jsx("div",{className:"sum-label",children:"Total Queries"})]}),r.jsxs("div",{className:"sum-card",children:[r.jsx("div",{className:"sum-val",children:"3 / 4"}),r.jsx("div",{className:"sum-label",children:"Active Collections"})]})]}),r.jsxs("div",{className:"toolbar",children:[r.jsxs("div",{className:"search-wrap",children:[r.jsx(Wn,{name:"search",size:16}),r.jsx("input",{type:"text",placeholder:"Search collections…",value:e,onChange:l=>t(l.target.value)})]}),r.jsx("div",{className:"filter-btns",children:["all","active","empty"].map(l=>r.jsx("button",{className:`filter-btn${n===l?" active":""}`,onClick:()=>a(l),children:l==="all"?"All":l.charAt(0).toUpperCase()+l.slice(1)},l))})]}),r.jsx("div",{className:"coll-list",children:o.length===0?r.jsxs("div",{className:"empty-state",children:[r.jsx("div",{className:"empty-icon",children:"🔍"}),r.jsx("h3",{children:"No collections match"}),r.jsx("p",{children:"Try a different search or filter."})]}):o.map(l=>r.jsxs("div",{className:"coll-card",children:[r.jsxs("div",{className:"coll-main",children:[r.jsx("div",{className:"coll-emoji-wrap",style:{background:l.bg},children:l.emoji}),r.jsxs("div",{className:"coll-info",children:[r.jsxs("div",{className:"coll-name-row",children:[r.jsx("span",{className:"coll-name",children:l.label}),r.jsx("span",{className:`status-pill ${l.status}`,children:l.status})]}),r.jsx("div",{className:"coll-desc",children:l.desc}),r.jsx("div",{style:{marginTop:8,display:"flex",gap:8},children:r.jsx("button",{className:"expand-btn",onClick:()=>s(i===l.key?null:l.key),children:i===l.key?"▲ Hide details":"▼ Show details"})})]}),l.status==="active"&&r.jsxs("div",{className:"coll-metrics",children:[r.jsxs("div",{className:"metric",children:[r.jsx("div",{className:"metric-val",children:l.docs.toLocaleString()}),r.jsx("div",{className:"metric-label",children:"Docs"})]}),r.jsxs("div",{className:"metric",children:[r.jsxs("div",{className:"metric-val",children:[(l.chunks/1e3).toFixed(1),"k"]}),r.jsx("div",{className:"metric-label",children:"Chunks"})]}),r.jsxs("div",{className:"metric",children:[r.jsx("div",{className:"metric-val",children:l.queries.toLocaleString()}),r.jsx("div",{className:"metric-label",children:"Queries"})]})]}),r.jsxs("div",{className:"coll-actions-row",children:[l.status==="active"&&r.jsxs(R,{to:"/chat",className:"ca-btn primary",children:[r.jsx(Wn,{name:"chat",size:13})," Query"]}),r.jsxs(R,{to:"/upload",className:"ca-btn",children:[r.jsx(Wn,{name:"upload",size:13})," Add Docs"]}),l.status==="active"&&r.jsx("button",{className:"ca-btn danger",children:r.jsx(Wn,{name:"trash",size:13})})]})]}),i===l.key&&r.jsxs("div",{className:"coll-details",children:[r.jsxs("div",{className:"detail-item",children:[r.jsx("div",{className:"d-label",children:"Embedding Model"}),r.jsx("div",{className:"d-val",children:l.embeddingModel})]}),r.jsxs("div",{className:"detail-item",children:[r.jsx("div",{className:"d-label",children:"Retriever"}),r.jsx("div",{className:"d-val",children:l.retriever})]}),r.jsxs("div",{className:"detail-item",children:[r.jsx("div",{className:"d-label",children:"Similarity"}),r.jsx("div",{className:"d-val",children:l.similarity})]}),r.jsxs("div",{className:"detail-item",children:[r.jsx("div",{className:"d-label",children:"Reranker"}),r.jsx("div",{className:"d-val",children:l.reranker})]}),r.jsxs("div",{className:"detail-item",children:[r.jsx("div",{className:"d-label",children:"Storage Size"}),r.jsx("div",{className:"d-val",children:l.size})]}),r.jsxs("div",{className:"detail-item",children:[r.jsx("div",{className:"d-label",children:"Last Updated"}),r.jsx("div",{className:"d-val",children:l.lastUpdated})]}),r.jsxs("div",{className:"detail-item",children:[r.jsx("div",{className:"d-label",children:"Chunking"}),r.jsx("div",{className:"d-val",children:"Semantic (topic-based)"})]}),r.jsxs("div",{className:"detail-item",children:[r.jsx("div",{className:"d-label",children:"Hybrid Search"}),r.jsx("div",{className:"d-val",children:"Dense + BM25"})]})]})]},l.key))})]})]})}function Ke({children:e,adminOnly:t=!1}){const{isLoggedIn:n,isAdmin:a}=_n(),i=en();if(t){if(!n||!a)return r.jsx(ks,{to:"/admin-login",state:{from:i},replace:!0})}else if(!n)return r.jsx(ks,{to:"/login",state:{from:i},replace:!0});return e}function Zh(){return r.jsx(oh,{children:r.jsx(sh,{children:r.jsx(eh,{children:r.jsxs(Qm,{children:[r.jsx(pe,{path:"/",element:r.jsx(hh,{})}),r.jsx(pe,{path:"/login",element:r.jsx(xh,{})}),r.jsx(pe,{path:"/signup",element:r.jsx(yh,{})}),r.jsx(pe,{path:"/admin-login",element:r.jsx(bh,{})}),r.jsx(pe,{path:"/dashboard",element:r.jsx(Ke,{children:r.jsx(zh,{})})}),r.jsx(pe,{path:"/chat",element:r.jsx(Ke,{children:r.jsx(Eh,{})})}),r.jsx(pe,{path:"/notifications",element:r.jsx(Ke,{children:r.jsx(Ih,{})})}),r.jsx(pe,{path:"/meetings",element:r.jsx(Ke,{children:r.jsx(Dh,{})})}),r.jsx(pe,{path:"/notes",element:r.jsx(Ke,{children:r.jsx(Bh,{})})}),r.jsx(pe,{path:"/settings",element:r.jsx(Ke,{children:r.jsx($h,{})})}),r.jsx(pe,{path:"/help",element:r.jsx(Ke,{children:r.jsx(Wh,{})})}),r.jsx(pe,{path:"/admin",element:r.jsx(Ke,{adminOnly:!0,children:r.jsx(Yh,{})})}),r.jsx(pe,{path:"/upload",element:r.jsx(Ke,{adminOnly:!0,children:r.jsx(Kh,{})})}),r.jsx(pe,{path:"/collections",element:r.jsx(Ke,{adminOnly:!0,children:r.jsx(Jh,{})})}),r.jsx(pe,{path:"*",element:r.jsx(ks,{to:"/",replace:!0})})]})})})})}Ei.createRoot(document.getElementById("root")).render(r.jsx(cd.StrictMode,{children:r.jsx(Zh,{})}));
