import{q as qt,o as N,c as Y,m as ct,D as Mt,k as Me,v as ue,x as Ut,i as ht,R as Bt,y as jt,d as O,F as dt,n as Ee,t as Ue,z as zt,A as Gt,B as M,Z as _e,O as Kt,U as Qt,h as Be,j as je,a as Yt,E as Ht,G as Wt,H as Xt,I as ze,J as Zt,K as Jt,L as B,M as en,N as tn,P as nn,Q as Ae,S as rn}from"./index.dd426db0.js";var Ur=qt(),sn={name:"InputText",inheritAttrs:!1,emits:["update:modelValue"],props:{modelValue:null},methods:{onInput(n){this.$emit("update:modelValue",n.target.value)}},computed:{filled(){return this.modelValue!=null&&this.modelValue.toString().length>0}}};const an=["value"];function on(n,e,t,r,s,i){return N(),Y("input",ct({class:["p-inputtext p-component",{"p-filled":i.filled}],value:t.modelValue,onInput:e[0]||(e[0]=(...a)=>i.onInput&&i.onInput(...a))},n.$attrs),null,16,an)}sn.render=on;var ft={name:"Portal",props:{appendTo:{type:String,default:"body"},disabled:{type:Boolean,default:!1}},data(){return{mounted:!1}},mounted(){this.mounted=Mt.isClient()},computed:{inline(){return this.disabled||this.appendTo==="self"}}};function ln(n,e,t,r,s,i){return i.inline?Me(n.$slots,"default",{key:0}):s.mounted?(N(),ue(Ut,{key:1,to:t.appendTo},[Me(n.$slots,"default")],8,["to"])):ht("",!0)}ft.render=ln;var pt={name:"ToastMessage",emits:["close"],props:{message:null,template:null},closeTimeout:null,mounted(){this.message.life&&(this.closeTimeout=setTimeout(()=>{this.close()},this.message.life))},beforeUnmount(){this.clearCloseTimeout()},methods:{close(){this.$emit("close",this.message)},onCloseClick(){this.clearCloseTimeout(),this.close()},clearCloseTimeout(){this.closeTimeout&&(clearTimeout(this.closeTimeout),this.closeTimeout=null)}},computed:{containerClass(){return["p-toast-message",this.message.styleClass,{"p-toast-message-info":this.message.severity==="info","p-toast-message-warn":this.message.severity==="warn","p-toast-message-error":this.message.severity==="error","p-toast-message-success":this.message.severity==="success"}]},iconClass(){return["p-toast-message-icon pi",{"pi-info-circle":this.message.severity==="info","pi-exclamation-triangle":this.message.severity==="warn","pi-times":this.message.severity==="error","pi-check":this.message.severity==="success"}]}},directives:{ripple:Bt}};const un={class:"p-toast-message-text"},cn={class:"p-toast-summary"},hn={class:"p-toast-detail"},dn=O("span",{class:"p-toast-icon-close-icon pi pi-times"},null,-1),fn=[dn];function pn(n,e,t,r,s,i){const a=jt("ripple");return N(),Y("div",{class:Ee(i.containerClass),role:"alert","aria-live":"assertive","aria-atomic":"true"},[O("div",{class:Ee(["p-toast-message-content",t.message.contentStyleClass])},[t.template?(N(),ue(zt(t.template),{key:1,message:t.message},null,8,["message"])):(N(),Y(dt,{key:0},[O("span",{class:Ee(i.iconClass)},null,2),O("div",un,[O("span",cn,Ue(t.message.summary),1),O("div",hn,Ue(t.message.detail),1)])],64)),t.message.closable!==!1?Gt((N(),Y("button",{key:2,class:"p-toast-icon-close p-link",onClick:e[0]||(e[0]=(...o)=>i.onCloseClick&&i.onCloseClick(...o)),type:"button"},fn)),[[a]]):ht("",!0)],2)],2)}pt.render=pn;var mn=0,gn={name:"Toast",inheritAttrs:!1,props:{group:{type:String,default:null},position:{type:String,default:"top-right"},autoZIndex:{type:Boolean,default:!0},baseZIndex:{type:Number,default:0},breakpoints:{type:Object,default:null}},data(){return{messages:[]}},styleElement:null,mounted(){M.on("add",this.onAdd),M.on("remove-group",this.onRemoveGroup),M.on("remove-all-groups",this.onRemoveAllGroups),this.breakpoints&&this.createStyle()},beforeUnmount(){this.destroyStyle(),this.$refs.container&&this.autoZIndex&&_e.clear(this.$refs.container),M.off("add",this.onAdd),M.off("remove-group",this.onRemoveGroup),M.off("remove-all-groups",this.onRemoveAllGroups)},methods:{add(n){n.id==null&&(n.id=mn++),this.messages=[...this.messages,n]},remove(n){let e=-1;for(let t=0;t<this.messages.length;t++)if(this.messages[t]===n){e=t;break}this.messages.splice(e,1)},onAdd(n){this.group==n.group&&this.add(n)},onRemoveGroup(n){this.group===n&&(this.messages=[])},onRemoveAllGroups(){this.messages=[]},onEnter(){this.$refs.container.setAttribute(this.attributeSelector,""),this.autoZIndex&&_e.set("modal",this.$refs.container,this.baseZIndex||this.$primevue.config.zIndex.modal)},onLeave(){this.$refs.container&&this.autoZIndex&&Kt.isEmpty(this.messages)&&_e.clear(this.$refs.container)},createStyle(){if(!this.styleElement){this.styleElement=document.createElement("style"),this.styleElement.type="text/css",document.head.appendChild(this.styleElement);let n="";for(let e in this.breakpoints){let t="";for(let r in this.breakpoints[e])t+=r+":"+this.breakpoints[e][r]+"!important;";n+=`
                        @media screen and (max-width: ${e}) {
                            .p-toast[${this.attributeSelector}] {
                                ${t}
                            }
                        }
                    `}this.styleElement.innerHTML=n}},destroyStyle(){this.styleElement&&(document.head.removeChild(this.styleElement),this.styleElement=null)}},components:{ToastMessage:pt,Portal:ft},computed:{containerClass(){return["p-toast p-component p-toast-"+this.position,{"p-input-filled":this.$primevue.config.inputStyle==="filled","p-ripple-disabled":this.$primevue.config.ripple===!1}]},attributeSelector(){return Qt()}}};function yn(n,e,t,r,s,i){const a=Be("ToastMessage"),o=Be("Portal");return N(),ue(o,null,{default:je(()=>[O("div",ct({ref:"container",class:i.containerClass},n.$attrs),[Yt(Wt,{name:"p-toast-message",tag:"div",onEnter:i.onEnter,onLeave:i.onLeave},{default:je(()=>[(N(!0),Y(dt,null,Ht(s.messages,l=>(N(),ue(a,{key:l.id,message:l,onClose:e[0]||(e[0]=c=>i.remove(c)),template:n.$slots.message},null,8,["message","template"]))),128))]),_:1},8,["onEnter","onLeave"])],16)]),_:1})}function vn(n,e){e===void 0&&(e={});var t=e.insertAt;if(!(!n||typeof document=="undefined")){var r=document.head||document.getElementsByTagName("head")[0],s=document.createElement("style");s.type="text/css",t==="top"&&r.firstChild?r.insertBefore(s,r.firstChild):r.appendChild(s),s.styleSheet?s.styleSheet.cssText=n:s.appendChild(document.createTextNode(n))}}var wn=`
.p-toast {
    position: fixed;
    width: 25rem;
}
.p-toast-message-content {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: start;
        -ms-flex-align: start;
            align-items: flex-start;
}
.p-toast-message-text {
    -webkit-box-flex: 1;
        -ms-flex: 1 1 auto;
            flex: 1 1 auto;
}
.p-toast-top-right {
	top: 20px;
	right: 20px;
}
.p-toast-top-left {
	top: 20px;
	left: 20px;
}
.p-toast-bottom-left {
	bottom: 20px;
	left: 20px;
}
.p-toast-bottom-right {
	bottom: 20px;
	right: 20px;
}
.p-toast-top-center {
	top: 20px;
    left: 50%;
    -webkit-transform: translateX(-50%);
            transform: translateX(-50%);
}
.p-toast-bottom-center {
	bottom: 20px;
    left: 50%;
    -webkit-transform: translateX(-50%);
            transform: translateX(-50%);
}
.p-toast-center {
	left: 50%;
	top: 50%;
    min-width: 20vw;
    -webkit-transform: translate(-50%, -50%);
            transform: translate(-50%, -50%);
}
.p-toast-icon-close {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
    -webkit-box-pack: center;
        -ms-flex-pack: center;
            justify-content: center;
    overflow: hidden;
    position: relative;
}
.p-toast-icon-close.p-link {
	cursor: pointer;
}

/* Animations */
.p-toast-message-enter-from {
    opacity: 0;
    -webkit-transform: translateY(50%);
    transform: translateY(50%);
}
.p-toast-message-leave-from {
    max-height: 1000px;
}
.p-toast .p-toast-message.p-toast-message-leave-to {
    max-height: 0;
    opacity: 0;
    margin-bottom: 0;
    overflow: hidden;
}
.p-toast-message-enter-active {
    -webkit-transition: transform .3s, opacity .3s;
    -webkit-transition: opacity .3s, -webkit-transform .3s;
    transition: opacity .3s, -webkit-transform .3s;
    transition: transform .3s, opacity .3s;
    transition: transform .3s, opacity .3s, -webkit-transform .3s;
}
.p-toast-message-leave-active {
    -webkit-transition: max-height .45s cubic-bezier(0, 1, 0, 1), opacity .3s, margin-bottom .3s;
    transition: max-height .45s cubic-bezier(0, 1, 0, 1), opacity .3s, margin-bottom .3s;
}
`;vn(wn);gn.render=yn;/**
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
 */class E{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}E.UNAUTHENTICATED=new E(null),E.GOOGLE_CREDENTIALS=new E("google-credentials-uid"),E.FIRST_PARTY=new E("first-party-uid"),E.MOCK_USER=new E("mock-user");/**
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
 */let Q="9.9.2";/**
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
 */const j=new tn("@firebase/firestore");function ce(n,...e){if(j.logLevel<=Ae.DEBUG){const t=e.map(Pe);j.debug(`Firestore (${Q}): ${n}`,...t)}}function Ne(n,...e){if(j.logLevel<=Ae.ERROR){const t=e.map(Pe);j.error(`Firestore (${Q}): ${n}`,...t)}}function bn(n,...e){if(j.logLevel<=Ae.WARN){const t=e.map(Pe);j.warn(`Firestore (${Q}): ${n}`,...t)}}function Pe(n){if(typeof n=="string")return n;try{return e=n,JSON.stringify(e)}catch{return n}/**
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
 */function m(n="Unexpected state"){const e=`FIRESTORE (${Q}) INTERNAL ASSERTION FAILED: `+n;throw Ne(e),new Error(e)}function R(n,e){n||m()}function ye(n,e){return n}/**
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
 */const Ge="ok",Tn="cancelled",H="unknown",h="invalid-argument",Sn="deadline-exceeded",En="not-found",_n="permission-denied",Ie="unauthenticated",kn="resource-exhausted",z="failed-precondition",In="aborted",Vn="out-of-range",mt="unimplemented",xn="internal",An="unavailable";class u extends nn{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Nn{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Pn{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(E.UNAUTHENTICATED))}shutdown(){}}class Rn{constructor(e){this.auth=null,e.onInit(t=>{this.auth=t})}getToken(){return this.auth?this.auth.getToken().then(e=>e?(R(typeof e.accessToken=="string"),new Nn(e.accessToken,new E(this.auth.getUid()))):null):Promise.resolve(null)}invalidateToken(){}start(e,t){}shutdown(){}}class Dn{constructor(e,t,r){this.type="FirstParty",this.user=E.FIRST_PARTY,this.headers=new Map,this.headers.set("X-Goog-AuthUser",t);const s=e.auth.getAuthHeaderValueForFirstParty([]);s&&this.headers.set("Authorization",s),r&&this.headers.set("X-Goog-Iam-Authorization-Token",r)}}class Fn{constructor(e,t,r){this.t=e,this.i=t,this.o=r}getToken(){return Promise.resolve(new Dn(this.t,this.i,this.o))}start(e,t){e.enqueueRetryable(()=>t(E.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Cn{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class $n{constructor(e){this.u=e,this.appCheck=null,e.onInit(t=>{this.appCheck=t})}getToken(){return this.appCheck?this.appCheck.getToken().then(e=>e?(R(typeof e.token=="string"),new Cn(e.token)):null):Promise.resolve(null)}invalidateToken(){}start(e,t){}shutdown(){}}/**
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
 */class On{constructor(e,t,r,s,i,a,o,l){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=a,this.autoDetectLongPolling=o,this.useFetchStreams=l}}class G{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new G("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof G&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */class J{constructor(e,t,r){t===void 0?t=0:t>e.length&&m(),r===void 0?r=e.length-t:r>e.length-t&&m(),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return J.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof J?e.forEach(r=>{t.push(r)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let s=0;s<r;s++){const i=e.get(s),a=t.get(s);if(i<a)return-1;if(i>a)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class y extends J{construct(e,t,r){return new y(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new u(h,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter(s=>s.length>0))}return new y(t)}static emptyPath(){return new y([])}}const Ln=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class T extends J{construct(e,t,r){return new T(e,t,r)}static isValidIdentifier(e){return Ln.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),T.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new T(["__name__"])}static fromServerFormat(e){const t=[];let r="",s=0;const i=()=>{if(r.length===0)throw new u(h,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let a=!1;for(;s<e.length;){const o=e[s];if(o==="\\"){if(s+1===e.length)throw new u(h,"Path has trailing escape character: "+e);const l=e[s+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new u(h,"Path has invalid escape sequence: "+e);r+=l,s+=2}else o==="`"?(a=!a,s++):o!=="."||a?(r+=o,s++):(i(),s++)}if(i(),a)throw new u(h,"Unterminated ` in path: "+e);return new T(t)}static emptyPath(){return new T([])}}/**
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
 */class b{constructor(e){this.path=e}static fromPath(e){return new b(y.fromString(e))}static fromName(e){return new b(y.fromString(e).popFirst(5))}static empty(){return new b(y.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&y.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return y.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new b(new y(e.slice()))}}/**
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
 */function gt(n,e,t){if(!t)throw new u(h,`Function ${n}() cannot be called with an empty ${e}.`)}function Ke(n){if(!b.isDocumentKey(n))throw new u(h,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function Qe(n){if(b.isDocumentKey(n))throw new u(h,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function ve(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(t){return t.constructor?t.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":m()}function yt(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new u(h,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=ve(n);throw new u(h,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
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
 */function qn(n){return n==null}function he(n){return n===0&&1/n==-1/0}/**
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
 */const Mn={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"};/**
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
 */var Ye,d;function He(n){if(n===void 0)return Ne("RPC_ERROR","HTTP error has no status"),H;switch(n){case 200:return Ge;case 400:return z;case 401:return Ie;case 403:return _n;case 404:return En;case 409:return In;case 416:return Vn;case 429:return kn;case 499:return Tn;case 500:return H;case 501:return mt;case 503:return An;case 504:return Sn;default:return n>=200&&n<300?Ge:n>=400&&n<500?z:n>=500&&n<600?xn:H}}/**
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
 */(d=Ye||(Ye={}))[d.OK=0]="OK",d[d.CANCELLED=1]="CANCELLED",d[d.UNKNOWN=2]="UNKNOWN",d[d.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",d[d.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",d[d.NOT_FOUND=5]="NOT_FOUND",d[d.ALREADY_EXISTS=6]="ALREADY_EXISTS",d[d.PERMISSION_DENIED=7]="PERMISSION_DENIED",d[d.UNAUTHENTICATED=16]="UNAUTHENTICATED",d[d.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",d[d.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",d[d.ABORTED=10]="ABORTED",d[d.OUT_OF_RANGE=11]="OUT_OF_RANGE",d[d.UNIMPLEMENTED=12]="UNIMPLEMENTED",d[d.INTERNAL=13]="INTERNAL",d[d.UNAVAILABLE=14]="UNAVAILABLE",d[d.DATA_LOSS=15]="DATA_LOSS";class Un extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http";this.h=t+"://"+e.host,this.l="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}m(e,t,r,s,i){const a=this.p(e,t);ce("RestConnection","Sending: ",a,r);const o={};return this.g(o,s,i),this.v(e,a,o,r).then(l=>(ce("RestConnection","Received: ",l),l),l=>{throw bn("RestConnection",`${e} failed with error: `,l,"url: ",a,"request:",r),l})}T(e,t,r,s,i,a){return this.m(e,t,r,s,i)}g(e,t,r){e["X-Goog-Api-Client"]="gl-js/ fire/"+Q,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((s,i)=>e[i]=s),r&&r.headers.forEach((s,i)=>e[i]=s)}p(e,t){const r=Mn[e];return`${this.h}/v1/${t}:${r}`}}{constructor(e,t){super(e),this.I=t}A(e,t){throw new Error("Not supported by FetchConnection")}async v(e,t,r,s){const i=JSON.stringify(s);let a;try{a=await this.I(t,{method:"POST",headers:r,body:i})}catch(o){throw new u(He(o.status),"Request failed with error: "+o.statusText)}if(!a.ok)throw new u(He(a.status),"Request failed with error: "+a.statusText);return a.json()}}/**
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
 */function Bn(n){const e=typeof self!="undefined"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
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
 */class jn{static R(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const s=Bn(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<t&&(r+=e.charAt(s[i]%e.length))}return r}}function v(n,e){return n<e?-1:n>e?1:0}function vt(n,e,t){return n.length===e.length&&n.every((r,s)=>t(r,e[s]))}/**
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
 */class S{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new u(h,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new u(h,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new u(h,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new u(h,"Timestamp seconds out of range: "+e)}static now(){return S.fromMillis(Date.now())}static fromDate(e){return S.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*t));return new S(t,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?v(this.nanoseconds,e.nanoseconds):v(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class k{constructor(e){this.timestamp=e}static fromTimestamp(e){return new k(e)}static min(){return new k(new S(0,0))}static max(){return new k(new S(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */function We(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function we(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}/**
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
 */class de{constructor(e,t){this.comparator=e,this.root=t||w.EMPTY}insert(e,t){return new de(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,w.BLACK,null,null))}remove(e){return new de(this.comparator,this.root.remove(e,this.comparator).copy(null,null,w.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return t+r.left.size;s<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,r)=>(e(t,r),!1))}toString(){const e=[];return this.inorderTraversal((t,r)=>(e.push(`${t}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new ae(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new ae(this.root,e,this.comparator,!1)}getReverseIterator(){return new ae(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new ae(this.root,e,this.comparator,!0)}}class ae{constructor(e,t,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?r(e.key,t):1,t&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class w{constructor(e,t,r,s,i){this.key=e,this.value=t,this.color=r!=null?r:w.RED,this.left=s!=null?s:w.EMPTY,this.right=i!=null?i:w.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,s,i){return new w(e!=null?e:this.key,t!=null?t:this.value,r!=null?r:this.color,s!=null?s:this.left,i!=null?i:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,t,r),null):i===0?s.copy(null,t,null,null,null):s.copy(null,null,null,null,s.right.insert(e,t,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return w.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,s=this;if(t(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),t(e,s.key)===0){if(s.right.isEmpty())return w.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,w.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,w.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw m();const e=this.left.check();if(e!==this.right.check())throw m();return e+(this.isRed()?0:1)}}w.EMPTY=null,w.RED=!0,w.BLACK=!1;w.EMPTY=new class{constructor(){this.size=0}get key(){throw m()}get value(){throw m()}get color(){throw m()}get left(){throw m()}get right(){throw m()}copy(n,e,t,r,s){return this}insert(n,e,t){return new w(n,e)}remove(n,e){return this}isEmpty(){return!0}inorderTraversal(n){return!1}reverseTraversal(n){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class fe{constructor(e){this.comparator=e,this.data=new de(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,r)=>(e(t),!1))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;t(s.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Xe(this.data.getIterator())}getIteratorFrom(e){return new Xe(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(r=>{t=t.add(r)}),t}isEqual(e){if(!(e instanceof fe)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new fe(this.comparator);return t.data=e,t}}class Xe{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class ee{constructor(e){this.fields=e,e.sort(T.comparator)}static empty(){return new ee([])}unionWith(e){let t=new fe(T.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new ee(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return vt(this.fields,e.fields,(t,r)=>t.isEqual(r))}}/**
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
 */class D{constructor(e){this.binaryString=e}static fromBase64String(e){const t=atob(e);return new D(t)}static fromUint8Array(e){const t=function(r){let s="";for(let i=0;i<r.length;++i)s+=String.fromCharCode(r[i]);return s}(e);return new D(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const t=new Uint8Array(e.length);for(let r=0;r<e.length;r++)t[r]=e.charCodeAt(r);return t}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return v(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}D.EMPTY_BYTE_STRING=new D("");const zn=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function L(n){if(R(!!n),typeof n=="string"){let e=0;const t=zn.exec(n);if(R(!!t),t[1]){let s=t[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:g(n.seconds),nanos:g(n.nanos)}}function g(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function te(n){return typeof n=="string"?D.fromBase64String(n):D.fromUint8Array(n)}/**
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
 */function wt(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="server_timestamp"}function bt(n){const e=n.mapValue.fields.__previous_value__;return wt(e)?bt(e):e}function ne(n){const e=L(n.mapValue.fields.__local_write_time__.timestampValue);return new S(e.seconds,e.nanos)}/**
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
 */const oe={fields:{__type__:{stringValue:"__max__"}}};function q(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?wt(n)?4:function(e){return(((e.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}(n)?9007199254740991:10:m()}function pe(n,e){if(n===e)return!0;const t=q(n);if(t!==q(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return ne(n).isEqual(ne(e));case 3:return function(r,s){if(typeof r.timestampValue=="string"&&typeof s.timestampValue=="string"&&r.timestampValue.length===s.timestampValue.length)return r.timestampValue===s.timestampValue;const i=L(r.timestampValue),a=L(s.timestampValue);return i.seconds===a.seconds&&i.nanos===a.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(r,s){return te(r.bytesValue).isEqual(te(s.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(r,s){return g(r.geoPointValue.latitude)===g(s.geoPointValue.latitude)&&g(r.geoPointValue.longitude)===g(s.geoPointValue.longitude)}(n,e);case 2:return function(r,s){if("integerValue"in r&&"integerValue"in s)return g(r.integerValue)===g(s.integerValue);if("doubleValue"in r&&"doubleValue"in s){const i=g(r.doubleValue),a=g(s.doubleValue);return i===a?he(i)===he(a):isNaN(i)&&isNaN(a)}return!1}(n,e);case 9:return vt(n.arrayValue.values||[],e.arrayValue.values||[],pe);case 10:return function(r,s){const i=r.mapValue.fields||{},a=s.mapValue.fields||{};if(We(i)!==We(a))return!1;for(const o in i)if(i.hasOwnProperty(o)&&(a[o]===void 0||!pe(i[o],a[o])))return!1;return!0}(n,e);default:return m()}}function re(n,e){return(n.values||[]).find(t=>pe(t,e))!==void 0}function me(n,e){if(n===e)return 0;const t=q(n),r=q(e);if(t!==r)return v(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return v(n.booleanValue,e.booleanValue);case 2:return function(s,i){const a=g(s.integerValue||s.doubleValue),o=g(i.integerValue||i.doubleValue);return a<o?-1:a>o?1:a===o?0:isNaN(a)?isNaN(o)?0:-1:1}(n,e);case 3:return Ze(n.timestampValue,e.timestampValue);case 4:return Ze(ne(n),ne(e));case 5:return v(n.stringValue,e.stringValue);case 6:return function(s,i){const a=te(s),o=te(i);return a.compareTo(o)}(n.bytesValue,e.bytesValue);case 7:return function(s,i){const a=s.split("/"),o=i.split("/");for(let l=0;l<a.length&&l<o.length;l++){const c=v(a[l],o[l]);if(c!==0)return c}return v(a.length,o.length)}(n.referenceValue,e.referenceValue);case 8:return function(s,i){const a=v(g(s.latitude),g(i.latitude));return a!==0?a:v(g(s.longitude),g(i.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return function(s,i){const a=s.values||[],o=i.values||[];for(let l=0;l<a.length&&l<o.length;++l){const c=me(a[l],o[l]);if(c)return c}return v(a.length,o.length)}(n.arrayValue,e.arrayValue);case 10:return function(s,i){if(s===oe&&i===oe)return 0;if(s===oe)return 1;if(i===oe)return-1;const a=s.fields||{},o=Object.keys(a),l=i.fields||{},c=Object.keys(l);o.sort(),c.sort();for(let p=0;p<o.length&&p<c.length;++p){const f=v(o[p],c[p]);if(f!==0)return f;const I=me(a[o[p]],l[c[p]]);if(I!==0)return I}return v(o.length,c.length)}(n.mapValue,e.mapValue);default:throw m()}}function Ze(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return v(n,e);const t=L(n),r=L(e),s=v(t.seconds,r.seconds);return s!==0?s:v(t.nanos,r.nanos)}function Je(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function Tt(n){return!!n&&"arrayValue"in n}function et(n){return!!n&&"nullValue"in n}function tt(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function ke(n){return!!n&&"mapValue"in n}function W(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return we(n.mapValue.fields,(t,r)=>e.mapValue.fields[t]=W(r)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=W(n.arrayValue.values[t]);return e}return Object.assign({},n)}class x{constructor(e){this.value=e}static empty(){return new x({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!ke(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=W(t)}setAll(e){let t=T.emptyPath(),r={},s=[];e.forEach((a,o)=>{if(!t.isImmediateParentOf(o)){const l=this.getFieldsMap(t);this.applyChanges(l,r,s),r={},s=[],t=o.popLast()}a?r[o.lastSegment()]=W(a):s.push(o.lastSegment())});const i=this.getFieldsMap(t);this.applyChanges(i,r,s)}delete(e){const t=this.field(e.popLast());ke(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return pe(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=t.mapValue.fields[e.get(r)];ke(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=s),t=s}return t.mapValue.fields}applyChanges(e,t,r){we(t,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new x(W(this.value))}}/**
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
 */class F{constructor(e,t,r,s,i,a){this.key=e,this.documentType=t,this.version=r,this.readTime=s,this.data=i,this.documentState=a}static newInvalidDocument(e){return new F(e,0,k.min(),k.min(),x.empty(),0)}static newFoundDocument(e,t,r){return new F(e,1,t,k.min(),r,0)}static newNoDocument(e,t){return new F(e,2,t,k.min(),x.empty(),0)}static newUnknownDocument(e,t){return new F(e,3,t,k.min(),x.empty(),2)}convertToFoundDocument(e,t){return this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=x.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=x.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=k.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof F&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new F(this.key,this.documentType,this.version,this.readTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Gn{constructor(e,t=null,r=[],s=[],i=null,a=null,o=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=a,this.endAt=o,this.P=null}}function nt(n,e=null,t=[],r=[],s=null,i=null,a=null){return new Gn(n,e,t,r,s,i,a)}class A extends class{}{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.V(e,t,r):new Kn(e,t,r):t==="array-contains"?new Hn(e,r):t==="in"?new Wn(e,r):t==="not-in"?new Xn(e,r):t==="array-contains-any"?new Zn(e,r):new A(e,t,r)}static V(e,t,r){return t==="in"?new Qn(e,r):new Yn(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&this.N(me(t,this.value)):t!==null&&q(this.value)===q(t)&&this.N(me(t,this.value))}N(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return m()}}D(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}class Kn extends A{constructor(e,t,r){super(e,t,r),this.key=b.fromName(r.referenceValue)}matches(e){const t=b.comparator(e.key,this.key);return this.N(t)}}class Qn extends A{constructor(e,t){super(e,"in",t),this.keys=St("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class Yn extends A{constructor(e,t){super(e,"not-in",t),this.keys=St("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function St(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(r=>b.fromName(r.referenceValue))}class Hn extends A{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Tt(t)&&re(t.arrayValue,this.value)}}class Wn extends A{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&re(this.value.arrayValue,t)}}class Xn extends A{constructor(e,t){super(e,"not-in",t)}matches(e){if(re(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&!re(this.value.arrayValue,t)}}class Zn extends A{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Tt(t)||!t.arrayValue.values)&&t.arrayValue.values.some(r=>re(this.value.arrayValue,r))}}class rt{constructor(e,t){this.position=e,this.inclusive=t}}class le{constructor(e,t="asc"){this.field=e,this.dir=t}}/**
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
 */class Et{constructor(e,t=null,r=[],s=[],i=null,a="F",o=null,l=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=a,this.startAt=o,this.endAt=l,this.$=null,this.F=null,this.startAt,this.endAt}}function _t(n){return n.explicitOrderBy.length>0?n.explicitOrderBy[0].field:null}function kt(n){for(const e of n.filters)if(e.D())return e.field;return null}function Jn(n){return n.collectionGroup!==null}function st(n){const e=ye(n);if(e.$===null){e.$=[];const t=kt(e),r=_t(e);if(t!==null&&r===null)t.isKeyField()||e.$.push(new le(t)),e.$.push(new le(T.keyField(),"asc"));else{let s=!1;for(const i of e.explicitOrderBy)e.$.push(i),i.field.isKeyField()&&(s=!0);if(!s){const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.$.push(new le(T.keyField(),i))}}}return e.$}function er(n){const e=ye(n);if(!e.F)if(e.limitType==="F")e.F=nt(e.path,e.collectionGroup,st(e),e.filters,e.limit,e.startAt,e.endAt);else{const t=[];for(const i of st(e)){const a=i.dir==="desc"?"asc":"desc";t.push(new le(i.field,a))}const r=e.endAt?new rt(e.endAt.position,e.endAt.inclusive):null,s=e.startAt?new rt(e.startAt.position,e.startAt.inclusive):null;e.F=nt(e.path,e.collectionGroup,t,e.filters,e.limit,r,s)}return e.F}/**
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
 */function tr(n,e){return function(t){return typeof t=="number"&&Number.isInteger(t)&&!he(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}(e)?function(t){return{integerValue:""+t}}(e):function(t,r){if(t.S){if(isNaN(r))return{doubleValue:"NaN"};if(r===1/0)return{doubleValue:"Infinity"};if(r===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:he(r)?"-0":r}}(n,e)}/**
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
 */class be{constructor(){this._=void 0}}class nr extends be{}class rr extends be{constructor(e){super(),this.elements=e}}class sr extends be{constructor(e){super(),this.elements=e}}class ir extends be{constructor(e,t){super(),this.q=e,this.O=t}}class X{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new X}static exists(e){return new X(void 0,e)}static updateTime(e){return new X(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}class Te{}class It extends Te{constructor(e,t,r,s=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Vt extends Te{constructor(e,t,r,s,i=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}class ar extends Te{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class or extends Te{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */const lr=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),ur=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))();class cr{constructor(e,t){this.databaseId=e,this.S=t}}function Ve(n,e){return n.S?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function hr(n,e){return n.S?e.toBase64():e.toUint8Array()}function dr(n,e){return Ve(n,e.toTimestamp())}function fr(n){return R(!!n),k.fromTimestamp(function(e){const t=L(e);return new S(t.seconds,t.nanos)}(n))}function Re(n,e){return function(t){return new y(["projects",t.projectId,"databases",t.database])}(n).child("documents").child(e).canonicalString()}function xe(n,e){return Re(n.databaseId,e.path)}function pr(n,e){const t=function(s){const i=y.fromString(s);return R(xt(i)),i}(e);if(t.get(1)!==n.databaseId.projectId)throw new u(h,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new u(h,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new b((R((r=t).length>4&&r.get(4)==="documents"),r.popFirst(5)));var r}function it(n,e){return Re(n.databaseId,e)}function mr(n){return new y(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function at(n,e,t){return{name:xe(n,e),fields:t.value.mapValue.fields}}function gr(n,e){let t;if(e instanceof It)t={update:at(n,e.key,e.value)};else if(e instanceof ar)t={delete:xe(n,e.key)};else if(e instanceof Vt)t={update:at(n,e.key,e.data),updateMask:br(e.fieldMask)};else{if(!(e instanceof or))return m();t={verify:xe(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(r=>function(s,i){const a=i.transform;if(a instanceof nr)return{fieldPath:i.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof rr)return{fieldPath:i.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof sr)return{fieldPath:i.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof ir)return{fieldPath:i.field.canonicalString(),increment:a.O};throw m()}(0,r))),e.precondition.isNone||(t.currentDocument=function(r,s){return s.updateTime!==void 0?{updateTime:dr(r,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:m()}(n,e.precondition)),t}function yr(n,e){const t={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(t.parent=it(n,r),t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(t.parent=it(n,r.popLast()),t.structuredQuery.from=[{collectionId:r.lastSegment()}]);const s=function(l){if(l.length===0)return;const c=l.map(p=>function(f){if(f.op==="=="){if(tt(f.value))return{unaryFilter:{field:U(f.field),op:"IS_NAN"}};if(et(f.value))return{unaryFilter:{field:U(f.field),op:"IS_NULL"}}}else if(f.op==="!="){if(tt(f.value))return{unaryFilter:{field:U(f.field),op:"IS_NOT_NAN"}};if(et(f.value))return{unaryFilter:{field:U(f.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:U(f.field),op:wr(f.op),value:f.value}}}(p));return c.length===1?c[0]:{compositeFilter:{op:"AND",filters:c}}}(e.filters);s&&(t.structuredQuery.where=s);const i=function(l){if(l.length!==0)return l.map(c=>function(p){return{field:U(p.field),direction:vr(p.dir)}}(c))}(e.orderBy);i&&(t.structuredQuery.orderBy=i);const a=function(l,c){return l.S||qn(c)?c:{value:c}}(n,e.limit);var o;return a!==null&&(t.structuredQuery.limit=a),e.startAt&&(t.structuredQuery.startAt={before:(o=e.startAt).inclusive,values:o.position}),e.endAt&&(t.structuredQuery.endAt=function(l){return{before:!l.inclusive,values:l.position}}(e.endAt)),t}function vr(n){return lr[n]}function wr(n){return ur[n]}function U(n){return{fieldPath:n.canonicalString()}}function br(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function xt(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
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
 */function De(n){return new cr(n,!0)}/**
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
 */class Tr extends class{}{constructor(e,t,r,s){super(),this.authCredentials=e,this.appCheckCredentials=t,this.H=r,this.q=s,this.J=!1}X(){if(this.J)throw new u(z,"The client has already been terminated.")}m(e,t,r){return this.X(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,i])=>this.H.m(e,t,r,s,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===Ie&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new u(H,s.toString())})}T(e,t,r,s){return this.X(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,a])=>this.H.T(e,t,r,i,a,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===Ie&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new u(H,i.toString())})}terminate(){this.J=!0}}async function Sr(n,e){const t=ye(n),r=mr(t.q)+"/documents",s={writes:e.map(i=>gr(t.q,i))};await t.m("Commit",r,s)}async function Er(n,e){const t=ye(n),r=yr(t.q,er(e));return(await t.T("RunQuery",r.parent,{structuredQuery:r.structuredQuery})).filter(s=>!!s.document).map(s=>function(i,a,o){const l=pr(i,a.name),c=fr(a.updateTime),p=new x({mapValue:{fields:a.fields}}),f=F.newFoundDocument(l,c,p);return o&&f.setHasCommittedMutations(),o?f.setHasCommittedMutations():f}(t.q,s.document,void 0))}/**
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
 */const Z=new Map;function At(n){if(n._terminated)throw new u(z,"The client has already been terminated.");if(!Z.has(n)){ce("ComponentProvider","Initializing Datastore");const i=function(l){return new Un(l,fetch.bind(null))}((e=n._databaseId,t=n.app.options.appId||"",r=n._persistenceKey,s=n._freezeSettings(),new On(e,t,r,s.host,s.ssl,s.experimentalForceLongPolling,s.experimentalAutoDetectLongPolling,s.useFetchStreams))),a=De(n._databaseId),o=function(l,c,p,f){return new Tr(l,c,p,f)}(n._authCredentials,n._appCheckCredentials,i,a);Z.set(n,o)}var e,t,r,s;/**
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
*/return Z.get(n)}class ot{constructor(e){var t;if(e.host===void 0){if(e.ssl!==void 0)throw new u(h,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(t=e.ssl)===null||t===void 0||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new u(h,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,function(r,s,i,a){if(s===!0&&a===!0)throw new u(h,`${r} and ${i} cannot be used together.`)}("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
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
 */class Fe{constructor(e,t,r){this._authCredentials=t,this._appCheckCredentials=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new ot({}),this._settingsFrozen=!1,e instanceof G?this._databaseId=e:(this._app=e,this._databaseId=function(s){if(!Object.prototype.hasOwnProperty.apply(s.options,["projectId"]))throw new u(h,'"projectId" not provided in firebase.initializeApp.');return new G(s.options.projectId)}(e))}get app(){if(!this._app)throw new u(z,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new u(z,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new ot(e),e.credentials!==void 0&&(this._authCredentials=function(t){if(!t)return new Pn;switch(t.type){case"gapi":const r=t.client;return R(!(typeof r!="object"||r===null||!r.auth||!r.auth.getAuthHeaderValueForFirstParty)),new Fn(r,t.sessionIndex||"0",t.iamToken||null);case"provider":return t.client;default:throw new u(h,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const t=Z.get(e);t&&(ce("ComponentProvider","Removing Datastore"),Z.delete(e),t.terminate())}(this),Promise.resolve()}}function Br(n=Jt()){return Zt(n,"firestore/lite").getImmediate()}/**
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
 */class _{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new P(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new _(this.firestore,e,this._key)}}class se{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new se(this.firestore,e,this._query)}}class P extends se{constructor(e,t,r){super(e,t,new Et(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new _(this.firestore,null,new b(e))}withConverter(e){return new P(this.firestore,e,this._path)}}function jr(n,e,...t){if(n=B(n),gt("collection","path",e),n instanceof Fe){const r=y.fromString(e,...t);return Qe(r),new P(n,null,r)}{if(!(n instanceof _||n instanceof P))throw new u(h,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(y.fromString(e,...t));return Qe(r),new P(n.firestore,null,r)}}function _r(n,e,...t){if(n=B(n),arguments.length===1&&(e=jn.R()),gt("doc","path",e),n instanceof Fe){const r=y.fromString(e,...t);return Ke(r),new _(n,null,new b(r))}{if(!(n instanceof _||n instanceof P))throw new u(h,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(y.fromString(e,...t));return Ke(r),new _(n.firestore,n instanceof P?n.converter:null,new b(r))}}/**
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
 */class Ce{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new u(h,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new T(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class K{constructor(e){this._byteString=e}static fromBase64String(e){try{return new K(D.fromBase64String(e))}catch(t){throw new u(h,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new K(D.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class Nt{constructor(e){this._methodName=e}}/**
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
 */class $e{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new u(h,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new u(h,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return v(this._lat,e._lat)||v(this._long,e._long)}}/**
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
 */const kr=/^__.*__$/;class Ir{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new Vt(e,this.data,this.fieldMask,t,this.fieldTransforms):new It(e,this.data,t,this.fieldTransforms)}}function Pt(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw m()}}class Oe{constructor(e,t,r,s,i,a){this.settings=e,this.databaseId=t,this.q=r,this.ignoreUndefinedProperties=s,i===void 0&&this.Z(),this.fieldTransforms=i||[],this.fieldMask=a||[]}get path(){return this.settings.path}get tt(){return this.settings.tt}et(e){return new Oe(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.q,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}nt(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),s=this.et({path:r,rt:!1});return s.st(e),s}it(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),s=this.et({path:r,rt:!1});return s.Z(),s}ot(e){return this.et({path:void 0,rt:!0})}ut(e){return ge(e,this.settings.methodName,this.settings.ct||!1,this.path,this.settings.at)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}Z(){if(this.path)for(let e=0;e<this.path.length;e++)this.st(this.path.get(e))}st(e){if(e.length===0)throw this.ut("Document fields must not be empty");if(Pt(this.tt)&&kr.test(e))throw this.ut('Document fields cannot begin and end with "__"')}}class Vr{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.q=r||De(e)}ht(e,t,r,s=!1){return new Oe({tt:e,methodName:t,at:r,path:T.emptyPath(),rt:!1,ct:s},this.databaseId,this.q,this.ignoreUndefinedProperties)}}function Rt(n){const e=n._freezeSettings(),t=De(n._databaseId);return new Vr(n._databaseId,!!e.ignoreUndefinedProperties,t)}function xr(n,e,t,r,s,i={}){const a=n.ht(i.merge||i.mergeFields?2:0,e,t,s);Ct("Data must be an object, but it was:",a,r);const o=Dt(r,a);let l,c;if(i.merge)l=new ee(a.fieldMask),c=a.fieldTransforms;else if(i.mergeFields){const p=[];for(const f of i.mergeFields){const I=Nr(e,f,t);if(!a.contains(I))throw new u(h,`Field '${I}' is specified in your field mask but missing from your input data.`);Rr(p,I)||p.push(I)}l=new ee(p),c=a.fieldTransforms.filter(f=>l.covers(f.field))}else l=null,c=a.fieldTransforms;return new Ir(new x(o),l,c)}function Ar(n,e,t,r=!1){return Le(t,n.ht(r?4:3,e))}function Le(n,e){if(Ft(n=B(n)))return Ct("Unsupported field value:",e,n),Dt(n,e);if(n instanceof Nt)return function(t,r){if(!Pt(r.tt))throw r.ut(`${t._methodName}() can only be used with update() and set()`);if(!r.path)throw r.ut(`${t._methodName}() is not currently supported inside arrays`);const s=t._toFieldTransform(r);s&&r.fieldTransforms.push(s)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.rt&&e.tt!==4)throw e.ut("Nested arrays are not supported");return function(t,r){const s=[];let i=0;for(const a of t){let o=Le(a,r.ot(i));o==null&&(o={nullValue:"NULL_VALUE"}),s.push(o),i++}return{arrayValue:{values:s}}}(n,e)}return function(t,r){if((t=B(t))===null)return{nullValue:"NULL_VALUE"};if(typeof t=="number")return tr(r.q,t);if(typeof t=="boolean")return{booleanValue:t};if(typeof t=="string")return{stringValue:t};if(t instanceof Date){const s=S.fromDate(t);return{timestampValue:Ve(r.q,s)}}if(t instanceof S){const s=new S(t.seconds,1e3*Math.floor(t.nanoseconds/1e3));return{timestampValue:Ve(r.q,s)}}if(t instanceof $e)return{geoPointValue:{latitude:t.latitude,longitude:t.longitude}};if(t instanceof K)return{bytesValue:hr(r.q,t._byteString)};if(t instanceof _){const s=r.databaseId,i=t.firestore._databaseId;if(!i.isEqual(s))throw r.ut(`Document reference is for database ${i.projectId}/${i.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:Re(t.firestore._databaseId||r.databaseId,t._key.path)}}throw r.ut(`Unsupported field value: ${ve(t)}`)}(n,e)}function Dt(n,e){const t={};return function(r){for(const s in r)if(Object.prototype.hasOwnProperty.call(r,s))return!1;return!0}(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):we(n,(r,s)=>{const i=Le(s,e.nt(r));i!=null&&(t[r]=i)}),{mapValue:{fields:t}}}function Ft(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof S||n instanceof $e||n instanceof K||n instanceof _||n instanceof Nt)}function Ct(n,e,t){if(!Ft(t)||!function(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}(t)){const r=ve(t);throw r==="an object"?e.ut(n+" a custom object"):e.ut(n+" "+r)}}function Nr(n,e,t){if((e=B(e))instanceof Ce)return e._internalPath;if(typeof e=="string")return $t(n,e);throw ge("Field path arguments must be of type string or ",n,!1,void 0,t)}const Pr=new RegExp("[~\\*/\\[\\]]");function $t(n,e,t){if(e.search(Pr)>=0)throw ge(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new Ce(...e.split("."))._internalPath}catch{throw ge(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function ge(n,e,t,r,s){const i=r&&!r.isEmpty(),a=s!==void 0;let o=`Function ${e}() called with invalid data`;t&&(o+=" (via `toFirestore()`)"),o+=". ";let l="";return(i||a)&&(l+=" (found",i&&(l+=` in field ${r}`),a&&(l+=` in document ${s}`),l+=")"),new u(h,o+n+l)}function Rr(n,e){return n.some(t=>t.isEqual(e))}/**
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
 */class Dr{constructor(e,t,r,s,i){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new _(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new Ot(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Lt("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class Ot extends Dr{data(){return super.data()}}class Fr{constructor(e,t){this._docs=t,this.query=e}get docs(){return[...this._docs]}get size(){return this.docs.length}get empty(){return this.docs.length===0}forEach(e,t){this._docs.forEach(e,t)}}function Lt(n,e){return typeof e=="string"?$t(n,e):e instanceof Ce?e._internalPath:e._delegate._internalPath}/**
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
 */class Cr{}function zr(n,...e){for(const t of e)n=t._apply(n);return n}class $r extends Cr{constructor(e,t,r){super(),this.dt=e,this.wt=t,this.yt=r,this.type="where"}_apply(e){const t=Rt(e.firestore),r=function(s,i,a,o,l,c,p){let f;if(l.isKeyField()){if(c==="array-contains"||c==="array-contains-any")throw new u(h,`Invalid Query. You can't perform '${c}' queries on documentId().`);if(c==="in"||c==="not-in"){ut(p,c);const C=[];for(const V of p)C.push(lt(o,s,V));f={arrayValue:{values:C}}}else f=lt(o,s,p)}else c!=="in"&&c!=="not-in"&&c!=="array-contains-any"||ut(p,c),f=Ar(a,i,p,c==="in"||c==="not-in");const I=A.create(l,c,f);return function(C,V){if(V.D()){const $=kt(C);if($!==null&&!$.isEqual(V.field))throw new u(h,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${$.toString()}' and '${V.field.toString()}'`);const ie=_t(C);ie!==null&&Or(C,V.field,ie)}const Se=function($,ie){for(const qe of $.filters)if(ie.indexOf(qe.op)>=0)return qe.op;return null}(C,function($){switch($){case"!=":return["!=","not-in"];case"array-contains":return["array-contains","array-contains-any","not-in"];case"in":return["array-contains-any","in","not-in"];case"array-contains-any":return["array-contains","array-contains-any","in","not-in"];case"not-in":return["array-contains","array-contains-any","in","not-in","!="];default:return[]}}(V.op));if(Se!==null)throw Se===V.op?new u(h,`Invalid query. You cannot use more than one '${V.op.toString()}' filter.`):new u(h,`Invalid query. You cannot use '${V.op.toString()}' filters with '${Se.toString()}' filters.`)}(s,I),I}(e._query,"where",t,e.firestore._databaseId,this.dt,this.wt,this.yt);return new se(e.firestore,e.converter,function(s,i){const a=s.filters.concat([i]);return new Et(s.path,s.collectionGroup,s.explicitOrderBy.slice(),a,s.limit,s.limitType,s.startAt,s.endAt)}(e._query,r))}}function Gr(n,e,t){const r=e,s=Lt("where",n);return new $r(s,r,t)}function lt(n,e,t){if(typeof(t=B(t))=="string"){if(t==="")throw new u(h,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Jn(e)&&t.indexOf("/")!==-1)throw new u(h,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const r=e.path.child(y.fromString(t));if(!b.isDocumentKey(r))throw new u(h,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Je(n,new b(r))}if(t instanceof _)return Je(n,t._key);throw new u(h,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${ve(t)}.`)}function ut(n,e){if(!Array.isArray(n)||n.length===0)throw new u(h,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`);if(n.length>10)throw new u(h,`Invalid Query. '${e.toString()}' filters support a maximum of 10 elements in the value array.`)}function Or(n,e,t){if(!t.isEqual(e))throw new u(h,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${t.toString()}' instead.`)}/**
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
 */function Lr(n,e,t){let r;return r=n?t&&(t.merge||t.mergeFields)?n.toFirestore(e,t):n.toFirestore(e):e,r}class qr extends class{convertValue(e,t="none"){switch(q(e)){case 0:return null;case 1:return e.booleanValue;case 2:return g(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(te(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 10:return this.convertObject(e.mapValue,t);default:throw m()}}convertObject(e,t){const r={};return we(e.fields,(s,i)=>{r[s]=this.convertValue(i,t)}),r}convertGeoPoint(e){return new $e(g(e.latitude),g(e.longitude))}convertArray(e,t){return(e.values||[]).map(r=>this.convertValue(r,t))}convertServerTimestamp(e,t){switch(t){case"previous":const r=bt(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(ne(e));default:return null}}convertTimestamp(e){const t=L(e);return new S(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=y.fromString(e);R(xt(r));const s=new G(r.get(1),r.get(3)),i=new b(r.popFirst(5));return s.isEqual(t)||Ne(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}{constructor(e){super(),this.firestore=e}convertBytes(e){return new K(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new _(this.firestore,null,t)}}function Kr(n){(function(r){if(r.limitType==="L"&&r.explicitOrderBy.length===0)throw new u(mt,"limitToLast() queries require specifying at least one orderBy() clause")})((n=yt(n,se))._query);const e=At(n.firestore),t=new qr(n.firestore);return Er(e,n._query).then(r=>{const s=r.map(i=>new Ot(n.firestore,t,i.key,i,n.converter));return n._query.limitType==="L"&&s.reverse(),new Fr(n,s)})}function Qr(n,e){const t=_r(n=yt(n,P)),r=Lr(n.converter,e),s=xr(Rt(n.firestore),"addDoc",t._key,r,t.converter!==null,{});return Sr(At(n.firestore),[s.toMutation(t._key,X.exists(!1))]).then(()=>t)}(function(n){Q=n})(`${rn}_lite`),Xt(new en("firestore/lite",(n,{options:e})=>{const t=n.getProvider("app").getImmediate(),r=new Fe(t,new Rn(n.getProvider("auth-internal")),new $n(n.getProvider("app-check-internal")));return e&&r._setSettings(e),r},"PUBLIC")),ze("firestore-lite","3.4.14",""),ze("firestore-lite","3.4.14","esm2017");var Yr=(n,e)=>{const t=n.__vccOpts||n;for(const[r,s]of e)t[r]=s;return t};export{Qr as D,Ur as O,Kr as R,Yr as _,sn as a,ft as b,zr as i,Br as l,gn as s,Gr as u,jr as y};
