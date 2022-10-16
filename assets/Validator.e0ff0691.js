/**
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
 */const jt=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let s=n.charCodeAt(r);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},Sn=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const s=n[t++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=n[t++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=n[t++],a=n[t++],o=n[t++],c=((s&7)<<18|(i&63)<<12|(a&63)<<6|o&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const i=n[t++],a=n[t++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|a&63)}}return e.join("")},qt={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<n.length;s+=3){const i=n[s],a=s+1<n.length,o=a?n[s+1]:0,c=s+2<n.length,u=c?n[s+2]:0,f=i>>2,d=(i&3)<<4|o>>4;let m=(o&15)<<2|u>>6,_=u&63;c||(_=64,a||(m=64)),r.push(t[f],t[d],t[m],t[_])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(jt(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):Sn(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<n.length;){const i=t[n.charAt(s++)],o=s<n.length?t[n.charAt(s)]:0;++s;const u=s<n.length?t[n.charAt(s)]:64;++s;const d=s<n.length?t[n.charAt(s)]:64;if(++s,i==null||o==null||u==null||d==null)throw Error();const m=i<<2|o>>4;if(r.push(m),u!==64){const _=o<<4&240|u>>2;if(r.push(_),d!==64){const E=u<<6&192|d;r.push(E)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}},In=function(n){const e=jt(n);return qt.encodeByteArray(e,!0)},be=function(n){return In(n).replace(/\./g,"")},Tn=function(n){try{return qt.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};function An(){return typeof indexedDB=="object"}function Dn(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},s.onupgradeneeded=()=>{t=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(t){e(t)}})}function kn(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Cn=()=>kn().__FIREBASE_DEFAULTS__,Nn=()=>{if(typeof process>"u"||typeof process.env>"u")return;const n=process.env.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},On=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&Tn(n[1]);return e&&JSON.parse(e)},zt=()=>{try{return Cn()||Nn()||On()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Vn=n=>{var e,t;return(t=(e=zt())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},Rn=n=>{const e=Vn(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),r]:[e.substring(0,t),r]},xn=()=>{var n;return(n=zt())===null||n===void 0?void 0:n.config};/**
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
 */function Fn(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",s=n.iat||0,i=n.sub||n.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},n),o="";return[be(JSON.stringify(t)),be(JSON.stringify(a)),o].join(".")}/**
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
 */const $n="FirebaseError";class J extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=$n,Object.setPrototypeOf(this,J.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ht.prototype.create)}}class Ht{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},s=`${this.service}/${e}`,i=this.errors[e],a=i?Mn(i,r):"Error",o=`${this.serviceName}: ${a} (${s}).`;return new J(s,o,r)}}function Mn(n,e){return n.replace(Ln,(t,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const Ln=/\{\$([^}]+)}/g;function qe(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const s of t){if(!r.includes(s))return!1;const i=n[s],a=e[s];if(ft(i)&&ft(a)){if(!qe(i,a))return!1}else if(i!==a)return!1}for(const s of r)if(!t.includes(s))return!1;return!0}function ft(n){return n!==null&&typeof n=="object"}/**
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
 */function x(n){return n&&n._delegate?n._delegate:n}class ie{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const B="[DEFAULT]";/**
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
 */class Bn{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new Pn;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:t});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(jn(e))try{this.getOrInitializeService({instanceIdentifier:B})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=B){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=B){return this.instances.has(e)}getOptions(e=B){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[i,a]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(i);r===o&&a.resolve(s)}return s}onInit(e,t){var r;const s=this.normalizeInstanceIdentifier(t),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const a=this.instances.get(s);return a&&e(a,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(!!r)for(const s of r)try{s(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Un(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=B){return this.component?this.component.multipleInstances?e:B:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Un(n){return n===B?void 0:n}function jn(n){return n.instantiationMode==="EAGER"}/**
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
 */class qn{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Bn(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var g;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(g||(g={}));const zn={debug:g.DEBUG,verbose:g.VERBOSE,info:g.INFO,warn:g.WARN,error:g.ERROR,silent:g.SILENT},Hn=g.INFO,Gn={[g.DEBUG]:"log",[g.VERBOSE]:"log",[g.INFO]:"info",[g.WARN]:"warn",[g.ERROR]:"error"},Kn=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),s=Gn[e];if(s)console[s](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Gt{constructor(e){this.name=e,this._logLevel=Hn,this._logHandler=Kn,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in g))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?zn[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,g.DEBUG,...e),this._logHandler(this,g.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,g.VERBOSE,...e),this._logHandler(this,g.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,g.INFO,...e),this._logHandler(this,g.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,g.WARN,...e),this._logHandler(this,g.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,g.ERROR,...e),this._logHandler(this,g.ERROR,...e)}}const Wn=(n,e)=>e.some(t=>n instanceof t);let pt,mt;function Yn(){return pt||(pt=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Qn(){return mt||(mt=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Kt=new WeakMap,ze=new WeakMap,Wt=new WeakMap,Me=new WeakMap,Ze=new WeakMap;function Jn(n){const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("success",i),n.removeEventListener("error",a)},i=()=>{t(M(n.result)),s()},a=()=>{r(n.error),s()};n.addEventListener("success",i),n.addEventListener("error",a)});return e.then(t=>{t instanceof IDBCursor&&Kt.set(t,n)}).catch(()=>{}),Ze.set(e,n),e}function Xn(n){if(ze.has(n))return;const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("complete",i),n.removeEventListener("error",a),n.removeEventListener("abort",a)},i=()=>{t(),s()},a=()=>{r(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",i),n.addEventListener("error",a),n.addEventListener("abort",a)});ze.set(n,e)}let He={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return ze.get(n);if(e==="objectStoreNames")return n.objectStoreNames||Wt.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return M(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function Zn(n){He=n(He)}function er(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(Le(this),e,...t);return Wt.set(r,e.sort?e.sort():[e]),M(r)}:Qn().includes(n)?function(...e){return n.apply(Le(this),e),M(Kt.get(this))}:function(...e){return M(n.apply(Le(this),e))}}function tr(n){return typeof n=="function"?er(n):(n instanceof IDBTransaction&&Xn(n),Wn(n,Yn())?new Proxy(n,He):n)}function M(n){if(n instanceof IDBRequest)return Jn(n);if(Me.has(n))return Me.get(n);const e=tr(n);return e!==n&&(Me.set(n,e),Ze.set(e,n)),e}const Le=n=>Ze.get(n);function nr(n,e,{blocked:t,upgrade:r,blocking:s,terminated:i}={}){const a=indexedDB.open(n,e),o=M(a);return r&&a.addEventListener("upgradeneeded",c=>{r(M(a.result),c.oldVersion,c.newVersion,M(a.transaction))}),t&&a.addEventListener("blocked",()=>t()),o.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",()=>s())}).catch(()=>{}),o}const rr=["get","getKey","getAll","getAllKeys","count"],sr=["put","add","delete","clear"],Be=new Map;function gt(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(Be.get(e))return Be.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,s=sr.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(s||rr.includes(t)))return;const i=async function(a,...o){const c=this.transaction(a,s?"readwrite":"readonly");let u=c.store;return r&&(u=u.index(o.shift())),(await Promise.all([u[t](...o),s&&c.done]))[0]};return Be.set(e,i),i}Zn(n=>({...n,get:(e,t,r)=>gt(e,t)||n.get(e,t,r),has:(e,t)=>!!gt(e,t)||n.has(e,t)}));/**
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
 */class ir{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(ar(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function ar(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Ge="@firebase/app",yt="0.8.2";/**
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
 */const U=new Gt("@firebase/app"),or="@firebase/app-compat",cr="@firebase/analytics-compat",ur="@firebase/analytics",lr="@firebase/app-check-compat",hr="@firebase/app-check",dr="@firebase/auth",fr="@firebase/auth-compat",pr="@firebase/database",mr="@firebase/database-compat",gr="@firebase/functions",yr="@firebase/functions-compat",wr="@firebase/installations",br="@firebase/installations-compat",vr="@firebase/messaging",_r="@firebase/messaging-compat",Er="@firebase/performance",Sr="@firebase/performance-compat",Ir="@firebase/remote-config",Tr="@firebase/remote-config-compat",Ar="@firebase/storage",Dr="@firebase/storage-compat",kr="@firebase/firestore",Cr="@firebase/firestore-compat",Nr="firebase",Or="9.12.1";/**
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
 */const Ke="[DEFAULT]",Vr={[Ge]:"fire-core",[or]:"fire-core-compat",[ur]:"fire-analytics",[cr]:"fire-analytics-compat",[hr]:"fire-app-check",[lr]:"fire-app-check-compat",[dr]:"fire-auth",[fr]:"fire-auth-compat",[pr]:"fire-rtdb",[mr]:"fire-rtdb-compat",[gr]:"fire-fn",[yr]:"fire-fn-compat",[wr]:"fire-iid",[br]:"fire-iid-compat",[vr]:"fire-fcm",[_r]:"fire-fcm-compat",[Er]:"fire-perf",[Sr]:"fire-perf-compat",[Ir]:"fire-rc",[Tr]:"fire-rc-compat",[Ar]:"fire-gcs",[Dr]:"fire-gcs-compat",[kr]:"fire-fst",[Cr]:"fire-fst-compat","fire-js":"fire-js",[Nr]:"fire-js-all"};/**
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
 */const ve=new Map,We=new Map;function Rr(n,e){try{n.container.addComponent(e)}catch(t){U.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function _e(n){const e=n.name;if(We.has(e))return U.debug(`There were multiple attempts to register component ${e}.`),!1;We.set(e,n);for(const t of ve.values())Rr(t,n);return!0}function xr(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}/**
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
 */const Pr={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},L=new Ht("app","Firebase",Pr);/**
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
 */class Fr{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new ie("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw L.create("app-deleted",{appName:this._name})}}/**
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
 */const $r=Or;function Yt(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Ke,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw L.create("bad-app-name",{appName:String(s)});if(t||(t=xn()),!t)throw L.create("no-options");const i=ve.get(s);if(i){if(qe(t,i.options)&&qe(r,i.config))return i;throw L.create("duplicate-app",{appName:s})}const a=new qn(s);for(const c of We.values())a.addComponent(c);const o=new Fr(t,r,a);return ve.set(s,o),o}function Mr(n=Ke){const e=ve.get(n);if(!e&&n===Ke)return Yt();if(!e)throw L.create("no-app",{appName:n});return e}function G(n,e,t){var r;let s=(r=Vr[n])!==null&&r!==void 0?r:n;t&&(s+=`-${t}`);const i=s.match(/\s|\//),a=e.match(/\s|\//);if(i||a){const o=[`Unable to register library "${s}" with version "${e}":`];i&&o.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&a&&o.push("and"),a&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),U.warn(o.join(" "));return}_e(new ie(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const Lr="firebase-heartbeat-database",Br=1,ae="firebase-heartbeat-store";let Ue=null;function Qt(){return Ue||(Ue=nr(Lr,Br,{upgrade:(n,e)=>{switch(e){case 0:n.createObjectStore(ae)}}}).catch(n=>{throw L.create("idb-open",{originalErrorMessage:n.message})})),Ue}async function Ur(n){var e;try{return(await Qt()).transaction(ae).objectStore(ae).get(Jt(n))}catch(t){if(t instanceof J)U.warn(t.message);else{const r=L.create("idb-get",{originalErrorMessage:(e=t)===null||e===void 0?void 0:e.message});U.warn(r.message)}}}async function wt(n,e){var t;try{const s=(await Qt()).transaction(ae,"readwrite");return await s.objectStore(ae).put(e,Jt(n)),s.done}catch(r){if(r instanceof J)U.warn(r.message);else{const s=L.create("idb-set",{originalErrorMessage:(t=r)===null||t===void 0?void 0:t.message});U.warn(s.message)}}}function Jt(n){return`${n.name}!${n.options.appId}`}/**
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
 */const jr=1024,qr=30*24*60*60*1e3;class zr{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Gr(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const t=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=bt();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(s=>s.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:t}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(s=>{const i=new Date(s.date).valueOf();return Date.now()-i<=qr}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=bt(),{heartbeatsToSend:t,unsentEntries:r}=Hr(this._heartbeatsCache.heartbeats),s=be(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function bt(){return new Date().toISOString().substring(0,10)}function Hr(n,e=jr){const t=[];let r=n.slice();for(const s of n){const i=t.find(a=>a.agent===s.agent);if(i){if(i.dates.push(s.date),vt(t)>e){i.dates.pop();break}}else if(t.push({agent:s.agent,dates:[s.date]}),vt(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class Gr{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return An()?Dn().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await Ur(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return wt(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return wt(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function vt(n){return be(JSON.stringify({version:2,heartbeats:n})).length}/**
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
 */function Kr(n){_e(new ie("platform-logger",e=>new ir(e),"PRIVATE")),_e(new ie("heartbeat",e=>new zr(e),"PRIVATE")),G(Ge,yt,n),G(Ge,yt,"esm2017"),G("fire-js","")}Kr("");var Wr="firebase",Yr="9.12.1";/**
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
 */G(Wr,Yr,"app");/**
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
 */class T{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}T.UNAUTHENTICATED=new T(null),T.GOOGLE_CREDENTIALS=new T("google-credentials-uid"),T.FIRST_PARTY=new T("first-party-uid"),T.MOCK_USER=new T("mock-user");/**
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
 */let X="9.12.1";/**
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
 */const W=new Gt("@firebase/firestore");function Ee(n,...e){if(W.logLevel<=g.DEBUG){const t=e.map(tt);W.debug(`Firestore (${X}): ${n}`,...t)}}function et(n,...e){if(W.logLevel<=g.ERROR){const t=e.map(tt);W.error(`Firestore (${X}): ${n}`,...t)}}function Xt(n,...e){if(W.logLevel<=g.WARN){const t=e.map(tt);W.warn(`Firestore (${X}): ${n}`,...t)}}function tt(n){if(typeof n=="string")return n;try{return e=n,JSON.stringify(e)}catch{return n}/**
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
 */function y(n="Unexpected state"){const e=`FIRESTORE (${X}) INTERNAL ASSERTION FAILED: `+n;throw et(e),new Error(e)}function P(n,e){n||y()}function Ce(n,e){return n}/**
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
 */const _t="ok",Qr="cancelled",ne="unknown",h="invalid-argument",Jr="deadline-exceeded",Xr="not-found",Zr="permission-denied",Ye="unauthenticated",es="resource-exhausted",Y="failed-precondition",ts="aborted",ns="out-of-range",Zt="unimplemented",rs="internal",ss="unavailable";class l extends J{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class en{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class is{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(T.UNAUTHENTICATED))}shutdown(){}}class as{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class os{constructor(e){this.auth=null,e.onInit(t=>{this.auth=t})}getToken(){return this.auth?this.auth.getToken().then(e=>e?(P(typeof e.accessToken=="string"),new en(e.accessToken,new T(this.auth.getUid()))):null):Promise.resolve(null)}invalidateToken(){}start(e,t){}shutdown(){}}class cs{constructor(e,t,r,s){this.t=e,this.i=t,this.o=r,this.u=s,this.type="FirstParty",this.user=T.FIRST_PARTY,this.h=new Map}l(){return this.u?this.u():(P(!(typeof this.t!="object"||this.t===null||!this.t.auth||!this.t.auth.getAuthHeaderValueForFirstParty)),this.t.auth.getAuthHeaderValueForFirstParty([]))}get headers(){this.h.set("X-Goog-AuthUser",this.i);const e=this.l();return e&&this.h.set("Authorization",e),this.o&&this.h.set("X-Goog-Iam-Authorization-Token",this.o),this.h}}class us{constructor(e,t,r,s){this.t=e,this.i=t,this.o=r,this.u=s}getToken(){return Promise.resolve(new cs(this.t,this.i,this.o,this.u))}start(e,t){e.enqueueRetryable(()=>t(T.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class ls{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class hs{constructor(e){this.m=e,this.appCheck=null,e.onInit(t=>{this.appCheck=t})}getToken(){return this.appCheck?this.appCheck.getToken().then(e=>e?(P(typeof e.token=="string"),new ls(e.token)):null):Promise.resolve(null)}invalidateToken(){}start(e,t){}shutdown(){}}/**
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
 */class ds{constructor(e,t,r,s,i,a,o,c){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=a,this.autoDetectLongPolling=o,this.useFetchStreams=c}}class oe{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new oe("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof oe&&e.projectId===this.projectId&&e.database===this.database}}class ce{constructor(e,t,r){t===void 0?t=0:t>e.length&&y(),r===void 0?r=e.length-t:r>e.length-t&&y(),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return ce.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof ce?e.forEach(r=>{t.push(r)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let s=0;s<r;s++){const i=e.get(s),a=t.get(s);if(i<a)return-1;if(i>a)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class b extends ce{construct(e,t,r){return new b(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new l(h,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter(s=>s.length>0))}return new b(t)}static emptyPath(){return new b([])}}const fs=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class A extends ce{construct(e,t,r){return new A(e,t,r)}static isValidIdentifier(e){return fs.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),A.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new A(["__name__"])}static fromServerFormat(e){const t=[];let r="",s=0;const i=()=>{if(r.length===0)throw new l(h,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let a=!1;for(;s<e.length;){const o=e[s];if(o==="\\"){if(s+1===e.length)throw new l(h,"Path has trailing escape character: "+e);const c=e[s+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new l(h,"Path has invalid escape sequence: "+e);r+=c,s+=2}else o==="`"?(a=!a,s++):o!=="."||a?(r+=o,s++):(i(),s++)}if(i(),a)throw new l(h,"Unterminated ` in path: "+e);return new A(t)}static emptyPath(){return new A([])}}/**
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
 */class I{constructor(e){this.path=e}static fromPath(e){return new I(b.fromString(e))}static fromName(e){return new I(b.fromString(e).popFirst(5))}static empty(){return new I(b.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&b.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return b.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new I(new b(e.slice()))}}/**
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
 */function tn(n,e,t){if(!t)throw new l(h,`Function ${n}() cannot be called with an empty ${e}.`)}function Et(n){if(!I.isDocumentKey(n))throw new l(h,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function St(n){if(I.isDocumentKey(n))throw new l(h,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function Ne(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(t){return t.constructor?t.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":y()}function Oe(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new l(h,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Ne(n);throw new l(h,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
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
 */function ps(n){return n==null}function Se(n){return n===0&&1/n==-1/0}/**
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
 */const ms={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */var It,p;function Tt(n){if(n===void 0)return et("RPC_ERROR","HTTP error has no status"),ne;switch(n){case 200:return _t;case 400:return Y;case 401:return Ye;case 403:return Zr;case 404:return Xr;case 409:return ts;case 416:return ns;case 429:return es;case 499:return Qr;case 500:return ne;case 501:return Zt;case 503:return ss;case 504:return Jr;default:return n>=200&&n<300?_t:n>=400&&n<500?Y:n>=500&&n<600?rs:ne}}/**
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
 */(p=It||(It={}))[p.OK=0]="OK",p[p.CANCELLED=1]="CANCELLED",p[p.UNKNOWN=2]="UNKNOWN",p[p.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",p[p.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",p[p.NOT_FOUND=5]="NOT_FOUND",p[p.ALREADY_EXISTS=6]="ALREADY_EXISTS",p[p.PERMISSION_DENIED=7]="PERMISSION_DENIED",p[p.UNAUTHENTICATED=16]="UNAUTHENTICATED",p[p.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",p[p.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",p[p.ABORTED=10]="ABORTED",p[p.OUT_OF_RANGE=11]="OUT_OF_RANGE",p[p.UNIMPLEMENTED=12]="UNIMPLEMENTED",p[p.INTERNAL=13]="INTERNAL",p[p.UNAVAILABLE=14]="UNAVAILABLE",p[p.DATA_LOSS=15]="DATA_LOSS";class gs extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http";this.p=t+"://"+e.host,this.g="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get v(){return!1}I(e,t,r,s,i){const a=this.T(e,t);Ee("RestConnection","Sending: ",a,r);const o={};return this.A(o,s,i),this.R(e,a,o,r).then(c=>(Ee("RestConnection","Received: ",c),c),c=>{throw Xt("RestConnection",`${e} failed with error: `,c,"url: ",a,"request:",r),c})}P(e,t,r,s,i,a){return this.I(e,t,r,s,i)}A(e,t,r){e["X-Goog-Api-Client"]="gl-js/ fire/"+X,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((s,i)=>e[i]=s),r&&r.headers.forEach((s,i)=>e[i]=s)}T(e,t){const r=ms[e];return`${this.p}/v1/${t}:${r}`}}{constructor(e,t){super(e),this.V=t}N(e,t){throw new Error("Not supported by FetchConnection")}async R(e,t,r,s){const i=JSON.stringify(s);let a;try{a=await this.V(t,{method:"POST",headers:r,body:i})}catch(o){throw new l(Tt(o.status),"Request failed with error: "+o.statusText)}if(!a.ok)throw new l(Tt(a.status),"Request failed with error: "+a.statusText);return a.json()}}/**
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
 */function ys(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
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
 */class ws{static D(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const s=ys(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<t&&(r+=e.charAt(s[i]%e.length))}return r}}function v(n,e){return n<e?-1:n>e?1:0}function nn(n,e,t){return n.length===e.length&&n.every((r,s)=>t(r,e[s]))}/**
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
 */class D{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new l(h,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new l(h,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new l(h,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new l(h,"Timestamp seconds out of range: "+e)}static now(){return D.fromMillis(Date.now())}static fromDate(e){return D.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*t));return new D(t,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?v(this.nanoseconds,e.nanoseconds):v(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class N{constructor(e){this.timestamp=e}static fromTimestamp(e){return new N(e)}static min(){return new N(new D(0,0))}static max(){return new N(new D(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */function At(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function de(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}/**
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
 */class Ie{constructor(e,t){this.comparator=e,this.root=t||S.EMPTY}insert(e,t){return new Ie(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,S.BLACK,null,null))}remove(e){return new Ie(this.comparator,this.root.remove(e,this.comparator).copy(null,null,S.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return t+r.left.size;s<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,r)=>(e(t,r),!1))}toString(){const e=[];return this.inorderTraversal((t,r)=>(e.push(`${t}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new ge(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new ge(this.root,e,this.comparator,!1)}getReverseIterator(){return new ge(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new ge(this.root,e,this.comparator,!0)}}class ge{constructor(e,t,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?r(e.key,t):1,t&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class S{constructor(e,t,r,s,i){this.key=e,this.value=t,this.color=r!=null?r:S.RED,this.left=s!=null?s:S.EMPTY,this.right=i!=null?i:S.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,s,i){return new S(e!=null?e:this.key,t!=null?t:this.value,r!=null?r:this.color,s!=null?s:this.left,i!=null?i:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,t,r),null):i===0?s.copy(null,t,null,null,null):s.copy(null,null,null,null,s.right.insert(e,t,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return S.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,s=this;if(t(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),t(e,s.key)===0){if(s.right.isEmpty())return S.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,S.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,S.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw y();const e=this.left.check();if(e!==this.right.check())throw y();return e+(this.isRed()?0:1)}}S.EMPTY=null,S.RED=!0,S.BLACK=!1;S.EMPTY=new class{constructor(){this.size=0}get key(){throw y()}get value(){throw y()}get color(){throw y()}get left(){throw y()}get right(){throw y()}copy(n,e,t,r,s){return this}insert(n,e,t){return new S(n,e)}remove(n,e){return this}isEmpty(){return!0}inorderTraversal(n){return!1}reverseTraversal(n){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Te{constructor(e){this.comparator=e,this.data=new Ie(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,r)=>(e(t),!1))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;t(s.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Dt(this.data.getIterator())}getIteratorFrom(e){return new Dt(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(r=>{t=t.add(r)}),t}isEqual(e){if(!(e instanceof Te)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new Te(this.comparator);return t.data=e,t}}class Dt{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class j{constructor(e){this.fields=e,e.sort(A.comparator)}static empty(){return new j([])}unionWith(e){let t=new Te(A.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new j(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return nn(this.fields,e.fields,(t,r)=>t.isEqual(r))}}/**
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
 */class F{constructor(e){this.binaryString=e}static fromBase64String(e){const t=atob(e);return new F(t)}static fromUint8Array(e){const t=function(r){let s="";for(let i=0;i<r.length;++i)s+=String.fromCharCode(r[i]);return s}(e);return new F(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const t=new Uint8Array(e.length);for(let r=0;r<e.length;r++)t[r]=e.charCodeAt(r);return t}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return v(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}F.EMPTY_BYTE_STRING=new F("");const bs=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function q(n){if(P(!!n),typeof n=="string"){let e=0;const t=bs.exec(n);if(P(!!t),t[1]){let s=t[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:w(n.seconds),nanos:w(n.nanos)}}function w(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function ue(n){return typeof n=="string"?F.fromBase64String(n):F.fromUint8Array(n)}/**
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
 */function rn(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="server_timestamp"}function sn(n){const e=n.mapValue.fields.__previous_value__;return rn(e)?sn(e):e}function le(n){const e=q(n.mapValue.fields.__local_write_time__.timestampValue);return new D(e.seconds,e.nanos)}/**
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
 */const ye={fields:{__type__:{stringValue:"__max__"}}};function z(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?rn(n)?4:function(e){return(((e.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}(n)?9007199254740991:10:y()}function Ae(n,e){if(n===e)return!0;const t=z(n);if(t!==z(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return le(n).isEqual(le(e));case 3:return function(r,s){if(typeof r.timestampValue=="string"&&typeof s.timestampValue=="string"&&r.timestampValue.length===s.timestampValue.length)return r.timestampValue===s.timestampValue;const i=q(r.timestampValue),a=q(s.timestampValue);return i.seconds===a.seconds&&i.nanos===a.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(r,s){return ue(r.bytesValue).isEqual(ue(s.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(r,s){return w(r.geoPointValue.latitude)===w(s.geoPointValue.latitude)&&w(r.geoPointValue.longitude)===w(s.geoPointValue.longitude)}(n,e);case 2:return function(r,s){if("integerValue"in r&&"integerValue"in s)return w(r.integerValue)===w(s.integerValue);if("doubleValue"in r&&"doubleValue"in s){const i=w(r.doubleValue),a=w(s.doubleValue);return i===a?Se(i)===Se(a):isNaN(i)&&isNaN(a)}return!1}(n,e);case 9:return nn(n.arrayValue.values||[],e.arrayValue.values||[],Ae);case 10:return function(r,s){const i=r.mapValue.fields||{},a=s.mapValue.fields||{};if(At(i)!==At(a))return!1;for(const o in i)if(i.hasOwnProperty(o)&&(a[o]===void 0||!Ae(i[o],a[o])))return!1;return!0}(n,e);default:return y()}}function he(n,e){return(n.values||[]).find(t=>Ae(t,e))!==void 0}function De(n,e){if(n===e)return 0;const t=z(n),r=z(e);if(t!==r)return v(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return v(n.booleanValue,e.booleanValue);case 2:return function(s,i){const a=w(s.integerValue||s.doubleValue),o=w(i.integerValue||i.doubleValue);return a<o?-1:a>o?1:a===o?0:isNaN(a)?isNaN(o)?0:-1:1}(n,e);case 3:return kt(n.timestampValue,e.timestampValue);case 4:return kt(le(n),le(e));case 5:return v(n.stringValue,e.stringValue);case 6:return function(s,i){const a=ue(s),o=ue(i);return a.compareTo(o)}(n.bytesValue,e.bytesValue);case 7:return function(s,i){const a=s.split("/"),o=i.split("/");for(let c=0;c<a.length&&c<o.length;c++){const u=v(a[c],o[c]);if(u!==0)return u}return v(a.length,o.length)}(n.referenceValue,e.referenceValue);case 8:return function(s,i){const a=v(w(s.latitude),w(i.latitude));return a!==0?a:v(w(s.longitude),w(i.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return function(s,i){const a=s.values||[],o=i.values||[];for(let c=0;c<a.length&&c<o.length;++c){const u=De(a[c],o[c]);if(u)return u}return v(a.length,o.length)}(n.arrayValue,e.arrayValue);case 10:return function(s,i){if(s===ye&&i===ye)return 0;if(s===ye)return 1;if(i===ye)return-1;const a=s.fields||{},o=Object.keys(a),c=i.fields||{},u=Object.keys(c);o.sort(),u.sort();for(let f=0;f<o.length&&f<u.length;++f){const d=v(o[f],u[f]);if(d!==0)return d;const m=De(a[o[f]],c[u[f]]);if(m!==0)return m}return v(o.length,u.length)}(n.mapValue,e.mapValue);default:throw y()}}function kt(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return v(n,e);const t=q(n),r=q(e),s=v(t.seconds,r.seconds);return s!==0?s:v(t.nanos,r.nanos)}function Ct(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function an(n){return!!n&&"arrayValue"in n}function Nt(n){return!!n&&"nullValue"in n}function Ot(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function je(n){return!!n&&"mapValue"in n}function re(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return de(n.mapValue.fields,(t,r)=>e.mapValue.fields[t]=re(r)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=re(n.arrayValue.values[t]);return e}return Object.assign({},n)}class C{constructor(e){this.value=e}static empty(){return new C({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!je(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=re(t)}setAll(e){let t=A.emptyPath(),r={},s=[];e.forEach((a,o)=>{if(!t.isImmediateParentOf(o)){const c=this.getFieldsMap(t);this.applyChanges(c,r,s),r={},s=[],t=o.popLast()}a?r[o.lastSegment()]=re(a):s.push(o.lastSegment())});const i=this.getFieldsMap(t);this.applyChanges(i,r,s)}delete(e){const t=this.field(e.popLast());je(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return Ae(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=t.mapValue.fields[e.get(r)];je(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=s),t=s}return t.mapValue.fields}applyChanges(e,t,r){de(t,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new C(re(this.value))}}/**
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
 */class ${constructor(e,t,r,s,i,a){this.key=e,this.documentType=t,this.version=r,this.readTime=s,this.data=i,this.documentState=a}static newInvalidDocument(e){return new $(e,0,N.min(),N.min(),C.empty(),0)}static newFoundDocument(e,t,r){return new $(e,1,t,N.min(),r,0)}static newNoDocument(e,t){return new $(e,2,t,N.min(),C.empty(),0)}static newUnknownDocument(e,t){return new $(e,3,t,N.min(),C.empty(),2)}convertToFoundDocument(e,t){return this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=C.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=C.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=N.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof $&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new $(this.key,this.documentType,this.version,this.readTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class vs{constructor(e,t=null,r=[],s=[],i=null,a=null,o=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=a,this.endAt=o,this.$=null}}function Vt(n,e=null,t=[],r=[],s=null,i=null,a=null){return new vs(n,e,t,r,s,i,a)}class V extends class{}{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.F(e,t,r):new _s(e,t,r):t==="array-contains"?new Is(e,r):t==="in"?new Ts(e,r):t==="not-in"?new As(e,r):t==="array-contains-any"?new Ds(e,r):new V(e,t,r)}static F(e,t,r){return t==="in"?new Es(e,r):new Ss(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&this.S(De(t,this.value)):t!==null&&z(this.value)===z(t)&&this.S(De(t,this.value))}S(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return y()}}q(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}class _s extends V{constructor(e,t,r){super(e,t,r),this.key=I.fromName(r.referenceValue)}matches(e){const t=I.comparator(e.key,this.key);return this.S(t)}}class Es extends V{constructor(e,t){super(e,"in",t),this.keys=on("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class Ss extends V{constructor(e,t){super(e,"not-in",t),this.keys=on("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function on(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(r=>I.fromName(r.referenceValue))}class Is extends V{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return an(t)&&he(t.arrayValue,this.value)}}class Ts extends V{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&he(this.value.arrayValue,t)}}class As extends V{constructor(e,t){super(e,"not-in",t)}matches(e){if(he(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&!he(this.value.arrayValue,t)}}class Ds extends V{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!an(t)||!t.arrayValue.values)&&t.arrayValue.values.some(r=>he(this.value.arrayValue,r))}}class Rt{constructor(e,t){this.position=e,this.inclusive=t}}class we{constructor(e,t="asc"){this.field=e,this.dir=t}}/**
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
 */class cn{constructor(e,t=null,r=[],s=[],i=null,a="F",o=null,c=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=a,this.startAt=o,this.endAt=c,this.O=null,this.k=null,this.startAt,this.endAt}}function un(n){return n.explicitOrderBy.length>0?n.explicitOrderBy[0].field:null}function ln(n){for(const e of n.filters)if(e.q())return e.field;return null}function ks(n){return n.collectionGroup!==null}function xt(n){const e=Ce(n);if(e.O===null){e.O=[];const t=ln(e),r=un(e);if(t!==null&&r===null)t.isKeyField()||e.O.push(new we(t)),e.O.push(new we(A.keyField(),"asc"));else{let s=!1;for(const i of e.explicitOrderBy)e.O.push(i),i.field.isKeyField()&&(s=!0);if(!s){const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.O.push(new we(A.keyField(),i))}}}return e.O}function Cs(n){const e=Ce(n);if(!e.k)if(e.limitType==="F")e.k=Vt(e.path,e.collectionGroup,xt(e),e.filters,e.limit,e.startAt,e.endAt);else{const t=[];for(const i of xt(e)){const a=i.dir==="desc"?"asc":"desc";t.push(new we(i.field,a))}const r=e.endAt?new Rt(e.endAt.position,e.endAt.inclusive):null,s=e.startAt?new Rt(e.startAt.position,e.startAt.inclusive):null;e.k=Vt(e.path,e.collectionGroup,t,e.filters,e.limit,r,s)}return e.k}/**
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
 */function Ns(n,e){return function(t){return typeof t=="number"&&Number.isInteger(t)&&!Se(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}(e)?function(t){return{integerValue:""+t}}(e):function(t,r){if(t.C){if(isNaN(r))return{doubleValue:"NaN"};if(r===1/0)return{doubleValue:"Infinity"};if(r===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Se(r)?"-0":r}}(n,e)}/**
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
 */class Ve{constructor(){this._=void 0}}class hn extends Ve{}class Os extends Ve{constructor(e){super(),this.elements=e}}class Vs extends Ve{constructor(e){super(),this.elements=e}}class Rs extends Ve{constructor(e,t){super(),this.L=e,this.M=t}}/**
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
 */class xs{constructor(e,t){this.field=e,this.transform=t}}class K{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new K}static exists(e){return new K(void 0,e)}static updateTime(e){return new K(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}class Re{}class dn extends Re{constructor(e,t,r,s=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class nt extends Re{constructor(e,t,r,s,i=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}class Ps extends Re{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Fs extends Re{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */const $s=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),Ms=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))();class Ls{constructor(e,t){this.databaseId=e,this.C=t}}function Qe(n,e){return n.C?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Bs(n,e){return n.C?e.toBase64():e.toUint8Array()}function Us(n,e){return Qe(n,e.toTimestamp())}function js(n){return P(!!n),N.fromTimestamp(function(e){const t=q(e);return new D(t.seconds,t.nanos)}(n))}function rt(n,e){return function(t){return new b(["projects",t.projectId,"databases",t.database])}(n).child("documents").child(e).canonicalString()}function Je(n,e){return rt(n.databaseId,e.path)}function qs(n,e){const t=function(s){const i=b.fromString(s);return P(fn(i)),i}(e);if(t.get(1)!==n.databaseId.projectId)throw new l(h,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new l(h,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new I((P((r=t).length>4&&r.get(4)==="documents"),r.popFirst(5)));var r}function Pt(n,e){return rt(n.databaseId,e)}function zs(n){return new b(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function Ft(n,e,t){return{name:Je(n,e),fields:t.value.mapValue.fields}}function Hs(n,e){let t;if(e instanceof dn)t={update:Ft(n,e.key,e.value)};else if(e instanceof Ps)t={delete:Je(n,e.key)};else if(e instanceof nt)t={update:Ft(n,e.key,e.data),updateMask:Ys(e.fieldMask)};else{if(!(e instanceof Fs))return y();t={verify:Je(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(r=>function(s,i){const a=i.transform;if(a instanceof hn)return{fieldPath:i.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof Os)return{fieldPath:i.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof Vs)return{fieldPath:i.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof Rs)return{fieldPath:i.field.canonicalString(),increment:a.M};throw y()}(0,r))),e.precondition.isNone||(t.currentDocument=function(r,s){return s.updateTime!==void 0?{updateTime:Us(r,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:y()}(n,e.precondition)),t}function Gs(n,e){const t={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(t.parent=Pt(n,r),t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(t.parent=Pt(n,r.popLast()),t.structuredQuery.from=[{collectionId:r.lastSegment()}]);const s=function(c){if(c.length===0)return;const u=c.map(f=>function(d){if(d.op==="=="){if(Ot(d.value))return{unaryFilter:{field:H(d.field),op:"IS_NAN"}};if(Nt(d.value))return{unaryFilter:{field:H(d.field),op:"IS_NULL"}}}else if(d.op==="!="){if(Ot(d.value))return{unaryFilter:{field:H(d.field),op:"IS_NOT_NAN"}};if(Nt(d.value))return{unaryFilter:{field:H(d.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:H(d.field),op:Ws(d.op),value:d.value}}}(f));return u.length===1?u[0]:{compositeFilter:{op:"AND",filters:u}}}(e.filters);s&&(t.structuredQuery.where=s);const i=function(c){if(c.length!==0)return c.map(u=>function(f){return{field:H(f.field),direction:Ks(f.dir)}}(u))}(e.orderBy);i&&(t.structuredQuery.orderBy=i);const a=function(c,u){return c.C||ps(u)?u:{value:u}}(n,e.limit);var o;return a!==null&&(t.structuredQuery.limit=a),e.startAt&&(t.structuredQuery.startAt={before:(o=e.startAt).inclusive,values:o.position}),e.endAt&&(t.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),t}function Ks(n){return $s[n]}function Ws(n){return Ms[n]}function H(n){return{fieldPath:n.canonicalString()}}function Ys(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function fn(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
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
 */function st(n){return new Ls(n,!0)}/**
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
 */class Qs extends class{}{constructor(e,t,r,s){super(),this.authCredentials=e,this.appCheckCredentials=t,this.tt=r,this.L=s,this.et=!1}nt(){if(this.et)throw new l(Y,"The client has already been terminated.")}I(e,t,r){return this.nt(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,i])=>this.tt.I(e,t,r,s,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===Ye&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new l(ne,s.toString())})}P(e,t,r,s){return this.nt(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,a])=>this.tt.P(e,t,r,i,a,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===Ye&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new l(ne,i.toString())})}terminate(){this.et=!0}}async function pn(n,e){const t=Ce(n),r=zs(t.L)+"/documents",s={writes:e.map(i=>Hs(t.L,i))};await t.I("Commit",r,s)}async function Js(n,e){const t=Ce(n),r=Gs(t.L,Cs(e));return(await t.P("RunQuery",r.parent,{structuredQuery:r.structuredQuery})).filter(s=>!!s.document).map(s=>function(i,a,o){const c=qs(i,a.name),u=js(a.updateTime),f=new C({mapValue:{fields:a.fields}}),d=$.newFoundDocument(c,u,f);return o&&d.setHasCommittedMutations(),o?d.setHasCommittedMutations():d}(t.L,s.document,void 0))}/**
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
 */const se=new Map;function it(n){if(n._terminated)throw new l(Y,"The client has already been terminated.");if(!se.has(n)){Ee("ComponentProvider","Initializing Datastore");const i=function(c){return new gs(c,fetch.bind(null))}((e=n._databaseId,t=n.app.options.appId||"",r=n._persistenceKey,s=n._freezeSettings(),new ds(e,t,r,s.host,s.ssl,s.experimentalForceLongPolling,s.experimentalAutoDetectLongPolling,s.useFetchStreams))),a=st(n._databaseId),o=function(c,u,f,d){return new Qs(c,u,f,d)}(n._authCredentials,n._appCheckCredentials,i,a);se.set(n,o)}var e,t,r,s;/**
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
*/return se.get(n)}class $t{constructor(e){var t;if(e.host===void 0){if(e.ssl!==void 0)throw new l(h,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(t=e.ssl)===null||t===void 0||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new l(h,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,function(r,s,i,a){if(s===!0&&a===!0)throw new l(h,`${r} and ${i} cannot be used together.`)}("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
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
 */class xe{constructor(e,t,r,s){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new $t({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new l(Y,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new l(Y,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new $t(e),e.credentials!==void 0&&(this._authCredentials=function(t){if(!t)return new is;switch(t.type){case"gapi":const r=t.client;return new us(r,t.sessionIndex||"0",t.iamToken||null,t.authTokenFactory||null);case"provider":return t.client;default:throw new l(h,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const t=se.get(e);t&&(Ee("ComponentProvider","Removing Datastore"),se.delete(e),t.terminate())}(this),Promise.resolve()}}function Xs(n,e){const t=typeof n=="object"?n:Mr(),r=typeof n=="string"?n:e||"(default)",s=xr(t,"firestore/lite").getImmediate({identifier:r});if(!s._initialized){const i=Rn("firestore");i&&Zs(s,...i)}return s}function Zs(n,e,t,r={}){var s;const i=(n=Oe(n,xe))._getSettings();if(i.host!=="firestore.googleapis.com"&&i.host!==e&&Xt("Host has been set in both settings() and useEmulator(), emulator host will be used"),n._setSettings(Object.assign(Object.assign({},i),{host:`${e}:${t}`,ssl:!1})),r.mockUserToken){let a,o;if(typeof r.mockUserToken=="string")a=r.mockUserToken,o=T.MOCK_USER;else{a=Fn(r.mockUserToken,(s=n._app)===null||s===void 0?void 0:s.options.projectId);const c=r.mockUserToken.sub||r.mockUserToken.user_id;if(!c)throw new l(h,"mockUserToken must contain 'sub' or 'user_id' field!");o=new T(c)}n._authCredentials=new as(new en(a,o))}}/**
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
 */class k{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new R(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new k(this.firestore,e,this._key)}}class fe{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new fe(this.firestore,e,this._query)}}class R extends fe{constructor(e,t,r){super(e,t,new cn(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new k(this.firestore,null,new I(e))}withConverter(e){return new R(this.firestore,e,this._path)}}function Z(n,e,...t){if(n=x(n),tn("collection","path",e),n instanceof xe){const r=b.fromString(e,...t);return St(r),new R(n,null,r)}{if(!(n instanceof k||n instanceof R))throw new l(h,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(b.fromString(e,...t));return St(r),new R(n.firestore,null,r)}}function mn(n,e,...t){if(n=x(n),arguments.length===1&&(e=ws.D()),tn("doc","path",e),n instanceof xe){const r=b.fromString(e,...t);return Et(r),new k(n,null,new I(r))}{if(!(n instanceof k||n instanceof R))throw new l(h,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(b.fromString(e,...t));return Et(r),new k(n.firestore,n instanceof R?n.converter:null,new I(r))}}/**
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
 */class Q{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Q(F.fromBase64String(e))}catch(t){throw new l(h,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new Q(F.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class Pe{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new l(h,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new A(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class Fe{constructor(e){this._methodName=e}}/**
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
 */class at{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new l(h,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new l(h,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return v(this._lat,e._lat)||v(this._long,e._long)}}/**
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
 */const ei=/^__.*__$/;class ti{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new nt(e,this.data,this.fieldMask,t,this.fieldTransforms):new dn(e,this.data,t,this.fieldTransforms)}}class gn{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return new nt(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function yn(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw y()}}class ot{constructor(e,t,r,s,i,a){this.settings=e,this.databaseId=t,this.L=r,this.ignoreUndefinedProperties=s,i===void 0&&this.rt(),this.fieldTransforms=i||[],this.fieldMask=a||[]}get path(){return this.settings.path}get st(){return this.settings.st}it(e){return new ot(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.L,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ot(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),s=this.it({path:r,ut:!1});return s.ct(e),s}at(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),s=this.it({path:r,ut:!1});return s.rt(),s}ht(e){return this.it({path:void 0,ut:!0})}lt(e){return ke(e,this.settings.methodName,this.settings.ft||!1,this.path,this.settings.dt)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}rt(){if(this.path)for(let e=0;e<this.path.length;e++)this.ct(this.path.get(e))}ct(e){if(e.length===0)throw this.lt("Document fields must not be empty");if(yn(this.st)&&ei.test(e))throw this.lt('Document fields cannot begin and end with "__"')}}class ni{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.L=r||st(e)}wt(e,t,r,s=!1){return new ot({st:e,methodName:t,dt:r,path:A.emptyPath(),ut:!1,ft:s},this.databaseId,this.L,this.ignoreUndefinedProperties)}}function ct(n){const e=n._freezeSettings(),t=st(n._databaseId);return new ni(n._databaseId,!!e.ignoreUndefinedProperties,t)}function ri(n,e,t,r,s,i={}){const a=n.wt(i.merge||i.mergeFields?2:0,e,t,s);lt("Data must be an object, but it was:",a,r);const o=wn(r,a);let c,u;if(i.merge)c=new j(a.fieldMask),u=a.fieldTransforms;else if(i.mergeFields){const f=[];for(const d of i.mergeFields){const m=Xe(e,d,t);if(!a.contains(m))throw new l(h,`Field '${m}' is specified in your field mask but missing from your input data.`);vn(f,m)||f.push(m)}c=new j(f),u=a.fieldTransforms.filter(d=>c.covers(d.field))}else c=null,u=a.fieldTransforms;return new ti(new C(o),c,u)}class $e extends Fe{_toFieldTransform(e){if(e.st!==2)throw e.st===1?e.lt(`${this._methodName}() can only appear at the top level of your update data`):e.lt(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof $e}}class ut extends Fe{_toFieldTransform(e){return new xs(e.path,new hn)}isEqual(e){return e instanceof ut}}function si(n,e,t,r){const s=n.wt(1,e,t);lt("Data must be an object, but it was:",s,r);const i=[],a=C.empty();de(r,(c,u)=>{const f=ht(e,c,t);u=x(u);const d=s.at(f);if(u instanceof $e)i.push(f);else{const m=pe(u,d);m!=null&&(i.push(f),a.set(f,m))}});const o=new j(i);return new gn(a,o,s.fieldTransforms)}function ii(n,e,t,r,s,i){const a=n.wt(1,e,t),o=[Xe(e,r,t)],c=[s];if(i.length%2!=0)throw new l(h,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let m=0;m<i.length;m+=2)o.push(Xe(e,i[m])),c.push(i[m+1]);const u=[],f=C.empty();for(let m=o.length-1;m>=0;--m)if(!vn(u,o[m])){const _=o[m];let E=c[m];E=x(E);const te=a.at(_);if(E instanceof $e)u.push(_);else{const O=pe(E,te);O!=null&&(u.push(_),f.set(_,O))}}const d=new j(u);return new gn(f,d,a.fieldTransforms)}function ai(n,e,t,r=!1){return pe(t,n.wt(r?4:3,e))}function pe(n,e){if(bn(n=x(n)))return lt("Unsupported field value:",e,n),wn(n,e);if(n instanceof Fe)return function(t,r){if(!yn(r.st))throw r.lt(`${t._methodName}() can only be used with update() and set()`);if(!r.path)throw r.lt(`${t._methodName}() is not currently supported inside arrays`);const s=t._toFieldTransform(r);s&&r.fieldTransforms.push(s)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.ut&&e.st!==4)throw e.lt("Nested arrays are not supported");return function(t,r){const s=[];let i=0;for(const a of t){let o=pe(a,r.ht(i));o==null&&(o={nullValue:"NULL_VALUE"}),s.push(o),i++}return{arrayValue:{values:s}}}(n,e)}return function(t,r){if((t=x(t))===null)return{nullValue:"NULL_VALUE"};if(typeof t=="number")return Ns(r.L,t);if(typeof t=="boolean")return{booleanValue:t};if(typeof t=="string")return{stringValue:t};if(t instanceof Date){const s=D.fromDate(t);return{timestampValue:Qe(r.L,s)}}if(t instanceof D){const s=new D(t.seconds,1e3*Math.floor(t.nanoseconds/1e3));return{timestampValue:Qe(r.L,s)}}if(t instanceof at)return{geoPointValue:{latitude:t.latitude,longitude:t.longitude}};if(t instanceof Q)return{bytesValue:Bs(r.L,t._byteString)};if(t instanceof k){const s=r.databaseId,i=t.firestore._databaseId;if(!i.isEqual(s))throw r.lt(`Document reference is for database ${i.projectId}/${i.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:rt(t.firestore._databaseId||r.databaseId,t._key.path)}}throw r.lt(`Unsupported field value: ${Ne(t)}`)}(n,e)}function wn(n,e){const t={};return function(r){for(const s in r)if(Object.prototype.hasOwnProperty.call(r,s))return!1;return!0}(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):de(n,(r,s)=>{const i=pe(s,e.ot(r));i!=null&&(t[r]=i)}),{mapValue:{fields:t}}}function bn(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof D||n instanceof at||n instanceof Q||n instanceof k||n instanceof Fe)}function lt(n,e,t){if(!bn(t)||!function(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}(t)){const r=Ne(t);throw r==="an object"?e.lt(n+" a custom object"):e.lt(n+" "+r)}}function Xe(n,e,t){if((e=x(e))instanceof Pe)return e._internalPath;if(typeof e=="string")return ht(n,e);throw ke("Field path arguments must be of type string or ",n,!1,void 0,t)}const oi=new RegExp("[~\\*/\\[\\]]");function ht(n,e,t){if(e.search(oi)>=0)throw ke(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new Pe(...e.split("."))._internalPath}catch{throw ke(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function ke(n,e,t,r,s){const i=r&&!r.isEmpty(),a=s!==void 0;let o=`Function ${e}() called with invalid data`;t&&(o+=" (via `toFirestore()`)"),o+=". ";let c="";return(i||a)&&(c+=" (found",i&&(c+=` in field ${r}`),a&&(c+=` in document ${s}`),c+=")"),new l(h,o+n+c)}function vn(n,e){return n.some(t=>t.isEqual(e))}/**
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
 */class ci{constructor(e,t,r,s,i){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new k(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new _n(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(En("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class _n extends ci{data(){return super.data()}}class ui{constructor(e,t){this._docs=t,this.query=e}get docs(){return[...this._docs]}get size(){return this.docs.length}get empty(){return this.docs.length===0}forEach(e,t){this._docs.forEach(e,t)}}function En(n,e){return typeof e=="string"?ht(n,e):e instanceof Pe?e._internalPath:e._delegate._internalPath}/**
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
 */class li{}function hi(n,...e){for(const t of e)n=t._apply(n);return n}class di extends li{constructor(e,t,r){super(),this.gt=e,this.vt=t,this.bt=r,this.type="where"}_apply(e){const t=ct(e.firestore),r=function(s,i,a,o,c,u,f){let d;if(c.isKeyField()){if(u==="array-contains"||u==="array-contains-any")throw new l(h,`Invalid Query. You can't perform '${u}' queries on documentId().`);if(u==="in"||u==="not-in"){Lt(f,u);const _=[];for(const E of f)_.push(Mt(o,s,E));d={arrayValue:{values:_}}}else d=Mt(o,s,f)}else u!=="in"&&u!=="not-in"&&u!=="array-contains-any"||Lt(f,u),d=ai(a,i,f,u==="in"||u==="not-in");const m=V.create(c,u,d);return function(_,E){if(E.q()){const O=ln(_);if(O!==null&&!O.isEqual(E.field))throw new l(h,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${O.toString()}' and '${E.field.toString()}'`);const me=un(_);me!==null&&pi(_,E.field,me)}const te=function(O,me){for(const dt of O.filters)if(me.indexOf(dt.op)>=0)return dt.op;return null}(_,function(O){switch(O){case"!=":return["!=","not-in"];case"array-contains":return["array-contains","array-contains-any","not-in"];case"in":return["array-contains-any","in","not-in"];case"array-contains-any":return["array-contains","array-contains-any","in","not-in"];case"not-in":return["array-contains","array-contains-any","in","not-in","!="];default:return[]}}(E.op));if(te!==null)throw te===E.op?new l(h,`Invalid query. You cannot use more than one '${E.op.toString()}' filter.`):new l(h,`Invalid query. You cannot use '${E.op.toString()}' filters with '${te.toString()}' filters.`)}(s,m),m}(e._query,"where",t,e.firestore._databaseId,this.gt,this.vt,this.bt);return new fe(e.firestore,e.converter,function(s,i){const a=s.filters.concat([i]);return new cn(s.path,s.collectionGroup,s.explicitOrderBy.slice(),a,s.limit,s.limitType,s.startAt,s.endAt)}(e._query,r))}}function fi(n,e,t){const r=e,s=En("where",n);return new di(s,r,t)}function Mt(n,e,t){if(typeof(t=x(t))=="string"){if(t==="")throw new l(h,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!ks(e)&&t.indexOf("/")!==-1)throw new l(h,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const r=e.path.child(b.fromString(t));if(!I.isDocumentKey(r))throw new l(h,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Ct(n,new I(r))}if(t instanceof k)return Ct(n,t._key);throw new l(h,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Ne(t)}.`)}function Lt(n,e){if(!Array.isArray(n)||n.length===0)throw new l(h,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`);if(n.length>10)throw new l(h,`Invalid Query. '${e.toString()}' filters support a maximum of 10 elements in the value array.`)}function pi(n,e,t){if(!t.isEqual(e))throw new l(h,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${t.toString()}' instead.`)}/**
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
 */function mi(n,e,t){let r;return r=n?t&&(t.merge||t.mergeFields)?n.toFirestore(e,t):n.toFirestore(e):e,r}class gi extends class{convertValue(e,t="none"){switch(z(e)){case 0:return null;case 1:return e.booleanValue;case 2:return w(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(ue(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 10:return this.convertObject(e.mapValue,t);default:throw y()}}convertObject(e,t){const r={};return de(e.fields,(s,i)=>{r[s]=this.convertValue(i,t)}),r}convertGeoPoint(e){return new at(w(e.latitude),w(e.longitude))}convertArray(e,t){return(e.values||[]).map(r=>this.convertValue(r,t))}convertServerTimestamp(e,t){switch(t){case"previous":const r=sn(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(le(e));default:return null}}convertTimestamp(e){const t=q(e);return new D(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=b.fromString(e);P(fn(r));const s=new oe(r.get(1),r.get(3)),i=new I(r.popFirst(5));return s.isEqual(t)||et(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}{constructor(e){super(),this.firestore=e}convertBytes(e){return new Q(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new k(this.firestore,null,t)}}function Bt(n){(function(r){if(r.limitType==="L"&&r.explicitOrderBy.length===0)throw new l(Zt,"limitToLast() queries require specifying at least one orderBy() clause")})((n=Oe(n,fe))._query);const e=it(n.firestore),t=new gi(n.firestore);return Js(e,n._query).then(r=>{const s=r.map(i=>new _n(n.firestore,t,i.key,i,n.converter));return n._query.limitType==="L"&&s.reverse(),new ui(n,s)})}function yi(n,e,t,...r){const s=ct((n=Oe(n,k)).firestore);let i;return i=typeof(e=x(e))=="string"||e instanceof Pe?ii(s,"updateDoc",n._key,e,t,r):si(s,"updateDoc",n._key,e),pn(it(n.firestore),[i.toMutation(n._key,K.exists(!0))])}function wi(n,e){const t=mn(n=Oe(n,R)),r=mi(n.converter,e),s=ri(ct(n.firestore),"addDoc",t._key,r,t.converter!==null,{});return pn(it(n.firestore),[s.toMutation(t._key,K.exists(!1))]).then(()=>t)}function _i(){return new ut("serverTimestamp")}(function(n){X=n})(`${$r}_lite`),_e(new ie("firestore/lite",(n,{instanceIdentifier:e,options:t})=>{const r=n.getProvider("app").getImmediate(),s=new xe(new os(n.getProvider("auth-internal")),new hs(n.getProvider("app-check-internal")),function(i,a){if(!Object.prototype.hasOwnProperty.apply(i.options,["projectId"]))throw new l(h,'"projectId" not provided in firebase.initializeApp.');return new oe(i.options.projectId,a)}(r,e),r);return t&&s._setSettings(t),s},"PUBLIC").setMultipleInstances(!0)),G("firestore-lite","3.7.1",""),G("firestore-lite","3.7.1","esm2017");const bi={apiKey:"AIzaSyDFF6rtd0B18fPfiZO_VJ3rVaGjLqnf3no",authDomain:"munihuaurathesis.firebaseapp.com",projectId:"munihuaurathesis",storageBucket:"munihuaurathesis.appspot.com",messagingSenderId:"890591931409",appId:"1:890591931409:web:fe6745033e9cfc6577d5b0"},vi=Yt(bi),ee=Xs(vi),Ei=Z(ee,"Sectors"),Si=Z(ee,"Incidents"),Ii=Z(ee,"SystemUsers"),Ti=Z(ee,"RegisteredUsers"),Ai=Z(ee,"IncidentTypes");Z(ee,"Reports");const Di=async(n,e)=>{let t=e.id;if(t){delete e.id;let r=mn(n,t);await yi(r,e)}else t=(await wi(n,e)).id;e.id=t},ki=async(n,e)=>{if(e){let t=[];e.forEach(i=>{t.push(fi(i.field,i.operator,i.value))});let r=hi(n,...t);return(await Bt(r)).docs.map(i=>Ut(i))}else return(await Bt(n)).docs.map(r=>Ut(r))},Ut=n=>{let e=Object.assign({},n.data());return e.id=n.id,e},Ci=(n,e)=>{e.forEach(t=>{if(t.required)if(n.hasOwnProperty(t.name)){if(!n[t.name])throw`${t.descripcion} es un campo requerido`}else throw`${t.descripcion} es un campo requerido`;if(t.isNumber&&isNaN(n[t.name]))throw`${t.descripcion} debe ser un valor num\xE9rico`;if(t.gt&&n[t.name]<t.value)throw`${t.descripcion} debe ser mayor que ${t.value}`;if(t.ge&&n[t.name]<t.value)throw`${t.descripcion} debe ser mayor o igual que ${t.value}`;if(t.lt&&n[t.name]>t.value)throw`${t.descripcion} debe ser menor que ${t.value}`;if(t.le&&n[t.name]>t.value)throw`${t.descripcion} debe ser menor o igual que ${t.value}`;if(t.lenghtMax&&n[t.name]&&n[t.name].length>t.lenghtMax)throw`El tama\xF1o de ${t.descripcion} debe ser como m\xE1ximo ${t.lenghtMax} caracteres`;if(t.lenghtMin&&n[t.name]&&n[t.name].length<t.lenghtMin)throw`El tama\xF1o de ${t.descripcion} debe ser como m\xEDnimo ${t.lenghtMin} caracteres`;if(t.regexp&&t.regexp.test(n[t.name]))throw`${t.descripcion} no tiene un formato v\xE1lido`})};export{Ti as C,Si as I,_i as M,Ii as S,Ei as a,Ai as b,ki as g,Di as s,Ci as v};
