import{h as W,t as le,D as Xi,u as Zi,x as Ji,y as j,i as Zr,z as L,B as ae,C as be,E as ai,F as er,G as je,H as Jr,j as $,I as de,$ as b,J as q,K as zt,L as tr,M as he,N as en,P as hi,s as It,Q as ui,R as ci,S as qe,m as Ht,U as li,V as tn,W as mt,n as Ut,X as rn,Y as nn,Z as on,a0 as ir,k as Dt,a1 as sn,a2 as ce,a3 as an,a4 as hn,a5 as un,a6 as cn,q as Wt,a7 as di,a8 as ln,O as dn,a9 as fn,aa as ue,ab as pt,ac as mn,ad as fi,ae as gt,af as mi,ag as pn,ah as gn,ai as _n,aj as vn,ak as yn,al as bn,am as wn,an as pi,ao as _t}from"./index.e1705b20.js";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rr=function(i){const e=[];let t=0;for(let r=0;r<i.length;r++){let n=i.charCodeAt(r);n<128?e[t++]=n:n<2048?(e[t++]=n>>6|192,e[t++]=n&63|128):(n&64512)===55296&&r+1<i.length&&(i.charCodeAt(r+1)&64512)===56320?(n=65536+((n&1023)<<10)+(i.charCodeAt(++r)&1023),e[t++]=n>>18|240,e[t++]=n>>12&63|128,e[t++]=n>>6&63|128,e[t++]=n&63|128):(e[t++]=n>>12|224,e[t++]=n>>6&63|128,e[t++]=n&63|128)}return e},En=function(i){const e=[];let t=0,r=0;for(;t<i.length;){const n=i[t++];if(n<128)e[r++]=String.fromCharCode(n);else if(n>191&&n<224){const o=i[t++];e[r++]=String.fromCharCode((n&31)<<6|o&63)}else if(n>239&&n<365){const o=i[t++],s=i[t++],a=i[t++],h=((n&7)<<18|(o&63)<<12|(s&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(h>>10)),e[r++]=String.fromCharCode(56320+(h&1023))}else{const o=i[t++],s=i[t++];e[r++]=String.fromCharCode((n&15)<<12|(o&63)<<6|s&63)}}return e.join("")},nr={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(i,e){if(!Array.isArray(i))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let n=0;n<i.length;n+=3){const o=i[n],s=n+1<i.length,a=s?i[n+1]:0,h=n+2<i.length,u=h?i[n+2]:0,d=o>>2,l=(o&3)<<4|a>>4;let m=(a&15)<<2|u>>6,_=u&63;h||(_=64,s||(m=64)),r.push(t[d],t[l],t[m],t[_])}return r.join("")},encodeString(i,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(i):this.encodeByteArray(rr(i),e)},decodeString(i,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(i):En(this.decodeStringToByteArray(i,e))},decodeStringToByteArray(i,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let n=0;n<i.length;){const o=t[i.charAt(n++)],a=n<i.length?t[i.charAt(n)]:0;++n;const u=n<i.length?t[i.charAt(n)]:64;++n;const l=n<i.length?t[i.charAt(n)]:64;if(++n,o==null||a==null||u==null||l==null)throw Error();const m=o<<2|a>>4;if(r.push(m),u!==64){const _=a<<4&240|u>>2;if(r.push(_),l!==64){const y=u<<6&192|l;r.push(y)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let i=0;i<this.ENCODED_VALS.length;i++)this.byteToCharMap_[i]=this.ENCODED_VALS.charAt(i),this.charToByteMap_[this.byteToCharMap_[i]]=i,this.byteToCharMapWebSafe_[i]=this.ENCODED_VALS_WEBSAFE.charAt(i),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[i]]=i,i>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(i)]=i,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(i)]=i)}}},Sn=function(i){const e=rr(i);return nr.encodeByteArray(e,!0)},Ge=function(i){return Sn(i).replace(/\./g,"")},Tn=function(i){try{return nr.decodeString(i,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};function Cn(){return typeof indexedDB=="object"}function An(){return new Promise((i,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",n=self.indexedDB.open(r);n.onsuccess=()=>{n.result.close(),t||self.indexedDB.deleteDatabase(r),i(!0)},n.onupgradeneeded=()=>{t=!1},n.onerror=()=>{var o;e(((o=n.error)===null||o===void 0?void 0:o.message)||"")}}catch(t){e(t)}})}function In(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dn=()=>In().__FIREBASE_DEFAULTS__,On=()=>{if(typeof process>"u"||typeof process.env>"u")return;const i=process.env.__FIREBASE_DEFAULTS__;if(i)return JSON.parse(i)},Rn=()=>{if(typeof document>"u")return;let i;try{i=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=i&&Tn(i[1]);return e&&JSON.parse(e)},or=()=>{try{return Dn()||On()||Rn()}catch(i){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${i}`);return}},xn=i=>{var e,t;return(t=(e=or())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[i]},Bn=i=>{const e=xn(i);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),r]:[e.substring(0,t),r]},Nn=()=>{var i;return(i=or())===null||i===void 0?void 0:i.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pn{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kn(i,e){if(i.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",n=i.iat||0,o=i.sub||i.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const s=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:n,exp:n+3600,auth_time:n,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}}},i),a="";return[Ge(JSON.stringify(t)),Ge(JSON.stringify(s)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ln="FirebaseError";class _e extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=Ln,Object.setPrototypeOf(this,_e.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,sr.prototype.create)}}class sr{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},n=`${this.service}/${e}`,o=this.errors[e],s=o?Fn(o,r):"Error",a=`${this.serviceName}: ${s} (${n}).`;return new _e(n,a,r)}}function Fn(i,e){return i.replace($n,(t,r)=>{const n=e[r];return n!=null?String(n):`<${r}?>`})}const $n=/\{\$([^}]+)}/g;function Ot(i,e){if(i===e)return!0;const t=Object.keys(i),r=Object.keys(e);for(const n of t){if(!r.includes(n))return!1;const o=i[n],s=e[n];if(gi(o)&&gi(s)){if(!Ot(o,s))return!1}else if(o!==s)return!1}for(const n of r)if(!t.includes(n))return!1;return!0}function gi(i){return i!==null&&typeof i=="object"}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function F(i){return i&&i._delegate?i._delegate:i}class Se{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const X="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mn{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new Pn;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:t});n&&r.resolve(n)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),n=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(o){if(n)return null;throw o}else{if(n)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(zn(e))try{this.getOrInitializeService({instanceIdentifier:X})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const n=this.normalizeInstanceIdentifier(t);try{const o=this.getOrInitializeService({instanceIdentifier:n});r.resolve(o)}catch{}}}}clearInstance(e=X){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=X){return this.instances.has(e)}getOptions(e=X){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const n=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[o,s]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(o);r===a&&s.resolve(n)}return n}onInit(e,t){var r;const n=this.normalizeInstanceIdentifier(t),o=(r=this.onInitCallbacks.get(n))!==null&&r!==void 0?r:new Set;o.add(e),this.onInitCallbacks.set(n,o);const s=this.instances.get(n);return s&&e(s,n),()=>{o.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(!!r)for(const n of r)try{n(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Vn(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=X){return this.component?this.component.multipleInstances?e:X:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Vn(i){return i===X?void 0:i}function zn(i){return i.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hn{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Mn(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var g;(function(i){i[i.DEBUG=0]="DEBUG",i[i.VERBOSE=1]="VERBOSE",i[i.INFO=2]="INFO",i[i.WARN=3]="WARN",i[i.ERROR=4]="ERROR",i[i.SILENT=5]="SILENT"})(g||(g={}));const Un={debug:g.DEBUG,verbose:g.VERBOSE,info:g.INFO,warn:g.WARN,error:g.ERROR,silent:g.SILENT},Wn=g.INFO,jn={[g.DEBUG]:"log",[g.VERBOSE]:"log",[g.INFO]:"info",[g.WARN]:"warn",[g.ERROR]:"error"},qn=(i,e,...t)=>{if(e<i.logLevel)return;const r=new Date().toISOString(),n=jn[e];if(n)console[n](`[${r}]  ${i.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class ar{constructor(e){this.name=e,this._logLevel=Wn,this._logHandler=qn,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in g))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Un[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,g.DEBUG,...e),this._logHandler(this,g.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,g.VERBOSE,...e),this._logHandler(this,g.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,g.INFO,...e),this._logHandler(this,g.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,g.WARN,...e),this._logHandler(this,g.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,g.ERROR,...e),this._logHandler(this,g.ERROR,...e)}}const Gn=(i,e)=>e.some(t=>i instanceof t);let _i,vi;function Kn(){return _i||(_i=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Yn(){return vi||(vi=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const hr=new WeakMap,Rt=new WeakMap,ur=new WeakMap,vt=new WeakMap,jt=new WeakMap;function Qn(i){const e=new Promise((t,r)=>{const n=()=>{i.removeEventListener("success",o),i.removeEventListener("error",s)},o=()=>{t(G(i.result)),n()},s=()=>{r(i.error),n()};i.addEventListener("success",o),i.addEventListener("error",s)});return e.then(t=>{t instanceof IDBCursor&&hr.set(t,i)}).catch(()=>{}),jt.set(e,i),e}function Xn(i){if(Rt.has(i))return;const e=new Promise((t,r)=>{const n=()=>{i.removeEventListener("complete",o),i.removeEventListener("error",s),i.removeEventListener("abort",s)},o=()=>{t(),n()},s=()=>{r(i.error||new DOMException("AbortError","AbortError")),n()};i.addEventListener("complete",o),i.addEventListener("error",s),i.addEventListener("abort",s)});Rt.set(i,e)}let xt={get(i,e,t){if(i instanceof IDBTransaction){if(e==="done")return Rt.get(i);if(e==="objectStoreNames")return i.objectStoreNames||ur.get(i);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return G(i[e])},set(i,e,t){return i[e]=t,!0},has(i,e){return i instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in i}};function Zn(i){xt=i(xt)}function Jn(i){return i===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=i.call(yt(this),e,...t);return ur.set(r,e.sort?e.sort():[e]),G(r)}:Yn().includes(i)?function(...e){return i.apply(yt(this),e),G(hr.get(this))}:function(...e){return G(i.apply(yt(this),e))}}function eo(i){return typeof i=="function"?Jn(i):(i instanceof IDBTransaction&&Xn(i),Gn(i,Kn())?new Proxy(i,xt):i)}function G(i){if(i instanceof IDBRequest)return Qn(i);if(vt.has(i))return vt.get(i);const e=eo(i);return e!==i&&(vt.set(i,e),jt.set(e,i)),e}const yt=i=>jt.get(i);function to(i,e,{blocked:t,upgrade:r,blocking:n,terminated:o}={}){const s=indexedDB.open(i,e),a=G(s);return r&&s.addEventListener("upgradeneeded",h=>{r(G(s.result),h.oldVersion,h.newVersion,G(s.transaction))}),t&&s.addEventListener("blocked",()=>t()),a.then(h=>{o&&h.addEventListener("close",()=>o()),n&&h.addEventListener("versionchange",()=>n())}).catch(()=>{}),a}const io=["get","getKey","getAll","getAllKeys","count"],ro=["put","add","delete","clear"],bt=new Map;function yi(i,e){if(!(i instanceof IDBDatabase&&!(e in i)&&typeof e=="string"))return;if(bt.get(e))return bt.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,n=ro.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(n||io.includes(t)))return;const o=async function(s,...a){const h=this.transaction(s,n?"readwrite":"readonly");let u=h.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[t](...a),n&&h.done]))[0]};return bt.set(e,o),o}Zn(i=>({...i,get:(e,t,r)=>yi(e,t)||i.get(e,t,r),has:(e,t)=>!!yi(e,t)||i.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class no{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(oo(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function oo(i){const e=i.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Bt="@firebase/app",bi="0.8.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Z=new ar("@firebase/app"),so="@firebase/app-compat",ao="@firebase/analytics-compat",ho="@firebase/analytics",uo="@firebase/app-check-compat",co="@firebase/app-check",lo="@firebase/auth",fo="@firebase/auth-compat",mo="@firebase/database",po="@firebase/database-compat",go="@firebase/functions",_o="@firebase/functions-compat",vo="@firebase/installations",yo="@firebase/installations-compat",bo="@firebase/messaging",wo="@firebase/messaging-compat",Eo="@firebase/performance",So="@firebase/performance-compat",To="@firebase/remote-config",Co="@firebase/remote-config-compat",Ao="@firebase/storage",Io="@firebase/storage-compat",Do="@firebase/firestore",Oo="@firebase/firestore-compat",Ro="firebase",xo="9.12.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nt="[DEFAULT]",Bo={[Bt]:"fire-core",[so]:"fire-core-compat",[ho]:"fire-analytics",[ao]:"fire-analytics-compat",[co]:"fire-app-check",[uo]:"fire-app-check-compat",[lo]:"fire-auth",[fo]:"fire-auth-compat",[mo]:"fire-rtdb",[po]:"fire-rtdb-compat",[go]:"fire-fn",[_o]:"fire-fn-compat",[vo]:"fire-iid",[yo]:"fire-iid-compat",[bo]:"fire-fcm",[wo]:"fire-fcm-compat",[Eo]:"fire-perf",[So]:"fire-perf-compat",[To]:"fire-rc",[Co]:"fire-rc-compat",[Ao]:"fire-gcs",[Io]:"fire-gcs-compat",[Do]:"fire-fst",[Oo]:"fire-fst-compat","fire-js":"fire-js",[Ro]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ke=new Map,Pt=new Map;function No(i,e){try{i.container.addComponent(e)}catch(t){Z.debug(`Component ${e.name} failed to register with FirebaseApp ${i.name}`,t)}}function Ye(i){const e=i.name;if(Pt.has(e))return Z.debug(`There were multiple attempts to register component ${e}.`),!1;Pt.set(e,i);for(const t of Ke.values())No(t,i);return!0}function Po(i,e){const t=i.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),i.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ko={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},K=new sr("app","Firebase",ko);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lo{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Se("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw K.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fo=xo;function cr(i,e={}){let t=i;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Nt,automaticDataCollectionEnabled:!1},e),n=r.name;if(typeof n!="string"||!n)throw K.create("bad-app-name",{appName:String(n)});if(t||(t=Nn()),!t)throw K.create("no-options");const o=Ke.get(n);if(o){if(Ot(t,o.options)&&Ot(r,o.config))return o;throw K.create("duplicate-app",{appName:n})}const s=new Hn(n);for(const h of Pt.values())s.addComponent(h);const a=new Lo(t,r,s);return Ke.set(n,a),a}function $o(i=Nt){const e=Ke.get(i);if(!e&&i===Nt)return cr();if(!e)throw K.create("no-app",{appName:i});return e}function fe(i,e,t){var r;let n=(r=Bo[i])!==null&&r!==void 0?r:i;t&&(n+=`-${t}`);const o=n.match(/\s|\//),s=e.match(/\s|\//);if(o||s){const a=[`Unable to register library "${n}" with version "${e}":`];o&&a.push(`library name "${n}" contains illegal characters (whitespace or "/")`),o&&s&&a.push("and"),s&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Z.warn(a.join(" "));return}Ye(new Se(`${n}-version`,()=>({library:n,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mo="firebase-heartbeat-database",Vo=1,Te="firebase-heartbeat-store";let wt=null;function lr(){return wt||(wt=to(Mo,Vo,{upgrade:(i,e)=>{switch(e){case 0:i.createObjectStore(Te)}}}).catch(i=>{throw K.create("idb-open",{originalErrorMessage:i.message})})),wt}async function zo(i){var e;try{return(await lr()).transaction(Te).objectStore(Te).get(dr(i))}catch(t){if(t instanceof _e)Z.warn(t.message);else{const r=K.create("idb-get",{originalErrorMessage:(e=t)===null||e===void 0?void 0:e.message});Z.warn(r.message)}}}async function wi(i,e){var t;try{const n=(await lr()).transaction(Te,"readwrite");return await n.objectStore(Te).put(e,dr(i)),n.done}catch(r){if(r instanceof _e)Z.warn(r.message);else{const n=K.create("idb-set",{originalErrorMessage:(t=r)===null||t===void 0?void 0:t.message});Z.warn(n.message)}}}function dr(i){return`${i.name}!${i.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ho=1024,Uo=30*24*60*60*1e3;class Wo{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new qo(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const t=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Ei();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(n=>n.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:t}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(n=>{const o=new Date(n.date).valueOf();return Date.now()-o<=Uo}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Ei(),{heartbeatsToSend:t,unsentEntries:r}=jo(this._heartbeatsCache.heartbeats),n=Ge(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),n}}function Ei(){return new Date().toISOString().substring(0,10)}function jo(i,e=Ho){const t=[];let r=i.slice();for(const n of i){const o=t.find(s=>s.agent===n.agent);if(o){if(o.dates.push(n.date),Si(t)>e){o.dates.pop();break}}else if(t.push({agent:n.agent,dates:[n.date]}),Si(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class qo{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Cn()?An().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await zo(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const n=await this.read();return wi(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:n.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const n=await this.read();return wi(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...e.heartbeats]})}else return}}function Si(i){return Ge(JSON.stringify({version:2,heartbeats:i})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Go(i){Ye(new Se("platform-logger",e=>new no(e),"PRIVATE")),Ye(new Se("heartbeat",e=>new Wo(e),"PRIVATE")),fe(Bt,bi,i),fe(Bt,bi,"esm2017"),fe("fire-js","")}Go("");var Ko="firebase",Yo="9.12.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */fe(Ko,Yo,"app");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}D.UNAUTHENTICATED=new D(null),D.GOOGLE_CREDENTIALS=new D("google-credentials-uid"),D.FIRST_PARTY=new D("first-party-uid"),D.MOCK_USER=new D("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ve="9.12.1";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pe=new ar("@firebase/firestore");function J(i,...e){if(pe.logLevel<=g.DEBUG){const t=e.map(qt);pe.debug(`Firestore (${ve}): ${i}`,...t)}}function nt(i,...e){if(pe.logLevel<=g.ERROR){const t=e.map(qt);pe.error(`Firestore (${ve}): ${i}`,...t)}}function fr(i,...e){if(pe.logLevel<=g.WARN){const t=e.map(qt);pe.warn(`Firestore (${ve}): ${i}`,...t)}}function qt(i){if(typeof i=="string")return i;try{return e=i,JSON.stringify(e)}catch{return i}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function v(i="Unexpected state"){const e=`FIRESTORE (${ve}) INTERNAL ASSERTION FAILED: `+i;throw nt(e),new Error(e)}function N(i,e){i||v()}function Re(i,e){return i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ti="ok",Gt="cancelled",me="unknown",f="invalid-argument",mr="deadline-exceeded",pr="not-found",Qo="already-exists",gr="permission-denied",Qe="unauthenticated",_r="resource-exhausted",ee="failed-precondition",Kt="aborted",vr="out-of-range",Yt="unimplemented",yr="internal",br="unavailable",Xo="data-loss";class c extends _e{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qt{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wr{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Zo{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(D.UNAUTHENTICATED))}shutdown(){}}class Jo{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class es{constructor(e){this.auth=null,e.onInit(t=>{this.auth=t})}getToken(){return this.auth?this.auth.getToken().then(e=>e?(N(typeof e.accessToken=="string"),new wr(e.accessToken,new D(this.auth.getUid()))):null):Promise.resolve(null)}invalidateToken(){}start(e,t){}shutdown(){}}class ts{constructor(e,t,r,n){this.t=e,this.i=t,this.o=r,this.u=n,this.type="FirstParty",this.user=D.FIRST_PARTY,this.h=new Map}l(){return this.u?this.u():(N(!(typeof this.t!="object"||this.t===null||!this.t.auth||!this.t.auth.getAuthHeaderValueForFirstParty)),this.t.auth.getAuthHeaderValueForFirstParty([]))}get headers(){this.h.set("X-Goog-AuthUser",this.i);const e=this.l();return e&&this.h.set("Authorization",e),this.o&&this.h.set("X-Goog-Iam-Authorization-Token",this.o),this.h}}class is{constructor(e,t,r,n){this.t=e,this.i=t,this.o=r,this.u=n}getToken(){return Promise.resolve(new ts(this.t,this.i,this.o,this.u))}start(e,t){e.enqueueRetryable(()=>t(D.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class rs{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class ns{constructor(e){this.m=e,this.appCheck=null,e.onInit(t=>{this.appCheck=t})}getToken(){return this.appCheck?this.appCheck.getToken().then(e=>e?(N(typeof e.token=="string"),new rs(e.token)):null):Promise.resolve(null)}invalidateToken(){}start(e,t){}shutdown(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class os{constructor(e,t,r,n,o,s,a,h){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=n,this.ssl=o,this.forceLongPolling=s,this.autoDetectLongPolling=a,this.useFetchStreams=h}}class Ce{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new Ce("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Ce&&e.projectId===this.projectId&&e.database===this.database}}class Ae{constructor(e,t,r){t===void 0?t=0:t>e.length&&v(),r===void 0?r=e.length-t:r>e.length-t&&v(),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return Ae.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Ae?e.forEach(r=>{t.push(r)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let n=0;n<r;n++){const o=e.get(n),s=t.get(n);if(o<s)return-1;if(o>s)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class E extends Ae{construct(e,t,r){return new E(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new c(f,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter(n=>n.length>0))}return new E(t)}static emptyPath(){return new E([])}}const ss=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class x extends Ae{construct(e,t,r){return new x(e,t,r)}static isValidIdentifier(e){return ss.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),x.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new x(["__name__"])}static fromServerFormat(e){const t=[];let r="",n=0;const o=()=>{if(r.length===0)throw new c(f,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let s=!1;for(;n<e.length;){const a=e[n];if(a==="\\"){if(n+1===e.length)throw new c(f,"Path has trailing escape character: "+e);const h=e[n+1];if(h!=="\\"&&h!=="."&&h!=="`")throw new c(f,"Path has invalid escape sequence: "+e);r+=h,n+=2}else a==="`"?(s=!s,n++):a!=="."||s?(r+=a,n++):(o(),n++)}if(o(),s)throw new c(f,"Unterminated ` in path: "+e);return new x(t)}static emptyPath(){return new x([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T{constructor(e){this.path=e}static fromPath(e){return new T(E.fromString(e))}static fromName(e){return new T(E.fromString(e).popFirst(5))}static empty(){return new T(E.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&E.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return E.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new T(new E(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Er(i,e,t){if(!t)throw new c(f,`Function ${i}() cannot be called with an empty ${e}.`)}function Ci(i){if(!T.isDocumentKey(i))throw new c(f,`Invalid document reference. Document references must have an even number of segments, but ${i} has ${i.length}.`)}function Ai(i){if(T.isDocumentKey(i))throw new c(f,`Invalid collection reference. Collection references must have an odd number of segments, but ${i} has ${i.length}.`)}function ot(i){if(i===void 0)return"undefined";if(i===null)return"null";if(typeof i=="string")return i.length>20&&(i=`${i.substring(0,20)}...`),JSON.stringify(i);if(typeof i=="number"||typeof i=="boolean")return""+i;if(typeof i=="object"){if(i instanceof Array)return"an array";{const e=function(t){return t.constructor?t.constructor.name:null}(i);return e?`a custom ${e} object`:"an object"}}return typeof i=="function"?"a function":v()}function ye(i,e){if("_delegate"in i&&(i=i._delegate),!(i instanceof e)){if(e.name===i.constructor.name)throw new c(f,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=ot(i);throw new c(f,`Expected type '${e.name}', but it was: ${t}`)}}return i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sr(i){return i==null}function Xe(i){return i===0&&1/i==-1/0}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const as={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ii,p;function Di(i){if(i===void 0)return nt("RPC_ERROR","HTTP error has no status"),me;switch(i){case 200:return Ti;case 400:return ee;case 401:return Qe;case 403:return gr;case 404:return pr;case 409:return Kt;case 416:return vr;case 429:return _r;case 499:return Gt;case 500:return me;case 501:return Yt;case 503:return br;case 504:return mr;default:return i>=200&&i<300?Ti:i>=400&&i<500?ee:i>=500&&i<600?yr:me}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(p=Ii||(Ii={}))[p.OK=0]="OK",p[p.CANCELLED=1]="CANCELLED",p[p.UNKNOWN=2]="UNKNOWN",p[p.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",p[p.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",p[p.NOT_FOUND=5]="NOT_FOUND",p[p.ALREADY_EXISTS=6]="ALREADY_EXISTS",p[p.PERMISSION_DENIED=7]="PERMISSION_DENIED",p[p.UNAUTHENTICATED=16]="UNAUTHENTICATED",p[p.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",p[p.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",p[p.ABORTED=10]="ABORTED",p[p.OUT_OF_RANGE=11]="OUT_OF_RANGE",p[p.UNIMPLEMENTED=12]="UNIMPLEMENTED",p[p.INTERNAL=13]="INTERNAL",p[p.UNAVAILABLE=14]="UNAVAILABLE",p[p.DATA_LOSS=15]="DATA_LOSS";class hs extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http";this.p=t+"://"+e.host,this.g="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get v(){return!1}I(e,t,r,n,o){const s=this.T(e,t);J("RestConnection","Sending: ",s,r);const a={};return this.A(a,n,o),this.R(e,s,a,r).then(h=>(J("RestConnection","Received: ",h),h),h=>{throw fr("RestConnection",`${e} failed with error: `,h,"url: ",s,"request:",r),h})}P(e,t,r,n,o,s){return this.I(e,t,r,n,o)}A(e,t,r){e["X-Goog-Api-Client"]="gl-js/ fire/"+ve,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((n,o)=>e[o]=n),r&&r.headers.forEach((n,o)=>e[o]=n)}T(e,t){const r=as[e];return`${this.p}/v1/${t}:${r}`}}{constructor(e,t){super(e),this.V=t}N(e,t){throw new Error("Not supported by FetchConnection")}async R(e,t,r,n){const o=JSON.stringify(n);let s;try{s=await this.V(t,{method:"POST",headers:r,body:o})}catch(a){throw new c(Di(a.status),"Request failed with error: "+a.statusText)}if(!s.ok)throw new c(Di(s.status),"Request failed with error: "+s.statusText);return s.json()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function us(i){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(i);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<i;r++)t[r]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cs{static D(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const n=us(40);for(let o=0;o<n.length;++o)r.length<20&&n[o]<t&&(r+=e.charAt(n[o]%e.length))}return r}}function S(i,e){return i<e?-1:i>e?1:0}function Tr(i,e,t){return i.length===e.length&&i.every((r,n)=>t(r,e[n]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new c(f,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new c(f,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new c(f,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new c(f,"Timestamp seconds out of range: "+e)}static now(){return A.fromMillis(Date.now())}static fromDate(e){return A.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*t));return new A(t,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?S(this.nanoseconds,e.nanoseconds):S(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O{constructor(e){this.timestamp=e}static fromTimestamp(e){return new O(e)}static min(){return new O(new A(0,0))}static max(){return new O(new A(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oi(i){let e=0;for(const t in i)Object.prototype.hasOwnProperty.call(i,t)&&e++;return e}function xe(i,e){for(const t in i)Object.prototype.hasOwnProperty.call(i,t)&&e(t,i[t])}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ze{constructor(e,t){this.comparator=e,this.root=t||C.EMPTY}insert(e,t){return new Ze(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,C.BLACK,null,null))}remove(e){return new Ze(this.comparator,this.root.remove(e,this.comparator).copy(null,null,C.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const n=this.comparator(e,r.key);if(n===0)return t+r.left.size;n<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,r)=>(e(t,r),!1))}toString(){const e=[];return this.inorderTraversal((t,r)=>(e.push(`${t}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Fe(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Fe(this.root,e,this.comparator,!1)}getReverseIterator(){return new Fe(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Fe(this.root,e,this.comparator,!0)}}class Fe{constructor(e,t,r,n){this.isReverse=n,this.nodeStack=[];let o=1;for(;!e.isEmpty();)if(o=t?r(e.key,t):1,t&&n&&(o*=-1),o<0)e=this.isReverse?e.left:e.right;else{if(o===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class C{constructor(e,t,r,n,o){this.key=e,this.value=t,this.color=r!=null?r:C.RED,this.left=n!=null?n:C.EMPTY,this.right=o!=null?o:C.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,n,o){return new C(e!=null?e:this.key,t!=null?t:this.value,r!=null?r:this.color,n!=null?n:this.left,o!=null?o:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let n=this;const o=r(e,n.key);return n=o<0?n.copy(null,null,null,n.left.insert(e,t,r),null):o===0?n.copy(null,t,null,null,null):n.copy(null,null,null,null,n.right.insert(e,t,r)),n.fixUp()}removeMin(){if(this.left.isEmpty())return C.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,n=this;if(t(e,n.key)<0)n.left.isEmpty()||n.left.isRed()||n.left.left.isRed()||(n=n.moveRedLeft()),n=n.copy(null,null,null,n.left.remove(e,t),null);else{if(n.left.isRed()&&(n=n.rotateRight()),n.right.isEmpty()||n.right.isRed()||n.right.left.isRed()||(n=n.moveRedRight()),t(e,n.key)===0){if(n.right.isEmpty())return C.EMPTY;r=n.right.min(),n=n.copy(r.key,r.value,null,null,n.right.removeMin())}n=n.copy(null,null,null,null,n.right.remove(e,t))}return n.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,C.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,C.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw v();const e=this.left.check();if(e!==this.right.check())throw v();return e+(this.isRed()?0:1)}}C.EMPTY=null,C.RED=!0,C.BLACK=!1;C.EMPTY=new class{constructor(){this.size=0}get key(){throw v()}get value(){throw v()}get color(){throw v()}get left(){throw v()}get right(){throw v()}copy(i,e,t,r,n){return this}insert(i,e,t){return new C(i,e)}remove(i,e){return this}isEmpty(){return!0}inorderTraversal(i){return!1}reverseTraversal(i){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Je{constructor(e){this.comparator=e,this.data=new Ze(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,r)=>(e(t),!1))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const n=r.getNext();if(this.comparator(n.key,e[1])>=0)return;t(n.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Ri(this.data.getIterator())}getIteratorFrom(e){return new Ri(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(r=>{t=t.add(r)}),t}isEqual(e){if(!(e instanceof Je)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const n=t.getNext().key,o=r.getNext().key;if(this.comparator(n,o)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new Je(this.comparator);return t.data=e,t}}class Ri{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class te{constructor(e){this.fields=e,e.sort(x.comparator)}static empty(){return new te([])}unionWith(e){let t=new Je(x.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new te(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Tr(this.fields,e.fields,(t,r)=>t.isEqual(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H{constructor(e){this.binaryString=e}static fromBase64String(e){const t=atob(e);return new H(t)}static fromUint8Array(e){const t=function(r){let n="";for(let o=0;o<r.length;++o)n+=String.fromCharCode(r[o]);return n}(e);return new H(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const t=new Uint8Array(e.length);for(let r=0;r<e.length;r++)t[r]=e.charCodeAt(r);return t}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return S(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}H.EMPTY_BYTE_STRING=new H("");const ls=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ie(i){if(N(!!i),typeof i=="string"){let e=0;const t=ls.exec(i);if(N(!!t),t[1]){let n=t[1];n=(n+"000000000").substr(0,9),e=Number(n)}const r=new Date(i);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:w(i.seconds),nanos:w(i.nanos)}}function w(i){return typeof i=="number"?i:typeof i=="string"?Number(i):0}function Ie(i){return typeof i=="string"?H.fromBase64String(i):H.fromUint8Array(i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cr(i){var e,t;return((t=(((e=i==null?void 0:i.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="server_timestamp"}function Ar(i){const e=i.mapValue.fields.__previous_value__;return Cr(e)?Ar(e):e}function De(i){const e=ie(i.mapValue.fields.__local_write_time__.timestampValue);return new A(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $e={fields:{__type__:{stringValue:"__max__"}}};function re(i){return"nullValue"in i?0:"booleanValue"in i?1:"integerValue"in i||"doubleValue"in i?2:"timestampValue"in i?3:"stringValue"in i?5:"bytesValue"in i?6:"referenceValue"in i?7:"geoPointValue"in i?8:"arrayValue"in i?9:"mapValue"in i?Cr(i)?4:function(e){return(((e.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}(i)?9007199254740991:10:v()}function et(i,e){if(i===e)return!0;const t=re(i);if(t!==re(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return i.booleanValue===e.booleanValue;case 4:return De(i).isEqual(De(e));case 3:return function(r,n){if(typeof r.timestampValue=="string"&&typeof n.timestampValue=="string"&&r.timestampValue.length===n.timestampValue.length)return r.timestampValue===n.timestampValue;const o=ie(r.timestampValue),s=ie(n.timestampValue);return o.seconds===s.seconds&&o.nanos===s.nanos}(i,e);case 5:return i.stringValue===e.stringValue;case 6:return function(r,n){return Ie(r.bytesValue).isEqual(Ie(n.bytesValue))}(i,e);case 7:return i.referenceValue===e.referenceValue;case 8:return function(r,n){return w(r.geoPointValue.latitude)===w(n.geoPointValue.latitude)&&w(r.geoPointValue.longitude)===w(n.geoPointValue.longitude)}(i,e);case 2:return function(r,n){if("integerValue"in r&&"integerValue"in n)return w(r.integerValue)===w(n.integerValue);if("doubleValue"in r&&"doubleValue"in n){const o=w(r.doubleValue),s=w(n.doubleValue);return o===s?Xe(o)===Xe(s):isNaN(o)&&isNaN(s)}return!1}(i,e);case 9:return Tr(i.arrayValue.values||[],e.arrayValue.values||[],et);case 10:return function(r,n){const o=r.mapValue.fields||{},s=n.mapValue.fields||{};if(Oi(o)!==Oi(s))return!1;for(const a in o)if(o.hasOwnProperty(a)&&(s[a]===void 0||!et(o[a],s[a])))return!1;return!0}(i,e);default:return v()}}function Oe(i,e){return(i.values||[]).find(t=>et(t,e))!==void 0}function tt(i,e){if(i===e)return 0;const t=re(i),r=re(e);if(t!==r)return S(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return S(i.booleanValue,e.booleanValue);case 2:return function(n,o){const s=w(n.integerValue||n.doubleValue),a=w(o.integerValue||o.doubleValue);return s<a?-1:s>a?1:s===a?0:isNaN(s)?isNaN(a)?0:-1:1}(i,e);case 3:return xi(i.timestampValue,e.timestampValue);case 4:return xi(De(i),De(e));case 5:return S(i.stringValue,e.stringValue);case 6:return function(n,o){const s=Ie(n),a=Ie(o);return s.compareTo(a)}(i.bytesValue,e.bytesValue);case 7:return function(n,o){const s=n.split("/"),a=o.split("/");for(let h=0;h<s.length&&h<a.length;h++){const u=S(s[h],a[h]);if(u!==0)return u}return S(s.length,a.length)}(i.referenceValue,e.referenceValue);case 8:return function(n,o){const s=S(w(n.latitude),w(o.latitude));return s!==0?s:S(w(n.longitude),w(o.longitude))}(i.geoPointValue,e.geoPointValue);case 9:return function(n,o){const s=n.values||[],a=o.values||[];for(let h=0;h<s.length&&h<a.length;++h){const u=tt(s[h],a[h]);if(u)return u}return S(s.length,a.length)}(i.arrayValue,e.arrayValue);case 10:return function(n,o){if(n===$e&&o===$e)return 0;if(n===$e)return 1;if(o===$e)return-1;const s=n.fields||{},a=Object.keys(s),h=o.fields||{},u=Object.keys(h);a.sort(),u.sort();for(let d=0;d<a.length&&d<u.length;++d){const l=S(a[d],u[d]);if(l!==0)return l;const m=tt(s[a[d]],h[u[d]]);if(m!==0)return m}return S(a.length,u.length)}(i.mapValue,e.mapValue);default:throw v()}}function xi(i,e){if(typeof i=="string"&&typeof e=="string"&&i.length===e.length)return S(i,e);const t=ie(i),r=ie(e),n=S(t.seconds,r.seconds);return n!==0?n:S(t.nanos,r.nanos)}function Bi(i,e){return{referenceValue:`projects/${i.projectId}/databases/${i.database}/documents/${e.path.canonicalString()}`}}function Ir(i){return!!i&&"arrayValue"in i}function Ni(i){return!!i&&"nullValue"in i}function Pi(i){return!!i&&"doubleValue"in i&&isNaN(Number(i.doubleValue))}function Et(i){return!!i&&"mapValue"in i}function we(i){if(i.geoPointValue)return{geoPointValue:Object.assign({},i.geoPointValue)};if(i.timestampValue&&typeof i.timestampValue=="object")return{timestampValue:Object.assign({},i.timestampValue)};if(i.mapValue){const e={mapValue:{fields:{}}};return xe(i.mapValue.fields,(t,r)=>e.mapValue.fields[t]=we(r)),e}if(i.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(i.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=we(i.arrayValue.values[t]);return e}return Object.assign({},i)}class B{constructor(e){this.value=e}static empty(){return new B({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!Et(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=we(t)}setAll(e){let t=x.emptyPath(),r={},n=[];e.forEach((s,a)=>{if(!t.isImmediateParentOf(a)){const h=this.getFieldsMap(t);this.applyChanges(h,r,n),r={},n=[],t=a.popLast()}s?r[a.lastSegment()]=we(s):n.push(a.lastSegment())});const o=this.getFieldsMap(t);this.applyChanges(o,r,n)}delete(e){const t=this.field(e.popLast());Et(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return et(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let n=t.mapValue.fields[e.get(r)];Et(n)&&n.mapValue.fields||(n={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=n),t=n}return t.mapValue.fields}applyChanges(e,t,r){xe(t,(n,o)=>e[n]=o);for(const n of r)delete e[n]}clone(){return new B(we(this.value))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M{constructor(e,t,r,n,o,s){this.key=e,this.documentType=t,this.version=r,this.readTime=n,this.data=o,this.documentState=s}static newInvalidDocument(e){return new M(e,0,O.min(),O.min(),B.empty(),0)}static newFoundDocument(e,t,r){return new M(e,1,t,O.min(),r,0)}static newNoDocument(e,t){return new M(e,2,t,O.min(),B.empty(),0)}static newUnknownDocument(e,t){return new M(e,3,t,O.min(),B.empty(),2)}convertToFoundDocument(e,t){return this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=B.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=B.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=O.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof M&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new M(this.key,this.documentType,this.version,this.readTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ds{constructor(e,t=null,r=[],n=[],o=null,s=null,a=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=n,this.limit=o,this.startAt=s,this.endAt=a,this.$=null}}function ki(i,e=null,t=[],r=[],n=null,o=null,s=null){return new ds(i,e,t,r,n,o,s)}class V extends class{}{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.F(e,t,r):new fs(e,t,r):t==="array-contains"?new gs(e,r):t==="in"?new _s(e,r):t==="not-in"?new vs(e,r):t==="array-contains-any"?new ys(e,r):new V(e,t,r)}static F(e,t,r){return t==="in"?new ms(e,r):new ps(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&this.S(tt(t,this.value)):t!==null&&re(this.value)===re(t)&&this.S(tt(t,this.value))}S(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return v()}}q(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}class fs extends V{constructor(e,t,r){super(e,t,r),this.key=T.fromName(r.referenceValue)}matches(e){const t=T.comparator(e.key,this.key);return this.S(t)}}class ms extends V{constructor(e,t){super(e,"in",t),this.keys=Dr("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class ps extends V{constructor(e,t){super(e,"not-in",t),this.keys=Dr("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function Dr(i,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(r=>T.fromName(r.referenceValue))}class gs extends V{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Ir(t)&&Oe(t.arrayValue,this.value)}}class _s extends V{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&Oe(this.value.arrayValue,t)}}class vs extends V{constructor(e,t){super(e,"not-in",t)}matches(e){if(Oe(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&!Oe(this.value.arrayValue,t)}}class ys extends V{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Ir(t)||!t.arrayValue.values)&&t.arrayValue.values.some(r=>Oe(this.value.arrayValue,r))}}class Li{constructor(e,t){this.position=e,this.inclusive=t}}class We{constructor(e,t="asc"){this.field=e,this.dir=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Or{constructor(e,t=null,r=[],n=[],o=null,s="F",a=null,h=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=n,this.limit=o,this.limitType=s,this.startAt=a,this.endAt=h,this.O=null,this.k=null,this.startAt,this.endAt}}function Rr(i){return i.explicitOrderBy.length>0?i.explicitOrderBy[0].field:null}function xr(i){for(const e of i.filters)if(e.q())return e.field;return null}function bs(i){return i.collectionGroup!==null}function Fi(i){const e=Re(i);if(e.O===null){e.O=[];const t=xr(e),r=Rr(e);if(t!==null&&r===null)t.isKeyField()||e.O.push(new We(t)),e.O.push(new We(x.keyField(),"asc"));else{let n=!1;for(const o of e.explicitOrderBy)e.O.push(o),o.field.isKeyField()&&(n=!0);if(!n){const o=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.O.push(new We(x.keyField(),o))}}}return e.O}function ws(i){const e=Re(i);if(!e.k)if(e.limitType==="F")e.k=ki(e.path,e.collectionGroup,Fi(e),e.filters,e.limit,e.startAt,e.endAt);else{const t=[];for(const o of Fi(e)){const s=o.dir==="desc"?"asc":"desc";t.push(new We(o.field,s))}const r=e.endAt?new Li(e.endAt.position,e.endAt.inclusive):null,n=e.startAt?new Li(e.startAt.position,e.startAt.inclusive):null;e.k=ki(e.path,e.collectionGroup,t,e.filters,e.limit,r,n)}return e.k}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Es(i,e){return function(t){return typeof t=="number"&&Number.isInteger(t)&&!Xe(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}(e)?function(t){return{integerValue:""+t}}(e):function(t,r){if(t.C){if(isNaN(r))return{doubleValue:"NaN"};if(r===1/0)return{doubleValue:"Infinity"};if(r===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Xe(r)?"-0":r}}(i,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class st{constructor(){this._=void 0}}class Br extends st{}class Ss extends st{constructor(e){super(),this.elements=e}}class Ts extends st{constructor(e){super(),this.elements=e}}class Cs extends st{constructor(e,t){super(),this.L=e,this.M=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class As{constructor(e,t){this.field=e,this.transform=t}}class k{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new k}static exists(e){return new k(void 0,e)}static updateTime(e){return new k(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}class at{}class Nr extends at{constructor(e,t,r,n=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=n,this.type=0}getFieldMask(){return null}}class Xt extends at{constructor(e,t,r,n,o=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=n,this.fieldTransforms=o,this.type=1}getFieldMask(){return this.fieldMask}}class Zt extends at{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Pr extends at{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Is=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),Ds=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))();class Os{constructor(e,t){this.databaseId=e,this.C=t}}function kt(i,e){return i.C?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Rs(i,e){return i.C?e.toBase64():e.toUint8Array()}function xs(i,e){return kt(i,e.toTimestamp())}function Lt(i){return N(!!i),O.fromTimestamp(function(e){const t=ie(e);return new A(t.seconds,t.nanos)}(i))}function Jt(i,e){return function(t){return new E(["projects",t.projectId,"databases",t.database])}(i).child("documents").child(e).canonicalString()}function it(i,e){return Jt(i.databaseId,e.path)}function Ft(i,e){const t=function(n){const o=E.fromString(n);return N(Lr(o)),o}(e);if(t.get(1)!==i.databaseId.projectId)throw new c(f,"Tried to deserialize key from different project: "+t.get(1)+" vs "+i.databaseId.projectId);if(t.get(3)!==i.databaseId.database)throw new c(f,"Tried to deserialize key from different database: "+t.get(3)+" vs "+i.databaseId.database);return new T((N((r=t).length>4&&r.get(4)==="documents"),r.popFirst(5)));var r}function $i(i,e){return Jt(i.databaseId,e)}function kr(i){return new E(["projects",i.databaseId.projectId,"databases",i.databaseId.database]).canonicalString()}function Mi(i,e,t){return{name:it(i,e),fields:t.value.mapValue.fields}}function Bs(i,e){return"found"in e?function(t,r){N(!!r.found),r.found.name,r.found.updateTime;const n=Ft(t,r.found.name),o=Lt(r.found.updateTime),s=new B({mapValue:{fields:r.found.fields}});return M.newFoundDocument(n,o,s)}(i,e):"missing"in e?function(t,r){N(!!r.missing),N(!!r.readTime);const n=Ft(t,r.missing),o=Lt(r.readTime);return M.newNoDocument(n,o)}(i,e):v()}function Ns(i,e){let t;if(e instanceof Nr)t={update:Mi(i,e.key,e.value)};else if(e instanceof Zt)t={delete:it(i,e.key)};else if(e instanceof Xt)t={update:Mi(i,e.key,e.data),updateMask:Fs(e.fieldMask)};else{if(!(e instanceof Pr))return v();t={verify:it(i,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(r=>function(n,o){const s=o.transform;if(s instanceof Br)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(s instanceof Ss)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:s.elements}};if(s instanceof Ts)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:s.elements}};if(s instanceof Cs)return{fieldPath:o.field.canonicalString(),increment:s.M};throw v()}(0,r))),e.precondition.isNone||(t.currentDocument=function(r,n){return n.updateTime!==void 0?{updateTime:xs(r,n.updateTime)}:n.exists!==void 0?{exists:n.exists}:v()}(i,e.precondition)),t}function Ps(i,e){const t={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(t.parent=$i(i,r),t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(t.parent=$i(i,r.popLast()),t.structuredQuery.from=[{collectionId:r.lastSegment()}]);const n=function(h){if(h.length===0)return;const u=h.map(d=>function(l){if(l.op==="=="){if(Pi(l.value))return{unaryFilter:{field:se(l.field),op:"IS_NAN"}};if(Ni(l.value))return{unaryFilter:{field:se(l.field),op:"IS_NULL"}}}else if(l.op==="!="){if(Pi(l.value))return{unaryFilter:{field:se(l.field),op:"IS_NOT_NAN"}};if(Ni(l.value))return{unaryFilter:{field:se(l.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:se(l.field),op:Ls(l.op),value:l.value}}}(d));return u.length===1?u[0]:{compositeFilter:{op:"AND",filters:u}}}(e.filters);n&&(t.structuredQuery.where=n);const o=function(h){if(h.length!==0)return h.map(u=>function(d){return{field:se(d.field),direction:ks(d.dir)}}(u))}(e.orderBy);o&&(t.structuredQuery.orderBy=o);const s=function(h,u){return h.C||Sr(u)?u:{value:u}}(i,e.limit);var a;return s!==null&&(t.structuredQuery.limit=s),e.startAt&&(t.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(t.structuredQuery.endAt=function(h){return{before:!h.inclusive,values:h.position}}(e.endAt)),t}function ks(i){return Is[i]}function Ls(i){return Ds[i]}function se(i){return{fieldPath:i.canonicalString()}}function Fs(i){const e=[];return i.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function Lr(i){return i.length>=4&&i.get(0)==="projects"&&i.get(2)==="databases"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ei(i){return new Os(i,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fr{constructor(e,t,r=1e3,n=1.5,o=6e4){this.U=e,this.timerId=t,this.j=r,this.B=n,this.G=o,this.W=0,this.K=null,this.Y=Date.now(),this.reset()}reset(){this.W=0}H(){this.W=this.G}J(e){this.cancel();const t=Math.floor(this.W+this.X()),r=Math.max(0,Date.now()-this.Y),n=Math.max(0,t-r);n>0&&J("ExponentialBackoff",`Backing off for ${n} ms (base delay: ${this.W} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.K=this.U.enqueueAfterDelay(this.timerId,n,()=>(this.Y=Date.now(),e())),this.W*=this.B,this.W<this.j&&(this.W=this.j),this.W>this.G&&(this.W=this.G)}Z(){this.K!==null&&(this.K.skipDelay(),this.K=null)}cancel(){this.K!==null&&(this.K.cancel(),this.K=null)}X(){return(Math.random()-.5)*this.W}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $s extends class{}{constructor(e,t,r,n){super(),this.authCredentials=e,this.appCheckCredentials=t,this.tt=r,this.L=n,this.et=!1}nt(){if(this.et)throw new c(ee,"The client has already been terminated.")}I(e,t,r){return this.nt(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([n,o])=>this.tt.I(e,t,r,n,o)).catch(n=>{throw n.name==="FirebaseError"?(n.code===Qe&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),n):new c(me,n.toString())})}P(e,t,r,n){return this.nt(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,s])=>this.tt.P(e,t,r,o,s,n)).catch(o=>{throw o.name==="FirebaseError"?(o.code===Qe&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new c(me,o.toString())})}terminate(){this.et=!0}}async function ht(i,e){const t=Re(i),r=kr(t.L)+"/documents",n={writes:e.map(o=>Ns(t.L,o))};await t.I("Commit",r,n)}async function Ms(i,e){const t=Re(i),r=kr(t.L)+"/documents",n={documents:e.map(h=>it(t.L,h))},o=await t.P("BatchGetDocuments",r,n,e.length),s=new Map;o.forEach(h=>{const u=Bs(t.L,h);s.set(u.key.toString(),u)});const a=[];return e.forEach(h=>{const u=s.get(h.toString());N(!!u),a.push(u)}),a}async function Vs(i,e){const t=Re(i),r=Ps(t.L,ws(e));return(await t.P("RunQuery",r.parent,{structuredQuery:r.structuredQuery})).filter(n=>!!n.document).map(n=>function(o,s,a){const h=Ft(o,s.name),u=Lt(s.updateTime),d=new B({mapValue:{fields:s.fields}}),l=M.newFoundDocument(h,u,d);return a&&l.setHasCommittedMutations(),a?l.setHasCommittedMutations():l}(t.L,n.document,void 0))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ee=new Map;function Be(i){if(i._terminated)throw new c(ee,"The client has already been terminated.");if(!Ee.has(i)){J("ComponentProvider","Initializing Datastore");const o=function(h){return new hs(h,fetch.bind(null))}((e=i._databaseId,t=i.app.options.appId||"",r=i._persistenceKey,n=i._freezeSettings(),new os(e,t,r,n.host,n.ssl,n.experimentalForceLongPolling,n.experimentalAutoDetectLongPolling,n.useFetchStreams))),s=ei(i._databaseId),a=function(h,u,d,l){return new $s(h,u,d,l)}(i._authCredentials,i._appCheckCredentials,o,s);Ee.set(i,a)}var e,t,r,n;/**
* @license
* Copyright 2018 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return Ee.get(i)}class Vi{constructor(e){var t;if(e.host===void 0){if(e.ssl!==void 0)throw new c(f,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(t=e.ssl)===null||t===void 0||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new c(f,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,function(r,n,o,s){if(n===!0&&s===!0)throw new c(f,`${r} and ${o} cannot be used together.`)}("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ne{constructor(e,t,r,n){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=n,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Vi({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new c(ee,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new c(ee,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Vi(e),e.credentials!==void 0&&(this._authCredentials=function(t){if(!t)return new Zo;switch(t.type){case"gapi":const r=t.client;return new is(r,t.sessionIndex||"0",t.iamToken||null,t.authTokenFactory||null);case"provider":return t.client;default:throw new c(f,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const t=Ee.get(e);t&&(J("ComponentProvider","Removing Datastore"),Ee.delete(e),t.terminate())}(this),Promise.resolve()}}function zs(i,e){const t=typeof i=="object"?i:$o(),r=typeof i=="string"?i:e||"(default)",n=Po(t,"firestore/lite").getImmediate({identifier:r});if(!n._initialized){const o=Bn("firestore");o&&Hs(n,...o)}return n}function Hs(i,e,t,r={}){var n;const o=(i=ye(i,Ne))._getSettings();if(o.host!=="firestore.googleapis.com"&&o.host!==e&&fr("Host has been set in both settings() and useEmulator(), emulator host will be used"),i._setSettings(Object.assign(Object.assign({},o),{host:`${e}:${t}`,ssl:!1})),r.mockUserToken){let s,a;if(typeof r.mockUserToken=="string")s=r.mockUserToken,a=D.MOCK_USER;else{s=kn(r.mockUserToken,(n=i._app)===null||n===void 0?void 0:n.options.projectId);const h=r.mockUserToken.sub||r.mockUserToken.user_id;if(!h)throw new c(f,"mockUserToken must contain 'sub' or 'user_id' field!");a=new D(h)}i._authCredentials=new Jo(new wr(s,a))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new z(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new R(this.firestore,e,this._key)}}class Pe{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Pe(this.firestore,e,this._query)}}class z extends Pe{constructor(e,t,r){super(e,t,new Or(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new R(this.firestore,null,new T(e))}withConverter(e){return new z(this.firestore,e,this._path)}}function ne(i,e,...t){if(i=F(i),Er("collection","path",e),i instanceof Ne){const r=E.fromString(e,...t);return Ai(r),new z(i,null,r)}{if(!(i instanceof R||i instanceof z))throw new c(f,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=i._path.child(E.fromString(e,...t));return Ai(r),new z(i.firestore,null,r)}}function ut(i,e,...t){if(i=F(i),arguments.length===1&&(e=cs.D()),Er("doc","path",e),i instanceof Ne){const r=E.fromString(e,...t);return Ci(r),new R(i,null,new T(r))}{if(!(i instanceof R||i instanceof z))throw new c(f,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=i._path.child(E.fromString(e,...t));return Ci(r),new R(i.firestore,i instanceof z?i.converter:null,new T(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ge{constructor(e){this._byteString=e}static fromBase64String(e){try{return new ge(H.fromBase64String(e))}catch(t){throw new c(f,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new ge(H.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ke{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new c(f,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new x(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ct{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ti{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new c(f,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new c(f,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return S(this._lat,e._lat)||S(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Us=/^__.*__$/;class Ws{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new Xt(e,this.data,this.fieldMask,t,this.fieldTransforms):new Nr(e,this.data,t,this.fieldTransforms)}}class $r{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return new Xt(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function Mr(i){switch(i){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw v()}}class ii{constructor(e,t,r,n,o,s){this.settings=e,this.databaseId=t,this.L=r,this.ignoreUndefinedProperties=n,o===void 0&&this.rt(),this.fieldTransforms=o||[],this.fieldMask=s||[]}get path(){return this.settings.path}get st(){return this.settings.st}it(e){return new ii(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.L,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ot(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),n=this.it({path:r,ut:!1});return n.ct(e),n}at(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),n=this.it({path:r,ut:!1});return n.rt(),n}ht(e){return this.it({path:void 0,ut:!0})}lt(e){return rt(e,this.settings.methodName,this.settings.ft||!1,this.path,this.settings.dt)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}rt(){if(this.path)for(let e=0;e<this.path.length;e++)this.ct(this.path.get(e))}ct(e){if(e.length===0)throw this.lt("Document fields must not be empty");if(Mr(this.st)&&Us.test(e))throw this.lt('Document fields cannot begin and end with "__"')}}class js{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.L=r||ei(e)}wt(e,t,r,n=!1){return new ii({st:e,methodName:t,dt:r,path:x.emptyPath(),ut:!1,ft:n},this.databaseId,this.L,this.ignoreUndefinedProperties)}}function lt(i){const e=i._freezeSettings(),t=ei(i._databaseId);return new js(i._databaseId,!!e.ignoreUndefinedProperties,t)}function Vr(i,e,t,r,n,o={}){const s=i.wt(o.merge||o.mergeFields?2:0,e,t,n);ni("Data must be an object, but it was:",s,r);const a=Ur(r,s);let h,u;if(o.merge)h=new te(s.fieldMask),u=s.fieldTransforms;else if(o.mergeFields){const d=[];for(const l of o.mergeFields){const m=$t(e,l,t);if(!s.contains(m))throw new c(f,`Field '${m}' is specified in your field mask but missing from your input data.`);jr(d,m)||d.push(m)}h=new te(d),u=s.fieldTransforms.filter(l=>h.covers(l.field))}else h=null,u=s.fieldTransforms;return new Ws(new B(a),h,u)}class dt extends ct{_toFieldTransform(e){if(e.st!==2)throw e.st===1?e.lt(`${this._methodName}() can only appear at the top level of your update data`):e.lt(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof dt}}class ri extends ct{_toFieldTransform(e){return new As(e.path,new Br)}isEqual(e){return e instanceof ri}}function zr(i,e,t,r){const n=i.wt(1,e,t);ni("Data must be an object, but it was:",n,r);const o=[],s=B.empty();xe(r,(h,u)=>{const d=oi(e,h,t);u=F(u);const l=n.at(d);if(u instanceof dt)o.push(d);else{const m=Le(u,l);m!=null&&(o.push(d),s.set(d,m))}});const a=new te(o);return new $r(s,a,n.fieldTransforms)}function Hr(i,e,t,r,n,o){const s=i.wt(1,e,t),a=[$t(e,r,t)],h=[n];if(o.length%2!=0)throw new c(f,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let m=0;m<o.length;m+=2)a.push($t(e,o[m])),h.push(o[m+1]);const u=[],d=B.empty();for(let m=a.length-1;m>=0;--m)if(!jr(u,a[m])){const _=a[m];let y=h[m];y=F(y);const Q=s.at(_);if(y instanceof dt)u.push(_);else{const P=Le(y,Q);P!=null&&(u.push(_),d.set(_,P))}}const l=new te(u);return new $r(d,l,s.fieldTransforms)}function qs(i,e,t,r=!1){return Le(t,i.wt(r?4:3,e))}function Le(i,e){if(Wr(i=F(i)))return ni("Unsupported field value:",e,i),Ur(i,e);if(i instanceof ct)return function(t,r){if(!Mr(r.st))throw r.lt(`${t._methodName}() can only be used with update() and set()`);if(!r.path)throw r.lt(`${t._methodName}() is not currently supported inside arrays`);const n=t._toFieldTransform(r);n&&r.fieldTransforms.push(n)}(i,e),null;if(i===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),i instanceof Array){if(e.settings.ut&&e.st!==4)throw e.lt("Nested arrays are not supported");return function(t,r){const n=[];let o=0;for(const s of t){let a=Le(s,r.ht(o));a==null&&(a={nullValue:"NULL_VALUE"}),n.push(a),o++}return{arrayValue:{values:n}}}(i,e)}return function(t,r){if((t=F(t))===null)return{nullValue:"NULL_VALUE"};if(typeof t=="number")return Es(r.L,t);if(typeof t=="boolean")return{booleanValue:t};if(typeof t=="string")return{stringValue:t};if(t instanceof Date){const n=A.fromDate(t);return{timestampValue:kt(r.L,n)}}if(t instanceof A){const n=new A(t.seconds,1e3*Math.floor(t.nanoseconds/1e3));return{timestampValue:kt(r.L,n)}}if(t instanceof ti)return{geoPointValue:{latitude:t.latitude,longitude:t.longitude}};if(t instanceof ge)return{bytesValue:Rs(r.L,t._byteString)};if(t instanceof R){const n=r.databaseId,o=t.firestore._databaseId;if(!o.isEqual(n))throw r.lt(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:Jt(t.firestore._databaseId||r.databaseId,t._key.path)}}throw r.lt(`Unsupported field value: ${ot(t)}`)}(i,e)}function Ur(i,e){const t={};return function(r){for(const n in r)if(Object.prototype.hasOwnProperty.call(r,n))return!1;return!0}(i)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):xe(i,(r,n)=>{const o=Le(n,e.ot(r));o!=null&&(t[r]=o)}),{mapValue:{fields:t}}}function Wr(i){return!(typeof i!="object"||i===null||i instanceof Array||i instanceof Date||i instanceof A||i instanceof ti||i instanceof ge||i instanceof R||i instanceof ct)}function ni(i,e,t){if(!Wr(t)||!function(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}(t)){const r=ot(t);throw r==="an object"?e.lt(i+" a custom object"):e.lt(i+" "+r)}}function $t(i,e,t){if((e=F(e))instanceof ke)return e._internalPath;if(typeof e=="string")return oi(i,e);throw rt("Field path arguments must be of type string or ",i,!1,void 0,t)}const Gs=new RegExp("[~\\*/\\[\\]]");function oi(i,e,t){if(e.search(Gs)>=0)throw rt(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,i,!1,void 0,t);try{return new ke(...e.split("."))._internalPath}catch{throw rt(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,i,!1,void 0,t)}}function rt(i,e,t,r,n){const o=r&&!r.isEmpty(),s=n!==void 0;let a=`Function ${e}() called with invalid data`;t&&(a+=" (via `toFirestore()`)"),a+=". ";let h="";return(o||s)&&(h+=" (found",o&&(h+=` in field ${r}`),s&&(h+=` in document ${n}`),h+=")"),new c(f,a+i+h)}function jr(i,e){return i.some(t=>t.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mt{constructor(e,t,r,n,o){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=n,this._converter=o}get id(){return this._key.path.lastSegment()}get ref(){return new R(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new qr(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Gr("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class qr extends Mt{data(){return super.data()}}class Ks{constructor(e,t){this._docs=t,this.query=e}get docs(){return[...this._docs]}get size(){return this.docs.length}get empty(){return this.docs.length===0}forEach(e,t){this._docs.forEach(e,t)}}function Gr(i,e){return typeof e=="string"?oi(i,e):e instanceof ke?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ys{}function Qs(i,...e){for(const t of e)i=t._apply(i);return i}class Xs extends Ys{constructor(e,t,r){super(),this.gt=e,this.vt=t,this.bt=r,this.type="where"}_apply(e){const t=lt(e.firestore),r=function(n,o,s,a,h,u,d){let l;if(h.isKeyField()){if(u==="array-contains"||u==="array-contains-any")throw new c(f,`Invalid Query. You can't perform '${u}' queries on documentId().`);if(u==="in"||u==="not-in"){Hi(d,u);const _=[];for(const y of d)_.push(zi(a,n,y));l={arrayValue:{values:_}}}else l=zi(a,n,d)}else u!=="in"&&u!=="not-in"&&u!=="array-contains-any"||Hi(d,u),l=qs(s,o,d,u==="in"||u==="not-in");const m=V.create(h,u,l);return function(_,y){if(y.q()){const P=xr(_);if(P!==null&&!P.isEqual(y.field))throw new c(f,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${P.toString()}' and '${y.field.toString()}'`);const I=Rr(_);I!==null&&Js(_,y.field,I)}const Q=function(P,I){for(const oe of P.filters)if(I.indexOf(oe.op)>=0)return oe.op;return null}(_,function(P){switch(P){case"!=":return["!=","not-in"];case"array-contains":return["array-contains","array-contains-any","not-in"];case"in":return["array-contains-any","in","not-in"];case"array-contains-any":return["array-contains","array-contains-any","in","not-in"];case"not-in":return["array-contains","array-contains-any","in","not-in","!="];default:return[]}}(y.op));if(Q!==null)throw Q===y.op?new c(f,`Invalid query. You cannot use more than one '${y.op.toString()}' filter.`):new c(f,`Invalid query. You cannot use '${y.op.toString()}' filters with '${Q.toString()}' filters.`)}(n,m),m}(e._query,"where",t,e.firestore._databaseId,this.gt,this.vt,this.bt);return new Pe(e.firestore,e.converter,function(n,o){const s=n.filters.concat([o]);return new Or(n.path,n.collectionGroup,n.explicitOrderBy.slice(),s,n.limit,n.limitType,n.startAt,n.endAt)}(e._query,r))}}function Zs(i,e,t){const r=e,n=Gr("where",i);return new Xs(n,r,t)}function zi(i,e,t){if(typeof(t=F(t))=="string"){if(t==="")throw new c(f,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!bs(e)&&t.indexOf("/")!==-1)throw new c(f,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const r=e.path.child(E.fromString(t));if(!T.isDocumentKey(r))throw new c(f,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Bi(i,new T(r))}if(t instanceof R)return Bi(i,t._key);throw new c(f,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${ot(t)}.`)}function Hi(i,e){if(!Array.isArray(i)||i.length===0)throw new c(f,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`);if(i.length>10)throw new c(f,`Invalid Query. '${e.toString()}' filters support a maximum of 10 elements in the value array.`)}function Js(i,e,t){if(!t.isEqual(e))throw new c(f,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${t.toString()}' instead.`)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kr(i,e,t){let r;return r=i?t&&(t.merge||t.mergeFields)?i.toFirestore(e,t):i.toFirestore(e):e,r}class Yr extends class{convertValue(e,t="none"){switch(re(e)){case 0:return null;case 1:return e.booleanValue;case 2:return w(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Ie(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 10:return this.convertObject(e.mapValue,t);default:throw v()}}convertObject(e,t){const r={};return xe(e.fields,(n,o)=>{r[n]=this.convertValue(o,t)}),r}convertGeoPoint(e){return new ti(w(e.latitude),w(e.longitude))}convertArray(e,t){return(e.values||[]).map(r=>this.convertValue(r,t))}convertServerTimestamp(e,t){switch(t){case"previous":const r=Ar(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(De(e));default:return null}}convertTimestamp(e){const t=ie(e);return new A(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=E.fromString(e);N(Lr(r));const n=new Ce(r.get(1),r.get(3)),o=new T(r.popFirst(5));return n.isEqual(t)||nt(`Document ${o} contains a document reference within a different database (${n.projectId}/${n.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),o}}{constructor(e){super(),this.firestore=e}convertBytes(e){return new ge(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new R(this.firestore,null,t)}}function Vt(i){(function(r){if(r.limitType==="L"&&r.explicitOrderBy.length===0)throw new c(Yt,"limitToLast() queries require specifying at least one orderBy() clause")})((i=ye(i,Pe))._query);const e=Be(i.firestore),t=new Yr(i.firestore);return Vs(e,i._query).then(r=>{const n=r.map(o=>new qr(i.firestore,t,o.key,o,i.converter));return i._query.limitType==="L"&&n.reverse(),new Ks(i,n)})}function ea(i,e,t,...r){const n=lt((i=ye(i,R)).firestore);let o;return o=typeof(e=F(e))=="string"||e instanceof ke?Hr(n,"updateDoc",i._key,e,t,r):zr(n,"updateDoc",i._key,e),ht(Be(i.firestore),[o.toMutation(i._key,k.exists(!0))])}function ta(i){return ht(Be((i=ye(i,R)).firestore),[new Zt(i._key,k.none())])}function ia(i,e){const t=ut(i=ye(i,z)),r=Kr(i.converter,e),n=Vr(lt(i.firestore),"addDoc",t._key,r,t.converter!==null,{});return ht(Be(i.firestore),[n.toMutation(t._key,k.exists(!1))]).then(()=>t)}function nh(){return new ri("serverTimestamp")}function Me(i,e){if((i=F(i)).firestore!==e)throw new c(f,"Provided document reference is from a different Firestore instance.");return i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ra{constructor(e){this.datastore=e,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastWriteError=null,this.writtenDocs=new Set}async lookup(e){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw new c(f,"Firestore transactions require all reads to be executed before all writes.");const t=await Ms(this.datastore,e);return t.forEach(r=>this.recordVersion(r)),t}set(e,t){this.write(t.toMutation(e,this.precondition(e))),this.writtenDocs.add(e.toString())}update(e,t){try{this.write(t.toMutation(e,this.preconditionForUpdate(e)))}catch(r){this.lastWriteError=r}this.writtenDocs.add(e.toString())}delete(e){this.write(new Zt(e,this.precondition(e))),this.writtenDocs.add(e.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastWriteError)throw this.lastWriteError;const e=this.readVersions;this.mutations.forEach(t=>{e.delete(t.key.toString())}),e.forEach((t,r)=>{const n=T.fromPath(r);this.mutations.push(new Pr(n,this.precondition(n)))}),await ht(this.datastore,this.mutations),this.committed=!0}recordVersion(e){let t;if(e.isFoundDocument())t=e.version;else{if(!e.isNoDocument())throw v();t=O.min()}const r=this.readVersions.get(e.key.toString());if(r){if(!t.isEqual(r))throw new c(Kt,"Document version changed between two reads.")}else this.readVersions.set(e.key.toString(),t)}precondition(e){const t=this.readVersions.get(e.toString());return!this.writtenDocs.has(e.toString())&&t?t.isEqual(O.min())?k.exists(!1):k.updateTime(t):k.none()}preconditionForUpdate(e){const t=this.readVersions.get(e.toString());if(!this.writtenDocs.has(e.toString())&&t){if(t.isEqual(O.min()))throw new c(f,"Can't update a document that doesn't exist.");return k.updateTime(t)}return k.exists(!0)}write(e){this.ensureCommitNotCalled(),this.mutations.push(e)}ensureCommitNotCalled(){}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const na={maxAttempts:5};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oa{constructor(e,t,r,n,o){this.asyncQueue=e,this.datastore=t,this.options=r,this.updateFunction=n,this.deferred=o,this.Pt=r.maxAttempts,this.Vt=new Fr(this.asyncQueue,"transaction_retry")}run(){this.Pt-=1,this.Nt()}Nt(){this.Vt.J(async()=>{const e=new ra(this.datastore),t=this.Dt(e);t&&t.then(r=>{this.asyncQueue.enqueueAndForget(()=>e.commit().then(()=>{this.deferred.resolve(r)}).catch(n=>{this.$t(n)}))}).catch(r=>{this.$t(r)})})}Dt(e){try{const t=this.updateFunction(e);return!Sr(t)&&t.catch&&t.then?t:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(t){return this.deferred.reject(t),null}}$t(e){this.Pt>0&&this.xt(e)?(this.Pt-=1,this.asyncQueue.enqueueAndForget(()=>(this.Nt(),Promise.resolve()))):this.deferred.reject(e)}xt(e){if(e.name==="FirebaseError"){const t=e.code;return t==="aborted"||t==="failed-precondition"||!function(r){switch(r){default:return v();case Gt:case me:case mr:case _r:case yr:case br:case Qe:return!1;case f:case pr:case Qo:case gr:case ee:case Kt:case vr:case Yt:case Xo:return!0}}(t)}return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function St(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class si{constructor(e,t,r,n,o){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=n,this.removalCallback=o,this.deferred=new Qt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(s=>{})}static createAndSchedule(e,t,r,n,o){const s=Date.now()+r,a=new si(e,t,s,n,o);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new c(Gt,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sa{constructor(){this.Ft=Promise.resolve(),this.St=[],this.qt=!1,this.Ot=[],this.kt=null,this.Ct=!1,this.Lt=!1,this.Mt=[],this.Vt=new Fr(this,"async_queue_retry"),this.Ut=()=>{const t=St();t&&J("AsyncQueue","Visibility state changed to "+t.visibilityState),this.Vt.Z()};const e=St();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Ut)}get isShuttingDown(){return this.qt}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.jt(),this.Bt(e)}enterRestrictedMode(e){if(!this.qt){this.qt=!0,this.Lt=e||!1;const t=St();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.Ut)}}enqueue(e){if(this.jt(),this.qt)return new Promise(()=>{});const t=new Qt;return this.Bt(()=>this.qt&&this.Lt?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.St.push(e),this.Qt()))}async Qt(){if(this.St.length!==0){try{await this.St[0](),this.St.shift(),this.Vt.reset()}catch(e){if(!function(t){return t.name==="IndexedDbTransactionError"}(e))throw e;J("AsyncQueue","Operation failed with retryable error: "+e)}this.St.length>0&&this.Vt.J(()=>this.Qt())}}Bt(e){const t=this.Ft.then(()=>(this.Ct=!0,e().catch(r=>{this.kt=r,this.Ct=!1;const n=function(o){let s=o.message||"";return o.stack&&(s=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),s}(r);throw nt("INTERNAL UNHANDLED ERROR: ",n),r}).then(r=>(this.Ct=!1,r))));return this.Ft=t,t}enqueueAfterDelay(e,t,r){this.jt(),this.Mt.indexOf(e)>-1&&(t=0);const n=si.createAndSchedule(this,e,t,r,o=>this.zt(o));return this.Ot.push(n),n}jt(){this.kt&&v()}verifyOperationInProgress(){}async Gt(){let e;do e=this.Ft,await e;while(e!==this.Ft)}Wt(e){for(const t of this.Ot)if(t.timerId===e)return!0;return!1}Kt(e){return this.Gt().then(()=>{this.Ot.sort((t,r)=>t.targetTimeMs-r.targetTimeMs);for(const t of this.Ot)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Gt()})}Yt(e){this.Mt.push(e)}zt(e){const t=this.Ot.indexOf(e);this.Ot.splice(t,1)}}class aa{constructor(e,t){this._firestore=e,this._transaction=t,this._dataReader=lt(e)}get(e){const t=Me(e,this._firestore),r=new Yr(this._firestore);return this._transaction.lookup([t._key]).then(n=>{if(!n||n.length!==1)return v();const o=n[0];if(o.isFoundDocument())return new Mt(this._firestore,r,o.key,o,t.converter);if(o.isNoDocument())return new Mt(this._firestore,r,t._key,null,t.converter);throw v()})}set(e,t,r){const n=Me(e,this._firestore),o=Kr(n.converter,t,r),s=Vr(this._dataReader,"Transaction.set",n._key,o,n.converter!==null,r);return this._transaction.set(n._key,s),this}update(e,t,r,...n){const o=Me(e,this._firestore);let s;return s=typeof(t=F(t))=="string"||t instanceof ke?Hr(this._dataReader,"Transaction.update",o._key,t,r,n):zr(this._dataReader,"Transaction.update",o._key,t),this._transaction.update(o._key,s),this}delete(e){const t=Me(e,this._firestore);return this._transaction.delete(t._key),this}}function ha(i,e,t){const r=Be(i=ye(i,Ne)),n=Object.assign(Object.assign({},na),t);(function(s){if(s.maxAttempts<1)throw new c(f,"Max attempts must be at least 1")})(n);const o=new Qt;return new oa(new sa,r,n,s=>e(new aa(i,s)),o).run(),o.promise}(function(i){ve=i})(`${Fo}_lite`),Ye(new Se("firestore/lite",(i,{instanceIdentifier:e,options:t})=>{const r=i.getProvider("app").getImmediate(),n=new Ne(new es(i.getProvider("auth-internal")),new ns(i.getProvider("app-check-internal")),function(o,s){if(!Object.prototype.hasOwnProperty.apply(o.options,["projectId"]))throw new c(f,'"projectId" not provided in firebase.initializeApp.');return new Ce(o.options.projectId,s)}(r,e),r);return t&&n._setSettings(t),n},"PUBLIC").setMultipleInstances(!0)),fe("firestore-lite","3.7.1",""),fe("firestore-lite","3.7.1","esm2017");const ua={apiKey:"AIzaSyDFF6rtd0B18fPfiZO_VJ3rVaGjLqnf3no",authDomain:"munihuaurathesis.firebaseapp.com",projectId:"munihuaurathesis",storageBucket:"munihuaurathesis.appspot.com",messagingSenderId:"890591931409",appId:"1:890591931409:web:fe6745033e9cfc6577d5b0"},ca=cr(ua),Y=zs(ca),oh=ne(Y,"Sectors"),sh=ne(Y,"Incidents"),ah=ne(Y,"SystemUsers"),hh=ne(Y,"RegisteredUsers"),uh=ne(Y,"IncidentTypes");ne(Y,"Reports");const ch=async(i,e)=>{let t=e.id;if(t){delete e.id;let r=ut(i,t);await ea(r,e)}else t=(await ia(i,e)).id;e.id=t},lh=async(i,e)=>{let t=ut(i,e);await ta(t)},dh=async(i,e)=>{if(e){let t=[];e.forEach(o=>{t.push(Zs(o.field,o.operator,o.value))});let r=Qs(i,...t);return(await Vt(r)).docs.map(o=>Ui(o))}else return(await Vt(i)).docs.map(r=>Ui(r))},Ui=i=>{let e=Object.assign({},i.data());return e.id=i.id,e},fh=async()=>{let i=ne(Y,"Incidents");try{const e=await Vt(i);await ha(Y,async t=>{e.forEach(r=>{const n=r.id;let o=la.filter(s=>s.id==n)[0];if(console.log(o,n),o){let s={history:{}};if(o.registro){let h=new Date(2023,10,o.registro.dia,o.registro.hora,o.registro.minuto);s.registerDate=A.fromDate(h),s.history.OPEN=A.fromDate(h)}if(o.cierre){let h=new Date(2023,10,o.cierre.dia,o.cierre.hora,o.cierre.minuto);s.history.CLOSED=A.fromDate(h)}if(o.proceso){let h=new Date(2023,10,o.proceso.dia,o.proceso.hora,o.proceso.minuto);s.history.IN_PROCESS=A.fromDate(h)}const a=ut(i,n);t.update(a,s),console.log("Registros actualizados correctamente.")}})})}catch(e){console.error("Error actualizando registros:",e)}},la=[{id:"04rON8uK1dZ0OrAXkqEY",registro:{dia:1,hora:13,minuto:6},proceso:{dia:1,hora:13,minuto:16},cierre:{dia:1,hora:13,minuto:49}},{id:"0byUAji5QU5GMtJoqCXZ",registro:{dia:1,hora:14,minuto:16},proceso:{dia:1,hora:14,minuto:21},cierre:{dia:1,hora:14,minuto:57}},{id:"146rxkNDI2FYUUYCsbHw",registro:{dia:1,hora:17,minuto:46},proceso:{dia:1,hora:17,minuto:52},cierre:{dia:1,hora:18,minuto:22}},{id:"2IoirHLUZ6iRZeiIBnc6",registro:{dia:1,hora:19,minuto:58},proceso:{dia:1,hora:20,minuto:2},cierre:{dia:1,hora:20,minuto:47}},{id:"2RGxhIHw3y8gemsUJnkJ",registro:{dia:2,hora:10,minuto:26},proceso:{dia:2,hora:10,minuto:29},cierre:{dia:2,hora:11,minuto:6}},{id:"3H8SngbvmfG3viombm00",registro:{dia:2,hora:17,minuto:36},proceso:{dia:2,hora:17,minuto:38},cierre:{dia:2,hora:18,minuto:28}},{id:"3MkMOcPRE8j8pT4Or7bL",registro:{dia:2,hora:18,minuto:26},proceso:{dia:2,hora:18,minuto:29},cierre:{dia:2,hora:19,minuto:19}},{id:"4xKSEqM3KiOI4gv2NIcd",registro:{dia:2,hora:21,minuto:34},proceso:{dia:2,hora:21,minuto:38},cierre:{dia:2,hora:22,minuto:21}},{id:"5S1ETB1vM8ATCuQwvdEV",registro:{dia:3,hora:16,minuto:23},proceso:{dia:3,hora:16,minuto:27},cierre:{dia:3,hora:15,minuto:12}},{id:"5YUPFfYu08NyT8yJKbHM",registro:{dia:3,hora:17,minuto:16},proceso:{dia:3,hora:17,minuto:24},cierre:{dia:3,hora:18,minuto:19}},{id:"5dplVyfSPWAO7jifx5yY",registro:{dia:3,hora:21,minuto:27},proceso:{dia:3,hora:21,minuto:33},cierre:{dia:3,hora:22,minuto:21}},{id:"6rdNOXy5pPKEPHuBoNky",registro:{dia:4,hora:18,minuto:26},proceso:{dia:4,hora:18,minuto:30},cierre:{dia:4,hora:19,minuto:26}},{id:"6vIFTNQNi9zSlU0CYZFC",registro:{dia:4,hora:17,minuto:4},proceso:{dia:4,hora:17,minuto:12},cierre:{dia:4,hora:18,minuto:5}},{id:"6yWK7tH4FHcUUSzRpIZR",registro:{dia:4,hora:19,minuto:26},proceso:{dia:4,hora:19,minuto:31}},{id:"7EpEbYAemxFlkmxWcuGq",registro:{dia:4,hora:20,minuto:34},proceso:{dia:4,hora:20,minuto:36},cierre:{dia:4,hora:21,minuto:42}},{id:"7Y7BZaoccrUOICHQMRWW",registro:{dia:4,hora:21,minuto:43},proceso:{dia:4,hora:21,minuto:45},cierre:{dia:4,hora:22,minuto:36}},{id:"7dCwrVTwFyvNXN5A9EiZ",registro:{dia:4,hora:21,minuto:49},proceso:{dia:4,hora:21,minuto:51},cierre:{dia:4,hora:22,minuto:58}},{id:"8IZWNw5dpuGiDGufCNxr",registro:{dia:4,hora:22,minuto:12},proceso:{dia:4,hora:22,minuto:15},cierre:{dia:4,hora:23,minuto:23}},{id:"8iWXW1w9mYbMxsGYg1b7",registro:{dia:4,hora:22,minuto:46},proceso:{dia:4,hora:22,minuto:47},cierre:{dia:4,hora:23,minuto:32}},{id:"8nJYpF7fksWooWTMwccF",registro:{dia:4,hora:23,minuto:16},proceso:{dia:4,hora:23,minuto:18},cierre:{dia:4,hora:23,minuto:59}},{id:"8rlgzWpEugAesyvrwwIj",registro:{dia:5,hora:18,minuto:26},proceso:{dia:5,hora:18,minuto:29},cierre:{dia:5,hora:19,minuto:49}},{id:"AAYy0zn6UX1FGoiHhIld",registro:{dia:5,hora:17,minuto:17},proceso:{dia:5,hora:17,minuto:22},cierre:{dia:5,hora:18,minuto:42}},{id:"AAwIpnrVTVlONDWUqg2C",registro:{dia:5,hora:18,minuto:23},proceso:{dia:5,hora:18,minuto:25},cierre:{dia:5,hora:19,minuto:15}},{id:"AEJXN3wCrXendXDuMatR",registro:{dia:5,hora:18,minuto:56},proceso:{dia:5,hora:18,minuto:58},cierre:{dia:5,hora:19,minuto:48}},{id:"B5YjRCiLhrSUrUq6h0Sy",registro:{dia:5,hora:19,minuto:6},proceso:{dia:5,hora:19,minuto:9},cierre:{dia:5,hora:20,minuto:39}},{id:"BBWzm11OXWh2PiFjIv7A",registro:{dia:5,hora:19,minuto:58},proceso:{dia:5,hora:20,minuto:1},cierre:{dia:5,hora:21,minuto:21}},{id:"C24QBkNbugJLbJgYHJor",registro:{dia:5,hora:21,minuto:45},proceso:{dia:5,hora:21,minuto:47},cierre:{dia:5,hora:22,minuto:55}},{id:"D15WK2ZEWffqg7c3GptC",registro:{dia:5,hora:22,minuto:36},proceso:{dia:5,hora:22,minuto:40},cierre:{dia:5,hora:23,minuto:45}},{id:"DBdxbace81FcsgSSp5OO",registro:{dia:6,hora:14,minuto:34},proceso:{dia:6,hora:14,minuto:35},cierre:{dia:6,hora:15,minuto:43}},{id:"E7kyDKpGJ3qd30WZqwt3",registro:{dia:6,hora:16,minuto:26},proceso:{dia:6,hora:16,minuto:28},cierre:{dia:6,hora:17,minuto:42}},{id:"EOZi677fRe5YRHgjFRiq",registro:{dia:6,hora:18,minuto:5},proceso:{dia:6,hora:18,minuto:9},cierre:{dia:6,hora:19,minuto:1}},{id:"Em3VwvbbxPXwyFs5SAPt",registro:{dia:6,hora:18,minuto:8},proceso:{dia:6,hora:18,minuto:11},cierre:{dia:6,hora:19,minuto:30}},{id:"EyVP3aRjBZrU2238Ch7Y",registro:{dia:7,hora:19,minuto:26},proceso:{dia:7,hora:19,minuto:28},cierre:{dia:7,hora:20,minuto:18}},{id:"FGBLvWjOlDN1IYRuc43y",registro:{dia:7,hora:19,minuto:34},proceso:{dia:7,hora:19,minuto:39},cierre:{dia:7,hora:20,minuto:42}},{id:"FPr78MjlYxRiUIogKKYb",registro:{dia:7,hora:21,minuto:4},proceso:{dia:7,hora:21,minuto:8},cierre:{dia:7,hora:22,minuto:13}},{id:"G75Ecyp2nxvce7gVyFpT",registro:{dia:8,hora:19,minuto:46},proceso:{dia:8,hora:19,minuto:47},cierre:{dia:8,hora:20,minuto:51}},{id:"GG2hrz7A28UusZ6viSnG",registro:{dia:8,hora:19,minuto:52},proceso:{dia:8,hora:19,minuto:55},cierre:{dia:8,hora:20,minuto:59}},{id:"GTCfRhnNJoqdOkrlpUMd",registro:{dia:8,hora:21,minuto:26},proceso:{dia:8,hora:21,minuto:28},cierre:{dia:8,hora:22,minuto:19}},{id:"GVmHqPAGzejdMORE5TBS",registro:{dia:8,hora:22,minuto:34},proceso:{dia:8,hora:22,minuto:39},cierre:{dia:8,hora:23,minuto:53}},{id:"GVpmC5TK3OJyCShbx7Zv",registro:{dia:9,hora:20,minuto:36},proceso:{dia:9,hora:20,minuto:41},cierre:{dia:9,hora:21,minuto:56}},{id:"GazIbQwriQ3KmmxI7E9o",registro:{dia:9,hora:22,minuto:33},proceso:{dia:9,hora:22,minuto:39},cierre:{dia:9,hora:23,minuto:25}},{id:"GiCi9eYPqLj06IV78jKQ",registro:{dia:9,hora:23,minuto:26},proceso:{dia:9,hora:23,minuto:30},cierre:{dia:10,hora:0,minuto:39}},{id:"HbNu6uIyGeRYNKFuJ1zq",registro:{dia:9,hora:23,minuto:46},proceso:{dia:9,hora:23,minuto:50},cierre:{dia:10,hora:1,minuto:3}},{id:"IXTayABQumzvL2ONSF5H",registro:{dia:10,hora:11,minuto:34},proceso:{dia:10,hora:11,minuto:36},cierre:{dia:10,hora:12,minuto:41}},{id:"IrBrGfQ4tXuEwS2R8Fkw",registro:{dia:10,hora:12,minuto:36},proceso:{dia:10,hora:12,minuto:38},cierre:{dia:10,hora:13,minuto:29}},{id:"JD5xINcmakpypmzdCgpw",registro:{dia:10,hora:13,minuto:6},proceso:{dia:10,hora:13,minuto:12},cierre:{dia:10,hora:14,minuto:32}},{id:"Jey9CpU1gybPRyzdvZsX",registro:{dia:10,hora:17,minuto:36},proceso:{dia:10,hora:17,minuto:39},cierre:{dia:10,hora:18,minuto:41}},{id:"JfazA8lH2bYSK1mdX69n",registro:{dia:10,hora:21,minuto:26},proceso:{dia:10,hora:21,minuto:28},cierre:{dia:10,hora:22,minuto:33}},{id:"JhuEjIbJtP42QgVLGCb3",registro:{dia:11,hora:15,minuto:26},proceso:{dia:11,hora:15,minuto:27},cierre:{dia:11,hora:16,minuto:41}},{id:"JsUQojIRFZ0LMlZK6qRx",registro:{dia:11,hora:16,minuto:16},proceso:{dia:11,hora:16,minuto:21},cierre:{dia:11,hora:17,minuto:35}},{id:"KZ3gvxBjzOyJkfH1p2Gb",registro:{dia:11,hora:20,minuto:19},proceso:{dia:11,hora:20,minuto:24},cierre:{dia:11,hora:21,minuto:36}},{id:"LEpZBRoK6kV4Fg4gaWs7",registro:{dia:11,hora:21,minuto:43},proceso:{dia:11,hora:21,minuto:47},cierre:{dia:11,hora:22,minuto:54}},{id:"LcSeEPKeSd2bS73t89vn",registro:{dia:11,hora:22,minuto:45},proceso:{dia:11,hora:22,minuto:49},cierre:{dia:11,hora:23,minuto:59}},{id:"LhxqzjJngEW4JKOO68WG",registro:{dia:11,hora:22,minuto:49},proceso:{dia:11,hora:22,minuto:53},cierre:{dia:12,hora:0,minuto:10}},{id:"LwaBcrEU5r5UpYd313kH",registro:{dia:11,hora:23,minuto:46},proceso:{dia:11,hora:23,minuto:47},cierre:{dia:12,hora:0,minuto:20}},{id:"MtRBjIlYRKXrOaHB8wAi",registro:{dia:11,hora:23,minuto:57},proceso:{dia:11,hora:23,minuto:58},cierre:{dia:12,hora:0,minuto:33}},{id:"MxazQV8nkNhVk7PnIWQP",registro:{dia:12,hora:8,minuto:26},proceso:{dia:12,hora:8,minuto:31},cierre:{dia:12,hora:9,minuto:22}},{id:"NF4sUajOH8nJNcR5WWlR",registro:{dia:12,hora:10,minuto:26},proceso:{dia:12,hora:10,minuto:28},cierre:{dia:12,hora:11,minuto:39}},{id:"NrMmjIaXijm0pC5IAmGE",registro:{dia:12,hora:11,minuto:45},proceso:{dia:12,hora:11,minuto:47},cierre:{dia:12,hora:12,minuto:51}},{id:"OPFOl0nmCP4fKEe3xkwj",registro:{dia:12,hora:14,minuto:34},proceso:{dia:12,hora:14,minuto:39},cierre:{dia:12,hora:15,minuto:47}},{id:"PLLl2z56IRufd7xj6LMx",registro:{dia:12,hora:15,minuto:43},proceso:{dia:12,hora:15,minuto:44},cierre:{dia:12,hora:16,minuto:55}},{id:"PecepkALvhBxt9V4COow",registro:{dia:12,hora:16,minuto:36},proceso:{dia:12,hora:16,minuto:37},cierre:{dia:12,hora:17,minuto:31}},{id:"RbV1WOnpbHY4LfW7ZYpP",registro:{dia:12,hora:17,minuto:26},proceso:{dia:12,hora:17,minuto:29},cierre:{dia:12,hora:18,minuto:32}},{id:"Ro2mvydAFueHqJkNbr7O",registro:{dia:13,hora:11,minuto:16},proceso:{dia:13,hora:11,minuto:17},cierre:{dia:13,hora:12,minuto:42}},{id:"RxNkpW8ByTAxlsCum4Ja",registro:{dia:13,hora:12,minuto:6},proceso:{dia:13,hora:12,minuto:7},cierre:{dia:13,hora:13,minuto:24}},{id:"S4YffEtCn6NGLReNfnbX",registro:{dia:13,hora:20,minuto:8},proceso:{dia:13,hora:20,minuto:11},cierre:{dia:13,hora:21,minuto:19}},{id:"SJ5MHkAdgwwYu3JNLYrr",registro:{dia:14,hora:14,minuto:10},proceso:{dia:14,hora:14,minuto:14},cierre:{dia:14,hora:15,minuto:29}},{id:"T4TkDSexGQYiONcscvEe",registro:{dia:14,hora:15,minuto:6},proceso:{dia:14,hora:15,minuto:9},cierre:{dia:14,hora:16,minuto:43}},{id:"TDGdCWG4tC32wXS7UHq2",registro:{dia:14,hora:18,minuto:57},proceso:{dia:14,hora:19,minuto:1},cierre:{dia:14,hora:20,minuto:11}},{id:"UVnavgLEa3ph2M8guVB5",registro:{dia:14,hora:22,minuto:43},proceso:{dia:14,hora:22,minuto:47},cierre:{dia:14,hora:23,minuto:53}},{id:"WKRXIpSMpQ31dMDD1EHr",registro:{dia:15,hora:8,minuto:36},proceso:{dia:15,hora:8,minuto:37},cierre:{dia:15,hora:9,minuto:57}},{id:"X0QDXsmK9bCv2VB1yWBw",registro:{dia:15,hora:10,minuto:32},proceso:{dia:15,hora:10,minuto:35},cierre:{dia:15,hora:11,minuto:55}},{id:"XT1WSXo2r3U5RK2ngrUW",registro:{dia:15,hora:13,minuto:34},proceso:{dia:15,hora:13,minuto:39},cierre:{dia:15,hora:14,minuto:51}},{id:"YFMqqiVKQRNWGboBUQ0p",registro:{dia:15,hora:15,minuto:45},proceso:{dia:15,hora:15,minuto:48},cierre:{dia:15,hora:16,minuto:53}},{id:"YOkVZ6kh4R4R2BkSd5E8",registro:{dia:16,hora:17,minuto:13},proceso:{dia:16,hora:17,minuto:18},cierre:{dia:16,hora:18,minuto:54}},{id:"YQBIT8BMEb9RgtH8xIpB",registro:{dia:16,hora:18,minuto:23},proceso:{dia:16,hora:18,minuto:30},cierre:{dia:16,hora:19,minuto:47}},{id:"YqvSxTqbFO2yfBqZH36F",registro:{dia:16,hora:20,minuto:14},proceso:{dia:16,hora:20,minuto:20},cierre:{dia:16,hora:21,minuto:50}},{id:"ZY1ynNxj7b0HMJYeLPyD",registro:{dia:17,hora:18,minuto:6},proceso:{dia:17,hora:18,minuto:11},cierre:{dia:17,hora:19,minuto:36}},{id:"abhKznNlsXRSZvuVMhgU",registro:{dia:17,hora:19,minuto:16},proceso:{dia:17,hora:19,minuto:19},cierre:{dia:17,hora:20,minuto:43}},{id:"ancP6WZqX2F6cJpvFMu8",registro:{dia:17,hora:20,minuto:26},proceso:{dia:17,hora:20,minuto:28},cierre:{dia:17,hora:21,minuto:47}},{id:"aqPWRifUILJejchx0yiC",registro:{dia:17,hora:21,minuto:30},proceso:{dia:17,hora:21,minuto:32},cierre:{dia:17,hora:22,minuto:51}},{id:"b6xiWdAPETTMHC7Lc6Nw",registro:{dia:17,hora:22,minuto:15},proceso:{dia:17,hora:22,minuto:19},cierre:{dia:17,hora:23,minuto:34}},{id:"buqlwiVvdOCybB2tVqzL",registro:{dia:18,hora:15,minuto:6},proceso:{dia:18,hora:15,minuto:11},cierre:{dia:18,hora:16,minuto:10}},{id:"cDyD9Ry8L1rgUktMxajt",registro:{dia:18,hora:17,minuto:46},proceso:{dia:18,hora:17,minuto:50},cierre:{dia:18,hora:19,minuto:2}},{id:"cKO0Rzq9N8JPEHDikohe",registro:{dia:18,hora:18,minuto:24},proceso:{dia:18,hora:18,minuto:28},cierre:{dia:18,hora:19,minuto:57}},{id:"cdAVJU6420uRJTEN98XX",registro:{dia:18,hora:19,minuto:36},proceso:{dia:18,hora:19,minuto:39},cierre:{dia:18,hora:20,minuto:55}},{id:"dJZlR5cC36UMes9jSufX",registro:{dia:18,hora:19,minuto:56},proceso:{dia:18,hora:20,minuto:0},cierre:{dia:18,hora:21,minuto:22}},{id:"dguEKUmGv0NdnDTcROE8",registro:{dia:18,hora:20,minuto:11},proceso:{dia:18,hora:20,minuto:15},cierre:{dia:18,hora:21,minuto:42}},{id:"eFbmrMKWzYHFGmmj02SK",registro:{dia:18,hora:22,minuto:16},proceso:{dia:18,hora:22,minuto:21},cierre:{dia:18,hora:23,minuto:43}},{id:"eGHr20h0TQ6OC7gNZdyq",registro:{dia:18,hora:23,minuto:6},proceso:{dia:18,hora:23,minuto:12}},{id:"eZoqKimwsKRzW2wKwWvo",registro:{dia:19,hora:14,minuto:30},proceso:{dia:19,hora:14,minuto:36},cierre:{dia:19,hora:15,minuto:59}},{id:"f1ewPoyX0QZTFoUmWhOE",registro:{dia:19,hora:15,minuto:6},proceso:{dia:19,hora:15,minuto:12},cierre:{dia:19,hora:16,minuto:28}},{id:"fIR6vo4AIzPj0yVcOXnN",registro:{dia:19,hora:16,minuto:16},proceso:{dia:19,hora:16,minuto:19},cierre:{dia:19,hora:17,minuto:10}},{id:"fSzHjItO1xLzCm8oYjKz",registro:{dia:19,hora:17,minuto:20},proceso:{dia:19,hora:17,minuto:24},cierre:{dia:19,hora:18,minuto:41}},{id:"ftW4xctg1tGEp1FJ23MB",registro:{dia:19,hora:18,minuto:2},proceso:{dia:19,hora:18,minuto:5},cierre:{dia:19,hora:19,minuto:35}},{id:"gNfPweyWgApmXduf3AEu",registro:{dia:19,hora:19,minuto:0},proceso:{dia:19,hora:19,minuto:4},cierre:{dia:19,hora:20,minuto:6}},{id:"hWmRbaxCGoYi5OVu0Jwr",registro:{dia:19,hora:20,minuto:16},proceso:{dia:19,hora:20,minuto:19},cierre:{dia:19,hora:21,minuto:51}},{id:"iD1EAzgRAwLpJPc6DU26",registro:{dia:19,hora:22,minuto:16},proceso:{dia:19,hora:22,minuto:21},cierre:{dia:19,hora:23,minuto:43}},{id:"iUMlIjcG4JrfgD6d2BIO",registro:{dia:20,hora:11,minuto:6},proceso:{dia:20,hora:11,minuto:11},cierre:{dia:20,hora:12,minuto:49}},{id:"iZMdbHzGodF7LprwMgVk",registro:{dia:20,hora:12,minuto:23},proceso:{dia:20,hora:12,minuto:28},cierre:{dia:20,hora:13,minuto:38}},{id:"igKKpDi2u951G5Pj6yLt",registro:{dia:20,hora:14,minuto:16},proceso:{dia:20,hora:14,minuto:22},cierre:{dia:20,hora:15,minuto:47}},{id:"imz8nvtK6Xz1bhxTAZAr",registro:{dia:20,hora:17,minuto:20},proceso:{dia:20,hora:17,minuto:27},cierre:{dia:20,hora:18,minuto:42}},{id:"inESXdFLSldaguKELoJl",registro:{dia:20,hora:19,minuto:30},proceso:{dia:20,hora:19,minuto:34},cierre:{dia:20,hora:20,minuto:53}},{id:"isHB7JHKsoYa8mrhiJa8",registro:{dia:20,hora:21,minuto:26},proceso:{dia:20,hora:21,minuto:31},cierre:{dia:20,hora:22,minuto:47}},{id:"kTn9VICV2AsNZ97pjGX4",registro:{dia:21,hora:14,minuto:6},proceso:{dia:21,hora:14,minuto:11},cierre:{dia:21,hora:15,minuto:51}},{id:"keAMFgpSqotcWJs8r0uc",registro:{dia:21,hora:14,minuto:36},proceso:{dia:21,hora:14,minuto:40},cierre:{dia:21,hora:16,minuto:1}},{id:"m34UPPjo3T9qP4ohwLlR",registro:{dia:21,hora:15,minuto:16},proceso:{dia:21,hora:15,minuto:21},cierre:{dia:21,hora:16,minuto:47}},{id:"mSOYZuXzFxaTxXmGUAir",registro:{dia:22,hora:15,minuto:6},proceso:{dia:22,hora:15,minuto:9},cierre:{dia:22,hora:16,minuto:39}},{id:"mWoSPQ50LrZbBoKaKQZu",registro:{dia:22,hora:16,minuto:30},proceso:{dia:22,hora:16,minuto:33},cierre:{dia:22,hora:15,minuto:56}},{id:"n2E35GdGy0guTSQf1Waj",registro:{dia:22,hora:18,minuto:6},proceso:{dia:22,hora:18,minuto:12},cierre:{dia:22,hora:19,minuto:47}},{id:"n7z26PBMgFHREbreO0DO",registro:{dia:23,hora:13,minuto:36},proceso:{dia:23,hora:13,minuto:40},cierre:{dia:23,hora:14,minuto:58}},{id:"nL7s1lg6JtfrWKl5QsbE",registro:{dia:23,hora:14,minuto:30},proceso:{dia:23,hora:14,minuto:34},cierre:{dia:23,hora:15,minuto:39}},{id:"nY4xdptdg4Cqu61KNjvt",registro:{dia:23,hora:16,minuto:30},proceso:{dia:23,hora:16,minuto:36},cierre:{dia:23,hora:17,minuto:54}},{id:"o265OH8ptqGn0Vfk72Hs",registro:{dia:23,hora:19,minuto:16},proceso:{dia:23,hora:19,minuto:19},cierre:{dia:23,hora:20,minuto:38}},{id:"okT8HUsR4N7Lq66iJP8v",registro:{dia:24,hora:15,minuto:6},proceso:{dia:24,hora:15,minuto:11},cierre:{dia:24,hora:16,minuto:10}},{id:"pY7z5MFCCAxoqmr6u7zA",registro:{dia:24,hora:18,minuto:26},proceso:{dia:24,hora:18,minuto:31},cierre:{dia:24,hora:19,minuto:45}},{id:"pm2rFoP6BMUdlYdeorD0",registro:{dia:24,hora:20,minuto:15},proceso:{dia:24,hora:20,minuto:20},cierre:{dia:24,hora:21,minuto:36}},{id:"q2iGwkaK3Wc4mGkfjo3O",registro:{dia:24,hora:21,minuto:30},proceso:{dia:24,hora:21,minuto:36},cierre:{dia:24,hora:22,minuto:58}},{id:"qQtXGX3Q4K0HIrNapNuI",registro:{dia:25,hora:14,minuto:6},proceso:{dia:25,hora:14,minuto:10},cierre:{dia:25,hora:15,minuto:18}},{id:"rCQMGL1P7sUv8XsJp05n",registro:{dia:25,hora:15,minuto:18},proceso:{dia:25,hora:15,minuto:23},cierre:{dia:25,hora:16,minuto:49}},{id:"rK6iVQf3VtxCnqFFaX10",registro:{dia:25,hora:16,minuto:6},proceso:{dia:25,hora:16,minuto:9},cierre:{dia:25,hora:17,minuto:41}},{id:"sAdflnrkEM57F0oAwKZs",registro:{dia:25,hora:17,minuto:35},proceso:{dia:25,hora:17,minuto:39},cierre:{dia:25,hora:18,minuto:53}},{id:"sXyksCNfxnEvT8cxF8Su",registro:{dia:25,hora:18,minuto:2},proceso:{dia:25,hora:18,minuto:7},cierre:{dia:25,hora:19,minuto:27}},{id:"svGIuWAhAtd0f1JGY80q",registro:{dia:25,hora:18,minuto:30},proceso:{dia:25,hora:18,minuto:34},cierre:{dia:25,hora:19,minuto:58}},{id:"tLU1EdcdSzkkWWi9hKr7",registro:{dia:25,hora:19,minuto:16},proceso:{dia:25,hora:19,minuto:23},cierre:{dia:25,hora:20,minuto:47}},{id:"tQleN70rZoXh5M8OBiiQ",registro:{dia:25,hora:20,minuto:35},proceso:{dia:25,hora:20,minuto:42},cierre:{dia:25,hora:21,minuto:59}},{id:"tbGy1Bn2V4QNFnngNjD4",registro:{dia:25,hora:22,minuto:6},proceso:{dia:25,hora:22,minuto:10},cierre:{dia:25,hora:23,minuto:17}},{id:"tcyG2zh52WEuvcZ38Rsl",registro:{dia:26,hora:16,minuto:6},proceso:{dia:26,hora:16,minuto:14},cierre:{dia:26,hora:17,minuto:21}},{id:"trV2kwss8VDZdoiWziua",registro:{dia:26,hora:17,minuto:14},proceso:{dia:26,hora:17,minuto:20},cierre:{dia:26,hora:18,minuto:41}},{id:"uDiV7Bs4pYklGLN7Oats",registro:{dia:26,hora:17,minuto:55},proceso:{dia:26,hora:18,minuto:1},cierre:{dia:26,hora:19,minuto:11}},{id:"uIPx2T7pfk3VcUZaoLMn",registro:{dia:26,hora:18,minuto:26},proceso:{dia:26,hora:18,minuto:32},cierre:{dia:26,hora:19,minuto:43}},{id:"vbEWcYmQFswH9CxWOV2k",registro:{dia:26,hora:19,minuto:16},proceso:{dia:26,hora:19,minuto:19},cierre:{dia:26,hora:20,minuto:46}},{id:"vfdn7qVQ5MRH6nI9yx6i",registro:{dia:26,hora:20,minuto:36},proceso:{dia:26,hora:20,minuto:40},cierre:{dia:26,hora:21,minuto:59}},{id:"vmsWoMeClwiRAlZz7Bx4",registro:{dia:26,hora:22,minuto:9},proceso:{dia:26,hora:22,minuto:13},cierre:{dia:26,hora:23,minuto:33}},{id:"vyUrOv9R7bXRJYZTC4IV",registro:{dia:27,hora:18,minuto:6},proceso:{dia:27,hora:18,minuto:12},cierre:{dia:27,hora:19,minuto:19}},{id:"vzbYVWDf1pxMzV0ckKtN",registro:{dia:27,hora:20,minuto:15},proceso:{dia:27,hora:20,minuto:21},cierre:{dia:27,hora:21,minuto:52}},{id:"w10PPo8PPecL6GLldrmc",registro:{dia:27,hora:22,minuto:36},proceso:{dia:27,hora:22,minuto:38},cierre:{dia:27,hora:23,minuto:43}},{id:"wAcrs0r0kgrrTo4XWmZa",registro:{dia:28,hora:15,minuto:6},proceso:{dia:28,hora:15,minuto:10},cierre:{dia:28,hora:16,minuto:32}},{id:"wPlxw1iPi1WL0W9dZsDM",registro:{dia:28,hora:19,minuto:42},proceso:{dia:28,hora:19,minuto:50},cierre:{dia:28,hora:21,minuto:1}},{id:"xnbUuLr6q7wwReP1UChI",registro:{dia:28,hora:21,minuto:12},proceso:{dia:28,hora:21,minuto:16},cierre:{dia:28,hora:22,minuto:33}},{id:"xoDBY51N1yZcOY6xKTqD",registro:{dia:28,hora:22,minuto:35},proceso:{dia:28,hora:22,minuto:39},cierre:{dia:28,hora:23,minuto:47}},{id:"xrHXNpF0XRs6HgqlQKH7",registro:{dia:29,hora:16,minuto:36},proceso:{dia:29,hora:16,minuto:41},cierre:{dia:29,hora:17,minuto:53}},{id:"y5hoB783hVmYCzeF7DDI",registro:{dia:29,hora:17,minuto:56},proceso:{dia:29,hora:18,minuto:2},cierre:{dia:29,hora:19,minuto:21}},{id:"yNiTG3caK077fjA2sLTr",registro:{dia:29,hora:19,minuto:14},proceso:{dia:29,hora:19,minuto:19},cierre:{dia:29,hora:20,minuto:37}},{id:"yPNLo7CGL5od3AESiduV",registro:{dia:29,hora:21,minuto:30},proceso:{dia:29,hora:21,minuto:33},cierre:{dia:29,hora:22,minuto:57}},{id:"yYnZlTtHv3T33oOxTNaB",registro:{dia:30,hora:16,minuto:6},proceso:{dia:30,hora:16,minuto:12},cierre:{dia:30,hora:17,minuto:28}},{id:"ybktU6Miu1hOeLbVyHAC",registro:{dia:30,hora:18,minuto:10},proceso:{dia:30,hora:18,minuto:14},cierre:{dia:30,hora:19,minuto:28}},{id:"ytSPcrfbxR6TTvdad0Bv",registro:{dia:30,hora:19,minuto:5},proceso:{dia:30,hora:19,minuto:11},cierre:{dia:30,hora:20,minuto:54}},{id:"z7OhdzeKv0cn1TJAUiSw",registro:{dia:30,hora:21,minuto:30},proceso:{dia:30,hora:21,minuto:33},cierre:{dia:30,hora:22,minuto:43}},{id:"zYFF1yHf6GBP3XUuJZFl",registro:{dia:30,hora:22,minuto:26},proceso:{dia:30,hora:22,minuto:31},cierre:{dia:30,hora:23,minuto:52}}],mh=(i,e)=>{e.forEach(t=>{if(t.required)if(i.hasOwnProperty(t.name)){if(!i[t.name])throw`${t.descripcion} es un campo requerido`}else throw`${t.descripcion} es un campo requerido`;if(t.isNumber&&isNaN(i[t.name]))throw`${t.descripcion} debe ser un valor num\xE9rico`;if(t.gt&&i[t.name]<t.value)throw`${t.descripcion} debe ser mayor que ${t.value}`;if(t.ge&&i[t.name]<t.value)throw`${t.descripcion} debe ser mayor o igual que ${t.value}`;if(t.lt&&i[t.name]>t.value)throw`${t.descripcion} debe ser menor que ${t.value}`;if(t.le&&i[t.name]>t.value)throw`${t.descripcion} debe ser menor o igual que ${t.value}`;if(t.lenghtMax&&i[t.name]&&i[t.name].length>t.lenghtMax)throw`El tama\xF1o de ${t.descripcion} debe ser como m\xE1ximo ${t.lenghtMax} caracteres`;if(t.lenghtMin&&i[t.name]&&i[t.name].length<t.lenghtMin)throw`El tama\xF1o de ${t.descripcion} debe ser como m\xEDnimo ${t.lenghtMin} caracteres`;if(t.regexp&&t.regexp.test(i[t.name]))throw`${t.descripcion} no tiene un formato v\xE1lido`})};var Ve=5;class da{constructor(e){this.init(e)}init(e){var{dragEnabled:t,handle:r,draggableElement:n,positionController:o}=e;this._positionController=o,this._draggableElement=n,this._handle=r,this._dragEnabled=t,this.unsubscribe(),t&&this.subscribe()}moveDown(e){this._moveTo(Ve,0,e)}moveUp(e){this._moveTo(-Ve,0,e)}moveLeft(e){this._moveTo(0,-Ve,e)}moveRight(e){this._moveTo(0,Ve,e)}subscribe(){var e=this._getEventNames();W.on(this._handle,e.startEventName,t=>{this._dragStartHandler(t)}),W.on(this._handle,e.updateEventName,t=>{this._dragUpdateHandler(t)}),W.on(this._handle,e.endEventName,t=>{this._dragEndHandler(t)})}unsubscribe(){var e=this._getEventNames();W.off(this._handle,e.startEventName),W.off(this._handle,e.updateEventName),W.off(this._handle,e.endEventName)}_getEventNames(){var e=le(Xi,"overlayDrag"),t=le(Zi,"overlayDrag"),r=le(Ji,"overlayDrag");return{startEventName:e,updateEventName:t,endEventName:r}}_dragStartHandler(e){var t=this._getAllowedOffsets();this._prevOffset={x:0,y:0},e.targetElements=[],e.maxTopOffset=t.top,e.maxBottomOffset=t.bottom,e.maxLeftOffset=t.left,e.maxRightOffset=t.right}_dragUpdateHandler(e){var t={top:e.offset.y-this._prevOffset.y,left:e.offset.x-this._prevOffset.x};this._moveByOffset(t),this._prevOffset=e.offset}_dragEndHandler(e){this._positionController.dragHandled(),this._positionController.detectVisualPositionChange(e)}_moveTo(e,t,r){if(!!this._dragEnabled){r.preventDefault(),r.stopPropagation();var n=this._fitOffsetIntoAllowedRange(e,t);this._moveByOffset(n),this._dragEndHandler(r)}}_fitOffsetIntoAllowedRange(e,t){var r=this._getAllowedOffsets();return{top:j(e,-r.top,r.bottom),left:j(t,-r.left,r.right)}}_getContainerDimensions(){var e=Zr.getDocument(),t=this._positionController.$dragResizeContainer.get(0),r=L(t),n=ae(t);return be(t)&&(n=Math.max(e.body.clientHeight,n),r=Math.max(e.body.clientWidth,r)),{width:r,height:n}}_getContainerPosition(){var e=this._positionController.$dragResizeContainer.get(0);return be(e)?{top:0,left:0}:ai(e)}_getElementPosition(){return ai(this._draggableElement)}_getInnerDelta(){var e=this._getContainerDimensions(),t=this._getElementDimensions();return{x:e.width-t.width,y:e.height-t.height}}_getOuterDelta(){var{width:e,height:t}=this._getElementDimensions(),r=this._positionController.outsideDragFactor;return{x:e*r,y:t*r}}_getFullDelta(){var e=this._getInnerDelta(),t=this._getOuterDelta();return{x:e.x+t.x,y:e.y+t.y}}_getElementDimensions(){return{width:this._draggableElement.offsetWidth,height:this._draggableElement.offsetHeight}}_getAllowedOffsets(){var e=this._getFullDelta(),t=e.y>=0&&e.x>=0;if(!t)return{top:0,bottom:0,left:0,right:0};var r=this._getElementPosition(),n=this._getContainerPosition(),o=this._getOuterDelta();return{top:r.top-n.top+o.y,bottom:-r.top+n.top+e.y,left:r.left-n.left+o.x,right:-r.left+n.left+e.x}}_moveByOffset(e){var t=er(this._draggableElement),r={left:t.left+e.left,top:t.top+e.top};je(this._draggableElement,r)}}var ft="dxResizable",fa="dx-resizable",ma="dx-resizable-resizing",ze="dx-resizable-handle",pa="dx-resizable-handle-top",ga="dx-resizable-handle-bottom",_a="dx-resizable-handle-left",va="dx-resizable-handle-right",He="dx-resizable-handle-corner",ya=le(Xi,ft),ba=le(Zi,ft),wa=le(Ji,ft),Ea={left:"borderLeftWidth",top:"borderTopWidth",right:"borderRightWidth",bottom:"borderBottomWidth"},Qr=Jr.inherit({_getDefaultOptions:function(){return $(this.callBase(),{handles:"all",step:"1",stepPrecision:"simple",area:void 0,minWidth:30,maxWidth:1/0,minHeight:30,maxHeight:1/0,onResizeStart:null,onResize:null,onResizeEnd:null,roundStepValue:!0,keepAspectRatio:!0})},_init:function(){this.callBase(),this.$element().addClass(fa)},_initMarkup:function(){this.callBase(),this._renderHandles()},_render:function(){this.callBase(),this._renderActions()},_renderActions:function(){this._resizeStartAction=this._createActionByOption("onResizeStart"),this._resizeEndAction=this._createActionByOption("onResizeEnd"),this._resizeAction=this._createActionByOption("onResize")},_renderHandles:function(){this._handles=[];var i=this.option("handles");if(!(i==="none"||!i)){var e=i==="all"?["top","bottom","left","right"]:i.split(" "),t={};de(e,(r,n)=>{t[n]=!0,this._renderHandle(n)}),t.bottom&&t.right&&this._renderHandle("corner-bottom-right"),t.bottom&&t.left&&this._renderHandle("corner-bottom-left"),t.top&&t.right&&this._renderHandle("corner-top-right"),t.top&&t.left&&this._renderHandle("corner-top-left"),this._attachEventHandlers()}},_renderHandle:function(i){var e=b("<div>").addClass(ze).addClass(ze+"-"+i).appendTo(this.$element());this._handles.push(e)},_attachEventHandlers:function(){if(!this.option("disabled")){var i={};i[ya]=this._dragStartHandler.bind(this),i[ba]=this._dragHandler.bind(this),i[wa]=this._dragEndHandler.bind(this),this._handles.forEach(e=>{W.on(e,i,{direction:"both",immediate:!0})})}},_detachEventHandlers:function(){this._handles.forEach(i=>{W.off(i)})},_toggleEventHandlers:function(i){i?this._attachEventHandlers():this._detachEventHandlers()},_getElementSize:function(){var i=this.$element();return i.css("boxSizing")==="border-box"?{width:L(i),height:ae(i)}:{width:q(i),height:zt(i)}},_dragStartHandler:function(i){var e=this.$element();if(e.is(".dx-state-disabled, .dx-state-disabled *")){i.cancel=!0;return}this._toggleResizingClass(!0),this._movingSides=this._getMovingSides(i),this._elementLocation=er(e),this._elementSize=this._getElementSize(),this._renderDragOffsets(i),this._resizeStartAction({event:i,width:this._elementSize.width,height:this._elementSize.height,handles:this._movingSides}),i.targetElements=null},_toggleResizingClass:function(i){this.$element().toggleClass(ma,i)},_renderDragOffsets:function(i){var e=this._getArea();if(!!e){var t=b(i.target).closest("."+ze),r=L(t),n=ae(t),o=t.offset(),s=e.offset,a=this._getAreaScrollOffset();i.maxLeftOffset=this._leftMaxOffset=o.left-s.left-a.scrollX,i.maxRightOffset=this._rightMaxOffset=s.left+e.width-o.left-r+a.scrollX,i.maxTopOffset=this._topMaxOffset=o.top-s.top-a.scrollY,i.maxBottomOffset=this._bottomMaxOffset=s.top+e.height-o.top-n+a.scrollY}},_getBorderWidth:function(i,e){if(be(i.get(0)))return 0;var t=i.css(Ea[e]);return parseInt(t)||0},_proportionate:function(i,e){var t=this._elementSize,r=i==="x"?t.width/t.height:t.height/t.width;return e*r},_getProportionalDelta:function(i){var{x:e,y:t}=i,r=this._proportionate("y",e);if(r>=t)return{x:e,y:r};var n=this._proportionate("x",t);return n>=e?{x:n,y:t}:{x:0,y:0}},_getDirectionName:function(i){var e=this._movingSides;return i==="x"?e.left?"left":"right":e.top?"top":"bottom"},_fitIntoArea:function(i,e){var t,r=this._getDirectionName(i);return Math.min(e,(t=this["_".concat(r,"MaxOffset")])!==null&&t!==void 0?t:1/0)},_fitDeltaProportionally:function(i){var e=tr({},i),t=this._elementSize,{minWidth:r,minHeight:n,maxWidth:o,maxHeight:s}=this.option(),a=()=>t.width+e.x,h=()=>t.height+e.y,u=y=>e[y]===this._fitIntoArea(y,e[y]),d=()=>li(a(),r,o)&&u("x"),l=()=>li(h(),n,s)&&u("y");if(!d()){var m=this._fitIntoArea("x",j(a(),r,o)-t.width);e={x:m,y:this._proportionate("y",m)}}if(!l()){var _=this._fitIntoArea("y",j(h(),n,s)-t.height);e={x:this._proportionate("x",_),y:_}}return d()&&l()?e:{x:0,y:0}},_fitDelta:function(i){var{x:e,y:t}=i,r=this._elementSize,{minWidth:n,minHeight:o,maxWidth:s,maxHeight:a}=this.option();return{x:j(r.width+e,n,s)-r.width,y:j(r.height+t,o,a)-r.height}},_getDeltaByOffset:function(i){var e=this._movingSides,t=this._isCornerHandler(e)&&this.option("keepAspectRatio"),r={x:i.x*(e.left?-1:1),y:i.y*(e.top?-1:1)};if(t){var n=this._getProportionalDelta(r),o=this._fitDeltaProportionally(n);r=o}else{var s=this._fitDelta(r),a=this._roundByStep(s);r=a}return r},_updatePosition:function(i,e){var{width:t,height:r}=e,n=this._elementLocation,o=this._movingSides,s=this.$element(),a=this._getElementSize(),h=i.y*(o.top?-1:1)-((a.height||r)-r),u=i.x*(o.left?-1:1)-((a.width||t)-t);je(s,{top:n.top+(o.top?h:0),left:n.left+(o.left?u:0)})},_dragHandler:function(i){var e=this._getOffset(i),t=this._getDeltaByOffset(e),r=this._updateDimensions(t);this._updatePosition(t,r),this._triggerResizeAction(i,r)},_updateDimensions:function(i){var e=u=>u.substring(u.length-2)==="px",t=this.option("stepPrecision")==="strict",r=this._elementSize,n=r.width+i.x,o=r.height+i.y,s=this.$element().get(0).style,a=i.x||t||e(s.width),h=i.y||t||e(s.height);return a&&this.option({width:n}),h&&this.option({height:o}),{width:a?n:r.width,height:h?o:r.height}},_triggerResizeAction:function(i,e){var{width:t,height:r}=e;this._resizeAction({event:i,width:this.option("width")||t,height:this.option("height")||r,handles:this._movingSides}),he(this.$element())},_isCornerHandler:i=>Object.values(i).reduce((e,t)=>e^t,0)===0,_getOffset:function(i){var e=i.offset,t=this._movingSides;return!t.left&&!t.right&&(e.x=0),!t.top&&!t.bottom&&(e.y=0),e},_roundByStep:function(i){return this.option("stepPrecision")==="strict"?this._roundStrict(i):this._roundNotStrict(i)},_getSteps:function(){return en(this.option("step"),!this.option("roundStepValue"))},_roundNotStrict:function(i){var e=this._getSteps();return{x:i.x-i.x%e.h,y:i.y-i.y%e.v}},_roundStrict:function(i){var e=this._movingSides,t={x:i.x*(e.left?-1:1),y:i.y*(e.top?-1:1)},r=this._getSteps(),n=this._elementLocation,o=this._elementSize,s=e.left?n.left:n.left+o.width,a=e.top?n.top:n.top+o.height,h=(s+t.x)%r.h,u=(a+t.y)%r.v,d=Math.sign||(I=>(I=+I,I===0||isNaN(I)?I:I>0?1:-1)),l=(I,oe)=>(1+.2*d(oe))%1*I,m=(I,oe)=>Math.abs(I)<.2*oe,_=t.x-h,y=t.y-u;h>l(r.h,t.x)&&(_+=r.h),u>l(r.v,t.y)&&(y+=r.v);var Q=(e.left||e.right)&&!m(t.x,r.h)?_:0,P=(e.top||e.bottom)&&!m(t.y,r.v)?y:0;return{x:Q*(e.left?-1:1),y:P*(e.top?-1:1)}},_getMovingSides:function(i){var e=b(i.target),t=e.hasClass(He+"-top-left"),r=e.hasClass(He+"-top-right"),n=e.hasClass(He+"-bottom-left"),o=e.hasClass(He+"-bottom-right");return{top:e.hasClass(pa)||t||r,left:e.hasClass(_a)||t||n,bottom:e.hasClass(ga)||n||o,right:e.hasClass(va)||r||o}},_getArea:function(){var i=this.option("area");return hi(i)&&(i=i.call(this)),It(i)?this._getAreaFromObject(i):this._getAreaFromElement(i)},_getAreaScrollOffset:function(){var i=this.option("area"),e=!hi(i)&&!It(i),t={scrollY:0,scrollX:0};if(e){var r=b(i)[0];be(r)&&(t.scrollX=r.pageXOffset,t.scrollY=r.pageYOffset)}return t},_getAreaFromObject:function(i){var e={width:i.right-i.left,height:i.bottom-i.top,offset:{left:i.left,top:i.top}};return this._correctAreaGeometry(e),e},_getAreaFromElement:function(i){var e=b(i),t;return e.length&&(t={width:ui(e),height:ci(e),offset:$({top:0,left:0},be(e[0])?{}:e.offset())},this._correctAreaGeometry(t,e)),t},_correctAreaGeometry:function(i,e){var t=e?this._getBorderWidth(e,"left"):0,r=e?this._getBorderWidth(e,"top"):0;i.offset.left+=t+this._getBorderWidth(this.$element(),"left"),i.offset.top+=r+this._getBorderWidth(this.$element(),"top"),i.width-=L(this.$element())-ui(this.$element()),i.height-=ae(this.$element())-ci(this.$element())},_dragEndHandler:function(i){var e=this.$element();this._resizeEndAction({event:i,width:L(e),height:ae(e),handles:this._movingSides}),this._toggleResizingClass(!1)},_renderWidth:function(i){this.option("width",j(i,this.option("minWidth"),this.option("maxWidth")))},_renderHeight:function(i){this.option("height",j(i,this.option("minHeight"),this.option("maxHeight")))},_optionChanged:function(i){switch(i.name){case"disabled":this._toggleEventHandlers(!i.value),this.callBase(i);break;case"handles":this._invalidate();break;case"minWidth":case"maxWidth":qe()&&this._renderWidth(L(this.$element()));break;case"minHeight":case"maxHeight":qe()&&this._renderHeight(ae(this.$element()));break;case"onResize":case"onResizeStart":case"onResizeEnd":this._renderActions();break;case"area":case"stepPrecision":case"step":case"roundStepValue":case"keepAspectRatio":break;default:this.callBase(i)}},_clean:function(){this.$element().find("."+ze).remove()},_useTemplates:function(){return!1}});Ht(ft,Qr);var Sa=tn.inherit({_initMarkup(){this._deferredItems=[],this.callBase()},_renderItemContent(i){var e=new mt,t=new mt;this._deferredItems[i.index]=t;var r=this.callBase.call(this,i);return t.done(()=>{e.resolve(r)}),e.promise()},_createItemByTemplate(i,e){return i.render({model:e.itemData,container:e.container,index:e.index,onRendered:()=>{this._deferredItems[e.index].resolve()}})},_postProcessRenderItems:Ut,_renderItemsAsync(){var i=new mt;return rn.apply(this,this._deferredItems).done(()=>{this._postProcessRenderItems(),i.resolve()}),i.promise()},_clean(){this.callBase(),this._deferredItems=[]}}),Ta="dx-toolbar",Tt="dx-toolbar-before",Ca="dx-toolbar-center",Wi="dx-toolbar-after",Aa="dx-toolbar-mini",Ia="dx-toolbar-item",Xr="dx-toolbar-label",Da="dx-toolbar-button",Oa="dx-toolbar-items-container",Ra="dx-toolbar-group",ji="dx-toolbar-compact",Ue="."+Xr,qi="dx-toolbar-multiline",Gi="text",xa="default",Ba="contained",Na="dxToolbarItemDataKey",Pa=Sa.inherit({compactMode:!1,ctor:function(i,e){this._userOptions=e||{},this.callBase(i,e),"height"in this._userOptions&&nn.log("W0001",this.NAME,"height","20.1","Functionality associated with this option is not intended for the Toolbar widget.")},_getSynchronizableOptionsForCreateComponent:function(){return this.callBase().filter(i=>i!=="disabled")},_initTemplates:function(){this.callBase();var i=new on(function(e,t,r){It(t)?(t.text&&e.text(t.text).wrapInner("<div>"),t.html&&e.html(t.html),t.widget==="dxDropDownButton"&&(t.options=t.options||{},ir(t.options.stylingMode)||(t.options.stylingMode=this.option("useFlatButtons")?Gi:Ba)),t.widget==="dxButton"&&(this.option("useFlatButtons")&&(t.options=t.options||{},t.options.stylingMode=t.options.stylingMode||Gi),this.option("useDefaultButtons")&&(t.options=t.options||{},t.options.type=t.options.type||xa))):e.text(String(t)),this._getTemplate("dx-polymorph-widget").render({container:e,model:r,parent:this})}.bind(this),["text","html","widget","options"],this.option("integrationOptions.watchMethod"));this._templateManager.addDefaultTemplates({item:i,menuItem:i})},_getDefaultOptions:function(){return $(this.callBase(),{renderAs:"topToolbar",grouped:!1,useFlatButtons:!1,useDefaultButtons:!1,multiline:!1})},_defaultOptionsRules:function(){return this.callBase().concat([{device:function(){return Dt()},options:{useFlatButtons:!0}}])},_itemContainer:function(){return this._$toolbarItemsContainer.find(["."+Tt,"."+Ca,"."+Wi].join(","))},_itemClass:function(){return Ia},_itemDataKey:function(){return Na},_buttonClass:function(){return Da},_dimensionChanged:function(){this._arrangeItems(),this._applyCompactMode()},_initMarkup:function(){this._renderToolbar(),this._renderSections(),this.callBase(),this.setAria("role","toolbar")},_waitParentAnimationFinished:function(){var i=this.$element();return new Promise(e=>{var t=()=>{clearTimeout(this._waitParentAnimationTimeout),this._waitParentAnimationTimeout=setTimeout(()=>(()=>{var r=!0;return i.parents().each((n,o)=>{if(an.isAnimating(b(o)))return r=!1,!1}),r&&e(),r})()||t(),15)};t()})},_render:function(){this.callBase(),this._renderItemsAsync(),Dt()&&Promise.all([this._waitParentAnimationFinished(),this._checkWebFontForLabelsLoaded()]).then(this._dimensionChanged.bind(this))},_postProcessRenderItems:function(){this._arrangeItems()},_renderToolbar:function(){this.$element().addClass(Ta).toggleClass(qi,this.option("multiline")),this._$toolbarItemsContainer=b("<div>").addClass(Oa).appendTo(this.$element())},_renderSections:function(){var i=this._$toolbarItemsContainer,e=this;de(["before","center","after"],function(){var t="dx-toolbar-"+this,r=i.find("."+t);r.length||(e["_$"+this+"Section"]=r=b("<div>").addClass(t).appendTo(i))})},_checkWebFontForLabelsLoaded:function(){var i=this.$element().find(Ue),e=[];return i.each((t,r)=>{var n=b(r).text(),o=b(r).css("fontWeight");e.push(sn(n,o))}),Promise.all(e)},_arrangeItems:function(i){i=i||q(this.$element()),this._$centerSection.css({margin:"0 auto",float:"none"});var e=ce(this._$beforeSection.get(0)),t=ce(this._$afterSection.get(0));this._alignCenterSection(e,t,i);var r=this._$toolbarItemsContainer.find(Ue).eq(0),n=r.parent();if(!!r.length){var o=e.width?e.width:r.position().left,s=n.hasClass(Tt)?0:o,a=n.hasClass(Wi)?0:t.width,h=0;n.children().not(Ue).each(function(){h+=L(this)});var u=i-h,d=Math.max(u-s-a,0);if(n.hasClass(Tt))this._alignSection(this._$beforeSection,d);else{var l=L(r)-q(r);r.css("maxWidth",d-l)}}},_alignCenterSection:function(i,e,t){this._alignSection(this._$centerSection,t-i.width-e.width);var r=this.option("rtlEnabled"),n=r?e:i,o=r?i:e,s=ce(this._$centerSection.get(0));(n.right>s.left||s.right>o.left)&&this._$centerSection.css({marginLeft:n.width,marginRight:o.width,float:n.width>o.width?"none":"right"})},_alignSection:function(i,e){var t=i.find(Ue),r=t.toArray();e-=this._getCurrentLabelsPaddings(r);var n=this._getCurrentLabelsWidth(r),o=Math.abs(n-e);e<n?(r=r.reverse(),this._alignSectionLabels(r,o,!1)):this._alignSectionLabels(r,o,!0)},_alignSectionLabels:function(i,e,t){for(var r=function(u){return ce(u).width},n=0;n<i.length;n++){var o=b(i[n]),s=Math.ceil(r(i[n])),a=void 0;t&&o.css("maxWidth","inherit");var h=Math.ceil(t?r(i[n]):s);if(h<e)a=t?h:0,e-=h;else{a=t?s+e:s-e,o.css("maxWidth",a);break}o.css("maxWidth",a)}},_applyCompactMode:function(){var i=this.$element();i.removeClass(ji),this.option("compactMode")&&this._getSummaryItemsWidth(this.itemElements(),!0)>q(i)&&i.addClass(ji)},_getCurrentLabelsWidth:function(i){var e=0;return i.forEach(function(t,r){e+=L(t)}),e},_getCurrentLabelsPaddings:function(i){var e=0;return i.forEach(function(t,r){e+=L(t)-q(t)}),e},_renderItem:function(i,e,t,r){var n=e.location||"center",o=t||this["_$"+n+"Section"],s=!!(e.text||e.html),a=this.callBase(i,e,o,r);return a.toggleClass(this._buttonClass(),!s).toggleClass(Xr,s).addClass(e.cssClass),a},_renderGroupedItems:function(){var i=this;de(this.option("items"),function(e,t){var r=t.items,n=b("<div>").addClass(Ra),o=t.location||"center";!r||!r.length||(de(r,function(s,a){i._renderItem(s,a,n,null)}),i._$toolbarItemsContainer.find(".dx-toolbar-"+o).append(n))})},_renderItems:function(i){var e=this.option("grouped")&&i.length&&i[0].items;e?this._renderGroupedItems():this.callBase(i)},_getToolbarItems:function(){return this.option("items")||[]},_renderContentImpl:function(){var i=this._getToolbarItems();this.$element().toggleClass(Aa,i.length===0),this._renderedItemsCount?this._renderItems(i.slice(this._renderedItemsCount)):this._renderItems(i),this._applyCompactMode()},_renderEmptyMessage:Ut,_clean:function(){this._$toolbarItemsContainer.children().empty(),this.$element().empty()},_visibilityChanged:function(i){i&&this._arrangeItems()},_isVisible:function(){return q(this.$element())>0&&zt(this.$element())>0},_getIndexByItem:function(i){return this._getToolbarItems().indexOf(i)},_itemOptionChanged:function(i,e,t){this.callBase.apply(this,[i,e,t]),this._arrangeItems()},_optionChanged:function(i){var e=i.name;switch(e){case"width":this.callBase.apply(this,arguments),this._dimensionChanged();break;case"multiline":this.$element().toggleClass(qi,i.value);break;case"renderAs":case"useFlatButtons":case"useDefaultButtons":this._invalidate();break;case"compactMode":this._applyCompactMode();break;case"grouped":break;default:this.callBase.apply(this,arguments)}},_dispose:function(){this.callBase(),clearTimeout(this._waitParentAnimationTimeout)}});Ht("dxToolbarBase",Pa);var ka=["fullScreen","forceApplyBindings","dragOutsideBoundary","dragAndResizeArea","outsideDragFactor"],Ct=Wt();class La extends hn{constructor(e){var{fullScreen:t,forceApplyBindings:r,dragOutsideBoundary:n,dragAndResizeArea:o,outsideDragFactor:s}=e,a=un(e,ka);super(a),this._props=tr({},this._props,{fullScreen:t,forceApplyBindings:r,dragOutsideBoundary:n,dragAndResizeArea:o,outsideDragFactor:s}),this._$dragResizeContainer=void 0,this._outsideDragFactor=void 0,this._lastPositionBeforeFullScreen=void 0,this._updateDragResizeContainer(),this._updateOutsideDragFactor()}set fullScreen(e){this._props.fullScreen=e,e?this._fullScreenEnabled():this._fullScreenDisabled()}get $dragResizeContainer(){return this._$dragResizeContainer}get outsideDragFactor(){return this._outsideDragFactor}set dragAndResizeArea(e){this._props.dragAndResizeArea=e,this._updateDragResizeContainer()}set dragOutsideBoundary(e){this._props.dragOutsideBoundary=e,this._updateDragResizeContainer(),this._updateOutsideDragFactor()}set outsideDragFactor(e){this._props.outsideDragFactor=e,this._updateOutsideDragFactor()}updateContainer(e){super.updateContainer(e),this._updateDragResizeContainer()}dragHandled(){this.restorePositionOnNextRender(!1)}resizeHandled(){this.restorePositionOnNextRender(!1)}positionContent(){if(this._props.fullScreen)je(this._$content,{top:0,left:0}),this.detectVisualPositionChange();else{var e,t;(e=(t=this._props).forceApplyBindings)===null||e===void 0||e.call(t),!this._shouldRenderContentInitialPosition&&this._lastPositionBeforeFullScreen?(je(this._$content,this._lastPositionBeforeFullScreen),this._lastPositionBeforeFullScreen=void 0,this.detectVisualPositionChange()):super.positionContent()}}_updateOutsideDragFactor(){this._outsideDragFactor=this._getOutsideDragFactor()}_getOutsideDragFactor(){return this._props.dragOutsideBoundary?1:this._props.outsideDragFactor}_updateDragResizeContainer(){this._$dragResizeContainer=this._getDragResizeContainer()}_getDragResizeContainer(){if(this._props.dragOutsideBoundary)return b(Ct);if(this._props.dragAndResizeArea)return b(this._props.dragAndResizeArea);var e=cn().get(0)||this._props.container;return e?this._$markupContainer:b(Ct)}_getVisualContainer(){return this._props.fullScreen?b(Ct):super._getVisualContainer()}_fullScreenEnabled(){this.restorePositionOnNextRender(!1),this._lastPositionBeforeFullScreen=this._visualPosition}_fullScreenDisabled(){this.restorePositionOnNextRender(!1)}}var Fa=Wt(),At="dx-popup",$a="dx-popup-wrapper",Ma="dx-popup-fullscreen",Va="dx-popup-fullscreen-width",za="dx-popup-normal",Ha="dx-popup-content",Ua="dx-state-disabled",Wa="dx-popup-draggable",Ki="dx-popup-title",ja="dx-closebutton",Yi="dx-popup-bottom",qa="dx-has-close-button",Ga="dx-template-wrapper",Ka="dx-popup-flex-height",Ya="dx-popup-inherit-height",Qi=["cancel","clear","done"],Qa="default",Xa="normal",Za="text",Ja="contained",eh=di.safari&&ln(di.version,[11])<0,U={static:"",inherit:Ya,flex:Ka},th=i=>{var e=ue.current(),t=e.platform,r="bottom",n="before";if(t==="ios")switch(i){case"cancel":r="top";break;case"clear":r="top",n="after";break;case"done":n="after"}else if(t==="android")switch(i){case"cancel":case"done":n="after"}return{toolbar:r,location:n}},ih=dn.inherit({_supportedKeys:function(){return $(this.callBase(),{upArrow:i=>{var e;(e=this._drag)===null||e===void 0||e.moveUp(i)},downArrow:i=>{var e;(e=this._drag)===null||e===void 0||e.moveDown(i)},leftArrow:i=>{var e;(e=this._drag)===null||e===void 0||e.moveLeft(i)},rightArrow:i=>{var e;(e=this._drag)===null||e===void 0||e.moveRight(i)}})},_getDefaultOptions:function(){return $(this.callBase(),{fullScreen:!1,title:"",showTitle:!0,titleTemplate:"title",onTitleRendered:null,dragOutsideBoundary:!1,dragEnabled:!1,dragAndResizeArea:void 0,outsideDragFactor:0,onResizeStart:null,onResize:null,onResizeEnd:null,resizeEnabled:!1,toolbarItems:[],showCloseButton:!1,bottomTemplate:"bottom",useDefaultToolbarButtons:!1,useFlatToolbarButtons:!1,autoResizeEnabled:!0})},_defaultOptionsRules:function(){var i=fn();return this.callBase().concat([{device:{platform:"ios"},options:{animation:this._iosAnimation}},{device:{platform:"android"},options:{animation:this._androidAnimation}},{device:{platform:"generic"},options:{showCloseButton:!0}},{device:function(e){return ue.real().deviceType==="desktop"&&e.platform==="generic"},options:{dragEnabled:!0}},{device:function(){return ue.real().deviceType==="desktop"&&!ue.isSimulator()},options:{focusStateEnabled:!0}},{device:function(){return Dt(i)},options:{useDefaultToolbarButtons:!0,useFlatToolbarButtons:!0,showCloseButton:!1}}])},_iosAnimation:{show:{type:"slide",duration:400,from:{position:{my:"top",at:"bottom"}},to:{position:{my:"center",at:"center"}}},hide:{type:"slide",duration:400,from:{opacity:1,position:{my:"center",at:"center"}},to:{opacity:1,position:{my:"top",at:"bottom"}}}},_androidAnimation:function(){return this.option("fullScreen")?{show:{type:"slide",duration:300,from:{top:"30%",opacity:0},to:{top:0,opacity:1}},hide:{type:"slide",duration:300,from:{top:0,opacity:1},to:{top:"30%",opacity:0}}}:{show:{type:"fade",duration:400,from:0,to:1},hide:{type:"fade",duration:400,from:1,to:0}}},_init:function(){this.callBase(),this._updateResizeCallbackSkipCondition(),this.$element().addClass(At),this.$wrapper().addClass($a),this._$popupContent=this._$content.wrapInner(b("<div>").addClass(Ha)).children().eq(0)},_render:function(){var i=this.option("fullScreen");this._toggleFullScreenClass(i),this.callBase()},_toggleFullScreenClass:function(i){this.$overlayContent().toggleClass(Ma,i).toggleClass(za,!i)},_initTemplates:function(){this.callBase(),this._templateManager.addDefaultTemplates({title:new pt,bottom:new pt})},_getActionsList:function(){return this.callBase().concat(["onResizeStart","onResize","onResizeEnd"])},_contentResizeHandler:function(i){this._shouldSkipContentResize(i)||this._renderGeometry({shouldOnlyReposition:!0})},_doesShowAnimationChangeDimensions:function(){var i=this.option("animation");return["to","from"].some(e=>{var t,r=i==null||(t=i.show)===null||t===void 0?void 0:t[e];return mn(r)&&("width"in r||"height"in r)})},_updateResizeCallbackSkipCondition(){var i=this._doesShowAnimationChangeDimensions();this._shouldSkipContentResize=e=>i&&this._showAnimationProcessing||this._areContentDimensionsRendered(e)},_observeContentResize:function(i){if(!!this.option("useResizeObserver")){var e=this._$content.get(0);i?fi.observe(e,t=>{this._contentResizeHandler(t)}):fi.unobserve(e)}},_renderContentImpl:function(){this._renderTitle(),this.callBase(),this._renderResize(),this._renderBottom()},_renderTitle:function(){var i=this._getToolbarItems("top"),e=this.option("title"),t=this.option("showTitle");if(t&&!!e&&i.unshift({location:ue.current().ios?"center":"before",text:e}),t||i.length>0){this._$title&&this._$title.remove();var r=b("<div>").addClass(Ki).insertBefore(this.$content());this._$title=this._renderTemplateByType("titleTemplate",i,r).addClass(Ki),this._renderDrag(),this._executeTitleRenderAction(this._$title),this._$title.toggleClass(qa,this._hasCloseButton())}else this._$title&&this._$title.detach()},_renderTemplateByType:function(i,e,t,r){var{rtlEnabled:n,useDefaultToolbarButtons:o,useFlatToolbarButtons:s,disabled:a}=this.option(),h=this._getTemplateByOption(i),u=h instanceof pt;if(u){var d=$({},this.option("integrationOptions"),{skipTemplates:["content","title"]}),l=$(r,{items:e,rtlEnabled:n,useDefaultButtons:o,useFlatButtons:s,disabled:a,integrationOptions:d});this._getTemplate("dx-polymorph-widget").render({container:t,model:{widget:"dxToolbarBase",options:l}});var m=t.children("div");return t.replaceWith(m),m}else{var _=b(h.render({container:gt(t)}));return _.hasClass(Ga)&&(t.replaceWith(_),t=_),t}},_renderVisibilityAnimate:function(i){return this._observeContentResize(i),this.callBase(i)},_executeTitleRenderAction:function(i){this._getTitleRenderAction()({titleElement:gt(i)})},_getTitleRenderAction:function(){return this._titleRenderAction||this._createTitleRenderAction()},_createTitleRenderAction:function(){return this._titleRenderAction=this._createActionByOption("onTitleRendered",{element:this.element(),excludeValidators:["disabled","readOnly"]})},_getCloseButton:function(){return{toolbar:"top",location:"after",template:this._getCloseButtonRenderer()}},_getCloseButtonRenderer:function(){return(i,e,t)=>{var r=b("<div>").addClass(ja);this._createComponent(r,mi,{icon:"close",onClick:this._createToolbarItemAction(void 0),stylingMode:"text",integrationOptions:{}}),b(t).append(r)}},_getToolbarItems:function(i){var e=this.option("toolbarItems"),t=[];this._toolbarItemClasses=[];var r=ue.current().platform,n=0;return de(e,(o,s)=>{var a=ir(s.shortcut),h=a?th(s.shortcut):s;if(a&&r==="ios"&&n<2&&(h.toolbar="top",n++),h.toolbar=s.toolbar||h.toolbar||"top",h&&h.toolbar===i){a&&$(h,{location:s.location},this._getToolbarItemByAlias(s));var u=r==="generic";s.shortcut==="done"&&u||s.shortcut==="cancel"&&!u?t.unshift(h):t.push(h)}}),i==="top"&&this._hasCloseButton()&&t.push(this._getCloseButton()),t},_hasCloseButton(){return this.option("showCloseButton")&&this.option("showTitle")},_getLocalizationKey:i=>i.toLowerCase()==="done"?"OK":pn(i,!0),_getToolbarItemByAlias:function(i){var e=this,t=i.shortcut;if(!Qi.includes(t))return!1;var r=$({text:gn.format(this._getLocalizationKey(t)),onClick:this._createToolbarItemAction(i.onClick),integrationOptions:{},type:e.option("useDefaultToolbarButtons")?Qa:Xa,stylingMode:e.option("useFlatToolbarButtons")?Za:Ja},i.options||{}),n=At+"-"+t;return this._toolbarItemClasses.push(n),{template:function(o,s,a){var h=b("<div>").addClass(n).appendTo(a);e._createComponent(h,mi,r)}}},_createToolbarItemAction:function(i){return this._createAction(i,{afterExecute:function(e){e.component.hide()}})},_renderBottom:function(){var i=this._getToolbarItems("bottom");if(i.length){this._$bottom&&this._$bottom.remove();var e=b("<div>").addClass(Yi).insertAfter(this.$content());this._$bottom=this._renderTemplateByType("bottomTemplate",i,e,{compactMode:!0}).addClass(Yi),this._toggleClasses()}else this._$bottom&&this._$bottom.detach()},_toggleDisabledState:function(i){this.callBase(...arguments),this.$content().toggleClass(Ua,Boolean(i))},_toggleClasses:function(){var i=Qi;de(i,(e,t)=>{var r=At+"-"+t;this._toolbarItemClasses.includes(r)?(this.$wrapper().addClass(r+"-visible"),this._$bottom.addClass(r)):(this.$wrapper().removeClass(r+"-visible"),this._$bottom.removeClass(r))})},_toggleFocusClass(i,e){if(this.callBase(i,e),i&&!_n(this._zIndex)){var t=vn(this._zIndexInitValue());yn(this._zIndex),this._zIndex=t,this._$wrapper.css("zIndex",t),this._$content.css("zIndex",t)}},_getPositionControllerConfig(){var{fullScreen:i,forceApplyBindings:e,dragOutsideBoundary:t,dragAndResizeArea:r,outsideDragFactor:n}=this.option();return $({},this.callBase(),{fullScreen:i,forceApplyBindings:e,dragOutsideBoundary:t,dragAndResizeArea:r,outsideDragFactor:n})},_initPositionController(){this._positionController=new La(this._getPositionControllerConfig())},_getDragTarget:function(){return this.topToolbar()},_renderGeometry:function(i){var{visible:e,useResizeObserver:t}=this.option();if(e&&qe()){var r=this._showAnimationProcessing,n=r&&!(i!=null&&i.forceStopAnimation)&&t;this._isAnimationPaused=n||void 0,this._stopAnimation(),i!=null&&i.shouldOnlyReposition?this._positionController.positionContent():this._renderGeometryImpl(),n&&(this._animateShowing(),this._isAnimationPaused=void 0)}},_cacheDimensions:function(){!this.option("useResizeObserver")||(this._renderedDimensions={width:parseInt(q(this._$content),10),height:parseInt(zt(this._$content),10)})},_renderGeometryImpl:function(){this._resetContentHeight(),this.callBase(),this._cacheDimensions(),this._setContentHeight()},_resetContentHeight:function(){var i=this._getOptionValue("height");i==="auto"&&this.$content().css({height:"auto",maxHeight:"none"})},_renderDrag:function(){var i=this._getDragTarget(),e=this.option("dragEnabled");if(!!i){var t={dragEnabled:e,handle:i.get(0),draggableElement:this._$content.get(0),positionController:this._positionController};this._drag?this._drag.init(t):this._drag=new da(t),this.$overlayContent().toggleClass(Wa,e)}},_renderResize:function(){this._resizable=this._createComponent(this._$content,Qr,{handles:this.option("resizeEnabled")?"all":"none",onResizeEnd:i=>{this._resizeEndHandler(i),this._observeContentResize(!0)},onResize:i=>{this._setContentHeight(),this._actions.onResize(i)},onResizeStart:i=>{this._observeContentResize(!1),this._actions.onResizeStart(i)},minHeight:100,minWidth:100,area:this._positionController.$dragResizeContainer,keepAspectRatio:!1})},_resizeEndHandler:function(i){var e=this._resizable.option("width"),t=this._resizable.option("height");e&&this._setOptionWithoutOptionChange("width",e),t&&this._setOptionWithoutOptionChange("height",t),this._cacheDimensions(),this._positionController.resizeHandled(),this._positionController.detectVisualPositionChange(i.event),this._actions.onResizeEnd(i)},_setContentHeight:function(){(this.option("forceApplyBindings")||Ut)();var i=this.$overlayContent().get(0),e=this._chooseHeightStrategy(i);this.$content().css(this._getHeightCssStyles(e,i)),this._setHeightClasses(this.$overlayContent(),e)},_heightStrategyChangeOffset:function(i,e){return i===U.flex?-e:0},_chooseHeightStrategy:function(i){var e=i.style.width==="auto"||i.style.width==="",t=U.static;return this._isAutoHeight()&&this.option("autoResizeEnabled")&&(e||eh?t=U.inherit:t=U.flex),t},_getHeightCssStyles:function(i,e){var t={},r=this._getOptionValue("maxHeight",e),n=this._getOptionValue("minHeight",e),o=this._splitPopupHeight(),s=o.header+o.footer+o.contentVerticalOffsets+o.popupVerticalOffsets+this._heightStrategyChangeOffset(i,o.popupVerticalPaddings);if(i===U.static){if(!this._isAutoHeight()||r||n){var a=this.option("fullScreen")?Math.min(ce(e).height,Wt().innerHeight):ce(e).height,h=a-s;t={height:Math.max(0,h),minHeight:"auto",maxHeight:"auto"}}}else{var u=b(this._positionController.$visualContainer).get(0),d=bn(r,-s,u),l=wn(n,-s,u);t={height:"auto",minHeight:l,maxHeight:d}}return t},_setHeightClasses:function(i,e){var t="";for(var r in U)U[r]!==e&&(t+=" "+U[r]);i.removeClass(t).addClass(e)},_isAutoHeight:function(){return this.$overlayContent().get(0).style.height==="auto"},_splitPopupHeight:function(){var i=this.topToolbar(),e=this.bottomToolbar();return{header:pi(i&&i.get(0)),footer:pi(e&&e.get(0)),contentVerticalOffsets:_t(this.$overlayContent().get(0),!0),popupVerticalOffsets:_t(this.$content().get(0),!0),popupVerticalPaddings:_t(this.$content().get(0),!1)}},_isAllWindowCovered:function(){return this.callBase()||this.option("fullScreen")},_renderDimensions:function(){this.option("fullScreen")?this.$overlayContent().css({width:"100%",height:"100%",minWidth:"",maxWidth:"",minHeight:"",maxHeight:""}):this.callBase(),qe()&&this._renderFullscreenWidthClass()},_clean:function(){this.callBase(),this._observeContentResize(!1)},_renderFullscreenWidthClass:function(){this.$overlayContent().toggleClass(Va,L(this.$overlayContent())===q(Fa))},refreshPosition:function(){this._renderPosition()},_optionChanged:function(i){var e,t=i.value;switch(i.name){case"disabled":this.callBase(i),this._renderTitle(),this._renderBottom();break;case"animation":this._updateResizeCallbackSkipCondition();break;case"showTitle":case"title":case"titleTemplate":this._renderTitle(),this._renderGeometry(),he(this.$overlayContent());break;case"bottomTemplate":this._renderBottom(),this._renderGeometry(),he(this.$overlayContent());break;case"container":if(this.callBase(i),this.option("resizeEnabled")){var r;(r=this._resizable)===null||r===void 0||r.option("area",this._positionController.$dragResizeContainer)}break;case"width":case"height":this.callBase(i),(e=this._resizable)===null||e===void 0||e.option(i.name,i.value);break;case"onTitleRendered":this._createTitleRenderAction(i.value);break;case"toolbarItems":case"useDefaultToolbarButtons":case"useFlatToolbarButtons":var n=!i.fullName.match(/^toolbarItems((\[\d+\])(\.(options|visible).*)?)?$/);this._renderTitle(),this._renderBottom(),n&&(this._renderGeometry(),he(this.$overlayContent()));break;case"dragEnabled":this._renderDrag();break;case"dragAndResizeArea":this._positionController.dragAndResizeArea=t,this.option("resizeEnabled")&&this._resizable.option("area",this._positionController.$dragResizeContainer),this._positionController.positionContent();break;case"dragOutsideBoundary":this._positionController.dragOutsideBoundary=t,this.option("resizeEnabled")&&this._resizable.option("area",this._positionController.$dragResizeContainer);break;case"outsideDragFactor":this._positionController.outsideDragFactor=t;break;case"resizeEnabled":this._renderResize(),this._renderGeometry();break;case"autoResizeEnabled":this._renderGeometry(),he(this.$overlayContent());break;case"fullScreen":this._positionController.fullScreen=i.value,this._toggleFullScreenClass(i.value),this._toggleSafariScrolling(),this._renderGeometry(),he(this.$overlayContent());break;case"showCloseButton":this._renderTitle();break;default:this.callBase(i)}},bottomToolbar:function(){return this._$bottom},topToolbar:function(){return this._$title},$content:function(){return this._$popupContent},content:function(){return gt(this.$content())},$overlayContent:function(){return this._$content}});Ht("dxPopup",ih);export{hh as C,sh as I,nh as M,ih as P,ah as S,Pa as T,oh as a,uh as b,Ta as c,dh as g,lh as r,ch as s,fh as u,mh as v};
