/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 919:
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {


// EXTERNAL MODULE: ./node_modules/core-js/modules/es.promise.js
var es_promise = __webpack_require__(3362);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.promise.finally.js
var es_promise_finally = __webpack_require__(9391);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.push.js
var es_array_push = __webpack_require__(4114);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.regexp.exec.js
var es_regexp_exec = __webpack_require__(7495);
// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-collections.iterator.js
var web_dom_collections_iterator = __webpack_require__(2953);
// EXTERNAL MODULE: ./node_modules/core-js/modules/web.url-search-params.js
var web_url_search_params = __webpack_require__(8408);
// EXTERNAL MODULE: ./node_modules/core-js/modules/web.url-search-params.delete.js
var web_url_search_params_delete = __webpack_require__(4603);
// EXTERNAL MODULE: ./node_modules/core-js/modules/web.url-search-params.has.js
var web_url_search_params_has = __webpack_require__(7566);
// EXTERNAL MODULE: ./node_modules/core-js/modules/web.url-search-params.size.js
var web_url_search_params_size = __webpack_require__(8721);
// EXTERNAL MODULE: ./node_modules/@vue/runtime-dom/dist/runtime-dom.esm-bundler.js
var runtime_dom_esm_bundler = __webpack_require__(5130);
// EXTERNAL MODULE: ./node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js
var runtime_core_esm_bundler = __webpack_require__(6768);
;// ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[5]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/App.vue?vue&type=template&id=7e45df6e

function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_router_view = (0,runtime_core_esm_bundler/* resolveComponent */.g2)("router-view");
  const _component_main_layout = (0,runtime_core_esm_bundler/* resolveComponent */.g2)("main-layout");
  return (0,runtime_core_esm_bundler/* openBlock */.uX)(), (0,runtime_core_esm_bundler/* createBlock */.Wv)(_component_main_layout, null, {
    default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createVNode */.bF)(_component_router_view)]),
    _: 1
  });
}
;// ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[5]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/layouts/MainLayout.vue?vue&type=template&id=19626b38

function MainLayoutvue_type_template_id_19626b38_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_ABHeader = (0,runtime_core_esm_bundler/* resolveComponent */.g2)("ABHeader");
  const _component_ABFooter = (0,runtime_core_esm_bundler/* resolveComponent */.g2)("ABFooter");
  return (0,runtime_core_esm_bundler/* openBlock */.uX)(), (0,runtime_core_esm_bundler/* createElementBlock */.CE)(runtime_core_esm_bundler/* Fragment */.FK, null, [(0,runtime_core_esm_bundler/* createVNode */.bF)(_component_ABHeader), (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("main", null, [(0,runtime_core_esm_bundler/* renderSlot */.RG)(_ctx.$slots, "default")]), (0,runtime_core_esm_bundler/* createVNode */.bF)(_component_ABFooter)], 64);
}
// EXTERNAL MODULE: ./node_modules/@vue/shared/dist/shared.esm-bundler.js
var shared_esm_bundler = __webpack_require__(4232);
;// ./src/assets/images/logo.svg
var logo_namespaceObject = __webpack_require__.p + "img/logo.7a3bac9d.svg";
;// ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js!./node_modules/ts-loader/index.js??clonedRuleSet-42.use[2]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[5]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/ABHeader.vue?vue&type=template&id=19489448&ts=true


const _hoisted_1 = {
  class: "container"
};
const _hoisted_2 = {
  class: "header__container"
};
const _hoisted_3 = {
  key: 1,
  class: "header__logo",
  src: logo_namespaceObject,
  width: "240px",
  alt: "Логотип"
};
const _hoisted_4 = {
  class: "header__navigation",
  id: "top"
};
const _hoisted_5 = {
  class: "header__navigation-list"
};
function ABHeadervue_type_template_id_19489448_ts_true_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_router_link = (0,runtime_core_esm_bundler/* resolveComponent */.g2)("router-link");
  const _component_ABBurgerButton = (0,runtime_core_esm_bundler/* resolveComponent */.g2)("ABBurgerButton");
  return (0,runtime_core_esm_bundler/* openBlock */.uX)(), (0,runtime_core_esm_bundler/* createElementBlock */.CE)("header", {
    class: (0,shared_esm_bundler/* normalizeClass */.C4)(['header', {
      'header--opened': _ctx.isMobileMenuShown
    }])
  }, [(0,runtime_core_esm_bundler/* createElementVNode */.Lk)("div", _hoisted_1, [(0,runtime_core_esm_bundler/* createElementVNode */.Lk)("div", _hoisted_2, [_ctx.isNotHomePage ? ((0,runtime_core_esm_bundler/* openBlock */.uX)(), (0,runtime_core_esm_bundler/* createBlock */.Wv)(_component_router_link, {
    key: 0,
    to: {
      name: 'Home'
    },
    "aria-label": "На главную",
    onClick: _cache[0] || (_cache[0] = $event => _ctx.toggleMenu(false))
  }, {
    default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => _cache[3] || (_cache[3] = [(0,runtime_core_esm_bundler/* createElementVNode */.Lk)("img", {
      class: "header__logo",
      src: logo_namespaceObject,
      width: "240px",
      alt: "Логотип"
    }, null, -1)])),
    _: 1
  })) : ((0,runtime_core_esm_bundler/* openBlock */.uX)(), (0,runtime_core_esm_bundler/* createElementBlock */.CE)("img", _hoisted_3)), (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("nav", _hoisted_4, [_ctx.isMobile ? ((0,runtime_core_esm_bundler/* openBlock */.uX)(), (0,runtime_core_esm_bundler/* createBlock */.Wv)(_component_ABBurgerButton, {
    key: 0,
    class: "header__navigation-button",
    isMenuExpanded: _ctx.isMobileMenuShown,
    text: _ctx.isMobileMenuShown ? 'Скрыть меню' : 'Открыть меню',
    onClick: _cache[1] || (_cache[1] = $event => _ctx.toggleMenu())
  }, null, 8, ["isMenuExpanded", "text"])) : (0,runtime_core_esm_bundler/* createCommentVNode */.Q3)("", true), (0,runtime_core_esm_bundler/* withDirectives */.bo)((0,runtime_core_esm_bundler/* createElementVNode */.Lk)("ul", _hoisted_5, [((0,runtime_core_esm_bundler/* openBlock */.uX)(true), (0,runtime_core_esm_bundler/* createElementBlock */.CE)(runtime_core_esm_bundler/* Fragment */.FK, null, (0,runtime_core_esm_bundler/* renderList */.pI)(_ctx.linksList, link => {
    return (0,runtime_core_esm_bundler/* openBlock */.uX)(), (0,runtime_core_esm_bundler/* createElementBlock */.CE)("li", {
      class: "header__navigation-item",
      key: link.url
    }, [((0,runtime_core_esm_bundler/* openBlock */.uX)(), (0,runtime_core_esm_bundler/* createBlock */.Wv)((0,runtime_core_esm_bundler/* resolveDynamicComponent */.$y)(link.isRouter ? 'router-link' : 'a'), {
      class: "header__navigation-link",
      to: link.isRouter ? {
        name: link.url
      } : undefined,
      href: link.isRouter ? undefined : link.url,
      onClick: _cache[2] || (_cache[2] = $event => _ctx.toggleMenu(false))
    }, {
      default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createTextVNode */.eW)((0,shared_esm_bundler/* toDisplayString */.v_)(link.name), 1)]),
      _: 2
    }, 1032, ["to", "href"]))]);
  }), 128))], 512), [[runtime_dom_esm_bundler/* vShow */.aG, !_ctx.isMobile || _ctx.isMobileMenuShown]])])])])], 2);
}
;// ./src/components/ABHeader.vue?vue&type=template&id=19489448&ts=true

// EXTERNAL MODULE: ./node_modules/vue-router/dist/vue-router.mjs
var vue_router = __webpack_require__(1387);
;// ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js!./node_modules/ts-loader/index.js??clonedRuleSet-42.use[2]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[5]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/UI/ABBurgerButton.vue?vue&type=template&id=8d5c7b40&ts=true

const ABBurgerButtonvue_type_template_id_8d5c7b40_ts_true_hoisted_1 = ["aria-label"];
function ABBurgerButtonvue_type_template_id_8d5c7b40_ts_true_render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,runtime_core_esm_bundler/* openBlock */.uX)(), (0,runtime_core_esm_bundler/* createElementBlock */.CE)("button", {
    class: (0,shared_esm_bundler/* normalizeClass */.C4)(['burger-button', {
      'burger-button--expanded': _ctx.isMenuExpanded
    }]),
    type: "button",
    "aria-label": _ctx.text
  }, _cache[0] || (_cache[0] = [(0,runtime_core_esm_bundler/* createElementVNode */.Lk)("div", {
    class: "burger-burger"
  }, [(0,runtime_core_esm_bundler/* createElementVNode */.Lk)("div"), (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("div"), (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("div")], -1)]), 10, ABBurgerButtonvue_type_template_id_8d5c7b40_ts_true_hoisted_1);
}
;// ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js!./node_modules/ts-loader/index.js??clonedRuleSet-42.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/UI/ABBurgerButton.vue?vue&type=script&lang=ts

/* harmony default export */ var ABBurgerButtonvue_type_script_lang_ts = ((0,runtime_core_esm_bundler/* defineComponent */.pM)({
  name: 'ABBurgerButton',
  props: {
    isMenuExpanded: {
      type: Boolean,
      default: false
    },
    text: {
      type: String,
      default: ''
    }
  }
}));
;// ./src/components/UI/ABBurgerButton.vue?vue&type=script&lang=ts
 
;// ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-27.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-27.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-27.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-27.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/UI/ABBurgerButton.vue?vue&type=style&index=0&id=8d5c7b40&lang=sass
// extracted by mini-css-extract-plugin

;// ./src/components/UI/ABBurgerButton.vue?vue&type=style&index=0&id=8d5c7b40&lang=sass

// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(1241);
;// ./src/components/UI/ABBurgerButton.vue




;


const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.A)(ABBurgerButtonvue_type_script_lang_ts, [['render',ABBurgerButtonvue_type_template_id_8d5c7b40_ts_true_render]])

/* harmony default export */ var ABBurgerButton = (__exports__);
;// ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js!./node_modules/ts-loader/index.js??clonedRuleSet-42.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/ABHeader.vue?vue&type=script&lang=ts



/* harmony default export */ var ABHeadervue_type_script_lang_ts = ((0,runtime_core_esm_bundler/* defineComponent */.pM)({
  name: 'ABHeader',
  props: {},
  data() {
    return {
      isMobileMenuShown: false,
      isMobile: false,
      linksList: [{
        name: 'Проекты',
        url: 'Projects',
        isRouter: true
      }, {
        name: 'Контакты',
        url: '#contacts',
        isRouter: false
      }]
    };
  },
  setup() {
    const route = (0,vue_router/* useRoute */.lq)();
    return {
      route
    };
  },
  computed: {
    isNotHomePage() {
      return this.route.path !== '/';
    }
  },
  methods: {
    toggleMenu(forceShow = undefined) {
      this.isMobileMenuShown = !this.isMobileMenuShown;
      if (forceShow !== undefined) {
        this.isMobileMenuShown = forceShow;
      }
      this.isMobileMenuShown ? this.blockBody() : this.unblockBody();
    },
    blockBody() {
      document.body.classList.add('blocked-scroll');
    },
    unblockBody() {
      document.body.classList.remove('blocked-scroll');
    },
    checkIfMobile() {
      this.isMobile = window.innerWidth <= 768;
    },
    onWindowResize() {
      this.checkIfMobile();
      this.toggleMenu(false);
    }
  },
  mounted() {
    this.checkIfMobile();
    window.addEventListener('resize', this.onWindowResize);
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.onWindowResize);
  },
  components: {
    ABBurgerButton: ABBurgerButton
  }
}));
;// ./src/components/ABHeader.vue?vue&type=script&lang=ts
 
;// ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-27.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-27.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-27.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-27.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/ABHeader.vue?vue&type=style&index=0&id=19489448&lang=sass
// extracted by mini-css-extract-plugin

;// ./src/components/ABHeader.vue?vue&type=style&index=0&id=19489448&lang=sass

;// ./src/components/ABHeader.vue




;


const ABHeader_exports_ = /*#__PURE__*/(0,exportHelper/* default */.A)(ABHeadervue_type_script_lang_ts, [['render',ABHeadervue_type_template_id_19489448_ts_true_render]])

/* harmony default export */ var ABHeader = (ABHeader_exports_);
;// ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[5]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/ABFooter.vue?vue&type=template&id=06b4c2fa

const ABFootervue_type_template_id_06b4c2fa_hoisted_1 = {
  class: "footer",
  id: "contacts"
};
const ABFootervue_type_template_id_06b4c2fa_hoisted_2 = {
  class: "container"
};
const ABFootervue_type_template_id_06b4c2fa_hoisted_3 = {
  class: "footer__container"
};
const ABFootervue_type_template_id_06b4c2fa_hoisted_4 = {
  class: "footer__social-list"
};
const ABFootervue_type_template_id_06b4c2fa_hoisted_5 = {
  class: "footer__social-item"
};
const _hoisted_6 = {
  class: "footer__social-item"
};
function ABFootervue_type_template_id_06b4c2fa_render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,runtime_core_esm_bundler/* openBlock */.uX)(), (0,runtime_core_esm_bundler/* createElementBlock */.CE)("footer", ABFootervue_type_template_id_06b4c2fa_hoisted_1, [(0,runtime_core_esm_bundler/* createElementVNode */.Lk)("div", ABFootervue_type_template_id_06b4c2fa_hoisted_2, [(0,runtime_core_esm_bundler/* createElementVNode */.Lk)("div", ABFootervue_type_template_id_06b4c2fa_hoisted_3, [(0,runtime_core_esm_bundler/* createElementVNode */.Lk)("ul", ABFootervue_type_template_id_06b4c2fa_hoisted_4, [(0,runtime_core_esm_bundler/* createElementVNode */.Lk)("li", ABFootervue_type_template_id_06b4c2fa_hoisted_5, [(0,runtime_core_esm_bundler/* createElementVNode */.Lk)("a", {
    class: "footer__social-link",
    href: "https://www.instagram.com/alexbelostozky/",
    style: (0,shared_esm_bundler/* normalizeStyle */.Tr)(`mask-image: url(${$data.instagramIcon})`),
    target: "_blank"
  }, null, 4)]), (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("li", _hoisted_6, [(0,runtime_core_esm_bundler/* createElementVNode */.Lk)("a", {
    class: "footer__social-link",
    href: "https://www.behance.net/alexbelostozky",
    style: (0,shared_esm_bundler/* normalizeStyle */.Tr)(`mask-image: url(${$data.behanceIcon})`),
    target: "_blank"
  }, null, 4)])]), _cache[0] || (_cache[0] = (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("a", {
    class: "footer__tel-link",
    href: "tel:+79996269606"
  }, " +7 705 804 59 82 ", -1))])])]);
}
;// ./src/components/ABFooter.vue?vue&type=template&id=06b4c2fa

;// ./src/assets/images/icons/inst-icon.svg
var inst_icon_namespaceObject = __webpack_require__.p + "img/inst-icon.663a7253.svg";
;// ./src/assets/images/icons/behance-icon.svg
var behance_icon_namespaceObject = __webpack_require__.p + "img/behance-icon.396fa494.svg";
;// ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/ABFooter.vue?vue&type=script&lang=js


/* harmony default export */ var ABFootervue_type_script_lang_js = ({
  name: 'ABFooter',
  props: {},
  data() {
    return {
      instagramIcon: inst_icon_namespaceObject,
      behanceIcon: behance_icon_namespaceObject
    };
  }
});
;// ./src/components/ABFooter.vue?vue&type=script&lang=js
 
;// ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-27.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-27.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-27.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-27.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/ABFooter.vue?vue&type=style&index=0&id=06b4c2fa&lang=sass
// extracted by mini-css-extract-plugin

;// ./src/components/ABFooter.vue?vue&type=style&index=0&id=06b4c2fa&lang=sass

;// ./src/components/ABFooter.vue




;


const ABFooter_exports_ = /*#__PURE__*/(0,exportHelper/* default */.A)(ABFootervue_type_script_lang_js, [['render',ABFootervue_type_template_id_06b4c2fa_render]])

/* harmony default export */ var ABFooter = (ABFooter_exports_);
;// ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/layouts/MainLayout.vue?vue&type=script&lang=js


/* harmony default export */ var MainLayoutvue_type_script_lang_js = ({
  name: 'MainLayout',
  components: {
    ABHeader: ABHeader,
    ABFooter: ABFooter
  }
});
;// ./src/layouts/MainLayout.vue?vue&type=script&lang=js
 
;// ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-27.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-27.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-27.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-27.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/layouts/MainLayout.vue?vue&type=style&index=0&id=19626b38&lang=sass
// extracted by mini-css-extract-plugin

;// ./src/layouts/MainLayout.vue?vue&type=style&index=0&id=19626b38&lang=sass

;// ./src/layouts/MainLayout.vue




;


const MainLayout_exports_ = /*#__PURE__*/(0,exportHelper/* default */.A)(MainLayoutvue_type_script_lang_js, [['render',MainLayoutvue_type_template_id_19626b38_render]])

/* harmony default export */ var MainLayout = (MainLayout_exports_);
;// ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/App.vue?vue&type=script&lang=js

/* harmony default export */ var Appvue_type_script_lang_js = ({
  name: 'App',
  components: {
    MainLayout: MainLayout
  }
});
;// ./src/App.vue?vue&type=script&lang=js
 
;// ./src/App.vue




;
const App_exports_ = /*#__PURE__*/(0,exportHelper/* default */.A)(Appvue_type_script_lang_js, [['render',render]])

/* harmony default export */ var App = (App_exports_);
;// ./src/assets/images/content/portrait-mobile.webp
var portrait_mobile_namespaceObject = __webpack_require__.p + "img/portrait-mobile.7433abb3.webp";
;// ./src/assets/images/content/portrait-mobile.jpg
var images_content_portrait_mobile_namespaceObject = __webpack_require__.p + "img/portrait-mobile.18790b04.jpg";
;// ./src/assets/images/content/portrait.webp
var portrait_namespaceObject = __webpack_require__.p + "img/portrait.21863370.webp";
;// ./src/assets/images/content/portrait.jpg
var images_content_portrait_namespaceObject = __webpack_require__.p + "img/portrait.bb0002ba.jpg";
;// ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js!./node_modules/ts-loader/index.js??clonedRuleSet-42.use[2]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[5]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/pages/HomePage.vue?vue&type=template&id=47931b38&ts=true





const HomePagevue_type_template_id_47931b38_ts_true_hoisted_1 = portrait_mobile_namespaceObject;
const HomePagevue_type_template_id_47931b38_ts_true_hoisted_2 = images_content_portrait_mobile_namespaceObject;
const HomePagevue_type_template_id_47931b38_ts_true_hoisted_3 = portrait_namespaceObject;
const HomePagevue_type_template_id_47931b38_ts_true_hoisted_4 = {
  class: "recent-section",
  id: "works"
};
const HomePagevue_type_template_id_47931b38_ts_true_hoisted_5 = {
  class: "container"
};
const HomePagevue_type_template_id_47931b38_ts_true_hoisted_6 = {
  class: "recent-section__list"
};
function HomePagevue_type_template_id_47931b38_ts_true_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_ABProjectItem = (0,runtime_core_esm_bundler/* resolveComponent */.g2)("ABProjectItem");
  const _component_router_link = (0,runtime_core_esm_bundler/* resolveComponent */.g2)("router-link");
  return (0,runtime_core_esm_bundler/* openBlock */.uX)(), (0,runtime_core_esm_bundler/* createElementBlock */.CE)(runtime_core_esm_bundler/* Fragment */.FK, null, [_cache[1] || (_cache[1] = (0,runtime_core_esm_bundler/* createStaticVNode */.Fv)("<section class=\"about-section\"><div class=\"container\" id=\"about\"><div class=\"about-section__grid\"><div class=\"about-section__portrait\"><picture><source media=\"(max-width: 768px)\" srcset=\"" + HomePagevue_type_template_id_47931b38_ts_true_hoisted_1 + "\" type=\"image/webp\"><source media=\"(max-width: 768px)\" srcset=\"" + HomePagevue_type_template_id_47931b38_ts_true_hoisted_2 + "\" type=\"image/jpeg\"><source srcset=\"" + HomePagevue_type_template_id_47931b38_ts_true_hoisted_3 + "\" type=\"image/webp\"><img src=\"" + images_content_portrait_namespaceObject + "\" width=\"248\" height=\"248\" alt=\"Александр Белостоцкий\"></picture></div><h1 class=\"about-section__story-heading\">Искусство<br> во всём</h1><div class=\"about-section__story-text-wrapper\"><p class=\"about-section__story-text\"> Ну или почти во всём 😀 </p><p class=\"about-section__story-text\"> Так уж сложилось, что подавляющая часть того, что мы видим каждый день, можем потрогать, используем в своей повседневной жизни создано людьми. Но с какого-то момента я начал воспринимать некоторые вещи как объекты искусства. И убеждён, что в любой вещи можно его найти. Ведь каждая вещь так или иначе характеризует мир, в котором мы живём, является срезом культуры того времени, когда она  была создана. И это отчасти является причиной основной тематики моих фотографий. </p><p class=\"about-section__story-text\"> Автомобили, особенно которые <a href=\"https://www.instagram.com/explore/tags/такихуженеделают/\" target=\"_blank\">#ТакихУжеНеДелают</a>, являются результатом творчества огромного числа инженеров, дизайнеров и учёных. Именно поэтому я чувствую огромное желание запечатлеть эти образцы культуры и показать их вам. </p></div></div></div></section>", 1)), (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("section", HomePagevue_type_template_id_47931b38_ts_true_hoisted_4, [(0,runtime_core_esm_bundler/* createElementVNode */.Lk)("div", HomePagevue_type_template_id_47931b38_ts_true_hoisted_5, [(0,runtime_core_esm_bundler/* createElementVNode */.Lk)("ul", HomePagevue_type_template_id_47931b38_ts_true_hoisted_6, [((0,runtime_core_esm_bundler/* openBlock */.uX)(true), (0,runtime_core_esm_bundler/* createElementBlock */.CE)(runtime_core_esm_bundler/* Fragment */.FK, null, (0,runtime_core_esm_bundler/* renderList */.pI)(_ctx.recentProjects, project => {
    return (0,runtime_core_esm_bundler/* openBlock */.uX)(), (0,runtime_core_esm_bundler/* createBlock */.Wv)(_component_ABProjectItem, {
      key: project.url,
      projectName: project.name,
      projectUrl: project.url,
      projectCoverUrl: project.coverUrl
    }, null, 8, ["projectName", "projectUrl", "projectCoverUrl"]);
  }), 128))]), _ctx.projects.length > 6 ? ((0,runtime_core_esm_bundler/* openBlock */.uX)(), (0,runtime_core_esm_bundler/* createBlock */.Wv)(_component_router_link, {
    key: 0,
    to: {
      name: 'Projects'
    }
  }, {
    default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => _cache[0] || (_cache[0] = [(0,runtime_core_esm_bundler/* createTextVNode */.eW)("Все проекты")])),
    _: 1
  })) : (0,runtime_core_esm_bundler/* createCommentVNode */.Q3)("", true)])])], 64);
}
;// ./src/pages/HomePage.vue?vue&type=template&id=47931b38&ts=true

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(388);
;// ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[5]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/ABProjectItem.vue?vue&type=template&id=4476e742

const ABProjectItemvue_type_template_id_4476e742_hoisted_1 = {
  class: "recent-section__item"
};
const ABProjectItemvue_type_template_id_4476e742_hoisted_2 = {
  class: "project-item__image-wrapper"
};
const ABProjectItemvue_type_template_id_4476e742_hoisted_3 = ["src", "alt"];
const ABProjectItemvue_type_template_id_4476e742_hoisted_4 = {
  class: "project-item__title"
};
function ABProjectItemvue_type_template_id_4476e742_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_router_link = (0,runtime_core_esm_bundler/* resolveComponent */.g2)("router-link");
  return (0,runtime_core_esm_bundler/* openBlock */.uX)(), (0,runtime_core_esm_bundler/* createElementBlock */.CE)("li", ABProjectItemvue_type_template_id_4476e742_hoisted_1, [(0,runtime_core_esm_bundler/* createVNode */.bF)(_component_router_link, {
    class: "project-item__link",
    to: $props.projectUrl
  }, {
    default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createElementVNode */.Lk)("div", ABProjectItemvue_type_template_id_4476e742_hoisted_2, [(0,runtime_core_esm_bundler/* createElementVNode */.Lk)("img", {
      class: "project-item__image",
      src: $props.projectCoverUrl,
      width: "320",
      height: "320",
      alt: `Проект ${$props.projectName}`
    }, null, 8, ABProjectItemvue_type_template_id_4476e742_hoisted_3)]), (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("span", ABProjectItemvue_type_template_id_4476e742_hoisted_4, (0,shared_esm_bundler/* toDisplayString */.v_)($props.projectName), 1)]),
    _: 1
  }, 8, ["to"])]);
}
;// ./src/components/ABProjectItem.vue?vue&type=template&id=4476e742

;// ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/ABProjectItem.vue?vue&type=script&lang=js
/* harmony default export */ var ABProjectItemvue_type_script_lang_js = ({
  name: 'ABProjectItem',
  props: {
    projectName: {
      type: String,
      default: 'Проект без названия 🤔'
    },
    projectUrl: {
      type: String,
      default: '/404'
    },
    projectCoverUrl: {
      type: String,
      default: '@images/blank-cover.jpg'
    }
  }
});
;// ./src/components/ABProjectItem.vue?vue&type=script&lang=js
 
;// ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-27.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-27.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-27.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-27.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/ABProjectItem.vue?vue&type=style&index=0&id=4476e742&lang=sass
// extracted by mini-css-extract-plugin

;// ./src/components/ABProjectItem.vue?vue&type=style&index=0&id=4476e742&lang=sass

;// ./src/components/ABProjectItem.vue




;


const ABProjectItem_exports_ = /*#__PURE__*/(0,exportHelper/* default */.A)(ABProjectItemvue_type_script_lang_js, [['render',ABProjectItemvue_type_template_id_4476e742_render]])

/* harmony default export */ var ABProjectItem = (ABProjectItem_exports_);
;// ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js!./node_modules/ts-loader/index.js??clonedRuleSet-42.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/pages/HomePage.vue?vue&type=script&lang=ts




/* harmony default export */ var HomePagevue_type_script_lang_ts = ((0,runtime_core_esm_bundler/* defineComponent */.pM)({
  name: 'HomePage',
  props: {},
  components: {
    ABProjectItem: ABProjectItem
  },
  data: () => {
    return {
      projects: [{
        'name': 'Celsior',
        'coverUrl': __webpack_require__(7589),
        'url': '/celsior'
      }, {
        'name': 'Laurel',
        'coverUrl': __webpack_require__(8117),
        'url': '/laurel'
      }, {
        'name': 'Mark II',
        'coverUrl': __webpack_require__(8021),
        'url': '/mark'
      }, {
        'name': 'Museum',
        'coverUrl': __webpack_require__(235),
        'url': '/museum'
      }, {
        'name': '2104',
        'coverUrl': __webpack_require__(8853),
        'url': '/2104'
      }, {
        'name': 'Cresta',
        'coverUrl': __webpack_require__(6207),
        'url': '/cresta'
      }]
    };
  },
  methods: {
    getProjects(page, limit) {
      var _this = this;
      return (0,asyncToGenerator/* default */.A)(function* () {
        const response = yield fetch(`https://api.com/projects?page=${page}&limit=${limit}`);
        const data = yield response.json();
        _this.projects.push(data);
      })();
    }
  },
  computed: {
    recentProjects() {
      return this.projects.slice(0, 6);
    }
  }
}));
;// ./src/pages/HomePage.vue?vue&type=script&lang=ts
 
;// ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-27.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-27.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-27.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-27.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/pages/HomePage.vue?vue&type=style&index=0&id=47931b38&lang=sass
// extracted by mini-css-extract-plugin

;// ./src/pages/HomePage.vue?vue&type=style&index=0&id=47931b38&lang=sass

;// ./src/pages/HomePage.vue




;


const HomePage_exports_ = /*#__PURE__*/(0,exportHelper/* default */.A)(HomePagevue_type_script_lang_ts, [['render',HomePagevue_type_template_id_47931b38_ts_true_render]])

/* harmony default export */ var HomePage = (HomePage_exports_);
;// ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js!./node_modules/ts-loader/index.js??clonedRuleSet-42.use[2]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[5]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/pages/NotFound.vue?vue&type=template&id=1288a61e&ts=true

const NotFoundvue_type_template_id_1288a61e_ts_true_hoisted_1 = {
  class: "not-found"
};
const NotFoundvue_type_template_id_1288a61e_ts_true_hoisted_2 = {
  class: "container"
};
const NotFoundvue_type_template_id_1288a61e_ts_true_hoisted_3 = {
  class: "not-found__grid"
};
const NotFoundvue_type_template_id_1288a61e_ts_true_hoisted_4 = {
  class: "not-found__content"
};
function NotFoundvue_type_template_id_1288a61e_ts_true_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_router_link = (0,runtime_core_esm_bundler/* resolveComponent */.g2)("router-link");
  return (0,runtime_core_esm_bundler/* openBlock */.uX)(), (0,runtime_core_esm_bundler/* createElementBlock */.CE)("div", NotFoundvue_type_template_id_1288a61e_ts_true_hoisted_1, [(0,runtime_core_esm_bundler/* createElementVNode */.Lk)("div", NotFoundvue_type_template_id_1288a61e_ts_true_hoisted_2, [(0,runtime_core_esm_bundler/* createElementVNode */.Lk)("div", NotFoundvue_type_template_id_1288a61e_ts_true_hoisted_3, [(0,runtime_core_esm_bundler/* createElementVNode */.Lk)("div", NotFoundvue_type_template_id_1288a61e_ts_true_hoisted_4, [_cache[1] || (_cache[1] = (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("h1", null, "404 – Страница не найдена", -1)), (0,runtime_core_esm_bundler/* createVNode */.bF)(_component_router_link, {
    class: "not-found__link",
    to: {
      name: 'Home'
    }
  }, {
    default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => _cache[0] || (_cache[0] = [(0,runtime_core_esm_bundler/* createTextVNode */.eW)("Вернуться на главную")])),
    _: 1
  })])])])]);
}
;// ./src/pages/NotFound.vue?vue&type=template&id=1288a61e&ts=true

;// ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js!./node_modules/ts-loader/index.js??clonedRuleSet-42.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/pages/NotFound.vue?vue&type=script&lang=ts

/* harmony default export */ var NotFoundvue_type_script_lang_ts = ((0,runtime_core_esm_bundler/* defineComponent */.pM)({
  name: 'NotFound'
}));
;// ./src/pages/NotFound.vue?vue&type=script&lang=ts
 
;// ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-27.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-27.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-27.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-27.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/pages/NotFound.vue?vue&type=style&index=0&id=1288a61e&lang=sass
// extracted by mini-css-extract-plugin

;// ./src/pages/NotFound.vue?vue&type=style&index=0&id=1288a61e&lang=sass

;// ./src/pages/NotFound.vue




;


const NotFound_exports_ = /*#__PURE__*/(0,exportHelper/* default */.A)(NotFoundvue_type_script_lang_ts, [['render',NotFoundvue_type_template_id_1288a61e_ts_true_render]])

/* harmony default export */ var NotFound = (NotFound_exports_);
;// ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js!./node_modules/ts-loader/index.js??clonedRuleSet-42.use[2]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[5]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/pages/ProjectsPage.vue?vue&type=template&id=0879d6fe&ts=true

const ProjectsPagevue_type_template_id_0879d6fe_ts_true_hoisted_1 = {
  class: "projects-section"
};
const ProjectsPagevue_type_template_id_0879d6fe_ts_true_hoisted_2 = {
  key: 0,
  class: "projects-section__filter-wrapper"
};
const ProjectsPagevue_type_template_id_0879d6fe_ts_true_hoisted_3 = {
  class: "projects-section__results"
};
const ProjectsPagevue_type_template_id_0879d6fe_ts_true_hoisted_4 = {
  class: "container"
};
const ProjectsPagevue_type_template_id_0879d6fe_ts_true_hoisted_5 = {
  class: "projects-section__results-grid"
};
const ProjectsPagevue_type_template_id_0879d6fe_ts_true_hoisted_6 = {
  class: "recent-section__list"
};
const _hoisted_7 = {
  key: 1,
  class: "projects-section__empty-list"
};
function ProjectsPagevue_type_template_id_0879d6fe_ts_true_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_ABProjectItemLoader = (0,runtime_core_esm_bundler/* resolveComponent */.g2)("ABProjectItemLoader");
  const _component_ABProjectItem = (0,runtime_core_esm_bundler/* resolveComponent */.g2)("ABProjectItem");
  const _component_v_pagination = (0,runtime_core_esm_bundler/* resolveComponent */.g2)("v-pagination");
  const _component_v_empty_state = (0,runtime_core_esm_bundler/* resolveComponent */.g2)("v-empty-state");
  return (0,runtime_core_esm_bundler/* openBlock */.uX)(), (0,runtime_core_esm_bundler/* createElementBlock */.CE)("div", ProjectsPagevue_type_template_id_0879d6fe_ts_true_hoisted_1, [_ctx.isLoading || _ctx.showingProjects.length ? ((0,runtime_core_esm_bundler/* openBlock */.uX)(), (0,runtime_core_esm_bundler/* createElementBlock */.CE)("div", ProjectsPagevue_type_template_id_0879d6fe_ts_true_hoisted_2, _cache[1] || (_cache[1] = [(0,runtime_core_esm_bundler/* createElementVNode */.Lk)("div", {
    class: "container"
  }, [(0,runtime_core_esm_bundler/* createElementVNode */.Lk)("h2", null, "Фильтры")], -1)]))) : (0,runtime_core_esm_bundler/* createCommentVNode */.Q3)("", true), (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("div", ProjectsPagevue_type_template_id_0879d6fe_ts_true_hoisted_3, [(0,runtime_core_esm_bundler/* createElementVNode */.Lk)("div", ProjectsPagevue_type_template_id_0879d6fe_ts_true_hoisted_4, [(0,runtime_core_esm_bundler/* createElementVNode */.Lk)("div", ProjectsPagevue_type_template_id_0879d6fe_ts_true_hoisted_5, [(0,runtime_core_esm_bundler/* createElementVNode */.Lk)("ul", ProjectsPagevue_type_template_id_0879d6fe_ts_true_hoisted_6, [_ctx.isLoading ? ((0,runtime_core_esm_bundler/* openBlock */.uX)(true), (0,runtime_core_esm_bundler/* createElementBlock */.CE)(runtime_core_esm_bundler/* Fragment */.FK, {
    key: 0
  }, (0,runtime_core_esm_bundler/* renderList */.pI)(_ctx.projectsPerPage, idx => {
    return (0,runtime_core_esm_bundler/* openBlock */.uX)(), (0,runtime_core_esm_bundler/* createBlock */.Wv)(_component_ABProjectItemLoader, {
      key: idx,
      loading: _ctx.isLoading
    }, null, 8, ["loading"]);
  }), 128)) : _ctx.showingProjects.length ? ((0,runtime_core_esm_bundler/* openBlock */.uX)(true), (0,runtime_core_esm_bundler/* createElementBlock */.CE)(runtime_core_esm_bundler/* Fragment */.FK, {
    key: 1
  }, (0,runtime_core_esm_bundler/* renderList */.pI)(_ctx.showingProjects, project => {
    return (0,runtime_core_esm_bundler/* openBlock */.uX)(), (0,runtime_core_esm_bundler/* createBlock */.Wv)(_component_ABProjectItem, {
      key: project.slug,
      projectName: project.name,
      projectUrl: `/project/${project.slug}`,
      projectCoverUrl: project.cover_url
    }, null, 8, ["projectName", "projectUrl", "projectCoverUrl"]);
  }), 128)) : (0,runtime_core_esm_bundler/* createCommentVNode */.Q3)("", true)]), _ctx.pagesAmount > 1 ? ((0,runtime_core_esm_bundler/* openBlock */.uX)(), (0,runtime_core_esm_bundler/* createBlock */.Wv)(_component_v_pagination, {
    key: 0,
    modelValue: _ctx.page,
    "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => _ctx.page = $event),
    length: _ctx.pagesAmount
  }, null, 8, ["modelValue", "length"])) : (0,runtime_core_esm_bundler/* createCommentVNode */.Q3)("", true)])])]), !_ctx.isLoading && !_ctx.showingProjects.length ? ((0,runtime_core_esm_bundler/* openBlock */.uX)(), (0,runtime_core_esm_bundler/* createElementBlock */.CE)("div", _hoisted_7, [(0,runtime_core_esm_bundler/* createVNode */.bF)(_component_v_empty_state, {
    title: "Проекты не найдены...",
    text: "Давайте вместе создадим нечто прекрасное!",
    image: __webpack_require__(3233)
  }, null, 8, ["image"])])) : (0,runtime_core_esm_bundler/* createCommentVNode */.Q3)("", true)]);
}
;// ./src/pages/ProjectsPage.vue?vue&type=template&id=0879d6fe&ts=true

// EXTERNAL MODULE: ./node_modules/core-js/modules/esnext.iterator.constructor.js
var esnext_iterator_constructor = __webpack_require__(8992);
// EXTERNAL MODULE: ./node_modules/core-js/modules/esnext.iterator.for-each.js
var esnext_iterator_for_each = __webpack_require__(3949);
;// ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js!./node_modules/ts-loader/index.js??clonedRuleSet-42.use[2]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[5]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/UI/ABProjectItemLoader.vue?vue&type=template&id=84966596&ts=true

const ABProjectItemLoadervue_type_template_id_84966596_ts_true_hoisted_1 = {
  class: "recent-section__item"
};
const ABProjectItemLoadervue_type_template_id_84966596_ts_true_hoisted_2 = {
  class: "project-item__link"
};
function ABProjectItemLoadervue_type_template_id_84966596_ts_true_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_v_skeleton_loader = (0,runtime_core_esm_bundler/* resolveComponent */.g2)("v-skeleton-loader");
  return (0,runtime_core_esm_bundler/* openBlock */.uX)(), (0,runtime_core_esm_bundler/* createElementBlock */.CE)("li", ABProjectItemLoadervue_type_template_id_84966596_ts_true_hoisted_1, [(0,runtime_core_esm_bundler/* createElementVNode */.Lk)("div", ABProjectItemLoadervue_type_template_id_84966596_ts_true_hoisted_2, [(0,runtime_core_esm_bundler/* createVNode */.bF)(_component_v_skeleton_loader, {
    type: "image, list-item",
    loading: _ctx.loading
  }, {
    default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* renderSlot */.RG)(_ctx.$slots, "default")]),
    _: 3
  }, 8, ["loading"])])]);
}
;// ./src/components/UI/ABProjectItemLoader.vue?vue&type=template&id=84966596&ts=true

;// ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js!./node_modules/ts-loader/index.js??clonedRuleSet-42.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/UI/ABProjectItemLoader.vue?vue&type=script&lang=ts

/* harmony default export */ var ABProjectItemLoadervue_type_script_lang_ts = ((0,runtime_core_esm_bundler/* defineComponent */.pM)({
  name: 'ABProjectItemLoader',
  props: {
    loading: {
      type: Boolean,
      default: true
    }
  }
}));
;// ./src/components/UI/ABProjectItemLoader.vue?vue&type=script&lang=ts
 
;// ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-27.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-27.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-27.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-27.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/UI/ABProjectItemLoader.vue?vue&type=style&index=0&id=84966596&lang=sass
// extracted by mini-css-extract-plugin

;// ./src/components/UI/ABProjectItemLoader.vue?vue&type=style&index=0&id=84966596&lang=sass

;// ./src/components/UI/ABProjectItemLoader.vue




;


const ABProjectItemLoader_exports_ = /*#__PURE__*/(0,exportHelper/* default */.A)(ABProjectItemLoadervue_type_script_lang_ts, [['render',ABProjectItemLoadervue_type_template_id_84966596_ts_true_render]])

/* harmony default export */ var ABProjectItemLoader = (ABProjectItemLoader_exports_);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js + 3 modules
var objectSpread2 = __webpack_require__(9201);
// EXTERNAL MODULE: ./node_modules/core-js/modules/esnext.iterator.map.js
var esnext_iterator_map = __webpack_require__(1454);
// EXTERNAL MODULE: ./node_modules/firebase/app/dist/esm/index.esm.js
var index_esm = __webpack_require__(6400);
// EXTERNAL MODULE: ./node_modules/firebase/analytics/dist/esm/index.esm.js + 2 modules
var esm_index_esm = __webpack_require__(5942);
// EXTERNAL MODULE: ./node_modules/firebase/firestore/dist/esm/index.esm.js + 3 modules
var dist_esm_index_esm = __webpack_require__(7617);
;// ./src/fireBaseConfig.ts



// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCn8JdFAT7Oh2VkpFfj3RJZEVzchbqVWMo",
  authDomain: 'alexbelostozky-photo.firebaseapp.com',
  projectId: 'alexbelostozky-photo',
  storageBucket: 'alexbelostozky-photo.firebasestorage.app',
  messagingSenderId: '571708317175',
  appId: '1:571708317175:web:8e493db09b33fab62c22f2',
  measurementId: 'G-5F7RCQY9ET'
};
// Initialize Firebase
const firebaseApp = (0,index_esm/* initializeApp */.Wp)(firebaseConfig);
const firebaseAnalytics = (0,esm_index_esm/* getAnalytics */.P5)(firebaseApp);
const db = (0,dist_esm_index_esm/* getFirestore */.aU)(firebaseApp);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.replace.js
var es_string_replace = __webpack_require__(5440);
// EXTERNAL MODULE: ./node_modules/@cloudinary/url-gen/instance/Cloudinary.js + 44 modules
var Cloudinary = __webpack_require__(8496);
;// ./src/cloudinaryConfig.ts

// Cloudinary configuration
const cloudinaryConfig = {
  apiKey: "556793371748214",
  cloudName: "djutzcgzq"
};
// Create a Cloudinary instance
const cld = new Cloudinary/* Cloudinary */.T({
  cloud: {
    cloudName: cloudinaryConfig.cloudName
  }
});

// EXTERNAL MODULE: ./node_modules/markdown-it/index.mjs + 75 modules
var markdown_it = __webpack_require__(642);
;// ./src/utils/index.ts




const markdownItLinkAttributes = __webpack_require__(9096);
const getImageUrl = publicId => {
  return `https://res.cloudinary.com/${cloudinaryConfig.cloudName}/image/upload/${publicId}.jpg`;
};
const md = new markdown_it/* default */.A({
  linkify: true
}).use(markdownItLinkAttributes, {
  attrs: {
    target: '_blank',
    rel: 'noopener noreferrer'
  }
});
const renderMarkdown = text => {
  // Doesn't work on old browsers...
  // md.render(text
  // 	.replace(/\\n/g, '\n')
  // 	.replace(/(?<=^|\s)(\p{L}{1,4})(,?)\s/gu, '$1$2&nbsp;') || ''
  // )
  try {
    const processedText = text.replace(/\\n/g, '\n');
    let newResult = processedText;
    // eslint-disable-next-line no-constant-condition
    while (true) {
      const replaced = newResult.replace(/((?:^|;|[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]))((?:[0-9A-Za-z\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0560-\u0588\u05D0-\u05EA\u05EF-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u0870-\u0887\u0889-\u088E\u08A0-\u08C9\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C5D\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D04-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16F1-\u16F8\u1700-\u1711\u171F-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1878\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4C\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C8A\u1C90-\u1CBA\u1CBD-\u1CBF\u1CE9-\u1CEC\u1CEE-\u1CF3\u1CF5\u1CF6\u1CFA\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u31A0-\u31BF\u31F0-\u31FF\u3400-\u4DBF\u4E00-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA7CD\uA7D0\uA7D1\uA7D3\uA7D5-\uA7DC\uA7F2-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA8FE\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB69\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF2D-\uDF40\uDF42-\uDF49\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF]|\uD801[\uDC00-\uDC9D\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDD70-\uDD7A\uDD7C-\uDD8A\uDD8C-\uDD92\uDD94\uDD95\uDD97-\uDDA1\uDDA3-\uDDB1\uDDB3-\uDDB9\uDDBB\uDDBC\uDDC0-\uDDF3\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67\uDF80-\uDF85\uDF87-\uDFB0\uDFB2-\uDFBA]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE35\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2\uDD00-\uDD23\uDD4A-\uDD65\uDD6F-\uDD85\uDE80-\uDEA9\uDEB0\uDEB1\uDEC2-\uDEC4\uDF00-\uDF1C\uDF27\uDF30-\uDF45\uDF70-\uDF81\uDFB0-\uDFC4\uDFE0-\uDFF6]|\uD804[\uDC03-\uDC37\uDC71\uDC72\uDC75\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD44\uDD47\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE2B\uDE3F\uDE40\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61\uDF80-\uDF89\uDF8B\uDF8E\uDF90-\uDFB5\uDFB7\uDFD1\uDFD3]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC5F-\uDC61\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE80-\uDEAA\uDEB8\uDF00-\uDF1A\uDF40-\uDF46]|\uD806[\uDC00-\uDC2B\uDCA0-\uDCDF\uDCFF-\uDD06\uDD09\uDD0C-\uDD13\uDD15\uDD16\uDD18-\uDD2F\uDD3F\uDD41\uDDA0-\uDDA7\uDDAA-\uDDD0\uDDE1\uDDE3\uDE00\uDE0B-\uDE32\uDE3A\uDE50\uDE5C-\uDE89\uDE9D\uDEB0-\uDEF8\uDFC0-\uDFE0]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC72-\uDC8F\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD30\uDD46\uDD60-\uDD65\uDD67\uDD68\uDD6A-\uDD89\uDD98\uDEE0-\uDEF2\uDF02\uDF04-\uDF10\uDF12-\uDF33\uDFB0]|\uD808[\uDC00-\uDF99]|\uD809[\uDC80-\uDD43]|\uD80B[\uDF90-\uDFF0]|[\uD80C\uD80E\uD80F\uD81C-\uD820\uD822\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883\uD885-\uD887][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2F\uDC41-\uDC46\uDC60-\uDFFF]|\uD810[\uDC00-\uDFFA]|\uD811[\uDC00-\uDE46]|\uD818[\uDD00-\uDD1D]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE70-\uDEBE\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDD40-\uDD6C\uDE40-\uDE7F\uDF00-\uDF4A\uDF50\uDF93-\uDF9F\uDFE0\uDFE1\uDFE3]|\uD821[\uDC00-\uDFF7]|\uD823[\uDC00-\uDCD5\uDCFF-\uDD08]|\uD82B[\uDFF0-\uDFF3\uDFF5-\uDFFB\uDFFD\uDFFE]|\uD82C[\uDC00-\uDD22\uDD32\uDD50-\uDD52\uDD55\uDD64-\uDD67\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD837[\uDF00-\uDF1E\uDF25-\uDF2A]|\uD838[\uDC30-\uDC6D\uDD00-\uDD2C\uDD37-\uDD3D\uDD4E\uDE90-\uDEAD\uDEC0-\uDEEB]|\uD839[\uDCD0-\uDCEB\uDDD0-\uDDED\uDDF0\uDFE0-\uDFE6\uDFE8-\uDFEB\uDFED\uDFEE\uDFF0-\uDFFE]|\uD83A[\uDC00-\uDCC4\uDD00-\uDD43\uDD4B]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDEDF\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF39\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0\uDFF0-\uDFFF]|\uD87B[\uDC00-\uDE5D]|\uD87E[\uDC00-\uDE1D]|\uD884[\uDC00-\uDF4A\uDF50-\uDFFF]|\uD888[\uDC00-\uDFAF]){1,4})(,?)[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]/g, '$1$2$3&nbsp;');
      console.log(replaced);
      if (replaced === newResult) {
        break;
      }
      newResult = replaced;
    }
    return md.render(newResult || text);
  } catch (error) {
    console.warn('Failed to render markdown: ', error);
    return text;
  }
};
const getImageDimensions = url => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.src = url;
    img.onload = () => resolve({
      width: img.naturalWidth,
      height: img.naturalHeight
    });
    img.onerror = reject;
  });
};
;// ./src/api/index.ts









const getProjects = /*#__PURE__*/function () {
  var _ref = (0,asyncToGenerator/* default */.A)(function* (collectionName, projectsAmount, lastProject) {
    const projectsRef = (0,dist_esm_index_esm/* collection */.rJ)(db, collectionName);
    const projectsQuery = lastProject ? (0,dist_esm_index_esm/* query */.P)(projectsRef, (0,dist_esm_index_esm/* limit */.AB)(projectsAmount), (0,dist_esm_index_esm/* startAfter */.HM)(lastProject)) : (0,dist_esm_index_esm/* query */.P)(projectsRef, (0,dist_esm_index_esm/* limit */.AB)(projectsAmount));
    const snapshot = yield (0,dist_esm_index_esm/* getDocs */.GG)(projectsQuery);
    const fetchedProjects = snapshot.docs.map(doc => {
      const projectData = doc.data();
      return (0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({
        id: Number(doc.id)
      }, projectData), {}, {
        cover_url: getImageUrl(projectData.cover_url)
      });
    });
    const lastFromSnapshot = snapshot.docs ? snapshot.docs[snapshot.docs.length - 1] : null;
    return {
      lastFromSnapshot,
      fetchedProjects
    };
  });
  return function getProjects(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();
const getProject = /*#__PURE__*/function () {
  var _ref2 = (0,asyncToGenerator/* default */.A)(function* (collectionName, projectSlug) {
    const projectsRef = (0,dist_esm_index_esm/* collection */.rJ)(db, collectionName);
    const projectsQuery = (0,dist_esm_index_esm/* query */.P)(projectsRef, (0,dist_esm_index_esm/* where */._M)('slug', '==', projectSlug));
    const snapshot = yield (0,dist_esm_index_esm/* getDocs */.GG)(projectsQuery);
    if (snapshot.empty) return null;
    const fetchedProject = snapshot.docs.map(doc => {
      const projectData = doc.data();
      const images = [];
      projectData.images.forEach(image => {
        images.push(getImageUrl(image));
      });
      return (0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({
        id: Number(doc.id)
      }, projectData), {}, {
        cover_url: getImageUrl(projectData.cover_url),
        images: images
      });
    });
    return fetchedProject[0];
  });
  return function getProject(_x4, _x5) {
    return _ref2.apply(this, arguments);
  };
}();
;// ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js!./node_modules/ts-loader/index.js??clonedRuleSet-42.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/pages/ProjectsPage.vue?vue&type=script&lang=ts








/* harmony default export */ var ProjectsPagevue_type_script_lang_ts = ((0,runtime_core_esm_bundler/* defineComponent */.pM)({
  name: 'ProjectsPage',
  components: {
    ABProjectItem: ABProjectItem,
    ABProjectItemLoader: ABProjectItemLoader
  },
  data() {
    return {
      page: 1,
      projectsPerPage: 6,
      lastVisible: null,
      isLoading: true,
      cachedProjects: {
        // 1: [
        // 	{
        // 		'name': 'Celsior',
        // 		'coverUrl': require('@images/content/projects/celsior/celsior-cover.jpg'),
        // 		'url': '/celsior'
        // 	},
        // 	{
        // 		'name': 'Laurel',
        // 		'coverUrl': require('@images/content/projects/laurel/laurel-cover.jpg'),
        // 		'url': '/laurel'
        // 	},
        // 	{
        // 		'name': 'Mark II',
        // 		'coverUrl': require('@images/content/projects/mark/mark-cover.jpg'),
        // 		'url': '/mark'
        // 	},
        // 	{
        // 		'name': 'Museum',
        // 		'coverUrl': require('@images/content/projects/museum/museum-cover.jpg'),
        // 		'url': '/museum'
        // 	},
        // 	{
        // 		'name': '2104',
        // 		'coverUrl': require('@images/content/projects/2104/2104-cover.jpg'),
        // 		'url': '/2104'
        // 	},
        // 	{
        // 		'name': 'Cresta',
        // 		'coverUrl': require('@images/content/projects/cresta/cresta-cover.jpg'),
        // 		'url': '/cresta'
        // 	},
        // ]
      },
      showingProjects: [],
      totalProjects: 0
    };
  },
  methods: {
    showProjects(page, projectsPerPage) {
      var _this = this;
      return (0,asyncToGenerator/* default */.A)(function* () {
        if (_this.cachedProjects[page]) {
          _this.showingProjects = _this.cachedProjects[page];
          _this.isLoading = false;
          return;
        }
        try {
          _this.isLoading = true;
          const {
            lastFromSnapshot,
            fetchedProjects
          } = yield getProjects('projects', projectsPerPage, _this.lastVisible);
          _this.lastVisible = lastFromSnapshot;
          fetchedProjects.forEach(project => {
            if (!_this.cachedProjects[page]) {
              _this.cachedProjects[page] = [];
            }
            _this.cachedProjects[page].push(project);
          });
          _this.showingProjects = fetchedProjects;
        } catch (error) {
          console.warn('Failed to get projects from Firebase: ', error);
        } finally {
          _this.isLoading = false;
        }
      })();
    }
  },
  mounted() {
    if (!this.showingProjects.length) {
      this.showProjects(this.page, this.projectsPerPage);
    }
  },
  computed: {
    pagesAmount() {
      return Math.ceil(this.totalProjects / this.projectsPerPage);
    }
  },
  watch: {
    page(value) {
      this.showProjects(value, this.projectsPerPage);
    }
  }
}));
;// ./src/pages/ProjectsPage.vue?vue&type=script&lang=ts
 
;// ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-27.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-27.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-27.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-27.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/pages/ProjectsPage.vue?vue&type=style&index=0&id=0879d6fe&lang=sass
// extracted by mini-css-extract-plugin

;// ./src/pages/ProjectsPage.vue?vue&type=style&index=0&id=0879d6fe&lang=sass

;// ./src/pages/ProjectsPage.vue




;


const ProjectsPage_exports_ = /*#__PURE__*/(0,exportHelper/* default */.A)(ProjectsPagevue_type_script_lang_ts, [['render',ProjectsPagevue_type_template_id_0879d6fe_ts_true_render]])

/* harmony default export */ var ProjectsPage = (ProjectsPage_exports_);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.symbol.description.js
var es_symbol_description = __webpack_require__(9463);
;// ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js!./node_modules/ts-loader/index.js??clonedRuleSet-42.use[2]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[5]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/pages/ProjectPage.vue?vue&type=template&id=cdc6d502&ts=true


const ProjectPagevue_type_template_id_cdc6d502_ts_true_hoisted_1 = {
  class: "project-section"
};
const ProjectPagevue_type_template_id_cdc6d502_ts_true_hoisted_2 = {
  class: "container"
};
const ProjectPagevue_type_template_id_cdc6d502_ts_true_hoisted_3 = {
  class: "project-section__heading"
};
const ProjectPagevue_type_template_id_cdc6d502_ts_true_hoisted_4 = {
  class: "project-section__tags-wrapper"
};
const ProjectPagevue_type_template_id_cdc6d502_ts_true_hoisted_5 = {
  class: "project-section__tags-list"
};
const ProjectPagevue_type_template_id_cdc6d502_ts_true_hoisted_6 = {
  class: "project-section__tag-key"
};
const ProjectPagevue_type_template_id_cdc6d502_ts_true_hoisted_7 = ["innerHTML"];
const _hoisted_8 = {
  class: "project-section__gallery"
};
function ProjectPagevue_type_template_id_cdc6d502_ts_true_render(_ctx, _cache, $props, $setup, $data, $options) {
  var _ctx$projectData, _ctx$projectData2, _ctx$projectData3, _ctx$projectData4, _ctx$projectData5;
  const _component_router_link = (0,runtime_core_esm_bundler/* resolveComponent */.g2)("router-link");
  const _component_ABGallery = (0,runtime_core_esm_bundler/* resolveComponent */.g2)("ABGallery");
  return (0,runtime_core_esm_bundler/* openBlock */.uX)(), (0,runtime_core_esm_bundler/* createElementBlock */.CE)("div", ProjectPagevue_type_template_id_cdc6d502_ts_true_hoisted_1, [(0,runtime_core_esm_bundler/* createElementVNode */.Lk)("div", ProjectPagevue_type_template_id_cdc6d502_ts_true_hoisted_2, [(0,runtime_core_esm_bundler/* createElementVNode */.Lk)("h1", ProjectPagevue_type_template_id_cdc6d502_ts_true_hoisted_3, (0,shared_esm_bundler/* toDisplayString */.v_)((_ctx$projectData = _ctx.projectData) === null || _ctx$projectData === void 0 ? void 0 : _ctx$projectData.name), 1), (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("div", ProjectPagevue_type_template_id_cdc6d502_ts_true_hoisted_4, [(0,runtime_core_esm_bundler/* createElementVNode */.Lk)("ul", ProjectPagevue_type_template_id_cdc6d502_ts_true_hoisted_5, [((0,runtime_core_esm_bundler/* openBlock */.uX)(true), (0,runtime_core_esm_bundler/* createElementBlock */.CE)(runtime_core_esm_bundler/* Fragment */.FK, null, (0,runtime_core_esm_bundler/* renderList */.pI)((_ctx$projectData2 = _ctx.projectData) === null || _ctx$projectData2 === void 0 ? void 0 : _ctx$projectData2.tags, (tagValue, tagKey) => {
    return (0,runtime_core_esm_bundler/* openBlock */.uX)(), (0,runtime_core_esm_bundler/* createElementBlock */.CE)("li", {
      class: "project-section__tag-item",
      key: tagKey
    }, [(0,runtime_core_esm_bundler/* createElementVNode */.Lk)("span", ProjectPagevue_type_template_id_cdc6d502_ts_true_hoisted_6, (0,shared_esm_bundler/* toDisplayString */.v_)(tagKey) + ": ", 1), (0,runtime_core_esm_bundler/* createVNode */.bF)(_component_router_link, {
      to: `/projects?${tagKey}=${encodeURIComponent(tagValue)}`
    }, {
      default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createTextVNode */.eW)((0,shared_esm_bundler/* toDisplayString */.v_)(tagValue), 1)]),
      _: 2
    }, 1032, ["to"])]);
  }), 128))])]), (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("div", {
    class: "project-section__description",
    innerHTML: _ctx.renderMarkdown(((_ctx$projectData3 = _ctx.projectData) === null || _ctx$projectData3 === void 0 ? void 0 : _ctx$projectData3.description) || '')
  }, null, 8, ProjectPagevue_type_template_id_cdc6d502_ts_true_hoisted_7)]), (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("div", _hoisted_8, [_ctx.projectData ? ((0,runtime_core_esm_bundler/* openBlock */.uX)(), (0,runtime_core_esm_bundler/* createBlock */.Wv)(_component_ABGallery, {
    key: 0,
    images: (_ctx$projectData4 = _ctx.projectData) === null || _ctx$projectData4 === void 0 ? void 0 : _ctx$projectData4.images,
    projectName: (_ctx$projectData5 = _ctx.projectData) === null || _ctx$projectData5 === void 0 ? void 0 : _ctx$projectData5.name
  }, null, 8, ["images", "projectName"])) : (0,runtime_core_esm_bundler/* createCommentVNode */.Q3)("", true)])]);
}
;// ./src/pages/ProjectPage.vue?vue&type=template&id=cdc6d502&ts=true

;// ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js!./node_modules/ts-loader/index.js??clonedRuleSet-42.use[2]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[5]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/ABGallery.vue?vue&type=template&id=1c2cb052&ts=true

const ABGalleryvue_type_template_id_1c2cb052_ts_true_hoisted_1 = {
  class: "gallery"
};
const ABGalleryvue_type_template_id_1c2cb052_ts_true_hoisted_2 = {
  class: "container container--mobile-extended"
};
const ABGalleryvue_type_template_id_1c2cb052_ts_true_hoisted_3 = {
  class: "gallery__grid",
  ref: "gallery"
};
const ABGalleryvue_type_template_id_1c2cb052_ts_true_hoisted_4 = ["src", "alt"];
function ABGalleryvue_type_template_id_1c2cb052_ts_true_render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,runtime_core_esm_bundler/* openBlock */.uX)(), (0,runtime_core_esm_bundler/* createElementBlock */.CE)("div", ABGalleryvue_type_template_id_1c2cb052_ts_true_hoisted_1, [(0,runtime_core_esm_bundler/* createElementVNode */.Lk)("div", ABGalleryvue_type_template_id_1c2cb052_ts_true_hoisted_2, [(0,runtime_core_esm_bundler/* createElementVNode */.Lk)("div", ABGalleryvue_type_template_id_1c2cb052_ts_true_hoisted_3, [((0,runtime_core_esm_bundler/* openBlock */.uX)(true), (0,runtime_core_esm_bundler/* createElementBlock */.CE)(runtime_core_esm_bundler/* Fragment */.FK, null, (0,runtime_core_esm_bundler/* renderList */.pI)(_ctx.styledImages, (image, idx) => {
    return (0,runtime_core_esm_bundler/* openBlock */.uX)(), (0,runtime_core_esm_bundler/* createElementBlock */.CE)("div", {
      class: "gallery__item",
      key: idx
    }, [(0,runtime_core_esm_bundler/* createElementVNode */.Lk)("img", {
      class: (0,shared_esm_bundler/* normalizeClass */.C4)(["gallery__image", {
        'gallery__image--portrait': image.orientation === 'portrait'
      }]),
      src: image.url,
      style: (0,shared_esm_bundler/* normalizeStyle */.Tr)(`width: ${image.maxWidth}`),
      alt: idx + ' фото проекта ' + _ctx.projectName
    }, null, 14, ABGalleryvue_type_template_id_1c2cb052_ts_true_hoisted_4)]);
  }), 128))], 512)])]);
}
;// ./src/components/ABGallery.vue?vue&type=template&id=1c2cb052&ts=true

;// ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js!./node_modules/ts-loader/index.js??clonedRuleSet-42.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/ABGallery.vue?vue&type=script&lang=ts







/* harmony default export */ var ABGalleryvue_type_script_lang_ts = ((0,runtime_core_esm_bundler/* defineComponent */.pM)({
  name: 'ABGallery',
  components: {},
  props: {
    images: {
      type: Array,
      required: true
    },
    projectName: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      maxImageHeightScreenRatio: 0.85,
      maxPortraitWidth: null,
      isImagesLoading: true,
      styledImages: []
    };
  },
  methods: {
    mapImages() {
      var _this = this;
      return (0,asyncToGenerator/* default */.A)(function* () {
        try {
          _this.isImagesLoading = true;
          _this.styledImages = yield Promise.all(_this.images.map(/*#__PURE__*/function () {
            var _ref = (0,asyncToGenerator/* default */.A)(function* (image) {
              const {
                width,
                height
              } = yield getImageDimensions(image);
              const safeWidth = width !== null && width !== void 0 ? width : 0;
              const safeHeight = height !== null && height !== void 0 ? height : 0;
              return {
                url: image,
                orientation: safeWidth && safeHeight && safeWidth > safeHeight ? 'landscape' : 'portrait',
                naturalWidth: safeWidth,
                naturalHeight: safeHeight
              };
            });
            return function (_x) {
              return _ref.apply(this, arguments);
            };
          }()));
          _this.styleImages();
        } catch (error) {
          console.warn('Failed to map images: ', error);
        } finally {
          _this.isImagesLoading = false;
        }
      })();
    },
    styleImages() {
      const galleryElement = this.$refs.gallery;
      const galleryWidth = galleryElement.clientWidth;
      const computedGalleryStyles = window.getComputedStyle(galleryElement);
      const gapValue = computedGalleryStyles.getPropertyValue('gap');
      const galleryGap = isNaN(parseFloat(gapValue)) ? 20 : parseFloat(gapValue);
      const maxPortraitWidth = galleryWidth / 2 - galleryGap / 2;
      const maxImageHeight = window.screen.height * this.maxImageHeightScreenRatio;
      this.styledImages.forEach(image => {
        if (image.orientation === 'portrait' && image.naturalWidth && image.naturalHeight) {
          const heightRatio = image.naturalHeight / image.naturalWidth;
          const canImageBeFull = galleryWidth * heightRatio <= maxImageHeight;
          image.maxWidth = canImageBeFull ? galleryWidth + 'px' : maxPortraitWidth + 'px';
        }
      });
    }
  },
  beforeMount() {
    this.mapImages();
  },
  mounted() {
    window.addEventListener('resize', this.styleImages);
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.styleImages);
  },
  computed: {
    // maxImageHeight: 9,
  }
}));
;// ./src/components/ABGallery.vue?vue&type=script&lang=ts
 
;// ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-27.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-27.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-27.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-27.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/ABGallery.vue?vue&type=style&index=0&id=1c2cb052&lang=sass
// extracted by mini-css-extract-plugin

;// ./src/components/ABGallery.vue?vue&type=style&index=0&id=1c2cb052&lang=sass

;// ./src/components/ABGallery.vue




;


const ABGallery_exports_ = /*#__PURE__*/(0,exportHelper/* default */.A)(ABGalleryvue_type_script_lang_ts, [['render',ABGalleryvue_type_template_id_1c2cb052_ts_true_render]])

/* harmony default export */ var ABGallery = (ABGallery_exports_);
;// ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js!./node_modules/ts-loader/index.js??clonedRuleSet-42.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/pages/ProjectPage.vue?vue&type=script&lang=ts





/* harmony default export */ var ProjectPagevue_type_script_lang_ts = ((0,runtime_core_esm_bundler/* defineComponent */.pM)({
  name: 'ProjectPage',
  components: {
    ABGallery: ABGallery
  },
  data() {
    return {
      isLoading: true,
      projectData: null
    };
  },
  methods: {
    showProject() {
      var _this = this;
      return (0,asyncToGenerator/* default */.A)(function* () {
        try {
          _this.isLoading = true;
          const projectSlug = Array.isArray(_this.$route.params.projectSlug) ? _this.$route.params.projectSlug[0] : _this.$route.params.projectSlug;
          const fetchedProject = yield getProject('projects', projectSlug);
          _this.projectData = fetchedProject;
        } catch (error) {
          console.warn('Failed to get project from Firebase: ', error);
        } finally {
          _this.isLoading = false;
        }
      })();
    },
    renderMarkdown: renderMarkdown
  },
  mounted() {
    this.showProject();
  },
  computed: {},
  watch: {}
}));
;// ./src/pages/ProjectPage.vue?vue&type=script&lang=ts
 
;// ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-27.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-27.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-27.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-27.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/pages/ProjectPage.vue?vue&type=style&index=0&id=cdc6d502&lang=sass
// extracted by mini-css-extract-plugin

;// ./src/pages/ProjectPage.vue?vue&type=style&index=0&id=cdc6d502&lang=sass

;// ./src/pages/ProjectPage.vue




;


const ProjectPage_exports_ = /*#__PURE__*/(0,exportHelper/* default */.A)(ProjectPagevue_type_script_lang_ts, [['render',ProjectPagevue_type_template_id_cdc6d502_ts_true_render]])

/* harmony default export */ var ProjectPage = (ProjectPage_exports_);
;// ./router/index.ts





const routes = [{
  path: '/',
  name: 'Home',
  component: HomePage
}, {
  path: '/projects',
  name: 'Projects',
  component: ProjectsPage
}, {
  path: '/project/:projectSlug',
  name: 'Project',
  component: ProjectPage
}, {
  path: '/:pathMatch(.*)*',
  name: 'NotFound',
  component: NotFound
}];
const router = (0,vue_router/* createRouter */.aE)({
  history: (0,vue_router/* createWebHistory */.LA)("/AlexBelostozky-photo/"),
  routes
});
/* harmony default export */ var router_0 = (router);
// EXTERNAL MODULE: ./node_modules/vuetify/lib/styles/main.css
var main = __webpack_require__(5524);
// EXTERNAL MODULE: ./node_modules/vuetify/lib/framework.mjs
var framework = __webpack_require__(7768);
// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/index.mjs + 396 modules
var components = __webpack_require__(1920);
// EXTERNAL MODULE: ./node_modules/vuetify/lib/directives/index.mjs + 5 modules
var directives = __webpack_require__(5741);
;// ./src/plugins/vuetify.js




/* harmony default export */ var vuetify = ((0,framework/* createVuetify */.$N)({
  components: components,
  directives: directives,
  icons: {
    defaultSet: 'mdi'
  },
  defaults: {
    global: {
      ripple: false
    }
  }
}));
;// ./src/main.ts
















const app = (0,runtime_dom_esm_bundler/* createApp */.Ef)(App);
app.use(router_0);
app.use(vuetify);
app.provide('firebaseApp', firebaseApp);
app.provide('firebaseAnalytics', firebaseAnalytics);
app.provide('db', db);
const params = new URLSearchParams(window.location.search);
const redirect = params.get('redirect');
if (redirect) {
  history.replaceState(null, '', window.location.pathname);
  router_0.push(redirect);
}
app.mount('#app');

/***/ }),

/***/ 3233:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/no-projects.09300997.svg";

/***/ }),

/***/ 8853:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/2104-cover.fa9ebc26.jpg";

/***/ }),

/***/ 7589:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/celsior-cover.fe093344.jpg";

/***/ }),

/***/ 6207:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/cresta-cover.5beb5c31.jpg";

/***/ }),

/***/ 8117:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/laurel-cover.fdb69e5d.jpg";

/***/ }),

/***/ 8021:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/mark-cover.de38659d.jpg";

/***/ }),

/***/ 235:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/museum-cover.34bad518.jpg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	!function() {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = function(result, chunkIds, fn, priority) {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var chunkIds = deferred[i][0];
/******/ 				var fn = deferred[i][1];
/******/ 				var priority = deferred[i][2];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every(function(key) { return __webpack_require__.O[key](chunkIds[j]); })) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	!function() {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	!function() {
/******/ 		__webpack_require__.p = "/AlexBelostozky-photo/";
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	!function() {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			524: 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = function(chunkId) { return installedChunks[chunkId] === 0; };
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = function(parentChunkLoadingFunction, data) {
/******/ 			var chunkIds = data[0];
/******/ 			var moreModules = data[1];
/******/ 			var runtime = data[2];
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some(function(id) { return installedChunks[id] !== 0; })) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkalexbelostozky_photo"] = self["webpackChunkalexbelostozky_photo"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, [504], function() { return __webpack_require__(919); })
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=app.fc23b9f8.js.map