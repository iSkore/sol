(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-c47a927e"],{"4ec9":function(e,t,n){"use strict";var r=n("6d61"),a=n("6566");e.exports=r("Map",(function(e){return function(){return e(this,arguments.length?arguments[0]:void 0)}}),a)},"615b":function(e,t,n){},6566:function(e,t,n){"use strict";var r=n("9bf2").f,a=n("7c73"),i=n("e2cc"),s=n("0366"),o=n("19aa"),c=n("2266"),l=n("7dd0"),u=n("2626"),d=n("83ab"),f=n("f183").fastKey,h=n("69f3"),v=h.set,g=h.getterFor;e.exports={getConstructor:function(e,t,n,l){var u=e((function(e,r){o(e,u,t),v(e,{type:t,index:a(null),first:void 0,last:void 0,size:0}),d||(e.size=0),void 0!=r&&c(r,e[l],e,n)})),h=g(t),p=function(e,t,n){var r,a,i=h(e),s=b(e,t);return s?s.value=n:(i.last=s={index:a=f(t,!0),key:t,value:n,previous:r=i.last,next:void 0,removed:!1},i.first||(i.first=s),r&&(r.next=s),d?i.size++:e.size++,"F"!==a&&(i.index[a]=s)),e},b=function(e,t){var n,r=h(e),a=f(t);if("F"!==a)return r.index[a];for(n=r.first;n;n=n.next)if(n.key==t)return n};return i(u.prototype,{clear:function(){var e=this,t=h(e),n=t.index,r=t.first;while(r)r.removed=!0,r.previous&&(r.previous=r.previous.next=void 0),delete n[r.index],r=r.next;t.first=t.last=void 0,d?t.size=0:e.size=0},delete:function(e){var t=this,n=h(t),r=b(t,e);if(r){var a=r.next,i=r.previous;delete n.index[r.index],r.removed=!0,i&&(i.next=a),a&&(a.previous=i),n.first==r&&(n.first=a),n.last==r&&(n.last=i),d?n.size--:t.size--}return!!r},forEach:function(e){var t,n=h(this),r=s(e,arguments.length>1?arguments[1]:void 0,3);while(t=t?t.next:n.first){r(t.value,t.key,this);while(t&&t.removed)t=t.previous}},has:function(e){return!!b(this,e)}}),i(u.prototype,n?{get:function(e){var t=b(this,e);return t&&t.value},set:function(e,t){return p(this,0===e?0:e,t)}}:{add:function(e){return p(this,e=0===e?0:e,e)}}),d&&r(u.prototype,"size",{get:function(){return h(this).size}}),u},setStrong:function(e,t,n){var r=t+" Iterator",a=g(t),i=g(r);l(e,t,(function(e,t){v(this,{type:r,target:e,state:a(e),kind:t,last:void 0})}),(function(){var e=i(this),t=e.kind,n=e.last;while(n&&n.removed)n=n.previous;return e.target&&(e.last=n=n?n.next:e.state.first)?"keys"==t?{value:n.key,done:!1}:"values"==t?{value:n.value,done:!1}:{value:[n.key,n.value],done:!1}:(e.target=void 0,{value:void 0,done:!0})}),n?"entries":"values",!n,!0),u(t)}}},"6d61":function(e,t,n){"use strict";var r=n("23e7"),a=n("da84"),i=n("94ca"),s=n("6eeb"),o=n("f183"),c=n("2266"),l=n("19aa"),u=n("861d"),d=n("d039"),f=n("1c7e"),h=n("d44e"),v=n("7156");e.exports=function(e,t,n){var g=-1!==e.indexOf("Map"),p=-1!==e.indexOf("Weak"),b=g?"set":"add",m=a[e],y=m&&m.prototype,_=m,j={},O=function(e){var t=y[e];s(y,e,"add"==e?function(e){return t.call(this,0===e?0:e),this}:"delete"==e?function(e){return!(p&&!u(e))&&t.call(this,0===e?0:e)}:"get"==e?function(e){return p&&!u(e)?void 0:t.call(this,0===e?0:e)}:"has"==e?function(e){return!(p&&!u(e))&&t.call(this,0===e?0:e)}:function(e,n){return t.call(this,0===e?0:e,n),this})};if(i(e,"function"!=typeof m||!(p||y.forEach&&!d((function(){(new m).entries().next()})))))_=n.getConstructor(t,e,g,b),o.REQUIRED=!0;else if(i(e,!0)){var k=new _,x=k[b](p?{}:-0,1)!=k,C=d((function(){k.has(1)})),B=f((function(e){new m(e)})),S=!p&&d((function(){var e=new m,t=5;while(t--)e[b](t,t);return!e.has(-0)}));B||(_=t((function(t,n){l(t,_,e);var r=v(new m,t,_);return void 0!=n&&c(n,r[b],r,g),r})),_.prototype=y,y.constructor=_),(C||S)&&(O("delete"),O("has"),g&&O("get")),(S||x)&&O(b),p&&y.clear&&delete y.clear}return j[e]=_,r({global:!0,forced:_!=m},j),h(_,e),p||n.setStrong(_,e,g),_}},"6ece":function(e,t,n){},"99d9":function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n("b0af"),a=n("80d2"),i=Object(a["g"])("v-card__actions"),s=Object(a["g"])("v-card__subtitle"),o=Object(a["g"])("v-card__text"),c=Object(a["g"])("v-card__title");r["a"]},b0af:function(e,t,n){"use strict";n("0481"),n("4069"),n("a9e3");var r=n("5530"),a=(n("615b"),n("10d2")),i=n("2b0e"),s=(n("c7cd"),n("ade3")),o=(n("6ece"),n("0789")),c=n("a9ad"),l=n("fe6c"),u=n("a452"),d=n("7560"),f=n("80d2"),h=n("58df"),v=Object(h["a"])(c["a"],Object(l["b"])(["absolute","fixed","top","bottom"]),u["a"],d["a"]),g=v.extend({name:"v-progress-linear",props:{active:{type:Boolean,default:!0},backgroundColor:{type:String,default:null},backgroundOpacity:{type:[Number,String],default:null},bufferValue:{type:[Number,String],default:100},color:{type:String,default:"primary"},height:{type:[Number,String],default:4},indeterminate:Boolean,query:Boolean,rounded:Boolean,stream:Boolean,striped:Boolean,value:{type:[Number,String],default:0}},data:function(){return{internalLazyValue:this.value||0}},computed:{__cachedBackground:function(){return this.$createElement("div",this.setBackgroundColor(this.backgroundColor||this.color,{staticClass:"v-progress-linear__background",style:this.backgroundStyle}))},__cachedBar:function(){return this.$createElement(this.computedTransition,[this.__cachedBarType])},__cachedBarType:function(){return this.indeterminate?this.__cachedIndeterminate:this.__cachedDeterminate},__cachedBuffer:function(){return this.$createElement("div",{staticClass:"v-progress-linear__buffer",style:this.styles})},__cachedDeterminate:function(){return this.$createElement("div",this.setBackgroundColor(this.color,{staticClass:"v-progress-linear__determinate",style:{width:Object(f["f"])(this.normalizedValue,"%")}}))},__cachedIndeterminate:function(){return this.$createElement("div",{staticClass:"v-progress-linear__indeterminate",class:{"v-progress-linear__indeterminate--active":this.active}},[this.genProgressBar("long"),this.genProgressBar("short")])},__cachedStream:function(){return this.stream?this.$createElement("div",this.setTextColor(this.color,{staticClass:"v-progress-linear__stream",style:{width:Object(f["f"])(100-this.normalizedBuffer,"%")}})):null},backgroundStyle:function(){var e,t=null==this.backgroundOpacity?this.backgroundColor?1:.3:parseFloat(this.backgroundOpacity);return e={opacity:t},Object(s["a"])(e,this.$vuetify.rtl?"right":"left",Object(f["f"])(this.normalizedValue,"%")),Object(s["a"])(e,"width",Object(f["f"])(this.normalizedBuffer-this.normalizedValue,"%")),e},classes:function(){return Object(r["a"])({"v-progress-linear--absolute":this.absolute,"v-progress-linear--fixed":this.fixed,"v-progress-linear--query":this.query,"v-progress-linear--reactive":this.reactive,"v-progress-linear--rounded":this.rounded,"v-progress-linear--striped":this.striped},this.themeClasses)},computedTransition:function(){return this.indeterminate?o["b"]:o["c"]},normalizedBuffer:function(){return this.normalize(this.bufferValue)},normalizedValue:function(){return this.normalize(this.internalLazyValue)},reactive:function(){return Boolean(this.$listeners.change)},styles:function(){var e={};return this.active||(e.height=0),this.indeterminate||100===parseFloat(this.normalizedBuffer)||(e.width=Object(f["f"])(this.normalizedBuffer,"%")),e}},methods:{genContent:function(){var e=Object(f["j"])(this,"default",{value:this.internalLazyValue});return e?this.$createElement("div",{staticClass:"v-progress-linear__content"},e):null},genListeners:function(){var e=this.$listeners;return this.reactive&&(e.click=this.onClick),e},genProgressBar:function(e){return this.$createElement("div",this.setBackgroundColor(this.color,{staticClass:"v-progress-linear__indeterminate",class:Object(s["a"])({},e,!0)}))},onClick:function(e){if(this.reactive){var t=this.$el.getBoundingClientRect(),n=t.width;this.internalValue=e.offsetX/n*100}},normalize:function(e){return e<0?0:e>100?100:parseFloat(e)}},render:function(e){var t={staticClass:"v-progress-linear",attrs:{role:"progressbar","aria-valuemin":0,"aria-valuemax":this.normalizedBuffer,"aria-valuenow":this.indeterminate?void 0:this.normalizedValue},class:this.classes,style:{bottom:this.bottom?0:void 0,height:this.active?Object(f["f"])(this.height):0,top:this.top?0:void 0},on:this.genListeners()};return e("div",t,[this.__cachedStream,this.__cachedBackground,this.__cachedBuffer,this.__cachedBar,this.genContent()])}}),p=g,b=i["a"].extend().extend({name:"loadable",props:{loading:{type:[Boolean,String],default:!1},loaderHeight:{type:[Number,String],default:2}},methods:{genProgress:function(){return!1===this.loading?null:this.$slots.progress||this.$createElement(p,{props:{absolute:!0,color:!0===this.loading||""===this.loading?this.color||"primary":this.loading,height:this.loaderHeight,indeterminate:!0}})}}}),m=n("1c87");t["a"]=Object(h["a"])(b,m["a"],a["a"]).extend({name:"v-card",props:{flat:Boolean,hover:Boolean,img:String,link:Boolean,loaderHeight:{type:[Number,String],default:4},outlined:Boolean,raised:Boolean,shaped:Boolean},computed:{classes:function(){return Object(r["a"])({"v-card":!0},m["a"].options.computed.classes.call(this),{"v-card--flat":this.flat,"v-card--hover":this.hover,"v-card--link":this.isClickable,"v-card--loading":this.loading,"v-card--disabled":this.disabled,"v-card--outlined":this.outlined,"v-card--raised":this.raised,"v-card--shaped":this.shaped},a["a"].options.computed.classes.call(this))},styles:function(){var e=Object(r["a"])({},a["a"].options.computed.styles.call(this));return this.img&&(e.background='url("'.concat(this.img,'") center center / cover no-repeat')),e}},methods:{genProgress:function(){var e=b.options.methods.genProgress.call(this);return e?this.$createElement("div",{staticClass:"v-card__progress",key:"progress"},[e]):null}},render:function(e){var t=this.generateRouteLink(),n=t.tag,r=t.data;return r.style=this.styles,this.isClickable&&(r.attrs=r.attrs||{},r.attrs.tabindex=0),e(n,this.setBackgroundColor(this.color,r),[this.genProgress(),this.$slots.default])}})},bb51:function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-container",{attrs:{fluid:""}},[r("v-card",[r("v-card-title",[e._v("Solar and Heliospheric observatory")]),r("v-row",{attrs:{dense:""}},e._l(e.sources.soho,(function(t,a){return r("v-col",{key:a,attrs:{cols:"4"}},[r("v-card",{attrs:{flat:""}},[r("v-card-title",[e._v(e._s(t.name)+":")]),r("v-img",{ref:"img",refInFor:!0,attrs:{"lazy-src":n("5d69"),src:t.src,"aspect-ratio":"1",height:"300px",width:"300px"}})],1)],1)})),1)],1)],1)},a=[],i=n("5530"),s=n("2f62"),o={name:"Home",data:function(){return{src:""}},computed:Object(i["a"])({},Object(s["d"])(["sources"]))},c=o,l=n("2877"),u=n("6544"),d=n.n(u),f=n("b0af"),h=n("99d9"),v=(n("4160"),n("caad"),n("13d5"),n("45fc"),n("4ec9"),n("a9e3"),n("b64b"),n("d3b7"),n("ac1f"),n("3ca3"),n("5319"),n("2ca0"),n("159b"),n("ddb0"),n("ade3")),g=(n("4b85"),n("2b0e")),p=n("d9f7"),b=n("80d2"),m=["sm","md","lg","xl"],y=function(){return m.reduce((function(e,t){return e[t]={type:[Boolean,String,Number],default:!1},e}),{})}(),_=function(){return m.reduce((function(e,t){return e["offset"+Object(b["q"])(t)]={type:[String,Number],default:null},e}),{})}(),j=function(){return m.reduce((function(e,t){return e["order"+Object(b["q"])(t)]={type:[String,Number],default:null},e}),{})}(),O={col:Object.keys(y),offset:Object.keys(_),order:Object.keys(j)};function k(e,t,n){var r=e;if(null!=n&&!1!==n){if(t){var a=t.replace(e,"");r+="-".concat(a)}return"col"!==e||""!==n&&!0!==n?(r+="-".concat(n),r.toLowerCase()):r.toLowerCase()}}var x=new Map,C=g["a"].extend({name:"v-col",functional:!0,props:Object(i["a"])({cols:{type:[Boolean,String,Number],default:!1}},y,{offset:{type:[String,Number],default:null}},_,{order:{type:[String,Number],default:null}},j,{alignSelf:{type:String,default:null,validator:function(e){return["auto","start","end","center","baseline","stretch"].includes(e)}},tag:{type:String,default:"div"}}),render:function(e,t){var n=t.props,r=t.data,a=t.children,i=(t.parent,"");for(var s in n)i+=String(n[s]);var o=x.get(i);return o||function(){var e,t;for(t in o=[],O)O[t].forEach((function(e){var r=n[e],a=k(t,e,r);a&&o.push(a)}));var r=o.some((function(e){return e.startsWith("col-")}));o.push((e={col:!r||!n.cols},Object(v["a"])(e,"col-".concat(n.cols),n.cols),Object(v["a"])(e,"offset-".concat(n.offset),n.offset),Object(v["a"])(e,"order-".concat(n.order),n.order),Object(v["a"])(e,"align-self-".concat(n.alignSelf),n.alignSelf),e)),x.set(i,o)}(),e(n.tag,Object(p["a"])(r,{class:o}),a)}}),B=n("a523"),S=n("adda"),w=(n("99af"),n("2532"),["sm","md","lg","xl"]),z=["start","end","center"];function E(e,t){return w.reduce((function(n,r){return n[e+Object(b["q"])(r)]=t(),n}),{})}var V=function(e){return[].concat(z,["baseline","stretch"]).includes(e)},$=E("align",(function(){return{type:String,default:null,validator:V}})),N=function(e){return[].concat(z,["space-between","space-around"]).includes(e)},L=E("justify",(function(){return{type:String,default:null,validator:N}})),F=function(e){return[].concat(z,["space-between","space-around","stretch"]).includes(e)},P=E("alignContent",(function(){return{type:String,default:null,validator:F}})),q={align:Object.keys($),justify:Object.keys(L),alignContent:Object.keys(P)},I={align:"align",justify:"justify",alignContent:"align-content"};function T(e,t,n){var r=I[e];if(null!=n){if(t){var a=t.replace(e,"");r+="-".concat(a)}return r+="-".concat(n),r.toLowerCase()}}var H=new Map,R=g["a"].extend({name:"v-row",functional:!0,props:Object(i["a"])({tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:V}},$,{justify:{type:String,default:null,validator:N}},L,{alignContent:{type:String,default:null,validator:F}},P),render:function(e,t){var n=t.props,r=t.data,a=t.children,i="";for(var s in n)i+=String(n[s]);var o=H.get(i);return o||function(){var e,t;for(t in o=[],q)q[t].forEach((function(e){var r=n[e],a=T(t,e,r);a&&o.push(a)}));o.push((e={"no-gutters":n.noGutters,"row--dense":n.dense},Object(v["a"])(e,"align-".concat(n.align),n.align),Object(v["a"])(e,"justify-".concat(n.justify),n.justify),Object(v["a"])(e,"align-content-".concat(n.alignContent),n.alignContent),e)),H.set(i,o)}(),e(n.tag,Object(p["a"])(r,{staticClass:"row",class:o}),a)}}),M=Object(l["a"])(c,r,a,!1,null,null,null);t["default"]=M.exports;d()(M,{VCard:f["a"],VCardTitle:h["a"],VCol:C,VContainer:B["a"],VImg:S["a"],VRow:R})}}]);