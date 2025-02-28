(function(){"use strict";var u={4635:function(u,e,t){t(3362),t(9391),t(4114),t(7495),t(2953),t(8408),t(4603),t(7566),t(8721);var o=t(5130),r=t(6768);function n(u,e,t,o,n,a){const i=(0,r.g2)("router-view"),D=(0,r.g2)("main-layout");return(0,r.uX)(),(0,r.Wv)(D,null,{default:(0,r.k6)((()=>[(0,r.bF)(i)])),_:1})}const a={class:"main"};function i(u,e,t,o,n,i){const D=(0,r.g2)("ABHeader"),s=(0,r.g2)("ABFooter");return(0,r.uX)(),(0,r.CE)(r.FK,null,[(0,r.bF)(D),(0,r.Lk)("main",a,[(0,r.RG)(u.$slots,"default")]),(0,r.bF)(s)],64)}var D=t(4232),s=t.p+"img/logo.7a3bac9d.svg";const l={class:"container"},c={class:"header__container"},d={key:1,class:"header__logo",src:s,width:"240px",alt:"Логотип"},F={class:"header__navigation",id:"top"},p={class:"header__navigation-list"};function A(u,e,t,n,a,i){const A=(0,r.g2)("router-link"),m=(0,r.g2)("ABBurgerButton");return(0,r.uX)(),(0,r.CE)("header",{class:(0,D.C4)(["header",{"header--opened":u.isMobileMenuShown}])},[(0,r.Lk)("div",l,[(0,r.Lk)("div",c,[u.isNotHomePage?((0,r.uX)(),(0,r.Wv)(A,{key:0,to:{name:"Home"},"aria-label":"На главную",onClick:e[0]||(e[0]=e=>u.toggleMenu(!1))},{default:(0,r.k6)((()=>e[3]||(e[3]=[(0,r.Lk)("img",{class:"header__logo",src:s,width:"240px",alt:"Логотип"},null,-1)]))),_:1})):((0,r.uX)(),(0,r.CE)("img",d)),(0,r.Lk)("nav",F,[u.isMobile?((0,r.uX)(),(0,r.Wv)(m,{key:0,class:"header__navigation-button",isMenuExpanded:u.isMobileMenuShown,text:u.isMobileMenuShown?"Скрыть меню":"Открыть меню",onClick:e[1]||(e[1]=e=>u.toggleMenu())},null,8,["isMenuExpanded","text"])):(0,r.Q3)("",!0),(0,r.bo)((0,r.Lk)("ul",p,[((0,r.uX)(!0),(0,r.CE)(r.FK,null,(0,r.pI)(u.linksList,(t=>((0,r.uX)(),(0,r.CE)("li",{class:"header__navigation-item",key:t.url},[((0,r.uX)(),(0,r.Wv)((0,r.$y)(t.isRouter?"router-link":"a"),{class:"header__navigation-link",to:t.isRouter?{name:t.url}:void 0,href:t.isRouter?void 0:t.url,onClick:e[2]||(e[2]=e=>u.toggleMenu(!1))},{default:(0,r.k6)((()=>[(0,r.eW)((0,D.v_)(t.name),1)])),_:2},1032,["to","href"]))])))),128))],512),[[o.aG,!u.isMobile||u.isMobileMenuShown]])])])])],2)}var m=t(1387);const C=["aria-label"];function E(u,e,t,o,n,a){return(0,r.uX)(),(0,r.CE)("button",{class:(0,D.C4)(["burger-button",{"burger-button--expanded":u.isMenuExpanded}]),type:"button","aria-label":u.text},e[0]||(e[0]=[(0,r.Lk)("div",{class:"burger-burger"},[(0,r.Lk)("div"),(0,r.Lk)("div"),(0,r.Lk)("div")],-1)]),10,C)}var g=(0,r.pM)({name:"ABBurgerButton",props:{isMenuExpanded:{type:Boolean,default:!1},text:{type:String,default:""}}}),h=t(1241);const B=(0,h.A)(g,[["render",E]]);var v=B,f=(0,r.pM)({name:"ABHeader",props:{},data(){return{isMobileMenuShown:!1,isMobile:!1,linksList:[{name:"Проекты",url:"Projects",isRouter:!0},{name:"Контакты",url:"#contacts",isRouter:!1}]}},setup(){const u=(0,m.lq)();return{route:u}},computed:{isNotHomePage(){return"/"!==this.route.path}},methods:{toggleMenu(u=void 0){this.isMobileMenuShown=!this.isMobileMenuShown,void 0!==u&&(this.isMobileMenuShown=u),this.isMobileMenuShown?this.blockBody():this.unblockBody()},blockBody(){document.documentElement.classList.add("blocked-scroll"),document.body.classList.add("blocked-scroll")},unblockBody(){document.documentElement.classList.remove("blocked-scroll"),document.body.classList.remove("blocked-scroll")},checkIfMobile(){this.isMobile=window.innerWidth<=768},onWindowResize(){this.checkIfMobile(),this.toggleMenu(!1)}},mounted(){this.checkIfMobile(),window.addEventListener("resize",this.onWindowResize)},beforeUnmount(){window.removeEventListener("resize",this.onWindowResize)},components:{ABBurgerButton:v}});const y=(0,h.A)(f,[["render",A]]);var k=y;const b={class:"footer",id:"contacts"},j={class:"container"},_={class:"footer__container"},w={class:"footer__social-list"},L={class:"footer__social-item"},P={class:"footer__social-item"};function M(u,e,t,o,n,a){return(0,r.uX)(),(0,r.CE)("footer",b,[(0,r.Lk)("div",j,[(0,r.Lk)("div",_,[(0,r.Lk)("ul",w,[(0,r.Lk)("li",L,[(0,r.Lk)("a",{class:"footer__social-link",href:"https://www.instagram.com/alexbelostozky/",style:(0,D.Tr)(`mask-image: url(${n.instagramIcon})`),target:"_blank"},null,4)]),(0,r.Lk)("li",P,[(0,r.Lk)("a",{class:"footer__social-link",href:"https://www.behance.net/alexbelostozky",style:(0,D.Tr)(`mask-image: url(${n.behanceIcon})`),target:"_blank"},null,4)])]),e[0]||(e[0]=(0,r.Lk)("a",{class:"footer__tel-link",href:"tel:+77058045982"}," +7 705 804 59 82 ",-1))])])])}var x=t.p+"img/inst-icon.663a7253.svg",X=t.p+"img/behance-icon.396fa494.svg",I={name:"ABFooter",props:{},data(){return{instagramIcon:x,behanceIcon:X}}};const S=(0,h.A)(I,[["render",M]]);var W=S,O={name:"MainLayout",components:{ABHeader:k,ABFooter:W}};const T=(0,h.A)(O,[["render",i]]);var N=T,$={name:"App",components:{MainLayout:N}};const R=(0,h.A)($,[["render",n]]);var G=R;t(9463);const z={class:"about-section"},H={class:"container",id:"about"},U={class:"about-section__grid"},Q={class:"about-section__portrait"},K=["srcset"],V=["srcset"],q=["srcset"],J=["src"],Y=["innerHTML"],Z=["innerHTML"],uu={class:"recent-section",id:"works"},eu={class:"container"},tu={class:"recent-section__wrapper"},ou={class:"recent-section__list"};function ru(u,e,t,n,a,i){var D,s,l,c,d,F;const p=(0,r.g2)("v-skeleton-loader"),A=(0,r.g2)("ABProjectItemLoader"),m=(0,r.g2)("ABProjectItem"),C=(0,r.g2)("v-icon"),E=(0,r.g2)("router-link");return(0,r.uX)(),(0,r.CE)(r.FK,null,[(0,r.Lk)("section",z,[(0,r.Lk)("div",H,[(0,r.Lk)("div",U,[(0,r.Lk)("div",Q,[u.isPortraitLoaded?(0,r.Q3)("",!0):((0,r.uX)(),(0,r.Wv)(p,{key:0,type:"image"})),(0,r.bo)((0,r.Lk)("picture",null,[(0,r.Lk)("source",{media:"(max-width: 768px)",srcset:null===(D=u.mainData)||void 0===D?void 0:D.portrait.mobile_webp,type:"image/webp"},null,8,K),(0,r.Lk)("source",{media:"(max-width: 768px)",srcset:null===(s=u.mainData)||void 0===s?void 0:s.portrait.mobile,type:"image/jpeg"},null,8,V),(0,r.Lk)("source",{srcset:null===(l=u.mainData)||void 0===l?void 0:l.portrait.desktop_webp,type:"image/webp"},null,8,q),(0,r.Lk)("img",{src:null===(c=u.mainData)||void 0===c?void 0:c.portrait.desktop,width:"248",height:"248",alt:"Александр Белостоцкий",onLoad:e[0]||(e[0]=(...e)=>u.handleLoadPortrait&&u.handleLoadPortrait(...e))},null,40,J)],512),[[o.aG,u.isPortraitLoaded]])]),u.isLoadingMainData?((0,r.uX)(),(0,r.Wv)(p,{key:0,class:"about-section__story-heading",type:"heading",color:"transparent"})):((0,r.uX)(),(0,r.CE)("h1",{key:1,class:"about-section__story-heading",innerHTML:u.prettifyText((null===(d=u.mainData)||void 0===d?void 0:d.heading)||"")},null,8,Y)),u.isLoadingMainData?((0,r.uX)(),(0,r.Wv)(p,{key:2,class:"about-section__story-text-wrapper",type:"text@15",color:"transparent"})):(0,r.Q3)("",!0),(0,r.Lk)("div",{class:"about-section__story-text-wrapper",innerHTML:u.renderMarkdown((null===(F=u.mainData)||void 0===F?void 0:F.description)||"")},null,8,Z)])])]),(0,r.Lk)("section",uu,[(0,r.Lk)("div",eu,[(0,r.Lk)("div",tu,[(0,r.Lk)("ul",ou,[u.isLoadingProjects?((0,r.uX)(!0),(0,r.CE)(r.FK,{key:0},(0,r.pI)(u.projectsToShow,(e=>((0,r.uX)(),(0,r.Wv)(A,{key:e,loading:u.isLoadingProjects},null,8,["loading"])))),128)):(0,r.Q3)("",!0),((0,r.uX)(!0),(0,r.CE)(r.FK,null,(0,r.pI)(u.recentProjects,(u=>((0,r.uX)(),(0,r.Wv)(m,{key:u.slug,projectName:u.name,projectUrl:{name:"Project",params:{projectSlug:u.slug}},projectCoverUrl:u.cover_url},null,8,["projectName","projectUrl","projectCoverUrl"])))),128))]),u.projects.length>u.projectsToShow?((0,r.uX)(),(0,r.Wv)(E,{key:0,class:"recent-section__link",to:{name:"Projects"}},{default:(0,r.k6)((()=>[e[1]||(e[1]=(0,r.eW)(" Все проекты ")),(0,r.bF)(C,{icon:"mdil-chevron-right"})])),_:1})):(0,r.Q3)("",!0)])])])],64)}var nu=t(388),au=t(9201),iu=(t(5506),t(3921),t(7642),t(8004),t(3853),t(5876),t(2475),t(5024),t(1698),t(8992),t(3949),t(1454),t(6400)),Du=t(5942),su=t(7617);const lu={apiKey:"AIzaSyCn8JdFAT7Oh2VkpFfj3RJZEVzchbqVWMo",authDomain:"alexbelostozky-photo.firebaseapp.com",projectId:"alexbelostozky-photo",storageBucket:"alexbelostozky-photo.firebasestorage.app",messagingSenderId:"571708317175",appId:"1:571708317175:web:8e493db09b33fab62c22f2",measurementId:"G-5F7RCQY9ET"},cu=(0,iu.Wp)(lu),du=(0,Du.P5)(cu),Fu=(0,su.aU)(cu);t(5440);var pu=t(8496);const Au={apiKey:"556793371748214",cloudName:"djutzcgzq"};new pu.T({cloud:{cloudName:Au.cloudName}});var mu=t(642);const Cu=t(9096),Eu=u=>`https://res.cloudinary.com/${Au.cloudName}/image/upload/${u}.jpg`,gu=new mu.A({linkify:!0}).use(Cu,{attrs:{target:"_blank",rel:"noopener noreferrer"}}),hu=u=>{try{const e=u.replace(/\\n/g,"\n"),t=Bu(e);return gu.render(t||u)}catch(e){return console.warn("Failed to render markdown: ",e),u}},Bu=u=>{let e=u;try{while(1){const u=e.replace(/((?:^|;|[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]))((?:[0-9A-Za-z\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0560-\u0588\u05D0-\u05EA\u05EF-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u0870-\u0887\u0889-\u088E\u08A0-\u08C9\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C5D\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D04-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16F1-\u16F8\u1700-\u1711\u171F-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1878\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4C\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C8A\u1C90-\u1CBA\u1CBD-\u1CBF\u1CE9-\u1CEC\u1CEE-\u1CF3\u1CF5\u1CF6\u1CFA\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u31A0-\u31BF\u31F0-\u31FF\u3400-\u4DBF\u4E00-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA7CD\uA7D0\uA7D1\uA7D3\uA7D5-\uA7DC\uA7F2-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA8FE\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB69\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF2D-\uDF40\uDF42-\uDF49\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF]|\uD801[\uDC00-\uDC9D\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDD70-\uDD7A\uDD7C-\uDD8A\uDD8C-\uDD92\uDD94\uDD95\uDD97-\uDDA1\uDDA3-\uDDB1\uDDB3-\uDDB9\uDDBB\uDDBC\uDDC0-\uDDF3\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67\uDF80-\uDF85\uDF87-\uDFB0\uDFB2-\uDFBA]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE35\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2\uDD00-\uDD23\uDD4A-\uDD65\uDD6F-\uDD85\uDE80-\uDEA9\uDEB0\uDEB1\uDEC2-\uDEC4\uDF00-\uDF1C\uDF27\uDF30-\uDF45\uDF70-\uDF81\uDFB0-\uDFC4\uDFE0-\uDFF6]|\uD804[\uDC03-\uDC37\uDC71\uDC72\uDC75\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD44\uDD47\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE2B\uDE3F\uDE40\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61\uDF80-\uDF89\uDF8B\uDF8E\uDF90-\uDFB5\uDFB7\uDFD1\uDFD3]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC5F-\uDC61\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE80-\uDEAA\uDEB8\uDF00-\uDF1A\uDF40-\uDF46]|\uD806[\uDC00-\uDC2B\uDCA0-\uDCDF\uDCFF-\uDD06\uDD09\uDD0C-\uDD13\uDD15\uDD16\uDD18-\uDD2F\uDD3F\uDD41\uDDA0-\uDDA7\uDDAA-\uDDD0\uDDE1\uDDE3\uDE00\uDE0B-\uDE32\uDE3A\uDE50\uDE5C-\uDE89\uDE9D\uDEB0-\uDEF8\uDFC0-\uDFE0]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC72-\uDC8F\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD30\uDD46\uDD60-\uDD65\uDD67\uDD68\uDD6A-\uDD89\uDD98\uDEE0-\uDEF2\uDF02\uDF04-\uDF10\uDF12-\uDF33\uDFB0]|\uD808[\uDC00-\uDF99]|\uD809[\uDC80-\uDD43]|\uD80B[\uDF90-\uDFF0]|[\uD80C\uD80E\uD80F\uD81C-\uD820\uD822\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883\uD885-\uD887][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2F\uDC41-\uDC46\uDC60-\uDFFF]|\uD810[\uDC00-\uDFFA]|\uD811[\uDC00-\uDE46]|\uD818[\uDD00-\uDD1D]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE70-\uDEBE\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDD40-\uDD6C\uDE40-\uDE7F\uDF00-\uDF4A\uDF50\uDF93-\uDF9F\uDFE0\uDFE1\uDFE3]|\uD821[\uDC00-\uDFF7]|\uD823[\uDC00-\uDCD5\uDCFF-\uDD08]|\uD82B[\uDFF0-\uDFF3\uDFF5-\uDFFB\uDFFD\uDFFE]|\uD82C[\uDC00-\uDD22\uDD32\uDD50-\uDD52\uDD55\uDD64-\uDD67\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD837[\uDF00-\uDF1E\uDF25-\uDF2A]|\uD838[\uDC30-\uDC6D\uDD00-\uDD2C\uDD37-\uDD3D\uDD4E\uDE90-\uDEAD\uDEC0-\uDEEB]|\uD839[\uDCD0-\uDCEB\uDDD0-\uDDED\uDDF0\uDFE0-\uDFE6\uDFE8-\uDFEB\uDFED\uDFEE\uDFF0-\uDFFE]|\uD83A[\uDC00-\uDCC4\uDD00-\uDD43\uDD4B]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDEDF\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF39\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0\uDFF0-\uDFFF]|\uD87B[\uDC00-\uDE5D]|\uD87E[\uDC00-\uDE1D]|\uD884[\uDC00-\uDF4A\uDF50-\uDFFF]|\uD888[\uDC00-\uDFAF]){1,4})(,?)[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]/g,"$1$2$3&nbsp;");if(u===e)break;e=u}return e}catch(t){return console.warn("Failed to prettify text: ",t),e}},vu=function(){var u=(0,nu.A)((function*(u){const e=(0,su.rJ)(Fu,u),t=(0,su.P)(e),o=yield(0,su.GG)(t),r=o.docs[0].data();return(0,au.A)((0,au.A)({},r),{},{portrait:{desktop:Eu(r.portrait.desktop),desktop_webp:Eu(r.portrait.desktop_webp),mobile:Eu(r.portrait.mobile),mobile_webp:Eu(r.portrait.mobile_webp)}})}));return function(e){return u.apply(this,arguments)}}(),fu=function(){var u=(0,nu.A)((function*(u){const{collectionName:e,projectsAmount:t,offset:o,sorting:r,filters:n}=u,a=(0,su.rJ)(Fu,e),i=[],D=[];let s=null;if(n&&Object.entries(n).forEach((([u,e])=>{"page"!==u&&"sorting"!==u&&i.push((0,su._M)(`tags.${u}`,"==",e))})),r&&i.push((0,su.My)("tags.year",r||"asc")),o>0){const u=(0,su.P)(a,...i,(0,su.AB)(o)),e=yield(0,su.GG)(u);s=e.docs[o-1]||null}s&&i.push((0,su.HM)(s)),i.push((0,su.AB)(t));const l=(0,su.P)(a,...i),c=yield(0,su.GG)(l),d=c.docs.map((u=>{const e=u.data();return(0,au.A)((0,au.A)({id:Number(u.id)},e),{},{cover_url:Eu(e.cover_url)})}));n&&Object.entries(n).forEach((([u,e])=>{"page"!==u&&"sorting"!==u&&D.push((0,su._M)(`tags.${u}`,"==",e))}));const F=(0,su.P)(a,...D),p=yield(0,su.d_)(F),A=p.data().count;return{fetchedProjects:d,totalProjects:A}}));return function(e){return u.apply(this,arguments)}}(),yu=function(){var u=(0,nu.A)((function*(u){try{const e=[];u&&Object.entries(u).forEach((([u,t])=>{"page"!==u&&"sorting"!==u&&e.push((0,su._M)(`tags.${u}`,"==",t))}));const t=(0,su.rJ)(Fu,"projects"),o=(0,su.P)(t,...e),r=yield(0,su.GG)(o),n={};r.forEach((u=>{const e=u.data();e.tags&&"object"===typeof e.tags&&Object.entries(e.tags).forEach((([u,e])=>{n[u]||(n[u]=new Set),Array.isArray(e)?e.forEach((e=>n[u].add(e))):n[u].add(e)}))}));const a=Object.fromEntries(Object.entries(n).map((([u,e])=>[u,Array.from(e)])));return a}catch(e){console.warn("Failed to load tags: ",e)}}));return function(e){return u.apply(this,arguments)}}(),ku=function(){var u=(0,nu.A)((function*(u,e){const t=(0,su.rJ)(Fu,u),o=(0,su.P)(t,(0,su._M)("slug","==",e)),r=yield(0,su.GG)(o);if(r.empty)return null;const n=r.docs.map((u=>{var e;const t=u.data(),o=null===t||void 0===t||null===(e=t.images)||void 0===e?void 0:e.map((u=>(0,au.A)((0,au.A)({},u),{},{url:Eu(u.url)})));return(0,au.A)((0,au.A)({id:Number(u.id)},t),{},{cover_url:Eu(t.cover_url),images:o})}));return n[0]}));return function(e,t){return u.apply(this,arguments)}}(),bu={class:"recent-section__item"},ju={class:"project-item__image-wrapper"},_u=["src","alt"],wu={class:"project-item__title"};function Lu(u,e,t,n,a,i){const s=(0,r.g2)("v-skeleton-loader"),l=(0,r.g2)("router-link");return(0,r.uX)(),(0,r.CE)("li",bu,[(0,r.bF)(l,{class:"project-item__link",to:u.projectUrl},{default:(0,r.k6)((()=>[(0,r.Lk)("div",ju,[u.isLoaded?(0,r.Q3)("",!0):((0,r.uX)(),(0,r.Wv)(s,{key:0,class:"project-item__image",type:"image"})),(0,r.bo)((0,r.Lk)("img",{class:"project-item__image",src:u.projectCoverUrl,width:"320",height:"320",alt:`Проект ${u.projectName}`,onLoad:e[0]||(e[0]=(...e)=>u.handleLoad&&u.handleLoad(...e)),onError:e[1]||(e[1]=(...e)=>u.handleError&&u.handleError(...e))},null,40,_u),[[o.aG,u.isLoaded]])]),(0,r.Lk)("span",wu,(0,D.v_)(u.projectName),1)])),_:1},8,["to"])])}var Pu=t(144),Mu=(0,r.pM)({name:"ABProjectItem",props:{projectName:{type:String,default:"Проект без названия 🤔"},projectUrl:{type:[String,Object],default:"/404"},projectCoverUrl:{type:String,default:"@images/blank-cover.jpg"}},setup(){const u=(0,Pu.KR)(!1),e=()=>{u.value=!0},t=()=>{u.value=!0,console.warn("Faialed to load image")};return{isLoaded:u,handleLoad:e,handleError:t}}});const xu=(0,h.A)(Mu,[["render",Lu]]);var Xu=xu;const Iu={class:"recent-section__item"},Su={class:"project-item__link"};function Wu(u,e,t,o,n,a){const i=(0,r.g2)("v-skeleton-loader");return(0,r.uX)(),(0,r.CE)("li",Iu,[(0,r.Lk)("div",Su,[(0,r.bF)(i,{type:"image, list-item",loading:u.loading},{default:(0,r.k6)((()=>[(0,r.RG)(u.$slots,"default")])),_:3},8,["loading"])])])}var Ou=(0,r.pM)({name:"ABProjectItemLoader",props:{loading:{type:Boolean,default:!0}}});const Tu=(0,h.A)(Ou,[["render",Wu]]);var Nu=Tu,$u=(0,r.pM)({name:"HomePage",components:{ABProjectItem:Xu,ABProjectItemLoader:Nu},data(){return{isLoadingMainData:!0,isLoadingProjects:!0,isPortraitLoaded:!1,projectsToShow:6,mainData:null,projects:[]}},methods:{handleLoadPortrait(){this.isPortraitLoaded=!0},showMainPageData(){var u=this;return(0,nu.A)((function*(){try{u.isLoadingMainData=!0,u.mainData=yield vu("main")}catch(e){console.warn("Failed to show main: ",e)}finally{u.isLoadingMainData=!1}}))()},showProjects(){var u=this;return(0,nu.A)((function*(){try{u.isLoadingProjects=!0,({fetchedProjects:u.projects}=yield fu({collectionName:"projects",projectsAmount:u.projectsToShow+1,offset:0,sorting:"desc"}))}catch(e){console.warn("Failed to show projects: ",e)}finally{u.isLoadingProjects=!1}}))()},renderMarkdown:hu,prettifyText:Bu},beforeMount(){this.showMainPageData(),this.showProjects()},computed:{recentProjects(){return this.projects.slice(0,this.projectsToShow)}}});const Ru=(0,h.A)($u,[["render",ru]]);var Gu=Ru;const zu={class:"not-found"},Hu={class:"container"},Uu={class:"not-found__grid"},Qu={class:"not-found__content"};function Ku(u,e,t,o,n,a){const i=(0,r.g2)("router-link");return(0,r.uX)(),(0,r.CE)("div",zu,[(0,r.Lk)("div",Hu,[(0,r.Lk)("div",Uu,[(0,r.Lk)("div",Qu,[e[1]||(e[1]=(0,r.Lk)("h1",null,"404 – Страница не найдена",-1)),(0,r.bF)(i,{class:"not-found__link",to:{name:"Home"}},{default:(0,r.k6)((()=>e[0]||(e[0]=[(0,r.eW)("Вернуться на главную")]))),_:1})])])])])}var Vu=(0,r.pM)({name:"NotFound"});const qu=(0,h.A)(Vu,[["render",Ku]]);var Ju=qu;const Yu={class:"projects-section"},Zu={key:0,class:"projects-section__filter"},ue={class:"container container--mobile-extended"},ee={class:"project-section__filter-grid"},te={class:"projects-section__results"},oe={class:"container"},re={class:"projects-section__results-grid"},ne={class:"recent-section__list"},ae={key:1,class:"projects-section__empty-list"};function ie(u,e,o,n,a,i){const D=(0,r.g2)("v-select"),s=(0,r.g2)("v-form"),l=(0,r.g2)("ABProjectItemLoader"),c=(0,r.g2)("ABProjectItem"),d=(0,r.g2)("v-pagination"),F=(0,r.g2)("v-empty-state");return(0,r.uX)(),(0,r.CE)("div",Yu,[u.isLoading||u.filters?((0,r.uX)(),(0,r.CE)("div",Zu,[(0,r.Lk)("div",ue,[(0,r.bF)(s,{class:"projects-section__filter-form"},{default:(0,r.k6)((()=>[(0,r.Lk)("div",ee,[((0,r.uX)(!0),(0,r.CE)(r.FK,null,(0,r.pI)(u.filters,((e,t)=>((0,r.uX)(),(0,r.Wv)(D,{modelValue:u.filterForm[t],"onUpdate:modelValue":e=>u.filterForm[t]=e,class:"project-section__filter-select",key:t,label:t,items:[...e],clearable:"",chips:"",variant:"outlined",density:"compact","hide-details":"","clear-icon":"mdil-minus-circle","menu-icon":"mdil-chevron-down"},null,8,["modelValue","onUpdate:modelValue","label","items"])))),128)),(0,r.bF)(D,{modelValue:u.filterForm["sorting"],"onUpdate:modelValue":e[0]||(e[0]=e=>u.filterForm["sorting"]=e),class:"project-section__filter-select",label:"Сортировка",items:[{title:"Сначала новые",value:"desc"},{title:"Сначала старые",value:"asc"}],clearable:"",variant:"outlined",density:"compact","hide-details":"","clear-icon":"mdil-minus-circle","menu-icon":"mdil-chevron-down"},null,8,["modelValue"])])])),_:1})])])):(0,r.Q3)("",!0),(0,r.Lk)("div",te,[(0,r.Lk)("div",oe,[(0,r.Lk)("div",re,[(0,r.Lk)("ul",ne,[u.isLoading?((0,r.uX)(!0),(0,r.CE)(r.FK,{key:0},(0,r.pI)(u.projectsPerPage,(e=>((0,r.uX)(),(0,r.Wv)(l,{key:e,loading:u.isLoading},null,8,["loading"])))),128)):u.showingProjects.length?((0,r.uX)(!0),(0,r.CE)(r.FK,{key:1},(0,r.pI)(u.showingProjects,(u=>((0,r.uX)(),(0,r.Wv)(c,{key:u.slug,projectName:u.name,projectUrl:{name:"Project",params:{projectSlug:u.slug}},projectCoverUrl:u.cover_url},null,8,["projectName","projectUrl","projectCoverUrl"])))),128)):(0,r.Q3)("",!0)]),u.pagesAmount>1?((0,r.uX)(),(0,r.Wv)(d,{key:0,modelValue:u.page,"onUpdate:modelValue":e[1]||(e[1]=e=>u.page=e),length:u.pagesAmount},null,8,["modelValue","length"])):(0,r.Q3)("",!0)])])]),u.isLoading||u.showingProjects.length?(0,r.Q3)("",!0):((0,r.uX)(),(0,r.CE)("div",ae,[(0,r.bF)(F,{title:"Проекты не найдены...",text:"Давайте вместе создадим нечто прекрасное!",image:t(3233)},null,8,["image"])]))])}t(3215),t(4520);var De=(0,r.pM)({name:"ProjectsPage",components:{ABProjectItem:Xu,ABProjectItemLoader:Nu},data(){return{page:1,projectsPerPage:6,isLoading:!0,showingProjects:[],totalProjects:0,filters:void 0,filterForm:{}}},methods:{showProjects(){var u=this;return(0,nu.A)((function*(){try{u.isLoading=!0;const e=(u.page-1)*u.projectsPerPage,t=(0,au.A)({},u.filterForm),o=t.sorting;delete t.sorting,({fetchedProjects:u.showingProjects,totalProjects:u.totalProjects}=yield fu({collectionName:"projects",projectsAmount:u.projectsPerPage,offset:e,sorting:o,filters:t}))}catch(e){console.warn("Failed to get projects from Firebase: ",e)}finally{u.isLoading=!1}}))()},setupFilters(){var u=this;return(0,nu.A)((function*(){const e=(0,au.A)({},u.filterForm);delete e.sorting,delete e.page,u.filters=yield yu(e)}))()},updateRouteQuery(){const u=Object.fromEntries(Object.entries(this.filterForm).filter((([,u])=>{if(u)return void 0!==u&&""!==u})));u.page=this.page.toString(),this.$router.push({query:u})},setFiltersFromQuery(){const u=this.$route.query;this.filterForm=Object.fromEntries(Object.entries(u).map((([u,e])=>Array.isArray(e)?[u,e[0]]:"year"===u?[u,Number(e)]:[u,e])));const e=Number(u.page);this.page=!isNaN(e)&&e>0?e:1}},beforeMount(){this.setFiltersFromQuery(),this.showProjects()},mounted(){this.setupFilters()},computed:{pagesAmount(){return Math.max(Math.ceil(this.totalProjects/this.projectsPerPage),1)}},watch:{"$route.query":{immediate:!0,handler(){this.setFiltersFromQuery(),this.showProjects()}},filterForm:{deep:!0,handler(u,e){const t=Object.keys(u).length===Object.keys(e||{}).length&&Object.keys(u).every((t=>"page"===t||u[t]===e[t]));t||(this.page=1),this.updateRouteQuery(),this.setupFilters()}},page:{immediate:!0,handler(){this.updateRouteQuery()}}}});const se=(0,h.A)(De,[["render",ie]]);var le=se;const ce={class:"project-section"},de={class:"container"},Fe={key:1,class:"project-section__heading"},pe={class:"project-section__tags-wrapper"},Ae={key:1,class:"project-section__tags-list"},me={class:"project-section__tag-key"},Ce=["innerHTML"],Ee={class:"project-section__gallery"},ge={key:0,class:"container container--mobile-extended"};function he(u,e,t,o,n,a){var i,s,l,c;const d=(0,r.g2)("v-skeleton-loader"),F=(0,r.g2)("router-link"),p=(0,r.g2)("ABGallery"),A=(0,r.g2)("v-icon"),m=(0,r.g2)("ABScrollTopButton");return(0,r.uX)(),(0,r.CE)("div",ce,[(0,r.Lk)("div",de,[u.isLoading?((0,r.uX)(),(0,r.Wv)(d,{key:0,class:"project-section__heading",type:"heading"})):((0,r.uX)(),(0,r.CE)("h1",Fe,(0,D.v_)(null===(i=u.projectData)||void 0===i?void 0:i.name),1)),(0,r.Lk)("div",pe,[u.isLoading?((0,r.uX)(),(0,r.Wv)(d,{key:0,class:"project-section__tag-key",type:"chip@4"})):((0,r.uX)(),(0,r.CE)("ul",Ae,[((0,r.uX)(!0),(0,r.CE)(r.FK,null,(0,r.pI)(u.sortedTags,(([u,e],t)=>((0,r.uX)(),(0,r.CE)("li",{class:"project-section__tag-item",key:t},[(0,r.Lk)("span",me,(0,D.v_)(u)+": ",1),(0,r.bF)(F,{to:`/projects?${u}=${encodeURIComponent(e.toString())}`},{default:(0,r.k6)((()=>[(0,r.eW)((0,D.v_)(e),1)])),_:2},1032,["to"])])))),128))]))]),u.isLoading?((0,r.uX)(),(0,r.Wv)(d,{key:2,class:"project-section__description",type:"text@10"})):((0,r.uX)(),(0,r.CE)("div",{key:3,class:"project-section__description",innerHTML:u.renderMarkdown((null===(s=u.projectData)||void 0===s?void 0:s.description)||"")},null,8,Ce))]),(0,r.Lk)("div",Ee,[u.isLoading?((0,r.uX)(),(0,r.CE)("div",ge,[(0,r.bF)(d,{type:"image"})])):u.projectData?((0,r.uX)(),(0,r.Wv)(p,{key:1,images:null===(l=u.projectData)||void 0===l?void 0:l.images,projectName:null===(c=u.projectData)||void 0===c?void 0:c.name},null,8,["images","projectName"])):(0,r.Q3)("",!0)]),(0,r.bF)(F,{class:"project-section__link",to:u.backLink},{default:(0,r.k6)((()=>[(0,r.bF)(A,{icon:"mdil-chevron-left"}),e[0]||(e[0]=(0,r.eW)(" Все проекты "))])),_:1},8,["to"]),(0,r.bF)(m)])}t(6910);const Be={class:"gallery"},ve={class:"container container--mobile-extended"},fe={class:"gallery__grid",ref:"gallery"};function ye(u,e,t,o,n,a){const i=(0,r.g2)("ABGalleryItem");return(0,r.uX)(),(0,r.CE)("div",Be,[(0,r.Lk)("div",ve,[(0,r.Lk)("div",fe,[((0,r.uX)(!0),(0,r.CE)(r.FK,null,(0,r.pI)(u.styledImages,((e,t)=>((0,r.uX)(),(0,r.CE)("div",{class:"gallery__item-wrapper",key:t},[(0,r.bF)(i,{"image-data":e,alt:t+" фото проекта "+u.projectName},null,8,["image-data","alt"])])))),128))],512)])])}const ke=["src","alt"];function be(u,e,t,n,a,i){const s=(0,r.g2)("v-skeleton-loader");return(0,r.uX)(),(0,r.CE)(r.FK,null,[u.isLoaded?(0,r.Q3)("",!0):((0,r.uX)(),(0,r.Wv)(s,{key:0,class:"gallery__item",type:"image",style:(0,D.Tr)(`\n\t\t\twidth: ${u.imageData.maxWidth};\n\t\t\theight: ${u.imageData.maxWidth&&parseFloat(u.imageData.maxWidth)*u.imageData.heightRatio}px;\n\t\t`)},null,8,["style"])),(0,r.bo)((0,r.Lk)("img",{class:"gallery__item",src:u.imageData.url,alt:u.alt,style:(0,D.Tr)(`width: ${u.imageData.maxWidth}`),onLoad:e[0]||(e[0]=(...e)=>u.handleLoad&&u.handleLoad(...e)),onError:e[1]||(e[1]=(...e)=>u.handleError&&u.handleError(...e))},null,44,ke),[[o.aG,u.isLoaded]])],64)}var je=(0,r.pM)({name:"ABGalleryItem",props:{imageData:{type:Object,required:!0},alt:{type:String,required:!0}},setup(){const u=(0,Pu.KR)(!1),e=()=>{u.value=!0},t=()=>{u.value=!0,console.warn("Faialed to load image")};return{isLoaded:u,handleLoad:e,handleError:t}}});const _e=(0,h.A)(je,[["render",be]]);var we=_e,Le=(0,r.pM)({name:"ABGallery",components:{ABGalleryItem:we},props:{images:{type:Array,required:!0},projectName:{type:String,required:!0}},data(){return{maxImageHeightScreenRatio:.85,maxPortraitWidth:null,isImagesLoading:!0,styledImages:[]}},methods:{mapImages(){var u=this;return(0,nu.A)((function*(){try{u.isImagesLoading=!0,u.styledImages=yield Promise.all(u.images.map(function(){var u=(0,nu.A)((function*(u){return{url:u.url,orientation:u.width>u.height?"landscape":"portrait",naturalWidth:u.width,naturalHeight:u.height,heightRatio:u.height/u.width}}));return function(e){return u.apply(this,arguments)}}())),u.styleImages()}catch(e){console.warn("Failed to map images: ",e)}finally{u.isImagesLoading=!1}}))()},styleImages(){try{const u=this.$refs.gallery,e=u.clientWidth,t=window.getComputedStyle(u).getPropertyValue("gap"),o=isNaN(parseFloat(t))?20:parseFloat(t),r=e/2-o/2,n=window.screen.height*this.maxImageHeightScreenRatio;this.styledImages.forEach((u=>{if("portrait"===u.orientation&&u.naturalWidth&&u.naturalHeight){const t=e*u.heightRatio<=n;u.maxWidth=t?e+"px":r+"px"}else"landscape"===u.orientation&&(u.maxWidth=e+"px")}))}catch(u){console.log("Failed to style images: ",u)}}},beforeMount(){this.mapImages()},mounted(){window.addEventListener("resize",this.styleImages)},beforeUnmount(){window.removeEventListener("resize",this.styleImages)}});const Pe=(0,h.A)(Le,[["render",ye]]);var Me=Pe;function xe(u,e,t,o,n,a){const i=(0,r.g2)("v-icon");return(0,r.uX)(),(0,r.CE)("button",{class:(0,D.C4)(["scroll-top-button",{"scroll-top-button--hidden":!u.needShowButton}]),type:"button","aria-label":"Наверх страницы",onClick:e[0]||(e[0]=(...e)=>u.scrollTop&&u.scrollTop(...e))},[(0,r.bF)(i,{size:"large",icon:"mdil-chevron-up",role:"img","aria-hidden":"false"})],2)}var Xe=t(8626),Ie=(0,r.pM)({name:"ABScrollTopButton",setup(){const u=(0,Pu.KR)(!1),e=15,t=(0,Pu.KR)(0),o=100,n=()=>{const o=window.scrollY;o>window.innerHeight?(o>t.value?u.value=!1:o-e<t.value&&(u.value=!0),t.value=o):u.value=!1},a=(0,Xe.throttle)(n,o),i=()=>{window.scrollTo({top:0,behavior:"smooth"})};return(0,r.sV)((()=>{window.addEventListener("scroll",a)})),(0,r.xo)((()=>{window.removeEventListener("scroll",a)})),{needShowButton:u,scrollTop:i}}});const Se=(0,h.A)(Ie,[["render",xe]]);var We=Se,Oe=(0,r.pM)({name:"ProjectPage",components:{ABGallery:Me,ABScrollTopButton:We},data(){return{isLoading:!0,projectData:null}},methods:{showProject(){var u=this;return(0,nu.A)((function*(){try{u.isLoading=!0;const e=Array.isArray(u.$route.params.projectSlug)?u.$route.params.projectSlug[0]:u.$route.params.projectSlug,t=yield ku("projects",e);u.projectData=t}catch(e){console.warn("Failed to get project from Firebase: ",e)}finally{u.isLoading=!1}}))()},renderMarkdown:hu},mounted(){this.showProject()},computed:{sortedTags(){if(!this.projectData||!this.projectData.tags)return[];const u=["make","model","chassis","year"];return Object.entries(this.projectData.tags).sort(((e,t)=>{const o=u.indexOf(e[0]),r=u.indexOf(t[0]);return-1===o&&-1===r?e[0].localeCompare(t[0]):-1===o?1:-1===r?-1:o-r}))},backLink(){const u=ze();return u&&"Home"!==u.name?u.fullPath:{name:"Projects"}}}});const Te=(0,h.A)(Oe,[["render",he]]);var Ne=Te;const $e=[{path:"/",name:"Home",component:Gu},{path:"/projects",name:"Projects",component:le},{path:"/project/:projectSlug",name:"Project",component:Ne},{path:"/:pathMatch(.*)*",name:"NotFound",component:Ju}],Re=(0,m.aE)({history:(0,m.LA)("/AlexBelostozky-photo/"),routes:$e,scrollBehavior(u,e,t){return t||{top:0}}});let Ge=null;const ze=()=>Ge;Re.beforeEach(((u,e,t)=>{e.name&&(Ge=e),t()}));var He=Re,Ue=(t(5524),t(7768)),Qe=t(1920),Ke=t(5741),Ve=t(4581);const qe={collapse:"mdil-chevron-up",complete:"mdil-check",cancel:"mdil-close-circle",close:"mdil-close",delete:"mdil-close-circle",clear:"mdil-close-circle",success:"mdil-check-circle",info:"mdil-information",warning:"mdil-alert-circle",error:"mdil-close-circle",prev:"mdil-chevron-left",next:"mdil-chevron-right",checkboxOn:"mdil-checkbox-marked",checkboxOff:"mdil-checkbox-blank-outline",checkboxIndeterminate:"mdil-minus-box",delimiter:"mdil-circle",sortAsc:"mdil-arrow-up",sortDesc:"mdil-arrow-down",expand:"mdil-chevron-down",menu:"mdil-menu",subgroup:"mdil-menu-down",dropdown:"mdil-menu-down",radioOn:"mdil-radiobox-marked",radioOff:"mdil-radiobox-blank",edit:"mdil-pencil",ratingEmpty:"mdil-star-outline",ratingFull:"mdil-star",ratingHalf:"mdil-star-half-full",loading:"mdil-cached",first:"mdil-page-first",last:"mdil-page-last",unfold:"mdil-unfold-more-horizontal",file:"mdil-paperclip",plus:"mdil-plus",minus:"mdil-minus",calendar:"mdil-calendar",treeviewCollapse:"mdil-menu-down",treeviewExpand:"mdil-menu-right",eyeDropper:"mdil-eyedropper",upload:"mdil-cloud-upload"},Je={component:u=>(0,r.h)(Ve.GP,(0,au.A)((0,au.A)({},u),{},{class:"mdil"}))};var Ye=(0,Ue.$N)({components:Qe,directives:Ke,icons:{defaultSet:"mdil",aliases:qe,sets:{mdil:Je}},defaults:{global:{ripple:!1}}});const Ze=(0,o.Ef)(G);Ze.use(He),Ze.use(Ye),Ze.provide("firebaseApp",cu),Ze.provide("firebaseAnalytics",du),Ze.provide("db",Fu);const ut=new URLSearchParams(window.location.search),et=ut.get("redirect");et&&(history.replaceState(null,"",window.location.pathname),He.push(et)),Ze.mount("#app")},3233:function(u,e,t){u.exports=t.p+"img/no-projects.09300997.svg"}},e={};function t(o){var r=e[o];if(void 0!==r)return r.exports;var n=e[o]={id:o,loaded:!1,exports:{}};return u[o].call(n.exports,n,n.exports,t),n.loaded=!0,n.exports}t.m=u,function(){var u=[];t.O=function(e,o,r,n){if(!o){var a=1/0;for(l=0;l<u.length;l++){o=u[l][0],r=u[l][1],n=u[l][2];for(var i=!0,D=0;D<o.length;D++)(!1&n||a>=n)&&Object.keys(t.O).every((function(u){return t.O[u](o[D])}))?o.splice(D--,1):(i=!1,n<a&&(a=n));if(i){u.splice(l--,1);var s=r();void 0!==s&&(e=s)}}return e}n=n||0;for(var l=u.length;l>0&&u[l-1][2]>n;l--)u[l]=u[l-1];u[l]=[o,r,n]}}(),function(){t.n=function(u){var e=u&&u.__esModule?function(){return u["default"]}:function(){return u};return t.d(e,{a:e}),e}}(),function(){t.d=function(u,e){for(var o in e)t.o(e,o)&&!t.o(u,o)&&Object.defineProperty(u,o,{enumerable:!0,get:e[o]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(u){if("object"===typeof window)return window}}()}(),function(){t.o=function(u,e){return Object.prototype.hasOwnProperty.call(u,e)}}(),function(){t.r=function(u){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(u,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(u,"__esModule",{value:!0})}}(),function(){t.nmd=function(u){return u.paths=[],u.children||(u.children=[]),u}}(),function(){t.p="/AlexBelostozky-photo/"}(),function(){var u={524:0};t.O.j=function(e){return 0===u[e]};var e=function(e,o){var r,n,a=o[0],i=o[1],D=o[2],s=0;if(a.some((function(e){return 0!==u[e]}))){for(r in i)t.o(i,r)&&(t.m[r]=i[r]);if(D)var l=D(t)}for(e&&e(o);s<a.length;s++)n=a[s],t.o(u,n)&&u[n]&&u[n][0](),u[n]=0;return t.O(l)},o=self["webpackChunkalexbelostozky_photo"]=self["webpackChunkalexbelostozky_photo"]||[];o.forEach(e.bind(null,0)),o.push=e.bind(null,o.push.bind(o))}();var o=t.O(void 0,[504],(function(){return t(4635)}));o=t.O(o)})();
//# sourceMappingURL=app.1c95a216.js.map