(()=>{function B(e,t){return function(){return e.apply(t,arguments)}}var{toString:wt}=Object.prototype,{getPrototypeOf:ce}=Object,W=(e=>t=>{let r=wt.call(t);return e[r]||(e[r]=r.slice(8,-1).toLowerCase())})(Object.create(null)),R=e=>(e=e.toLowerCase(),t=>W(t)===e),X=e=>t=>typeof t===e,{isArray:L}=Array,_=X("undefined");function bt(e){return e!==null&&!_(e)&&e.constructor!==null&&!_(e.constructor)&&S(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}var Pe=R("ArrayBuffer");function xt(e){let t;return typeof ArrayBuffer!="undefined"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&Pe(e.buffer),t}var St=X("string"),S=X("function"),Le=X("number"),K=e=>e!==null&&typeof e=="object",At=e=>e===!0||e===!1,v=e=>{if(W(e)!=="object")return!1;let t=ce(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},Rt=R("Date"),Ot=R("File"),gt=R("Blob"),Ct=R("FileList"),Tt=e=>K(e)&&S(e.pipe),Nt=e=>{let t;return e&&(typeof FormData=="function"&&e instanceof FormData||S(e.append)&&((t=W(e))==="formdata"||t==="object"&&S(e.toString)&&e.toString()==="[object FormData]"))},Pt=R("URLSearchParams"),Lt=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function U(e,t,{allOwnKeys:r=!1}={}){if(e===null||typeof e=="undefined")return;let n,o;if(typeof e!="object"&&(e=[e]),L(e))for(n=0,o=e.length;n<o;n++)t.call(null,e[n],n,e);else{let s=r?Object.getOwnPropertyNames(e):Object.keys(e),i=s.length,u;for(n=0;n<i;n++)u=s[n],t.call(null,e[u],u,e)}}function Fe(e,t){t=t.toLowerCase();let r=Object.keys(e),n=r.length,o;for(;n-- >0;)if(o=r[n],t===o.toLowerCase())return o;return null}var Ie=(()=>typeof globalThis!="undefined"?globalThis:typeof self!="undefined"?self:typeof window!="undefined"?window:global)(),ke=e=>!_(e)&&e!==Ie;function ae(){let{caseless:e}=ke(this)&&this||{},t={},r=(n,o)=>{let s=e&&Fe(t,o)||o;v(t[s])&&v(n)?t[s]=ae(t[s],n):v(n)?t[s]=ae({},n):L(n)?t[s]=n.slice():t[s]=n};for(let n=0,o=arguments.length;n<o;n++)arguments[n]&&U(arguments[n],r);return t}var Ft=(e,t,r,{allOwnKeys:n}={})=>(U(t,(o,s)=>{r&&S(o)?e[s]=B(o,r):e[s]=o},{allOwnKeys:n}),e),It=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),kt=(e,t,r,n)=>{e.prototype=Object.create(t.prototype,n),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),r&&Object.assign(e.prototype,r)},Dt=(e,t,r,n)=>{let o,s,i,u={};if(t=t||{},e==null)return t;do{for(o=Object.getOwnPropertyNames(e),s=o.length;s-- >0;)i=o[s],(!n||n(i,e,t))&&!u[i]&&(t[i]=e[i],u[i]=!0);e=r!==!1&&ce(e)}while(e&&(!r||r(e,t))&&e!==Object.prototype);return t},Bt=(e,t,r)=>{e=String(e),(r===void 0||r>e.length)&&(r=e.length),r-=t.length;let n=e.indexOf(t,r);return n!==-1&&n===r},_t=e=>{if(!e)return null;if(L(e))return e;let t=e.length;if(!Le(t))return null;let r=new Array(t);for(;t-- >0;)r[t]=e[t];return r},Ut=(e=>t=>e&&t instanceof e)(typeof Uint8Array!="undefined"&&ce(Uint8Array)),jt=(e,t)=>{let n=(e&&e[Symbol.iterator]).call(e),o;for(;(o=n.next())&&!o.done;){let s=o.value;t.call(e,s[0],s[1])}},Ht=(e,t)=>{let r,n=[];for(;(r=e.exec(t))!==null;)n.push(r);return n},Mt=R("HTMLFormElement"),qt=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(r,n,o){return n.toUpperCase()+o}),Te=(({hasOwnProperty:e})=>(t,r)=>e.call(t,r))(Object.prototype),zt=R("RegExp"),De=(e,t)=>{let r=Object.getOwnPropertyDescriptors(e),n={};U(r,(o,s)=>{t(o,s,e)!==!1&&(n[s]=o)}),Object.defineProperties(e,n)},Vt=e=>{De(e,(t,r)=>{if(S(e)&&["arguments","caller","callee"].indexOf(r)!==-1)return!1;let n=e[r];if(S(n)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+r+"'")})}})},Jt=(e,t)=>{let r={},n=o=>{o.forEach(s=>{r[s]=!0})};return L(e)?n(e):n(String(e).split(t)),r},vt=()=>{},Wt=(e,t)=>(e=+e,Number.isFinite(e)?e:t),ie="abcdefghijklmnopqrstuvwxyz",Ne="0123456789",Be={DIGIT:Ne,ALPHA:ie,ALPHA_DIGIT:ie+ie.toUpperCase()+Ne},Xt=(e=16,t=Be.ALPHA_DIGIT)=>{let r="",{length:n}=t;for(;e--;)r+=t[Math.random()*n|0];return r};function Kt(e){return!!(e&&S(e.append)&&e[Symbol.toStringTag]==="FormData"&&e[Symbol.iterator])}var $t=e=>{let t=new Array(10),r=(n,o)=>{if(K(n)){if(t.indexOf(n)>=0)return;if(!("toJSON"in n)){t[o]=n;let s=L(n)?[]:{};return U(n,(i,u)=>{let f=r(i,o+1);!_(f)&&(s[u]=f)}),t[o]=void 0,s}}return n};return r(e,0)},Gt=R("AsyncFunction"),Qt=e=>e&&(K(e)||S(e))&&S(e.then)&&S(e.catch),a={isArray:L,isArrayBuffer:Pe,isBuffer:bt,isFormData:Nt,isArrayBufferView:xt,isString:St,isNumber:Le,isBoolean:At,isObject:K,isPlainObject:v,isUndefined:_,isDate:Rt,isFile:Ot,isBlob:gt,isRegExp:zt,isFunction:S,isStream:Tt,isURLSearchParams:Pt,isTypedArray:Ut,isFileList:Ct,forEach:U,merge:ae,extend:Ft,trim:Lt,stripBOM:It,inherits:kt,toFlatObject:Dt,kindOf:W,kindOfTest:R,endsWith:Bt,toArray:_t,forEachEntry:jt,matchAll:Ht,isHTMLForm:Mt,hasOwnProperty:Te,hasOwnProp:Te,reduceDescriptors:De,freezeMethods:Vt,toObjectSet:Jt,toCamelCase:qt,noop:vt,toFiniteNumber:Wt,findKey:Fe,global:Ie,isContextDefined:ke,ALPHABET:Be,generateString:Xt,isSpecCompliantForm:Kt,toJSONObject:$t,isAsyncFn:Gt,isThenable:Qt};function F(e,t,r,n,o){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),r&&(this.config=r),n&&(this.request=n),o&&(this.response=o)}a.inherits(F,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:a.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});var _e=F.prototype,Ue={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{Ue[e]={value:e}});Object.defineProperties(F,Ue);Object.defineProperty(_e,"isAxiosError",{value:!0});F.from=(e,t,r,n,o,s)=>{let i=Object.create(_e);return a.toFlatObject(e,i,function(f){return f!==Error.prototype},u=>u!=="isAxiosError"),F.call(i,e.message,t,r,n,o),i.cause=e,i.name=e.name,s&&Object.assign(i,s),i};var p=F;var $=null;function ue(e){return a.isPlainObject(e)||a.isArray(e)}function He(e){return a.endsWith(e,"[]")?e.slice(0,-2):e}function je(e,t,r){return e?e.concat(t).map(function(o,s){return o=He(o),!r&&s?"["+o+"]":o}).join(r?".":""):t}function Yt(e){return a.isArray(e)&&!e.some(ue)}var Zt=a.toFlatObject(a,{},null,function(t){return/^is[A-Z]/.test(t)});function er(e,t,r){if(!a.isObject(e))throw new TypeError("target must be an object");t=t||new($||FormData),r=a.toFlatObject(r,{metaTokens:!0,dots:!1,indexes:!1},!1,function(h,O){return!a.isUndefined(O[h])});let n=r.metaTokens,o=r.visitor||l,s=r.dots,i=r.indexes,f=(r.Blob||typeof Blob!="undefined"&&Blob)&&a.isSpecCompliantForm(t);if(!a.isFunction(o))throw new TypeError("visitor must be a function");function c(m){if(m===null)return"";if(a.isDate(m))return m.toISOString();if(!f&&a.isBlob(m))throw new p("Blob is not supported. Use a Buffer instead.");return a.isArrayBuffer(m)||a.isTypedArray(m)?f&&typeof Blob=="function"?new Blob([m]):Buffer.from(m):m}function l(m,h,O){let A=m;if(m&&!O&&typeof m=="object"){if(a.endsWith(h,"{}"))h=n?h:h.slice(0,-2),m=JSON.stringify(m);else if(a.isArray(m)&&Yt(m)||(a.isFileList(m)||a.endsWith(h,"[]"))&&(A=a.toArray(m)))return h=He(h),A.forEach(function(J,yt){!(a.isUndefined(J)||J===null)&&t.append(i===!0?je([h],yt,s):i===null?h:h+"[]",c(J))}),!1}return ue(m)?!0:(t.append(je(O,h,s),c(m)),!1)}let d=[],y=Object.assign(Zt,{defaultVisitor:l,convertValue:c,isVisitable:ue});function E(m,h){if(!a.isUndefined(m)){if(d.indexOf(m)!==-1)throw Error("Circular reference detected in "+h.join("."));d.push(m),a.forEach(m,function(A,P){(!(a.isUndefined(A)||A===null)&&o.call(t,A,a.isString(P)?P.trim():P,h,y))===!0&&E(A,h?h.concat(P):[P])}),d.pop()}}if(!a.isObject(e))throw new TypeError("data must be an object");return E(e),t}var C=er;function Me(e){let t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(n){return t[n]})}function qe(e,t){this._pairs=[],e&&C(e,this,t)}var ze=qe.prototype;ze.append=function(t,r){this._pairs.push([t,r])};ze.toString=function(t){let r=t?function(n){return t.call(this,n,Me)}:Me;return this._pairs.map(function(o){return r(o[0])+"="+r(o[1])},"").join("&")};var G=qe;function tr(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function j(e,t,r){if(!t)return e;let n=r&&r.encode||tr,o=r&&r.serialize,s;if(o?s=o(t,r):s=a.isURLSearchParams(t)?t.toString():new G(t,r).toString(n),s){let i=e.indexOf("#");i!==-1&&(e=e.slice(0,i)),e+=(e.indexOf("?")===-1?"?":"&")+s}return e}var le=class{constructor(){this.handlers=[]}use(t,r,n){return this.handlers.push({fulfilled:t,rejected:r,synchronous:n?n.synchronous:!1,runWhen:n?n.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){a.forEach(this.handlers,function(n){n!==null&&t(n)})}},fe=le;var Q={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1};var Ve=typeof URLSearchParams!="undefined"?URLSearchParams:G;var Je=typeof FormData!="undefined"?FormData:null;var ve=typeof Blob!="undefined"?Blob:null;var rr=(()=>{let e;return typeof navigator!="undefined"&&((e=navigator.product)==="ReactNative"||e==="NativeScript"||e==="NS")?!1:typeof window!="undefined"&&typeof document!="undefined"})(),nr=(()=>typeof WorkerGlobalScope!="undefined"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function")(),b={isBrowser:!0,classes:{URLSearchParams:Ve,FormData:Je,Blob:ve},isStandardBrowserEnv:rr,isStandardBrowserWebWorkerEnv:nr,protocols:["http","https","file","blob","url","data"]};function de(e,t){return C(e,new b.classes.URLSearchParams,Object.assign({visitor:function(r,n,o,s){return b.isNode&&a.isBuffer(r)?(this.append(n,r.toString("base64")),!1):s.defaultVisitor.apply(this,arguments)}},t))}function or(e){return a.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function sr(e){let t={},r=Object.keys(e),n,o=r.length,s;for(n=0;n<o;n++)s=r[n],t[s]=e[s];return t}function ir(e){function t(r,n,o,s){let i=r[s++],u=Number.isFinite(+i),f=s>=r.length;return i=!i&&a.isArray(o)?o.length:i,f?(a.hasOwnProp(o,i)?o[i]=[o[i],n]:o[i]=n,!u):((!o[i]||!a.isObject(o[i]))&&(o[i]=[]),t(r,n,o[i],s)&&a.isArray(o[i])&&(o[i]=sr(o[i])),!u)}if(a.isFormData(e)&&a.isFunction(e.entries)){let r={};return a.forEachEntry(e,(n,o)=>{t(or(n),o,r,0)}),r}return null}var Y=ir;var ar={"Content-Type":void 0};function cr(e,t,r){if(a.isString(e))try{return(t||JSON.parse)(e),a.trim(e)}catch(n){if(n.name!=="SyntaxError")throw n}return(r||JSON.stringify)(e)}var Z={transitional:Q,adapter:["xhr","http"],transformRequest:[function(t,r){let n=r.getContentType()||"",o=n.indexOf("application/json")>-1,s=a.isObject(t);if(s&&a.isHTMLForm(t)&&(t=new FormData(t)),a.isFormData(t))return o&&o?JSON.stringify(Y(t)):t;if(a.isArrayBuffer(t)||a.isBuffer(t)||a.isStream(t)||a.isFile(t)||a.isBlob(t))return t;if(a.isArrayBufferView(t))return t.buffer;if(a.isURLSearchParams(t))return r.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let u;if(s){if(n.indexOf("application/x-www-form-urlencoded")>-1)return de(t,this.formSerializer).toString();if((u=a.isFileList(t))||n.indexOf("multipart/form-data")>-1){let f=this.env&&this.env.FormData;return C(u?{"files[]":t}:t,f&&new f,this.formSerializer)}}return s||o?(r.setContentType("application/json",!1),cr(t)):t}],transformResponse:[function(t){let r=this.transitional||Z.transitional,n=r&&r.forcedJSONParsing,o=this.responseType==="json";if(t&&a.isString(t)&&(n&&!this.responseType||o)){let i=!(r&&r.silentJSONParsing)&&o;try{return JSON.parse(t)}catch(u){if(i)throw u.name==="SyntaxError"?p.from(u,p.ERR_BAD_RESPONSE,this,null,this.response):u}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:b.classes.FormData,Blob:b.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};a.forEach(["delete","get","head"],function(t){Z.headers[t]={}});a.forEach(["post","put","patch"],function(t){Z.headers[t]=a.merge(ar)});var I=Z;var ur=a.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),We=e=>{let t={},r,n,o;return e&&e.split(`
`).forEach(function(i){o=i.indexOf(":"),r=i.substring(0,o).trim().toLowerCase(),n=i.substring(o+1).trim(),!(!r||t[r]&&ur[r])&&(r==="set-cookie"?t[r]?t[r].push(n):t[r]=[n]:t[r]=t[r]?t[r]+", "+n:n)}),t};var Xe=Symbol("internals");function H(e){return e&&String(e).trim().toLowerCase()}function ee(e){return e===!1||e==null?e:a.isArray(e)?e.map(ee):String(e)}function lr(e){let t=Object.create(null),r=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g,n;for(;n=r.exec(e);)t[n[1]]=n[2];return t}var fr=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function me(e,t,r,n,o){if(a.isFunction(n))return n.call(this,t,r);if(o&&(t=r),!!a.isString(t)){if(a.isString(n))return t.indexOf(n)!==-1;if(a.isRegExp(n))return n.test(t)}}function dr(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,r,n)=>r.toUpperCase()+n)}function mr(e,t){let r=a.toCamelCase(" "+t);["get","set","has"].forEach(n=>{Object.defineProperty(e,n+r,{value:function(o,s,i){return this[n].call(this,t,o,s,i)},configurable:!0})})}var k=class{constructor(t){t&&this.set(t)}set(t,r,n){let o=this;function s(u,f,c){let l=H(f);if(!l)throw new Error("header name must be a non-empty string");let d=a.findKey(o,l);(!d||o[d]===void 0||c===!0||c===void 0&&o[d]!==!1)&&(o[d||f]=ee(u))}let i=(u,f)=>a.forEach(u,(c,l)=>s(c,l,f));return a.isPlainObject(t)||t instanceof this.constructor?i(t,r):a.isString(t)&&(t=t.trim())&&!fr(t)?i(We(t),r):t!=null&&s(r,t,n),this}get(t,r){if(t=H(t),t){let n=a.findKey(this,t);if(n){let o=this[n];if(!r)return o;if(r===!0)return lr(o);if(a.isFunction(r))return r.call(this,o,n);if(a.isRegExp(r))return r.exec(o);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,r){if(t=H(t),t){let n=a.findKey(this,t);return!!(n&&this[n]!==void 0&&(!r||me(this,this[n],n,r)))}return!1}delete(t,r){let n=this,o=!1;function s(i){if(i=H(i),i){let u=a.findKey(n,i);u&&(!r||me(n,n[u],u,r))&&(delete n[u],o=!0)}}return a.isArray(t)?t.forEach(s):s(t),o}clear(t){let r=Object.keys(this),n=r.length,o=!1;for(;n--;){let s=r[n];(!t||me(this,this[s],s,t,!0))&&(delete this[s],o=!0)}return o}normalize(t){let r=this,n={};return a.forEach(this,(o,s)=>{let i=a.findKey(n,s);if(i){r[i]=ee(o),delete r[s];return}let u=t?dr(s):String(s).trim();u!==s&&delete r[s],r[u]=ee(o),n[u]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){let r=Object.create(null);return a.forEach(this,(n,o)=>{n!=null&&n!==!1&&(r[o]=t&&a.isArray(n)?n.join(", "):n)}),r}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,r])=>t+": "+r).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...r){let n=new this(t);return r.forEach(o=>n.set(o)),n}static accessor(t){let n=(this[Xe]=this[Xe]={accessors:{}}).accessors,o=this.prototype;function s(i){let u=H(i);n[u]||(mr(o,i),n[u]=!0)}return a.isArray(t)?t.forEach(s):s(t),this}};k.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);a.freezeMethods(k.prototype);a.freezeMethods(k);var x=k;function M(e,t){let r=this||I,n=t||r,o=x.from(n.headers),s=n.data;return a.forEach(e,function(u){s=u.call(r,s,o.normalize(),t?t.status:void 0)}),o.normalize(),s}function q(e){return!!(e&&e.__CANCEL__)}function Ke(e,t,r){p.call(this,e==null?"canceled":e,p.ERR_CANCELED,t,r),this.name="CanceledError"}a.inherits(Ke,p,{__CANCEL__:!0});var T=Ke;function pe(e,t,r){let n=r.config.validateStatus;!r.status||!n||n(r.status)?e(r):t(new p("Request failed with status code "+r.status,[p.ERR_BAD_REQUEST,p.ERR_BAD_RESPONSE][Math.floor(r.status/100)-4],r.config,r.request,r))}var $e=b.isStandardBrowserEnv?function(){return{write:function(r,n,o,s,i,u){let f=[];f.push(r+"="+encodeURIComponent(n)),a.isNumber(o)&&f.push("expires="+new Date(o).toGMTString()),a.isString(s)&&f.push("path="+s),a.isString(i)&&f.push("domain="+i),u===!0&&f.push("secure"),document.cookie=f.join("; ")},read:function(r){let n=document.cookie.match(new RegExp("(^|;\\s*)("+r+")=([^;]*)"));return n?decodeURIComponent(n[3]):null},remove:function(r){this.write(r,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}();function he(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function Ee(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}function z(e,t){return e&&!he(t)?Ee(e,t):t}var Ge=b.isStandardBrowserEnv?function(){let t=/(msie|trident)/i.test(navigator.userAgent),r=document.createElement("a"),n;function o(s){let i=s;return t&&(r.setAttribute("href",i),i=r.href),r.setAttribute("href",i),{href:r.href,protocol:r.protocol?r.protocol.replace(/:$/,""):"",host:r.host,search:r.search?r.search.replace(/^\?/,""):"",hash:r.hash?r.hash.replace(/^#/,""):"",hostname:r.hostname,port:r.port,pathname:r.pathname.charAt(0)==="/"?r.pathname:"/"+r.pathname}}return n=o(window.location.href),function(i){let u=a.isString(i)?o(i):i;return u.protocol===n.protocol&&u.host===n.host}}():function(){return function(){return!0}}();function ye(e){let t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function pr(e,t){e=e||10;let r=new Array(e),n=new Array(e),o=0,s=0,i;return t=t!==void 0?t:1e3,function(f){let c=Date.now(),l=n[s];i||(i=c),r[o]=f,n[o]=c;let d=s,y=0;for(;d!==o;)y+=r[d++],d=d%e;if(o=(o+1)%e,o===s&&(s=(s+1)%e),c-i<t)return;let E=l&&c-l;return E?Math.round(y*1e3/E):void 0}}var Qe=pr;function Ye(e,t){let r=0,n=Qe(50,250);return o=>{let s=o.loaded,i=o.lengthComputable?o.total:void 0,u=s-r,f=n(u),c=s<=i;r=s;let l={loaded:s,total:i,progress:i?s/i:void 0,bytes:u,rate:f||void 0,estimated:f&&i&&c?(i-s)/f:void 0,event:o};l[t?"download":"upload"]=!0,e(l)}}var hr=typeof XMLHttpRequest!="undefined",Ze=hr&&function(e){return new Promise(function(r,n){let o=e.data,s=x.from(e.headers).normalize(),i=e.responseType,u;function f(){e.cancelToken&&e.cancelToken.unsubscribe(u),e.signal&&e.signal.removeEventListener("abort",u)}a.isFormData(o)&&(b.isStandardBrowserEnv||b.isStandardBrowserWebWorkerEnv?s.setContentType(!1):s.setContentType("multipart/form-data;",!1));let c=new XMLHttpRequest;if(e.auth){let E=e.auth.username||"",m=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";s.set("Authorization","Basic "+btoa(E+":"+m))}let l=z(e.baseURL,e.url);c.open(e.method.toUpperCase(),j(l,e.params,e.paramsSerializer),!0),c.timeout=e.timeout;function d(){if(!c)return;let E=x.from("getAllResponseHeaders"in c&&c.getAllResponseHeaders()),h={data:!i||i==="text"||i==="json"?c.responseText:c.response,status:c.status,statusText:c.statusText,headers:E,config:e,request:c};pe(function(A){r(A),f()},function(A){n(A),f()},h),c=null}if("onloadend"in c?c.onloadend=d:c.onreadystatechange=function(){!c||c.readyState!==4||c.status===0&&!(c.responseURL&&c.responseURL.indexOf("file:")===0)||setTimeout(d)},c.onabort=function(){c&&(n(new p("Request aborted",p.ECONNABORTED,e,c)),c=null)},c.onerror=function(){n(new p("Network Error",p.ERR_NETWORK,e,c)),c=null},c.ontimeout=function(){let m=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded",h=e.transitional||Q;e.timeoutErrorMessage&&(m=e.timeoutErrorMessage),n(new p(m,h.clarifyTimeoutError?p.ETIMEDOUT:p.ECONNABORTED,e,c)),c=null},b.isStandardBrowserEnv){let E=(e.withCredentials||Ge(l))&&e.xsrfCookieName&&$e.read(e.xsrfCookieName);E&&s.set(e.xsrfHeaderName,E)}o===void 0&&s.setContentType(null),"setRequestHeader"in c&&a.forEach(s.toJSON(),function(m,h){c.setRequestHeader(h,m)}),a.isUndefined(e.withCredentials)||(c.withCredentials=!!e.withCredentials),i&&i!=="json"&&(c.responseType=e.responseType),typeof e.onDownloadProgress=="function"&&c.addEventListener("progress",Ye(e.onDownloadProgress,!0)),typeof e.onUploadProgress=="function"&&c.upload&&c.upload.addEventListener("progress",Ye(e.onUploadProgress)),(e.cancelToken||e.signal)&&(u=E=>{c&&(n(!E||E.type?new T(null,e,c):E),c.abort(),c=null)},e.cancelToken&&e.cancelToken.subscribe(u),e.signal&&(e.signal.aborted?u():e.signal.addEventListener("abort",u)));let y=ye(l);if(y&&b.protocols.indexOf(y)===-1){n(new p("Unsupported protocol "+y+":",p.ERR_BAD_REQUEST,e));return}c.send(o||null)})};var te={http:$,xhr:Ze};a.forEach(te,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch(r){}Object.defineProperty(e,"adapterName",{value:t})}});var et={getAdapter:e=>{e=a.isArray(e)?e:[e];let{length:t}=e,r,n;for(let o=0;o<t&&(r=e[o],!(n=a.isString(r)?te[r.toLowerCase()]:r));o++);if(!n)throw n===!1?new p(`Adapter ${r} is not supported by the environment`,"ERR_NOT_SUPPORT"):new Error(a.hasOwnProp(te,r)?`Adapter '${r}' is not available in the build`:`Unknown adapter '${r}'`);if(!a.isFunction(n))throw new TypeError("adapter is not a function");return n},adapters:te};function we(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new T(null,e)}function re(e){return we(e),e.headers=x.from(e.headers),e.data=M.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),et.getAdapter(e.adapter||I.adapter)(e).then(function(n){return we(e),n.data=M.call(e,e.transformResponse,n),n.headers=x.from(n.headers),n},function(n){return q(n)||(we(e),n&&n.response&&(n.response.data=M.call(e,e.transformResponse,n.response),n.response.headers=x.from(n.response.headers))),Promise.reject(n)})}var tt=e=>e instanceof x?e.toJSON():e;function g(e,t){t=t||{};let r={};function n(c,l,d){return a.isPlainObject(c)&&a.isPlainObject(l)?a.merge.call({caseless:d},c,l):a.isPlainObject(l)?a.merge({},l):a.isArray(l)?l.slice():l}function o(c,l,d){if(a.isUndefined(l)){if(!a.isUndefined(c))return n(void 0,c,d)}else return n(c,l,d)}function s(c,l){if(!a.isUndefined(l))return n(void 0,l)}function i(c,l){if(a.isUndefined(l)){if(!a.isUndefined(c))return n(void 0,c)}else return n(void 0,l)}function u(c,l,d){if(d in t)return n(c,l);if(d in e)return n(void 0,c)}let f={url:s,method:s,data:s,baseURL:i,transformRequest:i,transformResponse:i,paramsSerializer:i,timeout:i,timeoutMessage:i,withCredentials:i,adapter:i,responseType:i,xsrfCookieName:i,xsrfHeaderName:i,onUploadProgress:i,onDownloadProgress:i,decompress:i,maxContentLength:i,maxBodyLength:i,beforeRedirect:i,transport:i,httpAgent:i,httpsAgent:i,cancelToken:i,socketPath:i,responseEncoding:i,validateStatus:u,headers:(c,l)=>o(tt(c),tt(l),!0)};return a.forEach(Object.keys(Object.assign({},e,t)),function(l){let d=f[l]||o,y=d(e[l],t[l],l);a.isUndefined(y)&&d!==u||(r[l]=y)}),r}var ne="1.4.0";var be={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{be[e]=function(n){return typeof n===e||"a"+(t<1?"n ":" ")+e}});var rt={};be.transitional=function(t,r,n){function o(s,i){return"[Axios v"+ne+"] Transitional option '"+s+"'"+i+(n?". "+n:"")}return(s,i,u)=>{if(t===!1)throw new p(o(i," has been removed"+(r?" in "+r:"")),p.ERR_DEPRECATED);return r&&!rt[i]&&(rt[i]=!0,console.warn(o(i," has been deprecated since v"+r+" and will be removed in the near future"))),t?t(s,i,u):!0}};function Er(e,t,r){if(typeof e!="object")throw new p("options must be an object",p.ERR_BAD_OPTION_VALUE);let n=Object.keys(e),o=n.length;for(;o-- >0;){let s=n[o],i=t[s];if(i){let u=e[s],f=u===void 0||i(u,s,e);if(f!==!0)throw new p("option "+s+" must be "+f,p.ERR_BAD_OPTION_VALUE);continue}if(r!==!0)throw new p("Unknown option "+s,p.ERR_BAD_OPTION)}}var oe={assertOptions:Er,validators:be};var N=oe.validators,D=class{constructor(t){this.defaults=t,this.interceptors={request:new fe,response:new fe}}request(t,r){typeof t=="string"?(r=r||{},r.url=t):r=t||{},r=g(this.defaults,r);let{transitional:n,paramsSerializer:o,headers:s}=r;n!==void 0&&oe.assertOptions(n,{silentJSONParsing:N.transitional(N.boolean),forcedJSONParsing:N.transitional(N.boolean),clarifyTimeoutError:N.transitional(N.boolean)},!1),o!=null&&(a.isFunction(o)?r.paramsSerializer={serialize:o}:oe.assertOptions(o,{encode:N.function,serialize:N.function},!0)),r.method=(r.method||this.defaults.method||"get").toLowerCase();let i;i=s&&a.merge(s.common,s[r.method]),i&&a.forEach(["delete","get","head","post","put","patch","common"],m=>{delete s[m]}),r.headers=x.concat(i,s);let u=[],f=!0;this.interceptors.request.forEach(function(h){typeof h.runWhen=="function"&&h.runWhen(r)===!1||(f=f&&h.synchronous,u.unshift(h.fulfilled,h.rejected))});let c=[];this.interceptors.response.forEach(function(h){c.push(h.fulfilled,h.rejected)});let l,d=0,y;if(!f){let m=[re.bind(this),void 0];for(m.unshift.apply(m,u),m.push.apply(m,c),y=m.length,l=Promise.resolve(r);d<y;)l=l.then(m[d++],m[d++]);return l}y=u.length;let E=r;for(d=0;d<y;){let m=u[d++],h=u[d++];try{E=m(E)}catch(O){h.call(this,O);break}}try{l=re.call(this,E)}catch(m){return Promise.reject(m)}for(d=0,y=c.length;d<y;)l=l.then(c[d++],c[d++]);return l}getUri(t){t=g(this.defaults,t);let r=z(t.baseURL,t.url);return j(r,t.params,t.paramsSerializer)}};a.forEach(["delete","get","head","options"],function(t){D.prototype[t]=function(r,n){return this.request(g(n||{},{method:t,url:r,data:(n||{}).data}))}});a.forEach(["post","put","patch"],function(t){function r(n){return function(s,i,u){return this.request(g(u||{},{method:t,headers:n?{"Content-Type":"multipart/form-data"}:{},url:s,data:i}))}}D.prototype[t]=r(),D.prototype[t+"Form"]=r(!0)});var V=D;var xe=class e{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let r;this.promise=new Promise(function(s){r=s});let n=this;this.promise.then(o=>{if(!n._listeners)return;let s=n._listeners.length;for(;s-- >0;)n._listeners[s](o);n._listeners=null}),this.promise.then=o=>{let s,i=new Promise(u=>{n.subscribe(u),s=u}).then(o);return i.cancel=function(){n.unsubscribe(s)},i},t(function(s,i,u){n.reason||(n.reason=new T(s,i,u),r(n.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;let r=this._listeners.indexOf(t);r!==-1&&this._listeners.splice(r,1)}static source(){let t;return{token:new e(function(o){t=o}),cancel:t}}},nt=xe;function Se(e){return function(r){return e.apply(null,r)}}function Ae(e){return a.isObject(e)&&e.isAxiosError===!0}var Re={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(Re).forEach(([e,t])=>{Re[t]=e});var ot=Re;function st(e){let t=new V(e),r=B(V.prototype.request,t);return a.extend(r,V.prototype,t,{allOwnKeys:!0}),a.extend(r,t,null,{allOwnKeys:!0}),r.create=function(o){return st(g(e,o))},r}var w=st(I);w.Axios=V;w.CanceledError=T;w.CancelToken=nt;w.isCancel=q;w.VERSION=ne;w.toFormData=C;w.AxiosError=p;w.Cancel=w.CanceledError;w.all=function(t){return Promise.all(t)};w.spread=Se;w.isAxiosError=Ae;w.mergeConfig=g;w.AxiosHeaders=x;w.formToJSON=e=>Y(a.isHTMLForm(e)?new FormData(e):e);w.HttpStatusCode=ot;w.default=w;var se=w;var{Axios:Yo,AxiosError:Zo,CanceledError:es,isCancel:ts,CancelToken:rs,VERSION:ns,all:os,Cancel:ss,isAxiosError:is,spread:as,toFormData:cs,AxiosHeaders:us,HttpStatusCode:ls,formToJSON:fs,mergeConfig:ds}=se;var at=function(e,t,r,n){function o(s){return s instanceof r?s:new r(function(i){i(s)})}return new(r||(r=Promise))(function(s,i){function u(l){try{c(n.next(l))}catch(d){i(d)}}function f(l){try{c(n.throw(l))}catch(d){i(d)}}function c(l){l.done?s(l.value):o(l.value).then(u,f)}c((n=n.apply(e,t||[])).next())})},it;function ct(e){return at(this,void 0,void 0,function*(){return it=yield Oe.loadStore(e),it})}var Oe=class e{constructor(t){this.json=t}static loadStore(t){return at(this,void 0,void 0,function*(){let r=t.length>0?t+"/pokemon.json":"pokemon.json",n=(yield se.get(r,{responseType:"json"})).data;return new e(n)})}getPokemonsWithId(){return Object.keys(this.json).map(t=>{let r=this.json[t];return{id:r.Id,name:r.Name,color:r.Color,types:r.Types,generations:r.Generations}})}getPokemonTypesWithId(t){return this.json[t.toString()].Types}getStatsWithId(t){return this.json[t.toString()].Stats.map(r=>({statsName:r.StatsName,value:r.Value}))}getPokemonColor(t){return this.json[t.toString()].Color}};var mt=document.getElementById("search");mt.addEventListener("input",pt);var ut=document.getElementsByClassName("pokeList")[0],yr=document.getElementsByClassName("App")[0];function pt(){let e=mt.value,t=document.getElementsByClassName("pokeEntry");Array.from(t).forEach(r=>{r.getAttribute("pokeName").match(new RegExp(".*"+e+".*"))?r.classList.remove("hidden"):r.classList.add("hidden")})}var Ce;ct("").then(e=>{Ce=e,wr(),pt()});function wr(){ut.innerHTML="",Ce.getPokemonsWithId().forEach(t=>{let r=document.createElement("li");ut.appendChild(r),r.classList.add("pokeEntry"),r.setAttribute("pokeName",t.name),r.setAttribute("pokeId",t.id);let n=document.createElement("button");r.appendChild(n),n.classList.add(t.color),n.addEventListener("click",()=>br(t.id));let o=document.createElement("div");n.appendChild(o),o.classList.add("buttonContent");let s=document.createElement("div");s.classList.add("genList"),o.appendChild(s),t.generations.forEach(d=>{let y=document.createElement("span");s.appendChild(y),y.classList.add("gen"+d),y.textContent=Sr(d)});let i=document.createElement("img");o.appendChild(i),i.alt="Sprite of the pokemon"+t.name,i.src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"+t.id+".png",i.loading="lazy",i.classList.add("sprite");let u=document.createElement("span");o.appendChild(u),u.classList.add("pokemonId"),u.innerHTML=`<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M181.3 32.4c17.4 2.9 29.2 19.4 26.3 36.8L197.8 128h95.1l11.5-69.3c2.9-17.4 19.4-29.2 36.8-26.3s29.2 19.4 26.3 36.8L357.8 128H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H347.1L325.8 320H384c17.7 0 32 14.3 32 32s-14.3 32-32 32H315.1l-11.5 69.3c-2.9 17.4-19.4 29.2-36.8 26.3s-29.2-19.4-26.3-36.8l9.8-58.7H155.1l-11.5 69.3c-2.9 17.4-19.4 29.2-36.8 26.3s-29.2-19.4-26.3-36.8L90.2 384H32c-17.7 0-32-14.3-32-32s14.3-32 32-32h68.9l21.3-128H64c-17.7 0-32-14.3-32-32s14.3-32 32-32h68.9l11.5-69.3c2.9-17.4 19.4-29.2 36.8-26.3zM187.1 192L165.8 320h95.1l21.3-128H187.1z"/></svg>${t.id}`;let f=document.createElement("span");o.appendChild(f),f.innerText=t.name;let c=document.createElement("ul");o.appendChild(c),c.classList.add("typeList"),t.types.forEach(d=>{let y=document.createElement("li");c.appendChild(y),y.classList.add(d),y.textContent=d;let E=document.createElement("img");y.appendChild(E),E.alt=d+" icon",E.src=d+".png",E.classList.add("typeIcon")});let l=document.createElement("br");o.appendChild(l)})}function br(e){xr(e)}function xr(e){let t=Ce.getStatsWithId(e),r=document.createElement("div");yr.appendChild(r),r.classList.add("modal");let n=document.createElement("div");r.appendChild(n),n.classList.add("modal-content"),n.classList.add(t.color);let o=document.createElement("span");n.appendChild(o),o.classList.add("close"),o.innerHTML="&times;",o.addEventListener("click",()=>{r.remove()});let s=document.createElement("h3");n.appendChild(s),s.textContent="Pokemon Stats";let i=document.createElement("img");n.appendChild(i),i.alt="Sprite of the pokemon"+t.name,i.src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"+t.id+".png";let u=document.createElement("ul");n.appendChild(u),t.stats.forEach(f=>{let c=document.createElement("li");u.appendChild(c),c.textContent=f.stat.name+": "+f.base_stat})}function Sr(e){return["I","II","III","IV","V","VI","VII","VIII","IX","X","XI","XII","XIII","XIV","XV","XVI","XVII","XVIII","XIX","XX"][e-1]}var lt=0,ft=0,ge,ht=0,dt=performance.now();function Et(e){let t=e-dt;dt=e,lt++,ft+=t,ge=ft/lt,t>ge*1.2&&(ht+=t/ge-1),window.requestAnimationFrame(Et)}window.requestAnimationFrame(Et);setInterval(()=>{document.getElementById("frameDropped").innerHTML="Dropped Frames: "+ht.toFixed(0)},1e3);})();
