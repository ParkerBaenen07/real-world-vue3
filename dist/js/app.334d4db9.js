(function(){"use strict";var e={6798:function(e,t,n){var r=n(9242),o=n(3396);const a={id:"app"},i={id:"nav"};function u(e,t){const n=(0,o.up)("router-link"),r=(0,o.up)("router-view");return(0,o.wg)(),(0,o.iD)("div",a,[(0,o._)("div",i,[(0,o.Wm)(n,{to:{name:"EventList"}},{default:(0,o.w5)((()=>[(0,o.Uk)("Events")])),_:1}),(0,o.Uk)(" | "),(0,o.Wm)(n,{to:{name:"About"}},{default:(0,o.w5)((()=>[(0,o.Uk)("About")])),_:1})]),(0,o.Wm)(r)])}var s=n(89);const c={},v=(0,s.Z)(c,[["render",u]]);var l=v,d=n(2483);const p={class:"events"};function f(e,t,n,r,a,i){const u=(0,o.up)("EventCard");return(0,o.wg)(),(0,o.iD)("div",p,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(a.events,(e=>((0,o.wg)(),(0,o.j4)(u,{key:e.id,event:e},null,8,["event"])))),128))])}var h=n(7139);const w={class:"event-card"};function m(e,t,n,r,a,i){const u=(0,o.up)("router-link");return(0,o.wg)(),(0,o.j4)(u,{class:"event-link",to:{name:"EventDetails",params:{id:n.event.id}}},{default:(0,o.w5)((()=>[(0,o._)("div",w,[(0,o._)("span",null,"@"+(0,h.zw)(n.event.time)+" on "+(0,h.zw)(n.event.date),1),(0,o._)("h4",null,(0,h.zw)(n.event.title),1)])])),_:1},8,["to"])}var g={props:{event:{type:Object,required:!0}}};const b=(0,s.Z)(g,[["render",m],["__scopeId","data-v-7d01234c"]]);var _=b,k=n(70);const y=k.ZP.create({baseURL:"https://my-json-server.typicode.com/parkerbaenen07/real-world-vue3",withCredentials:!1,headers:{Accept:"application/json","Content-Type":"application/json"}});var E={getEvents(){return y.get("/events")},getEvent(e){return y.get("/events/"+e)}},O={name:"EventList",components:{EventCard:_},data(){return{events:null}},created(){E.getEvents().then((e=>{this.events=e.data})).catch((e=>{console.log(e)}))}};const j=(0,s.Z)(O,[["render",f],["__scopeId","data-v-09e81f05"]]);var z=j;const D={key:0};function C(e,t,n,r,a,i){return a.event?((0,o.wg)(),(0,o.iD)("div",D,[(0,o._)("h1",null,(0,h.zw)(a.event.title),1),(0,o._)("p",null,(0,h.zw)(a.event.time)+" on "+(0,h.zw)(a.event.date)+" @ "+(0,h.zw)(a.event.location),1),(0,o._)("p",null,(0,h.zw)(a.event.description),1)])):(0,o.kq)("",!0)}var Z={props:["id"],data(){return{event:null}},created(){E.getEvent(this.id).then((e=>{this.event=e.data})).catch((e=>{console.log(e)}))}};const A=(0,s.Z)(Z,[["render",C]]);var x=A;const L={class:"about"},P=(0,o._)("h1",null,"A site for event to better the world.",-1),T=[P];function U(e,t){return(0,o.wg)(),(0,o.iD)("div",L,T)}const W={},q=(0,s.Z)(W,[["render",U]]);var I=q;const M=[{path:"/",name:"EventList",component:z},{path:"/event/:id",name:"EventDetails",props:!0,component:x},{path:"/about",name:"About",component:I}],F=(0,d.p7)({history:(0,d.PO)("/"),routes:M});var H=F,K=n(65),R=(0,K.MT)({state:{},getters:{},mutations:{},actions:{},modules:{}});(0,r.ri)(l).use(R).use(H).mount("#app")}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var a=t[r]={exports:{}};return e[r](a,a.exports,n),a.exports}n.m=e,function(){var e=[];n.O=function(t,r,o,a){if(!r){var i=1/0;for(v=0;v<e.length;v++){r=e[v][0],o=e[v][1],a=e[v][2];for(var u=!0,s=0;s<r.length;s++)(!1&a||i>=a)&&Object.keys(n.O).every((function(e){return n.O[e](r[s])}))?r.splice(s--,1):(u=!1,a<i&&(i=a));if(u){e.splice(v--,1);var c=o();void 0!==c&&(t=c)}}return t}a=a||0;for(var v=e.length;v>0&&e[v-1][2]>a;v--)e[v]=e[v-1];e[v]=[r,o,a]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={143:0};n.O.j=function(t){return 0===e[t]};var t=function(t,r){var o,a,i=r[0],u=r[1],s=r[2],c=0;if(i.some((function(t){return 0!==e[t]}))){for(o in u)n.o(u,o)&&(n.m[o]=u[o]);if(s)var v=s(n)}for(t&&t(r);c<i.length;c++)a=i[c],n.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return n.O(v)},r=self["webpackChunkreal_world_vue3"]=self["webpackChunkreal_world_vue3"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=n.O(void 0,[998],(function(){return n(6798)}));r=n.O(r)})();
//# sourceMappingURL=app.334d4db9.js.map