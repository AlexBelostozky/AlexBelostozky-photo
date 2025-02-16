(function(){"use strict";var e={6653:function(e,t,o){o(4114),o(4603),o(7566),o(8721);var r=o(5130),a=o(6768);function n(e,t,o,r,n,s){const i=(0,a.g2)("router-view"),c=(0,a.g2)("main-layout");return(0,a.uX)(),(0,a.Wv)(c,null,{default:(0,a.k6)((()=>[(0,a.bF)(i)])),_:1})}function s(e,t,o,r,n,s){const i=(0,a.g2)("ABHeader"),c=(0,a.g2)("ABFooter");return(0,a.uX)(),(0,a.CE)(a.FK,null,[(0,a.bF)(i),(0,a.Lk)("main",null,[(0,a.RG)(e.$slots,"default")]),(0,a.bF)(c)],64)}var i=o(4232),c=o.p+"img/logo.7a3bac9d.svg";const l={class:"container"},u={class:"header__container"},p={key:1,class:"header__logo",src:c,width:"240px",alt:"Логотип"},d={class:"header__navigation",id:"top"},g={class:"header__navigation-list"};function m(e,t,o,n,s,m){const h=(0,a.g2)("router-link"),v=(0,a.g2)("ABBurgerButton");return(0,a.uX)(),(0,a.CE)("header",{class:(0,i.C4)(["header",{"header--opened":e.isMobileMenuShown}])},[(0,a.Lk)("div",l,[(0,a.Lk)("div",u,[e.isNotHomePage?((0,a.uX)(),(0,a.Wv)(h,{key:0,to:{name:"Home"},"aria-label":"На главную",onClick:t[0]||(t[0]=t=>e.toggleMenu(!1))},{default:(0,a.k6)((()=>t[3]||(t[3]=[(0,a.Lk)("img",{class:"header__logo",src:c,width:"240px",alt:"Логотип"},null,-1)]))),_:1})):((0,a.uX)(),(0,a.CE)("img",p)),(0,a.Lk)("nav",d,[e.isMobile?((0,a.uX)(),(0,a.Wv)(v,{key:0,class:"header__navigation-button",isMenuExpanded:e.isMobileMenuShown,text:e.isMobileMenuShown?"Скрыть меню":"Открыть меню",onClick:t[1]||(t[1]=t=>e.toggleMenu())},null,8,["isMenuExpanded","text"])):(0,a.Q3)("",!0),(0,a.bo)((0,a.Lk)("ul",g,[((0,a.uX)(!0),(0,a.CE)(a.FK,null,(0,a.pI)(e.linksList,(o=>((0,a.uX)(),(0,a.CE)("li",{class:"header__navigation-item",key:o.url},[((0,a.uX)(),(0,a.Wv)((0,a.$y)(o.isRouter?"router-link":"a"),{class:"header__navigation-link",to:o.isRouter?{name:o.url}:void 0,href:o.isRouter?void 0:o.url,onClick:t[2]||(t[2]=t=>e.toggleMenu(!1))},{default:(0,a.k6)((()=>[(0,a.eW)((0,i.v_)(o.name),1)])),_:2},1032,["to","href"]))])))),128))],512),[[r.aG,!e.isMobile||e.isMobileMenuShown]])])])])],2)}var h=o(1387);const v=["aria-label"];function f(e,t,o,r,n,s){return(0,a.uX)(),(0,a.CE)("button",{class:(0,i.C4)(["burger-button",{"burger-button--expanded":e.isMenuExpanded}]),type:"button","aria-label":e.text},t[0]||(t[0]=[(0,a.Lk)("div",{class:"burger-burger"},[(0,a.Lk)("div"),(0,a.Lk)("div"),(0,a.Lk)("div")],-1)]),10,v)}var j=(0,a.pM)({name:"ABBurgerButton",props:{isMenuExpanded:{type:Boolean,default:!1},text:{type:String,default:""}}}),b=o(1241);const k=(0,b.A)(j,[["render",f]]);var _=k,y=(0,a.pM)({name:"ABHeader",props:{},data(){return{isMobileMenuShown:!1,isMobile:!1,linksList:[{name:"Проекты",url:"Projects",isRouter:!0},{name:"Контакты",url:"#contacts",isRouter:!1}]}},setup(){const e=(0,h.lq)();return{route:e}},computed:{isNotHomePage(){return"/"!==this.route.path}},methods:{toggleMenu(e=void 0){this.isMobileMenuShown=!this.isMobileMenuShown,void 0!==e&&(this.isMobileMenuShown=e),this.isMobileMenuShown?this.blockBody():this.unblockBody()},blockBody(){document.body.classList.add("blocked-scroll")},unblockBody(){document.body.classList.remove("blocked-scroll")},checkIfMobile(){this.isMobile=window.innerWidth<=768},onWindowResize(){this.checkIfMobile(),this.toggleMenu(!1)}},mounted(){this.checkIfMobile(),window.addEventListener("resize",this.onWindowResize)},beforeUnmount(){window.removeEventListener("resize",this.onWindowResize)},components:{ABBurgerButton:_}});const w=(0,b.A)(y,[["render",m]]);var L=w;const P={class:"footer",id:"contacts"},M={class:"container"},x={class:"footer__container"},A={class:"footer__social-list"},I={class:"footer__social-item"},C={class:"footer__social-item"};function E(e,t,o,r,n,s){return(0,a.uX)(),(0,a.CE)("footer",P,[(0,a.Lk)("div",M,[(0,a.Lk)("div",x,[(0,a.Lk)("ul",A,[(0,a.Lk)("li",I,[(0,a.Lk)("a",{class:"footer__social-link",href:"https://www.instagram.com/alexbelostozky/",style:(0,i.Tr)(`mask-image: url(${n.instagramIcon})`),target:"_blank"},null,4)]),(0,a.Lk)("li",C,[(0,a.Lk)("a",{class:"footer__social-link",href:"https://www.behance.net/alexbelostozky",style:(0,i.Tr)(`mask-image: url(${n.behanceIcon})`),target:"_blank"},null,4)])]),t[0]||(t[0]=(0,a.Lk)("a",{class:"footer__tel-link",href:"tel:+79996269606"}," +7 705 804 59 82 ",-1))])])])}var B=o.p+"img/inst-icon.663a7253.svg",F=o.p+"img/behance-icon.396fa494.svg",S={name:"ABFooter",props:{},data(){return{instagramIcon:B,behanceIcon:F}}};const X=(0,b.A)(S,[["render",E]]);var W=X,U={name:"MainLayout",components:{ABHeader:L,ABFooter:W}};const N=(0,b.A)(U,[["render",s]]);var $=N,z={name:"App",components:{MainLayout:$}};const H=(0,b.A)(z,[["render",n]]);var R=H,O=o.p+"img/portrait-mobile.7433abb3.webp",G=o.p+"img/portrait-mobile.18790b04.jpg",T=o.p+"img/portrait.21863370.webp",K=o.p+"img/portrait.bb0002ba.jpg";const V=O,D=G,Q=T,q={class:"recent-section",id:"works"},J={class:"container"},Y={class:"recent-section__list"};function Z(e,t,o,r,n,s){const i=(0,a.g2)("ABProjectItem"),c=(0,a.g2)("router-link");return(0,a.uX)(),(0,a.CE)(a.FK,null,[t[1]||(t[1]=(0,a.Fv)('<section class="about-section"><div class="container" id="about"><div class="about-section__grid"><div class="about-section__portrait"><picture><source media="(max-width: 768px)" srcset="'+V+'" type="image/webp"><source media="(max-width: 768px)" srcset="'+D+'" type="image/jpeg"><source srcset="'+Q+'" type="image/webp"><img src="'+K+'" width="248" height="248" alt="Александр Белостоцкий"></picture></div><h1 class="about-section__story-heading">Искусство<br> во всём</h1><div class="about-section__story-text-wrapper"><p class="about-section__story-text"> Ну или почти во всём 😀 </p><p class="about-section__story-text"> Так уж сложилось, что подавляющая часть того, что мы видим каждый день, можем потрогать, используем в своей повседневной жизни создано людьми. Но с какого-то момента я начал воспринимать некоторые вещи как объекты искусства. И убеждён, что в любой вещи можно его найти. Ведь каждая вещь так или иначе характеризует мир, в котором мы живём, является срезом культуры того времени, когда она  была создана. И это отчасти является причиной основной тематики моих фотографий. </p><p class="about-section__story-text"> Автомобили, особенно которые <a href="https://www.instagram.com/explore/tags/такихуженеделают/" target="_blank">#ТакихУжеНеДелают</a>, являются результатом творчества огромного числа инженеров, дизайнеров и учёных. Именно поэтому я чувствую огромное желание запечатлеть эти образцы культуры и показать их вам. </p></div></div></div></section>',1)),(0,a.Lk)("section",q,[(0,a.Lk)("div",J,[(0,a.Lk)("ul",Y,[((0,a.uX)(!0),(0,a.CE)(a.FK,null,(0,a.pI)(e.recentProjects,(e=>((0,a.uX)(),(0,a.Wv)(i,{key:e.url,projectName:e.name,projectUrl:e.url,projectCoverUrl:e.coverUrl},null,8,["projectName","projectUrl","projectCoverUrl"])))),128))]),e.projects.length>6?((0,a.uX)(),(0,a.Wv)(c,{key:0,to:{name:"Projects"}},{default:(0,a.k6)((()=>t[0]||(t[0]=[(0,a.eW)("Все проекты")]))),_:1})):(0,a.Q3)("",!0)])])],64)}const ee={class:"recent-section__item"},te={class:"project-item__image-wrapper"},oe=["src","alt"],re={class:"project-item__title"};function ae(e,t,o,r,n,s){const c=(0,a.g2)("router-link");return(0,a.uX)(),(0,a.CE)("li",ee,[(0,a.bF)(c,{class:"project-item__link",to:o.projectUrl},{default:(0,a.k6)((()=>[(0,a.Lk)("div",te,[(0,a.Lk)("img",{class:"project-item__image",src:o.projectCoverUrl,width:"320",height:"320",alt:`Проект ${o.projectName}`},null,8,oe)]),(0,a.Lk)("span",re,(0,i.v_)(o.projectName),1)])),_:1},8,["to"])])}var ne={name:"ABProjectItem",props:{projectName:{type:String,default:"Проект без названия 🤔"},projectUrl:{type:String,default:"/404"},projectCoverUrl:{type:String,default:"@images/blank-cover.jpg"}}};const se=(0,b.A)(ne,[["render",ae]]);var ie=se,ce=(0,a.pM)({name:"HomePage",props:{},components:{ABProjectItem:ie},data:()=>({projects:[{name:"Celsior",coverUrl:o(7589),url:"/celsior"},{name:"Laurel",coverUrl:o(8117),url:"/laurel"},{name:"Mark II",coverUrl:o(8021),url:"/mark"},{name:"Museum",coverUrl:o(235),url:"/museum"},{name:"2104",coverUrl:o(8853),url:"/2104"},{name:"Cresta",coverUrl:o(6207),url:"/cresta"}]}),methods:{async getProjects(e,t){const o=await fetch(`https://api.com/projects?page=${e}&limit=${t}`),r=await o.json();this.projects.push(r)}},computed:{recentProjects(){return this.projects.slice(0,6)}}});const le=(0,b.A)(ce,[["render",Z]]);var ue=le;const pe={class:"not-found"},de={class:"container"},ge={class:"not-found__grid"},me={class:"not-found__content"};function he(e,t,o,r,n,s){const i=(0,a.g2)("router-link");return(0,a.uX)(),(0,a.CE)("div",pe,[(0,a.Lk)("div",de,[(0,a.Lk)("div",ge,[(0,a.Lk)("div",me,[t[1]||(t[1]=(0,a.Lk)("h1",null,"404 – Страница не найдена",-1)),(0,a.bF)(i,{class:"not-found__link",to:{name:"Home"}},{default:(0,a.k6)((()=>t[0]||(t[0]=[(0,a.eW)("Вернуться на главную")]))),_:1})])])])])}var ve=(0,a.pM)({name:"NotFound"});const fe=(0,b.A)(ve,[["render",he]]);var je=fe;const be={class:"projects-section"},ke={key:0,class:"projects-section__filter-wrapper"},_e={class:"projects-section__results"},ye={class:"container"},we={class:"projects-section__results-grid"},Le={class:"recent-section__list"},Pe={key:1,class:"projects-section__empty-list"};function Me(e,t,r,n,s,i){const c=(0,a.g2)("ABProjectItemLoader"),l=(0,a.g2)("ABProjectItem"),u=(0,a.g2)("v-pagination"),p=(0,a.g2)("v-empty-state");return(0,a.uX)(),(0,a.CE)("div",be,[e.isLoading||e.showingProjects.length?((0,a.uX)(),(0,a.CE)("div",ke,t[1]||(t[1]=[(0,a.Lk)("div",{class:"container"},[(0,a.Lk)("h2",null,"Фильтры")],-1)]))):(0,a.Q3)("",!0),(0,a.Lk)("div",_e,[(0,a.Lk)("div",ye,[(0,a.Lk)("div",we,[(0,a.Lk)("ul",Le,[e.isLoading?((0,a.uX)(!0),(0,a.CE)(a.FK,{key:0},(0,a.pI)(e.projectsPerPage,(t=>((0,a.uX)(),(0,a.Wv)(c,{key:t,loading:e.isLoading},null,8,["loading"])))),128)):e.showingProjects.length?((0,a.uX)(!0),(0,a.CE)(a.FK,{key:1},(0,a.pI)(e.showingProjects,(e=>((0,a.uX)(),(0,a.Wv)(l,{key:e.slug,projectName:e.name,projectUrl:`/project/${e.slug}`,projectCoverUrl:e.cover_url},null,8,["projectName","projectUrl","projectCoverUrl"])))),128)):(0,a.Q3)("",!0)]),e.pagesAmount>1?((0,a.uX)(),(0,a.Wv)(u,{key:0,modelValue:e.page,"onUpdate:modelValue":t[0]||(t[0]=t=>e.page=t),length:e.pagesAmount},null,8,["modelValue","length"])):(0,a.Q3)("",!0)])])]),e.isLoading||e.showingProjects.length?(0,a.Q3)("",!0):((0,a.uX)(),(0,a.CE)("div",Pe,[(0,a.bF)(p,{title:"Проекты не найдены...",text:"Давайте вместе создадим нечто прекрасное!",image:o(3233)},null,8,["image"])]))])}o(8992),o(3949);const xe={class:"recent-section__item"},Ae={class:"project-item__link"};function Ie(e,t,o,r,n,s){const i=(0,a.g2)("v-skeleton-loader");return(0,a.uX)(),(0,a.CE)("li",xe,[(0,a.Lk)("div",Ae,[(0,a.bF)(i,{type:"image, list-item",loading:e.loading},{default:(0,a.k6)((()=>[(0,a.RG)(e.$slots,"default")])),_:3},8,["loading"])])])}var Ce=(0,a.pM)({name:"ABProjectItemLoader",props:{loading:{type:Boolean,default:!0}}});const Ee=(0,b.A)(Ce,[["render",Ie]]);var Be=Ee,Fe=(o(1454),o(6400)),Se=o(5942),Xe=o(7617);const We={apiKey:"AIzaSyCn8JdFAT7Oh2VkpFfj3RJZEVzchbqVWMo",authDomain:"alexbelostozky-photo.firebaseapp.com",projectId:"alexbelostozky-photo",storageBucket:"alexbelostozky-photo.firebasestorage.app",messagingSenderId:"571708317175",appId:"1:571708317175:web:8e493db09b33fab62c22f2",measurementId:"G-5F7RCQY9ET"},Ue=(0,Fe.Wp)(We),Ne=(0,Se.P5)(Ue),$e=(0,Xe.aU)(Ue);var ze=o(8496);const He={apiKey:"556793371748214",cloudName:"djutzcgzq"};new ze.T({cloud:{cloudName:He.cloudName}});var Re=o(642);const Oe=o(9096),Ge=e=>`https://res.cloudinary.com/${He.cloudName}/image/upload/${e}.jpg`,Te=new Re.A({linkify:!0}).use(Oe,{attrs:{target:"_blank",rel:"noopener noreferrer"}}),Ke=e=>Te.render(e.replace(/\\n/g,"\n").replace(/(?<=^|\s)(\p{L}{1,4})(,?)\s/gu,"$1$2&nbsp;")||""),Ve=e=>new Promise(((t,o)=>{const r=new Image;r.src=e,r.onload=()=>t({width:r.naturalWidth,height:r.naturalHeight}),r.onerror=o})),De=async(e,t,o)=>{const r=(0,Xe.rJ)($e,e),a=o?(0,Xe.P)(r,(0,Xe.AB)(t),(0,Xe.HM)(o)):(0,Xe.P)(r,(0,Xe.AB)(t)),n=await(0,Xe.GG)(a),s=n.docs.map((e=>{const t=e.data();return{id:Number(e.id),...t,cover_url:Ge(t.cover_url)}})),i=n.docs?n.docs[n.docs.length-1]:null;return{lastFromSnapshot:i,fetchedProjects:s}},Qe=async(e,t)=>{const o=(0,Xe.rJ)($e,e),r=(0,Xe.P)(o,(0,Xe._M)("slug","==",t)),a=await(0,Xe.GG)(r);if(a.empty)return null;const n=a.docs.map((e=>{const t=e.data(),o=[];return t.images.forEach((e=>{o.push(Ge(e))})),{id:Number(e.id),...t,cover_url:Ge(t.cover_url),images:o}}));return n[0]};var qe=(0,a.pM)({name:"ProjectsPage",components:{ABProjectItem:ie,ABProjectItemLoader:Be},data(){return{page:1,projectsPerPage:6,lastVisible:null,isLoading:!0,cachedProjects:{},showingProjects:[],totalProjects:0}},methods:{async showProjects(e,t){if(this.cachedProjects[e])return this.showingProjects=this.cachedProjects[e],void(this.isLoading=!1);try{this.isLoading=!0;const{lastFromSnapshot:o,fetchedProjects:r}=await De("projects",t,this.lastVisible);this.lastVisible=o,r.forEach((t=>{this.cachedProjects[e]||(this.cachedProjects[e]=[]),this.cachedProjects[e].push(t)})),this.showingProjects=r}catch(o){console.warn("Failed to get projects from Firebase: ",o)}finally{this.isLoading=!1}}},mounted(){this.showingProjects.length||this.showProjects(this.page,this.projectsPerPage)},computed:{pagesAmount(){return Math.ceil(this.totalProjects/this.projectsPerPage)}},watch:{page(e){this.showProjects(e,this.projectsPerPage)}}});const Je=(0,b.A)(qe,[["render",Me]]);var Ye=Je;const Ze={class:"project-section"},et={class:"container"},tt={class:"project-section__heading"},ot={class:"project-section__tags-wrapper"},rt={class:"project-section__tags-list"},at={class:"project-section__tag-key"},nt=["innerHTML"],st={class:"project-section__gallery"};function it(e,t,o,r,n,s){const c=(0,a.g2)("router-link"),l=(0,a.g2)("ABGallery");return(0,a.uX)(),(0,a.CE)("div",Ze,[(0,a.Lk)("div",et,[(0,a.Lk)("h1",tt,(0,i.v_)(e.projectData?.name),1),(0,a.Lk)("div",ot,[(0,a.Lk)("ul",rt,[((0,a.uX)(!0),(0,a.CE)(a.FK,null,(0,a.pI)(e.projectData?.tags,((e,t)=>((0,a.uX)(),(0,a.CE)("li",{class:"project-section__tag-item",key:t},[(0,a.Lk)("span",at,(0,i.v_)(t)+": ",1),(0,a.bF)(c,{to:`/projects?${t}=${encodeURIComponent(e)}`},{default:(0,a.k6)((()=>[(0,a.eW)((0,i.v_)(e),1)])),_:2},1032,["to"])])))),128))])]),(0,a.Lk)("div",{class:"project-section__description",innerHTML:e.renderMarkdown(e.projectData?.description||"")},null,8,nt)]),(0,a.Lk)("div",st,[e.projectData?((0,a.uX)(),(0,a.Wv)(l,{key:0,images:e.projectData?.images,projectName:e.projectData?.name},null,8,["images","projectName"])):(0,a.Q3)("",!0)])])}const ct={class:"gallery"},lt={class:"container container--mobile-extended"},ut={class:"gallery__grid",ref:"gallery"},pt=["src","alt"];function dt(e,t,o,r,n,s){return(0,a.uX)(),(0,a.CE)("div",ct,[(0,a.Lk)("div",lt,[(0,a.Lk)("div",ut,[((0,a.uX)(!0),(0,a.CE)(a.FK,null,(0,a.pI)(e.styledImages,((t,o)=>((0,a.uX)(),(0,a.CE)("div",{class:"gallery__item",key:o},[(0,a.Lk)("img",{class:(0,i.C4)(["gallery__image",{"gallery__image--portrait":"portrait"===t.orientation}]),src:t.url,style:(0,i.Tr)(`width: ${t.maxWidth}`),alt:o+" фото проекта "+e.projectName},null,14,pt)])))),128))],512)])])}var gt=(0,a.pM)({name:"ABGallery",components:{},props:{images:{type:Array,required:!0},projectName:{type:String,required:!0}},data(){return{maxImageHeightScreenRatio:.85,maxPortraitWidth:null,isImagesLoading:!0,styledImages:[]}},methods:{async mapImages(){try{this.isImagesLoading=!0,this.styledImages=await Promise.all(this.images.map((async e=>{const{width:t,height:o}=await Ve(e),r=t??0,a=o??0;return{url:e,orientation:r&&a&&r>a?"landscape":"portrait",naturalWidth:r,naturalHeight:a}}))),this.styleImages()}catch(e){console.warn("Failed to map images: ",e)}finally{this.isImagesLoading=!1}},styleImages(){const e=this.$refs.gallery,t=e.clientWidth,o=window.getComputedStyle(e),r=o.getPropertyValue("gap"),a=isNaN(parseFloat(r))?20:parseFloat(r),n=t/2-a/2,s=window.innerHeight*this.maxImageHeightScreenRatio;this.styledImages.forEach((e=>{if("portrait"===e.orientation&&e.naturalWidth&&e.naturalHeight){const o=e.naturalHeight/e.naturalWidth,r=t*o<=s;e.maxWidth=r?t+"px":n+"px",console.log("galleryWidth: ",t,"heightRatio: ",o,"this.maxImageHeight: ",s,"canImageBeFull: ",r,"image.maxWidth: ",e.maxWidth,"galleryGap: ",a)}}))}},beforeMount(){this.mapImages()},mounted(){window.addEventListener("resize",this.styleImages)},beforeUnmount(){window.removeEventListener("resize",this.styleImages)},computed:{}});const mt=(0,b.A)(gt,[["render",dt]]);var ht=mt,vt=(0,a.pM)({name:"ProjectPage",components:{ABGallery:ht},data(){return{isLoading:!0,projectData:null}},methods:{async showProject(){try{this.isLoading=!0;const e=Array.isArray(this.$route.params.projectSlug)?this.$route.params.projectSlug[0]:this.$route.params.projectSlug,t=await Qe("projects",e);this.projectData=t}catch(e){console.warn("Failed to get project from Firebase: ",e)}finally{this.isLoading=!1}},renderMarkdown:Ke},mounted(){this.showProject()},computed:{},watch:{}});const ft=(0,b.A)(vt,[["render",it]]);var jt=ft;const bt=[{path:"/",name:"Home",component:ue},{path:"/projects",name:"Projects",component:Ye},{path:"/project/:projectSlug",name:"Project",component:jt},{path:"/:pathMatch(.*)*",name:"NotFound",component:je}],kt=(0,h.aE)({history:(0,h.LA)("/AlexBelostozky-photo/"),routes:bt});var _t=kt,yt=(o(5524),o(7768)),wt=o(1920),Lt=o(5741),Pt=(0,yt.$N)({components:wt,directives:Lt,icons:{defaultSet:"mdi"},defaults:{global:{ripple:!1}}});const Mt=(0,r.Ef)(R);Mt.use(_t),Mt.use(Pt),Mt.provide("firebaseApp",Ue),Mt.provide("firebaseAnalytics",Ne),Mt.provide("db",$e);const xt=new URLSearchParams(window.location.search),At=xt.get("redirect");At&&(history.replaceState(null,"",window.location.pathname),_t.push(At)),Mt.mount("#app")},3233:function(e,t,o){e.exports=o.p+"img/no-projects.09300997.svg"},8853:function(e,t,o){e.exports=o.p+"img/2104-cover.fa9ebc26.jpg"},7589:function(e,t,o){e.exports=o.p+"img/celsior-cover.fe093344.jpg"},6207:function(e,t,o){e.exports=o.p+"img/cresta-cover.5beb5c31.jpg"},8117:function(e,t,o){e.exports=o.p+"img/laurel-cover.fdb69e5d.jpg"},8021:function(e,t,o){e.exports=o.p+"img/mark-cover.de38659d.jpg"},235:function(e,t,o){e.exports=o.p+"img/museum-cover.34bad518.jpg"}},t={};function o(r){var a=t[r];if(void 0!==a)return a.exports;var n=t[r]={exports:{}};return e[r].call(n.exports,n,n.exports,o),n.exports}o.m=e,function(){var e=[];o.O=function(t,r,a,n){if(!r){var s=1/0;for(u=0;u<e.length;u++){r=e[u][0],a=e[u][1],n=e[u][2];for(var i=!0,c=0;c<r.length;c++)(!1&n||s>=n)&&Object.keys(o.O).every((function(e){return o.O[e](r[c])}))?r.splice(c--,1):(i=!1,n<s&&(s=n));if(i){e.splice(u--,1);var l=a();void 0!==l&&(t=l)}}return t}n=n||0;for(var u=e.length;u>0&&e[u-1][2]>n;u--)e[u]=e[u-1];e[u]=[r,a,n]}}(),function(){o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,{a:t}),t}}(),function(){o.d=function(e,t){for(var r in t)o.o(t,r)&&!o.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){o.p="/AlexBelostozky-photo/"}(),function(){var e={524:0};o.O.j=function(t){return 0===e[t]};var t=function(t,r){var a,n,s=r[0],i=r[1],c=r[2],l=0;if(s.some((function(t){return 0!==e[t]}))){for(a in i)o.o(i,a)&&(o.m[a]=i[a]);if(c)var u=c(o)}for(t&&t(r);l<s.length;l++)n=s[l],o.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return o.O(u)},r=self["webpackChunkalexbelostozky_photo"]=self["webpackChunkalexbelostozky_photo"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=o.O(void 0,[504],(function(){return o(6653)}));r=o.O(r)})();
//# sourceMappingURL=app.ec191d78.js.map