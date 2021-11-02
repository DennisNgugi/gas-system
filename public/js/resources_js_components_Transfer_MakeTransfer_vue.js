"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_Transfer_MakeTransfer_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Transfer/MakeTransfer.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Transfer/MakeTransfer.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _errors_errors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../errors/errors */ "./resources/js/errors/errors.js");
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      product_id: '',
      branch_id: '',
      gas_type: '',
      stock_type: '',
      stock_out: '',
      stock_in: '',
      remarks: '',
      errors: new _errors_errors__WEBPACK_IMPORTED_MODULE_0__["default"](),
      alert: new _alerts_alert__WEBPACK_IMPORTED_MODULE_1__["default"]()
    };
  },
  mounted: function mounted() {
    this.$store.dispatch("fetchProduct");
    this.$store.dispatch("fetchBranch");
  },
  computed: {
    getProducts: function getProducts() {
      return this.$store.getters.getProducts;
    },
    getBranches: function getBranches() {
      return this.$store.getters.getBranches;
    }
  },
  methods: {
    save: function save() {
      var _this = this;

      axios.post('/transfer', this.$data).then(function (response) {
        // display success message from backend
        _this.alert.successLarge(response.data.success); // empty the data object


        Object.assign(_this.$data, _this.$options.data());
      })["catch"](function (error) {
        _this.errors.record(error.response.data.errors);
      });
    }
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
    key: "errorLarge",
    value: function errorLarge(message) {
      swal.fire({
        position: 'top-end',
        icon: 'error',
        title: message,
        showConfirmButton: false,
        timer: 1500
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

/***/ "./resources/js/errors/errors.js":
/*!***************************************!*\
  !*** ./resources/js/errors/errors.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Errors)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Errors = /*#__PURE__*/function () {
  function Errors() {
    _classCallCheck(this, Errors);

    this.errors = {};
  }

  _createClass(Errors, [{
    key: "get",
    value: function get(field) {
      if (this.errors[field]) {
        return this.errors[field][0];
      }
    }
  }, {
    key: "record",
    value: function record(errors) {
      this.errors = errors;
      console.log(errors);
    }
  }, {
    key: "clear",
    value: function clear(field) {
      delete this.errors[field];
    }
  }]);

  return Errors;
}();



/***/ }),

/***/ "./resources/js/components/Transfer/MakeTransfer.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./resources/js/components/Transfer/MakeTransfer.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MakeTransfer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./MakeTransfer.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Transfer/MakeTransfer.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MakeTransfer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Transfer/MakeTransfer.vue?vue&type=template&id=07812fe2&":
/*!******************************************************************************************!*\
  !*** ./resources/js/components/Transfer/MakeTransfer.vue?vue&type=template&id=07812fe2& ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MakeTransfer_vue_vue_type_template_id_07812fe2___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MakeTransfer_vue_vue_type_template_id_07812fe2___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MakeTransfer_vue_vue_type_template_id_07812fe2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./MakeTransfer.vue?vue&type=template&id=07812fe2& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Transfer/MakeTransfer.vue?vue&type=template&id=07812fe2&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Transfer/MakeTransfer.vue?vue&type=template&id=07812fe2&":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Transfer/MakeTransfer.vue?vue&type=template&id=07812fe2& ***!
  \*********************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "card" }, [
    _vm._m(0),
    _vm._v(" "),
    _c("div", { staticClass: "card-body" }, [
      _c(
        "form",
        {
          attrs: { action: "", method: "post" },
          on: {
            submit: function($event) {
              $event.preventDefault()
              return _vm.save.apply(null, arguments)
            }
          }
        },
        [
          _c("div", { staticClass: "form-group row" }, [
            _c("div", { staticClass: "col-lg-12" }, [
              _c("label", { staticClass: "col-form-label col-lg-4" }, [
                _vm._v("Product name")
              ]),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "input-group input-group-lg" },
                [
                  _c("vue-select", {
                    staticClass: "form-control",
                    attrs: {
                      label: "product_name",
                      options: _vm.getProducts,
                      reduce: function(product) {
                        return product.id
                      }
                    },
                    on: {
                      keypress: function($event) {
                        return _vm.errors.clear("product_id")
                      }
                    },
                    model: {
                      value: _vm.product_id,
                      callback: function($$v) {
                        _vm.product_id = $$v
                      },
                      expression: "product_id"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c("span", {
                staticClass: "help is-danger",
                staticStyle: { color: "red" },
                domProps: { textContent: _vm._s(_vm.errors.get("product_id")) }
              })
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "form-group row" }, [
            _c("div", { staticClass: "col-lg-6" }, [
              _c("label", { staticClass: "col-form-label col-lg-4" }, [
                _vm._v("Gas Type")
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "input-group input-group-lg" }, [
                _c(
                  "select",
                  {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.gas_type,
                        expression: "gas_type"
                      }
                    ],
                    staticClass: "form-control",
                    on: {
                      change: function($event) {
                        var $$selectedVal = Array.prototype.filter
                          .call($event.target.options, function(o) {
                            return o.selected
                          })
                          .map(function(o) {
                            var val = "_value" in o ? o._value : o.value
                            return val
                          })
                        _vm.gas_type = $event.target.multiple
                          ? $$selectedVal
                          : $$selectedVal[0]
                      }
                    }
                  },
                  [
                    _c("option", { attrs: { value: "" } }, [
                      _vm._v("Select Gas type")
                    ]),
                    _vm._v(" "),
                    _c("option", { attrs: { value: "o" } }, [
                      _vm._v("Outright")
                    ]),
                    _vm._v(" "),
                    _c("option", { attrs: { value: "e" } }, [_vm._v("Empty")])
                  ]
                )
              ]),
              _vm._v(" "),
              _c("span", {
                staticClass: "help is-danger",
                staticStyle: { color: "red" },
                domProps: { textContent: _vm._s(_vm.errors.get("gas_type")) }
              })
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "form-group row" }, [
            _c("div", { staticClass: "col-lg-6" }, [
              _c("label", { staticClass: "col-form-label col-lg-4" }, [
                _vm._v("Stock Type")
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "input-group input-group-lg" }, [
                _c(
                  "select",
                  {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.stock_type,
                        expression: "stock_type"
                      }
                    ],
                    staticClass: "form-control",
                    on: {
                      change: function($event) {
                        var $$selectedVal = Array.prototype.filter
                          .call($event.target.options, function(o) {
                            return o.selected
                          })
                          .map(function(o) {
                            var val = "_value" in o ? o._value : o.value
                            return val
                          })
                        _vm.stock_type = $event.target.multiple
                          ? $$selectedVal
                          : $$selectedVal[0]
                      }
                    }
                  },
                  [
                    _c("option", { attrs: { value: "" } }, [
                      _vm._v("Select Stock type")
                    ]),
                    _vm._v(" "),
                    _c("option", { attrs: { value: "in" } }, [
                      _vm._v("Stock In")
                    ]),
                    _vm._v(" "),
                    _c("option", { attrs: { value: "out" } }, [
                      _vm._v("Stock Out")
                    ])
                  ]
                )
              ]),
              _vm._v(" "),
              _c("span", {
                staticClass: "help is-danger",
                staticStyle: { color: "red" },
                domProps: { textContent: _vm._s(_vm.errors.get("stock_type")) }
              })
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "form-group row" }, [
            _vm.stock_type === "in"
              ? _c("div", { staticClass: "col-lg-6" }, [
                  _c("label", { staticClass: "col-form-label col-lg-4" }, [
                    _vm._v("Quantity")
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "input-group input-group-lg" }, [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model.number",
                          value: _vm.stock_in,
                          expression: "stock_in",
                          modifiers: { number: true }
                        }
                      ],
                      staticClass: "form-control",
                      attrs: {
                        type: "text",
                        placeholder: "Stock in",
                        "aria-describedby": "sizing-addon1"
                      },
                      domProps: { value: _vm.stock_in },
                      on: {
                        keydown: function($event) {
                          return _vm.errors.clear("stock_in")
                        },
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.stock_in = _vm._n($event.target.value)
                        },
                        blur: function($event) {
                          return _vm.$forceUpdate()
                        }
                      }
                    })
                  ]),
                  _vm._v(" "),
                  _c("span", {
                    staticClass: "help is-danger",
                    staticStyle: { color: "red" },
                    domProps: {
                      textContent: _vm._s(_vm.errors.get("stock_in"))
                    }
                  })
                ])
              : _vm._e(),
            _vm._v(" "),
            _vm.stock_type === "out"
              ? _c("div", { staticClass: "col-lg-6" }, [
                  _c("label", { staticClass: "col-form-label col-lg-4" }, [
                    _vm._v("Quantity")
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "input-group input-group-lg" }, [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model.number",
                          value: _vm.stock_out,
                          expression: "stock_out",
                          modifiers: { number: true }
                        }
                      ],
                      staticClass: "form-control",
                      attrs: {
                        type: "text",
                        placeholder: "Stock out",
                        "aria-describedby": "sizing-addon1"
                      },
                      domProps: { value: _vm.stock_out },
                      on: {
                        keydown: function($event) {
                          return _vm.errors.clear("stock_out")
                        },
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.stock_out = _vm._n($event.target.value)
                        },
                        blur: function($event) {
                          return _vm.$forceUpdate()
                        }
                      }
                    })
                  ]),
                  _vm._v(" "),
                  _c("span", {
                    staticClass: "help is-danger",
                    staticStyle: { color: "red" },
                    domProps: {
                      textContent: _vm._s(_vm.errors.get("stock_out"))
                    }
                  })
                ])
              : _vm._e()
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-lg-6" }, [
            _c("label", { staticClass: "col-form-label col-lg-4" }, [
              _vm._v("Branch name")
            ]),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "input-group input-group-lg" },
              [
                _c("vue-select", {
                  staticClass: "form-control",
                  attrs: {
                    label: "branch_name",
                    options: _vm.getBranches,
                    reduce: function(branch) {
                      return branch.id
                    }
                  },
                  on: {
                    keypress: function($event) {
                      return _vm.errors.clear("branch_id")
                    }
                  },
                  model: {
                    value: _vm.branch_id,
                    callback: function($$v) {
                      _vm.branch_id = $$v
                    },
                    expression: "branch_id"
                  }
                })
              ],
              1
            ),
            _vm._v(" "),
            _c("span", {
              staticClass: "help is-danger",
              staticStyle: { color: "red" },
              domProps: { textContent: _vm._s(_vm.errors.get("branch_id")) }
            })
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "form-group row" }, [
            _c("label", { staticClass: "col-form-label col-lg-4" }, [
              _vm._v("Remarks")
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "input-group input-group-lg" }, [
              _c("textarea", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.remarks,
                    expression: "remarks"
                  }
                ],
                staticClass: "form-control",
                attrs: { cols: "5" },
                domProps: { value: _vm.remarks },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.remarks = $event.target.value
                  }
                }
              })
            ])
          ]),
          _vm._v(" "),
          _c(
            "button",
            { staticClass: "btn btn-primary", attrs: { type: "submit" } },
            [_vm._v("Save")]
          )
        ]
      )
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card-header" }, [
      _c("h3", { staticClass: "card-title" }, [_vm._v("Inventory")])
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

/***/ "./resources/js/components/Transfer/MakeTransfer.vue":
/*!***********************************************************!*\
  !*** ./resources/js/components/Transfer/MakeTransfer.vue ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _MakeTransfer_vue_vue_type_template_id_07812fe2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MakeTransfer.vue?vue&type=template&id=07812fe2& */ "./resources/js/components/Transfer/MakeTransfer.vue?vue&type=template&id=07812fe2&");
/* harmony import */ var _MakeTransfer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MakeTransfer.vue?vue&type=script&lang=js& */ "./resources/js/components/Transfer/MakeTransfer.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _MakeTransfer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _MakeTransfer_vue_vue_type_template_id_07812fe2___WEBPACK_IMPORTED_MODULE_0__.render,
  _MakeTransfer_vue_vue_type_template_id_07812fe2___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Transfer/MakeTransfer.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ })

}]);