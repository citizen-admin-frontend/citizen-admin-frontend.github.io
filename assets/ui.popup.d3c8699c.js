import{h as H,t as ae,D as zn,u as Hn,x as Un,y as U,i as Dr,z as N,B as re,C as _e,E as Yt,F as Wn,G as Me,H as Or,j as $,I as le,$ as y,J as j,K as xt,L as jn,M as ie,N as Rr,P as Qt,s as yt,Q as Xt,R as Zt,S as Ve,m as Bt,U as Jt,V as xr,W as at,n as Pt,X as Br,Y as Pr,Z as Nr,a0 as qn,k as bt,a1 as $r,a2 as oe,a3 as Lr,a4 as kr,a5 as Fr,a6 as Mr,q as Nt,a7 as en,a8 as Vr,O as zr,a9 as Hr,aa as se,ab as lt,ac as Ur,ad as tn,ae as ct,af as nn,ag as Wr,ah as jr,ai as qr,aj as Gr,ak as Kr,al as Yr,am as Qr,an as rn,ao as ht}from"./index.897b922b.js";/**
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
 */const Gn=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let i=n.charCodeAt(r);i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):(i&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},Xr=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const i=n[t++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=n[t++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=n[t++],o=n[t++],a=n[t++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=n[t++],o=n[t++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},Kn={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<n.length;i+=3){const s=n[i],o=i+1<n.length,a=o?n[i+1]:0,l=i+2<n.length,c=l?n[i+2]:0,d=s>>2,h=(s&3)<<4|a>>4;let p=(a&15)<<2|c>>6,_=c&63;l||(_=64,o||(p=64)),r.push(t[d],t[h],t[p],t[_])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(Gn(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):Xr(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<n.length;){const s=t[n.charAt(i++)],a=i<n.length?t[n.charAt(i)]:0;++i;const c=i<n.length?t[n.charAt(i)]:64;++i;const h=i<n.length?t[n.charAt(i)]:64;if(++i,s==null||a==null||c==null||h==null)throw Error();const p=s<<2|a>>4;if(r.push(p),c!==64){const _=a<<4&240|c>>2;if(r.push(_),h!==64){const v=c<<6&192|h;r.push(v)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}},Zr=function(n){const e=Gn(n);return Kn.encodeByteArray(e,!0)},ze=function(n){return Zr(n).replace(/\./g,"")},Jr=function(n){try{return Kn.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};function ei(){return typeof indexedDB=="object"}function ti(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},i.onupgradeneeded=()=>{t=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(t){e(t)}})}function ni(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const ri=()=>ni().__FIREBASE_DEFAULTS__,ii=()=>{if(typeof process>"u"||typeof process.env>"u")return;const n=process.env.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},si=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&Jr(n[1]);return e&&JSON.parse(e)},Yn=()=>{try{return ri()||ii()||si()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},oi=n=>{var e,t;return(t=(e=Yn())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},ai=n=>{const e=oi(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),r]:[e.substring(0,t),r]},li=()=>{var n;return(n=Yn())===null||n===void 0?void 0:n.config};/**
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
 */class ci{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
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
 */function hi(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",i=n.iat||0,s=n.sub||n.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},n),a="";return[ze(JSON.stringify(t)),ze(JSON.stringify(o)),a].join(".")}/**
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
 */const ui="FirebaseError";class fe extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=ui,Object.setPrototypeOf(this,fe.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Qn.prototype.create)}}class Qn{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?di(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new fe(i,a,r)}}function di(n,e){return n.replace(fi,(t,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const fi=/\{\$([^}]+)}/g;function wt(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const i of t){if(!r.includes(i))return!1;const s=n[i],o=e[i];if(sn(s)&&sn(o)){if(!wt(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!t.includes(i))return!1;return!0}function sn(n){return n!==null&&typeof n=="object"}/**
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
 */function F(n){return n&&n._delegate?n._delegate:n}class we{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Y="[DEFAULT]";/**
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
 */class pi{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new ci;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:t});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(gi(e))try{this.getOrInitializeService({instanceIdentifier:Y})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(t);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Y){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Y){return this.instances.has(e)}getOptions(e=Y){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,t){var r;const i=this.normalizeInstanceIdentifier(t),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(!!r)for(const i of r)try{i(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:mi(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Y){return this.component?this.component.multipleInstances?e:Y:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function mi(n){return n===Y?void 0:n}function gi(n){return n.instantiationMode==="EAGER"}/**
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
 */class _i{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new pi(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var g;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(g||(g={}));const vi={debug:g.DEBUG,verbose:g.VERBOSE,info:g.INFO,warn:g.WARN,error:g.ERROR,silent:g.SILENT},yi=g.INFO,bi={[g.DEBUG]:"log",[g.VERBOSE]:"log",[g.INFO]:"info",[g.WARN]:"warn",[g.ERROR]:"error"},wi=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),i=bi[e];if(i)console[i](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Xn{constructor(e){this.name=e,this._logLevel=yi,this._logHandler=wi,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in g))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?vi[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,g.DEBUG,...e),this._logHandler(this,g.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,g.VERBOSE,...e),this._logHandler(this,g.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,g.INFO,...e),this._logHandler(this,g.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,g.WARN,...e),this._logHandler(this,g.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,g.ERROR,...e),this._logHandler(this,g.ERROR,...e)}}const Si=(n,e)=>e.some(t=>n instanceof t);let on,an;function Ei(){return on||(on=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Ti(){return an||(an=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Zn=new WeakMap,St=new WeakMap,Jn=new WeakMap,ut=new WeakMap,$t=new WeakMap;function Ci(n){const e=new Promise((t,r)=>{const i=()=>{n.removeEventListener("success",s),n.removeEventListener("error",o)},s=()=>{t(q(n.result)),i()},o=()=>{r(n.error),i()};n.addEventListener("success",s),n.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&Zn.set(t,n)}).catch(()=>{}),$t.set(e,n),e}function Ai(n){if(St.has(n))return;const e=new Promise((t,r)=>{const i=()=>{n.removeEventListener("complete",s),n.removeEventListener("error",o),n.removeEventListener("abort",o)},s=()=>{t(),i()},o=()=>{r(n.error||new DOMException("AbortError","AbortError")),i()};n.addEventListener("complete",s),n.addEventListener("error",o),n.addEventListener("abort",o)});St.set(n,e)}let Et={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return St.get(n);if(e==="objectStoreNames")return n.objectStoreNames||Jn.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return q(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function Ii(n){Et=n(Et)}function Di(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(dt(this),e,...t);return Jn.set(r,e.sort?e.sort():[e]),q(r)}:Ti().includes(n)?function(...e){return n.apply(dt(this),e),q(Zn.get(this))}:function(...e){return q(n.apply(dt(this),e))}}function Oi(n){return typeof n=="function"?Di(n):(n instanceof IDBTransaction&&Ai(n),Si(n,Ei())?new Proxy(n,Et):n)}function q(n){if(n instanceof IDBRequest)return Ci(n);if(ut.has(n))return ut.get(n);const e=Oi(n);return e!==n&&(ut.set(n,e),$t.set(e,n)),e}const dt=n=>$t.get(n);function Ri(n,e,{blocked:t,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(n,e),a=q(o);return r&&o.addEventListener("upgradeneeded",l=>{r(q(o.result),l.oldVersion,l.newVersion,q(o.transaction))}),t&&o.addEventListener("blocked",()=>t()),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",()=>i())}).catch(()=>{}),a}const xi=["get","getKey","getAll","getAllKeys","count"],Bi=["put","add","delete","clear"],ft=new Map;function ln(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(ft.get(e))return ft.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,i=Bi.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(i||xi.includes(t)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let c=l.store;return r&&(c=c.index(a.shift())),(await Promise.all([c[t](...a),i&&l.done]))[0]};return ft.set(e,s),s}Ii(n=>({...n,get:(e,t,r)=>ln(e,t)||n.get(e,t,r),has:(e,t)=>!!ln(e,t)||n.has(e,t)}));/**
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
 */class Pi{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(Ni(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function Ni(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Tt="@firebase/app",cn="0.8.2";/**
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
 */const X=new Xn("@firebase/app"),$i="@firebase/app-compat",Li="@firebase/analytics-compat",ki="@firebase/analytics",Fi="@firebase/app-check-compat",Mi="@firebase/app-check",Vi="@firebase/auth",zi="@firebase/auth-compat",Hi="@firebase/database",Ui="@firebase/database-compat",Wi="@firebase/functions",ji="@firebase/functions-compat",qi="@firebase/installations",Gi="@firebase/installations-compat",Ki="@firebase/messaging",Yi="@firebase/messaging-compat",Qi="@firebase/performance",Xi="@firebase/performance-compat",Zi="@firebase/remote-config",Ji="@firebase/remote-config-compat",es="@firebase/storage",ts="@firebase/storage-compat",ns="@firebase/firestore",rs="@firebase/firestore-compat",is="firebase",ss="9.12.1";/**
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
 */const Ct="[DEFAULT]",os={[Tt]:"fire-core",[$i]:"fire-core-compat",[ki]:"fire-analytics",[Li]:"fire-analytics-compat",[Mi]:"fire-app-check",[Fi]:"fire-app-check-compat",[Vi]:"fire-auth",[zi]:"fire-auth-compat",[Hi]:"fire-rtdb",[Ui]:"fire-rtdb-compat",[Wi]:"fire-fn",[ji]:"fire-fn-compat",[qi]:"fire-iid",[Gi]:"fire-iid-compat",[Ki]:"fire-fcm",[Yi]:"fire-fcm-compat",[Qi]:"fire-perf",[Xi]:"fire-perf-compat",[Zi]:"fire-rc",[Ji]:"fire-rc-compat",[es]:"fire-gcs",[ts]:"fire-gcs-compat",[ns]:"fire-fst",[rs]:"fire-fst-compat","fire-js":"fire-js",[is]:"fire-js-all"};/**
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
 */const He=new Map,At=new Map;function as(n,e){try{n.container.addComponent(e)}catch(t){X.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function Ue(n){const e=n.name;if(At.has(e))return X.debug(`There were multiple attempts to register component ${e}.`),!1;At.set(e,n);for(const t of He.values())as(t,n);return!0}function ls(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}/**
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
 */const cs={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},G=new Qn("app","Firebase",cs);/**
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
 */class hs{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new we("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw G.create("app-deleted",{appName:this._name})}}/**
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
 */const us=ss;function er(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Ct,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw G.create("bad-app-name",{appName:String(i)});if(t||(t=li()),!t)throw G.create("no-options");const s=He.get(i);if(s){if(wt(t,s.options)&&wt(r,s.config))return s;throw G.create("duplicate-app",{appName:i})}const o=new _i(i);for(const l of At.values())o.addComponent(l);const a=new hs(t,r,o);return He.set(i,a),a}function ds(n=Ct){const e=He.get(n);if(!e&&n===Ct)return er();if(!e)throw G.create("no-app",{appName:n});return e}function ce(n,e,t){var r;let i=(r=os[n])!==null&&r!==void 0?r:n;t&&(i+=`-${t}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),X.warn(a.join(" "));return}Ue(new we(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const fs="firebase-heartbeat-database",ps=1,Se="firebase-heartbeat-store";let pt=null;function tr(){return pt||(pt=Ri(fs,ps,{upgrade:(n,e)=>{switch(e){case 0:n.createObjectStore(Se)}}}).catch(n=>{throw G.create("idb-open",{originalErrorMessage:n.message})})),pt}async function ms(n){var e;try{return(await tr()).transaction(Se).objectStore(Se).get(nr(n))}catch(t){if(t instanceof fe)X.warn(t.message);else{const r=G.create("idb-get",{originalErrorMessage:(e=t)===null||e===void 0?void 0:e.message});X.warn(r.message)}}}async function hn(n,e){var t;try{const i=(await tr()).transaction(Se,"readwrite");return await i.objectStore(Se).put(e,nr(n)),i.done}catch(r){if(r instanceof fe)X.warn(r.message);else{const i=G.create("idb-set",{originalErrorMessage:(t=r)===null||t===void 0?void 0:t.message});X.warn(i.message)}}}function nr(n){return`${n.name}!${n.options.appId}`}/**
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
 */const gs=1024,_s=30*24*60*60*1e3;class vs{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new bs(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const t=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=un();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:t}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=_s}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=un(),{heartbeatsToSend:t,unsentEntries:r}=ys(this._heartbeatsCache.heartbeats),i=ze(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function un(){return new Date().toISOString().substring(0,10)}function ys(n,e=gs){const t=[];let r=n.slice();for(const i of n){const s=t.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),dn(t)>e){s.dates.pop();break}}else if(t.push({agent:i.agent,dates:[i.date]}),dn(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class bs{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return ei()?ti().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await ms(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return hn(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return hn(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function dn(n){return ze(JSON.stringify({version:2,heartbeats:n})).length}/**
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
 */function ws(n){Ue(new we("platform-logger",e=>new Pi(e),"PRIVATE")),Ue(new we("heartbeat",e=>new vs(e),"PRIVATE")),ce(Tt,cn,n),ce(Tt,cn,"esm2017"),ce("fire-js","")}ws("");var Ss="firebase",Es="9.12.1";/**
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
 */ce(Ss,Es,"app");/**
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
 */class I{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}I.UNAUTHENTICATED=new I(null),I.GOOGLE_CREDENTIALS=new I("google-credentials-uid"),I.FIRST_PARTY=new I("first-party-uid"),I.MOCK_USER=new I("mock-user");/**
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
 */let pe="9.12.1";/**
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
 */const he=new Xn("@firebase/firestore");function We(n,...e){if(he.logLevel<=g.DEBUG){const t=e.map(kt);he.debug(`Firestore (${pe}): ${n}`,...t)}}function Lt(n,...e){if(he.logLevel<=g.ERROR){const t=e.map(kt);he.error(`Firestore (${pe}): ${n}`,...t)}}function rr(n,...e){if(he.logLevel<=g.WARN){const t=e.map(kt);he.warn(`Firestore (${pe}): ${n}`,...t)}}function kt(n){if(typeof n=="string")return n;try{return e=n,JSON.stringify(e)}catch{return n}/**
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
 */function b(n="Unexpected state"){const e=`FIRESTORE (${pe}) INTERNAL ASSERTION FAILED: `+n;throw Lt(e),new Error(e)}function M(n,e){n||b()}function Xe(n,e){return n}/**
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
 */const fn="ok",Ts="cancelled",ve="unknown",f="invalid-argument",Cs="deadline-exceeded",As="not-found",Is="permission-denied",It="unauthenticated",Ds="resource-exhausted",ue="failed-precondition",Os="aborted",Rs="out-of-range",ir="unimplemented",xs="internal",Bs="unavailable";class u extends fe{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class sr{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Ps{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(I.UNAUTHENTICATED))}shutdown(){}}class Ns{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class $s{constructor(e){this.auth=null,e.onInit(t=>{this.auth=t})}getToken(){return this.auth?this.auth.getToken().then(e=>e?(M(typeof e.accessToken=="string"),new sr(e.accessToken,new I(this.auth.getUid()))):null):Promise.resolve(null)}invalidateToken(){}start(e,t){}shutdown(){}}class Ls{constructor(e,t,r,i){this.t=e,this.i=t,this.o=r,this.u=i,this.type="FirstParty",this.user=I.FIRST_PARTY,this.h=new Map}l(){return this.u?this.u():(M(!(typeof this.t!="object"||this.t===null||!this.t.auth||!this.t.auth.getAuthHeaderValueForFirstParty)),this.t.auth.getAuthHeaderValueForFirstParty([]))}get headers(){this.h.set("X-Goog-AuthUser",this.i);const e=this.l();return e&&this.h.set("Authorization",e),this.o&&this.h.set("X-Goog-Iam-Authorization-Token",this.o),this.h}}class ks{constructor(e,t,r,i){this.t=e,this.i=t,this.o=r,this.u=i}getToken(){return Promise.resolve(new Ls(this.t,this.i,this.o,this.u))}start(e,t){e.enqueueRetryable(()=>t(I.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Fs{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Ms{constructor(e){this.m=e,this.appCheck=null,e.onInit(t=>{this.appCheck=t})}getToken(){return this.appCheck?this.appCheck.getToken().then(e=>e?(M(typeof e.token=="string"),new Fs(e.token)):null):Promise.resolve(null)}invalidateToken(){}start(e,t){}shutdown(){}}/**
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
 */class Vs{constructor(e,t,r,i,s,o,a,l){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=l}}class Ee{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new Ee("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Ee&&e.projectId===this.projectId&&e.database===this.database}}class Te{constructor(e,t,r){t===void 0?t=0:t>e.length&&b(),r===void 0?r=e.length-t:r>e.length-t&&b(),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return Te.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Te?e.forEach(r=>{t.push(r)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let i=0;i<r;i++){const s=e.get(i),o=t.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class S extends Te{construct(e,t,r){return new S(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new u(f,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter(i=>i.length>0))}return new S(t)}static emptyPath(){return new S([])}}const zs=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class O extends Te{construct(e,t,r){return new O(e,t,r)}static isValidIdentifier(e){return zs.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),O.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new O(["__name__"])}static fromServerFormat(e){const t=[];let r="",i=0;const s=()=>{if(r.length===0)throw new u(f,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new u(f,"Path has trailing escape character: "+e);const l=e[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new u(f,"Path has invalid escape sequence: "+e);r+=l,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new u(f,"Unterminated ` in path: "+e);return new O(t)}static emptyPath(){return new O([])}}/**
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
 */class C{constructor(e){this.path=e}static fromPath(e){return new C(S.fromString(e))}static fromName(e){return new C(S.fromString(e).popFirst(5))}static empty(){return new C(S.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&S.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return S.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new C(new S(e.slice()))}}/**
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
 */function or(n,e,t){if(!t)throw new u(f,`Function ${n}() cannot be called with an empty ${e}.`)}function pn(n){if(!C.isDocumentKey(n))throw new u(f,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function mn(n){if(C.isDocumentKey(n))throw new u(f,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function Ze(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(t){return t.constructor?t.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":b()}function De(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new u(f,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Ze(n);throw new u(f,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
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
 */function Hs(n){return n==null}function je(n){return n===0&&1/n==-1/0}/**
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
 */const Us={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */var gn,m;function _n(n){if(n===void 0)return Lt("RPC_ERROR","HTTP error has no status"),ve;switch(n){case 200:return fn;case 400:return ue;case 401:return It;case 403:return Is;case 404:return As;case 409:return Os;case 416:return Rs;case 429:return Ds;case 499:return Ts;case 500:return ve;case 501:return ir;case 503:return Bs;case 504:return Cs;default:return n>=200&&n<300?fn:n>=400&&n<500?ue:n>=500&&n<600?xs:ve}}/**
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
 */(m=gn||(gn={}))[m.OK=0]="OK",m[m.CANCELLED=1]="CANCELLED",m[m.UNKNOWN=2]="UNKNOWN",m[m.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",m[m.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",m[m.NOT_FOUND=5]="NOT_FOUND",m[m.ALREADY_EXISTS=6]="ALREADY_EXISTS",m[m.PERMISSION_DENIED=7]="PERMISSION_DENIED",m[m.UNAUTHENTICATED=16]="UNAUTHENTICATED",m[m.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",m[m.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",m[m.ABORTED=10]="ABORTED",m[m.OUT_OF_RANGE=11]="OUT_OF_RANGE",m[m.UNIMPLEMENTED=12]="UNIMPLEMENTED",m[m.INTERNAL=13]="INTERNAL",m[m.UNAVAILABLE=14]="UNAVAILABLE",m[m.DATA_LOSS=15]="DATA_LOSS";class Ws extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http";this.p=t+"://"+e.host,this.g="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get v(){return!1}I(e,t,r,i,s){const o=this.T(e,t);We("RestConnection","Sending: ",o,r);const a={};return this.A(a,i,s),this.R(e,o,a,r).then(l=>(We("RestConnection","Received: ",l),l),l=>{throw rr("RestConnection",`${e} failed with error: `,l,"url: ",o,"request:",r),l})}P(e,t,r,i,s,o){return this.I(e,t,r,i,s)}A(e,t,r){e["X-Goog-Api-Client"]="gl-js/ fire/"+pe,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((i,s)=>e[s]=i),r&&r.headers.forEach((i,s)=>e[s]=i)}T(e,t){const r=Us[e];return`${this.p}/v1/${t}:${r}`}}{constructor(e,t){super(e),this.V=t}N(e,t){throw new Error("Not supported by FetchConnection")}async R(e,t,r,i){const s=JSON.stringify(i);let o;try{o=await this.V(t,{method:"POST",headers:r,body:s})}catch(a){throw new u(_n(a.status),"Request failed with error: "+a.statusText)}if(!o.ok)throw new u(_n(o.status),"Request failed with error: "+o.statusText);return o.json()}}/**
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
 */function js(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
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
 */class qs{static D(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=js(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<t&&(r+=e.charAt(i[s]%e.length))}return r}}function E(n,e){return n<e?-1:n>e?1:0}function ar(n,e,t){return n.length===e.length&&n.every((r,i)=>t(r,e[i]))}/**
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
 */class R{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new u(f,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new u(f,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new u(f,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new u(f,"Timestamp seconds out of range: "+e)}static now(){return R.fromMillis(Date.now())}static fromDate(e){return R.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*t));return new R(t,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?E(this.nanoseconds,e.nanoseconds):E(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class P{constructor(e){this.timestamp=e}static fromTimestamp(e){return new P(e)}static min(){return new P(new R(0,0))}static max(){return new P(new R(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */function vn(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function Oe(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}/**
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
 */class qe{constructor(e,t){this.comparator=e,this.root=t||T.EMPTY}insert(e,t){return new qe(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,T.BLACK,null,null))}remove(e){return new qe(this.comparator,this.root.remove(e,this.comparator).copy(null,null,T.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return t+r.left.size;i<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,r)=>(e(t,r),!1))}toString(){const e=[];return this.inorderTraversal((t,r)=>(e.push(`${t}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Be(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Be(this.root,e,this.comparator,!1)}getReverseIterator(){return new Be(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Be(this.root,e,this.comparator,!0)}}class Be{constructor(e,t,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=t?r(e.key,t):1,t&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class T{constructor(e,t,r,i,s){this.key=e,this.value=t,this.color=r!=null?r:T.RED,this.left=i!=null?i:T.EMPTY,this.right=s!=null?s:T.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,i,s){return new T(e!=null?e:this.key,t!=null?t:this.value,r!=null?r:this.color,i!=null?i:this.left,s!=null?s:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,t,r),null):s===0?i.copy(null,t,null,null,null):i.copy(null,null,null,null,i.right.insert(e,t,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return T.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,i=this;if(t(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,t),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),t(e,i.key)===0){if(i.right.isEmpty())return T.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,t))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,T.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,T.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw b();const e=this.left.check();if(e!==this.right.check())throw b();return e+(this.isRed()?0:1)}}T.EMPTY=null,T.RED=!0,T.BLACK=!1;T.EMPTY=new class{constructor(){this.size=0}get key(){throw b()}get value(){throw b()}get color(){throw b()}get left(){throw b()}get right(){throw b()}copy(n,e,t,r,i){return this}insert(n,e,t){return new T(n,e)}remove(n,e){return this}isEmpty(){return!0}inorderTraversal(n){return!1}reverseTraversal(n){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Ge{constructor(e){this.comparator=e,this.data=new qe(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,r)=>(e(t),!1))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;t(i.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new yn(this.data.getIterator())}getIteratorFrom(e){return new yn(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(r=>{t=t.add(r)}),t}isEqual(e){if(!(e instanceof Ge)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const i=t.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new Ge(this.comparator);return t.data=e,t}}class yn{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Z{constructor(e){this.fields=e,e.sort(O.comparator)}static empty(){return new Z([])}unionWith(e){let t=new Ge(O.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new Z(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return ar(this.fields,e.fields,(t,r)=>t.isEqual(r))}}/**
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
 */class V{constructor(e){this.binaryString=e}static fromBase64String(e){const t=atob(e);return new V(t)}static fromUint8Array(e){const t=function(r){let i="";for(let s=0;s<r.length;++s)i+=String.fromCharCode(r[s]);return i}(e);return new V(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const t=new Uint8Array(e.length);for(let r=0;r<e.length;r++)t[r]=e.charCodeAt(r);return t}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return E(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}V.EMPTY_BYTE_STRING=new V("");const Gs=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function J(n){if(M(!!n),typeof n=="string"){let e=0;const t=Gs.exec(n);if(M(!!t),t[1]){let i=t[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:w(n.seconds),nanos:w(n.nanos)}}function w(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Ce(n){return typeof n=="string"?V.fromBase64String(n):V.fromUint8Array(n)}/**
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
 */function lr(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="server_timestamp"}function cr(n){const e=n.mapValue.fields.__previous_value__;return lr(e)?cr(e):e}function Ae(n){const e=J(n.mapValue.fields.__local_write_time__.timestampValue);return new R(e.seconds,e.nanos)}/**
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
 */const Pe={fields:{__type__:{stringValue:"__max__"}}};function ee(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?lr(n)?4:function(e){return(((e.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}(n)?9007199254740991:10:b()}function Ke(n,e){if(n===e)return!0;const t=ee(n);if(t!==ee(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return Ae(n).isEqual(Ae(e));case 3:return function(r,i){if(typeof r.timestampValue=="string"&&typeof i.timestampValue=="string"&&r.timestampValue.length===i.timestampValue.length)return r.timestampValue===i.timestampValue;const s=J(r.timestampValue),o=J(i.timestampValue);return s.seconds===o.seconds&&s.nanos===o.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(r,i){return Ce(r.bytesValue).isEqual(Ce(i.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(r,i){return w(r.geoPointValue.latitude)===w(i.geoPointValue.latitude)&&w(r.geoPointValue.longitude)===w(i.geoPointValue.longitude)}(n,e);case 2:return function(r,i){if("integerValue"in r&&"integerValue"in i)return w(r.integerValue)===w(i.integerValue);if("doubleValue"in r&&"doubleValue"in i){const s=w(r.doubleValue),o=w(i.doubleValue);return s===o?je(s)===je(o):isNaN(s)&&isNaN(o)}return!1}(n,e);case 9:return ar(n.arrayValue.values||[],e.arrayValue.values||[],Ke);case 10:return function(r,i){const s=r.mapValue.fields||{},o=i.mapValue.fields||{};if(vn(s)!==vn(o))return!1;for(const a in s)if(s.hasOwnProperty(a)&&(o[a]===void 0||!Ke(s[a],o[a])))return!1;return!0}(n,e);default:return b()}}function Ie(n,e){return(n.values||[]).find(t=>Ke(t,e))!==void 0}function Ye(n,e){if(n===e)return 0;const t=ee(n),r=ee(e);if(t!==r)return E(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return E(n.booleanValue,e.booleanValue);case 2:return function(i,s){const o=w(i.integerValue||i.doubleValue),a=w(s.integerValue||s.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(n,e);case 3:return bn(n.timestampValue,e.timestampValue);case 4:return bn(Ae(n),Ae(e));case 5:return E(n.stringValue,e.stringValue);case 6:return function(i,s){const o=Ce(i),a=Ce(s);return o.compareTo(a)}(n.bytesValue,e.bytesValue);case 7:return function(i,s){const o=i.split("/"),a=s.split("/");for(let l=0;l<o.length&&l<a.length;l++){const c=E(o[l],a[l]);if(c!==0)return c}return E(o.length,a.length)}(n.referenceValue,e.referenceValue);case 8:return function(i,s){const o=E(w(i.latitude),w(s.latitude));return o!==0?o:E(w(i.longitude),w(s.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return function(i,s){const o=i.values||[],a=s.values||[];for(let l=0;l<o.length&&l<a.length;++l){const c=Ye(o[l],a[l]);if(c)return c}return E(o.length,a.length)}(n.arrayValue,e.arrayValue);case 10:return function(i,s){if(i===Pe&&s===Pe)return 0;if(i===Pe)return 1;if(s===Pe)return-1;const o=i.fields||{},a=Object.keys(o),l=s.fields||{},c=Object.keys(l);a.sort(),c.sort();for(let d=0;d<a.length&&d<c.length;++d){const h=E(a[d],c[d]);if(h!==0)return h;const p=Ye(o[a[d]],l[c[d]]);if(p!==0)return p}return E(a.length,c.length)}(n.mapValue,e.mapValue);default:throw b()}}function bn(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return E(n,e);const t=J(n),r=J(e),i=E(t.seconds,r.seconds);return i!==0?i:E(t.nanos,r.nanos)}function wn(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function hr(n){return!!n&&"arrayValue"in n}function Sn(n){return!!n&&"nullValue"in n}function En(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function mt(n){return!!n&&"mapValue"in n}function ye(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return Oe(n.mapValue.fields,(t,r)=>e.mapValue.fields[t]=ye(r)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=ye(n.arrayValue.values[t]);return e}return Object.assign({},n)}class B{constructor(e){this.value=e}static empty(){return new B({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!mt(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=ye(t)}setAll(e){let t=O.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!t.isImmediateParentOf(a)){const l=this.getFieldsMap(t);this.applyChanges(l,r,i),r={},i=[],t=a.popLast()}o?r[a.lastSegment()]=ye(o):i.push(a.lastSegment())});const s=this.getFieldsMap(t);this.applyChanges(s,r,i)}delete(e){const t=this.field(e.popLast());mt(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return Ke(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=t.mapValue.fields[e.get(r)];mt(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=i),t=i}return t.mapValue.fields}applyChanges(e,t,r){Oe(t,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new B(ye(this.value))}}/**
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
 */class W{constructor(e,t,r,i,s,o){this.key=e,this.documentType=t,this.version=r,this.readTime=i,this.data=s,this.documentState=o}static newInvalidDocument(e){return new W(e,0,P.min(),P.min(),B.empty(),0)}static newFoundDocument(e,t,r){return new W(e,1,t,P.min(),r,0)}static newNoDocument(e,t){return new W(e,2,t,P.min(),B.empty(),0)}static newUnknownDocument(e,t){return new W(e,3,t,P.min(),B.empty(),2)}convertToFoundDocument(e,t){return this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=B.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=B.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=P.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof W&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new W(this.key,this.documentType,this.version,this.readTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Ks{constructor(e,t=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.$=null}}function Tn(n,e=null,t=[],r=[],i=null,s=null,o=null){return new Ks(n,e,t,r,i,s,o)}class L extends class{}{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.F(e,t,r):new Ys(e,t,r):t==="array-contains"?new Zs(e,r):t==="in"?new Js(e,r):t==="not-in"?new eo(e,r):t==="array-contains-any"?new to(e,r):new L(e,t,r)}static F(e,t,r){return t==="in"?new Qs(e,r):new Xs(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&this.S(Ye(t,this.value)):t!==null&&ee(this.value)===ee(t)&&this.S(Ye(t,this.value))}S(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return b()}}q(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}class Ys extends L{constructor(e,t,r){super(e,t,r),this.key=C.fromName(r.referenceValue)}matches(e){const t=C.comparator(e.key,this.key);return this.S(t)}}class Qs extends L{constructor(e,t){super(e,"in",t),this.keys=ur("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class Xs extends L{constructor(e,t){super(e,"not-in",t),this.keys=ur("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function ur(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(r=>C.fromName(r.referenceValue))}class Zs extends L{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return hr(t)&&Ie(t.arrayValue,this.value)}}class Js extends L{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&Ie(this.value.arrayValue,t)}}class eo extends L{constructor(e,t){super(e,"not-in",t)}matches(e){if(Ie(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&!Ie(this.value.arrayValue,t)}}class to extends L{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!hr(t)||!t.arrayValue.values)&&t.arrayValue.values.some(r=>Ie(this.value.arrayValue,r))}}class Cn{constructor(e,t){this.position=e,this.inclusive=t}}class Fe{constructor(e,t="asc"){this.field=e,this.dir=t}}/**
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
 */class dr{constructor(e,t=null,r=[],i=[],s=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=l,this.O=null,this.k=null,this.startAt,this.endAt}}function fr(n){return n.explicitOrderBy.length>0?n.explicitOrderBy[0].field:null}function pr(n){for(const e of n.filters)if(e.q())return e.field;return null}function no(n){return n.collectionGroup!==null}function An(n){const e=Xe(n);if(e.O===null){e.O=[];const t=pr(e),r=fr(e);if(t!==null&&r===null)t.isKeyField()||e.O.push(new Fe(t)),e.O.push(new Fe(O.keyField(),"asc"));else{let i=!1;for(const s of e.explicitOrderBy)e.O.push(s),s.field.isKeyField()&&(i=!0);if(!i){const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.O.push(new Fe(O.keyField(),s))}}}return e.O}function ro(n){const e=Xe(n);if(!e.k)if(e.limitType==="F")e.k=Tn(e.path,e.collectionGroup,An(e),e.filters,e.limit,e.startAt,e.endAt);else{const t=[];for(const s of An(e)){const o=s.dir==="desc"?"asc":"desc";t.push(new Fe(s.field,o))}const r=e.endAt?new Cn(e.endAt.position,e.endAt.inclusive):null,i=e.startAt?new Cn(e.startAt.position,e.startAt.inclusive):null;e.k=Tn(e.path,e.collectionGroup,t,e.filters,e.limit,r,i)}return e.k}/**
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
 */function io(n,e){return function(t){return typeof t=="number"&&Number.isInteger(t)&&!je(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}(e)?function(t){return{integerValue:""+t}}(e):function(t,r){if(t.C){if(isNaN(r))return{doubleValue:"NaN"};if(r===1/0)return{doubleValue:"Infinity"};if(r===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:je(r)?"-0":r}}(n,e)}/**
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
 */class Je{constructor(){this._=void 0}}class mr extends Je{}class so extends Je{constructor(e){super(),this.elements=e}}class oo extends Je{constructor(e){super(),this.elements=e}}class ao extends Je{constructor(e,t){super(),this.L=e,this.M=t}}/**
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
 */class lo{constructor(e,t){this.field=e,this.transform=t}}class Q{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Q}static exists(e){return new Q(void 0,e)}static updateTime(e){return new Q(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}class et{}class gr extends et{constructor(e,t,r,i=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Ft extends et{constructor(e,t,r,i,s=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}class _r extends et{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class co extends et{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */const ho=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),uo=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))();class fo{constructor(e,t){this.databaseId=e,this.C=t}}function Dt(n,e){return n.C?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function po(n,e){return n.C?e.toBase64():e.toUint8Array()}function mo(n,e){return Dt(n,e.toTimestamp())}function go(n){return M(!!n),P.fromTimestamp(function(e){const t=J(e);return new R(t.seconds,t.nanos)}(n))}function Mt(n,e){return function(t){return new S(["projects",t.projectId,"databases",t.database])}(n).child("documents").child(e).canonicalString()}function Ot(n,e){return Mt(n.databaseId,e.path)}function _o(n,e){const t=function(i){const s=S.fromString(i);return M(vr(s)),s}(e);if(t.get(1)!==n.databaseId.projectId)throw new u(f,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new u(f,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new C((M((r=t).length>4&&r.get(4)==="documents"),r.popFirst(5)));var r}function In(n,e){return Mt(n.databaseId,e)}function vo(n){return new S(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function Dn(n,e,t){return{name:Ot(n,e),fields:t.value.mapValue.fields}}function yo(n,e){let t;if(e instanceof gr)t={update:Dn(n,e.key,e.value)};else if(e instanceof _r)t={delete:Ot(n,e.key)};else if(e instanceof Ft)t={update:Dn(n,e.key,e.data),updateMask:Eo(e.fieldMask)};else{if(!(e instanceof co))return b();t={verify:Ot(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(r=>function(i,s){const o=s.transform;if(o instanceof mr)return{fieldPath:s.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof so)return{fieldPath:s.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof oo)return{fieldPath:s.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof ao)return{fieldPath:s.field.canonicalString(),increment:o.M};throw b()}(0,r))),e.precondition.isNone||(t.currentDocument=function(r,i){return i.updateTime!==void 0?{updateTime:mo(r,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:b()}(n,e.precondition)),t}function bo(n,e){const t={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(t.parent=In(n,r),t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(t.parent=In(n,r.popLast()),t.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(l){if(l.length===0)return;const c=l.map(d=>function(h){if(h.op==="=="){if(En(h.value))return{unaryFilter:{field:ne(h.field),op:"IS_NAN"}};if(Sn(h.value))return{unaryFilter:{field:ne(h.field),op:"IS_NULL"}}}else if(h.op==="!="){if(En(h.value))return{unaryFilter:{field:ne(h.field),op:"IS_NOT_NAN"}};if(Sn(h.value))return{unaryFilter:{field:ne(h.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ne(h.field),op:So(h.op),value:h.value}}}(d));return c.length===1?c[0]:{compositeFilter:{op:"AND",filters:c}}}(e.filters);i&&(t.structuredQuery.where=i);const s=function(l){if(l.length!==0)return l.map(c=>function(d){return{field:ne(d.field),direction:wo(d.dir)}}(c))}(e.orderBy);s&&(t.structuredQuery.orderBy=s);const o=function(l,c){return l.C||Hs(c)?c:{value:c}}(n,e.limit);var a;return o!==null&&(t.structuredQuery.limit=o),e.startAt&&(t.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(t.structuredQuery.endAt=function(l){return{before:!l.inclusive,values:l.position}}(e.endAt)),t}function wo(n){return ho[n]}function So(n){return uo[n]}function ne(n){return{fieldPath:n.canonicalString()}}function Eo(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function vr(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
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
 */function Vt(n){return new fo(n,!0)}/**
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
 */class To extends class{}{constructor(e,t,r,i){super(),this.authCredentials=e,this.appCheckCredentials=t,this.tt=r,this.L=i,this.et=!1}nt(){if(this.et)throw new u(ue,"The client has already been terminated.")}I(e,t,r){return this.nt(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.tt.I(e,t,r,i,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===It&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new u(ve,i.toString())})}P(e,t,r,i){return this.nt(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.tt.P(e,t,r,s,o,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===It&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new u(ve,s.toString())})}terminate(){this.et=!0}}async function zt(n,e){const t=Xe(n),r=vo(t.L)+"/documents",i={writes:e.map(s=>yo(t.L,s))};await t.I("Commit",r,i)}async function Co(n,e){const t=Xe(n),r=bo(t.L,ro(e));return(await t.P("RunQuery",r.parent,{structuredQuery:r.structuredQuery})).filter(i=>!!i.document).map(i=>function(s,o,a){const l=_o(s,o.name),c=go(o.updateTime),d=new B({mapValue:{fields:o.fields}}),h=W.newFoundDocument(l,c,d);return a&&h.setHasCommittedMutations(),a?h.setHasCommittedMutations():h}(t.L,i.document,void 0))}/**
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
 */const be=new Map;function tt(n){if(n._terminated)throw new u(ue,"The client has already been terminated.");if(!be.has(n)){We("ComponentProvider","Initializing Datastore");const s=function(l){return new Ws(l,fetch.bind(null))}((e=n._databaseId,t=n.app.options.appId||"",r=n._persistenceKey,i=n._freezeSettings(),new Vs(e,t,r,i.host,i.ssl,i.experimentalForceLongPolling,i.experimentalAutoDetectLongPolling,i.useFetchStreams))),o=Vt(n._databaseId),a=function(l,c,d,h){return new To(l,c,d,h)}(n._authCredentials,n._appCheckCredentials,s,o);be.set(n,a)}var e,t,r,i;/**
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
*/return be.get(n)}class On{constructor(e){var t;if(e.host===void 0){if(e.ssl!==void 0)throw new u(f,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(t=e.ssl)===null||t===void 0||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new u(f,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,function(r,i,s,o){if(i===!0&&o===!0)throw new u(f,`${r} and ${s} cannot be used together.`)}("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
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
 */class nt{constructor(e,t,r,i){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new On({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new u(ue,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new u(ue,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new On(e),e.credentials!==void 0&&(this._authCredentials=function(t){if(!t)return new Ps;switch(t.type){case"gapi":const r=t.client;return new ks(r,t.sessionIndex||"0",t.iamToken||null,t.authTokenFactory||null);case"provider":return t.client;default:throw new u(f,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const t=be.get(e);t&&(We("ComponentProvider","Removing Datastore"),be.delete(e),t.terminate())}(this),Promise.resolve()}}function Ao(n,e){const t=typeof n=="object"?n:ds(),r=typeof n=="string"?n:e||"(default)",i=ls(t,"firestore/lite").getImmediate({identifier:r});if(!i._initialized){const s=ai("firestore");s&&Io(i,...s)}return i}function Io(n,e,t,r={}){var i;const s=(n=De(n,nt))._getSettings();if(s.host!=="firestore.googleapis.com"&&s.host!==e&&rr("Host has been set in both settings() and useEmulator(), emulator host will be used"),n._setSettings(Object.assign(Object.assign({},s),{host:`${e}:${t}`,ssl:!1})),r.mockUserToken){let o,a;if(typeof r.mockUserToken=="string")o=r.mockUserToken,a=I.MOCK_USER;else{o=hi(r.mockUserToken,(i=n._app)===null||i===void 0?void 0:i.options.projectId);const l=r.mockUserToken.sub||r.mockUserToken.user_id;if(!l)throw new u(f,"mockUserToken must contain 'sub' or 'user_id' field!");a=new I(l)}n._authCredentials=new Ns(new sr(o,a))}}/**
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
 */class D{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new k(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new D(this.firestore,e,this._key)}}class Re{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Re(this.firestore,e,this._query)}}class k extends Re{constructor(e,t,r){super(e,t,new dr(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new D(this.firestore,null,new C(e))}withConverter(e){return new k(this.firestore,e,this._path)}}function me(n,e,...t){if(n=F(n),or("collection","path",e),n instanceof nt){const r=S.fromString(e,...t);return mn(r),new k(n,null,r)}{if(!(n instanceof D||n instanceof k))throw new u(f,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(S.fromString(e,...t));return mn(r),new k(n.firestore,null,r)}}function Ht(n,e,...t){if(n=F(n),arguments.length===1&&(e=qs.D()),or("doc","path",e),n instanceof nt){const r=S.fromString(e,...t);return pn(r),new D(n,null,new C(r))}{if(!(n instanceof D||n instanceof k))throw new u(f,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(S.fromString(e,...t));return pn(r),new D(n.firestore,n instanceof k?n.converter:null,new C(r))}}/**
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
 */class de{constructor(e){this._byteString=e}static fromBase64String(e){try{return new de(V.fromBase64String(e))}catch(t){throw new u(f,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new de(V.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class rt{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new u(f,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new O(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class it{constructor(e){this._methodName=e}}/**
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
 */class Ut{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new u(f,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new u(f,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return E(this._lat,e._lat)||E(this._long,e._long)}}/**
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
 */const Do=/^__.*__$/;class Oo{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new Ft(e,this.data,this.fieldMask,t,this.fieldTransforms):new gr(e,this.data,t,this.fieldTransforms)}}class yr{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return new Ft(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function br(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw b()}}class Wt{constructor(e,t,r,i,s,o){this.settings=e,this.databaseId=t,this.L=r,this.ignoreUndefinedProperties=i,s===void 0&&this.rt(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get st(){return this.settings.st}it(e){return new Wt(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.L,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ot(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),i=this.it({path:r,ut:!1});return i.ct(e),i}at(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),i=this.it({path:r,ut:!1});return i.rt(),i}ht(e){return this.it({path:void 0,ut:!0})}lt(e){return Qe(e,this.settings.methodName,this.settings.ft||!1,this.path,this.settings.dt)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}rt(){if(this.path)for(let e=0;e<this.path.length;e++)this.ct(this.path.get(e))}ct(e){if(e.length===0)throw this.lt("Document fields must not be empty");if(br(this.st)&&Do.test(e))throw this.lt('Document fields cannot begin and end with "__"')}}class Ro{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.L=r||Vt(e)}wt(e,t,r,i=!1){return new Wt({st:e,methodName:t,dt:r,path:O.emptyPath(),ut:!1,ft:i},this.databaseId,this.L,this.ignoreUndefinedProperties)}}function jt(n){const e=n._freezeSettings(),t=Vt(n._databaseId);return new Ro(n._databaseId,!!e.ignoreUndefinedProperties,t)}function xo(n,e,t,r,i,s={}){const o=n.wt(s.merge||s.mergeFields?2:0,e,t,i);Gt("Data must be an object, but it was:",o,r);const a=wr(r,o);let l,c;if(s.merge)l=new Z(o.fieldMask),c=o.fieldTransforms;else if(s.mergeFields){const d=[];for(const h of s.mergeFields){const p=Rt(e,h,t);if(!o.contains(p))throw new u(f,`Field '${p}' is specified in your field mask but missing from your input data.`);Er(d,p)||d.push(p)}l=new Z(d),c=o.fieldTransforms.filter(h=>l.covers(h.field))}else l=null,c=o.fieldTransforms;return new Oo(new B(a),l,c)}class st extends it{_toFieldTransform(e){if(e.st!==2)throw e.st===1?e.lt(`${this._methodName}() can only appear at the top level of your update data`):e.lt(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof st}}class qt extends it{_toFieldTransform(e){return new lo(e.path,new mr)}isEqual(e){return e instanceof qt}}function Bo(n,e,t,r){const i=n.wt(1,e,t);Gt("Data must be an object, but it was:",i,r);const s=[],o=B.empty();Oe(r,(l,c)=>{const d=Kt(e,l,t);c=F(c);const h=i.at(d);if(c instanceof st)s.push(d);else{const p=xe(c,h);p!=null&&(s.push(d),o.set(d,p))}});const a=new Z(s);return new yr(o,a,i.fieldTransforms)}function Po(n,e,t,r,i,s){const o=n.wt(1,e,t),a=[Rt(e,r,t)],l=[i];if(s.length%2!=0)throw new u(f,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let p=0;p<s.length;p+=2)a.push(Rt(e,s[p])),l.push(s[p+1]);const c=[],d=B.empty();for(let p=a.length-1;p>=0;--p)if(!Er(c,a[p])){const _=a[p];let v=l[p];v=F(v);const K=o.at(_);if(v instanceof st)c.push(_);else{const x=xe(v,K);x!=null&&(c.push(_),d.set(_,x))}}const h=new Z(c);return new yr(d,h,o.fieldTransforms)}function No(n,e,t,r=!1){return xe(t,n.wt(r?4:3,e))}function xe(n,e){if(Sr(n=F(n)))return Gt("Unsupported field value:",e,n),wr(n,e);if(n instanceof it)return function(t,r){if(!br(r.st))throw r.lt(`${t._methodName}() can only be used with update() and set()`);if(!r.path)throw r.lt(`${t._methodName}() is not currently supported inside arrays`);const i=t._toFieldTransform(r);i&&r.fieldTransforms.push(i)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.ut&&e.st!==4)throw e.lt("Nested arrays are not supported");return function(t,r){const i=[];let s=0;for(const o of t){let a=xe(o,r.ht(s));a==null&&(a={nullValue:"NULL_VALUE"}),i.push(a),s++}return{arrayValue:{values:i}}}(n,e)}return function(t,r){if((t=F(t))===null)return{nullValue:"NULL_VALUE"};if(typeof t=="number")return io(r.L,t);if(typeof t=="boolean")return{booleanValue:t};if(typeof t=="string")return{stringValue:t};if(t instanceof Date){const i=R.fromDate(t);return{timestampValue:Dt(r.L,i)}}if(t instanceof R){const i=new R(t.seconds,1e3*Math.floor(t.nanoseconds/1e3));return{timestampValue:Dt(r.L,i)}}if(t instanceof Ut)return{geoPointValue:{latitude:t.latitude,longitude:t.longitude}};if(t instanceof de)return{bytesValue:po(r.L,t._byteString)};if(t instanceof D){const i=r.databaseId,s=t.firestore._databaseId;if(!s.isEqual(i))throw r.lt(`Document reference is for database ${s.projectId}/${s.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Mt(t.firestore._databaseId||r.databaseId,t._key.path)}}throw r.lt(`Unsupported field value: ${Ze(t)}`)}(n,e)}function wr(n,e){const t={};return function(r){for(const i in r)if(Object.prototype.hasOwnProperty.call(r,i))return!1;return!0}(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Oe(n,(r,i)=>{const s=xe(i,e.ot(r));s!=null&&(t[r]=s)}),{mapValue:{fields:t}}}function Sr(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof R||n instanceof Ut||n instanceof de||n instanceof D||n instanceof it)}function Gt(n,e,t){if(!Sr(t)||!function(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}(t)){const r=Ze(t);throw r==="an object"?e.lt(n+" a custom object"):e.lt(n+" "+r)}}function Rt(n,e,t){if((e=F(e))instanceof rt)return e._internalPath;if(typeof e=="string")return Kt(n,e);throw Qe("Field path arguments must be of type string or ",n,!1,void 0,t)}const $o=new RegExp("[~\\*/\\[\\]]");function Kt(n,e,t){if(e.search($o)>=0)throw Qe(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new rt(...e.split("."))._internalPath}catch{throw Qe(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function Qe(n,e,t,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;t&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(s||o)&&(l+=" (found",s&&(l+=` in field ${r}`),o&&(l+=` in document ${i}`),l+=")"),new u(f,a+n+l)}function Er(n,e){return n.some(t=>t.isEqual(e))}/**
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
 */class Lo{constructor(e,t,r,i,s){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new D(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new Tr(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Cr("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class Tr extends Lo{data(){return super.data()}}class ko{constructor(e,t){this._docs=t,this.query=e}get docs(){return[...this._docs]}get size(){return this.docs.length}get empty(){return this.docs.length===0}forEach(e,t){this._docs.forEach(e,t)}}function Cr(n,e){return typeof e=="string"?Kt(n,e):e instanceof rt?e._internalPath:e._delegate._internalPath}/**
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
 */class Fo{}function Mo(n,...e){for(const t of e)n=t._apply(n);return n}class Vo extends Fo{constructor(e,t,r){super(),this.gt=e,this.vt=t,this.bt=r,this.type="where"}_apply(e){const t=jt(e.firestore),r=function(i,s,o,a,l,c,d){let h;if(l.isKeyField()){if(c==="array-contains"||c==="array-contains-any")throw new u(f,`Invalid Query. You can't perform '${c}' queries on documentId().`);if(c==="in"||c==="not-in"){xn(d,c);const _=[];for(const v of d)_.push(Rn(a,i,v));h={arrayValue:{values:_}}}else h=Rn(a,i,d)}else c!=="in"&&c!=="not-in"&&c!=="array-contains-any"||xn(d,c),h=No(o,s,d,c==="in"||c==="not-in");const p=L.create(l,c,h);return function(_,v){if(v.q()){const x=pr(_);if(x!==null&&!x.isEqual(v.field))throw new u(f,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${x.toString()}' and '${v.field.toString()}'`);const A=fr(_);A!==null&&Ho(_,v.field,A)}const K=function(x,A){for(const te of x.filters)if(A.indexOf(te.op)>=0)return te.op;return null}(_,function(x){switch(x){case"!=":return["!=","not-in"];case"array-contains":return["array-contains","array-contains-any","not-in"];case"in":return["array-contains-any","in","not-in"];case"array-contains-any":return["array-contains","array-contains-any","in","not-in"];case"not-in":return["array-contains","array-contains-any","in","not-in","!="];default:return[]}}(v.op));if(K!==null)throw K===v.op?new u(f,`Invalid query. You cannot use more than one '${v.op.toString()}' filter.`):new u(f,`Invalid query. You cannot use '${v.op.toString()}' filters with '${K.toString()}' filters.`)}(i,p),p}(e._query,"where",t,e.firestore._databaseId,this.gt,this.vt,this.bt);return new Re(e.firestore,e.converter,function(i,s){const o=i.filters.concat([s]);return new dr(i.path,i.collectionGroup,i.explicitOrderBy.slice(),o,i.limit,i.limitType,i.startAt,i.endAt)}(e._query,r))}}function zo(n,e,t){const r=e,i=Cr("where",n);return new Vo(i,r,t)}function Rn(n,e,t){if(typeof(t=F(t))=="string"){if(t==="")throw new u(f,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!no(e)&&t.indexOf("/")!==-1)throw new u(f,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const r=e.path.child(S.fromString(t));if(!C.isDocumentKey(r))throw new u(f,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return wn(n,new C(r))}if(t instanceof D)return wn(n,t._key);throw new u(f,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Ze(t)}.`)}function xn(n,e){if(!Array.isArray(n)||n.length===0)throw new u(f,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`);if(n.length>10)throw new u(f,`Invalid Query. '${e.toString()}' filters support a maximum of 10 elements in the value array.`)}function Ho(n,e,t){if(!t.isEqual(e))throw new u(f,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${t.toString()}' instead.`)}/**
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
 */function Uo(n,e,t){let r;return r=n?t&&(t.merge||t.mergeFields)?n.toFirestore(e,t):n.toFirestore(e):e,r}class Wo extends class{convertValue(e,t="none"){switch(ee(e)){case 0:return null;case 1:return e.booleanValue;case 2:return w(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Ce(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 10:return this.convertObject(e.mapValue,t);default:throw b()}}convertObject(e,t){const r={};return Oe(e.fields,(i,s)=>{r[i]=this.convertValue(s,t)}),r}convertGeoPoint(e){return new Ut(w(e.latitude),w(e.longitude))}convertArray(e,t){return(e.values||[]).map(r=>this.convertValue(r,t))}convertServerTimestamp(e,t){switch(t){case"previous":const r=cr(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(Ae(e));default:return null}}convertTimestamp(e){const t=J(e);return new R(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=S.fromString(e);M(vr(r));const i=new Ee(r.get(1),r.get(3)),s=new C(r.popFirst(5));return i.isEqual(t)||Lt(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),s}}{constructor(e){super(),this.firestore=e}convertBytes(e){return new de(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new D(this.firestore,null,t)}}function Bn(n){(function(r){if(r.limitType==="L"&&r.explicitOrderBy.length===0)throw new u(ir,"limitToLast() queries require specifying at least one orderBy() clause")})((n=De(n,Re))._query);const e=tt(n.firestore),t=new Wo(n.firestore);return Co(e,n._query).then(r=>{const i=r.map(s=>new Tr(n.firestore,t,s.key,s,n.converter));return n._query.limitType==="L"&&i.reverse(),new ko(n,i)})}function jo(n,e,t,...r){const i=jt((n=De(n,D)).firestore);let s;return s=typeof(e=F(e))=="string"||e instanceof rt?Po(i,"updateDoc",n._key,e,t,r):Bo(i,"updateDoc",n._key,e),zt(tt(n.firestore),[s.toMutation(n._key,Q.exists(!0))])}function qo(n){return zt(tt((n=De(n,D)).firestore),[new _r(n._key,Q.none())])}function Go(n,e){const t=Ht(n=De(n,k)),r=Uo(n.converter,e),i=xo(jt(n.firestore),"addDoc",t._key,r,t.converter!==null,{});return zt(tt(n.firestore),[i.toMutation(t._key,Q.exists(!1))]).then(()=>t)}function Ha(){return new qt("serverTimestamp")}(function(n){pe=n})(`${us}_lite`),Ue(new we("firestore/lite",(n,{instanceIdentifier:e,options:t})=>{const r=n.getProvider("app").getImmediate(),i=new nt(new $s(n.getProvider("auth-internal")),new Ms(n.getProvider("app-check-internal")),function(s,o){if(!Object.prototype.hasOwnProperty.apply(s.options,["projectId"]))throw new u(f,'"projectId" not provided in firebase.initializeApp.');return new Ee(s.options.projectId,o)}(r,e),r);return t&&i._setSettings(t),i},"PUBLIC").setMultipleInstances(!0)),ce("firestore-lite","3.7.1",""),ce("firestore-lite","3.7.1","esm2017");const Ko={apiKey:"AIzaSyDFF6rtd0B18fPfiZO_VJ3rVaGjLqnf3no",authDomain:"munihuaurathesis.firebaseapp.com",projectId:"munihuaurathesis",storageBucket:"munihuaurathesis.appspot.com",messagingSenderId:"890591931409",appId:"1:890591931409:web:fe6745033e9cfc6577d5b0"},Yo=er(Ko),ge=Ao(Yo),Ua=me(ge,"Sectors"),Wa=me(ge,"Incidents"),ja=me(ge,"SystemUsers"),qa=me(ge,"RegisteredUsers"),Ga=me(ge,"IncidentTypes");me(ge,"Reports");const Ka=async(n,e)=>{let t=e.id;if(t){delete e.id;let r=Ht(n,t);await jo(r,e)}else t=(await Go(n,e)).id;e.id=t},Ya=async(n,e)=>{let t=Ht(n,e);await qo(t)},Qa=async(n,e)=>{if(e){let t=[];e.forEach(s=>{t.push(zo(s.field,s.operator,s.value))});let r=Mo(n,...t);return(await Bn(r)).docs.map(s=>Pn(s))}else return(await Bn(n)).docs.map(r=>Pn(r))},Pn=n=>{let e=Object.assign({},n.data());return e.id=n.id,e},Xa=(n,e)=>{e.forEach(t=>{if(t.required)if(n.hasOwnProperty(t.name)){if(!n[t.name])throw`${t.descripcion} es un campo requerido`}else throw`${t.descripcion} es un campo requerido`;if(t.isNumber&&isNaN(n[t.name]))throw`${t.descripcion} debe ser un valor num\xE9rico`;if(t.gt&&n[t.name]<t.value)throw`${t.descripcion} debe ser mayor que ${t.value}`;if(t.ge&&n[t.name]<t.value)throw`${t.descripcion} debe ser mayor o igual que ${t.value}`;if(t.lt&&n[t.name]>t.value)throw`${t.descripcion} debe ser menor que ${t.value}`;if(t.le&&n[t.name]>t.value)throw`${t.descripcion} debe ser menor o igual que ${t.value}`;if(t.lenghtMax&&n[t.name]&&n[t.name].length>t.lenghtMax)throw`El tama\xF1o de ${t.descripcion} debe ser como m\xE1ximo ${t.lenghtMax} caracteres`;if(t.lenghtMin&&n[t.name]&&n[t.name].length<t.lenghtMin)throw`El tama\xF1o de ${t.descripcion} debe ser como m\xEDnimo ${t.lenghtMin} caracteres`;if(t.regexp&&t.regexp.test(n[t.name]))throw`${t.descripcion} no tiene un formato v\xE1lido`})};var Ne=5;class Qo{constructor(e){this.init(e)}init(e){var{dragEnabled:t,handle:r,draggableElement:i,positionController:s}=e;this._positionController=s,this._draggableElement=i,this._handle=r,this._dragEnabled=t,this.unsubscribe(),t&&this.subscribe()}moveDown(e){this._moveTo(Ne,0,e)}moveUp(e){this._moveTo(-Ne,0,e)}moveLeft(e){this._moveTo(0,-Ne,e)}moveRight(e){this._moveTo(0,Ne,e)}subscribe(){var e=this._getEventNames();H.on(this._handle,e.startEventName,t=>{this._dragStartHandler(t)}),H.on(this._handle,e.updateEventName,t=>{this._dragUpdateHandler(t)}),H.on(this._handle,e.endEventName,t=>{this._dragEndHandler(t)})}unsubscribe(){var e=this._getEventNames();H.off(this._handle,e.startEventName),H.off(this._handle,e.updateEventName),H.off(this._handle,e.endEventName)}_getEventNames(){var e=ae(zn,"overlayDrag"),t=ae(Hn,"overlayDrag"),r=ae(Un,"overlayDrag");return{startEventName:e,updateEventName:t,endEventName:r}}_dragStartHandler(e){var t=this._getAllowedOffsets();this._prevOffset={x:0,y:0},e.targetElements=[],e.maxTopOffset=t.top,e.maxBottomOffset=t.bottom,e.maxLeftOffset=t.left,e.maxRightOffset=t.right}_dragUpdateHandler(e){var t={top:e.offset.y-this._prevOffset.y,left:e.offset.x-this._prevOffset.x};this._moveByOffset(t),this._prevOffset=e.offset}_dragEndHandler(e){this._positionController.dragHandled(),this._positionController.detectVisualPositionChange(e)}_moveTo(e,t,r){if(!!this._dragEnabled){r.preventDefault(),r.stopPropagation();var i=this._fitOffsetIntoAllowedRange(e,t);this._moveByOffset(i),this._dragEndHandler(r)}}_fitOffsetIntoAllowedRange(e,t){var r=this._getAllowedOffsets();return{top:U(e,-r.top,r.bottom),left:U(t,-r.left,r.right)}}_getContainerDimensions(){var e=Dr.getDocument(),t=this._positionController.$dragResizeContainer.get(0),r=N(t),i=re(t);return _e(t)&&(i=Math.max(e.body.clientHeight,i),r=Math.max(e.body.clientWidth,r)),{width:r,height:i}}_getContainerPosition(){var e=this._positionController.$dragResizeContainer.get(0);return _e(e)?{top:0,left:0}:Yt(e)}_getElementPosition(){return Yt(this._draggableElement)}_getInnerDelta(){var e=this._getContainerDimensions(),t=this._getElementDimensions();return{x:e.width-t.width,y:e.height-t.height}}_getOuterDelta(){var{width:e,height:t}=this._getElementDimensions(),r=this._positionController.outsideDragFactor;return{x:e*r,y:t*r}}_getFullDelta(){var e=this._getInnerDelta(),t=this._getOuterDelta();return{x:e.x+t.x,y:e.y+t.y}}_getElementDimensions(){return{width:this._draggableElement.offsetWidth,height:this._draggableElement.offsetHeight}}_getAllowedOffsets(){var e=this._getFullDelta(),t=e.y>=0&&e.x>=0;if(!t)return{top:0,bottom:0,left:0,right:0};var r=this._getElementPosition(),i=this._getContainerPosition(),s=this._getOuterDelta();return{top:r.top-i.top+s.y,bottom:-r.top+i.top+e.y,left:r.left-i.left+s.x,right:-r.left+i.left+e.x}}_moveByOffset(e){var t=Wn(this._draggableElement),r={left:t.left+e.left,top:t.top+e.top};Me(this._draggableElement,r)}}var ot="dxResizable",Xo="dx-resizable",Zo="dx-resizable-resizing",$e="dx-resizable-handle",Jo="dx-resizable-handle-top",ea="dx-resizable-handle-bottom",ta="dx-resizable-handle-left",na="dx-resizable-handle-right",Le="dx-resizable-handle-corner",ra=ae(zn,ot),ia=ae(Hn,ot),sa=ae(Un,ot),oa={left:"borderLeftWidth",top:"borderTopWidth",right:"borderRightWidth",bottom:"borderBottomWidth"},Ar=Or.inherit({_getDefaultOptions:function(){return $(this.callBase(),{handles:"all",step:"1",stepPrecision:"simple",area:void 0,minWidth:30,maxWidth:1/0,minHeight:30,maxHeight:1/0,onResizeStart:null,onResize:null,onResizeEnd:null,roundStepValue:!0,keepAspectRatio:!0})},_init:function(){this.callBase(),this.$element().addClass(Xo)},_initMarkup:function(){this.callBase(),this._renderHandles()},_render:function(){this.callBase(),this._renderActions()},_renderActions:function(){this._resizeStartAction=this._createActionByOption("onResizeStart"),this._resizeEndAction=this._createActionByOption("onResizeEnd"),this._resizeAction=this._createActionByOption("onResize")},_renderHandles:function(){this._handles=[];var n=this.option("handles");if(!(n==="none"||!n)){var e=n==="all"?["top","bottom","left","right"]:n.split(" "),t={};le(e,(r,i)=>{t[i]=!0,this._renderHandle(i)}),t.bottom&&t.right&&this._renderHandle("corner-bottom-right"),t.bottom&&t.left&&this._renderHandle("corner-bottom-left"),t.top&&t.right&&this._renderHandle("corner-top-right"),t.top&&t.left&&this._renderHandle("corner-top-left"),this._attachEventHandlers()}},_renderHandle:function(n){var e=y("<div>").addClass($e).addClass($e+"-"+n).appendTo(this.$element());this._handles.push(e)},_attachEventHandlers:function(){if(!this.option("disabled")){var n={};n[ra]=this._dragStartHandler.bind(this),n[ia]=this._dragHandler.bind(this),n[sa]=this._dragEndHandler.bind(this),this._handles.forEach(e=>{H.on(e,n,{direction:"both",immediate:!0})})}},_detachEventHandlers:function(){this._handles.forEach(n=>{H.off(n)})},_toggleEventHandlers:function(n){n?this._attachEventHandlers():this._detachEventHandlers()},_getElementSize:function(){var n=this.$element();return n.css("boxSizing")==="border-box"?{width:N(n),height:re(n)}:{width:j(n),height:xt(n)}},_dragStartHandler:function(n){var e=this.$element();if(e.is(".dx-state-disabled, .dx-state-disabled *")){n.cancel=!0;return}this._toggleResizingClass(!0),this._movingSides=this._getMovingSides(n),this._elementLocation=Wn(e),this._elementSize=this._getElementSize(),this._renderDragOffsets(n),this._resizeStartAction({event:n,width:this._elementSize.width,height:this._elementSize.height,handles:this._movingSides}),n.targetElements=null},_toggleResizingClass:function(n){this.$element().toggleClass(Zo,n)},_renderDragOffsets:function(n){var e=this._getArea();if(!!e){var t=y(n.target).closest("."+$e),r=N(t),i=re(t),s=t.offset(),o=e.offset,a=this._getAreaScrollOffset();n.maxLeftOffset=this._leftMaxOffset=s.left-o.left-a.scrollX,n.maxRightOffset=this._rightMaxOffset=o.left+e.width-s.left-r+a.scrollX,n.maxTopOffset=this._topMaxOffset=s.top-o.top-a.scrollY,n.maxBottomOffset=this._bottomMaxOffset=o.top+e.height-s.top-i+a.scrollY}},_getBorderWidth:function(n,e){if(_e(n.get(0)))return 0;var t=n.css(oa[e]);return parseInt(t)||0},_proportionate:function(n,e){var t=this._elementSize,r=n==="x"?t.width/t.height:t.height/t.width;return e*r},_getProportionalDelta:function(n){var{x:e,y:t}=n,r=this._proportionate("y",e);if(r>=t)return{x:e,y:r};var i=this._proportionate("x",t);return i>=e?{x:i,y:t}:{x:0,y:0}},_getDirectionName:function(n){var e=this._movingSides;return n==="x"?e.left?"left":"right":e.top?"top":"bottom"},_fitIntoArea:function(n,e){var t,r=this._getDirectionName(n);return Math.min(e,(t=this["_".concat(r,"MaxOffset")])!==null&&t!==void 0?t:1/0)},_fitDeltaProportionally:function(n){var e=jn({},n),t=this._elementSize,{minWidth:r,minHeight:i,maxWidth:s,maxHeight:o}=this.option(),a=()=>t.width+e.x,l=()=>t.height+e.y,c=v=>e[v]===this._fitIntoArea(v,e[v]),d=()=>Jt(a(),r,s)&&c("x"),h=()=>Jt(l(),i,o)&&c("y");if(!d()){var p=this._fitIntoArea("x",U(a(),r,s)-t.width);e={x:p,y:this._proportionate("y",p)}}if(!h()){var _=this._fitIntoArea("y",U(l(),i,o)-t.height);e={x:this._proportionate("x",_),y:_}}return d()&&h()?e:{x:0,y:0}},_fitDelta:function(n){var{x:e,y:t}=n,r=this._elementSize,{minWidth:i,minHeight:s,maxWidth:o,maxHeight:a}=this.option();return{x:U(r.width+e,i,o)-r.width,y:U(r.height+t,s,a)-r.height}},_getDeltaByOffset:function(n){var e=this._movingSides,t=this._isCornerHandler(e)&&this.option("keepAspectRatio"),r={x:n.x*(e.left?-1:1),y:n.y*(e.top?-1:1)};if(t){var i=this._getProportionalDelta(r),s=this._fitDeltaProportionally(i);r=s}else{var o=this._fitDelta(r),a=this._roundByStep(o);r=a}return r},_updatePosition:function(n,e){var{width:t,height:r}=e,i=this._elementLocation,s=this._movingSides,o=this.$element(),a=this._getElementSize(),l=n.y*(s.top?-1:1)-((a.height||r)-r),c=n.x*(s.left?-1:1)-((a.width||t)-t);Me(o,{top:i.top+(s.top?l:0),left:i.left+(s.left?c:0)})},_dragHandler:function(n){var e=this._getOffset(n),t=this._getDeltaByOffset(e),r=this._updateDimensions(t);this._updatePosition(t,r),this._triggerResizeAction(n,r)},_updateDimensions:function(n){var e=c=>c.substring(c.length-2)==="px",t=this.option("stepPrecision")==="strict",r=this._elementSize,i=r.width+n.x,s=r.height+n.y,o=this.$element().get(0).style,a=n.x||t||e(o.width),l=n.y||t||e(o.height);return a&&this.option({width:i}),l&&this.option({height:s}),{width:a?i:r.width,height:l?s:r.height}},_triggerResizeAction:function(n,e){var{width:t,height:r}=e;this._resizeAction({event:n,width:this.option("width")||t,height:this.option("height")||r,handles:this._movingSides}),ie(this.$element())},_isCornerHandler:n=>Object.values(n).reduce((e,t)=>e^t,0)===0,_getOffset:function(n){var e=n.offset,t=this._movingSides;return!t.left&&!t.right&&(e.x=0),!t.top&&!t.bottom&&(e.y=0),e},_roundByStep:function(n){return this.option("stepPrecision")==="strict"?this._roundStrict(n):this._roundNotStrict(n)},_getSteps:function(){return Rr(this.option("step"),!this.option("roundStepValue"))},_roundNotStrict:function(n){var e=this._getSteps();return{x:n.x-n.x%e.h,y:n.y-n.y%e.v}},_roundStrict:function(n){var e=this._movingSides,t={x:n.x*(e.left?-1:1),y:n.y*(e.top?-1:1)},r=this._getSteps(),i=this._elementLocation,s=this._elementSize,o=e.left?i.left:i.left+s.width,a=e.top?i.top:i.top+s.height,l=(o+t.x)%r.h,c=(a+t.y)%r.v,d=Math.sign||(A=>(A=+A,A===0||isNaN(A)?A:A>0?1:-1)),h=(A,te)=>(1+.2*d(te))%1*A,p=(A,te)=>Math.abs(A)<.2*te,_=t.x-l,v=t.y-c;l>h(r.h,t.x)&&(_+=r.h),c>h(r.v,t.y)&&(v+=r.v);var K=(e.left||e.right)&&!p(t.x,r.h)?_:0,x=(e.top||e.bottom)&&!p(t.y,r.v)?v:0;return{x:K*(e.left?-1:1),y:x*(e.top?-1:1)}},_getMovingSides:function(n){var e=y(n.target),t=e.hasClass(Le+"-top-left"),r=e.hasClass(Le+"-top-right"),i=e.hasClass(Le+"-bottom-left"),s=e.hasClass(Le+"-bottom-right");return{top:e.hasClass(Jo)||t||r,left:e.hasClass(ta)||t||i,bottom:e.hasClass(ea)||i||s,right:e.hasClass(na)||r||s}},_getArea:function(){var n=this.option("area");return Qt(n)&&(n=n.call(this)),yt(n)?this._getAreaFromObject(n):this._getAreaFromElement(n)},_getAreaScrollOffset:function(){var n=this.option("area"),e=!Qt(n)&&!yt(n),t={scrollY:0,scrollX:0};if(e){var r=y(n)[0];_e(r)&&(t.scrollX=r.pageXOffset,t.scrollY=r.pageYOffset)}return t},_getAreaFromObject:function(n){var e={width:n.right-n.left,height:n.bottom-n.top,offset:{left:n.left,top:n.top}};return this._correctAreaGeometry(e),e},_getAreaFromElement:function(n){var e=y(n),t;return e.length&&(t={width:Xt(e),height:Zt(e),offset:$({top:0,left:0},_e(e[0])?{}:e.offset())},this._correctAreaGeometry(t,e)),t},_correctAreaGeometry:function(n,e){var t=e?this._getBorderWidth(e,"left"):0,r=e?this._getBorderWidth(e,"top"):0;n.offset.left+=t+this._getBorderWidth(this.$element(),"left"),n.offset.top+=r+this._getBorderWidth(this.$element(),"top"),n.width-=N(this.$element())-Xt(this.$element()),n.height-=re(this.$element())-Zt(this.$element())},_dragEndHandler:function(n){var e=this.$element();this._resizeEndAction({event:n,width:N(e),height:re(e),handles:this._movingSides}),this._toggleResizingClass(!1)},_renderWidth:function(n){this.option("width",U(n,this.option("minWidth"),this.option("maxWidth")))},_renderHeight:function(n){this.option("height",U(n,this.option("minHeight"),this.option("maxHeight")))},_optionChanged:function(n){switch(n.name){case"disabled":this._toggleEventHandlers(!n.value),this.callBase(n);break;case"handles":this._invalidate();break;case"minWidth":case"maxWidth":Ve()&&this._renderWidth(N(this.$element()));break;case"minHeight":case"maxHeight":Ve()&&this._renderHeight(re(this.$element()));break;case"onResize":case"onResizeStart":case"onResizeEnd":this._renderActions();break;case"area":case"stepPrecision":case"step":case"roundStepValue":case"keepAspectRatio":break;default:this.callBase(n)}},_clean:function(){this.$element().find("."+$e).remove()},_useTemplates:function(){return!1}});Bt(ot,Ar);var aa=xr.inherit({_initMarkup(){this._deferredItems=[],this.callBase()},_renderItemContent(n){var e=new at,t=new at;this._deferredItems[n.index]=t;var r=this.callBase.call(this,n);return t.done(()=>{e.resolve(r)}),e.promise()},_createItemByTemplate(n,e){return n.render({model:e.itemData,container:e.container,index:e.index,onRendered:()=>{this._deferredItems[e.index].resolve()}})},_postProcessRenderItems:Pt,_renderItemsAsync(){var n=new at;return Br.apply(this,this._deferredItems).done(()=>{this._postProcessRenderItems(),n.resolve()}),n.promise()},_clean(){this.callBase(),this._deferredItems=[]}}),la="dx-toolbar",gt="dx-toolbar-before",ca="dx-toolbar-center",Nn="dx-toolbar-after",ha="dx-toolbar-mini",ua="dx-toolbar-item",Ir="dx-toolbar-label",da="dx-toolbar-button",fa="dx-toolbar-items-container",pa="dx-toolbar-group",$n="dx-toolbar-compact",ke="."+Ir,Ln="dx-toolbar-multiline",kn="text",ma="default",ga="contained",_a="dxToolbarItemDataKey",va=aa.inherit({compactMode:!1,ctor:function(n,e){this._userOptions=e||{},this.callBase(n,e),"height"in this._userOptions&&Pr.log("W0001",this.NAME,"height","20.1","Functionality associated with this option is not intended for the Toolbar widget.")},_getSynchronizableOptionsForCreateComponent:function(){return this.callBase().filter(n=>n!=="disabled")},_initTemplates:function(){this.callBase();var n=new Nr(function(e,t,r){yt(t)?(t.text&&e.text(t.text).wrapInner("<div>"),t.html&&e.html(t.html),t.widget==="dxDropDownButton"&&(t.options=t.options||{},qn(t.options.stylingMode)||(t.options.stylingMode=this.option("useFlatButtons")?kn:ga)),t.widget==="dxButton"&&(this.option("useFlatButtons")&&(t.options=t.options||{},t.options.stylingMode=t.options.stylingMode||kn),this.option("useDefaultButtons")&&(t.options=t.options||{},t.options.type=t.options.type||ma))):e.text(String(t)),this._getTemplate("dx-polymorph-widget").render({container:e,model:r,parent:this})}.bind(this),["text","html","widget","options"],this.option("integrationOptions.watchMethod"));this._templateManager.addDefaultTemplates({item:n,menuItem:n})},_getDefaultOptions:function(){return $(this.callBase(),{renderAs:"topToolbar",grouped:!1,useFlatButtons:!1,useDefaultButtons:!1,multiline:!1})},_defaultOptionsRules:function(){return this.callBase().concat([{device:function(){return bt()},options:{useFlatButtons:!0}}])},_itemContainer:function(){return this._$toolbarItemsContainer.find(["."+gt,"."+ca,"."+Nn].join(","))},_itemClass:function(){return ua},_itemDataKey:function(){return _a},_buttonClass:function(){return da},_dimensionChanged:function(){this._arrangeItems(),this._applyCompactMode()},_initMarkup:function(){this._renderToolbar(),this._renderSections(),this.callBase(),this.setAria("role","toolbar")},_waitParentAnimationFinished:function(){var n=this.$element();return new Promise(e=>{var t=()=>{clearTimeout(this._waitParentAnimationTimeout),this._waitParentAnimationTimeout=setTimeout(()=>(()=>{var r=!0;return n.parents().each((i,s)=>{if(Lr.isAnimating(y(s)))return r=!1,!1}),r&&e(),r})()||t(),15)};t()})},_render:function(){this.callBase(),this._renderItemsAsync(),bt()&&Promise.all([this._waitParentAnimationFinished(),this._checkWebFontForLabelsLoaded()]).then(this._dimensionChanged.bind(this))},_postProcessRenderItems:function(){this._arrangeItems()},_renderToolbar:function(){this.$element().addClass(la).toggleClass(Ln,this.option("multiline")),this._$toolbarItemsContainer=y("<div>").addClass(fa).appendTo(this.$element())},_renderSections:function(){var n=this._$toolbarItemsContainer,e=this;le(["before","center","after"],function(){var t="dx-toolbar-"+this,r=n.find("."+t);r.length||(e["_$"+this+"Section"]=r=y("<div>").addClass(t).appendTo(n))})},_checkWebFontForLabelsLoaded:function(){var n=this.$element().find(ke),e=[];return n.each((t,r)=>{var i=y(r).text(),s=y(r).css("fontWeight");e.push($r(i,s))}),Promise.all(e)},_arrangeItems:function(n){n=n||j(this.$element()),this._$centerSection.css({margin:"0 auto",float:"none"});var e=oe(this._$beforeSection.get(0)),t=oe(this._$afterSection.get(0));this._alignCenterSection(e,t,n);var r=this._$toolbarItemsContainer.find(ke).eq(0),i=r.parent();if(!!r.length){var s=e.width?e.width:r.position().left,o=i.hasClass(gt)?0:s,a=i.hasClass(Nn)?0:t.width,l=0;i.children().not(ke).each(function(){l+=N(this)});var c=n-l,d=Math.max(c-o-a,0);if(i.hasClass(gt))this._alignSection(this._$beforeSection,d);else{var h=N(r)-j(r);r.css("maxWidth",d-h)}}},_alignCenterSection:function(n,e,t){this._alignSection(this._$centerSection,t-n.width-e.width);var r=this.option("rtlEnabled"),i=r?e:n,s=r?n:e,o=oe(this._$centerSection.get(0));(i.right>o.left||o.right>s.left)&&this._$centerSection.css({marginLeft:i.width,marginRight:s.width,float:i.width>s.width?"none":"right"})},_alignSection:function(n,e){var t=n.find(ke),r=t.toArray();e-=this._getCurrentLabelsPaddings(r);var i=this._getCurrentLabelsWidth(r),s=Math.abs(i-e);e<i?(r=r.reverse(),this._alignSectionLabels(r,s,!1)):this._alignSectionLabels(r,s,!0)},_alignSectionLabels:function(n,e,t){for(var r=function(c){return oe(c).width},i=0;i<n.length;i++){var s=y(n[i]),o=Math.ceil(r(n[i])),a=void 0;t&&s.css("maxWidth","inherit");var l=Math.ceil(t?r(n[i]):o);if(l<e)a=t?l:0,e-=l;else{a=t?o+e:o-e,s.css("maxWidth",a);break}s.css("maxWidth",a)}},_applyCompactMode:function(){var n=this.$element();n.removeClass($n),this.option("compactMode")&&this._getSummaryItemsWidth(this.itemElements(),!0)>j(n)&&n.addClass($n)},_getCurrentLabelsWidth:function(n){var e=0;return n.forEach(function(t,r){e+=N(t)}),e},_getCurrentLabelsPaddings:function(n){var e=0;return n.forEach(function(t,r){e+=N(t)-j(t)}),e},_renderItem:function(n,e,t,r){var i=e.location||"center",s=t||this["_$"+i+"Section"],o=!!(e.text||e.html),a=this.callBase(n,e,s,r);return a.toggleClass(this._buttonClass(),!o).toggleClass(Ir,o).addClass(e.cssClass),a},_renderGroupedItems:function(){var n=this;le(this.option("items"),function(e,t){var r=t.items,i=y("<div>").addClass(pa),s=t.location||"center";!r||!r.length||(le(r,function(o,a){n._renderItem(o,a,i,null)}),n._$toolbarItemsContainer.find(".dx-toolbar-"+s).append(i))})},_renderItems:function(n){var e=this.option("grouped")&&n.length&&n[0].items;e?this._renderGroupedItems():this.callBase(n)},_getToolbarItems:function(){return this.option("items")||[]},_renderContentImpl:function(){var n=this._getToolbarItems();this.$element().toggleClass(ha,n.length===0),this._renderedItemsCount?this._renderItems(n.slice(this._renderedItemsCount)):this._renderItems(n),this._applyCompactMode()},_renderEmptyMessage:Pt,_clean:function(){this._$toolbarItemsContainer.children().empty(),this.$element().empty()},_visibilityChanged:function(n){n&&this._arrangeItems()},_isVisible:function(){return j(this.$element())>0&&xt(this.$element())>0},_getIndexByItem:function(n){return this._getToolbarItems().indexOf(n)},_itemOptionChanged:function(n,e,t){this.callBase.apply(this,[n,e,t]),this._arrangeItems()},_optionChanged:function(n){var e=n.name;switch(e){case"width":this.callBase.apply(this,arguments),this._dimensionChanged();break;case"multiline":this.$element().toggleClass(Ln,n.value);break;case"renderAs":case"useFlatButtons":case"useDefaultButtons":this._invalidate();break;case"compactMode":this._applyCompactMode();break;case"grouped":break;default:this.callBase.apply(this,arguments)}},_dispose:function(){this.callBase(),clearTimeout(this._waitParentAnimationTimeout)}});Bt("dxToolbarBase",va);var ya=["fullScreen","forceApplyBindings","dragOutsideBoundary","dragAndResizeArea","outsideDragFactor"],_t=Nt();class ba extends kr{constructor(e){var{fullScreen:t,forceApplyBindings:r,dragOutsideBoundary:i,dragAndResizeArea:s,outsideDragFactor:o}=e,a=Fr(e,ya);super(a),this._props=jn({},this._props,{fullScreen:t,forceApplyBindings:r,dragOutsideBoundary:i,dragAndResizeArea:s,outsideDragFactor:o}),this._$dragResizeContainer=void 0,this._outsideDragFactor=void 0,this._lastPositionBeforeFullScreen=void 0,this._updateDragResizeContainer(),this._updateOutsideDragFactor()}set fullScreen(e){this._props.fullScreen=e,e?this._fullScreenEnabled():this._fullScreenDisabled()}get $dragResizeContainer(){return this._$dragResizeContainer}get outsideDragFactor(){return this._outsideDragFactor}set dragAndResizeArea(e){this._props.dragAndResizeArea=e,this._updateDragResizeContainer()}set dragOutsideBoundary(e){this._props.dragOutsideBoundary=e,this._updateDragResizeContainer(),this._updateOutsideDragFactor()}set outsideDragFactor(e){this._props.outsideDragFactor=e,this._updateOutsideDragFactor()}updateContainer(e){super.updateContainer(e),this._updateDragResizeContainer()}dragHandled(){this.restorePositionOnNextRender(!1)}resizeHandled(){this.restorePositionOnNextRender(!1)}positionContent(){if(this._props.fullScreen)Me(this._$content,{top:0,left:0}),this.detectVisualPositionChange();else{var e,t;(e=(t=this._props).forceApplyBindings)===null||e===void 0||e.call(t),!this._shouldRenderContentInitialPosition&&this._lastPositionBeforeFullScreen?(Me(this._$content,this._lastPositionBeforeFullScreen),this._lastPositionBeforeFullScreen=void 0,this.detectVisualPositionChange()):super.positionContent()}}_updateOutsideDragFactor(){this._outsideDragFactor=this._getOutsideDragFactor()}_getOutsideDragFactor(){return this._props.dragOutsideBoundary?1:this._props.outsideDragFactor}_updateDragResizeContainer(){this._$dragResizeContainer=this._getDragResizeContainer()}_getDragResizeContainer(){if(this._props.dragOutsideBoundary)return y(_t);if(this._props.dragAndResizeArea)return y(this._props.dragAndResizeArea);var e=Mr().get(0)||this._props.container;return e?this._$markupContainer:y(_t)}_getVisualContainer(){return this._props.fullScreen?y(_t):super._getVisualContainer()}_fullScreenEnabled(){this.restorePositionOnNextRender(!1),this._lastPositionBeforeFullScreen=this._visualPosition}_fullScreenDisabled(){this.restorePositionOnNextRender(!1)}}var wa=Nt(),vt="dx-popup",Sa="dx-popup-wrapper",Ea="dx-popup-fullscreen",Ta="dx-popup-fullscreen-width",Ca="dx-popup-normal",Aa="dx-popup-content",Ia="dx-state-disabled",Da="dx-popup-draggable",Fn="dx-popup-title",Oa="dx-closebutton",Mn="dx-popup-bottom",Ra="dx-has-close-button",xa="dx-template-wrapper",Ba="dx-popup-flex-height",Pa="dx-popup-inherit-height",Vn=["cancel","clear","done"],Na="default",$a="normal",La="text",ka="contained",Fa=en.safari&&Vr(en.version,[11])<0,z={static:"",inherit:Pa,flex:Ba},Ma=n=>{var e=se.current(),t=e.platform,r="bottom",i="before";if(t==="ios")switch(n){case"cancel":r="top";break;case"clear":r="top",i="after";break;case"done":i="after"}else if(t==="android")switch(n){case"cancel":case"done":i="after"}return{toolbar:r,location:i}},Va=zr.inherit({_supportedKeys:function(){return $(this.callBase(),{upArrow:n=>{var e;(e=this._drag)===null||e===void 0||e.moveUp(n)},downArrow:n=>{var e;(e=this._drag)===null||e===void 0||e.moveDown(n)},leftArrow:n=>{var e;(e=this._drag)===null||e===void 0||e.moveLeft(n)},rightArrow:n=>{var e;(e=this._drag)===null||e===void 0||e.moveRight(n)}})},_getDefaultOptions:function(){return $(this.callBase(),{fullScreen:!1,title:"",showTitle:!0,titleTemplate:"title",onTitleRendered:null,dragOutsideBoundary:!1,dragEnabled:!1,dragAndResizeArea:void 0,outsideDragFactor:0,onResizeStart:null,onResize:null,onResizeEnd:null,resizeEnabled:!1,toolbarItems:[],showCloseButton:!1,bottomTemplate:"bottom",useDefaultToolbarButtons:!1,useFlatToolbarButtons:!1,autoResizeEnabled:!0})},_defaultOptionsRules:function(){var n=Hr();return this.callBase().concat([{device:{platform:"ios"},options:{animation:this._iosAnimation}},{device:{platform:"android"},options:{animation:this._androidAnimation}},{device:{platform:"generic"},options:{showCloseButton:!0}},{device:function(e){return se.real().deviceType==="desktop"&&e.platform==="generic"},options:{dragEnabled:!0}},{device:function(){return se.real().deviceType==="desktop"&&!se.isSimulator()},options:{focusStateEnabled:!0}},{device:function(){return bt(n)},options:{useDefaultToolbarButtons:!0,useFlatToolbarButtons:!0,showCloseButton:!1}}])},_iosAnimation:{show:{type:"slide",duration:400,from:{position:{my:"top",at:"bottom"}},to:{position:{my:"center",at:"center"}}},hide:{type:"slide",duration:400,from:{opacity:1,position:{my:"center",at:"center"}},to:{opacity:1,position:{my:"top",at:"bottom"}}}},_androidAnimation:function(){return this.option("fullScreen")?{show:{type:"slide",duration:300,from:{top:"30%",opacity:0},to:{top:0,opacity:1}},hide:{type:"slide",duration:300,from:{top:0,opacity:1},to:{top:"30%",opacity:0}}}:{show:{type:"fade",duration:400,from:0,to:1},hide:{type:"fade",duration:400,from:1,to:0}}},_init:function(){this.callBase(),this._updateResizeCallbackSkipCondition(),this.$element().addClass(vt),this.$wrapper().addClass(Sa),this._$popupContent=this._$content.wrapInner(y("<div>").addClass(Aa)).children().eq(0)},_render:function(){var n=this.option("fullScreen");this._toggleFullScreenClass(n),this.callBase()},_toggleFullScreenClass:function(n){this.$overlayContent().toggleClass(Ea,n).toggleClass(Ca,!n)},_initTemplates:function(){this.callBase(),this._templateManager.addDefaultTemplates({title:new lt,bottom:new lt})},_getActionsList:function(){return this.callBase().concat(["onResizeStart","onResize","onResizeEnd"])},_contentResizeHandler:function(n){this._shouldSkipContentResize(n)||this._renderGeometry({shouldOnlyReposition:!0})},_doesShowAnimationChangeDimensions:function(){var n=this.option("animation");return["to","from"].some(e=>{var t,r=n==null||(t=n.show)===null||t===void 0?void 0:t[e];return Ur(r)&&("width"in r||"height"in r)})},_updateResizeCallbackSkipCondition(){var n=this._doesShowAnimationChangeDimensions();this._shouldSkipContentResize=e=>n&&this._showAnimationProcessing||this._areContentDimensionsRendered(e)},_observeContentResize:function(n){if(!!this.option("useResizeObserver")){var e=this._$content.get(0);n?tn.observe(e,t=>{this._contentResizeHandler(t)}):tn.unobserve(e)}},_renderContentImpl:function(){this._renderTitle(),this.callBase(),this._renderResize(),this._renderBottom()},_renderTitle:function(){var n=this._getToolbarItems("top"),e=this.option("title"),t=this.option("showTitle");if(t&&!!e&&n.unshift({location:se.current().ios?"center":"before",text:e}),t||n.length>0){this._$title&&this._$title.remove();var r=y("<div>").addClass(Fn).insertBefore(this.$content());this._$title=this._renderTemplateByType("titleTemplate",n,r).addClass(Fn),this._renderDrag(),this._executeTitleRenderAction(this._$title),this._$title.toggleClass(Ra,this._hasCloseButton())}else this._$title&&this._$title.detach()},_renderTemplateByType:function(n,e,t,r){var{rtlEnabled:i,useDefaultToolbarButtons:s,useFlatToolbarButtons:o,disabled:a}=this.option(),l=this._getTemplateByOption(n),c=l instanceof lt;if(c){var d=$({},this.option("integrationOptions"),{skipTemplates:["content","title"]}),h=$(r,{items:e,rtlEnabled:i,useDefaultButtons:s,useFlatButtons:o,disabled:a,integrationOptions:d});this._getTemplate("dx-polymorph-widget").render({container:t,model:{widget:"dxToolbarBase",options:h}});var p=t.children("div");return t.replaceWith(p),p}else{var _=y(l.render({container:ct(t)}));return _.hasClass(xa)&&(t.replaceWith(_),t=_),t}},_renderVisibilityAnimate:function(n){return this._observeContentResize(n),this.callBase(n)},_executeTitleRenderAction:function(n){this._getTitleRenderAction()({titleElement:ct(n)})},_getTitleRenderAction:function(){return this._titleRenderAction||this._createTitleRenderAction()},_createTitleRenderAction:function(){return this._titleRenderAction=this._createActionByOption("onTitleRendered",{element:this.element(),excludeValidators:["disabled","readOnly"]})},_getCloseButton:function(){return{toolbar:"top",location:"after",template:this._getCloseButtonRenderer()}},_getCloseButtonRenderer:function(){return(n,e,t)=>{var r=y("<div>").addClass(Oa);this._createComponent(r,nn,{icon:"close",onClick:this._createToolbarItemAction(void 0),stylingMode:"text",integrationOptions:{}}),y(t).append(r)}},_getToolbarItems:function(n){var e=this.option("toolbarItems"),t=[];this._toolbarItemClasses=[];var r=se.current().platform,i=0;return le(e,(s,o)=>{var a=qn(o.shortcut),l=a?Ma(o.shortcut):o;if(a&&r==="ios"&&i<2&&(l.toolbar="top",i++),l.toolbar=o.toolbar||l.toolbar||"top",l&&l.toolbar===n){a&&$(l,{location:o.location},this._getToolbarItemByAlias(o));var c=r==="generic";o.shortcut==="done"&&c||o.shortcut==="cancel"&&!c?t.unshift(l):t.push(l)}}),n==="top"&&this._hasCloseButton()&&t.push(this._getCloseButton()),t},_hasCloseButton(){return this.option("showCloseButton")&&this.option("showTitle")},_getLocalizationKey:n=>n.toLowerCase()==="done"?"OK":Wr(n,!0),_getToolbarItemByAlias:function(n){var e=this,t=n.shortcut;if(!Vn.includes(t))return!1;var r=$({text:jr.format(this._getLocalizationKey(t)),onClick:this._createToolbarItemAction(n.onClick),integrationOptions:{},type:e.option("useDefaultToolbarButtons")?Na:$a,stylingMode:e.option("useFlatToolbarButtons")?La:ka},n.options||{}),i=vt+"-"+t;return this._toolbarItemClasses.push(i),{template:function(s,o,a){var l=y("<div>").addClass(i).appendTo(a);e._createComponent(l,nn,r)}}},_createToolbarItemAction:function(n){return this._createAction(n,{afterExecute:function(e){e.component.hide()}})},_renderBottom:function(){var n=this._getToolbarItems("bottom");if(n.length){this._$bottom&&this._$bottom.remove();var e=y("<div>").addClass(Mn).insertAfter(this.$content());this._$bottom=this._renderTemplateByType("bottomTemplate",n,e,{compactMode:!0}).addClass(Mn),this._toggleClasses()}else this._$bottom&&this._$bottom.detach()},_toggleDisabledState:function(n){this.callBase(...arguments),this.$content().toggleClass(Ia,Boolean(n))},_toggleClasses:function(){var n=Vn;le(n,(e,t)=>{var r=vt+"-"+t;this._toolbarItemClasses.includes(r)?(this.$wrapper().addClass(r+"-visible"),this._$bottom.addClass(r)):(this.$wrapper().removeClass(r+"-visible"),this._$bottom.removeClass(r))})},_toggleFocusClass(n,e){if(this.callBase(n,e),n&&!qr(this._zIndex)){var t=Gr(this._zIndexInitValue());Kr(this._zIndex),this._zIndex=t,this._$wrapper.css("zIndex",t),this._$content.css("zIndex",t)}},_getPositionControllerConfig(){var{fullScreen:n,forceApplyBindings:e,dragOutsideBoundary:t,dragAndResizeArea:r,outsideDragFactor:i}=this.option();return $({},this.callBase(),{fullScreen:n,forceApplyBindings:e,dragOutsideBoundary:t,dragAndResizeArea:r,outsideDragFactor:i})},_initPositionController(){this._positionController=new ba(this._getPositionControllerConfig())},_getDragTarget:function(){return this.topToolbar()},_renderGeometry:function(n){var{visible:e,useResizeObserver:t}=this.option();if(e&&Ve()){var r=this._showAnimationProcessing,i=r&&!(n!=null&&n.forceStopAnimation)&&t;this._isAnimationPaused=i||void 0,this._stopAnimation(),n!=null&&n.shouldOnlyReposition?this._positionController.positionContent():this._renderGeometryImpl(),i&&(this._animateShowing(),this._isAnimationPaused=void 0)}},_cacheDimensions:function(){!this.option("useResizeObserver")||(this._renderedDimensions={width:parseInt(j(this._$content),10),height:parseInt(xt(this._$content),10)})},_renderGeometryImpl:function(){this._resetContentHeight(),this.callBase(),this._cacheDimensions(),this._setContentHeight()},_resetContentHeight:function(){var n=this._getOptionValue("height");n==="auto"&&this.$content().css({height:"auto",maxHeight:"none"})},_renderDrag:function(){var n=this._getDragTarget(),e=this.option("dragEnabled");if(!!n){var t={dragEnabled:e,handle:n.get(0),draggableElement:this._$content.get(0),positionController:this._positionController};this._drag?this._drag.init(t):this._drag=new Qo(t),this.$overlayContent().toggleClass(Da,e)}},_renderResize:function(){this._resizable=this._createComponent(this._$content,Ar,{handles:this.option("resizeEnabled")?"all":"none",onResizeEnd:n=>{this._resizeEndHandler(n),this._observeContentResize(!0)},onResize:n=>{this._setContentHeight(),this._actions.onResize(n)},onResizeStart:n=>{this._observeContentResize(!1),this._actions.onResizeStart(n)},minHeight:100,minWidth:100,area:this._positionController.$dragResizeContainer,keepAspectRatio:!1})},_resizeEndHandler:function(n){var e=this._resizable.option("width"),t=this._resizable.option("height");e&&this._setOptionWithoutOptionChange("width",e),t&&this._setOptionWithoutOptionChange("height",t),this._cacheDimensions(),this._positionController.resizeHandled(),this._positionController.detectVisualPositionChange(n.event),this._actions.onResizeEnd(n)},_setContentHeight:function(){(this.option("forceApplyBindings")||Pt)();var n=this.$overlayContent().get(0),e=this._chooseHeightStrategy(n);this.$content().css(this._getHeightCssStyles(e,n)),this._setHeightClasses(this.$overlayContent(),e)},_heightStrategyChangeOffset:function(n,e){return n===z.flex?-e:0},_chooseHeightStrategy:function(n){var e=n.style.width==="auto"||n.style.width==="",t=z.static;return this._isAutoHeight()&&this.option("autoResizeEnabled")&&(e||Fa?t=z.inherit:t=z.flex),t},_getHeightCssStyles:function(n,e){var t={},r=this._getOptionValue("maxHeight",e),i=this._getOptionValue("minHeight",e),s=this._splitPopupHeight(),o=s.header+s.footer+s.contentVerticalOffsets+s.popupVerticalOffsets+this._heightStrategyChangeOffset(n,s.popupVerticalPaddings);if(n===z.static){if(!this._isAutoHeight()||r||i){var a=this.option("fullScreen")?Math.min(oe(e).height,Nt().innerHeight):oe(e).height,l=a-o;t={height:Math.max(0,l),minHeight:"auto",maxHeight:"auto"}}}else{var c=y(this._positionController.$visualContainer).get(0),d=Yr(r,-o,c),h=Qr(i,-o,c);t={height:"auto",minHeight:h,maxHeight:d}}return t},_setHeightClasses:function(n,e){var t="";for(var r in z)z[r]!==e&&(t+=" "+z[r]);n.removeClass(t).addClass(e)},_isAutoHeight:function(){return this.$overlayContent().get(0).style.height==="auto"},_splitPopupHeight:function(){var n=this.topToolbar(),e=this.bottomToolbar();return{header:rn(n&&n.get(0)),footer:rn(e&&e.get(0)),contentVerticalOffsets:ht(this.$overlayContent().get(0),!0),popupVerticalOffsets:ht(this.$content().get(0),!0),popupVerticalPaddings:ht(this.$content().get(0),!1)}},_isAllWindowCovered:function(){return this.callBase()||this.option("fullScreen")},_renderDimensions:function(){this.option("fullScreen")?this.$overlayContent().css({width:"100%",height:"100%",minWidth:"",maxWidth:"",minHeight:"",maxHeight:""}):this.callBase(),Ve()&&this._renderFullscreenWidthClass()},_clean:function(){this.callBase(),this._observeContentResize(!1)},_renderFullscreenWidthClass:function(){this.$overlayContent().toggleClass(Ta,N(this.$overlayContent())===j(wa))},refreshPosition:function(){this._renderPosition()},_optionChanged:function(n){var e,t=n.value;switch(n.name){case"disabled":this.callBase(n),this._renderTitle(),this._renderBottom();break;case"animation":this._updateResizeCallbackSkipCondition();break;case"showTitle":case"title":case"titleTemplate":this._renderTitle(),this._renderGeometry(),ie(this.$overlayContent());break;case"bottomTemplate":this._renderBottom(),this._renderGeometry(),ie(this.$overlayContent());break;case"container":if(this.callBase(n),this.option("resizeEnabled")){var r;(r=this._resizable)===null||r===void 0||r.option("area",this._positionController.$dragResizeContainer)}break;case"width":case"height":this.callBase(n),(e=this._resizable)===null||e===void 0||e.option(n.name,n.value);break;case"onTitleRendered":this._createTitleRenderAction(n.value);break;case"toolbarItems":case"useDefaultToolbarButtons":case"useFlatToolbarButtons":var i=!n.fullName.match(/^toolbarItems((\[\d+\])(\.(options|visible).*)?)?$/);this._renderTitle(),this._renderBottom(),i&&(this._renderGeometry(),ie(this.$overlayContent()));break;case"dragEnabled":this._renderDrag();break;case"dragAndResizeArea":this._positionController.dragAndResizeArea=t,this.option("resizeEnabled")&&this._resizable.option("area",this._positionController.$dragResizeContainer),this._positionController.positionContent();break;case"dragOutsideBoundary":this._positionController.dragOutsideBoundary=t,this.option("resizeEnabled")&&this._resizable.option("area",this._positionController.$dragResizeContainer);break;case"outsideDragFactor":this._positionController.outsideDragFactor=t;break;case"resizeEnabled":this._renderResize(),this._renderGeometry();break;case"autoResizeEnabled":this._renderGeometry(),ie(this.$overlayContent());break;case"fullScreen":this._positionController.fullScreen=n.value,this._toggleFullScreenClass(n.value),this._toggleSafariScrolling(),this._renderGeometry(),ie(this.$overlayContent());break;case"showCloseButton":this._renderTitle();break;default:this.callBase(n)}},bottomToolbar:function(){return this._$bottom},topToolbar:function(){return this._$title},$content:function(){return this._$popupContent},content:function(){return ct(this.$content())},$overlayContent:function(){return this._$content}});Bt("dxPopup",Va);export{qa as C,Wa as I,Ha as M,Va as P,ja as S,va as T,Ua as a,Ga as b,la as c,Qa as g,Ya as r,Ka as s,Xa as v};
