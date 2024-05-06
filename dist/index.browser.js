"use strict";var v=(()=>{var ke=Object.create;var S=Object.defineProperty;var Le=Object.getOwnPropertyDescriptor;var Ie=Object.getOwnPropertyNames;var Te=Object.getPrototypeOf,Ee=Object.prototype.hasOwnProperty;var G=(r=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(r,{get:(t,o)=>(typeof require<"u"?require:t)[o]}):r)(function(r){if(typeof require<"u")return require.apply(this,arguments);throw new Error('Dynamic require of "'+r+'" is not supported')});var W=(r,t)=>()=>(t||r((t={exports:{}}).exports,t),t.exports),ve=(r,t)=>{for(var o in t)S(r,o,{get:t[o],enumerable:!0})},fr=(r,t,o,e)=>{if(t&&typeof t=="object"||typeof t=="function")for(let n of Ie(t))!Ee.call(r,n)&&n!==o&&S(r,n,{get:()=>t[n],enumerable:!(e=Le(t,n))||e.enumerable});return r};var Me=(r,t,o)=>(o=r!=null?ke(Te(r)):{},fr(t||!r||!r.__esModule?S(o,"default",{value:r,enumerable:!0}):o,r)),je=r=>fr(S({},"__esModule",{value:!0}),r);var ie=W((Sm,ne)=>{ne.exports=function(t){return t&&typeof t=="object"&&typeof t.copy=="function"&&typeof t.fill=="function"&&typeof t.readUInt8=="function"}});var se=W((zm,rr)=>{typeof Object.create=="function"?rr.exports=function(t,o){t.super_=o,t.prototype=Object.create(o.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}})}:rr.exports=function(t,o){t.super_=o;var e=function(){};e.prototype=o.prototype,t.prototype=new e,t.prototype.constructor=t}});var ue=W(h=>{var sa=/%[sdj%]/g;h.format=function(r){if(!V(r)){for(var t=[],o=0;o<arguments.length;o++)t.push(w(arguments[o]));return t.join(" ")}for(var o=1,e=arguments,n=e.length,a=String(r).replace(sa,function(m){if(m==="%%")return"%";if(o>=n)return m;switch(m){case"%s":return String(e[o++]);case"%d":return Number(e[o++]);case"%j":try{return JSON.stringify(e[o++])}catch{return"[Circular]"}default:return m}}),s=e[o];o<n;s=e[++o])J(s)||!v(s)?a+=" "+s:a+=" "+w(s);return a};h.deprecate=function(r,t){if(x(global.process))return function(){return h.deprecate(r,t).apply(this,arguments)};if(process.noDeprecation===!0)return r;var o=!1;function e(){if(!o){if(process.throwDeprecation)throw new Error(t);process.traceDeprecation?console.trace(t):console.error(t),o=!0}return r.apply(this,arguments)}return e};var C={},tr;h.debuglog=function(r){if(x(tr)&&(tr=process.env.NODE_DEBUG||""),r=r.toUpperCase(),!C[r])if(new RegExp("\\b"+r+"\\b","i").test(tr)){var t=process.pid;C[r]=function(){var o=h.format.apply(h,arguments);console.error("%s %d: %s",r,t,o)}}else C[r]=function(){};return C[r]};function w(r,t){var o={seen:[],stylize:fa};return arguments.length>=3&&(o.depth=arguments[2]),arguments.length>=4&&(o.colors=arguments[3]),ir(t)?o.showHidden=t:t&&h._extend(o,t),x(o.showHidden)&&(o.showHidden=!1),x(o.depth)&&(o.depth=2),x(o.colors)&&(o.colors=!1),x(o.customInspect)&&(o.customInspect=!0),o.colors&&(o.stylize=ma),H(o,r,o.depth)}h.inspect=w;w.colors={bold:[1,22],italic:[3,23],underline:[4,24],inverse:[7,27],white:[37,39],grey:[90,39],black:[30,39],blue:[34,39],cyan:[36,39],green:[32,39],magenta:[35,39],red:[31,39],yellow:[33,39]};w.styles={special:"cyan",number:"yellow",boolean:"yellow",undefined:"grey",null:"bold",string:"green",date:"magenta",regexp:"red"};function ma(r,t){var o=w.styles[t];return o?"\x1B["+w.colors[o][0]+"m"+r+"\x1B["+w.colors[o][1]+"m":r}function fa(r,t){return r}function pa(r){var t={};return r.forEach(function(o,e){t[o]=!0}),t}function H(r,t,o){if(r.customInspect&&t&&B(t.inspect)&&t.inspect!==h.inspect&&!(t.constructor&&t.constructor.prototype===t)){var e=t.inspect(o,r);return V(e)||(e=H(r,e,o)),e}var n=ua(r,t);if(n)return n;var a=Object.keys(t),s=pa(a);if(r.showHidden&&(a=Object.getOwnPropertyNames(t)),P(t)&&(a.indexOf("message")>=0||a.indexOf("description")>=0))return or(t);if(a.length===0){if(B(t)){var m=t.name?": "+t.name:"";return r.stylize("[Function"+m+"]","special")}if(R(t))return r.stylize(RegExp.prototype.toString.call(t),"regexp");if(nr(t))return r.stylize(Date.prototype.toString.call(t),"date");if(P(t))return or(t)}var f="",u=!1,y=["{","}"];if(me(t)&&(u=!0,y=["[","]"]),B(t)){var c=t.name?": "+t.name:"";f=" [Function"+c+"]"}if(R(t)&&(f=" "+RegExp.prototype.toString.call(t)),nr(t)&&(f=" "+Date.prototype.toUTCString.call(t)),P(t)&&(f=" "+or(t)),a.length===0&&(!u||t.length==0))return y[0]+f+y[1];if(o<0)return R(t)?r.stylize(RegExp.prototype.toString.call(t),"regexp"):r.stylize("[Object]","special");r.seen.push(t);var l;return u?l=ca(r,t,o,s,a):l=a.map(function(d){return ar(r,t,o,s,d,u)}),r.seen.pop(),ya(l,f,y)}function ua(r,t){if(x(t))return r.stylize("undefined","undefined");if(V(t)){var o="'"+JSON.stringify(t).replace(/^"|"$/g,"").replace(/'/g,"\\'").replace(/\\"/g,'"')+"'";return r.stylize(o,"string")}if(fe(t))return r.stylize(""+t,"number");if(ir(t))return r.stylize(""+t,"boolean");if(J(t))return r.stylize("null","null")}function or(r){return"["+Error.prototype.toString.call(r)+"]"}function ca(r,t,o,e,n){for(var a=[],s=0,m=t.length;s<m;++s)pe(t,String(s))?a.push(ar(r,t,o,e,String(s),!0)):a.push("");return n.forEach(function(f){f.match(/^\d+$/)||a.push(ar(r,t,o,e,f,!0))}),a}function ar(r,t,o,e,n,a){var s,m,f;if(f=Object.getOwnPropertyDescriptor(t,n)||{value:t[n]},f.get?f.set?m=r.stylize("[Getter/Setter]","special"):m=r.stylize("[Getter]","special"):f.set&&(m=r.stylize("[Setter]","special")),pe(e,n)||(s="["+n+"]"),m||(r.seen.indexOf(f.value)<0?(J(o)?m=H(r,f.value,null):m=H(r,f.value,o-1),m.indexOf(`
`)>-1&&(a?m=m.split(`
`).map(function(u){return"  "+u}).join(`
`).substr(2):m=`
`+m.split(`
`).map(function(u){return"   "+u}).join(`
`))):m=r.stylize("[Circular]","special")),x(s)){if(a&&n.match(/^\d+$/))return m;s=JSON.stringify(""+n),s.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)?(s=s.substr(1,s.length-2),s=r.stylize(s,"name")):(s=s.replace(/'/g,"\\'").replace(/\\"/g,'"').replace(/(^"|"$)/g,"'"),s=r.stylize(s,"string"))}return s+": "+m}function ya(r,t,o){var e=0,n=r.reduce(function(a,s){return e++,s.indexOf(`
`)>=0&&e++,a+s.replace(/\u001b\[\d\d?m/g,"").length+1},0);return n>60?o[0]+(t===""?"":t+`
 `)+" "+r.join(`,
  `)+" "+o[1]:o[0]+t+" "+r.join(", ")+" "+o[1]}function me(r){return Array.isArray(r)}h.isArray=me;function ir(r){return typeof r=="boolean"}h.isBoolean=ir;function J(r){return r===null}h.isNull=J;function la(r){return r==null}h.isNullOrUndefined=la;function fe(r){return typeof r=="number"}h.isNumber=fe;function V(r){return typeof r=="string"}h.isString=V;function ha(r){return typeof r=="symbol"}h.isSymbol=ha;function x(r){return r===void 0}h.isUndefined=x;function R(r){return v(r)&&sr(r)==="[object RegExp]"}h.isRegExp=R;function v(r){return typeof r=="object"&&r!==null}h.isObject=v;function nr(r){return v(r)&&sr(r)==="[object Date]"}h.isDate=nr;function P(r){return v(r)&&(sr(r)==="[object Error]"||r instanceof Error)}h.isError=P;function B(r){return typeof r=="function"}h.isFunction=B;function da(r){return r===null||typeof r=="boolean"||typeof r=="number"||typeof r=="string"||typeof r=="symbol"||typeof r>"u"}h.isPrimitive=da;h.isBuffer=ie();function sr(r){return Object.prototype.toString.call(r)}function er(r){return r<10?"0"+r.toString(10):r.toString(10)}var Aa=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];function ba(){var r=new Date,t=[er(r.getHours()),er(r.getMinutes()),er(r.getSeconds())].join(":");return[r.getDate(),Aa[r.getMonth()],t].join(" ")}h.log=function(){console.log("%s - %s",ba(),h.format.apply(h,arguments))};h.inherits=se();h._extend=function(r,t){if(!t||!v(t))return r;for(var o=Object.keys(t),e=o.length;e--;)r[o[e]]=t[o[e]];return r};function pe(r,t){return Object.prototype.hasOwnProperty.call(r,t)}});var ga={};ve(ga,{NDArray:()=>A,NDIter:()=>p,NDMultiIter:()=>D,abs:()=>ur,acos:()=>yr,acosh:()=>hr,add:()=>wr,angle:()=>Lr,array:()=>i,asin:()=>Tr,asinh:()=>vr,atan:()=>jr,atanh:()=>_r,augment:()=>O,binOp:()=>Or,cbrt:()=>Ur,ceil:()=>Cr,check:()=>Pr,combine:()=>Hr,copy:()=>Vr,cos:()=>Wr,cosh:()=>Yr,cross:()=>Kr,det:()=>rt,diagonal:()=>ot,dot:()=>at,eig:()=>it,equals:()=>mt,equidimensional:()=>pt,equilateral:()=>ct,exp:()=>lt,expm1:()=>dt,eye:()=>E,fill:()=>bt,floor:()=>Nt,forEach:()=>xt,fround:()=>kt,gauss:()=>It,get:()=>Et,inv:()=>qt,log:()=>St,log10:()=>Ot,log1p:()=>Ut,log2:()=>Ct,lu:()=>Pt,lu_factor:()=>Ht,magic:()=>Ne,map:()=>Vt,matrix:()=>$,max:()=>Wt,mean:()=>Yt,min:()=>Kt,multiply:()=>ro,norm:()=>oo,normalize:()=>ao,ones:()=>ge,pow:()=>io,prod:()=>mo,product:()=>po,project:()=>co,push:()=>lo,random:()=>xe,range:()=>we,rank:()=>Ao,reciprocal:()=>Do,reduce:()=>go,reshape:()=>wo,round:()=>Lo,row_add:()=>To,scale:()=>vo,set:()=>jo,sign:()=>_o,sin:()=>zo,sinh:()=>Fo,slice:()=>$o,solve:()=>Ro,sqrt:()=>Bo,square:()=>Jo,subtract:()=>Go,sum:()=>Xo,swap:()=>Zo,tan:()=>Qo,tanh:()=>te,toArray:()=>ee,toString:()=>ye,trace:()=>le,transpose:()=>de,trunc:()=>be,zeros:()=>N});var k=32,X=r=>r.reduce((t,o)=>t.concat(Array.isArray(o)?X(o):o),[]),Y=r=>ArrayBuffer.isView(r)&&!(r instanceof DataView),z=r=>r.reduce((t,o)=>t*o,1),Z=r=>Array.isArray(r)||Y(r)?[r.length].concat(Z(r[0])):[],I=r=>[...r.slice(1).map((t,o)=>r.slice(o+1).reduce((e,n)=>e*n,1)),1],pr=r=>{let{constructor:{name:t="Float32Array"}={}}=r||{};switch(t){case"Int8Array":return"int8";case"Uint8Array":return"uint8";case"Int16Array":return"int16";case"Uint16Array":return"uint16";case"Int32Array":return"int32";case"Uint32Array":return"uint32";case"Uint8ClampedArray":return"uint8c";case"Float32Array":return"float32";case"Float64Array":return"float64";default:return"float64"}},g=r=>{switch(r){case"int8":return Int8Array;case"uint8":return Uint8Array;case"int16":return Int16Array;case"uint16":return Uint16Array;case"int32":return Int32Array;case"uint32":return Uint32Array;case"uint8c":return Uint8ClampedArray;case"float32":return Float32Array;case"float64":return Float64Array;default:return Float64Array}};var i=(...r)=>new A(...r);var p=class{x;shape;shapem1;strides;backstrides;length;lengthm1;nd;ndm1;index;coords;pos;factors;constructor(t){this.x=i(t);let{shape:o,strides:e,length:n}=this.x;this.length=n,this.lengthm1=n-1,this.nd=o.length,this.ndm1=this.nd-1,this.shape=Array(k).fill(0),this.strides=Array(k).fill(0),this.shapem1=Array(k).fill(0),this.coords=Array(k).fill(0),this.backstrides=Array(k).fill(0),this.factors=Array(k).fill(0),this.nd!==0&&(this.factors[this.nd-1]=1);let a;for(a=0;a<this.nd;a+=1)this.shape[a]=o[a],this.shapem1[a]=o[a]-1,this.strides[a]=e[a],this.backstrides[a]=e[a]*this.shapem1[a],this.coords[a]=0,a>0&&(this.factors[this.ndm1-a]=this.factors[this.nd-a]*o[this.nd-a]);this.index=0,this.pos=0}done(){return this.index>this.lengthm1}current(){let t=this.done();return{value:t?void 0:this.pos,done:t}}next(){let t=this.current();if(t.done)return t;let{ndm1:o,shapem1:e,strides:n,backstrides:a}=this,s;for(s=o;s>=0;s-=1){if(this.coords[s]<e[s]){this.coords[s]+=1,this.pos+=n[s];break}this.coords[s]=0,this.pos-=a[s]}return this.index+=1,t}[Symbol.iterator](){return this}};var D=class{iters;shape;nd;length;lengthm1;numiter;index;pos;constructor(...t){this.iters=t.map(f=>new p(f)),this.numiter=t.length;let o,e;for(o=0,e=0;o<this.numiter;o+=1)e=Math.max(e,this.iters[o].x.shape.length);this.nd=e,this.shape=Array(e).fill(0);let n,a,s,m;for(o=0;o<e;o+=1)for(this.shape[o]=1,a=0;a<this.numiter;a+=1)if(n=this.iters[a],s=o+n.x.shape.length-e,s>=0){if(m=n.x.shape[s],m==1)continue;if(this.shape[o]==1)this.shape[o]=m;else if(this.shape[o]!==m)throw new Error("shape mismatch")}for(m=this.shape.reduce((f,u)=>f*u,1),this.length=m,this.lengthm1=m-1,o=0;o<this.numiter;o+=1)for(n=this.iters[o],n.nd=this.nd,n.ndm1=this.nd-1,n.length=m,n.lengthm1=m-1,e=n.x.shape.length,e!==0&&(n.factors[this.nd-1]=1),a=0;a<this.nd;a+=1)n.shape[a]=this.shape[a],n.shapem1[a]=this.shape[a]-1,s=a+e-this.nd,s<0||n.x.shape[s]!==this.shape[a]?n.strides[a]=0:n.strides[a]=n.x.strides[s],n.backstrides[a]=n.strides[a]*n.shapem1[a],a>0&&(n.factors[this.nd-a-1]=n.factors[this.nd-a]*this.shape[this.nd-a]);this.index=0,this.pos=Array(this.numiter).fill(0)}done(){return this.index>this.lengthm1}current(){let t=this.done();return{value:t?void 0:this.pos,done:t}}next(){let t=this.current();if(t.done)return t;this.index+=1;let{numiter:o}=this,e,n;for(n=0;n<o;n+=1)e=this.iters[n],this.pos[n]=e.pos,e.next();return t}[Symbol.iterator](){return this}};var{abs:qe}=Math,ur=r=>i(r).abs();function cr(){let{data:r}=this,t=new p(this);for(let o of t)r[o]=qe(r[o]);return this}var{acos:_e}=Math,yr=r=>i(r).acos();function lr(){let{data:r}=this,t=new p(this);for(let o of t)r[o]=_e(r[o]);return this}var{acosh:Se}=Math,hr=r=>i(r).acosh();function dr(){let{data:r}=this,t=new p(this);for(let o of t)r[o]=Se(r[o]);return this}var b;try{b=G("nblas")}catch{}var K=b&&b.NoTrans,Ba=b&&b.Trans;function Ar(r,t,o,e,n,a,s){if(e.length/n!==t||a.length/s!==t)throw new Error("lengths do not match");switch(r){case"float64":return b.daxpy(t,o,e,n,a,s);case"float32":return b.saxpy(t,o,e,n,a,s);default:throw new Error("wrong dtype")}}function br(r,t,o,e,n,a){if(o.length/e!==t||n.length/a!==t)throw new Error("lengths do not match");switch(r){case"float64":return b.ddot(t,o,e,n,a);case"float32":return b.sdot(t,o,e,n,a);default:throw new Error("wrong dtype")}}function Dr(r,t,o,e){if(o.length/e!==t)throw new Error("lengths do not match");switch(r){case"float64":return b.idamax(t,o,e);case"float32":return b.isamax(t,o,e);default:throw new Error("wrong dtype")}}function Nr(r,t,o,e,n,a,s,m,f,u,y,c,l,d){let{length:M}=m,{length:q}=u,{length:_}=l;if(t===b.NoTrans&&M!==f*e||t===b.Trans&&M!==f*a)throw new Error("lengths do not match");if(o===b.NoTrans&&q!==y*a||o===b.Trans&&q!==y*n)throw new Error("lengths do not match");if(_!==d*e)throw new Error("lengths do not match");switch(r){case"float64":return b.dgemm(t,o,e,n,a,s,m,f,u,y,c,l,d);case"float32":return b.sgemm(t,o,e,n,a,s,m,f,u,y,c,l,d);default:throw new Error("wrong dtype")}}function gr(r,t,o,e){if(o.length/e!==t)throw new Error("lengths do not match");switch(r){case"float64":return b.dnrm2(t,o,e);case"float32":return b.snrm2(t,o,e);default:throw new Error("wrong dtype")}}function xr(r,t,o,e,n){if(e.length/n!==t)throw new Error("lengths do not match");switch(r){case"float64":return b.dscal(t,o,e,n);case"float32":return b.sscal(t,o,e,n);default:throw new Error("wrong dtype")}}var wr=(r,t,o=1)=>i(r).add(i(t),o);function kr(r,t=1){let{data:o,length:e,strides:n,dtype:a}=this,{data:s,strides:m}=i(r);try{let f=m[m.length-1],u=n[n.length-1];if(f!==u)throw new Error("inc_x and inc_y must be equal");Ar(a,e,t,s,f,o,u)}catch{let u=new D(this,r);for(let[y,c]of u)o[y]+=t*s[c]}return this}var{acos:ze}=Math,Lr=(r,t)=>i(r).angle(i(t));function Ir(r){return ze(this.dot(i(r))/this.norm()/i(r).norm())}var{asin:Oe}=Math,Tr=r=>i(r).asin();function Er(){let{data:r}=this,t=new p(this);for(let o of t)r[o]=Oe(r[o]);return this}var{asinh:Fe}=Math,vr=r=>i(r).asinh();function Mr(){let{data:r}=this,t=new p(this);for(let o of t)r[o]=Fe(r[o]);return this}var{atan:Ue}=Math,jr=r=>i(r).atan();function qr(){let{data:r}=this,t=new p(this);for(let o of t)r[o]=Ue(r[o]);return this}var{atanh:$e}=Math,_r=r=>i(r).atanh();function Sr(){let{data:r}=this,t=new p(this);for(let o of t)r[o]=$e(r[o]);return this}var N=(...r)=>new A(new Float64Array(r.reduce((t,o)=>t*o,1)),{shape:r}).fill(0);var O=(r,t)=>i(r).augment(i(t));function zr(r){let[t,o]=this.shape,[e,n]=i(r).shape,{data:a}=this,{data:s}=i(r);if(e===0||n===0)return this;if(t!==e)throw new Error("rows do not match");let m=N(t,o+n),{data:f}=m,u,y;for(u=0;u<t;u+=1)for(y=0;y<o;y+=1)f[u*(o+n)+y]=a[u*o+y];for(u=0;u<e;u+=1)for(y=0;y<n;y+=1)f[u*(o+n)+(y+o)]=s[u*n+y];return m}var Or=(r,t,o)=>i(r).binOp(i(t),o);function Fr(r,t){let{data:o}=this,{data:e}=i(r),n=new D(this,r);for(let[a,s]of n)o[a]=t(o[a],e[s],a);return this}var{cbrt:Ce}=Math,Ur=r=>i(r).cbrt();function $r(){let{data:r}=this,t=new p(this);for(let o of t)r[o]=Ce(r[o]);return this}var{ceil:Re}=Math,Cr=r=>i(r).ceil();function Rr(){let{data:r}=this,t=new p(this);for(let o of t)r[o]=Re(r[o]);return this}var Pr=(r,...t)=>{i(r).check(...t)};function Br(...r){let{shape:t,length:o}=this;if(r.length===1){let[e]=r;if(e<0||e>o-1||!Number.isFinite(e))throw new Error("index out of bounds")}else if(!t.every((e,n)=>e>r[n]&&Number.isFinite(r[n])&&r[n]>=0))throw new Error("index out of bounds")}var Hr=(r,t)=>i(r).combine(i(t));function Jr(r){if(this.shape.length!==1&&r.shape.length!==1)throw new Error("combine operation not permitted for multidimensional arrays");let{length:t,data:o}=this,{length:e,data:n}=r;if(e===0)return this;if(t===0)return this.data=new(g(r.dtype))(n),this.length=e,this.dtype=r.dtype,this;let a=t+e,s=new(g(this.dtype))(a);return s.set(o),s.set(n,t),this.data=s,this.length=a,this.shape=[a],this}var Vr=r=>i(r).copy();function Gr(){let r=N(...this.shape),{data:t}=this,{data:o}=r,e=new D(this,r);for(let[n,a]of e)o[a]=t[n];return r}var{cos:Pe}=Math,Wr=r=>i(r).cos();function Xr(){let{data:r}=this,t=new p(this);for(let o of t)r[o]=Pe(r[o]);return this}var{cosh:Be}=Math,Yr=r=>i(r).cosh();function Zr(){let{data:r}=this,t=new p(this);for(let o of t)r[o]=Be(r[o]);return this}var Kr=(r,t)=>i(r).cross(i(t));function Qr(r){let{length:t}=this,{length:o}=r;if(t!==3||o!==3)throw new Error("vectors must have three components");let e=this.y*r.z-this.z*r.y,n=this.z*r.x-this.x*r.z,a=this.x*r.y-this.y*r.x;return this.x=e,this.y=n,this.z=a,this}var rt=r=>i(r).det();function tt(){this.square();let[r]=this.shape,[t,o]=this.copy().lu_factor(),{data:e}=t,n=1,a=1,s;for(s=0;s<r;s+=1)n*=e[s*r+s],s!==o[s]-1&&(a*=-1);return a*n}var ot=r=>i(r).diagonal();function et(){this.square();let{length:r}=this,[t,o]=this.shape,e=Math.min(t,o);return this.reshape(r).slice(0,r,e+1)}var at=(r,t)=>i(r).dot(i(t));function nt(r){let{data:t,length:o,strides:e,dtype:n}=this,{data:a,strides:s}=r,m=0;try{let f=s[s.length-1],u=e[e.length-1];if(f!==u)throw new Error("inc_x and inc_y must be equal");m=br(n,o,a,f,t,u)}catch{let u=new D(this,r);for(let[y,c]of u)m+=t[y]*a[c]}return m}var E=r=>{let t=new A(new Float64Array(r*r),{shape:[r,r]}),{data:o}=t,e;for(e=0;e<r;e+=1)o[e*r+e]=1;return t};var j;try{j=G("nlapack")}catch{}var F=(r,t,o,e,n,a,s)=>{let[m]=r.shape,{data:f}=r,u=f[e*m+n],y=1/(t+o);f[e*m+n]=u-o*(f[a*m+s]+y*u),f[a*m+s]+=o*(u-y*f[a*m+s])},it=r=>i(r).eig();function st(){this.square();let[r]=this.shape;try{["float32","float64"].includes(this.dtype)||(this.dtype="float32",this.data=g(this.dtype).from(this.data));let t=j.NoEigenvector,o=j.Eigenvector,e=N(r),n=N(r),a=N(r,r),s=N(r,r),{data:m}=this,{data:f}=e,{data:u}=n,{data:y}=a,{data:c}=s;return this.dtype==="float64"&&j.dgeev(t,o,r,m,r,f,u,y,r,c,r),this.dtype==="float32"&&j.sgeev(t,o,r,m,r,f,u,y,r,c,r),[e,s]}catch{let{data:o}=this,e=E(r),n=0,a=0,s=0,m=0,f=0;do{for(a=0;a<r;a+=1)for(s=a+1;s<r;s+=1)Math.abs(o[a*r+s])>=n&&(n=Math.abs(o[a*r+s]),m=a,f=s);let u;if(Math.abs(o[m*r+f])<Math.abs(o[f*r+f])*1e-36)u=o[m*r+f]/o[f*r+f];else{let d=o[f*r+f]/2*o[m*r+f];u=1/(Math.abs(d)+Math.sqrt(d*d+1))}let y=1/Math.sqrt(u*u+1),c=u*y,l=o[m*r+f];for(o[m*r+f]=0,o[m*r+m]-=u*l,o[f*r+f]+=u*l,a=0;a<m;a+=1)F(this,y,c,a,m,a,f);for(a=m+1;a<f;a+=1)F(this,y,c,m,a,a,f);for(a=f+1;a<r;a+=1)F(this,y,c,m,a,f,a);for(a=0;a<r;a+=1)F(e,y,c,a,m,a,f)}while(n>=1e-9);return[this.diagonal(),e]}}var mt=(r,t,o=1e-6)=>i(r).equals(i(t),o);function ft(r,t=1e-6){let{data:o}=this,{data:e}=r,n=new D(this,r);for(let[a,s]of n)if(Math.abs(o[a]-e[s])>t)return!1;return!0}var pt=(r,t)=>{i(r).equidimensional(i(t))};function ut(r){let{shape:t}=this,{shape:o}=r;if(!t.every((e,n)=>e===o[n]))throw new Error(`shapes ${t} and ${o} do not match`)}var ct=(r,t)=>{i(r).equilateral(i(t))};function yt(r){let{length:t}=this,{length:o}=r;if(t!==o)throw new Error(`lengths ${t} and ${o} do not match`)}var{exp:He}=Math,lt=r=>i(r).exp();function ht(){let{data:r}=this,t=new p(this);for(let o of t)r[o]=He(r[o]);return this}var{expm1:Je}=Math,dt=r=>i(r).expm1();function At(){let{data:r}=this,t=new p(this);for(let o of t)r[o]=Je(r[o]);return this}var bt=(r,t=0)=>i(r).fill(t);function Dt(r=0){let{data:t}=this,o=new p(this);for(let e of o)t[e]=r instanceof Function?r(e):r;return this}var{floor:Ve}=Math,Nt=r=>i(r).floor();function gt(){let{data:r}=this,t=new p(this);for(let o of t)r[o]=Ve(r[o]);return this}var xt=(r,t)=>{r.forEach(t)};function wt(r){let{data:t}=this,o=new p(this);for(let e of o)r.call(this,t[e],e,t)}var{fround:Ge}=Math,kt=r=>i(r).fround();function Lt(){let{data:r}=this,t=new p(this);for(let o of t)r[o]=Ge(r[o]);return this}var It=r=>i(r).gauss();function Tt(){let{shape:[r,t],data:o}=this,e=0,n,a,s,m,f;for(s=0;s<r;s+=1){if(t<=e)return this;for(m=s;o[m*t+e]===0;)if(m+=1,r===m&&(m=s,e+=1,t===e))return this;if(s!==m&&this.swap(s,m),a=o[s*t+e],a!==0)for(f=0;f<t;f+=1)o[s*t+f]/=a;for(m=0;m<r;m+=1)if(n=o[m*t+e],m!==s)for(f=0;f<t;f+=1)o[m*t+f]-=o[s*t+f]*n;e+=1}for(s=0;s<r;s+=1){for(a=0,m=0;m<t;m+=1)a===0&&(a=o[s*t+m]);if(a!==0)for(f=0;f<t;f+=1)o[s*t+f]/=a}return this}var Et=(r,...t)=>i(r).get(...t);function vt(...r){this.check(...r);let{data:t,shape:o}=this,{length:e}=o,n=0,a;for(a=0;a<e;a+=1)n*=o[a],n+=r[a];return t[n]}var L;try{L=G("nlapack")}catch{}function U(r,t,o,e,n,a){if(e.length!==t*o)throw new Error("lengths do not match");switch(r){case"float64":return L.dgetrf(t,o,e,n,a);case"float32":return L.sgetrf(t,o,e,n,a);default:throw new Error("wrong dtype")}}function Mt(r,t,o,e,n){if(o.length!==t*t)throw new Error("lengths do not match");switch(r){case"float64":return L.dgetri(t,o,e,n);case"float32":return L.sgetri(t,o,e,n);default:throw new Error("wrong dtype")}}function jt(r,t,o,e,n,a,s,m){if(e.length!==n*t||s.length!==m*o)throw new Error("lengths do not match");switch(r){case"float64":return L.dgesv(t,o,e,n,a,s,m);case"float32":return L.sgesv(t,o,e,n,a,s,m);default:throw new Error("wrong dtype")}}var qt=r=>i(r).inv();function _t(){this.square();let{shape:[r],dtype:t}=this;try{let{data:o}=this,e=new Int32Array(r);return U(t,r,r,o,r,e),Mt(t,r,o,r,e),this}catch{let e=E(r),n=O(this,e).gauss(),a=N(r,r),s=N(r,r),{data:m}=n,{data:f}=a,{data:u}=s,y=new p(n),[c,l]=y.coords;for(let d of y)l<r?f[c*r+l]=m[d]:u[c*r+(l-r)]=m[d],[c,l]=y.coords;if(!a.equals(e))throw new Error("matrix is not invertible");return s}}var{log:We}=Math,St=r=>i(r).log();function zt(){let{data:r}=this,t=new p(this);for(let o of t)r[o]=We(r[o]);return this}var{log10:Xe}=Math,Ot=r=>i(r).log10();function Ft(){let{data:r}=this,t=new p(this);for(let o of t)r[o]=Xe(r[o]);return this}var{log1p:Ye}=Math,Ut=r=>i(r).log1p();function $t(){let{data:r}=this,t=new p(this);for(let o of t)r[o]=Ye(r[o]);return this}var{log2:Ze}=Math,Ct=r=>i(r).log2();function Rt(){let{data:r}=this,t=new p(this);for(let o of t)r[o]=Ze(r[o]);return this}var Pt=r=>i(r).lu();function Bt(){let[r,t]=this.copy().lu_factor(),o=r.copy(),e=r.copy(),{data:n}=o,{data:a}=e,s=new p(r),[m,f]=s.coords;for(let u of s)f<m?a[u]=0:n[u]=m===f?1:0,[m,f]=s.coords;return[o,e,t]}var Ht=r=>i(r).lu_factor();function Jt(){let{data:r,shape:[t],dtype:o}=this,e=new Int32Array(t);try{U(o,t,t,r,t,e)}catch{let a,s,m,f,u,y,c;for(c=0;c<t;c+=1){for(f=c,a=Math.abs(r[c*t+c]),y=c+1;y<t;y+=1)s=Math.abs(r[y*t+c]),a<s&&(a=s,f=y);for(e[c]=f+1,f!==c&&this.swap(c,f),m=r[c*t+c],u=c+1;u<t;u+=1)r[u*t+c]/=m;for(u=c+1;u<t;u+=1){for(y=c+1;y<t-1;y+=2)r[u*t+y]-=r[u*t+c]*r[c*t+y],r[u*t+y+1]-=r[u*t+c]*r[c*t+y+1];y===t-1&&(r[u*t+y]-=r[u*t+c]*r[c*t+y])}}}return[this,e]}var Vt=(r,t)=>i(r).map(t);function Gt(r){let{data:t}=this,o=new p(this),e=r.bind(this),n=this.copy(),{data:a}=n;for(let s of o)a[s]=e(t[s],s,t);return n}var Wt=r=>i(r).max();function Xt(){let{data:r,length:t,strides:o,dtype:e}=this,n=Number.NEGATIVE_INFINITY;try{let a=o[o.length-1];n=r[Dr(e,t,r,a)]}catch{let s=new p(this);for(let m of s){let f=r[m];n<f&&(n=f)}}return n}var Yt=r=>i(r).mean();function Zt(){let{data:r,length:t}=this,o=new p(this),e=0;for(let n of o)e+=r[n];return e/t}var Kt=r=>i(r).min();function Qt(){let{data:r}=this,t=new p(this),o=Number.POSITIVE_INFINITY;for(let e of t){let n=r[e];o>n&&(o=n)}return o}var $=(r,t)=>new A(new Float64Array(r*t),{shape:[r,t]});var ro=(r,t)=>i(r).multiply(i(t));function to(r){let{shape:[t,o],data:e,dtype:n}=this.copy(),{shape:[a,s],data:m}=r.copy();if(o!==a)throw new Error("sizes do not match");let f=$(t,s),{data:u}=f;try{Nr(n,K,K,t,s,o,1,e,o,m,s,0,u,s)}catch{let c=new p(f),l,[d,M]=c.coords;for(let q of c){let _=0;for(l=0;l<o;l+=1)_+=e[d*o+l]*m[l*s+M];u[q]=_,[d,M]=c.coords}}return f}var{sqrt:Ke}=Math,oo=r=>i(r).norm();function eo(){let{data:r,length:t,strides:o,dtype:e}=this,n=0;try{let a=o[o.length-1];n=gr(e,t,r,a)}catch{n=Ke(this.dot(this))}return n}var ao=r=>i(r).normalize();function no(){return this.scale(1/this.norm())}var{pow:Qe}=Math,io=(r,t)=>i(r).pow(t);function so(r){let{data:t}=this,o=new p(this);for(let e of o)t[e]=Qe(t[e],r);return this}var mo=r=>i(r).prod();function fo(){let{data:r}=this,t=new p(this),o=1;for(let e of t)o*=r[e];return o}var po=(r,t)=>i(r).product(i(t));function uo(r){let{data:t}=this,{data:o}=r,e=new D(this,r);for(let[n,a]of e)t[n]*=o[a];return this}var co=(r,t)=>i(r).project(i(t));function yo(r){return r.scale(this.dot(r)/r.dot(r))}var lo=(r,t)=>i(r).push(t);function ho(r){if(this.shape.length!==1)throw new Error("push operation not permitted for multidimensional arrays");let{data:t,length:o}=this,e=o+1,n=new(g(this.dtype))(e);return n.set(t),n[o]=r,this.data=n,this.length=e,this.shape=[e],this}var Ao=(r,t=1e-6)=>i(r).rank(t);function bo(r=1e-6){let{data:t}=this.copy().gauss(),o=new p(this),e=0,[n,a]=o.coords;for(let s of o)e<=n&&a>=n&&Math.abs(t[s])>r&&(e+=1),[n,a]=o.coords;return e}var Do=r=>i(r).reciprocal();function No(){let{data:r}=this,t=new p(this);for(let o of t)r[o]=1/r[o];return this}var go=(r,t,o)=>i(r).reduce(t,o);function xo(r,t){let{data:o,length:e}=this;if(e===0&&typeof t>"u")throw new Error("Reduce of empty array with no initial value.");let n=new p(this),a=r.bind(this),s;typeof t>"u"?(s=o[0],n.next()):s=t;for(let m of n)s=a(s,o[m],m,o);return s}var wo=(r,...t)=>i(r).reshape(...t);function ko(...r){let{length:t}=this;if(r.reduce((o,e)=>o*e,1)!==t)throw new Error(`shape ${r} does not match length ${t}`);return this.shape=r,this.strides=I(r),this}var{round:ra}=Math,Lo=r=>i(r).round();function Io(){let{data:r}=this,t=new p(this);for(let o of t)r[o]=ra(r[o]);return this}var To=(r,t,o,e=1)=>i(r).row_add(t,o,e);function Eo(r,t,o=1){this.check(r,0),this.check(t,0);let[,e]=this.shape,{data:n}=this,a;for(a=0;a<e;a+=1)n[r*e+a]+=n[t*e+a]*o;return this}var vo=(r,t)=>i(r).scale(t);function Mo(r){let{data:t,length:o,strides:e,dtype:n}=this;try{let a=e[e.length-1];xr(n,o,r,t,a)}catch{let s=new p(this);for(let m of s)t[m]*=r}return this}var jo=(r,...t)=>{r.set(...t)};function qo(...r){let t=r.slice(0,-1),o=r[r.length-1];this.check(...t);let{shape:e}=this,n=0,a;for(a=0;a<t.length;a+=1)n*=e[a],n+=t[a];this.data[n]=o}var{sign:ta}=Math,_o=r=>i(r).sign();function So(){let{data:r}=this,t=new p(this);for(let o of t)r[o]=ta(r[o]);return this}var{sin:oa}=Math,zo=r=>i(r).sin();function Oo(){let{data:r}=this,t=new p(this);for(let o of t)r[o]=oa(r[o]);return this}var{sinh:ea}=Math,Fo=r=>i(r).sinh();function Uo(){let{data:r}=this,t=new p(this);for(let o of t)r[o]=ea(r[o]);return this}var $o=(r,t,o,e)=>i(r).slice(t,o,e);function Co(r=0,t=this.shape[0],o=1){let{data:e,shape:n}=this,a=n.length;if(r<0||t<0)return this.slice(r<0?n[n.length-1]+r:r,t<0?n[n.length-1]+t:t);if(r>t)return this.slice(t,r,o);if(o<=0)throw new Error("step argument has to be a positive integer");let s=[Math.ceil((t-r)/Math.abs(o)),...n.slice(1)],m=z(s),f=I(s),u=a>1?e.subarray(r*s[s.length-1],t*s[s.length-1]):e.subarray(r,t);return f[0]*=o,new A(u,{shape:s,length:m,strides:f})}var Ro=(r,t)=>i(r).solve(i(t));function Po(r){let{data:t,dtype:o}=this,{data:e,shape:[n,a]}=r;try{let s=new Int32Array(n);jt(o,n,a,t,n,s,e,a)}catch{let[m,f]=this.lu_factor(),{data:u}=m,{data:y}=r,c,l,d;for(c=0;c<f.length;c+=1)c!==f[c]-1&&r.swap(c,f[c]-1);for(d=0;d<a;d+=1){for(c=0;c<n;c+=1)for(l=0;l<c;l+=1)y[c*a+d]-=u[c*n+l]*y[l*a+d];for(c=n-1;c>=0;c-=1){for(l=c+1;l<n;l+=1)y[c*a+d]-=u[c*n+l]*y[l*a+d];y[c*a+d]/=u[c*n+c]}}}return r}var{sqrt:aa}=Math,Bo=r=>i(r).sqrt();function Ho(){let{data:r}=this,t=new p(this);for(let o of t)r[o]=aa(r[o]);return this}var Jo=r=>{i(r).square()};function Vo(){let{length:r}=this.shape,[t,o]=this.shape;if(r!==2||t!==o)throw new Error("matrix is not square")}var Go=(r,t)=>i(r).subtract(i(t));function Wo(r){return this.add(r,-1)}var Xo=r=>i(r).sum();function Yo(){let{data:r}=this,t=new p(this),o=0;for(let e of t)o+=r[e];return o}var Zo=(r,t,o)=>i(r).swap(t,o);function Ko(r,t){this.check(r,0),this.check(t,0);let{data:o}=this,[,e]=this.shape,n=o.slice(r*e,(r+1)*e);return o.copyWithin(r*e,t*e,(t+1)*e),o.set(n,t*e),this}var{tan:na}=Math,Qo=r=>i(r).tan();function re(){let{data:r}=this,t=new p(this);for(let o of t)r[o]=na(r[o]);return this}var{tanh:ia}=Math,te=r=>i(r).tanh();function oe(){let{data:r}=this,t=new p(this);for(let o of t)r[o]=ia(r[o]);return this}var ee=r=>i(r).toArray();function ae(r=0,t=0){let{data:o,shape:e,strides:n}=this,{length:a}=e;if(t>=a)return o[r];let s=e[t],m=n[t],f=[];for(let u=0;u<s;u++){let y=this.toArray(r,t+1);if(y===null)return null;f[u]=y,r+=m}return f}var ce=Me(ue());var ye=r=>i(r).toString();function mr(){return`array(${(0,ce.inspect)(this.toArray(),{depth:10,breakLength:40})}, dtype=${this.dtype})`}var le=r=>i(r).trace();function he(){let[r,t]=this.shape,{data:o}=this,e=Math.min(r,t),n=0,a;for(a=0;a<e;a+=1)n+=o[a*t+a];return n}var de=r=>i(r).transpose();function Ae(){if(this.shape.length<2)return this;let r=this.shape[0];return this.shape[0]=this.shape[1],this.shape[1]=r,r=this.strides[0],this.strides[0]=this.strides[1],this.strides[1]=r,this}var{trunc:Da}=Math,be=r=>i(r).trunc();function De(){let{data:r}=this,t=new p(this);for(let o of t)r[o]=Da(r[o]);return this}var Ne=r=>{if(r<0)throw new Error("invalid n");let t=new Float64Array(r*r),o=new A(t,{shape:[r,r]}),e=new p(o),[n,a]=e.coords;for(let s of e){let m=r-n-1,f=r-a-1;t[s]=(a+m*2+1)%r*r+(f+m*2+1)%r+1,[n,a]=e.coords}return o};var ge=(...r)=>new A(new Float64Array(r.reduce((t,o)=>t*o,1)),{shape:r}).fill(1);var xe=(...r)=>new A(new Float64Array(r.reduce((t,o)=>t*o,1)),{shape:r}).map(()=>Math.random());var we=(...r)=>{let t=Float64Array,o=!1,e,n,a;switch(r.length){case 2:a=r.pop(),n=1,e=r.pop();break;case 3:a=r.pop(),n=r.pop(),e=r.pop();break;default:throw new Error("invalid range")}if(a-e<0){let u=a;a=e,e=u,o=!0}if(n>a-e)throw new Error("invalid range");let s=new t(Math.ceil((a-e)/n)),m=e,f=0;if(o)for(;m<a;m+=n,f+=1)s[f]=a-m+e;else for(;m<a;m+=n,f+=1)s[f]=m;return new A(s)};var Na=Symbol.for("nodejs.util.inspect.custom"),A=class{data=new Float64Array(0);dtype="float64";length=0;shape=[0];strides=[0];[Na]=mr;abs=cr;acos=lr;acosh=dr;add=kr;angle=Ir;asin=Er;asinh=Mr;atan=qr;atanh=Sr;augment=zr;binOp=Fr;cbrt=$r;ceil=Rr;check=Br;combine=Jr;copy=Gr;cos=Xr;cosh=Zr;cross=Qr;det=tt;diagonal=et;dot=nt;eig=st;equals=ft;equidimensional=ut;equilateral=yt;exp=ht;expm1=At;fill=Dt;floor=gt;forEach=wt;fround=Lt;gauss=Tt;get=vt;inv=_t;log=zt;log10=Ft;log1p=$t;log2=Rt;lu=Bt;lu_factor=Jt;map=Gt;max=Xt;mean=Zt;min=Qt;multiply=to;norm=eo;normalize=no;pow=so;prod=fo;product=uo;project=yo;push=ho;rank=bo;reciprocal=No;reduce=xo;reshape=ko;round=Io;row_add=Eo;scale=Mo;set=qo;sign=So;sin=Oo;sinh=Uo;slice=Co;solve=Po;sqrt=Ho;square=Vo;subtract=Wo;sum=Yo;swap=Ko;tan=re;tanh=oe;toArray=ae;toString=mr;trace=he;transpose=Ae;trunc=De;constructor(t,o){if(!t)return;if(t instanceof A)return t;if(t instanceof p){if(!o||!o.dtype)throw new Error("dtype is missing");t.shape&&(o.shape=t.shape);let m=t.length;t=new(g(o.dtype))(m)}let{shape:e=Z(t),length:n=z(e),strides:a=I(e),dtype:s=pr(t)}=o||{};this.data=Y(t)?t:new(g(s))(X(t)),this.shape=e,this.length=n,this.dtype=s,this.strides=a}get x(){return this.get(0)}set x(t){this.set(0,t)}get y(){return this.get(1)}set y(t){this.set(1,t)}get z(){return this.get(2)}set z(t){this.set(2,t)}get w(){return this.get(3)}set w(t){this.set(3,t)}get T(){return this.copy().transpose()}};try{window.v=A}catch{}return je(ga);})();
//# sourceMappingURL=index.browser.js.map
