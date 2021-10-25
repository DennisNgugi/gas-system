"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_Products_Index_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Products/Index.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Products/Index.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue_infinite_loading__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-infinite-loading */ "./node_modules/vue-infinite-loading/dist/vue-infinite-loading.js");
/* harmony import */ var vue_infinite_loading__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_infinite_loading__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _alerts_alert__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../alerts/alert */ "./resources/js/alerts/alert.js");
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
      search: '',
      products: [],
      page: 1,
      bottom: false,
      alert: new _alerts_alert__WEBPACK_IMPORTED_MODULE_1__["default"]()
    };
  },
  mounted: function mounted() {//this.$store.dispatch("fetchProduct")
  },
  methods: {
    infiniteHandler: function infiniteHandler($state) {
      setTimeout(function () {
        var _this = this;

        axios.get('/product?page=' + this.page).then(function (response) {
          if (response.data.products.data.length > 0) {
            // let lastPage = response.data.reciepts.last_page
            response.data.products.data.forEach(function (product) {
              _this.products.push(product);
            });
            $state.loaded();
            _this.page += 1;
          }
        })["catch"](function (e) {
          return console.log(e);
        });
      }.bind(this), 1000);
    },
    disable: function disable(id) {
      var _this2 = this;

      swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then(function (result) {
        if (result.value) {
          var uri = "/product/".concat(id);
          axios["delete"](uri).then(function (response) {
            _this2.products.splice(_this2.products.indexOf(id), 1);

            window.location.reload(false);

            _this2.alert.successLarge(response.data.success); // this.fetchData();

          });
        }
      })["catch"](function () {
        _this2.alert.error(response.data.error);
      });
    }
  },
  computed: {
    filteredData: function filteredData() {
      var _this3 = this;

      return this.products.filter(function (item) {
        return item.product_name.toLowerCase().includes(_this3.search.toLowerCase()) || item.created_at.toLowerCase().includes(_this3.search.toLowerCase());
      });
    }
  },
  components: {
    InfiniteLoading: (vue_infinite_loading__WEBPACK_IMPORTED_MODULE_0___default())
  }
});

/***/ }),

/***/ "./resources/js/alerts/alert.js":
/*!**************************************!*\
  !*** ./resources/js/alerts/alert.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SweetAlert)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var SweetAlert = /*#__PURE__*/function () {
  function SweetAlert() {
    _classCallCheck(this, SweetAlert);
  }

  _createClass(SweetAlert, [{
    key: "successLarge",
    value: function successLarge(message) {
      swal.fire({
        position: 'top-end',
        icon: 'success',
        title: message,
        showConfirmButton: false,
        timer: 1500
      });
    }
  }, {
    key: "successSmall",
    value: function successSmall(message) {
      toast.fire({
        type: 'success',
        title: message
      });
    }
  }, {
    key: "warning",
    value: function warning() {
      swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then(function (result) {
        if (result.isConfirmed) {
          swal.fire('Deleted!', 'Your file has been deleted.', 'success');
        }
      });
    }
  }, {
    key: "ask",
    value: function ask(message) {
      swal.fire({
        title: message,
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, cancel it!'
      }).then(function (result) {
        if (result.isConfirmed) {
          swal.fire('Cancelled!', 'The order has been cancelled.', 'success');
        }
      });
    }
  }, {
    key: "message",
    value: function message(_message) {
      swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: _message
      });
    }
  }, {
    key: "error",
    value: function error(message) {
      toast.fire({
        type: 'error',
        title: message
      }); // swal.fire({
      //   icon: 'error',
      //   title: 'Oops... Try again!',
      //   text: message,
      // })
    }
  }]);

  return SweetAlert;
}();



/***/ }),

/***/ "./resources/js/components/Products/Index.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/components/Products/Index.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Products/Index.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Products/Index.vue?vue&type=template&id=1dc5b81c&":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/Products/Index.vue?vue&type=template&id=1dc5b81c& ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_1dc5b81c___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_1dc5b81c___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_1dc5b81c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Index.vue?vue&type=template&id=1dc5b81c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Products/Index.vue?vue&type=template&id=1dc5b81c&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Products/Index.vue?vue&type=template&id=1dc5b81c&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Products/Index.vue?vue&type=template&id=1dc5b81c& ***!
  \**************************************************************************************************************************************************************************************************************************/
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
      _c("div", { staticClass: "input-group mb-3" }, [
        _vm._m(0),
        _vm._v(" "),
        _c("input", {
          directives: [
            {
              name: "model",
              rawName: "v-model",
              value: _vm.search,
              expression: "search"
            }
          ],
          staticClass: "form-control",
          attrs: {
            type: "text",
            autofocus: "",
            placeholder: "Search here .....",
            "aria-describedby": "basic-addon1"
          },
          domProps: { value: _vm.search },
          on: {
            input: function($event) {
              if ($event.target.composing) {
                return
              }
              _vm.search = $event.target.value
            }
          }
        })
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "card" }, [
        _vm._m(1),
        _vm._v(" "),
        _c("div", { staticClass: "card-body" }, [
          _c("div", { staticClass: "table-responsive" }, [
            _c("table", { staticClass: "table table-nowrap mb-0" }, [
              _vm._m(2),
              _vm._v(" "),
              _c(
                "tbody",
                [
                  _vm._l(_vm.filteredData, function(product, index) {
                    return _c("tr", { key: product.id }, [
                      _c("td", [_vm._v(_vm._s(index + 1))]),
                      _vm._v(" "),
                      _c("td", [_vm._v(_vm._s(product.product_name))]),
                      _vm._v(" "),
                      _c("td", [_vm._v(_vm._s(product.brands.brand_name))]),
                      _vm._v(" "),
                      _c("td", [
                        _c("b", [_vm._v("Complete")]),
                        _vm._v(
                          " => Retail: " +
                            _vm._s(product.price.complete.retail_price) +
                            "/= , Wholesale: " +
                            _vm._s(product.price.complete.wholesale_price) +
                            "/=\n                                        "
                        ),
                        _c("br"),
                        _vm._v(" "),
                        _c("b", [_vm._v("Refill")]),
                        _vm._v(
                          " => Retail: " +
                            _vm._s(product.price.refill.retail_price) +
                            "/= , Wholesale: " +
                            _vm._s(product.price.refill.wholesale_price) +
                            "/=\n                                    "
                        )
                      ]),
                      _vm._v(" "),
                      _c("td", [
                        _c("b", [_vm._v("Outlight")]),
                        _vm._v(
                          " => " +
                            _vm._s(product.quantity.outlight) +
                            "\n                                        "
                        ),
                        _c("br"),
                        _vm._v(" "),
                        _c("b", [_vm._v("Empty")]),
                        _vm._v(
                          " => " +
                            _vm._s(product.quantity.empty) +
                            "\n                                        "
                        ),
                        _c("br"),
                        _vm._v(" "),
                        _c("b", [_vm._v("Qty")]),
                        _vm._v(
                          " => " +
                            _vm._s(product.quantity.others) +
                            "\n\n                                    "
                        )
                      ]),
                      _vm._v(" "),
                      _c("td", [
                        _vm._v(
                          "\n                                        " +
                            _vm._s(
                              product.quantity.empty + product.quantity.outlight
                            ) +
                            "\n                                    "
                        )
                      ]),
                      _vm._v(" "),
                      _c(
                        "td",
                        [
                          _c(
                            "router-link",
                            {
                              staticClass: "btn btn-primary btn-sm",
                              attrs: {
                                to: {
                                  name: "products.edit",
                                  params: { id: product.id }
                                }
                              }
                            },
                            [_vm._v("Edit")]
                          ),
                          _vm._v(" "),
                          _c(
                            "router-link",
                            {
                              staticClass: "btn btn-info btn-sm",
                              attrs: {
                                to: {
                                  name: "products.view",
                                  params: { id: product.id }
                                }
                              }
                            },
                            [_vm._v("View")]
                          ),
                          _vm._v(" "),
                          _c("input", {
                            staticClass: "btn btn-danger btn-sm",
                            attrs: { type: "submit", value: "Delete" },
                            on: {
                              click: function($event) {
                                $event.preventDefault()
                                return _vm.disable(product.id)
                              }
                            }
                          })
                        ],
                        1
                      )
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
                        [_vm._v("No more products")]
                      )
                    ]
                  )
                ],
                2
              )
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
    return _c("div", { staticClass: "input-group-prepend" }, [
      _c(
        "span",
        { staticClass: "input-group-text", attrs: { id: "basic-addon1" } },
        [_vm._v("Search")]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card-header" }, [
      _c("h4", { staticClass: "card-title" }, [_vm._v("Products")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", { attrs: { width: "5%" } }, [_vm._v("#")]),
        _vm._v(" "),
        _c("th", [_vm._v("Product Name")]),
        _vm._v(" "),
        _c("th", { attrs: { width: "13%" } }, [_vm._v("Category")]),
        _vm._v(" "),
        _c("th", { attrs: { width: "30%" } }, [_vm._v("Price")]),
        _vm._v(" "),
        _c("th", { attrs: { width: "20%" } }, [_vm._v("Quantity")]),
        _vm._v(" "),
        _c("th", [_vm._v("Total")]),
        _vm._v(" "),
        _c("th", [_vm._v("Action")])
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

/***/ "./resources/js/components/Products/Index.vue":
/*!****************************************************!*\
  !*** ./resources/js/components/Products/Index.vue ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Index_vue_vue_type_template_id_1dc5b81c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Index.vue?vue&type=template&id=1dc5b81c& */ "./resources/js/components/Products/Index.vue?vue&type=template&id=1dc5b81c&");
/* harmony import */ var _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Index.vue?vue&type=script&lang=js& */ "./resources/js/components/Products/Index.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Index_vue_vue_type_template_id_1dc5b81c___WEBPACK_IMPORTED_MODULE_0__.render,
  _Index_vue_vue_type_template_id_1dc5b81c___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Products/Index.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ })

}]);