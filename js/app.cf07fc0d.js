(function(){"use strict";var e={206:function(e,t,o){o(4114),o(4603),o(7566),o(8721);var n=o(5130),r=o(6768);function s(e,t,o,n,s,i){const a=(0,r.g2)("router-view"),c=(0,r.g2)("main-layout");return(0,r.uX)(),(0,r.Wv)(c,null,{default:(0,r.k6)((()=>[(0,r.bF)(a)])),_:1})}function i(e,t,o,n,s,i){const a=(0,r.g2)("ABHeader"),c=(0,r.g2)("ABFooter");return(0,r.uX)(),(0,r.CE)(r.FK,null,[(0,r.bF)(a),(0,r.Lk)("main",null,[(0,r.RG)(e.$slots,"default")]),(0,r.bF)(c)],64)}var a=o(4232),c=o.p+"img/logo.7a3bac9d.svg";const l={class:"container"},u={class:"header__container"},p={key:1,class:"header__logo",src:c,width:"240px",alt:"Логотип"},d={class:"header__navigation",id:"top"},m={class:"header__navigation-list"};function g(e,t,o,s,i,g){const h=(0,r.g2)("router-link"),v=(0,r.g2)("ABBurgerButton");return(0,r.uX)(),(0,r.CE)("header",{class:(0,a.C4)(["header",{"header--opened":e.isMobileMenuShown}])},[(0,r.Lk)("div",l,[(0,r.Lk)("div",u,[e.isNotHomePage?((0,r.uX)(),(0,r.Wv)(h,{key:0,to:{name:"Home"},"aria-label":"На главную",onClick:t[0]||(t[0]=t=>e.toggleMenu(!1))},{default:(0,r.k6)((()=>t[3]||(t[3]=[(0,r.Lk)("img",{class:"header__logo",src:c,width:"240px",alt:"Логотип"},null,-1)]))),_:1})):((0,r.uX)(),(0,r.CE)("img",p)),(0,r.Lk)("nav",d,[e.isMobile?((0,r.uX)(),(0,r.Wv)(v,{key:0,class:"header__navigation-button",isMenuExpanded:e.isMobileMenuShown,text:e.isMobileMenuShown?"Скрыть меню":"Открыть меню",onClick:t[1]||(t[1]=t=>e.toggleMenu())},null,8,["isMenuExpanded","text"])):(0,r.Q3)("",!0),(0,r.bo)((0,r.Lk)("ul",m,[((0,r.uX)(!0),(0,r.CE)(r.FK,null,(0,r.pI)(e.linksList,(o=>((0,r.uX)(),(0,r.CE)("li",{class:"header__navigation-item",key:o.url},[((0,r.uX)(),(0,r.Wv)((0,r.$y)(o.isRouter?"router-link":"a"),{class:"header__navigation-link",to:o.isRouter?{name:o.url}:void 0,href:o.isRouter?void 0:o.url,onClick:t[2]||(t[2]=t=>e.toggleMenu(!1))},{default:(0,r.k6)((()=>[(0,r.eW)((0,a.v_)(o.name),1)])),_:2},1032,["to","href"]))])))),128))],512),[[n.aG,!e.isMobile||e.isMobileMenuShown]])])])])],2)}var h=o(1387);const v=["aria-label"];function f(e,t,o,n,s,i){return(0,r.uX)(),(0,r.CE)("button",{class:(0,a.C4)(["burger-button",{"burger-button--expanded":e.isMenuExpanded}]),type:"button","aria-label":e.text},t[0]||(t[0]=[(0,r.Lk)("div",{class:"burger-burger"},[(0,r.Lk)("div"),(0,r.Lk)("div"),(0,r.Lk)("div")],-1)]),10,v)}var b=(0,r.pM)({name:"ABBurgerButton",props:{isMenuExpanded:{type:Boolean,default:!1},text:{type:String,default:""}}}),k=o(1241);const _=(0,k.A)(b,[["render",f]]);var j=_,y=(0,r.pM)({name:"ABHeader",props:{},data(){return{isMobileMenuShown:!1,isMobile:!1,linksList:[{name:"Проекты",url:"Projects",isRouter:!0},{name:"Контакты",url:"#contacts",isRouter:!1}]}},setup(){const e=(0,h.lq)();return{route:e}},computed:{isNotHomePage(){return"/"!==this.route.path}},methods:{toggleMenu(e=void 0){this.isMobileMenuShown=!this.isMobileMenuShown,void 0!==e&&(this.isMobileMenuShown=e),this.isMobileMenuShown?this.blockBody():this.unblockBody()},blockBody(){document.body.classList.add("blocked-scroll")},unblockBody(){document.body.classList.remove("blocked-scroll")},checkIfMobile(){this.isMobile=window.innerWidth<=768},onWindowResize(){this.checkIfMobile(),this.toggleMenu(!1)}},mounted(){this.checkIfMobile(),window.addEventListener("resize",this.onWindowResize)},beforeUnmount(){window.removeEventListener("resize",this.onWindowResize)},components:{ABBurgerButton:j}});const w=(0,k.A)(y,[["render",g]]);var L=w;const M={class:"footer",id:"contacts"},x={class:"container"},A={class:"footer__container"},P={class:"footer__social-list"},C={class:"footer__social-item"},B={class:"footer__social-item"};function E(e,t,o,n,s,i){return(0,r.uX)(),(0,r.CE)("footer",M,[(0,r.Lk)("div",x,[(0,r.Lk)("div",A,[(0,r.Lk)("ul",P,[(0,r.Lk)("li",C,[(0,r.Lk)("a",{class:"footer__social-link",href:"https://www.instagram.com/alexbelostozky/",style:(0,a.Tr)(`mask-image: url(${s.instagramIcon})`),target:"_blank"},null,4)]),(0,r.Lk)("li",B,[(0,r.Lk)("a",{class:"footer__social-link",href:"https://www.behance.net/alexbelostozky",style:(0,a.Tr)(`mask-image: url(${s.behanceIcon})`),target:"_blank"},null,4)])]),t[0]||(t[0]=(0,r.Lk)("a",{class:"footer__tel-link",href:"tel:+79996269606"}," +7 705 804 59 82 ",-1))])])])}var I=o.p+"img/inst-icon.663a7253.svg",X=o.p+"img/behance-icon.396fa494.svg",F={name:"ABFooter",props:{},data(){return{instagramIcon:I,behanceIcon:X}}};const U=(0,k.A)(F,[["render",E]]);var S=U,W={name:"MainLayout",components:{ABHeader:L,ABFooter:S}};const z=(0,k.A)(W,[["render",i]]);var O=z,R={name:"App",components:{MainLayout:O}};const N=(0,k.A)(R,[["render",s]]);var $=N,H=o.p+"img/portrait-mobile.7433abb3.webp",T=o.p+"img/portrait-mobile.18790b04.jpg",K=o.p+"img/portrait.21863370.webp",V=o.p+"img/portrait.bb0002ba.jpg";const G=H,Q=T,q=K,J={class:"recent-section",id:"works"},D={class:"container"},Y={class:"recent-section__list"};function Z(e,t,o,n,s,i){const a=(0,r.g2)("ABProjectItem"),c=(0,r.g2)("router-link");return(0,r.uX)(),(0,r.CE)(r.FK,null,[t[1]||(t[1]=(0,r.Fv)('<section class="about-section"><div class="container" id="about"><div class="about-section__grid"><div class="about-section__portrait"><picture><source media="(max-width: 768px)" srcset="'+G+'" type="image/webp"><source media="(max-width: 768px)" srcset="'+Q+'" type="image/jpeg"><source srcset="'+q+'" type="image/webp"><img src="'+V+'" width="248" height="248" alt="Александр Белостоцкий"></picture></div><h1 class="about-section__story-heading">Искусство<br> во всём</h1><div class="about-section__story-text-wrapper"><p class="about-section__story-text"> Ну или почти во всём 😀 </p><p class="about-section__story-text"> Так уж сложилось, что подавляющая часть того, что мы видим каждый день, можем потрогать, используем в своей повседневной жизни создано людьми. Но с какого-то момента я начал воспринимать некоторые вещи как объекты искусства. И убеждён, что в любой вещи можно его найти. Ведь каждая вещь так или иначе характеризует мир, в котором мы живём, является срезом культуры того времени, когда она  была создана. И это отчасти является причиной основной тематики моих фотографий. </p><p class="about-section__story-text"> Автомобили, особенно которые <a href="https://www.instagram.com/explore/tags/такихуженеделают/" target="_blank">#ТакихУжеНеДелают</a>, являются результатом творчества огромного числа инженеров, дизайнеров и учёных. Именно поэтому я чувствую огромное желание запечатлеть эти образцы культуры и показать их вам. </p></div></div></div></section>',1)),(0,r.Lk)("section",J,[(0,r.Lk)("div",D,[(0,r.Lk)("ul",Y,[((0,r.uX)(!0),(0,r.CE)(r.FK,null,(0,r.pI)(e.recentProjects,(e=>((0,r.uX)(),(0,r.Wv)(a,{key:e.url,projectName:e.name,projectUrl:e.url,projectCoverUrl:e.coverUrl},null,8,["projectName","projectUrl","projectCoverUrl"])))),128))]),e.projects.length>6?((0,r.uX)(),(0,r.Wv)(c,{key:0,to:{name:"Projects"}},{default:(0,r.k6)((()=>t[0]||(t[0]=[(0,r.eW)("Все проекты")]))),_:1})):(0,r.Q3)("",!0)])])],64)}const ee={class:"recent-section__item"},te={class:"project-item__image-wrapper"},oe=["src","alt"],ne={class:"project-item__title"};function re(e,t,o,n,s,i){const c=(0,r.g2)("router-link");return(0,r.uX)(),(0,r.CE)("li",ee,[(0,r.bF)(c,{class:"project-item__link",to:o.projectUrl},{default:(0,r.k6)((()=>[(0,r.Lk)("div",te,[(0,r.Lk)("img",{class:"project-item__image",src:o.projectCoverUrl,width:"320",height:"320",alt:`Проект ${o.projectName}`},null,8,oe)]),(0,r.Lk)("span",ne,(0,a.v_)(o.projectName),1)])),_:1},8,["to"])])}var se={name:"ABProjectItem",props:{projectName:{type:String,default:"Проект без названия 🤔"},projectUrl:{type:String,default:"/404"},projectCoverUrl:{type:String,default:"@images/blank-cover.jpg"}}};const ie=(0,k.A)(se,[["render",re]]);var ae=ie,ce=(0,r.pM)({name:"HomePage",props:{},components:{ABProjectItem:ae},data:()=>({projects:[{name:"Celsior",coverUrl:o(7589),url:"/celsior"},{name:"Laurel",coverUrl:o(8117),url:"/laurel"},{name:"Mark II",coverUrl:o(8021),url:"/mark"},{name:"Museum",coverUrl:o(235),url:"/museum"},{name:"2104",coverUrl:o(8853),url:"/2104"},{name:"Cresta",coverUrl:o(6207),url:"/cresta"}]}),methods:{async getProjects(e,t){const o=await fetch(`https://api.com/projects?page=${e}&limit=${t}`),n=await o.json();this.projects.push(n)}},computed:{recentProjects(){return this.projects.slice(0,6)}}});const le=(0,k.A)(ce,[["render",Z]]);var ue=le;const pe={class:"not-found"},de={class:"container"},me={class:"not-found__grid"},ge={class:"not-found__content"};function he(e,t,o,n,s,i){const a=(0,r.g2)("router-link");return(0,r.uX)(),(0,r.CE)("div",pe,[(0,r.Lk)("div",de,[(0,r.Lk)("div",me,[(0,r.Lk)("div",ge,[t[1]||(t[1]=(0,r.Lk)("h1",null,"404 – Страница не найдена",-1)),(0,r.bF)(a,{class:"not-found__link",to:{name:"Home"}},{default:(0,r.k6)((()=>t[0]||(t[0]=[(0,r.eW)("Вернуться на главную")]))),_:1})])])])])}var ve=(0,r.pM)({name:"NotFound"});const fe=(0,k.A)(ve,[["render",he]]);var be=fe;const ke={class:"projects-section"},_e={key:0},je={class:"projects-section__results"},ye={class:"container"},we={class:"projects-section__results-grid"},Le={class:"recent-section__list"},Me={key:1,class:"projects-section__empty-list"};function xe(e,t,n,s,i,a){const c=(0,r.g2)("ABProjectItem"),l=(0,r.g2)("ABProjectItemLoader"),u=(0,r.g2)("v-pagination"),p=(0,r.g2)("v-empty-state");return(0,r.uX)(),(0,r.CE)("div",ke,[t[2]||(t[2]=(0,r.Lk)("h1",{class:"visually-hidden"},"Проекты",-1)),e.showingProjects.length?((0,r.uX)(),(0,r.CE)("div",_e,[t[1]||(t[1]=(0,r.Lk)("div",{class:"projects-section__filter-wrapper"},[(0,r.Lk)("div",{class:"container"},[(0,r.Lk)("h2",null,"Фильтры")])],-1)),(0,r.Lk)("div",je,[(0,r.Lk)("div",ye,[(0,r.Lk)("div",we,[(0,r.Lk)("ul",Le,[e.isLoading?((0,r.uX)(!0),(0,r.CE)(r.FK,{key:0},(0,r.pI)(e.limit,(t=>((0,r.uX)(),(0,r.Wv)(l,{key:t,loading:e.isLoading},{default:(0,r.k6)((()=>[(0,r.bF)(c)])),_:2},1032,["loading"])))),128)):((0,r.uX)(!0),(0,r.CE)(r.FK,{key:1},(0,r.pI)(e.showingProjects,(e=>((0,r.uX)(),(0,r.Wv)(c,{key:e.url,projectName:e.name,projectUrl:e.url,projectCoverUrl:e.coverUrl},null,8,["projectName","projectUrl","projectCoverUrl"])))),128))]),e.pagesAmount>1?((0,r.uX)(),(0,r.Wv)(u,{key:0,modelValue:e.page,"onUpdate:modelValue":t[0]||(t[0]=t=>e.page=t),length:e.pagesAmount},null,8,["modelValue","length"])):(0,r.Q3)("",!0)])])])])):((0,r.uX)(),(0,r.CE)("div",Me,[(0,r.bF)(p,{title:"Проекты не найдены...",text:"Давайте вместе создадим нечто прекрасное!",image:o(3233)},null,8,["image"])]))])}const Ae={class:"recent-section__item"},Pe={class:"project-item__link"};function Ce(e,t,o,n,s,i){const a=(0,r.g2)("v-skeleton-loader");return(0,r.uX)(),(0,r.CE)("li",Ae,[(0,r.Lk)("div",Pe,[(0,r.bF)(a,{type:"image, list-item",loading:e.loading},{default:(0,r.k6)((()=>[(0,r.RG)(e.$slots,"default")])),_:3},8,["loading"])])])}var Be=(0,r.pM)({name:"ABProjectItemLoader",props:{loading:{type:Boolean,default:!0}}});const Ee=(0,k.A)(Be,[["render",Ce]]);var Ie=Ee,Xe=(0,r.pM)({name:"ProjectsPage",components:{ABProjectItem:ae,ABProjectItemLoader:Ie},data(){return{page:1,limit:6,isLoading:!0,cachedProjects:{},showingProjects:[],totalProjects:0}},methods:{async getProjects(e,t){if(this.cachedProjects[e])return this.showingProjects=this.cachedProjects[e],void(this.isLoading=!1);try{this.isLoading=!0;const o=await fetch(`https://api.com/projects?page=${e}&limit=${t}`),n=await o.json();this.showingProjects=Array.isArray(n.projects)?n.projects:[],this.totalProjects=n.total||0}catch(o){console.warn("Failed to get projects: ",o)}finally{this.isLoading=!1}}},mounted(){this.showingProjects.length||this.getProjects(this.page,this.limit)},computed:{pagesAmount(){return Math.ceil(this.totalProjects/this.limit)}},watch:{page(e){this.getProjects(e,this.limit)}}});const Fe=(0,k.A)(Xe,[["render",xe]]);var Ue=Fe;const Se=[{path:"/",name:"Home",component:ue},{path:"/projects",name:"Projects",component:Ue},{path:"/:pathMatch(.*)*",name:"NotFound",component:be}],We=(0,h.aE)({history:(0,h.LA)("/AlexBelostozky-photo/"),routes:Se});var ze=We,Oe=(o(5524),o(7768)),Re=o(1920),Ne=o(5741),$e=(0,Oe.$N)({components:Re,directives:Ne,icons:{defaultSet:"mdi"},defaults:{global:{ripple:!1}}}),He=o(6400),Te=o(5942),Ke=o(7617);const Ve={apiKey:"AIzaSyCn8JdFAT7Oh2VkpFfj3RJZEVzchbqVWMo",authDomain:"alexbelostozky-photo.firebaseapp.com",projectId:"alexbelostozky-photo",storageBucket:"alexbelostozky-photo.firebasestorage.app",messagingSenderId:"571708317175",appId:"1:571708317175:web:8e493db09b33fab62c22f2",measurementId:"G-5F7RCQY9ET"},Ge=(0,He.Wp)(Ve),Qe=(0,Te.P5)(Ge),qe=(0,Ke.aU)(Ge),Je=(0,n.Ef)($);Je.use(ze),Je.use($e),Je.provide("firebaseApp",Ge),Je.provide("firebaseAnalytics",Qe),Je.provide("db",qe);const De=new URLSearchParams(window.location.search),Ye=De.get("redirect");Ye&&(history.replaceState(null,"",window.location.pathname),ze.push(Ye)),Je.mount("#app")},3233:function(e,t,o){e.exports=o.p+"img/no-projects.09300997.svg"},8853:function(e,t,o){e.exports=o.p+"img/2104-cover.fa9ebc26.jpg"},7589:function(e,t,o){e.exports=o.p+"img/celsior-cover.fe093344.jpg"},6207:function(e,t,o){e.exports=o.p+"img/cresta-cover.5beb5c31.jpg"},8117:function(e,t,o){e.exports=o.p+"img/laurel-cover.fdb69e5d.jpg"},8021:function(e,t,o){e.exports=o.p+"img/mark-cover.de38659d.jpg"},235:function(e,t,o){e.exports=o.p+"img/museum-cover.34bad518.jpg"}},t={};function o(n){var r=t[n];if(void 0!==r)return r.exports;var s=t[n]={exports:{}};return e[n].call(s.exports,s,s.exports,o),s.exports}o.m=e,function(){var e=[];o.O=function(t,n,r,s){if(!n){var i=1/0;for(u=0;u<e.length;u++){n=e[u][0],r=e[u][1],s=e[u][2];for(var a=!0,c=0;c<n.length;c++)(!1&s||i>=s)&&Object.keys(o.O).every((function(e){return o.O[e](n[c])}))?n.splice(c--,1):(a=!1,s<i&&(i=s));if(a){e.splice(u--,1);var l=r();void 0!==l&&(t=l)}}return t}s=s||0;for(var u=e.length;u>0&&e[u-1][2]>s;u--)e[u]=e[u-1];e[u]=[n,r,s]}}(),function(){o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,{a:t}),t}}(),function(){o.d=function(e,t){for(var n in t)o.o(t,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){o.p="/AlexBelostozky-photo/"}(),function(){var e={524:0};o.O.j=function(t){return 0===e[t]};var t=function(t,n){var r,s,i=n[0],a=n[1],c=n[2],l=0;if(i.some((function(t){return 0!==e[t]}))){for(r in a)o.o(a,r)&&(o.m[r]=a[r]);if(c)var u=c(o)}for(t&&t(n);l<i.length;l++)s=i[l],o.o(e,s)&&e[s]&&e[s][0](),e[s]=0;return o.O(u)},n=self["webpackChunkalexbelostozky_photo"]=self["webpackChunkalexbelostozky_photo"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var n=o.O(void 0,[504],(function(){return o(206)}));n=o.O(n)})();
//# sourceMappingURL=app.cf07fc0d.js.map