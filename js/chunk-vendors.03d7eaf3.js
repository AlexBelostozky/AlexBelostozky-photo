"use strict";(self["webpackChunkalexbelostozky_photo"]=self["webpackChunkalexbelostozky_photo"]||[]).push([[504],{4046:function(t,e,n){n.d(e,{FA:function(){return O},Fy:function(){return w},Ku:function(){return V},T9:function(){return y},Uj:function(){return c},ZQ:function(){return b},bD:function(){return k},cY:function(){return v},dM:function(){return I},eX:function(){return A},g:function(){return C},nr:function(){return _},p9:function(){return j},sr:function(){return T},yU:function(){return m},zW:function(){return S}});n(4114),n(8992),n(3949),n(4979);
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
 */
const r=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=63&i|128):55296===(64512&i)&&r+1<t.length&&56320===(64512&t.charCodeAt(r+1))?(i=65536+((1023&i)<<10)+(1023&t.charCodeAt(++r)),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=63&i|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=63&i|128)}return e},i=function(t){const e=[];let n=0,r=0;while(n<t.length){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const o=t[n++];e[r++]=String.fromCharCode((31&i)<<6|63&o)}else if(i>239&&i<365){const o=t[n++],s=t[n++],a=t[n++],c=((7&i)<<18|(63&o)<<12|(63&s)<<6|63&a)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(1023&c))}else{const o=t[n++],s=t[n++];e[r++]=String.fromCharCode((15&i)<<12|(63&o)<<6|63&s)}}return e.join("")},o={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"===typeof atob,encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const e=t[i],o=i+1<t.length,s=o?t[i+1]:0,a=i+2<t.length,c=a?t[i+2]:0,u=e>>2,l=(3&e)<<4|s>>4;let h=(15&s)<<2|c>>6,f=63&c;a||(f=64,o||(h=64)),r.push(n[u],n[l],n[h],n[f])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(r(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):i(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const e=n[t.charAt(i++)],o=i<t.length,a=o?n[t.charAt(i)]:0;++i;const c=i<t.length,u=c?n[t.charAt(i)]:64;++i;const l=i<t.length,h=l?n[t.charAt(i)]:64;if(++i,null==e||null==a||null==u||null==h)throw new s;const f=e<<2|a>>4;if(r.push(f),64!==u){const t=a<<4&240|u>>2;if(r.push(t),64!==h){const t=u<<6&192|h;r.push(t)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};
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
 */class s extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const a=function(t){const e=r(t);return o.encodeByteArray(e,!0)},c=function(t){return a(t).replace(/\./g,"")},u=function(t){try{return o.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};
/**
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
 */
function l(){if("undefined"!==typeof self)return self;if("undefined"!==typeof window)return window;if("undefined"!==typeof n.g)return n.g;throw new Error("Unable to locate global object.")}
/**
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
 */const h=()=>l().__FIREBASE_DEFAULTS__,f=()=>{if("undefined"===typeof process)return;const t={NODE_ENV:"production",BASE_URL:"/AlexBelostozky-photo/"}.__FIREBASE_DEFAULTS__;return t?JSON.parse(t):void 0},d=()=>{if("undefined"===typeof document)return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(n){return}const e=t&&u(t[1]);return e&&JSON.parse(e)},p=()=>{try{return h()||f()||d()}catch(t){return void console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`)}},g=t=>{var e,n;return null===(n=null===(e=p())||void 0===e?void 0:e.emulatorHosts)||void 0===n?void 0:n[t]},m=t=>{const e=g(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return"["===e[0]?[e.substring(1,n-1),r]:[e.substring(0,n),r]},y=()=>{var t;return null===(t=p())||void 0===t?void 0:t.config};
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
 */
class v{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}wrapCallback(t){return(e,n)=>{e?this.reject(e):this.resolve(n),"function"===typeof t&&(this.promise.catch((()=>{})),1===t.length?t(e):t(e,n))}}}
/**
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
 */function w(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,o=t.sub||t.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const s=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[c(JSON.stringify(n)),c(JSON.stringify(s)),a].join(".")}
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
 */function b(){return"undefined"!==typeof navigator&&"string"===typeof navigator["userAgent"]?navigator["userAgent"]:""}function E(){var t;const e=null===(t=p())||void 0===t?void 0:t.forceEnvironment;if("node"===e)return!0;if("browser"===e)return!1;try{return"[object process]"===Object.prototype.toString.call(n.g.process)}catch(r){return!1}}function T(){const t="object"===typeof chrome?chrome.runtime:"object"===typeof browser?browser.runtime:void 0;return"object"===typeof t&&void 0!==t.id}function _(){return!E()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function S(){try{return"object"===typeof indexedDB}catch(t){return!1}}function A(){return new Promise(((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var t;e((null===(t=i.error)||void 0===t?void 0:t.message)||"")}}catch(n){e(n)}}))}function I(){return!("undefined"===typeof navigator||!navigator.cookieEnabled)}
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
 */const x="FirebaseError";class C extends Error{constructor(t,e,n){super(e),this.code=t,this.customData=n,this.name=x,Object.setPrototypeOf(this,C.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,O.prototype.create)}}class O{constructor(t,e,n){this.service=t,this.serviceName=e,this.errors=n}create(t,...e){const n=e[0]||{},r=`${this.service}/${t}`,i=this.errors[t],o=i?D(i,n):"Error",s=`${this.serviceName}: ${o} (${r}).`,a=new C(r,s,n);return a}}function D(t,e){return t.replace(R,((t,n)=>{const r=e[n];return null!=r?String(r):`<${n}?>`}))}const R=/\{\$([^}]+)}/g;
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
 */function k(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const n=t[i],o=e[i];if(N(n)&&N(o)){if(!k(n,o))return!1}else if(n!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function N(t){return null!==t&&"object"===typeof t}
/**
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
 */
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
 */
const M=1e3,P=2,L=144e5,F=.5;function j(t,e=M,n=P){const r=e*Math.pow(n,t),i=Math.round(F*r*(Math.random()-.5)*2);return Math.min(L,r+i)}
/**
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
 */
/**
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
 */
function V(t){return t&&t._delegate?t._delegate:t}},144:function(t,e,n){n.d(e,{C4:function(){return S},EW:function(){return Ft},Gc:function(){return yt},IG:function(){return At},IJ:function(){return Dt},KR:function(){return Ot},Kh:function(){return mt},Pr:function(){return Pt},R1:function(){return Nt},X2:function(){return u},bl:function(){return A},hZ:function(){return L},i9:function(){return Ct},ju:function(){return _t},u4:function(){return P},ux:function(){return St},wB:function(){return Bt},yC:function(){return s}});n(4114),n(9678),n(7145),n(1658),n(9479),n(7642),n(8004),n(3853),n(5876),n(2475),n(5024),n(1698),n(8992),n(4520),n(3949),n(1454),n(7550);var r=n(4232);let i,o;class s{constructor(t=!1){this.detached=t,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=i,!t&&i&&(this.index=(i.scopes||(i.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){let t,e;if(this._isPaused=!0,this.scopes)for(t=0,e=this.scopes.length;t<e;t++)this.scopes[t].pause();for(t=0,e=this.effects.length;t<e;t++)this.effects[t].pause()}}resume(){if(this._active&&this._isPaused){let t,e;if(this._isPaused=!1,this.scopes)for(t=0,e=this.scopes.length;t<e;t++)this.scopes[t].resume();for(t=0,e=this.effects.length;t<e;t++)this.effects[t].resume()}}run(t){if(this._active){const e=i;try{return i=this,t()}finally{i=e}}else 0}on(){i=this}off(){i=this.parent}stop(t){if(this._active){let e,n;for(this._active=!1,e=0,n=this.effects.length;e<n;e++)this.effects[e].stop();for(this.effects.length=0,e=0,n=this.cleanups.length;e<n;e++)this.cleanups[e]();if(this.cleanups.length=0,this.scopes){for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!t){const t=this.parent.scopes.pop();t&&t!==this&&(this.parent.scopes[this.index]=t,t.index=this.index)}this.parent=void 0}}}function a(){return i}const c=new WeakSet;class u{constructor(t){this.fn=t,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,i&&i.active&&i.effects.push(this)}pause(){this.flags|=64}resume(){64&this.flags&&(this.flags&=-65,c.has(this)&&(c.delete(this),this.trigger()))}notify(){2&this.flags&&!(32&this.flags)||8&this.flags||d(this)}run(){if(!(1&this.flags))return this.fn();this.flags|=2,I(this),m(this);const t=o,e=T;o=this,T=!0;try{return this.fn()}finally{0,y(this),o=t,T=e,this.flags&=-3}}stop(){if(1&this.flags){for(let t=this.deps;t;t=t.nextDep)b(t);this.deps=this.depsTail=void 0,I(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){64&this.flags?c.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){v(this)&&this.run()}get dirty(){return v(this)}}let l,h,f=0;function d(t,e=!1){if(t.flags|=8,e)return t.next=h,void(h=t);t.next=l,l=t}function p(){f++}function g(){if(--f>0)return;if(h){let t=h;h=void 0;while(t){const e=t.next;t.next=void 0,t.flags&=-9,t=e}}let t;while(l){let n=l;l=void 0;while(n){const r=n.next;if(n.next=void 0,n.flags&=-9,1&n.flags)try{n.trigger()}catch(e){t||(t=e)}n=r}}if(t)throw t}function m(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function y(t){let e,n=t.depsTail,r=n;while(r){const t=r.prevDep;-1===r.version?(r===n&&(n=t),b(r),E(r)):e=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=t}t.deps=e,t.depsTail=n}function v(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(w(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function w(t){if(4&t.flags&&!(16&t.flags))return;if(t.flags&=-17,t.globalVersion===x)return;t.globalVersion=x;const e=t.dep;if(t.flags|=2,e.version>0&&!t.isSSR&&t.deps&&!v(t))return void(t.flags&=-3);const n=o,i=T;o=t,T=!0;try{m(t);const n=t.fn(t._value);(0===e.version||(0,r.$H)(n,t._value))&&(t._value=n,e.version++)}catch(s){throw e.version++,s}finally{o=n,T=i,y(t),t.flags&=-3}}function b(t,e=!1){const{dep:n,prevSub:r,nextSub:i}=t;if(r&&(r.nextSub=i,t.prevSub=void 0),i&&(i.prevSub=r,t.nextSub=void 0),n.subs===t&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let t=n.computed.deps;t;t=t.nextDep)b(t,!0)}e||--n.sc||!n.map||n.map.delete(n.key)}function E(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let T=!0;const _=[];function S(){_.push(T),T=!1}function A(){const t=_.pop();T=void 0===t||t}function I(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const t=o;o=void 0;try{e()}finally{o=t}}}let x=0;class C{constructor(t,e){this.sub=t,this.dep=e,this.version=e.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class O{constructor(t){this.computed=t,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(t){if(!o||!T||o===this.computed)return;let e=this.activeLink;if(void 0===e||e.sub!==o)e=this.activeLink=new C(o,this),o.deps?(e.prevDep=o.depsTail,o.depsTail.nextDep=e,o.depsTail=e):o.deps=o.depsTail=e,D(e);else if(-1===e.version&&(e.version=this.version,e.nextDep)){const t=e.nextDep;t.prevDep=e.prevDep,e.prevDep&&(e.prevDep.nextDep=t),e.prevDep=o.depsTail,e.nextDep=void 0,o.depsTail.nextDep=e,o.depsTail=e,o.deps===e&&(o.deps=t)}return e}trigger(t){this.version++,x++,this.notify(t)}notify(t){p();try{0;for(let t=this.subs;t;t=t.prevSub)t.sub.notify()&&t.sub.dep.notify()}finally{g()}}}function D(t){if(t.dep.sc++,4&t.sub.flags){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let t=e.deps;t;t=t.nextDep)D(t)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const R=new WeakMap,k=Symbol(""),N=Symbol(""),M=Symbol("");function P(t,e,n){if(T&&o){let e=R.get(t);e||R.set(t,e=new Map);let r=e.get(n);r||(e.set(n,r=new O),r.map=e,r.key=n),r.track()}}function L(t,e,n,i,o,s){const a=R.get(t);if(!a)return void x++;const c=t=>{t&&t.trigger()};if(p(),"clear"===e)a.forEach(c);else{const o=(0,r.cy)(t),s=o&&(0,r.yI)(n);if(o&&"length"===n){const t=Number(i);a.forEach(((e,n)=>{("length"===n||n===M||!(0,r.Bm)(n)&&n>=t)&&c(e)}))}else switch((void 0!==n||a.has(void 0))&&c(a.get(n)),s&&c(a.get(M)),e){case"add":o?s&&c(a.get("length")):(c(a.get(k)),(0,r.CE)(t)&&c(a.get(N)));break;case"delete":o||(c(a.get(k)),(0,r.CE)(t)&&c(a.get(N)));break;case"set":(0,r.CE)(t)&&c(a.get(k));break}}g()}function F(t){const e=St(t);return e===t?e:(P(e,"iterate",M),Tt(t)?e:e.map(It))}function j(t){return P(t=St(t),"iterate",M),t}const V={__proto__:null,[Symbol.iterator](){return U(this,Symbol.iterator,It)},concat(...t){return F(this).concat(...t.map((t=>(0,r.cy)(t)?F(t):t)))},entries(){return U(this,"entries",(t=>(t[1]=It(t[1]),t)))},every(t,e){return B(this,"every",t,e,void 0,arguments)},filter(t,e){return B(this,"filter",t,e,(t=>t.map(It)),arguments)},find(t,e){return B(this,"find",t,e,It,arguments)},findIndex(t,e){return B(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return B(this,"findLast",t,e,It,arguments)},findLastIndex(t,e){return B(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return B(this,"forEach",t,e,void 0,arguments)},includes(...t){return G(this,"includes",t)},indexOf(...t){return G(this,"indexOf",t)},join(t){return F(this).join(t)},lastIndexOf(...t){return G(this,"lastIndexOf",t)},map(t,e){return B(this,"map",t,e,void 0,arguments)},pop(){return z(this,"pop")},push(...t){return z(this,"push",t)},reduce(t,...e){return H(this,"reduce",t,e)},reduceRight(t,...e){return H(this,"reduceRight",t,e)},shift(){return z(this,"shift")},some(t,e){return B(this,"some",t,e,void 0,arguments)},splice(...t){return z(this,"splice",t)},toReversed(){return F(this).toReversed()},toSorted(t){return F(this).toSorted(t)},toSpliced(...t){return F(this).toSpliced(...t)},unshift(...t){return z(this,"unshift",t)},values(){return U(this,"values",It)}};function U(t,e,n){const r=j(t),i=r[e]();return r===t||Tt(t)||(i._next=i.next,i.next=()=>{const t=i._next();return t.value&&(t.value=n(t.value)),t}),i}const $=Array.prototype;function B(t,e,n,r,i,o){const s=j(t),a=s!==t&&!Tt(t),c=s[e];if(c!==$[e]){const e=c.apply(t,o);return a?It(e):e}let u=n;s!==t&&(a?u=function(e,r){return n.call(this,It(e),r,t)}:n.length>2&&(u=function(e,r){return n.call(this,e,r,t)}));const l=c.call(s,u,r);return a&&i?i(l):l}function H(t,e,n,r){const i=j(t);let o=n;return i!==t&&(Tt(t)?n.length>3&&(o=function(e,r,i){return n.call(this,e,r,i,t)}):o=function(e,r,i){return n.call(this,e,It(r),i,t)}),i[e](o,...r)}function G(t,e,n){const r=St(t);P(r,"iterate",M);const i=r[e](...n);return-1!==i&&!1!==i||!_t(n[0])?i:(n[0]=St(n[0]),r[e](...n))}function z(t,e,n=[]){S(),p();const r=St(t)[e].apply(t,n);return g(),A(),r}const K=(0,r.pD)("__proto__,__v_isRef,__isVue"),q=new Set(Object.getOwnPropertyNames(Symbol).filter((t=>"arguments"!==t&&"caller"!==t)).map((t=>Symbol[t])).filter(r.Bm));function W(t){(0,r.Bm)(t)||(t=String(t));const e=St(this);return P(e,"has",t),e.hasOwnProperty(t)}class Q{constructor(t=!1,e=!1){this._isReadonly=t,this._isShallow=e}get(t,e,n){if("__v_skip"===e)return t["__v_skip"];const i=this._isReadonly,o=this._isShallow;if("__v_isReactive"===e)return!i;if("__v_isReadonly"===e)return i;if("__v_isShallow"===e)return o;if("__v_raw"===e)return n===(i?o?dt:ft:o?ht:lt).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(n)?t:void 0;const s=(0,r.cy)(t);if(!i){let t;if(s&&(t=V[e]))return t;if("hasOwnProperty"===e)return W}const a=Reflect.get(t,e,Ct(t)?t:n);return((0,r.Bm)(e)?q.has(e):K(e))?a:(i||P(t,"get",e),o?a:Ct(a)?s&&(0,r.yI)(e)?a:a.value:(0,r.Gv)(a)?i?vt(a):mt(a):a)}}class X extends Q{constructor(t=!1){super(!1,t)}set(t,e,n,i){let o=t[e];if(!this._isShallow){const e=Et(o);if(Tt(n)||Et(n)||(o=St(o),n=St(n)),!(0,r.cy)(t)&&Ct(o)&&!Ct(n))return!e&&(o.value=n,!0)}const s=(0,r.cy)(t)&&(0,r.yI)(e)?Number(e)<t.length:(0,r.$3)(t,e),a=Reflect.set(t,e,n,Ct(t)?t:i);return t===St(i)&&(s?(0,r.$H)(n,o)&&L(t,"set",e,n,o):L(t,"add",e,n)),a}deleteProperty(t,e){const n=(0,r.$3)(t,e),i=t[e],o=Reflect.deleteProperty(t,e);return o&&n&&L(t,"delete",e,void 0,i),o}has(t,e){const n=Reflect.has(t,e);return(0,r.Bm)(e)&&q.has(e)||P(t,"has",e),n}ownKeys(t){return P(t,"iterate",(0,r.cy)(t)?"length":k),Reflect.ownKeys(t)}}class Y extends Q{constructor(t=!1){super(!0,t)}set(t,e){return!0}deleteProperty(t,e){return!0}}const J=new X,Z=new Y,tt=new X(!0),et=t=>t,nt=t=>Reflect.getPrototypeOf(t);function rt(t,e,n){return function(...i){const o=this["__v_raw"],s=St(o),a=(0,r.CE)(s),c="entries"===t||t===Symbol.iterator&&a,u="keys"===t&&a,l=o[t](...i),h=n?et:e?xt:It;return!e&&P(s,"iterate",u?N:k),{next(){const{value:t,done:e}=l.next();return e?{value:t,done:e}:{value:c?[h(t[0]),h(t[1])]:h(t),done:e}},[Symbol.iterator](){return this}}}}function it(t){return function(...e){return"delete"!==t&&("clear"===t?void 0:this)}}function ot(t,e){const n={get(n){const i=this["__v_raw"],o=St(i),s=St(n);t||((0,r.$H)(n,s)&&P(o,"get",n),P(o,"get",s));const{has:a}=nt(o),c=e?et:t?xt:It;return a.call(o,n)?c(i.get(n)):a.call(o,s)?c(i.get(s)):void(i!==o&&i.get(n))},get size(){const e=this["__v_raw"];return!t&&P(St(e),"iterate",k),Reflect.get(e,"size",e)},has(e){const n=this["__v_raw"],i=St(n),o=St(e);return t||((0,r.$H)(e,o)&&P(i,"has",e),P(i,"has",o)),e===o?n.has(e):n.has(e)||n.has(o)},forEach(n,r){const i=this,o=i["__v_raw"],s=St(o),a=e?et:t?xt:It;return!t&&P(s,"iterate",k),o.forEach(((t,e)=>n.call(r,a(t),a(e),i)))}};(0,r.X$)(n,t?{add:it("add"),set:it("set"),delete:it("delete"),clear:it("clear")}:{add(t){e||Tt(t)||Et(t)||(t=St(t));const n=St(this),r=nt(n),i=r.has.call(n,t);return i||(n.add(t),L(n,"add",t,t)),this},set(t,n){e||Tt(n)||Et(n)||(n=St(n));const i=St(this),{has:o,get:s}=nt(i);let a=o.call(i,t);a||(t=St(t),a=o.call(i,t));const c=s.call(i,t);return i.set(t,n),a?(0,r.$H)(n,c)&&L(i,"set",t,n,c):L(i,"add",t,n),this},delete(t){const e=St(this),{has:n,get:r}=nt(e);let i=n.call(e,t);i||(t=St(t),i=n.call(e,t));const o=r?r.call(e,t):void 0,s=e.delete(t);return i&&L(e,"delete",t,void 0,o),s},clear(){const t=St(this),e=0!==t.size,n=void 0,r=t.clear();return e&&L(t,"clear",void 0,void 0,n),r}});const i=["keys","values","entries",Symbol.iterator];return i.forEach((r=>{n[r]=rt(r,t,e)})),n}function st(t,e){const n=ot(t,e);return(e,i,o)=>"__v_isReactive"===i?!t:"__v_isReadonly"===i?t:"__v_raw"===i?e:Reflect.get((0,r.$3)(n,i)&&i in e?n:e,i,o)}const at={get:st(!1,!1)},ct={get:st(!1,!0)},ut={get:st(!0,!1)};const lt=new WeakMap,ht=new WeakMap,ft=new WeakMap,dt=new WeakMap;function pt(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function gt(t){return t["__v_skip"]||!Object.isExtensible(t)?0:pt((0,r.Zf)(t))}function mt(t){return Et(t)?t:wt(t,!1,J,at,lt)}function yt(t){return wt(t,!1,tt,ct,ht)}function vt(t){return wt(t,!0,Z,ut,ft)}function wt(t,e,n,i,o){if(!(0,r.Gv)(t))return t;if(t["__v_raw"]&&(!e||!t["__v_isReactive"]))return t;const s=o.get(t);if(s)return s;const a=gt(t);if(0===a)return t;const c=new Proxy(t,2===a?i:n);return o.set(t,c),c}function bt(t){return Et(t)?bt(t["__v_raw"]):!(!t||!t["__v_isReactive"])}function Et(t){return!(!t||!t["__v_isReadonly"])}function Tt(t){return!(!t||!t["__v_isShallow"])}function _t(t){return!!t&&!!t["__v_raw"]}function St(t){const e=t&&t["__v_raw"];return e?St(e):t}function At(t){return!(0,r.$3)(t,"__v_skip")&&Object.isExtensible(t)&&(0,r.yQ)(t,"__v_skip",!0),t}const It=t=>(0,r.Gv)(t)?mt(t):t,xt=t=>(0,r.Gv)(t)?vt(t):t;function Ct(t){return!!t&&!0===t["__v_isRef"]}function Ot(t){return Rt(t,!1)}function Dt(t){return Rt(t,!0)}function Rt(t,e){return Ct(t)?t:new kt(t,e)}class kt{constructor(t,e){this.dep=new O,this["__v_isRef"]=!0,this["__v_isShallow"]=!1,this._rawValue=e?t:St(t),this._value=e?t:It(t),this["__v_isShallow"]=e}get value(){return this.dep.track(),this._value}set value(t){const e=this._rawValue,n=this["__v_isShallow"]||Tt(t)||Et(t);t=n?t:St(t),(0,r.$H)(t,e)&&(this._rawValue=t,this._value=n?t:It(t),this.dep.trigger())}}function Nt(t){return Ct(t)?t.value:t}const Mt={get:(t,e,n)=>"__v_raw"===e?t:Nt(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const i=t[e];return Ct(i)&&!Ct(n)?(i.value=n,!0):Reflect.set(t,e,n,r)}};function Pt(t){return bt(t)?t:new Proxy(t,Mt)}class Lt{constructor(t,e,n){this.fn=t,this.setter=e,this._value=void 0,this.dep=new O(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=x-1,this.next=void 0,this.effect=this,this["__v_isReadonly"]=!e,this.isSSR=n}notify(){if(this.flags|=16,!(8&this.flags||o===this))return d(this,!0),!0}get value(){const t=this.dep.track();return w(this),t&&(t.version=this.dep.version),this._value}set value(t){this.setter&&this.setter(t)}}function Ft(t,e,n=!1){let i,o;(0,r.Tn)(t)?i=t:(i=t.get,o=t.set);const s=new Lt(i,o,n);return s}const jt={},Vt=new WeakMap;let Ut;function $t(t,e=!1,n=Ut){if(n){let e=Vt.get(n);e||Vt.set(n,e=[]),e.push(t)}else 0}function Bt(t,e,n=r.MZ){const{immediate:i,deep:o,once:s,scheduler:c,augmentJob:l,call:h}=n,f=t=>o?t:Tt(t)||!1===o||0===o?Ht(t,1):Ht(t);let d,p,g,m,y=!1,v=!1;if(Ct(t)?(p=()=>t.value,y=Tt(t)):bt(t)?(p=()=>f(t),y=!0):(0,r.cy)(t)?(v=!0,y=t.some((t=>bt(t)||Tt(t))),p=()=>t.map((t=>Ct(t)?t.value:bt(t)?f(t):(0,r.Tn)(t)?h?h(t,2):t():void 0))):p=(0,r.Tn)(t)?e?h?()=>h(t,2):t:()=>{if(g){S();try{g()}finally{A()}}const e=Ut;Ut=d;try{return h?h(t,3,[m]):t(m)}finally{Ut=e}}:r.tE,e&&o){const t=p,e=!0===o?1/0:o;p=()=>Ht(t(),e)}const w=a(),b=()=>{d.stop(),w&&w.active&&(0,r.TF)(w.effects,d)};if(s&&e){const t=e;e=(...e)=>{t(...e),b()}}let E=v?new Array(t.length).fill(jt):jt;const T=t=>{if(1&d.flags&&(d.dirty||t))if(e){const t=d.run();if(o||y||(v?t.some(((t,e)=>(0,r.$H)(t,E[e]))):(0,r.$H)(t,E))){g&&g();const n=Ut;Ut=d;try{const n=[t,E===jt?void 0:v&&E[0]===jt?[]:E,m];h?h(e,3,n):e(...n),E=t}finally{Ut=n}}}else d.run()};return l&&l(T),d=new u(p),d.scheduler=c?()=>c(T,!1):T,m=t=>$t(t,!1,d),g=d.onStop=()=>{const t=Vt.get(d);if(t){if(h)h(t,4);else for(const e of t)e();Vt.delete(d)}},e?i?T(!0):E=d.run():c?c(T.bind(null,!0),!0):d.run(),b.pause=d.pause.bind(d),b.resume=d.resume.bind(d),b.stop=b,b}function Ht(t,e=1/0,n){if(e<=0||!(0,r.Gv)(t)||t["__v_skip"])return t;if(n=n||new Set,n.has(t))return t;if(n.add(t),e--,Ct(t))Ht(t.value,e,n);else if((0,r.cy)(t))for(let r=0;r<t.length;r++)Ht(t[r],e,n);else if((0,r.vM)(t)||(0,r.CE)(t))t.forEach((t=>{Ht(t,e,n)}));else if((0,r.Qd)(t)){for(const r in t)Ht(t[r],e,n);for(const r of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,r)&&Ht(t[r],e,n)}return t}},6768:function(t,e,n){n.d(e,{$u:function(){return it},CE:function(){return Ke},Df:function(){return U},EW:function(){return kn},FK:function(){return Pe},Fv:function(){return rn},Gt:function(){return Ut},Gy:function(){return M},K9:function(){return ce},Lk:function(){return Ye},MZ:function(){return V},OW:function(){return j},QP:function(){return L},WQ:function(){return $t},bF:function(){return Je},dY:function(){return m},g2:function(){return ft},h:function(){return Nn},nI:function(){return pn},pM:function(){return $},qL:function(){return s},uX:function(){return $e},wB:function(){return we}});n(4114),n(9479),n(7642),n(8004),n(3853),n(5876),n(2475),n(5024),n(1698),n(8992),n(3215),n(4520),n(3949),n(1454),n(8872),n(7550);var r=n(144),i=n(4232);function o(t,e,n,r){try{return r?t(...r):t()}catch(i){a(i,e,n)}}function s(t,e,n,r){if((0,i.Tn)(t)){const s=o(t,e,n,r);return s&&(0,i.yL)(s)&&s.catch((t=>{a(t,e,n)})),s}if((0,i.cy)(t)){const i=[];for(let o=0;o<t.length;o++)i.push(s(t[o],e,n,r));return i}}function a(t,e,n,s=!0){const a=e?e.vnode:null,{errorHandler:u,throwUnhandledErrorInProduction:l}=e&&e.appContext.config||i.MZ;if(e){let i=e.parent;const s=e.proxy,a=`https://vuejs.org/error-reference/#runtime-${n}`;while(i){const e=i.ec;if(e)for(let n=0;n<e.length;n++)if(!1===e[n](t,s,a))return;i=i.parent}if(u)return(0,r.C4)(),o(u,null,10,[t,s,a]),void(0,r.bl)()}c(t,n,a,s,l)}function c(t,e,n,r=!0,i=!1){if(i)throw t;console.error(t)}const u=[];let l=-1;const h=[];let f=null,d=0;const p=Promise.resolve();let g=null;function m(t){const e=g||p;return t?e.then(this?t.bind(this):t):e}function y(t){let e=l+1,n=u.length;while(e<n){const r=e+n>>>1,i=u[r],o=_(i);o<t||o===t&&2&i.flags?e=r+1:n=r}return e}function v(t){if(!(1&t.flags)){const e=_(t),n=u[u.length-1];!n||!(2&t.flags)&&e>=_(n)?u.push(t):u.splice(y(e),0,t),t.flags|=1,w()}}function w(){g||(g=p.then(S))}function b(t){(0,i.cy)(t)?h.push(...t):f&&-1===t.id?f.splice(d+1,0,t):1&t.flags||(h.push(t),t.flags|=1),w()}function E(t,e,n=l+1){for(0;n<u.length;n++){const e=u[n];if(e&&2&e.flags){if(t&&e.id!==t.uid)continue;0,u.splice(n,1),n--,4&e.flags&&(e.flags&=-2),e(),4&e.flags||(e.flags&=-2)}}}function T(t){if(h.length){const t=[...new Set(h)].sort(((t,e)=>_(t)-_(e)));if(h.length=0,f)return void f.push(...t);for(f=t,d=0;d<f.length;d++){const t=f[d];0,4&t.flags&&(t.flags&=-2),8&t.flags||t(),t.flags&=-2}f=null,d=0}}const _=t=>null==t.id?2&t.flags?-1:1/0:t.id;function S(t){i.tE;try{for(l=0;l<u.length;l++){const t=u[l];!t||8&t.flags||(4&t.flags&&(t.flags&=-2),o(t,t.i,t.i?15:14),4&t.flags||(t.flags&=-2))}}finally{for(;l<u.length;l++){const t=u[l];t&&(t.flags&=-2)}l=-1,u.length=0,T(t),g=null,(u.length||h.length)&&S(t)}}let A=null,I=null;function x(t){const e=A;return A=t,I=t&&t.type.__scopeId||null,e}function C(t,e=A,n){if(!e)return t;if(t._n)return t;const r=(...n)=>{r._d&&Ge(-1);const i=x(e);let o;try{o=t(...n)}finally{x(i),r._d&&Ge(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function O(t,e,n,i){const o=t.dirs,a=e&&e.dirs;for(let c=0;c<o.length;c++){const u=o[c];a&&(u.oldValue=a[c].value);let l=u.dir[i];l&&((0,r.C4)(),s(l,n,8,[t.el,u,t,e]),(0,r.bl)())}}const D=Symbol("_vte"),R=t=>t.__isTeleport;const k=Symbol("_leaveCb"),N=Symbol("_enterCb");function M(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return nt((()=>{t.isMounted=!0})),ot((()=>{t.isUnmounting=!0})),t}const P=[Function,Array],L={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:P,onEnter:P,onAfterEnter:P,onEnterCancelled:P,onBeforeLeave:P,onLeave:P,onAfterLeave:P,onLeaveCancelled:P,onBeforeAppear:P,onAppear:P,onAfterAppear:P,onAppearCancelled:P};function F(t,e){const{leavingVNodes:n}=t;let r=n.get(e.type);return r||(r=Object.create(null),n.set(e.type,r)),r}function j(t,e,n,r,o){const{appear:a,mode:c,persisted:u=!1,onBeforeEnter:l,onEnter:h,onAfterEnter:f,onEnterCancelled:d,onBeforeLeave:p,onLeave:g,onAfterLeave:m,onLeaveCancelled:y,onBeforeAppear:v,onAppear:w,onAfterAppear:b,onAppearCancelled:E}=e,T=String(t.key),_=F(n,t),S=(t,e)=>{t&&s(t,r,9,e)},A=(t,e)=>{const n=e[1];S(t,e),(0,i.cy)(t)?t.every((t=>t.length<=1))&&n():t.length<=1&&n()},I={mode:c,persisted:u,beforeEnter(e){let r=l;if(!n.isMounted){if(!a)return;r=v||l}e[k]&&e[k](!0);const i=_[T];i&&We(t,i)&&i.el[k]&&i.el[k](),S(r,[e])},enter(t){let e=h,r=f,i=d;if(!n.isMounted){if(!a)return;e=w||h,r=b||f,i=E||d}let o=!1;const s=t[N]=e=>{o||(o=!0,S(e?i:r,[t]),I.delayedLeave&&I.delayedLeave(),t[N]=void 0)};e?A(e,[t,s]):s()},leave(e,r){const i=String(t.key);if(e[N]&&e[N](!0),n.isUnmounting)return r();S(p,[e]);let o=!1;const s=e[k]=n=>{o||(o=!0,r(),S(n?y:m,[e]),e[k]=void 0,_[i]===t&&delete _[i])};_[i]=t,g?A(g,[e,s]):s()},clone(t){const i=j(t,e,n,r,o);return o&&o(i),i}};return I}function V(t,e){6&t.shapeFlag&&t.component?(t.transition=e,V(t.component.subTree,e)):128&t.shapeFlag?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function U(t,e=!1,n){let r=[],i=0;for(let o=0;o<t.length;o++){let s=t[o];const a=null==n?s.key:String(n)+String(null!=s.key?s.key:o);s.type===Pe?(128&s.patchFlag&&i++,r=r.concat(U(s.children,e,a))):(e||s.type!==Fe)&&r.push(null!=a?en(s,{key:a}):s)}if(i>1)for(let o=0;o<r.length;o++)r[o].patchFlag=-2;return r}
/*! #__NO_SIDE_EFFECTS__ */function $(t,e){return(0,i.Tn)(t)?(()=>(0,i.X$)({name:t.name},e,{setup:t}))():t}function B(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function H(t,e,n,s,a=!1){if((0,i.cy)(t))return void t.forEach(((t,r)=>H(t,e&&((0,i.cy)(e)?e[r]:e),n,s,a)));if(G(s)&&!a)return void(512&s.shapeFlag&&s.type.__asyncResolved&&s.component.subTree.component&&H(t,e,n,s.component.subTree));const c=4&s.shapeFlag?On(s.component):s.el,u=a?null:c,{i:l,r:h}=t;const f=e&&e.r,d=l.refs===i.MZ?l.refs={}:l.refs,p=l.setupState,g=(0,r.ux)(p),m=p===i.MZ?()=>!1:t=>(0,i.$3)(g,t);if(null!=f&&f!==h&&((0,i.Kg)(f)?(d[f]=null,m(f)&&(p[f]=null)):(0,r.i9)(f)&&(f.value=null)),(0,i.Tn)(h))o(h,l,12,[u,d]);else{const e=(0,i.Kg)(h),o=(0,r.i9)(h);if(e||o){const r=()=>{if(t.f){const n=e?m(h)?p[h]:d[h]:h.value;a?(0,i.cy)(n)&&(0,i.TF)(n,c):(0,i.cy)(n)?n.includes(c)||n.push(c):e?(d[h]=[c],m(h)&&(p[h]=d[h])):(h.value=[c],t.k&&(d[t.k]=h.value))}else e?(d[h]=u,m(h)&&(p[h]=u)):o&&(h.value=u,t.k&&(d[t.k]=u))};u?(r.id=-1,ae(r,n)):r()}else 0}}(0,i.We)().requestIdleCallback,(0,i.We)().cancelIdleCallback;const G=t=>!!t.type.__asyncLoader
/*! #__NO_SIDE_EFFECTS__ */;const z=t=>t.type.__isKeepAlive;RegExp,RegExp;function K(t,e){return(0,i.cy)(t)?t.some((t=>K(t,e))):(0,i.Kg)(t)?t.split(",").includes(e):!!(0,i.gd)(t)&&(t.lastIndex=0,t.test(e))}function q(t,e){Q(t,"a",e)}function W(t,e){Q(t,"da",e)}function Q(t,e,n=dn){const r=t.__wdc||(t.__wdc=()=>{let e=n;while(e){if(e.isDeactivated)return;e=e.parent}return t()});if(Z(e,r,n),n){let t=n.parent;while(t&&t.parent)z(t.parent.vnode)&&X(r,e,n,t),t=t.parent}}function X(t,e,n,r){const o=Z(e,t,r,!0);st((()=>{(0,i.TF)(r[e],o)}),n)}function Y(t){t.shapeFlag&=-257,t.shapeFlag&=-513}function J(t){return 128&t.shapeFlag?t.ssContent:t}function Z(t,e,n=dn,i=!1){if(n){const o=n[t]||(n[t]=[]),a=e.__weh||(e.__weh=(...i)=>{(0,r.C4)();const o=yn(n),a=s(e,n,t,i);return o(),(0,r.bl)(),a});return i?o.unshift(a):o.push(a),a}}const tt=t=>(e,n=dn)=>{Tn&&"sp"!==t||Z(t,((...t)=>e(...t)),n)},et=tt("bm"),nt=tt("m"),rt=tt("bu"),it=tt("u"),ot=tt("bum"),st=tt("um"),at=tt("sp"),ct=tt("rtg"),ut=tt("rtc");function lt(t,e=dn){Z("ec",t,e)}const ht="components";function ft(t,e){return pt(ht,t,!0,e)||t}const dt=Symbol.for("v-ndc");function pt(t,e,n=!0,r=!1){const o=A||dn;if(o){const n=o.type;if(t===ht){const t=Dn(n,!1);if(t&&(t===e||t===(0,i.PT)(e)||t===(0,i.ZH)((0,i.PT)(e))))return n}const s=gt(o[t]||n[t],e)||gt(o.appContext[t],e);return!s&&r?n:s}}function gt(t,e){return t&&(t[e]||t[(0,i.PT)(e)]||t[(0,i.ZH)((0,i.PT)(e))])}const mt=t=>t?wn(t)?On(t):mt(t.parent):null,yt=(0,i.X$)(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>mt(t.parent),$root:t=>mt(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>It(t),$forceUpdate:t=>t.f||(t.f=()=>{v(t.update)}),$nextTick:t=>t.n||(t.n=m.bind(t.proxy)),$watch:t=>Ee.bind(t)}),vt=(t,e)=>t!==i.MZ&&!t.__isScriptSetup&&(0,i.$3)(t,e),wt={get({_:t},e){if("__v_skip"===e)return!0;const{ctx:n,setupState:o,data:s,props:a,accessCache:c,type:u,appContext:l}=t;let h;if("$"!==e[0]){const r=c[e];if(void 0!==r)switch(r){case 1:return o[e];case 2:return s[e];case 4:return n[e];case 3:return a[e]}else{if(vt(o,e))return c[e]=1,o[e];if(s!==i.MZ&&(0,i.$3)(s,e))return c[e]=2,s[e];if((h=t.propsOptions[0])&&(0,i.$3)(h,e))return c[e]=3,a[e];if(n!==i.MZ&&(0,i.$3)(n,e))return c[e]=4,n[e];Et&&(c[e]=0)}}const f=yt[e];let d,p;return f?("$attrs"===e&&(0,r.u4)(t.attrs,"get",""),f(t)):(d=u.__cssModules)&&(d=d[e])?d:n!==i.MZ&&(0,i.$3)(n,e)?(c[e]=4,n[e]):(p=l.config.globalProperties,(0,i.$3)(p,e)?p[e]:void 0)},set({_:t},e,n){const{data:r,setupState:o,ctx:s}=t;return vt(o,e)?(o[e]=n,!0):r!==i.MZ&&(0,i.$3)(r,e)?(r[e]=n,!0):!(0,i.$3)(t.props,e)&&(("$"!==e[0]||!(e.slice(1)in t))&&(s[e]=n,!0))},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:o,propsOptions:s}},a){let c;return!!n[a]||t!==i.MZ&&(0,i.$3)(t,a)||vt(e,a)||(c=s[0])&&(0,i.$3)(c,a)||(0,i.$3)(r,a)||(0,i.$3)(yt,a)||(0,i.$3)(o.config.globalProperties,a)},defineProperty(t,e,n){return null!=n.get?t._.accessCache[e]=0:(0,i.$3)(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function bt(t){return(0,i.cy)(t)?t.reduce(((t,e)=>(t[e]=null,t)),{}):t}let Et=!0;function Tt(t){const e=It(t),n=t.proxy,o=t.ctx;Et=!1,e.beforeCreate&&St(e.beforeCreate,t,"bc");const{data:s,computed:a,methods:c,watch:u,provide:l,inject:h,created:f,beforeMount:d,mounted:p,beforeUpdate:g,updated:m,activated:y,deactivated:v,beforeDestroy:w,beforeUnmount:b,destroyed:E,unmounted:T,render:_,renderTracked:S,renderTriggered:A,errorCaptured:I,serverPrefetch:x,expose:C,inheritAttrs:O,components:D,directives:R,filters:k}=e,N=null;if(h&&_t(h,o,N),c)for(const r in c){const t=c[r];(0,i.Tn)(t)&&(o[r]=t.bind(n))}if(s){0;const e=s.call(n,n);0,(0,i.Gv)(e)&&(t.data=(0,r.Kh)(e))}if(Et=!0,a)for(const r in a){const t=a[r],e=(0,i.Tn)(t)?t.bind(n,n):(0,i.Tn)(t.get)?t.get.bind(n,n):i.tE;0;const s=!(0,i.Tn)(t)&&(0,i.Tn)(t.set)?t.set.bind(n):i.tE,c=kn({get:e,set:s});Object.defineProperty(o,r,{enumerable:!0,configurable:!0,get:()=>c.value,set:t=>c.value=t})}if(u)for(const r in u)At(u[r],o,n,r);if(l){const t=(0,i.Tn)(l)?l.call(n):l;Reflect.ownKeys(t).forEach((e=>{Ut(e,t[e])}))}function M(t,e){(0,i.cy)(e)?e.forEach((e=>t(e.bind(n)))):e&&t(e.bind(n))}if(f&&St(f,t,"c"),M(et,d),M(nt,p),M(rt,g),M(it,m),M(q,y),M(W,v),M(lt,I),M(ut,S),M(ct,A),M(ot,b),M(st,T),M(at,x),(0,i.cy)(C))if(C.length){const e=t.exposed||(t.exposed={});C.forEach((t=>{Object.defineProperty(e,t,{get:()=>n[t],set:e=>n[t]=e})}))}else t.exposed||(t.exposed={});_&&t.render===i.tE&&(t.render=_),null!=O&&(t.inheritAttrs=O),D&&(t.components=D),R&&(t.directives=R),x&&B(t)}function _t(t,e,n=i.tE){(0,i.cy)(t)&&(t=Rt(t));for(const o in t){const n=t[o];let s;s=(0,i.Gv)(n)?"default"in n?$t(n.from||o,n.default,!0):$t(n.from||o):$t(n),(0,r.i9)(s)?Object.defineProperty(e,o,{enumerable:!0,configurable:!0,get:()=>s.value,set:t=>s.value=t}):e[o]=s}}function St(t,e,n){s((0,i.cy)(t)?t.map((t=>t.bind(e.proxy))):t.bind(e.proxy),e,n)}function At(t,e,n,r){let o=r.includes(".")?Te(n,r):()=>n[r];if((0,i.Kg)(t)){const n=e[t];(0,i.Tn)(n)&&we(o,n)}else if((0,i.Tn)(t))we(o,t.bind(n));else if((0,i.Gv)(t))if((0,i.cy)(t))t.forEach((t=>At(t,e,n,r)));else{const r=(0,i.Tn)(t.handler)?t.handler.bind(n):e[t.handler];(0,i.Tn)(r)&&we(o,r,t)}else 0}function It(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:o,optionsCache:s,config:{optionMergeStrategies:a}}=t.appContext,c=s.get(e);let u;return c?u=c:o.length||n||r?(u={},o.length&&o.forEach((t=>xt(u,t,a,!0))),xt(u,e,a)):u=e,(0,i.Gv)(e)&&s.set(e,u),u}function xt(t,e,n,r=!1){const{mixins:i,extends:o}=e;o&&xt(t,o,n,!0),i&&i.forEach((e=>xt(t,e,n,!0)));for(const s in e)if(r&&"expose"===s);else{const r=Ct[s]||n&&n[s];t[s]=r?r(t[s],e[s]):e[s]}return t}const Ct={data:Ot,props:Mt,emits:Mt,methods:Nt,computed:Nt,beforeCreate:kt,created:kt,beforeMount:kt,mounted:kt,beforeUpdate:kt,updated:kt,beforeDestroy:kt,beforeUnmount:kt,destroyed:kt,unmounted:kt,activated:kt,deactivated:kt,errorCaptured:kt,serverPrefetch:kt,components:Nt,directives:Nt,watch:Pt,provide:Ot,inject:Dt};function Ot(t,e){return e?t?function(){return(0,i.X$)((0,i.Tn)(t)?t.call(this,this):t,(0,i.Tn)(e)?e.call(this,this):e)}:e:t}function Dt(t,e){return Nt(Rt(t),Rt(e))}function Rt(t){if((0,i.cy)(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function kt(t,e){return t?[...new Set([].concat(t,e))]:e}function Nt(t,e){return t?(0,i.X$)(Object.create(null),t,e):e}function Mt(t,e){return t?(0,i.cy)(t)&&(0,i.cy)(e)?[...new Set([...t,...e])]:(0,i.X$)(Object.create(null),bt(t),bt(null!=e?e:{})):e}function Pt(t,e){if(!t)return e;if(!e)return t;const n=(0,i.X$)(Object.create(null),t);for(const r in e)n[r]=kt(t[r],e[r]);return n}function Lt(){return{app:null,config:{isNativeTag:i.NO,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Ft=0;function jt(t,e){return function(n,r=null){(0,i.Tn)(n)||(n=(0,i.X$)({},n)),null==r||(0,i.Gv)(r)||(r=null);const o=Lt(),a=new WeakSet,c=[];let u=!1;const l=o.app={_uid:Ft++,_component:n,_props:r,_container:null,_context:o,_instance:null,version:Mn,get config(){return o.config},set config(t){0},use(t,...e){return a.has(t)||(t&&(0,i.Tn)(t.install)?(a.add(t),t.install(l,...e)):(0,i.Tn)(t)&&(a.add(t),t(l,...e))),l},mixin(t){return o.mixins.includes(t)||o.mixins.push(t),l},component(t,e){return e?(o.components[t]=e,l):o.components[t]},directive(t,e){return e?(o.directives[t]=e,l):o.directives[t]},mount(i,s,a){if(!u){0;const c=l._ceVNode||Je(n,r);return c.appContext=o,!0===a?a="svg":!1===a&&(a=void 0),s&&e?e(c,i):t(c,i,a),u=!0,l._container=i,i.__vue_app__=l,On(c.component)}},onUnmount(t){c.push(t)},unmount(){u&&(s(c,l._instance,16),t(null,l._container),delete l._container.__vue_app__)},provide(t,e){return o.provides[t]=e,l},runWithContext(t){const e=Vt;Vt=l;try{return t()}finally{Vt=e}}};return l}}let Vt=null;function Ut(t,e){if(dn){let n=dn.provides;const r=dn.parent&&dn.parent.provides;r===n&&(n=dn.provides=Object.create(r)),n[t]=e}else 0}function $t(t,e,n=!1){const r=dn||A;if(r||Vt){const o=Vt?Vt._context.provides:r?null==r.parent?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(o&&t in o)return o[t];if(arguments.length>1)return n&&(0,i.Tn)(e)?e.call(r&&r.proxy):e}else 0}const Bt={},Ht=()=>Object.create(Bt),Gt=t=>Object.getPrototypeOf(t)===Bt;function zt(t,e,n,i=!1){const o={},s=Ht();t.propsDefaults=Object.create(null),qt(t,e,o,s);for(const r in t.propsOptions[0])r in o||(o[r]=void 0);n?t.props=i?o:(0,r.Gc)(o):t.type.props?t.props=o:t.props=s,t.attrs=s}function Kt(t,e,n,o){const{props:s,attrs:a,vnode:{patchFlag:c}}=t,u=(0,r.ux)(s),[l]=t.propsOptions;let h=!1;if(!(o||c>0)||16&c){let r;qt(t,e,s,a)&&(h=!0);for(const o in u)e&&((0,i.$3)(e,o)||(r=(0,i.Tg)(o))!==o&&(0,i.$3)(e,r))||(l?!n||void 0===n[o]&&void 0===n[r]||(s[o]=Wt(l,u,o,void 0,t,!0)):delete s[o]);if(a!==u)for(const t in a)e&&(0,i.$3)(e,t)||(delete a[t],h=!0)}else if(8&c){const n=t.vnode.dynamicProps;for(let r=0;r<n.length;r++){let o=n[r];if(Ie(t.emitsOptions,o))continue;const c=e[o];if(l)if((0,i.$3)(a,o))c!==a[o]&&(a[o]=c,h=!0);else{const e=(0,i.PT)(o);s[e]=Wt(l,u,e,c,t,!1)}else c!==a[o]&&(a[o]=c,h=!0)}}h&&(0,r.hZ)(t.attrs,"set","")}function qt(t,e,n,o){const[s,a]=t.propsOptions;let c,u=!1;if(e)for(let r in e){if((0,i.SU)(r))continue;const l=e[r];let h;s&&(0,i.$3)(s,h=(0,i.PT)(r))?a&&a.includes(h)?(c||(c={}))[h]=l:n[h]=l:Ie(t.emitsOptions,r)||r in o&&l===o[r]||(o[r]=l,u=!0)}if(a){const e=(0,r.ux)(n),o=c||i.MZ;for(let r=0;r<a.length;r++){const c=a[r];n[c]=Wt(s,e,c,o[c],t,!(0,i.$3)(o,c))}}return u}function Wt(t,e,n,r,o,s){const a=t[n];if(null!=a){const t=(0,i.$3)(a,"default");if(t&&void 0===r){const t=a.default;if(a.type!==Function&&!a.skipFactory&&(0,i.Tn)(t)){const{propsDefaults:i}=o;if(n in i)r=i[n];else{const s=yn(o);r=i[n]=t.call(null,e),s()}}else r=t;o.ce&&o.ce._setProp(n,r)}a[0]&&(s&&!t?r=!1:!a[1]||""!==r&&r!==(0,i.Tg)(n)||(r=!0))}return r}const Qt=new WeakMap;function Xt(t,e,n=!1){const r=n?Qt:e.propsCache,o=r.get(t);if(o)return o;const s=t.props,a={},c=[];let u=!1;if(!(0,i.Tn)(t)){const r=t=>{u=!0;const[n,r]=Xt(t,e,!0);(0,i.X$)(a,n),r&&c.push(...r)};!n&&e.mixins.length&&e.mixins.forEach(r),t.extends&&r(t.extends),t.mixins&&t.mixins.forEach(r)}if(!s&&!u)return(0,i.Gv)(t)&&r.set(t,i.Oj),i.Oj;if((0,i.cy)(s))for(let h=0;h<s.length;h++){0;const t=(0,i.PT)(s[h]);Yt(t)&&(a[t]=i.MZ)}else if(s){0;for(const t in s){const e=(0,i.PT)(t);if(Yt(e)){const n=s[t],r=a[e]=(0,i.cy)(n)||(0,i.Tn)(n)?{type:n}:(0,i.X$)({},n),o=r.type;let u=!1,l=!0;if((0,i.cy)(o))for(let t=0;t<o.length;++t){const e=o[t],n=(0,i.Tn)(e)&&e.name;if("Boolean"===n){u=!0;break}"String"===n&&(l=!1)}else u=(0,i.Tn)(o)&&"Boolean"===o.name;r[0]=u,r[1]=l,(u||(0,i.$3)(r,"default"))&&c.push(e)}}}const l=[a,c];return(0,i.Gv)(t)&&r.set(t,l),l}function Yt(t){return"$"!==t[0]&&!(0,i.SU)(t)}const Jt=t=>"_"===t[0]||"$stable"===t,Zt=t=>(0,i.cy)(t)?t.map(on):[on(t)],te=(t,e,n)=>{if(e._n)return e;const r=C(((...t)=>Zt(e(...t))),n);return r._c=!1,r},ee=(t,e,n)=>{const r=t._ctx;for(const o in t){if(Jt(o))continue;const n=t[o];if((0,i.Tn)(n))e[o]=te(o,n,r);else if(null!=n){0;const t=Zt(n);e[o]=()=>t}}},ne=(t,e)=>{const n=Zt(e);t.slots.default=()=>n},re=(t,e,n)=>{for(const r in e)(n||"_"!==r)&&(t[r]=e[r])},ie=(t,e,n)=>{const r=t.slots=Ht();if(32&t.vnode.shapeFlag){const t=e._;t?(re(r,e,n),n&&(0,i.yQ)(r,"_",t,!0)):ee(e,r)}else e&&ne(t,e)},oe=(t,e,n)=>{const{vnode:r,slots:o}=t;let s=!0,a=i.MZ;if(32&r.shapeFlag){const t=e._;t?n&&1===t?s=!1:re(o,e,n):(s=!e.$stable,ee(e,o)),a=e}else e&&(ne(t,e),a={default:1});if(s)for(const i in o)Jt(i)||null!=a[i]||delete o[i]};function se(){"boolean"!==typeof __VUE_PROD_HYDRATION_MISMATCH_DETAILS__&&((0,i.We)().__VUE_PROD_HYDRATION_MISMATCH_DETAILS__=!1)}const ae=Me;function ce(t){return ue(t)}function ue(t,e){se();const n=(0,i.We)();n.__VUE__=!0;const{insert:o,remove:s,patchProp:a,createElement:c,createText:u,createComment:l,setText:h,setElementText:f,parentNode:d,nextSibling:p,setScopeId:g=i.tE,insertStaticContent:m}=t,y=(t,e,n,r=null,i=null,o=null,s=void 0,a=null,c=!!e.dynamicChildren)=>{if(t===e)return;t&&!We(t,e)&&(r=Z(t),W(t,i,o,!0),t=null),-2===e.patchFlag&&(c=!1,e.dynamicChildren=null);const{type:u,ref:l,shapeFlag:h}=e;switch(u){case Le:w(t,e,n,r);break;case Fe:b(t,e,n,r);break;case je:null==t&&_(e,n,r,s);break;case Pe:P(t,e,n,r,i,o,s,a,c);break;default:1&h?I(t,e,n,r,i,o,s,a,c):6&h?L(t,e,n,r,i,o,s,a,c):(64&h||128&h)&&u.process(t,e,n,r,i,o,s,a,c,nt)}null!=l&&i&&H(l,t&&t.ref,o,e||t,!e)},w=(t,e,n,r)=>{if(null==t)o(e.el=u(e.children),n,r);else{const n=e.el=t.el;e.children!==t.children&&h(n,e.children)}},b=(t,e,n,r)=>{null==t?o(e.el=l(e.children||""),n,r):e.el=t.el},_=(t,e,n,r)=>{[t.el,t.anchor]=m(t.children,e,n,r,t.el,t.anchor)},S=({el:t,anchor:e},n,r)=>{let i;while(t&&t!==e)i=p(t),o(t,n,r),t=i;o(e,n,r)},A=({el:t,anchor:e})=>{let n;while(t&&t!==e)n=p(t),s(t),t=n;s(e)},I=(t,e,n,r,i,o,s,a,c)=>{"svg"===e.type?s="svg":"math"===e.type&&(s="mathml"),null==t?x(e,n,r,i,o,s,a,c):k(t,e,i,o,s,a,c)},x=(t,e,n,r,s,u,l,h)=>{let d,p;const{props:g,shapeFlag:m,transition:y,dirs:v}=t;if(d=t.el=c(t.type,u,g&&g.is,g),8&m?f(d,t.children):16&m&&R(t.children,d,null,r,s,le(t,u),l,h),v&&O(t,null,r,"created"),C(d,t,t.scopeId,l,r),g){for(const t in g)"value"===t||(0,i.SU)(t)||a(d,t,null,g[t],u,r);"value"in g&&a(d,"value",null,g.value,u),(p=g.onVnodeBeforeMount)&&un(p,r,t)}v&&O(t,null,r,"beforeMount");const w=fe(s,y);w&&y.beforeEnter(d),o(d,e,n),((p=g&&g.onVnodeMounted)||w||v)&&ae((()=>{p&&un(p,r,t),w&&y.enter(d),v&&O(t,null,r,"mounted")}),s)},C=(t,e,n,r,i)=>{if(n&&g(t,n),r)for(let o=0;o<r.length;o++)g(t,r[o]);if(i){let n=i.subTree;if(e===n||Ne(n.type)&&(n.ssContent===e||n.ssFallback===e)){const e=i.vnode;C(t,e,e.scopeId,e.slotScopeIds,i.parent)}}},R=(t,e,n,r,i,o,s,a,c=0)=>{for(let u=c;u<t.length;u++){const c=t[u]=a?sn(t[u]):on(t[u]);y(null,c,e,n,r,i,o,s,a)}},k=(t,e,n,r,o,s,c)=>{const u=e.el=t.el;let{patchFlag:l,dynamicChildren:h,dirs:d}=e;l|=16&t.patchFlag;const p=t.props||i.MZ,g=e.props||i.MZ;let m;if(n&&he(n,!1),(m=g.onVnodeBeforeUpdate)&&un(m,n,e,t),d&&O(e,t,n,"beforeUpdate"),n&&he(n,!0),(p.innerHTML&&null==g.innerHTML||p.textContent&&null==g.textContent)&&f(u,""),h?N(t.dynamicChildren,h,u,n,r,le(e,o),s):c||$(t,e,u,null,n,r,le(e,o),s,!1),l>0){if(16&l)M(u,p,g,n,o);else if(2&l&&p.class!==g.class&&a(u,"class",null,g.class,o),4&l&&a(u,"style",p.style,g.style,o),8&l){const t=e.dynamicProps;for(let e=0;e<t.length;e++){const r=t[e],i=p[r],s=g[r];s===i&&"value"!==r||a(u,r,i,s,o,n)}}1&l&&t.children!==e.children&&f(u,e.children)}else c||null!=h||M(u,p,g,n,o);((m=g.onVnodeUpdated)||d)&&ae((()=>{m&&un(m,n,e,t),d&&O(e,t,n,"updated")}),r)},N=(t,e,n,r,i,o,s)=>{for(let a=0;a<e.length;a++){const c=t[a],u=e[a],l=c.el&&(c.type===Pe||!We(c,u)||70&c.shapeFlag)?d(c.el):n;y(c,u,l,null,r,i,o,s,!0)}},M=(t,e,n,r,o)=>{if(e!==n){if(e!==i.MZ)for(const s in e)(0,i.SU)(s)||s in n||a(t,s,e[s],null,o,r);for(const s in n){if((0,i.SU)(s))continue;const c=n[s],u=e[s];c!==u&&"value"!==s&&a(t,s,u,c,o,r)}"value"in n&&a(t,"value",e.value,n.value,o)}},P=(t,e,n,r,i,s,a,c,l)=>{const h=e.el=t?t.el:u(""),f=e.anchor=t?t.anchor:u("");let{patchFlag:d,dynamicChildren:p,slotScopeIds:g}=e;g&&(c=c?c.concat(g):g),null==t?(o(h,n,r),o(f,n,r),R(e.children||[],n,f,i,s,a,c,l)):d>0&&64&d&&p&&t.dynamicChildren?(N(t.dynamicChildren,p,n,i,s,a,c),(null!=e.key||i&&e===i.subTree)&&de(t,e,!0)):$(t,e,n,f,i,s,a,c,l)},L=(t,e,n,r,i,o,s,a,c)=>{e.slotScopeIds=a,null==t?512&e.shapeFlag?i.ctx.activate(e,n,r,s,c):F(e,n,r,i,o,s,c):j(t,e,c)},F=(t,e,n,r,i,o,s)=>{const a=t.component=fn(t,r,i);if(z(t)&&(a.ctx.renderer=nt),_n(a,!1,s),a.asyncDep){if(i&&i.registerDep(a,V,s),!t.el){const t=a.subTree=Je(Fe);b(null,t,e,n)}}else V(a,t,e,n,i,o,s)},j=(t,e,n)=>{const r=e.component=t.component;if(De(t,e,n)){if(r.asyncDep&&!r.asyncResolved)return void U(r,e,n);r.next=e,r.update()}else e.el=t.el,r.vnode=e},V=(t,e,n,o,s,a,c)=>{const u=()=>{if(t.isMounted){let{next:e,bu:n,u:r,parent:o,vnode:l}=t;{const n=ge(t);if(n)return e&&(e.el=l.el,U(t,e,c)),void n.asyncDep.then((()=>{t.isUnmounted||u()}))}let h,f=e;0,he(t,!1),e?(e.el=l.el,U(t,e,c)):e=l,n&&(0,i.DY)(n),(h=e.props&&e.props.onVnodeBeforeUpdate)&&un(h,o,e,l),he(t,!0);const p=xe(t);0;const g=t.subTree;t.subTree=p,y(g,p,d(g.el),Z(g),t,s,a),e.el=p.el,null===f&&ke(t,p.el),r&&ae(r,s),(h=e.props&&e.props.onVnodeUpdated)&&ae((()=>un(h,o,e,l)),s)}else{let r;const{el:c,props:u}=e,{bm:l,m:h,parent:f,root:d,type:p}=t,g=G(e);if(he(t,!1),l&&(0,i.DY)(l),!g&&(r=u&&u.onVnodeBeforeMount)&&un(r,f,e),he(t,!0),c&&it){const e=()=>{t.subTree=xe(t),it(c,t.subTree,t,s,null)};g&&p.__asyncHydrate?p.__asyncHydrate(c,t,e):e()}else{d.ce&&d.ce._injectChildStyle(p);const r=t.subTree=xe(t);0,y(null,r,n,o,t,s,a),e.el=r.el}if(h&&ae(h,s),!g&&(r=u&&u.onVnodeMounted)){const t=e;ae((()=>un(r,f,t)),s)}(256&e.shapeFlag||f&&G(f.vnode)&&256&f.vnode.shapeFlag)&&t.a&&ae(t.a,s),t.isMounted=!0,e=n=o=null}};t.scope.on();const l=t.effect=new r.X2(u);t.scope.off();const h=t.update=l.run.bind(l),f=t.job=l.runIfDirty.bind(l);f.i=t,f.id=t.uid,l.scheduler=()=>v(f),he(t,!0),h()},U=(t,e,n)=>{e.component=t;const i=t.vnode.props;t.vnode=e,t.next=null,Kt(t,e.props,i,n),oe(t,e.children,n),(0,r.C4)(),E(t),(0,r.bl)()},$=(t,e,n,r,i,o,s,a,c=!1)=>{const u=t&&t.children,l=t?t.shapeFlag:0,h=e.children,{patchFlag:d,shapeFlag:p}=e;if(d>0){if(128&d)return void K(u,h,n,r,i,o,s,a,c);if(256&d)return void B(u,h,n,r,i,o,s,a,c)}8&p?(16&l&&J(u,i,o),h!==u&&f(n,h)):16&l?16&p?K(u,h,n,r,i,o,s,a,c):J(u,i,o,!0):(8&l&&f(n,""),16&p&&R(h,n,r,i,o,s,a,c))},B=(t,e,n,r,o,s,a,c,u)=>{t=t||i.Oj,e=e||i.Oj;const l=t.length,h=e.length,f=Math.min(l,h);let d;for(d=0;d<f;d++){const r=e[d]=u?sn(e[d]):on(e[d]);y(t[d],r,n,null,o,s,a,c,u)}l>h?J(t,o,s,!0,!1,f):R(e,n,r,o,s,a,c,u,f)},K=(t,e,n,r,o,s,a,c,u)=>{let l=0;const h=e.length;let f=t.length-1,d=h-1;while(l<=f&&l<=d){const r=t[l],i=e[l]=u?sn(e[l]):on(e[l]);if(!We(r,i))break;y(r,i,n,null,o,s,a,c,u),l++}while(l<=f&&l<=d){const r=t[f],i=e[d]=u?sn(e[d]):on(e[d]);if(!We(r,i))break;y(r,i,n,null,o,s,a,c,u),f--,d--}if(l>f){if(l<=d){const t=d+1,i=t<h?e[t].el:r;while(l<=d)y(null,e[l]=u?sn(e[l]):on(e[l]),n,i,o,s,a,c,u),l++}}else if(l>d)while(l<=f)W(t[l],o,s,!0),l++;else{const p=l,g=l,m=new Map;for(l=g;l<=d;l++){const t=e[l]=u?sn(e[l]):on(e[l]);null!=t.key&&m.set(t.key,l)}let v,w=0;const b=d-g+1;let E=!1,T=0;const _=new Array(b);for(l=0;l<b;l++)_[l]=0;for(l=p;l<=f;l++){const r=t[l];if(w>=b){W(r,o,s,!0);continue}let i;if(null!=r.key)i=m.get(r.key);else for(v=g;v<=d;v++)if(0===_[v-g]&&We(r,e[v])){i=v;break}void 0===i?W(r,o,s,!0):(_[i-g]=l+1,i>=T?T=i:E=!0,y(r,e[i],n,null,o,s,a,c,u),w++)}const S=E?pe(_):i.Oj;for(v=S.length-1,l=b-1;l>=0;l--){const t=g+l,i=e[t],f=t+1<h?e[t+1].el:r;0===_[l]?y(null,i,n,f,o,s,a,c,u):E&&(v<0||l!==S[v]?q(i,n,f,2):v--)}}},q=(t,e,n,r,i=null)=>{const{el:s,type:a,transition:c,children:u,shapeFlag:l}=t;if(6&l)return void q(t.component.subTree,e,n,r);if(128&l)return void t.suspense.move(e,n,r);if(64&l)return void a.move(t,e,n,nt);if(a===Pe){o(s,e,n);for(let t=0;t<u.length;t++)q(u[t],e,n,r);return void o(t.anchor,e,n)}if(a===je)return void S(t,e,n);const h=2!==r&&1&l&&c;if(h)if(0===r)c.beforeEnter(s),o(s,e,n),ae((()=>c.enter(s)),i);else{const{leave:t,delayLeave:r,afterLeave:i}=c,a=()=>o(s,e,n),u=()=>{t(s,(()=>{a(),i&&i()}))};r?r(s,a,u):u()}else o(s,e,n)},W=(t,e,n,r=!1,i=!1)=>{const{type:o,props:s,ref:a,children:c,dynamicChildren:u,shapeFlag:l,patchFlag:h,dirs:f,cacheIndex:d}=t;if(-2===h&&(i=!1),null!=a&&H(a,null,n,t,!0),null!=d&&(e.renderCache[d]=void 0),256&l)return void e.ctx.deactivate(t);const p=1&l&&f,g=!G(t);let m;if(g&&(m=s&&s.onVnodeBeforeUnmount)&&un(m,e,t),6&l)Y(t.component,n,r);else{if(128&l)return void t.suspense.unmount(n,r);p&&O(t,null,e,"beforeUnmount"),64&l?t.type.remove(t,e,n,nt,r):u&&!u.hasOnce&&(o!==Pe||h>0&&64&h)?J(u,e,n,!1,!0):(o===Pe&&384&h||!i&&16&l)&&J(c,e,n),r&&Q(t)}(g&&(m=s&&s.onVnodeUnmounted)||p)&&ae((()=>{m&&un(m,e,t),p&&O(t,null,e,"unmounted")}),n)},Q=t=>{const{type:e,el:n,anchor:r,transition:i}=t;if(e===Pe)return void X(n,r);if(e===je)return void A(t);const o=()=>{s(n),i&&!i.persisted&&i.afterLeave&&i.afterLeave()};if(1&t.shapeFlag&&i&&!i.persisted){const{leave:e,delayLeave:r}=i,s=()=>e(n,o);r?r(t.el,o,s):s()}else o()},X=(t,e)=>{let n;while(t!==e)n=p(t),s(t),t=n;s(e)},Y=(t,e,n)=>{const{bum:r,scope:o,job:s,subTree:a,um:c,m:u,a:l}=t;me(u),me(l),r&&(0,i.DY)(r),o.stop(),s&&(s.flags|=8,W(a,t,e,n)),c&&ae(c,e),ae((()=>{t.isUnmounted=!0}),e),e&&e.pendingBranch&&!e.isUnmounted&&t.asyncDep&&!t.asyncResolved&&t.suspenseId===e.pendingId&&(e.deps--,0===e.deps&&e.resolve())},J=(t,e,n,r=!1,i=!1,o=0)=>{for(let s=o;s<t.length;s++)W(t[s],e,n,r,i)},Z=t=>{if(6&t.shapeFlag)return Z(t.component.subTree);if(128&t.shapeFlag)return t.suspense.next();const e=p(t.anchor||t.el),n=e&&e[D];return n?p(n):e};let tt=!1;const et=(t,e,n)=>{null==t?e._vnode&&W(e._vnode,null,null,!0):y(e._vnode||null,t,e,null,null,null,n),e._vnode=t,tt||(tt=!0,E(),T(),tt=!1)},nt={p:y,um:W,m:q,r:Q,mt:F,mc:R,pc:$,pbc:N,n:Z,o:t};let rt,it;return e&&([rt,it]=e(nt)),{render:et,hydrate:rt,createApp:jt(et,rt)}}function le({type:t,props:e},n){return"svg"===n&&"foreignObject"===t||"mathml"===n&&"annotation-xml"===t&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function he({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function fe(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function de(t,e,n=!1){const r=t.children,o=e.children;if((0,i.cy)(r)&&(0,i.cy)(o))for(let i=0;i<r.length;i++){const t=r[i];let e=o[i];1&e.shapeFlag&&!e.dynamicChildren&&((e.patchFlag<=0||32===e.patchFlag)&&(e=o[i]=sn(o[i]),e.el=t.el),n||-2===e.patchFlag||de(t,e)),e.type===Le&&(e.el=t.el)}}function pe(t){const e=t.slice(),n=[0];let r,i,o,s,a;const c=t.length;for(r=0;r<c;r++){const c=t[r];if(0!==c){if(i=n[n.length-1],t[i]<c){e[r]=i,n.push(r);continue}o=0,s=n.length-1;while(o<s)a=o+s>>1,t[n[a]]<c?o=a+1:s=a;c<t[n[o]]&&(o>0&&(e[r]=n[o-1]),n[o]=r)}}o=n.length,s=n[o-1];while(o-- >0)n[o]=s,s=e[s];return n}function ge(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:ge(e)}function me(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const ye=Symbol.for("v-scx"),ve=()=>{{const t=$t(ye);return t}};function we(t,e,n){return be(t,e,n)}function be(t,e,n=i.MZ){const{immediate:o,deep:a,flush:c,once:u}=n;const l=(0,i.X$)({},n);const h=e&&o||!e&&"post"!==c;let f;if(Tn)if("sync"===c){const t=ve();f=t.__watcherHandles||(t.__watcherHandles=[])}else if(!h){const t=()=>{};return t.stop=i.tE,t.resume=i.tE,t.pause=i.tE,t}const d=dn;l.call=(t,e,n)=>s(t,d,e,n);let p=!1;"post"===c?l.scheduler=t=>{ae(t,d&&d.suspense)}:"sync"!==c&&(p=!0,l.scheduler=(t,e)=>{e?t():v(t)}),l.augmentJob=t=>{e&&(t.flags|=4),p&&(t.flags|=2,d&&(t.id=d.uid,t.i=d))};const g=(0,r.wB)(t,e,l);return Tn&&(f?f.push(g):h&&g()),g}function Ee(t,e,n){const r=this.proxy,o=(0,i.Kg)(t)?t.includes(".")?Te(r,t):()=>r[t]:t.bind(r,r);let s;(0,i.Tn)(e)?s=e:(s=e.handler,n=e);const a=yn(this),c=be(o,s.bind(r),n);return a(),c}function Te(t,e){const n=e.split(".");return()=>{let e=t;for(let t=0;t<n.length&&e;t++)e=e[n[t]];return e}}const _e=(t,e)=>"modelValue"===e||"model-value"===e?t.modelModifiers:t[`${e}Modifiers`]||t[`${(0,i.PT)(e)}Modifiers`]||t[`${(0,i.Tg)(e)}Modifiers`];function Se(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||i.MZ;let o=n;const a=e.startsWith("update:"),c=a&&_e(r,e.slice(7));let u;c&&(c.trim&&(o=n.map((t=>(0,i.Kg)(t)?t.trim():t))),c.number&&(o=n.map(i.bB)));let l=r[u=(0,i.rU)(e)]||r[u=(0,i.rU)((0,i.PT)(e))];!l&&a&&(l=r[u=(0,i.rU)((0,i.Tg)(e))]),l&&s(l,t,6,o);const h=r[u+"Once"];if(h){if(t.emitted){if(t.emitted[u])return}else t.emitted={};t.emitted[u]=!0,s(h,t,6,o)}}function Ae(t,e,n=!1){const r=e.emitsCache,o=r.get(t);if(void 0!==o)return o;const s=t.emits;let a={},c=!1;if(!(0,i.Tn)(t)){const r=t=>{const n=Ae(t,e,!0);n&&(c=!0,(0,i.X$)(a,n))};!n&&e.mixins.length&&e.mixins.forEach(r),t.extends&&r(t.extends),t.mixins&&t.mixins.forEach(r)}return s||c?((0,i.cy)(s)?s.forEach((t=>a[t]=null)):(0,i.X$)(a,s),(0,i.Gv)(t)&&r.set(t,a),a):((0,i.Gv)(t)&&r.set(t,null),null)}function Ie(t,e){return!(!t||!(0,i.Mp)(e))&&(e=e.slice(2).replace(/Once$/,""),(0,i.$3)(t,e[0].toLowerCase()+e.slice(1))||(0,i.$3)(t,(0,i.Tg)(e))||(0,i.$3)(t,e))}function xe(t){const{type:e,vnode:n,proxy:r,withProxy:o,propsOptions:[s],slots:c,attrs:u,emit:l,render:h,renderCache:f,props:d,data:p,setupState:g,ctx:m,inheritAttrs:y}=t,v=x(t);let w,b;try{if(4&n.shapeFlag){const t=o||r,e=t;w=on(h.call(e,t,f,d,g,p,m)),b=u}else{const t=e;0,w=on(t.length>1?t(d,{attrs:u,slots:c,emit:l}):t(d,null)),b=e.props?u:Ce(u)}}catch(T){Ve.length=0,a(T,t,1),w=Je(Fe)}let E=w;if(b&&!1!==y){const t=Object.keys(b),{shapeFlag:e}=E;t.length&&7&e&&(s&&t.some(i.CP)&&(b=Oe(b,s)),E=en(E,b,!1,!0))}return n.dirs&&(E=en(E,null,!1,!0),E.dirs=E.dirs?E.dirs.concat(n.dirs):n.dirs),n.transition&&V(E,n.transition),w=E,x(v),w}const Ce=t=>{let e;for(const n in t)("class"===n||"style"===n||(0,i.Mp)(n))&&((e||(e={}))[n]=t[n]);return e},Oe=(t,e)=>{const n={};for(const r in t)(0,i.CP)(r)&&r.slice(9)in e||(n[r]=t[r]);return n};function De(t,e,n){const{props:r,children:i,component:o}=t,{props:s,children:a,patchFlag:c}=e,u=o.emitsOptions;if(e.dirs||e.transition)return!0;if(!(n&&c>=0))return!(!i&&!a||a&&a.$stable)||r!==s&&(r?!s||Re(r,s,u):!!s);if(1024&c)return!0;if(16&c)return r?Re(r,s,u):!!s;if(8&c){const t=e.dynamicProps;for(let e=0;e<t.length;e++){const n=t[e];if(s[n]!==r[n]&&!Ie(u,n))return!0}}return!1}function Re(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let i=0;i<r.length;i++){const o=r[i];if(e[o]!==t[o]&&!Ie(n,o))return!0}return!1}function ke({vnode:t,parent:e},n){while(e){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===t&&(r.el=t.el),r!==t)break;(t=e.vnode).el=n,e=e.parent}}const Ne=t=>t.__isSuspense;function Me(t,e){e&&e.pendingBranch?(0,i.cy)(t)?e.effects.push(...t):e.effects.push(t):b(t)}const Pe=Symbol.for("v-fgt"),Le=Symbol.for("v-txt"),Fe=Symbol.for("v-cmt"),je=Symbol.for("v-stc"),Ve=[];let Ue=null;function $e(t=!1){Ve.push(Ue=t?null:[])}function Be(){Ve.pop(),Ue=Ve[Ve.length-1]||null}let He=1;function Ge(t,e=!1){He+=t,t<0&&Ue&&e&&(Ue.hasOnce=!0)}function ze(t){return t.dynamicChildren=He>0?Ue||i.Oj:null,Be(),He>0&&Ue&&Ue.push(t),t}function Ke(t,e,n,r,i,o){return ze(Ye(t,e,n,r,i,o,!0))}function qe(t){return!!t&&!0===t.__v_isVNode}function We(t,e){return t.type===e.type&&t.key===e.key}const Qe=({key:t})=>null!=t?t:null,Xe=({ref:t,ref_key:e,ref_for:n})=>("number"===typeof t&&(t=""+t),null!=t?(0,i.Kg)(t)||(0,r.i9)(t)||(0,i.Tn)(t)?{i:A,r:t,k:e,f:!!n}:t:null);function Ye(t,e=null,n=null,r=0,o=null,s=(t===Pe?0:1),a=!1,c=!1){const u={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Qe(e),ref:e&&Xe(e),scopeId:I,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:r,dynamicProps:o,dynamicChildren:null,appContext:null,ctx:A};return c?(an(u,n),128&s&&t.normalize(u)):n&&(u.shapeFlag|=(0,i.Kg)(n)?8:16),He>0&&!a&&Ue&&(u.patchFlag>0||6&s)&&32!==u.patchFlag&&Ue.push(u),u}const Je=Ze;function Ze(t,e=null,n=null,o=0,s=null,a=!1){if(t&&t!==dt||(t=Fe),qe(t)){const r=en(t,e,!0);return n&&an(r,n),He>0&&!a&&Ue&&(6&r.shapeFlag?Ue[Ue.indexOf(t)]=r:Ue.push(r)),r.patchFlag=-2,r}if(Rn(t)&&(t=t.__vccOpts),e){e=tn(e);let{class:t,style:n}=e;t&&!(0,i.Kg)(t)&&(e.class=(0,i.C4)(t)),(0,i.Gv)(n)&&((0,r.ju)(n)&&!(0,i.cy)(n)&&(n=(0,i.X$)({},n)),e.style=(0,i.Tr)(n))}const c=(0,i.Kg)(t)?1:Ne(t)?128:R(t)?64:(0,i.Gv)(t)?4:(0,i.Tn)(t)?2:0;return Ye(t,e,n,o,s,c,a,!0)}function tn(t){return t?(0,r.ju)(t)||Gt(t)?(0,i.X$)({},t):t:null}function en(t,e,n=!1,r=!1){const{props:o,ref:s,patchFlag:a,children:c,transition:u}=t,l=e?cn(o||{},e):o,h={__v_isVNode:!0,__v_skip:!0,type:t.type,props:l,key:l&&Qe(l),ref:e&&e.ref?n&&s?(0,i.cy)(s)?s.concat(Xe(e)):[s,Xe(e)]:Xe(e):s,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:c,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Pe?-1===a?16:16|a:a,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:u,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&en(t.ssContent),ssFallback:t.ssFallback&&en(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return u&&r&&V(h,u.clone(h)),h}function nn(t=" ",e=0){return Je(Le,null,t,e)}function rn(t,e){const n=Je(je,null,t);return n.staticCount=e,n}function on(t){return null==t||"boolean"===typeof t?Je(Fe):(0,i.cy)(t)?Je(Pe,null,t.slice()):qe(t)?sn(t):Je(Le,null,String(t))}function sn(t){return null===t.el&&-1!==t.patchFlag||t.memo?t:en(t)}function an(t,e){let n=0;const{shapeFlag:r}=t;if(null==e)e=null;else if((0,i.cy)(e))n=16;else if("object"===typeof e){if(65&r){const n=e.default;return void(n&&(n._c&&(n._d=!1),an(t,n()),n._c&&(n._d=!0)))}{n=32;const r=e._;r||Gt(e)?3===r&&A&&(1===A.slots._?e._=1:(e._=2,t.patchFlag|=1024)):e._ctx=A}}else(0,i.Tn)(e)?(e={default:e,_ctx:A},n=32):(e=String(e),64&r?(n=16,e=[nn(e)]):n=8);t.children=e,t.shapeFlag|=n}function cn(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const t in r)if("class"===t)e.class!==r.class&&(e.class=(0,i.C4)([e.class,r.class]));else if("style"===t)e.style=(0,i.Tr)([e.style,r.style]);else if((0,i.Mp)(t)){const n=e[t],o=r[t];!o||n===o||(0,i.cy)(n)&&n.includes(o)||(e[t]=n?[].concat(n,o):o)}else""!==t&&(e[t]=r[t])}return e}function un(t,e,n,r=null){s(t,e,7,[n,r])}const ln=Lt();let hn=0;function fn(t,e,n){const o=t.type,s=(e?e.appContext:t.appContext)||ln,a={uid:hn++,vnode:t,type:o,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new r.yC(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Xt(o,s),emitsOptions:Ae(o,s),emit:null,emitted:null,propsDefaults:i.MZ,inheritAttrs:o.inheritAttrs,ctx:i.MZ,data:i.MZ,props:i.MZ,attrs:i.MZ,slots:i.MZ,refs:i.MZ,setupState:i.MZ,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return a.ctx={_:a},a.root=e?e.root:a,a.emit=Se.bind(null,a),t.ce&&t.ce(a),a}let dn=null;const pn=()=>dn||A;let gn,mn;{const t=(0,i.We)(),e=(e,n)=>{let r;return(r=t[e])||(r=t[e]=[]),r.push(n),t=>{r.length>1?r.forEach((e=>e(t))):r[0](t)}};gn=e("__VUE_INSTANCE_SETTERS__",(t=>dn=t)),mn=e("__VUE_SSR_SETTERS__",(t=>Tn=t))}const yn=t=>{const e=dn;return gn(t),t.scope.on(),()=>{t.scope.off(),gn(e)}},vn=()=>{dn&&dn.scope.off(),gn(null)};function wn(t){return 4&t.vnode.shapeFlag}let bn,En,Tn=!1;function _n(t,e=!1,n=!1){e&&mn(e);const{props:r,children:i}=t.vnode,o=wn(t);zt(t,r,o,e),ie(t,i,n);const s=o?Sn(t,e):void 0;return e&&mn(!1),s}function Sn(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,wt);const{setup:s}=n;if(s){(0,r.C4)();const n=t.setupContext=s.length>1?Cn(t):null,c=yn(t),u=o(s,t,0,[t.props,n]),l=(0,i.yL)(u);if((0,r.bl)(),c(),!l&&!t.sp||G(t)||B(t),l){if(u.then(vn,vn),e)return u.then((n=>{An(t,n,e)})).catch((e=>{a(e,t,0)}));t.asyncDep=u}else An(t,u,e)}else In(t,e)}function An(t,e,n){(0,i.Tn)(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:(0,i.Gv)(e)&&(t.setupState=(0,r.Pr)(e)),In(t,n)}function In(t,e,n){const o=t.type;if(!t.render){if(!e&&bn&&!o.render){const e=o.template||It(t).template;if(e){0;const{isCustomElement:n,compilerOptions:r}=t.appContext.config,{delimiters:s,compilerOptions:a}=o,c=(0,i.X$)((0,i.X$)({isCustomElement:n,delimiters:s},r),a);o.render=bn(e,c)}}t.render=o.render||i.tE,En&&En(t)}{const e=yn(t);(0,r.C4)();try{Tt(t)}finally{(0,r.bl)(),e()}}}const xn={get(t,e){return(0,r.u4)(t,"get",""),t[e]}};function Cn(t){const e=e=>{t.exposed=e||{}};return{attrs:new Proxy(t.attrs,xn),slots:t.slots,emit:t.emit,expose:e}}function On(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy((0,r.Pr)((0,r.IG)(t.exposed)),{get(e,n){return n in e?e[n]:n in yt?yt[n](t):void 0},has(t,e){return e in t||e in yt}})):t.proxy}function Dn(t,e=!0){return(0,i.Tn)(t)?t.displayName||t.name:t.name||e&&t.__name}function Rn(t){return(0,i.Tn)(t)&&"__vccOpts"in t}const kn=(t,e)=>{const n=(0,r.EW)(t,e,Tn);return n};function Nn(t,e,n){const r=arguments.length;return 2===r?(0,i.Gv)(e)&&!(0,i.cy)(e)?qe(e)?Je(t,null,[e]):Je(t,e):Je(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):3===r&&qe(n)&&(n=[n]),Je(t,e,n))}const Mn="3.5.13"},5130:function(t,e,n){n.d(e,{Ef:function(){return K}});n(4114),n(7642),n(8004),n(3853),n(5876),n(2475),n(5024),n(1698),n(8992),n(4520),n(3949),n(1454),n(7550);var r=n(6768),i=n(4232);n(144);
/**
* @vue/runtime-dom v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let o;const s="undefined"!==typeof window&&window.trustedTypes;if(s)try{o=s.createPolicy("vue",{createHTML:t=>t})}catch(Q){}const a=o?t=>o.createHTML(t):t=>t,c="http://www.w3.org/2000/svg",u="http://www.w3.org/1998/Math/MathML",l="undefined"!==typeof document?document:null,h=l&&l.createElement("template"),f={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const i="svg"===e?l.createElementNS(c,t):"mathml"===e?l.createElementNS(u,t):n?l.createElement(t,{is:n}):l.createElement(t);return"select"===t&&r&&null!=r.multiple&&i.setAttribute("multiple",r.multiple),i},createText:t=>l.createTextNode(t),createComment:t=>l.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>l.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,i,o){const s=n?n.previousSibling:e.lastChild;if(i&&(i===o||i.nextSibling)){while(1)if(e.insertBefore(i.cloneNode(!0),n),i===o||!(i=i.nextSibling))break}else{h.innerHTML=a("svg"===r?`<svg>${t}</svg>`:"mathml"===r?`<math>${t}</math>`:t);const i=h.content;if("svg"===r||"mathml"===r){const t=i.firstChild;while(t.firstChild)i.appendChild(t.firstChild);i.removeChild(t)}e.insertBefore(i,n)}return[s?s.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},d=Symbol("_vtc"),p={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};r.QP;function g(t,e,n){const r=t[d];r&&(e=(e?[e,...r]:[...r]).join(" ")),null==e?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const m=Symbol("_vod"),y=Symbol("_vsh");const v=Symbol("");const w=/(^|;)\s*display\s*:/;function b(t,e,n){const r=t.style,o=(0,i.Kg)(n);let s=!1;if(n&&!o){if(e)if((0,i.Kg)(e))for(const t of e.split(";")){const e=t.slice(0,t.indexOf(":")).trim();null==n[e]&&T(r,e,"")}else for(const t in e)null==n[t]&&T(r,t,"");for(const t in n)"display"===t&&(s=!0),T(r,t,n[t])}else if(o){if(e!==n){const t=r[v];t&&(n+=";"+t),r.cssText=n,s=w.test(n)}}else e&&t.removeAttribute("style");m in t&&(t[m]=s?r.display:"",t[y]&&(r.display="none"))}const E=/\s*!important$/;function T(t,e,n){if((0,i.cy)(n))n.forEach((n=>T(t,e,n)));else if(null==n&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=A(t,e);E.test(n)?t.setProperty((0,i.Tg)(r),n.replace(E,""),"important"):t[r]=n}}const _=["Webkit","Moz","ms"],S={};function A(t,e){const n=S[e];if(n)return n;let r=(0,i.PT)(e);if("filter"!==r&&r in t)return S[e]=r;r=(0,i.ZH)(r);for(let i=0;i<_.length;i++){const n=_[i]+r;if(n in t)return S[e]=n}return e}const I="http://www.w3.org/1999/xlink";function x(t,e,n,r,o,s=(0,i.J$)(e)){r&&e.startsWith("xlink:")?null==n?t.removeAttributeNS(I,e.slice(6,e.length)):t.setAttributeNS(I,e,n):null==n||s&&!(0,i.Y2)(n)?t.removeAttribute(e):t.setAttribute(e,s?"":(0,i.Bm)(n)?String(n):n)}function C(t,e,n,r,o){if("innerHTML"===e||"textContent"===e)return void(null!=n&&(t[e]="innerHTML"===e?a(n):n));const s=t.tagName;if("value"===e&&"PROGRESS"!==s&&!s.includes("-")){const r="OPTION"===s?t.getAttribute("value")||"":t.value,i=null==n?"checkbox"===t.type?"on":"":String(n);return r===i&&"_value"in t||(t.value=i),null==n&&t.removeAttribute(e),void(t._value=n)}let c=!1;if(""===n||null==n){const r=typeof t[e];"boolean"===r?n=(0,i.Y2)(n):null==n&&"string"===r?(n="",c=!0):"number"===r&&(n=0,c=!0)}try{t[e]=n}catch(Q){0}c&&t.removeAttribute(o||e)}function O(t,e,n,r){t.addEventListener(e,n,r)}function D(t,e,n,r){t.removeEventListener(e,n,r)}const R=Symbol("_vei");function k(t,e,n,r,i=null){const o=t[R]||(t[R]={}),s=o[e];if(r&&s)s.value=r;else{const[n,a]=M(e);if(r){const s=o[e]=j(r,i);O(t,n,s,a)}else s&&(D(t,n,s,a),o[e]=void 0)}}const N=/(?:Once|Passive|Capture)$/;function M(t){let e;if(N.test(t)){let n;e={};while(n=t.match(N))t=t.slice(0,t.length-n[0].length),e[n[0].toLowerCase()]=!0}const n=":"===t[2]?t.slice(3):(0,i.Tg)(t.slice(2));return[n,e]}let P=0;const L=Promise.resolve(),F=()=>P||(L.then((()=>P=0)),P=Date.now());function j(t,e){const n=t=>{if(t._vts){if(t._vts<=n.attached)return}else t._vts=Date.now();(0,r.qL)(V(t,n.value),e,5,[t])};return n.value=t,n.attached=F(),n}function V(t,e){if((0,i.cy)(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map((t=>e=>!e._stopped&&t&&t(e)))}return e}const U=t=>111===t.charCodeAt(0)&&110===t.charCodeAt(1)&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,$=(t,e,n,r,o,s)=>{const a="svg"===o;"class"===e?g(t,r,a):"style"===e?b(t,n,r):(0,i.Mp)(e)?(0,i.CP)(e)||k(t,e,n,r,s):("."===e[0]?(e=e.slice(1),1):"^"===e[0]?(e=e.slice(1),0):B(t,e,r,a))?(C(t,e,r),t.tagName.includes("-")||"value"!==e&&"checked"!==e&&"selected"!==e||x(t,e,r,a,s,"value"!==e)):!t._isVueCE||!/[A-Z]/.test(e)&&(0,i.Kg)(r)?("true-value"===e?t._trueValue=r:"false-value"===e&&(t._falseValue=r),x(t,e,r,a)):C(t,(0,i.PT)(e),r,s,e)};function B(t,e,n,r){if(r)return"innerHTML"===e||"textContent"===e||!!(e in t&&U(e)&&(0,i.Tn)(n));if("spellcheck"===e||"draggable"===e||"translate"===e)return!1;if("form"===e)return!1;if("list"===e&&"INPUT"===t.tagName)return!1;if("type"===e&&"TEXTAREA"===t.tagName)return!1;if("width"===e||"height"===e){const e=t.tagName;if("IMG"===e||"VIDEO"===e||"CANVAS"===e||"SOURCE"===e)return!1}return(!U(e)||!(0,i.Kg)(n))&&e in t}
/*! #__NO_SIDE_EFFECTS__ */
"undefined"!==typeof HTMLElement&&HTMLElement;Symbol("_moveCb"),Symbol("_enterCb");Symbol("_assign");const H=(0,i.X$)({patchProp:$},f);let G;function z(){return G||(G=(0,r.K9)(H))}const K=(...t)=>{const e=z().createApp(...t);const{mount:n}=e;return e.mount=t=>{const r=W(t);if(!r)return;const o=e._component;(0,i.Tn)(o)||o.render||o.template||(o.template=r.innerHTML),1===r.nodeType&&(r.textContent="");const s=n(r,!1,q(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),s},e};function q(t){return t instanceof SVGElement?"svg":"function"===typeof MathMLElement&&t instanceof MathMLElement?"mathml":void 0}function W(t){if((0,i.Kg)(t)){const e=document.querySelector(t);return e}return t}},4232:function(t,e,n){n.d(e,{$3:function(){return d},$H:function(){return F},BH:function(){return z},BX:function(){return nt},Bm:function(){return E},C4:function(){return Y},CE:function(){return g},CP:function(){return u},DY:function(){return j},Gv:function(){return T},J$:function(){return Z},Kg:function(){return b},MZ:function(){return i},Mp:function(){return c},NO:function(){return a},Oj:function(){return o},PT:function(){return k},Qd:function(){return x},Ro:function(){return $},SU:function(){return O},TF:function(){return h},Tg:function(){return M},Tn:function(){return w},Tr:function(){return K},We:function(){return H},X$:function(){return l},Y2:function(){return tt},ZH:function(){return P},Zf:function(){return I},bB:function(){return U},cy:function(){return p},gd:function(){return v},pD:function(){return r},rU:function(){return L},tE:function(){return s},u3:function(){return rt},vM:function(){return m},yI:function(){return C},yL:function(){return _},yQ:function(){return V}});n(4114),n(8992),n(4520),n(3949),n(1454),n(8872);
/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
/*! #__NO_SIDE_EFFECTS__ */
function r(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return t=>t in e}const i={},o=[],s=()=>{},a=()=>!1,c=t=>111===t.charCodeAt(0)&&110===t.charCodeAt(1)&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),u=t=>t.startsWith("onUpdate:"),l=Object.assign,h=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},f=Object.prototype.hasOwnProperty,d=(t,e)=>f.call(t,e),p=Array.isArray,g=t=>"[object Map]"===A(t),m=t=>"[object Set]"===A(t),y=t=>"[object Date]"===A(t),v=t=>"[object RegExp]"===A(t),w=t=>"function"===typeof t,b=t=>"string"===typeof t,E=t=>"symbol"===typeof t,T=t=>null!==t&&"object"===typeof t,_=t=>(T(t)||w(t))&&w(t.then)&&w(t.catch),S=Object.prototype.toString,A=t=>S.call(t),I=t=>A(t).slice(8,-1),x=t=>"[object Object]"===A(t),C=t=>b(t)&&"NaN"!==t&&"-"!==t[0]&&""+parseInt(t,10)===t,O=r(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),D=t=>{const e=Object.create(null);return n=>{const r=e[n];return r||(e[n]=t(n))}},R=/-(\w)/g,k=D((t=>t.replace(R,((t,e)=>e?e.toUpperCase():"")))),N=/\B([A-Z])/g,M=D((t=>t.replace(N,"-$1").toLowerCase())),P=D((t=>t.charAt(0).toUpperCase()+t.slice(1))),L=D((t=>{const e=t?`on${P(t)}`:"";return e})),F=(t,e)=>!Object.is(t,e),j=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},V=(t,e,n,r=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:r,value:n})},U=t=>{const e=parseFloat(t);return isNaN(e)?t:e},$=t=>{const e=b(t)?Number(t):NaN;return isNaN(e)?t:e};let B;const H=()=>B||(B="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof self?self:"undefined"!==typeof window?window:"undefined"!==typeof n.g?n.g:{});const G="Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt,console,Error,Symbol",z=r(G);function K(t){if(p(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],i=b(r)?X(r):K(r);if(i)for(const t in i)e[t]=i[t]}return e}if(b(t)||T(t))return t}const q=/;(?![^(]*\))/g,W=/:([^]+)/,Q=/\/\*[^]*?\*\//g;function X(t){const e={};return t.replace(Q,"").split(q).forEach((t=>{if(t){const n=t.split(W);n.length>1&&(e[n[0].trim()]=n[1].trim())}})),e}function Y(t){let e="";if(b(t))e=t;else if(p(t))for(let n=0;n<t.length;n++){const r=Y(t[n]);r&&(e+=r+" ")}else if(T(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const J="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Z=r(J);function tt(t){return!!t||""===t}function et(t,e){if(t.length!==e.length)return!1;let n=!0;for(let r=0;n&&r<t.length;r++)n=nt(t[r],e[r]);return n}function nt(t,e){if(t===e)return!0;let n=y(t),r=y(e);if(n||r)return!(!n||!r)&&t.getTime()===e.getTime();if(n=E(t),r=E(e),n||r)return t===e;if(n=p(t),r=p(e),n||r)return!(!n||!r)&&et(t,e);if(n=T(t),r=T(e),n||r){if(!n||!r)return!1;const i=Object.keys(t).length,o=Object.keys(e).length;if(i!==o)return!1;for(const n in t){const r=t.hasOwnProperty(n),i=e.hasOwnProperty(n);if(r&&!i||!r&&i||!nt(t[n],e[n]))return!1}}return String(t)===String(e)}function rt(t,e){return t.findIndex((t=>nt(t,e)))}},1241:function(t,e){e.A=(t,e)=>{const n=t.__vccOpts||t;for(const[r,i]of e)n[r]=i;return n}},9306:function(t,e,n){var r=n(4901),i=n(6823),o=TypeError;t.exports=function(t){if(r(t))return t;throw new o(i(t)+" is not a function")}},3506:function(t,e,n){var r=n(3925),i=String,o=TypeError;t.exports=function(t){if(r(t))return t;throw new o("Can't set "+i(t)+" as a prototype")}},7080:function(t,e,n){var r=n(4402).has;t.exports=function(t){return r(t),t}},6469:function(t,e,n){var r=n(8227),i=n(2360),o=n(4913).f,s=r("unscopables"),a=Array.prototype;void 0===a[s]&&o(a,s,{configurable:!0,value:i(null)}),t.exports=function(t){a[s][t]=!0}},679:function(t,e,n){var r=n(1625),i=TypeError;t.exports=function(t,e){if(r(e,t))return t;throw new i("Incorrect invocation")}},8551:function(t,e,n){var r=n(34),i=String,o=TypeError;t.exports=function(t){if(r(t))return t;throw new o(i(t)+" is not an object")}},7811:function(t){t.exports="undefined"!=typeof ArrayBuffer&&"undefined"!=typeof DataView},7394:function(t,e,n){var r=n(4576),i=n(6706),o=n(2195),s=r.ArrayBuffer,a=r.TypeError;t.exports=s&&i(s.prototype,"byteLength","get")||function(t){if("ArrayBuffer"!==o(t))throw new a("ArrayBuffer expected");return t.byteLength}},3238:function(t,e,n){var r=n(4576),i=n(7476),o=n(7394),s=r.ArrayBuffer,a=s&&s.prototype,c=a&&i(a.slice);t.exports=function(t){if(0!==o(t))return!1;if(!c)return!1;try{return c(t,0,0),!1}catch(e){return!0}}},5169:function(t,e,n){var r=n(3238),i=TypeError;t.exports=function(t){if(r(t))throw new i("ArrayBuffer is detached");return t}},5636:function(t,e,n){var r=n(4576),i=n(9504),o=n(6706),s=n(7696),a=n(5169),c=n(7394),u=n(4483),l=n(1548),h=r.structuredClone,f=r.ArrayBuffer,d=r.DataView,p=Math.min,g=f.prototype,m=d.prototype,y=i(g.slice),v=o(g,"resizable","get"),w=o(g,"maxByteLength","get"),b=i(m.getInt8),E=i(m.setInt8);t.exports=(l||u)&&function(t,e,n){var r,i=c(t),o=void 0===e?i:s(e),g=!v||!v(t);if(a(t),l&&(t=h(t,{transfer:[t]}),i===o&&(n||g)))return t;if(i>=o&&(!n||g))r=y(t,0,o);else{var m=n&&!g&&w?{maxByteLength:w(t)}:void 0;r=new f(o,m);for(var T=new d(t),_=new d(r),S=p(o,i),A=0;A<S;A++)E(_,A,b(T,A))}return l||u(t),r}},4644:function(t,e,n){var r,i,o,s=n(7811),a=n(3724),c=n(4576),u=n(4901),l=n(34),h=n(9297),f=n(6955),d=n(6823),p=n(6699),g=n(6840),m=n(2106),y=n(1625),v=n(2787),w=n(2967),b=n(8227),E=n(3392),T=n(1181),_=T.enforce,S=T.get,A=c.Int8Array,I=A&&A.prototype,x=c.Uint8ClampedArray,C=x&&x.prototype,O=A&&v(A),D=I&&v(I),R=Object.prototype,k=c.TypeError,N=b("toStringTag"),M=E("TYPED_ARRAY_TAG"),P="TypedArrayConstructor",L=s&&!!w&&"Opera"!==f(c.opera),F=!1,j={Int8Array:1,Uint8Array:1,Uint8ClampedArray:1,Int16Array:2,Uint16Array:2,Int32Array:4,Uint32Array:4,Float32Array:4,Float64Array:8},V={BigInt64Array:8,BigUint64Array:8},U=function(t){if(!l(t))return!1;var e=f(t);return"DataView"===e||h(j,e)||h(V,e)},$=function(t){var e=v(t);if(l(e)){var n=S(e);return n&&h(n,P)?n[P]:$(e)}},B=function(t){if(!l(t))return!1;var e=f(t);return h(j,e)||h(V,e)},H=function(t){if(B(t))return t;throw new k("Target is not a typed array")},G=function(t){if(u(t)&&(!w||y(O,t)))return t;throw new k(d(t)+" is not a typed array constructor")},z=function(t,e,n,r){if(a){if(n)for(var i in j){var o=c[i];if(o&&h(o.prototype,t))try{delete o.prototype[t]}catch(s){try{o.prototype[t]=e}catch(u){}}}D[t]&&!n||g(D,t,n?e:L&&I[t]||e,r)}},K=function(t,e,n){var r,i;if(a){if(w){if(n)for(r in j)if(i=c[r],i&&h(i,t))try{delete i[t]}catch(o){}if(O[t]&&!n)return;try{return g(O,t,n?e:L&&O[t]||e)}catch(o){}}for(r in j)i=c[r],!i||i[t]&&!n||g(i,t,e)}};for(r in j)i=c[r],o=i&&i.prototype,o?_(o)[P]=i:L=!1;for(r in V)i=c[r],o=i&&i.prototype,o&&(_(o)[P]=i);if((!L||!u(O)||O===Function.prototype)&&(O=function(){throw new k("Incorrect invocation")},L))for(r in j)c[r]&&w(c[r],O);if((!L||!D||D===R)&&(D=O.prototype,L))for(r in j)c[r]&&w(c[r].prototype,D);if(L&&v(C)!==D&&w(C,D),a&&!h(D,N))for(r in F=!0,m(D,N,{configurable:!0,get:function(){return l(this)?this[M]:void 0}}),j)c[r]&&p(c[r],M,r);t.exports={NATIVE_ARRAY_BUFFER_VIEWS:L,TYPED_ARRAY_TAG:F&&M,aTypedArray:H,aTypedArrayConstructor:G,exportTypedArrayMethod:z,exportTypedArrayStaticMethod:K,getTypedArrayConstructor:$,isView:U,isTypedArray:B,TypedArray:O,TypedArrayPrototype:D}},5370:function(t,e,n){var r=n(6198);t.exports=function(t,e,n){var i=0,o=arguments.length>2?n:r(e),s=new t(o);while(o>i)s[i]=e[i++];return s}},9617:function(t,e,n){var r=n(5397),i=n(5610),o=n(6198),s=function(t){return function(e,n,s){var a=r(e),c=o(a);if(0===c)return!t&&-1;var u,l=i(s,c);if(t&&n!==n){while(c>l)if(u=a[l++],u!==u)return!0}else for(;c>l;l++)if((t||l in a)&&a[l]===n)return t||l||0;return!t&&-1}};t.exports={includes:s(!0),indexOf:s(!1)}},4527:function(t,e,n){var r=n(3724),i=n(4376),o=TypeError,s=Object.getOwnPropertyDescriptor,a=r&&!function(){if(void 0!==this)return!0;try{Object.defineProperty([],"length",{writable:!1}).length=1}catch(t){return t instanceof TypeError}}();t.exports=a?function(t,e){if(i(t)&&!s(t,"length").writable)throw new o("Cannot set read only .length");return t.length=e}:function(t,e){return t.length=e}},7628:function(t,e,n){var r=n(6198);t.exports=function(t,e){for(var n=r(t),i=new e(n),o=0;o<n;o++)i[o]=t[n-o-1];return i}},9928:function(t,e,n){var r=n(6198),i=n(1291),o=RangeError;t.exports=function(t,e,n,s){var a=r(t),c=i(n),u=c<0?a+c:c;if(u>=a||u<0)throw new o("Incorrect index");for(var l=new e(a),h=0;h<a;h++)l[h]=h===u?s:t[h];return l}},6319:function(t,e,n){var r=n(8551),i=n(9539);t.exports=function(t,e,n,o){try{return o?e(r(n)[0],n[1]):e(n)}catch(s){i(t,"throw",s)}}},2195:function(t,e,n){var r=n(9504),i=r({}.toString),o=r("".slice);t.exports=function(t){return o(i(t),8,-1)}},6955:function(t,e,n){var r=n(2140),i=n(4901),o=n(2195),s=n(8227),a=s("toStringTag"),c=Object,u="Arguments"===o(function(){return arguments}()),l=function(t,e){try{return t[e]}catch(n){}};t.exports=r?o:function(t){var e,n,r;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=l(e=c(t),a))?n:u?o(e):"Object"===(r=o(e))&&i(e.callee)?"Arguments":r}},7740:function(t,e,n){var r=n(9297),i=n(5031),o=n(7347),s=n(4913);t.exports=function(t,e,n){for(var a=i(e),c=s.f,u=o.f,l=0;l<a.length;l++){var h=a[l];r(t,h)||n&&r(n,h)||c(t,h,u(e,h))}}},2211:function(t,e,n){var r=n(9039);t.exports=!r((function(){function t(){}return t.prototype.constructor=null,Object.getPrototypeOf(new t)!==t.prototype}))},2529:function(t){t.exports=function(t,e){return{value:t,done:e}}},6699:function(t,e,n){var r=n(3724),i=n(4913),o=n(6980);t.exports=r?function(t,e,n){return i.f(t,e,o(1,n))}:function(t,e,n){return t[e]=n,t}},6980:function(t){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},4659:function(t,e,n){var r=n(3724),i=n(4913),o=n(6980);t.exports=function(t,e,n){r?i.f(t,e,o(0,n)):t[e]=n}},2106:function(t,e,n){var r=n(283),i=n(4913);t.exports=function(t,e,n){return n.get&&r(n.get,e,{getter:!0}),n.set&&r(n.set,e,{setter:!0}),i.f(t,e,n)}},6840:function(t,e,n){var r=n(4901),i=n(4913),o=n(283),s=n(9433);t.exports=function(t,e,n,a){a||(a={});var c=a.enumerable,u=void 0!==a.name?a.name:e;if(r(n)&&o(n,u,a),a.global)c?t[e]=n:s(e,n);else{try{a.unsafe?t[e]&&(c=!0):delete t[e]}catch(l){}c?t[e]=n:i.f(t,e,{value:n,enumerable:!1,configurable:!a.nonConfigurable,writable:!a.nonWritable})}return t}},6279:function(t,e,n){var r=n(6840);t.exports=function(t,e,n){for(var i in e)r(t,i,e[i],n);return t}},9433:function(t,e,n){var r=n(4576),i=Object.defineProperty;t.exports=function(t,e){try{i(r,t,{value:e,configurable:!0,writable:!0})}catch(n){r[t]=e}return e}},3724:function(t,e,n){var r=n(9039);t.exports=!r((function(){return 7!==Object.defineProperty({},1,{get:function(){return 7}})[1]}))},4483:function(t,e,n){var r,i,o,s,a=n(4576),c=n(9429),u=n(1548),l=a.structuredClone,h=a.ArrayBuffer,f=a.MessageChannel,d=!1;if(u)d=function(t){l(t,{transfer:[t]})};else if(h)try{f||(r=c("worker_threads"),r&&(f=r.MessageChannel)),f&&(i=new f,o=new h(2),s=function(t){i.port1.postMessage(null,[t])},2===o.byteLength&&(s(o),0===o.byteLength&&(d=s)))}catch(p){}t.exports=d},4055:function(t,e,n){var r=n(4576),i=n(34),o=r.document,s=i(o)&&i(o.createElement);t.exports=function(t){return s?o.createElement(t):{}}},6837:function(t){var e=TypeError,n=9007199254740991;t.exports=function(t){if(t>n)throw e("Maximum allowed index exceeded");return t}},5002:function(t){t.exports={IndexSizeError:{s:"INDEX_SIZE_ERR",c:1,m:1},DOMStringSizeError:{s:"DOMSTRING_SIZE_ERR",c:2,m:0},HierarchyRequestError:{s:"HIERARCHY_REQUEST_ERR",c:3,m:1},WrongDocumentError:{s:"WRONG_DOCUMENT_ERR",c:4,m:1},InvalidCharacterError:{s:"INVALID_CHARACTER_ERR",c:5,m:1},NoDataAllowedError:{s:"NO_DATA_ALLOWED_ERR",c:6,m:0},NoModificationAllowedError:{s:"NO_MODIFICATION_ALLOWED_ERR",c:7,m:1},NotFoundError:{s:"NOT_FOUND_ERR",c:8,m:1},NotSupportedError:{s:"NOT_SUPPORTED_ERR",c:9,m:1},InUseAttributeError:{s:"INUSE_ATTRIBUTE_ERR",c:10,m:1},InvalidStateError:{s:"INVALID_STATE_ERR",c:11,m:1},SyntaxError:{s:"SYNTAX_ERR",c:12,m:1},InvalidModificationError:{s:"INVALID_MODIFICATION_ERR",c:13,m:1},NamespaceError:{s:"NAMESPACE_ERR",c:14,m:1},InvalidAccessError:{s:"INVALID_ACCESS_ERR",c:15,m:1},ValidationError:{s:"VALIDATION_ERR",c:16,m:0},TypeMismatchError:{s:"TYPE_MISMATCH_ERR",c:17,m:1},SecurityError:{s:"SECURITY_ERR",c:18,m:1},NetworkError:{s:"NETWORK_ERR",c:19,m:1},AbortError:{s:"ABORT_ERR",c:20,m:1},URLMismatchError:{s:"URL_MISMATCH_ERR",c:21,m:1},QuotaExceededError:{s:"QUOTA_EXCEEDED_ERR",c:22,m:1},TimeoutError:{s:"TIMEOUT_ERR",c:23,m:1},InvalidNodeTypeError:{s:"INVALID_NODE_TYPE_ERR",c:24,m:1},DataCloneError:{s:"DATA_CLONE_ERR",c:25,m:1}}},8727:function(t){t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},8574:function(t,e,n){var r=n(4215);t.exports="NODE"===r},2839:function(t,e,n){var r=n(4576),i=r.navigator,o=i&&i.userAgent;t.exports=o?String(o):""},9519:function(t,e,n){var r,i,o=n(4576),s=n(2839),a=o.process,c=o.Deno,u=a&&a.versions||c&&c.version,l=u&&u.v8;l&&(r=l.split("."),i=r[0]>0&&r[0]<4?1:+(r[0]+r[1])),!i&&s&&(r=s.match(/Edge\/(\d+)/),(!r||r[1]>=74)&&(r=s.match(/Chrome\/(\d+)/),r&&(i=+r[1]))),t.exports=i},4215:function(t,e,n){var r=n(4576),i=n(2839),o=n(2195),s=function(t){return i.slice(0,t.length)===t};t.exports=function(){return s("Bun/")?"BUN":s("Cloudflare-Workers")?"CLOUDFLARE":s("Deno/")?"DENO":s("Node.js/")?"NODE":r.Bun&&"string"==typeof Bun.version?"BUN":r.Deno&&"object"==typeof Deno.version?"DENO":"process"===o(r.process)?"NODE":r.window&&r.document?"BROWSER":"REST"}()},6193:function(t,e,n){var r=n(9504),i=Error,o=r("".replace),s=function(t){return String(new i(t).stack)}("zxcasd"),a=/\n\s*at [^:]*:[^\n]*/,c=a.test(s);t.exports=function(t,e){if(c&&"string"==typeof t&&!i.prepareStackTrace)while(e--)t=o(t,a,"");return t}},6518:function(t,e,n){var r=n(4576),i=n(7347).f,o=n(6699),s=n(6840),a=n(9433),c=n(7740),u=n(2796);t.exports=function(t,e){var n,l,h,f,d,p,g=t.target,m=t.global,y=t.stat;if(l=m?r:y?r[g]||a(g,{}):r[g]&&r[g].prototype,l)for(h in e){if(d=e[h],t.dontCallGetSet?(p=i(l,h),f=p&&p.value):f=l[h],n=u(m?h:g+(y?".":"#")+h,t.forced),!n&&void 0!==f){if(typeof d==typeof f)continue;c(d,f)}(t.sham||f&&f.sham)&&o(d,"sham",!0),s(l,h,d,t)}}},9039:function(t){t.exports=function(t){try{return!!t()}catch(e){return!0}}},6080:function(t,e,n){var r=n(7476),i=n(9306),o=n(616),s=r(r.bind);t.exports=function(t,e){return i(t),void 0===e?t:o?s(t,e):function(){return t.apply(e,arguments)}}},616:function(t,e,n){var r=n(9039);t.exports=!r((function(){var t=function(){}.bind();return"function"!=typeof t||t.hasOwnProperty("prototype")}))},9565:function(t,e,n){var r=n(616),i=Function.prototype.call;t.exports=r?i.bind(i):function(){return i.apply(i,arguments)}},350:function(t,e,n){var r=n(3724),i=n(9297),o=Function.prototype,s=r&&Object.getOwnPropertyDescriptor,a=i(o,"name"),c=a&&"something"===function(){}.name,u=a&&(!r||r&&s(o,"name").configurable);t.exports={EXISTS:a,PROPER:c,CONFIGURABLE:u}},6706:function(t,e,n){var r=n(9504),i=n(9306);t.exports=function(t,e,n){try{return r(i(Object.getOwnPropertyDescriptor(t,e)[n]))}catch(o){}}},7476:function(t,e,n){var r=n(2195),i=n(9504);t.exports=function(t){if("Function"===r(t))return i(t)}},9504:function(t,e,n){var r=n(616),i=Function.prototype,o=i.call,s=r&&i.bind.bind(o,o);t.exports=r?s:function(t){return function(){return o.apply(t,arguments)}}},9429:function(t,e,n){var r=n(4576),i=n(8574);t.exports=function(t){if(i){try{return r.process.getBuiltinModule(t)}catch(e){}try{return Function('return require("'+t+'")')()}catch(e){}}}},4124:function(t,e,n){var r=n(4576);t.exports=function(t,e){var n=r[t],i=n&&n.prototype;return i&&i[e]}},7751:function(t,e,n){var r=n(4576),i=n(4901),o=function(t){return i(t)?t:void 0};t.exports=function(t,e){return arguments.length<2?o(r[t]):r[t]&&r[t][e]}},1767:function(t){t.exports=function(t){return{iterator:t,next:t.next,done:!1}}},851:function(t,e,n){var r=n(6955),i=n(5966),o=n(4117),s=n(6269),a=n(8227),c=a("iterator");t.exports=function(t){if(!o(t))return i(t,c)||i(t,"@@iterator")||s[r(t)]}},81:function(t,e,n){var r=n(9565),i=n(9306),o=n(8551),s=n(6823),a=n(851),c=TypeError;t.exports=function(t,e){var n=arguments.length<2?a(t):e;if(i(n))return o(r(n,t));throw new c(s(t)+" is not iterable")}},5966:function(t,e,n){var r=n(9306),i=n(4117);t.exports=function(t,e){var n=t[e];return i(n)?void 0:r(n)}},3789:function(t,e,n){var r=n(9306),i=n(8551),o=n(9565),s=n(1291),a=n(1767),c="Invalid size",u=RangeError,l=TypeError,h=Math.max,f=function(t,e){this.set=t,this.size=h(e,0),this.has=r(t.has),this.keys=r(t.keys)};f.prototype={getIterator:function(){return a(i(o(this.keys,this.set)))},includes:function(t){return o(this.has,this.set,t)}},t.exports=function(t){i(t);var e=+t.size;if(e!==e)throw new l(c);var n=s(e);if(n<0)throw new u(c);return new f(t,n)}},4576:function(t,e,n){var r=function(t){return t&&t.Math===Math&&t};t.exports=r("object"==typeof globalThis&&globalThis)||r("object"==typeof window&&window)||r("object"==typeof self&&self)||r("object"==typeof n.g&&n.g)||r("object"==typeof this&&this)||function(){return this}()||Function("return this")()},9297:function(t,e,n){var r=n(9504),i=n(8981),o=r({}.hasOwnProperty);t.exports=Object.hasOwn||function(t,e){return o(i(t),e)}},421:function(t){t.exports={}},397:function(t,e,n){var r=n(7751);t.exports=r("document","documentElement")},5917:function(t,e,n){var r=n(3724),i=n(9039),o=n(4055);t.exports=!r&&!i((function(){return 7!==Object.defineProperty(o("div"),"a",{get:function(){return 7}}).a}))},7055:function(t,e,n){var r=n(9504),i=n(9039),o=n(2195),s=Object,a=r("".split);t.exports=i((function(){return!s("z").propertyIsEnumerable(0)}))?function(t){return"String"===o(t)?a(t,""):s(t)}:s},3167:function(t,e,n){var r=n(4901),i=n(34),o=n(2967);t.exports=function(t,e,n){var s,a;return o&&r(s=e.constructor)&&s!==n&&i(a=s.prototype)&&a!==n.prototype&&o(t,a),t}},3706:function(t,e,n){var r=n(9504),i=n(4901),o=n(7629),s=r(Function.toString);i(o.inspectSource)||(o.inspectSource=function(t){return s(t)}),t.exports=o.inspectSource},1181:function(t,e,n){var r,i,o,s=n(8622),a=n(4576),c=n(34),u=n(6699),l=n(9297),h=n(7629),f=n(6119),d=n(421),p="Object already initialized",g=a.TypeError,m=a.WeakMap,y=function(t){return o(t)?i(t):r(t,{})},v=function(t){return function(e){var n;if(!c(e)||(n=i(e)).type!==t)throw new g("Incompatible receiver, "+t+" required");return n}};if(s||h.state){var w=h.state||(h.state=new m);w.get=w.get,w.has=w.has,w.set=w.set,r=function(t,e){if(w.has(t))throw new g(p);return e.facade=t,w.set(t,e),e},i=function(t){return w.get(t)||{}},o=function(t){return w.has(t)}}else{var b=f("state");d[b]=!0,r=function(t,e){if(l(t,b))throw new g(p);return e.facade=t,u(t,b,e),e},i=function(t){return l(t,b)?t[b]:{}},o=function(t){return l(t,b)}}t.exports={set:r,get:i,has:o,enforce:y,getterFor:v}},4209:function(t,e,n){var r=n(8227),i=n(6269),o=r("iterator"),s=Array.prototype;t.exports=function(t){return void 0!==t&&(i.Array===t||s[o]===t)}},4376:function(t,e,n){var r=n(2195);t.exports=Array.isArray||function(t){return"Array"===r(t)}},1108:function(t,e,n){var r=n(6955);t.exports=function(t){var e=r(t);return"BigInt64Array"===e||"BigUint64Array"===e}},4901:function(t){var e="object"==typeof document&&document.all;t.exports="undefined"==typeof e&&void 0!==e?function(t){return"function"==typeof t||t===e}:function(t){return"function"==typeof t}},2796:function(t,e,n){var r=n(9039),i=n(4901),o=/#|\.prototype\./,s=function(t,e){var n=c[a(t)];return n===l||n!==u&&(i(e)?r(e):!!e)},a=s.normalize=function(t){return String(t).replace(o,".").toLowerCase()},c=s.data={},u=s.NATIVE="N",l=s.POLYFILL="P";t.exports=s},4117:function(t){t.exports=function(t){return null===t||void 0===t}},34:function(t,e,n){var r=n(4901);t.exports=function(t){return"object"==typeof t?null!==t:r(t)}},3925:function(t,e,n){var r=n(34);t.exports=function(t){return r(t)||null===t}},6395:function(t){t.exports=!1},757:function(t,e,n){var r=n(7751),i=n(4901),o=n(1625),s=n(7040),a=Object;t.exports=s?function(t){return"symbol"==typeof t}:function(t){var e=r("Symbol");return i(e)&&o(e.prototype,a(t))}},507:function(t,e,n){var r=n(9565);t.exports=function(t,e,n){var i,o,s=n?t:t.iterator,a=t.next;while(!(i=r(a,s)).done)if(o=e(i.value),void 0!==o)return o}},2652:function(t,e,n){var r=n(6080),i=n(9565),o=n(8551),s=n(6823),a=n(4209),c=n(6198),u=n(1625),l=n(81),h=n(851),f=n(9539),d=TypeError,p=function(t,e){this.stopped=t,this.result=e},g=p.prototype;t.exports=function(t,e,n){var m,y,v,w,b,E,T,_=n&&n.that,S=!(!n||!n.AS_ENTRIES),A=!(!n||!n.IS_RECORD),I=!(!n||!n.IS_ITERATOR),x=!(!n||!n.INTERRUPTED),C=r(e,_),O=function(t){return m&&f(m,"normal",t),new p(!0,t)},D=function(t){return S?(o(t),x?C(t[0],t[1],O):C(t[0],t[1])):x?C(t,O):C(t)};if(A)m=t.iterator;else if(I)m=t;else{if(y=h(t),!y)throw new d(s(t)+" is not iterable");if(a(y)){for(v=0,w=c(t);w>v;v++)if(b=D(t[v]),b&&u(g,b))return b;return new p(!1)}m=l(t,y)}E=A?t.next:m.next;while(!(T=i(E,m)).done){try{b=D(T.value)}catch(R){f(m,"throw",R)}if("object"==typeof b&&b&&u(g,b))return b}return new p(!1)}},9539:function(t,e,n){var r=n(9565),i=n(8551),o=n(5966);t.exports=function(t,e,n){var s,a;i(t);try{if(s=o(t,"return"),!s){if("throw"===e)throw n;return n}s=r(s,t)}catch(c){a=!0,s=c}if("throw"===e)throw n;if(a)throw s;return i(s),n}},9462:function(t,e,n){var r=n(9565),i=n(2360),o=n(6699),s=n(6279),a=n(8227),c=n(1181),u=n(5966),l=n(7657).IteratorPrototype,h=n(2529),f=n(9539),d=a("toStringTag"),p="IteratorHelper",g="WrapForValidIterator",m=c.set,y=function(t){var e=c.getterFor(t?g:p);return s(i(l),{next:function(){var n=e(this);if(t)return n.nextHandler();try{var r=n.done?void 0:n.nextHandler();return h(r,n.done)}catch(i){throw n.done=!0,i}},return:function(){var n=e(this),i=n.iterator;if(n.done=!0,t){var o=u(i,"return");return o?r(o,i):h(void 0,!0)}if(n.inner)try{f(n.inner.iterator,"normal")}catch(s){return f(i,"throw",s)}return i&&f(i,"normal"),h(void 0,!0)}})},v=y(!0),w=y(!1);o(w,d,"Iterator Helper"),t.exports=function(t,e){var n=function(n,r){r?(r.iterator=n.iterator,r.next=n.next):r=n,r.type=e?g:p,r.nextHandler=t,r.counter=0,r.done=!1,m(this,r)};return n.prototype=e?v:w,n}},713:function(t,e,n){var r=n(9565),i=n(9306),o=n(8551),s=n(1767),a=n(9462),c=n(6319),u=a((function(){var t=this.iterator,e=o(r(this.next,t)),n=this.done=!!e.done;if(!n)return c(t,this.mapper,[e.value,this.counter++],!0)}));t.exports=function(t){return o(this),i(t),new u(s(this),{mapper:t})}},7657:function(t,e,n){var r,i,o,s=n(9039),a=n(4901),c=n(34),u=n(2360),l=n(2787),h=n(6840),f=n(8227),d=n(6395),p=f("iterator"),g=!1;[].keys&&(o=[].keys(),"next"in o?(i=l(l(o)),i!==Object.prototype&&(r=i)):g=!0);var m=!c(r)||s((function(){var t={};return r[p].call(t)!==t}));m?r={}:d&&(r=u(r)),a(r[p])||h(r,p,(function(){return this})),t.exports={IteratorPrototype:r,BUGGY_SAFARI_ITERATORS:g}},6269:function(t){t.exports={}},6198:function(t,e,n){var r=n(8014);t.exports=function(t){return r(t.length)}},283:function(t,e,n){var r=n(9504),i=n(9039),o=n(4901),s=n(9297),a=n(3724),c=n(350).CONFIGURABLE,u=n(3706),l=n(1181),h=l.enforce,f=l.get,d=String,p=Object.defineProperty,g=r("".slice),m=r("".replace),y=r([].join),v=a&&!i((function(){return 8!==p((function(){}),"length",{value:8}).length})),w=String(String).split("String"),b=t.exports=function(t,e,n){"Symbol("===g(d(e),0,7)&&(e="["+m(d(e),/^Symbol\(([^)]*)\).*$/,"$1")+"]"),n&&n.getter&&(e="get "+e),n&&n.setter&&(e="set "+e),(!s(t,"name")||c&&t.name!==e)&&(a?p(t,"name",{value:e,configurable:!0}):t.name=e),v&&n&&s(n,"arity")&&t.length!==n.arity&&p(t,"length",{value:n.arity});try{n&&s(n,"constructor")&&n.constructor?a&&p(t,"prototype",{writable:!1}):t.prototype&&(t.prototype=void 0)}catch(i){}var r=h(t);return s(r,"source")||(r.source=y(w,"string"==typeof e?e:"")),t};Function.prototype.toString=b((function(){return o(this)&&f(this).source||u(this)}),"toString")},741:function(t){var e=Math.ceil,n=Math.floor;t.exports=Math.trunc||function(t){var r=+t;return(r>0?n:e)(r)}},2603:function(t,e,n){var r=n(655);t.exports=function(t,e){return void 0===t?arguments.length<2?"":e:r(t)}},2360:function(t,e,n){var r,i=n(8551),o=n(6801),s=n(8727),a=n(421),c=n(397),u=n(4055),l=n(6119),h=">",f="<",d="prototype",p="script",g=l("IE_PROTO"),m=function(){},y=function(t){return f+p+h+t+f+"/"+p+h},v=function(t){t.write(y("")),t.close();var e=t.parentWindow.Object;return t=null,e},w=function(){var t,e=u("iframe"),n="java"+p+":";return e.style.display="none",c.appendChild(e),e.src=String(n),t=e.contentWindow.document,t.open(),t.write(y("document.F=Object")),t.close(),t.F},b=function(){try{r=new ActiveXObject("htmlfile")}catch(e){}b="undefined"!=typeof document?document.domain&&r?v(r):w():v(r);var t=s.length;while(t--)delete b[d][s[t]];return b()};a[g]=!0,t.exports=Object.create||function(t,e){var n;return null!==t?(m[d]=i(t),n=new m,m[d]=null,n[g]=t):n=b(),void 0===e?n:o.f(n,e)}},6801:function(t,e,n){var r=n(3724),i=n(8686),o=n(4913),s=n(8551),a=n(5397),c=n(1072);e.f=r&&!i?Object.defineProperties:function(t,e){s(t);var n,r=a(e),i=c(e),u=i.length,l=0;while(u>l)o.f(t,n=i[l++],r[n]);return t}},4913:function(t,e,n){var r=n(3724),i=n(5917),o=n(8686),s=n(8551),a=n(6969),c=TypeError,u=Object.defineProperty,l=Object.getOwnPropertyDescriptor,h="enumerable",f="configurable",d="writable";e.f=r?o?function(t,e,n){if(s(t),e=a(e),s(n),"function"===typeof t&&"prototype"===e&&"value"in n&&d in n&&!n[d]){var r=l(t,e);r&&r[d]&&(t[e]=n.value,n={configurable:f in n?n[f]:r[f],enumerable:h in n?n[h]:r[h],writable:!1})}return u(t,e,n)}:u:function(t,e,n){if(s(t),e=a(e),s(n),i)try{return u(t,e,n)}catch(r){}if("get"in n||"set"in n)throw new c("Accessors not supported");return"value"in n&&(t[e]=n.value),t}},7347:function(t,e,n){var r=n(3724),i=n(9565),o=n(8773),s=n(6980),a=n(5397),c=n(6969),u=n(9297),l=n(5917),h=Object.getOwnPropertyDescriptor;e.f=r?h:function(t,e){if(t=a(t),e=c(e),l)try{return h(t,e)}catch(n){}if(u(t,e))return s(!i(o.f,t,e),t[e])}},8480:function(t,e,n){var r=n(1828),i=n(8727),o=i.concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return r(t,o)}},3717:function(t,e){e.f=Object.getOwnPropertySymbols},2787:function(t,e,n){var r=n(9297),i=n(4901),o=n(8981),s=n(6119),a=n(2211),c=s("IE_PROTO"),u=Object,l=u.prototype;t.exports=a?u.getPrototypeOf:function(t){var e=o(t);if(r(e,c))return e[c];var n=e.constructor;return i(n)&&e instanceof n?n.prototype:e instanceof u?l:null}},1625:function(t,e,n){var r=n(9504);t.exports=r({}.isPrototypeOf)},1828:function(t,e,n){var r=n(9504),i=n(9297),o=n(5397),s=n(9617).indexOf,a=n(421),c=r([].push);t.exports=function(t,e){var n,r=o(t),u=0,l=[];for(n in r)!i(a,n)&&i(r,n)&&c(l,n);while(e.length>u)i(r,n=e[u++])&&(~s(l,n)||c(l,n));return l}},1072:function(t,e,n){var r=n(1828),i=n(8727);t.exports=Object.keys||function(t){return r(t,i)}},8773:function(t,e){var n={}.propertyIsEnumerable,r=Object.getOwnPropertyDescriptor,i=r&&!n.call({1:2},1);e.f=i?function(t){var e=r(this,t);return!!e&&e.enumerable}:n},2967:function(t,e,n){var r=n(6706),i=n(34),o=n(7750),s=n(3506);t.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var t,e=!1,n={};try{t=r(Object.prototype,"__proto__","set"),t(n,[]),e=n instanceof Array}catch(a){}return function(n,r){return o(n),s(r),i(n)?(e?t(n,r):n.__proto__=r,n):n}}():void 0)},4270:function(t,e,n){var r=n(9565),i=n(4901),o=n(34),s=TypeError;t.exports=function(t,e){var n,a;if("string"===e&&i(n=t.toString)&&!o(a=r(n,t)))return a;if(i(n=t.valueOf)&&!o(a=r(n,t)))return a;if("string"!==e&&i(n=t.toString)&&!o(a=r(n,t)))return a;throw new s("Can't convert object to primitive value")}},5031:function(t,e,n){var r=n(7751),i=n(9504),o=n(8480),s=n(3717),a=n(8551),c=i([].concat);t.exports=r("Reflect","ownKeys")||function(t){var e=o.f(a(t)),n=s.f;return n?c(e,n(t)):e}},7979:function(t,e,n){var r=n(8551);t.exports=function(){var t=r(this),e="";return t.hasIndices&&(e+="d"),t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.dotAll&&(e+="s"),t.unicode&&(e+="u"),t.unicodeSets&&(e+="v"),t.sticky&&(e+="y"),e}},7750:function(t,e,n){var r=n(4117),i=TypeError;t.exports=function(t){if(r(t))throw new i("Can't call method on "+t);return t}},9286:function(t,e,n){var r=n(4402),i=n(8469),o=r.Set,s=r.add;t.exports=function(t){var e=new o;return i(t,(function(t){s(e,t)})),e}},3440:function(t,e,n){var r=n(7080),i=n(4402),o=n(9286),s=n(5170),a=n(3789),c=n(8469),u=n(507),l=i.has,h=i.remove;t.exports=function(t){var e=r(this),n=a(t),i=o(e);return s(e)<=n.size?c(e,(function(t){n.includes(t)&&h(i,t)})):u(n.getIterator(),(function(t){l(e,t)&&h(i,t)})),i}},4402:function(t,e,n){var r=n(9504),i=Set.prototype;t.exports={Set:Set,add:r(i.add),has:r(i.has),remove:r(i["delete"]),proto:i}},8750:function(t,e,n){var r=n(7080),i=n(4402),o=n(5170),s=n(3789),a=n(8469),c=n(507),u=i.Set,l=i.add,h=i.has;t.exports=function(t){var e=r(this),n=s(t),i=new u;return o(e)>n.size?c(n.getIterator(),(function(t){h(e,t)&&l(i,t)})):a(e,(function(t){n.includes(t)&&l(i,t)})),i}},4449:function(t,e,n){var r=n(7080),i=n(4402).has,o=n(5170),s=n(3789),a=n(8469),c=n(507),u=n(9539);t.exports=function(t){var e=r(this),n=s(t);if(o(e)<=n.size)return!1!==a(e,(function(t){if(n.includes(t))return!1}),!0);var l=n.getIterator();return!1!==c(l,(function(t){if(i(e,t))return u(l,"normal",!1)}))}},3838:function(t,e,n){var r=n(7080),i=n(5170),o=n(8469),s=n(3789);t.exports=function(t){var e=r(this),n=s(t);return!(i(e)>n.size)&&!1!==o(e,(function(t){if(!n.includes(t))return!1}),!0)}},8527:function(t,e,n){var r=n(7080),i=n(4402).has,o=n(5170),s=n(3789),a=n(507),c=n(9539);t.exports=function(t){var e=r(this),n=s(t);if(o(e)<n.size)return!1;var u=n.getIterator();return!1!==a(u,(function(t){if(!i(e,t))return c(u,"normal",!1)}))}},8469:function(t,e,n){var r=n(9504),i=n(507),o=n(4402),s=o.Set,a=o.proto,c=r(a.forEach),u=r(a.keys),l=u(new s).next;t.exports=function(t,e,n){return n?i({iterator:u(t),next:l},e):c(t,e)}},4916:function(t,e,n){var r=n(7751),i=function(t){return{size:t,has:function(){return!1},keys:function(){return{next:function(){return{done:!0}}}}}};t.exports=function(t){var e=r("Set");try{(new e)[t](i(0));try{return(new e)[t](i(-1)),!1}catch(n){return!0}}catch(o){return!1}}},5170:function(t,e,n){var r=n(6706),i=n(4402);t.exports=r(i.proto,"size","get")||function(t){return t.size}},3650:function(t,e,n){var r=n(7080),i=n(4402),o=n(9286),s=n(3789),a=n(507),c=i.add,u=i.has,l=i.remove;t.exports=function(t){var e=r(this),n=s(t).getIterator(),i=o(e);return a(n,(function(t){u(e,t)?l(i,t):c(i,t)})),i}},4204:function(t,e,n){var r=n(7080),i=n(4402).add,o=n(9286),s=n(3789),a=n(507);t.exports=function(t){var e=r(this),n=s(t).getIterator(),c=o(e);return a(n,(function(t){i(c,t)})),c}},6119:function(t,e,n){var r=n(5745),i=n(3392),o=r("keys");t.exports=function(t){return o[t]||(o[t]=i(t))}},7629:function(t,e,n){var r=n(6395),i=n(4576),o=n(9433),s="__core-js_shared__",a=t.exports=i[s]||o(s,{});(a.versions||(a.versions=[])).push({version:"3.39.0",mode:r?"pure":"global",copyright:"© 2014-2024 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.39.0/LICENSE",source:"https://github.com/zloirock/core-js"})},5745:function(t,e,n){var r=n(7629);t.exports=function(t,e){return r[t]||(r[t]=e||{})}},1548:function(t,e,n){var r=n(4576),i=n(9039),o=n(9519),s=n(4215),a=r.structuredClone;t.exports=!!a&&!i((function(){if("DENO"===s&&o>92||"NODE"===s&&o>94||"BROWSER"===s&&o>97)return!1;var t=new ArrayBuffer(8),e=a(t,{transfer:[t]});return 0!==t.byteLength||8!==e.byteLength}))},4495:function(t,e,n){var r=n(9519),i=n(9039),o=n(4576),s=o.String;t.exports=!!Object.getOwnPropertySymbols&&!i((function(){var t=Symbol("symbol detection");return!s(t)||!(Object(t)instanceof Symbol)||!Symbol.sham&&r&&r<41}))},5610:function(t,e,n){var r=n(1291),i=Math.max,o=Math.min;t.exports=function(t,e){var n=r(t);return n<0?i(n+e,0):o(n,e)}},5854:function(t,e,n){var r=n(2777),i=TypeError;t.exports=function(t){var e=r(t,"number");if("number"==typeof e)throw new i("Can't convert number to bigint");return BigInt(e)}},7696:function(t,e,n){var r=n(1291),i=n(8014),o=RangeError;t.exports=function(t){if(void 0===t)return 0;var e=r(t),n=i(e);if(e!==n)throw new o("Wrong length or index");return n}},5397:function(t,e,n){var r=n(7055),i=n(7750);t.exports=function(t){return r(i(t))}},1291:function(t,e,n){var r=n(741);t.exports=function(t){var e=+t;return e!==e||0===e?0:r(e)}},8014:function(t,e,n){var r=n(1291),i=Math.min;t.exports=function(t){var e=r(t);return e>0?i(e,9007199254740991):0}},8981:function(t,e,n){var r=n(7750),i=Object;t.exports=function(t){return i(r(t))}},2777:function(t,e,n){var r=n(9565),i=n(34),o=n(757),s=n(5966),a=n(4270),c=n(8227),u=TypeError,l=c("toPrimitive");t.exports=function(t,e){if(!i(t)||o(t))return t;var n,c=s(t,l);if(c){if(void 0===e&&(e="default"),n=r(c,t,e),!i(n)||o(n))return n;throw new u("Can't convert object to primitive value")}return void 0===e&&(e="number"),a(t,e)}},6969:function(t,e,n){var r=n(2777),i=n(757);t.exports=function(t){var e=r(t,"string");return i(e)?e:e+""}},2140:function(t,e,n){var r=n(8227),i=r("toStringTag"),o={};o[i]="z",t.exports="[object z]"===String(o)},655:function(t,e,n){var r=n(6955),i=String;t.exports=function(t){if("Symbol"===r(t))throw new TypeError("Cannot convert a Symbol value to a string");return i(t)}},6823:function(t){var e=String;t.exports=function(t){try{return e(t)}catch(n){return"Object"}}},3392:function(t,e,n){var r=n(9504),i=0,o=Math.random(),s=r(1..toString);t.exports=function(t){return"Symbol("+(void 0===t?"":t)+")_"+s(++i+o,36)}},7040:function(t,e,n){var r=n(4495);t.exports=r&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},8686:function(t,e,n){var r=n(3724),i=n(9039);t.exports=r&&i((function(){return 42!==Object.defineProperty((function(){}),"prototype",{value:42,writable:!1}).prototype}))},8622:function(t,e,n){var r=n(4576),i=n(4901),o=r.WeakMap;t.exports=i(o)&&/native code/.test(String(o))},8227:function(t,e,n){var r=n(4576),i=n(5745),o=n(9297),s=n(3392),a=n(4495),c=n(7040),u=r.Symbol,l=i("wks"),h=c?u["for"]||u:u&&u.withoutSetter||s;t.exports=function(t){return o(l,t)||(l[t]=a&&o(u,t)?u[t]:h("Symbol."+t)),l[t]}},6573:function(t,e,n){var r=n(3724),i=n(2106),o=n(3238),s=ArrayBuffer.prototype;r&&!("detached"in s)&&i(s,"detached",{configurable:!0,get:function(){return o(this)}})},7936:function(t,e,n){var r=n(6518),i=n(5636);i&&r({target:"ArrayBuffer",proto:!0},{transferToFixedLength:function(){return i(this,arguments.length?arguments[0]:void 0,!1)}})},8100:function(t,e,n){var r=n(6518),i=n(5636);i&&r({target:"ArrayBuffer",proto:!0},{transfer:function(){return i(this,arguments.length?arguments[0]:void 0,!0)}})},4114:function(t,e,n){var r=n(6518),i=n(8981),o=n(6198),s=n(4527),a=n(6837),c=n(9039),u=c((function(){return 4294967297!==[].push.call({length:4294967296},1)})),l=function(){try{Object.defineProperty([],"length",{writable:!1}).push()}catch(t){return t instanceof TypeError}},h=u||!l();r({target:"Array",proto:!0,arity:1,forced:h},{push:function(t){var e=i(this),n=o(e),r=arguments.length;a(n+r);for(var c=0;c<r;c++)e[n]=arguments[c],n++;return s(e,n),n}})},9678:function(t,e,n){var r=n(6518),i=n(7628),o=n(5397),s=n(6469),a=Array;r({target:"Array",proto:!0},{toReversed:function(){return i(o(this),a)}}),s("toReversed")},7145:function(t,e,n){var r=n(6518),i=n(9504),o=n(9306),s=n(5397),a=n(5370),c=n(4124),u=n(6469),l=Array,h=i(c("Array","sort"));r({target:"Array",proto:!0},{toSorted:function(t){void 0!==t&&o(t);var e=s(this),n=a(l,e);return h(n,t)}}),u("toSorted")},1658:function(t,e,n){var r=n(6518),i=n(6469),o=n(6837),s=n(6198),a=n(5610),c=n(5397),u=n(1291),l=Array,h=Math.max,f=Math.min;r({target:"Array",proto:!0},{toSpliced:function(t,e){var n,r,i,d,p=c(this),g=s(p),m=a(t,g),y=arguments.length,v=0;for(0===y?n=r=0:1===y?(n=0,r=g-m):(n=y-2,r=f(h(u(e),0),g-m)),i=o(g+n-r),d=l(i);v<m;v++)d[v]=p[v];for(;v<m+n;v++)d[v]=arguments[v-m+2];for(;v<i;v++)d[v]=p[v+r-n];return d}}),i("toSpliced")},8111:function(t,e,n){var r=n(6518),i=n(4576),o=n(679),s=n(8551),a=n(4901),c=n(2787),u=n(2106),l=n(4659),h=n(9039),f=n(9297),d=n(8227),p=n(7657).IteratorPrototype,g=n(3724),m=n(6395),y="constructor",v="Iterator",w=d("toStringTag"),b=TypeError,E=i[v],T=m||!a(E)||E.prototype!==p||!h((function(){E({})})),_=function(){if(o(this,p),c(this)===p)throw new b("Abstract class Iterator not directly constructable")},S=function(t,e){g?u(p,t,{configurable:!0,get:function(){return e},set:function(e){if(s(this),this===p)throw new b("You can't redefine this property");f(this,t)?this[t]=e:l(this,t,e)}}):p[t]=e};f(p,w)||S(w,v),!T&&f(p,y)&&p[y]!==Object||S(y,_),_.prototype=p,r({global:!0,constructor:!0,forced:T},{Iterator:_})},1148:function(t,e,n){var r=n(6518),i=n(2652),o=n(9306),s=n(8551),a=n(1767);r({target:"Iterator",proto:!0,real:!0},{every:function(t){s(this),o(t);var e=a(this),n=0;return!i(e,(function(e,r){if(!t(e,n++))return r()}),{IS_RECORD:!0,INTERRUPTED:!0}).stopped}})},2489:function(t,e,n){var r=n(6518),i=n(9565),o=n(9306),s=n(8551),a=n(1767),c=n(9462),u=n(6319),l=n(6395),h=c((function(){var t,e,n,r=this.iterator,o=this.predicate,a=this.next;while(1){if(t=s(i(a,r)),e=this.done=!!t.done,e)return;if(n=t.value,u(r,o,[n,this.counter++],!0))return n}}));r({target:"Iterator",proto:!0,real:!0,forced:l},{filter:function(t){return s(this),o(t),new h(a(this),{predicate:t})}})},116:function(t,e,n){var r=n(6518),i=n(2652),o=n(9306),s=n(8551),a=n(1767);r({target:"Iterator",proto:!0,real:!0},{find:function(t){s(this),o(t);var e=a(this),n=0;return i(e,(function(e,r){if(t(e,n++))return r(e)}),{IS_RECORD:!0,INTERRUPTED:!0}).result}})},7588:function(t,e,n){var r=n(6518),i=n(2652),o=n(9306),s=n(8551),a=n(1767);r({target:"Iterator",proto:!0,real:!0},{forEach:function(t){s(this),o(t);var e=a(this),n=0;i(e,(function(e){t(e,n++)}),{IS_RECORD:!0})}})},1701:function(t,e,n){var r=n(6518),i=n(713),o=n(6395);r({target:"Iterator",proto:!0,real:!0,forced:o},{map:i})},8237:function(t,e,n){var r=n(6518),i=n(2652),o=n(9306),s=n(8551),a=n(1767),c=TypeError;r({target:"Iterator",proto:!0,real:!0},{reduce:function(t){s(this),o(t);var e=a(this),n=arguments.length<2,r=n?void 0:arguments[1],u=0;if(i(e,(function(e){n?(n=!1,r=e):r=t(r,e,u),u++}),{IS_RECORD:!0}),n)throw new c("Reduce of empty iterator with no initial value");return r}})},3579:function(t,e,n){var r=n(6518),i=n(2652),o=n(9306),s=n(8551),a=n(1767);r({target:"Iterator",proto:!0,real:!0},{some:function(t){s(this),o(t);var e=a(this),n=0;return i(e,(function(e,r){if(t(e,n++))return r()}),{IS_RECORD:!0,INTERRUPTED:!0}).stopped}})},1806:function(t,e,n){var r=n(6518),i=n(8551),o=n(2652),s=n(1767),a=[].push;r({target:"Iterator",proto:!0,real:!0},{toArray:function(){var t=[];return o(s(i(this)),a,{that:t,IS_RECORD:!0}),t}})},9479:function(t,e,n){var r=n(4576),i=n(3724),o=n(2106),s=n(7979),a=n(9039),c=r.RegExp,u=c.prototype,l=i&&a((function(){var t=!0;try{c(".","d")}catch(l){t=!1}var e={},n="",r=t?"dgimsy":"gimsy",i=function(t,r){Object.defineProperty(e,t,{get:function(){return n+=r,!0}})},o={dotAll:"s",global:"g",ignoreCase:"i",multiline:"m",sticky:"y"};for(var s in t&&(o.hasIndices="d"),o)i(s,o[s]);var a=Object.getOwnPropertyDescriptor(u,"flags").get.call(e);return a!==r||n!==r}));l&&o(u,"flags",{configurable:!0,get:s})},7642:function(t,e,n){var r=n(6518),i=n(3440),o=n(4916);r({target:"Set",proto:!0,real:!0,forced:!o("difference")},{difference:i})},8004:function(t,e,n){var r=n(6518),i=n(9039),o=n(8750),s=n(4916),a=!s("intersection")||i((function(){return"3,2"!==String(Array.from(new Set([1,2,3]).intersection(new Set([3,2]))))}));r({target:"Set",proto:!0,real:!0,forced:a},{intersection:o})},3853:function(t,e,n){var r=n(6518),i=n(4449),o=n(4916);r({target:"Set",proto:!0,real:!0,forced:!o("isDisjointFrom")},{isDisjointFrom:i})},5876:function(t,e,n){var r=n(6518),i=n(3838),o=n(4916);r({target:"Set",proto:!0,real:!0,forced:!o("isSubsetOf")},{isSubsetOf:i})},2475:function(t,e,n){var r=n(6518),i=n(8527),o=n(4916);r({target:"Set",proto:!0,real:!0,forced:!o("isSupersetOf")},{isSupersetOf:i})},5024:function(t,e,n){var r=n(6518),i=n(3650),o=n(4916);r({target:"Set",proto:!0,real:!0,forced:!o("symmetricDifference")},{symmetricDifference:i})},1698:function(t,e,n){var r=n(6518),i=n(4204),o=n(4916);r({target:"Set",proto:!0,real:!0,forced:!o("union")},{union:i})},7467:function(t,e,n){var r=n(7628),i=n(4644),o=i.aTypedArray,s=i.exportTypedArrayMethod,a=i.getTypedArrayConstructor;s("toReversed",(function(){return r(o(this),a(this))}))},4732:function(t,e,n){var r=n(4644),i=n(9504),o=n(9306),s=n(5370),a=r.aTypedArray,c=r.getTypedArrayConstructor,u=r.exportTypedArrayMethod,l=i(r.TypedArrayPrototype.sort);u("toSorted",(function(t){void 0!==t&&o(t);var e=a(this),n=s(c(e),e);return l(n,t)}))},9577:function(t,e,n){var r=n(9928),i=n(4644),o=n(1108),s=n(1291),a=n(5854),c=i.aTypedArray,u=i.getTypedArrayConstructor,l=i.exportTypedArrayMethod,h=!!function(){try{new Int8Array(1)["with"](2,{valueOf:function(){throw 8}})}catch(t){return 8===t}}();l("with",{with:function(t,e){var n=c(this),i=s(t),l=o(n)?a(e):+e;return r(n,u(n),i,l)}}["with"],!h)},8992:function(t,e,n){n(8111)},3215:function(t,e,n){n(1148)},4520:function(t,e,n){n(2489)},2577:function(t,e,n){n(116)},3949:function(t,e,n){n(7588)},1454:function(t,e,n){n(1701)},8872:function(t,e,n){n(8237)},7550:function(t,e,n){n(3579)},1795:function(t,e,n){n(1806)},4979:function(t,e,n){var r=n(6518),i=n(4576),o=n(7751),s=n(6980),a=n(4913).f,c=n(9297),u=n(679),l=n(3167),h=n(2603),f=n(5002),d=n(6193),p=n(3724),g=n(6395),m="DOMException",y=o("Error"),v=o(m),w=function(){u(this,b);var t=arguments.length,e=h(t<1?void 0:arguments[0]),n=h(t<2?void 0:arguments[1],"Error"),r=new v(e,n),i=new y(e);return i.name=m,a(r,"stack",s(1,d(i.stack,1))),l(r,this,w),r},b=w.prototype=v.prototype,E="stack"in new y(m),T="stack"in new v(1,2),_=v&&p&&Object.getOwnPropertyDescriptor(i,m),S=!!_&&!(_.writable&&_.configurable),A=E&&!S&&!T;r({global:!0,constructor:!0,forced:g||A},{DOMException:A?w:v});var I=o(m),x=I.prototype;if(x.constructor!==I)for(var C in g||a(x,"constructor",s(1,I)),f)if(c(f,C)){var O=f[C],D=O.s;c(I,D)||a(I,D,s(6,O.c))}},6540:function(t,e,n){n.d(e,{KO:function(){return Z},MF:function(){return X},Sx:function(){return J},Wp:function(){return Y},j6:function(){return K},om:function(){return z}});n(4114),n(8992),n(4520),n(1454),n(8872),n(7550);var r=n(852),i=n(1363),o=n(4046),s=n(8071);
/**
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
 */
class a{constructor(t){this.container=t}getPlatformInfoString(){const t=this.container.getProviders();return t.map((t=>{if(c(t)){const e=t.getImmediate();return`${e.library}/${e.version}`}return null})).filter((t=>t)).join(" ")}}function c(t){const e=t.getComponent();return"VERSION"===(null===e||void 0===e?void 0:e.type)}const u="@firebase/app",l="0.10.17",h=new i.Vy("@firebase/app"),f="@firebase/app-compat",d="@firebase/analytics-compat",p="@firebase/analytics",g="@firebase/app-check-compat",m="@firebase/app-check",y="@firebase/auth",v="@firebase/auth-compat",w="@firebase/database",b="@firebase/data-connect",E="@firebase/database-compat",T="@firebase/functions",_="@firebase/functions-compat",S="@firebase/installations",A="@firebase/installations-compat",I="@firebase/messaging",x="@firebase/messaging-compat",C="@firebase/performance",O="@firebase/performance-compat",D="@firebase/remote-config",R="@firebase/remote-config-compat",k="@firebase/storage",N="@firebase/storage-compat",M="@firebase/firestore",P="@firebase/vertexai",L="@firebase/firestore-compat",F="firebase",j="11.1.0",V="[DEFAULT]",U={[u]:"fire-core",[f]:"fire-core-compat",[p]:"fire-analytics",[d]:"fire-analytics-compat",[m]:"fire-app-check",[g]:"fire-app-check-compat",[y]:"fire-auth",[v]:"fire-auth-compat",[w]:"fire-rtdb",[b]:"fire-data-connect",[E]:"fire-rtdb-compat",[T]:"fire-fn",[_]:"fire-fn-compat",[S]:"fire-iid",[A]:"fire-iid-compat",[I]:"fire-fcm",[x]:"fire-fcm-compat",[C]:"fire-perf",[O]:"fire-perf-compat",[D]:"fire-rc",[R]:"fire-rc-compat",[k]:"fire-gcs",[N]:"fire-gcs-compat",[M]:"fire-fst",[L]:"fire-fst-compat",[P]:"fire-vertex","fire-js":"fire-js",[F]:"fire-js-all"},$=new Map,B=new Map,H=new Map;function G(t,e){try{t.container.addComponent(e)}catch(n){h.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function z(t){const e=t.name;if(H.has(e))return h.debug(`There were multiple attempts to register component ${e}.`),!1;H.set(e,t);for(const n of $.values())G(n,t);for(const n of B.values())G(n,t);return!0}function K(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}
/**
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
 */
const q={["no-app"]:"No Firebase App '{$appName}' has been created - call initializeApp() first",["bad-app-name"]:"Illegal App name: '{$appName}'",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["server-app-deleted"]:"Firebase Server App has been deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.",["finalization-registry-not-supported"]:"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.",["invalid-server-app-environment"]:"FirebaseServerApp is not for use in browser environments."},W=new o.FA("app","Firebase",q);
/**
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
 */
class Q{constructor(t,e,n){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new r.uA("app",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw W.create("app-deleted",{appName:this._name})}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
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
 */
const X=j;function Y(t,e={}){let n=t;if("object"!==typeof e){const t=e;e={name:t}}const i=Object.assign({name:V,automaticDataCollectionEnabled:!1},e),s=i.name;if("string"!==typeof s||!s)throw W.create("bad-app-name",{appName:String(s)});if(n||(n=(0,o.T9)()),!n)throw W.create("no-options");const a=$.get(s);if(a){if((0,o.bD)(n,a.options)&&(0,o.bD)(i,a.config))return a;throw W.create("duplicate-app",{appName:s})}const c=new r.h1(s);for(const r of H.values())c.addComponent(r);const u=new Q(n,i,c);return $.set(s,u),u}function J(t=V){const e=$.get(t);if(!e&&t===V&&(0,o.T9)())return Y();if(!e)throw W.create("no-app",{appName:t});return e}function Z(t,e,n){var i;let o=null!==(i=U[t])&&void 0!==i?i:t;n&&(o+=`-${n}`);const s=o.match(/\s|\//),a=e.match(/\s|\//);if(s||a){const t=[`Unable to register library "${o}" with version "${e}":`];return s&&t.push(`library name "${o}" contains illegal characters (whitespace or "/")`),s&&a&&t.push("and"),a&&t.push(`version name "${e}" contains illegal characters (whitespace or "/")`),void h.warn(t.join(" "))}z(new r.uA(`${o}-version`,(()=>({library:o,version:e})),"VERSION"))}
/**
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
 */
const tt="firebase-heartbeat-database",et=1,nt="firebase-heartbeat-store";let rt=null;function it(){return rt||(rt=(0,s.P2)(tt,et,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(nt)}catch(n){console.warn(n)}}}}).catch((t=>{throw W.create("idb-open",{originalErrorMessage:t.message})}))),rt}async function ot(t){try{const e=await it(),n=e.transaction(nt),r=await n.objectStore(nt).get(at(t));return await n.done,r}catch(e){if(e instanceof o.g)h.warn(e.message);else{const t=W.create("idb-get",{originalErrorMessage:null===e||void 0===e?void 0:e.message});h.warn(t.message)}}}async function st(t,e){try{const n=await it(),r=n.transaction(nt,"readwrite"),i=r.objectStore(nt);await i.put(e,at(t)),await r.done}catch(n){if(n instanceof o.g)h.warn(n.message);else{const t=W.create("idb-set",{originalErrorMessage:null===n||void 0===n?void 0:n.message});h.warn(t.message)}}}function at(t){return`${t.name}!${t.options.appId}`}
/**
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
 */const ct=1024,ut=2592e6;class lt{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new dt(e),this._heartbeatsCachePromise=this._storage.read().then((t=>(this._heartbeatsCache=t,t)))}async triggerHeartbeat(){var t,e;try{const n=this.container.getProvider("platform-logger").getImmediate(),r=n.getPlatformInfoString(),i=ht();if(null==(null===(t=this._heartbeatsCache)||void 0===t?void 0:t.heartbeats)&&(this._heartbeatsCache=await this._heartbeatsCachePromise,null==(null===(e=this._heartbeatsCache)||void 0===e?void 0:e.heartbeats)))return;if(this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some((t=>t.date===i)))return;return this._heartbeatsCache.heartbeats.push({date:i,agent:r}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((t=>{const e=new Date(t.date).valueOf(),n=Date.now();return n-e<=ut})),this._storage.overwrite(this._heartbeatsCache)}catch(n){h.warn(n)}}async getHeartbeatsHeader(){var t;try{if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null==(null===(t=this._heartbeatsCache)||void 0===t?void 0:t.heartbeats)||0===this._heartbeatsCache.heartbeats.length)return"";const e=ht(),{heartbeatsToSend:n,unsentEntries:r}=ft(this._heartbeatsCache.heartbeats),i=(0,o.Uj)(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(e){return h.warn(e),""}}}function ht(){const t=new Date;return t.toISOString().substring(0,10)}function ft(t,e=ct){const n=[];let r=t.slice();for(const i of t){const t=n.find((t=>t.agent===i.agent));if(t){if(t.dates.push(i.date),pt(n)>e){t.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),pt(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class dt{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!(0,o.zW)()&&(0,o.eX)().then((()=>!0)).catch((()=>!1))}async read(){const t=await this._canUseIndexedDBPromise;if(t){const t=await ot(this.app);return(null===t||void 0===t?void 0:t.heartbeats)?t:{heartbeats:[]}}return{heartbeats:[]}}async overwrite(t){var e;const n=await this._canUseIndexedDBPromise;if(n){const n=await this.read();return st(this.app,{lastSentHeartbeatDate:null!==(e=t.lastSentHeartbeatDate)&&void 0!==e?e:n.lastSentHeartbeatDate,heartbeats:t.heartbeats})}}async add(t){var e;const n=await this._canUseIndexedDBPromise;if(n){const n=await this.read();return st(this.app,{lastSentHeartbeatDate:null!==(e=t.lastSentHeartbeatDate)&&void 0!==e?e:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...t.heartbeats]})}}}function pt(t){return(0,o.Uj)(JSON.stringify({version:2,heartbeats:t})).length}
/**
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
 */function gt(t){z(new r.uA("platform-logger",(t=>new a(t)),"PRIVATE")),z(new r.uA("heartbeat",(t=>new lt(t)),"PRIVATE")),Z(u,l,t),Z(u,l,"esm2017"),Z("fire-js","")}gt("")},852:function(t,e,n){n.d(e,{h1:function(){return u},uA:function(){return i}});n(7642),n(8004),n(3853),n(5876),n(2475),n(5024),n(1698),n(8992),n(4520),n(1454);var r=n(4046);class i{constructor(t,e,n){this.name=t,this.instanceFactory=e,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}
/**
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
 */const o="[DEFAULT]";
/**
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
 */class s{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const t=new r.cY;if(this.instancesDeferred.set(e,t),this.isInitialized(e)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:e});n&&t.resolve(n)}catch(n){}}return this.instancesDeferred.get(e).promise}getImmediate(t){var e;const n=this.normalizeInstanceIdentifier(null===t||void 0===t?void 0:t.identifier),r=null!==(e=null===t||void 0===t?void 0:t.optional)&&void 0!==e&&e;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(r)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(i){if(r)return null;throw i}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,this.shouldAutoInitialize()){if(c(t))try{this.getOrInitializeService({instanceIdentifier:o})}catch(e){}for(const[t,n]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(t);try{const t=this.getOrInitializeService({instanceIdentifier:r});n.resolve(t)}catch(e){}}}}clearInstance(t=o){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter((t=>"INTERNAL"in t)).map((t=>t.INTERNAL.delete())),...t.filter((t=>"_delete"in t)).map((t=>t._delete()))])}isComponentSet(){return null!=this.component}isInitialized(t=o){return this.instances.has(t)}getOptions(t=o){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,n=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:n,options:e});for(const[i,o]of this.instancesDeferred.entries()){const t=this.normalizeInstanceIdentifier(i);n===t&&o.resolve(r)}return r}onInit(t,e){var n;const r=this.normalizeInstanceIdentifier(e),i=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;i.add(t),this.onInitCallbacks.set(r,i);const o=this.instances.get(r);return o&&t(o,r),()=>{i.delete(t)}}invokeOnInitCallbacks(t,e){const n=this.onInitCallbacks.get(e);if(n)for(const i of n)try{i(t,e)}catch(r){}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let n=this.instances.get(t);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:a(t),options:e}),this.instances.set(t,n),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(n,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,n)}catch(r){}return n||null}normalizeInstanceIdentifier(t=o){return this.component?this.component.multipleInstances?t:o:t}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}function a(t){return t===o?void 0:t}function c(t){return"EAGER"===t.instantiationMode}
/**
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
 */class u{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){const e=this.getProvider(t.name);e.isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new s(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}},1363:function(t,e,n){n.d(e,{$b:function(){return i},Vy:function(){return u}});n(4114),n(8992),n(4520),n(1454);
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
 */
const r=[];var i;(function(t){t[t["DEBUG"]=0]="DEBUG",t[t["VERBOSE"]=1]="VERBOSE",t[t["INFO"]=2]="INFO",t[t["WARN"]=3]="WARN",t[t["ERROR"]=4]="ERROR",t[t["SILENT"]=5]="SILENT"})(i||(i={}));const o={debug:i.DEBUG,verbose:i.VERBOSE,info:i.INFO,warn:i.WARN,error:i.ERROR,silent:i.SILENT},s=i.INFO,a={[i.DEBUG]:"log",[i.VERBOSE]:"log",[i.INFO]:"info",[i.WARN]:"warn",[i.ERROR]:"error"},c=(t,e,...n)=>{if(e<t.logLevel)return;const r=(new Date).toISOString(),i=a[e];if(!i)throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`);console[i](`[${r}]  ${t.name}:`,...n)};class u{constructor(t){this.name=t,this._logLevel=s,this._logHandler=c,this._userLogHandler=null,r.push(this)}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in i))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel="string"===typeof t?o[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if("function"!==typeof t)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,i.DEBUG,...t),this._logHandler(this,i.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,i.VERBOSE,...t),this._logHandler(this,i.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,i.INFO,...t),this._logHandler(this,i.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,i.WARN,...t),this._logHandler(this,i.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,i.ERROR,...t),this._logHandler(this,i.ERROR,...t)}}},5942:function(t,e,n){n.d(e,{P5:function(){return be}});n(4114),n(8992),n(2577),n(3949),n(1454);var r=n(6540),i=n(1363),o=n(4046),s=n(852),a=(n(6573),n(8100),n(7936),n(7642),n(8004),n(3853),n(5876),n(2475),n(5024),n(1698),n(7467),n(4732),n(9577),n(4979),n(8071));const c="@firebase/installations",u="0.6.11",l=1e4,h=`w:${u}`,f="FIS_v2",d="https://firebaseinstallations.googleapis.com/v1",p=36e5,g="installations",m="Installations",y={["missing-app-config-values"]:'Missing App configuration value: "{$valueName}"',["not-registered"]:"Firebase Installation is not registered.",["installation-not-found"]:"Firebase Installation not found.",["request-failed"]:'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',["app-offline"]:"Could not process request. Application offline.",["delete-pending-registration"]:"Can't delete installation while there is a pending registration request."},v=new o.FA(g,m,y);function w(t){return t instanceof o.g&&t.code.includes("request-failed")}
/**
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
 */function b({projectId:t}){return`${d}/projects/${t}/installations`}function E(t){return{token:t.token,requestStatus:2,expiresIn:I(t.expiresIn),creationTime:Date.now()}}async function T(t,e){const n=await e.json(),r=n.error;return v.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function _({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function S(t,{refreshToken:e}){const n=_(t);return n.append("Authorization",x(e)),n}async function A(t){const e=await t();return e.status>=500&&e.status<600?t():e}function I(t){return Number(t.replace("s","000"))}function x(t){return`${f} ${t}`}
/**
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
 */async function C({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=b(t),i=_(t),o=e.getImmediate({optional:!0});if(o){const t=await o.getHeartbeatsHeader();t&&i.append("x-firebase-client",t)}const s={fid:n,authVersion:f,appId:t.appId,sdkVersion:h},a={method:"POST",headers:i,body:JSON.stringify(s)},c=await A((()=>fetch(r,a)));if(c.ok){const t=await c.json(),e={fid:t.fid||n,registrationStatus:2,refreshToken:t.refreshToken,authToken:E(t.authToken)};return e}throw await T("Create Installation",c)}
/**
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
 */function O(t){return new Promise((e=>{setTimeout(e,t)}))}
/**
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
 */function D(t){const e=btoa(String.fromCharCode(...t));return e.replace(/\+/g,"-").replace(/\//g,"_")}
/**
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
 */const R=/^[cdef][\w-]{21}$/,k="";function N(){try{const t=new Uint8Array(17),e=self.crypto||self.msCrypto;e.getRandomValues(t),t[0]=112+t[0]%16;const n=M(t);return R.test(n)?n:k}catch(t){return k}}function M(t){const e=D(t);return e.substr(0,22)}
/**
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
 */function P(t){return`${t.appName}!${t.appId}`}
/**
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
 */const L=new Map;function F(t,e){const n=P(t);j(n,e),V(n,e)}function j(t,e){const n=L.get(t);if(n)for(const r of n)r(e)}function V(t,e){const n=$();n&&n.postMessage({key:t,fid:e}),B()}let U=null;function $(){return!U&&"BroadcastChannel"in self&&(U=new BroadcastChannel("[Firebase] FID Change"),U.onmessage=t=>{j(t.data.key,t.data.fid)}),U}function B(){0===L.size&&U&&(U.close(),U=null)}
/**
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
 */const H="firebase-installations-database",G=1,z="firebase-installations-store";let K=null;function q(){return K||(K=(0,a.P2)(H,G,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(z)}}})),K}async function W(t,e){const n=P(t),r=await q(),i=r.transaction(z,"readwrite"),o=i.objectStore(z),s=await o.get(n);return await o.put(e,n),await i.done,s&&s.fid===e.fid||F(t,e.fid),e}async function Q(t){const e=P(t),n=await q(),r=n.transaction(z,"readwrite");await r.objectStore(z).delete(e),await r.done}async function X(t,e){const n=P(t),r=await q(),i=r.transaction(z,"readwrite"),o=i.objectStore(z),s=await o.get(n),a=e(s);return void 0===a?await o.delete(n):await o.put(a,n),await i.done,!a||s&&s.fid===a.fid||F(t,a.fid),a}
/**
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
 */async function Y(t){let e;const n=await X(t.appConfig,(n=>{const r=J(n),i=Z(t,r);return e=i.registrationPromise,i.installationEntry}));return n.fid===k?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function J(t){const e=t||{fid:N(),registrationStatus:0};return rt(e)}function Z(t,e){if(0===e.registrationStatus){if(!navigator.onLine){const t=Promise.reject(v.create("app-offline"));return{installationEntry:e,registrationPromise:t}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=tt(t,n);return{installationEntry:n,registrationPromise:r}}return 1===e.registrationStatus?{installationEntry:e,registrationPromise:et(t)}:{installationEntry:e}}async function tt(t,e){try{const n=await C(t,e);return W(t.appConfig,n)}catch(n){throw w(n)&&409===n.customData.serverCode?await Q(t.appConfig):await W(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function et(t){let e=await nt(t.appConfig);while(1===e.registrationStatus)await O(100),e=await nt(t.appConfig);if(0===e.registrationStatus){const{installationEntry:e,registrationPromise:n}=await Y(t);return n||e}return e}function nt(t){return X(t,(t=>{if(!t)throw v.create("installation-not-found");return rt(t)}))}function rt(t){return it(t)?{fid:t.fid,registrationStatus:0}:t}function it(t){return 1===t.registrationStatus&&t.registrationTime+l<Date.now()}
/**
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
 */async function ot({appConfig:t,heartbeatServiceProvider:e},n){const r=st(t,n),i=S(t,n),o=e.getImmediate({optional:!0});if(o){const t=await o.getHeartbeatsHeader();t&&i.append("x-firebase-client",t)}const s={installation:{sdkVersion:h,appId:t.appId}},a={method:"POST",headers:i,body:JSON.stringify(s)},c=await A((()=>fetch(r,a)));if(c.ok){const t=await c.json(),e=E(t);return e}throw await T("Generate Auth Token",c)}function st(t,{fid:e}){return`${b(t)}/${e}/authTokens:generate`}
/**
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
 */async function at(t,e=!1){let n;const r=await X(t.appConfig,(r=>{if(!ht(r))throw v.create("not-registered");const i=r.authToken;if(!e&&ft(i))return r;if(1===i.requestStatus)return n=ct(t,e),r;{if(!navigator.onLine)throw v.create("app-offline");const e=pt(r);return n=lt(t,e),e}})),i=n?await n:r.authToken;return i}async function ct(t,e){let n=await ut(t.appConfig);while(1===n.authToken.requestStatus)await O(100),n=await ut(t.appConfig);const r=n.authToken;return 0===r.requestStatus?at(t,e):r}function ut(t){return X(t,(t=>{if(!ht(t))throw v.create("not-registered");const e=t.authToken;return gt(e)?Object.assign(Object.assign({},t),{authToken:{requestStatus:0}}):t}))}async function lt(t,e){try{const n=await ot(t,e),r=Object.assign(Object.assign({},e),{authToken:n});return await W(t.appConfig,r),n}catch(n){if(!w(n)||401!==n.customData.serverCode&&404!==n.customData.serverCode){const n=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await W(t.appConfig,n)}else await Q(t.appConfig);throw n}}function ht(t){return void 0!==t&&2===t.registrationStatus}function ft(t){return 2===t.requestStatus&&!dt(t)}function dt(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+p}function pt(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function gt(t){return 1===t.requestStatus&&t.requestTime+l<Date.now()}
/**
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
 */async function mt(t){const e=t,{installationEntry:n,registrationPromise:r}=await Y(e);return r?r.catch(console.error):at(e).catch(console.error),n.fid}
/**
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
 */async function yt(t,e=!1){const n=t;await vt(n);const r=await at(n,e);return r.token}async function vt(t){const{registrationPromise:e}=await Y(t);e&&await e}
/**
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
 */
/**
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
 */
function wt(t){if(!t||!t.options)throw bt("App Configuration");if(!t.name)throw bt("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw bt(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function bt(t){return v.create("missing-app-config-values",{valueName:t})}
/**
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
 */const Et="installations",Tt="installations-internal",_t=t=>{const e=t.getProvider("app").getImmediate(),n=wt(e),i=(0,r.j6)(e,"heartbeat"),o={app:e,appConfig:n,heartbeatServiceProvider:i,_delete:()=>Promise.resolve()};return o},St=t=>{const e=t.getProvider("app").getImmediate(),n=(0,r.j6)(e,Et).getImmediate(),i={getId:()=>mt(n),getToken:t=>yt(n,t)};return i};function At(){(0,r.om)(new s.uA(Et,_t,"PUBLIC")),(0,r.om)(new s.uA(Tt,St,"PRIVATE"))}At(),(0,r.KO)(c,u),(0,r.KO)(c,u,"esm2017");
/**
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
 */
const It="analytics",xt="firebase_id",Ct="origin",Ot=6e4,Dt="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Rt="https://www.googletagmanager.com/gtag/js",kt=new i.Vy("@firebase/analytics"),Nt={["already-exists"]:"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.",["already-initialized"]:"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.",["already-initialized-settings"]:"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.",["interop-component-reg-failed"]:"Firebase Analytics Interop Component failed to instantiate: {$reason}",["invalid-analytics-context"]:"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["indexeddb-unavailable"]:"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["fetch-throttle"]:"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.",["config-fetch-failed"]:"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}",["no-api-key"]:'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',["no-app-id"]:'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',["no-client-id"]:'The "client_id" field is empty.',["invalid-gtag-resource"]:"Trusted Types detected an invalid gtag resource: {$gtagURL}."},Mt=new o.FA("analytics","Analytics",Nt);
/**
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
 */
function Pt(t){if(!t.startsWith(Rt)){const e=Mt.create("invalid-gtag-resource",{gtagURL:t});return kt.warn(e.message),""}return t}function Lt(t){return Promise.all(t.map((t=>t.catch((t=>t)))))}function Ft(t,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(t,e)),n}function jt(t,e){const n=Ft("firebase-js-sdk-policy",{createScriptURL:Pt}),r=document.createElement("script"),i=`${Rt}?l=${t}&id=${e}`;r.src=n?null===n||void 0===n?void 0:n.createScriptURL(i):i,r.async=!0,document.head.appendChild(r)}function Vt(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function Ut(t,e,n,r,i,o){const s=r[i];try{if(s)await e[s];else{const t=await Lt(n),r=t.find((t=>t.measurementId===i));r&&await e[r.appId]}}catch(a){kt.error(a)}t("config",i,o)}async function $t(t,e,n,r,i){try{let o=[];if(i&&i["send_to"]){let t=i["send_to"];Array.isArray(t)||(t=[t]);const r=await Lt(n);for(const n of t){const t=r.find((t=>t.measurementId===n)),i=t&&e[t.appId];if(!i){o=[];break}o.push(i)}}0===o.length&&(o=Object.values(e)),await Promise.all(o),t("event",r,i||{})}catch(o){kt.error(o)}}function Bt(t,e,n,r){async function i(i,...o){try{if("event"===i){const[r,i]=o;await $t(t,e,n,r,i)}else if("config"===i){const[i,s]=o;await Ut(t,e,n,r,i,s)}else if("consent"===i){const[e,n]=o;t("consent",e,n)}else if("get"===i){const[e,n,r]=o;t("get",e,n,r)}else if("set"===i){const[e]=o;t("set",e)}else t(i,...o)}catch(s){kt.error(s)}}return i}function Ht(t,e,n,r,i){let o=function(...t){window[r].push(arguments)};return window[i]&&"function"===typeof window[i]&&(o=window[i]),window[i]=Bt(o,t,e,n),{gtagCore:o,wrappedGtag:window[i]}}function Gt(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(Rt)&&n.src.includes(t))return n;return null}
/**
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
 */const zt=30,Kt=1e3;class qt{constructor(t={},e=Kt){this.throttleMetadata=t,this.intervalMillis=e}getThrottleMetadata(t){return this.throttleMetadata[t]}setThrottleMetadata(t,e){this.throttleMetadata[t]=e}deleteThrottleMetadata(t){delete this.throttleMetadata[t]}}const Wt=new qt;function Qt(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function Xt(t){var e;const{appId:n,apiKey:r}=t,i={method:"GET",headers:Qt(r)},o=Dt.replace("{app-id}",n),s=await fetch(o,i);if(200!==s.status&&304!==s.status){let t="";try{const n=await s.json();(null===(e=n.error)||void 0===e?void 0:e.message)&&(t=n.error.message)}catch(a){}throw Mt.create("config-fetch-failed",{httpStatus:s.status,responseMessage:t})}return s.json()}async function Yt(t,e=Wt,n){const{appId:r,apiKey:i,measurementId:o}=t.options;if(!r)throw Mt.create("no-app-id");if(!i){if(o)return{measurementId:o,appId:r};throw Mt.create("no-api-key")}const s=e.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new ee;return setTimeout((async()=>{a.abort()}),void 0!==n?n:Ot),Jt({appId:r,apiKey:i,measurementId:o},s,a,e)}async function Jt(t,{throttleEndTimeMillis:e,backoffCount:n},r,i=Wt){var s;const{appId:a,measurementId:c}=t;try{await Zt(r,e)}catch(u){if(c)return kt.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${c} provided in the "measurementId" field in the local Firebase config. [${null===u||void 0===u?void 0:u.message}]`),{appId:a,measurementId:c};throw u}try{const e=await Xt(t);return i.deleteThrottleMetadata(a),e}catch(u){const e=u;if(!te(e)){if(i.deleteThrottleMetadata(a),c)return kt.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${c} provided in the "measurementId" field in the local Firebase config. [${null===e||void 0===e?void 0:e.message}]`),{appId:a,measurementId:c};throw u}const l=503===Number(null===(s=null===e||void 0===e?void 0:e.customData)||void 0===s?void 0:s.httpStatus)?(0,o.p9)(n,i.intervalMillis,zt):(0,o.p9)(n,i.intervalMillis),h={throttleEndTimeMillis:Date.now()+l,backoffCount:n+1};return i.setThrottleMetadata(a,h),kt.debug(`Calling attemptFetch again in ${l} millis`),Jt(t,h,r,i)}}function Zt(t,e){return new Promise(((n,r)=>{const i=Math.max(e-Date.now(),0),o=setTimeout(n,i);t.addEventListener((()=>{clearTimeout(o),r(Mt.create("fetch-throttle",{throttleEndTimeMillis:e}))}))}))}function te(t){if(!(t instanceof o.g)||!t.customData)return!1;const e=Number(t.customData["httpStatus"]);return 429===e||500===e||503===e||504===e}class ee{constructor(){this.listeners=[]}addEventListener(t){this.listeners.push(t)}abort(){this.listeners.forEach((t=>t()))}}
/**
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
 */let ne,re;async function ie(t,e,n,r,i){if(i&&i.global)t("event",n,r);else{const i=await e,o=Object.assign(Object.assign({},r),{send_to:i});t("event",n,o)}}function oe(t){re=t}function se(t){ne=t}
/**
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
 */async function ae(){if(!(0,o.zW)())return kt.warn(Mt.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;try{await(0,o.eX)()}catch(t){return kt.warn(Mt.create("indexeddb-unavailable",{errorInfo:null===t||void 0===t?void 0:t.toString()}).message),!1}return!0}async function ce(t,e,n,r,i,o,s){var a;const c=Yt(t);c.then((e=>{n[e.measurementId]=e.appId,t.options.measurementId&&e.measurementId!==t.options.measurementId&&kt.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${e.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)})).catch((t=>kt.error(t))),e.push(c);const u=ae().then((t=>t?r.getId():void 0)),[l,h]=await Promise.all([c,u]);Gt(o)||jt(o,l.measurementId),re&&(i("consent","default",re),oe(void 0)),i("js",new Date);const f=null!==(a=null===s||void 0===s?void 0:s.config)&&void 0!==a?a:{};return f[Ct]="firebase",f.update=!0,null!=h&&(f[xt]=h),i("config",l.measurementId,f),ne&&(i("set",ne),se(void 0)),l.measurementId}
/**
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
 */class ue{constructor(t){this.app=t}_delete(){return delete le[this.app.options.appId],Promise.resolve()}}let le={},he=[];const fe={};let de,pe,ge="dataLayer",me="gtag",ye=!1;function ve(){const t=[];if((0,o.sr)()&&t.push("This is a browser extension environment."),(0,o.dM)()||t.push("Cookies are not available."),t.length>0){const e=t.map(((t,e)=>`(${e+1}) ${t}`)).join(" "),n=Mt.create("invalid-analytics-context",{errorInfo:e});kt.warn(n.message)}}function we(t,e,n){ve();const r=t.options.appId;if(!r)throw Mt.create("no-app-id");if(!t.options.apiKey){if(!t.options.measurementId)throw Mt.create("no-api-key");kt.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`)}if(null!=le[r])throw Mt.create("already-exists",{id:r});if(!ye){Vt(ge);const{wrappedGtag:t,gtagCore:e}=Ht(le,he,fe,ge,me);pe=t,de=e,ye=!0}le[r]=ce(t,he,fe,e,de,ge,n);const i=new ue(t);return i}function be(t=(0,r.Sx)()){t=(0,o.Ku)(t);const e=(0,r.j6)(t,It);return e.isInitialized()?e.getImmediate():Ee(t)}function Ee(t,e={}){const n=(0,r.j6)(t,It);if(n.isInitialized()){const t=n.getImmediate();if((0,o.bD)(e,n.getOptions()))return t;throw Mt.create("already-initialized")}const i=n.initialize({options:e});return i}function Te(t,e,n,r){t=(0,o.Ku)(t),ie(pe,le[t.app.options.appId],e,n,r).catch((t=>kt.error(t)))}const _e="@firebase/analytics",Se="0.10.10";function Ae(){function t(t){try{const e=t.getProvider(It).getImmediate();return{logEvent:(t,n,r)=>Te(e,t,n,r)}}catch(e){throw Mt.create("interop-component-reg-failed",{reason:e})}}(0,r.om)(new s.uA(It,((t,{options:e})=>{const n=t.getProvider("app").getImmediate(),r=t.getProvider("installations-internal").getImmediate();return we(n,r,e)}),"PUBLIC")),(0,r.om)(new s.uA("analytics-internal",t,"PRIVATE")),(0,r.KO)(_e,Se),(0,r.KO)(_e,Se,"esm2017")}Ae()},6400:function(t,e,n){n.d(e,{Wp:function(){return r.Wp}});var r=n(6540),i="firebase",o="11.1.0";
/**
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
 */
/**
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
 */
(0,r.KO)(i,o,"app")},7617:function(t,e,n){n.d(e,{aU:function(){return ei}});n(4114),n(6573),n(8100),n(7936),n(7642),n(8004),n(3853),n(5876),n(2475),n(5024),n(1698),n(7467),n(4732),n(9577),n(8992),n(3215),n(4520),n(2577),n(3949),n(1454),n(8872),n(7550),n(1795),n(4979);var r,i=n(6540),o=n(852),s=n(1363),a=n(4046),c="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof window?window:"undefined"!==typeof global?global:"undefined"!==typeof self?self:{},u={};(function(){var t;
/** @license
         Copyright The Closure Library Authors.
         SPDX-License-Identifier: Apache-2.0
         */function e(t,e){function n(){}n.prototype=e.prototype,t.D=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.C=function(t,n,r){for(var i=Array(arguments.length-2),o=2;o<arguments.length;o++)i[o-2]=arguments[o];return e.prototype[n].apply(t,i)}}function n(){this.blockSize=-1}function i(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}function o(t,e,n){n||(n=0);var r=Array(16);if("string"===typeof e)for(var i=0;16>i;++i)r[i]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(i=0;16>i;++i)r[i]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],i=t.g[2];var o=t.g[3],s=e+(o^n&(i^o))+r[0]+3614090360&4294967295;e=n+(s<<7&4294967295|s>>>25),s=o+(i^e&(n^i))+r[1]+3905402710&4294967295,o=e+(s<<12&4294967295|s>>>20),s=i+(n^o&(e^n))+r[2]+606105819&4294967295,i=o+(s<<17&4294967295|s>>>15),s=n+(e^i&(o^e))+r[3]+3250441966&4294967295,n=i+(s<<22&4294967295|s>>>10),s=e+(o^n&(i^o))+r[4]+4118548399&4294967295,e=n+(s<<7&4294967295|s>>>25),s=o+(i^e&(n^i))+r[5]+1200080426&4294967295,o=e+(s<<12&4294967295|s>>>20),s=i+(n^o&(e^n))+r[6]+2821735955&4294967295,i=o+(s<<17&4294967295|s>>>15),s=n+(e^i&(o^e))+r[7]+4249261313&4294967295,n=i+(s<<22&4294967295|s>>>10),s=e+(o^n&(i^o))+r[8]+1770035416&4294967295,e=n+(s<<7&4294967295|s>>>25),s=o+(i^e&(n^i))+r[9]+2336552879&4294967295,o=e+(s<<12&4294967295|s>>>20),s=i+(n^o&(e^n))+r[10]+4294925233&4294967295,i=o+(s<<17&4294967295|s>>>15),s=n+(e^i&(o^e))+r[11]+2304563134&4294967295,n=i+(s<<22&4294967295|s>>>10),s=e+(o^n&(i^o))+r[12]+1804603682&4294967295,e=n+(s<<7&4294967295|s>>>25),s=o+(i^e&(n^i))+r[13]+4254626195&4294967295,o=e+(s<<12&4294967295|s>>>20),s=i+(n^o&(e^n))+r[14]+2792965006&4294967295,i=o+(s<<17&4294967295|s>>>15),s=n+(e^i&(o^e))+r[15]+1236535329&4294967295,n=i+(s<<22&4294967295|s>>>10),s=e+(i^o&(n^i))+r[1]+4129170786&4294967295,e=n+(s<<5&4294967295|s>>>27),s=o+(n^i&(e^n))+r[6]+3225465664&4294967295,o=e+(s<<9&4294967295|s>>>23),s=i+(e^n&(o^e))+r[11]+643717713&4294967295,i=o+(s<<14&4294967295|s>>>18),s=n+(o^e&(i^o))+r[0]+3921069994&4294967295,n=i+(s<<20&4294967295|s>>>12),s=e+(i^o&(n^i))+r[5]+3593408605&4294967295,e=n+(s<<5&4294967295|s>>>27),s=o+(n^i&(e^n))+r[10]+38016083&4294967295,o=e+(s<<9&4294967295|s>>>23),s=i+(e^n&(o^e))+r[15]+3634488961&4294967295,i=o+(s<<14&4294967295|s>>>18),s=n+(o^e&(i^o))+r[4]+3889429448&4294967295,n=i+(s<<20&4294967295|s>>>12),s=e+(i^o&(n^i))+r[9]+568446438&4294967295,e=n+(s<<5&4294967295|s>>>27),s=o+(n^i&(e^n))+r[14]+3275163606&4294967295,o=e+(s<<9&4294967295|s>>>23),s=i+(e^n&(o^e))+r[3]+4107603335&4294967295,i=o+(s<<14&4294967295|s>>>18),s=n+(o^e&(i^o))+r[8]+1163531501&4294967295,n=i+(s<<20&4294967295|s>>>12),s=e+(i^o&(n^i))+r[13]+2850285829&4294967295,e=n+(s<<5&4294967295|s>>>27),s=o+(n^i&(e^n))+r[2]+4243563512&4294967295,o=e+(s<<9&4294967295|s>>>23),s=i+(e^n&(o^e))+r[7]+1735328473&4294967295,i=o+(s<<14&4294967295|s>>>18),s=n+(o^e&(i^o))+r[12]+2368359562&4294967295,n=i+(s<<20&4294967295|s>>>12),s=e+(n^i^o)+r[5]+4294588738&4294967295,e=n+(s<<4&4294967295|s>>>28),s=o+(e^n^i)+r[8]+2272392833&4294967295,o=e+(s<<11&4294967295|s>>>21),s=i+(o^e^n)+r[11]+1839030562&4294967295,i=o+(s<<16&4294967295|s>>>16),s=n+(i^o^e)+r[14]+4259657740&4294967295,n=i+(s<<23&4294967295|s>>>9),s=e+(n^i^o)+r[1]+2763975236&4294967295,e=n+(s<<4&4294967295|s>>>28),s=o+(e^n^i)+r[4]+1272893353&4294967295,o=e+(s<<11&4294967295|s>>>21),s=i+(o^e^n)+r[7]+4139469664&4294967295,i=o+(s<<16&4294967295|s>>>16),s=n+(i^o^e)+r[10]+3200236656&4294967295,n=i+(s<<23&4294967295|s>>>9),s=e+(n^i^o)+r[13]+681279174&4294967295,e=n+(s<<4&4294967295|s>>>28),s=o+(e^n^i)+r[0]+3936430074&4294967295,o=e+(s<<11&4294967295|s>>>21),s=i+(o^e^n)+r[3]+3572445317&4294967295,i=o+(s<<16&4294967295|s>>>16),s=n+(i^o^e)+r[6]+76029189&4294967295,n=i+(s<<23&4294967295|s>>>9),s=e+(n^i^o)+r[9]+3654602809&4294967295,e=n+(s<<4&4294967295|s>>>28),s=o+(e^n^i)+r[12]+3873151461&4294967295,o=e+(s<<11&4294967295|s>>>21),s=i+(o^e^n)+r[15]+530742520&4294967295,i=o+(s<<16&4294967295|s>>>16),s=n+(i^o^e)+r[2]+3299628645&4294967295,n=i+(s<<23&4294967295|s>>>9),s=e+(i^(n|~o))+r[0]+4096336452&4294967295,e=n+(s<<6&4294967295|s>>>26),s=o+(n^(e|~i))+r[7]+1126891415&4294967295,o=e+(s<<10&4294967295|s>>>22),s=i+(e^(o|~n))+r[14]+2878612391&4294967295,i=o+(s<<15&4294967295|s>>>17),s=n+(o^(i|~e))+r[5]+4237533241&4294967295,n=i+(s<<21&4294967295|s>>>11),s=e+(i^(n|~o))+r[12]+1700485571&4294967295,e=n+(s<<6&4294967295|s>>>26),s=o+(n^(e|~i))+r[3]+2399980690&4294967295,o=e+(s<<10&4294967295|s>>>22),s=i+(e^(o|~n))+r[10]+4293915773&4294967295,i=o+(s<<15&4294967295|s>>>17),s=n+(o^(i|~e))+r[1]+2240044497&4294967295,n=i+(s<<21&4294967295|s>>>11),s=e+(i^(n|~o))+r[8]+1873313359&4294967295,e=n+(s<<6&4294967295|s>>>26),s=o+(n^(e|~i))+r[15]+4264355552&4294967295,o=e+(s<<10&4294967295|s>>>22),s=i+(e^(o|~n))+r[6]+2734768916&4294967295,i=o+(s<<15&4294967295|s>>>17),s=n+(o^(i|~e))+r[13]+1309151649&4294967295,n=i+(s<<21&4294967295|s>>>11),s=e+(i^(n|~o))+r[4]+4149444226&4294967295,e=n+(s<<6&4294967295|s>>>26),s=o+(n^(e|~i))+r[11]+3174756917&4294967295,o=e+(s<<10&4294967295|s>>>22),s=i+(e^(o|~n))+r[2]+718787259&4294967295,i=o+(s<<15&4294967295|s>>>17),s=n+(o^(i|~e))+r[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(i+(s<<21&4294967295|s>>>11))&4294967295,t.g[2]=t.g[2]+i&4294967295,t.g[3]=t.g[3]+o&4294967295}function s(t,e){var n=c;return Object.prototype.hasOwnProperty.call(n,t)?n[t]:n[t]=e(t)}function a(t,e){this.h=e;for(var n=[],r=!0,i=t.length-1;0<=i;i--){var o=0|t[i];r&&o==e||(n[i]=o,r=!1)}this.g=n}e(i,n),i.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0},i.prototype.u=function(t,e){void 0===e&&(e=t.length);for(var n=e-this.blockSize,r=this.B,i=this.h,s=0;s<e;){if(0==i)for(;s<=n;)o(this,t,s),s+=this.blockSize;if("string"===typeof t){for(;s<e;)if(r[i++]=t.charCodeAt(s++),i==this.blockSize){o(this,r),i=0;break}}else for(;s<e;)if(r[i++]=t[s++],i==this.blockSize){o(this,r),i=0;break}}this.h=i,this.o+=e},i.prototype.v=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.o;for(e=t.length-8;e<t.length;++e)t[e]=255&n,n/=256;for(this.u(t),t=Array(16),e=n=0;4>e;++e)for(var r=0;32>r;r+=8)t[n++]=this.g[e]>>>r&255;return t};var c={};function l(t){return-128<=t&&128>t?s(t,(function(t){return new a([0|t],0>t?-1:0)})):new a([0|t],0>t?-1:0)}function h(t){if(isNaN(t)||!isFinite(t))return d;if(0>t)return v(h(-t));for(var e=[],n=1,r=0;t>=n;r++)e[r]=t/n|0,n*=4294967296;return new a(e,0)}function f(t,e){if(0==t.length)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if("-"==t.charAt(0))return v(f(t.substring(1),e));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=h(Math.pow(e,8)),r=d,i=0;i<t.length;i+=8){var o=Math.min(8,t.length-i),s=parseInt(t.substring(i,i+o),e);8>o?(o=h(Math.pow(e,o)),r=r.j(o).add(h(s))):(r=r.j(n),r=r.add(h(s)))}return r}var d=l(0),p=l(1),g=l(16777216);function m(t){if(0!=t.h)return!1;for(var e=0;e<t.g.length;e++)if(0!=t.g[e])return!1;return!0}function y(t){return-1==t.h}function v(t){for(var e=t.g.length,n=[],r=0;r<e;r++)n[r]=~t.g[r];return new a(n,~t.h).add(p)}function w(t,e){return t.add(v(e))}function b(t,e){for(;(65535&t[e])!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function E(t,e){this.g=t,this.h=e}function T(t,e){if(m(e))throw Error("division by zero");if(m(t))return new E(d,d);if(y(t))return e=T(v(t),e),new E(v(e.g),v(e.h));if(y(e))return e=T(t,v(e)),new E(v(e.g),e.h);if(30<t.g.length){if(y(t)||y(e))throw Error("slowDivide_ only works with positive integers.");for(var n=p,r=e;0>=r.l(t);)n=_(n),r=_(r);var i=S(n,1),o=S(r,1);for(r=S(r,2),n=S(n,2);!m(r);){var s=o.add(r);0>=s.l(t)&&(i=i.add(n),o=s),r=S(r,1),n=S(n,1)}return e=w(t,i.j(e)),new E(i,e)}for(i=d;0<=t.l(e);){for(n=Math.max(1,Math.floor(t.m()/e.m())),r=Math.ceil(Math.log(n)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),o=h(n),s=o.j(e);y(s)||0<s.l(t);)n-=r,o=h(n),s=o.j(e);m(o)&&(o=p),i=i.add(o),t=w(t,s)}return new E(i,t)}function _(t){for(var e=t.g.length+1,n=[],r=0;r<e;r++)n[r]=t.i(r)<<1|t.i(r-1)>>>31;return new a(n,t.h)}function S(t,e){var n=e>>5;e%=32;for(var r=t.g.length-n,i=[],o=0;o<r;o++)i[o]=0<e?t.i(o+n)>>>e|t.i(o+n+1)<<32-e:t.i(o+n);return new a(i,t.h)}t=a.prototype,t.m=function(){if(y(this))return-v(this).m();for(var t=0,e=1,n=0;n<this.g.length;n++){var r=this.i(n);t+=(0<=r?r:4294967296+r)*e,e*=4294967296}return t},t.toString=function(t){if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(m(this))return"0";if(y(this))return"-"+v(this).toString(t);for(var e=h(Math.pow(t,6)),n=this,r="";;){var i=T(n,e).g;n=w(n,i.j(e));var o=((0<n.g.length?n.g[0]:n.h)>>>0).toString(t);if(n=i,m(n))return o+r;for(;6>o.length;)o="0"+o;r=o+r}},t.i=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h},t.l=function(t){return t=w(this,t),y(t)?-1:m(t)?0:1},t.abs=function(){return y(this)?v(this):this},t.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0,i=0;i<=e;i++){var o=r+(65535&this.i(i))+(65535&t.i(i)),s=(o>>>16)+(this.i(i)>>>16)+(t.i(i)>>>16);r=s>>>16,o&=65535,s&=65535,n[i]=s<<16|o}return new a(n,-2147483648&n[n.length-1]?-1:0)},t.j=function(t){if(m(this)||m(t))return d;if(y(this))return y(t)?v(this).j(v(t)):v(v(this).j(t));if(y(t))return v(this.j(v(t)));if(0>this.l(g)&&0>t.l(g))return h(this.m()*t.m());for(var e=this.g.length+t.g.length,n=[],r=0;r<2*e;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var i=0;i<t.g.length;i++){var o=this.i(r)>>>16,s=65535&this.i(r),c=t.i(i)>>>16,u=65535&t.i(i);n[2*r+2*i]+=s*u,b(n,2*r+2*i),n[2*r+2*i+1]+=o*u,b(n,2*r+2*i+1),n[2*r+2*i+1]+=s*c,b(n,2*r+2*i+1),n[2*r+2*i+2]+=o*c,b(n,2*r+2*i+2)}for(r=0;r<e;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=e;r<2*e;r++)n[r]=0;return new a(n,0)},t.A=function(t){return T(this,t).h},t.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.i(r)&t.i(r);return new a(n,this.h&t.h)},t.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.i(r)|t.i(r);return new a(n,this.h|t.h)},t.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.i(r)^t.i(r);return new a(n,this.h^t.h)},i.prototype.digest=i.prototype.v,i.prototype.reset=i.prototype.s,i.prototype.update=i.prototype.u,u.Md5=i,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=h,a.fromString=f,r=u.Integer=a}).apply("undefined"!==typeof c?c:"undefined"!==typeof self?self:"undefined"!==typeof window?window:{});var l,h,f,d,p,g,m,y,v="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof window?window:"undefined"!==typeof global?global:"undefined"!==typeof self?self:{},w={};(function(){var t,e="function"==typeof Object.defineProperties?Object.defineProperty:function(t,e,n){return t==Array.prototype||t==Object.prototype||(t[e]=n.value),t};function n(t){t=["object"==typeof globalThis&&globalThis,t,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof v&&v];for(var e=0;e<t.length;++e){var n=t[e];if(n&&n.Math==Math)return n}throw Error("Cannot find global object")}var r=n(this);function i(t,n){if(n)t:{var i=r;t=t.split(".");for(var o=0;o<t.length-1;o++){var s=t[o];if(!(s in i))break t;i=i[s]}t=t[t.length-1],o=i[t],n=n(o),n!=o&&null!=n&&e(i,t,{configurable:!0,writable:!0,value:n})}}function o(t,e){t instanceof String&&(t+="");var n=0,r=!1,i={next:function(){if(!r&&n<t.length){var i=n++;return{value:e(i,t[i]),done:!1}}return r=!0,{done:!0,value:void 0}}};return i[Symbol.iterator]=function(){return i},i}i("Array.prototype.values",(function(t){return t||function(){return o(this,(function(t,e){return e}))}}));
/** @license
      Copyright The Closure Library Authors.
      SPDX-License-Identifier: Apache-2.0
      */
var s=s||{},a=this||self;function c(t){var e=typeof t;return e="object"!=e?e:t?Array.isArray(t)?"array":e:"null","array"==e||"object"==e&&"number"==typeof t.length}function u(t){var e=typeof t;return"object"==e&&null!=t||"function"==e}function E(t,e,n){return t.call.apply(t.bind,arguments)}function T(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,r),t.apply(e,n)}}return function(){return t.apply(e,arguments)}}function S(t,e,n){return S=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?E:T,S.apply(null,arguments)}function A(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var e=n.slice();return e.push.apply(e,arguments),t.apply(this,e)}}function I(t,e){function n(){}n.prototype=e.prototype,t.aa=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Qb=function(t,n,r){for(var i=Array(arguments.length-2),o=2;o<arguments.length;o++)i[o-2]=arguments[o];return e.prototype[n].apply(t,i)}}function x(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function C(t,e){for(let n=1;n<arguments.length;n++){const e=arguments[n];if(c(e)){const n=t.length||0,r=e.length||0;t.length=n+r;for(let i=0;i<r;i++)t[n+i]=e[i]}else t.push(e)}}class O{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}function D(t){return/^[\s\xa0]*$/.test(t)}function R(){var t=a.navigator;return t&&(t=t.userAgent)?t:""}function k(t){return k[" "](t),t}k[" "]=function(){};var N=-1!=R().indexOf("Gecko")&&!(-1!=R().toLowerCase().indexOf("webkit")&&-1==R().indexOf("Edge"))&&!(-1!=R().indexOf("Trident")||-1!=R().indexOf("MSIE"))&&-1==R().indexOf("Edge");function M(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function P(t,e){for(const n in t)e.call(void 0,t[n],n,t)}function L(t){const e={};for(const n in t)e[n]=t[n];return e}const F="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function j(t,e){let n,r;for(let i=1;i<arguments.length;i++){for(n in r=arguments[i],r)t[n]=r[n];for(let e=0;e<F.length;e++)n=F[e],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function V(t){var e=1;t=t.split(":");const n=[];for(;0<e&&t.length;)n.push(t.shift()),e--;return t.length&&n.push(t.join(":")),n}function U(t){a.setTimeout((()=>{throw t}),0)}function $(){var t=q;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class B{constructor(){this.h=this.g=null}add(t,e){const n=H.get();n.set(t,e),this.h?this.h.next=n:this.g=n,this.h=n}}var H=new O((()=>new G),(t=>t.reset()));class G{constructor(){this.next=this.g=this.h=null}set(t,e){this.h=t,this.g=e,this.next=null}reset(){this.next=this.g=this.h=null}}let z,K=!1,q=new B,W=()=>{const t=a.Promise.resolve(void 0);z=()=>{t.then(Q)}};var Q=()=>{for(var t;t=$();){try{t.h.call(t.g)}catch(n){U(n)}var e=H;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}K=!1};function X(){this.s=this.s,this.C=this.C}function Y(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}X.prototype.s=!1,X.prototype.ma=function(){this.s||(this.s=!0,this.N())},X.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()},Y.prototype.h=function(){this.defaultPrevented=!0};var J=function(){if(!a.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{const t=()=>{};a.addEventListener("test",t,e),a.removeEventListener("test",t,e)}catch(n){}return t}();function Z(t,e){if(Y.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(N){t:{try{k(e.nodeName);var i=!0;break t}catch(o){}i=!1}i||(e=null)}}else"mouseover"==n?e=t.fromElement:"mouseout"==n&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=void 0!==r.clientX?r.clientX:r.pageX,this.clientY=void 0!==r.clientY?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=void 0!==t.clientX?t.clientX:t.pageX,this.clientY=void 0!==t.clientY?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType="string"===typeof t.pointerType?t.pointerType:tt[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&Z.aa.h.call(this)}}I(Z,Y);var tt={2:"touch",3:"pen",4:"mouse"};Z.prototype.h=function(){Z.aa.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var et="closure_listenable_"+(1e6*Math.random()|0),nt=0;function rt(t,e,n,r,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.ha=i,this.key=++nt,this.da=this.fa=!1}function it(t){t.da=!0,t.listener=null,t.proxy=null,t.src=null,t.ha=null}function ot(t){this.src=t,this.g={},this.h=0}function st(t,e){var n=e.type;if(n in t.g){var r,i=t.g[n],o=Array.prototype.indexOf.call(i,e,void 0);(r=0<=o)&&Array.prototype.splice.call(i,o,1),r&&(it(e),0==t.g[n].length&&(delete t.g[n],t.h--))}}function at(t,e,n,r){for(var i=0;i<t.length;++i){var o=t[i];if(!o.da&&o.listener==e&&o.capture==!!n&&o.ha==r)return i}return-1}ot.prototype.add=function(t,e,n,r,i){var o=t.toString();t=this.g[o],t||(t=this.g[o]=[],this.h++);var s=at(t,e,r,i);return-1<s?(e=t[s],n||(e.fa=!1)):(e=new rt(e,this.src,o,!!r,i),e.fa=n,t.push(e)),e};var ct="closure_lm_"+(1e6*Math.random()|0),ut={};function lt(t,e,n,r,i){if(r&&r.once)return dt(t,e,n,r,i);if(Array.isArray(e)){for(var o=0;o<e.length;o++)lt(t,e[o],n,r,i);return null}return n=bt(n),t&&t[et]?t.K(e,n,u(r)?!!r.capture:!!r,i):ht(t,e,n,!1,r,i)}function ht(t,e,n,r,i,o){if(!e)throw Error("Invalid event type");var s=u(i)?!!i.capture:!!i,a=vt(t);if(a||(t[ct]=a=new ot(t)),n=a.add(e,n,r,s,o),n.proxy)return n;if(r=ft(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)J||(i=s),void 0===i&&(i=!1),t.addEventListener(e.toString(),r,i);else if(t.attachEvent)t.attachEvent(mt(e.toString()),r);else{if(!t.addListener||!t.removeListener)throw Error("addEventListener and attachEvent are unavailable.");t.addListener(r)}return n}function ft(){function t(n){return e.call(t.src,t.listener,n)}const e=yt;return t}function dt(t,e,n,r,i){if(Array.isArray(e)){for(var o=0;o<e.length;o++)dt(t,e[o],n,r,i);return null}return n=bt(n),t&&t[et]?t.L(e,n,u(r)?!!r.capture:!!r,i):ht(t,e,n,!0,r,i)}function pt(t,e,n,r,i){if(Array.isArray(e))for(var o=0;o<e.length;o++)pt(t,e[o],n,r,i);else r=u(r)?!!r.capture:!!r,n=bt(n),t&&t[et]?(t=t.i,e=String(e).toString(),e in t.g&&(o=t.g[e],n=at(o,n,r,i),-1<n&&(it(o[n]),Array.prototype.splice.call(o,n,1),0==o.length&&(delete t.g[e],t.h--)))):t&&(t=vt(t))&&(e=t.g[e.toString()],t=-1,e&&(t=at(e,n,r,i)),(n=-1<t?e[t]:null)&&gt(n))}function gt(t){if("number"!==typeof t&&t&&!t.da){var e=t.src;if(e&&e[et])st(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(mt(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=vt(e))?(st(n,t),0==n.h&&(n.src=null,e[ct]=null)):it(t)}}}function mt(t){return t in ut?ut[t]:ut[t]="on"+t}function yt(t,e){if(t.da)t=!0;else{e=new Z(e,this);var n=t.listener,r=t.ha||t.src;t.fa&&gt(t),t=n.call(r,e)}return t}function vt(t){return t=t[ct],t instanceof ot?t:null}var wt="__closure_events_fn_"+(1e9*Math.random()>>>0);function bt(t){return"function"===typeof t?t:(t[wt]||(t[wt]=function(e){return t.handleEvent(e)}),t[wt])}function Et(){X.call(this),this.i=new ot(this),this.M=this,this.F=null}function Tt(t,e){var n,r=t.F;if(r)for(n=[];r;r=r.F)n.push(r);if(t=t.M,r=e.type||e,"string"===typeof e)e=new Y(e,t);else if(e instanceof Y)e.target=e.target||t;else{var i=e;e=new Y(r,t),j(e,i)}if(i=!0,n)for(var o=n.length-1;0<=o;o--){var s=e.g=n[o];i=_t(s,r,!0,e)&&i}if(s=e.g=t,i=_t(s,r,!0,e)&&i,i=_t(s,r,!1,e)&&i,n)for(o=0;o<n.length;o++)s=e.g=n[o],i=_t(s,r,!1,e)&&i}function _t(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,o=0;o<e.length;++o){var s=e[o];if(s&&!s.da&&s.capture==n){var a=s.listener,c=s.ha||s.src;s.fa&&st(t.i,s),i=!1!==a.call(c,r)&&i}}return i&&!r.defaultPrevented}function St(t,e,n){if("function"===typeof t)n&&(t=S(t,n));else{if(!t||"function"!=typeof t.handleEvent)throw Error("Invalid listener argument");t=S(t.handleEvent,t)}return 2147483647<Number(e)?-1:a.setTimeout(t,e||0)}function At(t){t.g=St((()=>{t.g=null,t.i&&(t.i=!1,At(t))}),t.l);const e=t.h;t.h=null,t.m.apply(null,e)}I(Et,X),Et.prototype[et]=!0,Et.prototype.removeEventListener=function(t,e,n,r){pt(this,t,e,n,r)},Et.prototype.N=function(){if(Et.aa.N.call(this),this.i){var t,e=this.i;for(t in e.g){for(var n=e.g[t],r=0;r<n.length;r++)it(n[r]);delete e.g[t],e.h--}}this.F=null},Et.prototype.K=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)},Et.prototype.L=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};class It extends X{constructor(t,e){super(),this.m=t,this.l=e,this.h=null,this.i=!1,this.g=null}j(t){this.h=arguments,this.g?this.i=!0:At(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function xt(t){X.call(this),this.h=t,this.g={}}I(xt,X);var Ct=[];function Ot(t){M(t.g,(function(t,e){this.g.hasOwnProperty(e)&&gt(t)}),t),t.g={}}xt.prototype.N=function(){xt.aa.N.call(this),Ot(this)},xt.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Dt=a.JSON.stringify,Rt=a.JSON.parse,kt=class{stringify(t){return a.JSON.stringify(t,void 0)}parse(t){return a.JSON.parse(t,void 0)}};function Nt(){}function Mt(t){return t.h||(t.h=t.i())}function Pt(){}Nt.prototype.h=null;var Lt={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Ft(){Y.call(this,"d")}function jt(){Y.call(this,"c")}I(Ft,Y),I(jt,Y);var Vt={},Ut=null;function $t(){return Ut=Ut||new Et}function Bt(t){Y.call(this,Vt.La,t)}function Ht(t){const e=$t();Tt(e,new Bt(e))}function Gt(t,e){Y.call(this,Vt.STAT_EVENT,t),this.stat=e}function zt(t){const e=$t();Tt(e,new Gt(e,t))}function Kt(t,e){Y.call(this,Vt.Ma,t),this.size=e}function qt(t,e){if("function"!==typeof t)throw Error("Fn must not be null and must be a function");return a.setTimeout((function(){t()}),e)}function Wt(){this.g=!0}function Qt(t,e,n,r,i,o){t.info((function(){if(t.g)if(o)for(var s="",a=o.split("&"),c=0;c<a.length;c++){var u=a[c].split("=");if(1<u.length){var l=u[0];u=u[1];var h=l.split("_");s=2<=h.length&&"type"==h[1]?s+(l+"=")+u+"&":s+(l+"=redacted&")}}else s=null;else s=o;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+"\n"+n+"\n"+s}))}function Xt(t,e,n,r,i,o,s){t.info((function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+"\n"+n+"\n"+o+" "+s}))}function Yt(t,e,n,r){t.info((function(){return"XMLHTTP TEXT ("+e+"): "+Zt(t,n)+(r?" "+r:"")}))}function Jt(t,e){t.info((function(){return"TIMEOUT: "+e}))}function Zt(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n)for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var o=i[0];if("noop"!=o&&"stop"!=o&&"close"!=o)for(var s=1;s<i.length;s++)i[s]=""}}}return Dt(n)}catch(a){return e}}Vt.La="serverreachability",I(Bt,Y),Vt.STAT_EVENT="statevent",I(Gt,Y),Vt.Ma="timingevent",I(Kt,Y),Wt.prototype.xa=function(){this.g=!1},Wt.prototype.info=function(){};var te,ee={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},ne={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"};function re(){}function ie(t,e,n,r){this.j=t,this.i=e,this.l=n,this.R=r||1,this.U=new xt(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new oe}function oe(){this.i=null,this.g="",this.h=!1}I(re,Nt),re.prototype.g=function(){return new XMLHttpRequest},re.prototype.i=function(){return{}},te=new re;var se={},ae={};function ce(t,e,n){t.L=1,t.v=Fe(ke(e)),t.m=n,t.P=!0,ue(t,null)}function ue(t,e){t.F=Date.now(),fe(t),t.A=ke(t.v);var n=t.A,r=t.R;Array.isArray(r)||(r=[String(r)]),Xe(n.i,"t",r),t.C=0,n=t.j.J,t.h=new oe,t.g=Hn(t.j,n?e:null,!t.m),0<t.O&&(t.M=new It(S(t.Y,t,t.g),t.O)),e=t.U,n=t.g,r=t.ca;var i="readystatechange";Array.isArray(i)||(i&&(Ct[0]=i.toString()),i=Ct);for(var o=0;o<i.length;o++){var s=lt(n,i[o],r||e.handleEvent,!1,e.h||e);if(!s)break;e.g[s.key]=s}e=t.H?L(t.H):{},t.m?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ea(t.A,t.u,t.m,e)):(t.u="GET",t.g.ea(t.A,t.u,null,e)),Ht(),Qt(t.i,t.u,t.A,t.l,t.R,t.m)}function le(t){return!!t.g&&("GET"==t.u&&2!=t.L&&t.j.Ca)}function he(t,e){var n=t.C,r=e.indexOf("\n",n);return-1==r?ae:(n=Number(e.substring(n,r)),isNaN(n)?se:(r+=1,r+n>e.length?ae:(e=e.slice(r,r+n),t.C=r+n,e)))}function fe(t){t.S=Date.now()+t.I,de(t,t.I)}function de(t,e){if(null!=t.B)throw Error("WatchDog timer not null");t.B=qt(S(t.ba,t),e)}function pe(t){t.B&&(a.clearTimeout(t.B),t.B=null)}function ge(t){0==t.j.G||t.J||jn(t.j,t)}function me(t){pe(t);var e=t.M;e&&"function"==typeof e.ma&&e.ma(),t.M=null,Ot(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.ma())}function ye(t,e){try{var n=t.j;if(0!=n.G&&(n.g==t||Te(n.h,t)))if(!t.K&&Te(n.h,t)&&3==n.G){try{var r=n.Da.g.parse(e)}catch(u){r=null}if(Array.isArray(r)&&3==r.length){var i=r;if(0==i[0]){t:if(!n.u){if(n.g){if(!(n.g.F+3e3<t.F))break t;Fn(n),In(n)}Mn(n),zt(18)}}else n.za=i[1],0<n.za-n.T&&37500>i[2]&&n.F&&0==n.v&&!n.C&&(n.C=qt(S(n.Za,n),6e3));if(1>=Ee(n.h)&&n.ca){try{n.ca()}catch(u){}n.ca=void 0}}else Un(n,11)}else if((t.K||n.g==t)&&Fn(n),!D(e))for(i=n.Da.g.parse(e),e=0;e<i.length;e++){let u=i[e];if(n.T=u[0],u=u[1],2==n.G)if("c"==u[0]){n.K=u[1],n.ia=u[2];const e=u[3];null!=e&&(n.la=e,n.j.info("VER="+n.la));const i=u[4];null!=i&&(n.Aa=i,n.j.info("SVER="+n.Aa));const l=u[5];null!=l&&"number"===typeof l&&0<l&&(r=1.5*l,n.L=r,n.j.info("backChannelRequestTimeoutMs_="+r)),r=n;const h=t.g;if(h){const t=h.g?h.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(t){var o=r.h;o.g||-1==t.indexOf("spdy")&&-1==t.indexOf("quic")&&-1==t.indexOf("h2")||(o.j=o.l,o.g=new Set,o.h&&(_e(o,o.h),o.h=null))}if(r.D){const t=h.g?h.g.getResponseHeader("X-HTTP-Session-Id"):null;t&&(r.ya=t,Le(r.I,r.D,t))}}n.G=3,n.l&&n.l.ua(),n.ba&&(n.R=Date.now()-t.F,n.j.info("Handshake RTT: "+n.R+"ms")),r=n;var s=t;if(r.qa=Bn(r,r.J?r.ia:null,r.W),s.K){Se(r.h,s);var a=s,c=r.L;c&&(a.I=c),a.B&&(pe(a),fe(a)),r.g=s}else Nn(r);0<n.i.length&&Cn(n)}else"stop"!=u[0]&&"close"!=u[0]||Un(n,7);else 3==n.G&&("stop"==u[0]||"close"==u[0]?"stop"==u[0]?Un(n,7):An(n):"noop"!=u[0]&&n.l&&n.l.ta(u),n.v=0)}Ht(4)}catch(u){}}ie.prototype.ca=function(t){t=t.target;const e=this.M;e&&3==bn(t)?e.j():this.Y(t)},ie.prototype.Y=function(t){try{if(t==this.g)t:{const f=bn(this.g);var e=this.g.Ba();const d=this.g.Z();if(!(3>f)&&(3!=f||this.g&&(this.h.h||this.g.oa()||En(this.g)))){this.J||4!=f||7==e||Ht(8==e||0>=d?3:2),pe(this);var n=this.g.Z();this.X=n;e:if(le(this)){var r=En(this.g);t="";var i=r.length,o=4==bn(this.g);if(!this.h.i){if("undefined"===typeof TextDecoder){me(this),ge(this);var s="";break e}this.h.i=new a.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:!(o&&e==i-1)});r.length=0,this.h.g+=t,this.C=0,s=this.h.g}else s=this.g.oa();if(this.o=200==n,Xt(this.i,this.u,this.A,this.l,this.R,f,n),this.o){if(this.T&&!this.K){e:{if(this.g){var c,u=this.g;if((c=u.g?u.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!D(c)){var l=c;break e}}l=null}if(!(n=l)){this.o=!1,this.s=3,zt(12),me(this),ge(this);break t}Yt(this.i,this.l,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,ye(this,n)}if(this.P){let t;for(n=!0;!this.J&&this.C<s.length;){if(t=he(this,s),t==ae){4==f&&(this.s=4,zt(14),n=!1),Yt(this.i,this.l,null,"[Incomplete Response]");break}if(t==se){this.s=4,zt(15),Yt(this.i,this.l,s,"[Invalid Chunk]"),n=!1;break}Yt(this.i,this.l,t,null),ye(this,t)}if(le(this)&&0!=this.C&&(this.h.g=this.h.g.slice(this.C),this.C=0),4!=f||0!=s.length||this.h.h||(this.s=1,zt(16),n=!1),this.o=this.o&&n,n){if(0<s.length&&!this.W){this.W=!0;var h=this.j;h.g==this&&h.ba&&!h.M&&(h.j.info("Great, no buffering proxy detected. Bytes received: "+s.length),Pn(h),h.M=!0,zt(11))}}else Yt(this.i,this.l,s,"[Invalid Chunked Response]"),me(this),ge(this)}else Yt(this.i,this.l,s,null),ye(this,s);4==f&&me(this),this.o&&!this.J&&(4==f?jn(this.j,this):(this.o=!1,fe(this)))}else Tn(this.g),400==n&&0<s.indexOf("Unknown SID")?(this.s=3,zt(12)):(this.s=0,zt(13)),me(this),ge(this)}}}catch(b){}},ie.prototype.cancel=function(){this.J=!0,me(this)},ie.prototype.ba=function(){this.B=null;const t=Date.now();0<=t-this.S?(Jt(this.i,this.A),2!=this.L&&(Ht(),zt(17)),me(this),this.s=2,ge(this)):de(this,this.S-t)};var ve=class{constructor(t,e){this.g=t,this.map=e}};function we(t){this.l=t||10,a.PerformanceNavigationTiming?(t=a.performance.getEntriesByType("navigation"),t=0<t.length&&("hq"==t[0].nextHopProtocol||"h2"==t[0].nextHopProtocol)):t=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function be(t){return!!t.h||!!t.g&&t.g.size>=t.j}function Ee(t){return t.h?1:t.g?t.g.size:0}function Te(t,e){return t.h?t.h==e:!!t.g&&t.g.has(e)}function _e(t,e){t.g?t.g.add(e):t.h=e}function Se(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}function Ae(t){if(null!=t.h)return t.i.concat(t.h.D);if(null!=t.g&&0!==t.g.size){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return x(t.i)}function Ie(t){if(t.V&&"function"==typeof t.V)return t.V();if("undefined"!==typeof Map&&t instanceof Map||"undefined"!==typeof Set&&t instanceof Set)return Array.from(t.values());if("string"===typeof t)return t.split("");if(c(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}for(r in e=[],n=0,t)e[n++]=t[r];return e}function xe(t){if(t.na&&"function"==typeof t.na)return t.na();if(!t.V||"function"!=typeof t.V){if("undefined"!==typeof Map&&t instanceof Map)return Array.from(t.keys());if(!("undefined"!==typeof Set&&t instanceof Set)){if(c(t)||"string"===typeof t){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const r in t)e[n++]=r;return e}}}function Ce(t,e){if(t.forEach&&"function"==typeof t.forEach)t.forEach(e,void 0);else if(c(t)||"string"===typeof t)Array.prototype.forEach.call(t,e,void 0);else for(var n=xe(t),r=Ie(t),i=r.length,o=0;o<i;o++)e.call(void 0,r[o],n&&n[o],t)}we.prototype.cancel=function(){if(this.i=Ae(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const t of this.g.values())t.cancel();this.g.clear()}};var Oe=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function De(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),i=null;if(0<=r){var o=t[n].substring(0,r);i=t[n].substring(r+1)}else o=t[n];e(o,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function Re(t){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,t instanceof Re){this.h=t.h,Ne(this,t.j),this.o=t.o,this.g=t.g,Me(this,t.s),this.l=t.l;var e=t.i,n=new Ke;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),Pe(this,n),this.m=t.m}else t&&(e=String(t).match(Oe))?(this.h=!1,Ne(this,e[1]||"",!0),this.o=je(e[2]||""),this.g=je(e[3]||"",!0),Me(this,e[4]),this.l=je(e[5]||"",!0),Pe(this,e[6]||"",!0),this.m=je(e[7]||"")):(this.h=!1,this.i=new Ke(null,this.h))}function ke(t){return new Re(t)}function Ne(t,e,n){t.j=n?je(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Me(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.s=e}else t.s=null}function Pe(t,e,n){e instanceof Ke?(t.i=e,Je(t.i,t.h)):(n||(e=Ve(e,Ge)),t.i=new Ke(e,t.h))}function Le(t,e,n){t.i.set(e,n)}function Fe(t){return Le(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function je(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Ve(t,e,n){return"string"===typeof t?(t=encodeURI(t).replace(e,Ue),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function Ue(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(15&t).toString(16)}Re.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Ve(e,$e,!0),":");var n=this.g;return(n||"file"==e)&&(t.push("//"),(e=this.o)&&t.push(Ve(e,$e,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.s,null!=n&&t.push(":",String(n))),(n=this.l)&&(this.g&&"/"!=n.charAt(0)&&t.push("/"),t.push(Ve(n,"/"==n.charAt(0)?He:Be,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.m)&&t.push("#",Ve(n,ze)),t.join("")};var $e=/[#\/\?@]/g,Be=/[#\?:]/g,He=/[#\?]/g,Ge=/[#\?@]/g,ze=/#/g;function Ke(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function qe(t){t.g||(t.g=new Map,t.h=0,t.i&&De(t.i,(function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)})))}function We(t,e){qe(t),e=Ye(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function Qe(t,e){return qe(t),e=Ye(t,e),t.g.has(e)}function Xe(t,e,n){We(t,e),0<n.length&&(t.i=null,t.g.set(Ye(t,e),x(n)),t.h+=n.length)}function Ye(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function Je(t,e){e&&!t.j&&(qe(t),t.i=null,t.g.forEach((function(t,e){var n=e.toLowerCase();e!=n&&(We(this,e),Xe(this,n,t))}),t)),t.j=e}function Ze(t,e){const n=new Wt;if(a.Image){const r=new Image;r.onload=A(en,n,"TestLoadImage: loaded",!0,e,r),r.onerror=A(en,n,"TestLoadImage: error",!1,e,r),r.onabort=A(en,n,"TestLoadImage: abort",!1,e,r),r.ontimeout=A(en,n,"TestLoadImage: timeout",!1,e,r),a.setTimeout((function(){r.ontimeout&&r.ontimeout()}),1e4),r.src=t}else e(!1)}function tn(t,e){const n=new Wt,r=new AbortController,i=setTimeout((()=>{r.abort(),en(n,"TestPingServer: timeout",!1,e)}),1e4);fetch(t,{signal:r.signal}).then((t=>{clearTimeout(i),t.ok?en(n,"TestPingServer: ok",!0,e):en(n,"TestPingServer: server error",!1,e)})).catch((()=>{clearTimeout(i),en(n,"TestPingServer: error",!1,e)}))}function en(t,e,n,r,i){try{i&&(i.onload=null,i.onerror=null,i.onabort=null,i.ontimeout=null),r(n)}catch(o){}}function nn(){this.g=new kt}function rn(t,e,n){const r=n||"";try{Ce(t,(function(t,n){let i=t;u(t)&&(i=Dt(t)),e.push(r+n+"="+encodeURIComponent(i))}))}catch(i){throw e.push(r+"type="+encodeURIComponent("_badmap")),i}}function on(t){this.l=t.Ub||null,this.j=t.eb||!1}function sn(t,e){Et.call(this),this.D=t,this.o=e,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}function an(t){t.j.read().then(t.Pa.bind(t)).catch(t.ga.bind(t))}function cn(t){t.readyState=4,t.l=null,t.j=null,t.v=null,un(t)}function un(t){t.onreadystatechange&&t.onreadystatechange.call(t)}function ln(t){let e="";return M(t,(function(t,n){e+=n,e+=":",e+=t,e+="\r\n"})),e}function hn(t,e,n){t:{for(r in n){var r=!1;break t}r=!0}r||(n=ln(n),"string"===typeof t?null!=n&&encodeURIComponent(String(n)):Le(t,e,n))}function fn(t){Et.call(this),this.headers=new Map,this.o=t||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}t=Ke.prototype,t.add=function(t,e){qe(this),this.i=null,t=Ye(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this},t.forEach=function(t,e){qe(this),this.g.forEach((function(n,r){n.forEach((function(n){t.call(e,n,r,this)}),this)}),this)},t.na=function(){qe(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let r=0;r<e.length;r++){const i=t[r];for(let t=0;t<i.length;t++)n.push(e[r])}return n},t.V=function(t){qe(this);let e=[];if("string"===typeof t)Qe(this,t)&&(e=e.concat(this.g.get(Ye(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e},t.set=function(t,e){return qe(this),this.i=null,t=Ye(this,t),Qe(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this},t.get=function(t,e){return t?(t=this.V(t),0<t.length?String(t[0]):e):e},t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var r=e[n];const o=encodeURIComponent(String(r)),s=this.V(r);for(r=0;r<s.length;r++){var i=o;""!==s[r]&&(i+="="+encodeURIComponent(String(s[r]))),t.push(i)}}return this.i=t.join("&")},I(on,Nt),on.prototype.g=function(){return new sn(this.l,this.j)},on.prototype.i=function(t){return function(){return t}}({}),I(sn,Et),t=sn.prototype,t.open=function(t,e){if(0!=this.readyState)throw this.abort(),Error("Error reopening a connection");this.B=t,this.A=e,this.readyState=1,un(this)},t.send=function(t){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.u,method:this.B,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||a).fetch(new Request(this.A,e)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch((()=>{})),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,cn(this)),this.readyState=0},t.Sa=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,un(this)),this.g&&(this.readyState=3,un(this),this.g)))if("arraybuffer"===this.responseType)t.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if("undefined"!==typeof a.ReadableStream&&"body"in t){if(this.j=t.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;an(this)}else t.text().then(this.Ra.bind(this),this.ga.bind(this))},t.Pa=function(t){if(this.g){if(this.o&&t.value)this.response.push(t.value);else if(!this.o){var e=t.value?t.value:new Uint8Array(0);(e=this.v.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?cn(this):un(this),3==this.readyState&&an(this)}},t.Ra=function(t){this.g&&(this.response=this.responseText=t,cn(this))},t.Qa=function(t){this.g&&(this.response=t,cn(this))},t.ga=function(){this.g&&cn(this)},t.setRequestHeader=function(t,e){this.u.append(t,e)},t.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join("\r\n")},Object.defineProperty(sn.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(t){this.m=t?"include":"same-origin"}}),I(fn,Et);var dn=/^https?$/i,pn=["POST","PUT"];function gn(t,e){t.h=!1,t.g&&(t.j=!0,t.g.abort(),t.j=!1),t.l=e,t.m=5,mn(t),vn(t)}function mn(t){t.A||(t.A=!0,Tt(t,"complete"),Tt(t,"error"))}function yn(t){if(t.h&&"undefined"!=typeof s&&(!t.v[1]||4!=bn(t)||2!=t.Z()))if(t.u&&4==bn(t))St(t.Ea,0,t);else if(Tt(t,"readystatechange"),4==bn(t)){t.h=!1;try{const s=t.Z();t:switch(s){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break t;default:e=!1}var n;if(!(n=e)){var r;if(r=0===s){var i=String(t.D).match(Oe)[1]||null;!i&&a.self&&a.self.location&&(i=a.self.location.protocol.slice(0,-1)),r=!dn.test(i?i.toLowerCase():"")}n=r}if(n)Tt(t,"complete"),Tt(t,"success");else{t.m=6;try{var o=2<bn(t)?t.g.statusText:""}catch(c){o=""}t.l=o+" ["+t.Z()+"]",mn(t)}}finally{vn(t)}}}function vn(t,e){if(t.g){wn(t);const r=t.g,i=t.v[0]?()=>{}:null;t.g=null,t.v=null,e||Tt(t,"ready");try{r.onreadystatechange=i}catch(n){}}}function wn(t){t.I&&(a.clearTimeout(t.I),t.I=null)}function bn(t){return t.g?t.g.readyState:0}function En(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.H){case"":case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch(_){return null}}function Tn(t){const e={};t=(t.g&&2<=bn(t)&&t.g.getAllResponseHeaders()||"").split("\r\n");for(let r=0;r<t.length;r++){if(D(t[r]))continue;var n=V(t[r]);const i=n[0];if(n=n[1],"string"!==typeof n)continue;n=n.trim();const o=e[i]||[];e[i]=o,o.push(n)}P(e,(function(t){return t.join(", ")}))}function _n(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function Sn(t){this.Aa=0,this.i=[],this.j=new Wt,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=_n("failFast",!1,t),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=_n("baseRetryDelayMs",5e3,t),this.cb=_n("retryDelaySeedMs",1e4,t),this.Wa=_n("forwardChannelMaxRetries",2,t),this.wa=_n("forwardChannelRequestTimeoutMs",2e4,t),this.pa=t&&t.xmlHttpFactory||void 0,this.Xa=t&&t.Tb||void 0,this.Ca=t&&t.useFetchStreams||!1,this.L=void 0,this.J=t&&t.supportsCrossDomainXhr||!1,this.K="",this.h=new we(t&&t.concurrentRequestLimit),this.Da=new nn,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=t&&t.Rb||!1,t&&t.xa&&this.j.xa(),t&&t.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&t&&t.detectBufferingProxy||!1,this.ja=void 0,t&&t.longPollingTimeout&&0<t.longPollingTimeout&&(this.ja=t.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}function An(t){if(xn(t),3==t.G){var e=t.U++,n=ke(t.I);if(Le(n,"SID",t.K),Le(n,"RID",e),Le(n,"TYPE","terminate"),Rn(t,n),e=new ie(t,t.j,e),e.L=2,e.v=Fe(ke(n)),n=!1,a.navigator&&a.navigator.sendBeacon)try{n=a.navigator.sendBeacon(e.v.toString(),"")}catch(r){}!n&&a.Image&&((new Image).src=e.v,n=!0),n||(e.g=Hn(e.j,null),e.g.ea(e.v)),e.F=Date.now(),fe(e)}$n(t)}function In(t){t.g&&(Pn(t),t.g.cancel(),t.g=null)}function xn(t){In(t),t.u&&(a.clearTimeout(t.u),t.u=null),Fn(t),t.h.cancel(),t.s&&("number"===typeof t.s&&a.clearTimeout(t.s),t.s=null)}function Cn(t){if(!be(t.h)&&!t.s){t.s=!0;var e=t.Ga;z||W(),K||(z(),K=!0),q.add(e,t),t.B=0}}function On(t,e){return!(Ee(t.h)>=t.h.j-(t.s?1:0))&&(t.s?(t.i=e.D.concat(t.i),!0):!(1==t.G||2==t.G||t.B>=(t.Va?0:t.Wa))&&(t.s=qt(S(t.Ga,t,e),Vn(t,t.B)),t.B++,!0))}function Dn(t,e){var n;n=e?e.l:t.U++;const r=ke(t.I);Le(r,"SID",t.K),Le(r,"RID",n),Le(r,"AID",t.T),Rn(t,r),t.m&&t.o&&hn(r,t.m,t.o),n=new ie(t,t.j,n,t.B+1),null===t.m&&(n.H=t.o),e&&(t.i=e.D.concat(t.i)),e=kn(t,n,1e3),n.I=Math.round(.5*t.wa)+Math.round(.5*t.wa*Math.random()),_e(t.h,n),ce(n,r,e)}function Rn(t,e){t.H&&M(t.H,(function(t,n){Le(e,n,t)})),t.l&&Ce({},(function(t,n){Le(e,n,t)}))}function kn(t,e,n){n=Math.min(t.i.length,n);var r=t.l?S(t.l.Na,t.l,t):null;t:{var i=t.i;let e=-1;for(;;){const t=["count="+n];-1==e?0<n?(e=i[0].g,t.push("ofs="+e)):e=0:t.push("ofs="+e);let o=!0;for(let s=0;s<n;s++){let n=i[s].g;const a=i[s].map;if(n-=e,0>n)e=Math.max(0,i[s].g-100),o=!1;else try{rn(a,t,"req"+n+"_")}catch(b){r&&r(a)}}if(o){r=t.join("&");break t}}}return t=t.i.splice(0,n),e.D=t,r}function Nn(t){if(!t.g&&!t.u){t.Y=1;var e=t.Fa;z||W(),K||(z(),K=!0),q.add(e,t),t.v=0}}function Mn(t){return!(t.g||t.u||3<=t.v)&&(t.Y++,t.u=qt(S(t.Fa,t),Vn(t,t.v)),t.v++,!0)}function Pn(t){null!=t.A&&(a.clearTimeout(t.A),t.A=null)}function Ln(t){t.g=new ie(t,t.j,"rpc",t.Y),null===t.m&&(t.g.H=t.o),t.g.O=0;var e=ke(t.qa);Le(e,"RID","rpc"),Le(e,"SID",t.K),Le(e,"AID",t.T),Le(e,"CI",t.F?"0":"1"),!t.F&&t.ja&&Le(e,"TO",t.ja),Le(e,"TYPE","xmlhttp"),Rn(t,e),t.m&&t.o&&hn(e,t.m,t.o),t.L&&(t.g.I=t.L);var n=t.g;t=t.ia,n.L=1,n.v=Fe(ke(e)),n.m=null,n.P=!0,ue(n,t)}function Fn(t){null!=t.C&&(a.clearTimeout(t.C),t.C=null)}function jn(t,e){var n=null;if(t.g==e){Fn(t),Pn(t),t.g=null;var r=2}else{if(!Te(t.h,e))return;n=e.D,Se(t.h,e),r=1}if(0!=t.G)if(e.o)if(1==r){n=e.m?e.m.length:0,e=Date.now()-e.F;var i=t.B;r=$t(),Tt(r,new Kt(r,n)),Cn(t)}else Nn(t);else if(i=e.s,3==i||0==i&&0<e.X||!(1==r&&On(t,e)||2==r&&Mn(t)))switch(n&&0<n.length&&(e=t.h,e.i=e.i.concat(n)),i){case 1:Un(t,5);break;case 4:Un(t,10);break;case 3:Un(t,6);break;default:Un(t,2)}}function Vn(t,e){let n=t.Ta+Math.floor(Math.random()*t.cb);return t.isActive()||(n*=2),n*e}function Un(t,e){if(t.j.info("Error code "+e),2==e){var n=S(t.fb,t),r=t.Xa;const e=!r;r=new Re(r||"//www.google.com/images/cleardot.gif"),a.location&&"http"==a.location.protocol||Ne(r,"https"),Fe(r),e?Ze(r.toString(),n):tn(r.toString(),n)}else zt(2);t.G=0,t.l&&t.l.sa(e),$n(t),xn(t)}function $n(t){if(t.G=0,t.ka=[],t.l){const e=Ae(t.h);0==e.length&&0==t.i.length||(C(t.ka,e),C(t.ka,t.i),t.h.i.length=0,x(t.i),t.i.length=0),t.l.ra()}}function Bn(t,e,n){var r=n instanceof Re?ke(n):new Re(n);if(""!=r.g)e&&(r.g=e+"."+r.g),Me(r,r.s);else{var i=a.location;r=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var o=new Re(null);r&&Ne(o,r),e&&(o.g=e),i&&Me(o,i),n&&(o.l=n),r=o}return n=t.D,e=t.ya,n&&e&&Le(r,n,e),Le(r,"VER",t.la),Rn(t,r),r}function Hn(t,e,n){if(e&&!t.J)throw Error("Can't create secondary domain capable XhrIo object.");return e=t.Ca&&!t.pa?new fn(new on({eb:n})):new fn(t.pa),e.Ha(t.J),e}function Gn(){}function zn(){}function Kn(t,e){Et.call(this),this.g=new Sn(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.o=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.va&&(t?t["X-WebChannel-Client-Profile"]=e.va:t={"X-WebChannel-Client-Profile":e.va}),this.g.S=t,(t=e&&e.Sb)&&!D(t)&&(this.g.m=t),this.v=e&&e.supportsCrossDomainXhr||!1,this.u=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!D(e)&&(this.g.D=e,t=this.h,null!==t&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Qn(this)}function qn(t){Ft.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var e=t.__sm__;if(e){t:{for(const n in e){t=n;break t}t=void 0}(this.i=t)&&(t=this.i,e=null!==e&&t in e?e[t]:void 0),this.data=e}else this.data=t}function Wn(){jt.call(this),this.status=1}function Qn(t){this.g=t}t=fn.prototype,t.Ha=function(t){this.J=t},t.ea=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+t);e=e?e.toUpperCase():"GET",this.D=t,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():te.g(),this.v=this.o?Mt(this.o):Mt(te),this.g.onreadystatechange=S(this.Ea,this);try{this.B=!0,this.g.open(e,String(t),!0),this.B=!1}catch(o){return void gn(this,o)}if(t=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else{if("function"!==typeof r.keys||"function"!==typeof r.get)throw Error("Unknown input type for opt_headers: "+String(r));for(const t of r.keys())n.set(t,r.get(t))}r=Array.from(n.keys()).find((t=>"content-type"==t.toLowerCase())),i=a.FormData&&t instanceof a.FormData,!(0<=Array.prototype.indexOf.call(pn,e,void 0))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[s,a]of n)this.g.setRequestHeader(s,a);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{wn(this),this.u=!0,this.g.send(t),this.u=!1}catch(o){gn(this,o)}},t.abort=function(t){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=t||7,Tt(this,"complete"),Tt(this,"abort"),vn(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),vn(this,!0)),fn.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?yn(this):this.bb())},t.bb=function(){yn(this)},t.isActive=function(){return!!this.g},t.Z=function(){try{return 2<bn(this)?this.g.status:-1}catch(t){return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch(t){return""}},t.Oa=function(t){if(this.g){var e=this.g.responseText;return t&&0==e.indexOf(t)&&(e=e.substring(t.length)),Rt(e)}},t.Ba=function(){return this.m},t.Ka=function(){return"string"===typeof this.l?this.l:String(this.l)},t=Sn.prototype,t.la=8,t.G=1,t.connect=function(t,e,n,r){zt(0),this.W=t,this.H=e||{},n&&void 0!==r&&(this.H.OSID=n,this.H.OAID=r),this.F=this.X,this.I=Bn(this,null,this.W),Cn(this)},t.Ga=function(t){if(this.s)if(this.s=null,1==this.G){if(!t){this.U=Math.floor(1e5*Math.random()),t=this.U++;const i=new ie(this,this.j,t);let o=this.o;if(this.S&&(o?(o=L(o),j(o,this.S)):o=this.S),null!==this.m||this.O||(i.H=o,o=null),this.P)t:{for(var e=0,n=0;n<this.i.length;n++){var r=this.i[n];if(r="__data__"in r.map&&(r=r.map.__data__,"string"===typeof r)?r.length:void 0,void 0===r)break;if(e+=r,4096<e){e=n;break t}if(4096===e||n===this.i.length-1){e=n+1;break t}}e=1e3}else e=1e3;e=kn(this,i,e),n=ke(this.I),Le(n,"RID",t),Le(n,"CVER",22),this.D&&Le(n,"X-HTTP-Session-Id",this.D),Rn(this,n),o&&(this.O?e="headers="+encodeURIComponent(String(ln(o)))+"&"+e:this.m&&hn(n,this.m,o)),_e(this.h,i),this.Ua&&Le(n,"TYPE","init"),this.P?(Le(n,"$req",e),Le(n,"SID","null"),i.T=!0,ce(i,n,null)):ce(i,n,e),this.G=2}}else 3==this.G&&(t?Dn(this,t):0==this.i.length||be(this.h)||Dn(this))},t.Fa=function(){if(this.u=null,Ln(this),this.ba&&!(this.M||null==this.g||0>=this.R)){var t=2*this.R;this.j.info("BP detection timer enabled: "+t),this.A=qt(S(this.ab,this),t)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,zt(10),In(this),Ln(this))},t.Za=function(){null!=this.C&&(this.C=null,In(this),Mn(this),zt(19))},t.fb=function(t){t?(this.j.info("Successfully pinged google.com"),zt(2)):(this.j.info("Failed to ping google.com"),zt(1))},t.isActive=function(){return!!this.l&&this.l.isActive(this)},t=Gn.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){},zn.prototype.g=function(t,e){return new Kn(t,e)},I(Kn,Et),Kn.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Kn.prototype.close=function(){An(this.g)},Kn.prototype.o=function(t){var e=this.g;if("string"===typeof t){var n={};n.__data__=t,t=n}else this.u&&(n={},n.__data__=Dt(t),t=n);e.i.push(new ve(e.Ya++,t)),3==e.G&&Cn(e)},Kn.prototype.N=function(){this.g.l=null,delete this.j,An(this.g),delete this.g,Kn.aa.N.call(this)},I(qn,Ft),I(Wn,jt),I(Qn,Gn),Qn.prototype.ua=function(){Tt(this.g,"a")},Qn.prototype.ta=function(t){Tt(this.g,new qn(t))},Qn.prototype.sa=function(t){Tt(this.g,new Wn)},Qn.prototype.ra=function(){Tt(this.g,"b")},zn.prototype.createWebChannel=zn.prototype.g,Kn.prototype.send=Kn.prototype.o,Kn.prototype.open=Kn.prototype.m,Kn.prototype.close=Kn.prototype.close,y=w.createWebChannelTransport=function(){return new zn},m=w.getStatEventTarget=function(){return $t()},g=w.Event=Vt,p=w.Stat={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},ee.NO_ERROR=0,ee.TIMEOUT=8,ee.HTTP_ERROR=6,d=w.ErrorCode=ee,ne.COMPLETE="complete",f=w.EventType=ne,Pt.EventType=Lt,Lt.OPEN="a",Lt.CLOSE="b",Lt.ERROR="c",Lt.MESSAGE="d",Et.prototype.listen=Et.prototype.K,h=w.WebChannel=Pt,w.FetchXmlHttpFactory=on,fn.prototype.listenOnce=fn.prototype.L,fn.prototype.getLastError=fn.prototype.Ka,fn.prototype.getLastErrorCode=fn.prototype.Ba,fn.prototype.getStatus=fn.prototype.Z,fn.prototype.getResponseJson=fn.prototype.Oa,fn.prototype.getResponseText=fn.prototype.oa,fn.prototype.send=fn.prototype.ea,fn.prototype.setWithCredentials=fn.prototype.Ha,l=w.XhrIo=fn}).apply("undefined"!==typeof v?v:"undefined"!==typeof self?self:"undefined"!==typeof window?window:{});const b="@firebase/firestore";
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
 */class E{constructor(t){this.uid=t}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}E.UNAUTHENTICATED=new E(null),E.GOOGLE_CREDENTIALS=new E("google-credentials-uid"),E.FIRST_PARTY=new E("first-party-uid"),E.MOCK_USER=new E("mock-user");
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
 */
let T="11.0.2";
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
 */const _=new s.Vy("@firebase/firestore");function S(){return _.logLevel}function A(t,...e){if(_.logLevel<=s.$b.DEBUG){const n=e.map(C);_.debug(`Firestore (${T}): ${t}`,...n)}}function I(t,...e){if(_.logLevel<=s.$b.ERROR){const n=e.map(C);_.error(`Firestore (${T}): ${t}`,...n)}}function x(t,...e){if(_.logLevel<=s.$b.WARN){const n=e.map(C);_.warn(`Firestore (${T}): ${t}`,...n)}}function C(t){if("string"==typeof t)return t;try{
/**
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
 */return function(t){return JSON.stringify(t)}(t)}catch(e){return t}}
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
 */function O(t="Unexpected state"){const e=`FIRESTORE (${T}) INTERNAL ASSERTION FAILED: `+t;throw I(e),new Error(e)}function D(t,e){t||O()}function R(t,e){return t}
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
 */const k={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class N extends a.g{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
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
 */class M{constructor(){this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}}
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
 */class P{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class L{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable((()=>e(E.UNAUTHENTICATED)))}shutdown(){}}class F{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable((()=>e(this.token.user)))}shutdown(){this.changeListener=null}}class j{constructor(t){this.t=t,this.currentUser=E.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){D(void 0===this.o);let n=this.i;const r=t=>this.i!==n?(n=this.i,e(t)):Promise.resolve();let i=new M;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new M,t.enqueueRetryable((()=>r(this.currentUser)))};const o=()=>{const e=i;t.enqueueRetryable((async()=>{await e.promise,await r(this.currentUser)}))},s=t=>{A("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=t,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit((t=>s(t))),setTimeout((()=>{if(!this.auth){const t=this.t.getImmediate({optional:!0});t?s(t):(A("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new M)}}),0),o()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then((e=>this.i!==t?(A("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):e?(D("string"==typeof e.accessToken),new P(e.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const t=this.auth&&this.auth.getUid();return D(null===t||"string"==typeof t),new E(t)}}class V{constructor(t,e,n){this.l=t,this.h=e,this.P=n,this.type="FirstParty",this.user=E.FIRST_PARTY,this.T=new Map}I(){return this.P?this.P():null}get headers(){this.T.set("X-Goog-AuthUser",this.l);const t=this.I();return t&&this.T.set("Authorization",t),this.h&&this.T.set("X-Goog-Iam-Authorization-Token",this.h),this.T}}class U{constructor(t,e,n){this.l=t,this.h=e,this.P=n}getToken(){return Promise.resolve(new V(this.l,this.h,this.P))}start(t,e){t.enqueueRetryable((()=>e(E.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class ${constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class B{constructor(t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(t,e){D(void 0===this.o);const n=t=>{null!=t.error&&A("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${t.error.message}`);const n=t.token!==this.R;return this.R=t.token,A("FirebaseAppCheckTokenProvider",`Received ${n?"new":"existing"} token.`),n?e(t.token):Promise.resolve()};this.o=e=>{t.enqueueRetryable((()=>n(e)))};const r=t=>{A("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=t,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit((t=>r(t))),setTimeout((()=>{if(!this.appCheck){const t=this.A.getImmediate({optional:!0});t?r(t):A("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then((t=>t?(D("string"==typeof t.token),this.R=t.token,new $(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}function H(t,e){return t<e?-1:t>e?1:0}function G(t,e,n){return t.length===e.length&&t.every(((t,r)=>n(t,e[r])))}
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
 */
class z{static now(){return z.fromMillis(Date.now())}static fromDate(t){return z.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),n=Math.floor(1e6*(t-1e3*e));return new z(e,n)}constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new N(k.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new N(k.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<-62135596800)throw new N(k.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new N(k.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?H(this.nanoseconds,t.nanoseconds):H(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}
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
 */class K{static fromTimestamp(t){return new K(t)}static min(){return new K(new z(0,0))}static max(){return new K(new z(253402300799,999999999))}constructor(t){this.timestamp=t}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}
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
 */class q{constructor(t,e,n){void 0===e?e=0:e>t.length&&O(),void 0===n?n=t.length-e:n>t.length-e&&O(),this.segments=t,this.offset=e,this.len=n}get length(){return this.len}isEqual(t){return 0===q.comparator(this,t)}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof q?t.forEach((t=>{e.push(t)})):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=void 0===t?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return 0===this.length}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,n=this.limit();e<n;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const n=Math.min(t.length,e.length);for(let r=0;r<n;r++){const n=t.get(r),i=e.get(r);if(n<i)return-1;if(n>i)return 1}return t.length<e.length?-1:t.length>e.length?1:0}}class W extends q{construct(t,e,n){return new W(t,e,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const e=[];for(const n of t){if(n.indexOf("//")>=0)throw new N(k.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);e.push(...n.split("/").filter((t=>t.length>0)))}return new W(e)}static emptyPath(){return new W([])}}const Q=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class X extends q{construct(t,e,n){return new X(t,e,n)}static isValidIdentifier(t){return Q.test(t)}canonicalString(){return this.toArray().map((t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),X.isValidIdentifier(t)||(t="`"+t+"`"),t))).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new X(["__name__"])}static fromServerFormat(t){const e=[];let n="",r=0;const i=()=>{if(0===n.length)throw new N(k.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(n),n=""};let o=!1;for(;r<t.length;){const e=t[r];if("\\"===e){if(r+1===t.length)throw new N(k.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const e=t[r+1];if("\\"!==e&&"."!==e&&"`"!==e)throw new N(k.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);n+=e,r+=2}else"`"===e?(o=!o,r++):"."!==e||o?(n+=e,r++):(i(),r++)}if(i(),o)throw new N(k.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new X(e)}static emptyPath(){return new X([])}}
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
 */class Y{constructor(t){this.path=t}static fromPath(t){return new Y(W.fromString(t))}static fromName(t){return new Y(W.fromString(t).popFirst(5))}static empty(){return new Y(W.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return null!==t&&0===W.comparator(this.path,t.path)}toString(){return this.path.toString()}static comparator(t,e){return W.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new Y(new W(t.slice()))}}
/**
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
 */class J{constructor(t,e,n,r){this.indexId=t,this.collectionGroup=e,this.fields=n,this.indexState=r}}J.UNKNOWN_ID=-1;function Z(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=K.fromTimestamp(1e9===r?new z(n+1,0):new z(n,r));return new et(i,Y.empty(),e)}function tt(t){return new et(t.readTime,t.key,-1)}class et{constructor(t,e,n){this.readTime=t,this.documentKey=e,this.largestBatchId=n}static min(){return new et(K.min(),Y.empty(),-1)}static max(){return new et(K.max(),Y.empty(),-1)}}function nt(t,e){let n=t.readTime.compareTo(e.readTime);return 0!==n?n:(n=Y.comparator(t.documentKey,e.documentKey),0!==n?n:H(t.largestBatchId,e.largestBatchId)
/**
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
 */)}class rt{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((t=>t()))}}
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
 */
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
 */
class it{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&O(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new it(((n,r)=>{this.nextCallback=e=>{this.wrapSuccess(t,e).next(n,r)},this.catchCallback=t=>{this.wrapFailure(e,t).next(n,r)}}))}toPromise(){return new Promise(((t,e)=>{this.next(t,e)}))}wrapUserFunction(t){try{const e=t();return e instanceof it?e:it.resolve(e)}catch(t){return it.reject(t)}}wrapSuccess(t,e){return t?this.wrapUserFunction((()=>t(e))):it.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction((()=>t(e))):it.reject(e)}static resolve(t){return new it(((e,n)=>{e(t)}))}static reject(t){return new it(((e,n)=>{n(t)}))}static waitFor(t){return new it(((e,n)=>{let r=0,i=0,o=!1;t.forEach((t=>{++r,t.next((()=>{++i,o&&i===r&&e()}),(t=>n(t)))})),o=!0,i===r&&e()}))}static or(t){let e=it.resolve(!1);for(const n of t)e=e.next((t=>t?it.resolve(t):n()));return e}static forEach(t,e){const n=[];return t.forEach(((t,r)=>{n.push(e.call(this,t,r))})),this.waitFor(n)}static mapArray(t,e){return new it(((n,r)=>{const i=t.length,o=new Array(i);let s=0;for(let a=0;a<i;a++){const c=a;e(t[c]).next((t=>{o[c]=t,++s,s===i&&n(o)}),(t=>r(t)))}}))}static doWhile(t,e){return new it(((n,r)=>{const i=()=>{!0===t()?e().next((()=>{i()}),r):n()};i()}))}}
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
 */function ot(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function st(t){return"IndexedDbTransactionError"===t.name}
/**
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
 */
class at{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=t=>this.ie(t),this.se=t=>e.writeSequenceNumber(t))}ie(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.se&&this.se(t),t}}function ct(t){return null==t}function ut(t){return 0===t&&1/t==-1/0}at.oe=-1;const lt=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],ht=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],ft=ht,dt=[...ft,"indexConfiguration","indexState","indexEntries"];
/**
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
 */
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
 */
function pt(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function gt(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function mt(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}
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
 */class yt{constructor(t,e){this.comparator=t,this.root=e||wt.EMPTY}insert(t,e){return new yt(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,wt.BLACK,null,null))}remove(t){return new yt(this.comparator,this.root.remove(t,this.comparator).copy(null,null,wt.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const n=this.comparator(t,e.key);if(0===n)return e.value;n<0?e=e.left:n>0&&(e=e.right)}return null}indexOf(t){let e=0,n=this.root;for(;!n.isEmpty();){const r=this.comparator(t,n.key);if(0===r)return e+n.left.size;r<0?n=n.left:(e+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal(((e,n)=>(t(e,n),!1)))}toString(){const t=[];return this.inorderTraversal(((e,n)=>(t.push(`${e}:${n}`),!1))),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new vt(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new vt(this.root,t,this.comparator,!1)}getReverseIterator(){return new vt(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new vt(this.root,t,this.comparator,!0)}}class vt{constructor(t,e,n,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!t.isEmpty();)if(i=e?n(t.key,e):1,e&&r&&(i*=-1),i<0)t=this.isReverse?t.left:t.right;else{if(0===i){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class wt{constructor(t,e,n,r,i){this.key=t,this.value=e,this.color=null!=n?n:wt.RED,this.left=null!=r?r:wt.EMPTY,this.right=null!=i?i:wt.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,n,r,i){return new wt(null!=t?t:this.key,null!=e?e:this.value,null!=n?n:this.color,null!=r?r:this.left,null!=i?i:this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,n){let r=this;const i=n(t,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(t,e,n),null):0===i?r.copy(null,e,null,null,null):r.copy(null,null,null,null,r.right.insert(t,e,n)),r.fixUp()}removeMin(){if(this.left.isEmpty())return wt.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let n,r=this;if(e(t,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(t,e),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),0===e(t,r.key)){if(r.right.isEmpty())return wt.EMPTY;n=r.right.min(),r=r.copy(n.key,n.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(t,e))}return r.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,wt.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,wt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw O();if(this.right.isRed())throw O();const t=this.left.check();if(t!==this.right.check())throw O();return t+(this.isRed()?0:1)}}wt.EMPTY=null,wt.RED=!0,wt.BLACK=!1,wt.EMPTY=new class{constructor(){this.size=0}get key(){throw O()}get value(){throw O()}get color(){throw O()}get left(){throw O()}get right(){throw O()}copy(t,e,n,r,i){return this}insert(t,e,n){return new wt(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};
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
 */
class bt{constructor(t){this.comparator=t,this.data=new yt(this.comparator)}has(t){return null!==this.data.get(t)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal(((e,n)=>(t(e),!1)))}forEachInRange(t,e){const n=this.data.getIteratorFrom(t[0]);for(;n.hasNext();){const r=n.getNext();if(this.comparator(r.key,t[1])>=0)return;e(r.key)}}forEachWhile(t,e){let n;for(n=void 0!==e?this.data.getIteratorFrom(e):this.data.getIterator();n.hasNext();)if(!t(n.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new Et(this.data.getIterator())}getIteratorFrom(t){return new Et(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach((t=>{e=e.add(t)})),e}isEqual(t){if(!(t instanceof bt))return!1;if(this.size!==t.size)return!1;const e=this.data.getIterator(),n=t.data.getIterator();for(;e.hasNext();){const t=e.getNext().key,r=n.getNext().key;if(0!==this.comparator(t,r))return!1}return!0}toArray(){const t=[];return this.forEach((e=>{t.push(e)})),t}toString(){const t=[];return this.forEach((e=>t.push(e))),"SortedSet("+t.toString()+")"}copy(t){const e=new bt(this.comparator);return e.data=t,e}}class Et{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}
/**
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
 */
class Tt{constructor(t){this.fields=t,t.sort(X.comparator)}static empty(){return new Tt([])}unionWith(t){let e=new bt(X.comparator);for(const n of this.fields)e=e.add(n);for(const n of t)e=e.add(n);return new Tt(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return G(this.fields,t.fields,((t,e)=>t.isEqual(e)))}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _t extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}
/**
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
 */
/**
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
 */
class St{constructor(t){this.binaryString=t}static fromBase64String(t){const e=function(t){try{return atob(t)}catch(t){throw"undefined"!=typeof DOMException&&t instanceof DOMException?new _t("Invalid base64 string: "+t):t}}(t);return new St(e)}static fromUint8Array(t){const e=function(t){let e="";for(let n=0;n<t.length;++n)e+=String.fromCharCode(t[n]);return e}(t);return new St(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const e=new Uint8Array(t.length);for(let n=0;n<t.length;n++)e[n]=t.charCodeAt(n);return e}
/**
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
 */(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return H(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}St.EMPTY_BYTE_STRING=new St("");const At=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function It(t){if(D(!!t),"string"==typeof t){let e=0;const n=At.exec(t);if(D(!!n),n[1]){let t=n[1];t=(t+"000000000").substr(0,9),e=Number(t)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:xt(t.seconds),nanos:xt(t.nanos)}}function xt(t){return"number"==typeof t?t:"string"==typeof t?Number(t):0}function Ct(t){return"string"==typeof t?St.fromBase64String(t):St.fromUint8Array(t)}
/**
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
 */function Ot(t){var e,n;return"server_timestamp"===(null===(n=((null===(e=null==t?void 0:t.mapValue)||void 0===e?void 0:e.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function Dt(t){const e=t.mapValue.fields.__previous_value__;return Ot(e)?Dt(e):e}function Rt(t){const e=It(t.mapValue.fields.__local_write_time__.timestampValue);return new z(e.seconds,e.nanos)}
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
 */class kt{constructor(t,e){this.projectId=t,this.database=e||"(default)"}static empty(){return new kt("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(t){return t instanceof kt&&t.projectId===this.projectId&&t.database===this.database}}
/**
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
 */const Nt={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Mt(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Ot(t)?4:qt(t)?9007199254740991:zt(t)?10:11:O()}function Pt(t,e){if(t===e)return!0;const n=Mt(t);if(n!==Mt(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Rt(t).isEqual(Rt(e));case 3:return function(t,e){if("string"==typeof t.timestampValue&&"string"==typeof e.timestampValue&&t.timestampValue.length===e.timestampValue.length)return t.timestampValue===e.timestampValue;const n=It(t.timestampValue),r=It(e.timestampValue);return n.seconds===r.seconds&&n.nanos===r.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(t,e){return Ct(t.bytesValue).isEqual(Ct(e.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(t,e){return xt(t.geoPointValue.latitude)===xt(e.geoPointValue.latitude)&&xt(t.geoPointValue.longitude)===xt(e.geoPointValue.longitude)}(t,e);case 2:return function(t,e){if("integerValue"in t&&"integerValue"in e)return xt(t.integerValue)===xt(e.integerValue);if("doubleValue"in t&&"doubleValue"in e){const n=xt(t.doubleValue),r=xt(e.doubleValue);return n===r?ut(n)===ut(r):isNaN(n)&&isNaN(r)}return!1}(t,e);case 9:return G(t.arrayValue.values||[],e.arrayValue.values||[],Pt);case 10:case 11:return function(t,e){const n=t.mapValue.fields||{},r=e.mapValue.fields||{};if(pt(n)!==pt(r))return!1;for(const i in n)if(n.hasOwnProperty(i)&&(void 0===r[i]||!Pt(n[i],r[i])))return!1;return!0}(t,e);default:return O()}}function Lt(t,e){return void 0!==(t.values||[]).find((t=>Pt(t,e)))}function Ft(t,e){if(t===e)return 0;const n=Mt(t),r=Mt(e);if(n!==r)return H(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return H(t.booleanValue,e.booleanValue);case 2:return function(t,e){const n=xt(t.integerValue||t.doubleValue),r=xt(e.integerValue||e.doubleValue);return n<r?-1:n>r?1:n===r?0:isNaN(n)?isNaN(r)?0:-1:1}(t,e);case 3:return jt(t.timestampValue,e.timestampValue);case 4:return jt(Rt(t),Rt(e));case 5:return H(t.stringValue,e.stringValue);case 6:return function(t,e){const n=Ct(t),r=Ct(e);return n.compareTo(r)}(t.bytesValue,e.bytesValue);case 7:return function(t,e){const n=t.split("/"),r=e.split("/");for(let i=0;i<n.length&&i<r.length;i++){const t=H(n[i],r[i]);if(0!==t)return t}return H(n.length,r.length)}(t.referenceValue,e.referenceValue);case 8:return function(t,e){const n=H(xt(t.latitude),xt(e.latitude));return 0!==n?n:H(xt(t.longitude),xt(e.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return Vt(t.arrayValue,e.arrayValue);case 10:return function(t,e){var n,r,i,o;const s=t.fields||{},a=e.fields||{},c=null===(n=s.value)||void 0===n?void 0:n.arrayValue,u=null===(r=a.value)||void 0===r?void 0:r.arrayValue,l=H((null===(i=null==c?void 0:c.values)||void 0===i?void 0:i.length)||0,(null===(o=null==u?void 0:u.values)||void 0===o?void 0:o.length)||0);return 0!==l?l:Vt(c,u)}(t.mapValue,e.mapValue);case 11:return function(t,e){if(t===Nt.mapValue&&e===Nt.mapValue)return 0;if(t===Nt.mapValue)return 1;if(e===Nt.mapValue)return-1;const n=t.fields||{},r=Object.keys(n),i=e.fields||{},o=Object.keys(i);r.sort(),o.sort();for(let s=0;s<r.length&&s<o.length;++s){const t=H(r[s],o[s]);if(0!==t)return t;const e=Ft(n[r[s]],i[o[s]]);if(0!==e)return e}return H(r.length,o.length)}(t.mapValue,e.mapValue);default:throw O()}}function jt(t,e){if("string"==typeof t&&"string"==typeof e&&t.length===e.length)return H(t,e);const n=It(t),r=It(e),i=H(n.seconds,r.seconds);return 0!==i?i:H(n.nanos,r.nanos)}function Vt(t,e){const n=t.values||[],r=e.values||[];for(let i=0;i<n.length&&i<r.length;++i){const t=Ft(n[i],r[i]);if(t)return t}return H(n.length,r.length)}function Ut(t){return $t(t)}function $t(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(t){const e=It(t);return`time(${e.seconds},${e.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(t){return Ct(t).toBase64()}(t.bytesValue):"referenceValue"in t?function(t){return Y.fromName(t).toString()}(t.referenceValue):"geoPointValue"in t?function(t){return`geo(${t.latitude},${t.longitude})`}(t.geoPointValue):"arrayValue"in t?function(t){let e="[",n=!0;for(const r of t.values||[])n?n=!1:e+=",",e+=$t(r);return e+"]"}(t.arrayValue):"mapValue"in t?function(t){const e=Object.keys(t.fields||{}).sort();let n="{",r=!0;for(const i of e)r?r=!1:n+=",",n+=`${i}:${$t(t.fields[i])}`;return n+"}"}(t.mapValue):O()}function Bt(t){return!!t&&"integerValue"in t}function Ht(t){return!!t&&"arrayValue"in t}function Gt(t){return!!t&&"mapValue"in t}function zt(t){var e,n;return"__vector__"===(null===(n=((null===(e=null==t?void 0:t.mapValue)||void 0===e?void 0:e.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function Kt(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&"object"==typeof t.timestampValue)return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return gt(t.mapValue.fields,((t,n)=>e.mapValue.fields[t]=Kt(n))),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Kt(t.arrayValue.values[n]);return e}return Object.assign({},t)}function qt(t){return"__max__"===(((t.mapValue||{}).fields||{}).__type__||{}).stringValue}
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
 */
class Wt{constructor(t){this.value=t}static empty(){return new Wt({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let n=0;n<t.length-1;++n)if(e=(e.mapValue.fields||{})[t.get(n)],!Gt(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=Kt(e)}setAll(t){let e=X.emptyPath(),n={},r=[];t.forEach(((t,i)=>{if(!e.isImmediateParentOf(i)){const t=this.getFieldsMap(e);this.applyChanges(t,n,r),n={},r=[],e=i.popLast()}t?n[i.lastSegment()]=Kt(t):r.push(i.lastSegment())}));const i=this.getFieldsMap(e);this.applyChanges(i,n,r)}delete(t){const e=this.field(t.popLast());Gt(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return Pt(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let n=0;n<t.length;++n){let r=e.mapValue.fields[t.get(n)];Gt(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},e.mapValue.fields[t.get(n)]=r),e=r}return e.mapValue.fields}applyChanges(t,e,n){gt(e,((e,n)=>t[e]=n));for(const r of n)delete t[r]}clone(){return new Wt(Kt(this.value))}}
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
 */
class Qt{constructor(t,e,n,r,i,o,s){this.key=t,this.documentType=e,this.version=n,this.readTime=r,this.createTime=i,this.data=o,this.documentState=s}static newInvalidDocument(t){return new Qt(t,0,K.min(),K.min(),K.min(),Wt.empty(),0)}static newFoundDocument(t,e,n,r){return new Qt(t,1,e,K.min(),n,r,0)}static newNoDocument(t,e){return new Qt(t,2,e,K.min(),K.min(),Wt.empty(),0)}static newUnknownDocument(t,e){return new Qt(t,3,e,K.min(),K.min(),Wt.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(K.min())||2!==this.documentType&&0!==this.documentType||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=Wt.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=Wt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=K.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(t){return t instanceof Qt&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new Qt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}
/**
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
 */class Xt{constructor(t,e){this.position=t,this.inclusive=e}}function Yt(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const o=e[i],s=t.position[i];if(r=o.field.isKeyField()?Y.comparator(Y.fromName(s.referenceValue),n.key):Ft(s,n.data.field(o.field)),"desc"===o.dir&&(r*=-1),0!==r)break}return r}function Jt(t,e){if(null===t)return null===e;if(null===e)return!1;if(t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Pt(t.position[n],e.position[n]))return!1;return!0}
/**
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
 */class Zt{constructor(t,e="asc"){this.field=t,this.dir=e}}function te(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}
/**
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
 */class ee{}class ne extends ee{constructor(t,e,n){super(),this.field=t,this.op=e,this.value=n}static create(t,e,n){return t.isKeyField()?"in"===e||"not-in"===e?this.createKeyFieldInFilter(t,e,n):new le(t,e,n):"array-contains"===e?new pe(t,n):"in"===e?new ge(t,n):"not-in"===e?new me(t,n):"array-contains-any"===e?new ye(t,n):new ne(t,e,n)}static createKeyFieldInFilter(t,e,n){return"in"===e?new he(t,n):new fe(t,n)}matches(t){const e=t.data.field(this.field);return"!="===this.op?null!==e&&this.matchesComparison(Ft(e,this.value)):null!==e&&Mt(this.value)===Mt(e)&&this.matchesComparison(Ft(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return 0===t;case"!=":return 0!==t;case">":return t>0;case">=":return t>=0;default:return O()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class re extends ee{constructor(t,e){super(),this.filters=t,this.op=e,this.ae=null}static create(t,e){return new re(t,e)}matches(t){return ie(this)?void 0===this.filters.find((e=>!e.matches(t))):void 0!==this.filters.find((e=>e.matches(t)))}getFlattenedFilters(){return null!==this.ae||(this.ae=this.filters.reduce(((t,e)=>t.concat(e.getFlattenedFilters())),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function ie(t){return"and"===t.op}function oe(t){return se(t)&&ie(t)}function se(t){for(const e of t.filters)if(e instanceof re)return!1;return!0}function ae(t){if(t instanceof ne)return t.field.canonicalString()+t.op.toString()+Ut(t.value);if(oe(t))return t.filters.map((t=>ae(t))).join(",");{const e=t.filters.map((t=>ae(t))).join(",");return`${t.op}(${e})`}}function ce(t,e){return t instanceof ne?function(t,e){return e instanceof ne&&t.op===e.op&&t.field.isEqual(e.field)&&Pt(t.value,e.value)}(t,e):t instanceof re?function(t,e){return e instanceof re&&t.op===e.op&&t.filters.length===e.filters.length&&t.filters.reduce(((t,n,r)=>t&&ce(n,e.filters[r])),!0)}(t,e):void O()}function ue(t){return t instanceof ne?function(t){return`${t.field.canonicalString()} ${t.op} ${Ut(t.value)}`}(t):t instanceof re?function(t){return t.op.toString()+" {"+t.getFilters().map(ue).join(" ,")+"}"}(t):"Filter"}class le extends ne{constructor(t,e,n){super(t,e,n),this.key=Y.fromName(n.referenceValue)}matches(t){const e=Y.comparator(t.key,this.key);return this.matchesComparison(e)}}class he extends ne{constructor(t,e){super(t,"in",e),this.keys=de("in",e)}matches(t){return this.keys.some((e=>e.isEqual(t.key)))}}class fe extends ne{constructor(t,e){super(t,"not-in",e),this.keys=de("not-in",e)}matches(t){return!this.keys.some((e=>e.isEqual(t.key)))}}function de(t,e){var n;return((null===(n=e.arrayValue)||void 0===n?void 0:n.values)||[]).map((t=>Y.fromName(t.referenceValue)))}class pe extends ne{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return Ht(e)&&Lt(e.arrayValue,this.value)}}class ge extends ne{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return null!==e&&Lt(this.value.arrayValue,e)}}class me extends ne{constructor(t,e){super(t,"not-in",e)}matches(t){if(Lt(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return null!==e&&!Lt(this.value.arrayValue,e)}}class ye extends ne{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!Ht(e)||!e.arrayValue.values)&&e.arrayValue.values.some((t=>Lt(this.value.arrayValue,t)))}}
/**
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
 */class ve{constructor(t,e=null,n=[],r=[],i=null,o=null,s=null){this.path=t,this.collectionGroup=e,this.orderBy=n,this.filters=r,this.limit=i,this.startAt=o,this.endAt=s,this.ue=null}}function we(t,e=null,n=[],r=[],i=null,o=null,s=null){return new ve(t,e,n,r,i,o,s)}function be(t){const e=R(t);if(null===e.ue){let t=e.path.canonicalString();null!==e.collectionGroup&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((t=>ae(t))).join(","),t+="|ob:",t+=e.orderBy.map((t=>function(t){return t.field.canonicalString()+t.dir}(t))).join(","),ct(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((t=>Ut(t))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((t=>Ut(t))).join(",")),e.ue=t}return e.ue}function Ee(t,e){if(t.limit!==e.limit)return!1;if(t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!te(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!ce(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Jt(t.startAt,e.startAt)&&Jt(t.endAt,e.endAt)}
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
 */
class Te{constructor(t,e=null,n=[],r=[],i=null,o="F",s=null,a=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=n,this.filters=r,this.limit=i,this.limitType=o,this.startAt=s,this.endAt=a,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function _e(t,e,n,r,i,o,s,a){return new Te(t,e,n,r,i,o,s,a)}function Se(t){return 0===t.filters.length&&null===t.limit&&null==t.startAt&&null==t.endAt&&(0===t.explicitOrderBy.length||1===t.explicitOrderBy.length&&t.explicitOrderBy[0].field.isKeyField())}function Ae(t){return null!==t.collectionGroup}function Ie(t){const e=R(t);if(null===e.ce){e.ce=[];const t=new Set;for(const i of e.explicitOrderBy)e.ce.push(i),t.add(i.field.canonicalString());const n=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc",r=function(t){let e=new bt(X.comparator);return t.filters.forEach((t=>{t.getFlattenedFilters().forEach((t=>{t.isInequality()&&(e=e.add(t.field))}))})),e}(e);r.forEach((r=>{t.has(r.canonicalString())||r.isKeyField()||e.ce.push(new Zt(r,n))})),t.has(X.keyField().canonicalString())||e.ce.push(new Zt(X.keyField(),n))}return e.ce}function xe(t){const e=R(t);return e.le||(e.le=Ce(e,Ie(t))),e.le}function Ce(t,e){if("F"===t.limitType)return we(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map((t=>{const e="desc"===t.dir?"asc":"desc";return new Zt(t.field,e)}));const n=t.endAt?new Xt(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Xt(t.startAt.position,t.startAt.inclusive):null;return we(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Oe(t,e,n){return new Te(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function De(t,e){return Ee(xe(t),xe(e))&&t.limitType===e.limitType}function Re(t){return`${be(xe(t))}|lt:${t.limitType}`}function ke(t){return`Query(target=${function(t){let e=t.path.canonicalString();return null!==t.collectionGroup&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map((t=>ue(t))).join(", ")}]`),ct(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map((t=>function(t){return`${t.field.canonicalString()} (${t.dir})`}(t))).join(", ")}]`),t.startAt&&(e+=", startAt: ",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map((t=>Ut(t))).join(",")),t.endAt&&(e+=", endAt: ",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map((t=>Ut(t))).join(",")),`Target(${e})`}(xe(t))}; limitType=${t.limitType})`}function Ne(t,e){return e.isFoundDocument()&&function(t,e){const n=e.key.path;return null!==t.collectionGroup?e.key.hasCollectionId(t.collectionGroup)&&t.path.isPrefixOf(n):Y.isDocumentKey(t.path)?t.path.isEqual(n):t.path.isImmediateParentOf(n)}(t,e)&&function(t,e){for(const n of Ie(t))if(!n.field.isKeyField()&&null===e.data.field(n.field))return!1;return!0}(t,e)&&function(t,e){for(const n of t.filters)if(!n.matches(e))return!1;return!0}(t,e)&&function(t,e){return!(t.startAt&&!function(t,e,n){const r=Yt(t,e,n);return t.inclusive?r<=0:r<0}(t.startAt,Ie(t),e))&&!(t.endAt&&!function(t,e,n){const r=Yt(t,e,n);return t.inclusive?r>=0:r>0}(t.endAt,Ie(t),e))}(t,e)}function Me(t){return(e,n)=>{let r=!1;for(const i of Ie(t)){const t=Pe(i,e,n);if(0!==t)return t;r=r||i.field.isKeyField()}return 0}}function Pe(t,e,n){const r=t.field.isKeyField()?Y.comparator(e.key,n.key):function(t,e,n){const r=e.data.field(t),i=n.data.field(t);return null!==r&&null!==i?Ft(r,i):O()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return O()}}
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
 */class Le{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0!==n)for(const[r,i]of n)if(this.equalsFn(r,t))return i}has(t){return void 0!==this.get(t)}set(t,e){const n=this.mapKeyFn(t),r=this.inner[n];if(void 0===r)return this.inner[n]=[[t,e]],void this.innerSize++;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],t))return void(r[i]=[t,e]);r.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0===n)return!1;for(let r=0;r<n.length;r++)if(this.equalsFn(n[r][0],t))return 1===n.length?delete this.inner[e]:n.splice(r,1),this.innerSize--,!0;return!1}forEach(t){gt(this.inner,((e,n)=>{for(const[r,i]of n)t(r,i)}))}isEmpty(){return mt(this.inner)}size(){return this.innerSize}}
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
 */const Fe=new yt(Y.comparator);function je(){return Fe}const Ve=new yt(Y.comparator);function Ue(...t){let e=Ve;for(const n of t)e=e.insert(n.key,n);return e}function $e(t){let e=Ve;return t.forEach(((t,n)=>e=e.insert(t,n.overlayedDocument))),e}function Be(){return Ge()}function He(){return Ge()}function Ge(){return new Le((t=>t.toString()),((t,e)=>t.isEqual(e)))}new yt(Y.comparator);const ze=new bt(Y.comparator);function Ke(...t){let e=ze;for(const n of t)e=e.add(n);return e}const qe=new bt(H);function We(){return qe}
/**
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
 */function Qe(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ut(e)?"-0":e}}function Xe(t){return{integerValue:""+t}}
/**
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
 */class Ye{constructor(){this._=void 0}}function Je(t,e,n){return t instanceof en?function(t,e){const n={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:t.seconds,nanos:t.nanoseconds}}}};return e&&Ot(e)&&(e=Dt(e)),e&&(n.fields.__previous_value__=e),{mapValue:n}}(n,e):t instanceof nn?rn(t,e):t instanceof on?sn(t,e):function(t,e){const n=tn(t,e),r=cn(n)+cn(t.Pe);return Bt(n)&&Bt(t.Pe)?Xe(r):Qe(t.serializer,r)}(t,e)}function Ze(t,e,n){return t instanceof nn?rn(t,e):t instanceof on?sn(t,e):n}function tn(t,e){return t instanceof an?function(t){return Bt(t)||function(t){return!!t&&"doubleValue"in t}(t)}(e)?e:{integerValue:0}:null}class en extends Ye{}class nn extends Ye{constructor(t){super(),this.elements=t}}function rn(t,e){const n=un(e);for(const r of t.elements)n.some((t=>Pt(t,r)))||n.push(r);return{arrayValue:{values:n}}}class on extends Ye{constructor(t){super(),this.elements=t}}function sn(t,e){let n=un(e);for(const r of t.elements)n=n.filter((t=>!Pt(t,r)));return{arrayValue:{values:n}}}class an extends Ye{constructor(t,e){super(),this.serializer=t,this.Pe=e}}function cn(t){return xt(t.integerValue||t.doubleValue)}function un(t){return Ht(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}
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
 */function ln(t,e){return t.field.isEqual(e.field)&&function(t,e){return t instanceof nn&&e instanceof nn||t instanceof on&&e instanceof on?G(t.elements,e.elements,Pt):t instanceof an&&e instanceof an?Pt(t.Pe,e.Pe):t instanceof en&&e instanceof en}(t.transform,e.transform)}class hn{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new hn}static exists(t){return new hn(void 0,t)}static updateTime(t){return new hn(t)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function fn(t,e){return void 0!==t.updateTime?e.isFoundDocument()&&e.version.isEqual(t.updateTime):void 0===t.exists||t.exists===e.isFoundDocument()}class dn{}function pn(t,e){if(!t.hasLocalMutations||e&&0===e.fields.length)return null;if(null===e)return t.isNoDocument()?new _n(t.key,hn.none()):new vn(t.key,t.data,hn.none());{const n=t.data,r=Wt.empty();let i=new bt(X.comparator);for(let t of e.fields)if(!i.has(t)){let e=n.field(t);null===e&&t.length>1&&(t=t.popLast(),e=n.field(t)),null===e?r.delete(t):r.set(t,e),i=i.add(t)}return new wn(t.key,r,new Tt(i.toArray()),hn.none())}}function gn(t,e,n){t instanceof vn?function(t,e,n){const r=t.value.clone(),i=En(t.fieldTransforms,e,n.transformResults);r.setAll(i),e.convertToFoundDocument(n.version,r).setHasCommittedMutations()}(t,e,n):t instanceof wn?function(t,e,n){if(!fn(t.precondition,e))return void e.convertToUnknownDocument(n.version);const r=En(t.fieldTransforms,e,n.transformResults),i=e.data;i.setAll(bn(t)),i.setAll(r),e.convertToFoundDocument(n.version,i).setHasCommittedMutations()}(t,e,n):function(t,e,n){e.convertToNoDocument(n.version).setHasCommittedMutations()}(0,e,n)}function mn(t,e,n,r){return t instanceof vn?function(t,e,n,r){if(!fn(t.precondition,e))return n;const i=t.value.clone(),o=Tn(t.fieldTransforms,r,e);return i.setAll(o),e.convertToFoundDocument(e.version,i).setHasLocalMutations(),null}(t,e,n,r):t instanceof wn?function(t,e,n,r){if(!fn(t.precondition,e))return n;const i=Tn(t.fieldTransforms,r,e),o=e.data;return o.setAll(bn(t)),o.setAll(i),e.convertToFoundDocument(e.version,o).setHasLocalMutations(),null===n?null:n.unionWith(t.fieldMask.fields).unionWith(t.fieldTransforms.map((t=>t.field)))}(t,e,n,r):function(t,e,n){return fn(t.precondition,e)?(e.convertToNoDocument(e.version).setHasLocalMutations(),null):n}(t,e,n)}function yn(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(t,e){return void 0===t&&void 0===e||!(!t||!e)&&G(t,e,((t,e)=>ln(t,e)))}(t.fieldTransforms,e.fieldTransforms)&&(0===t.type?t.value.isEqual(e.value):1!==t.type||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class vn extends dn{constructor(t,e,n,r=[]){super(),this.key=t,this.value=e,this.precondition=n,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class wn extends dn{constructor(t,e,n,r,i=[]){super(),this.key=t,this.data=e,this.fieldMask=n,this.precondition=r,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function bn(t){const e=new Map;return t.fieldMask.fields.forEach((n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}})),e}function En(t,e,n){const r=new Map;D(t.length===n.length);for(let i=0;i<n.length;i++){const o=t[i],s=o.transform,a=e.data.field(o.field);r.set(o.field,Ze(s,a,n[i]))}return r}function Tn(t,e,n){const r=new Map;for(const i of t){const t=i.transform,o=n.data.field(i.field);r.set(i.field,Je(t,o,e))}return r}class _n extends dn{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}
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
 */
class Sn{constructor(t,e,n,r){this.batchId=t,this.localWriteTime=e,this.baseMutations=n,this.mutations=r}applyToRemoteDocument(t,e){const n=e.mutationResults;for(let r=0;r<this.mutations.length;r++){const e=this.mutations[r];e.key.isEqual(t.key)&&gn(e,t,n[r])}}applyToLocalView(t,e){for(const n of this.baseMutations)n.key.isEqual(t.key)&&(e=mn(n,t,e,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(t.key)&&(e=mn(n,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const n=He();return this.mutations.forEach((r=>{const i=t.get(r.key),o=i.overlayedDocument;let s=this.applyToLocalView(o,i.mutatedFields);s=e.has(r.key)?null:s;const a=pn(o,s);null!==a&&n.set(r.key,a),o.isValidDocument()||o.convertToNoDocument(K.min())})),n}keys(){return this.mutations.reduce(((t,e)=>t.add(e.key)),Ke())}isEqual(t){return this.batchId===t.batchId&&G(this.mutations,t.mutations,((t,e)=>yn(t,e)))&&G(this.baseMutations,t.baseMutations,((t,e)=>yn(t,e)))}}
/**
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
 */
class An{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return null!==t&&this.mutation===t.mutation}toString(){return`Overlay{\n      largestBatchId: ${this.largestBatchId},\n      mutation: ${this.mutation.toString()}\n    }`}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
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
 */
var In,xn;function Cn(t){if(void 0===t)return I("GRPC error has no .code"),k.UNKNOWN;switch(t){case In.OK:return k.OK;case In.CANCELLED:return k.CANCELLED;case In.UNKNOWN:return k.UNKNOWN;case In.DEADLINE_EXCEEDED:return k.DEADLINE_EXCEEDED;case In.RESOURCE_EXHAUSTED:return k.RESOURCE_EXHAUSTED;case In.INTERNAL:return k.INTERNAL;case In.UNAVAILABLE:return k.UNAVAILABLE;case In.UNAUTHENTICATED:return k.UNAUTHENTICATED;case In.INVALID_ARGUMENT:return k.INVALID_ARGUMENT;case In.NOT_FOUND:return k.NOT_FOUND;case In.ALREADY_EXISTS:return k.ALREADY_EXISTS;case In.PERMISSION_DENIED:return k.PERMISSION_DENIED;case In.FAILED_PRECONDITION:return k.FAILED_PRECONDITION;case In.ABORTED:return k.ABORTED;case In.OUT_OF_RANGE:return k.OUT_OF_RANGE;case In.UNIMPLEMENTED:return k.UNIMPLEMENTED;case In.DATA_LOSS:return k.DATA_LOSS;default:return O()}}(xn=In||(In={}))[xn.OK=0]="OK",xn[xn.CANCELLED=1]="CANCELLED",xn[xn.UNKNOWN=2]="UNKNOWN",xn[xn.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",xn[xn.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",xn[xn.NOT_FOUND=5]="NOT_FOUND",xn[xn.ALREADY_EXISTS=6]="ALREADY_EXISTS",xn[xn.PERMISSION_DENIED=7]="PERMISSION_DENIED",xn[xn.UNAUTHENTICATED=16]="UNAUTHENTICATED",xn[xn.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",xn[xn.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",xn[xn.ABORTED=10]="ABORTED",xn[xn.OUT_OF_RANGE=11]="OUT_OF_RANGE",xn[xn.UNIMPLEMENTED=12]="UNIMPLEMENTED",xn[xn.INTERNAL=13]="INTERNAL",xn[xn.UNAVAILABLE=14]="UNAVAILABLE",xn[xn.DATA_LOSS=15]="DATA_LOSS";
/**
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
 */
new r([4294967295,4294967295],0);Error;
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
 */(()=>{const t={asc:"ASCENDING",desc:"DESCENDING"}})(),(()=>{const t={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}})(),(()=>{const t={and:"AND",or:"OR"}})();class On{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function Dn(t){return D(!!t),K.fromTimestamp(function(t){const e=It(t);return new z(e.seconds,e.nanos)}(t))}function Rn(t,e){const n=function(t){return new W(["projects",t.projectId,"databases",t.database])}(t).child("documents");return void 0===e?n:n.child(e)}function kn(t){const e=W.fromString(t);return D(jn(e)),e}function Nn(t){const e=kn(t);return 4===e.length?W.emptyPath():Mn(e)}function Mn(t){return D(t.length>4&&"documents"===t.get(4)),t.popFirst(5)}function Pn(t){let e=Nn(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){D(1===r);const t=n.from[0];t.allDescendants?i=t.collectionId:e=e.child(t.collectionId)}let o=[];n.where&&(o=function(t){const e=Ln(t);return e instanceof re&&oe(e)?e.getFilters():[e]}(n.where));let s=[];n.orderBy&&(s=function(t){return t.map((t=>function(t){return new Zt(Fn(t.field),function(t){switch(t){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(t.direction))}(t)))}(n.orderBy));let a=null;n.limit&&(a=function(t){let e;return e="object"==typeof t?t.value:t,ct(e)?null:e}(n.limit));let c=null;n.startAt&&(c=function(t){const e=!!t.before,n=t.values||[];return new Xt(n,e)}(n.startAt));let u=null;return n.endAt&&(u=function(t){const e=!t.before,n=t.values||[];return new Xt(n,e)}(n.endAt)),_e(e,i,s,o,a,"F",c,u)}function Ln(t){return void 0!==t.unaryFilter?function(t){switch(t.unaryFilter.op){case"IS_NAN":const e=Fn(t.unaryFilter.field);return ne.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=Fn(t.unaryFilter.field);return ne.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=Fn(t.unaryFilter.field);return ne.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=Fn(t.unaryFilter.field);return ne.create(i,"!=",{nullValue:"NULL_VALUE"});default:return O()}}(t):void 0!==t.fieldFilter?function(t){return ne.create(Fn(t.fieldFilter.field),function(t){switch(t){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return O()}}(t.fieldFilter.op),t.fieldFilter.value)}(t):void 0!==t.compositeFilter?function(t){return re.create(t.compositeFilter.filters.map((t=>Ln(t))),function(t){switch(t){case"AND":return"and";case"OR":return"or";default:return O()}}(t.compositeFilter.op))}(t):O()}function Fn(t){return X.fromServerFormat(t.fieldPath)}function jn(t){return t.length>=4&&"projects"===t.get(0)&&"databases"===t.get(2)}
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
 */
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
 */class Vn{constructor(t){this.ht=t}}function Un(t){const e=Pn({parent:t.parent,structuredQuery:t.structuredQuery});return"LAST"===t.limitType?Oe(e,e.limit,"L"):e}
/**
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
 */class $n{constructor(){}Et(t,e){this.dt(t,e),e.At()}dt(t,e){if("nullValue"in t)this.Rt(e,5);else if("booleanValue"in t)this.Rt(e,10),e.Vt(t.booleanValue?1:0);else if("integerValue"in t)this.Rt(e,15),e.Vt(xt(t.integerValue));else if("doubleValue"in t){const n=xt(t.doubleValue);isNaN(n)?this.Rt(e,13):(this.Rt(e,15),ut(n)?e.Vt(0):e.Vt(n))}else if("timestampValue"in t){let n=t.timestampValue;this.Rt(e,20),"string"==typeof n&&(n=It(n)),e.ft(`${n.seconds||""}`),e.Vt(n.nanos||0)}else if("stringValue"in t)this.gt(t.stringValue,e),this.yt(e);else if("bytesValue"in t)this.Rt(e,30),e.wt(Ct(t.bytesValue)),this.yt(e);else if("referenceValue"in t)this.St(t.referenceValue,e);else if("geoPointValue"in t){const n=t.geoPointValue;this.Rt(e,45),e.Vt(n.latitude||0),e.Vt(n.longitude||0)}else"mapValue"in t?qt(t)?this.Rt(e,Number.MAX_SAFE_INTEGER):zt(t)?this.bt(t.mapValue,e):(this.Dt(t.mapValue,e),this.yt(e)):"arrayValue"in t?(this.vt(t.arrayValue,e),this.yt(e)):O()}gt(t,e){this.Rt(e,25),this.Ct(t,e)}Ct(t,e){e.ft(t)}Dt(t,e){const n=t.fields||{};this.Rt(e,55);for(const r of Object.keys(n))this.gt(r,e),this.dt(n[r],e)}bt(t,e){var n,r;const i=t.fields||{};this.Rt(e,53);const o="value",s=(null===(r=null===(n=i[o].arrayValue)||void 0===n?void 0:n.values)||void 0===r?void 0:r.length)||0;this.Rt(e,15),e.Vt(xt(s)),this.gt(o,e),this.dt(i[o],e)}vt(t,e){const n=t.values||[];this.Rt(e,50);for(const r of n)this.dt(r,e)}St(t,e){this.Rt(e,37),Y.fromName(t).path.forEach((t=>{this.Rt(e,60),this.Ct(t,e)}))}Rt(t,e){t.Vt(e)}yt(t){t.Vt(2)}}$n.Ft=new $n;
/**
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
 */
class Bn{constructor(){this.ln=new Hn}addToCollectionParentIndex(t,e){return this.ln.add(e),it.resolve()}getCollectionParents(t,e){return it.resolve(this.ln.getEntries(e))}addFieldIndex(t,e){return it.resolve()}deleteFieldIndex(t,e){return it.resolve()}deleteAllFieldIndexes(t){return it.resolve()}createTargetIndexes(t,e){return it.resolve()}getDocumentsMatchingTarget(t,e){return it.resolve(null)}getIndexType(t,e){return it.resolve(0)}getFieldIndexes(t,e){return it.resolve([])}getNextCollectionGroupToUpdate(t){return it.resolve(null)}getMinOffset(t,e){return it.resolve(et.min())}getMinOffsetFromCollectionGroup(t,e){return it.resolve(et.min())}updateCollectionGroup(t,e,n){return it.resolve()}updateIndexEntries(t,e){return it.resolve()}}class Hn{constructor(){this.index={}}add(t){const e=t.lastSegment(),n=t.popLast(),r=this.index[e]||new bt(W.comparator),i=!r.has(n);return this.index[e]=r.add(n),i}has(t){const e=t.lastSegment(),n=t.popLast(),r=this.index[e];return r&&r.has(n)}getEntries(t){return(this.index[t]||new bt(W.comparator)).toArray()}}
/**
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
 */new Uint8Array(0);class Gn{static withCacheSize(t){return new Gn(t,Gn.DEFAULT_COLLECTION_PERCENTILE,Gn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(t,e,n){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=e,this.maximumSequenceNumbersToCollect=n}}
/**
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
 */
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
 */Gn.DEFAULT_COLLECTION_PERCENTILE=10,Gn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Gn.DEFAULT=new Gn(41943040,Gn.DEFAULT_COLLECTION_PERCENTILE,Gn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Gn.DISABLED=new Gn(-1,0,0);
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
 */
class zn{constructor(t){this.kn=t}next(){return this.kn+=2,this.kn}static qn(){return new zn(0)}static Qn(){return new zn(-1)}}
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
 */
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
 */
class Kn{constructor(){this.changes=new Le((t=>t.toString()),((t,e)=>t.isEqual(e))),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,Qt.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const n=this.changes.get(e);return void 0!==n?it.resolve(n):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}
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
 */
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
 */
/**
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
 */
class qn{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}
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
 */class Wn{constructor(t,e,n,r){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=n,this.indexManager=r}getDocument(t,e){let n=null;return this.documentOverlayCache.getOverlay(t,e).next((r=>(n=r,this.remoteDocumentCache.getEntry(t,e)))).next((t=>(null!==n&&mn(n.mutation,t,Tt.empty(),z.now()),t)))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next((e=>this.getLocalViewOfDocuments(t,e,Ke()).next((()=>e))))}getLocalViewOfDocuments(t,e,n=Ke()){const r=Be();return this.populateOverlays(t,r,e).next((()=>this.computeViews(t,e,r,n).next((t=>{let e=Ue();return t.forEach(((t,n)=>{e=e.insert(t,n.overlayedDocument)})),e}))))}getOverlayedDocuments(t,e){const n=Be();return this.populateOverlays(t,n,e).next((()=>this.computeViews(t,e,n,Ke())))}populateOverlays(t,e,n){const r=[];return n.forEach((t=>{e.has(t)||r.push(t)})),this.documentOverlayCache.getOverlays(t,r).next((t=>{t.forEach(((t,n)=>{e.set(t,n)}))}))}computeViews(t,e,n,r){let i=je();const o=Ge(),s=function(){return Ge()}();return e.forEach(((t,e)=>{const s=n.get(e.key);r.has(e.key)&&(void 0===s||s.mutation instanceof wn)?i=i.insert(e.key,e):void 0!==s?(o.set(e.key,s.mutation.getFieldMask()),mn(s.mutation,e,s.mutation.getFieldMask(),z.now())):o.set(e.key,Tt.empty())})),this.recalculateAndSaveOverlays(t,i).next((t=>(t.forEach(((t,e)=>o.set(t,e))),e.forEach(((t,e)=>{var n;return s.set(t,new qn(e,null!==(n=o.get(t))&&void 0!==n?n:null))})),s)))}recalculateAndSaveOverlays(t,e){const n=Ge();let r=new yt(((t,e)=>t-e)),i=Ke();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next((t=>{for(const i of t)i.keys().forEach((t=>{const o=e.get(t);if(null===o)return;let s=n.get(t)||Tt.empty();s=i.applyToLocalView(o,s),n.set(t,s);const a=(r.get(i.batchId)||Ke()).add(t);r=r.insert(i.batchId,a)}))})).next((()=>{const o=[],s=r.getReverseIterator();for(;s.hasNext();){const r=s.getNext(),a=r.key,c=r.value,u=He();c.forEach((t=>{if(!i.has(t)){const r=pn(e.get(t),n.get(t));null!==r&&u.set(t,r),i=i.add(t)}})),o.push(this.documentOverlayCache.saveOverlays(t,a,u))}return it.waitFor(o)})).next((()=>n))}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next((e=>this.recalculateAndSaveOverlays(t,e)))}getDocumentsMatchingQuery(t,e,n,r){return function(t){return Y.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length}(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):Ae(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,n,r):this.getDocumentsMatchingCollectionQuery(t,e,n,r)}getNextDocuments(t,e,n,r){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,n,r).next((i=>{const o=r-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,n.largestBatchId,r-i.size):it.resolve(Be());let s=-1,a=i;return o.next((e=>it.forEach(e,((e,n)=>(s<n.largestBatchId&&(s=n.largestBatchId),i.get(e)?it.resolve():this.remoteDocumentCache.getEntry(t,e).next((t=>{a=a.insert(e,t)}))))).next((()=>this.populateOverlays(t,e,i))).next((()=>this.computeViews(t,a,e,Ke()))).next((t=>({batchId:s,changes:$e(t)})))))}))}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new Y(e)).next((t=>{let e=Ue();return t.isFoundDocument()&&(e=e.insert(t.key,t)),e}))}getDocumentsMatchingCollectionGroupQuery(t,e,n,r){const i=e.collectionGroup;let o=Ue();return this.indexManager.getCollectionParents(t,i).next((s=>it.forEach(s,(s=>{const a=function(t,e){return new Te(e,null,t.explicitOrderBy.slice(),t.filters.slice(),t.limit,t.limitType,t.startAt,t.endAt)}(e,s.child(i));return this.getDocumentsMatchingCollectionQuery(t,a,n,r).next((t=>{t.forEach(((t,e)=>{o=o.insert(t,e)}))}))})).next((()=>o))))}getDocumentsMatchingCollectionQuery(t,e,n,r){let i;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,n.largestBatchId).next((o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,n,i,r)))).next((t=>{i.forEach(((e,n)=>{const r=n.getKey();null===t.get(r)&&(t=t.insert(r,Qt.newInvalidDocument(r)))}));let n=Ue();return t.forEach(((t,r)=>{const o=i.get(t);void 0!==o&&mn(o.mutation,r,Tt.empty(),z.now()),Ne(e,r)&&(n=n.insert(t,r))})),n}))}}
/**
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
 */class Qn{constructor(t){this.serializer=t,this.Tr=new Map,this.Ir=new Map}getBundleMetadata(t,e){return it.resolve(this.Tr.get(e))}saveBundleMetadata(t,e){return this.Tr.set(e.id,function(t){return{id:t.id,version:t.version,createTime:Dn(t.createTime)}}(e)),it.resolve()}getNamedQuery(t,e){return it.resolve(this.Ir.get(e))}saveNamedQuery(t,e){return this.Ir.set(e.name,function(t){return{name:t.name,query:Un(t.bundledQuery),readTime:Dn(t.readTime)}}(e)),it.resolve()}}
/**
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
 */class Xn{constructor(){this.overlays=new yt(Y.comparator),this.Er=new Map}getOverlay(t,e){return it.resolve(this.overlays.get(e))}getOverlays(t,e){const n=Be();return it.forEach(e,(e=>this.getOverlay(t,e).next((t=>{null!==t&&n.set(e,t)})))).next((()=>n))}saveOverlays(t,e,n){return n.forEach(((n,r)=>{this.Tt(t,e,r)})),it.resolve()}removeOverlaysForBatchId(t,e,n){const r=this.Er.get(n);return void 0!==r&&(r.forEach((t=>this.overlays=this.overlays.remove(t))),this.Er.delete(n)),it.resolve()}getOverlaysForCollection(t,e,n){const r=Be(),i=e.length+1,o=new Y(e.child("")),s=this.overlays.getIteratorFrom(o);for(;s.hasNext();){const t=s.getNext().value,o=t.getKey();if(!e.isPrefixOf(o.path))break;o.path.length===i&&t.largestBatchId>n&&r.set(t.getKey(),t)}return it.resolve(r)}getOverlaysForCollectionGroup(t,e,n,r){let i=new yt(((t,e)=>t-e));const o=this.overlays.getIterator();for(;o.hasNext();){const t=o.getNext().value;if(t.getKey().getCollectionGroup()===e&&t.largestBatchId>n){let e=i.get(t.largestBatchId);null===e&&(e=Be(),i=i.insert(t.largestBatchId,e)),e.set(t.getKey(),t)}}const s=Be(),a=i.getIterator();for(;a.hasNext();)if(a.getNext().value.forEach(((t,e)=>s.set(t,e))),s.size()>=r)break;return it.resolve(s)}Tt(t,e,n){const r=this.overlays.get(n.key);if(null!==r){const t=this.Er.get(r.largestBatchId).delete(n.key);this.Er.set(r.largestBatchId,t)}this.overlays=this.overlays.insert(n.key,new An(e,n));let i=this.Er.get(e);void 0===i&&(i=Ke(),this.Er.set(e,i)),this.Er.set(e,i.add(n.key))}}
/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yn{constructor(){this.sessionToken=St.EMPTY_BYTE_STRING}getSessionToken(t){return it.resolve(this.sessionToken)}setSessionToken(t,e){return this.sessionToken=e,it.resolve()}}
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
 */class Jn{constructor(){this.dr=new bt(Zn.Ar),this.Rr=new bt(Zn.Vr)}isEmpty(){return this.dr.isEmpty()}addReference(t,e){const n=new Zn(t,e);this.dr=this.dr.add(n),this.Rr=this.Rr.add(n)}mr(t,e){t.forEach((t=>this.addReference(t,e)))}removeReference(t,e){this.gr(new Zn(t,e))}pr(t,e){t.forEach((t=>this.removeReference(t,e)))}yr(t){const e=new Y(new W([])),n=new Zn(e,t),r=new Zn(e,t+1),i=[];return this.Rr.forEachInRange([n,r],(t=>{this.gr(t),i.push(t.key)})),i}wr(){this.dr.forEach((t=>this.gr(t)))}gr(t){this.dr=this.dr.delete(t),this.Rr=this.Rr.delete(t)}Sr(t){const e=new Y(new W([])),n=new Zn(e,t),r=new Zn(e,t+1);let i=Ke();return this.Rr.forEachInRange([n,r],(t=>{i=i.add(t.key)})),i}containsKey(t){const e=new Zn(t,0),n=this.dr.firstAfterOrEqual(e);return null!==n&&t.isEqual(n.key)}}class Zn{constructor(t,e){this.key=t,this.br=e}static Ar(t,e){return Y.comparator(t.key,e.key)||H(t.br,e.br)}static Vr(t,e){return H(t.br,e.br)||Y.comparator(t.key,e.key)}}
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
 */class tr{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.Dr=1,this.vr=new bt(Zn.Ar)}checkEmpty(t){return it.resolve(0===this.mutationQueue.length)}addMutationBatch(t,e,n,r){const i=this.Dr;this.Dr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new Sn(i,e,n,r);this.mutationQueue.push(o);for(const s of r)this.vr=this.vr.add(new Zn(s.key,i)),this.indexManager.addToCollectionParentIndex(t,s.key.path.popLast());return it.resolve(o)}lookupMutationBatch(t,e){return it.resolve(this.Cr(e))}getNextMutationBatchAfterBatchId(t,e){const n=e+1,r=this.Fr(n),i=r<0?0:r;return it.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return it.resolve(0===this.mutationQueue.length?-1:this.Dr-1)}getAllMutationBatches(t){return it.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const n=new Zn(e,0),r=new Zn(e,Number.POSITIVE_INFINITY),i=[];return this.vr.forEachInRange([n,r],(t=>{const e=this.Cr(t.br);i.push(e)})),it.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(t,e){let n=new bt(H);return e.forEach((t=>{const e=new Zn(t,0),r=new Zn(t,Number.POSITIVE_INFINITY);this.vr.forEachInRange([e,r],(t=>{n=n.add(t.br)}))})),it.resolve(this.Mr(n))}getAllMutationBatchesAffectingQuery(t,e){const n=e.path,r=n.length+1;let i=n;Y.isDocumentKey(i)||(i=i.child(""));const o=new Zn(new Y(i),0);let s=new bt(H);return this.vr.forEachWhile((t=>{const e=t.key.path;return!!n.isPrefixOf(e)&&(e.length===r&&(s=s.add(t.br)),!0)}),o),it.resolve(this.Mr(s))}Mr(t){const e=[];return t.forEach((t=>{const n=this.Cr(t);null!==n&&e.push(n)})),e}removeMutationBatch(t,e){D(0===this.Or(e.batchId,"removed")),this.mutationQueue.shift();let n=this.vr;return it.forEach(e.mutations,(r=>{const i=new Zn(r.key,e.batchId);return n=n.delete(i),this.referenceDelegate.markPotentiallyOrphaned(t,r.key)})).next((()=>{this.vr=n}))}Ln(t){}containsKey(t,e){const n=new Zn(e,0),r=this.vr.firstAfterOrEqual(n);return it.resolve(e.isEqual(r&&r.key))}performConsistencyCheck(t){return this.mutationQueue.length,it.resolve()}Or(t,e){return this.Fr(t)}Fr(t){return 0===this.mutationQueue.length?0:t-this.mutationQueue[0].batchId}Cr(t){const e=this.Fr(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}
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
 */class er{constructor(t){this.Nr=t,this.docs=function(){return new yt(Y.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const n=e.key,r=this.docs.get(n),i=r?r.size:0,o=this.Nr(e);return this.docs=this.docs.insert(n,{document:e.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(t,n.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const n=this.docs.get(e);return it.resolve(n?n.document.mutableCopy():Qt.newInvalidDocument(e))}getEntries(t,e){let n=je();return e.forEach((t=>{const e=this.docs.get(t);n=n.insert(t,e?e.document.mutableCopy():Qt.newInvalidDocument(t))})),it.resolve(n)}getDocumentsMatchingQuery(t,e,n,r){let i=je();const o=e.path,s=new Y(o.child("")),a=this.docs.getIteratorFrom(s);for(;a.hasNext();){const{key:t,value:{document:s}}=a.getNext();if(!o.isPrefixOf(t.path))break;t.path.length>o.length+1||nt(tt(s),n)<=0||(r.has(s.key)||Ne(e,s))&&(i=i.insert(s.key,s.mutableCopy()))}return it.resolve(i)}getAllFromCollectionGroup(t,e,n,r){O()}Lr(t,e){return it.forEach(this.docs,(t=>e(t)))}newChangeBuffer(t){return new nr(this)}getSize(t){return it.resolve(this.size)}}class nr extends Kn{constructor(t){super(),this.hr=t}applyChanges(t){const e=[];return this.changes.forEach(((n,r)=>{r.isValidDocument()?e.push(this.hr.addEntry(t,r)):this.hr.removeEntry(n)})),it.waitFor(e)}getFromCache(t,e){return this.hr.getEntry(t,e)}getAllFromCache(t,e){return this.hr.getEntries(t,e)}}
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
 */class rr{constructor(t){this.persistence=t,this.Br=new Le((t=>be(t)),Ee),this.lastRemoteSnapshotVersion=K.min(),this.highestTargetId=0,this.kr=0,this.qr=new Jn,this.targetCount=0,this.Qr=zn.qn()}forEachTarget(t,e){return this.Br.forEach(((t,n)=>e(n))),it.resolve()}getLastRemoteSnapshotVersion(t){return it.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return it.resolve(this.kr)}allocateTargetId(t){return this.highestTargetId=this.Qr.next(),it.resolve(this.highestTargetId)}setTargetsMetadata(t,e,n){return n&&(this.lastRemoteSnapshotVersion=n),e>this.kr&&(this.kr=e),it.resolve()}Un(t){this.Br.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.Qr=new zn(e),this.highestTargetId=e),t.sequenceNumber>this.kr&&(this.kr=t.sequenceNumber)}addTargetData(t,e){return this.Un(e),this.targetCount+=1,it.resolve()}updateTargetData(t,e){return this.Un(e),it.resolve()}removeTargetData(t,e){return this.Br.delete(e.target),this.qr.yr(e.targetId),this.targetCount-=1,it.resolve()}removeTargets(t,e,n){let r=0;const i=[];return this.Br.forEach(((o,s)=>{s.sequenceNumber<=e&&null===n.get(s.targetId)&&(this.Br.delete(o),i.push(this.removeMatchingKeysForTargetId(t,s.targetId)),r++)})),it.waitFor(i).next((()=>r))}getTargetCount(t){return it.resolve(this.targetCount)}getTargetData(t,e){const n=this.Br.get(e)||null;return it.resolve(n)}addMatchingKeys(t,e,n){return this.qr.mr(e,n),it.resolve()}removeMatchingKeys(t,e,n){this.qr.pr(e,n);const r=this.persistence.referenceDelegate,i=[];return r&&e.forEach((e=>{i.push(r.markPotentiallyOrphaned(t,e))})),it.waitFor(i)}removeMatchingKeysForTargetId(t,e){return this.qr.yr(e),it.resolve()}getMatchingKeysForTargetId(t,e){const n=this.qr.Sr(e);return it.resolve(n)}containsKey(t,e){return it.resolve(this.qr.containsKey(e))}}
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
 */class ir{constructor(t,e){this.Kr={},this.overlays={},this.$r=new at(0),this.Ur=!1,this.Ur=!0,this.Wr=new Yn,this.referenceDelegate=t(this),this.Gr=new rr(this),this.indexManager=new Bn,this.remoteDocumentCache=function(t){return new er(t)}((t=>this.referenceDelegate.zr(t))),this.serializer=new Vn(e),this.jr=new Qn(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Ur=!1,Promise.resolve()}get started(){return this.Ur}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new Xn,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let n=this.Kr[t.toKey()];return n||(n=new tr(e,this.referenceDelegate),this.Kr[t.toKey()]=n),n}getGlobalsCache(){return this.Wr}getTargetCache(){return this.Gr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.jr}runTransaction(t,e,n){A("MemoryPersistence","Starting transaction:",t);const r=new or(this.$r.next());return this.referenceDelegate.Hr(),n(r).next((t=>this.referenceDelegate.Jr(r).next((()=>t)))).toPromise().then((t=>(r.raiseOnCommittedEvent(),t)))}Yr(t,e){return it.or(Object.values(this.Kr).map((n=>()=>n.containsKey(t,e))))}}class or extends rt{constructor(t){super(),this.currentSequenceNumber=t}}class sr{constructor(t){this.persistence=t,this.Zr=new Jn,this.Xr=null}static ei(t){return new sr(t)}get ti(){if(this.Xr)return this.Xr;throw O()}addReference(t,e,n){return this.Zr.addReference(n,e),this.ti.delete(n.toString()),it.resolve()}removeReference(t,e,n){return this.Zr.removeReference(n,e),this.ti.add(n.toString()),it.resolve()}markPotentiallyOrphaned(t,e){return this.ti.add(e.toString()),it.resolve()}removeTarget(t,e){this.Zr.yr(e.targetId).forEach((t=>this.ti.add(t.toString())));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(t,e.targetId).next((t=>{t.forEach((t=>this.ti.add(t.toString())))})).next((()=>n.removeTargetData(t,e)))}Hr(){this.Xr=new Set}Jr(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return it.forEach(this.ti,(n=>{const r=Y.fromPath(n);return this.ni(t,r).next((t=>{t||e.removeEntry(r,K.min())}))})).next((()=>(this.Xr=null,e.apply(t))))}updateLimboDocument(t,e){return this.ni(t,e).next((t=>{t?this.ti.delete(e.toString()):this.ti.add(e.toString())}))}zr(t){return 0}ni(t,e){return it.or([()=>it.resolve(this.Zr.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Yr(t,e)])}}
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
 */
class ar{constructor(t,e,n,r){this.targetId=t,this.fromCache=e,this.Wi=n,this.Gi=r}static zi(t,e){let n=Ke(),r=Ke();for(const i of e.docChanges)switch(i.type){case 0:n=n.add(i.doc.key);break;case 1:r=r.add(i.doc.key)}return new ar(t,e.fromCache,n,r)}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cr{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}
/**
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
 */class ur{constructor(){this.ji=!1,this.Hi=!1,this.Ji=100,this.Yi=function(){return(0,a.nr)()?8:ot((0,a.ZQ)())>0?6:4}()}initialize(t,e){this.Zi=t,this.indexManager=e,this.ji=!0}getDocumentsMatchingQuery(t,e,n,r){const i={result:null};return this.Xi(t,e).next((t=>{i.result=t})).next((()=>{if(!i.result)return this.es(t,e,r,n).next((t=>{i.result=t}))})).next((()=>{if(i.result)return;const n=new cr;return this.ts(t,e,n).next((r=>{if(i.result=r,this.Hi)return this.ns(t,e,n,r.size)}))})).next((()=>i.result))}ns(t,e,n,r){return n.documentReadCount<this.Ji?(S()<=s.$b.DEBUG&&A("QueryEngine","SDK will not create cache indexes for query:",ke(e),"since it only creates cache indexes for collection contains","more than or equal to",this.Ji,"documents"),it.resolve()):(S()<=s.$b.DEBUG&&A("QueryEngine","Query:",ke(e),"scans",n.documentReadCount,"local documents and returns",r,"documents as results."),n.documentReadCount>this.Yi*r?(S()<=s.$b.DEBUG&&A("QueryEngine","The SDK decides to create cache indexes for query:",ke(e),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,xe(e))):it.resolve())}Xi(t,e){if(Se(e))return it.resolve(null);let n=xe(e);return this.indexManager.getIndexType(t,n).next((r=>0===r?null:(null!==e.limit&&1===r&&(e=Oe(e,null,"F"),n=xe(e)),this.indexManager.getDocumentsMatchingTarget(t,n).next((r=>{const i=Ke(...r);return this.Zi.getDocuments(t,i).next((r=>this.indexManager.getMinOffset(t,n).next((n=>{const o=this.rs(e,r);return this.ss(e,o,i,n.readTime)?this.Xi(t,Oe(e,null,"F")):this.os(t,o,e,n)}))))})))))}es(t,e,n,r){return Se(e)||r.isEqual(K.min())?it.resolve(null):this.Zi.getDocuments(t,n).next((i=>{const o=this.rs(e,i);return this.ss(e,o,n,r)?it.resolve(null):(S()<=s.$b.DEBUG&&A("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),ke(e)),this.os(t,o,e,Z(r,-1)).next((t=>t)))}))}rs(t,e){let n=new bt(Me(t));return e.forEach(((e,r)=>{Ne(t,r)&&(n=n.add(r))})),n}ss(t,e,n,r){if(null===t.limit)return!1;if(n.size!==e.size)return!0;const i="F"===t.limitType?e.last():e.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}ts(t,e,n){return S()<=s.$b.DEBUG&&A("QueryEngine","Using full collection scan to execute query:",ke(e)),this.Zi.getDocumentsMatchingQuery(t,e,et.min(),n)}os(t,e,n,r){return this.Zi.getDocumentsMatchingQuery(t,n,r).next((t=>(e.forEach((e=>{t=t.insert(e.key,e)})),t)))}}
/**
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
 */class lr{constructor(t,e,n,r){this.persistence=t,this._s=e,this.serializer=r,this.us=new yt(H),this.cs=new Le((t=>be(t)),Ee),this.ls=new Map,this.hs=t.getRemoteDocumentCache(),this.Gr=t.getTargetCache(),this.jr=t.getBundleCache(),this.Ps(n)}Ps(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new Wn(this.hs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.hs.setIndexManager(this.indexManager),this._s.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(e=>t.collect(e,this.us)))}}function hr(t,e,n,r){return new lr(t,e,n,r)}async function fr(t,e){const n=R(t);return await n.persistence.runTransaction("Handle user change","readonly",(t=>{let r;return n.mutationQueue.getAllMutationBatches(t).next((i=>(r=i,n.Ps(e),n.mutationQueue.getAllMutationBatches(t)))).next((e=>{const i=[],o=[];let s=Ke();for(const t of r){i.push(t.batchId);for(const e of t.mutations)s=s.add(e.key)}for(const t of e){o.push(t.batchId);for(const e of t.mutations)s=s.add(e.key)}return n.localDocuments.getDocuments(t,s).next((t=>({Ts:t,removedBatchIds:i,addedBatchIds:o})))}))}))}class dr{constructor(){this.activeTargetIds=We()}ps(t){this.activeTargetIds=this.activeTargetIds.add(t)}ys(t){this.activeTargetIds=this.activeTargetIds.delete(t)}gs(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class pr{constructor(){this._o=new dr,this.ao={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,n){}addLocalQueryTarget(t,e=!0){return e&&this._o.ps(t),this.ao[t]||"not-current"}updateQueryState(t,e,n){this.ao[t]=e}removeLocalQueryTarget(t){this._o.ys(t)}isLocalQueryTarget(t){return this._o.activeTargetIds.has(t)}clearQueryState(t){delete this.ao[t]}getAllActiveQueryTargets(){return this._o.activeTargetIds}isActiveQueryTarget(t){return this._o.activeTargetIds.has(t)}start(){return this._o=new dr,Promise.resolve()}handleUserChange(t,e,n){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}
/**
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
 */class gr{uo(t){}shutdown(){}}
/**
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
 */class mr{constructor(){this.co=()=>this.lo(),this.ho=()=>this.Po(),this.To=[],this.Io()}uo(t){this.To.push(t)}shutdown(){window.removeEventListener("online",this.co),window.removeEventListener("offline",this.ho)}Io(){window.addEventListener("online",this.co),window.addEventListener("offline",this.ho)}lo(){A("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.To)t(0)}Po(){A("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.To)t(1)}static p(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let yr=null;function vr(){return null===yr?yr=function(){return 268435456+Math.round(2147483648*Math.random())}():yr++,"0x"+yr.toString(16)
/**
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
 */}const wr={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};
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
 */class br{constructor(t){this.Eo=t.Eo,this.Ao=t.Ao}Ro(t){this.Vo=t}mo(t){this.fo=t}po(t){this.yo=t}onMessage(t){this.wo=t}close(){this.Ao()}send(t){this.Eo(t)}So(){this.Vo()}bo(){this.fo()}Do(t){this.yo(t)}vo(t){this.wo(t)}}
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
 */const Er="WebChannelConnection";class Tr extends class{get Co(){return!1}constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const e=t.ssl?"https":"http",n=encodeURIComponent(this.databaseId.projectId),r=encodeURIComponent(this.databaseId.database);this.Fo=e+"://"+t.host,this.Mo=`projects/${n}/databases/${r}`,this.xo="(default)"===this.databaseId.database?`project_id=${n}`:`project_id=${n}&database_id=${r}`}Oo(t,e,n,r,i){const o=vr(),s=this.No(t,e.toUriEncodedString());A("RestConnection",`Sending RPC '${t}' ${o}:`,s,n);const a={"google-cloud-resource-prefix":this.Mo,"x-goog-request-params":this.xo};return this.Lo(a,r,i),this.Bo(t,s,a,n).then((e=>(A("RestConnection",`Received RPC '${t}' ${o}: `,e),e)),(e=>{throw x("RestConnection",`RPC '${t}' ${o} failed with error: `,e,"url: ",s,"request:",n),e}))}ko(t,e,n,r,i,o){return this.Oo(t,e,n,r,i)}Lo(t,e,n){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+T}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),e&&e.headers.forEach(((e,n)=>t[n]=e)),n&&n.headers.forEach(((e,n)=>t[n]=e))}No(t,e){const n=wr[t];return`${this.Fo}/v1/${e}:${n}`}terminate(){}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}Bo(t,e,n,r){const i=vr();return new Promise(((o,s)=>{const a=new l;a.setWithCredentials(!0),a.listenOnce(f.COMPLETE,(()=>{try{switch(a.getLastErrorCode()){case d.NO_ERROR:const e=a.getResponseJson();A(Er,`XHR for RPC '${t}' ${i} received:`,JSON.stringify(e)),o(e);break;case d.TIMEOUT:A(Er,`RPC '${t}' ${i} timed out`),s(new N(k.DEADLINE_EXCEEDED,"Request time out"));break;case d.HTTP_ERROR:const n=a.getStatus();if(A(Er,`RPC '${t}' ${i} failed with status:`,n,"response text:",a.getResponseText()),n>0){let t=a.getResponseJson();Array.isArray(t)&&(t=t[0]);const e=null==t?void 0:t.error;if(e&&e.status&&e.message){const t=function(t){const e=t.toLowerCase().replace(/_/g,"-");return Object.values(k).indexOf(e)>=0?e:k.UNKNOWN}(e.status);s(new N(t,e.message))}else s(new N(k.UNKNOWN,"Server responded with status "+a.getStatus()))}else s(new N(k.UNAVAILABLE,"Connection failed."));break;default:O()}}finally{A(Er,`RPC '${t}' ${i} completed.`)}}));const c=JSON.stringify(r);A(Er,`RPC '${t}' ${i} sending request:`,r),a.send(e,"POST",c,n,15)}))}qo(t,e,n){const r=vr(),i=[this.Fo,"/","google.firestore.v1.Firestore","/",t,"/channel"],o=y(),s=m(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;void 0!==c&&(a.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(a.useFetchStreams=!0),this.Lo(a.initMessageHeaders,e,n),a.encodeInitMessageHeaders=!0;const u=i.join("");A(Er,`Creating RPC '${t}' stream ${r}: ${u}`,a);const l=o.createWebChannel(u,a);let f=!1,d=!1;const v=new br({Eo:e=>{d?A(Er,`Not sending because RPC '${t}' stream ${r} is closed:`,e):(f||(A(Er,`Opening RPC '${t}' stream ${r} transport.`),l.open(),f=!0),A(Er,`RPC '${t}' stream ${r} sending:`,e),l.send(e))},Ao:()=>l.close()}),w=(t,e,n)=>{t.listen(e,(t=>{try{n(t)}catch(t){setTimeout((()=>{throw t}),0)}}))};return w(l,h.EventType.OPEN,(()=>{d||(A(Er,`RPC '${t}' stream ${r} transport opened.`),v.So())})),w(l,h.EventType.CLOSE,(()=>{d||(d=!0,A(Er,`RPC '${t}' stream ${r} transport closed`),v.Do())})),w(l,h.EventType.ERROR,(e=>{d||(d=!0,x(Er,`RPC '${t}' stream ${r} transport errored:`,e),v.Do(new N(k.UNAVAILABLE,"The operation could not be completed")))})),w(l,h.EventType.MESSAGE,(e=>{var n;if(!d){const i=e.data[0];D(!!i);const o=i,s=(null==o?void 0:o.error)||(null===(n=o[0])||void 0===n?void 0:n.error);if(s){A(Er,`RPC '${t}' stream ${r} received error:`,s);const e=s.status;let n=function(t){const e=In[t];if(void 0!==e)return Cn(e)}(e),i=s.message;void 0===n&&(n=k.INTERNAL,i="Unknown error status: "+e+" with message "+s.message),d=!0,v.Do(new N(n,i)),l.close()}else A(Er,`RPC '${t}' stream ${r} received:`,i),v.vo(i)}})),w(s,g.STAT_EVENT,(e=>{e.stat===p.PROXY?A(Er,`RPC '${t}' stream ${r} detected buffering proxy`):e.stat===p.NOPROXY&&A(Er,`RPC '${t}' stream ${r} detected no buffering proxy`)})),setTimeout((()=>{v.bo()}),0),v}}
/**
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
 */
/**
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
 */function _r(){return"undefined"!=typeof document?document:null}
/**
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
 */function Sr(t){return new On(t,!0)}
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
 */class Ar{constructor(t,e,n=1e3,r=1.5,i=6e4){this.li=t,this.timerId=e,this.Qo=n,this.Ko=r,this.$o=i,this.Uo=0,this.Wo=null,this.Go=Date.now(),this.reset()}reset(){this.Uo=0}zo(){this.Uo=this.$o}jo(t){this.cancel();const e=Math.floor(this.Uo+this.Ho()),n=Math.max(0,Date.now()-this.Go),r=Math.max(0,e-n);r>0&&A("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.Uo} ms, delay with jitter: ${e} ms, last attempt: ${n} ms ago)`),this.Wo=this.li.enqueueAfterDelay(this.timerId,r,(()=>(this.Go=Date.now(),t()))),this.Uo*=this.Ko,this.Uo<this.Qo&&(this.Uo=this.Qo),this.Uo>this.$o&&(this.Uo=this.$o)}Jo(){null!==this.Wo&&(this.Wo.skipDelay(),this.Wo=null)}cancel(){null!==this.Wo&&(this.Wo.cancel(),this.Wo=null)}Ho(){return(Math.random()-.5)*this.Uo}}
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
 */
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
 */
class Ir extends class{}{constructor(t,e,n,r){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=n,this.serializer=r,this.S_=!1}b_(){if(this.S_)throw new N(k.FAILED_PRECONDITION,"The client has already been terminated.")}Oo(t,e,n,r){return this.b_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([i,o])=>this.connection.Oo(t,Rn(e,n),r,i,o))).catch((t=>{throw"FirebaseError"===t.name?(t.code===k.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new N(k.UNKNOWN,t.toString())}))}ko(t,e,n,r,i){return this.b_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([o,s])=>this.connection.ko(t,Rn(e,n),r,o,s,i))).catch((t=>{throw"FirebaseError"===t.name?(t.code===k.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new N(k.UNKNOWN,t.toString())}))}terminate(){this.S_=!0,this.connection.terminate()}}class xr{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.D_=0,this.v_=null,this.C_=!0}F_(){0===this.D_&&(this.M_("Unknown"),this.v_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.v_=null,this.x_("Backend didn't respond within 10 seconds."),this.M_("Offline"),Promise.resolve()))))}O_(t){"Online"===this.state?this.M_("Unknown"):(this.D_++,this.D_>=1&&(this.N_(),this.x_(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.M_("Offline")))}set(t){this.N_(),this.D_=0,"Online"===t&&(this.C_=!1),this.M_(t)}M_(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}x_(t){const e=`Could not reach Cloud Firestore backend. ${t}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.C_?(I(e),this.C_=!1):A("OnlineStateTracker",e)}N_(){null!==this.v_&&(this.v_.cancel(),this.v_=null)}}
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
 */class Cr{constructor(t,e,n,r,i){this.localStore=t,this.datastore=e,this.asyncQueue=n,this.remoteSyncer={},this.L_=[],this.B_=new Map,this.k_=new Set,this.q_=[],this.Q_=i,this.Q_.uo((t=>{n.enqueueAndForget((async()=>{Rr(this)&&(A("RemoteStore","Restarting streams for network reachability change."),await async function(t){const e=R(t);e.k_.add(4),await Dr(e),e.K_.set("Unknown"),e.k_.delete(4),await Or(e)}(this))}))})),this.K_=new xr(n,r)}}async function Or(t){if(Rr(t))for(const e of t.q_)await e(!0)}async function Dr(t){for(const e of t.q_)await e(!1)}function Rr(t){return 0===R(t).k_.size}async function kr(t,e){const n=R(t);e?(n.k_.delete(2),await Or(n)):e||(n.k_.add(2),await Dr(n),n.K_.set("Unknown"))}
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
 */
class Nr{constructor(t,e,n,r,i){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=n,this.op=r,this.removalCallback=i,this.deferred=new M,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((t=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(t,e,n,r,i){const o=Date.now()+n,s=new Nr(t,e,o,r,i);return s.start(n),s}start(t){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new N(k.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then((t=>this.deferred.resolve(t)))):Promise.resolve()))}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}class Mr{constructor(){this.queries=Pr(),this.onlineState="Unknown",this.X_=new Set}terminate(){!function(t,e){const n=R(t),r=n.queries;n.queries=Pr(),r.forEach(((t,n)=>{for(const r of n.J_)r.onError(e)}))}(this,new N(k.ABORTED,"Firestore shutting down"))}}function Pr(){return new Le((t=>Re(t)),De)}function Lr(t){t.X_.forEach((t=>{t.next()}))}var Fr,jr;(jr=Fr||(Fr={})).na="default",jr.Cache="cache";class Vr{constructor(t,e,n,r,i,o){this.localStore=t,this.remoteStore=e,this.eventManager=n,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Ma={},this.xa=new Le((t=>Re(t)),De),this.Oa=new Map,this.Na=new Set,this.La=new yt(Y.comparator),this.Ba=new Map,this.ka=new Jn,this.qa={},this.Qa=new Map,this.Ka=zn.Qn(),this.onlineState="Unknown",this.$a=void 0}get isPrimaryClient(){return!0===this.$a}}function Ur(t,e,n){const r=R(t);if(r.isPrimaryClient&&0===n||!r.isPrimaryClient&&1===n){const t=[];r.xa.forEach(((n,r)=>{const i=r.view.ea(e);i.snapshot&&t.push(i.snapshot)})),function(t,e){const n=R(t);n.onlineState=e;let r=!1;n.queries.forEach(((t,n)=>{for(const i of n.J_)i.ea(e)&&(r=!0)})),r&&Lr(n)}(r.eventManager,e),t.length&&r.Ma.R_(t),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function $r(t,e,n){const r=R(t),i=[],o=[],s=[];r.xa.isEmpty()||(r.xa.forEach(((t,a)=>{s.push(r.Ua(a,e,n).then((t=>{var e;if((t||n)&&r.isPrimaryClient){const i=t?!t.fromCache:null===(e=null==n?void 0:n.targetChanges.get(a.targetId))||void 0===e?void 0:e.current;r.sharedClientState.updateQueryState(a.targetId,i?"current":"not-current")}if(t){i.push(t);const e=ar.zi(a.targetId,t);o.push(e)}})))})),await Promise.all(s),r.Ma.R_(i),await async function(t,e){const n=R(t);try{await n.persistence.runTransaction("notifyLocalViewChanges","readwrite",(t=>it.forEach(e,(e=>it.forEach(e.Wi,(r=>n.persistence.referenceDelegate.addReference(t,e.targetId,r))).next((()=>it.forEach(e.Gi,(r=>n.persistence.referenceDelegate.removeReference(t,e.targetId,r)))))))))}catch(t){if(!st(t))throw t;A("LocalStore","Failed to update sequence numbers: "+t)}for(const r of e){const t=r.targetId;if(!r.fromCache){const e=n.us.get(t),r=e.snapshotVersion,i=e.withLastLimboFreeSnapshotVersion(r);n.us=n.us.insert(t,i)}}}(r.localStore,o))}async function Br(t,e){const n=R(t);if(!n.currentUser.isEqual(e)){A("SyncEngine","User change. New user:",e.toKey());const t=await fr(n.localStore,e);n.currentUser=e,function(t,e){t.Qa.forEach((t=>{t.forEach((t=>{t.reject(new N(k.CANCELLED,e))}))})),t.Qa.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,t.removedBatchIds,t.addedBatchIds),await $r(n,t.Ts)}}class Hr{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(t){this.serializer=Sr(t.databaseInfo.databaseId),this.sharedClientState=this.za(t),this.persistence=this.ja(t),await this.persistence.start(),this.localStore=this.Ha(t),this.gcScheduler=this.Ja(t,this.localStore),this.indexBackfillerScheduler=this.Ya(t,this.localStore)}Ja(t,e){return null}Ya(t,e){return null}Ha(t){return hr(this.persistence,new ur,t.initialUser,this.serializer)}ja(t){return new ir(sr.ei,this.serializer)}za(t){return new pr}async terminate(){var t,e;null===(t=this.gcScheduler)||void 0===t||t.stop(),null===(e=this.indexBackfillerScheduler)||void 0===e||e.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Hr.provider={build:()=>new Hr};class Gr{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=t=>Ur(this.syncEngine,t,1),this.remoteStore.remoteSyncer.handleCredentialChange=Br.bind(null,this.syncEngine),await kr(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new Mr}()}createDatastore(t){const e=Sr(t.databaseInfo.databaseId),n=function(t){return new Tr(t)}(t.databaseInfo);return function(t,e,n,r){return new Ir(t,e,n,r)}(t.authCredentials,t.appCheckCredentials,n,e)}createRemoteStore(t){return function(t,e,n,r,i){return new Cr(t,e,n,r,i)}(this.localStore,this.datastore,t.asyncQueue,(t=>Ur(this.syncEngine,t,0)),function(){return mr.p()?new mr:new gr}())}createSyncEngine(t,e){return function(t,e,n,r,i,o,s){const a=new Vr(t,e,n,r,i,o);return s&&(a.$a=!0),a}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}async terminate(){var t,e;await async function(t){const e=R(t);A("RemoteStore","RemoteStore shutting down."),e.k_.add(5),await Dr(e),e.Q_.shutdown(),e.K_.set("Unknown")}(this.remoteStore),null===(t=this.datastore)||void 0===t||t.terminate(),null===(e=this.eventManager)||void 0===e||e.terminate()}}Gr.provider={build:()=>new Gr};
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function zr(t){const e={};return void 0!==t.timeoutSeconds&&(e.timeoutSeconds=t.timeoutSeconds),e
/**
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
 */}const Kr=new Map;
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
 */function qr(t,e,n,r){if(!0===e&&!0===r)throw new N(k.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Wr(t){if(void 0===t)return"undefined";if(null===t)return"null";if("string"==typeof t)return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if("number"==typeof t||"boolean"==typeof t)return""+t;if("object"==typeof t){if(t instanceof Array)return"an array";{const e=function(t){return t.constructor?t.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return"function"==typeof t?"a function":O()}function Qr(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new N(k.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Wr(t);throw new N(k.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}
/**
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
 */
class Xr{constructor(t){var e,n;if(void 0===t.host){if(void 0!==t.ssl)throw new N(k.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=null===(e=t.ssl)||void 0===e||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,void 0===t.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==t.cacheSizeBytes&&t.cacheSizeBytes<1048576)throw new N(k.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}qr("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:void 0===t.experimentalAutoDetectLongPolling?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=zr(null!==(n=t.experimentalLongPollingOptions)&&void 0!==n?n:{}),function(t){if(void 0!==t.timeoutSeconds){if(isNaN(t.timeoutSeconds))throw new N(k.INVALID_ARGUMENT,`invalid long polling timeout: ${t.timeoutSeconds} (must not be NaN)`);if(t.timeoutSeconds<5)throw new N(k.INVALID_ARGUMENT,`invalid long polling timeout: ${t.timeoutSeconds} (minimum allowed value is 5)`);if(t.timeoutSeconds>30)throw new N(k.INVALID_ARGUMENT,`invalid long polling timeout: ${t.timeoutSeconds} (maximum allowed value is 30)`)}}
/**
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
 */(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(t,e){return t.timeoutSeconds===e.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class Yr{constructor(t,e,n,r){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=n,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Xr({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new N(k.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return"notTerminated"!==this._terminateTask}_setSettings(t){if(this._settingsFrozen)throw new N(k.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Xr(t),void 0!==t.credentials&&(this._authCredentials=function(t){if(!t)return new L;switch(t.type){case"firstParty":return new U(t.sessionIndex||"0",t.iamToken||null,t.authTokenFactory||null);case"provider":return t.client;default:throw new N(k.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return"notTerminated"===this._terminateTask&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){"notTerminated"===this._terminateTask?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const e=Kr.get(t);e&&(A("ComponentProvider","Removing Datastore"),Kr.delete(t),e.terminate())}(this),Promise.resolve()}}function Jr(t,e,n,r={}){var i;const o=(t=Qr(t,Yr))._getSettings(),s=`${e}:${n}`;if("firestore.googleapis.com"!==o.host&&o.host!==s&&x("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},o),{host:s,ssl:!1})),r.mockUserToken){let e,n;if("string"==typeof r.mockUserToken)e=r.mockUserToken,n=E.MOCK_USER;else{e=(0,a.Fy)(r.mockUserToken,null===(i=t._app)||void 0===i?void 0:i.options.projectId);const o=r.mockUserToken.sub||r.mockUserToken.user_id;if(!o)throw new N(k.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");n=new E(o)}t._authCredentials=new F(new P(e,n))}}
/**
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
 */
/**
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
 */
class Zr{constructor(t=Promise.resolve()){this.Iu=[],this.Eu=!1,this.du=[],this.Au=null,this.Ru=!1,this.Vu=!1,this.mu=[],this.r_=new Ar(this,"async_queue_retry"),this.fu=()=>{const t=_r();t&&A("AsyncQueue","Visibility state changed to "+t.visibilityState),this.r_.Jo()},this.gu=t;const e=_r();e&&"function"==typeof e.addEventListener&&e.addEventListener("visibilitychange",this.fu)}get isShuttingDown(){return this.Eu}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.pu(),this.yu(t)}enterRestrictedMode(t){if(!this.Eu){this.Eu=!0,this.Vu=t||!1;const e=_r();e&&"function"==typeof e.removeEventListener&&e.removeEventListener("visibilitychange",this.fu)}}enqueue(t){if(this.pu(),this.Eu)return new Promise((()=>{}));const e=new M;return this.yu((()=>this.Eu&&this.Vu?Promise.resolve():(t().then(e.resolve,e.reject),e.promise))).then((()=>e.promise))}enqueueRetryable(t){this.enqueueAndForget((()=>(this.Iu.push(t),this.wu())))}async wu(){if(0!==this.Iu.length){try{await this.Iu[0](),this.Iu.shift(),this.r_.reset()}catch(t){if(!st(t))throw t;A("AsyncQueue","Operation failed with retryable error: "+t)}this.Iu.length>0&&this.r_.jo((()=>this.wu()))}}yu(t){const e=this.gu.then((()=>(this.Ru=!0,t().catch((t=>{this.Au=t,this.Ru=!1;const e=function(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+"\n"+t.stack),e}
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
 */(t);throw I("INTERNAL UNHANDLED ERROR: ",e),t})).then((t=>(this.Ru=!1,t))))));return this.gu=e,e}enqueueAfterDelay(t,e,n){this.pu(),this.mu.indexOf(t)>-1&&(e=0);const r=Nr.createAndSchedule(this,t,e,n,(t=>this.Su(t)));return this.du.push(r),r}pu(){this.Au&&O()}verifyOperationInProgress(){}async bu(){let t;do{t=this.gu,await t}while(t!==this.gu)}Du(t){for(const e of this.du)if(e.timerId===t)return!0;return!1}vu(t){return this.bu().then((()=>{this.du.sort(((t,e)=>t.targetTimeMs-e.targetTimeMs));for(const e of this.du)if(e.skipDelay(),"all"!==t&&e.timerId===t)break;return this.bu()}))}Cu(t){this.mu.push(t)}Su(t){const e=this.du.indexOf(t);this.du.splice(e,1)}}class ti extends Yr{constructor(t,e,n,r){super(t,e,n,r),this.type="firestore",this._queue=new Zr,this._persistenceKey=(null==r?void 0:r.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const t=this._firestoreClient.terminate();this._queue=new Zr(t),this._firestoreClient=void 0,await t}}}function ei(t,e){const n="object"==typeof t?t:(0,i.Sx)(),r="string"==typeof t?t:e||"(default)",o=(0,i.j6)(n,"firestore").getImmediate({identifier:r});if(!o._initialized){const t=(0,a.yU)("firestore");t&&Jr(o,...t)}return o}new RegExp("[~\\*/\\[\\]]");new WeakMap;
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
 */!function(t,e=!0){!function(t){T=t}(i.MF),(0,i.om)(new o.uA("firestore",((t,{instanceIdentifier:n,options:r})=>{const i=t.getProvider("app").getImmediate(),o=new ti(new j(t.getProvider("auth-internal")),new B(t.getProvider("app-check-internal")),function(t,e){if(!Object.prototype.hasOwnProperty.apply(t.options,["projectId"]))throw new N(k.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new kt(t.options.projectId,e)}(i,n),i);return r=Object.assign({useFetchStreams:e},r),o._setSettings(r),o}),"PUBLIC").setMultipleInstances(!0)),(0,i.KO)(b,"4.7.5",t),(0,i.KO)(b,"4.7.5","esm2017")}()},8071:function(t,e,n){n.d(e,{P2:function(){return E}});n(8992),n(7550),n(4979);const r=(t,e)=>e.some((e=>t instanceof e));let i,o;function s(){return i||(i=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function a(){return o||(o=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const c=new WeakMap,u=new WeakMap,l=new WeakMap,h=new WeakMap,f=new WeakMap;function d(t){const e=new Promise(((e,n)=>{const r=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{e(w(t.result)),r()},o=()=>{n(t.error),r()};t.addEventListener("success",i),t.addEventListener("error",o)}));return e.then((e=>{e instanceof IDBCursor&&c.set(e,t)})).catch((()=>{})),f.set(e,t),e}function p(t){if(u.has(t))return;const e=new Promise(((e,n)=>{const r=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{e(),r()},o=()=>{n(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)}));u.set(t,e)}let g={get(t,e,n){if(t instanceof IDBTransaction){if("done"===e)return u.get(t);if("objectStoreNames"===e)return t.objectStoreNames||l.get(t);if("store"===e)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return w(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&("done"===e||"store"===e)||e in t}};function m(t){g=t(g)}function y(t){return t!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?a().includes(t)?function(...e){return t.apply(b(this),e),w(c.get(this))}:function(...e){return w(t.apply(b(this),e))}:function(e,...n){const r=t.call(b(this),e,...n);return l.set(r,e.sort?e.sort():[e]),w(r)}}function v(t){return"function"===typeof t?y(t):(t instanceof IDBTransaction&&p(t),r(t,s())?new Proxy(t,g):t)}function w(t){if(t instanceof IDBRequest)return d(t);if(h.has(t))return h.get(t);const e=v(t);return e!==t&&(h.set(t,e),f.set(e,t)),e}const b=t=>f.get(t);function E(t,e,{blocked:n,upgrade:r,blocking:i,terminated:o}={}){const s=indexedDB.open(t,e),a=w(s);return r&&s.addEventListener("upgradeneeded",(t=>{r(w(s.result),t.oldVersion,t.newVersion,w(s.transaction),t)})),n&&s.addEventListener("blocked",(t=>n(t.oldVersion,t.newVersion,t))),a.then((t=>{o&&t.addEventListener("close",(()=>o())),i&&t.addEventListener("versionchange",(t=>i(t.oldVersion,t.newVersion,t)))})).catch((()=>{})),a}const T=["get","getKey","getAll","getAllKeys","count"],_=["put","add","delete","clear"],S=new Map;function A(t,e){if(!(t instanceof IDBDatabase)||e in t||"string"!==typeof e)return;if(S.get(e))return S.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=_.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!i&&!T.includes(n))return;const o=async function(t,...e){const o=this.transaction(t,i?"readwrite":"readonly");let s=o.store;return r&&(s=s.index(e.shift())),(await Promise.all([s[n](...e),i&&o.done]))[0]};return S.set(e,o),o}m((t=>({...t,get:(e,n,r)=>A(e,n)||t.get(e,n,r),has:(e,n)=>!!A(e,n)||t.has(e,n)})))},1387:function(t,e,n){n.d(e,{LA:function(){return ct},aE:function(){return ie}});n(4114),n(7642),n(8004),n(3853),n(5876),n(2475),n(5024),n(1698),n(8992),n(3215),n(4520),n(2577),n(3949),n(1454),n(8872),n(7550);var r=n(6768),i=n(144);
/*!
  * vue-router v4.5.0
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */
const o="undefined"!==typeof document;function s(t){return"object"===typeof t||"displayName"in t||"props"in t||"__vccOpts"in t}function a(t){return t.__esModule||"Module"===t[Symbol.toStringTag]||t.default&&s(t.default)}const c=Object.assign;function u(t,e){const n={};for(const r in e){const i=e[r];n[r]=h(i)?i.map(t):t(i)}return n}const l=()=>{},h=Array.isArray;const f=/#/g,d=/&/g,p=/\//g,g=/=/g,m=/\?/g,y=/\+/g,v=/%5B/g,w=/%5D/g,b=/%5E/g,E=/%60/g,T=/%7B/g,_=/%7C/g,S=/%7D/g,A=/%20/g;function I(t){return encodeURI(""+t).replace(_,"|").replace(v,"[").replace(w,"]")}function x(t){return I(t).replace(T,"{").replace(S,"}").replace(b,"^")}function C(t){return I(t).replace(y,"%2B").replace(A,"+").replace(f,"%23").replace(d,"%26").replace(E,"`").replace(T,"{").replace(S,"}").replace(b,"^")}function O(t){return C(t).replace(g,"%3D")}function D(t){return I(t).replace(f,"%23").replace(m,"%3F")}function R(t){return null==t?"":D(t).replace(p,"%2F")}function k(t){try{return decodeURIComponent(""+t)}catch(e){}return""+t}const N=/\/$/,M=t=>t.replace(N,"");function P(t,e,n="/"){let r,i={},o="",s="";const a=e.indexOf("#");let c=e.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(r=e.slice(0,c),o=e.slice(c+1,a>-1?a:e.length),i=t(o)),a>-1&&(r=r||e.slice(0,a),s=e.slice(a,e.length)),r=H(null!=r?r:e,n),{fullPath:r+(o&&"?")+o+s,path:r,query:i,hash:k(s)}}function L(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function F(t,e){return e&&t.toLowerCase().startsWith(e.toLowerCase())?t.slice(e.length)||"/":t}function j(t,e,n){const r=e.matched.length-1,i=n.matched.length-1;return r>-1&&r===i&&V(e.matched[r],n.matched[i])&&U(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function V(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function U(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!$(t[n],e[n]))return!1;return!0}function $(t,e){return h(t)?B(t,e):h(e)?B(e,t):t===e}function B(t,e){return h(e)?t.length===e.length&&t.every(((t,n)=>t===e[n])):1===t.length&&t[0]===e}function H(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),i=r[r.length-1];".."!==i&&"."!==i||r.push("");let o,s,a=n.length-1;for(o=0;o<r.length;o++)if(s=r[o],"."!==s){if(".."!==s)break;a>1&&a--}return n.slice(0,a).join("/")+"/"+r.slice(o).join("/")}const G={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var z,K;(function(t){t["pop"]="pop",t["push"]="push"})(z||(z={})),function(t){t["back"]="back",t["forward"]="forward",t["unknown"]=""}(K||(K={}));function q(t){if(!t)if(o){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return"/"!==t[0]&&"#"!==t[0]&&(t="/"+t),M(t)}const W=/^[^#]+#/;function Q(t,e){return t.replace(W,"#")+e}function X(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const Y=()=>({left:window.scrollX,top:window.scrollY});function J(t){let e;if("el"in t){const n=t.el,r="string"===typeof n&&n.startsWith("#");0;const i="string"===typeof n?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!i)return;e=X(i,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(null!=e.left?e.left:window.scrollX,null!=e.top?e.top:window.scrollY)}function Z(t,e){const n=history.state?history.state.position-e:-1;return n+t}const tt=new Map;function et(t,e){tt.set(t,e)}function nt(t){const e=tt.get(t);return tt.delete(t),e}let rt=()=>location.protocol+"//"+location.host;function it(t,e){const{pathname:n,search:r,hash:i}=e,o=t.indexOf("#");if(o>-1){let e=i.includes(t.slice(o))?t.slice(o).length:1,n=i.slice(e);return"/"!==n[0]&&(n="/"+n),F(n,"")}const s=F(n,t);return s+r+i}function ot(t,e,n,r){let i=[],o=[],s=null;const a=({state:o})=>{const a=it(t,location),c=n.value,u=e.value;let l=0;if(o){if(n.value=a,e.value=o,s&&s===c)return void(s=null);l=u?o.position-u.position:0}else r(a);i.forEach((t=>{t(n.value,c,{delta:l,type:z.pop,direction:l?l>0?K.forward:K.back:K.unknown})}))};function u(){s=n.value}function l(t){i.push(t);const e=()=>{const e=i.indexOf(t);e>-1&&i.splice(e,1)};return o.push(e),e}function h(){const{history:t}=window;t.state&&t.replaceState(c({},t.state,{scroll:Y()}),"")}function f(){for(const t of o)t();o=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",h)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",h,{passive:!0}),{pauseListeners:u,listen:l,destroy:f}}function st(t,e,n,r=!1,i=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:i?Y():null}}function at(t){const{history:e,location:n}=window,r={value:it(t,n)},i={value:e.state};function o(r,o,s){const a=t.indexOf("#"),c=a>-1?(n.host&&document.querySelector("base")?t:t.slice(a))+r:rt()+t+r;try{e[s?"replaceState":"pushState"](o,"",c),i.value=o}catch(u){console.error(u),n[s?"replace":"assign"](c)}}function s(t,n){const s=c({},e.state,st(i.value.back,t,i.value.forward,!0),n,{position:i.value.position});o(t,s,!0),r.value=t}function a(t,n){const s=c({},i.value,e.state,{forward:t,scroll:Y()});o(s.current,s,!0);const a=c({},st(r.value,t,null),{position:s.position+1},n);o(t,a,!1),r.value=t}return i.value||o(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0),{location:r,state:i,push:a,replace:s}}function ct(t){t=q(t);const e=at(t),n=ot(t,e.state,e.location,e.replace);function r(t,e=!0){e||n.pauseListeners(),history.go(t)}const i=c({location:"",base:t,go:r,createHref:Q.bind(null,t)},e,n);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>e.state.value}),i}function ut(t){return"string"===typeof t||t&&"object"===typeof t}function lt(t){return"string"===typeof t||"symbol"===typeof t}const ht=Symbol("");var ft;(function(t){t[t["aborted"]=4]="aborted",t[t["cancelled"]=8]="cancelled",t[t["duplicated"]=16]="duplicated"})(ft||(ft={}));function dt(t,e){return c(new Error,{type:t,[ht]:!0},e)}function pt(t,e){return t instanceof Error&&ht in t&&(null==e||!!(t.type&e))}const gt="[^/]+?",mt={sensitive:!1,strict:!1,start:!0,end:!0},yt=/[.+*?^${}()[\]/\\]/g;function vt(t,e){const n=c({},mt,e),r=[];let i=n.start?"^":"";const o=[];for(const c of t){const t=c.length?[]:[90];n.strict&&!c.length&&(i+="/");for(let e=0;e<c.length;e++){const r=c[e];let s=40+(n.sensitive?.25:0);if(0===r.type)e||(i+="/"),i+=r.value.replace(yt,"\\$&"),s+=40;else if(1===r.type){const{value:t,repeatable:n,optional:a,regexp:u}=r;o.push({name:t,repeatable:n,optional:a});const h=u||gt;if(h!==gt){s+=10;try{new RegExp(`(${h})`)}catch(l){throw new Error(`Invalid custom RegExp for param "${t}" (${h}): `+l.message)}}let f=n?`((?:${h})(?:/(?:${h}))*)`:`(${h})`;e||(f=a&&c.length<2?`(?:/${f})`:"/"+f),a&&(f+="?"),i+=f,s+=20,a&&(s+=-8),n&&(s+=-20),".*"===h&&(s+=-50)}t.push(s)}r.push(t)}if(n.strict&&n.end){const t=r.length-1;r[t][r[t].length-1]+=.7000000000000001}n.strict||(i+="/?"),n.end?i+="$":n.strict&&!i.endsWith("/")&&(i+="(?:/|$)");const s=new RegExp(i,n.sensitive?"":"i");function a(t){const e=t.match(s),n={};if(!e)return null;for(let r=1;r<e.length;r++){const t=e[r]||"",i=o[r-1];n[i.name]=t&&i.repeatable?t.split("/"):t}return n}function u(e){let n="",r=!1;for(const i of t){r&&n.endsWith("/")||(n+="/"),r=!1;for(const t of i)if(0===t.type)n+=t.value;else if(1===t.type){const{value:o,repeatable:s,optional:a}=t,c=o in e?e[o]:"";if(h(c)&&!s)throw new Error(`Provided param "${o}" is an array but it is not repeatable (* or + modifiers)`);const u=h(c)?c.join("/"):c;if(!u){if(!a)throw new Error(`Missing required param "${o}"`);i.length<2&&(n.endsWith("/")?n=n.slice(0,-1):r=!0)}n+=u}}return n||"/"}return{re:s,score:r,keys:o,parse:a,stringify:u}}function wt(t,e){let n=0;while(n<t.length&&n<e.length){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?1===t.length&&80===t[0]?-1:1:t.length>e.length?1===e.length&&80===e[0]?1:-1:0}function bt(t,e){let n=0;const r=t.score,i=e.score;while(n<r.length&&n<i.length){const t=wt(r[n],i[n]);if(t)return t;n++}if(1===Math.abs(i.length-r.length)){if(Et(r))return 1;if(Et(i))return-1}return i.length-r.length}function Et(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const Tt={type:0,value:""},_t=/[a-zA-Z0-9_]/;function St(t){if(!t)return[[]];if("/"===t)return[[Tt]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(t){throw new Error(`ERR (${n})/"${u}": ${t}`)}let n=0,r=n;const i=[];let o;function s(){o&&i.push(o),o=[]}let a,c=0,u="",l="";function h(){u&&(0===n?o.push({type:0,value:u}):1===n||2===n||3===n?(o.length>1&&("*"===a||"+"===a)&&e(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),o.push({type:1,value:u,regexp:l,repeatable:"*"===a||"+"===a,optional:"*"===a||"?"===a})):e("Invalid state to consume buffer"),u="")}function f(){u+=a}while(c<t.length)if(a=t[c++],"\\"!==a||2===n)switch(n){case 0:"/"===a?(u&&h(),s()):":"===a?(h(),n=1):f();break;case 4:f(),n=r;break;case 1:"("===a?n=2:_t.test(a)?f():(h(),n=0,"*"!==a&&"?"!==a&&"+"!==a&&c--);break;case 2:")"===a?"\\"==l[l.length-1]?l=l.slice(0,-1)+a:n=3:l+=a;break;case 3:h(),n=0,"*"!==a&&"?"!==a&&"+"!==a&&c--,l="";break;default:e("Unknown state");break}else r=n,n=4;return 2===n&&e(`Unfinished custom RegExp for param "${u}"`),h(),s(),i}function At(t,e,n){const r=vt(St(t.path),n);const i=c(r,{record:t,parent:e,children:[],alias:[]});return e&&!i.record.aliasOf===!e.record.aliasOf&&e.children.push(i),i}function It(t,e){const n=[],r=new Map;function i(t){return r.get(t)}function o(t,n,r){const i=!r,a=Ct(t);a.aliasOf=r&&r.record;const h=kt(e,t),f=[a];if("alias"in t){const e="string"===typeof t.alias?[t.alias]:t.alias;for(const t of e)f.push(Ct(c({},a,{components:r?r.record.components:a.components,path:t,aliasOf:r?r.record:a})))}let d,p;for(const e of f){const{path:c}=e;if(n&&"/"!==c[0]){const t=n.record.path,r="/"===t[t.length-1]?"":"/";e.path=n.record.path+(c&&r+c)}if(d=At(e,n,h),r?r.alias.push(d):(p=p||d,p!==d&&p.alias.push(d),i&&t.name&&!Dt(d)&&s(t.name)),Pt(d)&&u(d),a.children){const t=a.children;for(let e=0;e<t.length;e++)o(t[e],d,r&&r.children[e])}r=r||d}return p?()=>{s(p)}:l}function s(t){if(lt(t)){const e=r.get(t);e&&(r.delete(t),n.splice(n.indexOf(e),1),e.children.forEach(s),e.alias.forEach(s))}else{const e=n.indexOf(t);e>-1&&(n.splice(e,1),t.record.name&&r.delete(t.record.name),t.children.forEach(s),t.alias.forEach(s))}}function a(){return n}function u(t){const e=Nt(t,n);n.splice(e,0,t),t.record.name&&!Dt(t)&&r.set(t.record.name,t)}function h(t,e){let i,o,s,a={};if("name"in t&&t.name){if(i=r.get(t.name),!i)throw dt(1,{location:t});0,s=i.record.name,a=c(xt(e.params,i.keys.filter((t=>!t.optional)).concat(i.parent?i.parent.keys.filter((t=>t.optional)):[]).map((t=>t.name))),t.params&&xt(t.params,i.keys.map((t=>t.name)))),o=i.stringify(a)}else if(null!=t.path)o=t.path,i=n.find((t=>t.re.test(o))),i&&(a=i.parse(o),s=i.record.name);else{if(i=e.name?r.get(e.name):n.find((t=>t.re.test(e.path))),!i)throw dt(1,{location:t,currentLocation:e});s=i.record.name,a=c({},e.params,t.params),o=i.stringify(a)}const u=[];let l=i;while(l)u.unshift(l.record),l=l.parent;return{name:s,path:o,params:a,matched:u,meta:Rt(u)}}function f(){n.length=0,r.clear()}return e=kt({strict:!1,end:!0,sensitive:!1},e),t.forEach((t=>o(t))),{addRoute:o,resolve:h,removeRoute:s,clearRoutes:f,getRoutes:a,getRecordMatcher:i}}function xt(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function Ct(t){const e={path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:t.aliasOf,beforeEnter:t.beforeEnter,props:Ot(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function Ot(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]="object"===typeof n?n[r]:n;return e}function Dt(t){while(t){if(t.record.aliasOf)return!0;t=t.parent}return!1}function Rt(t){return t.reduce(((t,e)=>c(t,e.meta)),{})}function kt(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function Nt(t,e){let n=0,r=e.length;while(n!==r){const i=n+r>>1,o=bt(t,e[i]);o<0?r=i:n=i+1}const i=Mt(t);return i&&(r=e.lastIndexOf(i,r-1)),r}function Mt(t){let e=t;while(e=e.parent)if(Pt(e)&&0===bt(t,e))return e}function Pt({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function Lt(t){const e={};if(""===t||"?"===t)return e;const n="?"===t[0],r=(n?t.slice(1):t).split("&");for(let i=0;i<r.length;++i){const t=r[i].replace(y," "),n=t.indexOf("="),o=k(n<0?t:t.slice(0,n)),s=n<0?null:k(t.slice(n+1));if(o in e){let t=e[o];h(t)||(t=e[o]=[t]),t.push(s)}else e[o]=s}return e}function Ft(t){let e="";for(let n in t){const r=t[n];if(n=O(n),null==r){void 0!==r&&(e+=(e.length?"&":"")+n);continue}const i=h(r)?r.map((t=>t&&C(t))):[r&&C(r)];i.forEach((t=>{void 0!==t&&(e+=(e.length?"&":"")+n,null!=t&&(e+="="+t))}))}return e}function jt(t){const e={};for(const n in t){const r=t[n];void 0!==r&&(e[n]=h(r)?r.map((t=>null==t?null:""+t)):null==r?r:""+r)}return e}const Vt=Symbol(""),Ut=Symbol(""),$t=Symbol(""),Bt=Symbol(""),Ht=Symbol("");function Gt(){let t=[];function e(e){return t.push(e),()=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function zt(t,e,n,r,i,o=t=>t()){const s=r&&(r.enterCallbacks[i]=r.enterCallbacks[i]||[]);return()=>new Promise(((a,c)=>{const u=t=>{!1===t?c(dt(4,{from:n,to:e})):t instanceof Error?c(t):ut(t)?c(dt(2,{from:e,to:t})):(s&&r.enterCallbacks[i]===s&&"function"===typeof t&&s.push(t),a())},l=o((()=>t.call(r&&r.instances[i],e,n,u)));let h=Promise.resolve(l);t.length<3&&(h=h.then(u)),h.catch((t=>c(t)))}))}function Kt(t,e,n,r,i=t=>t()){const o=[];for(const c of t){0;for(const t in c.components){let u=c.components[t];if("beforeRouteEnter"===e||c.instances[t])if(s(u)){const s=u.__vccOpts||u,a=s[e];a&&o.push(zt(a,n,r,c,t,i))}else{let s=u();0,o.push((()=>s.then((o=>{if(!o)throw new Error(`Couldn't resolve component "${t}" at "${c.path}"`);const s=a(o)?o.default:o;c.mods[t]=o,c.components[t]=s;const u=s.__vccOpts||s,l=u[e];return l&&zt(l,n,r,c,t,i)()}))))}}}return o}function qt(t){const e=(0,r.WQ)($t),n=(0,r.WQ)(Bt);const o=(0,r.EW)((()=>{const n=(0,i.R1)(t.to);return e.resolve(n)})),s=(0,r.EW)((()=>{const{matched:t}=o.value,{length:e}=t,r=t[e-1],i=n.matched;if(!r||!i.length)return-1;const s=i.findIndex(V.bind(null,r));if(s>-1)return s;const a=Zt(t[e-2]);return e>1&&Zt(r)===a&&i[i.length-1].path!==a?i.findIndex(V.bind(null,t[e-2])):s})),a=(0,r.EW)((()=>s.value>-1&&Jt(n.params,o.value.params))),c=(0,r.EW)((()=>s.value>-1&&s.value===n.matched.length-1&&U(n.params,o.value.params)));function u(n={}){if(Yt(n)){const n=e[(0,i.R1)(t.replace)?"replace":"push"]((0,i.R1)(t.to)).catch(l);return t.viewTransition&&"undefined"!==typeof document&&"startViewTransition"in document&&document.startViewTransition((()=>n)),n}return Promise.resolve()}return{route:o,href:(0,r.EW)((()=>o.value.href)),isActive:a,isExactActive:c,navigate:u}}function Wt(t){return 1===t.length?t[0]:t}const Qt=(0,r.pM)({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:qt,setup(t,{slots:e}){const n=(0,i.Kh)(qt(t)),{options:o}=(0,r.WQ)($t),s=(0,r.EW)((()=>({[te(t.activeClass,o.linkActiveClass,"router-link-active")]:n.isActive,[te(t.exactActiveClass,o.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive})));return()=>{const i=e.default&&Wt(e.default(n));return t.custom?i:(0,r.h)("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),Xt=Qt;function Yt(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&(void 0===t.button||0===t.button)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function Jt(t,e){for(const n in e){const r=e[n],i=t[n];if("string"===typeof r){if(r!==i)return!1}else if(!h(i)||i.length!==r.length||r.some(((t,e)=>t!==i[e])))return!1}return!0}function Zt(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const te=(t,e,n)=>null!=t?t:null!=e?e:n,ee=(0,r.pM)({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const o=(0,r.WQ)(Ht),s=(0,r.EW)((()=>t.route||o.value)),a=(0,r.WQ)(Ut,0),u=(0,r.EW)((()=>{let t=(0,i.R1)(a);const{matched:e}=s.value;let n;while((n=e[t])&&!n.components)t++;return t})),l=(0,r.EW)((()=>s.value.matched[u.value]));(0,r.Gt)(Ut,(0,r.EW)((()=>u.value+1))),(0,r.Gt)(Vt,l),(0,r.Gt)(Ht,s);const h=(0,i.KR)();return(0,r.wB)((()=>[h.value,l.value,t.name]),(([t,e,n],[r,i,o])=>{e&&(e.instances[n]=t,i&&i!==e&&t&&t===r&&(e.leaveGuards.size||(e.leaveGuards=i.leaveGuards),e.updateGuards.size||(e.updateGuards=i.updateGuards))),!t||!e||i&&V(e,i)&&r||(e.enterCallbacks[n]||[]).forEach((e=>e(t)))}),{flush:"post"}),()=>{const i=s.value,o=t.name,a=l.value,u=a&&a.components[o];if(!u)return ne(n.default,{Component:u,route:i});const f=a.props[o],d=f?!0===f?i.params:"function"===typeof f?f(i):f:null,p=t=>{t.component.isUnmounted&&(a.instances[o]=null)},g=(0,r.h)(u,c({},d,e,{onVnodeUnmounted:p,ref:h}));return ne(n.default,{Component:g,route:i})||g}}});function ne(t,e){if(!t)return null;const n=t(e);return 1===n.length?n[0]:n}const re=ee;function ie(t){const e=It(t.routes,t),n=t.parseQuery||Lt,s=t.stringifyQuery||Ft,a=t.history;const f=Gt(),d=Gt(),p=Gt(),g=(0,i.IJ)(G);let m=G;o&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const y=u.bind(null,(t=>""+t)),v=u.bind(null,R),w=u.bind(null,k);function b(t,n){let r,i;return lt(t)?(r=e.getRecordMatcher(t),i=n):i=t,e.addRoute(i,r)}function E(t){const n=e.getRecordMatcher(t);n&&e.removeRoute(n)}function T(){return e.getRoutes().map((t=>t.record))}function _(t){return!!e.getRecordMatcher(t)}function S(t,r){if(r=c({},r||g.value),"string"===typeof t){const i=P(n,t,r.path),o=e.resolve({path:i.path},r),s=a.createHref(i.fullPath);return c(i,o,{params:w(o.params),hash:k(i.hash),redirectedFrom:void 0,href:s})}let i;if(null!=t.path)i=c({},t,{path:P(n,t.path,r.path).path});else{const e=c({},t.params);for(const t in e)null==e[t]&&delete e[t];i=c({},t,{params:v(e)}),r.params=v(r.params)}const o=e.resolve(i,r),u=t.hash||"";o.params=y(w(o.params));const l=L(s,c({},t,{hash:x(u),path:o.path})),h=a.createHref(l);return c({fullPath:l,hash:u,query:s===Ft?jt(t.query):t.query||{}},o,{redirectedFrom:void 0,href:h})}function A(t){return"string"===typeof t?P(n,t,g.value.path):c({},t)}function I(t,e){if(m!==t)return dt(8,{from:e,to:t})}function C(t){return N(t)}function O(t){return C(c(A(t),{replace:!0}))}function D(t){const e=t.matched[t.matched.length-1];if(e&&e.redirect){const{redirect:n}=e;let r="function"===typeof n?n(t):n;return"string"===typeof r&&(r=r.includes("?")||r.includes("#")?r=A(r):{path:r},r.params={}),c({query:t.query,hash:t.hash,params:null!=r.path?{}:t.params},r)}}function N(t,e){const n=m=S(t),r=g.value,i=t.state,o=t.force,a=!0===t.replace,u=D(n);if(u)return N(c(A(u),{state:"object"===typeof u?c({},i,u.state):i,force:o,replace:a}),e||n);const l=n;let h;return l.redirectedFrom=e,!o&&j(s,r,n)&&(h=dt(16,{to:l,from:r}),rt(r,r,!0,!1)),(h?Promise.resolve(h):V(l,r)).catch((t=>pt(t)?pt(t,2)?t:tt(t):Q(t,l,r))).then((t=>{if(t){if(pt(t,2))return N(c({replace:a},A(t.to),{state:"object"===typeof t.to?c({},i,t.to.state):i,force:o}),e||l)}else t=$(l,r,!0,a,i);return U(l,r,t),t}))}function M(t,e){const n=I(t,e);return n?Promise.reject(n):Promise.resolve()}function F(t){const e=st.values().next().value;return e&&"function"===typeof e.runWithContext?e.runWithContext(t):t()}function V(t,e){let n;const[r,i,o]=oe(t,e);n=Kt(r.reverse(),"beforeRouteLeave",t,e);for(const a of r)a.leaveGuards.forEach((r=>{n.push(zt(r,t,e))}));const s=M.bind(null,t,e);return n.push(s),ct(n).then((()=>{n=[];for(const r of f.list())n.push(zt(r,t,e));return n.push(s),ct(n)})).then((()=>{n=Kt(i,"beforeRouteUpdate",t,e);for(const r of i)r.updateGuards.forEach((r=>{n.push(zt(r,t,e))}));return n.push(s),ct(n)})).then((()=>{n=[];for(const r of o)if(r.beforeEnter)if(h(r.beforeEnter))for(const i of r.beforeEnter)n.push(zt(i,t,e));else n.push(zt(r.beforeEnter,t,e));return n.push(s),ct(n)})).then((()=>(t.matched.forEach((t=>t.enterCallbacks={})),n=Kt(o,"beforeRouteEnter",t,e,F),n.push(s),ct(n)))).then((()=>{n=[];for(const r of d.list())n.push(zt(r,t,e));return n.push(s),ct(n)})).catch((t=>pt(t,8)?t:Promise.reject(t)))}function U(t,e,n){p.list().forEach((r=>F((()=>r(t,e,n)))))}function $(t,e,n,r,i){const s=I(t,e);if(s)return s;const u=e===G,l=o?history.state:{};n&&(r||u?a.replace(t.fullPath,c({scroll:u&&l&&l.scroll},i)):a.push(t.fullPath,i)),g.value=t,rt(t,e,n,u),tt()}let B;function H(){B||(B=a.listen(((t,e,n)=>{if(!at.listening)return;const r=S(t),i=D(r);if(i)return void N(c(i,{replace:!0,force:!0}),r).catch(l);m=r;const s=g.value;o&&et(Z(s.fullPath,n.delta),Y()),V(r,s).catch((t=>pt(t,12)?t:pt(t,2)?(N(c(A(t.to),{force:!0}),r).then((t=>{pt(t,20)&&!n.delta&&n.type===z.pop&&a.go(-1,!1)})).catch(l),Promise.reject()):(n.delta&&a.go(-n.delta,!1),Q(t,r,s)))).then((t=>{t=t||$(r,s,!1),t&&(n.delta&&!pt(t,8)?a.go(-n.delta,!1):n.type===z.pop&&pt(t,20)&&a.go(-1,!1)),U(r,s,t)})).catch(l)})))}let K,q=Gt(),W=Gt();function Q(t,e,n){tt(t);const r=W.list();return r.length?r.forEach((r=>r(t,e,n))):console.error(t),Promise.reject(t)}function X(){return K&&g.value!==G?Promise.resolve():new Promise(((t,e)=>{q.add([t,e])}))}function tt(t){return K||(K=!t,H(),q.list().forEach((([e,n])=>t?n(t):e())),q.reset()),t}function rt(e,n,i,s){const{scrollBehavior:a}=t;if(!o||!a)return Promise.resolve();const c=!i&&nt(Z(e.fullPath,0))||(s||!i)&&history.state&&history.state.scroll||null;return(0,r.dY)().then((()=>a(e,n,c))).then((t=>t&&J(t))).catch((t=>Q(t,e,n)))}const it=t=>a.go(t);let ot;const st=new Set,at={currentRoute:g,listening:!0,addRoute:b,removeRoute:E,clearRoutes:e.clearRoutes,hasRoute:_,getRoutes:T,resolve:S,options:t,push:C,replace:O,go:it,back:()=>it(-1),forward:()=>it(1),beforeEach:f.add,beforeResolve:d.add,afterEach:p.add,onError:W.add,isReady:X,install(t){const e=this;t.component("RouterLink",Xt),t.component("RouterView",re),t.config.globalProperties.$router=e,Object.defineProperty(t.config.globalProperties,"$route",{enumerable:!0,get:()=>(0,i.R1)(g)}),o&&!ot&&g.value===G&&(ot=!0,C(a.location).catch((t=>{0})));const n={};for(const i in G)Object.defineProperty(n,i,{get:()=>g.value[i],enumerable:!0});t.provide($t,e),t.provide(Bt,(0,i.Gc)(n)),t.provide(Ht,g);const r=t.unmount;st.add(t),t.unmount=function(){st.delete(t),st.size<1&&(m=G,B&&B(),B=null,g.value=G,ot=!1,K=!1),r()}}};function ct(t){return t.reduce(((t,e)=>t.then((()=>F(e)))),Promise.resolve())}return at}function oe(t,e){const n=[],r=[],i=[],o=Math.max(e.matched.length,t.matched.length);for(let s=0;s<o;s++){const o=e.matched[s];o&&(t.matched.find((t=>V(t,o)))?r.push(o):n.push(o));const a=t.matched[s];a&&(e.matched.find((t=>V(t,a)))||i.push(a))}return[n,r,i]}}}]);
//# sourceMappingURL=chunk-vendors.03d7eaf3.js.map