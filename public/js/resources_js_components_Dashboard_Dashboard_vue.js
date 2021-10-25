"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_Dashboard_Dashboard_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Dashboard/Dashboard.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Dashboard/Dashboard.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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
      yearlyRevenue: [],
      weeklyRevenue: [],
      lastWeekRevenue: [],
      normalQuantity: '',
      outlightQuantity: '',
      emptyQuantity: ''
    };
  },
  mounted: function mounted() {
    this.$store.dispatch("fetchProduct");
    this.getTotalYearRevenue();
    this.getTotalWeekRevenue();
  },
  methods: {
    getTotalYearRevenue: function getTotalYearRevenue() {
      var _this = this;

      axios.get('/yearly_report').then(function (response) {
        _this.yearlyRevenue = response.data.yearly;
      })["catch"](function (error) {
        console.log(error);
      });
    },
    getTotalWeekRevenue: function getTotalWeekRevenue() {
      var _this2 = this;

      axios.get('/weekly_report').then(function (response) {
        _this2.weeklyRevenue = response.data.weekly;
      })["catch"](function (error) {
        console.log(error);
      });
    },
    getLastWeekRevenue: function getLastWeekRevenue() {
      var _this3 = this;

      axios.get('/last_week').then(function (response) {
        _this3.lastWeekRevenue = response.data.lastWeekRevenue;
      })["catch"](function (error) {
        console.log(error);
      });
    }
  },
  created: function created() {},
  computed: {
    getTotalProducts: function getTotalProducts() {
      return this.$store.getters.getProducts.length;
    },
    getOutlightProductQuantity: function getOutlightProductQuantity() {
      var sum_outlight = 0;
      this.$store.getters.getProducts.forEach(function (item) {
        sum_outlight += item.quantity.outlight;
      });
      return sum_outlight;
    },
    getEmptyProductQuantity: function getEmptyProductQuantity() {
      var sum_empty = 0;
      this.$store.getters.getProducts.forEach(function (item) {
        sum_empty += item.quantity.empty;
      });
      return sum_empty;
    },
    getNormalProductQuantity: function getNormalProductQuantity() {
      var sum_normal = 0;
      this.$store.getters.getProducts.forEach(function (item) {
        sum_normal += item.quantity.normal;
      });
      return sum_normal;
    }
  }
});

/***/ }),

/***/ "./resources/js/components/Dashboard/Dashboard.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/Dashboard/Dashboard.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Dashboard.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Dashboard/Dashboard.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Dashboard/Dashboard.vue?vue&type=template&id=c3d42bc4&":
/*!****************************************************************************************!*\
  !*** ./resources/js/components/Dashboard/Dashboard.vue?vue&type=template&id=c3d42bc4& ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_template_id_c3d42bc4___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_template_id_c3d42bc4___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_template_id_c3d42bc4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Dashboard.vue?vue&type=template&id=c3d42bc4& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Dashboard/Dashboard.vue?vue&type=template&id=c3d42bc4&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Dashboard/Dashboard.vue?vue&type=template&id=c3d42bc4&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Dashboard/Dashboard.vue?vue&type=template&id=c3d42bc4& ***!
  \*******************************************************************************************************************************************************************************************************************************/
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
  return _c("div", [
    _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-lg-3 col-6" }, [
        _c(
          "div",
          { staticClass: "small-box bg-info" },
          [
            _c("div", { staticClass: "inner" }, [
              _c("h3", [_vm._v(_vm._s(_vm.getTotalProducts))]),
              _vm._v(" "),
              _c("p", [_vm._v("Products")])
            ]),
            _vm._v(" "),
            _vm._m(0),
            _vm._v(" "),
            _c(
              "router-link",
              {
                staticClass: "small-box-footer",
                attrs: { to: "/admin/products/index" }
              },
              [
                _vm._v("More info "),
                _c("i", { staticClass: "fas fa-arrow-circle-right" })
              ]
            )
          ],
          1
        )
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-lg-3 col-6" }, [
        _c("div", { staticClass: "small-box bg-success" }, [
          _c("div", { staticClass: "inner" }, [
            _c("h3", [_vm._v(_vm._s(_vm.getOutlightProductQuantity))]),
            _vm._v(" "),
            _c("p", [_vm._v("Outlight cylinders")])
          ]),
          _vm._v(" "),
          _vm._m(1)
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-lg-3 col-6" }, [
        _c("div", { staticClass: "small-box bg-warning" }, [
          _c("div", { staticClass: "inner" }, [
            _c("h3", [_vm._v(_vm._s(_vm.getEmptyProductQuantity))]),
            _vm._v(" "),
            _c("p", [_vm._v("Empty cylinders")])
          ]),
          _vm._v(" "),
          _vm._m(2)
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-lg-3 col-6" }, [
        _c("div", { staticClass: "small-box bg-danger" }, [
          _c("div", { staticClass: "inner" }, [
            _c("h3", [_vm._v(_vm._s(_vm.getNormalProductQuantity))]),
            _vm._v(" "),
            _c("p", [_vm._v("Normal items")])
          ]),
          _vm._v(" "),
          _vm._m(3)
        ])
      ])
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-md-6 d-flex" }, [
        _c("div", { staticClass: "card card-table flex-fill" }, [
          _vm._m(4),
          _vm._v(" "),
          _c("div", { staticClass: "card-body" }, [
            _c("div", { staticClass: "table-responsive" }, [
              _c("table", { staticClass: "table table-hover table-center" }, [
                _vm._m(5),
                _vm._v(" "),
                _c(
                  "tbody",
                  _vm._l(_vm.lastWeekRevenue, function(day, index) {
                    return _c("tr", { key: index }, [
                      _c("td", { staticClass: "text-nowrap" }, [
                        _c("div", { staticClass: "font-weight-600" }, [
                          _vm._v(_vm._s(day.dayname))
                        ])
                      ]),
                      _vm._v(" "),
                      _c("td", { staticClass: "text-nowrap" }, [
                        _vm._v(_vm._s(day.quantity))
                      ]),
                      _vm._v(" "),
                      _c("td", { staticClass: "text-center" }, [
                        _vm._v(_vm._s(_vm._f("formatNumber")(day.amount)))
                      ])
                    ])
                  }),
                  0
                )
              ])
            ])
          ])
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-md-6 d-flex" }, [
        _c("div", { staticClass: "card card-table flex-fill" }, [
          _vm._m(6),
          _vm._v(" "),
          _c("div", { staticClass: "card-body" }, [
            _c("div", { staticClass: "table-responsive" }, [
              _c("table", { staticClass: "table table-hover table-center" }, [
                _vm._m(7),
                _vm._v(" "),
                _c(
                  "tbody",
                  _vm._l(_vm.weeklyRevenue, function(day, index) {
                    return _c("tr", { key: index }, [
                      _c("td", { staticClass: "text-nowrap" }, [
                        _c("div", { staticClass: "font-weight-600" }, [
                          _vm._v(_vm._s(day.dayname))
                        ])
                      ]),
                      _vm._v(" "),
                      _c("td", { staticClass: "text-nowrap" }, [
                        _vm._v(_vm._s(day.quantity))
                      ]),
                      _vm._v(" "),
                      _c("td", { staticClass: "text-center" }, [
                        _vm._v(_vm._s(_vm._f("formatNumber")(day.amount)))
                      ])
                    ])
                  }),
                  0
                )
              ])
            ])
          ])
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-md-6 d-flex" }, [
        _c("div", { staticClass: "card card-table flex-fill" }, [
          _vm._m(8),
          _vm._v(" "),
          _c("div", { staticClass: "card-body" }, [
            _c("div", { staticClass: "table-responsive" }, [
              _c("table", { staticClass: "table table-hover table-center" }, [
                _vm._m(9),
                _vm._v(" "),
                _c(
                  "tbody",
                  _vm._l(_vm.yearlyRevenue, function(month, index) {
                    return _c("tr", { key: index }, [
                      _c("td", { staticClass: "text-nowrap" }, [
                        _c("div", { staticClass: "font-weight-600" }, [
                          _vm._v(_vm._s(month.month))
                        ])
                      ]),
                      _vm._v(" "),
                      _c("td", { staticClass: "text-nowrap" }, [
                        _vm._v(_vm._s(month.quantity))
                      ]),
                      _vm._v(" "),
                      _c("td", { staticClass: "text-center" }, [
                        _vm._v(_vm._s(_vm._f("formatNumber")(month.amount)))
                      ])
                    ])
                  }),
                  0
                )
              ])
            ])
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
    return _c("div", { staticClass: "icon" }, [
      _c("i", { staticClass: "ion ion-bag" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "icon" }, [
      _c("i", { staticClass: "ion ion-stats-bars" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "icon" }, [
      _c("i", { staticClass: "ion ion-person-add" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "icon" }, [
      _c("i", { staticClass: "ion ion-pie-graph" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card-header" }, [
      _c("h4", { staticClass: "card-title" }, [_vm._v("Last Week")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", [_vm._v("Day")]),
        _vm._v(" "),
        _c("th", [_vm._v("Quantity")]),
        _vm._v(" "),
        _c("th", { staticClass: "text-center" }, [_vm._v("Total")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card-header" }, [
      _c("h4", { staticClass: "card-title" }, [_vm._v("Current Week")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", [_vm._v("Day")]),
        _vm._v(" "),
        _c("th", [_vm._v("Quantity")]),
        _vm._v(" "),
        _c("th", { staticClass: "text-center" }, [_vm._v("Total")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card-header" }, [
      _c("h4", { staticClass: "card-title" }, [_vm._v("Current Year")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", [_vm._v("Month")]),
        _vm._v(" "),
        _c("th", [_vm._v("Quantity")]),
        _vm._v(" "),
        _c("th", { staticClass: "text-center" }, [_vm._v("Total")])
      ])
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

/***/ "./resources/js/components/Dashboard/Dashboard.vue":
/*!*********************************************************!*\
  !*** ./resources/js/components/Dashboard/Dashboard.vue ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Dashboard_vue_vue_type_template_id_c3d42bc4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Dashboard.vue?vue&type=template&id=c3d42bc4& */ "./resources/js/components/Dashboard/Dashboard.vue?vue&type=template&id=c3d42bc4&");
/* harmony import */ var _Dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Dashboard.vue?vue&type=script&lang=js& */ "./resources/js/components/Dashboard/Dashboard.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Dashboard_vue_vue_type_template_id_c3d42bc4___WEBPACK_IMPORTED_MODULE_0__.render,
  _Dashboard_vue_vue_type_template_id_c3d42bc4___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Dashboard/Dashboard.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ })

}]);