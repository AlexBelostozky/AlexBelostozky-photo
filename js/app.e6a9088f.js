(function(){"use strict";var e={8276:function(e,t,o){var n=o(5130),r=o(6768);function a(e,t,o,n,a,i){const s=(0,r.g2)("router-view"),c=(0,r.g2)("main-layout");return(0,r.uX)(),(0,r.Wv)(c,null,{default:(0,r.k6)((()=>[(0,r.bF)(s)])),_:1})}function i(e,t,o,n,a,i){const s=(0,r.g2)("ABHeader"),c=(0,r.g2)("ABFooter");return(0,r.uX)(),(0,r.CE)(r.FK,null,[(0,r.bF)(s),(0,r.Lk)("main",null,[(0,r.RG)(e.$slots,"default")]),(0,r.bF)(c)],64)}var s=o(4232),c=o.p+"img/logo.7a3bac9d.svg";const l={class:"container"},u={class:"header__container"},p=["href","aria-label"],d={class:"header__navigation",id:"top"},b={class:"header__navigation-list"},f={class:"header__navigation-item"},g={class:"header__navigation-item"},v={class:"header__navigation-item"};function h(e,t,o,a,i,h){const m=(0,r.g2)("ABBurgerButton");return(0,r.uX)(),(0,r.CE)("header",{class:(0,s.C4)(["header",{"header--opened":e.isMobileMenuShown}])},[(0,r.Lk)("div",l,[(0,r.Lk)("div",u,[(0,r.Lk)("a",{href:e.isNotHomePage?"/":void 0,"aria-label":e.isNotHomePage?"На главную":void 0},t[4]||(t[4]=[(0,r.Lk)("img",{class:"header__logo",src:c,width:"240px",alt:"Логотип"},null,-1)]),8,p),(0,r.Lk)("nav",d,[e.isMobile?((0,r.uX)(),(0,r.Wv)(m,{key:0,class:"header__navigation-button",isMenuExpanded:e.isMobileMenuShown,text:e.isMobileMenuShown?"Скрыть меню":"Открыть меню",onClick:t[0]||(t[0]=t=>e.toggleMenu())},null,8,["isMenuExpanded","text"])):(0,r.Q3)("",!0),(0,r.bo)((0,r.Lk)("ul",b,[(0,r.Lk)("li",f,[(0,r.Lk)("a",{class:"header__navigation-link",href:"#about",onClick:t[1]||(t[1]=t=>e.toggleMenu(!1))},"Обо мне")]),(0,r.Lk)("li",g,[(0,r.Lk)("a",{class:"header__navigation-link",href:"#works",onClick:t[2]||(t[2]=t=>e.toggleMenu(!1))},"Мои работы")]),(0,r.Lk)("li",v,[(0,r.Lk)("a",{class:"header__navigation-link",href:"#contacts",onClick:t[3]||(t[3]=t=>e.toggleMenu(!1))},"Контакты")])],512),[[n.aG,!e.isMobile||e.isMobileMenuShown]])])])])],2)}var m=o(1387);const k=["aria-label"];function _(e,t,o,n,a,i){return(0,r.uX)(),(0,r.CE)("button",{class:(0,s.C4)(["burger-button",{"burger-button--expanded":e.isMenuExpanded}]),type:"button","aria-label":e.text},t[0]||(t[0]=[(0,r.Lk)("div",{class:"burger-burger"},[(0,r.Lk)("div"),(0,r.Lk)("div"),(0,r.Lk)("div")],-1)]),10,k)}var y=(0,r.pM)({name:"ABBurgerButton",props:{isMenuExpanded:{type:Boolean,default:!1},text:{type:String,default:""}}}),w=o(1241);const M=(0,w.A)(y,[["render",_]]);var L=M,j=(0,r.pM)({name:"ABHeader",props:{},data(){return{isMobileMenuShown:!1,isMobile:!1}},setup(){const e=(0,m.lq)();return{route:e}},computed:{isNotHomePage(){return"/"!==this.route.path}},methods:{toggleMenu(e=void 0){this.isMobileMenuShown=!this.isMobileMenuShown,void 0!==e&&(this.isMobileMenuShown=e),this.isMobileMenuShown?this.blockBody():this.unblockBody()},blockBody(){document.body.classList.add("blocked-scroll")},unblockBody(){document.body.classList.remove("blocked-scroll")},checkIfMobile(){this.isMobile=window.innerWidth<=768},onWindowResize(){this.checkIfMobile(),this.toggleMenu(!1)}},mounted(){this.checkIfMobile(),window.addEventListener("resize",this.onWindowResize)},beforeUnmount(){window.removeEventListener("resize",this.onWindowResize)},components:{ABBurgerButton:L}});const x=(0,w.A)(j,[["render",h]]);var A=x;const B={class:"footer",id:"contacts"},C={class:"container"},E={class:"footer__container"},I={class:"footer__social-list"},U={class:"footer__social-item"},z={class:"footer__social-item"};function S(e,t,o,n,a,i){return(0,r.uX)(),(0,r.CE)("footer",B,[(0,r.Lk)("div",C,[(0,r.Lk)("div",E,[(0,r.Lk)("ul",I,[(0,r.Lk)("li",U,[(0,r.Lk)("a",{class:"footer__social-link",href:"https://www.instagram.com/alexbelostozky/",style:(0,s.Tr)(`mask-image: url(${a.instagramIcon})`),target:"_blank"},null,4)]),(0,r.Lk)("li",z,[(0,r.Lk)("a",{class:"footer__social-link",href:"https://www.behance.net/alexbelostozky",style:(0,s.Tr)(`mask-image: url(${a.behanceIcon})`),target:"_blank"},null,4)])]),t[0]||(t[0]=(0,r.Lk)("a",{class:"footer__tel-link",href:"tel:+79996269606"},"+7 999 626 96 06",-1))])])])}var F=o.p+"img/inst-icon.663a7253.svg",O=o.p+"img/behance-icon.396fa494.svg",P={name:"ABFooter",props:{},data(){return{instagramIcon:F,behanceIcon:O}}};const X=(0,w.A)(P,[["render",S]]);var W=X,N={name:"MainLayout",components:{ABHeader:A,ABFooter:W}};const H=(0,w.A)(N,[["render",i]]);var R=H,T={name:"App",components:{MainLayout:R}};const K=(0,w.A)(T,[["render",a]]);var $=K,G=o.p+"img/portrait.6d230b99.webp",V=o.p+"img/portrait.198cb1f4.png";const q=G,J={class:"recent-section",id:"works"},Q={class:"container"},D={class:"recent-section__list"};function Y(e,t,o,n,a,i){const s=(0,r.g2)("ABProjectItem");return(0,r.uX)(),(0,r.CE)(r.FK,null,[t[0]||(t[0]=(0,r.Fv)('<section class="about-section"><div class="container" id="about"><div class="about-section__grid"><div class="about-section__portrait"><picture><source srcset="'+q+'" type="image/webp"><img src="'+V+'" width="248" height="248" alt="Александр Белостоцкий"></picture></div><div class="about-section__story"><h1 class="about-section__story-heading">Искусство во всём</h1><p class="about-section__story-text"> Ну или почти во всём 😀 </p><p class="about-section__story-text"> Так уж сложилось, что подавляющая часть того, что мы видим каждый день, можем потрогать, используем в своей повседневной жизни создано людьми. Но с какого-то момента я начал воспринимать некоторые вещи как объекты искусства. И убеждён, что в любой вещи можно его найти. Ведь каждая вещь так или иначе характеризует мир, в котором мы живём, является срезом культуры того времени, когда она  была создана. И это отчасти является причиной основной тематики моих фотографий. </p><p class="about-section__story-text"> Автомобили, особенно которые <a href="https://www.instagram.com/explore/tags/такихуженеделают/" target="_blank">#ТакихУжеНеДелают</a>, являются результатом творчества огромного числа инженеров, дизайнеров и учёных. Именно поэтому я чувствую огромное желание запечатлеть эти образцы культуры и показать их вам. </p></div></div></div></section>',1)),(0,r.Lk)("section",J,[(0,r.Lk)("div",Q,[(0,r.Lk)("ul",D,[((0,r.uX)(!0),(0,r.CE)(r.FK,null,(0,r.pI)(e.recentProjects,(e=>((0,r.uX)(),(0,r.Wv)(s,{key:e.url,projectName:e.name,projectUrl:e.url,projectCoverUrl:e.coverUrl},null,8,["projectName","projectUrl","projectCoverUrl"])))),128))])])])],64)}const Z={class:"recent-section__item"},ee=["href"],te={class:"project-item__image-wrapper"},oe=["src","alt"],ne={class:"project-item__title"};function re(e,t,o,n,a,i){return(0,r.uX)(),(0,r.CE)("li",Z,[(0,r.Lk)("a",{class:"project-item__link",href:o.projectUrl},[(0,r.Lk)("div",te,[(0,r.Lk)("img",{class:"project-item__image",src:o.projectCoverUrl,width:"320",height:"320",alt:`Проект ${o.projectName}`},null,8,oe)]),(0,r.Lk)("span",ne,(0,s.v_)(o.projectName),1)],8,ee)])}var ae={name:"ABProjectItem",props:{projectName:{type:String,default:"Проект без названия 🤔"},projectUrl:{type:String,default:"/404"},projectCoverUrl:{type:String,default:"@images/blank-cover.jpg"}}};const ie=(0,w.A)(ae,[["render",re]]);var se=ie,ce={name:"HomePage",props:{},data:()=>({recentProjects:[{name:"Celsior",coverUrl:o(7589),url:"/celsior"},{name:"Laurel",coverUrl:o(8117),url:"/laurel"},{name:"Mark II",coverUrl:o(8021),url:"/mark"},{name:"Museum",coverUrl:o(235),url:"/museum"},{name:"2104",coverUrl:o(8853),url:"/2104"},{name:"Cresta",coverUrl:o(6207),url:"/cresta"}]}),components:{ABProjectItem:se}};const le=(0,w.A)(ce,[["render",Y]]);var ue=le;const pe=[{path:"/",name:"home",component:ue}],de=(0,m.aE)({history:(0,m.LA)("/AlexBelostozky-photo/"),routes:pe});var be=de,fe=o(6400),ge=o(5942),ve=o(7617);const he={apiKey:"AIzaSyCn8JdFAT7Oh2VkpFfj3RJZEVzchbqVWMo",authDomain:"alexbelostozky-photo.firebaseapp.com",projectId:"alexbelostozky-photo",storageBucket:"alexbelostozky-photo.firebasestorage.app",messagingSenderId:"571708317175",appId:"1:571708317175:web:8e493db09b33fab62c22f2",measurementId:"G-5F7RCQY9ET"},me=(0,fe.Wp)(he),ke=(0,ge.P5)(me),_e=(0,ve.aU)(me),ye=(0,n.Ef)($);ye.use(be),ye.provide("firebaseApp",me),ye.provide("firebaseAnalytics",ke),ye.provide("db",_e),ye.mount("#app")},8853:function(e,t,o){e.exports=o.p+"img/2104-cover.fa9ebc26.jpg"},7589:function(e,t,o){e.exports=o.p+"img/celsior-cover.fe093344.jpg"},6207:function(e,t,o){e.exports=o.p+"img/cresta-cover.5beb5c31.jpg"},8117:function(e,t,o){e.exports=o.p+"img/laurel-cover.fdb69e5d.jpg"},8021:function(e,t,o){e.exports=o.p+"img/mark-cover.de38659d.jpg"},235:function(e,t,o){e.exports=o.p+"img/museum-cover.34bad518.jpg"}},t={};function o(n){var r=t[n];if(void 0!==r)return r.exports;var a=t[n]={exports:{}};return e[n].call(a.exports,a,a.exports,o),a.exports}o.m=e,function(){var e=[];o.O=function(t,n,r,a){if(!n){var i=1/0;for(u=0;u<e.length;u++){n=e[u][0],r=e[u][1],a=e[u][2];for(var s=!0,c=0;c<n.length;c++)(!1&a||i>=a)&&Object.keys(o.O).every((function(e){return o.O[e](n[c])}))?n.splice(c--,1):(s=!1,a<i&&(i=a));if(s){e.splice(u--,1);var l=r();void 0!==l&&(t=l)}}return t}a=a||0;for(var u=e.length;u>0&&e[u-1][2]>a;u--)e[u]=e[u-1];e[u]=[n,r,a]}}(),function(){o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,{a:t}),t}}(),function(){o.d=function(e,t){for(var n in t)o.o(t,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){o.p="/AlexBelostozky-photo/"}(),function(){var e={524:0};o.O.j=function(t){return 0===e[t]};var t=function(t,n){var r,a,i=n[0],s=n[1],c=n[2],l=0;if(i.some((function(t){return 0!==e[t]}))){for(r in s)o.o(s,r)&&(o.m[r]=s[r]);if(c)var u=c(o)}for(t&&t(n);l<i.length;l++)a=i[l],o.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return o.O(u)},n=self["webpackChunkalexbelostozky_photo"]=self["webpackChunkalexbelostozky_photo"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var n=o.O(void 0,[504],(function(){return o(8276)}));n=o.O(n)})();
//# sourceMappingURL=app.e6a9088f.js.map