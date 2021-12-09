"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_Products_SalesView_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Products/SalesView.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Products/SalesView.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue_infinite_loading__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-infinite-loading */ "./node_modules/vue-infinite-loading/dist/vue-infinite-loading.js");
/* harmony import */ var vue_infinite_loading__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_infinite_loading__WEBPACK_IMPORTED_MODULE_0__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      sales: [],
      bottom: false,
      page: 1,
      search: ''
    };
  },
  methods: {
    saleType: function saleType(type) {
      if (type === 'O') {
        return 'Others';
      } else if (type === 'R') {
        return 'Refill';
      } else {
        return 'Complete';
      }
    },
    infiniteHandler: function infiniteHandler($state) {
      setTimeout(function () {
        var _this = this;

        axios.get("/product/sales/view/".concat(this.$route.params.id, "?page=") + this.page).then(function (response) {
          if (response.data.sales.data.length > 0) {
            // let lastPage = response.data.reciepts.last_page
            response.data.sales.data.forEach(function (sale) {
              _this.sales.push(sale);
            });
            $state.loaded();
            _this.page += 1;
          }
        })["catch"](function (e) {
          return console.log(e);
        });
      }.bind(this), 1000);
    }
  },
  components: {
    InfiniteLoading: (vue_infinite_loading__WEBPACK_IMPORTED_MODULE_0___default())
  },
  computed: {
    filteredData: function filteredData() {
      var _this2 = this;

      return this.sales.filter(function (item) {
        return item.created_at.toLowerCase().includes(_this2.search.toLowerCase());
      });
    }
  }
});

/***/ }),

/***/ "./resources/js/components/Products/SalesView.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./resources/js/components/Products/SalesView.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SalesView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SalesView.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Products/SalesView.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SalesView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Products/SalesView.vue?vue&type=template&id=3552f171&scoped=true&":
/*!***************************************************************************************************!*\
  !*** ./resources/js/components/Products/SalesView.vue?vue&type=template&id=3552f171&scoped=true& ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SalesView_vue_vue_type_template_id_3552f171_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SalesView_vue_vue_type_template_id_3552f171_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SalesView_vue_vue_type_template_id_3552f171_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SalesView.vue?vue&type=template&id=3552f171&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Products/SalesView.vue?vue&type=template&id=3552f171&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Products/SalesView.vue?vue&type=template&id=3552f171&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Products/SalesView.vue?vue&type=template&id=3552f171&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "row" }, [
    _c("div", { staticClass: "col-md-12" }, [
      _c("div", { staticClass: "card" }, [
        _c("div", { staticClass: "card-body" }, [
          _c("div", { staticClass: "tab-content" }, [
            _c(
              "div",
              { staticClass: "active tab-pane", attrs: { id: "transfers" } },
              [
                _c("div", [
                  _c(
                    "table",
                    { staticClass: "table table-responsive-md table-bordered" },
                    [
                      _vm._m(0),
                      _vm._v(" "),
                      _c(
                        "tbody",
                        [
                          _vm._l(_vm.filteredData, function(t, index) {
                            return _c("tr", [
                              _c("td", [_vm._v(_vm._s(index + 1))]),
                              _vm._v(" "),
                              _c("td", {
                                domProps: { textContent: _vm._s(t.created_at) }
                              }),
                              _vm._v(" "),
                              _c("td", [_vm._v(_vm._s(t.quantity))]),
                              _vm._v(" "),
                              _c("td", [_vm._v(_vm._s(t.sale_type))]),
                              _vm._v(" "),
                              _c("td", {
                                domProps: {
                                  textContent: _vm._s(_vm.saleType(t.gas_type))
                                }
                              })
                            ])
                          }),
                          _vm._v(" "),
                          _c(
                            "infinite-loading",
                            {
                              attrs: { spinner: "spiral" },
                              on: {
                                distance: function($event) {
                                  1
                                },
                                infinite: _vm.infiniteHandler
                              }
                            },
                            [
                              _c(
                                "div",
                                {
                                  staticClass: "text-red",
                                  attrs: { slot: "no-more" },
                                  slot: "no-more"
                                },
                                [_vm._v("No more sales")]
                              ),
                              _vm._v(" "),
                              _c(
                                "div",
                                {
                                  staticClass: "text-red",
                                  attrs: { slot: "no-results" },
                                  slot: "no-results"
                                },
                                [_vm._v("No more sales")]
                              )
                            ]
                          )
                        ],
                        2
                      )
                    ]
                  )
                ])
              ]
            )
          ])
        ])
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("tr", [
      _c("th", [_vm._v("#")]),
      _vm._v(" "),
      _c("th", [_vm._v("Date")]),
      _vm._v(" "),
      _c("th", [_vm._v("Quantity")]),
      _vm._v(" "),
      _c("th", [_vm._v("Category")]),
      _vm._v(" "),
      _c("th", [_vm._v("Sale Type")])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js":
/*!********************************************************************!*\
  !*** ./node_modules/vue-loader/lib/runtime/componentNormalizer.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ normalizeComponent)
/* harmony export */ });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
        injectStyles.call(
          this,
          (options.functional ? this.parent : this).$root.$options.shadowRoot
        )
      }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ "./resources/js/components/Products/SalesView.vue":
/*!********************************************************!*\
  !*** ./resources/js/components/Products/SalesView.vue ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _SalesView_vue_vue_type_template_id_3552f171_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SalesView.vue?vue&type=template&id=3552f171&scoped=true& */ "./resources/js/components/Products/SalesView.vue?vue&type=template&id=3552f171&scoped=true&");
/* harmony import */ var _SalesView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SalesView.vue?vue&type=script&lang=js& */ "./resources/js/components/Products/SalesView.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _SalesView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SalesView_vue_vue_type_template_id_3552f171_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _SalesView_vue_vue_type_template_id_3552f171_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "3552f171",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Products/SalesView.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ })

}]);